import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRussian(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'rus');
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/school/classroom/class${(Math.floor(Math.random() * 2) + 1)}.jpg`);
  scene.text('You walk into the classroom and take a seat farthest to the right, next to a window. The rest of your classmates walk in one by one before Mr. Yenotin enters the classroom. Just as he\'s about to close the door, one of your classmates grabs it from outside the room. Mr. Yenotin turns to the tardy student, informs them that they\'re late and that he\'ll have to report them. This instruction is followed by an awkward wink and the student is allowed in to find a seat. Everyone knows that he never reports the tardy students. As everyone settles in, Mr. Yenotin does a roll call before opening a grammar book and telling you to open your textbooks to where you left off in the last lesson.');
  scene.text('After a while, he tells the class to do the assignments on the last page of the chapter as he starts walking up and down the classroom, mostly talking to the students about off topic things, like how their time off was often disrupting them from their focus. He\'s always trying to impress the students with his endeavors, but no one believes what he says because most of it sounds exaggerated or impossible. When someone has a real question, however, he\'s quick to answer as fair as possible without being arrogant, no matter the type of question asked.');
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
      { label: 'Listen attentively to Mr. Yenotin', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Mr. Yenotin', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'rus', ((st as any).pcs_intel ?? 0));
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
    ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic_lessons'] = ((st as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/attention.jpg');
    scene.text('You listen attentively to Mr. Yenotin for the duration of the class. He manages to make today\'s lesson very interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'rus', ((st as any).pcs_chrsm ?? 0));
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('Mr. Yenotin nods approvingly, happy to see his students engaged in class and trying their best. He happily spends some extra time explaining the topic again, and answers any extra questions you might have. You feel smarter, thoroughly understanding today\'s lessons now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
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
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Flash your breasts at Svyatoslav', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flash your breasts at Svyatoslav', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'tits', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashboobs1.jpg');
    scene.text(`You notice Svyatoslav glancing over at you a few times and decide to play with him. The next time he looks over at you when Mr. Yenotin's back is turned, you pull your shirt open and his mouth drops open in shock as he stares at your exposed ${((st as any).titsize ?? '')} breasts.`);
    scene.text('A few of the other students notice what you\'re doing and most of them either grin, smile or laugh at your antics. All but Lesco of course, who stares with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).pantyworntype ?? 0) === 'none') {
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Flash ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash ass', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'butt', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashbutt1.jpg');
    scene.text('Near the end of class, you get up and head towards Mr. Yenotin\'s desk. You make a point of acting like you\'re checking one of the books for something. With a final glance to make sure Mr. Yenotin isn\'t looking, you pull up the back of your skirt and expose your naked ass to the class.');
    scene.text('A few of the other students notice what you\'re doing and draw each other\'s attention to it. Most of them either grin, smile or even laugh at your antics. All but Lesco, who stares with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
        ]);
      }
    }
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get up and flash panty-clad ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panty-clad ass', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 3);
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/school/classroom/flashpantiesb` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text('Near the end of class, you get up and head towards Mr. Yenotin\'s desk. You make a point of acting like you\'re checking one of the books for something. With a final glance to make sure Mr. Yenotin isn\'t looking, you pull up the back of your skirt and expose your panty clad ass to the class.');
    scene.text('A few of the other students notice what you\'re doing and draw each other\'s attention to it. Most of them either grin, smile or even laugh at your antics. All but Lesco, who stares with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
        ]);
      }
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Flash panties at desk', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash panties at desk', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 2);
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/school/classroom/flashpantiesd` + (Math.floor(Math.random() * 5) + 1) + '.jpg"></center>');
    scene.text('While Mr. Yenotin\'s back is turned, you spread your legs wide and pull up the front of your skirt while still sitting at your desk, which shows off your panties to anyone that looks your way. A few of the other students notice what you\'re doing and most of them either grin, smile or even laugh at your antics. All but Lesco, who stares with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
        ]);
      }
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get up and flash panties', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panties', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 3);
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/school/classroom/flashpantiesf` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text('Near the end of class, you get up and head towards Mr. Yenotin\'s desk. You make a point of acting like you\'re checking one of the books for something. With a final glance to make sure Mr. Yenotin isn\'t looking, you turn to face the class like you\'re about to walk back to your seat, but instead pull up your skirt and expose your panties to anyone looking.');
    scene.text('A few of the other students notice what you\'re doing and most of them either grin, smile or even laugh at your antics. All but Lesco, who stares with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
        ]);
      }
    }
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Remove panties', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Remove panties', handler: (st: GameState) => {
    qspCall(st, 'panties', 'remove');
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/removepanties.jpg');
    scene.text('While sitting at your desk feeling bored, you notice no one is looking at you and decide to take your panties off, just for something to do. You reach under your skirt and pull them down slowly.');
    scene.text('At first, you have to work against your own weight as you pull them past your ass. Much to your surprise, nobody notices and you carry on. Once you get them past your knees, you open your legs slightly and your panties fall down around your ankles.');
    scene.text('You step out of them, but as you\'re bending down to pick them up, you realize some of the other students have noticed. You quickly pick up your panties, stuff them into your purse and ignore the stares.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
      { label: 'Draw dick in margin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/drawdick.jpg');
    scene.text('You\'re bored and start doodling, which turns into you drawing dicks, complete with balls, on the margin. You even share your handiwork with the girl sitting next to you when she glances over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
      { label: 'Take selfie', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/takeselfie.jpg');
    scene.text('While looking at your phone, you decide now would be a good time to take a selfie, but what kind of selfie should you take?');
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take bare breasts selfie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Take bare pussy selfie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take bare breasts selfie', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'flash', (-5));
    qspCall(st, 'fame', 'pav', 'sex', 3);
    qspCall(st, 'stat', '');
    (st as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom', 'tits');
    scene.img(`${((st as any).temp_phone_img ?? '')}`);
    scene.text('Feeling particularly brash, you decide taking a selfie of your bare breasts in the middle of class is a great idea. Maybe you\'ll share it, maybe not, but either way it should be fun and might be useful for teasing someone later. You glance around and when everyone is busy, you pull open your shirt and expose your breasts.');
    scene.text('You take a few quick selfies of your exposed breasts until you get one you really like. ' + ((qspFunc(s, 'pcs_has_attr', 'body_tits_at_least_F_cup')) ? ('You fight with your blouse to cover yourself back up. Once it\'s finally back in place, you take a look around and see a few grinning faces among your classmates. ') : ('')) + 'You save that one to your phone and delete the rest.');
    (st as any).temp_phone_img = undefined;
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
        { label: 'Take bare pussy selfie', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'flash', (-5), 'exhibitionism');
    qspCall(st, 'fame', 'pav', 'sex', 3);
    qspCall(st, 'stat', '');
    (st as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom', 'pussy');
    scene.img(`${((st as any).temp_phone_img ?? '')}`);
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You can feel the excitement in your pussy as you imagine yourself baring it in class to take a selfie of it. Maybe you\'ll share it, maybe not, but either way it should be fun and could be fun to send to someone later to tease them with it. You glance around and when everyone is busy, you pull up your skirt and pull your panties aside until your pussy is exposed.');
      scene.text('You take a few quick selfies of your exposed pussy until you get one you really like. You save that one to your phone and delete the rest.');
    } else {
      scene.text('You can feel yourself getting wet as you imagine taking a selfie of yourself while not wearing your panties. Maybe you\'ll share it, maybe not, but either way it could be fun. You glance around and when everyone looks busy, you pull up your skirt, exposing your already bare pussy.');
      scene.text('You take a few quick selfies of your pussy until you get one you really like. You save that one to your phone and delete the rest.');
    }
    (st as any).temp_phone_img = undefined;
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Regular selfie', handler: (st: GameState) => {
    (st as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom');
    scene.img(`${((st as any).temp_phone_img ?? '')}`);
    scene.text('Just a cute selfie. Nothing too daring, yet it gives you something to do. You take several selfies of yourself until you find one you like, which you keep before deleting the rest. You manage to take them without Mr. Yenotin even noticing.');
    (st as any).temp_phone_img = undefined;
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Tease Svyatoslav', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/tease.jpg');
    scene.text(`You get Svyatoslav's attention by smiling at him when he looks in your direction before you lean back in your chair and stretch your arms back over your head, causing your ${((st as any).titsize ?? '')} breasts to thrust out as you do. ` + ((qspFunc(s, 'pcs_has_attr', 'body_tits_small')) ? ('Your uniform stretches around your small breasts to accent what you do have.') : (((qspFunc(s, 'pcs_has_attr', 'body_tits_average')) ? ('Your uniform stretches around your ample breasts, displaying their size.') : ('Your uniform stretches to its limits, threatening to pop buttons.')))));
    scene.text('He watches you intently while you bite your lower lip, looking all coy and seductive to him. Once you finish your stretch, you pretend to act all innocent, like you didn\'t do anything.');
    scene.text(`He glances around before leaning over. "Come on, don't be like that, ${((st as any).pcs_nickname ?? '')}! Show me a little more."`);
    scene.text('Before you can decide what to do, Sonia, who watched it all, gets your attention.');
    scene.actions([
      { label: 'Sonia\'s suggestion', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb1.jpg');
    scene.text('She leans over and whispers in your ear. "Flash him your tits," she says with a giggle.');
    scene.text('You\'re taken aback by her words. "Why would I do that?!"');
    scene.text('She grins. "To tease him of course, just like your stretch. Go on, do it! Or flash him your panties."');
    qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to flash', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to flash', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Svyatoslav frowns, having heard or guessed what Sonia had tried to get you to do. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Flash your panties', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/teasep1.jpg');
    scene.text('You turn towards Svyatoslav so you\'re sitting in your seat sideways while facing him before you pull your skirt up a little to show off a glimpse of your panties to Svyatoslav, which makes him grin wide. He motions for you to pull your skirt up higher to give him a better view.');
    qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Svyatoslav frowns as you pull your skirt back down and turn back to face the front of the class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Raise your skirt more', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/teasep2.jpg');
    scene.text('You pull your skirt up so your panties are exposed and Svyatoslav grins wide. You can tell he\'s hoping to see more by the way he\'s looking at you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep3.jpg');
    scene.text('Just as you\'re about to cover up, he reaches over, grabs the front of your panties and tries to pull them down to get a look at your pussy. You grab his hand just in time to stop him from doing it.');
    scene.text(`"Come on ${((st as any).pcs_nickname ?? '')}, give me a peek at that pussy…" he whispers at you as he keeps trying to tug your panties down.`);
    qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('You forcefully pull his hand away and Svyatoslav frowns as you pull your skirt back down and turn back to face the front of the class. After a few seconds, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Show him your pussy', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'flash', 'pussy', 'indoors', 3, 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teasep4.jpg');
    scene.text('"Then let go and I\'ll show you…" you say with a sly smile. He pauses for a second, but then lets go of your panties and keeps watching. You lean back and lift one leg as you reach down and pull your panties aside to reveal your pussy to Svyatoslav and anyone else who happens to look your way. Sonia tries to sneak a peek as well as you see the bulge growing in Svyatoslav\'s pants.');
    scene.actions([
      { label: 'Put your pussy away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('After a few minutes, you pull your panties back in place, pull your skirt back down and turn to face the front of the class again. Svyatoslav looks crestfallen, obviously hoping for it to have lasted longer, but you ignore his pleading looks and look to the front of the class. The thrill of what you just did has sparked your arousal, the evidence of which is currently soaking your panties and poking through your shirt. You find the remainder of the class to be a little less boring.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
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
    qspCall(st, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'arousal', 'flash', 3);
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/school/classroom/teasep4.jpg');
    scene.text('You turn towards Svyatoslav so you\'re facing him as you sit in your seat sideways and quickly pull up your skirt, exposing your pussy.');
    scene.actions([
      { label: 'Put your pussy away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('After a few seconds, you pull your skirt back down and turn to face the front of the class again. Svyatoslav looks crestfallen, obviously hoping for it to have lasted longer, but you ignore his pleading looks and look to the front of the class. The thrill of what you just did has sparked your arousal, the evidence of which is currently soaking your panties and poking through your shirt. This keeps the rest of the class from being boring.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Flash your breasts', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(st, 'flash', 'tits', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb2.jpg');
    scene.text(`You glance around and wait until no one but the two of them are looking before you lean back and pull up your shirt to expose your bare ${((st as any).titsize ?? '')} breasts. Your nipples harden sharply from the excitement as Svyatoslav stares at your bare breasts, looking almost entranced by them.`);
    scene.actions([
      { label: 'Put them away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You pull your shirt down quickly when another student looks over, which causes Sonia to giggle and Svyatoslav to shake his head. Several other students look over as if they just realized they missed something. You ignore their looks, Svyatoslav\'s stare and Sonia\'s giggles and wait for the lesson to end.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
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
    (st as any).daydream = (Math.floor(Math.random() * 4) + 1);
    if (((st as any).daydream ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/classroom/caughtsleeping.jpg');
      scene.text('Today\'s lesson is dragging on and you find yourself drifting off constantly. You suddenly hear Mr. Yenotin clapping and without any hesitation, you also begin clapping. It doesn\'t take long for you to realize that you\'re the only one clapping and you feel your cheeks getting warm as you start blushing.');
      scene.text(`"Welcome back, Miss ${((st as any).pcs_lastname ?? '')}! Now, please pay attention. You don't want to miss today's topic since it's going to be on the exam."`);
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
    scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
    scene.text('"I\'ll try, but can you be less boring? If you keep droning on like that, I think I\'ll literally die of boredom!" you answer boldly.');
    scene.text('The whole class bursts into loud laughter and Mr. Yenotin tries his hardest to quieten everyone down.');
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Keep going', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep going', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).demerit = ((st as any).demerit ?? 0) + (5);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
    scene.text('"It\'s not like I\'m the one interrupting the lesson. That would be you," you answer brashly, feeling pretty confident.');
    scene.text(`Mr. Yenotin walks back to the front of the class, but your smug smile drops when he opens the door. "Okay ${((st as any).pcs_lastname ?? '')}, you've had your fun. Now get to the principal's office!"`);
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
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Reluctantly pay attention', handler: (st: GameState) => {
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'rus', ((st as any).pcs_intel ?? 0));
    scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
    scene.text('You apologise to a displeased looking Mr. Yenotin and he returns to his lesson. Despite your best efforts, you struggle to pay attention for the rest of the class and hardly learn anything.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).daydream ?? 0) === 2) {
        (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 3) + 1));
        if (((st as any).class ?? 0)?.['school_rus_grade'] >= 80) {
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about since you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Mr. Yenotin call your name. Everyone looks at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('Taking your best guess at what the teacher might be asking, the entire class is shocked as you somehow manage to produce the correct answer, since it must\'ve been obvious to everyone that you were sleeping.');
          scene.text(`"I'm impressed, ${((st as any).pcs_lastname ?? '')}. Just don't make sleeping in class a habit."`);
        } else {
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about since you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Mr. Yenotin call your name. Everyone is looking at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('You take your best guess and the others snicker when you say something that\'s obviously wrong. Mr. Yenotin laughs it off and asks for someone else to inform you of the correct answer.');
          scene.text('It was an embarrassing experience, but the sudden adrenaline surge helps you to stay awake for the rest of the period.');
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
        ]);
      } else {
        if (((st as any).daydream ?? 0) === 3) {
          (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 4) + 2));
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
          (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 4) + 2));
          scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
          scene.text('Mr. Yenotin is talking about grammar and asks that everyone listen closely to what he\'s saying. You don\'t care about his lecture and instead talk to the person sitting next to you.');
          scene.text(`"Well Miss ${((st as any).pcs_lastname ?? '')}, since you have so much to say, why don't we do it like this? You be the teacher and I'll be the student," Mr. Yenotin says, clearly irritated by your actions.`);
          scene.text('"Sorry, Mr. Yenotin. I\'ll be quiet," you reply, but it\'s too late. Mr. Yenotin is insisting that you walk up to the chalkboard and carry on with the lesson instead. You\'re now standing in front of the class, blushing as he sits down in your seat.');
          scene.text('"Well? We\'re waiting. Tell us all about grammar," he pushes on. You take a deep breath, but as you\'re about to speak, your voice cracks and the whole class starts laughing.');
          scene.text('You\'re wondering what to do when the bell suddenly rings, startling you awake from your nightmare.');
          scene.actions([
            { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
          ]);
        }
      }
    }
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping the rather boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Mr. Yenotin\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/payattention.jpg');
      scene.text('You hear Mr. Yenotin clear his throat and glance up to see him sternly looking at you.');
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
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You ignore him and keep using your phone as he starts walking over to your desk.');
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
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
      scene.img('images/locations/pavlovsk/school/classroom/upskirtselfie.jpg');
    } else {
      qspCall(st, 'flash', 'pussy', 'indoors', 1, 1);
      scene.img('images/locations/pavlovsk/school/classroom/literature/nopanties_upskirt.jpg');
    }
    qspCall(st, 'stat', '');
    scene.text('You decide to have some fun. You quickly slide your phone between your legs and snap some photos under your skirt.');
    scene.text('Mr. Yenotin arrives at your desk and holds his hand out. "Hand it over and you\'ll get it back at the end of the lesson."');
    scene.text('You hand your phone over with a sly smile. The last picture you took is still on the screen.');
    scene.text('Mr. Yenotin looks at what\'s on the screen and his face turns bright red. He quickly turns the screen off and returns to the front of the class before he resumes his lesson looking somewhat flustered.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
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
    scene.text('You deftly shove the phone in your bra, and smile fiendishly as you see the indecisiveness on your teacher\'s face.');
    scene.text('You pretend it\'s a perfectly normal place to store your phone and mock him in a cute voice. "Is there a problem, Mr. Yenotin? Go ahead, take my phone if it\'s not allowed." You thrust your chest forward, the outline of your phone visible through the fabric.');
    scene.text('Deciding it\'s not worth the effort without causing all sorts of awkward situations, he returns to the front of the class as you pull your phone back out and return to your game.');
    scene.text(`Before he continues his lesson, he gives you a warning. "Just remember I'm your homeroom teacher, ${((st as any).pcs_lastname ?? '')}. Guess who I'm going to have over for a meeting?"`);
    scene.text('You don\'t pay much attention to his threat since you\'re too busy on your phone.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Hand over the phone', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/takephone.jpg');
    scene.text('You decide it\'s not worth it and silently hand your phone over to him.');
    scene.text(`He walks back to the front of the class and tosses your phone in a drawer in his desk. "You can have it back after class, ${((st as any).pcs_lastname ?? '')}."`);
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
  } },
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
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Mr. Yenotin then continues the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', '');
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
  scene.build();
}

function enterGeography(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'geo');
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/classroom/geography/geography.jpg');
  (s as any).openpage = (Math.floor(Math.random() * 250) + 1);
  scene.text('You walk into the classroom and see Mrs. Sokoloff sitting by her desk. The rest of your classmates walk in one by one under her watchful eye. Some of them get a friendly smile while others get a stern look.');
  scene.text('Without wasting any time, she sternly tells the class to open their textbooks. "I hope you\'ve all done your homework."');
  scene.text('Mrs. Sokoloff is a no nonsense teacher. She expects discipline and hard work and the ones able to abide by her rules are treated very kindly.');
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
      { label: 'Listen attentively to Mrs. Sokoloff', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Mrs. Sokoloff', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'geo', ((st as any).pcs_intel ?? 0));
    ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic_lessons'] = ((st as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/attention.jpg');
    scene.text('You listen attentively to Mrs. Sokoloff for the duration of the class. Today\'s lesson was interesting and informative, and you feel you learned something from taking part.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 1), 'no_bonus');
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'geo', ((st as any).pcs_intel ?? 0));
    scene.img('images/locations/pavlovsk/school/classroom/ask.jpg');
    scene.text('Mrs. Sokoloff nods approvingly, always happy to see her students engaged in her class. She happily spends some extra time explaining the topic again, and answers any extra questions you might have. You feel smarter, thoroughly understanding today\'s lessons now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention in class', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('Mrs. Sokoloff\'s lecture has fallen into a droning rhythm that has brought you, and most of your classmates, into something of a trance as you slowly approach the end of class. That comes to an abrupt halt when a bang from the front desk nearly startles you out of your chair.');
    scene.text('Without any hesitation, Mrs. Sokoloff starts shouting at Vitek, who\'s fast asleep. Her eyes sharpen as she approaches his desk and slams her hand on it, Vitek struggling to act nonchalant as he works to quickly return to his senses.');
    scene.text('Mrs. Sokoloff scowls at him, and is about to offer a few stern words when the bell rings. He\'ll likely get a talking to, but as class is over, you won\'t get to listen in. One of the girls whispers that Vitek is in deep trouble now.');
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Flash your breasts at Artem', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flash your breasts at Artem', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'tits', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashboobs1.jpg');
    scene.text(`You notice Artem glancing over at you a few times and decide to play with him. The next time he looks over at you while Mrs. Sokoloff's back is turned, you pull your shirt open and his mouth drops open in shock as he stares at your exposed ${((st as any).titsize ?? '')} breasts.`);
    scene.text('A few of the other students notice what you\'re doing and most of them either grin, smile or laugh at your antics. All but Lesco of course, who stares with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).pantyworntype ?? 0) === 'none') {
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Flash ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash ass', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'butt', 'indoors', 2, 1);
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashbutt1.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mrs. Sokoloff\'s desk. After making sure Mrs. Sokoloff isn\'t looking, you pull up the back of your skirt and expose your naked ass to anyone looking.');
    scene.text('Artem\'s mouth drops open and he just stares at your naked ass while Andrey, Valentin, Vanya and Lazar grin at what you\'re doing. Stasya starts texting on her phone, likely telling everyone in school what you just did while Vitek tries to take a picture, but you flip your skirt back down before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
        ]);
      }
    }
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get up and flash panty-clad ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panty-clad ass', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 3);
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/school/classroom/flashpantiesb` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mrs. Sokoloff\'s desk. After making sure Mrs. Sokoloff isn\'t looking, you pull up the back of your skirt and expose your panty clad ass to anyone looking.');
    scene.text('Artem\'s mouth drops open and he just stares at you while Andrey, Valentin, Vanya and Lazar grin at what you\'re doing. Stasya starts texting on her phone, likely telling everyone in school what you just did while Vitek tries to take a picture, but you flip your skirt back down before he gets his phone up. ');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
        ]);
      }
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Flash panties at desk', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash panties at desk', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 2);
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/school/classroom/flashpantiesd` + (Math.floor(Math.random() * 5) + 1) + '.jpg"></center>');
    scene.text('While Mrs. Sokoloff\'s back is turned, you spread your legs wide and pull up the front of your skirt while sitting at your desk, showing off your panties to anyone that looks your way.');
    scene.text('Artem\'s mouth drops open and he just stares at your panties while Andrey, Valentin, Vanya and Lazar grin at what you\'re doing. Stasya starts texting on her phone, likely telling everyone in school what you just did while Vitek tries to take a picture, but you close your legs before he gets his phone up. ');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
        ]);
      }
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get up and flash panties', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panties', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 3);
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/school/classroom/flashpantiesf` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mrs. Sokoloff\'s desk. After making sure Mrs. Sokoloff isn\'t looking, you turn like you\'re about to walk back to your seat, but instead pull up your skirt and expose your panties to anyone looking.');
    scene.text('Artem\'s mouth drops open and he just stares at your panties while Andrey, Valentin, Vanya and Lazar grin at what you\'re doing. Stasya starts texting on her phone, likely telling everyone in school what you just did while Vitek tries to take a picture, but you flip your skirt back down before he gets his phone up. ');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
        ]);
      }
    }
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Remove panties', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Remove panties', handler: (st: GameState) => {
    qspCall(st, 'panties', 'remove');
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/removepanties.jpg');
    scene.text('While sitting at your desk feeling bored, you notice no one is looking at you and so decide to take your panties off, just for something to do. You reach under your skirt and pull them down slowly.');
    scene.text('At first, you have to work against your own weight as you pull them past your ass. Much to your surprise, nobody notices and you carry on. Once you get them past your knees, you open your legs slightly and your panties fall down around your ankles.');
    scene.text('You step out of them, but as you\'re bending down to pick them up, you realize some of the other students have noticed. You quickly pick up your panties, stuff them into your purse and ignore the stares.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
      { label: 'Draw dick in margin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/drawdick.jpg');
    scene.text('You\'re bored and start doodling, which turns into you drawing dicks, complete with balls, on the margin. You even share your handwork with the girl sitting next to you when she glances over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      { label: 'Take selfie', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/takeselfie.jpg');
    scene.text('While looking at your phone, you decide now would be a good time to take a selfie, but what kind of selfie should you take?');
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take bare breasts selfie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Take bare pussy selfie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take bare breasts selfie', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'flash', (-5), 'exhibitionism');
    qspCall(st, 'fame', 'pav', 'sex', 3);
    qspCall(st, 'stat', '');
    (st as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom', 'tits');
    scene.img(`${((st as any).temp_phone_img ?? '')}`);
    scene.text('Feeling particularly brash, you decide taking a selfie of your bare breasts in the middle of class is a great idea. Maybe you\'ll share it, maybe not, but either way it should be fun and might be useful for teasing someone later. You glance around and when everyone is busy, you pull open your shirt and expose your breasts.');
    scene.text('You take a few quick selfies of your exposed breasts until you get one you really like. ' + ((qspFunc(s, 'pcs_has_attr', 'body_tits_at_least_F_cup')) ? ('You fight with your blouse to cover yourself back up. Once it\'s finally back in place, you take a look around and see a few grinning faces among your classmates. ') : ('')) + 'You save that one to your phone and delete the rest.');
    (st as any).temp_phone_img = undefined;
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
        { label: 'Take bare pussy selfie', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'flash', (-5), 'exhibitionism');
    qspCall(st, 'fame', 'pav', 'sex', 3);
    qspCall(st, 'stat', '');
    (st as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom', 'pussy');
    scene.img(`${((st as any).temp_phone_img ?? '')}`);
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You can feel the excitement in your pussy as you imagine yourself baring it in class to take a selfie of it. Maybe you\'ll share it, maybe not, but either way it should be fun and could be fun to send to someone later to tease them with it. You glance around and when everyone is busy, you pull up your skirt and pull your panties aside until your pussy is exposed.');
      scene.text('You take a few quick selfies of your exposed pussy until you get one you really like. You save that one to your phone and delete the rest.');
    } else {
      scene.text('You can feel yourself getting wet as you imagine taking a selfie of yourself while not wearing your panties. Maybe you will share it, maybe not, but either way it could be fun. You glance around and when everyone looks busy, you pull up your skirt, exposing your already bare pussy.');
      scene.text('You take a few quick selfies of your pussy until you get one you really like. You save that one to your phone and delete the rest.');
    }
    (st as any).temp_phone_img = undefined;
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Regular selfie', handler: (st: GameState) => {
    (st as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom');
    scene.img(`${((st as any).temp_phone_img ?? '')}`);
    scene.text('Just a cute selfie. Nothing too daring, yet it gives you something to do. You take several selfies of yourself until you find one you like, which you keep before deleting the rest. You manage to take them without Mrs. Sokoloff even noticing.');
    (st as any).temp_phone_img = undefined;
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Tease Vitek', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/tease.jpg');
    scene.text(`You get Vitek's attention by smiling at him when he looks your direction. Then you lean back in your chair and stretch your arms back over your head, causing your ${((st as any).titsize ?? '')} breasts to thrust out as you do. ` + ((qspFunc(s, 'pcs_has_attr', 'body_tits_small')) ? ('Your uniform stretches around your small breasts to accent what you do have.') : (((qspFunc(s, 'pcs_has_attr', 'body_tits_average')) ? ('Your uniform stretches around your ample breasts, displaying their size.') : ('Your uniform stretches to its limits, threatening to pop buttons.')))));
    scene.text('He watches you intently while you bite your lower lip, looking all coy and seductive to him. Once you finish your stretch, you pretend to act all innocent, like you didn\'t do anything.');
    scene.text(`Vitek glances around before leaning over. "Come on, don't be like that, ${((st as any).pcs_nickname ?? '')}! Show me a little more…"`);
    scene.text('Before you can decide what to do, Stasya, who watched it all, gets your attention.');
    scene.actions([
      { label: 'Stasya\'s suggestion', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb1.jpg');
    scene.text('She leans over and whispers in your ear. "Flash him your tits," she says with a giggle.');
    scene.text('You\'re taken aback by her words. "Why would I do that?!"');
    scene.text('She grins. "To tease him of course, just like your stretch. Go on, do it! Or flash him your panties."');
    qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to flash', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to flash', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Vitek frowns, having heard or guessed what Stasya had tried to get you to do. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Flash your panties', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A9', 'like');
    qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teasep1.jpg');
    scene.text('You turn towards Vitek so you\'re sitting in your seat sideways while facing him before you pull your skirt up a little, showing off a glimpse of your panties to Vitek, which makes him grin wide. He motions for you to pull your skirt up higher to give him a better view.');
    qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Vitek frowns as you pull your skirt back down and turn back to face the front of the class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Raise your skirt more', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A9', 'like');
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/teasep2.jpg');
    scene.text('You pull your skirt up more so your panties are exposed. Vitek grins wide as he stares at your panty covered pussy. You can tell he\'s hoping to see more by the way he\'s looking at you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep3.jpg');
    scene.text('Just then, he reaches over, grabs the front of your panties and tries to pull them down to get a look at your pussy. You grab his hand just in time to stop him from doing it.');
    scene.text(`"Come on, ${((st as any).pcs_nickname ?? '')}, show me your pussy," he whispers at you as he keeps trying to tug your panties down.`);
    qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('You forcefully pull his hand away and Vitek frowns as you pull your skirt back down and turn back to face the front of the class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Show him your pussy', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A9', 'like');
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'flash', 'pussy', 'indoors', 3, 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teasep4.jpg');
    scene.text('"Well let go and I\'ll show you," you tell him with a sly smile. He pauses for second, then lets go of your panties and keeps watching. You lean back and lift one leg as you reach down and pull your panties aside to reveal your pussy to Vitek and anyone else who happens to look your way. You can see the bulge growing in Vitek\'s pants.');
    scene.actions([
      { label: 'Put your pussy away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('After a few minutes, you pull your panties back in place, pull your skirt back down and turn to face the front of the class again. Vitek looks crestfallen, obviously hoping for it to have lasted longer, but you ignore his pleading looks and look to the front of the class. The thrill of the events has sparked your arousal, the evidence of which is currently soaking your panties and poking through your shirt. The remainder of class is a little less boring.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
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
    scene.actions([
      { label: 'Flash your breasts', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A9', 'like');
    qspCall(st, 'flash', 'tits', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb2.jpg');
    scene.text(`You glance around and wait until no one but the two of them are looking before you lean back and pull up your shirt to expose your bare ${((st as any).titsize ?? '')} breasts. Your nipples harden from the excitement as Vitek stares at your bare breasts, looking almost entranced by them.`);
    scene.actions([
      { label: 'Put them away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You pull your shirt down quickly when another student looks over, which causes Stasya to giggle and Vitek to shake his head. Several other students look over as if they just realized that they missed something. You ignore their looks, Vitek\'s stare and Stasya\'s giggles and wait for the lesson to end.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
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
    (st as any).daydream = (Math.floor(Math.random() * 4) + 1);
    if (((st as any).daydream ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
      scene.text('Today\'s lesson doesn\'t particularly interest you and you find yourself drifting off constantly. After a while, you notice Mrs. Sokoloff has stopped talking and is looking at you intently, asking you to pay attention. This is apparently the third time she has asked; you missed the first two while you were lost in your own thoughts. The whole class is staring at you.');
      scene.text(`Mrs. Sokoloff sternly reminds you of the importance of today's lesson. "Pay attention, Miss ${((st as any).pcs_lastname ?? '')}, this is very important! Today's topic is going to be on the exam!"`);
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
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('"Please continue your super-fascinating lesson. Just keep it a bit up-beat please. If you talk any slower, I might fall asleep!" you answer boldly.');
    scene.text('The whole class is stunned into silence as an unimpressed Mrs. Sokoloff crosses her arms.');
    scene.text(`"Get out of my class NOW, ${((st as any).pcs_lastname ?? '')}!" she demands while pointing a finger at the door. "The principal will have a field day with you!"`);
    scene.actions([
      { label: 'Go to principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Reluctantly pay attention', handler: (st: GameState) => {
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'geo', ((st as any).pcs_intel ?? 0));
    scene.img('images/locations/pavlovsk/school/bathroom/angryteacherfemale.jpg');
    scene.text('Mrs. Sokoloff gives you a disapproving glare and returns to her lesson. You roll your eyes and sit through the rest of the lesson in silence, pretending to pay attention.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).daydream ?? 0) === 2) {
        (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 3) + 1));
        if (((st as any).class ?? 0)?.['school_geo_grade'] >= 80) {
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Mrs. Sokoloff call your name. Everyone looks at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('Taking your best guess at what the teacher might be asking, the entire class is shocked as you somehow manage to produce the correct answer, since it must\'ve been obvious to everyone that you were sleeping.');
          scene.text('"Very good, but keep your head up during class please," Mrs. Sokoloff replies.');
        } else {
          qspCall(st, 'mood', 'lower', 'tiny');
          qspCall(st, 'stat', '');
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about since you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Mrs. Sokoloff call your name. Everyone is looking at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('You take your best guess at what they might be asking and some of the others snicker when you say something that\'s obviously wrong. Mrs. Sokoloff scolds you for sleeping in class and asks for someone else to inform you of the correct answer.');
          scene.text('It was an embarrassing experience, but the sudden adrenaline surge helps you to stay awake for the rest of the period.');
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
        ]);
      } else {
        if (((st as any).daydream ?? 0) === 3) {
          (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 4) + 2));
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re suddenly awake when you hear Mrs. Sokoloff. "There\'s a surprise test in 10 minutes. Until then, you\'re free to do whatever you want."');
          scene.text('You panic as you\'ve not prepared anything and begin franticly flipping through the pages as fast as possible, trying to remember the content as the clock ticks down.');
          scene.text('The bell rings out and you\'re awoken by the sheer horror that even your dreams are haunted by boring geography lessons.');
          scene.actions([
            { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 4) + 2));
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('Mrs. Sokoloff is lecturing the class about exotic places around the world. You close your eyes as you start to fantasize about these places.');
          scene.text('You suddenly find yourself standing in front of a group of people with a globe. They tell you that you\'re free to spin it and you\'ll get to travel where it stops for free.');
          scene.text('Full of enthusiasm, you spin it and have a hard time deciding when to stop it. When you finally decide, you notice a familiar name: Pavlovsk. To your dismay, you\'ve picked your hometown. You desperately look around seeking attention, but get no response.');
          scene.text('Just as you\'re about to speak up and plead with the group of people, the bell rings, startling you awake.');
          scene.actions([
            { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
          ]);
        }
      }
    }
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Mrs. Sokoloff\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
      scene.text('You hear Mrs. Sokoloff clear her throat and glance up to see her looking at you sternly.');
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
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    (st as any).demerit = ((st as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You ignore her and continue using your phone as she walks over to your desk.');
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
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
      scene.img('images/locations/pavlovsk/school/classroom/upskirtselfie.jpg');
    } else {
      qspCall(st, 'flash', 'pussy', 'indoors', 1, 1);
      scene.img('images/locations/pavlovsk/school/classroom/literature/nopanties_upskirt.jpg');
    }
    qspCall(st, 'stat', '');
    scene.text('You decide to have some fun. You quickly slide the phone between your legs and snap some photos under your skirt.');
    scene.text(`Mrs. Sokoloff arrives at your desk, arms folded. "And what could you be doing on your phone that's more important than paying attention, Miss ${((st as any).pcs_lastname ?? '')}? Hand it over."`);
    scene.text('"Wouldn\'t you like to know!" you tease. You hand over your phone with the last picture you took still on the screen.');
    scene.text('Mrs. Sokoloff looks at what\'s on the screen and her face contorts in disgust as it turns bright red.');
    scene.text('She turns the screen off and returns to the front of the class while muttering to herself about the youth of today.');
    scene.text('"We\'ll be having a little chat after class young lady!" she says as she places the phone in her desk drawer and continues her lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      ]);
    }
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    if (((st as any).braworntype ?? 0) !== 'none') {
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
    scene.text('You deftly shove the phone in your bra and smile fiendishly as you see the disgruntled look on Mrs. Sokoloff\'s face.');
    scene.text('You pretend it\'s a perfectly normal place to store your phone and mock her in a cute voice. "Is there a problem, Mrs. Sokoloff? Go ahead, take my phone if it\'s not allowed." You thrust your chest forward, the outline of your phone visible through the fabric.');
    scene.text('Mrs. Sokoloff isn\'t impressed and just stands there, her bony hand outstretched. You soon realize that she isn\'t going to leave you alone, so you begrudgingly fish your phone out and hand it over. She quietly returns to the front of the class and continues the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
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
    scene.text('You decide it\'s not worth it and silently hand your phone to Mrs. Sokoloff.');
    scene.text(`"You can have it back after class Miss ${((st as any).pcs_lastname ?? '')}. Now pay attention!" she says as she walks back to her desk.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
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
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Mrs. Sokoloff shakes her head disapprovingly and continues the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
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
  scene.build();
}

function enterHistory(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'his');
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'stat', '');
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/school/classroom/class` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
  (s as any).openpage = (Math.floor(Math.random() * 250) + 1);
  scene.text('You walk into the classroom and see Mrs. Sokoloff sitting by her desk. The rest of your classmates walk in one by one under her watchful eye. Some of the students get a friendly smile while others get a stern look.');
  scene.text('Without wasting time, she sternly tells the class to open their textbooks. "I hope you\'ve all done your homework."');
  scene.text('Mrs. Sokoloff is a no nonsense teacher. She expects discipline and hard work and the ones able to abide by her rules are treated very kindly.');
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
      { label: 'Listen attentively to Mrs. Sokoloff', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Mrs. Sokoloff', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'his', ((st as any).pcs_intel ?? 0));
    ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic_lessons'] = ((st as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/attention.jpg');
    scene.text('You listen attentively to Mrs. Sokoloff for the duration of the class. Today\'s lesson was interesting and informative, and you feel you learned something from taking part.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 1), 'no_bonus');
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'his', ((st as any).pcs_intel ?? 0));
    scene.img('images/locations/pavlovsk/school/classroom/ask.jpg');
    scene.text('Mrs. Sokoloff nods approvingly, always happy to see her students engaged in her class. She happily spends some extra time explaining the topic again, and answers any extra questions you might have. You feel smarter, thoroughly understanding today\'s lessons now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention in class', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('Mrs. Sokoloff\'s lecture has fallen into a droning rhythm that has brought you, and most of your classmates, into something of a trance as you slowly approach the end of the class. That comes to an abrupt halt when a bang from the front desk nearly startles you out of your chair.');
    scene.text('Without any hesitation, Mrs. Sokoloff starts shouting at Radomir, who\'s fast asleep. Her eyes sharpen as she approaches his desk and slams her hand on it as Radomir struggles to act nonchalant as he works to quickly return to his senses.');
    scene.text('Mrs. Sokoloff scowls at him, and is about to offer a few stern words when the bell rings. He\'ll likely get a talking to, but as class is over, you won\'t get to listen in. One of the girls whispers that Radomir is in deep trouble now.');
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Flash your breasts at Petka', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flash your breasts at Petka', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A6', 'like');
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'tits', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashboobs1.jpg');
    scene.text(`You notice Petka glancing over at you a few times and decide to play with him. The next time he looks over at you while Mrs. Sokoloff's back is turned, you pull your shirt open and his mouth drops open in shock as he stares at your exposed ${((st as any).titsize ?? '')} breasts.`);
    scene.text('A few of the other students notice what you\'re doing and most of them either grin, smile or laugh at your antics. All but Lesco of course, who stares with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).pantyworntype ?? 0) === 'none') {
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Flash ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash ass', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'butt', 'indoors', 2, 1);
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashbutt1.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mrs. Sokoloff\'s desk. After making sure Mrs. Sokoloff isn\'t looking, you pull up the back of your skirt and expose your naked ass to anyone looking.');
    scene.text('Petka\'s mouth drops open and he just stares at your naked ass while the rest of the class either grin or smile at what you\'re doing. Lina starts texting on her phone, likely telling everyone in school what you just did while Roman tries to take a picture, but you drop your skirt back in place before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
        ]);
      }
    } else {
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get up and flash panty-clad ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panty-clad ass', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 3);
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/school/classroom/flashpantiesb` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mrs. Sokoloff\'s desk. After making sure Mrs. Sokoloff isn\'t looking, you pull up the back of your skirt and expose your panty clad ass to anyone looking.');
    scene.text('Petka\'s mouth drops open and he just stares at you while the rest of the class either grin or smile at what you\'re doing. Lina starts texting on her phone, likely telling everyone in school what you just did while Roman tries to take a picture, but you drop your skirt back in place before he gets his phone up. ');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
        ]);
      }
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Flash panties at desk', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash panties at desk', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 2);
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/school/classroom/flashpantiesd` + (Math.floor(Math.random() * 5) + 1) + '.jpg"></center>');
    scene.text('While Mrs. Sokoloff\'s back is turned, you spread your legs wide and pull up the front of your skirt while sitting at your desk, showing off your panties to anyone that looks your way.');
    scene.text('Petka\'s mouth drops open and he just stares at your panties while the rest of the students either grin or smile at what you\'re doing. Lina starts texting on her phone, likely telling everyone in school what you just did while Roman tries to take a picture, but you drop your skirt back in place before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
        ]);
      }
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get up and flash panties', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panties', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 3);
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/school/classroom/flashpantiesf` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mrs. Sokoloff\'s desk. After making sure Mrs. Sokoloff isn\'t looking, you turn like you\'re about to walk back to your seat, but instead pull up your skirt and expose your panties to anyone looking.');
    scene.text('Petka\'s mouth drops open and he just stares at your panties while the rest of the class either grin or smile at what you\'re doing. Lina starts texting on her phone, likely telling everyone in school what you just did while Roman tries to take a picture, but you drop your skirt back in place before he gets his phone up. ');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
        ]);
      }
    }
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'willpower', 'exhib', 'self', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Remove panties', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Remove panties', handler: (st: GameState) => {
    qspCall(st, 'panties', 'remove');
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/removepanties.jpg');
    scene.text('While sitting at your desk feeling bored, you notice no one\'s looking at you, so you decide to take your panties off. You reach under your skirt and pull them down slowly.');
    scene.text('At first you have to work against your own weight as you pull them past your ass. Much to your surprise, nobody notices the movement and you carry on. Once you get them past your knees, you open your legs slightly and your panties fall down around your ankles.');
    scene.text('You step out of them, but as you\'re bending over to pick them up, you realize a couple of the other students have noticed. You quickly pick up your panties, stuff them into your purse and ignore the stares.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
      { label: 'Draw dick in margin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/drawdick.jpg');
    scene.text('You\'re bored and start doodling, which turns into you drawing dicks, complete with balls, on the margin. You even share your handwork with the girl sitting next to you when she glances over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      { label: 'Take selfie', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/takeselfie.jpg');
    scene.text('While looking at your phone, you decide now would be a good time to take a selfie, but what kind of selfie should you take?');
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take bare breasts selfie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Take bare pussy selfie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take bare breasts selfie', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'flash', (-5), 'exhibitionism');
    qspCall(st, 'fame', 'pav', 'sex', 3);
    qspCall(st, 'stat', '');
    (st as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom', 'tits');
    scene.img(`${((st as any).temp_phone_img ?? '')}`);
    scene.text('Feeling particularly brash, you decide taking a selfie of your bare breasts in the middle of class is a great idea. Maybe you\'ll share it, maybe not, but either way it should be fun and might be useful for teasing someone later. You glance around and when everyone is busy, you pull open your shirt and expose your breasts.');
    scene.text('You take a few quick selfies of your exposed breasts until you get one you really like. ' + ((qspFunc(s, 'pcs_has_attr', 'body_tits_at_least_F_cup')) ? ('You fight with your blouse to cover yourself back up. Once it\'s finally back in place you take a look around and see a few grinning faces among your classmates. ') : ('')) + 'You save that one to your phone and delete the rest.');
    (st as any).temp_phone_img = undefined;
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
        { label: 'Take bare pussy selfie', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'flash', (-5), 'exhibitionism');
    qspCall(st, 'fame', 'pav', 'sex', 3);
    qspCall(st, 'stat', '');
    (st as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom', 'pussy');
    scene.img(`${((st as any).temp_phone_img ?? '')}`);
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You can feel the excitement in your pussy as you imagine yourself baring it in class to take a selfie of it. Maybe you\'ll share it, maybe not, but either way it should be fun and could be fun to send to someone later. You glance around and when everyone is busy, you pull up your skirt and pull your panties aside until your pussy is exposed.');
      scene.text('You take a few quick selfies of your exposed pussy until you get one you really like. You save that one to your phone and delete the rest.');
    } else {
      scene.text('You can feel yourself getting wet as you imagine taking a selfie of yourself while not wearing any panties. Maybe you\'ll share it, maybe not, but either way it could be fun. You glance around and when everyone looks busy, you pull up your skirt, exposing your already bare pussy.');
      scene.text('You take a few quick selfies of your pussy until you get one you really like. You save that one to your phone and delete the rest.');
    }
    (st as any).temp_phone_img = undefined;
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Regular selfie', handler: (st: GameState) => {
    (st as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom');
    scene.img(`${((st as any).temp_phone_img ?? '')}`);
    scene.text('Just a cute selfie. Nothing too daring, yet it gives you something to do. You take several selfies of yourself until you find one you like, which you keep before deleting the rest. You manage to take them without Mrs. Sokoloff even noticing.');
    (st as any).temp_phone_img = undefined;
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Tease Roman', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/tease.jpg');
    scene.text(`You get Roman's attention by smiling at him when he looks in your direction before you lean back in your chair and stretch your arms back over your head, causing your ${((st as any).titsize ?? '')} breasts to thrust out as you do. ` + ((qspFunc(s, 'pcs_has_attr', 'body_tits_small')) ? ('Your uniform stretches around your small breasts to accent what you do have.') : (((qspFunc(s, 'pcs_has_attr', 'body_tits_average')) ? ('Your uniform stretches around your ample breasts, displaying their size.') : ('Your uniform stretches to its limits, threatening to pop buttons.')))));
    scene.text('He watches you intently while you bite your lower lip, looking all coy and seductive to him. Once you finish your stretch, you pretend to act all innocent, like you didn\'t do anything.');
    scene.text(`He glances around before leaning over. "Come on, don't be like that, ${((st as any).pcs_nickname ?? '')}. Show me a little more…"`);
    scene.text('Before you can decide what to do, Lera, who watched it all, gets your attention.');
    scene.actions([
      { label: 'Lera\'s suggestion', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb1.jpg');
    scene.text('She leans over and whispers in your ear. "Flash him your tits," she says with a giggle.');
    scene.text('You\'re taken aback by her words. "Why would I do that?!"');
    scene.text('She grins. "To tease him of course, just like your stretch. Go on, do it! Or flash him your panties."');
    qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to flash', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to flash', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Roman frowns, having heard or guessed what Lera had tried to get you to do. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Flash your panties', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A157', 'like');
    qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teasep1.jpg');
    scene.text('You turn towards Roman so you\'re sitting in your seat sideways while facing him before you pull your skirt up a little, showing off a glimpse of your panties, which makes him grin wide. He motions for you to pull your skirt up higher to give him a better view.');
    qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Roman frowns as you pull your skirt back down and turn back to face the front of class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Raise your skirt more', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A157', 'like');
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/teasep2.jpg');
    scene.text('You pull your skirt up more so your panties are exposed to Roman, who grins wide as he stares at your panty covered pussy. You can tell he\'s hoping to see more by the way he\'s looking at you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep3.jpg');
    scene.text('Just then, he reaches over, grabs the front of your panties and tries to pull them down to get a look at your pussy. You grab his hand just in time to stop him from doing it.');
    scene.text(`"Come on, ${((st as any).pcs_nickname ?? '')}, show me your pussy," he whispers at you as he keeps trying to tug your panties down.`);
    qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('You forcefully pull his hand away and Roman frowns as you pull your skirt back down and then turn back to face the front of class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Show him your pussy', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A157', 'like');
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'flash', 'pussy', 'indoors', 3, 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teasep4.jpg');
    scene.text('"Well let go and I\'ll show you," you tell him with a sly smile. He pauses, then lets go of your panties and keeps watching. You lean back and lift one leg as you reach down and pull your panties aside to reveal your pussy to Roman and anyone else who happens to look your way. Lera tries to sneak a peek as well as you see the bulge growing in Roman\'s pants.');
    scene.actions([
      { label: 'Put your pussy away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('After a few minutes, you pull your panties back in place, pull your skirt back down and turn to face the front of the class again. Roman looks crestfallen, obviously hoping for it to have lasted longer, but you ignore his pleading looks and look to the front of the class. The thrill of the events has sparked your arousal, the evidence of which is currently soaking your panties and poking through your shirt. This keeps the rest of class from being boring.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
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
    scene.actions([
      { label: 'Flash your breasts', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A157', 'like');
    qspCall(st, 'flash', 'tits', 'indoors', 1, 1);
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb2.jpg');
    scene.text(`You glance around and wait until no one but the two of them are looking before you lean back and pull up your shirt to expose your bare ${((st as any).titsize ?? '')} breasts. Your nipples get hard from the excitement as Roman stares at your bare breasts, looking almost entranced by them.`);
    scene.actions([
      { label: 'Put them away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You pull your shirt down quickly when another student looks over, which causes Lera to giggle and Roman to shake his head. Several other students look over as if they just realized they just missed something. You ignore their looks, Roman\'s stare and Lera\'s giggles and wait for class to end.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
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
    (st as any).daydream = (Math.floor(Math.random() * 4) + 1);
    if (((st as any).daydream ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
      scene.text('Today\'s lesson doesn\'t particularly interest you and you find yourself drifting off constantly. After a while, you notice Mrs. Sokoloff has stopped talking and is looking at you intently, asking you to pay attention. This is apparently the third time she has asked; you missed the first two while you were lost in your own thoughts. The whole class is looking at you.');
      scene.text(`Mrs. Sokoloff sternly reminds you of the importance of today's lesson. "Pay attention, Miss ${((st as any).pcs_nickname ?? '')}, this is very important! Today's topic is going to be on the exam!"`);
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
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('"Please continue your super-fascinating lesson. Just keep it a bit up-beat please. If you talk any slower, I might fall asleep!" you answer boldly.');
    scene.text('The whole class is stunned into silence as an unimpressed Mrs. Sokoloff crosses her arms.');
    scene.text(`"Get out of my class NOW, ${((st as any).pcs_lastname ?? '')}!" she demands while pointing a finger at the door. "The principal will have a field day with you!"`);
    scene.actions([
      { label: 'Go to principal\'s office', handler: (st: GameState) => {
    (st as any).demerit = ((st as any).demerit ?? 0) + (10 + ((st as any).school_bunk ?? 0) * 5);
  }, goto: ['gschool_office', 'principal'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Reluctantly pay attention', handler: (st: GameState) => {
    qspCall(st, 'grades', 'class_activity_attributes', 'school', 'his', ((st as any).pcs_intel ?? 0));
    scene.img('images/locations/pavlovsk/school/bathroom/angryteacherfemale.jpg');
    scene.text('Mrs. Sokoloff gives you a disapproving glare and returns to her lesson. You roll your eyes and sit through the rest of the lesson in silence, pretending to pay attention.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).daydream ?? 0) === 2) {
        (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 3) + 1));
        if (((st as any).class ?? 0)?.['school_his_grade'] >= 80) {
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Mrs. Sokoloff call your name. Everyone looks at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('Taking your best guess at what the teacher might be asking, the entire class is shocked as you somehow manage to produce the correct answer, since it must\'ve been obvious to everyone that you were sleeping.');
          scene.text('"Very good, but keep your head up during class please," Mrs. Sokoloff replies.');
        } else {
          qspCall(st, 'mood', 'lower', 'tiny');
          qspCall(st, 'stat', '');
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about since you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Mrs. Sokoloff call your name. Everyone is looking at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('You take your best guess at what they might be asking. Some of the other students snicker when you say something that\'s obviously wrong. Mrs. Sokoloff scolds you for sleeping in class and asks for someone else to inform you of the correct answer.');
          scene.text('It was an embarrassing experience, but the sudden adrenaline surge helps you to stay awake for the rest of the period.');
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
        ]);
      } else {
        if (((st as any).daydream ?? 0) === 3) {
          (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 4) + 2));
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. Mrs. Sokoloff is droning on about the Tsar\'s family and their life.');
          scene.text('You close your eyes as you fantasize about living at that time as a noble. You\'re in a large room in your underwear while an entourage of women and girls run around presenting a number of dresses for you to wear to the party.');
          scene.text('You\'re having a hard time picking out a specific dress as you really want to impress a certain duke. You turn to your head maiden with a dejected sigh. "So many choices, what should I wear?"');
          scene.text('"The lady will look fabulous in whatever she chooses," the head maiden answers.');
          scene.text('As you\'re about to pick out a dress, you suddenly jolt awake while blurting out your choice. The person sitting closest to you looks at you confused, but luckily no one else hears what you said.');
          scene.actions([
            { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 4) + 2));
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. Mrs. Sokoloff is talking about a grand female leader from the Middle Ages. You\'re finding her story pretty boring and keep dozing off.');
          scene.text('All of a sudden, you find yourself on a battlefield riding a horse. You seem to be wearing a heavy suit of armor and you\'re riding up and down a flank as you\'re trying to amass the troops for an attack.');
          scene.text('You\'re just about to give a grandiose speech when everything goes quiet as you hear church bells ringing loudly in the distance.');
          scene.text('You twitch in your seat upon hearing the class bell ringing.');
          scene.actions([
            { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
          ]);
        }
      }
    }
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Mrs. Sokoloff\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
      scene.text('You hear Mrs. Sokoloff clear her throat and glance up to see her looking at you sternly.');
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
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You ignore her and continue using your phone as she walks over to your desk.');
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
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'flash', 'panties', 'indoors', 1, 1);
      scene.img('images/locations/pavlovsk/school/classroom/upskirtselfie.jpg');
    } else {
      qspCall(st, 'flash', 'pussy', 'indoors', 1, 1);
      scene.img('images/locations/pavlovsk/school/classroom/literature/nopanties_upskirt.jpg');
    }
    qspCall(st, 'stat', '');
    scene.text('You decide to have some fun. You quickly slide the phone between your legs and snap some photos under your skirt.');
    scene.text(`Mrs. Sokoloff arrives at your desk, arms folded. "And what could you be doing on your phone that's more important than paying attention, Miss ${((st as any).pcs_lastname ?? '')}? Hand it over."`);
    scene.text('"Wouldn\'t you like to know!" you tease. You hand over your phone with the last picture you took still on the screen.');
    scene.text('Mrs. Sokoloff looks at what\'s on the screen and her face contorts in disgust as it turns bright red.');
    scene.text('She turns the screen off and returns to the front of the class while muttering to herself about the youth of today.');
    scene.text('"We\'ll be having a little chat after class young lady!" she says as she places the phone in her desk drawer and continues her lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
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
    scene.text('You deftly shove the phone in your bra and smile fiendishly as you see the disgruntled look on Mrs. Sokoloff\'s face.');
    scene.text('You pretend it\'s a perfectly normal place to store your phone and mock her in a cute voice. "Is there a problem, Mrs. Sokoloff? Go ahead, take my phone if it\'s not allowed." You thrust your chest forward, the outline of your phone visible through the fabric.');
    scene.text('Mrs. Sokoloff isn\'t impressed and just stands there, her bony hand outstretched. You soon realize that she isn\'t going to leave you alone, so you begrudgingly fish your phone out and hand it over. She quietly returns to the front of the class and continues the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
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
    scene.text('You decide it\'s not worth it and silently hand your phone to Mrs. Sokoloff.');
    scene.text(`"You can have it back after class Miss ${((st as any).pcs_lastname ?? '')}. Now pay attention!" she says as she walks back to the front of the class.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Mrs. Sokoloff shakes her head disapprovingly and continues the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', '');
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'russian':
      enterRussian(s, scene);
      break;
    case 'geography':
      enterGeography(s, scene);
      break;
    case 'history':
      enterHistory(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_lessons1: LocationDef = {
  name: 'gschool_lessons1',
  title: 'You walk into the classroom and take a seat farthest to the ',
  region: 'other',
  enter: enter,
};
