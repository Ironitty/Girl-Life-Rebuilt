import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCalc(s: GameState, scene: SceneBuilder): void {
  ((s as any).temppain = (s as any).temppain ?? {})['total'] = 0;
  ((s as any).temppain = (s as any).temppain ?? {})['i'] = 0;
  ((s as any).temppain = (s as any).temppain ?? {})['maxi'] = 0;
  do {
    ((s as any).temppain = (s as any).temppain ?? {})['total'] = ((s as any).temppain['total'] ?? 0) + (((s as any).pain ?? 0)[((s as any).painParts ?? 0)[(((s as any).temppain ?? {})?.['i'] ?? 0)]] * ((s as any).pain ?? 0)[((s as any).painParts ?? 0)[(((s as any).temppain ?? {})?.['i'] ?? 0)]]);
    ((s as any).temppain = (s as any).temppain ?? {})['i'] = ((s as any).temppain['i'] ?? 0) + (1);
    ((s as any).temppain = (s as any).temppain ?? {})['total'] = ((s as any).temppain['total'] ?? 0) + (4 * ((s as any).vgape ?? 0) * ((s as any).vgape ?? 0) + 16 * ((s as any).agape ?? 0) * ((s as any).agape ?? 0) + 576 * ((s as any).spanked ?? 0) * ((s as any).spanked ?? 0));
    ((s as any).pain = (s as any).pain ?? {})['total'] = Math.min(qspFunc(s, 'math', 'int_sqrt', (((s as any).temppain ?? 0)?.['total'])), 100);
    if (((s as any).pain ?? 0)?.['total'] < 0) {
      ((s as any).pain = (s as any).pain ?? {})['total'] = 0;
    }
    ((s as any).pain = (s as any).pain ?? {})['damage'] = (((s as any).pain ?? 0)?.['total']);
    (s as any).temppain = undefined;
    if (((s as any).pain ?? 0)?.['total'] <= 0) {
      return;
    }
    qspCall(s, 'drugs', 'pain_relief');
    if (((s as any).pain ?? 0)?.['relief'] > 0) {
      ((s as any).pain = (s as any).pain ?? {})['total'] = (((s as any).pain ?? {})?.['total'] ?? 0) * (100 - (((s as any).pain ?? {})?.['relief'] ?? 0)) / 100;
      if (((s as any).pain ?? 0)?.['total'] < 0) {
        ((s as any).pain = (s as any).pain ?? {})['total'] = 0;
      }
    }
    return;
  } while (((s as any).temppain ?? 0)?.['i'] < ((s as any).temppain ?? 0)?.['maxi']);
  scene.build();
}

