import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).locat ?? {})['Anya'] = 0;
  ((s as any).locat ?? {})['Anya_athome'] = 0;
  ((s as any).locat ?? {})['Anya_inroom'] = 0;
  ((s as any).locat ?? {})['Mother'] = 0;
  ((s as any).locat ?? {})['Mom_athome'] = 0;
  ((s as any).locat ?? {})['Stepdad'] = 0;
  ((s as any).locat ?? {})['sdad_athome'] = 0;
  ((s as any).locat ?? {})['Kolka'] = 0;
  ((s as any).locat ?? {})['Kolko_gaming'] = 0;
  ((s as any).locat ?? {})['Kolka_athome'] = 0;
  ((s as any).locat ?? {})['Fam_livingroom'] = 0;
  if (((s as any).month ?? 0) !== ((s as any).locat ?? 0)?.['Fam_month_inGad']  &&  ((s as any).week ?? 0) !== 7  &&  ((s as any).week ?? 0) !== 1) {
    ((s as any).locat ?? {})['Fam_month_inGad'] = ((s as any).month ?? 0);
    ((s as any).locat ?? {})['Fam_set_month_inGad'] = 1;
  }
  ((s as any).locat ?? {})['Fam_inGad'] = 0;
  if (((s as any).locat ?? 0)?.['Fam_set_month_inGad'] === 1) {
    if (((s as any).week ?? 0) === 1) {
      ((s as any).locat ?? {})['Fam_set_month_inGad'] = 0;
    } else {
      if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 12  ||  ((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) < 21) {
        ((s as any).locat ?? {})['Fam_inGad'] = 1;
      }
    }
  }
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1  &&  ((s as any).locat ?? 0)?.['Anya_check_Gad'] === 0) {
    ((s as any).locat ?? {})['Anya_check_Gad'] = 1;
    ((s as any).locat ?? {})['Anya_Gad'] = Math.floor(Math.random() * 2) + 0;
  }
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
    ((s as any).locat ?? {})['Anya_check_Gad'] = 0;
    ((s as any).locat ?? {})['Anya_Gad'] = 0;
  }
  if (((s as any).sisboyparty_day ?? 0) + 1 === ((s as any).daystart ?? 0)) {
    ((s as any).locat ?? {})['Anya_Gad'] = 0;
  }
  if (((s as any).locat ?? 0)?.['Anya_Gad'] === 0) {
    if (((s as any).week ?? 0) <= 5) {
      if ((((s as any).hour ?? 0) < 6)  ||  (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 45)) {
        ((s as any).locat ?? {})['Anya'] = 1;
        ((s as any).locat ?? {})['Anya_athome'] = 0;
        ((s as any).locat ?? {})['Anya_inroom'] = 1;
      } else {
        if ((((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) >= 45)  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15)) {
          ((s as any).locat ?? {})['Anya'] = 2;
          ((s as any).locat ?? {})['Anya_athome'] = 1;
          ((s as any).locat ?? {})['Anya_inroom'] = 0;
        } else {
          if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30) {
            ((s as any).locat ?? {})['Anya'] = 3;
            ((s as any).locat ?? {})['Anya_athome'] = 1;
            ((s as any).locat ?? {})['Anya_inroom'] = 0;
          } else {
            if (((s as any).hour ?? 0) < 8) {
              ((s as any).locat ?? {})['Anya'] = 4;
              ((s as any).locat ?? {})['Anya_athome'] = 1;
              ((s as any).locat ?? {})['Anya_inroom'] = 1;
            } else {
              if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 20) {
                ((s as any).locat ?? {})['Anya'] = 5;
                ((s as any).locat ?? {})['Anya_athome'] = 1;
                ((s as any).locat ?? {})['Anya_inroom'] = 0;
                if (((s as any).vanrPar_suction_dildo ?? 0) > 0  &&  ((s as any).loc ?? 0) !== 'vanrPar') {
                  ((s as any).anyaQW ?? {})['bathroom_dildos'] = ((s as any).vanrPar_suction_dildo ?? 0);
                }
              } else {
                if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30) {
                  ((s as any).locat ?? {})['Anya'] = 8;
                  ((s as any).locat ?? {})['Anya_athome'] = 0;
                  ((s as any).locat ?? {})['Anya_inroom'] = 0;
                } else {
                  if (((s as any).hour ?? 0) < 15  ||  (((s as any).hour ?? 0) === 15  &&  ((s as any).minut ?? 0) < 50)) {
                    ((s as any).locat ?? {})['Anya'] = 7;
                    ((s as any).locat ?? {})['Anya_athome'] = 0;
                    ((s as any).locat ?? {})['Anya_inroom'] = 0;
                  } else {
                    if (((s as any).hour ?? 0) < 16) {
                      ((s as any).locat ?? {})['Anya'] = 9;
                      ((s as any).locat ?? {})['Anya_athome'] = 0;
                      ((s as any).locat ?? {})['Anya_inroom'] = 0;
                    } else {
                      if (((s as any).hour ?? 0) < 18) {
                        if (((s as any).week ?? 0) === 5) {
                          ((s as any).locat ?? {})['Anya'] = 10;
                          ((s as any).locat ?? {})['Anya_athome'] = 0;
                          ((s as any).locat ?? {})['Anya_inroom'] = 0;
                        } else {
                          if (((s as any).sisboyday ?? 0) + 1 === ((s as any).daystart ?? 0)) {
                            ((s as any).locat ?? {})['Anya'] = 11;
                            ((s as any).locat ?? {})['Anya_athome'] = 1;
                            ((s as any).locat ?? {})['Anya_inroom'] = 1;
                          } else {
                            if (((s as any).locat ?? 0)?.['Anya_rand1'] !== ((s as any).daystart ?? 0)) {
                              ((s as any).locat ?? {})['Anya'] = qspFunc(s, 'random', 'pick_from', 10, 15);
                              ((s as any).locat ?? {})['Anya_rand1'] = ((s as any).daystart ?? 0);
                              ((s as any).locat ?? {})['Anya_save1'] = ((s as any).locat ?? 0)?.['Anya'];
                            } else {
                              ((s as any).locat ?? {})['Anya'] = ((s as any).locat ?? 0)?.['Anya_save1'];
                            }
                            if (((s as any).locat ?? 0)?.['Anya'] === 15) {
                              ((s as any).locat ?? {})['Anya_athome'] = 1;
                              ((s as any).locat ?? {})['Anya_inroom'] = 1;
                            } else {
                              ((s as any).locat ?? {})['Anya_athome'] = 0;
                              ((s as any).locat ?? {})['Anya_inroom'] = 0;
                            }
                          }
                        }
                      } else {
                        if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30) {
                          if (((s as any).week ?? 0) === 5) {
                            ((s as any).locat ?? {})['Anya'] = 24;
                            ((s as any).locat ?? {})['Anya_athome'] = 0;
                            ((s as any).locat ?? {})['Anya_inroom'] = 0;
                          } else {
                            ((s as any).locat ?? {})['Anya'] = 12;
                            ((s as any).locat ?? {})['Anya_athome'] = 1;
                            ((s as any).locat ?? {})['Anya_inroom'] = 0;
                          }
                        } else {
                          if (((s as any).hour ?? 0) < 22) {
                            if (((s as any).week ?? 0) === 5) {
                              ((s as any).locat ?? {})['Anya'] = 24;
                              ((s as any).locat ?? {})['Anya_athome'] = 0;
                              ((s as any).locat ?? {})['Anya_inroom'] = 0;
                            } else {
                              if (((s as any).locat ?? 0)?.['Anya_rand2'] !== ((s as any).daystart ?? 0)) {
                                ((s as any).locat ?? {})['Anya'] = qspFunc(s, 'random', 'pick_from', 13, 14, 15);
                                ((s as any).locat ?? {})['Anya_rand2'] = ((s as any).daystart ?? 0);
                                ((s as any).locat ?? {})['Anya_save2'] = ((s as any).locat ?? 0)?.['Anya'];
                              } else {
                                ((s as any).locat ?? {})['Anya'] = ((s as any).locat ?? 0)?.['Anya_save2'];
                              }
                              if (((s as any).locat ?? 0)?.['Anya'] === 15) {
                                ((s as any).locat ?? {})['Anya_athome'] = 1;
                                ((s as any).locat ?? {})['Anya_inroom'] = 1;
                              } else {
                                ((s as any).locat ?? {})['Anya_athome'] = 0;
                                ((s as any).locat ?? {})['Anya_inroom'] = 0;
                              }
                            }
                          } else {
                            if (((s as any).week ?? 0) === 5) {
                              ((s as any).locat ?? {})['Anya'] = 24;
                              ((s as any).locat ?? {})['Anya_athome'] = 0;
                              ((s as any).locat ?? {})['Anya_inroom'] = 0;
                            } else {
                              ((s as any).locat ?? {})['Anya'] = 15;
                              ((s as any).locat ?? {})['Anya_athome'] = 1;
                              ((s as any).locat ?? {})['Anya_inroom'] = 1;
                            }
                          }
                        }
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
        ((s as any).locat ?? {})['Anya'] = 24;
        ((s as any).locat ?? {})['Anya_athome'] = 0;
        ((s as any).locat ?? {})['Anya_inroom'] = 0;
      } else {
        if (((s as any).hour ?? 0) === 2  &&  ((s as any).minut ?? 0) < 20) {
          ((s as any).locat ?? {})['Anya'] = 26;
          ((s as any).locat ?? {})['Anya_athome'] = 0;
          ((s as any).locat ?? {})['Anya_inroom'] = 1;
        } else {
          if (((s as any).hour ?? 0) < 9) {
            ((s as any).locat ?? {})['Anya'] = 1;
            ((s as any).locat ?? {})['Anya_athome'] = 0;
            ((s as any).locat ?? {})['Anya_inroom'] = 1;
          } else {
            if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) <= 20) {
              ((s as any).locat ?? {})['Anya'] = 16;
              ((s as any).locat ?? {})['Anya_athome'] = 1;
              ((s as any).locat ?? {})['Anya_inroom'] = 0;
            } else {
              if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 40) {
                ((s as any).locat ?? {})['Anya'] = 5;
                ((s as any).locat ?? {})['Anya_athome'] = 1;
                ((s as any).locat ?? {})['Anya_inroom'] = 0;
              } else {
                if (((s as any).hour ?? 0) < 10) {
                  ((s as any).locat ?? {})['Anya'] = 4;
                  ((s as any).locat ?? {})['Anya_athome'] = 1;
                  ((s as any).locat ?? {})['Anya_inroom'] = 1;
                } else {
                  if (((s as any).hour ?? 0) < 16) {
                    if (((s as any).temp ?? 0) > 15  &&  ((s as any).sunWeather ?? 0) === 1) {
                      ((s as any).locat ?? {})['Anya'] = 17;
                      ((s as any).locat ?? {})['Anya_athome'] = 0;
                      ((s as any).locat ?? {})['Anya_inroom'] = 0;
                    } else {
                      ((s as any).locat ?? {})['Anya'] = 15;
                      ((s as any).locat ?? {})['Anya_athome'] = 1;
                      ((s as any).locat ?? {})['Anya_inroom'] = 1;
                    }
                  } else {
                    if (((s as any).hour ?? 0) < 18) {
                      if (((s as any).week ?? 0) === 6) {
                        ((s as any).locat ?? {})['Anya'] = 10;
                        ((s as any).locat ?? {})['Anya_athome'] = 0;
                        ((s as any).locat ?? {})['Anya_inroom'] = 0;
                      } else {
                        ((s as any).locat ?? {})['Anya'] = 21;
                        ((s as any).locat ?? {})['Anya_athome'] = 0;
                        ((s as any).locat ?? {})['Anya_inroom'] = 0;
                      }
                    } else {
                      if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30) {
                        if (((s as any).week ?? 0) === 6) {
                          ((s as any).locat ?? {})['Anya'] = 24;
                          ((s as any).locat ?? {})['Anya_athome'] = 0;
                          ((s as any).locat ?? {})['Anya_inroom'] = 0;
                        } else {
                          ((s as any).locat ?? {})['Anya'] = 12;
                          ((s as any).locat ?? {})['Anya_athome'] = 1;
                          ((s as any).locat ?? {})['Anya_inroom'] = 0;
                        }
                      } else {
                        if (((s as any).hour ?? 0) < 19) {
                          if (((s as any).week ?? 0) === 7) {
                            ((s as any).locat ?? {})['Anya'] = 23;
                            ((s as any).locat ?? {})['Anya_athome'] = 1;
                            ((s as any).locat ?? {})['Anya_inroom'] = 0;
                          } else {
                            ((s as any).locat ?? {})['Anya'] = 24;
                            ((s as any).locat ?? {})['Anya_athome'] = 0;
                            ((s as any).locat ?? {})['Anya_inroom'] = 0;
                          }
                        } else {
                          if (((s as any).week ?? 0) === 7) {
                            ((s as any).locat ?? {})['Anya'] = 15;
                            ((s as any).locat ?? {})['Anya_athome'] = 1;
                            ((s as any).locat ?? {})['Anya_inroom'] = 1;
                          } else {
                            ((s as any).locat ?? {})['Anya'] = 24;
                            ((s as any).locat ?? {})['Anya_athome'] = 0;
                            ((s as any).locat ?? {})['Anya_inroom'] = 0;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).locat ?? 0)?.['Mom_cafesex_daystart'] !== ((s as any).daystart ?? 0)) {
    ((s as any).locat ?? {})['Mom_cafesex_daystart'] = ((s as any).daystart ?? 0);
    ((s as any).locat ?? {})['Mom_cafe_sex'] = Math.floor(Math.random() * 2) + 0;
  }
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
    if (((s as any).week ?? 0) <= 5) {
      if (((s as any).hour ?? 0) < 5  ||  (((s as any).hour ?? 0) === 5  &&  ((s as any).minut ?? 0) < 30)) {
        ((s as any).locat ?? {})['Mother'] = 1;
        ((s as any).locat ?? {})['Mom_athome'] = 0;
      } else {
        if (((s as any).hour ?? 0) === 5  &&  ((s as any).minut ?? 0) < 45) {
          ((s as any).locat ?? {})['Mother'] = 2;
          ((s as any).locat ?? {})['Mom_athome'] = 1;
          if (((s as any).vanrPar_suction_dildo ?? 0) > 0  &&  ((s as any).loc ?? 0) !== 'vanrPar') {
            qspCall(s, 'mother_sextalk', 'discover_dildo');
          }
        } else {
          if (((s as any).hour ?? 0) < 6) {
            ((s as any).locat ?? {})['Mother'] = 3;
            ((s as any).locat ?? {})['Mom_athome'] = 1;
          } else {
            if (((s as any).hour ?? 0) === 6  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30)) {
              ((s as any).locat ?? {})['Mother'] = 4;
              ((s as any).locat ?? {})['Mom_athome'] = 1;
              if (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) <= 40) {
                ((s as any).locat ?? {})['Mom_kitchen_action'] = 1;
              } else {
                if (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 45) {
                  ((s as any).locat ?? {})['Mom_kitchen_action'] = 2;
                } else {
                  if ((((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) >= 45)  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15)) {
                    ((s as any).locat ?? {})['Mom_kitchen_action'] = 3;
                  } else {
                    ((s as any).locat ?? {})['Mom_kitchen_action'] = 4;
                  }
                }
              }
            } else {
              if (((s as any).hour ?? 0) === 7  ||  (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30)) {
                if (((s as any).locat ?? 0)?.['Mother_clean1_daystart'] !== ((s as any).daystart ?? 0)) {
                  ((s as any).locat ?? {})['Mother_clean1_daystart'] = ((s as any).daystart ?? 0);
                  if ((Math.floor(Math.random() * 2) + 0) === 1) {
                    ((s as any).locat ?? {})['Mother_clean1'] = 23;
                  } else {
                    ((s as any).locat ?? {})['Mother_clean1'] = 24;
                  }
                }
                ((s as any).locat ?? {})['Mother'] = ((s as any).locat ?? 0)?.['Mother_clean1'];
                ((s as any).locat ?? {})['Mom_athome'] = 1;
              } else {
                if ((((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) < 16)  ||  (((s as any).week ?? 0) === 5  &&  (((s as any).hour ?? 0) < 17  ||  (((s as any).hour ?? 0) === 17  &&  ((s as any).minut ?? 0) <= 50)))) {
                  ((s as any).locat ?? {})['Mother'] = 9;
                  ((s as any).locat ?? {})['Mom_athome'] = 0;
                } else {
                  if (((s as any).hour ?? 0) === 16  &&  ((s as any).minut ?? 0) < 50  &&  ((s as any).week ?? 0) < 5) {
                    ((s as any).locat ?? {})['Mother'] = 7;
                    ((s as any).locat ?? {})['Mom_athome'] = 0;
                  } else {
                    if (((s as any).hour ?? 0) < 17  &&  ((s as any).week ?? 0) < 5) {
                      ((s as any).locat ?? {})['Mother'] = 8;
                      ((s as any).locat ?? {})['Mom_athome'] = 0;
                    } else {
                      if (((s as any).hour ?? 0) < 18  &&  ((s as any).week ?? 0) === 5) {
                        ((s as any).locat ?? {})['Mother'] = 10;
                        ((s as any).locat ?? {})['Mom_athome'] = 0;
                      } else {
                        if (((s as any).hour ?? 0) < 18) {
                          ((s as any).locat ?? {})['Mother'] = 11;
                          ((s as any).locat ?? {})['Mom_athome'] = 1;
                        } else {
                          if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30) {
                            ((s as any).locat ?? {})['Mother'] = 12;
                            ((s as any).locat ?? {})['Mom_athome'] = 1;
                          } else {
                            if (((s as any).hour ?? 0) < 19) {
                              ((s as any).locat ?? {})['Mother'] = 13;
                              ((s as any).locat ?? {})['Mom_athome'] = 1;
                            } else {
                              if (((s as any).hour ?? 0) < 20) {
                                if (((s as any).week ?? 0) === 1) {
                                  ((s as any).locat ?? {})['Mother'] = 20;
                                  ((s as any).locat ?? {})['Mom_athome'] = 0;
                                } else {
                                  if (((s as any).locat ?? 0)?.['Mother_clean2_daystart'] !== ((s as any).daystart ?? 0)) {
                                    ((s as any).locat ?? {})['Mother_clean2_daystart'] = ((s as any).daystart ?? 0);
                                    if ((!(Math.floor(Math.random() * 2) + 0))) {
                                      ((s as any).locat ?? {})['Mother_clean2'] = 23;
                                    } else {
                                      ((s as any).locat ?? {})['Mother_clean2'] = 25;
                                    }
                                  }
                                  ((s as any).locat ?? {})['Mother'] = ((s as any).locat ?? 0)?.['Mother_clean2'];
                                  ((s as any).locat ?? {})['Mom_athome'] = 1;
                                  if (((s as any).vanrPar_suction_dildo ?? 0) > 0  &&  ((s as any).loc ?? 0) !== 'vanrPar'  &&  ((s as any).locat ?? 0)?.['Mother'] === 25) {
                                    qspCall(s, 'mother_sextalk', 'discover_dildo');
                                  }
                                }
                              } else {
                                if (((s as any).hour ?? 0) < 22) {
                                  if (((s as any).week ?? 0) === 1) {
                                    ((s as any).locat ?? {})['Mother'] = 20;
                                    ((s as any).locat ?? {})['Mom_athome'] = 0;
                                  } else {
                                    if (((s as any).week ?? 0) < 5) {
                                      ((s as any).locat ?? {})['Mother'] = 19;
                                      ((s as any).locat ?? {})['Mom_athome'] = 1;
                                    } else {
                                      ((s as any).locat ?? {})['Mother'] = 19;
                                      ((s as any).locat ?? {})['Mom_athome'] = 1;
                                    }
                                  }
                                } else {
                                  ((s as any).locat ?? {})['Mother'] = 1;
                                  ((s as any).locat ?? {})['Mom_athome'] = 0;
                                }
                              }
                            }
                          }
                        }
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
      if (((s as any).hour ?? 0) < 5  ||  (((s as any).hour ?? 0) === 5  &&  ((s as any).minut ?? 0) < 30)) {
        ((s as any).locat ?? {})['Mother'] = 1;
      } else {
        if (((s as any).hour ?? 0) === 5  &&  ((s as any).minut ?? 0) < 45) {
          ((s as any).locat ?? {})['Mother'] = 2;
          ((s as any).locat ?? {})['Mom_athome'] = 1;
          if (((s as any).vanrPar_suction_dildo ?? 0) > 0  &&  ((s as any).loc ?? 0) !== 'vanrPar') {
            qspCall(s, 'mother_sextalk', 'discover_dildo');
          }
        } else {
          if (((s as any).hour ?? 0) < 6) {
            ((s as any).locat ?? {})['Mother'] = 3;
            ((s as any).locat ?? {})['Mom_athome'] = 1;
          } else {
            if (((s as any).hour ?? 0) === 6  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30)) {
              ((s as any).locat ?? {})['Mother'] = 4;
              ((s as any).locat ?? {})['Mom_athome'] = 1;
              if (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) <= 40) {
                ((s as any).locat ?? {})['Mom_kitchen_action'] = 1;
              } else {
                if (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 45) {
                  ((s as any).locat ?? {})['Mom_kitchen_action'] = 2;
                } else {
                  if (((s as any).hour ?? 0) === 6  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15)) {
                    ((s as any).locat ?? {})['Mom_kitchen_action'] = 3;
                  } else {
                    ((s as any).locat ?? {})['Mom_kitchen_action'] = 4;
                  }
                }
              }
            } else {
              if (((s as any).hour ?? 0) < 11) {
                if (((s as any).locat ?? 0)?.['Mother_clean1_daystart'] !== ((s as any).daystart ?? 0)) {
                  ((s as any).locat ?? {})['Mother_clean1_daystart'] = ((s as any).daystart ?? 0);
                  if (((s as any).week ?? 0) === 6) {
                    ((s as any).locat ?? {})['Mother_clean1'] = Math.floor(Math.random() * 4) + 23;
                  } else {
                    ((s as any).locat ?? {})['Mother_clean1'] = Math.floor(Math.random() * 2) + 23;
                  }
                }
                ((s as any).locat ?? {})['Mother'] = ((s as any).locat ?? 0)?.['Mother_clean1'];
                ((s as any).locat ?? {})['Mom_athome'] = 1;
                if (((s as any).vanrPar_suction_dildo ?? 0) > 0  &&  ((s as any).loc ?? 0) !== 'vanrPar'  &&  ((s as any).locat ?? 0)?.['Mother'] === 25) {
                  qspCall(s, 'mother_sextalk', 'discover_dildo');
                }
              } else {
                if (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 30) {
                  ((s as any).locat ?? {})['Mother'] = 14;
                  ((s as any).locat ?? {})['Mom_athome'] = 0;
                } else {
                  if (((s as any).hour ?? 0) < 12  ||  (((s as any).hour ?? 0) === 12  &&  ((s as any).minut ?? 0) < 30)) {
                    ((s as any).locat ?? {})['Mom_athome'] = 0;
                    if (((s as any).week ?? 0) === 6) {
                      if (((s as any).locat ?? 0)?.['Mom_Salon_daystart'] === ((s as any).daystart ?? 0)) {
                        ((s as any).locat ?? {})['Mother'] = 15;
                      } else {
                        ((s as any).locat ?? {})['Mother'] = 21;
                      }
                    } else {
                      ((s as any).locat ?? {})['Mother'] = 16;
                    }
                  } else {
                    if (((s as any).hour ?? 0) === 12  ||  (((s as any).hour ?? 0) === 13  &&  ((s as any).minut ?? 0) < 30)  &&  ((s as any).week ?? 0) === 6) {
                      ((s as any).locat ?? {})['Mother'] = 16;
                    } else {
                      if (((s as any).hour ?? 0) < 14) {
                        ((s as any).locat ?? {})['Mother'] = 15;
                        ((s as any).locat ?? {})['Mom_athome'] = 0;
                      } else {
                        if (((s as any).hour ?? 0) < 17) {
                          ((s as any).locat ?? {})['Mother'] = Math.floor(Math.random() * 2) + 14;
                          ((s as any).locat ?? {})['Mom_athome'] = 0;
                        } else {
                          if (((s as any).hour ?? 0) < 18) {
                            ((s as any).locat ?? {})['Mother'] = 11;
                            ((s as any).locat ?? {})['Mom_athome'] = 1;
                          } else {
                            if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30) {
                              ((s as any).locat ?? {})['Mother'] = 12;
                              ((s as any).locat ?? {})['Mom_athome'] = 1;
                            } else {
                              if (((s as any).hour ?? 0) < 19) {
                                ((s as any).locat ?? {})['Mother'] = 13;
                                ((s as any).locat ?? {})['Mom_athome'] = 1;
                              } else {
                                if (((s as any).hour ?? 0) < 21) {
                                  ((s as any).locat ?? {})['Mom_athome'] = 0;
                                  if (((s as any).week ?? 0) === 6) {
                                    ((s as any).locat ?? {})['Mother'] = 17;
                                  } else {
                                    ((s as any).locat ?? {})['Mother'] = 18;
                                  }
                                } else {
                                  if (((s as any).hour ?? 0) < 22) {
                                    if (((s as any).week ?? 0) === 7) {
                                      ((s as any).locat ?? {})['Mother'] = 19;
                                      ((s as any).locat ?? {})['Mom_athome'] = 1;
                                    } else {
                                      ((s as any).locat ?? {})['Mother'] = 19;
                                      ((s as any).locat ?? {})['Mom_athome'] = 1;
                                    }
                                  } else {
                                    ((s as any).locat ?? {})['Mother'] = 1;
                                    ((s as any).locat ?? {})['Mom_athome'] = 0;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
    if (((s as any).week ?? 0) <= 5) {
      if (((s as any).hour ?? 0) < 6  ||  (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 10)) {
        ((s as any).locat ?? {})['Stepdad'] = 1;
        ((s as any).locat ?? {})['sdad_athome'] = 0;
      } else {
        if (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 45) {
          ((s as any).locat ?? {})['Stepdad'] = 2;
          ((s as any).locat ?? {})['sdad_athome'] = 1;
        } else {
          if ((((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) >= 45)  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15)) {
            ((s as any).locat ?? {})['Stepdad'] = 3;
            ((s as any).locat ?? {})['sdad_athome'] = 1;
          } else {
            if (((s as any).hour ?? 0) < 8) {
              ((s as any).locat ?? {})['Stepdad'] = 4;
              ((s as any).locat ?? {})['sdad_athome'] = 1;
            } else {
              if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30) {
                ((s as any).locat ?? {})['Stepdad'] = 10;
                ((s as any).locat ?? {})['sdad_athome'] = 1;
              } else {
                if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 45) {
                  ((s as any).locat ?? {})['Stepdad'] = 5;
                  ((s as any).locat ?? {})['sdad_athome'] = 1;
                } else {
                  if (((s as any).hour ?? 0) < 17  ||  (((s as any).hour ?? 0) === 17  &&  ((s as any).minut ?? 0) < 45)) {
                    ((s as any).locat ?? {})['Stepdad'] = 6;
                    ((s as any).locat ?? {})['sdad_athome'] = 0;
                  } else {
                    if (((s as any).hour ?? 0) < 18) {
                      ((s as any).locat ?? {})['Stepdad'] = 7;
                      ((s as any).locat ?? {})['sdad_athome'] = 1;
                    } else {
                      if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30) {
                        ((s as any).locat ?? {})['Stepdad'] = 8;
                        ((s as any).locat ?? {})['sdad_athome'] = 1;
                      } else {
                        if (((s as any).hour ?? 0) < 19  ||  (((s as any).hour ?? 0) === 19  &&  ((s as any).minut ?? 0) < 45)) {
                          if (((s as any).week ?? 0) === 5) {
                            (s as any).fatherdrunk = 1;
                            ((s as any).locat ?? {})['Stepdad'] = 9;
                            ((s as any).locat ?? {})['sdad_athome'] = 1;
                          } else {
                            ((s as any).locat ?? {})['Stepdad'] = 9;
                            ((s as any).locat ?? {})['sdad_athome'] = 1;
                          }
                        } else {
                          if (((s as any).hour ?? 0) < 21  ||  (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 45)) {
                            if (((s as any).week ?? 0) === 5) {
                              (s as any).fatherdrunk = 1;
                              ((s as any).locat ?? {})['Stepdad'] = 9;
                              ((s as any).locat ?? {})['sdad_athome'] = 1;
                            } else {
                              ((s as any).locat ?? {})['Stepdad'] = 10;
                              ((s as any).locat ?? {})['sdad_athome'] = 1;
                            }
                          } else {
                            if (((s as any).hour ?? 0) < 22) {
                              ((s as any).locat ?? {})['Stepdad'] = 11;
                              ((s as any).locat ?? {})['sdad_athome'] = 1;
                            } else {
                              ((s as any).locat ?? {})['Stepdad'] = 1;
                              ((s as any).locat ?? {})['sdad_athome'] = 0;
                            }
                          }
                        }
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
      if (((s as any).hour ?? 0) < 6  ||  (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 10)) {
        ((s as any).locat ?? {})['Stepdad'] = 1;
        ((s as any).locat ?? {})['sdad_athome'] = 0;
      } else {
        if (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) > 10  &&  ((s as any).minut ?? 0) < 45) {
          ((s as any).locat ?? {})['Stepdad'] = 2;
          ((s as any).locat ?? {})['sdad_athome'] = 1;
        } else {
          if ((((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) >= 45)  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15)) {
            ((s as any).locat ?? {})['Stepdad'] = 3;
            ((s as any).locat ?? {})['sdad_athome'] = 1;
          } else {
            if (((s as any).hour ?? 0) < 8) {
              ((s as any).locat ?? {})['Stepdad'] = 4;
              ((s as any).locat ?? {})['sdad_athome'] = 1;
            } else {
              if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 20) {
                ((s as any).locat ?? {})['Stepdad'] = 11;
                ((s as any).locat ?? {})['sdad_athome'] = 1;
              } else {
                if (((s as any).hour ?? 0) < 9) {
                  ((s as any).locat ?? {})['Stepdad'] = 10;
                  ((s as any).locat ?? {})['sdad_athome'] = 1;
                } else {
                  if (((s as any).hour ?? 0) < 13) {
                    if (((s as any).week ?? 0) === 6) {
                      ((s as any).locat ?? {})['Stepdad'] = 9;
                      ((s as any).locat ?? {})['sdad_athome'] = 1;
                    } else {
                      ((s as any).locat ?? {})['Stepdad'] = 12;
                      ((s as any).locat ?? {})['sdad_athome'] = 0;
                    }
                  } else {
                    if (((s as any).hour ?? 0) < 18) {
                      ((s as any).locat ?? {})['Stepdad'] = 9;
                      ((s as any).locat ?? {})['sdad_athome'] = 1;
                    } else {
                      if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30) {
                        ((s as any).locat ?? {})['Stepdad'] = 8;
                        ((s as any).locat ?? {})['sdad_athome'] = 1;
                      } else {
                        if (((s as any).hour ?? 0) < 22) {
                          if (((s as any).week ?? 0) === 6) {
                            (s as any).fatherdrunk = 1;
                            ((s as any).locat ?? {})['Stepdad'] = 9;
                            ((s as any).locat ?? {})['sdad_athome'] = 1;
                          } else {
                            ((s as any).locat ?? {})['Stepdad'] = 10;
                            ((s as any).locat ?? {})['sdad_athome'] = 1;
                          }
                        } else {
                          ((s as any).locat ?? {})['Stepdad'] = 1;
                          ((s as any).locat ?? {})['sdad_athome'] = 0;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
    if (((s as any).week ?? 0) <= 5) {
      if (((s as any).hour ?? 0) < 6  ||  (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 45)) {
        if (((s as any).brotherQW ?? 0)?.['last_sex_day_morning'] !== ((s as any).daystart ?? 0)) {
          ((s as any).locat ?? {})['Kolka'] = 1;
          ((s as any).locat ?? {})['Kolka_athome'] = 0;
        } else {
          ((s as any).locat ?? {})['Kolka'] = 2;
          ((s as any).locat ?? {})['Kolka_athome'] = 1;
        }
      } else {
        if ((((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) >= 45)  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15)) {
          ((s as any).locat ?? {})['Kolka'] = 3;
          ((s as any).locat ?? {})['Kolka_athome'] = 1;
        } else {
          if (((s as any).hour ?? 0) < 8) {
            ((s as any).locat ?? {})['Kolka'] = 4;
            ((s as any).locat ?? {})['Kolka_athome'] = 0;
          } else {
            if (((s as any).hour ?? 0) < 14) {
              if ((!((s as any).kanikuli ?? 0))) {
                ((s as any).locat ?? {})['Kolka'] = 5;
                ((s as any).locat ?? {})['Kolka_athome'] = 0;
              } else {
                ((s as any).locat ?? {})['Kolka'] = 6;
                ((s as any).locat ?? {})['Kolka_athome'] = 0;
              }
            } else {
              if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 17) {
                ((s as any).locat ?? {})['Kolka'] = 6;
                ((s as any).locat ?? {})['Kolka_athome'] = 0;
              } else {
                if (((s as any).hour ?? 0) < 18) {
                  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).brotherQW ?? 0)?.['last_day_homework'] !== ((s as any).daystart ?? 0)) {
                    ((s as any).locat ?? {})['Kolka'] = 7;
                    ((s as any).locat ?? {})['Kolka_athome'] = 1;
                  } else {
                    ((s as any).locat ?? {})['Kolka'] = 11;
                    ((s as any).locat ?? {})['Kolka_athome'] = 1;
                  }
                } else {
                  if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30) {
                    ((s as any).locat ?? {})['Kolka'] = 8;
                    ((s as any).locat ?? {})['Kolka_athome'] = 1;
                  } else {
                    if (((s as any).hour ?? 0) < 21) {
                      ((s as any).locat ?? {})['Kolka'] = 9;
                      ((s as any).locat ?? {})['Kolka_athome'] = 0;
                    } else {
                      if (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 15) {
                        ((s as any).locat ?? {})['Kolka'] = 10;
                        ((s as any).locat ?? {})['Kolka_athome'] = 1;
                      } else {
                        if (((s as any).hour ?? 0) < 23) {
                          ((s as any).locat ?? {})['Kolka'] = 11;
                          ((s as any).locat ?? {})['Kolka_athome'] = 1;
                        } else {
                          ((s as any).locat ?? {})['Kolka'] = 1;
                          ((s as any).locat ?? {})['Kolka_athome'] = 0;
                        }
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
      if (((s as any).hour ?? 0) < 6  ||  (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 45)) {
        if (((s as any).brotherQW ?? 0)?.['last_sex_day_morning'] !== ((s as any).daystart ?? 0)) {
          ((s as any).locat ?? {})['Kolka'] = 1;
          ((s as any).locat ?? {})['Kolka_athome'] = 0;
        } else {
          ((s as any).locat ?? {})['Kolka'] = 2;
          ((s as any).locat ?? {})['Kolka_athome'] = 1;
        }
      } else {
        if ((((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) >= 45)  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15)) {
          ((s as any).locat ?? {})['Kolka'] = 3;
          ((s as any).locat ?? {})['Kolka_athome'] = 1;
        } else {
          if (((s as any).hour ?? 0) < 10) {
            if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).brotherQW ?? 0)?.['last_day_homework'] !== ((s as any).daystart ?? 0)) {
              ((s as any).locat ?? {})['Kolka'] = 7;
              ((s as any).locat ?? {})['Kolka_athome'] = 1;
            } else {
              ((s as any).locat ?? {})['Kolka'] = 11;
              ((s as any).locat ?? {})['Kolka_athome'] = 1;
            }
          } else {
            if (((s as any).hour ?? 0) <= 13) {
              ((s as any).locat ?? {})['Kolka'] = 11;
              ((s as any).locat ?? {})['Kolka_athome'] = 1;
            } else {
              if (((s as any).hour ?? 0) < 18) {
                ((s as any).locat ?? {})['Kolka'] = 9;
                ((s as any).locat ?? {})['Kolka_athome'] = 0;
              } else {
                if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30) {
                  ((s as any).locat ?? {})['Kolka'] = 8;
                  ((s as any).locat ?? {})['Kolka_athome'] = 1;
                } else {
                  if (((s as any).hour ?? 0) < 21) {
                    ((s as any).locat ?? {})['Kolka'] = 11;
                    ((s as any).locat ?? {})['Kolka_athome'] = 1;
                  } else {
                    if (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 15) {
                      ((s as any).locat ?? {})['Kolka'] = 10;
                      ((s as any).locat ?? {})['Kolka_athome'] = 1;
                    } else {
                      if (((s as any).hour ?? 0) < 23) {
                        ((s as any).locat ?? {})['Kolka'] = 11;
                        ((s as any).locat ?? {})['Kolka_athome'] = 1;
                      } else {
                        ((s as any).locat ?? {})['Kolka'] = 1;
                        ((s as any).locat ?? {})['Kolka_athome'] = 0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if ((((s as any).locat ?? 0)?.['Kolka'] === 2  &&  ((s as any).brotherQW ?? 0)?.['last_sex_day_morning'] === ((s as any).daystart ?? 0))  ||  ((s as any).locat ?? 0)?.['Kolka'] === 1  ||  ((s as any).locat ?? 0)?.['Kolka'] === 7  ||  ((s as any).locat ?? 0)?.['Kolka'] === 11  ||  ((s as any).locat ?? 0)?.['Stepdad'] === 10  ||  ((s as any).locat ?? 0)?.['Mother'] === 19  ||  ((s as any).locat ?? 0)?.['Mother'] === 24) {
    ((s as any).locat ?? {})['Fam_livingroom'] = 1;
  }
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).locat ?? 0)?.['Kolka'] === 11  &&  ((s as any).locat ?? 0)?.['Stepdad'] !== 10  &&  ((s as any).ocat ?? 0)?.['Mother'] !== 19) {
    ((s as any).locat ?? {})['Kolko_gaming'] = 1;
  }
  scene.build();
}

export const family_schedule: LocationDef = {
  name: 'family_schedule',
  region: 'other',
  enter: enter,
};
