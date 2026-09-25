import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInitBreasttissue(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetUseableCupsize(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).lactation ?? 0)?.['useable_cupsize'] > 0) {
    ((s as any).lactation = (s as any).lactation ?? {})['breasttissueinitiated'] = 1;
    ((s as any).lactation = (s as any).lactation ?? {})['last_useable_cupsize'] = (((s as any).lactation ?? 0)?.['useable_cupsize']);
    ((s as any).lactation = (s as any).lactation ?? {})['breastcount'] = 2;
    if (((s as any).lactation ?? 0)?.['breastdensitytype'] < 3) {
      ((s as any).lactation = (s as any).lactation ?? {})['breastdensitytype'] = (Math.floor(Math.random() * 3) + 3);
      ((s as any).lactation = (s as any).lactation ?? {})['lactlib_change'] = 1;
    }
    if (((s as any).lactation ?? 0)?.['maturebreast'] > 0) {
      ((s as any).lactation = (s as any).lactation ?? {})['breastdensitytype'] = 5;
      ((s as any).lactation = (s as any).lactation ?? {})['breastdensitypercent'] = 93;
    } else {
      if (((s as any).lactation ?? 0)?.['breastdensitytype'] === 5) {
        ((s as any).lactation = (s as any).lactation ?? {})['breastdensitypercent'] = 93;
      } else {
        if (((s as any).lactation ?? 0)?.['breastdensitytype'] === 4) {
          ((s as any).lactation = (s as any).lactation ?? {})['breastdensitypercent'] = 74;
        } else {
          if (((s as any).lactation ?? 0)?.['breastdensitytype'] === 3) {
            ((s as any).lactation = (s as any).lactation ?? {})['breastdensitypercent'] = 55;
          }
        }
      }
    }
    ((s as any).lactation = (s as any).lactation ?? {})['breastglandtissue'] = (qspFunc(s, 'lact_lib', 'bsizetoccm', (((s as any).lactation ?? 0)?.['useable_cupsize']))*(((s as any).lactation ?? {})?.['breastdensitypercent'] ?? 0))/100 + ((((s as any).lactation ?? {})?.['preggrowth'] ?? 0)/100);
    ((s as any).lactation = (s as any).lactation ?? {})['breastmm'] = ((((s as any).lactation ?? {})?.['breastglandtissue'] ?? 0)*(100 + ((((s as any).lactation ?? {})?.['alveoliexpandlvl'] ?? 0) * 40)))*(((s as any).lactation ?? {})?.['breastcount'] ?? 0);
  } else {
    ((s as any).lactation = (s as any).lactation ?? {})['breastcount'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['breasttissueinitiated'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['breastdensitypercent'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['breastmm'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['active'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['lactlib_change'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['alveoliexpandlvl'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['alveoliexpandlvl_change'] = 0;
  }
  return;
  scene.build();
}

function enterSetUseableCupsize(s: GameState, scene: SceneBuilder): void {
  ((s as any).lactation = (s as any).lactation ?? {})['useable_cupsize'] = (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) + (((s as any).bodyVars ?? {})?.['bust_bonus'] ?? 0) + (((s as any).bodyVars ?? {})?.['bust_lact'] ?? 0) + (((s as any).bodyVars ?? {})?.['bust_magic'] ?? 0) + (((s as any).bodyVars ?? {})?.['bust_other'] ?? 0) - (((s as any).bodyVars ?? {})?.['vofat'] ?? 0);
  return;
  scene.build();
}

function enterBsizetoccm(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') < 0) {
    (s as any).result = 100;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') <= 15) {
      (s as any).result = ((((s as any).locArgs?.[1] ?? 0)*14)+100);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') <= 20) {
        (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-15)*16)+310);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') <= 25) {
          (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-20)*18)+390);
        } else {
          if (String((s as any).locArgs?.[1] ?? '') <= 30) {
            (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-25)*22)+480);
          } else {
            if (String((s as any).locArgs?.[1] ?? '') <= 35) {
              (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-30)*24)+590);
            } else {
              if (String((s as any).locArgs?.[1] ?? '') <= 40) {
                (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-35)*28)+710);
              } else {
                if (String((s as any).locArgs?.[1] ?? '') <= 45) {
                  (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-40)*30)+850);
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') <= 50) {
                    (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-45)*36)+1000);
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') <= 55) {
                      (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-50)*38)+1180);
                    } else {
                      if (String((s as any).locArgs?.[1] ?? '') <= 60) {
                        (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-55)*42)+1370);
                      } else {
                        if (String((s as any).locArgs?.[1] ?? '') <= 65) {
                          (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-60)*46)+1580);
                        } else {
                          if (String((s as any).locArgs?.[1] ?? '') <= 70) {
                            (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-65)*50)+1810);
                          } else {
                            if (String((s as any).locArgs?.[1] ?? '') <= 75) {
                              (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-70)*56)+2060);
                            } else {
                              if (String((s as any).locArgs?.[1] ?? '') <= 80) {
                                (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-75)*60)+2340);
                              } else {
                                if (String((s as any).locArgs?.[1] ?? '') <= 85) {
                                  (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-80)*72)+2640);
                                } else {
                                  if (String((s as any).locArgs?.[1] ?? '') > 85) {
                                    (s as any).result = (((((s as any).locArgs?.[1] ?? 0)-85)*84)+3000);
                                  } else {
                                    (s as any).result = 100;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterBccmtosize(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') < 0) {
    (s as any).result = 0;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') <= 310) {
      (s as any).result = ((((s as any).locArgs?.[1] ?? 0) - 100)/14);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') <= 390) {
        (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 310)/16)+15);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') <= 480) {
          (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 390)/18)+20);
        } else {
          if (String((s as any).locArgs?.[1] ?? '') <= 590) {
            (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 480)/22)+25);
          } else {
            if (String((s as any).locArgs?.[1] ?? '') <= 710) {
              (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 590)/24)+30);
            } else {
              if (String((s as any).locArgs?.[1] ?? '') <= 850) {
                (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 710)/28)+35);
              } else {
                if (String((s as any).locArgs?.[1] ?? '') <= 1000) {
                  (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 850)/30)+40);
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') <= 1180) {
                    (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 1000)/36)+45);
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') <= 1370) {
                      (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 1180)/38)+50);
                    } else {
                      if (String((s as any).locArgs?.[1] ?? '') <= 1580) {
                        (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 1370)/42)+55);
                      } else {
                        if (String((s as any).locArgs?.[1] ?? '') <= 1810) {
                          (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 1580)/46)+60);
                        } else {
                          if (String((s as any).locArgs?.[1] ?? '') <= 2060) {
                            (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 1810)/50)+65);
                          } else {
                            if (String((s as any).locArgs?.[1] ?? '') <= 2340) {
                              (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 2060)/56)+70);
                            } else {
                              if (String((s as any).locArgs?.[1] ?? '') <= 2640) {
                                (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 2340)/60)+75);
                              } else {
                                if (String((s as any).locArgs?.[1] ?? '') <= 3000) {
                                  (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 2640)/72)+80);
                                } else {
                                  if (String((s as any).locArgs?.[1] ?? '') > 3000) {
                                    (s as any).result = (((((s as any).locArgs?.[1] ?? 0) - 3000)/84)+85);
                                  } else {
                                    (s as any).result = 0;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterLactationBreastGrowth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lactation ?? 0)?.['maturebreast'] === 1  &&  ((s as any).lactation ?? 0)?.['preggrowth'] > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetUseableCupsize(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_lact'] = ((s as any).bodyVars['bust_lact'] ?? 0) + (qspFunc(s, 'lact_lib', 'bccmtosize', (qspFunc(s, 'lact_lib', 'bsizetoccm', (((s as any).lactation ?? 0)?.['useable_cupsize'])) + ((((s as any).lactation ?? {})?.['preggrowth'] ?? 0)/100))) + (((s as any).bodyVars ?? {})?.['vofat'] ?? 0) - (((s as any).bodyVars ?? {})?.['bust_magic'] ?? 0) - (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) - (((s as any).bodyVars ?? {})?.['bust_lact'] ?? 0));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInitBreasttissue(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).lactation ?? 0)?.['alveoliexpandlvl_change'] !== ((s as any).lactation ?? 0)?.['alveoliexpandlvl']) {
    if (((s as any).lactation ?? 0)?.['alveoliexpandlvl'] % 3 === 0  &&  ((s as any).lactation ?? 0)?.['alveoliexpandlvl_change'] + 1 === ((s as any).lactation ?? 0)?.['alveoliexpandlvl']) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_lact'] = ((s as any).bodyVars['bust_lact'] ?? 0) + (5);
      scene.text('<b>Your breasts seem fuller.</b>');
    } else {
      if (((s as any).lactation ?? 0)?.['alveoliexpandlvl_change'] % 3 === 0  &&  ((s as any).lactation ?? 0)?.['alveoliexpandlvl'] + 1 === ((s as any).lactation ?? 0)?.['alveoliexpandlvl_change']  &&  ((s as any).lactation ?? 0)?.['alveoliexpandlvl_change'] > 0  &&  ((s as any).bodyVars ?? 0)?.['bust_lact'] >= 5) {
        ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_lact'] = ((s as any).bodyVars['bust_lact'] ?? 0) - (5);
        scene.text('<b>Your breasts seem to be getting smaller.</b>');
      }
    }
    ((s as any).lactation = (s as any).lactation ?? {})['alveoliexpandlvl_change'] = (((s as any).lactation ?? 0)?.['alveoliexpandlvl']);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInitBreasttissue(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterShowBreastStat(s: GameState, scene: SceneBuilder): void {
  scene.text(`lactation['breastdensitytype'] = ${(((s as any).lactation ?? 0)?.['breastdensitytype'] ?? '')}`);
  scene.text(`lactation['breastdensitypercent'] = ${(((s as any).lactation ?? 0)?.['breastdensitypercent'] ?? '')}`);
  scene.text(`lactation['breastglandtissue']] = ${(((s as any).lactation ?? 0)?.['breastglandtissue'] ?? '')}`);
  scene.text(`lactation['maturebreast'] = ${(((s as any).lactation ?? 0)?.['maturebreast'] ?? '')}`);
  scene.text(`lactation['alveolicount'] = ${(((s as any).lactation ?? 0)?.['alveolicount'] ?? '')}`);
  scene.text(`lactation['prolactinlvl'] = ${(((s as any).lactation ?? 0)?.['prolactinlvl'] ?? '')}`);
  scene.text(`lactation['dailyoverdemand'] = ${(((s as any).lactation ?? 0)?.['dailyoverdemand'] ?? '')}`);
  scene.text(`lactation['alveoliexpandlvl'] = ${(((s as any).lactation ?? 0)?.['alveoliexpandlvl'] ?? '')}`);
  scene.text(`lactation['alveoliexpandlvl_change'] = ${(((s as any).lactation ?? 0)?.['alveoliexpandlvl_change'] ?? '')}`);
  scene.text(`lactation['active'] = ${(((s as any).lactation ?? 0)?.['active'] ?? '')}`);
  scene.text(`lactation['lactaterate'] = ${(((s as any).lactation ?? 0)?.['lactaterate'] ?? '')}`);
  scene.text(`lactation['breastmm'] = ${(((s as any).lactation ?? 0)?.['breastmm'] ?? '')}`);
  scene.text(`lactation['breastmv'] = ${(((s as any).lactation ?? 0)?.['breastmv'] ?? '')}`);
  return;
  scene.build();
}

function enterProdMilk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lactation ?? 0)?.['used_lactaterate'] > 0) {
    ((s as any).lactation = (s as any).lactation ?? {})['prod_milk_req'] = (((s as any).locArgs?.[1] ?? 0) - (((s as any).lactation ?? {})?.['used_lactaterate'] ?? 0));
    ((s as any).lactation = (s as any).lactation ?? {})['used_lactaterate'] = ((s as any).lactation['used_lactaterate'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
    if (((s as any).lactation ?? 0)?.['used_lactaterate'] > ((s as any).lactation ?? 0)?.['lactaterate']) {
      ((s as any).lactation = (s as any).lactation ?? {})['used_lactaterate'] = (((s as any).lactation ?? 0)?.['lactaterate']);
    }
  } else {
    ((s as any).lactation = (s as any).lactation ?? {})['prod_milk_req'] = ((s as any).locArgs?.[1] ?? 0);
    ((s as any).lactation = (s as any).lactation ?? {})['used_lactaterate'] = ((s as any).lactation['used_lactaterate'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
    if (((s as any).lactation ?? 0)?.['used_lactaterate'] > ((s as any).lactation ?? 0)?.['lactaterate']) {
      ((s as any).lactation = (s as any).lactation ?? {})['used_lactaterate'] = (((s as any).lactation ?? 0)?.['lactaterate']);
    }
  }
  if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).pcs_mass ?? 0)?.['body'] > 15) {
    if ((((s as any).lactation ?? 0)?.['prod_milk_req']/10000) < ((s as any).pcs_stam ?? 0)  &&  (((s as any).lactation ?? 0)?.['prod_milk_req']/10000) < ((s as any).pcs_hydra ?? 0)) {
      if ((((s as any).lactation ?? 0)?.['prod_milk_req']/10000) < 1) {
        (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (1);
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (1);
      } else {
        (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (((((s as any).lactation ?? {})?.['prod_milk_req'] ?? 0)/10000));
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).lactation ?? {})?.['prod_milk_req'] ?? 0)/10000));
      }
      if (((s as any).pcs_stam ?? 0) < 1) {
        (s as any).pcs_stam = 1;
      }
      if (((s as any).pcs_hydra ?? 0) < 1) {
        (s as any).pcs_hydra = 1;
      }
      if ((((s as any).lactation ?? 0)?.['prod_milk_req']/9000) < ((s as any).pcs_energy ?? 0)) {
        if ((((s as any).lactation ?? 0)?.['prod_milk_req']/9000) < 1) {
          (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (1);
        } else {
          (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (((((s as any).lactation ?? {})?.['prod_milk_req'] ?? 0)/9000));
          if (((s as any).pcs_energy ?? 0) < 1) {
            (s as any).pcs_energy = 1;
          }
        }
        (s as any).result = (((s as any).lactation ?? 0)?.['prod_milk_req']);
      } else {
        (s as any).pcs_energy = 1;
        if (((s as any).fat ?? 0) > 0) {
          if ((Math.floor(Math.random() * 101) + 0) > 95) {
            (s as any).fat = ((s as any).fat ?? 0) - (1);
          }
        }
        if (((s as any).pain ?? 0)?.['breasts'] < 20) {
          ((s as any).pain = (s as any).pain ?? {})['breasts'] = ((s as any).pain['breasts'] ?? 0) + (1);
        }
        (s as any).result = (((s as any).lactation ?? 0)?.['prod_milk_req']);
      }
    } else {
      if (((s as any).pcs_stam ?? 0) <= 0  ||  ((s as any).pcs_hydra ?? 0) <= 0) {
        (s as any).result = 0;
      } else {
        if ((((s as any).pcs_stam ?? 0)*10000) < (((s as any).pcs_hydra ?? 0)*10000)) {
          ((s as any).lactation = (s as any).lactation ?? {})['prod_milk_temp_var'] = (((s as any).pcs_stam ?? 0)*10000);
          (s as any).pcs_stam = 1;
          if ((((s as any).lactation ?? 0)?.['prod_milk_req']/10000) < ((s as any).pcs_hydra ?? 0)) {
            (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).lactation ?? {})?.['prod_milk_req'] ?? 0)/10000));
          } else {
            (s as any).pcs_hydra = 1;
          }
        } else {
          ((s as any).lactation = (s as any).lactation ?? {})['prod_milk_temp_var'] = (((s as any).pcs_hydra ?? 0)*10000);
          (s as any).pcs_hydra = 1;
          if ((((s as any).lactation ?? 0)?.['prod_milk_req']/10000) < ((s as any).pcs_stam ?? 0)) {
            (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (((((s as any).lactation ?? {})?.['prod_milk_req'] ?? 0)/10000));
          } else {
            (s as any).pcs_stam = 1;
          }
        }
        if ((((s as any).lactation ?? 0)?.['prod_milk_temp_var']/9000) < ((s as any).pcs_energy ?? 0)) {
          if ((((s as any).lactation ?? 0)?.['prod_milk_temp_var']/9000) < 1) {
            (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (1);
          } else {
            (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (((((s as any).lactation ?? {})?.['prod_milk_temp_var'] ?? 0)/9000));
            if (((s as any).pcs_energy ?? 0) < 1) {
              (s as any).pcs_energy = 1;
            }
          }
        } else {
          (s as any).pcs_energy = 1;
          if ((Math.floor(Math.random() * 101) + 0) < 5) {
            ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) - (1);
          }
          if (((s as any).pain ?? 0)?.['breasts'] < 20) {
            ((s as any).pain = (s as any).pain ?? {})['breasts'] = ((s as any).pain['breasts'] ?? 0) + (1);
          }
        }
        if (((s as any).pcs_energy ?? 0) < 1) {
          (s as any).pcs_energy = 1;
        }
        if (((s as any).pcs_hydra ?? 0) < 1) {
          (s as any).pcs_hydra = 1;
        }
        if (((s as any).pcs_stam ?? 0) < 1) {
          (s as any).pcs_stam = 1;
        }
        (s as any).result = (((s as any).lactation ?? 0)?.['prod_milk_temp_var']);
      }
    }
  } else {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterBreastEngorment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lactation ?? 0)?.['breastmv'] >= ((s as any).lactation ?? 0)?.['breastmm']) {
    (s as any).temp_var = (((s as any).lactation ?? {})?.['breastmv'] ?? 0) - (((s as any).lactation ?? {})?.['breastmm'] ?? 0);
    ((s as any).lactation = (s as any).lactation ?? {})['breastmv'] = (((s as any).lactation ?? 0)?.['breastmm']);
    if (((s as any).temp_var ?? 0) < 1000  &&  ((s as any).temp_var ?? 0) > 0) {
      ((s as any).lactation = (s as any).lactation ?? {})['engorgement'] = 0;
    } else {
      if (((s as any).temp_var ?? 0) < 3000  &&  ((s as any).temp_var ?? 0) >= 1000) {
        ((s as any).lactation = (s as any).lactation ?? {})['engorgement'] = 1;
        ((s as any).lactation = (s as any).lactation ?? {})['lactmess'] = ((s as any).lactation['lactmess'] ?? 0) + (1);
      } else {
        if (((s as any).temp_var ?? 0) < 10000  &&  ((s as any).temp_var ?? 0) >= 3000) {
          ((s as any).lactation = (s as any).lactation ?? {})['engorgement'] = 1;
          ((s as any).lactation = (s as any).lactation ?? {})['lactmess'] = ((s as any).lactation['lactmess'] ?? 0) + (2);
        } else {
          if (((s as any).temp_var ?? 0) >= 10000) {
            ((s as any).lactation = (s as any).lactation ?? {})['engorgement'] = 1;
            ((s as any).lactation = (s as any).lactation ?? {})['lactmess'] = ((s as any).lactation['lactmess'] ?? 0) + (3);
          }
        }
      }
    }
  } else {
    ((s as any).lactation = (s as any).lactation ?? {})['engorgement'] = 0;
    if (((s as any).lactation ?? 0)?.['lactmess'] > 1) {
      ((s as any).lactation = (s as any).lactation ?? {})['lactmess'] = ((s as any).lactation['lactmess'] ?? 0) - (2);
      if (((s as any).lactation ?? 0)?.['lactmess'] < 0) {
        ((s as any).lactation = (s as any).lactation ?? {})['lactmess'] = 0;
      }
    }
  }
  if (((s as any).lactation ?? 0)?.['engorgement'] > 0  &&  ((s as any).pain ?? 0)?.['breasts'] < Math.max(5, ((s as any).lactation ?? 0)?.['breastmm']/10000)) {
    (s as any).tmp = Math.max(0, (Math.floor(Math.random() * (6 - (((s as any).lactation ?? {})?.['lactmess'] ?? 0) - 0 + 1)) + (0)));
    ((s as any).pain = (s as any).pain ?? {})['breasts'] = ((s as any).pain['breasts'] ?? 0) + (((s as any).tmp ?? 0));
    ((s as any).lactation = (s as any).lactation ?? {})['engorgement_pain'] = ((s as any).lactation['engorgement_pain'] ?? 0) + (((s as any).tmp ?? 0));
    (s as any).tmp = undefined;
  } else {
    if (((s as any).lactation ?? 0)?.['engorgement'] === 0  &&  ((s as any).lactation ?? 0)?.['engorgement_pain'] > 0) {
      ((s as any).pain = (s as any).pain ?? {})['breasts'] = ((s as any).pain['breasts'] ?? 0) - ((((s as any).lactation ?? {})?.['engorgement_pain'] ?? 0) / 2);
      ((s as any).lactation = (s as any).lactation ?? {})['engorgement_pain'] = ((s as any).lactation['engorgement_pain'] ?? 0) / (2);
      if (((s as any).pain ?? 0)?.['breasts'] < 0) {
        ((s as any).pain = (s as any).pain ?? {})['breasts'] = 0;
      }
    }
  }
  return;
  scene.build();
}

