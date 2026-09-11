import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterExit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).sex_ev ?? 0)?.['unique_npc'] === 1) {
    qspCall(s, 'sex_ev_leave', 'ending');
    // TODO-QSP: gt $sex_ev_exit['exit_file'], $sex_ev_exit['exit_arg']
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
      qspCall(s, 'sex_ev_leave', 'ending');
      if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
        scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
      } else {
        if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'uni_grounds') {
          scene.actions([{ label: 'Continue', goto: ['uni_grounds', ''] }]);
        } else {
          if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_residential') {
            scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
          } else {
            if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_center') {
              scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
            } else {
              if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
                if (((s as any).region ?? 0) === 'pav') {
                  scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
                } else {
                  if (((s as any).region ?? 0) === 'pav_park') {
                    scene.actions([{ label: 'Continue', goto: ['pav_park', 'start'] }]);
                  } else {
                    if (((s as any).region ?? 0) === 'city') {
                      scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
                    } else {
                      if (((s as any).region ?? 0) === 'city_center') {
                        scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
                      } else {
                        if (((s as any).region ?? 0) === 'city_park') {
                          scene.actions([{ label: 'Continue', goto: ['city_park', 'start'] }]);
                        } else {
                          if (((s as any).region ?? 0) === 'city_island') {
                            scene.actions([{ label: 'Continue', goto: ['city_island', ''] }]);
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
            qspCall(s, 'sex_ev_leave', 'ending');
            scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'better'] }]);
          } else {
            if (((s as any).region ?? 0) === 'city') {
              qspCall(s, 'sex_ev_leave', 'ending');
              scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'best'] }]);
            }
          }
        } else {
          if (((s as any).region ?? 0) === 'pav') {
            qspCall(s, 'sex_ev_leave', 'ending');
            scene.actions([{ label: 'Continue', goto: ['pav_hotel', ''] }]);
          } else {
            if (((s as any).region ?? 0) === 'city') {
              qspCall(s, 'sex_ev_leave', 'ending');
              scene.actions([{ label: 'Continue', goto: ['city_hotel', ''] }]);
            }
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
          qspCall(s, 'sex_ev_leave', 'ending');
          if (((s as any).sex_ev_exit ?? 0)?.['loc'] === 'bedroom') {
            // TODO-QSP: gt $home['bedroom'], $home['bedroom_arg']
          } else {
            if (((s as any).sex_ev_exit ?? 0)?.['loc'] === 'hallway') {
              // TODO-QSP: gt $home['entrance'], $home['entrance_arg']
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
            qspCall(s, 'sex_ev_leave', 'ending');
          }
        }
      }
    }
  }
  scene.build();
}

function enterExitIntoLoc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
    qspCall(s, 'sex_ev_leave', 'ending');
    qspCall(s, 'lover_home', 'loc_init');
    scene.actions([{ label: 'Continue', goto: ['lover_home', 'bedroom'] }]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
      if (((s as any).sex_ev_exit ?? 0)?.['loc'] === 'bedroom') {
        qspCall(s, 'sex_ev_leave', 'ending');
        ((s as any).pcs_romance ?? {})['lover_here'] = 1;
        scene.actions([{ label: 'Continue', goto: ['bedr', ''] }]);
      } else {
        if (((s as any).sex_ev_exit ?? 0)?.['loc'] === 'hallway') {
          ((s as any).pcs_romance ?? {})['lover_here'] = 1;
          qspCall(s, 'sex_ev_leave', 'ending');
          scene.actions([{ label: 'Continue', goto: ['korr', ''] }]);
        }
      }
    }
  }
  scene.build();
}

function enterExitIntoDate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'session_reset');
  qspCall(s, 'sex_ev_clothing', 'dress_loop_end');
  ((s as any).sex_ev ?? {})['dress_end'] = 0;
  ((s as any).sex_ev ?? {})['extra_cum'] = (((s as any).sex_ev ?? {})['extra_cum'] ?? 0) + (5);
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
  scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'exit'] }]);
  scene.build();
}

