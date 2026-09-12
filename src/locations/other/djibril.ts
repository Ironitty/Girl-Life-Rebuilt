import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDjibrilRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).reccoldorm = 0;
  (s as any).djibrilflag = 0;
  qspCall(s, 'boyStat', 'A82');
  scene.img('images/locations/city/island/university/dorm/djibrilroom/room.jpg');
  scene.text('His room is bigger than you expected. There is a bed over by the windows, with a laptop sitting on the desk next to it. Closer to the door is a couch and a recliner, with a small TV and PlayStation across from them. It is clean and tastefully decorated.');
  if (((s as any).DjibrilQW ?? 0)?.['african_gangbang'] >= 1  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).DjibrilQW ?? 0)?.['gangbang'] !== ((s as any).daystart ?? 0)) {
    ((s as any).DjibrilQW ?? {})['gangbang'] = ((s as any).daystart ?? 0);
    scene.text('As you enter, he looks you over hungrily. "Would you like me to invite my friends over?"');
    if (((s as any).DjibrilQW ?? 0)?.['anya_inv'] + ((s as any).DjibrilQW ?? 0)?.['nush_inv'] + ((s as any).DjibrilQW ?? 0)?.['nat_inv'] > 0) {
      scene.actions([
        { label: 'How about I invite someone else?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You smile at him. "Actually, I was thinking I could invite over someone else, if you\'re up for it?"');
    scene.text('He pauses to process what you said before he grins. "If you\'re up for it and you think she would be too, then I\'m up for it. Is she pretty?"');
    scene.text('You nod. "Yes, she\'s pretty. Let me text her and see if she\'s around."');
    qspCall(s, 'djibril', 'invite');
  } },
      ]);
    }
    scene.actions([
      { label: 'No', goto: ['djibril', 'djibril_chat'] },
      { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('He grins and grabs his phone before sending a few text messages. Once he finishes, he sits in the reclining chair. "They should be here shortly."');
    scene.text('They arrive within a few minutes and take a seat on the couch with you.');
    scene.actions([
      { label: 'Continue', goto: ['djibrilev1', 'djibrilgb'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_had_sex ?? 0)?.['A82']  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).DjibrilQW ?? 0)?.['seduce'] !== ((s as any).daystart ?? 0)) {
      ((s as any).DjibrilQW ?? {})['seduce'] = ((s as any).daystart ?? 0);
      scene.text('As you enter, he pulls you over towards the couch. "I want you. I want you <i>right now</i>."');
      scene.text('Before you can respond, he pulls you into a kiss.');
      qspCall(s, 'arousal', 'kiss', 3);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return the kiss', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 1);
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_kiss.jpg');
    scene.text('You return the kiss as he puts a hand around your back and pulls you in tighter. After a few seconds, his hand lowers and starts squeezing your ass. He then puts his hands on your shoulders and starts pushing you down.');
    qspCall(s, 'arousal', 'kiss', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Drop to your knees', goto: ['djibrilev1', 'sveta_sex1'] },
      { label: 'Break free', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', (-1));
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You pull away from him. He looks a little disappointed, but doesn\'t press the issue.');
    scene.text('"Umm… What would you like to do instead then?" he asks.');
    qspCall(s, 'arousal', 'end');
    if (((s as any).DjibrilQW ?? 0)?.['anya_inv'] + ((s as any).DjibrilQW ?? 0)?.['nush_inv'] + ((s as any).DjibrilQW ?? 0)?.['nat_inv'] > 0) {
      scene.actions([
        { label: 'How about I invite someone else?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You smile at him. "Actually, I was thinking I could invite over someone else, if you\'re up for it?"');
    scene.text('He pauses to process what you said before he grins. "If you\'re up for it and you think she would be too, then I\'m up for it. Is she pretty?"');
    scene.text('You nod. "Yes, she\'s pretty. Let me text her and see if she\'s around."');
    qspCall(s, 'djibril', 'invite');
  } },
      ]);
    }
    scene.actions([
      { label: 'Let\'s talk', goto: ['djibril', 'djibril_chat'] },
      { label: 'Let\'s play video games', goto: ['djibril', 'djibril_playgames'] },
      { label: 'I should get going', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', (-1));
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You look over at the clock. "I should really get going. Sorry to have bothered you."');
    scene.text('He looks a little confused about you suddenly wanting to go, but doesn\'t say anything as you turn and leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        { label: 'Stop the kiss', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', (-1));
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You pull away from him. He looks a little disappointed, but doesn\'t press the issue.');
    scene.text('"Um… What would you like to do instead then?" he asks.');
    qspCall(s, 'arousal', 'end');
    if (((s as any).DjibrilQW ?? 0)?.['anya_inv'] + ((s as any).DjibrilQW ?? 0)?.['nush_inv'] + ((s as any).DjibrilQW ?? 0)?.['nat_inv'] > 0) {
      scene.actions([
        { label: 'How about I invite someone else?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You smile at him. "Actually, I was thinking I could invite over someone else, if you\'re up for it?"');
    scene.text('He pauses to process what you said before he grins. "If you\'re up for it and you think she would be too, then I\'m up for it. Is she pretty?"');
    scene.text('You nod. "Yes, she\'s pretty. Let me text her and see if she\'s around."');
    qspCall(s, 'djibril', 'invite');
  } },
      ]);
    }
    scene.actions([
      { label: 'Let\'s talk', goto: ['djibril', 'djibril_chat'] },
      { label: 'Let\'s play some games', goto: ['djibril', 'djibril_playgames'] },
      { label: 'I should get going', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', (-1));
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You look over at the clock. "I should really get going. Sorry to have bothered you."');
    scene.text('He looks a little confused about you suddenly wanting to go, but doesn\'t say anything as you turn and leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A82']) {
        scene.text('As you enter, he takes a seat on the couch and pats the seat next to him.');
        scene.text('As you sit down, he turns to you. "So… What do you want to do? We can play some games?" He points to the PlayStation. "We could also just talk, or we could have some fun…"');
        scene.text('You have no doubt about what kind of fun he means.');
        if (((s as any).DjibrilQW ?? 0)?.['anya_inv'] + ((s as any).DjibrilQW ?? 0)?.['nush_inv'] + ((s as any).DjibrilQW ?? 0)?.['nat_inv'] > 0) {
          scene.actions([
            { label: 'How about I invite someone else?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You smile at him. "Actually, I was thinking I could invite over someone else, if you\'re up for it?"');
    scene.text('He pauses to process what you said before he grins. "If you\'re up for it and you think she would be too, then I\'m up for it. Is she pretty?"');
    scene.text('You nod. "Yes, she\'s pretty. Let me text her and see if she\'s around."');
    qspCall(s, 'djibril', 'invite');
  } },
          ]);
        }
        scene.actions([
          { label: 'Let\'s talk', goto: ['djibril', 'djibril_chat'] },
          { label: 'Let\'s play some games', goto: ['djibril', 'djibril_playgames'] },
          { label: 'I should get going', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', (-1));
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You look over at the clock. "I should really get going. Sorry to have bothered you."');
    scene.text('He looks a little confused about you suddenly wanting to go, but doesn\'t say anything as you turn and leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
        ]);
      } else {
        scene.text('As you enter, he takes a seat on the couch and pats the seat next to him.');
        scene.text('As you sit down, he turns to you. "So… what do you want to do? We can play some games?" He points to the PlayStation. "We could also just talk?"');
        scene.actions([
          { label: 'Let\'s talk', goto: ['djibril', 'djibril_chat'] },
          { label: 'Let\'s play video games', goto: ['djibril', 'djibril_playgames'] },
          { label: 'I should get going', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', (-1));
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You look over at the clock. "I should really get going. Sorry to have bothered you."');
    scene.text('He looks a little confused about you suddenly wanting to go, but doesn\'t say anything as you turn and leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDjibrilPlaygames(s: GameState, scene: SceneBuilder): void {
  (s as any).reccoldorm = 0;
  (s as any).djibrilflag = 0;
  qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'npc_relationship', 'modify', 'A82', 1);
  scene.img('images/characters/shared/headshots_main/big82.jpg');
  scene.text('You walk over and take a seat on the couch before picking up one of the controllers. "Sure, let\'s play." He grins and turns the PlayStation on before joining you on the couch and grabbing the other controller.');
  scene.text('It\'s a game about football that you\'ve played before, but not too often. He\'s a much better player than you, but you don\'t mind as the two of you laugh and talk as you play.');
  scene.text('After an hour, he finally turns it off. "I had fun, but I need to get some studying done. Maybe you can come by again some other day?"');
  scene.text('You nod and put the controller down before gathering up your stuff. "Sure, I\'d like that. Well, have fun studying."');
  scene.text('He laughs before escorting you to the door.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
  ]);
  scene.build();
}

function enterDjibrilChat(s: GameState, scene: SceneBuilder): void {
  (s as any).reccoldorm = 0;
  (s as any).djibrilflag = 0;
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  scene.img('images/characters/city/university/boy/djibril/djibriltalk.jpg');
  scene.text('The two of you sit on the couch together and he talks about a few different subjects. You could ask him about something in particular or just make small talk.');
  if (((s as any).meet_kendra ?? 0) === 1) {
    scene.actions([
      { label: 'Ask if he knows Kendra', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/djibriltalk.jpg');
    scene.text('"Do you know Kendra?" you ask. "She lives on this floor."');
    scene.text('He shakes his head a little. "Yeah, I know her, but not too well. We\'ve gone to a few parties together and we have several friends in common, but I don\'t know her really well. Why do you ask?"');
    scene.text('You shrug. "I met her the other day and she\'s… different, to say the least. I was just curious if you guys knew each other since you live on the same floor."');
    scene.text('He laughs a little. "Different… That\'s one way to put it. I\'d say she\'s fucking crazy, and not in the fun way. She\'s very dominating to most people, but some seem to like it."');
    scene.text('He raises a brow, clearly wondering if you fall into that group.');
    scene.text('You continue talking about her, but he doesn\'t seem to know her that well or doesn\'t want to give details about what he does know.');
    scene.actions([
      { label: 'Keep talking', goto: ['djibril', 'djibril_chat'] },
      { label: 'Stop talking and leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  }
  if (((s as any).DjibrilQW ?? 0)?.['anya_inv'] + ((s as any).DjibrilQW ?? 0)?.['nush_inv'] + ((s as any).DjibrilQW ?? 0)?.['nat_inv'] > 0) {
    scene.actions([
      { label: 'How about I invite someone else?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You smile at him. "Actually, I was thinking I could invite over someone else, if you\'re up for it?"');
    scene.text('He pauses to process what you said before he grins. "If you\'re up for it and you think she would be too, then I\'m up for it. Is she pretty?"');
    scene.text('You nod. "Yes, she\'s pretty. Let me text her and see if she\'s around."');
    qspCall(s, 'djibril', 'invite');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/djibriltalk.jpg');
    if (((s as any).npc_had_sex ?? 0)?.['A82'] === 0  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).DjibrilQW ?? 0)?.['seduce'] !== ((s as any).daystart ?? 0)) {
      ((s as any).DjibrilQW ?? {})['seduce'] = ((s as any).daystart ?? 0);
      scene.text('You talk about a wide range of topics. How he\'s enjoying school, any pretty girls that have caught his eye, things he\'s done recently and so on. He in turn asks you about about school, your friends and your home life. Overall, it\'s a pleasant conversation.');
      scene.text('He eventually gets up and pulls you up with him before he starts kissing you.');
      scene.actions([
        { label: 'Return the kiss', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 1);
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_kiss.jpg');
    scene.text('You return the kiss as he puts a hand around your back and pulls you in tighter. After a few seconds, his hand lowers and starts squeezing your ass. He then puts his hands on your shoulders and starts pushing you down.');
    qspCall(s, 'arousal', 'kiss', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Drop to your knees', goto: ['djibrilev1', 'sveta_sex1'] },
      { label: 'Break free', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You pull away from him. He looks a little disappointed, but doesn\'t press the issue.');
    scene.text('"Um… What would you like to do instead then?" he asks.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Let\'s talk', goto: ['djibril', 'djibril_chat'] },
      { label: 'Let\'s play some games', goto: ['djibril', 'djibril_playgames'] },
      { label: 'I should get going', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You look over at the clock. "I should really get going, sorry to have bothered you."');
    scene.text('He looks a little confused about you suddenly wanting to go, but doesn\'t say anything as you turn around and leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        { label: 'Stop the kiss', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You pull away from him. He looks a little disappointed, but doesn\'t press the issue.');
    scene.text('"Um… What would you like to do instead then?" he asks.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Let\'s talk', goto: ['djibril', 'djibril_chat'] },
      { label: 'Let\'s play some games', goto: ['djibril', 'djibril_playgames'] },
      { label: 'I should get going', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('You look over at the clock. "I should really get going. Sorry to have bothered you."');
    scene.text('He looks a little confused about you suddenly wanting to go, but doesn\'t say anything as you turn and leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('You talk about a wide range of topics. How he\'s enjoying university, any pretty girls that have caught his eye, things he\'s done recently and so on. He in turn asks you about about school, your friends and your home life. Overall, it is a pleasant conversation.');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
        { label: 'Keep talking', goto: ['djibril', 'djibril_chat'] },
      ]);
    }
  } },
    { label: 'How is university?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
    scene.img('images/characters/city/university/boy/djibril/djibriltalk.jpg');
    scene.text('"So how is university going?" you ask.');
    scene.text('He smiles. "Pretty good so far. My grades are pretty good, there\'s a lot of parties to attend, not to mention a lot of pretty girls." He then laughs. "But seriously, things are going good. I\'m working on getting my degree, most of the professors are pretty cool, as are most of the other students. A few of them… not so much."');
    scene.actions([
      { label: 'What degree?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/djibriltalk.jpg');
    scene.text('"What are you getting a degree in?"');
    scene.text('He smiles. "Business management. I want to do what my uncle did and open my own business, but I want it to be more than just me. I want to grow it and have hundreds of employees and locations. The whole thing."');
    scene.text('You nod in response. "What kind of business?"');
    scene.text('He shakes his head slightly. "I don\'t know yet. I need to learn how to start and run a business first. Once I know that, I can look around and find something the local area needs, you know? The best businesses offer a service the people need. I just need to figure out what that is."');
    scene.text('He goes on to talk about some things he\'s already learned about how to figure that out and capitalize on it.');
    scene.actions([
      { label: 'Keep talking', goto: ['djibril', 'djibril_chat'] },
      { label: 'Stop talking and leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    { label: 'Ask what he thinks of Russia', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/djibriltalk.jpg');
    scene.text('"So what do you think about Russia?"');
    scene.text('He seems to ponder the question for a second. "I like it. It can be hard with the racism sometimes, but most people are okay. There are some curious girls as well, if you know what I mean, and I\'m happy to satisfy that curiosity," he says with a laugh.');
    scene.text('You ask him about what people have said or done and he tells you some truly awful stories, and not just about what he\'s experienced. He also tells you some stories involving some of the other Africans he knows who are living in the city. After some time, he seems to want to change the subject.');
    scene.actions([
      { label: 'Do you miss your family?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/djibriltalk.jpg');
    scene.text('"Do you miss your family?" you ask.');
    scene.text('He nods. "Sometimes, but I talk to them every week. I also visit my uncle when I can," he replies.');
    scene.text('You ask him about his family back home and he tells you what it was like growing up poor in Africa and how he would like to someday move his family to a nicer place. It\'s obvious he cares about his family.');
    scene.actions([
      { label: 'Keep talking', goto: ['djibril', 'djibril_chat'] },
      { label: 'Stop talking and leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    { label: 'Ask about his uncle', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/djibriltalk.jpg');
    scene.text('"Tell me about your uncle," you say.');
    scene.text('He talks about how he met Luda, but also mentions how Olu was always taking risks and was never willing to settle with what he had, always wanting more out of life. He mentions how his uncle inspired him to come and study here and how he\'s glad he did.');
    scene.text('He goes on to tell a few funny stories about Olu when he was younger and Djibril was just a boy.');
    scene.actions([
      { label: 'Keep talking', goto: ['djibril', 'djibril_chat'] },
      { label: 'Stop talking and leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 1);
    scene.img('images/characters/city/university/boy/djibril/couch_kiss.jpg');
    if (((s as any).pcs_hotcat ?? 0) >= 5) {
      scene.text('As the two of you sit side by side, you lean over and kiss him. He stiffens in surprise at first, but quickly returns the kiss as he puts a hand around your back and pulls you in tighter.');
      scene.text('After a few seconds, he starts encouraging you to slide off the couch.');
      qspCall(s, 'arousal', 'kiss', 3);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Slide off the couch', goto: ['djibrilev1', 'sveta_sex1'] },
      ]);
    } else {
      scene.text('As the two of you sit side by side, you lean over and kiss him. He stiffens in surprise before he pulls away from you and stands up. "Uh… I should really get my homework done…"');
      scene.text('You frown a little as you nod. "Okay. I\'ll leave you in peace."');
      scene.text('He smiles at you and walks you to the door. "Thanks, see you around."');
      scene.text('You walk out into the hall and he shuts the door behind you.');
      qspCall(s, 'arousal', 'kiss', 3);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      ]);
    }
  } },
    { label: 'Stop talking and leave', goto: ['uni_dorm', 'eighth_floor'] },
  ]);
  scene.build();
}

function enterInvite(s: GameState, scene: SceneBuilder): void {
  if (((s as any).DjibrilQW ?? 0)?.['anya_inv'] >= 1  &&  ((s as any).DjibrilQW ?? 0)?.['anya_busy'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Text Anya', goto: ['djibril', 'textanya'] },
    ]);
  }
  if (((s as any).DjibrilQW ?? 0)?.['nush_inv'] >= 1  &&  ((s as any).DjibrilQW ?? 0)?.['nush_busy'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Text Anushka', goto: ['djibril', 'textnush'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Have fun without a third', handler: (st: GameState) => {
    (st as any).OluLoc = 5;
  }, goto: ['djibrilev1', 'sveta_sex1'] },
    { label: 'Just chat instead', goto: ['djibril', 'djibril_chat'] },
  ]);
  scene.build();
}

function enterTextanya(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/phone/text_indoor.jpg');
  scene.text('While the two of you are sitting on the couch, you pull out your phone and send Anya a text. "Hey, what are you doing?"');
  qspCall(s, 'family_schedule', '');
  if (((s as any).locat ?? 0)?.['Anya'] < 9  ||  ((s as any).locat ?? 0)?.['Anya'] > 15) {
    ((s as any).DjibrilQW ?? {})['anya_busy'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).DjibrilQW ?? 0)?.['anya_busy'] === ((s as any).daystart ?? 0)) {
    scene.text('You wait a few seconds before you get a reply. "I\'m busy. Why?"');
    scene.text('You sigh and reply "Nothing. I\'ll talk to you later."');
    scene.text('You glance up at Djibril. "Sorry, she\'s busy."');
    scene.text('"We can still have fun together if you want. Just the two of us."');
    scene.actions([
      { label: 'Say you would rather talk', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('He looks a bit disappointed, but then smiles. "It\'s okay. What do you want to talk about?"');
    scene.actions([
      { label: 'Just chat instead', goto: ['djibril', 'djibril_chat'] },
      { label: 'I should go', handler: (st: GameState) => {
    scene.img('images/characters/city/university/boy/djibril/djibriltalk.jpg');
    scene.text('You look over at the clock. "I should really get going. Sorry to have bothered you."');
    scene.text('He looks a little confused about you suddenly wanting to go, but doesn\'t say anything as you turn and leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      { label: 'Have fun without a third', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 1);
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_kiss.jpg');
    scene.text('You nod. "Okay, sounds like fun." He leans over and kisses you before he stands up. Pulling you up with him, he puts one hand around your back and pulls you in tighter.');
    scene.text('After a few seconds, his hand lowers and starts squeezing your ass. He then puts his hands on your shoulders and starts pushing you down.');
    qspCall(s, 'arousal', 'kiss', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Drop to your knees', goto: ['djibrilev1', 'sveta_sex1'] },
    ]);
  } },
      { label: 'I might know someone else', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/djibriltalk.jpg');
    scene.text('You smile at him. "Giving up so easily? Shame since I might know someone else that might be interested. Let me text her and see if she\'s around."');
    scene.text('He leans back and relaxes. "Works for me. Hopefully she\'s even prettier than the last one."');
    scene.actions([
      { label: 'Invite someone else', goto: ['djibril', 'invite'] },
    ]);
  } },
    ]);
  } else {
    ((s as any).DjibrilQW ?? {})['anya_busy'] = ((s as any).daystart ?? 0);
    scene.text('You wait a few seconds before you get a reply. "Nothing. Why?"');
    scene.text('You smile and reply "Want to come to the city and have some fun with Olu\'s nephew Djibril?"');
    scene.text('You get a reply almost instantly. "Sure! You guys don\'t mind waiting about an hour, do you?"');
    scene.text('You glance up at Djibril and smile. "My sister Anya is on her way. She\'ll be here in about an hour."');
    scene.text('He looks a little surprised. "Your sister?"');
    scene.text('You nod and smile. "Yeah, she wants to have fun with you after I told her about you."');
    scene.text('He just laughs at that.');
    scene.actions([
      { label: 'Wait for Anya', goto: ['djibrilev1', 'djibril_anya'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTextnush(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/phone/text_indoor.jpg');
  scene.text('While the two of you are sitting on the couch, you pull out your phone and send Anushka a text. "Hey, what are you doing?"');
  if (((s as any).hour ?? 0) < 8  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 14)  ||  ((s as any).week ?? 0) === 3  ||  ((s as any).week ?? 0) === 5  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 18)  ||  (Math.floor(Math.random() * 4) + 0) >= 1) {
    ((s as any).DjibrilQW ?? {})['nush_busy'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).DjibrilQW ?? 0)?.['nush_busy'] === ((s as any).daystart ?? 0)) {
    scene.text('You wait a few seconds before you get a reply. "In the middle of something right now. What\'s up bitch?"');
    scene.text('You sigh and reply "Nothing. I\'ll talk to you later."');
    scene.text('You glance up at Djibril. "Sorry. She\'s busy."');
    scene.text('"We can still have fun together if you want. Just the two of us."');
    scene.actions([
      { label: 'Say you would rather talk', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big82.jpg');
    scene.text('He looks a bit disappointed, but then smiles. "It\'s okay. What do you want to talk about?"');
    scene.actions([
      { label: 'Just chat instead', goto: ['djibril', 'djibril_chat'] },
      { label: 'I should go', handler: (st: GameState) => {
    scene.img('images/characters/city/university/boy/djibril/djibriltalk.jpg');
    scene.text('You look over at the clock. "I should really get going. Sorry to have bothered you."');
    scene.text('He looks a little confused about you suddenly wanting to go, but doesn\'t say anything as you turn and leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      { label: 'Have fun without a third', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 1);
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_kiss.jpg');
    scene.text('You nod. "Okay, sounds like fun." He leans over and kisses you before he stands up. Pulling you up with him, he puts one hand around your back and pulls you in tighter.');
    scene.text('After a few seconds, his hand lowers and starts squeezing your ass. He then puts his hands on your shoulders and starts pushing you down.');
    qspCall(s, 'arousal', 'kiss', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Drop to your knees', goto: ['djibrilev1', 'sveta_sex1'] },
    ]);
  } },
      { label: 'I might know someone else', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/djibriltalk.jpg');
    scene.text('You smile at him. "Giving up so easily? Shame since I might know someone else that might be interested. Let me text her and see if she\'s around."');
    scene.text('He leans back and relaxes. "Works for me. Hopefully she\'s even prettier than the last one."');
    scene.actions([
      { label: 'Invite someone else', goto: ['djibril', 'invite'] },
    ]);
  } },
    ]);
  } else {
    ((s as any).DjibrilQW ?? {})['nush_busy'] = ((s as any).daystart ?? 0);
    scene.text('You wait a few seconds before you get a reply. "Why? You got something fun going on?"');
    scene.text('You smile and reply "Want to come to the university dorm in the city and hang out with Djibril, the college boy I was telling you about?"');
    scene.text('She quickly texts back "Damn, you slut! Getting more big black cock?" followed by the eggplant, donut and sweat drops emojis.');
    scene.text('You shake your head as you send a reply "So is that a yes or a no, slut?"');
    scene.text('You wait for the reply. "It\'ll take me about an hour to get there. Cool?"');
    scene.text('You glance over at Djibril. "She said she\'ll be about an hour since she\'s in Pavlovsk."');
    scene.text('He nods. "Sure, we can play some video games until she gets here."');
    scene.text('You smile and send a text to Anushka. "Yeah, it\'s cool. We\'ll try and wait for you, but no promises."');
    scene.text('She replies with a peace sign followed by a tongue. "Slut! OMW!"');
    scene.text('You glance up at Djibril and smile. "Nush is on her way. I think you\'ll like her."');
    scene.actions([
      { label: 'Wait for Anushka', goto: ['djibrilev1', 'djibril_nush'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'djibril_room':
      enterDjibrilRoom(s, scene);
      break;
    case 'djibril_playgames':
      enterDjibrilPlaygames(s, scene);
      break;
    case 'djibril_chat':
      enterDjibrilChat(s, scene);
      break;
    case 'invite':
      enterInvite(s, scene);
      break;
    case 'textanya':
      enterTextanya(s, scene);
      break;
    case 'textnush':
      enterTextnush(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const djibril: LocationDef = {
  name: 'djibril',
  title: 'His room is bigger than you expected. There is a bed over by',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
