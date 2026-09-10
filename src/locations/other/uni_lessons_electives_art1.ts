import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterArt_101(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'agil', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'exp_gain', 'artskls', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/classroom/electives/art/class.jpg');
  if (((s as any).university ?? 0)?.['first_visit_art_101']) {
    scene.text('You walk into the classroom and see Professor Ilyushin standing by his desk as the rest of your classmates walk in one-by-one under his watchful eye. You notice his eyes linger a bit longer on some of the prettier girls that are dressed in revealing clothes.');
    scene.text('Once everyone is seated, he starts talking about art and what it means while being his usual friendly and overly chatty self. He seems very passionate about art and not only loves to draw and paint, but discuss what art means, as well as its effects and history in the world.');
  } else {
    (s as any).university['first_visit_art_101'] = 1;
    scene.text('You walk into the classroom and see a middle aged, slightly pudgy looking man with an unattractive face and receding hairline standing by his desk as the rest of your classmates walk in one-by-one under his watchful eye. You notice his eyes linger a bit longer on some of the prettier girls that are dressed in revealing clothes.');
    scene.text('Once everyone is seated, he introduces himself. "I\'m Professor Ilyushin and I\'m going to take you on a wonder adventure in this class. I will be showing you the wonders, amazement and titillation that art can bring to the human soul, as well as how art can evoke some of your baser instincts and desires."');
    scene.text('With that over, he starts talking about art. He seems very passionate about the subject and not only loves to draw and paint, but discusses what art means, as well as its effects and history in the world.');
  }
  scene.actions([
    { label: 'Pay attention in class', goto: ['uni_lessons_electives_art1', 'art_101_listen'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_art1', 'art_101_talk'] },
  ]);
  scene.build();
}

function enterArt_101Listen(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/city/island/university/classroom/attentive${Math.floor(Math.random() * 4) + 1}.jpg`);
  scene.text('Professor Ilyushin\'s lecture is fairly entertaining and you have an easy time paying attention to it.');
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
    (s as any).ErmiasQW['meet'] = 1;
  }, goto: ['uni_lessons_electives_art1', 'art_101_talk_ermias_1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Ermias', goto: ['uni_lessons_electives_art1', 'art_101_talk_ermias_2'] },
    ]);
  }
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
  scene.actions([
    { label: 'Pay attention in class', goto: ['uni_lessons_electives_art1', 'art_102_listen'] },
    { label: 'Talk to a classmate', goto: ['uni_lessons_electives_art1', 'art_102_talk'] },
  ]);
  scene.build();
}

function enterArt_102Listen(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/city/island/university/classroom/attentive${Math.floor(Math.random() * 4) + 1}.jpg`);
  scene.text('Professor Ilyushin\'s lecture is fairly entertaining and you have an easy time paying attention.');
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
    (s as any).ErmiasQW['meet'] = 1;
  }, goto: ['uni_lessons_electives_art1', 'art_102_talk_ermias_1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Ermias', goto: ['uni_lessons_electives_art1', 'art_102_talk_ermias_2'] },
    ]);
  }
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
      scene.text('You sit next to Igor, who does talks to you, but seems far more focused on what the professor is saying than you.');
      scene.text('You sit next to Igor and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
      scene.text('You sit next to Igor, who glances at you with disgust before getting up and moving away.');
    } else {
      scene.text('You sit next to Igor, but he tells you not to distract him and ignores you.');
      scene.text('You sit next to Igor. He\'s polite, but seems more focused on the class than wanting to talk to you.');
    }
  }
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
      scene.text('You sit next to Igor, who does talks to you, but seems far more focused on what the professor is saying than you.');
      scene.text('You sit next to Igor and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
      scene.text('You sit next to Igor, who glances at you with disgust before getting up and moving away.');
    } else {
      scene.text('You sit next to Igor, but he tells you not to distract him and ignores you.');
      scene.text('You sit next to Igor. He\'s polite, but seems more focused on the class than wanting to talk to you.');
    }
  }
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
    scene.text('You sit next to Feofan. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
    scene.text('You sit next to Feofan and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
  }
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
    scene.text('You sit next to Feofan. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
    scene.text('You sit next to Feofan and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
  }
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
    if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
      scene.text('You sit next to Natasha, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
    } else {
      scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
      scene.text('You sit next to Natasha and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
    }
    if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
      scene.text('You sit next to Natasha, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
    } else {
      scene.text('You sit next to Natasha and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
      scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
    }
  }
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
    if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
      scene.text('You sit next to Natasha, but she dismisses all of your attempts to speak with her and spends the lesson ignoring you and paying attention to the class instead.');
    } else {
      scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before a fellow student asks you to be quiet.');
      scene.text('You sit next to Natasha and spend most of the class quietly talking with her. You often get shushed by your fellow students when you get a bit too loud.');
    }
    if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
      scene.text('You sit next to Natasha, but she dismisses all of your attempts to speak with her until she tells you to leave her alone.');
    } else {
      scene.text('You sit next to Natasha and try to talk to her, but she asks you to be quiet so she can focus on the lecture.');
      scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before a fellow student asks you to be quiet.');
    }
  }
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
  scene.text(`You return his smile. "I'm ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, but my friends just call me ${((s as any).pcs_nickname ?? 0)}."`);
  // TODO-QSP: dynamic text: "It is nice to meet you, <<$pcs_nickname>>."
  scene.text(`"It is nice to meet you, ${((s as any).pcs_nickname ?? 0)}."`);
  scene.text('The two of you start chatting and you learn that he and some of his friends came from Africa to study here in Russia. He himself is studying law.');
  scene.text('You compliment him on how good his Russian is before the lecture starts and a fellow student asks you to be quiet.');
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
        scene.text('You sit next to Ermias. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him before a fellow student asks you to be quiet.');
        scene.text('You sit next to Ermias and spend most of the class quietly talking with him. You often get shushed by your fellow students when you get a bit too loud.');
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
      scene.text('You smile back. "Thanks. You\'re not too bad looking yourself…"');
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
      scene.text('He spends some time flirting with you and saying how much fun he had with you before the lecture starts.');
    }
  }
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
  scene.text(`You return his smile. "I'm ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, but my friends just call me ${((s as any).pcs_nickname ?? 0)}."`);
  // TODO-QSP: dynamic text: "It is nice to meet you, <<$pcs_nickname>>."
  scene.text(`"It is nice to meet you, ${((s as any).pcs_nickname ?? 0)}."`);
  scene.text('The two of you start chatting and you learn that he and some of his friends came from Africa to study here in Russia. He himself is studying law.');
  scene.text('You compliment him on how good his Russian is before the lecture starts and a fellow student asks you to be quiet.');
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
      scene.text('You smile back. "Thanks. You\'re not too bad looking yourself…"');
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
      scene.text('He spends some time flirting with you and saying how much fun he had with you before the lecture starts.');
    }
  }
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
      scene.img('images/locations/city/island/university/classroom/electives/art/models/male1.jpg');
      scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform against one of the walls as a young, good-looking man comes in and sits on it. "Today, we have one of your fellow students as a model."');
      scene.text('Professor Ilyushin walks to the back of the class and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing him, you overhear a few of your female classmates talking about how they hope he models next semester too.');
      scene.text('The class goes by fairly quickly.');
      if (((s as any).temprand ?? 0) === 3) {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/female1.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin slides a raised platform to the center of the room so it\'s easy for everyone to see as a young woman comes in and lays down on it. "Today, we have one of your fellow students as a model."');
        scene.text('Professor Ilyushin walks to the back of the classroom and tells everyone to start. He then walks around the class checking on each student, stopping to give pointers or answer questions as needed.');
        scene.text('The class goes by fairly quickly.');
      } else {
        scene.img('images/locations/city/island/university/classroom/electives/art/models/anushka1.jpg');
        scene.text('After he finishes his lecture, Professor Ilyushin brings out a wooden bar as a familiar face walks into the classroom. It\'s Anushka. "Today, we have one of your fellow students as a model. Please take your seat, Miss Konstantinov."');
        scene.text('Anushka straddles the wooden bar and you can tell by his reaction that wasn\'t what he had in mind, but he quickly smiles as if he approves before walking to the back of the class and telling everyone to start.');
        scene.text('He then walks around the class checking on each student, stopping to give pointers or answer questions as needed. As you\'re drawing Anushka, you overhear a few of your male classmates talking about how they hope she models next semester too.');
        scene.text('The class goes by fairly quickly.');
        if (((s as any).temprand ?? 0) === 5) {
          (s as any).university['alb_art_model'] = 1;
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
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['uni_lessons_electives_art1', 'art_101_events'] },
        ]);
      }
    }
  }
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
    default:
      enterArt_101(s, scene);
      break;
  }
}

export const uni_lessons_electives_art1: LocationDef = {
  name: 'uni_lessons_electives_art1',
  title: 'You walk into the classroom and see Professor Ilyushin stand',
  region: 'other',
  description: ['You walk into the classroom and see Professor Ilyushin standing by his desk as the rest of your classmates walk in one-by-one under his watchful eye. You notice his eyes linger a bit longer on some of the prettier girls that are dressed in revealing clothes.'],
  enter: enter,
};
