import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCleanloc(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).sparrnam ?? {}).length <= 0) {
    return;
  }
  (s as any).temp_cum_cleanup_cleanloc_i = 0;
  while (true) {
    if (((s as any).temp_cum_cleanup_cleanloc_i ?? 0) < Object.keys((s as any).sparrnam ?? {}).length) {
      if (((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] === String((s as any).locArgs?.[1] ?? '')) {
        if (((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] !== 0  &&  ((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] !== 3) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_cum_cleanup_cleanloc_i ?? 0)]; enterCleandeposit(s, scene); (s as any).locArgs = __savedLocArgs; }
          break;
        } else {
          if (((s as any).mc_inventory ?? 0)?.['enema_kit'] === 1  ||  ((s as any).cheatVars ?? 0)?.['enema'] === 0) {
            (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) - (((((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] === 0) ? ((((s as any).sparrvol ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] ?? 0)) : (0)));
            (s as any).cumsumass = ((s as any).cumsumass ?? 0) - (((((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] === 3) ? ((((s as any).sparrvol ?? 0)?.[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] ?? 0)) : (0)));
            ((s as any).sparrvol = (s as any).sparrvol ?? {})[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] = 0;
            ((s as any).sparrslc = (s as any).sparrslc ?? {})[String((s as any).temp_cum_cleanup_cleanloc_i ?? 0)] = 0;
          } else {
            qspCall(s, 'cum_cleanup', '15');
          }
        }
      }
      (s as any).temp_cum_cleanup_cleanloc_i = ((s as any).temp_cum_cleanup_cleanloc_i ?? 0) + (1);
      break;
    }
    (s as any).temp_cum_cleanup_cleanloc_i = undefined;
    return;
  }
  scene.build();
}

function enterCleandeposit(s: GameState, scene: SceneBuilder): void {
  ((s as any).cumvol = (s as any).cumvol ?? {})[qspUntranslated(s, "sparrloc[ARGS[1]]", { location: "cum_cleanup" })] = ((s as any).cumvol[qspUntranslated(s, "sparrloc[ARGS[1]]", { location: "cum_cleanup" })] ?? 0) - (qspUntranslated(s, "sparrvol[ARGS[1]]", { location: "cum_cleanup" }));
  if (((s as any).cumvol ?? 0)[((s as any).sparrloc ?? 0)[String((s as any).locArgs?.[1] ?? '')]] <= 0) {
    ((s as any).cumvol = (s as any).cumvol ?? {})[qspUntranslated(s, "sparrloc[ARGS[1]]", { location: "cum_cleanup" })] = 0;
    ((s as any).cumloc = (s as any).cumloc ?? {})[qspUntranslated(s, "sparrloc[ARGS[1]]", { location: "cum_cleanup" })] = 0;
  }
  ((s as any).cum_loc = (s as any).cum_loc ?? {})[qspUntranslated(s, "cum_names[ARGS[1]]", { location: "cum_cleanup" })] = qspUntranslated(s, "cumloc[ARGS[1]]", { location: "cum_cleanup" });
  ((s as any).cum_vol = (s as any).cum_vol ?? {})[qspUntranslated(s, "cum_names[ARGS[1]]", { location: "cum_cleanup" })] = qspUntranslated(s, "cumvol[ARGS[1]]", { location: "cum_cleanup" });
  (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) - (qspUntranslated(s, "sparrvol[ARGS[1]]", { location: "cum_cleanup" }));
  if (((s as any).sparrloc ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) - (qspUntranslated(s, "sparrvol[ARGS[1]]", { location: "cum_cleanup" }));
  } else {
    if (((s as any).sparrloc ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 3) {
      (s as any).cumsumass = ((s as any).cumsumass ?? 0) - (qspUntranslated(s, "sparrvol[ARGS[1]]", { location: "cum_cleanup" }));
    }
  }
  (s as any).sparrloc = undefined;
  (s as any).sparrvol = undefined;
  (s as any).sparrage = undefined;
  (s as any).sparrppt = undefined;
  (s as any).sparridt = undefined;
  (s as any).sparrslc = undefined;
  (s as any).sparrcnt = undefined;
  (s as any).sparrnam = undefined;
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
  (s as any).cumarrcpt = undefined;
  (s as any).cumarrppt = undefined;
  (s as any).cumarrnam = undefined;
  (s as any).cumarrage = undefined;
  (s as any).cumarrdel = undefined;
  (s as any).cumarrkno = undefined;
  (s as any).cumarrcnt = undefined;
  (s as any).cumarrcon = undefined;
  return;
  scene.build();
}

function enterCumcondslip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cumcondslip_deep ?? 0) > (((s as any).pcs_vag ?? 0) / 2)  &&  ((s as any).vgape ?? 0) < 3) {
    scene.text('The condom is too deep inside you to be pulled out by hand. You need to seek professional help!');
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 17]; enterCleanloc(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).cumcondslip = 0;
    qspCall(s, 'stat', '');
    scene.text('With some effort, you manage to remove the condom.');
  }
  return;
  scene.build();
}

