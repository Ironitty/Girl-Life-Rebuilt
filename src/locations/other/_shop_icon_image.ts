// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'allure') {
  } else {
    if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
    } else {
      if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
      } else {
        if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'eroto'  ||  ((s as any).locArgs?.[0] ?? 0) === 'sexshop') {
        } else {
          if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'fashionista') {
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'gm_school') {
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 'gm_maid') {
              } else {
                if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
                } else {
                  if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'materinstvo') {
                  } else {
                    if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'misc') {
                    } else {
                      if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'nerdvana') {
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 'scandalicious_swimwear') {
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const _shop_icon_image: LocationDef = {
  name: '_shop_icon_image',
  region: 'other',
  enter: enter,
};
