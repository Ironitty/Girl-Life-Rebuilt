import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetClass(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_bmi ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).strenbuf ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = ((s as any).pregChem ?? 0);
  }
  if (Number((s as any).locArgs?.[3] ?? 0) < 2184) {
    (s as any).result = 0;
  } else {
    if (Number((s as any).locArgs?.[3] ?? 0) < 2688) {
      (s as any).result = 1000;
    } else {
      if (Number((s as any).locArgs?.[3] ?? 0) < 3192) {
        (s as any).result = 2000;
      } else {
        if (Number((s as any).locArgs?.[3] ?? 0) < 3696) {
          (s as any).result = 3000;
        } else {
          if (Number((s as any).locArgs?.[3] ?? 0) < 4200) {
            (s as any).result = 4000;
          } else {
            if (Number((s as any).locArgs?.[3] ?? 0) < 4704) {
              (s as any).result = 5000;
            } else {
              if (Number((s as any).locArgs?.[3] ?? 0) < 5208) {
                (s as any).result = 6000;
              } else {
                if (Number((s as any).locArgs?.[3] ?? 0) < 5712) {
                  (s as any).result = 7000;
                } else {
                  if (Number((s as any).locArgs?.[3] ?? 0) < 6216) {
                    (s as any).result = 8000;
                  } else {
                    (s as any).result = 9000;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 16) {
    (s as any).result = ((s as any).result ?? 0) + (0);
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) < 19) {
      (s as any).result = ((s as any).result ?? 0) + (100);
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) < 22) {
        (s as any).result = ((s as any).result ?? 0) + (200);
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) < 25) {
          (s as any).result = ((s as any).result ?? 0) + (300);
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) < 30) {
            (s as any).result = ((s as any).result ?? 0) + (400);
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) < 35) {
              (s as any).result = ((s as any).result ?? 0) + (500);
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) < 40) {
                (s as any).result = ((s as any).result ?? 0) + (600);
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) < 45) {
                  (s as any).result = ((s as any).result ?? 0) + (700);
                } else {
                  (s as any).result = ((s as any).result ?? 0) + (800);
                }
              }
            }
          }
        }
      }
    }
  }
  if (Number((s as any).locArgs?.[2] ?? 0) <= 5) {
    (s as any).result = ((s as any).result ?? 0) + (0);
  } else {
    if (Number((s as any).locArgs?.[2] ?? 0) <= 10) {
      (s as any).result = ((s as any).result ?? 0) + (1);
    } else {
      if (Number((s as any).locArgs?.[2] ?? 0) <= 15) {
        (s as any).result = ((s as any).result ?? 0) + (2);
      } else {
        if (Number((s as any).locArgs?.[2] ?? 0) <= 25) {
          (s as any).result = ((s as any).result ?? 0) + (3);
        } else {
          if (Number((s as any).locArgs?.[2] ?? 0) <= 35) {
            (s as any).result = ((s as any).result ?? 0) + (4);
          } else {
            if (Number((s as any).locArgs?.[2] ?? 0) <= 50) {
              (s as any).result = ((s as any).result ?? 0) + (5);
            } else {
              if (Number((s as any).locArgs?.[2] ?? 0) <= 70) {
                (s as any).result = ((s as any).result ?? 0) + (6);
              } else {
                if (Number((s as any).locArgs?.[2] ?? 0) <= 100) {
                  (s as any).result = ((s as any).result ?? 0) + (7);
                } else {
                  if (Number((s as any).locArgs?.[2] ?? 0) <= 110) {
                    (s as any).result = ((s as any).result ?? 0) + (8);
                  } else {
                    if (Number((s as any).locArgs?.[2] ?? 0) <= 120) {
                      (s as any).result = ((s as any).result ?? 0) + (9);
                    } else {
                      if (Number((s as any).locArgs?.[2] ?? 0) <= 130) {
                        (s as any).result = ((s as any).result ?? 0) + (10);
                      } else {
                        if (Number((s as any).locArgs?.[2] ?? 0) <= 140) {
                          (s as any).result = ((s as any).result ?? 0) + (11);
                        } else {
                          if (Number((s as any).locArgs?.[2] ?? 0) <= 150) {
                            (s as any).result = ((s as any).result ?? 0) + (12);
                          } else {
                            if (Number((s as any).locArgs?.[2] ?? 0) <= 160) {
                              (s as any).result = ((s as any).result ?? 0) + (13);
                            } else {
                              if (Number((s as any).locArgs?.[2] ?? 0) <= 170) {
                                (s as any).result = ((s as any).result ?? 0) + (14);
                              } else {
                                if (Number((s as any).locArgs?.[2] ?? 0) <= 180) {
                                  (s as any).result = ((s as any).result ?? 0) + (15);
                                } else {
                                  if (Number((s as any).locArgs?.[2] ?? 0) <= 190) {
                                    (s as any).result = ((s as any).result ?? 0) + (16);
                                  } else {
                                    (s as any).result = ((s as any).result ?? 0) + (17);
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
  // TODO-QSP: end
  scene.build();
}

function enterBodyImgTotals(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    (s as any).result = 2;
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 6) {
      (s as any).result = 2;
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 100) {
        (s as any).result = 4;
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 106) {
          (s as any).result = 3;
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) === 200) {
            (s as any).result = 2;
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === 206) {
              (s as any).result = 4;
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) === 207) {
                (s as any).result = 3;
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) === 208) {
                  (s as any).result = 1;
                } else {
                  if (Number((s as any).locArgs?.[1] ?? 0) === 210) {
                    (s as any).result = 1;
                  } else {
                    if (Number((s as any).locArgs?.[1] ?? 0) === 213) {
                      (s as any).result = 1;
                    } else {
                      if (Number((s as any).locArgs?.[1] ?? 0) === 215) {
                        (s as any).result = 1;
                      } else {
                        if (Number((s as any).locArgs?.[1] ?? 0) === 300) {
                          (s as any).result = 3;
                        } else {
                          if (Number((s as any).locArgs?.[1] ?? 0) === 306) {
                            (s as any).result = 3;
                          } else {
                            if (Number((s as any).locArgs?.[1] ?? 0) === 307) {
                              (s as any).result = 1;
                            } else {
                              if (Number((s as any).locArgs?.[1] ?? 0) === 308) {
                                (s as any).result = 1;
                              } else {
                                if (Number((s as any).locArgs?.[1] ?? 0) === 400) {
                                  (s as any).result = 2;
                                } else {
                                  if (Number((s as any).locArgs?.[1] ?? 0) === 406) {
                                    (s as any).result = 2;
                                  } else {
                                    if (Number((s as any).locArgs?.[1] ?? 0) === 500) {
                                      (s as any).result = 3;
                                    } else {
                                      if (Number((s as any).locArgs?.[1] ?? 0) === 506) {
                                        (s as any).result = 2;
                                      } else {
                                        if (Number((s as any).locArgs?.[1] ?? 0) === 600) {
                                          (s as any).result = 1;
                                        } else {
                                          if (Number((s as any).locArgs?.[1] ?? 0) === 700) {
                                            (s as any).result = 2;
                                          } else {
                                            if (Number((s as any).locArgs?.[1] ?? 0) === 800) {
                                              (s as any).result = 1;
                                            } else {
                                              if (Number((s as any).locArgs?.[1] ?? 0) === 1000) {
                                                (s as any).result = 1;
                                              } else {
                                                if (Number((s as any).locArgs?.[1] ?? 0) === 2000) {
                                                  (s as any).result = 1;
                                                } else {
                                                  if (Number((s as any).locArgs?.[1] ?? 0) === 3000) {
                                                    (s as any).result = 1;
                                                  } else {
                                                    if (Number((s as any).locArgs?.[1] ?? 0) === 4000) {
                                                      (s as any).result = 1;
                                                    } else {
                                                      if (Number((s as any).locArgs?.[1] ?? 0) === 5000) {
                                                        (s as any).result = 1;
                                                      } else {
                                                        if (Number((s as any).locArgs?.[1] ?? 0) === 6000) {
                                                          (s as any).result = 1;
                                                        } else {
                                                          if (Number((s as any).locArgs?.[1] ?? 0) === 7000) {
                                                            (s as any).result = 1;
                                                          } else {
                                                            if (Number((s as any).locArgs?.[1] ?? 0) === 8000) {
                                                              (s as any).result = 1;
                                                            } else {
                                                              if (Number((s as any).locArgs?.[1] ?? 0) === 9000) {
                                                                (s as any).result = 1;
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
  // TODO-QSP: end
  scene.build();
}

function enterBodyImgTransform(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) < 6) {
    (s as any).result = 0;
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) < 100) {
      (s as any).result = 6;
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) < 106) {
        (s as any).result = 100;
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) < 200) {
          (s as any).result = 106;
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) < 206) {
            (s as any).result = 200;
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === 206) {
              (s as any).result = 206;
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) === 207) {
                (s as any).result = 207;
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) < 210) {
                  (s as any).result = 208;
                } else {
                  if (Number((s as any).locArgs?.[1] ?? 0) < 213) {
                    (s as any).result = 210;
                  } else {
                    if (Number((s as any).locArgs?.[1] ?? 0) < 215) {
                      (s as any).result = 213;
                    } else {
                      if (Number((s as any).locArgs?.[1] ?? 0) < 300) {
                        (s as any).result = 215;
                      } else {
                        if (Number((s as any).locArgs?.[1] ?? 0) < 306) {
                          (s as any).result = 300;
                        } else {
                          if (Number((s as any).locArgs?.[1] ?? 0) === 306) {
                            (s as any).result = 306;
                          } else {
                            if (Number((s as any).locArgs?.[1] ?? 0) === 307) {
                              (s as any).result = 307;
                            } else {
                              if (Number((s as any).locArgs?.[1] ?? 0) < 310) {
                                (s as any).result = 308;
                              } else {
                                if (Number((s as any).locArgs?.[1] ?? 0) < 313) {
                                  (s as any).result = 210;
                                } else {
                                  if (Number((s as any).locArgs?.[1] ?? 0) < 315) {
                                    (s as any).result = 213;
                                  } else {
                                    if (Number((s as any).locArgs?.[1] ?? 0) < 400) {
                                      (s as any).result = 215;
                                    } else {
                                      if (Number((s as any).locArgs?.[1] ?? 0) < 406) {
                                        (s as any).result = 400;
                                      } else {
                                        if (Number((s as any).locArgs?.[1] ?? 0) < 500) {
                                          (s as any).result = 406;
                                        } else {
                                          if (Number((s as any).locArgs?.[1] ?? 0) < 506) {
                                            (s as any).result = 500;
                                          } else {
                                            if (Number((s as any).locArgs?.[1] ?? 0) < 600) {
                                              (s as any).result = 506;
                                            } else {
                                              if (Number((s as any).locArgs?.[1] ?? 0) < 700) {
                                                (s as any).result = 600;
                                              } else {
                                                if (Number((s as any).locArgs?.[1] ?? 0) < 800) {
                                                  (s as any).result = 700;
                                                } else {
                                                  if (Number((s as any).locArgs?.[1] ?? 0) < 1000) {
                                                    (s as any).result = 800;
                                                  } else {
                                                    if (Number((s as any).locArgs?.[1] ?? 0) < 2000) {
                                                      (s as any).result = 1000;
                                                    } else {
                                                      if (Number((s as any).locArgs?.[1] ?? 0) < 3000) {
                                                        (s as any).result = 2000;
                                                      } else {
                                                        if (Number((s as any).locArgs?.[1] ?? 0) < 4000) {
                                                          (s as any).result = 3000;
                                                        } else {
                                                          if (Number((s as any).locArgs?.[1] ?? 0) < 5000) {
                                                            (s as any).result = 4000;
                                                          } else {
                                                            if (Number((s as any).locArgs?.[1] ?? 0) < 6000) {
                                                              (s as any).result = 5000;
                                                            } else {
                                                              if (Number((s as any).locArgs?.[1] ?? 0) < 7000) {
                                                                (s as any).result = 6000;
                                                              } else {
                                                                if (Number((s as any).locArgs?.[1] ?? 0) < 8000) {
                                                                  (s as any).result = 7000;
                                                                } else {
                                                                  if (Number((s as any).locArgs?.[1] ?? 0) < 9000) {
                                                                    (s as any).result = 8000;
                                                                  } else {
                                                                    if (Number((s as any).locArgs?.[1] ?? 0) < 10000) {
                                                                      (s as any).result = 9000;
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
  // TODO-QSP: end
  scene.build();
}

function enterDefaultSetClassTransform(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) >= 1000) {
    (s as any).result = ((s as any).locArgs?.[1] ?? 0);
    return;
  }
  (s as any).result = ((s as any).locArgs?.[1] ?? 0) % 1000;
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 0) {
    (s as any).result = 100 * (((s as any).locArgs?.[1] ?? 0) / 100) + 2;
  } else {
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 1) {
      (s as any).result = 100 * (((s as any).locArgs?.[1] ?? 0) / 100) + 6;
    } else {
      if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 2) {
        (s as any).result = 100 * (((s as any).locArgs?.[1] ?? 0) / 100) + 8;
      }
    }
  }
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 !== 9) {
    (s as any).result = ((((s as any).cheatVars ?? {})?.['fix_bi_set'] ?? 0) / 10 % 10) * 100 + ((s as any).result ?? 0) % 100;
  }
  (s as any).result = ((s as any).result ?? 0) + (((s as any).base_result ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterBodyImg(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_bmi ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).strenbuf ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = ((s as any).pregChem ?? 0);
  }
  (s as any).bs_temp_bs_class = qspFunc(s, 'body_structure', 'get_class', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).cheatVars ?? 0)?.['fix_bodyimg'] === 1) {
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] < 10) {
      (s as any).result = qspFunc(s, 'body_structure', 'custom_body_img', ((s as any).bs_temp_bs_class ?? 0));
      return;
    } else {
      (s as any).bs_temp_bs_class = qspFunc(s, 'body_structure', 'default_set_class_transform', ((s as any).bs_temp_bs_class ?? 0));
    }
  }
  (s as any).result = qspFunc(s, 'body_structure', 'body_img_from_class', ((s as any).bs_temp_bs_class ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterBodyImgFromClass(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[1] = qspFunc(s, 'body_structure', 'Body_img_transform', ((s as any).locArgs?.[1] ?? 0));
  (s as any).result = qspFunc(s, 'body_structure', 'body_img_path_from_class', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: $result += '/'
  if (Number((s as any).locArgs?.[1] ?? 0) >= 1000) {
    // TODO-QSP: $result += '0/'
    if (Number((s as any).locArgs?.[1] ?? 0) === 1000) {
      // TODO-QSP: $result += '0'
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 2000) {
        // TODO-QSP: $result += '1'
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 3000) {
          // TODO-QSP: $result += '2'
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) === 4000) {
            // TODO-QSP: $result += '3'
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === 5000) {
              // TODO-QSP: $result += '4'
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) === 6000) {
                // TODO-QSP: $result += '5'
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) === 7000) {
                  // TODO-QSP: $result += '6'
                } else {
                  if (Number((s as any).locArgs?.[1] ?? 0) === 8000) {
                    // TODO-QSP: $result += '7'
                  } else {
                    if (Number((s as any).locArgs?.[1] ?? 0) === 9000) {
                      // TODO-QSP: $result += '8'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    // TODO-QSP: $result += '.jpg'
    return;
  }
  ((s as any).ARGS = (s as any).ARGS ?? {})[2] = (((s as any).locArgs?.[1] ?? 0) % 100);
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    // TODO-QSP: $result += '0_low_'
  } else {
    if (Number((s as any).locArgs?.[2] ?? 0) === 1) {
      // TODO-QSP: $result += '1_???_'
    } else {
      if (Number((s as any).locArgs?.[2] ?? 0) === 2) {
        // TODO-QSP: $result += '2_???_'
      } else {
        if (Number((s as any).locArgs?.[2] ?? 0) === 3) {
          // TODO-QSP: $result += '3_???_'
        } else {
          if (Number((s as any).locArgs?.[2] ?? 0) === 4) {
            // TODO-QSP: $result += '4_???_'
          } else {
            if (Number((s as any).locArgs?.[2] ?? 0) === 5) {
              // TODO-QSP: $result += '5_???_'
            } else {
              if (Number((s as any).locArgs?.[2] ?? 0) === 6) {
                // TODO-QSP: $result += '6_mid_'
              } else {
                if (Number((s as any).locArgs?.[2] ?? 0) === 7) {
                  // TODO-QSP: $result += '7_high_'
                } else {
                  if (Number((s as any).locArgs?.[2] ?? 0) === 8) {
                    // TODO-QSP: $result += '8_strong_'
                  } else {
                    if (Number((s as any).locArgs?.[2] ?? 0) === 9) {
                      // TODO-QSP: $result += '9_???_'
                    } else {
                      if (Number((s as any).locArgs?.[2] ?? 0) === 10) {
                        // TODO-QSP: $result += '10_vstrong_'
                      } else {
                        if (Number((s as any).locArgs?.[2] ?? 0) === 11) {
                          // TODO-QSP: $result += '11_???_'
                        } else {
                          if (Number((s as any).locArgs?.[2] ?? 0) === 12) {
                            // TODO-QSP: $result += '12_???_'
                          } else {
                            if (Number((s as any).locArgs?.[2] ?? 0) === 13) {
                              // TODO-QSP: $result += '13_bbuilder_'
                            } else {
                              if (Number((s as any).locArgs?.[2] ?? 0) === 14) {
                                // TODO-QSP: $result += '14_???_'
                              } else {
                                if (Number((s as any).locArgs?.[2] ?? 0) === 15) {
                                  // TODO-QSP: $result += '15_hulk_'
                                } else {
                                  if (Number((s as any).locArgs?.[2] ?? 0) === 16) {
                                    // TODO-QSP: $result += '16_???_'
                                  } else {
                                    // TODO-QSP: $result += '17_???_'
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
  (s as any).temp_img_totals = qspFunc(s, 'body_structure', 'body_img_totals', ((s as any).locArgs?.[1] ?? 0));
  if (Object.keys((s as any).ARGS ?? {}).length <= 2) {
    (s as any).temp_img_chosen = (Math.floor(Math.random() * (((s as any).temp_img_totals ?? 0)-1 - 0 + 1)) + (0));
  } else {
    if (Number((s as any).locArgs?.[2] ?? 0) < 0) {
      (s as any).temp_img_chosen = 0;
    } else {
      if (Number((s as any).locArgs?.[2] ?? 0) < ((s as any).temp_img_totals ?? 0)) {
        (s as any).temp_img_chosen = ((s as any).locArgs?.[2] ?? 0);
      } else {
        (s as any).temp_img_chosen = ((s as any).temp_img_totals ?? 0) - 1;
      }
    }
  }
  // TODO-QSP: $result += '<<temp_img_chosen>>.jpg'
  // TODO-QSP: end
  scene.build();
}

function enterBodyImgPathFromClass(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).DEFAULT_PATH ?? 0) + '/';
  if (Number((s as any).locArgs?.[1] ?? 0) < 100) {
    // TODO-QSP: $result += '0_starving'
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) < 200) {
      // TODO-QSP: $result += '1_underweight'
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) < 300) {
        // TODO-QSP: $result += '2_slender'
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) < 400) {
          // TODO-QSP: $result += '3_healthy'
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) < 500) {
            // TODO-QSP: $result += '4_overweight'
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) < 600) {
              // TODO-QSP: $result += '5_modobese'
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) < 700) {
                // TODO-QSP: $result += '6_sevobese'
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) < 800) {
                  // TODO-QSP: $result += '7_vsevobese'
                } else {
                  if (Number((s as any).locArgs?.[1] ?? 0) < 1000) {
                    // TODO-QSP: $result += '8_morobese'
                  } else {
                    // TODO-QSP: $result += 'preg'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCustomBodyImg(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) >= 1000) {
    (s as any).result = qspFunc(s, 'body_structure', 'body_img_from_class', ((s as any).locArgs?.[1] ?? 0));
    return;
  }
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cheatVars ?? 0)?.['fix_bi_set'] + '_advanced'] === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).locArgs?.[1] ?? 0) / 100;
    (s as any).temp_img_name = qspUntranslated(s, "cheatVars['fix_biset_<<cheatVars['fix_bi_set']>>_img_<<ARGS[1]>>']", { location: "body_structure" });
    (s as any).temp_base_folder = ((s as any).DEFAULT_PATH ?? 0);
    // TODO-QSP: $temp_base_folder += '/' + $cheatVars['fix_biset_<<cheatVars[''fix_bi_set'']>>_folder']
  } else {
    (s as any).cbi_class = (String(10000+((s as any).locArgs?.[1] ?? 0)).slice((2)-1));
    // TODO-QSP: bs_imgnum = rand(0, cheatVars['fix_biset_<<cheatVars[''fix_bi_set'']>>_imgnums_<<$cbi_class>>']-1)
    (s as any).temp_img_name = ((s as any).cheatVars ?? 0)?.['fix_biset_' + ((s as any).cheatVars ?? 0)?.['fix_bi_set'] + '_img_' + ((s as any).cbi_class ?? 0) + '_' + ((s as any).bs_imgnum ?? 0) + ''];
    (s as any).temp_base_folder = qspUntranslated(s, "cheatVars['fix_biset_<<cheatVars['fix_bi_set']>>_path']", { location: "body_structure" });
    if (((s as any).temp_base_folder ?? 0) === '') {
      (s as any).temp_base_folder = ((s as any).DEFAULT_PATH ?? 0);
    }
    // TODO-QSP: $temp_base_folder += '/' + $cheatVars['fix_biset_<<cheatVars[''fix_bi_set'']>>_folder']
    if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cheatVars ?? 0)?.['fix_bi_set'] + '_path_' + ((s as any).cbi_class ?? 0)] !== '') {
      // TODO-QSP: $temp_base_folder += '/' + $cheatVars['fix_biset_<<cheatVars[''fix_bi_set'']>>_path_<<$cbi_class>>']
    }
  }
  if (((s as any).temp_img_name ?? 0) === '') {
    (s as any).result = qspFunc(s, 'body_structure', 'cs_get_default_img', ((s as any).locArgs?.[1] ?? 0));
  } else {
    (s as any).result = '' + ((s as any).temp_base_folder ?? 0) + '/' + ((s as any).temp_img_name ?? 0) + '.jpg';
  }
  // TODO-QSP: end
  scene.build();
}

function enterBodyDesc(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_bmi ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).strenbuf ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = ((s as any).pregChem ?? 0);
  }
  (s as any).bs_temp_bs_class = qspFunc(s, 'body_structure', 'get_class', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).cheatVars ?? 0)?.['fix_bodyimg'] === 1) {
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] < 10) {
      (s as any).result = qspFunc(s, 'body_structure', 'custom_body_desc', ((s as any).bs_temp_bs_class ?? 0));
      return;
    } else {
      (s as any).bs_temp_bs_class = qspFunc(s, 'body_structure', 'default_set_class_transform', ((s as any).bs_temp_bs_class ?? 0));
    }
  }
  (s as any).result = qspFunc(s, 'body_structure', 'body_desc_from_class', ((s as any).bs_temp_bs_class ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterBodyDescFromClass(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) <= 17) {
    (s as any).result = 'starving';
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) <= 105) {
      (s as any).result = 'underweight';
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) <= 107) {
        (s as any).result = 'slight';
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) <= 117) {
          (s as any).result = 'wiry';
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) <= 205) {
            (s as any).result = 'slender';
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) <= 207) {
              (s as any).result = 'skinny';
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) <= 217) {
                (s as any).result = 'lean';
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) <= 305) {
                  (s as any).result = 'healthy';
                } else {
                  if (Number((s as any).locArgs?.[1] ?? 0) <= 307) {
                    (s as any).result = 'toned';
                  } else {
                    if (Number((s as any).locArgs?.[1] ?? 0) <= 317) {
                      (s as any).result = 'ripped';
                    } else {
                      if (Number((s as any).locArgs?.[1] ?? 0) <= 405) {
                        (s as any).result = 'overweight';
                      } else {
                        if (Number((s as any).locArgs?.[1] ?? 0) <= 407) {
                          (s as any).result = 'curvy';
                        } else {
                          if (Number((s as any).locArgs?.[1] ?? 0) <= 417) {
                            (s as any).result = 'heavy set';
                          } else {
                            if (Number((s as any).locArgs?.[1] ?? 0) <= 517) {
                              (s as any).result = 'very overweight';
                            } else {
                              if (Number((s as any).locArgs?.[1] ?? 0) <= 617) {
                                (s as any).result = 'moderately obese';
                              } else {
                                if (Number((s as any).locArgs?.[1] ?? 0) <= 717) {
                                  (s as any).result = 'severely obese';
                                } else {
                                  if (Number((s as any).locArgs?.[1] ?? 0) < 1000) {
                                    (s as any).result = 'morbidly obese';
                                  } else {
                                    if (Number((s as any).locArgs?.[1] ?? 0) < 2000) {
                                      (s as any).result = 'pregnant, but not showing';
                                    } else {
                                      if (Number((s as any).locArgs?.[1] ?? 0) < 3000) {
                                        (s as any).result = 'glowing';
                                      } else {
                                        if (Number((s as any).locArgs?.[1] ?? 0) < 4000) {
                                          (s as any).result = 'starting to show';
                                        } else {
                                          if (Number((s as any).locArgs?.[1] ?? 0) < 5000) {
                                            (s as any).result = 'clearly showing';
                                          } else {
                                            if (Number((s as any).locArgs?.[1] ?? 0) < 6000) {
                                              (s as any).result = 'fairly pregnant';
                                            } else {
                                              if (Number((s as any).locArgs?.[1] ?? 0) < 7000) {
                                                (s as any).result = 'quite pregnant';
                                              } else {
                                                if (Number((s as any).locArgs?.[1] ?? 0) < 8000) {
                                                  (s as any).result = 'very pregnant';
                                                } else {
                                                  if (Number((s as any).locArgs?.[1] ?? 0) < 9000) {
                                                    (s as any).result = 'extremely pregnant';
                                                  } else {
                                                    (s as any).result = 'ready to pop';
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
  // TODO-QSP: end
  scene.build();
}

function enterCustomBodyDesc(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) >= 1000) {
    (s as any).result = qspFunc(s, 'body_structure', 'body_desc_from_class', ((s as any).locArgs?.[1] ?? 0));
    return;
  }
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cheatVars ?? 0)?.['fix_bi_set'] + '_advanced'] === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).locArgs?.[1] ?? 0) / 100;
    (s as any).temp_bs_body_desc = qspUntranslated(s, "cheatVars['fix_biset_<<cheatVars['fix_bi_set']>>_desc_<<ARGS[1]>>']", { location: "body_structure" });
  } else {
    (s as any).temp_bs_body_desc = ((s as any).cheatVars ?? 0)?.['fix_biset_' + ((s as any).cheatVars ?? 0)?.['fix_bi_set'] + '_desc_' + (String(10000+((s as any).locArgs?.[1] ?? 0)).slice((2)-1)) + ''];
  }
  if (((s as any).temp_bs_body_desc ?? 0) === '') {
    (s as any).temp_bs_body_desc = qspFunc(s, 'body_structure', 'cs_get_default_desc', ((s as any).locArgs?.[1] ?? 0));
  }
  (s as any).result = ((s as any).temp_bs_body_desc ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterBmiDesc(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_bmi ?? 0);
  }
  (s as any).bs_temp_bs_class = qspFunc(s, 'body_structure', 'get_class', ((s as any).locArgs?.[1] ?? 0), 30, 0);
  (s as any).result = qspFunc(s, 'body_structure', 'bmi_desc_from_class', ((s as any).bs_temp_bs_class ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterBmiDescFromClass(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) < 100) {
    (s as any).result = 'You are severely underweight.';
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) < 200) {
      (s as any).result = 'You are underweight';
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) < 300) {
        (s as any).result = 'You have a normal, healthy weight.';
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) < 400) {
          (s as any).result = 'You have a normal, healthy weight.';
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) < 500) {
            (s as any).result = 'You are overweight.';
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) < 600) {
              (s as any).result = 'You are moderately obese.';
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) < 700) {
                (s as any).result = 'You are severely obese.';
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) < 800) {
                  (s as any).result = 'You are very severely obese.';
                } else {
                  (s as any).result = 'You are morbidly obese.';
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAppearanceBonus(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_bmi ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).strenbuf ?? 0);
  }
  (s as any).bs_temp_bs_class = qspFunc(s, 'body_structure', 'get_class', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 0);
  (s as any).result = qspFunc(s, 'body_structure', 'appearance_bonus_from_class', ((s as any).bs_temp_bs_class ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterAppearanceBonusFromClass(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).locArgs?.[1] ?? 0) % 1000;
  if (Number((s as any).locArgs?.[1] ?? 0) < 100) {
    (s as any).result = (-10);
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) < 200) {
      (s as any).result = 25;
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) < 300) {
        (s as any).result = 50;
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) < 400) {
          (s as any).result = 50;
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) < 500) {
            (s as any).result = 25;
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) < 600) {
              (s as any).result = 10;
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) < 700) {
                (s as any).result = (-15);
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) < 800) {
                  (s as any).result = (-40);
                } else {
                  (s as any).result = (-80);
                }
              }
            }
          }
        }
      }
    }
  }
  ((s as any).ARGS = (s as any).ARGS ?? {})[2] = (((s as any).locArgs?.[1] ?? 0) % 100);
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    (s as any).result = ((s as any).result ?? 0) - (30);
  } else {
    if (Number((s as any).locArgs?.[2] ?? 0) === 1) {
      (s as any).result = ((s as any).result ?? 0) - (20);
    } else {
      if (Number((s as any).locArgs?.[2] ?? 0) === 2) {
        (s as any).result = ((s as any).result ?? 0) - (15);
      } else {
        if (Number((s as any).locArgs?.[2] ?? 0) === 3) {
          (s as any).result = ((s as any).result ?? 0) - (10);
        } else {
          if (Number((s as any).locArgs?.[2] ?? 0) === 4) {
            (s as any).result = ((s as any).result ?? 0) - (5);
          } else {
            if (Number((s as any).locArgs?.[2] ?? 0) === 5) {
              (s as any).result = ((s as any).result ?? 0) + (0);
            } else {
              if (Number((s as any).locArgs?.[2] ?? 0) === 6) {
                (s as any).result = ((s as any).result ?? 0) + (5);
              } else {
                if (Number((s as any).locArgs?.[2] ?? 0) === 7) {
                  (s as any).result = ((s as any).result ?? 0) + (10);
                } else {
                  if (Number((s as any).locArgs?.[2] ?? 0) === 8) {
                    (s as any).result = ((s as any).result ?? 0) + (5);
                  } else {
                    if (Number((s as any).locArgs?.[2] ?? 0) === 9) {
                      (s as any).result = ((s as any).result ?? 0) + (0);
                    } else {
                      if (Number((s as any).locArgs?.[2] ?? 0) === 10) {
                        (s as any).result = ((s as any).result ?? 0) - (5);
                      } else {
                        if (Number((s as any).locArgs?.[2] ?? 0) === 11) {
                          (s as any).result = ((s as any).result ?? 0) - (15);
                        } else {
                          if (Number((s as any).locArgs?.[2] ?? 0) === 12) {
                            (s as any).result = ((s as any).result ?? 0) - (30);
                          } else {
                            if (Number((s as any).locArgs?.[2] ?? 0) === 13) {
                              (s as any).result = ((s as any).result ?? 0) - (45);
                            } else {
                              if (Number((s as any).locArgs?.[2] ?? 0) === 14) {
                                (s as any).result = ((s as any).result ?? 0) - (60);
                              } else {
                                if (Number((s as any).locArgs?.[2] ?? 0) === 15) {
                                  (s as any).result = ((s as any).result ?? 0) - (75);
                                } else {
                                  if (Number((s as any).locArgs?.[2] ?? 0) === 16) {
                                    (s as any).result = ((s as any).result ?? 0) - (100);
                                  } else {
                                    (s as any).result = ((s as any).result ?? 0) - (130);
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
  // TODO-QSP: end
  scene.build();
}

function enterCsGetDefaultImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cheatVars ?? 0)?.['fix_bi_set'] + '_advanced'] === 0) {
    // TODO-QSP: ARGS[1] *= 100
  }
  (s as any).result = qspFunc(s, 'body_structure', 'body_img_from_class', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterCsGetDefaultDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cheatVars ?? 0)?.['fix_bi_set'] + '_advanced'] === 0) {
    // TODO-QSP: ARGS[1] *= 100
  }
  (s as any).result = qspFunc(s, 'body_structure', 'body_desc_from_class', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).DEFAULT_PATH = 'images/pc/body/shape';
  const arg = s.locArg;
  switch (arg) {
    case 'get_class':
      enterGetClass(s, scene);
      break;
    case 'body_img_totals':
      enterBodyImgTotals(s, scene);
      break;
    case 'Body_img_transform':
      enterBodyImgTransform(s, scene);
      break;
    case 'default_set_class_transform':
      enterDefaultSetClassTransform(s, scene);
      break;
    case 'body_img':
      enterBodyImg(s, scene);
      break;
    case 'body_img_from_class':
      enterBodyImgFromClass(s, scene);
      break;
    case 'body_img_path_from_class':
      enterBodyImgPathFromClass(s, scene);
      break;
    case 'custom_body_img':
      enterCustomBodyImg(s, scene);
      break;
    case 'body_desc':
      enterBodyDesc(s, scene);
      break;
    case 'body_desc_from_class':
      enterBodyDescFromClass(s, scene);
      break;
    case 'custom_body_desc':
      enterCustomBodyDesc(s, scene);
      break;
    case 'bmi_desc':
      enterBmiDesc(s, scene);
      break;
    case 'bmi_desc_from_class':
      enterBmiDescFromClass(s, scene);
      break;
    case 'appearance_bonus':
      enterAppearanceBonus(s, scene);
      break;
    case 'appearance_bonus_from_class':
      enterAppearanceBonusFromClass(s, scene);
      break;
    case 'cs_get_default_img':
      enterCsGetDefaultImg(s, scene);
      break;
    case 'cs_get_default_desc':
      enterCsGetDefaultDesc(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const body_structure: LocationDef = {
  name: 'body_structure',
  region: 'other',
  enter: enter,
};
