import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterComputers_101(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/electives/computer/class.jpg');
  if (((s as any).university ?? 0)?.['first_visit_computers_101']) {
    scene.text('You walk into the classroom and take a seat at one of the computer stations. The rest of your classmates walk in one-by-one before Professor Blagov enters the lab and closes the door. He turns to the class and begins today\'s lecture.');
  } else {
    (s as any).university['first_visit_computers_101'] = 1;
    scene.text('You walk into the classroom and take a seat at one of the computer stations. The rest of your classmates walk in one-by-one before a decent looking man in his thirties who appears to be in good shape enters the lab and closes the door.');
    scene.text('He stops at the front of the class. "My name is Evgeny Yurievich Blagov, but you may call me Professor Blagov. All that I ask from you is that attend my class and pay attention. If you want to pass my class that is."');
    scene.text('With that over, he begins today\'s lecture.');
  }
  qspCall(s, 'willpower', 'chore', 'self', (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : ((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')));
  if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
  } else {
    (s as any).will_cost = 0;
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen attentively to Professor Blagov [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Blagov', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
  }, goto: ['uni_lessons_electives_computers1', 'computers_101_listen'] },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention in class', goto: ['uni_lessons_electives_computers1', 'computers_101_no_attention'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_computers1', 'computers_101_talk'] },
  ]);
  scene.build();
}

function enterComputers_101Listen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'compskl', Math.floor(Math.random() * 2) + 0);
  (s as any).trait_vars['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/attentive${Math.floor(Math.random() * 4) + 1}.jpg`);
  scene.text('You listen attentively to Professor Blagov for the duration of the class. He manages to make today\'s lesson interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
  scene.actions([
    { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1, 'no_bonus');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/classroom/question1.jpg');
    scene.text('Professor Blagov nods approvingly, happy to see his students engaged and trying their best. He happily spends some extra time explaining the topic again, and answers any additional questions you might have.');
    scene.text('You feel smarter, thoroughly understanding today\'s lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
    ]);
  } },
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
  ]);
  scene.build();
}

function enterComputers_101NoAttention(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/bored.jpg');
  scene.text('Professor Blagov\'s lecture is very dry and boring, and you\'re having a hard time paying attention.');
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
  ]);
  scene.build();
}

function enterComputers_101Talk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('As you arrive in class, you look around and decide to sit next to…');
  scene.actions([
    { label: 'Dimka', goto: ['uni_lessons_electives_computers1', 'computers_101_talk_dimka'] },
    { label: 'Anushka', goto: ['uni_lessons_electives_computers1', 'computers_101_talk_anushka'] },
    { label: 'Djibril', goto: ['uni_lessons_electives_computers1', 'computers_101_talk_djibril'] },
    { label: 'Natasha', goto: ['uni_lessons_electives_computers1', 'computers_101_talk_natasha'] },
  ]);
  scene.build();
}

function enterComputers_102(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/electives/computer/class.jpg');
  if (((s as any).university ?? 0)?.['first_visit_computers_102']) {
    scene.text('You walk into the classroom and take a seat at one of the computer stations. The rest of your classmates walk in one-by-one before Professor Blagov enters the lab and closes the door. He turns to the class and begins today\'s lecture.');
  } else {
    (s as any).university['first_visit_computers_102'] = 1;
    scene.text('You walk into the classroom and take a seat at one of the computer stations. The rest of your classmates walk in one-by-one before a decent looking man in his thirties who appears to be in good shape enters the lab and closes the door.');
    scene.text('He stops at the front of the class. "My name is Evgeny Yurievich Blagov, but you may call me Professor Blagov. All that I ask from you is that attend my class and pay attention. If you want to pass my class that is."');
    scene.text('With that over, he begins today\'s lecture.');
  }
  qspCall(s, 'willpower', 'chore', 'self', (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : ((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')));
  if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
  } else {
    (s as any).will_cost = 0;
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen attentively to Professor Blagov [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Blagov', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
  }, goto: ['uni_lessons_electives_computers1', 'computers_102_listen'] },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention in class', goto: ['uni_lessons_electives_computers1', 'computers_102_no_attention'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_computers1', 'computers_102_talk'] },
  ]);
  scene.build();
}

