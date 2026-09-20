import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMath(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'math');
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  (s as any).VK = (Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big26.jpg');
  if (((s as any).VK ?? 0) === 1) {
    (s as any).VKrand = (Math.floor(Math.random() * 2) + 1);
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
    if (((s as any).VK ?? 0) === 2) {
      (s as any).VK = (Math.floor(Math.random() * 3) + 1);
      (s as any).VKrand = (Math.floor(Math.random() * 2) + 1);
      scene.text('You take a few seconds to sit down and get yourself settled in when Mr. Tsarev stands up to begin today\'s lesson.');
      scene.text('"Math determines many important aspects of daily life. For example, you need math to determine the current date and time. If today is the 17th, then tomorrow will be the 18th. How do I know that? Seventeen plus one equals eighteen. Time is no different and some countries have different ways of displaying time. For example, some display time in 12 hour increments, showing 17:00 as 5 PM."');
      if (((s as any).VKrand ?? 0) === 1  &&  ((s as any).npc_grupTipe ?? 0)?.['A189'] === 4) {
        if (((s as any).NikoPayback ?? 0) > 0) {
          scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week || '')}.jpg`);
        } else {
          scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
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
          if (((s as any).VK ?? 0) === 2) {
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
          } else {
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
    } else {
      if (((s as any).VK ?? 0) === 3) {
        (s as any).VKrand = (Math.floor(Math.random() * 3) + 1);
        scene.text('You walk into the classroom and sit at your desk just as Mr. Tsarev gets up to begin today\'s lesson. "Alright, I would like to know how much you all know of numbers. Can anyone tell me what the smallest number in existence is?"');
        if (((s as any).VKrand ?? 0) === 1) {
          scene.text('Christina raises her hand and Mr. Tsarev points to her. "Miss Zvereva."');
          scene.text('"Isn\'t the smallest number the size of Igor\'s dick?" she answers and Igor recoils in shock.');
          scene.text('Mr. Tsarev has a stern look on his face. "No, that is not the answer and I would appreciate it if you would take this question seriously."');
        } else {
          if (((s as any).VKrand ?? 0) === 2) {
            scene.text('Natasha raises her hand. "Isn\'t that a trick question? Numbers have no ending point, so finding the lowest number shouldn\'t be possible."');
            scene.text('Mr. Tsarev nods his head approvingly. "That is correct. Numbers are without end, so finding a lowest point is impossible."');
          } else {
            scene.text('No one raises their hand, so Mr. Tsarev points out Igor, who looks around the room in confusion. "Uhh… It\'s negative infinity, right?" he shyly answers.');
            scene.text('Mr. Tsarev shakes his head. "Is infinity a number?"');
            scene.text('"Um, I guess so… Right?" Igor asks sheepishly.');
            scene.text('"No, it is not. Infinity is a never ending stream sequence of numbers, not a singular number," Mr. Tsarev replies.');
          }
        }
        scene.text('"The smallest number in existence is… Nothing. There is no smallest number. Numbers can go beyond negative in an infinite cycle and infinity has no bottom point, so finding the smallest number is an impossibility during an infinite cycle. I\'ll be handing out some worksheets with negative and positive number problems. Try to answer as many as possible in the next 15 minutes."');
        scene.text('He then starts handing out worksheets to the class.');
      }
    }
  }
  if (((s as any).dimaRevenge ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', goto: ['dimaRevenge', '1'] },
    ]);
  } else {
    qspCall(s, 'willpower', 'chore', 'self', ((((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : (((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')))));
    if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
      (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
    } else {
      if (((s as any).trait_vars ?? 0)?.['academic'] >= 3) {
        (s as any).will_cost = 0;
      }
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Focus on your school work', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Focus on your school work', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'math', ((st as any).pcs_intel ?? 0));
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
    ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic_lessons'] = ((st as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/attention.jpg');
    scene.text('You carefully follow today\'s lesson, trying to take in as much as possible.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'math', ((st as any).pcs_intel ?? 0));
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 1), 'no_bonus');
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
    (st as any).VK = (Math.floor(Math.random() * 20) + 1);
    if (((st as any).VK ?? 0) > 18  &&  ((st as any).VKHappyHome ?? 0) < 2  &&  (!((st as any).VKPuppetDream ?? 0))) {
      qspGoto(st, 'NikoDreams', 'Puppeteer');
    } else {
      if (((st as any).VK ?? 0) > 12) {
        (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 3) + 1));
        qspCall(st, 'stat', '');
        scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/class/rest.jpg');
        scene.text('You can feel the day dragging on slowly, so you rest your head on the desk, trying your best to focus on anything but today\'s lesson. The light occasionally creeps in between your arms, so you keep re-adjusting until it stops, causing you to feel at peace as you slumber through the lesson.');
        scene.actions([
          { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/class/leave.jpg');
    scene.text('You awaken to the bell ringing, signaling the end of the class. You immediately see your other classmates getting up to leave the class as you collect your things to join them.');
    scene.actions([
      { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      } else {
        if (((st as any).VK ?? 0) > 6) {
          (st as any).VKrand = (Math.floor(Math.random() * 3) + 1);
          (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 3) + 0));
          qspCall(st, 'stat', '');
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you continuously doze off. After what feels like a few seconds, you suddenly hear Mr. Tsarev call your name and find that everyone\'s eyes are on you.');
          scene.text('"I asked you for the answer to my question," Mr. Tsarev tells you.');
          if ((((st as any).VKrand ?? 0) === 1  &&  ((st as any).npc_rel ?? 0)?.['A2'] >= 80)  ||  (((st as any).VKrand ?? 0) === 1  &&  ((st as any).grupTipe ?? 0) === 3)) {
            scene.text('You nervously look around the room, not knowing what the question was when you faintly hear "Psst!"');
            scene.text('You look at Artem and see him holding up a paper scrap behind his seat which has the answer written out. You confidently look toward Mr. Tsarev before telling him the correct answer, resulting in a surprised look on his face. "Hmm. Very good, but do try to keep your head up during class, okay?"');
            scene.text('You give him a nod before he continues his lesson.');
          } else {
            if ((((st as any).VKrand ?? 0) === 2  &&  ((st as any).npc_rel ?? 0)?.['A12'] >= 80)  ||  (((st as any).VKrand ?? 0) === 2  &&  ((st as any).grupTipe ?? 0) === 3)) {
              scene.text('You nervously look around the room, not knowing what the question was when Natalia speaks up. "Why was the problem structured like that? I thought that finding X came after finding Y?"');
              scene.text('Mr. Tsarev turns to Natalia. "There is no order in which one we find first. I just used the one earlier in the equation. You can always choose the one that you solve as long as you end up solving both before reaching the second half of the problem."');
              scene.text('Natalia nods with a smile as Mr. Tsarev turns around and continues his lesson, completely forgetting about you. Natalia turns to you with a warm smile then turns back toward Mr. Tsarev for the rest of the class.');
            } else {
              if (((st as any).VKrand ?? 0) === 3  &&  ((st as any).NikoLuv ?? 0) >= 2  &&  ((st as any).npc_grupTipe ?? 0)?.['A189'] === 4) {
                scene.img('images/locations/pavlovsk/school/classroom/crash.mp4');
                scene.text('You nervously look around the room, not knowing what the question was when you suddenly hear Evgeny let out a yelp as his chair is pulled out from under him, causing him to fall to the ground.');
                scene.text('Mr. Tsarev recoils in shock. "NIKOLAI! WHAT HAS GOTTEN INTO YOU!?" he asks as Niko and most of the class laugh loudly. "GO TO THE PRINCIPAL\'S OFFICE NOW!"');
                scene.text('Niko packs his stuff in his bag and heads toward the door, giving you a wink as he passes by.');
              } else {
                if (((st as any).class ?? 0)?.['school_math_grade'] >= 80) {
                  scene.text('You nervously look around the room, not knowing what the question was. You pretend to clear your throat while you quickly study the equation on the board, then quickly solve the problem in your head before answering the question correctly.');
                  scene.text('Mr. Tsarev gives you a satisfied nod. "Very good, but try and keep your head up during class, if you don\'t mind."');
                } else {
                  qspCall(st, 'stat', '');
                  scene.img('images/characters/shared/headshots_main/big26.jpg');
                  scene.text('You\'re feeling far too tired to pay attention in class today. You don\'t even know what the lesson is about as you continuously doze off. After what feels like a few minutes, you suddenly hear Mr. Tsarev call your name and find that everyone\'s eyes are on you. You realize that you were just asked a question about the topic.');
                  scene.text('You take your best guess at what Mr. Tsarev was asking and some of your classmates snicker at your obviously wrong answer.');
                  scene.text('Mr. Tsarev smiles. "Sleeping in class, huh? You\'re never going to get anywhere in life that way, unless you end up working as a politician." He then chuckles to himself. "Just try to stay awake this time."');
                  scene.text('Before continuing his lesson, he asks for someone else to inform you of the correct answer. You still feel embarrassed, but the sudden adrenaline surge helps you to stay awake for the rest of the lesson.');
                  scene.actions([
                    { label: 'Wait for the end of the lesson', goto: ['gschool_lessonsev2', 'math'] },
                  ]);
                }
              }
            }
          }
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessonsev2', 'math'] },
          ]);
        } else {
          qspCall(st, 'stat', '');
          scene.img('images/locations/pavlovsk/school/classroom/caughtsleeping.jpg');
          // TODO-QSP: dynamic text: Today''s lesson doesn''t particularly interest you and you find yourself driftin...
          scene.text(`Today's lesson doesn't particularly interest you and you find yourself drifting off constantly. After a while, you notice that Mr. Tsarev has paused his lesson and is giving you a stern look. "Miss ${((st as any).pcs_lastname || '')}, maybe you'd like to explain what I just went over?"`);
          scene.text('You give him a puzzled look while trying to figure out what to say. You feel embarrassed having the class stare at you.');
          qspCall(st, 'willpower', 'misc', 'self', 'medium');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Give him attitude', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Give him attitude', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).demerit = ((st as any).demerit ?? 0) + (5);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (2);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/kickedout.jpg');
    scene.text('"Of course. Please continue your super-fascinating lesson. Just keep it a bit upbeat please. If you talk any slower, I might fall asleep!" you answer boldly.');
    // TODO-QSP: dynamic text: The whole class bursts into laughter and Mr. Tsarev has a rough time getting eve...
    scene.text(`The whole class bursts into laughter and Mr. Tsarev has a rough time getting everyone to quiet down. "Miss ${((st as any).pcs_lastname || '')}, do you find this kind of behavior amusing? Or are you just seeking attention? Try to answer this question for yourself while you head to the principal's office." He then points to the door.`);
    qspCall(st, 'willpower', 'misc', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Don\'t leave the classroom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t leave the classroom', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    (st as any).demerit = ((st as any).demerit ?? 0) + (5);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (2);
    qspCall(st, 'stat', '');
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
            { label: 'Reluctantly pay attention', handler: (st: GameState) => {
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'math', ((st as any).pcs_intel ?? 0));
    qspCall(st, 'stat', '');
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
    }
  } },
      { label: 'Play with your phone', handler: (st: GameState) => {
    (st as any).VK = (Math.floor(Math.random() * 5) + 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('The day seems to be dragging in and you find yourself constantly staring at the clock, waiting for the class to finally be over. You decide to play on your phone to pass the time.');
    if (((st as any).VK ?? 0) === 1  &&  (((st as any).christinaQW ?? 0)?.['fight'] === -1  ||  ((st as any).christinaQW ?? 0)?.['subpath'] >= 2)  &&  ((st as any).pcs_bmi ?? 0) >= 25) {
      qspCall(st, 'npc_relationship', 'modify', 'A18', 'loathe');
      scene.text('As you\'re browsing the web, you receive a text message from Christina reading; "Hey there piggy, are you looking up discounts on Peremech so that you can shove them down your throat? Why don\'t you lose some weight before the teachers decide to add bovine etiquette to the curriculum because they may feel it necessary to teach the students how to talk to a cow like you?"');
      scene.text('You can feel your face flushing in embarrassment while reading Christina\'s hurtful comments. You quickly turn off your phone and try not to make eye contact with her for the rest of the lesson.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      if (((st as any).VK ?? 0) === 2  &&  ((st as any).NataliaPavlovaQW ?? 0) >= 10) {
        scene.text('You\'re browsing the web when you suddenly receive a text message from Natalia depicting your names inside a heart together. You turn to Natalia and see a big smile on her face as she gazes into your eyes. You return the smile before exchanging some flirty messages with her. Natalia giggles before turning back to Mr. Tsarev while occasionally turning back toward you and smiling.');
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        if (((st as any).VK ?? 0) === 3  &&  ((st as any).NikoVolkovQW ?? 0) >= 5  &&  ((st as any).npc_grupTipe ?? 0)?.['A189'] === 4) {
          scene.text('While you\'re browsing the internet, you receive a text message from Niko reading; "Who is this beautiful creature I see? This precious gem sitting in front of me? I gaze at her with eyes so amazed, will she not turn around and return my gaze?"');
          scene.text('You giggle before turning around to face Niko, who has a loving smile on his face. "You\'re so sweet," you type back and he gives you a wink before laying back in his seat.');
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          if (((st as any).VK ?? 0) === 4  &&  ((st as any).npc_rel ?? 0)?.['A25'] >= 80) {
            scene.text('As you continue browsing the web, you suddenly receive a text message with an image attachment from Sonia reading; "Sooo pretty. What do you think?" The image is of a high quality pair of high heels. They look very expensive.');
            scene.text('"Those heels look very… you," you text back.');
            scene.text('"I was thinking of wearing those with my blue skirt. Do you think that they will look good together?"');
            scene.text('"They would look great together. The colors would compliment each other very well," you reply.');
            // TODO-QSP: dynamic text: "Thanks, <<$pcs_nickname>>. I was worried that they were a bit too much on the e...
            scene.text(`"Thanks, ${((st as any).pcs_nickname || '')}. I was worried that they were a bit too much on the eyes."`);
            scene.text('You give Sonia a smile before she turns back towards the teacher while continuing to browse the internet.');
            scene.actions([
              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
            ]);
          } else {
            scene.img('images/characters/shared/headshots_main/big26.jpg');
            scene.text('As you\'re browsing the web, you notice Mr. Tsarev giving you a stern look. He seems to have noticed that you\'re not paying attention to his lesson.');
            qspCall(st, 'willpower', 'misc', 'self', 'medium');
            if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Keep using your phone', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Keep using your phone', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    (st as any).demerit = ((st as any).demerit ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/caughtonphone.jpg');
    scene.text('You decide to try your luck and continue using your phone. Mr. Tsarev pauses the lesson and begins walking towards your desk.');
    qspCall(st, 'willpower', 'exhib', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take photos under your skirt', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take photos under your skirt', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'arousal', 'flash', (-5));
      scene.img('images/locations/pavlovsk/school/classroom/upskirtselfie.jpg');
    } else {
      qspCall(st, 'arousal', 'flash', (-5));
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
    if (((st as any).braworntype ?? 0) !== 'none') {
      qspCall(st, 'willpower', 'misc', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Hide the phone in your bra', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Hide the phone in your bra', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).demerit = ((st as any).demerit ?? 0) + (5);
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
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/takephone.jpg');
    scene.text('He extends his hand. "What\'s so important on there that you need to disrupt my lesson? Hand it over."');
    scene.text('You realize that he isn\'t messing around and decide that it\'s not worth it, so you silently hand your phone to him.');
    // TODO-QSP: dynamic text: "I''m holding onto this for now, Miss <<$pcs_lastname>>. You can have it back af...
    scene.text(`"I'm holding onto this for now, Miss ${((st as any).pcs_lastname || '')}. You can have it back after class," he says as he walks back to the front of the class.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Put your phone away', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    qspCall(st, 'stat', '');
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
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMathLate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/classroom/late/late.jpg');
  scene.text('You walk down the completely empty halls of the school, passing by several classes already underway as you make your way to math class. You finally arrive at the door to your class and can hear Mr. Tsarev already starting today\'s lesson inside.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Head into class', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/late/latem1.jpg');
    scene.text('When you open the door and walk in, Mr. Tsarev stops talking and everyone turns their eyes towards you.');
    // TODO-QSP: dynamic text: "So good of you to join us, Miss <<$pcs_lastname>>," Mr. Tsarev says as several ...
    scene.text(`"So good of you to join us, Miss ${((st as any).pcs_lastname || '')}," Mr. Tsarev says as several of your classmates smirk, while a few look annoyed that you interrupted the class.`);
    scene.actions([
      { label: 'Apologize', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/late/latem2.jpg');
    scene.text('You look down. "Sorry. Time just got away from me."');
    scene.text('He shakes his head slightly and sighs. "Very well. Please take your seat and try not to let it happen again."');
    scene.actions([
      { label: 'Take your seat', goto: ['gschool_lessons4', 'math'] },
    ]);
  } },
      { label: 'Say nothing', handler: (st: GameState) => {
    (st as any).demerit = ((st as any).demerit ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/late/latem2.jpg');
    scene.text('You roll your eyes, but say nothing in response.');
    // TODO-QSP: dynamic text: He shakes his head slightly and frowns. "I''ll have to report this, Miss <<$pcs_...
    scene.text(`He shakes his head slightly and frowns. "I'll have to report this, Miss ${((st as any).pcs_lastname || '')}. Now please take your seat. You've interrupted my class enough."`);
    scene.actions([
      { label: 'Take your seat', goto: ['gschool_lessons4', 'math'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEnglish(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'eng');
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/classroom/literature/classlit.jpg');
  scene.text('"Everyone sit down, class is starting," Ms. Braakman says in English, her voice thick with a Russian accent. A few students take their seat, but most of the class continues socializing as if they didn\'t hear her.');
  scene.text('"Class is starting, now take a seat!" she repeats loudly in Russian and the groups reluctantly scatter as everyone settles into their seats.');
  if (((s as any).dimaRevenge ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', goto: ['dimaRevenge', '1'] },
    ]);
  } else {
    qspCall(s, 'willpower', 'chore', 'self', ((((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : (((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')))));
    if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
      (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
    } else {
      if (((s as any).trait_vars ?? 0)?.['academic'] >= 3) {
        (s as any).will_cost = 0;
      }
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Listen attentively', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Listen attentively', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'eng', ((st as any).pcs_intel ?? 0));
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
    ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic_lessons'] = ((st as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/literature/work2.jpg');
    scene.text('You actively take part in the lesson, raising your hand to answer questions, following along in your textbook and working quietly on the worksheets when given them.');
    scene.actions([
      { label: 'Keep working', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'eng', ((st as any).pcs_chrsm ?? 0));
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/pavlovsk/school/classroom/ask.jpg');
    scene.text('Unlike most of the students in your class, you stay focused on your work.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'working');
  } },
    ]);
  } },
      { label: 'Talk to someone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    scene.text('You tell yourself that you\'ve worked long enough and deserve a break. Looking around the room, you decide to talk to…');
    if (((st as any).npc_grupTipe ?? 0)?.['A189'] === 4) {
      scene.actions([
        { label: 'Niko', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    if (((st as any).NikoPayback ?? 0) > 0) {
      scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((st as any).week || '')}.jpg`);
      scene.text('Niko sneers at you as you approach. "What do you want?"');
      scene.text('"I just want to talk," you reply and he scoffs before nodding. You spend the next few minutes having a strained conversation until the end of the class.');
    } else {
      if (((st as any).NikoVolkovQW ?? 0) >= 5) {
        qspCall(st, 'npc_relationship', 'modify', 'A189', 'like');
        scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((st as any).week || '')}.jpg`);
        scene.text('As you approach Niko, he gives you a warm smile. "My princess graces with me with her presence. How can be of assistance?"');
        scene.text('You giggle. "I have spare time and I can\'t think of a better use of it than spending it with you."');
        scene.text('He chuckles and grabs onto your hand, lifting it toward his face and giving it a soft kiss. "Your wish is my command."');
        scene.text('You both spend the next few minutes chatting while exchanging loving glares until the end of the class.');
      } else {
        qspCall(st, 'npc_relationship', 'modify', 'A189', 'like');
        scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((st as any).week || '')}.jpg`);
        scene.text('As you approach Niko, he gives you a warm smile. "Ahh a lovely princess decides to grace me with her presence. How can I be of assistance?"');
        scene.text('You giggle. "You\'re so weird! I just want to chat for a bit, okay?"');
        scene.text('He chuckles and grabs onto your hand, lifting it toward his face and giving it a soft kiss. "Your wish is my command."');
        scene.text('You both begin chatting until the end of the class.');
      }
    }
    scene.actions([
      { label: 'Finish class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Vicky', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A15', 'like');
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
    scene.text('"I saw this video of an American girl dancing all sexy and stuff, and I\'m thinking of learning the dance. Next time I go to the community center, I\'ll show up all the girls and steal their boyfriends!" she jokes with a playful smile, but you notice a wicked twinkle in her eyes.');
    scene.text('Vicky\'s bubbly personality makes her easy and fun to talk to, and you end up spending the rest of class smiling and laughing with her.');
    scene.actions([
      { label: 'Finish class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Lena', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A20', 'like');
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
    scene.text('Lena sighs heavily. "Fuck, what\'s taking her so long?"');
    scene.text('"Who are you waiting for?" you ask.');
    scene.text('"Lera! She had to go take a piss, but she\'s taking forever!" she snaps back. "Her tongue probably needed a break anyways…" she mumbles quietly as a small smile spreads across her face.');
    scene.actions([
      { label: 'Finish class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Lera', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A21', 'like');
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
    scene.text('"It\'s hard enough having my dad as a teacher at school, but now that freak Lesco is living with us!"');
    scene.text('She spends the rest of class talking about all the awkward run-ins she\'s had with her dad in school and how she and Lena had to beat the shit out of anyone that tried spreading weird rumors about her being \'close\' to her cousin, Lesco.');
    scene.actions([
      { label: 'Finish class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Radomir', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'like');
    scene.img('images/locations/pavlovsk/school/classroom/talkboy' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
    scene.text('You try talking to Radomir, but it\'s hard to get a word in with how hard he\'s stroking his own ego.');
    scene.text('"You should have heard me last night, I killed it! You should come hear us play. Everyone thinks we\'re amazing, especially the girls. I know you\'ll love it too," he says with a wink. He keeps saying \'we\' a lot to refer to the rest of the band, but something tells you he\'s still talking about himself.');
    scene.actions([
      { label: 'Finish class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Ivan', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A3', 'like');
    scene.img('images/locations/pavlovsk/school/classroom/talkboy' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
    scene.text('With a confident smile, Ivan starts telling you about a recent match he had at the community center. "This kid I\'ve never seen before comes up to me and starts talking shit, saying my form is bad and that I couldn\'t hit someone even if they were standing still right in front of me!" he says with a scoff. "I told him to put his money where his mouth is and get in the ring, and guess what happened?"');
    scene.text('"You beat the crap out of him?" you say with a smile.');
    scene.text('Ivan laughs and you can see his chest puff out slightly. "Of course! The best part is that his girlfriend was there to see it happen, and while he was lying on the mat knocked out, she gave me her number."');
    scene.actions([
      { label: 'Finish class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Bella', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A22', 'like');
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
    scene.text('"God, this place is more like a daycare than a high school!" Bella says, scoffing in disgust. A few seconds later, a group of students start talking and laughing loud enough to disrupt the class. "See what I mean?" she adds as she rolls her eyes. "They\'re practically adults, but they act so childish. I hate it. They need to act their age, like I do."');
    scene.actions([
      { label: 'Finish class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Veronika', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A141', 'like');
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
    scene.text('You try talking to Veronika, but she has little to say, which is no surprise; she\'s always been standoffish. Still, she doesn\'t outright tell you to leave you alone, so you take it as a sign that she\'s okay with listening to you talk.');
    scene.actions([
      { label: 'Finish class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Daydream', handler: (st: GameState) => {
    (st as any).daydream = (Math.floor(Math.random() * 4) + 1);
    if (((st as any).daydream ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
      scene.text('Unable to pay attention, you retreat into your own thoughts. You distract yourself with a number of things, from doodling in your notebook to just staring blankly out the window.');
      // TODO-QSP: dynamic text: "<<$pcs_lastname>>!"
      scene.text(`"${((st as any).pcs_lastname || '')}!"`);
      scene.text('Hearing your name being called, you snap back to reality to see Ms. Braakman staring daggers at you from the front of the class. The scattered laughter from students causes you to squirm slightly in your seat.');
      scene.text('"I\'ve called your name three times now! If you want to sleep, you can do it during detention!" she warns as she points to the door.');
      qspCall(st, 'willpower', 'misc', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Be a smart ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Be a smart ass', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).demerit = ((st as any).demerit ?? 0) + (5);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/pc/reactions/eyeroll.mp4');
    scene.text('You roll your eyes and sigh heavily. "I can\'t help it, you just keep talking and talking…" Your unexpected response causes the room to go quiet. "Everything you say is just so pointless. When am I ever going to need to know this stuff?" you ask rhetorically. "Never. Never is the answer."');
    scene.text('The whole class starts to \'ooh\' in disbelief at your bold response. Arkadi, Roman and Anushka\'s laughter can probably be heard all the way down the hall.');
    scene.text('Ms. Braakman\'s face turns red and her expression darkens, a mix of rage and embarrassment. "Get out and report to the principal\'s office right now!" she barks.');
    scene.actions([
      { label: 'Go to the principal\'s office', handler: (st: GameState) => {
    (st as any).demerit = ((st as any).demerit ?? 0) + (5);
    scene.img('images/pc/reactions/smirk.mp4');
    scene.text('"Fine by me," you say with a smirk as you get up from your seat. You saunter past your fellow students and to the front of the class where you flash Ms. Braakman a mockingly sweet smile before exiting the classroom.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_office', 'principal'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Apologize', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big137.jpg');
    scene.text('"Sorry, Ms. Braakman…" you mumble quietly as you sit up straight and refocus on the lesson. Satisfied, Ms. Braakman returns to teaching with a small smile.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).daydream ?? 0) === 2) {
        (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 3) + 1));
        if (((st as any).class ?? 0)?.['school_eng_grade'] >= 80) {
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('As Ms. Braakman continues talking, you find yourself unable to stay awake. You\'re just on the edge of falling completely asleep when you\'re snapped back to reality by the teacher calling your name.');
          scene.text('"Well? What\'s the answer?" she asks with a smug smile.');
          scene.text('You didn\'t catch what the question was, so you take a quick look around the room and piece together an answer you hope is right. Ms. Braakman can barely hide her annoyance as she reluctantly admits that you\'re right.');
        } else {
          qspCall(st, 'mood', 'lower', 'small');
          qspCall(st, 'stat', '');
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('As Ms. Braakman continues talking, you find yourself unable to stay awake. You\'re just on the edge of falling completely asleep when you\'re snapped back to reality by the teacher calling your name.');
          scene.text('"Well? What\'s the answer?" she asks with a smug smile.');
          scene.text('You didn\'t catch what the question was, so you take a quick look around the room and piece together an answer you hope is right. Unfortunately, you answer incorrectly, which Ms. Braakman is happy to point out to the entire class.');
          scene.text('"A perfect example of how to fail my class," she smirks as your classmates laugh at you.');
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'english');
  } },
        ]);
      } else {
        (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 4) + 2));
        scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
        scene.text('You fell asleep and the bell wakes you up.');
        scene.actions([
          { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
    }
  } },
      { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You take out your phone and begin to play a game, hoping the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Ms. Braakman\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'english');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
      // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, are you playing on your phone during class?" Ms. Braakm...
      scene.text(`"Miss ${((st as any).pcs_lastname || '')}, are you playing on your phone during class?" Ms. Braakman asks as she makes her way towards you.`);
      qspCall(st, 'willpower', 'misc', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep using your phone', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep using your phone', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    (st as any).demerit = ((st as any).demerit ?? 0) + (5);
    scene.img('images/characters/pavlovsk/school/teacher/raven/angry.jpg');
    scene.text('You shrug your shoulders dismissively, which only serves to anger her more.');
    scene.text('"So that\'s how it\'s going to be?" she laughs dryly.');
    qspCall(st, 'willpower', 'exhib', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take photos under your skirt', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take photos under your skirt', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'arousal', 'flash', 1);
      scene.img('images/locations/pavlovsk/school/classroom/upskirtselfie.jpg');
      scene.text('With a mischievous smile, you deftly slide your phone under your skirt and spread your legs to take a picture of your panties. Ms. Braakman stops in front of your desk, her hands on her hips as she stares daggers at you.');
      scene.text('"Hand it over," she orders, one of her hands now held out in front of you. You obediently hand over your phone to her without argument. When she sees the screen is still on, she smiles smugly. "You were texting, weren\'t you? Of course you were, that\'s all you kids do these days. Well, I\'m sure you wouldn\'t mind if I shared with the class what you were--"');
      scene.text('You can barely keep a straight face as you watch Ms. Braakman\'s expression change from smug to confusion and then anger in a matter of seconds. You expect her to go through with her threat and show the class what you were doing, but for whatever reason she doesn\'t. "I don\'t want to see you ever doing that again, young lady! You can have this back after class," she warns you as she turns the screen off and returns to the front of the class.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'getphone');
  } },
      ]);
    } else {
      qspCall(st, 'arousal', 'flash', 1);
      scene.img('images/locations/pavlovsk/school/classroom/literature/nopanties_upskirt.jpg');
      scene.text('With a mischievous smile, you deftly slide your phone under your skirt and spread your legs to take a picture of your bare pussy. Ms. Braakman stops in front of your desk, her hands on her hips as she stares daggers at you.');
      scene.text('"Hand it over," she orders, one of her hands now held out in front of you. You obediently hand over your phone to her without argument. When she sees the screen is still on, she smiles smugly. "You were texting, weren\'t you? Of course you were, that\'s all you kids do these days. Well, I\'m sure you wouldn\'t mind if I shared with the class what you were--"');
      scene.text('You can barely keep a straight face as you watch Ms. Braakman\'s expression change from smug to confusion and then anger in a matter of seconds. You silently wait for her to order you out of the class and to the principal\'s office, but she looks lost in her own thoughts as she continues to stare at the screen. When she finally snaps back to reality, you could have sworn you saw a twinkle of excitement and longing in her eyes.');
      // TODO-QSP: dynamic text: "I don''t want to see you doing such things in my class again, Miss <<$pcs_lastn...
      scene.text(`"I don't want to see you doing such things in my class again, Miss ${((st as any).pcs_lastname || '')}! You can have this back after class," she says sharply, but the way she licks her lips afterwards speaks of something else. Without another word, she turns the screen off and returns to the front of the class to resume the lesson.`);
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'getphone');
  } },
      ]);
    }
  } },
      ]);
    }
    if (((st as any).braworntype ?? 0) !== 'none') {
      qspCall(st, 'willpower', 'misc', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Hide the phone in your bra', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Hide the phone in your bra', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).demerit = ((st as any).demerit ?? 0) + (5);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (15);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/nophone.jpg');
    // TODO-QSP: dynamic text: You deftly shove the phone in your bra, and smile fiendishly as you see the mome...
    scene.text(`You deftly shove the phone in your bra, and smile fiendishly as you see the momentary hesitation from your teacher as they stop at your desk. "You think this is a joke, Miss ${((st as any).pcs_lastname || '')}?" Ms. Braakman asks, her eyes narrowing.`);
    scene.text('"If you want my phone, go ahead and take it," you reply in a mockingly sweet voice as you thrust your chest out. Her eyes darken dangerously as you think you\'ve won, but your bluff is called as one of Ms. Braakman\'s hands plunges into your shirt. "Ms. Braakman, I didn\'t know today\'s lesson would be so hands on!" you tease as you feel her hand slip inside your bra. Your smile widens as you hear the class erupt with cheering and laughter.');
    scene.text('"You think you\'re clever, don\'t you?" she whispers, her voice low so only you can hear. You try to respond, but your words get caught in your throat as she starts to tease one of your nipples between her fingertips. Suddenly, she\'s no longer searching but groping, her skillful fingers carefully moving between each breast until both of your sensitive buds are hard and straining almost uncomfortably against your bra. You can\'t help but shift slightly in your seat as you feel a tightening sensation in your lower belly and an aching throb between your legs.');
    scene.text('"Don\'t make me remind you of your place, little girl!" Ms. Braakman\'s warning is punctuated painfully as she gives a sharp pinch and tug to one of your nipples, eliciting a soft whimper from you. Having gotten her point across, she grabs your phone and removes her hand from your shirt. "You can get this back after class."');
    scene.text('Flustered and aroused, you regain your senses and remember that you\'re sitting in class right now. You look around the room, but it seems like her groping went unnoticed and was seen as her fishing out your phone like you challenged her to do.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessonsev3', 'getphone'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Hand over the phone', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('Realizing it isn\'t worth it, you hand over your phone without argument.');
    scene.text('"You can have this back after class," she says as she walks back to the blackboard.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessonsev3', 'getphone'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. You can see Ms. Braakman isn\'t happy, but she\'s willing to let it go for now and goes back to teaching the class without reprimanding you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'english');
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
  }
  // TODO-QSP: end
  scene.build();
}

function enterPe(s: GameState, scene: SceneBuilder): void {
  (s as any).fat = ((s as any).fat ?? 0) - (5);
  qspCall(s, 'grades', 'attend_class', 'school', 'pe');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/gym/fizra.jpg');
  scene.text('You arrive in the gym and head straight to the girls locker room. Once inside, you quickly change into your athletic clothes before heading back out into the hall. Once everyone is ready, Coach Pavlovich conducts a roll call to ensure everyone is present.');
  if (((s as any).week ?? 0) === 5  &&  ((s as any).runnerQW ?? 0)?.['pav_stage'] === 0) {
    if (((s as any).runnerQW ?? 0)?.['pav_racetype'] === 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_racetype'] = 1;
    }
    // TODO-QSP: dynamic text: Coach Pavlovich announces that the inter-school running competition will be held...
    scene.text('Coach Pavlovich announces that the inter-school running competition will be held this Saturday at 11:00. If you want to participate, you should come to school between 10:00 and 11:00.');
  } else {
    if (((s as any).week ?? 0) === 5  &&  ((s as any).runnerQW ?? 0)?.['pav_stage'] === 1) {
      if (((s as any).runnerQW ?? 0)?.['pav_racetype'] === 0) {
        ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_racetype'] = 2;
      }
      // TODO-QSP: dynamic text: Coach Pavlovich announces that the inter-school running competition will be held...
      scene.text('Coach Pavlovich announces that the inter-school running competition will be held this Saturday at 11:00. If you want to participate, you should come to school between 10:00 and 11:00.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).fizrarand = (Math.floor(Math.random() * 8) + 1);
    if (((st as any).fizrarand ?? 0) === 1) {
      qspCall(st, 'mood', 'lower', 'tiny');
      if (((st as any).pcs_run ?? 0) >= 60) {
        ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (2);
      } else {
        if (((st as any).pcs_run ?? 0) >= 40) {
          ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
        }
      }
      qspCall(st, 'sweat', 'add', 30);
      qspCall(st, 'exp_gain', 'run', (Math.floor(Math.random() * 2) + 1));
      qspCall(st, 'grades', 'class_activity_skill', 'school', 'pe', ((st as any).pcs_run ?? 0));
      qspCall(st, 'exercise', 'tier2', 15, 'vital', 'agil');
      scene.img('images/locations/pavlovsk/school/gym/fizra.jpg');
      scene.text('After the roll call, Coach Pavlovich gets everyone\'s attention.');
      if (((st as any).temper ?? 0) >= 10  &&  ((st as any).sunWeather ?? 0) === 1) {
        scene.actions([
          { label: 'Run', handler: (st: GameState) => {
    (st as any).runoutside = (Math.floor(Math.random() * 6) + 1);
    if (((st as any).runoutside ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/gym/fizra2.jpg');
      scene.text('"Since the weather is so nice, we\'ll be running outside today."');
      scene.text('He leads the class outside to the forest trail on the school grounds, near the old school building, where he gives everyone time to do a little stretching before the run. He then pulls out his stop watch and everyone takes off, some faster than others.');
      scene.text('As you run through the forest, you hear someone behind you and turn to see Ivan. He\'s much faster than you and sprints past to show you how fast he can be before he pauses and lets you catch up. You then run together for a while.');
      scene.actions([
        { label: 'Show him your breasts', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/fizra3.jpg');
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      // TODO-QSP: dynamic text: Making sure no one else is nearby, you pull up your shirt and reveal your <<$tit...
      scene.text(`Making sure no one else is nearby, you pull up your shirt and reveal your ${((st as any).titsize || '')} breasts to Ivan. You almost immediately notice the erection growing in his tight shorts, and he awkwardly tries to hide it. As you pull your shirt back down, you give him a sweet smile. "Try hiding that while you're running past everyone!"`);
      scene.text('He grimaces as he sprints away from you, carefully checking to make sure no one is near him. You have a knowing smile on your face when, at the end of the class, his friends ask him why his lap time was so much slower than usual.');
    } else {
      if (((st as any).pcs_hotcat ?? 0) >= 4) {
        // TODO-QSP: dynamic text: Making sure no one else is nearby, you pull up your shirt and reveal your <<$tit...
        scene.text(`Making sure no one else is nearby, you pull up your shirt and reveal your ${((st as any).titsize || '')} breasts to Ivan. He smiles and shakes his head as he sprints away and you slow down a little to get everything back in place.`);
        scene.text('At the end of the class, Ivan puts in the fastest time. Again.');
      } else {
        // TODO-QSP: dynamic text: Making sure no one else is nearby, you pull up your shirt and reveal your <<$tit...
        scene.text(`Making sure no one else is nearby, you pull up your shirt and reveal your ${((st as any).titsize || '')} breasts to Ivan. He gives you a disgusted look and shakes his head as he sprints away. You slow down a little to get everything back in place.`);
        scene.text('At the end of the class, Ivan puts in the fastest time. Again.');
      }
    }
    scene.actions([
      { label: 'Finish your run', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
        { label: 'Laugh it off', handler: (st: GameState) => {
    scene.text('"Very funny," you tell him as you give him a wink. He playfully salutes you as he sprints off again, finishing the run well before anyone else.');
    scene.actions([
      { label: 'Finish your run', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).runoutside ?? 0) === 2) {
        scene.img('images/locations/pavlovsk/school/gym/fizra2.jpg');
        scene.text('"Since the weather is so nice, we\'ll be running outside today."');
        scene.text('He leads the class outside to the forest trail on the school grounds, near the old school building, where he gives everyone time to do a little stretching before the run. He then pulls out his stop watch and everyone takes off, some faster than others.');
        scene.text('As you run through the forest, you hear someone coming up beside you.');
        scene.actions([
          { label: 'Focus on running', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/fizra2.jpg');
    scene.text('You remain focused on your running and keep your eyes straight ahead. Running as quickly as you can, you hear whoever it was starting to fall behind.');
    scene.actions([
      { label: 'Finish your run', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
          { label: 'Look', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/nushtopless.jpg');
    scene.text('You turn your head and look over to see Anushka running next to you, but she has her top off and is carrying it in her hand, her small breasts bouncing with every step she takes.');
    scene.text('She notices where your eyes drift and grins. She stays alongside you for most of the run and a few boys pass by, slowing down to take a good look. Some of the girls look as well, but most just give her dirty or disgusted looks.');
    qspCall(st, 'arousal', 'erotic_nudity', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish your run', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
        ]);
      } else {
        if (((st as any).runoutside ?? 0) === 3) {
          scene.img('images/locations/pavlovsk/school/gym/nopanstretch.jpg');
          scene.text('"Since the weather is so nice, we\'ll be running outside today."');
          scene.text('He leads the class outside to the forest trail on the school grounds, near the old school building, where he gives everyone time to do a little stretching before the run.');
          scene.text('As Lina does some stretching, it becomes apparent she forgot her panties. As she stretches, her shorts pull to one side, showing her pussy off to everyone. Before anyone can say anything, she stops and stands up, oblivious to the little show she just gave.');
          scene.text('Coach Pavlovich then pulls out his stop watch and everyone takes off, some faster than others.');
          scene.text('The rest of the run is very uneventful and peaceful. You enjoy the quiet time to yourself a great deal.');
          scene.actions([
            { label: 'Finish your run', goto: ['gschool_lessons4', 'postphys'] },
          ]);
        } else {
          scene.img('images/locations/pavlovsk/school/gym/fizra2.jpg');
          scene.text('"Since the weather is so nice, we\'ll be running outside today."');
          scene.text('He leads the class outside to the forest trail on the school grounds, near the old school building, where he gives everyone time to do a little stretching before the run. He then pulls out his stop watch and everyone takes off, some faster than others.');
          scene.text('Your run ends up being very uneventful and peaceful. You enjoy the quiet time to yourself a great deal.');
          scene.actions([
            { label: 'Finish your run', goto: ['gschool_lessons4', 'postphys'] },
          ]);
        }
      }
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Run', handler: (st: GameState) => {
    (st as any).runinside = (Math.floor(Math.random() * 5) + 1);
    if (((st as any).runinside ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/gym/butt.jpg');
      scene.text('"The weather isn\'t great, so you\'ll be running as many laps of the gym as you can. Start when you\'re ready."');
      scene.text('You start running laps around the inside of the gym and it\'s uneventful until you see Anushka pass behind Coach Nikolaevich and pull down the back of her shorts to show off her panty clad ass.');
      scene.text('It doesn\'t take long before many of the boys catch up to Anushka, but not pass her. They wait until she passes behind the teacher and flashes them her panty clad ass again.');
      qspCall(st, 'arousal', 'erotic_nudity', 5);
      qspCall(st, 'arousal', 'end');
    } else {
      scene.img('images/locations/pavlovsk/school/gym/fizra1.jpg');
      scene.text('"The weather isn\'t great, so you\'ll be running as many laps of the gym as you can. Start when you\'re ready."');
      scene.text('You join the class in running laps around the gym. Half-way into your fourteenth lap, you wonder if there\'s any way gym class could be any more boring than this.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'fiz_rand');
    scene.actions([
      { label: 'Finish your run', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    } else {
      if (((st as any).fizrarand ?? 0) === 2) {
        qspCall(st, 'grades', 'class_activity_attributes', 'school', 'pe', ((st as any).pcs_agil ?? 0));
        qspCall(st, 'exercise', 'tier2', 15, 'agil');
        if (((st as any).pcs_agil ?? 0) >= 60) {
          ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (2);
        } else {
          if (((st as any).pcs_agil ?? 0) >= 40) {
            ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
          }
        }
        scene.img('images/locations/pavlovsk/school/gym/fizra4.jpg');
        scene.text('After the roll call, Coach Nikolaevich announces that you\'ll be taking turns performing vaults. He also says that he\'ll be counting how many each person does, so it\'s a bit more stressful than usual.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'fiz_rand');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
        ]);
      } else {
        if (((st as any).fizrarand ?? 0) === 3) {
          qspCall(st, 'grades', 'class_activity_attributes', 'school', 'pe', ((st as any).pcs_stren ?? 0));
          qspCall(st, 'exercise', 'tier2', 15, 'stren');
          qspCall(st, 'stat', '');
          (st as any).pullup = 0;
          if (((st as any).pullup ?? 0) === 1  &&  ((st as any).pantyworntype ?? 0) === 'none') {
            qspCall(st, 'mood', 'lower', 'small');
            qspCall(st, 'arousal', 'flash', (-5));
            qspCall(st, 'stat', '');
            scene.img('images/locations/pavlovsk/school/gym/fizperand1.jpg');
            if (((st as any).pcs_hotcat ?? 0) >= 6) {
              scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns doing pull-ups. He also says that he\'ll be counting how many each person does, so it\'s a bit more stressful than usual.');
              // TODO-QSP: dynamic text: You''re not wearing panties and while you''re doing your pullups, your shorts sl...
              scene.text('You\'re not wearing panties and while you\'re doing your pullups, your shorts slide down a little. The top of your ' + ((((st as any).pcs_pubes ?? 0) < 3) ? ('pubic area is') : ('pubes are')) + ' on display for the whole class to see. It\'s met with mixed responses: the guys are whistling and whooping appreciatively, while most of the girls are staring you down in disapproval. You quickly let go of the bar and pull your shorts back up, deeply embarrassed by the whole ordeal.');
            } else {
              if (((st as any).pcs_hotcat ?? 0) >= 4) {
                scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns doing pull-ups. He also says that he\'ll be counting how many each person does, so it\'s a bit more stressful than usual.');
                // TODO-QSP: dynamic text: You''re not wearing panties and while you''re doing your pullups, your shorts sl...
                scene.text('You\'re not wearing panties and while you\'re doing your pullups, your shorts slide down a little. The top of your ' + ((((st as any).pcs_pubes ?? 0) < 3) ? ('pubic area is') : ('pubes are')) + ' on display for the whole class to see. It\'s met with mixed responses: most of the class that are watching start laughing, with a few pointing, while some of the girls are staring you down in disapproval. You quickly let go of the bar and pull your shorts back up, deeply embarrassed by the whole ordeal.');
              } else {
                scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns doing pull-ups. He also says that he\'ll be counting how many each person does, so it\'s a bit more stressful than usual.');
                // TODO-QSP: dynamic text: You''re not wearing panties and while you''re doing your pullups, your shorts sl...
                scene.text('You\'re not wearing panties and while you\'re doing your pullups, your shorts slide down a little. The top of your ' + ((((st as any).pcs_pubes ?? 0) < 3) ? ('pubic area is') : ('pubes are')) + ' on display for the whole class to see. It\'s met with negative responses: almost everyone gives you looks of disgust or disapproval and make mocking comments, so you quickly let go of the bar and pull your shorts back up, deeply embarrassed by the whole ordeal. It takes a while for Coach Nikolaevich to get the class focused.');
              }
            }
          } else {
            scene.img('images/locations/pavlovsk/school/gym/fizra6.jpg');
            scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns doing pull-ups. He also says that he\'ll be counting how many each person does, so it\'s a bit more stressful than usual.');
            if (((st as any).pcs_hotcat ?? 0) >= 6) {
              scene.text('Some of the boys stop what they\'re doing when it\'s your turn, coming over to shout some words of support.');
            }
            if (((st as any).pcs_stren ?? 0) <= 20) {
              ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
              scene.text('Unfortunately, pull-ups aren\'t your strong point and you\'re unable to do as many as any of the girls. You did the fewest in the class and most of the jocks snicker or make snide remarks.');
            } else {
              if (((st as any).pcs_stren ?? 0) <= 30) {
                scene.text('Unfortunately, pull-ups aren\'t your strong point and you\'re unable to do as many as most of the other girls, other than the nerds and a few of the popular girls.');
              } else {
                if (((st as any).pcs_stren ?? 0) <= 50) {
                  scene.text('In the end, you wind up doing a perfectly respectable amount of pull-ups. You do better than most of the girls, other than a few of the jocks.');
                } else {
                  if (((st as any).pcs_stren ?? 0) <= 70) {
                    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
                    scene.text('In the end, you wind up doing great. You do more pull-ups than some of the boys and better than all of the girls except Christina.');
                  } else {
                    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (2);
                    scene.text('You\'ve done plenty of pull-ups in the past, so this isn\'t too much of a challenge for you. When you finally stop, you\'ve done more than all the other girls and about half the boys as well.');
                  }
                }
              }
            }
          }
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'fiz_rand');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
          ]);
        } else {
          if (((st as any).fizrarand ?? 0) === 4) {
            qspCall(st, 'grades', 'class_activity_attributes', 'school', 'pe', ((st as any).pcs_stren ?? 0));
            qspCall(st, 'exercise', 'tier2', 15, 'stren');
            qspCall(st, 'stat', '');
            scene.img('images/locations/pavlovsk/school/gym/fizra7.jpg');
            scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be doing sit-ups, but that the boys will also have to do pull-ups. He also says that he\'ll be counting how many each person does, so it\'s a bit more stressful than usual.');
            if (((st as any).pcs_hotcat ?? 0) >= 6) {
              scene.text('Some of the boys stop what they\'re doing when it\'s your turn, coming over to shout some words of support.');
            }
            if (((st as any).pcs_stren ?? 0) <= 20) {
              ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
              scene.text('Unfortunately, sit-ups aren\'t your strong point and you\'re unable to do as many as any of the girls. You did the fewest in the class and most of the jocks snicker or make snide remarks.');
            } else {
              if (((st as any).pcs_stren ?? 0) <= 30) {
                scene.text('Unfortunately, sit-ups aren\'t your strong point and you\'re unable to do as many as most of the other girls, other than the nerds and a few of the popular girls.');
              } else {
                if (((st as any).pcs_stren ?? 0) <= 50) {
                  scene.text('In the end, you wind up doing a perfectly respectable amount of sit-ups. You do better than most of the girls, other than a few of the jocks.');
                } else {
                  if (((st as any).pcs_stren ?? 0) <= 70) {
                    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
                    scene.text('In the end, you wind up doing great. You do more sit-ups than some of the boys and better than all the girls except Christina.');
                  } else {
                    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (2);
                    scene.text('You\'ve done plenty of sit-ups in the past, so this isn\'t too much of a challenge for you. When you finally stop, you\'ve done more than all the other girls and about half the boys as well.');
                  }
                }
              }
            }
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'fiz_rand');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
            ]);
          } else {
            if (((st as any).fizrarand ?? 0) === 5) {
              qspCall(st, 'grades', 'class_activity_attributes', 'school', 'pe', ((st as any).pcs_vital ?? 0));
              qspCall(st, 'exercise', 'tier2', 15, 'vital');
              scene.text('Coach Nikolaevich breaks everyone into small groups and has you compete to see who can jump rope the longest. Many of the boys pay special attention to the girls during their turns.');
              if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_tits_small', 'body_tits_average')) {
                if (((st as any).pcs_vital ?? 0) <= 30) {
                  ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
                  scene.text('You\'re barely able to do more than a few before you get tripped up on the rope. You did the fewest in the class and most of the jocks snicker or make snide remarks. The coach wants to make sure you get enough exercise though, so you\'re made to give it a few more tries.');
                } else {
                  if (((st as any).pcs_vital ?? 0) <= 40) {
                    scene.img('images/locations/pavlovsk/school/gym/jumpr.mp4');
                    scene.text('You do about average among the girls before you get tripped up on the rope. The coach wants to make sure you get enough exercise though, so you\'re made to give it a few more tries.');
                  } else {
                    if (((st as any).pcs_vital ?? 0) <= 60) {
                      ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
                      scene.text('Jumping rope is a surprisingly good workout. You do very well and beat most of your classmates. While you never win any of the competitions, you don\'t embarrass yourself either. You\'re tired by the time you\'re done.');
                    } else {
                      ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (2);
                      scene.text('The other girls are surprised at just how long you can jump rope without messing up. You manage to go the longest in a few of the rounds.');
                    }
                  }
                }
              } else {
                if (qspFunc(s, 'pcs_has_attr', 'body_tits_big')) {
                  scene.img('images/locations/pavlovsk/school/gym/jumprb.mp4');
                  if (((st as any).pcs_vital ?? 0) <= 30) {
                    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
                    scene.text('You\'re barely able to do more than a few before you get tripped up on the rope. You did the fewest in the class and most of the jocks snicker or make snide remarks. The coach wants to make sure you get enough exercise though, so you\'re made to give it a few tries. A number of the boys grumble each time you fail to go for more than a few seconds.');
                  } else {
                    if (((st as any).pcs_vital ?? 0) <= 40) {
                      scene.img('images/locations/pavlovsk/school/gym/jumpr.mp4');
                      scene.text('You do about average among the girls before you get tripped up on the rope. The coach wants to make sure you get enough exercise though, so you\'re made to give it a few more tries. A number of the boys grumble each time you fail to go for more than a couple of seconds.');
                    } else {
                      if (((st as any).pcs_vital ?? 0) <= 60) {
                        ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
                        scene.text('Jumping rope is a surprisingly good workout. You do very well and beat most of your classmates. While you never win any of the competitions, you don\'t embarrass yourself either. You\'re tired by the time you\'re done. You have no doubt why the boys are watching - you can feel your breasts bouncing with every jump, despite the help of the sports bra.');
                      } else {
                        ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (2);
                        scene.text('The other girls in your group are surprised at just how long you can jump rope without messing up. You manage to go the longest in a few of the rounds and could actually jump rope for quite a bit longer, but notice that the longer the class goes on, the more boys have found their way over to watch you. Some of the girls you were competing with make snide remarks about just which particular parts of you they are so keen on watching.');
                      }
                    }
                  }
                } else {
                  scene.img('images/locations/pavlovsk/school/gym/jumph.mp4');
                  if (((st as any).pcs_vital ?? 0) <= 30) {
                    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
                    scene.text('You\'re barely able to do more than a few before you get tripped up on the rope. You did the fewest in the class and most of the jocks snicker or make snide remarks. The coach wants to make sure you get enough exercise though, so you\'re made to give it a few more tries. There\'s outright jeering from some of the boys whenever you screw up. "Come on already! We want to see them bounce!" Vasily shouts.');
                  } else {
                    if (((st as any).pcs_vital ?? 0) <= 40) {
                      scene.img('images/locations/pavlovsk/school/gym/jumpr.mp4');
                      scene.text('You do about average among the girls before you get tripped up on the rope. The teacher wants to make sure you get enough exercise though, so you\'re made to give it a couple tries. There\'s outright jeering from some of the boys whenever you screw up. "Come on, get those titties bouncing!" Dan shouts.');
                    } else {
                      if (((st as any).pcs_vital ?? 0) <= 60) {
                        ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
                        scene.text('Jumping rope is a complete misery. You can\'t manage it for very long; although your coordination and endurance are there, the pain from your breasts slapping around builds up fast, despite the help of the sports bra. The girls you\'re competing with are sympathetic at first, but that slowly changes as some of the boys wander over to cheer you on. It\'s entirely apparent what their eyes are focused on each time a round begins.');
                      } else {
                        ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (2);
                        scene.text('You\'re easily in good enough shape that this should be a snap, but each time you jump, your breasts slap up and down pretty hard despite the help of your sports bra and they\'re painfully sore in no time. Fitness means enduring a little pain though, so you try to press on for as long as you can bear it. What ultimately stops you is the hooting and hollering from the boys. By the end of the class, almost all of them have come over to gawk at you.');
                      }
                    }
                  }
                }
              }
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'fiz_rand');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
              ]);
            } else {
              if (((st as any).fizrarand ?? 0) === 6) {
                qspCall(st, 'grades', 'class_activity_attributes', 'school', 'pe', ((st as any).pcs_stren ?? 0));
                qspCall(st, 'exercise', 'tier2', 15, 'stren');
                qspCall(st, 'stat', '');
                if (((st as any).pcs_horny ?? 0) < 50) {
                  scene.img('images/locations/pavlovsk/school/gym/rope.jpg');
                  if (((st as any).pcs_stren ?? 0) <= 30) {
                    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
                    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
                    scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns climbing the ropes today.');
                    scene.text('You climb as instructed, but can\'t help but feel the rough robe rubbing against your pussy through your clothes. You don\'t even make it half way up the rope before you have to give up and slide back down, which causes the rope to rub against your clit and turn you on even more.');
                  } else {
                    if (((st as any).pcs_stren ?? 0) <= 40) {
                      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
                      scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns climbing the ropes today.');
                      scene.text('You climb as instructed, but can\'t help but feel the rough robe rubbing against your pussy through your clothes. You almost make it to the top of the rope before you have to give up and slide back down, which causes the rope to rub against your clit and turn you on even more.');
                    } else {
                      if (((st as any).pcs_stren ?? 0) <= 60) {
                        ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
                        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (15);
                        scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns climbing the ropes today.');
                        scene.text('You climb as instructed, but can\'t help but feel the rough robe rubbing against your pussy through your clothes. Despite the distraction, you manage to make it to the top, even though you almost slipped once or twice due to the pleasurable stimulation. Once at the top you slide back down, which causes the rope to rub against your clit and turn you on even more.');
                      } else {
                        ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (2);
                        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (15);
                        scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns climbing the ropes today.');
                        scene.text('You climb as instructed, but can\'t help but feel the rough robe rubbing against your pussy through your clothes. Even with the rubbing of the rope distracting you, you easily and quickly make it to the top. Once there, you slide back down, which causes the rope to rub against your clit and turn you on even more.');
                      }
                    }
                  }
                } else {
                  if (((st as any).pcs_horny ?? 0) < 100) {
                    scene.img('images/locations/pavlovsk/school/gym/rope.jpg');
                    if (((st as any).pcs_stren ?? 0) <= 30) {
                      ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
                      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
                      scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns climbing the ropes today.');
                      scene.text('You climb as instructed, but can\'t help but feel the rough rope rubbing against your pussy through your clothes. You do your best to climb up, but the rubbing of the rope against your pussy gets more intense. You don\'t even make it half way up the rope before you have to give up and slide back down, which causes the rope to rub against your clit and turn you on even more.');
                    } else {
                      if (((st as any).pcs_stren ?? 0) <= 40) {
                        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
                        scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns climbing the ropes today.');
                        scene.text('You climb as instructed, but can\'t help but feel the rough rope rubbing against your pussy through your clothes. You do your best to climb up, but the rubbing of the rope against your pussy gets more intense. You almost make it to the top before you have to give up and slide back down, which causes the rope to rub against your clit and turn you on even more.');
                      } else {
                        if (((st as any).pcs_stren ?? 0) <= 60) {
                          ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
                          (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (30);
                          scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns climbing the ropes today.');
                          scene.text('You climb as instructed, but can\'t help but feel the rough rope rubbing against your pussy through your clothes. Despite the distraction, you manage to make it to the top, even though you almost slipped once or twice due to the pleasurable stimulation. You slide back down, which causes the rope to rub against your clit and turn you on even more.');
                        } else {
                          ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (2);
                          (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (30);
                          scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns climbing the ropes today.');
                          scene.text('You climb as instructed, but can\'t help but feel the rough rope rubbing against your pussy through your clothes. Even with the rubbing of the rope distracting you, you easily and quickly make it to the top. Once there, you slide back down, which causes the rope to rub against your clit and turn you on even more.');
                        }
                      }
                    }
                  } else {
                    (st as any).orgasm_or = 'yes';
                    qspCall(st, 'arousal', 'foreplay', (-5), 'no_orgasm_msg');
                    qspCall(st, 'arousal', 'end');
                    qspCall(st, 'stat', '');
                    scene.img('images/locations/pavlovsk/school/gym/fizra8.jpg');
                    scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns climbing the ropes today.');
                    scene.text('You climb as instructed, but can\'t help but feel the rough rope rubbing against your pussy through your clothes. You do your best to climb up, but the rubbing of the rope against your pussy gets more intense. After a few seconds, the stimulation from the rope against your clit brings you to orgasm, and you have to do everything in your power not to fall as you quiver against the rope, stifling your moans.');
                    // TODO-QSP: dynamic text: The coach looks up to you. "Why are you shaking, <<$pcs_lastname>>? Are you scar...
                    scene.text(`The coach looks up to you. "Why are you shaking, ${((st as any).pcs_lastname || '')}? Are you scared of heights? Go ahead and come down then."`);
                  }
                }
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'fiz_rand');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
                ]);
              } else {
                if (((st as any).fizrarand ?? 0) === 7) {
                  qspCall(st, 'grades', 'class_activity_attributes', 'school', 'pe', ((st as any).pcs_vital ?? 0));
                  qspCall(st, 'exercise', 'tier2', 15, 'vital');
                  scene.text('The coach breaks everyone into small groups and has you compete to see who can perform jumping jacks the longest. Many of the boys pay special attention to the girls during their turns.');
                  if ((!(Math.floor(Math.random() * 5) + 0))) {
                    scene.img('images/locations/pavlovsk/school/gym/bouncebhand.jpg');
                    scene.text('Irina is doing jumping jacks and her breasts are really bouncing - she obviously isn\'t wearing a sports bra. The bouncing of her breasts starts to draw the attention of a lot of the boys as Stasya walks up behind her, reaches around and grabs her breasts. Irina lets out a startled squeak, followed by a blush when Stasya whispers in her ear and she sees all the boys staring.');
                    qspCall(st, 'arousal', 'erotic_nudity', 2);
                    qspCall(st, 'arousal', 'end');
                  }
                  scene.actions([
                    { label: 'Continue', goto: ['gschool_lessons4', 'jumping_jacks'] },
                  ]);
                } else {
                  qspCall(st, 'grades', 'class_activity_attributes', 'school', 'pe', ((st as any).pcs_stren ?? 0));
                  qspCall(st, 'exercise', 'tier2', 15, 'stren');
                  scene.text('After the roll call, Coach Nikolaevich announces that you\'ll all be taking turns doing push-ups. He also says that he\'ll count how many each person does, so it\'s a bit more stressful than usual.');
                  if ((!(Math.floor(Math.random() * 5) + 0))) {
                    scene.img('images/locations/pavlovsk/school/gym/nipslip.mp4');
                    scene.text('Bella apparently doesn\'t believe in wearing sports bras. During the pushup part of the class, the top of her breast pops out of her tank top, showing her nipple off for everyone to see. Lizaveta quickly points it out to her, making her blush a deep red as she quickly covers her nipple up and tries to ignore the laughter and all the staring boys around her.');
                    qspCall(st, 'arousal', 'erotic_nudity', 2);
                    qspCall(st, 'arousal', 'end');
                  }
                  scene.actions([
                    { label: 'Continue', goto: ['gschool_lessons4', 'pushups'] },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterJumpingJacks(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).pcs_hotcat ?? 0) >= 6) {
    scene.text('Some of the boys stop what they\'re doing when it\'s your turn, coming over to shout some words of support.');
  }
  if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_tits_small', 'body_tits_average')) {
    if (((s as any).pcs_vital ?? 0) <= 30) {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      scene.text('You\'re barely able to do more than a few before you are just too tired. You did the fewest in the class and most of the jocks snicker or make snide remarks. The coach wants to make sure you get enough exercise though, so you\'re made to give it a few more tries.');
    } else {
      if (((s as any).pcs_vital ?? 0) <= 40) {
        scene.img('images/locations/pavlovsk/school/gym/jumpr.mp4');
        scene.text('You do about average among the girls before you stop. The coach wants to make sure you get enough exercise though, so you\'re made to give it a few more tries.');
      } else {
        if (((s as any).pcs_vital ?? 0) <= 60) {
          ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (1);
          scene.text('Jumping jacks is a surprisingly good workout. You do very well and beat most of your classmates. While you never win any of the competitions, you don\'t embarrass yourself either. You\'re tired by the time you\'re done.');
        } else {
          ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (2);
          scene.text('The other girls in your group are surprised at just how many jumping jacks you can do. You manage to go the longest in a few of the rounds.');
        }
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'fiz_rand');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
    ]);
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'body_tits_big')) {
      scene.img('images/locations/pavlovsk/school/gym/jumprb.mp4');
      if (((s as any).pcs_vital ?? 0) <= 30) {
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (1);
        scene.text('You\'re barely able to do more than a few before you\'re too tired to continue. You did the fewest in the class and most of the jocks snicker or make snide remarks. The coach wants to make sure you get enough exercise though, so you\'re made to give it a few tries. A number of the boys grumble each time you fail to go for more than a few seconds.');
      } else {
        if (((s as any).pcs_vital ?? 0) <= 40) {
          scene.img('images/locations/pavlovsk/school/gym/jumpr.mp4');
          scene.text('You do about average among the girls before you stop. The coach wants to make sure you get enough exercise though, so you\'re made to give it a few tries. A number of the boys grumble each time you fail to go for more than a few seconds.');
        } else {
          if (((s as any).pcs_vital ?? 0) <= 60) {
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (1);
            scene.text('Jumping jacks is a surprisingly good workout. You do very well and beat most of your classmates. While you never win any of the competitions, you don\'t embarrass yourself either. You\'re tired by the time you\'re done. You have no doubt why the boys are watching - you can feel your breasts bouncing with every jump, despite the help of the sports bra.');
          } else {
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (2);
            scene.text('The other girls in your group are surprised at just how many jumping jacks you can do. You manage to go the longest in a few of the rounds and could actually go for quite a bit longer. However, you notice that the longer the class goes on, the more boys walk over to watch you. Some of the girls you were competing with make snide remarks about just which particular parts of you they are so keen on watching.');
          }
        }
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'fiz_rand');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/gym/jumph.mp4');
      if (((s as any).pcs_vital ?? 0) <= 30) {
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (1);
        scene.text('You\'re barely able to do more than a few before you\'re too tired to continue. You did the fewest in your class and most of the jocks snicker or make snide remarks. The teacher wants to make sure you get enough exercise though, so you\'re made to give it a few more tries. There\'s outright jeering from some of the boys whenever you screw up. "Come on already! We want to see them bounce!" Vasily shouts.');
      } else {
        if (((s as any).pcs_vital ?? 0) <= 40) {
          scene.img('images/locations/pavlovsk/school/gym/jumpr.mp4');
          scene.text('You do about average among the girls before stopping. The coach wants to make sure you get enough exercise though, so you\'re made to give it a few tries. There\'s outright jeering from some of the boys whenever you screw up. Vasily starts shouting "Come on, get those titties bouncing!"');
        } else {
          if (((s as any).pcs_vital ?? 0) <= 60) {
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (1);
            scene.text('Jumping jacks is a complete misery. You can\'t manage it for very long; although your coordination and endurance are there, the pain from your breasts slapping around builds up fast, despite the help of the sports bra. The girls you\'re competing with are sympathetic at first, but that slowly changes as some of the boys wander over to cheer you on. It\'s completely apparent what their eyes are focused on each time a round begins.');
          } else {
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (2);
            scene.text('You\'re easily in good enough shape that this should be a snap, but each time you jump, your breasts slap up and down pretty hard despite the help of the sports bra and they\'re painfully sore in no time. Fitness means enduring a little pain though, so you try to press on for as long as you can bear it. What ultimately stops you is the hooting and hollering from the boys. By the end of the class, almost all of them have come over to gawk at you.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'fiz_rand');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPushups(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).pcs_hotcat ?? 0) >= 6) {
    scene.text('Some of the boys stop what they\'re doing when it\'s your turn, coming over to shout some words of support.');
  }
  if (((s as any).pcs_stren ?? 0) <= 20) {
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (1);
    scene.text('Unfortunately, push-ups aren\'t your strong point and you\'re unable to do as many as any of the girls. You did the fewest in the class and most of the jocks snicker or make snide remarks.');
  } else {
    if (((s as any).pcs_stren ?? 0) <= 30) {
      scene.text('Unfortunately, push-ups aren\'t your strong point and you\'re unable to do as many as most of the other girls, other than the nerds and a few of the popular girls.');
    } else {
      if (((s as any).pcs_stren ?? 0) <= 50) {
        scene.text('In the end, you wind up doing a perfectly respectable amount of push-ups. You did better than most of the other girls, other than a few of the jocks.');
      } else {
        if (((s as any).pcs_stren ?? 0) <= 70) {
          ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (1);
          scene.text('In the end, you wind up doing great. You do more push-ups than some of the boys and better than all the girls except Christina.');
        } else {
          ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (2);
          scene.text('You\'ve done enough push-ups in the past that this isn\'t too much of a challenge for you. When you finally stop, you\'ve done more than all the other girls and about half the boys as well.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'fiz_rand');
    scene.actions([
      { label: 'End of lesson', goto: ['gschool_lessons4', 'postphys'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPostphys(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big69.jpg');
  if (((s as any).christinaQW ?? 0)?.['pre_bm'] === 1) {
    (s as any).postphys_event = ((s as any).daystart ?? 0);
    scene.text('After class, Coach Pavlovich returns to his office. For some reason, Christina is following him while all the other students go to the locker rooms.');
    scene.actions([
      { label: 'Ignore it and go to the locker room', goto: ['gschool_lessons4', 'postphys2'] },
      { label: 'Follow them', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/christina/sex/school/chcoachbj.jpg');
    scene.text('You sneak up to Coach Pavlovich\'s office door to listen to what they\'re talking about. You hear Christina saying "Did you miss me, sir?"');
    scene.text('The coach doesn\'t answer her in words, but in gasps. Deciding you need to take the risk and look, you crack the door open and peek in.');
    scene.text('What you see is like a dream come true; Christina, naked and on her knees in front of Pavlovich, sucking his cock for all she\'s worth.');
    // TODO-QSP: $OpenInnerThought + '"This is exactly what I was looking for!"' + $CloseInnerThought
    scene.text('Pulling out your phone, you make sure the flash is turned off and start taking pictures.');
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['blackmail'] = 1;
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['pre_bm'] = 0;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/cocksuck3.jpg');
    scene.text('The coach grabs Christina\'s head and starts face fucking her. She grips his legs, obviously trying to get him to slow down, but he doesn\'t relent as gagging sounds fill the room.');
    scene.text('The sounds and sight start making you wet, but you aren\'t here to masturbate, so you keep taking as many pictures as you can.');
    scene.text('Pavlovich seems to reach his limit and pulls out, ordering her to keep her mouth open before he shoots thick ropes of cum into her mouth.');
    scene.text('Deciding you have enough evidence, and not wanting to play your hand just yet, you quietly close the door and sneak off, extremely pleased with yourself.');
    qspCall(st, 'arousal', 'erotic_nudity', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the showers', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'gschool_lessons4', 'postphys2');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    qspGoto(s, 'gschool_lessons4', 'postphys2');
  }
  // TODO-QSP: end
  scene.build();
}

function enterPostphys2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).christinaQW ?? 0)?.['subpath'] >= 2  &&  ((s as any).postphys_event ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).postphys_event = ((s as any).daystart ?? 0);
    qspGoto(s, 'Zvereva_sub_1', 'showers');
  }
  qspCall(s, 'core_library', 'setloc', 'gschool_lessons4', 'postphys2');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/school/gym/locker/postphys${(Math.floor(Math.random() * 4) + 1)}.jpg`);
  scene.text('You enter the girls locker room and find most of the other girls already inside, undressing, changing, heading for or returning from the showers, or simply chatting with each other. You ignore the girls in various states of undress around you, find your locker, and start to take off your clothes.');
  qspCall(s, 'gschool_gossip', 'gym');
  // TODO-QSP: end
  scene.actions([
    { label: 'Have a shower', goto: ['gschool_lessons4', 'shower'] },
    { label: 'Get dressed', goto: ['gschool_lessons4', 'dress'] },
  ]);
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).shower_shave = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/gym/shower/showers.jpg');
  scene.text('After stripping from your clothes, you gather up your towel, washcloth and soap, and head to the showers; you\'re greeted by wafts of steam and several girls giggling and gossiping among themselves, oblivious to your existence.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gschool_lessons4', 'shower2'] },
  ]);
  scene.build();
}

function enterShower2(s: GameState, scene: SceneBuilder): void {
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = ((s as any).mc_inventory['shampoo'] ?? 0) + (1);
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  // TODO-QSP: :gymshower_loop
  (s as any).gymshower = (Math.floor(Math.random() * 10) + 1);
  if (((s as any).gymshower ?? 0) === 1) {
    scene.img('images/locations/pavlovsk/school/gym/shower/showerspank.mp4');
    scene.text('You pick one of the empty shower heads at random and turn the water on, letting it pour over you and run down your body, caressing you in the relaxing way that is unique to hot showers - after PE, this feels simply great. After spending a few minutes basking in the water, you lather up your body with soap. You barely pay any attention to the other girls showering with you, their conversations mostly drowned out by the sound of the shower.');
    scene.text('As you wash off the soap, you turn to see Albina bending over to let Bella spank her; most of the girls stop what they\'re doing to watch. After several fairly hard smacks that echo into the room, they stop and laugh about it as Albina rubs her ass. You turn back and finish your shower as Bella and Albina giggle at each other.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).gymshower ?? 0) === 2) {
      scene.img('images/locations/pavlovsk/school/gym/shower/picture.jpg');
      scene.text('You pick one of the empty shower heads at random and turn the water on, letting it pour over you and run down your body, caressing you in the relaxing way that\'s unique to hot showers - after PE, this feels simply great. After spending a few minutes basking in the water, you lather up your body with soap. You barely pay any attention to the other girls showering with you, their conversations mostly drowned out by the sound of the shower.');
      scene.text('As you wash off the soap, you turn just in time to see Christina holding up her phone and taking pictures. All the girls quickly notice. Some laugh and others quickly finish and leave as everyone except Anushka covers up. After a few laughs and some good-natured yelling, Christina stops and everyone goes back to showering.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).gymshower ?? 0) === 3) {
        scene.img('images/locations/pavlovsk/school/gym/sex/aylnushkiss.jpg');
        scene.text('You pick one of the empty shower heads at random and turn the water on, letting it pour over you and run down your body, caressing you in the relaxing way that is unique to hot showers - after PE, this feels simply great. After spending a few minutes basking in the water, you lather up your body with soap. You barely pay any attention to the other girls showering with you, their conversations mostly drowned out by the sound of the shower.');
        scene.text('As you wash off the soap, you turn to see Anushka and Aylona sharing a kiss under one of the shower heads. Several other girls notice and a few whistle, make cat calls or yell encouragements, but others look disgusted.');
        scene.text('"Stop that, you fucking dykes!" Katyusha scowls. "That\'s fucking disgusting!"');
        scene.text('Anushka looks at Katyusha, makes a V with her fingers and sticks her tongue between them, wiggling it back and forth. Katyusha glares at her, then shakes her head, turns off the water and walks into the locker room. Anushka and Aylona laugh about it before they go back to showering.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).gymshower ?? 0) === 4  &&  ((s as any).npc_grupTipe ?? 0)?.['A25'] === 5) {
          scene.img('images/locations/pavlovsk/school/gym/sex/sonia_busted_1.jpg');
          scene.text('As you shower, you catch of a glimpse of Lena and Lera up to their usual tricks. Lera is on her knees with her face buried in Lena\'s crotch, who is clearly enjoying herself. Several of the other girls give disgusted looks at what they\'re seeing. As it\'s something you\'ve seen dozens of times before, you ignore them and go back to cleaning yourself, but are interrupted by Lena calling someone out. You turn to see her getting up in Sonia\'s face, who has her fingers buried deep inside her pussy.');
          scene.text('"What a horny little slut you are! You suck my brother\'s dick every day, so why don\'t you let me have a turn?" she says before forcefully dragging Sonia out into the middle of the room and pushing her onto her knees.');
          scene.text('Sonia doesn\'t resist or even hesitate and immediately buries her face right into Lena\'s crotch. Albina, Bella and Vicky are among the group of girls who look in disgust before walking out to get dressed.');
          qspCall(s, 'arousal', 'erotic_nudity', (-3));
          qspCall(s, 'stat', '');
          if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
            scene.actions([
              { label: 'Try to leave unnoticed', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A20');
    qspCall(st, 'npcStat', 'A21', 'a');
    qspCall(st, 'npcStat', 'A24', 'b');
    qspCall(st, 'npcgeneratec', '', 1, 'A girl in the shower', ((st as any).age ?? 0), 1, 1);
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0), 'c');
    scene.img('images/locations/pavlovsk/school/gym/sex/chris_sveta.jpg');
    scene.text('You try slipping out in the crowd, hoping to avoid getting involved, but a hand grabs you, drags you back to the middle of the room and shoves you down next to Sonia.');
    scene.text('"Look girls, now we\'ve got TWO sluts to have fun with!" Lera says mockingly before walking up to you and spreading her pussy, her clit exposed and awaiting your tongue as you stare up at her.');
    scene.text('"What? You\'ll suck the boys off, but won\'t eat us out? Get to it, you fucking whore!" she scowls before delivering a stinging smack to your face. With no way to escape, you resign yourself to the humiliation and start licking Lera\'s pussy. She wants more, however, and grabs your hair in her hands before she starts roughly grinding her crotch against your face, smearing you with her wetness before she starts quickly rubbing her clit. A shower of pussy juice then splashes across your face as Lera orgasms hard.');
    scene.text('When she\'s done, she pulls your head up by your chin and slaps you. "Good slut," is all she says before Pauline takes her place.');
    scene.text('The group of girls surrounding you is too big for you to tell how much time passes or how many girls cum on you, but eventually they\'ve all had a turn with you or Sonia and start throwing crude insults at both of you. Sonia doesn\'t care and is furiously fingering herself next to you. Once the girls have gone, you ignore Sonia and run for a shower, cleaning the sticky juices from your face and hair.');
    qspCall(st, 'arousal', 'cuni_give', (-2), ((st as any).npcID ?? 0), 'lesbian', 'sub', 'group', 'humiliation');
    qspCall(st, 'arousal', 'cuni_give', (-2), ((st as any).npcID1 ?? 0), 'lesbian', 'sub', 'group', 'humiliation');
    qspCall(st, 'arousal', 'cuni_give', (-2), ((st as any).npcID2 ?? 0), 'lesbian', 'sub', 'group', 'humiliation');
    qspCall(st, 'arousal', 'cuni_give', (-2), ((st as any).npcID3 ?? 0), 'lesbian', 'sub', 'group', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Return to the locker room', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/outcast.jpg');
    scene.text('By the time you enter the locker room, only a small group of girls remain, who laugh at and mock you further while showing you a video of the moment a girl lets out a huge squirt on your face.');
    scene.text('Not knowing how to feel, you quietly get dressed in the corner before running out of the locker room as fast as you can.');
    scene.text('If you want to change clothes or do your make-up, you\'ll need to go home or wait until the bullies have left and come back.');
    scene.actions([
      { label: 'Flee the locker room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'gschool_grounds', 'main');
  } },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).christinaQW ?? 0)?.['fight'] === -1  ||  ((s as any).christinaQW ?? 0)?.['submit'] === 1) {
              scene.actions([
                { label: 'Try to leave unnoticed', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A18');
    qspCall(st, 'npcgeneratec', '', 1, 'A girl in the shower', ((st as any).age ?? 0), 1, 1);
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0), 'a');
    qspCall(st, 'npcgeneratec', '', 1, 'A girl in the shower', ((st as any).age ?? 0), 1, 1);
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0), 'b');
    qspCall(st, 'npcgeneratec', '', 1, 'A girl in the shower', ((st as any).age ?? 0), 1, 1);
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0), 'c');
    scene.img('images/locations/pavlovsk/school/gym/sex/chris_sveta.jpg');
    scene.text('You try slipping out in the crowd, hoping to avoid getting involved, but a hand grabs you, drags you back to the middle of the room and shoves you down next to Sonia.');
    scene.text('You look up, and to your despair, see that it was Christina. "Let\'s make it a party, girls! Now we have TWO sluts to eat us out!" she says mockingly before walking up to you and spreading her pussy, her clit exposed and awaiting your tongue.');
    scene.text('With no way to escape, you resign yourself to the humiliation and start licking Christina\'s pussy. She wants more, however, and grabs your hair in her hands before she starts roughly grinding her crotch against your face, smearing you with her wetness before she starts quickly rubbing her clit.');
    scene.text('A shower of pussy juice then splashes across your face as she orgasms hard, then slams your face back into her crotch. "Lick me clean, bitch! I want you to drink every last drop of my cum!" When she\'s finally done, she pulls your head up by your chin and slaps you hard. "Good slut," is all she says before another girl takes her place.');
    scene.text('The group of girls surrounding you is too big for you to tell how much time passes or how many girls cum on you, but eventually they\'ve all had a turn with you or Sonia and start throwing crude insults at both of you. Sonia doesn\'t care and is furiously fingering herself next to you. Once the girls have gone, you ignore Sonia and quickly run for a shower, cleaning the sticky juices from your face and hair.');
    qspCall(st, 'arousal', 'cuni_give', (-2), ((st as any).npcID ?? 0), 'lesbian', 'sub', 'group', 'humiliation');
    qspCall(st, 'arousal', 'cuni_give', (-2), ((st as any).npcID1 ?? 0), 'lesbian', 'sub', 'group', 'humiliation');
    qspCall(st, 'arousal', 'cuni_give', (-2), ((st as any).npcID2 ?? 0), 'lesbian', 'sub', 'group', 'humiliation');
    qspCall(st, 'arousal', 'cuni_give', (-2), ((st as any).npcID3 ?? 0), 'lesbian', 'sub', 'group', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Return to the locker room', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/outcast.jpg');
    scene.text('By the time you enter the locker room, only a small group of girls remain, who laugh at and mock you further while showing you a video of the moment a girl lets out a huge squirt on your face. Feeling humiliated, you quickly get dressed before fleeing from the locker room, tears welling up in your eyes.');
    scene.text('If you want to change clothes or do your make-up, you\'ll need to go home or wait until the bullies have left and come back.');
    scene.actions([
      { label: 'Flee in shame', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'gschool_grounds', 'main');
  } },
    ]);
  } },
    ]);
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/locker/lockerroom.jpg');
    scene.text('You quickly join them and hurry out of the showers to your locker.');
    scene.text('"Such a dirty, desperate bitch! Not only hungry for dick, but pussy too?" Bella says mockingly.');
    scene.text('Albina scoffs in response. "I took pity on her at first and tried helping her out, but she wouldn\'t even stop to listen to me. Too eager to run and suck dick like the pathetic slut that she\'s become. Let the fucking whore get on with it I say."');
    scene.text('The rest of the girls offer their opinions as you all get dressed and leave, the sounds of the girls having their way with Sonia echoing from the showers.');
    scene.actions([
      { label: 'Finish dressing', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'gschool_lessons4', 'post_dress');
  } },
    ]);
  } },
                { label: 'Stay', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/sonia_busted_2.jpg');
    scene.text('You choose to stay and watch to see what happens. Lera, Pauline, Christina and Lina are among the large group of girls surrounding Lena and Sonia, either watching in interest or filming it. Lariska is quietly standing off to the side, clearly not wanting to get involved but not wanting to leave Christina\'s side either.');
    scene.text('Lena is enjoying having Sonia go down on her and really makes her eat her out before she pulls Sonia off of her and orgasms, squirting across Sonia\'s face. When she\'s finished, she gives Sonia a firm slap and moves to the side, inviting someone else to have a go.');
    scene.text('Lera, who has been masturbating as she watches, walks up to Sonia and also squirts on her before sitting on her face and making her eat her pussy as she rides through her orgasm. Once her orgasm has passed, she climbs off of Sonia and gives her a stinging slap on the face. "Good for nothing whore!" she snarls before stepping aside to let Christina take her place.');
    qspCall(st, 'arousal', 'erotic_nudity', (-3));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stop watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/locker/lockerroom.jpg');
    scene.text('You\'ve seen enough and quietly slip out of the showers into the locker room. You pass by Lariska on your way, who doesn\'t seem to know what to do and looks everywhere except for at the action.');
    scene.text('The girls who walked out have already gone, so you get dressed and leave as the sounds of Christina loudly orgasming and the other girls laughing and expressing amazement echo into the room.');
    scene.actions([
      { label: 'Finish dressing', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'gschool_lessons4', 'post_dress');
  } },
    ]);
  } },
      { label: 'Wait your turn', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/sonia_busted_3.jpg');
    scene.text('You\'re getting incredibly aroused watching this show and know where it\'s going. You follow the other girls in masturbating as you watch and wait your turn, Christina soon reaching her explosive orgasm and drenching Sonia in a shower of pussy juice as she moans loudly. The other girls express their amazement while Sonia looks to be greatly enjoying herself.');
    scene.text('Pauline, Lina and a few other girls take their turns squirting over Sonia as you continue to rub your clit and finger yourself. Eventually, you feel your orgasm building and step up to Sonia as another girl finishes.');
    scene.text('You\'re surprised when she suddenly starts licking your pussy as you stand above her. She\'s <i>really</i> good at this and you quickly feel yourself about to cum, so you pull her face out of your crotch and rub your engorged clit to bring yourself to orgasm.');
    (st as any).orgasm_txt = 'You moan loudly as your pussy explodes and you squirt your juice all over Sonia\'s already drenched face and into her mouth, Sonia happily taking it all and swallowing it.';
    (st as any).orgasm_or = 'custom';
    scene.text('When you finish cumming, Sonia buries herself back in your pussy and starts licking you again. The pleasure is too good to stop her and for a few seconds you weakly stand there, having had one of the best orgasms in your life. You then somewhat reluctantly step off of her and let another girl have a go with her.');
    scene.text('Once the last few girls have had their turn, you all look down on Sonia, who is covered from head to breasts in girl cum, her cheeks bright red from all the slaps she received. She ignores the crude insults being thrown down at her and instead focuses all her attention on vigorously fingering herself. The group insults her even more upon seeing this and a few even spit on her face and in her mouth, but she doesn\'t seem to care and makes no effort to resist.');
    scene.text('You then all leave her sitting there and head to the lockers to get changed, where the girls all continue to laugh at and mock Sonia while showing videos to each other. You finish getting dressed and head out.');
    qspCall(st, 'arousal', 'cuni', (-8), 'lesbian', 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish dressing', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'gschool_lessons4', 'post_dress');
  } },
    ]);
  } },
    ]);
  } },
              ]);
            }
          }
        } else {
          if (((s as any).gymshower ?? 0) >= 5  &&  ((s as any).gymshower ?? 0) <= 7) {
            if (((s as any).pcs_pubes ?? 0) >= 40) {
              qspGoto(s, 'gschool_lessons4', 'pube_bully');
            } else {
              if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
                qspGoto(s, 'gschool_lessons4', 'pube_compliment');
              } else {
                if (((s as any).pcs_pubes ?? 0) > 25) {
                  qspGoto(s, 'gschool_lessons4', 'pube_bully');
                } else {
                  // TODO-QSP: jump 'gymshower_loop'
                }
              }
            }
          } else {
            scene.img('images/shared/home/bathroom/dush.mp4');
            scene.text('You pick one of the empty shower heads at random and turn the water on, letting it pour over you, and rinse the sweat from your body. After a tiring gym class, the hot water feels great, soothing your aching muscles and relaxing your mind. After a few minutes of enjoyment, you grab some soap and start lathering yourself up. You quickly become lost in the task, the sound of your scrubbing mixing with the squeak of faucets, the slap of your classmates feet across the tile floor, and the endless white noise of cascading water.');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterPubeBully(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (5);
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (2);
  ((s as any).pcs_memory = (s as any).pcs_memory ?? {})['school_shower_bully_pubes'] = ((s as any).daystart ?? 0);
  scene.img('images/locations/pavlovsk/school/gym/shower/postphyssho2.jpg');
  scene.text('As you step into the shower, some girls turn to look at you and start laughing.');
  if (((s as any).grupTipe ?? 0) === 3) {
    scene.text('"I knew nerds could be unfashionable, but I didn\'t know they were <i>animals</i>," Bella snickers.');
    scene.text('"Don\'t be mean, Bella. <i>She\'s</i> not an animal. Just the rat between her legs," Irina laughs loudly, prompting Stasya to join in.');
    scene.text('"You\'d need a chainsaw to trim that!"');
  } else {
    // TODO-QSP: dynamic text: "Seriously <<$pcs_nickname>>?" Bella scoffs. "Waxing isn''t just for floors you ...
    scene.text(`"Seriously ${((s as any).pcs_nickname || '')}?" Bella scoffs. "Waxing isn't just for floors you know!"`);
    scene.text('"Is that pubic hair or a gorilla between her legs?" Irina laughs loudly, prompting Stasya to join in.');
    scene.text('"You\'d need a chainsaw to trim that!"');
  }
  scene.text('Other girls in the room uncomfortably ignore the exchange, pretending not to hear either because they don\'t want to get involved or are just trying to avoid becoming a target themselves.');
  if (((s as any).pcs_inhib ?? 0) < 40) {
    qspCall(s, 'willpower', 'skill_base', 'inhib', 'self', 'medium');
  } else {
    (s as any).will_cost = 0;
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Ignore them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Ignore them', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) + (4);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (2);
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You ignore them completely, paying no heed as you turn on the faucet and start rinsing off. In turn, they continue to sling insults at you.');
    // TODO-QSP: dynamic text: "Tell me <<$pcs_nickname>>, do you need a vacuum cleaner to wash that rug?" Irin...
    scene.text(`"Tell me ${((st as any).pcs_nickname || '')}, do you need a vacuum cleaner to wash that rug?" Irina giggles.`);
    scene.text('"Or is it dry clean only?" Bella adds on with a smirk.');
    scene.text('"More like dog shampoo," scoffs Stasya.');
    scene.text('Their words wash over you as easily as the water from the shower and you calmly soap yourself up, making sure to get a good lather under your armpits and between your legs. You were just in gym class after all, and wouldn\'t want to leave any errant smells.');
    scene.text('The girls make a few more half-hearted attempts to get under your skin, but as you continue ignoring their jabs without reaction they grow bored and turn back to gossiping amongst themselves.');
    if (((st as any).pcs_inhib ?? 0) < 40) {
      scene.text('<i>Finally…</i> you think, letting out a quiet sigh of relief and finish your shower in peace.');
    } else {
      scene.text('You step back underneath the showerhead and let it rinse the suds from your body. Feeling clean and refreshed, you grab your towel and head back to the lockers, the giggling gossip girls behind you already forgotten.');
    }
    scene.actions([
      { label: 'Return to the locker room', goto: ['gschool_post_shower', 'post_shower'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Take the abuse', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'small');
    scene.img('images/locations/pavlovsk/school/gym/shower/nudepic.jpg');
    scene.text('You try to ignore their insults, but it really gets under your skin and it shows. Seeing the impact, they double down on their abuse.');
    scene.text('"If I\'ve got a landing strip, what does she have? A farmer\'s field?"');
    scene.text('"She probably lets it grow out like that because she doesn\'t want to let boys know she\'s got beef curtains down there."');
    scene.text('"Ha! Are you kidding? What boy would want to fuck a furball like that? They probably see it and run away!"');
    scene.text('They cackle to themselves while you miserably douse your head under the shower, trying to drown out their hurtful words.');
    scene.actions([
      { label: 'Return to the locker room', goto: ['gschool_post_shower', 'post_shower'] },
    ]);
  } },
    { label: 'Tell them to fuck off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/shower/postphyssho1.jpg');
    if (((st as any).grupTipe ?? 0) === 3  ||  ((st as any).grupTipe ?? 0) === 5) {
      scene.text('"Would you <i>fuck</i> off?" you hiss at them, twisting the faucet open a little harder than you intended. The smile vanishes from Bella\'s lips as she steps up to your face. You instinctively look away.');
      scene.text('"What did you say to me, you little bitch? Watch your mouth, <i>cunt</i>," she spits. "Unless you want us to fuck your life up."');
      scene.text('You don\'t meet her gaze. You know the popular girls could destroy your reputation in a heartbeat, so you just start taking your shower and ignore them as best you can. Your reaction seems to have the made things worse and they double down now that they know they\'re getting under your skin.');
      scene.text('"That\'s the only kind of fuck she can get with that <i>jungle</i> she has down there!" Irina taunts.');
      scene.text('"Probably has a little guide that tells you where to find her pussy under all that," Bella smirks, turning back to her friends.');
      scene.text('"And a machete to hack your way through too!" Stasya adds.');
      scene.text('They cackle in sadistic glee and you spend the rest of your shower blushing, your face somehow feeling hotter than the water streaming down it.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4  ||  ((st as any).grupTipe ?? 0) === 2) {
        scene.text('"Fuck off!" you hiss at them, twisting the faucet open a little harder than you intended. Unfortunately, your reaction seems to have the opposite effect you hoped for and they double down now that they know they\'re getting under your skin.');
        scene.text('"That\'s the only kind of fuck you can get with a <i>jungle</i> like that down there!" Irina taunts.');
        scene.text('"She probably has a little guide in there telling you where to find her pussy under all that!" Bella says.');
        scene.text('"And a machete to hack your way through too!" Stasya adds.');
        scene.text('You stop and take a few steps closer to them, with your hands balled up into fists. They stop their cackling when you get close. "I said fuck off!"');
        scene.text('Bella smiles innocently. "What? Can\'t take a joke? Fine fine, don\'t get your panties in a twist." They leave you in peace for the rest of the shower and instead spend the time gossiping about a variety of stuff.');
      } else {
        scene.text('"Fuck off!" you hiss at them, twisting the faucet open a little harder than you intended to. Unfortunately, your reaction seems to have the opposite effect you hoped for and they double down now that they know they\'re getting under your skin.');
        scene.text('"What? Can\'t take a joke?" Irina says with fake pouty lips. "Well then you shouldn\'t come to school looking like that! It\'s shameful! The only kind of fuck you can get with a <i>jungle</i> like that down there is if you let Lesco or Petia have a go!"');
        scene.text('"She probably has a little guide in there telling the boys where to find her pussy under all that!" Bella says.');
        scene.text('"And a machete to hack their way through too!" Stasya laughs.');
        scene.text('They cackle in sadistic glee and you spend the rest of your shower fuming, your face somehow feeling hotter than the water streaming down it.');
      }
    }
    scene.actions([
      { label: 'Return to the locker room', goto: ['gschool_post_shower', 'post_shower'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPubeCompliment(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/pavlovsk/school/gym/shower/postphyssho${(Math.floor(Math.random() * 3) + 1)}.jpg`);
  scene.text('As you step into the shower, some girls turn to look at you and smile.');
  if (((s as any).pube_style ?? 0)?.['word'] === 'shaved') {
    // TODO-QSP: dynamic text: "Ugh, I''m so jealous <<$pcs_nickname>>!" Bella says. "You have <i>such</i> a ni...
    scene.text(`"Ugh, I'm so jealous ${((s as any).pcs_nickname || '')}!" Bella says. "You have <i>such</i> a nice pussy!"`);
    scene.text('"Not as nice as mine," Irina grins, drawing attention to her hips where she proudly displays the neatly trimmed landing strip atop her mound. "But she\'s definitely got a nice set of lips down there."');
    scene.text('"How do you get it so smooth?" Stasya asks. "Do you shave or wax?"');
    scene.text('The girls spend a few more minutes fawning over the loveliness of your hairless pussy while you shower in both the water and their compliments until you all decide to towel off together.');
  } else {
    if (((s as any).pube_style ?? 0)?.['word'] === 'stubble') {
      scene.text('"Looks like somebody forgot to shave today," Bella snickers while looking at your stubbly pussy. She turns to face you, subtly drawing attention to her own hairless pussy.');
      scene.text('"Maybe she\'s finally got wise and learned <i>real</i> fashion sense," Irina grins, blatantly putting her neatly trimmed landing strip on display. "Getting an adult trim down there."');
      scene.text('"Ugh, you\'re so old fashioned," Stasya coos. Her voice is sweet, but is laced thick with a patronizing tone. "Don\'t you know? Clean pussies are all the rage right now."');
      scene.text('As fast as your pubic stubble drew their attention, it\'s already gone as they descend into bickering about which of <i>their</i> pussies are the sexiest and you end up taking your shower without anyone to talk to.');
    } else {
      if (((s as any).pube_style ?? 0)?.['word'] === 'patch') {
        // TODO-QSP: dynamic text: "Oh my gosh, <<$pcs_nickname>>!" Bella squeals. All eyes in the room follow her ...
        scene.text(`"Oh my gosh, ${((s as any).pcs_nickname || '')}!" Bella squeals. All eyes in the room follow her gaze to home in on the tidy patch of hair between your legs. "Your pubes are <i>so cute!</i>"`);
        scene.text('"Finally, someone else with a sense of style," Irina grins, turning to show off her neatly trimmed landing strip to the other girls.');
        scene.text('"I guess it\'s pretty cute," Stasya says in a sweet voice with undertones of jealousy and superiority. "Andrey likes me clean shaven. Isn\'t that what all boys want?"');
        scene.text('The girls spend a few more minutes fawning over your bush while you shower in both the water and their compliments until you all decide to towel off together.');
      } else {
        if (((s as any).pube_style ?? 0)?.['word'] === 'trimmed') {
          if (((s as any).pube_style ?? 0)?.['shape'] === 'bush') {
            scene.text('"That\'s a nice bush you\'ve got there," Bella smirks. All eyes in the room follow her gaze to home in on the neatly trimmed section of hair between your legs. "You do a good job of keeping it tidy. Very sexy. Almost makes me want to try growing one myself."');
            scene.text('"It would be even sexier if she trimmed the edges off," Irina grins, blatantly turning to show off her thin landing strip.');
            scene.text('"Bella and I know what boys want," Stasya says in a sweet voice with undertones of superiority. "Andrey says he won\'t fuck me unless I\'m clean shaven. Aren\'t all boys the same?"');
            scene.text('As fast as your bush drew their attention, it\'s already gone as they descend into bickering about how boys like their girls shaven and you end up taking your shower without anyone to talk to.');
          } else {
            // TODO-QSP: dynamic text: "Oh my gosh!" Bella squeals. All eyes in the room follow her gaze to home in on ...
            scene.text(`"Oh my gosh!" Bella squeals. All eyes in the room follow her gaze to home in on the tidy ${((s as any).pube_style ?? 0)?.['shape'] ?? ''} of hair between your legs. "Your pubes are <i>so cute!</i>"`);
            if (((s as any).pube_style ?? 0)?.['shape'] === 'landing strip') {
              scene.text('"Finally, someone <i>else</i> with a sense of style," Irina grins, blatantly turning to show off her own landing strip to the other girls.');
              scene.text('"I guess it\'s pretty cute," Stasya says in a sweet voice with undertones of jealousy and superiority. "Andrey likes me clean shaven. Isn\'t that what all boys want?"');
            } else {
              scene.text('"Oh wow." Irina actually seems impressed. "That <i>is</i> super cute! It\'s practically a work of art!"');
              scene.text('"Does it take you a long time to get the shape even?" Stasya asks, looking awed.');
            }
            scene.text('The girls spend a few more minutes fawning over your specially trimmed pubes while you shower in both the water and their compliments until you all decide to towel off together.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the locker room', goto: ['gschool_post_shower', 'post_shower'] },
  ]);
  scene.build();
}

function enterWhoreBully(s: GameState, scene: SceneBuilder): void {
  ((s as any).pcs_memory = (s as any).pcs_memory ?? {})['school_shower_bully_whore'] = ((s as any).daystart ?? 0);
  (s as any).school_shower_bully_whore = ((s as any).school_shower_bully_whore ?? 0) + (1);
  scene.img('images/locations/pavlovsk/school/gym/shower/bully_slap1.jpg');
  scene.text('You pick one of the empty shower heads which is near the other end of the shower.');
  scene.text('Without warning, you suddenly feel a hard sting on your ass.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yelp', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/shower/bully_slap2.jpg');
    scene.text('You yelp in pain, swiftly turning to see Irina casually turn back to her shower. Keeping an eye on her, you take another step towards your chosen faucet when another hand whips across your backside. You whirl, seeing Stasya trying to hide an expression on her face. You take another step when another girl reaches out and spanks your ass.');
    scene.text('"Ow! What the fuck is your problem?!" you finally shout, looking around at everyone in bewilderment.');
    scene.text('"We\'re just being polite." You turn and see Bella standing with a dull expression on her face. "You\'re a whore."');
    scene.text('She says it completely flat, like it\'s the same as saying the sky is blue. "Whores get spanked. It\'s what they like, isn\'t it? We just want to treat you the way you want to be treated."');
    scene.text('To punctuate her point, she smiles and reaches forward, giving your ass a slap so hard and so sharp that it burns. Then, without another word, she turns back to her shower.');
    scene.actions([
      { label: 'Cry', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/shower/nudepic.jpg');
    scene.text('Caught in the middle, you have no choice to but to keep heading towards the shower you chose. The other girls, seemingly egged on by Bella, also reach out to swat your ass along the way. Some of them giggle as they do, but what hurts more are the ones that don\'t. They clap your cheeks with movements so casual they might as well have been giving you a high five in the hallway.');
    scene.text('You finally reach the shower head and turn the faucet on, dousing your face. Hopefully, that way nobody will notice your tears…');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerOptions(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Fume', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/shower/bully_slap1.jpg');
    scene.text('Caught in the middle, you have no choice to but to keep heading towards the shower you chose. The other girls, seemingly egged on by Bella, also reach out to swat your ass along the way. Some of them giggle as they do, but what hurts more are the ones that don\'t. They clap your cheeks with movements so casual they might as well have been giving you a high five in the hallway.');
    scene.text('You finally reach the shower head and turn the faucet on, dousing your face. Hopefully, that way nobody will notice your tears…');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerOptions(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Ignore it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/shower/bully_slap2.jpg');
    scene.text('You do your best to ignore it and keep heading towards the shower you chose. The other girls, seemingly egged on by Bella, also reach out to swat your ass along the way. Some of them giggle as they do, but what hurts more are the ones that don\'t. They clap your cheeks with movements so casual they might as well have been giving you a high five in the hallway.');
    scene.text('You finally reach the shower head and turn the faucet on, dousing your face. Hopefully, that way nobody will notice your tears…');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerOptions(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterShowerOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a long shower', goto: ['gschool_lessons4', 'long_shower'] },
    { label: 'Return to the locker room', goto: ['gschool_post_shower', 'post_shower'] },
    { label: 'Check out the other girls', goto: ['gschool_post_shower', 'post_shower2'] },
  ]);
  scene.build();
}

function enterLongShower(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).shower_shave = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
  scene.text('You enjoy the sensation of the hot water hitting your body and running down it. The steam filling the room gives it an almost sauna-like feel and completely relaxes you. Before you realize it, you find yourself alone in the shower.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep taking a shower', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).longshower = (Math.floor(Math.random() * 10) + 1);
    if (((st as any).longshower ?? 0) === 1  &&  ((st as any).pcs_hotcat ?? 0) >= 6  &&  ((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'mood', 'raise', 'tiny');
      qspCall(st, 'stat', '');
      scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/shower/lazar1.jpg');
      scene.text('You continue showering before you suddenly hear the sound of someone walking into the room.');
      scene.actions([
        { label: 'Look back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/shower/lazar2.jpg');
    // TODO-QSP: dynamic text: You look back and see Lazar standing there with his hard cock in his hand, strok...
    scene.text(`You look back and see Lazar standing there with his hard cock in his hand, stroking it while he watches you shower with a big grin on his face. "Hey ${((st as any).pcs_nickname || '')}! Looking good."`);
    scene.text('Before you can react, he continues talking. "Why don\'t you suck my dick?" he says as he starts walking towards you while still stroking his cock. You can\'t help but stare. It\'s as long and nearly as thick as your forearm.');
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him to get out', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him to get out', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/shower/lazarno.jpg');
    scene.text('"What the fuck are you doing? This is the girls shower, get out!" you yell at him while covering up.');
    scene.text('He stops stroking his dick and puts his hands up with his dick still hanging out. "Okay, okay, no need to yell. I\'ll go." He puts his dick away and then very slowly walks out of the room, looking at your naked body the whole time.');
    scene.text('Once he\'s gone, you wait for a few minutes before you rush to your locker and quickly dry off and get dressed before he comes back.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck his dick', goto: ['gschool_sex', 'lazar_lockerroom'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).longshower ?? 0) === 2  &&  ((st as any).pcs_hotcat ?? 0) >= 5  &&  ((st as any).fame ?? 0)?.['pav_slut'] >= 100  &&  ((st as any).kotovLoveQW ?? 0) !== 1) {
        (st as any).minut = ((st as any).minut ?? 0) + 5;
        qspCall(st, 'mood', 'raise', 'tiny');
        qspCall(st, 'stat', '');
        scene.img('images/locations/pavlovsk/school/gym/sex/vd1.jpg');
        scene.text('You enjoy the sensation of the hot water hitting your body and running down it. The steam filling the room gives it an almost sauna-like feel and completely relaxes you. You continue showering before you suddenly hear the sound of someone walking into the room.');
        scene.actions([
          { label: 'Look back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/sex/vd2.jpg');
    scene.text('You look back and see Vitek and Dan watching you shower with huge smiles on their face. Both of them are wearing only towels, and they both let their towels drop, showing off their dicks. "Get on your knees so you can suck our dicks." Dan orders.');
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'stat', '');
    if (((st as any).grupTipe ?? 0) === 5) {
      qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'willpower', 'sex', 'resist', 'easy');
      } else {
        qspCall(st, 'willpower', 'sex', 'resist', 'medium');
      }
    }
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell them to get out', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell them to get out', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/school/gym/sex/vd2.jpg');
    if (((st as any).grupTipe ?? 0) === 4) {
      scene.text('"What the fuck are you doing? This is the girls shower, get out!" you yell at them.');
      scene.text('They both just laugh. "So what? What are you going to do about it?"');
      scene.text('You give them a hard look. "I mean it, get the fuck out now!"');
      scene.text('Dan starts to say something, but Vitek sighs. "Okay fine, we\'re going. Why do you have to be such a bitch anyway?"');
      scene.text('Without waiting for a response, Vitek walks out while Dan lingers just a moment longer, checking you out before he leaves as well.');
      scene.text('You wait until you hear the door close, then walk to your locker to dry off and get dressed before they come back.');
    } else {
      scene.text('"What are you doing? This is the girls shower, get out!" you yell at them.');
      scene.text('The both just laugh. "So what? What are you going to do about it?"');
      scene.text('You feel yourself start to panic. "I\'ll scream! The coach is still in his office."');
      scene.text('At least you hope he is in case they call your bluff…');
      scene.text('Vitek gives you a hard look and takes a step towards you. You inhale like you\'re about to scream and he stops. "You\'re going to regret this, bitch!"');
      scene.text('He then storms out while Dan lingers just a moment longer, checking you out before he leaves as well. You wait until you hear the door close before you rush to your locker to quickly dry off and get dressed before they come back.');
    }
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Get on your knees', goto: ['gschool_sex', 'vd_lockerroom'] },
    ]);
  } },
        ]);
      } else {
        if (((st as any).longshower ?? 0) === 3  &&  ((st as any).pcs_hotcat ?? 0) >= 5) {
          (st as any).minut = ((st as any).minut ?? 0) + 10;
          qspCall(st, 'mood', 'raise', 'small');
          scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
          scene.text('You enjoy the sensation of the hot water hitting your body and running down it. The steam filling the room gives it an almost sauna-like feel and completely relaxes you. Before long, all you can hear is the shower and you think all the other girls have left, but then you hear a locker open and close.');
          scene.text('After a few minutes, you notice your fingers starting to prune up and decide that it\'s been long enough.');
          scene.actions([
            { label: 'Go to your locker', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka1.jpg');
    scene.text('You go to your locker, but don\'t see or hear anyone. Just as you finish drying your hair, you think you hear something, so you turn off the dryer and listen. You can\'t hear anything now, but you could have sworn there was a sound coming from inside one of the lockers.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petkaleave.jpg');
    scene.text('You ignore the sounds and just chalk it up to your imagination. You go back to getting dressed and you don\'t hear any more noises. It must have been your imagination.');
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
      { label: 'Investigate the noise', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka2.jpg');
    scene.text('You walk over to the locker where you think you heard the noise come from and start peering through the vents as you listen closely. It sounds like… someone breathing?');
    scene.text('"Is anyone there?" you ask, but hear no response. The breathing sound, if it ever existed, has stopped.');
    scene.actions([
      { label: 'Open the locker', goto: ['gschool_sex', 'petka_lockerroom'] },
      { label: 'Ignore it', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petkaleave.jpg');
    scene.text('You shake your head. Your imagination must be going crazy. You go back to getting dressed and don\'t hear any more noises.');
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((st as any).longshower ?? 0) === 4  &&  ((st as any).pcs_hotcat ?? 0) >= 6  &&  ((st as any).npc_rel ?? 0)?.['A23'] >= 70) {
            (st as any).minut = ((st as any).minut ?? 0) + 10;
            qspCall(st, 'mood', 'raise', 'small');
            scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
            scene.text('You enjoy the sensation of the hot water hitting your body and running down it. The steam filling the room gives it an almost sauna-like feel and completely relaxes you. Before long, all you can hear is the shower and you think all the other girls have left, but then you hear a phone ring and then someone talking. You can\'t tell who it is from here.');
            scene.actions([
              { label: 'Go to your locker', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).AlbinaQW ?? 0)?.['voyeur'] === 1) {
      scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerflirt.jpg');
      // TODO-QSP: dynamic text: As you walk into the locker room, you can tell that it''s Albina. ' + iif(Albina...
      scene.text('As you walk into the locker room, you can tell that it\'s Albina. ' + ((((st as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) ? ('She doesn\'t sound very happy as she argues on the phone with her father.') : ('She\'s happily speaking on the phone with someone.')) + ' Once you start drying your hair, you can\'t hear what she\'s saying anymore.');
      scene.text('As you finish drying your hair, she comes around to your side of the lockers wearing only a towel. She smiles at you before dropping the towel, revealing her naked, toned body to you. She then turns around, giving you an even better view of her ass.');
      scene.text('"You like what you see?" she asks teasingly.');
      qspCall(st, 'arousal', 'erotic_nudity', 2);
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/spank.jpg');
    scene.text('There\'s no point lying to her, so you decide to be honest. "Yes, very much. I love looking at you. You\'re very beautiful and I find it hard to resist looking."');
    scene.text('She walks up and turns you around so you\'re facing the lockers before giving your ass a hard slap. "What a dirty girl you are! I\'m going to have to punish you!"');
    scene.text('You\'re barely able to react before she delivers a stinging smack to your ass, causing you to whimper. She continues spanking you until your ass is red and numb.');
    scene.text('You look back and see a devious smile on her face as she licks her lips. "Have you learned your lesson?"');
    // TODO-QSP: dynamic text: You nod and rub your ass as she starts getting dressed. Once she finishes, she g...
    scene.text(`You nod and rub your ass as she starts getting dressed. Once she finishes, she gives you a wink and a smile. "Until next time, ${((st as any).pcs_nickname || '')}."`);
    scene.text('She then walks out the door, leaving you alone to finish getting dressed. You can\'t help but think that she was more than a little aroused.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'pain', 'asscheeks', 'spank', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish getting dressed', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerflirt.jpg');
    scene.text('You shake your head. "You\'re very pretty, but no."');
    scene.text('She arches a shapely brow. "No? Then why do you check me out when I\'m naked?"');
    scene.text('You blush slightly. You didn\'t think anyone noticed you checking out the other girls.');
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Deny it', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerflirt.jpg');
    scene.text('"Sorry, I was just admiring what great shape you\'re in. I didn\'t mean anything by it," you say while shaking your head.');
    scene.text('She just shrugs. "Whatever," she grumbles before she starts getting dressed while ignoring you. You start getting dressed yourself and as soon as she\'s done, she walks out, leaving you alone in the locker room.');
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
      { label: 'Confess your attraction to her', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', 3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/spank.jpg');
    scene.text('You decide to just confess your feelings. "Yeah, sorry. You\'re beautiful and it\'s hard to resist looking at your amazing body."');
    scene.text('She walks up and turns you around so you\'re facing the lockers before giving your ass a hard slap. "What a dirty girl you are! I\'m going to have to punish you!" You\'re barely able to react before she delivers a stinging smack to your ass, causing you to whimper. She continues spanking you until your ass is red and numb. You look back and see a devious smile on her face as she licks her lips. "Have you learned your lesson?"');
    // TODO-QSP: dynamic text: You nod and rub your ass as she starts getting dressed. Once she finishes, she g...
    scene.text(`You nod and rub your ass as she starts getting dressed. Once she finishes, she gives you a wink and a smile. "Until next time, ${((st as any).pcs_nickname || '')}." She then walks out the door, leaving you alone to finish getting dressed. You can't help but think that she was more than a little aroused.`);
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'pain', 'asscheeks', 'spank', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish getting dressed', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).AlbinaQW ?? 0)?.['voyeur'] === 1  &&  ((st as any).npc_had_sex ?? 0)?.['A23']) {
        scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerflirt.jpg');
        // TODO-QSP: dynamic text: As you walk into the locker room, you can tell that it''s Albina. ' + iif(Albina...
        scene.text('As you walk into the locker room, you can tell that it\'s Albina. ' + ((((st as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) ? ('She doesn\'t sound very happy as she argues on the phone with her father.') : ('She\'s happily speaking on the phone with someone.')) + ' Once you start drying your hair, you can\'t hear what she\'s saying anymore.');
        scene.text('As you finish drying your hair, she comes around to your side of the lockers wearing only a towel. She smiles at you before dropping the towel, revealing her naked, toned body to you. She then turns around, giving you an even better view of her ass.');
        scene.text('"You like what you see?" she asks teasingly.');
        qspCall(st, 'arousal', 'erotic_nudity', 2);
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', 3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/spank.jpg');
    scene.text('There\'s no point lying to her, so you decide to be honest. "Yes, very much. I love looking at you. You\'re very beautiful and I find it hard to resist looking."');
    scene.text('She walks up and turns you around so you\'re facing the lockers before giving your ass a hard slap and then a firm squeeze. "What a dirty girl you are! What am I going to do with you?"');
    scene.text('You can tell it\'s a rhetorical question as you feel her hand sliding between your legs.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'npc_relationship', 'modify', 'A23', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerflirt.jpg');
    scene.text('You pull away from her and step back. "What are you doing?"');
    scene.text('She gives you a confused stare. "I thought… Never mind," she says while shaking her head. She starts getting dressed while ignoring you and you do the same. As soon as she\'s done, she walks out, leaving you alone in the locker room.');
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in', goto: ['gschool_sex', 'albina_lockerroom'] },
    ]);
  } },
          { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerflirt.jpg');
    scene.text('You shake your head. "You\'re very pretty, but no."');
    scene.text('She arches a shapely brow. "No? Then why do you check me out when I\'m naked?"');
    scene.text('You blush slightly. You didn\'t think anyone noticed you checking out the other girls.');
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Deny it', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerflirt.jpg');
    scene.text('"Sorry, I was just admiring what great shape you\'re in. I didn\'t mean anything by it," you say while shaking your head.');
    scene.text('She just shrugs. "Whatever," she grumbles before she starts getting dressed while ignoring you, and you do the same. As soon as she\'s done, she walks out, leaving you alone in the locker room.');
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
      { label: 'Confess your attraction to her', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', 3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/spank.jpg');
    scene.text('You decide to just confess your feelings. "Yeah, sorry. You\'re beautiful and it\'s hard to resist looking at your amazing body."');
    scene.text('She walks up and turns you around so you\'re facing the lockers before giving your ass a hard slap and then a firm squeeze. "I know. That\'s why I always teased you and gave you a little show… What a dirty girl you are! What am I going to do with you?"');
    scene.text('You can tell it\'s a rhetorical question as you feel her hand sliding between your legs.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'npc_relationship', 'modify', 'A23', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerflirt.jpg');
    scene.text('You pull away from her and step back. "What are you doing?"');
    scene.text('She gives you a confused stare. "I thought… Never mind," she says while shaking her head. She starts getting dressed while ignoring you and you do the same. As soon as she\'s done, she walks out, leaving you alone in the locker room.');
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in', goto: ['gschool_sex', 'albina_lockerroom'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/getdressed.jpg');
        // TODO-QSP: 'You take your clothes out of your locker and start putting them on. As you get dressed, you can sti...
        scene.text('Just as you finish dressing, she stops talking and walks round to where you are, wearing only a towel. She jumps when she notices you and briefly stares at you, perhaps wondering what you heard before she drops her towel and starts getting dressed while ignoring you.');
        scene.text('You can choose another outfit while you\'re here.');
        scene.actions([
          { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
        ]);
      }
    }
  } },
            ]);
          } else {
            if (((st as any).longshower ?? 0) === 5  &&  ((st as any).pcs_hotcat ?? 0) >= 5  &&  ((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
              (st as any).minut = ((st as any).minut ?? 0) + 10;
              qspCall(st, 'mood', 'raise', 'small');
              scene.img('images/locations/pavlovsk/school/gym/locker/latecoach.jpg');
              scene.text('You enjoy the sensation of the hot water hitting your body and running down it. The steam filling the room gives it an almost sauna-like feel and completely relaxes you. Before long, all you can hear is the shower and you think all the other girls have left, but then you hear some lockers opening and closing. You turn off the shower and go to your locker, where you\'re surprised to find Coach Pavlovich, who turns to look at you as you walk in naked.');
              scene.text('ou quickly cover yourself up as best as you can. He looks surprised, but you\'re not sure if it\'s genuine or not.');
              scene.actions([
                { label: 'What are you doing', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker1.jpg');
    scene.text('"What are you doing in the girls locker room?" you ask.');
    scene.text('"Oh, I didn\'t know anyone was left. I thought the locker room was empty and was just making sure all the lockers were closed," he replies.');
    scene.text('You can\'t help but notice his erection causing his shorts to bulge. His eyes follow your gaze and he smiles when he notices you staring. "A girl with your reputation just can\'t help herself, can you? Go ahead and touch it."');
    qspCall(st, 'willpower', 'sex', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ask him to leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ask him to leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker1.jpg');
    scene.text('"Do you mind? This is the girls locker room and you\'re not supposed to be in here. Please leave," you tell him.');
    scene.text('He pauses before throwing his hands up and leaving.');
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Feel his cock', goto: ['gschool_sex', 'victor_lockerroom'] },
    ]);
  } },
              ]);
            } else {
              (st as any).minut = ((st as any).minut ?? 0) + 10;
              qspCall(st, 'mood', 'raise', 'small');
              scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
              scene.text('The sensation of the hot water hitting your body and running down it, with the steam filling the room giving it an almost sauna-like feel, completely relaxes you. Before long, all you can hear is the shower and you think all the other girls have left. After a few minutes, you notice your fingers starting to prune up and decide that it\'s been long enough. You go to your locker, dry off, and get dressed.');
              scene.actions([
                { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
              ]);
            }
          }
        }
      }
    }
  } },
    { label: 'Go to the locker room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gschool_lessons4', 'long_shower_locker'] },
  ]);
  scene.build();
}

