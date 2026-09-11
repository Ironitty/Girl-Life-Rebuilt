import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichTanya ?? 0)?.['FuckLast'] !== ((s as any).daystart ?? 0)) {
    ((s as any).nichTanya ?? {})['FuckToday'] = 0;
  }
  scene.build();
}

function enterBedroomTanya(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).nichTanyaPic ?? 0)}`);
  ((s as any).nichTanya ?? {})['PropDate'] = 0;
  ((s as any).nichTanya ?? {})['PropSex'] = 0;
  if (((s as any).nichGalaKnowsPT ?? 0) === 10) {
    if (((s as any).nichTanya ?? 0)?.['Relationship'] === 0) {
      (s as any).nichGalaKnowsPT = 11;
      scene.actions([{ label: 'Continue', goto: ['nichTanya', 'bedroomTanya'] }]);
    } else {
      scene.text('Gala ordered you to break up with Tanya. Maybe you should talk with her. But if you do so you risk losing her.');
      scene.actions([
        { label: 'Talk with her', handler: (st: GameState) => {
    scene.text('"Tanya, I have to talk with you…"');
    scene.text('You tell her how her mother demanded you to break up with her.');
    scene.text('After you finished you look at Tanya waiting for her reaction.');
    if (((s as any).nichTanya ?? 0)?.['Relationship'] === 2) {
      scene.text('She does not appear to be very upset.');
      scene.text('"Well, maybe she is right. After all you told me that you don\'t want something more meaningful with me."');
      scene.text('She hesitates for a second.');
      scene.text('"And I really don\'t want you to get into trouble with my mother. I think it would be for the best if stopped… well… whatever it is we are having."');
      scene.text('You are about to object but Tanya seems to have made up her mind. So you can only nod and turn away.');
      ((s as any).nichTanya ?? {})['Relationship'] = 5;
      (s as any).nichGalaKnowsPT = 11;
      qspCall(s, 'npc_relationship', 'set', 'A218', 30);
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    } else {
      if (((s as any).nichTanya ?? 0)?.['Relationship'] === 1) {
        scene.text('She does not appear to be very upset.');
        scene.text('"Well, maybe she is right. I mean I wouldn\'t have dreamt of being with a girl before I met you. And except for you I feel more attracted to men anyways."');
        scene.text('She hesitates for a second.');
        scene.text('"And I really don\'t want you to get into trouble with my mother. I think it would be for the best if stopped… well… whatever it is we are having."');
        scene.text('You are about to object but Tanya seems to have made up her mind. So you can only nod and turn away.');
        ((s as any).nichTanya ?? {})['Relationship'] = 5;
        (s as any).nichGalaKnowsPT = 11;
        qspCall(s, 'npc_relationship', 'set', 'A218', 30);
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
        ]);
      } else {
        if (((s as any).nichTanya ?? 0)?.['Relationship'] === 3) {
          scene.text('She appears very upset.');
          scene.text('"What?! How can she…" she begins to sob. Trying to comfort her you embrace her.');
          scene.actions([
            { label: 'Break up', handler: (st: GameState) => {
    scene.text('"Tanya, I think you mother is right. It would be for the best if we broke up."');
    scene.text('Hearing your words she pushes you away. Her eyes are watery but now she has an angry expression on her face.');
    scene.text('"How can you?!" she yells at you. "Do I mean so little to you?! Get out of my room! Right! Now!"');
    ((s as any).nichTanya ?? {})['Relationship'] = 4;
    (s as any).nichGalaKnowsPT = 11;
    qspCall(s, 'npc_relationship', 'set', 'A218', 10);
    scene.actions([
      { label: 'Leave', goto: ['nichApartment', ''] },
    ]);
  } },
            { label: 'Continue in secret', handler: (st: GameState) => {
    scene.text('"Tanya, I don\'t want to leave you. But we have to be careful. At least until your mother accepts us."');
    scene.text('Tanya sobs again. Then she nods.');
    scene.text('You continue comforting her for a few minutes until she appears to be fine again. You kiss her passionately before leaving her.');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).nichGalaKnowsPT = 12;
    qspCall(s, 'npc_relationship', 'modify', 'A218', 'dislike');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
            { label: 'Defy Gala', handler: (st: GameState) => {
    scene.text('"Tanya, I don\'t want to leave you. And you mother can\'t force us apart. You are an adult and Nicholas won\'t fire me because of this. There is nothing Gala can really do to us."');
    scene.text('Tanya sobs again. "I… I don\'t know. Do you really think so? I mean I don\'t want to lose you. Shouldn\'t we just try to meet in secret?"');
    scene.text('"No, we don\'t have to. Don\'t worry. Everything will be just fine. You will see."');
    scene.text('You continue comforting her for a few minutes until she appears to be fine again. You kiss her passionately before leaving her.');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).nichGalaKnowsPT = 14;
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
          ]);
        }
      }
    }
  } },
        { label: 'Don\'t tell her', handler: (st: GameState) => {
    (s as any).nichGalaKnowsPT = 13;
    scene.text('You decide that it\'s better not to upset Tanya with her mothers wishes.');
    scene.actions([
      { label: 'Further', goto: ['nichTanya', 'bedroomTanya'] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).nichTanya ?? 0)?.['Relationship'] === 2) {
      if (((s as any).nichTanya ?? 0)?.['FuckCounter'] > (Math.floor(Math.random() * 11) + 30)  &&  ((s as any).nichTanya ?? 0)?.['FuckToday'] === 0) {
        scene.text('As you approach her she greets you with a smile. She walks over to her bed and sits down on the edge. Apparently she expects you to sit next to her.');
        // TODO-QSP: dynamic text: Once you'he settled down she says with a serious voice "<<$pcs_nickname>>, we ha...
        scene.text(`Once you'he settled down she says with a serious voice "${((s as any).pcs_nickname ?? 0)}, we have to talk."`);
        scene.text('"You remember the boy I told you about? Well, we went out for a few dates. He is a really great guy and I think he genuinely loves me."');
        scene.text('She hesitates for a few seconds. "And since you told me that you are not interested in something longlasting…"');
        scene.text('She stops for another few seconds. She obviously feels uncomfortable to speak out what she has to say.');
        scene.text('"Well… he is my boyfriend now. And I am his girlfriend."');
        scene.text('"So you are saying…"');
        scene.text('"Yes. I\'m afraid our time of having fun together is over. Don\'t get me wrong, I really enjoyed it. But it\'s time for me to move on now. You understand that, do you?"');
        (s as any).nichNTRelation = 10;
        scene.actions([
          { label: 'Sure', handler: (st: GameState) => {
    ((s as any).nichTanya ?? {})['Relationship'] = 6;
    qspCall(s, 'npc_relationship', 'set', 'A218', 50);
    qspCall(s, 'stat', '');
    scene.text('"Of course."');
    // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>>, I hoped you'd say that." She hugs you.
    scene.text(`"Oh ${((s as any).pcs_nickname ?? 0)}, I hoped you'd say that." She hugs you.`);
    if (((s as any).nichTanya ?? 0)?.['Uni'] >= 100) {
      scene.text('"You will meet Vlad shortly. I\'m sure you will like him. He is a really nice guy."');
      ((s as any).nichTanya ?? {})['BF'] = 1;
    } else {
      scene.text('"You will meet Grigory shortly. I\'m sure you will like him. You two have much in common."');
      ((s as any).nichTanya ?? {})['BF'] = 2;
    }
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
        ]);
      } else {
        scene.text('As you approach her she greets you with a smile.');
        ((s as any).nichTanya ?? {})['PropSex'] = 1;
        ((s as any).nichTanya ?? {})['PropDate'] = 1;
      }
    } else {
      if (((s as any).nichTanya ?? 0)?.['Relationship'] === 1) {
        if (((s as any).nichTanya ?? 0)?.['FuckCounter'] > (Math.floor(Math.random() * 4) + 22)  &&  ((s as any).nichTanya ?? 0)?.['FuckToday'] === 0) {
          scene.text('As you approach her she greets you with a smile. She walks over to her bed and sits down on the edge. Apparently she expects you to sit next to her.');
          // TODO-QSP: dynamic text: Once you'he settled down she says with a serious voice "<<$pcs_nickname>>, we ha...
          scene.text(`Once you'he settled down she says with a serious voice "${((s as any).pcs_nickname ?? 0)}, we have to talk."`);
          scene.text('You look at her. Her face does\'t give away her thoughts.');
          scene.text('"I really enjoy our… well… special times. I really do. And I really really like you. But there is somebody… ehm… I guess…"');
          scene.text('"So there is this guy who asked me out for a date… and he is really cute and so…"');
          scene.text('"I really didn\'t know what to tell him. I don\'t have the feeling that you think our friendship is more than just a friendship. Please tell me if I am wrong!"');
          scene.actions([
            { label: 'Lets stay friends with benefits', handler: (st: GameState) => {
    scene.text('"You\'re right, Tanya. I really like you, but I\'d like things to stay casual."');
    scene.text('She looks a tiny bit disappointed. "Oh, that\'s ok. So you wouldn\'t mind if I brought a boy over here?"');
    scene.text('"No, of course not."');
    scene.text('"Well… that\'s good… you have given me a lot to think about. Would you mind letting me think everything over?"');
    ((s as any).nichTanya ?? {})['Relationship'] = 2;
    scene.actions([
      { label: 'Of course not (Leave her)', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
            { label: 'I love you', handler: (st: GameState) => {
    scene.text('"Actually, Tanya, I wish we could be so much more than just friends."');
    scene.text('"Really?" She beams. "I feel the same way! I was only afraid…"');
    scene.text('She is silenced by your kiss.');
    scene.text('Once she is able to talk again she jumps up and hugs you. "Oh, this is so great. I am so happy now. Does this mean you are my girlfriend now?"');
    scene.text('"I guess so."');
    scene.text('Tanya looks overjoyed. Unable to find any more words to express her emotions she starts to hug and kiss you again.');
    ((s as any).nichTanya ?? {})['Relationship'] = 3;
    (s as any).nichNTRelation = 10;
    qspCall(s, 'npc_relationship', 'modify', 'A218', 'adore');
    scene.actions([
      { label: 'Fuck her', goto: ['nichTanya', 'sexL'] },
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('As you approach her she greets you with a smile.');
          ((s as any).nichTanya ?? {})['PropSex'] = 1;
          ((s as any).nichTanya ?? {})['PropDate'] = 1;
        }
      } else {
        if (((s as any).nichTanya ?? 0)?.['Relationship'] === 3) {
          if (((s as any).nichTanya ?? 0)?.['FuckLast'] < ((s as any).daystart ?? 0) - 5) {
            scene.text('As you approach her she greets you with a smile. "Hello sweety. Why didn\'t you visit me lately? Have you been busy?"');
          } else {
            if (((s as any).nichTanya ?? 0)?.['FuckLast'] === ((s as any).daystart ?? 0)) {
              scene.text('As you approach her she greets you with a smile. "Hello sweety. Are you back for another round?"');
            } else {
              scene.text('As you approach her she greets you with a smile. "Hello sweety. How are you doing?"');
            }
          }
          ((s as any).nichTanya ?? {})['PropSex'] = 1;
          ((s as any).nichTanya ?? {})['PropDate'] = 1;
        }
      }
    }
  }
  if (((s as any).nichTanya ?? 0)?.['PropSex'] === 1) {
    scene.actions([
      { label: 'Propose having sex', handler: (st: GameState) => {
    if (((s as any).nichTanya ?? 0)?.['FuckToday'] >= 3) {
      qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
      scene.text('As you propose going for yet another round Tanya slowly shakes her head.');
      // TODO-QSP: dynamic text: "I'm sorry, <<$pcs_nickname>>. I'm really exhausted. Doing it four times a day i...
      scene.text(`"I'm sorry, ${((s as any).pcs_nickname ?? 0)}. I'm really exhausted. Doing it four times a day is too much for me. But we can cuddle if you'd like."`);
      scene.actions([
        { label: 'Cuddle', goto: ['nichTanya', 'cuddle'] },
        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
      scene.text('"Hey Tanya. I was wondering if you are in the mood to have some fun."');
      scene.text('"Of course! Just give me a minute."');
      scene.actions([
        { label: 'Wait for her', goto: ['nichTanya', 'sexL'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).nichTanya ?? 0)?.['PropDate'] === 1  &&  (((s as any).nichTanya ?? 0)?.['DateLast'] !== ((s as any).daystart ?? 0)  ||  ((s as any).nichDebug ?? 0) === 1)) {
    qspCall(s, 'nichTanya', 'date_proposal');
  }
  ((s as any).nichTanya ?? {})['PropDate'] = 0;
  ((s as any).nichTanya ?? {})['PropSex'] = 0;
  scene.actions([
    { label: 'Talk with her', goto: ['nichTanya', 'chat'] },
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterDateProposal(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Propose going on a date', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
    ((s as any).nichTanya ?? {})['DateCounter'] = (((s as any).nichTanya ?? {})['DateCounter'] ?? 0) + (1);
    ((s as any).nichTanya ?? {})['DateLast'] = ((s as any).daystart ?? 0);
    scene.text('"Hey Tanya. I was wondering if you would like to go out on a date."');
    scene.text('"Sure. That\'s a great idea. What would you like to do?"');
    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Let\'s go to the beach (3:30) [+$func(\'money\', \'get_cost_string\', 100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['nichTanya', 'date_lake'] }]);
    }
  } },
      ]);
    }
    if (((s as any).age ?? 0) >= 18  ||  ((s as any).fakepassport ?? 0) === 1) {
      scene.actions([
        { label: 'Let\'s go to bar Rabotnik & play pool (2hrs)', goto: ['nichTanya', 'date_bar'] },
      ]);
    }
    scene.actions([
      { label: 'Let\'s go to the cinema (2hrs)', goto: ['nichTanya', 'date_cinema'] },
      { label: 'Let\'s go somewhere more private (2hrs)', goto: ['nichTanya', 'date_pool'] },
      { label: 'Let her pick (2hrs)', goto: ['nichTanya', 'date_shopping'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDateLake(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/tanya/door_01.jpg');
  scene.text('You greet her. "Hi Tanya, I\'ve been thinking and would like to go out with you for a few hours so how do you fancy going to the lake?"');
  // TODO-QSP: dynamic text: Tanya looks at you a bit unsure. "What do you mean <<$pcs_nickname>>? Like on a ...
  scene.text(`Tanya looks at you a bit unsure. "What do you mean ${((s as any).pcs_nickname ?? 0)}? Like on a date?"`);
  scene.text('"Well, yeah on a date. What do you think? Shall we do that today?"');
  // TODO-QSP: dynamic text: Tanya's face lights up into a broad grin. "Yes I'd love to <<$pcs_nickname>>. Le...
  scene.text(`Tanya's face lights up into a broad grin. "Yes I'd love to ${((s as any).pcs_nickname ?? 0)}. Let me pop my shoes on and grab my coat and we'll go."`);
  scene.actions([
    { label: 'Horseback ride', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'money', 'pay', 100);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/horse.jpg');
    scene.text('Tanya is back within a minute and you go to the beach. The journey is uneventful and you arrive there an hour later after chatting about various topics while on your way.');
    scene.text('When you get there Tanya points out the horse riding and excitedly suggests you both take a leisurely ride on horseback.');
    // TODO-QSP: dynamic text: "Sounds good Tanya, let's go," you respond. You both pay the <<$func('money', 's...
    scene.text(`"Sounds good Tanya, let's go," you respond. You both pay the ${qspFunc(s, 'money', 'string_price', 100)} and spend the next 30 minutes having a wonderful leisurely ride along the lakeside.`);
    scene.text('When the ride is finished you have a look around and decide what to do next.');
    scene.actions([
      { label: 'Let\'s go nude sunbathing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_beach1.jpg');
    // TODO-QSP: dynamic text: Without allowing you to say anything Tanya heads off up some rocks. "Come on <<$...
    scene.text(`Without allowing you to say anything Tanya heads off up some rocks. "Come on ${((s as any).pcs_nickname ?? 0)}, follow me. I know a nice place where we can sunbath nude."`);
    scene.text('As she\'s already heading off up the rocks you have little option but to follow.');
    scene.text('You\'re not complaining, however, as she\'s only wearing a skimpy blue dress and climbing the rocks makes it ride up giving you a good view of her panties.');
    scene.actions([
      { label: 'Nude sunbathing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_beach2.jpg');
    scene.text('After you\'ve both climbed the rocks you arrive at a nudist beach.');
    scene.text('Tanya doesn\'t wait for you and immediately strips naked leaving you with little choice but to follow her example, especially as when you get down to your panties you feel a tug from a giggling Tanya as they disappear down your leg.');
    scene.text('Tanya get\'s her sun cream from her bag and smiling at you asks you to apply it over her body. As you do you notice her breathing changes and she let\'s out the odd gasp as you apply the lotion to the tops of her legs. You simply can\'t resist a little bit of teasing and run your fingers down her increasingly wet slit.');
    // TODO-QSP: dynamic text: When it's applied she tells you that it's her turn and as she applies the lotion...
    scene.text(`When it's applied she tells you that it's her turn and as she applies the lotion to you she whispers in your ear. "You know ${((s as any).pcs_nickname ?? 0)}, when we get back don't even think of leaving as you have an appointment in my room!"`);
    scene.text('After applying sun cream to each other you both enjoy the sun and each other\'s company chatting about whatever comes to mind.');
    qspCall(s, 'npcStat', 'A218');
    qspCall(s, 'arousal', 'massage_give', 10, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_beach3.jpg');
    scene.text('After thirty minutes have passed bye you both take a quick dip in the lake before returning to your clothes and putting on a bikini then head back towards the main beach.');
    scene.text('Tanya seems to deliberately walk slowly so you are in front of her and can\'t see what she\'s up to.');
    scene.text('All of a sudden you feel a squirt of water hit you on the ass. You look round and Tanya is laughing and holding a water pump.');
    scene.actions([
      { label: 'Water fight', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_beach4.jpg');
    scene.text('"Water fight!" She exclaims taking a second water pump out of her bag and throwing it over to you after she pulls her bikini top to one side, exposing her small delicate breasts.');
    scene.text('As you turn around she fires again and catches you full in the face.');
    scene.text('"Right, you asked for this!" You shout in between laughter. She turns and tries to get away but isn\'t quick enough and you fire some water back at her catching her.');
    scene.text('You are soon both in fits of giggles and soaked once again.');
    scene.actions([
      { label: 'Return to Tanya\'s', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/tanroom.jpg');
    scene.text('You both dry off again and get dressed before heading back to Tanya\'s.');
    scene.text('As you approach Tanya\'s she leans in close to you and whispers huskily. "Remember what I said earlier. Don\'t even think you can leave before your appointment in my bedroom!"');
    // TODO-QSP: dynamic text: As soon as you arrive back at her's she virtually drags you into her room. "Clot...
    scene.text(`As soon as you arrive back at her's she virtually drags you into her room. "Clothes off ${((s as any).pcs_nickname ?? 0)} <i>NOW</i>!"`);
    scene.actions([
      { label: 'Have sex with Tanya', goto: ['nichTanya', 'sexL'] },
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

function enterDateCinema(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A218');
  qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/tanya/door_01.jpg');
  scene.text('You greet her. "Hi Tanya, I thought I\'d pop by and see if you would like to go out with you for a few hours so how do you fancy going to the cinema?"');
  // TODO-QSP: dynamic text: Tanya looks at you a bit unsure. "Oh <<$pcs_nickname>> you mean you want to go o...
  scene.text(`Tanya looks at you a bit unsure. "Oh ${((s as any).pcs_nickname ?? 0)} you mean you want to go on a date with me?"`);
  scene.text('"Yep a date. Come on Tanya I\'m sure that we\'ll be able to find something we\'d like. Shall we go?"');
  // TODO-QSP: dynamic text: Tanya's face lights up into a broad grin. "Yes I'd love to <<$pcs_nickname>>. Le...
  scene.text(`Tanya's face lights up into a broad grin. "Yes I'd love to ${((s as any).pcs_nickname ?? 0)}. Let me pop my shoes on and grab my coat and we'll go."`);
  scene.actions([
    { label: 'Arrive at the cinema and start watching the film', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 50;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_cinema1.jpg');
    scene.text('You both soon arrive at the cinema located in the Galeria mall and select a film, grab some popcorn and a drink and head in to the theatre to start watching the film.');
    scene.text('You take a look around and the theatre is pretty empty and no-one sits near the pair of you.');
    scene.text('The film soon starts and you both begin watching it occasionally dipping into the popcorn.');
    scene.actions([
      { label: 'Kissing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_cinema2.jpg');
    scene.text('About half way through the film Tanya\'s you both go to dip into the popcorn at the same time and touch hands.');
    scene.text('This causes you to look over at Tanya with a broad grin on your face.');
    scene.text('As you look at her you notice her looking at you mischievous grin plastered on her face and holding a piece of popcorn between her teeth.');
    scene.text('Immediately she sees you turning towards her she places her hand behind your head drawing your face closer to hers and kisses you with a long passionate kiss as you slip her dress down exposing her small delicate breasts.');
    qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_cinema3.jpg');
    scene.text('You take a quick look around and notice that there are only a couple at the other side of the cinema and they\'re wrapped up in each other and an old guy who looks sound asleep so you are happy to go along with Tanya\'s seduction.');
    scene.text('It doesn\'t take long before you\'re both down to your panties and it\'n not long before you start tugging at Tanya\'s to remove them.');
    scene.text('She slides down in the chair and raises her legs making it easier for you to complete undressing her.');
    scene.actions([
      { label: 'Lick and tongue fuck Tanya', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_cinema4.jpg');
    scene.text('Having undressed her you start softly kissing her breasts and slowly work your way down her body teasing her as her breathing gets deeper and more erratic as her excitement builds.');
    scene.text('After a few soft kisses at the tops of her legs teasing her further her hand appears in front of your face and she slowly opens the folds to her clit.');
    scene.text('Feeling her orgasm starting to build you feel that you\'ve teased her enough and start licking her slowly and occasionally sticking her tongue into her which makes her gasp.');
    scene.text('After taking her to the sdge a couple of times you decide you\'ve teased enough and slowly stick your tongue into her before withdrawing it slowly fucking her with it until she utters a final gasp and wraps her legs around your head as she cums.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    scene.actions([
      { label: 'Your turn', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_cinema5.jpg');
    scene.text('After finishing your face is covered in her cum as you slowly kiss your way up to her face.');
    scene.text('As your face reaches hers she let\'s out a small giggle. "Guess I\'m a bit of a squirter! Come here, best I clean you up a bit…"');
    scene.text('She proceeds to clean your face with numerous kisses before she flips over in the seat so her legs are actually draped over the back of the seat.');
    scene.text('You have your own needs and no longer care if the others see as you straddle her face.');
    scene.text('She immediately starts kissing and licking you while wrapping her arms around the tops of your legs and gently pulling your cheeks apart to give her full access to your pussy.');
    scene.text('Given your state of excitement and her constant licking as well as entering your pussy with her tongue and swirling it around inside you it doesn\'t take you long to cum.');
    scene.text('You barely manage to stay on your feet and not collapse on top of her.');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Return to Tanya\'s after the film finishes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/door_01.jpg');
    scene.text('Once you\'ve both recovered you get dressed and sit to watch the end of the film as if nothing happened.');
    scene.text('You have a quick look around and the others aren\'t paying any attention to the pair of you.');
    scene.text('"It\'s all good Tanya, the others haven\'t noticed" You tell her.');
    scene.text('Tanya giggles. "Probably a good thing that the sound on the film is quite loud." You giggle along with her.');
    scene.text('Once the film has finished you both make sure that your clothing looks as it did when you arrived before leaving and heading back to Tanya\'s.');
    scene.text('On the way back you look at Tanya and say "well Tanya that was a very enjoyable date for me, hopefully for you too?"');
    // TODO-QSP: dynamic text: She gives you a warm smile as she responds with a sexy grin. "Yes of course <<$p...
    scene.text(`She gives you a warm smile as she responds with a sexy grin. "Yes of course ${((s as any).pcs_nickname ?? 0)}. The film wasn't great, what I can saw of it but…"`);
    scene.text('You nod your agreement just as you arrive back at her\'s.');
  }, goto: ['nichTanya', 'date_end'] },
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

function enterDatePool(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A218');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/tanya/door_01.jpg');
  scene.text('You greet her. "Hi Tanya, I\'ve been thinking and would like to go out with you for a few hours so how do you fancy going somewhere with me; you can choose if you want?"');
  // TODO-QSP: dynamic text: Tanya looks at you a bit unsure. "Oh <<$pcs_nickname>> you mean you want to go o...
  scene.text(`Tanya looks at you a bit unsure. "Oh ${((s as any).pcs_nickname ?? 0)} you mean you want to go on a date with me?"`);
  scene.text('"Yep a date. Come on Tanya, why have you gone off me?"');
  // TODO-QSP: dynamic text: Oh no <<$pcs_nickname>> it's absolutely not that! I…"
  scene.text(`Oh no ${((s as any).pcs_nickname ?? 0)} it's absolutely not that! I…"`);
  scene.text('You can\'t keep a strait face any longer and start to giggle.');
  scene.text('"What? What did I do? Why are you laughing, I thought you were upset"');
  scene.text('"Oh Tanya, you\'re priceless as was your reaction; I was just pulling your leg!" You say smiling at her.');
  scene.text('Tanya\'s face lights up into a broad grin. "Oh!… Oh!" She laughs along with you. "Okay well yes I\'d love to. Actually I have a key to a family friend\'s place and they\'ve got a massive place with a heated outdoor pool and a small pitch and put, shall we take advantage of it?. Don\'t worry about a bikini they own a sports shop and have loads of them at home which we can use." You nod in agreement. Right well let me pop my shoes on and grab my coat and we\'ll go."');
  scene.actions([
    { label: 'Arrive at the friend\'s place and try pitch and putt', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_friend1.jpg');
    // TODO-QSP: dynamic text: Tanya opens the door and you both head out to the massive garden. "Follow me <<$...
    scene.text(`Tanya opens the door and you both head out to the massive garden. "Follow me ${((s as any).pcs_nickname ?? 0)}, let's go out the back and have a go at the pitch and putt."`);
    scene.text('You nod in agreement and follow her. She wasn\'t kidding when she said the place was massive!');
    scene.text('She grabs a couple of clubs and some balls on the way and you start playing.');
    scene.text('It soon becomes clear that you are both absolutely rubbish at it and spend 20 minutes laughing at each other\'s terrible shots.');
    scene.text('At one point she even drops her golf club when trying to take a shot. As you are slightly better than her you go over and help her to hold the club.');
    scene.text('You move in behind her and guide her hands into a more comfortable position before you continue.');
    scene.actions([
      { label: 'Get changed and take a dip in the pool', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_friend2.jpg');
    scene.text('After 20 minutes you give up with the pitch and putt as you spend more time laughing at each other\'s poor shots and start to get concerned that you may even damage the green of one of the clubs.');
    scene.text('Tanya turns to you. "Okay, what do you say we give up with this; let\'s get changed and take a dip in their pool. I\'l make us a drink first as this was thirsty work."');
    scene.text('When you don\'t object she makes her way inside with you following chatting about anything that comes to mind along the way. The clubs are put away and she heads to the kitchen.');
    scene.text('She pours a couple of glasses of orange juice and with a wicked grin heads to their liquor cabinet and adds a splash of Vodka to each glass.');
    // TODO-QSP: dynamic text: You take your drink and follow her back to the garden. Along the way she goes to...
    scene.text(`You take your drink and follow her back to the garden. Along the way she goes to a large cupboard and rummages through it. "Here you go ${((s as any).pcs_nickname ?? 0)}, this one should fit you." She grabs another for herself and a large towel before heading out to the pool.`);
    scene.text('She sets the towel by the pool and you both get changed in the large private garden while sipping away at your drinks.');
    scene.actions([
      { label: 'Pose', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_friend3.jpg');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>> I want a picture to remember this date."
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)} I want a picture to remember this date."`);
    scene.text('She grabs her phone as you strike a pose.');
    scene.text('She clicks away for a few minutes as you strike different poses.');
    scene.text('"Okay Tanya your turn."');
    scene.text('"Yep, I need a top up first though. Give me your glass." You empty the remaining content and hand her the empty glass.');
    scene.actions([
      { label: 'Tanya\'s pose', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_friend4.jpg');
    scene.text('When Tanya returns she hands you your glass, suitably refreshed. "Cheers."');
    scene.text('"Yep cheers Tanya." You clink glasses together and take a sip. "Fuck Tanya, how much Vodka did you put in this?"');
    scene.text('"I dunno I just did a splash. Don\'t worry about it." You shrug and take another sip.');
    scene.text('You go and grab your phone as she starts posing for you.');
    scene.text('After another 10 minutes you have some images of her.');
    scene.text('You both sit down and look through each other\'s images and delete the ones you don\'t like much while chatting away and continuing to sip away at your drinks.');
    scene.text('Once you\'ve selected the best ones you send the ones you took to her and and she sends you the ones she has.');
    scene.actions([
      { label: 'Stop with the photos', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_friend5.jpg');
    scene.text('Tanya smiles at you. "That was fun. Right, let\'s get into the pool."');
    scene.text('You get up and Tanya tries to do so but grabs onto your leg to stop herself falling. "Bloody shoes!"');
    scene.text('You laugh. "Yeah nothing to do with the extra large measure of Vodka you just poured and finished."');
    scene.text('"Nope" she says trying to hide a hic-up.');
    scene.actions([
      { label: 'Naked in the pool', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_friend6.jpg');
    scene.text('You both get in the pool and splash about and just have fun for a few minutes.');
    scene.text('"Let\'s get naked!" Tanya shouts whipping off her bikini top and throwing it at you. It doesn\'t reach but falls in the pool.');
    scene.text('You take your eyes off her and start to go to retrieve her top when her bottoms hit you in the face. "Come on, what are you scared of. We\'re not overlooked and I won\'t bite… Much!"');
    scene.text('You decide to join her and a minute later you are both tipsy and completely naked in the pool.');
    // TODO-QSP: dynamic text: Tanya comes over to you with a wicked grin and pushes you against the side of th...
    scene.text(`Tanya comes over to you with a wicked grin and pushes you against the side of the pool. "You're my prisoner now ${((s as any).pcs_nickname ?? 0)}! You can't escape!"`);
    scene.text('With that she comes close to you and slowly brings her face up to yours and pulls you in for a long passionate kiss as your hands slip down and cradles her bum.');
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
    scene.actions([
      { label: 'Tanya licks you', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_friend7.jpg');
    scene.text('You break the kiss and go to get out of the pool as the towel would be more comfortable.');
    scene.text('However, Tanya pulls you back and grabs hold of your leg pulling you back towards her.');
    scene.text('She immediately starts licking you.');
    scene.text('She slowly moves to your most private entrance and starts licking around your ass; rimming you and flicking her tongue in an out slowly.');
    scene.text('All the while her left hand is rubbing at your clit. Slowly… Faster… Slower…');
    qspCall(s, 'arousal', 'rimming', 5, 'lesbian');
    qspCall(s, 'arousal', 'clit_finger', (-5), 'lesbian');
    scene.actions([
      { label: 'Trying to get out of the pool', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_friend8.jpg');
    scene.text('"Fuck Tanya, I\'m getting close. Can we go to the blanket and carry on?" You start to climb the stairs out of the pool.');
    scene.text('However, Tanya is having none of it. "Nope I told you that you\'re my prisoner!"');
    scene.text('With that she crawls up the steps, grabs you by the thigh and immediately starts licking you out.');
    scene.text('You are already close so you give in and and let her get to work.');
    scene.text('Your right hand moves to your right tit and you start massaging it furiously as the pressure builds.');
    scene.text('Tanya is very skilled and she brings you to the edge then backs off slightly.');
    scene.text('After a few times you can\'t take it any more and your left hand holds her head in place. A few seconds later a massive orgasm overtakes you and you shake violently.');
    scene.text('Your juices cover her face.');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'no_orgasm_msg');
    scene.actions([
      { label: 'Tanya\'s turn', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_friend9.jpg');
    scene.text('Tanya crawls onto the towel as you kneel on the steps to the pool and slowly spread her legs.');
    scene.text('Almost immediately she raises her right leg and holds it up with her hand to allow you easy access.');
    scene.text('You slowly kiss your way up her thigh and start kissing and licking her pussy.');
    scene.text('You run your tongue slowly back and forth building her excitement.');
    scene.text('She soon starts to moan and her left hand starts massaging her breast as her excitement builds.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    scene.actions([
      { label: 'Tanya cums', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_friend10.jpg');
    scene.text('She\'s soon dribbling onto your tongue so you cover her pussy with your mouth.');
    scene.text('You start tongue fucking her enjoying her taste.');
    scene.text('It flicks in and out of her pussy with varying speeds as she starts moaning.');
    scene.text('Sometimes only a little way in and others as far as you can reach.');
    scene.text('Her moans get louder as her orgasm nears.');
    // TODO-QSP: dynamic text: "Fuck <<$pcs_nickname>>! Don't stop! Shit! Cumming! Aaaarrrgh!"
    scene.text(`"Fuck ${((s as any).pcs_nickname ?? 0)}! Don't stop! Shit! Cumming! Aaaarrrgh!"`);
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Return to Tanya\'s', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/door_01.jpg');
    // TODO-QSP: dynamic text: "Bloody hell <<$pcs_nickname>> you'd be wasted on guys" she says grinning at you...
    scene.text(`"Bloody hell ${((s as any).pcs_nickname ?? 0)} you'd be wasted on guys" she says grinning at you.`);
    scene.text('"Glad I pleased you. So I take it as your prisoner I get time off for good behaviour?"');
    scene.text('"Nope, I might have to extend your sentence to cover a few more dates!"');
    scene.text('She continues, "Anyway I guess we should tidy up and head back."');
    scene.text('You both get dressed and put the stuff away. Tanya fetches the bikinis out of the pool and pops them in her bag to get them washed.');
    scene.text('You walk back to her\'s holding hands.');
  }, goto: ['nichTanya', 'date_end'] },
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

function enterDateShopping(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/tanya/door_01.jpg');
  scene.text('You greet her. "Hi Tanya, I\'ve been thinking and would like to go out with you for a couple of hours so how do you fancy going somewhere with me; how about you pick?"');
  // TODO-QSP: dynamic text: Tanya looks and smiles. "Oh <<$pcs_nickname>> that'd be great. Actually I have t...
  scene.text(`Tanya looks and smiles. "Oh ${((s as any).pcs_nickname ?? 0)} that'd be great. Actually I have to go and get some clothes so maybe you can help me choose?"`);
  scene.text('"Sounds like a plan, come on then grab your coat and purse and we\'ll head down to the mall."');
  // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>> I'll only be a second"
  scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)} I'll only be a second"`);
  scene.text('True to her word she returned ready to go and you link arms and head down to the mall and start browsing.');
  scene.actions([
    { label: 'Picking out a dress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_shop1.jpg');
    scene.text('She tells you she needs a nice party dress so after a quick loon in a couple of stores you both end in in a boutique store.');
    scene.text('After looking through various options and trying some on she seems to settle on a pretty white dress and shows it to you.');
    // TODO-QSP: dynamic text: "So <<$pcs_nickname>>, shall I try it on and show you?"
    scene.text(`"So ${((s as any).pcs_nickname ?? 0)}, shall I try it on and show you?"`);
    scene.text('You have a look over the dress and reply. "Yep that\'s a nice dress Tanya, let\'s see what it looks like on."');
    scene.text('With that you both head off to the changing rooms.');
    scene.actions([
      { label: 'Trying the dress on', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_shop2.jpg');
    scene.text('You slowly make your way to the changing booths and consider another couple of other options on the way but she settles on the white dress.');
    scene.text('On arriving at the booth she tells you to come in with her.');
    scene.text('She slowly removes her clothes and puts the dress on.');
    scene.text('"So, what do you think?"');
    scene.text('"You look absolutely stunning in it Tanya, yes good choice."');
    scene.actions([
      { label: 'Teasing', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_shop3.jpg');
    // TODO-QSP: dynamic text: "Okay, thanks <<$pcs_nickname>>, I think I'll get this one then."
    scene.text(`"Okay, thanks ${((s as any).pcs_nickname ?? 0)}, I think I'll get this one then."`);
    scene.text('Tanya starts slowly peeling off the dress and tweaks her nipples as she does so and smiles seductively at you, teasing you.');
    scene.text('However, before you can react the dress is removed and she starts getting dressed in her normal clothes.');
    qspCall(s, 'arousal', 'erotic_nudity', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Paying and on to the next shop', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/city/tanya/dates/tanya_shop4.jpg');
    scene.text('Once she\'s dressed she takes the dress to the checkout and pays for it.');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>> I also need some underwear to go with a black dress as I...
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)} I also need some underwear to go with a black dress as I've got to go to a function with my parents."`);
    scene.text('You both head to the high end underwear shop, Lusso Itimo and start browsing.');
    scene.actions([
      { label: 'Choosing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images\\characters\\city\\tanya\\date\\shopping3a.jpg');
    scene.text('After a few minutes you\'ve both got some options and she heads off to try them on along with you.');
    scene.text('A few don\'t fit quite right and some others are also rejected for various reasons before she finally settles on the set she\'d like.');
    scene.text('You both agree and she goes to pay.');
    // TODO-QSP: dynamic text: "Well thanks for your help <<$pcs_nickname>>, I think that's just about the quic...
    scene.text(`"Well thanks for your help ${((s as any).pcs_nickname ?? 0)}, I think that's just about the quickest productive shopping trip I've had since school days when my Mum took me. She doesn't like shopping much and is always in a rush."`);
    scene.text('"Well Tanya, so long as you\'re happy with what you\'ve bought then mission accomplished." You respond with a smile.');
    // TODO-QSP: dynamic text: "So <<$pcs_nickname>> as we've still got a bit of time what about we head off to...
    scene.text(`"So ${((s as any).pcs_nickname ?? 0)} as we've still got a bit of time what about we head off to the diner and grab a bite to eat before heading back?"`);
    scene.text('"That\'d be a nice way to finish off and we can chat for a while too."');
    scene.actions([
      { label: 'Go to the diner', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images\\locations\\city\\citycenter\\diner.jpg');
    scene.text('With that you both head off to the diner.');
    // TODO-QSP: dynamic text: "So <<$pcs_nickname>>, what do you fancy… Other than me of course!?"
    scene.text(`"So ${((s as any).pcs_nickname ?? 0)}, what do you fancy… Other than me of course!?"`);
    scene.text('You grin at her. "Well if I start eating you out here I think we might get arrested. I think I\'ll have a burger and a Kvass please."');
    scene.text('"Sure, grab a seat and I\'ll go and order, my treat for having helped me out with the shopping."');
    scene.text('You spend about half an hour enjoying your meals and chatting about whatever comes to mind and just enjoying each other\'s company.');
    scene.actions([
      { label: 'Return to Tanya\'s', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/door_01.jpg');
    scene.text('"Thank you for helping me out today as I know if I\'d gone by myself it would have taken me absolutely ages to choose something and that\'s if I managed to do so at all. A second opinion is a great help".');
    scene.text('"No problem Tanya and thanks for the meal. It\'s been fun, maybe let me know if you need my expertise again." You tell her grinning.');
    scene.text('"Ha ha… Teah, it\'s been fun."');
  }, goto: ['nichTanya', 'date_end'] },
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

function enterDateBar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/tanya/door_01.jpg');
  scene.text('You greet her. "Hi Tanya, How are you, all good I hope?" Tanya smiles and nods as you continue. "So how about we go out for a couple of drinks and maybe a game of pool or two?');
  // TODO-QSP: dynamic text: Tanya looks and grins. "Oh <<$pcs_nickname>> that'd be great. I'd like that but ...
  scene.text(`Tanya looks and grins. "Oh ${((s as any).pcs_nickname ?? 0)} that'd be great. I'd like that but I warn you I'm a bit of a lightweight so try not to let me have too much or you might need to carry me home." She says followed by a small giggle.`);
  scene.text('"Sounds like a plan, come on then grab your coat and purse and we\'ll go."');
  // TODO-QSP: dynamic text: Okay <<$pcs_nickname>> I'll only be a second"
  scene.text(`Okay ${((s as any).pcs_nickname ?? 0)} I'll only be a second"`);
  scene.text('True to her word she returned ready to go and you link arms and head down to the metro and on to Bar Rabotnik.');
  scene.actions([
    { label: 'Enter the bar', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/bar/bar.jpg');
    scene.text('Arriving at the bar you both head in and order a beer each.');
    scene.text('After spending a few minutes at the bar sipping your drinks and chatting you spot a free pool table.');
    scene.text('"Hey Tanya, how about we have a couple of games of pool? Loser buys the next round?"');
    scene.text('Tanya agrees and you both grab your drinks and head over to the vacant table by a large window overlooking the street.');
    scene.actions([
      { label: 'Start playing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_bar1.jpg');
    scene.text('You set up and start playing.');
    scene.text('After 20 minutes you manage to win the first game.');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>> you set up and I'll go and get the next round in. Back i...
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)} you set up and I'll go and get the next round in. Back in a mo."`);
    scene.actions([
      { label: 'Wait for Tanya', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_bar2.jpg');
    scene.text('Tanya soon returns with another beer.');
    scene.text('In the meantime you\'ve set up and the second game starts.');
    scene.text('At some point during the game when Tanya bends down to take her shot you distract her by tapping her ass with your cue stick.');
    scene.text('"Hey! That\'s cheating!"');
    scene.text('"Nope, I can\'t remember anything about that in the rules. Okay, I\'ll stop for now and retake your shot."');
    scene.text('You both have a laugh with innuendos flying back and forth for a while.');
    scene.text('Tanya manages to win this game.');
    scene.text('"Okay my turn to get the refills Tanya. If you set-up we\'ll call this the deciding game as I don\'t want you to get too tipsy."');
    scene.actions([
      { label: 'Get the drinks', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_bar3.jpg');
    scene.text('You return with a couple of beers and the third game gets under way.');
    scene.text('In the meantime you\'ve set up and the second game starts.');
    scene.text('Once again you can\'t resist teasing Tanya.');
    scene.text('This time she doesn\'t protest and for a couple of seconds rides the cue stick giggling at your antics.');
    scene.text('The game soon degenerates into silliness and after a while you give up with the game and you realize that you need to go to the toilet, probably due to the three beers you\'ve had.');
    qspCall(s, 'arousal', 'foreplay_give', 5);
    scene.actions([
      { label: 'Go to the toilet', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_bar4.jpg');
    scene.text('"Okay Tanya I need the loo. See you in a few."');
    scene.text('Unfortunately there\'s a queue so you have to wait your turn and it takes you 10 minutes before you finish and return to the bar.');
    scene.text('On returning to the bar the barman grabs you immediately and asks, "Are you with her?" He points to a by now quite drunk Tanya who\'s half undressed and as you watch collapses onto a bar stool.');
    scene.text('"Yeah, I\'m sorry about that. Don\'t worry I\'ll get her dressed and leave. I don\'t want any trouble and thanks for the warning."');
    scene.actions([
      { label: 'With that you head over to Tanya', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/dates/tanya_bar5.jpg');
    scene.text('When you get to Tanya you waste no time in redressing her.');
    scene.text('"What the hell Tanya? You were okay when I went to the loo?"');
    scene.text('At this point the barman appears and speaks to you. "Thanks and I hope you both get home safely. Don\'t be too hard on her those guys bought her a drink." He says pointing to a couple of guys leaving the bar. "I think they may have spiked it; anyway I\'ve asked them to leave. I\'ll just make sure they\'re gone as I don\'t want them causing any trouble for you two." You reply thanking him and concentrate on Tanya as he checks the exit for you.');
    scene.text('"Do you think you\'ll be okay?"');
    scene.text('Tanya responds by taking hold of your face and bringing it to hers for a long passionate kiss, which you briefly return.');
    scene.text('You sigh. "Yep, very nice but not now girl, we were close to being kicked out as it is. Come on Tanya, let\'s get you home."');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Return to Tanya\'s', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/door_01.jpg');
    scene.text('There\'s no sign of the two guys the bartender mentioned as you leave.');
    scene.text('Once in the fresh air Tanya seems to sober up a bit and you take the metro back to hers.');
    scene.text('As you approach her apartment she turns to you. "Thank you for helping me out today, I know I\'m a bit of a lightweight but not on three beers and a short. Anyway sorry for embarrassing you."');
    scene.text('"It\'s okay Tanya don\'t worry about it and if what the barman says is true it\'s not really your fault anyway."');
    scene.text('"Well maybe it sort of is as I shouldn\'t have accepted the drink from them. Lesson learnt I guess."');
  }, goto: ['nichTanya', 'date_end'] },
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

function enterDateEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images/characters/city/tanya/dates/tanya_kiss1.jpg');
  } else {
    scene.img('images/characters/city/tanya/dates/tanya_kiss2.jpg');
  }
  // TODO-QSP: dynamic text: On arriving back home Tanya opens the door and smiles warmly at you. "Well <<$pc...
  scene.text(`On arriving back home Tanya opens the door and smiles warmly at you. "Well ${((s as any).pcs_nickname ?? 0)} I'm very happy you showed up today. That was a lovely date. Maybe we can do more in the future?"`);
  if (((s as any).nichTanya ?? 0)?.['FuckCounter'] < (Math.floor(Math.random() * 6) + 7)  ||  ((s as any).nichTanya ?? 0)?.['Date_stay'] === 1) {
    scene.actions([
      { label: 'Say goodbye to Tanya', handler: (st: GameState) => {
    scene.text('You, in turn smile at her and reply. "Yes it was Tanya, I had a really great time. However, regrettably I need to get going so see you soon."');
    scene.text('With that you lean towards each other and share a long hug and passionate kiss before you leave. "See you soon Tanya"');
  }, goto: ['city_center', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Say goodbye to Tanya', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You, in turn smile at her and reply. "Yes it was Tanya, I had a really great time. However, regrettably I need to get going so see you soon."');
    scene.text('With that you lean towards each other and share a long hug and passionate kiss before you leave. "See you soon Tanya"');
    // TODO-QSP: dynamic text: As you say that Tanya grabs your arm to stop you leaving. "You know <<$pcs_nickn...
    scene.text(`As you say that Tanya grabs your arm to stop you leaving. "You know ${((s as any).pcs_nickname ?? 0)} I don't know if I'm falling for you but I've so enjoyed our dates together."`);
    scene.text('Her revelation has come as a bit of a surprise and you are unsure how to respond you simply smile at her for a moment.');
    scene.text('Tanya looks at you and continues. "Well say something… Cat got your tongue? Don\'t worry about it, we can chat next time."');
    scene.text('Finally finding your voice you reply. "No, it\'s not that, you just caught me a bit by surprise is all. Yes Tanya I\'ve really enjoyed spending time with you too, but I can\'t say where our relationship will lead, it\'s still very early for me."');
    // TODO-QSP: dynamic text: "I get that <<$pcs_nickname>>, it's pretty much the same for me. I just thought ...
    scene.text(`"I get that ${((s as any).pcs_nickname ?? 0)}, it's pretty much the same for me. I just thought that you might want to stay over sometimes going forward. It'd have to be a sneeky stay over though as it's probably best my parents don't know, at least for now especially my Mum."`);
    scene.actions([
      { label: 'Accept', handler: (st: GameState) => {
    ((s as any).nichTanya ?? {})['Date_stay'] = 1;
    scene.img('images/characters/city/tanya/sex/cuddle1.jpg');
    scene.text('"Wow Tanya, I didn\'t expect that either. That\'s very kind of you and yes I\'d love to." You lean in and give her another kiss.');
    scene.text('As you break the kiss Tanya continues. "I can\'t today but maybe next time if you want."');
    scene.text('With a final wave you head off.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).nichTanya ?? 0)?.['Date_stay'] === 1  &&  ((s as any).hour ?? 0) > 20) {
    scene.actions([
      { label: 'Stay the night with Tanya', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A218');
    scene.img('images/characters/city/tanya/tanroom.jpg');
    scene.text('"So Tanya, you remember when you mentioned about my staying over?"');
    // TODO-QSP: dynamic text: "Yes of course, I'm so happy you decided to do so." Tanya says breaking into a b...
    scene.text(`"Yes of course, I'm so happy you decided to do so." Tanya says breaking into a big grin, grabs you by the hand and leads you to her bedroom. "Here we are ${((s as any).pcs_nickname ?? 0)}."`);
    scene.actions([
      { label: 'Tanya gives you a massage', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/dates/tanya_stayover1.jpg');
    scene.text('After spending a while chatting on her bed and looking at a couple of books she has she stops talking, takes the book from you and tells you to lie on the bed on your front.');
    scene.text('"I want to give you a massage." She says with a glint in her eye.');
    scene.text('You smile back and get onto your front on her bed.');
    scene.text('She immediately starts a soft and sensual massage rubbing your back and kneading your mussels in all the right placed.');
    scene.text('"Umm, that\'s nice" you mumble enjoying her touch.');
    qspCall(s, 'arousal', 'massage', 5);
    scene.actions([
      { label: 'Get undressed', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/dates/tanya_stayover2.jpg');
    scene.text('After a while enjoying her touch she leans over you and whispers. "Let\'s get rid of these clothes."');
    scene.text('"You just want to get your hands on my body."');
    scene.text('She smirks as she replies. "Yes and what\'s wrong with that?"');
    scene.text('You both have a little giggle as you sit up and remove your top and bra.');
    qspCall(s, 'arousal', 'massage', 5);
    scene.actions([
      { label: 'Tanya joins you', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/dates/tanya_stayover3.jpg');
    scene.text('Once you are naked you lie back on the bed and look at her over your shoulder as she starts to undress.');
    scene.text('It\'s not long before her clothes are off and she starts removing her bra.');
    scene.actions([
      { label: 'Tanya kisses your neck', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/dates/tanya_stayover4.jpg');
    scene.text('Once you are both undressed she lies on your back and nuzzles into your neck.');
    scene.text('She moves your hair away and starts kissing your neck with small butterfly kisses.');
    qspCall(s, 'arousal', 'foreplay', 5);
    scene.actions([
      { label: 'Kissing', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/dates/tanya_stayover5.jpg');
    scene.text('After enjoying her touch for a while you indicate you want to move and she levers herself up.');
    scene.text('This allows you to lie on your back facing her.');
    scene.text('You see her furtively lick her lips.');
    scene.text('Once lying on your back you raise your head up and give her a long passionate kiss on her wet lips.');
    qspCall(s, 'arousal', 'kiss', 5);
    scene.actions([
      { label: 'Tanya licks you', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/dates/tanya_stayover6.jpg');
    scene.text('Breaking the kiss Tanya spreads your legs and slowly rubs your pussy.');
    scene.text('"Someone\'s already wet" she says with a grin.');
    scene.text('"Umm yeah!"');
    scene.text('"Well best I lick it up before you drip onto the sheets!"');
    scene.text('You can\'t take her teasing any more so you bring your hand to her head and gently push her towards your pussy.');
    scene.text('She immediately starts licking you with her tonuge passing slowlt back and forth over your folds and occasionally teasing further by flicking it in and out or your soaking pussy.');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    scene.actions([
      { label: 'Return the favor', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/dates/tanya_stayover7.jpg');
    scene.text('After bring you to the edge she backs off and crawls forward presenting her dripping pussy to you.');
    scene.text('She drips onto your face as you bring your mouth to her pussy licking her and drinking in her juices.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    scene.actions([
      { label: 'Tribbing', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/dates/tanya_stayover8.jpg');
    scene.text('It doesn\'t take long before you are both on edge so you both lie back and bring your pussys together.');
    scene.text('Rubbing together slowly.');
    scene.text('Speeding up.');
    scene.text('Slowing down.');
    scene.text('Edging each other until Tanya lets out a long groan and starts bucking against you.');
    scene.text('This also takes you over the edge and you cum… Hard. You have to bite your lip not to scream out.');
    scene.text('You both lie there if your afterglow and snuggle together slowly drifting off to sleep in each other\'s arms.');
    qspCall(s, 'arousal', 'trib', 15, 'lesbian', 'no_orgasm_msg');
    scene.actions([
      { label: 'sleep', goto: ['pre_sleep_events', 'start'] },
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
  }
  scene.actions([
    { label: 'Have sex with Tanya', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
    scene.text('"Hey Tanya. I was wondering if you are in the mood to have some fun."');
    scene.text('"Of course! Just give me a minute."');
    scene.actions([
      { label: 'Wait for her', goto: ['nichTanya', 'sexL'] },
    ]);
  } },
    { label: 'Chat with Tanya', goto: ['nichTanya', 'chat'] },
  ]);
  scene.build();
}

function enterDateNextMorning(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/dates/tanya_stayover9.jpg');
  scene.text('You slowly wake up and look over at Tanya.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('She\'s still sound asleep next to you so you get up quietly and get dressed.');
    qspCall(s, 'outfit', 'restore', 'bed');
  } else {
    scene.text('Tanya is still asleep.');
  }
  scene.text('You decide not to wake her and leave a note thanking her for the sleep over and telling her you\'ll visit again soon.');
  scene.text('Giving her a final gentle kiss you leave her apartment and head back into the city to get on with your day.');
  scene.actions([
    { label: 'Return to the city', goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A218');
  scene.img('images/characters/city/tanya/idle/shower.jpg');
  scene.text('Tanya is currently taking a shower. She hasn\'t noticed you so far.');
  if (((s as any).nichTanya ?? 0)?.['Relationship'] > 0  &&  ((s as any).nichTanya ?? 0)?.['Relationship'] < 4) {
    scene.actions([
      { label: 'Join her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
    scene.img('images/characters/city/tanya/gym/shower_mol0.jpg');
    scene.text('You silently put your clothes off. Then you join Tanya in the shower and gently place one hand on her right breast. She turns to face you.');
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'arousal', 'foreplay', 5, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>."
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('She kisses you and start stroking your hair. Then she stops abruptly.');
    scene.text('"We shouldn\'t be doing this here. Lets meet in my room later. We have more privacy there."');
    scene.text('With that she softly pushes you out.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
  }, goto: ['nichBathMaster', 'return'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Molest her', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/gym/shower_mol0.jpg');
    scene.text('You silently put your clothes off. Then you join Tanya in the shower and gently place one hand on her right breast. She turns to face you.');
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'arousal', 'foreplay', 5, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).nichTanya ?? 0)?.['Relationship'] === 4) {
      scene.text('Tanya pushes you off.');
      // TODO-QSP: dynamic text: "What the hell are you doing, <<$pcs_nickname>>?! First you break up with me and...
      scene.text(`"What the hell are you doing, ${((s as any).pcs_nickname ?? 0)}?! First you break up with me and then you want to fuck me anyways? Get lost!"`);
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
  }, goto: ['nichBathMaster', 'return'] },
      ]);
    } else {
      if (((s as any).nichTanya ?? 0)?.['Relationship'] >= 5) {
        scene.text('Tanya pushes you off.');
        // TODO-QSP: dynamic text: "What the hell are you doing, <<$pcs_nickname>>?! I told you it's over! Get lost...
        scene.text(`"What the hell are you doing, ${((s as any).pcs_nickname ?? 0)}?! I told you it's over! Get lost!"`);
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
  }, goto: ['nichBathMaster', 'return'] },
        ]);
      } else {
        if (((s as any).pcs_apprnc ?? 0) < 80) {
          qspCall(s, 'npc_relationship', 'modify', 'A218', 'dislike');
          scene.text('Tanya pushes you off.');
          // TODO-QSP: dynamic text: "What the hell are you doing, <<$pcs_nickname>>?! Get lost!"
          scene.text(`"What the hell are you doing, ${((s as any).pcs_nickname ?? 0)}?! Get lost!"`);
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
  }, goto: ['nichBathMaster', 'return'] },
          ]);
        } else {
          if (((s as any).pcs_apprnc ?? 0) >= 80) {
            scene.text('Tanya quickly turns around. She looks a little bit puzzled as she realizes that it was you who grabbed her. Did she expect somebody else?.');
            scene.actions([
              { label: 'Take advantage of the confusion', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
    scene.img('images/characters/city/tanya/gym/shower_mol1.jpg');
    scene.text('While she is trying to understand what is happening you begin fondling her sex with your fingers, and then her hand strokes your ass.');
    qspCall(s, 'arousal', 'foreplay', 10, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', goto: ['nichTanya', 'bathroomMolestSuccess'] },
    ]);
  } },
              { label: 'Wait for her reaction', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).pcs_apprnc ?? 0) < 120) {
      qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
      scene.text('Tanya smiles at you, but removes your hand and leaves, blowing you a kiss.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
  }, goto: ['nichBathMaster', 'return'] },
      ]);
    } else {
      if (((s as any).pcs_apprnc ?? 0) >= 120) {
        qspCall(s, 'npc_relationship', 'modify', 'A218', 'love');
        scene.img('images/characters/city/tanya/gym/shower_mol2.jpg');
        scene.text('Tanya presses up to you even stronger and kisses your lips.');
        qspCall(s, 'arousal', 'kiss', 5, 'dom', 'lesbian');
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Further', goto: ['nichTanya', 'bathroomMolestSuccess'] },
        ]);
      }
    }
  } },
            ]);
          }
        }
      }
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['nichBathMaster', 'return'] },
  ]);
  scene.build();
}

function enterBathroomMolestSuccess(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/gym/shower1.jpg');
  scene.text('Just as the both of you are about to get more intimate you hear Tanyas name being called from outside the bathroom. She is clearly afraid of being spotted in the shower with you and quickly gets out of it and starts dressing.');
  // TODO-QSP: dynamic text: "Sorry, <<$pcs_nickname>>. That what fun but I can't risk being seen like this. ...
  scene.text(`"Sorry, ${((s as any).pcs_nickname ?? 0)}. That what fun but I can't risk being seen like this. Just talk to me in my room later. We have more privacy there."`);
  scene.text('With that she pushes you outside the bathroom once you are dressed.');
  ((s as any).nichTanya ?? {})['Relationship'] = 1;
  qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
  ((s as any).nichTanya ?? {})['FuckLast'] = ((s as any).daystart ?? 0);
  qspCall(s, 'outfit', 'wear_last_worn');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Back', goto: ['nichApartment', ''] },
  ]);
  scene.build();
}

function enterDate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichTanya ?? 0)?.['Date'] === 1) {
    if ((!((s as any).nichDateState ?? 0))) {
      scene.img('images/locations/city/citycenter/mall/cinema/cinema.jpg');
      scene.text('The two of you head over to the cinema at the mall.');
      scene.text('Tanya pays for the tickets and you settle down in your seats. You are alone in the last row.');
      scene.actions([
        { label: 'Watch the movie', handler: (st: GameState) => {
    (s as any).nichDateState = 10;
  }, goto: ['nichTanya', 'date'] },
        { label: 'Kiss Tanya', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
    (s as any).nichDateState = 20;
  }, goto: ['nichTanya', 'date'] },
      ]);
    } else {
      if (((s as any).nichDateState ?? 0) === 10) {
        (s as any).minut = ((s as any).minut ?? 0) + 150;
        qspCall(s, 'city_cinema', 'movie');
        scene.text('After the movie is done Tanya smiles at you. "That was fun. But lets go home now."');
        scene.actions([
          { label: 'Return to Apartment', handler: (st: GameState) => {
    (s as any).nichDateState = 10000;
  }, goto: ['nichTanya', 'date'] },
        ]);
      } else {
        if (((s as any).nichDateState ?? 0) === 20) {
          qspCall(s, 'npcStat', 'A218');
          scene.img('images/locations/city/citycenter/mall/cinema/sex/kinoKissLesbian1.jpg');
          scene.text('The light goes dark and the movie starts. You lean over to Tanya and the two of you share a deep kiss.');
          scene.actions([
            { label: 'Go down on her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'cuni_give', (-90), 'lesbian');
    scene.img('images/characters/city/tanya/sexL/arimjob/arimjob1.jpg');
    scene.text('Making sure that nobody sees you slip down from your seat.');
    scene.text('Tanya looks a little bit surprised at first. Quickly realizing what you are up to she opens her legs for you.');
    scene.text('You slowly raise her shirt and push her panties aside. She is already a little wet from excitement.');
    scene.text('You decide to go slowly on her, softly kissing, licking and sucking her sex.');
    scene.text('Her breath quickens and her muscles get tense. She lets out a single moan has she cums, trying to keep quite so the other people in the cinema don\'t recognize what\'s going on.');
    scene.text('You get back on your feet and slip back on your seat. To your surprise you nearly missed all of the movie.');
    scene.text('After the movie is done Tanya smiles at you. "That was fun. But lets go home now."');
    qspCall(s, 'arousal', 'end');
    (s as any).minut = ((s as any).minut ?? 0) + 150;
    scene.actions([
      { label: 'Return to Apartment', handler: (st: GameState) => {
    (s as any).nichDateState = 10000;
  }, goto: ['nichTanya', 'date'] },
    ]);
  } },
            { label: 'Watch the movie', handler: (st: GameState) => {
    (s as any).nichDateState = 10;
  }, goto: ['nichTanya', 'date'] },
          ]);
        } else {
          qspCall(s, 'array', 'remove_element', 'nichTanya', 'Date');
          scene.actions([{ label: 'Continue', goto: ['nichBedroomTanja', ''] }]);
        }
      }
    }
  } else {
    if (((s as any).nichTanya ?? 0)?.['Date'] === 2) {
      if (((s as any).nichTanya ?? 0)?.['DateShopping'] === 0) {
        (s as any).minut = ((s as any).minut ?? 0) + 120;
        ((s as any).nichTanya ?? {})['DateShopping'] = (((s as any).nichTanya ?? {})['DateShopping'] ?? 0) + (1);
        scene.img('images/characters/city/tanya/date/shopping1.jpg');
        scene.text('The two of you go to a shop for young fashion. You take turns trying on clothes and posing for each other.');
        scene.text('You notice that the clothes Tanya puts on get skimpier every time. The last outfit she puts on only consists of high heels, a blue tanga and a skin tight white top.');
        scene.text('"What do you think? I think you would gorgeous in this."');
        scene.text('"Wait? Me?"');
        scene.text('Tanya laughs out. "Yes. I would really like you to wear it. And look, I even found a skirt that goes great with it. Please let me buy this for you."');
        qspCall(s, 'clothing_attributes', 'gm_dress', 148);
        if (((s as any).CloInhibit ?? 0) <= ((s as any).pcs_inhib ?? 0)) {
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'clothing', 'add_item', 'gm_dress', 148);
    qspCall(s, 'clothing', 'wear', 'gm_dress', 148);
    qspCall(s, 'stat', '');
    scene.text('"Okay. Thank you, Tanya."');
    scene.text('Tanya smiles at you as she changes back into her own clothes. Then she walks over to the cashier. After she paid for the outfit she returns to you so you can put it on now.');
    scene.text('You put it on. The two of you spend another hour in the mall before returning to the apartment.');
    scene.actions([
      { label: 'Return to the apartment', goto: ['nichBedroomTanja', ''] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Decline', handler: (st: GameState) => {
    scene.text('"Sorry Tanya, but that\'s really not my style."');
    scene.text('She looks a little bit disappointed.');
    scene.text('The two of you spend another hour in the mall before returning to the apartment.');
    scene.actions([
      { label: 'Return to the apartment', goto: ['nichBedroomTanja', ''] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).nichTanya ?? 0)?.['DateShopping'] === 1) {
          (s as any).minut = ((s as any).minut ?? 0) + 60;
          ((s as any).nichTanya ?? {})['DateShopping'] = (((s as any).nichTanya ?? {})['DateShopping'] ?? 0) + (1);
          scene.img('images/characters/city/tanya/date/shopping2.jpg');
          scene.text('The two of you visit various shops in the mall. One of the shops appears to be aimed at lumberjacks and truckers.');
          scene.text('You take a look a the shirts and wonder why you are here. Then you realize that Tanya went missing. After a quick search you figure out that she must be in one of the changing rooms.');
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, come in here."
          scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, come in here."`);
          scene.text('You step into the room from where Tanyas voice came. She is wearing nothing but her panties and a truckers cap.');
          scene.text('"Aha, there is my girl." she tries to speak with a deeper voice, obviously trying to impersonate a trucker. "Get your hot ass over here." She smacks you on your cheek. "Now let daddy finish changing." She laughs out loudly.');
          scene.text('Once she has put her clothes back on the two of you go back to the apartment.');
          scene.actions([
            { label: 'Return to the apartment', goto: ['nichBedroomTanja', ''] },
          ]);
        } else {
          if (((s as any).nichTanya ?? 0)?.['DateShopping'] === 2) {
            (s as any).minut = ((s as any).minut ?? 0) + 60;
            ((s as any).nichTanya ?? {})['DateShopping'] = (((s as any).nichTanya ?? {})['DateShopping'] ?? 0) + (1);
            scene.img('images/characters/city/tanya/date/shopping3a.jpg');
            scene.text('The two of you visit various shops in the mall. The last shop is an expensive boutique.');
            scene.text('Tanya goes straight to the lingerie department. She collects some items, then she takes you by the hand and leads you to a changing room.');
            scene.text('She strips down and puts the bra and the panties she took on.');
            if (((s as any).braworntype ?? 0) === 'lusso'  &&  ((s as any).brawornnumber ?? 0) === 19) {
              scene.text('"Hey, I think I took the same bra you are wearing right now. We really have very much in common." She smiles at you.');
              scene.text('After she is done trying out some other clothes she pays for the ones she wants to buy and the two ouf you head back home.');
              scene.actions([
                { label: 'Return to the apartment', goto: ['nichBedroomTanja', ''] },
              ]);
            } else {
              scene.text('She squeezes and pushes her breasts a little inside the breastforms.');
              scene.text('"I think I picked the wrong size."');
              scene.text('She turns around and looks at you.');
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/date/shopping3b.jpg');
    scene.text('"I think this bra could fit you. Try it out."');
    scene.actions([
      { label: 'Try it', handler: (st: GameState) => {
    scene.text('Once you put it on Tanya inspects the fit by pressing and pulling it at various spots.');
    scene.text('"How does it feel? I think it\'s a perfect fit. I would like to buy it for you. As a gift."');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    scene.text('"That would be great. Thank you, Tanya."');
    scene.text('Tanya beams at you as the both of you put your clothes back on.');
    scene.text('Tanya pays for the bra and also buys the matching panties for you.');
    scene.text('After spending another few minutes visiting another shop the two of you head back to the apartment.');
    qspCall(s, 'bras', 'add_item', 'lusso', 19);
    qspCall(s, 'panties', 'add_item', 'lusso', 31);
    scene.actions([
      { label: 'Return to the apartment', goto: ['nichBedroomTanja', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
              ]);
            }
          } else {
            scene.img('images/locations/city/citycenter/mall/torgcentr.jpg');
            scene.text('The two of you go to the mall.');
            scene.text('After spending two hours visiting various shops the two of you return to the apartment.');
            scene.actions([
              { label: 'Return to the apartment', goto: ['nichBedroomTanja', ''] },
            ]);
          }
        }
      }
    } else {
      if (((s as any).nichTanya ?? 0)?.['Date'] === 100) {
        if ((!((s as any).nichDateState ?? 0))) {
          (s as any).minut = ((s as any).minut ?? 0) + 45;
          scene.img('images/locations/city/redlight/erotomaniac/sexshop.jpg');
          scene.text('Tanya leads you to the metro. You ask yourself what she is up to, because she usually uses calls a cab if she wants to travel longer distances.');
          scene.text('After a few minutes you arrive at the industrial area of the town. From there Tanya leads you straight to the Red Light Destrict.');
          scene.text('"Tanya. Where are we going?"');
          scene.text('"Don\'t worry. There is a shop I wanted to show you. We can\'t go to the ones in the city center because we could run into somebody I know. Ah, there it is."');
          scene.text('She leads you into the local sex shop. It appears as if she has been here before.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/erotomaniac/sexshop.jpg');
    scene.text('You inspect the different types of sex toys presented here. Just as you\'re starting to wonder what Tanya wants here she points at a shelf which has strap-on of various sizes and forms on it.');
    scene.text('"There it is. I thought it would be fun to fuck you in a whole new way. And I think you should have a say in who your new \'lover\' will be."');
    scene.text('She takes one of the strap-ons in her hand. "This one is called Vlad. How do you like it? Wait, there is one that\'s called Igor. It\'s a little bigger. Do you think you could handle it? Or how about this one? \'Labaan\'. Sounds African. Look how big it is. It\'s nearly as long and thick as my arm." She laughs out. "Which one would you prefer?"');
    scene.actions([
      { label: 'Vlad (15 cm)', handler: (st: GameState) => {
    ((s as any).nichTanya ?? {})['Strapon'] = 15;
    scene.text('"I think I like Vlad best."');
    if (((s as any).pcs_vag ?? 0) >= 25) {
      scene.text('"Really? I thought you might prefer a bigger one. But okay, I will buy this one then."');
    } else {
      scene.text('"Great. I will buy this one then."');
    }
    scene.actions([
      { label: 'Wait for her', handler: (st: GameState) => {
    (s as any).nichDateState = 10;
  }, goto: ['nichTanya', 'date'] },
    ]);
  } },
      { label: 'Igor (25 cm)', handler: (st: GameState) => {
    ((s as any).nichTanya ?? {})['Strapon'] = 25;
    scene.text('"I think I like Igor best."');
    if (((s as any).pcs_vag ?? 0) >= 35) {
      scene.text('"Really? I thought you might prefer a bigger one. But okay, I will buy this one then."');
    } else {
      scene.text('"Great. I will buy this one then."');
    }
    scene.actions([
      { label: 'Wait for her', handler: (st: GameState) => {
    (s as any).nichDateState = 10;
  }, goto: ['nichTanya', 'date'] },
    ]);
  } },
      { label: 'Labaan (35 cm)', handler: (st: GameState) => {
    ((s as any).nichTanya ?? {})['Strapon'] = 35;
    scene.text('"I think I like Labaan best."');
    if (((s as any).pcs_vag ?? 0) <= 25) {
      scene.text('"Really? Are you sure? I didn\'t think… well, it\'s your choice. I will buy it then. Just don\'t complain afterwards."');
    } else {
      scene.text('"Great. I will buy this one then."');
    }
    scene.actions([
      { label: 'Wait for her', handler: (st: GameState) => {
    (s as any).nichDateState = 10;
  }, goto: ['nichTanya', 'date'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).nichDateState ?? 0) === 10) {
            (s as any).minut = ((s as any).minut ?? 0) + 20;
            scene.img('images/locations/city/redlight/erotomaniac/sexshop.jpg');
            scene.text('Tanya pays for the strap-on and also some items she collected while you were\'t paying attention.');
            scene.text('"I think I got everything I need. Lets get back to the apartment."');
            scene.actions([
              { label: 'Return to the apartment', handler: (st: GameState) => {
    (s as any).nichDateState = 20;
  }, goto: ['nichTanya', 'date'] },
            ]);
          } else {
            if (((s as any).nichDateState ?? 0) === 20) {
              scene.img('images/characters/city/tanya/date/strapona.jpg');
              scene.text('Once you are back at Tanyas\' bedroom she tells you to undress and lie on her bed head down.');
              scene.text('She takes out some kind of rope of her shopping bag. One by one she connects your wrists and ankles to the posts of her bed. You are trapped, lying in a spread position, unable to move.');
              scene.text('The next thing Tanya takes out is a whip. She whips your back for a few minutes.');
              qspCall(s, 'arousal', 'foreplay', 5, 'lesbian', 'maso', 'bound', 'sub');
              qspCall(s, 'stat', '');
              scene.actions([
                { label: 'Further', handler: (st: GameState) => {
    (s as any).nichDateState = 30;
  }, goto: ['nichTanya', 'date'] },
              ]);
            } else {
              if (((s as any).nichDateState ?? 0) === 30) {
                scene.img('images/characters/city/tanya/sexL/psovaginal/psovaginal0.jpg');
                scene.text('Tanya puts her whip aside and puts her clothes off. You can\'t turn your head enough to see what she is doing exactly but it appears as if she is putting on her new strap-on. She also seems to fasten her favorite vibrator on the inner side.');
                scene.text('"I think this is going to be our favorite toy."');
                scene.text('She probes your holes before generously applying lube on her strap-on.');
                qspCall(s, 'arousal', 'foreplay', 5, 'lesbian', 'maso', 'bound', 'sub');
                qspCall(s, 'stat', '');
                scene.actions([
                  { label: 'Further', handler: (st: GameState) => {
    (s as any).nichDateState = 40;
  }, goto: ['nichTanya', 'date'] },
                ]);
              } else {
                if (((s as any).nichDateState ?? 0) === 40) {
                  scene.img('images/characters/city/tanya/sexL/psovaginal/psovaginal0.jpg');
                  scene.text('Tanya mercilessly fucks you for more than ten minutes.');
                  scene.text('From your position you can\'t see her. You can only feel her hands on your hips and her fake member grinding into you.');
                  (s as any).dick = ((s as any).nichTanya ?? 0)?.['Strapon'];
                  qspCall(s, 'arousal', 'vaginal_strap', 15, 'lesbian', 'sub');
                  qspCall(s, 'stat', '');
                  scene.text('After a while you hear a breath quicken. She pulls back your head by pulling on your hair. With a deep moan she cums.');
                  scene.text('She doens\'t untie you for another ten minutes. You feel her lying on your back, her breasts resting on your shoulders. Finally she unties one of your wrists so you are able to untie the other knots.');
                  (s as any).minut = ((s as any).minut ?? 0) + 15;
                  scene.actions([
                    { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    ((s as any).nichTanya ?? {})['Date'] = 0;
  }, goto: ['nichBedroomTanja', ''] },
                  ]);
                }
              }
            }
          }
        }
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 120;
        scene.img('images/locations/city/centralpark/park.jpg');
        scene.text('You spend two nice hours with Tanya in the cities central park.');
        scene.actions([
          { label: 'Return to the apartment', goto: ['nichBedroomTanja', ''] },
        ]);
      }
    }
  }
  scene.build();
}

function enterDesc(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/0\' + rand(1, 3) + \'.jpg');
  scene.text('Tanya is the daughter of Gala and the step-daughter of Nicholas.');
  (s as any).nichTanyaBdD = 22;
  (s as any).nichTanyaBdM = 6;
  (s as any).nichTanyaBdY = 1998;
  if (((s as any).month ?? 0) > ((s as any).nichTanyaBdM ?? 0)  ||  (((s as any).month ?? 0) === ((s as any).nichTanyaBdM ?? 0)  &&  ((s as any).day ?? 0) > ((s as any).nichTanyaBdD ?? 0))) {
    // TODO-QSP: dynamic text: She is ' + (year - nichTanyaBdY) + ' years old.
    scene.text('She is \' + (year - nichTanyaBdY) + \' years old.');
  } else {
    if (((s as any).month ?? 0) === ((s as any).nichTanyaBdM ?? 0)  &&  ((s as any).day ?? 0) === ((s as any).nichTanyaBdD ?? 0)) {
      if (parseFloat(((((s as any).year ?? 0) - ((s as any).nichTanyaBdY ?? 0)).slice((4)-1, ((4)-1)+(1)))) === 1) {
        // TODO-QSP: dynamic text: Today is her ' + (year - nichTanyaBdY) + 'st birthday.
        scene.text('Today is her \' + (year - nichTanyaBdY) + \'st birthday.');
      } else {
        if (parseFloat(((((s as any).year ?? 0) - ((s as any).nichTanyaBdY ?? 0)).slice((4)-1, ((4)-1)+(1)))) === 2) {
          // TODO-QSP: dynamic text: Today is her ' + (year - nichTanyaBdY) + 'nd birthday.
          scene.text('Today is her \' + (year - nichTanyaBdY) + \'nd birthday.');
        } else {
          if (parseFloat(((((s as any).year ?? 0) - ((s as any).nichTanyaBdY ?? 0)).slice((4)-1, ((4)-1)+(1)))) === 3) {
            // TODO-QSP: dynamic text: Today is her ' + (year - nichTanyaBdY) + 'rd birthday.
            scene.text('Today is her \' + (year - nichTanyaBdY) + \'rd birthday.');
          } else {
            // TODO-QSP: dynamic text: Today is her ' + (year - nichTanyaBdY) + 'th birthday.
            scene.text('Today is her \' + (year - nichTanyaBdY) + \'th birthday.');
          }
        }
      }
    } else {
      // TODO-QSP: dynamic text: She is ' + (year - nichTanyaBdY - 1) + ' years old.
      scene.text('She is \' + (year - nichTanyaBdY - 1) + \' years old.');
    }
  }
  if (((s as any).nichTanya ?? 0)?.['Relationship'] === 0) {
    if (((s as any).nichTanya ?? 0)?.['RelationshipState'] === 0) {
      scene.text('She seems to be pretty indifferent about you.');
    } else {
      if (((s as any).nichTanya ?? 0)?.['Relationship'] === 4) {
        scene.text('The two of you have been together before you broke up with her.');
      } else {
        if (((s as any).nichTanya ?? 0)?.['Relationship'] >= 5) {
          scene.text('The two of you have been together before she broke up with you.');
        }
      }
    }
  } else {
    if (((s as any).nichTanya ?? 0)?.['Relationship'] === 1) {
      if (((s as any).nichTanya ?? 0)?.['RelationshipBreakup'] === 0) {
        scene.text('She is your fuck buddy. You feel like she considers your relationship to be casual. She probably wouldn\'t mind if you had another lover. On the other hand she might have somebody else herself.');
      } else {
        scene.text('She is your friend with benefits. Your relationship is a casual one. You are both free to see other people.');
      }
    } else {
      if (((s as any).nichTanya ?? 0)?.['Relationship'] === 3) {
        scene.text('She is your lesbian lover. She expects you to be faithful. Likewise you can expect the same from her.');
      }
    }
  }
  if (((s as any).nichTanya ?? 0)?.['Relationship'] > 0  &&  ((s as any).nichTanya ?? 0)?.['Relationship'] < 4) {
    if (((s as any).nichTanya ?? 0)?.['Dominance'] >= 70) {
      // TODO-QSP: dynamic text: She acts very dominantly around you (<<nichTanya['Dominance']>>)
      scene.text(`She acts very dominantly around you (${((s as any).nichTanya ?? 0)?.['Dominance']})`);
    } else {
      if (((s as any).nichTanya ?? 0)?.['Dominance'] >= 20) {
        // TODO-QSP: dynamic text: She acts dominantly around you (<<nichTanya['Dominance']>>)
        scene.text(`She acts dominantly around you (${((s as any).nichTanya ?? 0)?.['Dominance']})`);
      } else {
        if (((s as any).nichTanya ?? 0)?.['Dominance'] <= -70) {
          // TODO-QSP: dynamic text: She acts very submissively around you (<<nichTanya['Dominance']>>)
          scene.text(`She acts very submissively around you (${((s as any).nichTanya ?? 0)?.['Dominance']})`);
        } else {
          if (((s as any).nichTanya ?? 0)?.['Dominance'] <= -20) {
            // TODO-QSP: dynamic text: She acts submissively around you (<<nichTanya['Dominance']>>)
            scene.text(`She acts submissively around you (${((s as any).nichTanya ?? 0)?.['Dominance']})`);
          } else {
            // TODO-QSP: dynamic text: Her behaviour around you is neither remarkably dominant nor submissive (<<nichTa...
            scene.text(`Her behaviour around you is neither remarkably dominant nor submissive (${((s as any).nichTanya ?? 0)?.['Dominance']})`);
          }
        }
      }
    }
  }
  scene.text('Friendship with Tanya:\' & gs \'journal\', \'relindex\', \'A218');
  if (((s as any).nichTempAct ?? 0) === 'sleep') {
    scene.text('Usually Tanya is sleeping at this time.');
  } else {
    if (((s as any).nichTempAct ?? 0) === 'bathMorning') {
      scene.text('You assume that currently Tanya is either in her room or in the master bathroom.');
    } else {
      if (((s as any).nichTempAct ?? 0) === 'breakfast') {
        scene.text('It\'s the time Tanya usually eats breakfast.');
      } else {
        if (((s as any).nichTempAct ?? 0) === 'living') {
          scene.text('Tanya seems to be in the living room.');
        } else {
          if (((s as any).nichTempAct ?? 0) === 'bathEvening') {
            scene.text('Tanya is likely heading for her bed now.');
          } else {
            if (((s as any).nichTempAct ?? 0) === 'dinner') {
              scene.text('Tanya usually eats dinner around this time.');
            } else {
              if (((s as any).nichTempAct ?? 0) === 'nicholas'  ||  ((s as any).nichTempAct ?? 0) === 'tanya') {
                scene.text('Tanya seems to be in her room.');
              } else {
                if (((s as any).nichTempAct ?? 0) === 'leaveUni'  ||  ((s as any).nichTempAct ?? 0) === 'uni'  ||  ((s as any).nichTempAct ?? 0) === 'returnUni') {
                  scene.text('Tanya is usually at university around this time.');
                } else {
                  if (((s as any).nichTempAct ?? 0) === 'leaveBallet'  ||  ((s as any).nichTempAct ?? 0) === 'ballet'  ||  ((s as any).nichTempAct ?? 0) === 'returnBallet') {
                    scene.text('Tanya usually takes ballet lessons around this time.');
                  } else {
                    if (((s as any).nichTempAct ?? 0) === 'leaveFriend'  ||  ((s as any).nichTempAct ?? 0) === 'friend'  ||  ((s as any).nichTempAct ?? 0) === 'returnFriend') {
                      scene.text('Tanya usually visits a friend around this time.');
                    } else {
                      if (((s as any).nichTempAct ?? 0) === 'leaveShopping'  ||  ((s as any).nichTempAct ?? 0) === 'shopping'  ||  ((s as any).nichTempAct ?? 0) === 'returnShopping') {
                        scene.text('Tanya usually goes shopping around this time.');
                      } else {
                        if (((s as any).nichTempAct ?? 0) === 'prepareClub') {
                          scene.text('Tanya is likely preparing herself to go clubbing in the master bathroom.');
                        } else {
                          if (((s as any).nichTempAct ?? 0) === 'leaveClub'  ||  ((s as any).nichTempAct ?? 0) === 'club'  ||  ((s as any).nichTempAct ?? 0) === 'returnClub') {
                            scene.text('Tanya usually goes clubbing around this time.');
                          } else {
                            scene.text('You have no idea where Tanya is at the moment.');
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterSexL(s: GameState, scene: SceneBuilder): void {
  ((s as any).nichTanya ?? {})['FuckLast'] = ((s as any).daystart ?? 0);
  if (((s as any).nichTanya ?? 0)?.['FuckToday'] === 0) {
    ((s as any).nichTanya ?? {})['FuckCounter'] = (((s as any).nichTanya ?? {})['FuckCounter'] ?? 0) + (1);
  }
  ((s as any).nichTanya ?? {})['FuckToday'] = (((s as any).nichTanya ?? {})['FuckToday'] ?? 0) + (1);
  scene.img('images/characters/city/tanya/sex/undress\' + rand(0, 3) + \'.jpg');
  scene.text('Tanya slowly undresses and poses seductively for you. "Now you."');
  scene.text('You make a show or striping out of your clothes, it takes some effort not to rush but the anticipation already has you turned on and the rewards are greater if you take your time.');
  qspCall(s, 'nichTanya', 'sex_matrix');
  scene.build();
}

function enterRepeat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).nichTanya ?? {})['FuckToday'] = (((s as any).nichTanya ?? {})['FuckToday'] ?? 0) + (1);
  scene.img('images/characters/city/tanya/sex/pose\' + rand(0, 1) + \'.jpg');
  scene.text('Tanya smiles at you and poses seductively and purrs, "Ready to go for another round?"');
  scene.text('She hasn\'t mastered the sultry act but the flawed effort is both sexy and cute so you are not about to complain.');
  qspCall(s, 'nichTanya', 'sex_matrix');
  scene.build();
}

function enterKiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A218');
  scene.img('images/characters/city/tanya/sexL/kiss/kiss\' + rand(0, 5) + \'.jpg');
  scene.text('Tanya and you kiss passionately pushing your naked bodies together. The pleasure of just kissing has you melting in her arms and her yours, you have no idea how long this continues but finally you break the kiss as one of you will have to decide what to do next.');
  qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
  qspCall(s, 'nichTanya', 'sex_matrix');
  scene.build();
}

function enterAeatout(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A218');
  ((s as any).nichTanya ?? {})['FuckPositions'] = (((s as any).nichTanya ?? {})['FuckPositions'] ?? 0) + (1);
  scene.img('images/characters/city/tanya/sexL/aeatout/aeatout\' + rand(0, 3) + \'.jpg');
  scene.text('You begin by kissing her breasts, moving gradually down her body, lower and lower until you are facing her pussy. You start by gently caressing her swollen lips with up and down tongue lapping, up and down the swollen mound and moist slit, and getting ready to focus the tip of your tongue directly on her clitoris. You part her outer lips with your fingers, spreading her pouty inner lips giving you full access to her puffy pink clitoris.');
  qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
  qspCall(s, 'arousal', 'vaginal_finger_give', (-5), 'lesbian');
  qspCall(s, 'nichTanya', 'sex_matrix');
  scene.build();
}

function enterPeatout(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A218');
  ((s as any).nichTanya ?? {})['FuckPositions'] = (((s as any).nichTanya ?? {})['FuckPositions'] ?? 0) + (1);
  scene.img('images/characters/city/tanya/sexL/peatout/peatout\' + rand(0, 6) + \'.jpg');
  scene.text('Tanya begins by dragging her tongue up your thighs to your crotch and plants light kisses from the top of your slit down to the opening of your vagina. Her tongue pushes into your slickened hole a few times, then slides back up your cunny to caress your tingling clitoris again.');
  qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
  qspCall(s, 'nichTanya', 'sex_matrix');
  scene.build();
}

function enterArimjob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A218');
  ((s as any).nichTanya ?? {})['FuckPositions'] = (((s as any).nichTanya ?? {})['FuckPositions'] ?? 0) + (1);
  scene.img('images/characters/city/tanya/sexL/arimjob/arimjob\' + rand(0, 3) + \'.jpg');
  scene.text('You kiss her buttocks in ever decreasing circles, eventually getting to the center where her puckered anus is waiting. Reaching your goal, you lick all around the tender star to get it plenty moist, then firmly push your tongue forward, penetrating her ass with just the tip. You retract it, again licking all around her anus, and repeating your tongue invasion into that most private entrance.');
  qspCall(s, 'arousal', 'rimming_give', 5, 'lesbian');
  qspCall(s, 'nichTanya', 'sex_matrix');
  scene.build();
}

function enterPrimjob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A218');
  ((s as any).nichTanya ?? {})['FuckPositions'] = (((s as any).nichTanya ?? {})['FuckPositions'] ?? 0) + (1);
  scene.img('images/characters/city/tanya/sexL/primjob/primjob\' + rand(0, 2) + \'.jpg');
  scene.text('Tanya kisses your buttocks in ever decreasing circles, eventually getting to the center where your puckered anus is waiting. Reaching her goal, she licks all around the tender star to get it plenty moist, then firmly pushes her tongue forward, penetrating your ass with just the tip. She retracts it, again licking all around your anus, and repeats her tongue invasion into that most private entrance.');
  qspCall(s, 'arousal', 'rimming', 5, 'lesbian');
  qspCall(s, 'nichTanya', 'sex_matrix');
  scene.build();
}

function enterPsovaginal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A218');
  ((s as any).nichTanya ?? {})['FuckPositions'] = (((s as any).nichTanya ?? {})['FuckPositions'] ?? 0) + (1);
  scene.img('images/characters/city/tanya/sexL/pstrapon/pstrapon\' + rand(0, 3) + \'.jpg');
  scene.text('You watch as Tanya puts on the strap-on, adjusting it to her hips and centering the fake cock, and then she moves to you and inserts it slowly into your pussy. You moan and grind back at her while she fucks you with it.');
  (s as any).dick = ((s as any).nichTanya ?? 0)?.['Strapon'];
  qspCall(s, 'arousal', 'vaginal_strap', 5, 'lesbian');
  qspCall(s, 'nichTanya', 'sex_matrix');
  scene.build();
}

function enterAsovaginal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A218');
  ((s as any).nichTanya ?? {})['FuckPositions'] = (((s as any).nichTanya ?? {})['FuckPositions'] ?? 0) + (1);
  scene.img('images/characters/city/tanya/sexL/astrapon/astrapon\' + rand(0, 5) + \'.jpg');
  scene.text('You put on the strap-on, adjusting it to your hips and centering it. You let Tanya suck on it to moisten it up, then you insert it slowly into her pussy. She moans and grinds back at you while you fuck her with it.');
  qspCall(s, 'arousal', 'vaginal_strap_give', 5, 'lesbian');
  qspCall(s, 'nichTanya', 'sex_matrix');
  scene.build();
}

function enterSexMatrix(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      (s as any).nichRand = Math.floor(Math.random() * 3) + 0;
      if (((s as any).nichRand ?? 0) === 0  &&  ((s as any).nichTanya ?? 0)?.['Strapon'] > 0) {
        scene.text('Tanya takes out the strap-on the two of you bought together and waves it. "I want to take you."');
        scene.actions([
          { label: 'Distract her', goto: ['nichTanya', 'kiss'] },
          { label: 'Get fucked', goto: ['nichTanya', 'psovaginal'] },
        ]);
      } else {
        if (((s as any).nichRand ?? 0) <= 1) {
          scene.text('Tanya softly pushes your head down her body, you kiss between her breasts and she asks, "Keep going."');
          scene.actions([
            { label: 'Eat her pussy', goto: ['nichTanya', 'aeatout'] },
          ]);
        } else {
          scene.text('Tanya kisses you seductively, as she breaks the kiss and with a sly smile she states, "I want that tongue on my butt hole."');
          scene.actions([
            { label: 'Rim her', goto: ['nichTanya', 'arimjob'] },
            { label: 'Eat her pussy instead', goto: ['nichTanya', 'aeatout'] },
          ]);
        }
      }
    } else {
      (s as any).nichRand = Math.floor(Math.random() * 2) + 0;
      if ((!((s as any).nichRand ?? 0))) {
        scene.text('Tanya kisses your breasts and abs slowly moving towards your pussy.');
        scene.actions([
          { label: 'Get eaten out', goto: ['nichTanya', 'peatout'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: Tanya approaches you from behind, her hands stroking your back and planting kiss...
        scene.text(`Tanya approaches you from behind, her hands stroking your back and planting kisses from your shoulders down to your butt cheeks. "Your butt is irresistible ${((s as any).pcs_nickname ?? 0)}, I want it."`);
        scene.actions([
          { label: 'Let her rim you', goto: ['nichTanya', 'primjob'] },
          { label: 'Get her to eat you out instead', goto: ['nichTanya', 'peatout'] },
        ]);
      }
    }
  } else {
    if (((s as any).nichTanya ?? 0)?.['Strapon'] > 0) {
      scene.actions([
        { label: 'Get fucked by her (strapon)', goto: ['nichTanya', 'psovaginal'] },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['strapon'] > 0) {
      scene.actions([
        { label: 'Fuck her (strapon)', goto: ['nichTanya', 'asovaginal'] },
      ]);
    }
    if (((s as any).nichTanya ?? 0)?.['FuckPositions'] >= 3) {
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['nichTanya', 'sexLAfter'] },
      ]);
    }
    scene.actions([
      { label: 'Kiss her', goto: ['nichTanya', 'kiss'] },
      { label: 'Eat her pussy', goto: ['nichTanya', 'aeatout'] },
      { label: 'Have her eat you out', goto: ['nichTanya', 'peatout'] },
      { label: 'Rim her', goto: ['nichTanya', 'arimjob'] },
      { label: 'Have her rim you', goto: ['nichTanya', 'primjob'] },
    ]);
  }
  scene.build();
}

function enterSexLAfter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichWork ?? 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['nichApartment', 'visitTanya'] }]);
  }
  if (((s as any).nichWork ?? 0) === 2  &&  (!((s as any).nichGalaKnowsPT ?? 0))) {
    (s as any).nichTemp = qspFunc(s, 'nichUtil', 'isHome', 'gala');
    if ((((s as any).nichTemp ?? 0) === 1  &&  (Math.floor(Math.random() * 100) + 1) <= 5)  ||  ((s as any).nichDebug ?? 0) === 1) {
      (s as any).nichGalaKnowsPT = 1;
      scene.text('You here a muffled sound from outside the room. It sounded like somebody was moving just outside the door.');
      scene.text('You turn over to Tanya. She doesn\'t look as if she heard this sound.');
      scene.text('Maybe it was only your imagination?');
      return;
      scene.actions([
        { label: 'Don\'t worry about it', goto: ['nichTanya', 'sexLAfter'] },
      ]);
    }
  } else {
    if (((s as any).nichWork ?? 0) === 2  &&  ((s as any).nichGalaKnowsPT ?? 0) === 20) {
      (s as any).nichTemp = qspFunc(s, 'nichUtil', 'isHome', 'gala');
      if ((((s as any).nichTemp ?? 0) === 1  &&  (Math.floor(Math.random() * 100) + 1) <= 5)  ||  ((s as any).nichDebug ?? 0) === 1) {
        (s as any).nichGalaKnowsPT = 25;
        scene.text('You here a muffled sound from outside the room. It sounded like somebody was moving just outside the door.');
        scene.text('You turn over to Tanya. She doesn\'t look as if she heard this sound.');
        scene.text('Maybe it was only your imagination?');
        return;
        scene.actions([
          { label: 'Don\'t worry about it', goto: ['nichTanya', 'sexLAfter'] },
        ]);
      }
    }
  }
  scene.img('images/characters/city/tanya/sex/relax\' + rand(0, 5) + \'.jpg');
  scene.text('Tanya lies on the bed basking in a post sex glow looking hotter than ever. Its very tempting to jump her again but you could also take a break to chat or just cuddle for a bit. Of course you could also leave if you have things to do.');
  scene.actions([
    { label: 'Chat', goto: ['nichTanya', 'chat'] },
    { label: 'Cuddle', goto: ['nichTanya', 'cuddle'] },
    { label: 'Another round', handler: (st: GameState) => {
    if (((s as any).nichTanya ?? 0)?.['FuckToday'] >= 3) {
      scene.text('As you propose going for yet another round Tanya slowly shakes her head.');
      // TODO-QSP: dynamic text: "I'm sorry, <<$pcs_nickname>>. I'm really exhausted. Doing it four times a day i...
      scene.text(`"I'm sorry, ${((s as any).pcs_nickname ?? 0)}. I'm really exhausted. Doing it four times a day is too much for me. But we can cuddle if you'd like."`);
    } else {
      scene.actions([{ label: 'Continue', goto: ['nichTanya', 'repeat'] }]);
    }
  } },
    { label: 'Dress and leave', handler: (st: GameState) => {
    if (((s as any).nichWork ?? 0) !== 2) {
      scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
    }
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/0\' + rand(1, 3) + \'.jpg');
  scene.text('"What would you like to talk about?"');
  if ((((s as any).nichTanya ?? 0)?.['DateCounter'] > 0  ||  ((s as any).nichJobRefused ?? 0) === 1)  &&  (((s as any).nichTanya ?? 0)?.['DateLast'] !== ((s as any).daystart ?? 0)  ||  ((s as any).nichDebug ?? 0) === 1)) {
    qspCall(s, 'nichTanya', 'date_proposal');
  }
  if (((s as any).nichTanya ?? 0)?.['Relationship'] > 0  &&  ((s as any).nichTanya ?? 0)?.['Relationship'] < 4) {
    scene.actions([
      { label: 'Our relationship', goto: ['nichTanya', 'relationship'] },
    ]);
  }
  if (((s as any).nichJobRefused ?? 0) === 2  &&  (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1  ||  ((s as any).gschoolVars ?? 0)?.['block'] === 1)) {
    scene.actions([
      { label: 'Job offer', goto: ['nichTanya', 'jobOffer'] },
    ]);
  }
  if (((s as any).nichWork ?? 0) === 2) {
    scene.actions([
      { label: 'Tanya\'s room', goto: ['nichTanya', 'room'] },
    ]);
  }
  if (((s as any).nichTanya ?? 0)?.['Uni'] === 11) {
    scene.actions([
      { label: 'University', goto: ['nichTanya', 'university'] },
    ]);
  }
  scene.actions([
    { label: 'General chat', goto: ['nichTanya', 'general'] },
    { label: 'Tanya\'s family', goto: ['nichTanya', 'family'] },
    { label: 'Finish chatting', handler: (st: GameState) => {
    if ((!((s as any).nichWork ?? 0))) {
      if (((s as any).nichTanya ?? 0)?.['FuckLast'] === ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['nichTanya', 'repeat'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['nichTanya', 'sexL'] }]);
      }
    } else {
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
    }
  } },
  ]);
  scene.build();
}

function enterUniversity(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/0\' + rand(1, 3) + \'.jpg');
  scene.text('"I talked with Nicholas. And he really would like you to attend your courses at university."');
  scene.text('"I know, I know!" Tanya seems to be annoyed "But I don\'t know if university is the right place for me. What do you think?"');
  scene.actions([
    { label: 'You should take university seriously', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/0\' + rand(1, 3) + \'.jpg');
    scene.text('"I think you should take university seriously."');
    scene.text('"Really? And why would I listen to you?"');
    if (((s as any).nichTanya ?? 0)?.['Relationship'] === 3) {
      scene.actions([
        { label: 'I love you (relationship)', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/0\' + rand(1, 3) + \'.jpg');
    scene.text('"I love you and I only want the best for you. And I know that going to university is the best decision for your future."');
    scene.text('She bites down on her lip and hesitates for a few seconds.');
    scene.text('"I love you too. You know I do. And maybe you are right. I think I will give university another shot."');
    ((s as any).nichTanya ?? {})['Uni'] = 100;
    ((s as any).nichTanya ?? {})['UniStart'] = ((s as any).daystart ?? 0);
    scene.actions([
      { label: 'Another topic', goto: ['nichTanya', 'chat'] },
    ]);
  } },
      ]);
    }
    qspCall(s, 'willpower', 'chrsm_lvl', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Because I tell you to [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Because I tell you to [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay');
    ((s as any).nichTanya ?? {})['Uni'] = 100;
    ((s as any).nichTanya ?? {})['UniStart'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('"Because I tell you to."');
    scene.text('She bites down on her lip and hesitates for a few seconds.');
    scene.text('"Maybe you are right. I think I will give university another shot."');
    scene.actions([
      { label: 'Another topic', goto: ['nichTanya', 'chat'] },
    ]);
  } },
      ]);
    }
    if (qspFunc(s, 'uniutil', 'student', 'enrolled')) {
      scene.actions([
        { label: 'I know what I am talking about (student)', handler: (st: GameState) => {
    ((s as any).nichTanya ?? {})['Uni'] = 100;
    ((s as any).nichTanya ?? {})['UniStart'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('"I know what I am talking about. I am a student myself."');
    scene.text('She bites down on her lip and hesitates for a few seconds.');
    scene.text('"Maybe you are right. I think I will give university another shot."');
    scene.actions([
      { label: 'Another topic', goto: ['nichTanya', 'chat'] },
    ]);
  } },
      ]);
    }
    if (((s as any).persuas_lvl ?? 0) >= 50) {
      scene.actions([
        { label: 'Just trust me (persuasion)', handler: (st: GameState) => {
    ((s as any).nichTanya ?? {})['Uni'] = 100;
    ((s as any).nichTanya ?? {})['UniStart'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('"Just believe me. It will be the best for you in the long run."');
    scene.text('She bites down on her lip and hesitates for a few seconds.');
    scene.text('"Maybe you are right. I think I will give university another shot."');
    scene.actions([
      { label: 'Another topic', goto: ['nichTanya', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Another topic', goto: ['nichTanya', 'chat'] },
    ]);
  } },
    { label: 'You should quit university', handler: (st: GameState) => {
    scene.text('"I agree with you. University is not for everybody. I think you will be happier without it."');
    scene.text('Tanya beams at you. "Exactly! Thank you for your advise. I guess I will take it to heart."');
    ((s as any).nichTanya ?? {})['Uni'] = 50;
    scene.actions([
      { label: 'Another topic', goto: ['nichTanya', 'chat'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGeneral(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/0\' + rand(1, 3) + \'.jpg');
  scene.text('You and Tanya talk about the usual stuff from boys to clothes to current affairs. You are surprised by how informed and up to date on business affairs and politics she is, but it makes sense considering her parents.');
  scene.actions([
    { label: 'Another topic', goto: ['nichTanya', 'chat'] },
  ]);
  scene.build();
}

function enterRelationship(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/0\' + rand(1, 3) + \'.jpg');
  scene.text('"How do you feel about us, Tanya?"');
  if (((s as any).nichTanya ?? 0)?.['Relationship'] === 1) {
    scene.text('"I like our special times together. I really do. Before I met you I would never have dreamt of doing it with a woman. I don\'t know if it is you or me but being with you doesn\'t feel wrong. It\'s quite the opposite really."');
  } else {
    if (((s as any).nichTanya ?? 0)?.['Relationship'] === 3) {
      scene.text('"You know I love you. Just spending time with you always makes me a bit happier."');
    }
  }
  scene.actions([
    { label: 'What would your mother say?', handler: (st: GameState) => {
    scene.text('"What do you think your mother would say if she found out about us?"');
    scene.text('Tanya thinks about her answer for a few moments.');
    scene.text('"I don\'t think she would be very happy. She frequently mentions that she expects me to marry a rich boy just like she did. I guess she would view you as some kind of distraction from this goal."');
  } },
    { label: 'What would Nicholas say?', handler: (st: GameState) => {
    scene.text('"What do you think Nicholas would say if he found out about us?"');
    scene.text('Tanya hesitates for a second.');
    scene.text('"I guess he would understand. It surely would be difficult for him. But I think he would want me to be happy."');
  } },
    { label: 'What would your friends say?', handler: (st: GameState) => {
    scene.text('"What do you think your friends would say if they found out about us?"');
    scene.text('"I don\'t think they would mind. And if they did they wouldn\'t be good friends anyways."');
  } },
    { label: 'Another topic', goto: ['nichTanya', 'chat'] },
  ]);
  scene.build();
}

function enterFamily(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/0\' + rand(1, 3) + \'.jpg');
  scene.actions([
    { label: 'Nicholas', handler: (st: GameState) => {
    scene.text('"How do you feel about Nicholas?"');
    if (((s as any).nichNTRelation ?? 0) < 10) {
      scene.text('"He is a really great man. He gives me hold and strength. I can always come to him with my… <i>emotional needs</i>."');
    } else {
      scene.text('"He is a really great man. He gives me hold and strength. He is a great father and I am glad having him."');
    }
    scene.actions([
      { label: 'His job', handler: (st: GameState) => {
    scene.text('"Do you know exactly what Nicholas is doing as his job?"');
    scene.text('"Of course. He is the chief executive officer of a big pharma company. He was a chemistrist before he climbed up the corporate ladder. Sometimes he says that he just wants to help people and that the shareholders and laws are hindering him."');
  } },
      { label: 'His marriage', handler: (st: GameState) => {
    scene.text('"What do you think about his marriage to your mother?"');
    if (((s as any).nichTanya ?? 0)?.['Relationship'] === 0) {
      scene.text('"I don\'t think I\'d feel comfortable talking about this."');
    } else {
      scene.text('"I heard some people saying that my mother only married Nicholas for his money. But I can\'t believe that. They have some problems. Maybe even big ones. But don\'t all couples have some of them?"');
    }
  } },
      { label: 'His money', handler: (st: GameState) => {
    scene.text('"Did Nicholas earned all of his money himself?"');
    scene.text('"No, not all of it. His father also was a successful business man and Nicholas inherited his wealth. But for some reason he doesn\'t want to spend money he didn\'t earn himself."');
  } },
      { label: 'Another topic', goto: ['nichTanya', 'chat'] },
    ]);
  } },
    { label: 'Another topic', goto: ['nichTanya', 'chat'] },
  ]);
  scene.build();
}

function enterJobOffer(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/0\' + rand(1, 3) + \'.jpg');
  scene.text('"About the job you offered me some time ago… you know, the one as your maid…"');
  scene.text('Tanya looks excited "Yes? Did you change your mind? It is still available."');
  scene.actions([
    { label: 'Yes', goto: ['nichTanya', 'hire'] },
    { label: 'Still Haven\'t decided', handler: (st: GameState) => {
    scene.text('"Sorry, I still can\'t do this right now."');
    scene.actions([
      { label: 'Another topic', goto: ['nichTanya', 'chat'] },
    ]);
  } },
    { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A218', 'hate');
    ((s as any).nichTanya ?? {})['FuckLast'] = ((s as any).daystart ?? 0);
    scene.text('"I don\'t know about this, Tanya", you say carefully. "I mean, can you imagine me cleaning up and cooking, day in and day out? It doesn\'t sound like me."');
    scene.text('Her joyful expression falters and is quickly replaced with a cold, angry stare. "You just don\'t want to be around me."');
    scene.text('"No!", you exclaim, "No, of course I\'d love to be around yo-"');
    scene.text('She cuts you off: "Then why are you telling me this shit?! You could live with me, with us, and you\'d be getting free money for dusting off a table or something!"');
    scene.text('You realize you can\'t really reach her with logic while she\'s in this mood, so you try to appease her. "Look, I… It\'s just really sudden, and I need time to think about it. It sounds great, but if I offered you something that would change your life, you would want to have some time to think too, right?"');
    scene.text('Tanya still doesn\'t look happy about your refusal, but her anger seems to dissipate somewhat and she looks away. "Yeah, sure, whatever." You think you can see tears in her eyes when she turns her back on you and says: "I\'ve gotta go do something now."');
    scene.text('You understand immediately: "Yeah, okay, I had to leave anyway. Talk to you soon?"');
    scene.text('"Sure", is the last thing you hear from her that day.');
    (s as any).nichJobRefused = 1;
    scene.actions([
      { label: 'Leave the apartment', goto: ['city_center', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRoom(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/0\' + rand(1, 3) + \'.jpg');
  scene.text('"I\'d like to talk about your room."');
  if (((s as any).nichTanya ?? 0)?.['Room'] === 1) {
    scene.text('"Okay. I cleaned it just as you asked me to."');
  } else {
    scene.text('"Really? What about it?"');
    scene.actions([
      { label: 'Have Tanya clean it', handler: (st: GameState) => {
    scene.text('"I think you should clean it yourself from now on."');
    if (((s as any).nichTanya ?? 0)?.['Dominance'] <= -30) {
      scene.text('"Well, I guess you are right. I will try to keep the room clean from now on."');
      ((s as any).nichTanya ?? {})['Room'] = 1;
      ((s as any).nichChoreState ?? {})[5] = 0;
    } else {
      // TODO-QSP: dynamic text: "Sorry, <<$pcs_nickname>>, but Nicholas pays you to clean it. Therefore you will...
      scene.text(`"Sorry, ${((s as any).pcs_nickname ?? 0)}, but Nicholas pays you to clean it. Therefore you will be the one cleaning it."`);
    }
    scene.actions([
      { label: 'Another topic', goto: ['nichTanya', 'chat'] },
    ]);
  } },
      { label: 'Never mind', goto: ['nichTanya', 'chat'] },
    ]);
  }
  scene.build();
}

function enterCuddle(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).nichTanyaPic ?? 0)}`);
  scene.text('You spend a few minutes in hugging and kissing Tanya.');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Chat', goto: ['nichTanya', 'chat'] },
    { label: 'Leave and get dressed', goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterHire(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/idle/idle\' + rand(0, 5) + \'.jpg');
  qspCall(s, 'npc_relationship', 'modify', 'A218', 'love');
  (s as any).nichWork = 1;
  ((s as any).job_hiring_step ?? {})['nich_maid'] = 1;
  scene.text('Her offer sounds too good to be true: Living with her, here, in this huge luxury apartment, right in the city center? And big paycheck every month for basically doing nothing? You know your answer immediately: "Okay."');
  scene.text('"Okay?", she asks, making sure she didn\'t misunderstand.');
  scene.text('"Yes, I\'ll take your offer. If your stepfather wants to hire m-" You are cut off by Tanya\'s fierce hug and kiss.');
  scene.text('"That\'s great, I\'m so happy right now. Of course you will need to pass the interview of my parents."');
  scene.text('You look at her with a questioning look.');
  scene.text('"Don\'t worry. Since I will vouch for you this will be nothing but a formality. The only thing important is that you look presentable. And that includes wearing a maid uniform."');
  scene.text('"Where would I get a maid uniform?"');
  scene.text('"I think they sell them at G&M. One of their shops is at the mall nearby. But make sure you don\'t buy an outfit that\'s too skimpy. Nicholas wouldn\'t mind but my mother surely would."');
  if (((s as any).hour ?? 0) <= 21) {
    scene.text('"Actually we could go shopping for a uniform right now. The mall is still open and we would even make it back in time to present you to my parents. What do you say?"');
    scene.actions([
      { label: 'Go shopping together', handler: (st: GameState) => {
    scene.text('"Ok, that sounds like a great idea."');
    scene.text('Tanya beams and takes her purse. "Great, lets go then."');
    scene.actions([
      { label: 'Go to the mall', goto: ['nichTanya', 'shoppingUniform'] },
    ]);
  } },
      { label: 'Turn shopping offer down', handler: (st: GameState) => {
    scene.text('"Sorry Tanya, I can\'t do that today."');
    scene.text('"Don\'t worry, that\'s fine. After all this comes very sudden."');
    scene.text('She hugs you again.');
    // TODO-QSP: dynamic text: "Just come back any day between ' + iif(cheatVars['time_format'] = 0, '18 and 22...
    scene.text('"Just come back any day between \' + iif(cheatVars[\'time_format\'] = 0, \'18 and 22 o\'clock\', \'6 and 10 PM\') + \' while wearing your uniform. My parents should be home then."');
    scene.actions([
      { label: 'Leave the apartment', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Understood', handler: (st: GameState) => {
    scene.text('She hugs you again.');
    // TODO-QSP: dynamic text: "Great! Just come back any day between ' + iif(cheatVars['time_format'] = 0, '18...
    scene.text('"Great! Just come back any day between \' + iif(cheatVars[\'time_format\'] = 0, \'18 and 22 o\'clock\', \'6 and 10 PM\') + \' while wearing your uniform. My parents should be home then."');
    scene.actions([
      { label: 'Leave the apartment', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterShoppingUniform(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('The two of you enter the mall and Tanya leads you to the store where the maid uniforms are sold.');
    scene.text('She asks you to wait for a few seconds while she looks for an appropriate uniform.');
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: :nichTanyaShopUniLoop
  (s as any).nichRand = Math.floor(Math.random() * 49) + 1;
  if (((s as any).gm_maid ?? 0)?.[String((s as any).nichRand ?? 0)] === 1  &&  ((s as any).nichLoopAttempt ?? 0) < 100) {
    (s as any).nichLoopAttempt = ((s as any).nichLoopAttempt ?? 0) + (1);
    // TODO-QSP: jump 'nichTanyaShopUniLoop'
  }
  qspCall(s, 'clothing_attributes', 'uniform', ((s as any).nichRand ?? 0));
  (s as any).price = (20 * ((5 * ((s as any).CloQuality ?? 0)) + 100)) * 3 / 2;
  (s as any).price = ((s as any).price ?? 0) / 50 * 50;
  scene.img(`images/pc/items/gm/maid/${((s as any).nichRand ?? 0)}.jpg`);
  if (((s as any).CloInhibit ?? 0) === 20) {
    scene.text('After a minute Tanya returns with an uniform. "What do you think about this one? My mother wouldn\'t mind it but you would still look sexy."');
  } else {
    if (((s as any).CloInhibit ?? 0) > 20) {
      scene.text('After a minute Tanya returns with an uniform. "What do you think about this one? I think you would look delicious wearing it. But my mother would surely think that you\'re a slut."');
    } else {
      scene.text('After a minute Tanya returns with an uniform. "What do you think about this one? I think it\'s too much cloth. But I guess you can put it off when we want to have fun."');
    }
  }
  // TODO-QSP: dynamic text: She takes a look at the pricetag. "It only costs <<price>>."
  scene.text(`She takes a look at the pricetag. "It only costs ${((s as any).price ?? 0)}."`);
  if (((s as any).CloInhibit ?? 0) > ((s as any).pcs_inhib ?? 0)) {
    scene.actions([
      { label: 'Too revealing', handler: (st: GameState) => {
    scene.text('"I think I won\'t be comfortable showing this much skin."');
    scene.text('"Really? Given the way we met each other I would not have thought that you are a prude." she winks at you.');
    scene.actions([
      { label: 'Look for another uniform', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichTanya', 'shoppingUniform', 'return'
  } },
    ]);
  } },
    ]);
  } else {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).price ?? 0)) === 0) {
      scene.actions([
        { label: 'Too expensive', handler: (st: GameState) => {
    scene.text('"I\'m afraid I can\'t afford that."');
    scene.text('"Really? You obviously need a job. I would be happy to help you out. You could consider this uniform my gift for you. I know you will find a way to repay me." she winks suggestively.');
    scene.actions([
      { label: 'Accept', handler: (st: GameState) => {
    scene.text('"Thank you, Tanya. That would be great."');
    scene.text('Tanya smiles and hugs you. She heads to the cashier and pays your new uniform with her credit card.');
    qspCall(s, 'clothing', 'add_item', 'gm_maid', ((s as any).nichRand ?? 0));
    scene.actions([
      { label: 'Return to her apartment', goto: ['nichTanya', 'prepareInterview'] },
    ]);
  } },
      { label: 'Choose another one', handler: (st: GameState) => {
    scene.text('"Thank you, Tanya. But maybe we should continue looking for something else."');
    scene.actions([
      { label: 'Look for another uniform', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichTanya', 'shoppingUniform', 'return'
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Buy', handler: (st: GameState) => {
    scene.text('"That looks great. I will take it"');
    scene.text('Tanya smiles and hugs you.');
    qspCall(s, 'money', 'pay', ((s as any).price ?? 0));
    qspCall(s, 'clothing', 'add_item', 'gm_maid', ((s as any).nichRand ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to her apartment', goto: ['nichTanya', 'prepareInterview'] },
    ]);
  } },
        { label: 'Look for another uniform', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichTanya', 'shoppingUniform', 'return'
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Stop looking', handler: (st: GameState) => {
    scene.text('"I don\'t think we will find something suitable today, Tanya."');
    // TODO-QSP: dynamic text: She seems to be a bit disappointed. "Okay. You will have to buy an uniform on yo...
    scene.text('She seems to be a bit disappointed. "Okay. You will have to buy an uniform on your own then. Just come to my place wearing it between \' + iif(cheatVars[\'time_format\'] = 0, \'18 and 22 o\'clock\', \'6 and 10 PM\') + \'."');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPrepareInterview(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing', 'wear', 'gm_maid', ((s as any).nichRand ?? 0), 'borrowed');
  scene.text('The both of you return to Tanyas apartment. You change into your new uniform before Tanya starts to inspect you carefully.');
  if (((s as any).cumsumbod ?? 0) - ((s as any).cumsumvag ?? 0) - ((s as any).cumsumass ?? 0) > (Math.floor(Math.random() * 4) + 2)) {
    scene.text('"How did you manage to smell like cum? You can\'t meet my parents like this."');
    scene.text('She leads you to her bathroom where you take a quick shower.');
    (s as any).cumspclnt = 1;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }
  if (((s as any).lashair ?? 0) !== 1  &&  ((s as any).pcs_pubes ?? 0) > 3  ||  ((s as any).pcs_leghair ?? 0) > 3) {
    scene.text('"Your body hair is too long. But you can fix that later, that won\'t be a reason not to hire you."');
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.text('"You should brush your hair."');
    scene.text('She hands you a brush and watches you while you do as you are told.');
    (s as any).pcs_hairbsh = 1;
  }
  if (((s as any).PShoHeels ?? 0) < 4) {
    scene.text('"Nicholas might tell you to wear other shoes for work. But I think he won\'t expect you to wear them right now."');
  }
  scene.text('Taking a final look she finally gives you a nod. "I think you look fine. Come on now. My parents are waiting in the living room."');
  scene.actions([
    { label: 'Follow her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['nichApartment', 'hiring'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'bedroomTanya':
      enterBedroomTanya(s, scene);
      break;
    case 'date_proposal':
      enterDateProposal(s, scene);
      break;
    case 'date_lake':
      enterDateLake(s, scene);
      break;
    case 'date_cinema':
      enterDateCinema(s, scene);
      break;
    case 'date_pool':
      enterDatePool(s, scene);
      break;
    case 'date_shopping':
      enterDateShopping(s, scene);
      break;
    case 'date_bar':
      enterDateBar(s, scene);
      break;
    case 'date_end':
      enterDateEnd(s, scene);
      break;
    case 'date_next_morning':
      enterDateNextMorning(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'bathroomMolestSuccess':
      enterBathroomMolestSuccess(s, scene);
      break;
    case 'date':
      enterDate(s, scene);
      break;
    case 'desc':
      enterDesc(s, scene);
      break;
    case 'sexL':
      enterSexL(s, scene);
      break;
    case 'repeat':
      enterRepeat(s, scene);
      break;
    case 'kiss':
      enterKiss(s, scene);
      break;
    case 'aeatout':
      enterAeatout(s, scene);
      break;
    case 'peatout':
      enterPeatout(s, scene);
      break;
    case 'arimjob':
      enterArimjob(s, scene);
      break;
    case 'primjob':
      enterPrimjob(s, scene);
      break;
    case 'psovaginal':
      enterPsovaginal(s, scene);
      break;
    case 'asovaginal':
      enterAsovaginal(s, scene);
      break;
    case 'sex_matrix':
      enterSexMatrix(s, scene);
      break;
    case 'sexLAfter':
      enterSexLAfter(s, scene);
      break;
    case 'chat':
      enterChat(s, scene);
      break;
    case 'university':
      enterUniversity(s, scene);
      break;
    case 'general':
      enterGeneral(s, scene);
      break;
    case 'relationship':
      enterRelationship(s, scene);
      break;
    case 'family':
      enterFamily(s, scene);
      break;
    case 'jobOffer':
      enterJobOffer(s, scene);
      break;
    case 'room':
      enterRoom(s, scene);
      break;
    case 'cuddle':
      enterCuddle(s, scene);
      break;
    case 'hire':
      enterHire(s, scene);
      break;
    case 'shoppingUniform':
      enterShoppingUniform(s, scene);
      break;
    case 'prepareInterview':
      enterPrepareInterview(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nichTanya: LocationDef = {
  name: 'nichTanya',
  title: 'You greet her. "Hi Tanya, I\'ve been thinking and would like ',
  region: 'other',
  enter: enter,
};
