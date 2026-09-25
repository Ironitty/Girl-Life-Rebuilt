// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).face_style ?? 0)?.['type'] === 1) {
    if (((s as any).face_style ?? 0)?.['avatar_path'] === '') {
      ((s as any).face_style = (s as any).face_style ?? {})['avatar_path'] = 'images/avatar.jpg';
    }
    (s as any).result = (((s as any).face_style ?? 0)?.['avatar_path']);
  } else {
    if (((s as any).face_style ?? 0)?.['type'] === 2) {
      (s as any).result = 'images/pc/body/head/';
      if (((s as any).glass ?? 0) >= 2) {
        (s as any).result = ((s as any).result ?? 0) + ('stylish/');
      } else {
        if (((s as any).glass ?? 0) === 1) {
          (s as any).result = ((s as any).result ?? 0) + ('stylish/');
        } else {
          (s as any).result = ((s as any).result ?? 0) + ('noglass/');
        }
      }
      if ((!((s as any).pcs_eyecol ?? 0))) {
        (s as any).result = ((s as any).result ?? 0) + ('blue/');
      } else {
        if (((s as any).pcs_eyecol ?? 0) === 1) {
          (s as any).result = ((s as any).result ?? 0) + ('blue/');
        } else {
          if (((s as any).pcs_eyecol ?? 0) === 2) {
            (s as any).result = ((s as any).result ?? 0) + ('green/');
          } else {
            if (((s as any).pcs_eyecol ?? 0) === 3) {
              (s as any).result = ((s as any).result ?? 0) + ('blue/');
            } else {
              (s as any).result = ((s as any).result ?? 0) + ('blue/');
            }
          }
        }
      }
      if ((!((s as any).pcs_haircol ?? 0))) {
        (s as any).result = ((s as any).result ?? 0) + ('black/');
      } else {
        if (((s as any).pcs_haircol ?? 0) === 1) {
          (s as any).result = ((s as any).result ?? 0) + ('brunette/');
        } else {
          if (((s as any).pcs_haircol ?? 0) === 2) {
            (s as any).result = ((s as any).result ?? 0) + ('red/');
          } else {
            if (((s as any).pcs_haircol ?? 0) === 3) {
              (s as any).result = ((s as any).result ?? 0) + ('blonde/');
            } else {
              (s as any).result = ((s as any).result ?? 0) + ('brunette/');
            }
          }
        }
      }
      if (((s as any).pcs_hairlng ?? 0) > 400) {
        (s as any).result = ((s as any).result ?? 0) + ('long/');
      } else {
        if (((s as any).pcs_hairlng ?? 0) > 260) {
          (s as any).result = ((s as any).result ?? 0) + ('long/');
        } else {
          if (((s as any).pcs_hairlng ?? 0) > 160) {
            (s as any).result = ((s as any).result ?? 0) + ('medium/');
          } else {
            if (((s as any).pcs_hairlng ?? 0) > 80) {
              (s as any).result = ((s as any).result ?? 0) + ('medium/');
            } else {
              if (((s as any).pcs_hairlng ?? 0) > 30) {
                (s as any).result = ((s as any).result ?? 0) + ('short/');
              } else {
                (s as any).result = ((s as any).result ?? 0) + ('very_short/');
              }
            }
          }
        }
      }
      if (((s as any).pcs_hairbsh ?? 0) <= 0) {
        (s as any).result = ((s as any).result ?? 0) + ('messy/');
      } else {
        if (((s as any).pcs_hairlng ?? 0) > 80) {
          if (((s as any).hbraids ?? 0) > 0) {
            (s as any).result = ((s as any).result ?? 0) + ('braids/');
          } else {
            if (((s as any).hpigtail ?? 0) > 0) {
              (s as any).result = ((s as any).result ?? 0) + ('pigtails/');
            } else {
              if (((s as any).curly ?? 0) > 0  &&  ((s as any).hbangs ?? 0) > 0  &&  ((s as any).hpingripw ?? 0) > 0) {
                (s as any).result = ((s as any).result ?? 0) + ('curly/');
              } else {
                if (((s as any).curly ?? 0) > 0  &&  ((s as any).hbangs ?? 0) > 0  &&  ((s as any).hscrunchw ?? 0) > 0) {
                  (s as any).result = ((s as any).result ?? 0) + ('curly/');
                } else {
                  if (((s as any).curly ?? 0) > 0  &&  ((s as any).hbangs ?? 0) > 0) {
                    (s as any).result = ((s as any).result ?? 0) + ('curly/');
                  } else {
                    if (((s as any).curly ?? 0) > 0  &&  ((s as any).hpingripw ?? 0) > 0) {
                      (s as any).result = ((s as any).result ?? 0) + ('curly/');
                    } else {
                      if (((s as any).curly ?? 0) > 0  &&  ((s as any).hscrunchw ?? 0) > 0) {
                        (s as any).result = ((s as any).result ?? 0) + ('curly/');
                      } else {
                        if (((s as any).hbangs ?? 0) > 0  &&  ((s as any).hpingripw ?? 0) > 0) {
                          (s as any).result = ((s as any).result ?? 0) + ('bangs/');
                        } else {
                          if (((s as any).hbangs ?? 0) > 0  &&  ((s as any).hscrunchw ?? 0) > 0) {
                            (s as any).result = ((s as any).result ?? 0) + ('bangs/');
                          } else {
                            if (((s as any).curly ?? 0) > 0) {
                              (s as any).result = ((s as any).result ?? 0) + ('curly/');
                            } else {
                              if (((s as any).hbangs ?? 0) > 0) {
                                (s as any).result = ((s as any).result ?? 0) + ('bangs/');
                              } else {
                                if (((s as any).hpingripw ?? 0) > 0) {
                                  (s as any).result = ((s as any).result ?? 0) + ('buns/');
                                } else {
                                  if (((s as any).hscrunchw ?? 0) > 0) {
                                    (s as any).result = ((s as any).result ?? 0) + ('scrunch/');
                                  } else {
                                    (s as any).result = ((s as any).result ?? 0) + ('normal/');
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
        } else {
          if (((s as any).pcs_hairlng ?? 0) > 30) {
            if (((s as any).hbangs ?? 0) > 0) {
              (s as any).result = ((s as any).result ?? 0) + ('bangs/');
            } else {
              if (((s as any).curly ?? 0) > 0) {
                (s as any).result = ((s as any).result ?? 0) + ('curly/');
              } else {
                (s as any).result = ((s as any).result ?? 0) + ('normal/');
              }
            }
          } else {
            (s as any).result = ((s as any).result ?? 0) + ('normal/');
          }
        }
      }
      if (((s as any).pcs_makeup ?? 0) === 1) {
        (s as any).result = ((s as any).result ?? 0) + ('no_makeup_');
      } else {
        if (((s as any).pcs_makeup ?? 0) === 2) {
          (s as any).result = ((s as any).result ?? 0) + ('vibrant_');
        } else {
          if (((s as any).pcs_makeup ?? 0) === 3) {
            (s as any).result = ((s as any).result ?? 0) + ('vibrant_');
          } else {
            if (((s as any).pcs_makeup ?? 0) === 4) {
              (s as any).result = ((s as any).result ?? 0) + ('vibrant_');
            } else {
              if (((s as any).pcs_makeup ?? 0) === 5) {
                (s as any).result = ((s as any).result ?? 0) + ('vibrant_');
              } else {
                if (((s as any).pcs_makeup ?? 0) === 6) {
                  (s as any).result = ((s as any).result ?? 0) + ('vibrant_');
                } else {
                  if (((s as any).pcs_makeup ?? 0) === 7) {
                    (s as any).result = ((s as any).result ?? 0) + ('vibrant_');
                  } else {
                    (s as any).result = ((s as any).result ?? 0) + ('smeared_');
                  }
                }
              }
            }
          }
        }
      }
      if (((s as any).cumloc ?? 0)[11] === 1) {
        if (((s as any).cumvol ?? 0)[11] > 250) {
          (s as any).result = ((s as any).result ?? 0) + ('decent');
        } else {
          if (((s as any).cumvol ?? 0)[11] > 100) {
            (s as any).result = ((s as any).result ?? 0) + ('decent');
          } else {
            if (((s as any).cumvol ?? 0)[11] >= 20) {
              (s as any).result = ((s as any).result ?? 0) + ('decent');
            } else {
              (s as any).result = ((s as any).result ?? 0) + ('decent');
            }
          }
        }
      } else {
        (s as any).result = ((s as any).result ?? 0) + ('no_cum');
      }
      (s as any).result = ((s as any).result ?? 0) + ('.jpg');
    } else {
      while (true) {
        (s as any).result = 'images/pc/body/hairstyles/';
        if (((s as any).pcs_haircol ?? 0) > 3) {
          (s as any).result = ((s as any).result ?? 0) + ('colours');
          break;
        }
        if (((s as any).pcs_hairlng ?? 0) > 400) {
          (s as any).result = ((s as any).result ?? 0) + ('vlng');
        } else {
          if (((s as any).pcs_hairlng ?? 0) > 260) {
            (s as any).result = ((s as any).result ?? 0) + ('lng');
          } else {
            if (((s as any).pcs_hairlng ?? 0) > 160) {
              (s as any).result = ((s as any).result ?? 0) + ('medlo');
            } else {
              if (((s as any).pcs_hairlng ?? 0) > 80) {
                (s as any).result = ((s as any).result ?? 0) + ('med');
              } else {
                if (((s as any).pcs_hairlng ?? 0) > 30) {
                  (s as any).result = ((s as any).result ?? 0) + ('short');
                } else {
                  (s as any).result = ((s as any).result ?? 0) + ('vshort');
                }
              }
            }
          }
        }
        (s as any).result = ((s as any).result ?? 0) + ('/');
        if (((s as any).pcs_hairlng ?? 0) > 80) {
          if (((s as any).hbraids ?? 0) > 0) {
            (s as any).result = ((s as any).result ?? 0) + ('braids');
          } else {
            if (((s as any).hpigtail ?? 0) > 0) {
              (s as any).result = ((s as any).result ?? 0) + ('pigtails');
            } else {
              if (((s as any).curly ?? 0) > 0  &&  ((s as any).hbangs ?? 0) > 0  &&  ((s as any).hpingripw ?? 0) > 0) {
                (s as any).result = ((s as any).result ?? 0) + ('curly-bangs-buns');
              } else {
                if (((s as any).curly ?? 0) > 0  &&  ((s as any).hbangs ?? 0) > 0  &&  ((s as any).hscrunchw ?? 0) > 0) {
                  (s as any).result = ((s as any).result ?? 0) + ('curly-bangs-scrunch');
                } else {
                  if (((s as any).curly ?? 0) > 0  &&  ((s as any).hbangs ?? 0) > 0) {
                    (s as any).result = ((s as any).result ?? 0) + ('curly-bangs');
                  } else {
                    if (((s as any).curly ?? 0) > 0  &&  ((s as any).hpingripw ?? 0) > 0) {
                      (s as any).result = ((s as any).result ?? 0) + ('curly-buns');
                    } else {
                      if (((s as any).curly ?? 0) > 0  &&  ((s as any).hscrunchw ?? 0) > 0) {
                        (s as any).result = ((s as any).result ?? 0) + ('curly-scrunch');
                      } else {
                        if (((s as any).hbangs ?? 0) > 0  &&  ((s as any).hpingripw ?? 0) > 0) {
                          (s as any).result = ((s as any).result ?? 0) + ('bangs-buns');
                        } else {
                          if (((s as any).hbangs ?? 0) > 0  &&  ((s as any).hscrunchw ?? 0) > 0) {
                            (s as any).result = ((s as any).result ?? 0) + ('bangs-scrunch');
                          } else {
                            if (((s as any).curly ?? 0) > 0) {
                              (s as any).result = ((s as any).result ?? 0) + ('curly');
                            } else {
                              if (((s as any).hbangs ?? 0) > 0) {
                                (s as any).result = ((s as any).result ?? 0) + ('bangs');
                              } else {
                                if (((s as any).hpingripw ?? 0) > 0) {
                                  (s as any).result = ((s as any).result ?? 0) + ('buns');
                                } else {
                                  if (((s as any).hscrunchw ?? 0) > 0) {
                                    (s as any).result = ((s as any).result ?? 0) + ('scrunch');
                                  } else {
                                    (s as any).result = ((s as any).result ?? 0) + ('normal');
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
        } else {
          if (((s as any).pcs_hairlng ?? 0) > 30) {
            if (((s as any).hbangs ?? 0) > 0) {
              (s as any).result = ((s as any).result ?? 0) + ('bangs');
            } else {
              if (((s as any).curly ?? 0) > 0) {
                (s as any).result = ((s as any).result ?? 0) + ('curly');
              } else {
                (s as any).result = ((s as any).result ?? 0) + ('normal');
              }
            }
          } else {
            (s as any).result = ((s as any).result ?? 0) + ('normal');
          }
        }
        break;
      }
      // LABEL: skipsteps
      (s as any).result = ((s as any).result ?? 0) + ('/');
      (s as any).result = ((s as any).result ?? 0) + ('hcol' + ((s as any).pcs_haircol ?? 0) + '.jpg');
    }
  }
  scene.build();
}

export const _face_image: LocationDef = {
  name: '_face_image',
  region: 'other',
  enter: enter,
};
