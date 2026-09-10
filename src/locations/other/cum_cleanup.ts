import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCleanloc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arrsize ?? 0)('sparrnam') <= 0) {
    return;
  }
  (s as any).temp_cum_cleanup_cleanloc_i = 0;
  // TODO-QSP: :cleanlocloop
  if (((s as any).temp_cum_cleanup_cleanloc_i ?? 0) < ((s as any).arrsize ?? 0)('sparrnam')) {
    if (((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] === ((s as any).ARGS ?? 0)[1]) {
      if (((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] !== 0  &&  ((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] !== 3) {
        qspCall(s, 'cum_cleanup', 'cleandeposit', ((s as any).temp_cum_cleanup_cleanloc_i ?? 0));
        // TODO-QSP: jump 'cleanlocloop'
      } else {
        (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) - ((((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] === 0) ? (((s as any).sparrvol ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)]) : (0));
        (s as any).cumsumass = ((s as any).cumsumass ?? 0) - ((((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] === 3) ? (((s as any).sparrvol ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)]) : (0));
        (s as any).sparrvol[temp_cum_cleanup_cleanloc_i] = 0;
        (s as any).sparrslc[temp_cum_cleanup_cleanloc_i] = 0;
        qspCall(s, 'cum_cleanup', '', 15);
      }
    }
    (s as any).temp_cum_cleanup_cleanloc_i = ((s as any).temp_cum_cleanup_cleanloc_i ?? 0) + (1);
    // TODO-QSP: jump 'cleanlocloop'
  }
  return;
  scene.build();
}

function enterCleandeposit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: cumvol[sparrloc[ARGS[1]]] -= sparrvol[ARGS[1]]
  if (((s as any).cumvol ?? 0)[((s as any).sparrloc ?? 0)[((s as any).ARGS ?? 0)[1]]] <= 0) {
    // TODO-QSP: cumvol[sparrloc[ARGS[1]]] = 0
    // TODO-QSP: cumloc[sparrloc[ARGS[1]]] = 0
  }
  // TODO-QSP: cum_loc[$cum_names[ARGS[1]]] = cumloc[ARGS[1]]
  // TODO-QSP: cum_vol[$cum_names[ARGS[1]]] = cumvol[ARGS[1]]
  (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) - (qspUntranslated(s, "sparrvol[ARGS[1]]", { location: "cum_cleanup" }));
  if (((s as any).sparrloc ?? 0)[((s as any).ARGS ?? 0)[1]] === 0) {
    (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) - (qspUntranslated(s, "sparrvol[ARGS[1]]", { location: "cum_cleanup" }));
  } else {
    (s as any).cumsumass = ((s as any).cumsumass ?? 0) - (qspUntranslated(s, "sparrvol[ARGS[1]]", { location: "cum_cleanup" }));
  }
  if (((s as any).cumsumbod ?? 0) < 0) {
    (s as any).cumsumbod = 0;
  }
  if (((s as any).cumsumvag ?? 0) < 0) {
    (s as any).cumsumvag = 0;
  }
  if (((s as any).cumsumass ?? 0) < 0) {
    (s as any).cumsumass = 0;
  }
  return;
  scene.build();
}

function enterCleanwomb(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterCumcondslip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cumcondslip_deep ?? 0) > (((s as any).pcs_vag ?? 0) / 2)  &&  ((s as any).vgape ?? 0) < 3) {
    scene.text('The condom is too deep inside you to be pulled out by hand. You need to seek professional help!');
  } else {
    qspCall(s, 'cum_cleanup', 'cleanloc', 17);
    (s as any).cumcondslip = 0;
    qspCall(s, 'stat', '');
    scene.text('With some effort, you manage to remove the condom.');
  }
  return;
  scene.build();
}

