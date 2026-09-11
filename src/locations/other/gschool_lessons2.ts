import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterComputer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'comp');
  qspCall(s, 'exp_gain', 'compskl', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/classroom/classcomputer.jpg');
  scene.text('You go to your computer class and find a seat at one of the computer stations. Before long, all of your classmates file in and takes their seats as well. Once the bell rings, Mr. Ivanov takes roll call and then gets up and starts walking around the room explaining today\'s lesson. He occasionally stops to look at the screens of various students to make sure they\'re doing it right.');
  scene.text('If he has to correct one of the nerds, he\'ll take his time and quietly explain it to them, giving them lots of encouragement. For everyone else, he loudly proclaims what they did wrong, drawing attention to them and making sure the whole class knows about their mistake in a condescending manner, like he\'s trying to prove how much smarter he is than them.');
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
      { label: 'Listen attentively to Mr. Ivanov [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Mr. Ivanov [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
    qspCall(s, 'exp_gain', 'compskl', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'comp', ((s as any).pcs_intel ?? 0));
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    (s as any).trait_vars['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/attention.jpg');
    scene.text('You listen attentively to Mr. Ivanov for the duration of the class. Today\'s lesson was interesting and informative, and you feel you learned something from taking part.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'grades', 'class_activity_skill', 'school', 'comp', ((s as any).pcs_compskl ?? 0));
    qspCall(s, 'exp_gain', 'compskl', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
    scene.img('images/locations/pavlovsk/school/classroom/ask.jpg');
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Mr. Ivanov nods approvingly. He happily spends some extra time explaining the topic again to you, and answers any extra questions you might have. You feel like you learned a lot, thoroughly understanding today\'s lesson now.');
    } else {
      scene.text('Mr. Ivanov audibly sighs. "Why are you unable to grasp this? I know you\'re not the smartest student, but this is really very simple. Even a small child would understand this!"');
      scene.text('He goes on to explain the part you asked about again, but he does so in a completely belittling manner.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).fuckornot ?? 0) >= 3) {
    // TODO-QSP: act 'Check the listings on "Fuck or Not"': $view_location = 'school_lesson'
    scene.actions([{ label: 'Continue', goto: ['komp_HF_or_not', 'fuckornot'] }]);
  }
  if (((s as any).hotornot ?? 0) >= 2) {
    // TODO-QSP: act 'Check the listings on "Hot or Not"': $view_location = 'school_lesson'
    scene.actions([{ label: 'Continue', goto: ['komp_HF_or_not', 'hotornot'] }]);
  }
  scene.actions([
    { label: 'Don\'t pay attention in class', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You quickly grow bored with the class and instead spend most of the time browsing the internet while Mr. Ivanov is busy or paying attention to your fellow students. You can see several of them seem to have the same idea. The only times you pay attention are when he calls on you to answer a question.');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Flash your breasts at Artem [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flash your breasts at Artem [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'like');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'tits', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashboobs1.jpg');
    // TODO-QSP: dynamic text: You notice Artem glancing over at you a few times and decide to play with him. T...
    scene.text(`You notice Artem glancing over at you a few times and decide to play with him. The next time he looks over at you while Mr. Ivanov's back is turned, you pull your shirt open and his mouth drops open in shock as he stares at your exposed ${((s as any).titsize ?? 0)} breasts.`);
    scene.text('A few of the other students notice what you\'re doing: Sonia grins, Zinaida gives you a slightly disgusted look before turning away, Anushka and Alyona smile about it and Lizaveta starts texting on her phone. Vasily tries to take a picture, but you close your shirt before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'butt', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashbutt1.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mr. Ivanov\'s desk. After making sure Mr. Ivanov isn\'t looking, you pull up the back of your skirt and expose your naked ass to anyone in looking.');
    scene.text('A few of the other students notice what you\'re doing: Artem\'s mouth drops open and he just stares at your naked ass while Sonia grins, Zinaida gives you a slightly disgusted look before turning away, Anushka and Alyona smile about it and Lizaveta starts texting on her phone. Vasily tries to take a picture, but you drop your skirt back in place before he gets his phone up. ');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panty-clad ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesb\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mr. Ivanov\'s desk. After making sure Mr. Ivanov isn\'t looking, you pull up the back of your skirt and expose your panty clad ass to anyone looking.');
    scene.text('A few of the other students notice what you\'re doing: Artem\'s mouth drops open and he just stares at your ass while Sonia grins, Zinaida gives you a slightly disgusted look before turning away, Anushka and Alyona smile about it and Lizaveta starts texting on her phone. Vasily tries to take a picture but you drop your skirt back in place before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Flash panties at desk [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash panties at desk [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesd\' + rand(1, 5) + \'.jpg');
    scene.text('While Mr. Ivanov\'s back is turned, you spread your legs wide and pull up the front of your skirt while sitting at your desk, showing off your panties to anyone that looks your way.');
    scene.text('A few of the others students notice what you\'re doing: Artem just stares with his mouth wide open, Sonia grins, Zinaida gives you a slightly disgusted look before turning away, Anushka and Alyona smile about it and Lizaveta starts texting on her phone. Vasily tries to take a picture, but you close your legs before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get up and flash panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesf\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mr. Ivanov\'s desk. After making sure Mr. Ivanov isn\'t looking, you turn like you\'re about to walk back to your seat, but instead pull up your skirt and expose your panties to anyone looking.');
    scene.text('Artem\'s mouth drops open and he just stares at your ass, Sonia grins, Zinaida gives you a slightly disgusted look before turning away, Anushka and Alyona smile about it and Lizaveta starts texting on her phone. Vasily tries to take a picture, but you drop your skirt back in place before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Remove panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'panties', 'remove');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    scene.img('images/locations/pavlovsk/school/classroom/removepanties.jpg');
    scene.text('While sitting at your desk feeling bored, you notice no one is looking at you, so decide to take your panties off. You reach under your skirt and pull them down slowly. At first, you have to work against your own weight as you pull them past your ass.');
    scene.text('Much to your surprise, no one notices the movement and you carry on. Once you get them past your knees, you open your legs slightly and your panties fall down around your ankles.');
    scene.text('You step out of them, but as you\'re bending over to pick them up, you realize a few of the other students have noticed. You quickly pick up your panties, stuff them into your purse and ignore the stares.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
      { label: 'Draw dick in margin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/drawdick.jpg');
    scene.text('Mr. Ivanov is arrogantly droning on about something you don\'t really care about, so you start doodling to pass the time, which turns into you drawing dicks, complete with balls, on the margin of your notebook. You even share your handwork with the girl sitting next to you when she glances over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
      { label: 'Take selfie', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/takeselfie.jpg');
    scene.text('While looking at your phone you decide now would be a good time to take a selfie, but what kind of selfie should you take?');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take bare breasts selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Take bare pussy selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take bare breasts selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img(`${((s as any).temp_phone_img ?? 0)}`);
    scene.text('Feeling particularly brash, you decide taking a selfie of your bare breasts in the middle of class is a great idea. Maybe you\'ll share it, maybe not, but either way it should be fun and might be useful for teasing someone later. You glance around and when everyone is busy, you pull open your shirt and expose your breasts.');
    // TODO-QSP: dynamic text: You take a few quick selfies of your exposed breasts until you get one you reall...
    scene.text('You take a few quick selfies of your exposed breasts until you get one you really like. \' + iif(func(\'pcs_has_attr\', \'body_tits_at_least_F_cup\'), \'You fight with your blouse to cover yourself back up. Once it\'s finally back in place, you take a look around and see a few grinning faces among your classmates. \', \') + \'You save that one to your phone and delete the rest.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
        { label: 'Take bare pussy selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
      scene.text('You can feel yourself getting wet as you imagine taking a selfie of yourself while not wearing any panties. Maybe you\'ll share it, maybe not, but either way it could be fun. You glance around and when everyone looks busy, you pull up your skirt, exposing your already bare pussy.');
      scene.text('You take a few quick selfies of your pussy until you get one you really like. You save that one to your phone and delete the rest.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Regular selfie', handler: (st: GameState) => {
    scene.img(`${((s as any).temp_phone_img ?? 0)}`);
    scene.text('Just a cute selfie. Nothing too daring, yet it gives you something to do. You take several selfies of yourself until you find one you like, which keep before deleting the rest. You manage to take them without Mr. Ivanov even noticing.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Tease Vasily', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/tease.jpg');
    // TODO-QSP: 'You get Vasily''s attention by smiling at him when he looks in your direction before you lean back ...
    scene.text('He watches you intently while you bite your lower lip, looking all coy and seductive to him. Once you finish your stretch, you pretend to act all innocent, like you didn\'t do anything.');
    // TODO-QSP: dynamic text: He glances around before leaning over. "Come on, don't be like that, <<$pcs_nick...
    scene.text(`He glances around before leaning over. "Come on, don't be like that, ${((s as any).pcs_nickname ?? 0)}. Show me a little more…"`);
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to flash [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Vasily frowns, having heard or guessed what Sonia had tried to get you to do. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for class to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Flash your panties', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'like');
    qspCall(s, 'flash', 'panties', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/teasep1.jpg');
    scene.text('You turn towards Vasily so you\'re sitting in your seat sideways while facing him before you pull your skirt up a little, showing off a glimpse of your panties to Vasily, who grins wide. He motions for you to pull your skirt up higher to give him a better view.');
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
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Vasily frowns as you pull your skirt back down and turn back to face the front of the class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Raise your skirt more', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'like');
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/teasep2.jpg');
    scene.text('You pull your skirt up more so your panties are exposed. He grins wide as he stares at your panty covered pussy. You can tell he\'s hoping to see more by the way he\'s looking at you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep3.jpg');
    scene.text('Just then, he reaches over, grabs the front of your panties and tries to pull them down to get a look at your pussy. You grab his hand just in time to stop him from doing it.');
    // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>, show me your pussy," he whispers as he keeps trying...
    scene.text(`"Come on, ${((s as any).pcs_nickname ?? 0)}, show me your pussy," he whispers as he keeps trying to tug your panties down.`);
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
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('You forcefully pull his hand away and Vasily frowns as you pull your skirt back down and turn back to face the front of the class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Show him your pussy', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'like');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'flash', 'pussy', 'indoors', 3, 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teasep4.jpg');
    scene.text('"Well let go and I\'ll show you," you tell him with a sly smile. He pauses, but then lets go and keeps watching. You lean back and lift one leg as you reach down and pull your panties aside to reveal your pussy to Vasily and anyone else who happens to look your way. Sonia tries to sneak a peek as well as you see the bulge growing in Vasily\'s pants.');
    scene.actions([
      { label: 'Put your pussy away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('After a few minutes, you pull your panties back in place, pull your skirt back down and turn to face the front of class again. Vasily looks crestfallen, obviously hoping for it to have lasted longer, but you ignore his pleading looks and look to the front of the class as the thrill of what you just did keeps the rest of class from being boring.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
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
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'like');
    qspCall(s, 'flash', 'tits', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    scene.img('images/locations/pavlovsk/school/classroom/teaseb2.jpg');
    // TODO-QSP: dynamic text: You glance around and wait until no one but the two of them are looking before y...
    scene.text(`You glance around and wait until no one but the two of them are looking before you lean back and pull up your shirt to expose your bare ${((s as any).titsize ?? 0)} breasts. Your nipples get hard from the excitement as Vasily stares at your bare breasts, looking almost entranced by them.`);
    scene.actions([
      { label: 'Put them away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You pull your shirt down quickly when another student looks over, which causes Sonia to giggle and Vasily to shake his head. Several other students look over as if they just realized they have missed something. You ignore their looks, Vasily\'s stare and Sonia\'s giggles and wait for class to end.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
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
      scene.text('Today\'s lessons doesn\'t particularly interest you and you find yourself drifting off constantly. After a while, you notice Mr. Ivanov has stopped talking and is looking at you intently, asking you to pay attention. This is apparently the third time he has asked; you missed the first two while you were lost in your own thoughts. The whole class is looking at you.');
      if (((s as any).grupTipe ?? 0) === 3) {
        // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, please pay attention, this is very important. Today's t...
        scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, please pay attention, this is very important. Today's topic is going to be on the exam."`);
      } else {
        // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, if you don't want to listen and learn, then I suggest y...
        scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, if you don't want to listen and learn, then I suggest you stop coming to class. Now stop wasting my time and pay attention!"`);
      }
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Be a smart ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Be a smart ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (1);
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('"Oh please do continue your super fascinating lesson! I don\'t think there\'s enough condescending arrogance in your voice though," you answer boldly.');
    scene.text('Some of your classmates burst into loud laughter while others are stunned into silence. Mr. Ivanov turns and gives the rest of class a hard look. "SILENCE!" he loudly booms before turning back to you.');
    // TODO-QSP: dynamic text: "You think you're being funny, Miss <<$pcs_lastname>>? Well you're taking your s...
    scene.text(`"You think you're being funny, Miss ${((s as any).pcs_lastname ?? 0)}? Well you're taking your smart mouth to the principal right now!"`);
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Don\'t leave the classroom [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t leave the classroom [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/bathroom/eartwist.jpg');
    scene.text('"I\'m not the one interrupting your class. That would be you. Just leave me alone. I\'m having… girl problems. Would you like me to talk about them?" you answer brashly, having no intention of getting up.');
    scene.text('He leans in close to you. "Get out of my classroom right now or I\'ll drag you out!"');
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
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
    scene.text('You cross your arms, as if daring him to lay a hand on you. "You even lay a finger on me and I\'ll report you for assault and have you fired." You motion to your classmates. "I\'ve got plenty of witnessess."');
    scene.text('He can only glare at you, clearly irritated by you outwitting him. "Fine, I won\'t touch you, but we\'re going to the principal right now!"');
    scene.text('You begrudgingly get out of your seat and he personally escorts you to the principal\'s office to make sure you actually go there.');
    scene.actions([
      { label: 'Go to principal\'s office', handler: (st: GameState) => {
    (st as any).demerit = ((st as any).demerit ?? 0) + (10 + ((st as any).school_bunk ?? 0) * 5);
  }, goto: ['gschool_office', 'principal'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to principal\'s office', handler: (st: GameState) => {
    (st as any).demerit = ((st as any).demerit ?? 0) + (10 + ((st as any).school_bunk ?? 0) * 5);
  }, goto: ['gschool_office', 'principal'] },
    ]);
  } },
      ]);
    }
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
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'comp', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'exp_gain', 'compskl', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
    scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
    scene.text('You roll your eyes at him when he turns his back and sit through the rest of the lesson in silence. Despite your best efforts, you struggle to pay attention and don\'t learn anything.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
        { label: 'Try to focus on the lesson', handler: (st: GameState) => {
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'comp', ((s as any).pcs_intel ?? 0));
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    qspCall(s, 'exp_gain', 'compskl', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
    scene.img('images/locations/pavlovsk/school/classroom/payattention.jpg');
    scene.text('You don\'t want to get in trouble, so you straighten up in your chair and apologize. Mr. Ivanov gives you one final look before he goes back to teaching the class as you do your best to pay attention.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).daydream ?? 0) === 2) {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 3) + 1);
        if (((s as any).class ?? 0)?.['school_comp_grade'] >= 80) {
          if (((s as any).grupTipe ?? 0) === 3) {
            scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
            scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
            scene.text('You\'re snapped back to consciousness when you hear Mr. Ivanov call your name. Everyone looks at you expectantly, and you realize that you were just asked a question about the topic.');
            scene.text('Taking your best guess at what the teacher might be asking, the entire class is shocked as you somehow manage to produce the correct answer, since it must\'ve been obvious to everyone that you were sleeping.');
            // TODO-QSP: dynamic text: "Very good, Miss <<$pcs_lastname>>, but please keep your head up and listen," Mr...
            scene.text(`"Very good, Miss ${((s as any).pcs_lastname ?? 0)}, but please keep your head up and listen," Mr. Ivanov replies.`);
          } else {
            scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
            scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
            scene.text('You\'re snapped back to consciousness when you hear Mr. Ivanov call your name. Everyone looks at you expectantly, and you realize that you were just asked a question about the topic.');
            scene.text('Taking your best guess at what the teacher might be asking, the entire class is shocked as you somehow manage to produce the correct answer, since it must\'ve been obvious to everyone that you were sleeping.');
            // TODO-QSP: dynamic text: Mr. Ivanov stands in front of you, bewildered. "Lucky guess, <<$pcs_lastname>>. ...
            scene.text(`Mr. Ivanov stands in front of you, bewildered. "Lucky guess, ${((s as any).pcs_lastname ?? 0)}. Now keep your head up and pay attention!" he says, clearly annoyed that you answered correctly.`);
          }
        } else {
          qspCall(s, 'mood', 'lower', 'tiny');
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Mr. Ivanov call your name. Everyone is looking at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('You take your best guess at what they might be asking and some of the other students snicker when you say something that\'s obviously wrong.');
          scene.text('"Pathetic. I honestly wonder why you even bother coming to school at all if you can\'t answer such a simple question. You\'ll be flipping burgers after you graduate," he says in disgust.');
          scene.text('It was an embarrassing experience, but the sudden adrenaline surge helps you to stay awake for the rest of the period.');
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
        ]);
      } else {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 4) + 2);
        scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
        scene.text('You spend the duration of class drifting in and out of sleep when the bell startles you awake and you look around in a confused daze.');
        scene.text('Mr. Ivanov doesn\'t seem to have noticed, nor have most of your classmates, but a few of them give you a knowing smile as you gather up your stuff and leave the classroom.');
        scene.actions([
          { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
    }
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'small');
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Mr. Ivanov\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
      ]);
    } else {
      scene.text('You hear Mr. Ivanov and glance up to see him looking at you sternly.');
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep using your phone [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep using your phone [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/caughtonphone.jpg');
    scene.text('You ignore him and keep playing with your phone as he walks over to your desk.');
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take photos under your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take photos under your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
      scene.img('images/locations/pavlovsk/school/classroom/upskirtselfie.jpg');
    } else {
      qspCall(s, 'flash', 'pussy', 'indoors', 2, 1);
      scene.img('images/locations/pavlovsk/school/classroom/literature/nopanties_upskirt.jpg');
    }
    scene.text('You decide to have some fun. You quickly slide the phone between your legs and snap some photos under your skirt.');
    // TODO-QSP: dynamic text: When Mr. Ivanov arrives at your desk, he gives you a stern look. "I'm not going ...
    scene.text(`When Mr. Ivanov arrives at your desk, he gives you a stern look. "I'm not going to ask twice, ${((s as any).pcs_lastname ?? 0)}. Hand it over!"`);
    scene.text('You give him a sly smile as you hand over your phone with the last picture you took still on the screen.');
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('He looks at the screen and shakes his head before stuffing your phone in his pocket.');
      // TODO-QSP: dynamic text: "You're better than this, Miss <<$pcs_lastname>>. I urge you not to start down t...
      scene.text(`"You're better than this, Miss ${((s as any).pcs_lastname ?? 0)}. I urge you not to start down this path," he says before returning to the front of the class and continuing his lesson.`);
    } else {
      // TODO-QSP: 'He looks at the screen and doesn''t react at first. He walks back to the front of the class, looks ...
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Hide the phone in your bra [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/nophone.jpg');
    scene.text('You deftly shove the phone in your bra, and smile fiendishly as you see the indecisiveness on your teacher\'s face.');
    scene.text('You pretend it\'s a perfectly normal place to store your phone. "Is there a problem, Mr. Ivanov? Go ahead, take my phone if it\'s not allowed," you say in a cute voice as you thrust your chest forward, the outline of your phone visible through the fabric.');
    // TODO-QSP: dynamic text: Realizing he can't retrieve your phone without causing any awkward situations, h...
    scene.text(`Realizing he can't retrieve your phone without causing any awkward situations, he returns to the front of the class in defeat. "I expected nothing less from you, Miss ${((s as any).pcs_lastname ?? 0)}. You never fail to fall to your lowest potential."`);
    scene.text('You pull your phone back out as he resumes his lesson, looking somewhat annoyed.');
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
    scene.img('images/locations/pavlovsk/school/classroom/takephone.jpg');
    scene.text('You decide it\'s not worth the conflict, and silently hand your phone to Mr. Ivanov.');
    // TODO-QSP: dynamic text: "I'll be holding onto this, <<$pcs_lastname>>. Now pay attention and you might a...
    scene.text(`"I'll be holding onto this, ${((s as any).pcs_lastname ?? 0)}. Now pay attention and you might actually learn something for once!" he says as he walks back to the front of the class.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'geography');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (3);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Mr. Ivanov gives you one final hard look before continuing with the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'computer');
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterScience(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'sci');
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/classroom/classsci.jpg');
  scene.text('You go to your science class and find a seat at your lab station. Before long all of your classmates file in and take their seats as well. Miss Orlov takes roll call, then gets up and starts writing on the blackboard. She\'s wearing a fairly short skirt that nearly rides too high when she reaches up to write at the top of the blackboard, which the boys often encourage by asking her questions about whatever it is she\'s written at the top.');
  scene.text('She occasionally asks questions to the class and those that get them right receive heaps of praise while she takes the time to explain the answer to those that get them wrong. Once she\'s sure the student understands their mistake, she moves on with her lesson. She\'s quick to help anyone with a problem or answer questions and always does so with a shy smile.');
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
      { label: 'Listen attentively to Miss Orlov [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Miss Orlov [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'sci', ((s as any).pcs_intel ?? 0));
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
    (s as any).trait_vars['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/attention.jpg');
    scene.text('You listen attentively to Miss Orlov for the duration of the class. Today\'s lesson was interesting and informative, and you feel you learned something from taking part.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'sci', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
    scene.img('images/locations/pavlovsk/school/classroom/ask.jpg');
    scene.text('Miss Orlov nods approvingly. She happily spends some extra time explaining the topic again to you, and answers any extra questions you might have. She only moves on with the lesson once she\'s sure she\'s fully answered your question. You feel like you learned a lot, thoroughly understanding today\'s lesson now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
    ]);
  } },
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention in class', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You quickly grow bored with the class and instead spend most of your time messing around with the lab equipment while Miss Orlov\'s back is turned. You can see several of your classmates seem to have the same idea and the only time you pay attention is when she calls on you to answer a question.');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Flash your breasts at Fedor [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flash your breasts at Fedor [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A5', 'like');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'tits', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashboobs1.jpg');
    // TODO-QSP: dynamic text: You notice Fedor glancing over at you a few times and decide to play with him. T...
    scene.text(`You notice Fedor glancing over at you a few times and decide to play with him. The next time he looks over at you while Miss Orlov's back is turned, you pull your shirt open and his mouth drops open in shock as he stares at your exposed ${((s as any).titsize ?? 0)} breasts.`);
    scene.text('A few of the other students notice what you\'re doing and most of them either grin, smile or laugh at your antics. All but Lesco of course, who stares with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'butt', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashbutt1.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Miss Orlov\'s desk. After making sure Miss Orlov isn\'t looking, you pull up the back of your skirt and expose your naked ass to anyone looking.');
    scene.text('Fedor\'s mouth drops open and he just stares at your naked ass, Andrey and Vanya grin, Stasya gives you an annoyed look when Andrey reacts and Irina starts texting on her phone.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panty-clad ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesb\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Miss Orlov\'s desk. After making sure Miss Orlov isn\'t looking, you pull up the back of your skirt and expose your panty clad ass to anyone looking.');
    scene.text('Fedor\'s mouth drops open and he just stares at your ass, Andrey and Vanya grin, Stasya gives you an annoyed look when Andrey reacts and Irina starts texting on her phone.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Flash panties at desk [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash panties at desk [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesd\' + rand(1, 5) + \'.jpg');
    scene.text('While Miss Orlov\'s back is turned, you spread your legs wide and pull up the front of your skirt while sitting at your desk, which shows off your panties to anyone that looks your way.');
    scene.text('A few of the other students notice what you\'re doing: Fedor\'s mouth drops open and he just stares at your panties, Andrey and Vanya grin, Stasya gives you an annoyed look when Andrey reacts and Irina starts texting on her phone.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get up and flash panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesf\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Miss Orlov\'s desk. After making sure Miss Orlov isn\'t looking, you turn like you\'re about to walk back to your seat, but instead pull up your skirt and expose your panties to anyone looking.');
    scene.text('Fedor\'s mouth drops open and he just stares at your panties, Andrey and Vanya grin, Stasya gives you an annoyed look when Andrey reacts and Irina starts texting on her phone.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Remove panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'panties', 'remove');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/removepanties.jpg');
    scene.text('While sitting at your desk feeling bored, you notice no one\'s looking at you and decide to take your panties off. You reach under your skirt and pull them down slowly. At first, you have to work against your own weight as you pull them past your ass.');
    scene.text('Much to your surprise, no one notices the movement and you carry on. Once you get them past your knees, you open your legs slightly and your panties fall down around your ankles.');
    scene.text('You step out of them, but as you\'re bending over to pick them up, you realize a few of the other students have noticed. You quickly pick up your panties, stuff them into your purse and ignore the stares.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
      { label: 'Draw dick in margin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/drawdick.jpg');
    scene.text('You get bored and start doodling, which turns into you drawing dicks, complete with balls, on the margin of your notebook. You even share your handwork with the girl sitting next to you when she glances over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Take bare pussy selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take bare breasts selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', 1, 'exhibitionism');
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img(`${((s as any).temp_phone_img ?? 0)}`);
    scene.text('Feeling particularly brash, you decide taking a selfie of your bare breasts in the middle of class is a great idea. Maybe you\'ll share it, maybe not, but either way it should be fun and might be useful for teasing someone later. You glance around and when everyone is busy, you pull open your shirt and expose your breasts.');
    // TODO-QSP: dynamic text: You take a few quick selfies of your exposed breasts until you get one you reall...
    scene.text('You take a few quick selfies of your exposed breasts until you get one you really like. \' + iif(func(\'pcs_has_attr\', \'body_tits_at_least_F_cup\'), \'You fight with your blouse to cover yourself back up. Once it\'s finally back in place, you take a look around and see a few grinning faces among your classmates. \', \') + \'You save that one to your phone and delete the rest.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
    ]);
  } },
        { label: 'Take bare pussy selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism');
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
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Regular selfie', handler: (st: GameState) => {
    scene.img(`${((s as any).temp_phone_img ?? 0)}`);
    scene.text('Just a cute selfie. Nothing too daring, yet it gives you something to do. You take several selfies of yourself until you find one you like, which you keep before deleting the rest. You manage to take them without Miss Orlov even noticing.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Daydream', handler: (st: GameState) => {
    (s as any).daydream = Math.floor(Math.random() * 6) + 1;
    if (((s as any).daydream ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
      scene.text('Today\'s lesson doesn\'t particularly interest you and you find yourself drifting off constantly. After a while, you notice Miss Orlov has stopped talking and is looking at you intently, asking you to pay attention. This is apparently the third time she has asked; you missed the first two while you were lost in your own thoughts. The whole class is looking at you.');
      // TODO-QSP: dynamic text: "Please pay attention, Miss <<$pcs_lastname>>, this is very important. Today's t...
      scene.text(`"Please pay attention, Miss ${((s as any).pcs_lastname ?? 0)}, this is very important. Today's topic is going to be on the exam."`);
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Be a smart ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Be a smart ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (1);
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('"Maybe if you spoke louder and with more confidence, I might not fall asleep!" you answer boldly.');
    scene.text('Miss Orlov seems a bit stunned by your comment and takes a minute to regain her composure.');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, please go to the principal," she quietly tells you.
    scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, please go to the principal," she quietly tells you.`);
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Don\'t leave the classroom [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t leave the classroom [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/bitchflip.jpg');
    scene.text('"What good would that do?" you reply. "It\'s not like I\'m the one interrupting your class. That would be you. Just leave me alone."');
    scene.text('Miss Orlov doesn\'t know what to say and looks like she\'s going to cry. After composing herself, she decides to just continue her lesson. You hear one of the boys behind you call you a bitch, so you turn around and flip him off.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to principal\'s office', handler: (st: GameState) => {
    (st as any).demerit = ((st as any).demerit ?? 0) + (10+((st as any).school_bunk ?? 0)*5);
  }, goto: ['gschool_office', 'principal'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Reluctantly pay attention', handler: (st: GameState) => {
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'sci', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('Miss Orlov smiles as you seem to be paying attention and quickly goes back into her lesson. She doesn\'t notice you roll your eyes at her before you sit through the rest of the lesson in silence. Despite your best efforts, you struggle to pay attention and don\'t learn anything.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).daydream ?? 0) === 2) {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 3) + 1);
        if (((s as any).class ?? 0)?.['school_sci_grade'] >= 80) {
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Miss Orlov call your name. Everyone looks at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('Taking your best guess at what the teacher might be asking, the entire class is shocked as you somehow manage to produce the correct answer, since it must\'ve been obvious to everyone that you were sleeping.');
          scene.text('"Very good, but please try to stay awake and pay attention," Miss Orlov says. "I know science might seem boring to you, but it\'s something you need to know."');
        } else {
          qspCall(s, 'mood', 'lower', 'tiny');
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Miss Orlov call your name. Everyone is looking at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('You take your best guess at what they might be asking and some of the other students snicker when you say something that\'s obviously wrong.');
          // TODO-QSP: dynamic text: "You're a smart girl, Miss <<$pcs_lastname>>. I know you know this stuff. You on...
          scene.text(`"You're a smart girl, Miss ${((s as any).pcs_lastname ?? 0)}. I know you know this stuff. You only have to apply yourself and the sky is the limit for you, so please pay attention," Miss Orlov says, trying to encourage you.`);
          scene.text('It was an embarrassing experience having everyone staring at you, but the sudden adrenaline surge helps you to stay awake for the rest of the period.');
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
        ]);
      } else {
        if (((s as any).daydream ?? 0) === 3) {
          (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 4) + 2);
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You fall asleep, but are suddenly awoken by a loud noise. You jerk up and look around. All the other students are gone, but you notice Miss Orlov standing near her desk staring at you. She looks… different. Is that a leather skirt and bra?');
          // TODO-QSP: dynamic text: "This is the last time you fall asleep in my class, <<$pcs_lastname>>! Now come ...
          scene.text(`"This is the last time you fall asleep in my class, ${((s as any).pcs_lastname ?? 0)}! Now come up here for your punishment!" You sit thinking about how this can't be real when she slaps her desk. "Now, ${((s as any).pcs_nickname ?? 0)}!"`);
          scene.actions([
            { label: 'Walk up to her desk', goto: ['gschool_lessons2', 'arina_dream'] },
          ]);
        } else {
          (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 4) + 2);
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You spend the duration of class drifting in and out of sleep when the bell startles you awake and you look around in a confused daze.');
          scene.text('Miss Orlov doesn\'t seem to have noticed, nor have most of your classmates, but a few of them give you a knowing smile as you gather up your stuff and leave the classroom.');
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
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Miss Orlov\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
      scene.text('You hear someone clear their throat and glance up to see Miss Orlov looking at you.');
      // TODO-QSP: dynamic text: "Please put your phone away and pay attention, Miss <<$pcs_lastname>>," she says...
      scene.text(`"Please put your phone away and pay attention, Miss ${((s as any).pcs_lastname ?? 0)}," she says rather timidly.`);
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep using your phone [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep using your phone [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You ignore her and keep using your phone as she walks over to your desk.');
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take photos under your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take photos under your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
      scene.img('images/locations/pavlovsk/school/classroom/upskirtselfie.jpg');
    } else {
      qspCall(s, 'flash', 'pussy', 'indoors', 2, 1);
      scene.img('images/locations/pavlovsk/school/classroom/literature/nopanties_upskirt.jpg');
    }
    scene.text('You decide to have some fun. You quickly slide the phone between your legs and snap some photos under your skirt.');
    // TODO-QSP: dynamic text: Miss Orlov arrives at your desk, her hand outstretched. "Hand it over please, Mi...
    scene.text(`Miss Orlov arrives at your desk, her hand outstretched. "Hand it over please, Miss ${((s as any).pcs_lastname ?? 0)}. This is very important and you need to pay attention."`);
    scene.text('You hand over your phone with a sly smile with the last picture you took still on the screen.');
    scene.text('Miss Orlov looks at what\'s on the screen and she blushes deep red before quickly turning your phone off. She hurries back to the front of the class, tosses your phone in her desk and takes a moment to compose herself before she continues the lesson feeling somewhat flustered.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Hide the phone in your bra [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/nophone.jpg');
    scene.text('You deftly shove the phone in your bra, and smile fiendishly as you see the shocked look on Miss Orlov\'s face.');
    scene.text('You pretend it\'s a perfectly normal place to store your phone. "Is there a problem, Miss Orlov? Go ahead, take my phone if you don\'t think I should have it." You thrust your chest forward, the outline of your phone visible through the fabric.');
    scene.text('She pauses for a moment and then motions for you to follow her out of the class. Once outside, she checks that nobody is around and then plucks your phone from your bra. She then orders you back into class and resumes her lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessonsev1', 'science'] },
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
    scene.text('You decide it\'s not worth it and silently hand your phone to Miss Orlov.');
    scene.text('She tries her best to give you a stern look before returning to the front of the class, placing your phone on her desk and resuming the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Miss Orlov gives you an appreciative smile before continuing with the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMusic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'mus');
  qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'exp_gain', 'vokal', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/classroom/classmusic.jpg');
  scene.text('You sit in the classroom and listen to Mr. Vasilyev go on about how great music is while you wait for class to start. He\'s always upbeat and positive about teaching and encourages all of his students to take part.');
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
      { label: 'Listen attentively to Mr. Vasilyev [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Mr. Vasilyev [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'mus', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'exp_gain', 'vokal', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
    (s as any).trait_vars['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/attention.jpg');
    scene.text('You listen attentively to Mr. Vasilyev for the duration of the class. Today\'s lesson was interesting and informative, and you feel you learned a lot about the history of music and famous artists.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'vokal', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'grades', 'class_activity_skill', 'school', 'mus', 0);
    scene.img('images/locations/pavlovsk/school/classroom/classmusic.jpg');
    scene.text('Mr. Vasilyev smiles, always happy to see his students engaged in his class. He happily spends some extra time explaining the topic again and answers any extra questions you might have. You feel smarter, thoroughly understanding today\'s lesson now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention in class', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/classmusic.jpg');
    scene.text('Mr. Vasilyev has gone on one of his exhaustively long and in-depth explanations about one of the music styles and how it influenced society in all sorts of ways and in return was influenced by current events. You thought this class was about music, not history!');
    scene.text('You feel yourself slowly drifting off and hope that something interesting happens before you fall asleep.');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Flash your breasts at Petka [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flash your breasts at Petka [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'tits', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashboobs1.jpg');
    // TODO-QSP: dynamic text: You notice Petka glancing over at you a few times and decide to play with him. T...
    scene.text(`You notice Petka glancing over at you a few times and decide to play with him. The next time he looks over at you while Mr. Vasilyev's back is turned, you pull your shirt open and his mouth drops open in shock as he stares at your exposed ${((s as any).titsize ?? 0)} breasts.`);
    scene.text('A few of the other students notice what you\'re doing and most of them either grin, smile or laugh at your antics. All but Lesco of course, who stares with his mouth open. Lavrenti tries to take a picture, but you close your shirt before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'butt', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashbutt1.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mr. Vasilyev\'s desk. After making sure Mr. Vasilyev isn\'t looking, you pull up the back of your skirt and expose your naked ass to anyone looking.');
    scene.text('Petka\'s mouth drops open and he just stares at your naked ass, Katja looks shocked then grins at what you\'re doing, Bella gives you a slightly disgusted look before turning away and Lariska and Lina smile about it before Lina starts texting on her phone. Lavrenti tries to take a picture, but you drop your skirt back in place before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panty-clad ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesb\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mr. Vasilyev\'s desk. After making sure Mr. Vasilyev isn\'t looking, you pull up the back of your skirt and expose your panty clad ass to anyone looking.');
    scene.text('Petka\'s mouth drops open and he just stares at you, Katja looks shocked then grins at what you\'re doing, Bella gives you a slightly disgusted look before turning away, Lariska and Lina smile about it before Lina starts texting on her phone. Lavrenti tries to take a picture, but you drop your skirt back in place before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Flash panties at desk [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash panties at desk [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesd\' + rand(1, 5) + \'.jpg');
    scene.text('While Mr. Vasilyev\'s back is turned, you spread your legs wide and pull up the front of your skirt while sitting at your desk, which shows off your panties to anyone that looks your way.');
    scene.text('A few of the other students notice what you\'re doing: Petka\'s mouth drops open and he just stares at you, Katja looks shocked then grins at what you\'re doing, Bella gives you a slightly disgusted look before turning away and Lariska and Lina smile about it before Lina starts texting on her phone. Lavrenti tries to take a picture, but you close your legs before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get up and flash panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesf\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mr. Vasilyev\'s desk. After making sure Mr. Vasilyev isn\'t looking, you turn like you\'re about to walk back to your seat, but instead pull up your skirt and expose your panties to anyone looking.');
    scene.text('Petka\'s mouth drops open and he just stares at you, Katja looks shocked then grins at what you\'re doing, Bella gives you a slightly disgusted look before turning away and Lariska and Lina smile about it before Lina starts texting on her phone. Lavrenti tries to take a picture, but you drop your skirt back in place before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Remove panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'panties', 'remove');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/removepanties.jpg');
    scene.text('While sitting at your desk feeling bored, you notice no one\'s looking at you, so you decide to take your panties off. You reach under your skirt and pull them down slowly.');
    scene.text('At first, you have to work against your own weight as you pull them past your ass. Much to your surprise, nobody notices the movement and you carry on. Once you get them past your knees you open your legs slightly and your panties fall down around your ankles.');
    scene.text('You step out of them, but as you\'re bending over to pick them up, you realize a few of the other students have noticed. You quickly pick up your panties, stuff them into your purse and ignore the stares.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
      { label: 'Draw dick in margin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/drawdick.jpg');
    scene.text('You get bored and start doodling, which turns into you drawing dicks, complete with balls, on the margins of your notebook. You even share your handwork with the girl sitting next to you when she glances over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Take bare pussy selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take bare breasts selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img(`${((s as any).temp_phone_img ?? 0)}`);
    scene.text('Feeling particularly brash, you decide taking a selfie of your bare breasts in the middle of class is a great idea. Maybe you\'ll share it, maybe not, but either way it should be fun and might be useful for teasing someone later. You glance around and when everyone is busy, you pull open your shirt and expose your breasts.');
    // TODO-QSP: dynamic text: You take a few quick selfies of your exposed breasts until you get one you reall...
    scene.text('You take a few quick selfies of your exposed breasts until you get one you really like. \' + iif(func(\'pcs_has_attr\', \'body_tits_at_least_F_cup\'), \' You fight with your blouse to cover yourself back up. Once it\'s finally back in place, you take a look around and see a few grinning faces among your classmates. \', \') + \'You save that one to your phone and delete the rest.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
        { label: 'Take bare pussy selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Regular selfie', handler: (st: GameState) => {
    scene.img(`${((s as any).temp_phone_img ?? 0)}`);
    scene.text('Just a cute selfie. Nothing too daring, yet it gives you something to do. You take several selfies of yourself until you find one you like, which you keep before deleting the rest. You manage to take them without Mr. Vasilyev even noticing.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Tease Lavrenti', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/tease.jpg');
    // TODO-QSP: 'You get Lavrenti''s attention by smiling at him when he looks in your direction before you lean bac...
    scene.text('He watches you intently while you bite your lower lip looking all coy and seductive to him. Once you finish your stretch, you pretend to act all innocent, like you didn\'t do anything.');
    // TODO-QSP: dynamic text: Lavrenti glances around before leaning over. "Come on, don't be like that, <<$pc...
    scene.text(`Lavrenti glances around before leaning over. "Come on, don't be like that, ${((s as any).pcs_nickname ?? 0)}. Show me a little more…"`);
    scene.text('Before you can decide what to do, Katja, who watched it all, gets your attention.');
    scene.actions([
      { label: 'Katja\'s suggestion', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb1.jpg');
    scene.text('She leans over and whispers in your ear. "Flash him your tits," she says with a giggle.');
    scene.text('You\'re aback by her words. "Why would I do that?!"');
    scene.text('She grins. "To tease him of course, just like your stretch. Go on, do it! Or flash him your panties."');
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to flash [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to flash [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Lavrenti frowns, having heard or guessed what Katja had tried to get you to do. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Flash your panties', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A155', 'like');
    qspCall(s, 'flash', 'panties', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teasep1.jpg');
    scene.text('You turn towards Lavrenti so you are sitting in your seat sideways while facing him before you pull your skirt up a little, showing off a glimpse of your panties to Lavrenti, who grins wide. He motions for you to pull your skirt up higher to give him a better view.');
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
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Lavrenti frowns as you pull your skirt back down and turn back to face the front of the class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Raise your skirt more', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A155', 'like');
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/teasep2.jpg');
    scene.text('You pull your skirt up more so your panties are exposed to Lavrenti. He grins wide as he stares at your panty covered pussy. You can tell he\'s hoping to see more by the way he\'s looking at you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep3.jpg');
    scene.text('Just then, he reaches over, grabs the front of your panties and tries to pull them down to get a look at your pussy. You grab his hand just in time to stop him from doing it.');
    // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>! Show me your pussy," he whispers at you as he keeps...
    scene.text(`"Come on, ${((s as any).pcs_nickname ?? 0)}! Show me your pussy," he whispers at you as he keeps trying to tug your panties down.`);
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
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('You forcefully pull his hand away and Lavrenti frowns as you pull your skirt back down and turn back to face the front of the class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Show him your pussy', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A155', 'like');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'flash', 'pussy', 'indoors', 3, 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teasep4.jpg');
    scene.text('Well let go and I\'ll show you," you tell him with a sly smile. He pauses, but then lets go and keeps watching. You lean back and lift one leg as you reach down and pull your panties aside to reveal your pussy to Lavrenti and anyone else to see who happens to look your way. Katja tries to sneak a peek as well. You can see the bulge growing in Lavrenti\'s pants.');
    scene.actions([
      { label: 'Put your pussy away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('After a few minutes, you pull your panties back in place, pull your skirt back down and turn to face the front of the class again. Lavrenti looks crestfallen, obviously hoping for it to have lasted longer, but you ignore his pleading looks and look to the front of the class. The thrill of what you just did keeps the rest of class from being boring.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
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
    qspCall(s, 'npc_relationship', 'modify', 'A155', 'like');
    qspCall(s, 'flash', 'tits', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb2.jpg');
    // TODO-QSP: dynamic text: You glance around and wait until no one but the two of them are looking before y...
    scene.text(`You glance around and wait until no one but the two of them are looking before you lean back and pull up your shirt to expose your bare ${((s as any).titsize ?? 0)} breasts. Your nipples get hard from the excitement as Lavrenti stares at your bare breasts, looking almost entranced by them.`);
    scene.actions([
      { label: 'Put them away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You pull your shirt down quickly when another student looks over, which causes Katja to giggle and Lavrenti to shake his head. Several other students look over as if they just realized they have missed something. You ignore their looks, Lavrenti\'s stare and Katja\'s giggles and wait for class to end.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
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
      scene.text('Today\'s lesson doesn\'t particularly interest you and you find yourself drifting off constantly. After a while, you notice Mr. Vasilyev has stopped talking and is looking at you intently, asking you to pay attention. This is apparently the third time he has asked; you missed the first two while you were lost in your own thoughts. The whole class is looking at you.');
      // TODO-QSP: dynamic text: Mr. Vasilyev tries to convince you of the importance of today's lesson. "Please ...
      scene.text(`Mr. Vasilyev tries to convince you of the importance of today's lesson. "Please pay attention, Miss ${((s as any).pcs_lastname ?? 0)}, this is very important. Today's topic is going to be on the exam."`);
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Be a smart ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Be a smart ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (1);
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/payattention.jpg');
    scene.text('"Of course. Please continue your incredibly fascinating speech about how music is your passion. Remind me why I should care?" you answer boldly.');
    scene.text('The whole class is stunned into silence at you insulting Mr. Vasilyev, who just stares at you unimpressed with his arms folded.');
    // TODO-QSP: dynamic text: "I won't tolerate such disrespectful behavior in my class, Miss <<$pcs_lastname>...
    scene.text(`"I won't tolerate such disrespectful behavior in my class, Miss ${((s as any).pcs_lastname ?? 0)}. Now get out and report to the principal now!"`);
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Don\'t leave the classroom [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t leave the classroom [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/payattention.jpg');
    scene.text('"What good would that do? I\'m not interrupting your class. Go back to your boring lecture and leave me alone!" you answer brashly, having no intention of getting up.');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, you will get out of my class NOW!" he demands while poi...
    scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, you will get out of my class NOW!" he demands while pointing at the door. You scoff and begrudgingly leave the class.`);
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
      ]);
    }
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
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'mus', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'vokal', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 0);
    scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
    scene.text('You roll your eyes at him when he turns his back and sit through the rest of the lesson in silence. Despite your best efforts, you struggle to pay attention and don\'t learn anything.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).daydream ?? 0) === 2) {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 3) + 1);
        if (((s as any).class ?? 0)?.['school_mus_grade'] >= 80) {
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Mr. Vasilyev call your name. Everyone looks at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('Taking your best guess at what the teacher might be asking, the entire class is shocked as you somehow manage to produce the correct answer, since it must\'ve been obvious to everyone that you were sleeping.');
          scene.text('"Very good, but try and keep your head up during class please," Mr. Vasilyev replies.');
        } else {
          qspCall(s, 'mood', 'lower', 'tiny');
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Mr. Vasilyev call your name. Everyone is looking at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('You take your best guess at what they might be asking and some of the other students snicker when you say something that\'s obviously wrong. Mr. Vasilyev chides you for sleeping in class and asks for someone else to inform you of the correct answer.');
          scene.text('It was an embarrassing experience, but the sudden adrenaline surge helps you to stay awake for the rest of the period.');
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
        ]);
      } else {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 4) + 2);
        scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
        scene.text('You fell asleep and the end of class bell wakes you up.');
        scene.actions([
          { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
    }
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Mr. Vasilyev\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/caughtonphone.jpg');
      scene.text('You hear Mr. Vasilyev clear his throat and glance up to see him looking at you sternly.');
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep using your phone [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep using your phone [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/caughtonphone.jpg');
    scene.text('You ignore him and continue using your phone as he walks over to your desk.');
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.text('<br>You don\'t have enough willpower to take an upskirt photo of yourself.');
    } else {
      scene.actions([
        { label: 'Take photos under your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
      scene.img('images/locations/pavlovsk/school/classroom/upskirtselfie.jpg');
    } else {
      qspCall(s, 'flash', 'pussy', 'indoors', 2, 1);
      scene.img('images/locations/pavlovsk/school/classroom/literature/nopanties_upskirt.jpg');
    }
    scene.text('You decide to have some fun. You quickly slide the phone between your legs and snap some photos under your skirt.');
    scene.text('Mr. Vasilyev arrives at your desk. "Unless you\'re listening to some music, then what\'s more important than paying attention in my class? Hand it over."');
    scene.text('"Wouldn\'t you like to know!" you tease. You hand over your phone with the last picture you took still on the screen.');
    scene.text('You hold in a laugh when you see the wide eyed and shocked look on his face when he sees what\'s on the screen. He blushes a bright red as he hastily turns the screen off and returns to the front of the class, where he composes himself and gets ready to continue the lesson.');
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
          { label: 'Hide the phone in your bra [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/nophone.jpg');
    scene.text('You deftly shove the phone in your bra, and smile fiendishly as you see the flabbergasted look on your teacher\'s face.');
    scene.text('You pretend it\'s a perfectly normal place to store your phone and mock him in a cute voice. "Is there a problem, Mr. Vasilyev? Go ahead, take my phone if it\'s not allowed." You thrust your chest forward, the outline of your phone visible through the fabric.');
    // TODO-QSP: dynamic text: Mr. Vasilyev is stunned by your move. "You know that this isn't appropriate, Mis...
    scene.text(`Mr. Vasilyev is stunned by your move. "You know that this isn't appropriate, Miss ${((s as any).pcs_lastname ?? 0)}. Please hand it over."`);
    scene.text('You have no intention of doing so and wiggle your chest. He soon admits defeat and returns to his lesson as you pull your phone back out and return to your game.');
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
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (3);
    scene.img('images/locations/pavlovsk/school/classroom/takephone.jpg');
    scene.text('You decide it\'s not worth it and silently hand your phone to Mr. Vasilyev.');
    scene.text('He tuts and shakes his head before walking back to the front of the class. "You can have it back after class. Now pay attention please."');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Mr. Vasilyev looks at you gratefully before continuing the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'music');
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBiology(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'bio');
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/classroom/classbiology.jpg');
  scene.text('You go to your biology class and find a seat at your lab station. Before long, all your classmates file in and take their seats as well. Miss Orlov takes roll call before she gets up and starts walking around the room explaining today\'s lesson, occasionally stopping at each lab station to make sure the students are doing the work correctly. She often gives words of encouragement if things are going well or stops and helps the student understand what they\'re doing wrong.');
  scene.text('She occasionally asks questions to the class and those that get them right receive heaps of praise while she takes the time to explain the answer to those that get them wrong. Once she\'s sure the student understands their mistake, she moves on with her lesson. She\'s quick to help anyone with a problem or answer questions and always does so with a shy smile.');
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
      { label: 'Listen attentively to Miss Orlov [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Miss Orlov [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'bio', ((s as any).pcs_intel ?? 0));
    (s as any).trait_vars['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/attention.jpg');
    scene.text('You listen attentively to Miss Orlov for the duration of the class. Today\'s lesson was interesting and informative and you feel you learned from taking part in class.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1, 'no_bonus');
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'bio', ((s as any).pcs_intel ?? 0));
    scene.img('images/locations/pavlovsk/school/classroom/ask.jpg');
    scene.text('Miss Orlov nods approvingly. She happily spends some extra time explaining the topic again and answers any extra questions you might have. She only moves on with the lesson once she\'s sure she\'s fully answered your question. You feel like you learned a lot, thoroughly understanding today\'s lesson now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
  } },
    ]);
  } },
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention in class', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You quickly grow bored with the class and instead spend most of your time messing around with the lab equipment while Miss Orlov\'s back is turned. You can see several of your classmates seem to have the same idea. The only time you pay attention is when she calls on you to answer a question.');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Flash your breasts at Lesco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flash your breasts at Lesco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A7', 'like');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'tits', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashboobs1.jpg');
    // TODO-QSP: dynamic text: You notice Lesco glancing over at you a few times and decide to play with him. T...
    scene.text(`You notice Lesco glancing over at you a few times and decide to play with him. The next time he looks over at you while Miss Orlov's back is turned, you pull your shirt open and his mouth drops open in shock as he stares at your exposed ${((s as any).titsize ?? 0)} breasts.`);
    scene.text('A few of the other students notice what you\'re doing and most of them either grin, smile or laugh at your antics. All but Lesco of course, who continues to stare at you with his mouth open.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'butt', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashbutt1.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Miss Orlov\'s desk. After making sure Miss Orlov isn\'t looking, you pull up the back of your skirt and expose your naked ass to anyone looking.');
    scene.text('Lesco and Artem\'s mouths drop open as they just stare at your naked ass while Dan, Lavrenti and Lazar grin. Irina starts texting on her phone, likely telling everyone about what you just did.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
  } },
    ]);
  } },
        ]);
      }
    } else {
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get up and flash panty-clad ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panty-clad ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesb\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Miss Orlov\'s desk. After making sure Miss Orlov isn\'t looking, you pull up the back of your skirt and expose your panty clad ass to anyone looking.');
    scene.text('Lesco and Artem\'s mouths drop open as they just stare at you while Dan, Lavrenti and Lazar grin. Irina starts texting on her phone, likely telling everyone about what you just did.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
  } },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Flash panties at desk [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash panties at desk [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesd\' + rand(1, 5) + \'.jpg');
    scene.text('While Miss Orlov\'s back is turned, you spread your legs wide and pull up the front of your skirt while sitting at your desk, which shows off your panties to anyone that looks your way.');
    scene.text('Lesco and Artem\'s mouths drop open as they just stare at your panties while Dan, Lavrenti and Lazar grin. Irina starts texting on her phone, likely telling everyone about what you just did.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
  } },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get up and flash panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up and flash panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesf\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Miss Orlov\'s desk. After making sure Miss Orlov isn\'t looking, you turn like you\'re about to walk back to your seat, but instead pull up your skirt and expose your panties to anyone looking.');
    scene.text('Lesco and Artem\'s mouths drop open as they just stare at your panties while Dan, Lavrenti and Lazar grin. Irina starts texting on her phone, likely telling everyone about what you just did.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Remove panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'panties', 'remove');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/removepanties.jpg');
    scene.text('While sitting at your desk feeling bored, you notice no one\'s looking at you, so you decide to take your panties off. You reach under your skirt and pull them down slowly.');
    scene.text('At first, you have to work against your own weight as you pull them past your ass. Much to your surprise, nobody notices the movement and you carry on. Once you get them past your knees, you open your legs slightly and your panties fall down around your ankles.');
    scene.text('You step out of them, but as you\'re bending over to pick them up, you realize a few of the other students have noticed. You quickly pick up your panties, stuff them into your purse and ignore the stares.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
  } },
      { label: 'Draw dick in margin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/drawdick.jpg');
    scene.text('You get bored and start doodling, which turns into you drawing dicks, complete with balls, in the margin of your notebook. You even share your handwork with the girl sitting next to you when she glances over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Take bare pussy selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take bare breasts selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img(`${((s as any).temp_phone_img ?? 0)}`);
    scene.text('Feeling particularly brash, you decide taking a selfie of your bare breasts in the middle of class is a great idea. Maybe you\'ll share it, maybe not, but either way it should be fun and might be useful for teasing someone later. You glance around and when everyone is busy, you pull open your shirt and expose your breasts.');
    // TODO-QSP: dynamic text: You take a few quick selfies of your exposed breasts until you get one you reall...
    scene.text('You take a few quick selfies of your exposed breasts until you get one you really like. \' + iif(func(\'pcs_has_attr\', \'body_tits_at_least_F_cup\'), \'You fight with your blouse to cover yourself back up. Once it\'s finally back in place, you take a look around and see a few grinning faces among your classmates. \', \') + \'You save that one to your phone and delete the rest.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
  } },
    ]);
  } },
        { label: 'Take bare pussy selfie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
    qspCall(st, 'gschool_lessonsev1', 'science');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Regular selfie', handler: (st: GameState) => {
    scene.img(`${((s as any).temp_phone_img ?? 0)}`);
    scene.text('Just a cute selfie. Nothing too daring, yet it gives you something to do. You take several selfies of yourself until you find one you like, which you keep before deleting the rest. You manage to take them without Miss Orlov even noticing.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
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
      scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
      scene.text('Today\'s lesson doesn\'t particularly interest you and you find yourself drifting off constantly. After a while, you notice Miss Orlov has stopped talking and is looking at you intently, asking you to pay attention. This is apparently the third time she has asked; you missed the first two while you were lost in your own thoughts. The whole class is looking at you.');
      scene.text('"I know it might be boring, but please pay attention since this is very important. Today\'s topic is going to be on the exam."');
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Be a smart ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Be a smart ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('"Maybe if you spoke louder and with more confidence, I might not fall asleep!" you answer boldly.');
    scene.text('Miss Orlov is stunned by your comment and takes a minute to regain her composure.');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, please go to the principal," she quietly asks.
    scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, please go to the principal," she quietly asks.`);
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Don\'t leave the classroom [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t leave the classroom [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/bitchflip.jpg');
    scene.text('"What good would that do?" you reply. "It\'s not like I\'m the one interrupting your class. That would be you. Just leave me alone!"');
    scene.text('Miss Orlov doesn\'t know what to say and looks like she\'s going to cry. After composing herself, she decides to just continue her lesson. You hear one of the boys behind you call you a bitch, so you turn around and flip him off.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
  } },
    ]);
  } },
      ]);
    }
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
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'bio', ((s as any).pcs_intel ?? 0));
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('Miss Orlov smiles as you seem to be paying attention and quickly goes back into her lesson. She doesn\'t seem to notice when you roll your eyes and you sit through the rest of the lesson in silence. Despite your best efforts, you struggle to pay attention and don\'t learn anything.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).daydream ?? 0) === 2) {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 3) + 1);
        if (((s as any).class ?? 0)?.['school_bio_grade'] >= 80) {
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Miss Orlov call your name. Everyone looks at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('Taking your best guess at what the teacher might be asking, the entire class is shocked as you somehow manage to produce the correct answer, since it must\'ve been obvious to everyone that you were sleeping.');
          scene.text('"Very good, but please try to stay awake and pay attention," Miss Orlov replies. "I know biology might seem boring to you, but it\'s something you need to know." ');
        } else {
          qspCall(s, 'mood', 'lower', 'tiny');
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Miss Orlov call your name. Everyone is looking at you expectantly, and realize that you were just asked a question about the topic.');
          scene.text('You take your best guess at what they might be asking and some of the other students snicker when you say something that\'s obviously wrong.');
          // TODO-QSP: dynamic text: "You're a smart girl, Miss <<$pcs_lastname>>. I know you know this stuff. You on...
          scene.text(`"You're a smart girl, Miss ${((s as any).pcs_lastname ?? 0)}. I know you know this stuff. You only have to apply yourself and the sky is the limit for you, so please pay attention." Miss Orlov says, trying to encourage you.`);
          scene.text('It was an embarrassing experience having everyone staring at you, but the sudden adrenaline surge helps you to stay awake for the rest of the period.');
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
  } },
        ]);
      } else {
        if (((s as any).daydream ?? 0) === 3) {
          (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 4) + 2);
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You fall asleep, but are suddenly awoken by a loud noise. You jerk up and look around. All the other students are gone, but you notice Miss Orlov standing near her desk staring at you. She looks… different. Is that a leather skirt and bra?');
          // TODO-QSP: dynamic text: "This is the last time you fall asleep in my class, <<$pcs_lastname>>! Now come ...
          scene.text(`"This is the last time you fall asleep in my class, ${((s as any).pcs_lastname ?? 0)}! Now come up here for your punishment!" You sit thinking about how this can't be real when she slaps her desk. "Now, ${((s as any).pcs_nickname ?? 0)}!"`);
          scene.actions([
            { label: 'Walk up to her desk', goto: ['gschool_lessons2', 'arina_dream'] },
          ]);
        } else {
          (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 4) + 2);
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You spend the duration of class drifting in and out of sleep when the bell startles you awake and you look around in a confused daze.');
          scene.text('Miss Orlov doesn\'t seem to have noticed, nor have most of your classmates, but a few of them give you a knowing smile as you gather up your stuff and leave the classroom.');
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
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Miss Orlov\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
      // TODO-QSP: dynamic text: You hear someone clear their throat and glance up to see Miss Orlov looking at y...
      scene.text(`You hear someone clear their throat and glance up to see Miss Orlov looking at you. "Please put your phone away and pay attention, Miss ${((s as any).pcs_lastname ?? 0)}."`);
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep using your phone [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep using your phone [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You ignore her and keep playing with your phone as she walks over to your desk.');
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take photos under your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take photos under your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
      scene.img('images/locations/pavlovsk/school/classroom/upskirtselfie.jpg');
    } else {
      qspCall(s, 'flash', 'pussy', 'indoors', 2, 1);
      scene.img('images/locations/pavlovsk/school/classroom/literature/nopanties_upskirt.jpg');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/upskirtselfie.jpg');
    scene.text('You decide to have some fun. You quickly slide the phone between your legs and snap some photos under your skirt.');
    // TODO-QSP: dynamic text: Miss Orlov arrives at your desk, her hand outstretched. "Hand it over please, Mi...
    scene.text(`Miss Orlov arrives at your desk, her hand outstretched. "Hand it over please, Miss ${((s as any).pcs_lastname ?? 0)}. This is very important and you need to pay attention."`);
    scene.text('You hand over your phone with a sly smile with the last picture you took still on the screen.');
    scene.text('Miss Orlov looks at what\'s on the screen and she blushes deep red before quickly turning your phone off. She hurries back to the front of the class, tosses your phone in her desk and takes a moment to compose herself before she continues the lesson feeling somewhat flustered.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Hide the phone in your bra [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/nophone.jpg');
    scene.text('You deftly shove the phone in your bra, and smile fiendishly as you see the shocked look on Miss Orlov\'s face.');
    scene.text('You pretend it\'s a perfectly normal place to store your phone. "Is there a problem, Miss Orlov? Go ahead, take my phone if you don\'t think I should have it." You thrust your chest forward, the outline of your phone visible through the fabric.');
    scene.text('She pauses for a moment and then motions for you to follow her out of the class. Once outside, she checks that nobody is around and then plucks your phone from your bra. She then orders you back into class and resumes her lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    (st as any).demerit = ((st as any).demerit ?? 0) + (10+((st as any).school_bunk ?? 0)*5);
  }, goto: ['gschool_lessons', 'short_break'] },
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
    scene.img('images/characters/shared/headshots_main/big26.jpg');
    scene.text('You decide it\'s not worth it and silently hand your phone to Miss Orlov.');
    scene.text('She tries her best to give you a stern look before returning to the front of the class, placing your phone on her desk and resuming the lesson.');
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
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Miss Orlov gives you appreciative smile before continuing with the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev1', 'biology');
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterArinaDream(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/teacher/arina/sex/dream/dream1.jpg');
  scene.text('As you walk up to her desk, the lighting turns red and you notice the Saint Andrew\'s cross in front of the chalkboard, with a variety of sex toys scattered across her desk.');
  scene.text('She takes a seat on the edge of her desk. "Get down on your knees and lick my shoes clean."');
  scene.text('"What?" you ask, shocked at her request.');
  scene.text('"Lick my shoes clean or your punishment will be even worse!" she sternly tells you. You can\'t help yourself as you pick up her foot and start licking her shoes.');
  qspCall(s, 'arousal', 'BDSM', 3, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Further punishment', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/arina/sex/dream/dream2.jpg');
    scene.text('Once you\'ve cleaned her shoe, she gets up. "Remove your skirt and bend over my desk, now!"');
    scene.text('Once more, you can\'t help yourself. You quickly scramble to your feet and stand in front of her desk, unbuttoning your skirt and letting it drop around your ankles before you bend over her desk. A loud smack echoes in the room as she spanks your ass.');
    qspCall(s, 'arousal', 'BDSM', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Where did my clothes go?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/arina/sex/dream/dream3.jpg');
    scene.text('She swats your ass several more times. It doesn\'t hurt, but feels strangely satisfying, causing you to moan.');
    scene.text('"This is not for your pleasure, you little slut!" Miss Orlov says as she pulls down your panties.');
    scene.text('Wait, what happened to the rest of your clothes? You only have your panties around your knees as she spanks your bare ass.');
    qspCall(s, 'arousal', 'BDSM', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Moan like a slut', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/arina/sex/dream/dream4.jpg');
    scene.text('You start moaning louder as her spanking turns you on more.');
    scene.text('"You really are a complete slut, aren\'t you?" she asks rhetorically, but you nod anyway. With her last swat, her hand slowly slides down your ass cheeks between your legs…');
    scene.text('Her fingers slide into your wet pussy. "My god, you\'re so wet! Just like a whore!" she says as she starts roughly fingerbanging you.');
    qspCall(s, 'arousal', 'vaginal_finger', 3, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Where did this table come from?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/arina/sex/dream/dream5.jpg');
    scene.text('She pulls her fingers out of you, roughly grabs you by the hair and drags you over to a table that she throws you down on flat onto your back.');
    scene.text('As you wonder where the table came from, your thoughts are interrupted as she twists your nipples, but yet again you feel no pain, only intense pleasure that makes you moan loudly.');
    qspCall(s, 'arousal', 'BDSM', 3, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Eat pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/arina/sex/dream/dream6.jpg');
    scene.text('She lets go of your nipples, crawls on top of the table and sits on your chest. She leans back, spreads her legs wide and places her pussy in your face.');
    scene.text('"Eat me, slut!" she commands.');
    scene.text('You do as she says and start licking her pussy, savoring the taste of her juices.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/arina/sex/dream/dream6.jpg');
    scene.text('She suddenly gets up, turns around and sits on your face. She starts grinds against your face as you continue licking her pussy.');
    // TODO-QSP: dynamic text: "Oh god yes, <<$pcs_nickname>> yes! Eat my pussy, I love it!"
    scene.text(`"Oh god yes, ${((s as any).pcs_nickname ?? 0)} yes! Eat my pussy, I love it!"`);
    scene.text('She suddenly cums and her juices flow out of her pussy, covering your face and filling your mouth. You drink it down, but it seems to be never ending. Then it just suddenly stops and she climbs off of you.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Our secret', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/arina/sex/dream/dream6.jpg');
    scene.text('She roughly pulls you up into a half sitting position as she waves her finger in your face.');
    scene.text('"This is our little secret. You can\'t tell anyone about this, understand?"');
    scene.text('You nod in understanding and she gently bops your nose with her finger.');
    scene.actions([
      { label: 'What was that?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
    scene.text('You suddenly jerk awake, feeling highly aroused. You look around and hope no one noticed, but it seems like no one is watching you, so you try to compose yourself just as the bell rings. You quickly gather up your stuff and leave the classroom, avoiding eye contact with Miss Orlov.');
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
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'computer':
      enterComputer(s, scene);
      break;
    case 'science':
      enterScience(s, scene);
      break;
    case 'music':
      enterMusic(s, scene);
      break;
    case 'biology':
      enterBiology(s, scene);
      break;
    case 'arina_dream':
      enterArinaDream(s, scene);
      break;
    default:
      enterComputer(s, scene);
      break;
  }
}

export const gschool_lessons2: LocationDef = {
  name: 'gschool_lessons2',
  title: 'You go to your computer class and find a seat at one of the ',
  region: 'other',
  description: ['You go to your computer class and find a seat at one of the computer stations. Before long, all of your classmates file in and takes their seats as well. Once the bell rings, Mr. Ivanov takes roll call and then gets up and starts walking around the room explaining today\'s lesson. He occasionally stops to look at the screens of various students to make sure they\'re doing it right.'],
  enter: enter,
};
