import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterJournalQuests(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] > 0) {
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 1) {
      scene.text('Natasha is a good friend but perhaps she could be more…');
    } else {
      if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 2) {
        scene.text('Natasha and I shared a kiss, she is such a great friend.');
      } else {
        if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 3) {
          if (((s as any).NatbelQW ?? 0)?.['chrispaid'] < 5) {
            if (((s as any).christinaQW ?? 0)?.['fight'] === 1) {
              scene.text('You have defeated Christina, you should talk to her about Natasha.');
            } else {
              if (((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
                scene.text('You have blackmail on Christina, maybe you can use that to help Natasha.');
              } else {
                scene.text('Maybe you can help Natasha with Christina');
              }
            }
          } else {
            scene.text('Natasha and I are lovers, maybe I could take her on a shopping trip?');
          }
        } else {
          if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 4) {
            scene.text('I have suggested a shopping trip with my lover Natasha.');
          } else {
            if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 5) {
              scene.text('I took Natasha (my lover) on a shopping trip, maybe she would like to go on another one?');
            } else {
              if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 6) {
                scene.text('I have suggested another shopping trip to my lover, Natasha.');
              } else {
                if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 7) {
                  scene.text('I have been on another shopping trip with Natasha, maybe it\'s time to take our relationship further.');
                } else {
                  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 8) {
                    scene.text('My lover Natasha and I are sexually active.');
                  } else {
                    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 9) {
                      scene.text('My lover Natasha and I are sexually active, and actively dating.');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).NatbelQW ?? 0)?.['rel_type'] > 0) {
      // TODO-QSP: dynamic text: We defined our relationship and are now in ' + iif(NatbelQW['rel_type'] = 2, 'an...
      scene.text('We defined our relationship and are now in ' + ((((s as any).NatbelQW ?? 0)?.['rel_type'] === 2) ? ('an open') : ('an exclusive')) + ' relationship.');
    }
    if (((s as any).NatbelQW ?? 0)?.['disco_invite'] === 1) {
      scene.text('She\'d probably enjoy going to the disco with you if you ask.');
    } else {
      if (((s as any).NatbelQW ?? 0)?.['disco_invite'] === 2) {
        scene.text('You have asked her to go to the disco with you so you should visit her place on Saturday evening.');
      } else {
        if (((s as any).NatbelQW ?? 0)?.['disco_invite'] === 3) {
          scene.text('You\'ve been to the disco with her and she\'ll be happy to dance with you there in the future.');
        }
      }
    }
    if (((s as any).NatbelQW ?? 0)?.['shopping'] === 1) {
      if (((s as any).daystart ?? 0) <= ((s as any).NatbelQW ?? 0)?.['evt_day'] + 6 + ((s as any).week ?? 0)) {
        scene.text('The two of you are going on a shopping spree on the weekend next week.');
      } else {
        // TODO-QSP: dynamic text: The two of you are going on a shopping spree on the weekend. You need 2.000 <b>₽...
        scene.text('The two of you are going on a shopping spree on the weekend. You need 2.000 <b>₽</b> and meet her before 15:00.');
      }
    } else {
      if (((s as any).NatbelQW ?? 0)?.['disco_invite'] === 3  &&  ((s as any).NatbelQW ?? 0)?.['shopping'] === 2  &&  (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 7  ||  ((s as any).NatbelQW ?? 0)?.['FriendLover'] === 8)) {
        scene.text('It seems like Natasha wants to ask something of you. Maybe you should talk to her.');
      } else {
        if (((s as any).NatbelQW ?? 0)?.['shopping'] === 3  &&  (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 7  ||  ((s as any).NatbelQW ?? 0)?.['FriendLover'] === 8)) {
          // TODO-QSP: dynamic text: You''ve promised Natasha to take her to St. Petersburg ' + iif(daystart < Natbel...
          scene.text('You\'ve promised Natasha to take her to St. Petersburg \' + iif(daystart < NatbelQW[\'StP_trip_daystart\'], \'in ' + (((s as any).NatbelQW ?? {})?.['StP_trip_daystart'] ?? 0)-((s as any).daystart ?? '') + ' days\', iif((week=6 and hour < 14), \'today\', \'next saturday\')) + \', picking her up at her place between 12:00 and 14:00.');
        }
      }
    }
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 8) {
      if (((s as any).NatbelQW ?? 0)?.['mother_talk'] < 2  &&  qspFunc(s, 'homes_properties', 'is_current_home', 'parents_home')) {
        if (((s as any).NatbelQW ?? 0)?.['mother_talk'] === 0) {
          scene.text('You should talk to your mother about Natasha.');
        } else {
          if (((s as any).NatbelQW ?? 0)?.['mother_talk'] === 1) {
            if (((s as any).daystart ?? 0) <= ((s as any).NatbelQW ?? 0)?.['mother_talkday']) {
              scene.text('You should talk to your mom on a later day again.');
            } else {
              scene.text('You should reconcile with your mother.');
            }
          } else {
            if (((s as any).NatbelQW ?? 0)?.['mother_talk'] === 2) {
              scene.text('You\'ve reconciled with your mother and she accepts your relationship with Natasha.');
            }
          }
        }
      } else {
        if (((s as any).NatbelQW ?? 0)?.['Isabella'] === 0) {
          // TODO-QSP: dynamic text: Maybe you should be at home between '+func('time', 'get_time_string', 19, 0)+' a...
          scene.text('Maybe you should be at home between 19:00 and 23:00.');
        } else {
          if (((s as any).NatbelQW ?? 0)?.['Isabella'] === 1) {
            scene.text('You\'ve helped Natasha find her mother, maybe you should visit her.');
          } else {
            if (((s as any).NatbelQW ?? 0)?.['Isabella'] === 2) {
              scene.text('Natasha has shared her concerns about her mother with you.');
            }
          }
        }
      }
    }
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 3) {
      if (((s as any).NatbelQW ?? 0)?.['bday_invite'] === 0  &&  (((s as any).day ?? 0) >= 22  &&  ((s as any).month ?? 0) === 6)  ||  (((s as any).day ?? 0) < 6  &&  ((s as any).month ?? 0) === 7)) {
        scene.text('Natasha has something to tell you');
      } else {
        if (((s as any).NatbelQW ?? 0)?.['bday_invite'] === 1) {
          if (((s as any).daystart ?? 0) < ((s as any).NatbelQW ?? 0)?.['bday_day'] - 1) {
            // TODO-QSP: dynamic text: You have been invited to Natasha''s birthday party at cafe Del Parco in <<Natbel...
            scene.text(`You have been invited to Natasha's birthday party at cafe Del Parco in ${(((s as any).NatbelQW ?? {})?.['bday_day'] ?? 0) - ((s as any).daystart ?? '')} days.`);
          } else {
            if (((s as any).daystart ?? 0) === ((s as any).NatbelQW ?? 0)?.['bday_day'] - 1) {
              scene.text('You have been invited to Natasha\'s birthday party at cafe Del Parco tomorrow.');
            } else {
              if (((s as any).daystart ?? 0) === ((s as any).NatbelQW ?? 0)?.['bday_day']) {
                scene.text('Natasha\'s birthday party at Del Parco is today!');
                // TODO-QSP: dynamic text: You should meet them there between '+func('time', 'get_time_string', 18, 30)+' a...
                scene.text('You should meet them there between 18:30 and 20:00.');
              } else {
                scene.text('You have missed Natasha\'s birthday party, maybe you should talk to Natasha.');
              }
            }
          }
        } else {
          if (((s as any).NatbelQW ?? 0)?.['bday_invite'] === 2) {
            scene.text('You went to Natasha\'s birthday party.');
          } else {
            if (((s as any).NatbelQW ?? 0)?.['bday_invite'] === 3) {
              scene.text('You have missed Natasha\'s birthday party, but Natasha is understanding.');
            }
          }
        }
      }
    }
    if (((s as any).NatbelQW ?? 0)?.['end_of_gschool_chat'] === 0) {
      if (((s as any).year ?? 0) === 2017  &&  (((s as any).month ?? 0) === 4  &&  ((s as any).day ?? 0) >= 26  ||  ((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) < 26)) {
        scene.text('Natasha wants to talk to you about something.');
      }
    } else {
      if (((s as any).NatbelQW ?? 0)?.['end_of_gschool_chat'] === 1) {
        scene.text('Natasha has told you that she\'s going to uni and you\'ve told her you\'re going too.');
      }
    }
  } else {
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 0  &&  ((s as any).NatbelQW ?? 0)?.['blocked'] === 1) {
      if (((s as any).NatbelQW ?? 0)?.['block_reason'] === 'slut') {
        scene.text('Natasha and I broke up because of my recent behaviour.');
        if (((s as any).daystart ?? 0) <= ((s as any).NatbelQW ?? 0)?.['block_day']) {
          scene.text('You\'d best give Natasha some time to think on her decision. Maybe after a couple of weeks she might reconsider and get back together with you.');
        } else {
          scene.text('It\'s been a few weeks now, maybe you should try to talk to Natasha again.');
        }
      } else {
        if (((s as any).NatbelQW ?? 0)?.['block_reason'] === 'uni') {
          scene.text('You and Natasha broke up because she\'s going to university and if you\'re not there she doesn\'t believe she can make it work.');
          scene.text('Maybe you can try to convince her after she has started her courses there.');
        }
      }
      if (((s as any).daystart ?? 0) >= 579) {
        // TODO-QSP: dynamic text: She spends time at The Coffee Hole on Vasilyevsky Island after her classes (betw...
        scene.text('She spends time at The Coffee Hole on Vasilyevsky Island after her classes (between 15:00 and 18:00, weekdays).');
      }
    } else {
      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
        if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 0) {
          scene.text('Natasha seems really smart. I should try to befriend her to help me with my grades. During school breaks seems like a good time to chat her up. It might take a lot of effort for her to trust me though.');
        } else {
          if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 1) {
            scene.text('Natasha agreed to help me with my homework. I just need to visit her in her apartment after school. I should chat with her a few times before bringing up anything involving money though.');
          } else {
            if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 2) {
              scene.text('Natasha has borrowed money from me. In return, she has to do my homework whenever I tell her. Once her 30 days are up, I should ask for my money back and see where it goes because I don\'t actually expect her to be able to pay it back.');
            } else {
              if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 3) {
                scene.text('Since Natasha cannot seem to pay back her debt to me, I should start forcing her to do things for me. Making her do my homework seems like a good place to start. I will let her do that for me a few times, and see what else I can get her to do.');
              } else {
                if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 4) {
                  scene.text('I need to have Natasha carry my books to school if I want to keep corrupting her. I can do that before school, in the hallway of my parents apartment.');
                } else {
                  if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 5) {
                    scene.text('Natasha is pretty much my slave now. Let\'s see how well she can handle worshipping my feet the next time I\'m in her bedroom.');
                  } else {
                    if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 6) {
                      scene.text('Natasha has a kinky side, she just doesn\'t realize it yet. Next time I\'m in her bedroom, I should see how she handles bodily fluids in her mouth.');
                    } else {
                      if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 7) {
                        scene.text('I think Natasha could learn to please me. I should have her practice with her tongue when I am in her room.');
                      } else {
                        if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 8) {
                          scene.text('Kolka seems pretty horny these days. I could invite him over to Natasha\'s apartment in the afternoon. I should talk to him about it, after teasing him in the mornings when I have her carry my books.');
                        } else {
                          if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 9) {
                            scene.text('I bet Olu would love to give Natasha a ride. I should see what he thinks of other girls joining us. If I haven\'t had sex with him yet, I will need to do that first.');
                          } else {
                            if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 10) {
                              scene.text('I should check Natasha\'s fridge. I\'m sure there\'s something I can use to keep corrupting her. It would be a good time to do this when she is in the laundry room.');
                            } else {
                              if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 11) {
                                scene.text('This is the end of Natasha\'s quest line, for now.');
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
  if (((s as any).daystart ?? 0) >= 579  &&  ((s as any).daystart ?? 0) < 1400) {
    if (((s as any).NatbelQW ?? 0)?.['uni_nightclub_date'] === 0) {
      if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 3) {
        // TODO-QSP: dynamic text: I think Natasha is at the coffee hole most days, maybe I should stop by. (betwee...
        scene.text(`I think Natasha is at the coffee hole most days, maybe I should stop by. (between ${qspFunc(s, 'time', 'get_time_string', 16, 0)} and ${qspFunc(s, 'time', 'get_time_string', 21, 0)})`);
      }
    } else {
      if (((s as any).NatbelQW ?? 0)?.['uni_nightclub_date'] === 1) {
        // TODO-QSP: dynamic text: You promised to meet up with Natasha next Saturday at the coffee hole between <<...
        scene.text(`You promised to meet up with Natasha next Saturday at the coffee hole between ${qspFunc(s, 'time', 'get_time_string', 19, 0)} and ${qspFunc(s, 'time', 'get_time_string', 21, 0)}.`);
      } else {
        if (((s as any).NatbelQW ?? 0)?.['uni_nightclub_date'] >= 2) {
          // TODO-QSP: dynamic text: Natasha spends time at The Coffee Hole after classes (between <<$func(''time'', ...
          scene.text(`Natasha spends time at The Coffee Hole after classes (between ${qspFunc(s, 'time', 'get_time_string', 15, 0)} and ${qspFunc(s, 'time', 'get_time_string', 18, 0)}, weekdays). Why not stop by and ask her out on a date?`);
        }
      }
    }
  }
  if (((s as any).natbelQW ?? 0)?.['designs_unlock_day'] > 0  &&  ((s as any).natbelQW ?? 0)?.['designs_complete'] === 0) {
    if (((s as any).natbelQW ?? 0)?.['designs_chat_done'] === 0) {
      if (((s as any).daystart ?? 0) >= ((s as any).natbelQW ?? 0)?.['designs_unlock_day'] + 30) {
        scene.text('Natasha seems to have something on her mind. It might be worth catching up with her at The Coffee Hole.');
      }
    } else {
      if (((s as any).natbelQW ?? 0)?.['designs_aphrodite_done'] === 0) {
        scene.text('You promised Natasha you\'d look into getting a professional opinion on her fashion designs.');
      } else {
        if (((s as any).natbelQW ?? 0)?.['tailor_visit_day'] === 0) {
          scene.text('After a promising meeting you and Natasha agreed to get some of her designs made up.');
        } else {
          if (((s as any).natbelQW ?? 0)?.['tailor_collected'] === 0) {
            if (((s as any).daystart ?? 0) < ((s as any).natbelQW ?? 0)?.['tailor_visit_day'] + 30) {
              scene.text('You\'ve left Natasha\'s designs with a tailor in the residential area. He asked you to come back in about a month.');
            } else {
              // TODO-QSP: dynamic text: The clothes should be ready to collect from the tailor. You''ll need <<$func(''m...
              scene.text(`The clothes should be ready to collect from the tailor. You'll need ${qspFunc(s, 'money', 'string_price', 10000)} to pay for them.`);
            }
          } else {
            scene.text('Natasha\'s designs have been photographed. Julia had some interesting ideas about how to show them off.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNatDebtTimer(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 2  &&  ((s as any).NatbelQW ?? 0)?.['Debt'] > 0) {
    ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['DebtTimeLeft'] = (((s as any).NatbelQW ?? {})?.['DebtDay'] ?? 0) - ((s as any).daystart ?? 0);
    if (((s as any).NatbelQW ?? 0)?.['DebtTimeLeft'] > 0) {
      // TODO-QSP: dynamic text: Natasha has promised to pay you back in <<NatbelQW[''DebtTimeLeft'']>> day(s).
      scene.text(`Natasha has promised to pay you back in ${((s as any).NatbelQW ?? 0)?.['DebtTimeLeft'] ?? ''} day(s).`);
    } else {
      scene.text('Natasha promised to pay you back by now, maybe you should talk to her about it.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMakeHerDoHomework(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 2) {
    // TODO-QSP: exit
  }
  if (((s as any).NatbelQW ?? 0)?.['Debt'] <= 0) {
    // TODO-QSP: exit
  }
  if (((s as any).NatbelQW ?? 0)?.['homework_day'] === ((s as any).daystart ?? 0)) {
    // TODO-QSP: exit
  }
  if (((s as any).lernHome ?? 0) > 0) {
    scene.actions([
      { label: 'Make her do your homework', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'grades', 'homework', 'school', 'yes', 1, 2, 'A16');
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['homework_day'] = ((st as any).daystart ?? 0);
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['homework'] = ((st as any).NatbelQW['homework'] ?? 0) + (1);
    if (((st as any).NatbelQW ?? 0)?.['homework'] >= 3  &&  ((st as any).NatbelQW ?? 0)?.['QWstage'] === 3) {
      ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['QWstage'] = 4;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/study.jpg');
    if (((st as any).NatbelQW ?? 0)?.['QWstage'] === 3) {
      scene.text('"Well Natasha, since I won\'t be seeing my money anytime soon I think it\'s best for now if you repay me by doing my homework for me." You tell her in a threatening voice.');
    } else {
      if (((st as any).NatbelQW ?? 0)?.['QWstage'] === 4) {
        scene.text('"Well Natasha, on top of doing my homework for me, you\'ll be carrying my books to school in the morning from now on." You tell her in a threatening voice.');
      }
    }
    scene.text('Natasha sighs with a resigned look as she nods meekly and starts working on your homework as well as hers.');
    if (((st as any).NatbelQW ?? 0)?.['QWstage'] > 5) {
      scene.actions([
        { label: 'Continue', goto: ['natbel_cp_1', 'hwundress'] },
      ]);
    } else {
      scene.text('You relax on her bed and start daydreaming for a while.');
      // TODO-QSP: dynamic text: You are woken out of your daydream by Natasha saying: "It''s done <<$pcs_nicknam...
      scene.text(`You are woken out of your daydream by Natasha saying: "It's done ${((st as any).pcs_nickname || '')}."`);
      scene.text('"Good, let me have a look at it."');
      scene.actions([
        { label: 'Take your finished homework', goto: ['natbelapt', 'natroom'] },
      ]);
    }
  } },
    ]);
  } else {
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 3) {
      scene.actions([
        { label: 'Make her write some lines', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['homework_day'] = ((st as any).daystart ?? 0);
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['homework'] = ((st as any).NatbelQW['homework'] ?? 0) + (1);
    if (((st as any).NatbelQW ?? 0)?.['homework'] >= 3  &&  ((st as any).NatbelQW ?? 0)?.['QWstage'] === 3) {
      ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['QWstage'] = 4;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/study.jpg');
    scene.text('Natasha sighs with a resigned look as she nods meekly.');
    // TODO-QSP: dynamic text: "I should make you do my homework but I''ve already done it, so instead you can ...
    scene.text(`"I should make you do my homework but I've already done it, so instead you can write out some lines for me. Write 'I will do as ${((st as any).pcs_firstname || '')} tells me' one thousand times."`);
    scene.text('You relax on her bed and start daydreaming for a while.');
    // TODO-QSP: dynamic text: You are woken out of your daydream by Natasha saying: "It''s done <<$pcs_nicknam...
    scene.text(`You are woken out of your daydream by Natasha saying: "It's done ${((st as any).pcs_nickname || '')}."`);
    scene.text('"Good, let me have a look at it."');
    scene.text('You tear the paper up and throw the pieces in the bin.');
    scene.actions([
      { label: 'Let\'s hope she learned her lesson', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCarrybooks(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 4;
  qspCall(s, 'stat', '');
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 4) {
    ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['QWstage'] = 5;
  }
  scene.img('images/characters/pavlovsk/school/girl/natasha/natgetreadyschool.jpg');
  scene.text('When you head over to Natasha\'s apartment to pick her up her mother opens the door and tells you she\'s in her room getting ready so you go there.');
  scene.text('As you open the door you see Natasha sitting on her small sofa, pulling up her stockings');
  scene.text('"Ready to go?" You ask her, as you put your bag next to her.');
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 7) {
    qspCall(s, 'willpower', 'exhib', 'force', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Lift her skirt', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Lift her skirt', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'force', 'easy');
    qspCall(st, 'willpower', 'pay', 'force');
    scene.img('images/characters/pavlovsk/school/girl/natasha/skirt.jpg');
    scene.text('You can\'t stop yourself from pulling up her skirt as she turns to grab your bag. "Cute panties Natasha, they match the stockings."');
    // TODO-QSP: dynamic text: Natasha looks over her shoulder at you with a faint blush on her cheeks. "I… Uhm...
    scene.text(`Natasha looks over her shoulder at you with a faint blush on her cheeks. "I… Uhm… Thank you ${((st as any).pcs_nickname || '')}." She says, blushing at you prettily.`);
    scene.text('"We have some time before school." You tell her while you start pulling off her skirt and panties.');
    scene.text('"Today you\'ll be wearing them a little differently." You say, pushing her back on the couch. "Open your legs."');
    scene.text('Natasha obediently opens her legs for you. Showing off her pretty pussy. Not wasting any time you start playing with her, first rubbing her lips, then focussing more on her clit as you watch closely while Natasha\'s pussy gets wetter and wetter.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.actions([
      { label: 'Stuff her panties', handler: (st: GameState) => {
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['panty_stuff_day'] = ((st as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/stuffpanties.mp4');
    scene.text('You stop playing with her pussy and grab her panties, handing them over to her. "Put them inside your pussy."');
    scene.text('Natasha looks at you in confusion for a second but then starts to slowly push them into her pussy.');
    // TODO-QSP: dynamic text: When there''s only enough left to easily grab on in case you''d want to pull the...
    scene.text(`When there's only enough left to easily grab on in case you'd want to pull them out she stops and looks at you expectantly. "Like this ${((st as any).pcs_nickname || '')}?"`);
    scene.text('You reach down and push the last bit inside as well, holding them in with your finger for a bit before pulling your finger out again.');
    scene.text('"This is how you\'ll wear your panties for me at school today Natasha." You tell her. "Now put your skirt back on or we\'ll be late.');
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to school', goto: ['natbelEv', 'schoolwalk'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] > 5) {
      qspCall(s, 'willpower', 'exhib', 'force', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Lift her skirt', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Lift her skirt', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'force', 'easy');
    qspCall(st, 'willpower', 'pay', 'force');
    scene.img('images/characters/pavlovsk/school/girl/natasha/skirt.jpg');
    scene.text('You can\'t stop yourself from pulling up her skirt as she turns to grab your bag. "Cute panties Natasha, they match the stockings."');
    // TODO-QSP: dynamic text: Natasha looks over her shoulder at you with a faint blush on her cheeks. "I… Uhm...
    scene.text(`Natasha looks over her shoulder at you with a faint blush on her cheeks. "I… Uhm… Thank you ${((st as any).pcs_nickname || '')}." She lets out in a whisper.`);
    scene.text('Not wanting to lose your mule to school you let her skirt fall down again and head to school.');
    scene.actions([
      { label: 'Go to school', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('Natasha grabs both of your bags and you head to school.');
      scene.actions([
        { label: 'Go to school', goto: ['gschool_grounds', 'main'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to school', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 9;
    qspGoto(st, 'gschool_grounds', 'main');
  } },
  ]);
  scene.build();
}

function enterSchoolwalk(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 5) + 0))) {
    if (((s as any).NatbelQW ?? 0)?.['KolkaTease'] === 0) {
      ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['KolkaTease'] = 1;
    }
    scene.img('images/characters/pavlovsk/school/girl/natasha/tease.jpg');
    scene.text('As you reach the bottom of the stairs, you notice Kolka coming down as well.');
    scene.text('Deciding to tease him a bit you grab the bottom of Natasha\'s skirt and pull it up while you bend over yourself to show him both of your asses.');
    scene.text('Natasha quickly slaps your hand away and the two of you resume your walk to school. As you exit the hall you can\'t hear Kolka\'s footsteps. He must have stopped in his tracks at the sight.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.actions([
      { label: 'Continue on to school', goto: ['gschool_grounds', 'main'] },
    ]);
  } else {
    qspGoto(s, 'gschool_grounds', 'main');
  }
  // TODO-QSP: end
  scene.build();
}

function enterHwundress(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/natasha/study.jpg');
  scene.text('When you see that Natasha is working hard on your homework, you get up from your seat and lie down on her bed to relax.');
  qspCall(s, 'willpower', 'exhib', 'force', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Tell her to strip', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Tell her to strip', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['doingHW'] = 1;
    scene.text('"You know, I\'m not feeling properly entertained over here." You say, feeling a bit bored. "I think you should lose some clothes, so I have something to look at."');
    scene.text('"B-But what if my mom walks in?" Natasha asks in a trembling voice.');
    if (((st as any).NatbelQW ?? 0)?.['nakedHW'] > 3) {
      scene.actions([
        { label: 'Strip down completely', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['nakedHW'] = ((st as any).NatbelQW['nakedHW'] ?? 0) + (1);
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['underwear'] = 0;
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/nakedhomework2.jpg');
    scene.text('"Then your mom will see you naked, this is what happens when you borrow money from people and can\'t pay them back. You pay it back in other ways. Now do as you\'re told and take off your clothes, all of your clothes."');
    scene.text('Natasha looks as if she wants to object but then hangs her head and begins to remove her clothing. Once she\'s completely naked, she shyly walks over to her desk and sits down as she starts in on your homework. Though after a while you think she\'s actually enjoying it.');
    qspCall(st, 'arousal', 'erotic_nudity', 10);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['natbel_cp_1', 'undressedhw'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'You can keep your bra and panties on', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['underwear'] = 1;
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['nakedHW'] = ((st as any).NatbelQW['nakedHW'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/nakedhomework1.jpg');
    scene.text('"Fine, you can keep your bra and panties on, but the rest comes off." You say, clearly letting your disappointment show in your voice.');
    qspCall(st, 'arousal', 'erotic', 10);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['natbel_cp_1', 'undressedhw'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Just wait until she\'s done', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You are woken out of your daydream by Natasha saying: "It''s done <<$pcs_nicknam...
    scene.text(`You are woken out of your daydream by Natasha saying: "It's done ${((st as any).pcs_nickname || '')}."`);
    scene.text('"Good, let me have a look at it."');
    scene.actions([
      { label: 'Take your finished homework', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterUndressedhw(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoy looking at Natasha', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A16');
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    if (((st as any).NatbelQW ?? 0)?.['underwear'] === 1) {
      scene.img('images/characters/pavlovsk/school/girl/natasha/sex/nakedhomework1.jpg');
      scene.text('While you wait for Natasha to finish your homework, you idly play with your breasts, occasionally looking over at her near naked body.');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/natasha/sex/nakedhomework2.jpg');
      scene.text('"It can\'t be very comfortable for her, but I sure don\'t mind the show." You think to yourself as you start to play with your pussy while you watch her work.');
    }
    // TODO-QSP: dynamic text: After a while, Natasha gets up saying: "It''s done <<$pcs_nickname>>, can I plea...
    scene.text(`After a while, Natasha gets up saying: "It's done ${((st as any).pcs_nickname || '')}, can I please get dressed now?"`);
    qspCall(st, 'arousal', 'erotic', 10);
    qspCall(st, 'arousal', 'foreplay', (-10), 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['natbel_cp_1', 'afterhomework'] },
    ]);
  } },
    { label: 'Taunt Natasha', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    if (((st as any).NatbelQW ?? 0)?.['underwear'] === 1) {
      qspCall(st, 'arousal', 'erotic', 10);
      if (((st as any).NatbelQW ?? 0)?.['nakedHW'] < 5) {
        scene.text('"You should really buy yourself some nicer underwear, Natasha. If you ever somehow manage to get a boy interested in you do you think they will be turned on by those ugly things? How are the boys ever going to want to fuck you if you don\'t wear something sexy for them? That is if you\'ll ever manage to get a boy interested in you in the first place." You tell her, laughing at the way she squirms when you draw her attention to the fact that her bra and panties are some of the cheapest plainest ones, money can buy.');
      } else {
        scene.text('Natasha occasionally glances over her shoulder at you. Her face is flushed red, and you can see a damp spot on her panties.');
        scene.text('"You\'re such a little slut, Natasha. I can see your panties getting wetter by the minute, you just love getting humiliated don\'t you." You tell her, laughing as her face turns crimson.');
      }
      scene.text('As she continues working on your homework, you occasionally break Natasha\'s concentration with more comments on her underwear and body. Each time you do so, she visibly loses her concentration.');
    } else {
      qspCall(st, 'arousal', 'erotic_nudity', 10);
      if (((st as any).NatbelQW ?? 0)?.['nakedHW'] < 5) {
        scene.text('"You should really take better care of yourself, I mean look at that bush. Do you really think guys will be thrilled by to see your hairy pussy? You should shave it smooth or at least keep it better trimmed." You say to her, laughing at the way she squirms when you draw her attention back to the fact that she\'s completely naked in front of you.');
      } else {
        scene.text('Natasha occasionally glances over her shoulder at you. Her face is flushed red, and her pussy is glistening wetly.');
        scene.text('"You\'re such a little slut, Natasha. I can see you\'re getting wetter by the minute, you just love getting humiliated don\'t you." You tell her, laughing as her face turns crimson.');
      }
      scene.text('As she keeps working on your homework, you occasionally break Natasha\'s concentration with more comments on her body. Each time you do so, she visibly loses her concentration.');
    }
    // TODO-QSP: dynamic text: After a while, Natasha gets up saying: "It''s done <<$pcs_nickname>>, can I plea...
    scene.text(`After a while, Natasha gets up saying: "It's done ${((st as any).pcs_nickname || '')}, can I please get dressed now?"`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['natbel_cp_1', 'afterhomework'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAfterhomework(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['underwear'] === 1) {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/nakedhomework1.jpg');
  } else {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/nakedhomework2.jpg');
  }
  qspCall(s, 'willpower', 'cuni', 'force', 'easy');
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 8) {
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take off your own clothes', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take off your own clothes', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    scene.text('You smile at Natasha and start taking off your own clothes slowly, she tries not to pay attention to you. Yet you can see her sneaking peeks.');
    scene.actions([
      { label: 'Lie down and open your legs', goto: ['natbel_cp_1', 'openlegs'] },
      { label: 'Straddle her face', goto: ['natbel_cp_1', 'straddleface'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).NatbelQW ?? 0)?.['seethrough'] === 1) {
    qspCall(s, 'willpower', 'exhib', 'force', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Make her wear the lingerie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make her wear the lingerie', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    scene.img('images/characters/pavlovsk/school/girl/natasha/seethrough00.jpg');
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['seethroughwearing'] = 1;
    if (((st as any).NatbelQW ?? 0)?.['seethroughworn'] === 0) {
      ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['seethroughworn'] = ((st as any).NatbelQW['seethroughworn'] ?? 0) + (1);
      scene.text('"No, I don\'t think so. For the rest of the day, you\'re going to wear this." You say as you pull the see-through lingerie from your bag. "I just couldn\'t resist buying it for you."');
      scene.text('Natasha\'s eyes fall on what you\'re actually holding. She immediately notices that you can see right through the fabric.');
      scene.text('"B-But… It hides nothing. I\'d be practically naked." She stammers');
      scene.text('"Do I need to remind you who owes who here?" You say in a threatening voice.');
      if (((st as any).NatbelQW ?? 0)?.['underwear'] === 1) {
        scene.text('"N-No." She says as she takes off her own underwear. She takes the lingerie from you and sighs deeply before putting it on.');
      } else {
        scene.text('"N-No." She says as she takes the lingerie from you and sighs deeply before putting it on.');
      }
      scene.text('"There. Are you happy now? I\'m wearing it."');
      scene.text('"Good." You tell her. "Remember, you\'re going to wear it until you go to bed. If I catch you wearing your own clothes again, I\'ll have to get more creative."');
      qspCall(st, 'arousal', 'erotic', 5);
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).natstayroom = 1;
    qspGoto(st, 'natbelapt', 'natroom');
  } },
      ]);
    } else {
      if (((st as any).NatbelQW ?? 0)?.['seethroughworn'] < 5) {
        ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['seethroughworn'] = ((st as any).NatbelQW['seethroughworn'] ?? 0) + (1);
        scene.text('"No, I don\'t think so. Remember the lingerie I gave you? You\'re going to wear it again." You say as you enjoy the look on her face. It seems to be a mixture of shame and arousal.');
        if (((st as any).NatbelQW ?? 0)?.['underwear'] === 1) {
          scene.text('"O-Ok." She says as she takes off her own underwear. She pulls the lingerie from her drawer and sighs deeply before putting it on.');
        } else {
          scene.text('"O-Ok." She says as she takes the lingerie from her drawer and sighs deeply before putting it on.');
        }
        scene.text('"There. Are you happy now? I\'m wearing it again."');
        scene.text('"It looks so good on you." You tell her. "Remember, you\'re going to wear it until you go to bed. If I catch you wearing your own clothes again, I\'ll have to get more creative."');
        qspCall(st, 'arousal', 'erotic', 5);
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (st as any).natstayroom = 1;
    qspGoto(st, 'natbelapt', 'natroom');
  } },
        ]);
      } else {
        ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['seethroughworn'] = ((st as any).NatbelQW['seethroughworn'] ?? 0) + (1);
        scene.text('"No, I don\'t think so. I want you to put the lingerie on again. You know, your favorite." You say as you enjoy the look on her face. She\'s gotten a bit red in the face from arousal.');
        if (((st as any).NatbelQW ?? 0)?.['underwear'] === 1) {
          scene.text('"Ok." She says a bit too eagerly as she takes off her own underwear and makes a show of walking over to her underwear drawer. She bends over and sticks her naked ass out, wiggling it sexily before pulling the lingerie from her drawer and putting it on.');
        } else {
          scene.text('"Ok." She says a bit too eagerly as she makes a show of walking over to her underwear drawer. She bends over and sticks her naked ass out, wiggling it sexily before pulling the lingerie from her drawer and putting it on.');
        }
        scene.text('"It looks so good on you. I love making you wear it for me."');
        qspCall(st, 'arousal', 'erotic_nudity', 5);
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (st as any).natstayroom = 1;
    qspGoto(st, 'natbelapt', 'natroom');
  } },
        ]);
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Allow her to dress', handler: (st: GameState) => {
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['underwear'] = 0;
    qspGoto(st, 'natbelapt', 'natroom');
  } },
  ]);
  scene.build();
}

function enterCorruptChoices(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['Debt'] <= 0) {
    ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['Debt'] = 0;
    ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['demand_repayment'] = 0;
    return;
  }
  if (((s as any).NatbelQW ?? 0)?.['MoneyGivenTimes'] < 4  &&  ((s as any).daystart ?? 0) < ((s as any).NatbelQW ?? 0)?.['DebtDay']) {
    // TODO-QSP: exit
  }
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 5) {
    // TODO-QSP: exit
  }
  qspCall(s, 'willpower', 'humiliation', 'force', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Make her lick your feet', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Make her lick your feet', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'humiliation', 'force', 'easy');
    qspCall(st, 'willpower', 'pay', 'force');
    qspGoto(st, 'natbel_cp_1', 'lick_feet');
  } },
    ]);
  }
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 6) {
    // TODO-QSP: exit
  }
  qspCall(s, 'willpower', 'humiliation', 'force', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Spit in face', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Spit in face', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'humiliation', 'force', 'easy');
    qspCall(st, 'willpower', 'pay', 'force');
    qspGoto(st, 'natbel_cp_1', 'spit_face');
  } },
    ]);
  }
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 7) {
    // TODO-QSP: exit
  }
  qspCall(s, 'willpower', 'cuni', 'force', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Make her lick your pussy', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Make her lick your pussy', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'force', 'easy');
    qspCall(st, 'willpower', 'pay', 'force');
    qspGoto(st, 'natbel_cp_1', 'lick_pussy');
  } },
    ]);
  }
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 8) {
    // TODO-QSP: exit
  }
  if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).NatbelQW ?? 0)?.['KolkaFuckDay'] < ((s as any).daystart ?? 0)  &&  ((s as any).NatbelQW ?? 0)?.['KolkaWantsNat'] === 1) {
    qspCall(s, 'willpower', 'sex', 'force', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Make her fuck Kolka', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make her fuck Kolka', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'force', 'easy');
    qspCall(st, 'willpower', 'pay', 'force');
    qspGoto(st, 'natkolev', 'kolkabj');
  } },
      ]);
    }
  }
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 9) {
    // TODO-QSP: exit
  }
  if (((s as any).OluQW ?? 0)?.['sex'] === 1) {
    qspCall(s, 'willpower', 'anal', 'force', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take her to see Olu', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take her to see Olu', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'anal', 'force', 'easy');
    qspCall(st, 'willpower', 'pay', 'force');
    qspGoto(st, 'natpimp', 'go_see_olu');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLickFeet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A16');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 5) {
    ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['QWstage'] = 6;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/sex/lickfeet1.jpg');
  scene.text('"My feet have been killing me today. Take off my shoes for me and lick my feet until I feel better." You bark at Natasha.');
  scene.text('Natasha immediately settles you on the bed and takes off your shoes. She seems to enjoy being dominated by you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let her suffer for a bit', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['Debt'] = ((st as any).NatbelQW['Debt'] ?? 0) - (500);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/lickfeet1.jpg');
    scene.text('"Open your mouth." You tell her as you grab her by the hair to hold her at your feet. "Suck on my toes."');
    scene.text('"That\'s a good little girl." You tell her, smiling at her while she gently sucks on your toes one by one.');
    scene.text('After a while, you get bored and get up.');
    scene.text('You smile, "Fair enough, you are forgiven."');
    scene.text('Natasha opens her eyes and asks in disbelief, "It\'s forgiven?"');
    scene.text('You laugh, "500 <b>₽</b> of debt is forgiven, fool. You will do everything I tell you until the entire debt is gone."');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    { label: 'Lie back and enjoy', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['Debt'] = ((st as any).NatbelQW['Debt'] ?? 0) - (500);
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/lickfeet2.jpg');
    scene.text('You lie back and gently caress your pussy while you relish the feeling of her tongue on your feet. She alternates between licking your feet in long strokes of her tongue and gently sucking on your toes.');
    scene.text('After a while, you get bored and get up.');
    scene.text('You smile, "Fair enough, you are forgiven."');
    scene.text('Natasha opens her eyes and asks in disbelief, "It\'s forgiven?"');
    scene.text('You laugh, "500 <b>₽</b> of debt is forgiven, fool. You will do everything I tell you until the entire debt is gone."');
    qspCall(st, 'arousal', 'foreplay', 5, 'humiliation', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSpitFace(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 6) {
    ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['QWstage'] = 7;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natknee.jpg');
  scene.text('You bark at Natasha to get on her knees. She immediately kneels down at your feet and obediently opens her mouth.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Spit in her face', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['Debt'] = ((st as any).NatbelQW['Debt'] ?? 0) - (500);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natknee.jpg');
    scene.text('You collect the saliva in your mouth and, with relish, spit in Natasha\'s face. She jerks and squeezes her eyes shut but makes no move to wipe the spit away even as some drips into her open mouth.');
    scene.text('You smile, "Fair enough, you are forgiven."');
    scene.text('Natasha opens her eyes and asks in disbelief, "It\'s forgiven?"');
    scene.text('You laugh, "500 <b>₽</b> of debt is forgiven, fool. You will do everything I tell you until the entire debt is gone."');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLickPussy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A16');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['Debt'] = ((s as any).NatbelQW['Debt'] ?? 0) - (500);
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A16'] = 1;
  ((s as any).stat = (s as any).stat ?? {})['lesbian_count'] = ((s as any).stat['lesbian_count'] ?? 0) + (1);
  ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['lesbian'] = ((s as any).NatbelQW['lesbian'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natlick.jpg');
  scene.text('You force Natasha to undress you and then watch as she undresses herself before she returns to kneeling at your feet. You pull her face into your pussy and snarl at her, "Now lick!". Natasha fearfully starts to work.');
  if (((s as any).NatbelQW ?? 0)?.['training'] > 3  ||  ((s as any).NatbelQW ?? 0)?.['QWstage'] >= 8) {
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 7) {
      ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['QWstage'] = 8;
    }
    scene.actions([
      { label: 'Lie down and open your legs', handler: (st: GameState) => {
    qspGoto(st, 'natbel_cp_1', 'openlegs');
  } },
      { label: 'Straddle her face', handler: (st: GameState) => {
    qspGoto(st, 'natbel_cp_1', 'straddleface');
  } },
    ]);
  } else {
    ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['training'] = ((s as any).NatbelQW['training'] ?? 0) + (1);
    scene.text('This useless cunt can\'t even find your clitoris and only sluggishly works her mouth on your pussy without any enthusiasm.');
    if (((s as any).NatbelQW ?? 0)?.['Debt'] >= 500) {
      qspCall(s, 'willpower', 'pee', 'force');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Piss in her mouth', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Piss in her mouth', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'arousal', 'pee_give', 5, 'dom', 'lesbian');
    qspCall(st, 'arousal', 'end');
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['Debt'] = ((st as any).NatbelQW['Debt'] ?? 0) - (500);
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['pee'] = ((st as any).NatbelQW['pee'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natpee.jpg');
    scene.text('You are angry at this bitch, so you release your urine in Natasha\'s face. She closes her eyes and bows her head down but does not recoil and silently accepts your golden shower, continuing to swallow until the very end.');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Make her stop', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - (10);
    (st as any).money = ((st as any).money ?? 0) - (50);
    qspCall(st, 'stat', '');
    scene.img('images/shared/food/icecreem.jpg');
    scene.text('You get tired of her lackluster attempts to get you off, in fact, she is doing such a bad job that it is actually turning you off.');
    scene.text('"You are hopeless. Here, go buy an ice cream cone and practice licking. You\'d better improve by next time, bitch." You throw a 50 <b>₽</b> note at her as she stops licking you.');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterOpenlegs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A16');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/sex/lickpussy01.jpg');
  if (((s as any).NatbelQW ?? 0)?.['underwear'] === 1) {
    scene.text('You sit back on her bed and open your legs invitingly. Natasha doesn\'t waste a second before she strips out of her own underwear and enthusiastically goes to work on your pussy, using her mouth and tongue. She fucks you with her tongue then switches to sucking on your now engorged clitoris.');
  } else {
    scene.text('You sit back on her bed and open your legs invitingly. Natasha doesn\'t waste a second and enthusiastically goes to work on your pussy, using her mouth and tongue. She fucks you with her tongue then switches to sucking on your now engorged clitoris.');
  }
  scene.text('"Hmm… You\'re doing… Aaah… Keep going…" You gasp while she keeps licking and sucking. Losing yourself in the heat building up inside of you that comes from having your pussy eaten so well.');
  scene.text('As you feel yourself drawing closer and closer to your orgasm, you grab Natasha by the hair and press her face into your pussy even harder, trying to force her tongue deeper into you.');
  (s as any).orgasm_txt = 'Your orgasm hits you almost immediately after and you keep a tight hold on her hair as your legs start trembling from the power of it, while Natasha keeps licking at the juices that are flowing from you, now with an almost animalistic passion.';
  qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'dom');
  scene.text('When it finally starts to subside you let go and just lie there, catching your breath. Natasha keeps licking you occasionally. Each time her tongue touches your overly sensitive clitoris, it sends a new shiver through you.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterStraddleface(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A16');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/sex/lickpussy02.jpg');
  if (((s as any).NatbelQW ?? 0)?.['underwear'] === 1) {
    scene.text('You step up to Natasha and take off her bra and panties before throwing her on the bed and immediately straddling her face. She doesn\'t waste a second and enthusiastically goes to work on your pussy, using her mouth and tongue. She fucks you with her tongue then switches to sucking on your now engorged clitoris.');
  } else {
    scene.text('You throw Natasha on the bed and immediately straddle her face. She doesn\'t waste a second and enthusiastically goes to work on your pussy, using her mouth and tongue. She fucks you with her tongue then switches to sucking on your now engorged clitoris.');
  }
  scene.text('"Hmm… You\'re doing… Aaah… Keep going…" You gasp while she keeps licking and sucking. Losing yourself in the heat building up inside of you, coming from having your pussy eaten that well.');
  scene.text('As you feel yourself drawing closer and closer to your orgasm, you grab Natasha by the hair and start grinding your pussy on her mouth, trying to force her tongue even deeper into you.');
  (s as any).orgasm_txt = 'Your orgasm hits you almost immediately after and you keep a tight hold on her hair as your legs start trembling from the power of it, while Natasha keeps licking you, now with an almost animalistic passion.';
  qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'dom');
  scene.text('When it finally starts to subside you let go and slump down on top of her, catching your breath. Natasha\'s face locked between your legs. You can feel her breath on your pussy. Each exhalation sends a new shiver through you.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterNatAfterShower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A16');
  // TODO-QSP: dynamic text: With a sparkle in her eyes she says: "Oh, hi <<$pcs_nickname>>, I didn''t know y...
  scene.text(`With a sparkle in her eyes she says: "Oh, hi ${((s as any).pcs_nickname || '')}, I didn't know you were coming over."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch her get dressed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/natdressing2.jpg');
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('Natasha drops the towel and heads over to the closet to grab some clothes. "What to wear?" She sighs as she rummages through the bottom of her closet. With her bare ass wiggling teasingly the entire time.');
      scene.text('When she\'s decided on what to wear she steps in front of you and slowly starts putting her clothes on. Clearly trying to get a reaction out of you.');
    } else {
      scene.text('Natasha drops the towel and heads over to the closet to grab some clothes. "What to wear?" She sighs as she rummages through her closet. Which gives you a good view of her naked ass the entire time.');
      scene.text('When she\'s decided on what to wear she gets dressed seeming not to care about you seeing her naked.');
    }
    qspCall(st, 'arousal', 'erotic_nudity', 5);
    scene.actions([
      { label: 'Let her dress', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'natbelapt', 'natroom');
  } },
      { label: 'Pull her on the bed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natbedroomsex01.jpg');
    scene.text('When she\'s almost done dressing, you grab her by the wrist and pull her onto the bed next to you. You grab her by the hair and keep a firm grip as you whisper in her ear: "Oh, you little tease. Is this what you wanted?"');
    scene.text('"Y-Yes." She gasps back. "From the moment I saw you sitting there I started imagining this."');
    scene.text('"Well then." You say in your most seductive voice. "Have you earned it?" As you teasingly lower your mouth to hers. You take your time, touching your lips together, then backing off slightly, pulling at her lower lip occasionally with your teeth before finally going in for a passionate kiss.');
    qspCall(st, 'arousal', 'kiss', 5, 'dom', 'lesbian');
    qspCall(st, 'stat', '');
    if (((st as any).NatbelQW ?? 0)?.['QWstage'] > 7) {
      scene.actions([
        { label: 'Bare her breasts', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natbedroomsex02.jpg');
    scene.text('You let go of Natasha\'s hair and roll on top of her. While she\'s catching her breath from the steamy kissing, you pull down her top and start licking her nipple.');
    // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>>… That feels… Oooh… So nice." She moans softly.
    scene.text(`"Oh ${((st as any).pcs_nickname || '')}… That feels… Oooh… So nice." She moans softly.`);
    scene.text('You increase the intensity by taking hold of her nipple with your teeth and gently pulling. This makes her moan even louder, and in response, you feel yourself getting wetter and wetter.');
    qspCall(st, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get undressed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natbedroomsex03.jpg');
    scene.text('"I want to feel all of your skin, take your clothes off." You tell Natasha.');
    scene.text('Wanting your own lusts sated you pull your clothes off and lie back on the bed, opening your legs to give her easy access to your soaking pussy.');
    scene.text('"Kiss me." You command in a breathless whisper. To which Natasha eagerly complies. She begins to kiss you passionately while one of her hands explores between your legs. You shiver every time her fingers run close to your pussy.');
    scene.text('Almost out of your mind with desire you grab her hand and firmly place it on your pussy. "No more teasing. I-I can\'t take it anymore." You admit breathlessly, and you start rubbing her hand on your pussy. Once you feel convinced she won\'t pull away, you let go of her hand and just lie back, enjoying the building fire within you.');
    (st as any).orgasm_txt = '"F-Faster, I-I\'m almost…" You gasp out, to which Natasha starts building up the pace. Just as it seems she can\'t go any faster the waves of pleasure crash down on you and you close your eyes letting the orgasm take up your whole world.';
    (st as any).orgasm_or = 'yes';
    scene.text('As you get back to yourself, Natasha is still leaning over you, now slowly sucking her fingers one by one. Licking your juices off.');
    qspCall(st, 'arousal', 'vaginal_finger', 10, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Give back', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natbedroomsex04.jpg');
    scene.text('Not wanting this to end just yet you roll her onto her back and spread her legs wide. Her pussy is soaking wet as well. "Your turn." You say, still out of breath.');
    scene.text('You start to dart your tongue around her pussy. Licking up the juices, slowly working your way towards her wet slit.');
    // TODO-QSP: dynamic text: "Please <<$pcs_nickname>>, I really need it." She begs in between her moans of p...
    scene.text(`"Please ${((st as any).pcs_nickname || '')}, I really need it." She begs in between her moans of pleasure. Hearing this you part her pussy lips with your hand and start licking her furiously, occasionally switching from sucking her clit to tongue fucking her pussy.`);
    scene.text('The growing volume of her moans is rekindling the fire inside yourself. "A few touches and I might go over the edge again." You think to yourself.');
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Rub your pussy on hers', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natbedroomsex05.jpg');
    // TODO-QSP: dynamic text: You quickly get up from between her legs and straddle her, pressing your soaked ...
    scene.text(`You quickly get up from between her legs and straddle her, pressing your soaked pussies together, grinding them together quickly. Natasha grabs your breasts and starts moaning "Yes ${((st as any).pcs_nickname || '')}… Please… Pleaaaaaah."`);
    (st as any).orgasm_txt = 'The feeling of her body writhing underneath yours as she orgasms sends you over the edge as well. You keep grinding for a few more seconds before you start bucking under the intensity of your own orgasm.';
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'trib', 5, 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.text('Finally you fall down on top of Natasha, exhausted.');
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (30 * ((st as any).scfeed ?? 0));
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Eat me', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natbedroomsex06.jpg');
    scene.text('The only thing you can think of is your need for more as you push her head towards your soaking pussy. She obeys immediately and starts kissing all around your pussy and playing with your tits.');
    scene.text('Overcome with the need to feel her tongue on your pussy, you take her head in your hands and press her face down on your slit. A loud moan escapes your mouth as she starts lapping up your juices.');
    scene.text('She keeps one hand on your breast, softly pinching and pulling on your hard nipple as she starts focusing on sucking your engorged clit. You feel one of her fingers slip inside you again, adding even more pleasure.');
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Rub your pussy on hers', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natbedroomsex05.jpg');
    scene.text('As you feel your orgasm near, you quickly get up from the bed and press Natasha down on her back, opening her legs wide. Her pussy is soaking wet as well. There are wet streaks on her inner thighs where her juices have been running down her legs.');
    // TODO-QSP: dynamic text: After a moment of teasing her with your fingers, you straddle her, pressing your...
    scene.text(`After a moment of teasing her with your fingers, you straddle her, pressing your pussies wetly together as you begin quickly grinding against her. Natasha grabs your breasts and starts moaning "Yes ${((st as any).pcs_nickname || '')}… Please… Pleaaaaaah."`);
    (st as any).orgasm_txt = 'The feeling of her body writhing underneath yours as she orgasms sends you over the top as well. You keep grinding for a few more seconds before you start bucking under the intensity of your own orgasm.';
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'trib', 5, 'lesbian');
    scene.text('Finally you fall down on top of Natasha, exhausted.');
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (30 * ((st as any).scfeed ?? 0));
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
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
      scene.text('You lose track of time as you keep making out with Natasha. Finally, you let go of her hair and pull back from her, breathless for several moments.');
      scene.actions([
        { label: 'Continue', goto: ['natbelapt', 'natroom'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLaundry(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbel_cp_1', 'laundry');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).NatashaLoc ?? 0) !== 7) {
    scene.text('There is nobody here. This room isn\'t exactly big enough to hang out in so you head back out.');
    scene.actions([
{ label: 'Go to the hallway', goto: ['natbelapt', 'hallway'] },
]);
    return;
  }
  scene.text('<center><b>Laundry room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natlaundry.jpg');
  scene.text('You walk in and see Natasha just turning on the machine. She turns around and sees you in the doorway.');
  if (((s as any).NatbelQW ?? 0)?.['cucumber'] === 0  ||  ((s as any).NatbelQW ?? 0)?.['QWstage'] < 10) {
    // TODO-QSP: dynamic text: "Oh hey <<$pcs_nickname>>, let''s go to my room"
    scene.text(`"Oh hey ${((s as any).pcs_nickname || '')}, let's go to my room"`);
    return;
  }
  qspCall(s, 'willpower', 'mast', 'force', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Make her play with a cucumber', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Make her play with a cucumber', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    if (((st as any).NatbelQW ?? 0)?.['QWstage'] === 10) {
      ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['QWstage'] = 11;
    }
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['cucumber'] = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natashacucumber01.jpg');
    scene.text('You move over and make her sit on top of it.');
    scene.text('"I thought we could have some fun in here. The noise from the washer should prevent anyone from hearing." You tell her as you hand her the cucumber.');
    scene.text('"What\'s this for?" She asks you. "I Want to see you slide it in your pussy Natasha." You tell her with an excited grin on your face.');
    scene.text('"It\'s enormous, it won\'t fit." She hesitantly tries to back out. "I\'ve seen you take bigger. Now open those legs and get yourself ready or I\'ll put it in myself right now." You hiss at her.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natashacucumber02.jpg');
    scene.text('Natasha has a shocked look on her face as she scoots back a bit and obediently starts to play with her pussy. You can see she\'s already wet. "Being dominated really turns her on." You think to yourself.');
    scene.text('"T-The vibrations from the washer are…" She starts moaning softly.');
    scene.text('"You better start opening that pussy up or it\'s going to sting bitch." You continue in the same threatening tone you used before. Natasha moans as she slips two fingers inside. "That went easy enough, now add a third." You order her, and to your delight she immediately forces a third finger inside her vagina.');
    scene.text('"Good, now spread your pussy, I want to have a last look before the cucumber goes in." You hiss again, wanting to make sure she keeps obeying your orders immediately.');
    scene.text('You smile as you she opens her pussy for you with her hands, showing you just how dripping wet she is.');
    scene.actions([
      { label: 'Now put it in', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natashacucumber03.jpg');
    scene.text('Natasha lets out a loud moan as she forces the cucumber inside her pussy even though she was biting her lip to try and stay quiet. It slides about half way in on the first stroke. "You see, it wasn\'t too big at all." You praise her. "Now I want to see you fuck yourself hard. Keep going."');
    scene.text('She\'s all too eager to obey. With a furious effort she rapidly strokes the big vegetable in and out of herself. Her moans growing louder and louder. Within a few minutes you are rewarded with the sight of her delicious orgasm. Her legs shake as she keeps fucking herself for a bit longer before she finally slides it all the way out and leans back. Her face sporting a deep red flush.');
    scene.text('You lean in and kiss her passionately before telling her: "Let\'s go to your room."');
    scene.actions([
      { label: 'Go to her room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
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
    { label: 'Go to her room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'journal_quests':
      enterJournalQuests(s, scene);
      break;
    case 'nat_debt_timer':
      enterNatDebtTimer(s, scene);
      break;
    case 'make_her_do_homework':
      enterMakeHerDoHomework(s, scene);
      break;
    case 'carrybooks':
      enterCarrybooks(s, scene);
      break;
    case 'schoolwalk':
      enterSchoolwalk(s, scene);
      break;
    case 'hwundress':
      enterHwundress(s, scene);
      break;
    case 'undressedhw':
      enterUndressedhw(s, scene);
      break;
    case 'afterhomework':
      enterAfterhomework(s, scene);
      break;
    case 'corrupt_choices':
      enterCorruptChoices(s, scene);
      break;
    case 'lick_feet':
      enterLickFeet(s, scene);
      break;
    case 'spit_face':
      enterSpitFace(s, scene);
      break;
    case 'lick_pussy':
      enterLickPussy(s, scene);
      break;
    case 'openlegs':
      enterOpenlegs(s, scene);
      break;
    case 'straddleface':
      enterStraddleface(s, scene);
      break;
    case 'nat_after_shower':
      enterNatAfterShower(s, scene);
      break;
    case 'laundry':
      enterLaundry(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const natbel_cp_1: LocationDef = {
  name: 'natbel_cp_1',
  title: 'Laundry room',
  region: 'other',
  enter: enter,
};
