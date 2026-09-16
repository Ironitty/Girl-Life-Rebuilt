import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  qspCall(s, 'core_library', 'setloc', 'uni_grounds', '');
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  if (((s as any).university ?? 0)?.['campus_event_time'] > ((s as any).totminut ?? 0)) {
    ((s as any).university = (s as any).university ?? {})['campus_event_time'] = ((s as any).totminut ?? 0);
  }
  if (((s as any).totminut ?? 0) > ((s as any).university ?? 0)?.['campus_event_time'] + 60  &&  ((s as any).sunWeather ?? 0) === 1  &&  (((s as any).hour ?? 0) !== 8  ||  ((s as any).minut ?? 0) <= 50)  &&  (((s as any).hour ?? 0) !== 9  ||  ((s as any).minut ?? 0) <= 20)  &&  (((s as any).hour ?? 0) !== 13  ||  ((s as any).minut ?? 0) <= 5)  &&  (((s as any).university ?? 0)?.['semester_week'] + ((s as any).university ?? 0)?.['exam_week']) > 0) {
    ((s as any).university = (s as any).university ?? {})['campus_event_time'] = ((s as any).totminut ?? 0);
    if (((s as any).hour ?? 0) > 7  &&  (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3)) {
      if ((((s as any).hotornot_uni ?? 0) === 0  ||  ((s as any).fuckornot_uni ?? 0) === 0)  &&  ((s as any).yearstart ?? 0) === 2  &&  ((s as any).month ?? 0) >= 9  &&  ((s as any).day ?? 0) >= 11) {
        (s as any).fuckornot_uni = 1;
        (s as any).hotornot_uni = 1;
        scene.text('As you head to class, you overhear many of your fellow students talking. It seems someone has made websites ranking both the male and female students on how bangable they are. You overhear someone mention the links and make a note of them to check when you get a chance.');
      } else {
        if (((s as any).temper ?? 0) >= 12  &&  (!(Math.floor(Math.random() * 4) + 0))) {
          qspGoto(s, 'uni_grounds', 'day_warm');
        } else {
          if (((s as any).temper ?? 0) >= 8  &&  (!(Math.floor(Math.random() * 10) + 0))) {
            qspGoto(s, 'uni_grounds', 'day_warm');
          } else {
            if ((!(Math.floor(Math.random() * 10) + 0))) {
              qspGoto(s, 'uni_grounds', 'day_cold');
            }
          }
        }
      }
    } else {
      if ((((s as any).hour ?? 0) > 15  ||  ((s as any).hour ?? 0) === 1)  &&  (((s as any).daystage ?? 0) === 4  ||  ((s as any).daystage ?? 0) === 5)) {
        if (((s as any).temper ?? 0) >= 12  &&  (!(Math.floor(Math.random() * 5) + 0))) {
          qspGoto(s, 'uni_grounds', 'night_warm');
        }
      }
    }
  }
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    }
  }
  if (((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 15  &&  ((s as any).cumloc ?? 0)[11] === 0) {
    qspCall(s, 'mother_chats', 'reconciliation_talk');
    return;
  }
  if (((s as any).hotcat ?? 0) >= 6  &&  ((s as any).hour ?? 0) > 15  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).porn_studio ?? 0)?.['pickup_porn'] === 0  &&  ((s as any).film ?? 0) === 0  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
    qspGoto(s, 'pickup_porn', 'start');
  }
  scene.text('<center><b>University Campus</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/city/island/university/uni_day_winter.jpg');
      scene.text('The university boasts a large amount of buildings hosting many different types of classes. Snow covers the ground and the cold wind bites through your clothes. Only a few of the walkways have been cleared of snow.');
      if (((s as any).week ?? 0) > 5) {
        scene.text('The campus is pretty quiet right now. The few students you see are rushing across the cold snowy quad.');
      } else {
        scene.text('The campus is quite lively right now with many students rushing to their next class, trying not to slip on any icy spots in the courtyard.');
      }
    } else {
      scene.img('images/locations/city/island/university/uni_winter_night.jpg');
      scene.text('The university boasts a large amount of buildings hosting many different types of classes. Snow covers the ground and the biting wind chills you to the bone. The lights around the walkways glare off the snow and give it a surreal glow, lighting the night up surprisingly well.');
      scene.text('It\'s very quiet, with only a few students rushing across the campus, trying not to slip on any patches of ice.');
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/city/island/university/uni_day.jpg');
      scene.text('The university boasts a large amount of buildings hosting many different types of classes. It is nice and warm out.');
      if (((s as any).week ?? 0) === 7) {
        scene.text('Despite it being a Sunday, the quad is busy with students taking advantage of the nice weather, at least those who aren\'t still in their dorm rooms, recovering from a weekend of partying.');
      } else {
        if (((s as any).week ?? 0) > 5) {
          scene.text('The campus is quite lively right now. Many of the students are taking advantage of the weather to hang out on the quad.');
        } else {
          scene.text('The campus is quite lively right now. Most of the students are on their way to their next class, or hanging out with friends.');
        }
      }
    } else {
      scene.img('images/locations/city/island/university/uni_night.jpg');
      scene.text('The university boasts a large amount of buildings hosting many different types of classes. During the night, the quad is fairly well lit, though the lights are spread out enough to leave dark spots scattered around.');
      if (((s as any).week ?? 0) === 7) {
        scene.text('The campus is quiet right now. Most of the students seem to be sleeping, worn out from the weekend.');
      } else {
        if (((s as any).week ?? 0) > 5) {
          scene.text('The campus is quite lively right now. Many of the students are moving around the courtyard visiting each other or enjoying their weekend.');
        } else {
          scene.text('The campus is quiet right now. Most of the students seem to be sleeping or studying late.');
        }
      }
    }
  }
  if (((s as any).locat ?? 0)?.['katja'] === 25) {
    // TODO-QSP: dynamic text: You see '+iif(katjaQW['know_katja_uni'] = 0 and ($start_type['loc'] ! 'sg' and $...
    scene.text('You see \'+iif(katjaQW[\'know_katja_uni\'] = 0 and ($start_type[\'loc\'] ! \'sg\' and $start_type[\'magic\'] = \'tg\'), \'a redheaded girl\', \'<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027katja_chat\\u0027, \\u0027start\\u0027); return false;">Katja</a>\')+\' sitting while talking on her phone.');
  }
  if (((s as any).locat ?? 0)?.['A23'] === 17) {
    // TODO-QSP: dynamic text: You see '+iif(AlbinaQW['know_albina_uni'] = 0 and ($start_type['loc'] ! 'sg' and...
    scene.text('You see \'+iif(AlbinaQW[\'know_albina_uni\'] = 0 and ($start_type[\'loc\'] ! \'sg\' and $start_type[\'magic\'] = \'tg\'), \'an attractive looking brunette\', \'<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027albina_events\\u0027, \\u0027albina_jogging_uni\\u0027); return false;">Albina</a>\')+\' jogging around the quad.');
    scene.text('Her well-toned physique and tight fitting yoga pants are drawing the attention of multiple boys and even some girls around her, but she appears to have earbuds in and doesn\'t pay much attention to them.');
  }
  if (((s as any).university ?? 0)?.['semester_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
    qspCall(s, 'uni_lessons', 'schedule');
  }
  if (((s as any).university ?? 0)?.['exam_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
    qspCall(s, 'uni_lessons', 'exam_schedule');
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'university_dorm')  ||  ((s as any).university ?? 0)?.['student'] === 1) {
    scene.actions([
      { label: 'Go to your room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 7;
  }, goto: ['uni_dorm', 'dorm_room'] },
    ]);
  }
  if (((s as any).daystart ?? 0) >= 760) {
    qspCall(s, 'natbel_uni_dates_2', 'set_act');
  }
  if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) > 7)  ||  (((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 23)) {
    scene.actions([
      { label: 'Go to the library', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspGoto(s, 'uni_library', 'start');
  } },
    ]);
  }
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) > 7  &&  ((s as any).hour ?? 0) < 17) {
    scene.actions([
      { label: 'Go to the administration building', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspGoto(s, 'uni_admin', 'start');
  } },
    ]);
  }
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) > 9  &&  ((s as any).hour ?? 0) < 17) {
    scene.actions([
      { label: 'Go to the university cafe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspGoto(s, 'uni_cafe', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the city', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspGoto(s, 'city_island', '');
  } },
    { label: 'Go to the dorms', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['uni_dorm', ''] },
  ]);
  scene.build();
}

