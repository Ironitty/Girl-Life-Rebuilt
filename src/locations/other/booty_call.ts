import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterScheduler(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call', 'booty_call_scheduler');
  // TODO-QSP: end
  scene.build();
}

function enterBootyCallScheduler(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bc_i = 0;
  // TODO-QSP: :bc_sched_loop
  if (((s as any).temp_bc_i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === 'fuckbuddy') {
      qspCall(s, 'telefon', 'ClearInSMSSchedule', ((s as any).temp_bc_id ?? 0));
      qspCall(s, 'booty_call', 'bc_npc_stat_update', ((s as any).temp_bc_id ?? 0));
      if (((s as any).daystart ?? 0) > ((s as any).npc_no_booty_call ?? 0)?.[String((s as any).temp_bc_id ?? 0)]  &&  (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === ((s as any).daystart ?? 0)  ||  (Math.floor(Math.random() * 300) + 0) < (((s as any).npc_rel ?? 0)?.[String((s as any).temp_bc_id ?? 0)] + 20 * ((s as any).npc_sexdrive ?? 0)?.[String((s as any).temp_bc_id ?? 0)]))) {
        qspCall(s, 'booty_call', 'schedule_sms', ((s as any).temp_bc_id ?? 0));
      }
    } else {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === 'sugar_daddy') {
        qspCall(s, 'telefon', 'ClearInSMSSchedule', ((s as any).temp_bc_id ?? 0));
        qspCall(s, 'booty_call', 'bc_npc_stat_update', ((s as any).temp_bc_id ?? 0));
        if (((s as any).daystart ?? 0) > ((s as any).npc_no_booty_call ?? 0)?.[String((s as any).temp_bc_id ?? 0)]  &&  (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === ((s as any).daystart ?? 0)  ||  (Math.floor(Math.random() * 300) + 0) < (((s as any).npc_rel ?? 0)?.[String((s as any).temp_bc_id ?? 0)] + 20 * ((s as any).npc_sexdrive ?? 0)?.[String((s as any).temp_bc_id ?? 0)]))) {
          if (((s as any).daystart ?? 0) >= (((s as any).npc_sugar_daddy_timer ?? 0)?.[String((s as any).temp_bc_id ?? 0)] - (((s as any).npc_rel ?? 0)?.[String((s as any).temp_bc_id ?? 0)] - 40) / 6)) {
            if (!(s as any).sugar_daddy_call) (s as any).sugar_daddy_call = {}; (s as any).sugar_daddy_call[String((s as any).temp_bc_id ?? 0)] = 1;
            qspCall(s, 'booty_call', 'schedule_sms', ((s as any).temp_bc_id ?? 0));
          }
        }
      }
    }
    (s as any).temp_bc_i = ((s as any).temp_bc_i ?? 0) + (1);
    // TODO-QSP: jump 'bc_sched_loop'
  }
  // TODO-QSP: end
  scene.build();
}

