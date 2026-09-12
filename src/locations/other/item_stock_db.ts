import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBeauty(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cosmetics';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cosmetics';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A collection of lotions, powders and potions that make you look Fabulous. This isn\'t witchcraft honest!';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 50;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1300;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Moisturiser';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Moisturiser';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cream that pampers and improves your skin condition.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 30;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 2100;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Lipbalm';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'lipbalm';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'To improve your looks and give your lips that extra oomph.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 30;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 127;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 4;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Plain false lashes';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'eyelash_fake';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'For a subtle eyelash enhancement for a naturally beautiful look.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1500;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 5;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Mink false lashes';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'eyelash_mink';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Luxurious eyelashes that make your eyes pop, screams glamour baby.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 3;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 900;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 6;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Razors';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'razor';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A basic necessity for all body health care, good for 25 shaves.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 25;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 350;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 7;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Sunblock';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'suncream';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Keeps the nasty sun from damaging your skin.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 500;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 8;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Deodorant';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'deodorant';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Helps prevents the obnoxious sweat pits condition.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 40;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 200;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 9;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Tampons';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tampons';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A discrete version that helps with that time of the month.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 400;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 10;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Sanitary napkins';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'sanitary_pads';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cheap product that helps with that time of month.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 100;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 11;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Shampoo';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'shampoo';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'To keep your hair luxurious and shiny.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 30;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 250;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 12;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Hair scrunchies';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'scrunchies';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Simple hair bands to do ponytails, pigtails and other styles.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 80;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 13;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Hair pins';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'kirbygrips';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'The old classic bobby pins for when you want to go the extra mile with hairstyles.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 100;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 14;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cosmetic Wipes';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'makeup_wipes';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Wipe away those sins and remove your make up.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 50;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 15;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Portable makeup';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'travel_makeup';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'For those moments when you need to touch up your make up.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 700;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 16;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Mouthwash';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mouthwash';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Keeps your breath fresh and minty!';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 17;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Comb';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'comb';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Prevents you getting entangled in your hair, and other hair disasters.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 18;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Compact Mirror';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'travel_mirror';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'For when you need touch up your make up, spy or send an SOS.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  // TODO-QSP: end
  scene.build();
}

function enterFood(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Regular food';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_basic';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Basic food, might be nourishing.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 80;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Diet food';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_diet';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Special diet food to help you lose weight.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 80;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Tea biscuits';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_biscuits';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A packet of biscuits to accompany your favourite beverage.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 400;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 4;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Bottle of water';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_water';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A bottle of water to quench your thirst.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 100;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 5;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Sandwich';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_sandwich';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A sandwich to fill those hunger cravings.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 100;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 6;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Bottle of wine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_wine';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A cheap bottle of wine.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 200;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  // TODO-QSP: end
  scene.build();
}

function enterHardware(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Dishwashing detergent';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'dish_soap';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cleans dishes effectively.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 500;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Clothing detergent';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'laundry_soap';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cleans and refreshes clothing.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 30;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 500;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Plates';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'dish_plates';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Durable and versatile plates.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 5;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 450;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 4;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Fabric';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'sewing_fabric';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'High-quality fabric for sewing projects.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 5;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 250;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 5;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Sewing kit';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'sewing_kit';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Convenient sewing kit for all your sewing and mending needs.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 500;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 6;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Umbrella';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'umbrella';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Reliable umbrella for rainy days.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  // TODO-QSP: end
  scene.build();
}