function enterComputers_102Listen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'compskl', Math.floor(Math.random() * 2) + 0);
  (s as any).trait_vars['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/attentive${Math.floor(Math.random() * 4) + 1}.jpg`);
  scene.text('You listen attentively to Professor Blagov for the duration of the class. He manages to make today\'s lesson interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
  scene.actions([
    { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1, 'no_bonus');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/classroom/question1.jpg');
    scene.text('Professor Blagov nods approvingly, happy to see his students engaged and trying their best. He happily spends some extra time explaining the topic again, and answers any additional questions you might have.');
    scene.text('You feel smarter, thoroughly understanding today\'s lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
    ]);
  } },
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
  ]);
  scene.build();
}

function enterComputers_102NoAttention(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/bored.jpg');
  scene.text('Professor Blagov\'s lecture is very dry and boring, and you\'re having a hard time paying attention.');
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
  ]);
  scene.build();
}

function enterComputers_102Talk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('As you arrive in class, you look around and decide to sit next to…');
  scene.actions([
    { label: 'Dimka', goto: ['uni_lessons_electives_computers1', 'computers_102_talk_dimka'] },
    { label: 'Anushka', goto: ['uni_lessons_electives_computers1', 'computers_102_talk_anushka'] },
    { label: 'Djibril', goto: ['uni_lessons_electives_computers1', 'computers_102_talk_djibril'] },
    { label: 'Natasha', goto: ['uni_lessons_electives_computers1', 'computers_102_talk_natasha'] },
  ]);
  scene.build();
}

function enterComputers_101TalkDimka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A1', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 250  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
    if (((s as any).npc_rel ?? 0)?.['A1'] <= 20) {
      scene.text('You sit next to Dimka, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you.');
    } else {
      scene.text('You sit next to Dimka. He seems reluctant to talk to you, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
      scene.text('You sit next to Dimka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A1'] < 60) {
      scene.text('You start to sit next to Dimka when he looks over at you. "Don\'t you fucking dare sit near me, slut. Go spread your diseases somewhere else."');
      scene.text('You hear several other students snicker at his comments. Embarrassed, you move to another location and sit by yourself.');
    } else {
      scene.text('You sit next to Dimka, but other than making a few crude remarks about your sexual exploits, he just ignores you and a fellow student asks you to be quiet.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
  ]);
  scene.build();
}

function enterComputers_102TalkDimka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A1', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 250  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
    if (((s as any).npc_rel ?? 0)?.['A1'] <= 20) {
      scene.text('You sit next to Dimka, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you.');
    } else {
      scene.text('You sit next to Dimka. He seems reluctant to talk to you, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
      scene.text('You sit next to Dimka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A1'] < 60) {
      scene.text('You start to sit next to Dimka when he looks over at you. "Don\'t you fucking dare sit near me, slut. Go spread your diseases somewhere else."');
      scene.text('You hear several other students snicker at his comments. Embarrassed, you move to another location and sit by yourself.');
    } else {
      scene.text('You sit next to Dimka, but other than making a few crude remarks about your sexual exploits, he just ignores you and a fellow student asks you to be quiet.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
  ]);
  scene.build();
}

function enterComputers_101TalkAnushka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
    scene.text('You sit next to Anushka, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
  } else {
    scene.text('You sit next to Anushka and the two of you talk for a bit, but she seems more focused on the class than you. After a while, you give up and leave her be.');
    if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
      scene.text('You sit next to Anushka, who smiles at you as you sit down. "What up?"');
      scene.text('The two of you are soon talking away and missing much of the class.');
    } else {
      scene.text('You sit next to Anushka, who she smiles at you as you take a seat. "What up, slut?"');
      scene.text('You know she\'s just being her normal playful self and the two of you are talking away and missing much of the class.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
  ]);
  scene.build();
}

