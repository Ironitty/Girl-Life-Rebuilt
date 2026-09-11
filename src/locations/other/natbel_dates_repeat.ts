import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetPavDatesActs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'natbel_dates_repeat', 'set_small_pav_dates_acts');
  qspCall(s, 'natbel_dates_repeat', 'set_big_pav_dates_acts');
  scene.build();
}

function enterSetSmallPavDatesActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20  &&  qspFunc(s, 'money', 'can_afford', 240) === 1) {
    scene.actions([
      { label: 'Go to the cafe', goto: ['natbel_dates_repeat', 'go_to_del_parco'] },
    ]);
  }
  scene.actions([
    { label: 'Go for a walk', goto: ['natbel_dates_repeat', 'go_for_walk'] },
    { label: 'Go to the park', goto: ['natbel_dates_repeat', 'go_to_park'] },
    { label: 'Go hand out flyers at the park', goto: ['natbel_dates_repeat', 'go_to_park_and_work'] },
  ]);
  scene.build();
}

function enterSetBigPavDatesActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 9) {
    qspCall(s, 'natbel_dates_repeat', 'set_disco_date_act');
    qspCall(s, 'natbel_dates_repeat', 'set_city_race_date_act');
    qspCall(s, 'natbel_dates_repeat', 'set_shopping_date_act');
    qspCall(s, 'natbel_dates_repeat', 'set_celebrate_act');
  }
  scene.build();
}

function enterGoForWalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'npc_relationship', 'modify', 'A16', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/friends/walk1.jpg');
  scene.text('You both head off as friends to hang out together whilst going on a walk around town. On the way, Natasha says, "I like walking around with you as I\'m not into sports too much, and I do like isn\'t the exercise. It\'ll help keep my figure if I stay in shape."');
  scene.text('You look at her and feel that a compliment is in order as she has a lovely figure. "Well, Natasha, I think that you have a lovely figure! Umm… Maybe you might like to go for a jog with me sometime?"');
  scene.text('Natasha is unsure about your suggestion, and you barely get a "Yeah, maybe…" response. You think that at least she didn\'t say no, and it might be fun.');
  scene.actions([
    { label: 'Suggest going to the cafe', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/walk2.jpg');
    // TODO-QSP: dynamic text: A while into your walk, you have an idea and say, "Natasha, my <<$npc_nickname['...
    scene.text(`A while into your walk, you have an idea and say, "Natasha, my ${((s as any).npc_nickname ?? 0)?.['A29']} works at Borislav's cafe near the station, so I can get free food and drinks there. So let's go over and pop in for a drink.`);
    // TODO-QSP: dynamic text: Natasha nods her agreement. "Yes, <<$pcs_nickname>>…" You give her a quizzical l...
    scene.text(`Natasha nods her agreement. "Yes, ${((s as any).pcs_nickname ?? 0)}…" You give her a quizzical look, and she restarts, "Yes, ${((s as any).pcs_nickname ?? 0)}, that would be very nice, but only if you're sure, as we shouldn't take advantage of their offer."`);
    scene.text('You agree and reply, "Yes, you\'re right. It\'s nice of Slava to have made the offer to me, so how about we just have a milkshake each?"');
    scene.text('Natasha smiles and nods enthusiastically. "Now that\'s a great idea!"');
    scene.actions([
      { label: 'Go to the cafe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).frost = 1;
    (s as any).fat = ((s as any).fat ?? 0) + (6);
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (8);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (100);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/cafe1.jpg');
    scene.text('You both head off to the cafe. Once you arrive, you tell Natasha to have a seat while you go and get a couple of shakes. You thank Slava for them and take them back to the table with Natasha. You both sit and enjoy the shakes, chilling out and having a friendly chat about whatever comes to mind, including Natasha\'s interest in the latest fashion. "So Natasha, I hear that you are interested in fashion. Maybe we can look at some clothes together in a store or just flick through a magazine or two." Natasha smiles, and you spend some time where she tells you about some of the latest fashions. Nearly an hour later, you decide to…');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
    { label: 'Just keep walking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/walk2.jpg');
    scene.text('You both hang out as good friends whilst you have a nice walk around town, laughing and joking with each other and chatting about all sorts; just two girls enjoying each other\'s company as best friends should. During your walk, Natasha says, "I\'m really enjoying this just spending time with you and that the walk will be good for my figure."');
    scene.text('You look at her and say, "I can\'t see any problems. You have a lovely figure, Natasha."');
    scene.text('She tells you, "Well, I don\'t get a chance to do much walking or exercise in general as I have to help at home a lot, and it doesn\'t give me much time to myself, which sometimes gets me down."');
    scene.actions([
      { label: 'Keep walking and talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/walk3.jpg');
    scene.text('As the two of you keep walking, you respond with, "Well, how about we go out and about a bit more often in the future?"');
    scene.text('Natasha smiles, "Yes, I\'d love that."');
    // TODO-QSP: dynamic text: After a while, Natasha looks a little sad. Then, finally, she confides in you, "...
    scene.text(`After a while, Natasha looks a little sad. Then, finally, she confides in you, "You know, ${((s as any).pcs_nickname ?? 0)}, I don't have many friends who want to spend time with me other than some of the other nerds, and all they want to do is play games and study."`);
    scene.text('You think about what she\'s just said and respond kindly, "Well, you\'re a very clever young lady, and you should be proud of your ability."');
    scene.text('She smiles at you but says, "Yes, but I feel that there must be more to life than studying." She continues, "I\'m also not much into games like the role-playing stuff the rest do."');
    scene.actions([
      { label: 'Finish your walk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/walk4.jpg');
    scene.text('You bump shoulders with her as the two sit for a moment whilst still talking. "Well, I don\'t mind games, but not all the time. There\'s much more to explore, you\'re right! Although I\'ve often thought of taking up chess to exercise the mind".');
    scene.text('Getting up, you then continue your walk and chat, asking her what interests her, "So Natasha, what does interest you? I\'ve heard some chat that you like fashion."');
    scene.text('She smiles and excitedly tells you, "Yes, I love fashion!" She then pauses, and suddenly the smile vanishes. She looks sad as she continues, "It\'s just frustrating that I can\'t afford anything and have to rely on hand downs".');
    scene.text('This clearly upsets her, so you give her a hug and smile, saying, "Well, Natasha, you mustn\'t give up! Things can get better. You might just need to give it time." Forty-five minutes later, you are back in her apartment, hanging out in her room again.');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGoToPark(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/friends/park1.jpg');
  scene.text('You both head to the park and walk around, enjoying nature and each other\'s company. At the same time, you chat about whatever comes to mind considering the wonders of nature around you. Then, she spots a shy squirrel at the base of the tree. As you carefully approach, it takes fright and rapidly climbs the tree and disappears from sight, prompting you both to giggle as your stealth approach didn\'t work too well.');
  scene.text('You decide to spend quality time chatting, so you ask Natasha about her interests. "So Natasha, I believe you are interested in fashion and makeup?"');
  scene.text('Natasha gives you a wry smile. "Well, yes, I love fashion and would love to get some new clothes as I know that I\'m not viewed too kindly by some of our classmates, however, regrettably, we simply don\'t have much money, and I have to help my mum out as she works hard, but the pay is poor, and we struggle."');
  scene.text('You know many fellow students can be assholes, especially to nerds and outcasts. Still, you also know some of them are not, despite what Natasha might think.');
  scene.actions([
    { label: 'Disagree', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/park2.jpg');
    scene.text('You give her a friendly smile and tell her, "Well, not all your classmates feel that way, and I don\'t just mean the nerds. Maybe we can do some stuff together, and who knows… Maybe we\'ll have to work on your image?" You continue, "So how come you\'re in the nerd group? You\'re clever, but you\'re not a \'typical\' nerd… I can\'t think of any of them other than Julia who\'d like fashion, and even she doesn\'t seem to use makeup much. You\'re not into the games they play and don\'t want to spend all your free time studying… That doesn\'t sound like a nerd to me!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/park3.jpg');
    // TODO-QSP: dynamic text: "No, you're right, <<$pcs_nickname>>, I'm not! Because I'm poor and don't have n...
    scene.text(`"No, you're right, ${((s as any).pcs_nickname ?? 0)}, I'm not! Because I'm poor and don't have nice new clothes, I wouldn't be considered by the popular kids as my image won't fit. Pretty much the same with the jocks, as I also don't have much time for sports, so I don't even know if I'd like it."`);
    scene.text('You look at her and ponder what she\'s just said as she continues, "I love walking around with you and chatting as I don\'t get much of an opportunity to do this and my fellow nerds just aren\'t into this kind of stuff."');
    scene.text('As she pauses and looks at you, you give her a friendly hug and finally get a chance to respond, "Okay, well, first off, we can do more walks after school if you\'d like and if you\'re free. Also, if you want to go for a jog or do some yoga, I\'d be happy if you\'d like to join me. Who knows what the future holds for the popular kids and the jocks? Just don\'t give up on your dreams. They\'re important!"');
    scene.text('Natasha smiles and looks at you contentedly. Forty-five minutes later, you are back in her apartment, hanging out in her room again.');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
    { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/park4.jpg');
    scene.text('You smile at her and agree, "Yeah, I can\'t disagree with you there. Most are assholes! They can be cruel at times which I know isn\'t what you need if you\'re feeling down in the first place!"');
    // TODO-QSP: dynamic text: Natasha is a little surprised at your response and looks at you. "You know what,...
    scene.text(`Natasha is a little surprised at your response and looks at you. "You know what, ${((s as any).pcs_nickname ?? 0)}? I know this may sound horrible, and it's not meant that way, but it's comforting to know I'm not the only one!"`);
    scene.text('You ponder that you both feel in the same place and slowly respond, "Look, Natasha, clearly I don\'t feel that way about you; maybe we can help each other get into a better place…" You continue "So how come you\'re in the nerd group? You\'re clever, but you\'re not a "typical" nerd… I can\'t think of any of them other than Julia who\'d like fashion, and even she doesn\'t seem to use makeup much. You\'re not into the games they play and don\'t want to spend all your free time studying… That doesn\'t sound like a nerd to me!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/park3.jpg');
    // TODO-QSP: dynamic text: "No, you're right, <<$pcs_nickname>>, I'm not! I guess that because I'm poor and...
    scene.text(`"No, you're right, ${((s as any).pcs_nickname ?? 0)}, I'm not! I guess that because I'm poor and don't have nice new clothes I wouldn't be considered by the popular kids as my image won't fit. Pretty much the same with the jocks, as I also don't have much time for sports, so I don't even know if I'd like it."`);
    scene.text('You look at her and ponder what she\'s just said as she continues, "I love walking around with you and chatting as I don\'t get much of an opportunity to do this, and my fellow nerds just aren\'t into this kind of stuff."');
    scene.text('As she pauses and looks at you, you give her a friendly hug and finally get a chance to respond, "Okay, well, first off, we can do more walks and so on after school if you\'d like and if you\'re free. Also, if you want to go for a jog or do some yoga, I\'d be happy if you\'d like to join me. Who knows what the future holds for the popular kids and the jocks? Just don\'t give up on your dreams. They\'re important!"');
    scene.text('Natasha smiles and looks at you contentedly. Forty-five minutes later, you are back in her apartment, hanging out in her room again.');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGoToDelParco(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'money', 'pay', 240);
  qspCall(s, 'beverage', 'kvass_stats');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco1.jpg');
  // TODO-QSP: dynamic text: You both head to the park and walk around. Enjoying the open space and the green...
  scene.text('You both head to the park and walk around. Enjoying the open space and the greenery, which is in marked contrast to your estate, whilst making the most of each other\'s company as friends. After a while, you suggest you go to Del Parco for a drink and get a couple of Kvass. You pay \' + $func(\'money\', \'string_price\', 240) + \' for both yours and Natasha\'s. It\'s a charming restaurant, and you both love it there.');
  // TODO-QSP: dynamic text: Natasha expresses her gratitude to you. "Thanks for this, <<$pcs_nickname>>. You...
  scene.text(`Natasha expresses her gratitude to you. "Thanks for this, ${((s as any).pcs_nickname ?? 0)}. You really didn't have to."`);
  scene.actions([
    { label: 'Be friendly', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco2.jpg');
    scene.text('You respond, "I know; I just wanted to treat my friend. Maybe we can do more like this in the future if you like?"');
    scene.text('Natasha smiles contentedly and shyly nods her agreement.');
    scene.text('While having your drink, you say to Natasha, "I can see that you haven\'t got much in the way of modern fashionable clothes; maybe we can go shopping together at some point?"');
    scene.text('Natasha looks sad and responds, "There\'s nothing I\'d like more, but I simply can\'t afford it. Sometimes I kid myself, but that\'s when I\'ve borrowed money, and I need to stop doing that as it keeps getting on top of me." She takes a deep breath and continues, "It\'s so frustrating as I love fashion and want to be a cool girl. But, if I\'m honest, it\'s simply out of reach, making it difficult to even have a friend, let alone a boyfriend!');
    scene.text('You sympathise and tell her that having a boyfriend isn\'t the answer to everything. A boyfriend relationship comes with difficulties and challenges, although with some benefits. There is a brief silence as you both think inwardly and reflect further on your own lives.');
    scene.text('You nod, give her hand a friendly squeeze, and, smiling at her, say, "Well, who knows what the future may hold." Forty-five minutes later, you decide to…');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    { label: 'Be flirty', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['romance'] = (((s as any).NatbelQW ?? {})['romance'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/Hands.jpg');
    scene.text('You reach over, place your hand on hers, and gently squeeze it, leaving your hand holding hers. "I know; I just wanted to treat you. You mean a lot to me. Maybe we can do more like this in the future if you like?"');
    scene.text('Natasha smiles, then after a moment, she looks around at the other people, after which she gently pulls her hand away. You can tell it made her uncomfortable, but she didn\'t seem to mind it too much. "There\'s nothing I\'d like more, but I simply can\'t afford it. Sometimes I kid myself, but that\'s when I\'ve borrowed money, and I need to stop doing that as it keeps getting on top of me."');
    // TODO-QSP: dynamic text: Natasha continues, "You know, <<$pcs_nickname>>, this has been great… A lovely w...
    scene.text(`Natasha continues, "You know, ${((s as any).pcs_nickname ?? 0)}, this has been great… A lovely walk with a real friend who speaks to me as a person rather than judging me." She lets out a big sigh, "Also, sometime when I can just switch off."`);
    scene.text('You are a little confused and look at her quizzically. "Well, I don\'t judge, but I like you. You are a good friend who is nice to me. That means a lot."');
    // TODO-QSP: dynamic text: "You know, <<$pcs_nickname>>, it's also nice that you chose to come here with me...
    scene.text(`"You know, ${((s as any).pcs_nickname ?? 0)}, it's also nice that you chose to come here with me and took me out of the flat. Sometimes I have difficulty making even the smallest decision." Natasha smiles at you and squeezes your hand, "You know it's nice that I can spend some time where I don't have to think or make decisions and just enjoy life."`);
    scene.text('You look at her and understand her life is a constant struggle and can sympathise. Although your family are not well off, they are in a better position than Natasha and her mum. "You know what, Natasha, you can have some downtime with me. I like being with you and caring for you. I don\'t mind making decisions… You probably don\'t want to know some of the stuff I\'ve had to do to get ahead."');
    scene.text('Natasha looks at you and goes to respond, then thinks better of it and just gives you a lovely smile and squeezes your hand again.');
    scene.text('"Okay, Natasha, it\'s been lovely, but I guess it\'s time to head back."');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGoToParkAndWork(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'money', 'earn', 50, 'cash');
  qspCall(s, 'mood', 'lower', 'small');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/friends/flyers1.jpg');
  scene.text('You both head off to the park, chat about school and current affairs, and spend an hour handing out flyers. But, unfortunately, you only get to spend a little time together as you are both busy with your job.');
  scene.text('However, you have a brief chat about your interests, and Natasha responds, "Well… mine is mainly fashion."');
  scene.text('When she sees you looking at her and not responding, she continues, "Although I\'m in the nerds\' clique, I don\'t really fit in with them and don\'t consider myself at home there. I think there\'s more to life than studying and the games they play on their games night, so I don\'t join them."');
  scene.text('You are unsure how to respond but do your best to reassure her. Giving her a friendly smile, you say, "Well, look, I\'m your friend and let\'s see where the journey takes us." After an hour, you are both a bit richer, and you can…');
  scene.actions([
    { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterSetDiscoDateAct(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6)  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 22) {
    scene.actions([
      { label: 'See if Natasha wants to go to the disco with you (3:00-4:00) [+$func(\'money\', \'get_cost_string\', 25)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 25) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_dates_repeat', 'disco_date1'] }]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterDiscoDate1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha19.jpg');
  scene.text('You see that Natasha is wearing the dress you bought her. "I see you were going to go to the disco then. Nice to see you wearing the dress I bought you. It looks great on you."');
  scene.text('Natasha smiles, "Yes and thanks again for getting it for me. It\'s so much nicer than my others. I\'m almost ready to go, I just need a few minutes to put some makeup on."');
  scene.text('She walks over to a mirror and starts applying her makeup.');
  if (((s as any).pcs_makeup ?? 0) > 1) {
    scene.actions([
      { label: 'Go with Natasha to the disco', goto: ['natbel_dates_repeat', 'disco_date2'] },
    ]);
  } else {
    scene.text('She eyes you from the reflection in the mirror, "I see you aren\'t wearing any makeup. Let me put some on you as well? You\'ll look even lovelier."');
    scene.actions([
      { label: 'Yes please, just a little would be great', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).pcs_makeup = 2;
    qspCall(s, 'stat', '');
    scene.text('Natasha applies a light amount of makeup to your face.');
    scene.text('When she finishes she steps back and looks at your face and immediately blushes.');
    scene.text('"Getting a little warm in her is it?" You tease. "Come on then shall we go?"');
    scene.actions([
      { label: 'Go with Natasha to the disco', goto: ['natbel_dates_repeat', 'disco_date2'] },
    ]);
  } },
      { label: 'Yes, please', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).pcs_makeup = 3;
    qspCall(s, 'stat', '');
    scene.text('Natasha spends a few minutes applying some makeup to your face.');
    scene.text('When she finishes she steps back and looks at your face and immediately blushes.');
    scene.text('"Getting a little warm in her is it?" You tease. "Come on then shall we go?"');
    scene.actions([
      { label: 'Go with Natasha to the disco', goto: ['natbel_dates_repeat', 'disco_date2'] },
    ]);
  } },
      { label: 'No, thanks', handler: (st: GameState) => {
    scene.text('Thanking Natasha, you politely decline the offer.');
    scene.text('She looks slightly disappointed but quickly shrugs it off and you link arms and leave for the disco.');
    scene.actions([
      { label: 'Go with Natasha to the disco', goto: ['natbel_dates_repeat', 'disco_date2'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterDiscoDate2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 20) {
    (s as any).minut = ((s as any).minut ?? 0) + ((60 * (20 - ((s as any).hour ?? 0)) - ((s as any).minut ?? 0)));
  }
  (s as any).minut = ((s as any).minut ?? 0) + (120 + (Math.floor(Math.random() * 31) + 0) + (Math.floor(Math.random() * 31) + 0) + (Math.floor(Math.random() * 31) + 0) + (Math.floor(Math.random() * 31) + 0));
  qspCall(s, 'money', 'pay', 25);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/natasha_sveta_dance.jpg');
  scene.text('After arriving at the disco, you have a couple of dances together then head over to a table and chat.');
  scene.text('A few of the cool kids and jocks approach the two of you and briefly chat with you both and most of these include compliments on Natasha\'s new look and her new dress, leaving her beaming with happiness.');
  scene.text('You both also have a couple of dances with others attending the disco and generally have a great night together.');
  // TODO-QSP: dynamic text: A few hours later, Natasha approaches you. "<<$pcs_nickname>>, I've really enjoy...
  scene.text(`A few hours later, Natasha approaches you. "${((s as any).pcs_nickname ?? 0)}, I've really enjoyed myself tonight but I think we really should get home as it's getting late and I don't want my mother to worry. Would you walk me home please?"`);
  scene.text('"Of course, Natasha. I\'ve had a lovely time too," you tell her. "It\'s so nice to see that at least some of our classmates taking notice of your new look."');
  scene.text('She smiles and nods at you. "Yes it is and that\'s thanks to you. She gives you a quick kiss on the cheek.');
  scene.text('You take her by the hand and walk back to her apartment.');
  scene.text('When you reach her door, she pulls you in close.');
  scene.actions([
    { label: 'Say goodnight', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha20.jpg');
    scene.text('You feel quite tired and realising that she wants to kiss you and where that\'s likely to lead, you hesitate and gently kiss her on the cheek. "Thanks for tonight, I hope you enjoyed it as much as me. Let\'s do this again soon. Okay well I\'m pretty exhausted so I\'m going to head home and sleep."');
    // TODO-QSP: dynamic text: Natasha looks a little disappointed but smiles at you, "Okay well goodnight <<$p...
    scene.text(`Natasha looks a little disappointed but smiles at you, "Okay well goodnight ${((s as any).pcs_nickname ?? 0)} and yes I'd like that too. Maybe you can stay over next time."`);
    scene.text('You nod and take a step back.');
    scene.text('Natasha smiles at you and nods. "Tonight was great. See you soon."');
    scene.text('"Yes it was, see you soon."');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
    { label: 'Kiss her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npcStat', 'A16');
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha25.mp4');
    scene.text('Natasha leads you over to her bed, still holding your hand and turns to you with lust in her eyes.');
    scene.text('You both sit on the bed and Natasha immediately leans into you and starts kissing you.');
    scene.text('You slowly wriggle out of your top, allowing it to slip down your body.');
    scene.text('Wanting more, she pushes you down on the bed while you continue to make out.');
    scene.text('You are both overcome by a loving feeling towards each other and lust quickly takes over.');
    scene.text('She slowly makes her way down your body and tenderly starts kissing and sucking on your breasts.');
    qspCall(s, 'arousal', 'kiss', 6, 'lesbian');
    qspCall(s, 'arousal', 'foreplay', (-2), 'lesbian');
    qspCall(s, 'arousal', 'breasts', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish undressing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha43.jpg');
    scene.text('Once in her room you immediately lead Natasha to her bed and after another passionate kiss you finish undressing her.');
    qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get down to business', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha44.jpg');
    scene.text('You finish pulling her dress down and she steps out of it then sits back on the bed.');
    scene.text('Wasting no time you crawl over to her and push her down onto her back and start massaging her breasts.');
    qspCall(s, 'arousal', 'erotic_nudity', 2, 'lesbian');
    qspCall(s, 'arousal', 'massage_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha45.jpg');
    scene.text('With your dress now loosely around your waist you turn your attention to Natasha\'s pussy as she pulls her panties to the side for you.');
    scene.text('As you start alternately licking and flicking your tongue in and out of her clit she starts moaning and you start tasting her juices which start flowing freely.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Natasha takes control', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha46.jpg');
    scene.text('She really gets into it and takes over pushing you down on the bed then immediately climbing on top of you.');
    scene.text('Looking down at you with a mixture of love and lust she straddles your leg and starts riding it as she strokes your body.');
    scene.text('It doesn\'t take long before she cums on your thigh soaking it with her juices.');
    qspCall(s, 'arousal', 'trib', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha47.jpg');
    scene.text('She leaves you lying on the bed and completely climbs on top of you presenting her pussy to your eager mouth.');
    scene.text('As you get to work on her you feel Natasha sliding her tongue slowly up and down and flicking it inside you as she sucks up your juices that are flowing out by now.');
    scene.text('Suddenly and almost without warning the dam bursts and you reach a toe curling orgasm squirting into her mouth and soaking her face with your juices.');
    qspCall(s, 'arousal', 'cuni_give', (-5), 'lesbian');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Reflect', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 4;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha48.jpg');
    scene.text('You both slowly come down from your high and sit back on the bed cuddling and kissing each other as you both catch your breath.');
    scene.text('Eventually you are able to speak. "Well that was definitely worth the wait! I\'m glad you\'re my <i>girlfriend</i>, you\'d be wasted on guys!"');
    scene.text('Natasha simply responds by kissing you, kisses which you return.');
    qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to bed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha49.jpg');
    scene.text('Natasha looks at you. "Come on let\'s get washed and get some sleep; you know you\'re staying the night, no arguments!"');
    scene.text('"Yep I planned to but thanks for the invitation! Nice to see that you\'re not quite the submissive little girl you used to be but let\'s not get too bossy now." You say with a big grin.');
    scene.text('She shakes her head. "I don\'t think I\'d have the confidence without you… For now at least."');
    scene.text('You both get washed, do your teeth and climb into bed after a long day.');
    scene.text('Flopping down on the bed Natasha gives you a final kiss and after a quick cuddle closes her eyes falling asleep almost immediately.');
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'din_van', 'brush_teeth');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sleep', handler: (st: GameState) => {
    qspCall(s, 'sleep_simple', 'sleep_until', 8, 0);
  }, goto: ['natbel_dates_repeat', 'disco_date3'] },
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

function enterDiscoDate3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha62.jpg');
  scene.text('You wake up slowly and look over to Natasha and she that she\'s waking up too as her eye blinks.');
  scene.text('"Good morning sleepyhead, did you sleep well?"');
  scene.text('She rubs her eyes and yawns then replies. "Yeah and you?"');
  scene.text('"Yep, nice dreams too." You say with a cheeky grin and a wink which makes Natasha blush.');
  scene.actions([
    { label: 'Got to go', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 4;
    qspCall(s, 'outfit', 'wear_last_worn');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha24a.mp4');
    scene.text('"Okay Natasha I\'ve got to get going so thanks for letting me sleep over." You tell her as you get up.');
    // TODO-QSP: dynamic text: "My pleasure <<$pcs_nickname>> let's do this again."
    scene.text(`"My pleasure ${((s as any).pcs_nickname ?? 0)} let's do this again."`);
    scene.text('You nod your agreement at her and get dressed.');
    scene.text('She looks at you. "Can I make you breakfast before you head out?"');
    scene.text('"No that\'s fine Natasha thanks I\'ve got to get going." You finish getting dressed and climb onto the bed and give her a final kiss before heading out the door.');
    qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
    { label: 'Wake up sex', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha51.mp4');
    // TODO-QSP: dynamic text: Natasha slides over to you and wraps her arm around you. "Umm, this is a nice wa...
    scene.text(`Natasha slides over to you and wraps her arm around you. "Umm, this is a nice way to wake up ${((s as any).pcs_nickname ?? 0)}" she says as she starts playing with your breast`);
    scene.text('"Umm… Yeah…" You respond closing your eyes and enjoying her embrace as you slowly start to feel your arousal building.');
    scene.text('It seems that the same is happening to Natasha as you can hear her breathing change and she starts moving against you ever so slightly at first…');
    scene.text('You lie pretty still just letting your body respond to her actions as you let her take control of the pace.');
    scene.text('It\'s not long before she gives you a long passionate kiss which you fully return as you roll over facing her.');
    qspCall(s, 'natbel_kissinggames', 'init_wakeup_sex_routine');
  } },
  ]);
  scene.build();
}

function enterDiscoDate4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha63.jpg');
  // TODO-QSP: dynamic text: After you've both recovered from your early morning exertions Natasha leans over...
  scene.text(`After you've both recovered from your early morning exertions Natasha leans over and says, "Okay ${((s as any).pcs_nickname ?? 0)} I'll cook us some breakfast while you get showered and dressed."`);
  scene.text('"That\'d be great thanks, you know you\'ll make a great wife!"');
  scene.text('She grins at you and looks pleased with herself as she heads off to the kitchen.');
  scene.text('You give her an affectionate smile as you head into the bathroom returning 15 minutes later having got showered and brushed your hair.');
  qspCall(s, 'din_van', 'showerdin');
  (s as any).pcs_hairbsh = 1;
  scene.actions([
    { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
  }, goto: ['wardrobe', 'start'] },
  ]);
  scene.build();
}

function enterDiscoDate5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'food', 'family_meals');
  qspCall(s, 'stat', '');
  scene.text('Once back in the room you quickly get dressed and go to join Natasha in the kitchen just as she\'s finishing breakfast.');
  scene.text('You both tuck in, no doubt hungry from your early morning exercise.');
  scene.text('After a pleasant breakfast and a nice chat you give Natasha a final kiss before leaving telling her you\'ll see her soon.');
  scene.actions([
    { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
  ]);
  scene.build();
}

function enterSetCityRaceDateAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).runnerQW ?? 0)?.['joined_team'] > 0) {
    if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12  &&  (((s as any).runnerQW ?? 0)?.['comp_day'] === ((s as any).daystart ?? 0)  ||  ((s as any).runnerQW ?? 0)?.['prof_stage'] !== 14  ||  ((s as any).runnerQW ?? 0)?.['qualifiers'] < 9)) {
      scene.actions([
        { label: 'Invite Natashsa to go to St Petersburg with you [+$func(\'money\', \'get_cost_string\', 1100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_dates_repeat', 'city_race_date1'] }]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enterCityRaceDate1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha7.jpg');
  scene.text('You see Natasha looking at a magazine so you join her.');
  scene.text('"I\'m going to St. Petersburg for my race and wondered if you\'d like to go with me?"');
  // TODO-QSP: dynamic text: "Oh yes <<$pcs_nickname>>, I'd love to. Let me just go and tell my mother and I'...
  scene.text(`"Oh yes ${((s as any).pcs_nickname ?? 0)}, I'd love to. Let me just go and tell my mother and I've been working hard and saved up some money so I can treat us to an overnight stay and get breakfast."`);
  scene.text('You interrupt her, "No Natasha, that\'s very kind but I\'ve asked you and I\'ll pay for the room. I haven\'t gone to all this trouble sorting out your finances for you to get into a mess again trying to please me."');
  // TODO-QSP: dynamic text: She looks a little crestfallen. "Well okay <<$pcs_nickname>> but at least let me...
  scene.text(`She looks a little crestfallen. "Well okay ${((s as any).pcs_nickname ?? 0)} but at least let me treat us to breakfast and a meal later tonight. It's just a little something nice for us.`);
  scene.text('"Okay Natasha that\'d be lovely thanks." You say with a smile.');
  scene.actions([
    { label: 'Train journey', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    scene.img('images/locations/city/citycenter/hotel/receptionist.jpg');
    if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['trainpass_day']) {
      qspCall(s, 'money', 'pay', 150);
      // TODO-QSP: dynamic text: On arriving at the station you buy a ticket to St. Petersburg centre for Natasha...
      scene.text('On arriving at the station you buy a ticket to St. Petersburg centre for Natasha and hand over the \' + $func(\'money\', \'string_price\', 150) + \' to the guy at the ticket office.');
    } else {
      qspCall(s, 'money', 'pay', 300);
      // TODO-QSP: dynamic text: On arriving at the station you buy two tickets to St. Petersburg centre and hand...
      scene.text('On arriving at the station you buy two tickets to St. Petersburg centre and hand over the \' + $func(\'money\', \'string_price\', 300) + \' to the guy at the ticket office.');
    }
    scene.text('After an uneventful journey you arrive at St Petersburg Centre and head off to the Hotel Indigo to check in.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to your hotel room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'money', 'pay', 500);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/hotel.room.normal.jpg');
    // TODO-QSP: dynamic text: On arriving and going to the reception desk to check in you pay for the room and...
    scene.text('On arriving and going to the reception desk to check in you pay for the room and hand over the \' + $func(\'money\', \'string_price\', 500) + \' for a standard room.');
    scene.text('After paying for the room you head up there and check it out.');
    scene.text('You turn to her. "There, all done and it\'s great you can contribute to our dates but please only what you can; don\'t feel you have to as I\'m happy to simply spend time with you."');
    scene.text('She gives you a hug. "I know but I just want to show my appreciation for all you\'ve done for me. I\'m really enjoying being with you too."');
    scene.actions([
      { label: 'Tell Natasha you\'ll see her after the gym', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/locations/city/citycenter/gym/desk.jpg');
    if (((s as any).kickbox ?? 0)?.['amateurWin'] + ((s as any).kickbox ?? 0)?.['amateurLoss'] + ((s as any).kickbox ?? 0)?.['amateurDraw'] <= 0) {
      scene.text('"Anyway I need to be heading off to the gym for my race. I\'ve got you a ticket so you can watch if you want or you can have a while to yourself and I\'ll text you when I\'m done."');
      // TODO-QSP: dynamic text: "Oh no <<$pcs_nickname>> I wouldn't miss your race for the world! Let's go."
      scene.text(`"Oh no ${((s as any).pcs_nickname ?? 0)} I wouldn't miss your race for the world! Let's go."`);
      scene.text('You both head off to the Havana Fitness Centre where you give Natasha her ticket and you tell her that you\'ll see her later and meet her in the gym\'s reception area, after the race has finished.');
      scene.text('You have a quick think and decide if you want to get a take-away from the diner or just enter the gym. Knowing that Natasha is waiting for you, you decide that you won\'t do any training today and just take part in the race then shower and meet her after.');
    } else {
      scene.text('"Anyway I need to be heading off to the gym as I\'m also competing in a kickboxing competition. You can have a little while to yourself and I\'ll text you when I\'m done."');
      scene.text('Natasha still looks a bit worried and shakes her head but doesn\'t say anything.');
      scene.text('You continue, "Look Natasha, we\'ve talked about this and stop worrying. Anyway, if I get hurt you can play nurse!. I\'ll drop you a text when I go for my shower so you can meet me in the gym\'s reception area then we can go for a bite to eat."');
      // TODO-QSP: dynamic text: A still worried looking Natasha gives you a hug. "Okay <<$pcs_nickname>>, good l...
      scene.text(`A still worried looking Natasha gives you a hug. "Okay ${((s as any).pcs_nickname ?? 0)}, good luck and please try to be careful in the fight."`);
      scene.text('You hug her back and kiss her on the cheek before heading off to get ready.');
      scene.text('You have a quick think and decide if you want to get a take-away from the diner or just enter the gym. Knowing that Natasha is waiting for you, you decide that you won\'t do any training today and just take part in the race then shower and meet her after.');
    }
    (s as any).temp_gold_medals = ((s as any).runnerQW ?? 0)?.['gold_medals'];
    scene.actions([
      { label: 'Get ready', goto: ['natbel_dates_repeat', 'city_race_date_hub'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCityRaceDateHub(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbel_dates_repeat', 'city_race_date_hub');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dressing</b></center>');
  scene.img('images/locations/city/citycenter/gym/locker.jpg');
  scene.text('Recruiting girls for local track team, the winners will receive cash prizes.');
  scene.text('Attention, visitors to the sports section must wear sports outfits and shoes when using the facilities.');
  if (((s as any).pcs_sweat ?? 0) >= 20) {
    scene.actions([
      { label: 'Take a shower (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
    (s as any).pcs_hairbsh = 0;
    (s as any).pcs_makeup = 1;
    if (((s as any).pcs_inhib ?? 0) < 15) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'din_van', 'showerdin');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You go into the bathroom and turn on the shower. You lather your body and wash in the shower.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Get out of the shower', goto: ['natbel_dates_repeat', 'city_race_date_hub'] },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5  ||  ((s as any).pcs_energy ?? 0) < 20  ||  ((s as any).pcs_hydra ?? 0) < 20) {
    scene.actions([
      { label: 'Take a short rest and get some food from a nearby diner', handler: (st: GameState) => {
    if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 3) {
      (s as any).pcs_stam = ((s as any).stammax ?? 0) / 3;
    } else {
      if (((s as any).pcs_stam ?? 0) < 2 * ((s as any).stammax ?? 0) / 3) {
        (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) + (((s as any).stammax ?? 0) / 5);
      }
    }
    if (((s as any).pcs_energy ?? 0) < 50) {
      (s as any).pcs_energy = 50;
    } else {
      if (((s as any).pcs_energy ?? 0) < 75) {
        (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (10);
      }
    }
    if (((s as any).pcs_hydra ?? 0) < 50) {
      (s as any).pcs_hydra = 50;
    } else {
      if (((s as any).pcs_hydra ?? 0) < 75) {
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
      }
    }
    qspCall(s, 'stat', '');
    scene.text('You quickly run outside, grab a bite to eat and a bit of fresh air. You already feel much better.');
    scene.actions([
      { label: 'Continue', goto: ['natbel_dates_repeat', 'city_race_date_hub'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'shortgs', 'clothing_status');
  if (((s as any).kickbox ?? 0)?.['amateurWin'] + ((s as any).kickbox ?? 0)?.['amateurLoss'] + ((s as any).kickbox ?? 0)?.['amateurDraw'] > 0  &&  ((s as any).kickbox ?? 0)?.['amateur_fight_day'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
      scene.actions([
        { label: 'Enter the amateur fight', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
  } },
      ]);
    } else {
      if (((s as any).pcs_energy ?? 0) < 20) {
        scene.actions([
          { label: 'Enter the amateur fight', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
        ]);
      } else {
        if (((s as any).pcs_hydra ?? 0) < 20) {
          scene.actions([
            { label: 'Enter the amateur fight', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
          ]);
        } else {
          if ((!((s as any).PSport ?? 0))) {
            scene.actions([
              { label: 'Enter the amateur fight', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You need to wear your sport clothe...
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Enter the amateur fight', handler: (st: GameState) => {
    ((s as any).kickbox ?? {})['amateur_fight_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'exercise', 'tier3', 30, 'jab', 'punch', 'kick', 'def');
    qspCall(s, 'kickboxing_funcs', 'init_fight_vars');
    ((s as any).kickbox ?? {})['opponent'] = ((s as any).kickbox ?? {})?.['sash'] + ((Math.floor(Math.random() * (5 - -2 + 1)) + (-2)) / 2);
    ((s as any).temp_kickboxVars ?? {})['fight_type'] = 1;
    // TODO-QSP: gs 'kickboxing_funcs', 'generate_opponent', 'amateur_fight', kickbox['opponent']
  }, goto: ['havana_kickboxing', 'match'] },
            ]);
          }
        }
      }
    }
  } else {
    if (((s as any).pcs_run ?? 0) >= 20  &&  ((s as any).runnerQW ?? 0)?.['comp_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).runnerQW ?? 0)?.['joined_team'] > 0) {
      if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
        scene.actions([
          { label: '<b>Enter competition race</b>', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
  } },
        ]);
      } else {
        if (((s as any).pcs_energy ?? 0) < 20) {
          scene.actions([
            { label: '<b>Enter competition race</b>', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
          ]);
        } else {
          if (((s as any).pcs_hydra ?? 0) < 20) {
            scene.actions([
              { label: '<b>Enter competition race</b>', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
            ]);
          } else {
            if (((s as any).apparel ?? 0)?.['status'] !== 'sport') {
              scene.actions([
                { label: '<b>Enter competition race</b>', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You need to wear your sport clothe...
  } },
              ]);
            } else {
              scene.actions([
                { label: '<b>Enter competition race</b>', goto: ['havana_running', 'race_start'] },
              ]);
            }
          }
        }
      }
    } else {
      if (((s as any).PCloStyle2 ?? 0) === 6  ||  ((s as any).PCloSport ?? 0) === 1  ||  ((s as any).PShoStyle2 ?? 0) === 2  ||  ((s as any).PShoSport ?? 0) === 1) {
        scene.actions([
          { label: 'Meet Natasha in the gym reception area  [+$func(\'wrap\', \'neg\', \'(Change your cloth...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You need to wear your normal cloth...
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Meet Natasha in the gym reception area', goto: ['natbel_dates_repeat', 'city_race_date2'] },
        ]);
      }
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
    // TODO-QSP: 'Your deodorant will last you for <b><<mc_inventory[''deodorant'']>></b> more ' + iif(mc_inventory['...
    scene.actions([
      { label: 'Apply deodorant (0:01)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).mc_inventory ?? {})['deodorant'] = (((s as any).mc_inventory ?? {})['deodorant'] ?? 0) - (1);
    qspCall(s, 'sweat', 'deo');
    // TODO-QSP: iif(func('body_din', 'pregnancyVisibility') = 1, '<center><img <<$set_imgh>> src="images/shared/home...
    scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
    scene.actions([
      { label: 'Continue', goto: ['natbel_dates_repeat', 'city_race_date_hub'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'din_van', 'tampon');
  scene.actions([
    { label: 'Use mirror', goto: ['mirror', 'start'] },
    { label: 'Change outfit', goto: ['wardrobe', 'start'] },
  ]);
  scene.build();
}

function enterCityRaceDate2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/gym/desk.jpg');
  scene.text('You exit the shower room and enter the reception area where you see Natasha waiting for you.');
  if (((s as any).runnerQW ?? 0)?.['gold_medals'] > ((s as any).temp_gold_medals ?? 0)) {
    // TODO-QSP: dynamic text: Natasha is positively gushing as she rushes up to you and hugs you tightly "<<$p...
    scene.text(`Natasha is positively gushing as she rushes up to you and hugs you tightly "${((s as any).pcs_nickname ?? 0)} that was something else ${((s as any).pcs_nickname ?? 0)}! Well done! That was super fast. I looked it up and you're very close to the National championships times and not far off Olympic qualification."`);
    scene.text('You smile at her and take her hand, "Yep, well that\'s the idea but I want to study too and have a career so I get to choose rather than have it chosen for me. Anyway enough of me, I want to have some fun time with you so let\'s go and get changed quickly then head off to the shops and have a bit of girly time."');
    // TODO-QSP: dynamic text: That brings a smile "A bit of window shopping sounds like a good plan to me; we ...
    scene.text(`That brings a smile "A bit of window shopping sounds like a good plan to me; we can get to try on some stuff too. Come on ${((s as any).pcs_nickname ?? 0)} let's go."`);
    scene.text('She doesn\'t catch you rolling your eyes or the smirk on your face as you head out.');
  } else {
    // TODO-QSP: dynamic text: Natasha looks happy and smiles at you as she comes up to you and hugs you "<<$pc...
    scene.text(`Natasha looks happy and smiles at you as she comes up to you and hugs you "${((s as any).pcs_nickname ?? 0)} that was close ${((s as any).pcs_nickname ?? 0)}! Well done!"`);
    scene.text('You smile at her and take her hand, "Yep, well guess it\'ll take a bit more practice before I start winning consistently but I want to see how far I can get with this but I want to study too and have a career so I get to choose rather than have it chosen for me. Anyway enough of me, I want to have some fun time with you so let\'s go and get changed quickly then head off to the shops and have a bit of girly time."');
    // TODO-QSP: dynamic text: That brings a smile "A bit of window shopping sounds like a good plan to me; we ...
    scene.text(`That brings a smile "A bit of window shopping sounds like a good plan to me; we can get to try on some stuff too. Come on ${((s as any).pcs_nickname ?? 0)} let's go."`);
    scene.text('She doesn\'t catch you rolling your eyes or the smirk on your face as you head out.');
  }
  scene.actions([
    { label: 'Go to mall', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha11.jpg');
    scene.text('You both head down to the mall and hit the clothes shops.');
    scene.text('As Natasha has some nice outfits now and doesn\'t need anything you just enjoy yourselves having a little fashion show.');
    scene.text('Time flies and before you know it nearly an hour has passed so you tap Natasha on the shoulder and indicate that it\'s time to go as you don\'t want to get to the park restaurant too late.');
    scene.text('You decide on a change of clothes as Natasha wants to dress up for you so you start making your way out of the mall and back to the hotel.');
    scene.actions([
      { label: 'Go to hotel and change', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha42.mp4');
    scene.text('Arriving at the hotel you both freshen up and get changed.');
    scene.text('Natasha decides on her red party dress and new underwear.');
    scene.text('You turn to face her just in time to see her butt fully exposed as she adjusts her dress. "Yep, that\'s the look I was aiming for when I got them for you" you say with a bit of a throaty growl. "I\'ll look forward to peeling them off you later. Anyway <i>girlfriend</i> get a wriggle on as we should get going."');
    scene.text('You can see that your comment made her blush, which brings a smile to you face.');
    scene.actions([
      { label: 'Go to cafe in the park', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 100;
    qspCall(s, 'food', 'golub_stats');
    qspCall(s, 'beverage', 'juice_stats');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/parkcafe.jpg');
    scene.text('Taking hold of Natasha\'s hand you walk in the park to the restaurant passing the time with general chat about current events, school and anything that comes to mind.');
    scene.text('Once you arrive at the restaurant you get a table and Natasha goes to order some food and a drink.');
    scene.text('When she returns you smile at her and say, "Thanks for this Natasha. It\'s very nice but really not necessary."');
    // TODO-QSP: dynamic text: "My pleasure <<$pcs_nickname>>." She replies with a smile.
    scene.text(`"My pleasure ${((s as any).pcs_nickname ?? 0)}." She replies with a smile.`);
    scene.text('You enjoy the meal and have a nice chat covering local events and anything that comes to mind.');
    scene.actions([
      { label: 'Go to hotel for the night', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/park4.jpg');
    // TODO-QSP: dynamic text: When your meal is finished Natasha says, "Okay <<$pcs_nickname>>, I'll go and pa...
    scene.text(`When your meal is finished Natasha says, "Okay ${((s as any).pcs_nickname ?? 0)}, I'll go and pay then I guess we should head out." With that she gets up and pays for the meal.`);
    scene.text('"Thank you Natasha, this was really nice and yes, best get going as we don\'t want to be hanging around in the park too late." You pause then tap her on her butt. "Right <i>girlfriend</i> let\'s get that sexy ass of yours back to the hotel room!"');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Shhh!" She responds going bright red as she gets up and star...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}! Shhh!" She responds going bright red as she gets up and starts walking towards the exit where she stops and buys you an ice pop each. She hands one to you and grinning says "Maybe this will keep you quiet."`);
    scene.text('You can\'t resist a little further teasing so you respond with a smirk. "Well thanks… Oh yes, something to suck on before I get to the main course!"');
    // TODO-QSP: dynamic text: Natasha is now an even brighter shade of red. "<<$pcs_nickname>>! Be quite!… Wha...
    scene.text(`Natasha is now an even brighter shade of red. "${((s as any).pcs_nickname ?? 0)}! Be quite!… What am I to do with you?" She shakes her head.`);
    scene.text('You start to respond. "Well… How should I answer that? Umm…" However, deciding not to tease her further you take her hand and say while grinning. "You know; you\'re really cute when you get embarrassed."');
    scene.text('You both head back to the hotel chatting along the way and sucking on your ice pops.');
    scene.actions([
      { label: 'Start undressing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npcStat', 'A16');
    qspCall(s, 'outfit', 'strip_all');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha43.jpg');
    scene.text('You arrive back at the hotel and enter your room and immediately guide Natasha to the bed and after a passionate kiss you start pulling her dress down. "I\'ve been waiting for this… Good thing we were in a public place earlier or you\'d never have finished your meal!"');
    qspCall(s, 'arousal', 'erotic_nudity', 1, 'lesbian');
    qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get down to business', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha44.jpg');
    scene.text('You pull her dress down and she steps out of it then sits back on the bed.');
    scene.text('Wasting no time you crawl over to her and push her down onto her back and start massaging her breasts.');
    qspCall(s, 'arousal', 'erotic_nudity', 1, 'lesbian');
    qspCall(s, 'arousal', 'massage_give', 4, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha45.jpg');
    scene.text('With your dress now loosely around your waist you turn your attention to Natasha\'s pussy as she pulls her panties to the side for you.');
    scene.text('As you start alternately licking and flicking your tongue in and out of her clit she starts moaning and you start tasting her juices which start flowing freely.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Natasha takes control', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha46.jpg');
    scene.text('She\'s really gets into it and takes over pushing you down on the bed then immediately climbing on top of you.');
    scene.text('Looking down at you with a mixture of love and lust she straddles your leg and starts riding it as she strokes your body.');
    scene.text('It doesn\'t take long before she cums on your thigh soaking it with her juices.');
    qspCall(s, 'arousal', 'trib', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha47.jpg');
    scene.text('She leaves you lying on the bed and completely climbs on top of you presenting her pussy to your eager mouth.');
    scene.text('As you get to work on her you feel Natasha sliding her tongue slowly up and down and flicking it inside you as she sucks up your juices that are flowing out by now.');
    scene.text('Suddenly and almost without warning the dam bursts and you reach a toe curling orgasm squirting into her mouth and soaking her face with your juices.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'arousal', 'cuni', (-5), 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Reflect', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 4;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha48.jpg');
    scene.text('You both slowly come down from your high and sit back on the bed cuddling and kissing each other as you both catch your breath.');
    scene.text('Eventually you are able to speak. "Well that was definitely worth the wait! I\'m glad you\'re my <i>girlfriend</i>, you\'d have been wasted on guys!"');
    scene.text('Natasha simply responds by kissing you and playing with you, kisses which you return.');
    scene.text('In between kisses you tell her "I\'m happy too as you\'re getting a little more confident."');
    scene.text('At that Natasha gives you another kiss and says, "Guess we\'d best get cleaned up and get some sleep."');
    qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to bed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha49.jpg');
    scene.text('You both get washed, do your teeth and climb into bed after a long day.');
    scene.text('Flopping down on the bed Natasha gives you a final kiss and after a quick cuddle closes her eyes falling asleep almost immediately.');
    scene.actions([
      { label: 'Sleep', handler: (st: GameState) => {
    qspCall(s, 'sleep_simple', 'sleep_until', 8, 0);
  }, goto: ['natbel_dates_repeat', 'city_race_date3'] },
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

function enterCityRaceDate3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha50.jpg');
  scene.text('You wake up first and after looking over at Natashsa and seeing she\'s still asleep you check the time on your phone.');
  scene.text('Deciding you need to get moving you give Natasha a soft kiss then nudge slowly waking her up.');
  scene.text('"Come on sleepyhead we need to get moving if we want to do something and I plan to take you somewhere nice today."');
  scene.text('Natasha slowly comes too and rubbing her eyes asks you. "So what\'s the plan?"');
  scene.text('"Well I was going to spend it looking at the shops in the mall but we did that yesterday. I have somewhere else in mind but you\'ll need to wait and see where."');
  // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>."
  scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}."`);
  scene.actions([
    { label: 'Wake up sex', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha51.mp4');
    // TODO-QSP: dynamic text: Natasha slides over to you and wraps her arm around you. "Umm, this is a nice wa...
    scene.text(`Natasha slides over to you and wraps her arm around you. "Umm, this is a nice way to wake up ${((s as any).pcs_nickname ?? 0)}" she says as she starts playing with your breast`);
    scene.text('"Umm… Yeah…" You respond closing your eyes and enjoying her embrace as you slowly start to feel your arousal building.');
    scene.text('It seems that the same is happening to Natasha as you can hear her breathing change and she starts moving against you ever so slightly at first…');
    scene.text('You lie pretty still just letting your body respond to her actions as you let her take control of the pace.');
    scene.text('It\'s not long before she gives you a long passionate kiss which you fully return as you roll over facing her.');
    qspCall(s, 'natbel_kissinggames', 'init_wakeup_sex_routine');
  } },
  ]);
  scene.build();
}

function enterCityRaceDate4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'food', 'family_meals');
  qspCall(s, 'outfit', 'wear_last_worn');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/roomservice.jpg');
  // TODO-QSP: dynamic text: After you've both recovered from your early morning exertions Natasha leans over...
  scene.text(`After you've both recovered from your early morning exertions Natasha leans over and says, "Okay ${((s as any).pcs_nickname ?? 0)} I'll order us some breakfast in bed, my treat."`);
  scene.text('"That\'d be nice, thank you. While you\'re doing that I\'ll get showered and dressed." You give her an affectionate kiss as you head into the bathroom returning 15 minutes later having got showered, brushed your teeth and combed your hair.');
  scene.text('Once back in the room you quickly get dressed just as breakfast arrives.');
  scene.text('You both tuck in, no doubt hungry from your early morning exertions.');
  scene.actions([
    { label: 'Go to the Hermitage museum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha57.jpg');
    // TODO-QSP: dynamic text: Once you're both washed, dressed and finished breakfast Natasha looks at you and...
    scene.text(`Once you're both washed, dressed and finished breakfast Natasha looks at you and asks, "So ${((s as any).pcs_nickname ?? 0)}, shall we go? Is it far?"`);
    scene.text('Smiling you respond, no not far and it\'s a special and famous place, The Hermitage museum. Maybe when you\'re at university you can go and visit as there\'s loads of interesting stuff there plus, as you know from our earlier visit the gardens are beautiful let alone the frontage which is really special and often there are often horse drawn carriages outside."');
    scene.text('Natasha frowns and you guess that\'s because you haven\'t confirmed that you\'l be joining her at university but decide to let it go, at least for now.');
    scene.text('"Let\'s just see how things go eh?" You say taking hold of Natasha\'s hand and heading out.');
    scene.actions([
      { label: 'Enter the museum', handler: (st: GameState) => {
    (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['city_hermitage', 'peacock'] }]);
    } else {
      if (((s as any).temp_rand ?? 0) === 1) {
        scene.actions([{ label: 'Continue', goto: ['city_hermitage', 'art'] }]);
      } else {
        if (((s as any).temp_rand ?? 0) === 2) {
          scene.actions([{ label: 'Continue', goto: ['city_hermitage', 'highlights'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['city_hermitage', 'red_rooms'] }]);
        }
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCityRaceDate5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha65.jpg');
  scene.text('You both exit the museum and return to the city centre.');
  scene.text('You sigh and turn to Natasha, "Well I guess we\'d best be leaving and start to head back home."');
  // TODO-QSP: dynamic text: "Yes <<$pcs_nickname>>. That was really nice thank you. The buildings are beauti...
  scene.text(`"Yes ${((s as any).pcs_nickname ?? 0)}. That was really nice thank you. The buildings are beautiful in themselves let alone what's inside. It'd definitely somewhere I'd like to come back to as there's plenty more to see."`);
  scene.text('"Yes, I\'d like that too and you\'re right about the building, it\'s stunning, even at night." You show her a picture of it all lit up.');
  scene.text('"Anyway, best we get going."');
  scene.actions([
    { label: 'Take the train home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    scene.img('images/locations/city/shared/trainstation/central_station_inside.jpg');
    scene.text('You link arms with her as you both make your way to the central station to get the train home.');
    if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['trainpass_day']) {
      qspCall(s, 'money', 'pay', 150);
      // TODO-QSP: dynamic text: You pay ' + $func('money', 'string_price', 150) + ' for a ticket for Natasha, th...
      scene.text('You pay \' + $func(\'money\', \'string_price\', 150) + \' for a ticket for Natasha, then take your seats on the train home.');
    } else {
      qspCall(s, 'money', 'pay', 300);
      // TODO-QSP: dynamic text: You pay ' + $func('money', 'string_price', 300) + ' for tickets for both Natasha...
      scene.text('You pay \' + $func(\'money\', \'string_price\', 300) + \' for tickets for both Natasha and you, then take your seats on the train home.');
    }
    // TODO-QSP: dynamic text: As you're nearing your station she turns to you and smiles. "Thank you for this ...
    scene.text(`As you're nearing your station she turns to you and smiles. "Thank you for this weekend ${((s as any).pcs_nickname ?? 0)}. I've really enjoyed it."`);
    scene.text('"My pleasure, I really like our time together and yeah, this was a lovely break. Back to reality soon."');
    scene.text('She smiles and nods at you in acknowledgement.');
    scene.text('Before long you\'re heading to your apartment block and go back to her place.');
    scene.text('On arriving Natasha takes you by the hand and leads you to her room.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetShoppingDateAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 20) {
    scene.actions([
      { label: 'Go window shopping (1:30)', goto: ['natbel_dates_repeat', 'shopping_date1'] },
    ]);
  }
  scene.build();
}

function enterShoppingDate1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'npcStat', 'A16');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/friends/shop1.jpg');
  scene.text('You know how much Natasha likes fashion and browsing for clothes, especially now that she\'s debt free and has a few nice outfits so you ask her if she wants to spend an hour or so with you browsing.');
  scene.text('She happily accepts and rushes to get ready then grabs you by the hand and almost drags you out of the room and down the stairs as you head off to the shops.');
  scene.text('Once there you both browse various windows to get an idea of what they\'ve got before heading into a shop.');
  scene.actions([
    { label: 'Head inside a clothes shop', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/friends/shop2.jpg');
    scene.text('It doesn\'t take long before some of the clothes catch Natasha\'s eye and still holding your hand tightly, probably to prevent you trying to escape the inevitable, you think to yourself as she heads inside.');
    scene.text('However, soon enough you are both happily browsing together and it seems she\'s saved some money from her jobs so can afford a couple of things, although she still needs to be careful.');
    scene.actions([
      { label: 'Nightwear', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/friends/shop3.jpg');
    scene.text('She initially looks at some nighties and taking a couple she likes heads into the changing rooms. When you look at her questioningly she tells you. "What? I just want to look good for you."');
    scene.text('Then without waiting for an answer enters the changing tooms to try them on.');
    if (((s as any).NatbelQW ?? 0)?.['shopping'] === 3) {
      // TODO-QSP: dynamic text: A couple of minutes later she comes out of the booth and models one of them and ...
      scene.text(`A couple of minutes later she comes out of the booth and models one of them and a light gown for you. "So ${((s as any).pcs_nickname ?? 0)}, what do you think?"`);
      scene.text('"Looks very pretty on you." You say with a smile.');
      scene.text('"Great I\'ll buy both then as they\'re on sale.');
    } else {
      // TODO-QSP: dynamic text: A couple of minutes later she comes out of the booth and models one of them for ...
      scene.text(`A couple of minutes later she comes out of the booth and models one of them for you. "So ${((s as any).pcs_nickname ?? 0)}, what do you think? I'm not sure"`);
      scene.text('"Looks pretty on you but I think it\'s no better than the one you\'ve already got." You say with a smile.');
      scene.text('She takes a moment to consider your answer then nods her agreement. "Yeah, you\'re right, I\'ll leave it or it\'d just be buying for the sake of it."');
    }
    scene.actions([
      { label: 'Look at underwear', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/friends/shop4.mp4');
    scene.text('A couple of minutes later she spots some underwear she likes and takes them into the changing rooms.');
    scene.text('Almost immediately you hear her call your name so head into the booth.');
    scene.text('You see Natasha topless in front of you with a wicked grin on her face as she shakes her tits for you giggling.');
    scene.text('"Come on you, very nice but we shouldn\'t get carried away in here."');
    // TODO-QSP: dynamic text: "No I know <<$pcs_nickname>>, I just couldn't resist a little tease."
    scene.text(`"No I know ${((s as any).pcs_nickname ?? 0)}, I just couldn't resist a little tease."`);
    qspCall(s, 'arousal', 'erotic', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Try on some underwear', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/friends/shop5.jpg');
    scene.text('You stay in the booth and watch Natasha try on some underwear.');
    // TODO-QSP: dynamic text: She then tugs your top. Take it off please <<$pcs_nickname>>. I want to see if t...
    scene.text(`She then tugs your top. Take it off please ${((s as any).pcs_nickname ?? 0)}. I want to see if this is as nice as what you're wearing."`);
    scene.text('You decide to comply and you stand close together and share a hug and a brief kiss before you both get dressed and leave the booth.');
    qspCall(s, 'arousal', 'erotic', 5, 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-1), 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Pay and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/friends/shop6.jpg');
    scene.text('You look at your watch and realise just over an hour has passed. "Okay Natasha, I don\'t think there\'s anything else here so shall we go to the checkout and head back as an hour has passed already?"');
    scene.text('She nods her agreement and heads to pay for her choices as you wait for her.');
    scene.text('Once she\'s paid for them she moves away from the checkout and crouches down to put her purchases into her bag.');
    scene.text('You notice that her trousers slip down giving you and any other shoppers a good view of her butt crack!');
    scene.text('You simply grin and enjoy the view as you continue to wait for her.');
    scene.actions([
      { label: 'Walk back', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    if (((s as any).NatbelQW ?? 0)?.['shopping'] < 4) {
      ((s as any).NatbelQW ?? {})['shopping'] = 4;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/friends/shop7.jpg');
    scene.text('You both head back chatting about current affairs and anything else that comes to mind.');
    scene.text('The walk back is a little slow as you both get distracted at times along the way.');
    scene.text('It\'s not too long before you\'re entering your apartment block and go back to her place.');
    scene.text('On arriving Natasha opens the door and leads you to her room.');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
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

function enterSetCelebrateAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).runnerQW ?? 0)?.['champ_gold'] > 0  &&  ((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 20) {
    scene.actions([
      { label: 'Celebrate winning the 400M track championship together (1:30) [+$func(\'money\', \'get_cost_string\', 1700)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1700) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_dates_repeat', 'celebrate_runner_championship1'] }]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterCelebrateRunnerChampionship1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/friends/celebrate1.jpg');
  scene.text('You smile happily at Natasha and announce "Hey girlfriend, I\'m taking you out with me to celebrate a special occasion for me!"');
  // TODO-QSP: dynamic text: She looks at you a little confused. "Sorry <<$pcs_nickname>>, I haven't missed y...
  scene.text(`She looks at you a little confused. "Sorry ${((s as any).pcs_nickname ?? 0)}, I haven't missed your birthday have I?"`);
  scene.text('"No silly!" Your smile broadens. "I\'ve just won the St Petersburg 400M track championship…"');
  scene.text('You don\'t get to finish as she rushes over to you and smothers you in a big hug and kisses you passionately.');
  scene.text('She catches you by surprise but you quickly recover and return her kiss.');
  scene.text('After a few moments you break the kiss and tell her to get ready.');
  scene.text('"Well now. That was much nicer than just saying well done!" You say with a grin.');
  scene.actions([
    { label: 'Natasha gets changed and you leave together', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/friends/celebrate2.jpg');
    scene.text('She gets undressed quickly and stands in front of the mirror in her underwear as she selects what to wear.');
    scene.text('As you admire the view you giggle and tell her to hurry up and get dressed or you won\'t be going anywhere.');
    scene.text('"I\'m glad you like what you see." she says smiling happily.');
    scene.text('She selects a nice outfit and gets dressed.');
    scene.actions([
      { label: 'Go to Del Parco together', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/cafe/caffe_del_parco.jpg');
    scene.text('Once she\'s dressed you both head out. You take her hand and lead her towards Del Parco.');
    // TODO-QSP: dynamic text: She turns to you. "This is very nice of you <<$pcs_nickname>>, thank you but you...
    scene.text(`She turns to you. "This is very nice of you ${((s as any).pcs_nickname ?? 0)}, thank you but you didn't have to."`);
    scene.text('"Yeah I know but it\'s fine and I simply want to share my success with you as you\'re an important part of my life now. Anyway, it won\'t put a big dent the prize money I earned from winning the race."');
    scene.actions([
      { label: 'Get seated', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/cafe/caffe_del_parco_in.jpg');
    scene.text('On arriving you are shown top a secluded table overlooking the park.');
    scene.text('You take your seats and make smalltalk as Natasha browses the menu.');
    scene.text('After a few minutes Natasha looks around and notices that you haven\'t looked at your menu and that your table has been laid out differently to the others including wine glasses.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, aren't you going to choose what you want?"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, aren't you going to choose what you want?"`);
    scene.text('"No, It\'s a special occasion so I\'ve pre ordered for us so I hope you like my choices."');
    scene.actions([
      { label: 'What\'s on the menu?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/expensiverest/seated.jpg');
    // TODO-QSP: dynamic text: "So what did you choose <<$pcs_nickname>>? I like most things so I should like w...
    scene.text(`"So what did you choose ${((s as any).pcs_nickname ?? 0)}? I like most things so I should like whatever it is."`);
    scene.text('"Okay well, the starter is a Salad Olivieh or Russian salad. Then we\'ve got a Pelmeni for the main course and I thought we\'d finish with a Kartoshka." You have a small giggle and continue. "I\'ve also asked them to add some lime zest and tequila to give it a bit of a tropical kick."');
    scene.text('You pause. "Oh and we\'ve got a bottle of refreshing Riesling from Fanagoria vinyard."');
    // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>>, that sounds really lovely but isn't it a bit expensive?"
    scene.text(`"Oh ${((s as any).pcs_nickname ?? 0)}, that sounds really lovely but isn't it a bit expensive?"`);
    scene.text('You sigh. "Look Natasha it\'s my treat and you\'re worth it. Now listen carefully please; if you ever again mention how expensive something is when I treat you I\'m going to get very upset and cross with you."');
    scene.text('She doesn\'t reply but smiles at you shyly.');
    scene.actions([
      { label: 'Enjoy a lovely meal', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    qspCall(s, 'money', 'pay', 1700);
    qspCall(s, 'food', 'large_meal_stats');
    qspCall(s, 'beverage', 'wine_stats');
    qspCall(s, 'beverage', 'wine_stats');
    qspCall(s, 'beverage', 'wine_stats');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/friends/celebrate3.jpg');
    scene.text('Soon enough your starters arrives and you both tuck in.');
    scene.text('Seeing Natasha still seems worried about your earlier comment regarding the cost you decide to expand. "Look I\'m not cross with you now, I just want you to stop worrying if I want to spend some money on us." You pause then continue. "Anyway, when you\'re employed by a famous fashion house it\'ll be your turn to treat me."');
    // TODO-QSP: dynamic text: A smiling Natasha grins at you happily. "It'll be my pleasure <<$pcs_nickname>>....
    scene.text(`A smiling Natasha grins at you happily. "It'll be my pleasure ${((s as any).pcs_nickname ?? 0)}. Guess no pressure on me to succeed then?!"`);
    scene.text('"Well Natasha the price of being with me is that you\'ll pull out all the stops to achieve your dream. I\'ll help where I can but most of it will need to come from you."');
    scene.text('You both spend the rest of the time chatting about your race and the door it opens to the National championships and maybe even the Olympics in due course.');
    scene.text('Once you\'ve finished your meal and the bottle of wine you get up and pay, not forgetting to thank them and especially the chef for a delicious meal then leave the restaurant where Natasha is waiting for you.');
    scene.actions([
      { label: 'Return to Natasha\'s', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/friends/celebrate4.jpg');
    // TODO-QSP: dynamic text: "Well, thank you for that <<$pcs_nickname>>, it was lovely and I really enjoyed ...
    scene.text(`"Well, thank you for that ${((s as any).pcs_nickname ?? 0)}, it was lovely and I really enjoyed it. Once again, well done winning your race. I hope I get to see you race again."`);
    scene.text('"Yeah that\'s not a problem as I race there most Saturdays so I\'m sure we can arrange something."');
    // TODO-QSP: dynamic text: "Thank you <<$pcs_nickname>> I'll look forward to that."
    scene.text(`"Thank you ${((s as any).pcs_nickname ?? 0)} I'll look forward to that."`);
    scene.text('Once you arrive back Natasha takes you by the hand and leads you to her room.');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
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
    case 'set_pav_dates_acts':
      enterSetPavDatesActs(s, scene);
      break;
    case 'set_small_pav_dates_acts':
      enterSetSmallPavDatesActs(s, scene);
      break;
    case 'set_big_pav_dates_acts':
      enterSetBigPavDatesActs(s, scene);
      break;
    case 'go_for_walk':
      enterGoForWalk(s, scene);
      break;
    case 'go_to_park':
      enterGoToPark(s, scene);
      break;
    case 'go_to_del_parco':
      enterGoToDelParco(s, scene);
      break;
    case 'go_to_park_and_work':
      enterGoToParkAndWork(s, scene);
      break;
    case 'set_disco_date_act':
      enterSetDiscoDateAct(s, scene);
      break;
    case 'disco_date1':
      enterDiscoDate1(s, scene);
      break;
    case 'disco_date2':
      enterDiscoDate2(s, scene);
      break;
    case 'disco_date3':
      enterDiscoDate3(s, scene);
      break;
    case 'disco_date4':
      enterDiscoDate4(s, scene);
      break;
    case 'disco_date5':
      enterDiscoDate5(s, scene);
      break;
    case 'set_city_race_date_act':
      enterSetCityRaceDateAct(s, scene);
      break;
    case 'city_race_date1':
      enterCityRaceDate1(s, scene);
      break;
    case 'city_race_date_hub':
      enterCityRaceDateHub(s, scene);
      break;
    case 'city_race_date2':
      enterCityRaceDate2(s, scene);
      break;
    case 'city_race_date3':
      enterCityRaceDate3(s, scene);
      break;
    case 'city_race_date4':
      enterCityRaceDate4(s, scene);
      break;
    case 'city_race_date5':
      enterCityRaceDate5(s, scene);
      break;
    case 'set_shopping_date_act':
      enterSetShoppingDateAct(s, scene);
      break;
    case 'shopping_date1':
      enterShoppingDate1(s, scene);
      break;
    case 'set_celebrate_act':
      enterSetCelebrateAct(s, scene);
      break;
    case 'celebrate_runner_championship1':
      enterCelebrateRunnerChampionship1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const natbel_dates_repeat: LocationDef = {
  name: 'natbel_dates_repeat',
  title: 'Dressing',
  region: 'other',
  enter: enter,
};
