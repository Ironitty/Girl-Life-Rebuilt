import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterExitIntoDate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'session_reset');
  qspCall(s, 'sex_ev_clothing', 'dress_loop_end');
  ((s as any).sex_ev ?? {})['dress_end'] = 0;
  ((s as any).sex_ev ?? {})['extra_cum'] = (((s as any).sex_ev ?? {})['extra_cum'] ?? 0) + (5);
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
      qspCall(s, 'lover', 'remove', ((s as any).npcID ?? 0));
    }
  }
  scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'exit'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEnding(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_leave', 'end_code');
  if (Object.keys((s as any).date_ev ?? {}).length > 0) {
    qspCall(s, 'date_ev', 'end_code');
  }
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterLeaveOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  // TODO-QSP: end
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
  scene.build();
}

function enterNpcLeavingAction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Stay in bed (covers on)', handler: (st: GameState) => {
    ((s as any).sex_ev_exit ?? {})['loc'] = 'bedroom';
    ((s as any).sex_ev ?? {})['leave_action1'] = 'You stay sat on the bed, demurely pulling the sheets up around you to preserve some modesty as you watch ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_leave" }) + ' get dressed. As he finishes, you say,';
    ((s as any).sex_ev ?? {})['leave_action2'] = 'He flashes you a quick smile and then gathers the rest of his stuff to leave, closing the door behind him.';
    qspCall(s, 'sex_ev_leave', 'npc_leaving_dialogue');
  } },
      { label: 'Stay in bed (covers off)', handler: (st: GameState) => {
    ((s as any).sex_ev_exit ?? {})['loc'] = 'bedroom';
    ((s as any).sex_ev ?? {})['leave_action'] = 'You stay sat on the bed, casually laying nude atop the sheets as you watch ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_leave" }) + ' get dressed. He throws more than a few admiring glances your way as he does and when he finishes you say,';
    ((s as any).sex_ev ?? {})['leave_action2'] = 'He flashes you a quick smile and then gathers the rest of his stuff to leave, closing the door behind him.';
    qspCall(s, 'sex_ev_leave', 'npc_leaving_dialogue');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss goodbye', handler: (st: GameState) => {
    ((s as any).sex_ev_exit ?? {})['loc'] = 'bedroom';
    ((s as any).sex_ev ?? {})['leave_action'] = 'You sit on the bed, waiting patiently for ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_leave" }) + ' to get dressed. Once he\'s finished you move over to him and give him a gentle kiss on the lips, saying,';
    ((s as any).sex_ev ?? {})['leave_action2'] = 'He flashes you a quick smile and then gathers the rest of his stuff to leave, closing the door behind him.';
    qspCall(s, 'sex_ev_leave', 'npc_leaving_dialogue');
  } },
    { label: 'See <<$npcdesc>> to the door', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      ((s as any).sex_ev_exit ?? {})['loc'] = 'hallway';
      ((s as any).sex_ev ?? {})['leave_action'] = 'You sit on the bed, waiting patiently for ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_leave" }) + ' to get dressed. Once he\'s finished you move to take him to the door, making no move to get dressed yourself. Opening it for him, he steps out and you stand completely nude in the frame and say,';
      ((s as any).sex_ev ?? {})['leave_action2'] = 'He flashes you a quick smile in return before stepping off. You watch him go for a few moments before heading back inside and closing the door behind you.';
    } else {
      ((s as any).sex_ev ?? {})['leave_action'] = 'You sit on the bed, waiting patiently for ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_leave" }) + ' to get dressed. Once he\'s finished you move to take him to the door. As he steps out, you say,';
      ((s as any).sex_ev ?? {})['leave_action2'] = 'He flashes you a quick smile in return before stepping off. You watch him go for a few moments before heading back inside and closing the door behind you.';
    }
    qspCall(s, 'sex_ev_leave', 'npc_leaving_dialogue');
  } },
    { label: 'Kiss <<$npcdesc>> at the door', handler: (st: GameState) => {
    ((s as any).sex_ev_exit ?? {})['loc'] = 'hallway';
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: $sex_ev['leave_action'] = 'You sit on the bed, waiting patiently for <<$npcdesc>> to get dressed. Once he''s finished you move to take him to the door, making no move to get dressed yourself. Just as <<$npcdesc>> steps out, you grab hold of his shirt to drag him back into a passionate kiss, pulling him tight against your naked body, a sight to be seen by anyone who has a view of your front door. After several long seconds, you break the kiss, saying,'
      if ((Math.floor(Math.random() * 1) + 1) === 5) {
        ((s as any).sex_ev ?? {})['leave_action2'] = 'You pull ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_leave" }) + ' back in for another kiss, but softer and quicker. As you pull back somebody walks past behind him, staring wide eyed at your chest. ';
      } else {
        ((s as any).sex_ev ?? {})['leave_action2'] = 'You pull ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_leave" }) + ' back in for another kiss, but softer and quicker. He flashes you a quick smile in return before stepping off. You watch him go for a few moments before closing the door behind you.';
      }
    } else {
      // TODO-QSP: $sex_ev['leave_action'] = 'You sit on the bed, waiting patiently for <<$npcdesc>> to get dressed. Once he''s finished you move to take him to the door, making no move to get dressed yourself. Just as <<$npcdesc>> steps out, you grab hold of his shirt to pull him into a passionate kiss. After several long seconds, you break the kiss, saying,'
      ((s as any).sex_ev ?? {})['leave_action2'] = 'You pull ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_leave" }) + ' back in for another kiss, but softer and quicker. He flashes you a quick smile in return before stepping off. You watch him go for a few moments before heading back inside and closing the door behind you.';
    }
    qspCall(s, 'sex_ev_leave', 'npc_leaving_dialogue');
  } },
  ]);
  scene.build();
}

function enterNpcLeavingDialogue(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    scene.actions([
      { label: '"Wanna do this again?"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['invite_today'] = 1;
    qspCall(s, 'sex_ev_leave', 'npc_leaving_end');
  } },
    ]);
  } else {
    scene.actions([
      { label: '"Wanna do this again? tomorrow?"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['invite_tomorrow'] = 1;
    qspCall(s, 'sex_ev_leave', 'npc_leaving_end');
  } },
    ]);
  }
  if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
    scene.actions([
      { label: '"See you soon"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = '"See you soon."';
    qspCall(s, 'sex_ev_leave', 'npc_leaving_end');
  } },
    ]);
  } else {
    if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0) + 1) {
      scene.actions([
        { label: '"See you tomorrow"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = '"See you tomorrow."';
    qspCall(s, 'sex_ev_leave', 'npc_leaving_end');
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Till next time"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = '"Till next time."';
    qspCall(s, 'sex_ev_leave', 'npc_leaving_end');
  } },
        { label: '"Wanna do this again?"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['invite_today'] = 1;
    qspCall(s, 'sex_ev_leave', 'npc_leaving_end');
  } },
      ]);
    }
  }
  // TODO-QSP: end}
  // TODO-QSP: end
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: '"Thanks for coming over."', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
      ((s as any).sex_ev ?? {})['leave_dialogue'] = '"Thanks for coming over last night. It was fun."';
    } else {
      ((s as any).sex_ev ?? {})['leave_dialogue'] = '"Thanks for coming over. It was fun."';
    }
    qspCall(s, 'sex_ev_leave', 'npc_leaving_end');
  } },
    { label: '"See ya"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = '"See ya."';
    qspCall(s, 'sex_ev_leave', 'npc_leaving_end');
  } },
    { label: '"Text me"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = '"Text me."';
    qspCall(s, 'sex_ev_leave', 'npc_leaving_end');
  } },
    { label: '"Wanna do this again? tomorrow?"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['invite_tomorrow'] = 1;
    qspCall(s, 'sex_ev_leave', 'npc_leaving_end');
  } },
  ]);
  scene.build();
}

function enterNpcLeavingEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['invite_today'] === 0  &&  ((s as any).sex_ev ?? 0)?.['invite_tomorrow'] === 0) {
    // TODO-QSP: dynamic text: <<$sex_ev['leave_action1']>> <<$sex_ev['leave_dialogue']>> <<$sex_ev['leave_acti...
    scene.text(`${((s as any).sex_ev ?? 0)?.['leave_action1']} ${((s as any).sex_ev ?? 0)?.['leave_dialogue']} ${((s as any).sex_ev ?? 0)?.['leave_action2']}`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['invite_today'] === 1) {
      // TODO-QSP: dynamic text: <<$sex_ev['leave_action1']>>
      scene.text(`${((s as any).sex_ev ?? 0)?.['leave_action1']}`);
      scene.text('"Want to do this again later?" you ask.');
      // TODO-QSP: dynamic text: <<$sex_ev['leave_action2']>>
      scene.text(`${((s as any).sex_ev ?? 0)?.['leave_action2']}`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['invite_tomorrow'] === 1) {
        // TODO-QSP: dynamic text: <<$sex_ev['leave_action1']>>
        scene.text(`${((s as any).sex_ev ?? 0)?.['leave_action1']}`);
        scene.text('"Want to do this again tomorrow?" you ask.');
        // TODO-QSP: dynamic text: <<$sex_ev['leave_action2']>>
        scene.text(`${((s as any).sex_ev ?? 0)?.['leave_action2']}`);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
  ]);
  scene.build();
}

function enterHurryLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
    scene.actions([
      { label: 'Leave your number (fuckbuddy)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuckbuddy_invite'] = 1;
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      ((s as any).sex_ev ?? {})['leave_dialogue'] = ', stopping to scribble your number on a random piece of paper. "Text me if you want to fuck again!" you call over your shoulder as you dash out the door, slamming it behind you.';
    } else {
      ((s as any).sex_ev ?? {})['leave_dialogue'] = ', stopping to scribble your number on a random piece of paper. "Text me if you want to fool around again!" you call over your shoulder as you dash out the door, slamming it behind you.';
    }
    qspCall(s, 'sex_ev_leave', 'hurry_leave2');
  } },
      { label: 'Leave your number (date)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['date_invite'] = 1;
    ((s as any).sex_ev ?? {})['leave_dialogue'] = ', stopping to scribble your number on a random piece of paper. "Text me if you want to go out on a date some time!" you call over your shoulder as you dash out the door, slamming it behind you.';
    qspCall(s, 'sex_ev_leave', 'hurry_leave2');
  } },
    ]);
  }
  if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] === 1  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'husband') {
    scene.actions([
      { label: '"See you soon"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = ', shouting, "See you soon!" just before it slams behind you.';
    qspCall(s, 'sex_ev_leave', 'hurry_leave2');
  } },
    ]);
  } else {
    if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0) + 1) {
      scene.actions([
        { label: '"See you tomorrow"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = ', shouting, "See you tomorrow!" just before it slams behind you.';
    qspCall(s, 'sex_ev_leave', 'hurry_leave2');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'No time for goodbyes', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    ((s as any).sex_ev ?? {})['leave_dialogue'] = ' without even saying goodbye';
    qspCall(s, 'sex_ev_leave', 'hurry_leave2');
  } },
    { label: '"See you later!"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = ', calling, "See you later!" just before it slams behind you.';
    qspCall(s, 'sex_ev_leave', 'hurry_leave2');
  } },
    { label: '"Text me!"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_dialogue'] = ', calling, "Text me!" just before it slams behind you.';
    qspCall(s, 'sex_ev_leave', 'hurry_leave2');
  } },
  ]);
  scene.build();
}