function enterChemist(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 1;
  if ((!((s as any).preziktype ?? 0))) {
    if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Condoms';
    if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'equipped_condoms';
    if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Male contraceptive';
    if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 5;
    if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
    if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 5;
    if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
    if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 500;
    if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  } else {
    if (((s as any).preziktype ?? 0) === 1  ||  ((s as any).preziktype ?? 0) === 2) {
      if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Condoms';
      if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'normal_condoms';
      if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Male contraceptive';
      if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 5;
      if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
      if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 5;
      if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
      if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 500;
      if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
    }
  }
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1  &&  ((s as any).loc_s ?? 0) === 'pav_pharmacy') {
    if (!(s as any).event_curr_aisle) (s as any).event_curr_aisle = {}; (s as any).event_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'gt \'pav_pharmacy\', \'buy_condoms\'';
  }
  (s as any).item_idx = 2;
  if (((s as any).therapistFuckedPussyStage ?? 0) < 2) {
    if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Birth Control Pills';
    if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'contraceptive_pill';
    if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'The female pill to reduce the risk of pregnancy';
    if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
    if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
    if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1870;
    if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  } else {
    if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
    if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
    if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'This section appears to be empty';
    if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
    if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
    if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
    if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  }
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1  &&  ((s as any).loc_s ?? 0) === 'pav_pharmacy') {
    if (!(s as any).event_curr_aisle) (s as any).event_curr_aisle = {}; (s as any).event_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'gt \'pav_pharmacy\', \'buy_birth_control\'';
  }
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Pregnancy test';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'pregnancy_test';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Simple wee here test';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 530;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1  &&  ((s as any).loc_s ?? 0) === 'pav_pharmacy') {
    if (!(s as any).event_curr_aisle) (s as any).event_curr_aisle = {}; (s as any).event_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'gt \'pav_pharmacy\', \'buy_preg_test\'';
  }
  (s as any).item_idx = 4;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Morning after pill';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'morning_after_pill';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'For those moments when you forgot you weren\'t on the pill';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 740;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1  &&  ((s as any).loc_s ?? 0) === 'pav_pharmacy') {
    if (!(s as any).event_curr_aisle) (s as any).event_curr_aisle = {}; (s as any).event_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'gt \'pav_pharmacy\', \'buy_morning_after\'';
  }
  (s as any).item_idx = 5;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Antibiotics';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'antibiotics';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'The modern day wonder cure';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 580;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 6;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Vitamins';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'vitamins';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Feeling down? Stay healthy with these supplements';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 30;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 130;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 7;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Painkillers';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'painkillers';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Make those painful blues fade away';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 50;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 435;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 8;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'chafing Cream';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'chafing_cream';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'To make tender skin soft again';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 372;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1  &&  ((s as any).loc_s ?? 0) === 'pav_pharmacy') {
    if (!(s as any).event_curr_aisle) (s as any).event_curr_aisle = {}; (s as any).event_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'gt \'pav_pharmacy\', \'ointment\'';
  }
  (s as any).item_idx = 9;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Lubricant';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'lubricant';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'For those intimate moments';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 30;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 145;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1  &&  ((s as any).loc_s ?? 0) === 'pav_pharmacy') {
    if (!(s as any).event_curr_aisle) (s as any).event_curr_aisle = {}; (s as any).event_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'gt \'pav_pharmacy\', \'buy_lube\'';
  }
  (s as any).item_idx = 10;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Lipbalm';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'lipbalm';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'To improve your looks and give your lips that extra oomph.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 30;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 127;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 11;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Weight loss pill';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'weight_loss_pill';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'When you do not have time to exercise try these Acme Weight Loss pills';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 12;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 248;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 12;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Tampons';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tampons';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A discrete version that helps with that time of the month.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 400;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 13;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Sanitary napkins';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'sanitary_pads';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cheap product that helps with that time of the month.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 100;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 14;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Enema kit';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'enema_kit';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'To clean up the mess from the mess';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1250;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 15;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Breast pump';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'breast_pump';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Extract and store milk for babies both old and young';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 2500;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 16;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Breastmilk bottle S';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'bottle_s';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'small bottle for your milk';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 3;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 930;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 17;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Breastmilk bottle M';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'bottle_m';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Medium storage bottle for your milk';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 2;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 930;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  if (((s as any).pcs_knows_nipplecream ?? 0) === 1) {
    (s as any).item_idx = 18;
    if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Nipple Cream';
    if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'nipple_cream';
    if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'to reduce the pain from breastfeeding';
    if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
    if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
    if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 600;
    if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  }
  // TODO-QSP: end
  scene.build();
}

function enterKiosk(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cigarettes';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'cigarettes';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Paper-wrapped tobacco for smoking, containing nicotine and harmful chemicals.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 115;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Fashion magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_fashion';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Glossy publications showcasing the latest trends, clothing, accessories, beauty tips, and celebrity styles, offering inspiration and insights for fashion enthusiasts.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Computer magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_computer';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Trendy tech publications featuring hardware, software, and industry insights for tech enthusiasts.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 4;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Biographical magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_biography';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Publications featuring in-depth profiles and life stories of notable individuals, offering inspiration and insight into their lives.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 5;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cooking magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_cooking';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Culinary publications filled with recipes, cooking tips, food photography, and gastronomic inspiration for home chefs and food enthusiasts.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 6;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Knitting magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_knitting';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A publication filled with knitting patterns, techniques, and creative ideas for knitting enthusiasts.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 7;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Fitness magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_fitness';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A publication offering workout routines, nutrition advice, and health tips for those seeking an active and healthy lifestyle.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 8;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Umbrella';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'umbrella';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Reliable umbrella for rainy days.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  // TODO-QSP: end
  scene.build();
}

