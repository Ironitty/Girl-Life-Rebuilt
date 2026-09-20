import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAfricanStudies_101(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/electives/african_studies/classroom.jpg');
  if (((s as any).university ?? 0)?.['first_visit_african_studies_101']) {
    scene.text('You walk into the classroom and take a seat. You see a lot of the African boys stop to talk to some of the white girls, likely to discuss some of Professor Bryant\'s ideas about "personal reparations."');
    scene.text('The rest of your classmates walk in one-by-one before Professor Bryant enters the classroom and closes the door.');
    scene.text('He turns to the class and begins today\'s lecture, once more a discussion of culture and history heavily influenced by his belief that white people should be making social and personal reparations.');
  } else {
    ((s as any).university = (s as any).university ?? {})['first_visit_african_studies_101'] = 1;
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
    if (((s as any).trait_vars ?? 0)?.['academic'] >= 3) {
      (s as any).will_cost = 0;
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen attentively to Professor Bryant', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Bryant', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    qspGoto(st, 'uni_lessons_electives_african_studies1', 'african_studies_101_listen');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t pay attention in class', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_no_attention'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_talk'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101Listen(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 0));
  } else {
    qspCall(s, 'exp_gain', 'humint', (Math.floor(Math.random() * 2) + 0));
  }
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/attentive${(Math.floor(Math.random() * 4) + 1)}.jpg`);
  scene.text('You listen attentively to Professor Bryant for the duration of the class. He manages to make today\'s lesson interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
  scene.text('However, his biases towards a need for social and personal reparations come through as always. While he never outright says it, you get the feeling he thinks white girls should be offering their bodies to black African men as part of these reparations.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 1), 'no_bonus');
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
  // TODO-QSP: end
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
    ((st as any).ErmiasQW = (st as any).ErmiasQW ?? {})['meet'] = 1;
    qspGoto(st, 'uni_lessons_electives_african_studies1', 'african_studies_101_talk_ermias_1');
  } },
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
  // TODO-QSP: end
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
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/electives/african_studies/classroom.jpg');
  if (((s as any).university ?? 0)?.['first_visit_african_studies_102'] === 0) {
    scene.text('You walk into the classroom and take a seat. You see a lot of the African boys stop to talk to some of the white girls, likely to discuss some of Professor Bryant\'s ideas about "personal reparations."');
    scene.text('The rest of your classmates walk in one-by-one before Professor Bryant enters the classroom and closes the door.');
    scene.text('He turns to the class and begins today\'s lecture, once more a discussion of culture and history heavily influenced by his belief that white people should be making social and personal reparations.');
  } else {
    ((s as any).university = (s as any).university ?? {})['first_visit_african_studies_102'] = 1;
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
    if (((s as any).trait_vars ?? 0)?.['academic'] >= 3) {
      (s as any).will_cost = 0;
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen attentively to Professor Bryant', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Bryant', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    qspGoto(st, 'uni_lessons_electives_african_studies1', 'african_studies_102_listen');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t pay attention in class', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_no_attention'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102_talk'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102Listen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'compskl', (Math.floor(Math.random() * 2) + 0));
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/attentive${(Math.floor(Math.random() * 4) + 1)}.jpg`);
  scene.text('You listen attentively to Professor Bryant for the duration of the class. He manages to make today\'s lesson interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
  scene.text('However, his biases towards a need for social and personal reparations come through as always. While he never outright says it, you get the feeling he thinks white girls should be offering their bodies to black African men as part of these reparations.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 1), 'no_bonus');
    qspCall(st, 'stat', '');
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
  // TODO-QSP: end
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
    ((st as any).ErmiasQW = (st as any).ErmiasQW ?? {})['meet'] = 1;
    qspGoto(st, 'uni_lessons_electives_african_studies1', 'african_studies_102_talk_ermias_1');
  } },
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
  // TODO-QSP: end
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
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/ebony_girl_talk.jpg');
  // TODO-QSP: dynamic text: There''s something about this ebony girl that intrigues you, so you decide to si...
  scene.text(`There's something about this ebony girl that intrigues you, so you decide to sit next to her. "Hi, I'm ${((s as any).pcs_nickname ?? '')}."`);
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkKendra_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/ebony_girl_talk.jpg');
  // TODO-QSP: dynamic text: There''s something about this ebony girl that intrigues you, so you decide to si...
  scene.text(`There's something about this ebony girl that intrigues you, so you decide to sit next to her. "Hi, I'm ${((s as any).pcs_nickname ?? '')}."`);
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkKendra_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/ebony_girl_talk.jpg');
  if (((s as any).kendraQW ?? 0)?.['sub'] < 1) {
    scene.text('You\'re about to sit next to Kendra when she glares at you. "I don\'t think so, Princess. As Professor Bryant says, your kind owes us, so until you realize that and change your mind about being my slave, you can go and sit somewhere else."');
    scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
  } else {
    if (((s as any).kendraQW ?? 0)?.['sub'] < 10) {
      if (((s as any).npc_rel ?? 0)?.['A82'] <= 20) {
        scene.text('You start to sit next to Kendra, who glares at you. "We\'re not friends. You\'re nothing more than my white slave bitch to use and abuse as I see fit. You don\'t come over to me in public, <i>ever</i>. Go sit somewhere else."');
        scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A82'] < 60) {
          scene.text('You sit next to Kendra and try to have a conversation with her, but anytime you try and get a word in, she shushes you and tells you to pay attention and learn your place in the new world.');
          scene.text('She seems to be eating up what Professor Bryant says, completely agreeing with and believing every word.');
        } else {
          scene.text('You decide to sit next to Kendra. You talk to her and she even lets you get a few words in, but she mostly treats you like a pet or someone simple, often making condescending comments towards you.');
          scene.text('Anytime you try and get a word in, she shushes you and tells you to pay attention and learn your place in the new world. She seems to be eating up what Professor Bryant says, completely agreeing with and believing every word.');
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A82'] <= 20) {
        scene.text('You\'re about to sit next to Kendra when she glares at you. "We\'re not friends. You\'re nothing more than my white slave bitch to use and abuse as I see fit. You don\'t come over to me in public, <i>ever</i>. Go sit somewhere else."');
        scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A82'] < 60) {
          scene.text('You sit next to Kendra and try to have a conversation with her, but anytime you try and get a word in, she shushes you. She seems to be eating up what Professor Bryant says, completely agreeing with and believing it.');
        } else {
          scene.text('You decide to sit next to Kendra. You talk to her and she even lets you get a few words in, but she mostly treats you like a pet or someone simple, often making condescending comments towards you.');
          scene.text('Anytime you try and get a word in, she shushes you and tells you to pay attention and learn your place in the new world. She seems to be eating up what Professor Bryant says, completely agreeing with and believing every word.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkKendra_2(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfricanStudies_101TalkKendra_2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkKatja(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
    scene.text('text for Sveta trying to talk to the npc hates her');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A14'] < 60) {
      scene.text('text if they just know each other and have no strong feelings one way or the other');
    } else {
      if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
        scene.text('text for them being good friends. feel free to change the rel requirement up or down, 60 is the default.');
      } else {
        scene.text('optional text if the npc judges Sveta on high slut fame, feel free to change the numbers');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkKatja(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
    scene.text('text for Sveta trying to talk to the npc hates her');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A14'] < 60) {
      scene.text('text if they just know each other and have no strong feelings one way or the other');
    } else {
      if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
        scene.text('text for them being good friends. feel free to change the rel requirement up or down, 60 is the default.');
      } else {
        scene.text('optional text if the npc judges Sveta on high slut fame, feel free to change the numbers');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkAnushka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
    scene.text('You sit next to Anushka, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('You sit next to Anushka and the two of you talk, but she seems more focused on the class than you. She seems rather amused by Professor Bryant\'s propaganda lectures about reparations.');
    } else {
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
        scene.actions([
{ label: 'Spend the rest of class with her', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('The two of you sit and chat a bit for the rest of class, you can\'t help but notice Djirbil keeps glancing over and checking the two of you out. Anushka seems to have noticed as well. "Looks like someone is thinking about some sexual reparations." She says as she indicates Djibril who is currently looking at the two of you, he grins when you both look his direction. This goes on for the rest of class.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies2', 'african_studies_djibril_nush'] },
    ]);
  } },
]);
        return;
      } else {
        if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
          scene.text('You sit next to Anushka, who smiles at you as you sit down. "What up?"');
          scene.text('The two of you are soon talking a fair bit, but she seems fairly focused on the class as well.');
          scene.text('While she does seems interested in parts of the history and culture. she\'s rather amused by Professor Bryant\'s propaganda lectures about reparations.');
        } else {
          scene.text('You sit next to Anushka, who she smiles at you as you take a seat. "What up, slut?"');
          scene.text('You know she\'s just being her normal playful self as the two of talk, but she seems fairly focused on the class as well.');
          scene.text('While she does seems interested in parts of the history and culture, she\'s rather amused by Professor Bryant\'s propaganda lectures about reparations.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkAnushka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
    scene.text('You sit next to Anushka, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('You sit next to Anushka and the two of you talk, but she seems more focused on the class than you. She seems rather amused by Professor Bryant\'s propaganda lectures about reparations.');
    } else {
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
        scene.actions([
{ label: 'Spend the rest of class with her', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('The two of you sit and chat a bit for the rest of class, you can\'t help but notice Djirbil keeps glancing over and checking the two of you out. Anushka seems to have noticed as well. "Looks like someone is thinking about some sexual reparations." She says as she indicates Djibril who is currently looking at the two of you, he grins when you both look his direction. This goes on for the rest of class.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies2', 'african_studies_djibril_nush'] },
    ]);
  } },
]);
        return;
      } else {
        if (((s as any).fame ?? 0)?.['city_slut'] < 300  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
          scene.text('You sit next to Anushka, who smiles at you as you sit down. "What up?"');
          scene.text('The two of you are soon talking a fair bit, but she seems fairly focused on the class as well.');
          scene.text('While she does seems interested in parts of the history and culture. she\'s rather amused by Professor Bryant\'s propaganda lectures about reparations.');
        } else {
          scene.text('You sit next to Anushka, who she smiles at you as you take a seat. "What up, slut?"');
          scene.text('You know she\'s just being her normal playful self as the two of talk, but she seems fairly focused on the class as well.');
          scene.text('While she does seems interested in parts of the history and culture, she\'s rather amused by Professor Bryant\'s propaganda lectures about reparations.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkDjibril(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkDjibril(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkLebogang(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A242', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A242'] <= 20) {
      scene.text('You sit next to Lebogang, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A242'] < 60) {
        scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Lebogang and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A242'] <= 20) {
      scene.text('You sit next to Lebogang and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A242'] < 60) {
        scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Lebogang and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkLebogang(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A242', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A242'] <= 20) {
      scene.text('You sit next to Lebogang, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A242'] < 60) {
        scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Lebogang and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A242'] <= 20) {
      scene.text('You sit next to Lebogang and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A242'] < 60) {
        scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Lebogang and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkErmias_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('One of the black students catches your eye. He\'s quite attractive, so you decide to sit with him.');
  if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 1) {
    scene.text('As you sit down, you suddenly recognize him as the black guy you saw having sex with Albina.');
  }
  scene.text('He looks up at you and smiles. "Hello there. I am Ermias Okeke. What is your name?"');
  // TODO-QSP: dynamic text: You return his smile. "I''m <<$pcs_firstname>> <<$pcs_lastname>>, but my friends...
  scene.text(`You return his smile. "I'm ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}, but my friends just call me ${((s as any).pcs_nickname ?? '')}."`);
  // TODO-QSP: dynamic text: "It is nice to meet you, <<$pcs_nickname>>."
  scene.text(`"It is nice to meet you, ${((s as any).pcs_nickname ?? '')}."`);
  scene.text('The two of you start chatting and you learn that he and some of his friends came from Africa to study here in Russia. He himself is studying law.');
  scene.text('You compliment him on how good his Russian is before the lecture starts and a fellow student asks you to be quiet.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkErmias_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).ErmiasQW ?? 0)?.['invite'] === 0) {
    if (((s as any).pcs_hotcat ?? 0) < 7) {
      if (((s as any).npc_rel ?? 0)?.['A243'] >= 60) {
        scene.text('You sit next to Ermias and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A243'] <= 20) {
          scene.text('You sit next to Ermias, but he doesn\'t have much to say to you and sometimes pretends not to understand what you\'re saying.');
        } else {
          scene.text('You sit next to Ermias. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
        }
      }
    } else {
      ((s as any).ErmiasQW = (s as any).ErmiasQW ?? {})['invite'] = 1;
      scene.text('You sit next to Ermias and spend most of the class quietly talking with him, although he seems far more interested in flirting with you than chatting.');
      if (((s as any).pcs_hotcat ?? 0) < 8) {
        // TODO-QSP: dynamic text: "You are a very cute girl, <<$pcs_nickname>>," he smiles.
        scene.text(`"You are a very cute girl, ${((s as any).pcs_nickname ?? '')}," he smiles.`);
      } else {
        if (((s as any).pcs_hotcat ?? 0) < 10) {
          // TODO-QSP: dynamic text: "You are a very pretty girl, <<$pcs_nickname>>," he smiles. "One of the pretties...
          scene.text(`"You are a very pretty girl, ${((s as any).pcs_nickname ?? '')}," he smiles. "One of the prettiest girls I have ever seen."`);
        } else {
          scene.text('"Has anyone ever told you that you are the most beautiful looking girl in the world?" he smiles. "I have never seen a girl as pretty as you."');
        }
      }
      scene.text('You smile back. "Thanks. You\'re not too bad looking yourself..."');
      scene.text('He grins. "Maybe you want come and hang out in my dorm sometime?"');
      scene.text('The way he says it leaves no doubt in your mind what he actually means.');
      scene.text('"Maybe," you reply.');
      scene.text('"I live on the eighth floor of the dorm with one of my friends, but I am home alone most evenings. I look forward to seeing you."');
      scene.text('He spends some time flirting with you before the lecture starts.');
    }
  } else {
    if (((s as any).ErmiasQW ?? 0)?.['first_visit'] === 0) {
      // TODO-QSP: dynamic text: "I hope you will come and visit me in my dorm soon, <<$pcs_nickname>>," he says ...
      scene.text(`"I hope you will come and visit me in my dorm soon, ${((s as any).pcs_nickname ?? '')}," he says as you sit next to him. "I would love to hang out with a pretty girl like you."`);
      scene.text('He spends some time flirting with you before the lecture starts.');
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A243'] === 0) {
        scene.text('Ermias grins as you sit next to him. "I hope you visit again soon so we can finish what we started."');
        scene.text('He spends some time flirting with you before the lecture starts.');
      } else {
        scene.text('Ermias grins as you sit next to him. "Hello bunny. It is nice to see you again."');
        scene.text('He spends some time flirting with you and saying how much fun he had with you. "You should visit me again soon so you can... pay me some more reparations..."');
        scene.text('You smile before Professor Bryant enters the class and the lecture starts.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkErmias_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('One of the black students catches your eye. He\'s quite attractive, so you decide to sit with him.');
  if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 1) {
    scene.text('As you sit down, you suddenly recognize him as the black guy you saw having sex with Albina.');
  }
  scene.text('He looks up at you and smiles. "Hello there. I am Ermias Okeke. What is your name?"');
  // TODO-QSP: dynamic text: You return his smile. "I''m <<$pcs_firstname>> <<$pcs_lastname>>, but my friends...
  scene.text(`You return his smile. "I'm ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}, but my friends just call me ${((s as any).pcs_nickname ?? '')}."`);
  // TODO-QSP: dynamic text: "It is nice to meet you, <<$pcs_nickname>>."
  scene.text(`"It is nice to meet you, ${((s as any).pcs_nickname ?? '')}."`);
  scene.text('The two of you start chatting and you learn that he and some of his friends came from Africa to study here in Russia. He himself is studying law.');
  scene.text('You compliment him on how good his Russian is before the lecture starts and a fellow student asks you to be quiet.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkErmias_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).ErmiasQW ?? 0)?.['invite'] === 0) {
    if (((s as any).pcs_hotcat ?? 0) < 7) {
      if (((s as any).npc_rel ?? 0)?.['A243'] >= 60) {
        scene.text('You sit next to Ermias and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A243'] <= 20) {
          scene.text('You sit next to Ermias, but he doesn\'t have much to say to you and sometimes pretends not to understand what you\'re saying.');
        } else {
          scene.text('You sit next to Ermias. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
        }
      }
    } else {
      // TODO-QSP: ! pcs_hotcat >= 7
      ((s as any).ErmiasQW = (s as any).ErmiasQW ?? {})['invite'] = 1;
      scene.text('You sit next to Ermias and spend most of the class quietly talking with him, although he seems far more interested in flirting with you than chatting.');
      if (((s as any).pcs_hotcat ?? 0) < 8) {
        // TODO-QSP: dynamic text: "You are a very cute girl, <<$pcs_nickname>>," he smiles.
        scene.text(`"You are a very cute girl, ${((s as any).pcs_nickname ?? '')}," he smiles.`);
      } else {
        if (((s as any).pcs_hotcat ?? 0) < 10) {
          // TODO-QSP: dynamic text: "You are a very pretty girl, <<$pcs_nickname>>," he smiles. "One of the pretties...
          scene.text(`"You are a very pretty girl, ${((s as any).pcs_nickname ?? '')}," he smiles. "One of the prettiest girls I have ever seen."`);
        } else {
          scene.text('"Has anyone ever told you that you are the most beautiful looking girl in the world?" he smiles. "I have never seen a girl as pretty as you."');
        }
      }
      scene.text('You smile back. "Thanks. You\'re not too bad looking yourself..."');
      scene.text('He grins. "Maybe you want come and hang out in my dorm sometime?"');
      scene.text('The way he says it leaves no doubt in your mind what he actually means.');
      scene.text('"Maybe," you reply.');
      scene.text('"I live on the eighth floor of the dorm with one of my friends, but I am home alone most evenings. I look forward to seeing you."');
      scene.text('He spends some time flirting with you before the lecture starts.');
    }
  } else {
    if (((s as any).ErmiasQW ?? 0)?.['first_visit'] === 0) {
      // TODO-QSP: dynamic text: "I hope you will come and visit me in my dorm soon, <<$pcs_nickname>>," he says ...
      scene.text(`"I hope you will come and visit me in my dorm soon, ${((s as any).pcs_nickname ?? '')}," he says as you sit next to him. "I would love to hang out with a pretty girl like you."`);
      scene.text('He spends some time flirting with you before the lecture starts.');
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A243'] === 0) {
        scene.text('Ermias grins as you sit next to him. "I hope you visit again soon so we can finish what we started."');
        scene.text('He spends some time flirting with you before the lecture starts.');
      } else {
        scene.text('Ermias grins as you sit next to him. "Hello bunny. It is nice to see you again."');
        scene.text('He spends some time flirting with you and saying how much fun he had with you. "You should visit me again soon so you can... pay me some more reparations..."');
        scene.text('You smile before Professor Bryant enters the class and the lecture starts.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkFarai(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A244', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A244'] <= 20) {
      scene.text('You sit next to Farai, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A244'] < 60) {
        scene.text('You sit next to Farai and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Farai and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A244'] <= 20) {
      scene.text('You sit next to Farai and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A244'] < 60) {
        scene.text('You sit next to Farai and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Farai and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkFarai(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A244', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A244'] <= 20) {
      scene.text('You sit next to Farai, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A244'] < 60) {
        scene.text('You sit next to Farai and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Farai and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A244'] <= 20) {
      scene.text('You sit next to Farai and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A244'] < 60) {
        scene.text('You sit next to Farai and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Farai and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkArendse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A246', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A246'] <= 20) {
      scene.text('You sit next to Arendse, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A246'] < 60) {
        scene.text('You sit next to Arendse and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Arendse and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A246'] <= 20) {
      scene.text('You sit next to Arendse and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A246'] < 60) {
        scene.text('You sit next to Arendse and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Arendse and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkArendse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A246', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A246'] <= 20) {
      scene.text('You sit next to Arendse, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A246'] < 60) {
        scene.text('You sit next to Arendse and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Arendse and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A246'] <= 20) {
      scene.text('You sit next to Arendse and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A246'] < 60) {
        scene.text('You sit next to Arendse and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Arendse and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkHaruna(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A245', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A245'] <= 20) {
      scene.text('You sit next to Haruna, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A245'] < 60) {
        scene.text('You sit next to Haruna and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
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
              if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
                scene.text('You nod your head yes. "Yeah I know her, we went to school together back in Pavlovsk, why?" You ask him.');
                scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
                scene.text('You shrug a bit. "Honestly I don\'t know, we was never exactly what you would call friends. More just classmates, we ran in different social groups."');
                scene.text('He nods a bit. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
              } else {
                scene.text('You nod your head yes. "Yeah I know her, she is one of my best friends, why?" You ask him.');
                scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
                scene.text('You smile to him. "Yes she is into any person she finds attractive, she doesn\'t care about stuff like that and she likes messing with people and making guys really work for it. If she wasn\'t interested at all she would have shut you down."');
                scene.text('He grins even bigger and then looks over at Anushka again. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
              }
            }
          }
          scene.actions([
{ label: 'Ignore them and go on your way', goto: ['uni_lessons', 'short_break'] },
{ label: 'Follow them', goto: ['uni_lessons_electives_african_studies1', 'nush_haruna_africa101'] },
]);
          return;
        }
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A245'] <= 20) {
      scene.text('You sit next to Haruna and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A245'] < 60) {
        scene.text('You sit next to Haruna and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
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
              if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
                scene.text('You nod your head yes. "Yeah I know her, we went to school together back in Pavlovsk, why?" You ask him.');
                scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
                scene.text('You shrug a bit. "Honestly I don\'t know, we was never exactly what you would call friends. More just classmates, we ran in different social groups."');
                scene.text('He nods a bit. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
              } else {
                scene.text('You nod your head yes. "Yeah I know her, she is one of my best friends, why?" You ask him.');
                scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
                scene.text('You smile to him. "Yes she is into any person she finds attractive, she doesn\'t care about stuff like that and she likes messing with people and making guys really work for it. If she wasn\'t interested at all she would have shut you down."');
                scene.text('He grins even bigger and then looks over at Anushka again. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
              }
            }
          }
          scene.actions([
{ label: 'Ignore them and go on your way', goto: ['uni_lessons', 'short_break'] },
{ label: 'Follow them', goto: ['uni_lessons_electives_african_studies1', 'nush_haruna_africa101'] },
]);
          return;
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkHaruna(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A245', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A245'] <= 20) {
      scene.text('You sit next to Haruna, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A245'] < 60) {
        scene.text('You sit next to Haruna and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
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
              if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
                scene.text('You nod your head yes. "Yeah I know her, we went to school together back in Pavlovsk, why?" You ask him.');
                scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
                scene.text('You shrug a bit. "Honestly I don\'t know, we was never exactly what you would call friends. More just classmates, we ran in different social groups."');
                scene.text('He nods a bit. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
              } else {
                scene.text('You nod your head yes. "Yeah I know her, she is one of my best friends, why?" You ask him.');
                scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
                scene.text('You smile to him. "Yes she is into any person she finds attractive, she doesn\'t care about stuff like that and she likes messing with people and making guys really work for it. If she wasn\'t interested at all she would have shut you down."');
                scene.text('He grins even bigger and then looks over at Anushka again. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
              }
            }
          }
          scene.actions([
{ label: 'Ignore them and go on your way', goto: ['uni_lessons', 'short_break'] },
{ label: 'Follow them', goto: ['uni_lessons_electives_african_studies1', 'nush_haruna_africa101'] },
]);
          return;
        }
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A245'] <= 20) {
      scene.text('You sit next to Haruna and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A245'] < 60) {
        scene.text('You sit next to Haruna and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
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
              if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
                scene.text('You nod your head yes. "Yeah I know her, we went to school together back in Pavlovsk, why?" You ask him.');
                scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
                scene.text('You shrug a bit. "Honestly I don\'t know, we was never exactly what you would call friends. More just classmates, we ran in different social groups."');
                scene.text('He nods a bit. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
              } else {
                scene.text('You nod your head yes. "Yeah I know her, she is one of my best friends, why?" You ask him.');
                scene.text('He grins. "Do you know if she is into African guys? I have flirted with her a few times but she is hard to get a read on."');
                scene.text('You smile to him. "Yes she is into any person she finds attractive, she doesn\'t care about stuff like that and she likes messing with people and making guys really work for it. If she wasn\'t interested at all she would have shut you down."');
                scene.text('He grins even bigger and then looks over at Anushka again. "Thanks." You get the feeling he is planning something, but the two of you casually talk for the rest of class. As soon as it is over he excuses himself and hurries to catch up with Anushka before she leaves. The two of them quietly talk for a few minutes, he touches her arm, she laughs at something he says. It is quickly obvious they are flirting with one another. Then he takes her by the hand and leads her off.');
              }
            }
          }
          scene.actions([
{ label: 'Ignore them and go on your way', goto: ['uni_lessons', 'short_break'] },
{ label: 'Follow them', goto: ['uni_lessons_electives_african_studies1', 'nush_haruna_africa101'] },
]);
          return;
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101TalkPetka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A6'] <= 20) {
      scene.text('You sit next to Petka, who frowns as you sit down, a few minutes later of you trying to talk to him. He gets up and moves a little ways away from you.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A6'] < 60) {
        scene.text('You sit next to Petka and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        if (((s as any).petkaQW ?? 0)?.['african_studies_ask']) {
          scene.text('You sit next to Petka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud. You can\'t help but glance at Kendra as you talk to Petka, knowing why he is taking this class.');
        } else {
          ((s as any).petkaQW = (s as any).petkaQW ?? {})['african_studies_ask'] = 1;
          scene.text('You sit next to Petka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud. You have to admit you are a bit surprised to see him taking this class, back in Pavlovsk he never seemed the type. Perhaps you should just ask him.');
          scene.actions([
            { label: 'Ask him why.', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You lean in close to him. "I just have to ask, why are you taking this class? I never pegged you as the type to be interested in this." You can\'t help but notice when you say pegged he blushes bright red, consider your relationship with him back in Pavlovsk you can\'t help but smile at your unintentional play on words.');
    if (((st as any).meet_kendra ?? 0) === 1) {
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
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A6'] <= 20) {
      scene.text('You sit next to Petka and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A6'] < 60) {
        scene.text('You sit next to Petka and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Petka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_102TalkPetka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 300) {
    if (((s as any).npc_rel ?? 0)?.['A6'] <= 20) {
      scene.text('You sit next to Petka, who frowns as you sit down, a few minutes later of you trying to talk to him. He gets up and moves a little ways away from you.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A6'] < 60) {
        scene.text('You sit next to Petka and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        if (((s as any).petkaQW ?? 0)?.['african_studies_ask']) {
          scene.text('You sit next to Petka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud. You can\'t help but glance at Kendra as you talk to Petka, knowing why he is taking this class.');
        } else {
          ((s as any).petkaQW = (s as any).petkaQW ?? {})['african_studies_ask'] = 1;
          scene.text('You sit next to Petka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud. You have to admit you are a bit surprised to see him taking this class, back in Pavlovsk he never seemed the type. Perhaps you should just ask him.');
          scene.actions([
            { label: 'Ask him why.', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You lean in close to him. "I just have to ask, why are you taking this class? I never pegged you as the type to be interested in this." You can\'t help but notice when you say pegged he blushes bright red, consider your relationship with him back in Pavlovsk you can\'t help but smile at your unintentional play on words.');
    if (((st as any).meet_kendra ?? 0) === 1) {
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
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A6'] <= 20) {
      scene.text('You sit next to Petka and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A6'] < 60) {
        scene.text('You sit next to Petka and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
      } else {
        scene.text('You sit next to Petka and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101_events'] },
  ]);
  scene.build();
}

function enterAfricanStudies_101Events(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  (s as any).uni_event_hour = 1;
  qspCall(s, 'stat', '');
  (s as any).temp = (Math.floor(Math.random() * 24) + 0);
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
    if (((s as any).temp ?? 0) < 4) {
      scene.img('images/locations/city/island/university/classroom/electives/african_studies/pre_gangbang.jpg');
      scene.text('As class ends, all the students start leaving, but a white Russian girl stays behind with about eight African boys.');
      scene.text('You stop at the door to see what they\'re doing as she gets on Professor Bryant\'s desk as the boys surround her.');
      scene.text('You can overhear snippets of what they say; it sounds like she\'s about to be gangbanged... by all of them.');
      scene.text('Just as they start to take her clothes off, the office door opens and Professor Bryant walks out.');
      scene.text('He stops and smiles. "It is good to see a civic minded white girl ready and willing to pay some of her reparations, but why don\'t you boys take her to your dorm room instead, please."');
      scene.text('The boys laugh as they pull her off the desk and drag her out of one of the other doors.');
      scene.actions([
        { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
        { label: 'Wait for Anushka', goto: ['uni_lessons_electives_african_studies1', 'africa_nush'] },
      ]);
    } else {
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
        if (((s as any).temp ?? 0) < 8) {
          scene.img('images/locations/city/island/university/classroom/electives/african_studies/want_bbc.jpg');
          scene.text('During class, you notice a white girl keeps looking in your direction. At least you think she is; you quickly realize she\'s actually looking at an African boy sitting on the other side of you.');
          scene.text('About half way through class, she holds up her notebook and you can easily read what she wrote: "I want big black cock!"');
          scene.text('The boy grins and grabs his crotch. "Come with me after class."');
          scene.text('She grins and nods before they both mostly go back to listening to the lesson, though occasionally sharing flirty looks.');
          scene.text('Once class ends, they head off together and you assume she\'ll get exactly what she wanted.');
          scene.actions([
            { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
            { label: 'Wait for Anushka', goto: ['uni_lessons_electives_african_studies1', 'africa_nush'] },
          ]);
        } else {
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
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).temp ?? 0) === 9) {
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
    scene.img('images/locations/city/island/university/classroom/electives/african_studies/wgirl_afterclass1.jpg');
    scene.text('You sneak up to the office door and open it just a little so you can peek inside. You see Professor Bryant sitting at his desk while the girl is naked from the waist up with her skirt pulled up.');
    scene.text('Professor Bryant is cupping her perky breasts in his hands when his head suddenly turns towards you. "Come in and watch if you want. No need to spy."');
    scene.text('The girl turns and looks at you as well, but she blushes instead.');
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
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
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
              ]);
            } else {
              if (((s as any).temp ?? 0) === 10) {
                scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl1.jpg');
                if (((s as any).anushkaQW ?? 0)?.['djibril_sex'] >= 1) {
                  scene.text('The class is pretty uneventful for the most part, but you notice Djibril sat next to Anushka. He\'s flirting with her, but she\'s really making him work for her attention, which you find a little amusing.');
                  scene.text('As Professor Bryant finishes his lecture, he informs the class that he won\'t be able to stay after to help anyone and if someone needs to ask him something, then they should come and see him in his office later or wait for the next class.');
                  scene.text('With class finished, everyone gets up and heads for the exit. You glance back and see that Djibril has stopped Anushka and they\'re talking by one of the desks.');
                } else {
                  if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
                    scene.text('The class is pretty uneventful for the most part, but you notice Djibril sat next to Anushka. He\'s flirting with her, but she\'s playing it a bit coy and really making him work for her attention, which you find a little amusing.');
                    scene.text('With class finished, everyone gets up and heads for the exit. You glance back and see that Djibril has stopped Anushka and they\'re talking by one of the desks.');
                  } else {
                    scene.text('The class is pretty uneventful for the most part, but you notice a young black man has sat next to Anushka and they talk off and on for most of the class. He\'s clearly flirting with her, but she\'s being pretty aloof and really making him work for her attention, which you find a little amusing.');
                    scene.text('With class finished, everyone gets up and heads for the exit. You glance back and see that the man has stopped Anushka and they\'re talking by one of the desks.');
                  }
                }
                scene.actions([
                  { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
                  { label: 'Wait for Anushka', goto: ['uni_lessons_electives_african_studies1', 'anushka_djibril'] },
                ]);
              } else {
                if (((s as any).temp ?? 0) === 11  &&  ((s as any).kendraQW ?? 0)?.['sub'] >= 10) {
                  qspGoto(s, 'uni_lessons_electives_african_studies2', 'event_kendra');
                } else {
                  scene.img('images/locations/city/island/university/classroom/electives/african_studies/classroom.jpg');
                  scene.text('As you sit listening to the lesson, you look around hoping something interesting will happen, but nothing does.');
                  scene.actions([
                    { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
                    { label: 'Wait for Anushka', goto: ['uni_lessons_electives_african_studies1', 'africa_nush'] },
                  ]);
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

function enterAfricaNush(s: GameState, scene: SceneBuilder): void {
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
      scene.text('She gives you a fairly friendly smile. "Hey..."');
      scene.text('You fall in step beside her as she keeps walking. "So what are you up to?"');
      scene.text('"Going to the library to study some before work. You?" she asks without slowing down.');
      scene.actions([
        { label: 'Tell her you\'re not sure', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shrug. "I don\'t know, I thought you might want to hang out or something..."');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done in the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    scene.text('She gives you a slight smile. "Sure, another time." The two of you walk off in separate directions.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
        { label: 'Ask if you can come along', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(st, 'uni_lessons_electives', 'study_with_friends');
    qspCall(st, 'stat', '');
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
    ((st as any).anushkaCityQW = (st as any).anushkaCityQW ?? {})['first_visit'] = 1;
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something..."');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done at the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? You should stop by my place sometime."');
    scene.text('She tells you where the apartment she shares with the boys from the band is before she leaves. She puts some extra sway in her hips as she walks away, really rocking her ass. You smile and shake your head before turning to leave yourself.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
        { label: 'Agree to go', handler: (st: GameState) => {
    ((st as any).anushkaCityQW = (st as any).anushkaCityQW ?? {})['first_visit'] = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(st, 'uni_lessons_electives', 'study_with_friends');
    qspCall(st, 'stat', '');
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
  // TODO-QSP: end
  scene.build();
}

function enterAnushkaDjibril(s: GameState, scene: SceneBuilder): void {
  if (((s as any).anushkaQW ?? 0)?.['djibril_sex'] >= 1) {
    qspGoto(s, 'uni_lessons_electives_african_studies1', 'anushka_djibril_sex');
  }
  if (((s as any).DjibrilQW ?? 0)?.['meet'] === 0) {
    ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['meet'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    scene.img('images/locations/city/island/university/lecture_hall/lecture_hall.jpg');
    if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
      scene.text('She gives you an annoyed look. "I don\'t have time for you right now." She just walks past you, her tone suggesting that you shouldn\'t follow her.');
      scene.text('The young black man watches her walk away while staring at her ass before turning his attention to you. "She really doesn\'t like you," he says rather matter of factly.');
      scene.text('You snort a soft laugh. "Yeah, you could say that. We went to secondary school together, but we ran in different circles."');
      scene.text('He just nods. "I understand. Anyway, my name is Djibril. Yours?"');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>," you reply and you talk for a few minutes before he looks at...
      scene.text(`"${((s as any).pcs_nickname ?? '')}," you reply and you talk for a few minutes before he looks at his watch. "Shit, I need to get going, but it was nice meeting you."`);
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
    scene.text('You shrug. "I don\'t know, I thought you might want to hang out or something..."');
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
    ((st as any).anushkaCityQW = (st as any).anushkaCityQW ?? {})['first_visit'] = 1;
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something..."');
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
    ((st as any).anushkaCityQW = (st as any).anushkaCityQW ?? {})['first_visit'] = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(st, 'uni_lessons_electives', 'study_with_friends');
    qspCall(st, 'stat', '');
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
    scene.text(`You wait out in the hallway for a few minutes before Djibril comes out with Anushka. They're talking and laughing together. "Catch you later, Nush." He stops when he sees you. "Hey ${((s as any).pcs_nickname ?? '')}, how you been? I got to go, but we should totally catch up. Later."`);
    scene.text('He walks away, giving you a friendly smile as he does. Once he\'s gone, you turn to Anushka. "Hey, what\'s up?"');
    if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
      scene.text('She gives you an annoyed look. "I don\'t have time for you right now." She just walks past you, her tone suggesting that you shouldn\'t follow her.');
      scene.text('The young black man watches her walk away while staring at her ass before turning his attention to you. "She really doesn\'t like you," he says rather matter of factly.');
      scene.text('You snort a soft laugh. "Yeah, you could say that. We went to secondary school together, but we ran in different circles."');
      scene.text('He just nods. "I understand. Anyway, my name is Djibril. Yours?"');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>," you reply and you talk for a few minutes before he looks at...
      scene.text(`"${((s as any).pcs_nickname ?? '')}," you reply and you talk for a few minutes before he looks at his watch. "Shit, I need to get going, but it was nice meeting you." He hurries off without waiting for a reply.`);
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
        scene.text('She looks a little surprised and gives you a puzzled look. "You know him?"');
        scene.text('You fall in step beside her as she keeps walking. "Yeah, that\'s my uncle\'s nephew."');
        scene.text('She glances in the direction he walked away in before looking back at you. "Really? Huh..."');
        scene.text('You ignore her surprise. "So where you off to?"');
        scene.text('"Going to the library to study some before work. You want to come?" she asks while giving you a friendly smile.');
        scene.actions([
          { label: 'Tell her you\'re not sure', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shrug. "I don\'t know, I thought you might want to hang out or something..."');
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
    ((st as any).anushkaCityQW = (st as any).anushkaCityQW ?? {})['first_visit'] = 1;
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something..."');
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
  // TODO-QSP: end
  scene.build();
}

function enterAnushkaDjibrilSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl2.jpg');
  scene.text('You crack the door open and peek in. The two of them are seated back in their seats and seem to be talking about something on the computer, but you notice their overly flirting body language and that Anushka is sitting facing Djibril in a fairly short skirt with her legs spread wide enough for him to see her panties.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl3.jpg');
    scene.text('As you keep watching, you see Anushka turn to a notebook on her desk, apparently telling him about the notes she\'s taken. Djibril unbuttons his pants and pulls his rather large and very thick dick out and starts stroking it, causing it to become hard very quickly. As he\'s doing this, Anushka turns back to face him. She makes a squeaking noise and covers her mouth partially with her hands in surprise, but she doesn\'t seem to be offended or upset. in fact, she\'s grinning from ear to ear. You can just make out Djibril saying "Come on, suck my dick."');
    scene.text('Anushka glances around and you duck back from the door. "What if someone comes back?" she asks as you peek back in.');
    scene.text('Djibril grins. "No one is coming back, but getting caught is part of the thrill. Even if they did, so what? They\'ll just see a pretty little white girl, doing her civic duty and paying reparations by sucking my big black dick. Come on, don\'t you want to pay your reparations?" he says in a joking tone of voice and you hear Anushka snort in amusement in response.');
    qspCall(st, 'arousal', 'voyeur', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl4.jpg');
    scene.text('It doesn\'t take a lot of convincing as Anushka slides off her chair and onto her knees in front of Djibril before taking his thick cock into her mouth and sucking it. He moans softly as she does and leans back enjoying it. You can faintly hear the slurping sounds of her mouth on his cock and it seems like she\'s looking in your direction a few times, making you wonder if she\'s spotted you.');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl5.jpg');
    scene.text('Anushka starts playing with her breasts as she bobs her head up and down on Djirbil\'s dick. "Fuccck... You\'re amazing at this," he moans out fairly loudly, which only encourages her to redouble her efforts and pick up the pace, making even more wet slurping sounds as she takes his cock deep into her mouth. "Oh, fuck yeah, just like that..." he moans out.');
    scene.text('She then pops his dick out of her mouth and gets off her knees. "My turn," she says as she sits on the table.');
    scene.text('Djibril stands up and looks down at her as he says. "I don\'t think this is how reparations are supposed to work. <i>You</i> are supposed to service <i>me</i> according to Professor Bryant."');
    scene.text('Anushka puts a hand against his chest and shoves him slightly. "Shut up and eat my little white pussy."');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl6.jpg');
    scene.text('Anushka sits on the table and spreads her legs wide while pulling her panties aside to expose her pussy. Djibril gets down on his knees in front of her and starts licking her pussy as she moans loudly and her hand slides up to the back of his head, forcing his face into her pussy as she grinds against him.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl7.jpg');
    scene.text('He stops going down on her and stands up. He takes off her shirt and bra, leaving her small breasts on full display as he pushes her skirt up around her waist and pulls her panties off before grabbing her legs and spreading them apart. He rubs the tip of his dick against her pussy and then slides it in, causing her to moan loudly as he starts fucking her.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl8.jpg');
    scene.text('Anushka starts rubbing her clit as Djibril thrusts his cock balls deep into her over and over. "Oh... Fuck... Yes... Tear my little white pussy up. With your huge black cock... Fuck... Yes!" The louder she moans and the more she gets into it, the faster and harder he thrusts into her. After a few minutes, he pulls all the way out of her. "Oh fuck... Don\'t stop... Slide that massive cock back in..." she pleads with him.');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl9.jpg');
    scene.text('Instead, he manhandles her and flips her over onto her stomach, then pulls her up into a standing position, only to roughly push her forward at her back, making her partially bend over in front of him. He slides the tip of his dick back to her wet slit, then keeps going up to her asshole. "I\'m going to rip that tight little asshole of yours apart with my big black dick." You can tell his words turn her on as he slides his cock into her asshole. She gasps in a mix of pain and pleasure as he starts fucking her asshole, but it quickly turns into full pleasure.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl10.jpg');
    scene.text('"OH GOD! You\'re so big... Oh fuck..." she moans as he thrusts his thick dick deeper and deeper into her ass.');
    scene.text('Djibril slaps her ass. "Yeah, that\'s right. You love my big black cock in your ass, don\'t you?" he says while slapping her ass. "You just love it when you have a black dick balls deep in your ass. Tell me how much you love it."');
    scene.text('The more he talks dirty to her, the more turned on she looks and the more she gets into it. "Yes... I love big black cocks... In my tight little... White ass..."');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl11.jpg');
    scene.text('"Fuck, your ass is tight!" he says as he slaps her ass again.');
    scene.text('"Ohhh... Your cock... Is so big..." she moans as he keeps fucking her.');
    scene.text('He starts to grunt and thrust even harder into her ass. "Just think. Anyone could walk in and see you taking a big black cock, balls deep in your ass while you\'re loving it."');
    scene.text('She doesn\'t respond, but her legs start shaking and her whole body soon spasms as she has an orgasm. At this point, she can\'t really support herself and he holds her up as he keeps fucking her with a sudden urgency.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/classroom/comp_djibirl12.jpg');
    scene.text('He suddenly pulls his dick out of her ass and she quickly gets down on her knees. As soon as she\'s on her knees in front of him, he starts jerking off and almost immediately starts cumming over her face. Once he finishes cumming on her, he slips his dick away. "That was amazing. We should totally do that again," he says with a grin.');
    scene.text('She grabs her purse and gets some tissues to start cleaning up her face. "Maybe if you\'re a good boy," she says in a snarky, teasing tone.');
    scene.text('He laughs at her reply. "Oh, I\'m a real good boy!" As she finishes cleaning up her face, he adds. "I need to get going, but stop by my room sometime and we can hang out, play some games or watch TV or something."');
    scene.text('She shrugs. "Maybe. I\'m pretty busy with studying, my job, modeling, the band..."');
    scene.text('He nods. "Cool, cool. See you later." With that, he turns to head for the exit. You quickly duck aside hoping he doesn\'t see you.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Quickly leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Stand near the door and wait', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    if (((st as any).DjibrilQW ?? 0)?.['nush_africaclass'] === 0) {
      ((st as any).DjibrilQW = (st as any).DjibrilQW ?? {})['nush_africaclass'] = 1;
      // TODO-QSP: dynamic text: You don''t have to wait long before Djibril walks out with a huge grin on his fa...
      scene.text(`You don't have to wait long before Djibril walks out with a huge grin on his face. When he sees you, he stops and impulsively glances back at the door. You could swear he's blushing, but it's hard to tell with his dark skin. He rubs the back of his head with one hand. "Uh... Hey ${((st as any).pcs_nickname ?? '')}... Did you need something?"`);
      scene.text('You grin at him and decide to tease him a little. "Yeah, I was waiting on my friend to leave class and see if they wanted to study, but you guys were in there for so long and it sounded like you were exercising or something..."');
      scene.text('Now you\'re sure he\'s blushing. "Oh..." Then he just laughs and relaxes. "Yeah, you caught us. We were fucking like rabbits. Maybe next time you might want to stay over instead, or maybe join us?"');
      scene.text('Now it\'s your turn to blush. "Maybe..." you mutter back.');
      scene.text('He laughs before walks away with some parting words. "Well, just think about it."');
    } else {
      scene.text('You don\'t have to wait long before Djibril walks out with a huge grin on his face. When he sees you, he stops and just laughs. "Enjoy the show?"');
      scene.text('You grin at him and nod. "Yeah, it was pretty good."');
      scene.text('He grins. "Yeah, I try to give as good as I get. Instead of watching, you should stay over or come join us next time."');
      scene.text('You blush at that. "Maybe. I\'ll think about it."');
      scene.text('He laughs even more and walks away with some parting words. "Yeah okay, but don\'t think too much about it because I would love to have you both."');
    }
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Wait for Anushka', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    if (((st as any).DjibrilQW ?? 0)?.['nush_africaclass'] === 0) {
      ((st as any).DjibrilQW = (st as any).DjibrilQW ?? {})['nush_africaclass'] = 1;
      // TODO-QSP: dynamic text: A few minutes later, the door opens again and Anushka comes out, all cleaned up ...
      scene.text(`A few minutes later, the door opens again and Anushka comes out, all cleaned up and clothes back in order. She gives you a knowing little smile. "Been waiting long, ${((st as any).pcs_nickname ?? '')}?"`);
      scene.text('You grin at her and decide to tease her a little. "Yeah, I was waiting on my friend to leave class and see if they wanted to study, but you guys were in there for so long and it sounded like you were exercising or something..."');
      scene.text('She just rolls her eyes at your attempt at a joke, then smirks at you. "Uh-huh. You know what we were doing. I was getting fucked good and proper by a big black cock and I loved it."');
      scene.text('You laugh and hip bump her. "Yeah, I could hear that much. So where are you off to?" you ask as you start walking together.');
      scene.text('"Going to the library to study some before work. You want to come?" she asks while giving you a friendly smile and slowing down a little.');
      scene.actions([
        { label: 'Let\'s have fun instead', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something..."');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done at the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    if (((st as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later." She puts some extra sway in her hips as she walks away, really rocking her ass.');
      scene.text('You smile and shake your head before turning to leave yourself.');
    } else {
      ((st as any).anushkaCityQW = (st as any).anushkaCityQW ?? {})['first_visit'] = 1;
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
      scene.text(`A few minutes later, the door opens again and Anushka comes out, all cleaned up and clothes back in order. She gives you a knowing little smile. "You been perving and spying on us again, ${((st as any).pcs_nickname ?? '')}?"`);
      scene.text('You can\'t help but blush. "Maybe... I was waiting to see if you wanted to do something after class and well... You took your time..."');
      scene.text('She giggles. "What can I say? He knows how to make a girl feel <i>really</i> good."');
      scene.text('You laugh and hip bump her. "Yeah, I heard you calling out to god a few times in there. So where are you off to?" you ask as you start walking together.');
      scene.text('"Going to the library to study before work. Want to come?" she asks while giving you a friendly smile and slowing down a little.');
      scene.actions([
        { label: 'Let\'s have fun instead', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something..."');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done at the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    if (((st as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later."');
      scene.text('She puts some extra sway in her hips as she walks away, really rocking her ass. You smile and shake your head before turning to leave yourself.');
    } else {
      ((st as any).anushkaCityQW = (st as any).anushkaCityQW ?? {})['first_visit'] = 1;
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

function enterNushHarunaAfrica101(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/haruna/af1.jpg');
  if (((s as any).harunaQW ?? 0)?.['nush_af101_fuck'] === 0) {
    scene.text('They leave the classroom holding hands, the seem to switch a couple of times which one is leading which. They head down the hallway and then up the stairs, until they get to the top floor, you follow them for a good five to ten minutes. As you follow them staying just out of sight once there is almost no one else around, you follow them long enough you are starting to get bored following them and wonder if they even have a destination even in mind. Just as you think that though, he suddenly grabs her and pulls her over to one of the doors. You know these are offices for some of the University officials up here, but this seems to be a unused wing on this floor. He checks the door and it turns, he opens it and then pulls her inside closing it behind them. With them now behind the door you walk up to the door and listen for a moment. You can hear some muffled sounds behind the door but you can\'t make out what it is.');
  } else {
    scene.text('They leave the classroom holding hands, the seem to switch a couple of times which one is leading which. They head down the hallway and then up the stairs, until they get to the top floor, you follow them for a good five to ten minutes. As you follow them staying just out of sight once there is almost no one else around, you quickly realize they are going back to the same place as last time. Sure enough once they get to the top floor, he leads her to the same room, he drags her inside and closes the door behind them.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/haruna/af2.jpg');
    if (((st as any).harunaQW ?? 0)?.['nush_af101_fuck'] >= 1) {
      scene.text('You look around to make sure no one else is around, then you crack open the door and peek in side. You see Anushka leaning against a large pillar in the corner of the room by some large windows. While Haruna is standing a few feet away from her, looking her over. "You are very beautiful." She smiles in return to his compliment, but he keeps talking. "What did you think of the Professors views?"');
      scene.text('She cocks her head slightly. "You mean about racial reparations?"');
      scene.text('He nods. "Yeah."');
      scene.text('She laughs a bit. "I think they are complete bullshit for some many reasons... but..." As she says the but she leans back taking a more sexy seductive pose. "It can be fun to play and pretend... why would you like some racial reparations from me?" She says in a husky sexy tone.');
      scene.text('You see Haruna adjust how he is standing obviously starting to get turned on. "Yeah I would, why don\'t you take off that jacket." She slowly slips off her jacket and tosses it aside. "Now take off that skirt." She unbuttons the skirt and lets it fall down her legs to pile up around her ankles, while he licks his lips looking at her. Now leaving her just dressed in a black sheer shirt, with black mesh allowing you to see through much of it and black panties. Next he unbuttons his own pants and pulls out his rather large and thick black cock. "Why don\'t you come over here and get down on your knees and suck my big block cock, with those pretty white lips of yours."');
    } else {
      scene.text('You look around to make sure no one else is around, then you crack open the door and peek in side. You see Anushka leaning against a large pillar in the corner of the room by some large windows. While Haruna is standing a few feet away from her, looking her over. "Do I owe you more racial reparations?" She asks him with a seductive smile.');
      scene.text('He grins to her. "Yeah I think you do." He says as he unbuttons his pants and pulls out his rather large and thick black cock. "Be a good little white slut and get over here." As she loses her skirt and jacket she walks over to him, as soon as she is in arms reach he pushes her down to her knees as he says. "Suck my big block cock, with those pretty white lips of yours."');
    }
    qspCall(st, 'arousal', 'voyeur', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Watch her suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/haruna/af3.jpg');
    scene.text('She takes his cock into her mouth and starts sucking on the the head of it, after a bit she slowly starts to take his dick further and further into her mouth, slowly sucking it, with her lips wrapped tightly around the shaft. As she does he moans softly as he says. "You look so beautiful with a black cock in your mouth." After a brief pause he adds. "Let me help you."');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/haruna/af4.jpg');
    scene.text('He reaches up and cups the back of her head with his hand and shoves his dick down her throat making her gag, as he moans loudly. "Oh yeah... that\'s it, choke on my big black cock, like a good little white slut." He lets up long enough for her to catch her breath, then does it again, until drool starts to run out of the corners of her mouth and it leaves her gasping for air. "That\'s it get it nice and wet, get up and turn around for me." He tells her.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Watch her turn around', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/haruna/af5.jpg');
    if (((st as any).harunaQW ?? 0)?.['nush_af101_fuck'] >= 1) {
      scene.text('Once he pulls his big black dick out of her mouth, she stays kneeling a moment catching her breath, before she stands up and turns around. Once her back is to him, he pulls her panties aside, as he does she pulls her butt cheeks apart for him. He chuckles as she does. "So eager to take a big block cock up your tight little ass again I see." With that he shoves the tip of his dick in her asshole, making her sequel a little in pain before moaning in pleasure as he starts to slowly fuck her ass.');
    } else {
      scene.text('Once he pulls his big black dick out of her mouth, she stays kneeling a moment catching her breath, before she stands up and turns around. Once her back is to him, he pulls her panties aside, before slapping her ass cheek hard enough she yelps from it. "Spread those silky white cheeks for me." He tells her. She reaches back and pulls her butt cheeks apart for him. He chuckles as she does. "I\'m gong to rip that tight little white ass of yours up with my big block cock." With that he shoves the tip of his dick in her asshole, making her sequel a little in pain before moaning in pleasure as he starts to slowly fuck her ass.');
    }
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Watch Anushka get buttfucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/haruna/af6.jpg');
    scene.text('He starts off nice and slow fucking her butt, not going to deep. In time he starts to go a little deeper and go a little faster, her moans of pleasure suggest she is enjoying this as much as he seems to be. Ever so often he reaches down to smack her ass cheek with his hand, loud enough the pop of flesh on flesh echo\'s in the room. Which always elicits a yelp from Anushka, before she starts moaning in pleasure again.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/haruna/af7.jpg');
    scene.text('After a couple of more minutes of this Anushka starts to cry out and shake, suddenly her legs start shaking like crazy. Haruna has to use his hands to keep her up right as he keeps fucking her butt, as she has a orgasm. "You are such a dirtly little white slut, loving that black cock in your ass." A couple of minutes later he starts to grunt himself, her orgasm has finally passed but it looks like he is about to bust a nut himself now.');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Watch him cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/haruna/af8.jpg');
    scene.text('He suddenly pulls his dick out of her ass, as he grabs her by the hair. He forces her down to her knees with one hand wrapped tightly in her hair as he says. "Get on your knees and open you mouth." Once he has her down on her knees in front of him with her mouth wide open, he points his dick right into her open mouth and strokes it a couple of more times. Moments later spurts of thick cum start shooting out of his dick right into her open mouth, then he slowly milks every last drop of cum out of his cock into her waiting mouth. "Thats a good little white slut, now swallow your reward."');
    scene.text('Anushka closes her mouth and swallows, before opening it again to show him she swallowed all his cum. He grins and gives her face a light smack. "You enjoy your little treat dirty white slut?"');
    scene.text('Grins to him, obviously enjoying the dirty talk. "Yes I love the taste of your cum, I want more of it."');
    scene.text('He just chuckles at her response and slips his dick away back into his pants. "I love Russia." Once his dick is put away and his pants are fully buttoned back up he starts walking towards the door, while Anushka starts to gather up her clothes in the background.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Quickly leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Stand near the door and wait', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big245.jpg');
    scene.text('You don\'t have to wait long before Haruna walks out with a huge grin on his face. When he sees you, he stops and just laughs. "Enjoy the show?"');
    scene.text('You grin at him and nod. "Yeah, it was pretty good."');
    scene.text('He grins. "Yeah, I try to give as good as I get. Instead of watching, you should stay over or come join us next time."');
    scene.text('You blush at that. "Maybe. I\'ll think about it."');
    scene.text('He laughs even more and walks away with some parting words. "Yeah okay, but don\'t think too much about it because I would love to have you both."');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Wait for Anushka', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    if (((st as any).harunaQW ?? 0)?.['nush_af101_fuck'] === 0) {
      ((st as any).harunaQW = (st as any).harunaQW ?? {})['nush_af101_fuck'] = 1;
      // TODO-QSP: dynamic text: A few minutes later, the door opens again and Anushka comes out, all cleaned up ...
      scene.text(`A few minutes later, the door opens again and Anushka comes out, all cleaned up and clothes back in order. She gives you a knowing little smile. "Been waiting long, ${((st as any).pcs_nickname ?? '')}?"`);
      scene.text('You grin at her and decide to tease her a little. "Yeah, I was waiting on my friend to leave class and see if they wanted to study, but you guys were in there for so long and it sounded like you were exercising or something..."');
      scene.text('She just rolls her eyes at your attempt at a joke, then smirks at you. "Uh-huh. You know what we were doing. I was getting fucked good and proper by a big black cock and I loved it."');
      scene.text('You laugh and hip bump her. "Yeah, I could hear that much. So where are you off to?" you ask as you start walking together.');
      scene.text('"Going to the library to study some before work. You want to come?" she asks while giving you a friendly smile and slowing down a little.');
      scene.actions([
        { label: 'Let\'s have fun instead', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something..."');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done at the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    if (((st as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later." She puts some extra sway in her hips as she walks away, really rocking her ass.');
      scene.text('You smile and shake your head before turning to leave yourself.');
    } else {
      ((st as any).anushkaCityQW = (st as any).anushkaCityQW ?? {})['first_visit'] = 1;
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
      scene.text(`A few minutes later, the door opens again and Anushka comes out, all cleaned up and clothes back in order. She gives you a knowing little smile. "You been perving and spying on us again, ${((st as any).pcs_nickname ?? '')}?"`);
      scene.text('You can\'t help but blush. "Maybe... I was waiting to see if you wanted to do something after class and well... You took your time..."');
      scene.text('She giggles. "What can I say? He knows how to make a girl feel <i>really</i> good."');
      scene.text('You laugh and hip bump her. "Yeah, I heard you calling out to god a few times in there. So where are you off to?" you ask as you start walking together.');
      scene.text('"Going to the library to study before work. Want to come?" she asks while giving you a friendly smile and slowing down a little.');
      scene.actions([
        { label: 'Let\'s have fun instead', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something..."');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done at the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    if (((st as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later."');
      scene.text('She puts some extra sway in her hips as she walks away, really rocking her ass. You smile and shake your head before turning to leave yourself.');
    } else {
      ((st as any).anushkaCityQW = (st as any).anushkaCityQW ?? {})['first_visit'] = 1;
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
    case 'africa_nush':
      enterAfricaNush(s, scene);
      break;
    case 'anushka_djibril':
      enterAnushkaDjibril(s, scene);
      break;
    case 'anushka_djibril_sex':
      enterAnushkaDjibrilSex(s, scene);
      break;
    case 'nush_haruna_africa101':
      enterNushHarunaAfrica101(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_lessons_electives_african_studies1: LocationDef = {
  name: 'uni_lessons_electives_african_studies1',
  title: 'You walk into the classroom and take a seat. You see a lot o',
  region: 'other',
  enter: enter,
};
