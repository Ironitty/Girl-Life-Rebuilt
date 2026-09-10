import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterOnBookingMiss(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_obm_film_type = qspUntranslated(s, "val(temp_obm_data)", { location: "pornschedule" });
  (s as any).pornmiss = 1;
  (s as any).missedshoot = 0;
  if (((s as any).temp_obm_film_type ?? 0) > 0) {
    (s as any).temp_obm_cost = ((s as any).pcash ?? 0) * 10;
  } else {
    (s as any).temp_obm_cost = 500;
  }
  (s as any).job_booking_debt[String((s as any).temp_obm_job ?? 0)] = ((s as any).job_booking_debt[String((s as any).temp_obm_job ?? 0)] ?? 0) + (((s as any).temp_obm_cost ?? 0));
  (s as any).job_last_miss_cost[String((s as any).temp_obm_job ?? 0)] = ((s as any).temp_obm_cost ?? 0);
  if (((s as any).job_booking_debt ?? 0)?.[String((s as any).temp_obm_job ?? 0)] > ((s as any).job_penalty_max_debt ?? 0)?.[String((s as any).temp_obm_job ?? 0)]) {
    // TODO-QSP: $job_termination_reason[$temp_obm_job] = 'blacklisted'
    qspCall(s, 'jobs', 'set_fired', ((s as any).temp_obm_job ?? 0));
    (s as any).pfilmNO = 1;
  }
  scene.build();
}

function enterPornmiss(s: GameState, scene: SceneBuilder): void {
  (s as any).pornmiss = 1;
  (s as any).missedshoot = 0;
  (s as any).film_idx = ((s as any).film ?? 0);
  (s as any).temp_pm_cost = ((s as any).pcash ?? 0) * 10;
  if ((!((s as any).temp_pm_cost ?? 0))) {
    (s as any).temp_pm_cost = 500;
  }
  (s as any).job_booking_debt['city_pornstudio_actress'] = ((s as any).job_booking_debt['city_pornstudio_actress'] ?? 0) + (((s as any).temp_pm_cost ?? 0));
  (s as any).job_last_miss_cost['city_pornstudio_actress'] = ((s as any).temp_pm_cost ?? 0);
  if (((s as any).job_booking_debt ?? 0)?.['city_pornstudio_actress'] > ((s as any).job_penalty_max_debt ?? 0)?.['city_pornstudio_actress']) {
    (s as any).job_termination_reason['city_pornstudio_actress'] = 'blacklisted';
    qspCall(s, 'jobs', 'set_fired', 'city_pornstudio_actress');
    (s as any).pfilmNO = 1;
  }
  scene.build();
}

function enterSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).missedshoot = 0;
  qspCall(s, 'jobs', 'get_job_definition', 'city_pornstudio_actress');
  (s as any).temp_sched_next = qspFunc(s, 'jobs', 'get_next_booking_day', 'city_pornstudio_actress', ((s as any).daystart ?? 0), ((s as any).job_booking_window_days ?? 0)?.['city_pornstudio_actress']);
  if (((s as any).temp_sched_next ?? 0) > 0) {
    (s as any).porndays = ((s as any).temp_sched_next ?? 0) - ((s as any).daystart ?? 0);
  } else {
    (s as any).porndays = (-1);
  }
  (s as any).days = 0;
  // TODO-QSP: :fillschedule
  (s as any).porns = 0;
  // TODO-QSP: :moveschedule
  if (((s as any).porntaken ?? 0)?.[String(((s as any).days ?? 0)+1) + ',' + String(((s as any).porns ?? 0))] === 0  &&  ((s as any).days ?? 0) >= 14) {
    if ((Math.floor(Math.random() * 100) + 1) === 1) {
      (s as any).pornplan['' + String((s as any).days+1 || '') + ',' + String((s as any).porns || '') + ''] = 0;
    }
  }
  if (((s as any).days ?? 0) === ((s as any).job_booking_window_days ?? 0)?.['city_pornstudio_actress']  ||  ((s as any).pornplan ?? 0)?.[String(((s as any).days ?? 0)+1) + ',' + String(((s as any).porns ?? 0))] === 0) {
    (s as any).pornvariable = Math.floor(Math.random() * 91) + 0;
    if (((s as any).pornvariable ?? 0) <= 1) {
      (s as any).pornplan['' + String((s as any).days+1 || '') + ',' + String((s as any).porns || '') + ''] = 14;
    } else {
      (s as any).pornplan['' + String((s as any).days+1 || '') + ',' + String((s as any).porns || '') + ''] = Math.floor(Math.random() * 4) + 10;
      if (((s as any).pornvariable ?? 0) <= 30) {
        (s as any).pornplan['' + String((s as any).days+1 || '') + ',' + String((s as any).porns || '') + ''] = Math.floor(Math.random() * 2) + 8;
      } else {
        (s as any).pornplan['' + String((s as any).days+1 || '') + ',' + String((s as any).porns || '') + ''] = Math.floor(Math.random() * 7) + 1;
        if (((s as any).pornvariable ?? 0) <= 80) {
          (s as any).pornplan['' + String((s as any).days+1 || '') + ',' + String((s as any).porns || '') + ''] = Math.floor(Math.random() * 6) + 15;
        } else {
          (s as any).pornplan['' + String((s as any).days+1 || '') + ',' + String((s as any).porns || '') + ''] = 15;
        }
      }
      (s as any).pornplan['' + String((s as any).days || '') + ',' + String((s as any).porns || '') + ''] = ((s as any).pornplan ?? 0)?.[String(((s as any).days ?? 0)+1) + ',' + String(((s as any).porns ?? 0))];
      (s as any).porntaken['' + String((s as any).days || '') + ',' + String((s as any).porns || '') + ''] = ((s as any).porntaken ?? 0)?.[String(((s as any).days ?? 0)+1) + ',' + String(((s as any).porns ?? 0))];
      if (((s as any).porntaken ?? 0)?.[String(((s as any).days ?? 0)) + ',' + String(((s as any).porns ?? 0))] === 0) {
        if ((Math.floor(Math.random() * (((s as any).days ?? 0)*3/2 - 1 + 1)) + (1)) === 1) {
          (s as any).porntaken['' + String((s as any).days || '') + ',' + String((s as any).porns || '') + ''] = 1;
        }
      }
      if (((s as any).porntaken ?? 0)?.[String(((s as any).days ?? 0)) + ',' + String(((s as any).porns ?? 0))] === 1) {
        if ((Math.floor(Math.random() * 100) + 1) === 1) {
          (s as any).porntaken['' + String((s as any).days || '') + ',' + String((s as any).porns || '') + ''] = 0;
        }
      }
      if (((s as any).porns ?? 0) < 3) {
        (s as any).porns = ((s as any).porns ?? 0) + (1);
        // TODO-QSP: jump 'moveschedule'
      }
      if (((s as any).days ?? 0) < ((s as any).job_booking_window_days ?? 0)?.['city_pornstudio_actress']) {
        (s as any).days = ((s as any).days ?? 0) + (1);
        // TODO-QSP: jump 'fillschedule'
      }
      (s as any).temp_sched_tail = (((s as any).job_booking_window_days ?? 0)?.['city_pornstudio_actress'] + 1) * 4;
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'on_booking_miss':
      enterOnBookingMiss(s, scene);
      break;
    case 'pornmiss':
      enterPornmiss(s, scene);
      break;
    case 'schedule':
      enterSchedule(s, scene);
      break;
    default:
      enterOnBookingMiss(s, scene);
      break;
  }
}

export const pornschedule: LocationDef = {
  name: 'pornschedule',
  title: '<b><<$porndesc[pornplan[\'<<ps_i>>,<<porns>>\']]>></b> - <i>Already contracted</i><<$edit_button>><br>',
  region: 'other',
  enter: enter,
};
