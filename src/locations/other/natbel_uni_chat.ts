import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetCoffeeHoleChats(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < 579) {
    // TODO-QSP: exit
    // TODO-QSP: !! 579: 2017-08-01
  }
  if (((s as any).daystart ?? 0) >= 1400) {
    // TODO-QSP: exit
    // TODO-QSP: !! roughly when uni ends
  }
  if (((s as any).hour ?? 0) < 16  ||  ((s as any).hour ?? 0) >= 21) {
    // TODO-QSP: exit
  }
  (s as any).natbel_here = 0;
  if (((s as any).NatbelQW ?? 0)?.['uni_nightclub_date'] === 0) {
    if (((s as any).NatbelQW ?? 0)?.['blocked'] === 1) {
      if (((s as any).daystart ?? 0) > ((s as any).NatbelQW ?? 0)?.['block_day']) {
        if (((s as any).NatbelQW ?? 0)?.['block_reason'] === 'uni') {
          (s as any).natbel_here = 1;
          scene.actions([
            { label: 'You spot Natasha looking very sorry for herself [+$func(\'money\', \'get_cost_string\', 240)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 240) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_chat', 'coffee_hole_chat_brokenup_1'] }]);
    }
  } },
          ]);
        }
      }
    } else {
      if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 3) {
        (s as any).natbel_here = 1;
        scene.actions([
          { label: 'You spot Natasha looking very sorry for herself [+$func(\'money\', \'get_cost_string\', 240)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 240) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_chat', 'coffee_hole_chat_gf_1'] }]);
    }
  } },
        ]);
      } else {
        if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 3) {
          (s as any).natbel_here = 1;
          scene.actions([
            { label: 'You spot Natasha looking very sorry for herself [+$func(\'money\', \'get_cost_string\', 1362)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1362) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_chat', 'coffee_hole_chat_strangers_1'] }]);
    }
  } },
          ]);
        }
      }
    }
  } else {
    if (((s as any).NatbelQW ?? 0)?.['uni_nightclub_date'] === 1) {
      if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 19) {
        if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 3) {
          (s as any).natbel_here = 1;
          scene.actions([
            { label: 'Go to The Coffee Hole to meet Natasha [+$func(\'money\', \'get_cost_string\', 660)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 660) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_chat', 'coffee_hole_nightclubdate_gf_1'] }]);
    }
  } },
          ]);
        } else {
          if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 3) {
            (s as any).natbel_here = 1;
            scene.actions([
              { label: 'Go to The Coffee Hole to meet Natasha [+$func(\'money\', \'get_cost_string\', 660)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 660) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_chat', 'coffee_hole_nightclubdate_strangers_1'] }]);
    }
  } },
            ]);
          }
        }
      }
    }
  }
  if (((s as any).natbelQW ?? 0)?.['designs_unlock_day'] > 0  &&  ((s as any).natbelQW ?? 0)?.['designs_chat_done'] === 0) {
    if (((s as any).daystart ?? 0) >= ((s as any).natbelQW ?? 0)?.['designs_unlock_day'] + 30) {
      (s as any).natbel_here = 1;
      scene.actions([
        { label: 'Ask Natasha how her design work is progressing [+$func(\'money\', \'get_cost_string\', 500)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_dates_2', 'designs_chat'] }]);
    }
  } },
      ]);
    }
  }
  qspCall(s, 'natbel_uni_dates', 'coffee_hole_chat');
  if (((s as any).natbel_here ?? 0)) {
    (s as any).temp_familiar_here = 1;
    // TODO-QSP: dynamic text: You spot <<$npc_usedname['A16']>> sitting at a corner table.
    scene.text(`You spot ${((s as any).npc_usedname ?? 0)?.['A16']} sitting at a corner table.`);
  }
  return;
  scene.build();
}

