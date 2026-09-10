// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).yearstart ?? 0) === 1  &&  (((s as any).month ?? 0) < 6  ||  ((s as any).year ?? 0) === 2016)) {
    if (((s as any).week ?? 0) < 6) {
      if (((s as any).hour ?? 0) < 8) {
        (s as any).locat['A144'] = 20;
      } else {
        (s as any).locat['A144'] = 21;
        if (((s as any).hour ?? 0) < 15) {
          (s as any).locat['A144'] = 22;
        } else {
          if (((s as any).locat ?? 0)?.['A144_rand1'] !== ((s as any).daystart ?? 0)) {
            if ((!(Math.floor(Math.random() * 5) + 0))) {
              (s as any).locat['A144'] = 23;
            } else {
              (s as any).locat['A144'] = 22;
            }
            (s as any).locat['144_rand1'] = ((s as any).daystart ?? 0);
            (s as any).locat['144_save1'] = ((s as any).locat ?? 0)?.['144'];
          } else {
            (s as any).locat['144'] = ((s as any).locat ?? 0)?.['144_save1'];
          }
          if (((s as any).hour ?? 0) < 18) {
            if (((s as any).week ?? 0) ===3) {
              (s as any).locat['A144'] = 24;
            } else {
              if (((s as any).locat ?? 0)?.['A144_rand2'] !== ((s as any).daystart ?? 0)) {
                if ((!(Math.floor(Math.random() * 2) + 0))) {
                  (s as any).locat['A144'] = 23;
                } else {
                  (s as any).locat['A144'] = 22;
                }
                (s as any).locat['144_rand2'] = ((s as any).daystart ?? 0);
                (s as any).locat['144_save2'] = ((s as any).locat ?? 0)?.['144'];
              } else {
                (s as any).locat['144'] = ((s as any).locat ?? 0)?.['144_save2'];
              }
            }
          } else {
            if (((s as any).week ?? 0) === 3) {
              (s as any).locat['A144'] = 24;
            } else {
              if (((s as any).locat ?? 0)?.['A144_rand3'] !== ((s as any).daystart ?? 0)) {
                if ((!(Math.floor(Math.random() * 4) + 0))) {
                  (s as any).locat['A144'] = 23;
                } else {
                  (s as any).locat['A144'] = 22;
                }
                (s as any).locat['144_rand3'] = ((s as any).daystart ?? 0);
                (s as any).locat['144_save3'] = ((s as any).locat ?? 0)?.['144'];
              } else {
                (s as any).locat['144'] = ((s as any).locat ?? 0)?.['144_save3'];
              }
            }
            if (((s as any).hour ?? 0) < 22) {
              if (((s as any).week ?? 0) === 3) {
                (s as any).locat['A144'] = 24;
              } else {
                (s as any).locat['A144'] = 25;
                if (((s as any).locat ?? 0)?.['A144_rand4'] !== ((s as any).daystart ?? 0)) {
                  if ((!(Math.floor(Math.random() * 4) + 0))) {
                    (s as any).locat['A144'] = 23;
                  } else {
                    (s as any).locat['A144'] = 22;
                  }
                  (s as any).locat['144_rand4'] = ((s as any).daystart ?? 0);
                  (s as any).locat['144_save4'] = ((s as any).locat ?? 0)?.['144'];
                } else {
                  (s as any).locat['144'] = ((s as any).locat ?? 0)?.['144_save4'];
                }
              }
            } else {
              if (((s as any).week ?? 0) === 5) {
                (s as any).locat['A144'] = 25;
              } else {
                (s as any).locat['A144'] = 20;
              }
            }
            if (((s as any).week ?? 0) === 6) {
              if (((s as any).hour ?? 0) < 9) {
                (s as any).locat['A144'] = 20;
              } else {
                if (((s as any).day ?? 0) < 8) {
                  (s as any).locat['A144'] = 11;
                } else {
                  if (((s as any).locat ?? 0)?.['A144_rand1'] !== ((s as any).daystart ?? 0)) {
                    if ((!(Math.floor(Math.random() * 4) + 0))) {
                      (s as any).locat['A144'] = 23;
                    } else {
                      (s as any).locat['A144'] = 22;
                    }
                    (s as any).locat['144_rand1'] = ((s as any).daystart ?? 0);
                    (s as any).locat['144_save1'] = ((s as any).locat ?? 0)?.['144'];
                  } else {
                    (s as any).locat['144'] = ((s as any).locat ?? 0)?.['144_save1'];
                  }
                }
                if (((s as any).hour ?? 0) < 16) {
                  if (((s as any).day ?? 0) < 8) {
                    (s as any).locat['A144'] = 11;
                  } else {
                    if (((s as any).locat ?? 0)?.['A144_rand2'] !== ((s as any).daystart ?? 0)) {
                      if ((!(Math.floor(Math.random() * 2) + 0))) {
                        (s as any).locat['A144'] = 23;
                      } else {
                        (s as any).locat['A144'] = 22;
                      }
                      (s as any).locat['144_rand2'] = ((s as any).daystart ?? 0);
                      (s as any).locat['144_save2'] = ((s as any).locat ?? 0)?.['144'];
                    } else {
                      (s as any).locat['144'] = ((s as any).locat ?? 0)?.['144_save2'];
                    }
                  }
                } else {
                  if (((s as any).day ?? 0) < 8) {
                    (s as any).locat['A144'] = 23;
                  } else {
                    if (((s as any).locat ?? 0)?.['A144_rand3'] !== ((s as any).daystart ?? 0)) {
                      if ((!(Math.floor(Math.random() * 2) + 0))) {
                        (s as any).locat['A144'] = 23;
                      } else {
                        (s as any).locat['A144'] = 22;
                      }
                      (s as any).locat['144_rand3'] = ((s as any).daystart ?? 0);
                      (s as any).locat['144_save3'] = ((s as any).locat ?? 0)?.['144'];
                    } else {
                      (s as any).locat['144'] = ((s as any).locat ?? 0)?.['144_save3'];
                    }
                  }
                  if (((s as any).hour ?? 0) < 20) {
                    if (((s as any).locat ?? 0)?.['A144_rand4'] !== ((s as any).daystart ?? 0)) {
                      if ((!(Math.floor(Math.random() * 4) + 0))) {
                        (s as any).locat['A144'] = 23;
                      } else {
                        (s as any).locat['A144'] = 22;
                      }
                      (s as any).locat['144_rand4'] = ((s as any).daystart ?? 0);
                      (s as any).locat['144_save4'] = ((s as any).locat ?? 0)?.['144'];
                    } else {
                      (s as any).locat['144'] = ((s as any).locat ?? 0)?.['144_save4'];
                    }
                  } else {
                    (s as any).locat['A144'] = 25;
                  }
                  if (((s as any).hour ?? 0) < 9) {
                    (s as any).locat['A144'] = 20;
                  } else {
                    if (((s as any).locat ?? 0)?.['A144_rand1'] !== ((s as any).daystart ?? 0)) {
                      if ((!(Math.floor(Math.random() * 4) + 0))) {
                        (s as any).locat['A144'] = 23;
                      } else {
                        (s as any).locat['A144'] = 22;
                      }
                      (s as any).locat['144_rand1'] = ((s as any).daystart ?? 0);
                      (s as any).locat['144_save1'] = ((s as any).locat ?? 0)?.['144'];
                    } else {
                      (s as any).locat['144'] = ((s as any).locat ?? 0)?.['144_save1'];
                    }
                    if (((s as any).hour ?? 0) < 17) {
                      if (((s as any).locat ?? 0)?.['A144_rand2'] !== ((s as any).daystart ?? 0)) {
                        if ((!(Math.floor(Math.random() * 2) + 0))) {
                          (s as any).locat['A144'] = 23;
                        } else {
                          (s as any).locat['A144'] = 22;
                        }
                        (s as any).locat['144_rand2'] = ((s as any).daystart ?? 0);
                        (s as any).locat['144_save2'] = ((s as any).locat ?? 0)?.['144'];
                      } else {
                        (s as any).locat['144'] = ((s as any).locat ?? 0)?.['144_save2'];
                      }
                    } else {
                      if (((s as any).locat ?? 0)?.['A144_rand3'] !== ((s as any).daystart ?? 0)) {
                        if ((!(Math.floor(Math.random() * 2) + 0))) {
                          (s as any).locat['A144'] = 23;
                        } else {
                          (s as any).locat['A144'] = 22;
                        }
                        (s as any).locat['144_rand3'] = ((s as any).daystart ?? 0);
                        (s as any).locat['144_save3'] = ((s as any).locat ?? 0)?.['144'];
                      } else {
                        (s as any).locat['144'] = ((s as any).locat ?? 0)?.['144_save3'];
                      }
                      if (((s as any).hour ?? 0) < 22) {
                        if (((s as any).locat ?? 0)?.['A144_rand4'] !== ((s as any).daystart ?? 0)) {
                          if ((!(Math.floor(Math.random() * 4) + 0))) {
                            (s as any).locat['A144'] = 23;
                          } else {
                            (s as any).locat['A144'] = 22;
                          }
                          (s as any).locat['144_rand4'] = ((s as any).daystart ?? 0);
                          (s as any).locat['144_save4'] = ((s as any).locat ?? 0)?.['144'];
                        } else {
                          (s as any).locat['144'] = ((s as any).locat ?? 0)?.['144_save4'];
                        }
                      } else {
                        (s as any).locat['A144'] = 20;
                      }
                    }
                    if (((s as any).yearstart ?? 0) === 1  ||  (((s as any).yearstart ?? 0) === 2  &&  ((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) < 10)) {
                      (s as any).locat['A144'] = 30;
                    } else {
                      if (((s as any).week ?? 0) === 1) {
                        if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 15) {
                          (s as any).locat['A144'] = 10;
                        } else {
                          (s as any).locat['A144'] = 12;
                          if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) <= 23) {
                            (s as any).locat['A144'] = 2;
                          } else {
                            (s as any).locat['A144'] = 0;
                          }
                          if (((s as any).week ?? 0) === 2) {
                            if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 15) {
                              (s as any).locat['A144'] = 10;
                            } else {
                              (s as any).locat['A144'] = 2;
                              if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) <23) {
                                (s as any).locat['A144'] = 9;
                              } else {
                                (s as any).locat['A144'] = 0;
                              }
                              if (((s as any).week ?? 0) === 3) {
                                if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 15) {
                                  (s as any).locat['A144'] = 10;
                                } else {
                                  (s as any).locat['A144'] = 12;
                                  if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23) {
                                    (s as any).locat['A144'] = 8;
                                  } else {
                                    (s as any).locat['A144'] = 0;
                                  }
                                  if (((s as any).week ?? 0) === 4) {
                                    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 15) {
                                      (s as any).locat['A144'] = 10;
                                    } else {
                                      (s as any).locat['A144'] = 9;
                                      (s as any).locat['A144'] = 0;
                                    }
                                  } else {
                                    if (((s as any).hour ?? 0) < 9) {
                                      (s as any).locat['A144'] = 0;
                                    } else {
                                      (s as any).locat['A144'] = 10;
                                      if (((s as any).hour ?? 0) < 16) {
                                        (s as any).locat['A144'] = 9;
                                      } else {
                                        (s as any).locat['A144'] = 2;
                                        (s as any).locat['A144'] = 0;
                                      }
                                      if (((s as any).week ?? 0) === 6) {
                                        if (((s as any).day ?? 0) <= 7) {
                                          if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 16) {
                                            (s as any).locat['A144'] = 11;
                                          } else {
                                            (s as any).locat['A144'] = 2;
                                            (s as any).locat['A144'] = 0;
                                          }
                                        } else {
                                          if (((s as any).hour ?? 0) <= 8  &&  ((s as any).hour ?? 0) < 20) {
                                            (s as any).locat['A144'] = 2;
                                          } else {
                                            (s as any).locat['A144'] = 0;
                                          }
                                        }
                                      } else {
                                        if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) <23) {
                                          (s as any).locat['A144'] = 9;
                                        } else {
                                          (s as any).locat['A144'] = 0;
                                        }
                                      }
                                    }
                                    if (((s as any).locat ?? 0)?.['A144'] > 0  &&  ((s as any).locat ?? 0)?.['A144'] < 8) {
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

export const anushka_konstantinov_schedule: LocationDef = {
  name: 'anushka_konstantinov_schedule',
  region: 'other',
  enter: enter,
};
