import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'telefon', 'phone_call_receive');
  if (((s as any).npc_QW ?? 0)?.['A192'] === 1  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).pcs_apprnc ?? 0) > 80) {
    scene.actions([{ label: 'Continue', goto: ['nastja', 'pos4'] }]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A192'] === 2  &&  ((s as any).week ?? 0) !== 6  &&  ((s as any).mc_inventory ?? 0)?.['tech_camera'] !== 0  &&  ((s as any).nastjaday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['nastja', 'pos13'] }]);
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).npc_QW ?? 0)?.['A192'] === 2  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).pcs_apprnc ?? 0) > 80  &&  ((s as any).nastjaday ?? 0) !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['nastja', 'pos12'] }]);
      } else {
        if (((s as any).npc_QW ?? 0)?.['A192'] === 5  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).nastjaday ?? 0) !== ((s as any).daystart ?? 0)) {
          scene.actions([{ label: 'Continue', goto: ['nastja', 'pos22'] }]);
        } else {
          if (((s as any).npc_QW ?? 0)?.['A192'] === 6  &&  ((s as any).nastjaday ?? 0) !== ((s as any).daystart ?? 0)) {
            scene.actions([{ label: 'Continue', goto: ['nastja', 'pos31'] }]);
          } else {
            qspCall(s, 'telefon', 'phone_call_reject');
          }
        }
      }
    }
  }
  scene.build();
}

function enterPos1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/nastja.jpg');
  scene.text('Your eyes meet that of a girl who immediately breaks into a smile. She\'s pretty cute, too. And, by the looks of it, alone.');
  scene.actions([
    { label: 'Go over to meet her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anastasia/nastja.jpg');
    // TODO-QSP: dynamic text: You: "Hi, I'm <<$pcs_nickname>>. Do you mind if I take a seat?"
    scene.text(`You: "Hi, I'm ${((s as any).pcs_nickname ?? 0)}. Do you mind if I take a seat?"`);
    scene.text('Girl: "Not at all! I\'m Anastasia, but you can call me Nastya."');
    scene.actions([
      { label: '"Do you mind if I ask why you\'re in this restaurant without a companion?"', handler: (st: GameState) => {
    ((s as any).npc_QW ?? {})['A192'] = 1;
    qspCall(s, 'telefon', 'AddContact', 'A192', 'icon_nastja', 0);
    // TODO-QSP: gs 'telefon', 'SetOutCallSchedule', 'A192', "gs 'nastja', 'start'", "hour >= 8 and hour < 20"
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anastasia/nastja.jpg');
    scene.text('Nastya gives you a coquet smile: "I could ask you the same question."');
    scene.text('Your grin is no less sassy: "Well, I heard that the chef has a weakness for women who have been stood up by their dates - his chocolate cake is supposed to be better than sex."');
    scene.text('She chuckles. "Really? I heard the same thing about the waiter and free champagne. Between the two of us, we might be able to get a free meal."');
    scene.text('');
    scene.text('Of course, the meal ends up costing both of you but you spend the next hour talking to and laughing with Nastya, thinking of more and more outrageously unlikely stories to tell each other while you enjoy the other\'s company. Before leaving, you exchange phone numbers and agree to meet again on Saturday - hopefully somewhere less expensive.');
    scene.actions([
      { label: 'Leave', goto: ['restoran', 'zal'] },
    ]);
  } },
    ]);
  } },
    { label: 'Leave', goto: ['restoran', 'zal'] },
  ]);
  scene.build();
}

function enterPos4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/tel_talk.jpg');
  scene.text('You feel a little nervous for some reason as you dial the number the woman from the restaurant - Nastya - gave you. After four rings, a familiar voice answers.');
  scene.text('');
  // TODO-QSP: dynamic text: You: "Nastya, hello. It's <<$pcs_nickname>>. We met at the restaurant?"
  scene.text(`You: "Nastya, hello. It's ${((s as any).pcs_nickname ?? 0)}. We met at the restaurant?"`);
  // TODO-QSP: dynamic text: Nastya: "Oh, hi, <<$pcs_nickname>>! Of course I remember! How are you?"
  scene.text(`Nastya: "Oh, hi, ${((s as any).pcs_nickname ?? 0)}! Of course I remember! How are you?"`);
  scene.text('You: "I\'m great, thank you. Listen, do you wanna do something today?"');
  scene.text('Nastya: "Yes, with pleasure. How about you tell me where you are and I\'ll be with you as soon as I can?"');
  scene.text('');
  scene.text('You tell Nastya where she can find you and hang up. Sure enough, Nastya only needs a few minutes to pick you up in a taxi and suggests that you go to a cafe.');
  scene.actions([
    { label: 'Go to a cafe', goto: ['nastja', 'pos5'] },
  ]);
  scene.build();
}

function enterPos5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).npc_QW ?? {})['A192'] = 2;
  // TODO-QSP: gs 'telefon', 'SetOutCallSchedule', 'A192', "gs 'nastja', 'start'", "hour >= 8 and hour < 20"
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/1party0.jpg');
  scene.text('You arrive at a karaoke cafe called "Mast".');
  scene.text('');
  scene.text('Nastya: "I like it here. It has a brilliant atmosphere and you can sing and enjoy the best view on the river. Can take a table on the veranda? I love sitting outside."');
  scene.text('You find an unoccupied table with a beautiful view of the waterfront and quickly claim it before somebody else can.');
  // TODO-QSP: dynamic text: Nastya: "<<$pcs_nickname>>, what do we want to drink?"
  scene.text(`Nastya: "${((s as any).pcs_nickname ?? 0)}, what do we want to drink?"`);
  scene.actions([
    { label: '"Champagne!", you grin, remembering her words at the restaurant', goto: ['nastja', 'pos6'] },
    { label: '"Let\'s have some vodka!"', goto: ['nastja', 'pos7'] },
    { label: '"I don\'t really drink alcohol…"', goto: ['nastja', 'pos8'] },
  ]);
  scene.build();
}