function enterEnding(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_leave', 'end_code');
  if (Object.keys((s as any).date_ev ?? {}).length > 0) {
    qspCall(s, 'date_ev', 'end_code');
  }
  scene.build();
}

function enterEndCode(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'save_stats');
  if (((s as any).sugar_daddy_call ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).sugar_daddy_call ?? {})[String((s as any).npcID ?? 0)] = 0;
    ((s as any).sugar_gift_day ?? {})[String((s as any).npcID ?? 0)] = 0;
  }
  // TODO-QSP: $booty_call_hotel[$npcID] = ''
  qspCall(s, 'arousal', 'end');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'sex_ev_leave', 'dress');
  }
  if (((s as any).sex_ev ?? 0)?.['fuck'] > 0) {
    ((s as any).know_virgin ?? {})[String((s as any).npcID ?? 0)] = 0;
  }
  if (((s as any).sex_ev ?? 0)?.['creampie_orgasm_count'] > 0) {
    ((s as any).stat_memory ?? {})['creampie_orgasm'] = ((s as any).daystart ?? 0);
  }
  ((s as any).npc_last_sex ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
  if (((s as any).sex_ev ?? 0)?.['prostitution_flag'] === 'prostitution'  ||  ((s as any).sex_ev ?? 0)?.['prostitution'] === 1) {
    ((s as any).npc_prostitution_count ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_prostitution_count ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }
  if (((s as any).sex_ev ?? 0)?.['set_date'] !== 1) {
    ((s as any).npc_booty_call_date ?? {})[String((s as any).npcID ?? 0)] = 0;
  }
  if (((s as any).sex_ev ?? 0)?.['hotel_days'] > 0) {
    if (((s as any).region ?? 0) === 'pav') {
      ((s as any).hotelRoom ?? {})['pav_hotel'] = 2;
    } else {
      if (((s as any).region ?? 0) === 'city') {
        ((s as any).hotelRoom ?? {})['city_hotel'] = 3;
      }
    }
    ((s as any).hotelRoomDays ?? {})['' + String((s as any).$region || '') + '_hotel'] = ((s as any).daystart ?? 0) + ((s as any).sex_ev ?? {})?.['hotel_days'];
    ((s as any).hotelRoom ?? {})['' + String((s as any).$region || '') + '_room_service_free'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home'  &&  ((s as any).home ?? 0)?.['current'] === 'parents_home') {
    ((s as any).sisterQW ?? {})['sex_room'] = 1;
    ((s as any).stat ?? {})['parents_home_sex'] = (((s as any).stat ?? {})['parents_home_sex'] ?? 0) + (1);
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
  scene.build();
}

function enterLeaveOptions(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    { label: 'Take a walk of shame' }, // TODO-QSP: empty action body
  ]);
  scene.build();
}

function enterLeaveRouter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1  &&  ((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['boy_asleep'] !== 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    // TODO-QSP: xgt 'sex_ev_leave', 'sneak_out1'
  } else {
    if (((s as any).sex_ev ?? 0)?.['boy_asleep'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['dress_end'] < 1) {
      // TODO-QSP: xgt 'sex_ev_leave', 'dressing1'
    } else {
      if (((s as any).sex_ev ?? 0)?.['boy_asleep'] !== 1) {
        // TODO-QSP: xgt 'sex_ev_leave', 'leaving_dialogue'
      } else {
        // TODO-QSP: xgt 'sex_ev_leave', 'sneak_out1'
      }
    }
  }
  scene.build();
}

function enterHangOutAfter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  ((s as any).lover_ev ?? {})['just_had_sex'] = 1;
  scene.text('"Do you mind if I hang out with you here for a while?" you ask.');
  if (((s as any).npc_cheating_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if ((Math.floor(Math.random() * 10) + 1) > 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).hour ?? 0) > 16) {
      ((s as any).sex_ev ?? {})['cant_stay'] = 1;
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
      ((s as any).sex_ev ?? {})['cant_stay'] = 1;
      scene.text('"Sorry, can\'t. I have something to do and I can\'t leave you here alone."');
      scene.text('"Ugh, really?"');
      scene.text('"Yeah, I know. Sucks."');
      qspCall(s, 'sex_ev_after', 'after_sex2');
    } else {
      if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).hour ?? 0) > 16) {
        ((s as any).sex_ev ?? {})['cant_stay'] = 1;
        ((s as any).npc_cheating_know ?? {})[String((s as any).npcID ?? 0)] = 1;
        scene.text('"Sorry, my girlfriend is coming over soon. Can\'t let her catch you here."');
        scene.text('"Ugh, really?"');
        scene.text('"Yeah, I know. Sucks."');
        qspCall(s, 'sex_ev_after', 'after_sex2');
      } else {
        scene.text('"Sure, I\'m not doing anything so you can hang out for a while."');
        ((s as any).sex_ev ?? {})['cant_stay'] = 1;
        scene.text('"Sorry, can\'t. I have something to do and I can\'t leave you here alone."');
        scene.text('"Ugh, really?"');
        scene.text('"Yeah, I know. Sucks."');
        qspCall(s, 'sex_ev_after', 'after_sex2');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_leave', 'exit_into_loc'}
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterGoOutCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['unique_npc'] === 0  &&  ((s as any).hour ?? 0) >= 11  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'house_party'  &&  ((s as any).sex_ev ?? 0)?.['go_out_check'] === 0) {
    ((s as any).sex_ev ?? {})['go_out_check'] = 1;
    if ((Array.isArray((s as any).date_ev) ? ((s as any).date_ev as any[]).indexOf('lunch_date') : -1) < 0  &&  ((s as any).hour ?? 0) <= 14) {
      ((s as any).sex_ev ?? {})['lunch_flag'] = 1;
    }
    if ((Array.isArray((s as any).date_ev) ? ((s as any).date_ev as any[]).indexOf('dinner_date') : -1) < 0  &&  ((s as any).hour ?? 0) >= 17) {
      ((s as any).sex_ev ?? {})['dinner_flag'] = 1;
    }
  }
  scene.build();
}

