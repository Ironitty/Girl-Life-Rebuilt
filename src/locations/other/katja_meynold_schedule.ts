import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).locat = (s as any).locat ?? {})['katja'] = 0;
  if (((s as any).yearstart ?? 0) === 1) {
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  (!((s as any).kanikuli ?? 0))) {
      if (((s as any).week ?? 0) <= 5) {
        if ((((s as any).hour ?? 0) < 6)  ||  (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 45)) {
          ((s as any).locat = (s as any).locat ?? {})['katja'] = 1;
        } else {
          if (((s as any).hour ?? 0) < 7) {
            ((s as any).locat = (s as any).locat ?? {})['katja'] = 2;
          } else {
            if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15) {
              ((s as any).locat = (s as any).locat ?? {})['katja'] = 3;
            } else {
              if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 4;
              } else {
                if (((s as any).hour ?? 0) < 14) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 5;
                } else {
                  if (((s as any).hour ?? 0) < 15) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 6;
                  } else {
                    if (((s as any).hour ?? 0) < 20) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                    } else {
                      if (((s as any).week ?? 0) === 5) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 8;
                      } else {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).week ?? 0) === 6) {
          if (((s as any).hour ?? 0) < 9) {
            ((s as any).locat = (s as any).locat ?? {})['katja'] = 1;
          } else {
            if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
              ((s as any).locat = (s as any).locat ?? {})['katja'] = 2;
            } else {
              if (((s as any).hour ?? 0) < 10) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 3;
              } else {
                if (((s as any).hour ?? 0) < 20) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                } else {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 8;
                }
              }
            }
          }
        } else {
          if (((s as any).hour ?? 0) < 9) {
            ((s as any).locat = (s as any).locat ?? {})['katja'] = 1;
          } else {
            if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
              ((s as any).locat = (s as any).locat ?? {})['katja'] = 2;
            } else {
              if (((s as any).hour ?? 0) < 10) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 3;
              } else {
                if (((s as any).hour ?? 0) < 12) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                } else {
                  if (((s as any).hour ?? 0) < 15) {
                    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                    } else {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                    }
                  } else {
                    if (((s as any).hour ?? 0) < 20) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                    } else {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).week ?? 0) <= 5) {
        if ((((s as any).hour ?? 0) < 7)  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 45)) {
          ((s as any).locat = (s as any).locat ?? {})['katja'] = 1;
        } else {
          if (((s as any).hour ?? 0) < 7) {
            ((s as any).locat = (s as any).locat ?? {})['katja'] = 2;
          } else {
            if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) <= 30) {
              ((s as any).locat = (s as any).locat ?? {})['katja'] = 3;
            } else {
              if (((s as any).hour ?? 0) < 12) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
              } else {
                if (((s as any).hour ?? 0) < 15) {
                  if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).week ?? 0) % 2 === 0) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                  } else {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                  }
                } else {
                  if (((s as any).hour ?? 0) < 20) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                  } else {
                    if (((s as any).week ?? 0) === 5) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 8;
                    } else {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).week ?? 0) === 6) {
          if (((s as any).hour ?? 0) < 9) {
            ((s as any).locat = (s as any).locat ?? {})['katja'] = 1;
          } else {
            if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
              ((s as any).locat = (s as any).locat ?? {})['katja'] = 2;
            } else {
              if (((s as any).hour ?? 0) < 10) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 3;
              } else {
                if (((s as any).hour ?? 0) < 12) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                } else {
                  if (((s as any).hour ?? 0) < 15) {
                    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).kanikuli ?? 0) !== 0) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                    } else {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                    }
                  } else {
                    if (((s as any).hour ?? 0) < 20) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                    } else {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 8;
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).hour ?? 0) < 9) {
            ((s as any).locat = (s as any).locat ?? {})['katja'] = 1;
          } else {
            if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
              ((s as any).locat = (s as any).locat ?? {})['katja'] = 2;
            } else {
              if (((s as any).hour ?? 0) < 10) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 3;
              } else {
                if (((s as any).hour ?? 0) < 12) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                } else {
                  if (((s as any).hour ?? 0) < 15) {
                    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((((s as any).kanikuli ?? 0) === 0  &&  ((s as any).week ?? 0) === 7)  ||  ((s as any).week ?? 0) % 2 === 0)) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                    } else {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                    }
                  } else {
                    if (((s as any).hour ?? 0) < 20) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                    } else {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
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
    if (((s as any).university ?? 0)?.['semester_week'] > 0) {
      if (((s as any).week ?? 0) < 6) {
        if (((s as any).hour ?? 0) < 7) {
          ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
        } else {
          if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 15) {
            ((s as any).locat = (s as any).locat ?? {})['katja'] = 21;
          } else {
            if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 45) {
              ((s as any).locat = (s as any).locat ?? {})['katja'] = 22;
            } else {
              if (((s as any).hour ?? 0) === 7  ||  (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 15)) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 23;
              } else {
                if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 24;
                } else {
                  if (((s as any).hour ?? 0) < 9) {
                    if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) > 15) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 25;
                    } else {
                      if (((s as any).week ?? 0) < 5) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 24;
                      } else {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 29;
                      }
                    }
                  } else {
                    if (((s as any).hour ?? 0) < 12) {
                      if (((s as any).week ?? 0) === 5) {
                        if (((s as any).hour ?? 0) < 11) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 29;
                        } else {
                          if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 30;
                          } else {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                          }
                        }
                      } else {
                        if (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) >= 30) {
                          if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) > 15) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 25;
                          } else {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 27;
                          }
                        } else {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 26;
                        }
                      }
                    } else {
                      if (((s as any).hour ?? 0) < 13) {
                        if (((s as any).week ?? 0) === 5) {
                          if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 30;
                          } else {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                          }
                        } else {
                          if (((s as any).minut ?? 0) < 30) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 26;
                          } else {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 28;
                          }
                        }
                      } else {
                        if (((s as any).hour ?? 0) < 14) {
                          if (((s as any).week ?? 0) < 5) {
                            if (((s as any).minut ?? 0) < 15) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 28;
                            } else {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 26;
                            }
                          } else {
                            if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 30;
                            } else {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                            }
                          }
                        } else {
                          if (((s as any).hour ?? 0) < 15) {
                            if (((s as any).week ?? 0) < 5) {
                              if (((s as any).minut ?? 0) > 45) {
                                if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) > 15) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 25;
                                } else {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 31;
                                }
                              } else {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 26;
                              }
                            } else {
                              if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 30;
                              } else {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                              }
                            }
                          } else {
                            if (((s as any).hour ?? 0) < 17) {
                              if (((s as any).week ?? 0) === 5) {
                                if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 29;
                                } else {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                                }
                              } else {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 31;
                              }
                            } else {
                              if (((s as any).hour ?? 0) < 18) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 31;
                              } else {
                                if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 30) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 32;
                                } else {
                                  if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 45) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 33;
                                  } else {
                                    if (((s as any).hour ?? 0) < 19) {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 34;
                                    } else {
                                      if (((s as any).hour ?? 0) < 20) {
                                        if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  (((s as any).katjaQW ?? 0)?.['QWstage'] < 3  ||  ((s as any).katjaQW ?? 0)?.['slut'] < 75)  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0)) {
                                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 31;
                                        } else {
                                          if (((s as any).week ?? 0) === 4) {
                                            if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)) {
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 35, 51, 51);
                                              ((s as any).locat = (s as any).locat ?? {})['katja_rand2'] = ((s as any).daystart ?? 0);
                                              ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = (((s as any).locat ?? 0)?.['katja']);
                                            } else {
                                              if (((s as any).locat ?? 0)?.['katja_save2'] === 35  &&  ((s as any).minut ?? 0) >= 45) {
                                                ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = 37;
                                              }
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
                                            }
                                          } else {
                                            if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)) {
                                              if (((s as any).minut ?? 0) < 45) {
                                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 35;
                                              } else {
                                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 37;
                                              }
                                            } else {
                                              if (((s as any).locat ?? 0)?.['katja_save2'] === 35  &&  ((s as any).minut ?? 0) >= 45) {
                                                ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = 37;
                                              }
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
                                            }
                                          }
                                        }
                                      } else {
                                        if (((s as any).hour ?? 0) < 23) {
                                          if (((s as any).week ?? 0) < 4) {
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 29;
                                          } else {
                                            if (((s as any).locat ?? 0)?.['katja_rand2'] === ((s as any).daystart ?? 0)) {
                                              if (((s as any).locat ?? 0)?.['katja_save2'] === 51) {
                                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 52;
                                                ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = (((s as any).locat ?? 0)?.['katja']);
                                              } else {
                                                if (((s as any).locat ?? 0)?.['katja_save2'] === 35) {
                                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                                                  ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = (((s as any).locat ?? 0)?.['katja']);
                                                } else {
                                                  if (((s as any).locat ?? 0)?.['katja_save2'] === 37) {
                                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                                                    ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = (((s as any).locat ?? 0)?.['katja']);
                                                  } else {
                                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
                                                  }
                                                }
                                              }
                                            } else {
                                              if (((s as any).week ?? 0) === 4) {
                                                if ((((s as any).katjaQW ?? 0)?.['QWstage'] < 3  ||  ((s as any).katjaQW ?? 0)?.['slut'] < 75)  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0) {
                                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 29, 52);
                                                } else {
                                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 53, 52, 52);
                                                }
                                                ((s as any).locat = (s as any).locat ?? {})['katja_rand2'] = ((s as any).daystart ?? 0);
                                                ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = (((s as any).locat ?? 0)?.['katja']);
                                              } else {
                                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                                              }
                                            }
                                          }
                                        } else {
                                          if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  (((s as any).katjaQW ?? 0)?.['QWstage'] < 3  ||  ((s as any).katjaQW ?? 0)?.['slut'] < 75)  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0)  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).locat ?? 0)?.['katja'] === 52)) {
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                                          } else {
                                            if (((s as any).week ?? 0) === 4  &&  ((s as any).minut ?? 0) < 15) {
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 38;
                                            } else {
                                              if (((s as any).week ?? 0) === 4) {
                                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                                              } else {
                                                if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)) {
                                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                                                } else {
                                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
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
      } else {
        if (((s as any).week ?? 0) === 6) {
          if ((((s as any).katjaQW ?? 0)?.['QWstage'] < 3  ||  ((s as any).katjaQW ?? 0)?.['slut'] < 75)  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0) {
            if (((s as any).hour ?? 0) === 0  &&  ((s as any).minut ?? 0) < 15) {
              ((s as any).locat = (s as any).locat ?? {})['katja'] = 38;
            } else {
              if (((s as any).hour ?? 0) < 8) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
              } else {
                if (((s as any).hour ?? 0) < 8  &&  ((s as any).minut ?? 0) < 15) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 21;
                } else {
                  if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 45) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 22;
                  } else {
                    if (((s as any).hour ?? 0) === 8  ||  (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15)) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 23;
                    } else {
                      if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 24;
                      } else {
                        if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 45) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 39;
                        } else {
                          if (((s as any).hour ?? 0) < 11) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 40;
                          } else {
                            if (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 15) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 41;
                            } else {
                              if (((s as any).hour ?? 0) < 12) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                              } else {
                                if (((s as any).hour ?? 0) < 15) {
                                  if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                                  } else {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                  }
                                } else {
                                  if (((s as any).hour ?? 0) < 20) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                  } else {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 8;
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
            if (((s as any).hour ?? 0) < 2) {
              if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)-1) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
              } else {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
              }
            } else {
              if (((s as any).hour ?? 0) === 2  &&  ((s as any).minut ?? 0) < 15) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 38;
              } else {
                if (((s as any).hour ?? 0) < 9) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                } else {
                  if (((s as any).hour ?? 0) < 9  &&  ((s as any).minut ?? 0) < 15) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 21;
                  } else {
                    if (((s as any).hour ?? 0) === 9) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 22;
                    } else {
                      if (((s as any).hour ?? 0) < 12) {
                        if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 30;
                        } else {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                        }
                      } else {
                        if (((s as any).hour ?? 0) < 16) {
                          if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                            if (((s as any).sunWeather ?? 0) === 1) {
                              if (((s as any).temper ?? 0) >= 20  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  (Math.floor(Math.random() * 5) + 0) > 0) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 42;
                              } else {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 43, 43, 44, 44, 30, 31);
                              }
                            } else {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 44, 44, 30, 31);
                            }
                            ((s as any).locat = (s as any).locat ?? {})['katja_rand1'] = ((s as any).daystart ?? 0);
                            ((s as any).locat = (s as any).locat ?? {})['katja_save1'] = (((s as any).locat ?? 0)?.['katja']);
                          } else {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                          }
                        } else {
                          if (((s as any).hour ?? 0) < 18) {
                            if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) > 15) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 25;
                            } else {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 31;
                            }
                          } else {
                            if (((s as any).hour ?? 0) < 19  &&  ((s as any).minut ?? 0) < 15) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 34;
                            } else {
                              if (((s as any).hour ?? 0) < 19  &&  ((s as any).minut ?? 0) < 45) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 35;
                              } else {
                                if (((s as any).hour ?? 0) < 19) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 36;
                                } else {
                                  if (((s as any).hour ?? 0) < 20) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 45;
                                  } else {
                                    if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)) {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                                    } else {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
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
        } else {
          if ((((s as any).katjaQW ?? 0)?.['QWstage'] < 3  ||  ((s as any).katjaQW ?? 0)?.['slut'] < 75)  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0) {
            if (((s as any).hour ?? 0) < 9) {
              ((s as any).locat = (s as any).locat ?? {})['katja'] = 1;
            } else {
              if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 2;
              } else {
                if (((s as any).hour ?? 0) < 10) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 3;
                } else {
                  if (((s as any).hour ?? 0) < 12) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                  } else {
                    if (((s as any).hour ?? 0) < 15) {
                      if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((((s as any).kanikuli ?? 0) === 0  &&  ((s as any).week ?? 0) === 7)  ||  ((s as any).week ?? 0) % 2 === 0)) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                      } else {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                      }
                    } else {
                      if (((s as any).hour ?? 0) < 20) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                      } else {
                        if (((s as any).hour ?? 0) === 20  ||  (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 30)) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
                        } else {
                          if (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 45) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 46;
                          } else {
                            if (((s as any).hour ?? 0) === 21  ||  ((s as any).hour ?? 0) === 22  ||  (((s as any).hour ?? 0) === 23  &&  ((s as any).minut ?? 0) < 15)) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 47;
                            } else {
                              if (((s as any).hour ?? 0) < 23  &&  ((s as any).minut ?? 0) < 30) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 48;
                              } else {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
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
            if (((s as any).hour ?? 0) === 0  &&  ((s as any).minut ?? 0) < 15) {
              ((s as any).locat = (s as any).locat ?? {})['katja'] = 38;
            } else {
              if (((s as any).hour ?? 0) < 8) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
              } else {
                if (((s as any).hour ?? 0) < 8  &&  ((s as any).minut ?? 0) < 15) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 21;
                } else {
                  if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 45) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 22;
                  } else {
                    if (((s as any).hour ?? 0) === 8  ||  (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15)) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 23;
                    } else {
                      if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 24;
                      } else {
                        if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 45) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 39;
                        } else {
                          if (((s as any).hour ?? 0) < 11) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 40;
                          } else {
                            if (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 15) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 41;
                            } else {
                              if (((s as any).hour ?? 0) < 12) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                              } else {
                                if (((s as any).hour ?? 0) < 15) {
                                  if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((((s as any).kanikuli ?? 0) === 0  &&  ((s as any).week ?? 0) === 7)  ||  ((s as any).week ?? 0) % 2 === 0)) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                                  } else {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                  }
                                } else {
                                  if (((s as any).hour ?? 0) < 20) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                  } else {
                                    if (((s as any).hour ?? 0) === 20  ||  (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 30)) {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
                                    } else {
                                      if (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 45) {
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 46;
                                      } else {
                                        if (((s as any).hour ?? 0) === 21  ||  ((s as any).hour ?? 0) === 22  ||  (((s as any).hour ?? 0) < 23  &&  ((s as any).minut ?? 0) < 15)) {
                                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 47;
                                        } else {
                                          if (((s as any).hour ?? 0) < 23  &&  ((s as any).minut ?? 0) < 30) {
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 48;
                                          } else {
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
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
    } else {
      if (((s as any).university ?? 0)?.['exam_week'] > 0) {
        if (((s as any).week ?? 0) < 6) {
          if (((s as any).hour ?? 0) < 7) {
            ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
          } else {
            if (((s as any).hour ?? 0) < 7  &&  ((s as any).minut ?? 0) < 15) {
              ((s as any).locat = (s as any).locat ?? {})['katja'] = 21;
            } else {
              if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 45) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 22;
              } else {
                if (((s as any).hour ?? 0) === 7  ||  (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 15)) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 23;
                } else {
                  if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 24;
                  } else {
                    if (((s as any).hour ?? 0) < 9) {
                      if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) > 15) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 25;
                      } else {
                        if (((s as any).week ?? 0) === 4  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).university ?? 0)?.['exam_week'] === 2)  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  ((s as any).week ?? 0) === 5)) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 24;
                        } else {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 29;
                        }
                      }
                    } else {
                      if (((s as any).hour ?? 0) < 12) {
                        if (((s as any).week ?? 0) === 4  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).university ?? 0)?.['exam_week'] === 2)) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 49;
                        } else {
                          if ((((s as any).university ?? 0)?.['exam_week'] === 2  &&  ((s as any).week ?? 0) === 5)) {
                            if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 30;
                            } else {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                            }
                          } else {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 29;
                          }
                        }
                      } else {
                        if (((s as any).hour ?? 0) < 13) {
                          if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 30;
                          } else {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                          }
                        } else {
                          if (((s as any).hour ?? 0) < 16) {
                            if (((s as any).university ?? 0)?.['exam_week'] === 2) {
                              if (((s as any).week ?? 0) === 4) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 50;
                              } else {
                                if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 30;
                                } else {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                                }
                              }
                            } else {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 29;
                            }
                          } else {
                            if (((s as any).hour ?? 0) < 18) {
                              if (((s as any).university ?? 0)?.['exam_week'] === 2  &&  ((s as any).week ?? 0) === 4) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 50;
                              } else {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 31;
                              }
                            } else {
                              if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 30) {
                                if (((s as any).university ?? 0)?.['exam_week'] === 2  &&  ((s as any).week ?? 0) === 4) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 36;
                                } else {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 32;
                                }
                              } else {
                                if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 45) {
                                  if (((s as any).university ?? 0)?.['exam_week'] === 2  &&  ((s as any).week ?? 0) === 4) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 36;
                                  } else {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 33;
                                  }
                                } else {
                                  if (((s as any).hour ?? 0) < 19) {
                                    if (((s as any).university ?? 0)?.['exam_week'] === 2  &&  ((s as any).week ?? 0) === 4) {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 36;
                                    } else {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 34;
                                    }
                                  } else {
                                    if (((s as any).hour ?? 0) < 20) {
                                      if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)) {
                                        if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['exam_week'] === 1)) {
                                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 31;
                                        } else {
                                          if (((s as any).minut ?? 0) < 45  &&  (((s as any).week ?? 0) === 5  ||  ((s as any).university ?? 0)?.['exam_week'] === 1)) {
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 35;
                                          } else {
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 37;
                                          }
                                        }
                                      } else {
                                        if (((s as any).locat ?? 0)?.['katja_save2'] === 35  &&  ((s as any).minut ?? 0) >= 45) {
                                          ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = 37;
                                        }
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
                                      }
                                    } else {
                                      if (((s as any).hour ?? 0) < 23) {
                                        if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['exam_week'] === 1)) {
                                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 29;
                                        } else {
                                          if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)) {
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                                          } else {
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
                                          }
                                        }
                                      } else {
                                        if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['exam_week'] === 1)) {
                                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                                        } else {
                                          if (((s as any).week ?? 0) === 4) {
                                            if (((s as any).minut ?? 0) < 15) {
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 38;
                                            } else {
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                                            }
                                          } else {
                                            if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)) {
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                                            } else {
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
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
        } else {
          if (((s as any).week ?? 0) === 6) {
            if (((((s as any).katjaQW ?? 0)?.['QWstage'] < 3  ||  ((s as any).katjaQW ?? 0)?.['slut'] < 75)  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0)  ||  ((s as any).university ?? 0)?.['exam_week'] === 2) {
              if (((s as any).hour ?? 0) === 0  &&  ((s as any).minut ?? 0) < 15) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 38;
              } else {
                if (((s as any).hour ?? 0) < 8) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                } else {
                  if (((s as any).hour ?? 0) < 8  &&  ((s as any).minut ?? 0) < 15) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 21;
                  } else {
                    if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 45) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 22;
                    } else {
                      if (((s as any).hour ?? 0) === 8  ||  (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15)) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 23;
                      } else {
                        if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 24;
                        } else {
                          if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 45) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 39;
                          } else {
                            if (((s as any).hour ?? 0) < 11) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 40;
                            } else {
                              if (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 15) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 41;
                              } else {
                                if (((s as any).hour ?? 0) < 12) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                } else {
                                  if (((s as any).hour ?? 0) < 15) {
                                    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).kanikuli ?? 0) !== 0) {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                                    } else {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                    }
                                  } else {
                                    if (((s as any).hour ?? 0) < 20) {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                    } else {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 8;
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
              if (((s as any).hour ?? 0) < 2) {
                if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)-1) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                } else {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
                }
              } else {
                if (((s as any).hour ?? 0) === 2  &&  ((s as any).minut ?? 0) < 15) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 38;
                } else {
                  if (((s as any).hour ?? 0) < 9) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                  } else {
                    if (((s as any).hour ?? 0) < 9  &&  ((s as any).minut ?? 0) < 15) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 21;
                    } else {
                      if (((s as any).hour ?? 0) === 9) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 22;
                      } else {
                        if (((s as any).hour ?? 0) < 12) {
                          if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 30;
                          } else {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                          }
                        } else {
                          if (((s as any).hour ?? 0) < 16) {
                            if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                              if (((s as any).sunWeather ?? 0) === 1) {
                                if (((s as any).temper ?? 0) >= 20  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  (Math.floor(Math.random() * 5) + 0) > 0) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 42;
                                } else {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 43, 43, 44, 44, 30, 31);
                                }
                              } else {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 44, 44, 30, 31);
                              }
                              ((s as any).locat = (s as any).locat ?? {})['katja_rand1'] = ((s as any).daystart ?? 0);
                              ((s as any).locat = (s as any).locat ?? {})['katja_save1'] = (((s as any).locat ?? 0)?.['katja']);
                            } else {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                            }
                          } else {
                            if (((s as any).hour ?? 0) < 18) {
                              if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) > 15) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 25;
                              } else {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 31;
                              }
                            } else {
                              if (((s as any).hour ?? 0) < 19  &&  ((s as any).minut ?? 0) < 15) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 34;
                              } else {
                                if (((s as any).hour ?? 0) < 19  &&  ((s as any).minut ?? 0) < 45) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 35;
                                } else {
                                  if (((s as any).hour ?? 0) < 19) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 36;
                                  } else {
                                    if (((s as any).hour ?? 0) < 20) {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 45;
                                    } else {
                                      if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)-1) {
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                                      } else {
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
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
          } else {
            if (((((s as any).katjaQW ?? 0)?.['QWstage'] < 3  ||  ((s as any).katjaQW ?? 0)?.['slut'] < 75)  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0)  ||  ((s as any).university ?? 0)?.['exam_week'] === 2) {
              if (((s as any).hour ?? 0) < 9) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 1;
              } else {
                if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 2;
                } else {
                  if (((s as any).hour ?? 0) < 10) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 3;
                  } else {
                    if (((s as any).hour ?? 0) < 12) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                    } else {
                      if (((s as any).hour ?? 0) < 15) {
                        if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((((s as any).kanikuli ?? 0) === 0  &&  ((s as any).week ?? 0) === 7)  ||  ((s as any).week ?? 0) % 2 === 0)) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                        } else {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                        }
                      } else {
                        if (((s as any).hour ?? 0) < 20) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                        } else {
                          if (((s as any).hour ?? 0) === 20  ||  (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 30)) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
                          } else {
                            if (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 45) {
                              if (((s as any).university ?? 0)?.['exam_week'] === 2) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
                              } else {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 46;
                              }
                            } else {
                              if (((s as any).hour ?? 0) === 21  ||  (((s as any).hour ?? 0) < 23  &&  ((s as any).minut ?? 0) < 45)) {
                                if (((s as any).university ?? 0)?.['exam_week'] === 2) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
                                } else {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 47;
                                }
                              } else {
                                if (((s as any).hour ?? 0) < 23) {
                                  if (((s as any).university ?? 0)?.['exam_week'] === 2) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
                                  } else {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 48;
                                  }
                                } else {
                                  if (((s as any).university ?? 0)?.['exam_week'] === 2) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
                                  } else {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
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
              if (((s as any).hour ?? 0) === 0  &&  ((s as any).minut ?? 0) < 15) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 38;
              } else {
                if (((s as any).hour ?? 0) < 8) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                } else {
                  if (((s as any).hour ?? 0) < 8  &&  ((s as any).minut ?? 0) < 15) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 21;
                  } else {
                    if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 45) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 22;
                    } else {
                      if (((s as any).hour ?? 0) === 8  ||  (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15)) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 23;
                      } else {
                        if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 24;
                        } else {
                          if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 45) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 39;
                          } else {
                            if (((s as any).hour ?? 0) < 11) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 40;
                            } else {
                              if (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 15) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 41;
                              } else {
                                if (((s as any).hour ?? 0) < 12) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                } else {
                                  if (((s as any).hour ?? 0) < 15) {
                                    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((((s as any).kanikuli ?? 0) === 0  &&  ((s as any).week ?? 0) === 7)  ||  ((s as any).week ?? 0) % 2 === 0)) {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                                    } else {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                    }
                                  } else {
                                    if (((s as any).hour ?? 0) < 20) {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                    } else {
                                      if (((s as any).hour ?? 0) === 20  ||  (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 30)) {
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
                                      } else {
                                        if (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 45) {
                                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 46;
                                        } else {
                                          if (((s as any).hour ?? 0) === 21  ||  (((s as any).hour ?? 0) < 23  &&  ((s as any).minut ?? 0) < 45)) {
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 47;
                                          } else {
                                            if (((s as any).hour ?? 0) < 23) {
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 48;
                                            } else {
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
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
      } else {
        if (((s as any).week ?? 0) < 3) {
          if ((((s as any).hour ?? 0) < 7)  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 45)) {
            ((s as any).locat = (s as any).locat ?? {})['katja'] = 1;
          } else {
            if (((s as any).hour ?? 0) < 7) {
              ((s as any).locat = (s as any).locat ?? {})['katja'] = 2;
            } else {
              if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) <= 30) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 3;
              } else {
                if (((s as any).hour ?? 0) < 12) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                } else {
                  if (((s as any).hour ?? 0) < 15) {
                    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).week ?? 0) % 2 === 0) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                    } else {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                    }
                  } else {
                    if (((s as any).hour ?? 0) < 20) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                    } else {
                      if (((s as any).week ?? 0) === 2) {
                        if (((s as any).hour ?? 0) === 20  &&  ((s as any).minut ?? 0) < 15) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 46;
                        } else {
                          if (((s as any).hour ?? 0) === 20  ||  (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 15)) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 47;
                          } else {
                            if (((s as any).hour ?? 0) === 20  &&  ((s as any).minut ?? 0) < 30) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 48;
                            } else {
                              if (((s as any).hour ?? 0) < 23) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 31;
                              } else {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                              }
                            }
                          }
                        }
                      } else {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).week ?? 0) < 6) {
            if ((((s as any).hour ?? 0) < 7)  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 45)) {
              ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
            } else {
              if (((s as any).hour ?? 0) < 8) {
                ((s as any).locat = (s as any).locat ?? {})['katja'] = 21;
              } else {
                if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 22;
                } else {
                  if (((s as any).hour ?? 0) === 8) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 23;
                  } else {
                    if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 24;
                    } else {
                      if (((s as any).hour ?? 0) < 11) {
                        if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) > 15) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 25;
                        } else {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 24;
                        }
                      } else {
                        if (((s as any).hour ?? 0) < 12  ||  (((s as any).hour ?? 0) === 12  &&  ((s as any).minut ?? 0) < 30)) {
                          if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 30;
                          } else {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                          }
                        } else {
                          if (((s as any).hour ?? 0) < 16) {
                            if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                              if (((s as any).sunWeather ?? 0) === 1) {
                                if (((s as any).temper ?? 0) >= 20  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  (Math.floor(Math.random() * 5) + 0) > 0) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 42;
                                } else {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 43, 43, 44, 44, 30, 31);
                                }
                              } else {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 44, 44, 30, 31);
                              }
                              ((s as any).locat = (s as any).locat ?? {})['katja_rand1'] = ((s as any).daystart ?? 0);
                              ((s as any).locat = (s as any).locat ?? {})['katja_save1'] = (((s as any).locat ?? 0)?.['katja']);
                            } else {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                            }
                          } else {
                            if (((s as any).hour ?? 0) < 18) {
                              if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) > 15) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 25;
                              } else {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 31;
                              }
                            } else {
                              if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 30) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 32;
                              } else {
                                if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 45) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 33;
                                } else {
                                  if (((s as any).hour ?? 0) < 19) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 34;
                                  } else {
                                    if (((s as any).hour ?? 0) < 20) {
                                      if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] < 3  &&  ((s as any).katjaQW ?? 0)?.['slut'] < 75  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0)) {
                                        if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)) {
                                          ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 31, 51);
                                          ((s as any).locat = (s as any).locat ?? {})['katja_rand2'] = ((s as any).daystart ?? 0);
                                          ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = (((s as any).locat ?? 0)?.['katja']);
                                        } else {
                                          ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
                                        }
                                      } else {
                                        if (((s as any).week ?? 0) === 4) {
                                          if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)) {
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 35, 51, 51);
                                            ((s as any).locat = (s as any).locat ?? {})['katja_rand2'] = ((s as any).daystart ?? 0);
                                            ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = (((s as any).locat ?? 0)?.['katja']);
                                          } else {
                                            if (((s as any).locat ?? 0)?.['katja_save2'] === 35  &&  ((s as any).minut ?? 0) >= 45) {
                                              ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = 37;
                                            }
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
                                          }
                                        } else {
                                          if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)) {
                                            if (((s as any).minut ?? 0) < 45) {
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 35;
                                            } else {
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 37;
                                            }
                                          } else {
                                            if (((s as any).locat ?? 0)?.['katja_save2'] === 35  &&  ((s as any).minut ?? 0) >= 45) {
                                              ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = 37;
                                            }
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
                                          }
                                        }
                                      }
                                    } else {
                                      if (((s as any).hour ?? 0) < 23) {
                                        if (((s as any).locat ?? 0)?.['katja_rand2'] === ((s as any).daystart ?? 0)) {
                                          if (((s as any).locat ?? 0)?.['katja_save2'] === 51) {
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 52;
                                            ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = (((s as any).locat ?? 0)?.['katja']);
                                          } else {
                                            if (((s as any).locat ?? 0)?.['katja_save2'] === 35) {
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 37;
                                              ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = (((s as any).locat ?? 0)?.['katja']);
                                            } else {
                                              if (((s as any).locat ?? 0)?.['katja_save2'] === 37) {
                                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                                                ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = (((s as any).locat ?? 0)?.['katja']);
                                              } else {
                                                ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
                                              }
                                            }
                                          }
                                        } else {
                                          if (((s as any).week ?? 0) < 4) {
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 31, 51);
                                            ((s as any).locat = (s as any).locat ?? {})['katja_rand2'] = ((s as any).daystart ?? 0);
                                            ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = (((s as any).locat ?? 0)?.['katja']);
                                          } else {
                                            if (((s as any).week ?? 0) === 4) {
                                              if (((s as any).katjaQW ?? 0)?.['QWstage'] < 3  &&  ((s as any).katjaQW ?? 0)?.['slut'] < 75  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0) {
                                                ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 29, 52);
                                              } else {
                                                ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 53, 52, 52);
                                              }
                                              ((s as any).locat = (s as any).locat ?? {})['katja_rand2'] = ((s as any).daystart ?? 0);
                                              ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = (((s as any).locat ?? 0)?.['katja']);
                                            } else {
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                                            }
                                          }
                                        }
                                      } else {
                                        if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] < 3  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0)) {
                                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                                        } else {
                                          if (((s as any).week ?? 0) === 4  &&  ((s as any).minut ?? 0) < 15) {
                                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 38;
                                          } else {
                                            if (((s as any).week ?? 0) === 4) {
                                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                                            } else {
                                              if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)) {
                                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                                              } else {
                                                ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
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
          } else {
            if (((s as any).week ?? 0) === 6) {
              if ((((s as any).katjaQW ?? 0)?.['QWstage'] < 3  ||  ((s as any).katjaQW ?? 0)?.['slut'] < 75)  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0) {
                if (((s as any).hour ?? 0) === 0  &&  ((s as any).minut ?? 0) < 15) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 38;
                } else {
                  if (((s as any).hour ?? 0) < 8) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                  } else {
                    if (((s as any).hour ?? 0) < 8  &&  ((s as any).minut ?? 0) < 15) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 21;
                    } else {
                      if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 45) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 22;
                      } else {
                        if (((s as any).hour ?? 0) === 8  ||  (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15)) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 23;
                        } else {
                          if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 24;
                          } else {
                            if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 45) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 39;
                            } else {
                              if (((s as any).hour ?? 0) < 11) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 40;
                              } else {
                                if (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 15) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 41;
                                } else {
                                  if (((s as any).hour ?? 0) < 12) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                  } else {
                                    if (((s as any).hour ?? 0) < 15) {
                                      if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).kanikuli ?? 0) !== 0) {
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                                      } else {
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                      }
                                    } else {
                                      if (((s as any).hour ?? 0) < 20) {
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                      } else {
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 8;
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
                if (((s as any).hour ?? 0) < 2) {
                  if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)-1) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                  } else {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
                  }
                } else {
                  if (((s as any).hour ?? 0) === 2  &&  ((s as any).minut ?? 0) < 15) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 38;
                  } else {
                    if (((s as any).hour ?? 0) < 9) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                    } else {
                      if (((s as any).hour ?? 0) < 9  &&  ((s as any).minut ?? 0) < 15) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 21;
                      } else {
                        if (((s as any).hour ?? 0) === 9) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 22;
                        } else {
                          if (((s as any).hour ?? 0) < 12) {
                            if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 30;
                            } else {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                            }
                          } else {
                            if (((s as any).hour ?? 0) < 16) {
                              if (((s as any).locat ?? 0)?.['katja_rand1'] !== ((s as any).daystart ?? 0)) {
                                if (((s as any).sunWeather ?? 0) === 1) {
                                  if (((s as any).temper ?? 0) >= 20  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  (Math.floor(Math.random() * 5) + 0) > 0) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 42;
                                  } else {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 43, 43, 44, 44, 30, 31);
                                  }
                                } else {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = qspFunc(s, 'random', 'pick_from', 44, 44, 30, 31);
                                }
                                ((s as any).locat = (s as any).locat ?? {})['katja_rand1'] = ((s as any).daystart ?? 0);
                                ((s as any).locat = (s as any).locat ?? {})['katja_save1'] = (((s as any).locat ?? 0)?.['katja']);
                              } else {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save1']);
                              }
                            } else {
                              if (((s as any).hour ?? 0) < 18) {
                                if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) > 15) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 25;
                                } else {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 31;
                                }
                              } else {
                                if (((s as any).hour ?? 0) < 19  &&  ((s as any).minut ?? 0) < 15) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 34;
                                } else {
                                  if (((s as any).hour ?? 0) < 19  &&  ((s as any).minut ?? 0) < 45) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 35;
                                  } else {
                                    if (((s as any).hour ?? 0) < 19) {
                                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 36;
                                    } else {
                                      if (((s as any).hour ?? 0) < 20) {
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 45;
                                      } else {
                                        if (((s as any).locat ?? 0)?.['katja_rand2'] !== ((s as any).daystart ?? 0)) {
                                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 53;
                                        } else {
                                          ((s as any).locat = (s as any).locat ?? {})['katja'] = (((s as any).locat ?? 0)?.['katja_save2']);
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
            } else {
              if ((((s as any).katjaQW ?? 0)?.['QWstage'] < 3  ||  ((s as any).katjaQW ?? 0)?.['slut'] < 75)  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0) {
                if (((s as any).hour ?? 0) < 9) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 1;
                } else {
                  if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 2;
                  } else {
                    if (((s as any).hour ?? 0) < 10) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 3;
                    } else {
                      if (((s as any).hour ?? 0) < 12) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                      } else {
                        if (((s as any).hour ?? 0) < 15) {
                          if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((((s as any).kanikuli ?? 0) === 0  &&  ((s as any).week ?? 0) === 7)  ||  ((s as any).week ?? 0) % 2 === 0)) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                          } else {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                          }
                        } else {
                          if (((s as any).hour ?? 0) < 20) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                          } else {
                            if (((s as any).hour ?? 0) === 20  ||  (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 30)) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
                            } else {
                              if (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 45) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 46;
                              } else {
                                if (((s as any).hour ?? 0) === 21  ||  (((s as any).hour ?? 0) < 23  &&  ((s as any).minut ?? 0) < 45)) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 47;
                                } else {
                                  if (((s as any).hour ?? 0) < 23) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 48;
                                  } else {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
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
                if (((s as any).hour ?? 0) === 0  &&  ((s as any).minut ?? 0) < 15) {
                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 38;
                } else {
                  if (((s as any).hour ?? 0) < 8) {
                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 20;
                  } else {
                    if (((s as any).hour ?? 0) < 8  &&  ((s as any).minut ?? 0) < 15) {
                      ((s as any).locat = (s as any).locat ?? {})['katja'] = 21;
                    } else {
                      if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 45) {
                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 22;
                      } else {
                        if (((s as any).hour ?? 0) === 8  ||  (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15)) {
                          ((s as any).locat = (s as any).locat ?? {})['katja'] = 23;
                        } else {
                          if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
                            ((s as any).locat = (s as any).locat ?? {})['katja'] = 24;
                          } else {
                            if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 45) {
                              ((s as any).locat = (s as any).locat ?? {})['katja'] = 39;
                            } else {
                              if (((s as any).hour ?? 0) < 11) {
                                ((s as any).locat = (s as any).locat ?? {})['katja'] = 40;
                              } else {
                                if (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 15) {
                                  ((s as any).locat = (s as any).locat ?? {})['katja'] = 41;
                                } else {
                                  if (((s as any).hour ?? 0) < 12) {
                                    ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                  } else {
                                    if (((s as any).hour ?? 0) < 15) {
                                      if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((((s as any).kanikuli ?? 0) === 0  &&  ((s as any).week ?? 0) === 7)  ||  ((s as any).week ?? 0) % 2 === 0)) {
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 10;
                                      } else {
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                      }
                                    } else {
                                      if (((s as any).hour ?? 0) < 20) {
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 7;
                                      } else {
                                        ((s as any).locat = (s as any).locat ?? {})['katja'] = 9;
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

export const katja_meynold_schedule: LocationDef = {
  name: 'katja_meynold_schedule',
  region: 'other',
  enter: enter,
};
