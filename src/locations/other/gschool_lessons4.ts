import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'math');
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  (s as any).VK = Math.floor(Math.random() * 3) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big26.jpg');
  if (((s as any).VK ?? 0) === 1) {
    (s as any).VKrand = Math.floor(Math.random() * 2) + 1;
    scene.text('You sit in your seat just as Mr. Tsarev stands up to begin his lesson. He casually leans against the desk, then crosses his arms. "Today, we\'ll be learning about problem solving. The most important thing about solving a problem is to know what answer you\'re looking for, especially with word problems. You\'ll need to know the question that you need to answer. Here is an example: If Anna had four bottle caps and Dina had two pebbles, then how many bottle caps do they have in total? Anyone?"');
    if (((s as any).VKrand ?? 0) === 1) {
      scene.text('A few students raise their hands and Mr. Tsarev points to Arkadi.');
      scene.text('"They have six of course, because four plus two equals six," he answers.');
      scene.text('Mr. Tsarev chuckles. "Of course four plus two is six, but is that the number of <i>bottle caps</i> that they have? No. Anna has four bottle caps, but Dina has two <i>pebbles</i>. You need to pay better attention to the actual question."');
      scene.text('Some of the other boys start laughing at Arkadi while some of the girls giggle.');
      scene.text('Mr. Tsarev continues. "Don\'t let the numbers fool you. Understanding the question is the most important part of answering it. Now I\'m going to hand out some sheets with multiple choice questions and all of you will have 10 minutes to answer each one."');
      scene.text('He reaches for some papers and starts handing them out as Arkadi crosses his arms, trying to ignore some of the others laughing at him.');
    } else {
      scene.text('A few students raise their hands and Mr. Tsarev points to Natalia.');
      scene.text('"The answer is four because Anna is the only one with bottle caps," she answers. "Dina only has pebbles, which might as well not be mentioned as it does not pertain to the answer needed."');
      scene.text('Mr. Tsarev tilts his head in surprise at Natalia\'s answer while Christina whispers to one of the other girls. "Wow, she\'s really smart. Is she studying to be a teacher or something?"');
      scene.text('Mr. Tsarev nods his head. "Precisely. The involvement of Dina was only to deceive the one answering the question, which is why it is referred to as a \'trick question\'. Now I\'d like to see who was paying attention and who was dozing off. I\'ll be handing out some sheets with multiple choice questions and all of you will have 10 minutes to answer each one."');
      scene.text('He reaches for some papers on his desk and starts handing them out.');
    }
  } else {
    (s as any).VK = Math.floor(Math.random() * 3) + 1;
    (s as any).VKrand = Math.floor(Math.random() * 2) + 1;
    scene.text('You take a few seconds to sit down and get yourself settled in when Mr. Tsarev stands up to begin today\'s lesson.');
    scene.text('"Math determines many important aspects of daily life. For example, you need math to determine the current date and time. If today is the 17th, then tomorrow will be the 18th. How do I know that? Seventeen plus one equals eighteen. Time is no different and some countries have different ways of displaying time. For example, some display time in 12 hour increments, showing 17:00 as 5 PM."');
    if (((s as any).VKrand ?? 0) === 1  &&  ((s as any).npc_grupTipe ?? 0)?.['A189'] === 4) {
      if (((s as any).NikoPayback ?? 0) > 0) {
        scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
      } else {
        scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
      }
      scene.text('Mr. Tsarev pauses and turns to the door as Niko casually strolls in.');
      scene.text('"Late again I see," Mr. Tsarev says as he crosses his arms. "What\'s the reason for it this time?"');
      scene.text('Niko takes a second to collect his thoughts.');
      if (((s as any).VK ?? 0) === 1) {
        scene.text('"I was on my way to class when this crazy old lady began shouting at me, so I asked her what was wrong. She told me that I stepped on her dress when I was nowhere near her. She created a big scene and I had to deal with that, which is why I\'m late."');
        scene.text('Mr. Tsarev sighs and shakes his head. "So an old woman screamed at you and created a big scene because you stepped on her dress, which you didn\'t actually step on? Do I have that right?" Niko shrugs and continues walking toward his seat. "Fine, but try not to anger any more old ladies, will you?"');
        scene.text('Niko uses his thumb to point to Christina. "I can\'t control when Christina gets angry at me," he jokingly replies and Christina recoils, caught off guard and offended by his comment. She lifts her fist and punches Niko several times in the arm before Mr. Tsarev breaks it up with a stern voice.');
        scene.text('Niko casually sits down while rubbing his arm and opens his mouth to speak, only to get cut off by Mr. Tsarev. "Not another word! Alright, let\'s get back to the lesson, unless someone would like to visit the principal\'s office instead?" He looks at Niko, who shakes his head, and the class remains silent as Mr. Tsarev begins handing out worksheets. He\'s obviously not in a good mood.');
      } else {
        scene.text('"I was on my way here when some braindead bimbo spilled her coffee on my uniform, so I had to head back home to clean up. You wouldn\'t want me to arrive covered in coffee, right?"');
        scene.text('Mr. Tsarev sighs. "You couldn\'t run home and change your shirt <i>before</i> the start of class?"');
        scene.text('"Well I had to clean the coffee from my hair as well as restyle it and that takes time," Niko replies.');
        scene.text('"Why even bother washing the coffee off? You always look like a greasy punk anyway," Christina chimes in.');
        scene.text('Niko leans toward Christina. "You don\'t have to play hard to get. If you want my attention, then you need only ask."');
        scene.text('"I should tell you that I\'ve been looking for a handsome, strong and sexy man in my life…" she whispers in a seductive tone.');
        scene.text('"Oh yeah?" Niko whispers in reply.');
        scene.text('"That\'s why I have no interest in dating losers like you!" she laughs in his face and he clenches his fist before walking to his seat.');
        scene.text('"Are you two love birds done? Can we begin the lesson now?" Mr. Tsarev interrupts and Christina continues laughing as Niko remains silent, obviously upset. Mr. Tsarev begins handing out some worksheets to the class.');
        scene.text('"Try to leave earlier so that you can arrive here on time. It\'s not hard," he quips as he hands Niko a sheet.');
        scene.text('"There must have been a power outage in my house this morning because my alarm wasn\'t working."');
        scene.text('Mr. Tsarev looks at him with an intrigued look. "Strange, I haven\'t heard about any power outages this morning."');
        scene.text('Niko shrugs as he responds. "It might be a faulty wire in my house or something."');
        scene.text('Mr. Tsarev crosses his arms. "Why do all these things seem to happen to you before my class?"');
        scene.text('Niko shrugs again. "I guess I\'m just unlucky."');
        scene.text('Igor scoffs. "Don\'t you ever get tired of lying? You\'re really bad at it."');
        scene.text('Niko turns to Igor and quickly approaches him before grabbing onto his collar. "You have something to say to me, faggot? I\'ll knock your teeth out!"');
        scene.text('Igor leans back with a frightful look on his face. "No, no I didn\'t… I\'m sorry, I\'m sorry!"');
        scene.text('Mr. Tsarev slams a textbook on his desk. "Nikolai! Knock it off and either get in your seat or go to the principal\'s office!"');
        scene.text('Niko slightly lunges forward to trick Igor into thinking that he\'ll punch him, which ends up working. Igor pulls back and covers his face with his arms as Niko chuckles before walking to his seat.');
        scene.text('"Enough interruptions!" Mr. Tsarev shouts. "Let us begin today\'s lesson. I hope you\'ve all been studying because today\'s lesson will have many tough questions for you to answer," he says as he begins handing out some worksheets to the class.');
      }
    } else {
      scene.text('Dimka scoffs. "Why would they do that? That sounds stupid to me."');
      scene.text('Mr. Tsarev chuckles. "Ahh Dmitri, it was nice of you to raise your hand and volunteer to answer my next question." Dimka facepalms as Mr. Tsarev continues. "If the current time is 4am and you have a dentist appointment at 2pm, then how long do you have to wait until your dentist appointment begins? Remember that you need to calculate the numbers while keeping the 12 hour timezones in mind."');
      scene.text('"If it is really 4am, then I would probably go to sleep and figure it out in the morning."');
      scene.text('Many of the students, along with Mr. Tsarev, start laughing. "That wasn\'t exactly the answer I was looking for, but I can forgive it. The answer for that question was ten hours." He grabs a piece of chalk and starts writing on the chalkboard; "A simple way of figuring it out is by looking at the arrival time. The time for arriving is 2pm, which means that it is two hours after twelve. Those added together equals fourteen. Lastly, we need to subtract the current time from this to eliminate the time already passed. Fourteen minus four equals ten, giving us our answer."');
      scene.text('"Yeah that\'s… Real simple," Dimka sarcastically replies and Igor laughs.');
      scene.text('Mr. Tsarev responds with a smirk on his face. "With practice it will be. Speaking of which, I\'ll begin handing out some simple problems for you to solve."');
      scene.text('He reaches for some papers on his desk and starts handing them out.');
    }
    if (((s as any).VK ?? 0) === 3) {
      (s as any).VKrand = Math.floor(Math.random() * 3) + 1;
      scene.text('You walk into the classroom and sit at your desk just as Mr. Tsarev gets up to begin today\'s lesson. "Alright, I would like to know how much you all know of numbers. Can anyone tell me what the smallest number in existence is?"');
      if (((s as any).VKrand ?? 0) === 1) {
        scene.text('Christina raises her hand and Mr. Tsarev points to her. "Miss Zvereva."');
        scene.text('"Isn\'t the smallest number the size of Igor\'s dick?" she answers and Igor recoils in shock.');
        scene.text('Mr. Tsarev has a stern look on his face. "No, that is not the answer and I would appreciate it if you would take this question seriously."');
      } else {
        scene.text('Natasha raises her hand. "Isn\'t that a trick question? Numbers have no ending point, so finding the lowest number shouldn\'t be possible."');
        scene.text('Mr. Tsarev nods his head approvingly. "That is correct. Numbers are without end, so finding a lowest point is impossible."');
        scene.text('No one raises their hand, so Mr. Tsarev points out Igor, who looks around the room in confusion. "Uhh… It\'s negative infinity, right?" he shyly answers.');
        scene.text('Mr. Tsarev shakes his head. "Is infinity a number?"');
        scene.text('"Um, I guess so… Right?" Igor asks sheepishly.');
        scene.text('"No, it is not. Infinity is a never ending stream sequence of numbers, not a singular number," Mr. Tsarev replies.');
      }
      scene.text('"The smallest number in existence is… Nothing. There is no smallest number. Numbers can go beyond negative in an infinite cycle and infinity has no bottom point, so finding the smallest number is an impossibility during an infinite cycle. I\'ll be handing out some worksheets with negative and positive number problems. Try to answer as many as possible in the next 15 minutes."');
      scene.text('He then starts handing out worksheets to the class.');
    }
    if (((s as any).dimaRevenge ?? 0) === 1) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'dimaRevenge', 1
  } },
      ]);
    } else {
      qspCall(s, 'willpower', 'chore', 'self', ((((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : (((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')))));
      if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
        (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
      } else {
        (s as any).will_cost = 0;
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Focus on your school work [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Focus on your school work', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'math', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
    (s as any).trait_vars['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/attention.jpg');
    scene.text('You carefully follow today\'s lesson, trying to take in as much as possible.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'math', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1, 'no_bonus');
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You take a second to ask a question about a part of the lesson that you don\'t fully understand.');
    scene.text('Mr. Tsarev nods approvingly. "Sure thing, we can go over the solution again and I\'ll show you the many ways that you can find the solution to these problems."');
    scene.text('He happily spends some time explaining the topic in greater detail and answers any questions you might have, teaching you some new ways of solving many problems in the process.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessonsev2', 'math'] },
    ]);
  } },
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessonsev2', 'math'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Daydream', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 20) + 1;
    if (((s as any).VK ?? 0) > 18  &&  ((s as any).VKHappyHome ?? 0) < 2  &&  (!((s as any).VKPuppetDream ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['NikoDreams', 'Puppeteer'] }]);
    } else {
      (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 3) + 1);
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/class/rest.jpg');
      scene.text('You can feel the day dragging on slowly, so you rest your head on the desk, trying your best to focus on anything but today\'s lesson. The light occasionally creeps in between your arms, so you keep re-adjusting until it stops, causing you to feel at peace as you slumber through the lesson.');
      if (((s as any).VK ?? 0) > 6) {
        (s as any).VKrand = Math.floor(Math.random() * 3) + 1;
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 3) + 0);
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
        scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you continuously doze off. After what feels like a few seconds, you suddenly hear Mr. Tsarev call your name and find that everyone\'s eyes are on you.');
        scene.text('"I asked you for the answer to my question," Mr. Tsarev tells you.');
        if ((((s as any).VKrand ?? 0) === 1  &&  ((s as any).npc_rel ?? 0)?.['A2'] >= 80)  ||  (((s as any).VKrand ?? 0) === 1  &&  ((s as any).grupTipe ?? 0) === 3)) {
          scene.text('You nervously look around the room, not knowing what the question was when you faintly hear "Psst!"');
          scene.text('You look at Artem and see him holding up a paper scrap behind his seat which has the answer written out. You confidently look toward Mr. Tsarev before telling him the correct answer, resulting in a surprised look on his face. "Hmm. Very good, but do try to keep your head up during class, okay?"');
          scene.text('You give him a nod before he continues his lesson.');
        } else {
          scene.text('You nervously look around the room, not knowing what the question was when Natalia speaks up. "Why was the problem structured like that? I thought that finding X came after finding Y?"');
          scene.text('Mr. Tsarev turns to Natalia. "There is no order in which one we find first. I just used the one earlier in the equation. You can always choose the one that you solve as long as you end up solving both before reaching the second half of the problem."');
          scene.text('Natalia nods with a smile as Mr. Tsarev turns around and continues his lesson, completely forgetting about you. Natalia turns to you with a warm smile then turns back toward Mr. Tsarev for the rest of the class.');
          if (((s as any).VKrand ?? 0) === 3  &&  ((s as any).NikoLuv ?? 0) >= 2  &&  ((s as any).npc_grupTipe ?? 0)?.['A189'] === 4) {
            scene.img('images/locations/pavlovsk/school/classroom/crash.mp4');
            scene.text('You nervously look around the room, not knowing what the question was when you suddenly hear Evgeny let out a yelp as his chair is pulled out from under him, causing him to fall to the ground.');
            scene.text('Mr. Tsarev recoils in shock. "NIKOLAI! WHAT HAS GOTTEN INTO YOU!?" he asks as Niko and most of the class laugh loudly. "GO TO THE PRINCIPAL\'S OFFICE NOW!"');
            scene.text('Niko packs his stuff in his bag and heads toward the door, giving you a wink as he passes by.');
          } else {
            scene.text('You nervously look around the room, not knowing what the question was. You pretend to clear your throat while you quickly study the equation on the board, then quickly solve the problem in your head before answering the question correctly.');
            scene.text('Mr. Tsarev gives you a satisfied nod. "Very good, but try and keep your head up during class, if you don\'t mind."');
            qspCall(s, 'stat', '');
            scene.img('images/characters/shared/headshots_main/big26.jpg');
            scene.text('You\'re feeling far too tired to pay attention in class today. You don\'t even know what the lesson is about as you continuously doze off. After what feels like a few minutes, you suddenly hear Mr. Tsarev call your name and find that everyone\'s eyes are on you. You realize that you were just asked a question about the topic.');
            scene.text('You take your best guess at what Mr. Tsarev was asking and some of your classmates snicker at your obviously wrong answer.');
            scene.text('Mr. Tsarev smiles. "Sleeping in class, huh? You\'re never going to get anywhere in life that way, unless you end up working as a politician." He then chuckles to himself. "Just try to stay awake this time."');
            scene.text('Before continuing his lesson, he asks for someone else to inform you of the correct answer. You still feel embarrassed, but the sudden adrenaline surge helps you to stay awake for the rest of the lesson.');
            scene.actions([
              { label: 'Wait for the end of the lesson', goto: ['gschool_lessonsev2', 'math'] },
            ]);
          }
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/school/classroom/caughtsleeping.jpg');
          // TODO-QSP: dynamic text: Today's lesson doesn't particularly interest you and you find yourself drifting ...
          scene.text(`Today's lesson doesn't particularly interest you and you find yourself drifting off constantly. After a while, you notice that Mr. Tsarev has paused his lesson and is giving you a stern look. "Miss ${((s as any).pcs_lastname ?? 0)}, maybe you'd like to explain what I just went over?"`);
          scene.text('You give him a puzzled look while trying to figure out what to say. You feel embarrassed having the class stare at you.');
          qspCall(s, 'willpower', 'misc', 'self', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Give him attitude [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Give him attitude', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (2);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/kickedout.jpg');
    scene.text('"Of course. Please continue your super-fascinating lesson. Just keep it a bit upbeat please. If you talk any slower, I might fall asleep!" you answer boldly.');
    // TODO-QSP: dynamic text: The whole class bursts into laughter and Mr. Tsarev has a rough time getting eve...
    scene.text(`The whole class bursts into laughter and Mr. Tsarev has a rough time getting everyone to quiet down. "Miss ${((s as any).pcs_lastname ?? 0)}, do you find this kind of behavior amusing? Or are you just seeking attention? Try to answer this question for yourself while you head to the principal's office." He then points to the door.`);
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Don\'t leave the classroom [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t leave the classroom', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/bitchflip.jpg');
    scene.text('"What good would that do? I\'m not interrupting your class, so just leave me alone. I\'m having some… girl problems," you answer brashly, not having any intentions of getting up.');
    scene.text('Mr. Tsarev sighs and shakes his head. "If you\'re having some personal issues, then I won\'t punish you for that, but do try to pay attention if you can. I\'m only trying to prepare you all for the future."');
    scene.text('You remain silent as Mr. Tsarev turns around and continues his lesson. You obviously have no interest in learning anything today. You hear one of the boys behind you muttering something about your period and turn around to flip him off.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to the principal\'s office', handler: (st: GameState) => {
    (st as any).demerit = ((st as any).demerit ?? 0) + (10 + ((st as any).school_bunk ?? 0) * 5);
  }, goto: ['gschool_office', 'principal'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessonsev2', 'math'] },
            { label: 'Reluctantly pay attention', handler: (st: GameState) => {
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'math', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
    scene.text('Mr. Tsarev sighs. "You don\'t know do you? Then at least try to pay attention. Many things that we need in life require some effort from us all. It\'s not always fun, but some of the things we learn make life easier in the future, leading to even more pleasant times."');
    scene.text('Not knowing what to say, you simply nod as he turns around and continues his lesson. You sit through the rest of the lesson in silence while your mind drifts elsewhere. You can\'t focus on the lesson at all.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessonsev2', 'math'] },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Wake up', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/class/leave.jpg');
    scene.text('You awaken to the bell ringing, signaling the end of the class. You immediately see your other classmates getting up to leave the class as you collect your things to join them.');
    scene.actions([
      { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        { label: 'Play with your phone', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 5) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('The day seems to be dragging in and you find yourself constantly staring at the clock, waiting for the class to finally be over. You decide to play on your phone to pass the time.');
    if (((s as any).VK ?? 0) === 1  &&  (((s as any).christinaQW ?? 0)?.['fight'] === -1  ||  ((s as any).christinaQW ?? 0)?.['subpath'] >= 2)  &&  ((s as any).pcs_bmi ?? 0) >= 25) {
      qspCall(s, 'npc_relationship', 'modify', 'A18', 'loathe');
      scene.text('As you\'re browsing the web, you receive a text message from Christina reading; "Hey there piggy, are you looking up discounts on Peremech so that you can shove them down your throat? Why don\'t you lose some weight before the teachers decide to add bovine etiquette to the curriculum because they may feel it necessary to teach the students how to talk to a cow like you?"');
      scene.text('You can feel your face flushing in embarrassment while reading Christina\'s hurtful comments. You quickly turn off your phone and try not to make eye contact with her for the rest of the lesson.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      scene.text('You\'re browsing the web when you suddenly receive a text message from Natalia depicting your names inside a heart together. You turn to Natalia and see a big smile on her face as she gazes into your eyes. You return the smile before exchanging some flirty messages with her. Natalia giggles before turning back to Mr. Tsarev while occasionally turning back toward you and smiling.');
      if (((s as any).VK ?? 0) === 3  &&  ((s as any).NikoVolkovQW ?? 0) >= 5  &&  ((s as any).npc_grupTipe ?? 0)?.['A189'] === 4) {
        scene.text('While you\'re browsing the internet, you receive a text message from Niko reading; "Who is this beautiful creature I see? This precious gem sitting in front of me? I gaze at her with eyes so amazed, will she not turn around and return my gaze?"');
        scene.text('You giggle before turning around to face Niko, who has a loving smile on his face. "You\'re so sweet," you type back and he gives you a wink before laying back in his seat.');
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        scene.text('As you continue browsing the web, you suddenly receive a text message with an image attachment from Sonia reading; "Sooo pretty. What do you think?" The image is of a high quality pair of high heels. They look very expensive.');
        scene.text('"Those heels look very… you," you text back.');
        scene.text('"I was thinking of wearing those with my blue skirt. Do you think that they will look good together?"');
        scene.text('"They would look great together. The colors would compliment each other very well," you reply.');
        // TODO-QSP: dynamic text: "Thanks, <<$pcs_nickname>>. I was worried that they were a bit too much on the e...
        scene.text(`"Thanks, ${((s as any).pcs_nickname ?? 0)}. I was worried that they were a bit too much on the eyes."`);
        scene.text('You give Sonia a smile before she turns back towards the teacher while continuing to browse the internet.');
        scene.img('images/characters/shared/headshots_main/big26.jpg');
        scene.text('As you\'re browsing the web, you notice Mr. Tsarev giving you a stern look. He seems to have noticed that you\'re not paying attention to his lesson.');
        qspCall(s, 'willpower', 'misc', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Keep using your phone [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Keep using your phone', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/caughtonphone.jpg');
    scene.text('You decide to try your luck and continue using your phone. Mr. Tsarev pauses the lesson and begins walking towards your desk.');
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take photos under your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take photos under your skirt', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'arousal', 'flash', (-5));
      scene.img('images/locations/pavlovsk/school/classroom/upskirtselfie.jpg');
    } else {
      qspCall(s, 'arousal', 'flash', (-5));
      scene.img('images/locations/pavlovsk/school/classroom/literature/nopanties_upskirt.jpg');
    }
    scene.text('You decide to have some fun and quickly slide the phone between your legs and snap some photos under your skirt.');
    scene.text('When Mr. Tsarev arrives at your desk, he frowns. "What\'s so important that you need to use your phone during my lesson? If nothing, then I\'ll hold onto it until the end of class." He then extends his hand out.');
    scene.text('"Would you like to see?" you reply in a seductive tone.');
    scene.text('You then hand him your phone with the picture you took still on the screen. Mr. Tsarev looks at what\'s on the screen and he stares at it for a few seconds before turning the screen off and returning to the front of the class.');
    scene.text('After he reaches the front of the classroom, he turns to you. "Well… uhhh, I\'ll be holding onto your phone for now. You can have it back after class."');
    scene.text('He puts your phone in his pocket before returning to teaching his lesson. You occasionally see him turn the phone on and peek at the screen when he believes that no one is watching.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    if (((s as any).braworntype ?? 0) !== 'none') {
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Hide the phone in your bra [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Hide the phone in your bra', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/nophone.jpg');
    scene.text('You deftly shove the phone in your bra and smile fiendishly as you see the indecisiveness on his face. Pretending that it\'s a perfectly normal place to store your phone, you tease him in an innocent tone. "Is there a problem, Mr. Tsarev? Do you want my phone? You can take it if you want." You slowly thrust your chest forward, the outline of your phone visible through the fabric.');
    scene.text('Mr. Tsarev seems flabbergasted by your actions. He remains silent for a few seconds before shaking his head, turning around and walking back to the front of the class. It seems that he realized that it\'s not worth the effort to take your phone away from you without causing all sorts of awkward situations. You pull your phone back out of your bra and continue browsing the web as the lesson goes on.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Hand over the phone', handler: (st: GameState) => {
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/takephone.jpg');
    scene.text('He extends his hand. "What\'s so important on there that you need to disrupt my lesson? Hand it over."');
    scene.text('You realize that he isn\'t messing around and decide that it\'s not worth it, so you silently hand your phone to him.');
    // TODO-QSP: dynamic text: "I'm holding onto this for now, Miss <<$pcs_lastname>>. You can have it back aft...
    scene.text(`"I'm holding onto this for now, Miss ${((s as any).pcs_lastname ?? 0)}. You can have it back after class," he says as he walks back to the front of the class.`);
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
          { label: 'Put your phone away', handler: (st: GameState) => {
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/caughtonphone.jpg');
    scene.text('You turn off your phone and put it away. Mr. Tsarev give you an approving nod before continuing with his lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'math');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

export const gschool_lessons4: LocationDef = {
  name: 'gschool_lessons4',
  title: 'You sit in your seat just as Mr. Tsarev stands up to begin h',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'locker',
  description: ['You sit in your seat just as Mr. Tsarev stands up to begin his lesson. He casually leans against the desk, then crosses his arms. "Today, we\'ll be learning about problem solving. The most important thing about solving a problem is to know what answer you\'re looking for, especially with word problems. You\'ll need to know the question that you need to answer. Here is an example: If Anna had four bottle caps and Dina had two pebbles, then how many bottle caps do they have in total? Anyone?"'],
  enter: enter,
};
