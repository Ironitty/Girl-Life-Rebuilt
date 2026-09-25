import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).sex_ev ?? 0)?.['unique_npc'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
    dynamicGoto(s, (((s as any).sex_ev_exit ?? {}))['exit_file'], (((s as any).sex_ev_exit ?? {}))['exit_arg']);
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
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
                  if (((s as any).region ?? 0) === 'pav_park') {
                    qspGoto(s, 'pav_park', 'start');
                  } else {
                    if (((s as any).region ?? 0) === 'city') {
                      qspGoto(s, 'city_residential', '');
                    } else {
                      if (((s as any).region ?? 0) === 'city_center') {
                        qspGoto(s, 'city_center', '');
                      } else {
                        if (((s as any).region ?? 0) === 'city_park') {
                          qspGoto(s, 'city_park', 'start');
                        } else {
                          if (((s as any).region ?? 0) === 'city_island') {
                            qspGoto(s, 'city_island', '');
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
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
        if (((s as any).sex_ev ?? 0)?.['hotel_days'] > 0) {
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
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
          if (((s as any).sex_ev_exit ?? 0)?.['loc'] === 'bedroom') {
            dynamicGoto(s, (((s as any).home ?? {}))['bedroom'], (((s as any).home ?? {}))['bedroom_arg']);
          } else {
            if (((s as any).sex_ev_exit ?? 0)?.['loc'] === 'hallway') {
              dynamicGoto(s, (((s as any).home ?? {}))['entrance'], (((s as any).home ?? {}))['entrance_arg']);
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  scene.build();
}

function enterExitIntoLoc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'lover_home', 'loc_init');
    qspGoto(s, 'lover_home', 'bedroom');
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
      if (((s as any).sex_ev_exit ?? 0)?.['loc'] === 'bedroom') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
        ((s as any).pcs_romance = (s as any).pcs_romance ?? {})['lover_here'] = 1;
        qspGoto(s, 'bedr', '');
      } else {
        if (((s as any).sex_ev_exit ?? 0)?.['loc'] === 'hallway') {
          ((s as any).pcs_romance = (s as any).pcs_romance ?? {})['lover_here'] = 1;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
          qspGoto(s, 'korr', '');
        }
      }
    }
  }
  scene.build();
}

function enterExitIntoDate(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_npcID = ((s as any).npcID ?? 0);
  qspCall(s, 'sex_ev_sex', 'session_reset');
  qspCall(s, 'sex_ev_clothing', 'dress_loop_end');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['dress_end'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['extra_cum'] = ((s as any).sex_ev['extra_cum'] ?? 0) + (5);
  scene.build();
}

function enterBreakUp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
    qspCall(s, 'lover', 'remove_fuckbuddy', ((s as any).npcID ?? 0));
  } else {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
      qspCall(s, 'lover', 'remove_sugar_daddy', ((s as any).npcID ?? 0));
    } else {
      qspCall(s, 'lover', 'remove', ((s as any).npcID ?? 0));
    }
  }
  qspGoto(s, 'sex_ev_leave', 'exit');
  scene.build();
}

function enterEnding(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEndCode(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (Object.keys((s as any).date_ev ?? {}).length > 0) {
    qspCall(s, 'date_ev', 'end_code');
  }
  scene.build();
}

function enterEndCode(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'save_stats');
  if (((s as any).sugar_daddy_call ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).sugar_daddy_call = (s as any).sugar_daddy_call ?? {})[String((s as any).npcID ?? 0)] = 0;
    ((s as any).sugar_gift_day = (s as any).sugar_gift_day ?? {})[String((s as any).npcID ?? 0)] = 0;
  }
  ((s as any).booty_call_hotel = (s as any).booty_call_hotel ?? {})[String((s as any).npcID ?? 0)] = '';
  qspCall(s, 'arousal', 'end');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDress(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).sex_ev ?? 0)?.['fuck'] > 0) {
    ((s as any).know_virgin = (s as any).know_virgin ?? {})[String((s as any).npcID ?? 0)] = 0;
  }
  if (((s as any).sex_ev ?? 0)?.['creampie_orgasm_count'] > 0) {
    ((s as any).stat_memory = (s as any).stat_memory ?? {})['creampie_orgasm'] = ((s as any).daystart ?? 0);
  }
  ((s as any).npc_last_sex = (s as any).npc_last_sex ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
  if (((s as any).sex_ev ?? 0)?.['prostitution_flag'] === 'prostitution'  ||  ((s as any).sex_ev ?? 0)?.['prostitution'] === 1) {
    ((s as any).npc_prostitution_count = (s as any).npc_prostitution_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_prostitution_count[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }
  if (((s as any).sex_ev ?? 0)?.['set_date'] !== 1) {
    ((s as any).npc_booty_call_date = (s as any).npc_booty_call_date ?? {})[String((s as any).npcID ?? 0)] = 0;
  }
  if (((s as any).sex_ev ?? 0)?.['hotel_days'] > 0) {
    if (((s as any).region ?? 0) === 'pav') {
      ((s as any).hotelRoom = (s as any).hotelRoom ?? {})['pav_hotel'] = 2;
    } else {
      if (((s as any).region ?? 0) === 'city') {
        ((s as any).hotelRoom = (s as any).hotelRoom ?? {})['city_hotel'] = 3;
      }
    }
    ((s as any).hotelRoomDays = (s as any).hotelRoomDays ?? {})[String(((s as any).region ?? 0)) + '_hotel'] = ((s as any).daystart ?? 0) + (((s as any).sex_ev ?? {})?.['hotel_days'] ?? 0);
    ((s as any).hotelRoom = (s as any).hotelRoom ?? {})[String(((s as any).region ?? 0)) + '_room_service_free'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home'  &&  ((s as any).home ?? 0)?.['current'] === 'parents_home') {
    ((s as any).sisterQW = (s as any).sisterQW ?? {})['sex_room'] = 1;
    ((s as any).stat = (s as any).stat ?? {})['parents_home_sex'] = ((s as any).stat['parents_home_sex'] ?? 0) + (1);
  }
  if (((s as any).sex_ev ?? 0)?.['break_up'] > 0) {
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
  (s as any).sex_ev = undefined;
  (s as any).npc_pref_traits = undefined;
  (s as any).npc_pref_values = undefined;
  scene.build();
}

function enterLeaveOptions(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
  ]);
  scene.build();
}

function enterLeaveRouter(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
  if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1  &&  ((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['boy_asleep'] !== 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    qspGoto(s, 'sex_ev_leave', 'sneak_out1');
  } else {
    if (((s as any).sex_ev ?? 0)?.['boy_asleep'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['dress_end'] < 1) {
      qspGoto(s, 'sex_ev_leave', 'dressing1');
    } else {
      if (((s as any).sex_ev ?? 0)?.['boy_asleep'] !== 1) {
        qspGoto(s, 'sex_ev_leave', 'leaving_dialogue');
      } else {
        qspGoto(s, 'sex_ev_leave', 'sneak_out1');
      }
    }
  }
  scene.build();
}

function enterHangOutAfter(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
  ((s as any).lover_ev = (s as any).lover_ev ?? {})['just_had_sex'] = 1;
  scene.text('"Do you mind if I hang out with you here for a while?" you ask.');
  if (((s as any).npc_cheating_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if ((Math.floor(Math.random() * 10) + 1) > 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).hour ?? 0) > 16) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cant_stay'] = 1;
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
        scene.text('"Sorry, can\'t. My girlfriend is coming over soon. In fact, you should leave soon before she catches you."');
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
          scene.text('"Sorry, can\'t. Booked the room for a date with my girlfriend. In fact, you should leave now before before she arrives."');
        }
      }
      scene.text('"Ugh. <i>Bitch!</i>"');
      scene.text('"Yeah, I know. Sucks."');
      qspCall(s, 'sex_ev_after', 'after_sex2');
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] !== 'hotel_room') {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
          scene.text('"Sure, my girlfriend isn\'t gonna be around. You can hang for a while."');
        } else {
          if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
            scene.text('"Sure. The room is booked until tomorrow anyways."');
          } else {
            scene.text('"Of course," he smiles.');
          }
        }
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_leave', 'exit_into_loc'] },
        ]);
      }
    }
  } else {
    if ((Math.floor(Math.random() * 10) + 1) > 7  &&  ((s as any).hour ?? 0) < 22) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cant_stay'] = 1;
      scene.text('"Sorry, can\'t. I have something to do and I can\'t leave you here alone."');
      scene.text('"Ugh, really?"');
      scene.text('"Yeah, I know. Sucks."');
      qspCall(s, 'sex_ev_after', 'after_sex2');
    } else {
      if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).hour ?? 0) > 16) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cant_stay'] = 1;
        ((s as any).npc_cheating_know = (s as any).npc_cheating_know ?? {})[String((s as any).npcID ?? 0)] = 1;
        scene.text('"Sorry, my girlfriend is coming over soon. Can\'t let her catch you here."');
        scene.text('"Ugh, really?"');
        scene.text('"Yeah, I know. Sucks."');
        qspCall(s, 'sex_ev_after', 'after_sex2');
      } else {
        scene.text('"Sure, I\'m not doing anything so you can hang out for a while."');
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cant_stay'] = 1;
        scene.text('"Sorry, can\'t. I have something to do and I can\'t leave you here alone."');
        scene.text('"Ugh, really?"');
        scene.text('"Yeah, I know. Sucks."');
        qspCall(s, 'sex_ev_after', 'after_sex2');
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_leave', 'qspUntranslated(s, "\'exit_into_loc\'}", { location: "sex_ev_leave" })'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterGoOutCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['unique_npc'] === 0  &&  ((s as any).hour ?? 0) >= 11  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'house_party'  &&  ((s as any).sex_ev ?? 0)?.['go_out_check'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['go_out_check'] = 1;
    if ((Array.isArray((s as any).date_ev) ? ((s as any).date_ev as any[]).indexOf('lunch_date') : -1) < 0  &&  ((s as any).hour ?? 0) <= 14) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['lunch_flag'] = 1;
    }
    if ((Array.isArray((s as any).date_ev) ? ((s as any).date_ev as any[]).indexOf('dinner_date') : -1) < 0  &&  ((s as any).hour ?? 0) >= 17) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['dinner_flag'] = 1;
    }
  }
  scene.build();
}