function enterReset(s: GameState, scene: SceneBuilder): void {
  (s as any).cleanloc = undefined;
  (s as any).cumarrcpt = undefined;
  (s as any).cumarrppt = undefined;
  (s as any).cumarrnam = undefined;
  (s as any).cumarrage = undefined;
  (s as any).cumarrdel = undefined;
  (s as any).cumarrkno = undefined;
  (s as any).cumarrcnt = undefined;
  (s as any).cumarrcon = undefined;
  (s as any).cumcount = undefined;
  (s as any).cumloc = undefined;
  (s as any).cum_loc = undefined;
  (s as any).cumowner = undefined;
  (s as any).cumspclnt = undefined;
  (s as any).cumvolume = undefined;
  (s as any).spafinloc = undefined;
  (s as any).sparrage = undefined;
  (s as any).sparrloc = undefined;
  (s as any).sparrnam = undefined;
  (s as any).sparrppt = undefined;
  (s as any).sparridt = undefined;
  (s as any).sparrvol = undefined;
  (s as any).sparrslc = undefined;
  (s as any).sparrcnt = undefined;
  (s as any).toclean = undefined;
  (s as any).deresidue = undefined;
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
  ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 1;
  scene.build();
}

function enterTeeth(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 2;
  scene.build();
}

function enterInternal(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 3;
  scene.build();
}

function enterExternal(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 4;
  scene.build();
}

function enterHair(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 5;
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 6;
  scene.build();
}

function enterEnema(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 7;
  scene.build();
}

function enterBlank(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 8;
  scene.build();
}

function enterHands(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 9;
  scene.build();
}

