import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterArt_101(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'agil', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'exp_gain', 'artskls', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
  if (((s as any).university ?? 0)?.['first_visit_art_101']) {
    scene.text('You walk into the classroom and see Professor Ilyushin standing by his desk as the rest of your classmates walk in one-by-one under his watchful eye. You notice his eyes linger a bit longer on some of the prettier girls that are dressed in revealing clothes.');
    scene.text('Once everyone is seated, he starts talking about art and what it means while being his usual friendly and overly chatty self. He seems very passionate about art and not only loves to draw and paint, but discuss what art means, as well as its effects and history in the world.');
  } else {
    ((s as any).university = (s as any).university ?? {})['first_visit_art_101'] = 1;
    scene.text('You walk into the classroom and see a middle aged, slightly pudgy looking man with an unattractive face and receding hairline standing by his desk as the rest of your classmates walk in one-by-one under his watchful eye. You notice his eyes linger a bit longer on some of the prettier girls that are dressed in revealing clothes.');
    scene.text('Once everyone is seated, he introduces himself. "I\'m Professor Ilyushin and I\'m going to take you on a wonder adventure in this class. I will be showing you the wonders, amazement and titillation that art can bring to the human soul, as well as how art can evoke some of your baser instincts and desires."');
    scene.text('With that over, he starts talking about art. He seems very passionate about the subject and not only loves to draw and paint, but discusses what art means, as well as its effects and history in the world.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Pay attention in class', goto: ['uni_lessons_electives_art1', 'art_101_listen'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_art1', 'art_101_talk'] },
  ]);
  scene.build();
}

function enterArt_101Listen(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/city/island/university/classroom/attentive${Math.floor(Math.random() * 4) + 1}.jpg`);
  scene.text('Professor Ilyushin\'s lecture is fairly entertaining and you have an easy time paying attention to it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_art1', 'art_101_model'] },
  ]);
  scene.build();
}

function enterArt_101Talk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('As you arrive in class, you look around and decide to sit next to…');
  if (((s as any).ErmiasQW ?? 0)?.['meet'] === 0) {
    scene.actions([
      { label: 'The black guy', handler: (st: GameState) => {
    ((s as any).ErmiasQW = (s as any).ErmiasQW ?? {})['meet'] = 1;
    qspGoto(s, 'uni_lessons_electives_art1', 'art_101_talk_ermias_1');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Ermias', goto: ['uni_lessons_electives_art1', 'art_101_talk_ermias_2'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Igor', goto: ['uni_lessons_electives_art1', 'art_101_talk_igor'] },
    { label: 'Feofan', goto: ['uni_lessons_electives_art1', 'art_101_talk_feofan'] },
    { label: 'Natasha', goto: ['uni_lessons_electives_art1', 'art_101_talk_natasha'] },
  ]);
  scene.build();
}

function enterArt_102(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'agil', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'exp_gain', 'artskls', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
  scene.text('You walk into the classroom and see Professor Ilyushin standing by his desk as the rest of your classmates walk in one by one under his watchful eye. You notice his eyes linger a bit longer on some of the prettier girls that are dressed in revealing clothes.');
  scene.text('Once everyone is seated, he starts talking about art and what it means while being his usual friendly and overly chatty self. He seems very passionate about art and not only loves to draw and paint, but discuss what art means and it\'s history in the world.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pay attention in class', goto: ['uni_lessons_electives_art1', 'art_102_listen'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_art1', 'art_102_talk'] },
  ]);
  scene.build();
}

function enterArt_102Listen(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/city/island/university/classroom/attentive${Math.floor(Math.random() * 4) + 1}.jpg`);
  scene.text('Professor Ilyushin\'s lecture is fairly entertaining and you have an easy time paying attention.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_art1', 'art_102_model'] },
  ]);
  scene.build();
}

function enterArt_102Talk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('As you arrive in class, you look around and decide to sit next to…');
  if (((s as any).ErmiasQW ?? 0)?.['meet'] === 0) {
    scene.actions([
      { label: 'The black guy', handler: (st: GameState) => {
    ((s as any).ErmiasQW = (s as any).ErmiasQW ?? {})['meet'] = 1;
    qspGoto(s, 'uni_lessons_electives_art1', 'art_102_talk_ermias_1');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Ermias', goto: ['uni_lessons_electives_art1', 'art_102_talk_ermias_2'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Igor', goto: ['uni_lessons_electives_art1', 'art_102_talk_igor'] },
    { label: 'Feofan', goto: ['uni_lessons_electives_art1', 'art_102_talk_feofan'] },
    { label: 'Natasha', goto: ['uni_lessons_electives_art1', 'art_102_talk_natasha'] },
  ]);
  scene.build();
}

function enterArt_101TalkIgor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A1', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 250  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
    if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
      scene.text('You sit next to Igor who tries to ignore your attempts to talk with him. "Will you please be quiet so I can focus on the class?"');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A4'] < 60) {
        scene.text('You sit next to Igor, who does talks to you, but seems far more focused on what the professor is saying than you.');
      } else {
        scene.text('You sit next to Igor and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
      scene.text('You sit next to Igor, who glances at you with disgust before getting up and moving away.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A4'] < 60) {
        scene.text('You sit next to Igor, but he tells you not to distract him and ignores you.');
      } else {
        scene.text('You sit next to Igor. He\'s polite, but seems more focused on the class than wanting to talk to you.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_art1', 'art_101_model_igor'] },
  ]);
  scene.build();
}

function enterArt_102TalkIgor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A1', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).fame ?? 0)?.['city_slut'] < 250  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
    if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
      scene.text('You sit next to Igor who tries to ignore your attempts to talk with him. "Will you please be quiet so I can focus on the class?"');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A4'] < 60) {
        scene.text('You sit next to Igor, who does talks to you, but seems far more focused on what the professor is saying than you.');
      } else {
        scene.text('You sit next to Igor and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
      scene.text('You sit next to Igor, who glances at you with disgust before getting up and moving away.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A4'] < 60) {
        scene.text('You sit next to Igor, but he tells you not to distract him and ignores you.');
      } else {
        scene.text('You sit next to Igor. He\'s polite, but seems more focused on the class than wanting to talk to you.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_art1', 'art_102_model_igor'] },
  ]);
  scene.build();
}

function enterArt_101TalkFeofan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A152', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A152'] <= 20) {
    scene.text('You sit next to Feofan, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you and paying attention to the class instead.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A152'] < 60) {
      scene.text('You sit next to Feofan. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
    } else {
      scene.text('You sit next to Feofan and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_art1', 'art_101_model_feofan'] },
  ]);
  scene.build();
}

function enterArt_102TalkFeofan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A152', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).npc_rel ?? 0)?.['A152'] <= 20) {
    scene.text('You sit next to Feofan, but he dismisses all of your attempts to speak with him and spends the lesson ignoring you and paying attention to the class instead.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A152'] < 60) {
      scene.text('You sit next to Feofan. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
    } else {
      scene.text('You sit next to Feofan and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_art1', 'art_102_model_feofan'] },
  ]);
  scene.build();
}

function enterArt_101TalkNatasha(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A16', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).NatbelQW ?? 0)?.['Lover'] >= 2) {
    scene.text('You sit next to Natasha and quietly chat about various topics, but mainly concentrate on the lecture as you know it\'ll help her with her career. You keep your voices down and ensure you don\'t interrupt the lecture.');
  } else {
    if (((s as any).fame ?? 0)?.['city_slut'] < 175  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 175) {
      if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
        scene.text('You sit next to Natasha, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A16'] < 60) {
          scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        } else {
          scene.text('You sit next to Natasha and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
        scene.text('You sit next to Natasha, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A16'] < 60) {
          scene.text('You sit next to Natasha and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        } else {
          scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_art1', 'art_101_model_natasha'] },
  ]);
  scene.build();
}

function enterArt_102TalkNatasha(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A16', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).NatbelQW ?? 0)?.['Lover'] >= 2) {
    scene.text('You sit next to Natasha and queitly chat about various topics, but mainly concentrate on the lecture as you know it\'ll help her with her career. You keep your voices down and ensure you don\'t interrupt the lecture.');
  } else {
    if (((s as any).fame ?? 0)?.['city_slut']< 175  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 175) {
      if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
        scene.text('You sit next to Natasha, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A16'] < 60) {
          scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
        } else {
          scene.text('You sit next to Natasha and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
        scene.text('You sit next to Natasha, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A16'] < 60) {
          scene.text('You sit next to Natasha and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
        } else {
          scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_art1', 'art_102_model_natasha'] },
  ]);
  scene.build();
}

function enterArt_101TalkErmias_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('You notice a black student sitting away from the others by himself and decide to sit with him, getting a few stares and whispers directed your way as you do.');
  if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 1) {
    scene.text('As you sit down, you suddenly recognise him as the black guy you saw having sex with Albina.');
  }
  scene.text('He looks up at you and smiles. "Hello there. I am Ermias Okeke. What is your name?"');
  // TODO-QSP: dynamic text: You return his smile. "I'm <<$pcs_firstname>> <<$pcs_lastname>>, but my friends ...
  scene.text(`You return his smile. "I'm ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}, but my friends just call me ${((s as any).pcs_nickname || '')}."`);
  // TODO-QSP: dynamic text: "It is nice to meet you, <<$pcs_nickname>>."
  scene.text(`"It is nice to meet you, ${((s as any).pcs_nickname || '')}."`);
  scene.text('The two of you start chatting and you learn that he and some of his friends came from Africa to study here in Russia. He himself is studying law.');
  scene.text('You compliment him on how good his Russian is before the lecture starts and a fellow student asks you to be quiet.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_art1', 'art_101_model_ermias'] },
  ]);
  scene.build();
}

