import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mey_home', 'katja_bedroom');
  (s as any).location_type = 'public_indoors';
  (s as any).locclass = 'livingr';
  qspCall(s, 'vicky_meynold_schedule', '');
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
          scene.text('Katja looks at you, a faint blush on her cheeks as she smiles at you mischievously.');
        } else {
          if (((s as any).katjaQW ?? 0)?.['horny'] < 80) {
            scene.text('Katja is blushing fairly obviously and looks at you longingly.');
          } else {
            scene.text('Katja\'s face is flushed bright red and her chest is heaving from her heavy breathing. She\'s idly rubbing her thighs against one another.');
          }
        }
      }
    }
  } else {
    scene.text('Katja looks at you with a smile.');
  }
  if (((s as any).locat ?? 0)?.['katja'] === 10) {
    scene.text('"The others are meeting up at the beach right now. Come on, let\'s go meet them," she says.');
    scene.actions([
      { label: 'Go to the beach with Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_lake', 'school_mates'] },
    ]);
  } else {
    if (((s as any).locat ?? 0)?.['katja'] === 8) {
      scene.text('"Let\'s go to the disco!" Katja suggests with a smile.');
      scene.actions([
        { label: 'Go to the disco', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 25) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 25);
      (st as any).minut = ((st as any).minut ?? 0) + 10;
      qspGoto(st, 'pav_disco', '');
    }
  } },
      ]);
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 9) {
        scene.text('Katja notices how late it is and politely asks you to leave.');
      } else {
        if (((s as any).pcs_sweat ?? 0) >= 20) {
          // TODO-QSP: dynamic text: Katja wrinkles her nose. "<<$pcs_nickname>>, you''re all sweaty! Do you want to ...
          scene.text(`Katja wrinkles her nose. "${((s as any).pcs_nickname ?? '')}, you're all sweaty! Do you want to use my shower?"`);
          scene.actions([
            { label: 'Have a shower', goto: ['katjaEvDin', 'shower'] },
          ]);
        } else {
          if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1  &&  (((s as any).month ?? 0) > 6  ||  (((s as any).month ?? 0) === 6  &&  ((s as any).day ?? 0) > 15))) {
            qspGoto(s, 'KatjaHomeTalk', 'katja_uni_tell');
          } else {
            if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 0  &&  ((s as any).artemQW ?? 0)?.['bf'] === 1) {
              qspGoto(s, 'KatjaHomeTalk', 'Artem_talk');
            } else {
              if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1  &&  ((s as any).artemQW ?? 0)?.['artembrokenheart'] === 1) {
                qspGoto(s, 'KatjaHomeTalk', 'Artem_break_up_talk');
              } else {
                if (((s as any).katjaQW ?? 0)?.['QWstage'] === 6  &&  ((s as any).katjaQW ?? 0)?.['anal_quest'] >= 3  &&  ((s as any).katjaQW ?? 0)?.['slut'] > 100  &&  ((s as any).katjaQW ?? 0)?.['horny'] > 60  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
                  qspGoto(s, 'KatjaHomeTalk', 'random_park_sex_talk');
                } else {
                  if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5  &&  ((s as any).katjaQW ?? 0)?.['pussy_sex'] === 0  &&  ((s as any).katjaQW ?? 0)?.['Artem_pussy'] + ((s as any).katjaQW ?? 0)?.['marcus_pussy'] > 0) {
                    if (((s as any).katjaQW ?? 0)?.['Artem_pussy'] > 0) {
                      qspGoto(s, 'KatjaHomeTalk', 'first_boy_sex_Artem_follow_up');
                    } else {
                      if (((s as any).katjaQW ?? 0)?.['marcus_pussy'] > 0) {
                        qspGoto(s, 'KatjaHomeTalk', 'first_boy_sex_follow_up');
                      }
                    }
                  } else {
                    if (((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 0  &&  ((s as any).yearstart ?? 0) === 1  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['marcus_asked'] === 0  &&  (Math.floor(Math.random() * 101) + 50) < Math.min(((s as any).katjaQW ?? 0)?.['horny'], 100)) {
                      qspGoto(s, 'KatjaHomeTalk', 'Marcus_discussion');
                    } else {
                      if (((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 0  &&  ((s as any).katjaQW ?? 0)?.['marcus_asked'] === 1  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
                        qspGoto(s, 'KatjaHomeTalk', 'Marcus_answer_talk');
                      } else {
                        if (((s as any).katjaQW ?? 0)?.['QWstage'] < 4  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 50  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 40  &&  (((s as any).katjaQW ?? 0)?.['knows_BJ'] + ((s as any).katjaQW ?? 0)?.['knows_sex']) >= 2  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['anal_quest'] !== 1  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['pussy_sex'] === 0) {
                          qspGoto(s, 'KatjaHomeTalk', 'sex_with_boy_ask');
                        } else {
                          if (((s as any).katjaQW ?? 0)?.['QWstage'] < 4  &&  ((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 50  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 40  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['pussy_sex'] === 0) {
                            qspGoto(s, 'KatjaHomeTalk', 'sex_with_Artem_ask');
                          } else {
                            if (((s as any).katjaQW ?? 0)?.['slut'] >= 60  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 40  &&  (((s as any).katjaQW ?? 0)?.['knows_BJ'] + ((s as any).katjaQW ?? 0)?.['knows_anal']) >= 2  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['anal_quest'] === 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] !== 4  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['anal_sex'] === 0) {
                              qspGoto(s, 'KatjaHomeTalk', 'anal_sex_with_boy_ask');
                            } else {
                              if (Math.min(((s as any).katjaQW ?? 0)?.['horny'], 100) > (Math.floor(Math.random() * 361) + 40)  ||  (((s as any).katjaQW ?? 0)?.['QWstage'] === 2  &&  Math.min(((s as any).katjaQW ?? 0)?.['horny'], 100) > (Math.floor(Math.random() * 121) + 40))  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
                                if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  (((s as any).locat ?? 0)?.['Vicky'] !== 8  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 9  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 12  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 13)  &&  (Math.floor(Math.random() * 7) + 0) ===0  &&  ((s as any).katjaQW ?? 0)?.['Marcus_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['marcus_pussy'] > 0) {
                                  ((s as any).katjaQW = (s as any).katjaQW ?? {})['Marcus_day'] = ((s as any).daystart ?? 0);
                                  qspGoto(s, 'katjaHomeTalk', 'marcus_kiss');
                                } else {
                                  if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
                                    qspGoto(s, 'KatjaHomeTalk', 'hornykiss');
                                  } else {
                                    qspGoto(s, 'KatjaHomeTalk', 'tender_kiss');
                                  }
                                }
                              } else {
                                if (((s as any).npc_pregtalk ?? 0)?.['A14'] === 0  &&  (((s as any).KatjaConflict ?? 0) === 0  ||  ((s as any).KatjaConflict ?? 0) === 2)  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
                                  if (((s as any).kid ?? 0) > 0) {
                                    qspCall(s, 'stat', '');
                                    (s as any).minut = ((s as any).minut ?? 0) + 5;
                                    (s as any).KatjaConflict = 1;
                                    (s as any).KatConCheck = ((s as any).daystart ?? 0);
                                    scene.text('"You\'re pregnant again?" Her face turns red and her expression is far angrier than you\'ve ever seen her. "After everything, you still didn\'t trust me enough to tell me?" she screams at you. "I thought there was something special between us."');
                                    scene.text('Tears begin rolling down her cheeks. "Just leave me alone, I don\'t even want to see you right now."');
                                  } else {
                                    if (((s as any).knowKatjaPreg ?? 0) === 1) {
                                      qspCall(s, 'stat', '');
                                      (s as any).minut = ((s as any).minut ?? 0) + 5;
                                      (s as any).KatjaConflict = 1;
                                      (s as any).KatConCheck = ((s as any).daystart ?? 0);
                                      scene.text('"Are you pregnant? Why didn\'t you tell me? I thought we were closer than that. I told you when I got pregnant. I need to think. We\'ll talk later."');
                                    } else {
                                      (s as any).minut = ((s as any).minut ?? 0) + 5;
                                      (s as any).KatjaConflict = 1;
                                      (s as any).KatConCheck = ((s as any).daystart ?? 0);
                                      scene.text('"Are you pregnant? Why didn\'t you tell me? I thought we were closer than that. I need to think. We\'ll talk later."');
                                    }
                                  }
                                } else {
                                  qspGoto(s, 'katjaHomeTalk', 'chat');
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
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['mey_home', 'start'] },
  ]);
  scene.build();
}

function enterChat(s: GameState, scene: SceneBuilder): void {
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
          scene.text('Katja looks at you, a faint blush on her cheeks as she smiles at you mischievously.');
        } else {
          if (((s as any).katjaQW ?? 0)?.['horny'] < 80) {
            scene.text('Katja is blushing fairly obviously and looks at you longingly.');
          } else {
            scene.text('Katja\'s face is flushed bright red and her chest is heaving from her heavy breathing. She\'s idly rubbing her thighs against one another.');
          }
        }
      }
    }
  } else {
    scene.text('Katja looks at you with a smile.');
  }
  // TODO-QSP: $func('npc_reactions', 'general', 'A14')
  if (((s as any).lernHome ?? 0) > 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 2) {
    scene.actions([
      { label: 'Do your homework together', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'KatjaHomeTalk', 'homework');
  } },
    ]);
  }
  if (((s as any).university ?? 0)?.['student'] === 1  &&  ((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0  &&  ((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
    scene.actions([
      { label: 'Tell Katja that you\'re going to the university', goto: ['KatjaHomeTalk', 'uni_tell'] },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['boy_lie'] === 1) {
    scene.actions([
      { label: 'Ask Katja who she likes', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${((st as any).npc_firstname ?? 0)?.['A14'] ?? ''} ${((st as any).npc_lastname ?? 0)?.['A14'] ?? ''}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"So who\'s the boy you mentioned being interested in earlier?" you ask curiously.');
    if (((st as any).katjaQW ?? 0)?.['slut'] >= 60  &&  ((st as any).npc_had_sex ?? 0)?.['A14']  &&  ((st as any).katjaQW ?? 0)?.['horny'] > 40) {
      scene.text('"Nobody, you dummy! It was just an excuse so you would kiss me!" she answers with a laugh.');
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['boy_lie'] = 2;
      scene.actions([
        { label: 'Continue', goto: ['KatjaHomeTalk', 'hornykiss'] },
      ]);
    } else {
      scene.text('"That\'s my secret, and I\'m not going to tell you!" she says with a wink.');
      scene.actions([
        { label: 'Continue', goto: ['KatjaHomeTalk', ''] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['QWstage'] === 4  &&  ((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
    if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 1) {
      scene.actions([
        { label: 'Tell her you want to set her up for sex with Artem', goto: ['KatjaHomeTalk', 'artem_sex_discussion'] },
      ]);
    } else {
      scene.actions([
        { label: 'Tell her you\'ll find a boy for her to have sex with', goto: ['KatjaHomeTalk', 'boy_discussion'] },
      ]);
    }
  }
  if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['Artem_pussy'] === 0  &&  ((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 1  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
    scene.actions([
      { label: 'Tell her you want to set her up for sex with Artem', goto: ['KatjaHomeTalk', 'artem_sex_discussion'] },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['anal_quest'] === 1  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0) {
    scene.actions([
      { label: 'Tell her you\'ll find a boy for her to try anal with', goto: ['KatjaHomeTalk', 'anal_discussion'] },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['slut'] >= 50  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 80  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
    scene.actions([
      { label: 'Lick Katja', goto: ['KatjaEvDin', 'kuni_dom'] },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 7  &&  ((s as any).katjaQW ?? 0)?.['birth_control_start_day'] < ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['birth_control_start_day'] > 0  &&  ((s as any).katjaQW ?? 0)?.['horny'] > 60  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0) {
    scene.actions([
      { label: 'Look for boys in the park', handler: (st: GameState) => {
    qspGoto(st, 'KatjaHomeTalk', 'go_to_park');
  } },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5  &&  ((s as any).katjaQW ?? 0)?.['marcus_asked'] === 2  &&  ((s as any).week ?? 0) < 6  &&  (((s as any).locat ?? 0)?.['Vicky'] !== 8  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 9  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 12  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 13)  &&  (((s as any).katjaQW ?? 0)?.['horny']+((s as any).katjaQW ?? 0)?.['slut']) > 100  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0) {
    scene.actions([
      { label: 'Suggest that you call Marcus', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['Marcus_day'] = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('Katja is looking aroused, so you suggest calling Marcus so that she can finally see what it\'s like to have sex with a boy.');
    scene.text('"Okay. Let\'s call him. We should have time before Vicky comes home," she says, looking both aroused and nervous at the same time.');
    scene.actions([
      { label: 'Call Marcus', goto: ['katja_sex', 'marcus_wait'] },
    ]);
  } },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).week ?? 0) < 6  &&  (((s as any).locat ?? 0)?.['Vicky'] !== 8  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 9  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 12  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 13)  &&  ((s as any).katjaQW ?? 0)?.['horny'] > 80  &&  ((s as any).katjaQW ?? 0)?.['Marcus_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['marcus_pussy'] > 0) {
    scene.actions([
      { label: 'Suggest calling Marcus', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['Marcus_day'] = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('Katja is looking very aroused, so you suggest calling Marcus to see if he wants to have some fun with you.');
    scene.text('"Okay. Let\'s call him. We should have time before Vicky comes home," she says while looking very excited.');
    scene.actions([
      { label: 'Call Marcus', goto: ['katja_sex', 'marcus_wait'] },
    ]);
  } },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] === 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
    scene.actions([
      { label: 'Tell Katja she should use birth control', goto: ['KatjaHomeTalk', 'preventation_talk'] },
    ]);
  }
  if (((s as any).npc_pregtalk ?? 0)?.['A14'] === 0  &&  (((s as any).KatjaConflict ?? 0) === 0  ||  ((s as any).KatjaConflict ?? 0) === 2)  &&  ((s as any).knowpreg ?? 0) === 1  &&  ((s as any).pregChem ?? 0) > 0  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 0) {
    if (((s as any).kid ?? 0) > 0) {
      scene.actions([
        { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${((st as any).npc_firstname ?? 0)?.['A14'] ?? ''} ${((st as any).npc_lastname ?? 0)?.['A14'] ?? ''}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('Katja\'s face lights up. "Congratulations! This is even more exciting than last time! Every time you tell me you\'re pregnant, I feel even better about my own pregnancy. Hell, that\'s probably the reason you keep getting pregnant, isn\'t it?"');
    scene.text('She giggles while looking at you affectionately.');
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
    scene.text('"What?! That\'s so exiting! You didn\'t get pregnant just to be like me, did you?" she asks playfully.');
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
    scene.text('"What? That\'s so exiting!"');
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
    scene.text('Katja sighs. "I understand. I just want you to know you can trust me and it hurts to realize that you don\'t."');
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
    scene.text('Katja sighs. "I understand. I just want you to know you can trust me and it hurts to realize that you don\'t."');
    scene.text('"I do trust you. I promise I won\'t keep anything else like this from you in the future."');
    scene.text('"Good. Now let\'s get down to business."');
    scene.actions([
      { label: 'Next', goto: ['KatjaHomeTalk', 'katjaknows1'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).katjaQW ?? 0)?.['boy_block'] === 1  &&  ((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] !== 1) {
    scene.actions([
      { label: 'Tell Katja that you have decided that boys are fun after all <br> [+$func(\'wrap\', \'neg\', \'(Katja will start ...]', goto: ['KatjaHomeTalk', 'boy_yes'] },
    ]);
  }
  if (((s as any).artemQW ?? 0)?.['artem_open_relationship'] === 1  &&   ((s as any).katjaQW ?? 0)?.['boy_block'] === 1  &&  ((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1) {
    scene.actions([
      { label: 'Tell Katja that you and Artem are in an open relationship', goto: ['KatjaHomeTalk', 'artem_opne_relationship'] },
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
    if (((st as any).flag_KissEV ?? 0) === 2) {
      scene.text('"Who do you think kissed more of the boys?" she asks.');
      scene.actions([
        { label: 'Equal amount', handler: (st: GameState) => {
    (st as any).flag_KissEV = 0;
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_kiss.jpg');
    scene.text('"We likely kissed about the same number of boys," you answer with a smile.');
    scene.text('She breathes a sigh of relief. "I shouldn\'t have asked anyway," she replies and kisses you in gratitude.');
    scene.actions([
      { label: 'Change the subject', goto: ['KatjaHomeTalk', ''] },
    ]);
  } },
        { label: 'Claim victory', handler: (st: GameState) => {
    (st as any).flag_KissEV = 3;
    scene.text('"I totally won!" you say with a playful smile.');
    scene.text('"I only slowed down because you were so far behind!" she says and sticks her tongue out at you.');
    scene.text('"Suuure. I think they just liked kissing me more than you."');
    scene.text('"Oh yeah? Let\'s go see then. We\'ll go to the park and see who can kiss more boys," she says with a hint of anger in her voice.');
    scene.actions([
      { label: 'Go to the park', goto: ['katja_sex', 'park'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).KatjaPreg ?? 0) !== 0  &&  (!((st as any).knowKatjaPreg ?? 0))) {
        // TODO-QSP: dynamic text: Katja bites her lip and, without looking you in the eye, finally plucks up the c...
        scene.text(`Katja bites her lip and, without looking you in the eye, finally plucks up the courage "${((st as any).pcs_nickname ?? '')}, I'm pregnant…"`);
        scene.actions([
          { label: 'Who\'s the father?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).knowKatjaPreg = 1;
    qspCall(st, 'stat', '');
    scene.text('"Wait, what? Who?" you ask, dumbfounded.');
    scene.text('She wrinkles her nose. "Svyatoslav… I hooked up with him at the New Years party and… well… Jesus, what do I do now?!"');
    scene.actions([
      { label: 'Be sympathetic', handler: (st: GameState) => {
    scene.text('At a loss for words, you simply hug her.');
    scene.actions([
      { label: 'Continue talking', goto: ['KatjaHomeTalk', ''] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((Math.floor(Math.random() * 101) + 0) > ((st as any).katjaQW ?? 0)?.['horny'] + Math.min(((st as any).katjaQW ?? 0)?.['slut']/2, 50))  ||  ((st as any).katjaQW ?? 0)?.['sex_clossedness'] === 2) {
          scene.text('Katja talks about school lessons, cosmetics, the latest fashion trends and other things she considers very important.');
        } else {
          qspCall(st, 'katja_sex_talk', 'Sextalk');
        }
        scene.actions([
          { label: 'Continue', goto: ['KatjaHomeTalk', ''] },
        ]);
      }
    }
  } },
    { label: '"Let\'s hang out"', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 1  &&  ((st as any).pcs_makeup ?? 0) <= 1) {
      // TODO-QSP: dynamic text: "Hey! Wait a minute, <<$pcs_nickname>>! I bet you''d look great with a little ma...
      scene.text(`"Hey! Wait a minute, ${((st as any).pcs_nickname ?? '')}! I bet you'd look great with a little make-up on you! What do you say?"`);
      scene.actions([
        { label: 'Let her put makeup on you', handler: (st: GameState) => {
    (st as any).pcs_hairbsh = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${((st as any).npc_firstname ?? 0)?.['A14'] ?? ''} ${((st as any).npc_lastname ?? 0)?.['A14'] ?? ''}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('Katja happily grins as she quickly straightens your hair. "What do you want? A light touch-up, some normal make-up or shall I just shovel it on?"');
    scene.actions([
      { label: 'Light touch-up', handler: (st: GameState) => {
    (st as any).pcs_makeup = 2;
    scene.text('Katja subtly applies some neutral tones, with a light application of makeup to bring out your natural beauty.');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: '"Let\'s hang out"', goto: ['katjaEv', 'kathan'] },
    ]);
  } },
      { label: 'Normal make-up', handler: (st: GameState) => {
    (st as any).pcs_makeup = 3;
    scene.text('Katja applies some mildly vibrate tones and colors of makeup to cover your minor imperfections and enhance your best features.');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: '"Let\'s hang out"', goto: ['katjaEv', 'kathan'] },
    ]);
  } },
      { label: 'Heavy make-up', handler: (st: GameState) => {
    (st as any).pcs_makeup = 4;
    scene.text('Katja applies some deeper, richer shades of makeup that are thick enough to cover most imperfections while drawing attention to your eyes and lips.');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: '"Let\'s hang out"', goto: ['katjaEv', 'kathan'] },
    ]);
  } },
    ]);
  } },
        { label: 'You really don\'t need it', goto: ['katjaEv', 'kathan'] },
      ]);
    } else {
      qspGoto(st, 'katjaEv', 'kathan');
    }
  } },
    { label: 'Leave the room', goto: ['mey_home', 'start'] },
  ]);
  scene.build();
}

function enterKatjaknows(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A14'] = 1;
  if (((s as any).katjaQW ?? 0)?.['slut'] < 60  &&  ((s as any).wombthfathID ?? 0) === 'A34') {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('"So, who\'s the baby-daddy?" Katja teases.');
    scene.text('You tell Katja that you\'re having Kolka\'s baby.');
    scene.text('"You were knocked up by your brother?! That\'s crazy! Is he at least good in bed?"');
    scene.text('"I wouldn\'t be pregnant if he wasn\'t," you laugh. "I only let the best cock inside me."');
    scene.text('Katja blushes and you give her a quick kiss before she can react.');
  } else {
    if (((s as any).katjaQW ?? 0)?.['slut'] < 60  &&  ((s as any).wombthfathID ?? 0) === 'A28') {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      scene.text('"So, who\'s the baby-daddy?" she teases.');
      scene.text('You tell Katja that you\'re having your step-father\'s baby.');
      scene.text('"You were knocked up by your step-dad?! That\'s crazy!"');
      scene.text('Katja blushes and you give her a quick kiss before she can react.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] < 60  &&  ((s as any).wombthfathID ?? 0) === 'A35') {
        (s as any).minut = ((s as any).minut ?? 0) + 10;
        scene.text('"So, who\'s the baby-daddy?" she teases.');
        scene.text('You tell Katja that you\'re having your biological father\'s baby.');
        scene.text('"You were knocked up by your own father?! That\'s crazy!"');
        scene.text('Katja blushes and you give her a quick kiss before she can react.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['slut'] < 60  &&  (((s as any).wombthfath ?? 0) === ''  ||  ((s as any).wombthfathID ?? 0) === 'unknown')) {
          (s as any).minut = ((s as any).minut ?? 0) + 10;
          scene.text('"So, who\'s the baby-daddy?" she teases.');
          scene.text('You tell her that you don\'t actually know whose baby is growing inside you.');
          scene.text('"No way! Really?" She is completely flabbergasted.');
          scene.text('"Yeah, I sometimes feel like my life is spinning out of control."');
          // TODO-QSP: dynamic text: Katja places a hand on your shoulder "<<$pcs_nickname>>, if I can do anything to...
          scene.text(`Katja places a hand on your shoulder "${((s as any).pcs_nickname ?? '')}, if I can do anything to make your life a little easier, please let me know."`);
          scene.text('You blush and thank her before planting a quick kiss on her cheek.');
        } else {
          if (((s as any).katjaQW ?? 0)?.['slut'] >= 60  &&  ((s as any).wombthfathID ?? 0) === 'A34') {
            (s as any).minut = ((s as any).minut ?? 0) + 10;
            scene.text('"Who\'d you let dump their load into that wonderful body of yours?" Katja asks while biting her bottom lip.');
            scene.text('You tell Katja that you\'re having Kolka\'s baby.');
            scene.text('"You were knocked up by your brother?! That\'s so sexy!" she moans before going in for a passionate kiss.');
            // TODO-QSP: dynamic text: As your <<$pc_desc[''lips'']>> lips separate from hers, you look into her eyes. ...
            scene.text(`As your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips separate from hers, you look into her eyes. "I didn't think admitting to incest would get me rewarded."`);
            scene.text('She chuckles. "I appreciate honesty and I think everyone should be free to explore their passions. Even if those passions revolve around riding your brother\'s dick."');
            scene.text('You find yourself questioning what you did to deserve such a wonderful woman in your life.');
          } else {
            if (((s as any).katjaQW ?? 0)?.['slut'] >= 60  &&  ((s as any).wombthfathID ?? 0) === 'A28') {
              (s as any).minut = ((s as any).minut ?? 0) + 10;
              scene.text('"Who\'d you let dump their load into that wonderful body of yours?" Katja asks while biting her bottom lip.');
              scene.text('You tell Katja that you\'re having your step-father\'s baby.');
              scene.text('"You were knocked up by your step-dad?! That\'s so sexy!" she moans before going in for a passionate kiss.');
              // TODO-QSP: dynamic text: As your <<$pc_desc[''lips'']>> lips separate from hers, you look into her eyes. ...
              scene.text(`As your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips separate from hers, you look into her eyes. "I didn't think admitting to incest would get me rewarded."`);
              scene.text('She chuckles. "I appreciate honesty and I think everyone should be free to explore their passions. Even if those passions are part of an Electra complex."');
              scene.text('You find yourself questioning what you did to deserve such a wonderful woman in your life.');
            } else {
              if (((s as any).katjaQW ?? 0)?.['slut'] >= 60  &&  ((s as any).wombthfathID ?? 0) === 'A35') {
                (s as any).minut = ((s as any).minut ?? 0) + 10;
                scene.text('"Who\'d you let dump their load into that wonderful body of yours?" Katja asks while biting her bottom lip.');
                scene.text('You tell Katja that you\'re having your biological father\'s baby.');
                scene.text('"You were knocked up by your own father?! That\'s so sexy!" she moans before going in for a passionate kiss.');
                // TODO-QSP: dynamic text: As your <<$pc_desc[''lips'']>> lips separate from hers, you look into her eyes. ...
                scene.text(`As your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips separate from hers, you look into her eyes. "I didn't think admitting to incest would get me rewarded."`);
                scene.text('She chuckles. "I appreciate honesty and I think everyone should be free to explore their passions. Even if those passions are part of an Electra complex."');
                scene.text('You find yourself questioning what you did to deserve such a wonderful woman in your life.');
              } else {
                if (((s as any).katjaQW ?? 0)?.['slut'] >= 60  &&  (((s as any).wombthfath ?? 0) === ''  ||  ((s as any).wombthfathID ?? 0) === 'unknown')) {
                  (s as any).minut = ((s as any).minut ?? 0) + 10;
                  scene.text('"Who\'d you let dump their load into that wonderful body of yours?" Katja asks while biting her bottom lip.');
                  scene.text('You tell her that you don\'t actually know whose baby is growing inside of you.');
                  scene.text('"You\'re such a sexy slut!" she moans before going in for a passionate kiss.');
                  // TODO-QSP: dynamic text: As your <<$pc_desc[''lips'']>> lips separate from hers, you look into her eyes. ...
                  scene.text(`As your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips separate from hers, you look into her eyes. "I'm really glad you're not judging me like a lot of other people have."`);
                  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I would never judge you. Plus, if I''m being honest, I''m a ...
                  scene.text(`"${((s as any).pcs_nickname ?? '')}, I would never judge you. Plus, if I'm being honest, I'm a little jealous. I wish I could let myself have that much fun."`);
                  scene.text('You find yourself questioning what you did to deserve such a wonderful woman in your life.');
                } else {
                  (s as any).minut = ((s as any).minut ?? 0) + 10;
                  scene.text('"So, who\'s the baby-daddy?" she teases.');
                  // TODO-QSP: iif( ($wombthfath = '' or $wombthfathID = 'unknown'), '"I don''t know who the father is "', '"It loo...
                  scene.text('"I hope they know how lucky they are," she says while clearly blushing.');
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
  ]);
  scene.build();
}

function enterKatjaknows1(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A14'] = 1;
  if (((s as any).katjaQW ?? 0)?.['slut'] < 60) {
    scene.text('"So, hot stuff. Same father as last time?"');
  } else {
    scene.text('"Fuck, I love seeing you pregnant. I hope you\'re up for having lots of babies." She blushes intensely and kisses you. "So, who put this one into you?"');
  }
  if ((((s as any).wombthfathID ?? 0) === 'A34'  &&  ((s as any).npc_rel ?? 0)?.['A34'] > 50)  ||  (((s as any).wombthfathID ?? 0) === 'A28'  &&  ((s as any).npc_rel ?? 0)?.['A28'] > 50)  ||  (((s as any).wombthfathID ?? 0) === 'A29'  &&  ((s as any).npc_rel ?? 0)?.['A29'] > 50)) {
    if (((s as any).wombthfathID ?? 0) === ((s as any).ChildThFath ?? 0)[((s as any).kid ?? 0)-1]) {
      if (((s as any).katjaQW ?? 0)?.['slut'] >= 60) {
        // TODO-QSP: dynamic text: You tell Katja that <<$wombthfath>> got you pregnant again.
        scene.text(`You tell Katja that ${((s as any).wombthfath ?? '')} got you pregnant again.`);
        scene.text('"Damn, I never thought I\'d meet someone who wanted to be an incest baby factory."');
        scene.text('"God, you\'re the hottest bitch I know. I didn\'t think I could be any more in love with you." Her eyes widen and her cheeks redden at the realization that she just admitted she loves you. Before you can respond, she cuts you off with a passionate kiss.');
        scene.text('After a few minutes, she breaks the kiss and keeps her lips inches from yours. "Don\'t let this distract from my wanting you to become his breeding bitch. I want him to keep you pregnant. I need something to masturbate about when you\'re not around."');
        scene.text('As soon as she finishes speaking, her lips are magnetically pulled back to yours.');
      } else {
        // TODO-QSP: dynamic text: You tell Katja that <<$wombthfath>> got you pregnant again.
        scene.text(`You tell Katja that ${((s as any).wombthfath ?? '')} got you pregnant again.`);
        scene.text('"Damn, I never thought I\'d meet someone who wanted to be an incest baby factory."');
        scene.text('"I just hope he makes you happy. It\'s sometimes hard to believe that you\'re the woman I fell in love with." Her eyes widen and her cheeks redden at the realization that she just admitted she loves you.');
        scene.text('Before you can respond, she cuts you off with a passionate kiss.');
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] >= 60) {
        // TODO-QSP: dynamic text: Blushing, you tell Katja that a member of your family impregnated you, but this ...
        scene.text(`Blushing, you tell Katja that a member of your family impregnated you, but this time it was ${((s as any).wombthfath ?? '')}.`);
        scene.text('Her eyes widen. "Wow, your family must be really close," she giggles.');
        scene.text('"Shit, \'which of your family members did you like being knocked up by the most?\' might be the hottest question anyone has ever made me think of. Just when I started thinking I couldn\'t love you anymore." Her eyes widen and her cheeks redden at the realization that she just admitted she loves you. Before you can respond, she cuts you off with a passionate kiss.');
        scene.text('After a few minutes, she breaks the kiss and keeps her lips inches from yours. "Don\'t think I\'ll forget the image of you being passed around your family like a good little slut. I need something to masturbate about when you\'re not around."');
        scene.text('As soon as she finishes speaking, her lips are magnetically pulled back to yours.');
      } else {
        // TODO-QSP: dynamic text: Blushing, you tell Katja that a member of your family impregnated you, but this ...
        scene.text(`Blushing, you tell Katja that a member of your family impregnated you, but this time it was ${((s as any).wombthfath ?? '')}.`);
        scene.text('Her eyes widen. "wow, your family must be really close," she giggles.');
        scene.text('"To think I\'d fall in love with a woman who lets multiple members of her own family knock her up." Her eyes widen and her cheeks redden at the realization that she just admitted she loves you.');
        scene.text('Before you can respond, she cuts you off with a passionate kiss.');
      }
    }
  } else {
    if (((s as any).wombthfathID ?? 0) === ((s as any).ChildThFath ?? 0)[((s as any).kid ?? 0)-1]) {
      // TODO-QSP: dynamic text: You tell Katja that <<$wombthfath>> is the father again.
      scene.text(`You tell Katja that ${((s as any).wombthfath ?? '')} is the father again.`);
      scene.text('"I hope he makes you happy. And that he doesn\'t mind sharing you with me," she blushes. "I would hate to completely lose the woman I love." Her eyes widen and her cheeks redden at the realization that she just admitted she loves you.');
      scene.text('Before you can respond, she cuts you off with a passionate kiss.');
    } else {
      if (((s as any).wombthfath ?? 0) === ''  ||  ((s as any).wombthfathID ?? 0) === 'unknown') {
        if (((s as any).katjaQW ?? 0)?.['slut'] >= 60) {
          scene.text('You tell Katja that you don\'t know you the father is.');
          scene.text('"Seems like you had a little too much fun then," she chuckles.');
          scene.text('"I hope you\'ll include me next time."');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A14'] >= 40) {
            scene.text('You tell Katja that you don\'t know who the father is.');
            scene.text('"Seems like you had a little too much fun then," she chuckles.');
          } else {
            scene.text('You tell Katja that you prefer not to say who the father is.');
            scene.text('"Seems like you had a little too much fun then," she chuckles.');
          }
        }
      } else {
        // TODO-QSP: dynamic text: You tell Katja that the father is <<$wombthfath>>.
        scene.text(`You tell Katja that the father is ${((s as any).wombthfath ?? '')}.`);
        scene.text('"I\'m glad you realize you\'re too special to limit yourself to one man. I love you too much to let you do anything less." Her eyes widen and her cheeks redden at the realization that she just admitted she loves you.');
        scene.text('Before you can respond, she cuts you off with a passionate kiss.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
  ]);
  scene.build();
}

function enterShowerKissHome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/showerkiss.jpg');
  scene.text('Katja gently hugs you with one hand and kisses you on the lips. You feel her soft palm on your naked pussy as her finger finds your clitoris and begins to rub it.');
  qspCall(s, 'arousal', 'kiss', 10, 'dom', 'lesbian');
  qspCall(s, 'arousal', 'vaginal_finger', (-10), 'dom', 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['slut'] >= 50) {
    scene.text('Katja gently but firmly puts you on the edge of the tub.');
  } else {
    scene.text('Katja gently caresses your clitoris with her fingers and her lips begin to kiss your neck, slowly making her way down.');
  }
  qspCall(s, 'willpower', 'cuni', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Remove her hands', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Remove her hands', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (10);
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You remove her hands and smile at her. You dismiss her and she shyly looks at the floor before leaving the bathroom.');
    scene.actions([
      { label: 'Get out of the shower', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'KatjaHomeTalk', '');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Sit on the edge of the tub', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (10);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/showersex.jpg');
    scene.text('You sit on the edge of the tub and open your legs to expose your wet pussy. Katja gets on her knees in front of you and gently licks your swollen red petals.');
    scene.text('Her tongue begins to briskly caress your pussy, not forgetting about your clitoris. Bliss soon envelopes your entire body.');
    scene.text('You notice Katja\'s hand between her legs and get further turned on watching her pleasure herself as she pleasures you.');
    (st as any).orgasm_txt = 'You\'re suddenly hit by a powerful orgasm and feel like you might lose consciousness as your whole body bends and convulses and a hot wave washes over you.';
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 10, 'dom', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get out of the shower', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'KatjaHomeTalk', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHomework(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'npc_relationship', 'modify', 'A14', 2);
  qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 1, 'A14');
  (s as any).lern = ((s as any).lern ?? 0) + ((Math.floor(Math.random() * 3) + 2));
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0));
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('You and Katja pour over your books for half an hour. In the end, you feel you understand the material fully.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['KatjaHomeTalk', ''] },
    { label: 'Leave the room', goto: ['mey_home', 'start'] },
  ]);
  scene.build();
}

function enterHornykiss(s: GameState, scene: SceneBuilder): void {
  scene.text('Katja brings her face so close to yours that you can feel her hot breath on your skin.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Bring your face close to hers', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You move even closer to Katja\'s face.');
    if (((st as any).katjaQW ?? 0)?.['horny'] < 50) {
      if ((Math.floor(Math.random() * 51) + 0) < 15) {
        scene.actions([
          { label: 'Kiss', goto: ['katjaEvDin', 'kiss'] },
        ]);
      } else {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5);
        scene.text('Katja giggles and pushes your face away from her.');
        scene.actions([
          { label: 'Change the subject', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
          { label: 'Grab Katja\'s face', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (2);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (10);
    qspCall(st, 'stat', '');
    scene.text('You wrap your hands around her face and bring your lips to Katja\'s.');
    scene.text('Katja looks into your eyes.');
    scene.actions([
      { label: 'Kiss', goto: ['katjaEvDin', 'kiss'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Kiss', goto: ['katjaEvDin', 'kiss'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterTenderKiss(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  // TODO-QSP: dynamic text: Katja thinks about something before blushing in embarrassment. "<<$pcs_nickname>...
  scene.text(`Katja thinks about something before blushing in embarrassment. "${((s as any).pcs_nickname ?? '')}… Have you ever… kissed a boy?"`);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['boy_lie'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You smile at Katja and say that you\'ve kissed boys.');
    scene.text('Katja, even more shyly, continues. "You see, I like this guy, but he\'s older than me and I\'m afraid that when we start to kiss, I\'ll do something wrong. Could you teach me how to kiss?"');
    scene.actions([
      { label: 'Kiss', goto: ['katjaEvDin', 'kiss'] },
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    // TODO-QSP: dynamic text: You refuse and she looks at you with pleading eyes. "Please <<$pcs_nickname>>, y...
    scene.text(`You refuse and she looks at you with pleading eyes. "Please ${((st as any).pcs_nickname ?? '')}, you don't want me to be bad at kissing, do you?"`);
    qspCall(st, 'willpower', 'kiss', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stand firm', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stand firm', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You refuse to kiss Katja and she gets mad at you.');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Relent', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (2);
    qspGoto(st, 'katjaEvDin', 'kiss');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You shake your head and say that you\'ve never kissed a boy.');
    scene.text('Katja, even more shyly, continues. "You see, I like this guy but he\'s older than me and I\'m afraid that when we start to kiss, I\'ll do something wrong. Maybe we could try kissing and learn that way?"');
    scene.actions([
      { label: 'Kiss', goto: ['katjaEvDin', 'kiss'] },
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    // TODO-QSP: dynamic text: You refuse and she looks at you with pleading eyes. "Please <<$pcs_nickname>>, i...
    scene.text(`You refuse and she looks at you with pleading eyes. "Please ${((st as any).pcs_nickname ?? '')}, it'll help us both so we're better when we finally kiss a boy!"`);
    qspCall(st, 'willpower', 'kiss', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stand firm', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stand firm', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You refuse to kiss Katja and she gets mad at you.');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Relent', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (2);
    qspGoto(st, 'katjaEvDin', 'kiss');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMarcusKiss(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/katja_kiss.jpg');
  scene.text('Katja almost jumps you and gives you a kiss. Afterward, she looks at you a little hesitantly. "You know, having Marcus over is quite fun, so why don\'t we call him right now?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', goto: ['katja_sex', 'marcus_wait'] },
    { label: 'You\'re not in the mood', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['horny'] -= 20
  }, goto: ['KatjaHomeTalk', ''] },
  ]);
  scene.build();
}

function enterTamVal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/TK.jpg');
  scene.text('Katja has left her phone at home, so you quickly head to her room to retrieve it, but as you enter the hallway, some words reach your ears. Two women are talking in the living room.');
  scene.text('"Oh Mistress Tamara! It has been marvelous to be with you again, but it is so unjust that my job only lets me see you so little, and I… I want to return all the favors you have given me."');
  scene.text('The woman sounds young and, you must say, a little flirty? Turning towards Katja, you see recognition and surprise in her eyes.');
  scene.text('"It is my pleasure Valentina, but I don\'t need you for anything else right now. What you must do is concentrate on your studies and work. With that, I\'m served, but it is late and we must say goodbye. You may stand now, Valentina!"');
  scene.text('The older woman sounds a lot more serious, but not without fondness, then suddenly they shut up and some muffled sounds reach your ears. Katja takes your hand and sneaks deeper into the house, where you see two women, embraced and kissing affectionately. Maybe too affectionately for a goodbye kiss.');
  scene.text('Katja gasps and the two women turn towards you. The older one smiles, unperturbed at the sudden interruption. The younger, not much older than you, releases her embrace and gives you both a submissive curtsy with downturned eyes.');
  scene.text('"Oh Ekaterina! Look who has come to see us! Valentina!"');
  scene.text('Katja mumbles something that sounds like a "hello", then without loosening her grip on your hand, quickly takes you towards her bedroom. As you enter, she throws herself at the bed and muffles a scream in the pillow.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Katja is confused', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 2;
    scene.text(`<center><b>${((st as any).npc_firstname ?? 0)?.['A14'] ?? ''} ${((st as any).npc_lastname ?? 0)?.['A14'] ?? ''}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You try to calm the hyper-ventilating redhead as she maniacally gets up and takes a peek beyond her room\'s door. Finally, she calms enough to talk with you.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you saw that didn''t you? I mean… they were… oh God!"
    scene.text(`"${((st as any).pcs_nickname ?? '')}, you saw that didn't you? I mean… they were… oh God!"`);
    scene.text('Taking her hand, you force Katja to sit by your side and embrace the redhead, mostly to stop her from driving you crazy.');
    scene.text('"There there Katja. Just stop and breathe."');
    scene.text('She takes your advice, and takes a big gulp of air. That seemed to quieten her down, deflating and returning her to a more "normal" mindstate. Even at that, she is troubled.');
    // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, it''s just that a lot of things suddenly made sense. L...
    scene.text(`"Sorry ${((st as any).pcs_nickname ?? '')}, it's just that a lot of things suddenly made sense. Look, Valentina lived here some time ago. I don't know all the history, but she left her mother to live in the city and ended up in some kind of trouble. Mom welcomed her to our home, and… remember how she clung to my mom? Valentina was always that way and seemed jealous of Vicky and me and now I'm thinking…"`);
    scene.text('"That your mother and Valentina could have been, or are, lovers? Does that trouble you? You don\'t like that?"');
    scene.text('Katja looks at you with a mix of emotions in her face. Confusion, surprise, doubt, fear. She opens and closes her mouth, looks at you, blushes and says something surprising.');
    // TODO-QSP: dynamic text: "I don''t know… maybe? I never thought about something like that. Ehm… <<$pcs_ni...
    scene.text(`"I don't know… maybe? I never thought about something like that. Ehm… ${((st as any).pcs_nickname ?? '')}… What would you think, if I… I mean… ehm… Behaved like Valentina and… tried to kiss you?"`);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'kiss', 'force', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"What if I\'m the one that wants to kiss you?"', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
      ]);
    } else {
      scene.actions([
        { label: '"What if I\'m the one that wants to kiss you?"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'kiss', 'force', 'hard');
    qspCall(st, 'willpower', 'pay', 'force');
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_kiss.jpg');
    scene.text('Katja answers in one of the most logical ways. The blush in the already agitated girl\'s cheeks extends, encompassing her face, neck and you assume her body. The next part is less logical, as she opens her mouth and tries to talk, but coughs.');
    scene.text('After licking her lips, she answers in a raspy and unsure voice. "Yes?"');
    scene.text('You lean against her and give her a little kiss on the lips. She doesn\'t react, so you continue, grabbing at her face, cheeks and neck. Her hands raise against your chest, but she doesn\'t try to push you away. In fact, she begins to kiss you back.');
    scene.text('This escalates into an awkward make-out, as the inexperienced girl shyly tries to follow your lead, biting you on more than one occasion. More and more, your lips and eventually tongues mix, arousing the two of you in an ever-increasing loop, but it all stops when Katja gives a surprised "Eep!" and moves away from you.');
    scene.text('It seems that one of your hands had somehow reached below her clothes and, well, began to play with one of her breasts. Now the two of you are looking at the transgressive hand in confusion. Biting her lips, she looks around nervously and tries to fix her ruffled clothes.');
    // TODO-QSP: dynamic text: "That was… woah. Hmmm… <i>Something</i> <<$pcs_nickname>>… "
    scene.text(`"That was… woah. Hmmm… <i>Something</i> ${((st as any).pcs_nickname ?? '')}… "`);
    qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (5);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (2);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 3;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'arousal', 'kiss', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Time to leave', goto: ['katjaHomeTalk', 'TamVal_2'] },
    ]);
  } },
      ]);
    }
    qspCall(st, 'willpower', 'kiss', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"Want to try it?"', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Want to try it?"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'kiss', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_kiss.jpg');
    scene.text('Katja\'s eyes open wide and, for a moment, you think you\'ve messed up, but she doesn\'t say or do anything. She just sits by your side and looks intensely at your face.');
    scene.text('"Yes."');
    scene.text('You practically don\'t hear Katja\'s whispered word before she leans against you and softly kisses your lips. It barely touches your skin and you think that is the end until her hands reach towards you and grab your clothes, holding you in place.');
    scene.text('She begins kissing you slowly… experimentally. Little kisses all over your lips, with a surprising intensity in Katja\'s eyes. Soon, things escalate as her tongue tries to pry open your mouth. You aren\'t going to lie, she isn\'t good at this, and more than once does she bite you maybe a little too hard, but. You. Don\'t. Care.');
    scene.text('You end up laying down on Katja\'s bed with her all over you. The make-out session quickly escalates and you find yourself gasping for oxygen as Katja tries to reach your tonsils with her tongue (and bites you again). A part of your aroused mind barely registers that she\'s reaching under your clothes, towards your bust and… Stops?!');
    scene.text('A confused "Hu?" escapes your lips as you try to understand what just happened. Katja has retreated to the bed\'s headboard. Biting her lips, she looks around nervously and tries to fix her ruffled clothes.');
    // TODO-QSP: dynamic text: "That was. Woah. Hm. <i>Something</i> <<$pcs_nickname>>…"
    scene.text(`"That was. Woah. Hm. <i>Something</i> ${((st as any).pcs_nickname ?? '')}…"`);
    qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (5);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 3;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'arousal', 'kiss', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Time to leave', goto: ['katjaHomeTalk', 'TamVal_2'] },
    ]);
  } },
      ]);
    }
    if (((st as any).succubusQW ?? 0) === 14) {
      scene.actions([
        { label: 'Answer Succubus style', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I\'ll show you things that your "mama" never taught you!" you grin.');
    scene.text('You smile as Katja, the cutest human tomato, stares back at you with exploding eyes. She then jumps from the bed and screams at you, half angrily, half embarrassed.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>! I wasn''t joking! This is a hard moment for me!"
    scene.text(`"${((st as any).pcs_nickname ?? '')}! I wasn't joking! This is a hard moment for me!"`);
    scene.text('You can\'t stop smiling at her cuteness. "Okay Katja, time for a lesson. Let\'s get naked."');
    scene.text('You start stripping as a flabbergasted Katja tries to process what you just said.');
    // TODO-QSP: dynamic text: "Eh… what? <<$pcs_nickname>>, is this a joke?"
    scene.text(`"Eh… what? ${((st as any).pcs_nickname ?? '')}, is this a joke?"`);
    scene.actions([
      { label: 'It isn\'t', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/pc/body/succubusself.jpg');
    // TODO-QSP: 'You call <<$sucself1>> up from its resting place It fills you completely, suffusing through your be...
    scene.text('In an instant, the Veil breaks and Katja is exposed to all of your radiance. Fear crosses her eyes before the fake reality reasserts its influence and obfuscates her perceptions, but by that moment, tendrils of your mana have connected with her deepest desires.');
    scene.text('Slowly… Timidly… Katja begins to undress and she stands before you in only her panties, trying desperately to cover herself. You\'re surprised that she has the will to leave that last piece of clothing, but, damn, if she isn\'t a cute vision!');
    scene.text('"Come here Katja! Just relax! We aren\'t going to do anything wrong!"');
    scene.actions([
      { label: 'She sits on the bed', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/SL1.jpg');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>… What… What are you planning to do?"
    scene.text(`"Okay ${((st as any).pcs_nickname ?? '')}… What… What are you planning to do?"`);
    scene.text('You don\'t answer. In it\'s place, there is only an embrace. Katja squirms nervously, but doesn\'t try to break away. Kissing her beautiful neck, you wait and let the redhead relax… A difficult task, so after a few minutes, your hands begin to roam her body.');
    scene.text('"Listen to me shy, innocent, self-conscious, virginal Katja. From now on, you will respond only with "Oh… oh… oh…" Do you understand my pet?"');
    scene.text('Your right hand finally reaches between her legs and rests over the soft fabric of her panties. A promise of things to come… stopping when she closes her legs.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Ouch!"
    scene.text(`"${((st as any).pcs_nickname ?? '')}! Ouch!"`);
    scene.text('At Katja\'s transgression, you give her crotch a little pinch, startling her, but making her shut up. Your enhanced senses let you caress all her erogenous zones and she\'s soon moaning, forgetting her reluctance at your dominant act.');
    scene.text('"It\'s okay, my pet. Just… let me do all the work. But first, I need you to give me something… Will you let me in?"');
    scene.text('She looks at you confused, but unquestionably aroused. With a vague understanding of your words, she opens her legs.');
    scene.actions([
      { label: 'Time to take a "gift"', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/SL2.jpg');
    scene.text('Even through the silky fabric, you can sense her lower labia engorging with blood. Hot and wet, she\'s ready for your first "lesson."');
    scene.text('"We\'re going to do it slowly, don\'t get nervous."');
    scene.text('Katja leans against you and closes her eyes. With one hand, you pull away the last obstacle towards her cunt and with the other, start caressing her lips. Katja just moans at your teasing, her hips moving unwittingly in the quest for more pleasure.');
    scene.text('You continue touching her, and little by little, you feel Katja\'s hotness and wetness permeate her pussy, making it easy for you to insert your fingers into the tightly closed slit.');
    scene.text('"Oh?"');
    scene.text('That is the only word that escapes Katja\'s mouth as your index and middle fingers travel through her most secret place. The aroused flesh barely resists your intrusion as the fingertips reach an intact barrier that obediently parts before your assault. You move your fingers in a scissorlike motion.');
    scene.text('"Ouch!"');
    scene.text('You pull your hand back and raise it. Between your fingers, covered in her slickness, a pinkish hue can be appreciated.');
    scene.actions([
      { label: 'Ending the lesson', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A14');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/SL3.jpg');
    scene.text('Katja looks dumbfounded at your hand, her inexperience making it difficult for her to understand what just happened. Suddenly, her eyes open in realization and you kiss her while congratulating the woman between your arms.');
    scene.text('"Congratulations! You\'re now a woman!"');
    scene.text('Too shocked and aroused, Katja lets you lie her on the bed, take away her panties, and go down on her. She has lost any reservation to be heard, and her moans fill the room. Your assault on her pussy, united to the arousal your touch has brought, makes her happily thrash all over the bed.');
    scene.text('You feel it when Katja raises her hips and a long guttural grunt escapes her lips. She orgasms, and in that instant, a sympathetic link triggers, letting her energy flow towards you. Katja moans again and again as your feeding triggers orgasm after orgasm.');
    scene.text('Finally, exhausted, Katja lies on the bed, cuddling against you. For the next few minutes she doesn\'t say anything, and in fact, seems to be on the brink of dozing off. You begin to pick up your clothes. It\'s probably best if you leave now.');
    qspCall(st, 'arousal', 'vaginal_finger_give', 10, 'lesbian');
    qspCall(st, 'arousal', 'cuni_give', 10, 'lesbian');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'mood', 'raise', 'small');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (20);
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'adore');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A14'] = 1;
    if (((st as any).npc_vag ?? 0)?.['A14'] === 0) {
      ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = 20;
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 3;
    (st as any).npcbrokehymen = 1;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (5);
    (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (25 * ((st as any).scfeed ?? 0));
    (st as any).suclezsex = ((st as any).stat ?? 0)?.['female_sexual_times'];
    (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    (st as any).sucabslez = 1;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Time to leave', goto: ['katjaHomeTalk', 'TamVal_2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stare at her awkwardly', handler: (st: GameState) => {
    scene.text(`<center><b>${((st as any).npc_firstname ?? 0)?.['A14'] ?? ''} ${((st as any).npc_lastname ?? 0)?.['A14'] ?? ''}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Hu?!"');
    scene.text('That is the most your brain seems capable of answering to Katja\'s question and obviously she doesn\'t take it too well.');
    // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>! I wasn''t insinuating… I mean… I didn''t want to… Ehm…...
    scene.text(`"Sorry ${((st as any).pcs_nickname ?? '')}! I wasn't insinuating… I mean… I didn't want to… Ehm…"`);
    scene.text('You stare at her while she stares at you. The silence only seems to make the two of you more embarrassed by the second.');
    qspCall(st, 'mood', 'lower', 'small');
    qspCall(st, 'npc_relationship', 'modify', 'A14', (-5));
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Time to leave', goto: ['katjaHomeTalk', 'TamVal_2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTamVal_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('A few minutes pass with Katja in contemplative silence before you finally decide to leave, but as you reach for the door, she finally talks.');
  // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>! I… This is going to sound awkward, especially… Ehm… Taki...
  scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}! I… This is going to sound awkward, especially… Ehm… Taking into consideration what just happened, but I was thinking about this before, well, you know. Do you want to… Come home to study? I'm not trying to… Ehm… Fuck!"`);
  scene.text('You smile at Katja\'s awkwardness. "I\'d like that."');
  scene.text('She gives you a timid smile before climbing under her bed\'s covers as you leave. This has been a full afternoon. There is nothing more for you here… Except Katja\'s mother waiting for you in the entry hall…');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'A Talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Tamara Meynold</b></center>');
    scene.img('images/characters/shared/headshots_main/big257.jpg');
    if (((st as any).zz_stage ?? 0) >= 1) {
      scene.text('"So what exactly is troubling my daughter?"');
      scene.text('She\'s asking you without concern, and for a moment, you don\'t know what to say, but finally decide to answer. "She\'s troubled about the fact that you and Valentina are in a… well… romantic relationship."');
      scene.text('Tamara seems to think about your answer, and finally gives a somewhat exasperated sigh. "It seems like I must talk with her. What do you think my relationship with Valentina is?"');
      scene.text('You try to give a more or less educated answer. "Sincerely? I don\'t know, but she seemed… Ehm…"');
      scene.text('"Too clingy? Yes. Valentina isn\'t the first girl I\'ve helped get back on her feet, but she is without a doubt the most "grateful." A pleasure speaking with you, but I must talk with my daughter."');
      scene.text('Finally, after saying your goodbyes, you leave the house.');
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>> isn''t it? I''m Tamara Meynold, my pleasure."
      scene.text(`"${((st as any).pcs_nickname ?? '')} isn't it? I'm Tamara Meynold, my pleasure."`);
      scene.text('"Hello Mrs. Meynold."');
      scene.text('"So what exactly is troubling my little girl?"');
      scene.text('She\'s asking you without concern, and for a moment, you don\'t know what to say, but finally decide to answer. "She\'s troubled about the fact that you and Valentina are in a… well… romantic relationship."');
      scene.text('Tamara seems to think about your answer, and finally gives a somewhat exasperated sigh. "It seems like I must talk with her. What do you think my relationship with Valentina is?"');
      scene.text('You try to give a more or less educated answer. "Sincerely? I don\'t know, but she seemed… Ehm…"');
      scene.text('"Too clingy? Yes. Valentina isn\'t the first girl I\'ve helped get back on her feet, but she is without a doubt the most "grateful." A pleasure speaking with you, but I must talk with my daughter."');
      scene.text('Finally, after saying your goodbyes, you leave the house.');
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyDiscussion(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 5;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).Marcus_sextype ?? 0) > 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (20);
    scene.text('"I sometimes have sex with Marcus, and I can tell you he\'s really into Russian girls. I\'m sure he\'d love to pop the cherry of a Russian beauty like you."');
    scene.text('"Marcus <i>is</i> very good-looking… If you think he\'d be willing to have sex with a girl like me…" Katja trails off, starting to sound nervous again.');
    scene.text('"I\'m sure that he\'d love to have sex with you. As any man who isn\'t gay would," you answer and Katja\'s face brightens up before she moves towards you for a kiss.');
    scene.actions([
      { label: 'Kiss her back', goto: ['katjaEvDin', 'kiss'] },
    ]);
  } else {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    scene.text('"Do you have any boy in mind?" you ask.');
    scene.text('"I don\'t know. Lazar is hot, but I have the feeling that he would just consider us a check on his list, and not be able to keep his mouth shut," she answers before pondering. "Maybe Marcus? He\'s very good-looking, and I haven\'t heard of him spreading rumors. Most of the others don\'t listen to what he says anyway because he\'s black and from America. Do you think he will be a good first time?"');
    scene.text('"I don\'t know, I\'ve never had sex with him," you answer. "Maybe you could try that…"');
    // TODO-QSP: dynamic text: Katja looks at you, pleading with her big eyes. "Please <<$pcs_nickname>>. I rea...
    scene.text(`Katja looks at you, pleading with her big eyes. "Please ${((s as any).pcs_nickname ?? '')}. I really want my first time to be good, so could you please test him for me?"`);
    scene.text('"Marcus is hot, but how would we approach him?" you ask.');
    scene.text('"Try to dance with him at the disco, and get close to him. He really seems to like the girls there, and since you\'re the hottest there, I\'m sure he\'ll like it. Especially if you lead him on like you know how to do," she says in her most flattering voice.');
    scene.text('You smile. "Okay, I\'ll try to dance with him at the disco, and see if I can test him for you."');
    scene.text('"You are the bestest friend!" she says with a huge smile and gives you a tight hug.');
    scene.actions([
      { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
      { label: 'Leave the room', goto: ['mey_home', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalDiscussion(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['anal_quest'] = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).IvanShowerQW ?? 0) === 11) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (20);
    scene.text('"Ivan seems to be very interested in our kissing. I sometimes have anal sex with him. You can say we\'re what you call \'friends with benefits\'. I think he might be interested," you tell her.');
    scene.text('"Ivan is hot and I\'ve also heard that he\'s really into anal sex. Yeah, if you think he\'s willing, then…" Katja is having trouble finding the words as she gets visibly excited thinking about it.');
    // TODO-QSP: dynamic text: "We could try to see if he is up for something next time he watches us kiss at s...
    scene.text('"We could try to see if he is up for something next time he watches us kiss at school' + ((((s as any).month ?? 0) > 4  &&  ((s as any).month ?? 0) < 10) ? (', or if we ran into him on the beach') : ('.')) + '" you answer and Katja throws her arms around you and goes in for a kiss.');
    scene.actions([
      { label: 'Kiss her back', goto: ['katjaEvDin', 'kiss'] },
    ]);
  } else {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    scene.text('"Do you have any boy in mind?" you ask.');
    scene.text('"Well, Ivan seems to be quite interested in our kissing at school. The other girls say that he\'s really into anal sex. He\'s also very hot," she answers. "So maybe you could try him out to see if it doesn\'t hurt too much with him? I don\'t want my first time to be too painful."');
    scene.text('"Yeah, Ivan is hot. I need to find a way to approach him about it, though," you reply.');
    scene.text('"He trains in the gym at the community center in the late afternoon. You might have luck talking with him there. I\'ve also heard a rumor that he sometimes uses the women\'s shower there," she tells you.');
    scene.text('You smile. "Okay, I\'ll try to see if he\'s up for something there and try him out for you."');
    scene.actions([
      { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
      { label: 'Leave the room', goto: ['mey_home', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPreventationTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['birth_control_start_day'] = ((s as any).daystart ?? 0) + 15;
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  // TODO-QSP: dynamic text: "If you want to '+iif( katjaQW['QWstage'] = 7, 'have sex with boys in the park',...
  scene.text('"If you want to ' + ((((s as any).katjaQW ?? 0)?.['QWstage'] === 7) ? ('have sex with boys in the park') : ('continue having sex with boys around here')) + ', you should get on birth control," you tell Katja. "Most of the boys around here don\'t want to use condoms, and don\'t care if they get the girls pregnant."');
  scene.text('"And if they get a girl pregnant, they\'ll just pretend it wasn\'t them. You don\'t want to raise a child on your own right now, do you?" you ask.');
  scene.text('"No," she answer weakly. "No, I don\'t. I want to have children, but not right now. Not before I go to university."');
  scene.text('"Then you should get on the pill," you continue. "I\'m sure if you ask your mother, then she\'ll help you. I can\'t imagine Vicky not being on the pill at this point, but if you don\'t want to ask her, you can buy it at the local pharmacy. My aunt Luda works there and she won\'t tell anybody about it. She knows how to be discreet."');
  if (((s as any).loc ?? 0) === 'katja_dorm') {
    scene.actions([
      { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave the room', goto: ['mey_home', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
  ]);
  scene.build();
}

function enterRandomParkSexTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 7;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('Katja gives you the most sultry look she can muster. "You know, sex with Ivan and Marcus is great and all, but I was thinking that it might be time to try other boys."');
  scene.text('"Do you have anybody in mind?" you ask.');
  scene.text('"Not any of the boys in the class. I don\'t think anybody except Ivan could keep their mouth shut about having a threesome with the two hottest chicks in school!" she answers. "I don\'t really know anybody else. You\'ve been much more around than me, so maybe you know somebody?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her about the boys in the park', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5);
    scene.text('You tell her that strangers come to the park and look for girls to have fun with, without any commitment, and suggest that you could try to pick up some boys there.');
    scene.text('"Awesome!" she says and looks at you really excitedly. "Why don\'t we go right now?"');
    if (((st as any).katjaQW ?? 0)?.['birth_control_start_day'] < ((st as any).daystart ?? 0)  &&  ((st as any).katjaQW ?? 0)?.['birth_control_start_day'] > 0) {
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    qspGoto(st, 'KatjaHomeTalk', 'go_to_park');
  } },
        { label: 'Not right now', goto: ['KatjaHomeTalk', ''] },
      ]);
    } else {
      scene.text('Remembering that the boys in the park won\'t use protection, you turn Katja down.');
      if (((st as any).katjaQW ?? 0)?.['birth_control_start_day'] === 0) {
        scene.actions([
          { label: 'Tell Katja that you think she should use birth control', goto: ['KatjaHomeTalk', 'preventation_talk'] },
        ]);
      }
      scene.actions([
        { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterSexWithBoyAsk(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 4;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('Katja looks at you nervously, but with that look in her eyes that tells you she\'s thinking about something naughty. "You\'ve told me all about how good it is to have sex with a boy," she meekly says. "I… I think… I think I would like to try it too…"');
  if (((s as any).katjaQW ?? 0)?.['anal_quest'] > 1) {
    scene.text('"So you want me to set it up again?" you ask, and Katja just nods sheepishly. "Okay. Now Ivan doesn\'t fuck girls in the pussy since he\'s afraid of getting them pregnant, so I assume that you want me to find somebody else?"');
    // TODO-QSP: dynamic text: "Yes <<$pcs_nickname>>. You know so many guys, so I''m sure you can arrange my f...
    scene.text(`"Yes ${((s as any).pcs_nickname ?? '')}. You know so many guys, so I'm sure you can arrange my first time to be perfect!" she says in her most persuasive voice.`);
  } else {
    scene.text('"Okay, so why don\'t you?" you ask.');
    scene.text('"I don\'t know how to approach a boy…" she answers. "I don\'t want a boyfriend, I just want to try having sex with a boy. Can\'t you help me arrange it? Please…" she says, looking at you pleadingly with her big eyes.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', goto: ['KatjaHomeTalk', 'boy_discussion'] },
    { label: 'Refuse', handler: (st: GameState) => {
    scene.text('You refuse to help her, but she continues to beg you.');
    scene.actions([
      { label: 'Tell her to ask a boy herself', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (20);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('She stops begging and you return to talking about other subjects.');
    scene.actions([
      { label: 'Continue', goto: ['KatjaHomeTalk', ''] },
    ]);
  } },
      { label: 'You\'re too precious to share', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (20);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('She stops begging and looks at you with lust in her eyes.');
    scene.actions([
      { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
      { label: 'Kiss her', goto: ['katjaEvDin', 'kiss'] },
    ]);
  } },
      { label: 'Tell her to stick with girls', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"Boys aren\'t worth it. Just stick with girls," you tell her and she stops begging, but doesn\'t look completely convinced.');
    scene.actions([
      { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSexWith_ArtemAsk(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 4;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('Katja looks at you nervously, but with a look in her eyes that tells you she\'s thinking about something naughty. "You\'ve told me all about how good your sex with Artem is," she meekly says. "It makes me a little jealous, so I… I wonder… I wonder if I could be part of that too…"');
  scene.text('"So you want to join me and Artem for a threesome?" you ask.');
  scene.text('"Yes… I would like to try to have sex with a boy… and you said how nice he is in bed, so I thought that maybe he would be good for my first time. You would also be there and I\'m sure you would help me have a good time," she answers.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree to a threesome with Artem', goto: ['KatjaHomeTalk', 'artem_threesome_planning'] },
    { label: 'Tell Katja that you don\'t want to share Artem', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I\'m sorry, but I want to keep him for myself. I know that may be selfish, but I don\'t think that I\'m ready to share my boyfriend with other girls," you reply.');
    scene.text('"No problem, I understand that," she says with a small hint of disappointment. "Let me know if you change your mind."');
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  } },
    { label: 'Tell Katja she is too precious to share', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (20);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('She stops begging and looks at you with lust in her eyes.');
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
      { label: 'Kiss her', goto: ['katjaEvDin', 'kiss'] },
    ]);
  } },
    { label: 'Tell her to stick with girls', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"Boys aren\'t worth it. Just stick with girls," you tell her and she stops begging, but doesn\'t look completely convinced.');
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMarcusAnswerTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['marcus_asked'] = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['Marcus_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('You tell Katja that you\'ve talked with Marcus and he agreed.');
  scene.text('She looks at you excitedly. "So when do we do it?"');
  scene.text('"He agreed to come over when I call him, so we can call him right now, or wait for another time," you answer.');
  if (((s as any).week ?? 0) < 6  &&  (((s as any).locat ?? 0)?.['Vicky'] !== 8  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 9  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 12  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 13)  &&  (((s as any).katjaQW ?? 0)?.['horny']+((s as any).katjaQW ?? 0)?.['slut']) > 100) {
    scene.text('"Okay. Let\'s call him right now!" she squeals, her face completely red.');
    scene.actions([
      { label: 'Call Marcus', goto: ['katja_sex', 'marcus_wait'] },
    ]);
  } else {
    if ((((s as any).katjaQW ?? 0)?.['horny'] + ((s as any).katjaQW ?? 0)?.['slut']) <= 100) {
      scene.text('"I don\'t know. Maybe another time. I need to think about it some more," she says while looking a little nervous.');
      scene.text('"Okay, another time then," you reply.');
      scene.actions([
        { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
      ]);
    } else {
      scene.text('"We can\'t call him now! Vicky will be home soon and I don\'t want her to see him here!" she says while looking a little panicked.');
      scene.text('"Okay, we\'ll plan it for another day when we have time," you reply.');
      scene.actions([
        { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstBoySexFollowUp(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 6;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('Katja gives you a big hug. "Thank you! The experience with Marcus was great!" she says with a huge grin.');
  if (((s as any).npc_vag ?? 0)?.['A14'] + 5 < ((s as any).npc_dick ?? 0)?.['A146']) {
    scene.text('"It didn\'t hurt too much?" you ask.');
    scene.text('"It hurt, that was why I couldn\'t take it any longer. But it was fun and I think it\'ll hurt less the next time," she answers.');
    scene.text('"So you want to have sex with a boy again?" you reply.');
  } else {
    scene.text('"It did look like you had fun," you say.');
    scene.text('"I definitely had fun, I thought it would hurt, but I didn\'t feel any pain," she answers.');
    scene.text('"Might be all the times I used my dildo on you," you reply.');
  }
  scene.text('"We should definitely do this again sometime," she finishes.');
  scene.text('"We\'ll see if the opportunity comes up again," you answer.');
  if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] === 0) {
    scene.actions([
      { label: 'Tell her that she should use birth control', goto: ['KatjaHomeTalk', 'preventation_talk'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
  ]);
  scene.build();
}

function enterFirstBoySex_ArtemFollowUp(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 6;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).katjaQW ?? 0)?.['came_during_first_time_with_artem'] === 1) {
    scene.text('Katja gives you a big hug. "Thank you! The experience with Artem was great!" she says with a huge grin.');
    if (((s as any).npc_vag ?? 0)?.['A14'] + 7 < ((s as any).npc_dick ?? 0)?.['A2']) {
      scene.text('"It didn\'t hurt too much?" you ask.');
      scene.text('"It hurt for some time. But the pain went away, or at least I did not feel it anymore at the end, and he made me come so hard," she answers.');
      scene.text('"I\'m glad you had a good time," you reply. "Artem also really liked it."');
    } else {
      scene.text('"It did look like you had fun," you say.');
      scene.text('"I definitely had fun!" she answers. "I thought it would hurt, but I didn\'t feel any pain, and he made me come so hard!"');
      scene.text('"Might be all the times I used my dildo on you," you reply. "Artem also said he had a good time with you."');
    }
    scene.text('"So you think he will be up for it again some time?" she asks with a pleading look in her eyes.');
  } else {
    scene.text('"So how was you first time having sex with a boy?" you ask Katja.');
    if (((s as any).npc_vag ?? 0)?.['A14'] + 7 < ((s as any).npc_dick ?? 0)?.['A2']) {
      scene.text('"It hurt a lot. That\'s probably why I didn\'t cum," she answers.');
      scene.text('"I\'m sorry to hear that," you reply. "Artem is not that experienced, so he might not know how to avoid causing you a little pain."');
      scene.text('"It\'s okay. I didn\'t suffer any permanent damage, and I\'m sure he\'ll do better next time and not cause me any pain so I can also have an orgasm," she says.');
    } else {
      scene.text('"It was fun, but I might have expected more. He didn\'t make me feel great, like you usually do. I didn\'t cum," she answers.');
      scene.text('"I\'m sorry to hear that," you reply. "Artem is not that experienced, so he might be not know how to give you pleasure."');
      scene.text('"It\'s okay. I\'m sure he\'ll do better next time and give me the orgasms I need," she says.');
    }
    scene.text('"So you want to have sex with Artem again?" you ask.');
    scene.text('"If he\'s up for it? I need more experiences with boys before I can make up my mind about it," she replies.');
  }
  scene.text('"I think so, but I\'ll ask him to be sure," you reply, which causes Katja to give you another big hug.');
  if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] === 0) {
    scene.actions([
      { label: 'Tell her that she should use birth control', goto: ['KatjaHomeTalk', 'preventation_talk'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
  ]);
  scene.build();
}

function enterAnalSexWithBoyAsk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['anal_quest'] = 1;
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  // TODO-QSP: dynamic text: Katja starts speaking a little hesitantly. "You keep telling me that anal sex wi...
  scene.text('Katja starts speaking a little hesitantly. "You keep telling me that anal sex with a boy is so good' + ((((s as any).katjaQW ?? 0)?.['strapon_ass'] === 1) ? (', and you fucking me in the ass with your strapon is nice, but it would probably be so much better with a real cock,') : (', and I think I also would like to try it,')) + '" she says while looking at you with her most begging eyes.');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6) {
    scene.text('"So you want me to set it up again?" you ask and she just nods sheepishly. "Okay. Since you asked, I expect that you want to try it with somebody else that isn\'t Marcus?"');
    // TODO-QSP: dynamic text: "Yes, <<$pcs_nickname>>. You know so many guys, so I''m sure you can arrange my ...
    scene.text(`"Yes, ${((s as any).pcs_nickname ?? '')}. You know so many guys, so I'm sure you can arrange my first anal sex to be perfect!" she says in her most persuasive voice.`);
  } else {
    scene.text('"Okay, so why don\'t you?" you ask.');
    scene.text('"I don\'t know how to approach a boy…" she answers. "I don\'t want a boyfriend, I just want to try having anal sex with a boy. Can\'t you help me arrange it? Please…" she says while looking at you pleadingly with her big eyes.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', goto: ['KatjaHomeTalk', 'anal_discussion'] },
    { label: 'Refuse', handler: (st: GameState) => {
    scene.text('You refuse to help her, but she continues to beg you.');
    scene.actions([
      { label: 'Tell her to ask a boy herself', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (20);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('She stops begging and you return to talking about other subjects.');
    scene.actions([
      { label: 'Continue', goto: ['KatjaHomeTalk', ''] },
    ]);
  } },
      { label: 'You\'re too precious to share', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (20);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('She stops begging and looks at you with lust in her eyes.');
    scene.actions([
      { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
      { label: 'Kiss her', goto: ['katjaEvDin', 'kiss'] },
    ]);
  } },
      { label: 'Tell her to stick to girls', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"Boys aren\'t worth it. Just stick with girls," you tell her and she stops begging, but doesn\'t look completely convinced.');
    scene.actions([
      { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterUniTell(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['know_going_to_teaching_degree'] = 1;
    if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) {
      scene.text('You tell Katja that you have enrolled at the university to study to become a teacher.');
      scene.text('She replies that she also plans to do the same and that it will be fun studying at the university together. She then bombards you with questions about how your enrolment process went.');
    } else {
      scene.text('You tell Katja that you have also enrolled to study teaching at the university. She replies that it will be fun studying at the university together before you spend the next few minutes talking excitedly about what you know about the program.');
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) {
      // TODO-QSP: dynamic text: You tell Katja that you have enrolled at the university to study <<$func(''uni_p...
      scene.text(`You tell Katja that you have enrolled at the university to study ${qspFunc(s, 'uni_programs', 'get_program_name')}.`);
      scene.text('She replies that she plans to enroll to study to become a teacher, but that you will probably still see each other often there.');
    } else {
      // TODO-QSP: dynamic text: You tell Katja that you have also enrolled to study <<$func(''uni_programs'', ''...
      scene.text(`You tell Katja that you have also enrolled to study ${qspFunc(s, 'uni_programs', 'get_program_name')}.`);
      scene.text('She replies that she is enrolled in the program to study become a teacher, but that you will probably still see each other often there.');
    }
  }
  if (((s as any).loc ?? 0) === 'mey_home') {
    scene.actions([
      { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
    ]);
  } else {
    if (((s as any).loc ?? 0) === 'pav_disco') {
      scene.actions([
        { label: 'Ask if she wants to dance', goto: ['pav_disco_coolkids', 'katja_dance_ask'] },
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      scene.actions([
        { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKatjaUniTell(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['know_katja_uni'] = 1;
  if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_dorm_room_number'] = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0) {
    // TODO-QSP: 'Katja excitedly tells you that she has been accepted into the university to study teaching. She the...
    if (((s as any).university ?? 0)?.['student'] === 1) {
      scene.actions([
        { label: 'Tell Katja that you\'re going to the university', goto: ['KatjaHomeTalk', 'uni_tell'] },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: Katja excitedly tells you that she has also been accepted into the university to...
    scene.text('Katja excitedly tells you that she has also been accepted into the university to study teaching and that it will be fun studying at the university together.' + ((((s as any).katjaQW ?? 0)?.['QWstage'] === 2) ? ('She also tells you that she is going to move into room 206 at the university dorm at the beginning of August.') : ('')) + '');
    scene.text('You then spend the next few minutes talking excitedly about what you know about the program.');
  }
  if (((s as any).loc ?? 0) === 'mey_home') {
    scene.actions([
      { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
    ]);
  } else {
    if (((s as any).loc ?? 0) === 'pav_disco') {
      scene.actions([
        { label: 'Talk about something else', goto: ['pav_disco_coolkids', 'katja'] },
      ]);
    } else {
      scene.actions([
        { label: 'Enjoy the sun', goto: ['pav_beach_chat', 'katja'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyNo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (20);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['boy_block'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"I don\'t have interest in boys," you tell Katja.');
  scene.text('"Oh," she replies. "Does that mean…" she starts, but her voice falters.');
  scene.text('"Yes. I\'m only interested in girls," you say.');
  scene.text('Katja doesn\'t say anything, but her face is getting redder and she looks intensely at you with her big eyes.');
  if (((s as any).loc ?? 0) === 'katja_dorm') {
    scene.actions([
      { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave the room', goto: ['mey_home', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
  ]);
  scene.build();
}

function enterBoyYes(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['boy_block'] = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"So I told you earlier that I had no interest in boys?" you say.');
  scene.text('"Yes, I remember," she replies.');
  scene.text('"Turns out I was wrong. I am in fact starting to find boys attractive," you say.');
  scene.text('She starts bombarding you with questions. "So have you already done something with a boy? Tell me everything! What is it you find attractive about boys? Who is the hottest guy in school?"');
  scene.text('"Slow down! This is also something new for me, but we can talk about boys if you want to," you say as you see Katja\'s face getting more red.');
  if (((s as any).loc ?? 0) === 'katja_dorm') {
    scene.actions([
      { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave the room', goto: ['mey_home', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
  ]);
  scene.build();
}

function enterFistingAsk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"Wow," she says, sitting there thoughtful while her breathing is becoming more aroused. After a few seconds, she continues. "It didn\'t hurt at all?"');
  scene.text('"Not a lot," you answer. "When you\'re in control, you can make sure that the pain is not too much."');
  scene.text('She looks thoughtful again. "I don\'t think I could do that to myself."');
  scene.text('"That\'s okay. It\'s not for everybody," you say.');
  scene.text('"But it does sound so hot!" she says. "Maybe… you could…" her voice trails off. After a moment, she continues. "Maybe you could show me…"');
  scene.text('"You want me to fist myself here in front of you?" you ask.');
  scene.text('"No, I want you… to…" her voice falters again.');
  scene.text('"You want me to fist you?" you ask. She doesn\'t say anything, but slowly nods. "Right now?"');
  scene.text('Again, she doesn\'t say anything, but nods.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Show Katja how fisting is done', goto: ['katja_sex', 'first_fisting'] },
    { label: 'Say you will do it another time', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You tell her that you\'re not in the mood right now, but you might do it another time if she asks.');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterGoToPark(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
  (s as any).dick = 0;
  qspCall(s, 'placer', 'init');
  ((s as any).placerStringParameter = (s as any).placerStringParameter ?? {})['ev_name'] = 'Katja';
  ((s as any).placerStringParameter = (s as any).placerStringParameter ?? {})['ev_name_a'] = 'Katja';
  ((s as any).placerStringParameter = (s as any).placerStringParameter ?? {})['ev_name_om'] = 'Katja';
  ((s as any).placerParameter = (s as any).placerParameter ?? {})['friend_index'] = 14;
  ((s as any).placerParameter = (s as any).placerParameter ?? {})['friend_horny'] = ((s as any).katjaQW ?? 0)?.['horny'];
  ((s as any).placerParameter = (s as any).placerParameter ?? {})['friend_dom'] = (((s as any).katjaQW ?? {})?.['dom'] ?? 0) + 50;
  ((s as any).placerParameter = (s as any).placerParameter ?? {})['friend_slut'] = ((s as any).katjaQW ?? 0)?.['slut'];
  ((s as any).placerParameter = (s as any).placerParameter ?? {})['friend_alko'] = 0;
  ((s as any).placerParameter = (s as any).placerParameter ?? {})['location_index'] = 0;
  qspGoto(s, 'placer', '');
  // TODO-QSP: end
  scene.build();
}

function enterArtemTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_artem_is_boyfreind'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"So I\'ve heard from Lizveta that you\'re dating Artem. Is that true?" She almost jumps at you with the question.');
  scene.text('"Lizveta is already spreading rumors about that?" you ask. "How does she know?"');
  scene.text('"Of course she is!" Katja replies. "You need to be extremely careful to keep something like that from her."');
  if (((s as any).katjaQW ?? 0)?.['boy_block'] === 1) {
    qspCall(s, 'npc_relationship', 'A14', 'dislike');
    scene.text('"But you told me you don\'t like boys? How come you are suddenly dating one?" she asks, clearly a little hurt.');
    scene.actions([
      { label: 'Tell her it was something that surprised you too', handler: (st: GameState) => {
    scene.text('"I\'m surprised about this too. I thought that I was only attracted to girls, but then hanging out with Artem changed something. He was so cute when he asked me for a data that I couldn\'t say no," you explain.');
    scene.text('"Then he was very romantic on the dates and I fell for him. Turns out that boys can be gentle in bed after all," you continue.');
    scene.actions([
      { label: 'Katja continues', goto: ['KatjaHomeTalk', 'Artem_talk2'] },
    ]);
  } },
      { label: 'Tell her that Artem is different', handler: (st: GameState) => {
    scene.text('"Artem isn\'t like the other boys," you reply. "He\'s gentle mare, like one of us girls."');
    scene.text('"He still has a dick between his legs I assume?" Katja says in a very direct tone.');
    scene.text('"Yes he does, and I found out it\'s not the dick itself that disgusted me since it\'s actually quite nice to play with. It\'s the assholes most dicks are attached to that repulse me."');
    scene.text('The last comment gets a small laugh out of Katja.');
    scene.actions([
      { label: 'Katja continues', goto: ['KatjaHomeTalk', 'Artem_talk2'] },
    ]);
  } },
      { label: 'Tell her that you lied', handler: (st: GameState) => {
    scene.text('"I\'m sorry Katja, but I wasn\'t completely honest. I do like boys, I just didn\'t want to ruin what we have together by having to talk about boys," you explain.');
    scene.text('"You should have trusted me and told me the real reason, then I wouldn\'t have asked you about boys," she replies.');
    scene.text('"I\'m really sorry," you repeat.');
    scene.actions([
      { label: 'Katja continues', goto: ['KatjaHomeTalk', 'Artem_talk2'] },
    ]);
  } },
    ]);
  } else {
    scene.text('"You could have told me you were planning to date him, so I didn\'t have to hear it through Lizveta!" Katja says in a mock hurt voice.');
    scene.text('"I didn\'t want to say anything before I was certain, and now you didn\'t even give me the chance to tell you before jumping on me with questions!" you answer.');
    scene.actions([
      { label: 'Katja continues', goto: ['KatjaHomeTalk', 'Artem_talk2'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterArtemTalk2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 7;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if ((((s as any).katjaQW ?? 0)?.['QWstage'] >= 4  ||  ((s as any).katjaQW ?? 0)?.['slut'] >= 50  ||  ((s as any).katjaQW ?? 0)?.['pussy_sex'] > 0)  &&  ((s as any).npc_had_sex ?? 0)?.['A14']) {
    scene.text('"Never mind, the important question is how is he in bed? Is he a good lover? Does he make you cum?"');
    scene.text('After telling her everything about you and Artem\'s sex life for several minutes, Katja finally comes to the question that\'s really occupying her mind.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6) {
      if (((s as any).katjaQW ?? 0)?.['boy_block'] === 0) {
        scene.text('"I assume that this will end us having sex with other boys?" Katja asks. "And what about us? Will it also mean that we can\'t play together anymore?"');
        scene.text('"Yes. I won\'t have sex with other boys behind his back, but I\'m sure he doesn\'t mind me having some fun with girls," you answer.');
      } else {
        scene.text('"Does this mean that we can\'t play together anymore?" she asks.');
        scene.text('"I\'m sure he doesn\'t mind me having some fun with girls," you answer with a smile.');
      }
      scene.text('After a moment of hesitation, she continues. "So do you think he\'s up for a hot redhead joining the two of you in bed?"');
    } else {
      scene.text('"Does this mean that we can\'t play together anymore?" she asks.');
      scene.text('"I\'m sure he does not mind me having some fun with girls," you answer with a smile.');
      if (((s as any).katjaQW ?? 0)?.['pussy_sex'] > 0) {
        if (((s as any).katjaQW ?? 0)?.['QWstage'] < 6) {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 6;
        }
        scene.text('After a moment of hesitation, she continues. "So do you think he\'s up for a hot redhead joining the two of you in bed?"');
      } else {
        if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 4) {
          scene.text('After a moment of hesitation, she continues. "What about me trying to have sex with a boy? I understand that having Marcus join us won\'t be an option anymore, but do you think you could set it up such that Artem is my first boy?"');
        } else {
          scene.text('After a very long moment of hesitation, she continues. "I\'m somewhat jealous. Now you\'re having sex with a boy. It\'s… It\'s something I would also like to try…"');
          scene.text('She turns bright red and after a long pause, she asks. "Do you… Do you think… Do you think that I could join you and have Artem be my first boy?"');
        }
      }
    }
    scene.actions([
      { label: 'Agree to set up a threesome with Artem', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['boy_block'] = 1
  }, goto: ['KatjaHomeTalk', 'artem_threesome_planning'] },
      { label: 'Tell Katja that you don\'t want to share Artem', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] === 5) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 4;
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['boy_block'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I\'m sorry, but I want to keep him for myself. I know that may be selfish, but I don\'t think that I\'m ready to share my boyfriend with other girls," you reply.');
    scene.text('"No. Problem I understand that," she says with a small hint of disappointment. "Let me know if you change your mind."');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  } },
    ]);
  } else {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['boy_block'] = 1;
    scene.text('"Does this mean that we can\'t play together anymore?" she asks.');
    scene.text('"I\'m sure he doesn\'t mind me having some fun with girls," you answer with a smile.');
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterArtemSexDiscussion(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6) {
    scene.text('"Remember when you asked if you could join me an Artem in a threesome?" you say. "I\'ve decided that it would be fine, if you still want to?"');
  } else {
    scene.text('"I know that you\'ve wanted to try to have sex with a boy for a while, and I\'ve decided that you can join me and Artem in a threesome if you like," you tell Katja.');
  }
  scene.text('Katja\'s face lights up like it was Christmas, and she can barely contain her excitement. "Yes! I\'d very much like that! When do we do it?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell Katja your plan', goto: ['KatjaHomeTalk', 'artem_threesome_planning'] },
  ]);
  scene.build();
}

function enterArtemThreesomePlanning(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 4;
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 16) + 5));
  ((s as any).artemQW = (s as any).artemQW ?? {})['katja_threesome'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"Okay. I think it would be best if we surprise him, that is that you seduce him while I\'m there," you tell Katja.');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] < 5  &&  ((s as any).katjaQW ?? 0)?.['pussy_sex'] === 0) {
    scene.text('"How do I do that? I\'ve never seduced a boy before" she replies.');
    scene.text('"Just try to act slutty around him, make him look at your nice body," you explain. "You\'ll know you got him if he can\'t look away. Boys are easy that way."');
    scene.text('"Okay," she replies, not completely convinced. "But I can\'t do that in a public place."');
  } else {
    scene.text('"Sure, I can act slutty and get him in my claws," she replies. "But it needs to be a private place. I don\'t think he\'s the type of guy who won\'t freeze up when hit on in public."');
  }
  scene.text('"Yeah, it needs to be just the three of us, else he will just panic. My place is no good and his parents are home most of the time I\'m there," you answer.');
  scene.text('"Maybe we could do it here? Tamara works until late and Vicky usually hangs out with Vanya elsewhere when she\'s not at cheerleading practice, so the afternoons here are free," she suggests.');
  scene.text('"That\'s a good idea," you say. "But how do we get him to come here without expecting something?"');
  scene.text('"I don\'t know. Are there any activities we could do together that he could join? Maybe we could do homework together?" she suggests.');
  scene.text('"Yes, that\'s it!" you reply in excitement. "Next time I\'m going home from school with him, you\'ll come and interrupt us, claiming that I promised we would do our homework together. I\'ll then suggest that we all do it together. That way he won\'t suspect anything."');
  scene.text('"That\'s brilliant!" Katja says. "I just have to work on my seduction skills. I\'m looking forward to it."');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] < 5) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 5;
  }
  if (((s as any).loc ?? 0) === 'katja_dorm') {
    scene.actions([
      { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave the room', goto: ['mey_home', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
  ]);
  scene.build();
}

function enterArtemBreakUpTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_artem_is_boyfreind'] = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"So how are you and Artem?" Katja asks in a tone that indicates she knows you\'ve broken up.');
  // TODO-QSP: end
  scene.actions([
    { label: '"I\'m heartbroken"', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 6;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = Math.min(20, ((st as any).katjaQW ?? 0)?.['horny']);
    if (((st as any).katjaQW ?? 0)?.['marcus_pussy'] > 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['Marcus_day'] = ((st as any).daystart ?? 0);
    }
    qspCall(st, 'stat', '');
    scene.text('"We\'re…" you start, but a lump in your throat causes you to immediately choke up. Tears blur your vision and you turn away while rubbing your wrist across your eyes, your face flushing with embarrassment, shame, and sadness all at once.');
    scene.text('"We broke up," you manage to force out, still not looking at Katja. "I… I think this might be the worst thing that\'s ever happened to me. I ruined everything. I miss him every day and…" You finally turn to face her. "I think it broke my heart…"');
    scene.text('"Come here, you poor thing!" Katja says and moves close and hugs you.');
    scene.text('You just sit there, slightly crying into Katja\'s bosom as she gently reassures you that things will be better soon, and you will always have her to lean on in hard times.');
    scene.text('After some time, you stop crying and clear your eyes before you get back to discussing other stuff.');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  } },
    { label: 'Angry about how treated you', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.text('"I know we\'re young and maybe we don\'t know enough to know what love is, but there was something more than just friendship or kissing there. I really thought I had found that special person I could spend the rest of my life with, but he\'s just a jerk like the rest of them. I can\'t believe a dork like him broke my heart and worse still I don\'t think he gives two shits about doing it. Fuck!"');
    scene.text('"Shit, I\'m so sorry to hear that. Nobody should treat you like that. Come here," Katja says and open her arms and pulls you in for a hug.');
    scene.text('"I really thought Artem would be different, but it turns out that even a nerd turns into one of the idiots that call themselves the cool boys when he gets the attention of pretty women."');
    scene.text('"Don\'t worry, you can find much better boys than him. If that\'s what you want," Katja says after she has let go of her hug. You can\'t quite place what she means by her last comment.');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  } },
    { label: 'You could do better', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 11) + 10));
    if (((st as any).katjaQW ?? 0)?.['marcus_pussy'] > 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['Marcus_day'] = ((st as any).daystart ?? 0);
    }
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(st, 'stat', '');
    scene.text('"Artem is a sweetheart and there might not be anyone nicer I could have gone out with, but I always felt like I was just settling for the easy choice. I\'m a pretty girl, I could be dating anyone in that school and I\'m going with him? I hate to hurt him like I did when I ended it, but I was always out of his league and it constantly felt like everyone knew it."');
    scene.text('You sigh. "Sure, I could just ignore them, but he knew it too and I couldn\'t ignore that. I hope he finds a nice homely girl who will make him happy, I really do. He deserves to be happy."');
    scene.text('She looks a little shocked and takes a while before answering. "So looks and status is all? I didn\'t know that I was friends with Bella. I wonder when I won\'t live up to your standards," she says, sounding quite disapproving.');
    scene.text('"It\'s not like that, Katja!" you reply. "Nobody can compare with you! I\'m not leaving you. It\'s just with boys, I think I need to try something more, something exciting, and Artem is not that."');
    scene.text('She doesn\'t look completely convinced, but lets it go and you turn to discuss other things.');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  } },
    { label: 'Sad it had to end', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 6;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = Math.min(40, ((st as any).katjaQW ?? 0)?.['horny']);
    qspCall(st, 'stat', '');
    scene.text('"We\'re… not together anymore," you admit, feeling a pang in your chest. "Looking back, I don\'t think there was any real way to make it last. We weren\'t good for each other, but that doesn\'t mean I\'m happy about breaking up. I miss him, as well as the good times we had together, and I\'m sad that we probably won\'t have anything like that together again."');
    scene.text('"I\'m truly sorry to hear that. Come here," Katja replies and open her arms for you. You lay your head on her bosom and hug her while she continues. "There will be others. I understand it feels like you\'ll never experience love like that again, but I promise you that you will. We\'re still young and beautiful and the world is still open for us. Give it time and everything will be alright."');
    scene.text('You stay in her warm embrace for a few minutes before getting yourself together and discussing other matters.');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  } },
    { label: 'It was for the best', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.text('"We\'re not together anymore," you sigh. "But it\'s probably for the best."');
    scene.text('Katja looks at you with both concern and skepticism, the latter seemingly a worry that you\'re just trying to fool yourself.');
    scene.text('"Really," you add quickly, trying to quell her thoughts. "We weren\'t good for each other. If I really think about it, I can\'t imagine a future where the two of us stayed together forever. It was always going to end with us breaking up. Better to do it now before it gets too painful and too much time is wasted for the both of us."');
    // TODO-QSP: dynamic text: "Okay…" she replies, still not sounding really convinced. "As long as you''re fi...
    scene.text('"Okay…" she replies, still not sounding really convinced. "As long as you\'re fine with it. I liked Artem, but there are other boys out there. ' + ((((st as any).katjaQW ?? 0)?.['QWstage'] >= 6) ? ('Maybe even others we could try together?') : ('You will be fine,')) + '" she ends in a more cheerful note.');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  } },
    { label: 'You got bored of him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.text('"Honestly?" you say. "I got bored. He\'s so… <i>plain.</i> I want a boy who can bring me excitement. At first, just knowing he liked me back was enough to bring that thrill, but the more we were together, the more I saw that all he would do is play video games, study and read. Talk about boring."');
    scene.text('"Reading and studying are not boring!" Katja replies, sounding a little hurt, "If it\'s all you do though, then yes, it is a boring life. No parties? No dancing? Life without those does suck!" she continues in a lighter mood.');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] >= 6) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
      scene.text('"Well there are plenty of other hot guys to fool around with, so I can definitely understand settling with one is boring. We\'re still smoking hot and will find other guys to amuse us," she says sounding a little aroused.');
    } else {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 5));
      // TODO-QSP: dynamic text: "There are plenty of other guys around, so'+iif(pcs_hotcat > 6, ' with your gorg...
      scene.text('"There are plenty of other guys around, so' + ((((st as any).pcs_hotcat ?? 0) > 6) ? (' with your gorgeous looks ') : (' ')) + 'you will find somebody else," she continues.');
      scene.text('You can\'t quite get her tone. Is it a hint of jealousy you detect, and if so, jealous of <i>who?</i> You or the boys she mentioned?');
    }
    qspCall(st, 'stat', '');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 31) + 70)) {
      if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
        qspGoto(st, 'KatjaHomeTalk', 'hornykiss');
      } else {
        qspGoto(st, 'KatjaHomeTalk', 'tender_kiss');
      }
    } else {
      if (((st as any).loc ?? 0) === 'katja_dorm') {
        qspGoto(st, 'katja_dorm', 'talk');
      } else {
        qspGoto(st, 'KatjaHomeTalk', '');
      }
    }
  } },
    ]);
  } },
    { label: 'Artem was holding you back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.text('You roll your eyes. "He was holding me back. I can do so much better than him. He\'s not exciting, and doesn\'t have any ambition. He just plays video games and reads all day. I want someone better. I want someone who makes <i>me</i> better. Artem would\'ve been nothing but dead weight for me."');
    scene.text('"Reading isn\'t boring!" she replies. "But I can understand how it\'s no fun if it\'s the <i>only</i> thing you do together. No parties? No dancing? Life without those do suck!"');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] >= 6) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
      scene.text('"Well there are plenty of other hot guys to fool around with, so I can definitely understand you want to move on. We\'re still smoking hot and will find other guys to amuse us," she says, sounding a little aroused.');
    } else {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 5));
      // TODO-QSP: dynamic text: "There are plenty of other guys around, so'+iif(pcs_hotcat > 6, ' with your gorg...
      scene.text('"There are plenty of other guys around, so' + ((((st as any).pcs_hotcat ?? 0) > 6) ? (' with your gorgeous looks ') : (' ')) + 'you will find somebody else," she continues.');
      scene.text('You can\'t quite get her tone. Is it a hint of jealousy you detect, and if so, jealous of <i>who?</i> You or the boys she mentioned?');
    }
    qspCall(st, 'stat', '');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 31) + 70)) {
      if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
        qspGoto(st, 'KatjaHomeTalk', 'hornykiss');
      } else {
        qspGoto(st, 'KatjaHomeTalk', 'tender_kiss');
      }
    } else {
      if (((st as any).loc ?? 0) === 'katja_dorm') {
        qspGoto(st, 'katja_dorm', 'talk');
      } else {
        qspGoto(st, 'KatjaHomeTalk', '');
      }
    }
  } },
    ]);
  } },
    { label: 'Glad you ditched the sorry loser', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 6;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = -(Math.floor(Math.random() * 11) + 20);
    if (((st as any).katjaQW ?? 0)?.['marcus_pussy'] > 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['Marcus_day'] = ((st as any).daystart ?? 0);
    }
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'hate');
    qspCall(st, 'stat', '');
    scene.text('"Artem? I ditched that sorry loser, I don\'t understand why I kept that nerd around for so long. Totally beneath my standards," you tell her.');
    scene.text('Katja looks at you completely shocked. "Okay, so I\'m talking to Bella here. That is no way to describe a nice guy like Artem.. You\'re channeling the worst girls in school! If you needed to break up with him, fine, but don\'t make it his fault when I can clearly hear that it\'s yours!" she says, sounding quite angry.');
    scene.text('"That\'s not what I meant! It just that Artem doesn\'t live up to the standards I have for…"');
    scene.text('You try to explain, but before you can finish Katja interrupts you. "So when will I fail to live up to the standards of the Princess of Pavlovsk? You\'re sounding like the stupid bitches at school!" she almost shouts at you.');
    scene.text('You get the feeling that nothing you can say right now will make her see your side, so you just apologize. Katja doesn\'t say anything and just ignores you for a few minutes before returning to talk about other things.');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  } },
    { label: 'You cheated on him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 5));
    scene.text('"The truth is… I cheated on him," you confess and Katja gasps in shock before you continue. "I\'m not sure why. Maybe it was just the thrill. Maybe I was bored of him. Maybe I just wanted an excuse to break up. Maybe I just like hurting people. Or maybe I\'m just a slut, I don\'t know. But I slept with another guy and he found out about it. That\'s why we broke up."');
    scene.text('"I see. Well if you promised you would be faithful, then it\'s clearly your fault, and he was right to break up with you," she replies, which hurts a little, but you don\'t feel that she\'s mad at you.');
    // TODO-QSP: dynamic text: "I don''t care how many boys you sleep with," she continues. '+iif(katjaQW['QWst...
    scene.text('"I don\'t care how many boys you sleep with," she continues. ' + ((((st as any).katjaQW ?? 0)?.['QWstage'] >= 6) ? ('"As long as you share some with me,"') : ('"It gives you good stories to tell me,"')) + ' she says in a very low voice.');
    scene.text('You can\'t quite get her tone. Is it a hint of jealousy you detect, and if so, jealous of <i>who?</i> You or the boys she mentioned?');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 31) + 70)) {
      if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
        qspGoto(st, 'KatjaHomeTalk', 'hornykiss');
      } else {
        qspGoto(st, 'KatjaHomeTalk', 'tender_kiss');
      }
    } else {
      if (((st as any).loc ?? 0) === 'katja_dorm') {
        qspGoto(st, 'katja_dorm', 'talk');
      } else {
        qspGoto(st, 'KatjaHomeTalk', '');
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterArtemOpneRelationship(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['boy_block'] = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 16) + 5));
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"So Artem and I have decided that we have an open relationship," you tell Katja.');
  scene.text('"Open relationship? What does that mean?" she asks.');
  scene.text('"It means that I can have sex with any boy or girl I like whenever I like, just as he can have sex with any girl he likes," you explain. "Boys too for that matter, but I don\'t think he wants that."');
  scene.text('"So does that mean.." Katja starts, but her words trail off.');
  scene.text('"Yes, it means you can have sex with him when I\'m not around," you smile.');
  scene.text('"Oh… But that\'s not what I meant," she says.');
  if (((s as any).loc ?? 0) === 'katja_dorm') {
    scene.actions([
      { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave the room', goto: ['mey_home', 'start'] },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['park_sex'] > 0) {
    // TODO-QSP: dynamic text: "No. I meant that we could start going to the park again looking for '+iif(katja...
    scene.text('"No. I meant that we could start going to the park again looking for ' + ((((s as any).katjaQW ?? 0)?.['park_sex'] > 1) ? ('boys') : ('a boy')) + ' to have fun with," she explains.');
  } else {
    if (((s as any).katjaQW ?? 0)?.['marcus_pussy'] + ((s as any).katjaQW ?? 0)?.['ivan_anal'] + ((s as any).katjaQW ?? 0)?.['lazar_pussy'] + ((s as any).katjaQW ?? 0)?.['lazar_anal']> 0) {
      if (((s as any).katjaQW ?? 0)?.['marcus_pussy'] + ((s as any).katjaQW ?? 0)?.['ivan_anal'] === 2) {
        scene.text('"No, I meant that we could start having sex with Marcus and Ivan again," she explains.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['marcus_pussy'] > 0) {
          scene.text('"No, I meant that we could start having sex with Marcus again," she explains.');
        } else {
          if (((s as any).katjaQW ?? 0)?.['ivan_anal'] > 0) {
            scene.text('"No, I meant that we could start having sex with Ivan again," she explains.');
          } else {
            scene.text('"No, I meant that we could start having sex with Lazar again," she explains.');
          }
        }
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6) {
        scene.text('"No, I meant that you and me could maybe find another guy to try to have sex with?" she explains.');
        scene.actions([
          { label: 'Ask if she has anybody in mind', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      if (((st as any).katjaQW ?? 0)?.['lazar_uni_meet'] === 1) {
        qspGoto(st, 'katja_dorm', 'lazar_pussy_talk');
      } else {
        scene.text('"Nobody at the moment, no, but let\'s keep a look out for candidates," she answers.');
        scene.actions([
          { label: 'Talk about something else', handler: (st: GameState) => {
    qspGoto(st, 'katja_dorm', 'talk');
  } },
        ]);
      }
    } else {
      qspGoto(st, 'KatjaHomeTalk', 'Marcus_discussion', '1');
    }
  } },
        ]);
      } else {
        scene.text('"You know that I\'ve never had sex with a boy. So I meant… You know, never mind. Let\'s talk about something else," she continues.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
  ]);
  scene.build();
}

function enterMarcusDiscussion(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['marcus_asked'] = (-1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 2) {
    scene.text('"I kind of miss our threesomes, now that you no longer have a boyfriend," Katja says. "Maybe we could find somebody else to have fun with, but it needs to be somebody that can keep quiet about it!"');
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 0  &&  ((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1) {
      scene.text('"So now that you and Artem have an open relationship, I was thinking that you maybe you and me could try having sex with another guy?" Katja asks while looking at you pleadingly.');
    }
  }
  if (((s as any).Marcus_sextype ?? 0) > 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (20);
    scene.text('"I sometimes have sex with Marcus, and I can tell you he\'s really into Russian girls. I\'m sure that he would love to have sex with a Russian beauty like you."');
    scene.text('"Marcus is very good-looking… If you think he would be willing to have sex with a girl like me…" she trails off, starting to sound nervous again.');
    scene.text('"I\'m sure that he would love to have sex with you. As any man who isn\'t gay would," you answer and Katja\'s face brightens up before she moves towards you for a kiss.');
    scene.actions([
      { label: 'Kiss her back', goto: ['katjaEvDin', 'kiss'] },
    ]);
  } else {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    scene.text('"Do you have any boy in mind?" you ask.');
    scene.text('"I don\'t know. Lazar is hot, but I have the feeling that he would just consider me a check on his list, and not be able to keep his mouth shut," she answers before pondering. "Maybe Marcus? He\'s very good-looking, and I haven\'t heard of him spreading rumors. Most of the others don\'t listen to what he says anyway because he\'s black and from America. Do you think he will want to have sex with me?"');
    scene.text('"I don\'t know, I\'ve never had sex with him," you answer. "Maybe you could try that…"');
    // TODO-QSP: dynamic text: Katja looks at you pleadingly with her big eyes. "Please <<$pcs_nickname>>. I do...
    scene.text(`Katja looks at you pleadingly with her big eyes. "Please ${((s as any).pcs_nickname ?? '')}. I don't know how to seduce a boy. You are much better at such things, couldn't you seduce him first?"`);
    scene.text('"Marcus is hot, but how would I approach him?" you ask.');
    scene.text('"Try to dance with him at the disco, and get close to him. He really seems to like the girls there, and since you\'re the hottest there, I\'m sure he\'ll like it, especially if you lead him on like you know how to do," she says in her most flattering voice.');
    scene.text('You smile. "Okay, I\'ll try to dance with him at the disco, and see if I can seduce him."');
    scene.text('"You are the bestest friend!" she says with a huge smile and gives you a tight hug.');
    scene.actions([
      { label: 'Talk about something else', goto: ['KatjaHomeTalk', ''] },
      { label: 'Leave the room', goto: ['mey_home', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'chat':
      enterChat(s, scene);
      break;
    case 'katjaknows':
      enterKatjaknows(s, scene);
      break;
    case 'katjaknows1':
      enterKatjaknows1(s, scene);
      break;
    case 'shower_kiss_home':
      enterShowerKissHome(s, scene);
      break;
    case 'homework':
      enterHomework(s, scene);
      break;
    case 'hornykiss':
      enterHornykiss(s, scene);
      break;
    case 'tender_kiss':
      enterTenderKiss(s, scene);
      break;
    case 'marcus_kiss':
      enterMarcusKiss(s, scene);
      break;
    case 'TamVal':
      enterTamVal(s, scene);
      break;
    case 'TamVal_2':
      enterTamVal_2(s, scene);
      break;
    case 'boy_discussion':
      enterBoyDiscussion(s, scene);
      break;
    case 'anal_discussion':
      enterAnalDiscussion(s, scene);
      break;
    case 'preventation_talk':
      enterPreventationTalk(s, scene);
      break;
    case 'random_park_sex_talk':
      enterRandomParkSexTalk(s, scene);
      break;
    case 'sex_with_boy_ask':
      enterSexWithBoyAsk(s, scene);
      break;
    case 'sex_with_Artem_ask':
      enterSexWith_ArtemAsk(s, scene);
      break;
    case 'Marcus_answer_talk':
      enterMarcusAnswerTalk(s, scene);
      break;
    case 'first_boy_sex_follow_up':
      enterFirstBoySexFollowUp(s, scene);
      break;
    case 'first_boy_sex_Artem_follow_up':
      enterFirstBoySex_ArtemFollowUp(s, scene);
      break;
    case 'anal_sex_with_boy_ask':
      enterAnalSexWithBoyAsk(s, scene);
      break;
    case 'uni_tell':
      enterUniTell(s, scene);
      break;
    case 'katja_uni_tell':
      enterKatjaUniTell(s, scene);
      break;
    case 'boy_no':
      enterBoyNo(s, scene);
      break;
    case 'boy_yes':
      enterBoyYes(s, scene);
      break;
    case 'fisting_ask':
      enterFistingAsk(s, scene);
      break;
    case 'go_to_park':
      enterGoToPark(s, scene);
      break;
    case 'Artem_talk':
      enterArtemTalk(s, scene);
      break;
    case 'Artem_talk2':
      enterArtemTalk2(s, scene);
      break;
    case 'artem_sex_discussion':
      enterArtemSexDiscussion(s, scene);
      break;
    case 'artem_threesome_planning':
      enterArtemThreesomePlanning(s, scene);
      break;
    case 'Artem_break_up_talk':
      enterArtemBreakUpTalk(s, scene);
      break;
    case 'artem_opne_relationship':
      enterArtemOpneRelationship(s, scene);
      break;
    case 'Marcus_discussion':
      enterMarcusDiscussion(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const KatjaHomeTalk: LocationDef = {
  name: 'KatjaHomeTalk',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'livingr',
  description: ['Katja looks calm and stoic.'],
  enter: enter,
};
