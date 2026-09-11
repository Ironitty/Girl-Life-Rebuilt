import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterNerdStudyNight(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).nerdstudynight['start_time'] = ((s as any).totminut ?? 0);
  (s as any).nerdstudynight['day'] = ((s as any).daystart ?? 0);
  scene.img('images/locations/pavlovsk/community/library/nerdsstudy/nerds_study\' + rand(1, 5) + \'.jpg');
  if (((s as any).grupTipe ?? 0) === 3) {
    scene.text('You arrive at the library and see all of your fellow nerds have already gathered around one of the tables. Some are grabbing some books or looking up things on their laptop, while others are sitting and chatting before the study session begins. You sit down with your fellow students and start studying.');
  } else {
    if (((s as any).grupTipe ?? 0) === 5) {
      scene.text('You arrive at the library and see the nerds have already gathered around one of the tables. Some are grabbing some books or looking up things on their laptop, while others are sitting and chatting before the study session begins. When they see you, they all go quiet, they look back and forth a bit and finally Feofan speaks up. "Do you need something?"');
      scene.text('You smile to him and the rest. "My grades are not as good as I would like, so I thought I would come study with the smartest kids in school."');
      scene.text('They exchange looks again and this time Artem speaks up. "Yeah ok, but we are here to study." Then they go back to studying among each other.');
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
        scene.text('You arrive at the library and see the nerds have already gathered around one of the tables. Some are grabbing some books or looking up things on their laptop, while others are sitting and chatting before the study session begins. When they see you, they all go quiet, they look back and forth a bit and finally Feofan speaks up. "Do you need something?"');
        scene.text('You smile to him and the rest. "My grades are not as good as I would like, so I thought I would come study with the smartest kids in school."');
        scene.text('They exchange looks again and this time they huddle up a bit and start whispering back and forth it seems like they are arguing but finally Artem looks up at you and says. "Yeah ok, we know your reputation and we want no part of it, we are here to study and that\'s it, so no funny business." Then they go back to studying among each other.');
      } else {
        scene.text('You arrive at the library and see the nerds have already gathered around one of the tables. Some are grabbing some books or looking up things on their laptop, while others are sitting and chatting before the study session begins. When they see you, they all go quiet, they look back and forth a bit and finally Feofan speaks up. "Do you need something?"');
        scene.text('You smile to him and the rest. "My grades are not as good as I would like, so I thought I would come study with the smartest kids in school."');
        scene.text('They exchange looks again and this time Artem speaks up. "We don\'t want any trouble."');
        scene.text('You give them a reassuring smile. "I promise I am not here to cause problems, I just need help with my school work."');
        scene.text('They exchange looks and a few of them nod before Feofan speaks up again. "Ok sure you can study with us."');
      }
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['pav_library', ''] },
    { label: 'Study', goto: ['pav_library_nerdstudy', 'nerd_study_night1'] },
    { label: 'Chat', goto: ['pav_library_nerdstudy', 'nerd_study_night2'] },
  ]);
  scene.build();
}

function enterNerdStudyNight1(s: GameState, scene: SceneBuilder): void {
  (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (3);
  qspCall(s, 'stat', '');
  if (((s as any).totminut ?? 0) < ((s as any).nerdstudynight ?? 0)?.['start_time'] + 25) {
    (s as any).lern = ((s as any).lern ?? 0) + (Math.floor(Math.random() * 5) + 4);
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 0);
    if (((s as any).lernHome ?? 0) > 1) {
      qspCall(s, 'grades', 'homework', 'school', 'yes', 2, 3, 100);
    } else {
      if (((s as any).lernHome ?? 0) === 1) {
        qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 3, 100);
      }
    }
  } else {
    if (((s as any).totminut ?? 0) < ((s as any).nerdstudynight ?? 0)?.['start_time'] + 45) {
      (s as any).lern = ((s as any).lern ?? 0) + (Math.floor(Math.random() * 3) + 2);
      qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0);
      qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 0);
      if (((s as any).lernHome ?? 0) >= 1) {
        qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 3, 100);
      }
    } else {
      (s as any).lern = ((s as any).lern ?? 0) + (Math.floor(Math.random() * 2) + 1);
      qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0);
    }
  }
  if ((((s as any).totminut ?? 0) - ((s as any).nerdstudynight ?? 0)?.['start_time']) < 60) {
    (s as any).minut = ((s as any).minut ?? 0) + ((60 -((s as any).totminut ?? 0) + ((s as any).nerdstudynight ?? {})?.['start_time']));
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/nerdsstudy/nerds_study\' + rand(1, 5) + \'.jpg');
  scene.text('You help each other out, debate topics and discuss answers. You have a very enjoyable time and feel like you\'ve learned a fair bit about your subject.');
  scene.actions([
    { label: 'Pack up', goto: ['pav_library_nerdstudy', 'nerd_study_night_over'] },
  ]);
  scene.build();
}

