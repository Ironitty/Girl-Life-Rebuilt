import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInitiatePre(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).npcID ?? 0);
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).npc_date_type ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  }
  (s as any).temp_npcID = ((s as any).locArgs?.[1] ?? 0);
  if (Number((s as any).locArgs?.[2] ?? 0) === 'movie_date') {
    qspGoto(s, 'date_movie', 'start');
  } else {
    if (Number((s as any).locArgs?.[2] ?? 0) === 'casual_meal') {
      qspGoto(s, 'date_casual_meal', 'start', 'separate');
    } else {
      if (Number((s as any).locArgs?.[2] ?? 0) === 'netflix_chill') {
        // TODO-QSP: gt 'date_chill', 'knock_start', $ARGS[1]
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterInviteCode(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).npcID ?? 0);
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = 'movie_date';
  }
  if (Number((s as any).locArgs?.[3] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = ((s as any).hour ?? 0) + 1;
  }
  // TODO-QSP: npc_date_invite[$ARGS[1]] = daystart
  // TODO-QSP: npc_date_meethour[$ARGS[1]] = ARGS[3]
  // TODO-QSP: $npc_date_type[$ARGS[1]] = $ARGS[2]
  if (((s as any).npc_residence ?? 0)[Number((s as any).locArgs?.[1] ?? 0)] === 'pav_residential') {
    if (Number((s as any).locArgs?.[2] ?? 0) === 'netflix_chill') {
      // TODO-QSP: $npc_date_loc[$ARGS[1]] = $npc_residence[$ARGS[1]]
      (s as any).temp_date_loc = 'Pavlovsk Residential Area';
    } else {
      if (Number((s as any).locArgs?.[2] ?? 0) === 'movie_date') {
        // TODO-QSP: $npc_date_loc[$ARGS[1]] = 'pav_park'
        (s as any).temp_date_loc = 'Pavlovsk Park';
      } else {
        if (Number((s as any).locArgs?.[2] ?? 0) === 'casual_meal') {
          // TODO-QSP: $npc_date_loc[$ARGS[1]] = 'pav_park'
          (s as any).temp_date_loc = 'Pavlovsk Park';
        }
      }
    }
  } else {
    if (Number((s as any).locArgs?.[2] ?? 0) === 'netflix_chill') {
      // TODO-QSP: $npc_date_loc[$ARGS[1]] = $npc_residence[$ARGS[1]]
      (s as any).temp_date_loc = ((s as any).npc_usedname ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] + 's place';
    } else {
      if (Number((s as any).locArgs?.[2] ?? 0) === 'movie_date') {
        // TODO-QSP: $npc_date_loc[$ARGS[1]] = 'city_mall'
        (s as any).temp_date_loc = 'St. Petersburg Mall';
      } else {
        if (Number((s as any).locArgs?.[2] ?? 0) === 'casual_meal') {
          // TODO-QSP: $npc_date_loc[$ARGS[1]] = 'city_residential'
          (s as any).temp_date_loc = 'St. Petersburg Residential Area';
        }
      }
    }
  }
  qspCall(s, 'calendar_list', 'init_event_vars');
  ((s as any).event_vars = (s as any).event_vars ?? {})['id'] = 'date_' + ((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).daystart ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['title'] = 'Date with ' + ((s as any).npc_usedname ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  ((s as any).event_vars = (s as any).event_vars ?? {})['loc'] = ((s as any).temp_date_loc ?? 0);
  ((s as any).event_vars = (s as any).event_vars ?? {})['desc'] = 'You have a date scheduled with ' + ((s as any).npc_usedname ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] + ' at ' + qspFunc(s, 'time', 'get_time_string', ((s as any).locArgs?.[3] ?? 0), 0) + '.';
  ((s as any).event_vars = (s as any).event_vars ?? {})['daystart'] = ((s as any).npc_date_invite ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  ((s as any).event_vars = (s as any).event_vars ?? {})['flex_type'] = 1;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_start_ts'] = ((s as any).npc_date_meethour ?? 0)[((s as any).locArgs?.[1] ?? 0)] * 4;
  ((s as any).event_vars = (s as any).event_vars ?? {})['window_end_ts'] = (((s as any).event_vars ?? {})?.['window_start_ts'] ?? 0) + 4;
  ((s as any).event_vars = (s as any).event_vars ?? {})['duration_ts'] = 8;
  ((s as any).event_vars = (s as any).event_vars ?? {})['color'] = 13;
  // TODO-QSP: gs 'calendar_events', 'new_event', $event_vars['id']
  // TODO-QSP: end
  scene.build();
}

function enterPhoneInviteStart(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Want to go on a date?', handler: (st: GameState) => {
    if (((st as any).npc_is_busy ?? 0)[((st as any).call4Date ?? 0)?.['NPC']] === 1) {
      scene.text('"Hey, are you around later? I wanted to see you."');
      scene.text('"I really wish I could, but I can\'t today."');
      scene.actions([
        { label: 'Express regret', handler: (st: GameState) => {
    scene.text('"No chance you\'re free? Even for a little while?"');
    scene.text('"I\'d say yes if I could, but I\'m stuck with this until tomorrow."');
    scene.text('"Well... okay. Maybe another time then..."');
    scene.actions([
      { label: 'Hang up', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        { label: 'It is what it is', handler: (st: GameState) => {
    scene.text('"That\'s okay. Maybe we can do something another day."');
    // TODO-QSP: dynamic text: "Thanks, <<$pcs_nickname>>."
    scene.text(`"Thanks, ${((st as any).pcs_nickname ?? '')}."`);
    scene.actions([
      { label: 'Hang up', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).npc_assertive ?? 0)[((st as any).call4Date ?? 0)?.['NPC']] > 0) {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcPickDate(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        scene.text('"Sure, where did you want to go?"');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateInviteMenu(s, scene); (st as any).locArgs = __savedLocArgs; }
      }
    }
  } },
  ]);
  scene.build();
}

function enterDateInviteMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Grab a bite?', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['date_type'] = 'casual_meal';
    scene.text('"How about a bite to eat?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateTimePicker(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'See a movie?', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['date_type'] = 'movie_date';
    scene.text('"How about a movie?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateTimePicker(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Hang at his place?', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['date_type'] = 'netflix_chill';
    scene.text('"Can I just come over to hang out and chill?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateTimePicker(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterNpcPickDate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] === 'casual_meal'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcMealInvite(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] === 'movie_date'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcCinemaInvite(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] === 'netflix_chill'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcChillInvite(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
        if ((!((s as any).temp_rand ?? 0))) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcMealInvite(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).temp_rand ?? 0) === 1) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcCinemaInvite(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcChillInvite(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Never mind', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    scene.text('"Actually never mind."');
    scene.text('You apologize for wasting his time and hang up.');
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDateTimePicker(s: GameState, scene: SceneBuilder): void {
  scene.text('"Depends. When?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pick a time', handler: (st: GameState) => {
    // TODO-QSP: :date_time_loop
    ((st as any).temp = (st as any).temp ?? {})['meet_time'] = 0;
    if (((st as any).temp ?? 0)?.['meet_time'] < ((st as any).hour ?? 0)) {
      // TODO-QSP: jump 'date_time_loop'
    } else {
      // TODO-QSP: dynamic text: "How about <<temp[''meet_time'']>>?" you ask.
      scene.text(`"How about ${((st as any).temp ?? 0)?.['meet_time'] ?? ''}?" you ask.`);
      if (qspFunc(s, 'lover_schedule', 'is_free', ((st as any).npcID ?? 0))) {
        // TODO-QSP: gs 'date_ev', 'invite_code', $npcID, $temp['date_type'], temp['meet_time']
        scene.text('"Sure, that sounds good. I\'ll see you then."');
      } else {
        if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          scene.text('"Shit, I can\'t do then. I guess another day then?"');
        } else {
          scene.text('"Oh, sorry. I can\'t do then. I guess another day then?"');
        }
        scene.text('"Oh. I guess so. Bye..."');
        scene.text('"Bye," he says quickly and hangs up.');
      }
      scene.actions([
        { label: 'Hang up', goto: ['lover_call', 'fin'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterDateDecline(s: GameState, scene: SceneBuilder): void {
  scene.text('"I can\'t in an hour. I\'m busy."');
  scene.text('"Oh, sorry. Okay, maybe we can go out some other time."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Hang up', goto: ['lover_call', 'fin'] },
  ]);
  scene.build();
}

function enterNpcMealInvite(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp = (s as any).temp ?? {})['date_type'] = 'casual_meal';
  scene.text('"Want to grab a bite to eat? In like, an hour?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'You can\'t', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_ev', 'date_decline'
  } },
    { label: 'Sounds good', handler: (st: GameState) => {
    // TODO-QSP: gs 'date_ev', 'invite_code', $npcID, 'casual_meal', hour + 1
    scene.text('"Sounds good."');
    if (((st as any).npc_residence ?? 0)?.[String((st as any).npcID ?? 0)] === 'pav_residential') {
      scene.text('"I\'ll meet you in the park by Del Parco."');
    } else {
      scene.text('"I\'ll meet you at the place in the residential area in an hour!"');
    }
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNpcCinemaInvite(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp = (s as any).temp ?? {})['date_type'] = 'movie_date';
  scene.text('"Want to see a movie? Maybe in like, an hour?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'You can\'t', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_ev', 'date_decline'
  } },
    { label: 'Sounds good', handler: (st: GameState) => {
    // TODO-QSP: gs 'date_ev', 'invite_code', $npcID, 'movie_date', hour + 1
    scene.text('"Sounds good."');
    if (((st as any).npc_residence ?? 0)?.[String((st as any).npcID ?? 0)] === 'pav_residential') {
      scene.text('"I\'ll meet you at the theater in the park in an hour!"');
    } else {
      scene.text('"I\'ll meet you at the theater in the mall in an hour!"');
    }
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
    { label: 'Pick a time', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_ev', 'date_time_picker'
  } },
  ]);
  scene.build();
}

function enterNpcChillInvite(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp = (s as any).temp ?? {})['date_type'] = 'netflix_chill';
  scene.text('"Want to come over to my place and chill? Maybe in like, an hour?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'You can\'t', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_ev', 'date_decline'
  } },
    { label: 'Sounds good', handler: (st: GameState) => {
    // TODO-QSP: gs 'date_ev', 'invite_code', $npcID, 'netflix_chill', hour + 1
    scene.text('"Sounds good."');
    scene.text('"I\'ll see you in an hour!"');
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
    { label: 'Pick a time', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_ev', 'date_time_picker'
  } },
  ]);
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).date_ev ?? 0)?.['unique_npc'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
    dynamicGoto(s, (((s as any).date_ev_exit ?? {}))['exit_file'], (((s as any).date_ev_exit ?? {}))['exit_arg']);
  } else {
    if (((s as any).date_ev ?? 0)?.['locat'] === 'npc_home') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
        qspGoto(s, 'pav_residential', '');
      } else {
        if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'uni_grounds') {
          qspGoto(s, 'uni_grounds', '');
        } else {
          if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_residential') {
            qspGoto(s, 'city_residential', '');
          } else {
            if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_center') {
              qspGoto(s, 'city_center', '');
            } else {
              if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
                if (((s as any).region ?? 0) === 'pav') {
                  qspGoto(s, 'pav_residential', '');
                } else {
                  if (((s as any).region ?? 0) === 'city') {
                    qspGoto(s, 'city_residential', '');
                  } else {
                    qspGoto(s, 'pav_residential', '');
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).date_ev ?? 0)?.['locat'] === 'hotel_room') {
        if (((s as any).date_ev ?? 0)?.['hotel_days'] > 0) {
          if (((s as any).region ?? 0) === 'pav') {
            (s as any).hotel = 'pav_hotel';
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
            qspGoto(s, 'HotelRoom', 'better');
          } else {
            if (((s as any).region ?? 0) === 'city') {
              (s as any).hotel = 'city_hotel';
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
              qspGoto(s, 'HotelRoom', 'best');
            }
          }
        } else {
          if (((s as any).region ?? 0) === 'pav') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
            qspGoto(s, 'pav_hotel', '');
          } else {
            if (((s as any).region ?? 0) === 'city') {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
              qspGoto(s, 'city_hotel', '');
            }
          }
        }
      } else {
        if (((s as any).date_ev ?? 0)?.['locat'] === 'pc_home') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
          if (((s as any).home ?? 0)?.['current'] === 'parents_home') {
            if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'bedroom') {
              qspGoto(s, 'bedrPar', '');
            } else {
              if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'hallway') {
                qspGoto(s, 'korrPar', '');
              }
            }
          } else {
            if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'bedroom') {
              qspGoto(s, 'bedr', '');
            } else {
              if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'hallway') {
                qspGoto(s, 'korr', '');
              }
            }
          }
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
          if (((s as any).region ?? 0) === 'pav') {
            qspGoto(s, 'pav_residential', '');
          } else {
            if (((s as any).region ?? 0) === 'city') {
              qspGoto(s, 'city_residential', '');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterExitIntoLoc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['locat'] === 'npc_home') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'lover_home', 'bedroom');
  } else {
    if (((s as any).date_ev ?? 0)?.['locat'] === 'pc_home') {
      if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'bedroom') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
        ((s as any).pcs_romance = (s as any).pcs_romance ?? {})['lover_here'] = 1;
        qspGoto(s, 'bedr', '');
      } else {
        if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'hallway') {
          ((s as any).pcs_romance = (s as any).pcs_romance ?? {})['lover_here'] = 1;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
          qspGoto(s, 'korr', '');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBreakUp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
    qspCall(s, 'lover', 'remove_fuckbuddy', ((s as any).npcID ?? 0));
  } else {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
      qspCall(s, 'lover', 'remove_sugar_daddy', ((s as any).npcID ?? 0));
    } else {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'girlfriend') {
        qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
      } else {
        qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['date_ev', 'exit'] },
  ]);
  scene.build();
}

function enterFuckbuddyAdd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover', 'add_fuckbuddy', ((s as any).npcID ?? 0));
  ((s as any).npc_no_booty_call = (s as any).npc_no_booty_call ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterSugarDaddyAdd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover', 'add_sugar_daddy', ((s as any).npcID ?? 0));
  ((s as any).npc_sugar_daddy_price = (s as any).npc_sugar_daddy_price ?? {})[String((s as any).npcID ?? 0)] = (((s as any).date_ev ?? {})?.['sugar_daddy_offer'] ?? 0) * 100;
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'sugar_daddy') {
    // TODO-QSP: $npc_rel_type[$npcID] = 'sugar_daddy'
    ((s as any).date_ev = (s as any).date_ev ?? {})['sugar_daddy_count'] = ((s as any).date_ev['sugar_daddy_count'] ?? 0) + (1);
  }
  ((s as any).date_ev = (s as any).date_ev ?? {})['sugar_daddy_paid'] = 1;
  ((s as any).date_ev = (s as any).date_ev ?? {})['prostitution_paid'] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterLoverAdd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover', 'add_boyfriend', ((s as any).npcID ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterEnding(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEndCode(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (Object.keys((s as any).sex_ev ?? {}).length > 0) {
    qspCall(s, 'sex_ev_leave', 'end_code');
  }
  // TODO-QSP: end
  scene.build();
}

function enterEndCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === ''  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'hookup') {
    ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[String((s as any).npcID ?? 0)] = 'casual';
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).date_ev ?? 0)?.['prostitution_flag'] === 'prostitution'  ||  ((s as any).date_ev ?? 0)?.['prostitution'] === 1) {
    ((s as any).npc_prostitution_count = (s as any).npc_prostitution_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_prostitution_count[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }
  if ((Array.isArray((s as any).lover) ? ((s as any).lover as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0) {
    qspCall(s, 'lover', 'add_dating', ((s as any).npcID ?? 0));
  }
  if (((s as any).date_ev ?? 0)?.['hotel_days'] > 0) {
    if (((s as any).region ?? 0) === 'pav') {
      ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['pav_hotel'] = 2;
    } else {
      if (((s as any).region ?? 0) === 'city') {
        ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['city_hotel'] = 3;
      }
    }
    ((s as any).hotelRoomDays = (s as any).hotelRoomDays ?? {})[String(((s as any).region ?? 0)) + '_hotel'] = ((s as any).daystart ?? 0) + (((s as any).date_ev ?? {})?.['hotel_days'] ?? 0);
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})[String(((s as any).region ?? 0)) + '_room_service_free'] = 1;
  }
  if (((s as any).date_ev ?? 0)?.['locat'] === 'pc_home'  &&  ((s as any).home ?? 0)?.['current'] === 'parents_home') {
    ((s as any).sisterQW = (s as any).sisterQW ?? {})['sex_room'] = 1;
    ((s as any).stat = (s as any).stat ?? {})['parents_home_sex'] = ((s as any).stat['parents_home_sex'] ?? 0) + (1);
  }
  if (((s as any).date_ev ?? 0)?.['break_up'] > 0) {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
      qspCall(s, 'lover', 'remove_fuckbuddy', ((s as any).npcID ?? 0));
    } else {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
        qspCall(s, 'lover', 'remove_sugar_daddy', ((s as any).npcID ?? 0));
      } else {
        qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
      }
    }
  }
  if (((s as any).date_ev ?? 0)?.['not_a_date'] === 0) {
    ((s as any).npc_last_date = (s as any).npc_last_date ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    ((s as any).npc_date_count = (s as any).npc_date_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_date_count[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBedRoomImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['locat'] === 'player_home') {
  } else {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLivingRoomImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['locat'] === 'player_home') {
  } else {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKitchenImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['locat'] === 'player_home') {
  } else {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHallImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['locat'] === 'player_home') {
  } else {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDateMenu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'chill_start');
  qspCall(s, 'date_ev', 'movie_start');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'initiate_pre':
      enterInitiatePre(s, scene);
      break;
    case 'invite_code':
      enterInviteCode(s, scene);
      break;
    case 'phone_invite_start':
      enterPhoneInviteStart(s, scene);
      break;
    case 'date_invite_menu':
      enterDateInviteMenu(s, scene);
      break;
    case 'npc_pick_date':
      enterNpcPickDate(s, scene);
      break;
    case 'date_time_picker':
      enterDateTimePicker(s, scene);
      break;
    case 'date_decline':
      enterDateDecline(s, scene);
      break;
    case 'npc_meal_invite':
      enterNpcMealInvite(s, scene);
      break;
    case 'npc_cinema_invite':
      enterNpcCinemaInvite(s, scene);
      break;
    case 'npc_chill_invite':
      enterNpcChillInvite(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'exit_into_loc':
      enterExitIntoLoc(s, scene);
      break;
    case 'break_up':
      enterBreakUp(s, scene);
      break;
    case 'fuckbuddy_add':
      enterFuckbuddyAdd(s, scene);
      break;
    case 'sugar_daddy_add':
      enterSugarDaddyAdd(s, scene);
      break;
    case 'lover_add':
      enterLoverAdd(s, scene);
      break;
    case 'ending':
      enterEnding(s, scene);
      break;
    case 'end_code':
      enterEndCode(s, scene);
      break;
    case 'bed_room_img':
      enterBedRoomImg(s, scene);
      break;
    case 'living_room_img':
      enterLivingRoomImg(s, scene);
      break;
    case 'kitchen_img':
      enterKitchenImg(s, scene);
      break;
    case 'hall_img':
      enterHallImg(s, scene);
      break;
    case 'date_menu':
      enterDateMenu(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const date_ev: LocationDef = {
  name: 'date_ev',
  title: '"Depends. When?"',
  region: 'other',
  enter: enter,
};
