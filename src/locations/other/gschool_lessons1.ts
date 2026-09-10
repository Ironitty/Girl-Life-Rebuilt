import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'rus');
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/school/classroom/class${Math.floor(Math.random() * 2) + 1}.jpg`);
  scene.text('You walk into the classroom and take a seat farthest to the right, next to a window. The rest of your classmates walk in one by one before Mr. Yenotin enters the classroom. Just as he\'s about to close the door, one of your classmates grabs it from outside the room. Mr. Yenotin turns to the tardy student, informs them that they\'re late and that he\'ll have to report them. This instruction is followed by an awkward wink and the student is allowed in to find a seat. Everyone knows that he never reports the tardy students. As everyone settles in, Mr. Yenotin does a roll call before opening a grammar book and telling you to open your textbooks to where you left off in the last lesson.');
  scene.text('After a while, he tells the class to do the assignments on the last page of the chapter as he starts walking up and down the classroom, mostly talking to the students about off topic things, like how their time off was often disrupting them from their focus. He\'s always trying to impress the students with his endeavors, but no one believes what he says because most of it sounds exaggerated or impossible. When someone has a real question, however, he\'s quick to answer as fair as possible without being arrogant, no matter the type of question asked.');
  qspCall(s, 'willpower', 'chore', 'self', (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : ((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')));
  if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
  } else {
    (s as any).will_cost = 0;
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen attentively to Mr. Yenotin [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Mr. Yenotin', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'rus', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
    (s as any).trait_vars['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/attention.jpg');
    scene.text('You listen attentively to Mr. Yenotin for the duration of the class. He manages to make today\'s lesson very interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'rus', ((s as any).pcs_chrsm ?? 0));
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('Mr. Yenotin nods approvingly, happy to see his students engaged in class and trying their best. He happily spends some extra time explaining the topic again, and answers any extra questions you might have. You feel smarter, thoroughly understanding today\'s lessons now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention in class', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('Mr. Yenotin\'s lecture has brought the whole class to inattention. Most of your classmates are paying more attention to the clock than to the lesson when you suddenly hear a loud bang, making the whole class jump up from their chairs.');
    scene.text('Everyone in the room turns to see Lesco on the floor, his desk overturned as his cellphone slides across the floor before clattering against the wall. Silence is soon replaced by laughter as Lesco, with the entire class watching him, struggles to act nonchalant as he works to quickly return his desk to an upright position and gather the items that had fallen to the floor.');
    scene.text('Mr. Yenotin approaches Lesco and you\'re certain he\'ll get a scolding, but to your dismay Mr. Yenotin starts joking with him instead. He shares an embarrassing story about how the same thing happened to him once, except there were no phones in his time. Nobody\'s listening to him though; everyone\'s still laughing at Lesco and wondering what he was doing when he fell.');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Flash your breasts at Svyatoslav [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flash your breasts at Svyatoslav', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'tits', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashboobs1.jpg');
    // TODO-QSP: dynamic text: You notice Svyatoslav glancing over at you a few times and decide to play with h...
    scene.text(`You notice Svyatoslav glancing over at you a few times and decide to play with him. The next time he looks over at you when Mr. Yenotin's back is turned, you pull your shirt open and his mouth drops open in shock as he stares at your exposed ${((s as any).titsize ?? 0)} breasts.`);
    scene.text('A few of the other students notice what you\'re doing and most of them either grin, smile or laugh at your antics. All but Lesco of course, who stares with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).pantyworntype ?? 0) === 'none') {
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Flash ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'butt', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashbutt1.jpg');
    scene.text('Near the end of class, you get up and head towards Mr. Yenotin\'s desk. You make a point of acting like you\'re checking one of the books for something. With a final glance to make sure Mr. Yenotin isn\'t looking, you pull up the back of your skirt and expose your naked ass to the class.');
    scene.text('A few of the other students notice what you\'re doing and draw each other\'s attention to it. Most of them either grin, smile or even laugh at your antics. All but Lesco, who stares with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
        ]);
      }
    }
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get up and flash panty-clad ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panty-clad ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesb\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and head towards Mr. Yenotin\'s desk. You make a point of acting like you\'re checking one of the books for something. With a final glance to make sure Mr. Yenotin isn\'t looking, you pull up the back of your skirt and expose your panty clad ass to the class.');
    scene.text('A few of the other students notice what you\'re doing and draw each other\'s attention to it. Most of them either grin, smile or even laugh at your antics. All but Lesco, who stares with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Flash panties at desk [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash panties at desk', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesd\' + rand(1, 5) + \'.jpg');
    scene.text('While Mr. Yenotin\'s back is turned, you spread your legs wide and pull up the front of your skirt while still sitting at your desk, which shows off your panties to anyone that looks your way. A few of the other students notice what you\'re doing and most of them either grin, smile or even laugh at your antics. All but Lesco, who stares with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get up and flash panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panties', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesf\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and head towards Mr. Yenotin\'s desk. You make a point of acting like you\'re checking one of the books for something. With a final glance to make sure Mr. Yenotin isn\'t looking, you turn to face the class like you\'re about to walk back to your seat, but instead pull up your skirt and expose your panties to anyone looking.');
    scene.text('A few of the other students notice what you\'re doing and most of them either grin, smile or even laugh at your antics. All but Lesco, who stares with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
        ]);
      }
    }
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Remove panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Remove panties', handler: (st: GameState) => {
    qspCall(s, 'panties', 'remove');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/removepanties.jpg');
    scene.text('While sitting at your desk feeling bored, you notice no one is looking at you and decide to take your panties off, just for something to do. You reach under your skirt and pull them down slowly.');
    scene.text('At first, you have to work against your own weight as you pull them past your ass. Much to your surprise, nobody notices and you carry on. Once you get them past your knees, you open your legs slightly and your panties fall down around your ankles.');
    scene.text('You step out of them, but as you\'re bending down to pick them up, you realize some of the other students have noticed. You quickly pick up your panties, stuff them into your purse and ignore the stares.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'geography');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
      { label: 'Draw dick in margin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/drawdick.jpg');
    scene.text('You\'re bored and start doodling, which turns into you drawing dicks, complete with balls, on the margin. You even share your handiwork with the girl sitting next to you when she glances over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
      { label: 'Take selfie', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/takeselfie.jpg');
    scene.text('While looking at your phone, you decide now would be a good time to take a selfie, but what kind of selfie should you take?');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take bare breasts selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        { label: 'Take bare pussy selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take bare breasts selfie', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', (-5));
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img(`${((s as any).temp_phone_img ?? 0)}`);
    scene.text('Feeling particularly brash, you decide taking a selfie of your bare breasts in the middle of class is a great idea. Maybe you\'ll share it, maybe not, but either way it should be fun and might be useful for teasing someone later. You glance around and when everyone is busy, you pull open your shirt and expose your breasts.');
    // TODO-QSP: dynamic text: You take a few quick selfies of your exposed breasts until you get one you reall...
    scene.text('You take a few quick selfies of your exposed breasts until you get one you really like. \' + iif(func(\'pcs_has_attr\', \'body_tits_at_least_F_cup\'), \'You fight with your blouse to cover yourself back up. Once it\'s finally back in place, you take a look around and see a few grinning faces among your classmates. \', \') + \'You save that one to your phone and delete the rest.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
        { label: 'Take bare pussy selfie', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img(`${((s as any).temp_phone_img ?? 0)}`);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You can feel the excitement in your pussy as you imagine yourself baring it in class to take a selfie of it. Maybe you\'ll share it, maybe not, but either way it should be fun and could be fun to send to someone later to tease them with it. You glance around and when everyone is busy, you pull up your skirt and pull your panties aside until your pussy is exposed.');
      scene.text('You take a few quick selfies of your exposed pussy until you get one you really like. You save that one to your phone and delete the rest.');
    } else {
      scene.text('You can feel yourself getting wet as you imagine taking a selfie of yourself while not wearing your panties. Maybe you\'ll share it, maybe not, but either way it could be fun. You glance around and when everyone looks busy, you pull up your skirt, exposing your already bare pussy.');
      scene.text('You take a few quick selfies of your pussy until you get one you really like. You save that one to your phone and delete the rest.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Regular selfie', handler: (st: GameState) => {
    scene.img(`${((s as any).temp_phone_img ?? 0)}`);
    scene.text('Just a cute selfie. Nothing too daring, yet it gives you something to do. You take several selfies of yourself until you find one you like, which you keep before deleting the rest. You manage to take them without Mr. Yenotin even noticing.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Tease Svyatoslav', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/tease.jpg');
    // TODO-QSP: 'You get Svyatoslav''s attention by smiling at him when he looks in your direction before you lean b...
    scene.text('He watches you intently while you bite your lower lip, looking all coy and seductive to him. Once you finish your stretch, you pretend to act all innocent, like you didn\'t do anything.');
    // TODO-QSP: dynamic text: He glances around before leaning over. "Come on, don't be like that, <<$pcs_nick...
    scene.text(`He glances around before leaning over. "Come on, don't be like that, ${((s as any).pcs_nickname ?? 0)}! Show me a little more."`);
    scene.text('Before you can decide what to do, Sonia, who watched it all, gets your attention.');
    scene.actions([
      { label: 'Sonia\'s suggestion', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb1.jpg');
    scene.text('She leans over and whispers in your ear. "Flash him your tits," she says with a giggle.');
    scene.text('You\'re taken aback by her words. "Why would I do that?!"');
    scene.text('She grins. "To tease him of course, just like your stretch. Go on, do it! Or flash him your panties."');
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to flash [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to flash', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Svyatoslav frowns, having heard or guessed what Sonia had tried to get you to do. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Flash your panties', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/teasep1.jpg');
    scene.text('You turn towards Svyatoslav so you\'re sitting in your seat sideways while facing him before you pull your skirt up a little to show off a glimpse of your panties to Svyatoslav, which makes him grin wide. He motions for you to pull your skirt up higher to give him a better view.');
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Svyatoslav frowns as you pull your skirt back down and turn back to face the front of the class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Raise your skirt more', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/teasep2.jpg');
    scene.text('You pull your skirt up so your panties are exposed and Svyatoslav grins wide. You can tell he\'s hoping to see more by the way he\'s looking at you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep3.jpg');
    scene.text('Just as you\'re about to cover up, he reaches over, grabs the front of your panties and tries to pull them down to get a look at your pussy. You grab his hand just in time to stop him from doing it.');
    // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>>, give me a peek at that pussy…" he whispers at you as...
    scene.text(`"Come on ${((s as any).pcs_nickname ?? 0)}, give me a peek at that pussy…" he whispers at you as he keeps trying to tug your panties down.`);
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('You forcefully pull his hand away and Svyatoslav frowns as you pull your skirt back down and turn back to face the front of the class. After a few seconds, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Show him your pussy', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'flash', 'pussy', 'indoors', 3, 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teasep4.jpg');
    scene.text('"Then let go and I\'ll show you…" you say with a sly smile. He pauses for a second, but then lets go of your panties and keeps watching. You lean back and lift one leg as you reach down and pull your panties aside to reveal your pussy to Svyatoslav and anyone else who happens to look your way. Sonia tries to sneak a peek as well as you see the bulge growing in Svyatoslav\'s pants.');
    scene.actions([
      { label: 'Put your pussy away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('After a few minutes, you pull your panties back in place, pull your skirt back down and turn to face the front of the class again. Svyatoslav looks crestfallen, obviously hoping for it to have lasted longer, but you ignore his pleading looks and look to the front of the class. The thrill of what you just did has sparked your arousal, the evidence of which is currently soaking your panties and poking through your shirt. You find the remainder of the class to be a little less boring.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
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
      scene.actions([
        { label: 'Flash your pussy', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'arousal', 'flash', 3);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/school/classroom/teasep4.jpg');
    scene.text('You turn towards Svyatoslav so you\'re facing him as you sit in your seat sideways and quickly pull up your skirt, exposing your pussy.');
    scene.actions([
      { label: 'Put your pussy away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('After a few seconds, you pull your skirt back down and turn to face the front of the class again. Svyatoslav looks crestfallen, obviously hoping for it to have lasted longer, but you ignore his pleading looks and look to the front of the class. The thrill of what you just did has sparked your arousal, the evidence of which is currently soaking your panties and poking through your shirt. This keeps the rest of the class from being boring.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Flash your breasts', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(s, 'flash', 'tits', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb2.jpg');
    // TODO-QSP: dynamic text: You glance around and wait until no one but the two of them are looking before y...
    scene.text(`You glance around and wait until no one but the two of them are looking before you lean back and pull up your shirt to expose your bare ${((s as any).titsize ?? 0)} breasts. Your nipples harden sharply from the excitement as Svyatoslav stares at your bare breasts, looking almost entranced by them.`);
    scene.actions([
      { label: 'Put them away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You pull your shirt down quickly when another student looks over, which causes Sonia to giggle and Svyatoslav to shake his head. Several other students look over as if they just realized they missed something. You ignore their looks, Svyatoslav\'s stare and Sonia\'s giggles and wait for the lesson to end.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
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
    { label: 'Daydream', handler: (st: GameState) => {
    (s as any).daydream = Math.floor(Math.random() * 4) + 1;
    if (((s as any).daydream ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/classroom/caughtsleeping.jpg');
      scene.text('Today\'s lesson is dragging on and you find yourself drifting off constantly. You suddenly hear Mr. Yenotin clapping and without any hesitation, you also begin clapping. It doesn\'t take long for you to realize that you\'re the only one clapping and you feel your cheeks getting warm as you start blushing.');
      // TODO-QSP: dynamic text: "Welcome back, Miss <<$pcs_lastname>>! Now, please pay attention. You don't want...
      scene.text(`"Welcome back, Miss ${((s as any).pcs_lastname ?? 0)}! Now, please pay attention. You don't want to miss today's topic since it's going to be on the exam."`);
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Be a smart ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Be a smart ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
    scene.text('"I\'ll try, but can you be less boring? If you keep droning on like that, I think I\'ll literally die of boredom!" you answer boldly.');
    scene.text('The whole class bursts into loud laughter and Mr. Yenotin tries his hardest to quieten everyone down.');
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Keep going [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
    scene.text('"It\'s not like I\'m the one interrupting the lesson. That would be you," you answer brashly, feeling pretty confident.');
    // TODO-QSP: dynamic text: Mr. Yenotin walks back to the front of the class, but your smug smile drops when...
    scene.text(`Mr. Yenotin walks back to the front of the class, but your smug smile drops when he opens the door. "Okay ${((s as any).pcs_lastname ?? 0)}, you've had your fun. Now get to the principal's office!"`);
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Hold your tongue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
    scene.text('You consider going futher but quickly decide discretion is the better part of valor. Mr. Yenotin looks at you for a few seconds, seemingly trying to decide how to respond, before shaking his head and continuing with the lesson. It seems he decided you\'re not worth the effort.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Reluctantly pay attention', handler: (st: GameState) => {
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'rus', ((s as any).pcs_intel ?? 0));
    scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
    scene.text('You apologise to a displeased looking Mr. Yenotin and he returns to his lesson. Despite your best efforts, you struggle to pay attention for the rest of the class and hardly learn anything.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
      ]);
    } else {
      (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 3) + 1);
      if (((s as any).class ?? 0)?.['school_rus_grade'] >= 80) {
        scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
        scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about since you keep dozing off.');
        scene.text('You\'re snapped back to consciousness when you hear Mr. Yenotin call your name. Everyone looks at you expectantly, and you realize that you were just asked a question about the topic.');
        scene.text('Taking your best guess at what the teacher might be asking, the entire class is shocked as you somehow manage to produce the correct answer, since it must\'ve been obvious to everyone that you were sleeping.');
        // TODO-QSP: dynamic text: "I'm impressed, <<$pcs_lastname>>. Just don't make sleeping in class a habit."
        scene.text(`"I'm impressed, ${((s as any).pcs_lastname ?? 0)}. Just don't make sleeping in class a habit."`);
      } else {
        scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
        scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about since you keep dozing off.');
        scene.text('You\'re snapped back to consciousness when you hear Mr. Yenotin call your name. Everyone is looking at you expectantly, and you realize that you were just asked a question about the topic.');
        scene.text('You take your best guess and the others snicker when you say something that\'s obviously wrong. Mr. Yenotin laughs it off and asks for someone else to inform you of the correct answer.');
        scene.text('It was an embarrassing experience, but the sudden adrenaline surge helps you to stay awake for the rest of the period.');
      }
      if (((s as any).daydream ?? 0) === 3) {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 4) + 2);
        scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
        scene.text('Mr. Yenotin is talking about the history of the Russian language and it\'s dragging on. You nod off from time to time and you\'re having a hard time staying awake.');
        scene.text('All of a sudden, you find yourself in the Middle Ages walking around in a castle. You look around and see soldiers, clergymen and farmers going about their lives. In one corner, you see a girl your age waving you over to her. You happily run over, but just as you\'re about to reach her, a clergyman stops you and speaks to you in a language you can\'t seem to understand.');
        scene.text('You\'re panicking and try to answer back, but he doesn\'t seem to understand you and is getting more and more agitated as time goes on. By now, there\'s quite a crowd gathered that are listening to what the clergyman is saying. He\'s pointing at you and talking angrily. Two soldiers appear through the crowd of people and the man starts explaining something. They turn to you, once again speaking in the strange language.');
        scene.text('You look at them with a pleading look, trying to tell them that you don\'t belong here, but they grab you by the arms and forcefully drag you away while you scream. They carry you over to a pillory and strip you of all your clothes before they lock you in.');
        scene.text('The same clergyman that first talked to you is now standing in front of you saying something. After he\'s been talking for a while, he pulls out a whip out from under his garb and moves behind you.');
        scene.text('Just as you\'re about to be hit, you wake up and let out a relieving sigh. It was only a dream. Luckily no one seems to have noticed and the class is soon over.');
        scene.actions([
          { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 4) + 2);
        scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
        scene.text('Mr. Yenotin is talking about grammar and asks that everyone listen closely to what he\'s saying. You don\'t care about his lecture and instead talk to the person sitting next to you.');
        // TODO-QSP: dynamic text: "Well Miss <<$pcs_lastname>>, since you have so much to say, why don't we do it ...
        scene.text(`"Well Miss ${((s as any).pcs_lastname ?? 0)}, since you have so much to say, why don't we do it like this? You be the teacher and I'll be the student," Mr. Yenotin says, clearly irritated by your actions.`);
        scene.text('"Sorry, Mr. Yenotin. I\'ll be quiet," you reply, but it\'s too late. Mr. Yenotin is insisting that you walk up to the chalkboard and carry on with the lesson instead. You\'re now standing in front of the class, blushing as he sits down in your seat.');
        scene.text('"Well? We\'re waiting. Tell us all about grammar," he pushes on. You take a deep breath, but as you\'re about to speak, your voice cracks and the whole class starts laughing.');
        scene.text('You\'re wondering what to do when the bell suddenly rings, startling you awake from your nightmare.');
        scene.actions([
          { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
      ]);
    }
    scene.actions([
      { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping the rather boring lesson will be over soon.');
    if (Math.floor(Math.random() * 2) + 0 > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Mr. Yenotin\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/payattention.jpg');
      scene.text('You hear Mr. Yenotin clear his throat and glance up to see him sternly looking at you.');
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep using your phone [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep using your phone', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You ignore him and keep using your phone as he starts walking over to your desk.');
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take photos under your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take photos under your skirt', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
      scene.img('images/locations/pavlovsk/school/classroom/upskirtselfie.jpg');
    } else {
      qspCall(s, 'flash', 'pussy', 'indoors', 1, 1);
      scene.img('images/locations/pavlovsk/school/classroom/literature/nopanties_upskirt.jpg');
    }
    qspCall(s, 'stat', '');
    scene.text('You decide to have some fun. You quickly slide your phone between your legs and snap some photos under your skirt.');
    scene.text('Mr. Yenotin arrives at your desk and holds his hand out. "Hand it over and you\'ll get it back at the end of the lesson."');
    scene.text('You hand your phone over with a sly smile. The last picture you took is still on the screen.');
    scene.text('Mr. Yenotin looks at what\'s on the screen and his face turns bright red. He quickly turns the screen off and returns to the front of the class before he resumes his lesson looking somewhat flustered.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).braworntype ?? 0) !== 'none') {
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Hide the phone in your bra [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
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
    scene.text('You deftly shove the phone in your bra, and smile fiendishly as you see the indecisiveness on your teacher\'s face.');
    scene.text('You pretend it\'s a perfectly normal place to store your phone and mock him in a cute voice. "Is there a problem, Mr. Yenotin? Go ahead, take my phone if it\'s not allowed." You thrust your chest forward, the outline of your phone visible through the fabric.');
    scene.text('Deciding it\'s not worth the effort without causing all sorts of awkward situations, he returns to the front of the class as you pull your phone back out and return to your game.');
    // TODO-QSP: dynamic text: Before he continues his lesson, he gives you a warning. "Just remember I'm your ...
    scene.text(`Before he continues his lesson, he gives you a warning. "Just remember I'm your homeroom teacher, ${((s as any).pcs_lastname ?? 0)}. Guess who I'm going to have over for a meeting?"`);
    scene.text('You don\'t pay much attention to his threat since you\'re too busy on your phone.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Hand over the phone', handler: (st: GameState) => {
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/takephone.jpg');
    scene.text('You decide it\'s not worth it and silently hand your phone over to him.');
    // TODO-QSP: dynamic text: He walks back to the front of the class and tosses your phone in a drawer in his...
    scene.text(`He walks back to the front of the class and tosses your phone in a drawer in his desk. "You can have it back after class, ${((s as any).pcs_lastname ?? 0)}."`);
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Mr. Yenotin then continues the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'russian');
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
  } },
  ]);
  scene.build();
}

export const gschool_lessons1: LocationDef = {
  name: 'gschool_lessons1',
  title: 'You walk into the classroom and take a seat farthest to the ',
  region: 'other',
  description: ['You walk into the classroom and take a seat farthest to the right, next to a window. The rest of your classmates walk in one by one before Mr. Yenotin enters the classroom. Just as he\'s about to close the door, one of your classmates grabs it from outside the room. Mr. Yenotin turns to the tardy student, informs them that they\'re late and that he\'ll have to report them. This instruction is followed by an awkward wink and the student is allowed in to find a seat. Everyone knows that he never reports the tardy students. As everyone settles in, Mr. Yenotin does a roll call before opening a grammar book and telling you to open your textbooks to where you left off in the last lesson.'],
  enter: enter,
};
