import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAsianStudies_101(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/electives/asian_studies/classroom.jpg');
  if (((s as any).university ?? 0)?.['first_visit_asian_studies_101']) {
    scene.text('You walk into the classroom and take a seat as the rest of your classmates walk in one-by-one before Professor Da enters the room and closes the door.');
    scene.text('She turns to the class and begins today\'s lecture.');
  } else {
    (s as any).university['first_visit_asian_studies_101'] = 1;
    scene.text('You walk into the classroom and take a seat. The rest of your classmates walk in one-by-one, the majority of them female Asian students.');
    scene.text('An older Asian lady, likely in her forties you would guess, then walks in and closes the door before she stops at the front of the class.');
    scene.text('"My name is Hou Da, but you may call me Professor Da. I\'m going to teach you about the various Asian cultures and history."');
    scene.text('With that over, she begins today\'s lecture as you hear a few of your classmates snicker about how she is Professor Yes in Russian.');
  }
  qspCall(s, 'willpower', 'chore', 'self', ((((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : (((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')))));
  if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
  } else {
    (s as any).will_cost = 0;
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen attentively to Professor Da [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Da', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
  }, goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_listen'] },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention in class', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_no_attention'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_talk'] },
  ]);
  scene.build();
}

function enterAsianStudies_101Listen(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 0);
  } else {
    qspCall(s, 'exp_gain', 'humint', Math.floor(Math.random() * 2) + 0);
  }
  (s as any).trait_vars['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/attentive${Math.floor(Math.random() * 4) + 1}.jpg`);
  scene.text('You listen attentively to Professor Da for the duration of the class. She manages to make today\'s lesson interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
  scene.actions([
    { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1, 'no_bonus');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/classroom/question1.jpg');
    scene.text('Professor Da nods approvingly, happy to see her students engaged and trying their best. She happily spends some extra time explaining the topic again, and answers any additional questions you might have.');
    scene.text('You feel smarter, thoroughly understanding today\'s lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
    ]);
  } },
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
  ]);
  scene.build();
}

function enterAsianStudies_101NoAttention(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/bored.jpg');
  scene.text('Professor Da\'s lecture is very dry and boring, and you\'re having a hard time paying attention.');
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
  ]);
  scene.build();
}

function enterAsianStudies_101Talk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('As you arrive in class, you look around and decide to sit next to...');
  scene.actions([
    { label: 'Dimka', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_talk_dimka'] },
    { label: 'Igor', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_talk_igor'] },
    { label: 'Lariska', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_talk_lariska'] },
  ]);
  scene.build();
}

function enterAsianStudies_102(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/electives/asian_studies/classroom.jpg');
  if (((s as any).university ?? 0)?.['first_visit_asian_studies_102']) {
    scene.text('You walk into the classroom and take a seat as the rest of your classmates walk in one-by-one before Professor Da enters the room and closes the door.');
    scene.text('She turns to the class and begins today\'s lecture.');
  } else {
    (s as any).university['first_visit_asian_studies_102'] = 1;
    scene.text('You walk into the classroom and take a seat. The rest of your classmates walk in one-by-one, the majority of them female Asian students.');
    scene.text('An older Asian lady, likely in her forties you would guess, then walks in and closes the door before she stops at the front of the class.');
    scene.text('"My name is Hou Da, but you may call me Professor Da. I\'m going to teach you about the various Asian cultures and history."');
    scene.text('With that over, she begins today\'s lecture as you hear a few of your classmates snicker about how she is Professor Yes in Russian.');
  }
  qspCall(s, 'willpower', 'chore', 'self', ((((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : (((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')))));
  if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
  } else {
    (s as any).will_cost = 0;
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen attentively to Professor Da [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Da', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
  }, goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_102_listen'] },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention in class', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_102_no_attention'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_102_talks'] },
  ]);
  scene.build();
}

function enterAsianStudies_102Listen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'compskl', Math.floor(Math.random() * 2) + 0);
  (s as any).trait_vars['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/attentive${Math.floor(Math.random() * 4) + 1}.jpg`);
  scene.text('You listen attentively to Professor Da for the duration of the class. She manages to make today\'s lesson interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
  scene.actions([
    { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1, 'no_bonus');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/classroom/question1.jpg');
    scene.text('Professor Da nods approvingly, happy to see her students engaged and trying their best. She happily spends some extra time explaining the topic again, and answers any additional questions you might have.');
    scene.text('You feel smarter, thoroughly understanding today\'s lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
    ]);
  } },
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
  ]);
  scene.build();
}

function enterAsianStudies_102NoAttention(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/bored.jpg');
  scene.text('Professor Da\'s lecture is very dry and boring, and you\'re having a hard time paying attention.');
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
  ]);
  scene.build();
}

function enterAsianStudies_102Talk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('As you arrive in class, you look around and decide to sit next to...');
  scene.actions([
    { label: 'Dimka', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_102_talk_dimka'] },
    { label: 'Igor', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_102_talk_igor'] },
    { label: 'Lariska', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_102_talk_lariska'] },
  ]);
  scene.build();
}

function enterAsianStudies_101TalkDimka(s: GameState, scene: SceneBuilder): void {
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
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
  ]);
  scene.build();
}

function enterAsianStudies_102TalkDimka(s: GameState, scene: SceneBuilder): void {
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
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
  ]);
  scene.build();
}