function enterSexshop(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Lubricant';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'lubricant';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A lubricant for personal use.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 30;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 145;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Porn magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_porn';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'An adult magazine for mature audiences.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 5;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 400;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Vibrator';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'vibe';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A vibrating device for personal pleasure.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 800;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 4;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Butt plug';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'buttplug';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A sex toy that is designed to be inserted into the rectum for sexual pleasure';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 800;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 5;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = '15cm suction dildo';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'dildo_suction';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A suction-based dildo for intimate use.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 6;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Strap-on harness';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'strapon';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A strap-on harness securely holds a dildo for hands-free pleasure.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 500;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 7;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = '10cm dildo';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'dildo_small';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A smaller-sized dildo.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 800;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 8;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = '15cm dildo';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'dildo_normal';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A standard-sized dildo.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 850;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 9;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = '20cm dildo';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'dildo_big';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A big-sized dildo.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 900;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 10;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = '25cm dildo';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'dildo_large';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A sizable dildo.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 950;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 11;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = '30cm dildo';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'dildo_huge';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A very large dildo.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 12;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = '35cm dildo';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'dildo_enormous';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'An enormous dildo.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1100;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 13;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = '40cm dildo';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'dildo_gigantic';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A gigantic dildo.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1200;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  // TODO-QSP: end
  scene.build();
}

function enterTech(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Small TV';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tech_tv';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A compact television perfect for small spaces and small budgets.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 15000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Large Plasma TV';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'plasma_tv';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'An expansive plasma television with stunning picture quality.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 30000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Computer';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tech_computer';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A powerful computer for work and play.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 40000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 4;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Dead City video game';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tech_game_ds';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A survival game set in the ruins of a city overrun with zombies.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 800;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 5;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Dishwasher';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tech_dishwasher';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A modern dishwasher to simplify your kitchen chores.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 28000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 6;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Washing machine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tech_washing_machine';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A high-capacity washing machine for your laundry needs.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 30000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 7;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Camera';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tech_camera';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A versatile camera for capturing memories.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 8;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Mini camera disguised as a cigarette pack';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tech_hidden_cam';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A discreet mini camera cleverly concealed as a cigarette pack.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 100000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 9;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Webcam';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tech_webcam';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A high-quality webcam for video conferencing and streaming.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 2000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  // TODO-QSP: end
  scene.build();
}

function enterSports(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Skipping Rope';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'skipping_rope';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A versatile fitness accessory for cardio workouts and jumping rope exercises.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 500;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Hula Hoop';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'hula_hoop';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A fun and effective way to work on your core and balance with rhythmic waist spinning.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1500;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Book on yoga';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'book_yoga';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A comprehensive guide to yoga practices and techniques for enhancing physical and mental well-being.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1500;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 4;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Ice Skates';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'ice_skates';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Perfect for gliding gracefully on ice, whether for figure skating or recreational winter sports.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 3000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 5;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Skis';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'ski';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Essential equipment for downhill and cross-country skiing adventures on snow-covered slopes.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 4000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 6;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Refillable Water Bottle';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'refill_bottle';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'An eco-friendly and reusable water bottle for staying hydrated on the go, reducing plastic waste.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  // TODO-QSP: end
  scene.build();
}

function enterUni(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Regular food';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_basic';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Basic food, might be nourishing.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 80;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Regular food';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_basic';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Basic food, might be nourishing.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 80;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Tea biscuits';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_biscuits';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A packet of biscuits to accompany your favourite beverage.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 400;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Tea biscuits';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_biscuits';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A packet of biscuits to accompany your favourite beverage.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 400;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Bottle of water';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_water';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A bottle of water to quench your thirst.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 100;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Bottle of water';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_water';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A bottle of water to quench your thirst.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 100;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 4;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Sandwich';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_sandwich';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A sandwich to fill those hunger cravings.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 100;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Sandwich';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_sandwich';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A sandwich to fill those hunger cravings.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 100;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 5;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Bottle of wine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_wine';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A cheap bottle of wine.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 200;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 6;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Tampons';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tampons';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A discrete version that helps with that time of the month.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 400;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 400;
  (s as any).item_idx = 7;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Sanitary napkins';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'sanitary_pads';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cheap product that helps with that time of the month.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 100;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 8;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Shampoo';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'shampoo';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'To keep your hair luxurious and shiny.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 30;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 250;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  // TODO-QSP: end
  scene.build();
}

