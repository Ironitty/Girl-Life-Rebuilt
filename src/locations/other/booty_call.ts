import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterScheduler(s: GameState, scene: SceneBuilder): void {
  (s as any).booty_call_time = undefined;
  (s as any).sugar_daddy_call = undefined;
  (s as any).npc_booty_call = undefined;
  (s as any).npc_booty_call_time = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBootyCallScheduler(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterBootyCallScheduler(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bc_i = 0;
  while (true) {
    if (((s as any).temp_bc_i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
      (s as any).temp_bc_id = (((s as any).lover ?? 0)?.[String((s as any).temp_bc_i ?? 0)] ?? 0);
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === 'fuckbuddy') {
        qspCall(s, 'telefon', 'ClearInSMSSchedule', ((s as any).temp_bc_id ?? 0));
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_bc_id ?? 0)]; enterBcNpcStatUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
        if (((s as any).daystart ?? 0) > ((s as any).npc_no_booty_call ?? 0)?.[String((s as any).temp_bc_id ?? 0)]  &&  (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === ((s as any).daystart ?? 0)  ||  (Math.floor(Math.random() * 300) + 0) < (((s as any).npc_rel ?? 0)?.[String((s as any).temp_bc_id ?? 0)] + 20 * ((s as any).npc_sexdrive ?? 0)?.[String((s as any).temp_bc_id ?? 0)]))) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_bc_id ?? 0)]; enterScheduleSms(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === 'sugar_daddy') {
          qspCall(s, 'telefon', 'ClearInSMSSchedule', ((s as any).temp_bc_id ?? 0));
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_bc_id ?? 0)]; enterBcNpcStatUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
          if (((s as any).daystart ?? 0) > ((s as any).npc_no_booty_call ?? 0)?.[String((s as any).temp_bc_id ?? 0)]  &&  (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === ((s as any).daystart ?? 0)  ||  (Math.floor(Math.random() * 300) + 0) < (((s as any).npc_rel ?? 0)?.[String((s as any).temp_bc_id ?? 0)] + 20 * ((s as any).npc_sexdrive ?? 0)?.[String((s as any).temp_bc_id ?? 0)]))) {
            if (((s as any).daystart ?? 0) >= (((s as any).npc_sugar_daddy_timer ?? 0)?.[String((s as any).temp_bc_id ?? 0)] - (((s as any).npc_rel ?? 0)?.[String((s as any).temp_bc_id ?? 0)] - 40) / 6)) {
              ((s as any).sugar_daddy_call = (s as any).sugar_daddy_call ?? {})[String((s as any).temp_bc_id ?? 0)] = 1;
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_bc_id ?? 0)]; enterScheduleSms(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
      (s as any).temp_bc_i = ((s as any).temp_bc_i ?? 0) + (1);
      break;
    }
    (s as any).temp_bc_i = undefined;
    (s as any).temp_bc_id = undefined;
  }
  scene.build();
}