function enterPos6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/1shamp0.jpg');
  scene.text('You ask the waitress to bring you salads and a bottle of champagne and have a nice, long chat with Nastya. It turns out you two have a lot in common. At some point, Anastasia admits that she\'s a bit of an "attention whore".');
  scene.text('Considering the outfit she wears, you have no trouble believing her. But with a stunning build such as hers, she wouldn\'t have trouble attracting attention even if she dressed like a nun.');
  scene.text('By the time you two have finished your second bottle of champagne together, you are intoxicated enough to think that your sexual escapades might be an appropriate topic.');
  scene.text('You decide to…');
  scene.actions([
    { label: '… skip that subject and keep listening to Nastya.', goto: ['nastja', 'pos9'] },
    { label: '… talk about the best sex you\'ve ever had.', goto: ['nastja', 'pos10'] },
    { label: '… share every detail of your female sexuality with her.', goto: ['nastja', 'pos10'] },
  ]);
  scene.build();
}

function enterPos7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/1party.jpg');
  scene.text('You have the waitress bring salads, starters and vodka. You have a lot of fun chatting with Nastya and, as it turns out, you have a lot in common. Anastasia says that she likes to be the center of attention, that she loves it when men look at her. "And sometimes… I show them a little more than I should…", she whispers with a conspiratorial grin.');
  scene.text('Considering the outfit she wears, you have no trouble believing her. But with a stunning build such as hers, she wouldn\'t have trouble attracting attention even if she dressed like a nun.');
  scene.text('Meanwhile, the bottle of vodka is half empty and you are intoxicated enough to think that your sexual escapades might be an appropriate topic.');
  scene.text('You decide to…');
  scene.actions([
    { label: '… talk about the best sex you\'ve ever had.', goto: ['nastja', 'pos10'] },
    { label: '… share every detail of your female sexuality with her.', goto: ['nastja', 'pos11'] },
  ]);
  scene.build();
}