function enterHurryLeave2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Run!', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_action'] = 'You make sure all your clothes are in place with one last quick check and dash to the door';
    qspCall(s, 'sex_ev_leave', 'hurry_leave_finish');
  } },
    { label: 'Peck on the cheek', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_action'] = 'You make sure all your clothes are in place with one last quick check and dash over to ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_leave" }) + ' to give him a quick kiss on the cheek';
    qspCall(s, 'sex_ev_leave', 'hurry_leave_finish');
  } },
    { label: 'Peck on the lips', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leave_action'] = 'You make sure all your clothes are in place with one last quick check and dash over to ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_leave" }) + ' to give him a quick kiss on the lips';
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', 'hurry_leave_finish');
  } },
    ]);
  } },
    { label: 'Passionate kiss', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['leave_action'] = 'You make sure all your clothes are in place with one last quick check and dash over to <<$npcdesc>> to kiss him. Despite your rush, you savour this moment, breathing in the taste of <<$npcdesc>>''s lips even as you force your tongue into his mouth to dance with his. A full five seconds go by until you break the kiss'
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', 'hurry_leave_finish');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHurryLeaveFinish(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "<<$sex_ev['leave_action']>><<$sex_ev['leave_dialogue']>>.
  scene.text(`"${((s as any).sex_ev ?? 0)?.['leave_action']}${((s as any).sex_ev ?? 0)?.['leave_dialogue']}.`);
  if (((Math.floor(Math.random() * 3) + 1) === 1  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious')  &&  ((s as any).sex_ev ?? 0)?.['fuckbuddy_invite'] === 1) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: msg 'Unfortunately, he never ends up texting you.'
  }, goto: ['sex_ev_leave', 'exit'] },
    ]);
  } else {
    if (((Math.floor(Math.random() * 3) + 1) === 1  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex')  &&  ((s as any).sex_ev ?? 0)?.['date_invite'] === 1) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: msg 'Unfortunately, he never ends up texting you.'
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
  // TODO-QSP: end
  scene.build();
}

function enterBreakupStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'husband'  &&  ((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
    scene.actions([
      { label: 'Break things off', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: iif($sex_ev['loc'] ! 'pc_home','"This is the last time I''m coming over," you say, abruptly.','"This...
    // TODO-QSP: dynamic text: "Huh?" <<$npcdesc>> looks at you oddly. "What are you talking about?"
    scene.text(`"Huh?" ${((s as any).npcdesc ?? 0)} looks at you oddly. "What are you talking about?"`);
    qspCall(s, 'sex_ev_leave', 'breakup_mid');
  } },
    ]);
  }
  // TODO-QSP: end
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
    qspCall(s, 'sex_ev_leave', 'unsatisfied_breakup');
    qspCall(s, 'sex_ev_leave', 'no_more_cheating_breakup');
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
  // TODO-QSP: end
  scene.build();
}

function enterUnsatisfiedBreakup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'You don\'t satisfy me', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"You\'re just not what I want out of a fuckbuddy," you say flatly.');
    if (((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_two_pump ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.actions([
        { label: 'You\'re a two pump chump', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"You\'re just not what I want out of a fuckbuddy," you say flatly. "You come too fast. I can\'t trust you to get me off."');
    scene.text('"Wait but-"');
    qspCall(s, 'sex_ev_leave', 'isnt_going_to_work');
  } },
      ]);
    } else {
      if (((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] < 5) {
        scene.actions([
          { label: 'You don\'t last long enough for me', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"You\'re just not what I want out of a fuckbuddy," you say flatly. "You can\'t keep it up and I can\'t trust you to get me off."');
    scene.text('"Wait but-"');
    qspCall(s, 'sex_ev_leave', 'isnt_going_to_work');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'You last too long', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"You\'re just not what I want out of a fuckbuddy," you say flatly. "Honestly, your sex drive is way too high. By the time you\'re satisfied, my pussy is sore."');
    scene.text('"Wait but-"');
    qspCall(s, 'sex_ev_leave', 'isnt_going_to_work');
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
    if (((s as any).npc_know_cheat ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
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
    if (((s as any).npc_know_cheat ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
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
    ((s as any).npc_know_cheat ?? {})[String((s as any).npcID ?? 0)] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"The truth is, I\'ve started seeing somebody. The sex has been good, but..." You shake your head, grabbing your purse. "I can\'t keep doing this. I don\'t want to fuck things up."');
    if (((s as any).npc_fidelity_label ?? 0)?.[String((s as any).boy ?? 0)] !== 'faithful'  &&  ((s as any).npc_fidelity_label ?? 0)?.[String((s as any).boy ?? 0)] !== 'open') {
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
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Well..." you say slowly. "As long as it\'s <i>just</i> physical..."');
    // TODO-QSP: dynamic text: "Thatta girl," <<$npcdesc>> grins from bed.
    scene.text(`"Thatta girl," ${((s as any).npcdesc ?? 0)} grins from bed.`);
    qspCall(s, 'sex_ev_after', 'cheating_end');
  } },
      { label: 'Set some rules', handler: (st: GameState) => {
    scene.text('"Okay..." you say. "But there have to be rules!"');
    qspCall(s, 'sex_ev_talk', 'cheating_rules');
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Oh." <<$npc_firstname[$npclastsaved]>> looks at you. "I guess that's fair. So.....
      scene.text(`"Oh." ${((s as any).npc_firstname ?? 0)?.[String((s as any).npclastsaved ?? 0)]} looks at you. "I guess that's fair. So... I'll see you around?"`);
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
  // TODO-QSP: end
  scene.build();
}

function enterIsntGoingToWork(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
    // TODO-QSP: dynamic text: "Where the fuck are you going?" <<$npcdesc>> asks in bewilderment.
    scene.text(`"Where the fuck are you going?" ${((s as any).npcdesc ?? 0)} asks in bewilderment.`);
    scene.text('"I\'m not gonna be fuckbuddies with a guy who never uses condoms," you sneer at him. "<i>Don\'t</i> text me again."');
    scene.text('The second you\'re dressed you stalk out the door and slam it behind you.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSneakOut1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Leave your panties', handler: (st: GameState) => {
    ((s as any).npc_panty_give ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_panty_give ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    qspCall(s, 'panties', 'dispose');
    // TODO-QSP: $sex_ev['hall_way']
    if (((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: Suddenly feeling naughty, you quickly slip your panties down your legs, leaving ...
      scene.text(`Suddenly feeling naughty, you quickly slip your panties down your legs, leaving your pussy bare underneath your skirt. You loop your warm underwear around the handle of ${((s as any).npcdesc ?? 0)}'s bedroom door and then quietly sneak out of his apartment, leaving only your gift behind.`);
    } else {
      // TODO-QSP: dynamic text: Suddenly feeling naughty, you pull down your trousers down and spend a minute un...
      scene.text(`Suddenly feeling naughty, you pull down your trousers down and spend a minute untangling your legs before pulling your bottoms back up back up, sans panties. You loop your warm underwear around the handle of ${((s as any).npcdesc ?? 0)}'s bedroom door and then quietly sneak out of his apartment, leaving only your gift behind.`);
    }
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: 'Leave your a note on your panties', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['panty_note'] = 1;
    ((s as any).npc_panty_give ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_panty_give ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    qspCall(s, 'panties', 'dispose');
    // TODO-QSP: $sex_ev['hall_way']
    if (((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: Not wanting to leave without saying goodbye but not wanting to wake <<$npcdesc>>...
      scene.text(`Not wanting to leave without saying goodbye but not wanting to wake ${((s as any).npcdesc ?? 0)} either, you start to look for a piece of paper when a naughty thought runs through your mind. Unable to resist the thought, you quickly slip your panties down from underneath your skirt and then rummage for a big marker.`);
    } else {
      // TODO-QSP: dynamic text: Not wanting to leave without saying goodbye but not wanting to wake <<$npcdesc>>...
      scene.text(`Not wanting to leave without saying goodbye but not wanting to wake ${((s as any).npcdesc ?? 0)} either, you start to look for a piece of paper when a naughty thought runs through your mind. Unable to resist the thought, you quickly pull down your trousers down and spend a minute untangling your legs before pulling your bottoms back up, sans panties. Then you rummage for a big marker.`);
    }
    scene.text('You pop the cap with a grin and start scribbling.');
    qspCall(s, 'sex_ev_leave', 'sneak_out_note1');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1  &&  ((s as any).sex_ev ?? 0)?.['prostitution_paid'] === 0  &&  ((s as any).sex_ev ?? 0)?.['boy_asleep'] === 1) {
    scene.actions([
      { label: 'Wake him up for your money', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'prostitution_wakeup1'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Sneak out', goto: ['sex_ev_leave', 'sneak_out2'] },
    { label: 'Leave a note', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: Not wanting to leave without saying goodbye but not wanting to wake <<$npcdesc>>...
    scene.text(`Not wanting to leave without saying goodbye but not wanting to wake ${((s as any).npcdesc ?? 0)} either, you find a piece of paper and a pen and scribble out a quick message.`);
    qspCall(s, 'sex_ev_leave', 'sneak_out_note1');
  } },
  ]);
  scene.build();
}

function enterProstitutionWakeup1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'prostitution_pay_code');
  // TODO-QSP: end
  scene.actions([
    { label: 'Be nice', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: Gently, you shake <<$npcdesc>>'s shoulder until he starts awake.
    scene.text(`Gently, you shake ${((s as any).npcdesc ?? 0)}'s shoulder until he starts awake.`);
    scene.text('"Huh-?" He looks around, blinking in confusion.');
    if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
      // TODO-QSP: iif($npc_rel_type[$npcID] = 'sugar_daddy', '"Hey," you smile softly. "I had a great time last night ...
    } else {
      // TODO-QSP: iif($npc_rel_type[$npcID] = 'sugar_daddy', '"Hey," you smile softly. "I had a great time but I reall...
    }
    scene.text('"Oh. Yeah," he mumbles, sitting up slowly. "Just lemme..."');
    // TODO-QSP: dynamic text: Very slowly, he pulls out some notes from his wallet, needing to recount several...
    scene.text(`Very slowly, he pulls out some notes from his wallet, needing to recount several times before getting the right amount of ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_paid'])}.`);
    qspCall(s, 'sex_ev_leave', 'prostitution_wakeup2');
  } },
    { label: 'Be transactional', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: Without any particular courtesy or care, you shake <<$npcdesc>>'s shoulder until...
    scene.text(`Without any particular courtesy or care, you shake ${((s as any).npcdesc ?? 0)}'s shoulder until he starts awake.`);
    scene.text('"Huh-?" He looks around, blinking in confusion.');
    scene.text('"I need to go," you say bluntly. "Where\'s my money?"');
    scene.text('"Oh. Yeah," he mumbles, sitting up slowly. "Just lemme..."');
    // TODO-QSP: dynamic text: Very slowly, he pulls out some notes from his wallet, needing to recount several...
    scene.text(`Very slowly, he pulls out some notes from his wallet, needing to recount several times before getting the right amount of ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_paid'])}.`);
    scene.text('"Thanks." You snatch the money and barely pause to stuff it into your purse as you head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterProstitutionWakeup2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank him', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Thanks daddy," you say and tuck the money into your purse before slipping out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    { label: 'Kiss his cheek', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Thanks daddy," you smile, tucking the money into your purse and giving him a quick peck on the cheek before slipping out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    { label: 'Peck him on the lips', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Thanks daddy," you smile, tucking the money into your purse and giving him a quick peck on the lips before slipping out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    { label: 'Kiss him deeply', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "Thanks daddy," you smile. You tuck the money into your purse and turn back, sud...
    scene.text(`"Thanks daddy," you smile. You tuck the money into your purse and turn back, suddenly pulling ${((s as any).npcdesc ?? 0)}'s face into a deep kiss, inhaling his taste, his scent, and pushing your tongue between his lips. It's several seconds before you let it end and a trail of saliva hangs between you when you finally break the kiss. After a smoldering gaze, you lick your lips and slip out the door.`);
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
    // TODO-QSP: $sex_ev['hall_way']
    ((s as any).sex_ev ?? {})['note_desc1'] = '<i>Thanks for the fuck.</i>';
    // TODO-QSP: $sex_ev['note_desc1']
    qspCall(s, 'sex_ev_leave', 'sneak_out_note2');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1  &&  ((s as any).sex_ev ?? 0)?.['prostitution_paid'] === 0) {
    scene.actions([
      { label: 'This one\'s a freebie', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    ((s as any).sex_ev ?? {})['prostitution_freebie'] = 1;
    // TODO-QSP: $sex_ev['hall_way']
    ((s as any).sex_ev ?? {})['note_desc1'] = '<i>Consider last night a freebie.</i>';
    scene.text('You didn\'t get paid last night and he\'s still asleep, but you can\'t bring yourself to wake him.');
    // TODO-QSP: $sex_ev['note_desc1']
    if (((s as any).sex_ev ?? 0)?.['orgasm_count'] > 0) {
      scene.text('You twist your mouth in a wry smirk as you scribble out the first half. Maybe in some ways, the orgasms you got were payment enough.');
    } else {
      scene.text('You twist your mouth in a wry smirk as you scribble out the first half. Maybe in some ways, the sex you had was payment enough.');
    }
    qspCall(s, 'sex_ev_leave', 'sneak_out_note2');
  } },
      { label: 'I\'ll add this to your tab', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    ((s as any).npc_prostitution_tab ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_prostitution_tab ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (((s as any).sex_ev ?? 0)?.['prostitution_sum']);
    // TODO-QSP: $sex_ev['hall_way']
    ((s as any).sex_ev ?? {})['note_desc1'] = '<i>I\'ll add tonight to your tab.</i>';
    scene.text('You didn\'t get paid last night and he\'s still asleep, but you can\'t bring yourself to wake him.');
    // TODO-QSP: $sex_ev['note_desc1']
    if (((s as any).sex_ev ?? 0)?.['orgasm_count'] > 0) {
      scene.text('You twist your mouth in a wry smirk as you scribble out the first half. Maybe that\'s worth a delayed payment.');
    } else {
      scene.text('You twist your mouth in a wry smirk as you scribble out the first half. Maybe in some ways, the sex you had was worth a delayed payment.');
    }
    qspCall(s, 'sex_ev_leave', 'sneak_out_note2');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Thanks for letting me stay over', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    ((s as any).sex_ev ?? {})['note_desc1'] = '<i>Thanks for letting me spend the night.</i>';
    // TODO-QSP: $sex_ev['note_desc1']
    qspCall(s, 'sex_ev_leave', 'sneak_out_note2');
  } },
    { label: 'I had a good time', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    ((s as any).sex_ev ?? {})['note_desc1'] = '<i>I had a good time last night.</i>';
    // TODO-QSP: $sex_ev['note_desc1']
    qspCall(s, 'sex_ev_leave', 'sneak_out_note2');
  } },
  ]);
  scene.build();
}

function enterProstitutionTabNote1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterSneakOutNote2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
    scene.actions([
      { label: 'Text me (fuckbuddies)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuckbuddy_invite'] = 1;
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      ((s as any).sex_ev ?? {})['note_desc2'] = '<i>Text me if you want to fuck again.</i>';
    } else {
      ((s as any).sex_ev ?? {})['note_desc2'] = '<i>Text me if you want to fool around again.</i>';
    }
    qspCall(s, 'sex_ev_leave', 'sneak_out_note3');
  } },
      { label: 'Text me (date)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['date_invite'] = 1;
    ((s as any).sex_ev ?? {})['note_desc2'] = '<i>Text me if you want to go out on a date sometime.</i>';
    qspCall(s, 'sex_ev_leave', 'sneak_out_note3');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Text me', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['note_desc2'] = '<i>Don\'t forget to text me.</i>';
    qspCall(s, 'sex_ev_leave', 'sneak_out_note3');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'It was fun', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['note_desc2'] = '<i>It was fun.</i>';
    qspCall(s, 'sex_ev_leave', 'sneak_out_note3');
  } },
    { label: 'See ya', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['note_desc2'] = '<i>See ya later.</i>';
    qspCall(s, 'sex_ev_leave', 'sneak_out_note3');
  } },
    { label: 'Till next time', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['note_desc2'] = '<i>Until next time.</i>';
    qspCall(s, 'sex_ev_leave', 'sneak_out_note3');
  } },
  ]);
  scene.build();
}

function enterSneakOutNote3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['hall_way']
  // TODO-QSP: dynamic text: <<$sex_ev['note_desc1']>> <<$sex_ev['note_desc2']>>
  scene.text(`${((s as any).sex_ev ?? 0)?.['note_desc1']} ${((s as any).sex_ev ?? 0)?.['note_desc2']}`);
  scene.text('You sign it with...');
  if (((s as any).pcs_makeup ?? 0) > 2) {
    scene.actions([
      { label: 'A kiss', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: <<$sex_ev['note_desc1']>> <<$sex_ev['note_desc2']>>
    scene.text(`${((s as any).sex_ev ?? 0)?.['note_desc1']} ${((s as any).sex_ev ?? 0)?.['note_desc2']}`);
    if (((s as any).sex_ev ?? 0)?.['panty_note'] === 1) {
      scene.text('You run your tongue over your lips and press them together a moment before signing your note with a big sloppy wet smooch. As you pull back, your lipstick leaves a large kiss mark across your discarded panties. Good thing you did your makeup before you left.');
    } else {
      scene.text('You run your tongue over your lips and press them together a moment before signing your note with a big sloppy wet smooch. As you pull back, your lipstick leaves large kiss on the page. Good thing you did your makeup before you left.');
    }
    qspCall(s, 'sex_ev_leave', 'sneak_out_note_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Just your name', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: <<$sex_ev['note_desc1']>> <<$sex_ev['note_desc2']>> - <<$pcs_nickname>>
    scene.text(`${((s as any).sex_ev ?? 0)?.['note_desc1']} ${((s as any).sex_ev ?? 0)?.['note_desc2']} - ${((s as any).pcs_nickname ?? 0)}`);
    qspCall(s, 'sex_ev_leave', 'sneak_out_note_end');
  } },
    { label: 'A smiley face', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: <<$sex_ev['note_desc1']>> <<$sex_ev['note_desc2']>> <b><i>:)</i></b>
    scene.text(`${((s as any).sex_ev ?? 0)?.['note_desc1']} ${((s as any).sex_ev ?? 0)?.['note_desc2']} <b><i>:)</i></b>`);
    scene.text('You leave a little face, unable to keep yourself from smiling as you dot two little eyes over the mouth.');
    qspCall(s, 'sex_ev_leave', 'sneak_out_note_end');
  } },
    { label: 'A winky face', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: <<$sex_ev['note_desc1']>> <<$sex_ev['note_desc2']>> <b><i>;)</i></b>
    scene.text(`${((s as any).sex_ev ?? 0)?.['note_desc1']} ${((s as any).sex_ev ?? 0)?.['note_desc2']} <b><i>;)</i></b>`);
    scene.text('You leave a little face, unable to keep yourself from smiling as you dot little winky eyes over the mouth.');
    qspCall(s, 'sex_ev_leave', 'sneak_out_note_end');
  } },
    { label: 'A heart', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: <<$sex_ev['note_desc1']>> <<$sex_ev['note_desc2']>> <b><i><3</i></b>
    scene.text(`${((s as any).sex_ev ?? 0)?.['note_desc1']} ${((s as any).sex_ev ?? 0)?.['note_desc2']} <b><i><3</i></b>`);
    scene.text('You punctuate the note with a tiny little heart, feeling warmth in your chest as you do.');
    qspCall(s, 'sex_ev_leave', 'sneak_out_note_end');
  } },
  ]);
  scene.build();
}

function enterSneakOutNoteEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['panty_note'] === 1) {
    // TODO-QSP: dynamic text: Satisfied, you leave your panties on the counter and quietly slip out the door, ...
    scene.text(`Satisfied, you leave your panties on the counter and quietly slip out the door, wondering what ${((s as any).npcdesc ?? 0)} will think when he discovers them.`);
  } else {
    scene.text('Satisfied, you leave your note on the counter and quietly slip out the door, letting it click shut behind you.');
  }
  if (((Math.floor(Math.random() * 3) + 1) === 1  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious')  &&  ((s as any).sex_ev ?? 0)?.['fuckbuddy_invite'] === 1) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: msg 'Unfortunately, he never ends up texting you.'
  }, goto: ['sex_ev_leave', 'exit'] },
    ]);
  } else {
    if (((Math.floor(Math.random() * 3) + 1) === 1  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex')  &&  ((s as any).sex_ev ?? 0)?.['date_invite'] === 1) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: msg 'Unfortunately, he never ends up texting you.'
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
  // TODO-QSP: end
  scene.build();
}

function enterSneakOut2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['hall_way']
  // TODO-QSP: dynamic text: You tip toe your way to the door, turning the handle as gently as you can so you...
  scene.text(`You tip toe your way to the door, turning the handle as gently as you can so you don't disturb ${((s as any).npcdesc ?? 0)}, closing it with a soft click behind you.`);
  // TODO-QSP: end
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
  // TODO-QSP: end
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
                // TODO-QSP: $sex_ev['bed_room']
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcOrNpcDressing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dressing_start'] !== 1) {
  }
  // TODO-QSP: end
  scene.build();
}

function enterDressing1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  if (((s as any).sex_ev ?? 0)?.['angry_after'] === 1  ||  ((s as any).sex_ev ?? 0)?.['annoyed'] > 0) {
    // TODO-QSP: dynamic text: "I have to go," you say flatly, reaching down for your clothes without looking a...
    scene.text(`"I have to go," you say flatly, reaching down for your clothes without looking at ${((s as any).npcdesc ?? 0)}.`);
    scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['cant_stay'] === 1) {
      qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
      // TODO-QSP: dynamic text: "Guess I'll go then," you sigh, <<$sex_ev['dress_describe']>>.
      scene.text(`"Guess I'll go then," you sigh, ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
      scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['npc_late'] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>> starts getting dressed next to you.
        scene.text(`${((s as any).npcdesc ?? 0)} starts getting dressed next to you.`);
        scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['boy_in_shower'] === 1) {
          ((s as any).sex_ev ?? {})['boy_in_shower'] = 0;
          // TODO-QSP: dynamic text: <<$npcdesc>> comes back into the room just as you are <<$sex_ev['dress_describe'...
          scene.text(`${((s as any).npcdesc ?? 0)} comes back into the room just as you are ${((s as any).sex_ev ?? 0)?.['dress_describe']} with a towel around his waist and wet hair.`);
          scene.text('"Hey, what\'s up? You heading out?" he asks.');
        } else {
          if (((s as any).sex_ev ?? 0)?.['npc_late'] === 0) {
            // TODO-QSP: dynamic text: "You heading out?" <<$npcdesc>> asks as you are <<$sex_ev['dress_describe']>>.
            scene.text(`"You heading out?" ${((s as any).npcdesc ?? 0)} asks as you are ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
          }
        }
        qspCall(s, 'sex_ev_leave', 'not_leaving');
        qspCall(s, 'sex_ev_leave', 'leaving_soon');
        qspCall(s, 'sex_ev_leave', 'something_to_do');
        qspCall(s, 'sex_ev_leave', 'see_a_friend');
        qspCall(s, 'sex_ev_leave', 'another_fuckbuddy');
        if (((s as any).sex_ev ?? 0)?.['sleepover'] < 1) {
          qspCall(s, 'sex_ev_leave', 'going_disco');
          qspCall(s, 'sex_ev_leave', 'mom_late');
          qspCall(s, 'sex_ev_leave', 'need_homework');
          qspCall(s, 'sex_ev_leave', 'school_night');
        }
        qspCall(s, 'sex_ev_leave', 'going_school');
        qspCall(s, 'sex_ev_leave', 'go_church1');
        scene.actions([
          { label: 'End things with <<$npcdesc>>', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'break_up_ev'
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDressing2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['leaving'] = 1;
  if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
    qspCall(s, 'sex_ev_morning', 'end_morning');
  } else {
    scene.actions([
      { label: 'Finish getting dressed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'dressing_finish'
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['dress_talking_flag'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_dress_talking', 'dress_talk'] }]);
  }
  if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
    scene.actions([
      { label: 'Talk while you dress', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'dress_talk'
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['ma_pill_money'] === 0  &&  ((s as any).npc_pay_for_ma_pill ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_dress_talking', 'money_for_ma_pill');
  } },
    ]);
  }
  qspCall(s, 'sex_ev_leave', 'panty_gift');
  // TODO-QSP: end
  scene.actions([
    { label: 'End things with <<$npcdesc>>', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'break_up_ev'
  } },
  ]);
  scene.build();
}

function enterDressingFinish(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['dressed_to_go'] = 1;
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  // TODO-QSP: dynamic text: You finish <<$sex_ev['dress_describe']>>.
  scene.text(`You finish ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
  qspCall(s, 'sex_ev_clothing', 'dress_loop_end');
  if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1  &&  ((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['boy_asleep'] !== 0) {
    qspCall(s, 'sex_ev_leave', 'sneak_out1');
  } else {
    qspCall(s, 'sex_ev_leave', 'leaving_dialogue');
  }
  // TODO-QSP: end
  scene.build();
}

function enterNotLeaving(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
    scene.actions([
      { label: 'Not yet', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You heading out?" <<$npcdesc>> asks.
    scene.text(`"You heading out?" ${((s as any).npcdesc ?? 0)} asks.`);
    // TODO-QSP: dynamic text: "Not yet," you say, <<$sex_ev['dress_describe']>>. "Just tired of hanging out na...
    scene.text(`"Not yet," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Just tired of hanging out naked."`);
    scene.text('"I\'m never tired of seeing you naked."');
    scene.actions([
      { label: 'Roll your eyes', handler: (st: GameState) => {
    scene.text('"Whatever," you sigh, rolling your eyes to the heavens.');
  }, goto: ['sex_ev_leave', 'dressing2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLeavingSoon(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Yeah', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leaving'] = 1;
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You heading out?" <<$npcdesc>> asks.
    scene.text(`"You heading out?" ${((s as any).npcdesc ?? 0)} asks.`);
    if (((s as any).sex_ev ?? 0)?.['sleepover'] < 1) {
      // TODO-QSP: '"Yeah," you say, <<$sex_ev[''dress_describe'']>>.' + iif($sex_ev['loc'] = 'pc_home', ' "Get your cl...
      scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
    } else {
      // TODO-QSP: dynamic text: "Yeah," you say, <<$sex_ev['dress_describe']>>.
      scene.text(`"Yeah," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
      if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] === 1)  ||  ((((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0) + 1)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === 1))) {
        qspCall(s, 'sex_ev_dress_talking', 'sex_ev_invite_later');
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
      }
      if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
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
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You heading out?" <<$npcdesc>> asks.
    scene.text(`"You heading out?" ${((s as any).npcdesc ?? 0)} asks.`);
    if (((s as any).sex_ev ?? 0)?.['disco_after'] === 1) {
      // TODO-QSP: '"Weren''t you listening to me?" you say, <<$sex_ev[''dress_describe'']>>. "I told you, I''m going t...
    } else {
      // TODO-QSP: '"Yeah," you say, <<$sex_ev[''dress_describe'']>>. "I want to go to the disco.' + iif($sex_ev['loc']...
    }
    qspCall(s, 'sex_ev_leave', 'dressing2');
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Going to the club', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You heading out?" <<$npcdesc>> asks.
    scene.text(`"You heading out?" ${((s as any).npcdesc ?? 0)} asks.`);
    if (((s as any).sex_ev ?? 0)?.['club_after'] === 1) {
      // TODO-QSP: '"Weren''t you listening to me?" you say, <<$sex_ev[''dress_describe'']>>. "I told you, I''m going c...
    } else {
      // TODO-QSP: '"Yeah," you say, <<$sex_ev[''dress_describe'']>>. "I want to hit the club tonight."' + iif($sex_ev[...
    }
    qspCall(s, 'sex_ev_leave', 'dressing2');
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMomLate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    scene.actions([
      { label: 'Mom will kill me', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['mom_kill'] = 1;
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You heading out?" <<$npcdesc>> asks.
    scene.text(`"You heading out?" ${((s as any).npcdesc ?? 0)} asks.`);
    if (((s as any).hour ?? 0) < 3) {
      // TODO-QSP: dynamic text: "Yeah," you say, <<$sex_ev['dress_describe']>>. "I'm already going to be in trou...
      scene.text(`"Yeah," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "I'm already going to be in trouble as it is, but if I don't come home at all tonight, my mom will kill me."`);
    } else {
      // TODO-QSP: dynamic text: "Yeah," you say, <<$sex_ev['dress_describe']>>. "My mom will kill me if I don't ...
      scene.text(`"Yeah," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "My mom will kill me if I don't come home before curfew."`);
    }
    qspCall(s, 'sex_ev_leave', 'dressing2');
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNeedHomework(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lernHome ?? 0) > 0) {
    scene.actions([
      { label: 'Need to finish my homework', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You heading out?" <<$npcdesc>> asks.
    scene.text(`"You heading out?" ${((s as any).npcdesc ?? 0)} asks.`);
    // TODO-QSP: '"Yeah," you say, <<$sex_ev[''dress_describe'']>>. "I need to do my homework.' + iif($sex_ev['loc'] ...
    if (((s as any).npc_intel ?? 0)?.[String((s as any).npcID ?? 0)] < 30  &&  ((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] < 2) {
      scene.text('"Seriously? That\'s what you\'re in a rush for?"');
      scene.actions([
        { label: 'I want to go to uni', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "I want to go to uni," you say, <<$sex_ev['dress_describe']>>. "Can't do that if...
    scene.text(`"I want to go to uni," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Can't do that if I fail out of school for not doing my homework."`);
    qspCall(s, 'sex_ev_leave', 'dressing2');
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
        { label: 'Don\'t be an asshole', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Don't be an asshole," you glare, <<$sex_ev['dress_describe']>>. "My grades are ...
    scene.text(`"Don't be an asshole," you glare, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "My grades are important to me. More important than spending more time fucking you."`);
    qspCall(s, 'sex_ev_leave', 'dressing2');
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "I guess your future after school is pretty important," <<$npcdesc>> says.
      scene.text(`"I guess your future after school is pretty important," ${((s as any).npcdesc ?? 0)} says.`);
      scene.actions([
        { label: 'Thanks for understanding', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Thanks," you say, <<$sex_ev['dress_describe']>>. "It means a lot to me that you...
    scene.text(`"Thanks," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "It means a lot to me that you get it."`);
    qspCall(s, 'sex_ev_leave', 'dressing2');
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
        { label: 'Want to go to uni', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "I really want to go to uni," you say, <<$sex_ev['dress_describe']>>. "So keepin...
    scene.text(`"I really want to go to uni," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "So keeping up with my classes is really important."`);
    qspCall(s, 'sex_ev_leave', 'dressing2');
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
        { label: 'Damn straight', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Damn straight it is," you say, <<$sex_ev['dress_describe']>>. "Skipping schoolw...
    scene.text(`"Damn straight it is," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Skipping schoolwork to fuck you could end up fucking me for life!"`);
    qspCall(s, 'sex_ev_leave', 'dressing2');
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
        { label: 'No hard feelings', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "No hard feelings, right?" you ask, <<$sex_ev['dress_describe']>>. "I really lik...
    scene.text(`"No hard feelings, right?" you ask, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "I really like you, I just can't afford to get kicked out of school."`);
    qspCall(s, 'sex_ev_leave', 'dressing2');
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
      ]);
    }
    qspCall(s, 'sex_ev_leave', 'panty_gift');
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSomethingToDo(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Gotta do something', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leaving'] = 1;
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You heading out?" <<$npcdesc>> asks.
    scene.text(`"You heading out?" ${((s as any).npcdesc ?? 0)} asks.`);
    if (((s as any).sex_ev ?? 0)?.['sleepover'] < 1) {
      // TODO-QSP: '"Yeah," you say, <<$sex_ev[''dress_describe'']>>. "Have a few things I need to get done.' + iif($se...
      scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
    } else {
      // TODO-QSP: '"Yeah," you say, <<$sex_ev[''dress_describe'']>>. "Have a few things I need to get done.' + iif($se...
      if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0)  ||  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0) + 1)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === 1))) {
        qspCall(s, 'sex_ev_dress_talking', 'sex_ev_invite_later');
      } else {
        // TODO-QSP: iif($sex_ev['loc'] = 'pc_home','"It''s fine. I get it."','"No problem. It was fun."')
        qspCall(s, 'sex_ev_morning', 'end_morning');
      }
    }
  } },
  ]);
  scene.build();
}

function enterSeeAFriend(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Meeting a friend', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leaving'] = 1;
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You heading out?" <<$npcdesc>> asks.
    scene.text(`"You heading out?" ${((s as any).npcdesc ?? 0)} asks.`);
    if (((s as any).sex_ev ?? 0)?.['sleepover'] < 1) {
      // TODO-QSP: '"Yeah," you say, <<$sex_ev[''dress_describe'']>>. "Need to see a friend later.' + iif($sex_ev['loc'...
      scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
    } else {
      // TODO-QSP: '"Yeah," you say, <<$sex_ev[''dress_describe'']>>. "Need to see a friend later.' + iif($sex_ev['loc'...
      if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0)  ||  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0) + 1)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === 1))) {
        qspCall(s, 'sex_ev_dress_talking', 'sex_ev_invite_later');
      } else {
        scene.text('"No problem."');
        qspCall(s, 'sex_ev_morning', 'end_morning');
      }
    }
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
  ]);
  scene.build();
}

