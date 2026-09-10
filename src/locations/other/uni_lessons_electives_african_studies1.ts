import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAfricanStudies_101(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/electives/african_studies/classroom.jpg');
  if (((s as any).university ?? 0)?.['first_visit_african_studies_101']) {
    scene.text('You walk into the classroom and take a seat. You see a lot of the African boys stop to talk to some of the white girls, likely to discuss some of Professor Bryant\'s ideas about "personal reparations."');
    scene.text('The rest of your classmates walk in one-by-one before Professor Bryant enters the classroom and closes the door.');
    scene.text('He turns to the class and begins today\'s lecture, once more a discussion of culture and history heavily influenced by his belief that white people should be making social and personal reparations.');
  } else {
    (s as any).university['first_visit_african_studies_101'] = 1;
    scene.text('You walk into the classroom and take a seat. You quickly notice that there are a lot of African students, which is to be expected you suppose, but almost half the class is white Russian girls such as yourself.');
    scene.text('The rest of your classmates walk in one-by-one before a fit, tall, fairly good looking middle aged black man enters the classroom and closes the door. He walks to the center of the room before turning to face all the students. "My name is Professor Ka\'ron Bryant."');
    scene.text('You can\'t help but notice his accent is not like the other African ones you have heard as he continues talking. "As some of you may have guessed, I am from the United States of American. I came here to teach you about the history and rich culture of Africa."');
    scene.text('He pauses for a moment and looks around, seeming to gaze briefly at each student. "Including the abhorrent tragedy that was slavery and how we can still today address that, with social and personal reparations."');
    scene.text('He goes on to discuss his general feelings on the topic, which seems to mostly be that whites should be making social and personal reparations to black Africans or their decedents for slavery. It is at this point you realize he has just launched into his first lecture.');
  }
  qspCall(s, 'willpower', 'chore', 'self', ((((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : (((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')))));
  if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
  } else {
    (s as any).will_cost = 0;
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen attentively to Professor Bryant [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Bryant', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
  }, goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_listen'] },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention in class', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_no_attention'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_talk'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101Listen(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 0);
  } else {
    qspCall(s, 'exp_gain', 'humint', Math.floor(Math.random() * 2) + 0);
  }
  (s as any).trait_vars['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/attentive${Math.floor(Math.random() * 4) + 1}.jpg`);
  scene.text('You listen attentively to Professor Bryant for the duration of the class. He manages to make today\'s lesson interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
  scene.text('However, his biases towards a need for social and personal reparations come through as always. While he never outright says it, you get the feeling he thinks white girls should be offering their bodies to black African men as part of these reparations.');
  scene.actions([
    { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1, 'no_bonus');
    scene.img('images/locations/city/island/university/classroom/question1.jpg');
    scene.text('Professor Bryant nods approvingly, happy to see his students engaged and trying their best. He happily spends some extra time explaining the topic again, and answers any additional questions you might have.');
    scene.text('You feel smarter, thoroughly understanding today\'s lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
    ]);
  } },
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101NoAttention(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/bored.jpg');
  scene.text('Professor Bryant\'s lecture is very heavily influenced by his personal propaganda and you\'re having a hard time paying attention.');
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101Talk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('As you arrive in class, you look around and decide to sit next to...');
  if ((!((s as any).meet_kendra ?? 0))) {
    scene.actions([
      { label: 'The ebony girl', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_talk_kendra_1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Kendra', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_talk_kendra_2'] },
    ]);
  }
  if (((s as any).ErmiasQW ?? 0)?.['meet'] === 0) {
    scene.actions([
      { label: 'A good looking black guy', handler: (st: GameState) => {
    (s as any).ErmiasQW['meet'] = 1;
  }, goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_talk_ermias_1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Ermias', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_talk_ermias_2'] },
    ]);
  }
  if (((s as any).petkaQW ?? 0)?.['pegged'] > 19) {
    scene.actions([
      { label: 'Petka', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_talk_petka'] },
    ]);
  }
  scene.actions([
    { label: 'Anushka', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_talk_anushka'] },
    { label: 'Djibril', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_talk_djibril'] },
    { label: 'Lebogang', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_talk_lebogang'] },
    { label: 'Farai', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_talk_farai'] },
    { label: 'Arendse', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_talk_arendse'] },
    { label: 'Haruna', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_talk_haruna'] },
  ]);
  scene.build();
}

function enterAfricanStudies102(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/electives/african_studies/classroom.jpg');
  if (((s as any).university ?? 0)?.['first_visit_african_studies_102'] === 0) {
    scene.text('You walk into the classroom and take a seat. You see a lot of the African boys stop to talk to some of the white girls, likely to discuss some of Professor Bryant\'s ideas about "personal reparations."');
    scene.text('The rest of your classmates walk in one-by-one before Professor Bryant enters the classroom and closes the door.');
    scene.text('He turns to the class and begins today\'s lecture, once more a discussion of culture and history heavily influenced by his belief that white people should be making social and personal reparations.');
  } else {
    (s as any).university['first_visit_african_studies_102'] = 1;
    scene.text('You walk into the classroom and take a seat. You quickly notice that there are a lot of African students, which is to be expected you suppose, but almost half the class is white Russian girls such as yourself.');
    scene.text('The rest of your classmates walk in one-by-one before a fit, tall, fairly good looking middle aged black man enters the classroom and closes the door. He walks to the center of the room before turning to face all the students. "My name is Professor Ka\'ron Bryant."');
    scene.text('You can\'t help but notice his accent is not like the other African ones you have heard as he continues talking. "As some of you may have guessed, I am from the United States of American. I came here to teach you about the history and rich culture of Africa."');
    scene.text('He pauses for a moment and looks around, seeming to gaze briefly at each student. "Including the abhorrent tragedy that was slavery and how we can still today address that, with social and personal reparations."');
    scene.text('He goes on to discuss his general feelings on the topic, which seems to mostly be that whites should be making social and personal reparations to black Africans or their decedents for slavery. It is at this point you realize he has just launched into his first lecture.');
  }
  qspCall(s, 'willpower', 'chore', 'self', ((((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : (((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')))));
  if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
  } else {
    (s as any).will_cost = 0;
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen attentively to Professor Bryant [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Bryant', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
  }, goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_listen'] },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention in class', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_no_attention'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_talk'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102Listen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'compskl', Math.floor(Math.random() * 2) + 0);
  (s as any).trait_vars['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/attentive${Math.floor(Math.random() * 4) + 1}.jpg`);
  scene.text('You listen attentively to Professor Bryant for the duration of the class. He manages to make today\'s lesson interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
  scene.text('However, his biases towards a need for social and personal reparations come through as always. While he never outright says it, you get the feeling he thinks white girls should be offering their bodies to black African men as part of these reparations.');
  scene.actions([
    { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1, 'no_bonus');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/classroom/question1.jpg');
    scene.text('Professor Bryant nods approvingly, happy to see his students engaged and trying their best. He happily spends some extra time explaining the topic again, and answers any additional questions you might have.');
    scene.text('You feel smarter, thoroughly understanding today\'s lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
    ]);
  } },
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102NoAttention(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/bored.jpg');
  scene.text('Professor Bryant\'s lecture is very heavily influenced by his personal propaganda and you\'re having a hard time paying attention.');
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102Talk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('As you arrive in class, you look around and decide to sit next to...');
  if ((!((s as any).meet_kendra ?? 0))) {
    scene.actions([
      { label: 'The ebony girl', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_talk_kendra_1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Kendra', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_talk_kendra_2'] },
    ]);
  }
  if (((s as any).ErmiasQW ?? 0)?.['meet'] === 0) {
    scene.actions([
      { label: 'A good looking black guy', handler: (st: GameState) => {
    (s as any).ErmiasQW['meet'] = 1;
  }, goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_talk_ermias_1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Ermias', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_talk_ermias_2'] },
    ]);
  }
  if (((s as any).petkaQW ?? 0)?.['pegged'] > 19) {
    scene.actions([
      { label: 'Petka', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_talk_petka'] },
    ]);
  }
  scene.actions([
    { label: 'Anushka', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_talk_anushka'] },
    { label: 'Djibril', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_talk_djibril'] },
    { label: 'Lebogang', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_talk_lebogang'] },
    { label: 'Farai', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_talk_farai'] },
    { label: 'Arendse', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_talk_arendse'] },
    { label: 'Haruna', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_talk_haruna'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkKendra_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/ebony_girl_talk.jpg');
  // TODO-QSP: dynamic text: There's something about this ebony girl that intrigues you, so you decide to sit...
  scene.text(`There's something about this ebony girl that intrigues you, so you decide to sit next to her. "Hi, I'm ${((s as any).pcs_nickname ?? 0)}."`);
  if (((s as any).pcs_hotcat ?? 0) < 5) {
    scene.text('"No. Not interested. Maybe if you do something about all of... \'this\', you can try again." Her hand indicates your entire person with languid disinterest.');
    scene.text('You\'re taken aback by her comment. "What?"');
    scene.text('She rolls her eyes, believing your shocked silence to be stupidity. "Just go away."');
    scene.text('She ignores you for the rest of the class, leaving you to wonder if she doesn\'t find you attractive enough to get her attention. Maybe if you were better looking she would talk to you?');
  } else {
    (s as any).meet_kendra = 1;
    scene.text('She eyes you like a pair of shoes she might buy. "I\'m Kendra, but you can call me Mistress," she replies in an exotic accent. "If you like, I can train you to become one of my slaves and you can begin your reparations for being white."');
    scene.text('You\'re taken aback by her comment. "Slaves?"');
    scene.text('She smiles. "Yes, I have many white sex slaves here, and I can train you to serve me as well as the other Africans. If you\'re interested, come to my dorm room. It\'s on the eighth floor, room 808."');
    scene.text('You sit next to Kendra and try to have a conversation with her, but anytime you try and get a word in, she shushes you and tells you to pay attention in class and learn your place in the new world.');
    scene.text('She seems to be eating up what Professor Bryant says, completely agreeing with and believing every word, leaving you to wonder if you should visit her dorm room and see what she was talking about...');
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkKendra_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/ebony_girl_talk.jpg');
  // TODO-QSP: dynamic text: There's something about this ebony girl that intrigues you, so you decide to sit...
  scene.text(`There's something about this ebony girl that intrigues you, so you decide to sit next to her. "Hi, I'm ${((s as any).pcs_nickname ?? 0)}."`);
  if (((s as any).pcs_hotcat ?? 0) < 5) {
    scene.text('"No. Not interested. Maybe if you do something about all of... \'this\', you can try again." Her hand indicates your entire person with languid disinterest.');
    scene.text('You\'re taken aback by her comment. "What?"');
    scene.text('She rolls her eyes, believing your shocked silence to be stupidity. "Just go away."');
    scene.text('She ignores you for the rest of the class, leaving you to wonder if she doesn\'t find you attractive enough to get her attention. Maybe if you were better looking she would talk to you?');
  } else {
    (s as any).meet_kendra = 1;
    scene.text('She eyes you like a pair of shoes she might buy. "I\'m Kendra, but you can call me Mistress," she replies in an exotic accent. "If you like, I can train you to become one of my slaves and you can begin your reparations for being white."');
    scene.text('You\'re taken aback by her comment. "Slaves?"');
    scene.text('She smiles. "Yes, I have many white sex slaves here, and I can train you to serve me as well as the other Africans. If you\'re interested, come to my dorm room. It\'s on the eighth floor, room 808."');
    scene.text('You sit next to Kendra and try to have a conversation with her, but anytime you try and get a word in, she shushes you and tells you to pay attention in class and learn your place in the new world.');
    scene.text('She seems to be eating up what Professor Bryant says, completely agreeing with and believing every word, leaving you to wonder if you should visit her dorm room and see what she was talking about...');
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkKendra_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/ebony_girl_talk.jpg');
  if (((s as any).kendraQW ?? 0)?.['sub'] < 1) {
    scene.text('You\'re about to sit next to Kendra when she glares at you. "I don\'t think so, Princess. As Professor Bryant says, your kind owes us, so until you realize that and change your mind about being my slave, you can go and sit somewhere else."');
    scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A82'] <= 20) {
      scene.text('You start to sit next to Kendra, who glares at you. "We\'re not friends. You\'re nothing more than my white slave bitch to use and abuse as I see fit. You don\'t come over to me in public, <i>ever</i>. Go sit somewhere else."');
      scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
    } else {
      scene.text('You sit next to Kendra and try to have a conversation with her, but anytime you try and get a word in, she shushes you and tells you to pay attention and learn your place in the new world.');
      scene.text('She seems to be eating up what Professor Bryant says, completely agreeing with and believing every word.');
      scene.text('You decide to sit next to Kendra. You talk to her and she even lets you get a few words in, but she mostly treats you like a pet or someone simple, often making condescending comments towards you.');
      scene.text('Anytime you try and get a word in, she shushes you and tells you to pay attention and learn your place in the new world. She seems to be eating up what Professor Bryant says, completely agreeing with and believing every word.');
    }
    if (((s as any).npc_rel ?? 0)?.['A82'] <= 20) {
      scene.text('You\'re about to sit next to Kendra when she glares at you. "We\'re not friends. You\'re nothing more than my white slave bitch to use and abuse as I see fit. You don\'t come over to me in public, <i>ever</i>. Go sit somewhere else."');
      scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
    } else {
      scene.text('You sit next to Kendra and try to have a conversation with her, but anytime you try and get a word in, she shushes you. She seems to be eating up what Professor Bryant says, completely agreeing with and believing it.');
      scene.text('You decide to sit next to Kendra. You talk to her and she even lets you get a few words in, but she mostly treats you like a pet or someone simple, often making condescending comments towards you.');
      scene.text('Anytime you try and get a word in, she shushes you and tells you to pay attention and learn your place in the new world. She seems to be eating up what Professor Bryant says, completely agreeing with and believing every word.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkKendra_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'uni_lessons_electives_african_studies1', 'african_studies_101_talk_kendra_2');
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkKatja(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
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
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkKatja(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
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
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkAnushka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
    scene.text('You sit next to Anushka, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
  } else {
    scene.text('You sit next to Anushka and the two of you talk, but she seems more focused on the class than you. She seems rather amused by Professor Bryant\'s propaganda lectures about reparations.');
    if ((Math.floor(Math.random() * 5) + 0) === 0  &&  ((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
      if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
        scene.text('You sit next to Anushka, who smiles at you as you sit down. "What up?"');
        scene.text('The two of you are soon talking a fair bit, but she seems fairly focused on the class as well.');
        scene.text('While she does seems interested in parts of the history and culture. she\'s rather amused by Professor Bryant\'s propaganda lectures about reparations.');
      } else {
        scene.text('You sit next to Anushka, who she smiles at you as you take a seat. "What up, slut?"');
        scene.text('You know she\'s just being her normal playful self as the two of talk, but she seems fairly focused on the class as well.');
        scene.text('While she does seems interested in parts of the history and culture, she\'s rather amused by Professor Bryant\'s propaganda lectures about reparations.');
      }
      return;
      scene.actions([
        { label: 'Spend the rest of class with her', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('The two of you sit and chat a bit for the rest of class, you can\'t help but notice Djirbil keeps glancing over and checking the two of you out. Anushka seems to have noticed as well. "Looks like someone is thinking about some sexual reparations." She says as she indicates Djibril who is currently looking at the two of you, he grins when you both look his direction. This goes on for the rest of class.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies2', 'african_studies_djibril_nush'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You sit next to Anushka, who smiles at you as you sit down. "What up?"');
      scene.text('The two of you are soon talking a fair bit, but she seems fairly focused on the class as well.');
      scene.text('While she does seems interested in parts of the history and culture. she\'s rather amused by Professor Bryant\'s propaganda lectures about reparations.');
      scene.text('You sit next to Anushka, who she smiles at you as you take a seat. "What up, slut?"');
      scene.text('You know she\'s just being her normal playful self as the two of talk, but she seems fairly focused on the class as well.');
      scene.text('While she does seems interested in parts of the history and culture, she\'s rather amused by Professor Bryant\'s propaganda lectures about reparations.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkAnushka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
    scene.text('You sit next to Anushka, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
  } else {
    scene.text('You sit next to Anushka and the two of you talk, but she seems more focused on the class than you. She seems rather amused by Professor Bryant\'s propaganda lectures about reparations.');
    if ((Math.floor(Math.random() * 5) + 0) === 0  &&  ((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
      if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
        scene.text('You sit next to Anushka, who smiles at you as you sit down. "What up?"');
        scene.text('The two of you are soon talking a fair bit, but she seems fairly focused on the class as well.');
        scene.text('While she does seems interested in parts of the history and culture. she\'s rather amused by Professor Bryant\'s propaganda lectures about reparations.');
      } else {
        scene.text('You sit next to Anushka, who she smiles at you as you take a seat. "What up, slut?"');
        scene.text('You know she\'s just being her normal playful self as the two of talk, but she seems fairly focused on the class as well.');
        scene.text('While she does seems interested in parts of the history and culture, she\'s rather amused by Professor Bryant\'s propaganda lectures about reparations.');
      }
      return;
      scene.actions([
        { label: 'Spend the rest of class with her', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('The two of you sit and chat a bit for the rest of class, you can\'t help but notice Djirbil keeps glancing over and checking the two of you out. Anushka seems to have noticed as well. "Looks like someone is thinking about some sexual reparations." She says as she indicates Djibril who is currently looking at the two of you, he grins when you both look his direction. This goes on for the rest of class.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies2', 'african_studies_djibril_nush'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You sit next to Anushka, who smiles at you as you sit down. "What up?"');
      scene.text('The two of you are soon talking a fair bit, but she seems fairly focused on the class as well.');
      scene.text('While she does seems interested in parts of the history and culture. she\'s rather amused by Professor Bryant\'s propaganda lectures about reparations.');
      scene.text('You sit next to Anushka, who she smiles at you as you take a seat. "What up, slut?"');
      scene.text('You know she\'s just being her normal playful self as the two of talk, but she seems fairly focused on the class as well.');
      scene.text('While she does seems interested in parts of the history and culture, she\'s rather amused by Professor Bryant\'s propaganda lectures about reparations.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkDjibril(s: GameState, scene: SceneBuilder): void {
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
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkDjibril(s: GameState, scene: SceneBuilder): void {
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
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkLebogang(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A242', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A242'] <= 20) {
      scene.text('You sit next to Lebogang, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Lebogang and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A242'] <= 20) {
      scene.text('You sit next to Lebogang and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Lebogang and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkLebogang(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A242', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A242'] <= 20) {
      scene.text('You sit next to Lebogang, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Lebogang and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A242'] <= 20) {
      scene.text('You sit next to Lebogang and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Lebogang and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkErmias_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('One of the black students catches your eye. He\'s quite attractive, so you decide to sit with him.');
  if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 1) {
    scene.text('As you sit down, you suddenly recognize him as the black guy you saw having sex with Albina.');
  }
  scene.text('He looks up at you and smiles. "Hello there. I am Ermias Okeke. What is your name?"');
  // TODO-QSP: dynamic text: You return his smile. "I'm <<$pcs_firstname>> <<$pcs_lastname>>, but my friends ...
  scene.text(`You return his smile. "I'm ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, but my friends just call me ${((s as any).pcs_nickname ?? 0)}."`);
  // TODO-QSP: dynamic text: "It is nice to meet you, <<$pcs_nickname>>."
  scene.text(`"It is nice to meet you, ${((s as any).pcs_nickname ?? 0)}."`);
  scene.text('The two of you start chatting and you learn that he and some of his friends came from Africa to study here in Russia. He himself is studying law.');
  scene.text('You compliment him on how good his Russian is before the lecture starts and a fellow student asks you to be quiet.');
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkErmias_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).ErmiasQW ?? 0)?.['invite'] === 0) {
    if (((s as any).pcs_hotcat ?? 0) < 7) {
      if (((s as any).npc_rel ?? 0)?.['A243'] >= 60) {
        scene.text('You sit next to Ermias and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        scene.text('You sit next to Ermias, but he doesn\'t have much to say to you and sometimes pretends not to understand what you\'re saying.');
        scene.text('You sit next to Ermias. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
      }
    } else {
      (s as any).ErmiasQW['invite'] = 1;
      scene.text('You sit next to Ermias and spend most of the class quietly talking with him, although he seems far more interested in flirting with you than chatting.');
      if (((s as any).pcs_hotcat ?? 0) < 8) {
        // TODO-QSP: dynamic text: "You are a very cute girl, <<$pcs_nickname>>," he smiles.
        scene.text(`"You are a very cute girl, ${((s as any).pcs_nickname ?? 0)}," he smiles.`);
      } else {
        // TODO-QSP: dynamic text: "You are a very pretty girl, <<$pcs_nickname>>," he smiles. "One of the pretties...
        scene.text(`"You are a very pretty girl, ${((s as any).pcs_nickname ?? 0)}," he smiles. "One of the prettiest girls I have ever seen."`);
        scene.text('"Has anyone ever told you that you are the most beautiful looking girl in the world?" he smiles. "I have never seen a girl as pretty as you."');
      }
      scene.text('You smile back. "Thanks. You\'re not too bad looking yourself..."');
      scene.text('He grins. "Maybe you want come and hang out in my dorm sometime?"');
      scene.text('The way he says it leaves no doubt in your mind what he actually means.');
      scene.text('"Maybe," you reply.');
      scene.text('"I live on the eighth floor of the dorm with one of my friends, but I am home alone most evenings. I look forward to seeing you."');
      scene.text('He spends some time flirting with you before the lecture starts.');
    }
  } else {
    // TODO-QSP: dynamic text: "I hope you will come and visit me in my dorm soon, <<$pcs_nickname>>," he says ...
    scene.text(`"I hope you will come and visit me in my dorm soon, ${((s as any).pcs_nickname ?? 0)}," he says as you sit next to him. "I would love to hang out with a pretty girl like you."`);
    scene.text('He spends some time flirting with you before the lecture starts.');
    if (((s as any).npc_had_sex ?? 0)?.['A243'] === 0) {
      scene.text('Ermias grins as you sit next to him. "I hope you visit again soon so we can finish what we started."');
      scene.text('He spends some time flirting with you before the lecture starts.');
    } else {
      scene.text('Ermias grins as you sit next to him. "Hello bunny. It is nice to see you again."');
      scene.text('He spends some time flirting with you and saying how much fun he had with you. "You should visit me again soon so you can... pay me some more reparations..."');
      scene.text('You smile before Professor Bryant enters the class and the lecture starts.');
    }
  }
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkErmias_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('One of the black students catches your eye. He\'s quite attractive, so you decide to sit with him.');
  if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 1) {
    scene.text('As you sit down, you suddenly recognize him as the black guy you saw having sex with Albina.');
  }
  scene.text('He looks up at you and smiles. "Hello there. I am Ermias Okeke. What is your name?"');
  // TODO-QSP: dynamic text: You return his smile. "I'm <<$pcs_firstname>> <<$pcs_lastname>>, but my friends ...
  scene.text(`You return his smile. "I'm ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, but my friends just call me ${((s as any).pcs_nickname ?? 0)}."`);
  // TODO-QSP: dynamic text: "It is nice to meet you, <<$pcs_nickname>>."
  scene.text(`"It is nice to meet you, ${((s as any).pcs_nickname ?? 0)}."`);
  scene.text('The two of you start chatting and you learn that he and some of his friends came from Africa to study here in Russia. He himself is studying law.');
  scene.text('You compliment him on how good his Russian is before the lecture starts and a fellow student asks you to be quiet.');
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkErmias_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).ErmiasQW ?? 0)?.['invite'] === 0) {
    if (((s as any).pcs_hotcat ?? 0) < 7) {
      if (((s as any).npc_rel ?? 0)?.['A243'] >= 60) {
        scene.text('You sit next to Ermias and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        scene.text('You sit next to Ermias, but he doesn\'t have much to say to you and sometimes pretends not to understand what you\'re saying.');
        scene.text('You sit next to Ermias. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
      }
    } else {
      // TODO-QSP: ! pcs_hotcat >= 7
      (s as any).ErmiasQW['invite'] = 1;
      scene.text('You sit next to Ermias and spend most of the class quietly talking with him, although he seems far more interested in flirting with you than chatting.');
      if (((s as any).pcs_hotcat ?? 0) < 8) {
        // TODO-QSP: dynamic text: "You are a very cute girl, <<$pcs_nickname>>," he smiles.
        scene.text(`"You are a very cute girl, ${((s as any).pcs_nickname ?? 0)}," he smiles.`);
      } else {
        // TODO-QSP: dynamic text: "You are a very pretty girl, <<$pcs_nickname>>," he smiles. "One of the pretties...
        scene.text(`"You are a very pretty girl, ${((s as any).pcs_nickname ?? 0)}," he smiles. "One of the prettiest girls I have ever seen."`);
        scene.text('"Has anyone ever told you that you are the most beautiful looking girl in the world?" he smiles. "I have never seen a girl as pretty as you."');
      }
      scene.text('You smile back. "Thanks. You\'re not too bad looking yourself..."');
      scene.text('He grins. "Maybe you want come and hang out in my dorm sometime?"');
      scene.text('The way he says it leaves no doubt in your mind what he actually means.');
      scene.text('"Maybe," you reply.');
      scene.text('"I live on the eighth floor of the dorm with one of my friends, but I am home alone most evenings. I look forward to seeing you."');
      scene.text('He spends some time flirting with you before the lecture starts.');
    }
  } else {
    // TODO-QSP: dynamic text: "I hope you will come and visit me in my dorm soon, <<$pcs_nickname>>," he says ...
    scene.text(`"I hope you will come and visit me in my dorm soon, ${((s as any).pcs_nickname ?? 0)}," he says as you sit next to him. "I would love to hang out with a pretty girl like you."`);
    scene.text('He spends some time flirting with you before the lecture starts.');
    if (((s as any).npc_had_sex ?? 0)?.['A243'] === 0) {
      scene.text('Ermias grins as you sit next to him. "I hope you visit again soon so we can finish what we started."');
      scene.text('He spends some time flirting with you before the lecture starts.');
    } else {
      scene.text('Ermias grins as you sit next to him. "Hello bunny. It is nice to see you again."');
      scene.text('He spends some time flirting with you and saying how much fun he had with you. "You should visit me again soon so you can... pay me some more reparations..."');
      scene.text('You smile before Professor Bryant enters the class and the lecture starts.');
    }
  }
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkFarai(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A244', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A244'] <= 20) {
      scene.text('You sit next to Farai, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Farai and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Farai and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A244'] <= 20) {
      scene.text('You sit next to Farai and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Farai and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Farai and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkFarai(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A244', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A244'] <= 20) {
      scene.text('You sit next to Farai, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Farai and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Farai and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A244'] <= 20) {
      scene.text('You sit next to Farai and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Farai and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Farai and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkArendse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A246', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A246'] <= 20) {
      scene.text('You sit next to Arendse, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Arendse and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Arendse and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A246'] <= 20) {
      scene.text('You sit next to Arendse and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Arendse and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Arendse and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkArendse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A246', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A246'] <= 20) {
      scene.text('You sit next to Arendse, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Arendse and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Arendse and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A246'] <= 20) {
      scene.text('You sit next to Arendse and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Arendse and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Arendse and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkHaruna(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A245', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A245'] <= 20) {
      scene.text('You sit next to Haruna, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Haruna and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      if ((Math.floor(Math.random() * 5) + 0) > 0) {
        scene.text('You sit next to Haruna and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        scene.text('You sit next to Haruna and spend most of the class quietly talking with him. But you can\'t help but notice, that even though he seems happy to talk to you, he spends a lot of time watching and checking out Anushka.');
        if (((s as any).DjibrilQW ?? 0)?.['sveta_nush'] === 1) {
          scene.text('The two of you talk till the end of class, as soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
        } else {
          scene.text('Towards the end of class he turns to you and asks. "Do you know her?" He says indicating Anushka.');
          if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
            scene.text('You nod your head yes. "Yeah I know her, we went to school together back in Pavlovsk, why?" You ask him.');
            scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
            scene.text('You shrug to him. "Honestly I have no idea, we don\'t really get along. I know she had a bit of a reputation as a slut back then..."');
            scene.text('He looks a little disappointed but nods slightly in thanks. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
          } else {
            scene.text('You nod your head yes. "Yeah I know her, we went to school together back in Pavlovsk, why?" You ask him.');
            scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
            scene.text('You shrug a bit. "Honestly I don\'t know, we was never exactly what you would call friends. More just classmates, we ran in different social groups."');
            scene.text('He nods a bit. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
            scene.text('You nod your head yes. "Yeah I know her, she is one of my best friends, why?" You ask him.');
            scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
            scene.text('You smile to him. "Yes she is into any person she finds attractive, she doesn\'t care about stuff like that and she likes messing with people and making guys really work for it. If she wasn\'t interested at all she would have shut you down."');
            scene.text('He grins even bigger and then looks over at Anushka again. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
          }
        }
        return;
        scene.actions([
          { label: 'Ignore them and go on your way', goto: ['uni_lessons', 'short_break'] },
          { label: 'Follow them', goto: ['uni_lessons_electives_african_studies1', 'nush_haruna_africa101'] },
        ]);
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A245'] <= 20) {
      scene.text('You sit next to Haruna and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Haruna and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      if ((Math.floor(Math.random() * 5) + 0) > 0) {
        scene.text('You sit next to Haruna and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        scene.text('You sit next to Haruna and spend most of the class quietly talking with him. But you can\'t help but notice, that even though he seems happy to talk to you, he spends a lot of time watching and checking out Anushka.');
        if (((s as any).DjibrilQW ?? 0)?.['sveta_nush'] === 1) {
          scene.text('The two of you talk till the end of class, as soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
        } else {
          scene.text('Towards the end of class he turns to you and asks. "Do you know her?" He says indicating Anushka.');
          if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
            scene.text('You nod your head yes. "Yeah I know her, we went to school together back in Pavlovsk, why?" You ask him.');
            scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
            scene.text('You shrug to him. "Honestly I have no idea, we don\'t really get along. I know she had a bit of a reputation as a slut back then..."');
            scene.text('He looks a little disappointed but nods slightly in thanks. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
          } else {
            scene.text('You nod your head yes. "Yeah I know her, we went to school together back in Pavlovsk, why?" You ask him.');
            scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
            scene.text('You shrug a bit. "Honestly I don\'t know, we was never exactly what you would call friends. More just classmates, we ran in different social groups."');
            scene.text('He nods a bit. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
            scene.text('You nod your head yes. "Yeah I know her, she is one of my best friends, why?" You ask him.');
            scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
            scene.text('You smile to him. "Yes she is into any person she finds attractive, she doesn\'t care about stuff like that and she likes messing with people and making guys really work for it. If she wasn\'t interested at all she would have shut you down."');
            scene.text('He grins even bigger and then looks over at Anushka again. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
          }
        }
        return;
        scene.actions([
          { label: 'Ignore them and go on your way', goto: ['uni_lessons', 'short_break'] },
          { label: 'Follow them', goto: ['uni_lessons_electives_african_studies1', 'nush_haruna_africa101'] },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkHaruna(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A245', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A245'] <= 20) {
      scene.text('You sit next to Haruna, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Haruna and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      if ((Math.floor(Math.random() * 5) + 0) > 0) {
        scene.text('You sit next to Haruna and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        scene.text('You sit next to Haruna and spend most of the class quietly talking with him. But you can\'t help but notice, that even though he seems happy to talk to you, he spends a lot of time watching and checking out Anushka.');
        if (((s as any).DjibrilQW ?? 0)?.['sveta_nush'] === 1) {
          scene.text('The two of you talk till the end of class, as soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
        } else {
          scene.text('Towards the end of class he turns to you and asks. "Do you know her?" He says indicating Anushka.');
          if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
            scene.text('You nod your head yes. "Yeah I know her, we went to school together back in Pavlovsk, why?" You ask him.');
            scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
            scene.text('You shrug to him. "Honestly I have no idea, we don\'t really get along. I know she had a bit of a reputation as a slut back then..."');
            scene.text('He looks a little disappointed but nods slightly in thanks. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
          } else {
            scene.text('You nod your head yes. "Yeah I know her, we went to school together back in Pavlovsk, why?" You ask him.');
            scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
            scene.text('You shrug a bit. "Honestly I don\'t know, we was never exactly what you would call friends. More just classmates, we ran in different social groups."');
            scene.text('He nods a bit. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
            scene.text('You nod your head yes. "Yeah I know her, she is one of my best friends, why?" You ask him.');
            scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
            scene.text('You smile to him. "Yes she is into any person she finds attractive, she doesn\'t care about stuff like that and she likes messing with people and making guys really work for it. If she wasn\'t interested at all she would have shut you down."');
            scene.text('He grins even bigger and then looks over at Anushka again. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
          }
        }
        return;
        scene.actions([
          { label: 'Ignore them and go on your way', goto: ['uni_lessons', 'short_break'] },
          { label: 'Follow them', goto: ['uni_lessons_electives_african_studies1', 'nush_haruna_africa101'] },
        ]);
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A245'] <= 20) {
      scene.text('You sit next to Haruna and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Haruna and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      if ((Math.floor(Math.random() * 5) + 0) > 0) {
        scene.text('You sit next to Haruna and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        scene.text('You sit next to Haruna and spend most of the class quietly talking with him. But you can\'t help but notice, that even though he seems happy to talk to you, he spends a lot of time watching and checking out Anushka.');
        if (((s as any).DjibrilQW ?? 0)?.['sveta_nush'] === 1) {
          scene.text('The two of you talk till the end of class, as soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
        } else {
          scene.text('Towards the end of class he turns to you and asks. "Do you know her?" He says indicating Anushka.');
          if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
            scene.text('You nod your head yes. "Yeah I know her, we went to school together back in Pavlovsk, why?" You ask him.');
            scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
            scene.text('You shrug to him. "Honestly I have no idea, we don\'t really get along. I know she had a bit of a reputation as a slut back then..."');
            scene.text('He looks a little disappointed but nods slightly in thanks. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
          } else {
            scene.text('You nod your head yes. "Yeah I know her, we went to school together back in Pavlovsk, why?" You ask him.');
            scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
            scene.text('You shrug a bit. "Honestly I don\'t know, we was never exactly what you would call friends. More just classmates, we ran in different social groups."');
            scene.text('He nods a bit. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
            scene.text('You nod your head yes. "Yeah I know her, she is one of my best friends, why?" You ask him.');
            scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
            scene.text('You smile to him. "Yes she is into any person she finds attractive, she doesn\'t care about stuff like that and she likes messing with people and making guys really work for it. If she wasn\'t interested at all she would have shut you down."');
            scene.text('He grins even bigger and then looks over at Anushka again. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
          }
        }
        return;
        scene.actions([
          { label: 'Ignore them and go on your way', goto: ['uni_lessons', 'short_break'] },
          { label: 'Follow them', goto: ['uni_lessons_electives_african_studies1', 'nush_haruna_africa101'] },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkPetka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A6'] <= 20) {
      scene.text('You sit next to Petka, who frowns as you sit down, a few minutes later of you trying to talk to him. He gets up and moves a little ways away from you.');
    } else {
      scene.text('You sit next to Petka and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      if (((s as any).petkaQW ?? 0)?.['african_studies_ask']) {
        scene.text('You sit next to Petka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud. You can\'t help but glance at Kendra as you talk to Petka, knowing why he is taking this class.');
      } else {
        (s as any).petkaQW['african_studies_ask'] = 1;
        scene.text('You sit next to Petka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud. You have to admit you are a bit surprised to see him taking this class, back in Pavlovsk he never seemed the type. Perhaps you should just ask him.');
        scene.actions([
          { label: 'Ask him why.', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You lean in close to him. "I just have to ask, why are you taking this class? I never pegged you as the type to be interested in this." You can\'t help but notice when you say pegged he blushes bright red, consider your relationship with him back in Pavlovsk you can\'t help but smile at your unintentional play on words.');
    if (((s as any).meet_kendra ?? 0) === 1) {
      scene.text('He motions his heads towards Kendra. "Kendra told me too, she said it would be good for me to learn... learn my place and how we owe them for what happened in the past." You glance over at Kendra and you are not surprised she likes this class and like agree\'s with everything Professor Bryant says. Well at least you now have your answer as to why he took this class. You talk a bit more with him until the end of class.');
    } else {
      scene.text('He motions his heads towards a pretty ebony girl sitting not to far way. "Kendra told me too, she said it would be good for me to learn... learn my place and how we owe them for what happened in the past." You glance over at Kendra, now you are a bit curious how they meet and why she wanted him to take the class, obviously she agree\'s with Professor Bryant, but maybe you should get to know her yourself. You talk a bit more with him until the end of class.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
    ]);
  } },
        ]);
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A6'] <= 20) {
      scene.text('You sit next to Petka and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Petka and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Petka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkPetka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A6'] <= 20) {
      scene.text('You sit next to Petka, who frowns as you sit down, a few minutes later of you trying to talk to him. He gets up and moves a little ways away from you.');
    } else {
      scene.text('You sit next to Petka and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      if (((s as any).petkaQW ?? 0)?.['african_studies_ask']) {
        scene.text('You sit next to Petka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud. You can\'t help but glance at Kendra as you talk to Petka, knowing why he is taking this class.');
      } else {
        (s as any).petkaQW['african_studies_ask'] = 1;
        scene.text('You sit next to Petka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud. You have to admit you are a bit surprised to see him taking this class, back in Pavlovsk he never seemed the type. Perhaps you should just ask him.');
        scene.actions([
          { label: 'Ask him why.', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You lean in close to him. "I just have to ask, why are you taking this class? I never pegged you as the type to be interested in this." You can\'t help but notice when you say pegged he blushes bright red, consider your relationship with him back in Pavlovsk you can\'t help but smile at your unintentional play on words.');
    if (((s as any).meet_kendra ?? 0) === 1) {
      scene.text('He motions his heads towards Kendra. "Kendra told me too, she said it would be good for me to learn... learn my place and how we owe them for what happened in the past." You glance over at Kendra and you are not surprised she likes this class and like agree\'s with everything Professor Bryant says. Well at least you now have your answer as to why he took this class. You talk a bit more with him until the end of class.');
    } else {
      scene.text('He motions his heads towards a pretty ebony girl sitting not to far way. "Kendra told me too, she said it would be good for me to learn... learn my place and how we owe them for what happened in the past." You glance over at Kendra, now you are a bit curious how they meet and why she wanted him to take the class, obviously she agree\'s with Professor Bryant, but maybe you should get to know her yourself. You talk a bit more with him until the end of class.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
    ]);
  } },
        ]);
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A6'] <= 20) {
      scene.text('You sit next to Petka and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      scene.text('You sit next to Petka and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      scene.text('You sit next to Petka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101Events(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  (s as any).uni_event_hour = 1;
  qspCall(s, 'stat', '');
  (s as any).temp = Math.floor(Math.random() * 24) + 0;
  if (((s as any).temp ?? 0) < 2) {
    scene.img('images/locations/city/island/university/classroom/electives/african_studies/naked_ebonyg.jpg');
    scene.text('As class ends, all the students start leaving, but an African girl and a Russian boy stay behind.');
    scene.text('Curious, you hang out next to one of the doors to see what they do.');
    scene.text('The girl points for him to sit before she starts to strip. Once she\'s naked, she turns around and bends over. "Why don\'t you start some reparation and lick my ebony pussy?"');
    scene.text('The boy starts to move forward to do just that when the office door suddenly opens and Professor Bryant walks out.');
    scene.text('He stops and smiles. "Why don\'t you go and work on your... <i>homework</i> in your dorm room?"');
    scene.text('The students laugh and the girl gets dressed as you leave.');
    qspCall(s, 'arousal', 'erotic', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Wait for Anushka', goto: ['uni_lessons_electives_african_studies1', 'africa_nush'] },
    ]);
  } else {
    scene.img('images/locations/city/island/university/classroom/electives/african_studies/pre_gangbang.jpg');
    scene.text('As class ends, all the students start leaving, but a white Russian girl stays behind with about eight African boys.');
    scene.text('You stop at the door to see what they\'re doing as she gets on Professor Bryant\'s desk as the boys surround her.');
    scene.text('You can overhear snippets of what they say; it sounds like she\'s about to be gangbanged... by all of them.');
    scene.text('Just as they start to take her clothes off, the office door opens and Professor Bryant walks out.');
    scene.text('He stops and smiles. "It is good to see a civic minded white girl ready and willing to pay some of her reparations, but why don\'t you boys take her to your dorm room instead, please."');
    scene.text('The boys laugh as they pull her off the desk and drag her out of one of the other doors.');
    if (((s as any).temp ?? 0) < 6) {
      scene.img('images/locations/city/island/university/classroom/electives/african_studies/team_bbc.jpg');
      scene.text('During the short break in the middle of class, the students break up into small groups to talk.');
      scene.text('You notice one white girl with a Team Black shirt on hanging out with three African boys. One takes out his phone while the other two kneel on each side of the girl to have their picture taken.');
      scene.text('The boys take turns having their pictures taken with her and she seems to love the attention, but before more can happen Professor Bryant comes back into the room and everyone returns to their seats as he finishes his lecture.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
        { label: 'Wait for Anushka', goto: ['uni_lessons_electives_african_studies1', 'africa_nush'] },
      ]);
    } else {
      scene.img('images/locations/city/island/university/classroom/electives/african_studies/want_bbc.jpg');
      scene.text('During class, you notice a white girl keeps looking in your direction. At least you think she is; you quickly realize she\'s actually looking at an African boy sitting on the other side of you.');
      scene.text('About half way through class, she holds up her notebook and you can easily read what she wrote: "I want big black cock!"');
      scene.text('The boy grins and grabs his crotch. "Come with me after class."');
      scene.text('She grins and nods before they both mostly go back to listening to the lesson, though occasionally sharing flirty looks.');
      scene.text('Once class ends, they head off together and you assume she\'ll get exactly what she wanted.');
      if (((s as any).temp ?? 0) === 8) {
        scene.img('images/locations/city/island/university/classroom/electives/computer/thong_exposed.jpg');
        scene.text('During the short break in the middle of class, many of the students gather around one of the desks.');
        scene.text('One of the students seems to have found something of interest, but you never find out what as a girl in front of you pulls up the back of her skirt to show off her thong clad ass and everyone is soon more interested in her antics.');
        scene.text('Professor Bryant then suddenly speaks up. "Do you enjoy showing your white ass off to everyone?"');
        scene.text('Everyone turns to see him standing in the doorway looking at the girl. "Come see me after class."');
        scene.text('The girl quickly pulls her skirt back down and blushes as everyone retakes their seats and Professor Bryant finishes his lecture for the day.');
        scene.text('Once the lecture is over, everyone starts to leave, but Professor Bryant motions for the girl to follow him to his office, which she does.');
        qspCall(s, 'arousal', 'erotic', 1);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
          { label: 'Wait for Anushka', goto: ['uni_lessons_electives_african_studies1', 'africa_nush'] },
          { label: 'Peek in the office', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/electives/african_studies/wgirl_afterclass_punish.jpg');
    scene.text('You sneak up to the office door and open it just a little so you can peek inside.');
    scene.text('You see Professor Bryant sitting on a couch with the girl laying across his lap, her skirt pulled up to expose her ass. He starts spanking her hard, the smacking sound echoing loudly as she jerks and cries out.');
    scene.text('After a few minutes of this, he stops and starts rubbing her ass. "Next time you feel the need to show off your ass in my class, come see me instead."');
    scene.text('He then easily lifts her off his lap and stands her up. Not wanting to get caught, you quickly leave the classroom.');
    qspCall(s, 'arousal', 'erotic', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
        ]);
      } else {
        scene.img('images/locations/city/island/university/classroom/electives/computer/thong_exposed.jpg');
        scene.text('During the short break in the middle of class, many of the students gather around one of the desks.');
        scene.text('One of the students seems to have found something of interest, but you never find out what as a girl in front of you pulls up the back of her skirt to show off her thong clad ass and everyone is soon more interested in her antics.');
        scene.text('Professor Bryant then suddenly speaks up. "Do you enjoy showing your white ass off to everyone?"');
        scene.text('Everyone turns to see him standing in the doorway looking at the girl. "Come see me after class."');
        scene.text('The girl quickly pulls her skirt back down and blushes as everyone retakes their seats and Professor Bryant finishes his lecture for the day.');
        scene.text('Once the lecture is over, everyone starts to leave, but Professor Bryant motions for the girl to follow him to his office, which she does.');
        qspCall(s, 'arousal', 'erotic', 1);
        qspCall(s, 'arousal', 'end');
        if (((s as any).temp ?? 0) === 10) {
          scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl1.jpg');
          if (((s as any).anushkaQW ?? 0)?.['djibril_sex'] >= 1) {
            scene.text('The class is pretty uneventful for the most part, but you notice Djibril sat next to Anushka. He\'s flirting with her, but she\'s really making him work for her attention, which you find a little amusing.');
            scene.text('As Professor Bryant finishes his lecture, he informs the class that he won\'t be able to stay after to help anyone and if someone needs to ask him something, then they should come and see him in his office later or wait for the next class.');
            scene.text('With class finished, everyone gets up and heads for the exit. You glance back and see that Djibril has stopped Anushka and they\'re talking by one of the desks.');
          } else {
            scene.text('The class is pretty uneventful for the most part, but you notice Djibril sat next to Anushka. He\'s flirting with her, but she\'s playing it a bit coy and really making him work for her attention, which you find a little amusing.');
            scene.text('With class finished, everyone gets up and heads for the exit. You glance back and see that Djibril has stopped Anushka and they\'re talking by one of the desks.');
            scene.text('The class is pretty uneventful for the most part, but you notice a young black man has sat next to Anushka and they talk off and on for most of the class. He\'s clearly flirting with her, but she\'s being pretty aloof and really making him work for her attention, which you find a little amusing.');
            scene.text('With class finished, everyone gets up and heads for the exit. You glance back and see that the man has stopped Anushka and they\'re talking by one of the desks.');
          }
          scene.actions([
            { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
            { label: 'Wait for Anushka', goto: ['uni_lessons_electives_african_studies1', 'anushka_djibril'] },
          ]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_african_studies2', 'event_kendra'] }]);
          scene.img('images/locations/city/island/university/classroom/electives/african_studies/classroom.jpg');
          scene.text('As you sit listening to the lesson, you look around hoping something interesting will happen, but nothing does.');
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
            { label: 'Wait for Anushka', goto: ['uni_lessons_electives_african_studies1', 'africa_nush'] },
          ]);
        }
        scene.actions([
          { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
          { label: 'Wait for Anushka', goto: ['uni_lessons_electives_african_studies1', 'africa_nush'] },
          { label: 'Peek in the office', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/electives/african_studies/wgirl_afterclass1.jpg');
    scene.text('You sneak up to the office door and open it just a little so you can peek inside. You see Professor Bryant sitting at his desk while the girl is naked from the waist up with her skirt pulled up.');
    scene.text('Professor Bryant is cupping her perky breasts in his hands when his head suddenly turns towards you. "Come in and watch if you want. No need to spy."');
    scene.text('The girl turns and looks at you as well, but she blushes instead.');
    qspCall(s, 'arousal', 'erotic', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Stay and watch', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/electives/african_studies/wgirl_afterclass1.jpg');
    scene.text('You step into the office and close the door. Professor Bryant seems to ignore that you\'re here, though the girl keeps glancing in your direction.');
    scene.text('He lets go of her and sits back in his chair before he waves her over to him. "Are you ready to learn your place and start your reparations?"');
    scene.text('She nods and he motions down in front of him. "Then take your rightful place and kneel in front of a black man."');
    scene.text('She kneels in front of him as he unbuttons his pants and pulls out his fairly large flaccid black dick. She seems to know what she\'s supposed to do and starts sucking it at once.');
    scene.text('He smiles as he leans back and closes his eyes, his dick getting harder in her mouth as she sucks it.');
    scene.text('She keeps watching you as she sucks his dick until he reaches up to place a hand on top of her head and forces her to deepthroat him, holding her head in place until he groans loudly and she chokes a little.');
    scene.text('"That\'s it. Swallow all of my seed." He lets go of her and she leans back until his dick pops out of her mouth.');
    scene.text('He turns to you and smiles. "This is this how all white women should be paying their reparations. You may go now."');
    scene.text('The girl starts to get up as he waves for you to leave. When he notices the girl getting up, he turns his attention back to her.');
    scene.text('"Not you. You still need to clean my dick."');
    scene.text('She just nods and and starts sucking his still hard dick as you turn and walk out, closing the door behind you.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
        { label: 'Wait for Anushka', goto: ['uni_lessons_electives_african_studies1', 'africa_nush'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Wait for Anushka', goto: ['uni_lessons_electives_african_studies1', 'africa_nush'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'african_studies_101':
      enterAfricanStudies_101(s, scene);
      break;
    case 'african_studies_101_listen':
      enterAfricanStudies_101Listen(s, scene);
      break;
    case 'african_studies_101_no_attention':
      enterAfricanStudies_101NoAttention(s, scene);
      break;
    case 'african_studies_101_talk':
      enterAfricanStudies_101Talk(s, scene);
      break;
    case 'African Studies 102':
      enterAfricanStudies102(s, scene);
      break;
    case 'african_studies_102_listen':
      enterAfricanStudies_102Listen(s, scene);
      break;
    case 'african_studies_102_no_attention':
      enterAfricanStudies_102NoAttention(s, scene);
      break;
    case 'african_studies_102_talk':
      enterAfricanStudies_102Talk(s, scene);
      break;
    case 'african_studies_101_talk_kendra_1':
      enterAfricanStudies_101TalkKendra_1(s, scene);
      break;
    case 'african_studies_102_talk_kendra_1':
      enterAfricanStudies_102TalkKendra_1(s, scene);
      break;
    case 'african_studies_101_talk_kendra_2':
      enterAfricanStudies_101TalkKendra_2(s, scene);
      break;
    case 'african_studies_102_talk_kendra_2':
      enterAfricanStudies_102TalkKendra_2(s, scene);
      break;
    case 'african_studies_101_talk_katja':
      enterAfricanStudies_101TalkKatja(s, scene);
      break;
    case 'african_studies_102_talk_katja':
      enterAfricanStudies_102TalkKatja(s, scene);
      break;
    case 'african_studies_101_talk_anushka':
      enterAfricanStudies_101TalkAnushka(s, scene);
      break;
    case 'african_studies_102_talk_anushka':
      enterAfricanStudies_102TalkAnushka(s, scene);
      break;
    case 'african_studies_101_talk_djibril':
      enterAfricanStudies_101TalkDjibril(s, scene);
      break;
    case 'african_studies_102_talk_djibril':
      enterAfricanStudies_102TalkDjibril(s, scene);
      break;
    case 'african_studies_101_talk_lebogang':
      enterAfricanStudies_101TalkLebogang(s, scene);
      break;
    case 'african_studies_102_talk_lebogang':
      enterAfricanStudies_102TalkLebogang(s, scene);
      break;
    case 'african_studies_101_talk_ermias_1':
      enterAfricanStudies_101TalkErmias_1(s, scene);
      break;
    case 'african_studies_101_talk_ermias_2':
      enterAfricanStudies_101TalkErmias_2(s, scene);
      break;
    case 'african_studies_102_talk_ermias_1':
      enterAfricanStudies_102TalkErmias_1(s, scene);
      break;
    case 'african_studies_102_talk_ermias_2':
      enterAfricanStudies_102TalkErmias_2(s, scene);
      break;
    case 'african_studies_101_talk_farai':
      enterAfricanStudies_101TalkFarai(s, scene);
      break;
    case 'african_studies_102_talk_farai':
      enterAfricanStudies_102TalkFarai(s, scene);
      break;
    case 'african_studies_101_talk_arendse':
      enterAfricanStudies_101TalkArendse(s, scene);
      break;
    case 'african_studies_102_talk_arendse':
      enterAfricanStudies_102TalkArendse(s, scene);
      break;
    case 'african_studies_101_talk_haruna':
      enterAfricanStudies_101TalkHaruna(s, scene);
      break;
    case 'african_studies_102_talk_haruna':
      enterAfricanStudies_102TalkHaruna(s, scene);
      break;
    case 'african_studies_101_talk_petka':
      enterAfricanStudies_101TalkPetka(s, scene);
      break;
    case 'african_studies_102_talk_petka':
      enterAfricanStudies_102TalkPetka(s, scene);
      break;
    case 'african_studies_101_events':
      enterAfricanStudies_101Events(s, scene);
      break;
    default:
      enterAfricanStudies_101(s, scene);
      break;
  }
}

export const uni_lessons_electives_african_studies1: LocationDef = {
  name: 'uni_lessons_electives_african_studies1',
  title: 'You walk into the classroom and take a seat. You see a lot o',
  region: 'other',
  description: ['You walk into the classroom and take a seat. You see a lot of the African boys stop to talk to some of the white girls, likely to discuss some of Professor Bryant\'s ideas about "personal reparations."'],
  enter: enter,
};
