// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'gm_dress') {
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'misc_outfits') {
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'cats_dress') {
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'cats_outfits') {
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'flamingos_outfits') {
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'flamingos_dress') {
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 'coco_outfits') {
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 'coco_dress') {
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 'fashionista_dress') {
                  } else {
                    if (((s as any).locArgs?.[0] ?? 0) === 'fashionista_outfits') {
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 'moncheri_gown') {
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 'moncheri_dress') {
                        } else {
                          if (((s as any).locArgs?.[0] ?? 0) === 'gm_office') {
                          } else {
                            if (((s as any).locArgs?.[0] ?? 0) === 'gm_school') {
                            } else {
                              if (((s as any).locArgs?.[0] ?? 0) === 'danilovich_outfits') {
                              } else {
                                if (((s as any).locArgs?.[0] ?? 0) === 'eroto_dress') {
                                } else {
                                  if (((s as any).locArgs?.[0] ?? 0) === 'eroto_outfits') {
                                  } else {
                                    if (((s as any).locArgs?.[0] ?? 0) === 'eroto_strip') {
                                    } else {
                                      if (((s as any).locArgs?.[0] ?? 0) === 'salacious_outfits') {
                                      } else {
                                        if (((s as any).locArgs?.[0] ?? 0) === 'salacious_dress') {
                                        } else {
                                          if (((s as any).locArgs?.[0] ?? 0) === 'gm_maid') {
                                          } else {
                                            if (((s as any).locArgs?.[0] ?? 0) === 'gm_server') {
                                            } else {
                                              if (((s as any).locArgs?.[0] ?? 0) === 'allure_swimsuit') {
                                              } else {
                                                if (((s as any).locArgs?.[0] ?? 0) === 'allure_bikinis') {
                                                } else {
                                                  if (((s as any).locArgs?.[0] ?? 0) === 'fancy_burlesque') {
                                                  } else {
                                                    if (((s as any).locArgs?.[0] ?? 0) === 'dolls_dress') {
                                                    } else {
                                                      if (((s as any).locArgs?.[0] ?? 0) === 'dolls_outfits') {
                                                      } else {
                                                        if (((s as any).locArgs?.[0] ?? 0) === 'bomba_dress') {
                                                        } else {
                                                          if (((s as any).locArgs?.[0] ?? 0) === 'bomba_outfits') {
                                                          } else {
                                                            if (((s as any).locArgs?.[0] ?? 0) === 'scandalicious_dress') {
                                                            } else {
                                                              if (((s as any).locArgs?.[0] ?? 0) === 'scandalicious_outfits') {
                                                              } else {
                                                                if (((s as any).locArgs?.[0] ?? 0) === 'scandalicious_swimsuit') {
                                                                } else {
                                                                  if (((s as any).locArgs?.[0] ?? 0) === 'scandalicious_bikinis') {
                                                                  } else {
                                                                    if (((s as any).locArgs?.[0] ?? 0) === 'danilovich_swimsuit') {
                                                                    } else {
                                                                      if (((s as any).locArgs?.[0] ?? 0) === 'market_outfits') {
                                                                      } else {
                                                                        if (((s as any).locArgs?.[0] ?? 0) === 'materinstvo_dress') {
                                                                        } else {
                                                                          if (((s as any).locArgs?.[0] ?? 0) === 'nerdvana_cosplay') {
                                                                          } else {
                                                                            if (((s as any).locArgs?.[0] ?? 0) === 'nerdvana_outfits') {
                                                                            } else {
                                                                              if (((s as any).locArgs?.[0] ?? 0) === 'nerdvana_bikinis') {
                                                                              } else {
                                                                                if (((s as any).locArgs?.[0] ?? 0) === 'nerdvana_swimsuit') {
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

export const _clothing_image: LocationDef = {
  name: '_clothing_image',
  region: 'other',
  enter: enter,
};
