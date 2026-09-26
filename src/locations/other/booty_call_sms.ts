import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).npc_last_booty_call ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).daystart ?? 0)) {
    return;
  }
  if (((s as any).npc_std_test ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAddStdFree_SMS(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).npc_booty_call ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).daystart ?? 0)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAddPrePlanned_SMS(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).sugar_daddy_call ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAddNewBootyCall_SMS(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAddNewBootyCall_SMS(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  scene.build();
}

function enterStdFree_Tree(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'hey ' + ((s as any).pcs_nickname ?? 0) + '';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'hey ' + (((s as any).npc_nickname ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['2'] = 'got some good news';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a3'] = 'oh?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a4'] = 'my std test came back clean. why dont we celebrate tog';
  if (((s as any).hour ?? 0) < 21) {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['aa5'] = 'sorry, I cant. I have stuff to do';
  } else {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['aa5'] = 'its late. text me sooner if you want me to come over.';
  }
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['aa6'] = 'shit, maybe next time then';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ab5'] = 'ill come right now ;)';
  if (((s as any).npc_humor ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'perverted'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['ab6'] = 'in the street?? damn! keep it in your pants till you get here!';
    } else {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['ab6'] = 'as long as you make me cum later';
    }
  } else {
    if (((s as any).npc_humor ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'intellectual'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['ab6'] = 'phrasing';
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        ((s as any).SMSTree = (s as any).SMSTree ?? {})['ab6'] = 'im already hard';
      } else {
        ((s as any).SMSTree = (s as any).SMSTree ?? {})['ab6'] = 'cant wait';
      }
    }
  }
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b3'] = 'what is it?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b4'] = 'my std test came back clean';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ba5'] = (((s as any).SMSTree ?? 0)?.['aa5']);
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ba6'] = (((s as any).SMSTree ?? 0)?.['aa6']);
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['bb5'] = (((s as any).SMSTree ?? 0)?.['ab5']);
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['bb6'] = (((s as any).SMSTree ?? 0)?.['ab6']);
  scene.build();
}

function enterAddStdFree_SMS(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterStdFree_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['0']));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['1']), 'booty_call_sms', 'SMS_Base', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'add_sms', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterSMS_Base(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterStdFree_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['1']));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['2']));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['a3']), 'booty_call_sms', 'bc_choice1', ((s as any).locArgs?.[1] ?? 0), 'a');
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['b3']), 'booty_call_sms', 'bc_choice1', ((s as any).locArgs?.[1] ?? 0), 'b');
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterBcChoice1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterStdFree_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '3'] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '4'] ?? 0));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + 'a5'] ?? 0), 'booty_call_sms', 'bc_choice2', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0) + 'a', 'decline_booty_calla');
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + 'b5'] ?? 0), 'booty_call_sms', 'bc_choice2', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0) + 'b', 'accept_booty_call');
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterBcChoice2(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterStdFree_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '5'] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[4] ?? 0));
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '6'] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[4] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  qspCall(s, 'booty_call_sms', '$ARGS[3]', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[4] ?? 0));
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterPrePlannedBootyCall_Tree(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'hey ' + ((s as any).pcs_nickname ?? 0) + ', you coming over?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a1'] = 'sorry, something came up';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b1'] = 'on my way now';
  (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
  if ((!((s as any).temp_rand ?? 0))) {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['b2'] = 'come over to my place lets fuck like bunnies';
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['b2'] = 'come over to my place I want to hear you screaming my name';
    } else {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['b2'] = 'come over to my place lets have some fun today';
    }
  }
  (s as any).temp_rand = undefined;
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ba3'] = 'sorry, I cant. I have stuff to do';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ba4'] = 'shit, maybe next time then';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['bb3'] = 'ill come right now ;)';
  if (((s as any).npc_humor ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'perverted') {
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['bb4'] = 'in the street?? damn! keep it in your pants till you get here!';
    } else {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['bb4'] = 'as long as you make me cum later';
    }
  } else {
    if (((s as any).npc_humor ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'intellectual') {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        ((s as any).SMSTree = (s as any).SMSTree ?? {})['bb4'] = 'phrasing';
      } else {
        ((s as any).SMSTree = (s as any).SMSTree ?? {})['bb4'] = 'as long as you make me cum later';
      }
    } else {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['bb4'] = 'im already hard';
    }
  }
  scene.build();
}

