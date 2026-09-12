// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 0;
  if (((s as any).yearstart ?? 0) === 1) {
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  (!((s as any).kanikuli ?? 0))) {
      if (((s as any).week ?? 0) < 6) {
        if (((s as any).hour ?? 0) < 7  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30)) {
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
        } else {
          if ((((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) >= 30)  ||  (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30)) {
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
          } else {
            if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 14) {
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 2;
            } else {
              if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 16) {
                if (((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 4  ||  (((s as any).week ?? 0) === 5  &&  ((s as any).cheerleaders_on ?? 0) === 1)) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 4;
                } else {
                  if (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 3;
                  } else {
                    if (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 1  &&  ((s as any).sunWeather ?? 0) === 1) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 8;
                    } else {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                    }
                  }
                }
              } else {
                if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 20) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                } else {
                  if (((s as any).week ?? 0) === 5) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 5;
                  } else {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).week ?? 0) === 6) {
          if (((s as any).hour ?? 0) < 9) {
            if (((s as any).locat ?? 0)?.['A23_rand1'] !== ((s as any).daystart ?? 0)) {
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_rand1'] = ((s as any).daystart ?? 0);
              if ((!(Math.floor(Math.random() * 3) + 0))) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_save1'] = 36;
              } else {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_save1'] = 1;
              }
            }
          } else {
            if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 12) {
              if (((s as any).locat ?? 0)?.['A23_rand1'] === ((s as any).daystart ?? 0)) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_save1'] = 37;
              } else {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_save1'] = 1;
              }
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = ((s as any).locat ?? 0)?.['A23_save1'];
            } else {
              if (((s as any).hour ?? 0) === 12) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 7;
              } else {
                if (((s as any).hour ?? 0) === 13  ||  ((s as any).hour ?? 0) === 14) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                } else {
                  if (((s as any).hour ?? 0) === 15  ||  ((s as any).hour ?? 0) === 16) {
                    if (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 3;
                    } else {
                      if (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 1) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 8;
                      } else {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                      }
                    }
                  } else {
                    if (((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) < 20) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                    } else {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 5;
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).hour ?? 0) < 9) {
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
          } else {
            if (((s as any).hour ?? 0) === 9  ||  ((s as any).hour ?? 0) === 10) {
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
            } else {
              if (((s as any).hour ?? 0) === 11) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
              } else {
                if (((s as any).hour ?? 0) >= 12  &&  (((s as any).hour ?? 0) < 14  ||  (((s as any).hour ?? 0) === 14  &&  ((s as any).minut ?? 0) < 30))) {
                  if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) < 10) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 6;
                  } else {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                  }
                } else {
                  if (((s as any).hour ?? 0) === 15  ||  ((s as any).hour ?? 0) === 16) {
                    if (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 3;
                    } else {
                      if (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 1) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 8;
                      } else {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                      }
                    }
                  } else {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).month ?? 0) < 7  &&  ((s as any).kanikuli ?? 0) === 7) {
        if (((s as any).week ?? 0) < 6) {
          if (((s as any).hour ?? 0) < 9) {
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
          } else {
            if (((s as any).hour ?? 0) === 9  ||  ((s as any).hour ?? 0) === 10) {
              if (((s as any).sunWeather ?? 0) === 1) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 8;
              } else {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
              }
            } else {
              if (((s as any).hour ?? 0) === 11) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
              } else {
                if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 15) {
                  if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).week ?? 0) % 2 === 0) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 6;
                  } else {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                  }
                } else {
                  if (((s as any).week ?? 0) === 5) {
                    if (((s as any).hour ?? 0) === 15) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                    } else {
                      if (((s as any).hour ?? 0) > 15  &&  ((s as any).hour ?? 0) < 20) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                      } else {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 5;
                      }
                    }
                  } else {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).week ?? 0) === 6) {
            if (((s as any).hour ?? 0) < 9) {
              if (((s as any).locat ?? 0)?.['A23_rand1'] !== ((s as any).daystart ?? 0)) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_rand1'] = ((s as any).daystart ?? 0);
                if ((!(Math.floor(Math.random() * 3) + 0))) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_save1'] = 36;
                } else {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_save1'] = 1;
                }
              }
            } else {
              if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 12) {
                if (((s as any).locat ?? 0)?.['A23_rand1'] === ((s as any).daystart ?? 0)) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_save1'] = 37;
                } else {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_save1'] = 1;
                }
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = ((s as any).locat ?? 0)?.['A23_save1'];
              } else {
                if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 15) {
                  if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 6;
                  } else {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                  }
                } else {
                  if (((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 20) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                  } else {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 5;
                  }
                }
              }
            }
          } else {
            if (((s as any).hour ?? 0) < 11) {
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
            } else {
              if (((s as any).hour ?? 0) === 11  ||  ((s as any).hour ?? 0) === 12) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 7;
              } else {
                if (((s as any).hour ?? 0) === 13  ||  ((s as any).hour ?? 0) === 14) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 20;
                } else {
                  if (((s as any).hour ?? 0) === 15) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 32;
                  } else {
                    if (((s as any).hour ?? 0) === 16) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 33;
                    } else {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).month ?? 0) === 7  &&  ((s as any).kanikuli ?? 0) === 7) {
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 35;
        } else {
          if (((s as any).week ?? 0) < 6) {
            if (((s as any).hour ?? 0) < 12) {
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
            } else {
              if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 15) {
                if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).week ?? 0) % 2 === 0) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 6;
                } else {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                }
              } else {
                if (((s as any).hour ?? 0) === 15  ||  ((s as any).hour ?? 0) === 16) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                } else {
                  if (((s as any).hour ?? 0) === 17  ||  ((s as any).hour ?? 0) === 18) {
                    if (((s as any).sunWeather ?? 0) === 1) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 8;
                    } else {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                    }
                  } else {
                    if (((s as any).week ?? 0) === 5) {
                      if (((s as any).hour ?? 0) < 20) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                      } else {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 5;
                      }
                    } else {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                    }
                  }
                }
              }
            }
          } else {
            if (((s as any).week ?? 0) === 6) {
              if (((s as any).hour ?? 0) < 9) {
                if (((s as any).locat ?? 0)?.['A23_rand1'] !== ((s as any).daystart ?? 0)) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_rand1'] = ((s as any).daystart ?? 0);
                  if ((!(Math.floor(Math.random() * 3) + 0))) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_save1'] = 36;
                  } else {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_save1'] = 1;
                  }
                }
              } else {
                if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 12) {
                  if (((s as any).locat ?? 0)?.['A23_rand1'] === ((s as any).daystart ?? 0)) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_save1'] = 37;
                  } else {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23_save1'] = 1;
                  }
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = ((s as any).locat ?? 0)?.['A23_save1'];
                } else {
                  if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 15) {
                    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).kanikuli ?? 0) !== 0) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 6;
                    } else {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                    }
                  } else {
                    if (((s as any).hour ?? 0) === 15  ||  ((s as any).hour ?? 0) === 16) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                    } else {
                      if (((s as any).hour ?? 0) === 17  ||  ((s as any).hour ?? 0) === 18) {
                        if (((s as any).sunWeather ?? 0) === 1) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 8;
                        } else {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                        }
                      } else {
                        if (((s as any).hour ?? 0) === 19) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                        } else {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 5;
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (((s as any).hour ?? 0) < 11) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 6;
              } else {
                if (((s as any).hour ?? 0) === 11  ||  ((s as any).hour ?? 0) === 12) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 7;
                } else {
                  if (((s as any).hour ?? 0) === 13) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 32;
                  } else {
                    if (((s as any).hour ?? 0) === 14) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 33;
                    } else {
                      if (((s as any).hour ?? 0) === 15  ||  ((s as any).hour ?? 0) === 16) {
                        if (((s as any).sunWeather ?? 0) === 1) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 8;
                        } else {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                        }
                      } else {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 1;
                      }
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
      if (((s as any).week ?? 0) < 5) {
        if (((s as any).hour ?? 0) < 7  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30)) {
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 9;
        } else {
          if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 45) {
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 10;
          } else {
            if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) >= 45) {
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
            } else {
              if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 11;
              } else {
                if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) >= 30) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 12;
                } else {
                  if (((s as any).hour ?? 0) === 9  ||  (((s as any).hour ?? 0) === 10  &&  ((s as any).minut ?? 0) < 30)) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 13;
                  } else {
                    if (((s as any).hour ?? 0) === 10) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 12;
                    } else {
                      if (((s as any).hour ?? 0) === 11  ||  (((s as any).hour ?? 0) === 12  &&  ((s as any).minut ?? 0) < 30)) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 13;
                      } else {
                        if (((s as any).hour ?? 0) === 12  ||  (((s as any).hour ?? 0) === 13  &&  ((s as any).minut ?? 0) < 15)) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 14;
                        } else {
                          if (((s as any).hour ?? 0) === 13  ||  (((s as any).hour ?? 0) === 14  &&  ((s as any).minut ?? 0) < 45)) {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 13;
                          } else {
                            if (((s as any).hour ?? 0) === 15  ||  ((s as any).hour ?? 0) === 16) {
                              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 15;
                            } else {
                              if (((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) < 19) {
                                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 16;
                              } else {
                                if (((s as any).hour ?? 0) === 19) {
                                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 29;
                                } else {
                                  if (((s as any).hour ?? 0) === 20) {
                                    if (((s as any).sunWeather ?? 0) === 1  &&  (!(Math.floor(Math.random() * 2) + 0))) {
                                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 17;
                                    } else {
                                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 18;
                                    }
                                  } else {
                                    if (((s as any).hour ?? 0) === 21  ||  ((s as any).hour ?? 0) === 22) {
                                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                                    } else {
                                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 9;
                                    }
                                  }
                                }
                              }
                            }
                          }
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
        if (((s as any).week ?? 0) === 5) {
          if (((s as any).hour ?? 0) < 7  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30)) {
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 9;
          } else {
            if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) > 30) {
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 11;
            } else {
              if (((s as any).hour ?? 0) === 8  &&  ((s as any).hour ?? 0) === 9) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 20;
              } else {
                if (((s as any).hour ?? 0) === 10) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 7;
                } else {
                  if (((s as any).hour ?? 0) === 11) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 15;
                  } else {
                    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 15) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 16;
                    } else {
                      if (((s as any).hour ?? 0) === 15  ||  ((s as any).hour ?? 0) === 16) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                      } else {
                        if (((s as any).hour ?? 0) > 16  &&  ((s as any).hour ?? 0) < 20) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 9;
                        } else {
                          if (((s as any).hour ?? 0) === 20  &&  ((s as any).minut ?? 0) <= 45) {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 21;
                          } else {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 22;
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
            if (((s as any).hour ?? 0) < 3) {
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 22;
            } else {
              if (((s as any).hour ?? 0) < 11) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 23;
              } else {
                if (((s as any).hour ?? 0) === 11) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                } else {
                  if (((s as any).hour ?? 0) === 12  &&  ((s as any).hour ?? 0) === 13) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 32;
                  } else {
                    if (((s as any).hour ?? 0) === 14  ||  ((s as any).hour ?? 0) === 15) {
                      if (((s as any).sunWeather ?? 0) === 1) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 17;
                      } else {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 18;
                      }
                    } else {
                      if (((s as any).hour ?? 0) === 16) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                      } else {
                        if (((s as any).hour ?? 0) === 17) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 21;
                        } else {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 22;
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (((s as any).hour ?? 0) === 0  &&  ((s as any).minut ?? 0) < 15) {
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 22;
            } else {
              if (((s as any).hour ?? 0) < 11) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 9;
              } else {
                if (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 30) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 10;
                } else {
                  if (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) > 30) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                  } else {
                    if (((s as any).hour ?? 0) === 12  ||  (((s as any).hour ?? 0) === 13  &&  ((s as any).minut ?? 0) < 15)) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 24;
                    } else {
                      if (((s as any).hour ?? 0) === 14) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 33;
                      } else {
                        if (((s as any).hour ?? 0) === 15  ||  ((s as any).hour ?? 0) === 16) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 20;
                        } else {
                          if (((s as any).hour ?? 0) === 17) {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 7;
                          } else {
                            if (((s as any).hour ?? 0) === 18) {
                              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                            } else {
                              if (((s as any).hour ?? 0) === 19  ||  ((s as any).hour ?? 0) === 20) {
                                if (((s as any).AlbinaQW ?? 0)?.['artem_invite'] === 2  ||  ((s as any).artemQW ?? 0)?.['alb3some_again'] === 3) {
                                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 25;
                                } else {
                                  if ((Math.floor(Math.random() * 3) + 0) !== 0  &&  ((s as any).year ?? 0) > 2017  ||  (((s as any).year ?? 0) === 2017  &&  ((s as any).month ?? 0) >= 10)) {
                                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 26;
                                  } else {
                                    if ((Math.floor(Math.random() * 3) + 0) === 1) {
                                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 27;
                                    } else {
                                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 34;
                                    }
                                  }
                                }
                              } else {
                                if (((s as any).hour ?? 0) === 21  ||  ((s as any).hour ?? 0) === 22) {
                                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                                } else {
                                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 9;
                                }
                              }
                            }
                          }
                        }
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
        if (((s as any).week ?? 0) < 5) {
          if (((s as any).hour ?? 0) < 7  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30)) {
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 9;
          } else {
            if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 45) {
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 10;
            } else {
              if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) >= 45) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 11;
              } else {
                if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                } else {
                  if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) >= 30) {
                    if (((s as any).week ?? 0) === 4  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 5))) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 12;
                    } else {
                      if (((s as any).sunWeather ?? 0) === 1  &&  (!(Math.floor(Math.random() * 2) + 0))) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 17;
                      } else {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 18;
                      }
                    }
                  } else {
                    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 12) {
                      if (((s as any).week ?? 0) === 4  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).university ?? 0)?.['exam_week'] === 2)) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 13;
                      } else {
                        if (((s as any).week ?? 0) === 5  &&  ((s as any).university ?? 0)?.['exam_week'] === 2) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 16;
                        } else {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                        }
                      }
                    } else {
                      if (((s as any).hour ?? 0) === 12) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 7;
                      } else {
                        if (((s as any).hour ?? 0) === 13) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 32;
                        } else {
                          if (((s as any).hour ?? 0) === 14) {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 33;
                          } else {
                            if (((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 18) {
                              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                            } else {
                              if (((s as any).hour ?? 0) === 18) {
                                if (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['exam_week'] === 2) {
                                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 28;
                                } else {
                                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 11;
                                }
                              } else {
                                if (((s as any).hour ?? 0) === 19) {
                                  if (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['exam_week'] === 2) {
                                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 28;
                                  } else {
                                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 10;
                                  }
                                } else {
                                  if (((s as any).hour ?? 0) === 20  ||  ((s as any).hour ?? 0) === 21) {
                                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                                  } else {
                                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 9;
                                  }
                                }
                              }
                            }
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
          if (((s as any).week ?? 0) === 5) {
            if (((s as any).university ?? 0)?.['exam_week'] === 2) {
              if (((s as any).hour ?? 0) < 8) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 9;
              } else {
                if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 11;
                } else {
                  if ((((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) >= 30)  ||  ((s as any).hour ?? 0) === 9) {
                    if (((s as any).sunWeather ?? 0) === 1) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 17;
                    } else {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 18;
                    }
                  } else {
                    if (((s as any).hour ?? 0) === 10  &&  ((s as any).minut ?? 0) < 30) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 10;
                    } else {
                      if (((s as any).hour ?? 0) === 11) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                      } else {
                        if (((s as any).hour ?? 0) === 12  ||  ((s as any).hour ?? 0) === 13) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 23;
                        } else {
                          if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 18) {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
                          } else {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 31;
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (((s as any).hour ?? 0) < 8) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 9;
              } else {
                if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30) {
                } else {
                  if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) >= 30) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 10;
                  } else {
                    if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 30) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 11;
                    } else {
                      if ((((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) >= 30)  ||  ((s as any).hour ?? 0) === 10  ||  ((s as any).hour ?? 0) === 11) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 20;
                      } else {
                        if (((s as any).hour ?? 0) === 12) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 7;
                        } else {
                          if (((s as any).hour ?? 0) === 13) {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 29;
                          } else {
                            if (((s as any).hour ?? 0) === 14) {
                              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 33;
                            } else {
                              if (((s as any).hour ?? 0) === 15  ||  ((s as any).hour ?? 0) === 16) {
                                if (((s as any).sunWeather ?? 0) === 1) {
                                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 17;
                                } else {
                                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 18;
                                }
                              } else {
                                if (((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) < 20  ||  (((s as any).hour ?? 0) === 20  &&  ((s as any).minut ?? 0) < 45)) {
                                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                                } else {
                                  if (((s as any).hour ?? 0) === 20  &&  ((s as any).minut ?? 0) >= 45) {
                                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 21;
                                  } else {
                                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 22;
                                  }
                                }
                              }
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
              if (((s as any).university ?? 0)?.['exam_week'] === 2) {
                if (((s as any).hour ?? 0) < 2) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 31;
                } else {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
                }
              } else {
                if (((s as any).hour ?? 0) < 3) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 22;
                } else {
                  if (((s as any).hour ?? 0) < 11) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 23;
                  } else {
                    if (((s as any).hour ?? 0) === 11  ||  ((s as any).hour ?? 0) === 12) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                    } else {
                      if (((s as any).hour ?? 0) === 13  ||  ((s as any).hour ?? 0) === 14) {
                        if (((s as any).sunWeather ?? 0) === 1) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 17;
                        } else {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 18;
                        }
                      } else {
                        if (((s as any).hour ?? 0) === 15  ||  ((s as any).hour ?? 0) === 16  ||  (((s as any).hour ?? 0) === 17  &&  ((s as any).minut ?? 0) < 30)) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                        } else {
                          if (((s as any).hour ?? 0) === 17  &&  ((s as any).minut ?? 0) >= 30) {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 21;
                          } else {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 22;
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (((s as any).university ?? 0)?.['exam_week'] === 2) {
                if (((s as any).hour ?? 0) < 11) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
                } else {
                  if (((s as any).hour ?? 0) >= 11  &&  ((s as any).hour ?? 0) < 14) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
                  } else {
                    if (((s as any).hour ?? 0) === 14) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 24;
                    } else {
                      if (((s as any).hour ?? 0) === 15  ||  ((s as any).hour ?? 0) === 16) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 20;
                      } else {
                        if (((s as any).hour ?? 0) === 17) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 7;
                        } else {
                          if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 22) {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
                          } else {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                if (((s as any).hour ?? 0) === 0  &&  ((s as any).minut ?? 0) < 15) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 22;
                } else {
                  if (((s as any).hour ?? 0) < 11) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 9;
                  } else {
                    if (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 30) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 10;
                    } else {
                      if ((((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) >= 30)  ||  ((s as any).hour ?? 0) === 12) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                      } else {
                        if (((s as any).hour ?? 0) === 13) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 24;
                        } else {
                          if (((s as any).hour ?? 0) === 14  ||  ((s as any).hour ?? 0) === 15) {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 20;
                          } else {
                            if (((s as any).hour ?? 0) === 16) {
                              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 7;
                            } else {
                              if (((s as any).hour ?? 0) === 17  ||  ((s as any).hour ?? 0) === 18) {
                                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                              } else {
                                if (((s as any).hour ?? 0) === 19  ||  ((s as any).hour ?? 0) === 20) {
                                  if (((s as any).AlbinaQW ?? 0)?.['artem_invite'] === 2  ||  ((s as any).artemQW ?? 0)?.['alb3some_again'] === 3) {
                                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 25;
                                  } else {
                                    if ((Math.floor(Math.random() * 3) + 0) !== 0  &&  ((s as any).year ?? 0) > 2017  ||  (((s as any).year ?? 0) === 2017  &&  ((s as any).month ?? 0) >= 10)) {
                                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 26;
                                    } else {
                                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 27;
                                    }
                                  }
                                } else {
                                  if (((s as any).hour ?? 0) === 21  ||  ((s as any).hour ?? 0) === 22) {
                                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 19;
                                  } else {
                                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 9;
                                  }
                                }
                              }
                            }
                          }
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
        if (((s as any).university ?? 0)?.['semester_week'] === -1  ||  ((s as any).month ?? 0) === 5  ||  ((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 8) {
          if (((s as any).week ?? 0) < 6) {
            if (((s as any).hour ?? 0) < 10) {
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
            } else {
              if (((s as any).hour ?? 0) === 11) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
              } else {
                if (((s as any).hour ?? 0) === 12  ||  ((s as any).hour ?? 0) === 13) {
                  if (((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 4) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 20;
                  } else {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 32;
                  }
                } else {
                  if (((s as any).hour ?? 0) === 14) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 29;
                  } else {
                    if (((s as any).hour ?? 0) === 15) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 33;
                    } else {
                      if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 21) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
                      } else {
                        if (((s as any).week ?? 0) === 5) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 22;
                        } else {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (((s as any).week ?? 0) === 6) {
              if (((s as any).hour ?? 0) < 3) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 22;
              } else {
                if (((s as any).hour ?? 0) < 11) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 23;
                } else {
                  if (((s as any).hour ?? 0) === 11) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 7;
                  } else {
                    if (((s as any).hour ?? 0) === 12) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 32;
                    } else {
                      if (((s as any).hour ?? 0) === 13) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 33;
                      } else {
                        if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 17) {
                          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
                        } else {
                          if (((s as any).hour ?? 0) === 17) {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
                          } else {
                            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 22;
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (((s as any).hour ?? 0) < 10) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
              } else {
                if (((s as any).hour ?? 0) === 11  ||  ((s as any).hour ?? 0) === 12) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
                } else {
                  if (((s as any).hour ?? 0) === 13) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 24;
                  } else {
                    if (((s as any).hour ?? 0) === 14) {
                      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 32;
                    } else {
                      if (((s as any).hour ?? 0) === 15) {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 33;
                      } else {
                        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 30;
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A23'] = 35;
        }
      }
    }
  }
  scene.build();
}

export const albina_schedule: LocationDef = {
  name: 'albina_schedule',
  region: 'other',
  enter: enter,
};
