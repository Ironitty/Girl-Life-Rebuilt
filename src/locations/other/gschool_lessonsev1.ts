import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFizRand(s: GameState, scene: SceneBuilder): void {
  (s as any).fizperand = Math.floor(Math.random() * 32) + 1;
  if (((s as any).fizperand ?? 0) === 1  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/fizperand2.jpg');
    scene.text('During the warm-up for gym class, Coach Pavlovich comes over to assist you with your warm-up, his groin grinding against your ass as he does. If looks could kill, Christina\'s jealous gaze would have had you dead on the ground by now.');
  } else {
    if (((s as any).fizperand ?? 0) === 2) {
      scene.actions([{ label: 'Continue', goto: ['gschool_lessonsev1', 'fiz2'] }]);
    } else {
      if (((s as any).fizperand ?? 0) === 3) {
        qspCall(s, 'mood', 'raise', 'small');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/school/gym/fizperand4.jpg');
        scene.text('After finishing the lesson a little early, you and some of the other girls start to fool around a bit with volleyballs during the \'free play\' section of the class. The four of you show off your \'giant breasts\' to the guys, running around to make them bounce as much as you can. As the lesson ends, you all share a laugh as you put the volleyballs back where they belong.');
      } else {
        if (((s as any).fizperand ?? 0) === 4  &&  ((s as any).npc_had_sex ?? 0)?.['A3']) {
          qspCall(s, 'mood', 'raise', 'small');
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/school/gym/fizperand5.jpg');
          scene.text('Ivan offers to help you with a workout on the exercise balls. Lariska is enthusiastic about the idea and asks if she can join in. You agree and after you and Lariska each fetch a ball and get ready, Ivan has you do all sorts of stretches and exercises.');
          scene.text('After a while, you realize that in every pose Ivan suggests, you\'re showing off either your breasts or your ass. One look at his face confirms that this was his intention all along. With a lewd smile, you redouble your efforts and show off your ass as much as you can.');
          qspCall(s, 'arousal', 'foreplay', 10, 'exhibitionism');
          qspCall(s, 'arousal', 'end');
        } else {
          if (((s as any).fizperand ?? 0) === 5) {
            qspCall(s, 'mood', 'raise', 'small');
            qspCall(s, 'stat', '');
            scene.img('images/locations/pavlovsk/school/gym/fizperand6.jpg');
            if (qspFunc(s, 'pcs_has_attr', 'body_ass_bubble')  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
              scene.text('You\'re training with some free weights today. In the current exercise, you\'re supposed to keep your legs straight while the dumbbells are on the ground. Noticing the class has grown awfully quiet, you look between your legs and notice the majority of them gawking at your shapely ass. You hold the position for a few seconds longer than you need to, reveling in their praises as they compliment your figure.');
              qspCall(s, 'arousal', 'foreplay', 10, 'exhibitionism');
              qspCall(s, 'arousal', 'end');
            } else {
              scene.text('You\'re training with some free weights today. As you do your routine, you notice that the class has grown awfully quiet and glance over to see most of them gawking at Albina, who has bent over while also working out with weights and is showing off her toned bubble butt to everyone watching. She soon straightens back up and gives all of them a dirty look.');
            }
          } else {
            if (((s as any).fizperand ?? 0) === 6) {
              scene.img('images/locations/pavlovsk/school/gym/gymfight.jpg');
              scene.text('You hear a commotion from the other side of the room and look over to see Dan and Roman shoving each other. Roman shoves Dan again and it quickly starts escalating. A few punches are thrown and the two of them are soon down on the ground fighting. The coach rushes over and quickly pulls them apart before sending them to the principal.');
            } else {
              if (((s as any).fizperand ?? 0) === 7) {
                scene.img('images/locations/pavlovsk/school/gym/tinydick.jpg');
                scene.text('During a break in gym class, you and several other girls are talking when Igor wanders over and tries to chat you all up. You find his efforts amusing at best and you can tell they aren\'t working on the other girls either, yet he seems to think he\'s oozing cool and keeps chatting up the lot of you before Vitek suddenly rushes up behind him, grabs his shorts and yanks them down to his ankles.');
                scene.text('Unfortunately for Igor, his underwear went with the shorts and now he\'s standing half naked in front of a bunch of girls. What\'s worse is that now everyone can see how tiny his dick is, making you and the others gasp and giggle, several girls even pointing and laughing loudly. The whole class is soon in stitches as Igor desperately tries to pull up his shorts and fails, all while cursing at Vitek and calling him all kinds of names. You almost feel sorry for him; not only is he a terrible flirt, but the whole class has seen his tiny dick.');
              } else {
                if (((s as any).fizperand ?? 0) === 8  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
                  scene.actions([{ label: 'Continue', goto: ['gschool_lessonsev1', 'fiz8'] }]);
                } else {
                  if (((s as any).fizperand ?? 0) === 9) {
                    scene.img('images/locations/pavlovsk/school/gym/hanging.jpg');
                    scene.text('During class, Irina gives you a tap on the shoulder, giggling and pointing at Vitek. You look over and see the tip of his dick hanging out the leg of his shorts. You giggle as well, but you are also quite impressed and maybe just a little turned on at the sight; he\'s certainly very well endowed.');
                    scene.text('It takes him a while to notice the girls giggling at him and even longer to figure out why. Once he does, he makes a show of tucking his dick away by adjusting his shorts, all with a huge smile on his face.');
                    qspCall(s, 'arousal', 'erotic_nudity', 2);
                    qspCall(s, 'arousal', 'end');
                  } else {
                    if (((s as any).fizperand ?? 0) === 10  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
                      scene.actions([{ label: 'Continue', goto: ['gschool_lessonsev1', 'fiz10'] }]);
                    } else {
                      if (((s as any).fizperand ?? 0) === 11) {
                        scene.img('images/locations/pavlovsk/school/gym/bendoverff.jpg');
                        scene.text('During class, Lina notices Ivan watching Lariska and moves up behind her before pushing her forward at the shoulders, making her bend over. She proceeds to pretend to hump Lariska, obviously trying to mimic Ivan\'s voice and speech. "Oh Lariska, I want to fuck your ass!" This causes several of the other students to laugh, even Ivan, but it\'s quickly broken up by Mr. Nikolaevich.');
                      } else {
                        if (((s as any).fizperand ?? 0) === 12) {
                          scene.img('images/locations/pavlovsk/school/gym/doublebutt.jpg');
                          scene.text('During class, Lina and Lariska are whispering and giggling about something. After some time, they pull down the back of their shorts to flash their panty-clad asses at several of the more popular jock boys.');
                        } else {
                          if (((s as any).fizperand ?? 0) === 13) {
                            scene.img('images/locations/pavlovsk/school/gym/dry3some.jpg');
                            scene.text('Near the end of class, some girls are chatting when they notice some boys looking their way and start horsing around. One buries her face in her friend\'s breasts as the third pretends to hump her. After a few seconds, once several guys are watching, they stop and laugh as they move away.');
                          } else {
                            if (((s as any).fizperand ?? 0) === 14) {
                              scene.img('images/locations/pavlovsk/school/gym/hardon.jpg');
                              scene.text('At the end of class, everyone is allowed to do their own thing so long as they\'re doing something physical. You see Fedor using the bench press and notice that he\'s sporting a serious hardon, with several of the other girls having noticed as well and giggling about it.');
                            } else {
                              if (((s as any).fizperand ?? 0) === 15) {
                                scene.img('images/locations/pavlovsk/school/gym/stretchhump.jpg');
                                scene.text('Lina is on the floor doing the splits when Lariska comes up behind her and lays on top of her, pretending to hump her. Lina laughs before they break it up.');
                              } else {
                                if (((s as any).fizperand ?? 0) === 16) {
                                  scene.img('images/locations/pavlovsk/school/gym/teaseboys\' + rand(1, 2) + \'.jpg');
                                  scene.text('Lena and Lera notice several of the boys watching them and start teasing them by pretending to make out in front of them. Knowing them, they\'re likely doing it for more than the laughs.');
                                } else {
                                  scene.img('images/locations/pavlovsk/school/gym/fizperand7.jpg');
                                  scene.text('Even though gym class offered a good workout today, it was kind of boring. Nothing happened that\'s worth noting.');
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

function enterFiz2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/gym/fizperand3.jpg');
  scene.text('You and some of the other girls get down on your knees together, enjoying the attention of the watching boys as you all show off your asses to them. Deciding to tease them further, the girls all pull their pants down at the same time.');
  qspCall(s, 'willpower', 'flash', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Pull your pants down [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Pull your pants down [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'flash', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'foreplay', 10, 'exhibitionism');
    qspCall(s, 'mood', 'raise', 'small');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      qspCall(s, 'fame', 'pav', 'sex', 1);
      qspCall(s, 'stat', '');
      scene.text('Everyone is stunned by your lack of panties as you sway your naked ass for the boys. This gains you a lot of attention, but it\'s not great for your reputation. Coach Pavlovich is keeping his distance, unsure what to think or do.');
    } else {
      qspCall(s, 'stat', '');
      scene.text('You join in and enjoy the small boost of confidence as the boys drool over the panty-clad asses all swaying in front of them. Coach Pavlovich is keeping his distance, unsure what to think or do.');
    }
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pull your pants down', handler: (st: GameState) => {
    scene.text('You refrain from following their example and just sway your ass for the boys, but they seem to be more interested in the other girls.');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFiz8(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/wedgie.jpg');
  scene.text('During a break in gym class, you\'re chatting with several other girls when you feel someone\'s hands reach down the back of your shorts, grab hold of your panties and sharply yank them up so hard that your feet actually lift off the ground for a moment.');
  scene.text('You cry out in pain, quickly turn around and see Dan laughing as several others watch and laugh as well.');
  qspCall(s, 'willpower', 'misc', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Kick him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Kick him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('He starts to back up, but you manage to kick him hard in the shin, causing him to hop around on one leg while holding his shin in pain, which causes the others to laugh harder at him.');
    scene.text('A few of the other girls give the guys dirty looks and walk over to give you moral support and use their bodies to shield you from the rest of the class so you can peel your panties out of your ass and put everything back in its proper place.');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
    ]);
  }
  if (((s as any).grupTipe ?? 0) === 2  ||  ((s as any).grupTipe ?? 0) === 4) {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Beat his ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Beat his ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    (s as any).demerit = ((s as any).demerit ?? 0) + (20);
    scene.img('images/locations/pavlovsk/school/gym/beathisass.jpg');
    scene.text('Your first kick catches him on the shin, causing him to hop around on one leg. Not expecting any more, his attention wanders and he doesn\'t see you charging him. You bash into him, knocking him to the floor, and quickly climb on top of him before you start furiously punching him.');
    scene.text('He tries to block your incoming blows to no avail. Luckily for him, the coach arrives, grabs you by the back of the neck and effortlessly pulls you off of him, causing you to stumble backwards and almost fall on your back. He then steps between the two of you, stopping you from going at it again, and turns to you. "Go to the principal\'s office, <b>NOW</b>!"');
    scene.text('You try to protest, but he doesn\'t want to hear it and points sternly at the door, so you begrudgingly walk out as the coach helps Dan to his feet. Everyone is stunned or amused by your actions - some of the gopniks even look a little impressed.');
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Don\'t retaliate', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (2);
    qspCall(s, 'stat', '');
    scene.text('You give Dan a dirty look, but otherwise don\'t retaliate as some of the other girls come over to shield you from the rest of the class so you can peel your panties out of your ass and put everything back in its proper place.');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFiz10(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/supply.jpg');
  scene.text('The coach asks you to help him get some equipment out of the storage room. You go along and he starts pointing out several things you need for the class, but he gets uncomfortably close and touches you way more than is necessary.');
  scene.text('At one point, you\'re reaching for something high on a shelf and he stands so close behind you, you can feel his dick against your ass as his hands grip your waist. "Careful! We wouldn\'t want you to fall now. Let me steady you."');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'willpower', 'exhib', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Tease him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Tease him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    scene.img('images/locations/pavlovsk/school/gym/fizperand6.jpg');
    scene.text('You decide to have a little fun of your own. You \'accidentally\' drop something while he\'s keeping you steady and bend over to pick it up, pushing your ass up against his crotch. You then grind yourself against him and can feel him getting hard before you pick up the dropped item and quickly stand up before heading out of the room.');
    scene.text('You glance back and flash him a sweet smile, noticing he\'s trying to hide the erection in his shorts. You add a bit of extra sway to your hips as you walk away.');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Do nothing', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/storage1.jpg');
    scene.text('When you don\'t object, his hands slide under your shirt and squeeze your breasts. He then pulls your shirt over your head before you can even protest.');
    qspCall(s, 'arousal', 'foreplay', 2, 'sub');
    scene.actions([
      { label: 'Say nothing', goto: ['gschool_sex', 'storagesex'] },
      { label: 'Pull away', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/storageno.jpg');
    scene.text('You jerk away from him and snatch your shirt out of his hand. "Mr. Pavlovich, I\'m not that kind of girl!"');
    scene.text('He laughs. "That\'s not what I hear…"');
    scene.text('You give him a dirty look and put your shirt back on before storming out.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
    ]);
  } },
    { label: 'Leave the creep', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/school/gym/supply.jpg');
    scene.text('Once you have the equipment, you duck out of the room as quickly as you can, not looking back at him.');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBiology(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 6) + 0) > 0) {
    (s as any).school_event_hour = 1;
    (s as any).scooltiperand = Math.floor(Math.random() * 24) + 1;
    if (((s as any).scooltiperand ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/events/scoolrand_2.jpg');
      scene.text('Irina looks like she has it all figured out. Her grades are excellent, all the guys in school like her, and she doesn\'t have to answer to anyone. She\'s currently sitting back in a chair, giving herself a manicure.');
    } else {
      if (((s as any).scooltiperand ?? 0) === 2) {
        qspCall(s, 'mood', 'raise', 'small');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/school/events/scoolrand_3.jpg');
        scene.text('As you walk into class, you see some guys have drawn a goofy scene on the blackboard, making it look like they\'re characters in a computer game. You share a laugh with them as you sit down; that certainly brightened your mood.');
      } else {
        if (((s as any).scooltiperand ?? 0) === 3) {
          qspCall(s, 'mood', 'lower', 'small');
          qspCall(s, 'stat', '');
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 0  &&  (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['anus'] > 0)) {
            ((s as any).pcs_memory ?? {})['school_no_panty_cum_flash'] = ((s as any).daystart ?? 0);
            scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
            scene.text('Before you can answer the question Miss Orlov poses, you have to clean the blackboard, but accidentally drop the cloth. As you bend over to pick it up, you suddenly feel something <i>spurt</i> down your leg.');
            if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] > 0) {
              qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 8) + 8);
              scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so are both your holes leaking cum that\'s dribbling down your thigh. Miss Orlov swiftly steps behind you, blocking the view. "You did that before class?" she murmurs to herself in an embarrassed, almost scandalized tone. "<i>Both holes</i>?"');
            } else {
              if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
                qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 5) + 8);
                scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from your pussy and dribbling down your thigh. Miss Orlov swiftly steps behind you, blocking the view. "You did that <i>before class?</i>" she mmurmurs to herself in an embarrassed tone. "Just how sexually active are you?"');
              } else {
                if (((s as any).cum_loc ?? 0)?.['anus'] > 0) {
                  qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 8) + 8);
                  scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from between your ass cheeks and dribbling down your thigh. Miss Orlov swiftly steps behind you, blocking the view. "You did that <i>before class?</i>" she murmurs to herself in an embarrassed tone. "Just how sexually active are you?"');
                }
              }
            }
          } else {
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
              qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 5) + 8);
              ((s as any).pcs_memory ?? {})['school_no_panty_anal_plug_flash'] = ((s as any).daystart ?? 0);
              scene.img('images/locations/pavlovsk/school/events/nopanties_buttplug.jpg');
              scene.text('You\'ve been called up to answer the question written on the blackboard. While solving it, you accidentally drop the cloth used to clean the board and totally forget that not only are you are not wearing any panties, but also have a butt plug stuffed in your ass. When you bend over, you feel your skirt rise up, exposing your bare pussy and ass to your classmates.');
              scene.text('Hearing the flurry of murmurs and whispers, you can\'t help but squeeze and clench around the toy. The boys sound both surprised and intrigued by the sight while the girls whisper to one another that you\'re a slut. From where Miss Orlov sits, she can\'t see what everyone is fussing over, so she starts to move to get a better look, but you quickly snap back up, adjust your skirt and start wiping away at the board as if nothing happened.');
            } else {
              if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).analPlugIn ?? 0))) {
                qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 4) + 1);
                ((s as any).pcs_memory ?? {})['school_no_panty_flash'] = ((s as any).daystart ?? 0);
                scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
                scene.text('Before you can answer the question Miss Orlov poses you, you have to clean the blackboard, but accidentally drop the cloth and totally forget that you\'re not wearing panties. The whistling and shouting from the boys and murmurs of disapproval from most of the girls behind you tell you that everyone has a clear view of your bare ass, and both of your holes are on display for everyone to see. Miss Orlov swiftly steps behind you, blocking the view of your ass as best she can.');
                scene.text('"This is why you should wear panties to school," she softly whispers. "I won\'t report you, but I suggest you wear some in the future."');
              } else {
                qspCall(s, 'fame', 'pav', 'sex', 1);
                scene.img('images/locations/pavlovsk/school/events/scoolrand_4_1.jpg');
                scene.text('When you walk up to the blackboard to answer a question, you trip and fall. Somehow, you manage to fall in such a way that your skirt ends up on your back and the whole class can see your panty-clad ass. You quickly get up and straighten your clothes with a bright red face, trying to ignore the hollering from your classmates. Miss Orlov comes over to help you back up and block their view of your ass as best she can. You can tell that most of the guys and even a few girls definitely appreciated your show, even if it was involuntarily.');
              }
            }
          }
        } else {
          if (((s as any).scooltiperand ?? 0) === 4) {
            scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
            scene.text('During class, you feel a hand slide around your side and grab one of your breasts. You squeak loudly and try to smack Dan\'s hand away, but he jerks it away and all you manage to do is smack your breast.');
            // TODO-QSP: dynamic text: "Is there a problem, Miss <<$pcs_lastname>>?" Miss Orlov asks as you glance arou...
            scene.text(`"Is there a problem, Miss ${((s as any).pcs_lastname ?? 0)}?" Miss Orlov asks as you glance around and notice everyone staring at you as Dan snickers behind you. Miss Orlov looks at you curiously.`);
            qspCall(s, 'willpower', 'misc', 'self', 'medium');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Tell on him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Tell on him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (3);
    qspCall(s, 'npc_relationship', 'modify', 'A10', (-5));
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You straighten up. "Yes. Dan is grabbing my breasts."');
    scene.text('Miss Orlov gives Dan a disapproving look. "Is this true?"');
    scene.text('Dan denies it, but Miss Orlov doesn\'t believe him and sends him to the principal\'s office.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            }
            qspCall(s, 'willpower', 'misc', 'self', 'medium');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Slap Dan [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Slap Dan [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A10', (-1));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    scene.text('You ignore Miss Orlov and turn around, slapping Dan with all the force you can muster. Dan recoils, his hand going to his cheek as students start murmuring about what happened, some of them even laughing.');
    // TODO-QSP: dynamic text: Miss Orlov's voice cuts sharply through the noise. "That's enough of that, Miss ...
    scene.text(`Miss Orlov's voice cuts sharply through the noise. "That's enough of that, Miss ${((s as any).pcs_lastname ?? 0)}! Go to the principal's office!"`);
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Nothing is wrong', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/engaged.jpg');
    scene.text('You shake your head at Miss Orlov, desperately wanting to turn around and strangle Dan, but you don\'t dare now that Miss Orlov is keeping an eye on you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              { label: 'Embarrassed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
    scene.text('You squeak loudly as his fingers quickly pinch your sensitive nipple and your hand quickly flies to your breast to shield it from further attack.');
    // TODO-QSP: dynamic text: "Is there a problem, Miss <<$pcs_lastname>>?" you hear Miss Orlov ask as you gla...
    scene.text(`"Is there a problem, Miss ${((s as any).pcs_lastname ?? 0)}?" you hear Miss Orlov ask as you glance around and notice everyone is staring at you as Dan snickers behind you.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              { label: 'Enjoy', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/breastg.jpg');
    scene.text('You bite your lip to silence the moan that wants to escape as you feel your molester\'s fingers give your nipple a quick pinch before retreating. It was a nice treat to keep class interesting.');
    qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
    if (((s as any).pcs_inhib ?? 0) >= 40) {
      scene.actions([
        { label: 'Come get some more', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/boobgr.mp4');
    scene.text('You pinch your lips together, trying to silence another moan as you feel your molester\'s fingers give your still sensitive nipple another quick pinch before retreating again.');
    scene.text('After the hand is gone, you move your hand to one side of your face, as if to scratch an itch and simultaneously glance over your shoulder until you\'re looking sidelong at Dan, who has been groping you.');
    scene.text('You lift the corner of your mouth in a small smile, winking at him before you scoot your chair back. His eyes fill with surprise and excitement and a few seconds after you\'ve turned back towards the teacher, you feel his hand massaging your breast again.');
    qspCall(s, 'arousal', 'foreplay', 10, 'exhibitionism');
    scene.actions([
      { label: 'Enjoy more', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/breastg.jpg');
    scene.text('You spend the rest of class with Dan\'s hand coming and going to squeeze your breast and tweak your nipple, still careful to make sure the teacher doesn\'t catch on.');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('Enjoying the feeling of Dan\'s hand massaging your breast and his fingers tweaking your nipple, you decide to take advantage of the opportunity. You take the pencil you were using to take notes, push it under your skirt and start prodding and playing with your swollen clit through your quickly soaking panties.');
      scene.text('Eventually, you decide that the small tip doesn\'t provide enough stimulation, so you shift the wet fabric to the side, giving you full access to your now bare pussy. You reach down with one hand and slip two fingers into your dripping wet pussy. They easily slide between your wet lips and your breathing hitches slightly, matching the rhythm of your pistoning fingers.');
      qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate', 'exhibitionism');
      qspCall(s, 'arousal', 'end');
      scene.text('You spend the rest of class with Dan\'s hand playing with your breast as you just sit there in your soaked panties and a small puddle of your own juices, completely satisfied.');
    } else {
      qspCall(s, 'fame', 'pav', 'sex', 1);
      scene.text('Enjoying the feeling of Dan\'s hand massaging your breast and his fingers tweaking your nipple, you decide to take advantage of the opportunity. You take the pencil you were using to take notes, push it under your skirt and start prodding and playing with your already exposed clitoris.');
      scene.text('However, your bare pussy is just too tempting to resist and you soon abandon the pencil in favor of your two middle fingers, quickly shoving them inside yourself. They easily slide between your wet lips and your breathing hitches, matching the rhythm of your pistoning fingers.');
      qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate', 'exhibitionism');
      qspCall(s, 'arousal', 'end');
      scene.text('You spend the rest of class with Dan\'s hand playing with your breast as you just sit there in a small puddle of your own juices, completely satisfied.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).scooltiperand ?? 0) === 5  &&  ((s as any).braworntype ?? 0) !== 'none') {
              scene.img('images/locations/pavlovsk/school/classroom/brasnap.jpg');
              scene.text('During class, you feel a hand grab and pull on your bra strap. Before you can turn or protest they let go, causing it to snap back painfully. You let out a little yelp and turn to glare at Dan behind you.');
              // TODO-QSP: dynamic text: "Is there a problem, Miss <<$pcs_lastname>>?" Miss Orlov asks and you glance aro...
              scene.text(`"Is there a problem, Miss ${((s as any).pcs_lastname ?? 0)}?" Miss Orlov asks and you glance around and notice everyone is staring at you as Dan snickers behind you. Miss Orlov is looking at you accusingly.`);
              qspCall(s, 'willpower', 'misc', 'self', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Tell on him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Tell on him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (3);
    qspCall(s, 'npc_relationship', 'modify', 'A10', (-5));
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You straighten up. "Yes. Dan is snapping my bra."');
    scene.text('Miss Orlov gives Dan a disapproving look. "Is this true?"');
    scene.text('Dan denies it, but Miss Orlov doesn\'t believe him and sends him to the principal\'s office.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              }
              qspCall(s, 'willpower', 'misc', 'self', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Slap Dan [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Slap Dan [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A10', (-1));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    scene.text('You ignore Miss Orlov and turn around, slapping Dan with all the force you can muster. Dan recoils, his hand going to his cheek as students start murmuring about what happened, some of them even laughing.');
    // TODO-QSP: dynamic text: Miss Orlov's voice cuts sharply through the noise. "That's enough of that, Miss ...
    scene.text(`Miss Orlov's voice cuts sharply through the noise. "That's enough of that, Miss ${((s as any).pcs_lastname ?? 0)}! Go to the principal's office!"`);
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Nothing is wrong', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/engaged.jpg');
    scene.text('You shake your head at Miss Orlov, desperately wanting to turn around and strangle Dan, but you don\'t dare now that the teacher is keeping an eye on you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).scooltiperand ?? 0) === 6) {
                scene.img('images/locations/pavlovsk/school/classroom/biology/juliabra.jpg');
                scene.text('Near the end of class, Miss Orlov tells the class to study quietly as she starts grading papers from yesterday\'s assignment. Most of your fellow students don\'t study, but do a variety of other things instead. Julia catches your eye and as you look over, she opens her shirt to show off her bra, then blushes bright red, closes her shirt and pretends to be busy for the rest of the class.');
                qspCall(s, 'arousal', 'erotic', 5);
                qspCall(s, 'arousal', 'end');
              } else {
                if (((s as any).scooltiperand ?? 0) === 7) {
                  scene.img('images/locations/pavlovsk/school/classroom/crash.mp4');
                  scene.text('There\'s a loud crash from the back of the room and you, along with the rest of the class, turn to see Lavrenti is still sitting at his desk, but the desk is now laying on its side on the floor. The whole class bursts out laughing at him.');
                  scene.text('Lavrenti quickly wiggles himself out, gets the desk upright again and hurriedly sits down again, blushing furiously all the while. After making sure he\'s okay, Miss Orlov gets the class back under control and finishes the lesson.');
                } else {
                  if (((s as any).scooltiperand ?? 0) === 8) {
                    scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
                    scene.text('Glancing around the class, you notice Lavrenti reaching around the girl sitting in front of him and grabbing her breast. At first, she tries to fend him off and tell him to stop, but after Miss Orlov shoots a few looks at her, she just gives up and tries to ignore his groping hands.');
                  } else {
                    if (((s as any).scooltiperand ?? 0) === 9) {
                      scene.img('images/locations/pavlovsk/school/classroom/dickpic.jpg');
                      scene.text('You get an alert on your phone. Seeing that Miss Orlov is busy, you sneakily pull it out of your purse, rest it in your lap and lean back before glancing down to see that someone has sent you an image. You open it up, expecting something innocent, only to be confronted by a photo of someone\'s dick. You hear snickering from one side and look up to investigate, but you can\'t tell who it was or exactly where it came from. Unsure what to do and not wanting to be caught looking at it, you quickly delete the image.');
                      qspCall(s, 'arousal', 'erotic', 2, 'unknown');
                    } else {
                      if (((s as any).scooltiperand ?? 0) === 10) {
                        scene.img('images/locations/pavlovsk/school/classroom/flick.jpg');
                        scene.text('You notice Dan keeps flicking Artem\'s ear whenever Miss Orlov looks away. Poor Artem\'s ear is already bright red and he looks like he\'s on the verge of tears.');
                      } else {
                        if (((s as any).scooltiperand ?? 0) === 11) {
                          scene.img('images/locations/pavlovsk/school/classroom/wedgieb.jpg');
                          scene.text('You hear a pained gasp, as do several others, and glance over just in time to see Lavrenti letting go of Lesco\'s underwear. He\'s pulled it half way up his back and you wince slightly at what looked like a painful wedgie.');
                        } else {
                          if (((s as any).scooltiperand ?? 0) === 12) {
                            scene.img('images/locations/pavlovsk/school/classroom/biology/danshowdick.jpg');
                            scene.text('Near the end of class, Miss Orlov assigns your homework and gives you the last few minutes of time to work on it. She starts grading papers from yesterday\'s assignment, and most of the class turns their attention to working on their homework assignment while they can. After a few minutes, you hear someone giggle and glance up and look around; you quickly notice that Dan has his pants unzipped and his dick is hanging out as he says something to Irina, who is mostly ignoring him, although she does take a peek now and again, as does Natasha.');
                            scene.text('Whatever he wanted isn\'t going to happen though, and he finally puts his dick away at the end of class.');
                            qspCall(s, 'arousal', 'voyeur', 5);
                            qspCall(s, 'arousal', 'end');
                          } else {
                            if (((s as any).scooltiperand ?? 0) === 13) {
                              scene.img('images/locations/pavlovsk/school/classroom/biology/irinaselfie.jpg');
                              scene.text('Near the end of class, Miss Orlov tells the class to study quietly as she gets up and leaves the room. Of course, once she\'s gone, everyone starts talking and only a few of the nerds actually study. Irina gets up and sits on the edge of Miss Orlov\'s desk and starts taking selfies. She ignores the boys hoots and cat calls until the end of class when the bell rings.');
                            } else {
                              if (((s as any).scooltiperand ?? 0) === 14) {
                                scene.img('images/locations/pavlovsk/school/classroom/biology/natpanties.jpg');
                                scene.text('Near the end of class, Miss Orlov assigns your homework and gives you the last bit of time to work on it. She starts grading papers from yesterday\'s assignment, and most of the class turns their attention to working on their homework assignment while they can. After a few minutes, you glance around and notice Natasha is sitting with her legs slightly apart, showing off her panties to anyone that looks. You doubt she\'s aware of it since she seems completely engrossed in working on her homework.');
                                qspCall(s, 'arousal', 'erotic', 5);
                                qspCall(s, 'arousal', 'end');
                              } else {
                                if (((s as any).scooltiperand ?? 0) === 15) {
                                  scene.img('images/locations/pavlovsk/school/classroom/biology/natsit.jpg');
                                  scene.text('Near the end of class, Miss Orlov tells the class to study quietly as she gets up and leaves the room. Of course, once she\'s gone, everyone starts talking and only a few of the nerds actually study. Most of the students get up and walk around. Even Natasha puts her books away, gets up and sits on the back of her chair, giving you a smile when you look her way.');
                                } else {
                                  if (((s as any).scooltiperand ?? 0) === 16  &&  ((s as any).NatbelQW ?? 0)?.['panty_stuff_day'] !== ((s as any).daystart ?? 0)) {
                                    scene.img('images/locations/pavlovsk/school/classroom/biology/natskirt.jpg');
                                    scene.text('Near the end of class, Miss Orlov calls Natasha up to the blackboard to write out the assignment. Once done, Natasha returns to her seat and sits down, unaware that the back of her skirt has caught on the seat, which shows off her panty-clad ass as she sits through the rest of the class. Several other students notice as well.');
                                    qspCall(s, 'arousal', 'erotic', 5);
                                    qspCall(s, 'arousal', 'end');
                                  } else {
                                    if (((s as any).scooltiperand ?? 0) === 17) {
                                      scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
                                      scene.text('The lesson pauses briefly when one of the other students asks Miss Orlov a question about her assignment. With nothing to do for the moment, you doodle lazily in the margin of your notebook.');
                                      scene.text('When you look back up, you notice Lazar turning his head away. You don\'t think much of it at first, until you catch him a second time. Was he looking at you, or just in your general direction? Even Miss Orlov walks by and pauses next to your desk for a moment before continuing on.');
                                      scene.text('Class resumes, and things return to normal, but part-way through the lesson, you look at Lazar again and find him staring at you. It looks like he\'s trying not to make eye contact, however, otherwise he would have noticed you looking back at him. You wonder what his deal is.');
                                      scene.text('Following his gaze down, you spot what\'s caught his attention: your uniform has lost a button, which is giving him a good view of your cleavage.');
                                      qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
                                      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                        scene.actions([
                                          { label: 'Ignore it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                        ]);
                                      } else {
                                        scene.actions([
                                          { label: 'Ignore it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
    scene.text('You ignore it, letting Lazar continue to gawk at you. You find yourself somewhat amused at how little it takes to completely enthrall some boys.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                        ]);
                                      }
                                      scene.actions([
                                        { label: 'Pull your shirt closed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/closeshirtfo.jpg');
    scene.text('You quickly grasp both sides of your blouse and pull them tightly together. Lazar grins when he realizes he\'s been caught and winks at you before turning back to face the blackboard.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                      ]);
                                    } else {
                                      if (((s as any).scooltiperand ?? 0) <= 19) {
                                        scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
                                        scene.text('As you arrive in class, you look around and decide to sit next to…');
                                        scene.actions([
                                          { label: 'Irina', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Irina, who looks at you in disgust and turns away to talk to someone else.');
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        qspCall(s, 'npc_relationship', 'modify', 'A17', 1);
        scene.text('You sit next to Irina and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Irina, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and talking to other people.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A17', 1);
          scene.text('You sit next to Irina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Miss Orlov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                          { label: 'Julia', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Julia, who avoids making eye contact with you and instead focuses on her coursework.');
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        qspCall(s, 'npc_relationship', 'modify', 'A12', 1);
        scene.text('You sit next to Julia and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Julia, but she awkwardly ignores you and chooses to talk to other people or do her coursework.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A12', 1);
          scene.text('You sit next to Julia. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Miss Orlov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                          { label: 'Lavrenti', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Lavrenti, who gives you a perverted smile and keeps asking if you want to suck his dick.');
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        qspCall(s, 'npc_relationship', 'modify', 'A155', 1);
        scene.text('You sit next to Lavrenti and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Lavrenti and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A155', 1);
          scene.text('You sit next to Lavrenti. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Miss Orlov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                          { label: 'Artem', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Artem, who looks at you in disgust and instead focuses on his coursework.');
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
        scene.text('You sit next to Artem and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Artem, but he ignores you and chooses to talk to other people or do his coursework.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
          scene.text('You sit next to Artem. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Miss Orlov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                          { label: 'Natasha', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Natasha, who avoids making eye contact with you and instead focuses on her coursework.');
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        qspCall(s, 'npc_relationship', 'modify', 'A16', 1);
        scene.text('You sit next to Natasha and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Natasha, but she awkwardly ignores you and chooses to talk to other people or do her coursework.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A16', 1);
          scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Miss Orlov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                          { label: 'Lazar', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Lazar, who mocks you for the duration of the lesson about how many dicks you\'ve sucked and how your breath probably smells of cum.');
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        qspCall(s, 'npc_relationship', 'modify', 'A149', 1);
        scene.text('You sit next to Lazar and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Lazar, but he ignores you and only talks to you if it involves mocking you.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A149', 1);
          scene.text('You sit next to Lazar. He\'s a little surprised that you chose to do so, but seems to enjoy the attention you\'re giving him. You\'re able to strike up a brief conversation with him before Miss Orlov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                          { label: 'Lesco', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Lesco, who avoids making eye contact with you and awkwardly puts his head down. Your classmates notice this and you feel embarrassed at the fact that you\'re so unpopular that even Lesco won\'t talk to you.');
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        qspCall(s, 'npc_relationship', 'modify', 'A7', 1);
        scene.text('You sit next to Lesco and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        scene.text('You sit next to Lesco and he looks at you in confusion, fearful of what you\'ll do. Despite your attempts to reassure him, he\'s so scared of you that he doesn\'t speak for the duration of the class.');
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                        ]);
                                      } else {
                                        qspCall(s, 'stat', '');
                                        scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
                                        scene.text('As you sit in class listening to the lesson, you hear some of your fellow students talking behind you.');
                                        scene.actions([
                                          { label: 'Ignore them and wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                          { label: 'Eavesdrop', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/eavesdrop.jpg');
    qspCall(s, 'gschool_gossip', 'lesson');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
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
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
  }
  scene.build();
}

function enterScience(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 6) + 0) > 0) {
    (s as any).school_event_hour = 1;
    (s as any).scooltiperand = Math.floor(Math.random() * 18) + 1;
    if (((s as any).scooltiperand ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/events/scoolrand_2.jpg');
      scene.text('Irina looks like she has it all figured out. Her grades are excellent, all the guys in school like her, and she doesn\'t have to answer to anyone. She\'s sitting back in a chair, giving herself a manicure.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).scooltiperand ?? 0) === 2) {
        qspCall(s, 'mood', 'raise', 'small');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/school/events/scoolrand_3.jpg');
        scene.text('As you walk into class, you see some guys have drawn a goofy scene on the blackboard, making it look like they\'re characters in a computer game. You share a laugh with them as you sit down; that certainly brightened your mood.');
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        if (((s as any).scooltiperand ?? 0) === 3) {
          qspCall(s, 'mood', 'lower', 'small');
          qspCall(s, 'stat', '');
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 0  &&  (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['anus'] > 0)) {
            ((s as any).pcs_memory ?? {})['school_no_panty_cum_flash'] = ((s as any).daystart ?? 0);
            scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
            scene.text('Before you can answer the question Miss Orlov poses, you have to clean the blackboard, but accidentally drop the cloth. As you bend over to pick it up, you suddenly feel something <i>spurt</i> down your leg.');
            if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] > 0) {
              qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 8) + 8);
              scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so are both your holes leaking cum that\'s dribbling down your thigh. Miss Orlov swiftly steps behind you, blocking the view. "You did that before class?" she murmurs to herself in an embarrassed, almost scandalized tone. "<i>Both holes?</i>"');
            } else {
              if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
                qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 5) + 8);
                scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, but also the cum leaking from your pussy and dribbling down your thigh. Miss Orlov swiftly steps behind you, blocking the view. "You did that <i>before class?</i>" she murmurs to herself in an embarrassed tone. "Just how sexually active are you?"');
              } else {
                if (((s as any).cum_loc ?? 0)?.['anus'] > 0) {
                  qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 8) + 8);
                  scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from between your ass cheeks and dribbling down your thigh. Miss Orlov swiftly steps behind you, blocking the view. "You did that <i>before class?</i>" she murmurs to herself in an embarrassed tone. "Just how sexually active are you?"');
                }
              }
            }
          } else {
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
              qspCall(s, 'arousal', 'flash', (-5));
              qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 5) + 4);
              ((s as any).pcs_memory ?? {})['school_no_panty__anal_plug_flash'] = ((s as any).daystart ?? 0);
              scene.img('images/locations/pavlovsk/school/events/nopanties_buttplug.jpg');
              scene.text('You\'ve been called up to answer the question written on the blackboard, but while solving it, you need to erase something. You accidentally drop the cloth and hesitate to pick it up as you think about the fact that not only are you not wearing any panties, your ass is also stuffed with a butt plug.');
              // TODO-QSP: dynamic text: "Is there a problem, Miss <<$pcs_lastname>>?" Miss Orlov asks curiously.
              scene.text(`"Is there a problem, Miss ${((s as any).pcs_lastname ?? 0)}?" Miss Orlov asks curiously.`);
              scene.text('With a coy smile, you slowly bend over until you feel your skirt rise up, exposing your bare pussy and ass to your classmates. Hearing the flurry of murmurs and whispers, you can\'t help but squeeze and clench around the toy. The boys sound both surprised and intrigued by the sight while the girls whisper to one another that you\'re a slut. From where Miss Orlov sits, she can\'t see what everyone is fussing over, so she starts to move to get a better look. You quickly snap back up and adjust your skirt and, with a devious smile and cloth in hand, you start wiping away at the board as if nothing happened.');
            } else {
              if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).analPlugIn ?? 0))) {
                qspCall(s, 'arousal', 'flash', (-5));
                qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 4) + 1);
                ((s as any).pcs_memory ?? {})['school_no_panty_flash'] = ((s as any).daystart ?? 0);
                scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
                scene.text('Before you can answer the question Miss Orlov poses you, you have to clean the blackboard, but accidentally drop the cloth and totally forget that you\'re not wearing panties. The whistling and shouting from the boys and murmurs of disapproval from most of the girls behind you tell you that everyone has a clear view of your bare ass, and both of your holes are on display for everyone to see. Miss Orlov comes over to help you back up and block the view of your ass as best she can.');
                scene.text('"This is why you should wear panties to school," she says softly once you\'re back on your feet. "I won\'t report you, but I suggest you wear some in the future."');
              } else {
                qspCall(s, 'arousal', 'flash', (-5));
                qspCall(s, 'fame', 'pav', 'sex', 1);
                scene.img('images/locations/pavlovsk/school/events/scoolrand_4_1.jpg');
                scene.text('When you walk up to the blackboard to answer a question, you trip and fall. Somehow, you manage to fall in such a way that your skirt ends up on your back and the whole class can see your panty-clad ass. You quickly get up and straighten your clothes with a bright red face, trying to ignore the hollering from your classmates. Miss Orlov comes over to help you back up and block the view of your ass as best she can. You can tell that most of the guys and even a few girls definitely appreciated your show, even if it was involuntarily.');
              }
            }
          }
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          if (((s as any).scooltiperand ?? 0) === 4) {
            scene.img('images/locations/pavlovsk/school/events/scoolrand_9.jpg');
            scene.text('As you sit in class waiting for the lesson to begin, you can\'t help but admire the expensive looking stockings Stasya is wearing. With a tinge of jealousy, you wonder where you could buy yourself a pair and if you can afford them.');
            scene.actions([
              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
            ]);
          } else {
            if (((s as any).scooltiperand ?? 0) === 5) {
              scene.img('images/locations/pavlovsk/school/events/scoolrand_10.jpg');
              scene.text('As you wait for the end of the class, you notice Irina taking her shoes off and putting them back on, probably trying to get a bit more comfortable in them. She\'s showing off her shapely legs as she does, drawing more than a few looks from her fellow classmates.');
              scene.actions([
                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
              ]);
            } else {
              if (((s as any).scooltiperand ?? 0) === 6) {
                scene.img('images/locations/pavlovsk/school/classroom/dickpic.jpg');
                scene.text('You get an alert on your phone. Seeing that Miss Orlov is busy, you sneakily pull it out of your purse, rest it in your lap and lean back before glancing down to see that someone has sent you an image. You open it up, expecting something innocent, only to be confronted by a photo of someone\'s dick. You hear snickering from one side and look up to investigate, but you can\'t tell who it was or exactly where it came from. Unsure what to do about it, you decide that you don\'t want to be caught looking at it, so you delete the image.');
                qspCall(s, 'arousal', 'erotic', 2, 'unknown');
                scene.actions([
                  { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                ]);
              } else {
                if (((s as any).scooltiperand ?? 0) === 7) {
                  scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
                  scene.text('The lesson pauses briefly when one of the other students asks Miss Orlov a question about her assignment. With nothing to do for the moment, you doodle lazily in the margin of your notebook.');
                  scene.text('When you look back up, you notice Andrey turning his head away. You don\'t think much of it at first, until you catch him a second time. Was he looking at you, or just in your general direction? Even Miss Orlov walks by and pauses next to your desk for a moment before continuing on.');
                  scene.text('Class resumes, and things return to normal, but part-way through the lesson, you look at Andrey again and find him staring at you. It looks like he\'s trying not to make eye contact, however, otherwise he would have noticed you looking back at him. You wonder what his deal is.');
                  scene.text('Following his gaze down, you spot what\'s caught his attention: your uniform has lost a button, which is giving him a good look at your cleavage.');
                  qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Ignore it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Ignore it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self', 'easy');
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A147', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A139', (-1));
    scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
    scene.text('You ignore it, letting Andrey continue to gawk at you. You find yourself somewhat amused at how little it takes to completely enthrall some boys, although by the look on Stasya\'s face, you are not earning her friendship.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                    ]);
                  }
                  scene.actions([
                    { label: 'Pull your shirt closed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/closeshirtfo.jpg');
    scene.text('You quickly grasp both sides of your blouse and pull them tightly together. Andrey grins when he realizes he\'s been caught and winks at you before turning back to face the blackboard. Stasya, having finally noticed what her boyfriend was doing, gives you a dirty look.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).scooltiperand ?? 0) <= 9) {
                    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
                    scene.text('As you arrive in class, you look around and decide to sit next to…');
                    scene.actions([
                      { label: 'Irina', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Irina, who looks at you in disgust and turns away to talk to someone else.');
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        qspCall(s, 'npc_relationship', 'modify', 'A17', 1);
        scene.text('You sit next to Irina and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Irina, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and talking to other people.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A17', 1);
          scene.text('You sit next to Irina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Miss Orlov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Andrey and Stasya', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Andrey and Stasya. Stasya glares at you and warns you not to even try and suck Andrey\'s dick, but he laughs in response, saying how he would never let your filthy mouth near him.');
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        qspCall(s, 'npc_relationship', 'modify', 'A139', 1);
        qspCall(s, 'npc_relationship', 'modify', 'A147', 1);
        scene.text('You sit next to Andrey and Stasya and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you all to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Andrey and Stasya, but they dismiss all of your attempts to speak with them and instead spend the lesson talking to each other.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A139', 1);
          qspCall(s, 'npc_relationship', 'modify', 'A147', 1);
          scene.text('You sit next to Andrey and Stasya. They\'re a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Miss Orlov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Mefodiy', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Mefodiy, who expresses his disgust at your slutiness with sarcastic jokes and then ignores you for the rest of the lesson.');
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        qspCall(s, 'npc_relationship', 'modify', 'A148', 1);
        scene.text('You sit next to Mefodiy and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Mefodiy, but he ignores you for the duration of the lesson.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A148', 1);
          scene.text('You sit next to Mefodiy. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before Miss Orlov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Gerasim', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Gerasim, who looks at you in disgust and instead focuses on his coursework.');
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        qspCall(s, 'npc_relationship', 'modify', 'A153', 1);
        scene.text('You sit next to Gerasim and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Gerasim, but he ignores you and chooses to talk to other people or do his coursework.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A153', 1);
          scene.text('You sit next to Gerasim. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Miss Orlov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Veronika', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Veronika, who glares at you, clearly disgusted at your slutiness, and looks away. A shiver runs down your spine at how cold she just was to you.');
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A141', 1);
      scene.text('You sit next to Veronika. She\'s her usual cold and distant self and doesn\'t make any effort to engage you in conversation, so you don\'t bother trying.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Vanya', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Vanya, who immediately stands up and walks over to sit with Katja and Vicky, all of them giving disgusted looks.');
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        qspCall(s, 'npc_relationship', 'modify', 'A165', 1);
        scene.text('You sit next to Vanya and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Vanya. He ignores you, instead choosing to lean back and talk with Katja and Vicky.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A165', 1);
          scene.text('You sit next to Vanya. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before you catch Vicky giving you dagger eyes and you turn away.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Arkadi', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Arkadi, who gives you a perverted smile and keeps asking if you want to suck his dick.');
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        qspCall(s, 'npc_relationship', 'modify', 'A156', 1);
        scene.text('You sit next to Arkadi and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Arkadi and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A156', 1);
          scene.text('You sit next to Arkadi. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Miss Orlov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).scooltiperand ?? 0) === 11) {
                      qspCall(s, 'stat', '');
                      scene.img('images/locations/pavlovsk/school/classroom/science/andstaskirt.jpg');
                      scene.text('As you sit in class listening to the lesson, you hear Stasya telling Andrey to stop. When you glance over, you see Andrey trying to pull her skirt up as she holds it down.');
                      scene.text('She\'s talking softly and trying not to draw attention, but after a few more hissed whispers, he lets go and mutters something as Stasya glares at him before the class goes back to normal.');
                      scene.actions([
                        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                      ]);
                    } else {
                      if (((s as any).scooltiperand ?? 0) === 12) {
                        qspCall(s, 'stat', '');
                        scene.img('images/locations/pavlovsk/school/classroom/science/irinaselfie.jpg');
                        scene.text('As you sit in class listening to the lesson, you see Irina pull out her phone and take selfies of herself and Stasya. Miss Orlov doesn\'t even notice.');
                        scene.actions([
                          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                        ]);
                      } else {
                        if (((s as any).scooltiperand ?? 0) === 13) {
                          qspCall(s, 'stat', '');
                          scene.img('images/locations/pavlovsk/school/classroom/science/iristagossip.jpg');
                          scene.text('As you sit in class listening to the lesson, you hear Irina and Stasya gossiping and overhear a bit of it.');
                          scene.text('"Did you hear that Igor got pantsed at the dance last Friday? He had the tiniest dick!" Stasya says as she holds up her hands to show how small it was.');
                          scene.text('Irina giggles and they get a few looks, so they talk even quieter and you can\'t make out what they\'re saying anymore.');
                          scene.actions([
                            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                          ]);
                        } else {
                          if (((s as any).scooltiperand ?? 0) === 14) {
                            qspCall(s, 'stat', '');
                            scene.img('images/locations/pavlovsk/school/classroom/science/stabraflash.jpg');
                            scene.text('As you sit in class listening to the lesson, you hear Andrey trying to get Stasya to do something. "Come on, babe! Just do it quickly!"');
                            scene.text('Stasya rolls her eyes, then looks around to make sure no one is watching before she pulls up her shirt to flash her bra at him.');
                            scene.text('Andrey grins at her and tells her how great she is and they start to get all lovey dovey together.');
                            qspCall(s, 'arousal', 'voyeur', 5);
                            qspCall(s, 'arousal', 'end');
                            scene.actions([
                              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                            ]);
                          } else {
                            if (((s as any).scooltiperand ?? 0) === 15) {
                              qspCall(s, 'stat', '');
                              scene.img('images/locations/pavlovsk/school/classroom/science/staoverdesk.jpg');
                              scene.text('As class ends, Stasya starts to get up, but accidentally knocks her book off the front of her desk. While still in her desk, she stands up and bends over to grab it off the floor, inadvertently giving everyone behind her a look at her panty-clad ass until she straightens up.');
                              scene.text('A few snickers and giggles causes her to look back and she seems to understand what happened, quickly smoothing out her skirt before leaving with Andrey.');
                              qspCall(s, 'arousal', 'erotic', 5);
                              qspCall(s, 'arousal', 'end');
                              scene.actions([
                                { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
                              ]);
                            } else {
                              qspCall(s, 'stat', '');
                              scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
                              scene.text('As you sit in class listening to the lesson, you hear some of your fellow students talking behind you.');
                              scene.actions([
                                { label: 'Ignore them and wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                { label: 'Eavesdrop', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/eavesdrop.jpg');
    qspCall(s, 'gschool_gossip', 'lesson');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
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
            }
          }
        }
      }
    }
  } else {
    scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
  }
  scene.build();
}

function enterComputer(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fuckornot ?? 0) === 2  &&  ((s as any).fuckornot_day ?? 0) < ((s as any).daystart ?? 0) - 1) {
    scene.img('images/locations/pavlovsk/school/classroom/computer/computer_class.jpg');
    scene.text('While working on your computer assignment, you get a message from someone, but no name is listed. It just has a school ID. You look around to see who might have sent it, but no one seems to be paying attention to you. All the message says is "Where do you rate?" with a link to a web page.');
    scene.actions([
      { label: 'Ignore it and focus on your school work.', handler: (st: GameState) => {
    (st as any).fuckornot_day = ((st as any).daystart ?? 0) + (Math.floor(Math.random() * 3) + 0);
  }, goto: ['gschool_lessons', 'short_break'] },
      { label: 'Click on the link', handler: (st: GameState) => {
    // TODO-QSP: $view_location = 'school'
  }, goto: ['komp_HF_or_not', 'fuckornot'] },
    ]);
  } else {
    if (((s as any).fuckornot ?? 0) === 2  &&  ((s as any).hotornot ?? 0) === 2  &&  ((s as any).fuckornot_day ?? 0) < ((s as any).daystart ?? 0) - 8) {
      scene.img('images/locations/pavlovsk/school/classroom/computer/computer_class.jpg');
      scene.text('While working on your computer assignment, you get a message from someone, but no name is listed. It just has a school ID. You look around to see who might have sent it, but no one seems to be paying attention to you. All the message says is "Where do you rate?" with a link to a web page.');
      scene.actions([
        { label: 'Ignore it and focus on your school work.', handler: (st: GameState) => {
    (st as any).fuckornot_day = ((st as any).daystart ?? 0) + (Math.floor(Math.random() * 3) + 0);
  }, goto: ['gschool_lessons', 'short_break'] },
        { label: 'Click on the link', handler: (st: GameState) => {
    // TODO-QSP: $view_location = 'school'
  }, goto: ['komp_HF_or_not', 'hotornot'] },
      ]);
    } else {
      if ((Math.floor(Math.random() * 6) + 0) > 0) {
        (s as any).school_event_hour = 1;
        (s as any).scooltiperand = Math.floor(Math.random() * 26) + 1;
        if (((s as any).scooltiperand ?? 0) === 1) {
          scene.img('images/locations/pavlovsk/school/events/scoolrand_10.jpg');
          scene.text('As you wait for the end of the class, you notice Albina taking her shoes off and putting them back on, probably trying to get a bit more comfortable in them. She\'s showing off her shapely legs as she does, drawing more than a few looks from her fellow classmates.');
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          if (((s as any).scooltiperand ?? 0) === 2) {
            scene.img('images/locations/pavlovsk/school/events/urok7.jpg');
            scene.text('As you wait for the lesson to end, you see that you\'re not the only one who\'s a bit drowsy; Alyona is very close to falling asleep on her desk.');
            scene.actions([
              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
            ]);
          } else {
            if (((s as any).scooltiperand ?? 0) === 3) {
              scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
              scene.text('During class, you feel a hand slide around your side and grab one of your breasts. You squeak loudly and try to smack Vasily\'s hand away, but he jerks it away and all you manage to do is smack your breast.');
              // TODO-QSP: dynamic text: "Is there a problem, Miss <<$pcs_lastname>>?" you hear Mr. Ivanov ask as you gla...
              scene.text(`"Is there a problem, Miss ${((s as any).pcs_lastname ?? 0)}?" you hear Mr. Ivanov ask as you glance around and notice everyone is staring at you as Vasily snickers behind you. Mr. Ivanov looks at you expectantly.`);
              qspCall(s, 'willpower', 'misc', 'self', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Tell on him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Tell on him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (3);
    qspCall(s, 'npc_relationship', 'modify', 'A11', (-5));
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You straighten up. "Yes. Vasily is grabbing my breasts."');
    scene.text('Mr. Ivanov gives Vasily a disapproving look. "Is this true?"');
    scene.text('Vasily denies it, but Mr. Ivanov doesn\'t believe him and sends him to the principal\'s office.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              }
              qspCall(s, 'willpower', 'misc', 'self', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Slap Vasily [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Slap Vasily [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A11', (-1));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    scene.text('You ignore Mr. Ivanov and turn around, slapping Vasily with all the force you can muster. Vasily recoils, his hand going to his cheek as students start murmuring about what happened, some of them even laughing.');
    // TODO-QSP: dynamic text: Mr. Ivanov's voice cuts sharply through the noise. "That's enough of that, Miss ...
    scene.text(`Mr. Ivanov's voice cuts sharply through the noise. "That's enough of that, Miss ${((s as any).pcs_lastname ?? 0)}! Go to the principal's office!"`);
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Nothing is wrong', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/engaged.jpg');
    scene.text('You shake your head at Mr. Ivanov, desperately wanting to turn around and strangle Vasily, but you don\'t dare now that Mr. Ivanov is keeping an eye on you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                { label: 'Embarrassed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
    scene.text('You squeak loudly as his fingers quickly pinch your sensitive nipple and your hand quickly flies to your breast to shield it from further attack.');
    // TODO-QSP: dynamic text: "Is there a problem, Miss <<$pcs_lastname>>?" Mr. Ivanov asks and you glance aro...
    scene.text(`"Is there a problem, Miss ${((s as any).pcs_lastname ?? 0)}?" Mr. Ivanov asks and you glance around and notice everyone is staring at you as Vasily snickers behind you.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                { label: 'Enjoy', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A11', 1);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/breastg.jpg');
    scene.text('You bite your lip to silence the moan that wants to escape as you feel your molester\'s fingers give your nipple a quick pinch before retreating. It was a nice treat to keep class interesting.');
    qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
    if (((s as any).pcs_inhib ?? 0) >= 40) {
      scene.actions([
        { label: 'Come get some more', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/boobgr.mp4');
    scene.text('You pinch your lips together, trying to silence another moan as you feel your molester\'s fingers give your still sensitive nipple another quick pinch before retreating again. After the hand is gone, you move your hand to one side of your face, as if to scratch an itch and simultaneously glance over your shoulder until you\'re looking sidelong at Vasily, who has been groping you.');
    scene.text('You lift the corner of your mouth in a small smile, winking at him before you scoot your chair back. His eyes fill with surprise and excitement and a few seconds after you\'ve turned back towards Mr. Ivanov, you feel his hand massaging your breast again.');
    qspCall(s, 'arousal', 'foreplay', 10, 'exhibitionism');
    scene.actions([
      { label: 'Enjoy more', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/breastg.jpg');
    scene.text('You spend the rest of class with Vasily\'s hand coming and going to squeeze your breast and tweak your nipple, still careful to make sure Mr. Ivanov doesn\'t catch on.');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('Enjoying the feeling of Vasily\'s hand massaging your breast and his fingers tweaking your nipple, you decide to take advantage of the opportunity. You take the pencil you were using to take notes, push it under your skirt and start prodding and playing with your swollen clit through your quickly soaking panties.');
      scene.text('Eventually, you decide that the small tip doesn\'t provide enough stimulation, so you shift the wet fabric to the side, giving you full access to your now bare pussy. You reach down with one hand and slip two fingers up your dripping wet pussy. They easily slide between your wet lips and your breathing hitches slightly, matching the rhythm of your pistoning fingers.');
      qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate', 'exhibitionism');
      qspCall(s, 'arousal', 'end');
      scene.text('You spend the rest of class with Vasily\'s hand playing with your breast as you just sit there in your soaked panties and a small puddle of your own juices, completely satisfied.');
    } else {
      qspCall(s, 'fame', 'pav', 'sex', 1);
      scene.text('Enjoying the feeling of Vasily\'s hand massaging your breast and his fingers tweaking your nipple, you decide to take advantage of the opportunity. You take the pencil you were using to take notes, push it under your skirt and start prodding and playing with your already exposed clitoris, but your bare pussy is just too tempting to resist and you soon abandon the pencil in favor of your two middle fingers, quickly shoving them inside yourself. They easily slide between your wet lips and your breathing hitches, matching the rhythm of your pistoning fingers.');
      qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate', 'exhibitionism');
      qspCall(s, 'arousal', 'end');
      scene.text('You spend the rest of class with Vasily\'s hand playing with your breast as you just sit there in a small puddle of your own juices, completely satisfied.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).scooltiperand ?? 0) === 4  &&  ((s as any).braworntype ?? 0) !== 'none') {
                scene.img('images/locations/pavlovsk/school/classroom/brasnap.jpg');
                scene.text('During class, you feel a hand grab and pull on your bra strap. Before you can turn or protest they let go, causing it to snap back painfully. You let out a little yelp and turn to glare at Vasily behind you.');
                // TODO-QSP: dynamic text: "Is there a problem, Miss <<$pcs_lastname>>?" Mr. Ivanov asks and you glance aro...
                scene.text(`"Is there a problem, Miss ${((s as any).pcs_lastname ?? 0)}?" Mr. Ivanov asks and you glance around and notice everyone is staring at you as Vasily snickers behind you. Mr. Ivanov is looking at you accusingly.`);
                qspCall(s, 'willpower', 'misc', 'self', 'medium');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Tell on him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Tell on him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (3);
    qspCall(s, 'npc_relationship', 'modify', 'A11', (-5));
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You straighten up. "Yes. Vasily is snapping my bra strap."');
    scene.text('Mr. Ivanov gives Vasily a disapproving look. "Is this true?"');
    scene.text('Vasily denies it, but Mr. Ivanov doesn\'t believe him and sends him to the principal\'s office.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  ]);
                }
                qspCall(s, 'willpower', 'misc', 'self', 'medium');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Slap Vasily [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Slap Vasily [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A11', (-1));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    scene.text('You ignore Mr. Ivanov and turn around, slapping Vasily with all the force you can muster. Vasily recoils, his hand going to his cheek as students start murmuring about what happened, some of them even laughing.');
    // TODO-QSP: dynamic text: Mr. Ivanov's voice cuts sharply through the noise. "That's enough of that, Miss ...
    scene.text(`Mr. Ivanov's voice cuts sharply through the noise. "That's enough of that, Miss ${((s as any).pcs_lastname ?? 0)}! Go to the principal's office!"`);
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Nothing is wrong', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/engaged.jpg');
    scene.text('You shake your head at Mr. Ivanov, desperately wanting to turn around and strangle Vasily, but you don\'t dare now that Mr. Ivanov is keeping an eye on you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).scooltiperand ?? 0) === 5) {
                  scene.img('images/locations/pavlovsk/school/classroom/crash.mp4');
                  scene.text('There\'s a loud crash from the back of the room and you, along with the rest of the class, turn to see that Vasily is still sitting at his desk, but the desk is now laying on its side on the floor. The whole class bursts out laughing at him.');
                  scene.text('Vasily quickly wiggles himself out, gets the desk upright again and hurriedly sits down again, blushing furiously all the while. After making sure he\'s okay, Mr. Ivanov sends him to the principal\'s office for disrupting class.');
                  scene.actions([
                    { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                  ]);
                } else {
                  if (((s as any).scooltiperand ?? 0) === 6) {
                    scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
                    scene.text('Glancing around the class, you notice Vasily reaching around the girl sitting in front of him and grabbing her breast. At first, she tries to fend him off and tell him to stop, but after Mr. Ivanov shoots her a few dirty looks for the noise she\'s making, she just gives up and tries to ignore his groping hands.');
                    scene.actions([
                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                    ]);
                  } else {
                    if (((s as any).scooltiperand ?? 0) === 7) {
                      if (((s as any).soniaQW ?? 0)?.['slut'] === 1) {
                        scene.img('images/locations/pavlovsk/school/classroom/classflash.mp4');
                        scene.text('Mr. Ivanov engages the class in conversation when Sonia starts openly flirting with him and keeps dropping none too subtle sexual innuendos at him. He does his best to ignore them, but you notice that his crotch is developing a serious bulge. Sonia notices too and pulls her shirt open, flashing her breasts at him and the rest of the class.');
                        scene.text('He quickly tells the class to read some chapters in their textbook while he hurries to sit down at his desk, though his eyes linger on a smiling Sonia. You wonder why she wasn\'t sent to the principal\'s office. If anyone else had done that, they would have been kicked out of class immediately.');
                        qspCall(s, 'arousal', 'voyeur', 5);
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                        ]);
                      } else {
                        qspCall(s, 'gschool_lessonsev1', 'computer');
                      }
                    } else {
                      if (((s as any).scooltiperand ?? 0) === 8) {
                        scene.img('images/locations/pavlovsk/school/classroom/soniaflash.jpg');
                        scene.text('You hear some whispers and see some other students looking towards the back of the room every time Mr. Ivanov isn\'t looking. You glance back and see Sonia flashing her breasts at Artem every time Mr. Ivanov looks away, while the other boys take pictures of her each time and keep encouraging her to show more.');
                        qspCall(s, 'arousal', 'voyeur', 5);
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                        ]);
                      } else {
                        if (((s as any).scooltiperand ?? 0) === 9) {
                          scene.img('images/locations/pavlovsk/school/classroom/dickpic.jpg');
                          scene.text('You get an alert on your phone. After quickly checking that Mr. Ivanov is busy, you sneakily pull it out of your purse and rest it in your lap. You lean back before glancing down to see that someone has sent you an image. You open it up, expecting something innocent, only to be confronted by a photo of someone\'s dick. You hear snickering from one side and look up to investigate, but you can\'t tell who it was or exactly where it came from. Unsure what to do about it, you decide that you don\'t want to be caught looking at it, so you delete the image.');
                          qspCall(s, 'arousal', 'voyeur', 5);
                          qspCall(s, 'arousal', 'end');
                          scene.actions([
                            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                          ]);
                        } else {
                          if (((s as any).scooltiperand ?? 0) === 10) {
                            scene.img('images/locations/pavlovsk/school/classroom/flick.jpg');
                            scene.text('You notice Vasily keeps flicking Artem\'s ear whenever Mr. Ivanov looks away. Poor Artem\'s ear is already bright red and he looks like he\'s on the verge of tears.');
                            scene.actions([
                              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                            ]);
                          } else {
                            if (((s as any).scooltiperand ?? 0) === 11) {
                              scene.img('images/locations/pavlovsk/school/classroom/wedgieb.jpg');
                              scene.text('You hear a pained gasp, as do several others. You glance over just in time to see Vasily letting go of Artem\'s underwear. He\'s pulled it half way up his back and you wince slightly at what that looked like a painful wedgie.');
                              scene.actions([
                                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                              ]);
                            } else {
                              if (((s as any).scooltiperand ?? 0) <= 13) {
                                scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
                                scene.text('As you arrive in class, you look around and decide to sit next to…');
                                scene.actions([
                                  { label: 'Vasily', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Vasily, who gives you a perverted smile and keeps asking if you want to suck his dick.');
    } else {
      if (((s as any).grupTipe ?? 0) === 4  ||  ((s as any).grupTipe ?? 0) === 5) {
        if (((s as any).grupTipe ?? 0) === 4) {
          qspCall(s, 'npc_relationship', 'modify', 'A11', 1);
          scene.text('You sit next to Vasily and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Ivanov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
        } else {
          scene.text('You\'re forced to sit next to Vasily and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        }
      } else {
        qspCall(s, 'npc_relationship', 'modify', 'A11', 1);
        scene.text('You sit next to Vasily. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mr. Ivanov asks you to be quiet.');
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                  { label: 'Albina', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150  &&  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
      scene.text('You sit next to Albina, who gives you a pitiful look. "Still slutting it up?"');
      scene.text('You blush slightly. but just nod. She just shakes her head and tells you to be careful before turning away.');
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
        scene.text('You sit next to Albina, who immediately looks you over before shaking her head in disgust. "Don\'t even think about it, cum rag."');
      } else {
        if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
          qspCall(s, 'npc_relationship', 'modify', 'A23', 1);
          if (((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
            scene.text('You sit next to Albina and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Ivanov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
              scene.text('You sit next to Albina, who rolls her eyes and scoffs at you. "Go bother someone who cares!"');
              scene.text('"Bitch…" you mutter and she shoots you a piercing glare.');
            } else {
              scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Ivanov asks you to be quiet.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 3) {
            qspCall(s, 'npc_relationship', 'modify', 'A23', 1);
            if (((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
              scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you spend most of the class talking quietly with each other, often getting stern looks from Mr. Ivanov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
                scene.text('You sit next to Albina, who rolls her eyes and scoffs at you. "Go bother someone who cares, geek!"');
                scene.text('"Okay…" you mumble before walking away.');
              } else {
                scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Ivanov asks you to be quiet. At least she spoke to you…');
              }
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              scene.text('You sit next to Albina, who rolls her eyes and scoffs at you. "Go bother someone else, junkie!"');
              scene.text('"Fucking cunt," you mutter and she shoots you a piercing glare.');
            } else {
              scene.text('You sit next to Albina, who gives you a pitiful look before turning away and ignoring you for the rest of the lesson.');
            }
          }
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                  { label: 'Lizaveta', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Lizaveta, who immediately laughs at you and starts mocking you with gossip about whose dick you\'ve sucked recently.');
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        qspCall(s, 'npc_relationship', 'modify', 'A140', 1);
        scene.text('You sit next to Lizaveta and you spend most of the class talking quietly with each other, Lizaveta filling you in on the latest gossip and trying to pry what she can from you. You often get stern looks from Mr. Ivanov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Lizaveta, who proceeds to fill you in on all the gossip about what a friendless loser you are.');
        } else {
          scene.text('You sit next to Lizaveta, who\'s a little surprised that you chose to do so at first, but proceeds to fill you in on the latest gossip before Mr. Ivanov tells her to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                  { label: 'Alyona', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Alyona, who ignores you at first before mouthing "slut" at you and doing a motion with her hands where she pretends to be forcing your head down on her imaginary dick.');
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
        scene.text('You sit next to Alyona and you spend most of the class talking quietly with each other. You often get stern looks from Mr. Ivanov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Alyona and she immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
          scene.text('You sit next to Alyona. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Ivanov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                  { label: 'Artem', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Artem, who looks at you in disgust and instead focuses on his coursework.');
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
        scene.text('You sit next to Artem and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Ivanov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Artem, but he ignores you and chooses to talk to other people or do his coursework.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
          scene.text('You sit next to Artem. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mr. Ivanov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                  { label: 'Gerasim', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Gerasim, who looks at you in disgust and instead focuses on his coursework.');
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        qspCall(s, 'npc_relationship', 'modify', 'A153', 1);
        scene.text('You sit next to Gerasim and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Ivanov when you get a bit too loud. He clears her throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Gerasim, but he ignores you and chooses to talk to other people or do his coursework.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A153', 1);
          scene.text('You sit next to Gerasim. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mr. Ivanov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                  { label: 'Zinaida', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Zinaida, who avoids making eye contact with you and instead focuses on playing a game on her phone before class starts.');
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        qspCall(s, 'npc_relationship', 'modify', 'A142', 'like');
        scene.text('You sit next to Zinaida and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Ivanov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Zinaida, but she awkwardly ignores you and chooses to talk to other people or do her coursework.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A142', 'like');
          scene.text('You sit next to Zinaida. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Ivanov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                  { label: 'Katja', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Katja, who stares at you in disbelief and starts blushing before she gets up and hurries to sit next to someone else.');
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
        scene.text('You sit next to Katja and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Ivanov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Katja, but she awkwardly ignores you and chooses to talk to other people or do her coursework.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
          scene.text('You sit next to Katja. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Ivanov asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                ]);
                              } else {
                                if (((s as any).scooltiperand ?? 0) === 14) {
                                  scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
                                  scene.text('The lesson pauses briefly when one of the other students asks Mr. Ivanov a question about the lesson. With nothing to do for the moment, you doodle lazily in the margin of your notebook.');
                                  scene.text('When you look back up, you notice Artem turning his head away. You don\'t think much of it at first, until you catch him a second time. Was he looking at you, or just in your general direction? Even Mr. Ivanov walks by and pauses next to your desk for a moment before continuing on.');
                                  scene.text('Class resumes, and things return to normal, but part-way through the lesson, you look at Artem again and find him staring at you. It looks like he\'s trying not to make eye contact, however, otherwise he would have noticed you looking back at him. You wonder what his deal is.');
                                  scene.text('Following his gaze down, you spot what\'s caught his attention: your uniform has lost a button, which is giving him a good view of your cleavage.');
                                  qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
                                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                    scene.actions([
                                      { label: 'Ignore it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                    ]);
                                  } else {
                                    scene.actions([
                                      { label: 'Ignore it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
    scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
    scene.text('You ignore it, letting Artem continue to gawk at you. You find yourself somewhat amused at how little it takes to completely enthrall some boys.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                    ]);
                                  }
                                  scene.actions([
                                    { label: 'Pull your shirt closed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/closeshirtfo.jpg');
    scene.text('You quickly grasp both sides of your blouse and pull them tightly together. Artem\'s face turns red when he realizes he\'s been caught, and he immediately turns back to face the blackboard.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                  ]);
                                } else {
                                  if (((s as any).scooltiperand ?? 0) === 15  &&  ((s as any).grupTipe ?? 0) !== 3) {
                                    scene.img('images/locations/pavlovsk/school/classroom/teachdis.jpg');
                                    scene.text('You listen closely to every word Mr. Ivanov says, doing your best to learn. You are, however, somewhat distracted by the way he keeps glancing at you when he thinks you\'re not looking. You notice he keeps checking out your legs, which stick out from under your desk.');
                                    qspCall(s, 'willpower', 'exhib', 'self', 'self');
                                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                      scene.actions([
                                        { label: 'Ignore his stares and wait for the break [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                      ]);
                                    } else {
                                      scene.actions([
                                        { label: 'Ignore his stares and wait for the break [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['gschool_lessons', 'short_break'] },
                                      ]);
                                    }
                                    qspCall(s, 'willpower', 'misc', 'self', 'medium');
                                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                      scene.actions([
                                        { label: 'Call him out [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                      ]);
                                    } else {
                                      scene.actions([
                                        { label: 'Call him out [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/upskirt.jpg');
    scene.text('You pull your skirt over your legs so he can\'t look at you anymore. "Be careful, Mr. Ivanov. If you keep staring at me like that, your eyeballs might pop out of their sockets!"');
    // TODO-QSP: dynamic text: A loud laughter erupts in the classroom, and he raps his desk several times unti...
    scene.text(`A loud laughter erupts in the classroom, and he raps his desk several times until he gets the class to quieten down. "Go to the principal's right <b>now</b>, Miss ${((s as any).pcs_lastname ?? 0)}!"`);
    scene.text('You give him a knowing glare as you walk out of the classroom.');
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
                                      ]);
                                    }
                                    qspCall(s, 'willpower', 'exhib', 'self');
                                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                      scene.actions([
                                        { label: 'Spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                      ]);
                                    } else {
                                      scene.actions([
                                        { label: 'Spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A129', 1);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'flash', 'panties', 'indoors', 5, 1);
      scene.img('images/locations/pavlovsk/school/classroom/spread.jpg');
      scene.text('The thought of him checking you out turns you on a great deal. Throughout the class, you keep spreading your legs whenever he looks your way and you can tell the sight of your panties is arousing him greatly.');
      scene.text('Unable to control yourself, you occasionally give your pussy lips a quick rub through your underwear, preferably when he looks at you. Towards the end of the class, your panties have a large damp spot on them; large enough for him to see from across the room. The outline of your pussy is clearly visible in the wet fabric.');
    } else {
      qspCall(s, 'flash', 'pussy', 'indoors', 5, 1);
      scene.img('images/locations/pavlovsk/school/classroom/spreadb.jpg');
      scene.text('The thought of him checking you out turns you on a great deal. Throughout the class, you keep spreading your legs whenever he looks your way and you can tell the sight of your bare pussy is arousing him greatly.');
      scene.text('Unable to control yourself, you occasionally give your exposed pussy a quick rub, preferably when he looks at you. Towards the end of the class, your pussy lips are soaked in your juices and you absent-mindedly put your finger in your mouth for a taste. ');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                      ]);
                                    }
                                    qspCall(s, 'willpower', 'misc', 'self', 'hard');
                                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                      scene.actions([
                                        { label: 'Flip him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                      ]);
                                    } else {
                                      scene.actions([
                                        { label: 'Flip him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (1);
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    qspCall(s, 'npc_relationship', 'modify', 'A129', (-1));
    scene.img('images/locations/pavlovsk/school/classroom/fuckoff.jpg');
    scene.text('What a pervert! You squeeze your legs together and loudly clear your throat. When Mr. Ivanov looks at you, he\'s staring right at your extended middle finger. Everyone in class notices and all eyes are on you now.');
    // TODO-QSP: dynamic text: "What's the meaning of this, Miss <<$pcs_lastname>>!?" he angrily scowls.
    scene.text(`"What's the meaning of this, Miss ${((s as any).pcs_lastname ?? 0)}!?" he angrily scowls.`);
    scene.text('You\'re not impressed. "One more look and I\'m telling the principal," you boldly tell him.');
    // TODO-QSP: dynamic text: He's slightly nervous now and tries to compose himself. "Miss <<$pcs_lastname>>,...
    scene.text(`He's slightly nervous now and tries to compose himself. "Miss ${((s as any).pcs_lastname ?? 0)}, get out of my class this instant!"`);
    scene.text('You flip him off again on your way out of the door.');
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
                                      ]);
                                    }
                                    scene.actions([
                                      { label: 'Straighten your skirt', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teachdis.jpg');
    scene.text('Your heart is pounding as you try to straighten your skirt as inconspicuously as you can, attempting to make it look natural, like a random afterthought and not because of his staring.');
    // TODO-QSP: dynamic text: Mr. Ivanov doesn't appreciate you interrupting his show and calls attention to y...
    scene.text(`Mr. Ivanov doesn't appreciate you interrupting his show and calls attention to you. "Miss ${((s as any).pcs_lastname ?? 0)}, stop fidgeting in your chair like that. It's distracting."`);
    scene.text('You quickly let go of your skirt. He can still see up your legs, but you don\'t have the courage to do anything about it now. Your cheeks turn crimson red as you mumble an apology. "Sorry, Mr. Ivanov…"');
    scene.text('For the remainder of the class, he keeps shooting glances in your direction. He seems to be having a great time in class today and you suspect that you\'re the reason.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                    ]);
                                  } else {
                                    if (((s as any).scooltiperand ?? 0) === 16  &&  ((s as any).fuckornot ?? 0) === 3) {
                                      scene.img('images/locations/pavlovsk/school/classroom/computer/computer_class.jpg');
                                      scene.text('While working on your computer assignment, you get a message from someone, but no name is listed. It just has a school ID. You look around to see who might have sent it, but no one seems to be paying attention to you. All the message says is "Did you check your rating lately?"');
                                      scene.actions([
                                        { label: 'Ignore it and focus on your school work.', handler: (st: GameState) => {
    (st as any).fuckornot_day = ((st as any).daystart ?? 0) + (Math.floor(Math.random() * 3) + 0);
  }, goto: ['gschool_lessons', 'short_break'] },
                                        { label: 'Visit the \'Fuckable or not\' site', handler: (st: GameState) => {
    // TODO-QSP: $view_location = 'school'
  }, goto: ['komp_HF_or_not', 'fuckornot'] },
                                      ]);
                                    } else {
                                      if (((s as any).scooltiperand ?? 0) === 17) {
                                        qspCall(s, 'stat', '');
                                        scene.img('images/locations/pavlovsk/school/classroom/computer/albbendover.jpg');
                                        scene.text('At the end of class, Mr. Ivanov gives a final assignment for the day. As your fellow students finish it, some of them get up and start checking out some of the computer books Mr. Ivanov has available in class.');
                                        scene.text('Albina is one such student. She takes one of the books to an empty table and bends over it, resting her elbows on it while standing on her toes. This gives you a nice view up her skirt at her thong, but you don\'t know if she\'s doing it on purpose since she angrily glares at Vasily and flips him off when he makes lewd comments out loud. You notice Julia, who also has a view up Albina\'s skirt, blushing and smiling slightly before she turns her attention back to what she was doing.');
                                        qspCall(s, 'arousal', 'voyeur', 5);
                                        qspCall(s, 'arousal', 'end');
                                        scene.actions([
                                          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                        ]);
                                      } else {
                                        if (((s as any).scooltiperand ?? 0) === 18) {
                                          qspCall(s, 'stat', '');
                                          scene.img('images/locations/pavlovsk/school/classroom/computer/alyrage1.jpg');
                                          scene.text('At the end of class, Mr. Ivanov calls Alyona up to the computer at the front of the class, with the large monitor facing the rest of the class so everyone can see. He asks Alyona to troubleshoot a problem he\'s created on a small program. She tries, but fails to figure it out and he arrogantly starts mocking her inability to, as he puts it, "Solve a basic problem that a three year old could have solved by now."');
                                          scene.text('At that point, Alyona loses it. "Fuck you, you worthless motherfucker! I\'m tired of your shit!" Mr. Ivanov is caught off guard and tells her to calm down, but she grabs the trash can next to his desk, dumps it out and throws it at his empty desk.');
                                          scene.actions([
                                            { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/computer/alyrage2.jpg');
    scene.text('He fumes. "That\'s enough, young lady! I\'m taking you to the principal\'s office," he says as he starts walking towards her, but she grabs a chair and threatens him with it.');
    scene.text('"I\'ll smash your fucking head in if you even dare try to touch me, asshole!"');
    scene.text('This causes him to stop and take a step back, the whole class stunned. Alyona is known to have a violent streak, but she normally spends most of her time sleeping in class.');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/computer/alyrage3.jpg');
    scene.text('"Fine. I won\'t touch you, but you\'re going to the principal\'s office," Mr. Ivanov says somewhat calmly.');
    scene.text('She screams and throws the chair across the room before she heads out of class with Mr. Ivanov trailing behind her.');
    scene.text('Once they\'re gone, everyone starts talking about what just happened and sending texts on their phones. Neither of them return to class before the bell rings.');
    scene.actions([
      { label: 'Leave the classroom', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
                                          ]);
                                        } else {
                                          if (((s as any).scooltiperand ?? 0) === 19) {
                                            qspCall(s, 'stat', '');
                                            scene.img('images/locations/pavlovsk/school/classroom/computer/lizalb.jpg');
                                            scene.text('At the end of class, Mr. Ivanov gives a final assignment for the day. As your fellow students finish it, they sit next to each other to talk. Bella and Lizaveta are chatting when they notice Gerasim has his phone out, so they give him their phones and ask him to take several pictures of them together. They do a variety of poses together before collecting their phones from him.');
                                            scene.actions([
                                              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                            ]);
                                          } else {
                                            if (((s as any).scooltiperand ?? 0) === 20) {
                                              qspCall(s, 'stat', '');
                                              scene.img('images/locations/pavlovsk/school/classroom/computer/lizskirt.jpg');
                                              scene.text('At the end of class, Mr. Ivanov gives a final assignment for the day. As your fellow students finish it, they sit next to each other to talk. Bella and Lizaveta end up sitting next to each other, chatting while they look at something on Bella\'s monitor. Lizaveta leans over to get a better view, which gives a nice view of her thigh.');
                                              scene.actions([
                                                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                              ]);
                                            } else {
                                              if (((s as any).scooltiperand ?? 0) === 21  &&  ((s as any).soniaQW ?? 0)?.['slut'] === 1) {
                                                qspCall(s, 'stat', '');
                                                scene.img('images/locations/pavlovsk/school/classroom/computer/soniabutt.jpg');
                                                scene.text('At the end of class, Mr. Ivanov gives a final assignment for the day. It\'s a fairly hard assignment and you\'re just about to start when Sonia walks past you to Mr. Ivanov\'s desk, where she tells him she doesn\'t understand and asks if he can help. He turns his monitor so she can see it and starts explaining what he just told the class.');
                                                scene.text('As he\'s doing this, Sonia leans forward, lifts her skirt up and pulls her panties down, showing the whole class her naked ass and pussy. Several students take out their phones and start taking pictures of her, but she doesn\'t seem to mind in the slightest.');
                                                qspCall(s, 'arousal', 'voyeur', 5);
                                                qspCall(s, 'arousal', 'end');
                                                scene.actions([
                                                  { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                                ]);
                                              } else {
                                                if (((s as any).scooltiperand ?? 0) === 22) {
                                                  qspCall(s, 'stat', '');
                                                  scene.img('images/locations/pavlovsk/school/classroom/computer/soniashirt.jpg');
                                                  scene.text('At the end of class, Mr. Ivanov gives a final assignment for the day. As your fellow students finish it, some of them get up and start checking out some of the computer books Mr. Ivanov has available in class as Sonia sits on one of the desks, her legs slightly spread and showing off her panties as she unbuttons her shirt until you can see between her breasts.');
                                                  scene.text('Mr. Ivanov scolds her, but Sonia smiles at him seductively. "I thought you liked what you saw?"');
                                                  scene.text('He blushes and repeats himself. "Sit down. <i>Now</i>."');
                                                  scene.text('Sonia sits back in her chair smirking, and slowly buttons her shirt back up.');
                                                  qspCall(s, 'arousal', 'voyeur', 5);
                                                  qspCall(s, 'arousal', 'end');
                                                  scene.actions([
                                                    { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                                  ]);
                                                } else {
                                                  if (((s as any).scooltiperand ?? 0) === 23) {
                                                    qspCall(s, 'stat', '');
                                                    scene.img('images/locations/pavlovsk/school/classroom/computer/zinlean.jpg');
                                                    scene.text('At the end of class, Mr. Ivanov gives a final assignment for the day. As your fellow students finish it, Albina, who is still working on it, asks Zinaida if she can help her, since Zinaida was the first one done as always.');
                                                    scene.text('She walks over and starts explaining things to Albina. Mr. Ivanov doesn\'t seem to mind, but then again, he lets the nerds get away with a lot. As Zinaida helps Albina, she leans forward until you can almost see up her skirt, though her tights would ruin any view, even if you could see anything.');
                                                    scene.actions([
                                                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                                    ]);
                                                  } else {
                                                    qspCall(s, 'stat', '');
                                                    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
                                                    scene.text('As you sit in class listening to the lesson, you hear some of your fellow students talking behind you.');
                                                    scene.actions([
                                                      { label: 'Ignore them and wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                                      { label: 'Eavesdrop', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/eavesdrop.jpg');
    qspCall(s, 'gschool_gossip', 'lesson');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
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
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
      }
    }
  }
  scene.build();
}

function enterRussian(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 6) + 0) > 0) {
    (s as any).school_event_hour = 1;
    (s as any).scooltiperand = Math.floor(Math.random() * 25) + 1;
    if (((s as any).scooltiperand ?? 0) === 1) {
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/events/scoolrand_3.jpg');
      scene.text('As you walk into class, you see some guys have drawn a goofy scene on the blackboard, making it look like they\'re characters in a computer game. You share a laugh with them as you sit down; that certainly brightened your mood.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).scooltiperand ?? 0) === 2) {
        qspCall(s, 'mood', 'lower', 'small');
        if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 0  &&  (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['anus'] > 0)) {
          ((s as any).pcs_memory ?? {})['school_no_panty_cum_flash'] = ((s as any).daystart ?? 0);
          scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
          scene.text('Before you can answer the question Mr. Yenotin poses, you have to clean the blackboard, but accidentally drop the cloth. As you bend over to pick it up, you suddenly feel something <i>spurt</i> down your leg.');
          if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] > 0) {
            qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 8) + 8);
            scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so are both your holes leaking cum that\'s dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Yenotin having no idea why as he tries to shout for order.');
          } else {
            if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
              qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 5) + 8);
              scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from your pussy and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Yenotin having no idea why as he tries to shout for order.');
            } else {
              if (((s as any).cum_loc ?? 0)?.['anus'] > 0) {
                qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 8) + 8);
                scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from between your ass cheeks and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Yenotin having no idea why as he tries to shout for order.');
              }
            }
          }
        } else {
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
            qspCall(s, 'arousal', 'flash', (-5));
            qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 5) + 4);
            ((s as any).pcs_memory ?? {})['school_no_panty__anal_plug_flash'] = ((s as any).daystart ?? 0);
            scene.img('images/locations/pavlovsk/school/events/nopanties_buttplug.jpg');
            scene.text('You\'ve been called up to answer the question written on the blackboard, but while solving it, you need to erase something. You accidentally drop the cloth and hesitate to pick it up as you think about the fact that not only are you not wearing any panties, your ass is stuffed with a butt plug.');
            scene.text('"Well?" Mr. Yenotin prods impatiently.');
            scene.text('With a coy smile, you slowly bend over until you feel your skirt rise up, exposing your bare pussy and ass to your classmates. Hearing the flurry of murmurs and whispers, you can\'t help but squeeze and clench around the toy. The boys sound both surprised and intrigued by the sight while the girls whisper to one another that you\'re a slut.');
            scene.text('From where Mr. Yenotin sits, he can\'t see what everyone is fussing over, so he starts to move to get a better look. You quickly snap back up, adjust your skirt and, with a devious smile and cloth in hand, start wiping away at the board as if nothing happened.');
          } else {
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).analPlugIn ?? 0))) {
              qspCall(s, 'arousal', 'flash', (-5));
              qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 5) + 1);
              ((s as any).pcs_memory ?? {})['school_no_panty_flash'] = ((s as any).daystart ?? 0);
              scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
              scene.text('Before you can answer the question Mr. Yenotin poses, you have to clean the blackboard, but accidentally drop the cloth with and totally forget that you\'re not wearing panties. The whistling and shouting from the boys and murmurs of disapproval from most of the girls behind you tell you that everyone has a clear view of your bare ass and both of your holes are on display for everyone to see. Everyone but Mr. Yenotin that is, who has no clue why the class is so riled up and desperately tries to calm them down.');
            } else {
              qspCall(s, 'arousal', 'flashlite', (-5));
              qspCall(s, 'fame', 'pav', 'sex', 1);
              scene.img('images/locations/pavlovsk/school/events/scoolrand_4_1.jpg');
              scene.text('When you walk up to the blackboard to answer a question, you trip and fall. Somehow, you manage to fall in such a way that your skirt ends up on your back and the whole class can see your panty-clad ass. You quickly get up and straighten your clothes with a bright red face, trying to ignore the hollering from your classmates. You can tell that most of the guys and even a few girls definitely appreciated your show, even if it was involuntarily.');
            }
          }
        }
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        if (((s as any).scooltiperand ?? 0) === 3) {
          scene.img('images/locations/pavlovsk/school/events/scoolrand_9.jpg');
          scene.text('As you sit in class waiting for the lesson to begin, you can\'t help but admire the expensive looking stockings Stasya is wearing. With a tinge of jealousy, you wonder where you could buy yourself a pair and if you can afford them.');
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          if (((s as any).scooltiperand ?? 0) === 4) {
            scene.img('images/locations/pavlovsk/school/events/scoolrand_10.jpg');
            scene.text('As you wait for the end of the class, you notice Sonia taking her shoes off and putting them back on, probably trying to get a bit more comfortable in them. She\'s showing off her shapely legs as she does, drawing more than a few looks from her fellow classmates.');
            scene.actions([
              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
            ]);
          } else {
            if (((s as any).scooltiperand ?? 0) === 5) {
              scene.img('images/locations/pavlovsk/school/events/urok7.jpg');
              scene.text('As you wait for the lesson to end, you see that you\'re not the only one who\'s a bit drowsy; Pauline is very close to falling asleep on her desk.');
              scene.actions([
                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
              ]);
            } else {
              if (((s as any).scooltiperand ?? 0) === 6) {
                scene.img('images/locations/pavlovsk/school/classroom/crash.mp4');
                scene.text('During class, there is a loud crash from the back of the room and you, along with the rest of the class, turn to see Lesco is still sitting at his desk, but the desk is now laying on its side on the floor. The whole class bursts out laughing at him.');
                scene.text('Lesco quickly wiggles himself out, gets the desk upright again and hurriedly sits down again, blushing furiously all the while. After making sure he\'s okay, Mr. Yenotin gets the class back under control and finishes the lesson.');
                scene.actions([
                  { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                ]);
              } else {
                if (((s as any).scooltiperand ?? 0) === 7) {
                  if (((s as any).soniaQW ?? 0)?.['slut'] === 1) {
                    scene.img('images/locations/pavlovsk/school/classroom/classflash.mp4');
                    scene.text('Mr. Yenotin engages the class in conversation when Sonia starts openly flirting with him and keeps dropping none too subtle sexual innuendos at him. He does his best to ignore them, but you notice his crotch is developing a serious bulge and he quickly tells the class to read some chapters in their textbook while he hurries to sit down at his desk.');
                    scene.actions([
                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                    ]);
                  } else {
                    qspCall(s, 'gschool_lessonsev1', 'russian');
                  }
                } else {
                  if (((s as any).scooltiperand ?? 0) === 8  &&  ((s as any).soniaQW ?? 0)?.['slut'] === 1) {
                    scene.img('images/locations/pavlovsk/school/classroom/soniaflash.jpg');
                    scene.text('You hear some whispers and see some other students looking towards the back of the room every time Mr. Yenotin is not looking. You glance back and see Sonia flashing her breasts at Marcus every time Mr. Yenotin looks away, while the boys take pictures of her each time and keep encouraging her to show more.');
                    qspCall(s, 'arousal', 'voyeur', 5);
                    qspCall(s, 'arousal', 'end');
                    scene.actions([
                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                    ]);
                  } else {
                    if (((s as any).scooltiperand ?? 0) === 9) {
                      scene.img('images/locations/pavlovsk/school/classroom/dickpic.jpg');
                      scene.text('You get an alert on your phone. After quickly checking that Mr. Yenotin is busy, you sneakily pull it out of your purse and rest it in your lap. You lean back before glancing down to see that someone has sent you an image. You open it up, expecting something innocent, only to be confronted by a photo of someone\'s dick. You hear snickering from one side and look up to investigate, but you can\'t tell who it was or exactly where it came from. Unsure what to do about it, you decide that you don\'t want to be caught looking at it, so you delete the image.');
                      qspCall(s, 'arousal', 'voyeur', 5);
                      qspCall(s, 'arousal', 'end');
                      scene.actions([
                        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                      ]);
                    } else {
                      if (((s as any).scooltiperand ?? 0) === 10) {
                        scene.img('images/locations/pavlovsk/school/classroom/flick.jpg');
                        scene.text('You notice Svyatoslav keeps flicking Lesco\'s ear whenever Mr. Yenotin looks away. Poor Lesco\'s ear is already bright red and he looks like he\'s on the verge of tears.');
                        scene.actions([
                          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                        ]);
                      } else {
                        if (((s as any).scooltiperand ?? 0) === 11) {
                          scene.img('images/locations/pavlovsk/school/classroom/wedgieb.jpg');
                          scene.text('You hear a pained gasp, as do several others. You glance over just in time to see Svyatoslav letting go of Lesco\'s underwear. He\'s pulled it half way up his back and you wince slightly at what looked like a painful wedgie.');
                          scene.actions([
                            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                          ]);
                        } else {
                          if (((s as any).scooltiperand ?? 0) <= 13) {
                            scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
                            scene.text('As you arrive in class, you look around and decide to sit next to…');
                            scene.actions([
                              { label: 'Marcus', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      // TODO-QSP: dynamic text: You sit next to Marcus, who awkwardly shuffles in his seat and avoids looking at...
      scene.text(`You sit next to Marcus, who awkwardly shuffles in his seat and avoids looking at you. As you look around, you see many of your classmates pointing and giggling, and not just at you. "Go on, ${((s as any).pcs_nickname ?? 0)}! You know you want that big black cock stuffed into your whore mouth and down your slutty throat!" you hear someone shout out.`);
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        qspCall(s, 'npc_relationship', 'modify', 'A146', 1);
        scene.text('You sit next to Marcus and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Yenotin when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Marcus, who tries to politely avoid conversation, but people start laughing at him for letting you talk to him. They then turn their attention to you and mock you for trying to speak with a popular kid.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A146', 1);
          scene.text('You sit next to Marcus. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mr. Yenotin asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Stasya', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Stasya, who shoots daggers at you. "What the fuck do you want, whore? Do I look like I talk to dick hungry sluts like you? Keep your filthy mouth away from Andrey or you\'ll regret it, bitch."');
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        qspCall(s, 'npc_relationship', 'modify', 'A139', 1);
        scene.text('You sit next to Stasya and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Yenotin when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Stasya, but she scoffs at your attempts to speak with her and turns her attention to speaking with Irina.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A139', 1);
          scene.text('You sit next to Stasya. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Yenotin asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Alyona', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Alyona, who ignores you at first before mouthing "slut" at you and doing a motion with her hands where she pretends to be forcing your head down on her imaginary dick.');
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
        scene.text('You sit next to Alyona and you spend most of the class talking quietly with each other. You often get stern looks from Mr. Yenotin when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You are forced to sit next to Alyona and she immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
          scene.text('You sit next to Alyona. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Yenotin asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Ekaterina', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Katyusha, who ignores you at first before mouthing "slut" at you and doing a motion with her hands where she pretends to be forcing your head down on her imaginary dick.');
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        qspCall(s, 'npc_relationship', 'modify', 'A145', 1);
        scene.text('You sit next to Katyusha and you spend most of the class talking quietly with each other. You often get stern looks from Mr. Yenotin when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Katyusha and she immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          scene.text('You sit next to Katyusha and she immediately gives you a deathly stare that lets you know you shouldn\'t even bother trying to talk to her.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Svyatoslav', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Svyatoslav, who ignores you at first before getting your attention and pointing at the bulge in his pants while winking. "You know you want it, so come and get it slut." he whispers with a smile.');
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        qspCall(s, 'npc_relationship', 'modify', 'A8', 1);
        scene.text('You sit next to Svyatoslav and you spend most of the class talking quietly with each other. You often get stern looks from Mr. Yenotin when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Svyatoslav, who completely ignores you and talks to Vanya instead.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A8', 1);
          scene.text('You sit next to Svyatoslav. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him where he flirts with you before Mr. Yenotin asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Pauline', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Pauline, who ignores you at first before mouthing "slut" at you and doing a motion with her hands where she pretends to be forcing your head down on her imaginary dick.');
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        qspCall(s, 'npc_relationship', 'modify', 'A24', 1);
        scene.text('You sit next to Pauline and you spend most of the class talking quietly with each other. You often get stern looks from Mr. Yenotin when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You are forced to sit next to Pauline and she immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A24', 1);
          scene.text('You sit next to Pauline. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Yenotin asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Vicky', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Vicky, who gives you a disgusted glare and walks away to sit with Vanya.');
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        qspCall(s, 'npc_relationship', 'modify', 'A15', 1);
        scene.text('You sit next to Vicky and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Yenotin when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Vicky, but she ignores you and instead talks to Vanya and her sister.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A15', 1);
          scene.text('You sit next to Vicky. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before Mr. Yenotin asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Irina', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Irina, who looks at you in disgust and turns away to talk to someone else.');
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        qspCall(s, 'npc_relationship', 'modify', 'A17', 1);
        scene.text('You sit next to Irina and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Yenotin when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Irina, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and talking to other people.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A17', 1);
          scene.text('You sit next to Irina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Yenotin asks you to be quiet.');
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            ]);
                          } else {
                            if (((s as any).scooltiperand ?? 0) === 14) {
                              scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
                              scene.text('The lesson pauses briefly when one of the other students asks Mr. Yenotin a question about his lesson. With nothing to do for the moment, you doodle lazily in the margin of your notebook.');
                              scene.text('When you look back up, you notice Marcus turning his head away. You don\'t think much of it at first, until you catch him a second time. Was he looking at you, or just in your general direction? Even Mr. Yenotin walks by and pauses next to your desk for a moment before continuing on.');
                              scene.text('Class resumes, and things return to normal, but part-way through the lesson, you look at Marcus again and find him staring at you. It looks like he\'s trying not to make eye contact, however, otherwise he would have noticed you looking back at him. You wonder what his deal is.');
                              scene.text('Following his gaze down, you spot what\'s caught his attention: your uniform has lost a button, which is giving him a good view of your cleavage.');
                              qspCall(s, 'willpower', 'exhib', 'self');
                              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                scene.actions([
                                  { label: 'Ignore it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                ]);
                              } else {
                                scene.actions([
                                  { label: 'Ignore it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A146', 1);
    scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
    scene.text('You ignore it, letting Marcus continue to gawk at you. You find yourself somewhat amused at how little it takes to completely enthrall some boys.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                ]);
                              }
                              scene.actions([
                                { label: 'Pull your shirt closed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/closeshirtfo.jpg');
    scene.text('You quickly grasp both sides of your blouse and pull them tightly together. Marcus\'s face turns red when he realizes he\'s been caught, and he immediately turns back to face the blackboard.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              ]);
                            } else {
                              if (((s as any).scooltiperand ?? 0) === 15  &&  (((s as any).soniaQW ?? 0)?.['soniafall'] === 5  ||  ((s as any).soniaQW ?? 0)?.['slut'] === 1)) {
                                scene.img('images/locations/pavlovsk/school/classroom/russian/soniadare1.jpg');
                                scene.text('As you work on your class assignment, you hear Pauline talking to Sonia. "I dare you to walk up to Mr. Yenotin and ask him for help. Then bend over his desk, pull your panties down and show everyone your ass."');
                                scene.text('Sonia blushes a little, but also looks thrilled at the idea. "Everyone would see…"');
                                scene.text('Pauline nods. "Yeah, everyone would see how badass you are!"');
                                scene.text('Sonia looks around, spots you looking at them and grins as she gets up and heads up to Mr. Yenotin\'s desk.');
                                scene.actions([
                                  { label: 'Ignore them and wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                  { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/russian/soniadare2.jpg');
    scene.text('She stops at his desk and starts talking to him quietly. You can\'t hear what she\'s saying, but he\'s smiling and nodding at her before he starts explaining something to her. She then leans forward over the desk, lifts her skirt up and then pulls her panties down, showing off her bare ass and pussy to the whole class. When Mr. Yenotin isn\'t looking, just about the whole class pull out their phones and start taking pictures of Sonia\'s naked ass.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                ]);
                              } else {
                                if (((s as any).scooltiperand ?? 0) === 16) {
                                  scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
                                  scene.text('For today\'s lesson, Mr. Yenotin decides to have the class to read a passage from an old literature book out loud, one that even native Russian speakers sometimes find difficult with the slightly different pronunciations. You and your classmates open the book and Mr. Yenotin tells Stasya to begin from the top of the page. She sighs and starts reading loudly.');
                                  scene.text('After a few pages, Mr. Yenotin stops and thanks Stasya before he looks around for someone to take over, spotting Marcus. "Why don\'t we have our exchange student read some pages? You need the practice anyway."');
                                  scene.text('Marcus looks around worryingly. "Can I skip it this time?" he pleads.');
                                  scene.text('Mr. Yenotin shakes his head. "Don\'t worry, go on. It\'ll be fine."');
                                  scene.text('Marcus clears his throat and starts reading. He\'s painfully slow at times and his American accent doesn\'t help, but he does his best. As he comes to a difficult part, he starts stammering and gets stuck trying to pronounce a word correctly.');
                                  scene.text('As Marcus tries to tackle the word, you hear someone snickering behind him. It\'s Alyona. "M.-M.-Maybe you should t-t-try once again. Are you slow or something?"');
                                  scene.text('The rest of the class starts laughing while Marcus shamefully stares down at his desk.');
                                  qspCall(s, 'willpower', 'misc', 'self', 'medium');
                                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                    scene.actions([
                                      { label: 'Tell her off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                    ]);
                                  } else {
                                    scene.actions([
                                      { label: 'Tell her off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A143', (-11));
    qspCall(s, 'npc_relationship', 'modify', 'A146', 1);
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('Not wanting to partake in the bullying, you decide to speak up. "Shut up, Alyona. At least he has an excuse. What\'s yours? Drunk again?"');
    scene.text('Alyona reacts as expected. She leaps from her desk and heads straight towards you. "What the fuck did you say to me, bitch?! You don\'t know anything about me! Say something like that to me again and I\'ll fuck you up!"');
    scene.text('Before she reaches you, Mr. Yenotin steps in and defuses the situation, telling Alyona to return to her desk. The class sits in silence for a moment before Mr. Yenotin tells Lesco to read instead. After a while, you notice Marcus looking at you, nodding gratefully.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                    ]);
                                  }
                                  scene.actions([
                                    { label: 'Join in', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A146', (-1));
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('"What\'s wrong, Marcus? Cat got your tongue?" you teasingly say.');
    scene.text('Marcus murmurs something in English.');
    scene.text('"W-W-What\'s that, s-s-speak up," you answer and have the whole class laughing.');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, that's enough! No need to be rude to our guest," Mr. Ye...
    scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, that's enough! No need to be rude to our guest," Mr. Yenotin lectures you. "You did great, Marcus. Don't listen to them."`);
    scene.text('Marcus nods and thanks Mr. Yenotin while giving you a cold stare.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                    { label: 'Do nothing', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('Not wanting to partake in the bullying, but also not wanting to piss off Alyona or the gopniks, you don\'t say anything. "Please continue," Mr. Yenotin tells Marcus while giving Alyona a disapproving look. "Please be nice and treat others as you would like them to treat you." This doesn\'t have the effect he was hoping for as it just gets her and several other students laughing.');
    scene.text('After a few minutes, Marcus is still struggling as Pauline joins in as well, interrupting him each time he almost gets the word right. Soon, about half the class has joined in and Mr. Yenotin gives up. "That\'s enough! It was a good effort, Marcus. Alyona, why don\'t you read the next part?"');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                    { label: 'Take over reading', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A146', 1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You hate seeing Marcus being bullied, but you don\'t want to piss off Alyona or the other gopniks either, so you wait for Marcus to stop again and start reading instead. You know it isn\'t your turn, but you don\'t care. Mr. Yenotin smiles at you and doesn\'t seem to mind. Marcus lets out a sigh of relief and gives you a grateful smile, while Alyona just rolls her eyes at you for ruining her fun.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                  ]);
                                } else {
                                  if (((s as any).scooltiperand ?? 0) === 17) {
                                    scene.img('images/locations/pavlovsk/school/classroom/teachdis.jpg');
                                    scene.text('You listen closely to every word Mr. Yenotin says, doing your best to learn. You are, however, somewhat distracted by the way he keeps glancing at you when he thinks you\'re not looking. You notice he keeps checking out your legs, which stick out from under your desk.');
                                    qspCall(s, 'willpower', 'exhib', 'self', 'easy');
                                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                      scene.actions([
                                        { label: 'Ignore his stares and wait for the break [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                      ]);
                                    } else {
                                      scene.actions([
                                        { label: 'Ignore his stares and wait for the break [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['gschool_lessons', 'short_break'] },
                                      ]);
                                    }
                                    qspCall(s, 'willpower', 'misc', 'self', 'medium');
                                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                      scene.actions([
                                        { label: 'Call him out [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                      ]);
                                    } else {
                                      scene.actions([
                                        { label: 'Call him out [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/upskirt.jpg');
    scene.text('You pull your skirt over your legs so he can\'t look at you anymore. "Be careful, Mr. Yenotin. If you keep staring at me like that, your eyeballs might pop out of their sockets!"');
    scene.text('A loud laughter erupts in the classroom and Mr. Yenotin looks embarrassed. He opens his mouth as if he wants to say something in defense, but thinks the better of it and just lets you have your win. After a while, he manages to get the class back under control and continues to teach, carefully avoiding your legs.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                      ]);
                                    }
                                    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
                                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                      scene.actions([
                                        { label: 'Spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                      ]);
                                    } else {
                                      scene.actions([
                                        { label: 'Spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A130', 1);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'flash', 'panties', 'indoors', 5, 1);
      scene.img('images/locations/pavlovsk/school/classroom/spread.jpg');
      scene.text('The thought of him checking you out turns you on a great deal. Throughout the class, you keep spreading your legs whenever he looks your way and you can tell the sight of your panties is arousing him greatly.');
      scene.text('Unable to control yourself, you occasionally give your pussy lips a quick rub through your underwear, preferably when he looks at you. Towards the end of the class, your panties have a large damp spot on them; large enough for him to see from across the room. The outline of your pussy is clearly visible in the wet fabric.');
    } else {
      qspCall(s, 'flash', 'pussy', 'indoors', 5, 1);
      scene.img('images/locations/pavlovsk/school/classroom/spreadb.jpg');
      scene.text('The thought of him checking you out turns you on a great deal. Throughout the class, you keep spreading your legs whenever he looks your way and you can tell the looks of your bare pussy is arousing him greatly.');
      scene.text('Unable to control yourself, you occasionally give your exposed pussy a quick rub, preferably when he looks at you. Towards the end of the class, your pussy lips are soaked in your juices and you absent-mindedly put your finger in your mouth for a taste.');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                      ]);
                                    }
                                    qspCall(s, 'willpower', 'misc', 'self', 'hard');
                                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                      scene.actions([
                                        { label: 'Flip him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                      ]);
                                    } else {
                                      scene.actions([
                                        { label: 'Flip him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (10);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (5);
    qspCall(s, 'npc_relationship', 'modify', 'A130', (-5));
    scene.img('images/locations/pavlovsk/school/classroom/fuckoff.jpg');
    scene.text('What a pervert! You squeeze your legs together and loudly clear your throat. When Mr. Yenotin looks at you, he\'s staring right at your extended middle finger. Everyone in class notices and all eyes are on you now.');
    // TODO-QSP: dynamic text: "What's the meaning of this, Miss <<$pcs_lastname>>!?" he angrily scowls.
    scene.text(`"What's the meaning of this, Miss ${((s as any).pcs_lastname ?? 0)}!?" he angrily scowls.`);
    scene.text('You\'re not impressed. "One more look and I\'m telling the principal," you boldly tell him.');
    scene.text('Flustered, Mr. Yenotin leaves the class for a moment. Your classmates, unsure of what just happened, softly talk with one another. After a minute or so, Mr. Yenotin returns to class and resumes his lesson like nothing happened, carefully avoiding eye contact you. Everyone in class is very surprised that you didn\'t get kicked out after what you just did.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                      ]);
                                    }
                                    scene.actions([
                                      { label: 'Straighten your skirt', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teachdis.jpg');
    scene.text('Your heart is pounding as you try to straighten your skirt as inconspicuously as you can, attempting to make it look natural, like a random afterthought and not because of his staring.');
    // TODO-QSP: dynamic text: Mr. Yenotin doesn't appreciate you interrupting his show and calls attention to ...
    scene.text(`Mr. Yenotin doesn't appreciate you interrupting his show and calls attention to you. "Miss ${((s as any).pcs_lastname ?? 0)}, stop fidgeting in your chair like that. It's distracting."`);
    scene.text('You quickly let go of your skirt. He can still see up your legs, but you don\'t have the courage to do anything about it now. Your cheeks turn crimson red as you mumble an apology. "I\'m sorry, Mr. Yenotin…"');
    scene.text('For the remainder of the class, he keeps shooting glances in your direction. He seems to be having a great time in class today and you suspect that you\'re the reason.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                    ]);
                                  } else {
                                    if (((s as any).scooltiperand ?? 0) === 18) {
                                      scene.img('images/locations/pavlovsk/school/classroom/russian/alyonachalk.jpg');
                                      scene.text('Mr. Yenotin calls Alyona up to the front of the class and asks her to write what he recites on the blackboard. He faces the class talking about a complex sentence structure, but instead of writing what he says, Alyona starts drawing a naked ass with a large dick in it. This gets the whole class laughing and confuses Mr. Yenotin, who tries to calm everyone down.');
                                      scene.text('When he finally turns around and sees what\'s on the board, he rushes up to wipe it off. He then tells Alyona to take a seat as he starts writing what he says on the board himself as he tries to continue the lesson.');
                                      scene.actions([
                                        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                      ]);
                                    } else {
                                      if (((s as any).scooltiperand ?? 0) === 19) {
                                        scene.img('images/locations/pavlovsk/school/classroom/russian/alyonasmoke.jpg');
                                        scene.text('You notice some smoke drifting your way near the end of class. You turn and see Alyona, looking bored while smoking a cigarette. When Mr. Yenotin sees it, he walks up to her desk. "No smoking in class."');
                                        scene.text('She gives him a bored look. "I know," she replies as she takes another drag of her cigarette.');
                                        scene.text('He gives her a frustrated look. "Please put it out."');
                                        scene.text('She gives him a half ass, bewildered look. "Put what out?"');
                                        scene.text('He sighs before he takes the cigarette from her and walks back to the front of the class, where he puts it out and throws the butt in the trash can before continuing his lesson.');
                                        scene.actions([
                                          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                        ]);
                                      } else {
                                        if (((s as any).scooltiperand ?? 0) === 20) {
                                          scene.img('images/locations/pavlovsk/school/classroom/russian/paulpanties.jpg');
                                          scene.text('As class ends and everyone starts to get up, Pauline stops in front of Marcus, bends over and lifts her skirt to show him her panty clad ass and wiggles it around. "That\'s as close as any Russian girl will get to letting you touch them. It must be… Hard being so far from home."');
                                          scene.text('She teases him a bit more and gets a lot of laughs. He does his best to ignore it, but he can\'t help himself from looking.');
                                          qspCall(s, 'arousal', 'voyeur', 5);
                                          qspCall(s, 'arousal', 'end');
                                          scene.actions([
                                            { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
                                          ]);
                                        } else {
                                          if (((s as any).scooltiperand ?? 0) === 21) {
                                            scene.img('images/locations/pavlovsk/school/classroom/russian/stasyatongue.jpg');
                                            scene.text('You see Svyatoslav talking to Stasya before he pulls out his phone to take her picture. She does a few goofy poses until Mr. Yenotin interrupts them.');
                                            scene.actions([
                                              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                            ]);
                                          } else {
                                            qspCall(s, 'stat', '');
                                            scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
                                            scene.text('As you sit in class listening to the lesson, you hear some of your fellow students talking behind you.');
                                            scene.actions([
                                              { label: 'Ignore them and wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                              { label: 'Eavesdrop', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/eavesdrop.jpg');
    qspCall(s, 'gschool_gossip', 'lesson');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
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
    scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'fiz_rand':
      enterFizRand(s, scene);
      break;
    case 'fiz2':
      enterFiz2(s, scene);
      break;
    case 'fiz8':
      enterFiz8(s, scene);
      break;
    case 'fiz10':
      enterFiz10(s, scene);
      break;
    case 'biology':
      enterBiology(s, scene);
      break;
    case 'science':
      enterScience(s, scene);
      break;
    case 'computer':
      enterComputer(s, scene);
      break;
    case 'russian':
      enterRussian(s, scene);
      break;
    default:
      enterFizRand(s, scene);
      break;
  }
}

export const gschool_lessonsev1: LocationDef = {
  name: 'gschool_lessonsev1',
  title: 'During the warm-up for gym class, Coach Pavlovich comes over',
  region: 'other',
  description: ['During the warm-up for gym class, Coach Pavlovich comes over to assist you with your warm-up, his groin grinding against your ass as he does. If looks could kill, Christina\'s jealous gaze would have had you dead on the ground by now.'],
  enter: enter,
};