function enterAddPrePlanned_SMS(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterPrePlannedBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['0']));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['a1']), 'booty_call_sms', 'Choice2_a', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['b1']), 'booty_call_sms', 'Choice2_b', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'add_sms', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterChoice2A(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterPrePlannedBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['a1']));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterChoice2B(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterPrePlannedBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['b1']));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['b2']));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['ba3']), 'booty_call_sms', 'Choice2_b2', ((s as any).locArgs?.[1] ?? 0), 'ba', 'decline_booty_calla');
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['bb3']), 'booty_call_sms', 'Choice2_b2', ((s as any).locArgs?.[1] ?? 0), 'bb', 'accept_booty_call');
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterChoice2B2(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterPrePlannedBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '3'] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[4] ?? 0));
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '4'] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[4] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  qspCall(s, 'booty_call_sms', '$ARGS[3]', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[4] ?? 0));
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterNewBootyCall_Tree(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewBootyCall_Tree1(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewBootyCall_Tree2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewBootyCall_Tree3(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterNewBootyCall_Tree1(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'hey ' + ((s as any).pcs_nickname ?? 0) + '';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'hey ' + (((s as any).npc_nickname ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a2'] = 'what\'s up?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b2'] = 'hey sexy';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c2'] = 'its late. but ive always got time for you :)';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['d2'] = 'its late. what do you want?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['e2'] = 'its late. text me earlier next time.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['f2'] = 'sorry';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['fa3'] = 'didn\'t see your message until now';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['fa4'] = 'whatsup?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['fb3'] = 'I was doing something';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['fb4'] = (((s as any).SMSTree ?? 0)?.['fa3']);
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['fc3'] = 'I was at the gym';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['fc4'] = (((s as any).SMSTree ?? 0)?.['fa3']);
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['fd3'] = 'I was in class';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['fd4'] = (((s as any).SMSTree ?? 0)?.['fa3']);
  scene.build();
}

function enterNewBootyCall_Tree2(s: GameState, scene: SceneBuilder): void {
  if (0) {
  } else {
    if (((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'sugar_daddy') {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['10'] = 'I want to see you';
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['11'] = 'ive booked a hotel room';
    } else {
      if (((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'casual_date'  ||  ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'fuckbuddy') {
        ((s as any).SMSTree = (s as any).SMSTree ?? {})['10'] = 'ive been thinking about you';
        ((s as any).SMSTree = (s as any).SMSTree ?? {})['a11'] = 'what were you thinking about?';
        if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2  &&  qspFunc(s, 'homes_properties_attr', 'get_property_attribute', '$town', ((s as any).home ?? 0)?.['current']) !== 'city'  &&  (String((((s as any).npc_residence ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'city') {
          ((s as any).SMSTree = (s as any).SMSTree ?? {})['a12'] = 'I booked a hotel room in Pav. why dont you come by?';
        } else {
          if (((s as any).npc_fav_pos ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'blowjob'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
            ((s as any).SMSTree = (s as any).SMSTree ?? {})['a12'] = 'your mouth around my cock';
          } else {
            if (((s as any).npc_know_virgin ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== 1) {
              if (((s as any).npc_cum_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'creampie'  &&  (((s as any).npc_condom_conscious ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0  ||  ((s as any).npc_bareback ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'never_use')  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                ((s as any).SMSTree = (s as any).SMSTree ?? {})['a12'] = 'your pussy filled with my cum';
              } else {
                if (((s as any).npc_sex_speed ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 3  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a12'] = 'fucking you bowlegged';
                } else {
                  if (((s as any).npc_cum_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'facial'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                    ((s as any).SMSTree = (s as any).SMSTree ?? {})['a12'] = 'your pretty face covered in my cum';
                  } else {
                    if (((s as any).npc_cum_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'mouth'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                      ((s as any).SMSTree = (s as any).SMSTree ?? {})['a12'] = 'watching you swallow my cum';
                    } else {
                      if (((s as any).npc_cum_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'tits'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                        ((s as any).SMSTree = (s as any).SMSTree ?? {})['a12'] = 'my cum all over your tits';
                      } else {
                        if (((s as any).npc_fav_pos ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'doggy'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                          ((s as any).SMSTree = (s as any).SMSTree ?? {})['a12'] = 'pounding you on all fours';
                        } else {
                          if (((s as any).npc_fav_pos ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'cowgirl'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                            ((s as any).SMSTree = (s as any).SMSTree ?? {})['a12'] = 'you riding my cock like crazy';
                          } else {
                            if ((!(Math.floor(Math.random() * 2) + 0))) {
                              ((s as any).SMSTree = (s as any).SMSTree ?? {})['a12'] = 'you naked on my bed';
                            } else {
                              ((s as any).SMSTree = (s as any).SMSTree ?? {})['a12'] = 'want to come over and have some fun?';
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              ((s as any).SMSTree = (s as any).SMSTree ?? {})['a12'] = 'PLACEHOLDER 1';
            }
          }
        }
        ((s as any).SMSTree = (s as any).SMSTree ?? {})['b11'] = 'me too';
        if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2  &&  qspFunc(s, 'homes_properties_attr', 'get_property_attribute', '$town', ((s as any).home ?? 0)?.['current']) !== 'city'  &&  (String((((s as any).npc_residence ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'city') {
          ((s as any).SMSTree = (s as any).SMSTree ?? {})['b12'] = 'I booked a hotel room in Pav. why dont you come by?';
        } else {
          if (((s as any).npc_fav_pos ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'blowjob'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
            ((s as any).SMSTree = (s as any).SMSTree ?? {})['b12'] = 'I want to feel your mouth around my cock';
          } else {
            if (((s as any).npc_know_virgin ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== 1) {
              if (((s as any).npc_cum_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'creampie'  &&  (((s as any).npc_condom_conscious ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0  ||  ((s as any).npc_bareback ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'never_use')  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                ((s as any).SMSTree = (s as any).SMSTree ?? {})['b12'] = 'I want to pump you full of cum';
              } else {
                if (((s as any).npc_sex_speed ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 3  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b12'] = 'come over I want to hear you screaming my name';
                } else {
                  if (((s as any).npc_cum_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'facial'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                    ((s as any).SMSTree = (s as any).SMSTree ?? {})['b12'] = 'I want to cum all over your face';
                  } else {
                    if (((s as any).npc_cum_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'mouth'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                      ((s as any).SMSTree = (s as any).SMSTree ?? {})['b12'] = 'I want to watch you swallow my cum';
                    } else {
                      if (((s as any).npc_cum_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'tits'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                        ((s as any).SMSTree = (s as any).SMSTree ?? {})['b12'] = 'let me glaze your tits with my cum';
                      } else {
                        if (((s as any).npc_fav_pos ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'doggy'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                          ((s as any).SMSTree = (s as any).SMSTree ?? {})['b12'] = 'I want to pound you on all fours';
                        } else {
                          if (((s as any).npc_fav_pos ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'cowgirl'  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                            ((s as any).SMSTree = (s as any).SMSTree ?? {})['b12'] = 'I want you to ride my cock like there\'s no tomorrow';
                          } else {
                            if ((!(Math.floor(Math.random() * 2) + 0))) {
                              ((s as any).SMSTree = (s as any).SMSTree ?? {})['b12'] = 'lets fuck like bunnies today';
                            } else {
                              ((s as any).SMSTree = (s as any).SMSTree ?? {})['b12'] = 'come over lets have some fun today';
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              ((s as any).SMSTree = (s as any).SMSTree ?? {})['b12'] = 'PLACEHOLDER 2';
            }
          }
        }
      } else {
        if (((String('boyfriend;girlfriend;husband;wife').indexOf(String((((s as any).npc_rel_type ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)))) + 1) > 0) {
          if (0) {
            if (((s as any).npc_dirty_lover ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
              ((s as any).SMSTree = (s as any).SMSTree ?? {})['10'] = 'come home';
              ((s as any).SMSTree = (s as any).SMSTree ?? {})['11'] = 'I want to fuck you senseless';
            } else {
              if (((s as any).npc_sensual_lover ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
                ((s as any).SMSTree = (s as any).SMSTree ?? {})['10'] = 'are you coming home soon';
                ((s as any).SMSTree = (s as any).SMSTree ?? {})['11'] = 'lets make love';
              } else {
                ((s as any).SMSTree = (s as any).SMSTree ?? {})['10'] = 'are you coming home soon';
                ((s as any).SMSTree = (s as any).SMSTree ?? {})['11'] = 'lets get naughty';
              }
            }
          } else {
            if (((s as any).npc_dirty_lover ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
              ((s as any).SMSTree = (s as any).SMSTree ?? {})['10'] = 'come over';
              ((s as any).SMSTree = (s as any).SMSTree ?? {})['11'] = 'I want to fuck you senseless';
            } else {
              if (((s as any).npc_sensual_lover ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
                ((s as any).SMSTree = (s as any).SMSTree ?? {})['10'] = 'I want to see you';
                ((s as any).SMSTree = (s as any).SMSTree ?? {})['11'] = 'lets make love';
              } else {
                ((s as any).SMSTree = (s as any).SMSTree ?? {})['10'] = 'you should come over';
                ((s as any).SMSTree = (s as any).SMSTree ?? {})['11'] = 'lets get naughty';
              }
            }
          }
        } else {
          if (((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'boyfriend') {
            ((s as any).SMSTree = (s as any).SMSTree ?? {})['10'] = '$npc_rel_type = boyfriend!!';
            ((s as any).SMSTree = (s as any).SMSTree ?? {})['11'] = 'PLACEHOLDER3';
          } else {
            if (((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'girlfriend') {
              ((s as any).SMSTree = (s as any).SMSTree ?? {})['10'] = '$npc_rel_type = \'girlfriend\'!!';
              ((s as any).SMSTree = (s as any).SMSTree ?? {})['11'] = 'PLACEHOLDER4';
            } else {
              ((s as any).SMSTree = (s as any).SMSTree ?? {})['10'] = '$npc_rel_type = \'' + (((s as any).npc_rel_type ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '\'!!';
              ((s as any).SMSTree = (s as any).SMSTree ?? {})['11'] = 'PLACEHOLDER5';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterNewBootyCall_Tree3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 21) {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['a20'] = 'sorry, I cant. I have stuff to do';
  } else {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['a20'] = 'its late. text me sooner if you want me to come over.';
  }
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a21'] = 'shit, maybe next time then';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b20'] = 'ill come right now ;)';
  if (((s as any).npc_humor ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'perverted'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['b21'] = 'in the street?? damn! keep it in your pants till you get here!';
    } else {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['b21'] = 'as long as you make me cum later';
    }
  } else {
    if (((s as any).npc_humor ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'intellectual'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['b21'] = 'phrasing';
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        ((s as any).SMSTree = (s as any).SMSTree ?? {})['b21'] = 'im already hard';
      } else {
        ((s as any).SMSTree = (s as any).SMSTree ?? {})['b21'] = 'cant wait';
      }
    }
  }
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c20'] = 'its kind of late';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c21'] = 'sorry';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c22'] = 'maybe another time?';
  scene.build();
}

function enterAddNewBootyCall_SMS(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['0']));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['1']), 'booty_call_sms', 'new_routing1', ((s as any).locArgs?.[1] ?? 0), '' + ((s as any).totminut ?? 0) + '');
  qspCall(s, 'SMStext_builder', 'add_sms', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterNewRouting1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['1']));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
  if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0))) {
    qspCall(s, 'SMStext_builder', 'end');
    return;
  }
  if (((s as any).totminut ?? 0) >= parseFloat(((s as any).locArgs?.[2] ?? 0)) + 180) {
    qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['f2']), 'booty_call_sms', 'new_delayed', '1', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  } else {
    if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 4) {
      qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['c2']), 'booty_call_sms', 'new_routing2', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'c2', 'gs \'\'npc_relationship\'\', \'\'modify\'\', \'\'' + ((s as any).locArgs?.[1] ?? 0) + '\'\', 1');
      qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['d2']), 'booty_call_sms', 'new_routing2', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'd2', 'gs \'\'npc_relationship\'\', \'\'modify\'\', \'\'' + ((s as any).locArgs?.[1] ?? 0) + '\'\', -2');
      qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['e2']), 'booty_call_sms', 'new_end', ((s as any).locArgs?.[1] ?? 0), 'e2', 'decline_booty_calla', '');
    } else {
      qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['a2']), 'booty_call_sms', 'new_routing2', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'a2', '');
      qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['b2']), 'booty_call_sms', 'new_routing2', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'b2', '');
    }
  }
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterNewDelayed(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  if (String((s as any).locArgs?.[1] ?? '') === '1') {
    qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['f2']));
    if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0))) {
      qspCall(s, 'SMStext_builder', 'end');
      return;
    }
    qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['fa3']), 'booty_call_sms', 'new_delayed', 'a', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
    qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['fb3']), 'booty_call_sms', 'new_delayed', 'b', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
    qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['fc3']), 'booty_call_sms', 'new_delayed', 'c', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
    if ((((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  ||  ((s as any).university ?? 0)?.['student'] === 1)  &&  (!((s as any).kanikuli ?? 0))) {
      qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['fd3']), 'booty_call_sms', 'new_delayed', 'd', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
    }
  } else {
    qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['f' + String(((s as any).locArgs?.[1] ?? 0)) + '3']));
    if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0))) {
      qspCall(s, 'SMStext_builder', 'end');
      return;
    }
    qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['f' + String(((s as any).locArgs?.[1] ?? 0)) + '4']), 'booty_call_sms', 'new_routing2', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), 'f' + ((s as any).locArgs?.[1] ?? 0) + '4', '');
  }
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[4] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterNewRouting2(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspFunc(s, 'ARGS[4]');
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[3] ?? 0)] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[5] ?? 0));
  if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[5] ?? 0))) {
    qspCall(s, 'SMStext_builder', 'end');
    return;
  }
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['10']));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[5] ?? 0));
  if (((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'casual_date'  ||  ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'fuckbuddy') {
    qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['a11']), 'booty_call_sms', 'new_bootycall', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'a');
    qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['b11']), 'booty_call_sms', 'new_bootycall', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'b');
  } else {
    qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['11']));
    if (1) {
      qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['a20']), 'booty_call_sms', 'new_routing3', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'a', 'decline_booty_calla', 'gs \'\'npc_relationship\'\', \'\'modify\'\', \'\'' + ((s as any).locArgs?.[1] ?? 0) + '\'\', -2');
      qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['b20']), 'booty_call_sms', 'new_routing3', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'b', 'accept_booty_call', '');
      if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) <= 4) {
        qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['c20']), 'booty_call_sms', 'late_apology', '1', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'c20');
      }
    }
  }
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[5] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  if (0) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      // TODO-QSP: wait 250
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'a', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[5] ?? 0)]; enterSexting1(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterNewBootycall(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[3] ?? 0) + '11'] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[4] ?? 0));
  if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[4] ?? 0))) {
    qspCall(s, 'SMStext_builder', 'end');
    return;
  }
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[3] ?? 0) + '12'] ?? 0));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['a20']), 'booty_call_sms', 'new_routing3', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'a', 'decline_booty_calla', '');
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['b20']), 'booty_call_sms', 'new_routing3', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'b', 'accept_booty_call', '');
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[4] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterLateApology(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[2] ?? 0)]; enterNewBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[4] ?? 0)] ?? 0));
  if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[5] ?? 0))) {
    qspCall(s, 'SMStext_builder', 'end');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === '1') {
    qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['c22']), 'booty_call_sms', 'late_apology', '2', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), 'c22');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === '2') {
      qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['c23']), 'booty_call_sms', 'new_routing3', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), 'c23');
    }
  }
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[5] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterNewRouting3(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspFunc(s, 'ARGS[5]');
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[3] ?? 0) + '20'] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[6] ?? 0));
  if (qspFunc(s, 'booty_call_sms', 'check_late', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[6] ?? 0))) {
    qspCall(s, 'SMStext_builder', 'end');
    return;
  }
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[3] ?? 0) + '21'] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[6] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  qspCall(s, 'booty_call_sms', '$ARGS[4]', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[6] ?? 0));
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterNewEnd(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspFunc(s, 'ARGS[4]');
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[2] ?? 0)] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[5] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  qspCall(s, 'booty_call_sms', '$ARGS[3]', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[5] ?? 0));
  scene.build();
}

