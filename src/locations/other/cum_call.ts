import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPrecum(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: sexspecpot /= 40
  (s as any).sexvolume = 1;
  (s as any).spafinloc = 0;
  (s as any).cumprecheck = 1;
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('labia') : -1) >= 0) {
    (s as any).spafinloc = 1;
  } else {
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('pantyfront') : -1) >= 0) {
      (s as any).spafinloc = 2;
    } else {
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('anus') : -1) >= 0) {
        (s as any).spafinloc = 3;
      } else {
        if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('anal') : -1) >= 0) {
          (s as any).spafinloc = 3;
          ((s as any).stat = (s as any).stat ?? {})['cum_anal_ml'] = ((s as any).stat['cum_anal_ml'] ?? 0) + (((s as any).sexvolume ?? 0));
        } else {
          if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('butt') : -1) >= 0) {
            (s as any).spafinloc = 4;
          } else {
            if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('pantyrear') : -1) >= 0) {
              (s as any).spafinloc = 5;
            } else {
              if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('clothes_hidden') : -1) >= 0) {
                (s as any).spafinloc = 6;
              } else {
                if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('clothes') : -1) >= 0) {
                  (s as any).spafinloc = 7;
                } else {
                  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('back') : -1) >= 0) {
                    (s as any).spafinloc = 8;
                  } else {
                    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('legs') : -1) >= 0) {
                      (s as any).spafinloc = 9;
                    } else {
                      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('feet') : -1) >= 0) {
                        (s as any).spafinloc = 9;
                      } else {
                        if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('arms') : -1) >= 0) {
                          (s as any).spafinloc = 10;
                        } else {
                          if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('face') : -1) >= 0) {
                            (s as any).spafinloc = 11;
                          } else {
                            if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('mouth') : -1) >= 0) {
                              (s as any).spafinloc = 12;
                            } else {
                              if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('mouth_swallow') : -1) >= 0) {
                                (s as any).spafinloc = 12;
                                ((s as any).stat = (s as any).stat ?? {})['swallow'] = ((s as any).stat['swallow'] ?? 0) + (1);
                                if (Number((s as any).locArgs?.[2] ?? 0) === 2) {
                                  ((s as any).stat = (s as any).stat ?? {})['swallow_unaware'] = ((s as any).stat['swallow_unaware'] ?? 0) + (1);
                                }
                                ((s as any).stat = (s as any).stat ?? {})['cum_swallowed_ml'] = ((s as any).stat['cum_swallowed_ml'] ?? 0) + (((s as any).sexvolume ?? 0));
                              } else {
                                if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('hands') : -1) >= 0) {
                                  (s as any).spafinloc = 13;
                                } else {
                                  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('stomach') : -1) >= 0) {
                                    (s as any).spafinloc = 14;
                                  } else {
                                    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('breasts') : -1) >= 0) {
                                      (s as any).spafinloc = 15;
                                    } else {
                                      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('hair') : -1) >= 0) {
                                        (s as any).spafinloc = 16;
                                      } else {
                                        if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('internalcondom') : -1) >= 0) {
                                          (s as any).spafinloc = 17;
                                        } else {
                                          (s as any).spafinloc = Math.max(0, Math.min(((s as any).locArgs?.[0] ?? 0), 17));
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
  // TODO-QSP: end
  qspCall(s, 'cum_manage', '');
  if (((s as any).cumnpc ?? 0) !== '') {
    qspCall(s, 'npcStat', '', ((s as any).cumnpc ?? 0), 0, ((s as any).cumCon ?? 0));
  } else {
    if (((s as any).cumboy ?? 0) !== '') {
      qspCall(s, 'npcStat', '', ((s as any).cumboy ?? 0), 0, ((s as any).cumCon ?? 0));
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).cumboy = ((s as any).boy ?? 0);
  (s as any).cumnpc = ((s as any).npcID ?? 0);
  (s as any).cumCon = ((s as any).npcCondom ?? 0);
  if (Number((s as any).locArgs?.[1] ?? 0) === ''  ||  !isNaN((String(((s as any).locArgs?.[1] ?? 0)).slice((2)-1))) && (String(((s as any).locArgs?.[1] ?? 0)).slice((2)-1)) !== '' === 0) {
    if (Number((s as any).locArgs?.[2] ?? 0) !== 1) {
      qspCall(s, 'npcgeneratec', '', 0, ((s as any).locArgs?.[1] ?? 0), (Math.floor(Math.random() * 43) + 18), 0, 1);
      // TODO-QSP: $ARGS[1] = $npclastgenerated
    } else {
      (s as any).tempnpcid = qspUntranslated(s, "arrpos('npc_usedname', ARGS[1])", { location: "cum_call" });
      if (((s as any).tempnpcid ?? 0) > 0) {
        // TODO-QSP: $ARGS[1] = 'A<<tempnpcid>>'
        // TODO-QSP: dynamic text: <br><b><font color="teal">DEVELOPER WARNING: Legacy name cum_call needs upgrade ...
        scene.text(`<br><b><font color="teal">DEVELOPER WARNING: Legacy name cum_call needs upgrade from ${((s as any).locArgs?.[1] ?? '')} to A${((s as any).tempnpcid || '')}</font></b>`);
      } else {
        // TODO-QSP: $ARGS[1] = 'D1'
      }
    }
  }
  qspCall(s, 'npcStat', '', ((s as any).locArgs?.[1] ?? 0), 0, ((s as any).locArgs?.[3] ?? 0));
  (s as any).sexpartkno = ((((s as any).npc_love ?? 0)?.[String((s as any).npcID ?? 0)] > 0) ? (1) : (0));
  if (Number((s as any).locArgs?.[2] ?? 0) === 1) {
    (s as any).sexpartkno = 1;
  } else {
    if (Number((s as any).locArgs?.[2] ?? 0) === 2) {
      (s as any).sexunaware = 1;
    }
  }
  if (Number((s as any).locArgs?.[3] ?? 0) === '') {
    (s as any).sexcontra = Math.max(0, Math.min(((s as any).locArgs?.[3] ?? 0), 7), ((s as any).sexcontra ?? 0));
  } else {
    if (Number((s as any).locArgs?.[3] ?? 0) === 'none') {
      if (((s as any).pillcon2 ?? 0) > 1000) {
        (s as any).sexcontra = 2;
      } else {
        (s as any).sexcontra = 1;
      }
    } else {
      if (Number((s as any).locArgs?.[3] ?? 0) === 'sabotaged') {
        (s as any).sexcontra = 7;
      } else {
        if (Number((s as any).locArgs?.[3] ?? 0) === 'sabotaged_other') {
          (s as any).sexcontra = 6;
        } else {
          if (Number((s as any).locArgs?.[3] ?? 0) === 'slipped') {
            (s as any).sexcontra = 5;
          } else {
            if (Number((s as any).locArgs?.[3] ?? 0) === 'broken') {
              (s as any).sexcontra = 4;
            } else {
              (s as any).sexcontra = 3;
            }
          }
        }
      }
    }
  }
  (s as any).sexspecpot = ((Number((s as any).locArgs?.[4] ?? 0) > 0) ? (((s as any).locArgs?.[4] ?? 0)) : (((s as any).npcSpermPot ?? 0)));
  (s as any).sexvolume = ((Number((s as any).locArgs?.[5] ?? 0) > 0) ? (((s as any).locArgs?.[5] ?? 0)) : (Math.max(0, ((s as any).npcSpermVol ?? 0))));
  const arg = s.locArg;
  switch (arg) {
    case 'precum':
      enterPrecum(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const cum_call: LocationDef = {
  name: 'cum_call',
  region: 'other',
  enter: enter,
};
