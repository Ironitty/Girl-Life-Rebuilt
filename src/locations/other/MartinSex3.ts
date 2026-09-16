import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.build();
}

function enterMartinBlowTease(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
    (s as any).martinpos = 'MartinBlowjob_undressed';
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/blowjob/undresssub_bjtease.mp4');
    if (((s as any).MartinPussyLick ?? 0) === 1) {
      scene.text('After Martin has pleased you so diligently, it\'s only fair that you do the same for him.');
    } else {
      scene.text('Teasing Martin was fun, but rather than being a merciless cock tease, you\'d like him to see you as a generous sex goddess, or at least a girl who isn\'t afraid to put her mouth where the money shot comes from (or however that saying goes).');
      scene.text('Feeling Martin\'s eyes on your more or less naked body, you get up and move up to him, swaying your hips as you go. The strange thing is how the situation changes as you cross that short distance: Out of his reach, you were the undisputed queen of this bar and master of his destiny - but now, a few steps closer, you seem to have crossed a mystical barrier into his domain, and in it, you are subject to his will.');
    }
    scene.text('The kiss you give him is demure, compared to your performance mere seconds ago - it is his passion that heats it up and cements his reign. Sex goddess or not, you are his to take now.');
    scene.text('And when Martin pushes you down, the thought of resistance doesn\'t even cross your mind.');
    // TODO-QSP: dynamic text: You undo his fly, liberating his <<dick>>cm <<$dick_girth>> cock, rock-hard from...
    scene.text(`You undo his fly, liberating his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock, rock-hard from the show you put on for him. You feel drawn to it, mesmerized by his display of manliness, but strangely enough, the hand you feel at the back of your head seems to hold you back rather than push you down.`);
    scene.text('He wants you to take it slowly, tease him a little bit more… or has he sensed your impatience and is it really him that\'s teasing <b>you</b>?');
    // TODO-QSP: dynamic text: Whichever it is, you submit, grasping his cock at its base and sticking out your...
    scene.text(`Whichever it is, you submit, grasping his cock at its base and sticking out your ${((s as any).pc_desc ?? 0)?.['tongue'] ?? ''} tongue, licking around the head of his dick like pleasing Martin was your only concern in life.`);
    // TODO-QSP: dynamic text: How long you lose yourself in this task, how long he withstands the temptation o...
    scene.text(`How long you lose yourself in this task, how long he withstands the temptation of fucking your mouth you don't know. What you <b>do</b> know is that, suddenly, his grip on your ${((s as any).pc_desc ?? 0)?.['hair length'] ?? ''} ${((s as any).pcs_haircolor || '')} hair tightens.`);
    // TODO-QSP: dynamic text: "Go on. Suck it like you mean it, <<$pcs_firstname>>," he commands.
    scene.text(`"Go on. Suck it like you mean it, ${((s as any).pcs_firstname || '')}," he commands.`);
    (s as any).orgasm_txt = 'This sense of complete obedience fans the flames your striptease has lighted. The familiar heat of lust spreads inside your belly, building up like a wave and then washing over you. You cum without ever laying a hand on yourself, your moans muffled by Martin\'s cock in your mouth.';
  } else {
    (s as any).martinpos = 'MartinBlowjob_dressed';
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/blowjob/dresssub_bjtease.mp4');
    scene.text('Sure, you and Martin could talk and explore this strange relationship on an intellectual level and all that, but if you\'re honest with yourself, you\'d rather suck his dick right now, and the look in Martin\'s eyes tells you that he feels the same way.');
    scene.text('You approach Martin for a \'chaste little kiss\' that quickly ends up in a chaste little French kissing and groping, but after only a few seconds of that, you can feel his hand on your shoulder, pushing you down on your knees. And you know exactly what he\'s trying to tell you.');
    // TODO-QSP: dynamic text: You look up at Martin, smiling devotedly as you're opening his fly and freeing h...
    scene.text(`You look up at Martin, smiling devotedly as you're opening his fly and freeing his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick from its textile prison. You could feel in charge if it wasn't for his hand at the back of your head, it's weight reassuring in a way but leaving no doubt as to who is giving the orders.`);
    scene.text('Taking his cock into your hand, you can feel the heat emanating from it, can see it growing to its full size before your eyes. It\'s a wondrous sight… but not so much so that it would make you forget what Martin wants you to do.');
    // TODO-QSP: dynamic text: Sensing no pressure from Martin, you conclude that he wants you to surprise and ...
    scene.text(`Sensing no pressure from Martin, you conclude that he wants you to surprise and tease him, so rather than crudely plunging him into your ${((s as any).pc_desc ?? 0)?.['throat'] ?? ''} throat, you take it slow, give his cock lingering strokes and tasting the underside of the tip, then teasingly moving the your tongue around the head.`);
    scene.text('You look up at Martin and find him watching you intently, a shiver running through him when your eyes meet - it must be turning him on immensely to have a girl submissively look up at him while she\'s licking his cock.');
    (s as any).orgasm_txt = 'Maybe it\'s the sense of submission you have right now, maybe you were just really horny to begin with; whatever the reason, you find that familiar heat in your lower abdomen rising and spilling over, causing you to cum without ever laying a hand on yourself, your moans muffled by his cock in your mouth.';
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  (s as any).orgasm_txt = '';
  qspCall(s, 'stat', '');
  if (((s as any).cycle ?? 0) === 0  &&  ((s as any).anal ?? 0) > 0) {
    scene.actions([
      { label: 'Let Martin fuck your ass (From behind)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'doggystyle'
  }, goto: ['MartinSex2', 'MartinAnalDyn'] },
      { label: 'Ride Martin with your ass (<b>Reverse</b> Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'rev_cowgirl'
  }, goto: ['MartinSex2', 'MartinAnalDyn'] },
    ]);
  } else {
    scene.actions([
      { label: 'Lie down for him (On your back)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'missionary'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Bend over (From behind)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'doggystyle'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Lie on your side (Sideways)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'sideways'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Tell Martin you wanna ride him (Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'cowgirl'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Tell Martin you wanna ride him (<b>Reverse</b> Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'rev_cowgirl'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'No more teasing - Blow him', goto: ['MartinSex3', 'MartinBlowjob'] },
  ]);
  scene.build();
}

function enterMartinBlowjob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
    (s as any).martinpos = 'MartinBlowjob_undressed';
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/blowjob/undresssub_bj.mp4');
    if (((s as any).MartinSexStop ?? 0) === 1) {
      scene.text('Instead of plunging Martin\'s dick inside you as you originally wanted (and as your wet pussy demands), you scramble to get on your knees. His confusion at this change of heart only lasts for about two seconds - coincidentally the time you needed to take his cock into your mouth.');
      scene.text('You move your head up and down, swirling your tongue around his sizable cock and enjoying the tangy taste of your own juices and the hints of precum, telltale signs of your horniness and of him enjoying your impromptu blowjob.');
      // TODO-QSP: dynamic text: But Martin is looking for more than just a blowjob right now: He wanted to fuck ...
      scene.text(`But Martin is looking for more than just a blowjob right now: He wanted to fuck one of your holes and he seems intent on sticking to that plan, as you quickly realize when a sizable portion of his ${((s as any).dick || '')}cm cock fills your mouth. He pulls out, only to drive it right back in, again and again in rapid succession.`);
      scene.text('There is little more you can do but try to keep your teeth away from him and hold on for dear life as he\'s fucking your mouth and thoroughly enjoying himself.');
      scene.text('Well… There is something.');
      scene.text('One of your hands inadvertently makes its way down south, following the heat you feel in your groin, and finds your pussy dripping wet. Being used by Martin, reduced to an object for him to satisfy himself with, is arousing in ways that even you yourself have trouble understanding.');
      scene.text('But you don\'t have to understand. All you have to do is leave your fingers to themselves and reap the rewards, moaning softly as you let your lover fuck your mouth.');
      (s as any).orgasm_txt = 'Your brain seems to have no issue channeling your own frustration and complete sense of surrender to Martin into unbridled lust, fanned by Martin\'s facefuck and you playing with yourself. The familiar heat spreads inside your belly, building up like a wave and then washing over you. You cum, your fingers busy on your clit, your moans muffled by Martin\'s cock in your mouth and feeling at least a little compensated for what you missed out on.';
    } else {
      // TODO-QSP: dynamic text: You take the tip of his <<$dick_girth>> cock into your mouth, pausing to savour ...
      scene.text(`You take the tip of his ${((s as any).dick_girth || '')} cock into your mouth, pausing to savour its size and texture and exploring its details with your ${((s as any).pc_desc ?? 0)?.['lip size'] ?? ''} lips and ${((s as any).pc_desc ?? 0)?.['tongue'] ?? ''} tongue, intent on giving Martin a slow and sensual blowjob.`);
      // TODO-QSP: dynamic text: But you have all but forgotten about your earlier performance while Martin absol...
      scene.text(`But you have all but forgotten about your earlier performance while Martin absolutely hasn't. He is well past 'sensual' as you quickly realize when a sizable portion of his ${((s as any).dick || '')}cm cock fills your mouth. He pulls out, only to drive it right back in, again and again in rapid succession.`);
      scene.text('There is little more you can do but try to keep your teeth away from him and hold on for dear life as he\'s fucking your mouth and thoroughly enjoying himself.');
      scene.text('Well… There is something.');
      scene.text('One of your hands inadvertently makes its way down south, following the heat you feel in your groin, and finds your pussy dripping wet. Being used by Martin, reduced to an object for him to satisfy himself with, is arousing in ways that even you yourself have trouble understanding.');
      scene.text('But you don\'t have to understand. All you have to do is leave your fingers to themselves and reap the rewards, moaning softly as you let your lover fuck your mouth.');
      (s as any).orgasm_txt = 'This sense of complete obedience fans the flames your striptease has lighted. The familiar heat of lust spreads inside your belly, building up like a wave and then washing over you. You cum, your fingers busy on your clit, your moans muffled by Martin\'s cock in your mouth.';
    }
  } else {
    (s as any).martinpos = 'MartinBlowjob_dressed';
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/blowjob/dresssub_bj.mp4');
    scene.text('But you want to please him more, and he\'s not leaving any doubt that he wants more from you, too - a soft nudge at the back of your head is all the encouragement you need.');
    // TODO-QSP: dynamic text: You sensually slide your <<$pc_descWordy['lips']>> lips over the head of Martin'...
    scene.text(`You sensually slide your ${((s as any).pc_descWordy ?? 0)?.['lips'] ?? ''} lips over the head of Martin's ${((s as any).dick_girth || '')} dick, your eyes closed as you enjoy the sensations: His musky, manly smell; the sense of security and guidance he gives you; the texture of his cock's tip.`);
    // TODO-QSP: dynamic text: You move back and forth, never taking him too deep - all your attention is focus...
    scene.text(`You move back and forth, never taking him too deep - all your attention is focused on his crown, your ${((s as any).pc_desc ?? 0)?.['tongue'] ?? ''} tongue circling around the head, teasing that sensitive little spot on its underside.`);
    scene.text('The faint taste of precum is the only sign of pleasure you are getting from him at the moment. He seems so focused on what you are doing to him that he is not making a sound. Or is he? Are you just too engrossed in your task to hear him?');
    scene.text('No matter which it is, you couldn\'t bring yourself to stop. You close your lips even tighter around his dick, suck stronger than before, move your tongue with even greater purpose, determined to get him off.');
    (s as any).orgasm_txt = 'Maybe it\'s the sense of submission you have right now, maybe you were just really horny to begin with; whatever the reason, you find that familiar heat in your lower abdomen rising and spilling over, causing you to cum without ever laying a hand on yourself, your moans muffled by his cock in your mouth.';
  }
  if (qspFunc(s, 'fetish', 'get_pref', 'deepthroat') > 50) {
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/blowjob/undresssub_deep.mp4');
    } else {
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/blowjob/dresssub_deep.mp4');
    }
    // TODO-QSP: dynamic text: But that's not enough for him yet. Martin wants to claim all of your mouth and m...
    scene.text(`But that's not enough for him yet. Martin wants to claim all of your mouth and more, and after only a hint of a warning, he takes what he wants: One assertive push at the back of your head is all it takes to drive his hard ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock down your ${((s as any).pc_desc ?? 0)?.['throat'] ?? ''} throat until your ${((s as any).pc_desc ?? 0)?.['nose'] ?? ''} nose almost touches his belly…`);
    scene.text('You can feel your gag reflex piping up, but Martin is insistent, holding you there just a few moments longer, groaning softly. You like having a dick in your mouth, but you <b>love</b> having one in your throat. There\'s a sense of safety in this carefully-measured abuse, a sense of freedom in giving up control to somebody, a sense of empowerment and arousal in letting him use you for his own pleasure.');
    scene.text('Finally, he allows you to pull back, take a breath… only to push you right back down again. He\'s not holding back but you\'re not protesting or resisting, making it as clear as possible to Martin that you don\'t want him to - you want him to use your mouth until he cums.');
    qspCall(s, 'arousal', 'bj', 2, 'deepthroat', 'sub');
  }
  scene.text('Your dedication pays off: Before long, his dick seems to swell and you can hear him say your name. Martin is about to cum.');
  (s as any).orgasm_or = 'custom';
  qspCall(s, 'arousal', 'clit_finger', (-4), 'masturbate', 'sub');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
    scene.actions([
      { label: 'Let him cum on your tits', goto: ['MartinSex2', 'MartinCumshot_Tits'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him cum in your mouth', goto: ['MartinSex2', 'MartinCumshot_Mouth'] },
    { label: 'Let him cum on your face', goto: ['MartinSex2', 'MartinCumshot_Face'] },
  ]);
  scene.build();
}

function enterMartinPussyLick(s: GameState, scene: SceneBuilder): void {
  (s as any).MartinPussyLick = 1;
  qspCall(s, 'boyStat', 'A216');
  scene.img('images/locations/city/industrial/bar/sex/bar/martin/martinpussylick.jpg');
  // TODO-QSP: dynamic text: He lifts you on the counter and spreads your legs, completely exposing your wet ...
  scene.text(`He lifts you on the counter and spreads your legs, completely exposing your wet ${((s as any).pc_desc ?? 0)?.['pussy'] ?? ''} pussy to him.`);
  scene.text('"Like what you see?" You ask quietly.');
  scene.text('He bends down to your slit and dives right in, his tongue moving up and down its length and finding, or rather avoiding your clit with practiced (t)ease.');
  scene.text('"Does that answer your question?" You hear between two languid strokes of his tongue.');
  scene.text('You chuckle softly and that chuckle turns into a moan as he flicks the tip of his tongue across your swollen nub.');
  // TODO-QSP: dynamic text: You watch him, somewhat amazed at how hot it is to watch a man go down on you. E...
  scene.text(`You watch him, somewhat amazed at how hot it is to watch a man go down on you. Even if it didn't feel as good as it does, that alone might explain why men like getting blowjobs so much. You barely even notice how minutes pass as Martin licks your ${((s as any).pc_desc ?? 0)?.['pussy'] ?? ''} pussy like an ice cream in summer.`);
  (s as any).orgasm_txt = 'Strange how, despite having the \'superior\' position, you are feeling like a toy, like a leaf in the wind. Martin is eating you out because he wanted to. He has buried his face between your legs because he willed it, and even though you are looking down at him, he has full control over the situation, over you, over your body, and he knows exactly what he\'s doing. You don\'t know whether it\'s his wonderful tongue or your sense of submission that sets you off, but he has you cumming all over his tongue in no time.';
  qspCall(s, 'arousal', 'cuni', 5, 'sub');
  (s as any).orgasm_txt = '';
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return the favor (Blowjob)', goto: ['MartinSex3', 'MartinBlowTease'] },
    { label: 'Lie down on your back (On your back)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'missionary'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
    { label: 'Get up and bend over for Martin (From behind)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'doggystyle'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
    { label: 'Lie down on your side (Sideways)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'sideways'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
    { label: 'Get up and tell Martin you wanna ride him (Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'cowgirl'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
    { label: 'Get up and tell Martin you wanna ride him (<b>Reverse</b> Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'rev_cowgirl'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
    { label: '"Fuck my ass, Martin"', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'doggystyle'
  }, goto: ['MartinSex2', 'MartinAnalDyn'] },
    { label: 'Lower your ass onto his dick', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'rev_cowgirl'
  }, goto: ['MartinSex2', 'MartinAnalDyn'] },
    { label: 'Blueball him - Get dressed and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A216', (-1));
    qspCall(s, 'underwear', 'wear');
    scene.img('images/locations/city/industrial/bar/gettingdressed.mp4');
    scene.text('"That was wonderful," you say, pushing yourself off the counter, "but I\'m afraid I have to go now."');
    scene.text('At first, Martin probably thinks you\'re joking, but seeing as you\'re putting your other clothes back on as well, he gets up, frowning.');
    scene.text('"You\'d leave me here, alone, in this state?" He points towards his crotch where his dick is straining against the fabric of his pants. "You couldn\'t possibly be this cruel."');
    scene.text('You walk up to Martin, put your arms around his neck and give him a soft kiss, the taste of your pussy on your lips and tongue. When you break it, you whisper: "If I wasn\'t cruel at least once in a while, you wouldn\'t appreciate it when I\'m not."');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('"Besides," you add with a naughty smile, "you just saw me cum really hard, so I think you\'ll cum immediately when I\'m out that door once you realize that I\'m going commando again."');
      scene.text('With that, you quickly move out of his range, towards the door, blow the perplexed barkeeper a final kiss and make off like a bandit.');
      scene.text('…A cruel, pantiless bandit.');
    } else {
      scene.text('"Besides," you add with a naughty smile, "you just saw me cum really hard, so you certainly have something to keep you warm tonight."');
      scene.text('With that, you quickly move out of his range, towards the door, blow the perplexed barkeeper a final kiss and make off like a bandit.');
      scene.text('…A cruel bandit.');
    }
    qspCall(s, 'clothing', 'wear_last_worn');
    qspCall(s, 'shoes', 'wear', 'last_worn');
    qspCall(s, 'purses', 'wear', 'last_worn');
    qspCall(s, 'coats', 'wear', 'last_worn');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'MartinBlowTease':
      enterMartinBlowTease(s, scene);
      break;
    case 'MartinBlowjob':
      enterMartinBlowjob(s, scene);
      break;
    case 'MartinPussyLick':
      enterMartinPussyLick(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const MartinSex3: LocationDef = {
  name: 'MartinSex3',
  title: 'After Martin has pleased you so diligently, it\'s only fair t',
  region: 'other',
  enter: enter,
};