function enterAcceptBootyCall(s: GameState, scene: SceneBuilder): void {
  ((s as any).booty_call_invite = (s as any).booty_call_invite ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).daystart ?? 0);
  ((s as any).booty_call_hotel = (s as any).booty_call_hotel ?? {})[((s as any).locArgs?.[1] ?? 0)] = '';
  (s as any).temp_town = qspFunc(s, 'homes_properties_attr', 'get_property_attribute', '$town', (((s as any).home ?? 0)?.['current']));
  if (((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'sugar_daddy') {
    if (((s as any).temp_town ?? 0) === 'city') {
      ((s as any).booty_call_hotel = (s as any).booty_call_hotel ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'city';
    } else {
      ((s as any).booty_call_hotel = (s as any).booty_call_hotel ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'pav';
    }
  } else {
    if (((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'casual_date'  ||  ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'fuckbuddy') {
      if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2  &&  ((s as any).temp_town ?? 0) !== 'city'  &&  (String((((s as any).npc_residence ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'city') {
        ((s as any).booty_call_hotel = (s as any).booty_call_hotel ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'pav';
      }
    }
  }
  (s as any).temp_town = undefined;
  scene.build();
}

function enterDeclineBootyCalla(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'a', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterDeclineBootyCallCore(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDeclineBootyCallb(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'a', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterDeclineBootyCallCore(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDeclineBootyCallCore(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sugar_daddy_call ?? 0)[String((s as any).locArgs?.[2] ?? '')] === 1) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).locArgs?.[2] ?? 0), (-2));
    ((s as any).sugar_daddy_call = (s as any).sugar_daddy_call ?? {})[((s as any).locArgs?.[2] ?? 0)] = 0;
    qspCall(s, 'booty_call', 'set_sugar_daddy_schedule', ((s as any).locArgs?.[2] ?? 0));
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0)]; enterSexting1(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterNewExpiredBootyCall(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'sorry, I cant anymore. maybe we can try another time';
  scene.build();
}

function enterCheckLate(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).totminut ?? 0) >= parseFloat(((s as any).locArgs?.[2] ?? 0)) + 480) {
    qspCall(s, 'SMStext_builder', 'start');
    qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewExpiredBootyCall(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['0']));
    qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
    qspCall(s, 'SMStext_builder', 'end');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[3] ?? 0)]; enterDeclineBootyCallb(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).SMSTree = undefined;
    (s as any).result = 1;
  }
  scene.build();
}

function enterNewSexting_Tree(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a0'] = 'send me a pic then?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b0'] = 'but I wouldn\'t say no to a selfie';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a1'] = 'refuse';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a2'] = 'no';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b1'] = 'next time tiger';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c1'] = 'im not at home!';
  if (((s as any).npc_dirty_lover ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['c2'] = 'hot';
    } else {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['c2'] = 'so?';
    }
  } else {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['c2'] = 'ill use my imagination then';
  }
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['s1'] = 'Send a selfie from your gallery';
  scene.build();
}

