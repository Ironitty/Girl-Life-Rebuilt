import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGeography(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 6) + 0) > 0) {
    (s as any).school_event_hour = 1;
    (s as any).scooltiperand = (Math.floor(Math.random() * 16) + 1);
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
        qspCall(s, 'stat', '');
        if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 0  &&  (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['anus'] > 0)) {
          ((s as any).pcs_memory = (s as any).pcs_memory ?? {})['school_no_panty_cum_flash'] = ((s as any).daystart ?? 0);
          scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
          scene.text('Before you can answer the question Mrs. Sokoloff poses, you have to clean the blackboard, but accidentally drop the cloth. As you bend over to pick it up, you suddenly feel something <i>spurt</i> down your leg.');
          if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] > 0) {
            qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
            scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so are both your holes leaking cum that\'s dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mrs. Sokoloff having no idea why as she tries to shout for order.');
          } else {
            if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
              qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 5) + 8));
              scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from your pussy and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mrs. Sokoloff having no idea why as she tries to shout for order.');
            } else {
              if (((s as any).cum_loc ?? 0)?.['anus'] > 0) {
                qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
                scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from between your ass cheeks and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mrs. Sokoloff having no idea why as she tries to shout for order.');
              }
            }
          }
        } else {
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
            qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
            qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 5) + 8));
            ((s as any).pcs_memory = (s as any).pcs_memory ?? {})['school_no_panty__anal_plug_flash'] = ((s as any).daystart ?? 0);
            scene.img('images/locations/pavlovsk/school/events/nopanties_buttplug.jpg');
            scene.text('You\'ve been called up to answer the question written on the blackboard, but while solving it, you accidentally drop the cloth used to wipe the board. You totally forget that not only are you are not wearing panties, your ass is stuffed with a butt plug. When you bend over, you feel your skirt rising up, exposing your bare pussy and ass to your class. Hearing the flurry of murmurs and whispers, you can\'t help but squeeze and clench around the toy currently filling your ass. The boys sound both surprised and intrigued by the sight while the girls whisper to one another that you\'re a slut.');
            scene.text('From where Mrs. Sokoloff sits, she can\'t see what everyone is fussing over, so she starts to move to get a better look. You quickly snap back up, adjust your skirt and start wiping away at the board as if nothing happened.');
          } else {
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).analPlugIn ?? 0))) {
              qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
              qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 4) + 1));
              ((s as any).pcs_memory = (s as any).pcs_memory ?? {})['school_no_panty_flash'] = ((s as any).daystart ?? 0);
              scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
              scene.text('Before you can answer the question Mrs. Sokoloff poses, you have to clean the blackboard, but accidentally drop the cloth and totally forget that you\'re not wearing panties. The whistling and shouting from the boys and murmurs of disapproval from most of the girls behind you tell you that everyone has a clear view of your bare ass and both of your holes are on display for everyone to see. Everyone but Mrs. Sokoloff that is, who has no clue why the class is so riled up and desperately tries to calm them down.');
            } else {
              qspCall(s, 'arousal', 'flash', (-5));
              qspCall(s, 'fame', 'pav', 'sex', 1);
              scene.img('images/locations/pavlovsk/school/events/scoolrand_4_1.jpg');
              scene.text('When you walk up to the blackboard to answer a question, you trip and fall. Somehow, you manage to fall in such a way that your skirt ends up on your back and the whole class can see your panty-clad ass. You quickly get up and straighten your clothes with a bright red face, trying to ignore the hollering from your classmates. You can tell that most of the guys and even a few girls definitely appreciated your show, even if it was involuntarily.');
            }
          }
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        if (((s as any).scooltiperand ?? 0) === 3) {
          scene.img('images/locations/pavlovsk/school/classroom/crash.mp4');
          scene.text('During class, there is a loud crashing sound from the back of the class. You, along with everyone, turn to see that Mefodiy is still sitting at his desk, but the desk is now laying on its side on the floor. The whole class bursts out laughing at him.');
          scene.text('Mefodiy is blushing as he quickly gets out of the desk and gets it back upright and sits back down in it. After making sure he\'s okay, Mrs. Sokoloff gets the class back under control and finishes the lesson.');
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          if (((s as any).scooltiperand ?? 0) === 4) {
            scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
            scene.text('Glancing over, you notice Vitek reaching around and grabbing the breasts of the girl in front of him. At first, she tries to fend him off and tells him to stop, but after a few stares from Mrs. Sokoloff, she just gives up and tries to ignore his groping hands.');
            qspCall(s, 'arousal', 'voyeur', 5);
            qspCall(s, 'arousal', 'end');
            scene.actions([
              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
            ]);
          } else {
            if (((s as any).scooltiperand ?? 0) === 5) {
              scene.img('images/locations/pavlovsk/school/classroom/dickpic.jpg');
              scene.text('You get an alert on your phone and pull it out of your purse before placing it in your lap. You glance down and see someone has sent you an image. Opening it, you\'re greeted by the sight of someone\'s dick. You hear some snickering and look up to see who it was, but you can\'t tell where it came from. Unsure what to do and not wanting to be caught looking at it, you quickly delete the image.');
              qspCall(s, 'arousal', 'erotic', 5);
              qspCall(s, 'arousal', 'end');
              scene.actions([
                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
              ]);
            } else {
              if (((s as any).scooltiperand ?? 0) === 6) {
                scene.img('images/locations/pavlovsk/school/classroom/flick.jpg');
                scene.text('You notice Valentin keeps flicking Artem\'s ear when Mrs. Sokoloff looks away. Poor Artem\'s ear is already bright red and he looks like he\'s on the verge of tears.');
                scene.actions([
                  { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                ]);
              } else {
                if (((s as any).scooltiperand ?? 0) === 7) {
                  scene.img('images/locations/pavlovsk/school/classroom/wedgieb.jpg');
                  scene.text('You hear a pained grasp, as do several others, and glance over just in time to see Valentin letting go of Artem\'s underwear. He\'s pulled it half way up his back and you wince slightly at what looked like a painful wedgie.');
                  scene.actions([
                    { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                  ]);
                } else {
                  if (((s as any).scooltiperand ?? 0) <= 9) {
                    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
                    scene.text('As you arrive in class, you look around and decide to sit next to…');
                    qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
                    scene.actions([
                      { label: 'Mefodiy', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Mefodiy, who expresses his disgust at your slutiness with sarcastic jokes and then ignores you for the rest of the lesson.');
    } else {
      if (((st as any).grupTipe ?? 0) === 1) {
        qspCall(st, 'npc_relationship', 'modify', 'A148', 1);
        scene.text('You sit next to Mefodiy and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Mefodiy, but he ignores you for the duration of the lesson.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A148', 1);
          scene.text('You sit next to Mefodiy. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before Mrs. Sokoloff asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Andrey and Stasya', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Andrey and Stasya. Stasya glares at you and warns you not to even try and suck Andrey\'s dick, but he laughs in response, saying how he would never let your filthy mouth near him.');
    } else {
      if (((st as any).grupTipe ?? 0) === 1) {
        qspCall(st, 'npc_relationship', 'modify', 'A139', 1);
        qspCall(st, 'npc_relationship', 'modify', 'A147', 1);
        scene.text('You sit next to Andrey and Stasya and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you all to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Andrey and Stasya, but they dismiss all of your attempts to speak with them and instead spend the lesson talking to each other.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A139', 1);
          qspCall(st, 'npc_relationship', 'modify', 'A147', 1);
          scene.text('You sit next to Andrey and Stasya. They\'re a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mrs. Sokoloff asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Valentin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Valentin, who gives you a perverted smile and keeps asking if you want \'go for a ride\' with him. "And I don\'t mean on my bike, slut," he adds with a wink.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'npc_relationship', 'modify', 'A158', 1);
        scene.text('You sit next to Valentin and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Valentin and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A158', 1);
          scene.text('You sit next to Valentin. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mrs. Sokoloff asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Evgeny', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Evgeny, who looks at you in disgust, picks up his chess board and finds another seat to play his game.');
    } else {
      scene.text('You sit next to Evgeny, but he\'s so focused on the chess game in front of him that he doesn\'t notice you and ignores your efforts to communicate with him.');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Artem', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Artem, who looks at you in disgust and instead focuses on his coursework.');
    } else {
      if (((st as any).grupTipe ?? 0) === 3) {
        qspCall(st, 'npc_relationship', 'modify', 'A2', 1);
        scene.text('You sit next to Artem and you spend most of the class talking quietly with each other. You often get Miss Orlov\'s best attempts to give you a stern look when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Artem, but he ignores you and chooses to talk to other people or do his coursework.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A2', 1);
          scene.text('You sit next to Artem. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Miss Orlov asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Vanya', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Vanya, who immediately stands up and walks over to sit with Katja and Vicky, all of them giving disgusted looks.');
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        qspCall(st, 'npc_relationship', 'modify', 'A165', 1);
        scene.text('You sit next to Vanya and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Vanya, but he ignores you, instead choosing to lean back and talk with Katja and Vicky.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A165', 1);
          scene.text('You sit next to Vanya. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before you catch Vicky giving you dagger eyes and you turn away.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Lazar', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Lazar, who mocks you for the duration of the lesson about how many dicks you\'ve sucked and how your breath probably smells of cum.');
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        qspCall(st, 'npc_relationship', 'modify', 'A149', 1);
        scene.text('You sit next to Lazar and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Lazar, but he largely ignores you, only talking to you if it involves mocking you.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A149', 1);
          scene.text('You sit next to Lazar. He\'s a little surprised that you chose to do so, but seems to enjoy the attention you\'re giving him. You\'re able to strike up a brief conversation with him before Mrs. Sokoloff asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Vitek', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Vitek, who gives you a perverted smile and leans back in his chair to show you the bulge in his pants. "It\'s all yours, whore. All you have to do is ask," he says with a wink.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
        scene.text('You sit next to Vitek and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Vitek and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
          scene.text('You sit next to Vitek. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mrs. Sokoloff asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).scooltiperand ?? 0) === 10) {
                      scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
                      scene.text('The lesson takes a brief pause as one of the students asks Mrs. Sokoloff a question about her paper. With nothing to do for the moment, you doodle lazily in the margin of your notebook.');
                      scene.text('When you look back up, you notice Artem turning his head away. You don\'t think much of it at first, until you catch him a second time. Was he looking at you, or just in your direction? Even Mrs. Sokoloff walks by and pauses next to your desk for a moment before continuing on.');
                      scene.text('Class resumes, and things return to normal, but part-way through the lesson, you look at Artem again and find him staring at you. He\'s clearly not trying to make eye contact, however, or he would have noticed you looking back at him.');
                      scene.text('Following his gaze down, you spot what\'s caught his attention: your uniform has lost a button, which is giving him a good view of your cleavage.');
                      qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
                      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                        scene.actions([
                          { label: 'Ignore it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                        ]);
                      } else {
                        scene.actions([
                          { label: 'Ignore it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'fame', 'pav', 'sex', 1);
    qspCall(st, 'stat', '');
    qspCall(st, 'npc_relationship', 'modify', 'A2', 1);
    scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
    scene.text('You let Artem continue to gawk at you. You find yourself somewhat amused at how little it takes to completely enthrall some boys.');
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
                      if (((s as any).scooltiperand ?? 0) === 11) {
                        scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
                        scene.text('Mrs. Sokoloff has stepped outside the classroom, telling you to do an assignment until she returns.');
                        scene.text('Valentin and Vitek seem to be in a good mood today, as they\'re whispering and laughing loudly about something.');
                        scene.actions([
                          { label: 'Eavesdrop', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/eavesdrop.jpg');
    scene.text('"Should I really do it? I\'ll get in trouble," you hear Valentin say.');
    scene.text('"So what? Don\'t be such a pussy! Think of the respect you\'re going to get from the rest of the class," Vitek replies.');
    scene.actions([
      { label: 'Return to your assignment', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You continue on with your assignment, not paying much attention to them. After a few minutes, you hear something happening behind you. You turn around, but the two boys are just sitting there, grinning.');
    scene.text('After a few minutes, the two boys can\'t hold out anymore and start laughing loudly. They can\'t control themselves and everyone starts looking at them.');
    scene.text('They start pointing at your back while laughing. You try to see why they\'re laughing and all of a sudden you feel it…');
    scene.actions([
      { label: 'Scream', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/classcum.jpg');
    scene.text('You feel something wet hit the side of your face and shoulder from behind. You look over just in time to see Valentin finish jerking off on you.');
    scene.text('"What the hell?! Are you fucking insane?!" you shout as you try and wipe the wetness from your face.');
    scene.text('"Listen here-" Just as the boys are about to reply, they stop as Mrs. Sokoloff returns.');
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell on them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell on them', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspCall(st, 'npc_relationship', 'modify', 'A9', (-2));
    qspCall(st, 'npc_relationship', 'modify', 'A158', (-1));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/ask.jpg');
    scene.text('You quickly get out of your seat and run to Mrs. Sokoloff, telling her what happened.');
    scene.text('She immediately yells for Vitek and Valentin to come to the desk. "The principal will have a field day with you two! How could you do something so disgusting?!"');
    // TODO-QSP: dynamic text: While the boys keep to their story that they''re innocent, Mrs. Sokoloff turns t...
    scene.text(`While the boys keep to their story that they're innocent, Mrs. Sokoloff turns to you. "Miss ${((st as any).pcs_lastname || '')}, you're excused to visit the toilet to wash off."`);
    scene.text('When you return, the boys are gone. Mrs. Sokoloff tells you that they\'ve been sent to the principal and that you done the right thing telling her.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t tell on them', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A158', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    // TODO-QSP: dynamic text: You quickly start wiping the cum off you while giving them dirty looks, one of t...
    scene.text(`You quickly start wiping the cum off you while giving them dirty looks, one of the girls giving you some tissues to help. You quickly clean yourself and your clothes up as best you can before Mrs. Sokoloff notices you. "What are you doing over there, Miss ${((st as any).pcs_lastname || '')}?"`);
    scene.text('You glance up at her before turning to clean up the rest of your shoulder while looking at the boys. "Something must have dripped on me from the ceiling and I was just cleaning it up."');
    scene.text('Mrs. Sokoloff looks up at the ceiling, as if expecting something to fall from it before she goes back to teaching the class.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
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
                        if (((s as any).scooltiperand ?? 0) === 12) {
                          scene.img('images/locations/pavlovsk/school/classroom/geography/geography.jpg');
                          scene.text('For today\'s lesson Mrs. Sokoloff is talking about Africa, going through the rich flora and fauna that can be found there.');
                          scene.text('She tells you to open your books to page 150, where you see a photo of a tribe. They\'re wearing a minuscule amount of clothes.');
                          scene.text('"Look at them. They\'re nude!" Lazar laughs. "They all look like Marcus!"');
                          scene.text('"Shut up!" Andrey yells. "Are you really that butthurt that they all have bigger cocks than you?"');
                          scene.text('"How the hell do you know that? Have you been looking at my cock? What a faggot!" Lazar retorts and the whole class bursts into laughter.');
                          scene.text('"Fuck you, that wasn\'t what I meant! It\'s a well known fact that black guys have bigger cocks," Andrey quickly replies.');
                          if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
                            // TODO-QSP: dynamic text: "Well, everyone has a bigger cock than you, but why not ask the expert on cocks?...
                            scene.text(`"Well, everyone has a bigger cock than you, but why not ask the expert on cocks?" Lazar says before he turns to you. "Is there any truth to this 'fact', ${((s as any).pcs_nickname || '')}?"`);
                            scene.actions([
                              { label: 'Refuse to answer', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/fuckoff.jpg');
    scene.text('The class turns to see what you\'ll say, but your answer is showing him the middle finger without even looking up from your book.');
    // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>! Share your knowledge!" Lazar sighs.
    scene.text(`"Come on, ${((st as any).pcs_nickname || '')}! Share your knowledge!" Lazar sighs.`);
    scene.text('"How the hell would I know?" you reply. "Tell you what. Next time you have gym class, stand next to each other and compare your little dicks, faggots."');
    scene.text('"That\'s enough! You\'ve had your fun," Mrs. Sokoloff angrily shouts and you quickly settle down and return to the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Tease him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/tease.jpg');
    scene.text('You decide to tease them. "You guys are in big trouble if Marcus starts going after all the girls. There\'s a reason they say \'once you go black you never go back.\'"');
    scene.text('The boys sit with their mouths wide open and you laugh. "You two really are fucking stupid!"');
    scene.text('Just as Lazar\'s about to say something, Mrs. Sokoloff clears her throat. "Keep this nonsense up and you\'ll all be going straight to the principal."');
    scene.text('Everybody quickly settles down and the class goes back to normal.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            ]);
                          } else {
                            if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
                              scene.text('"Well, everyone has a bigger cock than you, but why not ask the expert on cocks?" Lazar says before he turns to Sonia. "Is there any truth to this \'fact\', Sonia?"');
                              scene.text('Sonia blushes heavily and avoids answering, but the smirk on her lips betrays her thoughts.');
                              scene.text('"I knew it!" Lazar grins and Sonia blushes even more.');
                              scene.text('"That\'s enough! You\'ve had your fun," Mrs. Sokoloff angrily shouts and you quickly settle down and return to the lesson.');
                            } else {
                              scene.text('"That\'s enough! You\'ve had your fun," Mrs. Sokoloff angrily shouts and you quickly settle down and return to the lesson.');
                            }
                            scene.actions([
                              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                            ]);
                          }
                        } else {
                          if (((s as any).scooltiperand ?? 0) === 13) {
                            scene.img('images/locations/pavlovsk/school/classroom/geography/stasyaphone.jpg');
                            scene.text('You notice Stasya seems to be ignoring the lesson and is playing on her phone instead. When you glance over at her, she gives you a little smirk before going back to her phone.');
                            scene.actions([
                              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                            ]);
                          } else {
                            if (((s as any).scooltiperand ?? 0) === 14) {
                              scene.img('images/locations/pavlovsk/school/classroom/geography/stasyaskirt.jpg');
                              scene.text('At the end of class as everyone is getting up to leave, you hear Andrey and Stasya talking and he says how he\'ll miss her since they don\'t have next class together. Stasya unzips her skirt and pulls it wide open, showing him her panties while sticking her tongue out at him.');
                              scene.text('He grins as he adjusts his crotch. "Damn! Now I\'m going to have a hard on thinking about you for the next hour!"');
                              scene.text('She laughs as they walk out together.');
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
    qspCall(st, 'gschool_gossip', 'lesson');
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
    qspGoto(s, 'gschool_lessons', 'short_break');
  }
  // TODO-QSP: end
  scene.build();
}

function enterMath(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 6) + 0) > 0) {
    (s as any).school_event_hour = 1;
    (s as any).scooltiperand = (Math.floor(Math.random() * 15) + 1);
    if (((s as any).scooltiperand ?? 0) === 1) {
      qspCall(s, 'mood', 'lower', 'small');
      qspCall(s, 'stat', '');
      if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 0  &&  (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['anus'] > 0)) {
        ((s as any).pcs_memory = (s as any).pcs_memory ?? {})['school_no_panty_cum_flash'] = ((s as any).daystart ?? 0);
        scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
        scene.text('Mr. Tsarev calls you up to the blackboard to answer a question. You start solving the problem, but accidentally drop the chalk on the floor. As you bend over to pick it up, you suddenly feel something <i>spurt</i> down your leg.');
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] > 0) {
          qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
          scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so are both your holes leaking cum that\'s dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Tsarev having no idea why as he tries to shout for order.');
        } else {
          if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
            qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 5) + 8));
            scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from your pussy and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Tsarev having no idea why as he tries to shout for order.');
          } else {
            if (((s as any).cum_loc ?? 0)?.['anus'] > 0) {
              qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
              scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from between your ass cheeks and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Tsarev having no idea why as he tries to shout for order.');
            }
          }
        }
      } else {
        if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
          qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
          qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 5) + 8));
          scene.img('images/locations/pavlovsk/school/events/nopanties_buttplug.jpg');
          scene.text('Mr. Tsarev calls you up to the blackboard to answer a question. As you start solving the problem, you accidentally drop the chalk on the floor and quickly bend over to pick it up, having forgot that you\'re not wearing any panties and giving everyone in the class a clear view of your pussy, as well as the butt plug currently stuffed in your asshole. The boys begin whistling and hollering while many of the girls begin whispering to each other.');
          // TODO-QSP: dynamic text: "Damn <<$pcs_nickname>>, you getting that ass loose for later?" Dimka laughs.
          scene.text(`"Damn ${((s as any).pcs_nickname || '')}, you getting that ass loose for later?" Dimka laughs.`);
          // TODO-QSP: dynamic text: "Yeah, you have some nice holes there, <<$pcs_nickname>>," Igor adds.
          scene.text(`"Yeah, you have some nice holes there, ${((s as any).pcs_nickname || '')}," Igor adds.`);
          if (((s as any).npc_grupTipe ?? 0)?.['A189'] === 4  &&  ((s as any).NikoVolkovQW ?? 0) >= 5  &&  (!((s as any).NikoPayback ?? 0))) {
            scene.text('"That\'s my girl right there," Niko says with a smirk.');
          } else {
            if (((s as any).npc_grupTipe ?? 0)?.['A189'] === 4  &&  ((s as any).NikoPayback ?? 0) > 0) {
              scene.text('"I always knew you were a proud little whore," Niko says with a confident smirk.');
            } else {
              if (((s as any).npc_grupTipe ?? 0)?.['A189'] === 4) {
                // TODO-QSP: dynamic text: "Looking good, <<$pcs_nickname>>," Niko grins.
                scene.text(`"Looking good, ${((s as any).pcs_nickname || '')}," Niko grins.`);
              }
            }
          }
          // TODO-QSP: dynamic text: You look around the classroom, confused as to what they''re talking about when y...
          scene.text(`You look around the classroom, confused as to what they're talking about when you hear Julia whisper while pointing at your ass. "Psst, ${((s as any).pcs_firstname || '')}… Your skirt!"`);
          scene.text('You suddenly feel your face grow red when you realize what she meant. You quickly solve the problem on the board and return to your seat with your head held down as Mr. Tsarev tries to calm the class, unaware of what has them all riled up.');
        } else {
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).analPlugIn ?? 0))) {
            qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
            qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 4) + 1));
            scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
            scene.text('Mr. Tsarev calls you up to the blackboard to answer a question. As you begin solving the problem, you drop the chalk on the floor. You quickly bend over to pick it up, having forgot that you aren\'t wearing any panties and giving everyone in the class a clear view of both of your holes. The boys begin whistling and hollering while many of the girls begin whispering to each other.');
            // TODO-QSP: dynamic text: "Damn <<$pcs_nickname>>, you certainly know how how to put on a show!" Dimka lau...
            scene.text(`"Damn ${((s as any).pcs_nickname || '')}, you certainly know how how to put on a show!" Dimka laughs.`);
            // TODO-QSP: dynamic text: "Yeah, you have some nice holes there, <<$pcs_nickname>>!" Igor adds.
            scene.text(`"Yeah, you have some nice holes there, ${((s as any).pcs_nickname || '')}!" Igor adds.`);
            if (((s as any).npc_grupTipe ?? 0)?.['A189'] === 4  &&  ((s as any).NikoVolkovQW ?? 0) >= 5  &&  (!((s as any).NikoPayback ?? 0))) {
              scene.text('"That\'s my girl right there," Niko says with a smirk.');
            } else {
              if (((s as any).npc_grupTipe ?? 0)?.['A189'] === 4  &&  ((s as any).NikoPayback ?? 0) > 0) {
                scene.text('"I always knew you were a proud little whore," Niko says with a confident smirk.');
              } else {
                if (((s as any).npc_grupTipe ?? 0)?.['A189'] === 4) {
                  // TODO-QSP: dynamic text: "You''re looking good, <<$pcs_nickname>>," Niko grins.
                  scene.text(`"You're looking good, ${((s as any).pcs_nickname || '')}," Niko grins.`);
                }
              }
            }
            // TODO-QSP: dynamic text: You look around the classroom, confused as to what they''re talking about when y...
            scene.text(`You look around the classroom, confused as to what they're talking about when you hear Julia whisper while pointing at your ass. "Psst, ${((s as any).pcs_nickname || '')}… Your skirt!"`);
            scene.text('You suddenly feel your face grow red when you realize what she meant. You quickly solve the problem on the board and return to your seat with your head held down as Mr. Tsarev tries to calm the class, unaware of what has them all riled up.');
          } else {
            qspCall(s, 'arousal', 'flash', (-5));
            qspCall(s, 'fame', 'pav', 'sex', 1);
            scene.img('images/locations/pavlovsk/school/events/scoolrand_4_1.jpg');
            scene.text('When you walk up to the blackboard to answer a question, you trip and fall. Somehow, you manage to fall in such a way that your skirt ends up on your back and the whole class can see your panty-clad ass. You quickly get up and straighten your clothes with a bright red face, trying to ignore the hollering from your classmates. You can tell that most of the guys and even a few girls definitely appreciated your show, even if it was involuntarily.');
          }
        }
      }
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).scooltiperand ?? 0) === 2) {
        scene.img('images/locations/pavlovsk/school/events/scoolrand_9.jpg');
        scene.text('As you look around the classroom, waiting for the lesson to start, you pause to admire the expensive looking stockings that Sonia is wearing. With a tinge of jealousy, you wonder where you could buy yourself some and if you can afford them.');
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        if (((s as any).scooltiperand ?? 0) === 3) {
          (s as any).VK = (Math.floor(Math.random() * 3) + 1);
          if (((s as any).VK ?? 0) === 1  &&  ((s as any).soniaQW ?? 0)?.['slut'] === 1) {
            scene.img('images/locations/pavlovsk/school/classroom/breastg.jpg');
            scene.text('While stretching out, you glance over at Sonia and notice Niko reaching under her arms and fondling her breasts. She tries to ignore it, but as Niko continues caressing her breasts, she starts looking light headed as she licks her lips and gets more into it.');
            qspCall(s, 'arousal', 'voyeur', 5);
            qspCall(s, 'arousal', 'end');
          } else {
            if (((s as any).VK ?? 0) === 2  &&  ((s as any).soniaQW ?? 0)?.['slut'] === 1) {
              scene.img('images/locations/pavlovsk/school/classroom/classflash.mp4');
              scene.text('As Mr. Tsarev has everyone work on solving math problems, Sonia raises her hand and asks for assistance. When he comes over, she starts openly flirting and dropping none too subtle innuendos, which he does his best to dismiss, but you notice a bulge forming in his pants.');
              scene.text('At this point, Sonia pulls open her shirt and flashes her breasts at Mr. Tsarev and the whole class. Mr. Tsarev pauses in shock for a moment. "That is very inappropriate behavior," he says and does his best to silence the class before rushing back to his desk. You occasionally catch him staring back at Sonia when he believes no one is looking.');
              qspCall(s, 'arousal', 'erotic_nudity', 5);
              qspCall(s, 'arousal', 'end');
            } else {
              if (((s as any).VK ?? 0) === 3  &&  ((s as any).soniaQW ?? 0)?.['slut'] === 1) {
                scene.img('images/locations/pavlovsk/school/classroom/soniaflash.jpg');
                scene.text('You hear some whispers and see some of the other students looking towards the back of the room every time Mr. Tsarev is not looking. You curiously glance back to see Sonia flashing her breasts at the boys every time Mr. Tsarev looks away, while the boys take pictures of her while encouraging her to show more.');
                qspCall(s, 'arousal', 'erotic_nudity', 5);
                qspCall(s, 'arousal', 'end');
              } else {
                scene.img('images/characters/pavlovsk/school/girl/sonia/soniasmile.jpg');
                scene.text('You hear the sound of something hitting the ground and turn around to see Sonia picking up her lipstick. She\'s wearing a transparent blouse that does a very nice job of emphasizing her breasts to anyone willing to look her way. She places her lipstick in her bag when she notices you looking, then gives you a warm smile before turning back to the front of the class.');
              }
            }
          }
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          if (((s as any).scooltiperand ?? 0) === 4) {
            scene.img('images/locations/pavlovsk/school/classroom/dickpic.jpg');
            scene.text('As the lesson goes on, you receive a message on your phone. You open it to see that someone has sent you an image of a dick. You can hear some snickering and you quickly look around to see who it was, but you can\'t tell where it came from. Unsure what to do and not wanting to be caught looking at it, you quickly delete the image.');
            qspCall(s, 'arousal', 'erotic', 5);
            qspCall(s, 'arousal', 'end');
            scene.actions([
              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
            ]);
          } else {
            if (((s as any).scooltiperand ?? 0) === 5) {
              scene.img('images/locations/pavlovsk/school/classroom/flick.jpg');
              scene.text('You notice Arkadi continuously flicking Artem\'s ear whenever Mr. Tsarev is not looking. Artem\'s ear is already bright red and he looks like he\'s on the verge of tears.');
              scene.actions([
                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
              ]);
            } else {
              if (((s as any).scooltiperand ?? 0) === 6) {
                scene.img('images/locations/pavlovsk/school/classroom/wedgieb.jpg');
                scene.text('You suddenly hear a pained groan and glance over to see Niko letting go of Evgeny\'s underwear. He\'s pulled it half way up Evgeny\'s back and you wince slightly as you think of how painful that wedgie must have been.');
                scene.actions([
                  { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                ]);
              } else {
                if (((s as any).scooltiperand ?? 0) === 7) {
                  scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
                  scene.text('The lesson takes a brief pause as Natasha asks Mr. Tsarev a question about her paper. With nothing to do for the moment, you doodle a few drawings in your notebook. When you look back up, you notice Igor turning his head away. You don\'t think much of it at first, until you catch him a second time. Was he looking at you, or just in your direction?');
                  scene.text('Even Mr. Tsarev walks by and pauses next to your desk for a moment before continuing with his lesson. Class resumes, and things return to normal, but part-way through the lesson, you look at Igor again and find him staring at you. He\'s clearly not trying to make eye contact, however, or he would have noticed you looking back at him.');
                  scene.text('Following his gaze down, you spot what\'s caught his attention: your uniform has lost a button, which is giving him a good view of your cleavage.');
                  qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Ignore it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Ignore it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'fame', 'pav', 'sex', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
    scene.text('You let Igor continue to gawk at you. You find yourself somewhat amused at how little it takes to completely enthrall some boys.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                    ]);
                  }
                  scene.actions([
                    { label: 'Button your shirt', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('You quickly grasp both sides of your blouse and pull them tightly together. Igor\'s face turns red when he realizes he\'s been caught, and he immediately turns back to face the blackboard.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).scooltiperand ?? 0) === 8) {
                    scene.img('images/locations/pavlovsk/school/classroom/teachdis.jpg');
                    scene.text('You listen closely to every word Mr. Tsarev says, doing your best to pay attention, but you occasionally notice Mr. Tsarev staring at your legs when he believes that you aren\'t looking.');
                    qspCall(s, 'willpower', 'exhib', 'self');
                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                      scene.actions([
                        { label: 'Ignore his stares and wait for the break', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Ignore his stares and wait for the break', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspGoto(st, 'gschool_lessons', 'short_break');
  } },
                      ]);
                    }
                    qspCall(s, 'willpower', 'misc', 'self', 'medium');
                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                      scene.actions([
                        { label: 'Call him out', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Call him out', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/upskirt.jpg');
    scene.text('You pull your skirt over your legs so he can\'t look at you anymore. "Be careful, Mr. Tsarev. If you keep staring at me like that, your eyeballs might pop out of their sockets!"');
    scene.text('Loud laughter erupts in the classroom and Mr. Tsarev is clearly embarrassed. He opens his mouth to speak, but realizes that might make things worse, so he tries his best to get the class back under control before continuing the lesson, carefully avoiding your legs.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      ]);
                    }
                    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                      scene.actions([
                        { label: 'Spread your legs', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Spread your legs', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'hard');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspCall(st, 'npc_relationship', 'modify', 'A26', 2);
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'arousal', 'flash', (-5));
      scene.img('images/locations/pavlovsk/school/classroom/spread.jpg');
      scene.text('The thoughts of him checking you out so sneakily causes your heart to beat rapidly in excitement. You purposely spread your legs whenever Mr. Tsarev looks your way and you can tell by his more frequent stares that he\'s enjoying your show.');
      scene.text('Unable to control yourself, you occasionally rub your clitoris through your underwear, preferably when Mr. Tsarev glances your way. By the end of the class, your panties have a large damp spot on them; large enough for him to see from across the room. The outline of your pussy is clearly visible in the wet fabric.');
    } else {
      qspCall(st, 'arousal', 'flash', (-5));
      scene.img('images/locations/pavlovsk/school/classroom/spreadb.jpg');
      scene.text('The thoughts of him checking you out so sneakily causes your heart to beat rapidly in excitement. You purposely spread your legs whenever Mr. Tsarev looks your way and you can tell by his fidgeting that he\'s getting really turned on.');
      scene.text('Unable to control yourself, you occasionally rub your exposed clitoris, preferably when Mr. Tsarev glances your way. By the end of the class, your pussy lips are soaked in your juices and without realizing, you put your finger into your mouth to taste your own juices.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      ]);
                    }
                    qspCall(s, 'willpower', 'misc', 'self', 'medium');
                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                      scene.actions([
                        { label: 'Flip him off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Flip him off', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    qspCall(st, 'npc_relationship', 'modify', 'A26', (-2));
    scene.img('images/locations/pavlovsk/school/classroom/fuckoff.jpg');
    scene.text('What a pervert! You squeeze your legs together and loudly clear your throat. When Mr. Tsarev looks at you, he stares right at your extended middle finger. Everyone in class notices and all eyes are on you now.');
    // TODO-QSP: dynamic text: "What is the meaning of this, Miss <<$pcs_lastname>>!?" he angrily scowls.
    scene.text(`"What is the meaning of this, Miss ${((st as any).pcs_lastname || '')}!?" he angrily scowls.`);
    scene.text('You\'re not impressed. "One more look, and I\'m telling the principal," you boldly say.');
    // TODO-QSP: dynamic text: He looks slightly nervous now, knowing that you caught him staring at you and tr...
    scene.text(`He looks slightly nervous now, knowing that you caught him staring at you and tries to compose himself. "Miss ${((st as any).pcs_lastname || '')}, get out of my class!"`);
    scene.text('You have no intentions of getting up "And I don\'t know, maybe your wife?" you say with a sly smile.');
    scene.text('Flustered, Mr. Tsarev leaves the classroom to collect his thoughts. Your classmates, unsure of what just happened, softly talk with one another. After a minute or so, Mr. Tsarev and resumes his lesson as if nothing had happened, carefully avoiding eye contact with you. Everyone in class is very surprised that you didn\'t get kicked out after what just happened.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      ]);
                    }
                    scene.actions([
                      { label: 'Straighten your skirt', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teachdis.jpg');
    scene.text('Feeling a little creeped out, you inconspicuously try to straighten your skirt, attempting to make it look like a random afterthought and not because he\'s staring. Mr. Tsarev slowly turns away and continues his lesson as if nothing has happened.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).scooltiperand ?? 0) === 9) {
                      scene.img('images/locations/pavlovsk/school/classroom/math/chrislar.jpg');
                      if (((s as any).christinaQW ?? 0)?.['fight'] === 1  ||  ((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
                        scene.text('As class is ending Lina, Lariska and Vanya are all talking. The girls get up and hug, posing together as Vanya takes Lariska\'s phone and takes several pictures of them together.');
                      } else {
                        scene.text('As class is ending Christina, Lariska and Vanya are all talking. The girls get up and hug, posing together as Vanya takes Lariska\'s phone and takes several pictures of them together.');
                      }
                      scene.actions([
                        { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
                      ]);
                    } else {
                      if (((s as any).scooltiperand ?? 0) === 10) {
                        scene.img('images/locations/pavlovsk/school/classroom/math/chrissoniabully.jpg');
                        scene.text('Sonia and Christina are called to the front to both work on the same problem to see who can get it done faster. Christina stops in the middle of it, grabs the back of Sonia\'s skirt and pulls it up, showing off her ass cheeks as she\'s wearing a thong. This gets a lot of hoots and hollers from the rest of the class. Mr. Tsarev tries several times to get the class back in order and sends both girls to sit back down.');
                        qspCall(s, 'arousal', 'erotic', 5);
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                        ]);
                      } else {
                        if (((s as any).scooltiperand ?? 0) === 11) {
                          scene.img('images/locations/pavlovsk/school/classroom/math/larskirtup.jpg');
                          scene.text('During class, Lariska leans forward in her seat to talk to Christina, who is sitting in front of her. As she does, Arkadi, who is sitting behind her, grabs her skirt and pulls it up, showing off her panty-clad ass. It takes her a while to wrestle the hem of her skirt out of his hands and get it back in place, blushing as most of the class laughs.');
                          qspCall(s, 'arousal', 'erotic', 5);
                          qspCall(s, 'arousal', 'end');
                          scene.actions([
                            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                          ]);
                        } else {
                          if (((s as any).scooltiperand ?? 0) === 12  &&  ((s as any).soniaQW ?? 0)?.['slut'] === 1) {
                            scene.img('images/locations/pavlovsk/school/classroom/math/soniachair.jpg');
                            scene.text('Mr. Tsarev gives the class the last five minutes to do what they want. Some students talk to their fellow students next to them and a few get up and walk around. Sonia gets up and tries to step over a desk, but ends up straddling the back of a chair. Instead of stepping the rest of the way over it, she stops and bites her lower lip, then scoots back and forth along the chair. Before anyone really notices what she\'s doing, the bell rings and everyone leaves.');
                            qspCall(s, 'arousal', 'voyeur', 5);
                            qspCall(s, 'arousal', 'end');
                            scene.actions([
                              { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
                            ]);
                          } else {
                            if (((s as any).scooltiperand ?? 0) === 13  &&  ((s as any).christinaQW ?? 0)?.['fight'] === 0  &&  ((s as any).christinaQW ?? 0)?.['blackmail'] < 2) {
                              scene.img('images/locations/pavlovsk/school/classroom/math/dare1.jpg');
                              scene.text('Near the end of class, Mr. Tsarev tells the class to study quietly as he grades the pop quiz he\'d just given you. Some of the students study, but most start messing with their phones or quietly talking to each other, only to be shushed by Mr. Tsarev. You notice Christina writing something and then passing it to Lariska.');
                              scene.actions([
                                { label: 'A note arrives', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/math/dare2.jpg');
    scene.text('Lariska reads the outside of the folded note and passes it on to you under the desk. You take the note and glance down to see your name written on the outside. You wonder why Christina of all people would send you a note.');
    scene.actions([
      { label: 'Read the note', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/math/dare3.jpg');
    scene.text('You unfold the note and read it. It says \'I dare you to take a picture of your pussy and send it to Mr. Tsarev.\' After reading the note, a bit surprised at what she wrote, you glance up and you see both Christina and Lariska encouraging you to do it. Lariska, who is sitting next to you, even leans over and whispers "Do it."');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['bully'] = ((st as any).christinaQW['bully'] ?? 0) - (1);
    ((st as any).stat_memory = (st as any).stat_memory ?? {})['lariska_pussy_shot'] = 1;
    scene.img('images/locations/pavlovsk/school/classroom/math/dare5.jpg');
    scene.text('You shake your head and Christina and Lariska taunt you. "Don\'t be such a little bitch and just do it!"');
    scene.text('You keep up your resolve, shaking your head again. "Why don\'t you do it?" you hiss at Lariska.');
    scene.text('Christina nods. "Yeah, show her you\'re no pussy, Lariska!"');
    scene.text('Lariska looks around before she puts her phone under her skirt, then pulls it back up. You lean over and see a close up image of her pussy, which she sends anonymously through the school wifi to Mr. Tsarev, who stops what he\'s doing when his phone buzzes and looks at it.');
    scene.text('There\'s a shocked look on his face for a moment before he looks around at the class, trying to figure out who sent it. Luckily for Lariska, the bell soon rings.');
    scene.actions([
      { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Do it', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['bully'] = ((st as any).christinaQW['bully'] ?? 0) + (1);
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/math/dare4.jpg');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
      scene.text('You bite your lip, a thrill of excitement running down your spine at what you\'re about to do. You make sure no one else is watching before you pull up your skirt and pull your panties aside, exposing your pussy for you to take a photo. You quickly pull your panties back in place and pull your skirt back down once you have the picture.');
    } else {
      qspCall(st, 'flash', 'pussy', 'indoors', 1, 1);
      scene.text('You bite your lip, a thrill of excitement running down your spine at what you\'re about to do. You make sure no one else is watching before you spread your legs and pull up your skirt, exposing your already bare pussy and taking a photo. You quickly pull your skirt back down once you have the picture.');
    }
    qspCall(st, 'arousal', 'flash', (-5), 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Send the image', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/math/dare5.jpg');
    scene.text('You send the image anonymously through the school wifi to Mr. Tsarev, who stops what he\'s doing when his phone buzzes and looks at it. There\'s a shocked look on his face before he looks around, trying to figure out who sent it. Luckily for you, the bell soon rings.');
    scene.actions([
      { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
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
                              qspCall(s, 'stat', '');
                              scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
                              scene.text('As you continue focusing on the lesson, you hear some of your fellow students chatting behind you.');
                              scene.actions([
                                { label: 'Ignore them and wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                { label: 'Eavesdrop', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/eavesdrop.jpg');
    qspCall(st, 'gschool_gossip', 'lesson');
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
    qspGoto(s, 'gschool_lessons', 'short_break');
  }
  // TODO-QSP: end
  scene.build();
}

function enterHelp(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/classroom/teacherhelp.jpg');
  scene.text('Mr. Tsarev notices that you appear to be stuck on one of the assignments and kneels down next to you. He patiently explains some easier solutions to the problems and, slowly but surely, you gather a better understanding.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    { label: 'Gently touch his hand', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A26', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/touchhands.mp4');
    scene.text('You lightly run your fingers across the palm of his hand as you listen to his explanation. After he quickly checks to make sure that no one notices, he reciprocates and takes your hand in his left hand. Seconds later, you feel his right hand resting on your back, gently rubbing it as he continues to explain a difficult to understand part of today\'s lesson. You move your hips a bit closer to his, and lean closer to him as you continue listening to his explanation.');
    scene.text('When he\'s done with his explanation, you whisper in his ear. "You\'re so smart and kind, Anatoly. I wish you would teach classes at the university so I could go to your classes for several more years. There\'s still so much that you can teach me…"');
    // TODO-QSP: dynamic text: You notice a small shiver roll down his spine. "Thank you <<$pcs_firstname>>… I ...
    scene.text(`You notice a small shiver roll down his spine. "Thank you ${((st as any).pcs_firstname || '')}… I mean Miss ${((st as any).pcs_lastname || '')}, but I should let you get back to work." He then quickly walks back to his desk while occasionally glancing back at you.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    { label: 'Coerce him', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A26', 1);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashteach.mp4');
    scene.text('You edge closer to him as he continues to explain some solutions before you pull open your shirt, exposing your cleavage. He stares at your chest for a few seconds, but from the look on his face, it\'s clear that he knows this is wrong. "You can touch them if you want. I won\'t tell anyone," you whisper as you give him an innocent smile. You can tell he\'s thoroughly confused, but definitely on board with the idea even though he has his doubts. You pull your skirt up slightly before whispering seductively into his ear. "You can touch me here too… I\'m soaking wet right now. Don\'t you want to feel it?"');
    scene.text('Even though he\'s clearly uncomfortable doing this, you feel his fingers rubbing over your wet pussy lips. "That feels so good. Can you feel how wet I am?" you moan.');
    scene.text('Making sure no one else is watching, he grows more bold and rubs your pussy more firmly. He then plunges two fingers in and starts fucking you with them. You let out light moans and, worried that someone might notice, he slowly pulls his fingers out. "I should let you get back to work," he says before he gets up and walks back to his desk. He takes a quick look around to make sure that no one notices before placing his two fingers in his mouth, swallowing your juices.');
    scene.text('It\'s clear that Mr. Tsarev definitely won\'t be forgetting today\'s lesson anytime soon.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    { label: 'Move the discussion to personal topics', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A26', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teacherhelp.jpg');
    scene.text('As he\'s explaining a part of today\'s lesson to you, you ask Mr. Tsarev where he lives.');
    scene.text('"I live near the factory in one of the standalone houses," he replies. "Anyway, about the lesson…"');
    scene.text('You ignore his attempt to get back to teaching and nod. "How about Valeria? Do you and her get along?"');
    scene.text('His face saddens. "We don\'t talk much. Her mother and I both work, so no one keeps an eye on her. Unfortunately, I can only really talk to her on weekends. On weekdays, she always comes home too late and drunk to have any kind of conversation."');
    scene.actions([
      { label: 'Seduce', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teacherhelp.jpg');
    scene.text('You smile at him empathetically and put your hand on his shoulder. "Would you like me to talk with her? Your daughter doesn\'t know what she\'s missing because I would kill to have a father as great as you! How about you take me home sometime, to talk to her?"');
    scene.text('"That\'s a kind offer, but I need to solve my issues on my own," he replies.');
    scene.text('You lightly squeeze on his shoulder. "Are you sure? I\'d love to come home with you some day. Maybe you can tutor me? I\'m sure that a strong man like you can teach me many things…"');
    scene.text('His eyes widen. "Uhh… Maybe some other time. I should let you get back to work," he says before he stands up and returns to his desk. You notice him sweating more than usual.');
  } },
      { label: 'Be helpful', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teacherhelp.jpg');
    scene.text('"Scared that you\'ll say something that\'ll push her away when you\'re just trying to help her? You just need to be more confident and take chances from time to time. You can teach your daughter about the ways of life, like you do in class every day," you explain to him.');
    // TODO-QSP: dynamic text: He nods his head slowly. "You make a really good point. Maybe if I just speak wi...
    scene.text(`He nods his head slowly. "You make a really good point. Maybe if I just speak with her without second guessing myself, I can actually make some progress? Thank you Miss… ${((st as any).pcs_firstname || '')}, for your advice. You seem to have a great understanding of people in general." He gives your shoulder a light squeeze before returning to his desk.`);
  } },
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHistory(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 6) + 0) > 0) {
    (s as any).school_event_hour = 1;
    (s as any).scooltiperand = (Math.floor(Math.random() * 13) + 1);
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
        qspCall(s, 'stat', '');
        if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 0  &&  (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['anus'] > 0)) {
          ((s as any).pcs_memory = (s as any).pcs_memory ?? {})['school_no_panty_cum_flash'] = ((s as any).daystart ?? 0);
          scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
          scene.text('Before you can answer the question Mrs. Sokoloff poses, you have to clean the blackboard, but accidentally drop the cloth. As you bend over to pick it up, you suddenly feel something <i>spurt</i> down your leg.');
          if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] > 0) {
            qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
            scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so are both your holes, leaking cum that\'s dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mrs. Sokoloff having no idea why as she tries to shout for order.');
          } else {
            if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
              qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 5) + 8));
              scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from your pussy and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mrs. Sokoloff having no idea why as she tries to shout for order.');
            } else {
              if (((s as any).cum_loc ?? 0)?.['anus'] > 0) {
                qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
                scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from between your ass cheeks and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mrs. Sokoloff having no idea why as she tries to shout for order.');
              }
            }
          }
        } else {
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
            qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
            qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 5) + 8));
            scene.img('images/locations/pavlovsk/school/events/nopanties_buttplug.jpg');
            scene.text('You\'ve been called up to answer the question written on the blackboard, but while solving it, you need to erase something. You accidentally drop the cloth and hesitate to pick it up as you think about the fact that not only are you not wearing any panties, your ass is stuffed with a butt plug.');
            scene.text('"Well?" Mrs. Sokoloff prods impatiently.');
            scene.text('With a coy smile, you slowly bend over until you feel your skirt rise up, exposing your bare pussy and ass to your class. Hearing the flurry of murmurs and whispers, you can\'t help but squeeze and clench around the toy. The boys sound both surprised and intrigued by the sight while the girls whisper to one another that you\'re a slut. From where Mrs. Sokoloff sits, she can\'t see what everyone is fussing over, so she starts to move to get a better look. You quickly snap back up, adjust your skirt and with a devious smile and cloth in hand, you start wiping away at the board as if nothing happened.');
          } else {
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).analPlugIn ?? 0))) {
              qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
              qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 4) + 1));
              scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
              scene.text('Before you can answer the question Mrs. Sokoloff poses, you have to clean the blackboard, but accidentally drop the cloth and totally forget that you aren\'t wearing panties. The whistling and shouting from the boys and murmurs of disapproval from most of the girls behind you tells you that everyone has a clear view of your bare ass and both of your holes are on display for everyone to see. Everyone but Mrs. Sokoloff that is, who has no clue why the class is so riled up and desperately tries to calm them down.');
            } else {
              qspCall(s, 'arousal', 'flash', (-5));
              qspCall(s, 'fame', 'pav', 'sex', 1);
              scene.img('images/locations/pavlovsk/school/events/scoolrand_4_1.jpg');
              scene.text('When you walk up to the blackboard to answer a question, you trip and fall. Somehow, you manage to fall in such a way that your skirt ends up on your back and the whole class can see your panty-clad ass. You quickly get up and straighten your clothes with a bright red face, trying to ignore the hollering from your classmates. You can tell that most of the guys and even a few girls definitely appreciated your show, even if it was involuntarily.');
            }
          }
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        if (((s as any).scooltiperand ?? 0) === 3) {
          scene.img('images/locations/pavlovsk/school/events/urok7.jpg');
          scene.text('As you wait for the end of the lesson, you notice you\'re not the only one being a bit drowsy; Lena is very close to falling asleep on her desk.');
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          if (((s as any).scooltiperand ?? 0) === 4) {
            scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
            scene.text('During class, you feel a hand slide around your side and grab one of your breasts. You squeak loudly and try to smack Roman\'s hand away, but he jerks it away and all you manage to do is smack your breast.');
            // TODO-QSP: dynamic text: "Is there a problem, Miss <<$pcs_lastname>>?" Mrs. Sokoloff asks and you glance ...
            scene.text(`"Is there a problem, Miss ${((s as any).pcs_lastname || '')}?" Mrs. Sokoloff asks and you glance around and notice everyone is staring at you as Roman snickers behind you. Mrs. Sokoloff looks at you curiously.`);
            qspCall(s, 'willpower', 'misc', 'self', 'medium');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Tell on him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Tell on him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (3);
    qspCall(st, 'npc_relationship', 'modify', 'A157', (-10));
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You straighten up. "Yes. Roman is grabbing my breasts."');
    scene.text('Mrs. Sokoloff gives Roman a disapproving look. "Is this true?"');
    scene.text('Roman denies it, but Mrs. Sokoloff doesn\'t believe him and sends him to the principal\'s office.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            }
            qspCall(s, 'willpower', 'misc', 'self', 'medium');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Slap Roman', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Slap Roman', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).demerit = ((st as any).demerit ?? 0) + (10);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-2));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    scene.text('You ignore Mrs. Sokoloff and turn around and slap Roman with all your force. Roman recoils, his hand going to his cheek as students start murmuring about what happened and some laugh.');
    // TODO-QSP: dynamic text: Mrs. Sokoloff''s voice cuts through the noise. "That''s enough of that, Miss <<$...
    scene.text(`Mrs. Sokoloff's voice cuts through the noise. "That's enough of that, Miss ${((st as any).pcs_lastname || '')}! Go to the principal's office!"`);
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Nothing is wrong', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/breastg.jpg');
    scene.text('You shake your head at Mrs. Sokoloff, desperately wanting to turn around and strangle Roman, but you don\'t dare with Mrs. Sokoloff now keeping an eye on you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              { label: 'Embarrassed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
    scene.text('You squeak loudly as his fingers quickly pinch your sensitive nipple and your hand quickly flies to your breast to shield it from further attack.');
    // TODO-QSP: dynamic text: "Is there a problem, Miss <<$pcs_lastname>>?" Mrs. Sokoloff asks and you glance ...
    scene.text(`"Is there a problem, Miss ${((st as any).pcs_lastname || '')}?" Mrs. Sokoloff asks and you glance around and notice everyone is staring at you as Roman snickes behind you.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              { label: 'Enjoy', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/breastg.jpg');
    scene.text('You bite your lip to silence the moan that wants to escape as you feel your molesters fingers give your nipple a quick pinch before retreating. It was a nice treat to keep class interesting.');
    qspCall(st, 'arousal', 'foreplay', 5);
    if (((st as any).pcs_inhib ?? 0) >= 40) {
      scene.actions([
        { label: 'Come get some more', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A10', 2);
    scene.img('images/locations/pavlovsk/school/classroom/boobgr.mp4');
    scene.text('You bite your lip to silence the moan that wants to escape as you feel your molester\'s fingers give your nipple a quick pinch before retreating. After the hand is gone, you move your hand to the opposite side of your face, as if to scratch an itch and simultaneously glance over your shoulder until your eye is on Roman, who groped you.');
    scene.text('You give him a smile out of the corner of your mouth as you wink and scoot your chair back. His eyes fill with surprise and excitement and a few seconds after you turn back to face Mrs. Sokoloff, you feel his hand massaging your breast again.');
    qspCall(st, 'arousal', 'foreplay', 10, 'exhibitionism');
    scene.actions([
      { label: 'Enjoy more', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/breastg.jpg');
    scene.text('You spend the rest of class with Roman\'s hand coming and going to squeeze your breast and tweak your nipple, still careful to make sure Mrs. Sokoloff doesn\'t catch on.');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('Enjoying the feeling of Roman\'s hand massaging your breast and his fingers tweaking your nipple, you decide to take advantage of the opportunity. The pencil you were using to take notes goes under your skirt and begins to prod and play with your hard clitoris through your quickly soaking panties.');
      scene.text('Eventually, you get bored of it and shift the fabric to the side to get access to your bare pussy and insert your two middle fingers. They easily slide between your wet lips and your breathing hitches slightly, matching the rhythm of your pistoning fingers.');
      (st as any).orgasm_txt = 'Roman seems to have caught on and starts to knead your breast and pull at your breast harder. In a moment of perfect coincidence, your pinch your clit right as Roman squeezes your sensitive nipple and your knees fly together, your legs clenching hard in orgasm. You bite your lip hard as you ride out the waves of pleasure and you feel Roman\'s hand slide away before you see Mrs. Sokoloff giving you a curious look. With confident eyes and a bright smile, you quickly fix your clothes and sit up in your seat.';
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'arousal', 'clit_finger', 10, 'masturbate', 'exhibitionism');
      qspCall(st, 'arousal', 'end');
      scene.text('You spend the rest of class with Roman\'s hand playing with your breast as you sit satisfied in soaked panties and a small puddle of your own juices.');
    } else {
      qspCall(st, 'fame', 'pav', 'sex', 1);
      scene.text('Enjoying the feeling of Roman\'s hand massaging your breast and his fingers tweaking your nipple, you decide to take advantage of the opportunity.');
      scene.text('The pencil you were using to take notes goes under your skirt and begins to prod and play with your already exposed clitoris, but your bare pussy is too tempting and you abandon the pencil for your two middle fingers. They easily slide between your wet lips and your breathing hitches, matching the rhythm of your pistoning fingers.');
      (st as any).orgasm_txt = 'Roman seems to have caught on and starts to knead your breast and pull at your breast harder. In a moment of perfect coincidence, your pinch your clit right as Roman squeezes your sensitive nipple and your knees fly together, your legs clenching hard in orgasm. You bite your lip hard as you ride out the waves of pleasure and you feel Roman\'s hand slide away before you see Mrs. Sokoloff giving you a curious look. With confident eyes and a bright smile, you quickly fix your clothes and sit up in your seat.';
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'arousal', 'clit_finger', 10, 'masturbate', 'exhibitionism');
      qspCall(st, 'arousal', 'end');
      scene.text('You spend the rest of class with Roman\'s hand playing with your breast as you sit satisfied in a small puddle of your own juices.');
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
              scene.text('During class, you feel a hand grab and pull on your bra. Before you can turn or protest they let go, causing it to snap back painfully. You let out a little yelp and turn to glare at Roman behind you.');
              // TODO-QSP: dynamic text: "Is there a problem, Miss <<$pcs_lastname>>?" Mrs. Sokoloff asks and you glance ...
              scene.text(`"Is there a problem, Miss ${((s as any).pcs_lastname || '')}?" Mrs. Sokoloff asks and you glance around and notice everyone is staring at you as Roman snickers behind you. Mrs. Sokoloff looks at you accusingly.`);
              qspCall(s, 'willpower', 'misc', 'self', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Tell on him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Tell on him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (3);
    qspCall(st, 'npc_relationship', 'modify', 'A157', (-10));
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You straighten up. "Yes. Roman is snapping my bra."');
    scene.text('Mrs. Sokoloff gives Roman a disapproving look. "Is this true?"');
    scene.text('Roman denies it, but Mrs. Sokoloff doesn\'t believe him and sends him to the principal\'s office.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              }
              qspCall(s, 'willpower', 'misc', 'self', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Slap Roman', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Slap Roman', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).demerit = ((st as any).demerit ?? 0) + (10);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-2));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    scene.text('You ignore Mrs. Sokoloff and turn around and slap Roman with all your force. Roman recoils, his hand going to his cheek as students start murmuring about what happened and some laugh.');
    // TODO-QSP: dynamic text: Mrs. Sokoloff''s voice cuts through the noise. "That''s enough of that, Miss <<$...
    scene.text(`Mrs. Sokoloff's voice cuts through the noise. "That's enough of that, Miss ${((st as any).pcs_lastname || '')}! Go to the principal's office!"`);
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Nothing is wrong', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/engaged.jpg');
    scene.text('You shake your head at Mrs. Sokoloff, desperately wanting to turn around and strangle Roman, but you don\'t dare with Mrs. Sokoloff now keeping an eye on you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).scooltiperand ?? 0) === 6) {
                scene.img('images/locations/pavlovsk/school/classroom/crash.mp4');
                scene.text('During class, there is a loud crashing sound from the back of the class. You and everyone else turn to see Petka is still sitting at his desk, but now the desk is laying on its side on the floor. The whole class bursts out laughing at him.');
                scene.text('Petka, blushing, quickly gets out of the desk and gets it back upright before sitting back down in it. After making sure he\'s okay, Mrs. Sokoloff gets the class back under control and finishes the lesson.');
                scene.actions([
                  { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                ]);
              } else {
                if (((s as any).scooltiperand ?? 0) === 7) {
                  scene.img('images/locations/pavlovsk/school/classroom/dickpic.jpg');
                  scene.text('You get an alert on your phone and pull it out of your purse before placing it in your lap. You glance down and see someone has sent you an image; opening it, you see a picture of someone\'s dick. You hear some snickering and look up to see who it was, but you can\'t tell where it came from. Unsure what to do and not wanting to be caught looking at it, you quickly delete the image.');
                  qspCall(s, 'arousal', 'erotic', 5);
                  qspCall(s, 'arousal', 'end');
                  scene.actions([
                    { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                  ]);
                } else {
                  if (((s as any).scooltiperand ?? 0) === 8) {
                    scene.img('images/locations/pavlovsk/school/classroom/flick.jpg');
                    scene.text('You notice Roman keeps flicking Petka\'s ear when Mrs. Sokoloff looks away. Poor Petka\'s ear is already bright red and he looks like he\'s on the verge of tears.');
                    scene.actions([
                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                    ]);
                  } else {
                    if (((s as any).scooltiperand ?? 0) === 9) {
                      scene.img('images/locations/pavlovsk/school/classroom/wedgieb.jpg');
                      scene.text('You hear a pained gasp, as do several others, and glance over just in time to see Roman letting go of Igor\'s underwear. He\'s pulled it half way up his back and you wince slightly at what looked like a painful wedgie.');
                      scene.actions([
                        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                      ]);
                    } else {
                      if (((s as any).scooltiperand ?? 0) <= 11) {
                        scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
                        scene.text('As you arrive in class, you look around and decide to sit next to…');
                        scene.actions([
                          { label: 'Marcus', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      // TODO-QSP: dynamic text: You sit next to Marcus, who awkwardly shuffles in his seat and avoids looking at...
      scene.text(`You sit next to Marcus, who awkwardly shuffles in his seat and avoids looking at you. As you look around, you see many of your classmates pointing and giggling, and not just at you. "Go on, ${((st as any).pcs_nickname || '')}! You know you want that big black cock stuffed into your whore mouth and down your slutty throat!" you hear someone shout out.`);
    } else {
      if (((st as any).grupTipe ?? 0) === 1) {
        qspCall(st, 'npc_relationship', 'modify', 'A146', 1);
        scene.text('You sit next to Marcus and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Marcus, who tries to politely avoid conversation, but people start laughing at him for letting you talk to him. They then turn their attention to you and mock you for trying to speak with a popular kid.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A146', 1);
          scene.text('You sit next to Marcus. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mrs. Sokoloff asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                          { label: 'Lena', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Lena, who ignores you at first before mouthing "slut" at you and doing a motion with her hands where she pretends to be forcing your head down on her imaginary dick.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'npc_relationship', 'modify', 'A20', 1);
        scene.text('You sit next to Lena and you spend most of the class talking quietly with each other. You often get stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Lena and she immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A20', 1);
          scene.text('You sit next to Lena. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mrs. Sokoloff asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                          { label: 'Roman', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Roman, a decision you regret when he scares you with his deathly stares and comments about you being a dirty, disgusting whore who nobody would miss.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'npc_relationship', 'modify', 'A157', 1);
        scene.text('You sit next to Roman and you spend most of the class talking quietly with each other. You often get stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Roman and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A157', 1);
          scene.text('You sit next to Roman. He stares straight into your eyes with a creepy look that terrifies you and causes you to look away in fear.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                          { label: 'Petka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Petka, who looks at you in disgust and instead focuses on his coursework.');
    } else {
      if (((st as any).grupTipe ?? 0) === 3) {
        qspCall(st, 'npc_relationship', 'modify', 'A6', 1);
        scene.text('You sit next to Petka and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Petka, but he ignores you and chooses to talk to other people or do his coursework.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A6', 1);
          scene.text('You sit next to Petka. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mrs. Sokoloff asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                          { label: 'Lera', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Lera, who ignores you at first before mouthing "slut" at you and doing a motion with her hands where she pretends to be forcing your head down on her imaginary dick.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'npc_relationship', 'modify', 'A21', 1);
        scene.text('You sit next to Lera and you spend most of the class talking quietly with each other. You often get stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Lera and she immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A21', 1);
          scene.text('You sit next to Lera. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mrs. Sokoloff asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                          { label: 'Lina', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Lina, who loudly scoffs. "Don\'t you have to go and suck a dick somewhere, you massive whore?"');
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        qspCall(st, 'npc_relationship', 'modify', 'A19', 1);
        scene.text('You sit next to Lina and you spend most of the class talking quietly with each other. You often get stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Lina, who scoffs loudly when you try talking to her. "Go and talk to Lesco. He\'s the only friend a loser like you will ever get. If you\'re lucky."');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A19', 1);
          scene.text('You sit next to Lina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mrs. Sokoloff asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                          { label: 'Igor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Igor, who just stares at you before looking around for somewhere else to sit.');
      scene.text('"God, I have to sit next to the bike?" he moans when he can\'t find anywhere to go.');
    } else {
      if (((st as any).grupTipe ?? 0) === 1) {
        qspCall(st, 'npc_relationship', 'modify', 'A4', 1);
        scene.text('You sit next to Igor and you spend most of the class talking quietly with each other. You often get stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Igor, who makes great efforts to not avoid talking to you.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A4', 1);
          scene.text('You sit next to Igor. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mrs. Sokoloff asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                          { label: 'Niko', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Niko, who makes crude remarks about how you should be on your knees under his desk, sucking his dick like a good little slut.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'npc_relationship', 'modify', 'A189', 1);
        scene.text('You sit next to Niko and you spend most of the class talking quietly with each other. You often get stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Niko and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A189', 1);
          scene.text('You sit next to Niko. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mrs. Sokoloff asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                        ]);
                      } else {
                        if (((s as any).scooltiperand ?? 0) === 12) {
                          scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
                          scene.text('The lesson takes a brief pause as one of the students asks Mrs. Sokoloff a question about her paper. With nothing to do for the moment, you doodle lazily in the margin of your notebook.');
                          scene.text('When you look back up, you notice Petka turning his head away. You don\'t think much of it at first, until you catch him a second time. Was he looking at you, or just in your direction? Even Mrs. Sokoloff walks by and pauses next to your desk for a moment before continuing on.');
                          scene.text('Class resumes, and things return to normal, but part-way through the lesson, you look at Petka again and find him staring at you. He\'s clearly not trying to make eye contact, however, or he would have noticed you looking back at him.');
                          scene.text('Following his gaze down, you spot what\'s caught his attention: your uniform has lost a button, which is giving him a good view your cleavage.');
                          qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
                          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                            scene.actions([
                              { label: 'Ignore it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                            ]);
                          } else {
                            scene.actions([
                              { label: 'Ignore it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'fame', 'pav', 'sex', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
    scene.text('You let Petka continue to gawk at you. You find yourself somewhat amused at how little it takes to completely enthrall some boys.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            ]);
                          }
                          scene.actions([
                            { label: 'Pull your shirt closed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/closeshirtfo.jpg');
    scene.text('You quickly grasp both sides of your blouse and pull them tightly together. Petka\'s face turns red when he realizes he\'s been caught, and he immediately turns back to face the blackboard.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                          ]);
                        } else {
                          if (((s as any).scooltiperand ?? 0) === 13) {
                            scene.img('images/locations/pavlovsk/school/classroom/history/lenatchair.jpg');
                            scene.text('At the end of class, Mrs. Sokoloff asks the class to study quietly as she leaves the classroom for a few minutes. Most of the students start talking or get up and start walking around as soon as she leaves. Lena on the other hand, walks up to Mrs. Sokoloff\'s desk, sits down in her chair and starts rolling and spinning around on it, seemingly having the time of her life.');
                            scene.actions([
                              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                            ]);
                          } else {
                            if (((s as any).scooltiperand ?? 0) === 14) {
                              scene.img('images/locations/pavlovsk/school/classroom/history/lenlerskirt.jpg');
                              scene.text('At the end of class, Mrs. Sokoloff asks the class to study quietly as she grades some papers. Most of the students do just that, but when it\'s obvious that Mrs. Sokoloff isn\'t paying attention, a few students start talking quietly. Lena gets up and sits on Lera\'s desk, facing Lera with her legs spread before she pulls Lera\'s head down to her crotch and pulls her skirt up over Lera\'s head.');
                              scene.text('You have no idea if Lera is actually going down on her in the middle of class, but Mrs. Sokoloff notices and yells at Lena to get off the desk. She calls then her up to her desk, where she gives her a stern lecture until the bell rings.');
                              qspCall(s, 'arousal', 'voyeur', 5);
                              qspCall(s, 'arousal', 'end');
                              scene.actions([
                                { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
                              ]);
                            } else {
                              if (((s as any).scooltiperand ?? 0) === 15) {
                                scene.img('images/locations/pavlovsk/school/classroom/history/lenlerupskirt.jpg');
                                scene.text('As Mrs. Sokoloff lectures the class on some dull moment in history no one cares about anymore, you notice Petka keeps looking back past you to the back of the class. You turn your head to follow his gaze and see Lena and Lera sitting side by side with their legs slightly spread apart, just enough to show off their panties. They seem amused by all the looks they\'re getting.');
                                qspCall(s, 'arousal', 'erotic', 5);
                                qspCall(s, 'arousal', 'end');
                                scene.actions([
                                  { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                ]);
                              } else {
                                if (((s as any).scooltiperand ?? 0) === 16) {
                                  scene.img('images/locations/pavlovsk/school/classroom/history/leratongue.jpg');
                                  scene.text('As Mrs. Sokoloff lectures the class on some dull moment in history no one cares about anymore, you glance around in boredom and notice Lera doing the same. When she sees you looking at her, she sticks out her tongue at you before you hear Mrs. Sokoloff clear her throat and you look back to the front of class to wait for class to end.');
                                  scene.actions([
                                    { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                  ]);
                                } else {
                                  if (((s as any).scooltiperand ?? 0) === 17) {
                                    scene.img('images/locations/pavlovsk/school/classroom/history/linaskirt.jpg');
                                    scene.text('During class, Mrs. Sokoloff calls Lina up to the front of class to write an answer on the board. As she does, you and everyone else in class notice the back of her skirt is pulled up, held up by what looks like her pantyhose. You don\'t think she\'s aware of the view she\'s giving the class as several students whistle or laugh. Lina seems confused and when Mrs. Sokoloff tells the class to quieten down, she sees what\'s causing the ruckus, grabs the back of Lina\'s skirt and pulls it down.');
                                    scene.text('Only then does Lina realize what happened and blushes a bright red before she turns back to the board and quickly writes out the answer. She then hurries to sit back down, where she looks sheepish for the rest of the class.');
                                    qspCall(s, 'arousal', 'erotic', 5);
                                    qspCall(s, 'arousal', 'end');
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
    qspCall(st, 'gschool_gossip', 'lesson');
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
  } else {
    qspGoto(s, 'gschool_lessons', 'short_break');
  }
  // TODO-QSP: end
  scene.build();
}

function enterShop(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 6) + 0) > 0) {
    (s as any).school_event_hour = 1;
    (s as any).scooltiperand = (Math.floor(Math.random() * 17) + 1);
    if (((s as any).scooltiperand ?? 0) === 1) {
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/events/scoolrand_3.jpg');
      scene.text('As you walk into class, you see Vitek, Dan and Vasily have drawn a goofy scene on the blackboard, making it look like they\'re characters in a computer game. You share a laugh with them as you sit down; that certainly brightened your mood.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).scooltiperand ?? 0) === 2) {
        qspCall(s, 'mood', 'lower', 'small');
        qspCall(s, 'stat', '');
        if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 0  &&  (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['anus'] > 0)) {
          ((s as any).pcs_memory = (s as any).pcs_memory ?? {})['school_no_panty_cum_flash'] = ((s as any).daystart ?? 0);
          scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
          scene.text('Before you can answer the question Mr. Kuznetsov poses, you have to clean the blackboard, but accidentally drop the cloth. As you bend over to pick it up, you suddenly feel something <i>spurt</i> down your leg.');
          if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] > 0) {
            qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
            scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so both your holes leaking cum that\'s dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Kuznetsov having no idea why as he tries to shout for order.');
          } else {
            if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
              qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 5) + 8));
              scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from your pussy and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Kuznetsov having no idea why as he tries to shout for order.');
            } else {
              if (((s as any).cum_loc ?? 0)?.['anus'] > 0) {
                qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
                scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from between your ass cheeks and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Kuznetsov having no idea why as he tries to shout for order.');
              }
            }
          }
        } else {
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
            qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
            qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 5) + 8));
            scene.img('images/locations/pavlovsk/school/events/nopanties_buttplug.jpg');
            scene.text('You\'ve been called up to answer the question written on the blackboard, but while solving it, you need to erase something. You accidentally drop the cloth and hesitate to pick it up as you think about the fact that you\'re not wearing any panties while your ass is currently stuffed with a butt plug.');
            scene.text('"Well?" Mr. Kuznetsov prods impatiently.');
            scene.text('With a coy smile, you slowly bend over until you feel your skirt rise up, exposing your bare pussy and ass to your class. Hearing the flurry of murmurs and whispers, you can\'t help but squeeze and clench around the toy. The boys sound both surprised and intrigued by the sight while the girls whisper to one another that you\'re a slut. From where Mr. Kuznetsov sits, he can\'t see what everyone is fussing over, so he starts to move to get a better look. You quickly snap back up, adjust your skirt and, with a devious smile and cloth in hand, start wiping away at the board as if nothing happened.');
          } else {
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).analPlugIn ?? 0))) {
              qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
              qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 4) + 1));
              scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
              scene.text('Before you can answer the question Mr. Kuznetsov poses, you have to clean the blackboard, but accidentally drop the cloth and totally forget that you aren\'t wearing panties. The whistling and shouting from the boys and murmurs of disapproval from most of the girls behind you tell you that everyone has a clear view of your bare ass and both your holes are on display for everyone to see. Everyone but Mr. Kuznetsov that is, who has no clue why the class is so riled up and desperately tries to calm them down.');
            } else {
              qspCall(s, 'arousal', 'flash', (-5));
              qspCall(s, 'fame', 'pav', 'sex', 1);
              scene.img('images/locations/pavlovsk/school/events/scoolrand_4_1.jpg');
              scene.text('When you walk up to the blackboard to answer a question, you trip and fall. Somehow, you manage to fall in such a way that your skirt ends up on your back and the whole class can see your panty-clad ass. You quickly get up and straighten your clothes with a bright red face, trying to ignore the hollering from your classmates. You can tell that most of the guys and even a few girls definitely appreciated your show, even if it was involuntarily.');
            }
          }
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        if (((s as any).scooltiperand ?? 0) === 3) {
          scene.img('images/locations/pavlovsk/school/events/scoolrand_9.jpg');
          scene.text('As you sit in class waiting for the lesson to begin, you can\'t help but admire the expensive looking stockings Vicky is wearing. With a tinge of jealousy, you wonder where you could buy yourself some and if you can afford them.');
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          if (((s as any).scooltiperand ?? 0) === 4) {
            scene.img('images/locations/pavlovsk/school/events/urok7.jpg');
            scene.text('As you wait for the end of the lesson, you notice you\'re not the only one being a bit drowsy; Pauline is very close to falling asleep on her desk.');
            scene.actions([
              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
            ]);
          } else {
            if (((s as any).scooltiperand ?? 0) === 5) {
              scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
              scene.text('During class, you feel a hand slide around your side and grab one of your breasts. You squeak loudly and try to smack Dan\'s hand away, but he jerks it away and all you manage to do is smack your breast.');
              // TODO-QSP: dynamic text: "Is there a problem, Miss <<$pcs_lastname>>?" Mr. Kuznetsov asks and you glance ...
              scene.text(`"Is there a problem, Miss ${((s as any).pcs_lastname || '')}?" Mr. Kuznetsov asks and you glance around and notice everyone is staring at you as Dan snickers behind you. Mr. Kuznetsov looks at you curiously.`);
              qspCall(s, 'willpower', 'misc', 'self', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Tell on him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Tell on him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (3);
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-5));
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You straighten up. "Yes. Dan is grabbing my breasts."');
    scene.text('Mr. Kuznetsov gives Dan a disapproving look. "Is this true?"');
    scene.text('Dan denies it, but Mr. Kuznetsov doesn\'t believe him and sends him to the principal\'s office.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              }
              qspCall(s, 'willpower', 'misc', 'self', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Slap Dan', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Slap Dan', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).Kuznetsov_punishment = 1;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-1));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    scene.text('You ignore Mr. Kuznetsov and turn around and slap Dan with all your force. Dan recoils, his hand going to his cheek as students start murmuring about what happened and some laugh.');
    // TODO-QSP: dynamic text: Mr. Kuznetsov''s voice cuts through the noise. "That''s enough of that, Miss <<$...
    scene.text(`Mr. Kuznetsov's voice cuts through the noise. "That's enough of that, Miss ${((st as any).pcs_lastname || '')}! Go to the principal's office!"`);
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Nothing is wrong', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/breastg.jpg');
    scene.text('You shake your head at Mr. Kuznetsov and desperately want to turn around and strangle Dan, but you don\'t dare with Mr. Kuznetsov now keeping an eye on you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                { label: 'Embarrassed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
    scene.text('You squeak loudly as his fingers quickly pinch your sensitive nipple and your hand quickly flies to your breast to shield it from further attack.');
    // TODO-QSP: dynamic text: "Is there a problem, Miss <<$pcs_lastname>>?" Mr. Kuznetsov asks and you glance ...
    scene.text(`"Is there a problem, Miss ${((st as any).pcs_lastname || '')}?" Mr. Kuznetsov asks and you glance around and notice everyone is staring at you as Dan snickers behind you.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                { label: 'Enjoy', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/breastg.jpg');
    scene.text('You bite your lip to silence the moan that wants to escape as you feel your molester\'s fingers give your nipple a quick pinch before retreating. It was a nice treat to keep class interesting.');
    qspCall(st, 'arousal', 'foreplay', 5, 'exhibitionism');
    if (((st as any).pcs_inhib ?? 0) >= 40) {
      scene.actions([
        { label: 'Come get some more', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A10', 2);
    scene.img('images/locations/pavlovsk/school/classroom/boobgr.mp4');
    scene.text('You bite your lip to silence the moan that wants to escape as you feel your molester\'s fingers give your nipple a quick pinch before retreating. After the hand is gone, you move your hand to the opposite side of your face, as if to scratch an itch and simultaneously glance over your shoulder until your eye is on Dan, who groped you.');
    scene.text('You give him a smile out of the corner of your mouth as you wink and scoot your chair back. His eyes fill with surprise and excitement and a few seconds after you turn back to face Mr. Kuznetsov, you feel his hand massaging your breast again.');
    qspCall(st, 'arousal', 'foreplay', 10, 'exhibitionism');
    scene.actions([
      { label: 'Enjoy more', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/breastg.jpg');
    scene.text('You spend the rest of class with Dan\'s hand coming and going to squeeze your breast and tweak your nipple, still careful to make sure Mr. Kuznetsov doesn\'t catch on.');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('Enjoying the feeling of Dan\'s hand massaging your breast and his fingers tweaking your nipple, you decide to take advantage of the opportunity. The pencil you were using to take notes goes under your skirt and begins to prod and play with your hard clitoris through your quickly soaking panties.');
      scene.text('Eventually, you get bored of it and shift the fabric to the side to get access to your bare pussy and insert your two middle fingers. They easily slide between your wet lips and your breathing hitches slightly, matching the rhythm of your pistoning fingers.');
      (st as any).orgasm_txt = 'Dan seems to have caught on and starts to knead your breast and pull at your breast harder. In a moment of perfect coincidence, your pinch your clit right as Dan squeezes your sensitive nipple and your knees fly together, your legs clenching hard in orgasm. You bite your lip hard as you ride out the waves and you feel Dan\'s hand slide away before you see Mr. Kuznetsov giving you a curious look. With confident eyes and a bright smile, you quickly fix your clothes and sit up in your seat.';
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'arousal', 'clit_finger', 10, 'masturbate', 'exhibitionism');
      qspCall(st, 'arousal', 'end');
      scene.text('You spend the rest of class with Dan\'s hand playing with your breast as you sit satisfied in soaked panties and a small puddle of your own juices.');
    } else {
      qspCall(st, 'fame', 'pav', 'sex', 1);
      scene.text('Enjoying the feeling of Dan\'s hand massaging your breast and his fingers tweaking your nipple, you decide to take advantage of the opportunity. The pencil you were using to take notes goes under your skirt and begins to prod and play with your already exposed clitoris, but your bare pussy is too tempting and you abandon the pencil for your two middle fingers. They easily slide between your wet lips and your breathing hitches, matching the rhythm of your pistoning fingers.');
      (st as any).orgasm_txt = 'Dan seems to have caught on and starts to knead your breast and pull at your breast harder. In a moment of perfect coincidence, your pinch your clit right as Dan squeezes your sensitive nipple and your knees fly together, your legs clenching hard in orgasm. You bite your lip hard as you ride out the waves and you feel Dan\'s hand slide away before you see Mr. Kuznetsov giving you a curious look. With confident eyes and a bright smile, you quickly fix your clothes and sit up in your seat.';
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'arousal', 'clit_finger', 10, 'masturbate', 'exhibitionism');
      qspCall(st, 'arousal', 'end');
      scene.text('You spend the rest of class with Dan\'s hand playing with your breast as you sit satisfied in a small puddle of your own juices.');
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
              if (((s as any).scooltiperand ?? 0) === 6  &&  ((s as any).braworntype ?? 0) !== 'none') {
                scene.img('images/locations/pavlovsk/school/classroom/brasnap.jpg');
                scene.text('During class, you feel a hand grab and pull on your bra strap. Before you can turn or protest they let go, causing it to snap back painfully. You let out a little yelp and turn to glare at Dan behind you.');
                // TODO-QSP: dynamic text: "Is there a problem, Miss <<$pcs_lastname>>?" Mr. Kuznetsov asks and you glance ...
                scene.text(`"Is there a problem, Miss ${((s as any).pcs_lastname || '')}?" Mr. Kuznetsov asks and you glance around and notice everyone is staring at you as Dan snickers behind you. Mr. Kuznetsov looks at you accusingly.`);
                qspCall(s, 'willpower', 'misc', 'self', 'medium');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Tell on him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Tell on him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (3);
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-5));
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You straighten up. "Yes. Dan is snapping my bra."');
    scene.text('Mr. Kuznetsov gives Dan a look. "Is this true?"');
    scene.text('Dan denies it, but Mr. Kuznetsov doesn\'t believe him and sends him to the principal\'s office.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  ]);
                }
                qspCall(s, 'willpower', 'misc', 'self', 'medium');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Slap Dan', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Slap Dan', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).Kuznetsov_punishment = 1;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A' + ((st as any).r ?? 0) + '', (-1));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    scene.text('You ignore Mr. Kuznetsov and turn around and slap Dan with all your force. Dan recoils, his hand going to his cheek as students start murmuring about what happened and some laugh.');
    // TODO-QSP: dynamic text: Mr. Kuznetsov''s voice cuts through the noise. "That''s enough of that, Miss <<$...
    scene.text(`Mr. Kuznetsov's voice cuts through the noise. "That's enough of that, Miss ${((st as any).pcs_lastname || '')}! Come and see me after school."`);
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Nothing is wrong', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You shake your head at Mr. Kuznetsov, desperately wanting to turn around and strangle Dan, but you don\'t dare with Mr. Kuznetsov now keeping an eye on you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).scooltiperand ?? 0) === 7) {
                  scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
                  scene.text('Glancing over, you notice Vitek reaching around and grabbing the breast of the girl in front of him. At first, she tries to fend him off and tell him to stop, but after a few looks from Mr. Kuznetsov, she just gives up and tries to ignore his groping hands.');
                  qspCall(s, 'arousal', 'voyeur', 5);
                  qspCall(s, 'arousal', 'end');
                  scene.actions([
                    { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                  ]);
                } else {
                  if (((s as any).scooltiperand ?? 0) === 8) {
                    scene.img('images/locations/pavlovsk/school/classroom/dickpic.jpg');
                    scene.text('You get an alert on your phone and pull it out of your purse before placing it in your lap. You glance down and see someone has sent you an image; opening it, you see a picture of someone\'s dick. You hear some snickering and look up to see who it was, but you can\'t tell where it came from. Unsure what to do, you don\'t want to be caught looking at it, so you delete the image.');
                    qspCall(s, 'arousal', 'erotic', 5);
                    qspCall(s, 'arousal', 'end');
                    scene.actions([
                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                    ]);
                  } else {
                    if (((s as any).scooltiperand ?? 0) <= 10) {
                      scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
                      scene.text('As you arrive in class, you look around and decide to sit next to…');
                      scene.actions([
                        { label: 'Dimka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Dimka, who laughs at your slutiness with sarcastic jokes and then ignores you for the rest of the lesson.');
    } else {
      if (((st as any).grupTipe ?? 0) === 1) {
        qspCall(st, 'npc_relationship', 'modify', 'A1', 1);
        scene.text('You sit next to Dimka and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Kuznetsov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Dimka, but he ignores you for the duration of the lesson.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A1', 1);
          scene.text('You sit next to Dimka. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before Mr. Kuznetsov asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                        { label: 'Vicky', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Vicky, who gives you a disgusted glare and walks away to sit with Vanya.');
    } else {
      if (((st as any).grupTipe ?? 0) === 1) {
        qspCall(st, 'npc_relationship', 'modify', 'A15', 1);
        scene.text('You sit next to Vicky and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Kuznetsov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Vicky, but she ignores you and instead talks to Vanya and her sister.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A15', 1);
          scene.text('You sit next to Vicky. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before Mr. Kuznetsov asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                        { label: 'Dan', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Dan, who gives you a perverted smile and keeps asking if you want to suck his dick.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
        scene.text('You sit next to Dan and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Kuznetsov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Dan and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
          scene.text('You sit next to Dan. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mr. Kuznetsov asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                        { label: 'Vitek', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Vitek, who gives you a perverted smile and leans back in his chair to show you the bulge in his pants. "It\'s all yours, whore. All you have to do is ask," he says with a wink.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
        scene.text('You sit next to Vitek and you spend most of the class talking quietly with each other, often getting stern looks from Mr Kuznetsov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Vitek and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A156', 1);
          scene.text('You sit next to Vitek. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mr. Kuznetsov asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                        { label: 'Vasily', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Vasily, who gives you a perverted smile and keeps asking if you want to suck his dick.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'npc_relationship', 'modify', 'A11', 1);
        scene.text('You sit next to Vasily and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Kuznetsov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Vasily and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A11', 1);
          scene.text('You sit next to Vasily. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mr. Kuznetsov asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                        { label: 'Pauline', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Pauline, who ignores you at first before mouthing "slut" at you and doing a motion with her hands where she pretends to be forcing your head down on her imaginary dick.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'npc_relationship', 'modify', 'A24', 1);
        scene.text('You sit next to Pauline and you spend most of the class talking quietly with each other. You often get stern looks from Mr. Kuznetsov when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Pauline and she immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A24', 1);
          scene.text('You sit next to Pauline. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Kuznetsov asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                        { label: 'Petia', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      // TODO-QSP: dynamic text: As you walk into class, you look around and to your despair find that the only s...
      scene.text(`As you walk into class, you look around and to your despair find that the only seat left is next to Petia, everyone else having given the fat, smelly loser a wide berth. Your nostrils are assaulted as soon as you sit down, the ordeal made worse by Petia leaning in and asking if he can get a blowjob since you're such a slut. You reply by sticking your fingers in your mouth and gagging. "When will you realize that you're such a fat and smelly loser that not even ${((st as any).pcs_nickname || '')} will suck your tiny dick?" Arkadi chimes in, causing the gopniks to gang up on him and free you from his horrible attempts at hitting on you.`);
    } else {
      scene.text('As you walk into class, you look around and to your despair find that the only seat left is next to Petia, everyone else having given the fat, smelly loser a wide berth. Your nostrils are assaulted as soon as you sit down, the ordeal made worse by Petia leaning in and continually making disgusting attempts to hit on you, despite you clearly not being interested. You recoil and gag as his proximity makes the smell of him worse.');
      scene.text('"Girls always gag and run away when you talk to them because you\'re a fat, disgusting loser that I can smell from over here! They don\'t want to and never will suck your tiny dick, so fuck off and leave them alone!" Arkadi chimes in, causing the gopniks to gang up on him and free you from the ordeal.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                        { label: 'Marcus', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      // TODO-QSP: dynamic text: You sit next to Marcus, who awkwardly shuffles in his seat and avoids looking at...
      scene.text(`You sit next to Marcus, who awkwardly shuffles in his seat and avoids looking at you. As you look around, you see many of your classmates pointing and giggling, and not just at you. "Go on, ${((st as any).pcs_nickname || '')}! You know you want that big black cock stuffed into your whore mouth and down your slutty throat!" you hear someone shout out.`);
    } else {
      if (((st as any).grupTipe ?? 0) === 1) {
        qspCall(st, 'npc_relationship', 'modify', 'A146', 1);
        scene.text('You sit next to Marcus and you spend most of the class talking quietly with each other, often getting stern looks from Mr. KuznetsovVal when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Marcus, who tries to politely avoid conversation, but people start laughing at him for letting you talk to him. They then turn their attention to you and mock you for trying to speak with a popular kid.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A146', 1);
          scene.text('You sit next to Marcus. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mr. Kuznetsov asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      ]);
                    } else {
                      if (((s as any).scooltiperand ?? 0) === 11) {
                        scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
                        scene.text('The lesson takes a brief pause as one of the students asks Mr. Kuznetsov a question about her paper. With nothing to do for the moment, you doodle lazily in the margin of your notebook.');
                        scene.text('When you look back up, you notice Marcus turning his head away. You don\'t think much of it at first, until you catch him a second time. Was he looking at you, or just in your direction? Even Mr. Kuznetsov walks by and pauses next to your desk for a moment before continuing on.');
                        scene.text('Class resumes, and things return to normal, but part-way through the lesson, you look at Marcus again and find him staring at you. He\'s clearly not trying to make eye contact, however, or he would have noticed you looking back at him.');
                        scene.text('Following his gaze down, you spot what\'s caught his attention: your uniform has lost a button, which is giving him a good view of your cleavage.');
                        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
                        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                          scene.actions([
                            { label: 'Ignore it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                          ]);
                        } else {
                          scene.actions([
                            { label: 'Ignore it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'fame', 'pav', 'sex', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
    scene.text('You let Marcus continue to gawk at you. You find yourself somewhat amused at how little it takes to completely enthrall some boys.');
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
                        if (((s as any).scooltiperand ?? 0) === 12  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
                          scene.img('images/locations/pavlovsk/school/classroom/shop/nushpussy.jpg');
                          scene.text('As you sit in class waiting for the lesson to end, you glance around bored. You notice Anushka looking back at you, but you think nothing of it. When you meet her eyes again, she grins, reaches down between her legs and spreads them apart before turning to face you. She pulls her panties aside to reveal her pussy and gives you an amused smirk as your eyes drift down to her hand movements.');
                          scene.text('You hear Mr. Kuznetsov clear his throat and you look back to the front of class. When you glance back later, she\'s sitting normally again and either doesn\'t notice or is ignoring you.');
                          qspCall(s, 'arousal', 'erotic_nudity', 5);
                          qspCall(s, 'arousal', 'end');
                          scene.actions([
                            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                          ]);
                        } else {
                          if (((s as any).scooltiperand ?? 0) === 13) {
                            scene.img('images/locations/pavlovsk/school/classroom/shop/paulnushhump.jpg');
                            scene.text('Near the end of class, Mr. Kuznetsov tells the class to study quietly as he leaves class a few minutes early. Of course, once he\'s gone, no one listens and everyone starts wandering around messing with the tools. Meanwhile, Anushka starts teasing Fedor, asking if he wants to fuck her. When he finally admits he\'s attracted to her, Pauline swoops in behind Anushka, pushes into her and pulls up the back of her skirt.');
                            scene.text('She starts pounding her hips against Anushka\'s ass. "Oh Anushka, you\'re so hot! I\'ve always wanted to fuck you!" Pauline says, trying to sound like Fedor.');
                            scene.text('Anushka plays along. "Oh Fedor, you have such an almost average-sized dick! It almost feels good!"');
                            scene.text('This gets the rest of class laughing and Fedor blushing even more. His humiliation only ends when the bell rings.');
                            qspCall(s, 'arousal', 'erotic', 5);
                            qspCall(s, 'arousal', 'end');
                            scene.actions([
                              { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
                            ]);
                          } else {
                            if (((s as any).scooltiperand ?? 0) === 14) {
                              scene.img('images/locations/pavlovsk/school/classroom/shop/paulvichair.jpg');
                              scene.text('During class, Vicky and Pauline start whispering back and forth and you can tell it\'s getting heated by the harshness of the hissing whispers and their facial expressions. You have no clue what they\'re saying, but whatever it is pisses Pauline off and she reaches over and starts yanking hard on Vicky\'s hair. "You fucking bitch! I\'ll rip your hair out!" she says loudly enough to get everyone\'s attention.');
                              scene.text('Mr. Kuznetsov rushes over and breaks it up before taking each girl by the elbow and leading them out of class. A few minutes later, Vicky returns looking rather smug with Mr. Kuznetsov soon returning behind her.');
                              scene.actions([
                                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                              ]);
                            } else {
                              if (((s as any).scooltiperand ?? 0) === 15  &&  ((s as any).npc_rel ?? 0)?.['A15'] >= 60) {
                                scene.img('images/locations/pavlovsk/school/classroom/shop/vicpanties.jpg');
                                scene.text('During class, Vicky is sitting across from you and you can faintly hear the music coming from her ear buds. When she notices you looking in her direction, she turns towards you and makes a \'grrr\' sound, curls her fingers and playfully claws at you, as if warning you not to tell on her. When she does that, she also exposes her pink panties for you to see as well. You smile in amusement and let her know her secret is safe.');
                                qspCall(s, 'arousal', 'erotic', 5);
                                qspCall(s, 'arousal', 'end');
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
    qspCall(st, 'gschool_gossip', 'lesson');
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
  } else {
    qspGoto(s, 'gschool_lessons', 'short_break');
  }
  // TODO-QSP: end
  scene.build();
}

function enterShopPunishment(s: GameState, scene: SceneBuilder): void {
  (s as any).Kuznetsov_punishment = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop1.jpg');
  (s as any).Kuznetsov_punishment_count = ((s as any).Kuznetsov_punishment_count ?? 0) + (1);
  if (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).Kuznetsov_punishment_count ?? 0) < 5) {
    scene.text('After your final class, you go to the school offices and knock on Mr. Kuznetsov\'s door. After a few seconds, you hear him telling you to enter and walk in to see him sitting behind his desk reading a book. You walk up to his desk and wait as he looks up at you and puts the book down.');
    scene.text('"I don\'t know what\'s gotten into you lately, but whatever it is needs to stop." He pauses, but before you can even consider saying anything in your defense, he starts speaking again. "If it doesn\'t, then I\'ll have to assume you\'re going to become a problem student and treat you accordingly. If this starts to become a regular thing with you, the punishment will become a lot more severe. More than just a few demerits on your record. Now get out of my office."');
    scene.text('Knowing better than to say anything, you turn and leave.');
    (s as any).school_period = 0;
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } else {
    scene.text('After your final class, you go to the school offices and knock on Mr. Kuznetsov\'s door. After a few seconds, you hear him tell you to enter and walk in to see him sitting behind his desk reading a book. You walk up to his desk and wait as he continues to read until he finally looks up at you and puts the book down.');
    scene.text('He looks you over. "Here you are again, my favorite problem student. You know why you\'re here and I won\'t stand for you disrespecting me in my class." He pauses, leaving you unsure if you should say anything. The silence stretches out with him just staring at you and you feel the need to say something.');
    scene.actions([
      { label: 'Say something', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop2.jpg');
    scene.text('You open your mouth and start to speak, but as you do, he suddenly rockets out of his chair and leans across his desk. Before you have time to react, he grabs you by your tie and jerks you closer to him. "Did I fucking tell you to speak? You\'ll speak when I tell you to and by God will you learn to respect or at least fear me!"');
    scene.actions([
      { label: 'Punishment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop3.jpg');
    if (((st as any).pcs_hotcat ?? 0) >= 6  &&  ((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      if (((st as any).pantyworntype ?? 0) !== 'none') {
        scene.text('He quickly walks around his desk and shoves you forward, bending you over his desk before he pulls up your skirt and violently yanks down your panties. You can hear the fabric tearing before he gives your bare ass one hard open handed slap that stings. You expect more, but nothing comes. You look back just as he pulls something out of his pocket and holds it up for you to see. It\'s a larger than average butt plug.');
      } else {
        scene.text('He quickly walks around his desk and shoves you forward, bending you over his desk before he pulls up your skirt and forcefully holds you down over his desk. "Not even wearing panties to school, you little slut?" he says as he gives your bare ass one hard open handed slap that stings. You expect more, but nothing comes. You look back just as he pulls something out of his pocket and holds it up for you to see. It\'s a larger than average butt plug.');
      }
      qspCall(st, 'arousal', 'foreplay', 5, 'rough');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Plugged', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop4.jpg');
    scene.text('"You think you\'re some bad little girl, huh? Well I\'ll show you what happens to bad little girls!" He pulls your cheeks apart and before you even have a chance to protest, shoves the unlubriated butt plug up your ass. You wince in pain as he forces it in with sheer brute force.');
    qspCall(st, 'arousal', 'anal_dildo', 5, 'rough', 'maso');
    qspCall(st, 'pain', 'asshole', 1, 'stretch');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Spanked', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop5.jpg');
    scene.text('Once he has the plug fully seated up your ass, he pulls you over to a chair and sits down. He then roughly grabs you, bends you over his knee and proceeds to spank you. Not only does each slap sting, it also jams the plug up your ass to its base. You grit your teeth and bare the pain.');
    qspCall(st, 'arousal', 'anal_dildo', 5, 'rough', 'maso');
    qspCall(st, 'pain', 'asscheeks', 2, 'spank');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Bound', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop6.jpg');
    scene.text('Once your ass is bright red and aching, he finally stops. Lifting you off his lap, he proceeds to strip you of all your clothes. Once naked, he roughly tosses you on his desk and uses power cords from the workshop to tie your hands and legs together at the knees. He pulls the cords tightly, causing them to dig painfully into your flesh.');
    qspCall(st, 'arousal', 'foreplay', 5, 'rough', 'bound');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Blowjob', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'boyStat', 'A132');
    scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop7.jpg');
    // TODO-QSP: dynamic text: With you fully secured, he removes his shirt and tie before pulling his dick out...
    scene.text(`With you fully secured, he removes his shirt and tie before pulling his dick out of his pants. "Open your fucking mouth, slut!" he says as he painfully grips the back of your neck, applying more pressure until you open your mouth. You barely get your mouth open wide enough before he shoves his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} cock in and you start gagging as he shoves it down your throat. "You best get my cock nice and wet if you know what's good for you."`);
    qspCall(st, 'arousal', 'bj', 5, 'rough', 'bound');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Clean it', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop8.jpg');
    scene.text('Several minutes pass as he fucks your mouth, only for him to abruptly stop and walk around the desk, where he roughly grabs hold of the butt plug and yanks it out, causing you to gasp in pain before he shoves it in your mouth. "That\'s it, bitch. Suck that plug clean."');
    scene.text('He fucks your mouth with the butt plug as you try not to think about where it just was.');
    qspCall(st, 'arousal', 'bj', 5, 'rough', 'bound', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'No lube', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop9.jpg');
    scene.text('He pulls the plug out of your mouth and drops it on the desk before he rolls you onto your back and pulls your ass cheeks apart. Seconds later, you feel the head of his cock against your loosened asshole before he shoves it in, the only thing making the pain bearable being the butt plug having already stretched it out and your saliva acting as lube.');
    scene.text('It takes him a few minutes of roughly fucking your ass to finally shove his dick balls deep inside you. Once he does, he starts furiously pounding your ass.');
    qspCall(st, 'arousal', 'anal', 5, 'rough', 'bound');
    qspCall(st, 'pain', 'asshole', 1, 'stretch');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck it again', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop10.jpg');
    scene.text('After several minutes, your saliva isn\'t offering much in the way of lubrication anymore and he pulls his dick out of your ass and takes off his pants. Once naked, he climbs up on the desk and straddles your chest before he grabs you by the hair and painfully yanks on your head while shoving his dick back in your mouth.');
    scene.text('He moans slightly. "You best suck it clean and get it nice and wet, because this is the last lubrication you\'re going to get."');
    scene.text('He then starts fucking your face as you gag repeatedly, but you do your best to coat his dick with your drool.');
    qspCall(st, 'arousal', 'bj', 5, 'rough', 'bound', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop11.jpg');
    scene.text('Once satisfied, he crawls back off the desk and unties your legs before he flips you over onto your stomach and half pulls you off the desk until you\'re bent over it. He then lifts your right leg and places your knee on the desk before you feel him shove his cock back inside you.');
    scene.text('Your asshole already stretched out and with fresh saliva for lubrication, it slides in pretty easily and he bottoms out inside you before he starts pounding your ass again.');
    qspCall(st, 'arousal', 'anal', 5, 'rough', 'bound');
    qspCall(st, 'pain', 'asshole', 1, 'stretch');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop12.jpg');
    scene.text('The lubrication from your drool seems to have completely faded away when he finally pulls back out of your ass. He rolls you back over onto your back and spins you around on his desk so your head is next to him before he forces his dick back into your mouth, making you suck him clean again.');
    scene.text('After a few seconds, he pulls out and you hold your mouth open as he jerks his dick a few times before you feel the streams of cum shooting into your mouth.');
    scene.text('Several spurts of cum later, he lets go of you and gets dressed. Once he\'s fully dressed, he unties your hands and roughly pulls you off the desk, causing you to fall to your knees.');
    scene.text('He throws your clothes at you as he sits back down at his desk. "I don\'t expect to see you in here again. If I do, then I\'ll keep showing you what happens to bad little girls until you get it. Now get the fuck out!"');
    if (((st as any).pantyworntype ?? 0) === 'none') {
      scene.text('Intimidated by his tone, you don\'t even wait to get dressed. You carry your clothes out with you and only get dressed once outside his office. Your ass in immense pain, you leave the school.');
    } else {
      qspCall(st, 'panties', 'dispose');
      scene.text('Intimidated by his tone, you don\'t even wait to get dressed. You carry your clothes out with you and only get dressed once outside his office, throwing your ruined panties into the trash. Your ass in immense pain, you leave the school.');
    }
    qspCall(st, 'cum_call', 'mouth', 'A132', 1);
    qspCall(st, 'arousal', 'bj', 5, 'rough', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave school', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_grounds', 'main'] },
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
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).pantyworntype ?? 0) !== 'none') {
        scene.text('He quickly walks around his desk and shoves you forward, bending you over his desk before he pulls up your skirt and violently yanks down your panties. You can hear the fabric tearing before he gives your bare ass one hard open handed slap that stings. He lays into your ass, spanking you until your ass is red and stinging.');
        scene.text('With tears in your eyes, he finally stops, pulls you up by your tie and shoves you towards the door. "Now get out of here and start behaving in my class!"');
        scene.text('You put your clothes back in place as best you can before walking out.');
        qspCall(st, 'arousal', 'foreplay', 5, 'rough');
        qspCall(st, 'arousal', 'end');
        qspCall(st, 'pain', '', 1, 'asscheeks', 'spank');
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Leave school', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_grounds', 'main'] },
        ]);
      } else {
        scene.text('He quickly walks around his desk and shoves you forward, bending you over his desk before he pulls up your skirt and forcefully holds you down over his desk. "Not even wearing panties to school, you little slut?" he says as he gives your bare ass one hard open handed slap that stings. He then lays into your ass, spanking you until your ass is red and stinging.');
        scene.text('With tears in your eyes, he finally stops, pulls you up by your tie and shoves you towards the door. "Now get out of here and start behaving in my class!"');
        scene.text('You put your clothes back in place as best you can before walking out.');
        qspCall(st, 'arousal', 'foreplay', 5, 'rough');
        qspCall(st, 'arousal', 'end');
        qspCall(st, 'pain', '', 1, 'asscheeks', 'spank');
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Leave school', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_grounds', 'main'] },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'geography':
      enterGeography(s, scene);
      break;
    case 'math':
      enterMath(s, scene);
      break;
    case 'help':
      enterHelp(s, scene);
      break;
    case 'history':
      enterHistory(s, scene);
      break;
    case 'shop':
      enterShop(s, scene);
      break;
    case 'shop_punishment':
      enterShopPunishment(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_lessonsev2: LocationDef = {
  name: 'gschool_lessonsev2',
  title: 'As you walk into class, you see some guys have drawn a goofy',
  region: 'other',
  enter: enter,
};
