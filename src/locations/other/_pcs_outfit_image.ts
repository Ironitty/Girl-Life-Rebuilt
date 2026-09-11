import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMiscOutfits(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += 'misc/'
  scene.build();
}

function enterAllureSwimsuit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += 'allure/one/'
  scene.build();
}

function enterAllureBikinis(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += 'allure/two/'
  scene.build();
}

function enterScandaliciousSwimsuit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += 'scandalicious/swim/one/'
  scene.build();
}

function enterScandaliciousBikinis(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += 'scandalicious/swim/two/'
  scene.build();
}

function enterDanilovichSwimsuit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += 'danilovich/swimwear/'
  scene.build();
}

function enterMarketOutfits(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += 'market/clothes/'
  scene.build();
}

function enterMaterinstvoDress(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += 'mommy/'
  scene.build();
}

function enterNerdvanaBikinis(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += 'nerdvana/swim/two/'
  scene.build();
}

function enterNerdvanaSwimsuit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += 'nerdvana/swim/one/'
  (s as any).temp_pcs_outfit_image_str_index = qspUntranslated(s, "instr(ARGS[0], '_')", { location: "_pcs_outfit_image" });
  // TODO-QSP: $result += $temp_pcs_outfit_image_shop_name + '/' + $temp_pcs_outfit_image_class_name + '/'
  // TODO-QSP: end
  // TODO-QSP: $result += '<<ARGS[1]>>.jpg'
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
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
