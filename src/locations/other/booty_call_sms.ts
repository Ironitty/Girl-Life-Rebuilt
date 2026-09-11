import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).npc_last_booty_call ?? 0)[((s as any).locArgs?.[1] ?? 0)] === ((s as any).daystart ?? 0)) {
    // TODO-QSP: exit
  }
  if (((s as any).npc_std_test ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    qspCall(s, 'booty_call_sms', 'Add_std_free_SMS', ((s as any).locArgs?.[1] ?? 0));
  } else {
    if (((s as any).npc_booty_call ?? 0)[((s as any).locArgs?.[1] ?? 0)] === ((s as any).daystart ?? 0)) {
      qspCall(s, 'booty_call_sms', 'Add_pre-planned_SMS', ((s as any).locArgs?.[1] ?? 0));
    } else {
      if (((s as any).sugar_daddy_call ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
        qspCall(s, 'booty_call_sms', 'Add_new_booty_call_SMS', ((s as any).locArgs?.[1] ?? 0));
      } else {
        if (((s as any).not_free ?? 0)) {
          qspCall(s, 'booty_call_sms', 'Add_delayed_booty_call_SMS', ((s as any).locArgs?.[1] ?? 0));
        } else {
          qspCall(s, 'booty_call_sms', 'Add_new_booty_call_SMS', ((s as any).locArgs?.[1] ?? 0));
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStdFree_Tree(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree ?? {})['0'] = 'hey ' + qspUntranslated(s, "pcs_nickname>", { location: "booty_call_sms" }) + '';
  ((s as any).SMSTree ?? {})['1'] = 'hey ' + qspUntranslated(s, "npc_nickname[ARGS[1]]>", { location: "booty_call_sms" }) + '';
  ((s as any).SMSTree ?? {})['2'] = 'got some good news';
  ((s as any).SMSTree ?? {})['a3'] = 'oh?';
  ((s as any).SMSTree ?? {})['a4'] = 'my std test came back clean. why dont we celebrate tog';
  if (((s as any).hour ?? 0) < 21) {
    ((s as any).SMSTree ?? {})['aa5'] = 'sorry, I cant. I have stuff to do';
  } else {
    ((s as any).SMSTree ?? {})['aa5'] = 'its late. text me sooner if you want me to come over.';
  }
  ((s as any).SMSTree ?? {})['aa6'] = 'shit, maybe next time then';
  ((s as any).SMSTree ?? {})['ab5'] = 'ill come right now ;)';
  if (((s as any).npc_humor ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'perverted'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree ?? {})['ab6'] = 'in the street?? damn! keep it in your pants till you get here!';
    } else {
      ((s as any).SMSTree ?? {})['ab6'] = 'as long as you make me cum later';
    }
  } else {
    if (((s as any).npc_humor ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'intellectual'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree ?? {})['ab6'] = 'phrasing';
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        ((s as any).SMSTree ?? {})['ab6'] = 'im already hard';
      } else {
        ((s as any).SMSTree ?? {})['ab6'] = 'cant wait';
      }
    }
  }
  ((s as any).SMSTree ?? {})['b3'] = 'what is it?';
  ((s as any).SMSTree ?? {})['b4'] = 'my std test came back clean';
  ((s as any).SMSTree ?? {})['ba5'] = ((s as any).SMSTree ?? 0)?.['aa5'];
  ((s as any).SMSTree ?? {})['ba6'] = ((s as any).SMSTree ?? 0)?.['aa6'];
  ((s as any).SMSTree ?? {})['bb5'] = ((s as any).SMSTree ?? 0)?.['ab5'];
  ((s as any).SMSTree ?? {})['bb6'] = ((s as any).SMSTree ?? 0)?.['ab6'];
  // TODO-QSP: end
  scene.build();
}

function enterAddStdFree_SMS(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'std_free_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['1'], 'booty_call_sms', 'SMS_Base', $ARGS[1]
  qspCall(s, 'SMStext_builder', 'add_sms', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterSMS_Base(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'std_free_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['1']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['2']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a3'], 'booty_call_sms', 'bc_choice1', $ARGS[1], 'a'
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['b3'], 'booty_call_sms', 'bc_choice1', $ARGS[1], 'b'
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterBcChoice1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'std_free_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree[$ARGS[2] + '3']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree[$ARGS[2] + '4']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree[$ARGS[2] + 'a5'], 'booty_call_sms', 'bc_choice2', $ARGS[...
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree[$ARGS[2] + 'b5'], 'booty_call_sms', 'bc_choice2', $ARGS[...
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  qspCall(s, 'SMStext_builder', 'end');
  scene.build();
}

function enterBcChoice2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'std_free_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree[$ARGS[2] + '5']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[4]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree[$ARGS[2] + '6']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[4]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: gs 'booty_call_sms', $ARGS[3], $ARGS[1], ARGS[4]
  // TODO-QSP: end
  scene.build();
}

function enterPrePlannedBootyCall_Tree(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree ?? {})['0'] = 'hey ' + qspUntranslated(s, "pcs_nickname>", { location: "booty_call_sms" }) + ', you coming over?';
  ((s as any).SMSTree ?? {})['a1'] = 'sorry, something came up';
  ((s as any).SMSTree ?? {})['b1'] = 'on my way now';
  (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    ((s as any).SMSTree ?? {})['b2'] = 'come over to my place lets fuck like bunnies';
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      ((s as any).SMSTree ?? {})['b2'] = 'come over to my place I want to hear you screaming my name';
    } else {
      ((s as any).SMSTree ?? {})['b2'] = 'come over to my place lets have some fun today';
    }
  }
  ((s as any).SMSTree ?? {})['ba3'] = 'sorry, I cant. I have stuff to do';
  ((s as any).SMSTree ?? {})['ba4'] = 'shit, maybe next time then';
  ((s as any).SMSTree ?? {})['bb3'] = 'ill come right now ;)';
  if (((s as any).npc_humor ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'perverted') {
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      ((s as any).SMSTree ?? {})['bb4'] = 'in the street?? damn! keep it in your pants till you get here!';
    } else {
      ((s as any).SMSTree ?? {})['bb4'] = 'as long as you make me cum later';
    }
  } else {
    if (((s as any).npc_humor ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'intellectual') {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        ((s as any).SMSTree ?? {})['bb4'] = 'phrasing';
      } else {
        ((s as any).SMSTree ?? {})['bb4'] = 'as long as you make me cum later';
      }
    } else {
      ((s as any).SMSTree ?? {})['bb4'] = 'im already hard';
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAddPrePlanned_SMS(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'pre_planned_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a1'], 'booty_call_sms', 'Choice2_a', $ARGS[1]
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['b1'], 'booty_call_sms', 'Choice2_b', $ARGS[1]
  qspCall(s, 'SMStext_builder', 'add_sms', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterChoice2A(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'pre_planned_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['a1']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterChoice2B(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'pre_planned_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['b1']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['b2']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['ba3'], 'booty_call_sms', 'Choice2_b2', $ARGS[1], 'ba', ...
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['bb3'], 'booty_call_sms', 'Choice2_b2', $ARGS[1], 'bb', ...
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'end');
  scene.build();
}

function enterChoice2B2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'pre_planned_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree[$ARGS[2] + '3']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[4]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree[$ARGS[2] + '4']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[4]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: gs 'booty_call_sms', $ARGS[3], $ARGS[1], ARGS[4]
  // TODO-QSP: end
  scene.build();
}

function enterNewBootyCall_Tree(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'new_booty_call_Tree1', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'booty_call_sms', 'new_booty_call_Tree2', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'booty_call_sms', 'new_booty_call_Tree3', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterNewBootyCall_Tree1(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree ?? {})['0'] = 'hey ' + qspUntranslated(s, "pcs_nickname>", { location: "booty_call_sms" }) + '';
  ((s as any).SMSTree ?? {})['1'] = 'hey ' + qspUntranslated(s, "npc_nickname[ARGS[1]]>", { location: "booty_call_sms" }) + '';
  ((s as any).SMSTree ?? {})['a2'] = 'what\'s up?';
  ((s as any).SMSTree ?? {})['b2'] = 'hey sexy';
  ((s as any).SMSTree ?? {})['c2'] = 'its late. but ive always got time for you :)';
  ((s as any).SMSTree ?? {})['d2'] = 'its late. what do you want?';
  ((s as any).SMSTree ?? {})['e2'] = 'its late. text me earlier next time.';
  ((s as any).SMSTree ?? {})['f2'] = 'sorry';
  ((s as any).SMSTree ?? {})['fa3'] = 'didn\'t see your message until now';
  ((s as any).SMSTree ?? {})['fa4'] = 'whatsup?';
  ((s as any).SMSTree ?? {})['fb3'] = 'I was doing something';
  ((s as any).SMSTree ?? {})['fb4'] = ((s as any).SMSTree ?? 0)?.['fa3'];
  ((s as any).SMSTree ?? {})['fc3'] = 'I was at the gym';
  ((s as any).SMSTree ?? {})['fc4'] = ((s as any).SMSTree ?? 0)?.['fa3'];
  ((s as any).SMSTree ?? {})['fd3'] = 'I was in class';
  ((s as any).SMSTree ?? {})['fd4'] = ((s as any).SMSTree ?? 0)?.['fa3'];
  // TODO-QSP: end
  scene.build();
}

function enterNewBootyCall_Tree2(s: GameState, scene: SceneBuilder): void {
  if (0) {
  } else {
    if (((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'sugar_daddy') {
      ((s as any).SMSTree ?? {})['10'] = 'I want to see you';
      ((s as any).SMSTree ?? {})['11'] = 'ive booked a hotel room';
    } else {
      if (((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'casual_date'  ||  ((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'fuckbuddy') {
        ((s as any).SMSTree ?? {})['10'] = 'ive been thinking about you';
        ((s as any).SMSTree ?? {})['a11'] = 'what were you thinking about?';
        if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2  &&  qspFunc(s, 'homes_properties_attr', 'get_property_attribute', '$town', ((s as any).home ?? 0)?.['current']) !== 'city'  &&  ((((s as any).npc_residence ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]).slice((1)-1, ((1)-1)+(4))) === 'city') {
          ((s as any).SMSTree ?? {})['a12'] = 'I booked a hotel room in Pav. why dont you come by?';
        } else {
          if (((s as any).npc_fav_pos ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'blowjob'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
            ((s as any).SMSTree ?? {})['a12'] = 'your mouth around my cock';
          } else {
            if (((s as any).npc_know_virgin ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 1) {
              if (((s as any).npc_cum_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'creampie'  &&  (((s as any).npc_condom_conscious ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0  ||  ((s as any).npc_bareback ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'never_use')  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                ((s as any).SMSTree ?? {})['a12'] = 'your pussy filled with my cum';
              } else {
                if (((s as any).npc_sex_speed ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 3  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                  ((s as any).SMSTree ?? {})['a12'] = 'fucking you bowlegged';
                } else {
                  if (((s as any).npc_cum_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'facial'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                    ((s as any).SMSTree ?? {})['a12'] = 'your pretty face covered in my cum';
                  } else {
                    if (((s as any).npc_cum_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'mouth'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                      ((s as any).SMSTree ?? {})['a12'] = 'watching you swallow my cum';
                    } else {
                      if (((s as any).npc_cum_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'tits'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                        ((s as any).SMSTree ?? {})['a12'] = 'my cum all over your tits';
                      } else {
                        if (((s as any).npc_fav_pos ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'doggy'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                          ((s as any).SMSTree ?? {})['a12'] = 'pounding you on all fours';
                        } else {
                          if (((s as any).npc_fav_pos ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'cowgirl'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                            ((s as any).SMSTree ?? {})['a12'] = 'you riding my cock like crazy';
                          } else {
                            if ((!(Math.floor(Math.random() * 2) + 0))) {
                              ((s as any).SMSTree ?? {})['a12'] = 'you naked on my bed';
                            } else {
                              ((s as any).SMSTree ?? {})['a12'] = 'want to come over and have some fun?';
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              ((s as any).SMSTree ?? {})['a12'] = 'PLACEHOLDER 1';
            }
          }
        }
        ((s as any).SMSTree ?? {})['b11'] = 'me too';
        if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2  &&  qspFunc(s, 'homes_properties_attr', 'get_property_attribute', '$town', ((s as any).home ?? 0)?.['current']) !== 'city'  &&  ((((s as any).npc_residence ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]).slice((1)-1, ((1)-1)+(4))) === 'city') {
          ((s as any).SMSTree ?? {})['b12'] = 'I booked a hotel room in Pav. why dont you come by?';
        } else {
          if (((s as any).npc_fav_pos ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'blowjob'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
            ((s as any).SMSTree ?? {})['b12'] = 'I want to feel your mouth around my cock';
          } else {
            if (((s as any).npc_know_virgin ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 1) {
              if (((s as any).npc_cum_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'creampie'  &&  (((s as any).npc_condom_conscious ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0  ||  ((s as any).npc_bareback ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'never_use')  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                ((s as any).SMSTree ?? {})['b12'] = 'I want to pump you full of cum';
              } else {
                if (((s as any).npc_sex_speed ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 3  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                  ((s as any).SMSTree ?? {})['b12'] = 'come over I want to hear you screaming my name';
                } else {
                  if (((s as any).npc_cum_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'facial'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                    ((s as any).SMSTree ?? {})['b12'] = 'I want to cum all over your face';
                  } else {
                    if (((s as any).npc_cum_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'mouth'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                      ((s as any).SMSTree ?? {})['b12'] = 'I want to watch you swallow my cum';
                    } else {
                      if (((s as any).npc_cum_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'tits'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                        ((s as any).SMSTree ?? {})['b12'] = 'let me glaze your tits with my cum';
                      } else {
                        if (((s as any).npc_fav_pos ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'doggy'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                          ((s as any).SMSTree ?? {})['b12'] = 'I want to pound you on all fours';
                        } else {
                          if (((s as any).npc_fav_pos ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'cowgirl'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                            ((s as any).SMSTree ?? {})['b12'] = 'I want you to ride my cock like there\'s no tomorrow';
                          } else {
                            if ((!(Math.floor(Math.random() * 2) + 0))) {
                              ((s as any).SMSTree ?? {})['b12'] = 'lets fuck like bunnies today';
                            } else {
                              ((s as any).SMSTree ?? {})['b12'] = 'come over lets have some fun today';
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              ((s as any).SMSTree ?? {})['b12'] = 'PLACEHOLDER 2';
            }
          }
        }
      } else {
        if ((('boyfriend;girlfriend;husband;wife').indexOf((((s as any).npc_rel_type ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]))) + 1 > 0) {
          if (0) {
            if (((s as any).npc_dirty_lover ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
              ((s as any).SMSTree ?? {})['10'] = 'come home';
              ((s as any).SMSTree ?? {})['11'] = 'I want to fuck you senseless';
            } else {
              if (((s as any).npc_sensual_lover ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
                ((s as any).SMSTree ?? {})['10'] = 'are you coming home soon';
                ((s as any).SMSTree ?? {})['11'] = 'lets make love';
              } else {
                ((s as any).SMSTree ?? {})['10'] = 'are you coming home soon';
                ((s as any).SMSTree ?? {})['11'] = 'lets get naughty';
              }
            }
          } else {
            if (((s as any).npc_dirty_lover ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
              ((s as any).SMSTree ?? {})['10'] = 'come over';
              ((s as any).SMSTree ?? {})['11'] = 'I want to fuck you senseless';
            } else {
              if (((s as any).npc_sensual_lover ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
                ((s as any).SMSTree ?? {})['10'] = 'I want to see you';
                ((s as any).SMSTree ?? {})['11'] = 'lets make love';
              } else {
                ((s as any).SMSTree ?? {})['10'] = 'you should come over';
                ((s as any).SMSTree ?? {})['11'] = 'lets get naughty';
              }
            }
          }
        } else {
          if (((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'boyfriend') {
            ((s as any).SMSTree ?? {})['10'] = '$npc_rel_type = boyfriend!!';
            ((s as any).SMSTree ?? {})['11'] = 'PLACEHOLDER3';
          } else {
            if (((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'girlfriend') {
              ((s as any).SMSTree ?? {})['10'] = '$npc_rel_type = \'girlfriend\'!!';
              ((s as any).SMSTree ?? {})['11'] = 'PLACEHOLDER4';
            } else {
              ((s as any).SMSTree ?? {})['10'] = '$npc_rel_type = \'' + qspUntranslated(s, "npc_rel_type[ARGS[1]]>", { location: "booty_call_sms" }) + '\'!!';
              ((s as any).SMSTree ?? {})['11'] = 'PLACEHOLDER5';
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNewBootyCall_Tree3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 21) {
    ((s as any).SMSTree ?? {})['a20'] = 'sorry, I cant. I have stuff to do';
  } else {
    ((s as any).SMSTree ?? {})['a20'] = 'its late. text me sooner if you want me to come over.';
  }
  ((s as any).SMSTree ?? {})['a21'] = 'shit, maybe next time then';
  ((s as any).SMSTree ?? {})['b20'] = 'ill come right now ;)';
  if (((s as any).npc_humor ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'perverted'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree ?? {})['b21'] = 'in the street?? damn! keep it in your pants till you get here!';
    } else {
      ((s as any).SMSTree ?? {})['b21'] = 'as long as you make me cum later';
    }
  } else {
    if (((s as any).npc_humor ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'intellectual'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree ?? {})['b21'] = 'phrasing';
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        ((s as any).SMSTree ?? {})['b21'] = 'im already hard';
      } else {
        ((s as any).SMSTree ?? {})['b21'] = 'cant wait';
      }
    }
  }
  ((s as any).SMSTree ?? {})['c20'] = 'its kind of late';
  ((s as any).SMSTree ?? {})['c21'] = 'sorry';
  ((s as any).SMSTree ?? {})['c22'] = 'maybe another time?';
  // TODO-QSP: end
  scene.build();
}

function enterAddNewBootyCall_SMS(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'new_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['1'], 'booty_call_sms', 'new_routing1', $ARGS[1], '<<tot...
  qspCall(s, 'SMStext_builder', 'add_sms', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterNewRouting1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'new_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['1']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "booty_call_sms" }))) {
    qspCall(s, 'SMStext_builder', 'end');
    return;
  }
  if (((s as any).totminut ?? 0) >= parseFloat(((s as any).locArgs?.[2] ?? 0)) + 180) {
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['f2'], 'booty_call_sms', 'new_delayed', '1', $ARGS[1], $...
  } else {
    if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 4) {
      // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['c2'], 'booty_call_sms', 'new_routing2', $ARGS[1], $ARGS...
      // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['d2'], 'booty_call_sms', 'new_routing2', $ARGS[1], $ARGS...
      // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['e2'], 'booty_call_sms', 'new_end', $ARGS[1], 'e2', 'dec...
    } else {
      // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a2'], 'booty_call_sms', 'new_routing2', $ARGS[1], $ARGS...
      // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['b2'], 'booty_call_sms', 'new_routing2', $ARGS[1], $ARGS...
    }
  }
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterNewDelayed(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'new_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  if (((s as any).locArgs?.[1] ?? 0) === '1') {
    // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['f2']
    if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), qspUntranslated(s, "ARGS[4]", { location: "booty_call_sms" }))) {
      qspCall(s, 'SMStext_builder', 'end');
      return;
    }
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['fa3'], 'booty_call_sms', 'new_delayed', 'a', $ARGS[2], ...
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['fb3'], 'booty_call_sms', 'new_delayed', 'b', $ARGS[2], ...
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['fc3'], 'booty_call_sms', 'new_delayed', 'c', $ARGS[2], ...
    if ((((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  ||  ((s as any).university ?? 0)?.['student'] === 1)  &&  (!((s as any).kanikuli ?? 0))) {
      // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['fd3'], 'booty_call_sms', 'new_delayed', 'd', $ARGS[2], ...
    }
  } else {
    // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['f<<$ARGS[1]>>3']
    if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), qspUntranslated(s, "ARGS[4]", { location: "booty_call_sms" }))) {
      qspCall(s, 'SMStext_builder', 'end');
      return;
    }
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['f<<$ARGS[1]>>4'], 'booty_call_sms', 'new_routing2', $AR...
  }
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[4]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterNewRouting2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'new_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree[$ARGS[3]]
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[5]
  if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[5]", { location: "booty_call_sms" }))) {
    qspCall(s, 'SMStext_builder', 'end');
    return;
  }
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['10']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[5]
  if (((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'casual_date'  ||  ((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'fuckbuddy') {
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a11'], 'booty_call_sms', 'new_bootycall', $ARGS[1], $AR...
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['b11'], 'booty_call_sms', 'new_bootycall', $ARGS[1], $AR...
  } else {
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['11']
    if (1) {
      // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a20'], 'booty_call_sms', 'new_routing3', $ARGS[1], $ARG...
      // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['b20'], 'booty_call_sms', 'new_routing3', $ARGS[1], $ARG...
      if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) <= 4) {
        // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['c20'], 'booty_call_sms', 'late_apology', '1', $ARGS[1],...
      }
    }
  }
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[5]
  qspCall(s, 'SMStext_builder', 'end');
  if (0) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      // TODO-QSP: wait 250
      // TODO-QSP: gs 'booty_call_sms', 'sexting1', 'a', $ARGS[1], ARGS[5]
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNewBootycall(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'new_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree[$ARGS[3] + '11']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[4]
  if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[4]", { location: "booty_call_sms" }))) {
    qspCall(s, 'SMStext_builder', 'end');
    return;
  }
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree[$ARGS[3] + '12']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a20'], 'booty_call_sms', 'new_routing3', $ARGS[1], $ARG...
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['b20'], 'booty_call_sms', 'new_routing3', $ARGS[1], $ARG...
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[4]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterLateApology(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'new_booty_call_Tree', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree[$ARGS[4]]
  if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), qspUntranslated(s, "ARGS[5]", { location: "booty_call_sms" }))) {
    qspCall(s, 'SMStext_builder', 'end');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === '1') {
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['c22'], 'booty_call_sms', 'late_apology', '2', $ARGS[2],...
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === '2') {
      // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['c23'], 'booty_call_sms', 'new_routing3', $ARGS[2], $ARG...
    }
  }
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[5]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterNewRouting3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'new_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree[$ARGS[3] + '20']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[6]
  if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[6]", { location: "booty_call_sms" }))) {
    qspCall(s, 'SMStext_builder', 'end');
    return;
  }
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree[$ARGS[3] + '21']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[6]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: gs 'booty_call_sms', $ARGS[4], $ARGS[1], ARGS[6]
  // TODO-QSP: end
  scene.build();
}

function enterNewEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'new_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree[$ARGS[2]]
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[5]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: gs 'booty_call_sms', $ARGS[3], $ARGS[1], ARGS[5]
  // TODO-QSP: end
  scene.build();
}

function enterAcceptBootyCall(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: booty_call_invite[$ARGS[1]] = daystart
  // TODO-QSP: $booty_call_hotel[$ARGS[1]] = ''
  if (((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'sugar_daddy') {
    if (((s as any).temp_town ?? 0) === 'city') {
      // TODO-QSP: $booty_call_hotel[$ARGS[1]] = 'city'
    } else {
      // TODO-QSP: $booty_call_hotel[$ARGS[1]] = 'pav'
    }
  } else {
    if (((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'casual_date'  ||  ((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'fuckbuddy') {
      if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2  &&  ((s as any).temp_town ?? 0) !== 'city'  &&  ((((s as any).npc_residence ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]).slice((1)-1, ((1)-1)+(4))) === 'city') {
        // TODO-QSP: $booty_call_hotel[$ARGS[1]] = 'pav'
      }
    }
  }
  scene.build();
}

function enterDeclineBootyCalla(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'booty_call_sms', 'decline_booty_call_core', 'a', $ARGS[1], ARGS[2]
  scene.build();
}

function enterDeclineBootyCallb(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'booty_call_sms', 'decline_booty_call_core', 'a', $ARGS[1], ARGS[2]
  scene.build();
}

function enterDeclineBootyCallCore(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sugar_daddy_call ?? 0)[((s as any).locArgs?.[2] ?? 0)] === 1) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).locArgs?.[2] ?? 0), (-2));
    // TODO-QSP: sugar_daddy_call[$ARGS[2]] = 0
    qspCall(s, 'booty_call', 'set_sugar_daddy_schedule', ((s as any).locArgs?.[2] ?? 0));
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    // TODO-QSP: gs 'booty_call_sms', 'sexting1', $ARGS[1], $ARGS[2], ARGS[3]
  }
  // TODO-QSP: end
  scene.build();
}

function enterNewExpiredBootyCall(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree ?? {})['0'] = 'sorry, I cant anymore. maybe we can try another time';
  // TODO-QSP: end
  scene.build();
}

function enterCheckLate(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).totminut ?? 0) >= parseFloat(((s as any).locArgs?.[2] ?? 0)) + 480) {
    qspCall(s, 'SMStext_builder', 'start');
    // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
    qspCall(s, 'booty_call_sms', 'new_expired_booty_call', ((s as any).locArgs?.[1] ?? 0));
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
    // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
    qspCall(s, 'SMStext_builder', 'end');
    // TODO-QSP: gs 'booty_call_sms', 'decline_booty_callb', $ARGS[1], ARGS[3]
    (s as any).result = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterNewSexting_Tree(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree ?? {})['a0'] = 'send me a pic then?';
  ((s as any).SMSTree ?? {})['b0'] = 'but I wouldn\'t say no to a selfie';
  ((s as any).SMSTree ?? {})['a1'] = 'refuse';
  ((s as any).SMSTree ?? {})['a2'] = 'no';
  ((s as any).SMSTree ?? {})['b1'] = 'next time tiger';
  ((s as any).SMSTree ?? {})['c1'] = 'im not at home!';
  if (((s as any).npc_dirty_lover ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree ?? {})['c2'] = 'hot';
    } else {
      ((s as any).SMSTree ?? {})['c2'] = 'so?';
    }
  } else {
    ((s as any).SMSTree ?? {})['c2'] = 'ill use my imagination then';
  }
  ((s as any).SMSTree ?? {})['s1'] = 'Send a selfie from your gallery';
  // TODO-QSP: end
  scene.build();
}

function enterSexting1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'new_sexting_Tree', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree[$ARGS[1] + '0']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a1'], 'booty_call_sms', 'sexting_refuse', $ARGS[2], 're...
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['b1'], 'booty_call_sms', 'sexting_refuse', $ARGS[2], 'ne...
  if (((((s as any).location_type ?? 0)).indexOf(('outdoors'))) + 1 > 0  ||  ((((s as any).location_type ?? 0)).indexOf(('public'))) + 1 > 0) {
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['c1'], 'booty_call_sms', 'sexting_public', $ARGS[2]
  }
  // TODO-QSP: gs 'SMStext_builder', 'send_selfie', $SMSTree['s1'], 'n|b|sh|ft|fa|fp', 'booty_call_sms', 'sexting_s...
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterSextingPublic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'new_sexting_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['c1']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['c2']
  if (((s as any).npc_dirty_lover ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a1'], 'booty_call_sms', 'sexting_refuse', $ARGS[1], 're...
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['b1'], 'booty_call_sms', 'sexting_refuse', $ARGS[1], 'ne...
    // TODO-QSP: gs 'SMStext_builder', 'send_selfie', $SMSTree['s1'], 'n|b|sh|ft|fa|fp', 'booty_call_sms', 'sexting_s...
  }
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterSextingRefuse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'new_sexting_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  if (((s as any).locArgs?.[2] ?? 0) === 'refuse') {
    // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['a2']
    qspCall(s, 'npc_relationship', 'modify', ((s as any).locArgs?.[1] ?? 0), (-1));
  } else {
    // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['b1']
  }
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterSextingSend(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'new_sexting_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send_img', ((s as any).locArgs?.[3] ?? 0));
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'receive', 'damn!!');
  qspCall(s, 'npc_relationship', 'modify', ((s as any).locArgs?.[1] ?? 0), 3);
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'send', ':)');
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterDelayedBootyCall_Tree(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree ?? {})['0'] = 'hey';
  ((s as any).SMSTree ?? {})['1'] = 'hey';
  ((s as any).SMSTree ?? {})['2'] = 'you busy today?';
  ((s as any).SMSTree ?? {})['a3'] = 'no';
  ((s as any).SMSTree ?? {})['b3'] = 'depends';
  ((s as any).SMSTree ?? {})['c3'] = 'maybe';
  ((s as any).SMSTree ?? {})['d3'] = 'yes';
  ((s as any).SMSTree ?? {})['4'] = 'why?';
  ((s as any).SMSTree ?? {})['5'] = 'want to spend some time';
  ((s as any).SMSTree ?? {})['a6'] = 'you could come over to my place';
  ((s as any).SMSTree ?? {})['b6'] = 'i could get a hotel room';
  ((s as any).SMSTree ?? {})['a7'] = 'sorry, not today';
  ((s as any).SMSTree ?? {})['b7'] = 'when?';
  ((s as any).SMSTree ?? {})['b8'] = 'how about \' + func(\'time\', \'get_time_string\', npc_start_free_time[$ARGS[1]], 0) + \'?';
  ((s as any).SMSTree ?? {})['ba9'] = 'sorry, busy';
  ((s as any).SMSTree ?? {})['bb9'] = 'that sounds fun';
  ((s as any).SMSTree ?? {})['bb10'] = 'okay, see you then';
  // TODO-QSP: end
  scene.build();
}

function enterAddDelayedBootyCall_SMS(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'delayed_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['1'], 'booty_call_sms', 'delayed1', $ARGS[1]
  qspCall(s, 'SMStext_builder', 'add_sms', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterDelayed1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'delayed_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['1']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['2']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a3'], 'booty_call_sms', 'delayed2', $ARGS[1], 'a'
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['b3'], 'booty_call_sms', 'delayed2', $ARGS[1], 'b'
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['c3'], 'booty_call_sms', 'delayed2', $ARGS[1], 'c'
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['d3'], 'booty_call_sms', 'delayed_decline', $ARGS[1], $S...
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterDelayed2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'delayed_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree[$ARGS[2] + '3']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['4']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['5']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  if (! ((s as any).hotel ?? 0)) {
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['a6']
  } else {
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['b6']
  }
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a7'], 'booty_call_sms', 'delayed_decline', $ARGS[1], $S...
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['b7'], 'booty_call_sms', 'delayed3', $ARGS[1]
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterDelayedDecline(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'delayed_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', ((s as any).locArgs?.[2] ?? 0));
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: gs 'booty_call_sms', 'decline_booty_call', $ARGS[1], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterDelayed3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'delayed_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['b7']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['b8']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['ba9'], 'booty_call_sms', 'delayed_decline', $ARGS[1], $...
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['bb9'], 'booty_call_sms', 'delayed4', $ARGS[1]
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterDelayed4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call_sms', 'delayed_booty_call_Tree', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['ba9']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['ba10']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: gs 'booty_call_sms', 'accept_booty_call', $ARGS[1], ARGS[2]
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'std_free_Tree':
      enterStdFree_Tree(s, scene);
      break;
    case 'Add_std_free_SMS':
      enterAddStdFree_SMS(s, scene);
      break;
    case 'SMS_Base':
      enterSMS_Base(s, scene);
      break;
    case 'bc_choice1':
      enterBcChoice1(s, scene);
      break;
    case 'bc_choice2':
      enterBcChoice2(s, scene);
      break;
    case 'pre_planned_booty_call_Tree':
      enterPrePlannedBootyCall_Tree(s, scene);
      break;
    case 'Add_pre-planned_SMS':
      enterAddPrePlanned_SMS(s, scene);
      break;
    case 'Choice2_a':
      enterChoice2A(s, scene);
      break;
    case 'Choice2_b':
      enterChoice2B(s, scene);
      break;
    case 'Choice2_b2':
      enterChoice2B2(s, scene);
      break;
    case 'new_booty_call_Tree':
      enterNewBootyCall_Tree(s, scene);
      break;
    case 'new_booty_call_Tree1':
      enterNewBootyCall_Tree1(s, scene);
      break;
    case 'new_booty_call_Tree2':
      enterNewBootyCall_Tree2(s, scene);
      break;
    case 'new_booty_call_Tree3':
      enterNewBootyCall_Tree3(s, scene);
      break;
    case 'Add_new_booty_call_SMS':
      enterAddNewBootyCall_SMS(s, scene);
      break;
    case 'new_routing1':
      enterNewRouting1(s, scene);
      break;
    case 'new_delayed':
      enterNewDelayed(s, scene);
      break;
    case 'new_routing2':
      enterNewRouting2(s, scene);
      break;
    case 'new_bootycall':
      enterNewBootycall(s, scene);
      break;
    case 'late_apology':
      enterLateApology(s, scene);
      break;
    case 'new_routing3':
      enterNewRouting3(s, scene);
      break;
    case 'new_end':
      enterNewEnd(s, scene);
      break;
    case 'accept_booty_call':
      enterAcceptBootyCall(s, scene);
      break;
    case 'decline_booty_calla':
      enterDeclineBootyCalla(s, scene);
      break;
    case 'decline_booty_callb':
      enterDeclineBootyCallb(s, scene);
      break;
    case 'decline_booty_call_core':
      enterDeclineBootyCallCore(s, scene);
      break;
    case 'new_expired_booty_call':
      enterNewExpiredBootyCall(s, scene);
      break;
    case 'check_late':
      enterCheckLate(s, scene);
      break;
    case 'new_sexting_Tree':
      enterNewSexting_Tree(s, scene);
      break;
    case 'sexting1':
      enterSexting1(s, scene);
      break;
    case 'sexting_public':
      enterSextingPublic(s, scene);
      break;
    case 'sexting_refuse':
      enterSextingRefuse(s, scene);
      break;
    case 'sexting_send':
      enterSextingSend(s, scene);
      break;
    case 'delayed_booty_call_Tree':
      enterDelayedBootyCall_Tree(s, scene);
      break;
    case 'Add_delayed_booty_call_SMS':
      enterAddDelayedBootyCall_SMS(s, scene);
      break;
    case 'delayed1':
      enterDelayed1(s, scene);
      break;
    case 'delayed2':
      enterDelayed2(s, scene);
      break;
    case 'delayed_decline':
      enterDelayedDecline(s, scene);
      break;
    case 'delayed3':
      enterDelayed3(s, scene);
      break;
    case 'delayed4':
      enterDelayed4(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const booty_call_sms: LocationDef = {
  name: 'booty_call_sms',
  region: 'other',
  enter: enter,
};
