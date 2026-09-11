import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMiscOutfits(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += 'misc/'
  if (((s as any).locArgs?.[0] ?? 0) === 'allure_swimsuit') {
    // TODO-QSP: $result += 'allure/one/'
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'allure_bikinis') {
      // TODO-QSP: $result += 'allure/two/'
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'scandalicious_swimsuit') {
        // TODO-QSP: $result += 'scandalicious/swim/one/'
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'scandalicious_bikinis') {
          // TODO-QSP: $result += 'scandalicious/swim/two/'
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'danilovich_swimsuit') {
            // TODO-QSP: $result += 'danilovich/swimwear/'
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'market_outfits') {
              // TODO-QSP: $result += 'market/clothes/'
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 'materinstvo_dress') {
                // TODO-QSP: $result += 'mommy/'
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 'nerdvana_bikinis') {
                  // TODO-QSP: $result += 'nerdvana/swim/two/'
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 'nerdvana_swimsuit') {
                    // TODO-QSP: $result += 'nerdvana/swim/one/'
                  } else {
                    (s as any).temp_pcs_outfit_image_str_index = qspUntranslated(s, "instr(ARGS[0], '_')", { location: "_pcs_outfit_image" });
                    // TODO-QSP: $result += $temp_pcs_outfit_image_shop_name + '/' + $temp_pcs_outfit_image_class_name + '/'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: $result += '<<ARGS[1]>>.jpg'
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'misc_outfits':
      enterMiscOutfits(s, scene);
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
