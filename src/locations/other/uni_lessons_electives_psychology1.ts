import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPsychology_101(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/lecture1.jpg');
  if (((s as any).university ?? 0)?.['first_visit_psychology_101']) {
    scene.text('You walk into the classroom and take a seat at one of the tables. The rest of your classmates walk in one-by-one before Professor Kucherov enters the classroom and closes the door. He turns to the class and begins today\'s lecture.');
  } else {
    ((s as any).university = (s as any).university ?? {})['first_visit_psychology_101'] = 1;
    scene.text('You walk into the classroom and take a seat. The rest of your classmates walk in one-by-one before a decent looking young man, likely in his mid or late twenties walks in, who appears to be in good shape enters the classroom and closes the door. He stops at the front of the class. "My name is Dmitriy Kucherov, but you may call me, Professor Kucherov. I am going to teach you how the human mind works in this class, or at least the basics understanding of how people think and more importantly why they think the way they do." With that he begins today\'s lecture.');
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
      { label: 'Listen attentively to Professor Kucherov', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Kucherov', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    qspGoto(st, 'uni_lessons_electives_psychology1', 'psychology_101_listen');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t pay attention in class', goto: ['uni_lessons_electives_psychology1', 'psychology_101_no_attention'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_psychology1', 'psychology_101_talk'] },
  ]);
  scene.build();
}

function enterPsychology_101Listen(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'exp_gain', 'humint', (Math.floor(Math.random() * 2) + 0));
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/attentive${(Math.floor(Math.random() * 4) + 1)}.jpg`);
  scene.text('You listen attentively to Professor Kucherov for the duration of the class. He manages to make today\'s lesson interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 1), 'no_bonus');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/university/classroom/question1.jpg');
    scene.text('Professor Kucherov nods approvingly, happy to see his students engaged and trying their best. He happily spends some extra time explaining the topic again, and answers any additional questions you might have.');
    scene.text('You feel smarter, thoroughly understanding today\'s lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
    ]);
  } },
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_101NoAttention(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  scene.img('images/locations/city/island/university/classroom/bored.jpg');
  scene.text('Professor Kucherov\'s lecture is fairly interesting, but you don\'t find it that engaging. You end up having a hard time focusing on the class.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_101Talk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('As you arrive in class, you look around and decide to sit next to...');
  if ((!((s as any).meet_kendra ?? 0))) {
    scene.actions([
      { label: 'The ebony girl', goto: ['uni_lessons_electives_psychology1', 'psychology_101_talk_kendra_1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Kendra', goto: ['uni_lessons_electives_psychology1', 'psychology_101_talk_kendra_2'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Albina', goto: ['uni_lessons_electives_psychology1', 'psychology_101_talk_albina'] },
    { label: 'Mia and Yana', goto: ['uni_lessons_electives_psychology1', 'psychology_101_talk_mia_yana'] },
  ]);
  scene.build();
}

function enterPsychology_102(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/electives/computer/class.jpg');
  scene.text('You walk into the classroom and take a seat at one of the tables. The rest of your classmates walk in one-by-one before Professor Kucherov enters the classroom and closes the door. He turns to the class and begins today\'s lecture.');
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
      { label: 'Listen attentively to Professor Kucherov', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Kucherov', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    qspGoto(st, 'uni_lessons_electives_psychology1', 'psychology_102_listen');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t pay attention in class', goto: ['uni_lessons_electives_psychology1', 'psychology_102_no_attention'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_psychology1', 'psychology_102_talk'] },
  ]);
  scene.build();
}

function enterPsychology_102Listen(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'exp_gain', 'humint', (Math.floor(Math.random() * 2) + 0));
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/attentive${(Math.floor(Math.random() * 4) + 1)}.jpg`);
  scene.text('You listen attentively to Professor Kucherov for the duration of the class. He manages to make today\'s lesson interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 1), 'no_bonus');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/university/classroom/question1.jpg');
    scene.text('Professor Kucherov nods approvingly, happy to see his students engaged and trying their best. He happily spends some extra time explaining the topic again, and answers any additional questions you might have. You feel smarter, thoroughly understanding today\'s lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
    ]);
  } },
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_102NoAttention(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/bored.jpg');
  scene.text('Professor Kucherov\'s lecture is fairly interesting, but you don\'t find it very engaging. You end up having a hard time focusing on the class.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_102Talk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('As you arrive in class, you look around and decide to sit next to...');
  if ((!((s as any).meet_kendra ?? 0))) {
    scene.actions([
      { label: 'The ebony girl', goto: ['uni_lessons_electives_psychology1', 'psychology_102_talk_kendra_1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Kendra', goto: ['uni_lessons_electives_psychology1', 'psychology_102_talk_kendra_2'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Albina', goto: ['uni_lessons_electives_psychology1', 'psychology_102_talk_albina'] },
    { label: 'Mia and Yana', goto: ['uni_lessons_electives_psychology1', 'psychology_102_talk_mia_yana'] },
  ]);
  scene.build();
}

function enterPsychology_101TalkKendra_1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  scene.img('images/locations/city/island/university/classroom/ebony_girl_talk.jpg');
  if (((s as any).pcs_hotcat ?? 0) < 5) {
    // TODO-QSP: dynamic text: There''s something about this ebony girl that intrigues you, so you decide to si...
    scene.text(`There's something about this ebony girl that intrigues you, so you decide to sit next to her. "Hi, I'm ${((s as any).pcs_nickname || '')}."`);
    scene.text('"No. Not interested. Maybe if you do something about all of... \'this\', you can try again." Her hand indicates your entire person with languid disinterest.');
    scene.text('You\'re taken aback by her comment. "What?"');
    scene.text('She rolls her eyes, believing your shocked silence to be stupidity. "Just go away."');
    scene.text('She ignores you for the rest of the class, leaving you to wonder if she doesn\'t find you attractive enough to get her attention. Maybe if you were better looking she would talk to you?');
  } else {
    (s as any).meet_kendra = 1;
    // TODO-QSP: dynamic text: There''s something about this ebony girl that intrigues you, so you decide to si...
    scene.text(`There's something about this ebony girl that intrigues you, so you decide to sit next to her. "Hi, I'm ${((s as any).pcs_nickname || '')}."`);
    scene.text('She eyes you like a pair of shoes she might buy. "I\'m Kendra, but you can call me Mistress," she replies in an exotic accent. "If you like, I can train you to become one of my slaves."');
    scene.text('You\'re taken aback by her comment. "Slaves?"');
    scene.text('She smiles. "Yes, I have many sex slaves here, and I can train you to serve me well. If you\'re interested, come to my dorm room. It\'s on the eighth floor of the east dorm, room 808."');
    scene.text('She ignores you for the rest of the class, leaving you to wonder if you should visit her dorm room and see what she was talking about...');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_101TalkKendra_2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/ebony_girl_talk.jpg');
  if (((s as any).kendraQW ?? 0)?.['sub'] < 1) {
    scene.text('You\'re about to sit next to Kendra when she glares at you. "I don\'t think so, Princess. We\'re not friends and I want nothing to do with you. Go sit somewhere else."');
    scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
  } else {
    if (((s as any).kendraQW ?? 0)?.['sub'] < 10) {
      if (((s as any).npc_rel ?? 0)?.['A82'] <= 20) {
        scene.text('You start to sit next to Kendra, who glares at you. "We\'re not friends. You\'re nothing more than my white slave bitch to use and abuse as I see fit. You don\'t come over to me in public, <i>ever</i>. Go sit somewhere else."');
        scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A82'] < 60) {
          scene.text('You sit next to Kendra and try to have a conversation with her, but anytime you try and get a word in, she gives you a dirty look until you shut up and let her keep talking.');
        } else {
          scene.text('You decide to sit next to Kendra. You talk to her and she even lets you get a few words in, but she mostly treats you like a pet or someone simple, often making condescending comments towards you.');
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A82'] <= 20) {
        scene.text('You\'re about to sit next to Kendra when she glares at you. "We\'re not friends. You\'re nothing more than my white slave bitch to use and abuse as I see fit. You don\'t come over to me in public, <i>ever</i>. Go sit somewhere else."');
        scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A82'] < 60) {
          scene.text('You sit next to Kendra and try to have a conversation with her, but anytime you try and get a word in, she gives you a dirty look until you shut up and let her keep talking.');
        } else {
          scene.text('You decide to sit next to Kendra. You talk to her and she even lets you get a few words in, but she mostly treats you like a pet or someone simple, often making condescending comments towards you.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_102TalkKendra_1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/ebony_girl_talk.jpg');
  if (((s as any).pcs_hotcat ?? 0) < 5) {
    // TODO-QSP: dynamic text: There''s something about this ebony girl that intrigues you, so you decide to si...
    scene.text(`There's something about this ebony girl that intrigues you, so you decide to sit next to her. "Hi, I'm ${((s as any).pcs_nickname || '')}."`);
    scene.text('"No. Not interested. Maybe if you do something about all of... \'this\', you can try again." Her hand indicates your entire person with languid disinterest.');
    scene.text('You\'re taken aback by her comment. "What?"');
    scene.text('She rolls her eyes, believing your shocked silence to be stupidity. "Just go away."');
    scene.text('She ignores you for the rest of the class. but you wonder if she doesn\'t find you attractive enough to get her attention. Maybe if you were better looking she would talk to you?');
  } else {
    (s as any).meet_kendra = 1;
    // TODO-QSP: dynamic text: There''s something about this ebony girl that intrigues you, so you decide to si...
    scene.text(`There's something about this ebony girl that intrigues you, so you decide to sit next to her. "Hi, I'm ${((s as any).pcs_nickname || '')}."`);
    scene.text('She eyes you like a pair of shoes she might buy. "I\'m Kendra, but you can call me Mistress," she replies in an exotic accent. "If you like, I can train you to become one of my slaves."');
    scene.text('You\'re taken aback by her comment. "Slaves?"');
    scene.text('She smiles. "Yes, I have many sex slaves here, and I can train you to serve me well. If you\'re interested, come to my dorm room. It\'s on the eighth floor of the east dorm, room 808."');
    scene.text('She ignores you for the rest of the class. You wonder if you should visit her dorm room and see what she was talking about...');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_102TalkKendra_2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/ebony_girl_talk.jpg');
  if (((s as any).kendraQW ?? 0)?.['sub'] < 1) {
    scene.text('You start to sit next to Kendra, who glares at you. "I don\'t think so, Princess. We\'re not friends and I want nothing to do with you. Go sit somewhere else."');
    scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
  } else {
    if (((s as any).kendraQW ?? 0)?.['sub'] < 10) {
      if (((s as any).npc_rel ?? 0)?.['A82'] <= 20) {
        scene.text('You start to sit next to Kendra, who glares at you. "I don\'t think so, Princess. We\'re not friends and I want nothing to do with you. Go sit somewhere else."');
        scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A82'] < 60) {
          scene.text('You sit next to Kendra and try to have a conversation with her, but anytime you try and get a word in, she gives you a dirty look until you shut up and let her keep talking.');
        } else {
          scene.text('You decide to sit next to Kendra. You talk to her and she even lets you get a few words in, but she mostly treats you like a pet or someone simple, often making condescending comments towards you.');
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A82'] <= 20) {
        scene.text('You start to sit next to Kendra, who glares at you. "We\'re not friends. You\'re nothing more than my white slave bitch to use and abuse as I see fit. You don\'t come over to me in public, <i>ever</i>. Go sit somewhere else."');
        scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A82'] < 60) {
          scene.text('You sit next to Kendra and try to have a conversation with her, but anytime you try and get a word in, she gives you a dirty look until you shut up and let her keep talking.');
        } else {
          scene.text('You decide to sit next to Kendra. You talk to her and she even lets you get a few words in, but she mostly treats you like a pet or someone simple, often making condescending comments towards you.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_101TalkKatja(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
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
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_102TalkKatja(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
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
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_101TalkVicky(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'npc_relationship', 'modify', 'A15', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A15'] <= 20) {
    scene.text('text for Sveta trying to talk to the npc hates her');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A15'] < 60) {
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
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_102TalkVicky(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'npc_relationship', 'modify', 'A15', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A15'] <= 20) {
    scene.text('text for Sveta trying to talk to the npc hates her');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A15'] < 60) {
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
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_101TalkAlbina(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'npc_relationship', 'modify', 'A23', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 250  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
    if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
      scene.text('You sit next to Albina, but she ignores all of your attempts to speak with her and pays attention to the class instead.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A23'] < 70) {
        scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
      } else {
        scene.text('You sit next to Albina and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
      scene.text('You\'re about to sit next to Albina when she glares up at you. "Don\'t even think about it, you fucking cum rag."');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A23'] < 70) {
        scene.text('You sit next to Albina and try to talk to her, but she brushes you off and focuses on the lecture instead.');
      } else {
        scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_102TalkAlbina(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'npc_relationship', 'modify', 'A23', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 250  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
    if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
      scene.text('You sit next to Albina, but she ignores all of your attempts to speak with her and pays attention to the class instead.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A23'] < 70) {
        scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
      } else {
        scene.text('You sit next to Albina and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
      scene.text('You\'re about to sit next to Albina when she glares up at you. "Don\'t even think about it, you fucking cum rag."');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A23'] < 70) {
        scene.text('You sit next to Albina and try to talk to her, but she brushes you off and focuses on the lecture instead.');
      } else {
        scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_101TalkMiaYana(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'npc_relationship', 'modify', 'A267', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A268', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 150) {
    if ((((s as any).npc_rel ?? 0)?.['A267'] + ((s as any).npc_rel ?? 0)?.['A268']) / 2 <= 20) {
      scene.text('You sit next to Mia and Yana and try to talk to them, but they just ignore you and chat and giggle amongst themselves, trying to think of a prank they can pull on Professor Kucherov instead.');
    } else {
      if ((((s as any).npc_rel ?? 0)?.['A267'] + ((s as any).npc_rel ?? 0)?.['A268']) / 2 < 60) {
        scene.text('You sit next to Mia and Yana. They\'re a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with them before a fellow student asks you to be quiet.');
      } else {
        scene.text('You sit next to Mia and Yana and spend most of the class quietly talking with them. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  } else {
    if ((((s as any).npc_rel ?? 0)?.['A267'] + ((s as any).npc_rel ?? 0)?.['A268']) / 2 <= 20) {
      scene.text('You approach the twins, who immediately glare at you in disgust. "Ugh, what could this filthy slut want with us?" one of them asks in an annoyed tone.');
      scene.text('"Maybe she wants to learn how to mind control guys so they fuck her dirty pussy all night long?" the other replies and they both burst into laughter.');
    } else {
      if ((((s as any).npc_rel ?? 0)?.['A267'] + ((s as any).npc_rel ?? 0)?.['A268']) / 2 < 60) {
        scene.text('You sit next to Mia and Yana and briefly speak with them before one of them has an idea about a prank they can pull on someone they know, at which point they start giggling amongst themselves.');
      } else {
        scene.text('You sit next to Mia and Yana. They\'re a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with them before a fellow student asks you to be quiet.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_102TalkMiaYana(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'npc_relationship', 'modify', 'A267', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A268', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 150) {
    if ((((s as any).npc_rel ?? 0)?.['A267'] + ((s as any).npc_rel ?? 0)?.['A268']) / 2 <= 20) {
      scene.text('You sit next to Mia and Yana and try to talk to them, but they just ignore you and chat and giggle amongst themselves, trying to think of a prank they can pull on Professor Kucherov instead.');
    } else {
      if ((((s as any).npc_rel ?? 0)?.['A267'] + ((s as any).npc_rel ?? 0)?.['A268']) / 2 < 60) {
        scene.text('You sit next to Mia and Yana. They\'re a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with them before a fellow student asks you to be quiet.');
      } else {
        scene.text('You sit next to Mia and Yana and spend most of the class quietly talking with them. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  } else {
    if ((((s as any).npc_rel ?? 0)?.['A267'] + ((s as any).npc_rel ?? 0)?.['A268']) / 2 <= 20) {
      scene.text('You approach the twins, who immediately glare at you in disgust. "Ugh, what could this filthy slut want with us?" one of them asks in an annoyed tone.');
      scene.text('"Maybe she wants to learn how to mind control guys so they fuck her dirty pussy all night long?" the other replies and they both burst into laughter.');
    } else {
      if ((((s as any).npc_rel ?? 0)?.['A267'] + ((s as any).npc_rel ?? 0)?.['A268']) / 2 < 60) {
        scene.text('You sit next to Mia and Yana and briefly speak with them before one of them has an idea about a prank they can pull on someone they know, at which point they start giggling amongst themselves.');
      } else {
        scene.text('You sit next to Mia and Yana. They\'re a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with them before a fellow student asks you to be quiet.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] },
  ]);
  scene.build();
}

function enterPsychology_101Events(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  (s as any).uni_event_hour = 1;
  (s as any).temp = (Math.floor(Math.random() * 17) + 0);
  if (((s as any).temp ?? 0) < 2) {
    scene.img('images/locations/city/island/university/classroom/electives/psychology/boy_sleeping.jpg');
    scene.text('As Professor Kucherov continues his lecture, you notice a boy just ahead of you with his head down softly snoring. You shake your head and go back to focusing on the lecture.');
  } else {
    if (((s as any).temp ?? 0) < 4) {
      scene.img('images/locations/city/island/university/classroom/electives/psychology/girl_feet.jpg');
      scene.text('During the short break in the middle of class, you glance over and see a girl with her bare feet up on a desk in front of a boy. You can\'t hear what they\'re saying, but he dips his head down and sniffs her feet before looking back at her. She nods at him and he starts kissing her feet which makes her smile. You notice several girls watching while giggling and grinning while many of the boys are looking on in disgus. Professor Kucherov comes back in a few seconds later and everyone gets back in their seats.');
      qspCall(s, 'arousal', 'erotic', 1);
      qspCall(s, 'arousal', 'end');
    } else {
      if (((s as any).temp ?? 0) < 6) {
        scene.img('images/locations/city/island/university/classroom/electives/psychology/girl_smoking.jpg');
        scene.text('As Professor Kucherov continues his lecture, you glance over and notice a girl bent over hiding her head from Professor Kucherov. She pulls out a cigarette and lights it up before she starts smoking it. After taking a drag, she sits back up while holding the cigarette below the desk before ducking her head back down to take another drag. She keeps repeating this until she finishes the cigarette.');
      } else {
        if (((s as any).temp ?? 0) < 8) {
          scene.img('images/locations/city/island/university/classroom/electives/psychology/girls_texting.jpg');
          scene.text('As Professor Kucherov continues his lecture, you notice the two girls sitting directly in front of you have their phones out and are texting. They occasionally show each other the text they got, causing them to giggle. After a few minutes, Professor Kucherov clears his throat loudly, but the girls don\'t stop texting and try to muffle their giggles.');
        } else {
          if (((s as any).temp ?? 0) < 10) {
            scene.img('images/locations/city/island/university/classroom/electives/psychology/uniskirtpull.jpg');
            scene.text('As class ends, all the students start leaving. Ahead of you is a boy walking with a girl when another boy suddenly runs over and grabs the hem of her dress before pulling it all the way up, showing off her thong and stockings for everyone to see. The girl squeals and jerks away, getting her dress back in place as her apparent boyfriend looks around in confusion. By the time he figures it out, the other boy has already long took off.');
            qspCall(s, 'arousal', 'erotic', 1);
            qspCall(s, 'arousal', 'end');
          } else {
            if (((s as any).temp ?? 0) === 10  &&  ((s as any).kendraQW ?? 0)?.['sub'] >= 10) {
              if (((s as any).kendraQW ?? 0)?.['dom'] >= 16) {
                qspGoto(s, 'uni_lessons_electives_psychology1', 'event_kendra');
              }
              scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra_stay.jpg');
              scene.text('The class is pretty uneventful for the most part, but you notice Kendra sitting next to a black guy whispering something to him. They don\'t seem to have noticed you.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
              scene.text('As you sit listening to the lesson, you look around hoping something interesting will happen, but nothing does.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterEventKendra(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: close all
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra_stay.jpg');
  scene.text('The class is pretty uneventful for the most part, but you notice Kendra sitting next to a black guy and occasionally looking over at you, usually followed by him looking at you. As the class goes on, his looks get more lustful. You don\'t know what she\'s telling him, but you\'re sure it\'s about you.');
  scene.text('As Professor Blagov finishes his lecture, he informs the class that he won\'t be able to stay to help anyone and if they need to ask him something, then they should come and see him in his office later or wait for the next class.');
  scene.text('With class finished, everyone gets up and heads for the exit. You glance over once more at Kendra, who motions for you to follow. Once the class clears out, she sits on the professor\'s desk while the boy leans against the desk.');
  scene.text('"What did you want, mistress?" you obediently ask.');
  scene.text('Kendra glances at the boy, then you. "I told my friend here what a good little white slave slut you are, so you\'re going to show him just how well you obey me."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    { label: 'Wait for her to answer', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra_explain.jpg');
    scene.text('Kendra glances at the boy, then you. "I told my friend here what a good little white slave slut you are, so you\'re going to show him just how well you obey me."');
    scene.text('You glance at him and notice that he\'s looking at you with lust in his eyes, so you have no doubt of what she promised him you would do. "I want you to get on your knees in front of him," she orders.');
    qspCall(st, 'willpower', 'humiliation', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'loathe');
    ((st as any).kendraQW = (st as any).kendraQW ?? {})['sub'] = ((st as any).kendraQW['sub'] ?? 0) - (1);
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra_resist.jpg');
    scene.text('You shake your head. "Sorry mistress, I can\'t... I\'m not a whore that you can just pimp out."');
    scene.text('An angry scowl appears on her face. "Listen you little fucking cunt, either get down on your knees or we\'re done!"');
    qspCall(st, 'willpower', 'humiliation', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse again', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse again', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'loathe');
    ((st as any).kendraQW = (st as any).kendraQW ?? {})['sub'] = (-1);
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra_resist.jpg');
    scene.text('You shake your head. "No! I\'m not going to let you pimp me out!"');
    scene.text('She looks even angrier beforeshe takes a deep breath. "Fine! Get the fuck out of here, you useless cunt! Don\'t come crawling back to me, we\'re done!"');
    scene.text('She gets up and walks out with the young man following her. You have a feeling you just closed a door with her that will never be reopened.');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Obey', goto: ['uni_lessons_electives_shared1', 'obey_kendra'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Obey', goto: ['uni_lessons_electives_shared1', 'obey_kendra'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'psychology_101':
      enterPsychology_101(s, scene);
      break;
    case 'psychology_101_listen':
      enterPsychology_101Listen(s, scene);
      break;
    case 'psychology_101_no_attention':
      enterPsychology_101NoAttention(s, scene);
      break;
    case 'psychology_101_talk':
      enterPsychology_101Talk(s, scene);
      break;
    case 'psychology_102':
      enterPsychology_102(s, scene);
      break;
    case 'psychology_102_listen':
      enterPsychology_102Listen(s, scene);
      break;
    case 'psychology_102_no_attention':
      enterPsychology_102NoAttention(s, scene);
      break;
    case 'psychology_102_talk':
      enterPsychology_102Talk(s, scene);
      break;
    case 'psychology_101_talk_kendra_1':
      enterPsychology_101TalkKendra_1(s, scene);
      break;
    case 'psychology_101_talk_kendra_2':
      enterPsychology_101TalkKendra_2(s, scene);
      break;
    case 'psychology_102_talk_kendra_1':
      enterPsychology_102TalkKendra_1(s, scene);
      break;
    case 'psychology_102_talk_kendra_2':
      enterPsychology_102TalkKendra_2(s, scene);
      break;
    case 'psychology_101_talk_katja':
      enterPsychology_101TalkKatja(s, scene);
      break;
    case 'psychology_102_talk_katja':
      enterPsychology_102TalkKatja(s, scene);
      break;
    case 'psychology_101_talk_vicky':
      enterPsychology_101TalkVicky(s, scene);
      break;
    case 'psychology_102_talk_vicky':
      enterPsychology_102TalkVicky(s, scene);
      break;
    case 'psychology_101_talk_albina':
      enterPsychology_101TalkAlbina(s, scene);
      break;
    case 'psychology_102_talk_albina':
      enterPsychology_102TalkAlbina(s, scene);
      break;
    case 'psychology_101_talk_mia_yana':
      enterPsychology_101TalkMiaYana(s, scene);
      break;
    case 'psychology_102_talk_mia_yana':
      enterPsychology_102TalkMiaYana(s, scene);
      break;
    case 'psychology_101_events':
      enterPsychology_101Events(s, scene);
      break;
    case 'event_kendra':
      enterEventKendra(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_lessons_electives_psychology1: LocationDef = {
  name: 'uni_lessons_electives_psychology1',
  title: 'You walk into the classroom and take a seat at one of the ta',
  region: 'other',
  enter: enter,
};