function enterArt_101TalkErmias_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  if (((s as any).ErmiasQW ?? 0)?.['invite'] === 0) {
    if (((s as any).pcs_hotcat ?? 0) < 7) {
      if (((s as any).npc_rel ?? 0)?.['A243'] <= 20) {
        scene.text('You sit next to Ermias, but he doesn\'t have much to say to you and sometimes pretends not to understand what you\'re saying.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A243'] < 60) {
          scene.text('You sit next to Ermias. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
        } else {
          scene.text('You sit next to Ermias and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
        }
      }
    } else {
      ((s as any).ErmiasQW = (s as any).ErmiasQW ?? {})['invite'] = 1;
      scene.text('You sit next to Ermias and spend most of the class quietly talking with him, although he seems far more interested in flirting with you than chatting.');
      if (((s as any).pcs_hotcat ?? 0) < 8) {
        // TODO-QSP: dynamic text: "You are a very cute girl, <<$pcs_nickname>>," he smiles.
        scene.text(`"You are a very cute girl, ${((s as any).pcs_nickname || '')}," he smiles.`);
      } else {
        if (((s as any).pcs_hotcat ?? 0) < 10) {
          // TODO-QSP: dynamic text: "You are a very pretty girl, <<$pcs_nickname>>," he smiles. "One of the pretties...
          scene.text(`"You are a very pretty girl, ${((s as any).pcs_nickname || '')}," he smiles. "One of the prettiest girls I have ever seen."`);
        } else {
          scene.text('"Has anyone ever told you that you are the most beautiful looking girl in the world?" he smiles. "I have never seen a girl as pretty as you."');
        }
      }
      scene.text('You smile back. "Thanks. You\'re not too bad looking yourself…"');
      scene.text('He grins. "Maybe you want come and hang out in my dorm sometime?"');
      scene.text('The way he says it leaves no doubt in your mind what he actually means.');
      scene.text('"Maybe," you reply.');
      scene.text('"I live on the eighth floor of the dorm with one of my friends, but I am home alone most evenings. I look forward to seeing you."');
      scene.text('He spends some time flirting with you before the lecture starts.');
    }
  } else {
    if (((s as any).ErmiasQW ?? 0)?.['first_visit'] === 0) {
      // TODO-QSP: dynamic text: "I hope you will come and visit me in my dorm soon, <<$pcs_nickname>>," he says ...
      scene.text(`"I hope you will come and visit me in my dorm soon, ${((s as any).pcs_nickname || '')}," he says as you sit next to him. "I would love to hang out with a pretty girl like you."`);
      scene.text('He spends some time flirting with you before the lecture starts.');
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A243'] === 0) {
        scene.text('Ermias grins as you sit next to him. "I hope you visit again soon so we can finish what we started."');
        scene.text('He spends some time flirting with you before the lecture starts.');
      } else {
        scene.text('Ermias grins as you sit next to him. "Hello bunny. It is nice to see you again."');
        scene.text('He spends some time flirting with you and saying how much fun he had with you before the lecture starts.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_art1', 'art_101_model_ermias'] },
  ]);
  scene.build();
}

function enterArt_102TalkErmias_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/talk.jpg');
  scene.text('You notice a black student sitting away from the others by himself and decide to sit with him, getting a few stares and whispers directed your way as you do.');
  if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 1) {
    scene.text('As you sit down, you suddenly recognise him as the black guy you saw having sex with Albina.');
  }
  scene.text('He looks up at you and smiles. "Hello there. I am Ermias Okeke. What is your name?"');
  // TODO-QSP: dynamic text: You return his smile. "I'm <<$pcs_firstname>> <<$pcs_lastname>>, but my friends ...
  scene.text(`You return his smile. "I'm ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}, but my friends just call me ${((s as any).pcs_nickname || '')}."`);
  // TODO-QSP: dynamic text: "It is nice to meet you, <<$pcs_nickname>>."
  scene.text(`"It is nice to meet you, ${((s as any).pcs_nickname || '')}."`);
  scene.text('The two of you start chatting and you learn that he and some of his friends came from Africa to study here in Russia. He himself is studying law.');
  scene.text('You compliment him on how good his Russian is before the lecture starts and a fellow student asks you to be quiet.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_art1', 'art_102_model_ermias'] },
  ]);
  scene.build();
}

function enterArt_102TalkErmias_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
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
        scene.text(`"You are a very cute girl, ${((s as any).pcs_nickname || '')}," he smiles.`);
      } else {
        if (((s as any).pcs_hotcat ?? 0) < 10) {
          // TODO-QSP: dynamic text: "You are a very pretty girl, <<$pcs_nickname>>," he smiles. "One of the pretties...
          scene.text(`"You are a very pretty girl, ${((s as any).pcs_nickname || '')}," he smiles. "One of the prettiest girls I have ever seen."`);
        } else {
          scene.text('"Has anyone ever told you that you are the most beautiful looking girl in the world?" he smiles. "I have never seen a girl as pretty as you."');
        }
      }
      scene.text('You smile back. "Thanks. You\'re not too bad looking yourself…"');
      scene.text('He grins. "Maybe you want come and hang out in my dorm sometime?"');
      scene.text('The way he says it leaves no doubt in your mind what he actually means.');
      scene.text('"Maybe," you reply.');
      scene.text('"I live on the eighth floor of the dorm with one of my friends, but I am home alone most evenings. I look forward to seeing you."');
      scene.text('He spends some time flirting with you before the lecture starts.');
    }
  } else {
    if (((s as any).ErmiasQW ?? 0)?.['first_visit'] === 0) {
      // TODO-QSP: dynamic text: "I hope you will come and visit me in my dorm soon, <<$pcs_nickname>>," he says ...
      scene.text(`"I hope you will come and visit me in my dorm soon, ${((s as any).pcs_nickname || '')}," he says as you sit next to him. "I would love to hang out with a pretty girl like you."`);
      scene.text('He spends some time flirting with you before the lecture starts.');
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A243'] === 0) {
        scene.text('Ermias grins as you sit next to him. "I hope you visit again soon so we can finish what we started."');
        scene.text('He spends some time flirting with you before the lecture starts.');
      } else {
        scene.text('Ermias grins as you sit next to him. "Hello bunny. It is nice to see you again."');
        scene.text('He spends some time flirting with you and saying how much fun he had with you before the lecture starts.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish talking', goto: ['uni_lessons_electives_art1', 'art_102_model_ermias'] },
  ]);
  scene.build();
}

