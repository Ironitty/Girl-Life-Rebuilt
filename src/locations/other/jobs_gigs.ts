import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetEvent(s: GameState, scene: SceneBuilder): void {
  ((s as any).evt_transient = (s as any).evt_transient ?? {})['type'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).evt_transient = (s as any).evt_transient ?? {})['subtype'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).evt_transient = (s as any).evt_transient ?? {})['desc'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).evt_transient = (s as any).evt_transient ?? {})['journal'] = ((s as any).locArgs?.[4] ?? 0);
  ((s as any).evt_transient = (s as any).evt_transient ?? {})['verbose'] = ((s as any).locArgs?.[5] ?? 0);
  scene.build();
}

function enterSetLocCode(s: GameState, scene: SceneBuilder): void {
  ((s as any).evt_transient = (s as any).evt_transient ?? {})['loc'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).evt_transient = (s as any).evt_transient ?? {})['arg'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).evt_transient = (s as any).evt_transient ?? {})['code'] = ((s as any).locArgs?.[3] ?? 0);
  scene.build();
}

function enterSetWageScale(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['wage'] = 0;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      ((s as any).evt_transient = (s as any).evt_transient ?? {})['wage'] = (Math.floor(Math.random() * (10 - 2 + 1)) + (2));
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
        ((s as any).evt_transient = (s as any).evt_transient ?? {})['wage'] = (Math.floor(Math.random() * (20 - 10 + 1)) + (10));
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 3) {
          ((s as any).evt_transient = (s as any).evt_transient ?? {})['wage'] = (Math.floor(Math.random() * (40 - 20 + 1)) + (20));
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 4) {
            ((s as any).evt_transient = (s as any).evt_transient ?? {})['wage'] = (Math.floor(Math.random() * (80 - 40 + 1)) + (40));
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 5) {
              ((s as any).evt_transient = (s as any).evt_transient ?? {})['wage'] = ((s as any).locArgs?.[2] ?? 0);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterGenerateEventSchedule(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') !== '') {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['week_string'] = ((s as any).locArgs?.[1] ?? 0);
  } else {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['week_string'] = '1234567';
  }
  if (String((s as any).locArgs?.[2] ?? '') > 0  &&  String((s as any).locArgs?.[2] ?? '') < 1440) {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['duration'] = ((s as any).locArgs?.[2] ?? 0);
  } else {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['duration'] = (Math.floor(Math.random() * (8 - 1 + 1)) + (1));
  }
  if (String((s as any).locArgs?.[3] ?? '') >= ((s as any).daystart ?? 0)) {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['search_day'] = ((s as any).locArgs?.[3] ?? 0);
  } else {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['search_day'] = ((s as any).daystart ?? 0) + 14;
  }
  if (String((s as any).locArgs?.[4] ?? '') >= ((s as any).evt_transient ?? 0)?.['search_day']) {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['search_limit'] = ((s as any).locArgs?.[4] ?? 0);
  } else {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['search_limit'] = (((s as any).evt_transient ?? {})?.['search_day'] ?? 0) + 28;
  }
  if (String((s as any).locArgs?.[5] ?? '') > 0  &&  String((s as any).locArgs?.[5] ?? '') < 1440) {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['start_time'] = ((s as any).locArgs?.[5] ?? 0);
  } else {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['start_time'] = (Math.floor(Math.random() * (20 - 9 + 1)) + (9));
  }
  ((s as any).evt_transient = (s as any).evt_transient ?? {})['time_overshoot'] = (((s as any).evt_transient ?? {})?.['duration'] ?? 0) + (((s as any).evt_transient ?? {})?.['start_time'] ?? 0) - 1380;
  if (((s as any).evt_transient ?? 0)?.['time_overshoot'] > 0) {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['start_time'] = ((s as any).evt_transient['start_time'] ?? 0) - ((60 + (((s as any).evt_transient ?? {})?.['time_overshoot'] ?? 0) / 5 * 5));
  }
  while (true) {
    qspCall(s, 'time', 'to_date', (((s as any).evt_transient ?? 0)?.['search_day']));
    if (((String(((s as any).evt_transient ?? 0)?.['week_string']).indexOf(String(((s as any).dateVars ?? 0)?.['week']))) + 1) <= 0) {
      ((s as any).evt_transient = (s as any).evt_transient ?? {})['search_day'] = ((s as any).evt_transient['search_day'] ?? 0) + (1);
      if (((s as any).evt_transient ?? 0)?.['search_day'] <= ((s as any).evt_transient ?? 0)?.['search_limit']) {
        break;
      }
    } else {
      ((s as any).evt_transient = (s as any).evt_transient ?? {})['event_daystart'] = (((s as any).evt_transient ?? 0)?.['search_day']);
      ((s as any).evt_transient = (s as any).evt_transient ?? {})['event_dow'] = (((s as any).dateVars ?? 0)?.['week']);
    }
  }
  scene.build();
}

function enterSaveEvtEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).evt_verbose = [...((s as any).evt_verbose ?? []), (((s as any).evt_transient ?? 0)?.['verbose'])];
  (s as any).evt_event = [...((s as any).evt_event ?? []), (((s as any).evt_transient ?? 0)?.['type'])];
  (s as any).evt_event_sub = [...((s as any).evt_event_sub ?? []), (((s as any).evt_transient ?? 0)?.['subtype'])];
  (s as any).evt_dow = [...((s as any).evt_dow ?? []), (((s as any).evt_transient ?? 0)?.['event_dow'])];
  (s as any).evt_daystart = [...((s as any).evt_daystart ?? []), (((s as any).evt_transient ?? 0)?.['event_daystart'])];
  (s as any).evt_starttime = [...((s as any).evt_starttime ?? []), (((s as any).evt_transient ?? 0)?.['start_time'])];
  (s as any).evt_duration = [...((s as any).evt_duration ?? []), (((s as any).evt_transient ?? 0)?.['duration'])];
  (s as any).evt_wages = [...((s as any).evt_wages ?? []), (((s as any).evt_transient ?? 0)?.['wage'])];
  (s as any).evt_journal = [...((s as any).evt_journal ?? []), (((s as any).evt_transient ?? 0)?.['journal'])];
  (s as any).evt_loc = [...((s as any).evt_loc ?? []), (((s as any).evt_transient ?? 0)?.['loc'])];
  (s as any).evt_loc_arg = [...((s as any).evt_loc_arg ?? []), (((s as any).evt_transient ?? 0)?.['arg'])];
  (s as any).evt_content_code = [...((s as any).evt_content_code ?? []), (((s as any).evt_transient ?? 0)?.['code'])];
  (s as any).evt_desc = [...((s as any).evt_desc ?? []), (((s as any).evt_transient ?? 0)?.['desc'])];
  if (((s as any).evt_transient ?? 0)?.['verbose'] === 1) {
    // TODO-QSP: dynamic text: 'Job accepted, you currently have ' + arrsize('evt_event') + ' jobs assigned to ...
    scene.text('Job accepted, you currently have ' + 0 + ' jobs assigned to you. Please look at your journal for more information.');
    (s as any).evt_transient = undefined;
    scene.actions([
      { label: 'Return', goto: ['jobs_gigs', 'evt_exit'] },
    ]);
  }
  scene.build();
}

function enterEvtExit(s: GameState, scene: SceneBuilder): void {
  dynamicGoto(s, 'prevLoc', 'prevArg');
  scene.build();
}

function enterDispEvt(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDispEvt1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 2) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDispEvt2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 3) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDispEvt3(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  scene.build();
}