function enterScheduleSms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_booty_call ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).daystart ?? 0)) {
    qspCall(s, 'telefon', 'SetInSMSSchedule', ((s as any).locArgs?.[1] ?? 0), 'gs \'booty_call_sms\', \'start\', \'' + ((s as any).locArgs?.[1] ?? 0) + '\'', 'totminut > ' + ((s as any).totminut ?? 0) + 60 * (((s as any).npc_booty_call_time ?? 0)[((s as any).locArgs?.[1] ?? 0)] - ((s as any).hour ?? 0)) + (Math.floor(Math.random() * 181) + 0) - ((s as any).minut ?? 0) + '');
  } else {
    if (((s as any).week ?? 0) === ((s as any).npc_day_off ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      qspCall(s, 'telefon', 'SetInSMSSchedule', ((s as any).locArgs?.[1] ?? 0), 'gs \'booty_call_sms\', \'start\', \'' + ((s as any).locArgs?.[1] ?? 0) + '\'', 'totminut > ' + ((s as any).totminut ?? 0) + 60 * (10 - ((s as any).hour ?? 0)) + (Math.floor(Math.random() * 241) + 0) + (Math.floor(Math.random() * 241) + 0) + (Math.floor(Math.random() * 241) + 0) - ((s as any).minut ?? 0) + '');
    } else {
      if (((s as any).week ?? 0) !== ((s as any).npc_day_off ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
        qspCall(s, 'telefon', 'SetInSMSSchedule', ((s as any).locArgs?.[1] ?? 0), 'gs \'booty_call_sms\', \'start\', \'' + ((s as any).locArgs?.[1] ?? 0) + '\'', 'totminut > ' + ((s as any).totminut ?? 0) + 60 * ((Math.floor(Math.random() * (((s as any).npc_end_free_time ?? 0)[((s as any).locArgs?.[1] ?? 0)] - 1 - qspUntranslated(s, "npc_start_free_time[\u00000\u0000]", { location: "booty_call" }) + 1)) + (qspUntranslated(s, "npc_start_free_time[\u00000\u0000]", { location: "booty_call" }))) - ((s as any).hour ?? 0)) + (Math.floor(Math.random() * 181) + 0) - ((s as any).minut ?? 0) + '');
      }
    }
  }
  scene.build();
}

function enterSetSugarDaddySchedule(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_sugar_daddy_timer = (s as any).npc_sugar_daddy_timer ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).daystart ?? 0) + 9 + (Math.floor(Math.random() * 7) + 0);
  scene.build();
}

function enterBcNpcStatUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_start_free_time ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0  ||  ((s as any).npc_day_off ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
      (s as any).temp_bc_rand = (Math.floor(Math.random() * 3) + 1);
      if (((s as any).temp_bc_rand ?? 0) === 1) {
        ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 9;
        ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 12;
      } else {
        if (((s as any).temp_bc_rand ?? 0) === 2) {
          ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 16;
          ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 20;
        } else {
          ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 20;
          ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 23;
        }
      }
      (s as any).temp_bc_rand = undefined;
    } else {
      if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 9;
          ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 12;
        } else {
          ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 20;
          ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 23;
        }
      } else {
        if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 8;
            ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 12;
            ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[((s as any).locArgs?.[1] ?? 0)] = 13;
            ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[((s as any).locArgs?.[1] ?? 0)] = 21;
          } else {
            ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 18;
            ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 22;
            ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[((s as any).locArgs?.[1] ?? 0)] = 9;
            ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[((s as any).locArgs?.[1] ?? 0)] = 17;
          }
          ((s as any).npc_apt_type = (s as any).npc_apt_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 5;
          ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 5) + 14);
          ((s as any).npc_car = (s as any).npc_car ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 0);
        }
      }
    }
    ((s as any).npc_day_off = (s as any).npc_day_off ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 7) + 1);
  }
  scene.build();
}

function enterSetBootyCallDate(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['set_date'] = 1;
  if (((s as any).sex_ev ?? 0)?.['invite_today'] === 1  ||  ((s as any).hour ?? 0) < 5) {
    ((s as any).npc_booty_call_date = (s as any).npc_booty_call_date ?? {})[String((s as any).boy ?? 0)] = ((s as any).daystart ?? 0);
  } else {
    if (((s as any).sex_ev ?? 0)?.['invite_tomorrow'] === 1) {
      ((s as any).npc_booty_call_date = (s as any).npc_booty_call_date ?? {})[String((s as any).boy ?? 0)] = ((s as any).daystart ?? 0) + 1;
    }
  }
  if (((s as any).npc_booty_call_time ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    ((s as any).npc_booty_call_time = (s as any).npc_booty_call_time ?? {})[String((s as any).boy ?? 0)] = (((s as any).npc_start_free_time ?? 0)?.[String((s as any).boy ?? 0)] ?? 0);
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).boy ?? 0)] === 'sugar_daddy') {
    ((s as any).sugar_daddy_call = (s as any).sugar_daddy_call ?? {})[String((s as any).boy ?? 0)] = 1;
  }
  scene.build();
}

