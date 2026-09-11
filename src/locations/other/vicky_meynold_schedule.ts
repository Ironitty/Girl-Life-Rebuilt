// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).locat ?? {})['Vicky'] = 0;
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  (!((s as any).kanikuli ?? 0))) {
    if (((s as any).week ?? 0) <= 5) {
      if ((((s as any).hour ?? 0) < 6)  ||  (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 45)) {
        ((s as any).locat ?? {})['Vicky'] = 1;
      } else {
        if (((s as any).hour ?? 0) < 7) {
          ((s as any).locat ?? {})['Vicky'] = 2;
        } else {
          if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15) {
            ((s as any).locat ?? {})['Vicky'] = 3;
          } else {
            if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30) {
              ((s as any).locat ?? {})['Vicky'] = 4;
            } else {
              if (((s as any).hour ?? 0) < 14) {
                ((s as any).locat ?? {})['Vicky'] = 5;
              } else {
                if (((s as any).hour ?? 0) < 16) {
                  if ((((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 4)  &&  (((s as any).month ?? 0) >= 10  ||  ((s as any).month ?? 0) <= 5)) {
                    ((s as any).locat ?? {})['Vicky'] = 6;
                  } else {
                    if (((s as any).week ?? 0) === 5  &&  ((s as any).odd_week ?? 0) === 1  &&  (((s as any).month ?? 0) >= 10  ||  ((s as any).month ?? 0) <= 5)) {
                      ((s as any).locat ?? {})['Vicky'] = 7;
                    } else {
                      if (((s as any).week ?? 0) === 5) {
                        if (((s as any).hour ?? 0) === 14  &&  ((s as any).minut ?? 0) < 30) {
                          ((s as any).locat ?? {})['Vicky'] = 8;
                        } else {
                          ((s as any).locat ?? {})['Vicky'] = 9;
                        }
                      } else {
                        if (((s as any).hour ?? 0) === 14  &&  ((s as any).minut ?? 0) < 5) {
                          ((s as any).locat ?? {})['Vicky'] = 10;
                        } else {
                          ((s as any).locat ?? {})['Vicky'] = 11;
                        }
                      }
                    }
                  }
                } else {
                  if (((s as any).hour ?? 0) < 18) {
                    if (((s as any).week ?? 0) === 5) {
                      ((s as any).locat ?? {})['Vicky'] = 9;
                    } else {
                      ((s as any).locat ?? {})['Vicky'] = 11;
                    }
                  } else {
                    if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 30) {
                      if (((s as any).week ?? 0) === 5) {
                        ((s as any).locat ?? {})['Vicky'] = 9;
                      } else {
                        ((s as any).locat ?? {})['Vicky'] = 8;
                      }
                    } else {
                      if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 45) {
                        if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3) {
                          ((s as any).locat ?? {})['Vicky'] = 12;
                        } else {
                          ((s as any).locat ?? {})['Vicky'] = 9;
                        }
                      } else {
                        if (((s as any).hour ?? 0) < 19  ||  (((s as any).hour ?? 0) === 19  &&  ((s as any).minut ?? 0) <15)) {
                          if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3) {
                            ((s as any).locat ?? {})['Vicky'] = 13;
                          } else {
                            ((s as any).locat ?? {})['Vicky'] = 9;
                          }
                        } else {
                          if (((s as any).hour ?? 0) < 20) {
                            ((s as any).locat ?? {})['Vicky'] = 9;
                          } else {
                            if (((s as any).hour ?? 0) < 23) {
                              if (((s as any).week ?? 0) === 5) {
                                ((s as any).locat ?? {})['Vicky'] = 14;
                              } else {
                                ((s as any).locat ?? {})['Vicky'] = 9;
                              }
                            } else {
                              if (((s as any).week ?? 0) === 5) {
                                ((s as any).locat ?? {})['Vicky'] = 14;
                              } else {
                                ((s as any).locat ?? {})['Vicky'] = 15;
                              }
                            }
                          }
                        }
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
        if (((s as any).hour ?? 0) < 9) {
          ((s as any).locat ?? {})['Vicky'] = 1;
        } else {
          if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15) {
            ((s as any).locat ?? {})['Vicky'] = 2;
          } else {
            if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) <= 45) {
              ((s as any).locat ?? {})['Vicky'] = 3;
            } else {
              if (((s as any).hour ?? 0) < 10) {
                ((s as any).locat ?? {})['Vicky'] = 10;
              } else {
                if (((s as any).hour ?? 0) < 16) {
                  ((s as any).locat ?? {})['Vicky'] = 11;
                } else {
                  if (((s as any).hour ?? 0) === 16  &&  ((s as any).minut ?? 0) < 30) {
                    ((s as any).locat ?? {})['Vicky'] = 8;
                  } else {
                    if (((s as any).hour ?? 0) === 16  &&  ((s as any).minut ?? 0) < 45) {
                      ((s as any).locat ?? {})['Vicky'] = 12;
                    } else {
                      if (((s as any).hour ?? 0) < 17  ||  (((s as any).hour ?? 0) === 17  &&  ((s as any).minut ?? 0) <15)) {
                        ((s as any).locat ?? {})['Vicky'] = 13;
                      } else {
                        if (((s as any).hour ?? 0) < 20) {
                          ((s as any).locat ?? {})['Vicky'] = 9;
                        } else {
                          ((s as any).locat ?? {})['Vicky'] = 14;
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
        if (((s as any).hour ?? 0) < 9) {
          ((s as any).locat ?? {})['Vicky'] = 1;
        } else {
          if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15) {
            ((s as any).locat ?? {})['Vicky'] = 2;
          } else {
            if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) <= 45) {
              ((s as any).locat ?? {})['Vicky'] = 3;
            } else {
              if (((s as any).hour ?? 0) < 12) {
                ((s as any).locat ?? {})['Vicky'] = 9;
              } else {
                if (((s as any).hour ?? 0) < 15) {
                  if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9) {
                    ((s as any).locat ?? {})['vicky'] = 16;
                  } else {
                    ((s as any).locat ?? {})['Vicky'] = 9;
                  }
                } else {
                  if (((s as any).hour ?? 0) < 23) {
                    ((s as any).locat ?? {})['Vicky'] = 9;
                  } else {
                    ((s as any).locat ?? {})['Vicky'] = 15;
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
        ((s as any).locat ?? {})['Vicky'] = 1;
      } else {
        if (((s as any).hour ?? 0) < 7) {
          ((s as any).locat ?? {})['Vicky'] = 2;
        } else {
          if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) <= 30) {
            ((s as any).locat ?? {})['Vicky'] = 3;
          } else {
            if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 45) {
              ((s as any).locat ?? {})['Vicky'] = 9;
            } else {
              if (((s as any).hour ?? 0) < 9) {
                if (((s as any).week ?? 0) === 5) {
                  ((s as any).locat ?? {})['Vicky'] = 9;
                } else {
                  ((s as any).locat ?? {})['Vicky'] = 10;
                }
              } else {
                if (((s as any).hour ?? 0) < 12) {
                  if (((s as any).week ?? 0) === 5) {
                    ((s as any).locat ?? {})['Vicky'] = 9;
                  } else {
                    ((s as any).locat ?? {})['Vicky'] = 11;
                  }
                } else {
                  if (((s as any).hour ?? 0) < 15) {
                    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).week ?? 0) % 2 === 0) {
                      ((s as any).locat ?? {})['vicky'] = 16;
                    } else {
                      if (((s as any).week ?? 0) === 5) {
                        ((s as any).locat ?? {})['Vicky'] = 9;
                      } else {
                        ((s as any).locat ?? {})['Vicky'] = 11;
                      }
                    }
                  } else {
                    if (((s as any).hour ?? 0) < 18) {
                      if (((s as any).week ?? 0) === 5) {
                        ((s as any).locat ?? {})['Vicky'] = 9;
                      } else {
                        ((s as any).locat ?? {})['Vicky'] = 11;
                      }
                    } else {
                      if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 30) {
                        if (((s as any).week ?? 0) === 5) {
                          ((s as any).locat ?? {})['Vicky'] = 9;
                        } else {
                          ((s as any).locat ?? {})['Vicky'] = 8;
                        }
                      } else {
                        if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 45) {
                          if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3) {
                            ((s as any).locat ?? {})['Vicky'] = 12;
                          } else {
                            ((s as any).locat ?? {})['Vicky'] = 9;
                          }
                        } else {
                          if (((s as any).hour ?? 0) < 19  ||  (((s as any).hour ?? 0) === 19  &&  ((s as any).minut ?? 0) <15)) {
                            if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3) {
                              ((s as any).locat ?? {})['Vicky'] = 13;
                            } else {
                              ((s as any).locat ?? {})['Vicky'] = 9;
                            }
                          } else {
                            if (((s as any).hour ?? 0) < 20) {
                              ((s as any).locat ?? {})['Vicky'] = 9;
                            } else {
                              if (((s as any).hour ?? 0) < 23) {
                                if (((s as any).week ?? 0) === 5) {
                                  ((s as any).locat ?? {})['Vicky'] = 14;
                                } else {
                                  ((s as any).locat ?? {})['Vicky'] = 9;
                                }
                              } else {
                                if (((s as any).week ?? 0) === 5) {
                                  ((s as any).locat ?? {})['Vicky'] = 14;
                                } else {
                                  ((s as any).locat ?? {})['Vicky'] = 15;
                                }
                              }
                            }
                          }
                        }
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
        if (((s as any).hour ?? 0) < 9) {
          ((s as any).locat ?? {})['Vicky'] = 1;
        } else {
          if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15) {
            ((s as any).locat ?? {})['Vicky'] = 2;
          } else {
            if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) <= 45) {
              ((s as any).locat ?? {})['Vicky'] = 3;
            } else {
              if (((s as any).hour ?? 0) < 10) {
                ((s as any).locat ?? {})['Vicky'] = 10;
              } else {
                if (((s as any).hour ?? 0) < 12) {
                  ((s as any).locat ?? {})['Vicky'] = 11;
                } else {
                  if (((s as any).hour ?? 0) < 15) {
                    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9) {
                      ((s as any).locat ?? {})['vicky'] = 16;
                    } else {
                      ((s as any).locat ?? {})['Vicky'] = 11;
                    }
                  } else {
                    if (((s as any).hour ?? 0) < 16) {
                      ((s as any).locat ?? {})['Vicky'] = 11;
                    } else {
                      if (((s as any).hour ?? 0) === 16  &&  ((s as any).minut ?? 0) < 30) {
                        ((s as any).locat ?? {})['Vicky'] = 8;
                      } else {
                        if (((s as any).hour ?? 0) === 16  &&  ((s as any).minut ?? 0) < 45) {
                          ((s as any).locat ?? {})['Vicky'] = 12;
                        } else {
                          if (((s as any).hour ?? 0) < 17  ||  (((s as any).hour ?? 0) === 17  &&  ((s as any).minut ?? 0) <15)) {
                            ((s as any).locat ?? {})['Vicky'] = 13;
                          } else {
                            if (((s as any).hour ?? 0) < 20) {
                              ((s as any).locat ?? {})['Vicky'] = 9;
                            } else {
                              ((s as any).locat ?? {})['Vicky'] = 14;
                            }
                          }
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
        if (((s as any).hour ?? 0) < 9) {
          ((s as any).locat ?? {})['Vicky'] = 1;
        } else {
          if (((s as any).hour ?? 0) === 10  &&  ((s as any).minut ?? 0) < 15) {
            ((s as any).locat ?? {})['Vicky'] = 2;
          } else {
            if (((s as any).hour ?? 0) === 10  &&  ((s as any).minut ?? 0) <= 45) {
              ((s as any).locat ?? {})['Vicky'] = 3;
            } else {
              if (((s as any).hour ?? 0) < 23) {
                ((s as any).locat ?? {})['Vicky'] = 9;
              } else {
                ((s as any).locat ?? {})['Vicky'] = 15;
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const vicky_meynold_schedule: LocationDef = {
  name: 'vicky_meynold_schedule',
  region: 'other',
  enter: enter,
};