function enterAsianStudies_101TalkIgor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A4', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 250  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
    if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
      scene.text('You sit next to Igor, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you and paying attention to the class instead.');
    } else {
      scene.text('You sit next to Igor. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
      scene.text('You sit next to Igor and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
      scene.text('You sit next to Igor, but he dismisses all of your attempts to speak with him until he tells you to leave him alone.');
    } else {
      scene.text('You sit next to Igor and try to talk to him, but he asks you to be quiet so he can focus on the lecture.');
      scene.text('You sit next to Igor. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before a fellow student asks you to be quiet.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
  ]);
  scene.build();
}

function enterAsianStudies_102TalkIgor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A4', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 250  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
    if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
      scene.text('You sit next to Igor, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you and paying attention to the class instead.');
    } else {
      scene.text('You sit next to Igor. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
      scene.text('You sit next to Igor and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
      scene.text('You sit next to Igor, but he dismisses all of your attempts to speak with him until he tells you to leave him alone.');
    } else {
      scene.text('You sit next to Igor and try to talk to him, but he asks you to be quiet so he can focus on the lecture.');
      scene.text('You sit next to Igor. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before a fellow student asks you to be quiet.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
  ]);
  scene.build();
}

function enterAsianStudies_101TalkKatja(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  qspCall(s, 'stat', '');
  if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
    scene.text('text for Sveta trying to talk to the npc hates her');
  } else {
    scene.text('text if they just know each other and have no strong feelings one way or the other');
    if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
      scene.text('text for them being good friends. feel free to change the rel requirement up or down, 60 is the default.');
    } else {
      scene.text('optional text if the npc judges Sveta on high slut fame, feel free to change the numbers');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
  ]);
  scene.build();
}

function enterAsianStudies_102TalkKatja(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  qspCall(s, 'stat', '');
  if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
    scene.text('text for Sveta trying to talk to the npc hates her');
  } else {
    scene.text('text if they just know each other and have no strong feelings one way or the other');
    if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
      scene.text('text for them being good friends. feel free to change the rel requirement up or down, 60 is the default.');
    } else {
      scene.text('optional text if the npc judges Sveta on high slut fame, feel free to change the numbers');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
  ]);
  scene.build();
}