function enterScaredExit(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Gather your things and leave', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('After seeing his explosive anger, you don\'t want to stick around any longer than you have to. You throw your clothes on as fast as you can, grab your things, and run out the door.');
    scene.actions([
      { label: 'Escape', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGoOutAfter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_leave', 'go_out_check');
  if ((((s as any).sex_ev ?? 0)?.['lunch_flag'] === 1  ||  ((s as any).sex_ev ?? 0)?.['dinner_flag'] === 1)  &&  ((s as any).sex_ev ?? 0)?.['decline_date'] === 0) {
    scene.actions([
      { label: 'Want to grab a bite?', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
    if ((Array.isArray((s as any).date_ev) ? ((s as any).date_ev as any[]).indexOf('lunch_date') : -1) < 0) {
      scene.text('"You hungry? Fancy grabbing something to eat?"');
    } else {
      scene.text('"You hungry again by chance? Feel like grabbing some dinner?"');
    }
    if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup'  &&  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex'  &&  (!((s as any).date_ev ?? 0))) {
      if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] < 0) {
        // TODO-QSP: dynamic text: "I'm, uhh... not really looking for anything serious," <<$npc_usedname[$npcID]>>...
        scene.text(`"I'm, uhh... not really looking for anything serious," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} stammers out. "This was just sex..."`);
      } else {
        // TODO-QSP: dynamic text: "I'm not really looking for anything serious," <<$npc_usedname[$npcID]>> says. "...
        scene.text(`"I'm not really looking for anything serious," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} says. "This was just sex."`);
      }
      scene.actions([
        { label: 'Oh... (awkward)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['decline_date'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"O-oh..."');
    scene.text('Well, this is awkward.');
    qspCall(s, 'sex_ev_after', 'after_sex2');
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
      // TODO-QSP: dynamic text: "Sure, I could go for some food," <<$npc_usedname[$npcID]>> smiles.
      scene.text(`"Sure, I could go for some food," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} smiles.`);
      if (((s as any).clothingworntype ?? 0) === 'nude') {
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
  ((s as any).sex_ev ?? {})['undressed_check'] = 0;
  // TODO-QSP: $sex_ev['hall_way']
  scene.text('You both get dressed and head out together.');
  scene.actions([
    { label: 'Walk to the local cafe', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', 'exit_into_date');
    // TODO-QSP: gt 'date_casual_meal', 'start', 'together'
  } },
  ]);
  scene.build();
}

function enterLeavingDialogue(s: GameState, scene: SceneBuilder): void {
  scene.text('"I gotta get going," you say.');
  scene.text('"Okay, see you later."');
  qspCall(s, 'sex_ev_leave', 'leaving_dialogue_choices');
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
    ((s as any).sex_ev ?? {})['leave_dialogue'] = 'Text me any time you want some company';
    qspCall(s, 'sex_ev_leave', 'leaving_action');
  } },
        ]);
      } else {
        scene.actions([
          { label: '"Text me"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = 'Text me';
    qspCall(s, 'sex_ev_leave', 'leaving_action');
  } },
        ]);
      }
      if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
        scene.actions([
          { label: '"See you soon"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = 'See you soon';
    qspCall(s, 'sex_ev_leave', 'leaving_action');
  } },
        ]);
      } else {
        if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0) + 1) {
          scene.actions([
            { label: '"See you tomorrow"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = 'See you tomorrow';
    qspCall(s, 'sex_ev_leave', 'leaving_action');
  } },
          ]);
        } else {
          scene.actions([
            { label: '"Till next time"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = 'Till next time';
    qspCall(s, 'sex_ev_leave', 'leaving_action');
  } },
          ]);
        }
      }
      scene.actions([
        { label: '"Let\'s do this again"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = 'Let\'s do this again sometime';
    qspCall(s, 'sex_ev_leave', 'leaving_action');
  } },
      ]);
    }
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
      scene.actions([
        { label: 'Don\'t forget the money', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = 'Just make sure you have the money ready for next time';
    qspCall(s, 'sex_ev_leave', 'leaving_action');
  } },
      ]);
    }
    scene.actions([
      { label: '"Bye"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = 'Bye';
    qspCall(s, 'sex_ev_leave', 'leaving_action');
  } },
      { label: '"See ya"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = 'See ya';
    qspCall(s, 'sex_ev_leave', 'leaving_action');
  } },
      { label: '"Toodles"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = 'Toodles';
    qspCall(s, 'sex_ev_leave', 'leaving_action');
  } },
    ]);
  }
  scene.build();
}

