import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGoForWalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
    scene.text('<center><h2>Pavlovsk Park</h2></center>');
    if (((s as any).month ?? 0) === 3  ||  ((s as any).month ?? 0) === 4  ||  ((s as any).month ?? 0) === 5) {
      scene.img('images/locations/pavlovsk/lake/skver.spring.jpg');
    } else {
      if (((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7  ||  ((s as any).month ?? 0) === 8) {
        scene.img('images/locations/pavlovsk/park/skver.jpg');
      } else {
        if (((s as any).month ?? 0) === 9  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 11) {
          scene.img('images/locations/pavlovsk/lake/skver.autumn.jpg');
        } else {
          scene.img('images/locations/pavlovsk/lake/skver.winter.jpg');
        }
      }
    }
    scene.text('You go for a walk along the main square of Pavlovsk Park. During the summer, it\'s one of the primary places in town where locals and tourists enjoy spending their spare time. As long as the weather is nice, it\'s always busy; people are resting, walking, playing and dating to their heart\'s desires, enjoying the pleasant surroundings.');
  } else {
    qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.text('<center><h2>Pavlovsk Park</h2></center>');
    if (((s as any).month ?? 0) === 3  ||  ((s as any).month ?? 0) === 4  ||  ((s as any).month ?? 0) === 5) {
      scene.img('images/locations/pavlovsk/lake/skver.spring.night.jpg');
    } else {
      if (((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7  ||  ((s as any).month ?? 0) === 8) {
        scene.img('images/locations/pavlovsk/lake/skver.summer.night.jpg');
      } else {
        if (((s as any).month ?? 0) === 9  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 11) {
          scene.img('images/locations/pavlovsk/lake/skver.autumn.night.jpg');
        } else {
          scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
        }
      }
    }
    scene.text('You go for a walk along the main square of Pavlovsk Park. Most people leave the park as it gets dark, and only a few still hang around after dark. They mainly congregate around the movie theater, cafe or some of the benches near the park\'s entrance, which are still well lit. Few venture deeper into the park at night.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue your walk', goto: ['pav_parkev', 'walk1'] },
  ]);
  scene.build();
}

function enterWalk1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 2  ||  ((s as any).month ?? 0) === 12) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      (s as any).temprand = Math.floor(Math.random() * 12) + 1;
      if (((s as any).temprand ?? 0) === 1) {
        scene.img('images/locations/pavlovsk/park/event/walk/day/winter/bench_couple1.jpg');
        scene.text('You see a couple sitting on one of the benches, flirting and brushing against each other as they talk. It seems likely they might be on an early date. You can\'t help but smile as you walk past them.');
      } else {
        if (((s as any).temprand ?? 0) === 2) {
          scene.img('images/locations/pavlovsk/park/event/walk/day/winter/bench_girl_back1.jpg');
          scene.text('As you walk past one of the benches, you see a girl sitting on the backrest with her feet on the bench seat. She looks a bit younger than you, maybe in your brother\'s grade. When a couple approaches her, she spreads her feet wide, taking up the whole bench. She seems to be saving it for someone, or is simply a bitch and not letting others use it.');
        } else {
          if (((s as any).temprand ?? 0) === 3) {
            scene.img('images/locations/pavlovsk/park/event/walk/day/winter/bench_guitar1.jpg');
            if (((s as any).pcs_hotcat ?? 0) >= 7) {
              scene.text('You see some boys sitting on a bench; one of them is playing a guitar as the other sings. A few people stop to listen, but they don\'t have their case out, so it doesn\'t seem like they\'re doing it for money. They switch to a popular song about a beautiful girl as you walk past, and you can\'t help but smile.');
            } else {
              scene.text('You see some boys sitting on a bench; one of them is playing a guitar as the other sings. A few people stop to listen, but they don\'t have their case out, so it doesn\'t seem like they\'re doing it for money. They don\'t pay any attention to you as you walk past.');
            }
          } else {
            if (((s as any).temprand ?? 0) === 4) {
              scene.img('images/locations/pavlovsk/park/event/walk/day/winter/selfie_group1.jpg');
              scene.text('You pass by a guy and two girls hanging out and taking a bunch of selfies together. You can\'t tell if they\'re locals or not, nor can you tell if it\'s a couple with their friend or just three friends hanging out. Not that it really matters, but they seem happy.');
            } else {
              if (((s as any).temprand ?? 0) === 5) {
                scene.img('images/locations/pavlovsk/park/event/walk/day/winter/selfie_2girls\' + rand(1, 3) + \'.jpg');
                scene.text('You pass by two girls hanging out and taking a bunch of selfies together. You can\'t tell if they\'re locals, but they seem to be close friends having fun. Maybe you should ask one of your girlfriends to come and hang out with you here? Goofing off and taking selfies in the park sounds like fun.');
              } else {
                if (((s as any).temprand ?? 0) === 6) {
                  scene.img('images/locations/pavlovsk/park/event/walk/day/winter/selfie_couple1.jpg');
                  scene.text('You pass by a couple taking a bunch of selfies together. You can\'t really tell if they\'re locals or not, but they seem very happy together and enjoy each other\'s company. The occasional kissing selfie leaves no doubt that they\'re romantically involved.');
                } else {
                  if (((s as any).temprand ?? 0) === 7) {
                    qspCall(s, 'pav_park_meet_event', 'kol');
                  } else {
                    scene.img('images/locations/pavlovsk/park/event/walk/walk_winter_day.jpg');
                    scene.text('You take a relaxing and refreshing walk through the park, trying to figure out the meaning of life.');
                  }
                }
              }
            }
          }
        }
      }
    } else {
      (s as any).temprand = Math.floor(Math.random() * 6) + 1;
      if (((s as any).temprand ?? 0) === 1) {
        qspCall(s, 'pav_park_meet_event', 'kol');
      } else {
        scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
        scene.text('You take a relaxing and refreshing walk through the park, trying to figure out the meaning of life.');
      }
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      (s as any).temprand = Math.floor(Math.random() * 35) + 1;
      if (((s as any).temprand ?? 0) === 1) {
        qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
        scene.img('images/locations/pavlovsk/park/event/walk/day/accidental_titflash1.jpg');
        scene.text('You see a group of people not much older than you come to a stop from jogging. They seem to be giving each other a hard time about who did the best. Then, in an attempt to show off, one of the girls does a handstand, which causes her top to slip down and expose her breasts.');
        scene.text('The guys and girls hoot and holler and a few nearby adults look over at the sound; most shake their heads in disgust, though a few of the men linger on the younger lady and her breasts for longer than is needed.');
        qspCall(s, 'arousal', 'erotic_nudity', 1);
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).temprand ?? 0) === 2) {
          scene.img('images/locations/pavlovsk/park/event/walk/day/bench_2girls_drinking\' + rand(1, 2) + \'.jpg');
          scene.text('Two girls are drinking beers on one of the benches on the primary walkway near the front of the park. You can\'t hear what they\'re talking about, but they\'re laughing, smiling and having a good time hanging out together.');
        } else {
          if (((s as any).temprand ?? 0) === 3) {
            scene.img('images/pc/activities/flashing/dress/outside/pussy/hairy2.jpg');
            scene.text('Sitting on one of the benches on the primary walkway near the front of the park is a woman that looks several years older than your sister. A handsome man walks towards her and she puts her feet on the bench, spreading her legs wide, showing off her pussy to him and anyone else that happens to be looking at the time.');
            scene.text('He laughs and walks over and kisses her as she closes her legs and gets up. The two of them then walk away together.');
            qspCall(s, 'arousal', 'erotic_nudity', 1);
            qspCall(s, 'arousal', 'end');
          } else {
            if (((s as any).temprand ?? 0) === 4) {
              scene.img('images/locations/pavlovsk/park/event/walk/day/bench_girl_book.jpg');
              scene.text('Sitting on one of the benches on the primary walkway near the front of the park is a woman that looks several years older than your sister. She\'s relatively intent on reading a book in her lap, occasionally pausing to look up, as if contemplating what she\'s reading.');
              scene.text('You have no clue what the book is, but it seems to have her fully engrossed.');
            } else {
              if (((s as any).temprand ?? 0) === 5) {
                scene.img('images/locations/pavlovsk/park/event/walk/day/bench_girl_flash1.jpg');
                scene.text('Sitting on one of the benches on the primary walkway near the front of the park is a girl about your sister\'s age, who seems intent on looking in your direction. She starts to smile as you get closer.');
                scene.actions([
                  { label: 'Keep walking', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/bench_girl_flash2.jpg');
    scene.text('As you get even closer, she pulls down her top and flashes her breasts in your direction. At first, you think she\'s flashing you, but a moment later, a guy jogs by you. When he gets to her, she puts her breasts away and they kiss as she gets up and the two of them walk away together.');
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish your walk', goto: ['pav_park', 'start'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).temprand ?? 0) === 6) {
                  scene.img('images/locations/pavlovsk/park/event/walk/day/bench_girl\' + rand(1, 2) + \'.jpg');
                  scene.text('Sitting on one of the benches on the primary walkway near the front of the park is a girl about your sister\'s age. She\'s watching the people walk by, but doesn\'t seem to be paying attention to anyone. Perhaps she\'s waiting on someone…');
                } else {
                  if (((s as any).temprand ?? 0) === 7) {
                    scene.img('images/locations/pavlovsk/park/event/walk/day/bench_upskirt.jpg');
                    scene.text('Sitting on one of the benches on the primary walkway near the front of the park is a girl about your sister\'s age, holding up a compact to her face and touching up her makeup. She has her legs spread a little, and as you get closer, you can see up her skirt to her bare pussy.');
                    scene.text('You wonder if she\'s aware of how she\'s sitting or not. As you\'re about to walk by, some boys sit next to her and start chatting her up.');
                    qspCall(s, 'arousal', 'erotic_nudity', 1);
                    qspCall(s, 'arousal', 'end');
                  } else {
                    if (((s as any).temprand ?? 0) === 8) {
                      qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
                      scene.img('images/locations/pavlovsk/park/event/walk/day/cat.jpg');
                      scene.text('As you walk along, you see a cat running through the park, but most people seem to ignore it. It looks very adorable as it runs over near you.');
                      scene.actions([
                        { label: 'Pet the cat', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/catpet.jpg');
    scene.text('You stop and hold your hand out to the cat. It takes a minute before it comes over, but once it does, you start petting it, causing it to purr. You fuss over it for several minutes before it runs away again.');
    scene.text('You smile after the cat, then get up and finish your walk.');
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish your walk', goto: ['pav_park', 'start'] },
    ]);
  } },
                      ]);
                    } else {
                      if (((s as any).temprand ?? 0) === 9) {
                        scene.img('images/locations/pavlovsk/park/event/walk/day/chess.jpg');
                        scene.text('As you take your walk, you pass by an old man and a young boy sitting on a bench with a chessboard between them. As you walk past them, the boy makes a move while the old man studies the board.');
                      } else {
                        if (((s as any).temprand ?? 0) === 10) {
                          scene.img('images/locations/pavlovsk/park/event/walk/day/couple\' + rand(1, 2) + \'.jpg');
                          scene.text('You pass by a man and a woman out and about as well. They seem to be romantically involved by how they look at each other and their body language. You can\'t help but smile a little.');
                        } else {
                          if (((s as any).temprand ?? 0) === 11) {
                            scene.img('images/locations/pavlovsk/park/event/walk/day/flash_butt_2girl.jpg');
                            scene.text('You see two girls along one of the paved walkways just off to the side near one of the trees.');
                            scene.text('You notice a group of boys checking them out when one of the girls pushes her friend forwards and pulls up her dress, showing off her thong and bare ass cheeks to the boys, who promptly start whistling and hollering at their antics.');
                            scene.text('As the boys start walking towards them, the girls laugh and run away.');
                            qspCall(s, 'arousal', 'erotic_nudity', 1);
                            qspCall(s, 'arousal', 'end');
                          } else {
                            if (((s as any).temprand ?? 0) === 12) {
                              scene.img('images/locations/pavlovsk/park/event/walk/day/flash_pussy.jpg');
                              scene.text('As you walk along, you notice a couple just ahead walking in the other direction. They\'re about your parents\' age and seem to be talking; she looks a little unhappy, but then bites her lip and looks around. A second later, she pulls up the front of her skirt, showing off her hairy pussy. She isn\'t looking around, only at him.');
                              scene.text('The man grins widely and gives her a nod of approval, apparently liking it, before he wraps his arm around her and she drops her skirt back in place. They walk away smiling.');
                              qspCall(s, 'arousal', 'erotic_nudity', 1);
                              qspCall(s, 'arousal', 'end');
                            } else {
                              if (((s as any).temprand ?? 0) === 13) {
                                scene.img('images/locations/pavlovsk/park/event/walk/day/girl_icecream1.jpg');
                                scene.text('You see a girl sitting on a bench eating some ice cream. You briefly wonder if you should get one for yourself.');
                              } else {
                                if (((s as any).temprand ?? 0) === 14) {
                                  qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
                                  scene.img('images/locations/pavlovsk/park/event/walk/day/girls_icecream1.jpg');
                                  scene.text('You see a group of kids about your brother\'s age hanging out together. The boys seem to be flirting with the girls and in response, the girls all start licking an ice cream one of them had, which causes the boys to stare nearly open-mouthed, seemingly loving every moment of the girls teasing them.');
                                } else {
                                  if (((s as any).temprand ?? 0) === 15) {
                                    scene.img('images/locations/pavlovsk/park/event/walk/day/guy_asking.jpg');
                                    scene.text('A man stops you and starts talking to you in terrible, broken Russian so bad you can\'t really understand him. A moment later, an older woman stops by and joins in. It soon becomes clear he\'s a tourist looking for the palace. The woman offers to show him, and the two walk away together.');
                                  } else {
                                    if (((s as any).temprand ?? 0) === 16) {
                                      scene.img('images/locations/pavlovsk/park/event/walk/day/guys_three.jpg');
                                      if (((s as any).pcs_hotcat ?? 0) >= 6) {
                                        qspCall(s, 'mood', 'raise', 'tiny');
                                        scene.text('As you go for your walk, you see three guys around your sister\'s age hanging out by one of the benches talking. One of them glances at you and lets out a long whistle before his two friends look at you and join in. "Hey, hot stuff. Come over here and keep us company."');
                                        scene.text('They keep making comments like this until you\'re out of earshot of them.');
                                      } else {
                                        if (((s as any).pcs_hotcat ?? 0) <= 3) {
                                          qspCall(s, 'mood', 'lower', 'small');
                                          scene.text('As you go for your walk, you see three guys around your sister\'s age hanging out by one of the benches talking. One of them glances your way and gives you a disgusted look before turning back to his friends.');
                                          scene.text('"Jesus, don\'t look now, but the freak show is in town."');
                                          scene.text('The other two look and make similar faces. "Fuck, the least she could do is wear a bag over her head of something!"');
                                          scene.text('The three of them continue making comments about your looks and laughing as you sigh and keep walking.');
                                        } else {
                                          if (((s as any).pcs_bmi ?? 0) > 35) {
                                            qspCall(s, 'mood', 'lower', 'small');
                                            scene.text('As you go for your walk, you see three guys around your sister\'s age hanging out by one of the benches talking. One of them glances your way before turning back to his friends and suddenly stumbling, like he\'s having trouble standing. "Guys, do you feel that? It feels like an earthquake!"');
                                            scene.text('His friends look at him momentarily before staring at you and smiling before joining in. "Oh no, not an earthquake! Oh wait, it\'s just a fat ass walking by."');
                                            scene.text('All three howl with laughter as you sigh and keep walking.');
                                          } else {
                                            scene.text('As you walk, you see three guys around your sister\'s age hanging out by one of the benches talking. One of them glances your way before turning back to his friends. The others just ignore you as you walk past.');
                                          }
                                        }
                                      }
                                    } else {
                                      if (((s as any).temprand ?? 0) === 17) {
                                        scene.img('images/locations/pavlovsk/park/event/walk/day/young_mother.jpg');
                                        scene.text('As you walk on one of the busy pathways, you see a woman with a stroller. You notice she\'s only a few years older than your sister as several other women come up to look at the baby. They all fuss over them until you\'re well past them.');
                                      } else {
                                        if (((s as any).temprand ?? 0) === 18) {
                                          scene.img('images/locations/pavlovsk/park/event/walk/day/pantsdown_2girl.jpg');
                                          scene.text('Ahead, you see a pair of girls who seem to know the group of guys checking them out. After teasing the guys, they both pull down their pants. Their shirts are long enough to keep them covered, but encourage the men to head towards them before the girls pull up their pants, laugh and run away.');
                                          qspCall(s, 'arousal', 'erotic_nudity', 1);
                                          qspCall(s, 'arousal', 'end');
                                        } else {
                                          if (((s as any).temprand ?? 0) === 19) {
                                            scene.img('images/locations/pavlovsk/park/event/walk/day/selfie_pussy.jpg');
                                            scene.text('You spot an older woman, close to your mother\'s age you would guess, busy taking a photo between her legs. As you get closer, you can tell she\'s not wearing panties. She seems to be utterly oblivious to other people or that some of them are watching.');
                                            qspCall(s, 'arousal', 'erotic_nudity', 1);
                                            qspCall(s, 'arousal', 'end');
                                          } else {
                                            if (((s as any).temprand ?? 0) === 20) {
                                              scene.img('images/locations/pavlovsk/park/event/walk/day/selfie_girl\' + rand(1, 4) + \'.jpg');
                                              scene.text('You see a young woman busy taking a lot of selfies in different poses who seems to be utterly oblivious to other people or that some of them are watching.');
                                            } else {
                                              if (((s as any).temprand ?? 0) === 21) {
                                                scene.img('images/locations/pavlovsk/park/event/walk/day/smoking_girl.jpg');
                                                scene.text('A girl about your age is leaning against one of the lamp posts smoking a cigarette, but you don\'t think you\'ve ever seen her before. As you walk by, she looks at you intently, but doesn\'t say anything.');
                                              } else {
                                                if (((s as any).temprand ?? 0) === 22) {
                                                  scene.img('images/locations/pavlovsk/park/event/walk/day/sporty_girls.jpg');
                                                  scene.text('As you walk along, some girls jog past you. They stop ahead of you by one of the railings, placing one foot on the top rail and using it to stretch their legs. You almost catch up to them before they stop and start jogging again.');
                                                } else {
                                                  if (((s as any).temprand ?? 0) === 23) {
                                                    scene.img('images/locations/pavlovsk/park/event/walk/day/wedgie_2girl.jpg');
                                                    scene.text('Ahead is a group of girls, talking and laughing as they hang out. As you watch, one of them tries to grab her friend\'s panties from behind, which quickly turns into them wrestling.');
                                                    scene.text('The girl on the defensive manages to get the upper hand and gets her friend on the ground before grabbing her panties and yanking them up. The girl on the ground squeals at the massive wedgie she\'s getting while the other girls, who have just been watching or cheering on one of the others, start laughing. As you pass by, the girl on the ground finally gets up and tries to pick her underwear out of her ass.');
                                                  } else {
                                                    if (((s as any).temprand ?? 0) === 24  &&  ((s as any).hotelcouple ?? 0) === 1) {
                                                      (s as any).hotelcouple = 2;
                                                      qspCall(s, 'stat', '');
                                                      scene.img('images/locations/pavlovsk/hotel/couple_park_meet.jpg');
                                                      scene.text('After walking around the park for 10 minutes, you decide to take a break when you\'re suddenly approached by a couple who sit next to you.');
                                                      scene.text('You think you recognise the man, but can\'t quite put your finger on it.');
                                                      scene.text('"Hey girl," the man starts. "I don\'t know if you remember, but we met once in the hotel."');
                                                      scene.text('Now you remember. You watched his children so he and his wife could have some \'alone time\'.');
                                                      scene.text('"You really helped us out that time. Usually, we can drop the children off with my parents, but they were out that day. My name is Motya, and this is my wife, Uliana. We stay in the Pavlovsk hotel every Thursday. If you want to visit us on a Thursday evening, feel free to drop by room 207 so we can give you a proper thank you for your help."');
                                                      scene.text('They get up and leave as you wonder what kind of \'thanks\' they have in mind.');
                                                    } else {
                                                      if (((s as any).temprand ?? 0) === 25) {
                                                        scene.img('images/locations/pavlovsk/park/event/walk/day/oldman.jpg');
                                                        if (((s as any).arch_vars ?? 0)?.['main_active'] !== 'bimbo') {
                                                        } else {
                                                          scene.text('When he reaches you, he extends his hand. "Hi there, young lady! If you have a minute, come with me! I have something for you!"');
                                                          scene.actions([
                                                            { label: 'Go with him', handler: (st: GameState) => {
    // TODO-QSP: gs 'npcgeneratec', 0, 'Old Man from the park', rand(50, 70)
    // TODO-QSP: gs 'boyStat', $npclastgenerated
  }, goto: ['parkBimbo', 'pos1'] },
                                                          ]);
                                                        }
                                                      } else {
                                                        if (((s as any).temprand ?? 0) === 26) {
                                                          qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
                                                          scene.img('images/locations/pavlovsk/park/event/walk/day/bench_flash_full.jpg');
                                                          scene.text('A group of boys and a single girl are hanging out near one of the benches. The boys are all talking to her and she seems reluctant, but you can tell by her posture that she gives in.');
                                                          scene.text('She pulls up her shirt, showing off her breasts, and spreads her legs wide before pulling up her skirt a little to show off her pussy. The boys all hoot and holler, drawing attention to her, causing her to blush and quickly pull her clothes back in place.');
                                                          scene.text('The boys keep talking and whatever they say makes her relax and smile again.');
                                                          qspCall(s, 'arousal', 'erotic_nudity', 1);
                                                          qspCall(s, 'arousal', 'end');
                                                        } else {
                                                          if (((s as any).temprand ?? 0) === 27) {
                                                            qspCall(s, 'pav_park_meet_event', 'kol');
                                                          } else {
                                                            scene.img('images/locations/pavlovsk/park/event/walk/walk_day.jpg');
                                                            scene.text('You take a relaxing and refreshing walk through the park, trying to figure out the meaning of life.');
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
    } else {
      (s as any).temprand = Math.floor(Math.random() * 6) + 1;
      if (((s as any).temprand ?? 0) === 1) {
        qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
        scene.img('images/locations/pavlovsk/park/event/walk/night/2girls_humping1.jpg');
        scene.text('As you walk around the touristy area of the park near the theatre, you see a group of young people hanging out. One of the girls seems a bit drunk and is hanging onto her friends.');
        scene.text('As you watch them walk past, she says something, and one of her female friends immediately grabs her from behind and starts dry-humping her hard and fast, which gets everyone laughing. At the same time, the drunk girl laughs, but looks turned on by it.');
        scene.text('She smiles and slightly shakes her head as you walk past them.');
        qspCall(s, 'arousal', 'erotic', 1);
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).temprand ?? 0) === 2) {
          qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
          scene.img('images/locations/pavlovsk/park/event/walk/night/bench_girl_pussyflash1.jpg');
          scene.text('As you walk around the touristy area of the park near the cafe, you see a girl sitting on a bench in a skirt with her legs spread wide, showing off her bare pussy. She\'s looking for a boy that you assume is her boyfriend.');
          scene.text('He laughs and starts taking pictures of her, neither seeming to care that other people can see her pussy as well. Finally, after several shots, he walks over and kisses her before she gets up and they walk away together arm in arm.');
          qspCall(s, 'arousal', 'erotic_nudity', 1);
          qspCall(s, 'stat', '');
        } else {
          if (((s as any).temprand ?? 0) === 3) {
            qspCall(s, 'pav_park_meet_event', 'kol');
          } else {
            scene.img('images/locations/pavlovsk/park/event/walk/walk_night.jpg');
            scene.text('You take a relaxing and refreshing walk through the park, trying to figure out the meaning of life.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your walk', goto: ['pav_park', 'start'] },
  ]);
  scene.build();
}

function enterGoForWalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
    scene.text('<center><h2>Pavlovsk Park</h2></center>');
    if (((s as any).month ?? 0)===3  ||  ((s as any).month ?? 0)===4  ||  ((s as any).month ?? 0)===5) {
      scene.img('images/locations/pavlovsk/lake/skver.spring.jpg');
    } else {
      if (((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7  ||  ((s as any).month ?? 0) === 8) {
        scene.img('images/locations/pavlovsk/park/skver.jpg');
      } else {
        if (((s as any).month ?? 0) === 9  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 11) {
          scene.img('images/locations/pavlovsk/lake/skver.autumn.jpg');
        } else {
          scene.img('images/locations/pavlovsk/lake/skver.winter.jpg');
        }
      }
    }
    scene.text('You walk along one of the trails deep in the park, and there are few people around. You know the more secluded area of the park has a reputation for being dangerous; it\'s popular with gopniks, prostitutes and criminals wanting to hide away from prying eyes.');
  } else {
    qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
    scene.text('<center><h2>Pavlovsk Park</h2></center>');
    if (((s as any).month ?? 0) === 3  ||  ((s as any).month ?? 0) === 4  ||  ((s as any).month ?? 0) === 5) {
      scene.img('images/locations/pavlovsk/lake/skver.spring.night.jpg');
    } else {
      if (((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7  ||  ((s as any).month ?? 0) === 8) {
        scene.img('images/locations/pavlovsk/lake/skver.summer.night.jpg');
      } else {
        if (((s as any).month ?? 0) === 9  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 11) {
          scene.img('images/locations/pavlovsk/lake/skver.autumn.night.jpg');
        } else {
          scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
        }
      }
    }
    scene.text('You walk along one of the trails deep in the park, and there are few people around. You know the more secluded area of the park has a reputation for being dangerous; it\'s popular with gopniks, prostitutes and criminals wanting to hide away from prying eyes.');
    scene.text('The darkness makes everything creepier; there are few light sources in the area and you occasionally hear the sounds of animals or even what seems like people\'s voices in the gloom.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pav_parkev', 'walk2'] },
  ]);
  scene.build();
}

function enterWalk2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 2  ||  ((s as any).month ?? 0) === 12) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      (s as any).temprand = Math.floor(Math.random() * 13) + 1;
      if (((s as any).temprand ?? 0) === 1) {
        scene.img('images/locations/pavlovsk/park/event/walk/day/winter/deep/bench_girl_flash1.jpg');
        scene.text('You see a girl in a skirt sitting on a bench. With how cold it is, you imagine she has to be freezing, but as you walk past, she lifts one of her legs, giving you a nice view of her bare pussy. You can\'t help but smile and understand why she\'s wearing a skirt. Some people get off on teasing or flashing strangers, and she seems to be one of them.');
        qspCall(s, 'arousal', 'erotic_nudity', 1);
        qspCall(s, 'stat', '');
      } else {
        if (((s as any).temprand ?? 0) === 2) {
          scene.img('images/locations/pavlovsk/park/event/walk/day/winter/deep/bench_girl1.jpg');
          scene.text('You pass by a girl sitting on a bench with the hood of her oversized coat over her head, huddled on a bench. You have no clue how long she might have been sitting there, but despite the warm clothes, she looks like she\'s cold. Despite this, she seems intent to keep waiting for someone or something.');
        } else {
          if (((s as any).temprand ?? 0) === 3) {
            qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
            scene.img('images/locations/pavlovsk/park/event/walk/day/winter/deep/kiss_couple1.jpg');
            scene.text('Walking down one of the less used trails, you find a couple kissing in a deep embrace. They seem utterly oblivious to you as you walk by them, and they never stop making out or seem to have even noticed you passing them.');
            qspCall(s, 'arousal', 'erotic', 1);
            qspCall(s, 'arousal', 'end');
          } else {
            if (((s as any).temprand ?? 0) === 4) {
              qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
              scene.img('images/locations/pavlovsk/park/event/walk/day/winter/deep/picnic_2girl1.jpg');
              scene.text('As you walk down one of the trails, you see some girls sitting on a fallen tree, having a bit of a picnic together. They seem surprised and uncomfortable when they spot you, moving slightly apart. You can only guess they were not expecting someone to come out this far into the park. You can only assume this is a date by the flowers and teddy bears.');
              scene.text('`You pretend not to notice and walk on, trying your best not to interrupt their special moment.');
            } else {
              if (((s as any).temprand ?? 0) === 5) {
                scene.img('images/locations/pavlovsk/park/event/walk/day/winter/deep/walking_2girls1.jpg');
                scene.text('Walking on one of the more used pathways in the deeper part of the park, you see two girls up ahead playing in the snow, running around chasing and throwing snowballs at each other. They seem to be two close friends having the time of their life.');
              } else {
                if (((s as any).temprand ?? 0) === 6  &&  ((s as any).coatworntype ?? 0) !== 'none') {
                  scene.actions([{ label: 'Continue', goto: ['pav_parkev', 'old_man'] }]);
                } else {
                  if (((s as any).temprand ?? 0) === 7) {
                    qspCall(s, 'pav_park_meet_event', 'kol');
                  } else {
                    if (((s as any).temprand ?? 0) === 8) {
                      qspCall(s, 'pav_park_meet_event', 'kol_more');
                    } else {
                      scene.img('images/locations/pavlovsk/park/event/walk/walk_deep_winter_day.jpg');
                      scene.text('You take a relaxing and refreshing walk through the park, trying to figure out the meaning of life.');
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      (s as any).temprand = Math.floor(Math.random() * 6) + 1;
      if (((s as any).temprand ?? 0) === 1) {
        qspCall(s, 'pav_park_meet_event', 'kol');
      } else {
        if (((s as any).temprand ?? 0) === 2) {
          qspCall(s, 'pav_park_meet_event', 'kol_more');
        } else {
          scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
          scene.text('You take a relaxing and refreshing walk through the park, trying to figure out the meaning of life.');
        }
      }
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      (s as any).temprand = Math.floor(Math.random() * 36) + 1;
      if (((s as any).temprand ?? 0) === 1) {
        scene.img('images/locations/pavlovsk/park/event/walk/day/deep/bench_couple_kiss1.jpg');
        scene.text('As you walk past one of the benches, you see a girl sitting on a boy\'s lap. They have their arms around each other and are passionately making out. You can\'t help but smile a little as you walk past them.');
        qspCall(s, 'arousal', 'erotic', 1);
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).temprand ?? 0) === 2) {
          scene.img('images/locations/pavlovsk/park/event/walk/day/deep/bench_flash_butt.jpg');
          scene.text('You see a couple sitting on a bench. You can\'t hear what he says, but the girl gets up on all fours on the bench with her ass facing him. She then pulls her skirt and panties down, showing off her naked ass to him, which only makes him grin.');
          scene.text('When she sees you, she blushes bright red and quickly pulls her clothes back in place. The boy starts protesting, then looks your way and gives you an annoyed glare as she jogs away, causing him to quickly follow.');
          qspCall(s, 'arousal', 'erotic_nudity', 1);
          qspCall(s, 'arousal', 'end');
        } else {
          if (((s as any).temprand ?? 0) === 3) {
            scene.img('images/locations/pavlovsk/park/event/walk/day/deep/lesbian_kiss.jpg');
            scene.text('As you walk down one of the less used trails, you find two girls kissing while in a deep embrace. They seem completely oblivious to you as you walk by and never stop making out.');
            qspCall(s, 'arousal', 'erotic', 1);
            qspCall(s, 'arousal', 'end');
          } else {
            if (((s as any).temprand ?? 0) === 4) {
              scene.img('images/locations/pavlovsk/park/event/walk/day/deep/bench_flash_panties_rear.jpg');
              scene.text('A group of boys and a single girl are hanging out near one of the benches. The boys are all talking to her and she seems reluctant, but you can tell by her posture that she gives in.');
              scene.text('She turns around, kneels on the bench, and pulls down her shorts to show off her thong and bare ass cheeks. The boys all hoot and holler and one even slaps her ass. You don\'t think she\'s aware of you as you walk by; the boys look at you and grin, but seem content with the girl they already have.');
              qspCall(s, 'arousal', 'erotic', 1);
              qspCall(s, 'arousal', 'end');
            } else {
              if (((s as any).temprand ?? 0) === 5) {
                scene.img('images/locations/pavlovsk/park/event/walk/day/deep/bench_guy_passedout1.jpg');
                scene.text('As you walk along, you see a guy lying on the ground in front of one of the benches. He looks like a gopnik by how he\'s dressed. As you get closer, you can hear him snoring and smell the alcohol on him.');
              } else {
                if (((s as any).temprand ?? 0) === 6) {
                  scene.img('images/locations/pavlovsk/park/event/walk/day/deep/bench_girl_reading.jpg');
                  scene.text('As you pass one of the benches, you see a girl sitting on it with her shoes off, reading a book. As you walk past, she doesn\'t even glance up at you. Instead, she seems to be wholly engrossed in reading her book.');
                } else {
                  if (((s as any).temprand ?? 0) === 7) {
                    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/bench_girl\' + rand(1, 2) + \'.jpg');
                    scene.text('As you come down one of the trails through a bunch of trees to one of the small clearings with a bench, you see a girl sitting on it. She looks up in your direction as you come into view and sighs a little before losing interest in you.');
                    scene.text('By her actions, she seems to be waiting on someone and that someone is not you.');
                  } else {
                    if (((s as any).temprand ?? 0) === 8) {
                      qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
                      scene.img('images/locations/pavlovsk/park/event/walk/day/deep/condoms_ground1.jpg');
                      scene.text('Walking along one of the trails into a small clearing just off to the side, you see a bit of litter on the ground, but as you get closer, it looks odd. You take a few steps over, wondering what it is, before realizing that it\'s a bunch of condom wrappers and used condoms lying on the ground.');
                      scene.text('It seems someone had a lot of fun here at some point. You quickly step back to the trail and continue your walk.');
                    } else {
                      if (((s as any).temprand ?? 0) === 9) {
                        scene.img('images/locations/pavlovsk/park/event/walk/day/deep/couple1.jpg');
                        scene.text('Walking down one of the less used trails, you find a couple standing just off the side, kissing in a deep embrace. They seem entirely oblivious to you as you walk by and never stop making out.');
                        qspCall(s, 'arousal', 'erotic', 1);
                        qspCall(s, 'arousal', 'end');
                      } else {
                        if (((s as any).temprand ?? 0) === 10) {
                          scene.img('images/locations/pavlovsk/park/event/walk/day/deep/dryhump_2girls1.jpg');
                          scene.text('As you walk along, you see a small group of girls about your brother\'s age talking. You can slightly overhear what they\'re saying. One of the girls is talking about a date they had last night, describing how the boy grabbed her from behind and started fucking her. To demonstrate, she grabs one of her friends, bends her over and starts pretending to fuck her from behind.');
                          scene.text('The girls all laugh and she continues her story as you shake your head slightly and wonder if your brother knows them.');
                          qspCall(s, 'arousal', 'erotic', 1);
                          qspCall(s, 'arousal', 'end');
                        } else {
                          if (((s as any).temprand ?? 0) === 11) {
                            scene.img('images/locations/pavlovsk/park/event/walk/day/deep/femdom1.jpg');
                            scene.text('As you walk along, you see a couple just off the path. They seem to disagree about something as the girl says something and points at the ground. The boy looks at her until she does it again, and then he lies on the ground on his back. She sits on his face and starts to berate him, telling him how useless he is and that he stays like that until he learns his place.');
                            scene.text('You can\'t help but smile at seeing a girl dominate a boy. Usually, the girls are always the ones being dominated by the boys.');
                          } else {
                            if (((s as any).temprand ?? 0) === 12) {
                              scene.img('images/locations/pavlovsk/park/event/walk/day/deep/get_flashed1.jpg');
                              scene.text('As you walk along, you see a man in a long coat coming the other way. As you get close to him, he suddenly opens his jacket. He is entirely naked underneath, his flaccid cock hanging right in front of you.');
                              qspCall(s, 'arousal', 'erotic_nudity', 1);
                              qspCall(s, 'arousal', 'end');
                              if (((s as any).PCLoSkirt ?? 0) > 0) {
                                scene.actions([
                                  { label: 'Flash him back', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/get_flashed2.jpg');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.text('You laugh and pull up your skirt, flashing him your pussy back. Once you\'re past him, you drop your skirt back in place and finish your walk.');
    } else {
      scene.text('You laugh before pulling your skirt up and your panties down, flashing him your pussy back. Once you\'re past him, you pull up your panties and drop your skirt back in place.');
    }
    qspCall(s, 'arousal', 'flash', 1);
    qspCall(s, 'arousal', 'erotic_nudity', (-1));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish your walk', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
                                ]);
                              }
                            } else {
                              if (((s as any).temprand ?? 0) === 13) {
                                scene.img('images/locations/pavlovsk/park/event/walk/day/deep/girl_in_woods.jpg');
                                scene.text('As you walk along one of the trails, you run across a girl sitting next to a tree with her arm against one of the low limbs and her head on her arm. She seems sad.');
                                scene.text('You start to walk over to her, but she says something without looking up. "Please just leave me alone."');
                                scene.text('You nod and turn to walk away, but you can\'t help but wonder what happened to her.');
                              } else {
                                if (((s as any).temprand ?? 0) === 14) {
                                  scene.img('images/locations/pavlovsk/park/event/walk/day/deep/naked_girl1.jpg');
                                  scene.text('As you are walking along one of the trails, you come around a bend in the trees and see a naked girl partially covering herself up ahead of you. When she sees you, she blushes and does her best to cover herself while shrieking, then runs off into the woods before you can ask if she needs help.');
                                } else {
                                  if (((s as any).temprand ?? 0) === 15) {
                                    qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
                                    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/panties_tree1.jpg');
                                    scene.text('Walking along, one of the trails opens into a small clearing just off to the side. You see something hanging from the trees, but as you get closer, it looks like significant bits of cloth. You take a few steps closer, wondering what it is before you realize it\'s three different pairs of panties hanging from the trees.');
                                    scene.text('As you quickly step back to the trail and continue your walk, you wonder exactly what happened back there. You shake your head as you can\'t fathom a reason for what you just saw.');
                                  } else {
                                    if (((s as any).temprand ?? 0) === 16) {
                                      qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
                                      scene.img('images/locations/pavlovsk/park/event/walk/day/deep/panties_ground1.jpg');
                                      scene.text('Walking along one of the trails into a small clearing just off to the side, you see a bit of litter on the ground, but as you get closer, it looks odd.');
                                      scene.text('You take a few steps over, wondering what it is before realizing that it\'s a bunch of different coloured panties lying on the ground. As you quickly step back to the trail and continue your walk, you wonder exactly what happened back there.');
                                    } else {
                                      if (((s as any).temprand ?? 0) === 17) {
                                        scene.img('images/locations/pavlovsk/park/event/walk/day/deep/selfie_pussy1.jpg');
                                        scene.text('As you walk along one of the trails, you run across a girl sitting next to a tree wearing a skirt. Her legs are spread wide, and she has her phone in her hand between her legs. As you get closer, you realize she\'s taking pictures of her naked pussy.');
                                        scene.text('When you get close, she looks up and smiles. "Just teasing my boyfriend," she says before going back to what she was doing.');
                                        scene.text('You don\'t know what to say, so you just nod and head on your way.');
                                        qspCall(s, 'arousal', 'erotic_nudity', 1);
                                        qspCall(s, 'arousal', 'end');
                                      } else {
                                        if (((s as any).temprand ?? 0) === 18) {
                                          scene.img('images/locations/pavlovsk/park/event/walk/day/deep/tree_girl_book1.jpg');
                                          scene.text('As you walk along one of the trails, you run across a girl sitting next to a tree reading a book. She never looks up at you as you walk past. Whatever the book is, she seems totally engrossed in it.');
                                        } else {
                                          if (((s as any).temprand ?? 0) === 19  &&  ((s as any).soniaQW ?? 0)?.['slut'] === 5  &&  ((s as any).hour ?? 0) > 14  &&  ((s as any).hour ?? 0) < 20) {
                                            qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
                                            scene.img('images/locations/pavlovsk/park/event/walk/walk_deep_day.jpg');
                                            scene.text('While walking along a heavily forested area with many bushes growing between the trees, almost completely blocking any sight beyond the path, you hear what sounds like some soft moaning, but you can\'t be sure.');
                                            scene.actions([
                                              { label: 'Ignore it', goto: ['pav_park', 'deeper_park'] },
                                              { label: 'Investigate', goto: ['pav_park_sex', 'watch_sonia'] },
                                            ]);
                                          } else {
                                            if (((s as any).temprand ?? 0) === 20) {
                                              qspCall(s, 'pav_park_meet_event', 'kol_deep');
                                            } else {
                                              if (((s as any).temprand ?? 0) === 21  &&  ((s as any).coatworntype ?? 0) !== 'none') {
                                                scene.actions([{ label: 'Continue', goto: ['pav_parkev', 'old_man'] }]);
                                              } else {
                                                if (((s as any).temprand ?? 0) === 22) {
                                                  qspCall(s, 'pav_park_meet_event', 'kol');
                                                } else {
                                                  if (((s as any).temprand ?? 0) === 23) {
                                                    qspCall(s, 'pav_park_meet_event', 'kol_more');
                                                  } else {
                                                    scene.img('images/locations/pavlovsk/park/event/walk/walk_deep_day.jpg');
                                                    scene.text('You take a relaxing and refreshing walk through the park, trying to figure out the meaning of life.');
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
    } else {
      (s as any).temprand = Math.floor(Math.random() * 10) + 1;
      if (((s as any).temprand ?? 0) === 1) {
        qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
        scene.img('images/locations/pavlovsk/park/event/walk/night/deep/girl_buttflash1.jpg');
        scene.text('As you walk along, you come upon a group drinking and hanging out. The boys and several other girls are trying to convince one of the girls to do something. You\'re not sure what it is at first, but after a bit of pressure from the rest, the girl in question turns, leans forward, and pulls down her pants part way to flash her bare ass and pussy.');
        scene.text('Her friends pull out their phones, which light up her bare backside as they take pictures. She quickly pulls her pants back up and they all start laughing and teasing her, but it seems good-natured enough.');
        qspCall(s, 'arousal', 'erotic_nudity', 1);
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).temprand ?? 0) === 2) {
          qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
          scene.img('images/locations/pavlovsk/park/event/walk/night/deep/girl_pantsdown1.jpg');
          scene.text('Up ahead, you see a few guys and a girl walking along. The girl is stumbling around, either high on drugs or drunk. You\'re not close enough to overhear them, but you can see the guys pawing at her body. They then stop and whatever they say to her next has an effect. She stumbles over to a tree and leans against it before pulling her shorts and panties down around her ankles.');
          scene.text('She bends over and wiggles her ass invitingly as the boys pull out their dicks and start stroking them, arguing over who gets to go first. You slip away into the night before they decide to try and add you as an option.');
          qspCall(s, 'arousal', 'erotic_nudity', 2);
          qspCall(s, 'arousal', 'end');
        } else {
          if (((s as any).temprand ?? 0) === 3) {
            qspCall(s, 'pav_park_meet_event', 'kol');
          } else {
            if (((s as any).temprand ?? 0) === 4) {
              qspCall(s, 'pav_park_meet_event', 'kol_more');
            } else {
              scene.img('images/locations/pavlovsk/park/event/walk/walk_night.jpg');
              scene.text('You take a relaxing and refreshing walk through the park, trying to figure out the meaning of life.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your walk', goto: ['pav_park', 'deeper_park'] },
  ]);
  scene.build();
}

function enterOldMan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera1.jpg');
  if (((s as any).pcs_hotcat ?? 0) < 5) {
    scene.text('As you walk along one of the small streams in the park that feed into the lake, you stop to admire the view. It\'s very peaceful here with a lovely vantage. At first, you don\'t notice the old man with a camera taking pictures of the area, but you eventually become aware of him, and you think he might have even taken a picture or two of you.');
    scene.text('After a few more minutes, you turn and continue your walk.');
    scene.actions([
      { label: 'Finish your walk', goto: ['pav_park', 'deeper_park'] },
    ]);
  } else {
    scene.text('As you walk along one of the small streams in the park that feed into the lake, you stop to admire the view. It\'s very peaceful here with a lovely vantage. At first, you don\'t notice the old man with a camera taking pictures of the area, but you eventually become aware of him, and you think he might have even taken a picture or two of you.');
    scene.text('You take in the sight for a few more minutes before you\'re interrupted by a tap on your shoulder.');
    scene.actions([
      { label: 'Look', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera2.jpg');
    scene.text('You turn and see the old man with the camera. "Excuse me miss, but would you mind if I took a few pictures of you? It\'s such a lovely area, and you\'re such a lovely young lady," he says with a friendly smile.');
    scene.text('He seems nice enough, but should you really be letting some stranger take photos of you?');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera_no.jpg');
    scene.text('You shake your head. "I would mind. I would rather not have my picture taken."');
    scene.text('He frowns, but nods. "Okay, sorry to bother you."');
    scene.text('He turns and walks away, and you continue on your walk.');
    scene.actions([
      { label: 'Finish your walk', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera3.jpg');
    scene.text('You think about it before nodding. "Sure, I don\'t mind."');
    scene.text('"Great! Just stand over there for me, please," he says with a friendly smile.');
    scene.text('You move over to where he indicated, and he starts taking pictures of you.');
    scene.actions([
      { label: 'Pose for him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera4.jpg');
    scene.text('You follow his directions, and he seems to know a bit about his actions. You briefly wonder if he used to be a photographer or is just a well-informed amateur, but your thoughts are interrupted when he steps close to you and starts to unzip your jacket.');
    scene.actions([
      { label: 'Stop him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera_no.jpg');
    scene.text('You grab his hand to stop him. "What are you doing?!"');
    scene.text('He frowns. "I was unzipping your jacket so we could get a better look at your nice body."');
    scene.text('You shake your head and pull his hand away before stepping away from him. "I think that\'s enough."');
    scene.text('He frowns, but nods. "Okay, sorry to bother you."');
    scene.text('He turns and walks away before you continue on your walk.');
    scene.actions([
      { label: 'Finish your walk', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      { label: 'Let him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera5.jpg');
    scene.text('He only unzips it about halfway before he backs up and raises his camera again. "Okay, now I want you to unzip your jacket the rest of the way and push it aside, but do it seductively, like you\'re trying to tease some boy you like," he explains with a smile and a confident tone.');
    scene.text('Having come this far, you just nod and do as he asks. "Okay, now show me your abs."');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera_no.jpg');
    scene.text('You shake your head. "I don\'t think so. This has gone too far," you say as you zip your jacket back up.');
    scene.text('He frowns, but nods. "Okay, sorry to bother you."');
    scene.text('He turns and walks away, and you continue on your walk.');
    scene.actions([
      { label: 'Finish your walk', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      { label: 'Do as he says', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera6.jpg');
    scene.text('You move your clothes out of the way to expose your midriff for him, and he smiles even more as he keeps taking pictures of you.');
    scene.text('"Yeah, just like that, perfect. You\'re a natural at this; you should really consider modelling. Now show me those perfect firm titties of yours."');
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera_no.jpg');
    scene.text('You shake your head. "I don\'t think so. This has gone too far," you say as you pull your clothes back in place and zip your jacket back up.');
    scene.text('He frowns, but nods. "Okay, sorry to bother you."');
    scene.text('He turns and walks away, and you continue on your walk.');
    scene.actions([
      { label: 'Finish your walk', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera7.jpg');
    scene.text('You move your clothes out of the way to expose your breasts for him, and he smiles as he keeps taking pictures of you.');
    scene.text('"Oh yeah, that\'s it. You have such perfect titties."');
    scene.text('As he keeps taking your picture, he gives you some directions on how to stand for him.');
    qspCall(s, 'arousal', 'flashlite', 5, 'inhibition');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep modeling for him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera8.jpg');
    scene.text('As he takes pictures of you, he slowly gets closer until he\'s taking very close-up photos of your breasts before he stops. "How about you come back to my place, and I can take more photos of you? I have lighting equipment that will make for much better photos. What do you say?"');
    qspCall(s, 'arousal', 'flashlite', 5, 'inhibition');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera_no.jpg');
    scene.text('You shake your head. "I don\'t think so. This has gone too far," you say as you pull your clothes back in place and zip your jacket back up.');
    scene.text('He frowns, but nods. "Okay, maybe some other time."');
    scene.text('He turns and walks away, and you continue on your walk.');
    scene.actions([
      { label: 'Finish your walk', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', goto: ['pav_park_sex', 'oldman_house'] },
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
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGopgirls(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).gopniksev) (s as any).gopniksev = {}; (s as any).gopniksev['gopgirls'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
  scene.text('Lena, Lera, Alyona and Anushka are sitting at a picnic table, drinking beers and smoking cigarettes and weed. They\'re getting wasted and having a good time, laughing and messing around.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    { label: 'Join them', handler: (st: GameState) => {
    scene.text('You walk over to them. "Hey guys, mind if I join you?"');
    if (((s as any).grupTipe ?? 0) === 5) {
      scene.text('Lena and Lera give you a look of disgust. "Get lost, loser!"');
      scene.text('Alyona ignores you and Anushka sighs, but you can\'t tell if the sigh is directed at you or the other girls.');
      scene.actions([
        { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        // TODO-QSP: dynamic text: They make some room on the bench. "Sure. Come join us, <<$pcs_nickname>>," Anush...
        scene.text(`They make some room on the bench. "Sure. Come join us, ${((s as any).pcs_nickname ?? 0)}," Anushka says.`);
        scene.text('As soon as you sit down, Lera hands you a beer.');
        qspCall(s, 'willpower', 'drink', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse beer [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse beer [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (5);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You refuse the beer and they give each other a look, but don\'t say anything. You make small talk with the girls for a while, but they seem to quickly get tired of listening and tell you they have things to do before they grab the few beers left and leave without inviting you to join them.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Drink beer', goto: ['pav_parkev1', 'female_gopnik_beer_1'] },
        ]);
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          scene.text('Anushka smiles at you and scoots over, giving you a spot to sit between her and Lera. "What\'s up, nerd?" she asks in a teasing tone as you take a seat.');
          scene.text('Lena glances over at you with a sneer. "Shouldn\'t you be off pretending to be an elf or something?"');
          scene.text('You glance around and notice that neither Lera nor Alyona are inviting you. It seems they don\'t relish hanging out with a nerd.');
        } else {
          scene.text('Anushka smiles at you and scoots over, giving you a spot to sit between her and Lera. "Looking to slum it or something? Aren\'t you afraid some others might see you with us?" she asks as you take a seat.');
          scene.text('Lena glances over at you with a sneer. "Maybe the little princess wants to take a walk on the wild side for a change?"');
        }
        scene.actions([
          { label: 'Make an excuse and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('Starting to feel nervous, you glance down at your phone. "Oh, look at the time! I need to get going!"');
    scene.text('You wave goodbye to them and start walking away as you hear them laughing behind you.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
          { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You make small talk with the girls for a while, but they seem to quickly get tired of listening and tell you they\'ve have things to do before they grab the few beers left and leave without inviting you to join them.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
          { label: 'Ask for a beer', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('"How about you pass me one of those beers?" you ask as you take a seat.');
    scene.text('Lera laughs and hands you a beer.');
    scene.actions([
      { label: 'Drink beer', goto: ['pav_parkev1', 'female_gopnik_beer_1'] },
    ]);
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterGopboys(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).gopniksev) (s as any).gopniksev = {}; (s as any).gopniksev['gopboys'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_boys.jpg');
  scene.text('Vitek, Dan, Lavrenti, Niko, Roman, Arkadi, Vasily and Pauline are sitting at a picnic table, drinking beers and smoking cigarettes and weed. They\'re getting wasted and having a good time, laughing and messing around.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    { label: 'Join them', handler: (st: GameState) => {
    scene.text('You walk over to them. "Hey guys."');
    if (((s as any).grupTipe ?? 0) === 5) {
      scene.text('They give you a look of disgust. "Get lost, loser!"');
      scene.actions([
        { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        scene.text('Vasily smiles at you and scoots over, giving you a spot to sit between him and Dan. As you sit down, he offers you a beer.');
        qspCall(s, 'willpower', 'drink', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse beer [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse beer [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (5);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_boys.jpg');
    scene.text('You refuse the beer and they shrug and share a look before you make small talk with the guys for a while, but they seem to quickly get tired of listening and tell you they\'ve got things to do before they grab the few beers left and leaving without inviting you to join them.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Drink beer', goto: ['pav_parkev1', 'male_gopnik_beer'] },
        ]);
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          scene.text('Vasily smiles at you and scoots over, giving you a spot to sit between him and Dan. "What you up to, nerd?" he asks in a teasing tone.');
          scene.text('Dan glances over at you with a sneer. "You sure you should be here? This part of the park isn\'t really for people like you."');
          scene.text('You glance around and notice a few other rugged looks tossed your way. You\'ve heard stories about how rough and dangerous the gopniks can be. You know you should leave, but part of you wants to stay.');
          qspCall(s, 'willpower', 'drink', 'self', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Stay and hang out [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Stay and hang out [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    scene.text('You steel your nerves before you reply. "Yeah, I <i>am</i> sure I should be here. Why? You want me to leave?"');
    scene.text('Vasily smiles at you and scoots over, giving you a spot to sit between him and Dan. "It\'s cool. So what you up to?" he asks in a teasing tone as you take a seat.');
    scene.text('Dan glances over at you with a sneer. "Looking to slum it a little, princess?"');
    scene.text('Pauline snorts a laugh. "She probably got tired of all the limp dicks she normally hangs out with and wants to know what a real cock feels like."');
    scene.text('Roman grins. "Is that it? You looking for some real cock?"');
    scene.text('You glance around and notice a few other rugged looks tossed your way. You know the gopniks have a bad reputation. Maybe hanging out with them in a deserted place isn\'t the best idea…');
    scene.actions([
      { label: 'Make an excuse and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_boys.jpg');
    scene.text('Starting to feel nervous, you glance down at your phone. "Oh, I didn\'t notice the time! I need to get going!"');
    scene.text('You wave goodbye to them and start walking away as you hear them laughing behind you.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_boys.jpg');
    scene.text('You make small talk with the guys for a while, but they seem to quickly get tired of listening and tell you they\'ve got things to do before they grab the few beers left and leave without inviting you to join them.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      { label: 'Ask for a beer', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_boys.jpg');
    scene.text('"How about you pass me one of those beers?" you ask as you take a seat.');
    scene.text('Vasily laughs and hands you a beer.');
    scene.actions([
      { label: 'Drink beer', goto: ['pav_parkev1', 'male_gopnik_beer'] },
    ]);
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
          ]);
        } else {
          scene.text('Vasily smiles at you and scoots over, giving you a spot to sit between him and Dan. "What you up to?" he asks in a teasing tone as you take a seat.');
          scene.text('Dan glances over at you with a sneer. "Looking to slum it a little, princess?"');
          scene.text('Pauline snorts a laugh. "She probably got tired of all the limp dicks she normally hangs out with and wants to know what a real cock feels like."');
          scene.text('Roman grins. "Is that it? You looking for some real cock?"');
          scene.text('You glance around and notice a few other rugged looks tossed your way. You know the gopniks have a bad reputation. Maybe hanging out with them in a deserted place isn\'t the best idea…');
          scene.actions([
            { label: 'Make an excuse and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_boys.jpg');
    scene.text('Starting to feel nervous, you glance down at your phone. "Oh, I didn\'t notice the time! I need to get going!"');
    scene.text('You wave goodbye to them and start walking away as you hear them laughing behind you.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
            { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_boys.jpg');
    scene.text('You make small talk with the guys for a while, but they seem to quickly get tired of listening and tell you they\'ve got things to do before they grab the few beers left and leave without inviting you to join them.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
            { label: 'Ask for a beer', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_boys.jpg');
    scene.text('"How about you pass me one of those beers?" you ask as you take a seat.');
    scene.text('Vasily laughs and hands you a beer.');
    scene.actions([
      { label: 'Drink beer', goto: ['pav_parkev1', 'male_gopnik_beer'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterGopniks(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).gopniksev) (s as any).gopniksev = {}; (s as any).gopniksev['gopniks'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/gopniks.jpg');
  scene.text('Vitek, Dan, Lavrenti, Roman, Arkadi, Niko, Valentin, Radomir, Vasily, Pauline, Lena, Lera, Anushka and Alyona are all sitting at a picnic table, drinking beers and smoking cigarettes & weed. They\'re getting wasted and having a good time, laughing and messing around.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    { label: 'Join them', handler: (st: GameState) => {
    scene.text('You walk over to them. "Hey guys."');
    if (((s as any).grupTipe ?? 0) === 5) {
      scene.text('They give you a look of disgust. "Get lost, loser!"');
      scene.actions([
        { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        scene.text('Vasily smiles at you and scoots over, giving you a spot to sit between him and Dan. As you sit down, he offers you a beer, and you notice Anushka\'s guitar propped up against the side of the table. It\'s one of the few times you\'ve seen her take her dad\'s old guitar out of her room.');
        qspCall(s, 'willpower', 'drink', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse beer [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse beer [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (2);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopniks.jpg');
    scene.text('You refuse the beer. They shrug and share a look before you make small talk with the guys for a while, but they seem to quickly get tired of listening and tell you they\'ve got things to do before they grab the few beers left and leave without inviting you to join them.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Drink beer', goto: ['pav_parkev1', 'gopnik_beer'] },
        ]);
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          scene.text('Vasily smiles at you and scoots over, giving you a spot to sit between him and Dan. "What you up to, nerd?" he asks in a teasing tone as you take a seat.');
          scene.text('Dan glances over at you with a sneer. "You sure you should be here? This part of the park isn\'t really for people like you."');
          scene.text('You glance around and notice a few other rugged looks tossed your way.');
          scene.actions([
            { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
          ]);
        } else {
          scene.text('Vasily smiles at you and scoots over, giving you a spot to sit between him and Dan. "What you up to?" he asks as you take a seat.');
          scene.text('Dan glances over at you with a sneer. "Looking to slum it a little, princess?"');
          scene.text('Pauline snorts a laugh. "She probably got tired of all the limp dicks she normally hangs out with and wants to know what a real cock feels like."');
          scene.text('Roman grins. "Is that it? You looking for some real cock?"');
          scene.text('You glance around and notice a few other rugged looks tossed your way. You know the gopniks have a bad reputation. Maybe hanging out with them in a deserted place isn\'t the best idea.');
          scene.actions([
            { label: 'Make an excuse and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopniks.jpg');
    scene.text('Starting to feel nervous, you glance down at your phone. "Oh, I didn\'t notice the time! I need to get going!"');
    scene.text('You wave goodbye to them and start walking away as you hear them laughing behind you.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
            { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopniks.jpg');
    scene.text('You make small talk with the guys for a while, but they seem to quickly get tired of listening and tell you they\'ve got things to do before they grab the few beers left and leave without inviting you to join them.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
            { label: 'Ask for a beer', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopniks.jpg');
    scene.text('"How about you pass me one of those beers?" you ask as you take a seat.');
    scene.text('Vasily laughs and hands you a beer. As you take the beer, you notice Anushka\'s guitar propped up against the side of the picnic table. It\'s one of the few times you\'ve seen her take her dad\'s old guitar out of her room.');
    scene.actions([
      { label: 'Drink beer', goto: ['pav_parkev1', 'gopnik_beer'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'go_for_walk1':
      enterGoForWalk1(s, scene);
      break;
    case 'walk1':
      enterWalk1(s, scene);
      break;
    case 'go_for_walk2':
      enterGoForWalk2(s, scene);
      break;
    case 'walk2':
      enterWalk2(s, scene);
      break;
    case 'old_man':
      enterOldMan(s, scene);
      break;
    case 'gopgirls':
      enterGopgirls(s, scene);
      break;
    case 'gopboys':
      enterGopboys(s, scene);
      break;
    case 'gopniks':
      enterGopniks(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_parkev: LocationDef = {
  name: 'pav_parkev',
  title: '<center><h2>Pavlovsk Park</h2></center>',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  enter: enter,
};
