import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A35');
  if (((s as any).cumloc ?? 0)[11] === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/sex/trfatherqw_13.jpg');
    scene.text('As you walk up to your father with a face fully smeared with semen he reacts as expected.');
    scene.text('"Oh for fucks sake, you fucking little whore. Should\'ve figured out you\'re just like that other whore, like mother like daughter. You make me sick, I do not want to see you again.');
    scene.text('As he continues on his rant, you\'re overcome with shame, deciding not to visit him anymore and forget that he ever existed.');
    (s as any).trfatherQW = (-1);
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['Terminal', ''] },
]);
    return;
  }
  if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_18.jpg');
    scene.text('As you come to meet your father he notices the sperm smeared clothes.');
    scene.text('"What the fuck you fucking little whore. Should\'ve figured out you\'re just like that other whore, like mother like daughter. You make me sick, I do not want to see you again.');
    scene.text('As he continues on his rant, you\'re overcome with shame, deciding not to visit him anymore and forget that he ever existed.');
    (s as any).trfatherQW = (-1);
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['Terminal', ''] },
]);
    return;
  }
  if ((!((s as any).trfatherMishaQW ?? 0))) {
    (s as any).trfatherMishaQW = 1;
  }
  if (((s as any).fatherMishaCar ?? 0) > 0) {
    (s as any).fatherMishaCar = 0;
  }
  if (((s as any).trfatherMishaQW ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_14.jpg');
    scene.text('You decide to visit your father since you\'re in the neighborhood. You\'re not sure if he\'s there but you go for it anyway.');
    // TODO-QSP: dynamic text: You knock on the door and after a few seconds you hear someone grabbing the door...
    scene.text(`You knock on the door and after a few seconds you hear someone grabbing the door handle. As he opens the door he's a bit surprised as he wasn't expecting you, "Oh, hello ${((s as any).pcs_nickname ?? '')}…"`);
    scene.text('"Hey dad, have I come by a bad time? I can come back some other time if you\'re busy?"');
    scene.text('Mikhail quickly waves your worries away, "No, don\'t be silly. Come in, come in. What would you like to do?"');
    scene.actions([
      { label: 'The kebab', handler: (st: GameState) => {
    qspCall(st, 'food', 'fast_food');
    scene.actions([
      { label: 'Talk', handler: (st: GameState) => {
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_17.jpg');
    scene.text('The last time you met your father you spent a lot of time talking about yourself and about the family, but now you wanted to hear his side of the story.');
    // TODO-QSP: dynamic text: "Every time you were brought up, <<$npc_nickname[''A29'']>> told me that you alw...
    scene.text(`"Every time you were brought up, ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} told me that you always were drinking and swearing a lot and in the end she could not take it anymore so she filed for divorce. Was she telling me the truth?`);
    // TODO-QSP: dynamic text: "Well <<$pcs_nickname>>, I always knew your mother would be bad talking me, but ...
    scene.text(`"Well ${((st as any).pcs_nickname ?? '')}, I always knew your mother would be bad talking me, but you must believe me while there is some truth to it many things have surely been exaggerated.`);
    scene.text('As your father tells you this, you look in his eyes and can only see sadness…');
    scene.actions([
      { label: 'Support', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_19.jpg');
    scene.text('Without any hesitation you decided to support your father, gently touching the palm of his hand.');
    // TODO-QSP: dynamic text: "Don''t worry dad, I''ve noticed the sadness in your eyes. <<$npc_nickname[''A29...
    scene.text(`"Don't worry dad, I've noticed the sadness in your eyes. ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} changed the story so many times I knew something was off. So tell me the truth, what happened?`);
    scene.text('"So it was difficult time for the both of us. Your mother was always stressed, yelling at me to take better care of the family. And I really tried my best I always gave her what I\'ve earned so she could buy stuff for the two of you. We tried working it out but the whole situation just escalated.');
    scene.text('There was no affection between us anymore and we became cold to each other. At the end she began to mysteriously disappear in the evening just as I came back from work, and I was sure she was cheating on me with someone. As she did that I began to spend more time with my friends, drinking. Yes, sometimes I had a bit too much to drink, but you must understand it wasn\'t a pleasant life we were living…');
    scene.text('You notice that your father is having a hard time with this and you decide to not pry further.');
    (st as any).trfatherMishaQW = 2;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
      { label: 'To the diner', handler: (st: GameState) => {
    qspCall(st, 'food', 'fast_food');
    scene.actions([
      { label: 'Talk', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_20.jpg');
    scene.text('You nod saying you would like to eat at the diner Bystroeshka.');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, it''s the least I could do. I missed you growing up so ...
    scene.text(`"Okay ${((st as any).pcs_nickname ?? '')}, it's the least I could do. I missed you growing up so the least I can do is treat you to some food."`);
    scene.text('"Sounds fair." you say, "Just remember I want to be spoiled to make up time you missed being away."');
    scene.text('You sat down at a table and the waitress comes over with the menu. You spend some time deciding on what to eat while continuing the conversation with your father. After you\'ve finished and are just about to leave the waitress comes to your table.');
    scene.actions([
      { label: 'Look at her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_21.jpg');
    scene.text('"Sorry to be bothering you, but we have a special happening here at the diner today. The most beautiful couple receive another serving of their first meal."');
    scene.text('"And we thought you two looked great together so we decided you won today. Would you like me to bring your food or should we put it in a doggy bag so you can take it with you?"');
    scene.text('Your father clears his throat, as he probably wants to say that you are not a couple, but you kick him under the table, smile to the waitress and say…');
    scene.text('"I\'m stuffed so could you put it in a doggy bag please, we\'ll take with us. Don\'t you agree honey?"');
    scene.text('Mikhail nods and smiles to the waitress.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).trfatherMishaQW ?? 0) === 2) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/mikhail/terminal/trfatherqw_14.jpg');
      scene.text('You decide to visit your father since you\'re in the neighborhood. You\'re not sure if he\'s there but you go for it anyway.');
      // TODO-QSP: dynamic text: You knock on the door and after a few seconds you hear someone grabbing the door...
      scene.text(`You knock on the door and after a few seconds you hear someone grabbing the door handle. As he opens the door he's a bit surprised as he wasn't expecting you, "Oh, hello ${((s as any).pcs_nickname ?? '')}…"`);
      scene.text('"Hey dad, have I come by a bad time? I can come back some other time if you\'re busy?"');
      scene.text('Mikhail quickly waves your worries away, "No, don\'t be silly. Come in, come in. Would you like something to eat?"');
      scene.actions([
        { label: 'To the diner', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (10);
    qspCall(st, 'mood', 'raise', 'small');
    if (((st as any).pcs_energy ?? 0) >= 100) {
      (st as any).fat = ((st as any).fat ?? 0) + (5);
    } else {
      if (((st as any).pcs_energy ?? 0) >= 80) {
        (st as any).fat = ((st as any).fat ?? 0) + (3);
        (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (40);
      } else {
        (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (80);
      }
    }
    if (((st as any).pcs_hydra ?? 0) < 80) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (80);
      (st as any).cumspclnt = 2;
      qspCall(st, 'cum_cleanup', '');
      (st as any).pcs_breath = 0;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_20.jpg');
    scene.text('You nod saying you would like to eat at the diner Bystroeshka.');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, it''s the least I could do. I missed you growing up so ...
    scene.text(`"Okay ${((st as any).pcs_nickname ?? '')}, it's the least I could do. I missed you growing up so the least I can do is treat you to some food."`);
    scene.text('"Sounds fair." you say, "Just remember I want to be spoiled to make up time you missed being away."');
    scene.text('You sat down at a table and the waitress comes over with the menu. You spend some time deciding on what to eat while continuing the conversation with your father. After you\'ve finished and are just about to leave the waitress comes to your table.');
    scene.actions([
      { label: 'Look at her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_21.jpg');
    scene.text('"Sorry to be bothering you, but we have a special happening here at the diner today. The most beautiful couple receive another serving of their first meal."');
    scene.text('"And we thought you two looked great together so we decided you won today. Would you like me to bring your food or should we put it in a doggy bag so you can take it with you?"');
    scene.text('Your father clears his throat, as he probably wants to say something…');
    scene.actions([
      { label: 'Tell the truth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_21.jpg');
    scene.text('"I\'m sorry but you are mistaken, we are not a couple, so we cannot partake in your contest."');
    scene.text('"Oh, I\'m so sorry, but you just looked so happy, so we got the impression that you were a couple."');
    scene.text('The waitress walked away, and you and Dad laughed at the absurdity of the situation and continued to sit and chat cute.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Lie', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', 5, 'incest');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_22.jpg');
    scene.text('Before he\'s able to utter a word, you look at your father giving him a kiss on the lips.');
    scene.text('As you part your lips, you smile, "How could you guess, we are the happiest couple on the planet, and are happy to accept your gift…"');
    scene.text('Your father sits in silence looking at you still not realizing what just happened…');
    scene.text('"Just go with the flow." you whisper while the waitress is away. "If it gets us free food let them think that we are a couple."');
    scene.text('As the waitress returns with your doggy bags you continue on like nothing special happened. Your father looks at you a bit differently, apparently he did not expect such courage from you.');
    (st as any).trfatherMishaQW = 3;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
        { label: 'To the fair', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_23.jpg');
    scene.text('"What, you want to go to the fair? You want me a ride on these children\'s attractions? Dad, it\'s been a long time since I\'ve been to a fair. I\'ve outgrown it.');
    scene.text('Your father looks at you smirking, "Have you already forgot on what we agreed on? I want to make up for all the missed time with me not being there. So come on decide what ride you want to go on, otherwise I\'ll pick."');
    scene.text('"Grinning, you turn to you father…');
    scene.actions([
      { label: 'Walk in the park', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_24.jpg');
    scene.text('You don\'t feel like going on any rides today, and you suggest just taking a walk.');
    scene.text('Mikhail gladly accepts, and you take a path that goes through a flower alley.');
    scene.text('He tells you about how he feels bad about missing not having you and Anya in his life and that regrets not reaching out to you.');
    scene.text('"So why didn\'t you ever show up when we were young?" you asked Mikhail.');
    scene.text('"You must understand, my little girl, I made a promise to your mother, that would never let my presence be known.');
    scene.text('You tear up a little as you continue to walk, constantly talking, because you have a lot of catching up to do.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Buy cotton candy', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).fat = ((st as any).fat ?? 0) + (2);
    qspCall(st, 'mood', 'raise', 'large');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_25.jpg');
    scene.text('You\'re having a bit of a sweet tooth and ask your father if he could buy you some cotton candy.');
    scene.text('He nods and you give him a hug. You are enjoying spending time with him, and you feel like on top of the world. There is probably no other person happier than you in the world…');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).trfatherMishaQW ?? 0) === 3) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.img('images/characters/city/mikhail/terminal/trfatherqw_14.jpg');
        scene.text('You decide to visit your father since you\'re in the neighborhood. You\'re not sure if he\'s there but you go for it anyway.');
        // TODO-QSP: dynamic text: You knock on the door and after a few seconds you hear someone grabbing the door...
        scene.text(`You knock on the door and after a few seconds you hear someone grabbing the door handle. As he opens the door he's a bit surprised as he wasn't expecting you, "Oh, hello ${((s as any).pcs_nickname ?? '')}…"`);
        scene.text('"Hey dad, have I come by a bad time? I can come back some other time if you\'re busy?"');
        scene.text('Mikhail quickly waves your worries away, "No, don\'t be silly. Come in, come in. What would you like to do?"');
        scene.actions([
          { label: 'To the fair', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_23.jpg');
    scene.text('"What, you want to go to the fair? You want me a ride on these children\'s attractions? Dad, it\'s been a long time since I\'ve been to a fair. I\'ve outgrown it.');
    scene.text('Your father looks at you smirking, "Have you already forgot on what we agreed on? I want to make up for all the missed time with me not being there. So come on decide what ride you want to go on, otherwise I\'ll pick."');
    scene.text('"Grinning, you turn to you father…');
    scene.actions([
      { label: 'Take a ride', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_26.jpg');
    scene.text('You decide on taking him up on the offer to get on a ride, not wanting to argue with him.');
    scene.text('You walked around for a moment and you pointed out a specific ride that spins quickly around. You get strapped in and ride begins to wind up. As the ride reaches the top speed you feel the wind blowing underneath your dress, exposing your thighs and ass.');
    scene.text('As you\'re focused on the ride you don\'t pay any attention that other people might see your underwear showing. You continue to have fun and screaming into the wind, as you turn around…');
    scene.text('You father is seated behind you and he\'s got a clear shot of everything, you notice he\'s blushing as he\'s a little embarrassed.');
    scene.actions([
      { label: 'Retain dress', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_27.jpg');
    scene.text('Embarrassed, you quickly try to cover yourself and grab tightly hold of your dress.');
    scene.text('You struggle as ride continues on. After a while the ride stops and you get off. Still embarrassed you thank your father for all the fun today. You quickly walk away from him.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Raise dress', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flashlite', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_28.jpg');
    scene.text('You decide to have fun with your father. You disregard that your underwear is showing, and that he\'s got a full view of your baring ass. You\'re laughing on the inside as you\'re imagining what his reaction is like right now.');
    scene.text('As you turn back, you notice your father is mesmerized by your ass. Pleased with yourself, you continue on teasing him just before the ride stops…');
    scene.text('As you step of the ride you father is clearly confused by your actions. He manages to mutter something, and you decide to call it the day…');
    (st as any).trfatherMishaQW = 4;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'Try a fair game', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'exp_gain', 'shoot', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_29.jpg');
    scene.text('You suggest that you want to try one of the games they have at the fair. Your father is more than happy to comply with your wishes.');
    scene.text('You walk around looking for the game you want to play. You end up at the BB gun stall. You decide to try your luck at this, picking up a gun you start to shoot, and not surprising you miss all the targets.');
    scene.text('Your father, feeling bad watching you struggle, he stands behind you showing you how to position your hands and feet and how to shoot…');
    scene.text('You try once more improving somewhat…');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
          { label: 'Take a walk instead', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_24.jpg');
    scene.text('You don\'t feel like going on any rides today, and you suggest just taking a walk.');
    scene.text('Mikhail gladly accepts, and you take a path that goes through a flower alley.');
    scene.text('He tells you about how he feels bad about missing not having you and Anya in his life and that regrets not reaching out to you.');
    scene.text('"So why didn\'t you ever show up when we were young?" you asked Mikhail.');
    scene.text('"You must understand, my little girl, I made a promise to your mother, that would never let my presence be known.');
    scene.text('You tear up a little as you continue to walk, constantly talking, because you have a lot of catching up to do.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Keep on walking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_30.jpg');
    scene.text('The two of you get carried away in the conversation and end up on an off-path trail in the park.');
    scene.text('You suddenly notice that you\'ve entered what\'s known as the worst part of the park, you see a lot of alcoholics and drug addicts laying around.');
    scene.text('The two of you are drawn to some sounds and moans near a big tree. The curiosity gets the best of you, you quietly approach the sound source.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Take a closer look', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/sex/trfatherqw_31.jpg');
    scene.text('As you peek behind the tree, you are shocked as you notice a young couple having sex with each other.');
    scene.text('Even though the woman was enjoying herself, you could notice she wanted it to finish as quickly as possible as they were fucking in a public place.');
    scene.text('You totally forgot about your father and as you got tired of the show you looked for him. Mikhail just stood there frozen, observing the couple. He doesn\'t even react as you approach him and you struggle for a while to get his attention.');
    scene.text('"We need to move on, it feels wrong spying on others." you tell him as you were walking back to the path.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).trfatherMishaQW ?? 0) === 4) {
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          qspCall(s, 'stat', '');
          scene.img('images/characters/city/mikhail/terminal/trfatherqw_14.jpg');
          scene.text('You decide to visit your father since you\'re in the neighborhood. You\'re not sure if he\'s there but you go for it anyway.');
          // TODO-QSP: dynamic text: You knock on the door and after a few seconds you hear someone grabbing the door...
          scene.text(`You knock on the door and after a few seconds you hear someone grabbing the door handle. As he opens the door he's a bit surprised as he wasn't expecting you, "Oh, hello ${((s as any).pcs_nickname ?? '')}…"`);
          scene.text('"Hey dad, have I come by a bad time? I can come back some other time if you\'re busy?"');
          scene.text('Mikhail quickly waves your worries away, "No, don\'t be silly. Come in, come in. What would you like to do?"');
          scene.actions([
            { label: 'Take a walk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_24.jpg');
    scene.text('You don\'t feel like going on any rides today, and you suggest just taking a walk.');
    scene.text('Mikhail gladly accepts, and you take a path that goes through a flower alley.');
    scene.text('He tells you about how he feels bad about missing not having you and Anya in his life and that regrets not reaching out to you.');
    scene.text('"So why didn\'t you ever show up when we were young?" you asked Mikhail.');
    scene.text('"You must understand, my little girl, I made a promise to your mother, that would never let my presence be known.');
    scene.text('You tear up a little as you continue to walk, constantly talking, because you have a lot of catching up to do.');
    scene.actions([
      { label: 'Walk up to the shooting game', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_32.jpg');
    scene.text('You suggest that you want to try one of the games they have at the fair. Your father is more than happy to comply with your wishes.');
    scene.text('You walk around looking for the game you want to play. You end up at the BB gun stall. You decide to try your luck at this, picking up a gun you start to shoot, and not surprising you miss all the targets.');
    scene.text('Your father, feeling bad watching you struggle, he stands behind you showing you how to position your hands and feet and how to shoot…');
    scene.actions([
      { label: 'Learn to shoot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'exp_gain', 'shoot', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_33.jpg');
    scene.text('After he\'s shows how it\'s supposed to be done he tells you to try it out once again. Your accuracy improves a little bit.');
    scene.text('Mikhail embraces you from behind, as he\'s pressed against you he grasps your hands as you\'re holding the gun.');
    scene.text('He tells you on how to squeeze the trigger and how to breathe…');
    scene.actions([
      { label: 'Tease him', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay_give', 10, 'incest');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_34.jpg');
    scene.text('By now you have little interest in the shooting, and instead you see it as a great opportunity to get closer to your father.');
    scene.text('You ask him if you should stand like this as you press your ass against his groin, slightly moving up and down as seductively as you can.');
    scene.text('Flabbergasted, Mikhail stops for a moment and leans in even closer and you can feel the growing bulge poking you through his pants.');
    scene.text('Standing in this position you take some shots but miss all the targets.');
    // TODO-QSP: dynamic text: "Not bad <<$pcs_nickname>>." he muttered not really paying attention on your sho...
    scene.text(`"Not bad ${((st as any).pcs_nickname ?? '')}." he muttered not really paying attention on your shots…`);
    (st as any).trfatherMishaQW = 5;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Concentrate', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', 'large');
    qspCall(st, 'exp_gain', 'shoot', 3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_35.jpg');
    scene.text('You are focused and enthusiastically listen to what Mikhail has to say.');
    scene.text('As you follow his instruction to the point, you hit all the targets and win a big toy. Without thinking about it you turn around and hug your father, giving him a kiss on the cheek.');
    scene.text('Your father praises you as you\'re a quick learner, but that he\'s not finished with the lessons…');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'Refuse help', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'exp_gain', 'shoot', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_36.jpg');
    scene.text('You refuse listening to your fathers advice. You loudly sigh as he continues explaining…');
    scene.text('"Thank you, dad, but I can handle it myself, I just need to focus and I\'ll win this damn prize.');
    scene.text('You take a deep breath and start shooting, but unfortunately you miss quite the few targets.');
    scene.text('Mikhail sighs, "I told you that you should listen to me, but it doesn\'t matter now you had your shot at it…');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'Visit the cafe', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (10);
    qspCall(st, 'mood', 'raise', 'small');
    if (((st as any).pcs_energy ?? 0) >= 100) {
      (st as any).fat = ((st as any).fat ?? 0) + (5);
    } else {
      if (((st as any).pcs_energy ?? 0) >= 80) {
        (st as any).fat = ((st as any).fat ?? 0) + (3);
        (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (40);
      } else {
        (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (80);
      }
    }
    if (((st as any).pcs_hydra ?? 0) < 80) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (80);
      (st as any).cumspclnt = 2;
      qspCall(st, 'cum_cleanup', '');
      (st as any).pcs_breath = 0;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_37.jpg');
    scene.text('You sit down at the park cafe and enjoy a drink.');
    scene.text('"It feels like I\'ve been only talking about myself, I still don\'t really know anything about you dad. Is there really nothing you can tell me about yourself?"');
    scene.text('"What do you want to know? I disappeared from yours and Anya\'s life for so long… I started out to get hold of my life, I searched for a stable job for so long. Luckily, I had some good friends that introduced me to my boss who owns a trucking company and here I am…');
    scene.text('"I bought myself a modest house, in the residential area, and for a long time I was ashamed that my living quarters were so bad I didn\'t want to invite any guests."');
    scene.text('You push on, "I want to know more, did you ever meet a new woman that you wanted to get settled with?"');
    scene.text('"I\'ll be honest with you, I\'ve been with plenty of women but nothing ever serious, most of my relationships has been shallow and never amounted to anything, like with your mother."');
    scene.text('Your father sighs deeply and you know it\'s not the time to keep pushing on in a public place. You sit there in silence for a while, deciding that the time has come to…');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).trfatherMishaQW ?? 0) === 5) {
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            qspCall(s, 'stat', '');
            scene.img('images/characters/city/mikhail/terminal/trfatherqw_14.jpg');
            scene.text('You decide to visit your father since you\'re in the neighborhood. You\'re not sure if he\'s there but you go for it anyway.');
            // TODO-QSP: dynamic text: You knock on the door and after a few seconds you hear someone grabbing the door...
            scene.text(`You knock on the door and after a few seconds you hear someone grabbing the door handle. As he opens the door he's a bit surprised as he wasn't expecting you, "Oh, hello ${((s as any).pcs_nickname ?? '')}…"`);
            scene.text('"Hey dad, have I come by a bad time? I can come back some other time if you\'re busy?"');
            scene.text('Mikhail quickly waves your worries away, "No, don\'t be silly. Come in, come in. What would you like to do?"');
            scene.actions([
              { label: 'Go to the cafe', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (10);
    qspCall(st, 'mood', 'raise', 'small');
    if (((st as any).pcs_energy ?? 0) >= 100) {
      (st as any).fat = ((st as any).fat ?? 0) + (5);
    } else {
      if (((st as any).pcs_energy ?? 0) >= 80) {
        (st as any).fat = ((st as any).fat ?? 0) + (3);
        (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (40);
      } else {
        (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (80);
      }
    }
    if (((st as any).pcs_hydra ?? 0) < 80) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (80);
      (st as any).cumspclnt = 2;
      qspCall(st, 'cum_cleanup', '');
      (st as any).pcs_breath = 0;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_37.jpg');
    scene.text('The two of you sit down at a nearby cafe and enjoy a drink.');
    scene.text('As you sit talking to each other a flower girl walks by selling flowers. Spotting you, she heads towards your table, telling your father to buy flowers for his girlfriend.');
    scene.text('Mikhail initially protests, but seeing you taking a like to the flowers, he decides to buy the most beautiful bouquet, handing it over to you.');
    scene.text('"Thank you, dad." You smile, thinking he should at least get a positive reaction for his actions.');
    scene.text('Seeing you reaction he is cautious but gradually softens, even showing some pride in his actions…');
    scene.actions([
      { label: 'Smell the flowers', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_38.jpg');
    scene.text('You look and smell the flowers for a while. As you\'re looking at the flowers Mikhail clears his throat.');
    scene.text('"Aren\'t you worried about what people here will think? A grown man with a young girl. They might really think we\'re a couple." he nervously smiles.');
    scene.text('"Don\'t get me wrong I have no problem yelling that I love you with all my heart, but the fact that no one knows that I\'m your father makes it a bit uncomfortable." Mikhail continues.');
    scene.text('You nod, realizing that your father is quite frustrated by what\'s happening so you decide calling it the day…');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Ask him a private question', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_37.jpg');
    scene.text('As you put the flowers to the side your curiosity gets the best of you, and you must ask him about the women he was together with after the divorce?');
    // TODO-QSP: dynamic text: "Well <<$pcs_nickname>> after your mother I was together with a much younger wom...
    scene.text(`"Well ${((st as any).pcs_nickname ?? '')} after your mother I was together with a much younger woman than me but it didn't feel right, the age difference was too damaging. A lot of it was my fault too, I was finally free from your mother so I wanted to have all the focus on me. Now that I think about it I treated her quite badly… But what can you do you always learn something new in life…"`);
    scene.text('You sit there in silence pondering how to cheer him up.');
    scene.text('"Don\'t worry, you have me now. That should cheer you up, right?" You pause and take a deep breath, "By the way, I wanted to ask you this for quite some time now… What do you think about me?"');
    scene.text('Mikhail is clearly feeling the pressure by your question, "You\'re not a little girl anymore… You\'ve grown into quite a young woman… You have beautiful hair… a beautiful face… and…"');
    scene.text('Your father stops, his face is flushing red… Just as he\'s about to continue…');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Kiss', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', 5, 'incest');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_39.jpg');
    scene.text('Without any hesitation, you jump up from your chair, quickly walking towards your father. You grab his face and lean in for a kiss. Your father is shocked at first, but it doesn\'t take long for him to get into it and after a short time neither of you is holding themselves back. It feels good to let the feelings free finally. All the tension that was there between you two has disappeared. While you enjoy the moment, your arousal keeps building…');
    scene.text('As you make out none of you is holding back. You\'re happy that you don\'t have to hold back anymore. All of the animosity disappears and you let yourself enjoy the moment.');
    scene.text('Your arousal is building, knowing this is forbidden but you can\'t help yourself. The forbidden attraction between a father and daughter is too arousing to ignore…');
    (st as any).trfatherMishaQW = 6;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
              { label: 'Go for a drive', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'raise', 'large');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_40.jpg');
    scene.text('"How about we take a ride in my truck?" Mikhail asks you. "Let\'s take the truck for a ride around the city and if you behave I\'ll even let you drive my truck."');
    scene.text('You smile and jump around at the idea of driving a real truck. As you walk outside Mikhail throws the keys to you telling you that you\'re driving. You gladly get behind the wheel and feel your whole body tingling as you drive such a large machine.');
    scene.text('Mikhail is closely observing your every move, worrying for every little thing that might happen as you seem so careless while driving.');
    scene.text('He yells, "Do not press so hard on the gas pedal, we are not in any hurry…"');
    (st as any).fatherMishaCar = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
            ]);
          } else {
            if (((s as any).trfatherMishaQW ?? 0) === 6) {
              (s as any).minut = ((s as any).minut ?? 0) + 5;
              qspCall(s, 'stat', '');
              scene.img('images/characters/city/mikhail/terminal/trfatherqw_14.jpg');
              scene.text('You decide to visit your father since you\'re in the neighborhood. You\'re not sure if he\'s there but you go for it anyway.');
              // TODO-QSP: dynamic text: You knock on the door and after a few seconds you hear someone grabbing the door...
              scene.text(`You knock on the door and after a few seconds you hear someone grabbing the door handle. As he opens the door he's a bit surprised as he wasn't expecting you, "Oh, hello ${((s as any).pcs_nickname ?? '')}…"`);
              scene.text('"Hey dad, have I come by a bad time? I can come back some other time if you\'re busy?"');
              scene.text('Mikhail quickly waves your worries away, "No, don\'t be silly. Come in, come in. What would you like to do?"');
              scene.actions([
                { label: 'Go for a drive', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_40.jpg');
    scene.text('You try your hardest to persuade Mikhail into giving you control over the steering wheel. It doesn\'t take long before he agrees letting you taking over.');
    scene.text('You gladly get behind the wheel and feel your whole body tingling as you\'re in control of such a large machine.');
    scene.text('Mikhail is closely observing your every move, worrying for every little thing that might happen as you seem so careless while driving.');
    scene.text('He tells you take the country road instead, there\'s no police there. As you get on the country road you press the pedal to the metal, rustling and scaring the local fauna.');
    scene.text('Mikhail tells you to slow down as you\'re nearing a well. You stop by the well to drink some water. Quenching the thirst you are told to sit in the passenger seat so your father can quickly drive you home.');
    (st as any).fatherMishaCar = 1;
    scene.actions([
      { label: 'Sit on his lap', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay_give', 5, 'incest');
    (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (30);
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/taxi/sex/taxi1,5.jpg');
    scene.text('You\'re hesitant as you\'re still buzzing from the drive, you still want to drive the truck back. Mikhail is standing quietly wondering how he could make you sit in the passenger seat. You smile as you\'ve got a solution, "How about I sit in your lap?"');
    scene.text('Mikhail sighs, "I\'m not to fond of this but sure if that\'s the only way to get you to comply…"');
    scene.text('You quickly jump in his lap, teasingly squirming against his crotch. As you place yourself on top of his cock you turn around, "There, now I\'m sitting just right." As you say that you lean in and passionately kiss him.');
    scene.text('Now that the two of you are alone and no one is watching your father let\'s go of any hesitation, begins pawing you all over your young body…');
    scene.text('As he groans he manages to tell you, "My silly little girl, you do know that this is totally wrong but you still keep pushing on. Why are you doing this?"');
    scene.actions([
      { label: 'Help him with his pants', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5, 'incest');
    qspCall(st, 'cum_call', 'mouth', 'A35', 1, 0, 12500, (Math.floor(Math.random() * 21) + 30));
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/sex/trfatherqw_42.jpg');
    scene.text('You answer with only a smile as you bend down, touching your father\'s cock through his pants. He groans as he wants his cock to be let out in the free. You comply and unzip his pants, grabbing his cock, letting it hang freely.');
    scene.text('You take a few moments to observe his hard cock. You look at him smiling as you grab his cock with your hand and begin jerking him off. You decide to let him rest for a bit as you switch to kissing his glans licking his shaft instead. After some teasing you tightly clasp your plump lips around his cock, completely absorbing it whole.');
    scene.text('It doesn\'t take long before your father begins groaning as his cock twitches, quickly finishing in your mouth, letting all the cum dribble into your mouth so you could swallow it…');
    scene.text('As you swallow the remaining sperm, you turn to Mikhail with a serious look…');
    // TODO-QSP: dynamic text: "We should be safe now that you''ve cum. I demand that you fuck me, otherwise I'...
    scene.text(`"We should be safe now that you've cum. I demand that you fuck me, otherwise I'll go and tell ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} that you forced me to suck your cock."`);
    scene.actions([
      { label: 'Drag him out', handler: (st: GameState) => {
    scene.img('images/characters/city/mikhail/sex/trfatherqw_43.jpg');
    scene.text('Before he\'s able to answer, you start pushing him out of the truck. Mikhail barely manages to get out of the truck, as you push him down on the grass and jump on top of him.');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('"I\'ve always fantasized about this moment. You\'ll be my first, daddy." with these words, you grab his cock leading it towards your wet clit, eagerly awaiting for your father to deflower you.');
    }
    scene.text('As you insert his cock into your wet slit, you take a minute to adjust yourself to your fathers cock. Slowly you begin rhythmically bouncing up and down his cock, as you bend over kissing him.');
    scene.text('Overcome by arousal, your father grabs your ass adjusting the speed of how quickly you bounce up and down. He makes you go faster and faster as he penetrates you deeper. By now you\'re loudly moaning your father is a great lover and he knows exactly how to fuck you to give you outmost pleasure.');
    scene.text('Not holding back you furiously and wildly begin bouncing on top of his cock. The two of you sound like two animals in heat as you\'re moaning loudly so that everyone in the near vicinity can hear you.');
    (st as any).orgasm_or = 'custom';
    (st as any).orgasm_txt = 'You\'re no longer able to hold back your screams of pleasure as your body begins to twitch. It\'s a violent orgasm and you\'re certain you\'ve never felt anything like this before. It\'s exactly as you fantasized about, when you met him for the first time.';
    qspCall(st, 'arousal', 'vaginal', 5, 'incest');
    qspCall(st, 'cum_call', '', '', 'A35', 1, 0, 12500, (Math.floor(Math.random() * 21) + 20));
    qspCall(st, 'stat', '');
    scene.text('Moments later Mikhail begins to groan loudly, his cock starts growing inside you and shortly thereafter you feel his warm cum shoot inside of you. As he finishes you fall over him as you\'re completely exhausted. You embrace him and lay still for a while…');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'Stop', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_44.jpg');
    scene.text('"I\'m truly sorry dad, I don\'t know what came over me, I\'ll stop right away. My feelings are all messed up, I\'m kind of attracted to you but I know it\'s wrong to have these kind of feelings for you. I need time to think about it all."');
    scene.text('Mikhail looks at you concerned, "Well at least you know what we\'re doing is wrong. But I think it would be for the best if we took some time away from each other. You\'re still my daughter and all but I don\'t know if we can have a close-knit relationship if you can\'t control yourself…"');
    (st as any).trfatherMishaQW = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'Sit on the passenger seat', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_45.jpg');
    scene.text('You dutifully listen to your father and scooch over to the passenger seat. In no time you arrive in Pavlovsk thanks to Mikhail\'s knowledge of all the back roads.');
    scene.text('"Do you want to come in and greet everyone?" you ask Mikhail.');
    scene.text('Mikhail sighs, "No no no, thank you caring, but it\'s for the best that I\'m kept far away from your mother. I also know that your mother turned Anya against me so there is no one but you that is friendly towards me so what\'s the point."');
    scene.text('With these words, you decide it\'s not worth pressing on as your father seems quite determined…');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Say goodbye', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_15.jpg');
    // TODO-QSP: dynamic text: Your father looks at his watch, noticing that you''ve spent quite the time toget...
    scene.text(`Your father looks at his watch, noticing that you've spent quite the time together, "${((st as any).pcs_nickname ?? '')} I have to go I have some stuff to take care of. But don't be a stranger, make sure to come by again. I will be eagerly awaiting you to visit me again."`);
    scene.text('You answer eagerly, "Yes dad, don\'t worry, I\'ll make sure to visit you once again."');
    scene.text('With a smile on his face he leans in and kisses you on the cheek as a goodbye.');
    if (((st as any).fatherMishaCar ?? 0) > 0) {
      scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
]);
      return;
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['Terminal', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const trFatherMisha: LocationDef = {
  name: 'trFatherMisha',
  title: 'As you walk up to your father with a face fully smeared with',
  region: 'other',
  description: ['As you walk up to your father with a face fully smeared with semen he reacts as expected.'],
  enter: enter,
};
