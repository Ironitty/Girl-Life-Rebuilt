import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInterview1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) >2  &&  ((s as any).month ?? 0) <9) {
    scene.img('images/characters/city/alexandria/alexhome.jpg');
  } else {
    scene.img('images/characters/city/alexandria/alexhome2.jpg');
  }
  // TODO-QSP: dynamic text: "Ok, sub-zero <<$pcs_nickname>>, you can do this!"
  scene.text(`"Ok, sub-zero ${((s as any).pcs_nickname ?? 0)}, you can do this!"`);
  scene.text('Asking yourself for the umpteenth time if this is a good idea, you search the residentials for the mighty wizard\'s lair, and what you find is… pretty normal? Utterly different from Tatiana\'s carefully hidden lab. A big home in the more wealthy side of the neighborhood, but… not exactly "Rich", big, but not excessively, and with a modest fence to protect it\'s privacy. In general, you will say, that Alexandria\'s home is pretty forgettable.');
  // TODO-QSP: dynamic text: "And you <<$pcs_nickname>> are talking alone, like a loonie, stalling for time, ...
  scene.text(`"And you ${((s as any).pcs_nickname ?? 0)} are talking alone, like a loonie, stalling for time, and gathering the courage to knock."`);
  scene.text('Sighing, you finally reach for the intercom, when there is a sudden surge of magic, and something pop behind you.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>> please, can we talk?"
  scene.text(`"${((s as any).pcs_nickname ?? 0)} please, can we talk?"`);
  scene.text('Turning towards the voice, you see…');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: '…Reinhold', handler: (st: GameState) => {
    scene.text('<center><b>Alexandria VS Reinhold?!</b></center>');
    scene.img('images/characters/city/alexandria/alexandria.jpg');
    scene.text('There it is, your supposed guardian, with a look of concern, and suddenly, you feel like your mom caught you stealing her condoms… crap!');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, the situation is tense enough. Tatiana advised you against…"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, the situation is tense enough. Tatiana advised you against…"`);
    scene.text('At that moment the front door opens, and Alexandria get out, locking her gaze with Reinhold, and suddenly, the air around you feel cold and heavy with tension.');
    scene.text('"There is a problem? Ehm… Reinhold isn\'t it?"');
    scene.text('The mentioned, walk slowly until he is in front of you and to the right, with his left hand slightly raised in a protective(possessive?) gesture in front of you.');
    // TODO-QSP: dynamic text: "Yes, Councilor and I am here to talk with <<$pcs_firstname>> in an official mat...
    scene.text(`"Yes, Councilor and I am here to talk with ${((s as any).pcs_firstname ?? 0)} in an official matter, so… if you excuse us."`);
    scene.text('Alexandria look around the street, looking for something, before returning her gaze towards you two, a purple flash flicking through her eyes, and Reinhold quickly put himself between the two of you. There is a sudden flash, and you blink surprised as something appears on Reinhold\'s hand. The item seems to flick around your visual field, in some sort of focused(and powerful) Haste spell… It\'s a gun! Fuck! Are they going to fight here?!');
    qspCall(s, 'willpower', 'misc', 'force', 'hard');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ask Reinhold to leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ask Reinhold to leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    scene.text('<center><b>?????????</b></center>');
    scene.img('images/characters/city/thelilith/thelilith.jpg');
    scene.text('You must stop this, they are two high-level wizards in the middle of the street, go figure the level of damage, so there is only one thing you can do… stand before Reinhold, look him in the eyes and…');
    scene.text('"Ok Reinhold, you better go."');
    scene.text('Reinhold looks like he has just received a backhanded blow and Alexandria looks at you with renewed interest and during a moment there is silence before Reinhold talks again.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I don't think it is a good idea, so please, listen to me and...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, I don't think it is a good idea, so please, listen to me and…"`);
    scene.text('And then, he stops, as around you, magic begins to rain, silencing the sounds and concealing your surroundings, there is a flicker of light and the partial image of the most beautiful and alien woman that you have ever seen, blooms in the air between you three.');
    scene.text('"Reinhold, it\'s seems that your protege\'s words sound truer than you seem to imagine, as our presence here attests."');
    scene.text('The clear and lyric voice sends shivers down your spine, makes Reinhold hide his weapon in embarrassment and… makes Alexandria focus angrily on the eerie woman, that holds her gaze with an elegant smile, before talking again.');
    scene.text('"Councilor Alexandria, we have taken a special interest in this case and with an act of largesse, propitiated thanks to your great expedience with Rikudo\'s legacy, decided to let you collaborate as an observer with Us."');
    scene.text('And with that, and before a pissed Alexandria can retort, the unearthly image disappears, snuffing away the magic and returning the scene to a relative normality.');
    qspCall(s, 'willpower', 'pay', 'hard');
    qspCall(s, 'arousal', 'erotic', 3, 'sub');
    qspCall(s, 'npc_relationship', 'modify_exact', 'A241', 1);
    (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Aftermatch', goto: ['alexandriaEv', 'interview2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Try to deflate the situation', handler: (st: GameState) => {
    scene.text('<center><b>?????????</b></center>');
    scene.img('images/characters/city/thelilith/thelilith.jpg');
    if ((Math.floor(Math.random() * 100) + 1) < ((s as any).pcs_persuas ?? 0)) {
      qspCall(s, 'npc_relationship', 'modify_exact', 'A241', 2);
      scene.text('You must stop this, they are two high-level wizards in the middle of the street, go figure the level of damage, so there is only one thing you can do… stand between the two, look into their eyes and…');
      scene.text('"Ok you two stop right now! I don\'t care who you think you are, this is a public place, so stop the cock wielding contest!"');
      scene.text('The two of them seem to ignore your words, but after some tense heartbeats, they slowly turn towards you. Reinhold seems intrigued at your words and Alexandria… is smiling? At least her next words sound… amused?');
      // TODO-QSP: dynamic text: "And <<$pcs_lastname>> how do you think, we must resolve…"
      scene.text(`"And ${((s as any).pcs_lastname ?? 0)} how do you think, we must resolve…"`);
      scene.text('And then, he stops, as around you, magic begins to rain, silencing the sounds and concealing your surroundings, there is a flicker of light and the partial image of the most beautiful and alien woman that you have ever seen, bloom in the air between you three.');
      scene.text('"With our help as our presence here attest."');
      scene.text('The clear and lyric voice sends shivers down your spine, makes Reinhold hide his weapon in embarrassment and… makes Alexandria focus angrily on the eerie woman, that holds her gaze with an elegant smile, before talking again.');
      scene.text('"Councilor Alexandria, we have taken a special interest on this case and with an act of largesse, propitiated thanks to your great expedience with Rikudo\'s legacy, decided to let you collaborate as an observer with Us."');
      scene.text('And with that, and before a pissed Alexandria can retort, the unearthly image disappears, snuffing away the magic and returning the scene to a relative normality.');
    } else {
      qspCall(s, 'npc_relationship', 'modify_exact', 'A241', (-2));
      qspCall(s, 'mood', 'lower', 'medium');
      scene.text('You must stop this, they are two high-level wizards in the middle of the street, go figure the level of damage, so there is only one thing you can do… and the best to deflate a tense moment is with some humor isn\'t it?');
      scene.text('"Jeez! Come on Reinhold! Ask this beautiful woman in marriage and end all this farce!"');
      scene.text('Reinhold facepalms, groans, and looks at you in disbelief, your little quip has worked, but now Alexandria is gritting her teeth and seems concentrated on you, as purple sparks fly between her gloves, and then, he stops, as around you, magic begins to rain, silencing the sounds and concealing your surroundings, there is a flicker of light and the partial image of the most beautiful and alien woman that you have ever seen, bloom in the air between you three.');
      scene.text('"Stop Councilor Alexandria, don\'t make us intervene, because you have been testing our wrath."');
      scene.text('The clear and lyric voice sends shivers down your spine, makes Reinhold hide his weapon in embarrassment and… makes Alexandria focus her anger on the eerie woman, that holds her gaze with an elegant smile, before talking again.');
      scene.text('"Councilor Alexandria, we have taken a special interest on this case and with an act of largesse, propitiated thanks to your great expedience with Rikudo\'s legacy, decided to let you collaborate as an observer with Us."');
      scene.text('And with that, and before a pissed Alexandria can retort, the unearthly image disappears, snuffing away the magic and returning the scene to a relative normality, a tense moment later, Alexandria dispels her powers.');
    }
    qspCall(s, 'arousal', 'erotic', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Aftermatch', goto: ['alexandriaEv', 'interview2'] },
    ]);
  } },
      { label: 'Wait for a resolution', handler: (st: GameState) => {
    scene.text('<center><b>?????????</b></center>');
    scene.img('images/characters/city/thelilith/thelilith.jpg');
    scene.text('You don\'t know what to do, to stop the magical battle that seems at the brink to begin, so you begin to back away slowly from the powerful sorcerers, and then, you stop, as around you, magic begins to rain, silencing the sounds and concealing your surroundings, there is a flicker of light and the partial image of the most beautiful and alien woman that you have ever seen, bloom in the air between you three.');
    scene.text('"We are very disappointed with this act Reinhold, necessary seems that our intervention is necessary"');
    scene.text('The clear and lyric voice sends shivers down your spine, makes Reinhold hide his weapon in embarrassment and… makes Alexandria focus angrily on the eerie woman, that holds her gaze with an elegant smile, before talking again.');
    scene.text('"Councilor Alexandria, we have taken a special interest on this case and with an act of largesse, propitiated thanks to your great expedience with Rikudo\'s legacy, decided to let you collaborate as an observer with Us."');
    scene.text('And with that, and before a pissed Alexandria can retort, the unearthly image disappears, snuffing away the magic and returning the scene to a relative normality.');
    qspCall(s, 'arousal', 'erotic', 3, 'sub');
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Aftermatch', goto: ['alexandriaEv', 'interview2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterInterview2(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Alexandria & Reinhold</b></center>');
  scene.img('images/characters/city/alexandria/alexandria.jpg');
  scene.text('During some moments, you three stand there considering what just happened. Reinhold seems lost in his thoughts and Alexandria… Well… it\'s seems that she wants to burn with her glade the point where the mysterious apparition was. Without knowing what to do, you wait for some kind of break, that fortunately is provided by a weary Reinhold.');
  // TODO-QSP: dynamic text: "I guess… that The Council approves, but now they are watching, and <<$pcs_nickn...
  scene.text(`"I guess… that The Council approves, but now they are watching, and ${((s as any).pcs_nickname ?? 0)} had better be safe here. My wrath is nothing compared to theirs."`);
  scene.text('Alexandria gives Reinhold a side glance, and seems to calm a little before answering, with a sigh full of content… for Reinhold, The Council or you are anybody\'s guess.');
  // TODO-QSP: dynamic text: "I had accepted the loss of my amulet, my interest in <<$pcs_lastname>> is not m...
  scene.text(`"I had accepted the loss of my amulet, my interest in ${((s as any).pcs_lastname ?? 0)} is not malicious. There will not be danger coming from me, make sure you can say the same for your Council."`);
  scene.text('Coming to some kind of awkward resolution, Reinhold steps aside so you can walk towards Alexandria\'s home, and as you follow her inside, a question surges towards your lips.');
  scene.text('"Who was she?"');
  scene.text('You don\'t think she will answer, as Alexandria lights a cigarette and takes a deep breath, it isn\'t tobacco, but some kind of weed that leaves an oily sensation in your nostrils… Finally calmed, she talks.');
  // TODO-QSP: dynamic text: "She, <<$pcs_lastname>>, is The Lilith, head of all Succubae, holder of the Succ...
  scene.text(`"She, ${((s as any).pcs_lastname ?? 0)}, is The Lilith, head of all Succubae, holder of the Succubus seat on The Council, and the direct leader of the Eastern European Succubae… and the high-minded fool that thinks herself in the right to interfere in our affairs."`);
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'A little chat', handler: (st: GameState) => {
    scene.text('<center><b>Alexandria</b></center>');
    scene.img('images/characters/city/alexandria/alexandria2.jpg');
    scene.text('After that informational tidbit, Alexandria seems to calm, and lets you take notice of your surroundings. Her home is gloomy with most windows closed and a Victorian decoration ');
    // TODO-QSP: dynamic text: "I must ask forgiveness for my surliness, <<$pcs_lastname>>, I wasn't planning t...
    scene.text(`"I must ask forgiveness for my surliness, ${((s as any).pcs_lastname ?? 0)}, I wasn't planning to meet you under these circumstances, and after these mismatches, you, without doubt, must hold me in low esteem… my lack of control obviously will cement any slander coming from your so-called <i>guardians</i>"`);
    scene.text('At this, you flinch, remembering Tatiana\'s words and some of the things that she told you, that paint a bleak image on Alexandria, and then jump at her next words.');
    // TODO-QSP: dynamic text: "Oh! So there was badmouthing! Don't worry, <<$pcs_lastname>> I didn't read your...
    scene.text(`"Oh! So there was badmouthing! Don't worry, ${((s as any).pcs_lastname ?? 0)} I didn't read your mind, but your eyes talk… Let me guess, the hackneyed tale about we the elder, feasting in the unbaptized flesh of mundane children? Nonsense! They don't have Fae blood, how would that help me?"`);
    scene.text('Alexandria shakes her head and paces back and forth calming herself down before smiling and adding. "This is that little redhead\'s doing isn\'t it? Take it from me to never trust a trickster, all of them are amoral sociopaths, that hide behind the chaos they sow to further their goals."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Badmouth Tatiana', handler: (st: GameState) => {
    scene.text('<center><b>Alexandria</b></center>');
    scene.img('images/characters/city/alexandria/alexandria3.jpg');
    if ((Math.floor(Math.random() * 100) + 1) < ((s as any).pcs_persuas ?? 0)) {
      qspCall(s, 'npc_relationship', 'modify_exact', 'A241', 2);
      scene.text('Actually, you think that there is some truth in Alexandria\'s words, and it is a good moment to voice your opinions.');
      scene.text('"I don\'t know Tatiana enough, and I am reluctant to judge without hearing an explanation, but… her description of you seemed to me too forced, more rumor than anything else, and that weird thing about your hair."');
      scene.text('Alexandria raises an eyebrow, and grabs a (beautiful and long) lock of hair, smiling slightly, she is paying close attention to your words.');
      scene.text('"Well… basically she told me that your magic was somewhat altered on your quest for the Talisman\'s power and that a simple scare turned your hair white."');
      scene.text('With that, she bursts into a short-lived and dry laugh, before talking again with contempt in her voice.');
      scene.text('"I can assure you, that I have total control over my magic, hmpf… More importantly than that, my hair didn\'t turn white because, like some simpleton, I was scared by a toad in the dark. I\'m a natural blonde, and I take good care of my hair, it\'s one of the few things that Rikudo\'s curse hasn\'t altered."');
      scene.text('"Curse?"');
      scene.text('Your words burst out, and Alexandria looks at you as if studying a document to see if there is a spelling mistake. Finally she sighs having worked out what was wrong.');
      // TODO-QSP: dynamic text: "<<$pcs_lastname>>, did they not even tell you?! I am a man!"
      scene.text(`"${((s as any).pcs_lastname ?? 0)}, did they not even tell you?! I am a man!"`);
    } else {
      qspCall(s, 'npc_relationship', 'modify_exact', 'A241', (-2));
      qspCall(s, 'mood', 'lower', 'medium');
      scene.text('Actually, you think that there is some truth to Alexandria\'s words, and it is a good moment to voice your opinions.');
      scene.text('"Well, if you want my opinion, she is envious, I mean you are a powerful magician, and that weird thing about your hair doesn\'t help either."');
      scene.text('Alexandria raises an eyebrow, and grabs a (beautiful and long) lock of hair, as she pays close attention to your words.');
      scene.text('"Well… basically she told me that your magic was somewhat altered on your quest for the Talisman\'s power and that a simple scare turned your hair white, but if you ask me, it suits your style, I can\'t blame the photographer for thinking that you… were… a model?"');
      scene.text('Alexandria\'s face grows darker at your every word, like she is witnessing a train derail and burst into flame. You think it\'s best to stop talking before you upset things further as she grits her teeth.');
      scene.text('Her words filled with contempt, she says, "I can assure you, that I have total control over my magic, hmpf… More importantly than that, my hair didn\'t turn white because, like I was some simpleton, scared by a toad in the dark. I\'m a natural blonde, and I take good care of my hair, it\'s one of the few things that Rikudo\'s curse hasn\'t altered, because… surprise! That trickster seemed to have forgotten to tell you something important… I am a man!"');
    }
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '"A man?"', goto: ['alexandriaEv', 'interview3'] },
    ]);
  } },
      { label: 'Defend Tatiana', handler: (st: GameState) => {
    scene.text('<center><b>Alexandria</b></center>');
    scene.img('images/characters/city/alexandria/alexandria3.jpg');
    scene.text('"I don\'t think that Tatiana is that bad, after all, she is teaching me magic."');
    scene.text('Alexandria fixes her gaze at you and snorts in derision.');
    scene.text('"Oh really? When The Veil was lifted from your eyes, and you ended on our side of reality… What did she do? Teach you about your new world? Call Reinhold to inform him about The Talisman\'s fate? Or just… shut up and wait to see what happened to you as you fumbled your way in total ignorance, uncaring of your and others welfare?"');
    scene.text('At those words, you are not sure how to answer, and feeling your indecision, Alexandria gives you a contemptuous half-smile before continuing.');
    // TODO-QSP: dynamic text: "Let's be generous <<$pcs_lastname>>, she hasn't passed the pale where her antic...
    scene.text(`"Let's be generous ${((s as any).pcs_lastname ?? 0)}, she hasn't passed the pale where her antics begin to be counted in destroyed lives, but, she isn't really caring about your situation, only on what she can obtain from helping you, believe me I know her type, I learned this lesson when Rikudo, probably the most powerful trickster of all time, cursed me."`);
    scene.text('"Cursed?"');
    scene.text('Your words burst out, and for a moment that seems to last a lifetime, the two of you stare at each other in baffled surprise.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, Are you telling me that they didn't tell you?! I am a man!"
    scene.text(`"${((s as any).pcs_lastname ?? 0)}, Are you telling me that they didn't tell you?! I am a man!"`);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A241', (-1));
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '"A man?"', goto: ['alexandriaEv', 'interview3'] },
    ]);
  } },
      { label: 'Let her rant', handler: (st: GameState) => {
    scene.text('<center><b>Alexandria</b></center>');
    scene.img('images/characters/city/alexandria/alexandria3.jpg');
    scene.text('The truth is that you don\'t want to be dragged into a discussion about Tatiana with an obviously very opinionated wizard, so you do the most simple and just shut up, letting Alexandria badmouth your teacher.');
    // TODO-QSP: dynamic text: "Let's be generous <<$pcs_lastname>>, she hasn't passed the pale where her antic...
    scene.text(`"Let's be generous ${((s as any).pcs_lastname ?? 0)}, she hasn't passed the pale where her antics begin to be counted in destroyed lives, but, she isn't really caring about your situation, only on what she can obtain from helping you, believe me I know her type, I learned this lesson, when Rikudo, probably the most powerful trickster of all time cursed me."`);
    scene.text('"Cursed?"');
    scene.text('You blurt out, and for a moment, the two of you stare at each other in baffled surprise.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, Are you telling me that they didn't tell you?! I am a man!"
    scene.text(`"${((s as any).pcs_lastname ?? 0)}, Are you telling me that they didn't tell you?! I am a man!"`);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '"A man?"', goto: ['alexandriaEv', 'interview3'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterInterview3(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Aleksei?</b></center>');
  scene.img('images/characters/city/alexandria/chair.jpg');
  scene.text('You finally reach a study where a morose… Alexandria? Sits on a couch, and in an interesting twist, there isn\'t another one for you.');
  if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    qspCall(s, 'npc_relationship', 'modify_exact', 'A241', 1);
    scene.text('"Yes Mr. Ivanov… I am another victim of Rikudo\'s games, that is the reason for my interest in you."');
  } else {
    scene.text('"Yes… Cursed by Rikudo, the being that created The Talisman of Power, and the reason for my interest in you."');
  }
  scene.text('After this little revelation, he exhales a big puff of smoke, and continue with his explanation.');
  scene.text('"As I remember telling you the last time we meet, my name is Aleksei, and the hows and whys of my curse is better left for another time, suffice is to say, that is my understanding, that you and your relation with the powers that have been transferred to your persona, holds the key to break my current predicament. As you can see from our early confrontation, the powers that be, wanted the monopoly over your attention, so I looked for an alternative, that is the reason after the… convoluted way we met in Aphrodite, hm… as an afterthought, if you want to know, I took care of that little parasite, banishing it."');
  scene.text('As he gives you this explanation, the pieces of the puzzle click in your head, and begin to explain his conduct, but there is one thing you need to know.');
  scene.text('"Uh… I think that I begin to understand, but you mean, that you killed… Ehm… <i>her</i>?"');
  scene.text('Aleksei looks at you impassively, and in a cold voice that send shivers down your back, answers.');
  scene.text('"Yes"');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo') {
    scene.actions([
      { label: '"But… she was like my friend!"', handler: (st: GameState) => {
    scene.text('<center><b>Aleksei</b></center>');
    scene.img('images/characters/city/alexandria/chair.jpg');
    scene.text('Aleksei look at you during a long moment, raising an eyebrow and looking a little surprised by your words.');
    scene.text('"Your friend?"');
    scene.text('"Well… no friend, friend… but, we have much in common! We were models and did similar stuff, and… those shoes were great! I don\'t think that killing her was a good idea!"');
    scene.text('Aleksei\'s mouth hangs open, with the cigarette hanging precariously over the lower lip, an indescribable expression on his face.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, that is one of the more asinine things that I have heard in ...
    scene.text(`"${((s as any).pcs_lastname ?? 0)}, that is one of the more asinine things that I have heard in decades… No the most… but near, I… will not explain to you, why I did it, only, that it was necessary, and if you accept some advice, read a little more… big books… the ones that are mostly text and deal with, well… anything that uses big words."`);
    scene.text('"Asinine?"');
    scene.text('You ask confused before Aleksei tilt his head like he was hearing something.');
    // TODO-QSP: dynamic text: "Hm… Interesting. <<$pcs_lastname>> we have company."
    scene.text(`"Hm… Interesting. ${((s as any).pcs_lastname ?? 0)} we have company."`);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A241', (-1));
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'End the interview', goto: ['alexandriaEv', 'interview4'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).succubusQW ?? 0) === 14) {
      scene.actions([
        { label: '"You don\'t have the right! She was my bitch!"', handler: (st: GameState) => {
    scene.text('<center><b>Aleksei</b></center>');
    scene.img('images/characters/city/alexandria/chair.jpg');
    scene.text('At your words, Aleksei drags his cigarette, and raise an eyebrow questioningly.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, what is your point?"
    scene.text(`"${((s as any).pcs_lastname ?? 0)}, what is your point?"`);
    scene.text('Your point? He doesn\'t see it? Ok, time for Lady exposition.');
    scene.text('"My point is, that this is my city, and I can\'t let a two-bit poser insult the Succubae. She was asking to be made my little plaything, sitting on her fours, with a bowl at the side, and a leash in my hand."');
    scene.text('Puffs of smoke exit his nostrils, as Aleksei seems to think on your words.');
    // TODO-QSP: dynamic text: "And… interesting point of view, truly you have become a Succubus, but <<$pcs_la...
    scene.text(`"And… interesting point of view, truly you have become a Succubus, but ${((s as any).pcs_lastname ?? 0)}, Reinhold and I did oaths to protect the inhabitants of this world from beings like her, and at-risk to offend your sensitivities, this was necessary."`);
    scene.text('Aleksei say this as a matter of fact, before tilting his head like he was hearing something.');
    // TODO-QSP: dynamic text: "Hm… Interesting. <<$pcs_lastname>> we have company."
    scene.text(`"Hm… Interesting. ${((s as any).pcs_lastname ?? 0)} we have company."`);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'End the interview', goto: ['alexandriaEv', 'interview4'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: '"That is horrible!"', handler: (st: GameState) => {
    scene.text('<center><b>Aleksei</b></center>');
    scene.img('images/characters/city/alexandria/chair.jpg');
    if ((Math.floor(Math.random() * 100) + 1) < ((s as any).pcs_splcstng ?? 0)) {
      qspCall(s, 'npc_relationship', 'modify_exact', 'A241', 2);
      scene.text('At your words, Aleksei tilts his head and semes to think about them.');
      // TODO-QSP: dynamic text: "<<$pcs_lastname>>, Let's see, <i>It</i> was a dangerous parasite, whose feeding...
      scene.text(`"${((s as any).pcs_lastname ?? 0)}, Let's see, <i>It</i> was a dangerous parasite, whose feeding needs has damaged an undetermined number of women, and that left to its own devices would have exposed the whole agency to uncontrolled magic. The Veil is good to hide minor, short-duration events, but a long time magic exposition like her? We are lucky that the whole agency hasn't ended as raving lunatics, so… what would you have done in my place?"`);
      scene.text('"I… look, I am not saying that she wasn\'t dangerous, but for what I understand, she was bound to Tatiana\'s photo set, so we could have taken it away to a more discrete place, and then feed her with mana. It was an alternative to just… well… killing her."');
      scene.text('He takes a drag from his cigarette, and seem to digest your explanation.');
      // TODO-QSP: dynamic text: "<<$pcs_lastname>>, it seems that you have been taking attention to your lessons...
      scene.text(`"${((s as any).pcs_lastname ?? 0)}, it seems that you have been taking attention to your lessons" He exhales another puff and you can see a half-smile hidden by it "Indeed, I could have done that, but after that… what? ${((s as any).pcs_lastname ?? 0)}, Reinhold and I did oaths to protect the inhabitants of this world from beings like her, and at-risk to offend your morality, this was necessary."`);
      scene.text('Aleksei say this as a matter of fact, before tilting his head like he was hearing something.');
      // TODO-QSP: dynamic text: "Hm… Interesting. <<$pcs_lastname>> we have company."
      scene.text(`"Hm… Interesting. ${((s as any).pcs_lastname ?? 0)} we have company."`);
    } else {
      qspCall(s, 'npc_relationship', 'modify_exact', 'A241', (-2));
      qspCall(s, 'mood', 'lower', 'medium');
      scene.text('At your words, Aleksei tilts his head and semes to think about them.');
      // TODO-QSP: dynamic text: "<<$pcs_lastname>>, Let's see, <i>It</i> was a dangerous parasite, whose feeding...
      scene.text(`"${((s as any).pcs_lastname ?? 0)}, Let's see, <i>It</i> was a dangerous parasite, whose feeding needs has damaged an undetermined number of women, and that left to its own devices would have exposed the whole agency to uncontrolled magic. The Veil is good to hide minor, short-duration events, but a long time magic exposition like her? We are lucky that the whole agency hasn't ended as raving lunatics, so… what would you have done in my place?"`);
      scene.text('"I… don\'t know, but just killing her seems wrong."');
      scene.text('He takes a drag from his cigarette, and looks intensely into your eyes.');
      // TODO-QSP: dynamic text: "<<$pcs_lastname>>, is that your answer? Do you question my decision without kno...
      scene.text(`"${((s as any).pcs_lastname ?? 0)}, is that your answer? Do you question my decision without knowing if it was the only solution?" He exhales another puff and you can see how he clenches his teeth "let's be clear ${((s as any).pcs_lastname ?? 0)}, Reinhold and I did oaths to protect the inhabitants of this world from beings like <i>It</i>, and at-risk to offend your morality, this was necessary."`);
      scene.text('Aleksei say this as a matter of fact, before tilting his head like he was hearing something.');
      // TODO-QSP: dynamic text: "Hm… Interesting. <<$pcs_lastname>> we have company."
      scene.text(`"Hm… Interesting. ${((s as any).pcs_lastname ?? 0)} we have company."`);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'End the interview', goto: ['alexandriaEv', 'interview4'] },
    ]);
  } },
        { label: '"Hm?"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Aleksei</b></center>');
    scene.img('images/characters/city/alexandria/chair.jpg');
    scene.text('You are taken by surprise, at Aleksei confession, that observes in silence your reaction before deciding to explain himself.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, You must understand, that <i>It</i> was a dangerous parasite...
    scene.text(`"${((s as any).pcs_lastname ?? 0)}, You must understand, that <i>It</i> was a dangerous parasite, whose feeding needs has damaged an undetermined number of women, and that left to its own devices would have exposed the whole agency to uncontrolled magic. The Veil is good to hide minor, short-duration events, but a long time magic exposition like her? We are lucky that the whole agency hasn't ended as raving lunatics."`);
    scene.text('Then, he takes a drag from his cigarette, and wait for you to digest this explanation, before tilting his head like he was hearing something.');
    // TODO-QSP: dynamic text: "Hm… Interesting. <<$pcs_lastname>> we have company."
    scene.text(`"Hm… Interesting. ${((s as any).pcs_lastname ?? 0)} we have company."`);
    scene.actions([
      { label: 'End the interview', goto: ['alexandriaEv', 'interview4'] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterInterview4(s: GameState, scene: SceneBuilder): void {
  (s as any).AlexandriaQW = 7;
  scene.text('<center><b>Aleksei</b></center>');
  scene.img('images/characters/city/alexandria/alexandria3.jpg');
  if (((s as any).npc_rel ?? 0)?.['A241'] < 6) {
    qspCall(s, 'npc_relationship', 'set', 'A241', 0);
    qspCall(s, 'mood', 'lower', 'huge');
    scene.text('Aleksei, begin to concentrate on a spell, charging the room with static and making your hair stand, before a purple flash fills the room and something magical exit it.');
    // TODO-QSP: dynamic text: "Hm… That will teach her a lesson <<$pcs_lastname>>, but…" Aleksei turns towards...
    scene.text(`"Hm… That will teach her a lesson ${((s as any).pcs_lastname ?? 0)}, but…" Aleksei turns towards you with a half-smile, that quickly disappear under cold eyes "I think that you must go and see if that trickster is safe, we will continue our talks later."`);
    scene.text('He then stands, and signal towards the door, waiting for you to follow, and as you leave the room towards the exit, Aleksei decides to say something.');
    // TODO-QSP: dynamic text: "I am disappointed with our little talk <<$pcs_lastname>>, is my impression that...
    scene.text(`"I am disappointed with our little talk ${((s as any).pcs_lastname ?? 0)}, is my impression that you lack, the maturity and will that are required to master the high arts, if not for my need to break Rikudo's curse, I will promptly exhort The Council to take control of the situation… and you, but alas, I see myself in the need of your power."`);
    scene.text('Aleksei put out the cigarette in an ashtray, the next words exiting somewhat forced from his mouth.');
    // TODO-QSP: dynamic text: "I offer you the possibility to train under my wing. This isn't an apprenticeshi...
    scene.text(`"I offer you the possibility to train under my wing. This isn't an apprenticeship offer ${((s as any).pcs_lastname ?? 0)}, but just common interests, and even with that, I expect respect and diligence, so… until the next time and remember, my door is open only on daily hours."`);
  } else {
    qspCall(s, 'npc_relationship', 'set', 'A241', 1);
    qspCall(s, 'mood', 'raise', 'large');
    scene.text('Aleksei, begin to concentrate on a spell, charging the room with static and making your hair stand, before a purple flash fills the room and something magical exit it.');
    // TODO-QSP: dynamic text: "Hm… That will teach her a lesson <<$pcs_lastname>>, but…" Aleksei turns towards...
    scene.text(`"Hm… That will teach her a lesson ${((s as any).pcs_lastname ?? 0)}, but…" Aleksei turns towards you with a half-smile, and intrigued eyes "I think that you must go and see if your <i>friend</i> is safe, we will continue our talks later."`);
    scene.text('He then stands, and signals towards the door, waiting for you to follow, and as you leave the room towards the exit, Aleksei decides to say something.');
    // TODO-QSP: dynamic text: "I must admit, that this has ended better than I expected <<$pcs_lastname>>, is ...
    scene.text(`"I must admit, that this has ended better than I expected ${((s as any).pcs_lastname ?? 0)}, is my impression that you have the potential to master the high arts, and… even taking into consideration, my personal interest on you, I'm tempted to offer you something."`);
    scene.text('Aleksei put out the cigarette in an ashtray, the next words exiting somewhat excited from his mouth.');
    scene.text('"I offer you the possibility of an apprenticeship under my wing. This will protect you, partially from The Council and Reinhold interests, but, I expect respect and diligence, so… until the next time and remember, my door is open only on daily hours."');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 4;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Tatiana?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Tatiana</b></center>');
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('Your redheaded magic teacher, is waiting for you outside. There is a smoking phone on her… burned hands, something that doesn\'t seem to bother the sorceress, as she seems musing happily to herself.');
    // TODO-QSP: dynamic text: "Hm… Let's see… Something like? No, it can be… Hm? <<$pcs_nickname>>, oh my! Rei...
    scene.text(`"Hm… Let's see… Something like? No, it can be… Hm? ${((s as any).pcs_nickname ?? 0)}, oh my! Reinhold send me to watch over you! Are you okay?!"`);
    scene.text('"Yeah… I am ok, and… you?"');
    // TODO-QSP: dynamic text: Tatiana raises her hands, examining them, with critical eyes. "Don't worry, reme...
    scene.text(`Tatiana raises her hands, examining them, with critical eyes. "Don't worry, remember… we body modding wizards are a tough breed, but… jeez, I have heard that she dislikes Pranksters, but this? I am curious how she managed to… is there a problem ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.text('"Yes Tatiana, you didn\'t tell me about <i>his</i> curse, and those things about eating babes? What do you think was gonna be <i>his</i> reaction? This is the same, that when you told me about Reinhold and The Council!"');
    // TODO-QSP: dynamic text: "You told her that? And she confirmed it? Because I don't have much information ...
    scene.text(`"You told her that? And she confirmed it? Because I don't have much information about…" You blink surprised at her lack of concern, which prompts her to sigh and change the theme. "${((s as any).pcs_nickname ?? 0)}, when I talked about Reinhold and The Council, I was… well, <i>having fun at your expense</i>. But the truth is that you must be a little wary of their intentions. I wanted to win some time before talking to Reinhold and prevent, that some red-lipped succubus charmed you away to some gilded cage, and for Alexandria… Look, is my fault ok? I wasn't expecting for you to run after her, but ${((s as any).pcs_nickname ?? 0)}, you must understand that she is the equivalent of a walking magical WMD. She can impose terms at The Council, and ending on her grasp… Well, that can trigger all sort of bad scenarios with you in the middle, something that Reinhold is trying to prevent."`);
    scene.text('After this explanation, that you don\'t know if believe, Tatiana turns back and returns to her hideout, leaving you alone to digest the new situation.');
    scene.actions([
      { label: 'Continue', goto: ['city_suburbs', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFilipp(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 16) + 5);
  (s as any).music_loop = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b>????</b></center>');
  scene.img('images/characters/city/ana/ana1.jpg');
  scene.text('After going through the courtroom security, you ask for Filipp Kudashov and are promptly sent to a waiting room, where others St. Petersburg\'s citizens wait being called to do bureaucratic procedures. In general, it seemed that you were going to wait with them until a blonde woman enters the room.');
  scene.text('She is definitely odd(but no <i>bad</i>)-looking, blonde, shorter and slender with red eyes and some kind of red uniform with a maybe too skimpy skirt, and matching thigh-high socks. Is she cosplaying?');
  scene.text('She sits and immediately creeps you, there is something just <i>wrong</i> about her appearance, maybe some kind of magical effect?');
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    // TODO-QSP: dynamic text: "So… Are you <<$pcs_nickname>>? The idiot that betrayed Reinhold's confidence, o...
    scene.text(`"So… Are you ${((s as any).pcs_nickname ?? 0)}? The idiot that betrayed Reinhold's confidence, only to end as Alexandria's - The greatest bitch The Council has ever produced - sexual Kleenex?"`);
  } else {
    // TODO-QSP: dynamic text: "You are <<$pcs_nickname>> isn't it? A pleasure! You are famous! So… Let me gues...
    scene.text(`"You are ${((s as any).pcs_nickname ?? 0)} isn't it? A pleasure! You are famous! So… Let me guess! Alexandria - The greatest bitch The Council has ever produced - has sent you here in some unfathomable quest?"`);
  }
  scene.actions([
    { label: '?!', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Ana?</b></center>');
    scene.img('images/characters/city/ana/ana2.jpg');
    scene.text('After those words, a shiver runs down your back, instinctively expecting the irascible wizard to appear and burn down the offending woman.');
    scene.text('"Hey! Relax Sexy! I… am… just… Ana! Your friendly neighborhood mutant! No Anna, Anya, or Anushka! ANA! A-N-A! I don\'t know why, but some people don\'t catch it, weird, because is pretty simple! ANA!"');
    scene.text('Ana then proceeds to raise her legs, and lean over the couch, ignoring the disapproving looks that the people are giving her - and you by association - as she takes several seatings for herself, but even that doesn\'t stop her motor mouth.');
    scene.text('"You know Sexy? I always wanted to do something like this! Something taken from those femdom lesbian fantasies! The cute, virginal, and very straight heroine having a civilized talk with the sexy, experienced, and totally depraved villainess! A conversation full of innuendo and double meanings. What do you think <i>Sexy</i>?"');
    scene.text('"What the hell are you insinuating?"');
    scene.text('"Hm? Nothing! But… Oh! I think is your turn, so… <i>Slitzweitz</i>"');
    scene.text('Yeah, it\'s your turn, so you get up and walk towards Filipp Kudashov\'s office, feeling all the way, the weird looks that all the present are giving you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (0);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Filipp?</b></center>');
    scene.img('images/characters/city/ana/bribes.jpg');
    scene.text('The <i>office</i> is a small cubicle-like room, filled to the brink, with books, files, and a desk that barely leaves space for a nerdy-stressed-looking guy, that must be Filipp Kudashov. He makes a gesture for your to… sit? where? But promptly ignore you to continue talking over a phone, about a… Permit A 38? That take him several minutes to resolve before he deigns to talk to you.');
    scene.text('"Fucking <i>lyagushatniki</i>! Shit! And you are one of Mr. Aleksei\'s assistants? You couldn\'t came early?! Whatever… Ehm… What can we do for our favorite contributor?"');
    scene.text('"I came here to pick a sword… He told me that the relevant… <i>red tape</i> have been sorted out."');
    scene.text('Filipp looks at you with a confused look on his face, seemingly without understanding your words, and creating an inconvenient silence during the next minute. You are beginning to think that he isn\'t the brightest light in the building.');
    scene.text('"Ohh! The sword! yeah! That horrible situation with the police! Ehm… I will need some minutes to look where it is stored, but in the meantime, you can fill into some minor <i>red tape</i>!"');
    scene.text('He winks at you as he pronounces the words <i>red tape</i>, before reclining back into his chair, and open slightly his legs so you can have a perfect line of sight, of his corduroy covered crotch. To make the situation even more obvious, he picks a cup with the words <i>to bribe or not to bribe</i>');
    if (qspFunc(s, 'succubus', 'active', 5)) {
      scene.actions([
        { label: 'Call your True Face', goto: ['alexandriaEv', 'succubribe'] },
      ]);
    }
    scene.actions([
      { label: 'Get out of here', goto: ['alexandriaEv', 'anacall'] },
      { label: 'Kneel', goto: ['alexandriaEv', 'kneel'] },
      { label: '"Mr. Aleksei already paid you"', goto: ['alexandriaEv', 'persufilipp'] },
      { label: 'Give him a <i>contribution</i> [+$func(\'money\', \'get_cost_string\', 5000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['alexandriaEv', 'contribution'] }]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnacall(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).AlexandriaQW = 14;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana\'s number?</b></center>');
  scene.img('images/characters/city/ana/selfie.jpg');
  scene.text('You exit The Courtroom. What can you do now? Call Aleksei? Hm? Your phone is ringing.');
  scene.text('"Yes?"');
  scene.text('"Hey Sexy! How are you doing?!"');
  scene.text('"Ana? How do you have my number?"');
  if (((s as any).AlexandriaMissionQW ?? 0) > 0) {
    scene.text('"What? Oh! You know! I just asked some moles in the FSB! But… changing subject, a little <i>wireless bug</i> toll me that the big <i>creepyzoid</i> have a really big mouth! Jeez! That is unprofessional!"');
    scene.text('"Ana! Where is the key?! You have no idea with who you are messing with!"');
    scene.text('"Come on Sexy! Do you think that Alexandria is the only <i>Big Honcho</i> out there?! Please, think better of me! I will never put myself voluntarily on The Great Bitch\'s bad side, without some quality latex on my side! But… You know… I think somebody gave you a bad hand, so I was thinking about a little competition! So… look for me somewhere in the city center! But not during the week, because I have exams, and neither nights, because I have a life! Oh! And bring some sexy sportswear!"');
    scene.text('She then hangs up, leaving you more than a little flabbergasted. It seems that you must find her, but first probably you should tell Aleksei about Filipp Kudashov\'s actions.');
  } else {
    scene.text('"What? Oh! You know! I just asked some moles in the FSB! But… changing subject, a little <i>wireless bug</i> toll me that you have big <i>creepyzoid</i> problems, and I was thinking! Hey! Sexy need a little help!"');
    scene.text('"What the hell?! Ana! What are you talking about?!"');
    scene.text('"About how you have left Mr.<i>Creepyzoid</i> without even trying! So… I have two things to say - First! Like my Dyeda always say! Speak softly, aim a meat grinder to their balls, and talk about the advantages of socialism, you will go far. And second! Mr.<i>Creepyzoid</i> hid that beautiful Pattern 1796 Heavy Cavalry Sword, in the local VTB bank, box 159, but… I have the key! And if you want to see it alive you will look for me somewhere in the city center! But not during the week, because I have exams, and neither nights, because I have a life! Oh! And bring some sexy sportswear!"');
    scene.text('She then hangs up, leaving you more than a little flabbergasted. It seems that you must find her, but first probably you should tell Aleksei about Filipp Kudashov\'s actions.');
  }
  scene.actions([
    { label: 'Continue', goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterKneel(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  qspCall(s, 'mood', 'lower', 'small');
  (s as any).AlexandriaMissionQW = 1;
  qspCall(s, 'arousal', 'bj', 10, 'sub');
  qspCall(s, 'arousal', 'end');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/ana/sex/bribex.mp4');
  if ((!((s as any).pcs_throat ?? 0))) {
    scene.text('There is a pregnant silence, as you kneel and try to think what to do… until Mr.Kudashov, seeming tired of your indecision, sigh, and take out his <i>tool</i>… and you gasp… this guy is <i>big</i>, easily 25cm! and he doesn\'t seemed in full swing!');
    scene.text('"Oh! Don\'t tell me that you have never? sigh… time for a lesson. First! Spit! A lot with the tongue all the way down and up!"');
    scene.text('Filipp sounds amused, as he gives you pointers, and with those and some help taken from porn, you take out your tongue and give him a lick… he tastes salty… sweaty, but not necessarily… <i>bad</i>, and with some uncertainty, you begin to go up and down her tool.');
    scene.text('"Yes… hm… just like that! Wet Sir-Lance-A-Lot! Good! Now use the mouth! Take care of your teeth! Try to use the lips to hide then… and continue using the hands!"');
    scene.text('You… reluctantly open your mouth and try to follow his instructions. Initially, there are some bittings, and you gag as he tries to push the now VERY hard piece of meat down your mouth, but somehow you manage to work a rhythm… and for the wet sounds and pleasuring moans filling the room… he is enjoying it.');
    scene.text('"Yes! Yes! Ms.Assistant! You have a great… GRAHH! YEAH!!!!!"');
    scene.text('You jerk back as suddenly Fillip cums, and you are showered with her semen… you sit there surprised not knowing how to react… looking at Mr.Kudashow\'s blissed face, that soon passes you a post-it with a number.');
    scene.text('"Ah… Fiu… Well… Mr. Aleksei\'s possession is in a security box in the local VTB bank. That is the number, but you will need a security key. I give it to that other girl, Ana, now I have work to do. Gregor! Take her out!"');
    scene.text('Before you can protest, a policeman enters and <i>escort</i> you, out of the room, as you can see a devil-may-care smile on Mr. Kudashov\'s face. It seems that you have been tricked.');
  } else {
    scene.text('Kneeling, you roll your eyes and decide to finish this quickly and without fuss, so, you take out his <i>tool</i>… and gasp… this guy is <i>big</i>, easily 25cm! and he doesn\'t seemed in full swing!');
    scene.text('"Impressed Ms.Assistant? I call it <i>Sir-Lance-A-Lot</i> and it keeps me happy! So, I supposed that is a good moment to practice the skills learned, under Mr.Aleksei… <i>service</i>."');
    scene.text('You content yourself, with the knowledge, that probably Aleksei will kill this guy, in the meantime, you begin to lick his <i>Sir-Lance-A-Lot</i>, carefully going from its base to the tip, giving him little laps to the head, before returning down, all of it accompanied with your hands massaging his balls.');
    scene.text('"Good technique Ms.Assistant! But now… I think you need to take it more <i>deep</i>."');
    scene.text('You open your mouth and put the now very turgid <i>Sir-Lance-A-Lot\'s</i> head. It\'s BIG! but you manage to suck the humongous thing, at the same time, you accompany the blowjob with some hand play. On his part, Mr.Kudashov seems to enjoy your job and grab himself to his chair, slightly raising his hips, as you, quickly lead him to climax."');
    scene.text('"Yes! Yes! Ms.Assistant! You have a great… GRAHH! YEAH!!!!!"');
    scene.text('Suddenly, The jerk grabs your head and takes away <i>Sir-Lance-A-Lot\'s</i>, so his semen can fly all over your face. Mr.Kudashow\'s seems utterly satisfied with your new <i>outlook</i>, and after resting some moments, pass you a post-it with a number.');
    scene.text('"Ah… Fiu… Well… Mr. Aleksei\'s possession is in a security box in the local VTB bank. That is the number, but you will need a security key. I give it to that other girl, Ana, now I have work to do. Gregor! Take her out!"');
    scene.text('Before you can protest, a policeman enters and <i>escort</i> you, out of the room, as you can see a devil-may-care smile on Mr. Kudashov\'s face. It seems that you have been tricked.');
  }
  scene.actions([
    { label: 'A call?', goto: ['alexandriaEv', 'anacall'] },
  ]);
  scene.build();
}

function enterContribution(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 5000);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).AlexandriaMissionQW = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Filipp</b></center>');
  scene.img('images/characters/city/ana/bribes.jpg');
  // TODO-QSP: dynamic text: With the most cynical sigh that you can manage, you take your wallet, pick <<$fu...
  scene.text(`With the most cynical sigh that you can manage, you take your wallet, pick ${qspFunc(s, 'money', 'string_price', 5000)}, and boringly, put them into Mr. Kudashov's cup. He, in turn, has the gal, to look disappointingly to your action, and mumbling something. "There is no way to get some tail in this job." Pick a post-it with the number 159 and pass it to you.`);
  scene.text('"What is the meaning of this?!"');
  scene.text('Giving a tired sigh, Filipp, returns to his work, but has the decency to answer.');
  scene.text('"Mr. Aleksei\'s possession is in a security box in the local VTB bank. That is the number, but you will need a security key. I give it to that other girl, Ana, now I have work to do. Gregor! Take her out!"');
  scene.text('Before you can protest, a policeman enters and <i>escort</i> you, out of the room, as you can see a devil-may-care smile on Mr. Kudashov\'s face. It seems that you have been tricked.');
  scene.actions([
    { label: 'A call?', goto: ['alexandriaEv', 'anacall'] },
  ]);
  scene.build();
}

function enterSuccubribe(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: minut + 5
  (s as any).AlexandriaMissionQW = 2;
  qspCall(s, 'mood', 'lower', 'small');
  qspCall(s, 'stat', '');
  scene.img('images/pc/body/succubusself.jpg');
  // TODO-QSP: dynamic text: You call <<$sucself1>> up from its resting place
  scene.text(`You call ${((s as any).sucself1 ?? 0)} up from its resting place`);
  scene.text('It fills you completely, suffusing through your being with power…');
  scene.text('<center><b>and hunger</b></center>');
  scene.text('Giving a thousand bucks smile, you walk salaciously towards the insulting buffoon, making his eyes bulge at your supernatural presence.');
  scene.text('"Ok Mr. Kudashov, if you want to play that way… Give me something so I deign to make you serve me… Work so you can be my slave…"');
  scene.text('He finally blinks surprised at your words and seems to want to say something, but you cut him with a finger over his lips, as you connect with the primal parts in his brain, making him lose control over his sexual excitation. Only then, you take away your hand, and hear his ramblings.');
  scene.text('"Oh?! Your What?! I mean… Ehm… It is in a security box in the local VTB bank! Number 159! Hm… You will need a security key… but… Ehm… I give it to the other girl! Ehm… Ana!"');
  scene.text('Bending sexily at your waist, you carefully rearrange the lapels on his shirt, before whispering sultrily into his ear.');
  scene.text('"Mr. Kudashov… You are so lucky that I don\'t have a chastity cage right now."');
  scene.text('Without waiting for more stupid words, you straighten your back and get out of his <i>office</i>, your hunger transforming into rage. You are going to kill that BITCH!');
  scene.actions([
    { label: 'A call?', goto: ['alexandriaEv', 'anacall'] },
  ]);
  scene.build();
}

function enterPersufilipp(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 5) + 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Filipp</b></center>');
  scene.img('images/characters/city/ana/bribes.jpg');
  if ((Math.floor(Math.random() * 100) + 1) < ((s as any).pcs_persuas ?? 0)) {
    scene.text('Filipp Kudashov tilts his head and looks at you with smugness "Ms. Assistant, I don\'t know what are you insinuating but…" You cut him before he can continue.');
    scene.text('"No Mr.Kudashov, listen to me. I am as you say <i>Mr.Aleksei\'s Assistant</i>… I work for <i>Mr.Aleksei</i>… No some two-bit criminal… No some mediocre penpusher… No Mr. Kudashov, I work for someone with <i>true power</i>, so don\'t try to play with me and for extension Mr.Aleksei. We have a deal, you were generously compensated, so were is the sword?"');
    scene.text('You don\'t know if call your words a bluff, mostly because you are pretty sure they are true, but will Filipp take them seriously?');
    scene.text('"There is no way to get some tail in this job."');
    scene.text('Score! Filipp Kudashov\'s mumbled words reach your ears, as he begins to write down something in a post-it, that promptly passes to you. In it the words <i>box 159</i> can be appreciated beside the local VTB bank direction.');
    scene.text('"The last thing Ms.Assistant, You will need a key. I give it to that other girl. Ana"');
    scene.text('Filip ignore your whithering gaze and return to do… whatever he does for a living. Taking into consideration, that there are cops in the building, giving him a beating is out of the question.');
    scene.actions([
      { label: 'A call?', handler: (st: GameState) => {
    (s as any).AlexandriaMissionQW = 2;
    qspCall(s, 'exp_gain', 'persuas', 1);
  }, goto: ['alexandriaEv', 'anacall'] },
    ]);
  } else {
    scene.text('Filipp Kudashov tilts his head and looks at you with smugness "Ms. Assistant, I don\'t know what are you insinuating but…" You cut him before he can continue.');
    scene.text('"No Mr.Kudashov, listen to me. I am as you say <i>Mr.Aleksei\'s Assistant</i>… I work for <i>Mr.Aleksei</i>… No some two-bit criminal… Not some mediocre penpusher… No Mr. Kudashov, I work for someone with <i>true power</i>, so don\'t try to play with me and for extension Mr.Aleksei. We have a deal, you were generously compensated, so were is the sword?"');
    scene.text('You don\'t know if call your words a bluff, mostly because you are pretty sure they are true, but will Filipp take them seriously?');
    scene.text('"Snort… Pfff… Jajaja… Yeah… Sure… Ms.Assistant"');
    scene.text('Filip covers his smiling face with the cup and gives it some little taps. Is evident that the idiot don\'t believe you, and is willing to challenge Aleksei\'s annoyance. He has a death wish, but you must make a decision… Submit to his wishes or get out of here.');
    if (qspFunc(s, 'succubus', 'active', 5)) {
      scene.actions([
        { label: 'Call your True Face', goto: ['alexandriaEv', 'succubribe'] },
      ]);
    }
    scene.actions([
      { label: 'Get out of here', goto: ['alexandriaEv', 'anacall'] },
      { label: 'Kneel', goto: ['alexandriaEv', 'kneel'] },
      { label: 'Give him a <i>contribution</i> [+$func(\'money\', \'get_cost_string\', 5000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['alexandriaEv', 'contribution'] }]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterAnachase1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana</b></center>');
  scene.img('images/characters/city/ana/ana3.jpg');
  scene.text('Yes, she is here… Modeling in that uniform of hers and taking selfies for a bunch of tourists, but when she sees you, quickly straightens her back, march towards you, and giving a formal salute, screams.');
  scene.text('"Est potentia ex testamento!"');
  scene.text('Around you two, the spectators giggle at Ana\'s antics, probably believing that this is some kind of spectacle, but… the truth is… that you don\'t have fucking idea why she is doing that!');
  scene.text('"Ana! Where is the key?!"');
  scene.text('She blinks confused, grimaces, points at you, and mouths an "Ups!", before beginning to frantically search around his many pockets until she shows you a key in her open hand.');
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    scene.text('"Sexy! Stop for a moment and hear my reasons! In my defense, I will say, that I was paid a fuckton of money to get that sword! I mean an SUV was parked in front of my home!"');
    scene.text('Around you, more people begin to gather to see the spectacle, you even hear their comments "The red-eyed is the good one, isn\'t it?" You don\'t know how to take that.');
    // TODO-QSP: dynamic text: "Ok, look Sexy, let's make a deal! You really don't owe Alexandria anything! I h...
    scene.text(`"Ok, look Sexy, let's make a deal! You really don't owe Alexandria anything! I have this little expense account, and I can skim around… let's see… ${qspFunc(s, 'money', 'string_profit', 35000)} if you turn back?"`);
    scene.text('"What if I refuse Ana?"');
    scene.text('"Pfff… Then you lose everything! I will run away and there is no way that you can catch me!"');
  } else {
    scene.text('"Ok! Sorry! I didn\'t want to put myself into St.Petersburg\'s sexiest prodigy bad side, but… sniff… I thought that you would understand! Sniff… I am only a mutant girl fighting to survive in a world with the darkest powers!"');
    scene.text('She then, put on puppy dog eyes, even managing to begin to cry, her face quickly filling with snot. "Dawww! Forgive the poor girl!" That is the public that obviously can\'t take this absurd situation seriously.');
    scene.text('"So… Sexy… I was thinking of doing something to fix this situation! I just will run away, and you chase after me, but… obviously, you will never catch this cutie! Then you can return to Alexandria, and tell about, how that cute cross between Playmate and Terminator escaped! You will save face, and I will win a fuckton of money! What do you say?"');
  }
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    scene.actions([
      { label: 'Accept the bribe.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'earn', 35000);
    (s as any).AlexandriaQW = 16;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Ana</b></center>');
    scene.img('images/characters/city/ana/ana3.jpg');
    scene.text('"Ok, Ana"');
    scene.text('Ana blinks surprised at your answer, and during a moment stands there open-mouthed, apparently, trying to process your answer.');
    scene.text('"Seriously Sexy? I mean… this isn\'t some trick to sucker-punch me and try to take away the key?"');
    scene.text('You are going to answer, but Ana has begun to carefully walk backward, putting back the key, and looking for something else in her pockets, all the time warily eyeing you. Finally, her retreat put her back against a parked black SUV, and finding what she was looking for, she trow it towards you.');
    scene.text('"So… Sexy… Why are even?"');
    scene.text('You grab the item, a little pouch with money inside. That is the moment that chooses Ana to jump inside the SUV and drive away.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Just leave, this is ridiculous.', handler: (st: GameState) => {
    (st as any).AlexandriaMissionQW = ((st as any).AlexandriaMissionQW ?? 0) - (1);
    (st as any).AlexandriaQW = 17;
  }, goto: ['city_center', ''] },
    { label: '"Challenge accepted!"', goto: ['alexandriaEv', 'anachase2'] },
    { label: 'Kick Ana in the guts, then grab the key!', goto: ['alexandriaEv', 'anafight1'] },
  ]);
  scene.build();
}

function enterAnachase2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana</b></center>');
  scene.img('images/characters/city/ana/action.jpg');
  scene.text('She gives you this big toothy smile, and then crouches in an exaggerated and totally useless action pose, probably for <i>your public</i> enjoyment, that continues taking photos.');
  scene.text('"Ok Sexy! Ready!"');
  scene.text('.');
  scene.text('..');
  scene.text('…');
  scene.text('…');
  scene.text('"Go! Beep Beep!"');
  scene.text('And then she turns from the sidewalk! Run straight into the street traffic! And do an impressive jump over an unsuspecting car! There is an immediate panic reaction coming from the surprised drivers, who do the impossible to try to slam into the loonie, that now stands defiantly in the middle of the street.');
  if (((s as any).spellKnown ?? 0)?.['haste'] === 1  &&  ((s as any).pcs_mana ?? 0) >= 60) {
    scene.actions([
      { label: 'Take a moment to cast your Haste spell', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - (60);
    qspCall(s, 'exp_gain', 'splcstng', Math.floor(Math.random() * 5) + 1);
    qspCall(s, 'exp_gain', 'run', Math.floor(Math.random() * 5) + 1);
    qspCall(s, 'fame', 'city', 'acting', 5);
    (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/ana/spellcraft.mp4');
    scene.text('You look at Ana, then, slowly and deliberately, you invoke your magic through gestures, will, and words so she can see a true wizard in action. Around you, people look enthralled at your magical display their "Whoa!" filling your ears.');
    scene.text('Finally, the spell is completed, and time seems to slow, as your brain capacity to process information is multiplied.');
    scene.text('"EPP!!!" Ana, give a little yelp, surprise plastered all over her face, as you launch yourself after her. If she thinks that you are going to back off, she is going to be disappointed, and with the surprise on your side, you rush to grab the annoying nut.');
    scene.text('"Sexy! Don\'t touch, we aren\'t that close!"');
    scene.text('You ignore her rant, as your hands close over her… arm?! There is a sudden <i>squishi</i> sensation, and it <i>breaks</i> in black-crimson ribbons? Ana, then, sidesteps you, and with a black-crimson mist trailing her, she begins a mad dash down the street, it seems that is going to be harder than you thought.');
    scene.actions([
      { label: 'Run!', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'run', Math.floor(Math.random() * 5) + 1);
    (s as any).dummy = Math.floor(Math.random() * 100) + 1;
    qspCall(s, 'stat', '');
    if (((s as any).dummy ?? 0) <= ((s as any).pcs_run ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['alexandriaEv', 'anachase3'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['alexandriaEv', 'anachase4'] }]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_center', '')  &&  ((s as any).car ?? 0)?.['fuel'] > 0  &&  (((s as any).car ?? 0)?.['current_condition'] > 0  ||  ((s as any).car ?? 0)?.['wreck'] === 0)) {
    scene.actions([
      { label: 'Why run? You have a car!', goto: ['alexandriaEv', 'anacarchase'] },
    ]);
  }
  scene.actions([
    { label: 'You aren\'t crazy! Abandon this chase!', handler: (st: GameState) => {
    (st as any).AlexandriaMissionQW = ((st as any).AlexandriaMissionQW ?? 0) - (1);
    (st as any).AlexandriaQW = 17;
  }, goto: ['city_center', ''] },
    { label: 'The chase is on!', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'exp_gain', 'run', Math.floor(Math.random() * 5) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/ana/chase.jpg');
    scene.text('"EPP!!!" Ana, give a little yelp, surprise plastered all over her face, as you launch yourself after her. If she thinks that you are going to back off, Ana is going to be disappointed, and with the surprise in your side, you rush to grab the annoying nut.');
    scene.text('"Sexy! Don\'t touch, we aren\'t that close!"');
    scene.text('You ignore her rant, as your hands close over… air?! Ana just <i>blurs</i> and sidesteps you, a black-crimson mist trailing her, as she begins a mad dash down the street, it seems that is going to be harder than you thought.');
    scene.actions([
      { label: 'Run!', handler: (st: GameState) => {
    (s as any).dummy = Math.floor(Math.random() * 100) + 1;
    qspCall(s, 'stat', '');
    if (((s as any).dummy ?? 0) <= ((s as any).pcs_run ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['alexandriaEv', 'anachase3'] }]);
    } else {
      if (((s as any).dummy ?? 0) >= ((s as any).pcs_run ?? 0)  &&  ((s as any).dummy ?? 0) >= 90) {
        scene.actions([{ label: 'Continue', goto: ['alexandriaEv', 'anacrash1'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['alexandriaEv', 'anachase4'] }]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnachase3(s: GameState, scene: SceneBuilder): void {
  (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).fat = ((s as any).fat ?? 0) - (5);
  qspCall(s, 'mood', 'raise', 'tiny');
  // TODO-QSP: gs 'exp_gain', 'run', rand (1, 5)
  qspCall(s, 'fame', 'city', 'running', 5);
  qspCall(s, 'sweat', 'add', 10);
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (8);
  if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (24);
    qspCall(s, 'sweat', 'add', 12);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (18);
    qspCall(s, 'sweat', 'add', 10);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana</b></center>');
  scene.img('images/characters/city/ana/ana4.jpg');
  scene.text('Ana runs through the traffic demonstrating cinematic levels of agility and strength, doing backflips over cars, and filling the air with the driver\'s insults, as she creates an insane ruckus just to stop you.');
  scene.text('"You can\'t catch me! You can\'t catch me!"');
  scene.text('And yes… somehow… sing-songing all the way, without catching her breath! But is not enough… All that is just theatrics, and you have hard-trained your running skills… You don\'t do <i>fantasy</i> moves… You don\'t waste your breath… and finally, she is at your reach… a hand quickly closing on her back.');
  scene.text('Then, she is already gone, her jacket dissolving in the same black-crimson mist, as she twists, sidesteps, and runs towards an alley, doing a series of jumps that leave her in a fire exit just over your head.');
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    // TODO-QSP: dynamic text: "Woah! I mean! Woah! Sexy I am pretty fast, but you?! That is awesome! What if I...
    scene.text(`"Woah! I mean! Woah! Sexy I am pretty fast, but you?! That is awesome! What if I double my offer? Think about that! ${qspFunc(s, 'money', 'string_profit', 70000)}!"`);
  } else {
    scene.text('"Woah! I mean! Woah! Sexy I am pretty fast, but you?! That is awesome!"');
  }
  if (((s as any).spellKnown ?? 0)?.['shock'] === 1  &&  ((s as any).pcs_mana ?? 0) >= 20) {
    scene.actions([
      { label: 'The paint job in the fire scape has peeled away… and you know Electric Shock…', handler: (st: GameState) => {
    (st as any).dummy = Math.floor(Math.random() * 100) + 1;
  }, goto: ['alexandriaEv', 'anachase7'] },
    ]);
  }
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    scene.actions([
      { label: 'Accept the bribe.', goto: ['alexandriaEv', 'anabribe1'] },
    ]);
  }
  scene.actions([
    { label: 'Oh fuck this! You leave!', handler: (st: GameState) => {
    (st as any).AlexandriaMissionQW = ((st as any).AlexandriaMissionQW ?? 0) - (1);
    (st as any).AlexandriaQW = 17;
  }, goto: ['city_center', ''] },
    { label: 'Climb after her!', goto: ['alexandriaEv', 'anachase5'] },
    { label: 'Do some PARKOUR! and block her way!', handler: (st: GameState) => {
    (st as any).dummy = Math.floor(Math.random() * 100) + 1;
  }, goto: ['alexandriaEv', 'anachase6'] },
  ]);
  scene.build();
}

function enterAnachase4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).fat = ((s as any).fat ?? 0) - (5);
  qspCall(s, 'mood', 'lower', 'small');
  qspCall(s, 'sweat', 'add', 10);
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (8);
  if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (24);
    qspCall(s, 'sweat', 'add', 12);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (18);
    qspCall(s, 'sweat', 'add', 10);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana\'s number</b></center>');
  scene.img('images/characters/city/ana/selfie.jpg');
  scene.text('Ana runs through the traffic demonstrating cinematic levels of agility and strength, doing backflips over cars, and filling the air with the driver\'s insults, as she creates an insane ruckus just to stop you.');
  scene.text('"You can\'t catch me! You can\'t catch me!"');
  scene.text('And yes… somehow… sing-songing all the way, without catching her breath! All that, makes it impossible for you, to keep up with the mad rush, and in a moment, she leaves you heaving in the middle of the street');
  scene.text('"Ring! Ring!"');
  scene.text('Your phone ring… is Ana…');
  scene.text('"Come on Sexy! What are you waiting for?! Look, two more blocks! Turn left at the stop signal and look up!"');
  scene.text('She then hangs up, leaving you to follow her instructions, and find her with a shit-eating-grin on a fire escape just over your head.');
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    // TODO-QSP: dynamic text: "Oh Sexy! You disappoint me, Was it too hard for you? Hm… Let's then end this qu...
    scene.text(`"Oh Sexy! You disappoint me, Was it too hard for you? Hm… Let's then end this quickly! What if I double my offer? Think about that! ${qspFunc(s, 'money', 'string_profit', 70000)}!"`);
  } else {
    scene.text('"Oh Sexy! You disappoint me, That was too hard for you?"');
  }
  if (((s as any).spellKnown ?? 0)?.['shock'] === 1  &&  ((s as any).pcs_mana ?? 0) >= 20) {
    scene.actions([
      { label: 'The paint job in the fire escape has peeled away… and you know Electric Shock…', handler: (st: GameState) => {
    (st as any).dummy = Math.floor(Math.random() * 100) + 1;
  }, goto: ['alexandriaEv', 'anachase7'] },
    ]);
  }
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    scene.actions([
      { label: 'Accept the bribe.', goto: ['alexandriaEv', 'anabribe1'] },
    ]);
  }
  scene.actions([
    { label: 'Oh fuck this! You leave!', handler: (st: GameState) => {
    (st as any).AlexandriaMissionQW = ((st as any).AlexandriaMissionQW ?? 0) - (1);
    (st as any).AlexandriaQW = 17;
  }, goto: ['city_center', ''] },
    { label: 'Climb after her!', goto: ['alexandriaEv', 'anachase5'] },
    { label: 'Do some PARKOUR! and block her way!', handler: (st: GameState) => {
    (st as any).dummy = Math.floor(Math.random() * 100) + 1;
  }, goto: ['alexandriaEv', 'anachase6'] },
  ]);
  scene.build();
}

function enterAnacrash1(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_health = ((s as any).pcs_health ?? 0)/((s as any).rand ?? 0)(2, 10);
  (s as any).pain['asscheeks'] = ((s as any).pain['asscheeks'] ?? 0) + (0);
  (s as any).pain['feet'] = ((s as any).pain['feet'] ?? 0) + (0);
  (s as any).pain['shoulders'] = ((s as any).pain['shoulders'] ?? 0) + (0);
  (s as any).pain['wrists'] = ((s as any).pain['wrists'] ?? 0) + (0);
  (s as any).pain['ankles'] = ((s as any).pain['ankles'] ?? 0) + (0);
  (s as any).pain['armL'] = ((s as any).pain['armL'] ?? 0) + (0);
  (s as any).pain['armR'] = ((s as any).pain['armR'] ?? 0) + (0);
  (s as any).pain['cheeks'] = ((s as any).pain['cheeks'] ?? 0) + (0);
  (s as any).pain['legL'] = ((s as any).pain['legL'] ?? 0) + (0);
  (s as any).pain['legR'] = ((s as any).pain['legR'] ?? 0) + (0);
  (s as any).pain['hands'] = ((s as any).pain['hands'] ?? 0) + (0);
  (s as any).pain['jaw'] = ((s as any).pain['jaw'] ?? 0) + (0);
  (s as any).pain['thighs'] = ((s as any).pain['thighs'] ?? 0) + (0);
  (s as any).pain['toes'] = ((s as any).pain['toes'] ?? 0) + (0);
  (s as any).pain['fingers'] = ((s as any).pain['fingers'] ?? 0) + (0);
  (s as any).pain['nose'] = ((s as any).pain['nose'] ?? 0) + (0);
  (s as any).pain['back'] = ((s as any).pain['back'] ?? 0) + (0);
  (s as any).pain['ribs'] = ((s as any).pain['ribs'] ?? 0) + (0);
  (s as any).pain['hips'] = ((s as any).pain['hips'] ?? 0) + (0);
  (s as any).pain['head'] = ((s as any).pain['head'] ?? 0) + (0);
  (s as any).pain['ears'] = ((s as any).pain['ears'] ?? 0) + (0);
  (s as any).pain['eyebrows'] = ((s as any).pain['eyebrows'] ?? 0) + (0);
  (s as any).pain['lips'] = ((s as any).pain['lips'] ?? 0) + (0);
  (s as any).pain['tummy'] = ((s as any).pain['tummy'] ?? 0) + (0);
  (s as any).pain['neck'] = ((s as any).pain['neck'] ?? 0) + (0);
  (s as any).pain['chest'] = ((s as any).pain['chest'] ?? 0) + (0);
  (s as any).pain['breasts'] = ((s as any).pain['breasts'] ?? 0) + (0);
  (s as any).pain['nipples'] = ((s as any).pain['nipples'] ?? 0) + (0);
  (s as any).minut = ((s as any).minut ?? 0) + 7;
  (s as any).fat = ((s as any).fat ?? 0) - (2);
  qspCall(s, 'mood', 'lower', 'huge');
  qspCall(s, 'sweat', 'add', 5);
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (4);
  if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (12);
    qspCall(s, 'sweat', 'add', 6);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (9);
    qspCall(s, 'sweat', 'add', 5);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/ana/crash.jpg');
  scene.text('Ana run through the traffic demonstrating cinematic levels of agility and strength, doing backflips over cars, and filling the air with the driver\'s insults, as she creates an insane ruckus just to stop you.');
  scene.text('"You can\'t catch me! You can\'t catch me!"');
  scene.text('And yes… somehow… sing-songing all the way, without catching her breath! All that, makes it impossible for you, to keep up with the mad rush, and be aware of the traffic…');
  scene.text('"SCREEEEE!!!"');
  scene.text('You barely register the sound of a car\'s brakes, as the driver try to evade you… there is an impact… a weightlessness moment… and you find yourself in the ground… pain shooting through your body.');
  if (((s as any).spellKnown ?? 0)?.['heal'] === 1  &&  ((s as any).pcs_mana ?? 0) >= 400) {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Will you to cast Heal. [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Will you to cast Heal. [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['alexandriaEv', 'heal1'] },
      ]);
    }
  }
  scene.actions([
    { label: 'You fall unconscious', goto: ['alexandriaEv', 'hospital'] },
  ]);
  scene.build();
}

function enterHospital(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (1);
  (s as any).AlexandriaQW = 17;
  (s as any).music_loop = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/alexandria2.jpg');
  // TODO-QSP: dynamic text: A mix of pain and numbness hit you as your conscience returned. You are lying do...
  scene.text(`A mix of pain and numbness hit you as your conscience returned. You are lying down in a hospital bed, in what seems to be the ER, with an IV and medical equipment monitoring your health. "Feeling better ${((s as any).pcs_lastname ?? 0)}?" You turn towards the voice, and see Aleksei observing you, a cigarette in his hands in defiance of the hospital's rules.`);
  scene.text('"Oh… What the hell?" You groan in discomfort and palpate, your body, the shadow of some kind of magical effect dissipating quickly. Everything seems to be in it\'s place and with some effort manages to sit in the bed.');
  // TODO-QSP: dynamic text: "I'm… sorry <<$pcs_lastname>>. I wasn't expecting this task to escalate, and you...
  scene.text(`"I'm… sorry ${((s as any).pcs_lastname ?? 0)}. I wasn't expecting this task to escalate, and you end up needing urgent medical attention. I… have taken the liberty to heal the most grievous wounds and ordered to clean your clothes. Take your time to recover and then return to me, we need to talk."`);
  scene.text('Saying that Aleksei departs, leaving you to the care of the medical staff that helps you get up and dress. After a last medical examination - that leaves a baffling physician assuming that your wounds were misdiagnosed - you are put in a wheelchair and escorted to the hospital\'s exit.');
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterHeal1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 6;
  (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (3);
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - (400);
  qspCall(s, 'exp_gain', 'splcstng', Math.floor(Math.random() * 5) + 1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana\'s number</b></center>');
  scene.img('images/characters/city/ana/selfie.jpg');
  scene.text('You lie there in the ground as pain and shock try to put you down, and chaos descent over the street, as the traffic stops and somebody begins to call an ambulance… but you don\'t accept it… Gritting your teeth, a word of power is forced out and a balming sensation travels your injured body.');
  scene.text('"Hey girl don\'t move!"');
  scene.text('You ignore whatever is trying to help you and rise, your bones and flesh knitting back together… is not enough… but you will live');
  scene.text('"Ring! Ring!"');
  scene.text('Your phone ring… is Ana…');
  // TODO-QSP: dynamic text: "<i>Madre de dios</i>! <<$pcs_nickname>> are you ok?!"
  scene.text(`"<i>Madre de dios</i>! ${((s as any).pcs_nickname ?? 0)} are you ok?!"`);
  scene.text('"No Ana, I am not ok! Where the fuck is the key!"');
  scene.text('"Ehm… I am… Look, two more blocks… Turn left at the stop signal and look up."');
  scene.text('She then hangs up, leaving you to follow her instructions, and find her fingering in a firescape just over your head.');
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    // TODO-QSP: dynamic text: "Hm <<$pcs_nickname>> Hm… Maybe you want to take it easy… What if I double my of...
    scene.text(`"Hm ${((s as any).pcs_nickname ?? 0)} Hm… Maybe you want to take it easy… What if I double my offer… Hm? ${qspFunc(s, 'money', 'string_profit', 70000)}?"`);
  } else {
    // TODO-QSP: dynamic text: "Hm <<$pcs_nickname>> Hm… Maybe you want to take it easy…"
    scene.text(`"Hm ${((s as any).pcs_nickname ?? 0)} Hm… Maybe you want to take it easy…"`);
  }
  if (((s as any).spellKnown ?? 0)?.['shock'] === 1  &&  ((s as any).pcs_mana ?? 0) >= 20) {
    scene.actions([
      { label: 'The paint job in the fire scape has peeled away… and you know Electric Shock…', handler: (st: GameState) => {
    (st as any).dummy = Math.floor(Math.random() * 100) + 1;
  }, goto: ['alexandriaEv', 'anachase7'] },
    ]);
  }
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    scene.actions([
      { label: 'Accept the bribe.', goto: ['alexandriaEv', 'anabribe1'] },
    ]);
  }
  scene.actions([
    { label: 'Oh fuck this! You leave!', handler: (st: GameState) => {
    (st as any).AlexandriaMissionQW = ((st as any).AlexandriaMissionQW ?? 0) - (1);
    (st as any).AlexandriaQW = 17;
  }, goto: ['city_center', ''] },
    { label: 'Climb after her!', goto: ['alexandriaEv', 'anachase5'] },
    { label: 'Do some PARKOUR! and block her way!', handler: (st: GameState) => {
    (st as any).dummy = Math.floor(Math.random() * 100) + 1;
  }, goto: ['alexandriaEv', 'anachase6'] },
  ]);
  scene.build();
}

function enterAnacarchase(s: GameState, scene: SceneBuilder): void {
  (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (5);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/ana/driver.jpg');
  scene.text('You smile candidly to Ana as around her, honks and insults fly… You stroll happily up the sidewalk… You calmly enter your car… You happily drive beside her…');
  scene.text('"Sexy! That is cheating!"');
  scene.text('"Suck it bitch!"');
  scene.text('Ana stand a moment there, looking at you totally out-witted. Then straight her back and race down the street, a black-crimson mist trailing her way as she supernaturally accelerates, trying to leave your car behind, but is not enough, as she not only must go faster but deal with the scared drivers.');
  scene.text('Finally, she has enough and suddenly turns towards a side alley, trying to lose you, but as you try to follow her, she stops mid-step, turns, and runs back! Instinctively making you hit the brakes.');
  scene.text('"SCREEEEE!!!"');
  scene.text('The car stops painfully as the suspension fights against the inertia, trying not to run over Ana, who continues her unstoppable race, finally ending it, using your car\'s hood to jump at a fire escape.');
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    // TODO-QSP: dynamic text: "Sexy, you are a crazy bitch! What if I double my offer! Think about that! <<$fu...
    scene.text(`"Sexy, you are a crazy bitch! What if I double my offer! Think about that! ${qspFunc(s, 'money', 'string_profit', 70000)}!"`);
  } else {
    scene.text('"Sexy, you are a crazy bitch!"');
  }
  if (((s as any).spellKnown ?? 0)?.['shock'] === 1  &&  ((s as any).pcs_mana ?? 0) >= 20) {
    scene.actions([
      { label: 'The paint job in the fire scape has peeled away… and you know Electric Shock…', handler: (st: GameState) => {
    (st as any).dummy = Math.floor(Math.random() * 100) + 1;
  }, goto: ['alexandriaEv', 'anachase7'] },
    ]);
  }
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    scene.actions([
      { label: 'Accept the bribe.', goto: ['alexandriaEv', 'anabribe1'] },
    ]);
  }
  scene.actions([
    { label: 'Oh fuck this! You leave!', handler: (st: GameState) => {
    (st as any).AlexandriaMissionQW = ((st as any).AlexandriaMissionQW ?? 0) - (1);
    (st as any).AlexandriaQW = 17;
  }, goto: ['city_center', ''] },
    { label: 'Climb after her!', goto: ['alexandriaEv', 'anachase5'] },
    { label: 'Do some PARKOUR! and block her way!', handler: (st: GameState) => {
    (st as any).dummy = Math.floor(Math.random() * 100) + 1;
  }, goto: ['alexandriaEv', 'anachase6'] },
  ]);
  scene.build();
}

function enterAnafight1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana</b></center>');
  scene.img('images/characters/city/ana/action.jpg');
  scene.text('Not without some satisfaction, you rise your feet towards Ana\'s undefended stomach, and kick her! She loses balance, and the key falls from her hand.');
  scene.text('"Whaaaaa! I am fallingggg! Oh! That hurttttt!"');
  scene.text('Then, screaming at full volume, she continues falling back <i>matrix-style</i> somehow bending without breaking the rhythm on the tumble, putting a hand in the ground, and doing an elegant cartwheel that ends with her crouched in an action pose.');
  scene.text('"Whoaaa! Go, girl! Cheater! Girl fight!"');
  scene.text('Around you, the crowd begins to howl in pleasure at your <i>performance</i>, and Ana… hail back… well, it doesn\'t matter to you, the key is at your reach… only that the key doesn\'t seem like a security key… Then you look back to a smiling Ana, that extends her left arm, that in a moment EXPLODE in a black-crimson mist, before she launches her, back against you!');
  scene.actions([
    { label: 'FIGHT!', handler: (st: GameState) => {
    scene.img('images/characters/city/ana/action.jpg');
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'sandbaggingana');
    // TODO-QSP: xgt 'fight', 'start'
  } },
  ]);
  scene.build();
}

function enterJail(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1440;
  (s as any).pcs_sleep = 90;
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
  (s as any).fat = ((s as any).fat ?? 0) + (5);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
  (s as any).AlexandriaQW = 17;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/police/pavhold.jpg');
  scene.text('After your little scuffle, a pair of serious-looking policemen take you to the police station near the courthouse. You soon realize that something is amiss when they take away your phone and wallet without any search, promptly putting you in a cell, during the next hour, you see cops come and go around the cell block, but without exception, they ignore any of your calls, or try to collect a declaration.');
  scene.text('"Hey Sexy! Take this!" With a TUDD a plastic bag fall to the ground, launched through the cell window, by a climbing Ana. In it, there is a 2L Coke and some sandwiches.');
  scene.text('"What the hell?! What is happening Ana?!"');
  scene.text('"Jeez! Ok… look Sexy… ehm… it wasn\'t my idea! <i>Da Boss</i> think that you have abandoned the race too soon… so… well… you are going to pass this day <i>en chirona</i>… hm… so sorry! Bye! I have exams!"');
  scene.text('"Wait! Ana! What the fuck!" but is too late, Ana has run away and has left you alone… so… you only can sit and wait. You pass the next 24 hours, bored out of your mind, without other things to do except sleep and look at the slowly peeling paint on the walls, until the time passes, and without fanfare, you are escorted out of the cell towards the street.');
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterAnabribe1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'money', 'earn', 70000);
  (s as any).AlexandriaQW = 16;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana</b></center>');
  scene.img('images/characters/city/ana/ana3.jpg');
  scene.text('"Ok, Ana"');
  scene.text('Ana blinks surprised at your answer, and during a moment stands there open-mouthed, apparently, trying to process your answer.');
  scene.text('"Seriously Sexy? I mean… this isn\'t some trick to sucker-punch me and try to take away the key?"');
  scene.text('You are going to answer, but Ana, give a jump, backflip mid-air, and land behind you, before beginning to carefully walk backward, putting back the key, and looking for something else in her pockets, all the time warily eyeing you. Finally, her retreat put her back against a black SUV that just parked, and finding what she was looking, she trow it towards you.');
  scene.text('"So… Sexy… Why are even?"');
  scene.text('You grab the item, a little pouch with money inside. That is the moment that chooses Ana to jump inside the SUV and drive away.');
  scene.actions([
    { label: 'Leave', goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterAnachase5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (1);
  (s as any).music_loop = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/ana/tv.jpg');
  scene.text('You quickly climb after Ana, just for her to do an inhuman-looking jump towards the opposite wall, latch at it like Spider-Man, and continue with a series of acrobatics that put Ana two floors over you! There something catches her attention, make Ana smile, and enter the building through a near open window.');
  scene.text('You end your climbing and enter the window, that leads you towards a living room… with a broken TV to one side and a group of very pissed Gopniks in the other… who seem to be threatening a not impressed Ana…');
  scene.text('"Ok guys! I said I am sorry! Hey, Sexy! Take one for the team and remember! Spartak forever!"');
  scene.text('The group is distracted by your sudden entrance and Ana\'s words. That is the signal for her to jump up to the ceiling, rebound, and somehow do a free-running maneuver that put her behind the angry fellows… coincidentally beside the exit door… that promptly cross.');
  scene.text('"What the fuck?! You know that bitch?! You are going to pay for our TV! The Zenit was playing today!"');
  if (((s as any).fame ?? 0)?.['city_kickboxing'] >= 200) {
    scene.actions([
      { label: 'Intimidate them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/ana/gopniks.jpg');
    scene.text('You don\'t have time to lose with these shits! So… uncaring over their aptitude, you walk towards them, crack your knuckles, and confront the <i>shitmouth</i>.');
    scene.text('"Ok dude… get out of my way or I pray to god, my feet will kick your ass so hard, that you will taste your own shit."');
    scene.text('The Gopnikcs seemed to rise to the challenge, obviously, accustomed to violence and with the numbers on their side, you don\'t seem intimidating… and then the whispers begin…');
    scene.text('"Kickboxing master! Really mean left hook! She took him in a round!"');
    scene.text('They grunt, and part, so you can exit the apartment towards the building\'s stairs, just to see Ana one floor lower.');
    scene.text('"Woah! Sexy! Can you teach me how to do that?!" Then trying to talk like Batman, she says "I am Sexy!"');
    scene.text('Trying to reach before the end of her tirade, you jump down the stairs, making Ana scream and scramble down the building towards the street, where she again dances around the incoming cars to cross towards a multistory car park.');
    scene.actions([
      { label: 'Follow her', goto: ['alexandriaEv', 'anachasefinal'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Pay them a new TV [+$func(\'money\', \'get_cost_string\', 15000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 15000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 15000);
      (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/ana/gopniks.jpg');
      scene.text('You don\'t have time to lose with this shits! So… uncaring over their aptitude, you walk towards them, take away your wallet and press 15K, against the <i>smartmouth\'s</i> chest.');
      scene.text('"Ok dude… just pick one better this time."');
      scene.text('The Gopniks are speechless, their mouths are frozen on whatever shit they were gonna say. Then begin to scramble to take the money.');
      scene.text('"Fuck! Where is the nearest shop? Shit! Take my car! Ouch! You stepped on my foot, son-of-a-bitch!"');
      scene.text('You somehow dance between the frantic fans, and exit the apartment towards the building\'s stairs, just to see Ana one floor lower.');
      scene.text('"Hey Sexy! I was expecting something with more… well, blood and teeth… but I quest if it works…"');
      scene.text('Trying to reach before the end of her tirade, you jump down the stairs, making Ana scream and scramble down the building towards the street, where she again dances around the incoming cars to cross towards a multistory car park.');
      scene.actions([
        { label: 'Follow her', goto: ['alexandriaEv', 'anachasefinal'] },
      ]);
    }
  } },
    { label: 'Go through them… violently!', handler: (st: GameState) => {
    scene.img('images/characters/city/ana/gopniks.jpg');
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'anagopniks');
    // TODO-QSP: xgt 'fight', 'start'
  } },
    { label: 'Talk calmly and try to retreat through the window.', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 1) < ((s as any).pcs_persuas ?? 0)) {
      if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
      }
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      scene.text('<center><b>Ana\'s number?</b></center>');
      scene.img('images/characters/city/ana/selfie.jpg');
      scene.text('"Ok guys, I am sorry for what that nut said! I am in the same situation! That freak had been messing with me all day long, and I was trying to teach her a lesson!"');
      scene.text('You try to defuse the situation, but only seem to win time, as they seemed <i>really</i> pissed, at the prospect of losing today Zenith\'s match… Fortunately, that wasn\'t your plan… as the truth is, that you only wanted to win time, until you can reach the window.');
      scene.text('"Fuck! That bitch is trying to scape!"');
      scene.text('<i>Too late</i>, you think as finally, you cross the opening and quickly close it after you. The Gopniks crowding, impeding your persecution, and letting you run away down the fire escape, towards the street… where you don\'t know where ana has gone.');
      scene.text('"Ring! Ring!"');
      scene.text('Your phone ring with Ana\'s number.');
      scene.text('"Hey Sexy! Still alive?! Good! But what is entertaining you? I am bored in this parking lot! What are you waiting for?!"');
      scene.actions([
        { label: 'Follow her', goto: ['alexandriaEv', 'anachasefinal'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 5) + 0);
      (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/ana/gopniks.jpg');
      scene.text('"Ok guys, I am sorry for what that nut said! There\'s no need to get pissed, The Spartak is a great team!"');
      scene.text('"Shit! That was probably one of the worst things to say. The Zenith has a traditional rivalry with Moscow-based teams, Spartak being one of them, and these guys seem like hardcore Zenith fans." With murder in their eyes, they throw themselves at you.');
      scene.actions([
        { label: 'BRAWL!', handler: (st: GameState) => {
    scene.img('images/characters/city/ana/gopniks.jpg');
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'anagopniks');
    // TODO-QSP: xgt 'fight', 'start'
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterHeal2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (3);
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - (400);
  qspCall(s, 'exp_gain', 'splcstng', Math.floor(Math.random() * 5) + 1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana\'s number</b></center>');
  scene.img('images/characters/city/ana/selfie.jpg');
  scene.text('You lie there in the middle of a dirty alley, as pain and shock try to put you down… but you don\'t accept it… Gritting your teeth, a word of power is forced out and a balming sensation travels your injured body.');
  scene.text('"Ring! Ring!"');
  scene.text('Your phone ring… is Ana…');
  // TODO-QSP: dynamic text: "Shit! <<$pcs_nickname>> I thought you were a goner!"
  scene.text(`"Shit! ${((s as any).pcs_nickname ?? 0)} I thought you were a goner!"`);
  scene.text('"No Ana, I am going after you!!"');
  scene.text('"Ehm… I am… Look, I don\'t think is a good idea, is better if you look for a medic, but… if you must… I am in the parking lot crossing the street."');
  scene.text('She then hangs up, leaving you to follow her instructions, and cross the street towards a multistory car park.');
  scene.actions([
    { label: 'Follow her', goto: ['alexandriaEv', 'anachasefinal'] },
  ]);
  scene.build();
}

function enterAnachase6(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dummy ?? 0) <= ((s as any).pcs_run ?? 0)  &&  ((s as any).pcs_stren ?? 0) >= 50  &&  ((s as any).pcs_agil ?? 0) >= 50  &&  ((s as any).pcs_vital ?? 0) >= 50  &&  ((s as any).pcs_react ?? 0) >=50) {
    (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (6);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).fat = ((s as any).fat ?? 0) - (10);
    qspCall(s, 'mood', 'raise', 'small');
    // TODO-QSP: gs 'exp_gain', 'run', rand (5, 10)
    // TODO-QSP: gs 'exp_gain', 'stren', rand (5, 10)
    // TODO-QSP: gs 'exp_gain', 'agil', rand (5, 10)
    // TODO-QSP: gs 'exp_gain', 'vital', rand (5, 10)
    // TODO-QSP: gs 'exp_gain', 'react', rand (5, 10)
    qspCall(s, 'fame', 'city', 'running', 10);
    qspCall(s, 'sweat', 'add', 20);
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (16);
    if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (24);
      qspCall(s, 'sweat', 'add', 12);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (18);
      qspCall(s, 'sweat', 'add', 10);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/ana/parkour.mp4');
    scene.text('You take some moments to stretch, and show off to a puzzled Ana, then… without hesitation, run towards a garbage container and using it as a trampoline, you jump towards her, grabbing the stairs\' railing and propelling behind a surprised Ana.');
    scene.text('"Sexy! <i>Eso mola</i>! But… two can play to that!"');
    scene.text('She then… give an inhuman-looking jump towards the opposite wall, latch at it like Spider-Man and continue with a series of acrobatics that put Ana two floors over you! There, she gives a bowing and begins to climb towards the rooftop.');
    scene.text('"That isn\'t going to help you, Ana!"');
    scene.text('You scream at that nut and climb after her, reaching the rooftop. You see Ana running away quickly, but she\'s far from winning. That black-crimson mist signals her path, and using your hard-earned skills, you jump between rooftops, slide down rain gutters, and scare terrace-dwelling pets to catch up to her.');
    scene.text('"Woah Sexy! The <i>Parkata Urbatsu</i> is strong in you!"');
    scene.text('She screams and tries to lose you, descending to the street level, and dancing through traffic. Her objective is a multistory car park but is not enough and as she enters the building, you enter through a window, just in front of her… The chase has ended.');
    scene.actions([
      { label: 'Endgame', goto: ['alexandriaEv', 'anachasefinal'] },
    ]);
  } else {
    if (((s as any).dummy ?? 0) >= 90  &&  ((s as any).dummy ?? 0) >= ((s as any).pcs_run ?? 0)  &&  ((s as any).pcs_stren ?? 0) >= 50  &&  ((s as any).pcs_agil ?? 0) >= 50  &&  ((s as any).pcs_vital ?? 0) >= 50  &&  ((s as any).pcs_react ?? 0) >=50) {
      (s as any).pcs_health = ((s as any).pcs_health ?? 0)/((s as any).rand ?? 0)(2, 10);
      (s as any).pain['asscheeks'] = ((s as any).pain['asscheeks'] ?? 0) + (0);
      (s as any).pain['feet'] = ((s as any).pain['feet'] ?? 0) + (0);
      (s as any).pain['shoulders'] = ((s as any).pain['shoulders'] ?? 0) + (0);
      (s as any).pain['wrists'] = ((s as any).pain['wrists'] ?? 0) + (0);
      (s as any).pain['ankles'] = ((s as any).pain['ankles'] ?? 0) + (0);
      (s as any).pain['armL'] = ((s as any).pain['armL'] ?? 0) + (0);
      (s as any).pain['armR'] = ((s as any).pain['armR'] ?? 0) + (0);
      (s as any).pain['cheeks'] = ((s as any).pain['cheeks'] ?? 0) + (0);
      (s as any).pain['legL'] = ((s as any).pain['legL'] ?? 0) + (0);
      (s as any).pain['legR'] = ((s as any).pain['legR'] ?? 0) + (0);
      (s as any).pain['hands'] = ((s as any).pain['hands'] ?? 0) + (0);
      (s as any).pain['jaw'] = ((s as any).pain['jaw'] ?? 0) + (0);
      (s as any).pain['thighs'] = ((s as any).pain['thighs'] ?? 0) + (0);
      (s as any).pain['toes'] = ((s as any).pain['toes'] ?? 0) + (0);
      (s as any).pain['fingers'] = ((s as any).pain['fingers'] ?? 0) + (0);
      (s as any).pain['nose'] = ((s as any).pain['nose'] ?? 0) + (0);
      (s as any).pain['back'] = ((s as any).pain['back'] ?? 0) + (0);
      (s as any).pain['ribs'] = ((s as any).pain['ribs'] ?? 0) + (0);
      (s as any).pain['hips'] = ((s as any).pain['hips'] ?? 0) + (0);
      (s as any).pain['head'] = ((s as any).pain['head'] ?? 0) + (0);
      (s as any).pain['ears'] = ((s as any).pain['ears'] ?? 0) + (0);
      (s as any).pain['eyebrows'] = ((s as any).pain['eyebrows'] ?? 0) + (0);
      (s as any).pain['lips'] = ((s as any).pain['lips'] ?? 0) + (0);
      (s as any).pain['tummy'] = ((s as any).pain['tummy'] ?? 0) + (0);
      (s as any).pain['neck'] = ((s as any).pain['neck'] ?? 0) + (0);
      (s as any).pain['chest'] = ((s as any).pain['chest'] ?? 0) + (0);
      (s as any).pain['breasts'] = ((s as any).pain['breasts'] ?? 0) + (0);
      (s as any).pain['nipples'] = ((s as any).pain['nipples'] ?? 0) + (0);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).fat = ((s as any).fat ?? 0) - (5);
      qspCall(s, 'mood', 'lower', 'huge');
      // TODO-QSP: gs 'exp_gain', 'run', rand (0, 5)
      // TODO-QSP: gs 'exp_gain', 'stren', rand (0, 5)
      // TODO-QSP: gs 'exp_gain', 'agil', rand (0, 5)
      // TODO-QSP: gs 'exp_gain', 'vital', rand (0, 5)
      // TODO-QSP: gs 'exp_gain', 'react', rand (0, 5)
      qspCall(s, 'sweat', 'add', 10);
      (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (8);
      if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (24);
        qspCall(s, 'sweat', 'add', 12);
      } else {
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (18);
        qspCall(s, 'sweat', 'add', 10);
      }
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/ana/crash.jpg');
      scene.text('You take some moments to stretch, and show off to a puzzled Ana, then… without hesitation, run towards a garbage container to use it as a trampoline(<i>somehow</i> that work), you jump towards her, grabbing the stairs\' railing and propelling yo behind a surprised Ana(<i>somehow</i> that work <i>again</i>).');
      scene.text('"Sexy! That is Cool! But… two can play to that!"');
      scene.text('She then… give an inhuman-looking jump towards the opposite wall, latch at it like Spider-Man and continue with a series of acrobatics that put Ana two floors over you! There, she gives a bowing and begins to climb towards the rooftop.');
      scene.text('"That isn\'t going to help you, Ana!"');
      scene.text('You scream at that nut, and climb after her, reaching the rooftop, seeing Ana running away quickly, but… as you try to reach to her, you fumble a jump, and fall towards the street! Fortunately, some clotheslines and the low height save your life.');
      if (((s as any).spellKnown ?? 0)?.['heal'] === 1  &&  ((s as any).pcs_mana ?? 0) >= 400) {
        qspCall(s, 'willpower', 'misc', 'self', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Will you to cast Heal. [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Will you to cast Heal. [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['alexandriaEv', 'heal3'] },
          ]);
        }
      }
      scene.actions([
        { label: 'You fall unconscious', goto: ['alexandriaEv', 'hospital'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'mood', 'lower', 'small');
      (s as any).pain['asscheeks'] = ((s as any).pain['asscheeks'] ?? 0) + (0);
      qspCall(s, 'stat', '');
      scene.text('<center><b>Ana</b></center>');
      scene.img('images/characters/city/ana/ana4.jpg');
      scene.text('You take some moments to stretch, and show off to a puzzled Ana, then… without hesitation, run towards a garbage container to use it like a trampoline and jump towards her… At least, that WAS the plan.');
      scene.text('"Pfff… Sexy? Hmm… What are you doing? Te-He!"');
      scene.text('Ana look at your sprawling form on the ground, a hand over her mouth… Yes… Because free-running looks easy on the films, and you just made a fool of yourself as your improvised acrobatics, has ended with you falling on your ass, and Ana trying to contain a giggle');
      scene.text('"Ok Sexy! Let acts like… this has not happened!"');
      if (((s as any).spellKnown ?? 0)?.['shock'] === 1  &&  ((s as any).pcs_mana ?? 0) >= 20) {
        scene.actions([
          { label: 'The paint job on the fire escape has peeled away… and you know Electric Shock…', handler: (st: GameState) => {
    (st as any).dummy = Math.floor(Math.random() * 100) + 1;
  }, goto: ['alexandriaEv', 'anachase7'] },
        ]);
      }
      if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
        scene.actions([
          { label: 'Accept the bribe.', goto: ['alexandriaEv', 'anabribe1'] },
        ]);
      }
      scene.actions([
        { label: 'Climb after her!', goto: ['alexandriaEv', 'anachase5'] },
      ]);
    }
  }
  scene.build();
}

function enterHeal3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 9) + 2);
  (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (3);
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - (400);
  qspCall(s, 'exp_gain', 'splcstng', Math.floor(Math.random() * 5) + 1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana\'s number</b></center>');
  scene.img('images/characters/city/ana/selfie.jpg');
  scene.text('You hear people running towards you… screams… and somebody trying to do triage… but you don\'t accept it… Gritting your teeth, a word of power is forced out and a balming sensation travels your injured body.');
  scene.text('"Ring! Ring!"');
  scene.text('Your phone ring… is Ana…');
  // TODO-QSP: dynamic text: "What the fuck <<$pcs_nickname>>?! <i>Te veia cadaver</i>! Why do you try that?!...
  scene.text(`"What the fuck ${((s as any).pcs_nickname ?? 0)}?! <i>Te veia cadaver</i>! Why do you try that?!"`);
  scene.text('"Because… I am going to kick your fucking ass, Ana!"');
  // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, but… Well… Ok, you are a tough bitch, I owe you that… ...
  scene.text(`"Sorry ${((s as any).pcs_nickname ?? 0)}, but… Well… Ok, you are a tough bitch, I owe you that… I am in the nearer parking lot."`);
  scene.text('She then hangs up, leaving you to rise like a zombie, scaring the bystanders and following her instructions, you walk towards the multistory car park.');
  scene.actions([
    { label: 'Follow her', goto: ['alexandriaEv', 'anachasefinal'] },
  ]);
  scene.build();
}

function enterAnachase7(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dummy ?? 0) <= ((s as any).pcs_magik ?? 0)) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - (20);
    qspCall(s, 'exp_gain', 'splcstng', Math.floor(Math.random() * 5) + 1);
    (s as any).dummy = Math.floor(Math.random() * 100) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/ana/zap.jpg');
    scene.text('For what you understand, <i>magical</i> electricity, don\'t necessarily work like the <i>natural</i> one. At the same time, Electrical Shock your only spell of the Electrical School, isn\'t really that powerful to push enough charge through the stairs to affect Ana.');
    scene.text('"Sexy! What are you waiting for?!"');
    scene.text('That means, that even if you generate a charge powerful enough, it\'s doubtful that it reaches the infuriating nut… so what to do? Well… Probably Aleksei knows a better answer, but the only thing that you can think of is to overpower the spell… and pray.');
    scene.text('"Sexy?"');
    scene.text('Slowly, and with care, you follow the spell instructions, and soon blue lighting crosses through your fingers, then… you pour mana into it, making it unstable… and release it towards the stairs…');
    scene.text('"ARGGG!!!!!"');
    scene.text('Ana screams as the overpowered TASER-like spell reaches her and makes Ana fall… Convulsing… you should probably make sure, that she hasn\'t suffered a heart attack…');
    scene.text('"Ana?"');
    scene.text('You climb towards Ana\'s prone form, some of that black-crimson mist surrounding her trembling body, but before you can touch her… she gets up and jumps towards a nearby window, breaking it and entering in the building.');
    scene.actions([
      { label: 'Enter after her.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (3);
    (s as any).music_loop = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><b>WTF?</b></center>');
    scene.img('images/characters/city/ana/true.jpg');
    scene.text('Taking care to don\'t be cut with the broken crystal, you pass through the window, to what seems to be a storeroom.');
    scene.text('"Ana?"');
    scene.text('There isn\'t answer, except some kind of animal growls, coming from behind a rack, and as you approach to investigate, a hand reached out and grabs around the corner… behind… slowly rising from a prone position is Ana… Or would be Ana, if her torso wasn\'t now a giant gaping maw, full of teeth, and tentacle-like tongues.');
    scene.text('"BOOOOOOOOOO!"');
    scene.text('Ana, scream, covering you in copious amounts of spit, before turning, and doing a <i>Slimer</i> impersonation, running out of the room, towards the building stairs. You stand there a moment… confused… before running after the quickly reforming mutant, and evading panicked neighbors.');
    scene.text('"Come back Ana! I swear to god! You can\'t scape me!"');
    scene.text('Most of Ana\'s velocity seems to have faded, as most of her attention seems to be on reforming herself, she even is run over by a car, as she tries to cross a street full head-on towards a multistory car park, where finally you reach her.');
    scene.actions([
      { label: 'Endgame', goto: ['alexandriaEv', 'anachasefinal'] },
    ]);
  } },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pcs_mana = 0;
    qspCall(s, 'exp_gain', 'splcstng', Math.floor(Math.random() * 5) + 0);
    (s as any).pain['fingers'] = ((s as any).pain['fingers'] ?? 0) + (0);
    (s as any).pain['hands'] = ((s as any).pain['hands'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/ana/zap.jpg');
    scene.text('For what you understand, <i>magical</i> electricity, don\'t necessarily work like the <i>natural</i> one. At the same time, Electrical Shock your only spell of the Electrical School, isn\'t really that powerful to push enough charge through the stairs to affect Ana.');
    scene.text('"Sexy! What are you waiting for?!"');
    scene.text('That means, that even if you generate a charge powerful enough, it\'s doubtful that it reaches the infuriating nut… so what to do? Well… Probably Aleksei knows a better answer, but the only thing that you can think of is to overpower the spell… and pray.');
    scene.text('"Sexy?"');
    scene.text('Slowly, and with care, you follow the spell instructions, and soon blue lighting crosses through your fingers, then… you pour mana into it, making it unstable… and release it towards the stair…');
    scene.text('"ARGGG!!!!!"');
    scene.text('You scream as the overpowered TASER-like spell reaches the stairs… bounces back… and discharges its energy on you… there is a kaleidoscopic halo and, you find your mana quicklly evaporating.');
    scene.text('"Ohhhh… Pretty! Sexy, I give you extra points for a beautiful display, but… what exactly was your plan?"');
    scene.text('Gritting your teeth to suppress a scream, you look at your smoking hands. That wasn\'t a good idea, better think of an alternative, to catch Ana.');
    if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
      scene.actions([
        { label: 'Accept the bribe.', goto: ['alexandriaEv', 'anabribe1'] },
      ]);
    }
    scene.actions([
      { label: 'Climb after her!', goto: ['alexandriaEv', 'anachase5'] },
      { label: 'Do some PARKOUR! and block her way!', handler: (st: GameState) => {
    (st as any).dummy = Math.floor(Math.random() * 100) + 1;
  }, goto: ['alexandriaEv', 'anachase6'] },
    ]);
  }
  scene.build();
}

function enterAnachasefinal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).music_loop = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana</b></center>');
  scene.img('images/characters/city/ana/boss.jpg');
  scene.text('Ana stands in the silent parking, with her arms stretched and that black-crimson mist forming a vaguely blade-like nimbus around her left arm… All in all, his pose would not be out of place, in an anime.');
  scene.text('"Ok, Sexy, this is enough! I have given you every excuse to give up! I don\'t know what class of power have Alexandria - <i>cough</i> - The Great Bitch - <i>cough</i> - over you, but this is enough!"');
  scene.text('"Then give me the key Ana!"');
  scene.text('"I can\'t Sexy! I am like Jack from Bioshock, compelled to go forward against forever-increasing odds! Think in poor little mutant me, Sexy! I am not a kickass sorceress like you!"');
  scene.text('Ana has the gall to pout and cross her hands in a pleading gesture. Is evident, at least for you, that this girl isn\'t going to take you seriously, and during a long moment, the two of you stand there in an impasse, before Ana decides to break the silence.');
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    // TODO-QSP: dynamic text: "Ok Sexy… if you want more money, I can raise it to <<$func('money', 'string_pro...
    scene.text(`"Ok Sexy… if you want more money, I can raise it to ${qspFunc(s, 'money', 'string_profit', 140000)}… What do you say?"`);
  } else {
    scene.text('"Ok Sexy… Is evident, that we can\'t reach an agreement… so this is the deal, or you take that key away from my bleeding hands or… get out of here!"');
  }
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    scene.actions([
      { label: 'Accept the bribe.', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 140000);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).AlexandriaQW = 16;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Ana</b></center>');
    scene.img('images/characters/city/ana/ana3.jpg');
    scene.text('"Ok, Ana"');
    scene.text('Ana blinks surprised at your answer, and during a moment stands there open-mouthed, apparently, trying to process your answer.');
    scene.text('"Seriously Sexy? I mean… this isn\'t some trick to sucker-punch me and try to take away the key?"');
    scene.text('You are going to answer, but Ana has begun to carefully walk backward, and look for something else in her pockets, all the time warily eyeing you. Finally, her retreat put her back against a just arriving black SUV, and finding what she was looking for, she trow it towards you.');
    scene.text('"So… Sexy… Why are even?"');
    scene.text('You grab the item, a little pouch with money inside. That is the moment that chooses Ana to jump inside the SUV and drive away.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).AlexandriaMissionQW ?? 0) >= 10) {
    qspCall(s, 'willpower', 'misc', 'force', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"You know that I am not going to stop." [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"You know that I am not going to stop." [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
  }, goto: ['alexandriaEv', 'anascore'] },
      ]);
    }
  }
  if (((s as any).pcs_compskl ?? 0) >= 50) {
    qspCall(s, 'willpower', 'misc', 'force', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"Or you can kindly give me the key." [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Or you can kindly give me the key." [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
  }, goto: ['alexandriaEv', 'anaryan'] },
      ]);
    }
  }
  scene.actions([
    { label: 'You aren\'t going to fight this nut! Just leave!', handler: (st: GameState) => {
    (st as any).AlexandriaMissionQW = ((st as any).AlexandriaMissionQW ?? 0) - (1);
    (st as any).AlexandriaQW = 17;
  }, goto: ['city_center', ''] },
    { label: 'Boss fight!', handler: (st: GameState) => {
    scene.img('images/characters/city/ana/boss.jpg');
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'bossana');
    // TODO-QSP: xgt 'fight', 'start'
  } },
  ]);
  scene.build();
}

function enterHeal4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (3);
  (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - (400);
  qspCall(s, 'exp_gain', 'splcstng', Math.floor(Math.random() * 5) + 1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana</b></center>');
  scene.img('images/characters/city/ana/ana4.jpg');
  scene.text('Gritting your teeth, a word of power is forced out and a balming sensation travels your injured body, and slowly, you rise from your prone situation.');
  scene.text('"I… am ready for round two!"');
  scene.text('It takes you an eternal moment to rise, and look at the now silent Ana, that is observing you with? Respect?');
  // TODO-QSP: dynamic text: "That is impressive <<$pcs_nickname>>."
  scene.text(`"That is impressive ${((s as any).pcs_nickname ?? 0)}."`);
  scene.text('Then she takes a key and launches it to you… It\'s a <i>key</i> but now that you can examine it, not the sort used on security boxes. You are going to retort to the annoying fuck before she rise her hands in a conciliating gesture.');
  scene.text('"Yeah I know! It just… Look sexy, I don\'t have the key, but if you come with me, I will tell you where is the sword! Ehm… Girl Scout Word!"');
  scene.text('Ana pout, giving puppy eyes, as she raises a hand in the three-finger salute.');
  scene.actions([
    { label: 'Follow her', goto: ['alexandriaEv', 'anamotel'] },
  ]);
  scene.build();
}

function enterAnascore(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (2);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana</b></center>');
  scene.img('images/characters/city/ana/ana4.jpg');
  scene.text('You try to put as much seriousness as you can to your words, if this nut has the gal to <i>think</i> that she can stop you, she is going to be disappointed.');
  scene.text('"Oh come on Sexy! That is so cute! Really?! I am…"');
  scene.text('She answers you with this mockingly smile on her lips, before abruptly stopping… surprised? She turns her head slightly like she is listening to something, before turning towards you, a more serious expression on her face. Then, she looks for something in a pocket and throws whatever it is at you.');
  scene.text('It\'s a <i>key</i> but now that you can examine it, not the sort used on security boxes. You are going to retort to the annoying fuck before she rise her hands in a conciliating gesture.');
  scene.text('"Yeah I know! It just… Look sexy, I don\'t have the key, but if you come with me, I will tell you where is the sword! Ehm… Girl Scout Word!"');
  scene.text('Ana pouts, giving you her best puppy eyes, as she raises a hand in a three-finger salute.');
  scene.actions([
    { label: 'Go with the loonie', goto: ['alexandriaEv', 'anamotel'] },
  ]);
  scene.build();
}

function enterAnaryan(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana</b></center>');
  scene.img('images/characters/city/ana/ana4.jpg');
  scene.text('Ana made an interesting <i>confused dog</i> impersonation, when she tilted her head, at the same time one of her hands - seemed on its own <i>mind</i> and compelled for your use of Jack\'s codewords - search the pockets… The display truly unnerving.');
  scene.text('"Hey! What are you doing!"');
  scene.text('Her screams, fill the parking, as Ana finally realizes her rebel hand movements, but is too late to stop <i>it</i>, before the key is trow towards you.');
  scene.text('"Thanks… Ana?!"');
  scene.text('You look at the key, but now that you can examine it, is not the sort used on security boxes. You are going to retort to the annoying fuck, but she seems lost in a bout of crazy shrieks of laughter.');
  scene.text('"BWAHAHAHA! Oh my! <i>Tu cara</i>! It\'s priceless! You were expecting that something like that worked?! Come on Sexy!"');
  scene.text('Ok, you are going to scrub the ground with her face! You reach for her but stop as she raises her hands in a defeated gesture, her head slightly turned like she was listening to something.');
  scene.text('"Sexy! I surrender! You win! Yeah! <i>I don\'t care! She wins!</i>! Look sexy, I don\'t have the key, but if you come with me, I will tell you where is the sword! Ehm… Girl Scout Word!"');
  scene.text('Ana pout, giving puppy eyes, as she raises a hand in the three-finger salute.');
  scene.actions([
    { label: 'Go with the loonie', goto: ['alexandriaEv', 'anamotel'] },
  ]);
  scene.build();
}

function enterAnamotel(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ana</b></center>');
  scene.img('images/characters/city/ana/ana5.jpg');
  scene.text('Ana take you, to a motel\'s room, where she jumps in the bed and kneels.');
  scene.text('"Well Ana, where is the sword?"');
  scene.text('Ana doesn\'t seem to want to look at your face, and for a moment kneels there in silence. Finally, when she finally talks, it is without her normally flamboyant style.');
  scene.text('"At this time my boss will have sent it to Alexandria" You blink, and some really nasty words surge towards your mouth, but Ana continues, shortcircuiting your outburst "Sorry! It wasn\'t my idea! Really! This is the sort of game our bosses use to limit the <i>collateral damage</i>! It\'s a message to Alexandria! And… a test to take your mettle!"');
  scene.text('You facepalm, suddenly very tired. "So… Now what Ana?!"');
  scene.text('Ana shrugged "You won, so I suppose that is a point for Alexandria. Additionally… Ehm… I don\'t know how to say this… My boss explained to me that i… well… you know… Hm… After all this running around, you are sweaty, and maybe you want a shower… and I can… scrub you? If you want!"');
  scene.text('A moment? The room? The shower? Is she insinuating herself to you? Oh hell no! That weirdo is… Suddenly, there is a change in Ana\'s posture and some of the unearthly vibes she has been transmitting disappear… She now looks more… Normal? Insecure? Timid? Cute? Was she affecting you with some kind of magic? What can you do now?');
  scene.actions([
    { label: 'Don\'t put on crazy! Run away!', handler: (st: GameState) => {
    (st as any).AlexandriaQW = 18;
  }, goto: ['city_center', ''] },
    { label: 'Maybe this is a misunderstanding… or not, but you need a shower.', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'kiss', 3, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/city/ana/sex/AS1.jpg');
    scene.text('Ana gets up and walks towards the bathroom. Her <i>clothes</i> reabsorbed in a twirl of black-crimson mist, making her look… <i>fuller</i> and very naked, and during a moment, you doubt what to do, before walking towards the cute blonde, taking off your clothes along the way.');
    scene.text('She is already in the shower, when you, half-naked, reach her, and before she has time to start the water, you step into the shower, a fresh and minty fragrance fills the small space. Ana just looks at you with her trademarked big puppy eyes as you bend to kiss the shorter girl\'s lips.');
    scene.text('She freezes as your tongue tries to get past her mint-flavored lips, and you realize your mistake. Ana looks at you with frightened, doe-like eyes. Then she snorts and rests her forehead on your chest, laughing uncontrollably.');
    // TODO-QSP: dynamic text: "<i>Lo siento <<$pcs_nickname>>! Te-He! Virginal e Inocente?! Te-He! Por Dios no...
    scene.text(`"<i>Lo siento ${((s as any).pcs_nickname ?? 0)}! Te-He! Virginal e Inocente?! Te-He! Por Dios no</i>!" Ana - <i>slowly</i> - calms and looks at you with this big-goofy smile "${((s as any).pcs_nickname ?? 0)} Sigh… but seriously, yeah… I have never been with a woman and feel out of my comfort zone so… well… sorry, but I am not as experienced as you."`);
    // TODO-QSP: dynamic text: "Ana, What do you mean by <i>experienced</i>?!" At your question, she just rolls...
    scene.text(`"Ana, What do you mean by <i>experienced</i>?!" At your question, she just rolls her eyes. "Oh! Come on ${((s as any).pcs_nickname ?? 0)}! Alexandria is a lot of things, but <i>chaste</i> isn't one of them! It would be surprising, if she hasn't tied you to her bed, and had her way with your ass!"`);
    scene.text('You mussed over Ana\'s word, remembering your <i>teaching lessons</i> with Aleksei, and strange words find their way towards your mouth. "So… Ana… Do you want to learn what <i>Aleksei</i> taught me? What if I ask you to kneel?"');
    scene.actions([
      { label: 'She does it.', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/city/ana/sex/AS2.jpg');
    // TODO-QSP: dynamic text: Ana doesn't hesitate, and with eyes full of determination, she kneels before you...
    scene.text(`Ana doesn't hesitate, and with eyes full of determination, she kneels before you in submission, then… as an afterthought, Ana turns the water back on, and grabs a bar of soap and a sponge. "Well… I promised to scrub you ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('You try to reconcile Ana\'s sudden meekness with her recent craziness, as your brain searches for a trick. New words fill the shower: "Don\'t use it, Ana."');
    scene.text('Again, she doesn\'t falters, and without taking her eyes from your face, she grabs your tighs and begins to kiss your leg, adding little laps to the sweaty skin. You meanwhile take away what is left of your cumbersome clothes until nothing is separating your skin from Ana\'s mouth.');
    scene.text('"Are you so desperate to be my sub, Ana? Hm? Then, show me <i>Mutant Girl</i>."');
    scene.text('The new christened Mutant Girl, look at you intensely and again without vacillation, put her forehead in a silent supplication gesture, against your <i>mons Venus</i>, waiting for whatever order you quickly aroused mind can think, and during a long moment, you two stay like this with the water falling over you.');
    scene.text('"Get up Mutant Girl!"');
    scene.text('Your dominant hand, close over Ana\'s throat… <i>Hard</i>… and make her stand. She doesn\'t gasp or try to stop you, as you use your superior height to make her tiptoed as she is put against the shower\'s wall.');
    scene.actions([
      { label: 'Kiss her… and more.', handler: (st: GameState) => {
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(s, 'arousal', 'kiss', 1, 'dom');
    qspCall(s, 'arousal', 'cuni_give', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/city/ana/sex/AS3.jpg');
    scene.text('You lick Ana\'s minty flavor from your lips, as with a hand, you slowly raise one of her legs. Is a tribute to her strength and flexibility that even reaching the height of your head, Ana doesn\'t lose her balance.');
    scene.text('"Ok Mutant Girl, I don\'t want to see you lower that leg… understood?"');
    scene.text('Ana nods, and, with the raised leg never wavering a millimeter, fix herself against the shower walls. Meanwhile, you begin your journey down, kissing her body little by little, giving extra attention to her neck, bust, stomach, and finally her pubic mound.');
    scene.text('"Don\'t get nervous, we have reached the best part Mutant Girl."');
    scene.text('Even with the water falling over you two, your tongue probes her nethers, tasting Ana\'s excitement and another thing… mint! Satisfied with this knowledge, you raise a hand to finger the salacious mutant, as you redirect your tongue to feast on her pink bean.');
    scene.text('"<i>Me corro! Me corro!</i>"');
    scene.text('In no time you have the horny Ana shaking in orgasmic bliss, and during a moment her form <i>ripple</i> showing you… brunette hair? But is just a moment before she recovers her self-control, and you observe Ana\'s blissed-out expression.');
    // TODO-QSP: dynamic text: "Woah! That was great <<$pcs_nickname>>! Ehm… Can we sit on the floor? Is your t...
    scene.text(`"Woah! That was great ${((s as any).pcs_nickname ?? 0)}! Ehm… Can we sit on the floor? Is your turn, and I want to try something!"`);
    scene.actions([
      { label: 'You two sit.', handler: (st: GameState) => {
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(s, 'arousal', 'trib', 10);
    qspCall(s, 'arousal', 'end');
    if (((s as any).succubusflag ?? 0) === 1) {
      (s as any).scfeed = ((s as any).succublvl ?? 0) + ((s as any).rand ?? 0)(1, 4);
      (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (50 * ((s as any).scfeed ?? 0));
      (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
      (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
      (s as any).sucabslez = 1;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/ana/sex/AS4.jpg');
    scene.text('"Hey Mutant Girl! I am supposed to be the one giving commands!"');
    scene.text('Ana give you innocent eyes, before literally <i>slither</i> down the wall and over you, in a tangled mess of arms and legs, that somehow end without breaking your neck against the wall, and with the two of you sitting, water falling over as your vaginas touch in a scissoring position.');
    scene.text('"I think you will open to suggestions <i>Mistress</i>"');
    scene.text('Ana then, pouts and flutters her eyes in a parody of innocence, before giggling and begin to rock against you… frotting her lower lips against yours, trying to stimulate the flesh of your nether regions… and failing… growing frustrated as she, even with her extraordinary flexibility, seems incapable to guide both of you towards your release.');
    scene.text('"Stop Mutant Girl… let me help you…"');
    scene.text('You somehow extend a hand without losing balance on the wet floor, and caress her face, before grabbing one of her hands and putting it between you, where your skin meets, using it as a fixed point, where you two begin to frot, slowly taking you towards your mutual satisfaction.');
    scene.text('"<i>Si! Ya llego!</i>." Her scream, proclaims her second orgasm of your bout of sex, and during a moment it seems that this is the end… until she bends, grabs your head, and kisses you… an impossibly long tongue going beyond your lips, as the hand between you two, goes crazy, forcing your own release soon after.');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).AlexandriaQW = 19;
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_breath = 1;
    (s as any).pcs_hairbsh = 1;
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    (s as any).stat['female_sexual_times'] = ((s as any).stat['female_sexual_times'] ?? 0) + (1);
    (s as any).cumspclnt = 20;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'sweat', 'remove_deo');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Ana</b></center>');
    scene.img('images/characters/city/ana/ana6.jpg');
    scene.text('After the weird experience of cumming with a tentacle-like-minted-tongue filling your mouth, Ana fulfills her promise to scrub you, and you end your shower. Then, you two return to the bedroom, where she, thanks to her powers, <i>regrow</i> her <i>clothes</i> and fixes her appearance.');
    scene.text('However, on your part, you must pass for the more <i>slow</i> and <i>traditional</i> methods to put back your clothes and tidy your looks. All the time, with a strangely silent Ana that lie in the bed.');
    scene.text('"What happened, Ana? Are you falling for me?"');
    if (((s as any).npc_rel ?? 0)?.['A241'] === 0) {
      scene.text('Ana rolls her eyes "What? No! Come on Sexy! I am straight! I recognize, that It was fun, but… sorry… our bosses are going to be at each other throats in no time, and well… even without taking that into consideration, I prefer my lovers tall, dark-skinned and very male."');
      scene.text('"So… what happened back there?" She shrugs "just some little fun? Sexy, at the end of the day, we are rivals, and… is probably better that we leave any emotional attachment back there… in a safe place."');
      scene.text('Saying this she doesn\'t seem in the mood to talk more, and you take your things and leave the room.');
    } else {
      // TODO-QSP: dynamic text: Ana snort "Oh my god! No! Look, I am sorry <<$pcs_nickname>>, but you need more ...
      scene.text(`Ana snort "Oh my god! No! Look, I am sorry ${((s as any).pcs_nickname ?? 0)}, but you need more than fulfill my lesbian fantasy, for this straight girl to rethink her sexual orientation! I prefer my lovers tall, dark-skinned, and very male, but… I can add certain tall Russian woman!"`);
      scene.text('"So… what happened back there?"');
      scene.text('She grimaces "just some little fun? I like you… but not in the <i>really</i> like you… that doesn\'t mean, that we can\'t have more fun together, and remember! I want a rematch!"');
      scene.text('Ana wink and you understand that there isn\'t more to do, so yo take your things and leave the room.');
    }
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
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
    case 'interview1':
      enterInterview1(s, scene);
      break;
    case 'interview2':
      enterInterview2(s, scene);
      break;
    case 'interview3':
      enterInterview3(s, scene);
      break;
    case 'interview4':
      enterInterview4(s, scene);
      break;
    case 'filipp':
      enterFilipp(s, scene);
      break;
    case 'anacall':
      enterAnacall(s, scene);
      break;
    case 'kneel':
      enterKneel(s, scene);
      break;
    case 'contribution':
      enterContribution(s, scene);
      break;
    case 'succubribe':
      enterSuccubribe(s, scene);
      break;
    case 'persufilipp':
      enterPersufilipp(s, scene);
      break;
    case 'anachase1':
      enterAnachase1(s, scene);
      break;
    case 'anachase2':
      enterAnachase2(s, scene);
      break;
    case 'anachase3':
      enterAnachase3(s, scene);
      break;
    case 'anachase4':
      enterAnachase4(s, scene);
      break;
    case 'anacrash1':
      enterAnacrash1(s, scene);
      break;
    case 'hospital':
      enterHospital(s, scene);
      break;
    case 'heal1':
      enterHeal1(s, scene);
      break;
    case 'anacarchase':
      enterAnacarchase(s, scene);
      break;
    case 'anafight1':
      enterAnafight1(s, scene);
      break;
    case 'jail':
      enterJail(s, scene);
      break;
    case 'anabribe1':
      enterAnabribe1(s, scene);
      break;
    case 'anachase5':
      enterAnachase5(s, scene);
      break;
    case 'heal2':
      enterHeal2(s, scene);
      break;
    case 'anachase6':
      enterAnachase6(s, scene);
      break;
    case 'heal3':
      enterHeal3(s, scene);
      break;
    case 'anachase7':
      enterAnachase7(s, scene);
      break;
    case 'anachasefinal':
      enterAnachasefinal(s, scene);
      break;
    case 'heal4':
      enterHeal4(s, scene);
      break;
    case 'anascore':
      enterAnascore(s, scene);
      break;
    case 'anaryan':
      enterAnaryan(s, scene);
      break;
    case 'anamotel':
      enterAnamotel(s, scene);
      break;
    default:
      enterInterview1(s, scene);
      break;
  }
}

export const alexandriaEv: LocationDef = {
  name: 'alexandriaEv',
  title: 'Alexandria VS Reinhold?!',
  region: 'other',
  locationType: 'public_indoors',
  description: ['Asking yourself for the umpteenth time if this is a good idea, you search the residentials for the mighty wizard\'s lair, and what you find is… pretty normal? Utterly different from Tatiana\'s carefully hidden lab. A big home in the more wealthy side of the neighborhood, but… not exactly "Rich", big, but not excessively, and with a modest fence to protect it\'s privacy. In general, you will say, that Alexandria\'s home is pretty forgettable.'],
  enter: enter,
};
