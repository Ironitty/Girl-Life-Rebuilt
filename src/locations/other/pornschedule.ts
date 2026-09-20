import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterOnBookingMiss(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_obm_job = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_obm_data = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_obm_film_type = parseFloat(((s as any).temp_obm_data ?? 0));
  (s as any).pornmiss = 1;
  (s as any).missedshoot = 0;
  if (((s as any).temp_obm_film_type ?? 0) > 0) {
    (s as any).temp_obm_cost = ((s as any).pcash ?? 0) * 10;
  } else {
    (s as any).temp_obm_cost = 500;
  }
  ((s as any).job_booking_debt = (s as any).job_booking_debt ?? {})[String((s as any).temp_obm_job ?? 0)] = ((s as any).job_booking_debt[String((s as any).temp_obm_job ?? 0)] ?? 0) + (((s as any).temp_obm_cost ?? 0));
  ((s as any).job_last_miss_cost = (s as any).job_last_miss_cost ?? {})[String((s as any).temp_obm_job ?? 0)] = ((s as any).temp_obm_cost ?? 0);
  if (((s as any).job_booking_debt ?? 0)?.[String((s as any).temp_obm_job ?? 0)] > ((s as any).job_penalty_max_debt ?? 0)?.[String((s as any).temp_obm_job ?? 0)]) {
    // TODO-QSP: $job_termination_reason[$temp_obm_job] = 'blacklisted'
    qspCall(s, 'jobs', 'set_fired', ((s as any).temp_obm_job ?? 0));
    (s as any).pfilmNO = 1;
  }
  // TODO-QSP: end
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
  ((s as any).job_booking_debt = (s as any).job_booking_debt ?? {})['city_pornstudio_actress'] = ((s as any).job_booking_debt['city_pornstudio_actress'] ?? 0) + (((s as any).temp_pm_cost ?? 0));
  ((s as any).job_last_miss_cost = (s as any).job_last_miss_cost ?? {})['city_pornstudio_actress'] = ((s as any).temp_pm_cost ?? 0);
  if (((s as any).job_booking_debt ?? 0)?.['city_pornstudio_actress'] > ((s as any).job_penalty_max_debt ?? 0)?.['city_pornstudio_actress']) {
    ((s as any).job_termination_reason = (s as any).job_termination_reason ?? {})['city_pornstudio_actress'] = 'blacklisted';
    qspCall(s, 'jobs', 'set_fired', 'city_pornstudio_actress');
    (s as any).pfilmNO = 1;
  }
  // TODO-QSP: end
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
  if (((s as any).porntaken ?? 0)[((s as any).days ?? 0)+1 + ',' + ((s as any).porns ?? 0)] === 0  &&  ((s as any).days ?? 0) >= 14) {
    if ((Math.floor(Math.random() * 100) + 1) === 1) {
      ((s as any).pornplan = (s as any).pornplan ?? {})[String(((s as any).days ?? 0)+1) + ',' + String(((s as any).porns ?? 0))] = 0;
    }
  }
  if (((s as any).days ?? 0) === ((s as any).job_booking_window_days ?? 0)?.['city_pornstudio_actress']  ||  ((s as any).pornplan ?? 0)[((s as any).days ?? 0)+1 + ',' + ((s as any).porns ?? 0)] === 0) {
    (s as any).pornvariable = (Math.floor(Math.random() * 91) + 0);
    if (((s as any).pornvariable ?? 0) <= 1) {
      ((s as any).pornplan = (s as any).pornplan ?? {})[String(((s as any).days ?? 0)+1) + ',' + String(((s as any).porns ?? 0))] = 14;
    } else {
      if (((s as any).pornvariable ?? 0) <= 10) {
        ((s as any).pornplan = (s as any).pornplan ?? {})[String(((s as any).days ?? 0)+1) + ',' + String(((s as any).porns ?? 0))] = (Math.floor(Math.random() * 4) + 10);
      } else {
        if (((s as any).pornvariable ?? 0) <= 30) {
          ((s as any).pornplan = (s as any).pornplan ?? {})[String(((s as any).days ?? 0)+1) + ',' + String(((s as any).porns ?? 0))] = (Math.floor(Math.random() * 2) + 8);
        } else {
          if (((s as any).pornvariable ?? 0) <= 60) {
            ((s as any).pornplan = (s as any).pornplan ?? {})[String(((s as any).days ?? 0)+1) + ',' + String(((s as any).porns ?? 0))] = (Math.floor(Math.random() * 7) + 1);
          } else {
            if (((s as any).pornvariable ?? 0) <= 80) {
              ((s as any).pornplan = (s as any).pornplan ?? {})[String(((s as any).days ?? 0)+1) + ',' + String(((s as any).porns ?? 0))] = (Math.floor(Math.random() * 6) + 15);
            } else {
              ((s as any).pornplan = (s as any).pornplan ?? {})[String(((s as any).days ?? 0)+1) + ',' + String(((s as any).porns ?? 0))] = 15;
            }
          }
        }
      }
    }
  }
  ((s as any).pornplan = (s as any).pornplan ?? {})[String(((s as any).days ?? 0)) + ',' + String(((s as any).porns ?? 0))] = ((s as any).pornplan ?? 0)?.[String(((s as any).days ?? 0)+1) + ',' + String(((s as any).porns ?? 0))];
  ((s as any).porntaken = (s as any).porntaken ?? {})[String(((s as any).days ?? 0)) + ',' + String(((s as any).porns ?? 0))] = ((s as any).porntaken ?? 0)?.[String(((s as any).days ?? 0)+1) + ',' + String(((s as any).porns ?? 0))];
  if (((s as any).porntaken ?? 0)[((s as any).days ?? 0) + ',' + ((s as any).porns ?? 0)] === 0) {
    if ((Math.floor(Math.random() * (((s as any).days ?? 0)*3/2 - 1 + 1)) + (1)) === 1) {
      ((s as any).porntaken = (s as any).porntaken ?? {})[String(((s as any).days ?? 0)) + ',' + String(((s as any).porns ?? 0))] = 1;
    }
  }
  if (((s as any).porntaken ?? 0)[((s as any).days ?? 0) + ',' + ((s as any).porns ?? 0)] === 1) {
    if ((Math.floor(Math.random() * 100) + 1) === 1) {
      ((s as any).porntaken = (s as any).porntaken ?? {})[String(((s as any).days ?? 0)) + ',' + String(((s as any).porns ?? 0))] = 0;
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
  (s as any).temp_sched_tail = ((((s as any).job_booking_window_days ?? {})?.['city_pornstudio_actress'] ?? 0) + 1) * 4;
  // TODO-QSP: end
  scene.build();
}

function enterPornTypeSelector(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_edit_day = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_edit_session = ((s as any).locArgs?.[2] ?? 0);
  // TODO-QSP: dynamic text: Select new porn type for #<<temp_edit_session+1>> on the <<$ARGS[3]>>:
  scene.text(`Select new porn type for #${((s as any).temp_edit_session ?? '')+1} on the ${((s as any).locArgs?.[3] ?? '')}:`);
  // TODO-QSP: dynamic text: Current: <<$porndesc[pornplan[''<<temp_edit_day>>,<<temp_edit_session>>'']]>>
  scene.text(`Current: ${qspUntranslated(s, "porndesc[pornplan['<<temp_edit_day", { location: "pornschedule" })},${((s as any).temp_edit_session ?? '')}']]>>`);
  (s as any).type_i = 1;
  (s as any).num_types = 0;
  // TODO-QSP: :type_loop
  if (((s as any).type_i ?? 0) <= ((s as any).num_types ?? 0)) {
    if (((s as any).type_i ?? 0) === ((s as any).pornplan ?? 0)[((s as any).temp_edit_day ?? 0) + ',' + ((s as any).temp_edit_session ?? 0)]) {
      (s as any).selector_html = '<b><font color="yellow">';
    }
    // TODO-QSP: $selector_html += '<a href="exec:pornplan[''<<temp_edit_day>>,<<temp_edit_session>>''] = <<type_i>> ...
    if (((s as any).type_i ?? 0) === ((s as any).pornplan ?? 0)[((s as any).temp_edit_day ?? 0) + ',' + ((s as any).temp_edit_session ?? 0)]) {
      // TODO-QSP: $selector_html += ' (Current)</font></b>'
    }
    // TODO-QSP: $selector_html
    (s as any).type_i = ((s as any).type_i ?? 0) + (1);
    // TODO-QSP: jump 'type_loop'
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Cancel', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterDoContract(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_dc_offset = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_dc_slot = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_dc_film_type = ((s as any).pornplan ?? 0)?.[String(((s as any).temp_dc_offset ?? 0)) + ',' + String(((s as any).temp_dc_slot ?? 0))];
  (s as any).temp_dc_daystart = ((s as any).daystart ?? 0) + ((s as any).temp_dc_offset ?? 0);
  (s as any).temp_dc_result = qspFunc(s, 'jobs', 'book_slot', 'city_pornstudio_actress', ((s as any).temp_dc_daystart ?? 0), ((s as any).temp_dc_slot ?? 0), String(((s as any).temp_dc_film_type ?? 0)));
  if (((s as any).temp_dc_result ?? 0) === 1) {
    // TODO-QSP: porntaken[$str(temp_dc_offset) + ',' + $str(temp_dc_slot)] = 2
    (s as any).temp_dc_event_id = 'job_booking_city_pornstudio_actress_' + String(((s as any).temp_dc_daystart ?? 0)) + '_' + String(((s as any).temp_dc_slot ?? 0));
    if (((s as any).event_desc ?? 0)?.[String((s as any).temp_dc_event_id ?? 0)] !== '') {
      // TODO-QSP: $event_desc[$temp_dc_event_id] = $porndesc[temp_dc_film_type]
    }
  }
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterContracting(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoCancel(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_cc_offset = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_cc_slot = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_cc_daystart = ((s as any).daystart ?? 0) + ((s as any).temp_cc_offset ?? 0);
  qspCall(s, 'jobs', 'cancel_booking', 'city_pornstudio_actress', ((s as any).temp_cc_daystart ?? 0), ((s as any).temp_cc_slot ?? 0));
  // TODO-QSP: porntaken[$str(temp_cc_offset) + ',' + $str(temp_cc_slot)] = 0
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCanceling(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterContracting(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pornstudio', 'options');
  scene.img('images/locations/city/redlight/studio_porn/studia_0.jpg');
  scene.text('');
  qspCall(s, 'jobs', 'get_job_definition', 'city_pornstudio_actress');
  (s as any).d1 = ((s as any).day ?? 0);
  (s as any).w1 = ((s as any).week ?? 0);
  (s as any).m1 = ((s as any).month ?? 0);
  (s as any).ps_i = 1;
  (s as any).pornofday = '';
  // TODO-QSP: :pornopt
  ((s as any).pcount = (s as any).pcount ?? {})[String((s as any).ps_i ?? 0)] = ((s as any).ps_i ?? 0);
  (s as any).w1 = ((s as any).w1 ?? 0) + (1);
  if (((s as any).w1 ?? 0) > 7) {
    (s as any).w1 = 1;
  }
  (s as any).d1 = ((s as any).d1 ?? 0) + (1);
  if (((s as any).monthsend ?? 0)?.[String((s as any).m1 ?? 0)] < ((s as any).d1 ?? 0)) {
    (s as any).m1 = ((s as any).m1 ?? 0) + (1);
    (s as any).d1 = 1;
  }
  if (((s as any).m1 ?? 0) > 12) {
    (s as any).m1 = 1;
  }
  if (((s as any).m1 ?? 0) === 1  &&  ((s as any).d1 ?? 0) >= 1  &&  ((s as any).d1 ?? 0) <= 8) {
    (s as any).nh1 = 1;
  }
  if (((s as any).m1 ?? 0) === 2  &&  ((s as any).d1 ?? 0) === 23) {
    (s as any).nh1 = 1;
  }
  if (((s as any).m1 ?? 0) === 3  &&  ((s as any).d1 ?? 0) === 8) {
    (s as any).nh1 = 1;
  }
  if (((s as any).m1 ?? 0) === 5  &&  (((s as any).d1 ?? 0) === 1  ||  ((s as any).d1 ?? 0) === 2)) {
    (s as any).nh1 = 1;
  }
  if (((s as any).m1 ?? 0) === 5  &&  ((s as any).d1 ?? 0) === 9) {
    (s as any).nh1 = 1;
  }
  if (((s as any).m1 ?? 0) === 6  &&  (((s as any).d1 ?? 0) === 12  ||  ((s as any).d1 ?? 0) === 13)) {
    (s as any).nh1 = 1;
  }
  if (((s as any).m1 ?? 0) === 11  &&  ((s as any).d1 ?? 0) === 4) {
    (s as any).nh1 = 1;
  }
  if ((((s as any).weekdayfilter ?? 0) === 1  &&  ((s as any).w1 ?? 0) >= 6)  ||  (((s as any).weekendfilter ?? 0) === 1  &&  ((s as any).w1 ?? 0) < 6)  ||  (((s as any).weekdayfilter ?? 0) === 0  &&  ((s as any).weekendfilter ?? 0) === 0)  ||  ((s as any).nh1 ?? 0) === 1) {
    if (((s as any).datefilter ?? 0)[((s as any).selected ?? 0)?.[String((s as any).ps_i ?? 0)]] === 0) {
      if (((s as any).nh1 ?? 0) === 1) {
        (s as any).pornofday = '<i><b>National holiday, no shootings!</b></i><br>';
      } else {
        (s as any).porns = 0;
        (s as any).temp_ps_daystart = ((s as any).daystart ?? 0) + ((s as any).ps_i ?? 0);
        (s as any).temp_ps_conflict = qspFunc(s, 'jobs', 'check_booking_conflict', 'city_pornstudio_actress', ((s as any).temp_ps_daystart ?? 0));
        (s as any).temp_ps_gap = qspFunc(s, 'jobs', 'check_booking_gap', 'city_pornstudio_actress', ((s as any).temp_ps_daystart ?? 0));
        qspCall(s, 'jobs', 'get_job_definition', 'city_pornstudio_actress');
        // TODO-QSP: :pornplanloop
        (s as any).temp_hour = qspFunc(s, 'time', 'get_time_string', (((s as any).job_slot_start ?? {})?.['city_pornstudio_actress, '] ?? 0) / 60, 0);
        if ((((s as any).pfactor ?? 0) <= ((s as any).ppnum ?? 0))  ||  (((s as any).ppnum ?? 0) === 0)) {
          if (((s as any).cheatVars ?? 0)?.['edit_porn'] === 1) {
            (s as any).edit_button = ' <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027porn_type_selector/u0027); return false;">[Edit]</a>';
            (s as any).cheat_force = ' <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027do_contract/u0027); return false;">[Force]</a>';
            (s as any).cheat_steal = ' <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027do_contract/u0027); return false;">[Steal]</a>';
          }
          (s as any).temp_pc_booking = qspFunc(s, 'jobs', 'get_booking_data', 'city_pornstudio_actress', ((s as any).temp_ps_daystart ?? 0), ((s as any).porns ?? 0));
          if (((s as any).temp_pc_booking ?? 0) !== '') {
            // TODO-QSP: $pornofday += '<<$temp_hour>>: ' + $func('wrap', 'v_pos', '<b><<$porndesc[pornplan[''<<ps_i>>,<<porn...
          } else {
            if (((s as any).porntaken ?? 0)[((s as any).ps_i ?? 0) + ',' + ((s as any).porns ?? 0)] === 1) {
              if (qspFunc(s, 'jobs', 'has_booking_for_day', 'city_pornstudio_actress', ((s as any).daystart ?? 0) + ((s as any).ps_i ?? 0)) === 1) {
                // TODO-QSP: $pornofday += '<<$temp_hour>>: ' + $func('wrap', 'neg', '<<$porndesc[pornplan[''<<ps_i>>,<<porns>>''...
              } else {
                // TODO-QSP: $pornofday += '<<$temp_hour>>: ' + $func('wrap', 'neg', '<<$porndesc[pornplan[''<<ps_i>>,<<porns>>''...
              }
            } else {
              if (((s as any).job_bookings_active ?? 0)?.['city_pornstudio_actress'] < ((s as any).job_booking_max_concurrent ?? 0)?.['city_pornstudio_actress']  &&  ((s as any).temp_ps_conflict ?? 0) === 0  &&  (!((s as any).temp_ps_gap ?? 0))) {
                // TODO-QSP: $pornofday += '<<$temp_hour>>: <a href="exec:gs ''pornschedule'', ''do_contract'', <<ps_i>>, <<porns...
              } else {
                if (((s as any).temp_ps_gap ?? 0) === 1) {
                  // TODO-QSP: $pornofday += '<<$temp_hour>>: <font color="grey"><<$porndesc[pornplan[''<<ps_i>>,<<porns>>'']]>> - ...
                } else {
                  if (((s as any).temp_ps_conflict ?? 0) === 1) {
                    // TODO-QSP: $pornofday += '<<$temp_hour>>: <font color="grey"><<$porndesc[pornplan[''<<ps_i>>,<<porns>>'']]>> - ...
                  } else {
                    // TODO-QSP: $pornofday += '<<$temp_hour>>: <font color="grey"><<$porndesc[pornplan[''<<ps_i>>,<<porns>>'']]>><<$...
                  }
                }
              }
            }
          }
        }
        (s as any).porns = ((s as any).porns ?? 0) + (1);
        if (((s as any).porns ?? 0) < 4) {
          // TODO-QSP: jump 'pornplanloop'
        }
      }
      if (((s as any).pornofday ?? 0) !== '') {
        // TODO-QSP: dynamic text: <<$monthName[m1]>> <<d1>>, <<$weekName[w1]>>: 
        scene.text(`${((s as any).monthName ?? 0)?.[String((s as any).m1 ?? 0)] ?? ''} ${((s as any).d1 ?? '')}, ${((s as any).weekName ?? 0)?.[String((s as any).w1 ?? 0)] ?? ''}: `);
        // TODO-QSP: dynamic text: <<$pornofday>>
        scene.text(`${((s as any).pornofday ?? '')}`);
        (s as any).pornofday = '';
      }
    }
  }
  (s as any).ps_i = ((s as any).ps_i ?? 0) + (1);
  if (((s as any).ps_i ?? 0) < ((s as any).job_booking_window_days ?? 0)?.['city_pornstudio_actress'] + 1) {
    // TODO-QSP: jump 'pornopt'
  }
  // TODO-QSP: end
  scene.build();
}

function enterCanceling(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/redlight/studio_porn/studia_0.jpg');
  qspCall(s, 'jobs', 'get_job_definition', 'city_pornstudio_actress');
  (s as any).d1 = ((s as any).day ?? 0);
  (s as any).w1 = ((s as any).week ?? 0);
  (s as any).m1 = ((s as any).month ?? 0);
  (s as any).ps_i = 1;
  // TODO-QSP: :nopornopt
  ((s as any).pcount = (s as any).pcount ?? {})[String((s as any).ps_i ?? 0)] = ((s as any).ps_i ?? 0);
  (s as any).w1 = ((s as any).w1 ?? 0) + (1);
  if (((s as any).w1 ?? 0) > 7) {
    (s as any).w1 = 1;
  }
  (s as any).d1 = ((s as any).d1 ?? 0) + (1);
  if (((s as any).monthsend ?? 0)?.[String((s as any).m1 ?? 0)] < ((s as any).d1 ?? 0)) {
    (s as any).m1 = ((s as any).m1 ?? 0) + (1);
    (s as any).d1 = 1;
  }
  (s as any).temp_nc_daystart = ((s as any).daystart ?? 0) + ((s as any).ps_i ?? 0);
  if (qspFunc(s, 'jobs', 'has_booking_for_day', 'city_pornstudio_actress', ((s as any).temp_nc_daystart ?? 0)) === 1) {
    // TODO-QSP: dynamic text: <<$monthName[m1]>> <<d1>>, <<$weekName[w1]>>: 
    scene.text(`${((s as any).monthName ?? 0)?.[String((s as any).m1 ?? 0)] ?? ''} ${((s as any).d1 ?? '')}, ${((s as any).weekName ?? 0)?.[String((s as any).w1 ?? 0)] ?? ''}: `);
  }
  (s as any).porns = 0;
  // TODO-QSP: :nopornplanloop
  (s as any).temp_nc_booking = qspFunc(s, 'jobs', 'get_booking_data', 'city_pornstudio_actress', ((s as any).temp_nc_daystart ?? 0), ((s as any).porns ?? 0));
  if (((s as any).temp_nc_booking ?? 0) !== '') {
    // TODO-QSP: dynamic text: <a href="exec:gs ''pornschedule'', ''do_cancel'', <<ps_i>>, <<porns>>"><<$pornde...
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027do_cancel/u0027); return false;">${((s as any).porndesc ?? 0)?.[parseFloat(((s as any).temp_nc_booking ?? ''))]}</a>`);
  }
  (s as any).porns = ((s as any).porns ?? 0) + (1);
  if (((s as any).porns ?? 0) < 4) {
    // TODO-QSP: jump 'nopornplanloop'
  }
  (s as any).ps_i = ((s as any).ps_i ?? 0) + (1);
  if (((s as any).ps_i ?? 0) < ((s as any).job_booking_window_days ?? 0)?.['city_pornstudio_actress'] + 1) {
    // TODO-QSP: jump 'nopornopt'
  }
  // TODO-QSP: end
  scene.build();
}

function enterDisplaynum(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/redlight/studio_porn/studia_0.jpg');
  scene.text('<font color="grey">The movies above the selected number of partners will not be displayed</color><br>');
  if (((s as any).ppnum ?? 0) === 1) {
    (s as any).pp1 = '<b><font color="red" size=8>1</font></b>';
  } else {
    (s as any).pp1 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.ppnum = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027displaynum/u0027); return false;"><font size=8>1</font></a>';
  }
  if (((s as any).ppnum ?? 0) === 2) {
    (s as any).pp2 = '<b><font color="red" size=8>2</font></b>';
  } else {
    (s as any).pp2 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.ppnum = s.2; return s; }); window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027displaynum/u0027); return false;"><font size=8>2</font></a>';
  }
  if (((s as any).ppnum ?? 0) === 3) {
    (s as any).pp3 = '<b><font color="red" size=8>3</font></b>';
  } else {
    (s as any).pp3 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.ppnum = s.3; return s; }); window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027displaynum/u0027); return false;"><font size=8>3</font></a>';
  }
  if (((s as any).ppnum ?? 0) === 4) {
    (s as any).pp4 = '<b><font color="red" size=8>4</font></b>';
  } else {
    (s as any).pp4 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.ppnum = s.4; return s; }); window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027displaynum/u0027); return false;"><font size=8>4</font></a>';
  }
  if (((s as any).ppnum ?? 0) === 5) {
    (s as any).pp5 = '<b><font color="red" size=8>5</font></b>';
  } else {
    (s as any).pp5 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.ppnum = s.5; return s; }); window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027displaynum/u0027); return false;"><font size=8>5</font></a>';
  }
  // TODO-QSP: dynamic text: <table border=0 cellspacing=10><tr><th><<$pp1>></th><th><<$pp2>></th><th><<$pp3>...
  scene.text(`<table border=0 cellspacing=10><tr><th>${((s as any).pp1 ?? '')}</th><th>${((s as any).pp2 ?? '')}</th><th>${((s as any).pp3 ?? '')}</th><th>${((s as any).pp4 ?? '')}</th><th>${((s as any).pp5 ?? '')}</th></tr>`);
  scene.text('');
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: killvar /u0027ppnum/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027displaynum/u0027); return false;">Clear participant limitations</a>');
  // TODO-QSP: end
  scene.build();
}

