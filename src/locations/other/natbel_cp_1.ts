import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] > 0) {
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 1) {
      scene.text('Natasha is a good friend but perhaps she could be more…');
    } else {
      scene.text('Natasha and I shared a kiss, she is such a great friend.');
      if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 3) {
        if (((s as any).NatbelQW ?? 0)?.['chrispaid'] < 5) {
          if (((s as any).christinaQW ?? 0)?.['fight'] === 1) {
            scene.text('You have defeated Christina, you should talk to her about Natasha.');
          } else {
            scene.text('You have blackmail on Christina, maybe you can use that to help Natasha.');
            scene.text('Maybe you can help Natasha with Christina');
          }
        } else {
          scene.text('Natasha and I are lovers, maybe I could take her on a shopping trip?');
        }
      } else {
        scene.text('I have suggested a shopping trip with my lover Natasha.');
        if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 5) {
          scene.text('I took Natasha (my lover) on a shopping trip, maybe she would like to go on another one?');
        } else {
          scene.text('I have suggested another shopping trip to my lover, Natasha.');
          if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 7) {
            scene.text('I have been on another shopping trip with Natasha, maybe it\'s time to take our relationship further.');
          } else {
            scene.text('My lover Natasha and I are sexually active.');
            if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 9) {
              scene.text('My lover Natasha and I are sexually active, and actively dating.');
            }
            if (((s as any).NatbelQW ?? 0)?.['rel_type'] > 0) {
              // TODO-QSP: dynamic text: We defined our relationship and are now in ' + iif(NatbelQW['rel_type'] = 2, 'an...
              scene.text('We defined our relationship and are now in \' + iif(NatbelQW[\'rel_type\'] = 2, \'an open\', \'an exclusive\') + \' relationship.');
            }
            if (((s as any).NatbelQW ?? 0)?.['disco_invite'] === 1) {
              scene.text('She\'d probably enjoy going to the disco with you if you ask.');
            } else {
              scene.text('You have asked her to go to the disco with you so you should visit her place on Saturday evening.');
              if (((s as any).NatbelQW ?? 0)?.['disco_invite'] === 3) {
                scene.text('You\'ve been to the disco with her and she\'ll be happy to dance with you there in the future.');
              }
              if (((s as any).NatbelQW ?? 0)?.['shopping'] === 1) {
                if (((s as any).daystart ?? 0) <= ((s as any).NatbelQW ?? 0)?.['evt_day'] + 6 + ((s as any).week ?? 0)) {
                  scene.text('The two of you are going on a shopping spree on the weekend next week.');
                } else {
                  // TODO-QSP: dynamic text: The two of you are going on a shopping spree on the weekend. You need 2.000 <b>₽...
                  scene.text('The two of you are going on a shopping spree on the weekend. You need 2.000 <b>₽</b> and meet her before \' + $func(\'time\', \'get_time_string\', 15, 0) + \'.');
                }
              } else {
                scene.text('It seems like Natasha wants to ask something of you. Maybe you should talk to her.');
                if (((s as any).NatbelQW ?? 0)?.['shopping'] === 3  &&  (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 7  ||  ((s as any).NatbelQW ?? 0)?.['FriendLover'] === 8)) {
                  // TODO-QSP: dynamic text: You've promised Natasha to take her to St. Petersburg ' + iif(daystart < NatbelQ...
                  scene.text(`You've promised Natasha to take her to St. Petersburg ' + iif(daystart < NatbelQW['StP_trip_daystart'], 'in ${((s as any).NatbelQW ?? 0)?.['StP_trip_daystart']-((s as any).daystart ?? 0)} days', iif((week=6 and hour < 14), 'today', 'next saturday')) + ', picking her up at her place between '+func('time', 'get_time_string', 12, 0)+' and '+func('time', 'get_time_string', 14, 0)+'.`);
                }
                if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 8) {
                  if (((s as any).NatbelQW ?? 0)?.['mother_talk'] < 2  &&  qspFunc(s, 'homes_properties', 'is_current_home', 'parents_home')) {
                    if (((s as any).NatbelQW ?? 0)?.['mother_talk'] === 0) {
                      scene.text('You should talk to your mother about Natasha.');
                    } else {
                      if (((s as any).daystart ?? 0) <= ((s as any).NatbelQW ?? 0)?.['mother_talkday']) {
                        scene.text('You should talk to your mom on a later day again.');
                      } else {
                        scene.text('You should reconcile with your mother.');
                      }
                      if (((s as any).NatbelQW ?? 0)?.['mother_talk'] === 2) {
                        scene.text('You\'ve reconciled with your mother and she accepts your relationship with Natasha.');
                      }
                      if (((s as any).NatbelQW ?? 0)?.['Isabella'] === 0) {
                        // TODO-QSP: dynamic text: Maybe you should be at home between '+func('time', 'get_time_string', 19, 0)+' a...
                        scene.text('Maybe you should be at home between \'+func(\'time\', \'get_time_string\', 19, 0)+\' and \'+func(\'time\', \'get_time_string\', 23, 0)+\'.');
                      } else {
                        scene.text('You\'ve helped Natasha find her mother, maybe you should visit her.');
                        if (((s as any).NatbelQW ?? 0)?.['Isabella'] === 2) {
                          scene.text('Natasha has shared her concerns about her mother with you.');
                        }
                      }
                    }
                    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 3) {
                      if (((s as any).NatbelQW ?? 0)?.['bday_invite'] === 0  &&  (((s as any).day ?? 0) >= 22  &&  ((s as any).month ?? 0) === 6)  ||  (((s as any).day ?? 0) < 6  &&  ((s as any).month ?? 0) === 7)) {
                        scene.text('Natasha has something to tell you');
                      } else {
                        if (((s as any).daystart ?? 0) < ((s as any).NatbelQW ?? 0)?.['bday_day'] - 1) {
                          // TODO-QSP: dynamic text: You have been invited to Natasha's birthday party at cafe Del Parco in <<NatbelQ...
                          scene.text(`You have been invited to Natasha's birthday party at cafe Del Parco in ${((s as any).NatbelQW ?? 0)?.['bday_day'] - ((s as any).daystart ?? 0)} days.`);
                        } else {
                          scene.text('You have been invited to Natasha\'s birthday party at cafe Del Parco tomorrow.');
                          if (((s as any).daystart ?? 0) === ((s as any).NatbelQW ?? 0)?.['bday_day']) {
                            scene.text('Natasha\'s birthday party at Del Parco is today!');
                            // TODO-QSP: dynamic text: You should meet them there between '+func('time', 'get_time_string', 18, 30)+' a...
                            scene.text('You should meet them there between \'+func(\'time\', \'get_time_string\', 18, 30)+\' and \'+func(\'time\', \'get_time_string\', 20, 0)+\'.');
                          } else {
                            scene.text('You have missed Natasha\'s birthday party, maybe you should talk to Natasha.');
                          }
                          if (((s as any).NatbelQW ?? 0)?.['bday_invite'] === 2) {
                            scene.text('You went to Natasha\'s birthday party.');
                          } else {
                            scene.text('You have missed Natasha\'s birthday party, but Natasha is understanding.');
                          }
                        }
                        if (((s as any).NatbelQW ?? 0)?.['end_of_gschool_chat'] === 0) {
                          if (((s as any).year ?? 0) === 2017  &&  (((s as any).month ?? 0) === 4  &&  ((s as any).day ?? 0) >= 26  ||  ((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) < 26)) {
                            scene.text('Natasha wants to talk to you about something.');
                          }
                        } else {
                          scene.text('Natasha has told you that she\'s going to uni and you\'ve told her you\'re going too.');
                        }
                        if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 0  &&  ((s as any).NatbelQW ?? 0)?.['blocked'] === 1) {
                          if (((s as any).NatbelQW ?? 0)?.['block_reason'] === 'slut') {
                            scene.text('Natasha and I broke up because of my recent behaviour.');
                            if (((s as any).daystart ?? 0) <= ((s as any).NatbelQW ?? 0)?.['block_day']) {
                              scene.text('You\'d best give Natasha some time to think on her decision. Maybe after a couple of weeks she might reconsider and get back together with you.');
                            } else {
                              scene.text('It\'s been a few weeks now, maybe you should try to talk to Natasha again.');
                            }
                          } else {
                            scene.text('You and Natasha broke up because she\'s going to university and if you\'re not there she doesn\'t believe she can make it work.');
                            scene.text('Maybe you can try to convince her after she has started her courses there.');
                          }
                          if (((s as any).daystart ?? 0) >= 579) {
                            // TODO-QSP: dynamic text: She spends time at The Coffee Hole on Vasilyevsky Island after her classes (betw...
                            scene.text('She spends time at The Coffee Hole on Vasilyevsky Island after her classes (between \' + $func(\'time\', \'get_time_string\', 15, 0) + \' and \' + $func(\'time\', \'get_time_string\', 18, 0) + \', weekdays).');
                          }
                        } else {
                          if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
                            if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 0) {
                              scene.text('Natasha seems really smart. I should try to befriend her to help me with my grades. During school breaks seems like a good time to chat her up. It might take a lot of effort for her to trust me though.');
                            } else {
                              scene.text('Natasha agreed to help me with my homework. I just need to visit her in her apartment after school. I should chat with her a few times before bringing up anything involving money though.');
                              if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 2) {
                                scene.text('Natasha has borrowed money from me. In return, she has to do my homework whenever I tell her. Once her 30 days are up, I should ask for my money back and see where it goes because I don\'t actually expect her to be able to pay it back.');
                              } else {
                                scene.text('Since Natasha cannot seem to pay back her debt to me, I should start forcing her to do things for me. Making her do my homework seems like a good place to start. I will let her do that for me a few times, and see what else I can get her to do.');
                                if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 4) {
                                  scene.text('I need to have Natasha carry my books to school if I want to keep corrupting her. I can do that before school, in the hallway of my parents apartment.');
                                } else {
                                  scene.text('Natasha is pretty much my slave now. Let\'s see how well she can handle worshipping my feet the next time I\'m in her bedroom.');
                                  if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 6) {
                                    scene.text('Natasha has a kinky side, she just doesn\'t realize it yet. Next time I\'m in her bedroom, I should see how she handles bodily fluids in her mouth.');
                                  } else {
                                    scene.text('I think Natasha could learn to please me. I should have her practice with her tongue when I am in her room.');
                                    if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 8) {
                                      scene.text('Kolka seems pretty horny these days. I could invite him over to Natasha\'s apartment in the afternoon. I should talk to him about it, after teasing him in the mornings when I have her carry my books.');
                                    } else {
                                      scene.text('I bet Olu would love to give Natasha a ride. I should see what he thinks of other girls joining us. If I haven\'t had sex with him yet, I will need to do that first.');
                                      if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 10) {
                                        scene.text('I should check Natasha\'s fridge. I\'m sure there\'s something I can use to keep corrupting her. It would be a good time to do this when she is in the laundry room.');
                                      } else {
                                        scene.text('This is the end of Natasha\'s quest line, for now.');
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
                                      // TODO-QSP: dynamic text: You promised to meet up with Natasha next Saturday at the coffee hole between <<...
                                      scene.text(`You promised to meet up with Natasha next Saturday at the coffee hole between ${qspFunc(s, 'time', 'get_time_string', 19, 0)} and ${qspFunc(s, 'time', 'get_time_string', 21, 0)}.`);
                                      if (((s as any).NatbelQW ?? 0)?.['uni_nightclub_date'] >= 2) {
                                        // TODO-QSP: dynamic text: Natasha spends time at The Coffee Hole after classes (between <<$func('time', 'g...
                                        scene.text(`Natasha spends time at The Coffee Hole after classes (between ${qspFunc(s, 'time', 'get_time_string', 15, 0)} and ${qspFunc(s, 'time', 'get_time_string', 18, 0)}, weekdays). Why not stop by and ask her out on a date?`);
                                      }
                                    }
                                    if (((s as any).natbelQW ?? 0)?.['designs_unlock_day'] > 0  &&  ((s as any).natbelQW ?? 0)?.['designs_complete'] === 0) {
                                      if (((s as any).natbelQW ?? 0)?.['designs_chat_done'] === 0) {
                                        if (((s as any).daystart ?? 0) >= ((s as any).natbelQW ?? 0)?.['designs_unlock_day'] + 30) {
                                          scene.text('Natasha seems to have something on her mind. It might be worth catching up with her at The Coffee Hole.');
                                        }
                                      } else {
                                        scene.text('You promised Natasha you\'d look into getting a professional opinion on her fashion designs.');
                                        if (((s as any).natbelQW ?? 0)?.['tailor_visit_day'] === 0) {
                                          scene.text('After a promising meeting you and Natasha agreed to get some of her designs made up.');
                                        } else {
                                          if (((s as any).daystart ?? 0) < ((s as any).natbelQW ?? 0)?.['tailor_visit_day'] + 30) {
                                            scene.text('You\'ve left Natasha\'s designs with a tailor in the residential area. He asked you to come back in about a month.');
                                          } else {
                                            // TODO-QSP: dynamic text: The clothes should be ready to collect from the tailor. You'll need <<$func('mon...
                                            scene.text(`The clothes should be ready to collect from the tailor. You'll need ${qspFunc(s, 'money', 'string_price', 10000)} to pay for them.`);
                                          }
                                          scene.text('Natasha\'s designs have been photographed. Julia had some interesting ideas about how to show them off.');
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
  scene.build();
}

export const natbel_cp_1: LocationDef = {
  name: 'natbel_cp_1',
  title: 'Laundry room',
  region: 'other',
  description: ['Natasha is a good friend but perhaps she could be more…'],
  enter: enter,
};