function enterLactSwitch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lactation ?? 0)?.['active'] <= 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLactOn(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLactOff(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  return;
  scene.build();
}

function enterLactOn(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lactation ?? 0)?.['active'] <= 0) {
    ((s as any).lactation = (s as any).lactation ?? {})['pc_aware'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['active'] = 1;
    ((s as any).lactation = (s as any).lactation ?? {})['breastmm'] = ((((s as any).lactation ?? {})?.['breastglandtissue'] ?? 0)*(100 + ((((s as any).lactation ?? {})?.['alveoliexpandlvl'] ?? 0) * 40)))*(((s as any).lactation ?? {})?.['breastcount'] ?? 0);
    if (((s as any).lactation ?? 0)?.['prolactinlvl'] < 200) {
      ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = 200;
    }
    ((s as any).lactation = (s as any).lactation ?? {})['lactaterate'] = 1000*((((s as any).lactation ?? {})?.['prolactinlvl'] ?? 0)/200);
    ((s as any).lactation = (s as any).lactation ?? {})['breastmv'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['nipgrowth'] = ((s as any).lactation['nipgrowth'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    (s as any).pcs_nips = ((s as any).pcs_nips ?? 0) + ((((s as any).lactation ?? 0)?.['nipgrowth']));
    if (((s as any).lactation ?? 0)?.['alveoliexpandlvl'] < 10) {
      ((s as any).lactation = (s as any).lactation ?? {})['alveoliexpandlvl'] = 10;
    }
    if (((s as any).lactation ?? 0)?.['alveoliexpandlvl_change'] < 10) {
      ((s as any).lactation = (s as any).lactation ?? {})['alveoliexpandlvl_change'] = 10;
    }
    ((s as any).lactation = (s as any).lactation ?? {})['milkprod_type'] = 1;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreastcycle(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  return;
  scene.build();
}

function enterLactOff(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lactation ?? 0)?.['active'] > 0) {
    ((s as any).lactation = (s as any).lactation ?? {})['active'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['lactaterate'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['breastmv'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['alveoliexpandlvl'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['alveoliexpandlvl_change'] = 1;
    ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = 0;
    if (((s as any).lactation ?? 0)?.['nipgrowth'] > 0  &&  ((s as any).lactation ?? 0)?.['nipgrowth'] <= 10) {
      (s as any).pcs_nips = ((s as any).pcs_nips ?? 0) - ((((s as any).lactation ?? 0)?.['nipgrowth']));
      ((s as any).lactation = (s as any).lactation ?? {})['nipgrowth'] = 0;
    }
    ((s as any).lactation = (s as any).lactation ?? {})['nipgrowth'] = 0;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreastcycle(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  return;
  scene.build();
}

function enterBreastcycle(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInitBreasttissue(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).pregChem ?? 0) >= 2191  &&  ((s as any).lactation ?? 0)?.['maturebreast'] <= 0) {
    if (((s as any).lactation ?? 0)?.['pregchemlast'] <= 0) {
      ((s as any).lactation = (s as any).lactation ?? {})['pregchemlast'] = 2191;
      ((s as any).lactation = (s as any).lactation ?? {})['preggrowth'] = 0;
    }
    if (((s as any).lactation ?? 0)?.['preggrowth'] <= 20000  &&  (((s as any).pregChem ?? 0) - ((s as any).lactation ?? 0)?.['pregchemlast']) >= 0) {
      ((s as any).lactation = (s as any).lactation ?? {})['preggrowth'] = (((s as any).pregChem ?? 0) - 2191) * 9;
      ((s as any).lactation = (s as any).lactation ?? {})['growthsoreness_on'] = 1;
      if (((s as any).pain ?? 0)?.['breasts'] <= 20) {
        ((s as any).pain = (s as any).pain ?? {})['breasts'] = 20;
      }
    } else {
      ((s as any).lactation = (s as any).lactation ?? {})['growthsoreness_on'] = 0;
      ((s as any).lactation = (s as any).lactation ?? {})['maturebreast'] = 1;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLactationBreastGrowth(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).lactation = (s as any).lactation ?? {})['preggrowth'] = 0;
    }
    ((s as any).lactation = (s as any).lactation ?? {})['pregchemlast'] = ((s as any).pregChem ?? 0);
  } else {
    if (((s as any).pregChem ?? 0) > 4383  &&  ((s as any).lactation ?? 0)?.['maturebreast'] > 0) {
      if (((s as any).lactation ?? 0)?.['prolactinlvl'] < 200  &&  ((s as any).lactation ?? 0)?.['active'] <= 0) {
        if ((Math.floor(Math.random() * 101) + 0) > 25) {
          ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = ((s as any).lactation['prolactinlvl'] ?? 0) + (1);
        }
      }
    }
  }
  if (((s as any).lactation ?? 0)?.['active'] <= 0) {
    if (((s as any).lactation ?? 0)?.['milkgrowday'] < ((s as any).daystart ?? 0)) {
      if ((((s as any).lactation ?? 0)?.['dailyoverdemand']/200) <= 0  &&  ((s as any).lactation ?? 0)?.['dailyoverdemand'] > 0) {
        ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = ((s as any).lactation['prolactinlvl'] ?? 0) + (1);
      } else {
        if ((((s as any).lactation ?? 0)?.['dailyoverdemand']/200) >= 10  &&  ((s as any).lactation ?? 0)?.['maturebreast'] <= 0) {
          ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = ((s as any).lactation['prolactinlvl'] ?? 0) + (10);
        } else {
          if ((((s as any).lactation ?? 0)?.['dailyoverdemand']/200) >= 50  &&  ((s as any).lactation ?? 0)?.['maturebreast'] > 0) {
            ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = ((s as any).lactation['prolactinlvl'] ?? 0) + (50);
          } else {
            if (((s as any).lactation ?? 0)?.['prolactinlvl'] > 0  &&  ((s as any).pregChem ?? 0) < 2191) {
              if (((((s as any).lactation ?? 0)?.['prolactinlvl']/2) + (((s as any).lactation ?? 0)?.['prolactinlvl']/5) - (((s as any).lactation ?? 0)?.['prolactinlvl']/8)) < 1) {
                ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = ((s as any).lactation['prolactinlvl'] ?? 0) - (1);
              } else {
                ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = ((s as any).lactation['prolactinlvl'] ?? 0) - ((((((s as any).lactation ?? {})?.['prolactinlvl'] ?? 0)/2) + ((((s as any).lactation ?? {})?.['prolactinlvl'] ?? 0)/5) - ((((s as any).lactation ?? {})?.['prolactinlvl'] ?? 0)/8)));
              }
            }
          }
        }
      }
    }
    if (((s as any).lactation ?? 0)?.['prolactinlvl'] > 200) {
      ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = 200;
    }
    if (((s as any).lactation ?? 0)?.['alveoliexpandlvl'] > 10) {
      ((s as any).lactation = (s as any).lactation ?? {})['alveoliexpandlvl'] = 10;
    }
    if (((s as any).lactation ?? 0)?.['milkgrowday'] < ((s as any).daystart ?? 0)) {
      ((s as any).lactation = (s as any).lactation ?? {})['growthsoreness_on'] = 0;
      if (((s as any).lactation ?? 0)?.['prolactinlvl'] > 0  &&  ((s as any).lactation ?? 0)?.['prolactinlvl'] < 100  &&  ((s as any).lactation ?? 0)?.['alveoliexpandlvl'] > 0) {
        ((s as any).lactation = (s as any).lactation ?? {})['alveoliexpandlvl_change'] = (((s as any).lactation ?? 0)?.['alveoliexpandlvl']);
        ((s as any).lactation = (s as any).lactation ?? {})['alveoliexpandlvl'] = ((s as any).lactation['alveoliexpandlvl'] ?? 0) - (1);
        ((s as any).lactation = (s as any).lactation ?? {})['growthsoreness_on'] = 1;
        if (((s as any).pain ?? 0)?.['breasts'] <= 20) {
          ((s as any).pain = (s as any).pain ?? {})['breasts'] = 20;
        }
      } else {
        if (((s as any).lactation ?? 0)?.['prolactinlvl'] >= 100  &&  ((s as any).lactation ?? 0)?.['alveoliexpandlvl'] < 10) {
          ((s as any).lactation = (s as any).lactation ?? {})['alveoliexpandlvl_change'] = (((s as any).lactation ?? 0)?.['alveoliexpandlvl']);
          ((s as any).lactation = (s as any).lactation ?? {})['alveoliexpandlvl'] = ((s as any).lactation['alveoliexpandlvl'] ?? 0) + (1);
          ((s as any).lactation = (s as any).lactation ?? {})['growthsoreness_on'] = 1;
          if (((s as any).pain ?? 0)?.['breasts'] <= 20) {
            ((s as any).pain = (s as any).pain ?? {})['breasts'] = 20;
          }
        }
      }
    }
    if ((Math.floor(Math.random() * 50) + 1) + ((s as any).lactation ?? 0)?.['prolactinlvl'] >= (Math.floor(Math.random() * 51) + 200)  &&  ((s as any).lactation ?? 0)?.['alveoliexpandlvl'] >= 10  &&  ((s as any).lactation ?? 0)?.['active'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLactOn(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } else {
    if (((s as any).lactation ?? 0)?.['milkprod_type'] === 1  &&  ((s as any).lactation ?? 0)?.['caplactaterate'] <= 0) {
      ((s as any).lactation = (s as any).lactation ?? {})['caplactaterate'] = 4;
    }
    if (((s as any).lactation ?? 0)?.['milkgrowday'] < ((s as any).daystart ?? 0)) {
      ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = ((s as any).lactation['prolactinlvl'] ?? 0) + (((((s as any).lactation ?? {})?.['dailyoverdemand'] ?? 0)/10000));
      if (((s as any).lactation ?? 0)?.['dailyoverdemand'] > 0  &&  ((s as any).lactation ?? 0)?.['breastpumped'] >= 0  &&  ((s as any).lactation ?? 0)?.['lactaterate'] !== 0) {
        if ((((s as any).lactation ?? 0)?.['breastmm'] / ((s as any).lactation ?? 0)?.['lactaterate']) > ((s as any).lactation ?? 0)?.['caplactaterate']) {
          ((s as any).lactation = (s as any).lactation ?? {})['max_lactrate_growth'] = (65 - (((((((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/1000) - 304)*(((((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/1000) - 304))/1466))*1000;
          if (((s as any).lactation ?? 0)?.['max_lactrate_growth'] < ((10*((s as any).lactation ?? 0)?.['prolactinlvl'])/2)  &&  ((s as any).lactation ?? 0)?.['max_lactrate_growth'] >= 1000) {
            ((s as any).lactation = (s as any).lactation ?? {})['lactaterate'] = ((s as any).lactation['lactaterate'] ?? 0) + ((((s as any).lactation ?? 0)?.['max_lactrate_growth']));
          } else {
            if (((s as any).lactation ?? 0)?.['max_lactrate_growth'] < ((10*((s as any).lactation ?? 0)?.['prolactinlvl'])/2)  &&  ((s as any).lactation ?? 0)?.['max_lactrate_growth'] < 1000) {
              ((s as any).lactation = (s as any).lactation ?? {})['lactaterate'] = ((s as any).lactation['lactaterate'] ?? 0) + (1000);
            } else {
              ((s as any).lactation = (s as any).lactation ?? {})['lactaterate'] = ((s as any).lactation['lactaterate'] ?? 0) + ((10*(((s as any).lactation ?? {})?.['prolactinlvl'] ?? 0))/2);
            }
          }
        } else {
          if ((((s as any).lactation ?? 0)?.['breastmm'] / ((s as any).lactation ?? 0)?.['lactaterate']) !== ((s as any).lactation ?? 0)?.['caplactaterate']) {
            ((s as any).lactation = (s as any).lactation ?? {})['lactaterate'] = Math.max(0, (((s as any).lactation ?? {})?.['lactaterate'] ?? 0) - ((((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/2) + ((((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/5) - ((((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/8));
            if (((s as any).lactation ?? 0)?.['nipgrowth'] > ((s as any).lactation ?? 0)?.['useable_cupsize']*3/2) {
              (s as any).tmp = Math.max(0, (Math.floor(Math.random() * ((((s as any).lactation ?? {})?.['breastmm'] ?? 0)/100000 - (-5) + 1)) + ((-5))));
              (s as any).pcs_nips = ((s as any).pcs_nips ?? 0) - (((s as any).tmp ?? 0));
              ((s as any).lactation = (s as any).lactation ?? {})['nipgrowth'] = ((s as any).lactation['nipgrowth'] ?? 0) - (((s as any).tmp ?? 0));
              (s as any).tmp = undefined;
            }
          }
        }
        ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = 100;
      } else {
        if (((s as any).lactation ?? 0)?.['dailyoverdemand'] <= 0  &&  ((s as any).lactation ?? 0)?.['breastpumped'] > 0) {
          ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = 100;
          ((s as any).lactation = (s as any).lactation ?? {})['dailyoverdemand'] = 0;
          ((s as any).lactation = (s as any).lactation ?? {})['breastpumped'] = 0;
        } else {
          ((s as any).lactation = (s as any).lactation ?? {})['dailyoverdemand'] = 0;
          ((s as any).lactation = (s as any).lactation ?? {})['breastpumped'] = 0;
          if (((s as any).lactation ?? 0)?.['lactaterate'] > 0) {
            ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = 100;
            if (((((s as any).lactation ?? 0)?.['lactaterate']/2) + (((s as any).lactation ?? 0)?.['lactaterate']/5) - (((s as any).lactation ?? 0)?.['lactaterate']/8)) < 10) {
              ((s as any).lactation = (s as any).lactation ?? {})['lactaterate'] = ((s as any).lactation['lactaterate'] ?? 0) - (1);
            } else {
              ((s as any).lactation = (s as any).lactation ?? {})['lactaterate'] = ((((s as any).lactation ?? {})?.['lactaterate'] ?? 0) - ((((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/2) + ((((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/5) - ((((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/8));
            }
          } else {
            if (((s as any).lactation ?? 0)?.['lactaterate'] <= 0  &&  ((s as any).pregChem ?? 0) >= 4383) {
              ((s as any).lactation = (s as any).lactation ?? {})['lactaterate'] = 10;
            } else {
              if (((s as any).lactation ?? 0)?.['lactaterate'] <= 0) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLactOff(s, scene); (s as any).locArgs = __savedLocArgs; }
              }
            }
          }
        }
      }
    }
    if (((s as any).lactation ?? 0)?.['breastmv'] < ((s as any).lactation ?? 0)?.['breastmm']  &&  ((s as any).lactation ?? 0)?.['lactaterate'] >= 500  &&  ((s as any).lactation ?? 0)?.['milkprod_type'] === 1) {
      ((s as any).lactation = (s as any).lactation ?? {})['breastmv'] = ((s as any).lactation['breastmv'] ?? 0) + (qspFunc(s, 'lact_lib', 'prod_milk', (((s as any).lactation ?? 0)?.['lactaterate'])));
      if (((s as any).lactation ?? 0)?.['nipgrowth'] < ((s as any).lactation ?? 0)?.['useable_cupsize']*2) {
        (s as any).tmp = Math.max(0, (Math.floor(Math.random() * ((((s as any).lactation ?? {})?.['breastmm'] ?? 0)/100000 - (-10) + 1)) + ((-10))));
        (s as any).pcs_nips = ((s as any).pcs_nips ?? 0) + (((s as any).tmp ?? 0));
        ((s as any).lactation = (s as any).lactation ?? {})['nipgrowth'] = ((s as any).lactation['nipgrowth'] ?? 0) + (((s as any).tmp ?? 0));
        (s as any).tmp = undefined;
      }
    } else {
      if (((s as any).lactation ?? 0)?.['breastmv'] < ((s as any).lactation ?? 0)?.['breastmm']  &&  ((s as any).lactation ?? 0)?.['lactaterate'] >= 500  &&  ((s as any).lactation ?? 0)?.['milkprod_type'] === 0) {
        ((s as any).lactation = (s as any).lactation ?? {})['breastmv'] = ((s as any).lactation['breastmv'] ?? 0) + ((((s as any).lactation ?? 0)?.['lactaterate']));
        if (((s as any).lactation ?? 0)?.['breastmv'] > ((s as any).lactation ?? 0)?.['breastmm']) {
          ((s as any).lactation = (s as any).lactation ?? {})['breastmv'] = (((s as any).lactation ?? 0)?.['breastmm']);
        }
      }
    }
    ((s as any).lactation = (s as any).lactation ?? {})['used_lactaterate'] = 0;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreastEngorment(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).lactation ?? 0)?.['milkgrowday'] < ((s as any).daystart ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLactationBreastGrowth(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).lactation = (s as any).lactation ?? {})['dailyoverdemand'] = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['milkgrowday'] = ((s as any).daystart ?? 0);
  }
  return;
  scene.build();
}

function enterLactateOptout(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lactation ?? 0)?.['active'] > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLactOff(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  ((s as any).lactation = (s as any).lactation ?? {})['active'] = 0;
  ((s as any).lactation = (s as any).lactation ?? {})['prolactinlvl'] = 0;
  ((s as any).lactation = (s as any).lactation ?? {})['lactmess'] = 0;
  ((s as any).lactation = (s as any).lactation ?? {})['engorgement'] = 0;
  ((s as any).lactation = (s as any).lactation ?? {})['breastmv'] = 0;
  ((s as any).lactation = (s as any).lactation ?? {})['breastmm'] = 0;
  ((s as any).lactation = (s as any).lactation ?? {})['lactaterate'] = 0;
  ((s as any).lactation = (s as any).lactation ?? {})['dailyoverdemand'] = 0;
  return;
  scene.build();
}

function enterGetSuckflowrate(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    (s as any).result = 17000;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      (s as any).result = 11000;
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
        (s as any).result = 8000;
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 3) {
          (s as any).result = 40000;
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 4) {
            (s as any).result = 100000;
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 5) {
              (s as any).result = 20000;
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 6) {
                (s as any).result = 160000;
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 7) {
                  (s as any).result = 5000;
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === 8) {
                    (s as any).result = 15000;
                  } else {
                    (s as any).result = 10000;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterGetMaxnipflowrate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).breastcounter ?? 0) > 0) {
    (s as any).breastlastused = ((s as any).daystart ?? 0);
    (s as any).breastaccommodation = ((s as any).breastaccommodation ?? 0) + (((s as any).breastcounter ?? 0));
    ((s as any).lactation = (s as any).lactation ?? {})['nip_flow_mod'] = ((s as any).lactation['nip_flow_mod'] ?? 0) + (((s as any).breastcounter ?? 0) * 500);
    (s as any).breastcounter = 0;
  }
  if (((s as any).lactation ?? 0)?.['nip_flow_mod'] > 90000) {
    ((s as any).lactation = (s as any).lactation ?? {})['nip_flow_mod'] = 90000;
  }
  if (((s as any).pcs_nips ?? 0) > 0) {
    (s as any).result = ((1000*((s as any).pcs_nips ?? 0)) + 8000 + (((s as any).lactation ?? {})?.['nip_flow_mod'] ?? 0));
  } else {
    (s as any).result = (8000 + (((s as any).lactation ?? {})?.['nip_flow_mod'] ?? 0));
  }
  return;
  scene.build();
}

function enterGetMoodmod(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    ((s as any).lactation = (s as any).lactation ?? {})['moodmod'] = ((s as any).locArgs?.[2] ?? 0)/8;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      ((s as any).lactation = (s as any).lactation ?? {})['moodmod'] = ((s as any).locArgs?.[2] ?? 0)/2;
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
        ((s as any).lactation = (s as any).lactation ?? {})['moodmod'] = ((s as any).locArgs?.[2] ?? 0);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 7) {
          ((s as any).lactation = (s as any).lactation ?? {})['moodmod'] = ((s as any).locArgs?.[2] ?? 0);
        } else {
          ((s as any).lactation = (s as any).lactation ?? {})['moodmod'] = 0;
        }
      }
    }
  }
  if (((s as any).lactation ?? 0)?.['active'] <= 0) {
    ((s as any).lactation = (s as any).lactation ?? {})['moodmod'] = ((((s as any).lactation ?? {})?.['moodmod'] ?? 0)/2);
  }
  if ((((s as any).lactation ?? 0)?.['moodmod'] + ((s as any).pcs_mood ?? 0)) > 100) {
    (s as any).result = (100 - ((s as any).pcs_mood ?? 0));
  } else {
    (s as any).result = (((s as any).lactation ?? 0)?.['moodmod']);
  }
  return;
  scene.build();
}

function enterGetSorenessmod(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lactation ?? 0)?.['nipple_cream_applied'] > 0) {
    ((s as any).lactation = (s as any).lactation ?? {})['nipple_cream_applied'] = 0;
    if (((s as any).lactation ?? 0)?.['dailyoverdemand'] === 0) {
      (s as any).result = (Math.floor(Math.random() * 21) + 10);
    } else {
      if (((s as any).lactation ?? 0)?.['dailyoverdemand'] <= (((s as any).lactation ?? 0)?.['breastmm'] / 2)) {
        (s as any).result = (Math.floor(Math.random() * 11) + 5);
      } else {
        if (((s as any).lactation ?? 0)?.['dailyoverdemand'] <= ((s as any).lactation ?? 0)?.['breastmm']) {
          (s as any).result = (Math.floor(Math.random() * 5) + 4);
        } else {
          (s as any).result = (Math.floor(Math.random() * 3) + 3);
        }
      }
    }
  } else {
    if (((s as any).lactation ?? 0)?.['dailyoverdemand'] === 0) {
      (s as any).result = (Math.floor(Math.random() * 6) + 5);
    } else {
      if (((s as any).lactation ?? 0)?.['dailyoverdemand'] <= (((s as any).lactation ?? 0)?.['breastmm'] / 2)) {
        (s as any).result = (Math.floor(Math.random() * 4) + 3);
      } else {
        if (((s as any).lactation ?? 0)?.['dailyoverdemand'] <= ((s as any).lactation ?? 0)?.['breastmm']) {
          (s as any).result = (Math.floor(Math.random() * 3) + 2);
        } else {
          (s as any).result = (Math.floor(Math.random() * 3) + 1);
        }
      }
    }
  }
  return;
  scene.build();
}

function enter_getBreastmilkTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lactation ?? 0)?.['active'] > 0) {
    ((s as any).lactation = (s as any).lactation ?? {})['suck_flow_rate'] = qspFunc(s, 'lact_lib', 'get_suckflowrate', ((s as any).locArgs?.[1] ?? 0));
    ((s as any).lactation = (s as any).lactation ?? {})['max_nip_flow_rate'] = qspFunc(s, 'lact_lib', 'get_maxnipflowrate');
    if ((((s as any).lactation ?? 0)?.['lactaterate']/60) < 1  &&  ((s as any).lactation ?? 0)?.['lactaterate'] > 0) {
      ((s as any).lactation = (s as any).lactation ?? {})['lactaterate_per_min'] = 1;
    } else {
      ((s as any).lactation = (s as any).lactation ?? {})['lactaterate_per_min'] = (((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/60;
    }
    ((s as any).lactation = (s as any).lactation ?? {})['milk_time_output'] = 0;
    if (((s as any).lactation ?? 0)?.['breastmv'] >= (String((s as any).locArgs?.[2] ?? '')*1000)) {
      if (((s as any).lactation ?? 0)?.['max_nip_flow_rate'] <= ((s as any).lactation ?? 0)?.['suck_flow_rate']) {
        ((s as any).lactation = (s as any).lactation ?? {})['milk_time_output'] = (((s as any).locArgs?.[2] ?? 0)*1000)/(((s as any).lactation ?? {})?.['max_nip_flow_rate'] ?? 0);
      } else {
        ((s as any).lactation = (s as any).lactation ?? {})['milk_time_output'] = (((s as any).locArgs?.[2] ?? 0)*1000)/(((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0);
      }
      (s as any).result = (((s as any).lactation ?? 0)?.['milk_time_output']);
    } else {
      if (((s as any).lactation ?? 0)?.['breastmv'] > 0  &&  ((s as any).lactation ?? 0)?.['breastmv'] < (String((s as any).locArgs?.[2] ?? '')*1000)) {
        if (((s as any).lactation ?? 0)?.['max_nip_flow_rate'] <= ((s as any).lactation ?? 0)?.['suck_flow_rate']) {
          ((s as any).lactation = (s as any).lactation ?? {})['milk_time_output'] = (((s as any).lactation ?? {})?.['breastmv'] ?? 0)/(((s as any).lactation ?? {})?.['max_nip_flow_rate'] ?? 0);
          (s as any).temp_var2 = (((s as any).locArgs?.[2] ?? 0)*1000) - (((s as any).lactation ?? {})?.['breastmv'] ?? 0);
          if (((s as any).lactation ?? 0)?.['max_nip_flow_rate'] <= ((s as any).lactation ?? 0)?.['lactaterate_per_min']) {
            ((s as any).lactation = (s as any).lactation ?? {})['milk_time_output'] = ((s as any).lactation['milk_time_output'] ?? 0) + (((s as any).temp_var2 ?? 0)/(((s as any).lactation ?? {})?.['max_nip_flow_rate'] ?? 0));
          } else {
            ((s as any).lactation = (s as any).lactation ?? {})['milk_time_output'] = ((s as any).lactation['milk_time_output'] ?? 0) + (((s as any).temp_var2 ?? 0)/(((s as any).lactation ?? {})?.['lactaterate_per_min'] ?? 0));
          }
        } else {
          ((s as any).lactation = (s as any).lactation ?? {})['milk_time_output'] = (((s as any).lactation ?? {})?.['breastmv'] ?? 0)/(((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0);
          (s as any).temp_var2 = (((s as any).locArgs?.[2] ?? 0)*1000) - (((s as any).lactation ?? {})?.['breastmv'] ?? 0);
          if (((s as any).lactation ?? 0)?.['suck_flow_rate'] <= ((s as any).lactation ?? 0)?.['lactaterate_per_min']) {
            ((s as any).lactation = (s as any).lactation ?? {})['milk_time_output'] = ((s as any).lactation['milk_time_output'] ?? 0) + (((s as any).temp_var2 ?? 0)/(((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0));
          } else {
            ((s as any).lactation = (s as any).lactation ?? {})['milk_time_output'] = ((s as any).lactation['milk_time_output'] ?? 0) + (((s as any).temp_var2 ?? 0)/(((s as any).lactation ?? {})?.['lactaterate_per_min'] ?? 0));
          }
        }
        (s as any).result = (((s as any).lactation ?? 0)?.['milk_time_output']);
      } else {
        if (((s as any).lactation ?? 0)?.['breastmv'] <=0) {
          if (((s as any).lactation ?? 0)?.['max_nip_flow_rate'] <= ((s as any).lactation ?? 0)?.['suck_flow_rate']) {
            if (((s as any).lactation ?? 0)?.['max_nip_flow_rate'] <= ((s as any).lactation ?? 0)?.['lactaterate_per_min']) {
              ((s as any).lactation = (s as any).lactation ?? {})['milk_time_output'] = (((s as any).locArgs?.[2] ?? 0)*1000)/(((s as any).lactation ?? {})?.['max_nip_flow_rate'] ?? 0);
            } else {
              ((s as any).lactation = (s as any).lactation ?? {})['milk_time_output'] = (((s as any).locArgs?.[2] ?? 0)*1000)/(((s as any).lactation ?? {})?.['lactaterate_per_min'] ?? 0);
            }
          } else {
            if (((s as any).lactation ?? 0)?.['suck_flow_rate'] <= ((s as any).lactation ?? 0)?.['lactaterate_per_min']) {
              ((s as any).lactation = (s as any).lactation ?? {})['milk_time_output'] = (((s as any).locArgs?.[2] ?? 0)*1000)/(((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0);
            } else {
              ((s as any).lactation = (s as any).lactation ?? {})['milk_time_output'] = (((s as any).locArgs?.[2] ?? 0)*1000)/(((s as any).lactation ?? {})?.['lactaterate_per_min'] ?? 0);
            }
          }
          (s as any).result = (((s as any).lactation ?? 0)?.['milk_time_output']);
        } else {
          (s as any).result = 0;
        }
      }
    }
  } else {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enter_getBreastmilk(s: GameState, scene: SceneBuilder): void {
  ((s as any).lactation = (s as any).lactation ?? {})['breastpumped'] = 1;
  ((s as any).lactation = (s as any).lactation ?? {})['suck_flow_rate'] = qspFunc(s, 'lact_lib', 'get_suckflowrate', ((s as any).locArgs?.[1] ?? 0));
  ((s as any).lactation = (s as any).lactation ?? {})['max_nip_flow_rate'] = qspFunc(s, 'lact_lib', 'get_maxnipflowrate');
  qspCall(s, 'mood', 'raise', qspFunc(s, 'lact_lib', 'get_moodmod', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)));
  ((s as any).lactation = (s as any).lactation ?? {})['soreness_mod'] = qspFunc(s, 'lact_lib', 'get_sorenessmod');
  if (((s as any).lactation ?? 0)?.['active']<= 0) {
    if (((s as any).lactation ?? 0)?.['dailyoverdemand'] <= 0) {
      ((s as any).lactation = (s as any).lactation ?? {})['dailyoverdemand'] = 0;
    }
    (s as any).pump_stop_brake = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['max_sucktion_demand'] = (((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0)*((s as any).locArgs?.[2] ?? 0);
    if (((s as any).pain ?? 0)?.['nipples'] <= 60) {
      (s as any).suck_until_pain = (((60 - (((s as any).pain ?? {})?.['nipples'] ?? 0))*(((s as any).lactation ?? {})?.['soreness_mod'] ?? 0))*10000)/(((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0);
    }
    (s as any).temp_var = (((s as any).pain ?? {})?.['nipples'] ?? 0) + (((s as any).lactation ?? {})?.['max_sucktion_demand'] ?? 0)/((((s as any).lactation ?? {})?.['soreness_mod'] ?? 0)*10000);
    if (((s as any).temp_var ?? 0) > 60) {
      ((s as any).pain = (s as any).pain ?? {})['nipples'] = 65;
      (s as any).pump_stop_brake = 1;
      (s as any).pumptime = ((s as any).suck_until_pain ?? 0);
      ((s as any).lactation = (s as any).lactation ?? {})['max_sucktion_demand'] = (((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0)*((s as any).pumptime ?? 0);
    } else {
      (s as any).pumptime = ((s as any).locArgs?.[2] ?? 0);
      ((s as any).pain = (s as any).pain ?? {})['nipples'] = ((s as any).pain['nipples'] ?? 0) + ((((s as any).lactation ?? {})?.['max_sucktion_demand'] ?? 0)/((((s as any).lactation ?? {})?.['soreness_mod'] ?? 0)*10000));
    }
    (s as any).temp_var = (((s as any).pain ?? {})?.['breasts'] ?? 0) + (((s as any).lactation ?? {})?.['max_sucktion_demand'] ?? 0)/10000;
    if (((s as any).temp_var ?? 0) > 20) {
      ((s as any).pain = (s as any).pain ?? {})['breasts'] = 25;
    } else {
      ((s as any).pain = (s as any).pain ?? {})['breasts'] = ((s as any).pain['breasts'] ?? 0) + ((((s as any).lactation ?? {})?.['max_sucktion_demand'] ?? 0)/10000);
    }
    (s as any).temp_var = ((s as any).pcs_stam ?? 0) - ((((s as any).lactation ?? {})?.['max_sucktion_demand'] ?? 0)/30000);
    if (((s as any).temp_var ?? 0) < 0) {
      (s as any).pcs_stam = 0;
      (s as any).energytomilkpump = 1;
      qspCall(s, 'sweat', 'add', ((s as any).pumptime ?? 0)/30);
    } else {
      (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - ((((s as any).lactation ?? {})?.['max_sucktion_demand'] ?? 0)/30000);
      qspCall(s, 'sweat', 'add', ((s as any).pumptime ?? 0)/30);
      (s as any).energytomilkpump = 1;
    }
    if (((s as any).pumptime ?? 0) < 10) {
      (s as any).breastcounter = ((s as any).breastcounter ?? 0) + (1);
    } else {
      (s as any).breastcounter = ((s as any).breastcounter ?? 0) + (((s as any).pumptime ?? 0)/10);
    }
    ((s as any).lactation = (s as any).lactation ?? {})['dailyoverdemand'] = ((s as any).lactation['dailyoverdemand'] ?? 0) + ((((s as any).lactation ?? 0)?.['max_sucktion_demand']));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreastEngorment(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).result = 0;
  } else {
    if (((s as any).lactation ?? 0)?.['active'] > 0) {
      ((s as any).lactation = (s as any).lactation ?? {})['max_sucktion_demand'] = (((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0)*((s as any).locArgs?.[2] ?? 0);
      ((s as any).lactation = (s as any).lactation ?? {})['get_bm_milkedvolume'] = 0;
      if (((s as any).lactation ?? 0)?.['breastmv'] >= ((s as any).lactation ?? 0)?.['max_sucktion_demand']) {
        if (((s as any).lactation ?? 0)?.['max_nip_flow_rate'] >= ((s as any).lactation ?? 0)?.['suck_flow_rate']) {
          ((s as any).lactation = (s as any).lactation ?? {})['get_bm_milkedvolume'] = (((s as any).lactation ?? 0)?.['max_sucktion_demand']);
          ((s as any).lactation = (s as any).lactation ?? {})['breastmv'] = ((s as any).lactation['breastmv'] ?? 0) - ((((s as any).lactation ?? 0)?.['max_sucktion_demand']));
        } else {
          ((s as any).lactation = (s as any).lactation ?? {})['get_bm_milkedvolume'] = (((s as any).lactation ?? {})?.['max_nip_flow_rate'] ?? 0)*((s as any).locArgs?.[2] ?? 0);
          ((s as any).lactation = (s as any).lactation ?? {})['breastmv'] = ((s as any).lactation['breastmv'] ?? 0) - ((((s as any).lactation ?? 0)?.['get_bm_milkedvolume']));
        }
        (s as any).pumptime = ((s as any).locArgs?.[2] ?? 0);
      } else {
        if (((s as any).lactation ?? 0)?.['breastmv'] < ((s as any).lactation ?? 0)?.['max_sucktion_demand']) {
          if (((s as any).lactation ?? 0)?.['breastmv'] <= 0) {
            (s as any).temp_var = (((s as any).lactation ?? 0)?.['max_sucktion_demand']);
            (s as any).pumptime_left = ((s as any).locArgs?.[2] ?? 0);
          } else {
            (s as any).temp_var = (((s as any).lactation ?? {})?.['max_sucktion_demand'] ?? 0) - (((s as any).lactation ?? {})?.['breastmv'] ?? 0);
            if (((s as any).lactation ?? 0)?.['max_nip_flow_rate'] >= ((s as any).lactation ?? 0)?.['suck_flow_rate']) {
              (s as any).pumptime_left = ((s as any).locArgs?.[2] ?? 0) - ((((s as any).lactation ?? {})?.['breastmv'] ?? 0)/(((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0));
            } else {
              (s as any).pumptime_left = ((s as any).locArgs?.[2] ?? 0) - ((((s as any).lactation ?? {})?.['breastmv'] ?? 0)/(((s as any).lactation ?? {})?.['max_nip_flow_rate'] ?? 0));
            }
          }
          if (((s as any).pumptime_left ?? 0) > 0) {
            (s as any).pumptime = ((s as any).locArgs?.[2] ?? 0) - ((s as any).pumptime_left ?? 0) + 1;
            ((s as any).lactation = (s as any).lactation ?? {})['get_bm_milkedvolume'] = ((s as any).lactation['get_bm_milkedvolume'] ?? 0) + ((((s as any).lactation ?? 0)?.['breastmv']));
            ((s as any).lactation = (s as any).lactation ?? {})['breastmv'] = 0;
          } else {
            (s as any).pumptime_left = 0;
            (s as any).pumptime = ((s as any).locArgs?.[2] ?? 0);
            ((s as any).lactation = (s as any).lactation ?? {})['get_bm_milkedvolume'] = ((s as any).lactation['get_bm_milkedvolume'] ?? 0) + ((((s as any).lactation ?? {})?.['max_nip_flow_rate'] ?? 0) * ((s as any).locArgs?.[2] ?? 0));
            ((s as any).lactation = (s as any).lactation ?? {})['breastmv'] = ((s as any).lactation['breastmv'] ?? 0) - ((((s as any).lactation ?? {})?.['max_nip_flow_rate'] ?? 0) * ((s as any).locArgs?.[2] ?? 0));
          }
          if (((s as any).lactation ?? 0)?.['max_nip_flow_rate'] >= ((s as any).lactation ?? 0)?.['suck_flow_rate']) {
            if (((s as any).temp_var ?? 0) > ((s as any).lactation ?? 0)?.['get_bm_milkedvolume']) {
              ((s as any).lactation = (s as any).lactation ?? {})['dailyoverdemand'] = ((s as any).lactation['dailyoverdemand'] ?? 0) + (((((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0) * ((s as any).pumptime ?? 0) - (((s as any).lactation ?? {})?.['get_bm_milkedvolume'] ?? 0)));
            }
          } else {
            if (((s as any).temp_var ?? 0) > ((s as any).lactation ?? 0)?.['get_bm_milkedvolume']) {
              ((s as any).lactation = (s as any).lactation ?? {})['dailyoverdemand'] = ((s as any).lactation['dailyoverdemand'] ?? 0) + (((((s as any).lactation ?? {})?.['max_nip_flow_rate'] ?? 0) * ((s as any).pumptime ?? 0) - (((s as any).lactation ?? {})?.['get_bm_milkedvolume'] ?? 0)));
            }
          }
          if (((s as any).lactation ?? 0)?.['max_nip_flow_rate'] < ((s as any).lactation ?? 0)?.['suck_flow_rate']) {
            (s as any).temp_var = (((s as any).pain ?? {})?.['nipples'] ?? 0) + (((((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0) - (((s as any).lactation ?? {})?.['max_nip_flow_rate'] ?? 0)) * ((s as any).pumptime ?? 0))/((((s as any).lactation ?? {})?.['soreness_mod'] ?? 0) * 10000);
            if (((s as any).temp_var ?? 0) >= 60) {
              ((s as any).pain = (s as any).pain ?? {})['nipples'] = 65;
            } else {
              if (((s as any).temp_var ?? 0) <= 0) {
                ((s as any).pain = (s as any).pain ?? {})['nipples'] = ((s as any).pain['nipples'] ?? 0) + (1);
              } else {
                ((s as any).pain = (s as any).pain ?? {})['nipples'] = ((s as any).pain['nipples'] ?? 0) + ((((((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0) - (((s as any).lactation ?? {})?.['max_nip_flow_rate'] ?? 0)) * ((s as any).pumptime ?? 0))/((((s as any).lactation ?? {})?.['soreness_mod'] ?? 0) * 10000));
              }
            }
          } else {
            if ((((s as any).pumptime ?? 0) + 1) < 10) {
              ((s as any).pain = (s as any).pain ?? {})['nipples'] = ((s as any).pain['nipples'] ?? 0) + (1);
            } else {
              ((s as any).pain = (s as any).pain ?? {})['nipples'] = ((s as any).pain['nipples'] ?? 0) + (((((s as any).pumptime ?? 0) + 1)/10));
            }
          }
          if (((s as any).lactation ?? 0)?.['max_nip_flow_rate'] >= ((s as any).lactation ?? 0)?.['suck_flow_rate']) {
            if (((s as any).lactation ?? 0)?.['suck_flow_rate'] > (((s as any).lactation ?? 0)?.['lactaterate']/60)) {
              (s as any).temp_var = (((s as any).pain ?? {})?.['breasts'] ?? 0) + (((((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0)-((((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/60)) * ((s as any).pumptime ?? 0))/((((s as any).lactation ?? {})?.['soreness_mod'] ?? 0) * 10000);
              if (((s as any).temp_var ?? 0) > 20) {
                ((s as any).pain = (s as any).pain ?? {})['breasts'] = 20;
              } else {
                ((s as any).pain = (s as any).pain ?? {})['breasts'] = ((s as any).pain['breasts'] ?? 0) + ((((((s as any).lactation ?? {})?.['suck_flow_rate'] ?? 0)-((((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/60)) * ((s as any).pumptime ?? 0))/((((s as any).lactation ?? {})?.['soreness_mod'] ?? 0) * 10000));
              }
            }
          } else {
            if (((s as any).lactation ?? 0)?.['max_nip_flow_rate'] > (((s as any).lactation ?? 0)?.['lactaterate']/60)) {
              (s as any).temp_var = (((s as any).pain ?? {})?.['breasts'] ?? 0) + (((((s as any).lactation ?? {})?.['max_nip_flow_rate'] ?? 0) - ((((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/60)) * ((s as any).pumptime ?? 0))/((((s as any).lactation ?? {})?.['soreness_mod'] ?? 0) * 10000);
              if (((s as any).temp_var ?? 0) > 20) {
                ((s as any).pain = (s as any).pain ?? {})['breasts'] = 20;
              } else {
                ((s as any).pain = (s as any).pain ?? {})['breasts'] = ((s as any).pain['breasts'] ?? 0) + ((((((s as any).lactation ?? {})?.['max_nip_flow_rate'] ?? 0) - ((((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/60)) * ((s as any).pumptime ?? 0))/((((s as any).lactation ?? {})?.['soreness_mod'] ?? 0) * 10000));
              }
            }
          }
        }
      }
      if (((s as any).pumptime ?? 0) < 10) {
        (s as any).breastcounter = ((s as any).breastcounter ?? 0) + (1);
      } else {
        (s as any).breastcounter = ((s as any).breastcounter ?? 0) + (((s as any).pumptime ?? 0)/10);
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreastEngorment(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).result = (((s as any).lactation ?? 0)?.['get_bm_milkedvolume']);
    }
  }
  return;
  scene.build();
}

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lactation ?? 0)?.['active'] <= 0) {
    if (((s as any).lactation ?? 0)?.['growthsoreness_on'] > 0) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['lactation'] = 'Your breasts feel sore and swollen.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'lactation', '', 'status/lactating_sore', 3);
    }
  } else {
    if (((s as any).lactation ?? 0)?.['engorgement'] <= 0) {
      if (((s as any).lactation ?? 0)?.['breastmv'] <= 0) {
      } else {
        if (((s as any).lactation ?? 0)?.['breastmv'] <= ((s as any).lactation ?? 0)?.['breastmm'] / 4) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['lactation'] = ((((s as any).lactation ?? 0)?.['pc_aware'] > 0) ? ('You feel an easy pressure in your breasts from your milk.') : ('You feel an easy pressure in your breasts.'));
          qspCall(s, 'stat_display_compute', 'queue_msg', 'lactation', '', 'status/lactating', 3);
        } else {
          if (((s as any).lactation ?? 0)?.['breastmv'] <= ((s as any).lactation ?? 0)?.['breastmm'] / 2) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['lactation'] = ((((s as any).lactation ?? 0)?.['pc_aware'] > 0) ? ('Your breasts feel slightly heavy from the milk inside.') : ('Your breasts feel slightly heavy.'));
            qspCall(s, 'stat_display_compute', 'queue_msg', 'lactation', '', 'status/lactating_25', 3);
          } else {
            if (((s as any).lactation ?? 0)?.['breastmv'] <= ((s as any).lactation ?? 0)?.['breastmm'] * 3 / 4) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['lactation'] = ((((s as any).lactation ?? 0)?.['pc_aware'] > 0) ? ('Your breasts are heavy with your milk.') : ('Your breasts feel heavy.'));
              qspCall(s, 'stat_display_compute', 'queue_msg', 'lactation', '', 'status/lactating_50', 3);
            } else {
              if (((s as any).lactation ?? 0)?.['breastmv'] <= ((s as any).lactation ?? 0)?.['breastmm'] * 9 / 10) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['lactation'] = ((((s as any).lactation ?? 0)?.['pc_aware'] > 0) ? ('Your breasts are very heavy with your milk.') : ('Your breasts feel very heavy.'));
                qspCall(s, 'stat_display_compute', 'queue_msg', 'lactation', '', 'status/lactating_75', 3);
              } else {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['lactation'] = ((((s as any).lactation ?? 0)?.['pc_aware'] > 0) ? ('Your breasts are firm and full from your milk.') : ('Your breasts feel firm and under pressure.'));
                qspCall(s, 'stat_display_compute', 'queue_msg', 'lactation', '', 'status/lactating_90', 3);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).lactation ?? 0)?.['lactmess'] <= 0) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['lactation'] = ((((s as any).lactation ?? 0)?.['pc_aware'] > 0) ? ('Your breasts are so full they hurt.') : ('Your breasts hurt with pressure in them.'));
        qspCall(s, 'stat_display_compute', 'queue_msg', 'lactation', 'neg', 'status/lactating_100', 3);
      } else {
        if (((s as any).lactation ?? 0)?.['lactmess'] < 3) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['lactation'] = ((((s as any).lactation ?? 0)?.['pc_aware'] > 0) ? (((((s as any).clothingworntype ?? 0) === 'nude') ? ('Your breasts are so full they hurt and you can feel milk seeping out, causing you to have a little milk residue around your nipples.') : ('Your breasts are so full they hurt and you can feel milk seeping out, causing small wet spots on your top.'))) : (((((s as any).clothingworntype ?? 0) === 'nude') ? ('Your breasts hurt and your nipples are wet.') : ('Your breasts hurt and your nipples tingle a little. There are small wet spots on your top.'))));
          qspCall(s, 'stat_display_compute', 'queue_msg', 'lactation', 'neg', 'status/lactating_d50', 3);
          qspCall(s, 'stat_display_compute', 'queue_alert', 'Your breasts are leaking.', 'neg');
        } else {
          if (((s as any).lactation ?? 0)?.['lactmess'] < 6) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['lactation'] = ((((s as any).lactation ?? 0)?.['pc_aware'] > 0) ? (((((s as any).clothingworntype ?? 0) === 'nude') ? ('Your breasts are so full they hurt and you can feel your milk coming out causing you to have a lot of milk around your nipples.') : ('Your breasts are so full they hurt and you can feel your milk coming out making visible wet circles on your top.'))) : (((((s as any).clothingworntype ?? 0) === 'nude') ? ('Your breasts hurt and they feel wet, some white liquid around your nipples.') : ('Your breasts hurt and your nipples tingle. There are visible wet circles on your top.'))));
            qspCall(s, 'stat_display_compute', 'queue_msg', 'lactation', 'v_neg', 'status/lactating_d100', 3);
            qspCall(s, 'stat_display_compute', 'queue_alert', 'Your breasts are leaking badly.', 'v_neg');
          } else {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['lactation'] = ((((s as any).lactation ?? 0)?.['pc_aware'] > 0) ? (((((s as any).clothingworntype ?? 0) === 'nude') ? ('Your breasts are so full they hurt and you can feel your milk spraying out. Your breasts covered with your breast milk.') : ('Your breasts are so full they hurt and you can feel your milk spraying out. Your top is drenched with your breast milk.'))) : (((((s as any).clothingworntype ?? 0) === 'nude') ? ('Your breasts hurt and a white liquid is spraying out, covering your breasts.') : ('Your breasts hurt and your nipples tingle a lot. Your top is drenched with a warm liquid.'))));
            qspCall(s, 'stat_display_compute', 'queue_msg', 'lactation', 'v_neg', 'status/lactating_d100+', 3);
            qspCall(s, 'stat_display_compute', 'queue_alert', 'Your breasts are spraying.', 'v_neg');
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init_breasttissue':
      enterInitBreasttissue(s, scene);
      break;
    case 'set_useable_cupsize':
      enterSetUseableCupsize(s, scene);
      break;
    case 'bsizetoccm':
      enterBsizetoccm(s, scene);
      break;
    case 'bccmtosize':
      enterBccmtosize(s, scene);
      break;
    case 'lactationBreastGrowth':
      enterLactationBreastGrowth(s, scene);
      break;
    case 'show_breast_stat':
      enterShowBreastStat(s, scene);
      break;
    case 'prod_milk':
      enterProdMilk(s, scene);
      break;
    case 'breast_engorment':
      enterBreastEngorment(s, scene);
      break;
    case 'lact_switch':
      enterLactSwitch(s, scene);
      break;
    case 'lact_on':
      enterLactOn(s, scene);
      break;
    case 'lact_off':
      enterLactOff(s, scene);
      break;
    case 'breastcycle':
      enterBreastcycle(s, scene);
      break;
    case 'lactate_optout':
      enterLactateOptout(s, scene);
      break;
    case 'get_suckflowrate':
      enterGetSuckflowrate(s, scene);
      break;
    case 'get_maxnipflowrate':
      enterGetMaxnipflowrate(s, scene);
      break;
    case 'get_moodmod':
      enterGetMoodmod(s, scene);
      break;
    case 'get_sorenessmod':
      enterGetSorenessmod(s, scene);
      break;
    case '$get_breastmilk_time':
      enter_getBreastmilkTime(s, scene);
      break;
    case '$get_breastmilk':
      enter_getBreastmilk(s, scene);
      break;
    case 'compute_stat_display':
      enterComputeStatDisplay(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lact_lib: LocationDef = {
  name: 'lact_lib',
  title: '<b>Your breasts seem fuller.</b>',
  region: 'other',
  enter: enter,
};
