import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Quests</h2></center>');
  if (((s as any).university ?? 0)?.['diploma'] === 0) {
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === -1) {
      qspCall(s, 'cards', 'section_open', 'School');
      scene.text('I should go to school to pick up my diploma');
      qspCall(s, 'cards', 'section_close');
    } else {
      qspCall(s, 'cards', 'section_open', 'University');
      if (((s as any).university ?? 0)?.['student'] === 0  &&  ((s as any).yearstart ?? 0) === 1  ||  (((s as any).yearstart ?? 0) === 2  &&  ((s as any).month ?? 0) === 8)) {
        if (((s as any).university ?? 0)?.['prep_enrolled'] === 0) {
          scene.text('If you want to enroll in the university, you need to go to the university administration on the university campus on Vasiliy Island in the city.');
          scene.text('The enrollment period for new students is from May to August. All new students will start their classes in the week that includes September 1st.');
          if (((s as any).class ?? 0)?.['school_grade_average'] < 70  &&  ((s as any).university ?? 0)?.['prep_enrolled'] === 0) {
            scene.text('Your grade is not too good, so you will need to take an additional entrance exam. This can be done in August, and you also have the possibility for preparatory classes during August.');
          }
        } else {
          if (((s as any).university ?? 0)?.['entrance_exam_passed'] === 0) {
            // TODO-QSP: 'You''ve enrolled in the preparatory classes. You '+iif(month = 8, 'can attend them by going to the ...
            if (((s as any).pcs_intel ?? 0) + ((s as any).university ?? 0)?.['prep_counter'] >= 80  &&  ((s as any).month ?? 0) === 8  &&  ((s as any).university ?? 0)?.['entrance_exam_passed'] === 0) {
              // TODO-QSP: dynamic text: You think you can pass the entrance exam, '+iif(pcs_intel + university['prep_cou...
              scene.text('You think you can pass the entrance exam, \'+iif(pcs_intel + university[\'prep_counter\'] >= 100, \'and get a perfect score.\', \'but not get a perfect score.\')+\' This is also done in the administration building.');
            }
          } else {
            if (((s as any).university ?? 0)?.['entrance_exam_passed'] === 1) {
              scene.text('You have passed the entrance exam, so you need to go to the administration to enroll. Remember to do it before August ends.');
            } else {
              scene.text('You failed your entrance exam and won\'t be able to go to university.');
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['student'] === 1) {
          // TODO-QSP: dynamic text: You are enrolled in the ' + $func('uni_programs', 'get_program_name') + ' progra...
          scene.text('You are enrolled in the \' + $func(\'uni_programs\', \'get_program_name\') + \' program. To follow your study progress, use the dedicated page in the journal.');
        } else {
          if (((s as any).university ?? 0)?.['expelled_for_missing_exam'] === 0  &&  ((s as any).university ?? 0)?.['expelled'] === 1) {
            scene.text('You\'ve been expelled from the university for failing your exams.');
          } else {
            scene.text('You\'ve been expelled from the university for skipping your exams.');
            if (qspFunc(s, 'uniutil', 'student', 'expelled_for_other_reason')) {
              scene.text('You\'ve been expelled from the university for reasons unrelated to your exam results.');
            } else {
              scene.text('You did not enroll in time.');
            }
          }
        }
        qspCall(s, 'cards', 'section_close');
      }
    }
    if (((s as any).npc_known ?? 0)?.['A60'] === 1) {
      qspCall(s, 'cards', 'section_open', 'Miroslava Maximova', 60);
      if ((!((s as any).gad_meadow_found ?? 0))) {
        scene.text('Mira seems like she could use a friend around here. I should explore the forest around Gadukino sometime, who knows what I might find.');
      } else {
        if (((s as any).MiraVars ?? 0)?.['meadow'] === 0  ||  ((s as any).MiraVars ?? 0)?.['meadow'] === 1) {
          scene.text('You have found a Secret Meadow. Maybe Mira would like to see it.');
        } else {
          if (((s as any).MiraVars ?? 0)?.['QW'] === 0) {
            scene.text('You have shown Mira your Secret Meadow and told her she could visit it on her own. You did make her promise not to show anyone else, but maybe you should keep an eye on her, in case she breaks that promise.');
            scene.text('You could show Mira around, maybe introduce her to some of the local boys…');
          } else {
            scene.text('You have shown Mira your Secret Meadow and told her she could visit it on her own. You did make her promise not to show anyone else, but maybe you should keep an eye on her, in case she breaks that promise.');
            scene.text('You introduced Mira to Mitka and the boys. Maybe you should ask her what she thinks about them.');
            if (((s as any).MiraVars ?? 0)?.['QW'] === 2) {
              scene.text('You have shown Mira your Secret Meadow and told her she could visit it on her own. You did make her promise not to show anyone else, but maybe you should keep an eye on her, in case she breaks that promise.');
              scene.text('Mira admitted she likes Mitka. Only time will tell what will come from that. In the meantime, you could visit your meadow, from time to time, while you wait to see what happens.');
            } else {
              scene.text('You caught Mira having sex with Mitka, in your meadow after she promised not to show anyone else. You really need to talk to her, and confront her about it.');
              if (((s as any).MiraVars ?? 0)?.['QW'] === 4) {
                scene.text('Next time you talk to Mira, you should remind her of her promise. You should wait a day or so to give her time to worry about it.');
              } else {
                scene.text('After a lengthy discussion, Mira agrees to fulfill 3 Wishes. Wish #1, is for you to watch Mitka have anal sex with Mira. Mira might need some help setting it up… try getting her drunk with the boys, in the evening.');
                if (((s as any).MiraVars ?? 0)?.['pimp'] === 2) {
                  scene.text('Mira found out how far things had gotten between you and Mitka\'s friends, and she wasn\'t having it. She slapped some sense into you and called off your arrangement as her pimp. Now she\'s the one offering to let you work for her instead, if you\'re interested.');
                } else {
                  scene.text('You have watched Mira having anal sex with Mitka and she successfully fulfilled her First Wish. You are still thinking about what you want her to do for your Second Wish. You should keep getting her drunk with the boys for now, until something comes to mind.');
                  if (((s as any).MiraVars ?? 0)?.['QW'] === 15  &&  ((s as any).MiraVars ?? 0)?.['prostitute'] === 0) {
                    scene.text('You have watched Mira having anal sex with Mitka and she successfully fulfilled her First Wish. You are still thinking about what you want her to do for your second wish. Maybe a walk through the village will give you some ideas.');
                  } else {
                    scene.text('Congratulations, you are now Mira\'s pimp, thus fulfilling your Second Wish. You should check up on her at the road in the evenings and make sure she is working for you until you come up with an idea for your third and Final Wish.');
                    if (((s as any).MiraVars ?? 0)?.['QW'] === 20) {
                      scene.text('Congratulations, you are now Mira\'s pimp, thus fulfilling your Second Wish. You should talk to her for your third and final wish.');
                    } else {
                      scene.text('You have convinced her to walk through town naked, to fulfill your Third Wish. She is red with shame and has stayed home. Maybe if you talk to her you can convince her to come out of the house again. It may take a few tries though.');
                      if (((s as any).MiraVars ?? 0)?.['QW'] === 21  &&  ((s as any).daystart ?? 0) >= ((s as any).MiraVars ?? 0)?.['emb_day']) {
                        scene.text('You have convinced her to walk through town naked, to fulfill your Third Wish. She came out of her house and you can continue to pimp her out during the evenings. <b>This is the end of Mira and the Three Wishes</b>');
                      } else {
                        scene.text('In the end, you couldn\'t force Mira to walk through town naked and forgave her for breaking her promise. She is happy with your decision and you grow even closer. You are still able to pimp her out in the evenings. <b>This is the end of Mira and the Three Wishes</b>');
                      }
                      if (((s as any).MiraVars ?? 0)?.['meadow'] === 3) {
                        scene.text('You have found a Secret Meadow and shown Mira, but told her she could not go there without you. <b>This choice blocked Mira and the Three Wishes</b>');
                      }
                    }
                    qspCall(s, 'cards', 'section_close');
                  }
                  if (((s as any).GadBoy ?? 0)?.['first_drink'] >= 1  ||  ((s as any).npc_QW ?? 0)?.['A63'] >= 1  ||  ((s as any).GadBoy ?? 0)?.['river_gang'] >= 1) {
                    qspCall(s, 'cards', 'section_open', 'Mitka Shkvoryen', 63);
                    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 1) {
                      scene.text('I can\'t stop thinking about what happened by the river with all those men. Someone\'s bound to want to talk to me about it before long.');
                    } else {
                      scene.text('I accepted Stepan\'s money after what happened by the river. Word has gotten around, and now the village men expect me to be available to them. I can also make extra money prostituting myself along the highway near Gadukino in the evenings.');
                      if (((s as any).GadBoy ?? 0)?.['river_gang'] === 3) {
                        scene.text('I refused Stepan\'s money and made it clear I\'m nobody\'s whore. The village men have backed off, though I have a feeling Mitka and I still need to talk this through properly.');
                      } else {
                        scene.text('Mitka apologized and reined the other guys in. Things between us feel more or less normal again.');
                        if (((s as any).npc_QW ?? 0)?.['A63'] >= 10) {
                          scene.text('Things got out of hand one night when I was drunk with Mitka and his friends, and now Kolyamba and Vasyan join in too, whenever I\'ve had enough to drink. It keeps happening more, and I\'m not sure where it\'s heading.');
                        } else {
                          scene.text('Mitka and I have started fooling around whenever we meet up in the woods. For now it\'s just the two of us.');
                          if (((s as any).GadBoy ?? 0)?.['first_drink'] === 2) {
                            scene.text('I\'ve gone out drinking with Mitka and his friends in the woods a few times now. I know my way to their trailer, so I can head there most evenings after 8 if I feel like joining them again.');
                            if (((s as any).npc_rel ?? 0)?.['A63'] < 60) {
                              scene.text('The more time I spend with him, whether we\'re just talking or drinking with the others, the closer we seem to be getting.');
                            }
                          } else {
                            scene.text('Mitka invited me to come drink with him and his friends in the woods one evening. I should keep an eye out for them on the road around 8 in the evening if I want to take him up on it.');
                          }
                          qspCall(s, 'cards', 'section_close');
                        }
                        if (((s as any).hunterVars ?? 0)?.['were_met'] >= 1) {
                          qspCall(s, 'cards', 'section_open', 'The Hunters');
                          if (((s as any).hunterVars ?? 0)?.['KnowSlut'] > 0) {
                            scene.text('Andrei, Igor, and Sergei don\'t treat me as anyone special to one of them in particular. I\'m just something the three of them share whenever they want.');
                          } else {
                            if (((s as any).hunterVars ?? 0)?.['AndreiLove'] === 1) {
                              scene.text('Andrei and I have fallen for each other.');
                            } else {
                              scene.text('I think I\'ve fallen for Andrei, though I\'m not sure yet if he feels the same.');
                              if (((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 10) {
                                scene.text('I\'ve been flirting with Andrei whenever I visit.');
                              } else {
                                scene.text('I got off on the wrong foot with Andrei. I should try smoothing things over with him next time.');
                                scene.text('Andrei seems friendly enough, but he doesn\'t know me well yet. I should keep talking to him when I visit the hunters.');
                              }
                              if (((s as any).hunterVars ?? 0)?.['IgorLove'] >= 2) {
                                scene.text('Igor and I are officially together now.');
                              } else {
                                scene.text('Igor and I have fallen for each other.');
                                if (((s as any).hunterVars ?? 0)?.['IgorQW'] >= 35) {
                                  scene.text('I think I\'ve fallen for Igor, though I\'m not sure yet if he feels the same.');
                                } else {
                                  scene.text('I\'ve been flirting with Igor whenever I visit.');
                                  if (((s as any).hunterVars ?? 0)?.['IgorQW'] < 0) {
                                    scene.text('I got off on the wrong foot with Igor. I should try smoothing things over with him next time.');
                                  } else {
                                    scene.text('Igor seems friendly enough, but he doesn\'t know me well yet. I should keep talking to him when I visit the hunters.');
                                  }
                                  if (((s as any).hunterVars ?? 0)?.['SergeiLove'] === 1) {
                                    scene.text('Sergei and I have fallen for each other, even though he\'s married. I probably shouldn\'t, but I can\'t seem to help it.');
                                  } else {
                                    scene.text('I think I\'ve fallen for Sergei, even knowing he\'s married. I\'m not sure yet if he feels the same.');
                                    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] >= 10) {
                                      scene.text('I\'ve been flirting with Sergei whenever I visit.');
                                    } else {
                                      scene.text('I got off on the wrong foot with Sergei. I should try smoothing things over with him next time.');
                                      scene.text('Sergei seems friendly enough, but he doesn\'t know me well yet. I should keep talking to him when I visit the hunters.');
                                    }
                                    if (((s as any).hunterVars ?? 0)?.['Rape'] === 1) {
                                      scene.text('I get the feeling all three of them already see me as someone easy. I should be careful how much further I let that go.');
                                    } else {
                                      scene.text('One of the hunters caught me exposed by the backwater creek. I have a feeling that if I go back there again, something is going to happen that I won\'t be able to take back.');
                                    }
                                  }
                                  qspCall(s, 'cards', 'section_close');
                                }
                                if (((s as any).lesbiQW ?? 0) !== 0  ||  (((s as any).pcs_skin ?? 0) >= 600  &&  ((s as any).lesbiQW ?? 0) === 0)) {
                                  qspCall(s, 'cards', 'section_open', 'Natalya Petrovna');
                                  if (((s as any).subdom ?? 0) === 2) {
                                    if (((s as any).lesbiQW ?? 0) === 2) {
                                      scene.text('I\'ve turned the tables on Natalya. I should go back and see how she\'s decided to receive me.');
                                    } else {
                                      scene.text('Natalya is mine now, and I\'m training her to be a proper submissive. I should keep visiting her.');
                                      if (((s as any).lesbiQW ?? 0) === 4) {
                                        scene.text('Natalya is coming along nicely as my submissive. I should keep visiting her to continue her training.');
                                      } else {
                                        if (((s as any).mistsexshop ?? 0) === 1) {
                                          scene.text('Natalya is mine now, fully trained. I have her working in the back of a sex shop downtown, and she brings me a cut of what she earns.');
                                        } else {
                                          scene.text('Natalya is mine now, fully trained. I have her whoring herself out along the highway, and she brings me a cut of what she earns.');
                                          scene.text('Natalya is mine now, fully trained. I should stop by her place whenever I feel like it.');
                                        }
                                        if (((s as any).bdsmclub ?? 0)?.['unlocked'] === 1) {
                                          scene.text('She also gave me a card that gets me into some exclusive BDSM club, if I\'m ever interested.');
                                        }
                                      }
                                      if (((s as any).lesbiQW ?? 0) === -1) {
                                        scene.text('My arrangement with Natalya is over. She did mention I could still find her at some club, if I\'m ever interested.');
                                      } else {
                                        if (((s as any).mistressqwest ?? 0) >= 1) {
                                          // TODO-QSP: dynamic text: Mistress won't see me again until I've serviced twelve men through the gloryhole...
                                          scene.text(`Mistress won't see me again until I've serviced twelve men through the gloryhole booth at the Erotomaniac sex shop. I've serviced ${((s as any).mistressqwest ?? 0) - 1} so far.`);
                                        } else {
                                          scene.text('I belong to Natalya now. I should keep visiting her whenever I have the time.');
                                          if (((s as any).MistressAdoration ?? 0) <= 30) {
                                            scene.text('She hasn\'t been happy with me lately. I should be more obedient, or I\'m not sure she\'ll want to keep me around much longer.');
                                          }
                                          if (((s as any).bdsmclub ?? 0)?.['unlocked'] === 1) {
                                            scene.text('She also gave me a card that gets me into some exclusive BDSM club, if I\'m ever interested.');
                                          }
                                        }
                                        if (((s as any).lesbiQW ?? 0) === 12) {
                                          scene.text('Natalya wants an answer on whether I\'ll sign her contract. I need to go back and give her one.');
                                        } else {
                                          if (((s as any).mistressqwest ?? 0) >= 1) {
                                            // TODO-QSP: dynamic text: Natalya won't let me back into her apartment until I've serviced twenty men thro...
                                            scene.text(`Natalya won't let me back into her apartment until I've serviced twenty men through the gloryhole booth at the Erotomaniac sex shop. I've serviced ${((s as any).mistressqwest ?? 0) - 1} so far.`);
                                          } else {
                                            scene.text('I should go back and see Natalya again.');
                                          }
                                          if (((s as any).lesbiQW ?? 0) >= 2) {
                                            scene.text('I\'ve been training under Natalya. I should keep visiting her apartment.');
                                            if (((s as any).MistressResist ?? 0) >= 1) {
                                              scene.text('I keep pushing back against what she wants from me. I get the feeling that if I keep resisting her, this could go somewhere very different.');
                                            }
                                          } else {
                                            scene.text('I\'ve heard the Mon Cherie boutique downtown attracts a very particular, wealthy sort of clientele. I should spend some time browsing there.');
                                          }
                                          qspCall(s, 'cards', 'section_close');
                                        }
                                        if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
                                          qspCall(s, 'cards', 'section_open', 'Cheerleading');
                                          if ((((s as any).month ?? 0) > 11  ||  ((s as any).month ?? 0) < 6)  &&  ((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 0) {
                                            scene.text('For various reasons, I cannot be a cheerleader.');
                                          } else {
                                            scene.text('If I want to be a cheerleader, I should keep my eyes out for the tryout posters that usually go up in the school around October.');
                                            if ((((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 11)  &&  ((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 0) {
                                              scene.text('If I want to be a cheerleader, I should keep my eye out for the cheerleader tryout posters that usually go up in school around this time of year.');
                                            } else {
                                              scene.text('If I want to try again to become a cheerleader, I will need to wait until the posters go back up in school.');
                                              if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === -1) {
                                                scene.text('If I change my mind about joining the cheerleading squad, I will have to wait for the posters to go up again.');
                                              } else {
                                                scene.text('For one reason or another, I don\'t want to join the cheerleading squad.');
                                                if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 1) {
                                                  scene.text('I have signed up to try out for the cheerleading squad.');
                                                } else {
                                                  scene.text('I was accepted into the cheerleading squad as a backup. Unless people start thinking I\'m a jock or see me as cool enough, this is as far as Albina will let me go.');
                                                  if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 3) {
                                                    scene.text('I joined the cheerleading squad as a full member.');
                                                  } else {
                                                    scene.text('Unknown. You might want to report this as a bug on the TFGS Forum.');
                                                  }
                                                  qspCall(s, 'cards', 'section_close');
                                                  qspCall(s, 'cards', 'section_open', 'Volleyball');
                                                  if (((s as any).vballVars ?? 0)?.['on_team'] === 0) {
                                                    if (((s as any).vballVars ?? 0)?.['kick_team'] === 0) {
                                                      scene.text('If I want to join the volleyball team, I need to practice my skills at the community center, then talk to the coach about joining.');
                                                    } else {
                                                      scene.text('I got kicked off the volleyball team. I\'m pretty sure there\'s nothing I can say or do to get back on the team.');
                                                    }
                                                  } else {
                                                    scene.text('Coach Mikhail has finally made me a starter on the Volleyball Team.');
                                                    if (((s as any).vballVars ?? 0)?.['coachsex'] === 0) {
                                                      scene.text('I should talk to Mikhail. The only way I\'m ever going to be a starter for the team is if I manage to wrap him around my finger. Maybe I should ask him about the rumors of him playing for the European championship winning team in the past?');
                                                    } else {
                                                      scene.text('Apparently the memories of the coach\'s time on the European team are painful, something bad must have happened. I should remember that for later. For now, let\'s see what I can get out of him about his personal life.');
                                                      if (((s as any).vballVars ?? 0)?.['coachsex'] === 2) {
                                                        scene.text('Let\'s see what other information I can get out of the coach. Surely there\'s something I can use to manipulate him. I should try asking about volleyball in general.');
                                                      } else {
                                                        scene.text('As much as I didn\'t enjoy the lecture about volleyball the last time I spoke with the coach, if I keep asking about it, maybe he will volunteer some information on his own about his past on the European Team. If all else fails, maybe I can straight up seduce him?');
                                                        if (((s as any).vballVars ?? 0)?.['coachsex'] === 4) {
                                                          if ((!((s as any).voltrenerVoyeur ?? 0))) {
                                                            if (((s as any).vballVars ?? 0)?.['coach_lust'] >= 40) {
                                                              scene.text('I should take a shower at the sports center. I have driven the coach so crazy with lust, he is bound to come for me eventually.');
                                                            } else {
                                                              scene.text('I need to keep trying to tease the coach.');
                                                            }
                                                          } else {
                                                            if (((s as any).vballVars ?? 0)?.['coach_lust'] >= 40) {
                                                              scene.text('I should take a shower again at the sports center. Maybe this time he won\'t run away so fast?');
                                                            } else {
                                                              scene.text('I need to keep trying to tease the coach.');
                                                            }
                                                            if (((s as any).voltrenerVoyeur ?? 0) === 2) {
                                                              if (((s as any).vballVars ?? 0)?.['coach_lust'] >= 40) {
                                                                scene.text('I should talk to the coach about him spying on me in the sports center showers.');
                                                              } else {
                                                                scene.text('I need to keep trying to tease the coach.');
                                                              }
                                                            } else {
                                                              if (((s as any).npc_rel ?? 0)?.['A3'] < 80) {
                                                                scene.text('I need something to make the coach jealous of me. Ivan spends a lot of time at the sports center, maybe I can use him to my advantage? I should put some effort into getting to know him better.');
                                                              } else {
                                                                if ((!((s as any).kotovVSprohorov ?? 0))) {
                                                                  // TODO-QSP: dynamic text: I want to use Ivan to somehow make the coach jealous. I should start by chatting...
                                                                  scene.text('I want to use Ivan to somehow make the coach jealous. I should start by chatting with him in the sports section when he shows up, usually around \'+func(\'time\', \'get_time_string\', 17, 0)+\'.');
                                                                } else {
                                                                  scene.text('I should take a shower at the sports center. If the rumors I heard about Ivan are true, he should try to join me.');
                                                                  if (((s as any).IvanShowerQW ?? 0) === 1) {
                                                                    scene.text('I should talk to Ivan about what happened in the sports center the next time I\'m at school.');
                                                                  } else {
                                                                    scene.text('I need to not chicken out the next time Ivan tries to join me in the sports center shower.');
                                                                    if (((s as any).IvanShowerQW ?? 0) === 11) {
                                                                      if ((!((s as any).IvanShowerYes ?? 0))) {
                                                                        scene.text('I should chat with Ivan at school again.');
                                                                      } else {
                                                                        if (((s as any).voltrenerVoyeur ?? 0) < 6) {
                                                                          scene.text('I should shower with Ivan again');
                                                                        } else {
                                                                          scene.text('I should talk to the coach.');
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              if (((s as any).vballVars ?? 0)?.['coachsex'] === 5) {
                                                                if (((s as any).ShowerIvan ?? 0) === 6) {
                                                                  scene.text('I should talk to the coach.');
                                                                } else {
                                                                  if (((s as any).ricewine ?? 0) === 1) {
                                                                    scene.text('I should deliver the rice wine to Guang next Sunday morning, before noon.');
                                                                  } else {
                                                                    scene.text('I need to find some rice wine. The Pavlovsk train station market would be a good place to look.');
                                                                  }
                                                                  scene.text('I need to check out the city gym on Sunday morning, before noon. Maybe I can learn something about Coach Mikhail there.');
                                                                }
                                                              } else {
                                                                if (((s as any).vballVars ?? 0)?.['coachsex'] >= 1) {
                                                                  scene.text('It\'s time to start pushing for a spot as a starter. I should be careful about pushing too hard though, or I could ruin my chances.');
                                                                } else {
                                                                  scene.text('I need to at least give the coach a blowjob to finish my seduction scheme.');
                                                                }
                                                                if (((s as any).pcs_vball ?? 0) > 70) {
                                                                  scene.text('I\'m pretty sure I\'ve pushed every button and jumped through every hoop I can with the coach. It\'s time to request that starter spot again.');
                                                                } else {
                                                                  scene.text('I\'ve done everything I can do to twist Mikhail around my finger. Now I just need to keep practicing my volleyball skills to be worthy of a starter position.');
                                                                }
                                                              }
                                                            }
                                                            qspCall(s, 'cards', 'section_close');
                                                          }
                                                          if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
                                                            qspCall(s, 'cards', 'section_open', 'Christina Zvereva', 18);
                                                            if (((s as any).christinaQW ?? 0)?.['subpath'] >= 1  ||  ((s as any).christinaQW ?? 0)?.['fight'] >= 1  ||  ((s as any).christinaQW ?? 0)?.['pre_fight'] >= 1  ||  ((s as any).christinaQW ?? 0)?.['blackmail'] >= 1  ||  ((s as any).christinaQW ?? 0)?.['pre_bm'] >= 1) {
                                                              if (((s as any).christinaQW ?? 0)?.['fight'] >= 1  ||  ((s as any).christinaQW ?? 0)?.['pre_fight'] >= 1) {
                                                                if (((s as any).christinaQW ?? 0)?.['fight'] === 1) {
                                                                  scene.text('I fought Christina and won! She cannot touch me now, and if I demand it, she will give it, or get another beating.');
                                                                } else {
                                                                  scene.text('I have decided I\'m going to beat the crap out of Christina. I should do it after school, but in front of the school too, so everybody sees it happen.');
                                                                }
                                                              } else {
                                                                if (((s as any).christinaQW ?? 0)?.['blackmail'] >= 2) {
                                                                  scene.text('I have managed to successfully blackmail Christina. She can\'t touch me now, or I will ruin her.');
                                                                } else {
                                                                  scene.text('I need to chat with Christina at school, let her know what I have on her. Unless she does what I want, I\'m going to ruin her reputation.');
                                                                  scene.text('I should wait and see what opportunities come up to get some dirt on Christina.');
                                                                }
                                                                if (((s as any).christinaQW ?? 0)?.['subpath'] === 7) {
                                                                  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
                                                                    scene.text('Christina is getting bolder about her peeking on me and Sly when we fuck. I need to keep fucking him, until she cannot control herself anymore. When she breaks, I need to be ready for my chance to get even.');
                                                                    scene.text('The end of her story for this update');
                                                                  } else {
                                                                    scene.text('Christina is getting bolder about her peeking on me and Sly when we fuck. I need to keep fucking him, until she cannot control herself anymore. My Mistress deserves the pleasure she is denying herself.');
                                                                    scene.text('The end of her story for this update');
                                                                  }
                                                                } else {
                                                                  scene.text('I\'ve encouraged her to act on her desires. Hopefully I was subtle enough that she thinks it was her idea. I need to keep tempting her by fucking him.');
                                                                  if (((s as any).christinaQW ?? 0)?.['subpath'] === 5) {
                                                                    if (((s as any).slyQW ?? 0)?.['met'] >= 2) {
                                                                      if (((s as any).slyQW ?? 0)?.['Chris_caught'] === 1) {
                                                                        if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
                                                                          scene.text('Sly took me. He was not gentle. I need to find a way out of this. Until I do, I will have to keep visiting Sly.');
                                                                        } else {
                                                                          scene.text('Sly took me. He was not gentle. I want more.');
                                                                        }
                                                                      } else {
                                                                        scene.text('I keep hearing moaning while Sly is fucking me. I don\'t understand who it is, the only one in the house besides me and Sly is Christina…');
                                                                        scene.text('I\'m pretty sure the noises I been hearing during sex with Sly are coming from Christina. I should try and talk to her about it.');
                                                                      }
                                                                    } else {
                                                                      scene.text('Christina told me to go find her brother. Apparently I\'m a gift… I wonder why she would do such a thing.');
                                                                      scene.text('I followed Christina home. I can visit whenever I want for now, as long as I follow her rules. I should ask her about her brother sometime, when she is in her room.');
                                                                    }
                                                                  } else {
                                                                    scene.text('Christina told me to follow her home after school, I should talk to her once school gets out.');
                                                                    if (((s as any).christinaQW ?? 0)?.['subpath'] === 3) {
                                                                      scene.text('Christina owns me now. After gym class, she makes me do things in the showers. I am sure it\'s only the beginning, too…');
                                                                    } else {
                                                                      if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
                                                                        scene.text('I challenged Christina… and lost. I have a feeling that is going to catch up to me somehow…');
                                                                      } else {
                                                                        scene.text('I submitted myself to Christina\'s control. I have to wait and see what the future brings…');
                                                                      }
                                                                      scene.text('I heard Christina trains Lina by the lake after school. I should pay them a visit after school sometime.');
                                                                    }
                                                                  }
                                                                  if (((s as any).christinaQW ?? 0)?.['bully'] > 0  &&  (((s as any).christinaQW ?? 0)?.['bully'] <= 40  ||  ((s as any).christinaQW ?? 0)?.['bully'] >= 60)) {
                                                                    scene.text('I know exactly how I feel about Christina at this point. I should think about what I want to do about her, and talk to her at school.');
                                                                  } else {
                                                                    scene.text('Christina bullies me every chance she gets. I have a feeling my reactions to these things will shape my future with her…');
                                                                  }
                                                                  qspCall(s, 'cards', 'section_close');
                                                                }
                                                                if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
                                                                  qspCall(s, 'cards', 'section_open', 'Ivan Prokhorov', 3);
                                                                  if (((s as any).npc_rel ?? 0)?.['A3'] < 60) {
                                                                    scene.text('If I want to get to know Ivan better, I should spend some time chatting with him during school.');
                                                                  } else {
                                                                    if ((!((s as any).kotovVSprohorov ?? 0))) {
                                                                      // TODO-QSP: dynamic text: I see Ivan at the sports center around '+func('time', 'get_time_string', 17, 0)+...
                                                                      scene.text('I see Ivan at the sports center around \'+func(\'time\', \'get_time_string\', 17, 0)+\' a lot. I should try and chat with him then.');
                                                                    } else {
                                                                      scene.text('I\'m feeling dirty. I should take a shower at the sports center.');
                                                                      if ((!((s as any).IvanShowerQW ?? 0))) {
                                                                        scene.text('I need to not chicken out the next time Ivan tries to join me in the sports center shower.');
                                                                      } else {
                                                                        scene.text('I should talk to Ivan about what happened in the sports center the next time I\'m at school.');
                                                                        if (((s as any).IvanShowerQW ?? 0) === 2) {
                                                                          scene.text('I need to not chicken out the next time Ivan tries to join me in the sports center shower.');
                                                                        } else {
                                                                          scene.text('Ivan sometimes joins me in the showers at the sports center. If I want it to happen more often, then I need to talk with him about it at school.');
                                                                        }
                                                                      }
                                                                    }
                                                                    if (((s as any).ivanQW ?? 0)?.['ivan_boxing_invite'] === 1) {
                                                                      // TODO-QSP: dynamic text: Ivan agreed to teach me to box. I should look for him at the sports center aroun...
                                                                      scene.text('Ivan agreed to teach me to box. I should look for him at the sports center around \'+func(\'time\', \'get_time_string\', 17, 0)+\' for training.');
                                                                    }
                                                                    qspCall(s, 'cards', 'section_close');
                                                                  }
                                                                  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).NikoIntro ?? 0) === 1) {
                                                                    qspCall(s, 'cards', 'section_open', 'Niko Volkov', 189);
                                                                    if (((s as any).NikoVolkovQW ?? 0) === -1) {
                                                                      if ((!((s as any).NikoPayback ?? 0))) {
                                                                        scene.text('Niko and I are done. Whatever this was, it\'s over now.');
                                                                      } else {
                                                                        scene.text('I broke things off with Niko, but he isn\'t going to let it go quietly. I should watch myself around him at school.');
                                                                        if (((s as any).NikoPayback ?? 0) === 2) {
                                                                          scene.text('Niko is making me pay, one way or another, for breaking things off with him. I need to find someone who can make him stop.');
                                                                        } else {
                                                                          scene.text('I got help dealing with Niko, and he\'s finally backed off for good.');
                                                                        }
                                                                        if ((!((s as any).NikoVolkovQW ?? 0))) {
                                                                          if (((s as any).NikoLuv ?? 0) < 4) {
                                                                            scene.text('I\'ve met Niko. If I want to get closer to him, I should keep chatting with him during breaks at school.');
                                                                          } else {
                                                                            scene.text('Niko seems to be warming up to me. I should keep finding him at school, he might have something for me soon.');
                                                                          }
                                                                        } else {
                                                                          if (((s as any).NikoEv ?? 0) === 1) {
                                                                            scene.text('Niko asked me on a date. I should find him at school.');
                                                                          } else {
                                                                            scene.text('Niko wants to go on another date with me. I should find him at school.');
                                                                            if (((s as any).NikoEv ?? 0) === 5) {
                                                                              scene.text('Our day at the beach revealed more about Niko\'s family than I expected, especially about his brother Yurik. I should find him again at school to see where things go from here.');
                                                                            } else {
                                                                              scene.text('Niko wants to meet me by the cafeteria during a break. I should find him at school around lunchtime.');
                                                                              if (((s as any).NikoEv ?? 0) === 7) {
                                                                                scene.text('Niko wants to walk me through town after school, on his terms. I should find him at school once classes let out.');
                                                                              } else {
                                                                                scene.text('Niko wants to see me at the disco. I should look for him there.');
                                                                                if (((s as any).NikoEv ?? 0) === 9) {
                                                                                  scene.text('Niko wants to meet me after school again. I should find him at school once classes let out.');
                                                                                } else {
                                                                                  scene.text('Word has gotten around school about me and Niko, and none of it has been kind. Niko says he might know someone who can fix it, but I\'m not sure I want to know the price. I\'ll run into people about it around school either way.');
                                                                                  if (((s as any).NikoEv ?? 0) === 11) {
                                                                                    scene.text('I\'ve agreed to let Niko help me fix things. I should find him at school to see what he has planned.');
                                                                                  }
                                                                                  if (((s as any).NikoVolkovQW ?? 0) === 10) {
                                                                                    if (((s as any).NikoEv ?? 0) === 12) {
                                                                                      scene.text('Niko swears he\'ll protect me, but our arrangement to fix my reputation feels like it\'s only just begun. I should find him at school.');
                                                                                    } else {
                                                                                      scene.text('Niko wants to see me at lunch. I should find him there.');
                                                                                      if (((s as any).NikoEv ?? 0) === 14) {
                                                                                        scene.text('People at school are starting to look at me differently. I should find Niko at lunch.');
                                                                                      } else {
                                                                                        scene.text('Niko wants to see me at lunch again.');
                                                                                        if (((s as any).NikoEv ?? 0) === 16) {
                                                                                          scene.text('I should find Niko at lunch again.');
                                                                                        } else {
                                                                                          scene.text('Niko wants to see me again to help settle what I owe. I should find him at school.');
                                                                                          if (((s as any).NikoEv ?? 0) === 18) {
                                                                                            scene.text('Niko wants to see me again. I should find him at school.');
                                                                                          } else {
                                                                                            scene.text('Niko has another trip planned to pay off what I owe. I should find him at school.');
                                                                                            if (((s as any).NikoEv ?? 0) === 20) {
                                                                                              scene.text('I keep going back to pay off my debt to Niko\'s contact, mostly on my own now. I\'m not sure how much further this can go, or if I even want to find out.');
                                                                                            } else {
                                                                                              scene.text('Things with Niko feel like they\'ve reached the end of the road, one way or another, though it\'s not clear where we go from here.');
                                                                                            }
                                                                                          }
                                                                                          qspCall(s, 'cards', 'section_close');
                                                                                        }
                                                                                        if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
                                                                                          qspCall(s, 'cards', 'section_open', 'Julia Milov', 12);
                                                                                          if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
                                                                                            scene.text('As long as people see me as a slut around town, there is no way Julia will give me the time of day.');
                                                                                          } else {
                                                                                            if (((s as any).npc_rel ?? 0)?.['A12'] < 60) {
                                                                                              scene.text('I need to get to know Julia better before she is willing to hang out with me after school.');
                                                                                            } else {
                                                                                              if (((s as any).juliaQW ?? 0)?.['study_unlocked'] === 0) {
                                                                                                scene.text('I should ask Julia to help me with my homework after school sometime. I can find her hanging out with the other nerds in a classroom during school breaks.');
                                                                                              } else {
                                                                                                if (((s as any).juliaQW ?? 0)?.['home_unlocked'] === 0) {
                                                                                                  scene.text('Julia agreed to help me with my homework. She should be waiting for me after school ends.');
                                                                                                } else {
                                                                                                  if (((s as any).mc_inventory ?? 0)?.['food_wine'] === 0) {
                                                                                                    scene.text('I bet if I bought some wine, Julia would drink it with me.');
                                                                                                  } else {
                                                                                                    if (((s as any).juliaQW ?? 0)?.['JulMilBestFrend'] < 5) {
                                                                                                      scene.text('I should spend some time chatting with Julia. I bet if I get to know her well enough, she would open up to me more.');
                                                                                                    } else {
                                                                                                      if (((s as any).juliaQW ?? 0)?.['SexTalkJulia'] === 0) {
                                                                                                        scene.text('I should try talking to Julia about sex.');
                                                                                                      } else {
                                                                                                        scene.text('I should try getting Julia to tell me more about her sexual adventures.');
                                                                                                        if (((s as any).juliaQW ?? 0)?.['date'] === 1) {
                                                                                                          scene.text('Julia and I are officially dating now.');
                                                                                                        } else {
                                                                                                          scene.text('Julia and I are in a sexual relationship now.');
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                            qspCall(s, 'cards', 'section_close');
                                                                                          }
                                                                                          if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
                                                                                            qspCall(s, 'cards', 'section_open', 'Lariska Gruzdeva', 13);
                                                                                            if (((s as any).LariskaQW ?? 0)?.['story'] === 0) {
                                                                                              if (((s as any).npc_rel ?? 0)?.['A13'] <= 40) {
                                                                                                scene.text('I need to get to know Lariska better before she would hang out with me.');
                                                                                              } else {
                                                                                                scene.text('I think I heard the sound of a ball outside the Five Eight Estate.');
                                                                                              }
                                                                                            } else {
                                                                                              if (((s as any).npc_rel ?? 0)?.['A13'] <= 40) {
                                                                                                scene.text('I need to get to know Lariska better before she would hang out with me.');
                                                                                              } else {
                                                                                                scene.text('I should try talking to her outside of the Five Eight Estate again. Maybe I should be a little nicer this time, though.');
                                                                                              }
                                                                                              if (((s as any).LariskaQW ?? 0)?.['story'] === 2) {
                                                                                                scene.text('I should return the volleyball Lariska left behind during school. Maybe then I can figure out why she freaked out.');
                                                                                              } else {
                                                                                                if (((s as any).christinaQW ?? 0)?.['blackmail'] < 2  &&  ((s as any).christinaQW ?? 0)?.['fight'] !== 1  &&  ((s as any).christinaQW ?? 0)?.['subpath'] < 2) {
                                                                                                  scene.text('I have to find a way to deal with Christina before Lariska is willing to be more involved with me.');
                                                                                                } else {
                                                                                                  scene.text('I should talk to Lariska at school.');
                                                                                                }
                                                                                                if (((s as any).LariskaQW ?? 0)?.['story'] === 4) {
                                                                                                  scene.text('I should talk to Lariska at school again.');
                                                                                                } else {
                                                                                                  scene.text('Lariska invited me to come over after school and do our homework together.');
                                                                                                  if (((s as any).LariskaQW ?? 0)?.['story'] === 6) {
                                                                                                    scene.text('I should do my homework with Lariska after school.');
                                                                                                  } else {
                                                                                                    scene.text('We should get to know each other better, so I should chat with Lariska when she is in her bedroom after school or on the weekends.');
                                                                                                    if (((s as any).LariskaQW ?? 0)?.['story'] === 8) {
                                                                                                      scene.text('I should try to flirt with Lariska after school or on the weekends when she is in her bedroom.');
                                                                                                    } else {
                                                                                                      scene.text('I need to keep flirting with her to build her trust.');
                                                                                                      if (((s as any).LariskaQW ?? 0)?.['story'] === 10) {
                                                                                                        scene.text('I should chat with Lariska when she is in her bedroom after school or on the weekends.');
                                                                                                      } else {
                                                                                                        if (((s as any).daystart ?? 0) < ((s as any).LariskaBoyDay ?? 0)) {
                                                                                                          scene.text('There isn\'t anything to talk about right now. Give it some time.');
                                                                                                        } else {
                                                                                                          scene.text('I should chat with Lariska when she is cooking in her kitchen on a weekday.');
                                                                                                        }
                                                                                                        if (((s as any).LariskaQW ?? 0)?.['story'] === 12) {
                                                                                                          scene.text('She wants me to meet her new boyfriend at Del Parco next Saturday.');
                                                                                                        } else {
                                                                                                          if (((s as any).daystart ?? 0) < ((s as any).LariskaBoyDay ?? 0)) {
                                                                                                            scene.text('There isn\'t anything to talk about right now. Give it some time.');
                                                                                                          } else {
                                                                                                            scene.text('I should chat with Lariska when she is in her bedroom after school or on the weekends.');
                                                                                                          }
                                                                                                          if (((s as any).LariskaQW ?? 0)?.['story'] === 14) {
                                                                                                            scene.text('I feel like clubbing. I should hit up the disco next weekend.');
                                                                                                          } else {
                                                                                                            scene.text('I need to tell Lariska what I saw Lev doing when she is in her bedroom after school or on the weekends.');
                                                                                                            if (((s as any).LariskaQW ?? 0)?.['story'] === 16) {
                                                                                                              if (((s as any).daystart ?? 0) < ((s as any).LariskaBoyDay ?? 0)) {
                                                                                                                scene.text('There isn\'t anything to talk about right now. Give it some time.');
                                                                                                              } else {
                                                                                                                scene.text('Lariska needs to talk to me, saying it was important. I should go to her bedroom after school or on the weekends.');
                                                                                                              }
                                                                                                            } else {
                                                                                                              if (((s as any).daystart ?? 0) < ((s as any).LariskaBoyDay ?? 0)) {
                                                                                                                scene.text('There isn\'t anything to talk about right now. Give it some time.');
                                                                                                              } else {
                                                                                                                scene.text('Lariska called me crying. I need to go see her at home the next chance I get.');
                                                                                                              }
                                                                                                              if (((s as any).LariskaQW ?? 0)?.['story'] === 18) {
                                                                                                                if (((s as any).daystart ?? 0) < ((s as any).LariskaBoyDay ?? 0)) {
                                                                                                                  scene.text('There isn\'t anything to talk about right now. Give it some time.');
                                                                                                                } else {
                                                                                                                  scene.text('Lariska called me crying again. I need to go see her at home the next chance I get.');
                                                                                                                }
                                                                                                              } else {
                                                                                                                scene.text('Lariska trusts you more than anybody else in her life now, and will (eventually) be able to do plenty of stuff around town with you.');
                                                                                                              }
                                                                                                              qspCall(s, 'cards', 'section_close');
                                                                                                            }
                                                                                                            qspCall(s, 'cards', 'section_open', 'Natasha Belova', 16);
                                                                                                            qspCall(s, 'natbel_cp_1', 'journal_quests');
                                                                                                            qspCall(s, 'cards', 'section_close');
                                                                                                            if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
                                                                                                              qspCall(s, 'cards', 'section_open', 'Katja Meynold', 14);
                                                                                                              if (((s as any).katjaQW ?? 0)?.['QWstage'] === 0) {
                                                                                                                // TODO-QSP: 'Katja is both cute, smart and popular. If I want to be her friend'+iif(npc_rel['A14'] < 60, ', I ne...
                                                                                                              } else {
                                                                                                                scene.text('Katja has agreed to hang out after school. I should do this more often to see where this leads.');
                                                                                                                if (((s as any).katjaQW ?? 0)?.['QWstage'] === 2) {
                                                                                                                  scene.text('Katja and I saw her mother and a girl not much older than us kissing and it clearly affected Katja. I thought about asking her if we should try kissing but decided not to. Maybe if I hang out more with her at her house there will be another opportunity to try?');
                                                                                                                } else {
                                                                                                                  if (((s as any).npc_had_sex ?? 0)?.['A14'] === 0) {
                                                                                                                    // TODO-QSP: 'I''ve kissed Katja, but not gone any further.'+iif(katjaQW['slut'] < 20, ' Katja needs to loosen up...
                                                                                                                  } else {
                                                                                                                    scene.text('While Katja is a shy girl, she is still quite strong-willed, and will not do anything sexual if not in the mood. Fortunately for me, it\'s pretty easy to determine if she is aroused by how red her face is.');
                                                                                                                  }
                                                                                                                  if (((s as any).katjaQW ?? 0)?.['school_kiss'] === 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((s as any).katjaQW ?? 0)?.['knows_masturbation'] + ((s as any).katjaQW ?? 0)?.['knows_BJ'] + ((s as any).katjaQW ?? 0)?.['knows_sex'] + ((s as any).katjaQW ?? 0)?.['knows_anal']+ ((s as any).katjaQW ?? 0)?.['knows_cuni'] >= 2) {
                                                                                                                    scene.text('I should try to kiss Katja at school.');
                                                                                                                  } else {
                                                                                                                    scene.text('I should kiss Katja again in school and see what happens.');
                                                                                                                  }
                                                                                                                  if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 0) {
                                                                                                                    // TODO-QSP: 'It could be fun to see if I could get Katja to go to school without panties. To do this, I need to ...
                                                                                                                  } else {
                                                                                                                    scene.text('I think I\'m getting close to having Katja take off her panties at school. Just have to push her a little more…');
                                                                                                                    if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 4) {
                                                                                                                      scene.text('I\'ve gotten Katja to take off her panties at school. Now she just needs to lose some more inhibition so she doesn\'t put them on in the morning.');
                                                                                                                    } else {
                                                                                                                      scene.text('Success. Katja doesn\'t wear panties to school anymore.');
                                                                                                                    }
                                                                                                                    if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 0  &&  ((s as any).artemQW ?? 0)?.['bf'] === 1) {
                                                                                                                      scene.text('I should go to Katja\'s room. She probably wants to know about Artem being my boyfriend.');
                                                                                                                    } else {
                                                                                                                      if (((s as any).artemQW ?? 0)?.['artembrokenheart'] === 1) {
                                                                                                                        scene.text('Katja probably wants to know that I have broken up with Artem.');
                                                                                                                      } else {
                                                                                                                        scene.text('I should tell Katja that Artem and I have an open relationship.');
                                                                                                                      }
                                                                                                                    }
                                                                                                                    if (((s as any).artemQW ?? 0)?.['katja_threesome'] === 2) {
                                                                                                                      scene.text('Katja has had a threesome with Artem. Walking home from school with either Artem or Katja should make a repeat possible if I want to.');
                                                                                                                      if (((s as any).artemQW ?? 0)?.['katja_threesome_talk'] === 0) {
                                                                                                                        scene.text('I could also talk to Artem about how he felt about it.');
                                                                                                                      }
                                                                                                                    }
                                                                                                                    if (((s as any).npc_had_sex ?? 0)?.['A14']) {
                                                                                                                      if (((s as any).mc_inventory ?? 0)?.['strapon'] === 0) {
                                                                                                                        scene.text('I should buy a strap-on so that I can use it on Katja.');
                                                                                                                      } else {
                                                                                                                        if (((s as any).katjaQW ?? 0)?.['strapon_vag'] + ((s as any).katjaQW ?? 0)?.['strapon_ass'] + ((s as any).katjaQW ?? 0)?.['strapon_bj'] > 0) {
                                                                                                                          scene.text('Katja is not comfortable with trying the strap-on again. She needs to lose some more inhibition.');
                                                                                                                        } else {
                                                                                                                          scene.text('You need to get Katja to lose some more of her inhibition before you can use your strap-on on her.');
                                                                                                                        }
                                                                                                                        if (((s as any).katjaQW ?? 0)?.['strapon_vag'] + ((s as any).katjaQW ?? 0)?.['strapon_ass'] + ((s as any).katjaQW ?? 0)?.['strapon_bj'] < 3) {
                                                                                                                          // TODO-QSP: dynamic text: You should' +iif(katjaQW['strapon_bj'] = 0, '; make Katja give your strap-on a b...
                                                                                                                          scene.text('You should\' +iif(katjaQW[\'strapon_bj\'] = 0, \'; make Katja give your strap-on a blowjob\', \')+ iif( katjaQW[\'strapon_vag\'] = 0, \'; fuck Katja\'s pussy with your strap-on\', \')+ iif(katjaQW[\'strapon_ass\'] = 0, \'; fuck Katja in the ass with your strap-on\', \')+\'.');
                                                                                                                        }
                                                                                                                        if (((s as any).katjaQW ?? 0)?.['boy_block'] === 0) {
                                                                                                                          if (((s as any).katjaQW ?? 0)?.['knows_BJ'] === 0  ||  ((s as any).katjaQW ?? 0)?.['knows_sex'] === 0  ||  ((s as any).katjaQW ?? 0)?.['knows_anal'] === 0) {
                                                                                                                            scene.text('If I keep telling Katja about my sexual experiences, she might want to try something with me.');
                                                                                                                          }
                                                                                                                          if (((((s as any).katjaQW ?? 0)?.['knows_BJ'] + ((s as any).katjaQW ?? 0)?.['knows_sex']) >= 2  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] < 4)  ||  ((((s as any).katjaQW ?? 0)?.['knows_BJ'] + ((s as any).katjaQW ?? 0)?.['knows_anal']) >= 2  &&  ((s as any).katjaQW ?? 0)?.['anal_quest'] === 0)) {
                                                                                                                            scene.text('Katja wants to ask you something at her home, but she needs to be in the right mood before she will ask.');
                                                                                                                          }
                                                                                                                          if (((s as any).katjaQW ?? 0)?.['anal_quest'] === 2) {
                                                                                                                            if (((s as any).IvanShowerQW ?? 0) === 11) {
                                                                                                                              scene.text('I should find a place where we can get Ivan to take Katja\'s anal virginity. Maybe we can catch him at the beach or at school when he is looking at us kissing.');
                                                                                                                            } else {
                                                                                                                              scene.text('I need to seduce and have anal sex with Ivan before I can have him take Katja\'s anal virginity. See Ivan\'s quest for how to do this.');
                                                                                                                            }
                                                                                                                          }
                                                                                                                          if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
                                                                                                                            if (((s as any).katjaQW ?? 0)?.['marcus_asked'] === 0) {
                                                                                                                              if (((s as any).Marcus_sextype ?? 0) > 0) {
                                                                                                                                scene.text('I should ask Marcus about being Katja\'s first during school break.');
                                                                                                                              } else {
                                                                                                                                scene.text('I need to seduce and have sex with Marcus before I can ask him to be Katja\'s first. I could try at the disco.');
                                                                                                                              }
                                                                                                                            } else {
                                                                                                                              scene.text('Marcus has agreed to be Katja\'s first, so I should talk with Katja at her room to set it up.');
                                                                                                                            }
                                                                                                                          }
                                                                                                                          if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] === 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 6) {
                                                                                                                            scene.text('I should get Katja on birth control, then I could take her on some wilder sex adventures once she\'s ready.');
                                                                                                                          } else {
                                                                                                                            scene.text('I should continue to corrupt Katja. There might be more things I can push her to do.');
                                                                                                                            if (((s as any).katjaQW ?? 0)?.['QWstage'] === 6) {
                                                                                                                              scene.text('Katja wants to talk to me about something at her home. She needs to be somewhat horny to ask me');
                                                                                                                            } else {
                                                                                                                              scene.text('I should take Katja to the park to get her to hook up with random guys.');
                                                                                                                              if (((s as any).katjaQW ?? 0)?.['park_sex'] === 1) {
                                                                                                                                scene.text('I took Katja to the park and she had sex with a random guy. Maybe if we go again I could get her to have sex with several guys.');
                                                                                                                              } else {
                                                                                                                                scene.text('Katja had a threesome in the park with two random guys. We should go again and see where things end up.');
                                                                                                                                scene.text('You\'ve managed to turn Katja from an innocent virgin into a complete slut that will have orgies with random people you meet in the park.');
                                                                                                                                // TODO-QSP: 'You have unlocked all the scenes with Katja that are in the game at this time' +iif(NatbelQW['QWsta...
                                                                                                                              }
                                                                                                                              if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1) {
                                                                                                                                if (((s as any).katjaQW ?? 0)?.['QWstage'] < 4  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 50  &&  ((s as any).katjaQW ?? 0)?.['pussy_sex'] === 0) {
                                                                                                                                  scene.text('Katja wants to ask you something at her home, but she needs to be in the right mood before she will ask.');
                                                                                                                                } else {
                                                                                                                                  if (((s as any).artemQW ?? 0)?.['katja_threesome'] === 1) {
                                                                                                                                    scene.text('I have agreed to set up a threesome with Katja and Artem. I should walk home from school with Artem to set things in motion.');
                                                                                                                                  } else {
                                                                                                                                    scene.text('Katja asked for a threesome with Artem. I said no, but I can always tell her I changed my mind.');
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                        qspCall(s, 'cards', 'section_close');
                                                                                                                      }
                                                                                                                      if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
                                                                                                                        qspCall(s, 'cards', 'section_open', 'Katja Meynold', 14);
                                                                                                                        if (((s as any).katjaQW ?? 0)?.['QWstage'] < 2) {
                                                                                                                          // TODO-QSP: 'Katja is both cute, smart and popular. If I want to be her friend'+iif(npc_rel['A14'] < 70, ', I ne...
                                                                                                                        } else {
                                                                                                                          scene.text('Katja and I saw two women making out at the stairs when she took me to her dorm room. Katja was interested in trying, but I told her no. She might try again later. I know her room and can come by when she is home.');
                                                                                                                          if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
                                                                                                                            if (((s as any).npc_had_sex ?? 0)?.['A14'] === 0) {
                                                                                                                              // TODO-QSP: 'I''ve kissed Katja, but not gone any further, when she asked me to have sex.'+iif(katjaQW['slut'] <...
                                                                                                                            } else {
                                                                                                                              scene.text('While Katja is a shy girl, she is still quite strong-willed, and will not do anything sexual if not in the mood. Fortunately for me, it\'s pretty easy to determine if she is aroused by how red her face is.');
                                                                                                                            }
                                                                                                                            if (((s as any).katjaQW ?? 0)?.['slut'] <75  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0) {
                                                                                                                              scene.text('Katja is a good girl who studies a lot, but sometimes on Thursday she will watch a movie in her dorm room at night instead of going to the library.');
                                                                                                                              // TODO-QSP: dynamic text: She also goes partying on Friday evening, where she will prepare in her dorm roo...
                                                                                                                              scene.text('She also goes partying on Friday evening, where she will prepare in her dorm room from \'+func(\'time\', \'get_time_string\', 19, 0)+\' to \'+func(\'time\', \'get_time_string\', 19, 45)+\'. Saturday and Sunday she spends at her mother\'s house in Pavlovsk.');
                                                                                                                            } else {
                                                                                                                              scene.text('Katja is a good girl who studies a lot but has started to loosen up. On Thursday she doesn\'t study at night but will watch a movie in her dorm or maybe go partying.');
                                                                                                                              // TODO-QSP: dynamic text: She also goes partying on Friday evening, where she will prepare in her dorm roo...
                                                                                                                              scene.text('She also goes partying on Friday evening, where she will prepare in her dorm room from \'+func(\'time\', \'get_time_string\', 19, 0)+\' to \'+func(\'time\', \'get_time_string\', 19, 45)+\'. Saturday night is also spent partying and Sunday she spends at her mother\'s house in Pavlovsk.');
                                                                                                                            }
                                                                                                                            if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0) {
                                                                                                                              if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 0) {
                                                                                                                                scene.text('It could be fun to see if I could get Katja to go to university without panties. To do this, I need to speak with her in public when I\'m not wearing panties so she can see that I\'m not wearing any.');
                                                                                                                              } else {
                                                                                                                                scene.text('I think I\'m getting close to having Katja take off her panties outside her dorm room. Just have to push her a little more…');
                                                                                                                                if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 4) {
                                                                                                                                  scene.text('I\'ve gotten Katja to take off her panties outside her dorm room. Now she just needs to lose some more inhibition so she doesn\'t put them on in the morning.');
                                                                                                                                } else {
                                                                                                                                  scene.text('Success. Katja doesn\'t wear panties to university anymore.');
                                                                                                                                }
                                                                                                                              }
                                                                                                                              if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 0  &&  ((s as any).artemQW ?? 0)?.['bf'] === 1) {
                                                                                                                                scene.text('I should go to Katja\'s room. She probably wants to know about Artem being my boyfriend.');
                                                                                                                              } else {
                                                                                                                                if (((s as any).artemQW ?? 0)?.['artembrokenheart'] === 1) {
                                                                                                                                  scene.text('Katja probably wants to know that I have broken up with Artem.');
                                                                                                                                } else {
                                                                                                                                  scene.text('I should tell Katja that Artem and I have an open relationship.');
                                                                                                                                }
                                                                                                                              }
                                                                                                                              if (((s as any).artemQW ?? 0)?.['katja_threesome'] === 2) {
                                                                                                                                scene.text('Katja has had a threesome with Artem. Walking home from school with either Artem or Katja should make a repeat possible if I want to.');
                                                                                                                                if (((s as any).artemQW ?? 0)?.['katja_threesome_talk'] === 0) {
                                                                                                                                  scene.text('I could also talk to Artem about how he felt about it.');
                                                                                                                                }
                                                                                                                              } else {
                                                                                                                                scene.text('I have agreed to set up a threesome with Katja and Artem. I should walk home from school with Artem to set things in motion.');
                                                                                                                                if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 4) {
                                                                                                                                  scene.text('Katja asked for a threesome with Artem. I said no, but I can always tell her I changed my mind.');
                                                                                                                                }
                                                                                                                                if (((s as any).npc_had_sex ?? 0)?.['A14']) {
                                                                                                                                  if (((s as any).mc_inventory ?? 0)?.['strapon'] === 0) {
                                                                                                                                    scene.text('I should buy a strap-on so that I can use it on Katja.');
                                                                                                                                  } else {
                                                                                                                                    if (((s as any).katjaQW ?? 0)?.['strapon_vag'] + ((s as any).katjaQW ?? 0)?.['strapon_ass'] + ((s as any).katjaQW ?? 0)?.['strapon_bj'] > 0) {
                                                                                                                                      scene.text('Katja is not comfortable with trying the strap-on again. She needs to lose some more inhibition.');
                                                                                                                                    } else {
                                                                                                                                      scene.text('You need to get Katja to lose some more of her inhibition before you can use your strap-on on her.');
                                                                                                                                    }
                                                                                                                                    if (((s as any).katjaQW ?? 0)?.['strapon_vag'] + ((s as any).katjaQW ?? 0)?.['strapon_ass'] + ((s as any).katjaQW ?? 0)?.['strapon_bj'] < 3) {
                                                                                                                                      // TODO-QSP: dynamic text: You should' +iif(katjaQW['strapon_bj'] = 0, '; make Katja give your strap-on a b...
                                                                                                                                      scene.text('You should\' +iif(katjaQW[\'strapon_bj\'] = 0, \'; make Katja give your strap-on a blowjob\', \')+ iif( katjaQW[\'strapon_vag\'] = 0, \'; fuck Katja\'s pussy with your strap-on\', \')+ iif(katjaQW[\'strapon_ass\'] = 0, \'; fuck Katja in the ass with your strap-on\', \')+\'.');
                                                                                                                                    }
                                                                                                                                    if (((s as any).katjaQW ?? 0)?.['relationship_count_start'] + 350/(1+ ((s as any).katjaQW ?? 0)?.['boy_block']) < ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['relationship_talk'] === 0  &&  ((s as any).katjaQW ?? 0)?.['relationship_count_start'] > 0) {
                                                                                                                                      // TODO-QSP: dynamic text: You should try to see a movie with Katja '+iif(university['semester_week'] + uni...
                                                                                                                                      scene.text('You should try to see a movie with Katja \'+iif(university[\'semester_week\'] + university[\'exam_week\'] > 0, \'Thursday\', \'Tuesday to Thursday\')+\' night at her dorm room. She might see something that will advance your relationship.');
                                                                                                                                    } else {
                                                                                                                                      scene.text('You relationship needs time to progress');
                                                                                                                                    }
                                                                                                                                    if (((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
                                                                                                                                      if (((s as any).katjaQW ?? 0)?.['knows_BJ'] === 0  ||  ((s as any).katjaQW ?? 0)?.['knows_sex'] === 0  ||  ((s as any).katjaQW ?? 0)?.['knows_anal'] === 0) {
                                                                                                                                        scene.text('If I keep telling Katja about my sexual experiences, she might want to try something with me.');
                                                                                                                                      }
                                                                                                                                      if (((s as any).katjaQW ?? 0)?.['lazar_uni_meet'] === 0  &&  ((s as any).university ?? 0)?.['semester_week'] + ((s as any).university ?? 0)?.['exam_week'] > 0) {
                                                                                                                                        scene.text('If you have lunch at the university cafe with Katja Monday to Thursday, then you might meet somebody interesting');
                                                                                                                                      } else {
                                                                                                                                        if ((((s as any).katjaQW ?? 0)?.['lazer_pussy_talk'] === 0  &&  ((s as any).katjaQW ?? 0)?.['lazer_pussy'] === 0  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 50)  ||  (((s as any).katjaQW ?? 0)?.['lazer_anal_talk'] === 0  &&  ((s as any).katjaQW ?? 0)?.['lazer_anal'] === 0  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 60)) {
                                                                                                                                          scene.text('Katja wants to ask you something at her home, but she needs to be in the right mood before she will ask.');
                                                                                                                                        }
                                                                                                                                        if (((s as any).katjaQW ?? 0)?.['anal_quest'] === 2) {
                                                                                                                                          scene.text('You can go Katja\'s dorm room, so you can call Lazar for Katja to try anal sex with a boy.');
                                                                                                                                        }
                                                                                                                                        if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
                                                                                                                                          scene.text('You can go Katja\'s dorm room, so you can call Lazar for Katja to try vaginal sex with a boy.');
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                      if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
                                                                                                                                        scene.text('Maybe we could find a guy at the nightclub, that could give Katja her first experience with vaginal sex with a boy.');
                                                                                                                                      }
                                                                                                                                      if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] === 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 6) {
                                                                                                                                        scene.text('I should get Katja on birth control, then I could take her on some wilder sex adventures once she\'s ready.');
                                                                                                                                      }
                                                                                                                                      if (((s as any).katjaQW ?? 0)?.['first_orgy'] === ''  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['birth_control_start_day'] !== 0  &&  ((s as any).katjaQW ?? 0)?.['birth_control_start_day'] <= ((s as any).daystart ?? 0)) {
                                                                                                                                        scene.text('Going to the nightclub early on a Friday might get Katja to try something even wilder than what she has done before.');
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                                qspCall(s, 'cards', 'section_close');
                                                                                                                              }
                                                                                                                              if (((s as any).artemLernQW ?? 0) >= 1) {
                                                                                                                                qspCall(s, 'cards', 'section_open', 'Artem Chebotarev', 2);
                                                                                                                                if (((s as any).artemQW ?? 0)?.['artlie'] === 2) {
                                                                                                                                  scene.text('Artem found out I lied to him about that video, and he wants nothing to do with me anymore.');
                                                                                                                                } else {
                                                                                                                                  scene.text('I told Artem I couldn\'t see him anymore because of my reputation. He hasn\'t spoken to me since.');
                                                                                                                                  if (((s as any).artemQW ?? 0)?.['artembrokenheart'] === 1) {
                                                                                                                                    scene.text('Artem and I broke up. I don\'t see him anymore.');
                                                                                                                                  } else {
                                                                                                                                    scene.text('Things with Artem didn\'t work out. I don\'t see him anymore.');
                                                                                                                                    if (((s as any).dimaFilm ?? 0) > 0  &&  ((s as any).artemQW ?? 0)?.['artlie'] === 0  &&  ((s as any).artemQW ?? 0)?.['dimka'] === 0) {
                                                                                                                                      scene.text('Someone is using a video to blackmail me, and Artem said he might be able to help me deal with it. I should talk to him about it.');
                                                                                                                                    }
                                                                                                                                    if (((s as any).artemQW ?? 0)?.['bf'] >= 1) {
                                                                                                                                      if (((s as any).artemQW ?? 0)?.['artemlove'] === 1) {
                                                                                                                                        scene.text('Artem and I are in love. I should keep making time for him.');
                                                                                                                                      } else {
                                                                                                                                        scene.text('Artem knows about my reputation around town, but he\'s stuck by me anyway. I should keep making time for him.');
                                                                                                                                        scene.text('Artem and I are officially together. I should keep making time for him.');
                                                                                                                                      }
                                                                                                                                      if (((s as any).artemQW ?? 0)?.['artem_open_relationship'] === 1) {
                                                                                                                                        scene.text('We\'ve agreed to see other people casually while staying together.');
                                                                                                                                      } else {
                                                                                                                                        scene.text('I wonder if Artem would be up for a more open relationship, if I brought it up with him.');
                                                                                                                                      }
                                                                                                                                      if (((s as any).npc_had_sex ?? 0)?.['A2'] > 0) {
                                                                                                                                        if (((s as any).artemQW ?? 0)?.['strapon'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['strapon'] > 0) {
                                                                                                                                          scene.text('I have a strap-on. Maybe Artem would be up for trying it sometime.');
                                                                                                                                        } else {
                                                                                                                                          scene.text('Artem made it clear he doesn\'t want to try the strap-on with me again.');
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    } else {
                                                                                                                                      scene.text('Artem and I have started dating. I should keep going on dates with him.');
                                                                                                                                      if (((s as any).artemQW ?? 0)?.['artfall'] >= 10  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
                                                                                                                                        scene.text('Artem still hasn\'t asked me out, even though we\'ve grown close. I wonder if my reputation around town has something to do with it.');
                                                                                                                                      } else {
                                                                                                                                        scene.text('Artem tutors me when I ask for help with my homework. I should keep visiting him to get to know him better.');
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                    qspCall(s, 'cards', 'section_close');
                                                                                                                                  }
                                                                                                                                  if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] !== 0  ||  ((s as any).AlbinaQW ?? 0)?.['albride'] >= 2  ||  ((s as any).artemQW ?? 0)?.['alb3some_ask'] !== 0  ||  ((s as any).artemQW ?? 0)?.['albina_threesome'] !== 0  ||  (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).pcs_danc ?? 0) >= 45  &&  ((s as any).year ?? 0) === 2016  &&  (((s as any).month ?? 0) < 10  ||  (((s as any).month ?? 0) === 10  &&  ((s as any).day ?? 0) < 18)))) {
                                                                                                                                    qspCall(s, 'cards', 'section_open', 'Albina Barlovskaya', 23);
                                                                                                                                    if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] === 1) {
                                                                                                                                      if (((s as any).npc_pregtalk ?? 0)?.['A23'] === 1) {
                                                                                                                                        scene.text('Albina had to drop me from the Starlets once she found out I was pregnant. I can\'t dance like this.');
                                                                                                                                      } else {
                                                                                                                                        scene.text('The Starlets are finished. Albina\'s father was exposed for what he was really using the troupe for, and the whole thing fell apart.');
                                                                                                                                        scene.text('I\'m one of Albina\'s Starlets now. We rehearse at the community center every day except Tuesday and Thursday, and if I keep skipping practice she\'ll drop me from the troupe.');
                                                                                                                                        if (((s as any).AlbinaQW ?? 0)?.['starlets_virgin'] === 0) {
                                                                                                                                          scene.text('Every so often we put on a paid show. Afterwards, some of the men who watched pay Albina for \'private time\' with her girls. She hates asking, but I can always turn it down.');
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    } else {
                                                                                                                                      scene.text('Albina kicked me out of the Starlets for missing too many rehearsals.');
                                                                                                                                      if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] === -2) {
                                                                                                                                        scene.text('I quit the Starlets. Albina was disappointed, but she let me go without a fuss.');
                                                                                                                                      } else {
                                                                                                                                        scene.text('Albina runs an exclusive dance troupe, the Starlets, and only takes real talent from among the popular crowd. If I keep sharpening my dancing at the community center studio, look my best, and she comes to see me as one of the cool girls, she might invite me to join. She picks her line-up early in the school year, so I shouldn\'t leave it too long.');
                                                                                                                                      }
                                                                                                                                      if (((s as any).AlbinaQW ?? 0)?.['albride'] >= 2) {
                                                                                                                                        if (((s as any).npc_had_sex ?? 0)?.['A23'] === 0) {
                                                                                                                                          scene.text('Albina and I have grown close since she opened up to me about her family. I should keep spending time with her at her place.');
                                                                                                                                        } else {
                                                                                                                                          scene.text('Albina and I have grown close. I should keep spending time with her, since hanging out at her place sometimes turns into more.');
                                                                                                                                        }
                                                                                                                                        if (((s as any).yearstart ?? 0) > 1) {
                                                                                                                                          if (((s as any).AlbinaQW ?? 0)?.['dorm_invite'] === 0) {
                                                                                                                                            scene.text('Now that we\'re both at university, I should catch up with her over lunch at the campus cafeteria.');
                                                                                                                                          } else {
                                                                                                                                            scene.text('I can visit Albina in her dorm room, room 707 on the seventh floor.');
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                      if (((s as any).artemQW ?? 0)?.['albina_threesome'] === -2) {
                                                                                                                                        scene.text('Something went wrong between Artem, Albina, and me. I don\'t think that\'s happening again.');
                                                                                                                                      } else {
                                                                                                                                        scene.text('Albina decided she\'s not interested in another threesome with Artem.');
                                                                                                                                        if (((s as any).artemQW ?? 0)?.['albina_threesome'] >= 3) {
                                                                                                                                          scene.text('Threesomes with Artem and Albina have become a regular thing between the three of us.');
                                                                                                                                        } else {
                                                                                                                                          scene.text('Artem, Albina, and I have had a threesome together. I should see if Albina\'s interested in doing it again.');
                                                                                                                                          if (((s as any).artemQW ?? 0)?.['alb_bet_attempts'] >= 3) {
                                                                                                                                            scene.text('Artem never managed to beat Albina at their game, and the chance seems to have passed.');
                                                                                                                                          } else {
                                                                                                                                            if (((s as any).AlbinaQW ?? 0)?.['artem_invite'] === 1) {
                                                                                                                                              scene.text('Albina agreed to a threesome with Artem, but only if he can beat her at one of her video games first. I should let him know.');
                                                                                                                                            } else {
                                                                                                                                              scene.text('Artem asked me about a threesome with Albina. I should see what she thinks.');
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                          qspCall(s, 'cards', 'section_close');
                                                                                                                                        }
                                                                                                                                        qspCall(s, 'blackmailer', 'journal_quests');
                                                                                                                                        if (((s as any).npc_known ?? 0)?.['A144'] === 1) {
                                                                                                                                          qspCall(s, 'cards', 'section_open', 'Anushka Konstantinov', 144);
                                                                                                                                          qspCall(s, 'anushka_konstantinov_schedule', 'journal');
                                                                                                                                          qspCall(s, 'cards', 'section_close');
                                                                                                                                        }
                                                                                                                                        if (((s as any).start_type ?? 0)?.['cat'] === 'dancer'  &&  ((s as any).balletqw ?? 0)?.['blocker'] !== 1) {
                                                                                                                                          qspCall(s, 'cards', 'section_open', 'Pushkin Ballet School');
                                                                                                                                          qspCall(s, 'pushkin_ballet_evt', 'journal');
                                                                                                                                          qspCall(s, 'cards', 'section_close');
                                                                                                                                        }
                                                                                                                                        if (((s as any).trfatherQW ?? 0) !== -1  &&  (((s as any).trfatherQW ?? 0) > 0  ||  ((s as any).npc_rel ?? 0)?.['A33'] >= 40)) {
                                                                                                                                          qspCall(s, 'cards', 'section_open', 'Mikhail Kuznetsov (Biological Father)', 35);
                                                                                                                                          if ((!((s as any).trfatherQW ?? 0))) {
                                                                                                                                            scene.text('I don\'t know anything about my biological father. I should ask my sister about him.');
                                                                                                                                          } else {
                                                                                                                                            scene.text('Anya said our father is a truck driver who might pass through Pavlovsk sometimes. I should try asking truckers out on the road about him.');
                                                                                                                                            if (((s as any).trfatherQW ?? 0) === 2) {
                                                                                                                                              scene.text('A trucker on the road recognized the name Mikhail Kuznetsov and pointed me toward a storage terminal in the city\'s industrial district. I should go ask around there.');
                                                                                                                                            } else {
                                                                                                                                              scene.text('I know my father works out of the storage terminal, but he\'s only there on Saturdays, between noon and two. I should look for him then.');
                                                                                                                                              if (((s as any).trfatherQW ?? 0) === 4) {
                                                                                                                                                if (((s as any).trfatherMishaQW ?? 0) <= 1) {
                                                                                                                                                  scene.text('I found my father and he wants me to visit him again. I should look for him at the storage terminal on a Saturday between noon and two, ideally not looking like I\'ve just been up to something first.');
                                                                                                                                                } else {
                                                                                                                                                  scene.text('My father and I have been spending more time together. If I want things between us to go further, I shouldn\'t be so quick to correct people about what we look like together.');
                                                                                                                                                  if (((s as any).trfatherMishaQW ?? 0) === 3) {
                                                                                                                                                    scene.text('Things have been getting more intimate with my father. If I want to keep testing the waters, I shouldn\'t rush to cover myself up when the opportunity arises.');
                                                                                                                                                  } else {
                                                                                                                                                    scene.text('There\'s something building between me and my father that goes beyond a normal hug goodbye. If I want to keep pushing it, I shouldn\'t hold back when he\'s close.');
                                                                                                                                                    if (((s as any).trfatherMishaQW ?? 0) === 5) {
                                                                                                                                                      scene.text('Neither of us has said it out loud, but I know we\'re both thinking it. If I want to find out what happens next, I should stop dancing around it.');
                                                                                                                                                    } else {
                                                                                                                                                      scene.text('My father and I have crossed a line together, and he still wants to see me. I can keep visiting him at the terminal on Saturdays if I want to take things further, or hold back if I\'ve had enough.');
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                  qspCall(s, 'cards', 'section_close');
                                                                                                                                                }
                                                                                                                                                if (((s as any).npc_QW ?? 0)?.['A33'] >= 1  ||  ((s as any).sisterLesb ?? 0) !== 0) {
                                                                                                                                                  qspCall(s, 'cards', 'section_open', 'Anya (Sister)', 33);
                                                                                                                                                  if (((s as any).npc_QW ?? 0)?.['A33'] >= 1) {
                                                                                                                                                    if (((s as any).sisterQW ?? 0)?.['roma3block'] === 1) {
                                                                                                                                                      scene.text('I backed away from something intimate between Anya and her boyfriend Roma, and it strained things between us for a while. I should rebuild her trust before anything like that comes up again.');
                                                                                                                                                    } else {
                                                                                                                                                      scene.text('Anya, Roma, and I have started sharing some intimate nights together. I should be ready when she wants my company again.');
                                                                                                                                                      if (((s as any).npc_QW ?? 0)?.['A33'] >= 10  &&  ((s as any).sisterLesb ?? 0) >= 5) {
                                                                                                                                                        scene.text('Anya and I have never been closer, both during the day and at night. I have a feeling she\'s working up to asking me for something more the next time we talk about Roma.');
                                                                                                                                                      } else {
                                                                                                                                                        scene.text('Anya and I have never been closer. I get the feeling she\'s working up to asking me for something more, though maybe not until things between the two of us have grown even closer.');
                                                                                                                                                        if (((s as any).npc_QW ?? 0)?.['A33'] >= 3) {
                                                                                                                                                          scene.text('Anya\'s been asking me to make myself scarce some evenings so she and Roma can have some privacy. I don\'t mind giving them that when she asks.');
                                                                                                                                                        } else {
                                                                                                                                                          scene.text('I\'ve met Anya\'s boyfriend, Roma. The closer Anya and I get, the more she opens up to me about him, so I should keep finding time to talk with her at home.');
                                                                                                                                                          scene.text('Anya mentioned she has a boyfriend, Roma. She said I could meet him some evening before the dance nights, over at the community center.');
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).sisterLesb ?? 0) !== 0) {
                                                                                                                                                        if (((s as any).sisterLesb ?? 0) === -1) {
                                                                                                                                                          scene.text('Anya made it clear our nighttime moments together are over for good.');
                                                                                                                                                        } else {
                                                                                                                                                          scene.text('Anya and I have quietly agreed to help each other out at night when we really need it.');
                                                                                                                                                          if (((s as any).sisterLesb ?? 0) >= 5) {
                                                                                                                                                            scene.text('Things between Anya and me have gone further at night than either of us probably should allow. I have a feeling this can\'t go on like this much longer, one way or another.');
                                                                                                                                                          } else {
                                                                                                                                                            scene.text('Anya caught me touching her one night and told me not to do it again. I don\'t think she really meant it, though.');
                                                                                                                                                            scene.text('I\'ve started touching Anya while she sleeps. She hasn\'t woken up yet, but I don\'t know how much further I should push my luck.');
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                        qspCall(s, 'cards', 'section_close');
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
  scene.actions([
    { label: 'Put your journal down', handler: (st: GameState) => {
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
    { label: 'Return to top journal page', goto: ['journal', 'records'] },
  ]);
  scene.build();
}

export const journal_quests: LocationDef = {
  name: 'journal_quests',
  title: '<center><h2>Quests</h2></center>',
  region: 'other',
  description: ['I should go to school to pick up my diploma'],
  enter: enter,
};