function enterLeavingAction(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Smile', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((s as any).sex_ev ?? {})['leave_action'] = ', flashing him a quick smile just before you head back out into the party';
    } else {
      ((s as any).sex_ev ?? {})['leave_action'] = ', flashing him a quick smile just before you close the door behind you';
    }
    qspCall(s, 'sex_ev_leave', 'leaving_end');
  } },
    { label: 'Wave goodbye', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((s as any).sex_ev ?? {})['leave_action'] = ', waggling your fingers at him and head back out into the party';
    } else {
      ((s as any).sex_ev ?? {})['leave_action'] = ', waggling your fingers at him just before you close the door behind you';
    }
    qspCall(s, 'sex_ev_leave', 'leaving_end');
  } },
    { label: 'Wink', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((s as any).sex_ev ?? {})['leave_action'] = ' with a wink as you head back out into the party';
    } else {
      ((s as any).sex_ev ?? {})['leave_action'] = ' with a wink just before you close the door behind you';
    }
    qspCall(s, 'sex_ev_leave', 'leaving_end');
  } },
    { label: 'Blow him a kiss', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((s as any).sex_ev ?? {})['leave_action'] = ', blowing him a kiss just before heading back out into the party';
    } else {
      ((s as any).sex_ev ?? {})['leave_action'] = ', blowing him a kiss just before you close the door behind you';
    }
    qspCall(s, 'sex_ev_leave', 'leaving_end');
  } },
    { label: 'Kiss his cheek', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((s as any).sex_ev ?? {})['leave_action'] = ', stopping to give him a quick peck on the cheek before heading back out into the party';
    } else {
      ((s as any).sex_ev ?? {})['leave_action'] = ', stopping to give him a quick peck on the cheek before heading out the door';
    }
    qspCall(s, 'sex_ev_leave', 'leaving_end');
  } },
    { label: 'Kiss him', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((s as any).sex_ev ?? {})['leave_action'] = ', stopping to give him a quick peck on the lips before heading back out into the party';
    } else {
      ((s as any).sex_ev ?? {})['leave_action'] = ', stopping to give him a quick peck on the lips before heading out the door';
    }
    qspCall(s, 'sex_ev_leave', 'leaving_end');
  } },
    { label: 'Kiss him deeply', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((s as any).sex_ev ?? {})['leave_action'] = ', stopping to give him a long drawn out kiss. It\'s several seconds before you pull away, a string of saliva following your tongue as it exits his mouth. The last thing he sees is the smoldering look you give him before heading back out into the party';
    } else {
      ((s as any).sex_ev ?? {})['leave_action'] = ', stopping to give him a long drawn out kiss. It\'s several seconds before you pull away, a string of saliva following your tongue as it exits his mouth. The last thing he sees is the smoldering look you give him heading out the door';
    }
    qspCall(s, 'sex_ev_leave', 'leaving_end');
  } },
    { label: 'Shake your ass', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((s as any).sex_ev ?? {})['leave_action'] = ', giving him a teasing shake of your ass just before you head back out into the party';
    } else {
      ((s as any).sex_ev ?? {})['leave_action'] = ', giving him a teasing shake of your ass just before you close the door behind it';
    }
    qspCall(s, 'sex_ev_leave', 'leaving_end');
  } },
    { label: 'Nonchalant', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      ((s as any).sex_ev ?? {})['leave_action'] = ' nonchalantly and head back out into the party';
    } else {
      ((s as any).sex_ev ?? {})['leave_action'] = ' nonchalantly and head out the door without a second glance';
    }
    qspCall(s, 'sex_ev_leave', 'leaving_end');
  } },
  ]);
  scene.build();
}

function enterLeavingEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'prostitution_pay_calc');
  if (((s as any).sex_ev ?? 0)?.['sugar_daddy_paid'] === 0  &&  ((s as any).sex_ev ?? 0)?.['prostitution_paid'] === 0) {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy'  &&  ((s as any).sex_ev ?? 0)?.['sugar_daddy_paid'] === 0) {
      if (((s as any).npc_prostitution_tab ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['prostitution_bonus'] > 0) {
        // TODO-QSP: dynamic text: Just before you go, <<$npcdesc>> hands you <<$func('money', 'string_profit', sex...
        scene.text(`Just before you go, ${((s as any).npcdesc ?? 0)} hands you ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'])}, including the bonus and money he owed you from the last time too.`);
      } else {
        if (((s as any).npc_prostitution_tab ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          // TODO-QSP: dynamic text: Just before you go, <<$npcdesc>> hands you <<$func('money', 'string_profit', sex...
          scene.text(`Just before you go, ${((s as any).npcdesc ?? 0)} hands you ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'])}, including the money he owed you from last time.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['prostitution_bonus'] > 0) {
            // TODO-QSP: dynamic text: Just before you go, <<$npcdesc>> hands you <<$func('money', 'string_profit', sex...
            scene.text(`Just before you go, ${((s as any).npcdesc ?? 0)} hands you ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'])}, including the bonus he owes you.`);
          } else {
            // TODO-QSP: dynamic text: Just before you go, <<$npcdesc>> hands you <<$func('money', 'string_profit', sex...
            scene.text(`Just before you go, ${((s as any).npcdesc ?? 0)} hands you ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'])}.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1  &&  ((s as any).sex_ev ?? 0)?.['prostitution_paid'] === 0) {
        if (((s as any).npc_prostitution_tab ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['prostitution_bonus'] > 0) {
          // TODO-QSP: dynamic text: Before you leave, you make sure to collect the <<$func('money', 'string_profit',...
          scene.text(`Before you leave, you make sure to collect the ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'])} promised to you for whoring yourself out to ${((s as any).npcdesc ?? 0)}, including the bonus and money he owed you from the last time too.`);
        } else {
          if (((s as any).npc_prostitution_tab ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            // TODO-QSP: dynamic text: Before you leave, you make sure to collect the <<$func('money', 'string_profit',...
            scene.text(`Before you leave, you make sure to collect the ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'])} promised to you for whoring yourself out to ${((s as any).npcdesc ?? 0)}, including the money he owed you from last time.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['prostitution_bonus'] > 0) {
              // TODO-QSP: dynamic text: Before you leave, you make sure to collect the <<$func('money', 'string_profit',...
              scene.text(`Before you leave, you make sure to collect the ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'])} promised to you for whoring yourself out to ${((s as any).npcdesc ?? 0)}, including the bonus he owes you.`);
            } else {
              // TODO-QSP: dynamic text: Just before you go, <<$npcdesc>> hands you <<$func('money', 'string_profit', sex...
              scene.text(`Just before you go, ${((s as any).npcdesc ?? 0)} hands you ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'])}.`);
            }
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_stats', 'prostitution_pay_code');
  // TODO-QSP: dynamic text: "<<$sex_ev['leave_dialogue']>>," you say<<$sex_ev['leave_action']>>.
  scene.text(`"${((s as any).sex_ev ?? 0)?.['leave_dialogue']}," you say${((s as any).sex_ev ?? 0)?.['leave_action']}.`);
  // TODO-QSP: xgt 'sex_ev_leave', 'leave_options'
  scene.build();
}

function enterNpcLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcID ?? 0) === 'A34') {
    qspCall(s, 'sex_ev_A34', 'kolka_leave');
  } else {
    scene.actions([
      { label: 'Get up and leave <<$npcdesc>> in bed', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: Not wanting to wake <<$npcdesc>>, you sneak over to the door and let yourself ou...
    scene.text(`Not wanting to wake ${((s as any).npcdesc ?? 0)}, you sneak over to the door and let yourself out, closing it as gently as you can behind you.`);
    // TODO-QSP: end}
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
      { label: 'Tell <<$npcdesc>> to leave', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).sex_ev ?? 0)?.['angry_after'] === 1  ||  ((s as any).sex_ev ?? 0)?.['annoyed'] > 0) {
      scene.text('"You should go," you say flatly.');
      // TODO-QSP: dynamic text: <<$npcdesc>> stiffly gets out of bed and gets dressed, neither of you really loo...
      scene.text(`${((s as any).npcdesc ?? 0)} stiffly gets out of bed and gets dressed, neither of you really looking the other in the eye as he does. After a minute or two, he's finished and leaves without another word.`);
      scene.actions([
        { label: 'Finish', goto: ['sex_ev_leave', 'exit'] },
      ]);
    } else {
      if (((s as any).home ?? 0)?.['current'] === 'parents_home'  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 1  &&  ((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) > 16) {
        // TODO-QSP: dynamic text: "This was fun, but you should probably go." You smile ruefully. "My parents are ...
        scene.text(`"This was fun, but you should probably go." You smile ruefully. "My parents are coming home soon." ${((s as any).npcdesc ?? 0)} nods and moves to start picking up his clothes and get dressed.`);
      } else {
        // TODO-QSP: dynamic text: "This was fun, but you should probably go," you say to <<$npcdesc>>, who nods an...
        scene.text(`"This was fun, but you should probably go," you say to ${((s as any).npcdesc ?? 0)}, who nods and moves to start picking up his clothes and get dressed.`);
      }
      qspCall(s, 'sex_ev_leave', 'npc_leaving_action');
    }
  } },
    ]);
  } },
    ]);
  }
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
    default:
      enterExit(s, scene);
      break;
  }
}

export const sex_ev_leave: LocationDef = {
  name: 'sex_ev_leave',
  title: '"Do you mind if I hang out with you here for a while?" you a',
  region: 'other',
  enter: enter,
};