function enterCoffeeHoleChatGf_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 9) {
    qspCall(s, 'npcStat', 'A16');
    ((s as any).NatbelQW ?? {})['FriendLover'] = 9;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'money', 'pay', 240);
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat1.jpg');
  scene.text('You enter the café and have a look around to see who else is there so you can maybe go and have a friendly chat. You hope to catch Natasha there.');
  scene.text('You spot Natasha sitting in the corner with a cup in front of her. She looks very sad and is just staring blankly into space.');
  scene.text('You head over to surprise her.');
  qspCall(s, 'beverage', 'coffee_stats');
  scene.actions([
    { label: 'Greet her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
    // TODO-QSP: dynamic text: You get a couple of coffees and pay the <<$func('money', 'string_price', 240)>> ...
    scene.text(`You get a couple of coffees and pay the ${qspFunc(s, 'money', 'string_price', 240)} for them then head over to her table.`);
    scene.text('As you reach her table you smile at her but she doesn\'t seem to have noticed your presence despite the fact you\'re standing next to her so you clear your throat. "Hi Natasha, how are you?"');
    // TODO-QSP: dynamic text: You can see she wasn't aware of your presence at all as she jumps slightly. She ...
    scene.text(`You can see she wasn't aware of your presence at all as she jumps slightly. She looks at you and you can see her eyes are a bit red. "Oh hi ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('Grinning you respond. "Well I\'m going to have a coffee. Anyway, is that any way to greet your girlfriend?"');
    // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, I didn't mean to be rude; I've just had a bit of a shi...
    scene.text(`"Sorry ${((s as any).pcs_nickname ?? 0)}, I didn't mean to be rude; I've just had a bit of a shitty day but you being here has already cheered me up." She smiles at you and wipes her eyes.`);
    scene.text('With that you put the coffee down on the table and take a sip while catching up with her during which she tells you that she\'s still helping with the fashion blog and sometimes works as a part time relief staff to cover for holidays and so on at Pussy Cats in the Mall.');
    scene.actions([
      { label: 'Ask her if she\'s doing any extra courses', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
    scene.text('"So Natasha are you looking forward to your course in fashion design?"');
    scene.text('She gives you a broad smile and nods enthusiastically. "Yes very much so but I don\'t think I\'ll know many of the other students other than Sonia."');
    scene.text('"Yes it\'s whole new world for us. Hopefully it\'ll also be a fresh start for Sonia too as she didn\'t have it easy at school whatever we think of her actions when it all kicked off." After a brief pause you change subjects. "Anyway are you doing any of the elective classes? I think a couple of them would be great for you."');
    if (((s as any).month ?? 0) === 8) {
      scene.text('"Umm I\'m still considering them…" She replies.');
      scene.text('"Well okay and it\'s up to you but I\'d suggest that the art class is pretty much a must for you and it\'d probably be good to do the computer class too especially given your job with the fashion blog."');
      // TODO-QSP: dynamic text: She nods. "Yes, now you say it I guess I should do both. Okay, thank you for the...
      scene.text(`She nods. "Yes, now you say it I guess I should do both. Okay, thank you for the prompt ${((s as any).pcs_nickname ?? 0)}. I'll get myself registered for both."`);
    } else {
      // TODO-QSP: dynamic text: "Yes I agree <<$pcs_nickname>>; it took me ages to decide but I've enrolled for ...
      scene.text(`"Yes I agree ${((s as any).pcs_nickname ?? 0)}; it took me ages to decide but I've enrolled for both or them."`);
      scene.text('You reply. "Good I think that the art class is pretty much a must for you and the computer class will assist too especially given your job with the fashion blog."');
      scene.text('She nods in agreement and gives you a warm smile.');
    }
    scene.actions([
      { label: 'We\'ll have to arrange some dates', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).NatbelQW ?? {})['uni_nightclub_date'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat6.jpg');
    scene.text('Okay so Natasha, how about we arrange to do something together soon? Maybe watch a movie, go shopping and so on or perhaps go to the nightclub at some point. What do you say?"');
    // TODO-QSP: dynamic text: A now smiling Natasha looks at you and replies. "Oh that'd be great <<$pcs_nickn...
    scene.text(`A now smiling Natasha looks at you and replies. "Oh that'd be great ${((s as any).pcs_nickname ?? 0)} I love dancing but haven't had the courage to go by myself as yet."`);
    scene.text('You give her a smile in return. "Right, well we\'ll have to arrange a date then…"');
    scene.text('Natasha nods and interrupts. "Yes I\'ll look forward to that."');
    scene.text('"Yeah, me too; I really like spending time with you."');
    scene.text('With that she gives you a big smile jumps up and kisses you. After breaking the kiss she holds you close.');
    scene.text('After a minute or so embracing you finish your coffee and get up. "Okay Natasha, I\'ve go to go now but I\'ll see you here or at university and we\'ll arrange some dates soon." After a brief pause you continue "Actually… What about the nightclub this weekend; what do you say?"');
    // TODO-QSP: dynamic text: With a big grin Natasha looks at you and replies. "Oh that'd be great <<$pcs_nic...
    scene.text(`With a big grin Natasha looks at you and replies. "Oh that'd be great ${((s as any).pcs_nickname ?? 0)} I love dancing but haven't had the courage to go by myself as yet."`);
    // TODO-QSP: dynamic text: You give her a big smile in return. "Right, well it's a date then. I'll meet you...
    scene.text('You give her a big smile in return. "Right, well it\'s a date then. I\'ll meet you in The Coffee Hole Saturday. Shall we say around \' + $func(\'time\', \'get_time_string\', 20, 0) + \'?"');
    scene.text('"Yes, I\'ll look forward to it." With that she you give her another kiss as you turn to leave.');
    scene.actions([
      { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCoffeeHoleNightclubdateGf_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
  scene.text('You head over to The Coffee Hole to meet Natasha and go to the nightclub with her.');
  scene.text('On entering you spot her at a table drinking a coffee so you head over to her table.');
  // TODO-QSP: dynamic text: As you arrive she greets you and tells you that she bought you a Cappuccino. "He...
  scene.text(`As you arrive she greets you and tells you that she bought you a Cappuccino. "Here you go ${((s as any).pcs_nickname ?? 0)}, I hope it's still warm."`);
  scene.text('You thank her and drink the coffee then you both get up and make your way to the metro and then onto the city center.');
  qspCall(s, 'beverage', 'coffee_stats');
  scene.actions([
    { label: 'Go to the nightclub', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'money', 'pay', 250);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat7.jpg');
    // TODO-QSP: dynamic text: Once you arrive you make your way to the nightclub and pay the entrance fee of <...
    scene.text(`Once you arrive you make your way to the nightclub and pay the entrance fee of ${qspFunc(s, 'money', 'string_price', 250)}.`);
    scene.text('Once you\'re both in you look around and ask Natasha. "So you wanna dance with me?"');
    scene.text('"Yeah I\'d love to."');
    scene.text('You then head to the dance-floor and dance the night away.');
    scene.actions([
      { label: 'Have a drink together', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.img('images/locations/city/citycenter/nightclub/club6.jpg');
    scene.text('After a while you both start to feel tired and head to the bar.');
    scene.text('While waiting at the bar a guy comes up to both of you and chats to you for a bit and buys you each a Vodka Martini.');
    scene.text('However, he doesn\'t hang around with you for long as some of his mates come and drag him away.');
    scene.text('You and Natasha look at each other and laugh. "Well cheers Natasha you say. I hope you\'re up for some more dancing…"');
    scene.text('She nods at you and you both finish your drinks then head back to the dance-floor.');
    qspCall(s, 'beverage', 'vodka_martini_stats');
    scene.actions([
      { label: 'Enjoy the night', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    qspCall(s, 'money', 'pay', 120);
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat8.jpg');
    scene.text('You spend the next couple of hours dancing and visiting the bar where you have a couple more drinks although you decide to stick with beers.');
    scene.text('Natasha isn\'t so careful and has a couple more Vodka Martinis.');
    scene.text('You begin to notice that Natasha is slurring her words and starts to have a problem dancing as she bumps into other dancers.');
    scene.text('Before you can decide how to handle the situation she turns to you and smiles then holding your face she brings her lips to yours and gives you a passionate kiss, which you fully return.');
    scene.text('As you break the kiss you hold onto each other for a while and just stare into each other\'s eyes for a few moments before Natasha takes a step back.');
    scene.text('As she lets go of you she staggers backwards and nearly falls so you take her by the arm and suggest that you both leave the dance-floor before something happens as she\'s obviously quite drunk.');
    scene.text('She nods and is happy to be guided by you away from the other dancers.');
    scene.text('Once you\'re in a quieter area you sit down and you check on her. "Natasha, that kiss was lovely. Anyway, you seem to be a little drunk, are you okay?"');
    scene.text('She shakes her head but doesn\'t say anything.');
    qspCall(s, 'beverage', 'beer_stats');
    qspCall(s, 'beverage', 'beer_stats');
    scene.actions([
      { label: 'Try to get a taxi', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat9.jpg');
    scene.text('Okay, let\'s call it a night and get you back.');
    scene.text('You help her up and head towards the exit.');
    scene.text('As it\'s too late for the metro you leave Natasha leaning against a doorway as you look to see if you can spot a taxi nearby.');
    scene.text('You look around for a taxi but can\'t see one.');
    scene.actions([
      { label: 'Give up on the taxi', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat10.jpg');
    scene.text('You open your handbag to get your phone to call for a taxi but before you can do so you hear Natasha say. "Oh shit!" This is followed by some drunken giggles.');
    scene.text('Turning around you see that she\'s slid down the shop front and is now sitting on the pavement.');
    scene.text('You give up on the idea of a taxi and go to her.');
    scene.text('"Come on you, I guess the taxi isn\'t an option as they are unlikely to take us if you can\'t stand. We\'ll get a room at the hotel for tonight.');
    // TODO-QSP: dynamic text: Natasha looks like she's going to start crying. "I'm so sorry <<$pcs_nickname>>,...
    scene.text(`Natasha looks like she's going to start crying. "I'm so sorry ${((s as any).pcs_nickname ?? 0)}, I've never got like this before; I rarely drink and when I do it's just the odd glass of wine."`);
    scene.text('You help her up and head to the hotel and reassure her that it\'s not a problem and you\'re not mad at her.');
    scene.actions([
      { label: 'Get a room at the hotel', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/hotel/receptionist.jpg');
    scene.text('You walk slowly to the hotel and approach the receptionist and ask for a standard room for 1 night.');
    // TODO-QSP: dynamic text: Once you've booked it Natasha stops you paying for it. "No <<$pcs_nickname>>, th...
    scene.text(`Once you've booked it Natasha stops you paying for it. "No ${((s as any).pcs_nickname ?? 0)}, this is my fault so at least let me pay for it."`);
    scene.text('Before you can answer she\'s paid the receptionist who warns you both that you can\'t mess up the room.');
    scene.text('You take the key and holding her close so she doesn\'t fall you guide her to the room.');
    scene.actions([
      { label: 'Natasha\'s ill', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat11.jpg');
    scene.text('You barely make it into the room before Natasha pulls away from you, drops her bag and weaves her way to the bathroom.');
    scene.text('You drop your bag by the bed and pick hers up and put it next to the bed on the other side then head to the bathroom to check on her.');
    scene.text('As you open the door you see that she\'s being sick.');
    scene.text('You offer "Are you okay Natasha or do you want me to hold your hair of something?"');
    scene.text('"No thanks. I think that\'s all of it anyway as I feel a bit better. I\'ll be fine, thank you. I\'m just so embarrassed."');
    scene.text('Not long after she returns to the bedroom, having removed her makeup and getting undressed and starts apologising again.');
    scene.text('You cut her off. "It\'s not a big deal Natasha, don\'t worry about it. We\'re friends and friends help each other. Anyway, I\'m sure you\'ll need to look after me at some point. Look on the bright side, at least I\'m not such a lightweight as you!" You tease.');
    scene.text('She doesn\'t reply, drinks some water and regains some colour but still looks sorry for herself. "Well that\'s not how I\'d imagined tonight would unfold." She says sadly.');
    scene.text('You finish getting undressed and pop into the bathroom to wash then as you return you tell her to stop fretting and get some sleep."');
    scene.text('With that you get in bed next to her and before long you both fall asleep.');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(s, 'sleep_simple', 'sleep_until', 8, 0);
  }, goto: ['natbel_uni_chat', 'coffee_hole_nightclubdate_gf_1_after'] },
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

function enterCoffeeHoleNightclubdateGf_1After(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'din_van', 'showerdin');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat12.jpg');
  scene.text('You wake up first and after looking over at Natasha and seeing she\'s still asleep you check the time.');
  scene.text('Deciding you should get moving you give Natasha a soft nudge slowly waking her up.');
  scene.text('"Come on sleepyhead, how are you feeling? We should get moving if we want to do something together today."');
  scene.text('Natasha slowly comes too and rubs her eyes. "Yeah, I\'ve got a bit of a headache but it\'s not too bad. I didn\'t think you\'d want to do anything together today after what happened. Thanks for looking after me last night and again…"');
  scene.text('You cut her off and smile at her. "If you\'re going to apologise again I\'ll smack your butt! I had a fun night with you and what happened at the end doesn\'t matter."');
  scene.text('She looks a little downcast and you sigh. "Look, let\'s get some breakfast and get washed and dressed then we can do something before heading back."');
  scene.text('She nods at you and calls room service to buy a breakfast each and you both get washed and changed then eat breakfast together in silence.');
  qspCall(s, 'food', 'medium_meal_stats');
  scene.actions([
    { label: 'Kiss her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha16.jpg');
    scene.text('Breaking the silence you take the initiative and push yourself forward until your lips meet with Natasha\'s. There\'s a sudden jolt coursing through you and it must be the same for her; you feel her tense for a brief moment before relaxing into your kiss.');
    scene.text('Time seems to stand still for a bit until you both gently pull apart.');
    scene.text('You both hesitantly pull back and you slowly open your eyes and see her doing the same.');
    scene.text('You stare at one another for a few seconds. "Does that answer your worry that I may be annoyed with you?" you ask.');
    scene.text('Natasha smiles at you happily with a dreamy look on her face.');
    scene.text('"So Natasha maybe we should take things slowly for now as we ease into university life," you suggest.');
    scene.text('"Mmm, yeah," Natasha says, licking her lips. "We should take things slow." She smacks her lips…');
    scene.text('Natasha leans in and starts kissing you again. Unable to resist you start kissing her back.');
    scene.text('"Umm very… slow…" Natasha says in a husky voice as you momentarily break to catch your breath before you resume your kissing and cuddling.');
    scene.text('Time seems to stand still while you make out, but you eventually manage to pull yourself away.');
    scene.text('You laugh. "Well by taking things slowly I meant the development of our relationship at university but I guess that\'s really not going to be an option with you!" She just looks at you and sighs contentedly.');
    scene.text('"So Natasha what do you want to do today then?"');
    scene.text('She thinks for a bit then suggests. "How about we go to the park, have a nice walk then have lunch in the café?"');
    scene.text('You agree with her suggestion get up and leave the hotel.');
    scene.actions([
      { label: 'Go to café in the park', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 290);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    scene.img('images/locations/city/centralpark/cafe/parkcafe.jpg');
    scene.text('As you\'re about to leave Natasha excuses herself saying she needs the ladies and will meet you outside.');
    scene.text('A few minutes later she appears and smiles at you as you take hold of her hand and walk through the park to the restaurant passing the time with general chat about current events, university and anything that comes to mind.');
    scene.text('Once you arrive at the restaurant you go to order some food and a drink then find a spare table.');
    scene.text('"So Natasha I take it you\'ve settled into university; how\'s your room mate, is she nice?"');
    scene.text('"Yes the room is okay and I\'m looking forward to the course and the opportunities it may bring. I don\'t really know my room mate much as she\'s hardly ever there. What about you?"');
    scene.text('"Pretty much the same. Guess I\'m still finding my feet and my room mate, Vika seems nice but I don\'t really know much about her as yet."');
    scene.text('After that you catch up on what you both did during the summer break and slowly finish your meals.');
    qspCall(s, 'beverage', 'juice_stats');
    qspCall(s, 'food', 'golub_stats');
    if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] === 0) {
      scene.actions([
        { label: 'Leave the café', goto: ['natbel_uni_chat', 'coffee_hole_nightclubdate_1_cafe_leave'] },
      ]);
    } else {
      scene.actions([
        { label: 'Natasha asks about the Starlets', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/hands.jpg');
    // TODO-QSP: dynamic text: Before leaving Natasha looks at you with concern and raises the subject of the S...
    scene.text(`Before leaving Natasha looks at you with concern and raises the subject of the Starlets. "${((s as any).pcs_nickname ?? 0)}, were'nt you a Starlet with Albina?"`);
    // TODO-QSP: dynamic text: Unsure of how to reply you pause to consider your response. Natasha takes this a...
    scene.text(`Unsure of how to reply you pause to consider your response. Natasha takes this as a bad sign and looks downcast. "Sorry, ${((s as any).pcs_nickname ?? 0)} I shouldn't have raised it. Don't answer if you don't want to.`);
    scene.text('You\'d hoped this was a distant memory but realise you need to deal with it. With a sigh you make your decision. "Well, it\'s not a period I like to talk about and to answer your underlying question, yes the troupe were exploited by Albina\'s father. As she\'s my friend I wasn\'t going to abandon her but it\'s done with now."');
    scene.text('"Well, I know what a good friend you\'ve been to me and I care deeply for you so your wellbeing is all that matters to me."');
    // TODO-QSP: dynamic text: With that she gets up and gives you a hug before sitting back down then gives yo...
    scene.text(`With that she gets up and gives you a hug before sitting back down then gives your hand a friendly squeeze. "Thank you for telling me ${((s as any).pcs_nickname ?? 0)}, I know it wouldn't have been an easy thing to do."`);
    scene.actions([
      { label: 'Leave the café', goto: ['natbel_uni_chat', 'coffee_hole_nightclubdate_1_cafe_leave'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCoffeeHoleNightclubdate_1CafeLeave(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 40;
  scene.img('images/characters/pavlovsk/school/girl/natasha/friends/park4.jpg');
  // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, that was a nice meal and now I have a treat for us whic...
  scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, that was a nice meal and now I have a treat for us which I hope you'll like.`);
  scene.text('Intrigued, you ask her what she has in mind so she leans in close and whispers to you. "Well as we left the hotel earlier I booked an extra night for us as we have some unfinished business to attend to and the dormitory isn\'t exactly private. We can head back to university after."');
  scene.text('"That\'s sneaky but yes I agree; I guess we\'ve both got a lot of pent up emotion that needs a release!." You pause then tap her on her butt. "Right <i>girlfriend</i> let\'s get that sexy ass of yours back to the hotel room then!"');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Shhh!" She responds going bright red as she gets up and star...
  scene.text(`"${((s as any).pcs_nickname ?? 0)}! Shhh!" She responds going bright red as she gets up and starts walking towards the exit where she stops and buys you an ice pop each. She hands one to you and grinning says "Maybe this will keep you quiet."`);
  scene.text('You can\'t resist a little further teasing so you respond with a smirk. "Well thanks… Oh yes they\'re perfect! Now we can practice our sucking and licking skills on the way!"');
  scene.text('Natasha is now an even brighter shade of red. "Be quite!… What am I to do with you?" She shakes her head.');
  scene.text('You start to respond. "Well… Now that\'s a good question and I can think of a few options…" However, deciding you don\'t want to tease her further you take her hand and say while grinning. "You know; you\'re so cute when you get embarrassed."');
  scene.text('You both head back to the hotel chatting about whatever comes to mind and sucking on your ice pops.');
  scene.actions([
    { label: 'Start undressing', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A16');
    qspCall(s, 'outfit', 'backup');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/Kissing_games/natasha43.jpg');
    scene.text('You arrive back at the hotel and enter your room and immediately guide Natasha to the bed and after a passionate kiss you start pulling her dress down. "I\'ve been wanting to do that for a while now, good thing we were in a public place earlier or you\'d never have finished your meal!"');
    qspCall(s, 'arousal', 'erotic_nudity', 4);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get down to business', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/Kissing_games/natasha44.jpg');
    scene.text('You pull her dress down and she steps out of it then sits back on the bed.');
    scene.text('Wasting no time you crawl over to her and push her down onto her back and start massaging her breasts.');
    qspCall(s, 'arousal', 'massage_give', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick her', handler: (st: GameState) => {
    qspCall(s, 'clothing', 'strip');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/Kissing_games/natasha45.jpg');
    scene.text('With your dress now loosely around your waist you turn your attention to Natasha\'s pussy as she pulls her panties to the side for you.');
    scene.text('As you start alternately licking and flicking your tongue in and out of her clit she starts moaning and you start tasting her juices which start flowing freely.');
    qspCall(s, 'arousal', 'cuni_give', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Natasha takes control', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'outfit', 'strip_all');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/Kissing_games/natasha46.jpg');
    scene.text('She\'s really gets into it and takes over pushing you down on the bed then immediately climbing on top of you.');
    scene.text('Looking down at you with a mixture of love and lust she straddles your leg and starts riding it as she strokes your body.');
    scene.text('It doesn\'t take long before she cums on your thigh soaking it with her juices.');
    qspCall(s, 'arousal', 'trib', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/Kissing_games/natasha47.jpg');
    scene.text('She leaves you lying on the bed and completely climbs on top of you presenting her pussy to your eager mouth, her juices dripping onto your face.');
    scene.text('As you get to work on her you feel Natasha sliding her tongue slowly up and down and flicking it inside you as she sucks up your juices that are flowing freely by now.');
    scene.text('Suddenly and almost without warning the dam bursts and you reach a toe curling orgasm squirting into her mouth and soaking her face with your juices.');
    qspCall(s, 'arousal', 'cuni', 5, 'no_orgasm_msg');
    qspCall(s, 'arousal', 'cuni_give', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Reflect', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/Kissing_games/natasha48.jpg');
    scene.text('You both slowly come down from your high and sit back on the bed cuddling and kissing each other as you both catch your breath.');
    scene.text('Eventually you are able to speak. "Well that was definitely worth the wait! I\'m glad you\'re my <i>girlfriend</i>, you\'d have been wasted on guys!"');
    scene.text('Natasha simply responds by kissing and playing with you, kisses which you return.');
    scene.text('In between kisses you tell her "I\'m happy too as you seem a little more confident; I was wondering if you would."');
    scene.text('When Natasha looks confused you clarify. "Well you took control back there in the heat of passion." You nod and continue. "That was good to see. I\'ll have to keep trying to build your confidence as our relationship develops."');
    // TODO-QSP: dynamic text: "Well <<$pcs_nickname>> I guess that'll be a long process as I'm just not used t...
    scene.text(`"Well ${((s as any).pcs_nickname ?? 0)} I guess that'll be a long process as I'm just not used to someone who looks out for me as you've done."`);
    scene.text('You kiss her again. "Well the point is that if you take control of things they can be great but you need the confidence to do so and yes I know it\'ll be a long process but I think you\'re worth it."');
    scene.text('At that Natasha gives you another kiss and says, "Guess we\'d best get cleaned up and get going as we\'ve got to study."');
    scene.actions([
      { label: 'Return to university', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    ((s as any).NatbelQW ?? {})['uni_dorm_access'] = 1;
    ((s as any).NatbelQW ?? {})['uni_nightclub_date'] = 2;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'outfit', 'restore');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You both get washed and take the metro back to Vasilyevsky Island and head to the university.');
    // TODO-QSP: dynamic text: During the journey she tells you where her dorm room is and have a quick discuss...
    scene.text('During the journey she tells you where her dorm room is and have a quick discussion about where best to meet up and agree that The Coffee Hole is the best option as Natasha isn\'t sure when her room mate will be there as she seems to spend a lot of time away and only returns occasionally. She confirms that when she isn\'t working she normally spends an hour or two in the Coffee Hole after class around \' + $func(\'time\', \'get_time_string\', 15, 0) + \'.');
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCoffeeHoleChatBrokenup_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat1.jpg');
  scene.text('You enter the café and have a look around to see who else is there so you can maybe go and have a friendly chat.');
  scene.text('You spot Natasha sitting in the corner with a cup in front of her. She looks very sad and is just staring blankly into space.');
  scene.text('Maybe you can go over and try to talk to her as she may want to be your girlfriend again.');
  if (((s as any).university ?? 0)?.['student'] === 1) {
    scene.actions([
      { label: 'Get back together as you went to university after all', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 240);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
    scene.text('You decide that you might want to see if you can restart your relationship with her now that you decided to go to university after all.');
    // TODO-QSP: dynamic text: You get a couple of coffees and pay the <<$func('money', 'string_price', 240)>> ...
    scene.text(`You get a couple of coffees and pay the ${qspFunc(s, 'money', 'string_price', 240)} for them then head over to her table.`);
    scene.text('As you reach her table you smile at her but she doesn\'t seem to notice your presence despite the fact you\'re standing next to her so you clear your throat. "Hi Natasha, how are you?"');
    // TODO-QSP: dynamic text: You can see she wasn't aware of your presence at all as she jumps slightly. She ...
    scene.text(`You can see she wasn't aware of your presence at all as she jumps slightly. She looks at you and you can see her eyes are a bit red. "${((s as any).pcs_nickname ?? 0)}! What are you doing here?!"`);
    scene.text('Grinning you respond. "Well I\'m going to have a coffee, it\'s a café after all. Anyway is that any way to greet me?"');
    // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, I didn't mean to be rude but the people who come here ...
    scene.text(`"Sorry ${((s as any).pcs_nickname ?? 0)}, I didn't mean to be rude but the people who come here are nearly all university students so I'm just surprised to see you here."`);
    scene.text('"Well I decided to go to university after all."');
    scene.text('"I\'m so happy you decided to came here in the end. I\'m sure you won\'t regret it… Maybe I can help you if you want?"');
    scene.text('With that you put the coffee down on the table and take a sip while catching up with her during which she tells you that she\'s still helping with the fashion blog and sometimes works as a part time relief staff to cover for holidays and so on at Pussy Cats in the Mall.');
    qspCall(s, 'beverage', 'coffee_stats');
    scene.actions([
      { label: 'How about we get back together then?', handler: (st: GameState) => {
    qspCall(s, 'natbel_friend', 'reconcile');
    qspCall(s, 'npcStat', 'A16');
    ((s as any).NatbelQW ?? {})['FriendLover'] = 9;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat6.jpg');
    scene.text('"Okay so Natasha, maybe we can hang out and perhaps go out and about together, watch a movie, go shopping and so on or perhaps go to the nightclub at some point. What do you say?"');
    // TODO-QSP: dynamic text: A now smiling Natasha looks at you and replies. "Oh that'd be great <<$pcs_nickn...
    scene.text(`A now smiling Natasha looks at you and replies. "Oh that'd be great ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('You give her a smile in return. "Right, well we\'ll have to arrange a date then…"');
    scene.text('Natasha nods and interrupts. "Yes I\'ll look forward to that." She pauses and looks nervously at you.');
    scene.text('"OK Natasha, I know that look. Come on what is it you want to say?"');
    // TODO-QSP: dynamic text: "Erm… Well… It's just that…" After a sigh she finally says it. "So <<$pcs_nickna...
    scene.text(`"Erm… Well… It's just that…" After a sigh she finally says it. "So ${((s as any).pcs_nickname ?? 0)} does this mean you want us to get back together then? I didn't want to break up with you it's just that…"`);
    scene.text('Now it\'d your turn to interrupt her. "I wasn\'t sure you\'d want to but yes if that\'s what you really want. I loved spending time with you and would like to continue doing so."');
    scene.text('With that she gives you a big smile jumps up and kisses you. After breaking the kiss she holds you close.');
    scene.actions([
      { label: 'Ask her if she\'as doing any extra courses', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).NatbelQW ?? {})['uni_nightclub_date'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
    scene.text('After a minute or so embracing you ask her "So Natasha are you looking forward to your course in fashion design?"');
    scene.text('She gives you a broad smile and nods enthusiastically. "Yes very much so but I don\'t think I\'ll know many of the other students other than Sonia."');
    scene.text('"Yes it\'s whole new world for us. Hopefully it\'ll also be a fresh start for Sonia as she didn\'t have it easy at school whatever we all think of her actions when it all kicked off."');
    scene.text('After a brief pause you change subjects. "Anyway are you doing any of the elective classes? I think a couple of them would be great for you."');
    if (((s as any).month ?? 0) === 8) {
      scene.text('"Umm I\'m still considering them…" She replied.');
      scene.text('"Well okay and it\'s up to you but I\'d suggest that the art class is pretty much a must for you and it\'d probably be good to do the computer class too especially given your job with the fashion blog."');
      // TODO-QSP: dynamic text: She nods. "Yes, now you say it I guess I should do both. Okay, thank you for the...
      scene.text(`She nods. "Yes, now you say it I guess I should do both. Okay, thank you for the prompt ${((s as any).pcs_nickname ?? 0)}. I'll get myself registered for both."`);
      scene.text('After obtaining her confirmation you finish your coffee and get up. "Okay Natasha, I\'ve go to go now but I\'ll see you here or at university and we\'ll arrange some dates soon. Maybe watch a movie, go shopping and so on or perhaps go to the nightclub." After a brief pause you continue "So perhaps the nightclub this weekend; what do you say?"');
      // TODO-QSP: dynamic text: With a big grin Natasha looks at you and replies. "Oh that'd be great <<$pcs_nic...
      scene.text(`With a big grin Natasha looks at you and replies. "Oh that'd be great ${((s as any).pcs_nickname ?? 0)} I love dancing but haven't had the courage to go by myself as yet."`);
      // TODO-QSP: dynamic text: You give her a big smile in return. "Right, well it's a date then. I'll meet you...
      scene.text('You give her a big smile in return. "Right, well it\'s a date then. I\'ll meet you in The Coffee Hole on Saturday. Shall we say \' + $func(\'time\', \'get_time_string\', 20, 0) + \'?"');
      scene.text('"Yes, I\'ll look forward to it." With that she you give her another kiss as you turn to leave.');
    } else {
      // TODO-QSP: dynamic text: "Yes I agree <<$pcs_nickname>>; it took me ages to decide but I've enrolled for ...
      scene.text(`"Yes I agree ${((s as any).pcs_nickname ?? 0)}; it took me ages to decide but I've enrolled for both or them."`);
      scene.text('You reply. "Good I think that the art class is pretty much a must for you and the computer class will assist too especially given your job with the fashion blog."');
      scene.text('She nods in agreement and gives you a warm smile.');
      scene.text('You finish your coffee and get up. "Okay Natasha, I\'ve go to go now but I\'ll see you here or at university and we\'ll arrange some dates soon. Maybe watch a movie, go shopping and so on or perhaps go to the nightclub." After a brief pause you continue "So perhaps the nightclub this weekend; what do you say?"');
      // TODO-QSP: dynamic text: With a big grin Natasha looks at you and replies. "Oh that'd be great <<$pcs_nic...
      scene.text(`With a big grin Natasha looks at you and replies. "Oh that'd be great ${((s as any).pcs_nickname ?? 0)} I love dancing but haven't had the courage to go by myself as yet."`);
      // TODO-QSP: dynamic text: You give her a big smile in return. "Right, well it's a date then. I'll meet you...
      scene.text('You give her a big smile in return. "Right, well it\'s a date then. I\'ll meet you in The Coffee Hole on Saturday. Shall we say \' + $func(\'time\', \'get_time_string\', 20, 0) + \'?"');
      scene.text('"Yes, I\'ll look forward to it." With that she you give her another kiss as you turn to leave.');
    }
    scene.actions([
      { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get back together as you think you can make it work', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'money', 'pay', 240);
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
    scene.text('You decide that you might want to see if you can restart your relationship with her as although you didn\'t go to university you work close by.');
    // TODO-QSP: dynamic text: You get a couple of coffees and pay the <<$func('money', 'string_price', 260)>> ...
    scene.text(`You get a couple of coffees and pay the ${qspFunc(s, 'money', 'string_price', 260)} for them then head over to her table.`);
    scene.text('As you reach her table you smile at her but she doesn\'t seem to notice your presence despite the fact you\'re standing next to her so you clear your throat. "Hi Natasha, how are you?"');
    // TODO-QSP: dynamic text: You can see she wasn't aware of your presence at all as she jumps slightly. She ...
    scene.text(`You can see she wasn't aware of your presence at all as she jumps slightly. She looks at you and you can see her eyes are a bit red. "${((s as any).pcs_nickname ?? 0)}! What are you doing here?!"`);
    scene.text('Grinning you respond. "Well I\'m going to have a coffee, it\'s a café after all. Anyway is that any way to greet me?"');
    // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, I didn't mean to be rude but the people who come here ...
    scene.text(`"Sorry ${((s as any).pcs_nickname ?? 0)}, I didn't mean to be rude but the people who come here are nearly all university students so I'm just surprised to see you here."`);
    scene.text('"Well I decided to come and see if I can visit you and asked about where you were as I\'ve missed you."');
    scene.text('With that you put the coffee down on the table and take a sip while catching up with her during which she tells you that she\'s still helping with the fashion blog and sometimes works as a part time relief staff to cover for holidays and so on at Pussy Cats in the Mall.');
    scene.text('After a brief pause she continues before trailing off. "I\'m so happy to see you… I\'ve missed you too… Erm… Maybe… If you want…"');
    qspCall(s, 'beverage', 'coffee_stats');
    scene.actions([
      { label: 'How about we get back together then?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'natbel_friend', 'reconcile');
    qspCall(s, 'npcStat', 'A16');
    ((s as any).NatbelQW ?? {})['FriendLover'] = 9;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat6.jpg');
    scene.text('"Okay I think I know what you\'re trying to say. Maybe we can hang out sometimes and watch a movie, go shopping and so on or perhaps go to the nightclub at some point if you want?"');
    // TODO-QSP: dynamic text: A now smiling Natasha looks at you and replies. "Oh that'd be great <<$pcs_nickn...
    scene.text(`A now smiling Natasha looks at you and replies. "Oh that'd be great ${((s as any).pcs_nickname ?? 0)}, I've really missed you… I love dancing but haven't had the courage to go by myself as yet."`);
    scene.text('You give her a smile in return. "Right, well we\'ll have to arrange a date then…"');
    scene.text('Natasha nods and interrupts. "Yes I\'ll look forward to that." She pauses and looks nervously at you.');
    scene.text('"OK Natasha, I know that look. Come on what is it you want to say?"');
    // TODO-QSP: dynamic text: "Erm… Well… It's just that…" After a sigh she finally says it. "So <<$pcs_nickna...
    scene.text(`"Erm… Well… It's just that…" After a sigh she finally says it. "So ${((s as any).pcs_nickname ?? 0)} does this mean you want us to get back together then? I didn't want to break up with you it's just that…" She pauses.`);
    scene.text('Now it\'d your turn to interrupt her. "I wasn\'t sure you\'d want to but yes if that\'s what you really want. I loved spending time with you and would like to continue doing so."');
    scene.text('With that she gives you a big smile jumps up and kisses you. After breaking the kiss she holds you close.');
    scene.text('With a grin you tell her that was the real reason you visited but thought you might have to work hard to convince her. "Well that was much easier than I imagined i>girlfriend</i>, I thought you\'d make me work hard to convince you!"');
    scene.actions([
      { label: 'Ask her if she\'s doing any extra courses', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['uni_nightclub_date'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
    scene.text('After a minute or so embracing you ask her "So Natasha are you looking forward to your course in fashion design?"');
    scene.text('She gives you a broad smile and nods enthusiastically. "Yes very much so but I don\'t think I\'ll know many of the other students other than Sonia."');
    scene.text('"Yes it\'s whole new world for you. Hopefully it\'ll also be a fresh start for Sonia as she didn\'t have it easy at school whatever we think of her actions when it all kicked off."');
    scene.text('After a brief pause you change subjects. "Anyway are you doing any of the elective classes? I think a couple of them would be great for you."');
    if (((s as any).month ?? 0) === 8) {
      scene.text('"Umm I\'m still considering them…" She replies.');
      scene.text('"Well okay and it\'s up to you but I\'ve seen the prospectus and I\'d suggest that the art class is pretty much a must for you and it\'d probably be good to do the computer class too especially given your job with the fashion blog."');
      // TODO-QSP: dynamic text: She nods. "Yes, now you say it I guess I should do both. Okay, thank you for the...
      scene.text(`She nods. "Yes, now you say it I guess I should do both. Okay, thank you for the prompt ${((s as any).pcs_nickname ?? 0)}. I'll get myself registered for both."`);
      scene.text('After obtaining her confirmation you finish your coffee and get up. "Okay Natasha, I\'ve go to go now but I\'ll see you here or maybe in your university dorm room and we\'ll arrange some dates soon. Maybe watch a movie, go shopping and so on or perhaps go to the nightclub." After a brief pause you continue. "So perhaps the nightclub this weekend; what do you say?"');
      // TODO-QSP: dynamic text: With a big grin Natasha looks at you and replies. "Oh that'd be great <<$pcs_nic...
      scene.text(`With a big grin Natasha looks at you and replies. "Oh that'd be great ${((s as any).pcs_nickname ?? 0)} I love dancing but haven't had the courage to go by myself as yet."`);
      // TODO-QSP: dynamic text: You give her a big smile in return. "Right, well it's a date then. I'll meet you...
      scene.text('You give her a big smile in return. "Right, well it\'s a date then. I\'ll meet you in The Coffee Hole on Saturday. Shall we say \' + $func(\'time\', \'get_time_string\', 20, 0) + \'?"');
      scene.text('"Yes, I\'ll look forward to it." With that she you give her another kiss as you turn to leave.');
    } else {
      // TODO-QSP: dynamic text: "Yes I agree <<$pcs_nickname>>; it took me ages to decide but I've enrolled for ...
      scene.text(`"Yes I agree ${((s as any).pcs_nickname ?? 0)}; it took me ages to decide but I've enrolled for both the art and computer classes. I didn't fancy the psychology though."`);
      scene.text('You reply. "Good I think that the art class is pretty much a must for you and the computer class will assist too especially given your job with the fashion blog."');
      scene.text('She nods in agreement and gives you a warm smile.');
      scene.text('You finish your coffee and get up. "Okay Natasha, I\'ve go to go now but I\'ll see you here or maybe in your university dorm room and we\'ll arrange some dates soon. Maybe watch a movie, go shopping and so on or perhaps go to the nightclub." After a brief pause you continue "So perhaps the nightclub this weekend; what do you say?"');
      // TODO-QSP: dynamic text: With a big grin Natasha looks at you and replies. "Oh that'd be great <<$pcs_nic...
      scene.text(`With a big grin Natasha looks at you and replies. "Oh that'd be great ${((s as any).pcs_nickname ?? 0)} I love dancing but haven't had the courage to go by myself as yet."`);
      // TODO-QSP: dynamic text: You give her a big smile in return. "Right, well it's a date then. I'll meet you...
      scene.text('You give her a big smile in return. "Right, well it\'s a date then. I\'ll meet you in The Coffee Hole Saturday. Shall we say \' + $func(\'time\', \'get_time_string\', 20, 0) + \'?"');
      scene.text('"Yes, I\'ll look forward to it." With that she you give her another kiss as you turn to leave.');
    }
    scene.actions([
      { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t restart your relationship with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat1.jpg');
    scene.text('You decide to leave her alone as it doesn\'t look like she\'s inviting company and in any event you\'re not sure you want to restart your relationship with her.');
    scene.text('You think to yourself that the chapter with her was very nice but it\'s time to move on.');
    scene.text('You give her a final glance and head over to the counter to see what they\'ve got that may tempt you.');
    scene.actions([
      { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCoffeeHoleChatStrangers_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat1.jpg');
  scene.text('You enter the café and have a look around to see who else is there so you can maybe go and have a friendly chat.');
  scene.text('You spot Natasha sitting in the corner with a cup in front of her. She looks very sad and is just staring blankly into space.');
  scene.text('Maybe you can go over and try to cheer her up as you don\'t think she has many friends. You also think that she may have developed a bit of a crush on you over time during your final year at school as you caught the way she looked at you sometimes or maybe it was just your imagination.');
  scene.actions([
    { label: 'Ignore her and carry on what you\'re doing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat1.jpg');
    scene.text('You decide to leave her alone as it doesn\'t look like she\'s inviting company.');
    scene.text('You give her a final glance and head over to the counter to see what they\'ve got that may tempt you.');
    scene.actions([
      { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
    { label: 'Walk over', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat2.jpg');
    scene.text('You take a deep breath and head over to say hello.');
    scene.text('As you reach her table you smile at her but she doesn\'t seem to have noticed your presence despite the fact you\'re standing next to her so you clear your throat. "Hi Natasha, how are you?"');
    scene.text('You can see she wasn\'t aware of your presence at all as she jumps slightly. She looks at you and you can see her eyes are a bit red. "Oh hello… I hope you\'re not here to poke fun at me or or something?!"');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat2.jpg');
    scene.text('"Okay, I\'ll leave you alone, maybe we can talk another time." You say.');
    scene.text('She clearly doesn\'t want company so you shake your head and walk away without another word.');
    scene.text('As you turn to leave it looks for a moment like she was going to say something but in the end she doesn\'t.');
    scene.actions([
      { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
      { label: 'She really needs a friend (This will put you on Natasha\'s GF path)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat3.jpg');
    scene.text('"Hey come on, what have I done? I was only trying to be nice and see if you\'d like some company."');
    // TODO-QSP: dynamic text: Natasha has a deep sigh and looks at you, albeit briefly. "I'm so sorry <<$pcs_n...
    scene.text(`Natasha has a deep sigh and looks at you, albeit briefly. "I'm so sorry ${((s as any).pcs_nickname ?? 0)}; I'm just having a really shitty day."`);
    scene.text('"Look I can leave you alone if you prefer?"');
    // TODO-QSP: dynamic text: She shakes her head. "No, <<$pcs_nickname>> actually I'd really like some compan...
    scene.text(`She shakes her head. "No, ${((s as any).pcs_nickname ?? 0)} actually I'd really like some company if you don't mind and I apologise for my rudeness; I'm not normally like that."`);
    scene.text('"It\'s okay and don\'t worry about it. I guess we\'ve all had days where it would have been better to have just stayed in bed!"');
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] > 0  ||  ((s as any).NatbelQW ?? 0)?.['QWstage'] > 0) {
      scene.text('You pause then continue giving her a friendly smile. "I was going to get a drink, would you like one as I can see yours is finished or shall we go somewhere else if you want a more private chat. We were best friends during last year and you look as though you could use a good friend right now? Come on… You know that I\'ve helped you before so maybe I can do so again?"');
    } else {
      scene.text('You pause then continue. "I was going to get a drink, would you like one as I can see yours is finished or shall we go somewhere else if you want a more private chat as you look as though you could use a friend right now? You never know, maybe I can help?"');
    }
    scene.actions([
      { label: 'Go to the café in the park', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 580);
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/parkcafe.jpg');
    scene.text('"Why would you want to listen to all my problems? I… I don\'t want to burden you with them." She stares down at her empty cup.');
    scene.text('"You sigh and continue. "Look Natasha, sometimes we all need some help. If you don\'t want to that\'s fine but the offer is there."');
    // TODO-QSP: dynamic text: She looks at you uncertainly. "Well only if you're sure… Thank you <<$pcs_nickna...
    scene.text(`She looks at you uncertainly. "Well only if you're sure… Thank you ${((s as any).pcs_nickname ?? 0)}. You taking the time to talk to me has already helped a bit." She gives you a weak smile and gets up. "Where do you want to go?"`);
    scene.text('"How about the café in the park, it looks quite nice and away from prying eyes and ears?" She nods her acceptance and you both head out.');
    scene.text('You take the metro, which Natasha buys for both of you.');
    // TODO-QSP: dynamic text: Then after arriving at the café you order some Gloubtsy and a juice for both of ...
    scene.text(`Then after arriving at the café you order some Gloubtsy and a juice for both of you and pay the ${qspFunc(s, 'money', 'string_price', 580)}. After paying you sit at a table away from other diners.`);
    qspCall(s, 'beverage', 'juice_stats');
    qspCall(s, 'food', 'golub_stats');
    scene.actions([
      { label: 'So Natasha what\'s made you so sad?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat3.jpg');
    scene.text('As you sit down you notice that she\'s looking sorry for herself again.');
    scene.text('You decide to break the ice and try to get her to open up as it might help. "So, what\'s with the gloomy face Natasha? I\'m here for you if you want to talk."');
    scene.text('She smiles at you. "It\'s just that I don\'t want to burden you with my problems." She trails off.');
    scene.text('You give her a reassuring smile. "Look, I wouldn\'t have asked if I wasn\'t interested. You seem like a nice person so I don\'t like seeing you like this. Come on, I promise I won\'t judge."');
    scene.actions([
      { label: 'It\'s just that…', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
    scene.text('Natasha starts slowly with a sigh. "Well, it\'s just that my life isn\'t great really. I got picked on a lot in school and it still happens here sometimes plus my family life wasn\'t the best."');
    scene.text('After a brief pause she continues. "I lived with my Mum and we were pretty poor plus she drinks too much. Therefore I had to make do with old and out of fashion clothes and well you know how some of my classmates reacted towards me."');
    scene.text('"So what happened to your Dad?"');
    scene.text('"I don\'t know; he left when I was a baby so I know next to nothing about him."');
    scene.text('"I\'m sorry to hear that Natasha. Yeah, that must have been tough but I guess the best thing to do is to try to put it behind you as we\'re here and have a future to look forward to."');
    scene.text('You decide to try and lighten the mood by a change of subject so you enquire. "So, since starting at university did you get a job?"');
    // TODO-QSP: dynamic text: "Yes <<$pcs_nickname>>. I help with the techie side of a fashion blog as well as...
    scene.text(`"Yes ${((s as any).pcs_nickname ?? 0)}. I help with the techie side of a fashion blog as well as make some suggestions. Plus I work as a part time relief staff to cover for holidays and so on at Pussy Cats in the Mall so I have some money now and have managed to pay back all the money I borrowed including from other classmates."`);
    scene.text('You nod and give her a reassuring hug.');
    scene.actions([
      { label: 'How about we go to the nightclub together?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat5.jpg');
    scene.text('Okay look Natasha, I\'m happy to help if I can and if you need a friendly ear just let me know; maybe we can hang out and perhaps go out and about together, watch a movie, go shopping and so on or perhaps go to the nightclub. What do you say?"');
    // TODO-QSP: dynamic text: With a big grin Natasha looks at you and replies. "Oh that'd be great <<$pcs_nic...
    scene.text(`With a big grin Natasha looks at you and replies. "Oh that'd be great ${((s as any).pcs_nickname ?? 0)} I love dancing but haven't had the courage to go by myself as yet."`);
    // TODO-QSP: dynamic text: You give her a big smile in return. "Right, well it's a date then. I'll meet you...
    scene.text('You give her a big smile in return. "Right, well it\'s a date then. I\'ll meet you in The Coffee Hole Saturday. Shall we say \' + $func(\'time\', \'get_time_string\', 20, 0) + \'?"');
    scene.text('Natasha nods and confirms her acceptance. "Yes I\'ll look forward to it and if either of us can\'t make it I guess we can just go on another Saturday."');
    scene.text('"So, as we\'ve finished our meal for now do you fancy a walk in the park before we head our separate ways?"');
    scene.actions([
      { label: 'Walk in the park', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/park.jpg');
    scene.text('You leave the restaurant together and take a leisurely stroll through the park chatting about current events and whatever comes to mind.');
    scene.text('Thinking about the nightclub and knowing she doesn\'t have much money you ask her if she\'s got a suitable outfit to wear.');
    scene.text('She confirms that she bought one from Pussy Cats which was on sale and she also got a staff discount.');
    scene.text('While walking she tells you that she wants to get her hair done as she feels she wants a new look.');
    scene.actions([
      { label: 'Go to The Golden Curl', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 50;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/golden curl/golden curl.jpg');
    scene.text('You think to yourself that you really like Natasha and she\'s clearly having a bad day so you decide to treat her to a haircut.');
    scene.text('While chatting away you take her by the hand you lead her to the city center then enter the mall and go to The Golden Curl.');
    // TODO-QSP: dynamic text: When you enter the hairdresser Natasha looks a bit confused. "I thought we were ...
    scene.text(`When you enter the hairdresser Natasha looks a bit confused. "I thought we were just going to have a browse ${((s as any).pcs_nickname ?? 0)}, what are we doing here, do you need a haircut of something?"`);
    scene.text('With a cheeky smile and by way of an answer you approach the reception desk and pay for a haircut and ask that the stylist discuss with Natasha what they feel would be the best look for her and once she\'s agreed with the stylist to proceed.');
    scene.text('When Natasha tries to protest you place your finger across her lips and simply tell her that you want to treat her and she has to choose what she wants as a style. Then you leave her with the stylist and wait.');
    scene.actions([
      { label: 'Check out the new Natasha', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['uni_nightclub_date'] = 1;
    qspCall(s, 'money', 'pay', 750);
    (s as any).minut = ((s as any).minut ?? 0) + 35;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha10a.jpg');
    scene.text('Natasha stops protesting and talks to the stylist and picks out her desired new hairstyle. She takes a seat and the stylist begins working.');
    scene.text('Nearly half an hour later, a smiling and clearly delighted Natasha has had her hair styled and cut. She calls you over to show you the result.');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha10b.jpg');
    // TODO-QSP: dynamic text: You approach Natasha, who is admiring herself in the mirror. "So, what do you th...
    scene.text(`You approach Natasha, who is admiring herself in the mirror. "So, what do you think, ${((s as any).pcs_nickname ?? 0)}?" she asks, doing a slow turn on her heels. "Do you like it?"`);
    scene.text('"Natasha, that really suits you, very pretty" you say.');
    // TODO-QSP: dynamic text: The two of you thank the stylist for his work and you pay him ' + $func('money',...
    scene.text('The two of you thank the stylist for his work and you pay him \' + $func(\'money\', \'string_price\', 750) + \' and you say to him "Guess I know where to come when I need mine done."');
    scene.text('As you leave Natasha is gushing with thanks to which you reply with a bright smile. "Just a little something which I thought would help cheer you up. Anyway I want you to look your best for our date at the nightclub."');
    scene.text('Natasha gives you a brief kiss on the cheek and a big hug. "Yeah, I\'m really looking forward to that. Anyway I\'ve got to get going now so see you soon."');
    scene.text('With a final hug you part ways.');
    scene.actions([
      { label: 'Leave', goto: ['city_mall', ''] },
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

function enterCoffeeHoleNightclubdateStrangers_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
  scene.text('You head over to The Coffee Hole to meet Natasha and go to the nightclub with her.');
  scene.text('On entering you spot her at a table drinking a coffee so you head over to her table.');
  // TODO-QSP: dynamic text: As you arrive she greets you and tells you that she bought you a Cappuccino. "He...
  scene.text(`As you arrive she greets you and tells you that she bought you a Cappuccino. "Here you go ${((s as any).pcs_nickname ?? 0)}, I hope it's still warm."`);
  scene.text('You thank her and drink the coffee and have a quick chat with her about university.');
  qspCall(s, 'beverage', 'coffee_stats');
  scene.actions([
    { label: 'Ask her if she\'s doing any extra courses', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat4.jpg');
    scene.text('"So Natasha are you looking forward to your course? It\'s in fashion design I believe?" You question.');
    scene.text('She gives you a broad smile and nods enthusiastically. "Yes it is and yes very much so but I don\'t think I\'ll know many of the other students other than Sonia."');
    scene.text('"Yes it\'s whole new world for us. Hopefully it\'ll also be a fresh start for Sonia as she didn\'t have it easy at school whatever we all think of her actions when it all kicked off." After a brief pause you change subjects. "Anyway are you doing any of the elective classes? I think a couple of them would be great for you."');
    if (((s as any).month ?? 0) === 8) {
      scene.text('"Umm I\'m still considering them…" She replies.');
      scene.text('"Well okay and it\'s up to you but I\'d suggest that the art class is pretty much a must for you and it\'d probably be good to do the computer class too especially given your job with the fashion blog."');
      // TODO-QSP: dynamic text: She nods. "Yes, now you say it I guess I should do both. Okay, thank you for the...
      scene.text(`She nods. "Yes, now you say it I guess I should do both. Okay, thank you for the prompt ${((s as any).pcs_nickname ?? 0)}. I'll get myself registered for both."`);
      scene.text('"Okay Natasha, shall we head out then?"');
      scene.text('She nods her agreement and you both get up and make your way to the metro and then onto the city center.');
    } else {
      // TODO-QSP: dynamic text: "Yes I agree <<$pcs_nickname>>; it took me ages to decide but I've enrolled for ...
      scene.text(`"Yes I agree ${((s as any).pcs_nickname ?? 0)}; it took me ages to decide but I've enrolled for both or them."`);
      scene.text('You reply. "Good I think that the art class is pretty much a must for you and the computer class will assist too especially given your job with the fashion blog."');
      scene.text('She nods in agreement and gives you a warm smile as you both get up and make your way to the metro and then onto the city center.');
    }
    scene.actions([
      { label: 'Go to the nightclub', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 250);
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat7.jpg');
    // TODO-QSP: dynamic text: Once you arrive you make your way to the nightclub and pay the entrance fee of <...
    scene.text(`Once you arrive you make your way to the nightclub and pay the entrance fee of ${qspFunc(s, 'money', 'string_price', 250)}.`);
    scene.text('Once you\'re both in you look around turn to Natasha. "So you wanna dance with me?"');
    scene.text('"Yeah I\'d love to."');
    scene.text('You then head to the dance-floor and dance the night away.');
    scene.actions([
      { label: 'Have a drink together', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.img('images/locations/city/citycenter/nightclub/club6.jpg');
    scene.text('After a while you both start to feel tired and head to the bar.');
    scene.text('While waiting at the bar a guy comes up to both of you and chats to you for a bit and buys you each a Vodka Martini.');
    scene.text('However, he doesn\'t hang around with you for long as some of his mates come and drag him away.');
    scene.text('You and Natasha look at each other and laugh. "Well cheers Natasha you say. I hope you\'re up for some more dancing…"');
    scene.text('She nods at you and you both finish your drinks then head back to the dance-floor.');
    qspCall(s, 'beverage', 'vodka_martini_stats');
    scene.actions([
      { label: 'Enjoy the night', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 120);
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat8.jpg');
    scene.text('You spend the next couple of hours dancing and visiting the bar where you have a couple more drinks although you decide to stick with beers.');
    scene.text('Natasha isn\'t so careful and has a couple more Vodka Martinis.');
    scene.text('You begin to notice that Natasha is slurring her words and starts to have a problem dancing as she bumps into other dancers.');
    scene.text('Before you can decide how to handle the situation she turns to you and smiles then holding your face she brings her lips to yours and gives you a passionate kiss. Although she caught you unaware you fully return her kiss.');
    scene.text('As you break the kiss you hold onto each other for a while and just stare into each other\'s eyes for a few moments before Natasha takes a step back.');
    scene.text('As she lets go of you she staggers backwards and nearly falls so you take her by the arm and suggest that you both leave the dance-floor before something happens as she\'s obviously quite drunk.');
    scene.text('She nods and is happy to be guided by you away from the other dancers.');
    scene.text('Once you\'re in a quieter area you sit down and you check on her. "Natasha, that kiss was very nice, a little unexpected but nice. Anyway, you seem to be a little drunk, are you okay?"');
    scene.text('She shakes her head but doesn\'t say anything.');
    qspCall(s, 'beverage', 'beer_stats');
    qspCall(s, 'beverage', 'beer_stats');
    scene.actions([
      { label: 'Try to get a taxi', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat9.jpg');
    scene.text('Okay, let\'s call it a night and get you back.');
    scene.text('You help her up and head towards the exit.');
    scene.text('As it\'s too late for the metro you leave Natasha leaning against a doorway as you look to see if you can spot a taxi nearby.');
    scene.text('You look around for a taxi but can\'t see one.');
    scene.actions([
      { label: 'Give up on the taxi', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat10.jpg');
    scene.text('You open your handbag to get your phone to call for a taxi but before you can do so you hear Natasha say. "Oh shit!" This is followed by some drunken giggles.');
    scene.text('Turning around you see that she\'s slid down the shop front and is now sitting on the pavement.');
    scene.text('You give up on the idea of a taxi and go to her.');
    scene.text('"Come on you, I guess the taxi isn\'t an option as they are unlikely to take us if you can\'t stand. We\'ll get a room at the hotel for tonight.');
    // TODO-QSP: dynamic text: Natasha looks like she's going to start crying. "I'm so sorry <<$pcs_nickname>>,...
    scene.text(`Natasha looks like she's going to start crying. "I'm so sorry ${((s as any).pcs_nickname ?? 0)}, I've never got like this before; I rarely drink and when I do it's just the odd glass of wine."`);
    scene.text('You help her up and head to the hotel and reassure her that it\'s not a problem and you\'re not mad at her.');
    scene.actions([
      { label: 'Get a room at the hotel', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/city/citycenter/hotel/receptionist.jpg');
    scene.text('You walk slowly to the hotel and approach the receptionist and ask for a standard room for 1 night.');
    // TODO-QSP: dynamic text: Once you've booked it Natasha stops you paying for it. "No <<$pcs_nickname>>, th...
    scene.text(`Once you've booked it Natasha stops you paying for it. "No ${((s as any).pcs_nickname ?? 0)}, this is my fault so at least let me pay for it."`);
    scene.text('Before you can answer she\'s paid the receptionist who warns you both that you can\'t mess up the room.');
    scene.text('You take the key and holding her close so she doesn\'t fall you guide her to the room.');
    scene.actions([
      { label: 'Natasha\'s ill', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat11.jpg');
    scene.text('You barely make it into the room before Natasha pulls away from you, drops her bag and weaves her way to the bathroom.');
    scene.text('You drop your bag by the bed and pick hers up and put it next to the bed on the other side then head to the bathroom to check on her.');
    scene.text('As you open the door you see that she\'s being sick.');
    scene.text('You offer "Are you okay Natasha or do you want me to hold your hair of something?"');
    scene.text('"No thanks. I think that\'s all of it anyway as I feel a bit better. I\'ll be fine, thank you. I\'m just so embarrassed."');
    scene.text('Not long after she returns to the bedroom, having removed her makeup and getting undressed and starts apologising again.');
    scene.text('You cut her off. "It\'s not a big deal Natasha, don\'t worry about it. If we stay friends I\'m sure you\'ll need to look after me at some point. Anyway look on the bright side, at least I\'m not such a lightweight as you!" You tease.');
    scene.text('She doesn\'t reply, drinks some water and regains some colour but still looks sorry for herself. "Well that\'s not how I\'d imagined tonight would unfold." She says sadly.');
    scene.text('You finish getting undressed and pop into the bathroom to wash then as you return you tell her to stop fretting and get some sleep."');
    scene.text('With that you get in bed next to her and before long you both fall asleep.');
    qspCall(s, 'outfit', 'backup');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(s, 'sleep_simple', 'sleep_until', 8, 0);
  }, goto: ['natbel_uni_chat', 'coffee_hole_nightclubdate_strangers_1_after'] },
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

function enterCoffeeHoleNightclubdateStrangers_1After(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat12.jpg');
  scene.text('You wake up first and after looking over at Natasha and seeing she\'s still asleep you check the time.');
  scene.text('Deciding you should get moving you give Natasha a soft nudge slowly waking her up.');
  scene.text('"Come on sleepyhead, how are you feeling? We should get moving if we want to do something together today."');
  scene.text('Natasha slowly comes too and rubs her eyes. "Yeah, I\'ve got a bit of a headache but it\'s not too bad. I didn\'t think you\'d want to do anything together today after what happened. Thanks for looking after me last night and again…"');
  scene.text('You cut her off and smile at her. "If you apologise again I\'ll smack your butt! I had a fun night with you and what happened at the end doesn\'t matter."');
  scene.text('Natasha nods but continues to look very sorry for herself and clearly doesn\'t know what to do or say. After a sigh you continue. "So do you remember what happened at the club before we left?"');
  scene.text('For a moment she looks confused then remembers. "Oh! The kiss."');
  scene.text('You ask. "Yeah, did you mean it or was it just because you were drunk?"');
  scene.text('Natasha goes bright red and stumbles over her response. "Well… I mean… Err… Well I could never have done that without the drink, but yes I meant it."');
  scene.text('When you don\'t respond immediately she continues uncertainly in a very quiet voice. "I sorta liked you while we were at school but never had the courage to say or do anything about it."');
  scene.text('You smile at her. "Umm… Okay, well that\'s a bit out of the blue, I really wasn\'t expecting that!"');
  scene.text('She looks a little downcast as you continue. "How about we give ourselves a bit of time to think so let\'s get some breakfast and get washed and dressed then we can continue this chat?"');
  scene.text('She nods at you and calls room service to buy a breakfast each and you both get washed and changed then eat breakfast together in silence. You notice that Natasha fidgets throughout.');
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'outfit', 'restore');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Kiss her to confirm she\'s your girlfriend', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A16');
    ((s as any).NatbelQW ?? {})['FriendLover'] = 9;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha16.jpg');
    scene.text('Breaking the silence you respond to her earlier comments about the kiss; smiling at her you say. "Okay Natasha, that was a surprise but I guess you know from the way I responded to your kiss at the club that I liked it."');
    scene.text('She smiles at you but doesn\'t say anything or move so you continue. "So, you want to be my girlfriend then? That\'s brave of you as you don\'t really know me."');
    scene.text('Unsure of herself she stumbles into an answer of sorts. "Well I used to fancy Lazar but that all went wrong and then I dated a couple of other guys who just messed me about so I went off the idea especially with guys. You… Well I like you, I think you\'re pretty and erm…"');
    scene.text('It soon becomes clear she isn\'t going to continue so you take the initiative and push yourself forward until your lips meet with hers. There\'s a sudden jolt coursing through you and it must be the same for her; you feel her tense for a brief moment before relaxing into your kiss.');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.text('Time seems to stand still for a bit until you both gently pull apart.');
    scene.text('You both hesitantly pull back and you slowly open your eyes and see her doing the same.');
    scene.text('You stare at one another for a few seconds. "Does that answer your question?" you ask, slyly.');
    scene.text('Natasha sighs contentedly and smiles at you happily. "Sealed with s kiss."');
    scene.text('"So Natasha I guess I should tell you a bit about me. Maybe we can do that later today, how does that sound? Anyway, perhaps we should take things slowly for now as we ease into university life," you suggest.');
    scene.text('"Mmm, yeah," Natasha says, licking her lips. "We should take things slow." She smacks her lips…');
    scene.text('Natasha leans in and starts kissing you again. You find it increasingly difficult to resist and start kissing her back.');
    scene.text('"Umm very… slow…" Natasha says in a husky voice as you momentarily break to catch your breath before you resume your kissing and cuddling.');
    scene.text('Time seems to stand still while you make out, but you eventually manage to pull yourself away.');
    scene.text('You laugh. "Well by taking things slowly I meant the relationship but I guess that\'s really not going to be an option with you is it?!" She just looks at you with a dreamy look on her face.');
    scene.text('You decide to change the subject. "So Natasha what do you want to do today then?"');
    scene.text('She thinks for a bit then suggests. "How about we go to the park, have a nice walk then have lunch in the café and get to know each other a bit better?"');
    scene.text('You agree with her suggestion get up and leave the hotel.');
    scene.actions([
      { label: 'Go to café in the park', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 290);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    scene.img('images/locations/city/centralpark/cafe/parkcafe.jpg');
    scene.text('As you\'re about to leave Natasha excuses herself saying she needs the ladies and will meet you outside.');
    scene.text('A few minutes later she appears and smiles at you as you take hold of her hand and walk through the park to the restaurant passing the time with general chat about current events, university and anything that comes to mind.');
    scene.text('Once you arrive at the restaurant you go to order some food and a drink then find a spare table.');
    scene.text('"So Natasha what did you want to know about me?"');
    scene.text('"Well, just general stuff like your family and if you have a job?"');
    scene.text('"Well my mother can be quite domineering at times which got on my nerves but she means well and my stepdad\'s nice. My brother is okay, if sometimes annoying and my sister is lovely but can be a bit of a slut at times! What about you?"');
    scene.text('"I lived with my mother and don\'t know my dad. Unfortunately my mother finds things difficult as she doesn\'t have much money and drinks too much but I love her. What about your dad, you didn\'t mention him?"');
    scene.text('"I don\'t know much about him as he left when I was young too."');
    qspCall(s, 'beverage', 'juice_stats');
    qspCall(s, 'food', 'golub_stats');
    scene.actions([
      { label: 'Begin discussing jobs in St. Petersburg', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/hands.jpg');
    scene.text('Your food and drink soon arrives and you start eating and chatting whilst occasionally holding hands across the table.');
    if ((!(((s as any).runnerQW ?? 0)?.['bronze_medals'] + ((s as any).runnerQW ?? 0)?.['silver_medals'] + ((s as any).runnerQW ?? 0)?.['gold_medals']))) {
      scene.text('"So Natasha, let\'s enjoy our meal together."');
      scene.text('She looks happy and nods at you as you both start eating.');
      scene.text('During the meal you chat about general topics and your hopes for university life and beyond.');
      scene.text('She is really enthusiastic about her fashion course and confirms she really wants to become a fashion designer, however, she thinks it\'ll be very difficult.');
      scene.text('You tell her that so long as you\'re together you\'d be happy to help wherever possible.');
    } else {
      if (((s as any).runnerQW ?? 0)?.['champ_gold'] === 0) {
        scene.text('"So Natasha, I run for the team at the gym in the city; maybe you can come and watch me if you like? So are you happy <i>girlfriend</i>??" You enquire.');
      } else {
        scene.text('You proudly tell her. "So Natasha, I run for the team at the gym in the city and I\'ve won the 400 meter track championship!; maybe you can come and watch me if you like? So are you happy <i>girlfriend</i>??" You enquire.');
        scene.text('Natasha is stunned at your achievement and takes a moment before she can respond and even then all she can manage is to look at you and splutter "Wow!"');
      }
      // TODO-QSP: dynamic text: After a moment she gets up and comes over to give you a big hug before getting a...
      scene.text(`After a moment she gets up and comes over to give you a big hug before getting a bit embarrassed and sitting down again and giving your hand a squeeze. "Yes ${((s as any).pcs_nickname ?? 0)}. I'd love to see you race. Erm… Sorry, I guess I got a bit carried away."`);
      scene.text('"That\'s fine Natasha, just maybe save it for another time." You tell her and wink.');
      scene.text('She immediately blushes and looks down.');
      scene.text('"Getting hot in here Natasha?" You continue to tease her. "Shall I get you a glass of ice water?"');
      // TODO-QSP: dynamic text: "Stop it <<$pcs_nickname>>." She says blushing even more. After gathering hersel...
      scene.text(`"Stop it ${((s as any).pcs_nickname ?? 0)}." She says blushing even more. After gathering herself she continues. "Thank you again for taking me out to the nightclub, I enjoyed that despite the way the night ended. Also for looking after me; that was so nice of you."`);
      scene.text('"No worries Natasha that\'s what friends do; anyway let\'s enjoy our meal together."');
      scene.text('She looks happy and nods at you as you both start eating.');
      scene.text('During the meal you chat about general topics and your hopes for university life and beyond.');
      scene.text('She is really enthusiastic about her fashion course and confirms she really wants to become a fashion designer, however, she thinks it\'ll be very difficult.');
      scene.text('You tell her that so long as you\'re together you\'d be happy to help wherever possible.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco2.jpg');
    scene.text('As the meal moves towards the end and you are finishing your drinks you see that Natasha has something on her mind by the way she keeps glancing at you.');
    scene.text('"So Natasha, I can see there\'s still something on your mind, what is it?"');
    scene.text('"Well, I was wondering…" She pauses.');
    scene.text('"Come on Natasha, spit it out. I won\'t bite… Much!" You say followed by a mouthing a quick bite.');
    scene.text('She smiles at you. "Okay, well I was just wondering if you did anything jobs here other than stuff like restaurant work or casual jobs?"');
    if (((s as any).runnerQW ?? 0)?.['joined_team'] > 0  &&  (((s as any).runnerQW ?? 0)?.['bronze_medals'] + ((s as any).runnerQW ?? 0)?.['silver_medals'] + ((s as any).runnerQW ?? 0)?.['gold_medals']) > 0) {
      // TODO-QSP: $temp_city_work[] = 'runner'
    }
    if (((s as any).photography_start ?? 0) > 0) {
      // TODO-QSP: $temp_city_work[] = 'photographer'
    }
    if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed') {
      // TODO-QSP: $temp_city_work[] = 'masseuse'
    }
    if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      // TODO-QSP: $temp_city_work[] = 'model'
    }
    qspCall(s, 'natbel_uni_chat', 'coffee_hole_nightclubdate_strangers_1_job_hub');
    scene.actions([
      { label: 'Nope.', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco1.jpg');
    scene.text('"Nope, just casual stuff for now as I didn\'t want to rush into something I didn\'t like and it\'s not an immediate priority for me at the moment.');
    // TODO-QSP: dynamic text: Natasha smiles at you and replies "Thank you <<$pcs_nickname>>."
    scene.text(`Natasha smiles at you and replies "Thank you ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"You get up and give her a hug. "Come on let\'s just enjoy the rest of our weekend."');
    scene.text('Natasha nods at you and you continue your meal.');
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

function enterCoffeeHoleNightclubdateStrangers_1JobHub(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).temp_city_work) ? ((s as any).temp_city_work as any[]).indexOf('photographer') : -1) >= 0) {
    scene.actions([
      { label: 'Tell her you work as a photographer.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco1.jpg');
    scene.text('"Well, I so some commissioned photography work but it\'s not a regular job; a bit as and when as it depends on what\'s available when I go and ask."');
    scene.text('Natasha nods to acknowledge what you said. "What sort of work do you get from this?" She asks.');
    scene.text('"That\'s completely random and some pay better than others, but it\'s a way to gaining more experience so I\'m happy to take them as I quite enjoy seeing the world through a lens; you never know I may become good enough to start doing some well paid jobs." You shrug.');
    scene.text('"Yeah I guess we\'re all trying to figure out what we want to do and even if we\'ve chosen a career path there\'s lots of different options in that chosen path."');
    scene.text('You smile at her and nod your agreement.');
    qspCall(s, 'natbel_uni_chat', 'coffee_hole_nightclubdate_strangers_1_job_hub');
  } },
    ]);
  }
  if ((Array.isArray((s as any).temp_city_work) ? ((s as any).temp_city_work as any[]).indexOf('masseuse') : -1) >= 0) {
    scene.actions([
      { label: 'Tell her you work at the Beauty Bar.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco1.jpg');
    scene.text('"Yes, I\'m a qualified masseuse and work at the beauty bar in the Galeria Mall." You pause. "So if you ever get too stressed maybe my magic hands can help" You grin at her before continuing. "Although I can think of other more enjoyable ways to relieve stress."');
    // TODO-QSP: dynamic text: Natasha blushes at your remark "<<$pcs_nickname>>! Not so loud!"
    scene.text(`Natasha blushes at your remark "${((s as any).pcs_nickname ?? 0)}! Not so loud!"`);
    scene.text('You hold your hands up. "Sorry Natasha you just blush and get embarrassed so easily I can\'t resist a bit of teasing."');
    scene.text('"I know and I don\'t mind you teasing, I just need to get used to all this." You smile at her and take a sip of your drink.');
    qspCall(s, 'natbel_uni_chat', 'coffee_hole_nightclubdate_strangers_1_job_hub');
  } },
    ]);
  }
  if ((Array.isArray((s as any).temp_city_work) ? ((s as any).temp_city_work as any[]).indexOf('model') : -1) >= 0) {
    scene.actions([
      { label: 'Tell her you are a model.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco1.jpg');
    scene.text('"I work as a model at Aphrodite Photography but please don\'t spread that around. I like the job as there are no fixed times which means it\'s much easier to fit it in my schedule."');
    scene.text('Natasha is clearly shocked and sits in front of you wide eyed and speechless for a moment. Then suddenly she starts to reply with the words coming out in such a rush you find it difficult to actually understand what she\'s saying. "A model! What? How?" Followed by something you just didn\'t get at all.');
    scene.text('"Slow down Natasha! Yes a model, are you saying you don\'t think I\'m pretty enough? Is that why you\'re so shocked?" You tease.');
    // TODO-QSP: dynamic text: "No! No! Of course you're pretty. It's not that <<$pcs_nickname>>! It's just a s...
    scene.text(`"No! No! Of course you're pretty. It's not that ${((s as any).pcs_nickname ?? 0)}! It's just a surprise."`);
    scene.text('"Chill Natasha it\'s fine and before you ask yes I have a portfolio which I\'ll show you if you want."');
    // TODO-QSP: dynamic text: Natasha slowly recovers her poise. "Yes please <<$pcs_nickname>>, that'd be grea...
    scene.text(`Natasha slowly recovers her poise. "Yes please ${((s as any).pcs_nickname ?? 0)}, that'd be great. You never know if I do well with fashion I might get to a point where I can ask you to model some of my stuff."`);
    scene.text('"Yeah, that\'d make us a great team wouldn\'t it?" You remeasure her.');
    scene.text('She takes a moment then looks at you quizzically and asks "Why don\'t you want me to say anything? I presume you mean at university?"');
    scene.actions([
      { label: 'Just don\'t want it spread', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco2.jpg');
    scene.text('"No specific reason Natasha, I just don\'t want to be answering stuff about it if it get\'s out when it\'s nothing to do with anyone else." You pause as Natasha looks at you questioningly. "Come on Natasha you know what Lizavetta is like and I\'ve told you this in strict confidence!"');
    scene.text('Natasha nods at you "Yes it\'s okay I get it and I won\'t say anything."');
    scene.text('You continue. "Actually Anushka works there too and I don\'t think she\'d want us spreading this either."');
    // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>> I won't say anything so if someone finds out it w...
    scene.text(`"Don't worry ${((s as any).pcs_nickname ?? 0)} I won't say anything so if someone finds out it won't be from me and yes I completely agree, Anushka is none of my business."`);
    scene.text('"Thank you. Anyway it\'d be up to her if she wants to say something."');
    scene.text('Natasha nods her agreement and plays with her hair while beaming at you.');
    if (((s as any).firstkasting ?? 0) === 0  &&  ((s as any).modelfoto ?? 0)?.['erotic'] === 0) {
      qspCall(s, 'natbel_uni_chat', 'coffee_hole_nightclubdate_strangers_1_job_hub');
    } else {
      scene.actions([
        { label: 'Erm…', goto: ['natbel_uni_chat', 'coffee_hole_nightclubdate_strangers_1_job_hub_porn'] },
      ]);
    }
  } },
      { label: 'Don\'t want to deal with Lizavetta and the other insufferable <i>cool kids</i>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco2.jpg');
    scene.text('"Simple really Natasha, I just don\'t want to deal with Lizavetta together with the three witches!"');
    scene.text('She looks at you questioningly so you expand.');
    scene.text('"Yep, you know from Macbeth? <i>Double Double Toil and Trouble</i> aka Irina, Bella, Stasya then add in Trouble, also known as Lizavetta who feeds their ego! They\'re just so bloody insufferable!"');
    scene.text('Natasha has a small laugh. "I never thought of them like that but now that you mention it, yes I have to agree… Yep, that\'s a good description of those four!"');
    scene.text('"Well I never thought I\'d hear you say that! I know you wanted to be one of the cool kids while we were at school but they\'re a good reason not too. They aren\'t <i>cool</i> and I\'m glad you\'re not like them! If you want to be like a <i>cool kid</i> model yourself on Katja or Vicky; they\'re nice. However, I\'d just suggest you to be you and true to yourself."');
    // TODO-QSP: dynamic text: "I'm trying <<$pcs_nickname>>, I just lack self confidence." She plays with her ...
    scene.text(`"I'm trying ${((s as any).pcs_nickname ?? 0)}, I just lack self confidence." She plays with her hair and beams at you.`);
    if (((s as any).firstkasting ?? 0) === 0  &&  ((s as any).modelfoto ?? 0)?.['erotic'] === 0) {
      qspCall(s, 'natbel_uni_chat', 'coffee_hole_nightclubdate_strangers_1_job_hub');
    } else {
      scene.actions([
        { label: 'Erm…', goto: ['natbel_uni_chat', 'coffee_hole_nightclubdate_strangers_1_job_hub_porn'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (Object.keys((s as any).temp_city_work ?? {}).length === 0  ||  Object.keys((s as any).temp_city_work ?? {}).length === 1  &&  ((s as any).temp_city_work ?? 0)[0] === 'runner') {
    scene.actions([
      { label: 'Discuss the fashion blog', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco1.jpg');
    scene.text('"So Natasha, I understand that you have a fashion blog. How\'s it going?" You ask.');
    scene.text('"Why would you think it\'s my blog?"');
    scene.text('You shrug, "I don\'t I was just taking a guess. I think I\'ve seen it and it\'s very good and detailed and there\'s only two students in our year that know that much about fashion and that\'s you and Sonia."');
    // TODO-QSP: dynamic text: She smiles at you and responds happily. "Well, it's not my blog <<$pcs_nickname>...
    scene.text(`She smiles at you and responds happily. "Well, it's not my blog ${((s as any).pcs_nickname ?? 0)}, I just help out but yeah it's going fine and I'm really enjoying it. Making a bit of money from it is also really nice."`);
    scene.text('"Well that\'s great Natasha, I\'m so pleased for you."');
    scene.text('Natasha motions you to get closer. "Here let me show you."');
    scene.text('She gets her phone out and shows you the blog. "I don\'t do the content, although I\'ve made some suggestions on content to add or amend; I mainly do the techie stuff."');
    scene.text('"Looks great Natasha, let\'s hope it continues."');
    scene.text('After a pause you continue. "Maybe we can go on a few dates doing fun stuff together and as I know you\'re into fashion we can take in a visit or two to the mall?"');
    scene.text('She nods enthusiastically and smiles, probably thinking of hauling you round loads of shops and trying on stuff with her.');
    if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] === 0) {
      scene.actions([
        { label: 'Leave the café', goto: ['natbel_uni_chat', 'coffee_hole_nightclubdate_1_cafe_leave'] },
      ]);
    } else {
      scene.actions([
        { label: 'Natasha asks about the your involvement with Albina and the major scandal that broke while at school', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/hands.jpg');
    // TODO-QSP: dynamic text: Natasha clearly has something else on her mind and fidgets while looking at you ...
    scene.text(`Natasha clearly has something else on her mind and fidgets while looking at you with concern and raises the subject of your friendship with Albina. "${((s as any).pcs_nickname ?? 0)}, are'nt you close friends with Albina and part of her group which got caught up in that big scandal last year?"`);
    // TODO-QSP: dynamic text: Unsure of how to reply you pause to consider your response. Natasha takes this a...
    scene.text(`Unsure of how to reply you pause to consider your response. Natasha takes this as a bad sign and looks downcast. "Sorry, ${((s as any).pcs_nickname ?? 0)} I shouldn't have raised it. Don't answer if you don't want to. I… I'm just concerned for you." She trails off.`);
    scene.text('You\'d hoped this was a distant memory but realise you need to deal with it. With a sigh you make your decision. "Well, it\'s not a period I like to talk about but to answer your underlying question, yes the troupe were exploited. As Albina is my friend I wasn\'t going to abandon her but it\'s done with now."');
    scene.text('"Thank you for telling me, I can only guess that was hard for you. I hope you and I will become best friends and more so I apologise for raising it; that was a bit thoughtless of me. If you ever want to talk about it please know I\'ll be there for you if you need me."');
    scene.text('With that she gives your hand a friendly squeeze.');
    scene.actions([
      { label: 'Leave the café', goto: ['natbel_uni_chat', 'coffee_hole_nightclubdate_1_cafe_leave'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterCoffeeHoleNightclubdateStrangers_1JobHubPorn(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/girl/natasha/friends/cafe1.jpg');
  // TODO-QSP: dynamic text: Natasha starts fidgeting more then looks at you and says in a very quiet voice "...
  scene.text(`Natasha starts fidgeting more then looks at you and says in a very quiet voice "Erm… ${((s as any).pcs_nickname ?? 0)} are you ${((s as any).pfname ?? 0)}?"`);
  scene.text('You look at her quizzically but she doesn\'t respond and averts her eyes away from you.');
  scene.text('You were hoping she wouldn\'t have brought this up but guess that if you stay with her it would need to be discussed at some point so it might as well be now.');
  scene.actions([
    { label: 'No it\'s not me', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/cafe1.jpg');
    scene.text('She caught you unaware and you\'re not sure how to respond so for now you feel that it\'s better to deny and see where it goes so you reply. "No Natasha guess it\'s a look alike." You tail off not wanting to push it further and hoping she\'ll just drop it and move on.');
    // TODO-QSP: dynamic text: Unfortunately for you she doesn't. "Well she really looks like you <<$pcs_nickna...
    scene.text(`Unfortunately for you she doesn't. "Well she really looks like you ${((s as any).pcs_nickname ?? 0)}." She looks sad as she pauses then continues. "Sorry ${((s as any).pcs_nickname ?? 0)} I shouldn't have brought it up. I didn't mean to embarrass you."`);
    scene.text('You feel bad for lying to her and sigh. You don\'t want to base your relationship on lies so you take a deep breath and admit that it is you.');
    scene.actions([
      { label: 'Yeah that\'s me', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/hands.jpg');
    if ((Array.isArray((s as any).temp_city_work) ? ((s as any).temp_city_work as any[]).indexOf('runner') : -1) >= 0) {
      scene.text('"Well… Yes Natasha, I didn\'t want to say anything as I really don\'t want that known as it\'d just cause problems but yes I do it because the money is good. Maybe I\'ll stop soon, I\'ll have to think about that. I\'m sorry I lied to you initially, that wasn\'t nice!"');
      // TODO-QSP: dynamic text: Natasha gives you a hug. "Don't worry <<$pcs_nickname>> I'd never say anything w...
      scene.text(`Natasha gives you a hug. "Don't worry ${((s as any).pcs_nickname ?? 0)} I'd never say anything whatever happens between us.`);
    } else {
      scene.text('"Well… Yes Natasha, I didn\'t want to say anything as I really don\'t want that known as it\'d just cause problems but yes I do it because the money is good. Anyway, now that my racing is starting to provide a good income plus the model work it should be fine so it shouldn\'t be much longer before I can stop if I want as I\'ll also be able to do the sports modelling work which comes with better pay. Maybe I\'ll be able to stop soon, I\'ll have to think about that. Also I\'m sorry I lied to you initially, that wasn\'t nice!"');
      scene.text('You take hold of her hand and give it a friendly squeeze.');
    }
    qspCall(s, 'natbel_uni_chat', 'coffee_hole_nightclubdate_strangers_1_job_hub');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_coffee_hole_chats':
      enterSetCoffeeHoleChats(s, scene);
      break;
    case 'coffee_hole_chat_gf_1':
      enterCoffeeHoleChatGf_1(s, scene);
      break;
    case 'coffee_hole_nightclubdate_gf_1':
      enterCoffeeHoleNightclubdateGf_1(s, scene);
      break;
    case 'coffee_hole_nightclubdate_gf_1_after':
      enterCoffeeHoleNightclubdateGf_1After(s, scene);
      break;
    case 'coffee_hole_nightclubdate_1_cafe_leave':
      enterCoffeeHoleNightclubdate_1CafeLeave(s, scene);
      break;
    case 'coffee_hole_chat_brokenup_1':
      enterCoffeeHoleChatBrokenup_1(s, scene);
      break;
    case 'coffee_hole_chat_strangers_1':
      enterCoffeeHoleChatStrangers_1(s, scene);
      break;
    case 'coffee_hole_nightclubdate_strangers_1':
      enterCoffeeHoleNightclubdateStrangers_1(s, scene);
      break;
    case 'coffee_hole_nightclubdate_strangers_1_after':
      enterCoffeeHoleNightclubdateStrangers_1After(s, scene);
      break;
    case 'coffee_hole_nightclubdate_strangers_1_job_hub':
      enterCoffeeHoleNightclubdateStrangers_1JobHub(s, scene);
      break;
    case 'coffee_hole_nightclubdate_strangers_1_job_hub_porn':
      enterCoffeeHoleNightclubdateStrangers_1JobHubPorn(s, scene);
      break;
    default:
      enterSetCoffeeHoleChats(s, scene);
      break;
  }
}

export const natbel_uni_chat: LocationDef = {
  name: 'natbel_uni_chat',
  title: 'You enter the café and have a look around to see who else is',
  region: 'other',
  enter: enter,
};
