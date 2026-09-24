import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'katja_dorm', 'start');
  (s as any).locclass = 'livingr';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A14'] ?? ''} 'S Dorm Room</b></center>`);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dorm_room.jpg');
  // TODO-QSP: dynamic text: 'The dorm room has two beds. The one on the left belongs to ' + iif( sofiaQW['kn...
  scene.text('The dorm room has two beds. The one on the left belongs to ' + ((((s as any).sofiaQW ?? 0)?.['know'] === 0) ? ('Katja\'s roommate') : ('Sofia')) + ' while the one on the right is Katja\'s. Above Katja\'s bed is a full bookcase, and the wall is plastered with posters and notes.');
  // TODO-QSP: dynamic text: 'Her table is likewise full of stuff; in the middle of it sits her laptop. ' + i...
  scene.text('Her table is likewise full of stuff; in the middle of it sits her laptop. ' + ((((s as any).sofiaQW ?? 0)?.['know'] === 0) ? ('Her roommate\'s') : ('Sofia')) + ' side of the room is a lot less cluttered.');
  if (((s as any).locat ?? 0)?.['katja'] === 31) {
    scene.text('Katja is sitting at her desk.');
    scene.actions([
      { label: 'Talk to Katja', goto: ['katja_dorm', 'talk'] },
    ]);
  } else {
    if (((s as any).locat ?? 0)?.['katja'] === 20) {
      scene.text('Katja is asleep, so you should not disturb her.');
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 22) {
        scene.text('Katja is getting dressed and doing her makeup. She doesn\'t want to be disturbed right now.');
      } else {
        if (((s as any).locat ?? 0)?.['katja'] === 24) {
          if (((s as any).minut ?? 0) < 50) {
            scene.text('Katja is preparing to go to class, collecting the things she needs.');
            scene.actions([
              { label: 'Talk to Katja', goto: ['katja_chat', 'chat'] },
            ]);
          } else {
            scene.text('Katja is heading out the door to class and has no time to talk.');
          }
        } else {
          if (((s as any).locat ?? 0)?.['katja'] === 35) {
            scene.text('Katja is moving around getting dressed up, seemingly preparing for a night out.');
            scene.actions([
              { label: 'Talk to Katja', goto: ['katja_party', 'going_out'] },
            ]);
          } else {
            if (((s as any).locat ?? 0)?.['katja'] === 51) {
              scene.text('Katja is moving around the room while setting up her laptop.');
              scene.actions([
                { label: 'Talk to Katja', goto: ['katja_dorm', 'movie_talk1'] },
              ]);
            } else {
              if (((s as any).locat ?? 0)?.['katja'] === 52) {
                scene.text('Katja is sitting on her bed, having set up her laptop so she can watch a film.');
                scene.actions([
                  { label: 'Talk to Katja', goto: ['katja_dorm', 'movie_talk2'] },
                ]);
              } else {
                scene.text('Katja is not in her room.');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave Katja\'s dorm room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
  ]);
  scene.build();
}

function enterTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A14'] ?? ''} ${((s as any).npc_lastname ?? 0)?.['A14'] ?? ''}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
    if (((s as any).katjaQW ?? 0)?.['horny'] < 20) {
      scene.text('Katja looks calm and stoic.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['horny'] < 40) {
        scene.text('Katja looks at you with a naughty twinkle in her eyes.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['horny'] < 60) {
          scene.text('Katja looks at you with a faint blush as she smiles at you mischievously.');
        } else {
          if (((s as any).katjaQW ?? 0)?.['horny'] < 80) {
            scene.text('Katja is blushing fairly obviously and looks at you longingly.');
          } else {
            scene.text('Katja\'s face is flushed bright red, and her chest is heaving from her heavy breathing. She\'s idly rubbing her thighs against one another.');
          }
        }
      }
    }
  } else {
    scene.text('Katja looks at you with a smile.');
  }
  if (((s as any).katjaQW ?? 0)?.['dress_borrowed'] === 1) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['dress_borrowed'] = 0;
    scene.text('You hand Katja the dress you borrowed and say "Thanks for borrowing this." "It was nothing. That\'s what friends are for." she replied.');
  }
  if (((s as any).locat ?? 0)?.['katja'] !== 31) {
    if (((s as any).locat ?? 0)?.['katja'] === 20) {
      scene.text('"I\'m off to bed now. Talk another time?" Katja asks as she shows you out.');
      scene.actions([
        { label: 'Leave Katja\'s dorm room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
      ]);
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 29) {
        scene.text('"I need to do some studying at the library. Care to join me?" Katja asks.');
        if (((s as any).week ?? 0) === 4) {
          if (((s as any).npc_had_sex ?? 0)?.['A14']) {
            qspCall(s, 'willpower', 'misc', 'force', 'easy');
          } else {
            if (((s as any).katjaQW ?? 0)?.['slut'] < 50) {
              qspCall(s, 'willpower', 'misc', 'force', 'hard');
            } else {
              qspCall(s, 'willpower', 'misc', 'force');
            }
          }
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Convince Katja to stay here and watch a movie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Convince Katja to stay here and watch a movie', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    ((st as any).locat = (st as any).locat ?? {})['katja'] = 52;
    ((st as any).locat = (st as any).locat ?? {})['katja_rand2'] = ((st as any).daystart ?? 0);
    ((st as any).locat = (st as any).locat ?? {})['katja_save2'] = ((st as any).locat ?? 0)?.['katja'];
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Come on, let\'s watch a movie instead! You can always study tomorrow. Why do you even need to study anyway? You\'re so smart that you know everything!" you say.');
    scene.text('"That\'s not true. I only do so well in class because I study a lot," Katja answers.');
    scene.text('"Please?" you plead, trying to make puppy eyes at Katja, who has a hard time not laughing.');
    scene.text('"Okay, just this once." she finally relents. "Go prepare some popcorn while I set up my laptop."');
    scene.text('You go to the kitchen and prepare the popcorn before you both settle down on her bed and watch the film Katja has selected.');
    scene.actions([
      { label: 'Watch the movie', goto: ['katja_dorm', 'watch_movie'] },
    ]);
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Go to the library with Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_uni', 'library2'] },
          { label: 'Say no and leave Katja\'s dorm room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
        ]);
      } else {
        if (((s as any).locat ?? 0)?.['katja'] === 37) {
          qspGoto(s, 'katja_party', 'going_out_talk');
        } else {
          if (((s as any).locat ?? 0)?.['katja'] === 51) {
            qspGoto(s, 'katja_dorm', 'movie_talk1');
          } else {
            if (((s as any).locat ?? 0)?.['katja'] === 52) {
              qspGoto(s, 'katja_dorm', 'movie_talk2');
            } else {
              scene.text('"Sorry, but I have to run now. See you later," she says.');
              scene.actions([
                { label: 'Leave Katja\'s dorm room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
              ]);
            }
          }
        }
      }
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1  &&  ((s as any).artemQW ?? 0)?.['artembrokenheart'] === 1) {
      qspGoto(s, 'KatjaHomeTalk', 'Artem_break_up_talk');
    } else {
      if ((((s as any).katjaQW ?? 0)?.['lazer_pussy_talk'] === 0  ||  (((s as any).katjaQW ?? 0)?.['lazer_pussy_talk'] === 2  &&  ((s as any).katjaQW ?? 0)?.['knows_sex'] === 1  &&  (Math.floor(Math.random() * 5) + 0) === 0))  &&  ((s as any).katjaQW ?? 0)?.['lazer_pussy'] === 0  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 50  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 40  &&  ((s as any).katjaQW ?? 0)?.['lazar_uni_meet'] === 1  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
        qspGoto(s, 'Katja_dorm', 'lazar_pussy_talk');
      } else {
        if (((s as any).katjaQW ?? 0)?.['lazer_anal_talk'] === 0  &&  ((s as any).katjaQW ?? 0)?.['lazer_anal'] === 0  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 60  &&  ((s as any).katjaQW ?? 0)?.['lazar_uni_meet'] === 1  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 40  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
          qspGoto(s, 'Katja_dorm', 'lazar_anal_talk');
        } else {
          if (Math.min(((s as any).katjaQW ?? 0)?.['horny'], 100) > (Math.floor(Math.random() * 361) + 40)  ||  (((s as any).katjaQW ?? 0)?.['QWstage'] === 2  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  Math.min(((s as any).katjaQW ?? 0)?.['horny'], 100) > (Math.floor(Math.random() * 121) + 40))  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
            if (((s as any).katjaQW ?? 0)?.['lazer_anal'] + ((s as any).katjaQW ?? 0)?.['lazer_pussy'] >= 2  &&  ((s as any).katjaQW ?? 0)?.['lazar_day'] !== ((s as any).daystart ?? 0)  &&  (Math.floor(Math.random() * 7) + 0) === 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
              qspGoto(s, 'katja_dorm', 'lazar_kiss');
            } else {
              if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
                qspGoto(s, 'KatjaHomeTalk', 'hornykiss');
              } else {
                qspGoto(s, 'KatjaHomeTalk', 'tender_kiss');
              }
            }
          } else {
            if (((s as any).katjaQW ?? 0)?.['coke_day_ask'] !== ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['coke_day'] !== ((s as any).daystart ?? 0)  &&  (Math.floor(Math.random() * 7) + 6) <= ((s as any).katjaQW ?? 0)?.['coke_stage']) {
              qspGoto(s, 'katja_dorm', 'cocain_offer');
            } else {
              if (((s as any).npc_pregtalk ?? 0)?.['A14'] === 0  &&  (((s as any).KatjaConflict ?? 0) === 0  ||  ((s as any).KatjaConflict ?? 0) === 2)  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
                if (((s as any).kid ?? 0) > 0) {
                  qspCall(s, 'stat', '');
                  (s as any).minut = ((s as any).minut ?? 0) + 5;
                  (s as any).KatjaConflict = 1;
                  (s as any).KatConCheck = ((s as any).daystart ?? 0);
                  scene.text('"You\'re pregnant again?" Her face turns red, and she glares at you with an intensity you\'ve never seen before. "After everything, you still didn\'t trust me enough to tell me?"');
                  scene.text('You try to speak up, but she folds her arms and turns her back to you.');
                  scene.text('"I thought there was something special between us…" Something wet glistens on her cheek, which she wipes away dismissively. "Get out. I don\'t want to see you right now."');
                } else {
                  if (((s as any).knowKatjaPreg ?? 0) === 1) {
                    qspCall(s, 'stat', '');
                    (s as any).minut = ((s as any).minut ?? 0) + 5;
                    (s as any).KatjaConflict = 1;
                    (s as any).KatConCheck = ((s as any).daystart ?? 0);
                    scene.text('"Are you pregnant?" Katja looks at you, betrayal in her eyes. "Why didn\'t you tell me? I thought we were closer than that. I told you when I got pregnant. I need to think. We\'ll talk later."');
                  } else {
                    (s as any).minut = ((s as any).minut ?? 0) + 5;
                    (s as any).KatjaConflict = 1;
                    (s as any).KatConCheck = ((s as any).daystart ?? 0);
                    scene.text('"Are you pregnant? Why didn\'t you tell me? I thought we were closer than that. I need to think. We\'ll talk later."');
                  }
                }
                scene.actions([
                  { label: 'Leave Katja\'s dorm room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
                ]);
              } else {
                qspGoto(s, 'katja_dorm', 'chat');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave Katja\'s dorm room', handler: (st: GameState) => {
    if (((st as any).sofiaQW ?? 0)?.['know'] === 0  &&  ((st as any).university ?? 0)?.['semester_week'] > 0) {
      qspGoto(st, 'katja_dorm', 'sofia_meet');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 2;
      qspGoto(st, 'uni_dorm', 'second_floor');
    }
  } },
  ]);
  scene.build();
}

function enterChat(s: GameState, scene: SceneBuilder): void {
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A14'] ?? ''} ${((s as any).npc_lastname ?? 0)?.['A14'] ?? ''}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
    if (((s as any).katjaQW ?? 0)?.['horny'] < 20) {
      scene.text('Katja looks calm and stoic.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['horny'] < 40) {
        scene.text('Katja looks at you with a naughty twinkle in her eyes.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['horny'] < 60) {
          scene.text('Katja looks at you with a faint blush as she smiles at you mischievously.');
        } else {
          if (((s as any).katjaQW ?? 0)?.['horny'] < 80) {
            scene.text('Katja is blushing fairly obviously and looks at you longingly.');
          } else {
            scene.text('Katja\'s face is flushed bright red, and her chest is heaving from her heavy breathing. She\'s idly rubbing her thighs against one another.');
          }
        }
      }
    }
  } else {
    scene.text('Katja looks at you with a smile.');
  }
  // TODO-QSP: $func('npc_reactions', 'general', 'A14')
  if (((s as any).katjaQW ?? 0)?.['boy_lie'] === 1) {
    scene.actions([
      { label: 'Ask Katja who she likes', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${((st as any).npc_firstname ?? 0)?.['A14'] ?? ''} ${((st as any).npc_lastname ?? 0)?.['A14'] ?? ''}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"So, who\'s the boy you mentioned being interested in earlier?" you ask curiously.');
    if (((st as any).katjaQW ?? 0)?.['slut'] >= 60  &&  ((st as any).npc_had_sex ?? 0)?.['A14']  &&  ((st as any).katjaQW ?? 0)?.['horny'] > 40) {
      scene.text('"Nobody, you dummy!" she laughs. "It was just an excuse so you would kiss me!"');
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['boy_lie'] = 2;
      scene.actions([
        { label: 'Continue', goto: ['KatjaHomeTalk', 'hornykiss'] },
      ]);
    } else {
      scene.text('"That\'s my secret, and I\'m not going to tell you!" she says with a wink.');
      scene.actions([
        { label: 'Continue', goto: ['katja_dorm', 'talk'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['slut'] >= 50  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 80  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
    scene.actions([
      { label: 'Lick Katja', goto: ['KatjaEvDin', 'kuni_dom'] },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  (((s as any).katjaQW ?? 0)?.['lazer_anal'] + ((s as any).katjaQW ?? 0)?.['lazer_pussy']) > 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).katjaQW ?? 0)?.['horny'] > 80  &&  ((s as any).katjaQW ?? 0)?.['Lazar_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
    scene.actions([
      { label: 'Suggest that you call Lazar', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['Lazar_day'] = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('Katja looks very aroused, so you suggest calling Lazar to see if he wants to have some fun with you.');
    scene.text('"Okay. Let\'s call him," she says while looking very excited.');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((st as any).katjaQW ?? 0)?.['anal_quest'] >= 3  &&  (!(Math.floor(Math.random() * 7) + 0))) {
      // TODO-QSP: dynamic text: 'You call him, and he tells you that Ivan is over at his place, but ' + iif(katj...
      scene.text('You call him, and he tells you that Ivan is over at his place, but ' + ((((st as any).katjaQW ?? 0)?.['Lazar_Ivan_4some'] === 0) ? ('he\'s sure that Ivan would like to join the fun as long as you\'re willing to take it in the ass') : ('you had a lot of fun last time and he\'s sure Ivan is up for it again')) + '.');
      if (((st as any).katjaQW ?? 0)?.['Lazar_Ivan_4some'] === 0) {
        if (((st as any).katjaQW ?? 0)?.['simultanous_boys'] >= 2  ||  ((st as any).katjaQW ?? 0)?.['slut'] >= 80  ||  (((st as any).katjaQW ?? 0)?.['ivan_anal'] === 1  &&  ((st as any).katjaQW ?? 0)?.['slut'] >= 70)) {
          (st as any).minut = ((st as any).minut ?? 0) + 5;
          // TODO-QSP: dynamic text: '"Sounds fun," Katja says. "' + iif(katjaQW['simultanous_boys'] >= 2, 'It''ll be...
          scene.text('"Sounds fun," Katja says. "' + ((((st as any).katjaQW ?? 0)?.['simultanous_boys'] >= 2) ? ('It\'ll be fun to have sex with several boys again') : ('I think it\'s time for me to try sex with two boys at once')) + '."');
          scene.text('You tell Lazar that you\'ll come over, and when you turn back towards Katja, she has something in her hands. "Look what I have," she says and shows you two almost identically black bodysuits.');
          scene.text('"I think it would be sexy if we wear these matching bodysuits," she says. You agree and the two of you quickly change into the bodysuits before you head out the door and start walking towards Lazar\'s house.');
          scene.actions([
            { label: 'Go to Lazar\'s place', goto: ['katja_uni_sex', 'lazar_ivan_katja_uni_4some'] },
          ]);
        } else {
          scene.text('Katja suddenly looks nervous when you tell her that Ivan is at Lazar\'s place. "I… I don\'t think… I think… It\'s best if we wait for another time. I\'m not ready for two guys at the same time."');
          scene.text('You accept Katja\'s decision and tell Lazar that you won\'t be coming over. He\'s a little disappointed, but tells you to call him another time.');
          scene.actions([
            { label: 'Continue', goto: ['katja_dorm', 'talk'] },
          ]);
        }
      } else {
        (st as any).minut = ((st as any).minut ?? 0) + 5;
        scene.text('Katja readily agrees to also include Ivan in the fun and you tell Lazar you\'ll come over. Katja then runs to her drawer and pulls out the black bodysuits you wore last time and suggests you do it again since it seemed to turn the boys on.');
        scene.text('You agree and the two of you quickly change into the bodysuits before you head out the door and start walking towards Lazar\'s house.');
        scene.actions([
          { label: 'Go to Lazar\'s place', goto: ['katja_uni_sex', 'lazar_ivan_katja_uni_4some'] },
        ]);
      }
    } else {
      scene.text('You call him, and he quickly agrees to have you over.');
      scene.actions([
        { label: 'Go to Lazar\'s place', goto: ['katja_uni_sex', 'lazar_katja_uni_3some'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] === 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 6) {
    scene.actions([
      { label: 'Tell Katja that you think she should use birth control', goto: ['KatjaHomeTalk', 'preventation_talk'] },
    ]);
  }
  if (((s as any).npc_pregtalk ?? 0)?.['A14'] === 0  &&  (((s as any).KatjaConflict ?? 0) === 0  ||  ((s as any).KatjaConflict ?? 0) === 2)  &&  ((s as any).knowpreg ?? 0) === 1  &&  ((s as any).pregChem ?? 0) > 0  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 0) {
    if (((s as any).kid ?? 0) > 0) {
      scene.actions([
        { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${((st as any).npc_firstname ?? 0)?.['A14'] ?? ''} ${((st as any).npc_lastname ?? 0)?.['A14'] ?? ''}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Katja, I need to tell you something," you say. "I\'m pregnant again."');
    scene.text('Her face lights up. "Congratulations! This is even more exciting than last time! Every time you tell me you\'re pregnant, I feel better about my pregnancy. Hell, that\'s probably why you keep getting pregnant, isn\'t it?" she giggles jokingly.');
    scene.actions([
      { label: 'Next', goto: ['KatjaHomeTalk', 'katjaknows1'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).knowKatjaPreg ?? 0) === 1) {
        scene.actions([
          { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    scene.text(`<center><b>${((st as any).npc_firstname ?? 0)?.['A14'] ?? ''} ${((st as any).npc_lastname ?? 0)?.['A14'] ?? ''}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"What?! That\'s so exciting! You didn\'t get pregnant to be like me?" she asks playfully.');
    scene.actions([
      { label: 'Next', goto: ['KatjaHomeTalk', 'katjaknows'] },
    ]);
  } },
        ]);
      } else {
        if ((!((s as any).KatjaPreg ?? 0))) {
          scene.actions([
            { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    scene.text(`<center><b>${((st as any).npc_firstname ?? 0)?.['A14'] ?? ''} ${((st as any).npc_lastname ?? 0)?.['A14'] ?? ''}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"What? That\'s so exciting!"');
    scene.actions([
      { label: 'Next', goto: ['KatjaHomeTalk', 'katjaknows'] },
    ]);
  } },
          ]);
        }
      }
    }
  }
  if (((s as any).npc_pregtalk ?? 0)?.['A14'] === 0  &&  ((s as any).KatjaConflict ?? 0) === 1  &&  ((s as any).KatConCheck ?? 0) !== ((s as any).daystart ?? 0)) {
    if ((!((s as any).kid ?? 0))) {
      scene.actions([
        { label: 'Apologize', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).KatjaConflict = 2;
    scene.text('"I\'m really sorry I didn\'t tell you sooner. I was just so embarrassed."');
    scene.text('Katja sighs. "I understand. I just want you to know you can trust me, and it hurts to realize that you don\'t."');
    scene.text('"I do trust you. I promise I won\'t keep anything like this from you in the future."');
    scene.text('"Good. Now let\'s get down to business."');
    scene.actions([
      { label: 'Next', goto: ['KatjaHomeTalk', 'katjaknows'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Apologize', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).KatjaConflict = 2;
    scene.text('"I\'m really sorry I didn\'t tell you sooner. I was just so embarrassed it happened again."');
    scene.text('Katja sighs. "I understand. I just want you to know you can trust me, and it hurts to realize that you don\'t."');
    scene.text('"I do trust you. I promise I won\'t keep anything else like this from you in the future."');
    scene.text('"Good. Now let\'s get down to business."');
    scene.actions([
      { label: 'Next', goto: ['KatjaHomeTalk', 'katjaknows1'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).katjaQW ?? 0)?.['boy_block'] === 1) {
    scene.actions([
      { label: 'Tell Katja you have decided that boys are fun after all <br> [+$func(\'wrap\', \'neg\', \'(Katja will start ...]', goto: ['KatjaHomeTalk', 'boy_yes'] },
    ]);
  }
  if (((s as any).artemQW ?? 0)?.['artem_open_relationship'] === 1  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 1  &&  ((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1) {
    scene.actions([
      { label: 'Tell Katja, that you an Artem are in an open relationship', goto: ['KatjaHomeTalk', 'artem_opne_relationship'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Chat with Katja', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${((st as any).npc_firstname ?? 0)?.['A14'] ?? ''} ${((st as any).npc_lastname ?? 0)?.['A14'] ?? ''}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if (((Math.floor(Math.random() * 101) + 0) > ((st as any).katjaQW ?? 0)?.['horny'] + Math.min(((st as any).katjaQW ?? 0)?.['slut'] / 2, 50))  ||  ((st as any).katjaQW ?? 0)?.['sex_clossedness'] === 2) {
      scene.text('Katja talks about her university subjects, cosmetics, the latest fashion trends and other things she considers very important.');
      scene.actions([
        { label: 'Continue', goto: ['katja_dorm', 'talk'] },
      ]);
    } else {
      qspCall(st, 'katja_sex_talk', 'Sextalk');
    }
  } },
    { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
    { label: 'Leave Katja\'s dorm room', handler: (st: GameState) => {
    if (((st as any).sofiaQW ?? 0)?.['know'] === 0  &&  ((st as any).university ?? 0)?.['semester_week'] > 0) {
      qspGoto(st, 'katja_dorm', 'sofia_meet');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 2;
      qspGoto(st, 'uni_dorm', 'second_floor');
    }
  } },
  ]);
  scene.build();
}

function enterSofiaMeet(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  ((s as any).sofiaQW = (s as any).sofiaQW ?? {})['know'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big260.jpg');
  scene.text('Just as you\'re about to leave, the door opens and a girl walks in.');
  scene.text('"Hi, Katja! I\'m home early since Maxim suddenly had a meeting with one of his professors. I swear that he\'s doing so much to study hard; almost too much. Always trying to meet with his teachers. I told him that they might see it as…" She suddenly stops, having noticed you. "Oh, you have a guest."');
  // TODO-QSP: dynamic text: '"Sofia, this is <<$pcs_nickname>>, my ' + iif($university['enrolled_in'] = 'tea...
  scene.text(`"Sofia, this is ${((s as any).pcs_nickname ?? '')}, my ` + ((((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') ? ('classmate and ') : ('')) + `friend from school who was just about to leave," Katja replies before she turns to you. "${((s as any).pcs_nickname ?? '')}, this is Sofia, my roommate."`);
  // TODO-QSP: dynamic text: '"Hi <<$pcs_nickname>>, it''s so nice to meet Katja''s friends since she doesn''...
  scene.text(`"Hi ${((s as any).pcs_nickname ?? '')}, it's so nice to meet Katja's friends since she doesn't seem to have a lot of them," Sofia says, which clearly makes Katja blush. "So ` + ((((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') ? ('you\'re also studying to become a teacher like Katja') : ('what are you studying')) + '?" she asks.');
  // TODO-QSP: dynamic text: '' + iif( $university['enrolled_in'] = 'teaching_studies', '"yes" ', '"I''m ' + ...
  scene.text(((((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') ? ('"yes" ') : ('"I\'m ' + ((((s as any).university ?? 0)?.['student'] === 1) ? ('in the ' + qspFunc(s, 'uni_programs', 'get_program_name') + ' program') : ('not studying at the university')) + '"')) + qspUntranslated(s, "'you answer.", { location: "katja_dorm" }));
  // TODO-QSP: dynamic text: '"Cool. I''m ' + iif($university['enrolled_in'] = 'nursing', 'also studying to b...
  scene.text('"Cool. I\'m ' + ((((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') ? ('also studying to become a nurse. I think I\'ve seen you in class now that I think about it.') : ('studying to become a nurse.')) + ' You must tell me all about yourself and what naughty things Katja was up to in school," she says, making Katja blush even more.');
  // TODO-QSP: dynamic text: "I''m sorry, but <<$pcs_nickname>> was just leaving," Katja says, looking at you...
  scene.text(`"I'm sorry, but ${((s as any).pcs_nickname ?? '')} was just leaving," Katja says, looking at you as if trying to say she's sorry.`);
  scene.text('"That\'s right, I\'ll be leaving now," you say.');
  scene.text('"Nice meeting you," Sofia says. "Wish we had more time to chat since I barely know anybody here; just Katja and my boyfriend Maxim. See you again soon. I\'m sure we\'ll become great friends," she continues.');
  scene.text('You say goodbye to Katja and as you leave the room, you hear Sofia continuing to talk the ear off of Katja.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
  ]);
  scene.build();
}

function enterLazarPussyTalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).katjaQW ?? 0)?.['pussy_sex'] > 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] < 6) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 6;
    // TODO-QSP: dynamic text: '"So I have had sex with boys before. ' + iif(katjaQW['knows_sex'] = 0, ' I don'...
    scene.text('"So I have had sex with boys before. ' + ((((s as any).katjaQW ?? 0)?.['knows_sex'] === 0) ? (' I don\'t know if you') : ('I know you also')) + ' have. So maybe we should try a threesome with a guy sometime" Katja says looking at you wickedly.');
  }
  if (((s as any).katjaQW ?? 0)?.['lazer_pussy_talk'] + ((s as any).katjaQW ?? 0)?.['lazer_anal_talk'] === 0  &&  ((s as any).katjaQW ?? 0)?.['lazer_anal'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['lazer_pussy_talk'] = 1;
    if (((s as any).katjaQW ?? 0)?.['QWstage'] < 6  &&  ((s as any).katjaQW ?? 0)?.['anal_quest'] < 3) {
      // TODO-QSP: dynamic text: "You know, <<$pcs_nickname>>, meeting Lazar at the café got me thinking," Katja ...
      scene.text(`"You know, ${((s as any).pcs_nickname ?? '')}, meeting Lazar at the café got me thinking," Katja says.`);
      if (((s as any).katjaQW ?? 0)?.['QWstage'] === 4) {
        scene.text('"We talked about how I would like to try having… sex… with a guy," Katja says with some pause. "I know you said you didn\'t want to arrange it, but I\'m sure with Lazar that you wouldn\'t have to arrange anything; just call him and I\'m sure he\'ll agree," she continues before you can say anything.');
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 5;
    }
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
          { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"I made myself clear the last time we talked about this, and my answer has not changed," you tell her. It\'s clear that Katja is not happy about your response.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
          scene.text('"We agreed that you would help me try to have… vaginal sex… with a guy," Katja says with some pause. "Maybe that guy could be Lazar?"');
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
            { label: 'Say you don\'t want to have sex Lazar', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"I\'m not that into Lazar. I don\'t think I want to have sex with him," you tell Katja.');
    scene.text('"Why? He\'s so handsome, and he seems to be more mature now. Yes, I know he\'s just with a girl to have sex, but that\'s also what we want. I\'m not looking for a relationship," Katja says.');
    scene.text('"I just don\'t think that he\'s a guy I want to have sex with," you respond.');
    scene.text('"Okay," Katja says, but it doesn\'t seem like she really accepts your answer.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
          ]);
        } else {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 4;
          if (((s as any).katjaQW ?? 0)?.['knows_sex'] === 1) {
            scene.text('"You told me how great having sex with a guy is, and with how Lazar was talking, he seemed very interested in us. So maybe we could…" she continues, but her voice drops off.');
            scene.text('"You want to have Lazar be your first guy?" you ask.');
            scene.text('Katja just bites her lips and slowly nods.');
            scene.actions([
              { label: 'Agree', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 5;
    }
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
              { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'pussy');
  } },
            ]);
          } else {
            scene.text('"Have you ever…" she continues.');
            scene.text('"Have I ever what?" you ask.');
            scene.text('"Had sex with a guy?" she finishes.');
            if (((s as any).stat ?? 0)?.['vaginal'] === 0) {
              scene.actions([
                { label: 'Tell her you haven\'t', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '"No. I''ve never had ' + iif(stat['anal'] = 0, 'sex', 'vaginal sex') + ' with a...
    scene.text('"No. I\'ve never had ' + ((((st as any).stat ?? 0)?.['anal'] === 0) ? ('sex') : ('vaginal sex')) + ' with a guy," you say.');
    scene.text('"Me neither," Katja replies. "Do you want to try?" she asks hesitantly.');
    scene.text('"You want to have Lazar be our first guy?" you ask, surprised. Katja just bites her lips and slowly nods.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 5;
    }
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'pussy');
  } },
    ]);
  } },
              ]);
            } else {
              if (((s as any).npc_had_sex ?? 0)?.['A149']) {
                scene.actions([
                  { label: 'Tell her you\'ve fucked Lazar before', handler: (st: GameState) => {
    scene.text('"I\'ve had sex before. In fact, I\'ve had sex with Lazar before," you answer.');
    scene.text('"How was it? Is he a good lover? Was he your first? Do you hook up with him often?" Katja asks, almost frantically.');
    scene.text('"Wow. Why do I get the feeling that there\'s something else going on? Do you want to have sex with Lazar?" you ask');
    scene.text('Katja just sheepishly looks down and then slightly nods. "I\'ve never tried it. But I think I want to," she finally says.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 5;
    }
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'pussy');
  } },
    ]);
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Tell her you\'ve had sex before', handler: (st: GameState) => {
    scene.text('"I\'ve had sex before," you answer.');
    scene.text('"How was it?" Katja asks.');
    scene.text('"It was good. Any particular reason you\'re asking now?" you inquire.');
    scene.text('Katja just sheepishly looks down and then slightly nods. "I\'ve never tried it… But I think I want to," she finally says.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 5;
    }
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'pussy');
  } },
    ]);
  } },
                ]);
              }
            }
            scene.actions([
              { label: 'Tell Katja you\'re not interested in guys', goto: ['KatjaHomeTalk', 'boy_no'] },
            ]);
          }
        }
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['QWstage'] < 6) {
        // TODO-QSP: dynamic text: "You know, <<$pcs_nickname>>, meeting Lazar at the cafe got me thinking," Katja ...
        scene.text(`"You know, ${((s as any).pcs_nickname ?? '')}, meeting Lazar at the cafe got me thinking," Katja says.`);
        if (((s as any).katjaQW ?? 0)?.['QWstage'] === 4) {
          scene.text('"We\'ve talked about that. I would like to try having… vaginal sex… with a guy," Katja says with some pause. "I know you said you didn\'t want to arrange it, but I\'m sure with Lazar you wouldn\'t have to arrange anything; just call him and I\'m sure he\'ll agree," she quickly continues before you can say anything.');
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 5;
    }
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
            { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"I made myself clear last time, and that\'s not changed," you tell her. That is something she\'s not completely happy with.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
            scene.text('"We have agreed that you would help me to try having… vaginal sex… with a guy," Katja says with some pause. "Maybe that guy could be Lazar?"');
            scene.actions([
              { label: 'Agree', handler: (st: GameState) => {
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
              { label: 'Say you don\'t want to have sex Lazar', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"I\'m not that into Lazar. I don\'t think I want to have sex with him," you tell Katja.');
    scene.text('"Why? He\'s so handsome, and he seems to be more mature now. Yes, I know he\'s just with a girl to have sex, but that\'s also what we want. I\'m not looking for a relationship," she replies.');
    scene.text('"I just don\'t think that he\'s a guy I want to have sex with," you respond.');
    scene.text('"Okay," Katja says, but it doesn\'t seem like she really accepts your answer.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
            ]);
          } else {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 4;
            if (((s as any).katjaQW ?? 0)?.['knows_sex'] === 1) {
              scene.text('"I\'ve been thinking about it," Katja starts. "Since I\'ve had anal sex with a guy and you\'ve told me how good vaginal sex with a guy can be…" She trails off for a second. "Well, it\'s just that based on the way that Lazar spoke, I think he\'d be interested," she continues, but her voice drops off.');
              scene.text('"You want Lazar to be the first guy in your pussy?" you ask. Katja just bites her lips and slowly nods.');
              scene.actions([
                { label: 'Agree', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 5;
    }
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
                { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'pussy');
  } },
              ]);
            } else {
              scene.text('"We\'ve had anal sex with a guy, but have you ever had vaginal sex with one?" she continues.');
              if (((s as any).stat ?? 0)?.['vaginal'] === 0) {
                scene.actions([
                  { label: 'Tell her you haven\'t', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '"No. I''ve never had ' + iif(stat['anal'] = 0, 'sex', 'vaginal sex') + 'with a ...
    scene.text('"No. I\'ve never had ' + ((((st as any).stat ?? 0)?.['anal'] === 0) ? ('sex') : ('vaginal sex')) + 'with a guy," you say.');
    scene.text('"Me neither," Katja says. "Do you want to try?" she asks hesitantly.');
    scene.text('"You want Lazar to be the first guy in our pussies?" you ask, surprised. Katja just bites her lips and slowly nods.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 5;
    }
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'pussy');
  } },
    ]);
  } },
                ]);
              } else {
                if (((s as any).npc_had_sex ?? 0)?.['A149']) {
                  scene.actions([
                    { label: 'Tell her you\'ve fucked Lazar before', handler: (st: GameState) => {
    scene.text('"I\'ve had vaginal sex before. In fact, I\'ve had sex with Lazar before," you answer');
    scene.text('"How was it? Is he a good lover? Was he your first? Do you hook up with him often?" Katja asks, almost frantically.');
    scene.text('"Wow. Why do I get the feeling that there\'s something else going on? Do you want to have sex with Lazar?" you ask.');
    scene.text('Katja just sheepishly looks down and then slightly nods. "I\'ve never tried it. But I think I want to," she finally says.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 5;
    }
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'pussy');
  } },
    ]);
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Tell her you\'ve had sex before', handler: (st: GameState) => {
    scene.text('"I\'ve had vaginal sex before," you answer.');
    scene.text('"How was it?" Katja asks.');
    scene.text('"It was good. Any particular reason you\'re asking that question now?" you ask.');
    scene.text('Katja just sheepishly looks down and then slightly nods. "I\'ve never tried it. But I think I want to," she finally answers.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 5;
    }
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'pussy');
  } },
    ]);
  } },
                  ]);
                }
              }
              scene.actions([
                { label: 'Tell Katja you\'re not interested in guys', goto: ['KatjaHomeTalk', 'boy_no'] },
              ]);
            }
          }
        }
      } else {
        // TODO-QSP: dynamic text: "You know <<$pcs_nickname>>, when we talked with Lazar at the café, he seemed re...
        scene.text(`"You know ${((s as any).pcs_nickname ?? '')}, when we talked with Lazar at the café, he seemed really into us," Katja says. "Maybe we should call him and see if he's up to having some fun with us?"`);
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 5;
    }
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
          { label: 'Say you aren\'t in the mood', handler: (st: GameState) => {
    scene.text('"I\'m sorry, but I\'m not in the mood for a threesome right now," you tell Katja.');
    scene.text('"Okay, another time then", she replies.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
          { label: 'Say you don\'t want to have sex with Lazar', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    scene.text('"I\'m not that into Lazar. I don\'t think I want to have sex with him," you tell Katja.');
    scene.text('"Why? He is handsome, and he seems to be more mature now. Yes, I know he\'s just with a girl to have sex, but it\'s also what we want. I\'m not looking for a relationship," she replies.');
    scene.text('"I just don\'t think that he\'s a guy I want to have sex with," you say.');
    scene.text('"Okay," Katja says, but it doesn\'t seem like she really accepts your answer.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
        ]);
      }
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['lazer_pussy_talk'] === 2) {
      // TODO-QSP: dynamic text: '"I know you said earlier that you didn''t want to have vaginal sex with Lazar' ...
      scene.text('"I know you said earlier that you didn\'t want to have vaginal sex with Lazar' + ((((s as any).katjaQW ?? 0)?.['lazer_anal'] > 0) ? (', but we\'ve had anal sex with him; ') : (' ')) + 'so would you please reconsider? I really want to try with a guy, and I want you to be there. Please?" Katja pleads, looking at you with her big eyes.');
      scene.actions([
        { label: 'Relent', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 5;
    }
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
        { label: 'Stand firm', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"I made myself clear the last time you asked and that hasn\'t changed," you tell her. She doesn\'t plead her case, but she doesn\'t seem satisfied.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).katjaQW ?? 0)?.['lazer_anal_talk'] + ((s as any).katjaQW ?? 0)?.['lazer_anal'] > 0) {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['lazer_pussy_talk'] = 1;
        // TODO-QSP: dynamic text: '"You know we have ' + iif(katjaQW['lazer_anal'] > 0, 'talked about', 'had') + '...
        scene.text('"You know we have ' + ((((s as any).katjaQW ?? 0)?.['lazer_anal'] > 0) ? ('talked about') : ('had')) + ' anal sex with Lazar," Katja says. "Maybe we could also have… vaginal sex… with him?" she continues.');
        if (((s as any).stat ?? 0)?.['vaginal'] > 0) {
          if (((s as any).katjaQW ?? 0)?.['QWstage'] < 6) {
            if (((s as any).katjaQW ?? 0)?.['QWstage'] < 4) {
              ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 4;
            }
            scene.text('"So you want him to be your first guy?" you ask Katja. She just nods, looking at you expectantly.');
          } else {
            scene.text('"So you want to also have vaginal sex with him?" you ask.');
            scene.text('"We\'ve had vaginal sex with other boys, so why not him as well?" she replies.');
          }
        } else {
          if (((s as any).katjaQW ?? 0)?.['QWstage'] < 4) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 4;
          }
          scene.text('"I\'ve never had vaginal sex with a guy," you tell Katja.');
          scene.text('"So, do you want to try it together with me?" she asks with a mockingly innocent look.');
        }
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 5;
    }
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
          { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_pussy_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'pussy');
  } },
        ]);
      } else {
        qspGoto(s, 'katja_dorm', 'chat');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLazarRefuse(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('You refuse and Katja looks puzzled.');
  if (((s as any).stat ?? 0)?.['vaginal'] === 0  &&  String((s as any).locArgs?.[1] ?? '') === 'pussy') {
    scene.actions([
      { label: 'Tell her you aren\'t ready', handler: (st: GameState) => {
    scene.text('"I\'m not ready to have sex with a guy," you say. Katja nods, but seems a little surprised that she\'s more ready than you.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['anal'] === 0  &&  String((s as any).locArgs?.[1] ?? '') === 'anal') {
    scene.actions([
      { label: 'Tell her you\'re not ready', handler: (st: GameState) => {
    scene.text('"I\'m not ready to have anal sex with a guy," you say. Katja nods, but seems a little surprised that she\'s more ready than you.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'You\'re too precious to share', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (20);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('Her puzzled looks turn into a smile, and she looks at you with lust in her eyes.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
      { label: 'Kiss her', goto: ['katjaEvDin', 'kiss'] },
    ]);
  } },
    { label: 'Tell her to stick with girls', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"Boys aren\'t worth it. Just stick with girls," you tell her, but she doesn\'t look entirely convinced.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLazarAgree(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
    // TODO-QSP: dynamic text: '"Okay. We should let Lazar be ' + iif(stat['vaginal'] > 0, 'your', 'our') + ' f...
    scene.text('"Okay. We should let Lazar be ' + ((((s as any).stat ?? 0)?.['vaginal'] > 0) ? ('your') : ('our')) + ' first guy," you agree.');
    scene.text('Katja looks a little embarrassed, but has a naughty gleam in her eyes.');
  } else {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 5) {
      // TODO-QSP: dynamic text: '"Okay. ' + iif(katjaQW['ivan_anal'] + katjaQW['marcus_pussy'] + katjaQW['marcus...
      scene.text('"Okay. ' + ((((s as any).katjaQW ?? 0)?.['ivan_anal'] + ((s as any).katjaQW ?? 0)?.['marcus_pussy'] + ((s as any).katjaQW ?? 0)?.['marcus_anal'] > 0) ? ('We can include Lazar in our harem of hot guys') : ('We Having a threesome with Lazar do sounds fun')) + '" you say, which causes Katja to start laughing.');
      scene.text('When she stops, she looks very excited. "Great. I want his cock in my pussy!"');
    }
  }
  if (((s as any).katjaQW ?? 0)?.['anal_quest'] === 2) {
    if (((s as any).katjaQW ?? 0)?.['lazer_anal_talk'] === 1) {
      if (((s as any).katjaQW ?? 0)?.['QWstage'] > 5) {
        scene.text('"And we\'ll let him fuck our butts like we said earlier?" Katja asks.');
        scene.text('"Of course. We already agreed to that," you answer.');
      } else {
        // TODO-QSP: dynamic text: '"Okay. We should let Lazar be the first guy to fuck ' + iif(stat['anal'] > 0, '...
        scene.text('"Okay. We should let Lazar be the first guy to fuck ' + ((((s as any).stat ?? 0)?.['anal'] > 0) ? ('your') : ('our')) + ' ass," you agree.');
        scene.text('Katja looks a little embarrassed, but has a naughty gleam in her eyes.');
      }
    } else {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['lazer_anal_talk'] = 1;
      scene.text('"And we\'ll let him fuck our butts like we talked about getting somebody to do earlier?" Katja asks.');
      scene.text('"We could get him to do that if he wants to," you answer.');
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['anal_quest'] === 3) {
      if (((s as any).katjaQW ?? 0)?.['QWstage'] > 5) {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['lazer_anal_talk'] = 1;
        // TODO-QSP: dynamic text: '"And we''ll also let him fuck our butts, like ' + iif(katjaQW['lazer_anal'] = 0...
        scene.text('"And we\'ll also let him fuck our butts, like ' + ((((s as any).katjaQW ?? 0)?.['lazer_anal'] === 0) ? ('we let others do') : ('before')) + '?" Katja asks.');
        scene.text('"If he wants to, of course," you answer.');
      } else {
        scene.text('"Okay. We can include Lazar in our harem of guys we let buttfuck us," you say, which causes Katja to start laughing.');
        scene.text('When she stops, she looks very excited. "Great. I want his cock in my ass!"');
      }
    }
  }
  if (((s as any).katjajQW ?? 0)?.['slut'] > 60  &&  ((s as any).katjaQW ?? 0)?.['anal_quest'] === 0) {
    scene.actions([
      { label: 'Katja has something more to say', goto: ['Katja_dorm', 'lazar_anal_talk'] },
    ]);
  } else {
    if (((s as any).katjajQW ?? 0)?.['slut'] > 50  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] < 5) {
      scene.actions([
        { label: 'Katja has something more to say', goto: ['Katja_dorm', 'lazar_pussy_talk'] },
      ]);
    } else {
      scene.actions([
        { label: 'Call Lazar', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    // TODO-QSP: dynamic text: You take out your phone and call Lazar. "What up, <<$pcs_nickname>>?" Lazar says...
    scene.text(`You take out your phone and call Lazar. "What up, ${((st as any).pcs_nickname ?? '')}?" Lazar says when he answers, almost immediately.`);
    scene.text('"So, Katja and I were wondering if you were up for some fun right now?" you ask.');
    scene.text('"I\'m always ready for some fun," he says. "What kind of fun do you have in mind?"');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] === 5) {
      if (((st as any).katjaQW ?? 0)?.['anal_quest'] === 2) {
        // TODO-QSP: dynamic text: '"Well ' + iif(stat['vaginal'] > 0, 'Katja has a pussy', 'we have pussies') + ' ...
        scene.text('"Well ' + ((((st as any).stat ?? 0)?.['vaginal'] > 0) ? ('Katja has a pussy') : ('we have pussies')) + ' and ' + ((((st as any).stat ?? 0)?.['anal'] > 0) ? ('Katja has a butt') : ('we have butts')) + ' that have never tried a cock, and thought that you would be the man for doing something about it?" you say.');
      } else {
        // TODO-QSP: dynamic text: '"Well ' + iif(stat['vaginal'] > 0, 'Katja has a pussy that has', 'we have pussi...
        scene.text('"Well ' + ((((st as any).stat ?? 0)?.['vaginal'] > 0) ? ('Katja has a pussy that has') : ('we have pussies that have')) + ' never tried a cock, and thought that you would be the man for doing something about it?" you say.');
      }
      scene.text('You hear Lazar gasp at your brazenness and see Katja\'s face turning completely red.');
      scene.text('After getting himself together, he answers, "Of course, I am the right man for that. Come on over."');
    } else {
      if (((st as any).katjaQW ?? 0)?.['anal_quest'] === 2) {
        // TODO-QSP: dynamic text: '"Well, ' + iif( stat['anal'] > 0, 'Katja has a butt that has', 'we have butts t...
        scene.text('"Well, ' + ((((st as any).stat ?? 0)?.['anal'] > 0) ? ('Katja has a butt that has') : ('we have butts that have')) + ' never tried a cock, and thought that you would be the man for doing something about that?" you say.');
        scene.text('You hear Lazar gasp at your brazenness and see Katja\'s face turning completely red.');
        scene.text('After getting himself together, he answers, "Of course, I am the right man for that. Come on over."');
      } else {
        scene.text('"Well, we are pretty horny right now and thought you might be able to help us with that?" you say.');
        scene.text('You can almost hear Lazar\'s massive smile and see Katja\'s face turning red.');
        scene.text('"Of course, I am the right man for that. Come on over," he answers.');
      }
    }
    // TODO-QSP: dynamic text: '"We will be right over," you say' + iif(katjaQW['lazer_anal'] + katjaQW['lazer_...
    scene.text('"We will be right over," you say' + ((((st as any).katjaQW ?? 0)?.['lazer_anal'] + ((st as any).katjaQW ?? 0)?.['lazer_pussy'] === 0) ? (' and he gives you his address ') : (' ')) + 'before you hang up.');
    scene.actions([
      { label: 'Go to Lazar\'s place', handler: (st: GameState) => {
    // TODO-QSP: minut + 5
  }, goto: ['katja_uni_sex', 'lazar_katja_uni_3some'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLazarAnalTalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).katjaQW ?? 0)?.['anal_sex'] > 0  &&  ((s as any).katjaQW ?? 0)?.['anal_quest'] < 3) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['anal_quest'] = 3;
    // TODO-QSP: dynamic text: '"So I have had anal sex with boys before. ' + iif(katjaQW['knows_anal'] = 0, 'I...
    scene.text('"So I have had anal sex with boys before. ' + ((((s as any).katjaQW ?? 0)?.['knows_anal'] === 0) ? ('I don\'t know if you') : ('I know you also')) + ' have. So maybe we should try it together with a guy sometime" Katja says looking at you wickedly.');
  }
  if (((s as any).katjaQW ?? 0)?.['lazer_pussy_talk'] + ((s as any).katjaQW ?? 0)?.['lazer_anal_talk'] === 0  &&  ((s as any).katjaQW ?? 0)?.['lazer_pussy'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['lazer_anal_talk'] = 1;
    if (((s as any).katjaQW ?? 0)?.['QWstage'] < 5  &&  ((s as any).katjaQW ?? 0)?.['anal_quest'] < 3) {
      // TODO-QSP: dynamic text: "You know, <<$pcs_nickname>>, meeting Lazar at the café got me thinking," Katja ...
      scene.text(`"You know, ${((s as any).pcs_nickname ?? '')}, meeting Lazar at the café got me thinking," Katja says.`);
      if (((s as any).katjaQW ?? 0)?.['anal_quest'] === 1) {
        scene.text('"We\'ve talked about that. I would like to try having… anal sex with a guy," Katja says with some pause. "I know you said you didn\'t want to arrange it, but I\'m sure with Lazar, you would not have to arrange anything; just call him and I am sure he will agree," she quickly continues before you can say anything.');
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
          { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_anal_talk'] = 2;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"I made myself clear last time and that hasn\'t changed," you tell her. She\'s not completely happy.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
        ]);
      } else {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['anal_quest'] = 1;
        if (((s as any).katjaQW ?? 0)?.['knows_anal'] === 1) {
          scene.text('"You told me how great having anal sex with a guy is, and with how Lazar was talking, he seemed very interested in us. So maybe we could…" she continues, but her voice drops off.');
          scene.text('"You want to have Lazar be the first guy to fuck your butt?" you ask. Katja just bites her lips and slowly nods.');
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
            { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_anal_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'anal');
  } },
          ]);
        } else {
          scene.text('"Have you ever…" she continues.');
          scene.text('"Have I ever what?" you ask.');
          scene.text('"Had anal sex with a guy?" she finishes.');
          if (((s as any).stat ?? 0)?.['anal'] === 0) {
            scene.actions([
              { label: 'Tell her you haven\'t', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '"No. I''ve never had ' + iif(stat['vaginal'] = 0, 'sex', 'anal sex') + ' with a...
    scene.text('"No. I\'ve never had ' + ((((st as any).stat ?? 0)?.['vaginal'] === 0) ? ('sex') : ('anal sex')) + ' with a guy," you say.');
    scene.text('"Me neither," Katja says. "Do you want to try?" she asks hesitantly.');
    scene.text('"You want Lazar to be the first guy fucking our butts?" you ask, surprised. Katja just bites her lips and slowly nods.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_anal_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'anal');
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).npc_had_sex ?? 0)?.['A149']) {
              scene.actions([
                { label: 'Tell her you\'ve fucked Lazar before', handler: (st: GameState) => {
    scene.text('"I\'ve had anal sex before. In fact, I\'ve had anal sex with Lazar before," you answer.');
    scene.text('"How was it? Is he a good lover? Was he your first? Do you hook up with him often?" Katja asks, almost frantically.');
    scene.text('"Wow. Why do I get the feeling that there\'s something else going on? Do you want to have anal sex with Lazar?" you ask.');
    scene.text('Katja just sheepishly looks down and then slightly nods. "I\'ve never tried it. But I think I want to," she finally replies.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_anal_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'anal');
  } },
    ]);
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Tell her you\'ve had anal sex before', handler: (st: GameState) => {
    scene.text('"I\'ve had anal sex before," you answer.');
    scene.text('"How was it?" Katja asks.');
    scene.text('"It was good. Any particular reason you\'re asking that now?" you inquire.');
    scene.text('Katja just sheepishly looks down and then slightly nods. "I\'ve never tried it. But I think I want to," she finally replies.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_anal_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'anal');
  } },
    ]);
  } },
              ]);
            }
          }
          scene.actions([
            { label: 'Tell Katja you have no interest in boys', goto: ['KatjaHomeTalk', 'boy_no'] },
          ]);
        }
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['anal_quest'] < 3) {
        // TODO-QSP: dynamic text: "You know, <<$pcs_nickname>>, meeting Lazar at the cafe got me thinking," Katja ...
        scene.text(`"You know, ${((s as any).pcs_nickname ?? '')}, meeting Lazar at the cafe got me thinking," Katja says.`);
        if (((s as any).katjaQW ?? 0)?.['anal_quest'] === 1) {
          scene.text('"We\'ve talked about that. I would like to try having… anal sex with a guy," Katja says with some pause. "I know you said you didn\'t want to arrange it, but I\'m sure with Lazar that you wouldn\'t have to arrange anything; just call him and I\'m sure he\'ll agree," she quickly continues before you can say anything.');
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
            { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazar_anal_talk'] = 2;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"I made myself clear last time and that hasn\'t changed," you tell her. But, nevertheless, she\'s not completely happy.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
          ]);
        } else {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['anal_quest'] = 1;
          if (((s as any).katjaQW ?? 0)?.['knows_anal'] === 1) {
            scene.text('"I\'ve been thinking about it," Katja starts. "Since I\'ve had sex with a guy and you\'ve told me how good anal sex with a guy can be…" She trails off for a second. "Well, it\'s just that based on the way that Lazar spoke, I think he\'d be interested," she continues, but her voice drops off.');
            scene.text('"You want to have Lazar be the first boy to fuck your ass?" you ask. Katja just bites her lips and slowly nods.');
            scene.actions([
              { label: 'Agree', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
              { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_anal_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'anal');
  } },
            ]);
          } else {
            scene.text('"We\'ve had sex with a guy, but have you ever had anal sex with one?" she continues.');
            if (((s as any).stat ?? 0)?.['anal'] === 0) {
              scene.actions([
                { label: 'Tell her you haven\'t', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '"No. I''ve never had ' + iif(stat['vaginal'] = 0, 'sex', 'anal sex') + ' with a...
    scene.text('"No. I\'ve never had ' + ((((st as any).stat ?? 0)?.['vaginal'] === 0) ? ('sex') : ('anal sex')) + ' with a guy," you answer.');
    scene.text('"Me neither," Katja says. "Do you want to try?" she asks hesitantly.');
    scene.text('"You want Lazar to be the first guy fucking our butts?" you ask, surprised. Katja just bites her lips and slowly nods.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_anal_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'anal');
  } },
    ]);
  } },
              ]);
            } else {
              if (((s as any).npc_had_sex ?? 0)?.['A149']) {
                scene.actions([
                  { label: 'Tell her you\'ve fucked Lazar before', handler: (st: GameState) => {
    scene.text('"I\'ve had anal sex before. In fact, I\'ve had anal sex with Lazar before," you answer.');
    scene.text('"How was it? Is he a good lover? Was he your first? Do you hook up with him often?" Katja asks, almost frantically.');
    scene.text('"Wow. Why do I get the feeling that there\'s something else going on? Do you want to have anal sex with Lazar?" you ask.');
    scene.text('Katja just sheepishly looks down and then slightly nods. "I\'ve never tried it. But I think I want to," she finally responds.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_anal_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'anal');
  } },
    ]);
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Tell her you\'ve had anal sex before', handler: (st: GameState) => {
    scene.text('"I\'ve had anal sex before," you answer.');
    scene.text('"How was it?" Katja asks.');
    scene.text('"It was good. Any particular reason you\'re asking that question now?" you inquire.');
    scene.text('Katja just sheepishly looks down and then slightly nods. "I\'ve never tried it. But I think I want to," she finally responds.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_anal_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'anal');
  } },
    ]);
  } },
                ]);
              }
            }
            scene.actions([
              { label: 'Tell Katja you\'re not interested in guys', goto: ['KatjaHomeTalk', 'boy_no'] },
            ]);
          }
        }
      } else {
        // TODO-QSP: dynamic text: "You know, <<$pcs_nickname>>, when we talked with Lazar at the café, he seemed r...
        scene.text(`"You know, ${((s as any).pcs_nickname ?? '')}, when we talked with Lazar at the café, he seemed really into us," Katja says. "Maybe we should call him and see if he's up for having some fun with us."`);
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
          { label: 'Say you\'re not in the mood', handler: (st: GameState) => {
    scene.text('"I\'m sorry, but I am not in the mood for a threesome right now," you tell Katja.');
    scene.text('"Okay, another time then", she replies.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
          { label: 'Say you don\'t want to have sex Lazar', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_anal_talk'] = 2;
    scene.text('"I\'m not that into Lazar. I don\'t think I want to have sex with him," you tell Katja.');
    scene.text('"Why? He is handsome, and he seems to be more mature now. Yes, I know he\' just with a girl to have sex, but it\'s also what we want. I\'m not looking for a relationship," she replies.');
    scene.text('"I just don\'t think that he\'s a guy I want to have sex with," you say.');
    scene.text('"Okay," Katja says, but it doesn\'t seem like she really accepts your answer.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
        ]);
      }
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['lazer_anal_talk'] === 2) {
      // TODO-QSP: dynamic text: '"I know you said earlier that you didn''t want to have anal sex with Lazar but'...
      scene.text('"I know you said earlier that you didn\'t want to have anal sex with Lazar but' + ((((s as any).katjaQW ?? 0)?.['lazer_pussy'] > 0) ? (' we\'ve had vaginal sex with him, so ') : (' ')) + 'would you please reconsider? I really want to try anal with a guy, and I want you to be there. Please?" Katja pleads, looking at you with her big eyes,');
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_anal_talk'] = 1;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
        { label: 'Stand firm', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"I made myself clear the last time you asked and that hasn\'t changed," you tell her. She doesn\'t plead her case, but she doesn\'t seem satisfied.');
    scene.actions([
      { label: 'Talk about something else', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).katjaQW ?? 0)?.['lazer_pussy_talk'] + ((s as any).katjaQW ?? 0)?.['lazer_pussy'] <= 0) {
        qspGoto(s, 'katja_dorm', 'chat');
      } else {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['lazer_anal_talk'] = 1;
        // TODO-QSP: dynamic text: '"You know we have ' + iif(katjaQW['lazer_pussy'] = 0, 'talked about', 'had') + ...
        scene.text('"You know we have ' + ((((s as any).katjaQW ?? 0)?.['lazer_pussy'] === 0) ? ('talked about') : ('had')) + ' sex with Lazar," Katja says. "Maybe we could also have… anal sex with him?" she continues.');
        if (((s as any).stat ?? 0)?.['anal'] > 0) {
          if (((s as any).katjaQW ?? 0)?.['anal_quest'] < 2) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['anal_quest'] = 2;
            scene.text('"So you want him to be the first guy to fuck your ass?" you ask Katja. She just nods, looking at you expectantly.');
          } else {
            scene.text('"So you want to also have anal sex with him?" you ask.');
            scene.text('"We have anal sex with other guys, so why not him too?" she answers.');
          }
        } else {
          if (((s as any).katjaQW ?? 0)?.['anal_quest'] < 2) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['anal_quest'] = 2;
          }
          scene.text('"I\'ve never had anal sex with a guy," you tell Katja.');
          scene.text('"So you want to try it together with me?" Katja says with a mockingly innocent look.');
        }
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_agree');
  } },
          { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['lazer_anal_talk'] = 2;
    qspGoto(st, 'katja_dorm', 'lazar_refuse', 'anal');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLazarKiss(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['Lazar_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/katja_kiss.jpg');
  scene.text('Katja almost jumps you and gives you a kiss. Afterward, she looks at you a little hesitantly. "You know, why don\'t we call Lazar to see if he wants us to come over?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((st as any).katjaQW ?? 0)?.['anal_quest'] >= 3  &&  (!(Math.floor(Math.random() * 7) + 0))) {
      // TODO-QSP: dynamic text: 'You call him, and he tells you that Ivan is over at his place, but ' + iif(katj...
      scene.text('You call him, and he tells you that Ivan is over at his place, but ' + ((((st as any).katjaQW ?? 0)?.['Lazar_Ivan_4some'] === 0) ? ('he\'s sure that Ivan would like to join the fun as long as you\'re willing to take it in the ass') : ('you had a lot of fun last time and he\'s sure Ivan is up for it again')) + '.');
      if (((st as any).katjaQW ?? 0)?.['Lazar_Ivan_4some'] === 0) {
        if (((st as any).katjaQW ?? 0)?.['simultanous_boys'] >= 2  ||  ((st as any).katjaQW ?? 0)?.['slut'] >= 80  ||  (((st as any).katjaQW ?? 0)?.['ivan_anal'] === 1  &&  ((st as any).katjaQW ?? 0)?.['slut'] >= 70)) {
          (st as any).minut = ((st as any).minut ?? 0) + 5;
          // TODO-QSP: dynamic text: '"Sounds fun," Katja says. "' + iif(katjaQW['simultanous_boys'] >= 2, 'It''ll be...
          scene.text('"Sounds fun," Katja says. "' + ((((st as any).katjaQW ?? 0)?.['simultanous_boys'] >= 2) ? ('It\'ll be fun to have sex with several boys again') : ('I think it\'s time for me to try sex with two boys at once')) + '."');
          scene.text('You tell Lazar that you\'ll come over, and when you turn back towards Katja, she\'s holding something in her hands. "Look what I have," she says and shows you two almost identically black bodysuits.');
          scene.text('"I think it would be sexy if we were these matching bodysuits," she says. You agree and the two of you quickly change into the bodysuits before you head out the door and start walking towards Lazar\'s house.');
          scene.actions([
            { label: 'Go to Lazar\'s place', goto: ['katja_uni_sex', 'lazar_ivan_katja_uni_4some'] },
          ]);
        } else {
          scene.text('Katja suddenly looks nervous when you tell her that Ivan is at Lazar\'s place. "I… I don\'t think… I think… It\'s best if we wait for another time. I\'m not ready for two guys at the same time."');
          scene.text('You accept Katja\'s decision and tell Lazar that you won\'t be coming over. He\'s a little disappointed, but tells you to call him another time.');
          scene.actions([
            { label: 'Continue', goto: ['katja_dorm', 'talk'] },
          ]);
        }
      } else {
        (st as any).minut = ((st as any).minut ?? 0) + 5;
        scene.text('Katja readily agrees to also include Ivan in the fun and you tell Lazar you\'ll come over. Katja then runs to her drawer and pulls out the black bodysuits you wore last time and suggests you do it again since it seemed to turn the boys on.');
        scene.text('You agree and the two of you quickly change into the bodysuits before you head out the door and start walking towards Lazar\'s house.');
        scene.actions([
          { label: 'Go to Lazar\'s place', goto: ['katja_uni_sex', 'lazar_ivan_katja_uni_4some'] },
        ]);
      }
    } else {
      scene.text('You call him, and he quickly agrees to have you over.');
      scene.actions([
        { label: 'Go to Lazar\'s place', goto: ['katja_uni_sex', 'lazar_katja_uni_3some'] },
      ]);
    }
  } },
    { label: 'You\'re not in the mood', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['horny'] -= 20
  }, goto: ['katja_dorm', 'talk'] },
  ]);
  scene.build();
}

