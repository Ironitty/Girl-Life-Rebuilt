import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (Math.floor(Math.random() * 6) + 0 > 0) {
    (s as any).school_event_hour = 1;
    (s as any).scooltiperand = Math.floor(Math.random() * 16) + 1;
    if (((s as any).scooltiperand ?? 0) === 1) {
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/events/scoolrand_3.jpg');
      scene.text('As you walk into class, you see some guys have drawn a goofy scene on the blackboard, making it look like they\'re characters in a computer game. You share a laugh with them as you sit down; that certainly brightened your mood.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      qspCall(s, 'mood', 'lower', 'small');
      qspCall(s, 'stat', '');
      if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 0  &&  (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['anus'] > 0)) {
        (s as any).pcs_memory['school_no_panty_cum_flash'] = ((s as any).daystart ?? 0);
        scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
        scene.text('Before you can answer the question Mrs. Sokoloff poses, you have to clean the blackboard, but accidentally drop the cloth. As you bend over to pick it up, you suddenly feel something <i>spurt</i> down your leg.');
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] > 0) {
          qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 8) + 8);
          scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so are both your holes leaking cum that\'s dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mrs. Sokoloff having no idea why as she tries to shout for order.');
        } else {
          qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 5) + 8);
          scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from your pussy and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mrs. Sokoloff having no idea why as she tries to shout for order.');
          if (((s as any).cum_loc ?? 0)?.['anus'] > 0) {
            qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 8) + 8);
            scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from between your ass cheeks and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mrs. Sokoloff having no idea why as she tries to shout for order.');
          }
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
            qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
            qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 5) + 8);
            (s as any).pcs_memory['school_no_panty__anal_plug_flash'] = ((s as any).daystart ?? 0);
            scene.img('images/locations/pavlovsk/school/events/nopanties_buttplug.jpg');
            scene.text('You\'ve been called up to answer the question written on the blackboard, but while solving it, you accidentally drop the cloth used to wipe the board. You totally forget that not only are you are not wearing panties, your ass is stuffed with a butt plug. When you bend over, you feel your skirt rising up, exposing your bare pussy and ass to your class. Hearing the flurry of murmurs and whispers, you can\'t help but squeeze and clench around the toy currently filling your ass. The boys sound both surprised and intrigued by the sight while the girls whisper to one another that you\'re a slut.');
            scene.text('From where Mrs. Sokoloff sits, she can\'t see what everyone is fussing over, so she starts to move to get a better look. You quickly snap back up, adjust your skirt and start wiping away at the board as if nothing happened.');
          } else {
            qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
            qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 4) + 1);
            (s as any).pcs_memory['school_no_panty_flash'] = ((s as any).daystart ?? 0);
            scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
            scene.text('Before you can answer the question Mrs. Sokoloff poses, you have to clean the blackboard, but accidentally drop the cloth and totally forget that you\'re not wearing panties. The whistling and shouting from the boys and murmurs of disapproval from most of the girls behind you tell you that everyone has a clear view of your bare ass and both of your holes are on display for everyone to see. Everyone but Mrs. Sokoloff that is, who has no clue why the class is so riled up and desperately tries to calm them down.');
            qspCall(s, 'arousal', 'flash', (-5));
            qspCall(s, 'fame', 'pav', 'sex', 1);
            scene.img('images/locations/pavlovsk/school/events/scoolrand_4_1.jpg');
            scene.text('When you walk up to the blackboard to answer a question, you trip and fall. Somehow, you manage to fall in such a way that your skirt ends up on your back and the whole class can see your panty-clad ass. You quickly get up and straighten your clothes with a bright red face, trying to ignore the hollering from your classmates. You can tell that most of the guys and even a few girls definitely appreciated your show, even if it was involuntarily.');
          }
          if (((s as any).scooltiperand ?? 0) === 3) {
            scene.img('images/locations/pavlovsk/school/classroom/crash.mp4');
            scene.text('During class, there is a loud crashing sound from the back of the class. You, along with everyone, turn to see that Mefodiy is still sitting at his desk, but the desk is now laying on its side on the floor. The whole class bursts out laughing at him.');
            scene.text('Mefodiy is blushing as he quickly gets out of the desk and gets it back upright and sits back down in it. After making sure he\'s okay, Mrs. Sokoloff gets the class back under control and finishes the lesson.');
            scene.actions([
              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
            ]);
          } else {
            scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
            scene.text('Glancing over, you notice Vitek reaching around and grabbing the breasts of the girl in front of him. At first, she tries to fend him off and tells him to stop, but after a few stares from Mrs. Sokoloff, she just gives up and tries to ignore his groping hands.');
            qspCall(s, 'arousal', 'voyeur', 5);
            qspCall(s, 'arousal', 'end');
            if (((s as any).scooltiperand ?? 0) === 5) {
              scene.img('images/locations/pavlovsk/school/classroom/dickpic.jpg');
              scene.text('You get an alert on your phone and pull it out of your purse before placing it in your lap. You glance down and see someone has sent you an image. Opening it, you\'re greeted by the sight of someone\'s dick. You hear some snickering and look up to see who it was, but you can\'t tell where it came from. Unsure what to do and not wanting to be caught looking at it, you quickly delete the image.');
              qspCall(s, 'arousal', 'erotic', 5);
              qspCall(s, 'arousal', 'end');
              scene.actions([
                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
              ]);
            } else {
              scene.img('images/locations/pavlovsk/school/classroom/flick.jpg');
              scene.text('You notice Valentin keeps flicking Artem\'s ear when Mrs. Sokoloff looks away. Poor Artem\'s ear is already bright red and he looks like he\'s on the verge of tears.');
              if (((s as any).scooltiperand ?? 0) === 7) {
                scene.img('images/locations/pavlovsk/school/classroom/wedgieb.jpg');
                scene.text('You hear a pained grasp, as do several others, and glance over just in time to see Valentin letting go of Artem\'s underwear. He\'s pulled it half way up his back and you wince slightly at what looked like a painful wedgie.');
                scene.actions([
                  { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                ]);
              } else {
                scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
                scene.text('As you arrive in class, you look around and decide to sit next to…');
                qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
                if (((s as any).scooltiperand ?? 0) === 10) {
                  scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
                  scene.text('The lesson takes a brief pause as one of the students asks Mrs. Sokoloff a question about her paper. With nothing to do for the moment, you doodle lazily in the margin of your notebook.');
                  scene.text('When you look back up, you notice Artem turning his head away. You don\'t think much of it at first, until you catch him a second time. Was he looking at you, or just in your direction? Even Mrs. Sokoloff walks by and pauses next to your desk for a moment before continuing on.');
                  scene.text('Class resumes, and things return to normal, but part-way through the lesson, you look at Artem again and find him staring at you. He\'s clearly not trying to make eye contact, however, or he would have noticed you looking back at him.');
                  scene.text('Following his gaze down, you spot what\'s caught his attention: your uniform has lost a button, which is giving him a good view of your cleavage.');
                  qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Ignore it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Ignore it', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
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
                  scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
                  scene.text('Mrs. Sokoloff has stepped outside the classroom, telling you to do an assignment until she returns.');
                  scene.text('Valentin and Vitek seem to be in a good mood today, as they\'re whispering and laughing loudly about something.');
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
                      scene.text(`"Well, everyone has a bigger cock than you, but why not ask the expert on cocks?" Lazar says before he turns to you. "Is there any truth to this 'fact', ${((s as any).pcs_nickname ?? 0)}?"`);
                      scene.actions([
                        { label: 'Refuse to answer', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/fuckoff.jpg');
    scene.text('The class turns to see what you\'ll say, but your answer is showing him the middle finger without even looking up from your book.');
    // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>! Share your knowledge!" Lazar sighs.
    scene.text(`"Come on, ${((s as any).pcs_nickname ?? 0)}! Share your knowledge!" Lazar sighs.`);
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
                    scene.img('images/locations/pavlovsk/school/classroom/geography/stasyaphone.jpg');
                    scene.text('You notice Stasya seems to be ignoring the lesson and is playing on her phone instead. When you glance over at her, she gives you a little smirk before going back to her phone.');
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
    qspCall(s, 'gschool_gossip', 'lesson');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      ]);
                    }
                    scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
                    scene.actions([
                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                    ]);
                  }
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
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell on them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell on them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A9', (-2));
    qspCall(s, 'npc_relationship', 'modify', 'A158', (-1));
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/ask.jpg');
    scene.text('You quickly get out of your seat and run to Mrs. Sokoloff, telling her what happened.');
    scene.text('She immediately yells for Vitek and Valentin to come to the desk. "The principal will have a field day with you two! How could you do something so disgusting?!"');
    // TODO-QSP: dynamic text: While the boys keep to their story that they're innocent, Mrs. Sokoloff turns to...
    scene.text(`While the boys keep to their story that they're innocent, Mrs. Sokoloff turns to you. "Miss ${((s as any).pcs_lastname ?? 0)}, you're excused to visit the toilet to wash off."`);
    scene.text('When you return, the boys are gone. Mrs. Sokoloff tells you that they\'ve been sent to the principal and that you done the right thing telling her.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t tell on them', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    // TODO-QSP: dynamic text: You quickly start wiping the cum off you while giving them dirty looks, one of t...
    scene.text(`You quickly start wiping the cum off you while giving them dirty looks, one of the girls giving you some tissues to help. You quickly clean yourself and your clothes up as best you can before Mrs. Sokoloff notices you. "What are you doing over there, Miss ${((s as any).pcs_lastname ?? 0)}?"`);
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
                }
                scene.actions([
                  { label: 'Mefodiy', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Mefodiy, who expresses his disgust at your slutiness with sarcastic jokes and then ignores you for the rest of the lesson.');
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        qspCall(s, 'npc_relationship', 'modify', 'A148', 1);
        scene.text('You sit next to Mefodiy and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        scene.text('You sit next to Mefodiy, but he ignores you for the duration of the lesson.');
        qspCall(s, 'npc_relationship', 'modify', 'A148', 1);
        scene.text('You sit next to Mefodiy. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before Mrs. Sokoloff asks you to be quiet.');
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
        scene.text('You sit next to Andrey and Stasya and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you all to the principal\'s office.');
      } else {
        scene.text('You sit next to Andrey and Stasya, but they dismiss all of your attempts to speak with them and instead spend the lesson talking to each other.');
        qspCall(s, 'npc_relationship', 'modify', 'A139', 1);
        qspCall(s, 'npc_relationship', 'modify', 'A147', 1);
        scene.text('You sit next to Andrey and Stasya. They\'re a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mrs. Sokoloff asks you to be quiet.');
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  { label: 'Valentin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Valentin, who gives you a perverted smile and keeps asking if you want \'go for a ride\' with him. "And I don\'t mean on my bike, slut," he adds with a wink.');
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
        scene.text('You sit next to Valentin and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        scene.text('You\'re forced to sit next to Valentin and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
        scene.text('You sit next to Valentin. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mrs. Sokoloff asks you to be quiet.');
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  { label: 'Evgeny', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Evgeny, who looks at you in disgust, picks up his chess board and finds another seat to play his game.');
    } else {
      scene.text('You sit next to Evgeny, but he\'s so focused on the chess game in front of him that he doesn\'t notice you and ignores your efforts to communicate with him.');
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
        scene.text('You sit next to Artem, but he ignores you and chooses to talk to other people or do his coursework.');
        qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
        scene.text('You sit next to Artem. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Miss Orlov asks you to be quiet.');
      }
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
        scene.text('You sit next to Vanya and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        scene.text('You sit next to Vanya, but he ignores you, instead choosing to lean back and talk with Katja and Vicky.');
        qspCall(s, 'npc_relationship', 'modify', 'A165', 1);
        scene.text('You sit next to Vanya. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before you catch Vicky giving you dagger eyes and you turn away.');
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
        scene.text('You sit next to Lazar and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        scene.text('You sit next to Lazar, but he largely ignores you, only talking to you if it involves mocking you.');
        qspCall(s, 'npc_relationship', 'modify', 'A149', 1);
        scene.text('You sit next to Lazar. He\'s a little surprised that you chose to do so, but seems to enjoy the attention you\'re giving him. You\'re able to strike up a brief conversation with him before Mrs. Sokoloff asks you to be quiet.');
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  { label: 'Vitek', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Vitek, who gives you a perverted smile and leans back in his chair to show you the bulge in his pants. "It\'s all yours, whore. All you have to do is ask," he says with a wink.');
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        qspCall(s, 'npc_relationship', 'modify', 'A9', 1);
        scene.text('You sit next to Vitek and you spend most of the class talking quietly with each other, often getting stern looks from Mrs. Sokoloff when you get a bit too loud. She clears her throat and hushes you a few times before she finally tells you to be quiet or she\'ll send you to the principal\'s office.');
      } else {
        scene.text('You\'re forced to sit next to Vitek and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        qspCall(s, 'npc_relationship', 'modify', 'A9', 1);
        scene.text('You sit next to Vitek. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mrs. Sokoloff asks you to be quiet.');
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
              ]);
            }
            scene.actions([
              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
            ]);
          }
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        }
      }
    }
  }
  scene.build();
}

export const gschool_lessonsev2: LocationDef = {
  name: 'gschool_lessonsev2',
  title: 'As you walk into class, you see some guys have drawn a goofy',
  region: 'other',
  description: ['As you walk into class, you see some guys have drawn a goofy scene on the blackboard, making it look like they\'re characters in a computer game. You share a laugh with them as you sit down; that certainly brightened your mood.'],
  enter: enter,
};
