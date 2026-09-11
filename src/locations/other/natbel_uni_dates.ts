import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCoffeeHoleChat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).yearstart ?? 0) < 2  ||  ((s as any).week ?? 0) >= 5  ||  ((s as any).hour ?? 0) < 15  ||  ((s as any).hour ?? 0) >= 18) {
    // TODO-QSP: exit
  }
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 9) {
    // TODO-QSP: exit
  }
  if (((s as any).NatbelQW ?? 0)?.['uni_nightclub_date'] < 2) {
    // TODO-QSP: exit
    // TODO-QSP: !! Must have completed the nightclub date first (sets value to 2)
  }
  (s as any).natbel_here = 1;
  if (((s as any).week ?? 0) >= 4) {
    scene.actions([
      { label: 'Ask Natasha to the nightclub [+$func(\'money\', \'get_cost_string\', 930, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 930, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_dates', 'nightclub_date_ask'] }]);
    }
  } },
    ]);
  }
  if (((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1) {
    if (((s as any).NatbelQW ?? 0)?.['uni_dates_beach_1'] > 0) {
      scene.actions([
        { label: 'Ask Natasha to go to the beach', goto: ['natbel_uni_dates', 'beach_date1'] },
      ]);
    } else {
      if (qspFunc(s, 'clothing', 'get_swimwear_count') === 0) {
        scene.actions([
          { label: 'Ask Natasha to go to the beach [+$func(\'money\', \'get_cost_string\', 4400)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 4400) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_dates', 'beach_date1'] }]);
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Ask Natasha to go to the beach [+$func(\'money\', \'get_cost_string\', 2650)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2650) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_dates', 'beach_date1'] }]);
    }
  } },
        ]);
      }
    }
  }
  return;
  scene.actions([
    { label: 'Ask Natasha to go to the mall [+$func(\'money\', \'get_cost_string\', 350)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 350) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_dates', 'mall_date1'] }]);
    }
  } },
    { label: 'Ask Natasha if she\'d like to go to the National library [+$func(\'money\', \'get_cost_string\', 500)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_dates', 'library_date1'] }]);
    }
  } },
    { label: 'Stay in the cafe and chat with Natasha [+$func(\'money\', \'get_cost_string\', 540)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 540) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_dates', 'cafe_date1'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterDormChats(s: GameState, scene: SceneBuilder): void {
  if (((s as any).week ?? 0) >= 4) {
    if (((s as any).PCloSkirt ?? 0) <= 2  &&  ((s as any).PCloPants ?? 0) <= 4  &&  ((s as any).PCloPanties ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'salacious_dress'  &&  ((s as any).clothingworntype ?? 0) !== 'salacious_outfits') {
      scene.actions([
        { label: 'Go to the nightclub with Natasha  [+$func(\'wrap\', \'neg\', \'(Wear a nice dress...]', handler: (st: GameState) => {
    // TODO-QSP: *pl $func('wrap', 'neg', '<br>You should wear a nice dress f...
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go to the nightclub with Natasha [+$func(\'money\', \'get_cost_string\', 930, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 930, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_dates', 'nightclub_date1'] }]);
    }
  } },
      ]);
    }
  }
  return;
  scene.build();
}

function enterNightclubDateAsk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
  scene.text('You spot Natasha sitting alone by the window and head over.');
  scene.text('After exchanging greetings and a brief chat you decide you want to invite Natasha on a date with you.');
  // TODO-QSP: dynamic text: Before you can ask she gets up and touching your hand affectionately asks, "<<$p...
  scene.text(`Before you can ask she gets up and touching your hand affectionately asks, "${((s as any).pcs_nickname ?? 0)}, I'm going to get another coffee, would you like one?"`);
  scene.text('"Yes please Natasha, that\'d be great."');
  scene.text('Shortly after she returns with the coffee and you sit at the table discussing the day as you sip your coffees.');
  qspCall(s, 'beverage', 'coffee_stats');
  scene.text('Before the coffee is completely finished you ask, "I feel like dancing the night away so… How about we spend the night together at the nightclub?" You ask smiling at her.');
  scene.text('"Yeah. I… I\'d love to but…" She pauses.');
  scene.text('You look at her and see she\'s clearly undecided. "Do you need to finish an assignment or something?" You ask.');
  scene.text('"No it\'s not that. It\'s erm… I just don\'t know if I should."');
  scene.text('"OK is it\'s money as I can pay for you?"');
  scene.text('She shakes her head. "No, I… I…" She trails off looking a little embarrassed and sad.');
  scene.text('"Umm… Look if it\'s still about you getting drunk that time don\'t worry about it. Perhaps you\'ll need to take care of me this time." You reply while taking hold of her hand.');
  // TODO-QSP: dynamic text: She looks up with a slight smile. "So long as you're sure <<$pcs_nickname>> then...
  scene.text(`She looks up with a slight smile. "So long as you're sure ${((s as any).pcs_nickname ?? 0)} then I'd love to."`);
  scene.text('"OK, where shall we meet?"');
  // TODO-QSP: dynamic text: "Maybe I'll pick you up in your room <<$pcs_nickname>>?" She suggests.
  scene.text(`"Maybe I'll pick you up in your room ${((s as any).pcs_nickname ?? 0)}?" She suggests.`);
  scene.text('You get up and give her a kiss on the cheek. "OK <i>girlfriend</i> see you this evening, shall we say about 8:00PM?" Natasha confirms her agreement before you leave.');
  scene.actions([
    { label: 'Return to The Coffee Hole', goto: ['city_coffee_hole', 'inner'] },
  ]);
  scene.build();
}