function enterMovieTalk1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"I\'m in the mood for watching a movie tonight. Wanna watch it with me?" Katja asks as she starts setting up her laptop.');
  if (((s as any).week ?? 0) > 4  ||  ((s as any).katjaQW ?? 0)?.['slut'] > 75) {
    scene.actions([
      { label: 'Tell her you would rather go out tonight', handler: (st: GameState) => {
    scene.text('"Why don\'t we go out partying instead? It\'ll be fun," you say.');
    if (((st as any).katjaQW ?? 0)?.['horny'] >= 100) {
      qspCall(st, 'willpower', 'misc', 'force', 'easy');
    } else {
      if (((st as any).katjaQW ?? 0)?.['horny'] < 50) {
        qspCall(st, 'willpower', 'misc', 'force', 'hard');
      } else {
        qspCall(st, 'willpower', 'misc', 'force');
      }
    }
    if (((st as any).week ?? 0) === 4  &&  ((st as any).university ?? 0)?.['exam_week'] === 1) {
      scene.text('"No. Not tonight. I need to be fresh so I can study tomorrow. I want to do well on my exam, so not tonight" Katja says.');
    } else {
      scene.text('"I don\'t know. I\'m not sure I\'m up for it tonight. I really want to watch this movie." Katja answers.');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Convince her to go out', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Convince her to go out', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - ((Math.floor(Math.random() * 2) + 1));
    scene.text('"Come on Katja. It is boring just sitting watching a movie when you con be out partying the night away," you say trying to convince Katja to come with you.');
    scene.text('"Okay then. I\'ll watch the movie another time. Where do you want to go?" she finally relents.');
    scene.actions([
      { label: 'Go to the night club', handler: (st: GameState) => {
    ((st as any).locat = (st as any).locat ?? {})['katja'] = 53;
    ((st as any).locat = (st as any).locat ?? {})['katja_rand2'] = ((st as any).daystart ?? 0);
    ((st as any).locat = (st as any).locat ?? {})['katja_save2'] = ((st as any).locat ?? 0)?.['katja'];
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['party_location'] = 2;
    scene.text('"let\'s go to the night club" you say. "Okay. I know just the dress I want to wear tonight" Katja answers, and almost before you can react she is out of her clothes and into a nice dress.');
    scene.actions([
      { label: 'Prepare', goto: ['katja_party', 'party_preparations'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Relent and watch a movie with Katja', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    scene.text('"Okay, I\'ll stay and watch the movie with you" you relent.');
    scene.text('"Yeah! We don\'t you go to the kitchen to get a bowl for the popcorn," she asks happy that you want to watch the movie with her.');
    scene.text('You go the to kitchen and prepare the popcorn while Katja finishes setting up the movie. You then both sit down on her bed and start watching the film Katja has selected.');
    scene.actions([
      { label: 'Watch the movie', goto: ['katja_dorm', 'watch_movie'] },
    ]);
  } },
      { label: 'Tell her that you won\'t waste your evening watching a movie', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'dislike');
    scene.text('"Well if you won\'t go out with me, I will just leave you to watch your boring movie by yourself. I\'m not going to waste my evening on that," you say.');
    scene.text('"Don\'t be such a downer, watching movies can be just as much fun as getting drunk at some random party," she says. "See you another day?"');
    scene.actions([
      { label: 'Leave her room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch a movie with Katja', handler: (st: GameState) => {
    scene.text('"Sounds good," you reply. "Anything I can help with?"');
    scene.text('"Yes, go to the kitchen to get a bowl for the popcorn," she answers.');
    scene.text('You go the to kitchen and prepare the popcorn while Katja finishes setting up the movie. You then both sit down on her bed and start watching the film Katja has selected.');
    scene.actions([
      { label: 'Watch the movie', goto: ['katja_dorm', 'watch_movie'] },
    ]);
  } },
    { label: 'Not in the mood tonight', handler: (st: GameState) => {
    scene.text('"Sorry, but I\'m not in the mood tonight. Maybe some other time?" you reply.');
    scene.text('"That\'s okay," she says. "See you another day?" She\'s clearly intent on watching the film with or without you.');
    scene.actions([
      { label: 'Leave her room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMovieTalk2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"Come join me," Katja says, not removing her eyes from the screen as you approach her.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch a movie with Katja', handler: (st: GameState) => {
    scene.text('"Okay," you reply and she makes room for you next to her on the bed.');
    scene.actions([
      { label: 'Watch the movie', goto: ['katja_dorm', 'watch_movie'] },
    ]);
  } },
    { label: 'Not in the mood tonight', handler: (st: GameState) => {
    scene.text('"Sorry, but I\'m not in the mood tonight. Maybe some other time?" you reply.');
    scene.text('Katja just nods, not removing her eyes from the screen.');
    scene.actions([
      { label: 'Quietly leave her room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWatchMovie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['relationship_count_start'] + 350 / (1 + ((s as any).katjaQW ?? 0)?.['boy_block']) < ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).katjaQW ?? 0)?.['relationship_talk'] === 0  &&  ((s as any).katjaQW ?? 0)?.['relationship_count_start'] > 0) {
    qspGoto(s, 'katja_dorm', 'relationship_talk');
  }
  ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = 20;
  if (((s as any).hour ?? 0) < 20) {
    (s as any).minut = ((s as any).minut ?? 0) + 195;
  } else {
    if (((s as any).hour ?? 0) < 21) {
      (s as any).minut = ((s as any).minut ?? 0) + 135;
    } else {
      if (((s as any).hour ?? 0) < 22) {
        (s as any).minut = ((s as any).minut ?? 0) + 75;
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 45;
      }
    }
  }
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['movie_temp'] = 2 + Math.max((Math.floor(Math.random() * (2 - (-2) + 1)) + ((-2))), 0);
  } else {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['movie_temp'] = (Math.floor(Math.random() * 2) + 0);
  }
  if (((s as any).katjaQW ?? 0)?.['movie_temp'] === 4) {
    (s as any).t = (Math.floor(Math.random() * 4) + 1);
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (((s as any).t ?? 0) * 10);
    qspCall(s, 'arousal', 'erotic', -(((s as any).t ?? 0) * 5));
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/movie_erotic.jpg');
    scene.text('You end up watching a drama which is quite erotic and barely eat your popcorn.');
    if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['horny'] + Math.min(((s as any).katjaQW ?? 0)?.['slut'] / 3, 34) >= 100  &&  (Math.floor(Math.random() * 4) + 0) < 3  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
      scene.actions([
        { label: 'Finish the movie', goto: ['katja_dorm', 'after_movie_strip2'] },
      ]);
    } else {
      if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 3  &&  Math.min(((s as any).katjaQW ?? 0)?.['horny'], 100) + Math.min(((s as any).katjaQW ?? 0)?.['slut'] / 2, 50) >= 115  &&  ((s as any).katjaQW ?? 0)?.['masturbates'] > 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
        scene.actions([
          { label: 'Finish the movie', goto: ['katja_dorm', 'after_movie_strip1'] },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 10;
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: 'You spend some time discussing the film once it''s finished. You agree that it ...
        scene.text('You spend some time discussing the film once it\'s finished. You agree that it was ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('good,') : ('bad, but')) + ' with ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('good') : ('okay')) + ' acting.');
        // TODO-QSP: dynamic text: 'Katja ' + iif(t > 2, 'keeps coming back to the sex scenes and how good the acto...
        scene.text('Katja ' + ((((s as any).t ?? 0) > 2) ? ('keeps coming back to the sex scenes and how good the actors looked in them.') : ('didn\'t find the scenes that believable and clearly didn\'t like the look of the main actress.')) + ' Katja then says she wants to go to sleep and you say your goodbyes.');
        scene.actions([
          { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
        ]);
      }
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['movie_temp'] === 3) {
      (s as any).t = (Math.floor(Math.random() * 5) + 0);
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) - (((s as any).t ?? 0) * 5);
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/movie_tragic.jpg');
      scene.text('You\'re watching a tragic drama and barely eat your popcorn because of how sad the story is.');
      if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['horny'] + Math.min(((s as any).katjaQW ?? 0)?.['slut'] / 3, 34) >= 100  &&  (Math.floor(Math.random() * 4) + 0) < 3  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
        scene.actions([
          { label: 'Finish the movie', goto: ['katja_dorm', 'after_movie_strip2'] },
        ]);
      } else {
        if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 3  &&  Math.min(((s as any).katjaQW ?? 0)?.['horny'], 100) + Math.min(((s as any).katjaQW ?? 0)?.['slut'] / 2, 50) >= 115  &&  ((s as any).katjaQW ?? 0)?.['masturbates'] > 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
          scene.actions([
            { label: 'Finish the movie', goto: ['katja_dorm', 'after_movie_strip1'] },
          ]);
        } else {
          (s as any).minut = ((s as any).minut ?? 0) + 10;
          qspCall(s, 'stat', '');
          // TODO-QSP: dynamic text: 'Once the movie is finished, you ' + iif(rand(0, 1) = 1, 'spend some time crying...
          scene.text('Once the movie is finished, you ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('spend some time crying before drying your eyes') : (' dry your eyes')) + ' and start discussing it. You agree that it was ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('good,') : ('sad, but')) + ' with ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('an extremely touching') : ('a somehow moving')) + ' story.');
          // TODO-QSP: dynamic text: 'Katja thinks the ending ' + iif(rand(0, 1) = 1, 'was too depressing.', 'made up...
          scene.text('Katja thinks the ending ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('was too depressing.') : ('made up for all the bleakness in the story.')) + ' She then says she wants to go to sleep and you say your goodbyes.');
          scene.actions([
            { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
          ]);
        }
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['movie_temp'] === 2) {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/movie_drama.jpg');
        scene.text('You watch a drama while eating your popcorn.');
        if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['horny'] + Math.min(((s as any).katjaQW ?? 0)?.['slut'] / 3, 34) >= 100  &&  (Math.floor(Math.random() * 4) + 0) < 3  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
          scene.actions([
            { label: 'Finish the movie', goto: ['katja_dorm', 'after_movie_strip2'] },
          ]);
        } else {
          if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 3  &&  Math.min(((s as any).katjaQW ?? 0)?.['horny'], 100) + Math.min(((s as any).katjaQW ?? 0)?.['slut'] / 2, 50) >= 115  &&  ((s as any).katjaQW ?? 0)?.['masturbates'] > 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
            scene.actions([
              { label: 'Finish the movie', goto: ['katja_dorm', 'after_movie_strip1'] },
            ]);
          } else {
            (s as any).minut = ((s as any).minut ?? 0) + 10;
            qspCall(s, 'stat', '');
            // TODO-QSP: dynamic text: 'You spend some time discussing the film once it''s finished. You agree that it ...
            scene.text('You spend some time discussing the film once it\'s finished. You agree that it was a ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('good movie,') : ('bad movie, but')) + ' with ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('good') : ('mediocre')) + ' acting.');
            // TODO-QSP: dynamic text: 'Katja thinks that the overall plot was ' + iif(rand(0, 1) = 1, 'quite interesti...
            scene.text('Katja thinks that the overall plot was ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('quite interesting.') : ('too complicated.')) + ' She then says she wants to go to sleep and you say your goodbyes.');
            scene.actions([
              { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
            ]);
          }
        }
      } else {
        if (((s as any).katjaQW ?? 0)?.['movie_temp'] === 1) {
          (s as any).t = (Math.floor(Math.random() * 7) + 0);
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (((s as any).t ?? 0) * 6);
          qspCall(s, 'arousal', 'erotic', -(((s as any).t ?? 0) * 3));
          scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/movie_funny.jpg');
          // TODO-QSP: 'You watch a romantic comedy while eating your popcorn. ' + iif(t > 3, 'The movie centers around som...
          if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['horny'] + Math.min(((s as any).katjaQW ?? 0)?.['slut'] / 3, 34) >= 100  &&  (Math.floor(Math.random() * 4) + 0) < 3  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
            scene.actions([
              { label: 'Finish the movie', goto: ['katja_dorm', 'after_movie_strip2'] },
            ]);
          } else {
            if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 3  &&  Math.min(((s as any).katjaQW ?? 0)?.['horny'], 100) + Math.min(((s as any).katjaQW ?? 0)?.['slut'] / 2, 50) >= 115  &&  ((s as any).katjaQW ?? 0)?.['masturbates'] > 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
              scene.actions([
                { label: 'Finish the movie', goto: ['katja_dorm', 'after_movie_strip1'] },
              ]);
            } else {
              (s as any).minut = ((s as any).minut ?? 0) + 10;
              qspCall(s, 'stat', '');
              // TODO-QSP: dynamic text: 'You spend some time discussing the film once it''s finished. You agree that it ...
              scene.text('You spend some time discussing the film once it\'s finished. You agree that it was a ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('good movie,') : ('bad movie, but')) + ' with ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('a funny') : ('a cringe')) + ' romance plot.');
              // TODO-QSP: dynamic text: 'Katja ' + iif(t > 3, 'keeps coming back to how great the chemistry between main...
              scene.text('Katja ' + ((((s as any).t ?? 0) > 3) ? ('keeps coming back to how great the chemistry between main actors was and how hot they looked together.') : ('thinks that the overall plot was full of holes.')) + ' She then says she wants to go to sleep and you say your goodbyes.');
              scene.actions([
                { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
              ]);
            }
          }
        } else {
          (s as any).t = (Math.floor(Math.random() * (6 - (-2) + 1)) + ((-2)));
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.max(((s as any).t ?? 0) * 5, 0));
          qspCall(s, 'arousal', 'erotic', -(Math.max(((s as any).t ?? 0), 0) * 3));
          scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/movie_action.jpg');
          // TODO-QSP: 'You watch an action movie while eating your popcorn. ' + iif(t > 3, 'The movie includes a lot of me...
          if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['horny'] + Math.min(((s as any).katjaQW ?? 0)?.['slut'] / 3, 34) >= 100  &&  (Math.floor(Math.random() * 4) + 0) < 3  &&  ((s as any).braworntype ?? 0) !== 'none'  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
            scene.actions([
              { label: 'Finish the movie', goto: ['katja_dorm', 'after_movie_strip2'] },
            ]);
          } else {
            if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 3  &&  Math.min(((s as any).katjaQW ?? 0)?.['horny'], 100) + Math.min(((s as any).katjaQW ?? 0)?.['slut'] / 2, 50) >= 115  &&  ((s as any).katjaQW ?? 0)?.['masturbates'] > 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
              scene.actions([
                { label: 'Finish the movie', goto: ['katja_dorm', 'after_movie_strip1'] },
              ]);
            } else {
              (s as any).minut = ((s as any).minut ?? 0) + 10;
              qspCall(s, 'stat', '');
              // TODO-QSP: dynamic text: 'You spend some time discussing the film once it''s finished. You agree that it ...
              scene.text('You spend some time discussing the film once it\'s finished. You agree that it was a ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('good movie,') : ('bad movie, but')) + ' with ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('great') : ('mediocre')) + ' action scenes.');
              // TODO-QSP: dynamic text: 'Katja ' + iif(t > 3, 'keeps coming back to how hot the actors and actresses wer...
              scene.text('Katja ' + ((((s as any).t ?? 0) > 3) ? ('keeps coming back to how hot the actors and actresses were.') : ('thinks the acting of the main character was good.')) + ' She then says she wants to go to sleep and you say your goodbyes.');
              scene.actions([
                { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
              ]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterMovieStrip1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/after_movie1.jpg');
  qspCall(s, 'arousal', 'erotic', 2);
  scene.text('It\'s gotten very hot in the room, and Katja has stripped down to her underwear. She\'s breathing heavily with her eyes closed and has her hand on her breast.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait and see what she does', goto: ['katja_uni_sex', 'after_movie_masturbation1'] },
    { label: 'Get dressed and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/after_movie2.jpg');
    scene.text('You get up from the bed. "See you another day," you say as you get ready to leave, which startles Katja.');
    // TODO-QSP: dynamic text: "Oh.. Um.. Bye <<$pcs_nickname>>. See you later…" she says without moving from t...
    scene.text(`"Oh.. Um.. Bye ${((st as any).pcs_nickname ?? '')}. See you later…" she says without moving from the bed.`);
    scene.text('As you leave the room, you\'re a little curious about what\'s going to happen once you leave.');
    scene.actions([
      { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAfterMovieStrip2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/after_movie3.jpg');
  qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
  scene.text('The room grew hotter throughout the movie. At one point, Katja stripped down to her underwear and you did the same. As the movie ends, Katja leans into you from behind and starts to kiss you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss her back', goto: ['katja_uni_sex', 'after_movie_sex1'] },
    { label: 'You\'re not in the mood', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', 1);
    qspCall(st, 'arousal', 'end');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/after_movie4.jpg');
    scene.text('You break off the kiss and tell Katja that you\'re not in the mood tonight. She understands and lets you get off the bed. You then get dressed and say your goodbyes.');
    scene.text('As you leave the room, Katja is still lying on her bed in her underwear and you find yourself a little curious about what\'s going to happen once you leave.');
    scene.actions([
      { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRelationshipTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).locat = (s as any).locat ?? {})['katja_save2'] = 20;
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['relationship_talk'] = 1;
  if (((s as any).hour ?? 0) < 20) {
    (s as any).minut = ((s as any).minut ?? 0) + 210;
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 190;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/movie_drama.jpg');
  scene.text('This time, Katja has chosen a French movie from a couple of years back that she said was recommended to her. It\'s called \'Blue is the Warmest Color\'.');
  scene.text('Katja is immediately captivated by the movie, she completely forgets to eat any of the popcorn, so drawn into the story as though it speaks to something inside of her.');
  scene.text('When the movie is over, she remains silent for several minutes.');
  scene.text('"The movie got me to thinking," she says. "What are we? I mean, we have sex and like, I mean…" She is clearly having trouble saying it loud. "Are we a couple? Am I your girlfriend?" she finally asks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"No, we are just friends, very good friends, but that\'s it. We aren\'t a couple," you answer her.');
    scene.text('"But, we have sex?" Katja says, slightly confused.');
    scene.actions([
      { label: 'Stop having sex <br> [+$func(\'wrap\', \'v_neg\', \'(Sex with Katja ...]', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['sex_clossedness'] = 2;
    if (((st as any).katjaQW ?? 0)?.['liberated'] === 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['liberated'] = 1;
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I know, but I think that should stop," you answer. Katja looks a little surprised. "I mean, it\'s probably better if we stop. I think you\'re looking for a relationship, so it\'s better if I\'m not in the way," you continue.');
    scene.text('Katja takes a little time to think it over before she answers. "Okay, if that\'s what you want." She goes quiet again, looking a little befuddled, before eventually continuing. "I\'m getting tired. I think it\'s best if you leave so I can get ready for bed."');
    scene.actions([
      { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      { label: 'Friends with benefits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Sure, and it\'s fun. I want to continue doing that. We are what you call \'friends with benefits\'," you tell her.');
    scene.text('"Okay," she answers. "You have brought a lot of excitement into my life, and I would like that to continue."');
    scene.text('"Great," you answer. "So, we will continue to be friends, have sex with each other and whomever else we like," you say.');
    if (((st as any).katjaQW ?? 0)?.['liberated'] === 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['liberated'] = 1;
      scene.text('Katja takes a moment before realizing the implication of what you just said. "Are you telling me that I should go out and find other people to have sex with?"');
      scene.text('"If you want to; I\'m not keeping you from doing that. I fuck other people and have fun with it. So should you, if you want," you answer.');
      scene.text('"Okay. I will think about it. But now I want to go to bed," Katja replies.');
    } else {
      scene.text('"Remember to tell me any good stories about the people you fuck. Then I will do the same" Katja says.');
    }
    scene.text('You say your goodbyes and leave her room.');
    scene.actions([
      { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['couple'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Yes. Or at least I want us to be. I would love to consider you my girlfriend. If you want to be, that is?" you ask back.');
    scene.text('"Yes… Yes, I would love that," Katja replies, still looking thoughtful but now with a smile on her face.');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] >= 6  ||  ((st as any).katjaQW ?? 0)?.['anal_quest'] >= 3  ||  ((st as any).katjaQW ?? 0)?.['simultanous_girls'] > 1) {
      // TODO-QSP: dynamic text: '"But we have also had sex with other ' + iif(katjaQW['boy_block'] = 1, 'girls',...
      scene.text('"But we have also had sex with other ' + ((((st as any).katjaQW ?? 0)?.['boy_block'] === 1) ? ('girls') : ('people')) + '. How does that fit with us being in a relationship?" Katja asks.');
    } else {
      scene.text('"So, we are now a couple. Only having sex with each other?"');
    }
    scene.actions([
      { label: 'Be exclusive <br> [+$func(\'wrap\', \'v_neg\', \'(Sex with Katja ...]', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['sex_clossedness'] = 1;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['faithful'] = 1;
    if (((st as any).katjaQW ?? 0)?.['liberated'] === 1) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['liberated'] = 0;
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    // TODO-QSP: '"Since you''re now my girlfriend, I want to be with you and only you," you answer' + iif(katjaQW['Q...
    scene.text('"Okay, I can live with that," Katja answers. "But now it\'s time for bed," she says, getting up and giving you a quick kiss.');
    scene.text('"Sleep tight, my girlfriend," you say as you leave leave her room.');
    scene.text('"Good night, my love," Katja replies.');
    scene.actions([
      { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      { label: 'OK to have sex with others but only together <br> [+$func(\'wrap\', \'neg\', \'(Katja will expect...]', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['faithful'] = 1;
    if (((st as any).katjaQW ?? 0)?.['liberated'] === 1) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['liberated'] = 0;
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Since you\'re now my girlfriend, I want us to be faithful to each other. But, as long as we both agree, we can bring in another person to have sex with together," you answer.');
    // TODO-QSP: dynamic text: '"Okay. ' + iif(katjaQW['QWstage'] >= 6 or katjaQW['anal_quest'] >= 3 or katjaQW...
    scene.text('"Okay. ' + ((((st as any).katjaQW ?? 0)?.['QWstage'] >= 6  ||  ((st as any).katjaQW ?? 0)?.['anal_quest'] >= 3  ||  ((st as any).katjaQW ?? 0)?.['simultanous_girls'] > 1) ? ('I do like it when we have fun with somebody else and want that to continue.') : ('I guess we might try that sometime.')) + ` But no sex with anyone else if I'm not there," Katja replies. "I'm glad we settled that, ${((st as any).pcs_nickname ?? '')}, but now it's time for bed," she says, getting up and giving you a quick kiss.`);
    scene.text('"Sleep tight, my girlfriend," you say as you leave leave her room.');
    scene.text('"Good night, my love," Katja replies.');
    scene.actions([
      { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      { label: 'Open relationship', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Yes, sex is fun. No reason to limit it to just one person. Just because you\'re my girlfriend doesn\'t mean we have to stop having sex with other people." you say. "I want us to have what you call an \'open relationship\'," you tell her.');
    scene.text('"What do you mean by that?" Katja asks.');
    scene.text('"An open relationship is when you are in a relationship but are not bound to only have sex with your partner. You can fuck whoever you like, whenever you like, with or without your girlfriend," you explain.');
    if (((st as any).katjaQW ?? 0)?.['liberated'] === 0) {
      scene.text('"So, you want me to have sex with other people when you are not there?" Katja asks.');
      scene.text('"Only if you want to. But I would love to hear you tell stories about your sexual escapades, just like you love hearing mine," you say, making Katja\'s face turn red.');
      // TODO-QSP: dynamic text: '"' + iif(katjaQW['QWstage'] >= 6 or katjaQW['anal_quest'] >= 3 or katjaQW['simu...
      scene.text('"' + ((((st as any).katjaQW ?? 0)?.['QWstage'] >= 6  ||  ((st as any).katjaQW ?? 0)?.['anal_quest'] >= 3  ||  ((st as any).katjaQW ?? 0)?.['simultanous_girls'] > 1) ? ('I do love it when we have fun with somebody else.') : ('I guess we should try to have sex with somebody else together first.')) + ' You have given me some things to think about, but now I need to go to bed," Katja says, getting up and giving you a quick kiss.');
    } else {
      scene.text('"Remember to tell me any good stories about the people you fuck. Then I will do the same, but now I need to go to bed," Katja says, getting up and giving you a quick kiss.');
    }
    scene.text('"Sleep tight, my girlfriend," you say as you leave leave her room.');
    scene.text('"Good night, my love," Katja replies.');
    scene.actions([
      { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCocainOffer(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_day_ask'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"Look what I have here" Katja says as she shows you a small plastic bag with white powder. "Why don\'t we take some lines to make this more fun?" she ask.');
  if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 6) {
    qspCall(s, 'willpower', 'drugs', 'resist', 'easy');
  } else {
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 7) {
      qspCall(s, 'willpower', 'drugs', 'resist');
    } else {
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 8) {
        qspCall(s, 'willpower', 'drugs', 'resist', 'hard');
      }
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Convince Katja not to take the cocaine', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Convince Katja that you should not do drugs right now', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Now is not the time Katja. I don\'t think it\'s a good idea," you say.');
    scene.text('"Why not now? It\'s as good a time as any?" Katja says.');
    // TODO-QSP: dynamic text: '"No, I don''t think it is. Taking drugs when you are just sitting around a norm...
    scene.text('"No, I don\'t think it is. Taking drugs when you are just sitting around a normal ' + ((((st as any).hour ?? 0) > 18) ? ('evening') : ('afternoon')) + ' isn\'t healthy" you respond.');
    scene.text('Katja looks at you angrily. "Are you saying I can\'t control myself?"');
    scene.text('"I think you are overdoing it. You shouldn\'t do it as often or as much as you do," you tell her.');
    scene.text('"You aren\'t my mom!" Katja says.');
    scene.text('"No, I\'m not, and I\'m sure she would be harsher with you than I am," you answer.');
    scene.text('Katja is silently thinking about it for a moment. "Fine. You get it your way, this time," she says, clearly not happy about it, but packs the drugs away and after a few minutes she seems to have forgotten about it.');
    scene.actions([
      { label: 'Continue talking', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Do some lines with Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 8;
    qspCall(st, 'drugs', 'cocaine', 1);
    qspCall(st, 'stat', '');
    qspCall(st, 'katja_procedural', 'take_cocaine');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/joint_coke.jpg');
    scene.text('"Okay, Katja. Let\'s do it," you say.');
    scene.text('"Yes. That\'s the spirit," she replies and prepares some lines for the two of you, and finds some tubes for you to use.');
    scene.text('You both put your tubes to you nostrils and lover your heads to the table and sniff your lines. Katja does it like it\'s something she does all the time.');
    scene.text('After a moment, it hits you both. You feel wonderful while Katja just sits there with wide-open eyes. She starts giggling which turns into a laugh that lasts for some time.');
    scene.actions([
      { label: 'Continue talking', goto: ['katja_dorm', 'talk'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'talk':
      enterTalk(s, scene);
      break;
    case 'chat':
      enterChat(s, scene);
      break;
    case 'sofia_meet':
      enterSofiaMeet(s, scene);
      break;
    case 'lazar_pussy_talk':
      enterLazarPussyTalk(s, scene);
      break;
    case 'lazar_refuse':
      enterLazarRefuse(s, scene);
      break;
    case 'lazar_agree':
      enterLazarAgree(s, scene);
      break;
    case 'lazar_anal_talk':
      enterLazarAnalTalk(s, scene);
      break;
    case 'lazar_kiss':
      enterLazarKiss(s, scene);
      break;
    case 'movie_talk1':
      enterMovieTalk1(s, scene);
      break;
    case 'movie_talk2':
      enterMovieTalk2(s, scene);
      break;
    case 'watch_movie':
      enterWatchMovie(s, scene);
      break;
    case 'after_movie_strip1':
      enterAfterMovieStrip1(s, scene);
      break;
    case 'after_movie_strip2':
      enterAfterMovieStrip2(s, scene);
      break;
    case 'relationship_talk':
      enterRelationshipTalk(s, scene);
      break;
    case 'cocain_offer':
      enterCocainOffer(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katja_dorm: LocationDef = {
  name: 'katja_dorm',
  title: '\'S Dorm Room',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'livingr',
  enter: enter,
};