function enterSelection(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/redlight/studio_porn/studia_0.jpg');
  scene.text('<font color="grey">The selected days will not be displayed</font><br>');
  (s as any).m1 = ((s as any).month ?? 0);
  (s as any).d1 = ((s as any).day ?? 0) + 1;
  if (((s as any).monthsend ?? 0)?.[String((s as any).m1 ?? 0)] < ((s as any).d1 ?? 0)) {
    (s as any).m1 = ((s as any).m1 ?? 0) + (1);
    (s as any).d1 = 1;
  }
  if (((s as any).m1 ?? 0) > 12) {
    (s as any).m1 = 1;
  }
  (s as any).w2 = ((s as any).week ?? 0) + 1;
  if (((s as any).w2 ?? 0) > 7) {
    (s as any).w2 = 1;
  }
  (s as any).p1 = 1;
  (s as any).w1 = 1;
  // TODO-QSP: :monthloop
  // TODO-QSP: dynamic text: <table border=0 cellpadding=1><tr><th colspan=7><b><i><font size=6 color="brown"...
  scene.text(`<table border=0 cellpadding=1><tr><th colspan=7><b><i><font size=6 color="brown">${((s as any).monthName ?? 0)?.[String((s as any).m1 ?? 0)] ?? ''}</font></i></b></th></tr>`);
  scene.text('<tr align="center"><th>   Monday    </th><th>   Tuesday   </th><th>Wednesday</th><th>  Thursday   </th><th>     Friday     </th><th>  Saturday   </th><th>    Sunday    </th></tr>');
  // TODO-QSP: :weekloop
  ((s as any).selected = (s as any).selected ?? {})[String((s as any).p1 ?? 0)] = ((s as any).p1 ?? 0);
  if (((s as any).w1 ?? 0) === 1) {
    scene.text('<tr>');
  }
  if (((s as any).w2 ?? 0) !== 1) {
    if (((s as any).w2 ?? 0) === 7) {
      (s as any).w1 = 7;
      scene.text('<td></td><td></td><td></td><td></td><td></td><td></td>');
    } else {
      if (((s as any).w2 ?? 0) === 6) {
        (s as any).w1 = 6;
        scene.text('<td></td><td></td><td></td><td></td><td></td>');
      } else {
        if (((s as any).w2 ?? 0) === 5) {
          (s as any).w1 = 5;
          scene.text('<td></td><td></td><td></td><td></td>');
        } else {
          if (((s as any).w2 ?? 0) === 4) {
            (s as any).w1 = 4;
            scene.text('<td></td><td></td><td></td>');
          } else {
            if (((s as any).w2 ?? 0) === 3) {
              (s as any).w1 = 3;
              scene.text('<td></td><td></td>');
            } else {
              (s as any).w1 = 2;
              scene.text('<td></td>');
            }
          }
        }
      }
    }
    (s as any).w2 = 1;
  }
  if (((s as any).inversefilter ?? 0) === 1) {
    if (((s as any).datefilter ?? 0)[((s as any).selected ?? 0)?.[String((s as any).p1 ?? 0)]] === 1) {
      ((s as any).datefilter = (s as any).datefilter ?? {})[String(((s as any).selected ?? 0)?.[String((s as any).p1 ?? 0)])] = 0;
    } else {
      ((s as any).datefilter = (s as any).datefilter ?? {})[String(((s as any).selected ?? 0)?.[String((s as any).p1 ?? 0)])] = 1;
    }
  }
  if (((s as any).m1 ?? 0) === 1  &&  ((s as any).d1 ?? 0) >= 1  &&  ((s as any).d1 ?? 0) <= 8) {
    (s as any).nh1 = 1;
  }
  if (((s as any).m1 ?? 0) === 2  &&  ((s as any).d1 ?? 0) === 23) {
    (s as any).nh1 = 1;
  }
  if (((s as any).m1 ?? 0) === 3  &&  ((s as any).d1 ?? 0) === 8) {
    (s as any).nh1 = 1;
  }
  if (((s as any).m1 ?? 0) === 5  &&  (((s as any).d1 ?? 0) === 1  ||  ((s as any).d1 ?? 0) === 2)) {
    (s as any).nh1 = 1;
  }
  if (((s as any).m1 ?? 0) === 5  &&  ((s as any).d1 ?? 0) === 9) {
    (s as any).nh1 = 1;
  }
  if (((s as any).m1 ?? 0) === 6  &&  (((s as any).d1 ?? 0) === 12  ||  ((s as any).d1 ?? 0) === 13)) {
    (s as any).nh1 = 1;
  }
  if (((s as any).m1 ?? 0) === 11  &&  ((s as any).d1 ?? 0) === 4) {
    (s as any).nh1 = 1;
  }
  if (((s as any).nh1 ?? 0) === 1) {
    (s as any).option = '<font color="red"><del><b>' + ((s as any).d1 ?? 0) + '<b></del></font>';
  } else {
    if (qspFunc(s, 'jobs', 'has_booking_for_day', 'city_pornstudio_actress', ((s as any).daystart ?? 0) + ((s as any).p1 ?? 0)) === 1) {
      (s as any).option = qspFunc(s, 'wrap', 'v_pos', '' + ((s as any).d1 ?? 0) + '');
    } else {
      if (((s as any).datefilter ?? 0)[((s as any).selected ?? 0)?.[String((s as any).p1 ?? 0)]] === 1  ||  (((s as any).weekdayfilter ?? 0) === 1  &&  ((s as any).w1 ?? 0) < 6)  ||  (((s as any).weekendfilter ?? 0) === 1  &&  ((s as any).w1 ?? 0) >= 6)) {
        (s as any).option = '<font color="grey"><del>' + ((s as any).d1 ?? 0) + '</del></font>';
      } else {
        (s as any).option = '<a href="#" onclick="window.__gameStore.setState((s) => { (s.datefilter ??= {})/u0027' + ((s as any).selected ?? 0)?.[String((s as any).p1 ?? 0)] + '/u0027 = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027selection/u0027); return false;">' + ((s as any).d1 ?? 0) + '</a>';
      }
    }
  }
  // TODO-QSP: dynamic text: <td align="center"><font size=5><<$option>></font></td>
  scene.text(`<td align="center"><font size=5>${((s as any).option ?? '')}</font></td>`);
  (s as any).d1 = ((s as any).d1 ?? 0) + (1);
  (s as any).p1 = ((s as any).p1 ?? 0) + (1);
  (s as any).w1 = ((s as any).w1 ?? 0) + (1);
  if (((s as any).monthsend ?? 0)?.[String((s as any).m1 ?? 0)] < ((s as any).d1 ?? 0)) {
    scene.text('</tr></table><br>');
    if (((s as any).w1 ?? 0) === 8) {
      (s as any).w1 = 1;
    }
    (s as any).w2 = ((s as any).w1 ?? 0);
    (s as any).w1 = 1;
    (s as any).m1 = ((s as any).m1 ?? 0) + (1);
    if (((s as any).m1 ?? 0) > 12) {
      (s as any).m1 = 1;
    }
    (s as any).d1 = 1;
    if (((s as any).p1 ?? 0) < 50) {
      // TODO-QSP: jump 'monthloop'
    }
  } else {
    if (((s as any).p1 ?? 0) < 50) {
      if (((s as any).w1 ?? 0) === 8) {
        scene.text('</tr>');
        (s as any).w1 = 1;
      }
      // TODO-QSP: jump 'weekloop'
    } else {
      scene.text('</tr></table><br>');
    }
  }
  (s as any).inversefilter = 0;
  scene.text('');
  if ((!((s as any).weekdayfilter ?? 0))) {
    (s as any).weekdayfilter_link = '<a href="#" onclick="window.__gameStore.setState((s) => { s.weekdayfilter = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027selection/u0027); return false;">Remove weekdays</a>';
  } else {
    (s as any).weekdayfilter_link = '<a href="#" onclick="window.__gameStore.setState((s) => { s.weekdayfilter = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027selection/u0027); return false;">Restore weekdays</a>';
  }
  if ((!((s as any).weekendfilter ?? 0))) {
    (s as any).weekendfilter_link = '<a href="#" onclick="window.__gameStore.setState((s) => { s.weekendfilter = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027selection/u0027); return false;">Remove weekends</a>';
  } else {
    (s as any).weekendfilter_link = '<a href="#" onclick="window.__gameStore.setState((s) => { s.weekendfilter = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027selection/u0027); return false;">Restore weekends</a>';
  }
  // TODO-QSP: dynamic text: <<$weekdayfilter_link>> <<$weekendfilter_link>> <a href="exec:inversefilter = 1 ...
  scene.text(`${((s as any).weekdayfilter_link ?? '')} ${((s as any).weekendfilter_link ?? '')} <a href="#" onclick="window.__gameStore.setState((s) => { s.inversefilter = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027selection/u0027); return false;">Inverse selection</a><br>`);
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: killvar /u0027datefilter/u0027 */ /* TODO-QSP: killvar /u0027selected/u0027 */ s.weekdayfilter = s.0; s.weekendfilter = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027pornschedule/u0027, /u0027selection/u0027); return false;">Clear date filters</a>');
  // TODO-QSP: end
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
    case 'porn_type_selector':
      enterPornTypeSelector(s, scene);
      break;
    case 'do_contract':
      enterDoContract(s, scene);
      break;
    case 'do_cancel':
      enterDoCancel(s, scene);
      break;
    case 'contracting':
      enterContracting(s, scene);
      break;
    case 'canceling':
      enterCanceling(s, scene);
      break;
    case 'displaynum':
      enterDisplaynum(s, scene);
      break;
    case 'selection':
      enterSelection(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pornschedule: LocationDef = {
  name: 'pornschedule',
  title: '<b>,\']]>></b> - <i>Already contracted</i><br>',
  region: 'other',
  enter: enter,
};