function enterPos8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (30);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/1shamp0.jpg');
  scene.text('"Oh… Really? Well… alright, then let\'s have some tea." Even though Nastya is taken aback at first, she quickly recovers and smiles at you reassuringly.');
  scene.text('');
  scene.text('The waitress brings you salads, tea and sweets and you have a nice, long chat with Nastya. Anastasia says that her father is a very powerful man in St. Petersburg and, as a result, she has been getting just about everything she could possibly want since she was a child. But that only made her appreciate the "simple pleasures" more: She tells you that she likes to be the center of attention.');
  scene.text('Considering the outfit she wears, you have no trouble believing her. But with a stunning build such as hers, she wouldn\'t have trouble attracting attention even if she dressed like a nun.');
  scene.text('Despite the lack of alcohol, you two have a wonderful time. As you leave the cafe, Nastya insists that she pay the bill herself. You went out and waited for a taxi but before one can show up, Nastya points to a set of monkey bars near the cafe as if she has only just noticed them and happily exclaims:');
  scene.text('"I haven\'t played with those for, like, at least ten years! Come on, let\'s have some fun!"');
  scene.actions([
    { label: 'Go with Nastya', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anastasia/1turnik.jpg');
    scene.text('One of the bars is occupied by a teenage boy who probably lives somewhere around here. Nastya jokingly nudges him with her high heels so he falls off before she grabs the horizontal bar he just occupied and hangs so that her breasts are right in front of the poor boy who stares wide-eyed. Then she pulls herself up, apparently without effort, and kicks her leg up for a backflip - both you and the boy open your mouth at her strength, gymnastic skill… and her clearly visible panties.');
    scene.text('After a few more loops around it, she jumps off the bar, pats the boy\'s cheek and, giggling, takes you by the hand and pulls you into the taxi that just happened to pass by.');
    scene.text('If you needed any more clarification, you now know the center of what kind of attention she likes to be!');
    qspCall(s, 'arousal', 'erotic', 60, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Say goodbye and go home', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPos9(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/nastja.jpg');
  scene.text('You two have a wonderful time. As you leave the cafe, Nastya insists that she pay the bill herself. You go out and wait for a taxi but you can tell that Anastasia is a little tense and she soon tells you why.');
  // TODO-QSP: dynamic text: Nastya: "<<$pcs_nickname>>, I REALLY have to pee… I'll just go real quick by tha...
  scene.text(`Nastya: "${((s as any).pcs_nickname ?? 0)}, I REALLY have to pee… I'll just go real quick by that fence behind the building, and you have to stand guard, okay?"`);
  scene.text('You: "Why make it so complicated? We can just go back into the cafe, you know?"');
  scene.text('Nastya: "No, no, I can\'t. I really gotta go, right now!"');
  scene.text('With these words, she runs around the corner, leaving you confused and awkward.');
  scene.actions([
    { label: 'No choice but to wait for Nastya…', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anastasia/1shamp3.jpg');
    scene.text('As luck would have it, a tubby little man approached and from what you can tell, he is headed in the same general direction Nastya disappeared in.');
    scene.actions([
      { label: 'Warn Nastya', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You do the only sensible thing: You hurry after Nastya to warn her; you both hide in a dark corner until the man has passed you, then Nastya quietly finishes her business.');
    // TODO-QSP: dynamic text: Nastya: "Thank you, <<$pcs_nickname>> - I feel much better now. If you have to p...
    scene.text(`Nastya: "Thank you, ${((s as any).pcs_nickname ?? 0)} - I feel much better now. If you have to pee, too, I can stand guard."`);
    scene.actions([
      { label: 'Go and pee out in the open too', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anastasia/1shamp1.jpg');
    scene.text('You go to the same corner and start emptying your bladder when you suddenly hear loud, male voices… that are obviously addressing YOU.');
    scene.text('"Holy shit, what a beauty!"');
    scene.text('"Hey, what are you doing there, girl? Can\'t you piss at home?! Damn it, we\'ve got to clean that up!"');
    scene.text('');
    scene.text('Mortified, you turn to see two migrant workers who seem to be the janitors of this place! So much for Anastasia\'s skills as a lookout…');
    scene.img('images/characters/city/anastasia/1shamp4.jpg');
    scene.text('You stammer: "Oh, oh, oh! Please, don\'t look!" And as you do, you clumsily try to pull your panties up. But your hands are shaking with… excitement and if you just bent over a little, you\'d be showing your crotch to these two men…');
    scene.actions([
      { label: 'Bend and lift your dress a little', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anastasia/1shamp2.jpg');
    scene.text('The janitors inhale sharply as you show them a little bit more. They are so stunned by your boldness that you have no trouble pushing past them and getting out of there.');
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Run out and hop into a taxi with Nastya', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Hide and see what happens next', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('Instead of warning Nastya, you skirt around the fence behind which Nastya hides. A minute passes without event. Then, suddenly:');
    scene.text('"Girl, you should be ashamed of yourself!", you hear the voice of man, though he sounds a little happier than seems appropriate for his scolding words.');
    scene.text('"Wha-? WHAT THE HELL?!", you hear Nastya yell, "Turn away! Look away!" Through a crack in the fence, you watch Nastya, her ass still bare as she frantically tries to pull up her panties.');
    scene.img('images/characters/city/anastasia/1shamp2.jpg');
    scene.text('You hurry back to where she left you. A minute later, she comes around the corner, red as a lobster but with a strange smile: "Some stranger just caught me with my ass bare, right out in the open. Can you believe it?');
    qspCall(s, 'arousal', 'voyeur', 60, 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get a cab and go home', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPos10(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/1shamp0.jpg');
  scene.text('You tell Anastasia a little bit about your best sexual experiences and she seems to be very interested in the topic. For everything you tell her, she reveals an equally intimate detail about her sexual experiences with men.');
  scene.text('"And sometimes, I like to have fun with women, too", she says with a wink.');
  scene.text('You two have a wonderful time. As you leave the cafe, Nastya insists that she pay the bill herself. You walk out on unsteady legs and wait for a taxi.');
  scene.text('"Hey, I know how we can get a ride faster", Nastya slurs suddenly, "Watch!"');
  scene.actions([
    { label: 'See what Anastasia does', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anastasia/1avtostop.jpg');
    scene.text('You watch Nastya slip out of her dress and walk around on the lane in nothing but her string and high heels, giving you a perfect view of her gorgeous body and firm tits.');
    scene.text('She\'s crazy, you think to yourself in shock and admiration. Fortunately, nobody else seems to be out on this street right now, not even a car - this sight of her is all yours and remains that way because, after a while, the adrenaline seems to have worn off - or perhaps she\'s getting cold - and Anastasia puts her dress on again and gives you a happy, drunk smile.');
    scene.text('If you needed any more clarification, you now know the center of what kind of attention she likes to be!');
    scene.text('Only a short while later, a taxi comes by and you both take a seat inside, giggling in your secret knowledge of what happened minutes earlier.');
    qspCall(s, 'arousal', 'erotic_nudity', 60, 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Let the taxi take you home', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPos11(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/1party2.jpg');
  scene.text('You tell Anastasia about your sexual experiences and you don\'t hold back either. Everything you\'ve done or had done to you that you\'ve enjoyed is brought up and shared with this woman you only recently met, holding back virtually nothing about your female sex life. When you start talking, you\'re half afraid you might scare her away but the topic is right up her alley. In fact, for every encounter you describe to her, she sees yours and raises you an equally or even more intimate and saucy detail about her sexual experiences with men.');
  scene.text('"And sometimes, I like to have fun with women, too", she says with a wink, biting her lower lip.');
  scene.text('You two have a wonderful time - maybe a little too much of it, because by the time you want to leave, you\'re both having trouble getting up from the table, let along walking out of the cafe. Nastya insists that she pay the bill herself and don\'t dare to protest, secretly grateful that you don\'t have to fumble with your purse in your state. You stagger outside, arm in arm, and don\'t break the embrace when you reach the street.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, let's take a walk along the shore", Nastya suggests. You don...
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, let's take a walk along the shore", Nastya suggests. You don't know if a walk is really in the cards for you but you wouldn't mind that walk either.`);
  scene.actions([
    { label: 'Head down to the river.', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anastasia/1party3.jpg');
    scene.text('You walk down a set of stairs to reach the river bank and stroll unevenly along the waterfront, talking and laughing, until your friend stops.');
    scene.text('"Hey, how about we refresh ourselves a little bit? I haven\'t gone swimming at all this summer."');
    scene.text('"What? But the water\'s gotta be freezing right now!", you protest but Nastya is already knee-deep in the water, squealing as she goes.');
    scene.text('"Oh my god, it\'s so cold!" "Told you so!", you call out, but Nastya only sticks her tongue out at you and gestures for you to follow her as she pulls off her dress to keep it from getting wet, showing you her boobs in the process.');
    scene.text('You hesitate a little bit but you don\'t want to be left behind, just because she does something slightly crazy, so you take your clothes off and go after her, playing around with her in the water in your wet underwear.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    qspCall(s, 'arousal', 'foreplay', 10, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Splish splash', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anastasia/1party4.jpg');
    scene.text('You don\'t pay attention to your surroundings but, evidently, Nastya does because after a while, she covers her breasts and points somewhere a little down the river and exclaims: "Hey, there\'s somebody watching us!"');
    scene.text('Instead of terrifying you, that thought only serves to excite you in your drunk state and you reply: "Then let\'s enjoy the attention!"');
    scene.text('With these words, you tear off your bra and whirl it around like a lasso, revealing your breasts to Nastya and your audience. It\'s all the encouragement she needs to drop her arm and give you and the world unrestricted access to her tits once again.');
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anastasia/1party5.jpg');
    scene.text('As much as you enjoy this revealing experience, you both soon begin shaking from the cold and in a moment of clarity, you decide to leave before you catch a cold or your observer decides to come over.');
    scene.text('Cold, wet, but a little more sober than before, you get dressed again, walk back to the road and look for a cab.');
    scene.actions([
      { label: 'Wait for a taxi', handler: (st: GameState) => {
    scene.img('images/characters/city/anastasia/1party6.jpg');
    scene.text('While you wait, you and Nastya sit down on the curb, leaning on each other. You barely feel how hard the ground is, you\'re no longer cold and you feel very sleepy all of a sudden.');
    scene.text('…');
    scene.text('"Hey! Hey, get up, young lady, it\'s time to go home!", a male voice rouses you from you nap. Nastya and a man are standing next to you, a taxi standing right behind them. The situation wouldn\'t have been particularly noteworthy if it wasn\'t for the fact that you had apparently spread your legs wide open while you were asleep, giving the taxi driver and every passersby a perfect view of your soaked panties. Couldn\'t Nastya have put your legs together?!');
    scene.text('Red with shame, you scramble to your feet and get into the taxi with Nastya, avoiding the driver\'s gaze in the inside mirror.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Let the taxi take you home', goto: ['city_residential', ''] },
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

function enterPos12(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'mood', 'raise', 'medium');
  ((s as any).npc_QW ?? {})['A192'] = 3;
  // TODO-QSP: gs 'telefon', 'SetOutCallSchedule', 'A192', "gs 'nastja', 'start'", "hour >= 8 and hour < 20"
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/tel_talk.jpg');
  scene.text('It rings two, three, four times before Anastasia picks up.');
  scene.text('');
  scene.text('You: "Hello Nastya! How are you?"');
  // TODO-QSP: dynamic text: Nastya: "Hi <<$pcs_nickname>>! I'm great, thanks for asking." There is a short, ...
  scene.text(`Nastya: "Hi ${((s as any).pcs_nickname ?? 0)}! I'm great, thanks for asking." There is a short, awkward pause before she continues with audible excitement: "Last Saturday was AMAZING. I couldn't think of anything else since."`);
  scene.text('You sigh with relief and laugh: "Me neither. I loved it. We should go out again."');
  scene.text('Nastya: "How about today? I was going to go down to the beach, sunbathe, swim, show off my new bikini… Do you want to come?"');
  scene.text('You: "Of course! I\'ll meet you there in a bit."');
  scene.text('Nastya: "I can\'t wait."');
  scene.actions([
    { label: 'Hang up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPos13(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'medium');
  (s as any).nastjaday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/tel_talk.jpg');
  scene.text('After a few rings, Anastasia answers the phone.');
  scene.text('');
  // TODO-QSP: dynamic text: You: "Nastya, hi, it's <<$pcs_nickname>>! What's new?"
  scene.text(`You: "Nastya, hi, it's ${((s as any).pcs_nickname ?? 0)}! What's new?"`);
  // TODO-QSP: dynamic text: Nastya: "Hello <<$pcs_nickname>>! Oh, nothing much. I was just about to…"
  scene.text(`Nastya: "Hello ${((s as any).pcs_nickname ?? 0)}! Oh, nothing much. I was just about to…"`);
  scene.text('You spend the next half hour chatting, talking about this and that. Nastya reveals to you that she loves to be photographed. You fantasise about the two of you going out into the countryside and having an impromptu photo shoot.');
  scene.text('She tells you that she has spare time on Saturdays and you should ring her if you want to do something any Saturday.');
  scene.actions([
    { label: 'Hang up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPos14(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'medium');
  (s as any).nastjaday = ((s as any).daystart ?? 0);
  ((s as any).npc_QW ?? {})['A192'] = 4;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/2hello.jpg');
  scene.text('You recognize Nastya as soon as you walk onto the lake\'s beach: After two meetings, you start to doubt that she even has any dress that isn\'t cut revealingly short and you wonder how she can just keep going out without feeling self-conscious - and you secretly admire her for that.');
  // TODO-QSP: dynamic text: Nastya greets you with feigned impatience. "Finally, I'm tired of waiting alread...
  scene.text(`Nastya greets you with feigned impatience. "Finally, I'm tired of waiting already! Come on, ${((s as any).pcs_nickname ?? 0)}, let's put on those swimsuits."`);
  scene.actions([
    { label: 'Go to the changing booths', goto: ['nastja', 'pos15'] },
  ]);
  scene.build();
}

function enterPos15(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/2bcabin.jpg');
  scene.text('You come to the booths and are not impressed. They definitely looked better in your memory.');
  scene.text('Nastya: "Yeah… I definitely wouldn\'t want to live in them." Nastya looks at them as if she expects them to crumble any moment.');
  scene.text('You shrug: "Nothing we can do about it. Go get changed, I\'ll wait for you."');
  scene.text('Nastya raises an eyebrow at you. "What about you?"');
  scene.text('You: "I already put my swimsuit on at home."');
  scene.text('"Smart", she comments and goes inside.');
  scene.actions([
    { label: 'Wait for Anastasia', goto: ['nastja', 'pos16'] },
  ]);
  scene.build();
}

function enterPos16(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/2bgirl.jpg');
  scene.text('While waiting for Nastya, you decide to take a look around nearby and inspect the beach and its people. You can tell from afar where the nudist beach begins because there\'s a naked girl out in the water. She is incredibly well built and you don\'t have to check to know that just about every men on the beach has his eyes on her. You find yourself imagining what it would be like to be in that woman\'s place and the thought of being naked in front of a crowd like this excites you a little.');
  scene.text('You\'re shaken out of your reverie when you hear Nastya come up behind you. "I\'m ready! Hey, what are you staring at?" Blushing a little, you don\'t turn towards Anastasia but simply point out the naked girl. At first Nastya looks surprised. Then, a sly smile curls her lips and you see a twinkle in her eyes. You\'re sure that your friend\'s thoughts would make you blush even more than your own.');
  scene.text('You: "Come, let\'s find a place where we can sunbathe."');
  qspCall(s, 'arousal', 'erotic_nudity', 10, 'exhibitionism');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Find a good spot', goto: ['nastja', 'pos17'] },
  ]);
  scene.build();
}

function enterPos17(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'large');
  if (((s as any).PCloInhibit ?? 0) + 10 > ((s as any).pcs_inhib ?? 0)) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/2bimbos.jpg');
  scene.text('You have a great time on the beach: You swim and play around in the water, you sunbathe, reading, chatting or snoozing as you do, drink milkshakes that Nastya brought along from home and take a couple of photos with the lake in the background. It is a thoroughly enjoyable, exhausting time and you are starting to wonder if you shouldn\'t go home soon when Nastya speaks up.');
  scene.text('Nastya: "That girl we saw bathe naked earlier… Would you be able to do that? Like, undress in front of complete strangers?" That sly smile is back on her face as she asks you.');
  scene.text('You feel torn. On one hand, it\'s scary and your modesty and self-consciousness hold you back - what would people think or say if you just up and undressed right here and now? But on the other hand, you DID fantasize about it earlier and your insides tingle at the thought of revealing yourself like that.');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the water.');
  }
  scene.actions([
    { label: 'Admit that you thought about it', goto: ['nastja', 'pos19'] },
    { label: 'Claim you are not interested in that', goto: ['nastja', 'pos18'] },
  ]);
  scene.build();
}

function enterPos18(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/2bend.jpg');
  scene.text('You let reason win over excitement this time: "I don\'t think that it\'s okay to show your body to strangers. And it can be dangerous: Somebody could think you\'re easy and start molesting or raping you. Besides, cellphones have really good cameras now and if you do something like that, somebody can just take a photo and put it on the internet."');
  scene.text('"Yeah, maybe you\'re right", Nastya reluctantly agrees, though you can tell that she\'s disappointed by your answer. She sighs heavily. "It\'s just a fantasy."');
  scene.text('You talk about a few more fantasies and issues like molestation but soon decide that it\'s time to pack your things and head home.');
  scene.actions([
    { label: 'Leave the beach and go home', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterPos19(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'mood', 'raise', 'large');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (30);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/2btalk.jpg');
  scene.text('It might not be the smartest thing to do, given what you know about Anastasia\'s exhibitionist streak, but that is probably why you want to confide in her.');
  scene.text('You: "I… fantasized about it. The idea of being watched is exciting. But… some people probably wouldn\'t like it, like those old ladies over there - you should have heard what they called that girl from earlier. And with so many cellphones around, there is such a big risk somebody will take a photo and put it on the internet." You avoid Nastya\'s gaze for a moment. You just named several good reasons why you absolutely shouldn\'t be naked in public. But… "But… I think I really want to try it."');
  scene.text('Nastya gives you her warmest smile yet and her eyes are positively sparkling with excitement: "I have an idea. A dare, to see how brave we are. You see those guys playing ball over there? How about we go and join them… topless?"');
  scene.text('You are left speechless by her suggestion and look around. The beach is teeming with people, many of them men and teenage boys. Sure, you admired that woman out there in the water but she wasn\'t right in the thick of it like you\'d be. The thought alone is enough to make you blush and you want to call the whole thing off but Anastasia has already untied the straps of her bikini top and pulls it off, revealing her firm breasts to the sun and curious views of the beach. As reluctant as you are, you don\'t want to chicken out now.');
  scene.actions([
    { label: 'Bare your breasts, right here on the beach', goto: ['nastja', 'pos20'] },
  ]);
  scene.build();
}

function enterPos20(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'mood', 'raise', 'medium');
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 5) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/2bvolley.jpg');
  scene.text('Ants seem to be crawling all over your skin and your fingers feel numb as you undo the top of your swimsuit. It takes you unusually long, perhaps because there\'s already so much attention on you because of Nastya, but you finally win the fight and the next moment, you are topless, just like your friend.');
  scene.text('You can hardly believe it: Nastya and you are standing in the midst of the beach, your chests bare. You can literally feel everybody staring at you and every hair on your body seems to be standing on end.');
  scene.text('"Where are you looking at, you dog!", you hear an angry female voice nearby, followed by a thud. A woman hit her husband or boyfriend over the head with the magazine she\'d been reading. Apparently, the sight of two young, half-naked beauties was all it took for him to forget about his partner.');
  scene.text('Nastya is breathing as heavily as you are, her voice quivering with fear and excitement: "Well nobody\'s arrested us yet and we haven\'t been struck by lightning either, so… let\'s go and play."');
  scene.text('So you do. The guys and girls are more than happy to let you join - the boys perhaps a little happier than the girls. The game is fun and you could almost forget about your nakedness if it wasn\'t for how ridiculously your breasts were bouncing around during the game, much to the boys\' delight and the girls\' envy.');
  qspCall(s, 'arousal', 'flash', 20);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish the game and return to your spot', goto: ['nastja', 'pos21'] },
  ]);
  scene.build();
}

function enterPos21(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  ((s as any).npc_QW ?? {})['A192'] = 5;
  // TODO-QSP: gs 'telefon', 'SetOutCallSchedule', 'A192', "gs 'nastja', 'start'", "hour >= 8 and hour < 20"
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/2bslp.jpg');
  scene.text('After running and jumping around like that in everybody\'s plain view, sitting down and lying back topless isn\'t enough to make you feel shy and neither you nor Nastya have any qualms about spreading your arms and showing off your bodies to everyone as you sunbathe once again.');
  // TODO-QSP: dynamic text: Nastya whispers to you: "<<$pcs_nickname>>, just imagine how horny all these guy...
  scene.text(`Nastya whispers to you: "${((s as any).pcs_nickname ?? 0)}, just imagine how horny all these guys are for us right now. It feels so… empowering."`);
  scene.text('You enjoy the sun and atmosphere of the beach a little longer and then decide that it\'s time to go home. Today turned out much more exciting than you expected…');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Head home', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterPos22(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'mood', 'raise', 'large');
  ((s as any).npc_QW ?? {})['A192'] = 6;
  // TODO-QSP: gs 'telefon', 'SetOutCallSchedule', 'A192', "gs 'nastja', 'start'", "hour >= 8 and hour < 20"
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/tel_talk.jpg');
  scene.text('Anastasia answers after a few rings, but she doesn\'t sound anywhere near as upbeat as usual.');
  scene.text('Nastya: "Hello?"');
  scene.text('You: "Nastya, hi! How is it going? Are you alright?"');
  scene.text('Nastya: "Oh, hi! Yeah, I\'m okay. Just some trouble at work, is all."');
  scene.text('You: "Must be pretty big trouble if it gets you down like that. Do you want to come over? We\'ll open a bottle of wine and you tell me everything about it."');
  // TODO-QSP: dynamic text: Nastya: "That's so sweet of you, <<$pcs_nickname>>. Yeah, of course I'll come. S...
  scene.text(`Nastya: "That's so sweet of you, ${((s as any).pcs_nickname ?? 0)}. Yeah, of course I'll come. See you in a bit!"`);
  scene.actions([
    { label: 'Hang up', goto: ['nastja', 'pos23'] },
  ]);
  scene.build();
}

function enterPos23(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
  }
  (s as any).nastjaday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/nast_home.jpg');
  scene.text('After about half-hours doorbell rings.');
  scene.text('You see Nastya, without makeup and in a casual outfit that isn\'t quite as revealing as her dresses. She looks cute.');
  scene.text('You have Nastya take a seat on the couch, open a bottle of wine and start talk as freely and openly as you always do, switching between everyday topics and your most closely guarded secrets like it\'s nothing.');
  scene.text('From the conversation, you gather that just about everybody Anastasia knows thinks that she is beautiful and you agree with them. She is a good student and is constantly looking for something new in her life. She has quite a strong character - you\'ve watched her engage people older than her in discussions (both at the beach and in the cafe) and hold her own in every sense of the word. She is a little arrogant, which is understandable, given her father and how gifted she is, but that doesn\'t prevent her from making friends, good friends, which she has dozens of.');
  scene.text('But despite all of her qualities, Nastya hasn\'t kept any job for more than a couple of months: Either she\'s been fired under various pretenses or she quit because "that line of work just wasn\'t for me".');
  scene.text('You: "I don\'t get it, though. You like your coworkers, you said you\'re having fun at work and the way you describe it, the company you\'re with sounds amazing. I\'d be happy to have a job like that!');
  scene.text('Nastya: "I know, I know it sounds like that. But, you see…');
  scene.actions([
    { label: 'Continue the conversation', goto: ['nastja', 'pos24'] },
  ]);
  scene.build();
}

function enterPos24(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).pcs_energy = 10;
  (s as any).pcs_hydra = 20;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'drugs', 'alcohol', 'wine');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 21) + 10);
  qspCall(s, 'stat', '');
  scene.img('images/shared/drinks/redwine.jpg');
  scene.text('About two hours later…');
  scene.text('');
  scene.text('You: "You know what? I\'m really starting to get hungry. How about we order pizza? I don\'t wanna cook today."');
  scene.text('Anastasia agrees, laughing as her stomach rumbles, and you call to order a large pizza that should be there in about half an hour.');
  scene.text('');
  scene.text('As you hang up, you see that twinkle in Nastya\'s eyes again and already half-know what she\'s thinking about.');
  // TODO-QSP: dynamic text: Nastya: "<<$pcs_nickname>>, I just had a fun idea. I 've seen this on the intern...
  scene.text(`Nastya: "${((s as any).pcs_nickname ?? 0)}, I just had a fun idea. I 've seen this on the internet: A girl orders a pizza and then wraps up her naked body in a towel, like she just came out of the shower, and answers the door. And when she's paid and is about to close the door, she 'accidentally' drops the towel. I've been fantasizing about this for such a long time but if I did that at my place, I could get into really big trouble because of my father. But… you aren't scared like me, are you?"`);
  if (((s as any).pcs_inhib ?? 0) >= 50) {
    // TODO-QSP: act 'That sounds exciting - Agree': gt 'nastja', 'pos26'
  }
  scene.actions([
    { label: 'Chicken out', goto: ['nastja', 'pos25'] },
  ]);
  scene.build();
}

function enterPos25(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (80);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
  qspCall(s, 'money', 'pay', 100);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/nast_home.jpg');
  // TODO-QSP: dynamic text: Nastya: "Awww… You're such a buzzkill, <<$pcs_nickname>>." She sounds genuinely ...
  scene.text(`Nastya: "Awww… You're such a buzzkill, ${((s as any).pcs_nickname ?? 0)}." She sounds genuinely disappointed but she's too cheerful a person to let it keep her down for long.`);
  scene.text('You pass the half hour, chattering as if nothing happened, eat the pizza once it gets delivered - Nastya kept hoping you\'d flash the delivery guy, to no avail - and after giving your meal a little time to settle in your stomachs, Nastya calls a taxi and goes home.');
  scene.actions([
    { label: 'You are home alone again', goto: ['korr', ''] },
  ]);
  scene.build();
}

function enterPos26(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/nast_home.jpg');
  scene.text('You laugh and feel anxious excitement fill you: "I don\'t know, I never thought about it… but it sounds fun. Yeah, we can do that. But who\'s gonna answer the door, you or me?"');
  scene.text('Nastya: "How about we both get naked, put on towels and then decide at the last minute?"');
  scene.text('');
  scene.text('You discuss your shameless plan a while longer, spend some time trying to find towels that are short enough for your sexy purpose but not so short that it looks like you\'ve planned this, giggle and imagine how he\'s going to react, and by the time the doorbell rings, you\'ve barely even gotten naked. You look at Nastya who was a little slower than you and is standing in her underwear. And as your earlier search turned out, you only have one suitable towel.');
  scene.text('The two of you look at each other, trying to decide who\'s going to do it.');
  scene.actions([
    { label: 'Your house, your towel - Go and answer the door', goto: ['nastja', 'pos27'] },
    { label: 'Smile at Nastya - Let her live her fantasy', goto: ['nastja', 'pos29'] },
  ]);
  scene.build();
}

function enterPos27(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/2del.jpg');
  scene.text('You go into the hall and ask who\'s there. The obvious response: "Pizza delivery."');
  scene.text('You open the door to a friendly-looking young man with a nice smile and a deliciously-smelling pizza.');
  scene.text('His smile falters, though, when he realizes that you are wearing nothing but a bath towel and it\'s replaced by a look of confusion but he regains his composure after a moment and, with a smile, tells you how much you owe him.');
  scene.text('Your grip on the towel isn\'t too firm and you kinda like how it gradually slips further down, revealing more and more of your bust, but you also realize that this could get really awkward if you dropped it too soon. Still, as you turn to get the money out of your wallet, the towel reveals your bare legs and a bit of your ass, too, and for a tantalizing moment, you completely let go of the towel to rummage in the purse, leaving it up to fate whether it\'s gonna fall or not - it doesn\'t, much to the guy\'s chagrin. Nastya is nowhere to be seen but you think you can hear a little chuckle from the living room. When you return to the front door, you notice that the delivery guy curiously inspects your apartment from the threshold, but, seeing you return, immediately focuses on you and your outfit.');
  qspCall(s, 'arousal', 'flash', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Give him the money', goto: ['nastja', 'pos28'] },
  ]);
  scene.build();
}

function enterPos28(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'flash', 'full', 'indoors', 2, 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/towel.jpg');
  scene.text('You hold out your hand with the delivery guy\'s payment and, gathering your resolve, let the towel fall to the ground. "Oh", you exclaim, feigning shock as you still hold out your hand with the money, but the man doesn\'t seem to care about compensation for his work right now, his eyes glued to your naked body. Seeing how he isn\'t moving, you make a show of turning around and slowly bending over to pick up the tower, revealing your ass and bare pussy to him while your heart beats so hard in your chest that you think it might crack a couple of ribs. The guy watches unashamedly as you deliberately wrap the towel around you once more and offer him the money again, your face flushed with shame and arousal.');
  scene.text('Only now that you have covered yourself, does he snap out of it, reluctantly takes the money.');
  scene.text('"Oh, I\'m so sorry! I don\'t know how that could happen", you stammer - you\'re really having trouble finding the right words after what happened but you sound way too happy to seem sorry.');
  scene.text('It\'s obvious he didn\'t mind, though: "Oh, don\'t be, miss. It happens. And… you do have a really beautiful body." He gives you a sheepish grin and shoots you several longing looks as he walks away.');
  qspCall(s, 'arousal', 'flash', 10);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Close the door', goto: ['nastja', 'pos30'] },
  ]);
  scene.build();
}

function enterPos29(s: GameState, scene: SceneBuilder): void {
  (s as any).exhibi = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/2nastdel.jpg');
  scene.text('You give Anastasia and encouraging smile. She understands, blushes, takes a deep breath and then walks out to answer the door in her underwear. You peek out of the living to see what happens.');
  scene.text('Delivery guy: "Hi, here\'s… your pizza." The young man seems taken aback and but you can tell that he is taking in every detail of Nastya\'s gorgeous body he can see.');
  scene.text('Nastya responds in her sultriest voice: "Finally something to fill me up…" You can\'t see it but you imagine that she licked her lips as she spoke and it takes all of your resolve to not burst out into laughter at the face the delivery guy makes');
  scene.text('Between her gathering the money to pay him and him taking his time counting it, about two minutes pass in almost complete silence. By the end, it seems like he wanted to speak up but nothing came out. Nastya gave him one last good look at her cleavage, thanked him and then slammed the door shut, almost hitting his nose.');
  qspCall(s, 'arousal', 'erotic', 10, 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Slam!', goto: ['nastja', 'pos30'] },
  ]);
  scene.build();
}

function enterPos30(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (80);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/towel.jpg');
  scene.text('Nastya beams at you. "That was the most exciting thing ever!"');
  if (((s as any).exhibi ?? 0) === 1) {
    scene.text('You: "And I filmed it all on your phone!"');
  } else {
    // TODO-QSP: dynamic text: Nastya: "And I filmed everything. Don't worry, <<$pcs_nickname>>, I didn't catch...
    scene.text(`Nastya: "And I filmed everything. Don't worry, ${((s as any).pcs_nickname ?? 0)}, I didn't catch your face."`);
  }
  scene.text('You talk about this experience and watch the video over and over again. You are so caught up in your exhibitionism that your stomachs have to rumble again before you remember to eat.');
  scene.text('Even though only one of you could reveal himself like this, you both know now that love exposing yourself in public and it is quite a rush to let strangers see you naked.');
  scene.text('You had a great time together and before Nastya leaves, you have to promise her that you are going to give her a call soon.');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'You are home alone again', goto: ['korr', ''] },
  ]);
  scene.build();
}

function enterPos31(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'mood', 'raise', 'large');
  ((s as any).npc_QW ?? {})['A192'] = 7;
  // TODO-QSP: gs 'telefon', 'SetOutCallSchedule', 'A192', "gs 'nastja', 'start'", "hour >= 8 and hour <= 20"
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anastasia/tel_talk.jpg');
  scene.text('Anastasia answers the phone after the first ring.');
  // TODO-QSP: dynamic text: Nastya: "Hi <<$pcs_nickname>>! I have some news. Remember our pizza delivery cli...
  scene.text(`Nastya: "Hi ${((s as any).pcs_nickname ?? 0)}! I have some news. Remember our pizza delivery clip?"`);
  scene.text('You: "Like I could ever forget it!"');
  scene.text('Nastya: "So… I kinda showed it to my friend, the photographer? Sorry, I know we said we wouldn\'t show it to anybody but I couldn\'t resist! Anyway, he said that he would buy it from me for good money. What do you think?"');
  scene.text('You: "Uh… I guess it\'s… okay. I mean, it doesn\'t reveal who we are, so we should be fine, right?"');
  scene.text('Nastya: "Yeah, absolutely. And I trust him; he\'s gonna keep its origin a secret. It kinda turns me on to know that people are going to see the video."');
  scene.text('Do: "… me too."');
  scene.text('Nastya: "Well, then maybe we should make more pictures and videos like that."');
  scene.text('You: "Are you serious?"');
  // TODO-QSP: dynamic text: Nastya: "Maybe I am, maybe I'm not. Who knows? We'll talk about it next time. Go...
  scene.text(`Nastya: "Maybe I am, maybe I'm not. Who knows? We'll talk about it next time. Gotta run now, ${((s as any).pcs_nickname ?? 0)}. Talk to you soon."`);
  scene.actions([
    { label: 'Hang up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'pos1':
      enterPos1(s, scene);
      break;
    case 'pos4':
      enterPos4(s, scene);
      break;
    case 'pos5':
      enterPos5(s, scene);
      break;
    case 'pos6':
      enterPos6(s, scene);
      break;
    case 'pos7':
      enterPos7(s, scene);
      break;
    case 'pos8':
      enterPos8(s, scene);
      break;
    case 'pos9':
      enterPos9(s, scene);
      break;
    case 'pos10':
      enterPos10(s, scene);
      break;
    case 'pos11':
      enterPos11(s, scene);
      break;
    case 'pos12':
      enterPos12(s, scene);
      break;
    case 'pos13':
      enterPos13(s, scene);
      break;
    case 'pos14':
      enterPos14(s, scene);
      break;
    case 'pos15':
      enterPos15(s, scene);
      break;
    case 'pos16':
      enterPos16(s, scene);
      break;
    case 'pos17':
      enterPos17(s, scene);
      break;
    case 'pos18':
      enterPos18(s, scene);
      break;
    case 'pos19':
      enterPos19(s, scene);
      break;
    case 'pos20':
      enterPos20(s, scene);
      break;
    case 'pos21':
      enterPos21(s, scene);
      break;
    case 'pos22':
      enterPos22(s, scene);
      break;
    case 'pos23':
      enterPos23(s, scene);
      break;
    case 'pos24':
      enterPos24(s, scene);
      break;
    case 'pos25':
      enterPos25(s, scene);
      break;
    case 'pos26':
      enterPos26(s, scene);
      break;
    case 'pos27':
      enterPos27(s, scene);
      break;
    case 'pos28':
      enterPos28(s, scene);
      break;
    case 'pos29':
      enterPos29(s, scene);
      break;
    case 'pos30':
      enterPos30(s, scene);
      break;
    case 'pos31':
      enterPos31(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const nastja: LocationDef = {
  name: 'nastja',
  title: 'Your eyes meet that of a girl who immediately breaks into a ',
  region: 'other',
  enter: enter,
};