function enterDayWarm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temper ?? 0) >= 18) {
    (s as any).temp = Math.floor(Math.random() * 31) + 1;
  } else {
    if (((s as any).temper ?? 0) >= 12) {
      (s as any).temp = Math.floor(Math.random() * 25) + 7;
    } else {
      (s as any).temp = Math.floor(Math.random() * 3) + 29;
    }
  }
  if (((s as any).temp ?? 0) === 1) {
    scene.img('images/locations/city/island/university/campus/events/day/warm/2girl_butt_flash1.jpg');
    scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the warm weather. You see two girls waving as they walk towards one another. When they go to give each other a hug, one of them grabs the others\' skirt and yanks it up, showing her naked ass off from behind. You don\'t think the girl notices at first, but once she does, she pulls away and straightens out her skirt while calling her friend all kinds of names, though it doesn\'t sound heated as the other girl just laughs. The two of them are soon chatting and walking away together arm in arm.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['uni_grounds', ''] },
    ]);
  } else {
    if (((s as any).temp ?? 0) === 2) {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      scene.img('images/locations/city/island/university/campus/events/day/warm/2guy_ir_pickup\' + rand(1, 3) + \'.jpg');
      scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the warm weather. You see two African guys sitting on a low wall, trying to chat up the girls as they walk by. When a girl stops to talk with them, they immediately start rubbing her legs. She seems to enjoy the attention and quickly sits with them. They chat while the guys continue pawing at her before they get up and leave together. It\'s obvious what the guys were looking for, and she seems happy to provide it.');
      scene.actions([
        { label: 'Continue', goto: ['uni_grounds', ''] },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 3) {
        scene.img('images/locations/city/island/university/campus/events/day/warm/3girl_dryhump1.jpg');
        scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the warm weather. You see three girls hanging out and passing a drink between themselves. Based on how they\'re acting, you\'re fairly sure they\'re drunk or are at least close to it. When they start feeling each other up, they get the attention of some nearby boys, which only encourages the girls further. Two of the girls start making out with each other while the third lines up behind one of them and pretends to hump her. The boys are enraptured by the display, and the girls are smiling and having a grand time.');
        qspCall(s, 'arousal', 'voyeur', 2);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Continue', goto: ['uni_grounds', ''] },
        ]);
      } else {
        if (((s as any).temp ?? 0) === 4) {
          scene.img('images/locations/city/island/university/campus/events/day/warm/bench_balls1.jpg');
          scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the warm weather. You see a guy laying on a bench as a few girls pass by him. One of them whispers to the others, then they all look at the boy and start grinning and giggling. You\'re unsure what they found so funny until you walk past yourself and can see that his dick and balls are dangling out of his loose shorts. You wonder if he\'s aware of this, since as far as you can tell, he\'s sleeping.');
          qspCall(s, 'arousal', 'voyeur', 2);
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Continue', goto: ['uni_grounds', ''] },
          ]);
        } else {
          if (((s as any).temp ?? 0) === 5) {
            scene.img('images/locations/city/island/university/campus/events/day/warm/topless_sunbathing\' + rand(1, 2) + \'.jpg');
            scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the warm weather. There\'s a number of people out on the quad right now. Some are sitting around talking while others walk around. There\'s even a few people playing frisbee, but what has most people\'s attention, especially the guys passing by, are the group of topless girls sunbathing on the grass.');
            qspCall(s, 'arousal', 'voyeur', 2);
            qspCall(s, 'arousal', 'end');
            scene.actions([
              { label: 'Continue', goto: ['uni_grounds', ''] },
            ]);
          } else {
            if (((s as any).temp ?? 0) === 6) {
              scene.img('images/locations/city/island/university/campus/events/day/warm/ir_kissing1.jpg');
              scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the warm weather. A black guy and white girl are walking hand in hand while talking and laughing. They stop to share a kiss when they are interrupted by a group of boys yelling racial slurs at the black guy, upset that he\'s with a white girl. They get into an argument that quickly escalates into a shoving match. The girl steps in to pull her boyfriend away before a fight can break out. As the couple walk away, the boys yell out that this isn\'t over.');
              scene.actions([
                { label: 'Continue', goto: ['uni_grounds', ''] },
              ]);
            } else {
              if (((s as any).temp ?? 0) === 7) {
                scene.img('images/locations/city/island/university/campus/events/day/warm/1nakedg_coed_group\' + rand(1, 3) + \'.jpg');
                scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. Near the edge of the campus, you can\'t help but notice a group of students, at least you think they\'re students, hanging around one of the benches. Your attention is drawn to the naked girl who\'s wearing only a pair of high heels hanging out with them. You have no clue why she\'s naked, but her group doesn\'t seem to pay her too much attention. Others, however, have taken note of her and she seems to be enjoying herself. You shake your head slightly, curious what\'s going on but continue on your way.');
                qspCall(s, 'arousal', 'voyeur', 2);
                qspCall(s, 'arousal', 'end');
                scene.actions([
                  { label: 'Continue', goto: ['uni_grounds', ''] },
                ]);
              } else {
                if (((s as any).temp ?? 0) === 8) {
                  (s as any).minut = ((s as any).minut ?? 0) + 2;
                  scene.img('images/locations/city/island/university/campus/events/day/warm/2girl_wedgie.jpg');
                  scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. A girl runs up behind another before knocking her to the ground. The victim, who looks a little nerdy to you, starts to get up but the other girl grabs her panties and gives her a massive wedgie and even starts dragging her on the ground. Some students stop to watch or just walk by, but nearly all of them are laughing. After a few minutes, the girl finally lets go and says something to her victim before walking away in a good mood as the nerdy girl slowly gets up and looks around shyly. You can tell she\'s unhappy as she hurries off. It seems even the university has bullies.');
                  scene.actions([
                    { label: 'Continue', goto: ['uni_grounds', ''] },
                  ]);
                } else {
                  if (((s as any).temp ?? 0) === 9) {
                    scene.img('images/locations/city/island/university/campus/events/day/warm/4girl_titflash.jpg');
                    scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. You spot a group of four girls with a few guys hanging around them. The guys shout something at the girls, though you\'re too far away to hear what it was. The girls suddenly pull up their tops, flashing their tits at the guys while also flipping them off. The boys seem encouraged by the display and try to approach, but the girls shove them back and jog away while laughing. The guys look frustrated and start calling out after them.');
                    qspCall(s, 'arousal', 'voyeur', 2);
                    qspCall(s, 'arousal', 'end');
                    scene.actions([
                      { label: 'Continue', goto: ['uni_grounds', ''] },
                    ]);
                  } else {
                    if (((s as any).temp ?? 0) === 10) {
                      scene.img('images/locations/city/island/university/campus/events/day/warm/assgrab_girls.jpg');
                      scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. Two girls are trying to find their way around campus when one of them notices some boys checking them out. She gets her friend\'s attention by saying something to her. The second girl giggles before sticking her ass up and the first girl starts squeezing it. They laugh at the boys\' reaction before holding hands and hurrying off.');
                      scene.actions([
                        { label: 'Continue', goto: ['uni_grounds', ''] },
                      ]);
                    } else {
                      if (((s as any).temp ?? 0) === 11) {
                        scene.img('images/locations/city/island/university/campus/events/day/warm/bench_girl1.jpg');
                        scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. There\'s a girl sitting on a bench by herself, occasionally glancing around as if she were waiting for someone. Based on how attractive she is, you assume she must be waiting on a boy.');
                        scene.actions([
                          { label: 'Continue', goto: ['uni_grounds', ''] },
                        ]);
                      } else {
                        if (((s as any).temp ?? 0) === 12) {
                          scene.img('images/locations/city/island/university/campus/events/day/warm/bench_panties1.jpg');
                          scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. A girl is sitting on a bench relaxing and you can\'t help but notice that she has her legs spread wide, causing her skirt to slide almost all the way up to her waist. This in turn is showing up her red panties, which match her red top. The girl notices you staring and smiles, seemingly amused and loving the attention she\'s attracted. She reminds you of Anushka.');
                          qspCall(s, 'arousal', 'voyeur', 2);
                          qspCall(s, 'arousal', 'end');
                          scene.actions([
                            { label: 'Continue', goto: ['uni_grounds', ''] },
                          ]);
                        } else {
                          if (((s as any).temp ?? 0) === 13) {
                            scene.img('images/locations/city/island/university/campus/events/day/warm/bend_over1.jpg');
                            scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. Ahead of you, a girl stops and bends over to retie her shoe. In the process, she gives everyone a decent view of the skimpy thong she\'s wearing, which barely conceals her pussy lips. Several guys cat call and whistle at the girl, who seems blissfully unaware or unfazed by the attention she\'s drawn. Once she\'s done, she straightens up and starts walking again, though a few guys jog up beside her and start chatting her up.');
                            scene.actions([
                              { label: 'Continue', goto: ['uni_grounds', ''] },
                            ]);
                          } else {
                            if (((s as any).temp ?? 0) === 14) {
                              scene.img('images/locations/city/island/university/campus/events/day/warm/big_things.jpg');
                              scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. There\'s a couple of girls walking just ahead of you. As they pass by a group of guys, one of the girls lifts her skirt to show off her panties while her friend points at her to get the guys\' attention. You can\'t help but notice what\'s written on the panties. "I may be small, but I LOVE big things" with a little smiley face at the end. You smile as the guys stop dead in their tracks, causing you to have to walk around them.');
                              scene.actions([
                                { label: 'Continue', goto: ['uni_grounds', ''] },
                              ]);
                            } else {
                              if (((s as any).temp ?? 0) === 15) {
                                scene.img('images/locations/city/island/university/campus/events/day/warm/change_panties.jpg');
                                scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. There is a group of guys and girls sitting around talking to one another. You see a girl in the group removing her panties. From the position she\'s sitting in, it gives anyone looking at her a clear view of her shaven pussy. Given the look on her face, you\'re sure that she\'s well aware of this fact. She hands her panties to one of the guys in the group, who all seemed surprised at first before they start laughing. You guess this was some kind of bet or dare.');
                                qspCall(s, 'arousal', 'voyeur', 2);
                                qspCall(s, 'arousal', 'end');
                                scene.actions([
                                  { label: 'Continue', goto: ['uni_grounds', ''] },
                                ]);
                              } else {
                                if (((s as any).temp ?? 0) === 16) {
                                  scene.img('images/locations/city/island/university/campus/events/day/warm/drunk_plants.jpg');
                                  scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. Ahead of you, you see a girl standing near some hedges. She looks to be on her phone and is peering into the bushes. When you get closer, you notice a second girl laying face down in the bushes, surrounded by numerous bottles. You overhear the girl on her phone talking with campus security and decide to continue on your way.');
                                  scene.actions([
                                    { label: 'Continue', goto: ['uni_grounds', ''] },
                                  ]);
                                } else {
                                  if (((s as any).temp ?? 0) === 17) {
                                    scene.img('images/locations/city/island/university/campus/events/day/warm/ebony_ivory.jpg');
                                    scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. A Russian girl and an African girl are sitting side by side in the grass talking to one another. You suspect the two might be more than friends, though they\'re quite subtle about it. While it may be slightly more tolerated here on campus and on the island compared to the rest of the city, homosexuals are still looked down upon - as are interracial couples in general.');
                                    scene.actions([
                                      { label: 'Continue', goto: ['uni_grounds', ''] },
                                    ]);
                                  } else {
                                    if (((s as any).temp ?? 0) === 18) {
                                      scene.img('images/locations/city/island/university/campus/events/day/warm/femdom_smother.jpg');
                                      scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. You spot a boy and girl on the grass, just off the pathway. The boy is spreading a blanket on the ground, while the girl is bossing him around. She seems to be really frustrated with him, and when she lays on the blanket, she barks for him to put his face against her ass. She wraps her ankles behind his head and begins forcing his face against her ass. The girl locks eyes with you and smirks as she dominates the boy.');
                                      scene.actions([
                                        { label: 'Continue', goto: ['uni_grounds', ''] },
                                      ]);
                                    } else {
                                      if (((s as any).temp ?? 0) === 19) {
                                        (s as any).minut = ((s as any).minut ?? 0) + 2;
                                        scene.img('images/locations/city/island/university/campus/events/day/warm/flyer1.jpg');
                                        scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. Your walk is interrupted by a boy shoving a flier in your hand, telling you how great or important this is. You smile as you take the flier; you get handed several of these a week. Some are to parties, activity clubs, off-campus events, on-campus events, or just rallies for a wide variety of topics.');
                                        scene.actions([
                                          { label: 'Continue', goto: ['uni_grounds', ''] },
                                        ]);
                                      } else {
                                        if (((s as any).temp ?? 0) === 20) {
                                          (s as any).minut = ((s as any).minut ?? 0) + 2;
                                          scene.img('images/locations/city/island/university/campus/events/day/warm/girl_fight\' + rand(1, 2) + \'.jpg');
                                          scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. You see a group of girls ahead of you. Two of them are arguing over some boy, apparently one of their boyfriends. One of the girls is accusing the other of cheating with him and she ends up tackling the other girl to the ground. Their group spreads out to watch the two of them fight.');
                                          scene.actions([
                                            { label: 'Continue', goto: ['uni_grounds', ''] },
                                          ]);
                                        } else {
                                          if (((s as any).temp ?? 0) === 21) {
                                            scene.img('images/locations/city/island/university/campus/events/day/warm/girl_weed.jpg');
                                            scene.text('As you cross the campus you notice a lot of people are out taking advantage of the good weather. One girl in particular seems to be enjoying herself as she hangs upside down from one of the railings, flashing her breasts at passers-by with a huge grin, including you.');
                                            qspCall(s, 'arousal', 'voyeur', 2);
                                            qspCall(s, 'arousal', 'end');
                                            scene.actions([
                                              { label: 'Continue', goto: ['uni_grounds', ''] },
                                            ]);
                                          } else {
                                            if (((s as any).temp ?? 0) === 22) {
                                              scene.img('images/locations/city/island/university/campus/events/day/warm/lesbian_makeout1.jpg');
                                              scene.text('As you cross the campus you notice a lot of people are out taking advantage of the good weather. You spot a small group of boys watching two girls passionately kissing each other. They seem to be completely unaware of your or anyone else\'s presence.');
                                              qspCall(s, 'arousal', 'voyeur', 2);
                                              qspCall(s, 'arousal', 'end');
                                              scene.actions([
                                                { label: 'Continue', goto: ['uni_grounds', ''] },
                                              ]);
                                            } else {
                                              if (((s as any).temp ?? 0) === 23) {
                                                scene.img('images/locations/city/island/university/campus/events/day/warm/makeup1.jpg');
                                                scene.text('As you cross the campus you notice a lot of people are out taking advantage of the good weather. You notice a girl sitting on a bench alone, who seems intent on touching up her makeup so it looks perfect. You figure she\'s waiting for someone special.');
                                                scene.actions([
                                                  { label: 'Continue', goto: ['uni_grounds', ''] },
                                                ]);
                                              } else {
                                                if (((s as any).temp ?? 0) === 24) {
                                                  scene.img('images/locations/city/island/university/campus/events/day/warm/naked_run_start\' + rand(1, 2) + \'.jpg');
                                                  scene.text('As you cross the campus, you notice a lot of people are just standing around as if they\'re waiting for something. You start to ask one of them what\'s happening, but you soon have your answer. A dozen or so of them in the middle of the circle start quickly stripping down, most only to their shoes as those watching film and shout words of encouragement to them. Once most of them are naked, they start breaking out of the circle and start running across the quad. You can\'t help but smile in amusement; something like this would have never happened back in Pavlovsk. It\'s nice seeing a more relaxed attitude at the university. Once the last of the streakers is out of sight, you continue on your way.');
                                                  qspCall(s, 'arousal', 'voyeur', 5);
                                                  qspCall(s, 'arousal', 'end');
                                                  scene.actions([
                                                    { label: 'Continue', goto: ['uni_grounds', ''] },
                                                  ]);
                                                } else {
                                                  if (((s as any).temp ?? 0) === 25) {
                                                    scene.img('images/locations/city/island/university/campus/events/day/warm/naked_run\' + rand(1, 2) + \'.jpg');
                                                    scene.text('As you cross the campus, you notice a lot of people are just standing around like they\'re waiting for something. You start to ask one of them what\'s happening, but you soon have your answer. A group of naked students of both genders go streaking by. You watch while others laugh at, film or shout encouragement at them. You can\'t help but smile in amusement; something like this would have never happened back in Pavlovsk. It\'s nice seeing a more relaxed attitude at the university. Once the last of the streakers is out of sight, you continue on your way.');
                                                    qspCall(s, 'arousal', 'voyeur', 5);
                                                    qspCall(s, 'arousal', 'end');
                                                    scene.actions([
                                                      { label: 'Continue', goto: ['uni_grounds', ''] },
                                                    ]);
                                                  } else {
                                                    if (((s as any).temp ?? 0) === 26) {
                                                      scene.img('images/locations/city/island/university/campus/events/day/warm/sunbathing_girls1.jpg');
                                                      scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. Groups of people can be seen sitting and talking, playing frisbee or just walking around. What draws most people\'s attention, especially the guys, are the group of girls in bikinis sunbathing on the grass.');
                                                      scene.actions([
                                                        { label: 'Continue', goto: ['uni_grounds', ''] },
                                                      ]);
                                                    } else {
                                                      if (((s as any).temp ?? 0) === 27) {
                                                        scene.img('images/locations/city/island/university/campus/events/day/warm/titflash\' + rand(1, 2) + \'.jpg');
                                                        scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. One girl in particular is amusing herself by flashing her breasts at everyone she passes, grinning the whole time. She soon exposes her breasts at you when you pass her by.');
                                                        qspCall(s, 'arousal', 'voyeur', 2);
                                                        qspCall(s, 'arousal', 'end');
                                                        scene.actions([
                                                          { label: 'Continue', goto: ['uni_grounds', ''] },
                                                        ]);
                                                      } else {
                                                        if (((s as any).temp ?? 0) === 28) {
                                                          scene.img('images/locations/city/island/university/campus/events/day/warm/upsidedown_titflash.jpg');
                                                          scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. There is a girl hanging upside down from the railings flashing her breasts at everyone who walks by, including you.');
                                                          qspCall(s, 'arousal', 'voyeur', 2);
                                                          qspCall(s, 'arousal', 'end');
                                                          scene.actions([
                                                            { label: 'Continue', goto: ['uni_grounds', ''] },
                                                          ]);
                                                        } else {
                                                          if (((s as any).temp ?? 0) === 29) {
                                                            (s as any).minut = ((s as any).minut ?? 0) + 3;
                                                            scene.img('images/locations/city/island/university/campus/events/day/warm/bench_3boys_music.jpg');
                                                            scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. On one of the benches, you pass by three boys. Two of them have guitars and are playing, while the guy in the middle sings softly. You notice a number of girls have stopped to listen to them; you admit they are not bad. Good amateurs but far from being as good as some of the local bands you heard back in Pavlovsk.');
                                                            scene.actions([
                                                              { label: 'Continue', goto: ['uni_grounds', ''] },
                                                            ]);
                                                          } else {
                                                            if (((s as any).temp ?? 0) === 30) {
                                                              (s as any).minut = ((s as any).minut ?? 0) + 2;
                                                              scene.img('images/locations/city/island/university/campus/events/day/warm/bench_chess1.jpg');
                                                              scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. You notice two guys sitting on a bench with a chess board between them. They seem very intent on the game they are playing, taking a lot of time between moves. Someone occasionally stops to look, but as soon as they start to say anything the two guys interrupt them and ask them not to offer advice. As you pass by, you can only assume these two are very serious about chess.');
                                                              scene.actions([
                                                                { label: 'Continue', goto: ['uni_grounds', ''] },
                                                              ]);
                                                            } else {
                                                              scene.img('images/locations/city/island/university/campus/events/day/warm/bench_study1.jpg');
                                                              scene.text('As you cross the campus, you notice a lot of people are out taking advantage of the good weather. There is a girl sitting on a bench with a textbook in her lap. It looks like she\'s decided to study outside on this nice day. Perhaps you should do the same sometime?');
                                                              scene.actions([
                                                                { label: 'Continue', goto: ['uni_grounds', ''] },
                                                              ]);
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
  // TODO-QSP: end
  scene.build();
}

function enterDayCold(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = Math.floor(Math.random() * 5) + 1;
  if (((s as any).temp ?? 0) === 1) {
    scene.img('images/locations/city/island/university/campus/events/day/cold/4girl_titflashw.jpg');
    scene.text('Up ahead, you see four girls walking in your direction. As they pass by people, they flash their tits despite the cold weather. They seem to be enjoying themselves, and sure enough when they reach you, they exposes their chests again. You smile at them, shake your head, and continue on your way.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['uni_grounds', ''] },
    ]);
  } else {
    if (((s as any).temp ?? 0) === 2) {
      scene.img('images/locations/city/island/university/campus/events/day/cold/naked_runw\' + rand(1, 2) + \'.jpg');
      scene.text('As you cross the campus you notice a lot of people are just standing around like they\'re waiting for something. You start to ask one of them what\'s happening, but you soon have your answer. A group of naked students of both genders go streaking by, with a few of them wearing caps or scarves. As you watch, others laugh, film it and shout encouragements. You can\'t help but smile in amusement; something like this would have never happened back in Pavlovsk. It\'s nice seeing a more relaxed attitude at the university. Once the last of the streakers is out of sight, you continue on your way.');
      qspCall(s, 'arousal', 'voyeur', 5);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', goto: ['uni_grounds', ''] },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 3) {
        scene.img('images/locations/city/island/university/campus/events/day/cold/1nakedg_groupg1.jpg');
        scene.text('As you cross the campus, you spot a group of girls giggling, along with what sounds like some friendly arguing as well. Finally, one of the girls throws up her hands in defeat and starts stripping out of her clothes, despite the cold weather. When she notices all of the attention she\'s attracted, she starts swearing at her friends, who counter that she shouldn\'t have taken the bet if she couldn\'t pay up. The girl takes off running across the campus and her friends follow while laughing.');
        qspCall(s, 'arousal', 'voyeur', 3);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Continue', goto: ['uni_grounds', ''] },
        ]);
      } else {
        if (((s as any).temp ?? 0) === 4) {
          scene.img('images/locations/city/island/university/campus/events/day/cold/bff_titflash.jpg');
          scene.text('As you\'re walking along, you see some girls passing by some guys. One of the girls is eyeing the boys and her friend whispers something to her. The blonde girl turns to the guys and opens her coat and her friend helps pull up her shirt, exposing the girl\'s breasts. The guys stop and stare while the blonde blushes, though she seems kind of excited as well. As you walk by them, the girls start talking to the guys.');
          qspCall(s, 'arousal', 'voyeur', 2);
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Continue', goto: ['uni_grounds', ''] },
          ]);
        } else {
          (s as any).minut = ((s as any).minut ?? 0) + 2;
          scene.img('images/locations/city/island/university/campus/events/day/cold/bully_girls.jpg');
          scene.text('As you cross the campus, you spot three girls tailing another. When they catch up to her, two of the girls grab her by the arms while the third girl snatches her backpack and begins dumping its contents on the ground before taking her purse and doing the same. She then grabs the girl by her shirt and says something to her before pushing her to the ground. Having put up with Christina, you know what this girl is going through. You had hoped that bullying wouldn\'t be in an issue in university. A few boys stop and help the girl back to her feet and start gathering her things as you continue on your way.');
          scene.actions([
            { label: 'Continue', goto: ['uni_grounds', ''] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNightWarm(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = Math.floor(Math.random() * 21) + 1;
  if (((s as any).temp ?? 0) === 1) {
    scene.img('images/locations/city/island/university/campus/events/night/warm/1nakedg_coed_group1.jpg');
    scene.text('As you walk by a group of guys, you hear them trying to talk a girl wearing a dress into taking off her panties. Even her friend tries encouraging her. After a moment, the girl glances around, and not seeing too many people, starts to pull her panties down.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep going', goto: ['uni_grounds', ''] },
      { label: 'Stop and watch', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/campus/events/night/warm/1nakedg_coed_group2.jpg');
    scene.text('The guys hoot and holler, drawing a little more attention that makes the girl in the dress blush. One of the guys tells her to show her tits and they\'re soon all chanting for her to do it. She bites her lower lip and looks around, meeting your eyes briefly before she looks back at her friend, who nods at her. She then pulls down the top of her dress, showing off her tits.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stop watching', goto: ['uni_grounds', ''] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/campus/events/night/warm/1nakedg_coed_group3.jpg');
    scene.text('A few of the guys step over to the girl and try to tug down her dress, but she fends them off and steps back. Her friend tries to convince her to take it off, and the guys chant for her to do it. She turns to face the bench and starts sliding her dress off.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stop watching', goto: ['uni_grounds', ''] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/campus/events/night/warm/1nakedg_coed_group4.jpg');
    scene.text('Once she\'s out of the dress and fully naked, she looks like she\'s starting to enjoy the attention she\'s getting. She even goes as far as to start posing for selfies with the group of guys and her friend. Having watched this unfold, you decide it\'s time to head on your way.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stop watching', goto: ['uni_grounds', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).temp ?? 0) === 2) {
      scene.img('images/locations/city/island/university/campus/events/night/warm/2girls_dryhump1.jpg');
      scene.text('You see two cute girls being followed by a couple of guys as they walk across the quad. The guys are obviously trying to flirt with the girls, but they don\'t take the hint that the girls aren\'t interested. Suddenly, one of the girls grabs the other and bends her over before she starts slamming her hips against her ass like she\'s fucking her ass. The other girl moans out loud as the first girl looks straight at the guys. "We\'re going back to our dorm room and I\'m going to fuck her brains out because we don\'t need you," she announces. "But you can go back to your room and jerk off thinking about us." They both laugh and run off holding hands, leaving the guys turned on, confused and, most of all, frustrated.');
      qspCall(s, 'arousal', 'voyeur', 2);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', goto: ['uni_grounds', ''] },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 3) {
        scene.img('images/locations/city/island/university/campus/events/night/warm/2girls_makeout_on_bench1.jpg');
        scene.text('As you pass by one of the many benches scattered around the grounds, you see two girls making out. By the time you walk past them, they are hot and heavy; one of the girls is laying on her back, with her legs wrapped around the other as they passionately kiss. They seem to be completely unaware of your presence or simply don\'t care.');
        qspCall(s, 'arousal', 'voyeur', 2);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Continue', goto: ['uni_grounds', ''] },
        ]);
      } else {
        if (((s as any).temp ?? 0) === 4) {
          scene.img('images/locations/city/island/university/campus/events/night/warm/3girls_horseplay.jpg');
          scene.text('As you\'re walking along campus, you hear some pretty loud music and soon find the source: Three girls are hanging out in the middle of the quad listening to a radio. When a new song begins, the girls squeal and jump to their feet and start dancing with each other. A group of guys are walking by and start watching the trio. The girls notice this and begin grinding on each other, which the guys take an immediate liking to. They walk over to the girls and start flirting.');
          scene.actions([
            { label: 'Continue', goto: ['uni_grounds', ''] },
          ]);
        } else {
          if (((s as any).temp ?? 0) === 5) {
            scene.img('images/locations/city/island/university/campus/events/night/warm/bench_girl1.jpg');
            scene.text('Your route takes you near the sports field, where you spot a girl sitting at one of the outdoor tables near the fenced off fields. She looks to be fairly drunk; there are several empty cans on the table in front of her. When she sees you, she gives you a big smile but before you can say anything, a guy comes up behind her and grabs her, making her squeal. When she turns to see who it is, she lightly smacks him and they both start laughing and he sits down beside her.');
            scene.actions([
              { label: 'Continue', goto: ['uni_grounds', ''] },
            ]);
          } else {
            if (((s as any).temp ?? 0) === 6) {
              scene.img('images/locations/city/island/university/campus/events/night/warm/bottomless_girl.jpg');
              scene.text('In one of the darker areas of the quad, you notice someone laying on the ground. At first you think they might be hurt, but as you step closer you can see the girl looks completely drunk and has lost her panties. She gives you a drunk smile and the peace sign, and you can\'t help but look at her bare pussy and wonder why she\'s out here like this. Not having an answer and doubting you\'ll get one, you continue on your way.');
              qspCall(s, 'arousal', 'voyeur', 2);
              qspCall(s, 'arousal', 'end');
              scene.actions([
                { label: 'Continue', goto: ['uni_grounds', ''] },
              ]);
            } else {
              if (((s as any).temp ?? 0) === 7) {
                scene.img('images/locations/city/island/university/campus/events/night/warm/femdom_foot_kiss\' + rand(1, 2) + \'.jpg');
                scene.text('As you approach one of the buildings where the grass gives way to concrete, you spot a boy kneeling in front of a girl. You\'re not close enough to them to hear what they\'re saying, and they\'re not being very loud. As you near them, you overhear her telling the boy to kiss her shoe. He timidly notices you and blushes as he lifts her ankle and begins kissing her shoe. After a few pecks, she pulls her foot back and tells him to "kiss it where it is". He crawls closer to her and starts kissing her shoe again. The girl looks up at you and smiles proudly as you walk by. You then overhear her telling him to lick her shoe clean. It seems she\'s found a boy to dominate.');
                scene.actions([
                  { label: 'Continue', goto: ['uni_grounds', ''] },
                ]);
              } else {
                if (((s as any).temp ?? 0) === 8) {
                  scene.img('images/locations/city/island/university/campus/events/night/warm/ggwedgie1.jpg');
                  scene.text('A group of students are walking along one of the paths together, talking and laughing. The girl furthest in the back walks up behind another girl, grabs the back of her panties and pulls them up, giving her a wedgie. The victim is struggling to free herself while their friends laugh at the two of them. Once she finally frees herself from the wedgie, she starts chasing the first girl as the rest of the group take off after them.');
                  scene.actions([
                    { label: 'Continue', goto: ['uni_grounds', ''] },
                  ]);
                } else {
                  if (((s as any).temp ?? 0) === 9) {
                    scene.img('images/locations/city/island/university/campus/events/night/warm/girl_fight1.jpg');
                    scene.text('You come across a group of girls and see two of them arguing over a guy. One of the girls is accusing the other of having slept with her boyfriend. After some more yelling, the first girl jumps on the other and they crash to the ground and start fighting. Their friends don\'t try to break them up, instead choosing to watch them go at it.');
                    scene.actions([
                      { label: 'Continue', goto: ['uni_grounds', ''] },
                    ]);
                  } else {
                    if (((s as any).temp ?? 0) === 10) {
                      scene.img('images/locations/city/island/university/campus/events/night/warm/girl_laying_on_bench.jpg');
                      scene.text('As you walk along one of the paths, you see a girl laying on one of the benches. When you walk by, she smiles at you but doesn\'t say anything. Seems she\'s just out enjoying the night air.');
                      scene.actions([
                        { label: 'Continue', goto: ['uni_grounds', ''] },
                      ]);
                    } else {
                      if (((s as any).temp ?? 0) === 11) {
                        scene.img('images/locations/city/island/university/campus/events/night/warm/girl_pants_girl1.jpg');
                        scene.text('Out on the grass, there is a small group of students laughing and talking. One of the girls suddenly grabs another girl\'s shorts and yanks them down to her ankles. The others hoot and holler, with some whistling as both girls laugh. The girl is slow to pull her shorts back up, seeming to enjoying all the cat calls she\'s getting.');
                        qspCall(s, 'arousal', 'voyeur', 2);
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Continue', goto: ['uni_grounds', ''] },
                        ]);
                      } else {
                        if (((s as any).temp ?? 0) === 12) {
                          scene.img('images/locations/city/island/university/campus/events/night/warm/girl_running_naked1.jpg');
                          scene.text('You see a naked girl sprinting in your direction, her face bright red in embarrassment. She has one arm across her breasts as her other hand tries to cover her pussy. Another girl, fully dressed, is behind her but it doesn\'t appear that she\'s chasing the naked girl. Several people have also taken notice of the girl and have started recording her with their phones, which only further embarrasses the poor girl. You\'re not sure what you just witnessed, but you remember people telling you that college life would be wild.');
                          qspCall(s, 'arousal', 'voyeur', 2);
                          qspCall(s, 'arousal', 'end');
                          scene.actions([
                            { label: 'Continue', goto: ['uni_grounds', ''] },
                          ]);
                        } else {
                          if (((s as any).temp ?? 0) === 13) {
                            scene.img('images/locations/city/island/university/campus/events/night/warm/girl_vomit1.jpg');
                            scene.text('You across a group of nicely dressed students all stumbling along clearly drunk, though some are worse than others. A few of them are leaning against each other to keep their balance when a girl in the group suddenly lunges over to the wall and starts puking her guts out as one of the less drunk guys sighs and reluctantly walks over to try and help her out.');
                            scene.actions([
                              { label: 'Continue', goto: ['uni_grounds', ''] },
                            ]);
                          } else {
                            if (((s as any).temp ?? 0) === 14) {
                              scene.img('images/locations/city/island/university/campus/events/night/warm/help_pee1.jpg');
                              scene.text('There\'s a movie festival happening out on the quad tonight. A lot of students are hanging out near a wall that\'s temporarily been constructed to project the films on, but there are others milling around the edges in the dark. A few of these latter students have taken the opportunity to start drinking, and quite a few of them are already drunk. One of them, a guy with two cups in his hands, is stumbling over to you with a girl beside him. He loudly tells the girl that he needs to pee and makes a show of holding up the two full cups of beer. The girl shakes her head before unzipping his shorts and pulling out his dick. She holds his dick and aims it as he starts to urinate. As you walk by him, trying to ignore what he\'s doing, he turns to you and gives you a wide, drunken grin.');
                              qspCall(s, 'arousal', 'voyeur', 2);
                              qspCall(s, 'arousal', 'end');
                              scene.actions([
                                { label: 'Continue', goto: ['uni_grounds', ''] },
                              ]);
                            } else {
                              if (((s as any).temp ?? 0) === 15) {
                                scene.img('images/locations/city/island/university/campus/events/night/warm/ir_pickup1.jpg');
                                scene.text('You see an African boy with two white girls hanging out near one of the buildings. He has his arm around one in a tight dress, while he drops his other hand to squeeze the ass of the other. They\'re carrying a bottle of vodka with them and they all seem to be fairly drunk. The girl in the dress starts rubbing on the boy\'s chest as he continues playing with her friend\'s ass, then reaches down and grabs his crotch, which only makes him grin. When he sees you, he winks and then starts leading the two girls off towards the dorm building.');
                                qspCall(s, 'arousal', 'voyeur', 2);
                                qspCall(s, 'arousal', 'end');
                                scene.actions([
                                  { label: 'Continue', goto: ['uni_grounds', ''] },
                                ]);
                              } else {
                                if (((s as any).temp ?? 0) === 16) {
                                  scene.img('images/locations/city/island/university/campus/events/night/warm/naked_girl1.jpg');
                                  scene.text('Just ahead of you in the dark, you see a naked girl in boots walking along. She just walks ahead of you, passing a few others who check her out, or pull out their phones to snap photos of her, but she doesn\'t seem to mind as she continues on like it\'s no big deal.');
                                  qspCall(s, 'arousal', 'voyeur', 2);
                                  qspCall(s, 'arousal', 'end');
                                  scene.actions([
                                    { label: 'Continue', goto: ['uni_grounds', ''] },
                                  ]);
                                } else {
                                  if (((s as any).temp ?? 0) === 17) {
                                    scene.img('images/locations/city/island/university/campus/events/night/warm/passedout_girlb1.jpg');
                                    scene.text('As you pass one of the buildings, you see a girl passed out on the steps with her phone in her hand. Just as you\'re considering going over to help her, a group of girls come rushing up and start helping the girl up. It looks like she managed to call her friends before she passed out.');
                                    scene.actions([
                                      { label: 'Continue', goto: ['uni_grounds', ''] },
                                    ]);
                                  } else {
                                    if (((s as any).temp ?? 0) === 18) {
                                      scene.img('images/locations/city/island/university/campus/events/night/warm/2girls_dryhump2.jpg');
                                      scene.text('You see two cute girls being followed by a group of guys walking across the quad. The guys are calling out to the girls, trying to pick them up, but it\'s clearly not working. When they reach one of the buildings, one of the girls grabs the other, turns her around and starts grinding against her ass. The second girl laughs and starts moaning along. "Is that what you boys are hoping for tonight?" the first girl shouts. The guys grin and nod their heads enthusiastically. "Well, too bad," she laughs. "The only action you assholes are getting tonight is from your own hands!" The two girls laugh and run off, leaving the group of guys, and you, bewildered.');
                                      qspCall(s, 'arousal', 'voyeur', 2);
                                      qspCall(s, 'arousal', 'end');
                                      scene.actions([
                                        { label: 'Continue', goto: ['uni_grounds', ''] },
                                      ]);
                                    } else {
                                      if (((s as any).temp ?? 0) === 19) {
                                        scene.img('images/locations/city/island/university/campus/events/night/warm/2girls_makeout_onbench2.jpg');
                                        scene.text('You spot two girls on one of the many benches scattered around the grounds. They\'re smoking and drinking when one of them suddenly leans in and starts kissing the other girl as they quickly start making out. They either don\'t care about anyone seeing them, or are unaware that anyone else is nearby.');
                                        qspCall(s, 'arousal', 'voyeur', 2);
                                        qspCall(s, 'arousal', 'end');
                                        scene.actions([
                                          { label: 'Continue', goto: ['uni_grounds', ''] },
                                        ]);
                                      } else {
                                        if (((s as any).temp ?? 0) === 20) {
                                          scene.img('images/locations/city/island/university/campus/events/night/warm/handjob1.jpg');
                                          scene.text('As you pass by one of the buildings, you notice a guy and girl side by side. Her arm is moving up and down and his shirt is pulled up. When you get closer, you can see that his pants are unbuttoned and the girl is giving him a handjob. She gives you a huge smile as you walk past them.');
                                          qspCall(s, 'arousal', 'voyeur_sex', 2);
                                          qspCall(s, 'arousal', 'end');
                                          scene.actions([
                                            { label: 'Continue', goto: ['uni_grounds', ''] },
                                          ]);
                                        } else {
                                          scene.img('images/locations/city/island/university/campus/events/night/warm/passedout_girlq1.jpg');
                                          scene.text('As you walk along one of the paths of the quad, you see a girl passed out on the grass with her phone in her hand. Just as you\'re considering going over to help her, a group of girls come rushing up and start helping the girl up. It seems she managed to call her friends before she passed out.');
                                          scene.actions([
                                            { label: 'Continue', goto: ['uni_grounds', ''] },
                                          ]);
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
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'day_warm':
      enterDayWarm(s, scene);
      break;
    case 'day_cold':
      enterDayCold(s, scene);
      break;
    case 'night_warm':
      enterNightWarm(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_grounds: LocationDef = {
  name: 'uni_grounds',
  title: 'As you head to class, you overhear many of your fellow stude',
  region: 'other',
  locationType: 'public_outdoors',
  description: ['As you head to class, you overhear many of your fellow students talking. It seems someone has made websites ranking both the male and female students on how bangable they are. You overhear someone mention the links and make a note of them to check when you get a chance.'],
  enter: enter,
};