function enterComputers_102TalkAnushka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
    scene.text('You sit next to Anushka, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
  } else {
    scene.text('You sit next to Anushka and the two of you talk for a bit, but she seems more focused on the class than you. After a while, you give up and leave her be.');
    if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
      scene.text('You sit next to Anushka, who smiles at you as you sit down. "What up?"');
      scene.text('The two of you are soon talking away and missing much of the class.');
    } else {
      scene.text('You sit next to Anushka, who she smiles at you as you take a seat. "What up, slut?"');
      scene.text('You know she\'s just being her normal playful self and the two of you are talking away and missing much of the class.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
  ]);
  scene.build();
}

function enterComputers_101TalkDjibril(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A82'] <= 20) {
    scene.text('You sit next to Djibril, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you and paying attention to the class instead.');
  } else {
    scene.text('You sit next to Djibril. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
    scene.text('You sit next to Djibril and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
  ]);
  scene.build();
}

function enterComputers_102TalkDjibril(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A82'] <= 20) {
    scene.text('You sit next to Djibril, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you and paying attention to the class instead.');
  } else {
    scene.text('You sit next to Djibril. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
    scene.text('You sit next to Djibril and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
  ]);
  scene.build();
}

function enterComputers_101TalkNatasha(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A16', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).NatbelQW ?? 0)?.['Lover'] >= 2) {
    scene.text('You sit next to Natasha and quietly chat about various topics, but mainly concentrate on the issues raised during the lecture as you know it\'ll help her with her blog and career. You keep your voices down and ensure you don\'t interrupt the lecture.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
      scene.text('You sit next to Natasha, but she dismisses your initial attempts to speak with her so you give up and you both spend the lesson paying attention to the lecture.');
    } else {
      scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
      scene.text('You sit next to Natasha and spend some of the class quietly talking with her, although most of her comments relate to the lecture. You often get shushed by your fellow students when you get a bit too loud.');
    }
    if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
      scene.text('You sit next to Natasha, but she dismisses any of your attempts to speak with her until she eventually tells you to leave her alone.');
    } else {
      scene.text('You sit next to Natasha and try to talk to her, but she politely asks you to be quiet so she can focus on the lecture.');
      scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so and blushes slightly, but you\'re able to strike up a brief but awkward conversation with her before a fellow student glares at you and asks you to be quiet.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
  ]);
  scene.build();
}

function enterComputers_102TalkNatasha(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A16', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).NatbelQW ?? 0)?.['Lover'] >= 2) {
    scene.text('You sit next to Natasha and quietly chat about various topics, but mainly concentrate on the issues raised during the lecture as you know it\'ll help her with her blog and career. You keep your voices down and ensure you don\'t interrupt the lecture.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
      scene.text('You sit next to Natasha, but she dismisses your initial attempts to speak with her so you give up and you both spend the lesson paying attention to the lecture.');
    } else {
      scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
      scene.text('You sit next to Natasha and spend some of the class quietly talking with her, although most of her comments relate to the lecture. You often get shushed by your fellow students when you get a bit too loud.');
    }
    if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
      scene.text('You sit next to Natasha, but she dismisses any of your attempts to speak with her until she eventually tells you to leave her alone.');
    } else {
      scene.text('You sit next to Natasha and try to talk to her, but she politely asks you to be quiet so she can focus on the lecture.');
      scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so and blushes slightly, but you\'re able to strike up a brief but awkward conversation with her before a fellow student glares at you and asks you to be quiet.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] },
  ]);
  scene.build();
}