function enterMothershop(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Morning Sickness Pills';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'meds_morning_sick';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 12;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 80;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Pregnancy Ball';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'preg_ball';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 2475;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Pregnancy Brace';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'preg_brace';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 975;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 4;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Pregnancy Pillow';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'preg_pillow';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 2475;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  // TODO-QSP: end
  scene.build();
}

function enterMarket(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Dishwashing detergent';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'dish_soap';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cleans dishes effectively.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 225;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Clothing detergent';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'laundry_soap';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cleans and refreshes clothing.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 15;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 225;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Plates';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'dish_plates';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Durable and versatile plates.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 5;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 400;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 4;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cosmetics';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cosmetics';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A collection of lotions, powders and potions that make you look Fabulous. This isn\'t witchcraft honest!';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 25;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 600;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 5;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Razors';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'razor';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A basic necessity for all body health care, good for 25 shaves.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 100;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 6;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Tampons';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tampons';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A discrete version that helps with that time of the month.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 175;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 7;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Sanitary napkins';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'sanitary_pads';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cheap product that helps with that time of month.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 40;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 8;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Umbrella';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'umbrella';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Reliable umbrella for rainy days.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1000;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  // TODO-QSP: end
  scene.build();
}

function enterGadStore(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Tea biscuits';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_biscuits';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A packet of biscuits to accompany your favourite beverage.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 400;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cigarettes';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'cigarettes';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Paper-wrapped tobacco for smoking, containing nicotine and harmful chemicals.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 115;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Fashion magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_fashion';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Glossy publications showcasing the latest trends, clothing, accessories, beauty tips, and celebrity styles, offering inspiration and insights for fashion enthusiasts.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 4;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Computer magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_computer';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Trendy tech publications featuring hardware, software, and industry insights for tech enthusiasts.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 5;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Biographical magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_biography';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Publications featuring in-depth profiles and life stories of notable individuals, offering inspiration and insight into their lives.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 6;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cooking magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_cooking';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Culinary publications filled with recipes, cooking tips, food photography, and gastronomic inspiration for home chefs and food enthusiasts.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 7;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Knitting magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_knitting';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A publication filled with knitting patterns, techniques, and creative ideas for knitting enthusiasts.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 8;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Fitness magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_fitness';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A publication offering workout routines, nutrition advice, and health tips for those seeking an active and healthy lifestyle.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 9;
  if ((!((s as any).preziktype ?? 0))) {
    if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Condoms';
    if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'equipped_condoms';
    if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Male contraceptive';
    if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 5;
    if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
    if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 5;
    if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
    if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 500;
    if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  } else {
    if (((s as any).preziktype ?? 0) === 1  ||  ((s as any).preziktype ?? 0) === 2) {
      if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Condoms';
      if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'normal_condoms';
      if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Male contraceptive';
      if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 5;
      if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
      if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 5;
      if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
      if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 500;
      if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
    }
  }
  (s as any).item_idx = 10;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Shampoo';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'shampoo';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'To keep your hair luxurious and shiny.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 30;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 250;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 11;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Clothing detergent';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'laundry_soap';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cleans and refreshes clothing.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 30;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 600;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 12;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Razors';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'razor';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A basic necessity for all body health care, good for 25 shaves.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 25;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 350;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 13;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Tampons';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tampons';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A discrete version that helps with that time of the month.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 160;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  // TODO-QSP: end
  scene.build();
}

function enterGadMarketHunter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['were_met'] === 1) {
  }
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Regular food';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'food_basic';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Basic food, might be nourishing.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 80;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Mushrooms';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mushrooms';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A collection of mushrooms, might be nourishing.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 500;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Berries';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'berries';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A collection of berries, might be nourishing.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 500;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  // TODO-QSP: end
  scene.build();
}

