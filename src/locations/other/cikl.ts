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
    (s as any).acting_string1 = Math.floor(Math.random() * 190000000) + 10000000;
    (s as any).acting_string2 = Math.floor(Math.random() * 190000000) + 10000000;
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
    ((s as any).model ?? {})['age'] = (((s as any).model ?? {})['age'] ?? 0) + (1);
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
    }
  }
  (s as any).streetevent_hour = (-2);
  (s as any).Clothingstock = Math.floor(Math.random() * 120) + 0;
  ((s as any).ciklVars ?? {})['i'] = 1;
  // TODO-QSP: :loopprice
  // TODO-QSP: Clothingstock[ciklVars['i']] = rand(0, 100)
  ((s as any).ciklVars ?? {})['i'] = (((s as any).ciklVars ?? {})['i'] ?? 0) + (1);
  if (((s as any).ciklVars ?? 0)?.['i'] <= 293) {
    // TODO-QSP: jump 'loopprice'
  }
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
      qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 4) + 3);
    } else {
      if (((s as any).exhibition_outdoors ?? 0) <= 10) {
        qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 5) + 5);
      } else {
        if (((s as any).exhibition_outdoors ?? 0) <= 15) {
          qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 6) + 7);
        } else {
          if (((s as any).exhibition_outdoors ?? 0) <= 20) {
            qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 7) + 9);
          } else {
            if (((s as any).exhibition_outdoors ?? 0) <= 25) {
              qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 9) + 12);
            } else {
              if (((s as any).exhibition_outdoors ?? 0) <= 30) {
                qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 10) + 16);
              } else {
                if (((s as any).exhibition_outdoors ?? 0) <= 35) {
                  qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 11) + 20);
                } else {
                  if (((s as any).exhibition_outdoors ?? 0) <= 40) {
                    qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 16) + 25);
                  } else {
                    if (((s as any).exhibition_outdoors ?? 0) <= 50) {
                      qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 16) + 35);
                    } else {
                      if (((s as any).exhibition_outdoors ?? 0) <= 65) {
                        qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 26) + 50);
                      } else {
                        qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 31) + 70);
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
    // TODO-QSP: calCycleOpts['phase_start_' + cycle] = daystart
    ((s as any).calCycleOpts ?? {})['tracked_cycle'] = ((s as any).cycle ?? 0);
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
    (s as any).mood_trauma = ((s as any).mood_trauma ?? 0) - (Math.floor(Math.random() * 2) + 0);
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
    // TODO-QSP: If TriperOral > 14 and TriperNapr = 0:
    if ((Math.floor(Math.random() * (100 - ((s as any).TriperOral ?? 0) + 1)) + (((s as any).TriperOral ?? 0))) > 80) {
      (s as any).TriperOral = 0;
      if ((!((s as any).Triper ?? 0))) {
        (s as any).TriperOnce = 0;
      }
      (s as any).TriperOralSigns = 0;
    }
  }
  scene.build();
}

export const cikl: LocationDef = {
  name: 'cikl',
  region: 'other',
  enter: enter,
};