function enterArt_101Model(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).university ?? 0)?.['semester_week'] < 8) {
    (s as any).temprand = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).temprand ?? 0))) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('Today\'s lesson concerns the history of art and its impact on society throughout the ages. Professor Ilyushin focuses on one time period when \'art made a real difference in the world,\' as he puts it.');
      scene.text('The lecture goes by fairly quickly.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
      ]);
    } else {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After the lecture, Professor Ilyushin slides a raised platform to the center of the room. Retrieving an everyday object from a cupboard, he places it on the platform and ensures everyone can see it. He makes a few observations about shadow and light before telling the class to begin drawing the object.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
      scene.text('The class goes by fairly quickly.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
      ]);
    }
  } else {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After the lecture, Professor Ilyushin slides a raised platform to the center of the room. Retrieving an everyday object from a cupboard, he places it on the platform and ensures everyone can see it. He makes a few observations about shadow and light before telling the class to begin drawing the object.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male1.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform against one of the walls as a young, good-looking man comes in and sits on it. "Today, we have one of your fellow students as a model."');
        scene.text('Professor Ilyushin walks to the back of the class and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing him, you overhear a few of your female classmates talking about how they hope he models next semester too.');
        scene.text('The class goes by fairly quickly.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female1.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform to the center of the room so it\'s easy for everyone to see as a young woman comes in and lays down on it. "Today, we have one of your fellow students as a model."');
          scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka1.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a wooden bar as a familiar face walks into the classroom. It\'s Anushka. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('Anushka straddles the wooden bar and you can tell by his reaction that wasn\'t what he had in mind, but he quickly smiles as if he approves before walking to the back of the class and telling everyone to start.');
            scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they hope she models next semester too.');
            scene.text('The class goes by fairly quickly.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina1.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin sets up a raised platform as a familiar face walks into the classroom. It\'s Albina. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya."');
              scene.text('Albina stands on the platform and assumes a position where she pulls her leg up to the back of her head. Her muscular legs and toned ass are highlighted by her yoga pants, something that somewhat flusters Professor Ilyushin before he nods in approval and walks to the back of the class, where he tells everyone to start.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Albina, you overhear a few of your male classmates talking about she\'s one of the hottest girls they\'ve ever drawn and how they hope she models next semester too.');
              scene.text('The class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female1.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform to the center of the room so it\'s easy for everyone to see before turning to the class. "Unfortunately, my model for today had to cancel, so I was thinking of doing something a little different. Would any of the girls like to pose for the class today?"');
              scene.text('A rather pretty looking girl immediately raises her hand and Professor Ilyushin smiles. "Come on up to the platform then, Miss Bakalova. Pose in whichever manner you feel most comfortable."');
              scene.text('"Go Anna!" someone cheers as the girl struts up to the platform and positions herself in a rather unassuming pose before Professor Ilyushin has everyone start drawing.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing the girl, you overhear a few of your male classmates talking about how they hope she volunteers next time as well.');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterArt_101ModelIgor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).university ?? 0)?.['semester_week'] < 8) {
    (s as any).temprand = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).temprand ?? 0))) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('Today\'s lesson concerns the history of art and its impact on society throughout the ages. Professor Ilyushin focuses on one time period when \'art made a real difference in the world,\' as he puts it. The lecture goes by fairly quickly and Igor seems engrossed by it.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
      ]);
    } else {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After the lecture, Professor Ilyushin slides a raised platform to the center of the room. Retrieving an everyday object from a cupboard, he places it on the platform and ensures everyone can see it. He makes a few observations about shadow and light before telling the class to begin drawing the object.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Igor seems to do well and ends up asking more questions than most.');
      scene.text('The class goes by fairly quickly.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
      ]);
    }
  } else {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After the lecture, Professor Ilyushin slides a raised platform to the center of the room. Retrieving an everyday object from a cupboard, he places it on the platform and ensures everyone can see it. He makes a few observations about shadow and light before telling the class to begin drawing the object.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Igor seems to do well and ends up asking more questions than most.');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male1.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform against one of the walls as a young, good-looking man comes in and sits on it. "Today, we have one of your fellow students as a model."');
        scene.text('He then walks to the back of the class and tells everyone to start, then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing him, you overhear a few of your female classmates talking about how they hope he models next semester too. Meanwhile, Igor seems intent on his drawing and is doing an excellent job capturing how his clothes fit his masculine form.');
        scene.text('The class goes by fairly quickly.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female1.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform to the center of the room so it\'s easy for everyone to see as a young woman comes in and lays down on it. "Today, we have one of your fellow students as a model."');
          scene.text('He walks to the back of the classroom and tells everyone to start, then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Meanwhile, Igor seems intent on his drawing and is doing an excellent job capturing how her clothes fit her feminine form.');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka1.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a wooden bar as a familiar face walks into the classroom. It\'s Anushka. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('Anushka straddles the wooden bar and you can tell by his reaction that wasn\'t what he had in mind, but he quickly smiles as if he approves before walking to the back of the class and telling everyone to start.');
            scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they hope she models next semester too. Meanwhile, Igor seems intent on his drawing and is doing an excellent job capturing how her clothes fit her feminine form.');
            scene.text('The class goes by fairly quickly.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina1.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin sets up a raised platform as a familiar face walks into the classroom. It\'s Albina. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya."');
              scene.text('Albina stands on the platform and assumes a position where she pulls her leg up to the back of her head. Her muscular legs and toned ass are highlighted by her yoga pants, something that somewhat flusters Professor Ilyushin before he nods in approval and walks to the back of the class, where he tells everyone to start.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Albina, you overhear a few of your male classmates talking about she\'s one of the hottest girls they\'ve ever drawn and how they hope she models next semester too. Meanwhile, Igor seems intent on his drawing and is doing an excellent job capturing how her clothes fit her toned physique.');
              scene.text('The class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female1.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform to the center of the room so it\'s easy for everyone to see before turning to the class. "Unfortunately, my model for today had to cancel, so I was thinking of doing something a little different. Would any of the girls like to pose for the class today?"');
              scene.text('A rather pretty looking girl immediately raises her hand and Professor Ilyushin smiles. "Come on up to the platform then, Miss Bakalova. Pose in whichever manner you feel most comfortable."');
              scene.text('"Go Anna!" someone cheers as the girl struts up to the platform and positions herself in a rather unassuming pose before Professor Ilyushin has everyone start drawing.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing the girl, you overhear a few of your male classmates talking about how they hope she volunteers next time as well. Meanwhile, Igor seems intent on his drawing and is doing an excellent job capturing how her clothes fit her feminine form.');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterArt_101ModelFeofan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).university ?? 0)?.['semester_week'] < 8) {
    (s as any).temprand = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).temprand ?? 0))) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('Today\'s lesson concerns the history of art and its impact on society throughout the ages. Professor Ilyushin focuses on one time period when \'art made a real difference in the world,\' as he puts it.');
      scene.text('Feofan seems somewhat bored with the class and keeps doodling instead of listening, but the lecture goes by fairly quickly.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
      ]);
    } else {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After the lecture, Professor Ilyushin slides a raised platform to the center of the room. Retrieving an everyday object from a cupboard, he places it on the platform and ensures everyone can see it. He makes a few observations about shadow and light before telling the class to start drawing the object.');
      scene.text('Feofan mutters something about how he didn\'t take art class to draw a bowl of fruit as Professor Ilyushin walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
      scene.text('The class goes by fairly quickly.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
      ]);
    }
  } else {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After the lecture, Professor Ilyushin slides a raised platform to the center of the room. Retrieving an everyday object from a cupboard, he places it on the platform and ensures everyone can see it. He makes a few observations about shadow and light before telling the class to start drawing the object. Feofan mutters something about he didn\'t take art class to draw a bowl of fruit as Professor Ilyushin walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male1.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform against one of the walls as a young, good-looking man comes in and sits on it. "Aww, man!" you hear Feofan mutter in disappointment.');
        scene.text('"Today, we have one of your fellow students as a model," Professor Ilyushin says as he walks to the back of the class and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing him, you overhear a few of your female classmates talking about how they hope he models next semester too. Meanwhile, Feofan seems to be focusing on trying to draw the guys shoes.');
        scene.text('The class goes by fairly quickly.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female1.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform to the center of the room so it\'s easy for everyone to see as a young woman comes in and lays down on it. "Sweet…" you hear Feofan mutter as the girl comes in.');
          scene.text('"Today, we have one of your fellow students as a model," Professor Ilyushin says as he walks to the back of the class and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Meanwhile Feofan seems to spend a lot of time trying to draw her breasts just right.');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka1.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a wooden bar as a familiar face walks into the classroom. It\'s Anushka. "Holy shit…" you hear Feofan mutter before he seems to blush and look away, worried someone might have overheard him.');
            scene.text('"Today, we have one of your fellow students as a model," Professor Ilyushin continues. "Please take your seat, Miss Konstantinov."');
            scene.text('Anushka straddles the wooden bar and you can tell by his reaction that wasn\'t what he had in mind, but he quickly smiles as if he approves before he walks to the back of the classroom. "Alright class, begin." He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
            scene.text('As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they hope she models next semester too. Meanwhile, Feofan seems to spend a lot of time trying to draw her breasts just right.');
            scene.text('The class goes by fairly quickly.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina1.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin sets up a raised platform as a familiar face walks into the classroom. It\'s Albina. "Holy shit…" you hear Feofan mutter before he seems to blush and look away, worried someone might have overheard him.');
              scene.text('"Today, we have one of your fellow students as a model," Professor Ilyushin continues. "Please take your position, Miss Barlovskaya."');
              scene.text('Albina stands on the platform and assumes a position where she pulls her leg up to the back of her head. Her muscular legs and toned ass are highlighted by her yoga pants as Professor Ilyushin nods in approval and walks to the back of the class, where he tells everyone to start.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Albina, you overhear a few of your male classmates talking about she\'s one of the hottest girls they\'ve ever drawn and how they hope she models next semester too. Meanwhile, Feofan seems to spend a lot of time trying to draw her ass just right.');
              scene.text('The class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female1.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform to the center of the room so it\'s easy for everyone to see before turning to the class. "Unfortunately, my model for today had to cancel, so I was thinking of doing something a little different. Would any of the girls like to pose for the class today?"');
              scene.text('A rather pretty looking girl immediately raises her hand and Professor Ilyushin smiles. "Come on up to the platform then, Miss Bakalova. Pose in whichever manner you feel most comfortable."');
              scene.text('"Go Anna!" someone cheers as the girl struts up to the platform and positions herself in a rather unassuming pose before Professor Ilyushin has everyone start drawing.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
              scene.text('As you\'re drawing the girl, you overhear a few of your male classmates talking about how they hope she volunteers next time as well. Meanwhile, Feofan seems to spend a lot of time trying to draw her large breasts just right.');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterArt_101ModelNatasha(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).university ?? 0)?.['semester_week'] < 8) {
    (s as any).temprand = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).temprand ?? 0))) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('Today\'s lesson concerns the history of art and its impact on society throughout the ages. Professor Ilyushin focuses on one time period when \'art made a real difference in the world,\' as he puts it. The lecture goes by fairly quickly.');
      scene.text('You notice that Natasha appears to like this lecture as she appears very comfortable with theory.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
      ]);
    } else {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After the lecture, Professor Ilyushin slides a raised platform to the center of the room. Retrieving an everyday object from a cupboard, he places it on the platform and ensures everyone can see it. He makes a few observations about shadow and light before telling the class to begin drawing the object. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
      scene.text('The class goes by fairly quickly. You notice that Natasha really concentrates on the subject and seems to be very comfortable with the lesson.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
      ]);
    }
  } else {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After the lecture, Professor Ilyushin slides a raised platform to the center of the room. Retrieving an everyday object from a cupboard, he places it on the platform and ensures everyone can see it. He makes a few observations about shadow and light before telling the class to begin drawing the object. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
      scene.text('You notice that Natasha seems happy drawing the object and gets on with it, rarely needing guidance from the professor, but the class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male1.jpg');
        scene.text('After he finishes his lecture, he slides the platform against one of the walls. A moment later a young, good-looking man comes in and sits on it. "Today, we have one of your fellow students as a model," Professor Ilyushin says as he walks to the back of the class and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
        scene.text('As you\'re drawing him, you overhear a few of your female classmates talking about how they hope he models next semester too.');
        scene.text('You\'re sitting next to Natasha and notice that as soon as the model takes his place, she gets very embarrassed and starts blushing. She clearly struggles to concentrate and keeps making mistakes as you see her rubbing out parts of her drawing and starting over until the professor comes over and talks to her.');
        scene.text('The class goes by fairly quickly.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female1.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform to the center of the room so it\'s easy for everyone to see as a young woman comes in and lays down on it. "Today, we have one of your fellow students as a model," Professor Ilyushin says as he walks to the back of the class and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
          scene.text('You notice that Natasha seems to struggle at first and blushes slightly. After a few pointers from Professor Ilyushin, she gains confidence and seems happy to continue.');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka1.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a wooden bar as a familiar face walks into the classroom. It\'s Anushka. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('Anushka straddles the wooden bar, you can tell by his reaction that wasn\'t what he had in mind, but he quickly smiles as if he approves before he walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they hope she models next semester too.');
            scene.text('You look over at Natasha and notice that as soon as Anushka straddles the bar, she gets deeply embarrassed and starts blushing. She clearly struggles during the lesson, requiring Professor Ilyushin to spend some time with her, but the class goes by fairly quickly.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina1.jpg');
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.text('After he finishes his lecture, Professor Ilyushin sets up a raised platform as a familiar face walks into the classroom. It\'s Albina. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya."');
              scene.text('Albina stands on the platform and assumes a position where she pulls her leg up to the back of her head. Her muscular legs and toned ass are highlighted by her yoga pants, something that somewhat flusters Professor Ilyushin before he nods in approval and walks to the back of the class, where he tells everyone to start.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Albina, you overhear a few of your male classmates talking about she\'s one of the hottest girls they\'ve ever drawn and how they hope she models next semester too.');
              scene.text('You look over at Natasha and notice that as soon as Albina assumes her position, she gets deeply embarrassed and starts blushing. She clearly struggles during the lesson, requiring Professor Ilyushin to spend some time with her, but the class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female1.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform to the center of the room so it\'s easy for everyone to see before turning to the class. "Unfortunately, my model for today had to cancel, so I was thinking of doing something a little different. Would any of the girls like to pose for the class today?"');
              scene.text('A rather pretty looking girl immediately raises her hand and Professor Ilyushin smiles. "Come on up to the platform then, Miss Bakalova. Pose in whichever manner you feel most comfortable."');
              scene.text('"Go Anna!" someone cheers as the girl struts up to the platform and positions herself in a rather unassuming pose before Professor Ilyushin has everyone start drawing.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing the girl, you overhear a few of your male classmates talking about how they hope she volunteers next time as well.');
              scene.text('You notice that Natasha seems to struggle at first and blushes slightly. After a few pointers from Professor Ilyushin, she gains confidence and seems happy to continue.');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterArt_101ModelErmias(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).university ?? 0)?.['semester_week'] < 8) {
    (s as any).temprand = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).temprand ?? 0))) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('Today\'s lesson concerns the history of art and its impact on society throughout the ages. Professor Ilyushin focuses on one time period when \'art made a real difference in the world,\' as he puts it. The lecture goes by fairly quickly, but Ermias doesn\'t seem to be that interested by it.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
      ]);
    } else {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After the lecture, Professor Ilyushin slides a raised platform to the center of the room. Retrieving an everyday object from a cupboard, he places it on the platform and ensures everyone can see it. He makes a few observations about shadow and light before telling the class to begin drawing the object.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Ermias seems to do well and draws multiple sketches, each more detailed than the last.');
      scene.text('The class goes by fairly quickly.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
      ]);
    }
  } else {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After the lecture, Professor Ilyushin slides a raised platform to the center of the room. Retrieving an everyday object from a cupboard, he places it on the platform and ensures everyone can see it. He makes a few observations about shadow and light before telling the class to begin drawing the object.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Ermias seems to do well and draws multiple sketches, each more detailed than the last.');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male1.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform against one of the walls as a young, good-looking man comes in and sits on it. "Today, we have one of your fellow students as a model."');
        scene.text('He then walks to the back of the class and tells everyone to start, then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing him, you overhear a few of your female classmates talking about how they hope he models next semester too. Ermias sketches a fairly detailed drawing, despite his obvious lack of interest in the model.');
        scene.text('The class goes by fairly quickly.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female1.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform to the center of the room so it\'s easy for everyone to see as a young woman comes in and lays down on it. "Today, we have one of your fellow students as a model."');
          scene.text('He walks to the back of the classroom and tells everyone to start, then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Ermias focuses intently on his sketch, quickly fixing any errors he makes while cursing under his breath, as if he has insulted the model.');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka1.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a wooden bar as a familiar face walks into the classroom. It\'s Anushka. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('Anushka straddles the wooden bar and you can tell by his reaction that wasn\'t what he had in mind, but he quickly smiles as if he approves before walking to the back of the class and telling everyone to start.');
            scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they hope she models next semester too. Ermias focuses intently on his drawing, but does give Anushka a flirty smile every time he glances up.');
            scene.text('The class goes by fairly quickly.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina1.jpg');
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.text('After he finishes his lecture, Professor Ilyushin sets up a raised platform as a familiar face walks into the classroom. It\'s Albina. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya."');
              scene.text('Albina stands on the platform and assumes a position where she pulls her leg up to the back of her head. Her muscular legs and toned ass are highlighted by her yoga pants, something that somewhat flusters Professor Ilyushin before he nods in approval and walks to the back of the class, where he tells everyone to start.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Albina, you overhear a few of your male classmates talking about she\'s one of the hottest girls they\'ve ever drawn and how they hope she models next semester too. Ermias focuses on his drawing, but you notice more than a few times that his gaze does linger on her ass for a little longer than he intended.');
              scene.text('The class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female1.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform to the center of the room so it\'s easy for everyone to see before turning to the class. "Unfortunately, my model for today had to cancel, so I was thinking of doing something a little different. Would any of the girls like to pose for the class today?"');
              scene.text('A rather pretty looking girl immediately raises her hand and Professor Ilyushin smiles. "Come on up to the platform then, Miss Bakalova. Pose in whichever manner you feel most comfortable."');
              scene.text('"Go Anna!" someone cheers as the girl struts up to the platform and positions herself in a rather unassuming pose before Professor Ilyushin has everyone start drawing.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing the girl, you overhear a few of your male classmates talking about how they hope she volunteers next time as well.');
              scene.text('Ermias focuses intently on his drawing, but does give the girl a flirty smile every time he glances up, causing her to dart her eyes away as you see her blush slightly.');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterArt_102Model(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).university ?? 0)?.['semester_week'] < 8) {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After he finishes his lecture, Professor Ilyushin brings out a fairly mundane everyday object and places it on the raised platform. He slides the platform to the center of the room so it\'s easy for everyone to see, then asks everyone to draw the object from their vantage point.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male2.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides the platform against one of the walls as a young good looking man comes in, strips down to his boxer shorts and half sits and half stands against the edge of the platform. "Today, we have one of your fellow students as a model."');
        scene.text('Professor Ilyushin walks to the back of the class and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing him, you overhear a few of your female classmates talking about how they hope he models later in the semester too.');
        scene.text('The class goes by fairly quickly.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female2.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room so it\'s easy for everyone to see as a young woman with short hair comes in. As Professor Ilyushin talks, she strips down to her panties and sits on the chair in a position that has one of her arms covering her nipples, leaving her just barely covered. "Today, we have one of your fellow students as a model."');
          scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka2.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a wooden bar as a familiar face walks into the classroom. It\'s Anushka, who is wearing an overcoat. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('As he talks, she removes the overcoat, showing off a pair of pink and black panties with a matching bra, along with a black garter belt and stockings. Her look is finished off with some very tall heels.');
            scene.text('She kneels down on the platform, which causes her panties to slip up the crack of her ass as she looks back over her shoulder taking a modeling pose with a big smile. Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start.');
            scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they hope she models later in the semester too.');
            scene.text('The class goes by fairly quickly.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina2.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin places a stool in the middle of the room as a familiar face walks into the classroom. It\'s Albina, who is wearing a set of black lingerie that gets more than a few people in the room talking. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya."');
              scene.text('Albina takes a seat on the stool and runs her hands through her hair, assuming a pose that causes Professor Ilyushin to nod in approval before he walks to the back of the class and tells everyone to start.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Albina, you overhear a few of your male classmates talking about how much they want to draw her naked.');
              scene.text('The class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female2.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin places a stool in the middle of the room before turning to the class. "I\'m once again without a model today. Since you done such a good job last time, would you like to volunteer again, Miss Bakalova? You will be posing in your underwear this time. Is that okay with you?"');
              scene.text('The girl nods and walks up to the stool before she strips down to her panties and sits on the stool with her arms covering her large breasts, leaving her nipples just barely covered. Professor Ilyushin seems surprised that she\'s gone topless, but smiles and nods before telling the class to start drawing.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing the girl, you overhear a few of your male classmates talking about how much they want to see and draw her breasts.');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
    ]);
  } else {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After he finishes his lecture, Professor Ilyushin brings out a fairly mundane everyday object and places it on the raised platform. He slides the platform to the center of the room so it\'s easy for everyone to see, then asks everyone to draw the object from their vantage point.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male3.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides the platform against one of the walls as a young good looking man comes in and strips down before laying down on his side on the platform. "Today, we have one of your fellow students as a model."');
        scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
        scene.text('As you\'re drawing him, you overhear a few your female classmates talking about how he\'s not as good looking as the previous male models. Two of the girls can\'t stop giggling, much to Professor Ilyushin\'s annoyance, who lectures them about taking it seriously');
        scene.text('The class goes by fairly quickly.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female3.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room so it\'s easy for everyone to see as a young woman comes in wearing an overcoat, which she removes to reveal that she\'s completely naked underneath as she sits down on the raised platform. "Today, we have one of your fellow students as a model."');
          scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka3.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a raised platform as a familiar face walks into the classroom. It\'s Anushka, who is wearing an overcoat. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('As he talks, she removes the overcoat to reveal that she\'s completely naked underneath, showing off her tattoos - and everything else. She gets on the platform and sits down, leaning to one side to support herself with one arm while tucking her legs back up under her as she smiles at the class.');
            scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
            scene.text('As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they would like to bang her');
            scene.text('The class goes by fairly quickly.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina3.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin sets up a raised platform as a familiar face walks into the classroom. It\'s Albina, who is wearing a short robe. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya."');
              scene.text('Albina removes her robe to reveal that she\'s completely naked before she sits on the platform and assumes a tastefully artistic pose.');
              scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
              scene.text('As you\'re drawing Albina, you overhear a few of your male classmates talking about how they would love to bang her, with one claiming that he already has');
              scene.text('The class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female3.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room before turning to the class. "Miss Bakalova, I require your services once more. Would you mind posing nude for the class today?"');
              scene.text('The class starts loudly chatting amongst itself as the girl nods and heads into Professor Ilyushin\'s office to undress. She returns covering herself up before she takes her position on the platform, showing off her large breasts to the class. There are a few hushed whispers as everyone notices that her nipples are pierced.');
              scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
              scene.text('As you\'re drawing the girl, you overhear a few of your male classmates talking about how they would like to bang her');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterArt_102ModelIgor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).university ?? 0)?.['semester_week'] < 8) {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After he finishes his lecture, Professor Ilyushin brings out a fairly mundane everyday object and places it on the raised platform. He slides the platform to the center of the room so it\'s easy for everyone to see, then asks everyone to draw the object from their vantage point.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Igor seems to do fairly decent and ends up asking more questions than most');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male2.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides the platform against one of the walls as a young good looking man comes in, strips down to his boxer shorts and half sits and half stands against the edge of the platform. "Today, we have one of your fellow students as a model."');
        scene.text('Professor Ilyushin walks to the back of the class and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing him, you overhear a few of your female classmates talking about how they hope he models later in the semester too. Igor, meanwhile, is looking a little flushed as he starts drawing.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female2.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room so it\'s easy for everyone to see as a young woman with short hair comes in. As Professor Ilyushin talks, she strips down to her panties and sits on the chair in a position that has one of her arms covering her nipples, leaving her just barely covered. "Today, we have one of your fellow students as a model."');
          scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Igor looks her over as she strips down, but he doesn\'t seem to be leering like the other boys');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka2.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a wooden bar as a familiar face walks into the classroom. It\'s Anushka, who is wearing an overcoat. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('As he talks, she removes the overcoat, showing off a pair of pink and black panties with a matching bra, along with a black garter belt and stockings. Her look is finished off with some very tall heels.');
            scene.text('She kneels down on the platform, which causes her panties to slip up the crack of her ass as she looks back over her shoulder taking a modeling pose with a big smile. Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start.');
            scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they hope she models later in the semester too. Igor, meanwhile, seems very intent on trying to capture her feminine form, paying special attention to her clothes and body position');
            scene.text('The class goes by fairly quickly.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina2.jpg');
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.text('After he finishes his lecture, Professor Ilyushin places a stool in the middle of the room as a familiar face walks into the classroom. It\'s Albina, who is wearing a set of black lingerie that gets more than a few people in the room talking. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya."');
              scene.text('Albina takes a seat on the stool and runs her hands through her hair, assuming an erotic pose that causes Professor Ilyushin to nod in approval before he walks to the back of the class and tells everyone to start.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Albina, you overhear a few of your male classmates talking about how much they want to draw her naked. Igor, meanwhile, seems very intent on trying to properly detail the way she ruffles her hair');
              scene.text('The class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female2.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin places a stool in the middle of the room before turning to the class. "I\'m once again without a model today. Since you done such a good job last time, would you like to volunteer again, Miss Bakalova? You will be posing in your underwear this time. Is that okay with you?"');
              scene.text('The girl nods and walks up to the stool before she strips down to her panties and sits on the stool with her arms covering her large breasts, leaving her nipples just barely covered. Professor Ilyushin seems surprised that she\'s gone topless, but smiles and nods before telling the class to start drawing.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Igor looks her over as she strips down, but he doesn\'t seem to be leering like the other boys');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
  } else {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After he finishes his lecture, Professor Ilyushin brings out a fairly mundane everyday object and places it on the raised platform. He slides the platform to the center of the room so it\'s easy for everyone to see, then asks everyone to draw the object from their vantage point.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Igor seems to do fairly decent and ends up asking more questions than most');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male3.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides the platform against one of the walls as a young good looking man comes in and strips down before laying down on his side on the platform. "Today, we have one of your fellow students as a model."');
        scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
        scene.text('As you\'re drawing him, you overhear a few of your female classmates walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Igor, meanwhile, is looking a little flushed as he starts drawing');
        scene.text('The class goes by fairly quickly.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female3.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room so it\'s easy for everyone to see as a young woman comes in wearing an overcoat, which she removes to reveal that she\'s completely naked underneath as she sits down on the raised platform. "Today, we have one of your fellow students as a model."');
          scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Igor, meanwhile, seems very intent on trying to capture her femine form, paying special attention to her body position');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka3.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a raised platform as a familiar face walks into the classroom. It\'s Anushka, who is wearing an overcoat. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('As he talks, she removes the overcoat to reveal that she\'s completely naked underneath, showing off her tattoos - and everything else. She gets on the platform and sits down, leaning to one side to support herself with one arm while tucking her legs back up under her as she smiles at the class.');
            scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
            scene.text('As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they would like to bang her. Igor, meanwhile, seems very intent on trying to capture her femine form, paying special attention to her body position');
            scene.text('The class goes by fairly quickly.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina3.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin sets up a raised platform as a familiar face walks into the classroom. It\'s Albina, who is wearing a short robe. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya."');
              scene.text('Albina removes her robe to reveal that she\'s completely naked before she sits on the platform and assumes a tastefully artistic pose.');
              scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
              scene.text('As you\'re drawing Albina, you overhear a few of your male classmates talking about how they would love to bang her, with one claiming that he already has. Igor, meanwhile, seems very intent on trying to capture her feminine form, paying special attention to her rather alluring pose');
              scene.text('The class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female3.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room before turning to the class. "Miss Bakalova, I require your services once more. Would you mind posing nude for the class today?"');
              scene.text('The class starts loudly chatting amongst itself as the girl nods and heads into Professor Ilyushin\'s office to undress. She returns covering herself up before she takes her position on the platform, showing off her large breasts to the class. There are a few hushed whispers as everyone notices that her nipples are pierced.');
              scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
              scene.text('As you\'re drawing the girl, you overhear a few of your male classmates talking about how they would like to bang her. Igor, meanwhile, seems very intent on trying to capture her femine form, paying special attention to her body position');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
  ]);
  scene.build();
}