function enterSexting1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[2] ?? 0)]; enterNewSexting_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '0'] ?? 0));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['a1']), 'booty_call_sms', 'sexting_refuse', ((s as any).locArgs?.[2] ?? 0), 'refuse');
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['b1']), 'booty_call_sms', 'sexting_refuse', ((s as any).locArgs?.[2] ?? 0), 'next');
  if (((String(((s as any).location_type ?? 0)).indexOf(String('outdoors'))) + 1) > 0  ||  ((String(((s as any).location_type ?? 0)).indexOf(String('public'))) + 1) > 0) {
    qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['c1']), 'booty_call_sms', 'sexting_public', ((s as any).locArgs?.[2] ?? 0));
  }
  qspCall(s, 'SMStext_builder', 'send_selfie', (((s as any).SMSTree ?? 0)?.['s1']), 'n|b|sh|ft|fa|fp', 'booty_call_sms', 'sexting_send', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterSextingPublic(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewSexting_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['c1']));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['c2']));
  if (((s as any).npc_dirty_lover ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['a1']), 'booty_call_sms', 'sexting_refuse', ((s as any).locArgs?.[1] ?? 0), 'refuse');
    qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['b1']), 'booty_call_sms', 'sexting_refuse', ((s as any).locArgs?.[1] ?? 0), 'next');
    qspCall(s, 'SMStext_builder', 'send_selfie', (((s as any).SMSTree ?? 0)?.['s1']), 'n|b|sh|ft|fa|fp', 'booty_call_sms', 'sexting_send', ((s as any).locArgs?.[1] ?? 0));
  }
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterSextingRefuse(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewSexting_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  if (String((s as any).locArgs?.[2] ?? '') === 'refuse') {
    qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['a2']));
    qspCall(s, 'npc_relationship', 'modify', ((s as any).locArgs?.[1] ?? 0), (-1));
  } else {
    qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['b1']));
  }
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterSextingSend(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNewSexting_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send_img', ((s as any).locArgs?.[3] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'receive', 'damn!!');
  qspCall(s, 'npc_relationship', 'modify', ((s as any).locArgs?.[1] ?? 0), 3);
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'send', ':)');
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterDelayedBootyCall_Tree(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'hey';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'hey';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['2'] = 'you busy today?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a3'] = 'no';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b3'] = 'depends';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c3'] = 'maybe';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['d3'] = 'yes';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['4'] = 'why?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['5'] = 'want to spend some time';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a6'] = 'you could come over to my place';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b6'] = 'i could get a hotel room';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a7'] = 'sorry, not today';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b7'] = 'when?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b8'] = 'how about ' + qspFunc(s, 'time', 'get_time_string', (((s as any).npc_start_free_time ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0), 0) + '?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ba9'] = 'sorry, busy';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['bb9'] = 'that sounds fun';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['bb10'] = 'okay, see you then';
  scene.build();
}