function enterAsianStudies_101TalkLariska(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 200  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
    if (((s as any).npc_rel ?? 0)?.['A13'] <= 20) {
      scene.text('You sit next to Lariska, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
    } else {
      scene.text('You sit next to Lariska. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
      scene.text('You sit next to Lariska and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A13'] <= 20) {
      scene.text('You sit next to Lariska, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
    } else {
      scene.text('You sit next to Lariska and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
      scene.text('You sit next to Lariska. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
  ]);
  scene.build();
}

function enterAsianStudies_102TalkLariska(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 200  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
    if (((s as any).npc_rel ?? 0)?.['A13'] <= 20) {
      scene.text('You sit next to Lariska, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
    } else {
      scene.text('You sit next to Lariska. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
      scene.text('You sit next to Lariska and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A13'] <= 20) {
      scene.text('You sit next to Lariska, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
    } else {
      scene.text('You sit next to Lariska and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
      scene.text('You sit next to Lariska. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101_events'] },
  ]);
  scene.build();
}

function enterAsianStudies_101Events(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  (s as any).uni_event_hour = 1;
  (s as any).temp = Math.floor(Math.random() * 37) + 0;
  if (((s as any).temp ?? 0) < 2) {
    scene.img('images/locations/city/island/university/classroom/electives/psychology/boy_sleeping.jpg');
    scene.text('As Professor Da continues her lecture, you notice a boy just ahead of you with his head down softly snoring. You watch as Professor Da walks over and slams her hand on his desk.');
    scene.text('The boy jumps awake and several others jump as well. The boy looks around, obviously confused as Professor Da glares at him.');
    scene.text('"Sleep on your own time! Now either pay attention or leave!"');
    scene.text('She says pointing at the door, then goes back to her lecture as the boy struggles to stay awake for the rest of class.');
  } else {
    scene.img('images/locations/city/island/university/classroom/electives/computer/dimka_hump.jpg');
    scene.text('During the short break in the middle of class, your fellow students break up into small groups or just relax where they are. As you glance around, you notice Dimka talking to an Asian girl.');
    scene.text('You can tell they\'re flirting even from here as he leans in close to her and whispers something, causing her to giggle before Dimka spins her around and grabs her by the back of the neck, forcing her head down until she\'s bent over a desk.');
    scene.text('He keeps one hand on the back of her neck as he grinds his crotch against her ass while grabbing her hip with his other hand. He proceeds to dry hump her in front of everyone while making degrading comments towards her, but she doesn\'t struggle against him.');
    scene.text('When the professor returns, Dimka lets go of her and retakes his seat while giving her a wink.');
    scene.text('The girl blushes hard as she retakes her seat, but you notice she keeps glancing at him; she clearly enjoyed what he did and now has a thing for him.');
    qspCall(s, 'arousal', 'erotic', 1);
    qspCall(s, 'arousal', 'end');
    if (((s as any).temp ?? 0) < 6) {
      scene.img('images/locations/city/island/university/classroom/electives/psychology/girl_smoking.jpg');
      scene.text('As Professor Da continues her lecture, you glance over and notice a girl bent over hiding her head from Professor Da. She pulls out a cigarette and lights it up before she starts smoking it.');
      scene.text('After taking a drag, she sits back up while holding the cigarette below the desk before ducking her head back down to take another drag. She keeps repeating this until she finishes the cigarette.');
    } else {
      scene.img('images/locations/city/island/university/classroom/electives/psychology/uniskirtpull.jpg');
      scene.text('As class ends, all the students start leaving. Ahead of you is a boy walking with a girl when another boy suddenly runs over and grabs the hem of her dress before pulling it all the way up, showing off her thong and stockings for everyone to see.');
      scene.text('The girl squeals and jerks away, getting her dress back in place as her apparent boyfriend looks around in confusion. By the time he figures it out, the other boy has already long took off.');
      qspCall(s, 'arousal', 'erotic', 1);
      qspCall(s, 'arousal', 'end');
      if (((s as any).temp ?? 0) < 10) {
        scene.img('images/locations/city/island/university/classroom/electives/asian_studies/bored_asiangs.jpg');
        scene.text('As Professor Da continues her lecture, you notice two girls sitting directly to your side. They look completely bored by the class and are not paying attention at all.');
        scene.text('After a few minutes, Professor Da clears her throat loudly. "Am I boring the two of you? If you like, you are welcome to leave."');
        scene.text('She points at the door and the two girls reluctantly start to pay attention for the rest of class.');
      } else {
        scene.img('images/locations/city/island/university/classroom/electives/asian_studies/drop_pencil.jpg');
        scene.text('As Professor Da continues her lecture, you accidentally drop your pencil on the floor. You bend over in your seat and pick it up, but as you start to straighten back up, you find yourself looking up an Asian girl\'s skirt, her legs spread wide as she pulls up the front of her short skirt.');
        scene.text('Her lacy panties are barely covering her pussy and her pubic hair is visible through the lace. When you glance up at her, you see her grinning.');
        if (((s as any).hotcat ?? 0) < 5) {
          scene.text('Once you sit back up, she closes her legs and smooths her skirt back in place before she goes back to paying attention to Professor Da\'s lecture as if nothing had happened.');
          scene.text('When class is over, she quickly gets up and leaves, leaving you to wonder what that was all about.');
        } else {
          scene.text('"You ever taste Asian pussy before?" Before you can answer, she closes her legs and smooths her skirt back into place. "If you would like to, come by my dorm room some time."');
          scene.text('She tells you which room is hers before she goes back to paying attention to Professor Da\'s lecture as if nothing had happened. When class is over, she quickly gets up and leaves, leaving you to wonder what that was all about.');
          scene.text('<br>Note: She doesn\'t have a dorm room yet, but will in the future.');
        }
        qspCall(s, 'arousal', 'erotic', 1);
        qspCall(s, 'arousal', 'end');
        return;
        if (((s as any).temp ?? 0) < 14) {
          scene.img('images/locations/city/island/university/classroom/electives/asian_studies/gdom_asiang.jpg');
          scene.text('Once Professor Da ends her lecture, most of the students get up and leave, as does Professor Da, but you notice an Asian girl and a Russian girl stay behind.');
          scene.text('You watch the blonde girl sit on the table and slide in front of the Asian girl. Once she\'s in front of her, she spreads her legs wide and wraps a scarf around the Asian girl\'s neck before pulling her head forward.');
          scene.text('The Asian girl places her hands on the blonde\'s thighs to try and resist, but you\'re not sure how hard she\'s really resisting as her head is slowly lowered between the other girl\'s legs.');
          scene.text('You\'re fairly sure what happens next, but not wanting to get caught peeping, you quickly leave the classroom.');
          qspCall(s, 'arousal', 'erotic', 1);
          qspCall(s, 'arousal', 'end');
          return;
          scene.actions([
            { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
          ]);
        } else {
          scene.img('images/locations/city/island/university/classroom/electives/asian_studies/classroom.jpg');
          scene.text('Once Professor Da ends her lecture, most of the students get up and leaves, as does Professor Da, but you notice one Asian girl and several Russian boys stay behind.');
          scene.text('You had noticed how the boys had been talking and flirting with her during class earlier.');
          return;
          if (((s as any).temp ?? 0) < 18) {
            scene.img('images/locations/city/island/university/classroom/electives/asian_studies/nipslip_asian.jpg');
            scene.text('During the short break in the middle of class, your fellow students break up into small groups or just relax where they are.');
            scene.text('As you glance around, you notice an Asian girl talking to some of her friends. As she bends over to look at something on the desk, you notice how her shirt hangs down enough to show off her small breasts and nipples.');
            scene.text('After a few seconds, she stands back up, clearly unaware of her little show, but no one else seems to have noticed.');
            qspCall(s, 'arousal', 'voyeur', 1);
            qspCall(s, 'stat', '');
          } else {
            scene.img('images/locations/city/island/university/classroom/electives/asian_studies/classroom.jpg');
            scene.text('As you sit listening to the lesson, you look around hoping something interesting will happen, but nothing does.');
          }
          scene.actions([
            { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
            { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/electives/asian_studies/naked_asiang.jpg');
    scene.text('They\'re talking softly to each other and she seems slightly embarrassed, but also seems to be loving the attention.');
    scene.text('She then nods and stands up before she slowly starts to strip out of her clothes in front of the boys. She strips down to just her knee socks, though her hairy pussy hides a lot.');
    scene.text('She then notices you still in the room and turns a bright red as she quickly starts to get dressed. The boys try to get her to stay, but once she\'s mostly dressed, she runs out of the room while blushing the whole time.');
    scene.text('Several of the boys grumble and give you dirty looks as they leave as well.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
            { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
          ]);
        }
        scene.actions([
          { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
        ]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'asian_studies_101':
      enterAsianStudies_101(s, scene);
      break;
    case 'asian_studies_101_listen':
      enterAsianStudies_101Listen(s, scene);
      break;
    case 'asian_studies_101_no_attention':
      enterAsianStudies_101NoAttention(s, scene);
      break;
    case 'asian_studies_101_talk':
      enterAsianStudies_101Talk(s, scene);
      break;
    case 'asian_studies_102':
      enterAsianStudies_102(s, scene);
      break;
    case 'asian_studies_102_listen':
      enterAsianStudies_102Listen(s, scene);
      break;
    case 'asian_studies_102_no_attention':
      enterAsianStudies_102NoAttention(s, scene);
      break;
    case 'asian_studies_102_talk':
      enterAsianStudies_102Talk(s, scene);
      break;
    case 'asian_studies_101_talk_dimka':
      enterAsianStudies_101TalkDimka(s, scene);
      break;
    case 'asian_studies_102_talk_dimka':
      enterAsianStudies_102TalkDimka(s, scene);
      break;
    case 'asian_studies_101_talk_igor':
      enterAsianStudies_101TalkIgor(s, scene);
      break;
    case 'asian_studies_102_talk_igor':
      enterAsianStudies_102TalkIgor(s, scene);
      break;
    case 'asian_studies_101_talk_katja':
      enterAsianStudies_101TalkKatja(s, scene);
      break;
    case 'asian_studies_102_talk_katja':
      enterAsianStudies_102TalkKatja(s, scene);
      break;
    case 'asian_studies_101_talk_lariska':
      enterAsianStudies_101TalkLariska(s, scene);
      break;
    case 'asian_studies_102_talk_lariska':
      enterAsianStudies_102TalkLariska(s, scene);
      break;
    case 'asian_studies_101_events':
      enterAsianStudies_101Events(s, scene);
      break;
    default:
      enterAsianStudies_101(s, scene);
      break;
  }
}

export const uni_lessons_electives_asian_studies1: LocationDef = {
  name: 'uni_lessons_electives_asian_studies1',
  title: '<br>Note: She doesn\'t have a dorm room yet, but will in the future.',
  region: 'other',
  description: ['You walk into the classroom and take a seat as the rest of your classmates walk in one-by-one before Professor Da enters the room and closes the door.'],
  enter: enter,
};