function enterArt_102ModelFeofan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).university ?? 0)?.['semester_week'] < 8) {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After he finishes his lecture, Professor Ilyushin brings out a fairly mundane everyday object and places it on the raised platform. He slides the platform to the center of the room so it\'s easy for everyone to see, then asks everyone to draw the object from their vantage point.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Feofan mutters something about how he didn\'t take art class to draw a bowl of fruit as Professor Ilyushin walks around the class checking on each student, stopping to give pointers or answer questions as needed');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male2.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides the platform against one of the walls as a young good looking man comes in, strips down to his boxer shorts and half sits and half stands against the edge of the platform. "Today, we have one of your fellow students as a model."');
        scene.text('Feofan shakes his head. "Man, I could never do that." Professor Ilyushin walks to the back of the class and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
        scene.text('As you\'re drawing him, you overhear a few of your female classmates talking about how they hope he models later in the semester too');
        scene.text('The class goes by fairly quickly.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female2.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room so it\'s easy for everyone to see as a young woman with short hair comes in and strips down to her panties.');
          scene.text('"I\'m so glad I took art this year," you overhear Feofan mutter to himself as she sits on the chair in a position that has one of her arms covering her nipples, leaving her just barely covered. "Today, we have one of your fellow students as a model."');
          scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Glancing over at Feofan\'s work, you notice he seems to be spending a lot of time drawing her breasts.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka2.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a wooden bar as a familiar face walks into the classroom. It\'s Anushka, who is wearing an overcoat. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('As he talks, she removes the overcoat, showing off a pair of pink and black panties with a matching bra, along with a black garter belt and stockings. Her look is finished off with some very tall heels.');
            scene.text('She kneels down on the platform, which causes her panties to slip up the crack of her ass as she looks back over her shoulder taking a modeling pose with a big smile. Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start.');
            scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they hope she models later in the semester too.');
            scene.text('As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they hope she models later in the semester too. The class goes by fairly quickly, but you do notice how Professor Ilyushin seems to spend more time than normal with Feofan.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina2.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin places a stool in the middle of the room as a familiar face walks into the classroom. It\'s Albina, who is wearing a set of black lingerie that gets more than a few people in the room talking. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya."');
              scene.text('Albina takes a seat on the stool and runs her hands through her hair, assuming an erotic pose that causes Professor Ilyushin to nod in approval before he walks to the back of the class and tells everyone to start.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Albina, you overhear a few of your male classmates talking about how much they want to draw her naked. Glancing over at Feofan, you notice that he seems to be struggling to put pencil to paper and needs Professor Ilyushin\'s assistance to get started.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female2.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin places a stool in the middle of the room before turning to the class. "I\'m once again without a model today. Since you done such a good job last time, would you like to volunteer again, Miss Bakalova? You will be posing in your underwear this time. Is that okay with you?"');
              scene.text('The girl nods and walks up to the stool before she strips down to her panties and sits on the stool with her arms covering her large breasts, leaving her nipples just barely covered. Professor Ilyushin seems surprised that she\'s gone topless, but smiles and nods before telling the class to start drawing.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing the girl, you overhear a few of your male classmates talking about how much they want to see and draw her breasts. The class goes by fairly quickly, but you do notice how Professor Ilyushin seems to spend more time than normal with Feofan.');
            }
          }
        }
      }
    }
  } else {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After he finishes his lecture, Professor Ilyushin brings out a fairly mundane everyday object and places it on the raised platform. He slides the platform to the center of the room so it\'s easy for everyone to see, then asks everyone to draw the object from their vantage point.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Feofan mutters something about how he didn\'t take art class to draw a bowl of fruit as Professor Ilyushin walks around the class checking on each student, stopping to give pointers or answer questions as needed');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male3.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides the platform against one of the walls as a young good looking man comes in and strips down before laying down on his side on the platform. "Today, we have one of your fellow students as a model."');
        scene.text('You notice Feofan is trying not to look at the naked guy, which only makes you smile at his discomfort. Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
        scene.text('As you\'re drawing him, you overhear a few your female classmates talking about how he\'s not as good looking as the previous male models. Two of the girls can\'t stop giggling, much to Professor Ilyushin\'s annoyance, who lectures them about taking it seriously');
        scene.text('The class goes by fairly quickly.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female3.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room so it\'s easy for everyone to see as a young woman comes in wearing an overcoat, which she removes to reveal that she\'s completely naked underneath as she sits down on the raised platform. "Man, I love art class…" Feofan mutters to himself.');
          scene.text('"Today, we have one of your fellow students as a model," Professor Ilyushin says before he walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka3.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a raised platform as a familiar face walks into the classroom. It\'s Anushka, who is wearing an overcoat. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('As he talks, she removes the overcoat to reveal that she\'s completely naked underneath, showing off her tattoos - and everything else.');
            scene.text('As Anushka strips down, you notice Feofan swallow as he tries not to stare. You\'re pretty sure you can see a growing bulge in his pants though.');
            scene.text('Anushka gets on the platform and sits down, leaning to one side to support herself with one arm while tucking her legs back up under her as she smiles at the class. Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina3.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin sets up a raised platform as a familiar face walks into the classroom. It\'s Albina, who is wearing a short robe. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya." Albina removes her robe to reveal that she\'s completely naked before she sits on the platform and assumes a tastefully artistic pose.');
              scene.text('Feofan is sitting directly in front of her and has a view of everything she\'s showing off. You see him getting rather flustered and avoiding eye contact as he subtly tries to hide the obvious bulge in his pants, but Albina notices this and has to hide her smile so she doesn\'t ruin the shot for the other artists.');
              scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
              scene.text('As you\'re drawing Albina, you overhear a few of your male classmates talking about how they would love to bang her, with one claiming that he already has');
              scene.text('The class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female3.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room before turning to the class. "Miss Bakalova, I require your services once more. Would you mind posing nude for the class today?"');
              scene.text('The class starts loudly chatting amongst itself as the girl nods and heads into Professor Ilyushin\'s office to undress. She returns covering herself up before she takes her position on the platform, showing off her large breasts to the class. There are a few hushed whispers as everyone notices that her nipples are pierced.');
              scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
              scene.text('As you\'re drawing the girl, you overhear a few of your male classmates talking about how they would like to bang her. Glancing over at Feofan, you notice that he seems to be struggling to put pencil to paper and needs Professor Ilyushin\'s assistance to get started');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
  ]);
  scene.build();
}