function enterAddDelayedBootyCall_SMS(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterDelayedBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['0']));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['1']), 'booty_call_sms', 'delayed1', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'add_sms', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterDelayed1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterDelayedBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['1']));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['2']));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['a3']), 'booty_call_sms', 'delayed2', ((s as any).locArgs?.[1] ?? 0), 'a');
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['b3']), 'booty_call_sms', 'delayed2', ((s as any).locArgs?.[1] ?? 0), 'b');
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['c3']), 'booty_call_sms', 'delayed2', ((s as any).locArgs?.[1] ?? 0), 'c');
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['d3']), 'booty_call_sms', 'delayed_decline', ((s as any).locArgs?.[1] ?? 0), (((s as any).SMSTree ?? 0)?.['d3']));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterDelayed2(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterDelayedBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '3'] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['4']));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
  qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['5']));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
  if (! ((s as any).hotel ?? 0)) {
    qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['a6']));
  } else {
    qspCall(s, 'SMStext_builder', 'receive', (((s as any).SMSTree ?? 0)?.['b6']));
  }
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['a7']), 'booty_call_sms', 'delayed_decline', ((s as any).locArgs?.[1] ?? 0), (((s as any).SMSTree ?? 0)?.['a7']));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['b7']), 'booty_call_sms', 'delayed3', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterDelayedDecline(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterDelayedBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[3] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  qspCall(s, 'booty_call_sms', 'decline_booty_call', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterDelayed3(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterDelayedBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['b7']));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['b8']));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['ba9']), 'booty_call_sms', 'delayed_decline', ((s as any).locArgs?.[1] ?? 0), (((s as any).SMSTree ?? 0)?.['ba9']));
  qspCall(s, 'SMStext_builder', 'add_reply', (((s as any).SMSTree ?? 0)?.['bb9']), 'booty_call_sms', 'delayed4', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  (s as any).SMSTree = undefined;
  scene.build();
}

function enterDelayed4(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterDelayedBootyCall_Tree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['ba9']));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'send', (((s as any).SMSTree ?? 0)?.['ba10']));
  qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterAcceptBootyCall(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).SMSTree = undefined;
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