function enterManage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pain ?? 0)?.['timer'] <= 0) {
    ((s as any).pain = (s as any).pain ?? {})['timer'] = ((s as any).totminut ?? 0) + 10;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalc(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).totminut ?? 0) < ((s as any).pain ?? 0)?.['timer']) {
    return;
  }
  if ((((s as any).pain ?? 0)?.['damage'] + ((s as any).pain ?? 0)?.['total']) <= 0) {
    return;
  }
  ((s as any).temppain = (s as any).temppain ?? {})['tmp_0'] = 1 + (((s as any).totminut ?? 0) - (((s as any).pain ?? {})?.['timer'] ?? 0)) / 10;
  ((s as any).temppain = (s as any).temppain ?? {})['i'] = 0;
  ((s as any).temppain = (s as any).temppain ?? {})['maxi'] = 0;
  do {
    ((s as any).temppain = (s as any).temppain ?? {})['loc'] = qspUntranslated(s, "painParts[temppain['i']]", { location: "pain" });
    if (((s as any).pain ?? 0)[((s as any).temppain ?? 0)?.['loc']] > 0) {
      ((s as any).temppain = (s as any).temppain ?? {})['tmp_1'] = (Math.floor(Math.random() * ((((s as any).temppain ?? 0)?.['tmp_0']) - (((s as any).temppain ?? {})?.['tmp_0'] ?? 0) / 3 + 1)) + ((((s as any).temppain ?? {})?.['tmp_0'] ?? 0) / 3));
      ((s as any).temppain = (s as any).temppain ?? {})['tmp_2'] = (Math.floor(Math.random() * ((((s as any).temppain ?? 0)?.['tmp_0']) - (((s as any).temppain ?? {})?.['tmp_0'] ?? 0) / 2 + 1)) + ((((s as any).temppain ?? {})?.['tmp_0'] ?? 0) / 2));
      ((s as any).temppain = (s as any).temppain ?? {})['tmp_3'] = ((((s as any).inSleep ?? 0)) ? ((Math.floor(Math.random() * ((((s as any).pain ?? 0)?.[(((s as any).temppain ?? 0)?.['loc'])] ?? 0) - 0 + 1)) + (0))) : (0));
      ((s as any).pain = (s as any).pain ?? {})[(((s as any).temppain ?? 0)?.['loc'])] = ((s as any).pain[(((s as any).temppain ?? 0)?.['loc'])] ?? 0) - (Math.max((((s as any).temppain ?? 0)?.['tmp_1']), (((s as any).temppain ?? {})?.['tmp_2'] ?? 0) + (((s as any).temppain ?? {})?.['tmp_3'] ?? 0)));
    }
    ((s as any).temppain = (s as any).temppain ?? {})['i'] = ((s as any).temppain['i'] ?? 0) + (1);
    ((s as any).temppain = (s as any).temppain ?? {})['i'] = 0;
    ((s as any).temppain = (s as any).temppain ?? {})['maxi'] = 0;
    do {
      if (((s as any).pain ?? 0)[((s as any).temppain ?? 0)?.['i']] < 0) {
        ((s as any).pain = (s as any).pain ?? {})[(((s as any).temppain ?? 0)?.['i'])] = 0;
      }
      ((s as any).temppain = (s as any).temppain ?? {})['i'] = ((s as any).temppain['i'] ?? 0) + (1);
      (s as any).temppain = undefined;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalc(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStatChanges(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).pain = (s as any).pain ?? {})['timer'] = ((s as any).totminut ?? 0) + 10;
      return;
    } while (((s as any).temppain ?? 0)?.['i'] < ((s as any).temppain ?? 0)?.['maxi']);
  } while (((s as any).temppain ?? 0)?.['i'] < ((s as any).temppain ?? 0)?.['maxi']);
  scene.build();
}

