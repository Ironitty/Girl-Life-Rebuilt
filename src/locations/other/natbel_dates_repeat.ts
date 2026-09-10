import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
    (s as any).NatbelQW['romance'] = ((s as any).NatbelQW['romance'] ?? 0) + (1);
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
    if (qspFunc(s, 'money', 'can_afford', 25) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_dates_repeat', 'disco_date1'] }]);
    }
    scene.actions([
      { label: 'See if Natasha wants to go to the disco with you (3:00-4:00) [+$func(\'money\', \'get_cost_string\', 25)]' }, // TODO-QSP: empty action body
    ]);
  }
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
    default:
      enterSetPavDatesActs(s, scene);
      break;
  }
}

export const natbel_dates_repeat: LocationDef = {
  name: 'natbel_dates_repeat',
  title: 'Dressing',
  region: 'other',
  enter: enter,
};
