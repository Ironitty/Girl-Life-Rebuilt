import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).transportVars ?? {})['train_event_day'] = ((s as any).daystart ?? 0);
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 1;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] <= 15) {
    scene.actions([{ label: 'Continue', goto: ['train_events', 'oldman'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] <= 42) {
      scene.actions([{ label: 'Continue', goto: ['train_events', 'fit'] }]);
    } else {
      if (((s as any).temp_transportVars ?? 0)?.['rand'] <= 77) {
        scene.actions([{ label: 'Continue', goto: ['train_events', 'young'] }]);
      } else {
        if (((s as any).temp_transportVars ?? 0)?.['rand'] <= 100) {
          scene.actions([{ label: 'Continue', goto: ['train_events', 'breastfeed'] }]);
        } else {
          scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
        }
      }
    }
  }
  scene.build();
}

function enterOldman(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/train/ride2.jpg');
  scene.text('You choose an empty seat by the window and look outside, lost in thought as others board the train. Shortly after departure, an old man sits next to you. You would have been content with spending the journey in silence, but he starts talking to you about how he\'s not been back to this area since his wife died a few years ago.');
  scene.text('Feeling somewhat obligated to keep the conversation going, as awkward as it may be, you ask about his wife and learn that they had a happy, wonderful life together. He gets very emotional as he thanks you for listening to him.');
  scene.text('"I don\'t even know why I started telling you about her," he says. "I guess it\'s because you remind me of my wife when she was young. You\'re just as beautiful as she was. If only you could-"');
  scene.text('He seems to want to say more, but as the train pulls into the station you\'re both headed for, he shakes his head. He says he shouldn\'t ask, but wonders if you would accompany him to a spot that he and his wife liked to visit.');
  scene.actions([
    { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/ride2.jpg');
    scene.text('While you feel sorry for him, you don\'t have time for this, especially since you think this won\'t just be a quick walk.');
    scene.text('You inform him that you don\'t have the time and he nods sadly, but understandingly. Once you\'ve disembarked the train, you both go your separate ways.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Accept his request', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/old.jpg');
    scene.text('Your heart goes out to the man; after spending the entire journey listening to him, you feel sorry for him and his loss. You decide that you can make time for him, and agree to go with him and keep him company. He livens up and seems happier than when he sat next to you.');
    scene.text('Once off the train, he leads you down the tracks to a small bridge over a gully. He points out a small building, informing you that he and his wife used to come down here all the time, especially when they were younger.');
    scene.text('The building is old, run down and shabby, but maybe it looked a lot different when he was young, so you hold your tongue so as not to spoil his sentimental mood.');
    scene.text('As you walk along, he wraps his arm around your waist and points out several other buildings and things, talking about what they were like years ago and the many picnics and such he and his wife had here as he leads you up a set of stairs to a concert platform. He sighs when he finds the door at the top barred.');
    scene.text('"Last time my wife and I were here, we were able to sneak inside and…"');
    scene.text('You don\'t listen to how his story ends because, right at that moment, you notice the raging hard-on in his pants.');
    scene.text('He glances down when he sees what you\'ve caught on and quickly apologizes, admitting that he and his wife used to sneak down here to have sex in their younger years. He says that you look so much like her and it has been years since he had sex…');
    scene.text('"You would be making an old man feel young again," he says.');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/vokzalg.jpg');
    scene.text('You refuse and quickly pull free from him before making your way back to the station, leaving the old man behind.');
    scene.actions([
      { label: 'Return to the station', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/sex/old.jpg');
    scene.text('You nod your head and are halfway down on your knees when he stops you.');
    scene.text('"I\'m very grateful that you want to help me Miss, but my wife didn\'t believe in oral sex, and I think she rubbed off on me. Maybe you could just… Take off your bottoms?" he asks in a pleading and hopeful tone.');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/vokzalg.jpg');
    scene.text('You refuse and quickly pull away before making your way back to the station, leaving the old man behind.');
    scene.actions([
      { label: 'Return to the station', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Old man', Math.floor(Math.random() * 16) + 52);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'pain', '', 3, 'vaginal', 'ache');
    qspCall(s, 'arousal', 'vaginal', 15, 'rough', 'unknown');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/sex/oldvag.jpg');
    scene.text('You wordlessly strip from the waist down and watch as he does the same, feeling a little uneasy now that you\'re half-naked in this strange place. It doesn\'t help that the old man\'s look is a lot more lecherous now.');
    // TODO-QSP: dynamic text: He turns you around and has you put one foot up on the gate blocking the door, s...
    scene.text(`He turns you around and has you put one foot up on the gate blocking the door, spreading your legs as you face the door. The elderly guy comes up behind you, and without warning, he shoves his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your vagina. He didn't even check if you were wet, roughly boring through any resisting tissue. You grit your teeth to stifle a cry of pain, but it escapes you anyway when he begins to roughly fuck you, holding you by your hips and pulling your ass back against him. You endure, sure that he won't last long, but he ends up fucking you for quite a while before he pulls out. By this point, you are somewhat lubricated and a little numb to the pain, but you are still glad it is over… except it isn't.`);
    scene.text('The old man simply pulls you down to the ground, laying you on your side in a spoon position with himself right behind you, and slips his cock back into you. A second later, he has resumed pounding your pussy as hard as he physically can.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 3, 'asshole', 'ache');
    qspCall(s, 'arousal', 'anal', 10, 'rough', 'unknown');
    scene.img('images/locations/shared/train/sex/oldanal.jpg');
    // TODO-QSP: dynamic text: He keeps this up for a while, and it is almost starting to feel okay when he pul...
    scene.text(`He keeps this up for a while, and it is almost starting to feel okay when he pulls out and pauses. Again, you briefly think that he is done and only have a second to realize that, actually, he is rubbing the tip of his cock against your anus. Before you can even protest, his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock has already painfully penetrated your ass. You instinctively want to flinch away, but he grabs your hips with surprising strength and forces his cock as far into your ass as he can… before he starts hammering your ass. "My wife loved anal," he informs you between slaps of flesh against flesh, "I hope you don't mind."`);
    scene.text('You can merely groan in response as he violates your little asshole. His wife must have really liked rough sex if this was the norm for them. He lifts your leg up and props your foot on the wall to keep your legs spread, which thankfully puts you at an angle where it hurts a little less. Still, you are really starting to regret that you wanted to help him out.');
    scene.actions([
      { label: 'Take his cum', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/oldcum.jpg');
    scene.text('All of a sudden, he pulls out of your ass and, you feel his hot sperm splattering against your puckered hole, pussy lips and inner thighs. It\'s not as much cum as you expected for somebody who didn\'t have sex in years, but maybe he jerks off a lot? He gets up first, using your shoulder for support, which holds you down until he is fully on his feet. Bearing it without clamor, you start wiping off the cum as he gets dressed; by the time you finally get off the ground yourself, he\'s fully clothed, whistling and already walking off back the way you came with him.');
    scene.text('You hurry up in getting yourself back in order, but by the time you have your bottoms back on and look up, he is almost out of the gully already, halfway back to the tracks! He seems <b>a lot</b> more spry than before, and you get the sneaking suspicion that you have been had in more ways than one.');
    scene.text('Cursing your gullibility and wincing at the ache in your pussy and ass, you finish dressing and head back to the platform - as unpleasant as this was, maybe you\'ve learned your lesson at least.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'labia', 'Old guy');
    qspCall(s, 'cum_call', 'butt', 'Old guy');
    qspCall(s, 'cum_call', 'legs', 'Old guy');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the station', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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

function enterFit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/ride1.jpg');
  scene.text('You sit in an empty seat by the window and look outside, lost in thought as others board the train. Shortly after the departure, a man in his thirties - or perhaps early forties - sits down next to you. You don\'t give him more than a short glance as he takes the seat, but it doesn\'t take more than that to notice that he is in <b>great</b> shape. You try not to stare, but you just can\'t help yourself - the world outside the window is just too boring to hold your attention. Of course, your gaze does not go unnoticed, and the man, grinning, engages you in a conversation.');
  scene.text('He asks you your name, where you\'re going and a few other questions, and before you know it, you\'re chatting and laughing about a movie both of you happen to have watched recently. He is pretty charming, and even a blind deaf woman would notice his flirting.');
  scene.text('As you talk, you realize you are both getting off at the next stop, and he asks if you would like to go for a walk with him along the tracks after you disembark the train. As innocent as he tries to make it sound, you have no doubt what he would really like to do with you on that "walk", but he <i>is</i> attractive and his fitness and charm are sexy enough to make his offer tempting.');
  scene.actions([
    { label: 'Refuse his offer', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/ride2.jpg');
    scene.text('You thank him but politely refuse his offer, claiming that, sadly, you don\'t have time to go on a walk today and are already running late, really. He doesn\'t seem too disappointed though. "I\'m sure we will meet again on the train sometime," he augurs with a smile, "and then you will have time for that walk." You don\'t know if his prophecy is going to come true or not or if he truly believes what he said but, regardless, he remains a pleasant dialog partner for the rest of the ride.');
    scene.actions([
      { label: 'Leave the train', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Accept his offer', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/fit.jpg');
    scene.text('You consider his offer. It doesn\'t exactly sound like a smart idea to go on a walk along the train tracks with a complete stranger, but somewhere between his charming compliments and the hard abs he let you feel, you lose all sense of what is smart. You let him know you would love to go for that walk, throwing caution to the wind because it could be fun.');
    scene.text('Once you\'ve reached your destination, you disembark the train together and wait for it to pull out of the station. He then takes you by the hand and leads you down the tracks, talking to you about how pretty you are, his flirting amped up to eleven.');
    scene.text('The two of you end up walking further than you expected, well out of sight of the station, and when he finally stops and starts kissing you, it\'s so abrupt that you are momentarily stunned. Your friend doesn\'t lose any time however, and his hands are, piece by piece, removing your clothes as you passionately kiss him back. He has you half-naked in no time, right here out on the tracks, and you feel thrilled at the idea someone could very easily happen by and see you like this.');
    scene.text('While you are making out, his fingers find your clit and… you don\'t really know what he\'s doing or how he\'s touching you, but there is no doubt that he knows <b>exactly</b> what he has to do to please you. Every move feels like jolts of electricity are running through your body, waves of relish going up and down your spine. Half the town could be watching you right now for all you care, as long as he doesn\'t stop.');
    scene.text('But, of course, he does once he has you good and wet, and he gently pushes you down by your shoulders so you can reciprocate.');
    qspCall(s, 'arousal', 'vaginal_finger', (-15), 'unknown');
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Fit guy', Math.floor(Math.random() * 11) + 32);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    scene.img('images/locations/shared/train/sex/fitbj.jpg');
    // TODO-QSP: dynamic text: As much as you would have liked to feel his heavenly fingers some more, you drop...
    scene.text(`As much as you would have liked to feel his heavenly fingers some more, you drop to your knees and waste no time in taking his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock deep into your mouth, immediately feeling his hand on back of your head. You wrap your lips tightly around the shaft of his cock and bob your head, sucking hard on him to give him an idea of the intense stimulation he gave you. Occasionally, he uses his hand to force you deeper down on him so you would gag a bit on his cock, but he seems mostly content with letting you pleasure him at your own pace.`);
    scene.text('You stay on your knees, blowing him, for quite a while - if the sore jaw muscles are anything to go by - and even with your discarded clothes to kneel on, you\'re probably going to have sore knees after this.');
    qspCall(s, 'arousal', 'bj', (-15), 'deepthroat', 'unknown');
    qspCall(s, 'pain', '', 1, 'legL', 'ache');
    qspCall(s, 'pain', '', 1, 'legR', 'ache');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him fuck you', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/fitvag.jpg');
    // TODO-QSP: dynamic text: He pulls you up, back on your feet, and turns you around. You expect him to bend...
    scene.text(`He pulls you up, back on your feet, and turns you around. You expect him to bend you over the next moment, but instead, he lifts one of your legs off the ground, and you feel him rubbing the head of his cock against your pussy lips, teasing you and himself and getting you all worked up again. Once his tip is nice and wet, he slides his ${((s as any).dick ?? 0)}cm cock into you, filling your pussy with his ${((s as any).dick_girth ?? 0)} cock.`);
    scene.text('Holding one of your legs up with one hand, he wraps his other around your waist to help you keep your balance. You have to reach back, around his shoulders, as well to support yourself, but it is easy in the face of the pleasure you\'re feeling. He strokes the length of his cock inside you, giving you a passionate fuck right there on the train tracks. Your moans come loud and unrestrained; you don\'t care if anyone is nearby, if anybody can hear you or see you. He completely fills you, both physical and emotionally, and every rational thought is washed away by waves of pleasure.');
    qspCall(s, 'arousal', 'vaginal', (-10), 'unknown');
    scene.actions([
      { label: 'Take his cum', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/fitcum.jpg');
    scene.text('His hard breathing turns into groans, and the next moment, he pulls out of you, letting go of your leg and body. You squat down in front of him, rubbing your clit and opening your mouth. Before he can even get his cock back into your mouth, the first jet of cum spurts across your lips; the following ones end up shooting into your now fully-opened mouth.');
    scene.text('He squeezes the last few drops of sperm into your mouth and then sticks his cock inside. You swallow his cum obediently and then suck his cock clean, licking every tasty inch of it you can reach. Once he goes soft in your mouth, he pulls back and the two of you start getting dressed.');
    scene.text('Naturally, he is the first to be back in order, but he waits until you are cleaned up and presentable again and then walks you back to the station. The walk back is anything but awkward. He flirts with you just like he did at the very start, and you are getting the sense that he might be genuinely interested in you. Or, at the very least, he\'s not the kind of ass who just wants to fuck you and forget you.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth_swallow', 'Fit guy');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the station', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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

function enterYoung(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/train/ride1.jpg');
  scene.text('You sit in an empty seat by the window, looking outside, lost in thought, as others board the train and it eventually departs. Most of the train ride passes as you silently daydream with the scenery outside blurring together. It\'s not until someone heavily sits down next to you that you snap out of it. You turn to see a good looking young guy in his early to mid-twenties greeting you with a bright smile. "I\'ve gotta say: I\'ve walked from one end of this train to the other, and you are by far the most beautiful girl on it."');
  scene.text('You blush slightly at his compliment. "Thank you, you\'re not so bad looking yourself," you reply as you look him over. He is well groomed, with a nice suit jacket over a button-up shirt. His pants are patched, but you suppose it is done intentionally for style - still, it clashes with the nice jacket and makes it look like he is trying to look his best but hasn\'t quite figured out all the tricks yet.');
  scene.text('"So where are you headed?" he asks.');
  scene.text('"I get off at the next stop," you respond without thinking. His lips curl into a suggestive grin; it takes you a moment to realize how your words could be taken as a sexual innuendo and blush slightly - something about this guy makes you blush a lot more than usual.');
  scene.text('"Well, I could help you with that, if you like," he offers, his eyes following your curves, "it\'s always better to get off together."');
  scene.actions([
    { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/ride2.jpg');
    scene.text('He may be good-looking, but it\'s time he learned that doesn\'t have to mean anything. Shaking your head no, you tell him that "that\'s not how I meant it." As you do, the train slows and comes to a stop.');
    scene.text('"Oh, I get it!" he feigns realization at the \'misunderstanding\', "I didn\'t mean that either. I just, you know, thought we could hang out and have fun." His effort to save the situation is valiant, but you shoot him down again with a "no, thank you" and disembark the train without looking at him again.');
    scene.actions([
      { label: 'Return to the station', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Accept', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/young.jpg');
    scene.text('You look him over and bite your lower lip as you consider his suggestion. You don\'t even know his name, but somehow, that makes it an even bigger turn on. You know exactly what he wants, and to your own small surprise, you find yourself wanting it too.');
    scene.text('"Okay," is all you say to him, but really, that is all he needs to hear.');
    scene.text('"Great! I\'ll get you off in no time, or your money back!" he says laughing.');
    scene.text('When the train stops at the final station, he leads you off the car, and the two of you wait as people leave the platform and new passengers get on. When the train has left and there\'s nobody around anymore, he motions for you to follow him and takes you on a walk along the tracks.');
    scene.actions([
      { label: 'Follow him', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Well dress guy', Math.floor(Math.random() * 4) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    scene.img('images/locations/shared/train/sex/youngvag.jpg');
    scene.text('You keep looking back towards the station as you walk, making sure that nobody sees where you\'re headed. Your male companion on the other hand seems to be a lot more interested in your anatomy than potential observers. He puts his arm around your waist as you walk together and somehow manages to worm his way into your panties, rubbing your clit as you move. You somewhat lose interest in looking back after that, focusing entirely on the fingers playing with your pussy and dipping inside you. As soon as he has you good and soaking wet - and has put enough distance between you and the station that you\'re no longer in plain sight - he pulls down his pants and sits on the tracks, his erect cock an unmistakable invitation.');
    // TODO-QSP: dynamic text: Your need seems to explode at the sight, and you urgently pull your clothes asid...
    scene.text(`Your need seems to explode at the sight, and you urgently pull your clothes aside enough to reveal your pussy and tits, squat down on his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock and guide him inside. You can feel it filling you up as you impale yourself on his hard shaft.`);
    scene.text('You start riding him, completely controlling the action and taking him at the exact depth and speed you want. The power over the situation is intoxicating, but it pales in comparison to the knowledge that you are fucking a stranger out in the open where anybody could find you at any moment; unsurprisingly, your moans are getting louder and louder, and you feel yourself building up to a strong orgasm, every thrust getting you closer to the peek… but before you can reach it, he pulls you off and stands back up. You are confused and groan in protest, but he pulls you up with him. "Don\'t come yet, not yet. That was just the warm up," he promises. You have half a mind to scream at him for yanking you back so close to the edge, but you are too horny to be angry. All you wanna do is fuck right now.');
    qspCall(s, 'arousal', 'vaginal', 10, 'exhibitionism', 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'See what he has in mind', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/youngbj.jpg');
    scene.text('He takes your hand and walks you down the tracks a bit more. His cock is back in his pants, but you\'re completely exposed - he insisted on it and, really, you don\'t mind; it is thrilling, even with nobody around. As you pass two electricity sub-stations for the trains, he stops and pulls you between them, a mischievous grin on his face. "I saw a track worker, just a few hundred meters away," he whispers with a chuckle and pulls down his pants. "I wonder how he\'d react if he found you, sucking my cock."');
    // TODO-QSP: dynamic text: You are not sure if he's being serious about having seen somebody or not, but yo...
    scene.text(`You are not sure if he's being serious about having seen somebody or not, but you are not thinking straight anymore; the notion that somebody might be close by who could catch you raises the stakes in an exciting way, so you don't think twice before squatting down in front of him and taking his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your mouth. You can taste your own pussy juices on his cock as you suck him, a subtle reminder of your "warm-up". With your ${((s as any).pc_desc ?? 0)?.['lips']} lips lips wrapped tightly around his shaft, you start bobbing your head while one of your hands fondles his balls. If somebody's gonna find you, he's gonna get an eyeful, that's for sure!`);
    scene.text('After a few minutes, he pulls his cock out of your mouth and then lies down on his back again, his legs peeking out from between the sub-stations - either the track worker was imaginary or your friend is too horny to care anymore. His eyes are burning with desire, so both options are possible.');
    scene.text('"Lower yourself down on me again, baby… but this time, I want you to take my cock up your ass."');
    qspCall(s, 'arousal', 'bj', 10, 'exhibitionism', 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Do as he says', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/younganal.jpg');
    // TODO-QSP: dynamic text: You are too desperate for sex to say no even if you'd wanted to. Without hesitat...
    scene.text(`You are too desperate for sex to say no even if you'd wanted to. Without hesitation, you spread a little bit of your secretions around your puckered hole, and you lower yourself onto him. You can feel the head of his cock rubbing against your asshole; the pressure builds, your sphincter resisting the penetration… until the head pops inside. You gasp softly, pain and pleasure both vying for your attention, and you slowly lower yourself further, taking more and more of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your ass.`);
    scene.text('Once you have as much of his cock in your ass as you comfortably can on the first go, you start moving your hips, rising up and lowering yourself again, taking a tiny bit more of him into you each time. As you\'re riding his cock with your ass, his hands come up to grab your waist - not to wrest control from you as you first thought, but to support your weight, allowing you to focus on getting into a rhythm and enjoying yourself as much as he audibly does, with a little help from your hand on your clit.');
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take his cum', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/youngcum.jpg');
    scene.text('He lifts you off him and stands up beside you, jerking his cock. You know what he wants, and you don\'t mind opening your mouth for him. Maybe two seconds later, the first jet of hot, sticky sperm flies into your mouth; most of those that follow hit their target too - only one or two miss and end up on your lips.');
    scene.text('When the torrent of semen has run dry, your lover pulls up his pants while you swallow his load, the salty reward for an incredible experience. He waits for you to get dressed and cleaned up, then he walks you back to the platform, flirting and chatting amicably with you along the way, right up until you\'re inside the station and it\'s time to part ways.');
    // TODO-QSP: dynamic text: "I'm glad that we've met today, <<$pcs_nickname>>. This has been one of the best...
    scene.text(`"I'm glad that we've met today, ${((s as any).pcs_nickname ?? 0)}. This has been one of the best days of my life; I'm not exaggerating. You are an amazing girl… and I hope to see you again someday." Honestly, you are a bit overwhelmed by this, but in a good way… in a great way, actually.`);
    scene.text('"Yeah, I… I had a lot of fun with you," you say lamely and give him an awkward smile as you try to find the right words, "and I hope we run into each other again too. Who knows, maybe we\'ll meet on the train again?"');
    scene.text('"I\'d like that." He gives you a kiss on the cheek and a boyish grin that makes you feel weak in the knees, and walks away. You follow him with your eyes until he\'s turned a corner, then sigh and, with a heavy heart, return to your day-to-day life.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth_swallow', 'Well dress guy');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the station and catch the next train', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/electri_\' + rand(1, 5) + \'.jpg');
    scene.text('The journey is uneventful, and you end up not paying attention for much of it. It doesn\'t seem like long before you arrive at your destination.');
    scene.actions([
      { label: 'Get off the train', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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

function enterBreastfeed(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/train/breastfeeding/father_with_baby_train.jpg');
  scene.text('The train is really busy and the only empty seat you can find is next to a sleeping man with a baby in his arms.');
  scene.text('As you sit next to him, the baby starts getting fussy and the man wakes up and hastily starts searching around in his bag. He mumbles about a milk bottle, but doesn\'t seem to find what he\'s searching for.');
  scene.text('You turn to him. "Uhm, do you need help?"');
  scene.text('He looks up at you. "Unless you happen to have a bottle of milk with you, then no."');
  if (((s as any).tits ?? 0) >= 4) {
    scene.text('He looks around to see if the bottle fell out somewhere nearby. Glancing at your large breasts for a moment, he frowns before he continues searching.');
  }
  if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).pcs_inhib ?? 0) >= 30) {
    scene.actions([
      { label: 'Offer to breastfeed the baby', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/breastfeeding/father_with_baby_train.jpg');
    scene.text('You lean in to whisper in the man\'s ear. "I don\'t have a bottle, but I can feed the little one in a different way."');
    scene.text('You place a hand on one of your breasts, drawing the man\'s attention.');
    if (((s as any).vidage ?? 0) <= 16) {
      scene.text('He raises an eyebrow as he looks you up and down. "Sorry, but you look a little too young to be able to do that."');
      scene.text('You\'re about to protest when he suddenly finds the missing bottle and focuses his attention on feeding the baby.');
      scene.text('With nothing else to say, you just leave him to it.');
      scene.actions([
        { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      if (((s as any).vidage ?? 0) > 16  &&  ((s as any).vidage ?? 0) < 20) {
        scene.text('He raises an eyebrow as he looks you up and down. "Are you not a little young to be lactating?"');
        scene.text('You smile. "I might look young, but I assure you that I do have breast milk. Do you still want me to help you?"');
        if (((s as any).tits ?? 0) < 3) {
          scene.text('He looks at your small breasts and frowns. "Uh, no thank you."');
          scene.text('Feeling a little insulted, you\'re about to protest when he suddenly finds the missing bottle and focuses his attention on feeding the baby.');
          scene.text('With nothing else to say, you just leave him to it.');
          scene.actions([
            { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        } else {
          if (((s as any).tits ?? 0) === 3) {
            scene.text('He looks at your average sized breasts and appears to consider it. "Are you sure?"');
            scene.actions([
              { label: 'Yes', goto: ['train_events', 'breastfeed1'] },
            ]);
          } else {
            if (((s as any).tits ?? 0) === 4  ||  ((s as any).tits ?? 0) === 5) {
              scene.text('You see a small smile on his lips as he looks at your large breasts. "That would be very helpful, Miss."');
              scene.actions([
                { label: 'Lift your top', goto: ['train_events', 'breastfeed1'] },
              ]);
            } else {
              scene.text('He can\'t take his eyes off your enormous breasts. "Oh, that would… uh, be very helpful, Miss."');
              scene.actions([
                { label: 'Lift your top', goto: ['train_events', 'breastfeed1'] },
              ]);
            }
          }
        }
      } else {
        if (((s as any).tits ?? 0) < 3) {
          scene.text('He looks at your small breasts and frowns. "Uh, no thank you."');
          scene.text('Feeling a little insulted, you\'re about to protest when he suddenly finds the missing bottle and focuses his attention on feeding the baby.');
          scene.text('With nothing else to say, you just leave him to it.');
          scene.actions([
            { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        } else {
          if (((s as any).tits ?? 0) === 3) {
            scene.text('He looks at your average sized breasts and appears to consider it. "Are you sure?"');
            scene.actions([
              { label: 'Yes', goto: ['train_events', 'breastfeed1'] },
            ]);
          } else {
            if (((s as any).tits ?? 0) === 4  ||  ((s as any).tits ?? 0) === 5) {
              scene.text('You see a small smile on his lips as he looks at your large breasts. "That would be very helpful, Miss."');
              scene.actions([
                { label: 'Lift your top', goto: ['train_events', 'breastfeed1'] },
              ]);
            } else {
              scene.text('He can\'t take his eyes off your enormous breasts. "Oh, that would… uh, be very helpful, Miss."');
              scene.actions([
                { label: 'Lift your top', goto: ['train_events', 'breastfeed1'] },
              ]);
            }
          }
        }
      }
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Just watch', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/breastfeeding/train_breastfeeding.mp4');
    scene.text('You continue to watch the man search for the missing bottle before he finally gives up. "Damn it! I didn\'t want to wake her, but the little one needs fed."');
    scene.text('He leans over and gently shakes the sleeping woman sitting across from you. "Darling, darling. Wake up."');
    scene.text('The woman stirs from her sleep. "Wha-? What is it?"');
    scene.text('"Sorry to wake you darling, but I think we left the little one\'s bottle in the house."');
    scene.text('"Give him here then," she mumbles and holds her arms out.');
    scene.text('Taking hold of the baby, she lifts her top to reveal one of her large breasts before lifting the baby close and letting it latch on.');
    scene.text('The man asks if everything is okay and she nods before leaning her head back and closing her eyes.');
    scene.text('You decide to leave the couple in peace for the rest of the journey.');
    scene.actions([
      { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterBreastfeed1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/train/breastfeeding/train_breastfeeding.mp4');
  scene.text('You lift your top up to reveal one of your breasts before the man hands you the baby. He blushes slightly before looking away.');
  if (((s as any).tits ?? 0) >= 5) {
    scene.text('However, you do catch him occasionally sneeking a glance at your large breasts when he thinks you aren\'t looking.');
  }
  if (((s as any).pcs_firstbabybreastfeeding ?? 0) <= 0) {
    scene.text('You look nervously at the baby as you guide its mouth to your awaiting nipple. You\'ve never breastfed a baby before, so you\'re not sure if this will even work.');
    scene.text('The baby\'s lips lips brush over your areola before you feel them latch onto your nipple and start eagerly sucking.');
    scene.text('You let out a soft moan as a tingling sensation flows through your breast.');
    scene.text('The man asks if everything is okay and you hastily nod before leaning back in your seat and closing your eyes.');
  } else {
    scene.text('You get yourself into a comfortable position before you guide the baby\'s mouth to your awaiting nipple.');
    scene.text('It quickly latches on and starts eagerly sucking. You close your eyes and start softly humming as the familiar tingling sensation in your breast lets you know that you\'re about to start lactating.');
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).temp_var = qspFunc(s, 'lact_lib', '$get_breastmilk_time', 2, 80);
    scene.img('images/locations/shared/train/breastfeeding/train_breastfeeding.mp4');
    if (((s as any).temp_var ?? 0) > 15) {
      (s as any).milkedvolume = qspFunc(s, 'lact_lib', '$get_breastmilk', 2, 15);
      scene.text('When you open your eyes again, you look down and see the baby still suckling away before it suddenly unlatches on its own and lets out a quiet whimper.');
      scene.text('You swap breasts and try again, but the baby unlatches again before getting a proper feed.');
      scene.text('You hand the baby back over to the man before covering yourself back up. "Sorry, but I don\'t think he got enough."');
      if (((s as any).milkedvolume ?? 0) >= 50000) {
        scene.text('The man nods and gives you a small smile. "This will at least see him through the journey. Thanks."');
      } else {
        scene.text('The man nods, but seems disappointed. "Damn, he\'s still hungry. I\'ll need to wake my wife up to finish feeding him. I\'d hoped she\'d be able to spend the journey resting."');
        qspCall(s, 'mood', 'lower', 'small');
      }
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      (s as any).milkedvolume = qspFunc(s, 'lact_lib', '$get_breastmilk', 2, ((s as any).temp_var ?? 0));
      scene.text('When you open your eyes again, you look down and see the baby still peacefully suckling your nipple while grasping your breast in its hand.');
      if (((s as any).pcs_firstbabybreastfeeding ?? 0) <= 0) {
        scene.text('Despite it only being your first time, breastfeeding feels very relaxing in a manner that you\'ve never experienced until now.');
      }
      // TODO-QSP: dynamic text: The baby drinks from you for at least <<temp_var>> minutes before you look up at...
      scene.text(`The baby drinks from you for at least ${((s as any).temp_var ?? 0)} minutes before you look up at the father.`);
      scene.text('He smiles and nods as you feel the suckling start to ease. You look down and see that the baby is now peacefully sleeping.');
      scene.text('"I think he\'s done," you whisper as you gently hand the baby back over and cover yourself up.');
      scene.text('The man quietly thanks you for your help before settling down with his son for the rest of the journey.');
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterWeed(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/pavplat.jpg');
  scene.text('After you buy your ticket, you are told that you have just missed the train. A little miffed at this, you take a seat on one of the benches on the platform to wait for the next train to arrive.');
  scene.actions([
    { label: 'A man approaches you', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/weed.jpg');
    scene.text('Only a few minutes have passed when you hear someone walk up behind you and stop. You turn to look and see a young man standing there smiling at you while holding up a self-rolled cigarette that looks suspiciously like a joint…');
    scene.text('The guy doesn\'t seem too concerned about anybody catching him and focuses entirely on you.');
    scene.text('"Hey beautiful, I couldn\'t help but notice you sitting here all by yourself. Guess you missed the train too, huh?"');
    scene.text('He looks around, as if he only just noticed that he\'s walking around a public place with a joint in his hand, then leans down. "How about we blaze one while we wait?"');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/pavplat.jpg');
    scene.text('You have no idea what could be in it and have no intention of being caught out in the open with marijuana either, so you shake your head. "No thanks."');
    scene.text('He shrugs and steps away. "Alright, just trying to be friendly. It\'s your loss."');
    scene.text('He wanders around before another young woman comes down to the platform and he approaches her, seemingly to make her the same offer. Unlike you, she agrees and they smoke the joint together.');
    scene.text('Before long, the two of them sneak off across the tracks and disappear, but come rushing back, clothes out of place and hair disheveled, when the train arrives. It isn\'t hard to guess what they were doing to kill the time.');
    scene.actions([
      { label: 'Board the train to the city', handler: (st: GameState) => {
    ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'pavlovsk', 'center');
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/cityplat.jpg');
    // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the train stops at the St. Pet...
    scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the train stops at the St. Petersburg city center station. The large office blocks and shopping centers fill your view. This is the train's final destination.`);
    scene.actions([
      { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['train_incidental', 'events'] }]);
    }
  }, goto: ['train', 'center'] },
    ]);
  } },
    ]);
  } },
      { label: 'Smoke with him', handler: (st: GameState) => {
    (s as any).pcs_horny = 0;
    qspCall(s, 'drugs', 'joint', 1);
    scene.img('images/locations/shared/train/sex/weedsmoke.jpg');
    scene.text('You smile and nod before taking the joint from him - you only live once and it\'s as good a pastime as any. He lights it as you take a long slow drag off it and hold it in, feeling it in your lungs… until you start coughing, causing him to chuckle.');
    scene.text('You feel the relaxing effect almost at once, your head feeling both lighter and heavier as your mind slows down, but you notice a slightly odd taste to the smoke that you can\'t quite place…');
    scene.text('You pass it back and forth with him, chatting idly as you smoke, and as you do, you start to feel aroused: Your nipples harden, your pussy gets wet and you feel so wound up that you have to actively keep your hands in check to prevent yourself from masturbating out in the open.');
    scene.text('One thing you know for sure even in your current state: Marijuana isn\'t supposed to have this effect…');
    scene.text('You look at your smoking buddy. "What else was in that joint?!"');
    scene.text('"XTC," he responds with hesitation, a lazy smile on his face. "It feels great, right?" He grabs you by the hand and pulls you up along with him. "Come on, let\'s go have some fun before the train arrives. I know you\'re just as horny as I am."');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/pavplat.jpg');
    scene.text('You still have enough presence of mind to know this is a bad idea, so you shake your head. "No thanks."');
    scene.text('He shrugs and steps away. "Alright, just trying to be friendly. It\'s your loss."');
    scene.text('He wanders around before another young woman comes down to the platform and he approaches her, seemingly to make her the same offer. Unlike you, she agrees and they smoke the joint together.');
    scene.text('Before long, the two of them sneak off across the tracks and disappear, but come rushing back, clothes out of place and hair disheveled, when the train arrives. It isn\'t hard to guess what they were doing to kill the time. A part of you wishes you had taken him up on the offer.');
    scene.actions([
      { label: 'Board the train to the city', handler: (st: GameState) => {
    ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'pavlovsk', 'center');
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/cityplat.jpg');
    // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the train stops at the St. Pet...
    scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the train stops at the St. Petersburg city center station. The large office blocks and shopping centers fill your view. This is the train's final destination.`);
    scene.actions([
      { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['train_incidental', 'events'] }]);
    }
  }, goto: ['train', 'center'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go with him', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/weedhorny.jpg');
    scene.text('If you were simply horny, you might not have accompanied him, but the XTC has fully taken effect by now. Your mind is reeling, and you feel like you can trust the guy who just drugged you, so you go with him, looking forward to some \'fun\'.');
    scene.text('He leads you across the tracks to the less-used side of the platform and takes you behind one of the roofed waiting areas. Once there, he starts kissing you and pulling your top aside enough to bare your breasts, squeezing and caressing them as you make out. You groan into his mouth in response.');
    scene.text('You\'re turned on beyond reason and badly want to fuck him, or anybody else, as long as you just get to have a cock inside you. The XTC tells you that he\'s a great guy, that you can feel safe with him, that nothing you do here will backfire.');
    scene.text('You undo his pants and pull out his cock, stroking it with one hand while the other rubs your pussy through your clothes.');
    qspCall(s, 'npcgeneratec', '', 0, 'Stoner', Math.floor(Math.random() * 7) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'arousal', 'foreplay', 5, 'unknown');
    scene.actions([
      { label: 'Suck him', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/weedbj.jpg');
    // TODO-QSP: dynamic text: He gently pushes you down, and that's all the encouragement you need. You squat ...
    scene.text(`He gently pushes you down, and that's all the encouragement you need. You squat down in front of him before taking his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your mouth and sucking it. Your tongue is giving every bit of his cock it can reach its attention, and you bob your head back and forth, your ${((s as any).pc_desc ?? 0)?.['lips']} lips wrapped tightly around his shaft.`);
    scene.text('You take him as deep into your mouth as you can, keeping him there until you start to gag and have to come up for air. After two heavy breaths to recover, you take him inside again, now rapidly moving your head, sucking and deepthroating him for all you\'re worth.');
    qspCall(s, 'arousal', 'bj', 5, 'deepthroat', 'unknown');
    scene.actions([
      { label: 'Fuck him', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/weedvag.jpg');
    scene.text('He\'s having the time of his life, but all your blowjob does is make you hornier, and you can\'t take it any longer. You start removing your clothes bit by bit while you keep blowing him, until every item below your waist is removed. Once your pussy and ass are bare, you pull him down and get him to lie on his back.');
    // TODO-QSP: dynamic text: He's barely even touched the ground when you straddle him and lower yourself dow...
    scene.text(`He's barely even touched the ground when you straddle him and lower yourself down until you feel his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock stretch out your wet cunt. You moan out loud as you impale yourself on his shaft.`);
    scene.text('You lift yourself up and take his entire length faster this time. Then again, and again, riding him harder and faster.');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom', 'unknown');
    scene.actions([
      { label: 'Take his cum', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/weedcum.jpg');
    scene.text('You give him the fuck of a lifetime, feeling your orgasm approaching fast, so close, so very close… but he lifts you off and quickly stands up. "I\'m about to cum!"');
    scene.text('You have half a mind to say the same, but are too turned on to speak. You squat down in front of him again and start jerking him off as you open your mouth and stick out your tongue. It only takes a few seconds before he shoots most of his load into your mouth, with a few stray spurts landing on your chin.');
    scene.text('With your mouth still open, you show him his cum on your tongue before you swallow it down, then start sucking his cock again. You feel him getting hard again in your mouth and are already looking forward to another go so you can have your own orgasm.');
    scene.text('That\'s when you hear the train coming. Without another look at you, he quickly pulls up his pants and rushes over to the train as it comes to a stop.');
    scene.text('You hurriedly get dressed as well and then rush after him to get on the train. You make it just in time - the doors close almost as soon as you\'re inside.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', 'Stoner');
    qspCall(s, 'cum_call', 'mouth_swallow', 'Stoner');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Board the train to the city', handler: (st: GameState) => {
    ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'pavlovsk', 'center');
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/ride.jpg');
    scene.text('You look around, but you don\'t see the young man. You go looking for him, hoping to continue what you started and deal with your overwhelming horniness, but after checking the entire train without seeing a hint of him, you give up and find a seat.');
    // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the train stops at the St. Pet...
    scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the train stops at the St. Petersburg city center station. The large office blocks and shopping centers fill your view. This is the train's final destination.`);
    scene.actions([
      { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['train_incidental', 'events'] }]);
    }
  }, goto: ['train', 'center'] },
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

function enterPrivate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/ride.jpg');
  scene.text('You board the train and walk past several of the private compartments on your way to the general seating area.');
  scene.actions([
    { label: 'Find a seat', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/ride.jpg');
    scene.text('As you\'re walking past the open door of one of the private compartments, you hear a man\'s voice call out to you. "Hello there, young lady! Would you care to join me?"');
    scene.text('You stop and look inside, finding a clean-shaven man with a select few wrinkles that accentuate his angular features; you estimate that he\'s in his late thirties or early forties. The expensive suit he\'s wearing and the hints of cologne tickling your nose speak volumes about his wealth, and his self-confident, even smug expression tells the rest of the story.');
    scene.text('He motions for you to sit with him. "It\'s alright, there\'s plenty of room in here. Why don\'t you come in and close the door?"');
    scene.text('You hesitate - he\'s undressing you with his eyes and not even trying to hide it, so you doubt that all he wants is a conversation partner.');
    // TODO-QSP: dynamic text: When he notices you pause, he pulls <<$func('money', 'string_profit', 500)>> out...
    scene.text(`When he notices you pause, he pulls ${qspFunc(s, 'money', 'string_profit', 500)} out of his wallet and puts it on the seat next to him. "If you come in and close the door, we can have a very enjoyable trip together… and you can get off with a little pocket money."`);
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/ride2.jpg');
    scene.text('You shake your head indignantly. "Fuck you, I\'m no whore! Who do you think you are?!"');
    scene.text('You don\'t give him time to respond before you walk away and take a seat in the general seating area.');
    scene.text('You end up talking to some of your fellow passengers and share the story with them.');
    scene.text('They seem shocked and speculate that only a crook would be insolent enough to make such an offer to a young lady such as yourself.');
    scene.actions([
      { label: 'Continue journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Accept his offer', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/ridebj.jpg');
    qspCall(s, 'npcgeneratec', '', 0, 'Guy on train', Math.floor(Math.random() * 12) + 34);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    scene.text('You bite your lower lip before you step inside, close the door behind you and pull the privacy blinds down. When you turn back to him, you see that he already has his cock out and is looking at you with a strange, self-satisfied smile.');
    // TODO-QSP: dynamic text: Unfazed by his boldness, you kneel down in front of him and lick up and down his...
    scene.text(`Unfazed by his boldness, you kneel down in front of him and lick up and down his length a few times before you take his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your mouth, noticing that even it smells of that nice cologne.`);
    scene.text('Your tongue moves around the head as you suck his cock, and you start bobbing your head up and down while your hands take turns playing with his shaved balls. It\'s hard for you to decide whether you want to move slow and tease him or speed up to avoid getting caught, but what you\'re doing seems to be to his liking.');
    scene.text('"Good girl," he whispers. "I knew you could suck cock as soon as I saw you."');
    scene.text('His praise causes you to smile a little around his cock, and you take him a little deeper in response.');
    qspCall(s, 'arousal', 'bj', (-10), 'prostitution', 'sub', 'unknown');
    qspCall(s, 'dinSex', 'std_trigger_oral');
    scene.actions([
      { label: 'First stop', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/ridevag.jpg');
    scene.text('He enjoys your blowjob until the train arrives at its first stop, even opening the window blinds a little to look outside while you continue sucking him off, expecting somebody to find you in this position at any moment.');
    // TODO-QSP: dynamic text: The train leaves the station without incident however, and at that point, the ma...
    scene.text(`The train leaves the station without incident however, and at that point, the man motions for you to stop and get up with him. He turns you around and bends you over, pulling your clothes aside just enough to expose your pussy which, by this point, is dripping wet from the immense thrill of your risky actions. In one smooth motion, his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock is inside you, the full length buried to the hilt, the feeling so intense that you have to stop yourself from moaning too loud.`);
    scene.text('He\'s not gentle with you by any means, but the truth is that you wouldn\'t have wanted gentle "love-making" in this situation. All it would take would be one curious passenger brave enough to peek inside to expose you as the slut you are, but that\'s what makes it so wonderful, so depraved and exciting, and it is exactly why, at that moment, you want to be fucked hard, and he\'s more than happy to give you the pounding you crave.');
    scene.text('The man keeps going for a while until he starts breathing harder. You faintly notice that the train is slowing down and coming to a halt. People are getting on and off the train and any one of them could discover you at any moment, but you can\'t think straight and your lover chooses this particular moment of half-awareness to stop and lay you down on the seat.');
    qspCall(s, 'arousal', 'vaginal', (-15), 'prostitution', 'sub', 'unknown');
    scene.actions([
      { label: 'Second stop', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/rideanal.jpg');
    // TODO-QSP: dynamic text: Once he has you lying on your back, bedded on dusty seat cushions with your neth...
    scene.text(`Once he has you lying on your back, bedded on dusty seat cushions with your nether parts fully exposed to him and anybody who might enter, he moves up and slips his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your ass without warning. It enters surprisingly easily, and even though you are unprepared, you manage to relax enough to avoid any pain.`);
    scene.text('It certainly helps that he\'s taking it slow, giving you plenty of time to adjust to his cock as your mind races to comprehend how a simple train ride ended up with you having anal sex with a complete stranger!');
    scene.text('You can barely contain your moans as he goes a little deeper and a little faster, but your ass is too much for him and he can\'t last much longer. You feel the first spurt of cum enter your ass a second later, and as he continues to cum, he pulls out of you.');
    qspCall(s, 'arousal', 'anal', (-5), 'prostitution', 'sub', 'unknown');
    qspCall(s, 'dinSex', 'std_trigger');
    scene.actions([
      { label: 'Finished', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 500);
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 0, '', '', 20);
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 0, '', '', 20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/sex/ridecum.jpg');
    // TODO-QSP: dynamic text: As he does, several spurts shoot all over your ass, and you can feel more of it ...
    scene.text(`As he does, several spurts shoot all over your ass, and you can feel more of it leaking out of your gaping anus. With a final grunt and spurt, he sits down opposite you, giving you and the state he left you in an appreciative look before he puts his cock away and hands you the ${qspFunc(s, 'money', 'string_profit', 500)}.`);
    scene.text('He then simply pulls out a newspaper and starts reading it. The switch from ravaging your asshole to perusal is so sudden that you\'re confused for a moment. You soon realize, however, that he really is no longer paying attention to you, so you quickly get up and get yourself cleaned up.');
    scene.actions([
      { label: 'Your stop', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/pantyup.mp4');
    scene.text('Once you\'re dressed and mostly cleaned up, you sit down and quietly study the man you had sex with, who seems content to spend the rest of the journey in silence and feigned obliviousness to your presence.');
    scene.text('After a while, you pull out your phone and amuse yourself with it until the train finally reaches your destination.');
    scene.text('"Well, this is my stop," you tell him.');
    scene.text('He looks up from his newspaper. "I wish you a safe trip. And thank you for making this ride a bit less dull," he adds with a wink before returning to the headlines.');
    scene.text('You leave the compartment, the strange and naughty event fresh on your mind as you make your way to the exit.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get off the train', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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

function enterGopnik(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/train/ride3.jpg');
  scene.text('You\'re sitting in an empty seat by the window, lost in thought as others board the train. A gopnik boy suddenly sits down next to you, but you try to ignore him and keep staring outside.');
  scene.text('Unfazed, he gives you a once-over, a lewd grin you only see from the corner of your eye forming on his face as he leans in close and puts his arm around you.');
  scene.text('You turn your head to tell him off, but your mouth is immediately covered by his. Not content with just kissing you, the his hand starts roaming across your breasts.');
  scene.actions([
    { label: 'Stop him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/ride2.jpg');
    scene.text('After the immediate shock has passed, you push him away, but that doesn\'t deter him in the slightest and he immediately tries to kiss and grope you again.');
    scene.text('You push him off once more, then get up and move to another seat next to a woman who nods at you sympathetically and shoots the gopnik a nasty look. With nowhere to sit where he could harass you, the boy looks at you for a moment, then shrugs and looks out the window.');
    scene.text('The rest of the ride is fairly uneventful; you spend most of it chatting with your seatmate about men who molest women on trains.');
    scene.actions([
      { label: 'Continue journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Go with it', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'npcgeneratec', '', 0, 'Gopnik', Math.floor(Math.random() * 8) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    scene.img('images/locations/shared/train/sex/gopnik.jpg');
    scene.text('You return his kiss and allow him to paw at your body. You hear more than a few people comment on the two of you making out; several seem to be of the opinion that this is not the place to show this level of affection. Instead of deterring you however, all that does is tickle your rebellious streak and make you feel even more brazen.');
    scene.text('Once the train stops at your destination, you get off with him, but you barely make it onto the platform before he pulls you into another kiss. He\'s actually a pretty good kisser, and while his pawing hands might drive most innocent girls away, he seems to mostly know where he has to grope too.');
    scene.text('Breaking the kiss and finding you breathing as heavily as him, he smiles. "Let\'s go for a walk; you know, somewhere a little more private…"');
    qspCall(s, 'arousal', 'foreplay', 5, 'unknown', 'exhibitionism');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/train/sex/gopnik.jpg');
    scene.text('You shake your head. "Sorry, but I don\'t have time. It was fun, though. The trip was a lot more exciting than I expected!"');
    scene.text('He looks a little disappointed, so you comfortingly pat his cheek. "Maybe I\'ll see you again sometime, and we can pick up where we left off…"');
    scene.text('You lean in and give him a long, slow kiss goodbye, then bounce away and head off the platform. You hear him mutter about not getting more action, but you don\'t really care.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/gopnikwalk.jpg');
    scene.text('He takes you to the skyway over the tracks, holding your hand and pointing out different buildings and things. You already know almost everything he\'s talking about, but you let him talk for one very simple reason: he\'s surprisingly charming and sweet now, compared to the pawing weirdo you met on the train.');
    scene.text('He throws a lot of compliments your way, telling you how "the sun pales in comparison to your beauty" and the like. You consider telling him he really doesn\'t have to try this hard, but some funny exaggerations aside, you genuinely enjoy flirting with him and let him go on.');
    scene.text('Once the train has left the station and all who disembarked with you are gone, he carefully inspects your surroundings to see if anybody else is around. When he doesn\'t see anyone, he stops and turns towards you. Back to his train persona, he decides to take this to the next level or three, unbuttoning his pants and pulling them down to his knees. His cock springs free, already hard.');
    scene.actions([
      { label: 'Refuse and leave', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You\'re already shaking your head and laughing before he even has his pants down. "Do you think I\'m a slut or something? I\'m not gonna do something with you just because you gave me some compliments, especially not out in the open like this!" You turn and start walking away. "I thought you were a nice guy, but I guess I was wrong."');
    scene.text('He\'s anything but pleased by your response as e tries to pull his pants back up. "You fucking tease! Get back here!"');
    scene.text('You exploit his current struggle with his pants to run back down the stairs to the platform and into the station before he can follow.');
    scene.actions([
      { label: 'Return to the station', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Blow him', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/gopnikbj.jpg');
    // TODO-QSP: dynamic text: The back and forth between him being nice and an ass is weird, the place is wide...
    scene.text(`The back and forth between him being nice and an ass is weird, the place is wide open, you barely know him - literally everything about this should discourage you from going near his crotch, and yet… You find yourself squatting down in front of him and taking his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your mouth, your hand stroking his hard shaft as you roll your tongue around the head of his cock; you jerk his cock in tune with the bobs of your head, back and forth along his length, your ${((s as any).pc_desc ?? 0)?.['lips']} lips lips wrapped tightly around him.`);
    scene.text('The idea that you could get caught at any moment is making this a lot more arousing than it should be. That, and the hard cock you\'re sucking with passion.');
    qspCall(s, 'arousal', 'bj', 10, 'exhibitionism', 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him fuck you', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/gopnikvag.jpg');
    scene.text('You don\'t know how many minutes pass as you suck his dick, but somewhere along the way, you worm your fingers into your panties and start rubbing your clit, feeling a lot more turned on by sucking his cock than you expected. You don\'t know if he always planned on more than just a blowjob or if he sensed that you were getting horny and influenceable, but he eventually has you stop and stand up before pulling your clothes aside enough to bare your ass and expose your glistening wet pussy.');
    // TODO-QSP: dynamic text: He meets no resistance when he turns you around and bends you over up against th...
    scene.text(`He meets no resistance when he turns you around and bends you over up against the side of the walkway railings; by the time he's lined his cock up with your pussy, you're looking back at him with eager anticipation. Impatient as you expected him to be, he slides his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your wet pussy.`);
    scene.text('He has no trouble at all bottoming out on the first thrust and, hearing your moans and feeling how wet you are, he starts fucking you hard right away. His hips slap against your ass cheeks with every thrust as he reaches up and grabs your shoulder with one hand to keep you from moving away, furiously fucking your pussy and putting you into a state of ecstatic bliss right there on the skywalk.');
    qspCall(s, 'arousal', 'vaginal', 10, 'exhibitionism', 'rough', 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Have anal sex with him', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/gopnikanal.jpg');
    scene.text('When another train rolls into the station, he curses and pulls out of you before hastily tucking his cock back into his pants. Without waiting for you to do the same, he grabs your hand and pulls you along with him; you manage to cover yourself to some extent, but you know your ass is still partially showing.');
    scene.text('He rushes down one of the access ramps of the skywalk to an older platform of the station that now serves as a storage siding. As soon as you turn the corner and are no longer visible, he pushes you up against the graffiti-covered wall, pulls your clothes aside again and shoves his cock back into your pussy, fucking you like you hadn\'t been interrupted.');
    scene.text('As you try to stifle your moans so passersby on the walkway won\'t hear you, he leans forward and seductively whispers in your ear. "I\'m going to fuck that tight little ass of yours…"');
    scene.text('Without waiting for a response from you, he pulls out once more and slides his cock up your ass. You gasp in pain, but it turns into a moan of pleasure along the way. You don\'t have to consciously relax your asshole to enjoy this at this point; you\'re so turned on at the moment that you don\'t really care where he sticks his cock so long as he just keeps fucking you.');
    qspCall(s, 'arousal', 'vaginal', 10, 'exhibitionism', 'unknown', 'rough');
    qspCall(s, 'arousal', 'anal', (-10), 'exhibitionism', 'unknown', 'rough');
    scene.text('Had anybody walked by and heard or seen you right now, you wouldn\'t have even cared.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take his cum', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/sex/gopnikcum.jpg');
    scene.text('He suddenly groans as the first spurt of cum shoots into your ass before he pulls out and you feel his warm cum splattering all over your ass cheeks. When he finishes, he wipes off the last few drops on your ass before pulling his pants up. He then helpfully offers you a tissue.');
    // TODO-QSP: dynamic text: As you clean yourself up, he breaks into a chuckle as he realizes something: "By...
    scene.text(`As you clean yourself up, he breaks into a chuckle as he realizes something: "By the way, I'm ${((s as any).boydesc ?? 0)}."`);
    // TODO-QSP: dynamic text: You can't help but laugh. "<<$pcs_nickname>>, pleasure to meet you," you say in ...
    scene.text(`You can't help but laugh. "${((s as any).pcs_nickname ?? 0)}, pleasure to meet you," you say in mock formality and even offer him your hand. "A real pleasure…" you add with a suggestive smile.`);
    scene.text('He feigns seriousness as he shakes the offered hand, but can\'t keep himself from grinning.');
    // TODO-QSP: dynamic text: "It was nice meeting you as well, <<$pcs_nickname>>. Maybe I can call you someti...
    scene.text(`"It was nice meeting you as well, ${((s as any).pcs_nickname ?? 0)}. Maybe I can call you sometime?" he asks hopefully.`);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'butt', 'Gopnik');
    qspCall(s, 'cum_call', 'anus', 'Gopnik');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Give him your number', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 4) + 0))) {
      qspCall(s, 'lover', 'add_boyfriend', ((s as any).boy ?? 0));
      (s as any).stopboy = 0;
    }
    scene.text('"I\'d like that," you tell him and give him your phone number. He waits until you\'re more or less presentable again, then walks you back up to the skywalk where you two part ways.');
    scene.actions([
      { label: 'Return to the station', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Don\'t give him your number', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You shake your head. "Look, <<$boydesc>>. I had fun, but I'm not looking for any...
    scene.text(`You shake your head. "Look, ${((s as any).boydesc ?? 0)}. I had fun, but I'm not looking for anything more than that right now. Maybe we'll run into each other on the train again or something sometime?"`);
    scene.text('He shrugs like he doesn\'t care, but the look he gives you tells you that he\'s a little pissed. "Sure, whatever. See you around."');
    scene.text('With that, he turns and walks away, leaving you to finish getting your clothes back in order.');
    scene.actions([
      { label: 'Return to the station', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'events':
      enterEvents(s, scene);
      break;
    case 'oldman':
      enterOldman(s, scene);
      break;
    case 'fit':
      enterFit(s, scene);
      break;
    case 'young':
      enterYoung(s, scene);
      break;
    case 'breastfeed':
      enterBreastfeed(s, scene);
      break;
    case 'breastfeed1':
      enterBreastfeed1(s, scene);
      break;
    case 'weed':
      enterWeed(s, scene);
      break;
    case 'private':
      enterPrivate(s, scene);
      break;
    case 'Gopnik':
      enterGopnik(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const train_events: LocationDef = {
  name: 'train_events',
  title: 'You choose an empty seat by the window and look outside, los',
  region: 'other',
  enter: enter,
};
