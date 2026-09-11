import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterComputers_101(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/electives/computer/class.jpg');
  if (((s as any).university ?? 0)?.['first_visit_computers_101']) {
    scene.text('You walk into the classroom and take a seat at one of the computer stations. The rest of your classmates walk in one-by-one before Professor Blagov enters the lab and closes the door. He turns to the class and begins today\'s lecture.');
  } else {
    ((s as any).university ?? {})['first_visit_computers_101'] = 1;
    scene.text('You walk into the classroom and take a seat at one of the computer stations. The rest of your classmates walk in one-by-one before a decent looking man in his thirties who appears to be in good shape enters the lab and closes the door.');
    scene.text('He stops at the front of the class. "My name is Evgeny Yurievich Blagov, but you may call me Professor Blagov. All that I ask from you is that attend my class and pay attention. If you want to pass my class that is."');
    scene.text('With that over, he begins today\'s lecture.');
  }
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
      { label: 'Listen attentively to Professor Blagov [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Blagov [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
  ((s as any).trait_vars ?? {})['academic_lessons'] = (((s as any).trait_vars ?? {})['academic_lessons'] ?? 0) + (1);
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
    ((s as any).university ?? {})['first_visit_computers_102'] = 1;
    scene.text('You walk into the classroom and take a seat at one of the computer stations. The rest of your classmates walk in one-by-one before a decent looking man in his thirties who appears to be in good shape enters the lab and closes the door.');
    scene.text('He stops at the front of the class. "My name is Evgeny Yurievich Blagov, but you may call me Professor Blagov. All that I ask from you is that attend my class and pay attention. If you want to pass my class that is."');
    scene.text('With that over, he begins today\'s lecture.');
  }
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
      { label: 'Listen attentively to Professor Blagov [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Blagov [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
  ((s as any).trait_vars ?? {})['academic_lessons'] = (((s as any).trait_vars ?? {})['academic_lessons'] ?? 0) + (1);
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
      if (((s as any).npc_rel ?? 0)?.['A1'] < 60) {
        scene.text('You sit next to Dimka. He seems reluctant to talk to you, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
      } else {
        scene.text('You sit next to Dimka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
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
      if (((s as any).npc_rel ?? 0)?.['A1'] < 60) {
        scene.text('You sit next to Dimka. He seems reluctant to talk to you, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
      } else {
        scene.text('You sit next to Dimka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
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
    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('You sit next to Anushka and the two of you talk for a bit, but she seems more focused on the class than you. After a while, you give up and leave her be.');
    } else {
      if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
        scene.text('You sit next to Anushka, who smiles at you as you sit down. "What up?"');
        scene.text('The two of you are soon talking away and missing much of the class.');
      } else {
        scene.text('You sit next to Anushka, who she smiles at you as you take a seat. "What up, slut?"');
        scene.text('You know she\'s just being her normal playful self and the two of you are talking away and missing much of the class.');
      }
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
    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('You sit next to Anushka and the two of you talk for a bit, but she seems more focused on the class than you. After a while, you give up and leave her be.');
    } else {
      if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
        scene.text('You sit next to Anushka, who smiles at you as you sit down. "What up?"');
        scene.text('The two of you are soon talking away and missing much of the class.');
      } else {
        scene.text('You sit next to Anushka, who she smiles at you as you take a seat. "What up, slut?"');
        scene.text('You know she\'s just being her normal playful self and the two of you are talking away and missing much of the class.');
      }
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
    if (((s as any).npc_rel ?? 0)?.['A82'] < 60) {
      scene.text('You sit next to Djibril. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
    } else {
      scene.text('You sit next to Djibril and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
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
    if (((s as any).npc_rel ?? 0)?.['A82'] < 60) {
      scene.text('You sit next to Djibril. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
    } else {
      scene.text('You sit next to Djibril and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
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
    if (((s as any).fame ?? 0)?.['city_slut'] < 175  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 175) {
      if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
        scene.text('You sit next to Natasha, but she dismisses your initial attempts to speak with her so you give up and you both spend the lesson paying attention to the lecture.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A16'] < 60) {
          scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        } else {
          scene.text('You sit next to Natasha and spend some of the class quietly talking with her, although most of her comments relate to the lecture. You often get shushed by your fellow students when you get a bit too loud.');
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
        scene.text('You sit next to Natasha, but she dismisses any of your attempts to speak with her until she eventually tells you to leave her alone.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A16'] < 60) {
          scene.text('You sit next to Natasha and try to talk to her, but she politely asks you to be quiet so she can focus on the lecture.');
        } else {
          scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so and blushes slightly, but you\'re able to strike up a brief but awkward conversation with her before a fellow student glares at you and asks you to be quiet.');
        }
      }
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
    if (((s as any).fame ?? 0)?.['city_slut'] < 175  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 175) {
      if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
        scene.text('You sit next to Natasha, but she dismisses your initial attempts to speak with her so you give up and you both spend the lesson paying attention to the lecture.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A16'] < 60) {
          scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        } else {
          scene.text('You sit next to Natasha and spend some of the class quietly talking with her, although most of her comments relate to the lecture. You often get shushed by your fellow students when you get a bit too loud.');
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
        scene.text('You sit next to Natasha, but she dismisses any of your attempts to speak with her until she eventually tells you to leave her alone.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A16'] < 60) {
          scene.text('You sit next to Natasha and try to talk to her, but she politely asks you to be quiet so she can focus on the lecture.');
        } else {
          scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so and blushes slightly, but you\'re able to strike up a brief but awkward conversation with her before a fellow student glares at you and asks you to be quiet.');
        }
      }
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
    if (((s as any).temp ?? 0) < 4) {
      scene.img('images/locations/city/island/university/classroom/electives/computer/girl_wedgie.jpg');
      scene.text('During the short break in the middle of class, you hear a girl squeal and glance over in time to see her get a massive front and back wedgie from her friends as they pull her panties almost up to her shoulders. She laughs and promises dire consequences to them, which they just laugh off. Professor Blagov then asks everyone to take their seats again and the rest of class flies by with nothing else of interest happening.');
    } else {
      if (((s as any).temp ?? 0) < 6) {
        scene.img('images/locations/city/island/university/classroom/electives/computer/side_nipple.jpg');
        scene.text('As Professor Blagov continues his lecture, you glance over and notice the girl just ahead of you wearing a loose shirt that\'s open at the side, with no bra. As she leans forward in her seat, you can see her bare breast and nipple. You hear a few other whispers and can tell you\'re not the only one to have noticed as you quickly focus back on the lecture.');
        qspCall(s, 'arousal', 'erotic', 1);
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).temp ?? 0) < 8) {
          scene.img('images/locations/city/island/university/classroom/electives/computer/thong_exposed.jpg');
          scene.text('During the short break in the middle of class, many of the students gather around one of the desks. One of the students seems to have found something of interest, but you never find out what as a girl in front of you pulls up the back of her skirt to show off her thong clad ass and everyone is soon more interested in her antics. After spending a few minutes basking in the attention, she pulls her skirt back down and returns to her seat. Professor Blagov soon asks everyone to take their seats again and the rest of class flies by with nothing else of interest happening.');
          qspCall(s, 'arousal', 'erotic', 1);
          qspCall(s, 'arousal', 'end');
        } else {
          if (((s as any).temp ?? 0) < 10) {
            scene.img('images/locations/city/island/university/classroom/electives/computer/dimka_hump.jpg');
            scene.text('During the short break in the middle of class, your fellow students break up into small groups or just relax where they are. As you glance around, you notice Dimka talking to a girl over at the side of the room. You can tell they\'re flirting even from here. He leans in close to her and whispers something, causing her to giggle before Dimka spins her around so her back is to him, followed by grabbing her by the back of the neck and forcing her head down until she\'s bent over a desk.');
            scene.text('He keeps one hand on the back of her neck as he grinds his crotch against her ass while grabbing her hip with his other hand. He proceeds to dry hump her in front of everyone while making degrading comments towards her, but she doesn\'t struggle against him. When the professor returns, Dimka lets go of her and retakes his seat while giving her a wink.');
            scene.text('The girl blushes hard as she retakes her seat, but you notice she keeps glancing at him; she clearly enjoyed what he did and now has a thing for him.');
            qspCall(s, 'arousal', 'erotic', 1);
            qspCall(s, 'arousal', 'end');
          } else {
            if (((s as any).temp ?? 0) === 11) {
              qspCall(s, 'stat', '');
              scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl1.jpg');
              if (((s as any).anushkaQW ?? 0)?.['djibril_sex'] >= 1) {
                scene.text('The class is pretty uneventful for the most part, but you notice Djibril sat next to Anushka. He\'s flirting with her, but she\'s really making him work for her attention, which you find a little amusing.');
                scene.text('As Professor Blagov finishes his lecture, he informs the class that he won\'t be able to stay after to help anyone and if someone needs to ask him something, then they should come and see him in his office later or wait for the next class.');
                scene.text('With class finished, everyone gets up and heads for the exit. You glance back and see that Djibril has stopped Anushka and they\'re talking by one of the computers.');
              } else {
                if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
                  scene.text('The class is pretty uneventful for the most part, but you notice Djibril sat next to Anushka. He\'s flirting with her, but she\'s playing it a bit coy and really making him work for her attention, which you find a little amusing.');
                  scene.text('With class finished, everyone gets up and heads for the exit. You glance back and see that Djibril has stopped Anushka and they\'re talking by one of the computers.');
                } else {
                  scene.text('The class is pretty uneventful for the most part, but you notice a young black man has sat next to Anushka and they talk off and on for most of the class. He\'s clearly flirting with her, but she\'s being pretty aloof and really making him work for her attention, which you find a little amusing.');
                  scene.text('With class finished, everyone gets up and heads for the exit. You glance back and see that the man has stopped Anushka and they\'re talking by one of the computers.');
                }
              }
              return;
              scene.actions([
                { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
                { label: 'Wait for Anushka', goto: ['uni_lessons_electives_computers1', 'anushka_djibril'] },
              ]);
            } else {
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
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    { label: 'Wait for Anushka', goto: ['uni_lessons_electives_computers1', 'anushka'] },
  ]);
  scene.build();
}

function enterAnushka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/lecture_hall/lecture_hall.jpg');
  scene.text('You wait out in the hallway for a few minutes before Anushka comes out. "Hey. What\'s up?" you ask.');
  if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
    scene.text('She gives you an annoyed look. "I don\'t have time for you right now," she scowls and just walks past you, her tone suggests you shouldn\'t follow her.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('She gives you a fairly friendly smile. "Hey…"');
      scene.text('You fall in step beside her as she keeps walking. "So what are you up to?"');
      scene.text('"Going to the library to study some before work. You?" she asks without slowing down.');
      scene.actions([
        { label: 'Tell her you\'re not sure', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shrug. "I don\'t know, I thought you might want to hang out or something…"');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done in the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    scene.text('She gives you a slight smile. "Sure, another time." The two of you walk off in separate directions.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
        { label: 'Ask if you can come along', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(s, 'uni_lessons_electives', 'study_with_friends');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You smile. "Yeah, that sounds like a good idea. Mind if I come?"');
    scene.text('She shrugs. "Sure, if you want, but I really do have to study." Her tone makes it clear she doesn\'t have time to mess around like she did back in Pavlovsk.');
    scene.text('"Yeah, I understand," you reply.');
    scene.text('The two of you walk over to the library and find a quiet spot to study. Anushka seems really intent on her studies and doesn\'t talk much while the two of you study.');
    scene.text('After a few hours, her phone starts beeping. "I need to get going. See you later."');
    scene.text('With that, she gathers her stuff and leaves.');
    scene.actions([
      { label: 'Get up', goto: ['uni_library', 'start'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
        scene.text('She smiles when she sees you. "What up, bitch?"');
        scene.text('You know she\'s just being her normal playful self.');
      } else {
        scene.text('She smiles when she sees you. "What up, slut?"');
        scene.text('You know she\'s just being her normal playful self.');
      }
      scene.text('You fall in step beside her as she keeps walking. "What are you up to?"');
      scene.text('"Going to the library to study some before work. You want to come?" she asks while giving you a friendly smile and slowing down a little.');
      scene.actions([
        { label: 'Let\'s have fun instead', handler: (st: GameState) => {
    ((s as any).anushkaCityQW ?? {})['first_visit'] = 1;
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something…"');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done at the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? You should stop by my place sometime."');
    scene.text('She tells you where the apartment she shares with the boys from the band is before she leaves. She puts some extra sway in her hips as she walks away, really rocking her ass. You smile and shake your head before turning to leave yourself.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
        { label: 'Agree to go', handler: (st: GameState) => {
    ((s as any).anushkaCityQW ?? {})['first_visit'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(s, 'uni_lessons_electives', 'study_with_friends');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You smile. "Yeah, that sounds like a good idea. Mind if I come?"');
    scene.text('She shrugs. "If you want, but I really do have to study." Her tone makes it clear she doesn\'t have time to mess around like she did back in Pavlovsk.');
    scene.text('"Yeah, I understand," you reply.');
    scene.text('The two of you walk over to the library and find a quiet spot to study. Anushka seems really intent on her studies and doesn\'t talk much while the two of you study.');
    scene.text('After a few hours, her phone starts beeping. "I need to get going, but you should stop by my place sometime."');
    scene.text('She tells you where the apartment she shares with the boys from the band is before she gathers her stuff and leaves.');
    scene.actions([
      { label: 'Get up', goto: ['uni_library', 'start'] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterAnushkaPhotoshoot(s: GameState, scene: SceneBuilder): void {
  ((s as any).anushkaQW ?? {})['photoshoot'] = (((s as any).anushkaQW ?? {})['photoshoot'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like', 1, 'coffee_hole_photo');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/comp_class/pose0.jpg');
  scene.text('The two of you stand there talking a bit, mostly you finding the best spot with the right lighting for the photoshoot. Once the last of your classmates are gone, you pull your camera out and have her stand in front of one of the computer work stations. You start snapping photos of her standing in different poses as you direct her, asking her to interact occasionally with the computer.');
  scene.actions([
    { label: 'Spice this up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/comp_class/pose1.jpg');
    scene.text('You want more, and you know she loves showing off. "Come on, famous model, let\'s do something a little more risque!" Anushka reaches down and pulls up the hem of her already fairly short skirt, almost to the point of showing off her panties, as you snap a few more photo\'s.');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/comp_class/pose2.jpg');
    scene.text('"That\'s it keep going." You tell her and you move around taking pictures from different locations and angles. She turns around and pulls up the hem of her skirt again, almost showing off her butt, but stops just short of that.');
    scene.actions([
      { label: 'Let\'s see that butt', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/comp_class/pose3.jpg');
    scene.text('"Let\'s see that tight little butt you love getting fucked in." She pulls her skirt all the way up to show off her butt almost completely bare, with only a pair of thong panties hiding anything. "Nice panties," you tell her. "Okay, turn around, so we can see the rest of those slutty panties of yours."');
    scene.actions([
      { label: 'Keep taking photos', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/comp_class/pose4.jpg');
    scene.text('She turns back to face you, pulling her skirt up showing off her panties for you. You snap a few more photos while she hooks her thumbs into her panties to pull them this way and that, teasing you by almost showing off her pussy at times but stopping just short. "That\'s it, work the camera for me, Nush! Now lets see them little titties of yours"');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Photograph her breasts', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/comp_class/pose5.jpg');
    scene.text('She unbuttons the front of her shirt, taking off her bra one arm at a time while keeping the shirt and jacket on. Once she has tosses the bra aside she opens her shirt wide showing off her small firm breasts. "That\'s it, now why don\'t you turn around and lose those panties."');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep taking photo\'s', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/comp_class/pose6.jpg');
    scene.text('She turns around and bends over, with her skirt pulled up, she slowly pulls the panties down. She climbs partially on a chair with her panties part way down her thigh, showing off her naked pussy for you to photograph. You keep moving around her, snapping photos as she changes poses for you. "Nice, nice. Now lose them completely." you tell her as you keep taking photos. She slips the panties the rest of the way off and steps out of them.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Work the camera', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/comp_class/pose7.jpg');
    scene.text('Under your direction, she spreads her legs wide while sitting in a chair, putting one foot up on the chair, giving you a better shot at her pussy. She uses her hands to keep the skirt pulled up and out of the way, while the other keeps her shirt open, so her breasts are always on full display.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Play with yourself', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/comp_class/pose8.jpg');
    scene.text('"You are looking a little turned on, why don\'t you rub that pussy of yours for the camera. Pretend like it is a guy you are trying to get to fuck you right here and now." She watch you and starts getting into it, as she seduces the camera, using one hand to rub her clits, starting to softly moan.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Final photos', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/comp_class/pose9.jpg');
    scene.text('She sits in various poses, while rubbing her clit, she starts breathing harder as things progress, before you finally think you have the perfect final image. She\'s leaning back in the chair rubbing her clit while you take a photo of her from the side, while she watches you; it\'s the perfect image to end this photo session.');
    scene.text('With the image taken, you lower the camera. "Thanks, Nush, that was amazing. This place made for an amazing place to take photos in. You can get dressed now."');
    scene.text('She keeps rubbing her clit for a couple of more minutes until she has a orgasm right there. You blush a bit while you try and focus on reviewing the photos you took and ignore her rubbing one out. Finally she stops and breathlessly says. "I was so close I had to finish."');
    scene.text('You smile a bit and nod. "Sure no problem, this is a really good set. Thanks for working with me." You tell her.');
    scene.text('"My pleasure. I love modeling almost as much as I love my music."');
    scene.text('You review the photos on your camera as she gets dressed again. "Well, I need to get going, got to go study."');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Head out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/comp_class/pose9.jpg');
    scene.text('You nod at her. "Sure thing, I should get going anyway. Thanks again. I\'ll see you around campus, hopefully. If not, I\'ll stop by your place sometime, and we can hang out." The two of you then leave the classroom behind and both of you head out.');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
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
  } },
  ]);
  scene.build();
}

function enterAnushkaDjibril(s: GameState, scene: SceneBuilder): void {
  if (((s as any).anushkaQW ?? 0)?.['djibril_sex'] >= 1) {
    scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_computers1', 'anushka_djibril_sex'] }]);
  }
  if (((s as any).DjibrilQW ?? 0)?.['meet'] === 0) {
    ((s as any).DjibrilQW ?? {})['meet'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    scene.img('images/locations/city/island/university/lecture_hall/lecture_hall.jpg');
    if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
      scene.text('She gives you an annoyed look. "I don\'t have time for you right now." She just walks past you, her tone suggesting that you shouldn\'t follow her.');
      scene.text('The young black man watches her walk away while staring at her ass before turning his attention to you. "She really doesn\'t like you," he says rather matter of factly.');
      scene.text('You snort a soft laugh. "Yeah, you could say that. We went to secondary school together, but we ran in different circles."');
      scene.text('He just nods. "I understand. Anyway, my name is Djibril. Yours?"');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>," you reply and you talk for a few minutes before he looks at...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}," you reply and you talk for a few minutes before he looks at his watch. "Shit, I need to get going, but it was nice meeting you."`);
      scene.text('He hurries off without waiting for a reply.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
        scene.text('You wait out in the hallway for a few minutes before the young black man comes out with Anushka. They\'re talking and laughing together. "Hello there," he says to you.');
        scene.text('Anushka then introduces you to each other and you find out his name is Djibril. "Well, I need to get going girls. Catch you later, Nush."');
        scene.text('He walks away while giving you a friendly smile.');
        scene.text('Once he\'s gone, you turn to Anushka. "So who was that?"');
        scene.text('She glances at you with a smirk. "Why do you care? You think he\'s hot or something?"');
        scene.text('You shrug as you walk with her. "I was just curious. You seemed to be flirting a lot."');
        scene.text('She rolls her eyes. "Djibril is here on a student visa to study at the university. And for the record, he was flirting with me," she says with a slight smirk.');
        scene.text('You grin at her. "Oh, my bad. So you guys gong to go out or something?"');
        scene.text('She rolls her eyes. "I don\'t know. Maybe, maybe not. It\'s fun just flirting. I\'ll just see what happens."');
        scene.text('You smile at her comment. "So where you off to?"');
        scene.text('"Going to the library to study some before work. You want to come?" she asks while giving you a friendly smile.');
        scene.actions([
          { label: 'Tell her you\'re not sure', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shrug. "I don\'t know, I thought you might want to hang out or something…"');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done in the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    scene.text('She gives you a slight smile. "Sure, another time."');
    scene.text('The two of you walk away in separate directions.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
          { label: 'Ask if you can come along', goto: ['uni_lessons_electives_shared1', 'anushka_study'] },
        ]);
      } else {
        scene.text('You wait out in the hallway for a few minutes before the young black man comes out with Anushka. They\'re talking and laughing together. "Hello there," he says to you.');
        scene.text('Anushka then introduces you to each other and you find out his name is Djibril. "Well, I need to get going girls. Catch you later, Nush."');
        scene.text('He walks away while giving you a friendly smile.');
        scene.text('Once he\'s gone, you turn to Anushka. "Hey, what\'s up?"');
        if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
          scene.text('She smiles as she sees you. "What up, bitch?" You know she\'s just being her normal playful self.');
        } else {
          scene.text('She smiles as she sees you. "What up, slut?" You know she\'s just being her normal playful self.');
        }
        scene.text('You fall in step beside her as she keeps walking. "So who was that?"');
        scene.text('She glances in the direction he walked away. "You heard him. That\'s Djibril. He\'s here on a student visa to study at the university."');
        scene.text('You grin at her. "He seemed to be flirting with you a lot. You guys going to hook up?"');
        scene.text('She rolls her eyes. "I don\'t know. Maybe, maybe not. It\'s fun just flirting. I\'ll see what happens."');
        scene.text('You hip bump her and you both laugh. "So where you off to?"');
        scene.text('"Going to the library to study some before work. You want to come?" she asks while giving you a friendly smile and slowing down a little.');
        scene.actions([
          { label: 'Let\'s have fun instead', handler: (st: GameState) => {
    ((s as any).anushkaCityQW ?? {})['first_visit'] = 1;
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something…"');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done at the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? catch you later, but you should stop by my place sometime."');
    scene.text('She tells you where the apartment she shares with the boys from the band is located and puts some extra sway in her hips as she walks away, really rocking her ass.');
    scene.text('You smile and shake your head before turning to leave yourself.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
          { label: 'Ask if you can come along', handler: (st: GameState) => {
    ((s as any).anushkaCityQW ?? {})['first_visit'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(s, 'uni_lessons_electives', 'study_with_friends');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You smile. "Yeah, that sounds like a good idea. Mind if I come?"');
    scene.text('She shrugs. "Sure, if you want, but I really do have to study." Her tone makes it clear she doesn\'t have time to mess around like she did back in Pavlovsk.');
    scene.text('"Yeah, I understand," you reply.');
    scene.text('The two of you walk over to the library and find a quiet spot to study. Anushka seems really intent on her studies and doesn\'t talk much while the two of you study.');
    scene.text('After a few hours, her phone starts beeping. "I need to get going. See you later, but you should stop by my place sometime."');
    scene.text('She tells you where the apartment she shares with the boys from the band is located before she gathers her stuff and leaves.');
    scene.actions([
      { label: 'Get up', goto: ['uni_library', 'start'] },
    ]);
  } },
        ]);
      }
    }
  } else {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    scene.img('images/locations/city/island/university/lecture_hall/lecture_hall.jpg');
    // TODO-QSP: dynamic text: You wait out in the hallway for a few minutes before Djibril comes out with Anus...
    scene.text(`You wait out in the hallway for a few minutes before Djibril comes out with Anushka. They're talking and laughing together. "Catch you later, Nush." He stops when he sees you. "Hey ${((s as any).pcs_nickname ?? 0)}, how you been? I got to go, but we should totally catch up. Later."`);
    scene.text('He walks away, giving you a friendly smile as he does. Once he\'s gone, you turn to Anushka. "Hey, what\'s up?"');
    if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
      scene.text('She gives you an annoyed look. "I don\'t have time for you right now." She just walks past you, her tone suggesting that you shouldn\'t follow her.');
      scene.text('The young black man watches her walk away while staring at her ass before turning his attention to you. "She really doesn\'t like you," he says rather matter of factly.');
      scene.text('You snort a soft laugh. "Yeah, you could say that. We went to secondary school together, but we ran in different circles."');
      scene.text('He just nods. "I understand. Anyway, my name is Djibril. Yours?"');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>," you reply and you talk for a few minutes before he looks at...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}," you reply and you talk for a few minutes before he looks at his watch. "Shit, I need to get going, but it was nice meeting you." He hurries off without waiting for a reply.`);
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
        scene.text('She looks a little surprised and gives you a puzzled look. "You know him?"');
        scene.text('You fall in step beside her as she keeps walking. "Yeah, that\'s my uncle\'s nephew."');
        scene.text('She glances in the direction he walked away in before looking back at you. "Really? Huh…"');
        scene.text('You ignore her surprise. "So where you off to?"');
        scene.text('"Going to the library to study some before work. You want to come?" she asks while giving you a friendly smile.');
        scene.actions([
          { label: 'Tell her you\'re not sure', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shrug. "I don\'t know, I thought you might want to hang out or something…"');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done in the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    scene.text('She gives you a slight smile. "Sure, another time."');
    scene.text('The two of you then walk away in separate directions.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
          { label: 'Ask if you can come along', goto: ['uni_lessons_electives_shared1', 'anushka_study'] },
        ]);
      } else {
        scene.text('She looks a little surprised and gives you a puzzled look. "You know him?"');
        scene.text('You fall in step beside her as she keeps walking. "Yeah, that\'s my uncle\'s nephew."');
        scene.text('She glances in the direction he walked away in before looking back at you. "Really? I had no idea. You\'ve been holding out on me, bitch! I would love to hear more about him sometime, but I\'ve got to jet."');
        scene.text('"Yeah, I bet you want to get to know him," you say in a way to make it sound lewd. You hip bump her and you both laugh. "So where you off to?"');
        scene.text('"Going to the library to study some before work. You want to come?" she asks while giving you a friendly smile and slowing down a little.');
        scene.actions([
          { label: 'Let\'s have fun instead', handler: (st: GameState) => {
    ((s as any).anushkaCityQW ?? {})['first_visit'] = 1;
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something…"');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done at the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later, but you should stop by my place sometime."');
    scene.text('She tells you where the apartment she shares with the boys from the band is located and puts some extra sway in her hips as she walks away, really rocking her ass. ');
    scene.text('You smile and shake your head before turning to leave yourself.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
          { label: 'Agree to go', goto: ['uni_lessons_electives_shared1', 'anushka_study'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterAnushkaDjibrilSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl2.jpg');
  scene.text('You crack the door open and peek in. The two of them are seated back in their seats and seem to be talking about something on the computer, but you notice their overly flirting body language and that Anushka is sitting facing Djibril in a fairly short skirt with her legs spread wide enough for him to see her panties.');
  scene.actions([
    { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl3.jpg');
    scene.text('As you keep watching, you see Anushka turn to a notebook on her desk, apparently telling him about the notes she\'s taken. Djibril unbuttons his pants and pulls his rather large and very thick dick out and starts stroking it, causing it to become hard very quickly. As he\'s doing this, Anushka turns back to face him. She makes a squeaking noise and covers her mouth partially with her hands in surprise, but she doesn\'t seem to be offended or upset.');
    scene.text('In fact, she\'s grinning from ear to ear. You can just make out Djibril saying "Come on, suck my dick."');
    scene.text('Anushka glances around and you duck back from the door. "What if someone comes back?" she asks as you peek back in.');
    scene.text('Djibril grins. "No one is coming back, but getting caught is part of the thrill. Even if they did, so what? They\'ll just see a pretty little thing like you sucking my big black dick. Come on, I know you want to…"');
    qspCall(s, 'arousal', 'voyeur', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl4.jpg');
    scene.text('It doesn\'t take a lot of convincing as Anushka slides off her chair and onto her knees in front of Djibril before taking his thick cock into her mouth and sucking it. He moans softly as she does and leans back enjoying it. You can faintly hear the slurping sounds of her mouth on his cock and it seems like she\'s looking in your direction a few times, making you wonder if she\'s spotted you.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl5.jpg');
    scene.text('Anushka starts playing with her breasts as she bobs her head up and down on Djirbil\'s dick. "Fuccck… You\'re amazing at this," he moans out fairly loudly, which only encourages her to redouble her efforts and pick up the pace, making even more wet slurping sounds as she takes his cock deep into her mouth. "Oh, fuck yeah, just like that…" he moans out.');
    scene.text('She then pops his dick out of her mouth and gets off her knees. "My turn," she says as she sits on the table.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl6.jpg');
    scene.text('Anushka sits on the table and spreads her legs wide while pulling her panties aside to expose her pussy. Djibril gets down on his knees in front of her and starts licking her pussy as she moans loudly and her hand slides up to the back of his head, forcing his face into her pussy as she grinds against him.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl7.jpg');
    scene.text('He stops going down on her and stands up. He takes off her shirt and bra, leaving her small breasts on full display as he pushes her skirt up around her waist and pulls her panties off before grabbing her legs and spreading them apart. He rubs the tip of his dick against her pussy and then slides it in, causing her to moan loudly as he starts fucking her.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl8.jpg');
    scene.text('Anushka starts rubbing her clit as Djibril thrusts his cock balls deep into her over and over. "Oh… Fuck… Yes… Tear my little white pussy up. With your huge black cock… Fuck… Yes!" The louder she moans and the more she gets into it, the faster and harder he thrusts into her. After a few minutes, he pulls all the way out of her. "Oh fuck… Don\'t stop… Slide that massive cock back in…" she pleads with him.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl9.jpg');
    scene.text('Instead, he manhandles her and flips her over onto her stomach, then pulls her up into a standing position, only to roughly push her forward at her back, making her partially bend over in front of him. He slides the tip of his dick back to her wet slit, then keeps going up to her asshole. "I\'m going to rip that tight little asshole of yours apart with my big black dick." You can tell his words turn her on as he slides his cock into her asshole. She gasps in a mix of pain and pleasure as he starts fucking her asshole, but it quickly turns into full pleasure.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl10.jpg');
    scene.text('"OH GOD! You\'re so big… Oh fuck…" she moans as he thrusts his thick dick deeper and deeper into her ass.');
    scene.text('Djibril slaps her ass. "Yeah, that\'s right. You love my big black cock in your ass, don\'t you?" he says while slapping her ass. "You just love it when you have a black dick balls deep in your ass. Tell me how much you love it."');
    scene.text('The more he talks dirty to her, the more turned on she looks and the more she gets into it. "Yes… I love big black cocks… In my tight little… White ass…"');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl11.jpg');
    scene.text('"Fuck, your ass is tight!" he says as he slaps her ass again.');
    scene.text('"Ohhh… Your cock… Is so big…" she moans as he keeps fucking her.');
    scene.text('He starts to grunt and thrust even harder into her ass. "Just think. Anyone could walk in and see you taking a big black cock, balls deep in your ass while you\'re loving it."');
    scene.text('She doesn\'t respond, but her legs start shaking and her whole body soon spasms as she has an orgasm. At this point, she can\'t really support herself and he holds her up as he keeps fucking her with a sudden urgency.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl12.jpg');
    scene.text('He suddenly pulls his dick out of her ass and she quickly gets down on her knees. As soon as she\'s on her knees in front of him, he starts jerking off and almost immediately starts cumming over her face. Once he finishes cumming on her, he slips his dick away. "That was amazing. We should totally do that again," he says with a grin.');
    scene.text('She grabs her purse and gets some tissues to start cleaning up her face. "Maybe if you\'re a good boy," she says in a snarky, teasing tone.');
    scene.text('He laughs at her reply. "Oh, I\'m a real good boy!" As she finishes cleaning up her face, he adds. "I need to get going, but stop by my room sometime and we can hang out, play some games or watch TV or something."');
    scene.text('She shrugs. "Maybe. I\'m pretty busy with studying, my job, modeling, the band…"');
    scene.text('He nods. "Cool, cool. See you later." With that, he turns to head for the exit. You quickly duck aside hoping he doesn\'t see you.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Quickly leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Stand near the door and wait', handler: (st: GameState) => {
    if (((s as any).DjibrilQW ?? 0)?.['nush_compclass'] === 0) {
      ((s as any).DjibrilQW ?? {})['nush_compclass'] = 1;
      scene.img('images/characters/shared/headshots_main/big82.jpg');
      // TODO-QSP: dynamic text: You don't have to wait long before Djibril walks out with a huge grin on his fac...
      scene.text(`You don't have to wait long before Djibril walks out with a huge grin on his face. When he sees you, he stops and impulsively glances back at the door. You could swear he's blushing, but it's hard to tell with his dark skin. He rubs the back of his head with one hand. "Uh… Hey ${((s as any).pcs_nickname ?? 0)}… Did you need something?"`);
      scene.text('You grin at him and decide to tease him a little. "Yeah, I was waiting on my friend to leave class and see if they wanted to study, but you guys were in there for so long and it sounded like you were exercising or something…"');
      scene.text('Now you\'re sure he\'s blushing. "Oh…" Then he just laughs and relaxes. "Yeah, you caught us. We were fucking like rabbits. Maybe next time you might want to stay over instead, or maybe join us?"');
      scene.text('Now it\'s your turn to blush. "Maybe…" you mutter back.');
      scene.text('He laughs before walks away with some parting words. "Well, just think about it."');
    } else {
      scene.img('images/characters/shared/headshots_main/big82.jpg');
      scene.text('You don\'t have to wait long before Djibril walks out with a huge grin on his face. When he sees you, he stops and just laughs. "Enjoy the show?"');
      scene.text('You grin at him and nod. "Yeah, it was pretty good."');
      scene.text('He grins. "Yeah, I try to give as good as I get. Instead of watching, you should stay over or come join us next time."');
      scene.text('You blush at that. "Maybe. I\'ll think about it."');
      scene.text('He laughs even more and walks away with some parting words. "Yeah okay, but don\'t think too much about it because I would love to have you both."');
    }
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Wait for Anushka', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    if (((s as any).DjibrilQW ?? 0)?.['nush_compclass'] === 0) {
      ((s as any).DjibrilQW ?? {})['nush_compclass'] = 1;
      // TODO-QSP: dynamic text: A few minutes later, the door opens again and Anushka comes out, all cleaned up ...
      scene.text(`A few minutes later, the door opens again and Anushka comes out, all cleaned up and clothes back in order. She gives you a knowing little smile. "Been waiting long, ${((s as any).pcs_nickname ?? 0)}?"`);
      scene.text('You grin at her and decide to tease her a little. "Yeah, I was waiting on my friend to leave class and see if they wanted to study, but you guys were in there for so long and it sounded like you were exercising or something…"');
      scene.text('She just rolls her eyes at your attempt at a joke, then smirks at you. "Uh-huh. You know what we were doing. I was getting fucked good and proper by a big black cock and I loved it."');
      scene.text('You laugh and hip bump her. "Yeah, I could hear that much. So where are you off to?" you ask as you start walking together.');
      scene.text('"Going to the library to study some before work. You want to come?" she asks while giving you a friendly smile and slowing down a little.');
      scene.actions([
        { label: 'Let\'s have fun instead', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something…"');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done at the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later." She puts some extra sway in her hips as she walks away, really rocking her ass.');
      scene.text('You smile and shake your head before turning to leave yourself.');
    } else {
      ((s as any).anushkaCityQW ?? {})['first_visit'] = 1;
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later, but you should stop by my place sometime."');
      scene.text('She tells you where the apartment she shares with the boys from the band is located and puts some extra sway in her hips as she walks away, really rocking her ass.');
      scene.text('You smile and shake your head before turning to leave yourself.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
        { label: 'Ask if you can come along', goto: ['uni_lessons_electives_shared1', 'anushka_study'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: A few minutes later, the door opens again and Anushka comes out, all cleaned up ...
      scene.text(`A few minutes later, the door opens again and Anushka comes out, all cleaned up and clothes back in order. She gives you a knowing little smile. "You been perving and spying on us again, ${((s as any).pcs_nickname ?? 0)}?"`);
      scene.text('You can\'t help but blush. "Maybe… I was waiting to see if you wanted to do something after class and well… You took your time…"');
      scene.text('She giggles. "What can I say? He knows how to make a girl feel <i>really</i> good."');
      scene.text('You laugh and hip bump her. "Yeah, I heard you calling out to god a few times in there. So where are you off to?" you ask as you start walking together.');
      scene.text('"Going to the library to study before work. Want to come?" she asks while giving you a friendly smile and slowing down a little.');
      scene.actions([
        { label: 'Let\'s have fun instead', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something…"');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done at the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later."');
      scene.text('She puts some extra sway in her hips as she walks away, really rocking her ass. You smile and shake your head before turning to leave yourself.');
    } else {
      ((s as any).anushkaCityQW ?? {})['first_visit'] = 1;
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later, but you should stop by my place sometime."');
      scene.text('She tells you where the apartment she shares with the boys from the band is located and she puts some extra sway in her hips as she walks away, really rocking her ass.');
      scene.text('You smile and shake your head before turning to leave yourself.');
    }
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
        { label: 'Ask if you can come along', goto: ['uni_lessons_electives_shared1', 'anushka_study'] },
      ]);
    }
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
    case 'anushka':
      enterAnushka(s, scene);
      break;
    case 'anushka_photoshoot':
      enterAnushkaPhotoshoot(s, scene);
      break;
    case 'anushka_djibril':
      enterAnushkaDjibril(s, scene);
      break;
    case 'anushka_djibril_sex':
      enterAnushkaDjibrilSex(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_lessons_electives_computers1: LocationDef = {
  name: 'uni_lessons_electives_computers1',
  title: 'You walk into the classroom and take a seat at one of the co',
  region: 'other',
  enter: enter,
};
