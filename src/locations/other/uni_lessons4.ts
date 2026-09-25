import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGeneralEducation_202(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'uni_teaching_studies_semester_4', 'general education 202');
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/lecture${(Math.floor(Math.random() * 5) + 1)}.jpg`);
  scene.text('You walk into the classroom and take a seat next to a window. The rest of your classmates walk in one by one before Professor Kovalyov enters the classroom and closes the door.');
  scene.text('He then turns to the class and begins today\'s lecture.');
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
      { label: 'Listen attentively to Professor Kovalyov', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Kovalyov', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    qspCall(st, 'grades', 'class_activity_attributes', 'uni_teaching_studies_semester_4', 'general education 202', ((st as any).pcs_intel ?? 0));
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
    ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic_lessons'] = ((st as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/city/island/university/classroom/attentive${(Math.floor(Math.random() * 4) + 1)}.jpg`);
    scene.text('You listen attentively to Professor Kovalyov for the duration of the class. He manages to make today\'s lesson very interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'grades', 'class_activity_attributes', 'uni_teaching_studies_semester_4', 'general education 202', ((st as any).pcs_chrsm ?? 0));
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/question1.jpg');
    scene.text('Professor Kovalyov nods approvingly, happy to see his students engaged and trying their best. He happily spends some extra time explaining the topic again, and answers any extra questions you might have. You feel smarter, thoroughly understanding today\'s lesson now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'general_education'] },
    ]);
  } },
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'general_education'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('Professor Kovalyov\'s lecture is very dry and boring. You\'re having a hard time paying attention.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'general_education'] },
    ]);
  } },
    { label: 'Talk to a classmate', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    scene.text('As you arrive in class, you look around and decide to sit next to…');
    scene.actions([
      { label: 'Igor', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A4', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
      if (((st as any).npc_rel ?? 0)?.['A4'] >= 60) {
        scene.text('You sit next to Igor. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A4'] <= 20) {
          scene.text('You sit next to Igor, but he dismisses all of your attempts to speak with him until he tells you to leave him alone.');
        } else {
          scene.text('You sit next to Igor and try to talk to him, but he asks you to be quiet so he can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A4'] >= 60) {
        scene.text('You sit next to Igor and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A4'] <= 20) {
          scene.text('You sit next to Igor, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Igor. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'general_education'] },
    ]);
  } },
      { label: 'Christina', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 200  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 200) {
      scene.text('You sit next to Christina and try to talk to her, but all she does is give you a disgusted look before moving away.');
    } else {
      scene.text('You sit next to Christina and try to talk to her, but all she does is give you a withering look of utter hatred.');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'general_education'] },
    ]);
  } },
      { label: 'Vanya', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A165', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
      if (((st as any).npc_rel ?? 0)?.['A165'] >= 60) {
        scene.text('You sit next to Vanya. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A165'] <= 20) {
          scene.text('You sit next to Vanya, but he dismisses all of your attempts to speak with him until he tells you to leave him alone.');
        } else {
          scene.text('You sit next to Vanya and try to talk to him, but he asks you to be quiet so he can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A4'] >= 60) {
        scene.text('You sit next to Vanya and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A165'] <= 20) {
          scene.text('You sit next to Vanya, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Vanya. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'general_education'] },
    ]);
  } },
      { label: 'Katja', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A14'] >= 60) {
        scene.text('You sit next to Katja. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A14'] <= 20) {
          scene.text('You sit next to Katja, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Katja and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A14'] >= 60) {
        scene.text('You sit next to Katya and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A14'] <= 20) {
          scene.text('You sit next to Katja, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Katja. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'general_education'] },
    ]);
  } },
      { label: 'Kendra', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 250) {
      if (((st as any).npc_rel ?? 0)?.['A84'] >= 60) {
        scene.text('You sit next to Kendra. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A84'] <= 20) {
          scene.text('You sit next to Kendra, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Kendra and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A84'] >= 60) {
        scene.text('You sit next to Kendra and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A84'] <= 20) {
          scene.text('You sit next to Kendra, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Kendra. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'general_education'] },
    ]);
  } },
      { label: 'Lesco', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A7', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A7'] >= 60) {
        scene.text('You sit next to Lesco. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A7'] <= 20) {
          scene.text('You sit next to Lesco. He looks at you, but doesn\'t speak for the duration of the lesson.');
        } else {
          scene.text('You sit next to Lesco, who awkwardly puts his head down. You decide to focus on the lecture instead.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A7'] >= 60) {
        scene.text('You sit next to Lesco and spend most of the class quietly talking with each other. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A7'] <= 20) {
          scene.text('You sit next to Lesco, who awkwardly puts his head down. You decide to focus on the lecture instead.');
        } else {
          scene.text('You sit next to Lesco. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'general_education'] },
    ]);
  } },
      { label: 'Lebogang', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 300) {
      if (((st as any).npc_rel ?? 0)?.['A242'] >= 60) {
        scene.text('You sit next to Lebogang and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A242'] <= 20) {
          scene.text('You sit next to Lebogang and he gives you a look of disgust before turning and ignoring you. Despite your efforts, he keeps ignoring you until you give up.');
        } else {
          scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A242'] >= 60) {
        scene.text('You sit next to Lebogang and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A242'] <= 20) {
          scene.text('You sit next to Lebogang, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
        } else {
          scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'general_education'] },
    ]);
  } },
    ]);
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping that the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Professor Kovalyov\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'general_education'] },
      ]);
    } else {
      scene.text('You hear Professor Kovalyov clear his throat and glance up to see him sternly looking at you.');
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
    scene.img('images/locations/city/island/university/classroom/phone.jpg');
    scene.text('You ignore him and keep using your phone as he shakes his head and goes back to his lecture.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'general_education'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Professor Kovalyov then continues the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'general_education'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterLearningTheories_202(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'uni_teaching_studies_semester_4', 'learning theories 202');
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/lecture${(Math.floor(Math.random() * 5) + 1)}.jpg`);
  scene.text('You walk into the classroom and see Professor Pasternak standing by his desk as the rest of your classmates walk in one by one under his watchful eye. Some get a friendly smile while others get a stern look.');
  scene.text('Not wasting any time, he launches straight into his lecture.');
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
      { label: 'Listen attentively to Professor Pasternak', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Pasternak', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
    qspCall(st, 'grades', 'class_activity_attributes', 'uni_teaching_studies_semester_4', 'assessment 202', ((st as any).pcs_intel ?? 0));
    ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic_lessons'] = ((st as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/city/island/university/classroom/attentive${(Math.floor(Math.random() * 4) + 1)}.jpg`);
    scene.text('You listen attentively to Professor Pasternak for the duration of the class. Today\'s lesson was interesting and informative, and you feel like you\'ve learned something from taking part in the class.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 1), 'no_bonus');
    qspCall(st, 'grades', 'class_activity_attributes', 'uni_teaching_studies_semester_4', 'assessment 202', ((st as any).pcs_intel ?? 0));
    scene.img('images/locations/city/island/university/classroom/question1.jpg');
    scene.text('Professor Pasternak nods approvingly, always happy to see his students engaged in his class. He happily spends some extra time explaining the topic again, and answers any extra questions you might have. You feel smarter, thoroughly understanding today\'s lesson now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
    ]);
  } },
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('Professor Pasternak\'s lecture has fallen into a droning rhythm that has brought you, and most of your classmates, into a trance as you slowly approach the end of class.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
      { label: 'Draw dick in margin', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('Bored, you start doodling, which turns into you drawing dicks, complete with balls, in the margin. You even share your handiwork with the girl sitting next to you when she glances over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
    ]);
  } },
    ]);
  } },
    { label: 'Daydream', handler: (st: GameState) => {
    (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) + ((Math.floor(Math.random() * 4) + 2));
    scene.img(`images/locations/city/island/university/classroom/sleep${(Math.floor(Math.random() * 3) + 1)}.jpg`);
    scene.text('Professor Pasternak is lecturing the class about exotic locations around the world. You close your eyes as you start to fantasize about these places.');
    scene.text('You suddenly find yourself standing in front of a group of people with a globe. They tell you that you\'re free to spin it and you\'ll get to travel where it stops for free.');
    scene.text('Full of enthusiasm, you spin it and have a hard time deciding when to stop it. When you finally decide, you notice a familiar name. Pavlovsk. To your dismay, you\'ve picked your hometown. You desperately look around seeking attention, but get no response.');
    scene.text('Just as you\'re about to speak up and plead with the group, the bell rings, startling you awake.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
    ]);
  } },
    { label: 'Talk to a classmate', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    scene.text('As you arrive in class, you look around and decide to sit next to…');
    scene.actions([
      { label: 'Igor', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A4', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
      if (((st as any).npc_rel ?? 0)?.['A4'] >= 60) {
        scene.text('You sit next to Igor. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A4'] <= 20) {
          scene.text('You sit next to Igor, but he dismisses all of your attempts to speak with him until he tells you to leave him alone.');
        } else {
          scene.text('You sit next to Igor and try to talk to him, but he asks you to be quiet so he can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A4'] >= 60) {
        scene.text('You sit next to Igor and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A4'] <= 20) {
          scene.text('You sit next to Igor, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Igor. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
    ]);
  } },
      { label: 'Christina', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 200  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 200) {
      scene.text('You sit next to Christina and try to talk to her, but all she does is give you a disgusted look before moving away.');
    } else {
      scene.text('You sit next to Christina and try to talk to her, but all she does is give you a withering look of utter hatred.');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
    ]);
  } },
      { label: 'Vanya', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A165', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
      if (((st as any).npc_rel ?? 0)?.['A165'] >= 60) {
        scene.text('You sit next to Vanya. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A165'] <= 20) {
          scene.text('You sit next to Vanya, but he dismisses all of your attempts to speak with him until he tells you to leave him alone.');
        } else {
          scene.text('You sit next to Vanya and try to talk to him, but he asks you to be quiet so he can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A4'] >= 60) {
        scene.text('You sit next to Vanya and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A165'] <= 20) {
          scene.text('You sit next to Vanya, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Vanya. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
    ]);
  } },
      { label: 'Katja', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A14'] >= 60) {
        scene.text('You sit next to Katja. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A14'] <= 20) {
          scene.text('You sit next to Katja, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Katja and you try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A14'] >= 60) {
        scene.text('You sit next to Katya and spend most of the class quietly talking with each other. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A14'] <= 20) {
          scene.text('You sit next to Katja, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Katja. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
    ]);
  } },
      { label: 'Kendra', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 250) {
      if (((st as any).npc_rel ?? 0)?.['A84'] >= 60) {
        scene.text('You sit next to Kendra. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A84'] <= 20) {
          scene.text('You sit next to Kendra, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Kendra and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A84'] >= 60) {
        scene.text('You sit next to Kendra and spend most of the class quietly talking with each other. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A84'] <= 20) {
          scene.text('You sit next to Kendra, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Kendra. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
    ]);
  } },
      { label: 'Lesco', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A7', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A7'] >= 60) {
        scene.text('You sit next to Lesco. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A7'] <= 20) {
          scene.text('You sit next to Lesco. He looks at you, but doesn\'t speak for the duration of the lesson.');
        } else {
          scene.text('You sit next to Lesco, who awkwardly puts his head down. You decide to focus on the lecture instead.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A7'] >= 60) {
        scene.text('You sit next to Lesco and spend most of the class quietly talking with each other. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A7'] <= 20) {
          scene.text('You sit next to Lesco, who awkwardly puts his head down. You decide to focus on the lecture instead.');
        } else {
          scene.text('You sit next to Lesco. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
    ]);
  } },
      { label: 'Lebogang', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 300) {
      if (((st as any).npc_rel ?? 0)?.['A242'] >= 60) {
        scene.text('You sit next to Lebogang and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A242'] <= 20) {
          scene.text('You sit next to Lebogang, who gives you a look of disgust and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
        } else {
          scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A242'] >= 60) {
        scene.text('You sit next to Lebogang and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A242'] <= 20) {
          scene.text('You sit next to Lebogang, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
        } else {
          scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
    ]);
  } },
    ]);
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Professor Pasternak\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
      ]);
    } else {
      scene.text('You hear Professor Pasternak clear his throat and glance up to see his looking at you sternly.');
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
    scene.img('images/locations/city/island/university/classroom/phone.jpg');
    scene.text('You ignore him and continue using your phone. Professor Pasternak shakes his head disapprovingly and continues the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Professor Pasternak shakes his head disapprovingly and continues the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'learning_theories'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterPsychologyOfAStudent_201(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'uni_teaching_studies_semester_4', 'psychology of a student 201');
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/lecture${(Math.floor(Math.random() * 5) + 1)}.jpg`);
  scene.text('You walk into the classroom and see Professor Kovalchuk sitting behind her desk. The rest of your classmates walk in one by one and she smiles at each one as they enter.');
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
      { label: 'Listen attentively to Professor Kovalchuk', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Kovalchuk', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
    qspCall(st, 'grades', 'class_activity_attributes', 'uni_teaching_studies_semester_4', 'psychology of a student 201', ((st as any).pcs_intel ?? 0));
    ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic_lessons'] = ((st as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/city/island/university/classroom/attentive${(Math.floor(Math.random() * 4) + 1)}.jpg`);
    scene.text('You listen attentively to Professor Kovalchuk for the duration of the class. Today\'s lesson was interesting and informative, and you feel like you\'ve learned something from taking part in the class.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 1), 'no_bonus');
    qspCall(st, 'grades', 'class_activity_attributes', 'uni_teaching_studies_semester_4', 'psychology of a student 201', ((st as any).pcs_intel ?? 0));
    scene.img('images/locations/city/island/university/classroom/attentive4.jpg');
    scene.text('Professor Kovalchuk nods approvingly, always happy to see her students engaged in her class. She happily spends some extra time explaining the topic again, and answers any extra questions you might have. You feel smarter, thoroughly understanding today\'s lesson now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
    ]);
  } },
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('Professor Kovalchuk\'s lecture has fallen into a droning rhythm that has brought you, and most of your classmates, into a trance as you slowly approach the end of the class.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
      { label: 'Draw dick in margin', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('Bored, you start doodling, which turns into you drawing dicks, complete with balls, in the margin. You even share your handiwork with the girl sitting next to you when she glances over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
    ]);
  } },
    ]);
  } },
    { label: 'Talk to a classmate', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    scene.text('As you arrive in class, you look around and decide to sit next to…');
    scene.actions([
      { label: 'Igor', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A4', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
      if (((st as any).npc_rel ?? 0)?.['A4'] >= 60) {
        scene.text('You sit next to Igor. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A4'] <= 20) {
          scene.text('You sit next to Igor, but he dismisses all of your attempts to speak with him until he tells you to leave him alone.');
        } else {
          scene.text('You sit next to Igor and try to talk to him, but he asks you to be quiet so he can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A4'] >= 60) {
        scene.text('You sit next to Igor and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A4'] <= 20) {
          scene.text('You sit next to Igor, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Igor. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
    ]);
  } },
      { label: 'Christina', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 200  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 200) {
      scene.text('You sit next to Christina and try to talk to her, but all she does is give you a disgusted look before moving away.');
    } else {
      scene.text('You sit next to Christina and try to talk to her, but all she does is give you a withering look of utter hatred.');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
    ]);
  } },
      { label: 'Vanya', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A165', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
      if (((st as any).npc_rel ?? 0)?.['A165'] >= 60) {
        scene.text('You sit next to Vanya. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A165'] <= 20) {
          scene.text('You sit next to Vanya, but he dismisses all of your attempts to speak with him until he tells you to leave him alone.');
        } else {
          scene.text('You sit next to Vanya and try to talk to him, but he asks you to be quiet so he can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A4'] >= 60) {
        scene.text('You sit next to Vanya and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A165'] <= 20) {
          scene.text('You sit next to Vanya, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Vanya. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
    ]);
  } },
      { label: 'Katja', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A14'] >= 60) {
        scene.text('You sit next to Katja. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A14'] <= 20) {
          scene.text('You sit next to Katja, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Katja and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A14'] >= 60) {
        scene.text('You sit next to Katya and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A14'] <= 20) {
          scene.text('You sit next to Katja, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Katja. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
    ]);
  } },
      { label: 'Kendra', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 250) {
      if (((st as any).npc_rel ?? 0)?.['A84'] >= 60) {
        scene.text('You sit next to Kendra. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A84'] <= 20) {
          scene.text('You sit next to Kendra, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Kendra and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A84'] >= 60) {
        scene.text('You sit next to Kendra and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A84'] <= 20) {
          scene.text('You sit next to Kendra, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Kendra. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
    ]);
  } },
      { label: 'Lesco', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A7', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A7'] >= 60) {
        scene.text('You sit next to Lesco. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A7'] <= 20) {
          scene.text('You sit next to Lesco. He looks at you, but doesn\'t speak for the duration of the lesson.');
        } else {
          scene.text('You sit next to Lesco, who awkwardly puts his head down. You decide to focus on the lecture instead.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A7'] >= 60) {
        scene.text('You sit next to Lesco and spend most of the class quietly talking with each other. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A7'] <= 20) {
          scene.text('You sit next to Lesco, who awkwardly puts his head down. You decide to focus on the lecture instead.');
        } else {
          scene.text('You sit next to Lesco. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
    ]);
  } },
      { label: 'Lebogang', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 300) {
      if (((st as any).npc_rel ?? 0)?.['A242'] >= 60) {
        scene.text('You sit next to Lebogang and spend most of the class quietly talking with them. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A242'] <= 20) {
          scene.text('You sit next to Lebogang, who gives you a look of disgust and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
        } else {
          scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A242'] >= 60) {
        scene.text('You sit next to Lebogang and you spend most of the class talking quietly with each other.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A242'] <= 20) {
          scene.text('You sit next to Lebogang, who frowns as you sit down and proceeds to ignore you. Despite your efforts, he keeps ignoring you until you give up.');
        } else {
          scene.text('You sit next to Lebogang and start talking to him. He\'s more interested in the lesson than you, but slowly starts to respond to you as he takes notes.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
    ]);
  } },
    ]);
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 4) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Professor Kovalchuk\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
      ]);
    } else {
      scene.text('You hear Professor Kovalchuk clear her throat and glance up to see her looking at you sternly.');
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
    scene.img('images/locations/city/island/university/classroom/phone.jpg');
    scene.text('You ignore her and continue using your phone as she shakes her head and continues her lecture.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Professor Kovalchuk shakes her head disapprovingly and continues the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'psychology_of_a_student_201'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterPatientCare_202(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'uni_nursing_semester_4', 'patient care 202');
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'exp_gain', 'medcn', 5);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/lecture${(Math.floor(Math.random() * 5) + 1)}.jpg`);
  scene.text('You walk into the classroom and see Professor Kudelina standing by her desk as the rest of your classmates walk in one by one under her watchful eye, all of them getting a stern look.');
  scene.text('Not wasting any time, she launches straight into her lecture.');
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
      { label: 'Listen attentively to Professor Kudelina', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Kudelina', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    qspCall(st, 'grades', 'class_activity_attributes', 'uni_nursing_semester_4', 'patient care 202', ((st as any).pcs_intel ?? 0));
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
    ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic_lessons'] = ((st as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/city/island/university/classroom/attentive${(Math.floor(Math.random() * 4) + 1)}.jpg`);
    scene.text('You listen attentively to Professor Kudelina for the duration of the class. She manages to make today\'s lesson very interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'grades', 'class_activity_attributes', 'uni_nursing_semester_4', 'patient care 202', ((st as any).pcs_chrsm ?? 0));
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/question1.jpg');
    scene.text('Professor Kudelina sighs dismissively and states that you should have paid attention to the lesson, but she begrudgingly spends some time explaining the topic again before answering your questions. Despite her attitude, you feel smarter, thoroughly understanding today\'s lesson now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev1', 'patient_care'] },
    ]);
  } },
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'patient_care'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('Professor Kudelina\'s lecture is very dry and boring. You\'re having a hard time paying attention, especially when she goes off on a rant about young people.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'patient_care'] },
    ]);
  } },
    { label: 'Talk to a classmate', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    scene.text('As you arrive in class, you look around and decide to sit next to…');
    scene.actions([
      { label: 'Albina', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
      if (((st as any).npc_rel ?? 0)?.['A23'] >= 70) {
        scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A23'] <= 20) {
          scene.text('You\'re about to sit next to Albina when she glares up at you. "Don\'t even think about it, you fucking cum rag."');
        } else {
          scene.text('You sit next to Albina and try to talk to her, but she brushes you off and focuses on the lecture instead.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A23'] >= 60) {
        scene.text('You sit next to Albina and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A23'] <= 20) {
          scene.text('You sit next to Albina, but she ignores all of your attempts to speak with her and pays attention to the class instead.');
        } else {
          scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'patient_care'] },
    ]);
  } },
      { label: 'Lariska', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A13', 'like');
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 200  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 200) {
      if (((st as any).npc_rel ?? 0)?.['A13'] >= 60) {
        scene.text('You sit next to Lariska. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A13'] <= 20) {
          scene.text('You sit next to Lariska, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Lariska and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A13'] >= 60) {
        scene.text('You sit next to Lariska and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A13'] <= 20) {
          scene.text('You sit next to Lariska, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Lariska. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'patient_care'] },
    ]);
  } },
      { label: 'Vicky', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A15', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A15'] >= 60) {
        scene.text('You sit next to Vicky. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A15'] <= 20) {
          scene.text('You sit next to Vicky, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Vicky and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A15'] >= 60) {
        scene.text('You sit next to Vicky and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A15'] <= 20) {
          scene.text('You sit next to Vicky, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Vicky. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'patient_care'] },
    ]);
  } },
      { label: 'Mia and Yana', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A267', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A268', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A267'] >= 60  &&  ((st as any).npc_rel ?? 0)?.['A268'] >= 60) {
        scene.text('You sit next to Mia and Yana. They\'re a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with them before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A267'] <= 20  &&  ((st as any).npc_rel ?? 0)?.['A268'] <= 20) {
          scene.text('You approach the twins, who immediately glare at you in disgust. "Ugh, what could this filthy slut want with us?" one of them asks in an annoyed tone.');
          scene.text('"I don\'t know, but I bet she still has cum from her last fuck dripping out of her dirty pussy," the other replies and they both burst into laughter.');
        } else {
          if ((((st as any).npc_rel ?? 0)?.['A267'] > 20  &&  ((st as any).npc_rel ?? 0)?.['A267'] < 60)  &&  (((st as any).npc_rel ?? 0)?.['A268'] > 20  &&  ((st as any).npc_rel ?? 0)?.['A268'] < 60)) {
            scene.text('You sit next to Mia and Yana and briefly speak with them before one of them has an idea about a prank they can pull on someone they know, at which point they start giggling amongst themselves.');
          }
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A267'] >= 60  &&  ((st as any).npc_rel ?? 0)?.['A268'] >= 60) {
        scene.text('You sit next to Mia and Yana and spend most of the class quietly talking with them. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A267'] <= 20  &&  ((st as any).npc_rel ?? 0)?.['A268'] <= 20) {
          scene.text('You sit next to Mia and Yana and try to talk to them, but they just ignore you and chat and giggle amongst themselves, trying to think of a prank they can pull on Professor Kudelina instead.');
        } else {
          if ((((st as any).npc_rel ?? 0)?.['A267'] > 20  &&  ((st as any).npc_rel ?? 0)?.['A267'] < 60)  &&  (((st as any).npc_rel ?? 0)?.['A268'] > 20  &&  ((st as any).npc_rel ?? 0)?.['A268'] < 60)) {
            scene.text('You sit next to Mia and Yana. They\'re a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with them before a fellow student asks you to be quiet.');
          }
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'patient_care'] },
    ]);
  } },
      { label: 'Sofia', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A260', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A260'] >= 60) {
        scene.text('You sit next to Sofia. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A260'] <= 20) {
          scene.text('You sit next to Sofia, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Sofia and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A260'] >= 60) {
        scene.text('You sit next to Sofia and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A260'] <= 20) {
          scene.text('You sit next to Sofia, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Sofia. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'patient_care'] },
    ]);
  } },
    ]);
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping that the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Professor Kudelina\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'patient_care'] },
      ]);
    } else {
      scene.text('You hear Professor Kudelina clear her throat and glance up to see her sternly glaring at you.');
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
    scene.img('images/locations/city/island/university/classroom/phone.jpg');
    scene.text('You ignore her and keep using your phone as she scoffs at you. "Texting boys instead of paying attention, are we? Go ahead. You\'ll likely be a whore sucking dick for a living when you fail your exams," she huffs before turning around and continuing her lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'patient_care'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Professor Kudelina scoffs in annoyance before she continues the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev1', 'patient_care'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterAnatomyAndPhysiology_202(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'uni_nursing_semester_4', 'anatomy and physiology 202');
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'exp_gain', 'medcn', 5);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/lecture${(Math.floor(Math.random() * 5) + 1)}.jpg`);
  scene.text('You walk into the classroom and see Professor Marinova sitting behind her desk. The rest of your classmates walk in one by one and she smiles at each one as they enter.');
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
      { label: 'Listen attentively to Professor Marinova', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Marinova', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    qspCall(st, 'grades', 'class_activity_attributes', 'uni_nursing_semester_4', 'anatomy and physiology 202', ((st as any).pcs_intel ?? 0));
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
    ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic_lessons'] = ((st as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/city/island/university/classroom/attentive${(Math.floor(Math.random() * 4) + 1)}.jpg`);
    scene.text('You listen attentively to Professor Marinova for the duration of the class. She manages to make today\'s lesson very interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'grades', 'class_activity_attributes', 'uni_nursing_semester_4', 'anatomy and physiology 202', ((st as any).pcs_chrsm ?? 0));
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/question1.jpg');
    scene.text('Professor Marinova nods approvingly, happy to see her students engaged and trying their best. She happily spends some extra time explaining the topic again, and answers any extra questions you might have. You feel smarter, thoroughly understanding today\'s lesson now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev1', 'anatomy_and_physiology'] },
    ]);
  } },
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'anatomy_and_physiology'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('Despite her best efforts to make it interesting, Professor Marinova\'s lecture is very dry and boring. You\'re having a hard time paying attention.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'anatomy_and_physiology'] },
    ]);
  } },
    { label: 'Talk to a classmate', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    scene.text('As you arrive in class, you look around and decide to sit next to…');
    scene.actions([
      { label: 'Albina', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
      if (((st as any).npc_rel ?? 0)?.['A23'] >= 70) {
        scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A23'] <= 20) {
          scene.text('You\'re about to sit next to Albina when she glares up at you. "Don\'t even think about it, you fucking cum rag."');
        } else {
          scene.text('You sit next to Albina and try to talk to her, but she brushes you off and focuses on the lecture instead.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A23'] >= 60) {
        scene.text('You sit next to Albina and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A23'] <= 20) {
          scene.text('You sit next to Albina, but she ignores all of your attempts to speak with her and pays attention to the class instead.');
        } else {
          scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'anatomy_and_physiology'] },
    ]);
  } },
      { label: 'Lariska', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A13', 'like');
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 200  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 200) {
      if (((st as any).npc_rel ?? 0)?.['A13'] >= 60) {
        scene.text('You sit next to Lariska. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A13'] <= 20) {
          scene.text('You sit next to Lariska, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Lariska and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A13'] >= 60) {
        scene.text('You sit next to Lariska and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A13'] <= 20) {
          scene.text('You sit next to Lariska, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Lariska. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'anatomy_and_physiology'] },
    ]);
  } },
      { label: 'Vicky', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A15', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A15'] >= 60) {
        scene.text('You sit next to Vicky. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A15'] <= 20) {
          scene.text('You sit next to Vicky, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Vicky and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A15'] >= 60) {
        scene.text('You sit next to Vicky and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A15'] <= 20) {
          scene.text('You sit next to Vicky, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Vicky. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'anatomy_and_physiology'] },
    ]);
  } },
      { label: 'Mia and Yana', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A267', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A268', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A267'] >= 60  &&  ((st as any).npc_rel ?? 0)?.['A268'] >= 60) {
        scene.text('You sit next to Mia and Yana. They\'re a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with them before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A267'] <= 20  &&  ((st as any).npc_rel ?? 0)?.['A268'] <= 20) {
          scene.text('You approach the twins, who immediately glare at you in disgust. "Ugh, what could this filthy slut want with us?" one of them asks in an annoyed tone.');
          scene.text('"I don\'t know, but I bet she still has cum from her last fuck dripping out of her dirty pussy," the other replies and they both burst into laughter.');
        } else {
          if ((((st as any).npc_rel ?? 0)?.['A267'] > 20  &&  ((st as any).npc_rel ?? 0)?.['A267'] < 60)  &&  (((st as any).npc_rel ?? 0)?.['A268'] > 20  &&  ((st as any).npc_rel ?? 0)?.['A268'] < 60)) {
            scene.text('You sit next to Mia and Yana and briefly speak with them before one of them has an idea about a prank they can pull on someone they know, at which point they start giggling amongst themselves.');
          }
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A267'] >= 60  &&  ((st as any).npc_rel ?? 0)?.['A268'] >= 60) {
        scene.text('You sit next to Mia and Yana and spend most of the class quietly talking with them. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A267'] <= 20  &&  ((st as any).npc_rel ?? 0)?.['A268'] <= 20) {
          scene.text('You sit next to Mia and Yana and try to talk to them, but they just ignore you and chat and giggle amongst themselves, trying to think of a prank they can pull on Professor Marinova instead.');
        } else {
          if ((((st as any).npc_rel ?? 0)?.['A267'] > 20  &&  ((st as any).npc_rel ?? 0)?.['A267'] < 60)  &&  (((st as any).npc_rel ?? 0)?.['A268'] > 20  &&  ((st as any).npc_rel ?? 0)?.['A268'] < 60)) {
            scene.text('You sit next to Mia and Yana. They\'re a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with them before a fellow student asks you to be quiet.');
          }
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'anatomy_and_physiology'] },
    ]);
  } },
      { label: 'Sofia', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A260', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A260'] >= 60) {
        scene.text('You sit next to Sofia. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A260'] <= 20) {
          scene.text('You sit next to Sofia, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Sofia and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A260'] >= 60) {
        scene.text('You sit next to Sofia and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A260'] <= 20) {
          scene.text('You sit next to Sofia, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Sofia. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'anatomy_and_physiology'] },
    ]);
  } },
    ]);
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping that the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Professor Marinova\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'anatomy_and_physiology'] },
      ]);
    } else {
      scene.text('You hear Professor Marinova clear her throat and glance up to see her sternly looking at you.');
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
    scene.img('images/locations/city/island/university/classroom/phone.jpg');
    scene.text('You ignore her and keep using your phone as she shakes her head and goes back to her lecture.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev1', 'anatomy_and_physiology'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Professor Marinova then continues the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'anatomy_and_physiology'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterDosagesAndPharmaceuticals_102(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'uni_nursing_semester_4', 'dosages and pharmaceuticals 102');
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
  qspCall(s, 'exp_gain', 'medcn', 5);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/lecture${(Math.floor(Math.random() * 5) + 1)}.jpg`);
  scene.text('You walk into the classroom and take a seat next to a window. The rest of your classmates walk in one by one before Professor Borisov enters the classroom and closes the door.');
  scene.text('He then turns to the class and begins today\'s lecture.');
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
      { label: 'Listen attentively to Professor Borisov', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Professor Borisov', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    qspCall(st, 'grades', 'class_activity_attributes', 'uni_nursing_semester_4', 'dosages and pharmaceuticals 102', ((st as any).pcs_intel ?? 0));
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0), 'no_bonus');
    ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic_lessons'] = ((st as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/city/island/university/classroom/attentive${(Math.floor(Math.random() * 4) + 1)}.jpg`);
    scene.text('You listen attentively to Professor Borisov for the duration of the class. He somehow manages to make today\'s lesson very interesting and informative, and you feel like you\'ve learned something from actively taking part in the discussion.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(st, 'grades', 'class_activity_attributes', 'uni_nursing_semester_4', 'dosages and pharmaceuticals 102', ((st as any).pcs_chrsm ?? 0));
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/question1.jpg');
    scene.text('Professor Borisov spends some extra time explaining the topic again, and answers any extra questions you might have. You feel smarter, thoroughly understanding today\'s lesson now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'dosages_and_pharmaceuticals'] },
    ]);
  } },
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'dosages_and_pharmaceuticals'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t pay attention', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('As per usual, Professor Borisov\'s lecture is very dry and boring. You\'re having a hard time paying attention as he describes things in painfully excessive detail.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'dosages_and_pharmaceuticals'] },
    ]);
  } },
    { label: 'Talk to a classmate', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    scene.text('As you arrive in class, you look around and decide to sit next to…');
    scene.actions([
      { label: 'Albina', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
      if (((st as any).npc_rel ?? 0)?.['A23'] >= 70) {
        scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A23'] <= 20) {
          scene.text('You\'re about to sit next to Albina when she glares up at you. "Don\'t even think about it, you fucking cum rag."');
        } else {
          scene.text('You sit next to Albina and try to talk to her, but she brushes you off and focuses on the lecture instead.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A23'] >= 60) {
        scene.text('You sit next to Albina and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A23'] <= 20) {
          scene.text('You sit next to Albina, but she ignores all of your attempts to speak with her and pays attention to the class instead.');
        } else {
          scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'dosages_and_pharmaceuticals'] },
    ]);
  } },
      { label: 'Lariska', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A13', 'like');
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 200  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 200) {
      if (((st as any).npc_rel ?? 0)?.['A13'] >= 60) {
        scene.text('You sit next to Lariska. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A13'] <= 20) {
          scene.text('You sit next to Lariska, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Lariska and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A13'] >= 60) {
        scene.text('You sit next to Lariska and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A13'] <= 20) {
          scene.text('You sit next to Lariska, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Lariska. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'dosages_and_pharmaceuticals'] },
    ]);
  } },
      { label: 'Vicky', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A15', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A15'] >= 60) {
        scene.text('You sit next to Vicky. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A15'] <= 20) {
          scene.text('You sit next to Vicky, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Vicky and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A15'] >= 60) {
        scene.text('You sit next to Vicky and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A15'] <= 20) {
          scene.text('You sit next to Vicky, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Vicky. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'dosages_and_pharmaceuticals'] },
    ]);
  } },
      { label: 'Mia and Yana', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A267', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A268', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A267'] >= 60  &&  ((st as any).npc_rel ?? 0)?.['A268'] >= 60) {
        scene.text('You sit next to Mia and Yana. They\'re a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with them before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A267'] <= 20  &&  ((st as any).npc_rel ?? 0)?.['A268'] <= 20) {
          scene.text('You approach the twins, who immediately glare at you in disgust. "Ugh, what could this filthy slut want with us?" one of them asks in an annoyed tone.');
          scene.text('"I don\'t know, but I bet she still has cum from her last fuck dripping out of her dirty pussy," the other replies and they both burst into laughter.');
        } else {
          if ((((st as any).npc_rel ?? 0)?.['A267'] > 20  &&  ((st as any).npc_rel ?? 0)?.['A267'] < 60)  &&  (((st as any).npc_rel ?? 0)?.['A268'] > 20  &&  ((st as any).npc_rel ?? 0)?.['A268'] < 60)) {
            scene.text('You sit next to Mia and Yana and briefly speak with them before one of them has an idea about a prank they can pull on someone they know, at which point they start giggling amongst themselves.');
          }
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A267'] >= 60  &&  ((st as any).npc_rel ?? 0)?.['A268'] >= 60) {
        scene.text('You sit next to Mia and Yana and spend most of the class quietly talking with them. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A267'] <= 20  &&  ((st as any).npc_rel ?? 0)?.['A268'] <= 20) {
          scene.text('You sit next to Mia and Yana and try to talk to them, but they just ignore you and chat and giggle amongst themselves, trying to think of a prank they can pull on Professor Borisov instead.');
        } else {
          if ((((st as any).npc_rel ?? 0)?.['A267'] > 20  &&  ((st as any).npc_rel ?? 0)?.['A267'] < 60)  &&  (((st as any).npc_rel ?? 0)?.['A268'] > 20  &&  ((st as any).npc_rel ?? 0)?.['A268'] < 60)) {
            scene.text('You sit next to Mia and Yana. They\'re a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with them before a fellow student asks you to be quiet.');
          }
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'dosages_and_pharmaceuticals'] },
    ]);
  } },
      { label: 'Sofia', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A260', 'like');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/city/island/university/classroom/talk.jpg');
    if (((st as any).fame ?? 0)?.['city_slut'] >= 150) {
      if (((st as any).npc_rel ?? 0)?.['A260'] >= 60) {
        scene.text('You sit next to Sofia. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A260'] <= 20) {
          scene.text('You sit next to Sofia, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
        } else {
          scene.text('You sit next to Sofia and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        }
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A260'] >= 60) {
        scene.text('You sit next to Sofia and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A260'] <= 20) {
          scene.text('You sit next to Sofia, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
        } else {
          scene.text('You sit next to Sofia. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'dosages_and_pharmaceuticals'] },
    ]);
  } },
    ]);
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping that the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Professor Borisov\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'dosages_and_pharmaceuticals'] },
      ]);
    } else {
      scene.text('You hear Professor Borisov quietly clear his throat and glance up to see him looking at you with his best attempt to look stern.');
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
    scene.img('images/locations/city/island/university/classroom/phone.jpg');
    scene.text('You ignore him and keep using your phone. He watches you in defeat before going back to his lecture.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'dosages_and_pharmaceuticals'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Professor Borisov then continues the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessonsev2', 'dosages_and_pharmaceuticals'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'general_education_202':
      enterGeneralEducation_202(s, scene);
      break;
    case 'learning_theories_202':
      enterLearningTheories_202(s, scene);
      break;
    case 'psychology_of_a_student_201':
      enterPsychologyOfAStudent_201(s, scene);
      break;
    case 'patient_care_202':
      enterPatientCare_202(s, scene);
      break;
    case 'anatomy_and_physiology_202':
      enterAnatomyAndPhysiology_202(s, scene);
      break;
    case 'dosages_and_pharmaceuticals_102':
      enterDosagesAndPharmaceuticals_102(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_lessons4: LocationDef = {
  name: 'uni_lessons4',
  title: 'You walk into the classroom and take a seat next to a window',
  region: 'other',
  enter: enter,
};
