import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStairwellChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).tryndinQW = (s as any).tryndinQW ?? {})['stairwell_chat'] = ((s as any).tryndinQW['stairwell_chat'] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A77', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big77.jpg');
  if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] === 1) {
    scene.text('Tryndin tells you that he\'s a college student but he\'s going to graduate soon.');
  } else {
    if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] === 2) {
      scene.text('Tryndin tells you that he lives with his mother; his father filed for divorce a couple of years ago and now lives with a new wife and children.');
    } else {
      if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] === 3) {
        scene.text('Tryndin tells you that he is working towards a law degree and his father promised to buy him a car if he succeeds.');
      } else {
        if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] === 4) {
          scene.text('Tryndin tells you that he has been taking dance lessons since he could walk and, even today, he often practices dancing at the fitness center.');
        } else {
          if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] === 5) {
            scene.text('Tryndin tells you that he spends most of his evenings repairing computers. It costs him most of his free time, but at least he doesn\'t have to rely on his parents for money.');
          } else {
            if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] === 6) {
              scene.text('Tryndin tells you that, after college, he wants to go to the university and study law; he\'ll probably have to serve in the military first though.');
            } else {
              if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] >= 7) {
                scene.text('Tryndin and you chat about life, computers and other things, cracking jokes and enjoying each other\'s company.');
              } else {
                if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] >= 8) {
                  scene.text(`"${((s as any).pcs_nickname ?? '')}, we've been chatting here many times so I hope you don't mind me asking but there is something that has been bugging me; where do I recognize you from? I swear I have seen you somewhere else that I can't just put my finger on."`);
                  scene.text('You smile at the question and contemplate on just what you will tell him…');
                  if (((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
                    scene.actions([
                      { label: 'Tell him you are a Model', goto: ['tryndin', 'model'] },
                    ]);
                  } else {
                    if (((s as any).film ?? 0) >= 1  &&  ((s as any).pornstudio ?? 0) > 0) {
                      scene.actions([
                        { label: 'Tell him you are a Pornstar', goto: ['tryndin', 'pornstar'] },
                      ]);
                    } else {
                      if (((s as any).university ?? 0)?.['student'] === 1) {
                        scene.actions([
                          { label: 'Tell him you go to the University', goto: ['tryndin', 'uni_student'] },
                        ]);
                      } else {
                        scene.actions([
                          { label: 'Tell him you don\'t know', goto: ['tryndin', 'unknown'] },
                        ]);
                      }
                    }
                  }
                } else {
                  scene.text('You talk for a few minutes about random stuff before you say your goodbyes and go on your way.');
                  scene.actions([
                    { label: 'Say goodbye and leave', goto: ['city_apt_building', 'floor_4'] },
                  ]);
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

function enterTryndinmetro(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big77.jpg');
  scene.text(`Tryndin sees you and greets you, "Hello ${((s as any).pcs_nickname ?? '')}. How are you doing today?"`);
  if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] >= 1) {
    if (((s as any).cumloc ?? 0)[7] === 1  ||  ((s as any).cumloc ?? 0)[6] === 1) {
      scene.text('The two of you are having a great conversation before he suddenly notices semen on your clothes. As he comes to the realization, his eyes noticeably widen. "What\'s that? Cum?" he asks suspiciously.');
      scene.actions([
        { label: 'Make an excuse', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You begin making excuses, claiming that this is all a misunderstanding and that you\'re absolutely innocent. But Tryndin doesn\'t believe you and only half pays attention to your explanation.');
    scene.actions([
      { label: 'Get out of the car', goto: ['metro', 'start'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).cumloc ?? 0)[11] === 1) {
        scene.text(`He looks at your face puzzled. "${((s as any).pcs_nickname ?? '')}, your face is smeared with something." He stares at you, and after a moment, he realizes that's cum on your face. "What's that? Cum?" he asks suspiciously.`);
        scene.actions([
          { label: 'Make an excuse', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You begin making excuses, claiming that this is all a misunderstanding and that you\'re absolutely innocent. But Tryndin doesn\'t believe you and only half pays attention to your explanation.');
    scene.actions([
      { label: 'Get out of the car', goto: ['metro', 'start'] },
    ]);
  } },
        ]);
      } else {
        scene.text('You chat with Tryndin while riding the subway.');
      }
    }
  }
  scene.actions([
    { label: 'Get out of the car', goto: ['metro', 'start'] },
  ]);
  scene.build();
}

function enterModel(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).tryndinQW = (s as any).tryndinQW ?? {})['model'] = 1;
  qspCall(s, 'npc_relationship', 'modify', 'A77', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/photos/big77.jpg');
  scene.text('"Wow, I mean… you look stunning so I shouldn\'t be surprised but yeah, I must have seen you in a magazine or something…" He says as he looks you over from head to toe.');
  scene.text('You have a short conversation after his revelation and go you\'re separate ways but perhaps you will try to get to know him a bit more as well.');
  scene.actions([
    { label: 'Say goodbye', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterPornstar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).tryndinQW = (s as any).tryndinQW ?? {})['pornstar'] = 1;
  qspCall(s, 'npc_relationship', 'modify', 'A77', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/photos/big77.jpg');
  scene.text('Tryndin blushes at the discovery; not just that you are a pornstar but also that there is only one source of content that he could recognize you from. "Well… maybe a friend of mine showed me your picture… yeah in fact I\'m sure of it… anyway, nice weather we\'re having?"');
  scene.text('You then politely decide to not let the awkward moment hang in the air and have a nice conversation before parting ways, all the while thinking to yourself that he was more curious then he was willing to admit.');
  scene.actions([
    { label: 'Say goodbye', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterUniStudent(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).tryndinQW = (s as any).tryndinQW ?? {})['uni_student'] = 1;
  qspCall(s, 'npc_relationship', 'modify', 'A77', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/photos/big77.jpg');
  scene.text('You think for a moment then shrug a bit. "I go to the University on the island."');
  scene.text('He snaps his fingers like he just figured something out. "That must be it, I go there as well."');
  scene.text('The two of you talk about the classes, fellow students and professors now. After a brief chat, you say your goodbyes.');
  scene.actions([
    { label: 'Say goodbye', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterUnknown(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A77', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/photos/big77.jpg');
  scene.text('You shrug a bit. "I\'m not sure who you could be mistaking me for but honestly I just live alone in the apartment"');
  scene.text('He gets thoughtful for a moment. "Maybe I just seen you around the neighborhood or something…"');
  scene.text('Which leads to the two of you talking about the various local places to shop and eat you have both found in the area. After a brief chat, you say your goodbyes.');
  scene.actions([
    { label: 'Say goodbye', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterA77_AptInvEv_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (0);
  qspCall(s, 'stat', '');
  if (((s as any).tryndinQW ?? 0)?.['Invite_Friend'] === 1) {
    scene.img(`images/characters/city/tryndin/tim3talk${(Math.floor(Math.random() * 6) + 1)}.jpg`);
  } else {
    scene.img(`images/characters/city/tryndin/timtalk${(Math.floor(Math.random() * 8) + 1)}.jpg`);
  }
  (s as any).try_rand = (Math.floor(Math.random() * 8) + 1);
  if (((s as any).try_rand ?? 0) === 1) {
    scene.text('You and Tryndin have a nice time together; you have a nice drink and talk about the other people in the building you have seen or met. It\'s nice getting closer to each other.');
  } else {
    if (((s as any).try_rand ?? 0) === 2) {
      scene.text('After a quick drink, the two of you have a nice conversation about the state of affairs in the city. Overall it is very pleasant and Tryndin is a joy to spend time with.');
    } else {
      if (((s as any).try_rand ?? 0) === 3) {
        scene.text('You pour each other drinks and make up a small plate of food to nibble on, all the while having a natter with your friend. He is glad for the company, as are you.');
      } else {
        if (((s as any).try_rand ?? 0) === 4) {
          scene.text('You and Tryndin have a pleasant time together. You talk about events happening locally, the state of each other\'s lives and things you would like to do in the future; all while having a nice drink to encourage it.');
        } else {
          if (((s as any).try_rand ?? 0) === 5) {
            scene.text('"Have you seen anything good on TV lately?"');
            scene.text('You begin to rattle off some of the TV Shows you have seen, prompting agreeable responses from Tryndin.');
            scene.text('"I\'ve been watching this foreign show lately; the episode I had just watched has a scene where these guys were caught in a situation where they had to run through the night as Batman & Robin, then accidentally saved someone being mugged. Fucking hilarious."');
          } else {
            if (((s as any).try_rand ?? 0) === 6) {
              scene.text('Tryndin jumps straight into something that happened during the day but you have already for lost in his speech. No matter though as you smile and listen to what you can, Tryndin seemingly enjoys getting the chance to talk about it.');
            } else {
              if (((s as any).try_rand ?? 0) === 7) {
                scene.text('You are having a pleasant conversation with Tryndin but he spends a lot of the chat talking about what it must be like for a girl to live alone. You are not insulted by it and in fact, talk about it quite openly but you can\'t help but detect a slight sexual undertone to the queries.');
              } else {
                if (((s as any).try_rand ?? 0) === 8) {
                  scene.text('Tryndin is being very open about his interest in your life and is getting closer to you as the conversation goes on. It is not long before you are at a point where you are looking into each other\'s eyes, wondering what will happen next…');
                } else {
                  if (((s as any).tryndinQW ?? 0)?.['model'] === 1  &&  ((s as any).try_rand ?? 0) === 9) {
                    scene.text('"So how is life treating you in the model business?"');
                    scene.text('You then proceed to go on about life at the studio, people you have seen and shoots you have done. Tryndin maintained his interest throughout which was nice to receive as you talked.');
                  } else {
                    if (((s as any).tryndinQW ?? 0)?.['model'] === 1  &&  ((s as any).try_rand ?? 0) === 10) {
                      scene.text('Tryndin talks enthusiastically about how he spotted one of your photos in a magazine the other day. It is nice to see someone so pleased to see your work!');
                    } else {
                      if (((s as any).tryndinQW ?? 0)?.['model'] === 1  &&  ((s as any).try_rand ?? 0) === 11) {
                        scene.text('"I suppose this place is just a stop-gap for when you become an international sensation!"');
                        scene.text('Surprisingly while said slightly in jest you can see some genuine belief that you are going to succeed in the modeling business. It is nice to see, so you explain that even with success, you are likely to still be around in some capacity.');
                      } else {
                        if (((s as any).tryndinQW ?? 0)?.['model'] === 1  &&  ((s as any).try_rand ?? 0) === 12) {
                          scene.text('"Your feet must be killing you with tall the catwalk walking you\'ve been doing… if you like I could give you a massage…?"');
                          scene.text('You laugh off the offer (and ignore the idea that you\'re a catwalk model) but it\' interesting to know he is thinking about touching you.');
                        } else {
                          if (((s as any).tryndinQW ?? 0)?.['model'] === 1  &&  ((s as any).try_rand ?? 0) === 13) {
                            scene.text('"I saw a picture of you in a magazine today! You were looking amazing; I almost had to stop myself from ma.. buying it right there and then!"');
                            scene.text('You are pleased that he found you so striking but what was that he was going to say…');
                          } else {
                            if (((s as any).tryndinQW ?? 0)?.['pornstar'] === 1  &&  ((s as any).try_rand ?? 0) === 14) {
                              scene.text('"Please believe me when I say I don\'t know much about it but how is the, well, how is work treating you?"');
                              scene.text('It is obvious he is a bit sheepish about your porn work but you give him a few details without being embarrassed about it.');
                            } else {
                              if (((s as any).tryndinQW ?? 0)?.['pornstar'] === 1  &&  ((s as any).try_rand ?? 0) === 15) {
                                scene.text('Tryndin is quite comfortable around you while you talk which is quite nice compared to most people who know my work.');
                                scene.text('Still, you do notice some hesitancy around the subject.');
                              } else {
                                if (((s as any).tryndinQW ?? 0)?.['pornstar'] === 1  &&  ((s as any).try_rand ?? 0) === 16) {
                                  scene.text('"Something is exciting about knowing a Pornstar; there is an exotic allure about you, something almost unachievable."');
                                  scene.text('You continue the conversation about your proper life and your porn life which has Tryndin enraptured.');
                                } else {
                                  if (((s as any).tryndinQW ?? 0)?.['pornstar'] === 1  &&  ((s as any).try_rand ?? 0) === 17) {
                                    scene.text('"My friends would be so jealous to find out I know you, don\'t worry as I respect you\'re privacy but it would be so cool because they would want to meet you so bad!"');
                                    scene.text('You don\'t show it but you love the adoration you are getting, you can\'t help but think about giving him a gift only you can give…');
                                  } else {
                                    scene.text('You and Tryndin have a nice time together; you have a nice drink and talk about life in general. It\'s nice getting closer to each other.');
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
    { label: 'Say your goodbyes', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'stairwell_chat':
      enterStairwellChat(s, scene);
      break;
    case 'tryndinmetro':
      enterTryndinmetro(s, scene);
      break;
    case 'model':
      enterModel(s, scene);
      break;
    case 'pornstar':
      enterPornstar(s, scene);
      break;
    case 'uni_student':
      enterUniStudent(s, scene);
      break;
    case 'unknown':
      enterUnknown(s, scene);
      break;
    case 'A77-AptInvEv-1':
      enterA77_AptInvEv_1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const tryndin: LocationDef = {
  name: 'tryndin',
  title: 'Tryndin tells you that he\'s a college student but he\'s going',
  region: 'other',
  enter: enter,
};
