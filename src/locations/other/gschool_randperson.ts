// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCoupleGenerator(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :couple_jump
  (s as any).couple_rand = (Math.floor(Math.random() * 53) + 1);
  if (((s as any).couple_rand ?? 0) === 1) {
    (s as any).rand_girl = 'Viktoriya';
    (s as any).rand_boy = 'Vanya';
  } else {
    if (((s as any).couple_rand ?? 0) === 2) {
      (s as any).rand_girl = 'Lina';
      (s as any).rand_boy = 'Ivan';
    } else {
      if (((s as any).couple_rand ?? 0) === 3) {
        (s as any).rand_girl = 'Stasya';
        (s as any).rand_boy = 'Andrey';
      } else {
        if (((s as any).couple_rand ?? 0) === 4) {
          (s as any).rand_girl = 'Lariska';
          (s as any).rand_boy = 'Ivan';
        } else {
          if (((s as any).couple_rand ?? 0) === 5) {
            (s as any).rand_girl = 'Lizaveta';
            (s as any).rand_boy = 'Andrey';
          } else {
            if (((s as any).couple_rand ?? 0) === 6) {
              (s as any).rand_girl = 'Lina';
              (s as any).rand_boy = 'Lazar';
            } else {
              if (((s as any).couple_rand ?? 0) === 7) {
                (s as any).rand_girl = 'Bella';
                (s as any).rand_boy = 'Lazar';
              } else {
                if (((s as any).couple_rand ?? 0) === 8) {
                  (s as any).rand_girl = 'Lariska';
                  (s as any).rand_boy = 'Lazar';
                } else {
                  if (((s as any).couple_rand ?? 0) === 9) {
                    (s as any).rand_girl = 'Irina';
                    (s as any).rand_boy = 'Lazar';
                  } else {
                    if (((s as any).couple_rand ?? 0) === 10) {
                      (s as any).rand_girl = 'Irina';
                      (s as any).rand_boy = 'Dimka';
                    } else {
                      if (((s as any).couple_rand ?? 0) === 11) {
                        (s as any).rand_girl = 'Anushka';
                        (s as any).rand_boy = 'Marcus';
                      } else {
                        if (((s as any).couple_rand ?? 0) === 12  &&  ((s as any).kotovLoveQW ?? 0) <= 0) {
                          (s as any).rand_girl = 'Pauline';
                          (s as any).rand_boy = 'Vitek';
                        } else {
                          if (((s as any).couple_rand ?? 0) === 13) {
                            (s as any).rand_girl = 'Pauline';
                            (s as any).rand_boy = 'Dan';
                          } else {
                            if (((s as any).couple_rand ?? 0) === 14) {
                              (s as any).rand_girl = 'Anushka';
                              (s as any).rand_boy = 'Radomir';
                            } else {
                              if (((s as any).couple_rand ?? 0) === 15) {
                                (s as any).rand_girl = 'Anushka';
                                (s as any).rand_boy = 'Valentin';
                              } else {
                                if (((s as any).couple_rand ?? 0) === 16) {
                                  (s as any).rand_girl = 'Anushka';
                                  (s as any).rand_boy = 'Arkadi';
                                } else {
                                  if (((s as any).couple_rand ?? 0) === 17) {
                                    (s as any).rand_girl = 'Alyona';
                                    (s as any).rand_boy = 'Valentin';
                                  } else {
                                    if (((s as any).couple_rand ?? 0) === 18) {
                                      (s as any).rand_girl = 'Alyona';
                                      (s as any).rand_boy = 'Arkadi';
                                    } else {
                                      if (((s as any).couple_rand ?? 0) === 19) {
                                        (s as any).rand_girl = 'Sonia';
                                        (s as any).rand_boy = 'Andrey';
                                      } else {
                                        if (((s as any).couple_rand ?? 0) === 20) {
                                          (s as any).rand_girl = 'Sonia';
                                          (s as any).rand_boy = 'Ivan';
                                        } else {
                                          if (((s as any).couple_rand ?? 0) === 21) {
                                            (s as any).rand_girl = 'Sonia';
                                            (s as any).rand_boy = 'Dimka';
                                          } else {
                                            if (((s as any).couple_rand ?? 0) === 22) {
                                              (s as any).rand_girl = 'Sonia';
                                              (s as any).rand_boy = 'Lazar';
                                            } else {
                                              if (((s as any).couple_rand ?? 0) === 23) {
                                                (s as any).rand_girl = 'Sonia';
                                                (s as any).rand_boy = 'Vasily';
                                              } else {
                                                if (((s as any).couple_rand ?? 0) === 24) {
                                                  (s as any).rand_girl = 'Sonia';
                                                  (s as any).rand_boy = 'Svyatoslav';
                                                } else {
                                                  if (((s as any).couple_rand ?? 0) === 25) {
                                                    (s as any).rand_girl = 'Sonia';
                                                    (s as any).rand_boy = 'Erast';
                                                  } else {
                                                    if (((s as any).couple_rand ?? 0) === 26  &&  ((s as any).fedorlove ?? 0) < 1) {
                                                      (s as any).rand_girl = 'Sonia';
                                                      (s as any).rand_boy = 'Fedor';
                                                    } else {
                                                      if (((s as any).couple_rand ?? 0) === 27) {
                                                        (s as any).rand_girl = 'Sonia';
                                                        (s as any).rand_boy = 'Marcus';
                                                      } else {
                                                        if (((s as any).couple_rand ?? 0) === 28  &&  ((s as any).kotovLoveQW ?? 0) <= 0) {
                                                          (s as any).rand_girl = 'Sonia';
                                                          (s as any).rand_boy = 'Vitek';
                                                        } else {
                                                          if (((s as any).couple_rand ?? 0) === 29) {
                                                            (s as any).rand_girl = 'Sonia';
                                                            (s as any).rand_boy = 'Dan';
                                                          } else {
                                                            if (((s as any).couple_rand ?? 0) === 30) {
                                                              (s as any).rand_girl = 'Sonia';
                                                              (s as any).rand_boy = 'Radomir';
                                                            } else {
                                                              if (((s as any).couple_rand ?? 0) === 31) {
                                                                (s as any).rand_girl = 'Sonia';
                                                                (s as any).rand_boy = 'Valentin';
                                                              } else {
                                                                if (((s as any).couple_rand ?? 0) === 32) {
                                                                  (s as any).rand_girl = 'Sonia';
                                                                  (s as any).rand_boy = 'Arkadi';
                                                                } else {
                                                                  if (((s as any).couple_rand ?? 0) === 33) {
                                                                    (s as any).rand_girl = 'Sonia';
                                                                    (s as any).rand_boy = 'Roman';
                                                                  } else {
                                                                    if (((s as any).couple_rand ?? 0) === 34) {
                                                                      (s as any).rand_girl = 'Pauline';
                                                                      (s as any).rand_boy = 'Radomir';
                                                                    } else {
                                                                      if (((s as any).couple_rand ?? 0) === 35) {
                                                                        (s as any).rand_girl = 'Anushka';
                                                                        (s as any).rand_boy = 'Lazar';
                                                                      } else {
                                                                        if (((s as any).couple_rand ?? 0) === 36) {
                                                                          (s as any).rand_girl = 'Anushka';
                                                                          (s as any).rand_boy = 'Ivan';
                                                                        } else {
                                                                          if (((s as any).couple_rand ?? 0) === 37) {
                                                                            (s as any).rand_girl = 'Anushka';
                                                                            (s as any).rand_boy = 'Lavrenti';
                                                                          } else {
                                                                            if (((s as any).couple_rand ?? 0) === 38) {
                                                                              (s as any).rand_girl = 'Alyona';
                                                                              (s as any).rand_boy = 'Lavrenti';
                                                                            } else {
                                                                              if (((s as any).couple_rand ?? 0) === 39) {
                                                                                (s as any).rand_girl = 'Albina';
                                                                                (s as any).rand_boy = 'Lazar';
                                                                              } else {
                                                                                if (((s as any).couple_rand ?? 0) === 40) {
                                                                                  (s as any).rand_girl = 'Sonia';
                                                                                  (s as any).rand_boy = 'Lavrenti';
                                                                                } else {
                                                                                  if (((s as any).couple_rand ?? 0) === 41) {
                                                                                    (s as any).rand_girl = 'Alyona';
                                                                                    (s as any).rand_boy = 'Radomir';
                                                                                  } else {
                                                                                    if (((s as any).couple_rand ?? 0) === 42) {
                                                                                      (s as any).rand_girl = 'Lizaveta';
                                                                                      (s as any).rand_boy = 'Lavrenti';
                                                                                    } else {
                                                                                      if (((s as any).couple_rand ?? 0) === 43) {
                                                                                        (s as any).rand_girl = 'Christina';
                                                                                        (s as any).rand_boy = 'Lazar';
                                                                                      } else {
                                                                                        if (((s as any).couple_rand ?? 0) === 44) {
                                                                                          (s as any).rand_girl = 'Christina';
                                                                                          (s as any).rand_boy = 'Ivan';
                                                                                        } else {
                                                                                          if (((s as any).couple_rand ?? 0) === 45) {
                                                                                            (s as any).rand_girl = 'Lariska';
                                                                                            (s as any).rand_boy = 'Ivan';
                                                                                          } else {
                                                                                            if (((s as any).couple_rand ?? 0) === 46) {
                                                                                              (s as any).rand_girl = 'Lariska';
                                                                                              (s as any).rand_boy = 'Radomir';
                                                                                            } else {
                                                                                              if (((s as any).couple_rand ?? 0) === 47) {
                                                                                                (s as any).rand_girl = 'Lina';
                                                                                                (s as any).rand_boy = 'Andrey';
                                                                                              } else {
                                                                                                if (((s as any).couple_rand ?? 0) === 48) {
                                                                                                  (s as any).rand_girl = 'Lina';
                                                                                                  (s as any).rand_boy = 'Svyatoslav';
                                                                                                } else {
                                                                                                  if (((s as any).couple_rand ?? 0) === 49) {
                                                                                                    (s as any).rand_girl = 'Lina';
                                                                                                    (s as any).rand_boy = 'Radomir';
                                                                                                  } else {
                                                                                                    if (((s as any).couple_rand ?? 0) === 50) {
                                                                                                      (s as any).rand_girl = 'Pauline';
                                                                                                      (s as any).rand_boy = 'Radomir';
                                                                                                    } else {
                                                                                                      if (((s as any).couple_rand ?? 0) === 51) {
                                                                                                        (s as any).rand_girl = 'Lena';
                                                                                                        (s as any).rand_boy = 'Radomir';
                                                                                                      } else {
                                                                                                        if (((s as any).couple_rand ?? 0) === 52) {
                                                                                                          (s as any).rand_girl = 'Lena';
                                                                                                          (s as any).rand_boy = 'Lavrenti';
                                                                                                        } else {
                                                                                                          if (((s as any).couple_rand ?? 0) === 53) {
                                                                                                            (s as any).rand_girl = 'Sonia';
                                                                                                            (s as any).rand_boy = 'Niko';
                                                                                                          } else {
                                                                                                            // TODO-QSP: jump 'couple_jump'
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'couple_generator':
      enterCoupleGenerator(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_randperson: LocationDef = {
  name: 'gschool_randperson',
  region: 'other',
  enter: enter,
};
