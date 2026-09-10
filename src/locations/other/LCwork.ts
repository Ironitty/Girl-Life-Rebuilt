import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart1(s: GameState, scene: SceneBuilder): void {
  (s as any).horand = ((s as any).rand ?? 0)(1, 100)+ 40;
  qspCall(s, 'dinSex', 'std_trigger_oral');
  qspCall(s, 'dinSex', 'std_trigger');
  (s as any).randLCpay = 1000;
  (s as any).guy = ((s as any).guy ?? 0) + (((s as any).randguycafe ?? 0));
  if (((s as any).pcs_vag ?? 0) < 20) {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', ((s as any).randguycafe ?? 0));
  }
  scene.img('images/locations/city/industrial/bbq/sex/bjride.mp4');
  scene.text('You walk up to the group of men and give them a friendly smile as you say: "Good evening, sirs. I will be your waitress tonight."');
  scene.text('The guys understand what you mean immediately, and all get up and guide you to their car. They make you sit in the back seat between two of them, and drive off. During the trip you constantly have hands on your body. The men fondle your boobs and legs eagerly, shove their hands underneath your clothes and fondle your pussy.');
  scene.text('Before long one of them pulls down his pants and drags your head over to his dick. You suck his dick for the rest of the ride, while the other guys grab at your breasts, ass, or even fingers your pussy.');
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'gangbang', 'prostitution');
  qspCall(s, 'arousal', 'anal_finger', 10, 'sub', 'gangbang', 'prostitution');
  qspCall(s, 'arousal', 'vaginal_finger', 10, 'sub', 'gangbang', 'prostitution');
  qspCall(s, 'arousal', 'foreplay', (-10), 'sub', 'gangbang', 'prostitution');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bbq/sex/1b.jpg');
    scene.text('When you arrive at a house, the guys begin to strip you almost as soon as you walk through the door. You also noticed there was several of them waiting at the house for their friends to return with you. All six of them proceed to fuck all of your holes, two or three at a time. They take turns and swap holes fairly randomly, for a good two hours.');
    scene.text('At least they were nice enough to all wear condoms and use lubricant, still six guys all taking turns, fucking each of your three holes leaves them aching and gaping.');
    qspCall(s, 'arousal', 'bj', 120, 'sub', 'gangbang', 'prostitution');
    qspCall(s, 'arousal', 'anal', (-120), 'sub', 'gangbang', 'prostitution');
    qspCall(s, 'arousal', 'vaginal', (-120), 'sub', 'gangbang', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/bbq/sex/1b.jpg');
    scene.text('By the end, the guys tell you to kneel down in the center of the room and to bring them all to orgasm. You kneel down in the middle of them, sucking one off while your jerk off two more, it takes you a bit to work your way around and get them all off, by the time the last one cums on you, your entire body is covered in cum.');
    // TODO-QSP: dynamic text: Fortunately, they allow you to take a shower and one of them even drives you hom...
    scene.text(`Fortunately, they allow you to take a shower and one of them even drives you home. He pays you ${qspFunc(s, 'money', 'string_profit', ((s as any).randLCpay ?? 0))}, and says he hopes you'll be their waitress again some day.`);
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'gangbang', 'prostitution');
    qspCall(s, 'arousal', 'hj', (-10), 'sub', 'gangbang', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get out of his car', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', ((s as any).randLCpay ?? 0));
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStart2(s: GameState, scene: SceneBuilder): void {
  (s as any).horand = Math.floor(Math.random() * 100) + 1;
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '');
  (s as any).randLCpay = 500;
  if (((s as any).pcs_vag ?? 0) < 18) {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  }
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'dinSex', 'std_trigger');
  scene.img('images/locations/city/industrial/bbq/sex/2a.jpg');
  scene.text('You walk up to the older man and give him a friendly smile as you say: "Good evening, sir. I will be your waitress tonight."');
  scene.text('The older man gives you a dirty grin, and ogles your body for a few seconds before he says: "Very good, you will do. Follow me."');
  scene.text('You get into a van with the older man, and are a bit surprised when he enters a narrow side road that leads into the woods. You\'re in the middle of nowhere here!');
  scene.text('He stops the van, and tells you to get out of the van and undress. He lays you on your back in the open side door of his van. As soon as your legs are apart he shoves his old dick in your cunt and starts fucking it. He never says a word, or touches you in any other way, he just fucks your pussy.');
  qspCall(s, 'arousal', 'vaginal', 120, 'sub', 'prostitution');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/bbq/sex/2b.jpg');
    scene.text('At long last, the man pulls out of you and pulls your out of the van down onto your knees, where he shoots his load all over your face. It\'s surprisingly large amount of sperm, he must have been saving up for some time!');
    scene.text('He says kindly: "You were great! Get back in the van, I\'ll give you a ride back."');
    scene.text('With a wink he adds: "As long as you don\'t get any cum on the seats, my wife would kill me!"');
    // TODO-QSP: dynamic text: You have the man pull over when you're in the residential district, and he happi...
    scene.text(`You have the man pull over when you're in the residential district, and he happily pays you ${qspFunc(s, 'money', 'string_profit', ((s as any).randLCpay ?? 0))} for your time.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get out of his van', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', ((s as any).randLCpay ?? 0));
  }, goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStart3(s: GameState, scene: SceneBuilder): void {
  (s as any).horand = ((s as any).rand ?? 0)(1, 100) + 20;
  qspCall(s, 'npcgeneratec', '', 0, 'A John', 0, 0, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'A John', 0, 0, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  (s as any).randLCpay = 500;
  (s as any).guy = ((s as any).guy ?? 0) + (2);
  if (((s as any).pcs_vag ?? 0) < 18) {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 2);
  }
  qspCall(s, 'dinSex', 'std_trigger');
  scene.img('images/locations/city/industrial/bbq/sex/3a.jpg');
  scene.text('You walk up to the two men in the corner and give them a friendly smile as you say: "Good evening, sirs. I will be your waitress tonight."');
  scene.text('One of the men laughs when the other begins to place another order, and says: "She\'s not here for drinks, Dmitri."');
  scene.text('His friend\'s eyes light up, and he\'s all giddy with anticipation when the three of you leave the diner. The two of them lead you to a car and drive you to an apartment in the city industrial district.');
  scene.text('Both the men are upon you the second you walk through the door, pulling your clothes off you roughly enough to leave bruises. They push you down on the couch and one of them quickly shoves his dick in your pussy, not bothering to get your warmed up first. The other waits just long enough for his friend to get his dick in your pussy, when he roughly shoves his cock in your ass, the only lube he bothered to use was a bit of spit on the tip of his dick.');
  scene.text('They trade fucking your twat and ass back and forth, not seeming to care one bit, if dry fucking you hurts you in the slightest, in fact you think they are getting off on it.');
  qspCall(s, 'arousal', 'anal', 120, ((s as any).npcID ?? 0), 'sub', 'group', 'prostitution', 'rough');
  qspCall(s, 'arousal', 'vaginal', (-120), ((s as any).npcID1 ?? 0), 'sub', 'group', 'prostitution', 'rough');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/bbq/sex/3b.jpg');
    // TODO-QSP: dynamic text: Finally, in a moment of mercy they both pull out of you and put you on your knee...
    scene.text(`Finally, in a moment of mercy they both pull out of you and put you on your knees where they jerk off, covering your face and tits with their sperm. As soon as they finish, before you even have a chance to do anything, one of them grabs you roughly by the hair and drags you out of the apartment naked, while the other throws your clothes out into the hallway. With that done, they toss ${qspFunc(s, 'money', 'string_profit', ((s as any).randLCpay ?? 0))} out and slam the door. Leaving you standing naked, with your clothes and money scattered around the hall floor and your ass and pussy aching from the rough fucking.`);
    scene.text('Wincing you gather up the money and put on your clothes, then you head down the stairs out of the apartment.');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'sub', 'group', 'prostitution', 'rough');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'sub', 'group', 'prostitution', 'rough');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 0);
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0), 0);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the apartment building', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', ((s as any).randLCpay ?? 0));
  }, goto: ['city_industrial', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStart4(s: GameState, scene: SceneBuilder): void {
  (s as any).spafinloc = 14;
  qspCall(s, 'cum_manage', '');
  (s as any).randLCpay = 500;
  (s as any).girl = ((s as any).girl ?? 0) + (1);
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  if (((s as any).pcs_ass ?? 0) < 18) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  qspCall(s, 'dinSex', 'std_trigger');
  qspCall(s, 'dinSex', 'std_trigger_oral');
  if (((s as any).lcwork_counter ?? 0) === 0) {
    scene.img('images/locations/city/industrial/bbq/sex/4a.jpg');
    scene.text('As you walk up to the couple, you notice the guy grinning deviously while his girlfriend\'s face is a deep shade of red. Before you can get a word in, the guy looks at his girl and grins: "What do you say, babe? She\'s cute, right?"');
    scene.text('The girl is still blushing, but can\'t keep her eyes off you and nods quietly. The guy looks at you and smiles: "She\'s a bit shy. It\'s our first time bringing someone else in the bedroom. You\'re our waitress, right? Are you ready to go?"');
    scene.text('They live in the residential area of the city, and it\'s a short drive there. You\'re fairly sure the guy is the one in charge of this relationship, and when you arrive at their home, you\'re proven right.');
    scene.text('He acts like a director, telling you and the other girl to do all sorts of acts on one another while he watches, and then has the two of you please him together.');
    scene.text('He\'s particularly interested in your ass. "I hope you like anal, sweetie…" he whispers in your ear after a while. "Because my girlfriend won\'t take anything up there, you\'ll have to take it for the both of you!"');
    scene.text('Fortunately, he takes it slow, and it doesn\'t feel all that unpleasant. The girl is very fascinated by it all and asks you a few questions while she absent-mindedly rubs your clit and kisses your boobs as if you\'re doing her a huge favor. After all: as long as her boyfriend enjoys your ass, her\'s can remain unfucked.');
    qspCall(s, 'arousal', 'cuni', 120, 'sub', 'prostitution', 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', (-120), 'sub', 'prostitution', 'lesbian');
    qspCall(s, 'arousal', 'anal', (-120), 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).lcwork_counter = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/bbq/sex/4b.jpg');
    scene.text('After an extended period of fucking your ass, she asks you a lot of questions about how getting fucked in the ass feels, if it hurts, if you enjoy it. You tell her the truth that it can be very pleasant if the guy is gentle. The boyfriend seems to really enjoy what you are telling her.');
    scene.text('After some time the guy pulls out of your ass and shoots his hot load all over your stomach. The girl laps some of it up, but leaves most of it on you and politely thanks you for a lovely evening. She\'s adorable!');
    scene.text('As you get up, the guy is very happy. He grins and says: "Thanks, you were great! She\'s still a bit shy, but at this rate it won\'t be long before I can properly introduce her to my buddies, if you know what I mean."');
    // TODO-QSP: dynamic text: He walks you out of the bedroom, after you get dressed, leaving her behind. "May...
    scene.text(`He walks you out of the bedroom, after you get dressed, leaving her behind. "Maybe we can do it again next week and you can help me talk her into trying anal." He gives you a dirty wink and gives you ${qspFunc(s, 'money', 'string_profit', ((s as any).randLCpay ?? 0))} as he walks you out.`);
    qspCall(s, 'arousal', 'anal', 20, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave their apartment building', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', ((s as any).randLCpay ?? 0));
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/locations/city/industrial/bbq/sex/couple.jpg');
    scene.text('As you walk up to the couple, you remember them from before. The guy grins at you and the girl smiles. "Told you we would be back, are you ready to go?"');
    scene.text('They live in the residential area of the city, and it\'s a short drive there. You remember it from last time, they inform you, she is ready to try anal, but wants you to coach her through it and get her ready.');
    scene.text('Once inside he watches the two of you have fun. He waits until you bring his girlfriend to an orgasm.');
    qspCall(s, 'arousal', 'cuni_give', 60, 'sub', 'prostitution', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bbq/sex/couple1.jpg');
    scene.text('At that point he comes over and sits on the couch with the two of you. He lubes up his dick, while you lube up her asshole. You help her ease down on his dick, he is very gentle with her and lets her lead the action. You help by licking her clit while she rides his dick with her ass.');
    scene.text('By the sounds of it, you can tell she kinda likes it but also finds it a bit painful. Before long she gets off him and says she can\'t take anymore and applogises to him. He tells her it\'s ok they can try again some other time. With that he bends you over the couch and starts to fuck you in the ass. He is fairly gentle with you, but not nearly as much as he was with his girlfriend, which is kinda sweet.');
    (s as any).minut = ((s as any).minut ?? 0) + 100;
    qspCall(s, 'arousal', 'cuni_give', (-60), 'sub', 'prostitution', 'lesbian');
    qspCall(s, 'arousal', 'anal', (-60), 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bbq/sex/couple2.jpg');
    scene.text('After an extended period of fucking your ass, she watches obviously a bit envious by how easily you are taking his anal fucking.');
    scene.text('Sometime later the guy shoots his load deep in your ass, pulling his dick out, she catches a few drops of sperm from his dick with her tongue.');
    // TODO-QSP: dynamic text: After you get dressed and he walks you to the door, he grins and says: "Thanks, ...
    scene.text(`After you get dressed and he walks you to the door, he grins and says: "Thanks, you were great! She's still a bit shy, but at this rate it won't be long before I can properly introduce her to my buddies, if you know what I mean. Maybe we can do it again next week and you can help her get used to anal." He gives you a dirty wink and gives you ${qspFunc(s, 'money', 'string_profit', ((s as any).randLCpay ?? 0))} as he walks you out.`);
    qspCall(s, 'arousal', 'anal', 20, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave their apartment building', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', ((s as any).randLCpay ?? 0));
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterStart5(s: GameState, scene: SceneBuilder): void {
  (s as any).horand = Math.floor(Math.random() * 100) + 1;
  (s as any).randLCpay = 500;
  (s as any).girl = ((s as any).girl ?? 0) + (1);
  qspCall(s, 'dinSex', 'std_trigger');
  scene.img('images/locations/city/industrial/bbq/sex/5.jpg');
  scene.text('The girl looks fairly shy, and seems a bit taken aback when you walk up to her and say: "Hello, miss. I will be your waitress tonight."');
  scene.text('She\'s a bit hesitant, afraid to ask if that means what she thinks it means, but relaxes when you take her by the hand and purr: "So where are you taking me tonight, sweetie?"');
  scene.text('As it turns out, she lives in the residential district. She holds your hand while you walk there, but doesn\'t say much. When you arrive at her place, she apologizes: "I\'m sorry… I umm… I\'ve never done this before…"');
  scene.text('You reassure her that you can go as fast or slow as she likes, and spend the next hour and a half fondling one another.');
  scene.text('She becomes more and more enthusiastic as time passes, and grows bolder by the minute. At one point, she says she wants to finger your ass and immediately crams in four fingers, ouch! Subtlety is definitely not her strong suit.');
  qspCall(s, 'arousal', 'foreplay', 90, 'sub', 'prostitution', 'lesbian');
  qspCall(s, 'arousal', 'anal_finger', (-90), 'sub', 'prostitution', 'lesbian');
  if (((s as any).horand ?? 0) <= ((s as any).pcs_horny ?? 0)) {
    (s as any).pcs_horny = 0;
    (s as any).orgasm = ((s as any).orgasm ?? 0) + (2);
    scene.text('Even though the girl had no prior experience with women, she touches you in all the right places and you reach an orgasm more than once during your session.');
  }
  if (((s as any).horand ?? 0) > ((s as any).pcs_horny ?? 0)) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.text('You mostly focus on making this a pleasurable experience for her, and don\'t orgasm yourself. That\'s fine, though… the ecstatic look in her eyes when you gave her the third orgasm of the evening more than makes up for it!');
  }
  scene.text('When you\'re finished and get dressed again, the girl reverts to being her old, shy self. Nevertheless, she gives you a peck on the cheek and thanks you for the lovely lesson. She does seem a bit more confident now.');
  // TODO-QSP: dynamic text: She walks you out, giving you <<$func('money', 'string_profit', randLCpay)>>.
  scene.text(`She walks you out, giving you ${qspFunc(s, 'money', 'string_profit', ((s as any).randLCpay ?? 0))}.`);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Leave her apartment', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', ((s as any).randLCpay ?? 0));
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterStart6(s: GameState, scene: SceneBuilder): void {
  (s as any).randLCpay = 500;
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  if (((s as any).pcs_vag ?? 0) < 18) {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  }
  qspCall(s, 'dinSex', 'std_trigger');
  qspCall(s, 'dinSex', 'std_trigger_oral');
  scene.img('images/locations/city/industrial/bbq/sex/6a.jpg');
  scene.text('You walk up to the older man and give him a friendly smile as you say: "Good evening, sir. I will be your waitress tonight."');
  scene.text('"My waitress, huh?" he laughs. "That\'s adorable!"');
  scene.text('He leads you to his car and drives to his house in the residential district. For the next hour and a half, he alternates between fucking your wet clit, and making you lick your own juices off his hard cock repeatedly. He doesn\'t go soft once during all this! Such stamina.');
  qspCall(s, 'arousal', 'bj', 90, 'sub', 'prostitution');
  qspCall(s, 'arousal', 'vaginal', (-90), 'sub', 'prostitution');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/bbq/sex/6b.jpg');
    scene.text('Finally, the man\'s cock erupts in your mouth, and he doesn\'t explain when you take his cock out of your mouth after a few spurts and release the rest onto your boobies.');
    scene.text('He gives you a satisfied grin and lets you use his shower to clean yourself up before you go. He peeks into the shower once or twice while you\'re washing yourself, but you don\'t care, it\'s not like he hasn\'t seen you naked before!');
    // TODO-QSP: dynamic text: He gives you <<$func('money', 'string_profit', randLCpay)>>, and walks you to th...
    scene.text(`He gives you ${qspFunc(s, 'money', 'string_profit', ((s as any).randLCpay ?? 0))}, and walks you to the door when you're all freshened up.`);
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave his apartment', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', ((s as any).randLCpay ?? 0));
  }, goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterToiletsex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Stranger from the diner restroom', Math.floor(Math.random() * 15) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/locations/city/industrial/bbq/sex/toiletsexend.jpg');
  scene.text('You come up from behind the man and suddenly wrap your arms around him. He\'s startled for a moment, but relaxes when you whisper: "That\'s a nice cock you have there! I bet we could have some fun together, you and I…"');
  scene.text('The man gives you a toothy grin when he feels you wrap your fingers around his cock, but he wants more. He takes you by the hand and guides you to the rear entrance of the diner, into the back alley. He positions you against the dumpsters and eagerly shoves his cock inside you.');
  qspCall(s, 'dinsex', 'vaginal_sex', 6, 'unknown');
  scene.text('Not a surprise, he barely lasts any time at all, with in a few minutes he grunts and pulls out of your pussy and shoots his load all over your ass and without a further word he goes back into the cafe.');
  qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Return to the restroom', goto: ['laketoilet', 'main'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start1':
      enterStart1(s, scene);
      break;
    case 'start2':
      enterStart2(s, scene);
      break;
    case 'start3':
      enterStart3(s, scene);
      break;
    case 'start4':
      enterStart4(s, scene);
      break;
    case 'start5':
      enterStart5(s, scene);
      break;
    case 'start6':
      enterStart6(s, scene);
      break;
    case 'toiletsex':
      enterToiletsex(s, scene);
      break;
    default:
      enterStart1(s, scene);
      break;
  }
}

export const LCwork: LocationDef = {
  name: 'LCwork',
  title: 'You walk up to the group of men and give them a friendly smi',
  region: 'other',
  description: ['You walk up to the group of men and give them a friendly smile as you say: "Good evening, sirs. I will be your waitress tonight."'],
  enter: enter,
};
