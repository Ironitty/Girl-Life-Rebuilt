import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLunch(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).breakevent_lunch_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).breakevent_lunch_day = ((s as any).daystart ?? 0);
    (s as any).eventtype = 'lunch';
    qspGoto(s, 'gschool_events', 'break_events');
  }
  qspCall(s, 'dimaRevenge', 'dimaRevenge_event_check');
  if (((s as any).marcus_event ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).Marcus_sextype ?? 0) > 0  &&  (!(Math.floor(Math.random() * 4) + 0))) {
    qspGoto(s, 'gschool_lunch', 'marcus_event');
  }
  if (((s as any).cheerleadingQW ?? 0)?.['bella_stasya_gossip'] === 0  &&  ((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 0  &&  ((s as any).cheerleadingQW ?? 0)?.['gossip'] >= 3  &&  (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 200)) {
    qspGoto(s, 'gschool_events1', 'cheerleading_notice');
  }
  qspCall(s, 'natbel_friend', 'slut_reconcile_school_check');
  qspGoto(s, 'gschool_lunch', 'cafeteria');
  // TODO-QSP: end
  scene.build();
}

function enterCafeteria(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'gschool_lunch';
  (s as any).loc_arg = 'cafeteria';
  (s as any).menu_loc = 'gschool_lunch';
  (s as any).menu_arg = 'cafeteria';
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  if ((!((s as any).school_lunch ?? 0))) {
    if (((s as any).NikoVolkovQW ?? 0) === 5  &&  ((s as any).NikoEv ?? 0) === 5  &&  ((s as any).NikoDate ?? 0) === 0  &&  ((s as any).NikoDate_Day ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).school_lunch = 1;
      qspGoto(s, 'NikoDates', 'hallway_strip');
    } else {
      if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 12) {
        (s as any).school_lunch = 1;
        qspGoto(s, 'NikoDreams', 'classroom_dream');
      } else {
        if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 13  &&  ((s as any).NikoDate_Day ?? 0) !== ((s as any).daystart ?? 0)) {
          (s as any).school_lunch = 1;
          qspGoto(s, 'NikoEv2', 'Lunch Chat');
        } else {
          if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 15  &&  ((s as any).NikoDate_Day ?? 0) !== ((s as any).daystart ?? 0)) {
            (s as any).school_lunch = 1;
            qspGoto(s, 'NikoEv2', 'Lunch Chat 2');
          } else {
            if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 21  &&  ((s as any).NikoDate_Day ?? 0) !== ((s as any).daystart ?? 0)) {
              (s as any).school_lunch = 1;
              qspGoto(s, 'NikoEv2', 'Natalia Talk 2');
            } else {
              if (((s as any).VKLenaBully ?? 0) === 1  &&  ((s as any).VKLena_Day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).VKWip ?? 0) === 100) {
                (s as any).school_lunch = 1;
                qspGoto(s, 'NikoBully', 'Lena Bully');
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).dimaRevenge ?? 0) === 5  &&  ((s as any).dimaRevChoice ?? 0) === 5) {
    scene.text('<center><b>Cafeteria</b></center>');
    scene.img('images/locations/pavlovsk/school/lunch/lunch.jpg');
    scene.text('As you wait in line for your meal, you hear the other students talking about a girl you don\'t know. None of them are talking about you anymore. Dimka works quick. You enjoy the rest of your lunch break.');
  } else {
    scene.img('images/locations/pavlovsk/school/lunch/lunch.jpg');
    scene.text('During the break, students and some of the teachers are standing in line near the kitchen, waiting for their food.');
    qspCall(s, 'gschool_groups', 'teachers');
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
    scene.actions([
      { label: 'Eat bagged lunch', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'food', 'bagged_lunch_stats');
    qspCall(st, 'food', 'bagged_lunch_text');
    qspCall(st, 'gschool_gossip', 'bagged');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lunch', 'break'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Skip lunch', handler: (st: GameState) => {
    qspCall(st, 'gschool_gossip', 'skipping');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lunch', 'break'] },
    ]);
  } },
    { label: 'Buy food', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 50);
      qspCall(st, 'food', 'medium_meal');
      qspCall(st, 'gschool_gossip', 'buying');
      scene.actions([
        { label: 'Continue', goto: ['gschool_lunch', 'break'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBreak(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'gschool_lunch';
  (s as any).loc_arg = 'break';
  (s as any).menu_loc = 'gschool_lunch';
  (s as any).menu_arg = 'break';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  (s as any).urand = (Math.floor(Math.random() * 9) + 0);
  scene.img('images/locations/pavlovsk/school/chat/cooljocks.jpg');
  scene.text('During break, the students split up to hang out with those in their social groups. The nerds and outcasts hang out in the classrooms, the cool kids and jocks hang out in the hallway near the lockers, and the gopniks hang out in the stairwell near the disused classrooms.');
  (s as any).eventtype = 'long_break';
  if (((s as any).cheerleadingQW ?? 0)?.['skipped_ev'] + ((s as any).cheerleadingQW ?? 0)?.['skipped_g_ev'] > 0) {
    qspCall(s, 'gschool_cheerleading', 'skipped_ev');
    scene.actions([
{ label: 'Continue down the hall', goto: ['gschool_events', 'leave_break_events2'] },
]);
    return;
  } else {
    if (((s as any).week ?? 0) > 1  &&  (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).nerd_game ?? 0)?.['stage'] > 0  ||  (Math.floor(Math.random() * (((s as any).npc_rel ?? 0)?.['A152'] - 80 + 1)) + (80)) > 95)  &&  ((s as any).nerd_game ?? 0)?.['invite_day'] < ((s as any).daystart ?? 0) - ((s as any).week ?? 0)) {
      qspGoto(s, 'nerd_game_night', 'invite', 'lunch');
    } else {
      if (((s as any).bella_goth ?? 0) === 0  &&  (((s as any).arch_vars ?? 0)?.['main_active'] === 'goth'  &&  ((s as any).PCloGoth ?? 0) === 1  &&  ((s as any).pcs_makeup ?? 0) === 7)) {
        (s as any).bella_goth = 1;
        qspGoto(s, 'gschool_events1', 'bella_goth');
      }
    }
  }
  if (((s as any).katjaQW ?? 0)?.['QWstage'] === 0  &&  ((s as any).npc_rel ?? 0)?.['A14'] >= 60  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 50  &&  ((s as any).class ?? 0)?.['school_grade_average'] >= 65  &&  ((s as any).pcs_makupskl ?? 0) >= 40  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
    qspGoto(s, 'gschool_coolkid_chats', 'Katjaproblems');
  }
  if (((s as any).breaktype ?? 0) !== 'long') {
    if (((s as any).dimaRevenge ?? 0) === 4  &&  ((s as any).dimaRevChoice ?? 0) === 2  &&  ((s as any).hour ?? 0) < 10) {
      // TODO-QSP: dynamic text: <br>"Hi Nat, did you happen to see Dimka?" "Hey <<$pcs_nickname>>, he was here e...
      scene.text(`<br>"Hi Nat, did you happen to see Dimka?" "Hey ${((s as any).pcs_nickname || '')}, he was here earlier, speaking with Lena and Lera."`);
    }
    if (((s as any).dimaRevenge ?? 0) === 2) {
      qspGoto(s, 'dimaRevenge', '2');
    } else {
      if (((s as any).NikoVolkovQW ?? 0) === 0  &&  ((s as any).NikoLuv ?? 0) >= 4) {
        qspGoto(s, 'NikoEv', 'Date Intro');
      } else {
        if (((s as any).NikoVolkovQW ?? 0) === 5  &&  ((s as any).NikoEv ?? 0) === 4  &&  (!((s as any).NikoDate ?? 0))) {
          (s as any).lunch_event = ((s as any).daystart ?? 0);
          qspGoto(s, 'NikoDates', 'cafeteria');
        } else {
          if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).FedorVsNiko ?? 0) === 1) {
            qspGoto(s, 'NikoPayback', 'Fedor Help 2');
          } else {
            if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).FyodorVsNiko ?? 0) === 1) {
              qspGoto(s, 'NikoPayback', 'Fyodor Help');
            } else {
              if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).IvanVsNiko ?? 0) === 1) {
                qspGoto(s, 'NikoPayback', 'Ivan Help 2');
              } else {
                if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).anushkaQW ?? 0)?.['vs_niko'] === 1) {
                  qspGoto(s, 'NikoPayback', 'Nush Help');
                } else {
                  if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).AlbinaQW ?? 0)?.['niko_help'] === 1) {
                    qspGoto(s, 'NikoPayback', 'Albina Help');
                  } else {
                    if (((s as any).NikoPayback ?? 0) === 1  &&  ((s as any).NikoPayback_Day ?? 0) !== ((s as any).daystart ?? 0)) {
                      qspGoto(s, 'NikoPayback', 'Payback');
                    } else {
                      if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).NikoPayback_Day ?? 0) !== ((s as any).daystart ?? 0)) {
                        qspGoto(s, 'NikoPayback', 'Payback 2');
                      } else {
                        if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 14) {
                          (s as any).lunch_event = ((s as any).daystart ?? 0);
                          qspGoto(s, 'NikoEv2', 'Vicky Talk');
                        } else {
                          if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 16) {
                            (s as any).lunch_event = ((s as any).daystart ?? 0);
                            qspGoto(s, 'NikoEv2', 'Natalia Talk');
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
    }
    if (((s as any).school_period ?? 0) === 6) {
      if (((s as any).lunch_event ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).lunch_event = ((s as any).daystart ?? 0);
        qspGoto(s, 'gschool_lunch', 'events');
      }
      if (((s as any).soniaQW ?? 0)?.['slut'] === 2) {
        ((s as any).soniaQW = (s as any).soniaQW ?? {})['slut'] = 3;
        scene.text('During break, you\'re wandering through the school hallways killing time when you notice Sonia and Vitek talking about something. Sonia looks like she\'s about to cry, but eventually she gives a quiet nod as Vitek whispers something in her ear.');
      }
      scene.actions([
        { label: 'Use water cooler', handler: (st: GameState) => {
    // TODO-QSP: $breaktype = 'long'
  }, goto: ['gschool_break', 'watercooler'] },
        { label: 'Go to the girls restroom', handler: (st: GameState) => {
    // TODO-QSP: $breaktype = 'long'
  }, goto: ['gschool_break', 'girls_restroom'] },
        { label: 'Go to the boys restroom', handler: (st: GameState) => {
    // TODO-QSP: $breaktype = 'long'
  }, goto: ['gschool_break', 'boys_restroom'] },
      ]);
    } else {
      if (((s as any).breakevent_break_day ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).breakevent_break_day = ((s as any).daystart ?? 0);
        qspGoto(s, 'gschool_events', 'break_events');
      }
      if (((s as any).soniaQW ?? 0)?.['slut'] === 2) {
        ((s as any).soniaQW = (s as any).soniaQW ?? {})['slut'] = 3;
        scene.text('During break, you\'re wandering through the school hallways killing time when you notice Sonia and Vitek talking about something. Sonia looks like she\'s about to cry, but eventually she gives a quiet nod as Vitek whispers something in her ear.');
      }
      scene.actions([
        { label: 'Use water cooler', handler: (st: GameState) => {
    // TODO-QSP: $breaktype = 'short'
  }, goto: ['gschool_break', 'watercooler'] },
        { label: 'Go to the girls restroom', handler: (st: GameState) => {
    // TODO-QSP: $breaktype = 'short'
  }, goto: ['gschool_break', 'girls_restroom'] },
        { label: 'Go to the boys restroom', handler: (st: GameState) => {
    // TODO-QSP: $breaktype = 'short'
  }, goto: ['gschool_break', 'boys_restroom'] },
      ]);
    }
  }
  if (((s as any).school_period ?? 0) === 6) {
    scene.actions([
      { label: 'Stay in cafeteria', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/lunch/lunch.jpg');
    scene.text('You stay in the cafeteria where some of the teachers are eating or making sure there\'s no trouble.');
    qspCall(st, 'gschool_groups', 'teachers');
    if (((st as any).rolanmeet ?? 0) < 1) {
      scene.text('Rolan is sitting with his head on the table, looking a little lonely.');
      scene.actions([
        { label: 'Look for the lonely man', goto: ['gschool_lunch', 'rolan_meet'] },
      ]);
    } else {
      if (((st as any).rolanmeet ?? 0) < 2) {
        scene.text('Rolan is sleeping at the table as usual.');
        scene.actions([
          { label: 'Wake him', goto: ['gschool_lunch', 'rolan_meet'] },
        ]);
      } else {
        if (((st as any).rolanmeet ?? 0) < 8) {
          scene.actions([
            { label: 'Look for Rolan', goto: ['gschool_lunch', 'rolan_meet'] },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax in a classroom', goto: ['gschool_chats', 'nerds'] },
    { label: 'Hang out in the hallway', goto: ['gschool_chats', 'cooljocks'] },
    { label: 'Hang out with the gopniks', goto: ['gschool_chats', 'gopniks'] },
  ]);
  scene.build();
}

function enterMarcusEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).marcus_event = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/marcus/marcusflirt.jpg');
  // TODO-QSP: dynamic text: As you stop at your locker before lunch, Marcus walks over. "Hey <<$pcs_nickname...
  scene.text(`As you stop at your locker before lunch, Marcus walks over. "Hey ${((s as any).pcs_nickname || '')}, you're looking fine today. Damn, you look good in that little plaid skirt!"`);
  scene.text('You can\'t help but smile and shake your head a little. You can tell by the way his eyes roam all over your body that despite his compliments, there\'s only one thing on his mind right now. If the way he\'s flirting wasn\'t obvious enough, the bulge straining against his pants is a dead giveaway. "Well you\'re not looking too bad yourself Marcus. And by the look of things, you sure are VERY happy to see me!" you say with a giggle while deliberately staring at his crotch.');
  scene.text('He blushes and pulls out his shirt so it hangs over his crotch, trying to hide his erection. "Oh fuck, sorry about that. I just had two girls in my last class who took turns flashing me. I swear those girls get a huge kick out of teasing me." He looks around before leaning in close to you. "Hey, think you might be able to you know… help me out with this?" he asks softly while indicating the evident bulge in his pants.');
  qspCall(s, 'willpower', 'bj', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Make an excuse and go', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Make an excuse and go', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big146.jpg');
    scene.text('"Sorry Marcus, but I\'ve got stuff to do. Maybe some other time?" You can see he\'s fairly disappointed, but he nods in agreement.');
    scene.text('"Sure, not a problem. Talk to you later then?"');
    scene.text('"Yeah, talk to you later." With that, you walk away.');
    scene.actions([
      { label: 'Go to lunch', goto: ['gschool_lunch', 'lunch'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'willpower', 'bj', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Not today', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Not today', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big146.jpg');
    scene.text('You shake your head. "Sorry, not today Marcus."');
    scene.text('He nods his head in understanding. "Yeah okay, not a problem. I figured, you know it wouldn\'t hurt to ask, but don\'t worry about it. You still want to sit with me at lunch and talk?"');
    scene.actions([
      { label: 'Yeah that would be nice', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A146', 4);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/lunch/hall.jpg');
    scene.text('"Sure, I would love that." With that, the two of you walk to the lunch room together.');
    scene.text('"You want something to eat? My treat," he asks as you stand in line.');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/lunch/lunch.jpg');
    scene.text('"I\'m not hungry. Thanks anyway, but I would love to sit with you." He buys his lunch and you find a table to sit together. While he eats his lunch, the two of you talk for the rest of lunchtime.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (40);
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (10);
    (st as any).fat = ((st as any).fat ?? 0) + (3);
    (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (40);
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_breath = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/lunch/lunch.jpg');
    scene.text('"Thank you Marcus, that is sweet." With that, he buys both your lunches and you find a table to sit at while you eat and talk for the rest of lunchtime.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Help him out', handler: (st: GameState) => {
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A146'] = 1;
    qspCall(st, 'boyStat', 'A146');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marcl.jpg');
    // TODO-QSP: dynamic text: You purse your lips in thought before grabbing him by the hand. When no one is l...
    scene.text(`You purse your lips in thought before grabbing him by the hand. When no one is looking, you lead him into one of the empty classrooms where you squat down in front of him as he frees his rock-hard ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} cock from his pants, putting it right in your face. You take it in your hand, giving it several lengthy strokes while you listen to many of your classmates out in the hall, just on the other side of the door. You briefly wonder how many of them do similar things on different days or how many might even be doing something similar right this minute.`);
    qspCall(st, 'arousal', 'hj', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marclbj.jpg');
    scene.text('After giving his cock a few strokes, you feel it pulsing in your hand. You can tell he\'s been struggling with this hard on for some time now. Leaning forward, you open your mouth wide before slowly wrapping your lips around the shaft of his cock, sucking him down deep. You use one of your hands to massage his balls while the other strokes up and down his shaft at the same pace of your lips. As he starts moaning louder and louder, you briefly remove your hands so you can pull down your shirt and give him a nice view of your breasts before reaching back for his cock and balls.');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marclcum.jpg');
    scene.text('He doesn\'t last very long. Just a few minutes of sucking is all it takes for his cum to blast the back of your throat. He shudders and pulls back, his dick popping out from between your lips even as you keep stroking his shaft with one hand. Spurt after spurt of his sticky cum splashes across your face, into your hair and onto your breasts in what seems like a never ending stream. You\'re seriously starting to wonder whether it\'s going stop until the last tiny spurt finally shoots out and lands on the floor. You take his now softening dick back in your mouth and suck on it softly, cleaning him off and milking out the last few warm drops.');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'cum_call', 'mouth');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: With a loud sigh, he leans back against the teacher''s desk. "Fuck yeah <<$pcs_n...
    scene.text(`With a loud sigh, he leans back against the teacher's desk. "Fuck yeah ${((st as any).pcs_nickname || '')}, I really needed that. Hey, why don't you come sit with me at lunch? I'll even buy you some lunch, if you're not already full," he adds with a smirk.`);
    scene.text('You can\'t help but roll your eyes as you do the best you can to clean yourself up. You can\'t believe it all came from just one guy. Sitting with him at lunch sounds nice, but he does have a point. Do you really want anything to eat, well anything else that is?');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/lunch/lunch.jpg');
    scene.text('"I\'m not really hungry Marcus, but thank you anyway. I would love to sit with you." With that, the two of you walk to the cafeteria together. He buys his lunch and you find a table and sit together while he eats. You talk for the rest of lunchtime.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (40);
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (10);
    (st as any).fat = ((st as any).fat ?? 0) + (3);
    (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (40);
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_breath = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/lunch/lunch.jpg');
    scene.text('"Sure, I would love to have lunch with you." With that, you walk into the cafeteria together. He buys lunch for both and you find a table to sit together while you eat and talk for the rest of lunchtime.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 40  &&  Math.min(((s as any).katjaQW ?? 0)?.['horny'], 100) > (Math.floor(Math.random() * 341) + 60)  &&  ((s as any).ivan_afterschool ?? 0) === 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
    scene.text('During the break, Katja approaches you, her face flushed in a mixture of shame and what seems to be arousal. After a few seconds, she gathers enough courage to ask if you want go somewhere quiet with her.');
    scene.actions([
      { label: 'Refuse', goto: ['gschool_lunch', 'break'] },
      { label: 'Go with Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/petting.jpg');
    // TODO-QSP: dynamic text: You nod at Katja and she quickly takes you by the hand, leading you to a small s...
    scene.text(`You nod at Katja and she quickly takes you by the hand, leading you to a small storage closet. The door has barely closed behind you when she pulls you tightly against her, kissing your lips aggressively. She leans in and softly whispers in your ear. "I want you, ${((st as any).pcs_nickname || '')}."`);
    if ((Math.floor(Math.random() * 2) + 1) === 1  &&  ((st as any).katjaQW ?? 0)?.['school_sex'] >= 1) {
      scene.actions([
        { label: 'Go somewhere private', goto: ['Katja_Tanga', 'secretroom'] },
      ]);
    } else {
      scene.actions([
        { label: 'Eat Katja out', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (1);
    if (((st as any).katjaQW ?? 0)?.['school_sex'] === 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['school_sex'] = 1;
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
    qspCall(st, 'npcStat', 'A14');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/lesbian.jpg');
    scene.text('Katja lightly presses down on your shoulders, letting you know to get down on your knees in front of her as she lifts up her skirt and pulls her panties to the side. You waste no time, nuzzling at her groin as your tongue deftly starts licking her tiny clitoris. You can feel her pussy getting wetter and wetter from your thorough licking, and you enjoy the taste of her pussy a lot.');
    scene.text('As Katja gets closer to her orgasm, she firmly clutches your hair and roughly pulls your face even harder into her crotch, encouraging you to work harder. A short while later, you can feel her pussy convulsing against your mouth, a few drops of girl cum squirting out and landing on your mouth. You slowly keep lapping at her twitching pussy, bringing her down carefully while she recovers from her orgasm. When you look up into her eyes, you see her staring down at you lovingly for a second before pushing your face away and quickly straightening her clothes.');
    // TODO-QSP: dynamic text: "Damn, next period is about to start! I''m sorry <<$pcs_nickname>>, I owe you on...
    scene.text(`"Damn, next period is about to start! I'm sorry ${((st as any).pcs_nickname || '')}, I owe you one!" she apologizes as she quickly gathers her things and leaves the closet. You're hornier than ever, but you need to get going too.`);
    qspCall(st, 'arousal', 'cuni_give', 18, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  ((s as any).anushkaQW ?? 0)?.['sex'] >= 10  &&  ((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  (!(Math.floor(Math.random() * 6) + 0))) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
      scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/want.jpg');
      scene.text('As you\'re leaving the canteen, Anushka grabs you and pushes you up against the wall. She starts kissing you passionately while one of her hands slides up your skirt and starts rubbing your clit. You can hear several of your fellow classmates whistling, hooting and hollering, but right now you don\'t really care. She breaks the kiss just long enough to moan into your ear. "I want to fuck you. Come with me…" she whispers as her fingers slide up into your pussy.');
      qspCall(s, 'willpower', 'sex', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Not today', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Not today', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nomake.jpg');
    scene.text('You\'re barely able to tear yourself away, mostly because you don\'t really want to, but after struggling with yourself you finally manage to break away and shake your head at Anushka. "I\'m sorry, but I can\'t right now… Sorry…" you mumble before hurrying away.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lunch', 'break'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Go with it', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['lunch'] = 2;
    qspCall(st, 'npc_relationship', 'modify', 'A144', 2);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    scene.img('images/characters/pavlovsk/school/girl/anushka/makeout.mp4');
    scene.text('As her fingers invade your already dripping pussy, you spread your legs a bit wider to give her easier access, barely even aware of your fellow students in the hall and you softly moan back at her. "Mmm yes, I want you to fuck me." She smiles, grabs you by the hand and leads you away so you can find somewhere private.');
    scene.actions([
      { label: 'Go somewhere private', goto: ['gschool_sex', 'Anush_private'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  ((s as any).anushkaQW ?? 0)?.['sex'] >= 15  &&  ((s as any).pcs_hotcat ?? 0) >= 6  &&  (!(Math.floor(Math.random() * 6) + 0))) {
        scene.img('images/locations/pavlovsk/school/lunch/hall.jpg');
        // TODO-QSP: dynamic text: As you stop by your locker after lunch, Anushka comes over, rests against the lo...
        scene.text(`As you stop by your locker after lunch, Anushka comes over, rests against the locker next to yours and leans in close to you. "Hey ${((s as any).pcs_nickname || '')}, you wanna come have some fun? The boys brought something special and they're waiting for us in one of the unused classrooms." By the look in her eyes and the way she's acting, you know exactly what she means by "having fun" with the boys.`);
        qspCall(s, 'willpower', 'sex', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Not today', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Not today', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You think about it for a second, but decide that you have other things you need to do, so you shake your head. "Sorry Nush, but I\'ve got some stuff I need to do. Maybe some other time?"');
    scene.text('She just gives a little shrug. "Whatever," she quips before turning and walking off, leaving you wondering if you made the right decision.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lunch', 'break'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Go somewhere private', goto: ['gschool_sex', 'Anush_private2'] },
        ]);
      } else {
        if (((s as any).grupTipe ?? 0) === 4  &&  (!(Math.floor(Math.random() * 4) + 0))) {
          // TODO-QSP: dynamic text: During the break, you''re approached by some of the gopniks. "<<$pcs_nickname>>,...
          scene.text(`During the break, you're approached by some of the gopniks. "${((s as any).pcs_nickname || '')}, come to the bathroom with us so we can have a little fun. You look like you could use a protein snack anyways." A few of them snicker as they put their hands around your arms and try to guide you towards the restrooms.`);
          scene.text('You pull back, slapping their hands away playfully. "Give a girl a chance to consider her options." You already know what you plan to do, but you like to tease them when you get the chance. Should you give them all a quick suck or just leave them high and dry?');
          scene.actions([
            { label: 'I don\'t think so', handler: (st: GameState) => {
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/locations/pavlovsk/school/lunch/buttflash.mp4');
    } else {
      scene.img('images/locations/pavlovsk/school/lunch/nudebflash.mp4');
    }
    scene.text('Shaking your head you say, "Not today boys, maybe some other time." Their expressions are an amusing mixture of anger, disappointment and acceptance. As you walk off you decide to give them a parting shot, lifting your skirt and giving them them a nice view of your ass.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lunch', 'break'] },
    ]);
  } },
            { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    qspCall(st, 'fame', 'pav', 'sex', 2);
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    // TODO-QSP: dynamic text: Your heart is pounding as you let them guide you along. You know perfectly well ...
    scene.text(`Your heart is pounding as you let them guide you along. You know perfectly well that they won't let you go now, no matter what you say. When you arrive at the men's restroom, one of the gopniks stays by the door to keep watch while the others shove you in. The walls are covered in all sorts of crude text. A lot of it involves you. Across the entire wall, a large text reads "${((st as any).pcs_firstname || '')} ${((st as any).pcs_lastname || '')} = ${((st as any).gnikname || '')}".`);
    scene.text('Vitek quickly grabs you by your hair, snarling in your face. "You know why you\'re here, slut. Now get down and get to work."');
    scene.actions([
      { label: 'Suck Vitek\'s dick', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A9');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy ?? 0)] = 1;
    qspCall(st, 'arousal', 'bj', 10, 'sub');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/shared/sex/blowjob/toiletbj.jpg');
    // TODO-QSP: dynamic text: You obediently kneel before him, rubbing your hand over the bulge in Vitek''s sw...
    scene.text(`You obediently kneel before him, rubbing your hand over the bulge in Vitek's sweatpants before pulling out his dick. Clasping your ${((st as any).pc_desc ?? 0)?.['lips'] ?? ''} lips around the head, you run your tongue around it a few times before starting to suck it in a bit deeper. You don't want him to get angry, so you put some effort into it, sometimes licking his balls and taking his cock down your throat without really straining yourself. He mistakes your obedience for enthusiasm, and laughing, he turns to his friends. "Guys just look at this slut going at it! She's loving it!"`);
    scene.text('A few minutes later, Vitek is about to cum and tells you "Good job, cocksucker. I\'m going to drop my load in your mouth now and when I do, you\'re going to swallow it all and lick me clean. If you spill anything, you\'re going to lick it up from the floor. Got that?" You nod up at him and as soon as his cum hits your tongue, you diligently swallow his load, making sure not to let a single drop escape. When you\'re sure he\'s finished, you lick and suck his slowly softening dick clean before tucking it back into his pants for him.');
    // TODO-QSP: dynamic text: "That was great, <<$pcs_nickname>>! I see you''ve certainly earned your reputati...
    scene.text(`"That was great, ${((st as any).pcs_nickname || '')}! I see you've certainly earned your reputation. We'll definitely be doing this more often, maybe next time I'll make sure the other boys can have a turn as well. We'll come find you when we want you. Understood?"`);
    scene.text('You\'re not looking forward to the prospect, but not knowing what else to do, you just nod. After the guys leave the bathroom you quickly have a drink, trying to wash the nasty taste of his cum out of your mouth.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if ((Math.floor(Math.random() * 100) + 1) < 3) {
            scene.img('images/locations/pavlovsk/school/lunch/foodfight.mp4');
            scene.text('While in the cafeteria, you see a girl flirting with a boy as another girl comes up behind her and pours her drink over her head. This quickly turns into a chase and fight that has to be broken up.');
            scene.actions([
              { label: 'Continue your break', goto: ['gschool_lunch', 'break'] },
            ]);
          } else {
            if ((Math.floor(Math.random() * 100) + 1) < 3) {
              qspCall(s, 'gschool_events', 'rand_girl_arg', 1, 1, 0, 1, 0, 0);
              qspCall(s, 'gschool_events', 'rand_girl_arg1', 1, 1, 0, 1, 0, 0);
              scene.img('images/locations/pavlovsk/school/lunch/hallbutt.jpg');
              // TODO-QSP: dynamic text: Two girls are dancing around in the hall and at one point they turn to face the ...
              scene.text(`Two girls are dancing around in the hall and at one point they turn to face the lockers. As they do, ${((s as any).rand_girl || '')} grabs the back of ${((s as any).rand_girl1 || '')} gym pants and pulls them partway down, exposing her naked ass to everyone in the hall. ${((s as any).rand_girl1 || '')} quickly pulls up her pants while swearing at ${((s as any).rand_girl || '')}, with her friend joining in. Before it can go any further, a teacher breaks things up. It's hard to tell if it was friendly messing around or if there's now bad blood.`);
              scene.actions([
                { label: 'Continue your break', goto: ['gschool_lunch', 'break'] },
              ]);
            } else {
              if ((Math.floor(Math.random() * 100) + 1) < 3) {
                qspCall(s, 'gschool_events', 'rand_girl_arg', 1, 1, 0, 0, 0, 0);
                scene.img('images/locations/pavlovsk/school/lunch/lunchsleep.jpg');
                // TODO-QSP: dynamic text: While in the cafeteria, you notice <<$rand_girl>> is laying down on her back on ...
                scene.text(`While in the cafeteria, you notice ${((s as any).rand_girl || '')} is laying down on her back on one of the benches. Her eyes are closed, her chest raises up slowly as she breathes. You think she's fallen asleep, despite all the noise around her. She must really be tired.`);
                scene.actions([
                  { label: 'Continue your break', goto: ['gschool_lunch', 'break'] },
                ]);
              } else {
                if ((Math.floor(Math.random() * 100) + 1) < 3) {
                  scene.img('images/locations/pavlovsk/school/lunch/lunchdhump.jpg');
                  scene.text('While in the cafeteria, you see a couple of the gopnik girls hanging out by one of the tables. One of them is slightly bent over with her skirt hiked almost all the way up to her breasts, her panties and tight ass exposed to anyone who cares to look. The second girl stands behind her with her hands on her hips. She thrusts her hips forward hard, bouncing off the panty-clad ass of the first girl, pretending like she\'s giving her a pounding fuck. Both girls let out loud fake moans with each slap of their bodies.');
                  scene.text('The quite public fake fucking gets laughs from all the other gopniks, while most of the other boys and more than one teacher watch with a gleam of lust in their eyes at their antics. The raunchy display has an obvious effect and many of the boys in the audience do their best to inconspicuously cover their groins with whatever happens to be available. Even a few the girls seem to be lightly rubbing their legs together, their faces slightly flushed.');
                  qspCall(s, 'arousal', 'erotic', 10);
                  scene.actions([
                    { label: 'Continue your break', goto: ['gschool_lunch', 'break'] },
                  ]);
                } else {
                  if ((Math.floor(Math.random() * 100) + 1) < 3) {
                    scene.img('images/locations/pavlovsk/school/lunch/bust.jpg');
                    scene.text('You walk into the bathroom and find two other girls. One of them has her shirt half unbuttoned with her hands on either side of her breasts, looking at them in the mirror. "Do my tits look bigger? I don\'t think they\'re bigger," she says as she turns from side to side, then leans forward a bit, her lips slightly pursed as she evaluates her melons from every angle. She has a fairly impressive bust already, so you don\'t know why she\'s so worried about it.');
                    scene.text('"They look bigger to me. I think they\'re still growing, unlike mine," her friend replies as you wash your hands. You leave the girls to their discussion.');
                    qspCall(s, 'arousal', 'erotic', 5);
                    scene.actions([
                      { label: 'Continue your break', goto: ['gschool_lunch', 'break'] },
                    ]);
                  } else {
                    qspGoto(s, 'gschool_lunch', 'break');
                  }
                }
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

function enterRolanMeet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).rolanmeet ?? 0) < 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    (s as any).rolanmeet = ((s as any).rolanmeet ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet0.jpg');
    scene.text('He looks like he\'s sleeping, so you try waking him. "Hey mister, you shouldn\'t sleep here!"');
    scene.text('He\'s snoring pretty loudly. It\'s a wonder no one else has tried to wake him.');
    scene.text('"Hey… Hey… Wake up!"');
    scene.text('"…I don\'t know anything… No, Miss Volkov, I wasn\'t working that day…"');
    scene.text('Is he talking in his sleep? "SIR!"');
    scene.text('"…you can\'t prove anything, Miss Volkov…"');
    scene.actions([
      { label: 'Poke him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet1.jpg');
    scene.text('You poke him in the shoulder. "Hey… Hey… Mister!" He doesn\'t stir.');
    scene.text('"…Please, Miss Volkov… Leave me alone…"');
    scene.text('You grow frustrated. "What th-?" You try shaking his chair. "Wake up!"');
    scene.text('He continues to snore. "…The staircases are clean… Leave me alone…"');
    scene.text('Finally, you give up. "He must be drunk."');
    scene.actions([
      { label: 'Leave ', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).rolanmeet ?? 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 3;
      qspCall(s, 'stat', '');
      (s as any).rolanmeet = ((s as any).rolanmeet ?? 0) + (1);
      scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet2.jpg');
      scene.text('Once again, you approach the man but he doesn\'t seem to be asleep this time. He\'s eyeing a glass that you\'re sure is filled with something alcoholic. "Hey! You can\'t drink here at school!"');
      scene.text('The man doesn\'t look at you. "Leave me alone, I\'m enjoying my break…"');
      scene.text('You scold him. "I\'m telling you that you can\'t drink here!"');
      scene.text('He starts swirling his glass around. "Miss Volkov, I\'m not doing anything, and besides, I\'ve finished my work. Shouldn\'t you be worrying about yours?"');
      scene.text('You raise your voice. "I\'m <b>NOT</b> Miss Volkov and <b>YOU</b> are giving us a bad example!"');
      scene.text('He suddenly looks up at you. "Wha-?"');
      scene.actions([
        { label: 'Pull his chair out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet3.jpg');
    scene.text('He comically falls on the floor. "Hey! What are you doing!?"');
    scene.text('"You\'re in no position to question me! Why are you drunk? You know you\'re in a school, right? I should call the police!"');
    scene.text('He starts to reach for the chair you pulled out from under him. "Hey! I\'m not drunk and I\'m on a break!"');
    scene.text('"Right, like I believe that. What are you doing here? Are you… homeless?" You start feeling a little bit of remorse.');
    scene.text('"Huh? No, I\'m the janitor! <i>I</i> should be the one reporting <i>you</i>! Who do you think you are, throwing people around like this? I should have a word with Miss Volkov…"');
    scene.text('"Wha-" you start to ask when you notice the name tag on the table. <i>Rolan Matveev: Janitor</i>. Shit! He really does work here! "Oh, uh, I\'m really sorry, sir. I didn\'t see your badge…"');
    scene.text('He stands back up. "Hmph. Fine, you can go, I\'ll let you off with a warning <b>this time</b>. Now, shoo, leave me alone!"');
    scene.text('You feel a little guilty, but still he\'s drinking in a school. "I\'m really sorry, sir, but… why are you drinking at school? If Miss Volkov finds out, you could be fired!"');
    scene.text('"Didn\'t I say \'shoo\'? Anyway, this isn\'t alcohol." He takes a quick swig of his drink.');
    scene.text('With how he\'s been acting and drinking his beverage, you\'re not sure you believe that.');
    scene.text('"Are you mocking me? No one ever wants to talk to me…"');
    scene.text('"No, I\'m just curious about you that\'s all."');
    scene.text('He sighs and laughs. "Oh, okay, I\'m dreaming again. Hmm, the doctor said to let my dreams play out to better understand myself. Alright, <i>Miss Dream</i> this drink is actually…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet4.jpg');
    scene.text('He holds up a bottle you hadn\'t noticed before. "Leninade! The only normal thing this school offers to wake you up!"');
    scene.text('You eye the bottle, then his glass. "That doesn\'t look like what\'s in your glass! The color is completely different!"');
    scene.text('He gazes at you curiously. "Huh? The dream doesn\'t usually talk back… What in the…?"');
    scene.text('"Hey! I\'m not a dream! Why on the Earth would Leninade wake up you? It\'s just a soda."');
    scene.text('"Okay, wow, for a creation of my imagination, you sure are pretty dumb…"');
    scene.text('You slap at his arm.');
    scene.text('"Hey! I really felt that! You are real! But, why are you speaking to me?"');
    scene.text('"Are you for real? If that is Leninade, then why is the color different? You\'re lying; this is alcohol!" You grab the glass and smell it. While it certainly doesn\'t smell good, you don\'t actually smell any alcohol. "Huh, what is this?"');
    scene.text('He snatches his glass back from you. "I already told you, it\'s Leninade. It just has some coffee and tea mixed in with it."');
    scene.text('If he mixes those three drinks together… "You must really need the energy. Why don\'t you eat the food here instead, Mister…" Dammit! You\'ve forgotten his name already!');
    scene.text('"Matveev, Rolan Matveev. I can understand a girl not liking a drink like this. What would you know about needing energy for work, Miss…"');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, <<$pcs_firstname>> <<$pcs_lastname>>… Anyway, you didn''t an...
    scene.text(`"${((st as any).pcs_lastname || '')}, ${((st as any).pcs_firstname || '')} ${((st as any).pcs_lastname || '')}… Anyway, you didn't answer my question: Why don't you eat here like everyone else?"`);
    // TODO-QSP: dynamic text: "Well, Miss <<$pcs_lastname>>, I don''t trust the cook. She never lets me enter ...
    scene.text(`"Well, Miss ${((st as any).pcs_lastname || '')}, I don't trust the cook. She never lets me enter the kitchen."`);
    scene.text('"Well, if something were wrong with the food, you\'d see a lot of people in the hospital. I think you\'re being paranoid." The bell rings. "I have to go. See you around, Mr. Matveev!"');
    // TODO-QSP: dynamic text: "Sure, see you around, Miss <<$pcs_lastname>>."
    scene.text(`"Sure, see you around, Miss ${((st as any).pcs_lastname || '')}."`);
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).rolanmeet ?? 0) === 2) {
        (s as any).minut = ((s as any).minut ?? 0) + 3;
        qspCall(s, 'stat', '');
        (s as any).rolanmeet = ((s as any).rolanmeet ?? 0) + (1);
        scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet5.jpg');
        scene.text('You see Rolan sitting alone at his usual table and decide to approach him. "Hello, Mr. Matveev!"');
        // TODO-QSP: dynamic text: "Huh? Me? Oh…" Rolan raises his eyes to yours. "G-good morning, Miss <<$pcs_last...
        scene.text(`"Huh? Me? Oh…" Rolan raises his eyes to yours. "G-good morning, Miss ${((s as any).pcs_lastname || '')}."`);
        scene.text('"Do you mind if I sit with you? It seems like there\'s plenty of space."');
        scene.text('"Um, hey! Where\'s the camera? Is this another joke?" He sounds a bit agitated.');
        scene.text('You\'re a little confused. "Huh? What are you talking about?"');
        scene.text('"So there\'s no camera?" He quickly looks around. "This isn\'t some kind of joke or prank…?"');
        scene.text('"Mr. Matveev, I don\'t understand. I wanted to apologize for last time."');
        // TODO-QSP: dynamic text: "Oh, okay… Apologies accepted." He sounds somewhat relieved, but still hesitant....
        scene.text(`"Oh, okay… Apologies accepted." He sounds somewhat relieved, but still hesitant. "You can go now, Miss ${((s as any).pcs_lastname || '')}."`);
        scene.text('"You don\'t want me to sit with you? Are you waiting for someone?" You peek around the cafeteria.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet6.jpg');
    scene.text('"Waiting for someone? Me?" You take his answer as a no and sit at the table.');
    scene.text('"I can leave if you really want me to. I just wanted to show you that the school\'s food isn\'t that bad."');
    scene.text('"You can stay, if you want. It\'s just, no one has ever wanted to stay near me."');
    scene.text('"Well, I was rude to you last time. And besides, you need to eat something. Let me go grab some food and I\'ll be right back!"');
    // TODO-QSP: dynamic text: "I don''t know, Miss <<$pcs_lastname>>…"
    scene.text(`"I don't know, Miss ${((st as any).pcs_lastname || '')}…"`);
    scene.text('"What\'s the problem? Come on, it\'s my treat! I\'ll even take a few bites first to show you it\'s okay!"');
    scene.text('Roman stammers, trying to make an excuse.');
    scene.text('"I\'ll be back in a minute!" You walk away from the table and grab some food.');
    scene.text('Roman is still stammering when you get back.');
    scene.text('"Here we go! I\'ll take the first bite!" You savour a little of the lunch. "See? It\'s all good! Now you try a bite!"');
    scene.text('Rolan grabs at a piece with his bare hands.');
    scene.text('"Use the knife and fork, silly! You\'re making a mess."');
    scene.actions([
      { label: 'Help Rolan', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet7.jpg');
    scene.text('"Err, are you sure this is a good idea?"');
    scene.text('"Yes, you don\'t want to make a mess, do you? Here, let me help you." You show Mr. Matveev the proper way to use a knife and fork.');
    scene.text('Rolan takes a few bites of his food. "Oh, this isn\'t so bad, actually."');
    scene.text('"See? Neither of us died. I know it\'s not the best, but it still fills you up and gives you energy."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet8.jpg');
    scene.text('Rolan starts sniffling.');
    scene.text('"Oh, too much onion? Next time we\'ll try something different then."');
    // TODO-QSP: dynamic text: Rolan clears his throat. "…T-Thanks… M-Miss <<$pcs_lastname>>…"
    scene.text(`Rolan clears his throat. "…T-Thanks… M-Miss ${((st as any).pcs_lastname || '')}…"`);
    scene.text('"Take a drink of some water, that should help. I have to go now, but I\'ll see you next time, Mr. Matveev."');
    scene.text('You can\'t help but think that Rolan seems like a lonely man. You make a mental note to try and spend more time with him.');
    scene.actions([
      { label: 'Leave ', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).rolanmeet ?? 0) === 3) {
          (s as any).minut = ((s as any).minut ?? 0) + 3;
          qspCall(s, 'stat', '');
          (s as any).rolanmeet = ((s as any).rolanmeet ?? 0) + (1);
          scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet9.jpg');
          scene.text('You decide to visit Rolan in your free time, but he\'s not at his usual table. You turn and see he\'s mopping the floor. "Hi, Mr. Matveev!"');
          // TODO-QSP: dynamic text: "M-Miss <<$pcs_lastname>>, good morning. You shouldn''t be seen talking to me!"
          scene.text(`"M-Miss ${((s as any).pcs_lastname || '')}, good morning. You shouldn't be seen talking to me!"`);
          scene.text('"Hmm? Why not? I can talk with whoever I like."');
          scene.text('He only stammers.');
          scene.text('"Oh, I guess you\'re busy working?"');
          scene.text('"Well, no. To be honest, I was waiting for the lunch break to finish."');
          scene.text('"Great!" you tell him. "Then grab some lunch, it\'s free for staff you know… I\'ll wait for you at our table."');
          scene.text('He seems surprised. "What, our lunches are free?"');
          scene.text('"Um, yes, they are. Did you not know that? Just grab your food and show your badge to the cashier."');
          scene.text('"No…" Rolan stands in the lunch line apprehensively, as if he still doesn\'t believe you. When he returns with his food, he smiles at you. "Hey, it worked!"');
          scene.text('You laugh lightly. "I told you, didn\'t I?"');
          scene.text('"So, now what?"');
          scene.text('"Uh, we go and eat…"');
          scene.text('"Oh, right…"');
          scene.text('You motion Rolan to follow you. "Come on, Mr. Matveev, or someone will take our table."');
          scene.actions([
            { label: 'Go sit', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet10.jpg');
    scene.text('When you get seated, you notice Rolan is staring at his food. "Is there something wrong, Mr. Matveev?"');
    scene.text('"Uh…"');
    scene.text('"Oh, let me take a bite first." You grab a piece of lettuce and munch on it.');
    scene.text('"Hmm…" Rolan is still staring at the food.');
    scene.text('"What is it, Mr. Matveev?"');
    scene.text('He stares before looking up at you. "Umm, what is this?"');
    scene.text('Did he really just ask you that? "It\'s a salad with walnuts…"');
    scene.text('"I remember walnuts being bigger and that I could crack them with my hands."');
    scene.text('You have to stifle a laugh. "Well, they removed the shells. It would be awkward if you had to crack them while you ate."');
    scene.text('"Hmm? Strange."');
    scene.text('"Okay, you don\'t have all day to eat. And don\'t forget to use your fork."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet11.jpg');
    scene.text('"Use a fork? Again?" He almost sounds like a child.');
    scene.text('"Yes, it\'s not polite to eat with your hands," you explain.');
    scene.text('"Oh, okay." He starts to eat.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet12.jpg');
    scene.text('After a few bites, Rolan looks a bit happier. "It\'s good, right, Mr. Matveev?"');
    scene.text('He continues eating.');
    scene.text('"Well, how is it?"');
    scene.text('He\'s chomping on a few of the walnuts. "Hmm, no tooth loss…"');
    scene.text('"Uh? Ha-ha, okay." He\'s really strange sometimes. "I have to get to class now, but I\'ll see you later, Mr. Matveev!"');
    // TODO-QSP: dynamic text: "Oh, goodbye Miss <<$pcs_lastname>>…"
    scene.text(`"Oh, goodbye Miss ${((st as any).pcs_lastname || '')}…"`);
    scene.actions([
      { label: 'Leave ', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).rolanmeet ?? 0) === 4) {
            (s as any).minut = ((s as any).minut ?? 0) + 3;
            qspCall(s, 'stat', '');
            scene.text('You decide to spend a little of your free time with Rolan. You wonder if his goofy behaviour is due to his loneliness or if that\'s just who he is. You\'ll have to spend a little more time with him to find the answer. "Hmm, where is he today? Maybe it\'s his off day?"');
            scene.text('<i><b>WHOOOSSSHHH!</b></i>');
            scene.text('The wind howls as the door next to you opens.');
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    (st as any).rolanmeet = ((st as any).rolanmeet ?? 0) + (1);
    (st as any).track_loop = 'sound/windhowl.mp3';
    (st as any).volume = 50;
    (st as any).music_loop = 1;
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet13.jpg');
    // TODO-QSP: dynamic text: Rolan walks through the door. "Woah, windy day, isn''t it, Miss <<$pcs_lastname>...
    scene.text(`Rolan walks through the door. "Woah, windy day, isn't it, Miss ${((st as any).pcs_lastname || '')}!"`);
    scene.text('"Uh? Mr. Matveev?"');
    // TODO-QSP: dynamic text: Rolan is struggling to close the door. "Could you lend me a hand, Miss <<$pcs_la...
    scene.text(`Rolan is struggling to close the door. "Could you lend me a hand, Miss ${((st as any).pcs_lastname || '')}? It's hard with this wind…"`);
    scene.text('"Sure!" You rush over to Rolan to offer your help.');
    scene.actions([
      { label: 'Close the door', handler: (st: GameState) => {
    (st as any).music_loop = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet14.jpg');
    // TODO-QSP: dynamic text: You''re both a little out of breath. "Whew, thank you, Miss <<$pcs_lastname>>. E...
    scene.text(`You're both a little out of breath. "Whew, thank you, Miss ${((st as any).pcs_lastname || '')}. Excuse me for a second, the wind messed up my hair."`);
    scene.text('"Okay, Mr. Matveev."');
    scene.text('"I was trying to clean the courtyard outside, but with this wind today it\'s nearly impossible! I\'ll have to try again later."');
    scene.text('"Well, in that case, you should eat something so you have energy for later."');
    scene.text('"Mmm, yes, I think I could eat something."');
    scene.text('"Good! Why don\'t you grab a lunch? I think they\'re serving steak today. I\'ll save you a seat." You find an empty table and wait for Rolan.');
    scene.actions([
      { label: 'Wait for Rolan', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet15.jpg');
    scene.text('You see Rolan with his plate and wave at him. "Mr. Matveev, over here!"');
    // TODO-QSP: dynamic text: "Oh there you are, Miss <<$pcs_lastname>>." He walks over to you and sits down.
    scene.text(`"Oh there you are, Miss ${((st as any).pcs_lastname || '')}." He walks over to you and sits down.`);
    scene.text('You snatch a small piece and \'test\' it for Rolan. It tastes really good, but you know Rolan needs to eat. "It\'s good! Eat so you have your energy for later."');
    scene.text('Rolan starts to eat. With his hands. Again.');
    scene.text('You lightly smack the table. "No! Fork and knife, fork and knife… We are civilized people, Mr. Matveev!"');
    scene.text('"Ehh, right, right."');
    scene.text('He takes his fork and knife and quickly cuts his steak into two pieces before basically swallowing both. Did he even chew either piece?');
    scene.text('"Wow, Mr. Matveev! You must have really enjoyed that steak. Well, since you\'re finished eating so soon, we have some time to talk."');
    scene.text('"Talk? I-I don\'t know… Usually only Miss Volkov talks to me when she gives me the tasks for the day…"');
    scene.text('You pout. "Aww, you don\'t want to talk with me…"');
    // TODO-QSP: dynamic text: "Oh no! No, no, no, no… Miss <<$pcs_lastname>>… I-I… just don''t know what to ta...
    scene.text(`"Oh no! No, no, no, no… Miss ${((st as any).pcs_lastname || '')}… I-I… just don't know what to talk about. I'm not used to speaking with anyone."`);
    scene.text('"Well, what kind of hobbies do you have? What do you do when you\'re done working?"');
    scene.text('"Oh, uh, I go home." Suddenly, the bell rings.');
    scene.actions([
      { label: 'Say goodbye', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet16.jpg');
    scene.text('"I have to go, but we\'ll continue another time if you don\'t mind. Bye, Mr. Matveev!"');
    // TODO-QSP: dynamic text: "Goodbye, Miss <<$pcs_lastname>>."
    scene.text(`"Goodbye, Miss ${((st as any).pcs_lastname || '')}."`);
    scene.actions([
      { label: 'Leave ', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).rolanmeet ?? 0) === 5) {
              (s as any).minut = ((s as any).minut ?? 0) + 3;
              qspCall(s, 'stat', '');
              (s as any).rolanmeet = ((s as any).rolanmeet ?? 0) + (1);
              scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet17.jpg');
              // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>!" Rolan seems cheerful this morning.
              scene.text(`"Miss ${((s as any).pcs_lastname || '')}!" Rolan seems cheerful this morning.`);
              scene.text('You wave at him. "Mr. Matveev! Good morning!"');
              scene.text('He points to an empty seat. "Do you want to sit with me? You always ask me, so I feel it\'s my turn to ask you."');
              scene.text('"Of course, Mr. Matveev. I actually wanted to see how you are." You sit down across from him.');
              // TODO-QSP: dynamic text: "I''m doing pretty well, Miss <<$pcs_lastname>>. I feel full of energy today!"
              scene.text(`"I'm doing pretty well, Miss ${((s as any).pcs_lastname || '')}. I feel full of energy today!"`);
              scene.text('"I see that." You notice him holding something. It looks like food. "What have you got there? It doesn\'t look like something they were serving today."');
              scene.text('"Oh this? I\'ve brought something from home, a sandwich I made with my own hands! I\'d like you to try some of it! It\'s delicious… Not that what they serve here isn\'t good."');
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet18.jpg');
    scene.text('Rolan is actually eating his sandwich with a fork and knife. You find it somewhat amusing. "Mr. Matveev, it\'s okay to eat a sandwich with your hands!"');
    scene.text('He shakes his head. "No, no, we are civilized people, remember?"');
    scene.text('You laugh. "Yes, Mr. Matveev, I remember. But I assure you, it\'s okay this time."');
    // TODO-QSP: dynamic text: "Okay, if you say so, Miss <<$pcs_lastname>>." He tears off a piece and hands it...
    scene.text(`"Okay, if you say so, Miss ${((st as any).pcs_lastname || '')}." He tears off a piece and hands it towards you. "Please, have a bite. It's safe, I promise!"`);
    scene.text('You\'re a bit hesitant, but you don\'t want to offend Rolan.');
    scene.actions([
      { label: 'Take a bite', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'mood', 'lower', 'small');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet19.jpg');
    scene.text('You almost retch after taking a bite. What the hell is in this? It\'s a medley of different flavors, none of which should go together. You also taste… <i>chewing gum</i>?');
    scene.text('You attempt to gather yourself before speaking. "…T-Thanks. So, um, last time we were talking about what you do in your free time?"');
    scene.text('Rolan takes back his sandwich and continues to eat, oblivious to your disgust. "Yes, when I get off work, I go home. Sometimes I like to go for a walk or do chores, maybe take a bath. Do you want another bite?" He offers you the \'sandwich\' again.');
    scene.text('"Er, no thanks, Mr. Matveev…" Rolan stops chewing.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet20.jpg');
    scene.text('"Was there too much garlic? You can pinch your nose if it bothers you…"');
    scene.text('You really don\'t want to insult him, so you make up an excuse. "No, no. I\'m, uh, I\'m going to be a model some day, so I need to watch my figure, you know?"');
    scene.text('"Oh, is there a class you take for that? I wasn\'t aware." He actually fell for that?');
    scene.text('You suddenly feel your stomach lurch, - the sandwich is making a return trip. "I\'m sorry, Mr. Matveev, but I have to go. I just remembered something I have to do!"');
    // TODO-QSP: dynamic text: Rolan continues eating. "Oh? Goodbye, Miss <<$pcs_lastname>>!"
    scene.text(`Rolan continues eating. "Oh? Goodbye, Miss ${((st as any).pcs_lastname || '')}!"`);
    scene.actions([
      { label: 'Run', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolansoup0.jpg');
    scene.text('You race to the restroom and find an empty stall just in time. If you thought it tasted awful the first time…');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
              ]);
            } else {
              if (((s as any).rolanmeet ?? 0) === 6) {
                (s as any).minut = ((s as any).minut ?? 0) + 3;
                qspCall(s, 'stat', '');
                (s as any).rolanmeet = ((s as any).rolanmeet ?? 0) + (1);
                scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet21.jpg');
                // TODO-QSP: dynamic text: You spot Rolan and he''s already waving you over. "Miss <<$pcs_lastname>>, good ...
                scene.text(`You spot Rolan and he's already waving you over. "Miss ${((s as any).pcs_lastname || '')}, good morning! I'll get our lunch today!"`);
                scene.text('"NO! Um, I mean, good morning to you as well, Mr. Matveev!" You remember your last lunch together. "Let\'s keep our meal light today, yeah?"');
                scene.text('"Uh?" He looks a little perplexed.');
                scene.text('You turn him around and gently push him towards the tables. "Yes, why don\'t you find us a spot to sit and I\'ll grab our food!"');
                // TODO-QSP: dynamic text: "Uh, okay, Miss <<$pcs_lastname>>…"
                scene.text(`"Uh, okay, Miss ${((s as any).pcs_lastname || '')}…"`);
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet22.jpg');
    scene.text('You opt to grab two ice cream cones instead. Surely Rolan can\'t mess that up?');
    scene.text('He looks at you a bit confused, "Hmm, I didn\'t know you could have ice cream for lunch. Is this beef flavored?"');
    scene.text('You laugh at Rolan for a few seconds. "Uh? No, silly… When would they ever… Oh, I see, you\'re mocking me!"');
    scene.text('Mr. Matveev quickly eats his ice cream. If you ate ice cream that fast, you\'d definitely have a brain freeze…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet23.jpg');
    scene.text('"Wow, that was fast! I guess you really liked it? Oh, but now you\'re a little dirty…"');
    scene.text('"Huh?"');
    scene.actions([
      { label: 'Uh?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet24.jpg');
    scene.text('Rolan looks down. "Oh! You mean my jacket?"');
    scene.text('You stare at Mr. Matveev. "How do you eve- Never mind. I assume you enjoyed that?"');
    scene.text('"It was… sweet tasting. What flavor was it?"');
    scene.text('"It was white… I assume it was vanilla."');
    scene.text('"Vanilla? I think I\'ve heard of that before. Tastes different from beef though. Very sweet."');
    scene.text('You keep yourself from shuddering at the thought of meat flavored ice cream. "I\'m no expert on ice cream flavors, but I think the sweetness comes from the sugar…"');
    scene.text('"Sugar, huh? I should add that to my foods…" You don\'t doubt he would.');
    scene.text('"I\'m happy you liked it." The bell then rings. "Oh! I gotta run. Goodbye, Mr. Matveev. I\'ll see you next time!"');
    // TODO-QSP: dynamic text: You stand up. "Rolan. You call me Rolan," he says to you. "See you soon, Miss <<...
    scene.text(`You stand up. "Rolan. You call me Rolan," he says to you. "See you soon, Miss ${((st as any).pcs_lastname || '')}."`);
    // TODO-QSP: dynamic text: "Oh sure… Rolan. You can call me <<$pcs_nickname>>."
    scene.text(`"Oh sure… Rolan. You can call me ${((st as any).pcs_nickname || '')}."`);
    // TODO-QSP: dynamic text: "No, that wouldn''t be polite for a man to do to a woman. Goodbye, Miss <<$pcs_l...
    scene.text(`"No, that wouldn't be polite for a man to do to a woman. Goodbye, Miss ${((st as any).pcs_lastname || '')}."`);
    scene.text('"Ah, okay. Goodbye Mr. Matv… I mean, Rolan!"');
    scene.actions([
      { label: 'Leave ', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
                ]);
              } else {
                if (((s as any).rolanmeet ?? 0) === 7) {
                  (s as any).minut = ((s as any).minut ?? 0) + 3;
                  qspCall(s, 'stat', '');
                  (s as any).rolanmeet = ((s as any).rolanmeet ?? 0) + (1);
                  scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet25.jpg');
                  // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>! It''s a pleasure to see you again. Having a nice day?"
                  scene.text(`"Miss ${((s as any).pcs_lastname || '')}! It's a pleasure to see you again. Having a nice day?"`);
                  scene.text('"Oh, the same as always. Good morning, Mr… uh, Rolan. It\'s a bit odd that I can call you by your first name, but you can\'t do the same."');
                  scene.text('"I told you, it\'s not polite for a man to address a lady in such a way. Besides," he smiles, "calling me \'Rolan\' helps me feel a bit younger."');
                  // TODO-QSP: dynamic text: You look down at your feet. "Well ''Miss <<$pcs_lastname>>'' makes me feel old…"
                  scene.text(`You look down at your feet. "Well 'Miss ${((s as any).pcs_lastname || '')}' makes me feel old…"`);
                  scene.text('He shakes his head. "Nonsense! Women cannot be old!"');
                  scene.text('You giggle. "Oh, well I\'ll take it as a compliment then, Rolan!"');
                  // TODO-QSP: dynamic text: "It''s simply the truth, Miss <<$pcs_lastname>>."
                  scene.text(`"It's simply the truth, Miss ${((s as any).pcs_lastname || '')}."`);
                  scene.text('"Tell me Rolan, have you had lunch yet? We could eat together?"');
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet26.jpg');
    // TODO-QSP: dynamic text: "I''m sorry, Miss <<$pcs_lastname>>. Miss Volkov has increased my work duties an...
    scene.text(`"I'm sorry, Miss ${((st as any).pcs_lastname || '')}. Miss Volkov has increased my work duties and I'm afraid I can only eat after I'm done working…" He sounds pretty disappointed.`);
    scene.text('"Aww," you return his disappointment. "I was enjoying our lunch talks."');
    // TODO-QSP: dynamic text: "As was I, Miss <<$pcs_lastname>>, but unfortunately that''s my job. I can''t sa...
    scene.text(`"As was I, Miss ${((st as any).pcs_lastname || '')}, but unfortunately that's my job. I can't say no to Miss Volkov." He stares down at his mop.`);
    scene.text('"Can\'t you do something? Surely, you do enough work for the school already?" You\'re almost pleading with him now.');
    scene.text('"No, it\'s perfectly legal. Plus, I\'m getting paid more for the extra work."');
    scene.text('"Oh, well." You think it over. "Maybe I could come by and see you after school?"');
    // TODO-QSP: dynamic text: "I don''t know, Miss <<$pcs_lastname>>. A young girl visiting an older man outsi...
    scene.text(`"I don't know, Miss ${((st as any).pcs_lastname || '')}. A young girl visiting an older man outside of school, people might talk…"`);
    scene.text('"What\'s wrong with a visit from a friend?"');
    scene.text('"I-I don\'t know…" he stammers.');
    scene.text('"Come on… where do you live? I\'ll stop by sometime and we could have tea?"');
    scene.text('"Maybe you\'re right."');
    scene.actions([
      { label: 'Give him a sheet of paper', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet27.jpg');
    scene.text('"Great! Here, write down your address, Rolan! I\'ll come visit you sometime. Just keep some water heated up for our tea!"');
    scene.text('He eyes the paper, "Err, okay, water for the tea. But are you sure about this?"');
    scene.text('"Of course! We\'re friends and I want to know you better."');
    scene.text('"Sure, we\'re friends. I like that! Okay, but…"');
    scene.text('"No buts, Rolan! Now write your address down, I have to get to class!"');
    scene.text('"Oh, uh, right." Rolan writes down his address and hands you the paper. "Here\'s where I live. I know it\'s not the greatest place…"');
    scene.text('You look over the address. It\'s on the first floor of the apartment complex west of yours.');
    scene.text('"Oh, we live in the same area! Don\'t worry, I know how awful the complexes are. I really have to go now. Bye Rolan!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/rolan/school/rolanmeet28.jpg');
    // TODO-QSP: dynamic text: "Goodbye, Miss <<$pcs_lastname>>! Don''t be late for your class… Bah, water for ...
    scene.text(`"Goodbye, Miss ${((st as any).pcs_lastname || '')}! Don't be late for your class… Bah, water for the tea. Kids this days!"`);
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
                  ]);
                }
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'lunch':
      enterLunch(s, scene);
      break;
    case 'cafeteria':
      enterCafeteria(s, scene);
      break;
    case 'break':
      enterBreak(s, scene);
      break;
    case 'marcus_event':
      enterMarcusEvent(s, scene);
      break;
    case 'events':
      enterEvents(s, scene);
      break;
    case 'rolan_meet':
      enterRolanMeet(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_lunch: LocationDef = {
  name: 'gschool_lunch',
  title: 'Cafeteria',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
