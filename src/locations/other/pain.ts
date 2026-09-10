import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCalc(s: GameState, scene: SceneBuilder): void {
  (s as any).temppain['total'] = 0;
  (s as any).temppain['i'] = 0;
  (s as any).temppain['maxi'] = 0;
  // TODO-QSP: :pain_calc_loop
  (s as any).temppain['total'] = ((s as any).temppain['total'] ?? 0) + (((s as any).pain ?? 0)[((s as any).painParts ?? 0)[((s as any).temppain ?? 0)?.['i']]] * ((s as any).pain ?? 0)[((s as any).painParts ?? 0)[((s as any).temppain ?? 0)?.['i']]]);
  (s as any).temppain['i'] = ((s as any).temppain['i'] ?? 0) + (1);
  if (((s as any).temppain ?? 0)?.['i'] < ((s as any).temppain ?? 0)?.['maxi']) {
    // TODO-QSP: jump 'pain_calc_loop'
  }
  (s as any).temppain['total'] = ((s as any).temppain['total'] ?? 0) + (4 * ((s as any).vgape ?? 0) * ((s as any).vgape ?? 0) + 16 * ((s as any).agape ?? 0) * ((s as any).agape ?? 0) + 576 * ((s as any).spanked ?? 0) * ((s as any).spanked ?? 0));
  (s as any).pain['total'] = qspUntranslated(s, "min(func('math', 'int_sqrt', temppain['total']), 100)", { location: "pain" });
  if (((s as any).pain ?? 0)?.['total'] < 0) {
    (s as any).pain['total'] = 0;
  }
  (s as any).pain['damage'] = ((s as any).pain ?? 0)?.['total'];
  if (((s as any).pain ?? 0)?.['total'] <= 0) {
    // TODO-QSP: exit
  }
  qspCall(s, 'drugs', 'pain_relief');
  if (((s as any).pain ?? 0)?.['relief'] > 0) {
    (s as any).pain['total'] = ((s as any).pain ?? 0)?.['total'] * (100 - ((s as any).pain ?? 0)?.['relief']) / 100;
    if (((s as any).pain ?? 0)?.['total'] < 0) {
      (s as any).pain['total'] = 0;
    }
  }
  return;
  scene.build();
}

function enterManage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pain ?? 0)?.['timer'] <= 0) {
    (s as any).pain['timer'] = ((s as any).totminut ?? 0) + 10;
  }
  qspCall(s, 'pain', 'calc');
  if (((s as any).totminut ?? 0) < ((s as any).pain ?? 0)?.['timer']) {
    // TODO-QSP: exit
  }
  if ((((s as any).pain ?? 0)?.['damage'] + ((s as any).pain ?? 0)?.['total']) <= 0) {
    // TODO-QSP: exit
  }
  (s as any).temppain['tmp_0'] = 1 + (((s as any).totminut ?? 0) - ((s as any).pain ?? 0)?.['timer']) / 10;
  (s as any).temppain['i'] = 0;
  (s as any).temppain['maxi'] = 0;
  // TODO-QSP: :pain_manage_loop
  (s as any).temppain['loc'] = qspUntranslated(s, "painParts[temppain['i']]", { location: "pain" });
  if (((s as any).pain ?? 0)[((s as any).temppain ?? 0)?.['loc']] > 0) {
    (s as any).temppain['tmp_1'] = ((s as any).rand ?? 0)(((s as any).temppain ?? 0)?.['tmp_0'] / 3, ((s as any).temppain ?? 0)?.['tmp_0']);
    (s as any).temppain['tmp_2'] = ((s as any).rand ?? 0)(((s as any).temppain ?? 0)?.['tmp_0'] / 2, ((s as any).temppain ?? 0)?.['tmp_0']);
    (s as any).temppain['tmp_3'] = (((s as any).inSleep ?? 0)) ? (qspUntranslated(s, "rand(0, pain[temppain['loc']])", { location: "pain" })) : (0);
    // TODO-QSP: pain[$temppain['loc']] -= max(temppain['tmp_1'], temppain['tmp_2'] + temppain['tmp_3'])
  }
  (s as any).temppain['i'] = ((s as any).temppain['i'] ?? 0) + (1);
  if (((s as any).temppain ?? 0)?.['i'] < ((s as any).temppain ?? 0)?.['maxi']) {
    // TODO-QSP: jump 'pain_manage_loop'
  }
  (s as any).temppain['i'] = 0;
  (s as any).temppain['maxi'] = 0;
  // TODO-QSP: :statpainloop
  if (((s as any).pain ?? 0)[((s as any).temppain ?? 0)?.['i']] < 0) {
    // TODO-QSP: pain[temppain['i']] = 0
  }
  (s as any).temppain['i'] = ((s as any).temppain['i'] ?? 0) + (1);
  if (((s as any).temppain ?? 0)?.['i'] < ((s as any).temppain ?? 0)?.['maxi']) {
    // TODO-QSP: jump 'statpainloop'
  }
  qspCall(s, 'pain', 'calc');
  qspCall(s, 'pain', 'stat_changes');
  (s as any).pain['timer'] = ((s as any).totminut ?? 0) + 10;
  return;
  scene.build();
}