function enterLongShowerLocker(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_lessons4', 'long_shower_locker');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/gym/locker/change.jpg');
  scene.text('You walk from the showers back into the locker room and over to your locker, where you grab your towel and diligently dry off your body. With your hair still wet, you\'re ready to put the blow dryer to use. Once you finish blow drying your hair, you look around and see several other girls have left the showers and are getting dried off or dressed as well. By the time you start to get dressed, all the other girls have already left.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', goto: ['gschool_lessons4', 'post_dress'] },
  ]);
  scene.build();
}

function enterShowerWatchEnd(s: GameState, scene: SceneBuilder): void {
  scene.text('After watching for a few more seconds, you decide you\'ve looked enough and turn back to your shower to turn the faucet off. Grabbing a towel, you start drying off as you pad your way back to your locker.');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the locker room', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['gschool_lessons4', 'dress'] },
  ]);
  scene.build();
}

function enterDress(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = 'dress';
  (s as any).loc = 'gschool_lessons4';
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  (s as any).gymdress = (Math.floor(Math.random() * 20) + 1);
  if (((s as any).gymdress ?? 0) === 1) {
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/locker/lockerflash.jpg');
    scene.text('Several other girls come in from the showers together, wearing their towels. A girl picks up her phone and holds it up to take their picture. When Anushka sees this, she stops and, with a lewd smile, pulls her towel wide open, showing off her naked body as the girl takes the picture. Several girls giggle at Anushka\'s antics while others whistle or cat call.');
    scene.text('You take your clothes out of your locker and start putting them on. This takes longer than expected, however, since you get distracted several times while getting dressed - sometimes by other girls engaging you in a brief conversation, sometimes by someone or something catching your eye. By the time you\'re finished, most of the other girls have already left.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } else {
    if (((s as any).gymdress ?? 0) === 2) {
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/gym/locselfiedan.mp4');
      scene.text('Bella is at the mirror, taking a selfie of herself trying to look sexy. As she does, Albina walks up beside her and starts dancing next to her, bending over and grinding her ass against her. Bella can\'t help but laugh and grind back, and soon both of them are teasing each other and laughing, along with many of the other girls in the locker room that saw the whole thing.');
      scene.text('You take your clothes out of your locker and start putting them on. This takes longer than expected, however, since you get distracted several times while getting dressed - sometimes by other girls engaging you in a brief conversation, sometimes by someone or something catching your eye. By the time you are finished, most of the other girls have already left the locker room.');
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
      ]);
    } else {
      if (((s as any).gymdress ?? 0) === 3) {
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/school/gym/locker/lockerroom.jpg');
        scene.text('You\'re running extra late today and by the time you finally finish dressing, nobody seems to be left in the room or showers. You take a few steps towards the door, convinced that you are the last person here, when you hear a soft moan. At first you think you misheard but… there it is again.');
        scene.actions([
          { label: 'Ignore it', goto: ['gschool_lessons4', 'post_dress'] },
          { label: 'Take a peek', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/school/gym/sex/les${(Math.floor(Math.random() * 3) + 1)}.jpg`);
    scene.text('Curious, you sneak toward the source of the soft, feminine sounds. As you get closer, you are sure you are about to come across some girls making out and, sure enough, when you peek around the next corner, you spy Lena and Lera making out and feeling each other up. Their display of passion is so infectious that you are tempted to join them, but they seem so into each other that you would feel guilty intruding on their tender moment. That doesn\'t make it any less arousing to watch, though.');
    qspCall(st, 'arousal', 'erotic_nudity', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave them in peace', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['gschool_lessons4', 'post_dress'] },
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/school/gym/sex/mast${(Math.floor(Math.random() * 2) + 1)}.mp4`);
    scene.text('As you watch them, you feel yourself getting horny, <b>really</b> horny, and before you know it, you have slipped your hand under your clothes and start masturbating, they oblivious to their aroused observer. You pull some of your clothes away to make it easier to fondle yourself. You stifle your moans as best you can, but you don\'t think they can possibly hear them over their own, too absorbed in kissing and caressing each other to notice anything around them.');
    scene.text('Your fingers make their rounds around your clit in smaller, harder circles, your eyes glued to the lovers and you feel yourself getting closer to climax.');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'voyeur_sex', 10);
    (st as any).orgasm_txt = 'About a second later, you feel like a small explosive went off inside you and you have to clamp one of your hands over your mouth to keep yourself from shouting as the other continues to rub your clit. The climax hits you hard and your legs nearly give out, your whole body shaking and shuddering like an actual shockwave is passing through it. You are momentarily blinded by the pleasure, but after a few seconds, you get yourself back under control.';
    qspCall(st, 'arousal', 'clit_finger', (-10), 'masturbate');
    scene.text('As you do, you hear their joined moans of pleasure grow to a crescendo that fills the room. Then, all goes quiet. You peek around the corner again and watch them talk softly for a moment, exchanging final kisses before they get up to get dressed. You quickly straighten out your clothes as well and head for the exit as quietly as you can - you don\'t want them to know you were spying on them.');
    (st as any).orgasm_txt = '';
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Return', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).gymdress ?? 0) === 4) {
          scene.img(`images/locations/pavlovsk/school/gym/locker/nudepic${(Math.floor(Math.random() * 2) + 1)}.jpg`);
          scene.text('Still naked, you hear a couple of girls giggling, so you turn to look at them, but they\'re not looking at you. Confused, you follow their collective gaze and see Christina standing with her phone out. Glancing back at them, you see them looking at you and giggling again - obviously, something happened that you missed; something that they thought was funny. You wonder what it was.');
          scene.actions([
            { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
          ]);
        } else {
          if (((s as any).gymdress ?? 0) === 5) {
            scene.img('images/locations/pavlovsk/school/gym/locker/boysraid.jpg');
            scene.text('As you start to get dressed, most of the girls around you are still in their underwear or naked when the locker room door suddenly bursts open. You and everyone else turn to see Vitek and Dan standing in the doorway leering at everyone. Several girls cover up, a few run around the corner out of view and others yell at them, which only makes them laugh.');
            scene.text('Albina, wearing only her g-string thong, walks up to them and blocks the doorway. "Get the fuck out of here, you fucking pervs!" she says in a low, menacing tone.');
            scene.text('Dan snorts. "Or what?"');
            scene.text('Vitek laughs. "Don\'t get your cute little thong in a twist. We just wanted to know if any of you girls wanted to take part in a \'private workout\'," he says lewdly and reaches out to her exposed breast.');
            scene.text('Albina responds by grabbing his hand and painfully twisting it. "How\'s this for a workout?" she shouts before swiftly swinging her leg up and kicking Vitek straight in the balls. He yelps in pain before hobbling out of the doorway, clutching his crotch. Dan follows him and Albina slams the door. "Fucking perverted assholes…" she mutters.');
            scene.text('With that taken care of, the girls go back to getting dressed. You notice most of them do it quicker than normal, seemingly afraid of a repeat visit.');
            scene.actions([
              { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
            ]);
          } else {
            if (((s as any).gymdress ?? 0) === 6) {
              scene.img(`images/locations/pavlovsk/school/gym/locker/christinaselfie${(Math.floor(Math.random() * 3) + 1)}.jpg`);
              if (((s as any).christinaQW ?? 0)?.['fight'] === 1  ||  ((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
                scene.text('As you get dressed, you overhear some girls talking to each other.');
                scene.text('"Come and take a picture with me. I want to send something to my boyfriend."');
                scene.text('Giggling, two of her friends walk over and pose with her.');
              } else {
                scene.text('As you get dressed, you overhear Christina. "Damn, we look good! I look really amazing." You turn and see her checking out her naked body in the mirror, along with Lariska and Lina.');
                scene.text('"You look amazing as always Christina!" Lina says.');
                scene.text('Christina grabs her phone. "Let\'s take a selfie."');
                scene.text('The three of them pose several times as Christina takes several selfies of the three of them naked. Lariska even takes a few herself, which Christina doesn\'t seem to mind. They go on for several minutes about how great they look, although it\'s mostly just Lina and Lariska stroking Christina\'s ego.');
              }
              scene.actions([
                { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
              ]);
            } else {
              if (((s as any).gymdress ?? 0) === 7) {
                scene.img('images/locations/pavlovsk/school/gym/locker/alynushwedgie.jpg');
                scene.text('As you finish getting dressed, you turn around to see Alyona sneak up behind Anushka, grab hold of her panties with both hands and yank them up, giving Anushka a major wedgie. Several other girls laugh as Anushka tries to get away and push Aylona\'s hands back down so her panties aren\'t all the way up her ass crack. After a little bit of struggling and Anushka calling Aylona all kinds of names, Aylona finally lets go and collapses on one of the benches laughing as Anushka half heartedly cusses her out as she picks her panties out of her ass crack.');
                scene.actions([
                  { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
                ]);
              } else {
                if (((s as any).gymdress ?? 0) === 8) {
                  qspCall(s, 'mood', 'raise', 'small');
                  qspCall(s, 'stat', '');
                  scene.img('images/locations/pavlovsk/school/gym/locker/applegirl.jpg');
                  scene.text('You don\'t know why, but Christina says something to Lina which causes Lina to lie down on her stomach on one of the benches. Christina then sticks an apple in her mouth and proceeds to ignore her.');
                  scene.text('A few minutes pass once Christina is fully clothed, she walks back over and uses her belt to smack Lina hard on the ass, making her wince in pain. "Have you learned your lesson?" she asks Lina, who enthusiastically nods her head.');
                  scene.text('Lariska stands watching from a safe distance as Christina yanks hard on Lina\'s hair. "Are you sure?" Lina nods even more enthusiastically.');
                  scene.text('Christina gives her a final look and puts her belt on. "Okay fine, but don\'t do it again."');
                  scene.text('Lina gets up and takes the apple out of her mouth while taking a bite. The three of them walk out together, with Lina and Lariska sharing the apple.');
                  scene.actions([
                    { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
                  ]);
                } else {
                  if (((s as any).gymdress ?? 0) === 9) {
                    scene.img('images/locations/pavlovsk/school/gym/locker/chrislarwedgie.jpg');
                    if (((s as any).christinaQW ?? 0)?.['fight'] === 1  ||  ((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
                      scene.text('You see some girls teasing each other while getting dressed. One manages to get behind the other, grabs her panties and pulls them up. They both start laughing, obviously just messing around with each other. Things settle back down as the girl who got wedgied adjusts her panties and they leave the room, still teasing each other.');
                    } else {
                      scene.text('As Lariska finishes getting dressed, Christina walks up behind her, grabs the back of her panties and yanks up on them hard, making Lariska squeal as she stands on her toes to try and relieve the pressure. Most of the other girls laugh at this.');
                      scene.text('"Oh please, we all know you like things up your ass, so don\'t act like you\'re not enjoying this," Christina says with a smirk.');
                      scene.text('"Ow! Let go Christina, it hurts! Please!" Lariska pleads in a slightly whiny, submissive tone.');
                      scene.text('Christina laughs. "Is that what you tell Ivan when you let him fuck your ass?"');
                      scene.text('Lariska goes bright red at the comment as Christina gives another hard yank and Lariska winces even more.');
                      scene.text('"Whatever butt slut, let\'s go," Christina says as she waves to Lina and the three of them walk out, Lariska trying to dig her panties out of her ass.');
                    }
                    scene.actions([
                      { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
                    ]);
                  } else {
                    if (((s as any).gymdress ?? 0) === 10) {
                      scene.img('images/locations/pavlovsk/school/gym/locker/panties.jpg');
                      scene.text('As Bella and Irina get dressed, Stasya comments on how they\'re wearing the exact same panties, which gets them to stop and stand next to each other to show off their panties side by side. They both get a laugh out of the fact that they\'re wearing the exact same style and color of panties.');
                      scene.actions([
                        { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
                      ]);
                    } else {
                      if (((s as any).gymdress ?? 0) === 11) {
                        scene.img('images/locations/pavlovsk/school/gym/locker/younggirls.jpg');
                        scene.text('Christina, Lariska and Lina are horsing around while Lizaveta take pictures of them with her phone. Lina grabs Christina, reaching around to grab her by the ass as she puts her hair into a ponytail as Lariska moons the one taking the picture. They get most of the other girls laughing, but it quickly breaks up as everyone finishes dressing and starts to leave.');
                        scene.actions([
                          { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
                        ]);
                      } else {
                        if (((s as any).gymdress ?? 0) === 12) {
                          scene.img('images/locations/pavlovsk/school/gym/locker/splits.jpg');
                          scene.text('You head back into the locker room and spot some cute blonde girl doing the splits naked as her friend takes pictures. Giggling, she gets dressed and they both leave the locker room.');
                          qspCall(s, 'arousal', 'erotic_nudity', (-3));
                          qspCall(s, 'stat', '');
                          scene.actions([
                            { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'gschool_lessons4', 'post_dress');
  } },
                          ]);
                        } else {
                          if (((s as any).gymdress ?? 0) <= 16) {
                            scene.img('images/locations/pavlovsk/school/gym/locker/nerdoutcast.jpg');
                            if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).christinaQW ?? 0)?.['subpath'] >= 2) {
                              scene.text('Just as you finish dressing, you feel someone grab the back of your panties. Before you can say or do anything, you feel your panties get yanked up hard, painfully digging into your ass crack and against your clit. You hear the other girls all laugh as you struggle to free yourself. As you try and get up, you almost lose your balance as the person keeps pulling your panties up higher.');
                              scene.text('You\'re finally able to pull yourself free and turn to see Christina laughing at you. "Well? Anything to say, pet?"');
                              scene.text('"Thank you, Christina…" you mumble while looking down to avoid eye contact as much as possible.');
                              qspCall(s, 'pain', '', 1, 'asscheeks', 'ache');
                              qspCall(s, 'stat', '');
                              scene.actions([
                                { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
                              ]);
                            } else {
                              if ((((s as any).grupTipe ?? 0) === 3  ||  ((s as any).grupTipe ?? 0) === 5)  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).christinaQW ?? 0)?.['blackmail'] < 2  &&  ((s as any).christinaQW ?? 0)?.['fight'] === 0) {
                                scene.text('Just as you finish dressing, you feel someone grab the back of your panties. Before you can say or do anything, you feel your panties get yanked up hard, painfully digging into your ass crack and against your clit. You hear the other girls all laugh as you struggle to free yourself. As you try and get up, you almost lose your balance as the person keeps pulling your panties up higher.');
                                scene.text('You\'re finally able to pull yourself free and turn to see Christina laughing at you. "That\'s likely the closest anything has been to rubbing your clit. loser."');
                                qspCall(s, 'pain', '', 1, 'asscheeks', 'ache');
                                qspCall(s, 'stat', '');
                                scene.actions([
                                  { label: 'Ignore her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/locker/change.jpg');
    scene.text('You shoot Christina a dark glare, but say nothing. Pulling your panties out of your ass crack and getting them back in place, you finish getting dressed. Seeing she isn\'t going to get a rise out of you, she walks off, bored.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
                                  { label: 'Avoid eye contact', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['bully'] = ((st as any).christinaQW['bully'] ?? 0) + (2);
    scene.img('images/locations/pavlovsk/school/gym/locker/nerdoutcast.jpg');
    scene.text('Keeping your eyes on the floor, you spend a few moments pulling your panties out of your ass crack and getting them back in place before finishing getting dressed. She cracks a few jokes at you before heading out with Lariska and Lina in tow.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
                                  { label: 'Yell at Christina', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['bully'] = ((st as any).christinaQW['bully'] ?? 0) - (2);
    scene.img('images/characters/shared/headshots_main/big18.jpg');
    scene.text('You turn around and ball your fists. "You fucking bitch! I\'m going to make you eat your panties before I\'m done with you!"');
    scene.text('She curls her hands into fists, but before she can respond, there\'s a pounding on the locker room door. "What\'s going on in there?! Settle down right now or I\'m coming in!"');
    scene.text('The girls hurry up in case the Coach Pavlovich actually follows up on his threat as Christina gives you a dark look.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
                                ]);
                              } else {
                                if ((((s as any).NatbelQW ?? 0)?.['chrispaid'] !== 5  &&  ((s as any).NatbelQW ?? 0)?.['chrispaid'] !== 6  &&  ((s as any).christinaQW ?? 0)?.['blackmail'] < 2  &&  ((s as any).christinaQW ?? 0)?.['fight'] === 0)  ||  ((s as any).NatbelQW ?? 0)?.['chrispaid'] === 7) {
                                  scene.text('As you finish dressing, you turn around in time to see Christina stand up on one of the benches, reach down, and grab Natasha\'s panties from behind. She yanks up on them hard, making Natasha yelp and stand up. This doesn\'t stop Christina though, who keeps lifting until she manages to lift Natasha off her feet. She squirms and cries out, dangling from her panties. Some of the girls laugh while others look away in disgust.');
                                  scene.text('Natasha begs Christina to let her go, which seems to only encourage Christina, who now starts bouncing her by her panties until there\'s a loud rip and Natasha\'s panties end up under her arms. She looks to be on the verge of tears and runs out once Christina finally lets go.');
                                  scene.actions([
                                    { label: 'Ignore it', goto: ['gschool_lessons4', 'post_dress'] },
                                    { label: 'Avoid eye contact', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['bully'] = ((st as any).christinaQW['bully'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/gym/locker/change.jpg');
    scene.text('Keeping your eyes on the floor, you spend a few minutes getting dressed. She cracks a few jokes about it before heading out with Lariska and Lina in tow.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
                                    { label: 'Stand up for Natasha', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['bully'] = ((st as any).christinaQW['bully'] ?? 0) - (2);
    qspCall(st, 'npc_relationship', 'modify', 'A16', 'like');
    scene.img('images/characters/shared/headshots_main/big18.jpg');
    scene.text('You head straight at her. "You fucking bitch! How would you like it if I did that to you?!"');
    scene.text('She curls her hands into fists, but before she can respond, there is a pounding on the locker room door. "What\'s going on in there?! Settle down right now or I\'m coming in!"');
    scene.text('The girls hurry in case Coach Pavlovich actually follows up on his threat as Christina gives you a dark look.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
                                  ]);
                                } else {
                                  qspGoto(s, 'gschool_lessons4', 'dress2');
                                }
                              }
                            }
                          } else {
                            qspGoto(s, 'gschool_lessons4', 'dress2');
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

function enterDress2(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/pavlovsk/school/gym/locker/postphys${(Math.floor(Math.random() * 4) + 1)}.jpg`);
  scene.text('You take your clothes out of your locker and start putting them on. This takes longer than expected, however, since you get distracted several times while getting dressed - sometimes by other girls engaging you in a brief conversation, sometimes by someone or something catching your eye. By the time you are finished, most of the other girls have already left the locker room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
  ]);
  scene.build();
}

function enterPostDress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).wloc ?? 0) === '') {
    (s as any).wloc = 'default1';
  }
  qspCall(s, 'core_library', 'setloc', 'gschool_lessons4', 'post_dress');
  (s as any).location_type = 'bathroom';
  (s as any).locclass = 'locker';
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/school/gym/locker/postphys${(Math.floor(Math.random() * 4) + 1)}.jpg`);
  scene.text('You can access your <a href="#" onclick="window.__gameStore.setState((s) => { s.postphys_event = s.daystart; return s; }); window.__gameStore.getState().doGoto(/u0027wardrobe/u0027, String(window.__gameStore.getState().wloc ?? /u0027/u0027)); return false;">default clothing</a> options directly.');
  if (((s as any).mc_inventory ?? 0)?.['cigarettes'] >= 1) {
    scene.actions([
      { label: 'Smoke a cigarette', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'smoke', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/locker/smokecig.jpg');
    scene.text('You feel the urge to have a smoke before you leave school, so you take out your pack of cigarettes, pull one out and place it between your lips before lighting it up and taking a long drag. You spend the next few minutes smoking your cigarette, feeling yourself relax as you do. Once finished, you snuff it out and throw the butt into one of the toilets.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['joints'] > 0  &&  ((s as any).drugVars ?? 0)?.['weed_high'] === 0) {
    scene.actions([
      { label: 'Smoke a joint', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'drugs', 'joint');
    scene.img('images/locations/pavlovsk/school/gym/locker/smokejoint.jpg');
    scene.text('You feel the urge to get high before you leave school, so you take a seat on one of the benches and take a joint out of your purse, placing it between your lips before lighting it up and taking a long drag. You quickly feel yourself relaxing and smile as you lean back against the lockers. You spend the next few minutes smoking the joint until you\'re as high as a kite. Once you\'re done, you throw the roach in one of the toilets.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.actions([
      { label: 'Brush your hair', goto: ['mirror', 'brush'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
    // TODO-QSP: 'Your deodorant will last you for <b><<mc_inventory[''deodorant'']>></b> more ' + iif(mc_inventory['...
    scene.actions([
      { label: 'Apply deodorant (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['deodorant'] = ((st as any).mc_inventory['deodorant'] ?? 0) - (1);
    qspCall(st, 'sweat', 'deo');
    // TODO-QSP: iif(func('body_din', 'pregnancyVisibility') = 1, '<center><img <<$set_imgh>> src="images/shared/home...
    scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).menu_off = 0;
  }, goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'din_van', 'pblc_pee');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave school', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      qspGoto(st, 'gschool_lessons4', 'post_dress');
    } else {
      qspGoto(st, 'gschool_lessons', 'short_break');
    }
  } },
    { label: 'Choose a different outfit', handler: (st: GameState) => {
    (st as any).postphys_event = ((st as any).daystart ?? 0);
  }, goto: ['wardrobe', 'start'] },
    { label: 'Use the mirror', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'math':
      enterMath(s, scene);
      break;
    case 'math_late':
      enterMathLate(s, scene);
      break;
    case 'english':
      enterEnglish(s, scene);
      break;
    case 'pe':
      enterPe(s, scene);
      break;
    case 'jumping_jacks':
      enterJumpingJacks(s, scene);
      break;
    case 'pushups':
      enterPushups(s, scene);
      break;
    case 'postphys':
      enterPostphys(s, scene);
      break;
    case 'postphys2':
      enterPostphys2(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    case 'shower2':
      enterShower2(s, scene);
      break;
    case 'pube_bully':
      enterPubeBully(s, scene);
      break;
    case 'pube_compliment':
      enterPubeCompliment(s, scene);
      break;
    case 'whore_bully':
      enterWhoreBully(s, scene);
      break;
    case 'shower_options':
      enterShowerOptions(s, scene);
      break;
    case 'long_shower':
      enterLongShower(s, scene);
      break;
    case 'long_shower_locker':
      enterLongShowerLocker(s, scene);
      break;
    case 'shower_watch_end':
      enterShowerWatchEnd(s, scene);
      break;
    case 'dress':
      enterDress(s, scene);
      break;
    case 'dress2':
      enterDress2(s, scene);
      break;
    case 'post_dress':
      enterPostDress(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_lessons4: LocationDef = {
  name: 'gschool_lessons4',
  title: 'You sit in your seat just as Mr. Tsarev stands up to begin h',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'locker',
  enter: enter,
};
