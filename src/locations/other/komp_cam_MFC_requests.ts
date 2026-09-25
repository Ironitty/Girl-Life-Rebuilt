import { qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).camGirl ?? 0)?.['MFC_Viewers'] === 0) {
    return;
  }
  if (((s as any).totminut ?? 0) < ((s as any).camGirl ?? 0)?.['MFC_lastrequest'] + 15) {
    return;
  }
  if (((s as any).braworntype ?? 0) !== 'none'  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
    if (((s as any).pcs_apprnc ?? 0) < 100) {
      (s as any).clientask = (Math.floor(Math.random() * 81) + 20);
    } else {
      (s as any).clientask = (Math.floor(Math.random() * 71) + 30);
    }
  } else {
    if (((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      if (((s as any).pcs_apprnc ?? 0) < 100) {
        (s as any).clientask = (Math.floor(Math.random() * 66) + 35);
      } else {
        (s as any).clientask = (Math.floor(Math.random() * 56) + 45);
      }
    } else {
      if (((s as any).pcs_apprnc ?? 0) < 100) {
        (s as any).clientask = (Math.floor(Math.random() * 71) + 30);
      } else {
        (s as any).clientask = (Math.floor(Math.random() * 66) + 35);
      }
    }
  }
  if (((s as any).clientask ?? 0) >= 74  &&  ((s as any).clientask ?? 0) <= 76) {
    qspGoto(s, 'komp_cam_MFC_requests_oral', '');
  } else {
    if (((s as any).clientask ?? 0) >= 77  &&  ((s as any).clientask ?? 0) <= 79) {
      if (((s as any).pantyworntype ?? 0) === 'none') {
        qspGoto(s, 'komp_cam_MFC_requests_anal', '');
      }
    } else {
      if (((s as any).clientask ?? 0) === 80) {
        if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).pcs_ass ?? 0) >= 30  &&  ((s as any).camGirl ?? 0)?.['MFC_fame'] >= 50) {
          qspGoto(s, 'komp_cam_MFC_requests_three', 'show_asshole');
        }
      } else {
        if (((s as any).clientask ?? 0) >= 81  &&  ((s as any).clientask ?? 0) <= 90) {
          if (((s as any).clientask ?? 0) === 81) {
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).camGirl ?? 0)?.['MFC_fame'] >= 50  &&  ((s as any).pcs_ass ?? 0) > 25) {
              qspGoto(s, 'komp_cam_MFC_requests_two', '81');
            }
          } else {
            if (((s as any).clientask ?? 0) === 82) {
              if (((s as any).camGirl ?? 0)?.['MFC_fame'] >= 26  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).sub ?? 0) > 25  &&  ((s as any).pcs_vag ?? 0) > 10  &&  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
                qspGoto(s, 'komp_cam_MFC_requests_two', '82');
              }
            } else {
              if (((s as any).clientask ?? 0) === 83) {
                if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).pcs_vag ?? 0) > 20) {
                  qspGoto(s, 'komp_cam_MFC_requests_two', '83');
                }
              } else {
                if (((s as any).clientask ?? 0) === 84) {
                  if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).camGirl ?? 0)?.['MFC_fame'] >= 25  &&  ((s as any).pcs_vag ?? 0) + ((s as any).pcs_ass ?? 0) >= 30  &&  ((s as any).alko ?? 0) >= 4) {
                    qspGoto(s, 'komp_cam_MFC_requests_two', '84');
                  }
                } else {
                  if (((s as any).clientask ?? 0) === 85) {
                    if (((s as any).camGirl ?? 0)?.['MFC_fame'] >= 50  &&  ((s as any).pcs_vag ?? 0) + ((s as any).pcs_ass ?? 0) > 0  &&  ((s as any).alko ?? 0) >= 4) {
                      qspGoto(s, 'komp_cam_MFC_requests_two', '85');
                    }
                  } else {
                    if (((s as any).clientask ?? 0) === 86) {
                      if (((s as any).camGirl ?? 0)?.['MFC_fame'] >= 35  &&  ((s as any).pcs_vag ?? 0) >= 25  &&  ((s as any).alko ?? 0) >= 4) {
                        qspGoto(s, 'komp_cam_MFC_requests_two', '86');
                      }
                    } else {
                      if (((s as any).clientask ?? 0) === 87) {
                        if (((s as any).camGirl ?? 0)?.['MFC_fame'] >= 50  &&  ((s as any).pcs_vag ?? 0) >= 35) {
                          qspGoto(s, 'komp_cam_MFC_requests_two', '87');
                        }
                      } else {
                        if (((s as any).clientask ?? 0) === 88) {
                          if (((s as any).camGirl ?? 0)?.['MFC_fame'] < 50) {
                            qspGoto(s, 'komp_cam_MFC_requests_two', '88');
                          }
                        } else {
                          if (((s as any).clientask ?? 0) === 89) {
                            if (((s as any).camGirl ?? 0)?.['MFC_fame'] >= 15  &&  ((s as any).pcs_ass ?? 0) >= 15) {
                              qspGoto(s, 'komp_cam_MFC_requests_two', '89');
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
          if (((s as any).pantyworntype ?? 0) !== 'none') {
            qspGoto(s, 'komp_cam_MFC_requests_three', 'show_pussy');
          }
        } else {
          if (((s as any).clientask ?? 0) >= 91) {
            if (((s as any).clientask ?? 0) >= 90  &&  ((s as any).clientask ?? 0) <= 94) {
              if (((s as any).pantyworntype ?? 0) === 'none') {
                scene.text('One of the viewers asks: "Do you have a vibrator or dildo? I want you to put up a little show…"');
                qspGoto(s, 'komp_cam_MFC_requests_one', '');
              }
            } else {
              if (((s as any).clientask ?? 0) >= 95  &&  ((s as any).clientask ?? 0) <= 98) {
                if (((s as any).braworntype ?? 0) === 'none') {
                  qspGoto(s, 'komp_cam_MFC_requests_three', 'play_tits');
                }
              } else {
                if (((s as any).clientask ?? 0) === 99) {
                  if (((s as any).pantyworntype ?? 0) === 'none') {
                    qspGoto(s, 'komp_cam_MFC_requests_three', 'show_cunt');
                  }
                } else {
                  if (((s as any).clientask ?? 0) === 100) {
                    if (((s as any).pantyworntype ?? 0) === 'none') {
                      qspGoto(s, 'komp_cam_MFC_requests_three', 'show_vagina');
                    }
                  }
                }
              }
            }
            if (((s as any).braworntype ?? 0) !== 'none') {
              qspGoto(s, 'komp_cam_MFC_requests_three', 'show_tits');
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const komp_cam_MFC_requests: LocationDef = {
  name: 'komp_cam_MFC_requests',
  region: 'other',
  enter: enter,
};