function enterArt_102ModelNatasha(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).university ?? 0)?.['semester_week'] < 8) {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After he finishes his lecture, Professor Ilyushin brings out a fairly mundane everyday object and places it on the raised platform. He slides the platform to the center of the room so it\'s easy for everyone to see, then asks everyone to draw the object from their vantage point.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. This is a theory lesson which Natasha is clearly comfortable with and she doesn\'t require any assistance from Professor Ilyushin');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male2.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides the platform against one of the walls as a young good looking man comes in, strips down to his boxer shorts and half sits and half stands against the edge of the platform. "Today, we have one of your fellow students as a model."');
        scene.text('Professor Ilyushin walks to the back of the class and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing him, you overhear a few of your female classmates talking about how they hope he models later in the semester too. You look over at Natasha and notice that she\'s bright red. You aren\'t sure if this is due to embarrassment or if she might fancy the model; maybe it\'s a bit of both');
        scene.text('The class goes by fairly quickly.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female2.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room so it\'s easy for everyone to see as a young woman with short hair comes in. As Professor Ilyushin talks, she strips down to her panties and sits on the chair in a position that has one of her arms covering her nipples, leaving her just barely covered. "Today, we have one of your fellow students as a model."');
          scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. When you look over at Natasha, you see that she\'s clearly uncomfortable with the woman\'s lack of clothing and is unable to stop herself from blushing. You let out a small, quiet giggle before concentrating on your work for the rest of the lesson');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka2.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a wooden bar as a familiar face walks into the classroom. It\'s Anushka, who is wearing an overcoat. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('As he talks, she removes the overcoat, showing off a pair of pink and black panties with a matching bra, along with a black garter belt and stockings. Her look is finished off with some very tall heels.');
            scene.text('She kneels down on the platform, which causes her panties to slip up the crack of her ass as she looks back over her shoulder taking a modeling pose with a big smile. Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start.');
            scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they hope she models later in the semester too. When you glance over at Natasha, you see that she\'s clearly a bit uncomfortable with Anushka\'s state of undress and despite her best efforts, she can\'t stop herself from blushing slightly.');
            scene.text('You shake your head slightly and smile before getting on with your own work');
            scene.text('The class goes by fairly quickly.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina2.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin places a stool in the middle of the room as a familiar face walks into the classroom. It\'s Albina, who is wearing a set of black lingerie that gets more than a few people talking. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya."');
              scene.text('Albina takes a seat on the stool and runs her hands through her hair, assuming an erotic pose that causes Professor Ilyushin to nod in approval before he walks to the back of the class and tells everyone to start.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Albina, you overhear a few of your male classmates talking about how much they want to draw her naked. When you glance over at Natasha, you see that she\'s clearly uncomfortable with Albina\'s choice of attire and blushes heavily.');
              scene.text('You shake your head slightly and smile before getting on with your own work');
              scene.text('The class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female2.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin places a stool in the middle of the room before turning to the class. "I\'m once again without a model today. Since you done such a good job last time, would you like to volunteer again, Miss Bakalova? You will be posing in your underwear this time. Is that okay with you?"');
              scene.text('The girl nods and walks up to the stool before she strips down to her panties and sits on the stool with her arms covering her large breasts, leaving her nipples just barely covered. Professor Ilyushin seems surprised that she\'s gone topless, but smiles and nods before telling the class to start drawing.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing the girl, you overhear a few of your male classmates talking about how much they want to see and draw her breasts. When you glance over at Natasha, you see that she\'s clearly a bit uncomfortable with Anushka\'s state of undress and despite her best efforts, she can\'t stop herself from blushing slightly.');
              scene.text('You shake your head slightly and smile before getting on with your own work');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
  } else {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After he finishes his lecture, Professor Ilyushin brings out a fairly mundane everyday object and places it on the raised platform. He slides the platform to the center of the room so it\'s easy for everyone to see, then asks everyone to draw the object from their vantage point.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Natasha concentrates hard on the lecture and is clearly comfortable with a theory lesson. Professor Ilyushin didn\'t need to come over to her and could concentrate on helping some of the other students');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male3.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides the platform against one of the walls as a young good looking man comes in and strips down before laying down on his side on the platform. "Today, we have one of your fellow students as a model."');
        scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing him, you overhear a few your female classmates talking about how he\'s not as good looking as the previous male models. Two of the girls can\'t stop giggling, much to Professor Ilyushin\'s annoyance, who lectures them about taking it seriously.');
        scene.text('You notice that Natasha is glowing bright red and think back to school, feeling that the reason she\'s so embarrassed at the whole situation is because she was rumoured to have gone out on a few dates with Lazar, so this model clearly wouldn\'t appeal to her.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female3.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room so it\'s easy for everyone to see as a young woman comes in wearing an overcoat, which she removes to reveal that she\'s completely naked underneath as she sits down on the raised platform. "Today, we have one of your fellow students as a model."');
          scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. When you look at Natasha, you see that she\'s clearly very uncomfortable with the situation and is simply unable to stop herself from blushing.');
          scene.text('You quietly giggle, but Professor Ilyushin notices and tells you to get on with your work before going to help Natasha');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka3.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a raised platform as a familiar face walks into the classroom. It\'s Anushka, who is wearing an overcoat. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('As he talks, she removes the overcoat to reveal that she\'s completely naked underneath, showing off her tattoos - and everything else. She gets on the platform and sits down, leaning to one side to support herself with one arm while tucking her legs back up under her as she smiles at the class.');
            scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they would like to bang her.');
            scene.text('You glance over at Natasha and see that she\'s clearly uncomfortable with Anushka\'s lack of clothing. She blushes occasionally and clearly struggles to concentrate on her work until Professor Ilyushin comes over and talks to her, giving her come encouragement and guidance.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina3.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin sets up a raised platform as a familiar face walks into the classroom. It\'s Albina, who is wearing a short robe. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya." Albina removes her robe to reveal that she\'s completely naked before she sits on the platform and assumes a tastefully artistic pose.');
              scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Albina, you overhear a few of your male classmates talking about how they would love to bang her, with one claiming that he already has.');
              scene.text('You look over at Natasha and notice her blushing not only at Albina\'s lack of clothing, but her alluring pose. She struggles initially, requiring Professor Ilyushin to spend some time with her, but she soon overcomes her embarrassment and completes the lesson without any further assistance');
              scene.text('The class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female3.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room before turning to the class. "Miss Bakalova, I require your services once more. Would you mind posing nude for the class today?"');
              scene.text('The class starts loudly chatting amongst itself as the girl nods and heads into Professor Ilyushin\'s office to undress. She returns covering herself up before she takes her position on the platform, showing off her large breasts to the class. There are a few hushed whispers as everyone notices that her nipples are pierced.');
              scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
              scene.text('As you\'re drawing the girl, you overhear a few of your male classmates talking about how they would like to bang her. When you look at Natasha, you see that she\'s clearly very uncomfortable with the situation and is simply unable to stop herself from blushing.');
              scene.text('You quietly giggle, but Professor Ilyushin notices and tells you to get on with your work before going to help Natasha');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
  ]);
  scene.build();
}

