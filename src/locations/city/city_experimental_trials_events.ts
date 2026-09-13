import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCheckForEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).experimentQW ?? 0)?.['trial_active'] !== ''  &&  ((s as any).experimentQW ?? 0)?.['trial_duration'] > 0  &&  ((s as any).daystart ?? 0) > ((s as any).experimentQW ?? 0)?.['event_day']) {
    // TODO-QSP: $sleep_events_priority[] = "gs 'city_experimental_trials_events', 'set_experimental_trials_event'"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetExperimentalTrialsEvent(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['city_experimental_trials_events', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterNewspaperAd(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Help advance medical research today</b></center>');
  scene.text('A St. Petersburg based medical clinic is offering significant payments to those who are willing to take part in their medical trials. We have interviewed various participants.');
  scene.text('"All I had to do was swallow a pill and report back a week later. Took me less than 10 minutes and haven\'t regretted it!"');
  scene.text('"The staff are very friendly and helpful. My hair grew 20 cm and I got paid for it! That\'s a steal if you ask me."');
  scene.text('[Redacted]');
  scene.text('"I\'ve taken part in multiple trials now, and I haven\'t had any complaints! Best decision of my life!"');
  scene.text('Signup for a medical trial today, and help build a brighter future!');
  if (((s as any).experimentQW ?? 0)?.['discovered'] < 1) {
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['discovered'] = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputerAd(s: GameState, scene: SceneBuilder): void {
  scene.text('You find an ad to participate in medical trials.');
  scene.text('<center><b>Help advance medical research today</b></center>');
  scene.text('"All I had to do was swallow a pill and report back a week later. Took me less than 10 minutes and haven\'t regretted it!"');
  scene.text('"The staff are very friendly and helpful. My hair grew 20 cm and I got paid for it! That\'s a steal if you ask me."');
  scene.text('[Redacted]');
  scene.text('"I\'ve taken part in multiple trials now, and I haven\'t had any complaints! Best decision of my life!"');
  scene.text('Signup for a medical trial today at the St. Petersburg clinic, and help build a brighter future!');
  if (((s as any).experimentQW ?? 0)?.['discovered'] < 1) {
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['discovered'] = 1;
  }
  return;
  // TODO-QSP: end
  if (((s as any).locArgs?.[0] ?? 0) !== '') {
    // TODO-QSP: exit
  }
  if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'pill_cyan') {
    if (((s as any).experimentQW ?? 0)?.['random_option'] === 0) {
      if ((Math.floor(Math.random() * 10) + 0) < 4) {
        if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 1;
      } else {
        if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 2;
      }
    }
    if (((s as any).experimentQW ?? 0)?.['random_option'] === 1) {
      if (!(s as any).bodyVars) (s as any).bodyVars = {}; (s as any).bodyVars['bust_other'] = ((s as any).bodyVars['bust_other'] ?? 0) - (2);
      scene.text('You notice that your breasts have shrunk! This must have been that experimental pill you took.');
    } else {
      if (!(s as any).bodyVars) (s as any).bodyVars = {}; (s as any).bodyVars['bust_other'] = ((s as any).bodyVars['bust_other'] ?? 0) + (2);
      scene.text('You notice that your breasts have grown! This must have been that experimental pill you took.');
    }
  } else {
    if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'pill_red') {
      if (((s as any).experimentQW ?? 0)?.['random_option'] === 0) {
        (s as any).temp_rand = Math.floor(Math.random() * 30) + 0;
        if (((s as any).temp_rand ?? 0) < 4) {
          if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 1;
        } else {
          if (((s as any).temp_rand ?? 0) < 10) {
            if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 2;
          } else {
            if (((s as any).temp_rand ?? 0) < 14) {
              if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 3;
            } else {
              if (((s as any).temp_rand ?? 0) < 20) {
                if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 4;
              } else {
                if (((s as any).temp_rand ?? 0) < 24) {
                  if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 5;
                } else {
                  if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 6;
                }
              }
            }
          }
        }
      }
      if (((s as any).experimentQW ?? 0)?.['random_option'] === 1) {
        if (((s as any).stren_lvl ?? 0) > 11) {
          (s as any).stren_exp = ((s as any).stren_exp ?? 0) - (2 * (((s as any).stren_xpnxt ?? 0) - ((s as any).stren_xpprv ?? 0)));
          (s as any).stren_mem = ((s as any).stren_mem ?? 0) - (2 * (((s as any).stren_xpnxt ?? 0) - ((s as any).stren_xpprv ?? 0)));
        }
        scene.text('You seem to have lost a lot of muscle mass and feel weaker. This must have been that experimental pill you took.');
      } else {
        if (((s as any).experimentQW ?? 0)?.['random_option'] === 2) {
          if (((s as any).stren_lvl ?? 0) < 99) {
            (s as any).stren_exp = ((s as any).stren_exp ?? 0) + (2 * (((s as any).stren_xpnxt ?? 0) - ((s as any).stren_xpprv ?? 0)));
          }
          scene.text('You seem to have gained a lot of muscle mass and feel stronger! This must have been that experimental pill you took.');
        } else {
          if (((s as any).experimentQW ?? 0)?.['random_option'] === 3) {
            if (((s as any).agil_lvl ?? 0) > 11) {
              (s as any).agil_exp = ((s as any).agil_exp ?? 0) - (2 * (((s as any).agil_xpnxt ?? 0) - ((s as any).agil_xpprv ?? 0)));
              (s as any).agil_mem = ((s as any).agil_mem ?? 0) - (2 * (((s as any).agil_xpnxt ?? 0) - ((s as any).agil_xpprv ?? 0)));
            }
            scene.text('Your agility has deminished and you feel slower. This must have been that experimental pill you took.');
          } else {
            if (((s as any).experimentQW ?? 0)?.['random_option'] === 4) {
              if (((s as any).agil_lvl ?? 0) < 99) {
                (s as any).agil_exp = ((s as any).agil_exp ?? 0) + (2 * (((s as any).agil_xpnxt ?? 0) - ((s as any).agil_xpprv ?? 0)));
              }
              scene.text('Your agility has increased and you feel faster! This must have been that experimental pill you took.');
            } else {
              if (((s as any).experimentQW ?? 0)?.['random_option'] === 5) {
                if (((s as any).vital_lvl ?? 0) > 11) {
                  (s as any).vital_exp = ((s as any).vital_exp ?? 0) - (2 * (((s as any).vital_xpnxt ?? 0) - ((s as any).vital_xpprv ?? 0)));
                  (s as any).vital_mem = ((s as any).vital_mem ?? 0) - (2 * (((s as any).vital_xpnxt ?? 0) - ((s as any).vital_xpprv ?? 0)));
                }
                scene.text('Your endurance has decreased! This must have been that experimental pill you took.');
              } else {
                if (((s as any).vital_lvl ?? 0) < 99) {
                  (s as any).vital_exp = ((s as any).vital_exp ?? 0) + (2 * (((s as any).vital_xpnxt ?? 0) - ((s as any).vital_xpprv ?? 0)));
                }
                scene.text('Your endurance has increased! This must have been that experimental pill you took.');
              }
            }
          }
        }
      }
    } else {
      if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'pill_blue') {
        if (((s as any).experimentQW ?? 0)?.['random_option'] === 0) {
          (s as any).temp_rand = Math.floor(Math.random() * 40) + 0;
          if (((s as any).temp_rand ?? 0) < 4) {
            if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 1;
          } else {
            if (((s as any).temp_rand ?? 0) < 10) {
              if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 2;
            } else {
              if (((s as any).temp_rand ?? 0) < 14) {
                if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 3;
              } else {
                if (((s as any).temp_rand ?? 0) < 20) {
                  if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 4;
                } else {
                  if (((s as any).temp_rand ?? 0) < 24) {
                    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 5;
                  } else {
                    if (((s as any).temp_rand ?? 0) < 30) {
                      if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 6;
                    } else {
                      if (((s as any).temp_rand ?? 0) < 34) {
                        if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 7;
                      } else {
                        if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 8;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (((s as any).experimentQW ?? 0)?.['random_option'] === 1) {
          if (((s as any).intel_lvl ?? 0) > 11) {
            (s as any).intel_exp = ((s as any).intel_exp ?? 0) - (2 * (((s as any).intel_xpnxt ?? 0) - ((s as any).intel_xpprv ?? 0)));
            (s as any).intel_mem = ((s as any).intel_mem ?? 0) - (2 * (((s as any).intel_xpnxt ?? 0) - ((s as any).intel_xpprv ?? 0)));
          }
          scene.text('Your intelligence has decreased and you feel dumber. This must have been that experimental pill you took.');
        } else {
          if (((s as any).experimentQW ?? 0)?.['random_option'] === 2) {
            if (((s as any).intel_lvl ?? 0) < 99) {
              (s as any).intel_exp = ((s as any).intel_exp ?? 0) + (2 * (((s as any).intel_xpnxt ?? 0) - ((s as any).intel_xpprv ?? 0)));
            }
            scene.text('Your intelligence has increased and you feel smarter! This must have been that experimental pill you took.');
          } else {
            if (((s as any).experimentQW ?? 0)?.['random_option'] === 3) {
              if (((s as any).react_lvl ?? 0) > 11) {
                (s as any).react_exp = ((s as any).react_exp ?? 0) - (2 * (((s as any).react_xpnxt ?? 0) - ((s as any).react_xpprv ?? 0)));
                (s as any).react_mem = ((s as any).react_mem ?? 0) - (2 * (((s as any).react_xpnxt ?? 0) - ((s as any).react_xpprv ?? 0)));
              }
              scene.text('Your reaction time has deminished and you feel slower. This must have been that experimental pill you took.');
            } else {
              if (((s as any).experimentQW ?? 0)?.['random_option'] === 4) {
                if (((s as any).react_lvl ?? 0) < 99) {
                  (s as any).react_exp = ((s as any).react_exp ?? 0) + (2 * (((s as any).react_xpnxt ?? 0) - ((s as any).react_xpprv ?? 0)));
                }
                scene.text('Your reaction time has quickened and you feel faster! This must have been that experimental pill you took.');
              } else {
                if (((s as any).experimentQW ?? 0)?.['random_option'] === 5) {
                  if (((s as any).chrsm_lvl ?? 0) > 11) {
                    (s as any).chrsm_exp = ((s as any).chrsm_exp ?? 0) - (2 * (((s as any).chrsm_xpnxt ?? 0) - ((s as any).chrsm_xpprv ?? 0)));
                    (s as any).chrsm_mem = ((s as any).chrsm_mem ?? 0) - (2 * (((s as any).chrsm_xpnxt ?? 0) - ((s as any).chrsm_xpprv ?? 0)));
                  }
                  scene.text('You feel less charismatic. This must have been that experimental pill you took.');
                } else {
                  if (((s as any).experimentQW ?? 0)?.['random_option'] === 6) {
                    if (((s as any).chrsm_lvl ?? 0) < 99) {
                      (s as any).chrsm_exp = ((s as any).chrsm_exp ?? 0) + (2 * (((s as any).chrsm_xpnxt ?? 0) - ((s as any).chrsm_xpprv ?? 0)));
                    }
                    scene.text('You feel more charismatic! This must have been that experimental pill you took.');
                  } else {
                    if (((s as any).experimentQW ?? 0)?.['random_option'] === 7) {
                      if (((s as any).prcptn_lvl ?? 0) > 11) {
                        (s as any).prcptn_exp = ((s as any).prcptn_exp ?? 0) - (2 * (((s as any).prcptn_xpnxt ?? 0) - ((s as any).prcptn_xpprv ?? 0)));
                        (s as any).prcptn_mem = ((s as any).prcptn_mem ?? 0) - (2 * (((s as any).prcptn_xpnxt ?? 0) - ((s as any).prcptn_xpprv ?? 0)));
                      }
                      scene.text('You feel less perceptive. This must have been that experimental pill you took.');
                    } else {
                      if (((s as any).prcptn_lvl ?? 0) < 99) {
                        (s as any).prcptn_exp = ((s as any).prcptn_exp ?? 0) + (2 * (((s as any).prcptn_xpnxt ?? 0) - ((s as any).prcptn_xpprv ?? 0)));
                      }
                      scene.text('You feel more perceptive! This must have been that experimental pill you took.');
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'pill_yellow') {
          if (((s as any).experimentQW ?? 0)?.['random_option'] === 0) {
            (s as any).temp_rand = Math.floor(Math.random() * 10) + 0;
            if (((s as any).temp_rand ?? 0) < 3) {
              if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 1;
            } else {
              if (((s as any).temp_rand ?? 0) < 4) {
                if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 2;
              } else {
                if (((s as any).temp_rand ?? 0) < 6) {
                  if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 3;
                } else {
                  if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 4;
                }
              }
            }
          }
          if (((s as any).experimentQW ?? 0)?.['random_option'] === 1) {
            (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (50);
            if (((s as any).pcs_skin ?? 0) < 200) {
              (s as any).pcs_skin = 200;
            }
            if (((s as any).pcs_tan ?? 0) > 0) {
              (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) - (2);
              if (((s as any).pcs_tan ?? 0) < 0) {
                (s as any).pcs_tan = 0;
              }
              scene.text('You skin tingles and itches. You are covered with a bright red rash and your tan has faded, damaging it and worsening your looks. This must have been that experimental pill you took.');
            } else {
              scene.text('You skin tingles and itches. You are covered with a bright red rash, damaging it and worsening your looks. This must have been that experimental pill you took.');
            }
          } else {
            if (((s as any).experimentQW ?? 0)?.['random_option'] === 2) {
              (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (50);
              if (((s as any).pcs_skin ?? 0) < 200) {
                (s as any).pcs_skin = 200;
              }
              if (((s as any).pcs_tan ?? 0) > 0) {
                scene.text('You skin tingles and itches. You are covered with a bright red rash and your tan has deepened, damaging it and worsening your looks. This must have been that experimental pill you took.');
              } else {
                scene.text('You skin tingles and itches. You are covered with a bright red rash and your skin has become tanned, damaging it and worsening your looks. This must have been that experimental pill you took.');
              }
              (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (2);
            } else {
              if (((s as any).experimentQW ?? 0)?.['random_option'] === 3) {
                (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (50);
                if (((s as any).pcs_skin ?? 0) > 900) {
                  (s as any).pcs_skin = 900;
                }
                if (((s as any).pcs_tan ?? 0) > 0) {
                  (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) - (2);
                  if (((s as any).pcs_tan ?? 0) < 0) {
                    (s as any).pcs_tan = 0;
                  }
                  scene.text('Your skin pleasantly tingles and your blemishes and tan have faded, increasing your looks. This must have been that experimental pill you took.');
                } else {
                  scene.text('Your skin pleasantly tingles and your blemishes have faded, increasing your looks. This must have been that experimental pill you took.');
                }
              } else {
                (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (50);
                if (((s as any).pcs_skin ?? 0) > 900) {
                  (s as any).pcs_skin = 900;
                }
                if (((s as any).pcs_tan ?? 0) > 0) {
                  scene.text('Your skin pleasantly tingles, your blemishes have faded and your tanned deepened, increasing your looks. This must have been that experimental pill you took.');
                } else {
                  scene.text('Your skin pleasantly tingles, your blemishes have faded and your skin has become tanned, increasing your looks. This must have been that experimental pill you took.');
                }
                (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (2);
              }
            }
          }
          qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
        } else {
          if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'pill_orange') {
            if (((s as any).experimentQW ?? 0)?.['random_option'] === 0) {
              if ((Math.floor(Math.random() * 10) + 0) < 5) {
                if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 1;
              } else {
                if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 2;
              }
            }
            if (((s as any).experimentQW ?? 0)?.['random_option'] === 1) {
              (s as any).butt_tr_exp = ((s as any).butt_tr_exp ?? 0) - (2 * (((s as any).butt_tr_xpnxt ?? 0) - ((s as any).butt_tr_xpprv ?? 0)));
              (s as any).butt_tr_mem = ((s as any).butt_tr_mem ?? 0) - (2 * (((s as any).butt_tr_xpnxt ?? 0) - ((s as any).butt_tr_xpprv ?? 0)));
              if (((s as any).butt_tr_exp ?? 0) < 0) {
                (s as any).butt_tr_exp = 0;
              }
              scene.text('You notice that your ass has shrunk! This must have been that experimental pill you took.');
            } else {
              (s as any).butt_tr_exp = ((s as any).butt_tr_exp ?? 0) + (2 * (((s as any).butt_tr_xpnxt ?? 0) - ((s as any).butt_tr_xpprv ?? 0)));
              scene.text('You notice that your ass has grown! This must have been that experimental pill you took.');
            }
          } else {
            if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'pill_violet') {
              if (((s as any).experimentQW ?? 0)?.['random_option'] === 0) {
                if ((Math.floor(Math.random() * 10) + 0) < 4) {
                  if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 1;
                } else {
                  if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 2;
                }
              }
              if (((s as any).experimentQW ?? 0)?.['random_option'] === 1) {
                (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) - (2 * (((s as any).inhib_xpnxt ?? 0) - ((s as any).inhib_xpprv ?? 0)));
                (s as any).inhib_mem = ((s as any).inhib_mem ?? 0) - (2 * (((s as any).inhib_xpnxt ?? 0) - ((s as any).inhib_xpprv ?? 0)));
                (s as any).inhib_lvl = ((s as any).inhib_lvl ?? 0) - (2);
                (s as any).inhib_flr = ((s as any).inhib_flr ?? 0) - (2);
                (s as any).inhib_lvlst = ((s as any).inhib_lvlst ?? 0) - (2);
                scene.text('Your inhibition has increased and you feel less outgoing and more ashamed. This must have been that experimental pill you took.');
              } else {
                (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2 * (((s as any).inhib_xpnxt ?? 0) - ((s as any).inhib_xpprv ?? 0)));
                scene.text('Your inhibition has lowered and you feel more outgoing and less ashamed. This must have been that experimental pill you took.');
              }
            } else {
              if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'pill_brown') {
                if (((s as any).experimentQW ?? 0)?.['random_option'] === 0) {
                  if ((Math.floor(Math.random() * 10) + 0) < 4  &&  ((s as any).min_arousal ?? 0) > 0) {
                    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 1;
                  } else {
                    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 2;
                  }
                }
                if (((s as any).experimentQW ?? 0)?.['random_option'] === 1) {
                  (s as any).min_arousal = ((s as any).min_arousal ?? 0) - (2);
                  if (((s as any).min_arousal ?? 0) < 0) {
                    (s as any).min_arousal = 0;
                  }
                  scene.text('You feel a calm wash over you that you haven\'t felt in a while. It seems that your arousal has reduced. This must have been that experimental pill you took.');
                } else {
                  if (((s as any).min_arousal ?? 0) < 50) {
                    (s as any).min_arousal = Math.min(((s as any).min_arousal ?? 0) + 5, 50);
                  }
                  scene.text('You feel your pussy moisten as a wave of arousal washes over you. This must have been that experimental pill you took.');
                }
              } else {
                if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'pill_purple') {
                  if (((s as any).experimentQW ?? 0)?.['random_option'] === 0) {
                    if (((s as any).clit_size ?? 0) <= 0) {
                      if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 1;
                    } else {
                      if (((s as any).clit_size ?? 0) >= 100) {
                        if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 2;
                      } else {
                        if ((Math.floor(Math.random() * 20) + 0) < 11) {
                          if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 1;
                        } else {
                          if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 2;
                        }
                      }
                    }
                  }
                  if (((s as any).experimentQW ?? 0)?.['random_option'] === 1) {
                    if ((!(Math.floor(Math.random() * 2) + 0))) {
                      scene.text('You feel a tingle in your clit that quickly vanishes. This must have been that experimental pill you took.');
                    } else {
                      (s as any).clit_size = ((s as any).clit_size ?? 0) + (1);
                      scene.text('You feel a tingle in your clit that lingers as it becomes engorged and permanently becomes larger. This must have been that experimental pill you took.');
                    }
                  } else {
                    if ((!(Math.floor(Math.random() * 2) + 0))) {
                      scene.text('You feel a tingle in your clit that quickly vanishes. This must have been that experimental pill you took.');
                    } else {
                      (s as any).clit_size = ((s as any).clit_size ?? 0) - (1);
                      scene.text('You feel a tingle in your clit that lingers as it shrinks and permanently becomes smaller. This must have been that experimental pill you took.');
                    }
                  }
                } else {
                  if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'pill_green') {
                    if (((s as any).trait_vars ?? 0)?.['drinking'] === 1) {
                      if (!(s as any).trait_vars) (s as any).trait_vars = {}; (s as any).trait_vars['drinking_exp'] = (-50);
                      qspCall(s, 'traits', 'level', 'drinking', (-1));
                      scene.text('You feel a sharp pain in your liver as the experimental treatment takes hold. It passes moments later, though you have no doubt that this will impede your ability to hold your liquor.');
                    } else {
                      if (!(s as any).trait_vars) (s as any).trait_vars = {}; (s as any).trait_vars['drinking_exp'] = ((s as any).trait_vars['drinking_exp'] ?? 0) + (100);
                      scene.text('You feel a soothing warmth in your liver as the experimental treatment takes hold. It lingers a while and you suspect that you can hold your liquor much better now.');
                    }
                  } else {
                    if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'pill_gray') {
                      if (((s as any).trait_vars ?? 0)?.['panty_preference'] < 3) {
                        if (!(s as any).trait_vars) (s as any).trait_vars = {}; (s as any).trait_vars['panty_preference_exp'] = qspUntranslated(s, "max(trait_vars['panty_preference_exp'], 40000)", { location: "city_experimental_trials_events" });
                        qspCall(s, 'traits', 'level', 'panty_preference', 3);
                        scene.text('Your skin feels extremely sensitive. This must have been that experimental pill you took.');
                      } else {
                        (s as any).temp_will_loss = Math.floor(Math.random() * 4) + 2;
                        (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (((s as any).temp_will_loss ?? 0));
                        (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) - (((s as any).temp_will_loss ?? 0));
                        (s as any).will_counter = 0;
                        scene.text('You feel your mental energy drain and you permanently lose some willpower.');
                      }
                    } else {
                      if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'pill_pink') {
                        if (qspFunc(s, 'archetypes', 'get_lvl', 'bimbo') < 3) {
                          qspCall(s, 'archetypes', 'gain', 'bimbo', 'medium', 'Experimental trials');
                          scene.text('A pink mist fills your mind and clouds your thoughts. You want to giggle and be bubbly. This must have been that experimental pill you took.');
                        } else {
                          (s as any).temp_will_loss = Math.floor(Math.random() * 4) + 2;
                          (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (((s as any).temp_will_loss ?? 0));
                          (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) - (((s as any).temp_will_loss ?? 0));
                          (s as any).will_counter = 0;
                          scene.text('You feel your mental energy drain and you permanently lose some willpower.');
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
  if ((String(((s as any).experimentQW ?? 0)?.['trial_active']).slice((1)-1, ((1)-1)+(4))) === 'pill') {
    qspCall(s, 'stat_sklattrib', '');
    qspCall(s, 'stat_sklattrib', '');
  }
  if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'breast_cream') {
    if (!(s as any).bodyVars) (s as any).bodyVars = {}; (s as any).bodyVars['bust_other'] = ((s as any).bodyVars['bust_other'] ?? 0) + (2);
    if (((s as any).experimentQW ?? 0)?.['trial_duration'] > 1) {
      scene.text('You notice that your breasts have grown! This must have been that experimental breast cream.');
    } else {
      if (((s as any).lactation ?? 0)?.['active'] <= 0) {
        qspCall(s, 'lact_lib', 'lact_on');
        if (!(s as any).lactation) (s as any).lactation = {}; (s as any).lactation['milkprod_type'] = 0;
        scene.text('Your breasts have grown and have a fullness to them. This must have been that experimental breast cream.');
      } else {
        scene.text('Your breasts have grown and have become fuller. This must have been that experimental breast cream.');
      }
      if (((s as any).therapistQW ?? 0)?.['breast_cream'] === 2) {
        if (!(s as any).therapistQW) (s as any).therapistQW = {}; (s as any).therapistQW['breast_cream'] = 3;
      }
    }
  }
  if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'hair_cream') {
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) + (Math.floor(Math.random() * 31) + 20);
    (s as any).defcurly = Math.floor(Math.random() * 2) + 0;
    (s as any).curly = ((s as any).defcurly ?? 0);
    if (((s as any).experimentQW ?? 0)?.['trial_duration'] > 1) {
      (s as any).pcs_haircol = Math.floor(Math.random() * 23) + 0;
    } else {
      (s as any).pcs_haircol = 11;
    }
    scene.text('You notice that your hair has lengthened and changed in color! This must have been that experimental hair extension shampoo.');
  }
  if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'aphrodisiac_pill') {
    if (((s as any).min_arousal ?? 0) < 70) {
      (s as any).min_arousal = Math.min(((s as any).min_arousal ?? 0) + 10, 70);
    }
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    if (((s as any).experimentQW ?? 0)?.['trial_duration'] > 1) {
      scene.text('You feel a warmth spreading from stomach moving towards your pussy, where it lingers for a few moments! This must have been that experimental aphrodisiac.');
    } else {
      if (((s as any).min_arousal ?? 0) < 70) {
        (s as any).min_arousal = Math.min(((s as any).min_arousal ?? 0) + 10, 70);
      }
      (s as any).pcs_horny = 0;
      if (((s as any).trait_vars ?? 0)?.['sensitivity'] <= -2) {
        scene.text('You feel a heat spreading from your stomach and moving towards your pussy. The heat pulses, but... nothing happens. The feeling fades without the release you expected. This must have been that experimental aphrodisiac — though it doesn\'t seem to have worked as advertised.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['sensitivity'] === -1) {
          qspCall(s, 'traits', 'level', 'sensitivity', 0);
          qspCall(s, 'orgasm', '');
          scene.text('You feel a heat spreading from your stomach and moving towards your pussy. The heat pulses and you find yourself in the grips of an intense orgasm! You feel like it won\'t be as difficult to orgasm from now on. This must have been that experimental aphrodisiac.');
        } else {
          if (((s as any).trait_vars ?? 0)?.['sensitivity'] === 1) {
            qspCall(s, 'orgasm', '');
            scene.text('You feel a heat spreading from your stomach and moving towards your pussy. The heat pulses and you find yourself in the grips of an intense orgasm! This must have been that experimental aphrodisiac.');
          } else {
            qspCall(s, 'traits', 'level', 'sensitivity', 1);
            qspCall(s, 'orgasm', '');
            scene.text('You feel a heat spreading from your stomach and moving towards your pussy. The heat pulses and you find yourself in the grips of an intense orgasm! You feel like it\'ll be easier to orgasm from now on. This must have been that experimental aphrodisiac.');
          }
        }
      }
    }
  }
  if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'butt_injection') {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    if (!(s as any).bodyVars) (s as any).bodyVars = {}; (s as any).bodyVars['butt_other'] = ((s as any).bodyVars['butt_other'] ?? 0) + (2);
    if (((s as any).experimentQW ?? 0)?.['trial_duration'] >= 4) {
      scene.text('You feel a warmth pulsing in your ass and can feel it growing in size. This must have been that experimental butt injection.');
    } else {
      if (((s as any).min_arousal ?? 0) < 50) {
        (s as any).min_arousal = Math.min(((s as any).min_arousal ?? 0) + 10, 50);
      }
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', (Math.floor(Math.random() * 6) + 5) + (3 - ((s as any).experimentQW ?? {})?.['trial_duration']));
      if (((s as any).pcs_ass ?? 0) > 30) {
        (s as any).pcs_ass = 30;
      }
      (s as any).ashrink = ((s as any).ashrink ?? 0) - (Math.floor(Math.random() * 3) + 2);
      if (((s as any).ashrink ?? 0) < 0) {
        (s as any).ashrink = 0;
      }
      (s as any).ashrinkdays = ((s as any).ashrinkdays ?? 0) + (Math.floor(Math.random() * 3) + 2);
      if (((s as any).ashrinkdays ?? 0) > 10) {
        (s as any).ashrinkdays = 10;
      }
      if (!(s as any).agape) (s as any).agape = {}; (s as any).agape[4] = ((s as any).agape[4] ?? 0) + ((Math.floor(Math.random() * 6) + 5) + (3 - ((s as any).experimentQW ?? {})?.['trial_duration']));
      if (((s as any).agape ?? 0)[4] > 60) {
        if (!(s as any).agape) (s as any).agape = {}; (s as any).agape[4] = 60;
      }
      scene.text('You feel a warmth pulsing in your ass and heat radiates from your puckered hole. You can feel your ass expanding and you crave anal. This must have been that experimental butt injection.');
    }
  }
  if (((s as any).experimentQW ?? 0)?.['trial_active'] === 'fertility_shot') {
    if (((s as any).experimentQW ?? 0)?.['trial_duration'] === 3) {
      if (((s as any).min_arousal ?? 0) < 10) {
        (s as any).min_arousal = 10;
      }
      if (((s as any).pcs_horny ?? 0) < 10) {
        (s as any).pcs_horny = 10;
      }
      scene.text('You feel a heat radiate from your womb, awakening your arousal. This must have been that experimental fertility shot.');
    } else {
      if (((s as any).experimentQW ?? 0)?.['trial_duration'] === 2) {
        if (((s as any).min_arousal ?? 0) < 20) {
          (s as any).min_arousal = 20;
        }
        if (((s as any).pcs_horny ?? 0) < 20) {
          (s as any).pcs_horny = 20;
        }
        scene.text('You feel a heat radiate from your womb, awakening your arousal. This must have been that experimental fertility shot.');
      } else {
        if (((s as any).min_arousal ?? 0) < 30) {
          (s as any).min_arousal = 30;
        }
        if (((s as any).pcs_horny ?? 0) < 30) {
          (s as any).pcs_horny = 30;
        }
        if (((s as any).trait_vars ?? 0)?.['fertility'] === 0) {
          qspCall(s, 'traits', 'level', 'fertility', 1);
        } else {
          if (((s as any).trait_vars ?? 0)?.['fertility'] === -1) {
            qspCall(s, 'traits', 'level', 'fertility', 0);
          } else {
            if (((s as any).trait_vars ?? 0)?.['fertility'] === -2) {
              qspCall(s, 'traits', 'level', 'fertility', (-1));
            }
          }
        }
        scene.text('You feel a heat radiate from your womb, awakening your arousal. This must have been that experimental fertility shot.');
      }
    }
  }
  if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = ((s as any).experimentQW['trial_duration'] ?? 0) - (1);
  if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['event_day'] = ((s as any).daystart ?? 0);
  if (((s as any).experimentQW ?? 0)?.['trial_duration'] <= 0) {
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = 0;
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['random_option'] = 0;
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'wakeup_events', 'event_end');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'check_for_events':
      enterCheckForEvents(s, scene);
      break;
    case 'set_experimental_trials_event':
      enterSetExperimentalTrialsEvent(s, scene);
      break;
    case 'newspaper_ad':
      enterNewspaperAd(s, scene);
      break;
    case 'computer_ad':
      enterComputerAd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_experimental_trials_events: LocationDef = {
  name: 'city_experimental_trials_events',
  title: '<center><b>Help advance medical research today</b></center>',
  region: 'city',
  enter: enter,
};
