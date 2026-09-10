// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'city_center') {
  } else {
    if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(16))) === 'city_industrial') {
    } else {
      if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(14))) === 'city_suburbs') {
      } else {
        if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'city_lake') {
        } else {
          if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(14))) === 'city_redlight') {
          } else {
            if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'uni_') {
            } else {
              if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(7))) === 'pushkin') {
              } else {
                if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(16))) === 'pav_residential') {
                } else {
                  if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'pav_complex') {
                  } else {
                    if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'pav_market') {
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 'metro') {
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 'bus') {
                        } else {
                          // TODO-QSP: else:
                        }
                        // TODO-QSP: *p $map_nav
                        // TODO-QSP: *p '<img src="images/system/map/<<$map_img>>">'
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

export const map_view: LocationDef = {
  name: 'map_view',
  region: 'other',
  enter: enter,
};