function enterComputers_101Events(s: GameState, scene: SceneBuilder): void {
  (s as any).uni_event_hour = 1;
  (s as any).temp = Math.floor(Math.random() * 17) + 0;
  if (((s as any).temp ?? 0) < 2) {
    scene.img('images/locations/city/island/university/classroom/electives/computer/eatme.jpg');
    scene.text('As Professor Blagov continues his lecture, you notice a boy sitting next to you looking past you. You turn your head and glance over to see a girl making the \'eat me\' sign with her fingers and tongue at him. You shake your head and go back to focusing on the lecture.');
  } else {
    scene.img('images/locations/city/island/university/classroom/electives/computer/girl_wedgie.jpg');
    scene.text('During the short break in the middle of class, you hear a girl squeal and glance over in time to see her get a massive front and back wedgie from her friends as they pull her panties almost up to her shoulders. She laughs and promises dire consequences to them, which they just laugh off. Professor Blagov then asks everyone to take their seats again and the rest of class flies by with nothing else of interest happening.');
    if (((s as any).temp ?? 0) < 6) {
      scene.img('images/locations/city/island/university/classroom/electives/computer/side_nipple.jpg');
      scene.text('As Professor Blagov continues his lecture, you glance over and notice the girl just ahead of you wearing a loose shirt that\'s open at the side, with no bra. As she leans forward in her seat, you can see her bare breast and nipple. You hear a few other whispers and can tell you\'re not the only one to have noticed as you quickly focus back on the lecture.');
      qspCall(s, 'arousal', 'erotic', 1);
      qspCall(s, 'arousal', 'end');
    } else {
      scene.img('images/locations/city/island/university/classroom/electives/computer/thong_exposed.jpg');
      scene.text('During the short break in the middle of class, many of the students gather around one of the desks. One of the students seems to have found something of interest, but you never find out what as a girl in front of you pulls up the back of her skirt to show off her thong clad ass and everyone is soon more interested in her antics. After spending a few minutes basking in the attention, she pulls her skirt back down and returns to her seat. Professor Blagov soon asks everyone to take their seats again and the rest of class flies by with nothing else of interest happening.');
      qspCall(s, 'arousal', 'erotic', 1);
      qspCall(s, 'arousal', 'end');
      if (((s as any).temp ?? 0) < 10) {
        scene.img('images/locations/city/island/university/classroom/electives/computer/dimka_hump.jpg');
        scene.text('During the short break in the middle of class, your fellow students break up into small groups or just relax where they are. As you glance around, you notice Dimka talking to a girl over at the side of the room. You can tell they\'re flirting even from here. He leans in close to her and whispers something, causing her to giggle before Dimka spins her around so her back is to him, followed by grabbing her by the back of the neck and forcing her head down until she\'s bent over a desk.');
        scene.text('He keeps one hand on the back of her neck as he grinds his crotch against her ass while grabbing her hip with his other hand. He proceeds to dry hump her in front of everyone while making degrading comments towards her, but she doesn\'t struggle against him. When the professor returns, Dimka lets go of her and retakes his seat while giving her a wink.');
        scene.text('The girl blushes hard as she retakes her seat, but you notice she keeps glancing at him; she clearly enjoyed what he did and now has a thing for him.');
        qspCall(s, 'arousal', 'erotic', 1);
        qspCall(s, 'arousal', 'end');
      } else {
        qspCall(s, 'stat', '');
        scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl1.jpg');
        if (((s as any).anushkaQW ?? 0)?.['djibril_sex'] >= 1) {
          scene.text('The class is pretty uneventful for the most part, but you notice Djibril sat next to Anushka. He\'s flirting with her, but she\'s really making him work for her attention, which you find a little amusing.');
          scene.text('As Professor Blagov finishes his lecture, he informs the class that he won\'t be able to stay after to help anyone and if someone needs to ask him something, then they should come and see him in his office later or wait for the next class.');
          scene.text('With class finished, everyone gets up and heads for the exit. You glance back and see that Djibril has stopped Anushka and they\'re talking by one of the computers.');
        } else {
          scene.text('The class is pretty uneventful for the most part, but you notice Djibril sat next to Anushka. He\'s flirting with her, but she\'s playing it a bit coy and really making him work for her attention, which you find a little amusing.');
          scene.text('With class finished, everyone gets up and heads for the exit. You glance back and see that Djibril has stopped Anushka and they\'re talking by one of the computers.');
          scene.text('The class is pretty uneventful for the most part, but you notice a young black man has sat next to Anushka and they talk off and on for most of the class. He\'s clearly flirting with her, but she\'s being pretty aloof and really making him work for her attention, which you find a little amusing.');
          scene.text('With class finished, everyone gets up and heads for the exit. You glance back and see that the man has stopped Anushka and they\'re talking by one of the computers.');
        }
        return;
        if (((s as any).temp ?? 0) === 12  &&  ((s as any).anushkaQW ?? 0)?.['photoshoot'] >= 1  &&  ((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
          scene.img('images/locations/city/island/university/classroom/electives/computer/nush_nipple.jpg');
          scene.text('The class is pretty uneventful for the most part, until you and Anushka happen to look at each other at the same time. She smiles a bit, you give a slight wave, then she pulls down her top just enough to expose one of her nipples for a moment to you. You glance around to see if anyone else seen that, but it seems no one else was looking, when you look back she is back to focusing on class. But it does give you a idea, you have your camera, what she is wearing with the backdrop of the class would make a good photoshoot.');
          scene.text('With class finished, everyone gets up and heads for the exit. You walk over to Anushka as she starts to get up. "Hey I was thinking we could do another photoshoot, what do you say?"');
          scene.text('She thinks about it for a moment. "Sure, but I can\'t take to long, where do you want to go?"');
          scene.text('You smile to her. "Right here, after everyone leaves, this would be perfect."');
          qspCall(s, 'arousal', 'voyeur', 1);
          qspCall(s, 'arousal', 'end');
          return;
          scene.actions([
            { label: 'Wait for everyone to leave', goto: ['uni_lessons_electives_computers1', 'anushka_photoshoot'] },
          ]);
        } else {
          scene.img(`images/locations/city/island/university/classroom/lecture${Math.floor(Math.random() * 5) + 1}.jpg`);
          scene.text('As you sit listening to the lesson, you look around hoping something interesting will happen, but nothing does.');
        }
        scene.actions([
          { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
          { label: 'Wait for Anushka', goto: ['uni_lessons_electives_computers1', 'anushka_djibril'] },
          { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
          { label: 'Wait for Anushka', goto: ['uni_lessons_electives_computers1', 'anushka'] },
        ]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'computers_101':
      enterComputers_101(s, scene);
      break;
    case 'computers_101_listen':
      enterComputers_101Listen(s, scene);
      break;
    case 'computers_101_no_attention':
      enterComputers_101NoAttention(s, scene);
      break;
    case 'computers_101_talk':
      enterComputers_101Talk(s, scene);
      break;
    case 'computers_102':
      enterComputers_102(s, scene);
      break;
    case 'computers_102_listen':
      enterComputers_102Listen(s, scene);
      break;
    case 'computers_102_no_attention':
      enterComputers_102NoAttention(s, scene);
      break;
    case 'computers_102_talk':
      enterComputers_102Talk(s, scene);
      break;
    case 'computers_101_talk_dimka':
      enterComputers_101TalkDimka(s, scene);
      break;
    case 'computers_102_talk_dimka':
      enterComputers_102TalkDimka(s, scene);
      break;
    case 'computers_101_talk_anushka':
      enterComputers_101TalkAnushka(s, scene);
      break;
    case 'computers_102_talk_anushka':
      enterComputers_102TalkAnushka(s, scene);
      break;
    case 'computers_101_talk_djibril':
      enterComputers_101TalkDjibril(s, scene);
      break;
    case 'computers_102_talk_djibril':
      enterComputers_102TalkDjibril(s, scene);
      break;
    case 'computers_101_talk_natasha':
      enterComputers_101TalkNatasha(s, scene);
      break;
    case 'computers_102_talk_natasha':
      enterComputers_102TalkNatasha(s, scene);
      break;
    case 'computers_101_events':
      enterComputers_101Events(s, scene);
      break;
    default:
      enterComputers_101(s, scene);
      break;
  }
}

export const uni_lessons_electives_computers1: LocationDef = {
  name: 'uni_lessons_electives_computers1',
  title: 'You walk into the classroom and take a seat at one of the co',
  region: 'other',
  description: ['You walk into the classroom and take a seat at one of the computer stations. The rest of your classmates walk in one-by-one before Professor Blagov enters the lab and closes the door. He turns to the class and begins today\'s lecture.'],
  enter: enter,
};