function enterReset(s: GameState, scene: SceneBuilder): void {
  (s as any).cumcondslip = 0;
  (s as any).cumcondslip_deep = 0;
  (s as any).cumSUM = 0;
  (s as any).cumsumbod = 0;
  (s as any).cumsumvag = 0;
  (s as any).cumsumass = 0;
  (s as any).Enable_clearcum = 0;
  return;
  scene.build();
}

function enterFullExternal(s: GameState, scene: SceneBuilder): void {
  (s as any).ARGS[1] = 1;
  if (((s as any).locArgs?.[0] ?? 0) === 'teeth') {
    (s as any).ARGS[0] = 2;
  } else {
    (s as any).ARGS[0] = 3;
    if (((s as any).locArgs?.[0] ?? 0) === 'external') {
      (s as any).ARGS[0] = 4;
    } else {
      (s as any).ARGS[0] = 5;
      if (((s as any).locArgs?.[0] ?? 0) === 'clothes') {
        (s as any).ARGS[0] = 6;
      } else {
        (s as any).ARGS[0] = 7;
        if (((s as any).locArgs?.[0] ?? 0) === 'blank') {
          (s as any).ARGS[0] = 8;
        } else {
          (s as any).ARGS[0] = 9;
          if (((s as any).locArgs?.[0] ?? 0) === 'face') {
            (s as any).ARGS[0] = 11;
          } else {
            (s as any).ARGS[0] = 12;
            if (((s as any).locArgs?.[0] ?? 0) === 'head') {
              (s as any).ARGS[0] = 13;
            } else {
              (s as any).ARGS[0] = 14;
              if (((s as any).locArgs?.[0] ?? 0) === 'ass'  ||  ((s as any).locArgs?.[0] ?? 0) === 'pussy') {
                (s as any).ARGS[0] = 15;
              } else {
                (s as any).ARGS[0] = 16;
                if (((s as any).locArgs?.[0] ?? 0) === 'arms') {
                  (s as any).ARGS[0] = 17;
                } else {
                  (s as any).ARGS[0] = 18;
                  if (((s as any).locArgs?.[0] ?? 0) === 'everything') {
                    (s as any).ARGS[0] = 20;
                  } else {
                    return;
                  }
                  if (((s as any).cumspclnt ?? 0) !== 0) {
                    (s as any).ARGS[0] = ((s as any).cumspclnt ?? 0);
                  }
                  if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
                    if (((s as any).ARGS ?? 0)[0] === 1  ||  ((s as any).ARGS ?? 0)[0] === 10) {
                      (s as any).ARGS[0] = 18;
                    }
                  }
                  if (((s as any).ARGS ?? 0)[0] === 1  ||  ((s as any).ARGS ?? 0)[0] === 10) {
                    // TODO-QSP: !{full external clean !}
                    if (((s as any).isprok ?? 0) === 0  &&  ((s as any).vibratorIN ?? 0) === 0) {
                      // TODO-QSP: deresidue[] = 0
                    }
                    if (((s as any).analPlugIn ?? 0) === 0) {
                      // TODO-QSP: deresidue[] = 3
                    }
                    // TODO-QSP: toclean[] = 1
                    // TODO-QSP: toclean[] = 2
                    // TODO-QSP: toclean[] = 4
                    // TODO-QSP: toclean[] = 5
                    // TODO-QSP: toclean[] = 6
                    // TODO-QSP: toclean[] = 7
                    // TODO-QSP: toclean[] = 8
                    // TODO-QSP: toclean[] = 9
                    // TODO-QSP: toclean[] = 10
                    // TODO-QSP: toclean[] = 11
                    // TODO-QSP: toclean[] = 12
                    // TODO-QSP: toclean[] = 13
                    // TODO-QSP: toclean[] = 14
                    // TODO-QSP: toclean[] = 15
                    // TODO-QSP: toclean[] = 16
                  } else {
                    // TODO-QSP: toclean[] = 12
                    if (((s as any).ARGS ?? 0)[0] === 3) {
                      // TODO-QSP: !{internal clean !}
                      // TODO-QSP: toclean[] = 0
                      // TODO-QSP: toclean[] = 3
                      // TODO-QSP: toclean[] = 17
                      if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0  &&  (((s as any).cumloc ?? 0)[0] > 0  ||  ((s as any).cumloc ?? 0)[3] > 0)) {
                        scene.text('You have no reason to, but you carefully avoid cleaning out your pussy and ass.');
                      }
                    } else {
                      // TODO-QSP: toclean[] = 1
                      // TODO-QSP: toclean[] = 4
                      // TODO-QSP: toclean[] = 8
                      // TODO-QSP: toclean[] = 9
                      // TODO-QSP: toclean[] = 10
                      // TODO-QSP: toclean[] = 11
                      // TODO-QSP: toclean[] = 13
                      // TODO-QSP: toclean[] = 14
                      // TODO-QSP: toclean[] = 15
                      // TODO-QSP: toclean[] = 16
                      if (((s as any).ARGS ?? 0)[0] === 5) {
                        // TODO-QSP: !{hair clean !}
                        // TODO-QSP: toclean[] = 16
                      } else {
                        // TODO-QSP: toclean[] = 2
                        // TODO-QSP: toclean[] = 5
                        // TODO-QSP: toclean[] = 6
                        // TODO-QSP: toclean[] = 7
                        if (((s as any).ARGS ?? 0)[0] === 7) {
                          // TODO-QSP: !{enema !}
                          // TODO-QSP: toclean[] = 3
                        } else {
                          if (((s as any).ARGS ?? 0)[0] === 9) {
                            // TODO-QSP: !{wash hands !}
                            // TODO-QSP: toclean[] = 13
                          } else {
                            // TODO-QSP: toclean[] = 11
                            if (((s as any).ARGS ?? 0)[0] === 12) {
                              // TODO-QSP: !{face and hair !}
                              // TODO-QSP: toclean[] = 11
                              // TODO-QSP: toclean[] = 16
                            } else {
                              // TODO-QSP: toclean[] = 11
                              // TODO-QSP: toclean[] = 12
                              // TODO-QSP: toclean[] = 16
                              if (((s as any).ARGS ?? 0)[0] === 14) {
                                // TODO-QSP: !{belly !}
                                // TODO-QSP: toclean[] = 14
                              } else {
                                // TODO-QSP: toclean[] = 1
                                // TODO-QSP: toclean[] = 4
                                // TODO-QSP: deresidue[] = 0
                                // TODO-QSP: deresidue[] = 3
                                if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0  &&  (((s as any).cumloc ?? 0)[0] > 0  ||  ((s as any).cumloc ?? 0)[3] > 0)) {
                                  scene.text('You have no reason to, but you carefully avoid cleaning out your pussy and ass.');
                                }
                                if (((s as any).ARGS ?? 0)[0] === 16) {
                                  // TODO-QSP: !{Breasts !}
                                  // TODO-QSP: toclean[] = 15
                                } else {
                                  // TODO-QSP: toclean[] = 9
                                  // TODO-QSP: toclean[] = 10
                                  if (((s as any).ARGS ?? 0)[0] === 18) {
                                    // TODO-QSP: !{full clean but skipping internal due to hypno !}
                                    // TODO-QSP: toclean[] = 1
                                    // TODO-QSP: toclean[] = 2
                                    // TODO-QSP: toclean[] = 4
                                    // TODO-QSP: toclean[] = 5
                                    // TODO-QSP: toclean[] = 6
                                    // TODO-QSP: toclean[] = 7
                                    // TODO-QSP: toclean[] = 8
                                    // TODO-QSP: toclean[] = 9
                                    // TODO-QSP: toclean[] = 10
                                    // TODO-QSP: toclean[] = 11
                                    // TODO-QSP: toclean[] = 12
                                    // TODO-QSP: toclean[] = 13
                                    // TODO-QSP: toclean[] = 14
                                    // TODO-QSP: toclean[] = 15
                                    // TODO-QSP: toclean[] = 16
                                  }
                                  (s as any).temp_cum_cleanup_i = 0;
                                  // TODO-QSP: :cumcleanloop
                                  if (((s as any).temp_cum_cleanup_i ?? 0) < ((s as any).arrsize ?? 0)('sparrnam')) {
                                    (s as any).temp_cum_cleanup_pos = qspUntranslated(s, "arrpos('deresidue', sparrloc[temp_cum_cleanup_i])", { location: "cum_cleanup" });
                                    if (((s as any).temp_cum_cleanup_pos ?? 0) >= 0) {
                                      if (((s as any).temp_cum_cleanup_pos ?? 0) < ((s as any).arrsize ?? 0)('deresidue')) {
                                        if (((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] === 0) {
                                          if (qspFunc(s, 'cum_manage', 'check_inner_overflow', 0) === 1  ||  (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0  &&  (((s as any).cheatVars ?? 0)?.['enema'] === 1  ||  (((s as any).mc_inventory ?? 0)?.['enema_kit'] === 1  &&  (((s as any).ARGS ?? 0)[0] === 10  ||  ((s as any).ARGS ?? 0)[0] === 1  ||  ((s as any).ARGS ?? 0)[0] === 3))))) {
                                            (s as any).isprok = 0;
                                            (s as any).vibratorIN = 0;
                                            qspCall(s, 'cum_cleanup', 'cleandeposit', ((s as any).temp_cum_cleanup_i ?? 0));
                                            // TODO-QSP: jump 'cumcleanloop'
                                          }
                                        } else {
                                          if (qspFunc(s, 'cum_manage', 'check_inner_overflow', 3) === 1  ||  ((s as any).ARGS ?? 0)[0] === 7  ||  (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0  &&  (((s as any).cheatVars ?? 0)?.['enema'] === 1  ||  (((s as any).mc_inventory ?? 0)?.['enema_kit'] === 1  &&  (((s as any).ARGS ?? 0)[0] === 10  ||  ((s as any).ARGS ?? 0)[0] === 1  ||  ((s as any).ARGS ?? 0)[0] === 3))))) {
                                            (s as any).analPlugIn = 0;
                                            (s as any).analPlugOut = 0;
                                            qspCall(s, 'cum_cleanup', 'cleandeposit', ((s as any).temp_cum_cleanup_i ?? 0));
                                            // TODO-QSP: jump 'cumcleanloop'
                                          }
                                          qspCall(s, 'cum_cleanup', 'cleandeposit', ((s as any).temp_cum_cleanup_i ?? 0));
                                          // TODO-QSP: jump 'cumcleanloop'
                                        }
                                      }
                                    }
                                    (s as any).temp_cum_cleanup_pos = qspUntranslated(s, "arrpos('toclean', sparrloc[temp_cum_cleanup_i])", { location: "cum_cleanup" });
                                    if (((s as any).temp_cum_cleanup_pos ?? 0) < 0) {
                                      (s as any).temp_cum_cleanup_i = ((s as any).temp_cum_cleanup_i ?? 0) + (1);
                                    } else {
                                      if (((s as any).temp_cum_cleanup_pos ?? 0) >= ((s as any).arrsize ?? 0)('toclean')) {
                                        if (((s as any).sparrvol ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] <= 0  &&  (((s as any).sparrnam ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] === ''  ||  ((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] !== 0  ||  (((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] === 0  &&  ((s as any).sparrage ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] > 10))) {
                                          qspCall(s, 'cum_cleanup', 'cleandeposit', ((s as any).temp_cum_cleanup_i ?? 0));
                                        } else {
                                          (s as any).temp_cum_cleanup_i = ((s as any).temp_cum_cleanup_i ?? 0) + (1);
                                        }
                                      } else {
                                        if (((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] === 0) {
                                          if (((s as any).cumsumvag ?? 0) * Math.floor(Math.random() * 4) + 6 / 6 >= qspFunc(s, 'cum_manage', 'get_inner_capacity', 0)  &&  ((s as any).isprok ?? 0) === 0  &&  ((s as any).vibratorIN ?? 0) === 0  ||  (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0  &&  (((s as any).cheatVars ?? 0)?.['enema'] === 1  ||  (((s as any).mc_inventory ?? 0)?.['enema_kit'] === 1  &&  (((s as any).ARGS ?? 0)[0] === 10  ||  ((s as any).ARGS ?? 0)[0] === 1  ||  ((s as any).ARGS ?? 0)[0] === 3))))) {
                                            if (((s as any).ARGS ?? 0)[0] === 3) {
                                              (s as any).isprok = 0;
                                              (s as any).vibratorIN = 0;
                                            }
                                            qspCall(s, 'cum_cleanup', 'cleandeposit', ((s as any).temp_cum_cleanup_i ?? 0));
                                          } else {
                                            (s as any).temp_cum_cleanup_i = ((s as any).temp_cum_cleanup_i ?? 0) + (1);
                                          }
                                        } else {
                                          if ((((s as any).cumsumass ?? 0) * Math.floor(Math.random() * 4) + 6 / 6 >= qspFunc(s, 'cum_manage', 'get_inner_capacity', 3)  &&  ((s as any).analPlugIn ?? 0) === 0)  ||  ((s as any).ARGS ?? 0)[0] === 7  ||  (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0  &&  (((s as any).cheatVars ?? 0)?.['enema'] === 1  ||  (((s as any).mc_inventory ?? 0)?.['enema_kit'] === 1  &&  (((s as any).ARGS ?? 0)[0] === 10  ||  ((s as any).ARGS ?? 0)[0] === 1  ||  ((s as any).ARGS ?? 0)[0] === 3))))) {
                                            if (((s as any).ARGS ?? 0)[0] === 3  ||  ((s as any).ARGS ?? 0)[0] === 7) {
                                              (s as any).analPlugIn = 0;
                                              (s as any).analPlugOut = 0;
                                            }
                                            qspCall(s, 'cum_cleanup', 'cleandeposit', ((s as any).temp_cum_cleanup_i ?? 0));
                                          } else {
                                            (s as any).temp_cum_cleanup_i = ((s as any).temp_cum_cleanup_i ?? 0) + (1);
                                          }
                                          qspCall(s, 'cum_cleanup', 'cleandeposit', ((s as any).temp_cum_cleanup_i ?? 0));
                                        }
                                      }
                                    }
                                    // TODO-QSP: jump 'cumcleanloop'
                                  }
                                  if (((s as any).cumsumvag ?? 0) > 0) {
                                    (s as any).cum_vol['vagina'] = ((s as any).cumsumvag ?? 0);
                                    (s as any).cumvol[0] = ((s as any).cumsumvag ?? 0);
                                    (s as any).cum_loc['vagina'] = 1;
                                    (s as any).cumloc[0] = 1;
                                  }
                                  if (((s as any).cumsumass ?? 0) > 0) {
                                    (s as any).cum_vol['anus'] = ((s as any).cumsumass ?? 0);
                                    (s as any).cumvol[3] = ((s as any).cumsumass ?? 0);
                                    (s as any).cum_loc['anus'] = 1;
                                    (s as any).cumloc[3] = 1;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cleanloc':
      enterCleanloc(s, scene);
      break;
    case 'cleandeposit':
      enterCleandeposit(s, scene);
      break;
    case 'cleanwomb':
      enterCleanwomb(s, scene);
      break;
    case 'cumcondslip':
      enterCumcondslip(s, scene);
      break;
    case 'reset':
      enterReset(s, scene);
      break;
    case 'full external':
      enterFullExternal(s, scene);
      break;
    default:
      enterCleanloc(s, scene);
      break;
  }
}

export const cum_cleanup: LocationDef = {
  name: 'cum_cleanup',
  title: 'The condom is too deep inside you to be pulled out by hand. ',
  region: 'other',
  enter: enter,
};