function enterScaredExit(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Gather your things and leave', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('After seeing his explosive anger, you don\'t want to stick around any longer than you have to. You throw your clothes on as fast as you can, grab your things, and run out the door.');
    scene.actions([
      { label: 'Escape', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGoOutAfter(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGoOutCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  if ((((s as any).sex_ev ?? 0)?.['lunch_flag'] === 1  ||  ((s as any).sex_ev ?? 0)?.['dinner_flag'] === 1)  &&  ((s as any).sex_ev ?? 0)?.['decline_date'] === 0) {
    scene.actions([
      { label: 'Want to grab a bite?', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
    if ((Array.isArray((st as any).date_ev) ? ((st as any).date_ev as any[]).indexOf('lunch_date') : -1) < 0) {
      scene.text('"You hungry? Fancy grabbing something to eat?"');
    } else {
      scene.text('"You hungry again by chance? Feel like grabbing some dinner?"');
    }
    if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup'  &&  ((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'sex'  &&  (!((st as any).date_ev ?? 0))) {
      if (((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] < 0) {
        scene.text(`"I'm, uhh... not really looking for anything serious," ${(((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')} stammers out. "This was just sex..."`);
      } else {
        scene.text(`"I'm not really looking for anything serious," ${(((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')} says. "This was just sex."`);
      }
      scene.actions([
        { label: 'Oh... (awkward)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['decline_date'] = 1;
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"O-oh..."');
    scene.text('Well, this is awkward.');
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
        { label: 'You know that', handler: (st: GameState) => {
    scene.text('"And this is just food," you snicker, rolling your eyes. "I\'m not talking about dating or anything like that. I\'m just asking if you\'re hungry."');
    scene.text('"Well... I guess so."');
    scene.actions([
      { label: 'Get dressed', goto: ['sex_ev_leave', 'go_out_together'] },
    ]);
  } },
      ]);
    } else {
      scene.text(`"Sure, I could go for some food," ${(((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')} smiles.`);
      if (((st as any).clothingworntype ?? 0) === 'nude') {
        scene.actions([
          { label: 'Get dressed', goto: ['sex_ev_leave', 'go_out_together'] },
        ]);
      } else {
        scene.actions([
          { label: 'Go out', goto: ['sex_ev_leave', 'go_out_together'] },
        ]);
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterGoOutTogether(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'restore', 'sex_ev');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['undressed_check'] = 0;
  scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
  scene.text('You both get dressed and head out together.');
  scene.actions([
    { label: 'Walk to the local cafe', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', '');
  }, goto: ['date_casual_meal', 'start', 'together'] },
  ]);
  scene.build();
}

function enterLeavingDialogue(s: GameState, scene: SceneBuilder): void {
  scene.text('"I gotta get going," you say.');
  scene.text('"Okay, see you later."');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeavingDialogueChoices(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterLeavingDialogueChoices(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['mad'] === 1  ||  ((s as any).sex_ev ?? 0)?.['angry_after']) {
    scene.actions([
      { label: 'Leave angrily', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart1.mp4');
    scene.text('You don\'t reply, just grab your things in irritation and stalk out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: 'Hide your annoyance', handler: (st: GameState) => {
    scene.text('"Later," you say flatly and grab your things to stalk out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
        scene.actions([
          { label: 'Text me any time', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = 'Text me any time you want some company';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        scene.actions([
          { label: '"Text me"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = 'Text me';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
        scene.actions([
          { label: '"See you soon"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = 'See you soon';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0) + 1) {
          scene.actions([
            { label: '"See you tomorrow"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = 'See you tomorrow';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          scene.actions([
            { label: '"Till next time"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = 'Till next time';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      }
      scene.actions([
        { label: '"Let\'s do this again"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = 'Let\'s do this again sometime';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
      scene.actions([
        { label: 'Don\'t forget the money', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = 'Just make sure you have the money ready for next time';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: '"Bye"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = 'Bye';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: '"See ya"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = 'See ya';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: '"Toodles"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = 'Toodles';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.build();
}

function enterLeavingAction(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Smile', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', flashing him a quick smile just before you head back out into the party';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', flashing him a quick smile just before you close the door behind you';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Wave goodbye', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', waggling your fingers at him and head back out into the party';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', waggling your fingers at him just before you close the door behind you';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Wink', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ' with a wink as you head back out into the party';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ' with a wink just before you close the door behind you';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Blow him a kiss', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', blowing him a kiss just before heading back out into the party';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', blowing him a kiss just before you close the door behind you';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Kiss his cheek', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', stopping to give him a quick peck on the cheek before heading back out into the party';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', stopping to give him a quick peck on the cheek before heading out the door';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Kiss him', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', stopping to give him a quick peck on the lips before heading back out into the party';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', stopping to give him a quick peck on the lips before heading out the door';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Kiss him deeply', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', stopping to give him a long drawn out kiss. It\'s several seconds before you pull away, a string of saliva following your tongue as it exits his mouth. The last thing he sees is the smoldering look you give him before heading back out into the party';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', stopping to give him a long drawn out kiss. It\'s several seconds before you pull away, a string of saliva following your tongue as it exits his mouth. The last thing he sees is the smoldering look you give him heading out the door';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Shake your ass', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', giving him a teasing shake of your ass just before you head back out into the party';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ', giving him a teasing shake of your ass just before you close the door behind it';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Nonchalant', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ' nonchalantly and head back out into the party';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = ' nonchalantly and head out the door without a second glance';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterLeavingEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'prostitution_pay_calc');
  if (((s as any).sex_ev ?? 0)?.['sugar_daddy_paid'] === 0  &&  ((s as any).sex_ev ?? 0)?.['prostitution_paid'] === 0) {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy'  &&  ((s as any).sex_ev ?? 0)?.['sugar_daddy_paid'] === 0) {
      if (((s as any).npc_prostitution_tab ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['prostitution_bonus'] > 0) {
        scene.text(`Just before you go, ${((s as any).npcdesc ?? '')} hands you ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))}, including the bonus and money he owed you from the last time too.`);
      } else {
        if (((s as any).npc_prostitution_tab ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          scene.text(`Just before you go, ${((s as any).npcdesc ?? '')} hands you ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))}, including the money he owed you from last time.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['prostitution_bonus'] > 0) {
            scene.text(`Just before you go, ${((s as any).npcdesc ?? '')} hands you ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))}, including the bonus he owes you.`);
          } else {
            scene.text(`Just before you go, ${((s as any).npcdesc ?? '')} hands you ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))}.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1  &&  ((s as any).sex_ev ?? 0)?.['prostitution_paid'] === 0) {
        if (((s as any).npc_prostitution_tab ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['prostitution_bonus'] > 0) {
          scene.text(`Before you leave, you make sure to collect the ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))} promised to you for whoring yourself out to ${((s as any).npcdesc ?? '')}, including the bonus and money he owed you from the last time too.`);
        } else {
          if (((s as any).npc_prostitution_tab ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            scene.text(`Before you leave, you make sure to collect the ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))} promised to you for whoring yourself out to ${((s as any).npcdesc ?? '')}, including the money he owed you from last time.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['prostitution_bonus'] > 0) {
              scene.text(`Before you leave, you make sure to collect the ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))} promised to you for whoring yourself out to ${((s as any).npcdesc ?? '')}, including the bonus he owes you.`);
            } else {
              scene.text(`Just before you go, ${((s as any).npcdesc ?? '')} hands you ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))}.`);
            }
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_stats', 'prostitution_pay_code');
  scene.text(`"${(((s as any).sex_ev ?? 0)?.['leave_dialogue'] ?? '')}," you say${(((s as any).sex_ev ?? 0)?.['leave_action'] ?? '')}.`);
  qspGoto(s, 'sex_ev_leave', 'leave_options');
  scene.build();
}

function enterNpcLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcID ?? 0) === 'A34') {
    qspCall(s, 'sex_ev_A34', 'kolka_leave');
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Get up and leave ' + String(((s as any).npcdesc ?? '') ?? '') + ' in bed', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text(`Not wanting to wake ${((st as any).npcdesc ?? '')}, you sneak over to the door and let yourself out, closing it as gently as you can behind you.`);
    // TODO-QSP: end}
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
      { label: '', labelFn: (s: GameState) => 'Tell ' + String(((st as any).npcdesc ?? '') ?? '') + ' to leave', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    if (((st as any).sex_ev ?? 0)?.['angry_after'] === 1  ||  ((st as any).sex_ev ?? 0)?.['annoyed'] > 0) {
      scene.text('"You should go," you say flatly.');
      scene.text(`${((st as any).npcdesc ?? '')} stiffly gets out of bed and gets dressed, neither of you really looking the other in the eye as he does. After a minute or two, he's finished and leaves without another word.`);
      scene.actions([
        { label: 'Finish', goto: ['sex_ev_leave', 'exit'] },
      ]);
    } else {
      if (((st as any).home ?? 0)?.['current'] === 'parents_home'  &&  ((st as any).locat ?? 0)?.['Fam_inGad'] === 1  &&  ((st as any).week ?? 0) === 7  &&  ((st as any).hour ?? 0) > 16) {
        scene.text(`"This was fun, but you should probably go." You smile ruefully. "My parents are coming home soon." ${((st as any).npcdesc ?? '')} nods and moves to start picking up his clothes and get dressed.`);
      } else {
        scene.text(`"This was fun, but you should probably go," you say to ${((st as any).npcdesc ?? '')}, who nods and moves to start picking up his clothes and get dressed.`);
      }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterNpcLeavingAction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Stay in bed (covers on)', handler: (st: GameState) => {
    ((st as any).sex_ev_exit = (st as any).sex_ev_exit ?? {})['loc'] = 'bedroom';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action1'] = 'You stay sat on the bed, demurely pulling the sheets up around you to preserve some modesty as you watch ' + ((st as any).npcdesc ?? 0) + ' get dressed. As he finishes, you say,';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action2'] = 'He flashes you a quick smile and then gathers the rest of his stuff to leave, closing the door behind him.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingDialogue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Stay in bed (covers off)', handler: (st: GameState) => {
    ((st as any).sex_ev_exit = (st as any).sex_ev_exit ?? {})['loc'] = 'bedroom';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = 'You stay sat on the bed, casually laying nude atop the sheets as you watch ' + ((st as any).npcdesc ?? 0) + ' get dressed. He throws more than a few admiring glances your way as he does and when he finishes you say,';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action2'] = 'He flashes you a quick smile and then gathers the rest of his stuff to leave, closing the door behind him.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingDialogue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'Kiss goodbye', handler: (st: GameState) => {
    ((st as any).sex_ev_exit = (st as any).sex_ev_exit ?? {})['loc'] = 'bedroom';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = 'You sit on the bed, waiting patiently for ' + ((st as any).npcdesc ?? 0) + ' to get dressed. Once he\'s finished you move over to him and give him a gentle kiss on the lips, saying,';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action2'] = 'He flashes you a quick smile and then gathers the rest of his stuff to leave, closing the door behind him.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingDialogue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '', labelFn: (s: GameState) => 'See ' + String(((s as any).npcdesc ?? '') ?? '') + ' to the door', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      ((st as any).sex_ev_exit = (st as any).sex_ev_exit ?? {})['loc'] = 'hallway';
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = 'You sit on the bed, waiting patiently for ' + ((st as any).npcdesc ?? 0) + ' to get dressed. Once he\'s finished you move to take him to the door, making no move to get dressed yourself. Opening it for him, he steps out and you stand completely nude in the frame and say,';
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action2'] = 'He flashes you a quick smile in return before stepping off. You watch him go for a few moments before heading back inside and closing the door behind you.';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = 'You sit on the bed, waiting patiently for ' + ((st as any).npcdesc ?? 0) + ' to get dressed. Once he\'s finished you move to take him to the door. As he steps out, you say,';
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action2'] = 'He flashes you a quick smile in return before stepping off. You watch him go for a few moments before heading back inside and closing the door behind you.';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingDialogue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '', labelFn: (s: GameState) => 'Kiss ' + String(((s as any).npcdesc ?? '') ?? '') + ' at the door', handler: (st: GameState) => {
    ((st as any).sex_ev_exit = (st as any).sex_ev_exit ?? {})['loc'] = 'hallway';
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = 'You sit on the bed, waiting patiently for ' + ((st as any).npcdesc ?? 0) + ' to get dressed. Once he\'s finished you move to take him to the door, making no move to get dressed yourself. Just as ' + ((st as any).npcdesc ?? 0) + ' steps out, you grab hold of his shirt to drag him back into a passionate kiss, pulling him tight against your naked body, a sight to be seen by anyone who has a view of your front door. After several long seconds, you break the kiss, saying,';
      if ((Math.floor(Math.random() * 1) + 1) === 5) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action2'] = 'You pull ' + ((st as any).npcdesc ?? 0) + ' back in for another kiss, but softer and quicker. As you pull back somebody walks past behind him, staring wide eyed at your chest. ';
      } else {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action2'] = 'You pull ' + ((st as any).npcdesc ?? 0) + ' back in for another kiss, but softer and quicker. He flashes you a quick smile in return before stepping off. You watch him go for a few moments before closing the door behind you.';
      }
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = 'You sit on the bed, waiting patiently for ' + ((st as any).npcdesc ?? 0) + ' to get dressed. Once he\'s finished you move to take him to the door, making no move to get dressed yourself. Just as ' + ((st as any).npcdesc ?? 0) + ' steps out, you grab hold of his shirt to pull him into a passionate kiss. After several long seconds, you break the kiss, saying,';
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action2'] = 'You pull ' + ((st as any).npcdesc ?? 0) + ' back in for another kiss, but softer and quicker. He flashes you a quick smile in return before stepping off. You watch him go for a few moments before heading back inside and closing the door behind you.';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingDialogue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterNpcLeavingDialogue(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    scene.actions([
      { label: '"Wanna do this again?"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['invite_today'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.actions([
      { label: '"Wanna do this again? tomorrow?"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['invite_tomorrow'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
    scene.actions([
      { label: '"See you soon"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = '"See you soon."';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0) + 1) {
      scene.actions([
        { label: '"See you tomorrow"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = '"See you tomorrow."';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Till next time"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = '"Till next time."';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: '"Wanna do this again?"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['invite_today'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end}
  scene.actions([
    { label: '"Thanks for coming over."', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['sleepover'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = '"Thanks for coming over last night. It was fun."';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = '"Thanks for coming over. It was fun."';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '"See ya"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = '"See ya."';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '"Text me"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = '"Text me."';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '"Wanna do this again? tomorrow?"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['invite_tomorrow'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterNpcLeavingEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['invite_today'] === 0  &&  ((s as any).sex_ev ?? 0)?.['invite_tomorrow'] === 0) {
    scene.text(`${(((s as any).sex_ev ?? 0)?.['leave_action1'] ?? '')} ${(((s as any).sex_ev ?? 0)?.['leave_dialogue'] ?? '')} ${(((s as any).sex_ev ?? 0)?.['leave_action2'] ?? '')}`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['invite_today'] === 1) {
      scene.text(`${(((s as any).sex_ev ?? 0)?.['leave_action1'] ?? '')}`);
      scene.text('"Want to do this again later?" you ask.');
      scene.text(`${(((s as any).sex_ev ?? 0)?.['leave_action2'] ?? '')}`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['invite_tomorrow'] === 1) {
        scene.text(`${(((s as any).sex_ev ?? 0)?.['leave_action1'] ?? '')}`);
        scene.text('"Want to do this again tomorrow?" you ask.');
        scene.text(`${(((s as any).sex_ev ?? 0)?.['leave_action2'] ?? '')}`);
      }
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
  ]);
  scene.build();
}

function enterHurryLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
    scene.actions([
      { label: 'Leave your number (fuckbuddy)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuckbuddy_invite'] = 1;
    if (((st as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = ', stopping to scribble your number on a random piece of paper. "Text me if you want to fuck again!" you call over your shoulder as you dash out the door, slamming it behind you.';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = ', stopping to scribble your number on a random piece of paper. "Text me if you want to fool around again!" you call over your shoulder as you dash out the door, slamming it behind you.';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHurryLeave2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Leave your number (date)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['date_invite'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = ', stopping to scribble your number on a random piece of paper. "Text me if you want to go out on a date some time!" you call over your shoulder as you dash out the door, slamming it behind you.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHurryLeave2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] === 1  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'husband') {
    scene.actions([
      { label: '"See you soon"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = ', shouting, "See you soon!" just before it slams behind you.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHurryLeave2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0) + 1) {
      scene.actions([
        { label: '"See you tomorrow"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = ', shouting, "See you tomorrow!" just before it slams behind you.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHurryLeave2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'No time for goodbyes', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = ' without even saying goodbye';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHurryLeave2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '"See you later!"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = ', calling, "See you later!" just before it slams behind you.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHurryLeave2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '"Text me!"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_dialogue'] = ', calling, "Text me!" just before it slams behind you.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHurryLeave2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterHurryLeave2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Run!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = 'You make sure all your clothes are in place with one last quick check and dash to the door';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHurryLeaveFinish(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Peck on the cheek', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = 'You make sure all your clothes are in place with one last quick check and dash over to ' + ((st as any).npcdesc ?? 0) + ' to give him a quick kiss on the cheek';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHurryLeaveFinish(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Peck on the lips', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = 'You make sure all your clothes are in place with one last quick check and dash over to ' + ((st as any).npcdesc ?? 0) + ' to give him a quick kiss on the lips';
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', '');
  } },
    ]);
  } },
    { label: 'Passionate kiss', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leave_action'] = 'You make sure all your clothes are in place with one last quick check and dash over to ' + ((st as any).npcdesc ?? 0) + ' to kiss him. Despite your rush, you savour this moment, breathing in the taste of ' + ((st as any).npcdesc ?? 0) + '\'s lips even as you force your tongue into his mouth to dance with his. A full five seconds go by until you break the kiss';
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHurryLeaveFinish(s: GameState, scene: SceneBuilder): void {
  scene.text(`"${(((s as any).sex_ev ?? 0)?.['leave_action'] ?? '')}${(((s as any).sex_ev ?? 0)?.['leave_dialogue'] ?? '')}.`);
  if (((Math.floor(Math.random() * 3) + 1) === 1  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious')  &&  ((s as any).sex_ev ?? 0)?.['fuckbuddy_invite'] === 1) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    alert('Unfortunately, he never ends up texting you.');
  }, goto: ['sex_ev_leave', 'exit'] },
    ]);
  } else {
    if (((Math.floor(Math.random() * 3) + 1) === 1  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex')  &&  ((s as any).sex_ev ?? 0)?.['date_invite'] === 1) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    alert('Unfortunately, he never ends up texting you.');
  }, goto: ['sex_ev_leave', 'exit'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuckbuddy_invite'] === 1) {
        qspCall(s, 'sex_ev_stats', 'fuckbuddy_add');
      } else {
        if (((s as any).sex_ev ?? 0)?.['date_invite'] === 1) {
          qspCall(s, 'sex_ev_stats', 'lover_add');
        }
      }
      scene.actions([
        { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
      ]);
    }
  }
  scene.build();
}

function enterBreakupStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'husband'  &&  ((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
    scene.actions([
      { label: 'Break things off', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('iif($sex_ev[\'loc\'] ! \'pc_home\',\'"This is the last time I\'m coming over," you say, abruptly.\',\'"This is the last time you can come over," you say abruptly.\')');
    scene.text(`"Huh?" ${((st as any).npcdesc ?? '')} looks at you oddly. "What are you talking about?"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakupMid(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.build();
}

function enterBreakupMid(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'boyfriend') {
    scene.text('"I\'m breaking up with you."');
    scene.text('"What?!" he asks.');
    scene.actions([
      { label: 'Don\'t explain', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"I just can\'t be with you anymore," you say. "I\'m sorry."');
    scene.text('You grab your things and leave.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
    ]);
  } else {
    scene.text('"Don\'t text me to come over anymore."');
    scene.text('"Why not?" he asks.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUnsatisfiedBreakup(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoMoreCheatingBreakup(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Don\'t explain', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"I just can\'t do this any longer," you say. "I\'m sorry."');
    scene.text('You grab your things and leave.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterUnsatisfiedBreakup(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'You don\'t satisfy me', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"You\'re just not what I want out of a fuckbuddy," you say flatly.');
    if (((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_two_pump ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.actions([
        { label: 'You\'re a two pump chump', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"You\'re just not what I want out of a fuckbuddy," you say flatly. "You come too fast. I can\'t trust you to get me off."');
    scene.text('"Wait but-"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterIsntGoingToWork(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if (((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)] < 5) {
        scene.actions([
          { label: 'You don\'t last long enough for me', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"You\'re just not what I want out of a fuckbuddy," you say flatly. "You can\'t keep it up and I can\'t trust you to get me off."');
    scene.text('"Wait but-"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterIsntGoingToWork(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'You last too long', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"You\'re just not what I want out of a fuckbuddy," you say flatly. "Honestly, your sex drive is way too high. By the time you\'re satisfied, my pussy is sore."');
    scene.text('"Wait but-"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterIsntGoingToWork(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Sexually incompatible', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"You\'re just not what I want out of a fuckbuddy," you say flatly. "I just don\'t think we\'re sexually compatible."');
    scene.text('You shrug once, grab your things, and leave without another word.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNoMoreCheatingBreakup(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).stat ?? 0)?.['boyfriends_current'] > 0  ||  ((s as any).stat ?? 0)?.['girlfriends_current'] > 0)  &&  (((s as any).npc_know_have_boyfriend ?? 0) + ((s as any).npc_know_have_girlfriend ?? 0) === 0)) {
    if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      scene.actions([
        { label: 'I can\'t keep cheating on my boyfriend', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    if (((st as any).npc_know_cheat ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"I can\'t keep cheating on my boyfriend like this," you say, hanging your head shamefully. "It\'s wrong, and I just can\'t do this anymore. I have to go."');
    } else {
      scene.text('"The truth is, I\'m in a relationship with somebody," you say, hanging your head shamefully. "I\'ve been cheating on them with you this whole time. It\'s wrong, and I— I just can\'t do this anymore!"');
    }
    scene.text('You grab your things and rush out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
      ]);
    }
    if (((s as any).stat ?? 0)?.['girlfriends_current'] > 0) {
      scene.actions([
        { label: 'I can\'t keep cheating on my girlfriend', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    if (((st as any).npc_know_cheat ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"I can\'t keep cheating on my girlfriend like this," you say, hanging your head shamefully. "It\'s wrong, and I just can\'t do this anymore. I have to go."');
    } else {
      scene.text('"The truth is, I\'m in a relationship with somebody," you say, hanging your head shamefully. "I\'ve been cheating on them with you this whole time. It\'s wrong, and I— I just can\'t do this anymore!"');
    }
    scene.text('You grab your things and rush out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I\'ve started seeing somebody', handler: (st: GameState) => {
    ((st as any).npc_know_cheat = (st as any).npc_know_cheat ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"The truth is, I\'ve started seeing somebody. The sex has been good, but..." You shake your head, grabbing your purse. "I can\'t keep doing this. I don\'t want to fuck things up."');
    if (((st as any).npc_fidelity_label ?? 0)?.[String((st as any).boy ?? 0)] !== 'faithful'  &&  ((st as any).npc_fidelity_label ?? 0)?.[String((st as any).boy ?? 0)] !== 'open') {
      scene.text('"Come on," he says. "We\'re just having fun. It\'s not cheating if it\'s just physical. When you masturbate in the shower, you\'re not cheating on him with your showerhead are you?"');
      scene.actions([
        { label: 'No means no', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"You\'re not going to change my mind," you say. "We\'re done."');
    scene.text('And with that, you head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
        { label: 'Well...', handler: (st: GameState) => {
    scene.text('You pause, biting your lip in consideration.');
    scene.actions([
      { label: 'As long as it\'s just physical', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"Well..." you say slowly. "As long as it\'s <i>just</i> physical..."');
    scene.text(`"Thatta girl," ${((st as any).npcdesc ?? '')} grins from bed.`);
    qspCall(st, 'sex_ev_after', 'cheating_end');
  } },
      { label: 'Set some rules', handler: (st: GameState) => {
    scene.text('"Okay..." you say. "But there have to be rules!"');
    qspCall(st, 'sex_ev_talk', 'cheating_rules');
  } },
    ]);
  } },
      ]);
    } else {
      scene.text(`"Oh." ${(((st as any).npc_firstname ?? 0)?.[String((st as any).npclastsaved ?? 0)] ?? '')} looks at you. "I guess that's fair. So... I'll see you around?"`);
      scene.actions([
        { label: 'See you', handler: (st: GameState) => {
    scene.text('"Yeah," you mumble wistfully. "See you..."');
    scene.text('And with that, you head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
        { label: 'No I won\'t', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"No, I won\'t," you frown. "That\'s the point."');
    scene.text('And with that, you head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterIsntGoingToWork(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Grab your things', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"This just isn\'t going to work," you say, cutting him off. "We\'re done."');
    scene.text('And with that, you head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNoCondomBreakoff(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_no_condoms_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.actions([
      { label: 'I can\'t do this (break things off)', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"Fuck this," you say, getting up and grabbing your clothes.');
    scene.text(`"Where the fuck are you going?" ${((st as any).npcdesc ?? '')} asks in bewilderment.`);
    scene.text('"I\'m not gonna be fuckbuddies with a guy who never uses condoms," you sneer at him. "<i>Don\'t</i> text me again."');
    scene.text('The second you\'re dressed you stalk out the door and slam it behind you.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterSneakOut1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Leave your panties', handler: (st: GameState) => {
    ((st as any).npc_panty_give = (st as any).npc_panty_give ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_panty_give[String((st as any).npcID ?? 0)] ?? 0) + (1);
    qspCall(st, 'panties', 'dispose');
    scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
    if (((st as any).PCloSkirt ?? 0) > 0) {
      scene.text(`Suddenly feeling naughty, you quickly slip your panties down your legs, leaving your pussy bare underneath your skirt. You loop your warm underwear around the handle of ${((st as any).npcdesc ?? '')}'s bedroom door and then quietly sneak out of his apartment, leaving only your gift behind.`);
    } else {
      scene.text(`Suddenly feeling naughty, you pull down your trousers down and spend a minute untangling your legs before pulling your bottoms back up back up, sans panties. You loop your warm underwear around the handle of ${((st as any).npcdesc ?? '')}'s bedroom door and then quietly sneak out of his apartment, leaving only your gift behind.`);
    }
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: 'Leave your a note on your panties', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['panty_note'] = 1;
    ((st as any).npc_panty_give = (st as any).npc_panty_give ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_panty_give[String((st as any).npcID ?? 0)] ?? 0) + (1);
    qspCall(st, 'panties', 'dispose');
    scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
    if (((st as any).PCloSkirt ?? 0) > 0) {
      scene.text(`Not wanting to leave without saying goodbye but not wanting to wake ${((st as any).npcdesc ?? '')} either, you start to look for a piece of paper when a naughty thought runs through your mind. Unable to resist the thought, you quickly slip your panties down from underneath your skirt and then rummage for a big marker.`);
    } else {
      scene.text(`Not wanting to leave without saying goodbye but not wanting to wake ${((st as any).npcdesc ?? '')} either, you start to look for a piece of paper when a naughty thought runs through your mind. Unable to resist the thought, you quickly pull down your trousers down and spend a minute untangling your legs before pulling your bottoms back up, sans panties. Then you rummage for a big marker.`);
    }
    scene.text('You pop the cap with a grin and start scribbling.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNote1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1  &&  ((s as any).sex_ev ?? 0)?.['prostitution_paid'] === 0  &&  ((s as any).sex_ev ?? 0)?.['boy_asleep'] === 1) {
    scene.actions([
      { label: 'Wake him up for your money', goto: ['sex_ev_leave', 'prostitution_wakeup1'] },
    ]);
  }
  scene.actions([
    { label: 'Sneak out', goto: ['sex_ev_leave', 'sneak_out2'] },
    { label: 'Leave a note', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
    scene.text(`Not wanting to leave without saying goodbye but not wanting to wake ${((st as any).npcdesc ?? '')} either, you find a piece of paper and a pen and scribble out a quick message.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNote1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterProstitutionWakeup1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'prostitution_pay_code');
  scene.actions([
    { label: 'Be nice', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text(`Gently, you shake ${((st as any).npcdesc ?? '')}'s shoulder until he starts awake.`);
    scene.text('"Huh-?" He looks around, blinking in confusion.');
    if (((st as any).sex_ev ?? 0)?.['sleepover'] === 1) {
      scene.text('iif($npc_rel_type[$npcID] = \'sugar_daddy\', \'"Hey," you smile softly. "I had a great time last night but I really need to get going. Can your baby girl get her sugar?"\', \'"Hey," you smile softly. "I had a great time last night but I really need to get going. Can I uhm... get the money for it...?"\')');
    } else {
      scene.text('iif($npc_rel_type[$npcID] = \'sugar_daddy\', \'"Hey," you smile softly. "I had a great time but I really need to get going. Can your baby girl get her sugar?"\', \'"Hey," you smile softly. "I had a great time but I really need to get going. Can I uhm... get the money for it...?"\')');
    }
    scene.text('"Oh. Yeah," he mumbles, sitting up slowly. "Just lemme..."');
    scene.text(`Very slowly, he pulls out some notes from his wallet, needing to recount several times before getting the right amount of ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? 0)?.['prostitution_paid'] ?? ''))}.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterProstitutionWakeup2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Be transactional', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text(`Without any particular courtesy or care, you shake ${((st as any).npcdesc ?? '')}'s shoulder until he starts awake.`);
    scene.text('"Huh-?" He looks around, blinking in confusion.');
    scene.text('"I need to go," you say bluntly. "Where\'s my money?"');
    scene.text('"Oh. Yeah," he mumbles, sitting up slowly. "Just lemme..."');
    scene.text(`Very slowly, he pulls out some notes from his wallet, needing to recount several times before getting the right amount of ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? 0)?.['prostitution_paid'] ?? ''))}.`);
    scene.text('"Thanks." You snatch the money and barely pause to stuff it into your purse as you head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterProstitutionWakeup2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Thank him', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"Thanks daddy," you say and tuck the money into your purse before slipping out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    { label: 'Kiss his cheek', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"Thanks daddy," you smile, tucking the money into your purse and giving him a quick peck on the cheek before slipping out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    { label: 'Peck him on the lips', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"Thanks daddy," you smile, tucking the money into your purse and giving him a quick peck on the lips before slipping out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    { label: 'Kiss him deeply', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text(`"Thanks daddy," you smile. You tuck the money into your purse and turn back, suddenly pulling ${((st as any).npcdesc ?? '')}'s face into a deep kiss, inhaling his taste, his scent, and pushing your tongue between his lips. It's several seconds before you let it end and a trail of saliva hangs between you when you finally break the kiss. After a smoldering gaze, you lick your lips and slip out the door.`);
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSneakOutNote1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    scene.actions([
      { label: 'Thanks for the fuck', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['note_desc1'] = '<i>Thanks for the fuck.</i>';
    scene.text(String(qspFunc(s, 'sex_ev', 'note_desc1') || ''));
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNote2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1  &&  ((s as any).sex_ev ?? 0)?.['prostitution_paid'] === 0) {
    scene.actions([
      { label: 'This one\'s a freebie', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['prostitution_freebie'] = 1;
    scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['note_desc1'] = '<i>Consider last night a freebie.</i>';
    scene.text('You didn\'t get paid last night and he\'s still asleep, but you can\'t bring yourself to wake him.');
    scene.text(String(qspFunc(s, 'sex_ev', 'note_desc1') || ''));
    if (((st as any).sex_ev ?? 0)?.['orgasm_count'] > 0) {
      scene.text('You twist your mouth in a wry smirk as you scribble out the first half. Maybe in some ways, the orgasms you got were payment enough.');
    } else {
      scene.text('You twist your mouth in a wry smirk as you scribble out the first half. Maybe in some ways, the sex you had was payment enough.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNote2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I\'ll add this to your tab', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    ((st as any).npc_prostitution_tab = (st as any).npc_prostitution_tab ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_prostitution_tab[String((st as any).npcID ?? 0)] ?? 0) + ((((st as any).sex_ev ?? 0)?.['prostitution_sum']));
    scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['note_desc1'] = '<i>I\'ll add tonight to your tab.</i>';
    scene.text('You didn\'t get paid last night and he\'s still asleep, but you can\'t bring yourself to wake him.');
    scene.text(String(qspFunc(s, 'sex_ev', 'note_desc1') || ''));
    if (((st as any).sex_ev ?? 0)?.['orgasm_count'] > 0) {
      scene.text('You twist your mouth in a wry smirk as you scribble out the first half. Maybe that\'s worth a delayed payment.');
    } else {
      scene.text('You twist your mouth in a wry smirk as you scribble out the first half. Maybe in some ways, the sex you had was worth a delayed payment.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNote2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'Thanks for letting me stay over', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['note_desc1'] = '<i>Thanks for letting me spend the night.</i>';
    scene.text(String(qspFunc(s, 'sex_ev', 'note_desc1') || ''));
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNote2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I had a good time', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['note_desc1'] = '<i>I had a good time last night.</i>';
    scene.text(String(qspFunc(s, 'sex_ev', 'note_desc1') || ''));
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNote2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterProstitutionTabNote1(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSneakOutNote2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
    scene.actions([
      { label: 'Text me (fuckbuddies)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuckbuddy_invite'] = 1;
    if (((st as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['note_desc2'] = '<i>Text me if you want to fuck again.</i>';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['note_desc2'] = '<i>Text me if you want to fool around again.</i>';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNote3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Text me (date)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['date_invite'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['note_desc2'] = '<i>Text me if you want to go out on a date sometime.</i>';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNote3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Text me', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['note_desc2'] = '<i>Don\'t forget to text me.</i>';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNote3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'It was fun', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['note_desc2'] = '<i>It was fun.</i>';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNote3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'See ya', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['note_desc2'] = '<i>See ya later.</i>';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNote3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Till next time', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['note_desc2'] = '<i>Until next time.</i>';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNote3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSneakOutNote3(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
  scene.text(`${(((s as any).sex_ev ?? 0)?.['note_desc1'] ?? '')} ${(((s as any).sex_ev ?? 0)?.['note_desc2'] ?? '')}`);
  scene.text('You sign it with...');
  if (((s as any).pcs_makeup ?? 0) > 2) {
    scene.actions([
      { label: 'A kiss', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
    scene.text(`${(((st as any).sex_ev ?? 0)?.['note_desc1'] ?? '')} ${(((st as any).sex_ev ?? 0)?.['note_desc2'] ?? '')}`);
    if (((st as any).sex_ev ?? 0)?.['panty_note'] === 1) {
      scene.text('You run your tongue over your lips and press them together a moment before signing your note with a big sloppy wet smooch. As you pull back, your lipstick leaves a large kiss mark across your discarded panties. Good thing you did your makeup before you left.');
    } else {
      scene.text('You run your tongue over your lips and press them together a moment before signing your note with a big sloppy wet smooch. As you pull back, your lipstick leaves large kiss on the page. Good thing you did your makeup before you left.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNoteEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'Just your name', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
    scene.text(`${(((st as any).sex_ev ?? 0)?.['note_desc1'] ?? '')} ${(((st as any).sex_ev ?? 0)?.['note_desc2'] ?? '')} - ${((st as any).pcs_nickname ?? '')}`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNoteEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'A smiley face', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
    scene.text(`${(((st as any).sex_ev ?? 0)?.['note_desc1'] ?? '')} ${(((st as any).sex_ev ?? 0)?.['note_desc2'] ?? '')} <b><i>:)</i></b>`);
    scene.text('You leave a little face, unable to keep yourself from smiling as you dot two little eyes over the mouth.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNoteEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'A winky face', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
    scene.text(`${(((st as any).sex_ev ?? 0)?.['note_desc1'] ?? '')} ${(((st as any).sex_ev ?? 0)?.['note_desc2'] ?? '')} <b><i>;)</i></b>`);
    scene.text('You leave a little face, unable to keep yourself from smiling as you dot little winky eyes over the mouth.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNoteEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'A heart', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
    scene.text(`${(((st as any).sex_ev ?? 0)?.['note_desc1'] ?? '')} ${(((st as any).sex_ev ?? 0)?.['note_desc2'] ?? '')} <b><i><3</i></b>`);
    scene.text('You punctuate the note with a tiny little heart, feeling warmth in your chest as you do.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSneakOutNoteEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSneakOutNoteEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['panty_note'] === 1) {
    scene.text(`Satisfied, you leave your panties on the counter and quietly slip out the door, wondering what ${((s as any).npcdesc ?? '')} will think when he discovers them.`);
  } else {
    scene.text('Satisfied, you leave your note on the counter and quietly slip out the door, letting it click shut behind you.');
  }
  if (((Math.floor(Math.random() * 3) + 1) === 1  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious')  &&  ((s as any).sex_ev ?? 0)?.['fuckbuddy_invite'] === 1) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    alert('Unfortunately, he never ends up texting you.');
  }, goto: ['sex_ev_leave', 'exit'] },
    ]);
  } else {
    if (((Math.floor(Math.random() * 3) + 1) === 1  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex')  &&  ((s as any).sex_ev ?? 0)?.['date_invite'] === 1) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    alert('Unfortunately, he never ends up texting you.');
  }, goto: ['sex_ev_leave', 'exit'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuckbuddy_invite'] === 1) {
        qspCall(s, 'sex_ev_stats', 'fuckbuddy_add');
      } else {
        if (((s as any).sex_ev ?? 0)?.['date_invite'] === 1) {
          qspCall(s, 'sex_ev_stats', 'lover_add');
        }
      }
      scene.actions([
        { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
      ]);
    }
  }
  scene.build();
}

function enterSneakOut2(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'sex_ev', 'hall_way') || ''));
  scene.text(`You tip toe your way to the door, turning the handle as gently as you can so you don't disturb ${((s as any).npcdesc ?? '')}, closing it with a soft click behind you.`);
  scene.actions([
    { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
  ]);
  scene.build();
}

function enterDress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['skip_dress']) {
    qspCall(s, 'outfit', 'safe_transfer_backup', 'lover_ev', 'sex_ev');
  } else {
    if (((s as any).lastwornclothingtype ?? 0)?.['sex_ev'] !== 'nude') {
      qspCall(s, 'outfit', 'restore', 'sex_ev');
    }
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'clothing', 'wear_last_worn', 'force');
    }
    if (((s as any).shoeworntype ?? 0) === 'none') {
      qspCall(s, 'shoes', 'wear_last_worn');
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterDressingImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dress_describe'] === 'fastening your bra around your chest') {
    scene.img('images/pc/activities/misc/dress_bra1.mp4');
  } else {
    if (((s as any).sex_ev ?? 0)?.['dress_describe'] === 'slipping your skirt up your legs') {
      scene.img('images/pc/activities/misc/dress_skirt1.mp4');
    } else {
      if (((s as any).sex_ev ?? 0)?.['dress_describe'] === 'pulling your panties up') {
        scene.img('images/pc/activities/misc/dress_panties1.mp4');
      } else {
        if (((s as any).sex_ev ?? 0)?.['dress_describe'] === 'pulling your top over your breasts') {
          scene.img('images/pc/activities/misc/dress_top1.mp4');
        } else {
          if (((s as any).sex_ev ?? 0)?.['dress_describe'] === 'tugging your pants over your hips') {
            scene.img('images/pc/activities/misc/dress_1.mp4');
          } else {
            if (((s as any).sex_ev ?? 0)?.['CloDress'] === 1  &&  ((s as any).sex_ev ?? 0)?.['dress_end'] === 0) {
              scene.img('images/shared/romance/lovers/misc/bed_dress.jpg');
            } else {
              if (((s as any).sex_ev ?? 0)?.['hotel'] === 1) {
              } else {
                scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterPcOrNpcDressing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dressing_start'] !== 1) {
  }
  scene.build();
}

function enterDressing1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  if (((s as any).sex_ev ?? 0)?.['angry_after'] === 1  ||  ((s as any).sex_ev ?? 0)?.['annoyed'] > 0) {
    scene.text(`"I have to go," you say flatly, reaching down for your clothes without looking at ${((s as any).npcdesc ?? '')}.`);
    qspGoto(s, 'sex_ev_leave', 'dressing2');
  } else {
    if (((s as any).sex_ev ?? 0)?.['cant_stay'] === 1) {
      qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
      scene.text(`"Guess I'll go then," you sigh, ${(((s as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}.`);
      qspGoto(s, 'sex_ev_leave', 'dressing2');
    } else {
      if (((s as any).sex_ev ?? 0)?.['npc_late'] === 1) {
        scene.text(`${((s as any).npcdesc ?? '')} starts getting dressed next to you.`);
        qspGoto(s, 'sex_ev_leave', 'dressing2');
      } else {
        if (((s as any).sex_ev ?? 0)?.['boy_in_shower'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_in_shower'] = 0;
          scene.text(`${((s as any).npcdesc ?? '')} comes back into the room just as you are ${(((s as any).sex_ev ?? 0)?.['dress_describe'] ?? '')} with a towel around his waist and wet hair.`);
          scene.text('"Hey, what\'s up? You heading out?" he asks.');
        } else {
          if (((s as any).sex_ev ?? 0)?.['npc_late'] === 0) {
            scene.text(`"You heading out?" ${((s as any).npcdesc ?? '')} asks as you are ${(((s as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}.`);
          }
        }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNotLeaving(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeavingSoon(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSomethingToDo(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSeeAFriend(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnotherFuckbuddy(s, scene); (s as any).locArgs = __savedLocArgs; }
        if (((s as any).sex_ev ?? 0)?.['sleepover'] < 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGoingDisco(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMomLate(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNeedHomework(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSchoolNight(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGoingSchool(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGoChurch1(s, scene); (s as any).locArgs = __savedLocArgs; }
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'End things with ' + String(((s as any).npcdesc ?? '') ?? ''), goto: ['sex_ev_dress_talking', 'break_up_ev'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterDressing2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['leaving'] = 1;
  if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
    qspCall(s, 'sex_ev_morning', 'end_morning');
  } else {
    scene.actions([
      { label: 'Finish getting dressed', goto: ['sex_ev_leave', 'dressing_finish'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['dress_talking_flag'] === 1) {
    qspGoto(s, 'sex_ev_dress_talking', 'dress_talk');
  }
  if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
    scene.actions([
      { label: 'Talk while you dress', goto: ['sex_ev_dress_talking', 'dress_talk'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['ma_pill_money'] === 0  &&  ((s as any).npc_pay_for_ma_pill ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_dress_talking', '');
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPantyGift(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'End things with ' + String(((s as any).npcdesc ?? '') ?? ''), goto: ['sex_ev_dress_talking', 'break_up_ev'] },
  ]);
  scene.build();
}

function enterDressingFinish(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['dressed_to_go'] = 1;
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  scene.text(`You finish ${(((s as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}.`);
  qspCall(s, 'sex_ev_clothing', 'dress_loop_end');
  if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1  &&  ((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['boy_asleep'] !== 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSneakOut1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeavingDialogue(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterNotLeaving(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
    scene.actions([
      { label: 'Not yet', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"You heading out?" ${((st as any).npcdesc ?? '')} asks.`);
    scene.text(`"Not yet," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Just tired of hanging out naked."`);
    scene.text('"I\'m never tired of seeing you naked."');
    scene.actions([
      { label: 'Roll your eyes', handler: (st: GameState) => {
    scene.text('"Whatever," you sigh, rolling your eyes to the heavens.');
    qspGoto(st, 'sex_ev_leave', 'dressing2');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterLeavingSoon(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Yeah', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leaving'] = 1;
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"You heading out?" ${((st as any).npcdesc ?? '')} asks.`);
    if (((st as any).sex_ev ?? 0)?.['sleepover'] < 1) {
      scene.text(`"Yeah," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}.` + ((((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') ? (' "Get your clothes on so I can get out of here."') : (' ')));
      qspGoto(st, 'sex_ev_leave', 'dressing2');
    } else {
      scene.text(`"Yeah," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}.`);
      if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0)  &&  ((st as any).sex_ev ?? 0)?.['sleepover'] === 1)  ||  ((((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0) + 1)  ||  (((st as any).week ?? 0) === 7  &&  ((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === 1))) {
        qspCall(st, 'sex_ev_dress_talking', 'sex_ev_invite_later');
      } else {
        qspGoto(st, 'sex_ev_leave', 'dressing2');
      }
      if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
      }
    }
  } },
  ]);
  scene.build();
}

function enterGoingDisco(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 18  &&  (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6)) {
    if (((s as any).region ?? 0) === 'pav') {
      scene.actions([
        { label: 'Going to the disco', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"You heading out?" ${((st as any).npcdesc ?? '')} asks.`);
    if (((st as any).sex_ev ?? 0)?.['disco_after'] === 1) {
      scene.text(`"Weren't you listening to me?" you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "I told you, I'm going to the disco tonight.` + ((((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') ? ('So get your clothes on already so I can make it!"') : ('"')));
    } else {
      scene.text(`"Yeah," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "I want to go to the disco.` + ((((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') ? ('So get your clothes on already so I can make it!"') : ('"')));
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressing2(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Going to the club', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"You heading out?" ${((st as any).npcdesc ?? '')} asks.`);
    if (((st as any).sex_ev ?? 0)?.['club_after'] === 1) {
      scene.text(`"Weren't you listening to me?" you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "I told you, I'm going clubbing tonight."` + ((((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') ? ('So get your clothes on already so I can make it before it closes!"') : ('"')));
    } else {
      scene.text(`"Yeah," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "I want to hit the club tonight."` + ((((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') ? ('So get your clothes on already so I can make it before it closes!"') : ('"')));
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressing2(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enterMomLate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    scene.actions([
      { label: 'Mom will kill me', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['mom_kill'] = 1;
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"You heading out?" ${((st as any).npcdesc ?? '')} asks.`);
    if (((st as any).hour ?? 0) < 3) {
      scene.text(`"Yeah," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "I'm already going to be in trouble as it is, but if I don't come home at all tonight, my mom will kill me."`);
    } else {
      scene.text(`"Yeah," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "My mom will kill me if I don't come home before curfew."`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressing2(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    ]);
  }
  scene.build();
}

function enterNeedHomework(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lernHome ?? 0) > 0) {
    scene.actions([
      { label: 'Need to finish my homework', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"You heading out?" ${((st as any).npcdesc ?? '')} asks.`);
    scene.text(`"Yeah," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "I need to do my homework.` + ((((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') ? ('So get dressed and skedaddle so I can get it done."') : ('"')));
    if (((st as any).npc_intel ?? 0)?.[String((st as any).npcID ?? 0)] < 30  &&  ((st as any).npc_finance ?? 0)?.[String((st as any).npcID ?? 0)] < 2) {
      scene.text('"Seriously? That\'s what you\'re in a rush for?"');
      scene.actions([
        { label: 'I want to go to uni', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"I want to go to uni," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Can't do that if I fail out of school for not doing my homework."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressing2(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
        { label: 'Don\'t be an asshole', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"Don't be an asshole," you glare, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "My grades are important to me. More important than spending more time fucking you."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressing2(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
      ]);
    } else {
      scene.text(`"I guess your future after school is pretty important," ${((st as any).npcdesc ?? '')} says.`);
      scene.actions([
        { label: 'Thanks for understanding', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"Thanks," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "It means a lot to me that you get it."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressing2(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
        { label: 'Want to go to uni', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"I really want to go to uni," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "So keeping up with my classes is really important."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressing2(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
        { label: 'Damn straight', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"Damn straight it is," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Skipping schoolwork to fuck you could end up fucking me for life!"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressing2(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
        { label: 'No hard feelings', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"No hard feelings, right?" you ask, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "I really like you, I just can't afford to get kicked out of school."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressing2(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
      ]);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPantyGift(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    ]);
  }
  scene.build();
}

function enterSomethingToDo(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Gotta do something', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leaving'] = 1;
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"You heading out?" ${((st as any).npcdesc ?? '')} asks.`);
    if (((st as any).sex_ev ?? 0)?.['sleepover'] < 1) {
      scene.text(`"Yeah," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Have a few things I need to get done.` + ((((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') ? (' Sorry to kick you out so quickly."') : ('"')));
      qspGoto(st, 'sex_ev_leave', 'dressing2');
    } else {
      scene.text(`"Yeah," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Have a few things I need to get done.` + ((((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') ? (' Sorry to kick you out so quickly."') : (' Thanks for letting me spend the night."')));
      if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0)  ||  (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0) + 1)  ||  (((st as any).week ?? 0) === 7  &&  ((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === 1))) {
        qspCall(st, 'sex_ev_dress_talking', 'sex_ev_invite_later');
      } else {
        scene.text('iif($sex_ev[\'loc\'] = \'pc_home\',\'"It\'s fine. I get it."\',\'"No problem. It was fun."\')');
        qspCall(st, 'sex_ev_morning', 'end_morning');
      }
    }
  } },
  ]);
  scene.build();
}

function enterSeeAFriend(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Meeting a friend', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leaving'] = 1;
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"You heading out?" ${((st as any).npcdesc ?? '')} asks.`);
    if (((st as any).sex_ev ?? 0)?.['sleepover'] < 1) {
      scene.text(`"Yeah," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Need to see a friend later.` + ((((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') ? ('Sorry to kick you out so quickly."') : ('"')));
      qspGoto(st, 'sex_ev_leave', 'dressing2');
    } else {
      scene.text(`"Yeah," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Need to see a friend later.` + ((((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') ? ('Sorry to kick you out so quickly."') : ('Thanks for letting me spend the night."')));
      if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0)  ||  (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0) + 1)  ||  (((st as any).week ?? 0) === 7  &&  ((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === 1))) {
        qspCall(st, 'sex_ev_dress_talking', 'sex_ev_invite_later');
      } else {
        scene.text('"No problem."');
        qspCall(st, 'sex_ev_morning', 'end_morning');
      }
    }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
  ]);
  scene.build();
}

function enterAnotherFuckbuddy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['fuckbuddies_current'] > 1) {
    scene.actions([
      { label: 'Another booty call', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['leaving'] = 1;
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"You heading out?" ${((st as any).npcdesc ?? '')} asks.`);
    if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      scene.text(`"Yeah," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Got a booty call to answer."`);
    } else {
      scene.text(`"Yeah," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Got another booty call to answer."`);
    }
    scene.text(`"You really get around don't you?" ${((st as any).npcdesc ?? '')} smirks back.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressing2(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    ]);
  }
  scene.build();
}

function enterGoingSchool(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 9  &&  ((s as any).hour ?? 0) > 5) {
    scene.actions([
      { label: 'School', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"You heading out?" ${((st as any).npcdesc ?? '')} asks.`);
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
      if (((st as any).sex_ev ?? 0)?.['late_for_school'] === 1  &&  ((st as any).hour ?? 0) >= 8) {
        scene.text(`"I already told you, I'm late for school," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "You gotta get out of here so I can lock up."`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['late_for_school'] === 1) {
          scene.text(`"I already told you, I'm gonna be late for school," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "You gotta get out of here so I can lock up."`);
        } else {
          if (((st as any).hour ?? 0) === 7) {
            scene.text(`"Gotta get to school," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "And you gotta get out of here so I can lock up."`);
          } else {
            scene.text(`"Gotta get ready for school," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "And you gotta get out of here so I can lock up."`);
          }
        }
      }
      if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0)  ||  (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0) + 1)  ||  (((st as any).week ?? 0) === 7  &&  ((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === 1))) {
        qspCall(st, 'sex_ev_dress_talking', 'sex_ev_invite_later');
      } else {
        scene.text('"No problem."');
        qspCall(st, 'sex_ev_morning', 'end_morning');
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['late_for_school'] === 1  &&  ((st as any).hour ?? 0) >= 8) {
        scene.text(`"I already told you, I'm late for school," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. ` + ((((st as any).sex_ev ?? 0)?.['sleepover'] === 1) ? ('"But thanks for letting me spend the night."') : (' ')));
      } else {
        if (((st as any).sex_ev ?? 0)?.['late_for_school'] === 1) {
          scene.text(`"I already told you, I'm gonna be late for school," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. ` + ((((st as any).sex_ev ?? 0)?.['sleepover'] === 1) ? ('"But thanks for letting me spend the night. And the second fuck," you add with a wink.') : (' ')));
        } else {
          if (((st as any).hour ?? 0) === 7) {
            scene.text(`"Gotta get to school," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. ` + ((((st as any).sex_ev ?? 0)?.['sleepover'] === 1) ? ('"Thanks for letting me spend the night."') : (' ')));
          } else {
            scene.text(`"Gotta get ready for school," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. ` + ((((st as any).sex_ev ?? 0)?.['sleepover'] === 1) ? ('"Thanks for letting me spend the night."') : (' ')));
          }
        }
      }
      if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0)  ||  (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0) + 1)  ||  (((st as any).week ?? 0) === 7  &&  ((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === 1))) {
        qspCall(st, 'sex_ev_dress_talking', 'sex_ev_invite_later');
      } else {
        if (((st as any).sex_ev ?? 0)?.['sleepover'] === 1) {
          scene.text('"No problem."');
        }
        qspCall(st, 'sex_ev_morning', 'end_morning');
      }
    }
    qspCall(st, 'sex_ev_dress_talking', 'dress_talk');
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    ]);
  }
  scene.build();
}

function enterSchoolNight(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  (((s as any).week ?? 0) < 5  ||  ((s as any).week ?? 0) === 7)  &&  (((s as any).hour ?? 0) > 19  ||  ((s as any).hour ?? 0) < 5)) {
    scene.actions([
      { label: 'It\'s a school night', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"You heading out?" ${((st as any).npcdesc ?? '')} asks.`);
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
      scene.text(`"It's a school night," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "You gotta go so I can get up for class tomorrow."`);
      if ((Math.floor(Math.random() * 10) + 1) < 0) {
        scene.text('"Are you sure I can\'t spend the night?');
      } else {
        scene.text('"Okay."');
        if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0)  ||  (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0) + 1)  ||  (((st as any).week ?? 0) === 7  &&  ((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === 1))) {
          qspCall(st, 'sex_ev_dress_talking', 'sex_ev_invite_later');
        } else {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressing2(st, scene); (st as any).locArgs = __savedLocArgs; }
        }
        qspCall(st, 'sex_ev_dress_talking', 'dress_talk');
      }
    } else {
      scene.text(`"It's a school night," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Gotta get home so I can set my alarm and get up for class tomorrow."`);
      if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0)  ||  (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0) + 1)  ||  (((st as any).week ?? 0) === 7  &&  ((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === 1))) {
        qspCall(st, 'sex_ev_dress_talking', 'sex_ev_invite_later');
      } else {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressing2(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
      qspCall(st, 'sex_ev_dress_talking', 'dress_talk');
    }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    ]);
  }
  scene.build();
}

function enterGoChurch1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).churchday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Going to Vigil', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).hour ?? 0) < 19) {
      scene.text(`"I need to get ready for vigil," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}.`);
    } else {
      scene.text(`"I'm late for vigil," you say, hurriedly ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGoChurch2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 12  &&  ((s as any).churchday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Going to Liturgy', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).hour ?? 0) < 9) {
      scene.text(`"I need to get ready for liturgy this morning," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}.`);
    } else {
      scene.text(`"I'm late for liturgy," you say, hurriedly ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGoChurch2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  scene.build();
}

function enterGoChurchReply(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['anal_count'] === 0) {
    scene.text(`"I guess that explains the lack of penetration," ${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} says dryly.`);
  } else {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      scene.text(`"I love religious girls like you," ${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} grins. "You're always the kinkiest."`);
    } else {
      scene.text(`"You don't really strike me as the religious type," ${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} comments, looking amused.`);
    }
  }
  scene.build();
}

function enterGoChurch2(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGoChurchReply(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([
      { label: 'Only sex is a sin', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGoChurchReply(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['anal_count'] > 0) {
      scene.text(`"It's only a sin if you do it in the pussy," you explain, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Butt stuff doesn't count."`);
    } else {
      scene.text(`"It's only a sin if you do it in the pussy," you explain, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Oral doesn't count."`);
    }
    scene.text('"If you say so," he says, looking unconvinced.');
    qspGoto(st, 'sex_ev_leave', 'dressing2');
  } },
    ]);
  }
  scene.actions([
    { label: 'Keep up appearances', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGoChurchReply(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text(`"I need to keep up appearances or everybody will know I'm a slut," you smirk jokingly, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}.`);
    qspGoto(st, 'sex_ev_leave', 'dressing2');
  } },
    { label: 'Keeps my mother off my back', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGoChurchReply(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  ((st as any).sex_ev ?? 0)?.['anal_count'] === 0) {
      scene.text(`"It's not that," you add, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "It's my mother. This is just one more thing I have to do to keep her off my back."`);
    } else {
      scene.text(`"I'm <i>not</i> religious," you huff, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "I just do this to keep my mother off my back."`);
    }
    qspGoto(st, 'sex_ev_leave', 'dressing2');
  } },
    { label: 'Cleanse the sin', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGoChurchReply(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text(`"Well, after I sin, I need to repent, don't I?" you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}.`);
    qspGoto(st, 'sex_ev_leave', 'dressing2');
  } },
  ]);
  scene.build();
}

function enterPantyGift(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).sex_ev ?? 0)?.['mad'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    scene.actions([
      { label: 'Give him your panties', handler: (st: GameState) => {
    ((st as any).npc_panty_give = (st as any).npc_panty_give ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_panty_give[String((st as any).npcID ?? 0)] ?? 0) + (1);
    qspCall(st, 'panties', 'dispose');
    scene.img('images/shared/romance/misc/panty_gift.mp4');
    scene.text('Just after you put on your panties, a sexy thought pops into your head.');
    scene.text('"But before I go," you say mischievously. "I have a gift for you."');
    if (((st as any).npc_panty_give ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text(`"A gift?" ${((st as any).npcdesc ?? '')} asks curiously.`);
      scene.text(`In one smooth motion, you slide your panties down your legs and daintily toss them onto the rumpled sheets of the bed on which you fucked ${((st as any).npcdesc ?? '')}.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPantyGift2(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.text(`"Another pair of your panties?" ${((st as any).npcdesc ?? '')} grins.`);
      scene.text('"You guessed correctly," you grin back. "And your prize is-!"');
      scene.text('In one smooth motion, you slide your panties down your legs and daintily toss them into the rumpled sheets of the bed you were just fucked in.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPantyGift2(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  scene.build();
}

function enterPantyGift2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
    scene.actions([
      { label: 'To remember my virginity', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"To remember my virginity," you smile, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "And that you made me a woman."`);
    if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_fidelity ?? 0)?.[String((st as any).npcID ?? 0)] === 6) {
      if (((st as any).pc_know_npc_has_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        ((st as any).pc_know_npc_has_girlfriend = (st as any).pc_know_npc_has_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(st, 'sex_ev_hookup_leave', 'panty_gift_girlfriend');
      } else {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPantyGiftGirlfriend(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    } else {
      scene.text(`${((st as any).npcdesc ?? '')} doesn't reply, but his expression says that he isn't displeased.`);
      if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(st, 'sex_ev_hookup_leave', 'leave_menu');
      } else {
        qspGoto(st, 'sex_ev_leave', 'dressing2');
      }
    }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['orgasm_count'] > 0) {
    scene.actions([
      { label: 'For making me orgasm', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"For making me come," you smile, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "That deserves an award."`);
    if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      if (((st as any).pc_know_npc_has_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        ((st as any).pc_know_npc_has_girlfriend = (st as any).pc_know_npc_has_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(st, 'sex_ev_hookup_leave', 'panty_gift_girlfriend');
      } else {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPantyGiftGirlfriend(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    } else {
      scene.text(`${((st as any).npcdesc ?? '')} doesn't say anything in response, but given the lustful glint in his eyes, he seems pretty pleased.`);
      if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(st, 'sex_ev_hookup_leave', 'leave_menu');
      } else {
        qspGoto(st, 'sex_ev_leave', 'dressing2');
      }
    }
  } },
      { label: 'For making me orgasm (tradition)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).npc_panty_give ?? 0)?.[String((st as any).npcID ?? 0)] <= 1) {
      scene.text(`"For making me come," you smile, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "I always give a boy my panties if he makes me come."`);
    } else {
      scene.text(`"Cause you made me come," you smile, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "You know I always give a boy my panties if he makes me come."`);
    }
    if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      if (((st as any).pc_know_npc_has_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        ((st as any).pc_know_npc_has_girlfriend = (st as any).pc_know_npc_has_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(st, 'sex_ev_hookup_leave', 'panty_gift_girlfriend');
      } else {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPantyGiftGirlfriend(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    } else {
      scene.text(`${((st as any).npcdesc ?? '')} doesn't say anything in response, but given the lustful glint in his eyes, he seems pretty pleased.`);
      if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(st, 'sex_ev_hookup_leave', 'leave_menu');
      } else {
        qspGoto(st, 'sex_ev_leave', 'dressing2');
      }
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'You did a good job', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"You did a good job," you smile, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Consider that your reward."`);
    if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_fidelity ?? 0)?.[String((st as any).npcID ?? 0)] === 6) {
      if (((st as any).pc_know_npc_has_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        ((st as any).pc_know_npc_has_girlfriend = (st as any).pc_know_npc_has_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPantyGiftGirlfriend(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPantyGiftGirlfriend(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    } else {
      scene.text(`${((st as any).npcdesc ?? '')} doesn't reply, but his expression says that he isn't displeased.`);
      if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(st, 'sex_ev_hookup_leave', 'leave_menu');
      } else {
        qspGoto(st, 'sex_ev_leave', 'dressing2');
      }
    }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    { label: 'Something to remember the occasion', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).daystage ?? 0) > 3) {
      scene.text(`"Something to remember the night," you smile, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Keep the good times in mind."`);
    } else {
      scene.text(`"Something to remember the day," you smile, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Keep the good times in mind."`);
    }
    if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_fidelity ?? 0)?.[String((st as any).npcID ?? 0)] === 6) {
      if (((st as any).pc_know_npc_has_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        ((st as any).pc_know_npc_has_girlfriend = (st as any).pc_know_npc_has_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(st, 'sex_ev_hookup_leave', 'panty_gift_girlfriend');
      } else {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPantyGiftGirlfriend(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    } else {
      scene.text(`"Maybe I should frame it," ${((st as any).npcdesc ?? '')} snickers.`);
      if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(st, 'sex_ev_hookup_leave', 'leave_menu');
      } else {
        qspGoto(st, 'sex_ev_leave', 'dressing2');
      }
    }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    { label: 'Consider it a trophy', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text(`"A trophy," you smile, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Consider it proof of conquest."`);
    if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_fidelity ?? 0)?.[String((st as any).npcID ?? 0)] === 6) {
      if (((st as any).pc_know_npc_has_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        ((st as any).pc_know_npc_has_girlfriend = (st as any).pc_know_npc_has_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(st, 'sex_ev_hookup_leave', 'panty_gift_girlfriend');
      } else {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPantyGiftGirlfriend(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    } else {
      scene.text(`${((st as any).npcdesc ?? '')} doesn't reply, but his expression says that he isn't displeased.`);
      if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(st, 'sex_ev_hookup_leave', 'leave_menu');
      } else {
        qspGoto(st, 'sex_ev_leave', 'dressing2');
      }
    }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
  ]);
  scene.build();
}

function enterPantyGiftGirlfriend(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Hide them', handler: (st: GameState) => {
    scene.text(`"Just hide them," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "If you can hide a fucking a girl in your bed, surely you can hide a pair of panties."`);
    qspGoto(st, 'sex_ev_leave', 'dressing2');
  } },
    { label: 'Say they\'re hers', handler: (st: GameState) => {
    scene.text(`"Tell her they're hers," you shrug with a wry smirk, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Maybe she'll think she bought them."`);
    qspGoto(st, 'sex_ev_leave', 'dressing2');
  } },
    { label: 'Say they\'re yours', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop_code');
    scene.text(`"Tell her they're yours," you shrug with a wry smirk, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "A guy can't wear a cute pair of panties now and then?"`);
    if (((st as any).npc_insecure ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      qspCall(st, 'sex_ev_clothing', 'dress_loop_code');
      scene.text(`${((st as any).npcdesc ?? '')}'s face immediately reddens and he looks at you with an angry glare.`);
      scene.text('"What the fuck? I\'m not some twink who puts on girlie panties like a fucking faggot!"');
      scene.actions([
        { label: 'I was kidding (amused)', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"I was just kidding," you snicker, rolling your eyes. "Bad joke, sorry."');
    scene.text(`You move to ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')} but ${((st as any).npcdesc ?? '')} continues to glare at you out of the corner of your eye for a few moments longer before looking away.`);
    qspGoto(st, 'sex_ev_leave', 'dressing2');
  } },
        { label: 'I was kidding (acerbic)', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text(`"Christ, I was just kidding," you say, giving ${((st as any).npcdesc ?? '')} a look of exasperation. "Of course I wasn't seriously suggesting that. Take a joke, dumbass."`);
    scene.text(`You start ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')} but ${((st as any).npcdesc ?? '')} continues to glare at you out of the corner of your eye for a few moments longer before looking away.`);
    qspGoto(st, 'sex_ev_leave', 'dressing2');
  } },
      ]);
    } else {
      scene.text(`${((st as any).npcdesc ?? '')} laughs aloud.`);
      scene.text('"Yeah, I bet that\'d get me off the hook."');
      qspGoto(st, 'sex_ev_leave', 'dressing2');
    }
  } },
    { label: 'Give them to her', handler: (st: GameState) => {
    scene.text(`"Gift them to her," you say mischievously, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Maybe she'll put them on."`);
    qspGoto(st, 'sex_ev_leave', 'dressing2');
  } },
    { label: 'Throw them away', handler: (st: GameState) => {
    scene.text(`"Throw them away then," you shrug, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "I don't care. Do whatever you want with them.`);
    qspCall(st, 'sex_ev_clothing', 'dress_loop_code');
    scene.text(`"After all, they're your panties now," you add with a smirk, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}.`);
    qspGoto(st, 'sex_ev_leave', 'dressing2');
  } },
  ]);
  scene.build();
}

function enterWalkOfShame(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
      scene.text('asdfaes');
    } else {
      scene.text('asdfaes');
    }
  } else {
    scene.text('asdfaes');
  }
  // TODO-QSP: --- sex_ev_leave ---------------------------------
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'exit':
      enterExit(s, scene);
      break;
    case 'exit_into_loc':
      enterExitIntoLoc(s, scene);
      break;
    case 'exit_into_date':
      enterExitIntoDate(s, scene);
      break;
    case 'break_up':
      enterBreakUp(s, scene);
      break;
    case 'ending':
      enterEnding(s, scene);
      break;
    case 'end_code':
      enterEndCode(s, scene);
      break;
    case 'leave_options':
      enterLeaveOptions(s, scene);
      break;
    case 'leave_router':
      enterLeaveRouter(s, scene);
      break;
    case 'hang_out_after':
      enterHangOutAfter(s, scene);
      break;
    case 'go_out_check':
      enterGoOutCheck(s, scene);
      break;
    case 'scared_exit':
      enterScaredExit(s, scene);
      break;
    case 'go_out_after':
      enterGoOutAfter(s, scene);
      break;
    case 'go_out_together':
      enterGoOutTogether(s, scene);
      break;
    case 'leaving_dialogue':
      enterLeavingDialogue(s, scene);
      break;
    case 'leaving_dialogue_choices':
      enterLeavingDialogueChoices(s, scene);
      break;
    case 'leaving_action':
      enterLeavingAction(s, scene);
      break;
    case 'leaving_end':
      enterLeavingEnd(s, scene);
      break;
    case 'npc_leave':
      enterNpcLeave(s, scene);
      break;
    case 'npc_leaving_action':
      enterNpcLeavingAction(s, scene);
      break;
    case 'npc_leaving_dialogue':
      enterNpcLeavingDialogue(s, scene);
      break;
    case 'npc_leaving_end':
      enterNpcLeavingEnd(s, scene);
      break;
    case 'hurry_leave':
      enterHurryLeave(s, scene);
      break;
    case 'hurry_leave2':
      enterHurryLeave2(s, scene);
      break;
    case 'hurry_leave_finish':
      enterHurryLeaveFinish(s, scene);
      break;
    case 'breakup_start':
      enterBreakupStart(s, scene);
      break;
    case 'breakup_mid':
      enterBreakupMid(s, scene);
      break;
    case 'unsatisfied_breakup':
      enterUnsatisfiedBreakup(s, scene);
      break;
    case 'no_more_cheating_breakup':
      enterNoMoreCheatingBreakup(s, scene);
      break;
    case 'isnt_going_to_work':
      enterIsntGoingToWork(s, scene);
      break;
    case 'no_condom_breakoff':
      enterNoCondomBreakoff(s, scene);
      break;
    case 'sneak_out1':
      enterSneakOut1(s, scene);
      break;
    case 'prostitution_wakeup1':
      enterProstitutionWakeup1(s, scene);
      break;
    case 'prostitution_wakeup2':
      enterProstitutionWakeup2(s, scene);
      break;
    case 'sneak_out_note1':
      enterSneakOutNote1(s, scene);
      break;
    case 'prostitution_tab_note1':
      enterProstitutionTabNote1(s, scene);
      break;
    case 'sneak_out_note2':
      enterSneakOutNote2(s, scene);
      break;
    case 'sneak_out_note3':
      enterSneakOutNote3(s, scene);
      break;
    case 'sneak_out_note_end':
      enterSneakOutNoteEnd(s, scene);
      break;
    case 'sneak_out2':
      enterSneakOut2(s, scene);
      break;
    case 'dress':
      enterDress(s, scene);
      break;
    case 'dressing_image':
      enterDressingImage(s, scene);
      break;
    case 'pc_or_npc_dressing':
      enterPcOrNpcDressing(s, scene);
      break;
    case 'dressing1':
      enterDressing1(s, scene);
      break;
    case 'dressing2':
      enterDressing2(s, scene);
      break;
    case 'dressing_finish':
      enterDressingFinish(s, scene);
      break;
    case 'not_leaving':
      enterNotLeaving(s, scene);
      break;
    case 'leaving_soon':
      enterLeavingSoon(s, scene);
      break;
    case 'going_disco':
      enterGoingDisco(s, scene);
      break;
    case 'mom_late':
      enterMomLate(s, scene);
      break;
    case 'need_homework':
      enterNeedHomework(s, scene);
      break;
    case 'something_to_do':
      enterSomethingToDo(s, scene);
      break;
    case 'see_a_friend':
      enterSeeAFriend(s, scene);
      break;
    case 'another_fuckbuddy':
      enterAnotherFuckbuddy(s, scene);
      break;
    case 'going_school':
      enterGoingSchool(s, scene);
      break;
    case 'school_night':
      enterSchoolNight(s, scene);
      break;
    case 'go_church1':
      enterGoChurch1(s, scene);
      break;
    case 'go_church_reply':
      enterGoChurchReply(s, scene);
      break;
    case 'go_church2':
      enterGoChurch2(s, scene);
      break;
    case 'panty_gift':
      enterPantyGift(s, scene);
      break;
    case 'panty_gift2':
      enterPantyGift2(s, scene);
      break;
    case 'panty_gift_girlfriend':
      enterPantyGiftGirlfriend(s, scene);
      break;
    case 'walk_of_shame':
      enterWalkOfShame(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_leave: LocationDef = {
  name: 'sex_ev_leave',
  title: '"Do you mind if I hang out with you here for a while?" you a',
  region: 'other',
  enter: enter,
};
