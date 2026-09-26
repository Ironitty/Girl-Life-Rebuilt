import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).day ?? 0) === 1  &&  ((s as any).month ?? 0) === 12) {
    (s as any).temp = qspFunc(s, 'shortgs', 'dow', ((s as any).year ?? 0), 12, 31);
    if (((s as any).temp ?? 0) < 6) {
      (s as any).nyp_day = 31;
    } else {
      if (((s as any).temp ?? 0) === 6) {
        (s as any).nyp_day = 30;
      } else {
        (s as any).nyp_day = 29;
      }
    }
  }
  (s as any).ciklNewWeek = 0;
  if (((s as any).week ?? 0) === 1) {
    (s as any).ciklNewWeek = 1;
    if (((s as any).military ?? 0) === 1) {
      (s as any).military = 0;
    }
  }
  qspCall(s, 'yearstart', '');
  qspCall(s, 'fame', '');
  qspCall(s, 'telefon', 'DailyStatRefresh', ((s as any).ciklNewWeek ?? 0));
  if ((((s as any).film ?? 0) > 0  ||  ((s as any).job_bookings_active ?? 0)?.['city_pornstudio_actress'] > 0)  &&  ((s as any).pfilmNO ?? 0) === 0  &&  (!((s as any).pfilmSTOP ?? 0))) {
    qspCall(s, 'pornschedule', 'schedule');
  }
  qspCall(s, 'jobs', 'daily_check');
  qspCall(s, 'appointments', 'daily_check');
  qspCall(s, 'foto', 'cikl');
  if (((s as any).week ?? 0) === 7  &&  ((s as any).masseuse ?? 0)?.['schedule_update'] !== ((s as any).daystart ?? 0)) {
    qspCall(s, 'masseuse_schedule', 'schedule_reset');
  }
  if (((s as any).week ?? 0) > 5) {
    if (((s as any).workDisk ?? 0) === 4) {
      (s as any).workDisk = 1;
    } else {
      if (((s as any).workDisk ?? 0) === 3) {
        (s as any).workDiskAtkPlayer = 1;
      }
    }
  }
  if (((s as any).casting ?? 0) === 1) {
    (s as any).acting_string1 = (Math.floor(Math.random() * 190000000) + 10000000);
    (s as any).acting_string2 = (Math.floor(Math.random() * 190000000) + 10000000);
  }
  qspCall(s, 'dina', 'hypnoDaychange');
  (s as any).ringA = 0;
  (s as any).ringB = 0;
  (s as any).ringC = 0;
  (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
  if (((s as any).vidageday ?? 0) <= 0) {
    (s as any).vidageday = 360;
    (s as any).vidage = ((s as any).vidage ?? 0) + (1);
  }
  (s as any).age = ((s as any).year ?? 0) - ((((s as any).pcs_dob ?? 0) - (((s as any).pcs_dob ?? 0) % 10000)) / 10000);
  if (((((s as any).month ?? 0) * 100) + ((s as any).day ?? 0)) < ((s as any).pcs_dob ?? 0) % 10000) {
    (s as any).age = ((s as any).age ?? 0) - (1);
  }
  if (((s as any).day ?? 0) === ((s as any).birthday ?? 0)  &&  ((s as any).month ?? 0) === ((s as any).birthmonth ?? 0)  &&  ((s as any).model ?? 0)?.['age'] > 0) {
    ((s as any).model = (s as any).model ?? {})['age'] = ((s as any).model['age'] ?? 0) + (1);
  }
  if (((s as any).fingal ?? 0) > 0) {
    (s as any).fingal = ((s as any).fingal ?? 0) - (1);
  }
  if (((s as any).workDolgDay ?? 0) > 0) {
    (s as any).workDolgDay = ((s as any).workDolgDay ?? 0) - (1);
  }
  if (((s as any).QWdogreiqTimer ?? 0) > 0) {
    (s as any).QWdogreiqTimer = ((s as any).QWdogreiqTimer ?? 0) - (1);
  }
  qspCall(s, 'lover', 'cikl');
  if (((s as any).KFOnLineReaga ?? 0) > 0) {
    (s as any).KFOnLineReaga = ((s as any).KFOnLineReaga ?? 0) - (1);
  }
  if (((s as any).surgeryday ?? 0) > 0) {
    if (((s as any).daystart ?? 0) - 7 <= ((s as any).surgeryday ?? 0)) {
      (s as any).dailyhealthimprov = (((s as any).daystart ?? 0) - ((s as any).surgeryday ?? 0)) * 50;
      (s as any).pcs_health = ((s as any).dailyhealthimprov ?? 0);
      (s as any).recuperation = 1;
    } else {
      (s as any).surgeryday = undefined;
      (s as any).recuperation = undefined;
      (s as any).dailyhealthimprov = undefined;
    }
  }
  (s as any).streetevent_hour = (-2);
  (s as any).Clothingstock = (Math.floor(Math.random() * 120) + 0);
  ((s as any).ciklVars = (s as any).ciklVars ?? {})['i'] = 1;
  do {
    ((s as any).Clothingstock = (s as any).Clothingstock ?? {})[(((s as any).ciklVars ?? 0)?.['i'])] = (Math.floor(Math.random() * 101) + 0);
    ((s as any).ciklVars = (s as any).ciklVars ?? {})['i'] = ((s as any).ciklVars['i'] ?? 0) + (1);
    if (qspFunc(s, 'coats', 'is_strength_low')) {
      qspCall(s, 'coats', 'strip');
    }
    if (((s as any).abortionbirthdate ?? 0) !== 0  &&  ((s as any).daystart ?? 0) - ((s as any).abortionbirthdate ?? 0) > 24) {
      (s as any).abortionbirthdate = 0;
    }
    if (((s as any).pregbirthdate ?? 0) !== 0  &&  ((s as any).daystart ?? 0) - ((s as any).pregbirthdate ?? 0) > 73) {
      (s as any).pregbirthdate = 0;
    }
    (s as any).flash_heat_long = Math.max(0, ((s as any).flash_heat_long ?? 0) - 5);
    if (((s as any).exhibition_outdoors ?? 0) > 0) {
      if (((s as any).pcs_inhib ?? 0) > 90) {
        (s as any).exhibition_outdoors = ((s as any).exhibition_outdoors ?? 0) * 3;
      } else {
        if (((s as any).pcs_inhib ?? 0) > 75) {
          (s as any).exhibition_outdoors = ((s as any).exhibition_outdoors ?? 0) * 5 / 2;
        } else {
          if (((s as any).pcs_inhib ?? 0) > 60) {
            (s as any).exhibition_outdoors = ((s as any).exhibition_outdoors ?? 0) * 2;
          } else {
            if (((s as any).pcs_inhib ?? 0) > 30) {
              (s as any).exhibition_outdoors = ((s as any).exhibition_outdoors ?? 0) * 3 / 2;
            }
          }
        }
      }
      if (((s as any).exhibition_outdoors ?? 0) <= 5) {
        qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 4) + 3));
      } else {
        if (((s as any).exhibition_outdoors ?? 0) <= 10) {
          qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 5) + 5));
        } else {
          if (((s as any).exhibition_outdoors ?? 0) <= 15) {
            qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 6) + 7));
          } else {
            if (((s as any).exhibition_outdoors ?? 0) <= 20) {
              qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 7) + 9));
            } else {
              if (((s as any).exhibition_outdoors ?? 0) <= 25) {
                qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 9) + 12));
              } else {
                if (((s as any).exhibition_outdoors ?? 0) <= 30) {
                  qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 10) + 16));
                } else {
                  if (((s as any).exhibition_outdoors ?? 0) <= 35) {
                    qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 11) + 20));
                  } else {
                    if (((s as any).exhibition_outdoors ?? 0) <= 40) {
                      qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 16) + 25));
                    } else {
                      if (((s as any).exhibition_outdoors ?? 0) <= 50) {
                        qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 16) + 35));
                      } else {
                        if (((s as any).exhibition_outdoors ?? 0) <= 65) {
                          qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 26) + 50));
                        } else {
                          qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 31) + 70));
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
    (s as any).exhibition_outdoors = 0;
    if (((s as any).succubusflag ?? 0) === 1) {
      qspCall(s, 'succubus', 'cikl');
    }
    if (((s as any).defcurly ?? 0) === 0  &&  ((s as any).curly ?? 0) > 0) {
      (s as any).curly = ((s as any).curly ?? 0) - (1);
    }
    if (((s as any).defcurly ?? 0) === 1) {
      if (((s as any).straight ?? 0) > 0) {
        (s as any).straight = ((s as any).straight ?? 0) - (1);
      }
      if ((!((s as any).straight ?? 0))) {
        (s as any).curly = 2147483647;
      }
    }
    qspCall(s, 'sweat', 'add', 2);
    if (((s as any).pcs_tan ?? 0) > 0) {
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) - (1);
    }
    if (((s as any).prezikmsg ?? 0) === 2) {
      (s as any).prezikmsg = 3;
    }
    qspCall(s, 'fertility', 'daily_update');
    if (((s as any).cycle ?? 0) < 4  &&  (((s as any).calCycleOpts ?? 0)?.['tracked_cycle'] !== ((s as any).cycle ?? 0)  ||  ((s as any).calCycleOpts ?? 0)['phase_start_' + ((s as any).cycle ?? 0)] === 0)) {
      ((s as any).calCycleOpts = (s as any).calCycleOpts ?? {})['phase_start_' + ((s as any).cycle ?? 0)] = ((s as any).daystart ?? 0);
      ((s as any).calCycleOpts = (s as any).calCycleOpts ?? {})['tracked_cycle'] = ((s as any).cycle ?? 0);
    }
    qspCall(s, 'calendar', 'cycle_rebuild');
    if (((s as any).pcs_breath ?? 0) === 1) {
      (s as any).pcs_breath = 0;
    }
    if (((s as any).breastlastused ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).breastlastused = ((s as any).daystart ?? 0);
      (s as any).breastaccommodation = ((s as any).breastaccommodation ?? 0) - (1);
      if (((s as any).breastaccommodation ?? 0) < 0) {
        (s as any).breastaccommodation = 0;
      }
    }
    if (((s as any).cheatVars ?? 0)?.['hunger'] === 1  &&  ((s as any).dounspell ?? 0) === 1) {
      (s as any).fat = ((s as any).fat ?? 0) + (15);
    }
    if (((s as any).mood_trauma ?? 0) > 0) {
      (s as any).mood_trauma = ((s as any).mood_trauma ?? 0) - ((Math.floor(Math.random() * 2) + 0));
    }
    if (((s as any).SifacOnce ?? 0) === 1) {
      (s as any).Sifilis = ((s as any).Sifilis ?? 0) + (1);
    }
    if (((s as any).GerpesOnce ?? 0) === 1) {
      (s as any).Gerpes = ((s as any).Gerpes ?? 0) + (1);
    }
    if (((s as any).TriperOnce ?? 0) === 1) {
      if (((s as any).Triper ?? 0) > 0) {
        (s as any).Triper = ((s as any).Triper ?? 0) + (1);
      }
      if (((s as any).TriperOral ?? 0) > 0) {
        (s as any).TriperOral = ((s as any).TriperOral ?? 0) + (1);
      }
      if (((s as any).TriperOral ?? 0) > 14  &&  (!((s as any).TriperNapr ?? 0))) {
        if ((Math.floor(Math.random() * (100 - ((s as any).TriperOral ?? 0) + 1)) + (((s as any).TriperOral ?? 0))) > 80) {
          (s as any).TriperOral = 0;
          if ((!((s as any).Triper ?? 0))) {
            (s as any).TriperOnce = 0;
          }
          (s as any).TriperOralSigns = 0;
        }
      }
    }
    if (((s as any).KandidozOnce ?? 0) === 1) {
      (s as any).Kandidoz = ((s as any).Kandidoz ?? 0) + (1);
    }
    (s as any).Venera = 0;
    if (((s as any).SifacOnce ?? 0) === 1) {
      (s as any).Venera = ((s as any).Venera ?? 0) + (1);
    }
    if (((s as any).GerpesOnce ?? 0) === 1) {
      (s as any).Venera = ((s as any).Venera ?? 0) + (1);
    }
    if (((s as any).TriperOnce ?? 0) === 1) {
      (s as any).Venera = ((s as any).Venera ?? 0) + (1);
    }
    if ((!((s as any).ashrinkdays ?? 0))) {
      (s as any).ashrinkdays = 6;
    }
    if ((!((s as any).vshrinkdays ?? 0))) {
      (s as any).vshrinkdays = 6;
    }
    if (((s as any).pcs_ass ?? 0) > 1  &&  ((s as any).ashrink ?? 0) > 0  &&  (!((s as any).analPlugIn ?? 0))) {
      if (((s as any).daystart ?? 0) % ((s as any).ashrinkdays ?? 0) === 0) {
        (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) - (((s as any).ashrink ?? 0));
      }
      if (((s as any).pcs_ass ?? 0) < 0) {
        (s as any).pcs_ass = 0;
      }
    }
    if (((s as any).pcs_vag ?? 0) > 25  &&  ((s as any).vshrink ?? 0) > 0) {
      if (((s as any).daystart ?? 0) % ((s as any).vshrinkdays ?? 0) === 0) {
        (s as any).pcs_vag = ((s as any).pcs_vag ?? 0) - (((s as any).vshrink ?? 0));
      }
      if (((s as any).pcs_vag ?? 0) < 20) {
        (s as any).pcs_vag = 20;
      }
    }
    (s as any).lipkoef = ((s as any).lipkoef ?? 0) - ((Math.floor(Math.random() * 2) + 0));
    if (((s as any).lipkoef ?? 0) <= 0) {
      (s as any).lipkoef = 0;
    }
    if (((s as any).isprok ?? 0) === 1  ||  ((s as any).isprokp ?? 0) === 1) {
      (s as any).isprok_lastday = 1;
    } else {
      (s as any).isprok_lastday = 0;
    }
    if (((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).isprok ?? 0) === 1) {
      (s as any).isprok = 0;
      scene.text('You threw away your used tampon.');
    }
    if (((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).isprokp ?? 0) === 1) {
      (s as any).isprokp = 0;
      scene.text('You threw away your used sanitary pad.');
    }
    if (((s as any).lactation ?? 0)?.['nipgrowth'] > 0) {
      (s as any).tmp = (Math.floor(Math.random() * 3) + 0);
      (s as any).pcs_nips = ((s as any).pcs_nips ?? 0) - (((s as any).tmp ?? 0));
      ((s as any).lactation = (s as any).lactation ?? {})['nipgrowth'] = ((s as any).lactation['nipgrowth'] ?? 0) - (((s as any).tmp ?? 0));
      (s as any).tmp = undefined;
    } else {
      if (((s as any).lactation ?? 0)?.['nipgrowth'] < 0) {
        ((s as any).lactation = (s as any).lactation ?? {})['nipgrowth'] = 0;
      }
    }
    if (((s as any).preg ?? 0) === 1) {
      (s as any).pregtime = ((s as any).pregChem ?? 0) / 24;
      if ((!((s as any).pregtimes ?? 0))) {
        (s as any).pregtimes = 1;
      }
    } else {
      if (((s as any).preg ?? 0) === 2  &&  ((s as any).totminut ?? 0) > ((s as any).pregminut ?? 0)) {
        qspCall(s, 'gameover', 'check', 4);
        alert('<font color=red><b>You should die for giving birth unprepared, but Cheat Mode keeps you Alive.</b></font>');
        (s as any).pregminut = ((s as any).totminut ?? 0) + 1440;
      } else {
        if ((!((s as any).preg ?? 0))) {
          qspCall(s, 'array', 'remove_element', 'npc_pregtalk', 'A14');
          qspCall(s, 'array', 'remove_element', 'npc_pregtalk', 'A16');
          qspCall(s, 'array', 'remove_element', 'npc_pregtalk', 'A23');
          qspCall(s, 'array', 'remove_element', 'npc_pregtalk', 'A28');
          qspCall(s, 'array', 'remove_element', 'npc_pregtalk', 'A29');
          qspCall(s, 'array', 'remove_element', 'npc_pregtalk', 'A33');
          qspCall(s, 'array', 'remove_element', 'npc_pregtalk', 'A34');
          qspCall(s, 'array', 'remove_element', 'npc_pregtalk', 'A69');
          qspCall(s, 'array', 'remove_element', 'npc_pregtalk', 'A131');
          (s as any).pcs_pregtalk = undefined;
          (s as any).pregTalk = undefined;
          (s as any).pregtime = undefined;
          (s as any).knowpreg = undefined;
          (s as any).denypreg = undefined;
          (s as any).wombthfath = undefined;
        }
      }
    }
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
      if (((s as any).pcs_horny ?? 0) < 100) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).pcs_vag ?? 0));
      }
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        (s as any).razeba = 0;
        if (((s as any).pcs_horny ?? 0) > 0  &&  ((s as any).pcs_horny ?? 0) <= 50) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
        }
        if (((s as any).pcs_horny ?? 0) > 50) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (25);
        }
      } else {
        if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
          if ((!((s as any).pregtimes ?? 0))) {
            if (((s as any).age ?? 0) < 18) {
              (s as any).razeba = 1;
              if (((s as any).pcs_horny ?? 0) > 0  &&  ((s as any).pcs_horny ?? 0) <= 50) {
                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (5);
              }
              if (((s as any).pcs_horny ?? 0) > 50  &&  ((s as any).pcs_horny ?? 0) < 80) {
                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
              }
              if (((s as any).pcs_horny ?? 0) >= 80) {
                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
              }
            } else {
              if (((s as any).age ?? 0) >= 18  &&  ((s as any).age ?? 0) < 21) {
                (s as any).razeba = 2;
                if (((s as any).pcs_horny ?? 0) > 0  &&  ((s as any).pcs_horny ?? 0) <= 50) {
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (1);
                }
                if (((s as any).pcs_horny ?? 0) > 50  &&  ((s as any).pcs_horny ?? 0) < 80) {
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (5);
                }
                if (((s as any).pcs_horny ?? 0) >= 80) {
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
                }
              } else {
                if (((s as any).age ?? 0) >= 21  &&  ((s as any).age ?? 0) < 25) {
                  (s as any).razeba = 3;
                  if (((s as any).pcs_horny ?? 0) > 0  &&  ((s as any).pcs_horny ?? 0) <= 50) {
                    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
                  }
                  if (((s as any).pcs_horny ?? 0) > 50  &&  ((s as any).pcs_horny ?? 0) < 80) {
                    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (1);
                  }
                  if (((s as any).pcs_horny ?? 0) >= 80) {
                    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (5);
                  }
                } else {
                  if (((s as any).age ?? 0) >= 25  &&  ((s as any).age ?? 0) < 30) {
                    (s as any).razeba = 4;
                    if (((s as any).pcs_horny ?? 0) > 0  &&  ((s as any).pcs_horny ?? 0) <= 50) {
                      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                    }
                    if (((s as any).pcs_horny ?? 0) > 50  &&  ((s as any).pcs_horny ?? 0) < 80) {
                      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
                    }
                    if (((s as any).pcs_horny ?? 0) >= 80) {
                      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (5);
                    }
                  } else {
                    if (((s as any).age ?? 0) >= 30) {
                      (s as any).razeba = 5;
                      if (((s as any).pcs_horny ?? 0) > 0  &&  ((s as any).pcs_horny ?? 0) <= 50) {
                        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
                      }
                      if (((s as any).pcs_horny ?? 0) > 50  &&  ((s as any).pcs_horny ?? 0) < 80) {
                        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                      }
                      if (((s as any).pcs_horny ?? 0) >= 80) {
                        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (((s as any).pregtimes ?? 0) > 0) {
              if ((!((s as any).preg ?? 0))) {
                (s as any).razeba = 5;
                if (((s as any).pcs_horny ?? 0) > 0  &&  ((s as any).pcs_horny ?? 0) <= 50) {
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
                }
                if (((s as any).pcs_horny ?? 0) > 50  &&  ((s as any).pcs_horny ?? 0) < 80) {
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                }
                if (((s as any).pcs_horny ?? 0) >= 80) {
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
                }
              } else {
                if (((s as any).preg ?? 0) > 0) {
                  (s as any).razeba = 6;
                  if (((s as any).pcs_horny ?? 0) < 100) {
                    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).pregChem ?? 0) / 240);
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).pcs_horny ?? 0) < 0) {
      (s as any).pcs_horny = 0;
    }
    if (((s as any).NatbelQW ?? 0)?.['seethroughwearing'] === 1) {
      ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['seethroughwearing'] = 0;
    }
    if (((s as any).dimaFilm ?? 0) === 1  &&  (!((s as any).dimaRudeBlock ?? 0))) {
      (s as any).nodimkaK = ((s as any).nodimkaK ?? 0) + (1);
      (s as any).DimkaWarnedToday = 0;
    }
    qspCall(s, 'tattoo_management', 'count');
    qspCall(s, 'piercing_management', 'count');
    qspCall(s, 'fame', 'deg');
    if (((s as any).pregChem ?? 0) > 240) {
      (s as any).fat = ((s as any).fat ?? 0) + (1);
    }
    (s as any).prezikProver = ((s as any).prezikProver ?? 0) + (1);
    if (((s as any).pirs_pain_ton ?? 0) > 0) {
      (s as any).pirs_pain_ton = ((s as any).pirs_pain_ton ?? 0) - (1);
    }
    if (((s as any).shorthair ?? 0) === 1) {
      (s as any).shorthairday = ((s as any).shorthairday ?? 0) + (1);
      if (((s as any).shorthairday ?? 0) >= 45) {
        (s as any).shorthairday = 0;
        (s as any).shorthair = 0;
      }
    }
    (s as any).npc_rel_daily = undefined;
    qspCall(s, 'npc_reactions', 'cikl');
    qspCall(s, 'nerd_game_night', 'cikl');
    qspCall(s, 'Zvereva_events', 'cikl');
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).grupTipe ?? 0) === 4  &&  ((s as any).AlbinaQW ?? 0)?.['Friends'] !== 2  &&  ((s as any).npc_rel ?? 0)?.['A23'] > 20) {
      qspCall(s, 'npc_relationship', 'set', 'A23', 20);
    }
    if (((s as any).kotovLoveQW ?? 0) === -1) {
      qspCall(s, 'npc_relationship', 'set', 'A9', 0);
    }
    qspCall(s, 'katja_procedural', 'cikl');
    if (((s as any).npc_rel ?? 0)?.['A69'] > 60  &&  (!(Math.floor(Math.random() * 4) + 0))) {
      qspCall(s, 'npc_relationship', 'modify', 'A69', (-1));
    }
    qspCall(s, 'soniadisco', 'cikl');
    qspCall(s, 'soniachat', 'cikl');
    (s as any).dmishaevent = 0;
    if (((s as any).Gspravka ?? 0) <= 0  &&  ((s as any).GspravkaT ?? 0) === 1) {
      (s as any).GspravkaT = 0;
      (s as any).Gspravka = 0;
    }
    if (((s as any).GspravkaT ?? 0) === 1) {
      (s as any).Gspravka = ((s as any).Gspravka ?? 0) - (1);
    }
    if (((s as any).BurgerQW ?? 0)?.['IlyQW'] === 2  &&  ((s as any).BurgerQW ?? 0)?.['IlyQWPoliceDayCount'] > 0  &&  ((s as any).BurgerQW ?? 0)?.['IlyQWPoliceDayCount'] < 30) {
      ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['IlyQWPoliceDayCount'] = ((s as any).BurgerQW['IlyQWPoliceDayCount'] ?? 0) + (1);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['IlyQW'] === 2  &&  ((s as any).BurgerQW ?? 0)?.['IlyQWPoliceDayCount'] === 30) {
        ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['IlyQW'] = 3;
      }
    }
    qspCall(s, 'drugs', 'cikl');
    (s as any).inhib_flr = ((s as any).inhib_lvl ?? 0);
    qspCall(s, 'stat_sklattrib', 'daycall');
    qspCall(s, 'body', 'DailyUpdate');
    (s as any).showerbaths_taken_today = undefined;
    qspCall(s, 'schedule', 'cikl');
    (s as any).borsexkol = 0;
    (s as any).givisexday = 0;
    if (((s as any).shantsr ?? 0) > 0) {
      (s as any).pay = ((s as any).shantsr ?? 0) * 5000;
      qspCall(s, 'money', 'earn', ((s as any).pay ?? 0));
      (s as any).shantsr = 0;
    }
    while (true) {
      if (((s as any).shantbog ?? 0) > 0) {
        if ((Math.floor(Math.random() * 11) + 0) < 3) {
          qspCall(s, 'money', 'earn', 30000);
        } else {
          (s as any).shantpopala = ((s as any).shantpopala ?? 0) + (1);
        }
        (s as any).shantbog = ((s as any).shantbog ?? 0) - (1);
        break;
      }
      (s as any).petersexday = 0;
      if (((s as any).cheatVars ?? 0)?.['enema'] === 1) {
        (s as any).klismaday = ((s as any).daystart ?? 0);
        (s as any).klismaday1 = 1;
      } else {
        (s as any).klismaday1 = 0;
      }
      if (((s as any).uglyduck_flag ?? 0) !== 1  &&  ((s as any).pcs_hotcat ?? 0) >= 5) {
        (s as any).uglyduck_flag = 1;
        qspCall(s, 'npc_relationship', 'socialgroup_setting_boys', 10, 10, 10, 10, 0, 0);
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) + (100);
        ((s as any).old_grupvalue = (s as any).old_grupvalue ?? {})[1] = ((s as any).old_grupvalue[1] ?? 0) + (100);
      }
      ((s as any).ciklVars = (s as any).ciklVars ?? {})['i'] = 1;
      do {
        ((s as any).ciklVars = (s as any).ciklVars ?? {})['npcID'] = 'A' + (((s as any).ciklVars ?? 0)?.['i']);
        if (((s as any).npc_rel ?? 0)[((s as any).ciklVars ?? 0)?.['npcID']] > 100) {
          ((s as any).npc_rel = (s as any).npc_rel ?? {})[(((s as any).ciklVars ?? 0)?.['npcID'])] = 100;
        }
        ((s as any).ciklVars = (s as any).ciklVars ?? {})['i'] = ((s as any).ciklVars['i'] ?? 0) + (1);
        qspCall(s, 'bank', 'cikl');
        (s as any).holyday = undefined;
        (s as any).kanikuli = undefined;
        (s as any).pcs_ate = undefined;
        (s as any).pcs_drank = undefined;
        if (((s as any).suspended ?? 0)?.['day'] === ((s as any).daystart ?? 0)) {
          ((s as any).suspended = (s as any).suspended ?? {})['on'] = 0;
        }
        if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
          (s as any).kanikuli = 7;
        } else {
          if (((s as any).week ?? 0) === 1  &&  ((s as any).sisboyparty ?? 0) !== 2) {
            if (((s as any).sisterQW ?? 0)?.['party'] === -1) {
              ((s as any).sisterQW = (s as any).sisterQW ?? {})['party'] = 0;
            }
            if (((s as any).sisboypartyQW ?? 0) >= 2  &&  ((s as any).sisboyparty ?? 0) > 0) {
              (s as any).sisboyparty_day = ((s as any).daystart ?? 0) + (Math.floor(Math.random() * 3) + 3);
            }
          }
          if (((s as any).sisboyparty ?? 0) === 2  &&  ((s as any).sisboyparty_day ?? 0) + 1 < ((s as any).daystart ?? 0)) {
            (s as any).sisboyparty = 3;
          }
          if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
            if (((s as any).month ?? 0) === 12  &&  ((s as any).day ?? 0) > 25) {
              if (((s as any).day ?? 0) < 31) {
                (s as any).holyday = '<b>Winter Break in ' + 32-((s as any).day ?? 0) + ' days.</b>';
              } else {
                (s as any).holyday = '<b>Winter Break starts tomorrow.</b>';
              }
            } else {
              if (((s as any).month ?? 0) === 1  &&  ((s as any).day ?? 0) <= 15) {
                (s as any).kanikuli = 2;
                if (((s as any).day ?? 0) < 13) {
                  (s as any).holyday = '<b>Winter Break.</b>';
                } else {
                  if (((s as any).day ?? 0) < 15) {
                    (s as any).holyday = '<b>Winter Break ends in ' + 16-((s as any).day ?? 0) + ' days.</b>';
                  } else {
                    (s as any).holyday = '<b>Last day of Winter Break.</b>';
                  }
                }
              } else {
                if (((s as any).month ?? 0) === 3  &&  ((s as any).day ?? 0) > 13) {
                  if (((s as any).day ?? 0) < 19) {
                    (s as any).holyday = '<b>Spring Break starts in ' + 20-((s as any).day ?? 0) + ' days.</b>';
                  } else {
                    if (((s as any).day ?? 0) === 19) {
                      (s as any).holyday = '<b>Spring Break starts tomorrow.</b>';
                    } else {
                      if (((s as any).day ?? 0) >= 20  &&  ((s as any).day ?? 0) <= 26) {
                        (s as any).kanikuli = 3;
                        if (((s as any).day ?? 0) < 24) {
                          (s as any).holyday = '<b>Spring Break.</b>';
                        } else {
                          if (((s as any).day ?? 0) < 26) {
                            (s as any).holyday = '<b>Spring Break ends in ' + 27-((s as any).day ?? 0) + ' days.</b>';
                          } else {
                            (s as any).holyday = '<b>Last day of Spring Break.</b>';
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (((s as any).month ?? 0) === 5) {
                    if (((s as any).year ?? 0) === 2017) {
                      if (((s as any).day ?? 0) === 26) {
                        (s as any).kanikuli = 6;
                        ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['school_diploma'] = (-1);
                        (s as any).lernHome = 0;
                        (s as any).holyday = '<b>Your graduation is today. Be there by ' + qspFunc(s, 'time', 'get_time_string', 8, 0) + '.</b>';
                      } else {
                        if (((s as any).day ?? 0) === 25) {
                          (s as any).holyday = '<b>Your graduation is tomorrow. Be there by ' + qspFunc(s, 'time', 'get_time_string', 8, 0) + '.</b>';
                        } else {
                          if (((s as any).day ?? 0) >= 19  &&  ((s as any).day ?? 0) < 25) {
                            (s as any).holyday = '<b>Your graduation is in ' + 26-((s as any).day ?? 0) + ' days.</b>';
                          }
                        }
                      }
                    } else {
                      if (((s as any).day ?? 0) >= 25) {
                        if (((s as any).day ?? 0) === 31) {
                          (s as any).holyday = '<b>Summer Break starts tomorrow.</b>';
                        } else {
                          (s as any).holyday = '<b>Summer Break starts in ' + 32-((s as any).day ?? 0) + ' days.</b>';
                        }
                      }
                    }
                  } else {
                    if (((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7  ||  ((s as any).month ?? 0) === 8) {
                      (s as any).kanikuli = 4;
                      if (((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) >= 25) {
                        if (((s as any).day ?? 0) === 31) {
                          (s as any).holyday = '<b>Last day of Summer Break.</b>';
                        } else {
                          (s as any).holyday = '<b>Summer Break ends in ' + 32-((s as any).day ?? 0) + ' days.</b>';
                        }
                      } else {
                        (s as any).holyday = '<b>Summer Break.</b>';
                      }
                    } else {
                      if (((s as any).month ?? 0) === 10  &&  ((s as any).day ?? 0) >= 29) {
                        (s as any).holyday = '<b>Autumn Break starts in ' + 35-((s as any).day ?? 0) + ' days.</b>';
                      } else {
                        if (((s as any).month ?? 0) === 11) {
                          if (((s as any).day ?? 0) < 3) {
                            (s as any).holyday = '<b>Autumn Break starts in ' + 4-((s as any).day ?? 0) + ' days.</b>';
                          } else {
                            if (((s as any).day ?? 0) === 3) {
                              (s as any).holyday = '<b>Autumn Break starts tomorrow.</b>';
                            } else {
                              if (((s as any).day ?? 0) < 6) {
                                (s as any).kanikuli = 1;
                                (s as any).holyday = '<b>Autumn Break.</b>';
                              } else {
                                if (((s as any).day ?? 0) < 11) {
                                  (s as any).kanikuli = 1;
                                  (s as any).holyday = '<b>Autumn Break ends in ' + 12-((s as any).day ?? 0) + ' days.</b>';
                                } else {
                                  if (((s as any).day ?? 0) === 11) {
                                    (s as any).kanikuli = 1;
                                    (s as any).holyday = '<b>Last day of Autumn Break.</b>';
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
            if (((s as any).daystart ?? 0) >= 513) {
              (s as any).kanikuli = 7;
            }
            if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).week ?? 0) < 6) {
              if (((s as any).late ?? 0) === 1) {
                (s as any).late = 0;
              }
            }
            if ((!((s as any).kanikuli ?? 0))) {
              qspCall(s, 'gschool_socialchg', 'group_student_rel_change');
              if (((s as any).grupvalue ?? 0)[1] > 0) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - ((Math.floor(Math.random() * 2) + 0));
              } else {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 0;
              }
              if (((s as any).grupvalue ?? 0)[2] > 0) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - ((Math.floor(Math.random() * 2) + 0));
              } else {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = 0;
              }
              if (((s as any).grupvalue ?? 0)[3] > 0) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - ((Math.floor(Math.random() * 2) + 0));
              } else {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 0;
              }
              if (((s as any).grupvalue ?? 0)[4] > 0) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - ((Math.floor(Math.random() * 2) + 0));
              } else {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 0;
              }
            }
            if ((!((s as any).oldgrupvalue_set ?? 0))) {
              (s as any).oldgrupvalue_set = 1;
              ((s as any).old_grupvalue = (s as any).old_grupvalue ?? {})[1] = (((s as any).grupvalue ?? 0)?.[1] ?? 0);
              ((s as any).old_grupvalue = (s as any).old_grupvalue ?? {})[2] = (((s as any).grupvalue ?? 0)?.[2] ?? 0);
              ((s as any).old_grupvalue = (s as any).old_grupvalue ?? {})[3] = (((s as any).grupvalue ?? 0)?.[3] ?? 0);
              ((s as any).old_grupvalue = (s as any).old_grupvalue ?? {})[4] = (((s as any).grupvalue ?? 0)?.[4] ?? 0);
            } else {
              if (((s as any).old_grupvalue ?? 0)[1] + 10 < ((s as any).grupvalue ?? 0)[1]) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).old_grupvalue ?? 0)[1] + 10;
              }
              if (((s as any).old_grupvalue ?? 0)[2] + 10 < ((s as any).grupvalue ?? 0)[2]) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).old_grupvalue ?? 0)[2] + 10;
              }
              if (((s as any).old_grupvalue ?? 0)[3] + 10 < ((s as any).grupvalue ?? 0)[3]) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).old_grupvalue ?? 0)[3] + 10;
              }
              if (((s as any).old_grupvalue ?? 0)[4] + 10 < ((s as any).grupvalue ?? 0)[4]) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).old_grupvalue ?? 0)[4] + 10;
              }
              if (((s as any).old_grupvalue ?? 0)[1] - 30 > ((s as any).grupvalue ?? 0)[1]) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).old_grupvalue ?? 0)[1] - 30;
              }
              if (((s as any).old_grupvalue ?? 0)[2] - 30 > ((s as any).grupvalue ?? 0)[2]) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).old_grupvalue ?? 0)[2] - 30;
              }
              if (((s as any).old_grupvalue ?? 0)[3] - 30 > ((s as any).grupvalue ?? 0)[3]) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).old_grupvalue ?? 0)[3] - 30;
              }
              if (((s as any).old_grupvalue ?? 0)[4] - 30 > ((s as any).grupvalue ?? 0)[4]) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).old_grupvalue ?? 0)[4] - 30;
              }
            }
            if (((s as any).grupvalue ?? 0)[1] > 1000) {
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 1000;
            }
            if (((s as any).grupvalue ?? 0)[2] > 1000) {
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = 1000;
            }
            if (((s as any).grupvalue ?? 0)[3] > 1000) {
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 1000;
            }
            if (((s as any).grupvalue ?? 0)[4] > 1000) {
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 1000;
            }
            ((s as any).old_grupvalue = (s as any).old_grupvalue ?? {})[1] = (((s as any).grupvalue ?? 0)?.[1] ?? 0);
            ((s as any).old_grupvalue = (s as any).old_grupvalue ?? {})[2] = (((s as any).grupvalue ?? 0)?.[2] ?? 0);
            ((s as any).old_grupvalue = (s as any).old_grupvalue ?? {})[3] = (((s as any).grupvalue ?? 0)?.[3] ?? 0);
            ((s as any).old_grupvalue = (s as any).old_grupvalue ?? {})[4] = (((s as any).grupvalue ?? 0)?.[4] ?? 0);
          } else {
            if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === -1) {
              if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home') === 0) {
                (s as any).holyday = '<b>You missed your graduation. You could pick up your diploma at the school.</b>';
              } else {
                (s as any).holyday = '<b>You missed your graduation. Maybe your mother picked up your diploma.</b>';
              }
            }
          }
          qspCall(s, 'gschool', 'weekly grade update');
        }
        if (((s as any).week ?? 0) === 1) {
          qspCall(s, 'npc', 'update_hotcat', 1, ((s as any).aarraynumber ?? 0)+1, '$result = \'A\' + ARGS[0]');
          qspCall(s, 'npc', 'update_hotcat', 0, 0, '$result = iif($ucase($mid($npc_index[ARGS[0]], 1, 1))=\'A\', \', $npc_index[ARGS[0]])');
        }
        (s as any).natholi = undefined;
        (s as any).is_natholi = undefined;
        if (((s as any).month ?? 0) === 1  &&  ((s as any).day ?? 0) >= 1  &&  ((s as any).day ?? 0) <= 8) {
          (s as any).natholi = 'New Year holidays';
          (s as any).is_natholi = 1;
          if (((s as any).day ?? 0) === 1) {
            (s as any).natholi = ((s as any).natholi ?? '') + ', New Year';
          }
          if (((s as any).day ?? 0) === 7) {
            (s as any).natholi = ((s as any).natholi ?? '') + ', Christmas';
          }
        }
        if (((s as any).month ?? 0) === 2  &&  ((s as any).day ?? 0) === 23) {
          (s as any).natholi = 'Defender of Fatherland Day';
          (s as any).is_natholi = 1;
        }
        if (((s as any).month ?? 0) === 3  &&  ((s as any).day ?? 0) === 8) {
          (s as any).natholi = 'Women\'s Day';
          (s as any).is_natholi = 1;
        }
        if (((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) === 1) {
          (s as any).natholi = 'Spring and Labor Day';
          (s as any).is_natholi = 1;
        }
        if (((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) === 2) {
          (s as any).natholi = 'National holiday';
          (s as any).is_natholi = 1;
        }
        if (((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) === 9) {
          (s as any).natholi = 'Victory Day';
          (s as any).is_natholi = 1;
        }
        if (((s as any).month ?? 0) === 6  &&  ((s as any).day ?? 0) === 12) {
          (s as any).natholi = 'Russia Day';
          (s as any).is_natholi = 1;
        }
        if (((s as any).month ?? 0) === 6  &&  ((s as any).day ?? 0) === 13) {
          (s as any).natholi = 'National holiday';
          (s as any).is_natholi = 1;
        }
        if (((s as any).month ?? 0) === 11  &&  ((s as any).day ?? 0) === 4) {
          (s as any).natholi = 'Unity Day';
          (s as any).is_natholi = 1;
        }
        if (((s as any).is_natholi ?? 0) === 1) {
          if (((s as any).holyday ?? 0) !== '') {
            (s as any).holyday = ((s as any).holyday ?? '') + '<br>';
          }
          (s as any).holyday = ((s as any).holyday ?? 0) + (((s as any).natholi ?? 0));
        }
        qspCall(s, 'fetish', 'cikl');
        qspCall(s, 'archetypes', 'daily_snapshot');
        qspCall(s, 'traits', 'daily');
        qspCall(s, 'telefon_schedules', 'cikl');
        qspCall(s, 'uni_lessons', 'cikl');
        (s as any).moisturiser_time = ((s as any).totminut ?? 0);
        (s as any).mosal_time = ((s as any).totminut ?? 0);
        (s as any).last_pee = undefined;
        qspCall(s, 'gad_gpyard', 'cikl');
        (s as any).loc_count = 0;
        ((s as any).ciklVars = (s as any).ciklVars ?? {})['i'] = ((s as any).loc_count ?? 0) - 1;
        do {
          (s as any).CloLoc = qspUntranslated(s, "CloLosLoc[ciklVars['i']]", { location: "cikl" });
          (s as any).CloLostOn = (((s as any).CloLosDay ?? 0)?.[String((s as any).CloLoc ?? 0)] ?? 0);
          if (((s as any).CloLostOn ?? 0) + (Math.floor(Math.random() * 8) + 7) < ((s as any).daystart ?? 0)) {
            qspCall(s, 'clothing', 'recover_lost_clothes', ((s as any).CloLoc ?? 0), 2);
          }
          ((s as any).ciklVars = (s as any).ciklVars ?? {})['i'] = ((s as any).ciklVars['i'] ?? 0) - (1);
          if (((s as any).vidageday ?? 0) > 1080) {
            (s as any).vidageday = 1080;
          }
          if (((s as any).blizoruk ?? 0) < 10) {
            (s as any).blizoruk = ((s as any).blizoruk ?? 0) - (1);
          }
          if (((s as any).blizoruk ?? 0) < 100) {
            (s as any).blizoruk = ((s as any).blizoruk ?? 0) - ((Math.floor(Math.random() * 2) + 0));
          }
          if (((s as any).blizoruk ?? 0) < 0) {
            (s as any).blizoruk = 0;
          }
          if (((s as any).inSleep ?? 0) === 1) {
            qspCall(s, 'npc', 'cleanarrays');
          }
          if (((s as any).therapistWantsSlave ?? 0) > 0) {
            (s as any).annaclean1 = (Math.floor(Math.random() * 4) + 23);
          }
          (s as any).therapistFuckedPussyScene = undefined;
          if (((s as any).status ?? 0)?.['dog'] !== 'blocked'  &&  ((s as any).rex ?? 0)?.['owned'] === 1) {
            ((s as any).rex = (s as any).rex ?? {})['timer_day'] = ((s as any).daystart ?? 0);
            ((s as any).rex = (s as any).rex ?? {})['relationship'] = ((s as any).rex['relationship'] ?? 0) - (1);
            if (((s as any).cheat ?? 0)?.['dog_rel'] === 0  &&  ((s as any).rex ?? 0)?.['gadukino_day'] !== ((s as any).daystart ?? 0)) {
              (s as any).npcRelTemp = 0 - ((((s as any).rex ?? 0)?.['count_walk'] + ((s as any).rex ?? 0)?.['count_feed'] === 0) ? ((-1)) : (((((s as any).rex ?? {})?.['count_walk'] ?? 0) + (((s as any).rex ?? {})?.['count_feed'] ?? 0))));
              qspCall(s, 'npc_relationship', 'modify_exact', 'A29', ((s as any).npcRelTemp ?? 0));
              ((s as any).rex = (s as any).rex ?? {})['relationship'] = ((s as any).rex['relationship'] ?? 0) - (((((s as any).rex ?? 0)?.['count_walk'] + ((s as any).rex ?? 0)?.['count_feed'] === 0) ? ((-1)) : (((((s as any).rex ?? {})?.['count_walk'] ?? 0) + (((s as any).rex ?? {})?.['count_feed'] ?? 0)))));
            }
            ((s as any).rex = (s as any).rex ?? {})['count_run'] = 0;
            ((s as any).rex = (s as any).rex ?? {})['count_walk'] = (((s as any).rex ?? 0)?.['count_walk_base']);
            ((s as any).rex = (s as any).rex ?? {})['timer_walk'] = 0;
            ((s as any).rex = (s as any).rex ?? {})['count_feed'] = (((s as any).rex ?? 0)?.['count_feed_base']);
            ((s as any).rex = (s as any).rex ?? {})['timer_feed'] = 0;
            if (((s as any).week ?? 0) === 1) {
              if (((s as any).cheat ?? 0)?.['dog_rel'] === 0) {
                qspCall(s, 'npc_relationship', 'modify_exact', 'A29', 0 - (((s as any).rex ?? {})?.['count_bath'] ?? 0));
                ((s as any).rex = (s as any).rex ?? {})['relationship'] = ((s as any).rex['relationship'] ?? 0) - (((((s as any).rex ?? {})?.['count_bath'] ?? 0) * 5));
              }
              ((s as any).rex = (s as any).rex ?? {})['count_bath'] = (((s as any).rex ?? 0)?.['count_bath_base']);
            }
          }
          (s as any).starlets_on = 0;
          (s as any).cheerleaders_on = 0;
          if ((!((s as any).is_natholi ?? 0))) {
            if ((((s as any).week ?? 0) === 5  &&  ((s as any).odd_week ?? 0) === 0)  ||  (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3  ||  ((s as any).week ?? 0) >= 6)) {
              (s as any).starlets_on = 1;
            } else {
              if (((s as any).month ?? 0) >= 10  ||  ((s as any).month ?? 0) < 6) {
                (s as any).cheerleaders_on = 1;
              }
            }
          }
          if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0) {
            if (((s as any).starlets_practice ?? 0) === ((s as any).daystart ?? 0) - 1  &&  ((s as any).AlbinaQW ?? 0)?.['startletsday'] !== ((s as any).daystart ?? 0) - 1) {
              (s as any).starlets_missed = 1;
              (s as any).starlets_practice = 0;
            }
            if (((s as any).starlets_on ?? 0) === 1) {
              (s as any).starlets_practice = ((s as any).daystart ?? 0);
            }
          }
          if (((s as any).month ?? 0) === 9  &&  ((s as any).day ?? 0) === 16  &&  ((s as any).AlbinaQW ?? 0)?.['ParkRally'] === 0) {
            ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['ParkRally'] = 1;
          }
          if (((s as any).month ?? 0) === 10  &&  ((s as any).day ?? 0) === 16  &&  ((s as any).AlbinaQW ?? 0)?.['ParkRally'] === 1) {
            ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['ParkRally'] = 2;
          }
          if (((s as any).month ?? 0) === 11  &&  ((s as any).day ?? 0) === 19  &&  (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] <= 0  ||  (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] === 1  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 1))  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
            ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['StarletsShutDown'] = 1;
            qspCall(s, 'calendar', 'pack', 'remove', 'starlets');
          }
          ((s as any).ml_performance = (s as any).ml_performance ?? {})['max_perform_minutes'] = ((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0);
          ((s as any).ml_performance = (s as any).ml_performance ?? {})['performed_minutes'] = 0;
          if (((s as any).ml_guitarlesson ?? 0)?.['nextlesson'] < ((s as any).daystart ?? 0)  &&  ((s as any).ml_guitarlesson ?? 0)?.['lessonday'] !== 8) {
            ((s as any).ml_guitarlesson = (s as any).ml_guitarlesson ?? {})['lessonday'] = 8;
          }
          if (((s as any).ml_onlinesongcount ?? 0) > 0) {
            ((s as any).ciklVars = (s as any).ciklVars ?? {})['i'] = 0;
            ((s as any).ciklVars = (s as any).ciklVars ?? {})['j'] = (-1);
            do {
              if (((s as any).ml_onlinesong_freshness ?? 0)[((s as any).ciklVars ?? 0)?.['i']] > 0) {
                ((s as any).ciklVars = (s as any).ciklVars ?? {})['j'] = ((s as any).ciklVars['j'] ?? 0) + (1);
                ((s as any).ml_tempsong_freshness = (s as any).ml_tempsong_freshness ?? {})[(((s as any).ciklVars ?? 0)?.['j'])] = qspUntranslated(s, "ml_onlinesong_freshness[ciklVars['i']]", { location: "cikl" });
                ((s as any).ml_tempsong_lastcalcday = (s as any).ml_tempsong_lastcalcday ?? {})[(((s as any).ciklVars ?? 0)?.['j'])] = qspUntranslated(s, "ml_onlinesong_lastcalcday[ciklVars['i']]", { location: "cikl" });
                ((s as any).ml_tempsong_hotcat = (s as any).ml_tempsong_hotcat ?? {})[(((s as any).ciklVars ?? 0)?.['j'])] = qspUntranslated(s, "ml_onlinesong_hotcat[ciklVars['i']]", { location: "cikl" });
                ((s as any).ml_tempsong_skilllevel = (s as any).ml_tempsong_skilllevel ?? {})[(((s as any).ciklVars ?? 0)?.['j'])] = qspUntranslated(s, "ml_onlinesong_skilllevel[ciklVars['i']]", { location: "cikl" });
                ((s as any).ml_tempsong_uploaded = (s as any).ml_tempsong_uploaded ?? {})[(((s as any).ciklVars ?? 0)?.['j'])] = qspUntranslated(s, "ml_onlinesong_uploaded[ciklVars['i']]", { location: "cikl" });
                if (((s as any).ml_tempsong_lastcalcday ?? 0)[((s as any).ciklVars ?? 0)?.['j']] <= (((s as any).daystart ?? 0) - 7)  &&  ((s as any).ml_tempsong_uploaded ?? 0) === 1) {
                  qspCall(s, 'fame', 'city', 'music', (Math.floor(Math.random() * (((s as any).ml_tempsong_freshness ?? 0)[(((s as any).ciklVars ?? {})?.['j'] ?? 0)] / 100 - 0 + 1)) + (0)));
                  ((s as any).ml_tempsong_freshness = (s as any).ml_tempsong_freshness ?? {})[(((s as any).ciklVars ?? 0)?.['j'])] = ((s as any).ml_tempsong_freshness[(((s as any).ciklVars ?? 0)?.['j'])] ?? 0) - (10);
                  ((s as any).ml_tempsong_lastcalcday = (s as any).ml_tempsong_lastcalcday ?? {})[(((s as any).ciklVars ?? 0)?.['j'])] = ((s as any).daystart ?? 0);
                }
              }
              ((s as any).ciklVars = (s as any).ciklVars ?? {})['i'] = ((s as any).ciklVars['i'] ?? 0) + (1);
              (s as any).ml_onlinesong_freshness = undefined;
              (s as any).ml_onlinesong_lastcalcday = undefined;
              (s as any).ml_onlinesong_hotcat = undefined;
              (s as any).ml_onlinesong_skilllevel = undefined;
              (s as any).ml_onlinesong_uploaded = undefined;
              ((s as any).ciklVars = (s as any).ciklVars ?? {})['i'] = 0;
              if (((s as any).ciklVars ?? 0)?.['j'] >= 0) {
                do {
                  ((s as any).ml_onlinesong_freshness = (s as any).ml_onlinesong_freshness ?? {})[(((s as any).ciklVars ?? 0)?.['i'])] = qspUntranslated(s, "ml_tempsong_freshness[ciklVars['i']]", { location: "cikl" });
                  ((s as any).ml_onlinesong_hotcat = (s as any).ml_onlinesong_hotcat ?? {})[(((s as any).ciklVars ?? 0)?.['i'])] = qspUntranslated(s, "ml_tempsong_hotcat[ciklVars['i']]", { location: "cikl" });
                  ((s as any).ml_onlinesong_lastcalcday = (s as any).ml_onlinesong_lastcalcday ?? {})[(((s as any).ciklVars ?? 0)?.['i'])] = qspUntranslated(s, "ml_tempsong_lastcalcday[ciklVars['i']]", { location: "cikl" });
                  ((s as any).ml_onlinesong_skilllevel = (s as any).ml_onlinesong_skilllevel ?? {})[(((s as any).ciklVars ?? 0)?.['i'])] = qspUntranslated(s, "ml_tempsong_skilllevel[ciklVars['i']]", { location: "cikl" });
                  ((s as any).ml_onlinesong_uploaded = (s as any).ml_onlinesong_uploaded ?? {})[(((s as any).ciklVars ?? 0)?.['i'])] = qspUntranslated(s, "ml_tempsong_uploaded[ciklVars['i']]", { location: "cikl" });
                  ((s as any).ciklVars = (s as any).ciklVars ?? {})['i'] = ((s as any).ciklVars['i'] ?? 0) + (1);
                } while (((s as any).ciklVars ?? 0)?.['i'] <= ((s as any).ciklVars ?? 0)?.['j']);
              }
              (s as any).ml_tempsong_freshness = undefined;
              (s as any).ml_tempsong_lastcalcday = undefined;
              (s as any).ml_tempsong_hotcat = undefined;
              (s as any).ml_tempsong_skilllevel = undefined;
              (s as any).ml_tempsong_uploaded = undefined;
            } while (((s as any).ciklVars ?? 0)?.['i'] < ((s as any).ml_onlinesongcount ?? 0));
          }
          if (((s as any).ml_performance ?? 0)?.['set_lastpracticeday'] !== (((s as any).daystart ?? 0)-1)) {
            (s as any).repertoire_quality = ((s as any).repertoire_quality ?? 0) - (2);
          }
          qspCall(s, 'prostitution_functions', 'check_for_wlife');
          qspCall(s, 'prostitution_functions', 'update_prostitution_locations');
          ((s as any).prostitute = (s as any).prostitute ?? {})['earnings_day'] = 0;
          ((s as any).prostitute = (s as any).prostitute ?? {})['customer_day'] = 0;
          qspCall(s, 'homes_properties', 'progress_property_rent_time');
          if (((s as any).week ?? 0) === 1) {
            (s as any).used_car = undefined;
            (s as any).therapist_weekly_block = undefined;
            if (((s as any).home ?? 0)?.['current'] === 'parents_home') {
              ((s as any).tempDirt = (s as any).tempDirt ?? {})['clo'] = ((s as any).PCloDirt ?? 0);
              ((s as any).tempDirt = (s as any).tempDirt ?? {})['bra'] = ((s as any).PBraDirt ?? 0);
              ((s as any).tempDirt = (s as any).tempDirt ?? {})['pan'] = ((s as any).PPanDirt ?? 0);
              qspCall(s, 'washer', 'wash_all');
              if (((s as any).clothingworntype ?? 0) !== 'nude') {
              }
              if (((s as any).underwear ?? 0)?.['type'] === 2) {
                if (((s as any).bodysuitworntype ?? 0) !== 'none') {
                }
              } else {
                if (((s as any).braworntype ?? 0) !== 'none') {
                }
                if (((s as any).pantyworntype ?? 0) !== 'none') {
                }
              }
              (s as any).tempDirt = undefined;
            }
          } else {
            if (((s as any).week ?? 0) === 7) {
              qspCall(s, 'newspaper', 'cikl');
            }
          }
          if (((s as any).lib_book_loaned ?? 0) !== '') {
            (s as any).lib_debt = ((s as any).lib_debt ?? 0) + (50);
          }
          if ((!((s as any).set_npc_uni_eduType ?? 0))) {
            (s as any).set_npc_uni_eduType = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A77'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A82'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A83'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A84'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A209'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A220'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A242'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A243'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A244'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A245'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A246'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A247'] = 1;
          }
          if (((s as any).set_pav_npc_uni_active ?? 0) === 0  &&  ((s as any).yearstart ?? 0) === 2  &&  ((s as any).month ?? 0) >= 8  &&  ((s as any).day ?? 0) >= 28) {
            (s as any).set_pav_npc_uni_active = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A1'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A2'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A4'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A7'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A12'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A13'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A14'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A15'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A16'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A17'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A18'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A19'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A22'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A23'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A25'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A139'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A140'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A142'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A144'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A146'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A147'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A149'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A152'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A153'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A155'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A159'] = 1;
            ((s as any).npc_uni_active = (s as any).npc_uni_active ?? {})['A165'] = 1;
          }
          if (((s as any).will_counter ?? 0) >= 20) {
            (s as any).will_counter = ((s as any).will_counter ?? 0) - (20);
            (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (1);
          }
          qspCall(s, 'komp_cam_functions', 'cikl');
          (s as any).gad_stand = 0;
          if (Object.keys((s as any).policeQW_courthearing_dates ?? {}).length > 0  &&  ((s as any).daystart ?? 0) > ((s as any).policeQW_courthearing_dates ?? 0)[0]) {
            ((s as any).policeQW = (s as any).policeQW ?? {})['missed_court_dates'] = ((s as any).policeQW['missed_court_dates'] ?? 0) + (1);
            ((s as any).policeQW = (s as any).policeQW ?? {})['tot_court_dates_missed'] = ((s as any).policeQW['tot_court_dates_missed'] ?? 0) + (1);
            (s as any).policeQW_courtletter_dates = [...((s as any).policeQW_courtletter_dates ?? []), ((s as any).daystart ?? 0) + (Math.floor(Math.random() * 4) + 3)];
            (s as any).policeQW_courtletter_subjects = [...((s as any).policeQW_courtletter_subjects ?? []), 'missed_court_' + (((s as any).policeQW_courthearing_subjects ?? 0)?.[0] ?? 0)];
            (s as any).policeQW_courthearing_dates = undefined;
            (s as any).policeQW_courthearing_subjects = undefined;
          }
          if (((s as any).policeQW ?? 0)?.['fine_deadline'] > 0) {
            if (((s as any).daystart ?? 0) > ((s as any).policeQW ?? 0)?.['fine_deadline'] - 8) {
              (s as any).policeQW_courtletter_dates = [...((s as any).policeQW_courtletter_dates ?? []), ((s as any).daystart ?? 0)];
              (s as any).policeQW_courtletter_subjects = [...((s as any).policeQW_courtletter_subjects ?? []), 'fine'];
            } else {
              if (((s as any).daystart ?? 0) > ((s as any).policeQW ?? 0)?.['fine_deadline']) {
                ((s as any).policeQW = (s as any).policeQW ?? {})['missed_fine_deadlines'] = ((s as any).policeQW['missed_fine_deadlines'] ?? 0) + (1);
                ((s as any).policeQW = (s as any).policeQW ?? {})['tot_fines_deadlines_missed'] = ((s as any).policeQW['tot_fines_deadlines_missed'] ?? 0) + (1);
                (s as any).policeQW_courtletter_dates = [...((s as any).policeQW_courtletter_dates ?? []), ((s as any).daystart ?? 0) + (Math.floor(Math.random() * 4) + 3)];
                (s as any).policeQW_courtletter_subjects = [...((s as any).policeQW_courtletter_subjects ?? []), 'missed_fine'];
              }
            }
          }
          if (Object.keys((s as any).policeQW_courtletter_dates ?? {}).length > 1) {
            qspCall(s, 'array', 'coupled_sort', 'policeQW_courtletter_dates', '$policeQW_courtletter_subjects');
          }
          if (Object.keys((s as any).policeQW_courthearing_dates ?? {}).length > 1) {
            qspCall(s, 'array', 'coupled_sort', 'policeQW_courthearing_dates', '$policeQW_courthearing_subjects');
          }
          if (((s as any).blackmailQW ?? 0)?.['stage'] > 0) {
            qspCall(s, 'blackmailer', 'cikl');
          }
          if (((s as any).shared_apt ?? 0)?.['enabled'] === 1) {
            qspCall(s, 'pav_shared_apt', 'daily_update');
          }
          qspCall(s, 'adverts_manager', 'cikl');
          qspCall(s, 'npcStat_clean', '');
          (s as any).ciklVars = undefined;
        } while (((s as any).ciklVars ?? 0)?.['i'] >= 0);
      } while (((s as any).ciklVars ?? 0)?.['i'] < ((s as any).aarraynumber ?? 0));
    }
  } while (((s as any).ciklVars ?? 0)?.['i'] <= 293);
  scene.build();
}

export const cikl: LocationDef = {
  name: 'cikl',
  title: 'You threw away your used tampon.',
  region: 'other',
  description: ['You threw away your used tampon.'],
  enter: enter,
};
