// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).face_style ?? 0)?.['type'] === 1) {
    if (((s as any).face_style ?? 0)?.['avatar_path'] === '') {
      (s as any).face_style['avatar_path'] = 'images/avatar.jpg';
    }
  } else {
    if (((s as any).glass ?? 0) >= 2) {
      // TODO-QSP: $result += 'stylish/'
    } else {
      // TODO-QSP: $result += 'stylish/'
      // TODO-QSP: $result += 'noglass/'
    }
    if ((!((s as any).pcs_eyecol ?? 0))) {
      // TODO-QSP: $result += 'blue/'
    } else {
      // TODO-QSP: $result += 'blue/'
      if (((s as any).pcs_eyecol ?? 0) === 2) {
        // TODO-QSP: $result += 'green/'
      } else {
        // TODO-QSP: $result += 'blue/'
        // TODO-QSP: $result += 'blue/'
      }
      if ((!((s as any).pcs_haircol ?? 0))) {
        // TODO-QSP: $result += 'black/'
      } else {
        // TODO-QSP: $result += 'brunette/'
        if (((s as any).pcs_haircol ?? 0) === 2) {
          // TODO-QSP: $result += 'red/'
        } else {
          // TODO-QSP: $result += 'blonde/'
          // TODO-QSP: $result += 'brunette/'
        }
        if (((s as any).pcs_hairlng ?? 0) > 400) {
          // TODO-QSP: $result += 'long/'
        } else {
          // TODO-QSP: $result += 'long/'
          if (((s as any).pcs_hairlng ?? 0) > 160) {
            // TODO-QSP: $result += 'medium/'
          } else {
            // TODO-QSP: $result += 'medium/'
            if (((s as any).pcs_hairlng ?? 0) > 30) {
              // TODO-QSP: $result += 'short/'
            } else {
              // TODO-QSP: $result += 'very_short/'
            }
            if (((s as any).pcs_hairbsh ?? 0) <= 0) {
              // TODO-QSP: $result += 'messy/'
            } else {
              if (((s as any).hbraids ?? 0) > 0) {
                // TODO-QSP: $result += 'braids/'
              } else {
                // TODO-QSP: $result += 'pigtails/'
                if (((s as any).curly ?? 0) > 0  &&  ((s as any).hbangs ?? 0) > 0  &&  ((s as any).hpingripw ?? 0) > 0) {
                  // TODO-QSP: $result += 'curly/'
                } else {
                  // TODO-QSP: $result += 'curly/'
                  if (((s as any).curly ?? 0) > 0  &&  ((s as any).hbangs ?? 0) > 0) {
                    // TODO-QSP: $result += 'curly/'
                  } else {
                    // TODO-QSP: $result += 'curly/'
                    if (((s as any).curly ?? 0) > 0  &&  ((s as any).hscrunchw ?? 0) > 0) {
                      // TODO-QSP: $result += 'curly/'
                    } else {
                      // TODO-QSP: $result += 'bangs/'
                      if (((s as any).hbangs ?? 0) > 0  &&  ((s as any).hscrunchw ?? 0) > 0) {
                        // TODO-QSP: $result += 'bangs/'
                      } else {
                        // TODO-QSP: $result += 'curly/'
                        if (((s as any).hbangs ?? 0) > 0) {
                          // TODO-QSP: $result += 'bangs/'
                        } else {
                          // TODO-QSP: $result += 'buns/'
                          if (((s as any).hscrunchw ?? 0) > 0) {
                            // TODO-QSP: $result += 'scrunch/'
                          } else {
                            // TODO-QSP: $result += 'normal/'
                          }
                          if (((s as any).pcs_hairlng ?? 0) > 30) {
                            if (((s as any).hbangs ?? 0) > 0) {
                              // TODO-QSP: $result += 'bangs/'
                            } else {
                              // TODO-QSP: $result += 'curly/'
                              // TODO-QSP: $result += 'normal/'
                            }
                          } else {
                            // TODO-QSP: $result += 'normal/'
                          }
                          if (((s as any).pcs_makeup ?? 0) === 1) {
                            // TODO-QSP: $result += 'no_makeup_'
                          } else {
                            // TODO-QSP: $result += 'vibrant_'
                            if (((s as any).pcs_makeup ?? 0) === 3) {
                              // TODO-QSP: $result += 'vibrant_'
                            } else {
                              // TODO-QSP: $result += 'vibrant_'
                              if (((s as any).pcs_makeup ?? 0) === 5) {
                                // TODO-QSP: $result += 'vibrant_'
                              } else {
                                // TODO-QSP: $result += 'vibrant_'
                                if (((s as any).pcs_makeup ?? 0) === 7) {
                                  // TODO-QSP: $result += 'vibrant_'
                                } else {
                                  // TODO-QSP: $result += 'smeared_'
                                }
                                if (((s as any).cumloc ?? 0)[11] === 1) {
                                  if (((s as any).cumvol ?? 0)[11] > 250) {
                                    // TODO-QSP: $result += 'decent'
                                  } else {
                                    // TODO-QSP: $result += 'decent'
                                    if (((s as any).cumvol ?? 0)[11] >= 20) {
                                      // TODO-QSP: $result += 'decent'
                                    } else {
                                      // TODO-QSP: $result += 'decent'
                                    }
                                    // TODO-QSP: $result += 'no_cum'
                                  }
                                  // TODO-QSP: $result += '.jpg'
                                } else {
                                  if (((s as any).pcs_haircol ?? 0) > 3) {
                                    // TODO-QSP: $result += 'colours'
                                    // TODO-QSP: jump 'skipsteps'
                                  }
                                  if (((s as any).pcs_hairlng ?? 0) > 400) {
                                    // TODO-QSP: $result += 'vlng'
                                  } else {
                                    // TODO-QSP: $result += 'lng'
                                    if (((s as any).pcs_hairlng ?? 0) > 160) {
                                      // TODO-QSP: $result += 'medlo'
                                    } else {
                                      // TODO-QSP: $result += 'med'
                                      if (((s as any).pcs_hairlng ?? 0) > 30) {
                                        // TODO-QSP: $result += 'short'
                                      } else {
                                        // TODO-QSP: $result += 'vshort'
                                      }
                                      // TODO-QSP: $result += '/'
                                      if (((s as any).pcs_hairlng ?? 0) > 80) {
                                        if (((s as any).hbraids ?? 0) > 0) {
                                          // TODO-QSP: $result += 'braids'
                                        } else {
                                          // TODO-QSP: $result += 'pigtails'
                                          if (((s as any).curly ?? 0) > 0  &&  ((s as any).hbangs ?? 0) > 0  &&  ((s as any).hpingripw ?? 0) > 0) {
                                            // TODO-QSP: $result += 'curly-bangs-buns'
                                          } else {
                                            // TODO-QSP: $result += 'curly-bangs-scrunch'
                                            if (((s as any).curly ?? 0) > 0  &&  ((s as any).hbangs ?? 0) > 0) {
                                              // TODO-QSP: $result += 'curly-bangs'
                                            } else {
                                              // TODO-QSP: $result += 'curly-buns'
                                              if (((s as any).curly ?? 0) > 0  &&  ((s as any).hscrunchw ?? 0) > 0) {
                                                // TODO-QSP: $result += 'curly-scrunch'
                                              } else {
                                                // TODO-QSP: $result += 'bangs-buns'
                                                if (((s as any).hbangs ?? 0) > 0  &&  ((s as any).hscrunchw ?? 0) > 0) {
                                                  // TODO-QSP: $result += 'bangs-scrunch'
                                                } else {
                                                  // TODO-QSP: $result += 'curly'
                                                  if (((s as any).hbangs ?? 0) > 0) {
                                                    // TODO-QSP: $result += 'bangs'
                                                  } else {
                                                    // TODO-QSP: $result += 'buns'
                                                    if (((s as any).hscrunchw ?? 0) > 0) {
                                                      // TODO-QSP: $result += 'scrunch'
                                                    } else {
                                                      // TODO-QSP: $result += 'normal'
                                                    }
                                                    if (((s as any).pcs_hairlng ?? 0) > 30) {
                                                      if (((s as any).hbangs ?? 0) > 0) {
                                                        // TODO-QSP: $result += 'bangs'
                                                      } else {
                                                        // TODO-QSP: $result += 'curly'
                                                        // TODO-QSP: $result += 'normal'
                                                      }
                                                    } else {
                                                      // TODO-QSP: $result += 'normal'
                                                    }
                                                    // TODO-QSP: :skipsteps
                                                    // TODO-QSP: $result += '/'
                                                    // TODO-QSP: $result += 'hcol<<pcs_haircol>>.jpg'
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

export const _face_image: LocationDef = {
  name: '_face_image',
  region: 'other',
  enter: enter,
};
