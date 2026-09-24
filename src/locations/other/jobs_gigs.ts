import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

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
  // TODO-QSP: end
  scene.build();
}

function enterSetLocCode(s: GameState, scene: SceneBuilder): void {
  ((s as any).evt_transient = (s as any).evt_transient ?? {})['loc'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).evt_transient = (s as any).evt_transient ?? {})['arg'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).evt_transient = (s as any).evt_transient ?? {})['code'] = ((s as any).locArgs?.[3] ?? 0);
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterGenerateEventSchedule(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') !== '') {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['week_string'] = qspUntranslated(s, "ARGS[1]  else evt_transient['week_string']  = '1234567'", { location: "jobs_gigs" });
  }
  if (String((s as any).locArgs?.[2] ?? '') > 0  &&  String((s as any).locArgs?.[2] ?? '') < 1440) {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['duration'] = ((s as any).locArgs?.[2] ?? 0);
  }
  if (String((s as any).locArgs?.[3] ?? '') >= ((s as any).daystart ?? 0)) {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['search_day'] = ((s as any).locArgs?.[3] ?? 0);
  }
  if (String((s as any).locArgs?.[4] ?? '') >= ((s as any).evt_transient ?? 0)?.['search_day']) {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['search_limit'] = ((s as any).locArgs?.[4] ?? 0);
  }
  if (String((s as any).locArgs?.[5] ?? '') > 0  &&  String((s as any).locArgs?.[5] ?? '') < 1440) {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['start_time'] = ((s as any).locArgs?.[5] ?? 0);
  }
  ((s as any).evt_transient = (s as any).evt_transient ?? {})['time_overshoot'] = (((s as any).evt_transient ?? {})?.['duration'] ?? 0) + (((s as any).evt_transient ?? {})?.['start_time'] ?? 0) - 1380;
  if (((s as any).evt_transient ?? 0)?.['time_overshoot'] > 0) {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['start_time'] = ((s as any).evt_transient['start_time'] ?? 0) - ((60 + (((s as any).evt_transient ?? {})?.['time_overshoot'] ?? 0) / 5 * 5));
  }
  // TODO-QSP: :find_open_date_loop
  qspCall(s, 'time', 'to_date', (((s as any).evt_transient ?? 0)?.['search_day']));
  if (((String(((s as any).evt_transient ?? 0)?.['week_string']).indexOf(String(((s as any).dateVars ?? 0)?.['week']))) + 1) <= 0) {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['search_day'] = ((s as any).evt_transient['search_day'] ?? 0) + (1);
    if (((s as any).evt_transient ?? 0)?.['search_day'] <= ((s as any).evt_transient ?? 0)?.['search_limit']) {
      // TODO-QSP: jump 'find_open_date_loop'
    }
  } else {
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['event_daystart'] = (((s as any).evt_transient ?? 0)?.['search_day']);
    ((s as any).evt_transient = (s as any).evt_transient ?? {})['event_dow'] = (((s as any).dateVars ?? 0)?.['week']);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSaveEvtEvent(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: evt_verbose[] = evt_transient['verbose']
  // TODO-QSP: evt_event[] = evt_transient['type']
  // TODO-QSP: evt_event_sub[] = evt_transient['subtype']
  // TODO-QSP: evt_dow[] = evt_transient['event_dow']
  // TODO-QSP: evt_daystart[] = evt_transient['event_daystart']
  // TODO-QSP: evt_starttime[] = evt_transient['start_time']
  // TODO-QSP: evt_duration[] = evt_transient['duration']
  // TODO-QSP: evt_wages[] = evt_transient['wage']
  // TODO-QSP: $evt_journal[] = $evt_transient['journal']
  // TODO-QSP: $evt_loc[] = $evt_transient['loc']
  // TODO-QSP: $evt_loc_arg[] = $evt_transient['arg']
  // TODO-QSP: $evt_content_code[] = $evt_transient['code']
  // TODO-QSP: $evt_desc[] = $evt_transient['desc']
  if (((s as any).evt_transient ?? 0)?.['verbose'] === 1) {
    // TODO-QSP: dynamic text: 'Job accepted, you currently have ' + arrsize('evt_event') + ' jobs assigned to ...
    scene.text('Job accepted, you currently have ' + 0 + ' jobs assigned to you. Please look at your journal for more information.');
    scene.actions([
      { label: 'Return', goto: ['jobs_gigs', 'evt_exit'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterEvtExit(s: GameState, scene: SceneBuilder): void {
  dynamicGoto(s, 'prevLoc', 'prevArg');
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterDispEvt1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs_gigs', 'job_evt');
  scene.text('I have this job for you do you want to accept it?');
  qspCall(s, 'time', 'to_date', (((s as any).evt_transient ?? 0)?.['event_daystart']));
  // TODO-QSP: "Event Scheduled for: <<dateVars['day']>><<$dateVars['suffix']>>, <<$dateVars['monthName']>> <<dateV...
  // TODO-QSP: 'Job: ' + $evt_job[evt_transient['type']]
  // TODO-QSP: 'Pay: ' + $func('money', 'format', evt_transient['wage'])
  (s as any).temp_disp_time = ((((s as any).evt_transient ?? {})?.['start_time'] ?? 0) + 15) / 30 * 30;
  // TODO-QSP: 'Time: ' + $func('time', 'get_time_string', temp_disp_time / 60, temp_disp_time mod 60)
  // TODO-QSP: 'Duration: ' + evt_transient['duration'] / 60 + iif(evt_transient['duration'] < 120, ' hour', ' hour...
  // TODO-QSP: 'Location: ' + $evt_transient['journal']
  // TODO-QSP: 'Job Details: ' + $evt_transient['desc']
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept the job', handler: (st: GameState) => {
    qspCall(st, 'jobs_gigs', '');
  } },
    { label: 'Decline the job', handler: (st: GameState) => {
    qspGoto(st, 'jobs_gigs', 'evt_exit');
  } },
  ]);
  scene.build();
}

function enterDispEvt2(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).evt_event ?? {}).length > 0) {
    qspCall(s, 'jobs_gigs', 'job_evt');
    (s as any).job_idx = 0;
    // TODO-QSP: :jmp_list_create
    if (((s as any).evt_verbose ?? 0)?.[String((s as any).job_idx ?? 0)] === 1) {
      qspCall(s, 'time', 'to_date', (((s as any).evt_daystart ?? 0)?.[String((s as any).job_idx ?? 0)] ?? 0));
      // TODO-QSP: $evtbody +=  '<tr>'
      // TODO-QSP: $evtbody +=    "<td><<$dateVars['weekName']>> <<dateVars['day']>><<$dateVars['suffix']>>, <<$dateVar...
      // TODO-QSP: $evtbody +=    '<td><<$evt_job[evt_event[job_idx]]>></td>'
      // TODO-QSP: $evtbody +=    '<td>' + $func('money', 'format', evt_wages[job_idx]) + '</td>'
      (s as any).temp_disp_time = ((((s as any).evt_starttime ?? 0)?.[String((s as any).job_idx ?? 0)] ?? 0) + 15) / 30 * 30;
      // TODO-QSP: $evtbody +=    '<td>' + $func('time', 'get_time_string', temp_disp_time / 60, temp_disp_time mod 60)...
      // TODO-QSP: $evtbody +=    '<td>' + evt_duration[job_idx] / 60 + iif(evt_duration[job_idx] < 120, ' hour', ' hou...
      // TODO-QSP: $evtbody +=    '<td>' + $evt_journal[job_idx] + '</td>'
      // TODO-QSP: $evtbody +=    '<td><a href="exec: gs ''jobs_gigs'',''del_evt'', <<job_idx>>"><img src="images\syste...
      // TODO-QSP: $evtbody +=  '</tr>'
    }
    (s as any).job_idx = ((s as any).job_idx ?? 0) + (1);
    if (((s as any).job_idx ?? 0) < Object.keys((s as any).evt_event ?? {}).length) {
      // TODO-QSP: jump 'jmp_list_create'
    }
    if (((s as any).evtbody ?? 0) !== '') {
      scene.text('<center><h2>Current Task List</h2></center>');
      (s as any).evtheader = '<tr><th>Date</th><th>Task</th><th>Pay</th><th>Time</th><th>Duration</th><th>Location</th><th>Cancel Job</th></tr>';
      // TODO-QSP: dynamic text: <center><table width="90%" align="center" width="90%" cellspacing="5" cellpaddin...
      scene.text(`<center><table width="90%" align="center" width="90%" cellspacing="5" cellpadding="5" valign="top">${((s as any).evtheader ?? '')}${((s as any).evtbody ?? '')}</table></center>`);
    } else {
      scene.text('You haven\'t taken on any jobs yet.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDispEvt3(s: GameState, scene: SceneBuilder): void {
  (s as any).act_tracker = 0;
  // TODO-QSP: :jmp_act_create
  if (((s as any).daystart ?? 0) === ((s as any).evt_daystart ?? 0)?.[String((s as any).act_tracker ?? 0)]) {
    if (((s as any).loc ?? 0) === ((s as any).evt_loc ?? 0)?.[String((s as any).act_tracker ?? 0)]  &&  ((s as any).loc_arg ?? 0) === ((s as any).evt_loc_arg ?? 0)?.[String((s as any).act_tracker ?? 0)]) {
      if (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0) > ((s as any).evt_starttime ?? 0)?.[String((s as any).act_tracker ?? 0)] - 60  &&  ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0) <= ((s as any).evt_starttime ?? 0)?.[String((s as any).act_tracker ?? 0)]) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).act_tracker ?? 0)]; enterSetEventAct(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  (s as any).act_tracker = ((s as any).act_tracker ?? 0) + (1);
  if (((s as any).act_tracker ?? 0) < Object.keys((s as any).evt_event ?? {}).length) {
    // TODO-QSP: jump 'jmp_act_create'
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetEventAct(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs_gigs', 'job_evt');
  // TODO-QSP: dynamic "
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