function enterStatChanges(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pain ?? 0)?.['total'] <= 0) {
    // TODO-QSP: exit
  }
  if (((s as any).pain ?? 0)?.['total'] <= 20) {
    if ((((s as any).pcs_health ?? 0) * 10 / 9)  >= ((s as any).healthmax ?? 0)) {
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) * 9 / 10;
    }
  } else {
    if ((((s as any).pcs_health ?? 0) * 5 / 4)    >= ((s as any).healthmax ?? 0)) {
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) * 8 / 10;
    }
    if (((s as any).pain ?? 0)?.['total'] <= 60) {
      if ((((s as any).pcs_health ?? 0) * 5 / 3)    >= ((s as any).healthmax ?? 0)) {
        (s as any).pcs_health = ((s as any).pcs_health ?? 0) * 7 / 10;
      }
    } else {
      if ((((s as any).pcs_health ?? 0) * 5 / 2)    >= ((s as any).healthmax ?? 0)) {
        (s as any).pcs_health = ((s as any).pcs_health ?? 0) * 5 / 10;
      }
      if ((((s as any).pcs_health ?? 0) * 5)      >= ((s as any).healthmax ?? 0)) {
        (s as any).pcs_health = ((s as any).pcs_health ?? 0) * 4 / 10;
      }
    }
    (s as any).temppain['mood_loss'] = ((s as any).max ?? 0)(1, ((s as any).pain ?? 0)?.['total'] / 10);
    if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === -1) {
      (s as any).temppain['mood_loss'] = (((s as any).temppain ?? 0)?.['mood_loss'] * 12) / 10;
    } else {
      (s as any).temppain['mood_loss'] = ((s as any).max ?? 0)(1, ((s as any).temppain ?? 0)?.['mood_loss'] * 8 / 10);
    }
    if (((s as any).pain ?? 0)?.['total'] <= 40) {
      if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === -1) {
        if (((s as any).pcs_mood ?? 0) > ((s as any).moodVars ?? 0)?.['disp'] - 10) {
          // TODO-QSP: gs 'mood', 'lower', temppain['mood_loss']
        }
      } else {
        if (((s as any).pcs_mood ?? 0) > ((s as any).moodVars ?? 0)?.['disp'] + 5) {
          // TODO-QSP: gs 'mood', 'lower', temppain['mood_loss']
        }
        if (((s as any).pcs_mood ?? 0) > ((s as any).moodVars ?? 0)?.['disp']) {
          // TODO-QSP: gs 'mood', 'lower', temppain['mood_loss']
        }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === -1) {
        // TODO-QSP: gs 'mood', 'lower', temppain['mood_loss']
      } else {
        if (((s as any).pcs_mood ?? 0) > 30) {
          // TODO-QSP: gs 'mood', 'lower', temppain['mood_loss']
        }
        if (((s as any).pcs_mood ?? 0) > 20) {
          // TODO-QSP: gs 'mood', 'lower', temppain['mood_loss']
        }
      }
      // TODO-QSP: gs 'mood', 'lower', temppain['mood_loss']
    }
    return;
  }
  if (((s as any).arrsize ?? 0)('ARGS') < 3) {
    // TODO-QSP: exit
  }
  (s as any).painCalc[0] = ((s as any).min ?? 0)(((s as any).ARGS ?? 0)[0] + ((s as any).ARGS ?? 0)[1] + ((s as any).ARGS ?? 0)[2] + ((s as any).ARGS ?? 0)[3], 9);
  if (((s as any).painCalc ?? 0)[0] <= 0) {
    // TODO-QSP: exit
  }
  (s as any).painCalc[1] = 0;
  if (((s as any).arrpos ?? 0)('ARGS', 'slap')      >= 0) {
    (s as any).painCalc[1] = 1;
  } else {
    (s as any).painCalc[1] = 1;
    if (((s as any).arrpos ?? 0)('ARGS', 'spank')    >= 0) {
      (s as any).painCalc[1] = 3;
      (s as any).spank = ((s as any).spank ?? 0) + (1);
    } else {
      (s as any).painCalc[1] = 3;
      if (((s as any).arrpos ?? 0)('ARGS', 'shock')    >= 0) {
        (s as any).painCalc[1] = 4;
      } else {
        (s as any).painCalc[1] = 4;
        if (((s as any).arrpos ?? 0)('ARGS', 'pull')    >= 0) {
          (s as any).painCalc[1] = 4;
        } else {
          (s as any).painCalc[1] = 4;
          if (((s as any).arrpos ?? 0)('ARGS', 'labor')    >= 0) {
            (s as any).painCalc[1] = 4;
          } else {
            (s as any).painCalc[1] = 5;
            if (((s as any).arrpos ?? 0)('ARGS', 'stretch')  >= 0) {
              (s as any).painCalc[1] = 6;
            } else {
              (s as any).painCalc[1] = 6;
              if (((s as any).arrpos ?? 0)('ARGS', 'burn')    >= 0) {
                (s as any).painCalc[1] = 7;
              } else {
                (s as any).painCalc[1] = 7;
                if (((s as any).arrpos ?? 0)('ARGS', 'hit')    >= 0) {
                  (s as any).painCalc[1] = 7;
                } else {
                  (s as any).painCalc[1] = 8;
                  if (((s as any).arrpos ?? 0)('ARGS', 'bite')    >= 0) {
                    (s as any).painCalc[1] = 8;
                  } else {
                    (s as any).painCalc[1] = 9;
                    if (((s as any).arrpos ?? 0)('ARGS', 'ache')    >= 0) {
                      (s as any).painCalc[1] = 9;
                    } else {
                      (s as any).painCalc[1] = 10;
                      if (((s as any).arrpos ?? 0)('ARGS', 'break')    >= 0) {
                        (s as any).painCalc[1] = 10;
                      } else {
                        (s as any).painCalc[1] = 10;
                        return;
                      }
                      (s as any).painCalc[2] = 0;
                      (s as any).temppain['i'] = 0;
                      (s as any).temppain['maxi'] = 0;
                      // TODO-QSP: :pain_else_loop
                      if (((s as any).ARGS ?? 0)[((s as any).temppain ?? 0)?.['i']] !== ''  &&  ((s as any).arrpos ?? 0)('painParts', ((s as any).ARGS ?? 0)[((s as any).temppain ?? 0)?.['i']]) >= 0) {
                        (s as any).temppain['part'] = qspUntranslated(s, "ARGS[temppain['i']]", { location: "pain" });
                        (s as any).painCalc[2] = ((s as any).painMod ?? 0)?.[((s as any).temppain ?? 0)?.['part']];
                      } else {
                        (s as any).temppain['i'] = ((s as any).temppain['i'] ?? 0) + (1);
                        if (((s as any).temppain ?? 0)?.['i'] < ((s as any).temppain ?? 0)?.['maxi']) {
                          // TODO-QSP: jump 'pain_else_loop'
                        }
                        return;
                      }
                      (s as any).temppain['curpain'] = (((s as any).painCalc ?? 0)[0] * ((s as any).painCalc ?? 0)[1] * ((s as any).painCalc ?? 0)[2]) / 10;
                      (s as any).temppain['prevpain'] = ((s as any).pain ?? 0)?.[((s as any).temppain ?? 0)?.['part']];
                      (s as any).lastpain = qspFunc(s, 'math', 'int_sqrt', ((s as any).temppain ?? 0)?.['prevpain'] * ((s as any).temppain ?? 0)?.['prevpain'] + ((s as any).temppain ?? 0)?.['curpain'] * ((s as any).temppain ?? 0)?.['curpain']);
                      if (((s as any).arrpos ?? 0)('ARGS', 'get') >= 0) {
                        (s as any).result = ((s as any).lastpain ?? 0);
                      } else {
                        // TODO-QSP: pain[$temppain['part']] = lastpain
                        if (((s as any).pain ?? 0)[((s as any).temppain ?? 0)?.['part']] > 100) {
                          // TODO-QSP: pain[$temppain['part']] = 100
                        }
                        (s as any).pain['timer'] = ((s as any).totminut ?? 0) + 30;
                        qspCall(s, 'pain', 'calc');
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
      enterCalc(s, scene);
      break;
  }
}

export const pain: LocationDef = {
  name: 'pain',
  region: 'other',
  enter: enter,
};