function enterProstShop(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 1;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cigarettes';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'cigarettes';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Paper-wrapped tobacco for smoking, containing nicotine and harmful chemicals.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 115;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 2;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Fashion magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_fashion';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Glossy publications showcasing the latest trends, clothing, accessories, beauty tips, and celebrity styles, offering inspiration and insights for fashion enthusiasts.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 3;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Computer magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_computer';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Trendy tech publications featuring hardware, software, and industry insights for tech enthusiasts.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 4;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Biographical magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_biography';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Publications featuring in-depth profiles and life stories of notable individuals, offering inspiration and insight into their lives.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 5;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cooking magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_cooking';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Culinary publications filled with recipes, cooking tips, food photography, and gastronomic inspiration for home chefs and food enthusiasts.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 6;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Knitting magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_knitting';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A publication filled with knitting patterns, techniques, and creative ideas for knitting enthusiasts.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 7;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Fitness magazine';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'mag_fitness';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A publication offering workout routines, nutrition advice, and health tips for those seeking an active and healthy lifestyle.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 150;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 8;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Tampons';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'tampons';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A discrete version that helps with that time of the month.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 20;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 400;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  (s as any).item_idx = 9;
  if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Cosmetic Wipes';
  if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'makeup_wipes';
  if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Wipe away those sins and remove your make up.';
  if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
  if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
  if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 50;
  if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  if (((s as any).mc_inventory ?? 0)?.['umbrella'] === 0) {
    (s as any).item_idx = 10;
    if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Umbrella';
    if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'umbrella';
    if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Reliable umbrella for rainy days.';
    if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
    if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1;
    if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1000;
    if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  }
  // TODO-QSP: end
  scene.build();
}

function enterExperimentalTrials(s: GameState, scene: SceneBuilder): void {
  (s as any).item_idx = 0;
  if (((s as any).experimentQW ?? 0)?.['times_participated_1'] > 0) {
    (s as any).item_idx = ((s as any).item_idx ?? 0) + (1);
    if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_tits_big', 'body_tits_huge')) {
      if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Breast Cream';
    } else {
      if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = '<b>Breast Cream</b>';
    }
    if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'breastcream';
    if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A cream that enhances your breast mass.';
    if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
    if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
    if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 3000;
    if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  }
  if (((s as any).experimentQW ?? 0)?.['times_participated_2'] > 0) {
    (s as any).item_idx = ((s as any).item_idx ?? 0) + (1);
    if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Hair extension shampoo';
    if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'hair_extensioncream';
    if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A shampoo that lengthens your hair.';
    if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
    if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
    if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 3000;
    if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  }
  if (((s as any).experimentQW ?? 0)?.['times_participated_3'] > 0) {
    (s as any).item_idx = ((s as any).item_idx ?? 0) + (1);
    if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Aphrodesiac pills';
    if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'aphrodisiac';
    if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A pill that enhances your libido';
    if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
    if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
    if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 1500;
    if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
  }
  if (((s as any).experimentQW ?? 0)?.['times_participated_4'] > 0) {
    (s as any).item_idx = ((s as any).item_idx ?? 0) + (1);
    if (!(s as any).item_curr_aisle) (s as any).item_curr_aisle = {}; (s as any).item_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'Butt growth injection';
    if (!(s as any).var_curr_aisle) (s as any).var_curr_aisle = {}; (s as any).var_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'butt_injection';
    if (!(s as any).desc_curr_aisle) (s as any).desc_curr_aisle = {}; (s as any).desc_curr_aisle['' + String((s as any).item_idx || '') + ''] = 'A patented KBI shot that enhances your butt mass.';
    if (!(s as any).quantity_curr_aisle) (s as any).quantity_curr_aisle = {}; (s as any).quantity_curr_aisle['' + String((s as any).item_idx || '') + ''] = 10;
    if (!(s as any).max_curr_aisle) (s as any).max_curr_aisle = {}; (s as any).max_curr_aisle['' + String((s as any).item_idx || '') + ''] = 0;
    if (!(s as any).cost_curr_aisle) (s as any).cost_curr_aisle = {}; (s as any).cost_curr_aisle['' + String((s as any).item_idx || '') + ''] = 3000;
    if (!(s as any).img_curr_aisle) (s as any).img_curr_aisle = {}; (s as any).img_curr_aisle['' + String((s as any).item_idx || '') + ''] = '';
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