function enterBlockBootyCalls(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['invite_today'] === 1) {
    ((s as any).npc_booty_call_date = (s as any).npc_booty_call_date ?? {})[String((s as any).boy ?? 0)] = 0;
    ((s as any).npc_no_booty_call = (s as any).npc_no_booty_call ?? {})[String((s as any).boy ?? 0)] = ((s as any).daystart ?? 0);
    ((s as any).npc_booty_call_time = (s as any).npc_booty_call_time ?? {})[String((s as any).boy ?? 0)] = 0;
  } else {
    if (((s as any).sex_ev ?? 0)?.['invite_tomorrow'] === 1) {
      ((s as any).npc_no_booty_call = (s as any).npc_no_booty_call ?? {})[String((s as any).boy ?? 0)] = ((s as any).daystart ?? 0) + 1;
    }
  }
  scene.build();
}

function enterGenerateHomeLink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_residence ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).loc ?? 0)  &&  ((s as any).npc_residence ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== 'uni_grounds') {
    // TODO-QSP: dynamic(' ''<a href="exec: minut += 2 & gt ''''sex_ev_start'''', ''''initiate_pre'''', ''''<<$ARGS[1...
  }
  scene.build();
}

function enterHotelLinks(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bc_i = 0;
  while (true) {
    if (((s as any).temp_bc_i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
      (s as any).temp_bc_id = (((s as any).lover ?? 0)?.[String((s as any).temp_bc_i ?? 0)] ?? 0);
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === 'fuckbuddy'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === 'sugar_daddy') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).lover ?? 0)?.[String((s as any).temp_bc_i ?? 0)] ?? 0)]; enterGenerateHotelLink(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      (s as any).temp_bc_i = ((s as any).temp_bc_i ?? 0) + (1);
      break;
    }
    (s as any).temp_bc_i = undefined;
    (s as any).temp_bc_id = undefined;
  }
  scene.build();
}