function enterDispEvt1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs_gigs', 'job_evt');
  scene.text('I have this job for you do you want to accept it?');
  qspCall(s, 'time', 'to_date', (((s as any).evt_transient ?? 0)?.['event_daystart']));
  // TODO-QSP: "Event Scheduled for: <<dateVars['day']>><<$dateVars['suffix']>>, <<$dateVars['monthName']>> <<dateV...
  scene.text('Job: ' + qspUntranslated(s, "evt_job[evt_transient['type']]", { location: "jobs_gigs" }));
  scene.text('Pay: ' + qspFunc(s, 'money', 'format', (((s as any).evt_transient ?? 0)?.['wage'] ?? '')));
  (s as any).temp_disp_time = ((((s as any).evt_transient ?? {})?.['start_time'] ?? 0) + 15) / 30 * 30;
  scene.text('Time: ' + qspFunc(s, 'time', 'get_time_string', ((s as any).temp_disp_time ?? '') / 60, ((s as any).temp_disp_time ?? '') % 60));
  scene.text('Duration: ' + (((s as any).evt_transient ?? {})?.['duration'] ?? 0) / 60 + ((((s as any).evt_transient ?? 0)?.['duration'] < 120) ? (' hour') : (' hours')));
  scene.text('Location: ' + (((s as any).evt_transient ?? 0)?.['journal'] ?? ''));
  scene.text('Job Details: ' + (((s as any).evt_transient ?? 0)?.['desc'] ?? ''));
  (s as any).temp_disp_time = undefined;
  (s as any).dateVars = undefined;
  scene.actions([
    { label: 'Accept the job', handler: (st: GameState) => {
    qspCall(st, 'jobs_gigs', '');
  } },
    { label: 'Decline the job', handler: (st: GameState) => {
    (st as any).evt_transient = undefined;
    qspGoto(st, 'jobs_gigs', 'evt_exit');
  } },
  ]);
  scene.build();
}

function enterDispEvt2(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).evt_event ?? {}).length > 0) {
    (s as any).evtbody = undefined;
    qspCall(s, 'jobs_gigs', 'job_evt');
    (s as any).job_idx = 0;
    do {
      if (((s as any).evt_verbose ?? 0)?.[String((s as any).job_idx ?? 0)] === 1) {
        qspCall(s, 'time', 'to_date', (((s as any).evt_daystart ?? 0)?.[String((s as any).job_idx ?? 0)] ?? 0));
        (s as any).evtbody = ((s as any).evtbody ?? 0) + ('<tr>');
        (s as any).evtbody = ((s as any).evtbody ?? 0) + ('<td>' + (((s as any).dateVars ?? 0)?.['weekName']) + ' ' + (((s as any).dateVars ?? 0)?.['day']) + '' + (((s as any).dateVars ?? 0)?.['suffix']) + ', ' + (((s as any).dateVars ?? 0)?.['monthName']) + ' ' + (((s as any).dateVars ?? 0)?.['year']) + '</td>');
        (s as any).evtbody = ((s as any).evtbody ?? 0) + ('<td>' + qspUntranslated(s, "evt_job[evt_event[job_idx]]", { location: "jobs_gigs" }) + '</td>');
        (s as any).evtbody = ((s as any).evtbody ?? 0) + ('<td>' + qspFunc(s, 'money', 'format', (((s as any).evt_wages ?? 0)?.[String((s as any).job_idx ?? 0)] ?? 0)) + '</td>');
        (s as any).temp_disp_time = ((((s as any).evt_starttime ?? 0)?.[String((s as any).job_idx ?? 0)] ?? 0) + 15) / 30 * 30;
        (s as any).evtbody = ((s as any).evtbody ?? 0) + ('<td>\' + $func(\'time\', \'get_time_string\', temp_disp_time / 60, temp_disp_time mod 60) + \'</td>');
        (s as any).evtbody = ((s as any).evtbody ?? 0) + ('<td>\' + evt_duration[job_idx] / 60 + iif(evt_duration[job_idx] < 120, \' hour\', \' hours\') + \'</td>');
        (s as any).evtbody = ((s as any).evtbody ?? 0) + ('<td>' + (((s as any).evt_journal ?? 0)?.[String((s as any).job_idx ?? 0)] ?? 0) + '</td>');
        (s as any).evtbody = ((s as any).evtbody ?? 0) + ('<td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027jobs_gigs\u0027, \u0027del_evt\u0027, String((s as any).job_idx ?? \u0027\u0027)); return false;"><img src="images/system/icons/evt_del.png"></a></td>');
        (s as any).evtbody = ((s as any).evtbody ?? 0) + ('</tr>');
      }
      (s as any).job_idx = ((s as any).job_idx ?? 0) + (1);
      (s as any).temp_disp_time = undefined;
      (s as any).dateVars = undefined;
      if (((s as any).evtbody ?? 0) !== '') {
        scene.text('<center><h2>Current Task List</h2></center>');
        (s as any).evtheader = '<tr><th>Date</th><th>Task</th><th>Pay</th><th>Time</th><th>Duration</th><th>Location</th><th>Cancel Job</th></tr>';
        scene.text(`<center><table width="90%" align="center" width="90%" cellspacing="5" cellpadding="5" valign="top">${((s as any).evtheader ?? '')}${((s as any).evtbody ?? '')}</table></center>`);
        (s as any).evtbody = undefined;
        (s as any).evtheader = undefined;
      } else {
        scene.text('You haven\'t taken on any jobs yet.');
      }
    } while (((s as any).job_idx ?? 0) < Object.keys((s as any).evt_event ?? {}).length);
  }
  scene.build();
}

