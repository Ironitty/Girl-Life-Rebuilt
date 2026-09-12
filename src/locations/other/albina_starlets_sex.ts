import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterWhore1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 40;
  qspCall(s, 'npcgeneratec', '', 0, 'The Armenian', Math.floor(Math.random() * 15) + 18, 0, 1);
  ((s as any).AlbinaQW ?? {})['Cust'] = ((s as any).npclastgenerated ?? 0);
  // TODO-QSP: gs 'npcStat', $AlbinaQW['Cust']
  qspCall(s, 'stat', '');
  if (((s as any).AlbinaQW ?? 0)?.['client1'] === 0) {
    scene.text('The Armenian, still tightly gripping your arm, drags you into his hotel room where he forces you to strip naked, his hungry eyes inspecting every inch of you.');
    scene.text('"Time to earn your money, whore!" he says as he forces you to your knees in front of him.');
    scene.actions([
      { label: 'Please him', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    ((s as any).AlbinaQW ?? {})['client1'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/kotovbj51.mp4');
    scene.text('He unzips his pants, pulls his cock out and stares down at you impatiently, so you start sheepishly licking his shaft and sucking on the head before taking it into your mouth and sucking while looking up at him to seek approval.');
    scene.text('"Oh yes, just like that you little fucking slut!"');
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get your pussy fucked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/miss1.mp4');
    scene.text('You spend a few minutes sucking his dick when he suddenly pulls out, grabs you by the hair and roughly throws you face down onto the bed.');
    scene.text('The man moves in, roughly flips you on your back and spreads your legs. "This pussy looks like it will be worth every ruble!"');
    scene.text('You feel the tip of his cock spread your lips apart as he pushes into you before grabbing your throat and pinning you to the bed as he starts to very roughly pound your pussy. He occasionally uses his other hand to very tightly squeeze and twist your nipple, seemingly enjoying treating you roughly.');
    scene.actions([
      { label: 'You like it', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['client1_like'] = 1;
    qspCall(s, 'stat', '');
    scene.text('He twists your nipple even harder and you try holding back your moans of pleasure to hide the fact that you\'re enjoying the roughness, but he can see the pleasure in your eyes and smiles sadistically as he tightens his grip around your neck.');
    scene.actions([
      { label: 'Panic', handler: (st: GameState) => {
    scene.text('You thrash your arms in distress, but he just smiles and doesn\'t loosen his grip until you\'re on the verge of blacking out. He then resumes fucking you, faster and seemingly closer to climax as you clutch your neck and gasp for air.');
    scene.text('After a few more minutes, he pulls out and flips you over before pulling you up onto your knees, your ass in the air. He slides back inside your pussy and starts pounding you doggystyle as he slaps and squeezes your ass. You\'re forced to endure this for what feels like an eternity before he suddenly pulls out and you feel his cum splattering onto your labia and asshole.');
    scene.text('"Waste of a good pussy if you can\'t cum inside it I say, especially when it\'s hot little numbers like you!" he crudly remarks. "I might pay Albina a little visit again. Her tight little fuck hole is just begging me to fill it again!" he adds.');
    scene.text('To your despair and disgust, he drags you up next to him and forces you into his now sweaty embrace, his flabby arm wrapped around your neck as he fondles and squeezes your breast while speaking on his phone in a language you don\'t understand. This post sex torture finally ends 10 minutes later.');
    qspCall(s, 'pain', '', 2, 'throat', 'choke');
    qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'humiliation', 'rough', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust']
    qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
    qspCall(s, 'pain', '', 2, 'vaginal', 'stretch');
    // TODO-QSP: gs 'cum_call', 'labia', $AlbinaQW['Cust']
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home'] },
    ]);
  } },
      { label: 'Enjoy it', handler: (st: GameState) => {
    scene.text('You feel yourself becoming aroused as you struggle to breathe and he smiles even wider. "You\'re enjoying this, aren\'t you, bitch? I can feel your pussy getting tighter!"');
    scene.text('He doesn\'t loosen his grip until you\'re on the verge of blacking out. When he releases you, you feel a wave of pleasure rushing over you as he starts fucking you even harder, seemingly close to climax as you rub your neck.');
    scene.text('After a few more minutes, he pulls out and flips you over before pulling you up onto your knees, your ass in the air. He slides back inside your pussy and starts pounding you doggystyle as he slaps and squeezes your ass before he suddenly pulls out and you feel his cum splattering onto your labia and asshole.');
    scene.text('"Waste of a good pussy if you can\'t cum inside it I say, especially when it\'s dirty sluts like you who like it rough," he crudly remarks. "I might pay Albina a little visit again. Her tight little fuck hole is just begging me to fill it again!" he adds.');
    scene.text('To your disgust, he drags you up next to him and forces you into his now sweaty embrace, his flabby arm wrapped around your neck as he fondles and squeezes your breast while speaking on his phone in a language you don\'t understand. This post sex torture finally ends 10 minutes later.');
    qspCall(s, 'pain', '', 2, 'throat', 'choke');
    qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'humiliation', 'rough', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust']
    qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
    qspCall(s, 'pain', '', 2, 'vaginal', 'stretch');
    // TODO-QSP: gs 'cum_call', 'labia', $AlbinaQW['Cust']
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home'] },
    ]);
  } },
    ]);
  } },
      { label: 'You hate it', handler: (st: GameState) => {
    scene.text('You squeal in pain as he continues twisting your nipple. "That\'s right, keep squealing like a bitch!"');
    scene.text('You then panic when he stops thrusting and tightens his grip around your neck. You thrash your arms in distress, but he just smiles and doesn\'t loosen his grip until you\'re on the verge of blacking out. He then resumes fucking you, faster and seemingly closer to climax as you clutch your neck and gasp for air.');
    scene.text('After a few more minutes, he pulls out and flips you over before pulling you up onto your knees, your ass in the air. He slides back inside your pussy and starts pounding you doggystyle as he slaps and squeezes your ass. You\'re forced to endure this for what feels like an eternity before he suddenly pulls out and you feel his cum splattering onto your labia and asshole.');
    scene.text('"Waste of a good pussy if you can\'t cum inside it I say, especially when it\'s hot little numbers like you!" he crudly remarks. "I might pay Albina a little visit again. Her tight little fuck hole is just begging me to fill it again!" he adds.');
    scene.text('To your despair and disgust, he drags you up next to him and forces you into his now sweaty embrace, his flabby arm wrapped around your neck as he fondles and squeezes your breast while bragging on his phone to his friend about "the fine little pussy" he just fucked and he "should come and sample it." This post sex torture finally ends 10 minutes later.');
    qspCall(s, 'pain', '', 2, 'throat', 'choke');
    qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'humiliation', 'rough', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust']
    qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
    qspCall(s, 'pain', '', 2, 'vaginal', 'stretch');
    // TODO-QSP: gs 'cum_call', 'labia', $AlbinaQW['Cust']
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('The Armenian leads you into his hotel room where he looks at you expectantly. Knowing what he wants, you strip naked and get on your knees in front of him, his perverted gaze watching you as you do.');
    scene.actions([
      { label: 'Please him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/oral1.mp4');
    scene.text('You unzip his pants and immediately take his cock into your mouth, sucking it while looking up at him to seek approval.');
    scene.text('"The whore remembers her place. On her knees with my cock between her lips!" he laughs before grabbing your hair and proceeding to fuck your mouth, making you gag and splutter as his cock slams in and out of your throat.');
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get your pussy fucked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/miss1.mp4');
    scene.text('After a few minutes of this, the man roughly flips you on your back and spreads your legs, smiling crudely as he massages your clit with his fat thumb. "This pussy is one of the finest my money has ever bought, and I\'m going to get my money\'s worth, slut. You\'re going to milk every drop of cum from my cock. Got it?"');
    scene.text('You just silently nod and feel the thick tip of his fat cock spreading your labia apart as he pushes into you.');
    if (((s as any).AlbinaQW ?? 0)?.['client1_like'] === 1) {
      scene.text('Knowing you like it rough, his hand immediately reaches for your nipple and roughly twists it as he starts pounding your pussy. You squeal in pleasure and instinctively clench your pussy around his cock.');
      scene.text('"That\'s it, slut! Squeeze harder!" he smirks before wrapping his hand around your neck and squeezing.');
      scene.actions([
        { label: 'Panic', handler: (st: GameState) => {
    scene.text('You look at him in distress, but he just smiles and doesn\'t loosen his grip until you\'re on the verge of blacking out. He then resumes fucking you, faster and seemingly closer to climax as you clutch your neck and gasp for air.');
    scene.text('After a few more minutes, he pulls out and flips you over before pulling you up onto your knees, your ass in the air. He slides back inside your pussy and starts pounding you doggystyle as he slaps and squeezes your ass. You\'re forced to endure this for what feels like an eternity before he suddenly pulls out and you feel his cum splattering onto your labia and asshole.');
    scene.text('"Another pounding where I can\'t cum inside you," he mutters. "Whores with fucking strings attached. At least the pussy is good."');
    scene.text('Knowing you\'ll have to do it anyway, you reluctantly crawl up next to him and into his now sweaty embrace, his flabby arm wrapped around your neck as he fondles and squeezes your breast while speaking on his phone in a language you don\'t understand. This post sex torture finally ends 10 minutes later.');
    qspCall(s, 'pain', '', 2, 'throat', 'choke');
    qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'humiliation', 'rough', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust']
    qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
    qspCall(s, 'pain', '', 2, 'vaginal', 'stretch');
    // TODO-QSP: gs 'cum_call', 'labia', $AlbinaQW['Cust']
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home'] },
    ]);
  } },
        { label: 'Enjoy it', handler: (st: GameState) => {
    scene.text('You feel yourself becoming aroused as you struggle to breathe and he smiles even wider. "Oh yes, I can feel your pussy getting tighter!"');
    scene.text('He doesn\'t loosen his grip until you\'re on the verge of blacking out. When he releases you, you feel a wave of pleasure rushing over you as he starts fucking you even harder, seemingly close to climax as you rub your neck.');
    scene.text('After a few more minutes, he pulls out and flips you over before pulling you up onto your knees, your ass in the air. He slides back inside your pussy and starts pounding you doggystyle as he slaps and squeezes your ass before he suddenly pulls out and you feel his cum splattering onto your labia and asshole.');
    scene.text('"Another pounding where I can\'t cum inside you," he mutters. "Whores with fucking strings attached. At least the pussy is good."');
    scene.text('Knowing you\'ll have to do it anyway, you crawl into his now sweaty embrace, his flabby arm wrapped around your neck as he fondles and squeezes your breast while speaking on the phone in the language you don\'t understand again.');
    qspCall(s, 'pain', '', 2, 'throat', 'choke');
    qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'humiliation', 'rough', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust']
    qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
    qspCall(s, 'pain', '', 2, 'vaginal', 'stretch');
    // TODO-QSP: gs 'cum_call', 'labia', $AlbinaQW['Cust']
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home'] },
    ]);
  } },
      ]);
    } else {
      scene.text('His hand immediately reaches for your nipple and he painfully twists it between his fat fingers, causing you to squeal loudly in pain and thrash about underneath him.');
      scene.text('"I like it when sluts put up a bit of resistance. Makes pounding your tight little pussy more interesting," he says with a lewd smile before wrapping his hand around your neck and squeezing.');
      scene.actions([
        { label: 'Panic', handler: (st: GameState) => {
    scene.text('You thrash your arms in distress, but he just smiles and doesn\'t loosen his grip until you\'re on the verge of blacking out. He then resumes fucking you, faster and seemingly closer to climax as you clutch your neck and gasp for air.');
    scene.text('After a few more minutes, he pulls out and flips you over before pulling you up onto your knees, your ass in the air. He slides back inside your pussy and starts pounding you doggystyle as he slaps and squeezes your ass. You\'re forced to endure this for what feels like an eternity before he suddenly pulls out and you feel his cum splattering onto your labia and asshole.');
    scene.text('"Another pounding where I can\'t cum inside you," he mutters. "Whores with fucking strings attached. At least the pussy is good."');
    scene.text('Knowing you\'ll have to do it anyway, you reluctantly crawl up next to him and into his now sweaty embrace, his flabby arm wrapped around your neck as he fondles and squeezes your breast while speaking on his phone in a language you don\'t understand. This post sex torture finally ends 10 minutes later.');
    qspCall(s, 'pain', '', 2, 'throat', 'choke');
    qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'humiliation', 'rough', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust']
    qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
    qspCall(s, 'pain', '', 2, 'vaginal', 'stretch');
    // TODO-QSP: gs 'cum_call', 'labia', $AlbinaQW['Cust']
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWhore2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'npcgeneratec', '', 0, 'The Armenian', Math.floor(Math.random() * 15) + 18, 0, 1);
  ((s as any).AlbinaQW ?? {})['Cust'] = ((s as any).npclastgenerated ?? 0);
  // TODO-QSP: gs 'npcStat', $AlbinaQW['Cust']
  qspCall(s, 'npcgeneratec', '', 0, 'The second Armenian', Math.floor(Math.random() * 15) + 18, 0, 1);
  ((s as any).AlbinaQW ?? {})['Cust1'] = ((s as any).npclastgenerated ?? 0);
  // TODO-QSP: gs 'npcStat', $AlbinaQW['Cust1'], 'a'
  qspCall(s, 'stat', '');
  if (((s as any).AlbinaQW ?? 0)?.['client2'] === 0) {
    ((s as any).AlbinaQW ?? {})['client2'] = 1;
    qspCall(s, 'stat', '');
    scene.text('Laughing, the two Armenians shove you into their hotel room and you fall to the floor. "Get up. It\'s time to show us what you\'ve got little lamb!" one says.');
    // TODO-QSP: dynamic text: "I want to see what those <<$pc_desc['lips']>> lips of yours can do. They look l...
    scene.text(`"I want to see what those ${((s as any).pc_desc ?? 0)?.['lips']} lips of yours can do. They look like they were made to suck cock!" the other man replies.`);
    scene.actions([
      { label: 'Please them', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/bjd.jpg');
    scene.text('The two men watch with hungry perversion as you stand and reluctantly undress in front of them. Once you\'re naked, they unbuckle their pants and pull their cocks out before one of them grabs you and forces you to your knees.');
    scene.text('He maintains tightly grabs your hair and holds you in place as you lick, jerk, and suck the two cocks until they\'re both rock-hard. You look up at the two men, seeking their approval.');
    scene.text('"Very good little lamb. Now take my cock. Take it all!" one of the men barks and forces his entire length into your mouth, causing you to choke. The two men laugh and force you to keep sucking and jerking them off.');
    qspCall(s, 'arousal', 'hj', 3, ((s as any).npcID ?? 0), 'group', 'sub', 'prostitution');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID ?? 0), 'group', 'sub', 'rough', 'humiliation', 'prostitution');
    qspCall(s, 'pain', '', 1, 'throat', 'choke');
    qspCall(s, 'arousal', 'hj', 3, ((s as any).npcID1 ?? 0), 'group', 'sub', 'prostitution');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'group', 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('"It\'s time for you to get roasted, little lamb!" one of them says after you\'ve spent a few minutes sucking their cocks.');
    scene.text('You\'re grabbed by the hair and roughly pulled to your feet before you\'re thrown onto the bed on all fours. The two men undress and move into position at both ends. "You might be the sweetest thing I\'ve ever seen. Even sweeter than that last whore your friend gave us!" one of the men laughs.');
    scene.text('You start thinking of that girl and how she handled these men when a sharp slap to the face brings you back and you notice the cock hanging in front of you. "Get back to work whore!" he shouts.');
    scene.actions([
      { label: 'Get spitroasted', handler: (st: GameState) => {
    scene.img('images/shared/sex/group/threesomepm8.mp4');
    scene.text('Your cheek stinging, you start sucking the cock in front of you. This muffles your pained moan as the other man pushes his cock deep into your unprepared ass.');
    scene.text('The two men laugh with each other as they both start to roughly fuck you from both ends. The men hold a tight grip on your head and hips and you\'re unable to move.');
    scene.text('The pain of your dry ass being fucked and gagging on a cock is forcing tears from your eyes when the man in your ass suddenly groans and you feel a warmth coat your bowels as he cums.');
    scene.text('His cock pops out of you and his cum slowly runs from your hole as the man you\'re sucking picks up the pace.');
    qspCall(s, 'arousal', 'anal', 30, ((s as any).npcID ?? 0), 'group', 'sub', 'rough', 'prostitution');
    qspCall(s, 'arousal', 'bj', (-1), ((s as any).npcID1 ?? 0), 'group', 'sub', 'rough', 'prostitution');
    qspCall(s, 'pain', '', 1, 'cheeks', 'slap');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get roughly pounded', handler: (st: GameState) => {
    scene.img('images/shared/sex/group/threesomepm6.mp4');
    scene.text('As you take one cock into your mouth and start sucking it, the other penetrates your pussy. "You\'re nice and tight, little lamb!"');
    scene.text('You\'re slowly sucking the man\'s cock when he suddenly grabs your head and starts forcefully fucking your mouth, causing you to gag on his cock while the other reaches round and painfully squeezes and twists your nipples as he pounds your pussy.');
    scene.text('You\'re trying your best to endure it, tears running down your cheeks, when the man fucking you suddenly pulls out and moves around in front of you and starts jerking his cock.');
    qspCall(s, 'arousal', 'bj', (-1), ((s as any).npcID ?? 0), 'group', 'sub', 'rough', 'prostitution');
    qspCall(s, 'pain', '', 3, 'nipples', 'pinch');
    qspCall(s, 'pain', '', 1, 'throat', 'choke');
    qspCall(s, 'arousal', 'vaginal', 30, ((s as any).npcID1 ?? 0), 'group', 'sub', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust1']
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum1.11.mp4');
    scene.text('The man in your mouth suddenly forces you down onto his cock and you choke as his tip hits your throat. Unable to move, you let out a strangled gurgle as cum hits the back of your throat.');
    scene.text('The man frees you from his grip, but you don\'t have time to recover before the other one grabs your hair and roughly pulls you up to him.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group', 'sub', 'prostitution');
    qspCall(s, 'pain', '', 1, 'throat', 'choke');
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $AlbinaQW['Cust']
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow again', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum1.11.mp4');
    scene.text('He forces you to open your mouth and his cum starts splashing onto your tongue before he makes you suck him. Your mouth is now full of cum and some starts dribbling down your chin.');
    scene.text('One of the men sees this and grabs your throat. "Now now, little lamb. Don\'t go wasting it. I want you to swallow every. Last. Drop!"');
    scene.text('You do as you\'re told and swallow the loads in your mouth, while using your finger to scoop the cum on your chin back into your mouth. You show the man your clean tongue and he releases you with a pat on the head.');
    scene.text('"This little lamb knows her place. I think we\'ll be seeing you again soon!"');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group', 'sub', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $AlbinaQW['Cust1']
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home'] },
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
  } else {
    scene.text('Laughing, the two Armenians shove you into their hotel room and you fall to the floor. "Get up. It\'s time for another roasting, little lamb!" one says.');
    // TODO-QSP: dynamic text: "Yeah, I want to see those <<$pc_desc['lips']>> lips of yours wrapped around my ...
    scene.text(`"Yeah, I want to see those ${((s as any).pc_desc ?? 0)?.['lips']} lips of yours wrapped around my cock again!" the other man replies.`);
    scene.actions([
      { label: 'Please them', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/bjd.jpg');
    scene.text('The two men watch with hungry perversion as you stand and reluctantly undress in front of them. Once you\'re naked, they unbuckle their pants and pull their cocks out before one of them grabs you and forces you to your knees.');
    scene.text('He maintains tightly grabs your hair and holds you in place as you lick, jerk, and suck the two cocks until they\'re both rock-hard. You look up at the two men, seeking their approval.');
    scene.text('"Very good little lamb. Now take my cock. Take it all!" one of the men barks and forces his entire length into your mouth, causing you to choke. The two men laugh and force you to keep sucking and jerking them off.');
    qspCall(s, 'arousal', 'hj', 3, ((s as any).npcID ?? 0), 'group', 'sub', 'prostitution');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID ?? 0), 'group', 'sub', 'rough', 'humiliation', 'prostitution');
    qspCall(s, 'pain', '', 1, 'throat', 'choke');
    qspCall(s, 'arousal', 'hj', 3, ((s as any).npcID1 ?? 0), 'group', 'sub', 'prostitution');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'group', 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('"It\'s time for you to get roasted, little lamb!" one of them says after you\'ve spent a few minutes sucking their cocks.');
    scene.text('You\'re grabbed by the hair and roughly pulled to your feet before you\'re thrown onto the bed on all fours. The two men undress and move into position at both ends. "You\'re definitely the best whore your friend has ever given us!" one of the men laughs.');
    scene.text('You start thinking about what he just said when a sharp slap to the face brings you back and you notice the cock hanging in front of you. "Get back to work, whore!" he shouts.');
    scene.actions([
      { label: 'Get spitroasted', handler: (st: GameState) => {
    scene.img('images/shared/sex/group/threesomepm8.mp4');
    scene.text('Your cheek stinging, you start sucking the cock in front of you. This muffles your pained moan as the other man pushes his cock deep into your unprepared ass.');
    scene.text('The two men laugh with each other as they both start to roughly fuck you from both ends. The men hold a tight grip on your head and hips and you\'re unable to move.');
    scene.text('The pain of your dry ass being fucked and gagging on a cock is forcing tears from your eyes when the man in your ass suddenly groans and you feel a warmth coat your bowels as he cums.');
    scene.text('His cock pops out of you and his cum slowly runs from your hole as the man you\'re sucking picks up the pace.');
    qspCall(s, 'arousal', 'anal', 30, ((s as any).npcID ?? 0), 'group', 'sub', 'rough', 'prostitution');
    qspCall(s, 'arousal', 'bj', (-1), ((s as any).npcID1 ?? 0), 'group', 'sub', 'rough', 'prostitution');
    qspCall(s, 'pain', '', 1, 'cheeks', 'slap');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get roughly pounded', handler: (st: GameState) => {
    scene.img('images/shared/sex/group/threesomepm6.mp4');
    scene.text('As you take one cock into your mouth and start sucking it, the other penetrates your pussy. "This pussy is just as warm and tight as I remember."');
    scene.text('You\'re slowly sucking the man\'s cock when he suddenly grabs your head and starts forcefully fucking your mouth, causing you to gag on his cock while the other reaches round and painfully squeezes and twists your nipples as he pounds your pussy.');
    scene.text('You\'re trying your best to endure it, tears running down your cheeks, when the man fucking you suddenly pulls out and moves around in front of you and starts jerking his cock. "Get ready for your feeding, lamb. It\'s got lots of protein in it!" he laughs.');
    qspCall(s, 'arousal', 'bj', (-1), ((s as any).npcID ?? 0), 'group', 'sub', 'rough', 'prostitution');
    qspCall(s, 'pain', '', 3, 'nipples', 'pinch');
    qspCall(s, 'pain', '', 1, 'throat', 'choke');
    qspCall(s, 'arousal', 'vaginal', 30, ((s as any).npcID1 ?? 0), 'group', 'sub', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust1']
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum1.11.mp4');
    scene.text('The man in your mouth suddenly forces you down onto his cock. You choke as his tip hits your throat. Unable to move, you let out a strangled gurgle as cum hits the back of your throat.');
    scene.text('The man frees you from his grip, but you don\'t have time to recover before the other one grabs your hair and roughly pulls you up to him.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group', 'sub', 'prostitution');
    qspCall(s, 'pain', '', 1, 'throat', 'choke');
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $AlbinaQW['Cust']
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow again', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum1.11.mp4');
    scene.text('He forces you to open your mouth and his cum starts splashing onto your tongue before he makes you suck him. Your mouth is now full of cum and some starts dribbling down your chin.');
    scene.text('One of the men sees this and grabs your throat. "Now now little lamb. Don\'t go wasting it. I want you to swallow every. Last. Drop!"');
    scene.text('You do as you\'re told and swallow the loads in your mouth, while using your finger to scoop the cum on your chin back into your mouth. You show the man your clean tongue and he releases you with a pat on the head.');
    scene.text('"The little lamb remembers her place. Good."');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group', 'sub', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $AlbinaQW['Cust1']
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home'] },
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
  // TODO-QSP: end
  scene.build();
}

function enterWhore3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'npcgeneratec', '', 0, 'The confident boy', Math.floor(Math.random() * 6) + 18, 0, 1);
  ((s as any).AlbinaQW ?? {})['Cust'] = ((s as any).npclastgenerated ?? 0);
  // TODO-QSP: gs 'npcStat', $AlbinaQW['Cust']
  qspCall(s, 'npcgeneratec', '', 0, 'The shy boy', Math.floor(Math.random() * 6) + 18, 0, 1);
  ((s as any).AlbinaQW ?? {})['Cust1'] = ((s as any).npclastgenerated ?? 0);
  // TODO-QSP: gs 'npcStat', $AlbinaQW['Cust1'], 'a'
  qspCall(s, 'stat', '');
  if (((s as any).AlbinaQW ?? 0)?.['client3'] === 0) {
    ((s as any).AlbinaQW ?? {})['client3'] = 1;
    qspCall(s, 'stat', '');
    scene.text('The young men take you to their hotel room. One of them impatiently pulls you along while the other shyly tags along behind you.');
    scene.actions([
      { label: 'Get started', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    scene.img('images/shared/sex/blowjob/toiletbj2.jpg');
    scene.text('"Hurry up, bro!" the confident one says. "You don\'t want to be a virgin anymore, so here\'s a slut that will make you a man, but won\'t give you a disease in the process."');
    scene.text('He forces you to kneel in front of him and you unzip his pants. "See? This whore can\'t wait to get started!" he laughs as you start sucking his dick. You hold in a giggle when you see that, even when hard, he\'s a little on the smaller side.');
    scene.text('As you continue sucking his dick, the shy boy\'s confidence grows and he pulls out his much larger cock.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck their dicks', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/bjd.jpg');
    scene.text('He joins his friend and you switch your focus to the shy boy\'s much bigger cock. He groans as you take it into your mouth and has to stop himself from cumming too soon.');
    scene.text('"Feels good having a girl work your dick, doesn\'t it?" the confident boy says and the shy one just nods and groans before you start alternating which dick you\'re sucking while jerking the other one.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'sub', 'group', 'prostitution');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'sub', 'group', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/threesome1.jpg');
    scene.text('The confident boy lifts you to your feet and practically tears your clothes off before throwing you on your back on the bed. They pull their pants off and the confident boy dangles his cock near your face as you hang your head over the edge of the bed.');
    scene.text('You take his cock into your mouth and start sucking while the shy boy gets on the bed and awkwardly spreads your legs before trying to guide his cock into your pussy. It takes him a few attempts to properly line it up, but you soon feel it stretching you out as he pushes it inside you.');
    scene.text('The shy boy starts slowly fucking you while the one in your mouth pushes deep and tries deepthroating you, his tip barely reaching your throat.');
    scene.text('"Feels good, doesn\'t it? Like a piece of warm sharlotka," the confident boy says as he friend groans loudly in pleasure. "Just don\'t blow your load inside her. You don\'t get bitches like this pregnant."');
    scene.text('The two of them fuck you like this for a good few minutes until the shy boy suddenly pulls out and walks around next to his friend.');
    qspCall(s, 'arousal', 'bj', 30, ((s as any).npcID ?? 0), 'sub', 'group', 'prostitution');
    qspCall(s, 'arousal', 'vaginal', (-1), ((s as any).npcID1 ?? 0), 'sub', 'group', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust1']
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'sub', 'group', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/yum.mp4');
    scene.text('The confident boy thrusts into your mouth and starts cumming. It\'s a surprisingly large amount and you\'re forced to swallow it down until he finishes.');
    scene.text('He then pulls out and you gasp for breath as the shy boy slowly steps up to you. You keep your mouth open and the confident boy laughs. "Look bro, the bitch wants you to feed her!"');
    scene.text('The shy boy jerks his dick and quickly reaches climax as he shoots his load into your open mouth. You absent-mindedly rub your pussy as you play with the cum in your mouth.');
    scene.text('"Damn, you left this kitty in heat. Must have fucked her real good, bro!" the confident boy laughs as his friend blushes and you swallow his cum.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'sub', 'group', 'humiliation', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $AlbinaQW['Cust']
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $AlbinaQW['Cust1']
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('The two young men take you to their hotel room. The shy one looks a lot more confident than last time.');
    scene.actions([
      { label: 'Suck their dicks', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/bjd.jpg');
    scene.text('You immediately get on your knees and pull out their dicks, alternating which one you\'re sucking while jerking the other one.');
    scene.text('The two boys moan in pleasure and make remarks about how good a job you\'re doing.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'sub', 'group', 'prostitution');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'sub', 'group', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/threesome1.jpg');
    scene.text('The boys lifts you to your feet and practically tear your clothes off before throwing you on your back on the bed. They pull their pants off and the confident boy dangles his cock near your face as you hang your head over the edge of the bed.');
    scene.text('You take his cock into your mouth and start sucking while the shy boy gets on the bed and spreads your legs before shoving his cock into your pussy.');
    scene.text('After a few minutes, the confident boy speaks up. "I want a turn of that pussy now."');
    scene.text('They switch places, the shy boy shoving his bigger cock into your mouth while the other inserts his into your pussy. It\'s not as big as his friend\'s and doesn\'t fill you as much, but he enthusiastically starts fucking you, driving his friend\'s dick down your throat.');
    scene.text('They fuck you like this for a few minutes until they both pull out and get you down on your knees in front of them as they jerk their cocks.');
    qspCall(s, 'arousal', 'bj', 30, ((s as any).npcID ?? 0), 'sub', 'group', 'prostitution');
    qspCall(s, 'arousal', 'bj', 30, ((s as any).npcID1 ?? 0), 'sub', 'group', 'prostitution');
    qspCall(s, 'arousal', 'vaginal', (-1), ((s as any).npcID ?? 0), 'sub', 'group', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust']
    qspCall(s, 'arousal', 'vaginal', (-1), ((s as any).npcID1 ?? 0), 'sub', 'group', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust1']
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial0,5.mp4');
    scene.text('The two boys take turns blowing their loads over your face and the two of them grin at each other.');
    scene.text('"She\'s well worth the money, but I think we should try out some of the other girls," the confident boy says.');
    scene.text('"That blonde one has some pretty pretty nice tits. I might get her for a… one on one," the shy one replies.');
    scene.text('"Damn bro, you\'ve barely lost your V-card and you\'re already a player!"');
    scene.text('They ignore you as you go and clean up.');
    // TODO-QSP: gs 'cum_call', 'face', $AlbinaQW['Cust']
    // TODO-QSP: gs 'cum_call', 'face', $AlbinaQW['Cust1']
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWhore4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npcgeneratec', '', 0, 'The old man', Math.floor(Math.random() * 11) + 60, 0, 1);
  ((s as any).AlbinaQW ?? {})['Cust'] = ((s as any).npclastgenerated ?? 0);
  // TODO-QSP: gs 'npcStat', $AlbinaQW['Cust']
  qspCall(s, 'stat', '');
  scene.text('Holding your hand, the old man escorts you into his cheap motel room. While he still retains some muscle and even tattoos from his youth, you can\'t ignore the fact that he\'s old enough to be your grandfather, if not older.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get started', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/old_man1.jpg');
    scene.text('The old man gives you a perverted grin as you sink to your knees in front of him and unzip his pants before pulling down his underwear. His short, slender cock is nothing impressive, but he continues grinning down at you expectantly.');
    scene.text('You gaze up at him as you run your tongue along his short shaft before taking it into your mouth. You gag a little, but it doesn\'t taste or feel as bad as you were expecting as you start sucking while teasing the head with your tongue.');
    scene.text('"Oh god!" he cries out as you feel his cock twitch with pleasure in your mouth.');
    qspCall(s, 'arousal', 'bj', (-2), 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/old_man2.jpg');
    scene.text('After you\'ve spent a few minutes sucking him off, he pulls his cock out of your mouth and lifts you up before placing you down on the sofa. ');
    scene.text('The perverted smile never leaves his face as you spread your legs and he steps between them before pressing the tip of his small cock against your slit.');
    scene.text('You let out a quiet moan as you feel your pussy stretch a little, but that\'s about it. His cock isn\'t big enough to get much of a reaction out of you.');
    scene.text('The old man doesn\'t care though, and starts eagerly thrusting his hips.');
    scene.text('"God, you feel amazing!" he grunts. "I never thought I\'d ever be fucking a tight young pussy again!"');
    scene.text('You let out some fake moans, his cock not penetrating you deep enough for you to feel much pleasure despite his full length being inside you.');
    qspCall(s, 'arousal', 'vaginal', (-2), 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust']
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/old_man3.jpg');
    scene.text('He pulls out and sits on the sofa next to you before pulling you on top of him. He smacks your ass as you lower yourself down onto his cock.');
    scene.text('You start riding him as best as you can, but you don\'t get much pleasure out of the act other than when he eagerly paws at your ass.');
    scene.text('Desperate for something, you lean forward and push your breasts into his face. The old man grins before he starts eagerly licking and sucking on your nipple as his hands continue pawing at your ass.');
    qspCall(s, 'arousal', 'vaginal', (-2), 'prostitution');
    qspCall(s, 'arousal', 'foreplay', (-2), 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Doggy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/old_man4.jpg');
    scene.text('You\'re a little disappointed when he lifts you off of him and gets you on all fours before he starts fucking you from behind.');
    scene.text('You reach back and start teasing your clit as his thrusts suddenly become more rapid and his breathing hitches, as if he\'s trying to hold out for as long as he can.');
    scene.text('"Fuck, I can\'t do it!" he grunts. "I\'m about to cum!"');
    qspCall(s, 'arousal', 'vaginal', (-2), 'prostitution');
    qspCall(s, 'arousal', 'clit_finger', (-2), 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/old_man5.jpg');
    scene.text('You quickly get on your knees in front of him and start jerking him off while swirling your tongue over the head of his cock, getting a taste of your juices in the process.');
    scene.text('He barely lasts a few seconds before he abruptly ejaculates, grunting loudly as a small amount of warm cum spurts out of his cock and lands on your forehead.');
    scene.text('He groans as you take his cock into your mouth and suck it clean before popping it out of your mouth with a wet smack of your lips and grinning up at him.');
    scene.text('"God, that was amazing!" he says with a happy smile. "You truly made an old man feel young again, darling. I\'ll be sure to tell my friends all about you!"');
    scene.text('You get up off your knees as he starts pulling his clothes back on. As you do, you spot the clock on the end table and are surprised to see that barely 10 minutes have passed since you entered the room.');
    scene.text('You sigh as your lack of pleasure suddenly makes sense, but the old man is too busy to hear you.');
    // TODO-QSP: gs 'cum_call', 'face', $AlbinaQW['Cust']
    qspCall(s, 'arousal', 'hj', (-2), 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home'] },
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

function enterWhore5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'npcgeneratec', '', 0, 'The first old man', Math.floor(Math.random() * 6) + 60, 0, 1);
  ((s as any).AlbinaQW ?? {})['Cust'] = ((s as any).npclastgenerated ?? 0);
  // TODO-QSP: gs 'npcStat', $AlbinaQW['Cust']
  qspCall(s, 'npcgeneratec', '', 0, 'The second old man', Math.floor(Math.random() * 6) + 60, 0, 1);
  ((s as any).AlbinaQW ?? {})['Cust1'] = ((s as any).npclastgenerated ?? 0);
  // TODO-QSP: gs 'npcStat', $AlbinaQW['Cust1'], 'a'
  qspCall(s, 'stat', '');
  scene.text('The two old men can barely contain their excitement as they lead you to their cheap motel room. You can\'t ignore the fact that they\'re both old enough to be your grandfather, if not older.');
  scene.text('As soon as you enter the room, the two men immediately start undressing faster than you were expecting for men their age.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck them both', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/old_men1.jpg');
    scene.text('The two men grin as they watch you undress before you kneel in front of them and they eagerly present their short, slender cocks to you.');
    scene.text('"Go on, you know you want to," one of the men says with a grin.');
    scene.text('The two men are well past their prime and you reluctantly start jerking and sucking their unappealing cocks, which rapidly become erect in your grasp.');
    qspCall(s, 'arousal', 'hj', (-2), ((s as any).npcID ?? 0), 'group', 'prostitution');
    qspCall(s, 'arousal', 'bj', (-2), ((s as any).npcID1 ?? 0), 'group', 'prostitution');
    qspCall(s, 'arousal', 'hj', (-2), ((s as any).npcID ?? 0), 'group', 'prostitution');
    qspCall(s, 'arousal', 'bj', (-2), ((s as any).npcID1 ?? 0), 'group', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/old_men2.jpg');
    scene.text('One of the men lays back on the bed and has you kneel in front of him and continue sucking his dick as the other moves in behind you and slides his dick into your pussy.');
    scene.text('You try to ignore the horrible texture of the cock in your mouth as the man behind you fucks you with great enthusiasm, but little technique.');
    scene.text('The man you\'re sucking off moans loudly and bucks his hips as the man behind you forces you forward slightly with each thrust, forcing the cock further into your mouth.');
    scene.text('"You need to try this pussy!" the man behind you says between grunts. "Young, ripe and tighter than the vice in my workshop!"');
    qspCall(s, 'arousal', 'bj', (-2), ((s as any).npcID ?? 0), 'group', 'prostitution');
    qspCall(s, 'arousal', 'vaginal', (-2), ((s as any).npcID1 ?? 0), 'group', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust1']
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swap position', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/old_men3.jpg');
    scene.text('"Let me have a go then!" the man you\'re sucking off replies and they both pull out before the man on the bed turns you around and lowers you down onto his cock as the other man steps up and shoves his cock into your mouth, giving you a taste of your juices.');
    scene.text('The man you\'re sucking grins down at you. "I haven\'t had a girl give me a blowjob this good in decades! This new generation of whore is something else!"');
    scene.text('"You weren\'t joking about her pussy, either! If she keeps riding me like this, I\'ll be blowing my load before I know it!" the other man laughs.');
    qspCall(s, 'arousal', 'vaginal', (-2), ((s as any).npcID ?? 0), 'group', 'prostitution');
    qspCall(s, 'arousal', 'bj', (-2), ((s as any).npcID1 ?? 0), 'group', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust']
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/old_men1.jpg');
    scene.text('You keep up your current pace and the men quickly announce that they\'re about to cum. They both pull out and get you on your knees between them, making you suck and jerk their cocks.');
    scene.text('After a few seconds, they both start jerking themselves off as one of them tells you to open your mouth.');
    scene.text('You do as you\'re told and stick out your tongue before the two men take turns blowing their loads in your mouth. Their cum tastes rather foul, but they force you to swallow it.');
    scene.text('Finished with you, the two men cheerfully chat with each other, stating that you\'re another "Starlet whore" crossed off their list before they discuss what girl they should get next time.');
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $AlbinaQW['Cust']
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $AlbinaQW['Cust1']
    qspCall(s, 'arousal', 'hj', (-2), ((s as any).npcID ?? 0), 'group', 'prostitution');
    qspCall(s, 'arousal', 'bj', (-2), ((s as any).npcID ?? 0), 'group', 'prostitution');
    qspCall(s, 'arousal', 'hj', (-2), ((s as any).npcID1 ?? 0), 'group', 'prostitution');
    qspCall(s, 'arousal', 'bj', (-2), ((s as any).npcID1 ?? 0), 'group', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home'] },
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

function enterWhore6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 40;
  qspCall(s, 'npcgeneratec', '', 0, 'The man', Math.floor(Math.random() * 17) + 24, 0, 1);
  ((s as any).AlbinaQW ?? {})['Cust'] = ((s as any).npclastgenerated ?? 0);
  // TODO-QSP: gs 'npcStat', $AlbinaQW['Cust']
  qspCall(s, 'stat', '');
  scene.text('The man leads you by the hand into his hotel room and over to the bed, where he undresses you and lays you on your back. You notice the ring on his finger, but since he hasn\'t paid for you to ask questions, you ignore it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get eaten out', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/denial.jpg');
    scene.text('He spreads your legs and starts licking away at your clit. You moan softly as his expert tongue gets you wet.');
    scene.text('You gasp when he slides a few fingers inside your hole and starts finger fucking you as he keeps eating you out.');
    scene.text('Your moans grow louder and your pussy starts tightening as your orgasm builds, but you\'re denied your release as he withdraws his fingers.');
    scene.text('Confused and disappointed, you look at him as he laughs. "What? You thought it would be that easy, slut? No, your job is to pleasure me first, then we\'ll see about you." He puts his fingers in your mouth and makes you taste your juices.');
    qspCall(s, 'arousal', 'cuni', (-2), 'sub', 'prostitution');
    qspCall(s, 'arousal', 'vaginal_finger', (-1), 'sub', 'humiliation', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pleasure him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/bj.jpg');
    scene.text('He lies down on the bed as you move in beside him. You see the bulge in his pants and you unzip them, his erect cock springing free.');
    scene.text('"Remember, satisfy me and I might satisfy you." You take his shaft into your mouth and start sucking, the man holding your hands to prevent you from reaching round and stimulating your engorged clit.');
    scene.text('You spend a good few minutes like this, the tension building up within you as your pussy gets more and more wet.');
    qspCall(s, 'arousal', 'bj', (-5), 'sub', 'prostitution');
    qspCall(s, 'arousal', 'BDSM', (-2), 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get teased further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/vaginal.jpg');
    scene.text('The man sits up and bends you over on your hands and knees. He moves in behind you and starts grinding the tip of his cock between your labia, knowingly teasing you but still not letting you cum.');
    scene.text('He then slowly slides his dick into your pussy and starts fucking you, teasing you by bringing you to the edge before pulling out at the last second, denying you your much needed orgasm before sliding back in and continuing.');
    qspCall(s, 'arousal', 'vaginal', (-2), 'sub', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust']
    qspCall(s, 'arousal', 'BDSM', (-2), 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Beg to cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/souvenir.jpg');
    scene.text('Eventually, his thrusts grow faster and he pulls out and pushes you on your stomach. He groans as his cum spurts onto your ass. When he finishes, he grabs his phone and moves around beside you.');
    scene.text('"That pussy is one of the best I\'ve ever had. I just need a souvenir to remind me of it," he smiles as he takes a photo of you and your cum splattered ass. "You definitely satisfied me, so you deserve your reward."');
    qspCall(s, 'arousal', 'vaginal', (-2), 'sub', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'precum', $AlbinaQW['Cust']
    qspCall(s, 'arousal', 'BDSM', (-2), 'sub', 'humiliation', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'butt', $AlbinaQW['Cust']
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get your reward', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/reward.jpg');
    scene.text('The man flips you back onto your back and spreads your legs. You moan heavily as his tongue returns to your clit and starts swirling away as his fingers slide into your wet hole and start working their magic once more.');
    scene.text('Your pussy starts tightening and the man picks up the pace. Soon enough, you let out a scream and squeeze your legs around his head as you\'re brought to an explosive orgasm. You release the man from your grip and lay on the bed riding the waves of pleasure rushing through you.');
    scene.text('The man is sitting on the edge of the bed as you step off. "Oh one last thing." He grabs hold of your ass, his cum still wet on your cheek. "You\'re going home like that."');
    scene.text('You blush at him, but obediently slide your panties back over your cum covered ass before he gives you a final smack on the ass and lets you leave.');
    qspCall(s, 'arousal', 'cuni', (-2), 'sub', 'prostitution');
    qspCall(s, 'arousal', 'vaginal_finger', (-1), 'sub', 'prostitution');
    qspCall(s, 'arousal', 'BDSM', (-1), 'sub', 'humiliation', 'prostitution');
    // TODO-QSP: gs 'cum_call', 'pantyrear', $AlbinaQW['Cust']
    qspCall(s, 'pain', '', 1, 'asscheeks', 'slap');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home', '\'no_clean\''] },
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

function enterWhore7(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/bukkake1.jpg');
  scene.text('The older man brings you to his luxury car and takes you to an upscale hotel in the city center. Once there, he leads you up to his penthouse suite, opening the door and motioning for you to step inside. You gulp when you enter the room and see a group of similar aged men gathered around smoking and drinking.');
  scene.text('They all look at you with lust in their eyes as the door closes loudly behind you and you jump in fright. You\'re now in a hotel room alone with a dozen older men. The man walks over to the group and sits down, taking the drink that\'s offered to him. He motions for you to come over and you sheepishly comply.');
  scene.text('"What\'s your name, girl?" he asks as he takes a swig of his drink.');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>…" you quietly reply and the men laugh.
  scene.text(`"${((s as any).pcs_firstname ?? 0)}…" you quietly reply and the men laugh.`);
  // TODO-QSP: dynamic text: "Okay <<$pcs_firstname>>, here's the deal. These are my associates who are here ...
  scene.text(`"Okay ${((s as any).pcs_firstname ?? 0)}, here's the deal. These are my associates who are here on business. All of us paid good money for you to show us a good time. So what you're going to do is give us a striptease, then we'll go from there. Got it?" he says rather sternly and you meekly nod.`);
  scene.text('One of the other men pours some vodka into a glass and offers it to you.');
  scene.text('"I can see you\'re a little nervous, so why don\'t you take this liquid courage first?"');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'npcgeneratec', '', 0, 'The old man', Math.floor(Math.random() * 21) + 40, 0, 1);
  ((s as any).AlbinaQW ?? {})['Cust0'] = ((s as any).npclastgenerated ?? 0);
  // TODO-QSP: gs 'npcStat', $AlbinaQW['Cust0']
  (s as any).s = 1;
  // TODO-QSP: :loop_whore7
  qspCall(s, 'npcgeneratec', '', 0, 'The old man\'s friend ' + qspUntranslated(s, "s>", { location: "albina_starlets_sex" }) + '', Math.floor(Math.random() * 31) + 30, 0, 1);
  ((s as any).AlbinaQW ?? {})['Cust' + String((s as any).s || '') + ''] = ((s as any).npclastgenerated ?? 0);
  // TODO-QSP: gs 'npcStat', $AlbinaQW['Cust<<s>>'], s
  (s as any).s = ((s as any).s ?? 0) + (1);
  if (((s as any).s ?? 0) < 12) {
    // TODO-QSP: jump 'loop_whore7'
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'drink', 'force');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/bukkake2.jpg');
    scene.text('You quietly shake your head and the man just scoffs. "Suit yourself," he says before downing the glass as another man starts playing some music.');
    scene.text('"Get dancing you fucking whore! We haven\'t got all night!"');
    scene.text('Feeling rather intimidated, you start dancing as sexily as you can to the music as you strip, the men whistling, cheering and shouting crude remarks at you as you slowly expose your body to them.');
    scene.text('Once you finish, the music stops and the men all walk up to you. You are blindfolded and have your hands held above your head before you feel the rim of a bottle pressing against your lips.');
    scene.text('"Open wide, whore. This is the good stuff and you\'re going to drink the lot!" you hear a menacing voice say in your ear.');
    scene.text('Your head is then pulled back by your hair and your mouth forced open. You immediately start choking as vodka starts pouring into your mouth and burning your throat, but the men keep forcing you to drink, only letting you stop for short breaths before pulling your head back and forcing you to keep going.');
    qspCall(s, 'outfit', 'strip_all', 'HotelRoom');
    qspCall(s, 'drugs', 'alcohol', 'vodka', (-3));
    qspCall(s, 'arousal', 'striptease', (-3), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Service them', goto: ['albina_starlets_sex', 'whore7_1'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/bukkake2.jpg');
    scene.text('Feeling intimidated, you take the glass and drink the vodka, spluttering as the alcohol burns its way down your throat. He offers you another, and again you give in and take the drink.');
    scene.text('"Okay, that\'s enough. Start dancing whore!" you hear a voice say as music starts playing. The men whistle, cheer and shout crude remarks at you as you slowly expose your body to them. The drink makes you a little tipsy, which causes the men to laugh when you stumble.');
    scene.text('"Look at this fucking lightweight! Are you sure she\'s worth her price?"');
    scene.text('Once you finish, the music stops and the men all walk up to you. You are blindfolded and have your hands held above your head before you feel the rim of a bottle pressing against your lips.');
    scene.text('"Open wide whore. This is the good stuff and you\'re going to drink the lot!" you hear a menacing voice say in your ear.');
    scene.text('Your head is then pulled back by your hair and your mouth is forced open. You immediately start choking as vodka starts pouring into your mouth and burning your throat, but the men keep forcing you to drink, only letting you stop for short breaths before pulling your head back and forcing you to keep going.');
    qspCall(s, 'outfit', 'strip_all', 'HotelRoom');
    qspCall(s, 'drugs', 'alcohol', 'vodka', (-3));
    qspCall(s, 'arousal', 'striptease', (-3), 'sub');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Service them', goto: ['albina_starlets_sex', 'whore7_1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWhore7_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/bukkake3.jpg');
  scene.text('Once the last drops of vodka have burned their way down your throat, the men release you and you collapse forward onto your hands, but a hand lifts you up and your blindfold is ripped off to reveal that all of them have their dicks out and are surrounding you.');
  scene.text('Before you can react, a rather large dick is stuffed into your mouth. You look up and see the man looking down at you impatiently, so you start bobbing your head up and down his shaft as you suck his dick. Two other men then grab your hands and force you to jerk them off as the man in your mouth starts getting rough, causing you to choke and gag, but nobody seems to care. Between the alcohol and your gag reflex, you almost throw up a few times, but manage to endure the rough treatment until he pulls out.');
  scene.text('However, you don\'t have a chance to recover before you\'re passed to another man who starts roughly throat fucking you. You lose focus and track of time as you\'re passed around by the men and roughly abused by them.');
  (s as any).s = 1;
  // TODO-QSP: :loop_whore7_0
  // TODO-QSP: gs 'arousal', 'hj', -2, $npcID[s], 'sub', 'gangbang', 'prostitution'
  // TODO-QSP: gs 'arousal', 'bj', -2, $npcID[s], 'sub', 'gangbang', 'prostitution'
  (s as any).s = ((s as any).s ?? 0) + (1);
  if (((s as any).s ?? 0) < 12) {
    // TODO-QSP: jump 'loop_whore7_0'
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/bukkake4.jpg');
    scene.text('Thankfully, they eventually stop and throw you back into the middle of the circle. You see them all jerking their dicks and squeal when one of them grabs you by the hair and cums over your face.');
    scene.text('The rest of them take their turns blowing their loads over you. When they\'re done, your face and hair are covered in sticky cum that drips off your chin. The men are seemingly finished with you, fixing their clothes and going back to smoking and drinking while ignoring you. Exhausted and drunk, you collapse into a ball on the floor, dejected as tears well up in your eyes.');
    scene.text('After a few minutes, you\'re able to get up on all fours, gather your clothes and slowly crawl to the bathroom, none of the men caring about you.');
    (s as any).s = 1;
    // TODO-QSP: :loop_whore7_1
    // TODO-QSP: gs 'cum_call', 'face', $npcID[s], 1
    (s as any).s = ((s as any).s ?? 0) + (1);
    if (((s as any).s ?? 0) < 12) {
      // TODO-QSP: jump 'loop_whore7_1'
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up and flee', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/bukkake5.jpg');
    scene.text('Once in the bathroom, you pull yourself up to the sink and turn the water on. You rinse your face and hair as best as you can before collapsing onto the cold tiled floor of the bathroom. You sit there for a few minutes, overwhelmed by what\'s happened, but you eventually manage to get dressed and stumble out of the bathroom. The men don\'t acknowledge you and don\'t say anything as you open the door and leave, slowly making your way down to the lobby where you phone a taxi to take you home.');
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_makeup = 1;
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    (s as any).cumspclnt = 11;
    qspCall(s, 'cum_cleanup', '');
    if (((s as any).pcs_sweat ?? 0) > 19) {
      (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (5);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).cumspclnt = 5;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_hairbsh = 0;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/dom_car.jpg');
    scene.text('You sit quietly in the back of the taxi as it takes you far from the hotel and the men inside it. All you can think about is how dirty you feel and wanting a thorough shower.');
    qspCall(s, 'outfit', 'recover_lost_outfit', 'HotelRoom', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWhore8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'The female client', Math.floor(Math.random() * 11) + 30, 0, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/dom_start.jpg');
  scene.text('The woman takes you to her car and makes you sit in the back seat. After a silent journey, you arrive at her home and she leads you inside to her bedroom.');
  scene.text('"I want you naked by the time I get back, pet!" she barks and pushes you forward before disappearing out of the room.');
  if (((s as any).AlbinaQW ?? 0)?.['client8'] === 0) {
    scene.text('Not wanting to anger your client, you strip out of your clothes and place them aside, finishing just as the woman reappears with some items, having exchanged her clothes for a leather dress. She pushes you down on all fours and pulls your ass up into the air. You look back and see she\'s holding a buttplug with a tail.');
    scene.text('She spreads your ass and the buttplug is eased into you, causing you to wince slightly as it stretches your anus. She then applies a collar tightly around your neck and pulls roughly on the leash, choking you slightly as she lifts you to your knees and pulls your head up so you\'re looking up at her.');
  } else {
    scene.text('Knowing what you need to do, you quickly undress and get on all fours with your ass in the air. The woman walks back into the room and smiles at your display. "Good girl," she says and pats you on the head. She inserts the buttplug into you before applying the collar around your neck and pulling you along. "Time for your walk, pet."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/dom_walk.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['client8'] === 0) {
      scene.text('"Now don\'t you just look adorable, my little pet! Why don\'t we go for a walk?" she asks rhetorically before pulling on your leash and forcing you to crawl around the house on your hands and knees behind her before she brings you back to the room and pulls up her dress, exposing her pussy to you.');
      scene.text('"You\'re going to lick my pussy like a good little bitch. If you do it properly, you might get a reward."');
      scene.text('She then roughly pulls on the leash, dragging your head up to her crotch.');
    } else {
      scene.text('You obediently crawl along behind the woman as she takes you on a walk around the house before returning to the bedroom where she pulls up her dress, exposing her pussy.');
      scene.text('"You know what you need to do, pet. You want your reward, yes?"');
      scene.text('She pulls on your leash and you crawl up to her crotch.');
    }
    scene.actions([
      { label: 'Lick her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/dom_play.jpg');
    scene.text('You start licking her pussy and sucking on her clit. Her moans are soft and pleasured, but she suddenly pulls on the leash, removing you from her crotch to look up at her.');
    if (((s as any).AlbinaQW ?? 0)?.['client8'] === 0) {
      scene.text('"You\'ll have to do better than that, bitch! You don\'t want me to punish you!"');
      scene.text('With that, she grabs the back of your head and forces you back into her crotch. She starts grinding against you as you resume eating her out, her moans louder and more pleasured this time.');
    } else {
      scene.text('You can do better than that, pet. I don\'t want to punish you, but I will!"');
      scene.text('You nod and obediently resume eating her out as she starts grinding against you, her moans louder and more pleasured this time.');
    }
    qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/dom_reward.jpg');
      scene.text('After a few minutes, she lets out a pleasured moan as she climaxes, coating your face in her juices. When she\'s finished, she roughly pulls on the leash and has you look up at her. She has a rather pleasured look on her face as she smiles down at you.');
      scene.text('"I think you\'ve earned your reward," she says as you follow her across the room on all fours. "Here\'s a treat. Now sit nice like a good girl," she says, holding a piece of chocolate above you.');
      scene.text('You sit up on your knees and hold your hands up like a dog as she feeds you the chocolate and pats you on the head as you eat it.');
      scene.actions([
        { label: 'Finished', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/dom_car.jpg');
    scene.text('Finished with you, the woman removes the buttplug and collar.');
    scene.text('"Okay, get dressed. I\'ll take you home after I shower," she says and leaves the room. You get to your feet and get dressed before waiting for the woman to return.');
    scene.text('When she does, you follow her outside and get into the backseat of her car. Telling her where to go, she backs out and starts driving down the road.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).AlbinaQW ?? 0)?.['client8'] === 0) {
      ((s as any).AlbinaQW ?? {})['client8'] = 1;
      scene.text('"I look forward to playing with you again next time my pet," she says with a small laugh.');
      scene.text('"Ne… next time?" you sheepishly reply.');
      scene.text('"Yes. I quite like you. I might speak to that sweet little friend of yours too. She seems like she\'d make a good pet as well…"');
      scene.text('You just nod and spend the rest of the journey in silence. Reaching the gas station, she ushers you out of the car and quickly drives away without another word.');
    } else {
      scene.text('"You did good tonight, pet. Keep being a good girl like that and everything will be fine. When I\'m happy, my pet is happy."');
      scene.text('"Thank you, mistress. I\'m glad I could please you," you reply.');
      scene.text('You spend the rest of the journey in silence. Reaching the gas station, she ushers you out of the car and quickly drives away without another word.');
    }
    scene.actions([
      { label: 'Leave', goto: ['fuelstation', 'start'] },
    ]);
  } },
      ]);
    } else {
      scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/dom_punish.jpg');
      scene.text('After a few minutes, she gets increasingly impatient and eventually pulls you away from her with a rough tug of your leash, choking you slightly.');
      scene.text('"No, no, no! Bad girl! You\'re supposed to make me cum like a good little bitch! I\'m going to have to punish you now!"');
      scene.text('She forces you down onto all fours and walks up behind you. You yelp when she gives you a hard smack on the ass.');
      scene.text('"You need to learn to be a good little pet!" she barks before delivering another hard smack to your ass, making you yelp even louder. She continues spanking you until your ass is red and stinging.');
      scene.text('"Maybe you\'ll remember your purpose now, pet! To make <i>me</i> feel good!"');
      scene.text('You just nod as tears well up in your eyes.');
      qspCall(s, 'pain', '', 3, 'asscheeks', 'spank');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Finished', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/prostitute/dom_car.jpg');
    scene.text('Finished with you, the woman roughly pulls the buttplug out of you with a loud pop and yanks the collar from around your neck.');
    scene.text('"Get dressed. I\'ll take you home after I shower," she says and leaves the room. You get to your feet and get dressed before waiting for the woman to return.');
    scene.text('When she does, you follow her outside and get into the backseat of her car. Telling her where to go, she backs out and starts driving down the road.');
    if (((s as any).AlbinaQW ?? 0)?.['client8'] === 0) {
      ((s as any).AlbinaQW ?? {})['client8'] = 1;
      scene.text('"You better make me cum next time, pet," she says sternly.');
      scene.text('"Ne… next time?" you sheepishly reply.');
      scene.text('"Yes. I quite like you but next time I feel like playing, you better be a good girl. I might speak to that sweet little friend of yours too. She seems like she\'d make a good pet…"');
    } else {
      scene.text('"I thought I told you to be a good girl from now on? You didn\'t see me cumming, did you?!" she sternly asks.');
      scene.text('"I\'ll… I\'ll do better next time, mistress…" you sheepishly reply.');
      scene.text('"You better. Otherwise I\'m going to have to keep punishing you until you learn."');
    }
    scene.text('You just nod and spend the rest of the journey in silence. Reaching the gas station, she ushers you out of the car and quickly drives away without another word.');
    scene.actions([
      { label: 'Leave', goto: ['fuelstation', 'start'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWhore9(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  qspCall(s, 'npcgeneratec', '', 0, 'The porn actor', Math.floor(Math.random() * 17) + 24, 0, 1);
  ((s as any).AlbinaQW ?? {})['Cust'] = ((s as any).npclastgenerated ?? 0);
  // TODO-QSP: gs 'npcStat', $AlbinaQW['Cust']
  qspCall(s, 'npcgeneratec', '', 0, 'The bald man', Math.floor(Math.random() * 17) + 24, 0, 1);
  ((s as any).AlbinaQW ?? {})['Cust1'] = ((s as any).npclastgenerated ?? 0);
  // TODO-QSP: gs 'npcStat', $AlbinaQW['Cust1'], 'a'
  qspCall(s, 'stat', '');
  scene.text('The bald man escorts you to a hotel room, where you\'re greeted by a second man.');
  scene.text('"Okay, here\'s the deal, bitch," the bald man says. "We\'ve hired you to film a porn scene for us. My man here will be the one fucking you while I do the filming. Now hurry up and get your clothes off!"');
  scene.text('You quickly do as you\'re told and strip naked, as does the other man before he sits on the edge of the bed. The bald man approaches with a video camera as you kneel in front of the second man, his cock already growing hard in anticipation.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get started', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', (-2), 'exhibitionism', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/bj46.mp4');
    scene.text('Seeing the camera in the corner of your eye, you grab hold of the guy\'s cock in your hand and take it into your mouth. He moans and grunts in pleasure as you start sucking while bobbing your head up and down the shaft.');
    scene.text('The bald man, meanwhile, makes a lot of lewd comments about you while constantly shifting around to film you from every angle. You do your best to ignore him and just focus on the blowjob.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', (-2), 'exhibitionism', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/cowgirl/kotovsexbonus17.mp4');
    scene.text('After a few minutes, they have stop and the man lies back on the bed while motioning for you to turn around.');
    scene.text('You get up off your knees and spin around, the bald man coming in for a close up shot as he gropes and smacks your ass before you straddle the man on the bed and slide down onto his cock.');
    scene.text('You start riding him as the bald man films you, circling around for different angles and coming in for close up shots of you. He also gropes and squeezes your breasts while making more lewd comments about you.');
    scene.text('"Just like that!" he grins. "Ride that cock, slut!"');
    scene.text('At one point, he also hands the camera to the other man so he can film a POV shot of you riding his cock.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', (-2), 'exhibitionism', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/doggy/hard2.mp4');
    scene.text('After a few minutes, the guy lifts you up and throws you down on the bed before quickly getting you up on all fours and sliding his dick back into your pussy.');
    scene.text('He grabs hold of your hips and starts pounding you, his hips loudly slapping against your ass with each thrust. You can\'t help but cry out in pleasure, causing the bald man to laugh before he moves in to film a close up of you.');
    scene.text('"You like getting your pussy pounded like that, you little slut?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', (-2), 'exhibitionism', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/hard2.mp4');
    scene.text('You think the man fucking you has grown tired when he suddenly pulls out of you, but squeal in surprise when he suddenly flips you over and drags you over to the edge of the bed.');
    scene.text('"We need a nice POV shot to really sell this one, so try to get something good while wrecking that sweet teen pussy, you lucky bastard," the bald man says as he hands the camera to the other man.');
    scene.text('The man just nods and points the camera downwards as you feel his cock sliding back into your pussy.');
    scene.text('He starts filming himself fucking you while occasionally coming up for a shot of you. The bald man just silently watches, but seems pleased as the other man starts grunting while thrusting even harder.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'stomach', $AlbinaQW['Cust']
    qspCall(s, 'pain', '', 3, 'cheeks', 'slap');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/stomach/bellycum5.mp4');
    scene.text('You panic a little since he waits until the very last second to pull out, his warm cum splattering over your stomach as he groans in pleasure.');
    scene.text('Once he finishes, he hands the camera back to the bald man, who films your cum covered body before moving in close to your face.');
    scene.text('"You did good, you little whore," he grins before he smacks your face.');
    scene.text('You\'re too dazed to care as you just lie on the bed, panting loudly as you recover.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', (-2), 'rough', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/oral1.mp4');
    scene.text('Once you have your breath back, you climb off the bed and are about to grab your clothes when the bald man stops you.');
    scene.text('"Where you do think you\'re going, slut?" he asks firmly.');
    scene.text('"To clean up and get dressed?" you ask back. "We\'re done here."');
    scene.text('"No, we\'re not," he smiles. "I paid for a whore and I\'ll be damned if I don\'t at least get a fucking blowjob from her! On your knees, slut!"');
    scene.text('He forces you down on your knees before you can react and pulls his jeans down, exposing his rock hard cock. He doesn\'t wait for you and immediately shoves it into your mouth and starts thrusting.');
    scene.text('You gag and choke on his cock as he fucks your throat, showing no sign of slowing down. You glance over at the other man, but he doesn\'t seem to care as he pulls his clothes back on.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'face', $AlbinaQW['Cust1']
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facia0,3.mp4');
    scene.text('Your eyes are watering and your vision is going blurry as he continues thrusting his dick down your throat.');
    scene.text('Just when you think you\'re about to pass out, he finally pulls out and grabs you by the hair before roughly pulling your head up. You barely have time to close your eyes before your face is plastered with his cum.');
    scene.text('He squeezes the last few drops of cum out of his cock, causing them to drip onto your forehead before he roughly shoves you onto the floor. You wince in pain, your knees red raw from carpet burn.');
    scene.text('"Good whore," he laughs. "<i>Now</i> you can go and clean up."');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Call a taxi', goto: ['albina_starlets_sex', 'cab_home'] },
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

function enterCabHome(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.text('You call a taxi to take you back to town.');
  if (((s as any).locArgs?.[1] ?? 0) !== 'no_clean') {
    (s as any).cumspclnt = 20;
    qspCall(s, 'cum_cleanup', '');
    scene.text('While waiting for the taxi, you gather up your clothes and enter the bathroom. You clean yourself up at the sink as best as you can before getting dressed.');
    scene.text('You feel incredibily dirty and the only thing you want right now is a thorough shower when you get home.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'whore1':
      enterWhore1(s, scene);
      break;
    case 'whore2':
      enterWhore2(s, scene);
      break;
    case 'whore3':
      enterWhore3(s, scene);
      break;
    case 'whore4':
      enterWhore4(s, scene);
      break;
    case 'whore5':
      enterWhore5(s, scene);
      break;
    case 'whore6':
      enterWhore6(s, scene);
      break;
    case 'whore7':
      enterWhore7(s, scene);
      break;
    case 'whore7_1':
      enterWhore7_1(s, scene);
      break;
    case 'whore8':
      enterWhore8(s, scene);
      break;
    case 'whore9':
      enterWhore9(s, scene);
      break;
    case 'cab_home':
      enterCabHome(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albina_starlets_sex: LocationDef = {
  name: 'albina_starlets_sex',
  title: 'The Armenian, still tightly gripping your arm, drags you int',
  region: 'other',
  enter: enter,
};