function enterFace(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 11;
  if (String((s as any).locArgs?.[0] ?? '') === 'face  &&  hair'  ||  String((s as any).locArgs?.[0] ?? '') === 'face_hair') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 12;
  } else {
    if (String((s as any).locArgs?.[0] ?? '') === 'head') {
      ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 13;
    } else {
      if (String((s as any).locArgs?.[0] ?? '') === 'belly') {
        ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 14;
      } else {
        if (String((s as any).locArgs?.[0] ?? '') === 'ass'  ||  String((s as any).locArgs?.[0] ?? '') === 'pussy') {
          ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 15;
        } else {
          if (String((s as any).locArgs?.[0] ?? '') === 'breasts') {
            ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 16;
          } else {
            if (String((s as any).locArgs?.[0] ?? '') === 'arms') {
              ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 17;
            } else {
              if (String((s as any).locArgs?.[0] ?? '') === 'therapist'  ||  String((s as any).locArgs?.[0] ?? '') === 'hypno') {
                ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 18;
              } else {
                if (String((s as any).locArgs?.[0] ?? '') === 'everything') {
                  ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 20;
                } else {
                  if (String((s as any).locArgs?.[0] ?? '') !== '') {
                    return;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).cumspclnt ?? 0) !== 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[0] = ((s as any).cumspclnt ?? 0);
    (s as any).cumspclnt = undefined;
  }
  if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
    if (String((s as any).locArgs?.[0] ?? '') === 1  ||  String((s as any).locArgs?.[0] ?? '') === 10) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[0] = 18;
    }
  }
  (s as any).spafinloc = undefined;
  (s as any).toclean = undefined;
  (s as any).deresidue = undefined;
  if (String((s as any).locArgs?.[0] ?? '') === 1  ||  String((s as any).locArgs?.[0] ?? '') === 10) {
    // TODO-QSP: !{full external clean !}
    if (((s as any).isprok ?? 0) === 0  &&  (!((s as any).vibratorIN ?? 0))) {
      (s as any).deresidue = [...((s as any).deresidue ?? []), 0];
    }
    if ((!((s as any).analPlugIn ?? 0))) {
      (s as any).deresidue = [...((s as any).deresidue ?? []), 3];
    }
    (s as any).toclean = [...((s as any).toclean ?? []), 1];
    (s as any).toclean = [...((s as any).toclean ?? []), 2];
    (s as any).toclean = [...((s as any).toclean ?? []), 4];
    (s as any).toclean = [...((s as any).toclean ?? []), 5];
    (s as any).toclean = [...((s as any).toclean ?? []), 6];
    (s as any).toclean = [...((s as any).toclean ?? []), 7];
    (s as any).toclean = [...((s as any).toclean ?? []), 8];
    (s as any).toclean = [...((s as any).toclean ?? []), 9];
    (s as any).toclean = [...((s as any).toclean ?? []), 10];
    (s as any).toclean = [...((s as any).toclean ?? []), 11];
    (s as any).toclean = [...((s as any).toclean ?? []), 12];
    (s as any).toclean = [...((s as any).toclean ?? []), 13];
    (s as any).toclean = [...((s as any).toclean ?? []), 14];
    (s as any).toclean = [...((s as any).toclean ?? []), 15];
    (s as any).toclean = [...((s as any).toclean ?? []), 16];
  } else {
    if (String((s as any).locArgs?.[0] ?? '') === 2) {
      // TODO-QSP: !{teeth clean !}
      (s as any).toclean = [...((s as any).toclean ?? []), 12];
    } else {
      if (String((s as any).locArgs?.[0] ?? '') === 3) {
        // TODO-QSP: !{internal clean !}
        (s as any).toclean = [...((s as any).toclean ?? []), 0];
        (s as any).toclean = [...((s as any).toclean ?? []), 3];
        (s as any).toclean = [...((s as any).toclean ?? []), 17];
        if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0  &&  (((s as any).cumloc ?? 0)[0] > 0  ||  ((s as any).cumloc ?? 0)[3] > 0)) {
          scene.text('You have no reason to, but you carefully avoid cleaning out your pussy and ass.');
        }
      } else {
        if (String((s as any).locArgs?.[0] ?? '') === 4) {
          // TODO-QSP: !{external body clean !}
          (s as any).toclean = [...((s as any).toclean ?? []), 1];
          (s as any).toclean = [...((s as any).toclean ?? []), 4];
          (s as any).toclean = [...((s as any).toclean ?? []), 8];
          (s as any).toclean = [...((s as any).toclean ?? []), 9];
          (s as any).toclean = [...((s as any).toclean ?? []), 10];
          (s as any).toclean = [...((s as any).toclean ?? []), 11];
          (s as any).toclean = [...((s as any).toclean ?? []), 13];
          (s as any).toclean = [...((s as any).toclean ?? []), 14];
          (s as any).toclean = [...((s as any).toclean ?? []), 15];
          (s as any).toclean = [...((s as any).toclean ?? []), 16];
        } else {
          if (String((s as any).locArgs?.[0] ?? '') === 5) {
            // TODO-QSP: !{hair clean !}
            (s as any).toclean = [...((s as any).toclean ?? []), 16];
          } else {
            if (String((s as any).locArgs?.[0] ?? '') === 6) {
              // TODO-QSP: !{clothes clean !}
              (s as any).toclean = [...((s as any).toclean ?? []), 2];
              (s as any).toclean = [...((s as any).toclean ?? []), 5];
              (s as any).toclean = [...((s as any).toclean ?? []), 6];
              (s as any).toclean = [...((s as any).toclean ?? []), 7];
            } else {
              if (String((s as any).locArgs?.[0] ?? '') === 7) {
                // TODO-QSP: !{enema !}
                (s as any).toclean = [...((s as any).toclean ?? []), 3];
              } else {
                if (String((s as any).locArgs?.[0] ?? '') === 8) {
                  // TODO-QSP: !{blank !}
                } else {
                  if (String((s as any).locArgs?.[0] ?? '') === 9) {
                    // TODO-QSP: !{wash hands !}
                    (s as any).toclean = [...((s as any).toclean ?? []), 13];
                  } else {
                    if (String((s as any).locArgs?.[0] ?? '') === 11) {
                      // TODO-QSP: !{wash face !}
                      (s as any).toclean = [...((s as any).toclean ?? []), 11];
                    } else {
                      if (String((s as any).locArgs?.[0] ?? '') === 12) {
                        // TODO-QSP: !{face and hair !}
                        (s as any).toclean = [...((s as any).toclean ?? []), 11];
                        (s as any).toclean = [...((s as any).toclean ?? []), 16];
                      } else {
                        if (String((s as any).locArgs?.[0] ?? '') === 13) {
                          // TODO-QSP: !{head !}
                          (s as any).toclean = [...((s as any).toclean ?? []), 11];
                          (s as any).toclean = [...((s as any).toclean ?? []), 12];
                          (s as any).toclean = [...((s as any).toclean ?? []), 16];
                        } else {
                          if (String((s as any).locArgs?.[0] ?? '') === 14) {
                            // TODO-QSP: !{belly !}
                            (s as any).toclean = [...((s as any).toclean ?? []), 14];
                          } else {
                            if (String((s as any).locArgs?.[0] ?? '') === 15) {
                              // TODO-QSP: !{wipe ass/pussy !}
                              (s as any).toclean = [...((s as any).toclean ?? []), 1];
                              (s as any).toclean = [...((s as any).toclean ?? []), 4];
                              (s as any).deresidue = [...((s as any).deresidue ?? []), 0];
                              (s as any).deresidue = [...((s as any).deresidue ?? []), 3];
                              if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0  &&  (((s as any).cumloc ?? 0)[0] > 0  ||  ((s as any).cumloc ?? 0)[3] > 0)) {
                                scene.text('You have no reason to, but you carefully avoid cleaning out your pussy and ass.');
                              }
                            } else {
                              if (String((s as any).locArgs?.[0] ?? '') === 16) {
                                // TODO-QSP: !{Breasts !}
                                (s as any).toclean = [...((s as any).toclean ?? []), 15];
                              } else {
                                if (String((s as any).locArgs?.[0] ?? '') === 17) {
                                  // TODO-QSP: !{Arms/legs !}
                                  (s as any).toclean = [...((s as any).toclean ?? []), 9];
                                  (s as any).toclean = [...((s as any).toclean ?? []), 10];
                                } else {
                                  if (String((s as any).locArgs?.[0] ?? '') === 18) {
                                    // TODO-QSP: !{full clean but skipping internal due to hypno !}
                                    (s as any).toclean = [...((s as any).toclean ?? []), 1];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 2];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 4];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 5];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 6];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 7];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 8];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 9];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 10];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 11];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 12];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 13];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 14];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 15];
                                    (s as any).toclean = [...((s as any).toclean ?? []), 16];
                                  } else {
                                    if (String((s as any).locArgs?.[0] ?? '') === 20) {
                                      // TODO-QSP: !{Clean everything !}
                                      (s as any).sparrage = undefined;
                                      (s as any).sparrloc = undefined;
                                      (s as any).sparrnam = undefined;
                                      (s as any).sparrppt = undefined;
                                      (s as any).sparridt = undefined;
                                      (s as any).sparrvol = undefined;
                                      (s as any).sparrslc = undefined;
                                      (s as any).sparrcnt = undefined;
                                      (s as any).cumloc = undefined;
                                      (s as any).cum_loc = undefined;
                                      (s as any).cumvol = undefined;
                                      (s as any).cum_vol = undefined;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).temp_cum_cleanup_i = 0;
  while (true) {
    if (((s as any).temp_cum_cleanup_i ?? 0) < Object.keys((s as any).sparrnam ?? {}).length) {
      (s as any).temp_cum_cleanup_pos = qspUntranslated(s, "arrpos('deresidue', sparrloc[temp_cum_cleanup_i])", { location: "cum_cleanup" });
      if (((s as any).temp_cum_cleanup_pos ?? 0) >= 0) {
        if (((s as any).temp_cum_cleanup_pos ?? 0) < Object.keys((s as any).deresidue ?? {}).length) {
          if (((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] === 0) {
            if (qspFunc(s, 'cum_manage', 'check_inner_overflow', 0) === 1  ||  (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0  &&  (((s as any).cheatVars ?? 0)?.['enema'] === 1  ||  (((s as any).mc_inventory ?? 0)?.['enema_kit'] === 1  &&  (String((s as any).locArgs?.[0] ?? '') === 10  ||  String((s as any).locArgs?.[0] ?? '') === 1  ||  String((s as any).locArgs?.[0] ?? '') === 3))))) {
              (s as any).isprok = 0;
              (s as any).vibratorIN = 0;
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_cum_cleanup_i ?? 0)]; enterCleandeposit(s, scene); (s as any).locArgs = __savedLocArgs; }
              break;
            }
          } else {
            if (((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] === 3) {
              if (qspFunc(s, 'cum_manage', 'check_inner_overflow', 3) === 1  ||  String((s as any).locArgs?.[0] ?? '') === 7  ||  (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0  &&  (((s as any).cheatVars ?? 0)?.['enema'] === 1  ||  (((s as any).mc_inventory ?? 0)?.['enema_kit'] === 1  &&  (String((s as any).locArgs?.[0] ?? '') === 10  ||  String((s as any).locArgs?.[0] ?? '') === 1  ||  String((s as any).locArgs?.[0] ?? '') === 3))))) {
                (s as any).analPlugIn = 0;
                (s as any).analPlugOut = 0;
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_cum_cleanup_i ?? 0)]; enterCleandeposit(s, scene); (s as any).locArgs = __savedLocArgs; }
                break;
              }
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_cum_cleanup_i ?? 0)]; enterCleandeposit(s, scene); (s as any).locArgs = __savedLocArgs; }
              break;
            }
          }
        }
      }
      (s as any).temp_cum_cleanup_pos = qspUntranslated(s, "arrpos('toclean', sparrloc[temp_cum_cleanup_i])", { location: "cum_cleanup" });
      if (((s as any).temp_cum_cleanup_pos ?? 0) < 0) {
        (s as any).temp_cum_cleanup_i = ((s as any).temp_cum_cleanup_i ?? 0) + (1);
      } else {
        if (((s as any).temp_cum_cleanup_pos ?? 0) >= Object.keys((s as any).toclean ?? {}).length) {
          if (((s as any).sparrvol ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] <= 0  &&  (((s as any).sparrnam ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] === ''  ||  ((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] !== 0  ||  (((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] === 0  &&  ((s as any).sparrage ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] > 10))) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_cum_cleanup_i ?? 0)]; enterCleandeposit(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            (s as any).temp_cum_cleanup_i = ((s as any).temp_cum_cleanup_i ?? 0) + (1);
          }
        } else {
          if (((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] === 0) {
            if (((s as any).cumsumvag ?? 0) * (Math.floor(Math.random() * 4) + 6) / 6 >= qspFunc(s, 'cum_manage', 'get_inner_capacity', 0)  &&  ((s as any).isprok ?? 0) === 0  &&  ((s as any).vibratorIN ?? 0) === 0  ||  (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0  &&  (((s as any).cheatVars ?? 0)?.['enema'] === 1  ||  (((s as any).mc_inventory ?? 0)?.['enema_kit'] === 1  &&  (String((s as any).locArgs?.[0] ?? '') === 10  ||  String((s as any).locArgs?.[0] ?? '') === 1  ||  String((s as any).locArgs?.[0] ?? '') === 3))))) {
              if (String((s as any).locArgs?.[0] ?? '') === 3) {
                (s as any).isprok = 0;
                (s as any).vibratorIN = 0;
              }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_cum_cleanup_i ?? 0)]; enterCleandeposit(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              (s as any).temp_cum_cleanup_i = ((s as any).temp_cum_cleanup_i ?? 0) + (1);
            }
          } else {
            if (((s as any).sparrloc ?? 0)?.[String((s as any).temp_cum_cleanup_i ?? 0)] === 3) {
              if ((((s as any).cumsumass ?? 0) * (Math.floor(Math.random() * 4) + 6) / 6 >= qspFunc(s, 'cum_manage', 'get_inner_capacity', 3)  &&  ((s as any).analPlugIn ?? 0) === 0)  ||  String((s as any).locArgs?.[0] ?? '') === 7  ||  (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0  &&  (((s as any).cheatVars ?? 0)?.['enema'] === 1  ||  (((s as any).mc_inventory ?? 0)?.['enema_kit'] === 1  &&  (String((s as any).locArgs?.[0] ?? '') === 10  ||  String((s as any).locArgs?.[0] ?? '') === 1  ||  String((s as any).locArgs?.[0] ?? '') === 3))))) {
                if (String((s as any).locArgs?.[0] ?? '') === 3  ||  String((s as any).locArgs?.[0] ?? '') === 7) {
                  (s as any).analPlugIn = 0;
                  (s as any).analPlugOut = 0;
                }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_cum_cleanup_i ?? 0)]; enterCleandeposit(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                (s as any).temp_cum_cleanup_i = ((s as any).temp_cum_cleanup_i ?? 0) + (1);
              }
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_cum_cleanup_i ?? 0)]; enterCleandeposit(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
      break;
    }
    (s as any).toclean = undefined;
    (s as any).deresidue = undefined;
    (s as any).temp_cum_cleanup_pos = undefined;
    (s as any).temp_cum_cleanup_i = undefined;
    (s as any).lubonus = undefined;
    (s as any).anal_slip = undefined;
    (s as any).vaginal_slip = undefined;
    (s as any).ar_anal_lube = undefined;
    (s as any).ar_vag_lube = undefined;
    if (((s as any).cumsumvag ?? 0) > 0) {
      ((s as any).cum_vol = (s as any).cum_vol ?? {})['vagina'] = ((s as any).cumsumvag ?? 0);
      ((s as any).cumvol = (s as any).cumvol ?? {})[0] = ((s as any).cumsumvag ?? 0);
      ((s as any).cum_loc = (s as any).cum_loc ?? {})['vagina'] = 1;
      ((s as any).cumloc = (s as any).cumloc ?? {})[0] = 1;
    }
    if (((s as any).cumsumass ?? 0) > 0) {
      ((s as any).cum_vol = (s as any).cum_vol ?? {})['anus'] = ((s as any).cumsumass ?? 0);
      ((s as any).cumvol = (s as any).cumvol ?? {})[3] = ((s as any).cumsumass ?? 0);
      ((s as any).cum_loc = (s as any).cum_loc ?? {})['anus'] = 1;
      ((s as any).cumloc = (s as any).cumloc ?? {})[3] = 1;
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
    case 'teeth':
      enterTeeth(s, scene);
      break;
    case 'internal':
      enterInternal(s, scene);
      break;
    case 'external':
      enterExternal(s, scene);
      break;
    case 'hair':
      enterHair(s, scene);
      break;
    case 'clothes':
      enterClothes(s, scene);
      break;
    case 'enema':
      enterEnema(s, scene);
      break;
    case 'blank':
      enterBlank(s, scene);
      break;
    case 'hands':
      enterHands(s, scene);
      break;
    case 'face':
      enterFace(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const cum_cleanup: LocationDef = {
  name: 'cum_cleanup',
  title: 'The condom is too deep inside you to be pulled out by hand. ',
  region: 'other',
  enter: enter,
};
