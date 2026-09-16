// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'all') {
    (s as any).result = 'images/system/icons/clothing/all_outfits.png';
  } else {
    if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'allure') {
      (s as any).result = 'images/locations/city/residential/lake/allure/shop_name.png';
    } else {
      if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'bomba') {
        (s as any).result = 'images/locations/pushkin/bomba/shop_name.png';
      } else {
        if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
          (s as any).result = 'images/locations/city/citycenter/mall/pussycat.png';
        } else {
          if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'coco') {
            (s as any).result = 'images/locations/pavlovsk/coco/shop_name.png';
          } else {
            if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
              (s as any).result = 'images/locations/city/citycenter/mall/sports.png';
            } else {
              if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'dolls') {
                (s as any).result = 'images/locations/city/island/dolls/shop_name.png';
              } else {
                if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'eroto'  ||  ((s as any).locArgs?.[0] ?? 0) === 'sexshop') {
                  (s as any).result = 'images/locations/city/redlight/erotomaniac/shop_name.png';
                } else {
                  if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'fancy') {
                    (s as any).result = 'images/locations/pushkin/fancypancy/shop_name.png';
                  } else {
                    if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'fashionista') {
                      (s as any).result = 'images/locations/city/citycenter/mall/fashionista.png';
                    } else {
                      if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'flamingos') {
                        (s as any).result = 'images/locations/city/island/flamingos/shop_name.png';
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 'gm_school') {
                          (s as any).result = 'images/pc/items/gm/school.png';
                        } else {
                          if (((s as any).locArgs?.[0] ?? 0) === 'gm_office') {
                            (s as any).result = 'images/pc/items/gm/officewear.png';
                          } else {
                            if (((s as any).locArgs?.[0] ?? 0) === 'gm_maid') {
                              (s as any).result = 'images/pc/items/gm/maid.png';
                            } else {
                              if (((s as any).locArgs?.[0] ?? 0) === 'gm_server') {
                                (s as any).result = 'images/pc/items/gm/server.png';
                              } else {
                                if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
                                  (s as any).result = 'images/locations/city/citycenter/mall/gm.png';
                                } else {
                                  if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'lusso') {
                                    (s as any).result = 'images/locations/city/citycenter/mall/Lusso.png';
                                  } else {
                                    if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'materinstvo') {
                                      (s as any).result = 'images/locations/city/citycenter/mall/mommy.png';
                                    } else {
                                      if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'market') {
                                        (s as any).result = 'images/pc/items/market/market.png';
                                      } else {
                                        if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'misc') {
                                          (s as any).result = 'images/pc/items/misc/misc.png';
                                        } else {
                                          if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
                                            (s as any).result = 'images/locations/city/citycenter/mall/moncheri.png';
                                          } else {
                                            if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'nerdvana') {
                                              (s as any).result = 'images/locations/city/island/nerdvana/shop_name.png';
                                            } else {
                                              if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'salacious'  ||  ((s as any).locArgs?.[0] ?? 0) === 'exhibitshop') {
                                                (s as any).result = 'images/locations/pushkin/exhibitshop/shop_name.png';
                                              } else {
                                                if (((s as any).locArgs?.[0] ?? 0) === 'scandalicious_swimwear') {
                                                  (s as any).result = 'images/locations/city/citycenter/mall/scandalicious_swimwear.png';
                                                } else {
                                                  if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(13))) === 'scandalicious') {
                                                    (s as any).result = 'images/locations/city/citycenter/mall/scandalicious.png';
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
  }
  scene.build();
}

export const _shop_icon_image: LocationDef = {
  name: '_shop_icon_image',
  region: 'other',
  enter: enter,
};
