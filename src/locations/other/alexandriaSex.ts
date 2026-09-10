import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterNice1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A241');
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/N1.jpg');
  scene.text('You find yourself lying half-naked on Aleksei\'s fluffy bed, only thinking about how much <i>HE</i> seems like a <i>SHE</i>. Your mind knows, on an intellectual level, that Aleksei is a man trapped in a woman\'s body… a curvaceous female body… with elegantly applied make-up and perfume traces… and a female lingerie set that screams to you a name… Alexandria.');
  // TODO-QSP: dynamic text: "<<$pcs_lastname>>, I know that my appearance can be confusing. I consider mysel...
  scene.text(`"${((s as any).pcs_lastname ?? 0)}, I know that my appearance can be confusing. I consider myself a man and I try to make people around me understand that fact, but… as you can see, my curse not only changed my sex, but continues to interfere with my life. Always pushing for a more… let's say <i>stereotypical</i> female appearance that I detest, but it has it's uses."`);
  scene.text('You only moan in reply, mostly because Aleksei has moved a hand between your thighs and started to caress your pussy, turning on a heat that quickly rises towards your stomach, where a tensed knot pushes for release… a release that is negated as he quickly withdraws the hand, making you squirm in frustration.');
  scene.text('"Hey! What are you doing?! I was… I mean… Fuck!"');
  // TODO-QSP: dynamic text: "I was thinking that I prefer you naked, <<$pcs_lastname>>. So let's take off th...
  scene.text(`"I was thinking that I prefer you naked, ${((s as any).pcs_lastname ?? 0)}. So let's take off those clothes."`);
  scene.text('Grumbling, you follow his order and finally manage to get the last of your clothes off, something that seems to please him.');
  scene.actions([
    { label: '"Your turn Aleksei"', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'clit_finger', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N2.jpg');
    scene.text('He only answers with a raised eyebrow and an amused half-smile before taking your dominant hand towards his lips, lightly kissing your fingers.');
    // TODO-QSP: dynamic text: "Bossing me around, <<$pcs_lastname>>? Not a good idea, and for that you're goin...
    scene.text(`"Bossing me around, ${((s as any).pcs_lastname ?? 0)}? Not a good idea, and for that you're going to have to wait for me to be ready."`);
    scene.text('He pushes your hand towards your pussy and waits, sitting motionless until you begin to caress your love button for his entertainment. Your moans quickly return as the teasing pushes you towards an orgasm, but he again puts his hand over yours and stops you.');
    // TODO-QSP: dynamic text: "No <<$pcs_lastname>>. Slow… with care."
    scene.text(`"No ${((s as any).pcs_lastname ?? 0)}. Slow… with care."`);
    scene.text('You grit your teeth and let Aleksei mark the rhythm, making you burn as he slowly takes off his lingerie until he sits naked between your legs, looking pleasantly between them. Slowly caressing your knees, he traps your hand in between your legs, forcefully stopping your masturbation.');
    scene.actions([
      { label: '"Stop teasing me!"', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N3.jpg');
    scene.text('When you try to play with your trapped cunt, he slaps your hand and forcefully takes it away.');
    // TODO-QSP: dynamic text: "Ordering me again <<$pcs_lastname>>? What am I supposed to do with you? I think...
    scene.text(`"Ordering me again ${((s as any).pcs_lastname ?? 0)}? What am I supposed to do with you? I think I must meditate on it, but until then, don't you think that your bosom needs some attention?"`);
    scene.text('You bite your lips to stop a retort and obediently raise your hands towards your rock-hard nipples and begin to play with them. Aleksei just looks down at your ever-growing arousal with an amused smirk while humming a lullaby.');
    scene.text('"Hm?! What the… Yes!"');
    scene.text('It takes you by surprise when Aleksei suddenly and forcefully opens your legs and starts lapping away at your pussy like a rabid dog, the sensation quickly cutting through the knot in your stomach and releasing an orgasm that lashes against your magical core, triggering an even more powerful orgasm.');
    // TODO-QSP: dynamic text: "Isn't it better when you listen to me <<$pcs_lastname>>?"
    scene.text(`"Isn't it better when you listen to me ${((s as any).pcs_lastname ?? 0)}?"`);
    scene.actions([
      { label: '"Yeah… a lot better."', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N4.jpg');
    scene.text('Now a lot more relaxed, you lie beside Aleksei, who tenderly caresses your hair and looks into your eyes with something like fondness before interlocking one of his hands with yours and sending some mana through your excited nervous system.');
    // TODO-QSP: dynamic text: "Okay <<$pcs_lastname>>, let's work on our magic."
    scene.text(`"Okay ${((s as any).pcs_lastname ?? 0)}, let's work on our magic."`);
    scene.text('Words of power are whispered and you, the dutiful student, repeat them, forcing the liberated mana to bend under your will, little sparks forming between your united hands. If some mundane could see you, the scene would unfold as two lovers, cuddling and whispering cute nonsenses. It won\'t look anything like the truth.');
    // TODO-QSP: dynamic text: "That's the end of this lesson <<$pcs_lastname>>."
    scene.text(`"That's the end of this lesson ${((s as any).pcs_lastname ?? 0)}."`);
    scene.text('With a disappointed sigh, you spirit away the magical sparks, but your hands remain interlocked for a minute as you look into Aleksei\'s eyes and a silent communication is established. His removes his hand from yours and caresses your cheek, followed by your neck and finally resting on your shoulder.');
    scene.actions([
      { label: 'It\'s his turn', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/city/alexandria/sex/N5.jpg');
    scene.text('As a dutiful apprentice, you understand your master\'s commands without words, and following them, you begin to kiss and fondle Aleksei\'s gorgeous body until you end up in a tangled mess with your face over his beautiful love box.');
    scene.text('"Remember my apprentice… slow… We have all the time to enjoy this."');
    scene.text('"I will try <i>master</i>…"');
    scene.text('You expect some kind of retort, but Aleksei just gives his archetypical half-smile and caresses your hair, putting only the slightest strength to mark the rhythm as he relaxes and lets you pleasure him. With moans of pleasure signaling his pleasured arousal, you slowly raise his hips until you feel his climax in a beautiful display of pleasure.');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).AlexandriaQW = 8;
    (s as any).pcs_hairbsh = 1;
    (s as any).pcs_makeup = 1;
    (s as any).cumspclnt = 4;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'spellList', 'addAvailableSpells', 'electSpells');
    (s as any).pcs_sweat = 0;
    (s as any).pcs_breath = 1;
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    if (((s as any).succubusflag ?? 0) === 1) {
      (s as any).scfeed = ((s as any).succublvl ?? 0) + ((s as any).rand ?? 0)(1, 4);
      (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (100 * ((s as any).scfeed ?? 0));
      (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
      (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
      (s as any).sucabslez = 1;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N6.jpg');
    scene.text('After cuddling for a few minutes, Aleksei gets up and sits on a nearby chair, where he proceeds to light a cigarette and look at the void. His posture is slightly slouched, yet strangely relaxed when compared with Aleksei\'s always ram-rod demeanor');
    // TODO-QSP: dynamic text: "That was strange. I wasn't expecting Rikudo's magic to force us into this situa...
    scene.text(`"That was strange. I wasn't expecting Rikudo's magic to force us into this situation ${((s as any).pcs_lastname ?? 0)}. However, I must say that is fascinating! I have not had this sort of insight into Rikudo's work in centuries. I assume, that it has been as… enlightening to you as it was to me?"`);
    scene.text('You answer by stretching sexily over the covers and extending your hands, a slight electric flash illuminating your smiling face and making Aleksei cover a smile with a drag of his cigarette before he walks up and kneels by your side.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, this is an opportunity I can't refuse. With your approval, w...
    scene.text(`"${((s as any).pcs_lastname ?? 0)}, this is an opportunity I can't refuse. With your approval, we will continue with more of these <i>teaching sessions</i>, but I want to emphasize that this has been enjoyable, and I am sure that neither of us regrets what just happened. However, this can't be anything more than an exchange for my knowledge`);
    scene.text('He caresses your face before getting to his feet and, with a disgusted grimace, collects his discarded lingerie and exits the room, leaving you alone with your thoughts. As Aleksei said, you will need more <i>teaching sessions</i>, but for the moment, you must get dressed.');
    scene.text('"What the…?"');
    scene.text('As you rise from the bed, you realize the fresh feeling over your skin, and your perfectly arranged hair. Did Aleksei\'s curse <i>clean</i> you in an act of utter bullshit?');
    scene.actions([
      { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
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

function enterGrumpy1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A241');
  qspCall(s, 'arousal', 'massage', 5, 'sub', 'lesbian');
  qspCall(s, 'arousal', 'BDSM', 5, 'sub', 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/G1.jpg');
  scene.text('You find yourself tied in bondage gear with a ball gag in your mouth kneeling in the center of a bare-bones room, looking directly at assorted tools that you can barely recognize. Some are piercing equipment that are used for body modification, others seem surgical and the rest look like they were taken from a toolbox.');
  // TODO-QSP: dynamic text: "Afraid <<$pcs_lastname>>?" Aleksei asks with a whisper in your ear, his hands m...
  scene.text(`"Afraid ${((s as any).pcs_lastname ?? 0)}?" Aleksei asks with a whisper in your ear, his hands massaging your shoulders just outside of your field of view.`);
  // TODO-QSP: dynamic text: "Don't be <<$pcs_lastname>>. The truth is that you haven't won that privilege, m...
  scene.text(`"Don't be ${((s as any).pcs_lastname ?? 0)}. The truth is that you haven't won that privilege, maybe later, but not at this moment."`);
  scene.text('He turns you violently, scraping your immobilized knees over the hardwood and grabs your chin, looking intently into your eyes, his gaze hard as his hands begin to travel arousingly over your exposed body.');
  // TODO-QSP: dynamic text: "You must understand the conundrum that I am now in <<$pcs_lastname>>. We made a...
  scene.text(`"You must understand the conundrum that I am now in ${((s as any).pcs_lastname ?? 0)}. We made a mutually beneficial deal, but it's evident that you lack the strength of character to follow the Path of Knowledge, so I am going to include some <i>discipline</i> lessons."`);
  scene.text('He then proceeds to intensify his massage, caressing your body, kissing your neck and rubbing between your legs, increasing your arousal and masking the pain in your knees.');
  scene.actions([
    { label: 'He slaps you', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'massage', 5, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'BDSM', 5, 'sub', 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G2.jpg');
    scene.text('You are quivering under Aleksei ministrations when the strike comes. He smacks your exposed breasts several times, turning your gagged moans into silent screams. When you instinctively try to get away from him, one of his hands darts towards your hair, locking you painfully in position.');
    // TODO-QSP: dynamic text: "No, no, no <<$pcs_lastname>>! This is a lesson you MUST learn."
    scene.text(`"No, no, no ${((s as any).pcs_lastname ?? 0)}! This is a lesson you MUST learn."`);
    scene.text('Aleksei looks at you, fluttering his eyes before embracing you, one of his hands traveling down towards your buttocks, a finger sneaking between your crack to caress your asshole before he spanks your ass.');
    // TODO-QSP: dynamic text: "Don't move <<$pcs_lastname>>, you are doing it right"
    scene.text(`"Don't move ${((s as any).pcs_lastname ?? 0)}, you are doing it right"`);
    scene.text('Aleksei continues kissing and caressing your body, slapping, pinching and twisting your flesh with commanding but encouraging words, arousing your core at the same time your skin <i>burns</i>.');
    scene.actions([
      { label: 'The torture continues', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'BDSM', 5, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'sub', 'lesbian', 'no_orgasm_msg');
    scene.img('images/characters/city/alexandria/sex/G3.jpg');
    scene.text('Finally, after who knows how long, Aleksei breaks away from you and stands up, looking down at you with a critical eye as he drags slowly on a cigarette, the silence eternalizing as you kneel before him.');
    scene.text('"You have done well, my new pet."');
    scene.text('It takes you a few minutes to understand the compliment because your addled head, the ropes that dig into your itching body, your reddening skin and some carefully placed clothing pins twisting your nipples all distract you.');
    scene.text('"I suppose it\'s time to make your mana flow…"');
    scene.text('You groan and drool down the ball-gag as Aleksei squats by your side, a hand helping you stay upright as the other starts trailing down your body, caressing the painful stretches of red skin until he reaches your pussy, where his fingers begin to play.');
    scene.text('This isn\'t an act of love or sex, it is mechanical. Aleksei looks impassively at your eyes and silently forces you to climax. You trash around Aleksei\'s fingers, drool into the gag until you are forcefully made to cum, liberating the magic in your core and eliciting a spasm of pleasure.');
    scene.actions([
      { label: 'Time to learn', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G4.jpg');
    scene.text('"Fuck!"');
    scene.text('That is the only word that you can express between coughs as Aleksei takes off the ball gag and reclines you against a low table so you can recover your breath. He just stands and observes you between drags of his cigarette.');
    // TODO-QSP: dynamic text: "Well <<$pcs_lastname>>, time to teach you some magic."
    scene.text(`"Well ${((s as any).pcs_lastname ?? 0)}, time to teach you some magic."`);
    scene.text('You look at him scornfully. You are sore, tired and breathless with bound hands and wobbly legs, and he wants you to continue? A look at Aleksei\'s determined eyes tells you one thing. "No" isn\'t the answer he is expecting.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>> You are a wizard, a literal <i>willworker</i> that can make t...
    scene.text(`"${((s as any).pcs_lastname ?? 0)} You are a wizard, a literal <i>willworker</i> that can make the world cry like a little girl. So why should pain, fatigue or mental duress be allowed to have power over you?"`);
    scene.text('He then grabs your chin, sending some mana through your nervous system as he begins to whisper words of power, again and again, until you grit your teeth and push mana to your bound hands, repeats his words and a sudden flash of electricity illuminates the room.');
    // TODO-QSP: dynamic text: "It is evident that I'm a great teacher <<$pcs_lastname>>, so how will you thank...
    scene.text(`"It is evident that I'm a great teacher ${((s as any).pcs_lastname ?? 0)}, so how will you thank me?"`);
    scene.actions([
      { label: 'It\'s his turn', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'BDSM', 5, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', 10, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/city/alexandria/sex/G5.jpg');
    scene.text('Aleksei sits on the low table and grabs your hair, positioning you between his thighs, with a leg over one of your shoulders so you end up fixed in place. His hot, wet pussy is pushed firmly against your mouth.');
    scene.text('"Remember my pet. Slow. We have all the time to enjoy us."');
    scene.text('You can\'t retort with your face firmly in his crotch. He relaxes and lets you pleasure him, his moans of pleasure signaling that you\'re doing a good job. You slowly raise his hips until you feel his climax in a dominant display of pleasure.');
    scene.actions([
      { label: 'Resting', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).AlexandriaQW = 8;
    qspCall(s, 'spellList', 'addAvailableSpells', 'electSpells');
    (s as any).pain['mouth'] = ((s as any).pain['mouth'] ?? 0) + (5);
    (s as any).pain['back'] = ((s as any).pain['back'] ?? 0) + (5);
    (s as any).pain['asscheeks'] = ((s as any).pain['asscheeks'] ?? 0) + (5);
    (s as any).pain['legL'] = ((s as any).pain['legL'] ?? 0) + (5);
    (s as any).pain['legR'] = ((s as any).pain['legR'] ?? 0) + (5);
    (s as any).pain['shoulders'] = ((s as any).pain['shoulders'] ?? 0) + (5);
    (s as any).pain['armL'] = ((s as any).pain['armL'] ?? 0) + (5);
    (s as any).pain['armR'] = ((s as any).pain['armR'] ?? 0) + (5);
    (s as any).pain['breasts'] = ((s as any).pain['breasts'] ?? 0) + (5);
    (s as any).pain['nipples'] = ((s as any).pain['nipples'] ?? 0) + (5);
    (s as any).pain['wrists'] = ((s as any).pain['wrists'] ?? 0) + (5);
    (s as any).pain['ankles'] = ((s as any).pain['ankles'] ?? 0) + (5);
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    if (((s as any).succubusflag ?? 0) === 1) {
      (s as any).scfeed = ((s as any).succublvl ?? 0) + ((s as any).rand ?? 0)(1, 4);
      (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (50 * ((s as any).scfeed ?? 0));
      (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
      (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
      (s as any).sucabslez = 1;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G4.jpg');
    scene.text('This time, you can barely talk after the session and collapse over the table with a smug-looking, cigarette smoking Aleksei looking down at you with what you hope is satisfaction, because you are going to need some rest if he wants to encode.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, I suppose that this lesson is over. It seems that the curse ...
    scene.text(`"${((s as any).pcs_lastname ?? 0)}, I suppose that this lesson is over. It seems that the curse is stronger than I thought, but… We have learned something isn't it ${((s as any).pcs_lastname ?? 0)}? so… our deal is unchanged. I must clear up some facts, however. The truth is that this is only the beginning. I will escalate our methodology."`);
    scene.text('He then kneels and again grabs you by your chin before continuing.');
    // TODO-QSP: dynamic text: "You may dislike my methods, but at the end of the day, that is irrelevant. I ha...
    scene.text(`"You may dislike my methods, but at the end of the day, that is irrelevant. I have not had this sort of insight into Rikudo's work in centuries, and I am not going to refuse it, so… this is the new deal ${((s as any).pcs_lastname ?? 0)}. If you want the knowledge that I can impart, we will continue these <i>teaching sessions</i>."`);
    scene.text('He then removes the ropes and exits the room, leaving you to try and get to your feet.');
    scene.actions([
      { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
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

function enterLong(s: GameState, scene: SceneBuilder): void {
  (s as any).random_event = Math.floor(Math.random() * 6) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).AlexandriaQW ?? 0) < 12) {
    if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['alexandriaSex', 'nL1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['alexandriaSex', 'gL1'] }]);
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A241'] === 1  &&  ((s as any).random_event ?? 0) < 4) {
      scene.actions([{ label: 'Continue', goto: ['alexandriaSex', 'nL1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['alexandriaSex', 'nL2'] }]);
      if (((s as any).npc_rel ?? 0)?.['A241'] === 2  &&  ((s as any).random_event ?? 0) < 4) {
        scene.actions([{ label: 'Continue', goto: ['alexandriaSex', 'gL1'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['alexandriaSex', 'gL2'] }]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'nice1':
      enterNice1(s, scene);
      break;
    case 'grumpy1':
      enterGrumpy1(s, scene);
      break;
    case 'long':
      enterLong(s, scene);
      break;
    default:
      enterNice1(s, scene);
      break;
  }
}

export const alexandriaSex: LocationDef = {
  name: 'alexandriaSex',
  title: 'You find yourself lying half-naked on Aleksei\'s fluffy bed, ',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You only moan in reply, mostly because Aleksei has moved a hand between your thighs and started to caress your pussy, turning on a heat that quickly rises towards your stomach, where a tensed knot pushes for release… a release that is negated as he quickly withdraws the hand, making you squirm in frustration.'],
  enter: enter,
};