function enterGenerateHotelLink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).booty_call_hotel ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).region ?? 0)  &&  ((s as any).booty_call_invite ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic(' ''<a href="exec: minut += 2 & gt ''''sex_ev_start'''', ''''initiate_pre'''', ''''<<$ARGS[1...
  }
  scene.build();
}

function enterText(s: GameState, scene: SceneBuilder): void {
  scene.text('Your phone buzzes and you pull it out to see what\'s happening. It\'s a text from [boy code here].');
  scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'hey ' + ((s as any).pcs_nickname ?? '') + ''));
  scene.text('<b><font color="pink">hey yourself</font></b>');
  scene.text('you text back.');
  scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'i was thinking about you today'));
  scene.actions([
    { label: 'What about?', handler: (st: GameState) => {
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'i was thinking about you today'));
    scene.text('<b><font color="pink">what were you thinking about?</font></b>');
    ((st as any).booty_call = (st as any).booty_call ?? {})['text'] = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).booty_call ?? 0)?.['text'] === 1) {
      scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'wanted to know if you wanted to come over to my place'));
      scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'have some fun?'));
      scene.text('You think you know what kind of fun he wants.');
    } else {
      if (((st as any).booty_call ?? 0)?.['text'] === 2) {
        scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'your mouth around my cock'));
        scene.text('You think you know what kind of fun he wants.');
      } else {
        if (((st as any).booty_call ?? 0)?.['text'] === 3) {
          scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'fucking you on my couch'));
          scene.text('You think you know what kind of fun he wants.');
        }
      }
    }
  } },
    { label: 'Me too', handler: (st: GameState) => {
    qspGoto(st, '', '');
  } },
    { label: 'About fucking me?', handler: (st: GameState) => {
    qspGoto(st, '', '');
  } },
  ]);
  scene.build();
}

function enterInviteYourself(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetInvited(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    scene.text('"Why don\'t you come over to my place right now and we can have some fun?"');
  } else {
    scene.text('"Why don\'t you come over to my place tonight and we can have some fun?"');
  }
  scene.build();
}

function enterText1(s: GameState, scene: SceneBuilder): void {
  scene.text('Your phone buzzes and you pull it out to see what\'s happening. It\'s a text from [boy code here].');
  scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'hey ' + ((s as any).pcs_nickname ?? '') + ''));
  scene.text('<b><font color="pink">hey yourself</font></b>');
  scene.text('you text back.');
  scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'i was thinking about you today'));
  scene.actions([
    { label: 'What about?', handler: (st: GameState) => {
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'i was thinking about you today'));
    scene.text('<b><font color="pink">what were you thinking about?</font></b>');
    ((st as any).booty_call = (st as any).booty_call ?? {})['text'] = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).booty_call ?? 0)?.['text'] === 1) {
      scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'wanted to know if you wanted to come over to my place'));
      scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'have some fun?'));
      scene.text('You think you know what kind of fun he wants.');
    } else {
      if (((st as any).booty_call ?? 0)?.['text'] === 2) {
        scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'your mouth around my cock'));
      } else {
        if (((st as any).booty_call ?? 0)?.['text'] === 3) {
          scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'fucking you on my bed'));
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterText2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Me too', handler: (st: GameState) => {
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'i was thinking about you today'));
    scene.text('<b><font color="pink">me too</font></b>');
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'come over'));
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'lets fuck like bunnies'));
  } },
  ]);
  scene.build();
}

function enterText2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Can\'t', handler: (st: GameState) => {
    scene.text('<b><font color="pink">sorry, I cant</font></b>');
    scene.text('<b><font color="pink">i have stuff to do</font></b>');
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'shit'));
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'maybe next time then'));
    scene.actions([
      { label: 'Put your phone away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'I\'m on my way', handler: (st: GameState) => {
    scene.text('<b><font color="pink">ill come right now ;)</font></b>');
    if (((st as any).npc_humor ?? 0)?.[String((st as any).boy ?? 0)] === 'perverted') {
      scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'in the street?'));
      scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'damn!'));
      scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'keep it in your pants till you get here!'));
    } else {
      if (((st as any).npc_humor ?? 0)?.[String((st as any).boy ?? 0)] === 'intellectual') {
        scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'phrasing'));
      } else {
        scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'my cock is waiting for you'));
      }
    }
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'I\'ll swing by later', handler: (st: GameState) => {
    scene.text('<b><font color="pink">not right now</font></b>');
    scene.text('<b><font color="pink">but I can come by later?</font></b>');
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'when?'));
    scene.actions([
      { label: 'Pick a time', handler: (st: GameState) => {
    ((st as any).npc_meetday = (st as any).npc_meetday ?? {})[String((st as any).boy ?? 0)] = ((st as any).daystart ?? 0);
    ((st as any).npc_meethour = (st as any).npc_meethour ?? {})[String((st as any).boy ?? 0)] = window.prompt("When do you want to go over to his place? It is now " + (qspFunc(s, 'time', 'get_time_string', ((st as any).hour ?? 0), ((st as any).minut ?? 0))) + ". [Enter the hour only " + (((st as any).hour ?? 0)) + " - 22]") ?? '';
    if (((st as any).npc_meethour ?? 0)?.[String((st as any).boy ?? 0)] <= ((st as any).hour ?? 0)  ||  ((st as any).npc_meethour ?? 0)?.[String((st as any).boy ?? 0)] > 23) {
      ((st as any).npc_meethour = (st as any).npc_meethour ?? {})[String((st as any).boy ?? 0)] = 20;
    }
    scene.text(`<b><font color="pink">maybe around ${(((st as any).npc_meethour ?? 0)?.[String((st as any).boy ?? 0)] ?? '')}:00?</font></b>`);
    scene.text(`"How about ${(((st as any).npc_meethour ?? 0)?.[String((st as any).boy ?? 0)] ?? '')}:00?."`);
    scene.text(`${(((st as any).call4Date ?? 0)?.['CallerName'] ?? '')}, "Okay ${(((st as any).call4Date ?? 0)?.['SvetaName'] ?? '')}, see you at ${(((st as any).npc_meethour ?? 0)?.[String((st as any).boy ?? 0)] ?? '')}:00."`);
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
  (s as any).temp_bc_rand = (Math.floor(Math.random() * 3) + 1);
  if (((s as any).temp_bc_rand ?? 0) === 1) {
    scene.text('You don\'t receive a response. He must be busy.');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    if (((s as any).temp_bc_rand ?? 0) === 2  &&  ((s as any).hour ?? 0) < 18) {
      scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'im at work'));
      scene.actions([
        { label: 'Sorry, never mind', handler: (st: GameState) => {
    scene.text('<b><font color="pink">oh</font></b>');
    scene.text('<b><font color="pink">sorry</font></b>');
    scene.text('<b><font color="pink">never mind</font></b>');
    scene.text('<b><font color="pink">i\'ll text you later</font></b>');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        { label: 'This is a booty call', handler: (st: GameState) => {
    scene.text('<b><font color="pink">when do you get off?</font></b>');
    scene.text('<b><font color="pink">this is a booty call</font></b>');
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'ill probably be free at ' + qspFunc(s, 'time', 'get_time_string', 19, 0)));
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'wanna come then?'));
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterInviteYourself2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'I wanna fuck', handler: (st: GameState) => {
    scene.text('<b><font color="pink">i wanna fuck</font></b>');
    scene.text('<b><font color="pink">when do you get off?</font></b>');
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'ill probably be free at ' + qspFunc(s, 'time', 'get_time_string', 19, 0)));
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'wanna come then?'));
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterInviteYourself2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'i was thinking about your naked body in my bed'));
      scene.actions([
        { label: 'How about right now?', handler: (st: GameState) => {
    scene.text('<b><font color="pink">then we\'re on the same page</font></b>');
    scene.text('<b><font color="pink">can I come over now?</font></b>');
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'yes'));
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'hurry'));
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'i want to fuck you right now'));
    scene.text('<b><font color="pink">i\'m on my way <3</font></b>');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        { label: 'Can I come later?', handler: (st: GameState) => {
    ((st as any).contMeetHour = (st as any).contMeetHour ?? {})[(((st as any).call4Date ?? 0)?.['ContactIndex'])] = window.prompt("When do you want to go over to his place? It is now " + ((String(100+((st as any).hour ?? 0)).slice((2)-1, ((2)-1)+(2)))) + ":" + ((String(100+((st as any).minut ?? 0)).slice((2)-1, ((2)-1)+(2)))) + ". [Enter the hour only " + (((st as any).hour ?? 0)) + " - 22]") ?? '';
    if (((st as any).contMeetHour ?? 0)[((st as any).call4Date ?? 0)?.['ContactIndex']] <= ((st as any).hour ?? 0)  ||  ((st as any).contMeetHour ?? 0)[((st as any).call4Date ?? 0)?.['ContactIndex']] > 23) {
      ((st as any).contMeetHour = (st as any).contMeetHour ?? {})[(((st as any).call4Date ?? 0)?.['ContactIndex'])] = 20;
    }
    scene.text('<b><font color="pink">then we\'re on the same page</font></b>');
    scene.text('<b><font color="pink">but i\'m just trying to plan my day</font></b>');
    scene.text(`<b><font color="pink">can I come over at ${qspUntranslated(s, "contMeetHour[call4Date[\"ContactIndex\"]]", { location: "booty_call" })}:00?</font></b>`);
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'what the fuck am I supposed to do until then?'));
    scene.actions([
      { label: 'I don\'t know', handler: (st: GameState) => {
    scene.text('<b><font color="pink">i dont know</font></b>');
    scene.text('<b><font color="pink">figure something out til I get there</font></b>');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Try to stay hard', handler: (st: GameState) => {
    scene.text('<b><font color="pink">just try to stay hard</font></b>');
    scene.text('<b><font color="pink">i don\'t want to get there and find out my meat stick has gone soft</font></b>');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Dream on it', handler: (st: GameState) => {
    scene.text('<b><font color="pink">dream on it ;)</font></b>');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  (s as any).temp_bc_rand = undefined;
  scene.build();
}

function enterInviteYourself2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I\'m busy then', handler: (st: GameState) => {
    scene.text('<b><font color="pink">shit</font></b>');
    scene.text('<b><font color="pink">im busy then</font></b>');
    scene.text('<b><font color="pink">maybe another day</font></b>');
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    scene.text('<b><font color="pink">yeah, id like to come around that time ;)</font></b>');
    scene.text('  ' + qspFunc(s, 'wrap', 'accent b', 'great'));
    scene.actions([
      { label: 'Put away your phone', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDraw(s: GameState, scene: SceneBuilder): void {
  if (((s as any).booty_call ?? 0)?.['A0'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0  ||  ((s as any).stat ?? 0)?.['girlfriends_current'] > 0) {
      do {
        (s as any).temp_bc_i = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
        (s as any).lover_drawn = (((s as any).lover ?? 0)?.[String((s as any).temp_bc_i ?? 0)] ?? 0);
        qspCall(s, 'booty_call_sms', 'start', ((s as any).lover_drawn ?? 0));
      } while (((s as any).npc_rel_type ?? 0)?.[String((s as any).lover_drawn ?? 0)] !== 'boyfriend'  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).lover_drawn ?? 0)] !== 'girlfriend');
    }
    ((s as any).booty_call = (s as any).booty_call ?? {})['A0'] = ((s as any).daystart ?? 0);
  }
  (s as any).temp_bc_i = undefined;
  (s as any).lover_drawn = undefined;
  scene.build();
}

function enterSMSRaiser(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bc_i = 0;
  while (true) {
    if (((s as any).temp_bc_i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
      (s as any).temp_bc_id = (((s as any).lover ?? 0)?.[String((s as any).temp_bc_i ?? 0)] ?? 0);
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === 'fuckbuddy'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_bc_id ?? 0)] === 'sugar_daddy') {
        if (((s as any).booty_call_time ?? 0)?.[String((s as any).temp_bc_id ?? 0)] < ((((s as any).hour ?? 0) * 60) + ((s as any).minut ?? 0))  &&  ((s as any).npc_no_booty_call ?? 0)?.[String((s as any).temp_bc_id ?? 0)] !== ((s as any).daystart ?? 0)  &&  ((s as any).npc_last_booty_call ?? 0)?.[String((s as any).temp_bc_id ?? 0)] !== ((s as any).daystart ?? 0)) {
          qspCall(s, 'booty_call_sms', 'start', ((s as any).temp_bc_id ?? 0));
          ((s as any).booty_call_time = (s as any).booty_call_time ?? {})[String((s as any).temp_bc_id ?? 0)] = 2399;
          ((s as any).booty_call_invite = (s as any).booty_call_invite ?? {})[String((s as any).temp_bc_id ?? 0)] = ((s as any).daystart ?? 0);
        }
      }
      (s as any).temp_bc_i = ((s as any).temp_bc_i ?? 0) + (1);
      break;
    }
    (s as any).temp_bc_i = undefined;
    (s as any).temp_bc_id = undefined;
  }
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
  title: 'hey',
  region: 'other',
  enter: enter,
};