function enterScheduleSms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_booty_call ?? 0)[((s as any).locArgs?.[1] ?? 0)] === ((s as any).daystart ?? 0)) {
    // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', $ARGS[1], "gs 'booty_call_sms', 'start', '<<$ARGS[1]>>'", "totminu...
  } else {
    if (((s as any).week ?? 0) === ((s as any).npc_day_off ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
      // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', $ARGS[1], "gs 'booty_call_sms', 'start', '<<$ARGS[1]>>'", "totminu...
    } else {
      if (((s as any).week ?? 0) !== ((s as any).npc_day_off ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
        // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', $ARGS[1], "gs 'booty_call_sms', 'start', '<<$ARGS[1]>>'", "totminu...
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetSugarDaddySchedule(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_sugar_daddy_timer[$ARGS[1]] = daystart + 9 + rand(0, 6)
  // TODO-QSP: end
  scene.build();
}

function enterBcNpcStatUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_start_free_time ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0  ||  ((s as any).npc_day_off ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
      (s as any).temp_bc_rand = Math.floor(Math.random() * 3) + 1;
      if (((s as any).temp_bc_rand ?? 0) === 1) {
        // TODO-QSP: npc_start_free_time[$ARGS[1]] = 9
        // TODO-QSP: npc_end_free_time[$ARGS[1]] = 12
      } else {
        if (((s as any).temp_bc_rand ?? 0) === 2) {
          // TODO-QSP: npc_start_free_time[$ARGS[1]] = 16
          // TODO-QSP: npc_end_free_time[$ARGS[1]] = 20
        } else {
          // TODO-QSP: npc_start_free_time[$ARGS[1]] = 20
          // TODO-QSP: npc_end_free_time[$ARGS[1]] = 23
        }
      }
    } else {
      if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          // TODO-QSP: npc_start_free_time[$ARGS[1]] = 9
          // TODO-QSP: npc_end_free_time[$ARGS[1]] = 12
        } else {
          // TODO-QSP: npc_start_free_time[$ARGS[1]] = 20
          // TODO-QSP: npc_end_free_time[$ARGS[1]] = 23
        }
      } else {
        if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2) {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: npc_start_free_time[$ARGS[1]] = 8
            // TODO-QSP: npc_end_free_time[$ARGS[1]] = 12
            // TODO-QSP: npc_work_start[$ARGS[1]] = 13
            // TODO-QSP: npc_work_end[$ARGS[1]] = 21
          } else {
            // TODO-QSP: npc_start_free_time[$ARGS[1]] = 18
            // TODO-QSP: npc_end_free_time[$ARGS[1]] = 22
            // TODO-QSP: npc_work_start[$ARGS[1]] = 9
            // TODO-QSP: npc_work_end[$ARGS[1]] = 17
          }
          // TODO-QSP: npc_apt_type[$ARGS[1]] = 5
          // TODO-QSP: npc_occupation[$ARGS[1]] = rand(14, 18)
          // TODO-QSP: npc_car[$ARGS[1]] = rand(0, 1)
        }
      }
    }
    // TODO-QSP: npc_day_off[$ARGS[1]] = rand(1, 7)
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetBootyCallDate(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['set_date'] = 1;
  if (((s as any).sex_ev ?? 0)?.['invite_today'] === 1  ||  ((s as any).hour ?? 0) < 5) {
    if (!(s as any).npc_booty_call_date) (s as any).npc_booty_call_date = {}; (s as any).npc_booty_call_date[String((s as any).boy ?? 0)] = ((s as any).daystart ?? 0);
  } else {
    if (((s as any).sex_ev ?? 0)?.['invite_tomorrow'] === 1) {
      if (!(s as any).npc_booty_call_date) (s as any).npc_booty_call_date = {}; (s as any).npc_booty_call_date[String((s as any).boy ?? 0)] = ((s as any).daystart ?? 0) + 1;
    }
  }
  if (((s as any).npc_booty_call_time ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    if (!(s as any).npc_booty_call_time) (s as any).npc_booty_call_time = {}; (s as any).npc_booty_call_time[String((s as any).boy ?? 0)] = ((s as any).npc_start_free_time ?? 0)?.[String((s as any).boy ?? 0)];
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).boy ?? 0)] === 'sugar_daddy') {
    if (!(s as any).sugar_daddy_call) (s as any).sugar_daddy_call = {}; (s as any).sugar_daddy_call[String((s as any).boy ?? 0)] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterBlockBootyCalls(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['invite_today'] === 1) {
    if (!(s as any).npc_booty_call_date) (s as any).npc_booty_call_date = {}; (s as any).npc_booty_call_date[String((s as any).boy ?? 0)] = 0;
    if (!(s as any).npc_no_booty_call) (s as any).npc_no_booty_call = {}; (s as any).npc_no_booty_call[String((s as any).boy ?? 0)] = ((s as any).daystart ?? 0);
    if (!(s as any).npc_booty_call_time) (s as any).npc_booty_call_time = {}; (s as any).npc_booty_call_time[String((s as any).boy ?? 0)] = 0;
  } else {
    if (((s as any).sex_ev ?? 0)?.['invite_tomorrow'] === 1) {
      if (!(s as any).npc_no_booty_call) (s as any).npc_no_booty_call = {}; (s as any).npc_no_booty_call[String((s as any).boy ?? 0)] = ((s as any).daystart ?? 0) + 1;
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGenerateHomeLink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_residence ?? 0)[((s as any).locArgs?.[1] ?? 0)] === ((s as any).loc ?? 0)  &&  ((s as any).npc_residence ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 'uni_grounds') {
    // TODO-QSP: dynamic(' ''<a href="exec: minut += 2 & gt ''''sex_ev_start'''', ''''initiate_pre'''', ''''<<$ARGS[1...
  }
  // TODO-QSP: end
  scene.build();
}

function enterHotelLinks(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bc_i = 0;
  // TODO-QSP: :loop_hotel
  if (((s as any).temp_bc_i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === 'fuckbuddy'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === 'sugar_daddy') {
      // TODO-QSP: gs 'booty_call', 'generate_hotel_link', $lover[temp_bc_i]
    }
    (s as any).temp_bc_i = ((s as any).temp_bc_i ?? 0) + (1);
    // TODO-QSP: jump 'loop_hotel'
  }
  // TODO-QSP: end
  scene.build();
}

function enterGenerateHotelLink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).booty_call_hotel ?? 0)[((s as any).locArgs?.[1] ?? 0)] === ((s as any).region ?? 0)  &&  ((s as any).booty_call_invite ?? 0)[((s as any).locArgs?.[1] ?? 0)] === ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic(' ''<a href="exec: minut += 2 & gt ''''sex_ev_start'''', ''''initiate_pre'''', ''''<<$ARGS[1...
  }
  // TODO-QSP: end
  scene.build();
}

function enterText(s: GameState, scene: SceneBuilder): void {
  scene.text('Your phone buzzes and you pull it out to see what\'s happening. It\'s a text from [boy code here].');
  // TODO-QSP: '  ' + $func('wrap', 'accent b', 'hey <<$pcs_nickname>>')
  scene.text('<b><font color="pink">hey yourself</font></b>');
  scene.text('you text back.');
  // TODO-QSP: '  ' + $func('wrap', 'accent b', 'i was thinking about you today')
  // TODO-QSP: end
  scene.actions([
    { label: 'What about?', handler: (st: GameState) => {
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'i was thinking about you today')
    scene.text('<b><font color="pink">what were you thinking about?</font></b>');
    if (!(s as any).booty_call) (s as any).booty_call = {}; (s as any).booty_call['text'] = Math.floor(Math.random() * 3) + 1;
    if (((s as any).booty_call ?? 0)?.['text'] === 1) {
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'wanted to know if you wanted to come over to my place')
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'have some fun?')
      scene.text('You think you know what kind of fun he wants.');
    } else {
      if (((s as any).booty_call ?? 0)?.['text'] === 2) {
        // TODO-QSP: '  ' + $func('wrap', 'accent b', 'your mouth around my cock')
        scene.text('You think you know what kind of fun he wants.');
      } else {
        if (((s as any).booty_call ?? 0)?.['text'] === 3) {
          // TODO-QSP: '  ' + $func('wrap', 'accent b', 'fucking you on my couch')
          scene.text('You think you know what kind of fun he wants.');
        }
      }
    }
  } },
    { label: 'Me too', handler: (st: GameState) => {
    // TODO-QSP: gt ''
  } },
    { label: 'About fucking me?', handler: (st: GameState) => {
    // TODO-QSP: gt ''
  } },
  ]);
  scene.build();
}

function enterInviteYourself(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterGetInvited(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    scene.text('"Why don\'t you come over to my place right now and we can have some fun?"');
  } else {
    scene.text('"Why don\'t you come over to my place tonight and we can have some fun?"');
  }
  // TODO-QSP: end
  scene.build();
}

function enterText1(s: GameState, scene: SceneBuilder): void {
  scene.text('Your phone buzzes and you pull it out to see what\'s happening. It\'s a text from [boy code here].');
  // TODO-QSP: '  ' + $func('wrap', 'accent b', 'hey <<$pcs_nickname>>')
  scene.text('<b><font color="pink">hey yourself</font></b>');
  scene.text('you text back.');
  // TODO-QSP: '  ' + $func('wrap', 'accent b', 'i was thinking about you today')
  // TODO-QSP: end
  scene.actions([
    { label: 'What about?', handler: (st: GameState) => {
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'i was thinking about you today')
    scene.text('<b><font color="pink">what were you thinking about?</font></b>');
    if (!(s as any).booty_call) (s as any).booty_call = {}; (s as any).booty_call['text'] = Math.floor(Math.random() * 3) + 1;
    if (((s as any).booty_call ?? 0)?.['text'] === 1) {
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'wanted to know if you wanted to come over to my place')
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'have some fun?')
      scene.text('You think you know what kind of fun he wants.');
    } else {
      if (((s as any).booty_call ?? 0)?.['text'] === 2) {
        // TODO-QSP: '  ' + $func('wrap', 'accent b', 'your mouth around my cock')
      } else {
        if (((s as any).booty_call ?? 0)?.['text'] === 3) {
          // TODO-QSP: '  ' + $func('wrap', 'accent b', 'fucking you on my bed')
        }
      }
    }
    qspCall(s, 'booty_call', 'text2');
  } },
    { label: 'Me too', handler: (st: GameState) => {
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'i was thinking about you today')
    scene.text('<b><font color="pink">me too</font></b>');
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'come over')
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'lets fuck like bunnies')
  } },
  ]);
  scene.build();
}

function enterText2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Can\'t', handler: (st: GameState) => {
    scene.text('<b><font color="pink">sorry, I cant</font></b>');
    scene.text('<b><font color="pink">i have stuff to do</font></b>');
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'shit')
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'maybe next time then')
    scene.actions([
      { label: 'Put your phone away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'I\'m on my way', handler: (st: GameState) => {
    scene.text('<b><font color="pink">ill come right now ;)</font></b>');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).boy ?? 0)] === 'perverted') {
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'in the street?')
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'damn!')
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'keep it in your pants till you get here!')
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).boy ?? 0)] === 'intellectual') {
        // TODO-QSP: '  ' + $func('wrap', 'accent b', 'phrasing')
      } else {
        // TODO-QSP: '  ' + $func('wrap', 'accent b', 'my cock is waiting for you')
      }
    }
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'I\'ll swing by later', handler: (st: GameState) => {
    scene.text('<b><font color="pink">not right now</font></b>');
    scene.text('<b><font color="pink">but I can come by later?</font></b>');
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'when?')
    scene.actions([
      { label: 'Pick a time', handler: (st: GameState) => {
    if (!(s as any).npc_meetday) (s as any).npc_meetday = {}; (s as any).npc_meetday[String((s as any).boy ?? 0)] = ((s as any).daystart ?? 0);
    if (!(s as any).npc_meethour) (s as any).npc_meethour = {}; (s as any).npc_meethour[String((s as any).boy ?? 0)] = 0;
    if (((s as any).npc_meethour ?? 0)?.[String((s as any).boy ?? 0)] <= ((s as any).hour ?? 0)  ||  ((s as any).npc_meethour ?? 0)?.[String((s as any).boy ?? 0)] > 23) {
      if (!(s as any).npc_meethour) (s as any).npc_meethour = {}; (s as any).npc_meethour[String((s as any).boy ?? 0)] = 20;
    }
    // TODO-QSP: dynamic text: <b><font color="pink">maybe around <<npc_meethour[$boy]>>:00?</font></b>
    scene.text(`<b><font color="pink">maybe around ${((s as any).npc_meethour ?? 0)?.[String((s as any).boy ?? 0)]}:00?</font></b>`);
    // TODO-QSP: dynamic text: "How about <<npc_meethour[$boy]>>:00?."
    scene.text(`"How about ${((s as any).npc_meethour ?? 0)?.[String((s as any).boy ?? 0)]}:00?."`);
    // TODO-QSP: dynamic text: <<$call4Date["CallerName"]>>, "Okay <<$call4Date["SvetaName"]>>, see you at <<np...
    scene.text(`${((s as any).call4Date ?? 0)?.['CallerName']}, "Okay ${((s as any).call4Date ?? 0)?.['SvetaName']}, see you at ${((s as any).npc_meethour ?? 0)?.[String((s as any).boy ?? 0)]}:00."`);
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterInviteYourself1(s: GameState, scene: SceneBuilder): void {
  scene.text('You tap out a quick message on your and hit send.');
  scene.text('<b><font color="pink">hey</font></b>');
  scene.text('<b><font color="pink">doing anything right now?</font></b>');
  (s as any).temp_bc_rand = Math.floor(Math.random() * 3) + 1;
  if (((s as any).temp_bc_rand ?? 0) === 1) {
    scene.text('You don\'t receive a response. He must be busy.');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    if (((s as any).temp_bc_rand ?? 0) === 2  &&  ((s as any).hour ?? 0) < 18) {
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'im at work')
      scene.actions([
        { label: 'Sorry, never mind', handler: (st: GameState) => {
    scene.text('<b><font color="pink">oh</font></b>');
    scene.text('<b><font color="pink">sorry</font></b>');
    scene.text('<b><font color="pink">never mind</font></b>');
    scene.text('<b><font color="pink">i\'ll text you later</font></b>');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        { label: 'This is a booty call', handler: (st: GameState) => {
    scene.text('<b><font color="pink">when do you get off?</font></b>');
    scene.text('<b><font color="pink">this is a booty call</font></b>');
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'ill probably be free at ' + func('time', 'get_time_string', 19, 0)...
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'wanna come then?')
    qspCall(s, 'booty_call', 'invite_yourself2');
  } },
        { label: 'I wanna fuck', handler: (st: GameState) => {
    scene.text('<b><font color="pink">i wanna fuck</font></b>');
    scene.text('<b><font color="pink">when do you get off?</font></b>');
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'ill probably be free at ' + func('time', 'get_time_string', 19, 0)...
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'wanna come then?')
    qspCall(s, 'booty_call', 'invite_yourself2');
  } },
      ]);
    } else {
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'i was thinking about your naked body in my bed')
      scene.actions([
        { label: 'How about right now?', handler: (st: GameState) => {
    scene.text('<b><font color="pink">then we\'re on the same page</font></b>');
    scene.text('<b><font color="pink">can I come over now?</font></b>');
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'yes')
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'hurry')
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'i want to fuck you right now')
    scene.text('<b><font color="pink">i\'m on my way <3</font></b>');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        { label: 'Can I come later?', handler: (st: GameState) => {
    // TODO-QSP: contMeetHour[call4Date["ContactIndex"]] = input ("When do you want to go over to his place? It is no...
    if (((s as any).contMeetHour ?? 0)[((s as any).call4Date ?? 0)?.['ContactIndex']] <= ((s as any).hour ?? 0)  ||  ((s as any).contMeetHour ?? 0)[((s as any).call4Date ?? 0)?.['ContactIndex']] > 23) {
      // TODO-QSP: contMeetHour[call4Date["ContactIndex"]] = 20
    }
    scene.text('<b><font color="pink">then we\'re on the same page</font></b>');
    scene.text('<b><font color="pink">but i\'m just trying to plan my day</font></b>');
    // TODO-QSP: dynamic text: <b><font color="pink">can I come over at <<contMeetHour[call4Date["ContactIndex"...
    scene.text(`<b><font color="pink">can I come over at ${qspUntranslated(s, "contMeetHour[call4Date[\"ContactIndex\"]]", { location: "booty_call" })}:00?</font></b>`);
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'what the fuck am I supposed to do until then?')
    scene.actions([
      { label: 'I don\'t know', handler: (st: GameState) => {
    scene.text('<b><font color="pink">i dont know</font></b>');
    scene.text('<b><font color="pink">figure something out til I get there</font></b>');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Try to stay hard', handler: (st: GameState) => {
    scene.text('<b><font color="pink">just try to stay hard</font></b>');
    scene.text('<b><font color="pink">i don\'t want to get there and find out my meat stick has gone soft</font></b>');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Dream on it', handler: (st: GameState) => {
    scene.text('<b><font color="pink">dream on it ;)</font></b>');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterInviteYourself2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m busy then', handler: (st: GameState) => {
    scene.text('<b><font color="pink">shit</font></b>');
    scene.text('<b><font color="pink">im busy then</font></b>');
    scene.text('<b><font color="pink">maybe another day</font></b>');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    scene.text('<b><font color="pink">yeah, id like to come around that time ;)</font></b>');
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'great')
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDraw(s: GameState, scene: SceneBuilder): void {
  if (((s as any).booty_call ?? 0)?.['A0'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0  ||  ((s as any).stat ?? 0)?.['girlfriends_current'] > 0) {
      // TODO-QSP: :find_textable_lover
      (s as any).temp_bc_i = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('lover')-1);
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).lover_drawn ?? 0)] !== 'boyfriend'  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).lover_drawn ?? 0)] !== 'girlfriend') {
        // TODO-QSP: jump 'find_textable_lover'
      }
      qspCall(s, 'booty_call_sms', 'start', ((s as any).lover_drawn ?? 0));
    }
    if (!(s as any).booty_call) (s as any).booty_call = {}; (s as any).booty_call['A0'] = ((s as any).daystart ?? 0);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSMSRaiser(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bc_i = 0;
  // TODO-QSP: :sms_raiser_loop
  if (((s as any).temp_bc_i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === 'fuckbuddy'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === 'sugar_daddy') {
      if (((s as any).booty_call_time ?? 0)?.[String((s as any).temp_bc_id ?? 0)] < ((((s as any).hour ?? 0) * 60) + ((s as any).minut ?? 0))  &&  ((s as any).npc_no_booty_call ?? 0)?.[String((s as any).temp_bc_id ?? 0)] !== ((s as any).daystart ?? 0)  &&  ((s as any).npc_last_booty_call ?? 0)?.[String((s as any).temp_bc_id ?? 0)] !== ((s as any).daystart ?? 0)) {
        qspCall(s, 'booty_call_sms', 'start', ((s as any).temp_bc_id ?? 0));
        if (!(s as any).booty_call_time) (s as any).booty_call_time = {}; (s as any).booty_call_time[String((s as any).temp_bc_id ?? 0)] = 2399;
        if (!(s as any).booty_call_invite) (s as any).booty_call_invite = {}; (s as any).booty_call_invite[String((s as any).temp_bc_id ?? 0)] = ((s as any).daystart ?? 0);
      }
    }
    (s as any).temp_bc_i = ((s as any).temp_bc_i ?? 0) + (1);
    // TODO-QSP: jump 'sms_raiser_loop'
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'scheduler':
      enterScheduler(s, scene);
      break;
    case 'booty_call_scheduler':
      enterBootyCallScheduler(s, scene);
      break;
    case 'schedule_sms':
      enterScheduleSms(s, scene);
      break;
    case 'set_sugar_daddy_schedule':
      enterSetSugarDaddySchedule(s, scene);
      break;
    case 'bc_npc_stat_update':
      enterBcNpcStatUpdate(s, scene);
      break;
    case 'set_booty_call_date':
      enterSetBootyCallDate(s, scene);
      break;
    case 'block_booty_calls':
      enterBlockBootyCalls(s, scene);
      break;
    case 'generate_home_link':
      enterGenerateHomeLink(s, scene);
      break;
    case 'hotel_links':
      enterHotelLinks(s, scene);
      break;
    case 'generate_hotel_link':
      enterGenerateHotelLink(s, scene);
      break;
    case 'text':
      enterText(s, scene);
      break;
    case 'invite_yourself':
      enterInviteYourself(s, scene);
      break;
    case 'get_invited':
      enterGetInvited(s, scene);
      break;
    case 'text1':
      enterText1(s, scene);
      break;
    case 'text2':
      enterText2(s, scene);
      break;
    case 'invite_yourself1':
      enterInviteYourself1(s, scene);
      break;
    case 'invite_yourself2':
      enterInviteYourself2(s, scene);
      break;
    case 'draw':
      enterDraw(s, scene);
      break;
    case 'SMS raiser':
      enterSMSRaiser(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const booty_call: LocationDef = {
  name: 'booty_call',
  title: 'hey <<$pcs_nickname>>',
  region: 'other',
  enter: enter,
};
