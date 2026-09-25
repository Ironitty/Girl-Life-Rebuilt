// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMiscOutfits(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).result ?? 0) + ('misc/');
  scene.build();
}

function enterAllureSwimsuit(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).result ?? 0) + ('allure/one/');
  scene.build();
}

function enterAllureBikinis(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).result ?? 0) + ('allure/two/');
  scene.build();
}

function enterScandaliciousSwimsuit(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).result ?? 0) + ('scandalicious/swim/one/');
  scene.build();
}

function enterScandaliciousBikinis(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).result ?? 0) + ('scandalicious/swim/two/');
  scene.build();
}

function enterDanilovichSwimsuit(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).result ?? 0) + ('danilovich/swimwear/');
  scene.build();
}

function enterMarketOutfits(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).result ?? 0) + ('market/clothes/');
  scene.build();
}

function enterMaterinstvoDress(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).result ?? 0) + ('mommy/');
  scene.build();
}

function enterNerdvanaBikinis(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).result ?? 0) + ('nerdvana/swim/two/');
  scene.build();
}

function enterNerdvanaSwimsuit(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).result ?? 0) + ('nerdvana/swim/one/');
  (s as any).temp_pcs_outfit_image_str_index = ((String(((s as any).locArgs?.[0] ?? 0)).indexOf(String('_'))) + 1);
  (s as any).temp_pcs_outfit_image_shop_name = (String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(((s as any).temp_pcs_outfit_image_str_index ?? 0) - 1)));
  (s as any).temp_pcs_outfit_image_class_name = (String(((s as any).locArgs?.[0] ?? 0)).slice((((s as any).temp_pcs_outfit_image_str_index ?? 0) + 1)-1));
  (s as any).result = ((s as any).result ?? 0) + (((s as any).temp_pcs_outfit_image_shop_name ?? 0) + '/' + ((s as any).temp_pcs_outfit_image_class_name ?? 0) + '/');
  (s as any).temp_pcs_outfit_image_str_index = undefined;
  (s as any).temp_pcs_outfit_image_shop_name = undefined;
  (s as any).temp_pcs_outfit_image_class_name = undefined;
  (s as any).result = ((s as any).result ?? 0) + ('' + ((s as any).locArgs?.[1] ?? 0) + '.jpg');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'images/pc/items/';
  const arg = s.locArg;
  switch (arg) {
    case 'misc_outfits':
      enterMiscOutfits(s, scene);
      break;
    case 'allure_swimsuit':
      enterAllureSwimsuit(s, scene);
      break;
    case 'allure_bikinis':
      enterAllureBikinis(s, scene);
      break;
    case 'scandalicious_swimsuit':
      enterScandaliciousSwimsuit(s, scene);
      break;
    case 'scandalicious_bikinis':
      enterScandaliciousBikinis(s, scene);
      break;
    case 'danilovich_swimsuit':
      enterDanilovichSwimsuit(s, scene);
      break;
    case 'market_outfits':
      enterMarketOutfits(s, scene);
      break;
    case 'materinstvo_dress':
      enterMaterinstvoDress(s, scene);
      break;
    case 'nerdvana_bikinis':
      enterNerdvanaBikinis(s, scene);
      break;
    case 'nerdvana_swimsuit':
      enterNerdvanaSwimsuit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _pcs_outfit_image: LocationDef = {
  name: '_pcs_outfit_image',
  region: 'other',
  enter: enter,
};
