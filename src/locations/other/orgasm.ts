import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).orgasm_buildup = Math.max(0, ((s as any).orgasm_buildup ?? 0) - 70);
  if (((s as any).trait_vars ?? 0)?.['sensitivity'] <= -2  &&  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 0) {
    if (((s as any).orgasm_or ?? 0) !== 'custom'  &&  ((s as any).locArgs?.[0] ?? 0) !== 'hypno'  &&  (Math.floor(Math.random() * 9) + 1) > 2) {
      (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
      if ((!((s as any).orgasm_rand ?? 0))) {
      } else {
        if (((s as any).orgasm_rand ?? 0) === 1) {
        } else {
          if (((s as any).orgasm_rand ?? 0) === 2) {
          }
        }
      }
      // TODO-QSP: jump 'textGoto'
    }
  }
  if (((s as any).orgasm_flag ?? 0)?.['masturbate'] === 1) {
    (s as any).orgasm_masturbate = ((s as any).orgasm_masturbate ?? 0) + (1);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) !== '') {
      if (((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
        (s as any).arousal_feed_orgasm_flag = 1;
      }
    }
  }
  if (((s as any).orgasm_flag ?? 0)?.['clit'] === 1) {
    (s as any).orgasm_clit = ((s as any).orgasm_clit ?? 0) + (1);
  } else {
    if (((s as any).orgasm_flag ?? 0)?.['vaginal'] === 1) {
      (s as any).orgasm_vaginal = ((s as any).orgasm_vaginal ?? 0) + (1);
    } else {
      if (((s as any).orgasm_flag ?? 0)?.['anal'] === 1) {
        (s as any).orgasm_anal = ((s as any).orgasm_anal ?? 0) + (1);
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'hypno') {
          (s as any).orgasm_hypno = ((s as any).orgasm_hypno ?? 0) + (1);
        }
      }
    }
  }
  (s as any).orgasm = ((s as any).orgasm ?? 0) + (1);
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['orgasm'] = 1;
  }
  if (Object.keys((s as any).stim ?? {}).length > 0) {
    (s as any).orgasm_i = 0;
    // TODO-QSP: :fetish_loop
    if (((s as any).temp_fetish_name ?? 0) !== 'creampie') {
      if (((s as any).stim ?? 0)?.[String((s as any).temp_fetish_name ?? 0)] === 1) {
        qspCall(s, 'fetish', 'add_pref', ((s as any).temp_fetish_name ?? 0), 2);
      }
    }
    (s as any).orgasm_i = ((s as any).orgasm_i ?? 0) + (1);
    if (((s as any).orgasm_i ?? 0) < Object.keys((s as any).fetish_name ?? {}).length) {
      // TODO-QSP: jump 'fetish_loop'
    }
  }
  if (((s as any).orgasm_or ?? 0) === 'custom'  ||  ((s as any).orgasm_txt ?? 0) !== '') {
  } else {
    if (((s as any).pcs_horny ?? 0) <= 10) {
      (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
      if ((!((s as any).orgasm_rand ?? 0))) {
      } else {
        if (((s as any).orgasm_rand ?? 0) === 1) {
        } else {
          if (((s as any).orgasm_rand ?? 0) === 2) {
          }
        }
      }
    } else {
      if (((s as any).pcs_horny ?? 0) <= 20) {
        (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (10);
        (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
        if ((!((s as any).orgasm_rand ?? 0))) {
        } else {
          if (((s as any).orgasm_rand ?? 0) === 1) {
          } else {
            if (((s as any).orgasm_rand ?? 0) === 2) {
            }
          }
        }
      } else {
        if (((s as any).pcs_horny ?? 0) <= 30) {
          (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (20);
          (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
          if ((!((s as any).orgasm_rand ?? 0))) {
          } else {
            if (((s as any).orgasm_rand ?? 0) === 1) {
            } else {
              if (((s as any).orgasm_rand ?? 0) === 2) {
              }
            }
          }
        } else {
          if (((s as any).pcs_horny ?? 0) <= 40) {
            (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (30);
            (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
            if ((!((s as any).orgasm_rand ?? 0))) {
            } else {
              if (((s as any).orgasm_rand ?? 0) === 1) {
              } else {
                if (((s as any).orgasm_rand ?? 0) === 2) {
                }
              }
            }
          } else {
            if (((s as any).pcs_horny ?? 0) <= 50) {
              (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (40);
              (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
              if ((!((s as any).orgasm_rand ?? 0))) {
              } else {
                if (((s as any).orgasm_rand ?? 0) === 1) {
                } else {
                  if (((s as any).orgasm_rand ?? 0) === 2) {
                  }
                }
              }
            } else {
              if (((s as any).pcs_horny ?? 0) <= 60) {
                (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (50);
                (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
                if ((!((s as any).orgasm_rand ?? 0))) {
                } else {
                  if (((s as any).orgasm_rand ?? 0) === 1) {
                  } else {
                    if (((s as any).orgasm_rand ?? 0) === 2) {
                    }
                  }
                }
              } else {
                if (((s as any).pcs_horny ?? 0) <= 70) {
                  (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (60);
                  if ((Math.floor(Math.random() * 100) + 0) < 1) {
                    (s as any).orgasmic = ((s as any).totminut ?? 0);
                  }
                  (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
                  if ((!((s as any).orgasm_rand ?? 0))) {
                  } else {
                    if (((s as any).orgasm_rand ?? 0) === 1) {
                    } else {
                      if (((s as any).orgasm_rand ?? 0) === 2) {
                      }
                    }
                  }
                } else {
                  if (((s as any).pcs_horny ?? 0) <= 80) {
                    (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (70);
                    if ((Math.floor(Math.random() * 100) + 0) < 5) {
                      (s as any).orgasmic = ((s as any).totminut ?? 0);
                    }
                    (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
                    if ((!((s as any).orgasm_rand ?? 0))) {
                    } else {
                      if (((s as any).orgasm_rand ?? 0) === 1) {
                      } else {
                        if (((s as any).orgasm_rand ?? 0) === 2) {
                        }
                      }
                    }
                  } else {
                    if (((s as any).pcs_horny ?? 0) <= 90) {
                      (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (80);
                      if ((Math.floor(Math.random() * 100) + 0) < 10) {
                        (s as any).orgasmic = ((s as any).totminut ?? 0);
                      }
                      (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
                      if ((!((s as any).orgasm_rand ?? 0))) {
                      } else {
                        if (((s as any).orgasm_rand ?? 0) === 1) {
                        } else {
                          if (((s as any).orgasm_rand ?? 0) === 2) {
                          }
                        }
                      }
                    } else {
                      (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (90);
                      if ((Math.floor(Math.random() * 100) + 0) < 25) {
                        (s as any).orgasmic = ((s as any).totminut ?? 0);
                      }
                      (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
                      if ((!((s as any).orgasm_rand ?? 0))) {
                      } else {
                        if (((s as any).orgasm_rand ?? 0) === 1) {
                        } else {
                          if (((s as any).orgasm_rand ?? 0) === 2) {
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
  if (((s as any).orgasmic ?? 0) > 0) {
    (s as any).orgasmic = ((s as any).totminut ?? 0);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
    if (((s as any).pcs_horny ?? 0) > 90) {
      (s as any).pcs_horny = 90;
    }
  } else {
    (s as any).pcs_horny = 0;
  }
  if (((s as any).orgasm_buildup ?? 0) < 0) {
    (s as any).orgasm_buildup = 0;
  }
  // TODO-QSP: :textGoto
  if (((s as any).arousalVars ?? 0)?.['text'] === 0) {
  }
  scene.build();
}

export const orgasm: LocationDef = {
  name: 'orgasm',
  region: 'other',
  enter: enter,
};