function enterDispEvt3(s: GameState, scene: SceneBuilder): void {
  (s as any).act_tracker = 0;
  do {
    if (((s as any).daystart ?? 0) === ((s as any).evt_daystart ?? 0)?.[String((s as any).act_tracker ?? 0)]) {
      if (((s as any).loc ?? 0) === ((s as any).evt_loc ?? 0)?.[String((s as any).act_tracker ?? 0)]  &&  ((s as any).loc_arg ?? 0) === ((s as any).evt_loc_arg ?? 0)?.[String((s as any).act_tracker ?? 0)]) {
        if (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0) > ((s as any).evt_starttime ?? 0)?.[String((s as any).act_tracker ?? 0)] - 60  &&  ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0) <= ((s as any).evt_starttime ?? 0)?.[String((s as any).act_tracker ?? 0)]) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).act_tracker ?? 0)]; enterSetEventAct(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
    (s as any).act_tracker = ((s as any).act_tracker ?? 0) + (1);
    (s as any).act_tracker = undefined;
  } while (((s as any).act_tracker ?? 0) < Object.keys((s as any).evt_event ?? {}).length);
  scene.build();
}

function enterSetEventAct(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs_gigs', 'job_evt');
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Attend your ' + String(qspUntranslated(s, "evt_job[evt_event[ARGS[1]]]", { location: "jobs_gigs" }) ?? '') + ' event', handler: (st: GameState) => {
    qspCall(st, 'jobs_gigs', 'array_init', ((st as any).locArgs?.[1] ?? 0));
    qspCall(st, 'jobs_gigs', 'del_evt2', ((st as any).locArgs?.[1] ?? 0));
    if (((st as any).evt_content_code ?? 0)[String((st as any).locArgs?.[1] ?? '')] !== '') {
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_event':
      enterSetEvent(s, scene);
      break;
    case 'set_loc_code':
      enterSetLocCode(s, scene);
      break;
    case 'set_wage_scale':
      enterSetWageScale(s, scene);
      break;
    case 'generate_event_schedule':
      enterGenerateEventSchedule(s, scene);
      break;
    case 'save_evt_event':
      enterSaveEvtEvent(s, scene);
      break;
    case 'evt_exit':
      enterEvtExit(s, scene);
      break;
    case 'disp_evt':
      enterDispEvt(s, scene);
      break;
    case 'disp_evt1':
      enterDispEvt1(s, scene);
      break;
    case 'disp_evt2':
      enterDispEvt2(s, scene);
      break;
    case 'disp_evt3':
      enterDispEvt3(s, scene);
      break;
    case 'set_event_act':
      enterSetEventAct(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const jobs_gigs: LocationDef = {
  name: 'jobs_gigs',
  title: 'I have this job for you do you want to accept it?',
  region: 'other',
  enter: enter,
};