function enterArt_102ModelErmias(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).university ?? 0)?.['semester_week'] < 8) {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After he finishes his lecture, Professor Ilyushin brings out a fairly mundane everyday object and places it on the raised platform. He slides the platform to the center of the room so it\'s easy for everyone to see, then asks everyone to draw the object from their vantage point.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. This is a theory lesson which Ermias finds rather simple');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male2.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides the platform against one of the walls as a young good looking man comes in, strips down to his boxer shorts and half sits and half stands against the edge of the platform. "Today, we have one of your fellow students as a model."');
        scene.text('Professor Ilyushin walks to the back of the class and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing him, you overhear a few of your female classmates talking about how they hope he models later in the semester too. You look over at Ermias and notice him drawing only a rough, but somewhat detailed sketch, clearly uninterested in the model');
        scene.text('The class goes by fairly quickly.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female2.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room so it\'s easy for everyone to see as a young woman with short hair comes in. As Professor Ilyushin talks, she strips down to her panties and sits on the chair in a position that has one of her arms covering her nipples, leaving her just barely covered. "Today, we have one of your fellow students as a model."');
          scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. When you look over at Ermias, you see that he\'s clearly happy with the woman\'s lack of clothing and grins as he draws a fairly detailed sketch. You let out a small, quiet giggle before concentrating on your work for the rest of the lesson');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka2.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a wooden bar as a familiar face walks into the classroom. It\'s Anushka, who is wearing an overcoat. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('As he talks, she removes the overcoat, showing off a pair of pink and black panties with a matching bra, along with a black garter belt and stockings. Her look is finished off with some very tall heels.');
            scene.text('She kneels down on the platform, which causes her panties to slip up the crack of her ass as she looks back over her shoulder taking a modeling pose with a big smile. Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start.');
            scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they hope she models later in the semester too. When you glance over at Ermias, you see that he\'s very pleased with Anushka\'s state of undress and draws a <i>very</i> detailed sketch. You shake your head slightly and smile before getting on with your own work');
            scene.text('The class goes by fairly quickly.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina2.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin places a stool in the middle of the room as a familiar face walks into the classroom. It\'s Albina, who is wearing a set of black lingerie that gets more than a few people talking. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya."');
              scene.text('Albina takes a seat on the stool and runs her hands through her hair, assuming an erotic pose that causes Professor Ilyushin to nod in approval before he walks to the back of the class and tells everyone to start.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Albina, you overhear a few of your male classmates talking about how much they want to draw her naked. When you glance over at Ermias, you see that he very much approves of Albina\'s choice of attire and grins as he draws a <i>very</i> detailed sketch. You shake your head slightly and smile before getting on with your own work');
              scene.text('The class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female2.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin places a stool in the middle of the room before turning to the class. "I\'m once again without a model today. Since you done such a good job last time, would you like to volunteer again, Miss Bakalova? You will be posing in your underwear this time. Is that okay with you?"');
              scene.text('The girl nods and walks up to the stool before she strips down to her panties and sits on the stool with her arms covering her large breasts, leaving her nipples just barely covered. Professor Ilyushin seems surprised that she\'s gone topless, but smiles and nods before telling the class to start drawing.');
              scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing the girl, you overhear a few of your male classmates talking about how much they want to see and draw her breasts. When you look over at Ermias, you see that he\'s clearly happy with the girl\'s lack of clothing and grins as he draws a fairly detailed sketch. You let out a small, quiet giggle before concentrating on your work for the rest of the lesson');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
  } else {
    (s as any).temprand = Math.floor(Math.random() * 7) + 0;
    if (((s as any).temprand ?? 0) < 2) {
      scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
      scene.text('After he finishes his lecture, Professor Ilyushin brings out a fairly mundane everyday object and places it on the raised platform. He slides the platform to the center of the room so it\'s easy for everyone to see, then asks everyone to draw the object from their vantage point.');
      scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. Natasha concentrates hard on the lecture and is clearly comfortable with a theory lesson. Professor Ilyushin didn\'t need to come over to her and could concentrate on helping some of the other students');
      scene.text('The class goes by fairly quickly.');
    } else {
      if (((s as any).temprand ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/male3.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides the platform against one of the walls as a young good looking man comes in and strips down before laying down on his side on the platform. "Today, we have one of your fellow students as a model."');
        scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing him, you overhear a few your female classmates talking about how he\'s not as good looking as the previous male models. Two of the girls can\'t stop giggling, much to Professor Ilyushin\'s annoyance, who lectures them about taking it seriously.');
        scene.text('You notice that Ermias is clearly uninterested in the model and produces a rough sketch that\'s far less detailed than his other ones.');
      } else {
        if (((s as any).temprand ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/electives/art/models/female3.jpg');
          scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room so it\'s easy for everyone to see as a young woman comes in wearing an overcoat, which she removes to reveal that she\'s completely naked underneath as she sits down on the raised platform. "Today, we have one of your fellow students as a model."');
          scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. When you look at Ermias, you see that he\'s clearly enjoying the situation and sketches a <i>very</i> detailed drawing, especially her… anatomy.');
          scene.text('You quietly giggle, but Professor Ilyushin notices and tells you to get on with your work');
          scene.text('The class goes by fairly quickly.');
        } else {
          if (((s as any).temprand ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka3.jpg');
            scene.text('After he finishes his lecture, Professor Ilyushin brings out a raised platform as a familiar face walks into the classroom. It\'s Anushka, who is wearing an overcoat. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
            scene.text('As he talks, she removes the overcoat to reveal that she\'s completely naked underneath, showing off her tattoos - and everything else. She gets on the platform and sits down, leaning to one side to support herself with one arm while tucking her legs back up under her as she smiles at the class.');
            scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they would like to bang her.');
            scene.text('You glance over at Ermias and see him grinning at Anushka as he concentrates on sketching her various tattoos in very high detail.');
          } else {
            if (((s as any).temprand ?? 0) === 5) {
              ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 1;
              scene.img('images/locations/city/island/university/classroom/electives/art/models/albina3.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin sets up a raised platform as a familiar face walks into the classroom. It\'s Albina, who is wearing a short robe. "Today, we have one of your fellow students as a model. Please take your position, Miss Barlovskaya." Albina removes her robe to reveal that she\'s completely naked before she sits on the platform and assumes a tastefully artistic pose.');
              scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Albina, you overhear a few of your male classmates talking about how they would love to bang her, with one claiming that he already has.');
              scene.text('You look over at Ermias and notice him grinning as he sketches a <i>very</i> detailed drawing of Albina, her… anatomy in particular. Professor Ilyushin nods when he glances over Ermias\'s shoulder');
              scene.text('The class goes by fairly quickly.');
            } else {
              scene.img('images/locations/city/island/university/classroom/electives/art/models/female3.jpg');
              scene.text('After he finishes his lecture, Professor Ilyushin slides the platform to the center of the room before turning to the class. "Miss Bakalova, I require your services once more. Would you mind posing nude for the class today?"');
              scene.text('The class starts loudly chatting amongst itself as the girl nods and heads into Professor Ilyushin\'s office to undress. She returns covering herself up before she takes her position on the platform, showing off her large breasts to the class. There are a few hushed whispers as everyone notices that her nipples are pierced.');
              scene.text('Professor Ilyushin nods in approval before walking to the back of the class and telling everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
              scene.text('As you\'re drawing the girl, you overhear a few of your male classmates talking about how they would like to bang her. When you look at Ermias, you see that he\'s clearly enjoying the situation and sketches a <i>very</i> detailed drawing, her large breasts and pierced nipples in particular.');
              scene.text('You quietly giggle, but Professor Ilyushin notices and tells you to get on with your work');
              scene.text('The class goes by fairly quickly.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
  ]);
  scene.build();
}

function enterArt_101Events(s: GameState, scene: SceneBuilder): void {
  (s as any).uni_event_hour = 1;
  (s as any).temprand = Math.floor(Math.random() * 10) + 1;
  if (((s as any).temprand ?? 0) === 1  &&  ((s as any).university ?? 0)?.['alb_art_model'] === 1  &&  ((s as any).year ?? 0) > 2017  ||  (((s as any).year ?? 0) === 2017  &&  ((s as any).month ?? 0) > 9)) {
    ((s as any).university = (s as any).university ?? {})['alb_art_model'] = 0;
    scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
    scene.text('The class is pretty uneventful for the most part, but you notice that Albina seems to have her gaze fixed on one corner of the room, as if she were looking at someone.');
    scene.text('When the lesson ends, Professor Ilyushin informs the class that he can\'t stay and that if anyone needs him, then they should come and see him in his office later or wait for the next class.');
    scene.text('As everyone starts leaving, you spot Albina heading through the door to the professor\'s office to get changed. A few seconds later, you\'re certain that you see someone follow her…');
    scene.actions([
      { label: 'Wait for Albina', goto: ['uni_lessons_electives_art1', 'albina_art'] },
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } else {
    if (((s as any).temprand ?? 0) < 4) {
      scene.img('images/locations/city/island/university/classroom/electives/computer/eatme.jpg');
      scene.text('While everyone else focuses on their drawings, you look around and notice a boy sitting next to you looking past you. You turn your head and glance over to see a girl making the \'eat me\' sign with her fingers and tongue at him. You shake your head and go back to focusing on your drawing.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).temprand ?? 0) < 6) {
        scene.img('images/locations/city/island/university/classroom/electives/psychology/uniskirtpull.jpg');
        scene.text('As class ends, all the students start leaving. Ahead of you is a boy walking with a girl when another boy suddenly runs over and grabs the hem of her dress before pulling it all the way up, showing off her thong and stockings for everyone to see. The girl squeals and jerks away, getting her dress back in place as her apparent boyfriend looks around in confusion. By the time he figures it out, the other boy has already long took off.');
        qspCall(s, 'arousal', 'erotic', 1);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
        ]);
      } else {
        scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
        scene.text('As the sounds of pencils scratching on paper echoes around the otherwise silent room, you look around hoping something interesting will happen, but nothing does.');
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbinaArt(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/lecture_hall/lecture_hall.jpg');
  scene.text('You decide to wait out in the hallway for Albina, but she doesn\'t appear.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.text('You don\'t know what she could be doing and don\'t feel like hanging around any longer, so you decide to leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
    { label: 'Check on her', handler: (st: GameState) => {
    scene.text('You start getting worried, so you head back into the empty classroom and notice the door to the office is slightly ajar as you approach. You can hear noises coming from inside.');
    scene.actions([
      { label: 'Peek', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/blowjob/africanblowjob4.mp4');
    if (((s as any).ErmiasQW ?? 0)?.['meet'] === 0  ||  ((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] !== 2) {
      scene.text('Curious, you peek your head through the gap in the door and are greeted by the sight of Albina on her knees, gagging and slurping as she passionately sucks a black guy\'s massive cock.');
      scene.text('You watch as she pops the drool covered dick out of her mouth and licks the shaft a few times before looking up at the guy. "Are you close yet? As much as I love doing this, I\'ve got places to be."');
      scene.text('The guy grins down at her. "Spread those sexy legs and you\'ll find out…"');
    } else {
      scene.text('Curious, you peek your head through the gap in the door and are greeted by the sight of Albina on her knees, gagging and slurping as she passionately sucks Ermias\'s massive cock.');
      scene.text('You watch as she pops the drool covered dick out of her mouth and licks the shaft a few times before looking up at him. "Are you close yet? As much as I love doing this, I\'ve got places to be."');
      scene.text('Ermias grins down at her. "Spread those sexy legs and you\'ll find out…"');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/lecture_hall/lecture_hall.jpg');
    scene.text('You\'ve seen enough and decide to leave before you\'re spotted. As you leave the room, you hear Albina let out a pleasured squeal.');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'arousal', 'end');
    (s as any).temp_name = (((((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 2  ||  ((s as any).ErmiasQW ?? 0)?.['meet'] === 1)) ? ('Ermias') : ('The black guy'));
    (s as any).temp_name_lower = (((((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 2  ||  ((s as any).ErmiasQW ?? 0)?.['meet'] === 1)) ? ('Ermias') : ('the black guy'));
    scene.img('images/shared/sex/vag/miss/africanmis1.mp4');
    // TODO-QSP: dynamic text: Your curiosity gets the better of you and you peek in further for a better view ...
    scene.text(`Your curiosity gets the better of you and you peek in further for a better view as Albina gets on her back and grins as she spreads her legs. ${((s as any).temp_name || '')} steps between her legs and grinds the thick head of his cock between her wet pussy lips before he starts pushing it against her slit.`);
    scene.text('Albina lets out some soft moans before his cock slides into her pussy, causing her to gasp before letting out a loud, pleasured moan.');
    // TODO-QSP: dynamic text: <<$temp_name>> grins. "You like how my black cock stretches your tight little wh...
    scene.text(`${((s as any).temp_name || '')} grins. "You like how my black cock stretches your tight little white pussy? Beg me to fuck you, slut!"`);
    scene.text('"Please! Please fuck my little white pussy with your big black cock!" she squeals.');
    scene.text('"Good girl," he replies before he thrusts hard, shoving the entire length of his massive cock into her pussy, his balls slapping against her ass as he starts fucking her hard and fast.');
    scene.text('"Fuck, fuck, <i>FUUCKKK</i>!!!" Albina cries out as the pleasure overwhelms her and her legs grow weak.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/lecture_hall/lecture_hall.jpg');
    scene.text('You\'ve seen enough and decide to leave before you\'re spotted. As you leave the room, you hear Albina let out a pleasured squeal.');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Wait for her to finish', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/lecture_hall/lecture_hall.jpg');
    scene.text('You\'ve seen enough and decide to leave them to it, heading back out to the hallway to wait for Albina.');
    // TODO-QSP: dynamic text: You're waiting for quite some time before she finally leaves the classroom with ...
    scene.text(`You're waiting for quite some time before she finally leaves the classroom with ${((s as any).temp_name_lower || '')} in tow. She's clutching her stomach and winces a little in pain; you can guess why…`);
    if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  ((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
      // TODO-QSP: dynamic text: She seems surprised to see you. "Oh, <<$pcs_nickname>>. What are you doing here?...
      scene.text(`She seems surprised to see you. "Oh, ${((s as any).pcs_nickname || '')}. What are you doing here?" she asks, looking a little flustered as ${((s as any).temp_name_lower || '')} grins.`);
      scene.text('"I was waiting for you," you reply. "I thought we could hang out or something?"');
      scene.text('She smiles. "I\'d love to, but I have places to be and things to do. We can hang out when I have some free time."');
      if (((s as any).ErmiasQW ?? 0)?.['meet'] === 1) {
        scene.text('"Okay, cool," you nod. "Hello Ermias."');
        // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>," he replies with a smile.
        scene.text(`"Hello ${((s as any).pcs_nickname || '')}," he replies with a smile.`);
        scene.text('"Ermias was just… helping me clean up after the class," Albina says while blushing slightly. "Now if you\'ll both excuse me, I need to go before I\'m late."');
        scene.text('Ermias sends her on her way with a firm smack on the ass before he heads off in the opposite direction, leaving you alone in the hallway.');
      } else {
        scene.text('"Okay, cool," you nod. "Who\'s this?"');
        scene.text('She gives the guy a knowing grin before she turns back to you. "Not here. I\'ll tell you later. If you\'ll both excuse me, I need to go before I\'m late."');
        scene.text('The black guy sends her on her way with a firm smack on the ass before he heads off in the opposite direction, leaving you alone in the hallway.');
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A23'] > 20) {
        // TODO-QSP: dynamic text: She seems surprised to see you. "<<$pcs_nickname>>? What are you doing here?"
        scene.text(`She seems surprised to see you. "${((s as any).pcs_nickname || '')}? What are you doing here?"`);
        scene.text('"You were taking your time back there. I just wanted to make sure that you were okay," you reply.');
        scene.text('"Oh, that\'s… sweet of you, but I\'m fine. Now if you\'ll excuse me, I need to go before I\'m late."');
        // TODO-QSP: dynamic text: <<$temp_name>> sends her on her way with a firm smack on the ass, causing Albina...
        scene.text(`${((s as any).temp_name || '')} sends her on her way with a firm smack on the ass, causing Albina to whip around and shake her head, but you see a small smile creep onto her lips before she turns and walks away. ${((s as any).temp_name || '')} then heads off in the opposite direction, leaving you alone in the hallway.`);
      } else {
        scene.text('She coldly glares at you when she sees you. "What the fuck do you want?"');
        scene.text('"Oh… Uhm… Nothing I guess? I just wanted to make sure you were okay was all…" you reply.');
        scene.text('She rolls her eyes. "Whatever…"');
        // TODO-QSP: dynamic text: "Friend of yours?" <<$temp_name_lower>> asks.
        scene.text(`"Friend of yours?" ${((s as any).temp_name_lower || '')} asks.`);
        scene.text('"Hardly," she scoffs. "She was just leaving."');
        scene.text('Getting the hint, you turn and walk away, leaving the two of them behind.');
      }
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspGoto(s, 'uni_lessons', 'short_break');
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
    case 'art_101':
      enterArt_101(s, scene);
      break;
    case 'art_101_listen':
      enterArt_101Listen(s, scene);
      break;
    case 'art_101_talk':
      enterArt_101Talk(s, scene);
      break;
    case 'art_102':
      enterArt_102(s, scene);
      break;
    case 'art_102_listen':
      enterArt_102Listen(s, scene);
      break;
    case 'art_102_talk':
      enterArt_102Talk(s, scene);
      break;
    case 'art_101_talk_igor':
      enterArt_101TalkIgor(s, scene);
      break;
    case 'art_102_talk_igor':
      enterArt_102TalkIgor(s, scene);
      break;
    case 'art_101_talk_feofan':
      enterArt_101TalkFeofan(s, scene);
      break;
    case 'art_102_talk_feofan':
      enterArt_102TalkFeofan(s, scene);
      break;
    case 'art_101_talk_natasha':
      enterArt_101TalkNatasha(s, scene);
      break;
    case 'art_102_talk_natasha':
      enterArt_102TalkNatasha(s, scene);
      break;
    case 'art_101_talk_ermias_1':
      enterArt_101TalkErmias_1(s, scene);
      break;
    case 'art_101_talk_ermias_2':
      enterArt_101TalkErmias_2(s, scene);
      break;
    case 'art_102_talk_ermias_1':
      enterArt_102TalkErmias_1(s, scene);
      break;
    case 'art_102_talk_ermias_2':
      enterArt_102TalkErmias_2(s, scene);
      break;
    case 'art_101_model':
      enterArt_101Model(s, scene);
      break;
    case 'art_101_model_igor':
      enterArt_101ModelIgor(s, scene);
      break;
    case 'art_101_model_feofan':
      enterArt_101ModelFeofan(s, scene);
      break;
    case 'art_101_model_natasha':
      enterArt_101ModelNatasha(s, scene);
      break;
    case 'art_101_model_ermias':
      enterArt_101ModelErmias(s, scene);
      break;
    case 'art_102_model':
      enterArt_102Model(s, scene);
      break;
    case 'art_102_model_igor':
      enterArt_102ModelIgor(s, scene);
      break;
    case 'art_102_model_feofan':
      enterArt_102ModelFeofan(s, scene);
      break;
    case 'art_102_model_natasha':
      enterArt_102ModelNatasha(s, scene);
      break;
    case 'art_102_model_ermias':
      enterArt_102ModelErmias(s, scene);
      break;
    case 'art_101_events':
      enterArt_101Events(s, scene);
      break;
    case 'albina_art':
      enterAlbinaArt(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_lessons_electives_art1: LocationDef = {
  name: 'uni_lessons_electives_art1',
  title: 'You walk into the classroom and see Professor Ilyushin stand',
  region: 'other',
  enter: enter,
};
