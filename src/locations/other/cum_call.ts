// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
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
          ((s as any).stat ?? {})['cum_anal_ml'] = (((s as any).stat ?? {})['cum_anal_ml'] ?? 0) + (((s as any).sexvolume ?? 0));
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
                                ((s as any).stat ?? {})['swallow'] = (((s as any).stat ?? {})['swallow'] ?? 0) + (1);
                                if (((s as any).locArgs?.[2] ?? 0) === 2) {
                                  ((s as any).stat ?? {})['swallow_unaware'] = (((s as any).stat ?? {})['swallow_unaware'] ?? 0) + (1);
                                }
                                ((s as any).stat ?? {})['cum_swallowed_ml'] = (((s as any).stat ?? {})['cum_swallowed_ml'] ?? 0) + (((s as any).sexvolume ?? 0));
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
                                          (s as any).spafinloc = 0;
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
  scene.build();
}

export const cum_call: LocationDef = {
  name: 'cum_call',
  region: 'other',
  enter: enter,
};