function enterAnotherFuckbuddy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['fuckbuddies_current'] > 1) {
    scene.actions([
      { label: 'Another booty call', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['leaving'] = 1;
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You heading out?" <<$npcdesc>> asks.
    scene.text(`"You heading out?" ${((s as any).npcdesc ?? 0)} asks.`);
    if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      // TODO-QSP: dynamic text: "Yeah," you say, <<$sex_ev['dress_describe']>>. "Got a booty call to answer."
      scene.text(`"Yeah," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Got a booty call to answer."`);
    } else {
      // TODO-QSP: dynamic text: "Yeah," you say, <<$sex_ev['dress_describe']>>. "Got another booty call to answe...
      scene.text(`"Yeah," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Got another booty call to answer."`);
    }
    // TODO-QSP: dynamic text: "You really get around don't you?" <<$npcdesc>> smirks back.
    scene.text(`"You really get around don't you?" ${((s as any).npcdesc ?? 0)} smirks back.`);
    qspCall(s, 'sex_ev_leave', 'dressing2');
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoingSchool(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 9  &&  ((s as any).hour ?? 0) > 5) {
    scene.actions([
      { label: 'School', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You heading out?" <<$npcdesc>> asks.
    scene.text(`"You heading out?" ${((s as any).npcdesc ?? 0)} asks.`);
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
      if (((s as any).sex_ev ?? 0)?.['late_for_school'] === 1  &&  ((s as any).hour ?? 0) >= 8) {
        // TODO-QSP: dynamic text: "I already told you, I'm late for school," you say, <<$sex_ev['dress_describe']>...
        scene.text(`"I already told you, I'm late for school," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "You gotta get out of here so I can lock up."`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['late_for_school'] === 1) {
          // TODO-QSP: dynamic text: "I already told you, I'm gonna be late for school," you say, <<$sex_ev['dress_de...
          scene.text(`"I already told you, I'm gonna be late for school," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "You gotta get out of here so I can lock up."`);
        } else {
          if (((s as any).hour ?? 0) === 7) {
            // TODO-QSP: dynamic text: "Gotta get to school," you say, <<$sex_ev['dress_describe']>>. "And you gotta ge...
            scene.text(`"Gotta get to school," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "And you gotta get out of here so I can lock up."`);
          } else {
            // TODO-QSP: dynamic text: "Gotta get ready for school," you say, <<$sex_ev['dress_describe']>>. "And you g...
            scene.text(`"Gotta get ready for school," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "And you gotta get out of here so I can lock up."`);
          }
        }
      }
      if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0)  ||  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0) + 1)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === 1))) {
        qspCall(s, 'sex_ev_dress_talking', 'sex_ev_invite_later');
      } else {
        scene.text('"No problem."');
        qspCall(s, 'sex_ev_morning', 'end_morning');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['late_for_school'] === 1  &&  ((s as any).hour ?? 0) >= 8) {
        // TODO-QSP: '"I already told you, I''m late for school," you say, <<$sex_ev[''dress_describe'']>>. ' + iif(sex_e...
      } else {
        if (((s as any).sex_ev ?? 0)?.['late_for_school'] === 1) {
          // TODO-QSP: '"I already told you, I''m gonna be late for school," you say, <<$sex_ev[''dress_describe'']>>. ' + ...
        } else {
          if (((s as any).hour ?? 0) === 7) {
            // TODO-QSP: '"Gotta get to school," you say, <<$sex_ev[''dress_describe'']>>. ' + iif(sex_ev['sleepover'] = 1, '...
          } else {
            // TODO-QSP: '"Gotta get ready for school," you say, <<$sex_ev[''dress_describe'']>>. ' + iif(sex_ev['sleepover']...
          }
        }
      }
      if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0)  ||  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0) + 1)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === 1))) {
        qspCall(s, 'sex_ev_dress_talking', 'sex_ev_invite_later');
      } else {
        if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
          scene.text('"No problem."');
        }
        qspCall(s, 'sex_ev_morning', 'end_morning');
      }
    }
    qspCall(s, 'sex_ev_dress_talking', 'dress_talk');
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSchoolNight(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  (((s as any).week ?? 0) < 5  ||  ((s as any).week ?? 0) === 7)  &&  (((s as any).hour ?? 0) > 19  ||  ((s as any).hour ?? 0) < 5)) {
    scene.actions([
      { label: 'It\'s a school night', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You heading out?" <<$npcdesc>> asks.
    scene.text(`"You heading out?" ${((s as any).npcdesc ?? 0)} asks.`);
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
      // TODO-QSP: dynamic text: "It's a school night," you say, <<$sex_ev['dress_describe']>>. "You gotta go so ...
      scene.text(`"It's a school night," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "You gotta go so I can get up for class tomorrow."`);
      if ((Math.floor(Math.random() * 10) + 1) < 0) {
        scene.text('"Are you sure I can\'t spend the night?');
      } else {
        scene.text('"Okay."');
        if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0)  ||  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0) + 1)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === 1))) {
          qspCall(s, 'sex_ev_dress_talking', 'sex_ev_invite_later');
        } else {
          qspCall(s, 'sex_ev_leave', 'dressing2');
        }
        qspCall(s, 'sex_ev_dress_talking', 'dress_talk');
      }
    } else {
      // TODO-QSP: dynamic text: "It's a school night," you say, <<$sex_ev['dress_describe']>>. "Gotta get home s...
      scene.text(`"It's a school night," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Gotta get home so I can set my alarm and get up for class tomorrow."`);
      if ((Math.floor(Math.random() * 3) + 1) === 3  &&  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0)  ||  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0) + 1)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === 1))) {
        qspCall(s, 'sex_ev_dress_talking', 'sex_ev_invite_later');
      } else {
        qspCall(s, 'sex_ev_leave', 'dressing2');
      }
      qspCall(s, 'sex_ev_dress_talking', 'dress_talk');
    }
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoChurch1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).churchday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Going to Vigil', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    if (((s as any).hour ?? 0) < 19) {
      // TODO-QSP: dynamic text: "I need to get ready for vigil," you say, <<$sex_ev['dress_describe']>>.
      scene.text(`"I need to get ready for vigil," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
    } else {
      // TODO-QSP: dynamic text: "I'm late for vigil," you say, hurriedly <<$sex_ev['dress_describe']>>.
      scene.text(`"I'm late for vigil," you say, hurriedly ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
    }
    qspCall(s, 'sex_ev_leave', 'go_church2');
  } },
    ]);
  } else {
    if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 12  &&  ((s as any).churchday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Going to Liturgy', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    if (((s as any).hour ?? 0) < 9) {
      // TODO-QSP: dynamic text: "I need to get ready for liturgy this morning," you say, <<$sex_ev['dress_descri...
      scene.text(`"I need to get ready for liturgy this morning," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
    } else {
      // TODO-QSP: dynamic text: "I'm late for liturgy," you say, hurriedly <<$sex_ev['dress_describe']>>.
      scene.text(`"I'm late for liturgy," you say, hurriedly ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
    }
    qspCall(s, 'sex_ev_leave', 'go_church2');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoChurchReply(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['anal_count'] === 0) {
    // TODO-QSP: dynamic text: "I guess that explains the lack of penetration," <<$npc_usedname[$npcID]>> says ...
    scene.text(`"I guess that explains the lack of penetration," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} says dryly.`);
  } else {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      // TODO-QSP: dynamic text: "I love religious girls like you," <<$npc_usedname[$npcID]>> grins. "You're alwa...
      scene.text(`"I love religious girls like you," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} grins. "You're always the kinkiest."`);
    } else {
      // TODO-QSP: dynamic text: "You don't really strike me as the religious type," <<$npc_usedname[$npcID]>> co...
      scene.text(`"You don't really strike me as the religious type," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} comments, looking amused.`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoChurch2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_leave', 'go_church_reply');
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([
      { label: 'Only sex is a sin', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    qspCall(s, 'sex_ev_leave', 'go_church_reply');
    if (((s as any).sex_ev ?? 0)?.['anal_count'] > 0) {
      // TODO-QSP: dynamic text: "It's only a sin if you do it in the pussy," you explain, <<$sex_ev['dress_descr...
      scene.text(`"It's only a sin if you do it in the pussy," you explain, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Butt stuff doesn't count."`);
    } else {
      // TODO-QSP: dynamic text: "It's only a sin if you do it in the pussy," you explain, <<$sex_ev['dress_descr...
      scene.text(`"It's only a sin if you do it in the pussy," you explain, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Oral doesn't count."`);
    }
    scene.text('"If you say so," he says, looking unconvinced.');
  }, goto: ['sex_ev_leave', 'dressing2'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep up appearances', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    qspCall(s, 'sex_ev_leave', 'go_church_reply');
    // TODO-QSP: dynamic text: "I need to keep up appearances or everybody will know I'm a slut," you smirk jok...
    scene.text(`"I need to keep up appearances or everybody will know I'm a slut," you smirk jokingly, ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
  }, goto: ['sex_ev_leave', 'dressing2'] },
    { label: 'Keeps my mother off my back', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    qspCall(s, 'sex_ev_leave', 'go_church_reply');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['anal_count'] === 0) {
      // TODO-QSP: dynamic text: "It's not that," you add, <<$sex_ev['dress_describe']>>. "It's my mother. This i...
      scene.text(`"It's not that," you add, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "It's my mother. This is just one more thing I have to do to keep her off my back."`);
    } else {
      // TODO-QSP: dynamic text: "I'm <i>not</i> religious," you huff, <<$sex_ev['dress_describe']>>. "I just do ...
      scene.text(`"I'm <i>not</i> religious," you huff, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "I just do this to keep my mother off my back."`);
    }
  }, goto: ['sex_ev_leave', 'dressing2'] },
    { label: 'Cleanse the sin', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    qspCall(s, 'sex_ev_leave', 'go_church_reply');
    // TODO-QSP: dynamic text: "Well, after I sin, I need to repent, don't I?" you say, <<$sex_ev['dress_descri...
    scene.text(`"Well, after I sin, I need to repent, don't I?" you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
  }, goto: ['sex_ev_leave', 'dressing2'] },
  ]);
  scene.build();
}

function enterPantyGift(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).sex_ev ?? 0)?.['mad'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    scene.actions([
      { label: 'Give him your panties', handler: (st: GameState) => {
    ((s as any).npc_panty_give ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_panty_give ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    qspCall(s, 'panties', 'dispose');
    scene.img('images/shared/romance/misc/panty_gift.mp4');
    scene.text('Just after you put on your panties, a sexy thought pops into your head.');
    scene.text('"But before I go," you say mischievously. "I have a gift for you."');
    if (((s as any).npc_panty_give ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "A gift?" <<$npcdesc>> asks curiously.
      scene.text(`"A gift?" ${((s as any).npcdesc ?? 0)} asks curiously.`);
      // TODO-QSP: dynamic text: In one smooth motion, you slide your panties down your legs and daintily toss th...
      scene.text(`In one smooth motion, you slide your panties down your legs and daintily toss them onto the rumpled sheets of the bed on which you fucked ${((s as any).npcdesc ?? 0)}.`);
      qspCall(s, 'sex_ev_leave', 'panty_gift2');
    } else {
      // TODO-QSP: dynamic text: "Another pair of your panties?" <<$npcdesc>> grins.
      scene.text(`"Another pair of your panties?" ${((s as any).npcdesc ?? 0)} grins.`);
      scene.text('"You guessed correctly," you grin back. "And your prize is-!"');
      scene.text('In one smooth motion, you slide your panties down your legs and daintily toss them into the rumpled sheets of the bed you were just fucked in.');
      qspCall(s, 'sex_ev_leave', 'panty_gift2');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPantyGift2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
    scene.actions([
      { label: 'To remember my virginity', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "To remember my virginity," you smile, <<$sex_ev['dress_describe']>>. "And that ...
    scene.text(`"To remember my virginity," you smile, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "And that you made me a woman."`);
    if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 6) {
      if (((s as any).pc_know_npc_has_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        ((s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(s, 'sex_ev_hookup_leave', 'panty_gift_girlfriend');
      } else {
        qspCall(s, 'sex_ev_leave', 'panty_gift_girlfriend');
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> doesn't reply, but his expression says that he isn't displeased.
      scene.text(`${((s as any).npcdesc ?? 0)} doesn't reply, but his expression says that he isn't displeased.`);
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(s, 'sex_ev_hookup_leave', 'leave_menu');
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
      }
    }
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['orgasm_count'] > 0) {
    scene.actions([
      { label: 'For making me orgasm', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "For making me come," you smile, <<$sex_ev['dress_describe']>>. "That deserves a...
    scene.text(`"For making me come," you smile, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "That deserves an award."`);
    if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).pc_know_npc_has_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        ((s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(s, 'sex_ev_hookup_leave', 'panty_gift_girlfriend');
      } else {
        qspCall(s, 'sex_ev_leave', 'panty_gift_girlfriend');
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> doesn't say anything in response, but given the lustful glint in hi...
      scene.text(`${((s as any).npcdesc ?? 0)} doesn't say anything in response, but given the lustful glint in his eyes, he seems pretty pleased.`);
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(s, 'sex_ev_hookup_leave', 'leave_menu');
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
      }
    }
  } },
      { label: 'For making me orgasm (tradition)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    if (((s as any).npc_panty_give ?? 0)?.[String((s as any).npcID ?? 0)] <= 1) {
      // TODO-QSP: dynamic text: "For making me come," you smile, <<$sex_ev['dress_describe']>>. "I always give a...
      scene.text(`"For making me come," you smile, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "I always give a boy my panties if he makes me come."`);
    } else {
      // TODO-QSP: dynamic text: "Cause you made me come," you smile, <<$sex_ev['dress_describe']>>. "You know I ...
      scene.text(`"Cause you made me come," you smile, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "You know I always give a boy my panties if he makes me come."`);
    }
    if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).pc_know_npc_has_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        ((s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(s, 'sex_ev_hookup_leave', 'panty_gift_girlfriend');
      } else {
        qspCall(s, 'sex_ev_leave', 'panty_gift_girlfriend');
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> doesn't say anything in response, but given the lustful glint in hi...
      scene.text(`${((s as any).npcdesc ?? 0)} doesn't say anything in response, but given the lustful glint in his eyes, he seems pretty pleased.`);
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(s, 'sex_ev_hookup_leave', 'leave_menu');
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'You did a good job', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You did a good job," you smile, <<$sex_ev['dress_describe']>>. "Consider that y...
    scene.text(`"You did a good job," you smile, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Consider that your reward."`);
    if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 6) {
      if (((s as any).pc_know_npc_has_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        ((s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(s, 'sex_ev_leave', 'panty_gift_girlfriend');
      } else {
        qspCall(s, 'sex_ev_leave', 'panty_gift_girlfriend');
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> doesn't reply, but his expression says that he isn't displeased.
      scene.text(`${((s as any).npcdesc ?? 0)} doesn't reply, but his expression says that he isn't displeased.`);
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(s, 'sex_ev_hookup_leave', 'leave_menu');
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
      }
    }
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    { label: 'Something to remember the occasion', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    if (((s as any).daystage ?? 0) > 3) {
      // TODO-QSP: dynamic text: "Something to remember the night," you smile, <<$sex_ev['dress_describe']>>. "Ke...
      scene.text(`"Something to remember the night," you smile, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Keep the good times in mind."`);
    } else {
      // TODO-QSP: dynamic text: "Something to remember the day," you smile, <<$sex_ev['dress_describe']>>. "Keep...
      scene.text(`"Something to remember the day," you smile, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Keep the good times in mind."`);
    }
    if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 6) {
      if (((s as any).pc_know_npc_has_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        ((s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(s, 'sex_ev_hookup_leave', 'panty_gift_girlfriend');
      } else {
        qspCall(s, 'sex_ev_leave', 'panty_gift_girlfriend');
      }
    } else {
      // TODO-QSP: dynamic text: "Maybe I should frame it," <<$npcdesc>> snickers.
      scene.text(`"Maybe I should frame it," ${((s as any).npcdesc ?? 0)} snickers.`);
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(s, 'sex_ev_hookup_leave', 'leave_menu');
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
      }
    }
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    { label: 'Consider it a trophy', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "A trophy," you smile, <<$sex_ev['dress_describe']>>. "Consider it proof of conq...
    scene.text(`"A trophy," you smile, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Consider it proof of conquest."`);
    if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 6) {
      if (((s as any).pc_know_npc_has_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        ((s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(s, 'sex_ev_hookup_leave', 'panty_gift_girlfriend');
      } else {
        qspCall(s, 'sex_ev_leave', 'panty_gift_girlfriend');
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> doesn't reply, but his expression says that he isn't displeased.
      scene.text(`${((s as any).npcdesc ?? 0)} doesn't reply, but his expression says that he isn't displeased.`);
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        qspCall(s, 'sex_ev_hookup_leave', 'leave_menu');
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
      }
    }
    if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
  ]);
  scene.build();
}

function enterPantyGiftGirlfriend(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Hide them', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Just hide them," you say, <<$sex_ev['dress_describe']>>. "If you can hide a fuc...
    scene.text(`"Just hide them," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "If you can hide a fucking a girl in your bed, surely you can hide a pair of panties."`);
  }, goto: ['sex_ev_leave', 'dressing2'] },
    { label: 'Say they\'re hers', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Tell her they're hers," you shrug with a wry smirk, <<$sex_ev['dress_describe']...
    scene.text(`"Tell her they're hers," you shrug with a wry smirk, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Maybe she'll think she bought them."`);
  }, goto: ['sex_ev_leave', 'dressing2'] },
    { label: 'Say they\'re yours', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
    // TODO-QSP: dynamic text: "Tell her they're yours," you shrug with a wry smirk, <<$sex_ev['dress_describe'...
    scene.text(`"Tell her they're yours," you shrug with a wry smirk, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "A guy can't wear a cute pair of panties now and then?"`);
    if (((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
      // TODO-QSP: dynamic text: <<$npcdesc>>'s face immediately reddens and he looks at you with an angry glare.
      scene.text(`${((s as any).npcdesc ?? 0)}'s face immediately reddens and he looks at you with an angry glare.`);
      scene.text('"What the fuck? I\'m not some twink who puts on girlie panties like a fucking faggot!"');
      scene.actions([
        { label: 'I was kidding (amused)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I was just kidding," you snicker, rolling your eyes. "Bad joke, sorry."');
    // TODO-QSP: dynamic text: You move to <<$sex_ev['dress_describe']>> but <<$npcdesc>> continues to glare at...
    scene.text(`You move to ${((s as any).sex_ev ?? 0)?.['dress_describe']} but ${((s as any).npcdesc ?? 0)} continues to glare at you out of the corner of your eye for a few moments longer before looking away.`);
  }, goto: ['sex_ev_leave', 'dressing2'] },
        { label: 'I was kidding (acerbic)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "Christ, I was just kidding," you say, giving <<$npcdesc>> a look of exasperatio...
    scene.text(`"Christ, I was just kidding," you say, giving ${((s as any).npcdesc ?? 0)} a look of exasperation. "Of course I wasn't seriously suggesting that. Take a joke, dumbass."`);
    // TODO-QSP: dynamic text: You start <<$sex_ev['dress_describe']>> but <<$npcdesc>> continues to glare at y...
    scene.text(`You start ${((s as any).sex_ev ?? 0)?.['dress_describe']} but ${((s as any).npcdesc ?? 0)} continues to glare at you out of the corner of your eye for a few moments longer before looking away.`);
  }, goto: ['sex_ev_leave', 'dressing2'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> laughs aloud.
      scene.text(`${((s as any).npcdesc ?? 0)} laughs aloud.`);
      scene.text('"Yeah, I bet that\'d get me off the hook."');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'dressing2'] }]);
    }
  } },
    { label: 'Give them to her', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Gift them to her," you say mischievously, <<$sex_ev['dress_describe']>>. "Maybe...
    scene.text(`"Gift them to her," you say mischievously, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "Maybe she'll put them on."`);
  }, goto: ['sex_ev_leave', 'dressing2'] },
    { label: 'Throw them away', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Throw them away then," you shrug, <<$sex_ev['dress_describe']>>. "I don't care....
    scene.text(`"Throw them away then," you shrug, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "I don't care. Do whatever you want with them.`);
    qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
    // TODO-QSP: dynamic text: "After all, they're your panties now," you add with a smirk, <<$sex_ev['dress_de...
    scene.text(`"After all, they're your panties now," you add with a smirk, ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
  }, goto: ['sex_ev_leave', 'dressing2'] },
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
  // TODO-QSP: end
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
  title: '"I\'m breaking up with you."',
  region: 'other',
  enter: enter,
};