function enterStatChanges(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pain ?? 0)?.['total'] <= 0) {
    return;
  }
  if (((s as any).pain ?? 0)?.['total'] <= 20) {
    if ((((s as any).pcs_health ?? 0) * 10 / 9)  >= ((s as any).healthmax ?? 0)) {
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) * 9 / 10;
    }
  } else {
    if (((s as any).pain ?? 0)?.['total'] <= 40) {
      if ((((s as any).pcs_health ?? 0) * 5 / 4)    >= ((s as any).healthmax ?? 0)) {
        (s as any).pcs_health = ((s as any).pcs_health ?? 0) * 8 / 10;
      }
    } else {
      if (((s as any).pain ?? 0)?.['total'] <= 60) {
        if ((((s as any).pcs_health ?? 0) * 5 / 3)    >= ((s as any).healthmax ?? 0)) {
          (s as any).pcs_health = ((s as any).pcs_health ?? 0) * 7 / 10;
        }
      } else {
        if (((s as any).pain ?? 0)?.['total'] <= 80) {
          if ((((s as any).pcs_health ?? 0) * 5 / 2)    >= ((s as any).healthmax ?? 0)) {
            (s as any).pcs_health = ((s as any).pcs_health ?? 0) * 5 / 10;
          }
        } else {
          if ((((s as any).pcs_health ?? 0) * 5)      >= ((s as any).healthmax ?? 0)) {
            (s as any).pcs_health = ((s as any).pcs_health ?? 0) * 4 / 10;
          }
        }
      }
    }
  }
  ((s as any).temppain = (s as any).temppain ?? {})['mood_loss'] = Math.max(1, (((s as any).pain ?? {})?.['total'] ?? 0) / 10);
  if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === -1) {
    ((s as any).temppain = (s as any).temppain ?? {})['mood_loss'] = ((((s as any).temppain ?? {})?.['mood_loss'] ?? 0) * 12) / 10;
  } else {
    if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === 1) {
      ((s as any).temppain = (s as any).temppain ?? {})['mood_loss'] = Math.max(1, (((s as any).temppain ?? {})?.['mood_loss'] ?? 0) * 8 / 10);
    }
  }
  if (((s as any).pain ?? 0)?.['total'] <= 40) {
    if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === -1) {
      if (((s as any).pcs_mood ?? 0) > ((s as any).moodVars ?? 0)?.['disp'] - 10) {
        qspCall(s, 'mood', 'lower', (((s as any).temppain ?? 0)?.['mood_loss']));
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === 1) {
        if (((s as any).pcs_mood ?? 0) > ((s as any).moodVars ?? 0)?.['disp'] + 5) {
          qspCall(s, 'mood', 'lower', (((s as any).temppain ?? 0)?.['mood_loss']));
        }
      } else {
        if (((s as any).pcs_mood ?? 0) > ((s as any).moodVars ?? 0)?.['disp']) {
          qspCall(s, 'mood', 'lower', (((s as any).temppain ?? 0)?.['mood_loss']));
        }
      }
    }
  } else {
    if (((s as any).pain ?? 0)?.['total'] <= 80) {
      if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === -1) {
        qspCall(s, 'mood', 'lower', (((s as any).temppain ?? 0)?.['mood_loss']));
      } else {
        if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === 1) {
          if (((s as any).pcs_mood ?? 0) > 30) {
            qspCall(s, 'mood', 'lower', (((s as any).temppain ?? 0)?.['mood_loss']));
          }
        } else {
          if (((s as any).pcs_mood ?? 0) > 20) {
            qspCall(s, 'mood', 'lower', (((s as any).temppain ?? 0)?.['mood_loss']));
          }
        }
      }
    } else {
      qspCall(s, 'mood', 'lower', (((s as any).temppain ?? 0)?.['mood_loss']));
    }
  }
  (s as any).temppain = undefined;
  return;
  if (Object.keys((s as any).ARGS ?? {}).length < 3) {
    return;
  }
  ((s as any).painCalc = (s as any).painCalc ?? {})[0] = Math.min(((s as any).locArgs?.[0] ?? 0) + ((s as any).locArgs?.[1] ?? 0) + ((s as any).locArgs?.[2] ?? 0) + ((s as any).locArgs?.[3] ?? 0), 9);
  if (((s as any).painCalc ?? 0)[0] <= 0) {
    return;
  }
  ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 0;
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('slap') : -1)      >= 0) {
    ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 1;
  } else {
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('bind') : -1)    >= 0) {
      ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 1;
    } else {
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('spank') : -1)    >= 0) {
        ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 3;
        (s as any).spank = ((s as any).spank ?? 0) + (1);
      } else {
        if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('choke') : -1)    >= 0) {
          ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 3;
        } else {
          if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('shock') : -1)    >= 0) {
            ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 4;
          } else {
            if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('twist') : -1)    >= 0) {
              ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 4;
            } else {
              if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('pull') : -1)    >= 0) {
                ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 4;
              } else {
                if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('fall') : -1)    >= 0) {
                  ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 4;
                } else {
                  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('labor') : -1)    >= 0) {
                    ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 4;
                  } else {
                    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('pinch') : -1)    >= 0) {
                      ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 5;
                    } else {
                      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('stretch') : -1)  >= 0) {
                        ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 6;
                      } else {
                        if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('slam') : -1)    >= 0) {
                          ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 6;
                        } else {
                          if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('burn') : -1)    >= 0) {
                            ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 7;
                          } else {
                            if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('freeze') : -1)  >= 0) {
                              ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 7;
                            } else {
                              if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('hit') : -1)    >= 0) {
                                ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 7;
                              } else {
                                if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('pierce') : -1)  >= 0) {
                                  ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 8;
                                } else {
                                  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('bite') : -1)    >= 0) {
                                    ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 8;
                                  } else {
                                    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('tear') : -1)    >= 0) {
                                      ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 9;
                                    } else {
                                      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('ache') : -1)    >= 0) {
                                        ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 9;
                                      } else {
                                        if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('kick') : -1)    >= 0) {
                                          ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 10;
                                        } else {
                                          if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('break') : -1)    >= 0) {
                                            ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 10;
                                          } else {
                                            if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('cramp') : -1)    >= 0) {
                                              ((s as any).painCalc = (s as any).painCalc ?? {})[1] = 10;
                                            } else {
                                              (s as any).temppain = undefined;
                                              (s as any).painCalc = undefined;
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
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ((s as any).painCalc = (s as any).painCalc ?? {})[2] = 0;
  ((s as any).temppain = (s as any).temppain ?? {})['i'] = 0;
  ((s as any).temppain = (s as any).temppain ?? {})['maxi'] = 0;
  while (true) {
    if (((s as any).ARGS ?? 0)[((s as any).temppain ?? 0)?.['i']] !== ''  &&  (Array.isArray((s as any).painParts) ? ((s as any).painParts as any[]).indexOf(((s as any).ARGS ?? 0)[((s as any).temppain ?? 0)?.['i']]) : -1) >= 0) {
      ((s as any).temppain = (s as any).temppain ?? {})['part'] = qspUntranslated(s, "ARGS[temppain['i']]", { location: "pain" });
      ((s as any).painCalc = (s as any).painCalc ?? {})[2] = (((s as any).painMod ?? 0)?.[(((s as any).temppain ?? 0)?.['part'])] ?? 0);
    } else {
      ((s as any).temppain = (s as any).temppain ?? {})['i'] = ((s as any).temppain['i'] ?? 0) + (1);
      if (((s as any).temppain ?? 0)?.['i'] < ((s as any).temppain ?? 0)?.['maxi']) {
        break;
      }
      (s as any).temppain = undefined;
      (s as any).painCalc = undefined;
      return;
    }
    ((s as any).temppain = (s as any).temppain ?? {})['curpain'] = (((s as any).painCalc ?? 0)[0] * ((s as any).painCalc ?? 0)[1] * ((s as any).painCalc ?? 0)[2]) / 10;
    ((s as any).temppain = (s as any).temppain ?? {})['prevpain'] = (((s as any).pain ?? 0)?.[(((s as any).temppain ?? 0)?.['part'])] ?? 0);
    (s as any).lastpain = qspFunc(s, 'math', 'int_sqrt', (((s as any).temppain ?? {})?.['prevpain'] ?? 0) * (((s as any).temppain ?? {})?.['prevpain'] ?? 0) + (((s as any).temppain ?? {})?.['curpain'] ?? 0) * (((s as any).temppain ?? {})?.['curpain'] ?? 0));
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('get') : -1) >= 0) {
      (s as any).result = ((s as any).lastpain ?? 0);
    } else {
      (s as any).lastpainPart = (((s as any).temppain ?? 0)?.['part']);
      ((s as any).pain = (s as any).pain ?? {})[(((s as any).temppain ?? 0)?.['part'])] = ((s as any).lastpain ?? 0);
      if (((s as any).pain ?? 0)[((s as any).temppain ?? 0)?.['part']] > 100) {
        ((s as any).pain = (s as any).pain ?? {})[(((s as any).temppain ?? 0)?.['part'])] = 100;
      }
      ((s as any).pain = (s as any).pain ?? {})['timer'] = ((s as any).totminut ?? 0) + 30;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalc(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    (s as any).temppain = undefined;
    (s as any).painCalc = undefined;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).painParts ?? {}).length < 40  ||  Object.keys((s as any).painMod ?? {}).length < 40) {
    ((s as any).painParts = (s as any).painParts ?? {})[0] = qspUntranslated(s, "'ankles'    & painMod['ankles']    = 2", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[1] = qspUntranslated(s, "'armL'    & painMod['armL']    = 2", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[2] = qspUntranslated(s, "'armR'    & painMod['armR']    = 2", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[3] = qspUntranslated(s, "'asscheeks'  & painMod['asscheeks']  = 2", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[4] = qspUntranslated(s, "'asshole'    & painMod['asshole']  = 9", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[5] = qspUntranslated(s, "'back'    & painMod['back']    = 5", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[6] = qspUntranslated(s, "'breasts'    & painMod['breasts']  = 8", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[7] = qspUntranslated(s, "'cervix'    & painMod['cervix']    = 8", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[8] = qspUntranslated(s, "'cheeks'    & painMod['cheeks']    = 3", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[9] = qspUntranslated(s, "'chest'    & painMod['chest']    = 7", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[10] = qspUntranslated(s, "'clitoris'  & painMod['clitoris']  = 10", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[11] = qspUntranslated(s, "'ears'    & painMod['ears']    = 6", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[12] = qspUntranslated(s, "'eyebrows'  & painMod['eyebrows']  = 6", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[13] = qspUntranslated(s, "'eyes'    & painMod['eyes']    = 8", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[14] = qspUntranslated(s, "'feet'    & painMod['feet']    = 2", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[15] = qspUntranslated(s, "'fingers'    & painMod['fingers']  = 4", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[16] = qspUntranslated(s, "'hair'    & painMod['hair']    = 1", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[17] = qspUntranslated(s, "'hands'    & painMod['hands']    = 3", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[18] = qspUntranslated(s, "'head'    & painMod['head']    = 6", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[19] = qspUntranslated(s, "'hips'    & painMod['hips']    = 5", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[20] = qspUntranslated(s, "'jaw'      & painMod['jaw']    = 4", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[21] = qspUntranslated(s, "'labia'    & painMod['labia']    = 8", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[22] = qspUntranslated(s, "'legL'    & painMod['legL']    = 3", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[23] = qspUntranslated(s, "'legR'    & painMod['legR']    = 3", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[24] = qspUntranslated(s, "'lips'    & painMod['lips']    = 6", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[25] = qspUntranslated(s, "'mouth'    & painMod['mouth']    = 4", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[26] = qspUntranslated(s, "'neck'    & painMod['neck']    = 7", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[27] = qspUntranslated(s, "'nipples'    & painMod['nipples']  = 9", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[28] = qspUntranslated(s, "'nose'    & painMod['nose']    = 5", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[29] = qspUntranslated(s, "'pubic'    & painMod['pubic']    = 6", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[30] = qspUntranslated(s, "'ribs'    & painMod['ribs']    = 5", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[31] = qspUntranslated(s, "'shoulders'  & painMod['shoulders']  = 2", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[32] = qspUntranslated(s, "'thighs'    & painMod['thighs']    = 4", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[33] = qspUntranslated(s, "'throat'    & painMod['throat']    = 6", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[34] = qspUntranslated(s, "'toes'    & painMod['toes']    = 4", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[35] = qspUntranslated(s, "'tongue'    & painMod['tongue']    = 7", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[36] = qspUntranslated(s, "'tummy'    & painMod['tummy']    = 6", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[37] = qspUntranslated(s, "'urethra'    & painMod['urethra']  = 6", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[38] = qspUntranslated(s, "'vaginal'    & painMod['vaginal']  = 8", { location: "pain" });
    ((s as any).painParts = (s as any).painParts ?? {})[39] = qspUntranslated(s, "'wrists'    & painMod['wrists']    = 2", { location: "pain" });
  }
  const arg = s.locArg;
  switch (arg) {
    case 'calc':
      enterCalc(s, scene);
      break;
    case 'manage':
      enterManage(s, scene);
      break;
    case 'stat_changes':
      enterStatChanges(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pain: LocationDef = {
  name: 'pain',
  region: 'other',
  enter: enter,
};