function enterNightclubDate1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).NatbelQW ?? {})['uni_dates'] = (((s as any).NatbelQW ?? {})['uni_dates'] ?? 0) + (1);
  ((s as any).NatbelQW ?? {})['uni_dates_nightclub_1'] = (((s as any).NatbelQW ?? {})['uni_dates_nightclub_1'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/natdressing1.jpg');
  scene.text('You look up and see Natasha entering your room but she isn\'t ready yet.');
  scene.text('"Hey you\'re not ready <i>girlfriend</i>!"');
  scene.text('She nods. "Sorry I\'ve been drawing and got a bit carried away so thought it best to come to meet you first."');
  scene.text('"Ok well come on, we need to get a wriggle on. I want to dance and hold you tight." You tell her with a wink. "I take it you still want to go?"');
  scene.text('"Oh yes, I\'d love to go with you. Sorry, I started drawing this dress and got sorta lost track of time."');
  scene.text('"Well, go get your dress on and we\'ll head out." You return to her room so can she can get dressed.');
  scene.actions([
    { label: 'Wait for Natasha to get ready', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat13.mp4');
    scene.text('Natasha slips into the dress you bought for her.');
    scene.text('"Yep, that looks great on you! You look beautiful."');
    // TODO-QSP: dynamic text: Natasha smiles. "It feels good to look nice, and trendy too. Thanks to you, <<$p...
    scene.text(`Natasha smiles. "It feels good to look nice, and trendy too. Thanks to you, ${((s as any).pcs_nickname ?? 0)}. I'm nearly ready now, I just need to put some makeup on."`);
    scene.text('She walks over to a mirror and starts applying her makeup.');
    if (((s as any).pcs_makeup ?? 0) < 2) {
      scene.text('She eyes you from the reflection in the mirror, ""If you\'d like, I could put some makeup on you as well? You\'ll look even sexier and you\'ll need some to get in."');
      scene.actions([
        { label: 'Yes please but keep it light please', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).pcs_makeup = 2;
    qspCall(s, 'stat', '');
    scene.text('Natasha applies a light amount of makeup to your face.');
    scene.text('"There, that looks nice," she tells you.');
    scene.text('Now that you\'re both ready you leave for the nightclub together.');
    scene.actions([
      { label: 'Go to the nightclub', goto: ['natbel_uni_dates', 'nightclub_date1_2'] },
    ]);
  } },
        { label: 'Yes, please', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).pcs_makeup = 3;
    qspCall(s, 'stat', '');
    scene.text('Natasha spends a few minutes applying some makeup to your face.');
    scene.text('"There, that looks great," she tells you.');
    scene.text('Now that you\'re both ready you leave for the nightclub together.');
    scene.actions([
      { label: 'Go to the nightclub', goto: ['natbel_uni_dates', 'nightclub_date1_2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to the nightclub', goto: ['natbel_uni_dates', 'nightclub_date1_2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNightclubDate1_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'money', 'pay', 250, 'cash');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/nightclub/club.jpg');
  scene.text('You take the metro to the City center and taking your seats you chat about recent events and university life.');
  scene.text('Before you know it you\'ve arrived at the city center so you take hold of her hand and walk to the nightclub where you each pay the entrance fee and enter the club.');
  scene.text('You grab Natasha\'s hand and lead her to the dance floor.');
  scene.actions([
    { label: 'Dance together', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat8.jpg');
    scene.text('You spend some time enjoying each other\'s company while dancing together to numerous songs.');
    scene.text('When a slow number gets played you move close into a clinch and dance closely together.');
    scene.text('You even manage to sneak a few kisses before a faster song starts.');
    scene.text('After about half an hour you lean in and tell Natasha that you\'re going to the bar for a drink.');
    scene.text('She nods and you head to the bar together.');
    scene.actions([
      { label: 'Have a drink together', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'beverage', 'cocktail_stats');
    scene.img('images/locations/city/citycenter/nightclub/club6.jpg');
    scene.text('While waiting at the bar a guy comes up to both of you and chats to you for a bit and buys you a cocktail each.');
    scene.text('However, he doesn\'t stay with you for long as some of his mates come and drag him away.');
    scene.text('You and Natasha look at each other and laugh. "Well cheers Natasha you say. I hope you\'re up for some more dancing…"');
    scene.text('She nods and smiles at you so you both finish your drinks then you grab her hand and head back to the dance-floor.');
    scene.actions([
      { label: 'Enjoy the night', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'money', 'pay', 180, 'cash');
    qspCall(s, 'beverage', 'beer_stats');
    qspCall(s, 'beverage', 'beer_stats');
    qspCall(s, 'beverage', 'beer_stats');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat13a.jpg');
    scene.text('You spend the next couple of hours dancing and visiting the bar where you have more drinks. You both decide to stick with beers.');
    scene.text('Natasha is a good dancer and have a great time dancing together.');
    scene.text('After a few trips to the bar you both begin to and feel quite merry and notice you\'re both slurring slightly.');
    scene.text('It starts getting late when Natasha turns to you and smiles then holding your face she brings her lips to yours and gives you a passionate kiss, which you fully return.');
    scene.text('As you break the kiss you hold onto each other for a while and just stare into each other\'s eyes for a few moments before Natasha takes a step back.');
    scene.text('As she lets go of you she stumbles slightly and giggles. "Oopsie. I guess we\'d better think about heading back as it\'s getting late and I don\'t think I should have any more to drink tonight."');
    scene.text('You nod your agreement. "Yeah, you\'re probably right." You take her by the arm and you both leave the dance-floor together.');
    scene.actions([
      { label: 'Go to your hotel room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'money', 'pay', 500, 'cash');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/hotel/receptionist.jpg');
    scene.text('As you leave Natasha notices you are heading to the center instead of returning home and looks at you quizzically.');
    scene.text('"What? You thought we\'d just call it a night and return to the university… Not a chance <i>girlfriend</i> I\'ve not finished with you yet! Hotel! Now! No arguments!"');
    scene.text('She blushes but you can see a cheeky smile breaking through as she takes your hand and speeds up.');
    // TODO-QSP: dynamic text: On arriving and going to the reception desk to check in handing over the <<func(...
    scene.text(`On arriving and going to the reception desk to check in handing over the ${qspFunc(s, 'money', 'price', 500)} rubles for a standard room.`);
    scene.text('After paying for the room you head up for the night.');
    scene.actions([
      { label: 'Kiss your girlfriend and enter your room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha24a.mp4');
    scene.text('As soon as the door is closed you notice Natasha looking at you longingly. Your eyes are drawn to her delicious looking lips and you start lusting after your girlfriend too. You make your way towards her bed and she quickly joins you.');
    scene.text('She slowly leans in towards you. Taking hold of her face, you press your lips against hers and begin a long, sensual kiss.');
    scene.text('After what seems like ages, but was probably only a few seconds, you breathlessly pull apart.');
    scene.text('Smiling, you greet her. "Hello, hot stuff!"');
    scene.text('"Well, hello to my sizzling girlfriend, too!" she replies, grinning at you and licking her lips. "Fuck! That was hot!"');
    scene.text('You both just sit there for a moment with a silly grin plastered on both your faces while you look at each other.');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'outfit', 'backup');
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha25.mp4');
    scene.text('You slowly wriggle out of your top, allowing it to slip down your body.');
    scene.text('You are both overcome by a loving feeling towards each other and lust quickly takes over.');
    scene.text('She slowly makes her way down your body and tenderly starts kissing and sucking on your breasts.');
    qspCall(s, 'natbel_kissinggames', 'set_sex_acts1');
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

function enterNightclubDate1_3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha32.jpg');
  scene.text('You smile at her. "I\'m more than happy!"');
  scene.text('"She leans over and gives you a soft passionate kiss. "I love staying here the night and waking up next to you," she says lovingly. She then slowly moves down to your boobs and gives them a final kiss before settling down next to you.');
  scene.text('You answer by cuddling up to her and you both drift off to sleep.');
  qspCall(s, 'sleep_simple', 'simple');
  scene.actions([
    { label: 'wake up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'outfit', 'restore');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha32.jpg');
    scene.text('You wake up at your normal time and notice Natasha is also stirring so you lean over and give her a wake up kiss.');
    scene.text('Whilst doing so you can\'t resist a quick feel of her boobs.');
    scene.text('"Morning sexy, did you sleep well?"');
    scene.text('"Yeah great thanks. I feel warm and so relaxed but I guess we\'d best be getting back though."');
    scene.text('You nod your agreement and you both get out of bed.');
    scene.actions([
      { label: 'Return to university', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university//dorm/dorm.jpg');
    scene.text('You both get washed and dressed then take the metro back to Vasilyevsky Island and head to the university.');
    scene.text('During the journey you chat away about anything that comes to mind and how you both really enjoyed your time together.');
    scene.text('You enter the dorm room area and after passing the concierge you say your good byes and with a parting kiss promise to meet up again soon.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMallDate1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).NatbelQW ?? {})['uni_dates'] = (((s as any).NatbelQW ?? {})['uni_dates'] ?? 0) + (1);
  ((s as any).NatbelQW ?? {})['uni_dates_mall_1'] = (((s as any).NatbelQW ?? {})['uni_dates_mall_1'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
  scene.text('You spot Natasha sitting alone by the window and head over.');
  scene.text('After exchanging greetings and a brief chat you decide you want to invite Natasha on a date with you.');
  // TODO-QSP: dynamic text: Before you can ask she gets up and touching your hand affectionately asks, "<<$p...
  scene.text(`Before you can ask she gets up and touching your hand affectionately asks, "${((s as any).pcs_nickname ?? 0)}, I'm going to get another coffee, would you like one?"`);
  scene.text('"Yes please Natasha, that\'d be great."');
  scene.text('Shortly after she returns with the coffee and you sit at the table discussing the day as you sip your coffees.');
  qspCall(s, 'beverage', 'coffee_stats');
  scene.text('"So <i>girlfriend</i> how do you fancy spending some time at the mall with me?" You ask smiling at her.');
  scene.text('"Yeah. I\'d love to!"');
  scene.text('Natasha quickly finishes her coffee and looks at you expectantly.');
  scene.text('"Hey, slow down no rush!" You tell her.');
  // TODO-QSP: dynamic text: Natasha looks at you apologetically. "Sorry <<$pcs_nickname>>."
  scene.text(`Natasha looks at you apologetically. "Sorry ${((s as any).pcs_nickname ?? 0)}."`);
  scene.text('You giggle and shake your head. "At this rate I might regret asking you… Does the prospect of shopping really excite you that much?"');
  scene.text('She shakes her head. "I… Well…" She trails off.');
  scene.text('"It\'s OK I\'m just teasing; I know what you\'re like so it\'s no surprise." You reply taking hold of her hand. "Come on then let\'s go."');
  scene.text('She immediately gets up and without letting go of your hand, probably to make sure you don\'t change your mind and leads you out of the café and you head down to the metro.');
  scene.actions([
    { label: 'Go to the mall', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/torgcentr.jpg');
    scene.text('You take the metro to the City center and taking your seats you chat about recent events and university life.');
    scene.text('Before you know it you\'ve arrived at the city center so you take hold of her hand and walk to the mall together.');
    scene.actions([
      { label: 'Go window shopping', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/shop7.jpg');
    scene.text('You know how much Natasha likes fashion and clothes but you are still surprised when, immediately you enter the mall, she holds your hand tightly and almost drags you into the nearest shop.');
    scene.text('Once you\'ve entered you both browse various items.');
    scene.text('After a few minutes you suggest to Natasha that you leave the shop and have a general look at various windows to get an idea of what\'s there then pick where you want to go.');
    // TODO-QSP: dynamic text: "Yeah, sorry <<$pcs_nickname>>, I get carried away sometimes."
    scene.text(`"Yeah, sorry ${((s as any).pcs_nickname ?? 0)}, I get carried away sometimes."`);
    scene.text('"Really! I would never have guessed!" You reply grinning at her.');
    // TODO-QSP: dynamic text: "Oh shut up <<$pcs_nickname>>, you asked me!"
    scene.text(`"Oh shut up ${((s as any).pcs_nickname ?? 0)}, you asked me!"`);
    scene.text('"Indeed I did so don\'t make me regret it or I won\'t ask you again."');
    scene.text('You both have a giggle as you leave the shop.');
    scene.actions([
      { label: 'Check out the shops', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/shop2.jpg');
    scene.text('You both spend some time walking through the mall looking at various items in the windows and chatting.');
    scene.text('After a while you ask Natasha where she\'d like to go. "So, little Miss Shopaholic, where do you want to go? I\'m guessing you don\'t want to go to Pussy Cats as you can see their stuff while you\'re working."');
    (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      scene.actions([
        { label: 'Enter Mon Cheri', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 55;
    qspCall(s, 'stat', '');
    scene.img('images/locations/citycenter/mall/boutique/butik.jpg');
    scene.text('She shrugs. "I\'m really unsure as they\'ve all got some nice stuff…"');
    scene.text('"OK Natasha, in that case let\'s go to Mon Cheri."');
    // TODO-QSP: dynamic text: Natasha looks at you as if you've gone mad. "What?! Why?! There's no way I can g...
    scene.text(`Natasha looks at you as if you've gone mad. "What?! Why?! There's no way I can get anything from there… Oh! Sorry ${((s as any).pcs_nickname ?? 0)}, did you want something from there… I'd love to see you in some of their clothes." She smiles at you lovingly.`);
    scene.text('Well maybe but not this time. No, I was thinking of you…"');
    // TODO-QSP: dynamic text: Before you can finish Natasha interrupts. "No <<$pcs_nickname>>! I can't allow y...
    scene.text(`Before you can finish Natasha interrupts. "No ${((s as any).pcs_nickname ?? 0)}! I can't allow you to buy something for me from here!"`);
    scene.text('"Well <i>girlfriend</i> thanks for that idea, I\'ll think on it for the future but no, not this time. I\'m more thinking of your goal to become a fashion designer so what better place to go and look at high end fashion? Other than the fashion branded shops this is as good as it gets."');
    // TODO-QSP: dynamic text: Natasha smiles and looks a little embarrassed. "Sorry <<$pcs_nickname>> I should...
    scene.text(`Natasha smiles and looks a little embarrassed. "Sorry ${((s as any).pcs_nickname ?? 0)} I should have let you finish. In that case yes please, that's a great idea, thank you"`);
    scene.text('You both head in and Natasha spends nearly an hour time looking at the various dresses and gowns before you tap her on the shoulder and suggest that you head out and grab a bite to eat.');
    scene.actions([
      { label: 'Go to the Diner and eat', goto: ['natbel_uni_dates', 'mall_date1_2'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).temp_rand ?? 0) === 1) {
        scene.actions([
          { label: 'Enter Fashionista', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 55;
    scene.img('images/locations/citycenter/mall/fashionista/fashionista.jpg');
    scene.text('Looking at Fashionist\'s window you see they have some nice dresses and outfits and they are good quality.');
    scene.text('"So Natasha, shall we have a look in here? They\'ve got some nice stuff and it\'s not silly prices?"');
    // TODO-QSP: dynamic text: "Well yes <<$pcs_nickname>> they have lovely stuff but I can't really stretch to...
    scene.text(`"Well yes ${((s as any).pcs_nickname ?? 0)} they have lovely stuff but I can't really stretch to their stuff yet unless it's something really really special and even then I'm not sure as I don't want to get into a mess again."`);
    scene.text('"That\'s OK Natasha, let\'s just have a look as I think you could also get some ideas for your fashion design here."');
    // TODO-QSP: dynamic text: "Yes, OK good idea <<$pcs_nickname>>.
    scene.text(`"Yes, OK good idea ${((s as any).pcs_nickname ?? 0)}.`);
    if (qspFunc(s, 'money', 'can_afford', 5000)  &&  ((s as any).NatbelQW ?? 0)?.['uni_fashionista_dress'] === 0) {
      scene.actions([
        { label: 'Natasha spots a really nice dress', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['uni_fashionista_dress'] = 1;
    qspCall(s, 'money', 'pay', 5000);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat17.jpg');
    scene.text('With that you head inside and browse their clothes and outfits.');
    scene.text('They are some really nice dresses and outfits, not quite the quality of the boutique in the mall but not far short.');
    scene.text('While browsing you can see that Natasha is really taken with one of the dresses and she keeps returning to it then walking away shaking her head.');
    scene.text('While she\'s engrossed with looking at other dresses you ask the sales assistant the cost of the dress Natasha obviously likes.');
    // TODO-QSP: dynamic text: The sales assistant informs you that it's currently on sale and will only cost <...
    scene.text(`The sales assistant informs you that it's currently on sale and will only cost ${((s as any).temp_price_string ?? 0)} rubles.`);
    scene.text('After thanking her you pick the dress in Natasha\'s size and take it to her and tell her to try it on.');
    scene.text('She tries to protest but you place your hand over her mouth and usher her into the changing room.');
    scene.text('A few minutes Natasha reappears wearing the dress.');
    scene.text('You spend a few moments admiring her in the dress and get her to do a twirl. "Yep! You look stunning <i>girlfriend</i>. I\'ll buy it for you as it\'s on sale.');
    // TODO-QSP: dynamic text: Before she can protest you turn and head to the checkout and pay the <<$temp_pri...
    scene.text(`Before she can protest you turn and head to the checkout and pay the ${((s as any).temp_price_string ?? 0)} rubles for the dress.`);
    scene.actions([
      { label: 'You\'re worth it', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/celebrate1.jpg');
    scene.text('You return to the changing room to wait for Natasha to get changed.');
    scene.text('After a couple of minutes when there\'s no sigh of her you ask, "Natasha, come on I\'ve paid so let\'s head out and grab a bite to eat."');
    scene.text('When she doesn\'t reply you enter the cubicle she\'s in to see what the hold up is but before you can speak she grabs you and smothers you in a big hug and kisses you passionately.');
    scene.text('She catches you by surprise but you quickly recover and return her kiss.');
    // TODO-QSP: dynamic text: "Thank you so much <<$pcs_nickname>> I love the dress but I'd decided against it...
    scene.text(`"Thank you so much ${((s as any).pcs_nickname ?? 0)} I love the dress but I'd decided against it as I still need to be careful."`);
    scene.text('"Yeah I know. That\'s why I bought it as I think you\'re worth it."');
    scene.text('A beaming Natasha then tells you that she\'ll leave the dress on for now as she loves it as you leave to go for a bite to eat.');
    scene.actions([
      { label: 'Go to the Diner and eat', goto: ['natbel_uni_dates', 'mall_date1_2'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Natasha tries on underwear', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat16.jpg');
    scene.text('With that you head inside and browse their clothes and outfits.');
    scene.text('They are some really nice dresses and outfits, not quite the quality of the boutique in the mall but not far short.');
    scene.text('Natasha spend some time looking at various dresses and outfits then moves over to the underwear section and selects some she likes and decides to try some.');
    scene.text('A few minutes later Natasha reappears wearing a set of underwear. "I like this and it\'s much better than most of the stuff I\'ve got. What do you think?"');
    scene.text('Nodding your approval you agree. "Yeah I agree it\'s looks really nice on you."');
    scene.text('"I can enjoy the view while pealing it off." You add while grinning at her as she blushes slightly.');
    scene.text('Then you notice that Natasha is standing in front of a large picture of the city and you can\'t help but giggle."');
    scene.text('Natasha is a little confused and asks why you\'re giggling so you tell her to look behind. "Well you\'re standing like that by that window flashing your sexy ass at the folks in an office block opposite."');
    scene.text('Natasha goes bright red, shakes her head and rushes back into the cubicle.');
    scene.actions([
      { label: 'Natasha buys the underwear', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/shop6.jpg');
    scene.text('Once she\'s got dressed she rejoins you.');
    scene.text('You look at your watch and realise just over an hour has passed. "Okay Natasha, shall we go to the checkout and grab a bite to eat?"');
    scene.text('She nods her agreement and heads to pay for her underwear as you wait for her.');
    scene.text('Once she\'s paid she moves away from the checkout and crouches down to put her purchases into her bag.');
    scene.text('You notice that her trousers slip down giving you and any other shoppers a good view of her butt crack!');
    scene.text('You simply grin and enjoy the view as you continue to wait for her.');
    scene.actions([
      { label: 'Go to the Diner and eat', goto: ['natbel_uni_dates', 'mall_date1_2'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Enter G and M', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 55;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat14.jpg');
    scene.text('Natasha asks you if you\'d mind going with her to G and M as she\'s seen a couple of things she likes in their catalogue and wants to try them on and have a general browse.');
    scene.text('You agree and she takes hold of your hand while you head into the shop chatting away.');
    scene.text('It doesn\'t take long before some of the clothes catch Natasha\'s eye and still holding your hand tightly, probably to prevent you trying to escape the inevitable, you think to yourself.');
    scene.text('However, soon enough you are both happily browsing together and it seems she\'s saved some money from her jobs so can afford a couple of things, although she still needs to be careful.');
    scene.actions([
      { label: 'Natasha buys a top', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat15.jpg');
    scene.text('Natasha picks some items she wants to try and you add your suggestions.');
    scene.text('With an armful of clothes she heads into the changing rooms.');
    // TODO-QSP: dynamic text: After a few minutes she reappears wearing a strappy top. "Well <<$pcs_nickname>>...
    scene.text(`After a few minutes she reappears wearing a strappy top. "Well ${((s as any).pcs_nickname ?? 0)}, what do you think?"`);
    scene.text('You nod. "It suits you and is just a little bit teasing. Yep, I like it."');
    scene.text('She smiles and heads back into the changing room. "I\'m just going to try on some of the underwear too."');
    scene.actions([
      { label: 'Natasha asks you to join her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/shop4.mp4');
    scene.text('A couple of minutes later she spots some underwear she likes and takes them into the changing rooms.');
    scene.text('Almost immediately you hear her call your name so you join her in the booth.');
    scene.text('You see Natasha topless in front of you with a wicked grin on her face as she shakes her tits for you giggling.');
    scene.text('"Come on you, very nice but we shouldn\'t get carried away in here."');
    // TODO-QSP: dynamic text: "No I know <<$pcs_nickname>>, I just couldn't resist a little tease."
    scene.text(`"No I know ${((s as any).pcs_nickname ?? 0)}, I just couldn't resist a little tease."`);
    scene.text('Grinning you reply, "OK you carry on and I\'ll wait outside the cubicle."');
    scene.actions([
      { label: 'At the checkout', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/shop6.jpg');
    scene.text('Once she\'s got dressed she rejoins you.');
    scene.text('You look at your watch and realise just over an hour has passed. "Okay Natasha, I don\'t think there\'s anything else here so shall we go to the checkout and grab a bite to eat?"');
    scene.text('She nods her agreement and heads to pay for her top as you wait for her.');
    scene.text('Once she\'s paid for them she moves away from the checkout and crouches down to put her purchases into her bag.');
    scene.text('You notice that her trousers slip down giving you and any other shoppers a good view of her butt crack!');
    scene.text('You simply grin and enjoy the view as you continue to wait for her.');
    scene.actions([
      { label: 'Go to the Diner and eat', goto: ['natbel_uni_dates', 'mall_date1_2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMallDate1_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  qspCall(s, 'money', 'pay', 350);
  qspCall(s, 'food', 'vegburg_stats');
  qspCall(s, 'beverage', 'tea_stats');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat18.jpg');
  scene.text('Holding hands you spend 15 minutes strolling over to the diner while chatting together.');
  // TODO-QSP: dynamic text: You browse the menu and decide on a veggie burger and a spiced tea and pay the <...
  scene.text(`You browse the menu and decide on a veggie burger and a spiced tea and pay the ${qspFunc(s, 'money', 'price', 350)} rubles.`);
  scene.text('Natasha also makes her choice and pays for it.');
  scene.text('After taking your seats you enjoy a tasty meal and drink whilc chatting about whatever comes to mind.');
  scene.text('You have a pleasant meal before finishing up when you agree it\'s time to head back.');
  scene.actions([
    { label: 'Return to university', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university//dorm/dorm.jpg');
    scene.text('Having enjoyed your meal you take the metro back to Vasilyevsky Island and head to the university.');
    scene.text('During the journey you chat away about anything that comes to mind and how you both really enjoyed your time together.');
    scene.text('You enter the dorm room area and after passing the concierge you say your good byes and with a parting kiss promise to meet up again soon.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLibraryDate1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).NatbelQW ?? {})['uni_dates'] = (((s as any).NatbelQW ?? {})['uni_dates'] ?? 0) + (1);
  ((s as any).NatbelQW ?? {})['uni_dates_library_1'] = (((s as any).NatbelQW ?? {})['uni_dates_library_1'] ?? 0) + (1);
  qspCall(s, 'beverage', 'coffee_stats');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
  scene.text('You spot Natasha sitting alone by the window and head over.');
  scene.text('After exchanging greetings and a brief chat you decide you want to invite Natasha on a date with you.');
  // TODO-QSP: dynamic text: Before you can ask she gets up and touching your hand affectionately asks, "<<$p...
  scene.text(`Before you can ask she gets up and touching your hand affectionately asks, "${((s as any).pcs_nickname ?? 0)}, I'm going to get another coffee, would you like one?"`);
  scene.text('"Yes please Natasha, that\'d be great."');
  scene.text('Shortly after she returns with the coffee and you sit at the table discussing the day as you sip your coffees.');
  scene.text('"So <i>girlfriend</i> how do you fancy going to the National Library with me?" You ask smiling at her. "I know it doesn\'t sound exciting but I think it\'s something that\'d interest you.');
  scene.text('"Yeah. I\'d love to!"');
  scene.text('Natasha finishes her coffee and looks at you expectantly.');
  scene.text('You finish your own coffee and get up. "OK Natasha, Let\'s go."');
  // TODO-QSP: dynamic text: She nods and smiles at you. "Yes <<$pcs_nickname>>."
  scene.text(`She nods and smiles at you. "Yes ${((s as any).pcs_nickname ?? 0)}."`);
  scene.text('"OK come on then <i>girlfriend</i>." You reply.');
  scene.text('She gets up you head out of the café and you head down to the metro holding hands.');
  scene.actions([
    { label: 'Go to the city center', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/down.jpg');
    scene.text('You take the metro to the City center and taking your seats you chat about recent events and university life.');
    scene.text('Before you know it you\'ve arrived at the city center so you take hold of her hand and walk to the library.');
    scene.actions([
      { label: 'Enter the library', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.img('images/locations/city/citycenter/library/downlibint.jpg');
    scene.text('You both spend a few moments taking in the very impressive library.');
    scene.text('It really is stunning and there are thousands of books covering all subjects together with a large IT section where you can find lots of computers which are free to use.');
    scene.actions([
      { label: 'Looking at books', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat19.jpg');
    scene.text('You spend a while strolling through the various sections.');
    scene.text('You occasionally whisper something to each other and Natasha thanks you profusely for taking her here.');
    scene.text('You both start browsing some books and scanning through a few of them.');
    scene.text('Some really hold your interest and you think you might want to return at some point and borrow a book or two.');
    scene.actions([
      { label: 'The Good Year Ritual', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat20.jpg');
    scene.text('After looking through a number of sections you look around and can\'t see Natasha.');
    scene.text('You have to spend some time trying to find her.');
    scene.text('After a while you spot her sitting on a couch in a secluded part of the library engrossed in a book.');
    scene.text('You join her and ask what she\'s reading.');
    scene.text('She shows you the book and you see it\'s called <i>The Good Year Ritual</i> and is an ancient erotica short story book.');
    scene.actions([
      { label: 'Secluded location', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat21.jpg');
    scene.text('It\'s apparent to you that Natasha has got very into the book and is very turned on as she\'s quite flushed.');
    scene.text('You look around to make sure there\'s no-one around.');
    scene.text('As you look back towards Natasha you can see she\'s leaning towards you.');
    scene.text('She slowly leans in and it\'s obvious she\'s looking for a kiss.');
    scene.actions([
      { label: 'Kissing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat22.jpg');
    scene.text('You really want to kiss her so lean in and start a gentle kiss.');
    scene.text('However, this soon escalates into a full on deep passionate kiss.');
    scene.actions([
      { label: 'Escalation', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat23.jpg');
    scene.text('You\'re both really getting into it and Natasha pulls your top down and starts kissing your exposed tit.');
    scene.text('Completely engrossed you begin to spread your legs and rub your pussy.');
    scene.text('Natasha notices and lifts your skirt to your waist then starts moving to go between your legs.');
    scene.text('Realising that this will shortly become unstoppable you breathlessly stop her.');
    scene.text('She looks at you in confusion for a moment.');
    scene.text('"No, not here" you pant. "Hotel?"');
    scene.text('"Yes… Now!"');
    scene.actions([
      { label: 'Go to your hotel room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'money', 'pay', 500);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/hotel/receptionist.jpg');
    // TODO-QSP: dynamic text: On arriving and going to the reception desk to check in you pay for the room and...
    scene.text(`On arriving and going to the reception desk to check in you pay for the room and hand over the ${qspFunc(s, 'money', 'price', 500)} rubles for a standard room.`);
    scene.text('After paying you head up to the room.');
    scene.actions([
      { label: 'Kiss your girlfriend and take her to the room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha24a.mp4');
    scene.text('As soon as the door is closed you notice Natasha looking at you longingly. Your eyes are drawn to her delicious looking lips and you start lusting after your girlfriend too. You make your way towards her bed and she quickly joins you.');
    scene.text('She slowly leans in towards you. Taking hold of her face, you press your lips against hers and begin a long, sensual kiss.');
    scene.text('After what seems like ages, but was probably only a few seconds, you breathlessly pull apart.');
    scene.text('Smiling, you greet her. "Hello, hot stuff!"');
    scene.text('"Well, hello to my sizzling girlfriend, too!" she replies, grinning at you and licking her lips. "Fuck! That was hot!"');
    scene.text('You both just sit there for a moment with a silly grin plastered on both your faces while you look at each other.');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'outfit', 'backup');
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha25.mp4');
    scene.text('You slowly wriggle out of your top, allowing it to slip down your body.');
    scene.text('You are both overcome by a loving feeling towards each other and lust quickly takes over.');
    scene.text('She slowly makes her way down your body and tenderly starts kissing and sucking on your breasts.');
    qspCall(s, 'natbel_kissinggames', 'set_sex_acts1');
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

function enterLibraryDate1_2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Relax', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat24.jpg');
    scene.text('You lie together for a while chatting about your date and your antics in the library.');
    scene.text('"It\'s a good job you stopped me earlier or we could have got arrested if we\'d got caught" Natasha says.');
    scene.text('"Yeah I know, I\'m just surprised you go into it so quickly given where we were."');
    scene.text('"Yeah and that\'s your fault! I just fancy you rotten and lose control sometimes."');
    scene.text('You spend a while cuddling each other on the bed.');
    // TODO-QSP: dynamic text: "Come on then <<$pcs_nickname>>, let's take a shower and head back as this wasn'...
    scene.text(`"Come on then ${((s as any).pcs_nickname ?? 0)}, let's take a shower and head back as this wasn't planned I guess we've both got stuff that should get done before tomorrow."`);
    scene.text('You agree and you both get up to take a shower and get dressed.');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'outfit', 'restore');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat25.jpg');
    scene.text('You take a shower then return to the room to get dressed while Natasha remains in the bathroom taking a shower.');
    scene.text('You put your clothes back on and head back into the bathroom.');
    scene.text('You fix your hair and turn around to look at Natasha.');
    scene.text('You\'re just in time to see her bending over and giving your a great view of her pussy and ass which is pressed up against the glass.');
    scene.text('"Come on you stop that or we\'ll end up going another round and probably spending the night.');
    scene.text('She blushes and quickly stands up and finishes her shower.');
    scene.actions([
      { label: 'Return to university', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university//dorm/dorm.jpg');
    scene.text('Having finished getting showered and dressed you head out and take the metro back to Vasilyevsky Island and head to the university.');
    scene.text('During the journey you chat away about anything that comes to mind and how you both really enjoyed your time together.');
    scene.text('You enter the dorm room area and after passing the concierge you say your good byes and with a parting kiss promise to meet up again soon.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCafeDate1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).NatbelQW ?? {})['uni_dates'] = (((s as any).NatbelQW ?? {})['uni_dates'] ?? 0) + (1);
  ((s as any).NatbelQW ?? {})['uni_dates_cafe_1'] = (((s as any).NatbelQW ?? {})['uni_dates_cafe_1'] ?? 0) + (1);
  qspCall(s, 'beverage', 'coffee_stats');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat1.jpg');
  scene.text('You spot Natasha sitting alone by the window and head over.');
  scene.text('After exchanging greetings and a brief chat you decide you want to invite Natasha to spend some time with you.');
  // TODO-QSP: dynamic text: Before you can ask she gets up and touching your hand affectionately asks, "<<$p...
  scene.text(`Before you can ask she gets up and touching your hand affectionately asks, "${((s as any).pcs_nickname ?? 0)}, I'm going to get another coffee, would you like one?"`);
  scene.text('"Yes please Natasha, that\'d be great."');
  scene.text('Shortly after she returns with the coffee and you sit at the table discussing the day as you sip your coffees.');
  scene.text('"So <i>girlfriend</i> how do you fancy spending some time with me here and just chatting and people watching" You ask smiling at her.');
  // TODO-QSP: dynamic text: "Yeah. I'd love that; great idea <<$pcs_nickname>>!"
  scene.text(`"Yeah. I'd love that; great idea ${((s as any).pcs_nickname ?? 0)}!"`);
  scene.text('You both take your time over your coffee just chatting about anything that comes to mind.');
  scene.actions([
    { label: 'How about something to eat?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat3.jpg');
    scene.text('"So Natasha, how about I get us a snack and another drink?"');
    scene.text('"Yes I\'d like that but let me get it for us as you do more than enough for me as it is."');
    scene.text('"Don\'t be silly <i>girlfriend</i> I think you\'re worth it and it makes me happy treating you, especially as I know it\'s still a bit of a struggle for you to get by and I bet you still try to send some money to your mother when you can."');
    scene.text('"Yeah I do, she struggles and it gets her down. Well, OK then yes please, if you don\'t mind"');
    scene.actions([
      { label: 'Get the food', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'money', 'pay', 540);
    qspCall(s, 'food', 'snack_stats');
    qspCall(s, 'beverage', 'coffee_stats');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/coffee_hole/inside.jpg');
    scene.text('"So what would you like? They\'ve got some nice tasty treats here. I\'m going to have a cannoli and an iced latte."');
    scene.text('"Yes they look great and they normally taste really nice too. OK I\'ll go for a Danish and the iced latte sounds nice too." She gives you a friendly smile.');
    scene.text('You head to the counter and place your make your purchase.');
    scene.text('The food looked delicious and tasted great and you finish off with a cool refreshing iced latte.');
    scene.actions([
      { label: 'Ask how her mother is doing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat3.jpg');
    scene.text('After a while you broach the subject of your families in Pavlovsk. "So Natasha how\'s your mother getting on now that you\'re at university. She must be really proud of you?"');
    scene.text('Natasha\'s face immediately saddens and she looks away.');
    scene.text('"Sorry Natasha I didn\'t mean to upset you, is everything alright back home?"');
    scene.text('Natasha takes a deep breath and answers you. "Well she struggles. She has a boring poorly paid factory job and consequently little money plus she drinks although, thankfully, that got a bit better before I left."');
    scene.text('You have a think on her answer. "You know what, I guess we could go home together to visit from time to time and maybe stay over in the hotel so we can have the night to ourselves."');
    scene.text('"Well I don\'t want you to feel like you\'ve got to go back to Pavlovsk just for me…" She trails off.');
    scene.text('"No that\'s fine Natasha I don\'t mind spending some time there and anyway the night should be fun time for us."');
    scene.text('"In that case, yes I agree and the overnight at the hotel sound great too but maybe let\'s see how things go for now as she\'ll need to adjust to me not being there." She replies.');
    scene.actions([
      { label: 'Natasha asks about your family', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
      scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
      // TODO-QSP: dynamic text: "So <<$pcs_nickname>> what about your family?"
      scene.text(`"So ${((s as any).pcs_nickname ?? 0)} what about your family?"`);
      scene.text('"Well I don\'t see them much since coming here but as far as I know it\'ll be much the same with my mother being her normal domineering self and my step father keeping quite most of the time." You giggle "It\'s probably better for him that way or he\'d be likely to get one of her tongue lashings."');
      scene.text('After a pause you continue "Kolka is probably still my annoying little brother although he\'s OK and can be fun but I miss seeing Anya, she was fun to be around… Yes we should go and visit."');
      scene.text('You then steer the conversation onto some light hearted topics.');
    } else {
      // TODO-QSP: dynamic text: "So <<$pcs_nickname>> what about your family?"
      scene.text(`"So ${((s as any).pcs_nickname ?? 0)} what about your family?"`);
      scene.text('"Given my history with my mother I really don\'t care one way or the other; she didn\'t want me in her life and I\'m done with my her two-faced shit anyway."');
      scene.text('After a pause you continue "Sorry for the rant Natasha, it\'s just…" You shake your head. "Never mind… Anyway Kolka is probably still my annoying little brother although he\'s OK and can be fun. I do miss seeing Anya, she was fun to be around… Yes we should go and visit. It\'ll be nice to see her and maybe Kolka again."');
      scene.text('After your forceful reply Natasha just keeps quite and takes hold of your hand giving it a gentle squeeze which brings a smile back to your face. "Thanks Natasha."');
      // TODO-QSP: dynamic text: "What for <<$pcs_nickname>> I didn't say anything?"
      scene.text(`"What for ${((s as any).pcs_nickname ?? 0)} I didn't say anything?"`);
      scene.text('"That\'s why, what could you say? That gentle touch was exactly what I needed."');
      scene.text('You then steer the conversation onto some light hearted topics.');
    }
    scene.actions([
      { label: 'A giggling fit', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat26.mp4');
    scene.text('All of a sudden you start giggling for no apparent reason.');
    scene.text('Natasha looks at you somewhat confused. "What\'s got you chuckling away?"');
    scene.text('"Well… I just thought about the art classes with the models who strip off for the class and an image just came to mind."');
    scene.text('Natasha stares at you with a blank look.');
    scene.text('"OK so… I just had this image of me sitting here with you wearing just a dress and no underwear then giving you a flash with other people around."');
    scene.text('Natasha immediately goes bright red and just shakes her head clearly not knowing what to say.');
    scene.text('Still chuckling you continue. "Well I blame you as I sometimes get slutty thoughts around you. You get me excited so yeah it\'s your fault <i>girlfriend</i>!"');
    scene.text('A now scarlet Natasha just shakes her head and doesn\'t say anything but you can see she\'s trying and failing to suppress a grin.');
    scene.actions([
      { label: 'Take a stroll around the campus', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    qspCall(s, 'stat', '');
    if (((s as any).season ?? 0) === 'winter') {
      scene.img('images/locations/city/island/university/uni_day_winter.jpg');
    } else {
      scene.img('images/locations/city/island/university/uni_day.jpg');
    }
    scene.text('"Anyway Natasha I don\'t want anything else to eat or drink and we\'ve finished so shall we just take a walk around? I\'ll be a nice way to end our date."');
    // TODO-QSP: dynamic text: "Yes <<$pcs_nickname>> that sounds perfect as I've got some stuff I need to do t...
    scene.text(`"Yes ${((s as any).pcs_nickname ?? 0)} that sounds perfect as I've got some stuff I need to do today."`);
    scene.text('You both get up and she take hold of your hand as you head out and have a stroll around the campus chatting about anything that comes to mind.');
    scene.text('You briefly discuss visiting her in her dorm room and agree that you won\'t do so except maybe on the odd occasion as her room-mate frequently stays with her boyfriend so arranging some privacy would be very difficult as she may walk in on you. Natasha also points out that she frequently has to cover shifts at Pussy cats and after class she does course work in the library so it\'s best to meet her in The Coffee Hole as she frequently takes a break there after class to relax and unwind.');
    scene.text('After a while you enter the dorm room area and after passing the concierge you say your good byes and with a parting kiss promise to meet up again soon.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', ''] },
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

function enterBeachDate1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).NatbelQW ?? {})['uni_dates'] = (((s as any).NatbelQW ?? {})['uni_dates'] ?? 0) + (1);
  ((s as any).NatbelQW ?? {})['uni_dates_beach_1'] = (((s as any).NatbelQW ?? {})['uni_dates_beach_1'] ?? 0) + (1);
  qspCall(s, 'beverage', 'coffee_stats');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
  scene.text('You spot Natasha sitting alone by the window and head over.');
  scene.text('After exchanging greetings and a brief chat you decide you want to invite Natasha on a date with you.');
  // TODO-QSP: dynamic text: Before you can ask she gets up and touching your hand affectionately asks, "<<$p...
  scene.text(`Before you can ask she gets up and touching your hand affectionately asks, "${((s as any).pcs_nickname ?? 0)}, I'm going to get another coffee, would you like one?"`);
  scene.text('"Yes please Natasha, that\'d be great."');
  scene.text('Shortly after she returns with the coffee and you sit at the table discussing the day as you sip your coffees.');
  if (((s as any).NatbelQW ?? 0)?.['uni_dates_beach_1'] === 1) {
    scene.text('"Okay Natasha how about we spend some time together at the beach?" You ask smiling at her.');
    scene.text('"Yeah. I\'d love that and I\'ve got a lovely new costume thanks to you!" She says with a smile.');
    scene.text('"Yep and I\'m looking forward to seeing you wearing it again!"');
    scene.text('You both get up to leave and you take hold of her hand and head down to the metro.');
    scene.actions([
      { label: 'Go to the lake', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.text('You take the metro to the City center and taking your seats you chat about recent events and university life.');
    scene.text('On arriving at the lake you head into the changing rooms and put on your swimwear.');
    scene.actions([
      { label: 'Go swimming', goto: ['natbel_uni_dates', 'beach_date1_lake'] },
    ]);
  } },
    ]);
  } else {
    scene.text('"Okay Natasha how about we spend some time together at the beach?" You ask smiling at her.');
    scene.text('"Yeah. I\'d love that!" She says with a smile then hesitates. "Well… erm… actually…" She stops talking and looks a bit downcast.');
    scene.text('You look at her quizzically. "What\'s the matter Natasha; do you have a bikini or a swimming costume don\'t you?"');
    // TODO-QSP: dynamic text: She nods then sighs. "Yeah I do but it's a bit frumpy and old as it's one of my ...
    scene.text(`She nods then sighs. "Yeah I do but it's a bit frumpy and old as it's one of my Mum's old costumes and I'm not sure if it'll even fit properly as I haven't worn it for ages. I'm sorry ${((s as any).pcs_nickname ?? 0)} but I think I'll pass." She pauses. "Maybe we can do something else?"`);
    scene.text('You start to grin and Natasha asks why you are doing so.');
    scene.text('You shake your head. "Don\'t worry about it Natasha, I just had a vision of us at the nudist beach!" You see Natasha immediately blushes which makes you giggle before continuing. "Anyway, on a more serious note if that\'s the problem let\'s head down to the beach as there\'s an Allure outlet at the lake and we\'ll see what we can find."');
    // TODO-QSP: dynamic text: Natasha shakes her head sadly. "Sorry <<$pcs_nickname>> but I'm low on cash as I...
    scene.text(`Natasha shakes her head sadly. "Sorry ${((s as any).pcs_nickname ?? 0)} but I'm low on cash as I had to send some to my mother again."`);
    scene.text('You take hold of her hand. "Come on <i>girlfriend</i> as that\'s easily remedied and anyway I didn\'t suggest you\'d have to buy it."');
    scene.text('Natasha starts to protest but you place your finger across her lips. "Stop with the protests or I\'ll smack your butt. Come on, let\'s go." With that you take hold of her hand and head down to the metro to stifle any further protests.');
    scene.actions([
      { label: 'Go to the lake', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/lake.jpg');
    scene.text('You take the metro to the City center and taking your seats you chat about recent events and university life.');
    scene.text('You head to the changing room and Natasha tries on her old swimsuit.');
    scene.text('It actually fits her well and looks OK but she\'s clearly not happy with it. "What\'s with the frown Natasha? I think it looks fine." You ask.');
    scene.text('"Well… Yeah… I suppose…" She shrugs and trails off. "It\'s just not… You know… It isn\'t what you\'d call fashionable. Anyway shall we go to the beach?"');
    scene.text('You consider your options for a moment then shake your head. "No I guess you\'re right and a budding famous fashion designer needs to look good! Come on then let\'s see what they\'ve got in Allure."');
    scene.text('"But… Ouch!" You give Natasha a smack on the butt and place a finger across her lips and grab her hand and lead her to the store.');
    scene.text('"Well you know the rules about protesting!" You admonish her.');
    scene.actions([
      { label: 'Enter Allure', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'money', 'pay', 2650);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/allure/shop.jpg');
    scene.text('Once inside you ask her if she wants a bikini or a swimsuit and after spending a few minutes looking she decides on a costume.');
    scene.text('You have a look through the options and pick out a couple which she tries on.');
    scene.text('You particularly like a fashionable whits costume with a plunging neckline but she finds it a bit to revealing. "Come on <i>girlfriend</i>; you\'ll need to get used to more revealing clothing given what you want to do as a career. Anyway I\'m with you so what\'s the problem?"');
    // TODO-QSP: dynamic text: Natasha smiles and gives you a hug. "Yeah I know and thank you <<$pcs_nickname>>...
    scene.text(`Natasha smiles and gives you a hug. "Yeah I know and thank you ${((s as any).pcs_nickname ?? 0)}."`);
    // TODO-QSP: dynamic text: You head to the counter and pay the <<func('money', 'price', 2650)>> rubles.
    scene.text(`You head to the counter and pay the ${qspFunc(s, 'money', 'price', 2650)} rubles.`);
    if (qspFunc(s, 'clothing', 'get_swimwear_count') > 0) {
      scene.text('You both leave the shop and head to the changing rooms to put in your swimwear.');
      scene.actions([
        { label: 'Go swimming', goto: ['natbel_uni_dates', 'beach_date1_lake'] },
      ]);
    } else {
      scene.text('"Right Natasha I need to get a costume or bikini too."');
      scene.text('You both look at the options and decide on your favourite.');
      scene.text('After paying for it you both leave the shop and head to the changing rooms to put in your swimwear.');
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_dates', 'beach_date1_buy_swimwear_loop'] }]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterBeachDate1BuySwimwearLoop(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'clothing', 'get_swimwear_count') > 0) {
    scene.actions([
      { label: 'Go swimming', goto: ['natbel_uni_dates', 'beach_date1_lake'] },
    ]);
  } else {
    scene.actions([
      { label: 'Buy a swimsuit', goto: ['natbel_uni_dates', 'beach_date1_buy_swimsuit'] },
      { label: 'Buy a bikini', goto: ['natbel_uni_dates', 'beach_date1_buy_bikini'] },
    ]);
  }
  return;
  scene.build();
}

function enterBeachDate1BuySwimsuit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbel_uni_dates', 'swimwear_buy_loop');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Swimsuits - one size fits all</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start');
    qspCall(s, 'shop_utils', 'init', 'set_link', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'allure_swimsuit');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 3, Clothingstock mod 3
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'clothing_view', 'display_grid_shop');
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['natbel_uni_dates', 'beach_date1_buy_swimwear_loop'] },
  ]);
  scene.build();
}

function enterBeachDate1BuyBikini(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbel_uni_dates', 'swimwear_buy_loop');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bikinis - one size fits all</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start');
    qspCall(s, 'shop_utils', 'init', 'set_link', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'allure_bikinis');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 4, (Clothingstock / 3) mod 4
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'clothing_view', 'display_grid_shop');
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['natbel_uni_dates', 'beach_date1_buy_swimwear_loop'] },
  ]);
  scene.build();
}

function enterBeachDate1Lake(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/swim/lake/swim_nikini4.jpg');
  scene.text('The water looks inviting so you both decide to have a swim.');
  scene.text('You have a great time swimming and splashing each other and generally having fun as you did when you were little kids.');
  scene.text('After 30 minutes or so you leave the water and dry off.');
  scene.actions([
    { label: 'Take a walk along the shore', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/horse0.jpg');
    scene.text('Once you\'ve dried off Natasha takes you by the hand telling you she wants to go for a stroll.');
    scene.text('You spend some time chatting.');
    scene.text('As you\'re walking along the beach enjoying the feel of the warm sand on your feet you spot some horses in the distance.');
    // TODO-QSP: dynamic text: Natasha looks at you. "Come on <<$pcs_nickname>> I'll treat us to a pony ride.
    scene.text(`Natasha looks at you. "Come on ${((s as any).pcs_nickname ?? 0)} I'll treat us to a pony ride.`);
    scene.actions([
      { label: 'Have a ride on a horse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/horse0.jpg');
    scene.text('Natasha pays for both of you and you have a slow ride on a horse.');
    scene.text('While riding you spot what looks like a swimming pool and suggest to Natasha to see if you can use it later.');
    scene.text('Before you know it you\'ve got to return the horses.');
    scene.actions([
      { label: 'Ride on a jet ski', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/gidro.jpg');
    scene.text('Once you\'ve finishes Natasha leads you over to the attractions at the aquapark and suggests a ride on a jetski.');
    // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>> it'll be fun and it's my treat."
    scene.text(`"Come on ${((s as any).pcs_nickname ?? 0)} it'll be fun and it's my treat."`);
    scene.text('You\'re soon riding the jetskis and having a great time together.');
    scene.actions([
      { label: 'Sunbath at the pool', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat27.jpg');
    scene.text('When your time is up you return them and gather your belongings then make your way to the pool. It appears to be open as it isn\'t fenced off but you approach cautiously as you feel that it may belong to someone.');
    scene.text('As you approach the pool you see a elderly lady tending to some shrubs and greet her. "Hello I\'m sorry to disturb you but we spotted this pool while riding along the shore and wondered if it\'s available to the public."');
    scene.text('"She smiles at you and replies. "Actually it\'s a private pool. I\'ve only recently moved in and haven\'t had time to put a fence up. However, you seem nice and I could do with some company so if you want to use it please feel free but just don\'t spread it around as a don\'t want loads of people turning up."');
    scene.text('"Don\'t worry you reassure her, we won\'t say anything and thank you very much. It\'s just that it looked really nice and peaceful here."');
    scene.text('"The lady nods in agreement. "Yes the beach can get crowded at times."');
    scene.text('You spend some time chatting with her before she says, "I need to get on now so have a good time girls."');
    scene.text('You both spend an hour sunbathing and chatting then finish it off with a dip in the pool following which you gather your things and, after thank the lady again.');
    scene.text('She smiles at you and tells you that you are both welcome to return if you wish but just to check with her first. "I\'m usually in the garden on nice days so you\'ll easily spot me if I\'m home."');
    scene.text('After saying food bye you return to the beach and change into your normal clothes before deciding to head back to the university.');
    scene.actions([
      { label: 'Return to university', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university//dorm/dorm.jpg');
    scene.text('Once you\'re both dressed you head out and take the metro back to Vasilyevsky Island and head to the university.');
    scene.text('During the journey you chat away about anything that comes to mind and how you both really enjoyed your time together.');
    scene.text('You enter the dorm room area and after passing the concierge you say your good byes and with a parting kiss promise to meet up again soon.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', ''] },
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
    case 'coffee_hole_chat':
      enterCoffeeHoleChat(s, scene);
      break;
    case 'dorm_chats':
      enterDormChats(s, scene);
      break;
    case 'nightclub_date_ask':
      enterNightclubDateAsk(s, scene);
      break;
    case 'nightclub_date1':
      enterNightclubDate1(s, scene);
      break;
    case 'nightclub_date1_2':
      enterNightclubDate1_2(s, scene);
      break;
    case 'nightclub_date1_3':
      enterNightclubDate1_3(s, scene);
      break;
    case 'mall_date1':
      enterMallDate1(s, scene);
      break;
    case 'mall_date1_2':
      enterMallDate1_2(s, scene);
      break;
    case 'library_date1':
      enterLibraryDate1(s, scene);
      break;
    case 'library_date1_2':
      enterLibraryDate1_2(s, scene);
      break;
    case 'cafe_date1':
      enterCafeDate1(s, scene);
      break;
    case 'beach_date1':
      enterBeachDate1(s, scene);
      break;
    case 'beach_date1_buy_swimwear_loop':
      enterBeachDate1BuySwimwearLoop(s, scene);
      break;
    case 'beach_date1_buy_swimsuit':
      enterBeachDate1BuySwimsuit(s, scene);
      break;
    case 'beach_date1_buy_bikini':
      enterBeachDate1BuyBikini(s, scene);
      break;
    case 'beach_date1_lake':
      enterBeachDate1Lake(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const natbel_uni_dates: LocationDef = {
  name: 'natbel_uni_dates',
  title: '(Wear a nice dress)',
  region: 'other',
  locclass: 'changingroom',
  enter: enter,
};