function enterNerdStudyNight2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).totminut ?? 0) >= ((s as any).nerdstudynight ?? 0)?.['start_time'] +60) {
    scene.actions([{ label: 'Continue', goto: ['pav_library_nerdstudy', 'nerd_study_night_over'] }]);
  }
  scene.img('images/locations/pavlovsk/community/library/nerdsstudy/nerds_study\' + rand(1, 5) + \'.jpg');
  scene.text('You can\'t help but be a little distracted. You\'re not sure why, but you\'re just not feeling the desire to study. Maybe one of your fellow nerds would like to chat instead?');
  if (((s as any).nerdstudynight ?? 0)?.['Feofan'] === 0) {
    scene.actions([
      { label: 'Chat to Feofan', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).nerdstudynight['Feofan'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A152', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    if (((s as any).npc_rel ?? 0)?.['A152'] >= 60  &&  ((s as any).grupTipe ?? 0) === 3) {
      scene.text('You talk to Feofan about a variety of topics but soon it turns into talking about the game night and him teasing you with some of the stuff he has planned. After a while, he talks about an upcoming convention he wants to go to and cosplay at. The conversation soon comes to an end as he returns to his studies.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A152'] <= 20  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
        scene.text('Feofan isn\'t really interested in talking to you, but you insist and try to keep up a conversation until he finally stops you. "Hey, I\'ve gotta finish this homework." he says awkwardly and focuses on studying while ignoring you.');
      } else {
        scene.text('You strike up a conversation with Feofan. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
      }
    }
    scene.actions([
      { label: 'Start studying', goto: ['pav_library_nerdstudy', 'nerd_study_night1'] },
      { label: 'Chat to someone else', goto: ['pav_library_nerdstudy', 'nerd_study_night2'] },
    ]);
  } },
    ]);
  }
  if (((s as any).nerdstudynight ?? 0)?.['Artem'] === 0) {
    scene.actions([
      { label: 'Chat to Artem', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).nerdstudynight['Artem'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
      scene.text('Artem scoots his chair over closer to you. "I was worried you wouldn\'t show up today." he jokes, but you can tell there\'s a part of him that was being sincere. Artem isn\'t one for public affection, but he still can\'t go without some kind of physical contact with you, which leaves him sitting close enough to you that your legs bump and rub against each other under the table as you talk.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A2'] >= 60  &&  ((s as any).grupTipe ?? 0) === 3) {
        // TODO-QSP: dynamic text: "There you are <<$pcs_nickname>>. How's it going?" Artem greets you. "I figure w...
        scene.text(`"There you are ${((s as any).pcs_nickname ?? 0)}. How's it going?" Artem greets you. "I figure we can get a head-start on Yenotin's lesson while we talk." he says, moving the textbook towards you so you can look at it. While you work, Artem keeps up a lively conversation, talking about a range of different topics.`);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A2'] <= 20  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
          scene.text('You try to chat with Artem, but he doesn\'t seem all that interested in the conversation. His answers are short and he doesn\'t even bother to stop writing in his notebook as you talk.');
        } else {
          scene.text('You strike up a conversation with Artem. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
        }
      }
    }
    scene.actions([
      { label: 'Start studying', goto: ['pav_library_nerdstudy', 'nerd_study_night1'] },
      { label: 'Chat to someone else', goto: ['pav_library_nerdstudy', 'nerd_study_night2'] },
    ]);
  } },
    ]);
  }
  if (((s as any).nerdstudynight ?? 0)?.['Zinaida'] === 0) {
    scene.actions([
      { label: 'Chat to Zinaida', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).nerdstudynight['Zinaida'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A142', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big142.jpg');
    if (((s as any).npc_rel ?? 0)?.['A142'] >= 60  &&  ((s as any).grupTipe ?? 0) === 3) {
      scene.text('You chat about the latest video games with Zinaida. "Hey, look at this. I got into the top ten with my last score." With a small smile, Zinaida shows you her phone, and sure enough she\'s number five on the leaderboard. You congratulate her, which causes her cheeks to flush slightly as she tries to downplay it. The two of you go back to some idle chatter about video games.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A142'] <= 20  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
        scene.text('Zinaida is focused on studying the book in front of her and taking notes, so she rarely says anything back as you try and talk to her. "I\'d like to talk, but I\'m busy trying to study. I need to finish this." she says quietly while looking up at you through her messy hair that hangs down onto her face. She resumes her studying while ignoring you.');
      } else {
        scene.text('You strike up a conversation with Zinaida. She seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
      }
    }
    scene.actions([
      { label: 'Start studying', goto: ['pav_library_nerdstudy', 'nerd_study_night1'] },
      { label: 'Chat to someone else', goto: ['pav_library_nerdstudy', 'nerd_study_night2'] },
    ]);
  } },
    ]);
  }
  if (((s as any).nerdstudynight ?? 0)?.['Gerasim'] === 0) {
    scene.actions([
      { label: 'Chat to Gerasim', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).nerdstudynight['Gerasim'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A153', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big153.jpg');
    if (((s as any).npc_rel ?? 0)?.['A153'] >= 60  &&  ((s as any).grupTipe ?? 0) === 3) {
      // TODO-QSP: dynamic text: You greet Gerasim with a smile and make a point to ask him how his day is going,...
      scene.text(`You greet Gerasim with a smile and make a point to ask him how his day is going, subtly hinting to the fact that you know other students like to make him do their school work. With a shy smile, Gerasim shrugs his shoulders. "I'm fine." he says, his smile growing. "Thanks for worrying about me though ${((s as any).pcs_nickname ?? 0)}." You engage in some idle banter for a while.`);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A153'] <= 20  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
        scene.text('Gerasim isn\'t really interested in talking to you, but you insist and try to keep up a conversation until he finally stops you. "Hey, I really need to study. Maybe we can talk some other time?" he says halfheartedly with an awkward laugh, then focuses on studying.');
      } else {
        scene.text('You strike up a conversation with Gerasim. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
      }
    }
    scene.actions([
      { label: 'Start studying', goto: ['pav_library_nerdstudy', 'nerd_study_night1'] },
      { label: 'Chat to someone else', goto: ['pav_library_nerdstudy', 'nerd_study_night2'] },
    ]);
  } },
    ]);
  }
  if (((s as any).nerdstudynight ?? 0)?.['Julia'] === 0) {
    scene.actions([
      { label: 'Chat to Julia', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).nerdstudynight['Julia'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    if (((s as any).npc_rel ?? 0)?.['A12'] >= 60  &&  ((s as any).grupTipe ?? 0) === 3) {
      scene.text('Usually, Julia is quiet and lets others do most of the talking, but with you, she participates more in the conversation with some friendly banter.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A12'] <= 20  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
        scene.text('You try to talk to Julia, but the conversation becomes completely one-sided, with you doing all the talking while Julia busies herself with schoolwork.');
      } else {
        scene.text('You strike up a conversation with Julia. She seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
      }
    }
    scene.actions([
      { label: 'Start studying', goto: ['pav_library_nerdstudy', 'nerd_study_night1'] },
      { label: 'Chat to someone else', goto: ['pav_library_nerdstudy', 'nerd_study_night2'] },
    ]);
  } },
    ]);
  }
  if (((s as any).nerdstudynight ?? 0)?.['Petka'] === 0) {
    scene.actions([
      { label: 'Chat to Petka', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).nerdstudynight['Petka'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big6.jpg');
    if (((s as any).npc_rel ?? 0)?.['A6'] >= 60  &&  ((s as any).grupTipe ?? 0) === 3) {
      // TODO-QSP: dynamic text: "You really have to read this book <<$pcs_nickname>>! I'm pretty sure it's one y...
      scene.text(`"You really have to read this book ${((s as any).pcs_nickname ?? 0)}! I'm pretty sure it's one you'd enjoy." Petka says excitedly. He starts to tell you about an interesting part he just read, but stops himself with a laugh. "Don't worry, I won't spoil it for you." The two of you chat about some recent books you have read.`);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A6'] <= 20  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
        scene.text('"Can we talk later? I really want to finish studying this chapter before we call it a night." Petka says, only briefly looking up from his book to address you before burying his nose right back into it.');
      } else {
        scene.text('You strike up a conversation with Petka. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
      }
    }
    scene.actions([
      { label: 'Start studying', goto: ['pav_library_nerdstudy', 'nerd_study_night1'] },
      { label: 'Chat to someone else', goto: ['pav_library_nerdstudy', 'nerd_study_night2'] },
    ]);
  } },
    ]);
  }
  if (((s as any).nerdstudynight ?? 0)?.['Natasha'] === 0) {
    scene.actions([
      { label: 'Chat to Natasha', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).nerdstudynight['Natasha'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A16', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big16.jpg');
    if (((s as any).npc_rel ?? 0)?.['A16'] >= 60  &&  ((s as any).grupTipe ?? 0) === 3) {
      if (((s as any).NatbelQW ?? 0)?.['chrispaid'] < 3) {
        // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>! Have you seen this new makeup line coming out? It's expe...
        scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}! Have you seen this new makeup line coming out? It's expensive but I looove the colors!" Natasha says as she holds up the magazine ad for said makeup. She talks about how she can't afford nice things like this and this ends up bringing her down. You quickly change the subject and start complimenting her on her sense of style and grades and reminding her she's a top student in school, which brings a smile to her face.`);
      } else {
        // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>! Have you seen this new makeup line coming out? It's expe...
        scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}! Have you seen this new makeup line coming out? It's expensive but I looove the colors!" Natasha says as she holds up the magazine ad for said makeup. She talks about how she still finds it difficult to afford nice things like this and this ends up bringing her down until you remind her that she's got rid of all her debts and now has some money and you're happy to help her out. She smiles at this but you know that she doesn't want to keep relying on you so you change the subject and start complimenting her on her sense of style and grades and reminding her she's a top student in school, which brings a smile to her face.`);
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A16'] <= 20  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
        scene.text('Natasha isn\'t really interested in talking to you, but you persist in trying to keep up a conversation for a while before she says. "Hey, I\'ve got to… study. Maybe we can talk later?" she says halfheartedly and goes back to studying.');
      } else {
        scene.text('You strike up a conversation with Natasha. She seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
      }
    }
    scene.actions([
      { label: 'Start studying', goto: ['pav_library_nerdstudy', 'nerd_study_night1'] },
      { label: 'Chat to someone else', goto: ['pav_library_nerdstudy', 'nerd_study_night2'] },
    ]);
  } },
    ]);
  }
  if (((s as any).nerdstudynight ?? 0)?.['Evgeny'] === 0) {
    scene.actions([
      { label: 'Chat to Evgeny', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).nerdstudynight['Evgeny'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A151', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big151.jpg');
    if (((s as any).npc_rel ?? 0)?.['A151'] >= 60  &&  ((s as any).grupTipe ?? 0) === 3) {
      scene.text('You strike up a conversation with Evgeny, mostly about school work at first as he is focused on it, but eventually it drifts over to talking about chess before he abruptly stops talking and focuses on studying again.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A151'] <= 20  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
        scene.text('You try talking to Evgeny, but it\'s very one-sided with you doing all of the talking until he finally speaks up. "I don\'t want to sound rude, but we\'re not really friends so I\'m not sure why you\'d want to talk to me." he says quietly. "Anyways, I\'ve got to finish studying, so if you don\'t mind…" He goes back to studying while ignoring you.');
      } else {
        scene.text('You strike up a conversation with Evgeny. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
      }
    }
    scene.actions([
      { label: 'Start studying', goto: ['pav_library_nerdstudy', 'nerd_study_night1'] },
      { label: 'Chat to someone else', goto: ['pav_library_nerdstudy', 'nerd_study_night2'] },
    ]);
  } },
    ]);
  }
  if (((s as any).nerdstudynight ?? 0)?.['Natalia'] === 0) {
    scene.actions([
      { label: 'Chat to Natalia', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).nerdstudynight['Natalia'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A240', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big240.jpg');
    if (((s as any).npc_rel ?? 0)?.['A240'] >= 60  &&  ((s as any).grupTipe ?? 0) === 3) {
      // TODO-QSP: dynamic text: As you approach Natalia, she closes her notebook and waves at you. "Hey <<$pcs_n...
      scene.text(`As you approach Natalia, she closes her notebook and waves at you. "Hey ${((s as any).pcs_nickname ?? 0)}, come and have a seat." You sit next to Natalia and discuss current events while occasionally gossiping about your classmates.`);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A240'] <= 20  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
        scene.text('You try to talk to Natalia, but the conversation becomes completely one-sided, with you doing all the talking while Natalia busies herself with her notebook, keeping others and especially you, from seeing what she is doing.');
      } else {
        scene.text('You strike up a conversation with Natalia. She seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
      }
    }
    scene.actions([
      { label: 'Start studying', goto: ['pav_library_nerdstudy', 'nerd_study_night1'] },
      { label: 'Chat to someone else', goto: ['pav_library_nerdstudy', 'nerd_study_night2'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Study', goto: ['pav_library_nerdstudy', 'nerd_study_night1'] },
  ]);
  scene.build();
}

function enterNerdStudyNightOver(s: GameState, scene: SceneBuilder): void {
  (s as any).nerdstudynight['Feofan'] = 0;
  (s as any).nerdstudynight['Artem'] = 0;
  (s as any).nerdstudynight['Zinaida'] = 0;
  (s as any).nerdstudynight['Gerasim'] = 0;
  (s as any).nerdstudynight['Julia'] = 0;
  (s as any).nerdstudynight['Petka'] = 0;
  (s as any).nerdstudynight['Natasha'] = 0;
  (s as any).nerdstudynight['Evgeny'] = 0;
  (s as any).nerdstudynight['Natalia'] = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/nerdsstudy/nerds_study\' + rand(1, 5) + \'.jpg');
  scene.text('After an hour, everyone starts packing up and talking about heading home. A few text their parents to let them know they\'re leaving the library. You gather up your stuff and leave with the group.');
  scene.actions([
    { label: 'Leave', goto: ['pav_library', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'nerd_study_night':
      enterNerdStudyNight(s, scene);
      break;
    case 'nerd_study_night1':
      enterNerdStudyNight1(s, scene);
      break;
    case 'nerd_study_night2':
      enterNerdStudyNight2(s, scene);
      break;
    case 'nerd_study_night_over':
      enterNerdStudyNightOver(s, scene);
      break;
    default:
      enterNerdStudyNight(s, scene);
      break;
  }
}

export const pav_library_nerdstudy: LocationDef = {
  name: 'pav_library_nerdstudy',
  title: 'You arrive at the library and see all of your fellow nerds h',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['You arrive at the library and see all of your fellow nerds have already gathered around one of the tables. Some are grabbing some books or looking up things on their laptop, while others are sitting and chatting before the study session begins. You sit down with your fellow students and start studying.'],
  enter: enter,
};
