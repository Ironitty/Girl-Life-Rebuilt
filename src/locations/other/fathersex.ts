import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFatherblow1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_throat ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  }
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim3_1.jpg');
  // TODO-QSP: dynamic text: After he plays with your ass for a little while, your stepfather suddenly pulls ...
  scene.text(`After he plays with your ass for a little while, your stepfather suddenly pulls away from you. He quickly takes off his clothes, sits back in his chair and points down to his cock without saying a word. Not needing any more encouragement, you get down on your knees in front of him and open your mouth, taking most of his cock down your throat in one swift movement. Your stepfather lets out a moan of pleasure and throws back his head. "${((s as any).pcs_nickname ?? 0)}, you have a minute to lubricate my cock properly. You know where it's going to go next." Getting giddy with excitement you realize it's in your best interest to do as he says and continue to suck his cock with increased vigor, spreading as much saliva on it as you can.`);
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow him to your parents\' bedroom', goto: ['fathersex', 'fatherSex_act1'] },
    { label: 'Crawl on top of him', goto: ['fathersex', 'fatherSex_act2'] },
  ]);
  scene.build();
}

function enterFatherblow2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_throat ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  }
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim3_2.jpg');
  // TODO-QSP: dynamic text: Your stepfather suddenly pulls away from you. He quickly takes off his clothes, ...
  scene.text(`Your stepfather suddenly pulls away from you. He quickly takes off his clothes, sits back in his chair and points down to his cock without saying a word. Not needing any more encouragement, you get down on your knees in front of him and open your mouth, taking most of his cock down your throat in one swift movement. Your stepfather lets out a moan of pleasure and throws back his head. "${((s as any).pcs_nickname ?? 0)}, you have a minute to lubricate my dick properly, it's going in your ass after that." Getting giddy with excitement you realize it's in your best interest to do as he says and continue to suck his cock with increased vigor, spreading as much saliva on it as you can.`);
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow him to your parents\' bedroom', goto: ['fathersex', 'fatherSex_act1'] },
    { label: 'Crawl on top of him', goto: ['fathersex', 'fatherSex_act2'] },
  ]);
  scene.build();
}

function enterFatherblow3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_throat ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  }
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim14.jpg');
  scene.text('You enthusiastically suck your stepfather\'s hard cock. He pushes you to your limits, making you take a bit more of it down your throat with every thrust, all the while telling you what a great little cocksucker you are. You skillfully take most of it down your throat but struggle a bit with the last inch, and after a while he loses his patience. Grabbing you by the hair he lets out a loud groan and pulls your face into his groin, until you feel his balls on your chin and his pubic hair itching your nose. Realizing you can take it, he begins to move his hips and fucks your throat. He controls the pace at first, but after a while he releases his grip on your hair and lets you take over.');
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'He cums in your mouth', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A28', 1);
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim15.jpg');
    // TODO-QSP: dynamic text: As he roughly fucks your throat, you can tell he's getting close. Suddenly, he p...
    scene.text(`As he roughly fucks your throat, you can tell he's getting close. Suddenly, he pulls his cock out. "${((s as any).pcs_nickname ?? 0)} baby, stick out your tongue" he orders, and mere seconds later you feel jets of cum hitting your face. Some land on your tongue, some end up in your mouth. You swallow it all willingly, licking your lips and gently sucking the tip of his cock for a while until he tells you to stop.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFatherblow4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_throat ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  }
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim3_1.jpg');
  scene.text('Not needing any more encouragement, you get down on your knees in front of him and start to lick the tip of his cock as you look him in the eyes. "Does this make you feel good, Daddy?" you ask between licks. Then, deciding you have teased him enough, you take his cock in your mouth and diligently start to suck.');
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Deepthroat him', goto: ['fathersex', 'fatherblow3'] },
    { label: 'Follow him to your parents\' bedroom', goto: ['fathersex', 'fatherSex_act1'] },
    { label: 'Crawl on top of him', goto: ['fathersex', 'fatherSex_act2'] },
  ]);
  scene.build();
}

function enterFatherbend_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim1.jpg');
  // TODO-QSP: dynamic text: Your stepfather quietly mutters something to himself when he sees the butt plug ...
  scene.text(`Your stepfather quietly mutters something to himself when he sees the butt plug in your ass: "Oh ${((s as any).pcs_nickname ?? 0)}, you're such a good little slut." His fingers grasp the plug's base, and you can feel him shifting it around in your body, often tugging at it but not quite hard enough to make it come out. Besides: it would be difficult to relax your ass enough to take it out anyway, in your current position. You look back at him and say: "I know what you like, Daddy. I figured I would get myself ready for you."`);
  ((s as any).npc_had_sex ?? {})['A28'] = 1;
  qspCall(s, 'arousal', 'anal_dildo', 10, 'sub', 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to your parents\' bedroom with him', goto: ['fathersex', 'fathergotobedroom'] },
  ]);
  scene.build();
}

function enterFatherbend_2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim2.jpg');
  scene.text('Your stepfather chuckles appreciatively when you bend over and pull down your panties in one swift movement, providing him with a wonderful view of your bare ass. Not needing any more encouragement he reaches out for you immediately, going straight for your puckered sphincter. The rough callouses on his hand scratch your skin a bit as he begins rub his finger against your ass in earnest, but in a way it actually feels kind of nice.');
  ((s as any).npc_had_sex ?? {})['A28'] = 1;
  qspCall(s, 'arousal', 'anal_finger', 10, 'sub', 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck his cock', goto: ['fathersex', 'fatherblow1'] },
  ]);
  scene.build();
}

function enterFatherbend_3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim2_1.mp4');
  // TODO-QSP: dynamic text: Your stepfather chuckles appreciatively when you bend over and pull up your skir...
  scene.text(`Your stepfather chuckles appreciatively when you bend over and pull up your skirt, revealing your bare ass. "Wow ${((s as any).pcs_nickname ?? 0)}, you're not wearing any panties?"`);
  scene.text('Not needing any more encouragement he reaches out for you immediately, going straight for your puckered sphincter. The rough callouses on his hand scratch your skin a bit as he begins to rub his finger against your ass in earnest, but in a way it actually feels kind of nice.');
  ((s as any).npc_had_sex ?? {})['A28'] = 1;
  qspCall(s, 'arousal', 'anal_finger', 10, 'sub', 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck his cock', goto: ['fathersex', 'fatherblow1'] },
  ]);
  scene.build();
}

function enterFathergotobedroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/fahterim3.mp4');
  scene.text('You hop on the bed and drop to your hands and knees there, sticking your ass out as much as you can. Your stepfather smiles eagerly and continues where he left off: playing with your butt plug, pushing and pulling it in all directions. After a while constant teasing, stretching and tugging, you smile and look at him: "Daddy, maybe there is something else you could put in its place?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him remove the plug and show him your gape', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim9.jpg');
    // TODO-QSP: dynamic text: Your stepfather is very much on board with this idea, and his tugging on the plu...
    scene.text(`Your stepfather is very much on board with this idea, and his tugging on the plug increases. A few seconds later it comes out with a loud pop, and you feel the cool air of the room filling your rectum. Your stepfather is equally enthusiastic and intimidated by the size of your gape: "Wow ${((s as any).pcs_nickname ?? 0)}! That is one hugely stretched hole… how did you even do that?"`);
    scene.text('Knowing he is an ass man and probably has seen more than a few stretched sphincters in his days, you feel an odd sense of accomplishment. "I just want to make you feel good, Daddy…" you mutter, and he nods. "I know you do baby, and I know you will."');
    // TODO-QSP: dynamic text: He quickly takes off his clothes and scoots down next to you, his erect cock pok...
    scene.text(`He quickly takes off his clothes and scoots down next to you, his erect cock poking up like a flag mast. "Go on ${((s as any).pcs_nickname ?? 0)}, make Daddy feel good."`);
    qspCall(s, 'arousal', 'anal_dildo', 10, 'sub', 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim9.jpg');
    scene.text('You\'re so excited that you immediately get on top of him and gently gyrate your hips against his cock. You spit some saliva onto your fingers before reaching back and rubbing it over his rod. Then you rub his cock against your fairly loose asshole. His cock is big though. With a loud shuddering moan you slowly lower yourself onto his erect cock, taking about half of it in before pausing. "Just taking a second to get used to the size Daddy, your cock is too big for me to just slam down on right away," you apologize. "That\'s okay sweetie, take your time", he replies, still not believing what\'s happening. You gently bob your ass a bit, stimulating his cock while you mentally prepare yourself to take the rest in.');
    scene.text('Your stepfather was not expecting this at all, when he gave you the initiative. Nevertheless, he is delighted by your eagerness to please him and he puts his hands behind his head, content to let you do all the work. Not wanting to disappoint him you continue, and lower yourself onto his cock further and further until you feel his balls resting against your ass cheeks. "One more break, Daddy… it just feels so good", you whisper. He has his eyes closed by now, fully focused on the pleasure you\'re giving him. After a few seconds you decide you\'re ready and soon the room is filled with the sound of your butt cheeks enthusiastically slapping against his thighs, combined with your high-pitched moans. Before too long your stepfather puts his hands on your hips trying to slow you down, saying he\'s ready to cum.');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum on my ass cheeks', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', 'butt', 'A28', 1);
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim5.jpg');
    // TODO-QSP: dynamic text: Respecting your wishes, your stepfather pulls his rod out of your sphincter and ...
    scene.text(`Respecting your wishes, your stepfather pulls his rod out of your sphincter and shoots his load on your ass cheeks, moaning loudly. After a few moments, he regains his composure and slaps your ass playfully. "That was fun ${((s as any).pcs_nickname ?? 0)}, we should do it again some time."`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Cum all over my face', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', 'face', 'A28', 1);
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim12.jpg');
    scene.text('Your request only excites him even further. After a few furious thrusts he pulls out, pushes you on your back and begins to jerk off over your face. You feel the warm strands of cum landing on your face and you stick out your tongue to catch some of it. He takes a second to admire his artwork and then goes to clean himself up, leaving you alone in the room.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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

function enterFatherSexAct1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim4.jpg');
  // TODO-QSP: dynamic text: Just as you were getting into the groove of things, your stepfather gently but s...
  scene.text(`Just as you were getting into the groove of things, your stepfather gently but surely moves your head away from his groin and pulls you up by the shoulder. He gives you a playful slap on the ass and says "Alright ${((s as any).pcs_nickname ?? 0)}, time's up." You meekly nod. He takes you to their bedroom and unceremoniously throws you face-down onto the bed, immediately mounting you.`);
  // TODO-QSP: dynamic text: You know what he wants, and spread your ass cheeks with your hands to allow him ...
  scene.text(`You know what he wants, and spread your ass cheeks with your hands to allow him easier access. You quietly thank yourself for doing such a good job lubing him up when you feel his stiff cock press hard against your sphincter, working its way in. He lets you get used to the feeling at first, but gets impatient after a few seconds and roughly shoves the rest of his cock in. You scream and your asshole involuntarily tightens when he does, provoking a moan from him. "You like this, don't you ${((s as any).pcs_nickname ?? 0)}? You like it when I put my cock in your ass, I can feel your squeezing. Don't worry baby, I'll make you feel real good", he whispers into your ear as he begins to fuck your ass with long, slow thrusts.`);
  scene.text('His rougher than expected entry hurts a bit at first, but you know that feeling will soon pass. "I love it, Daddy. Just go slow for a moment please, you\'re so big", you whisper. Your stepfather grunts and takes pity on you, slowing down his thrusting for a little while. You bite down on the pillow and meekly suffer through it, and soon enough the pain starts to dissipate. "You okay sweetie?" he asks with some concern in his voice, noticing you\'re having a rough time with it. When you nod he tests you, slowly increasing the power in his thrusts, and really starts to pound your asshole when he doesn\'t notice any objections from you. Within seconds the room is filled with the sounds of flesh slapping against flesh, your high-pitched cries and his low groans. His balls do a nice job of stimulating your pussy as he roughly fucks you on the bed, making you feel all tingly on the inside.');
  (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
  qspCall(s, 'arousal', 'anal', 10, 'sub', 'incest');
  qspCall(s, 'stat', '');
  (s as any).fathercum = Math.floor(Math.random() * 2) + 1;
  if (((s as any).fathercum ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', 'anus', 'A28', 1);
    scene.text('The thrusting of your stepfather becomes more erratic and intense and suddenly you feel him bucking against you, his cock throbbing heavily inside you. You feel a pleasant warmth spreading. When he moves away from you and crashes down next to you on the bed, he tells you what a great buttslut you are with a satisfied grin on his face.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wink and get off the bed', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Ride daddy…', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/cowgirl/cowgirl_rub.mp4');
    scene.text('"I love you Daddy… Please I want your cock in my ass, fuck me harder than you fuck mom…"');
    scene.actions([
      { label: 'Daddy fill my ass!!!', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', 'anus', 'A28', 1);
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/creampieA${Math.floor(Math.random() * 2) + 1}.mp4`);
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'incest');
    qspCall(s, 'stat', '');
    scene.text('From his increasingly intense and erratic thrusts, you can tell your stepfather is about to cum.');
    scene.text('You feel a pleasant warmth spreading. When he moves away from you and crashes down next to you on the bed, he tells you what a great buttslut you are with a satisfied grin on his face.');
    scene.actions([
      { label: 'Dad wants your front door…', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/cowgirl/cowgirl_rub.mp4');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('But daddy, I\'m still a virgin…');
    } else {
      scene.text('Pound me daddy, all my holes are yours…');
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Hard pounding vag', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/dog2.mp4');
    scene.text('Your stepfather slams his cock in to you hard and deep, his unrelenting pounding making your tits bounce. Your moans coming out as half screams of pure pleasure. ');
    scene.actions([
      { label: 'Cum…', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', '', '', 'A28', 1);
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/cumshot/cum_cowgirl.mp4');
    qspCall(s, 'cuminsidereact', '');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'More… Cum together', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', '', '', 'A28', 1);
    if (((s as any).pcs_horny ?? 0) >= 100) {
      scene.img('images/shared/sex/cum/vagcreampie/creampie2.mp4');
      scene.text('For several minutes he pounds your pussy. As your pleasure mounts, you feel yourself close to climax, wrapping your legs around him to pull him deeper inside. Suddenly he moans and begins pumping his cum deep inside you groaning loudly as he fills you. ');
      qspCall(s, 'cuminsidereact', '');
      qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        { label: 'Clean him up with your lips', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim4_2.mp4');
    scene.text('Overcome with desire, you rub his cock against your lips, looking up at him as you tease his cock. "Let me clean that for you, Daddy" you say with a cute smile.');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Use your mouth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim4_3.mp4');
    // TODO-QSP: dynamic text: You feel so good that you take the tip of his cock in your mouth, and affectiona...
    scene.text(`You feel so good that you take the tip of his cock in your mouth, and affectionately begin to suck on it while looking him in the eye, rolling your tongue around the head a little. The act of adoration renders your stepfather speechless. You give him a moment to recuperate while you gently suck on his cock. Eventually he manages to say: "Wow ${((s as any).pcs_nickname ?? 0)}, that was amazing…", caressing your hair and watching as you slowly pull his cock from your mouth, smiling up at him. He then gathers his things and goes to the bathroom to clean up, leaving you alone in the room.`);
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'boyStat', 'A28');
      qspCall(s, 'cum_call', '', '', 'A28', 1);
      scene.img('images/shared/sex/cum/vagcreampie/creampie2.mp4');
      scene.text('For several minutes he pounds your pussy. As your pleasure mounts, you feel yourself close to climax, wrapping your legs around him to pull him deeper inside. Suddenly he moans and begins pumping his cum deep inside you groaning loudly as he fills you. ');
      qspCall(s, 'cuminsidereact', '');
      qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Clean him up with your lips', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim4_2.mp4');
    scene.text('Overcome with desire, you rub his cock against your lips, looking up at him as you tease him. "Let me clean that for you, Daddy" you say with a cute smile.');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Use your mouth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim4_3.mp4');
    // TODO-QSP: dynamic text: You feel so good that you take the tip of his cock in your mouth, and affectiona...
    scene.text(`You feel so good that you take the tip of his cock in your mouth, and affectionately begin to suck on it while looking him in the eye, rolling your tongue around the head a little. The act of adoration renders your stepfather speechless. You give him a moment to recuperate while you gently suck on his cock. Eventually he manages to say: "Wow ${((s as any).pcs_nickname ?? 0)}, that was amazing…", caressing your hair and watching as you slowly pull his cock from your mouth, smiling up at him. He then gathers his things and goes to the bathroom to clean up, leaving you alone in the room.`);
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'daddy wants more', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', '', '', 'A28', 1);
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/sex6.mp4');
    scene.text('Your dad presses you against the wall and starts pounding your pussy, thrusting his throbbing cock deep inside you.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/sex7.mp4');
    scene.text('For several minutes he pounds your pussy, your pleasure mounting as you feel yourself close to climax…');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'fuck me dad…', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/sex9.mp4');
    scene.text('"Tell me I fuck better than mom…" you moan as you feel your pleasure building, you wrap your legs around him to pull him deeper inside. Suddenly he moans thrusting his cock deep inside you, holding it there as he begins filling you with his seed. ');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', '', '', 'A28', 1);
    scene.img('images/locations/city/residential/sauna/sex/cumvaginal1.mp4');
    // TODO-QSP: dynamic text: With his cock deep inside you and between his moans and cum pumping deep inside ...
    scene.text(`With his cock deep inside you and between his moans and cum pumping deep inside you. your dad looks at you and says… "i love you ${((s as any).pcs_nickname ?? 0)}."`);
    qspCall(s, 'cuminsidereact', '');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Clean him up with your mouth', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/oral8.mp4');
    scene.text('Overcome with desire, you rub his cock against your lips, looking up at him as you tease him. "Let me clean that for you, Daddy" you say with a cute smile.');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Use your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum1,10.mp4');
    // TODO-QSP: dynamic text: You feel so good that you take the tip of his cock in your mouth, and affectiona...
    scene.text(`You feel so good that you take the tip of his cock in your mouth, and affectionately begin to suck on it while looking him in the eye. The act of adoration renders your stepfather speechless. You give him a moment to recuperate while you gently suck on his cock. Eventually he manages to say: "Wow ${((s as any).pcs_nickname ?? 0)}, that was amazing…", caressing your hair and watching as you slowly pull his cock from your mouth, smiling up at him. He then gathers his things and goes to the bathroom to clean up, leaving you alone in the room.`);
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
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
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'Hard pounding vag (virgin)', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/dog2.mp4');
    scene.text('Your stepfather slams his cock in to you hard and deep, his unrelenting pounding making your tits bounce. Your moans coming out as half screams of pure pleasure. ');
    scene.actions([
      { label: 'Cum…', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', '', '', 'A28', 1);
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/cumshot/cum_cowgirl.mp4');
    qspCall(s, 'cuminsidereact', '');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'More… Cum together', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', '', '', 'A28', 1);
    if (((s as any).pcs_horny ?? 0) >= 100) {
      scene.img('images/shared/sex/cum/vagcreampie/creampie2.mp4');
      scene.text('For several minutes he pounds your pussy. As your pleasure mounts, you feel yourself close to climax, wrapping your legs around him to pull him deeper inside. Suddenly he moans and begins pumping his cum deep inside you groaning loudly as he fills you. ');
      qspCall(s, 'cuminsidereact', '');
      qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        { label: 'Clean him up with your lips', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim4_2.mp4');
    scene.text('Overcome with desire, you rub his cock against your lips, looking up at him as you tease his cock. "Let me clean that for you, Daddy" you say with a cute smile.');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Use your mouth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim4_3.mp4');
    // TODO-QSP: dynamic text: You feel so good that you take the tip of his cock in your mouth, and affectiona...
    scene.text(`You feel so good that you take the tip of his cock in your mouth, and affectionately begin to suck on it while looking him in the eye, rolling your tongue around the head a little. The act of adoration renders your stepfather speechless. You give him a moment to recuperate while you gently suck on his cock. Eventually he manages to say: "Wow ${((s as any).pcs_nickname ?? 0)}, that was amazing…", caressing your hair and watching as you slowly pull his cock from your mouth, smiling up at him. He then gathers his things and goes to the bathroom to clean up, leaving you alone in the room.`);
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'boyStat', 'A28');
      qspCall(s, 'cum_call', '', '', 'A28', 1);
      scene.img('images/shared/sex/cum/vagcreampie/creampie2.mp4');
      scene.text('For several minutes he pounds your pussy. As your pleasure mounts, you feel yourself close to climax, wrapping your legs around him to pull him deeper inside. Suddenly he moans and begins pumping his cum deep inside you groaning loudly as he fills you. ');
      qspCall(s, 'cuminsidereact', '');
      qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Clean him up with your lips', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim4_2.mp4');
    scene.text('Overcome with desire, you rub his cock against your lips, looking up at him as you tease him. "Let me clean that for you, Daddy" you say with a cute smile.');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Use your mouth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim4_3.mp4');
    // TODO-QSP: dynamic text: You feel so good that you take the tip of his cock in your mouth, and affectiona...
    scene.text(`You feel so good that you take the tip of his cock in your mouth, and affectionately begin to suck on it while looking him in the eye, rolling your tongue around the head a little. The act of adoration renders your stepfather speechless. You give him a moment to recuperate while you gently suck on his cock. Eventually he manages to say: "Wow ${((s as any).pcs_nickname ?? 0)}, that was amazing…", caressing your hair and watching as you slowly pull his cock from your mouth, smiling up at him. He then gathers his things and goes to the bathroom to clean up, leaving you alone in the room.`);
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'daddy wants more', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', '', '', 'A28', 1);
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/sex6.mp4');
    scene.text('Your dad presses you against the wall and starts pounding your pussy, thrusting his throbbing cock deep inside you.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/sex7.mp4');
    scene.text('For several minutes he pounds your pussy, your pleasure mounting as you feel yourself close to climax…');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'fuck me dad…', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/sex9.mp4');
    scene.text('"Tell me I fuck better than mom…" you moan as you feel your pleasure building, you wrap your legs around him to pull him deeper inside. Suddenly he moans thrusting his cock deep inside you, holding it there as he begins filling you with his seed. ');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', '', '', 'A28', 1);
    scene.img('images/locations/city/residential/sauna/sex/cumvaginal1.mp4');
    // TODO-QSP: dynamic text: With his cock deep inside you and between his moans and cum pumping deep inside ...
    scene.text(`With his cock deep inside you and between his moans and cum pumping deep inside you. your dad looks at you and says… "i love you ${((s as any).pcs_nickname ?? 0)}."`);
    qspCall(s, 'cuminsidereact', '');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Clean him up with your mouth', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/oral8.mp4');
    scene.text('Overcome with desire, you rub his cock against your lips, looking up at him as you tease him. "Let me clean that for you, Daddy" you say with a cute smile.');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Use your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum1,10.mp4');
    // TODO-QSP: dynamic text: You feel so good that you take the tip of his cock in your mouth, and affectiona...
    scene.text(`You feel so good that you take the tip of his cock in your mouth, and affectionately begin to suck on it while looking him in the eye. The act of adoration renders your stepfather speechless. You give him a moment to recuperate while you gently suck on his cock. Eventually he manages to say: "Wow ${((s as any).pcs_nickname ?? 0)}, that was amazing…", caressing your hair and watching as you slowly pull his cock from your mouth, smiling up at him. He then gathers his things and goes to the bathroom to clean up, leaving you alone in the room.`);
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
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
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
        { label: 'Keep pounding asshole', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/dog2.mp4');
    scene.text('To keep your virginity safe, your stepfather slams his cock back in to your asshole hard and deep, his unrelenting pounding making your tits bounce. Your moans coming out as half screams of pure pleasure. ');
    scene.actions([
      { label: 'Cum…', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', 'anus', 'A28', 1);
    scene.img('images/pc/body/cum/cumanal/cumanal9.jpg');
    scene.text('You suddenly feel an intense warmth spreading inside you. Your stepfather pulls out his cock, and a slow trail of his cum slowly drips out of you.');
    scene.text('Spreading your ass cheeks with your hands, you give him a nice view of his load in your sphincter. Your stepfather is fascinated and watches his cum slowly drip down, giving your ass a few more slaps for good measure.');
    scene.text('When you think your asshole is finally gonna have some rest, your stepfather shoves his dick back inside of you.');
    // TODO-QSP: dynamic text: "Sorry, <<$pcs_nickname>>… but we're not done yet."
    scene.text(`"Sorry, ${((s as any).pcs_nickname ?? 0)}… but we're not done yet."`);
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'More… Pounding', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', 'anus', 'A28', 1);
    if (((s as any).pcs_horny ?? 0) >= 100) {
      scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim5.mp4');
      scene.text('For several minutes he pounds your ass. As your pleasure mounts, you feel yourself close to climax, clenching your sphincter around him to keep him deep inside. Suddenly he moans and begins pumping his cum deep inside you groaning loudly as he fills you. ');
      qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        { label: 'Clean him up with your lips', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim4_2.mp4');
    scene.text('Overcome with desire, you rub his cock against your lips, looking up at him as you tease his cock. "Let me clean that for you, Daddy" you say with a cute smile.');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Use your mouth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim4_3.mp4');
    // TODO-QSP: dynamic text: You feel so good that you take the tip of his cock in your mouth, and affectiona...
    scene.text(`You feel so good that you take the tip of his cock in your mouth, and affectionately begin to suck on it while looking him in the eye, rolling your tongue around the head a little and having in your tongue the taste of your own asshole. The act of adoration renders your stepfather speechless. You give him a moment to recuperate while you gently suck on his cock. Eventually he manages to say: "Wow ${((s as any).pcs_nickname ?? 0)}, that was amazing…", caressing your hair and watching as you slowly pull his cock from your mouth, smiling up at him. He then gathers his things and goes to the bathroom to clean up, leaving you alone in the room.`);
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'boyStat', 'A28');
      qspCall(s, 'cum_call', 'anus', 'A28', 1);
      scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim5.mp4');
      scene.text('For several minutes he pounds your asshole. As your pleasure mounts, you feel yourself close to climax, clenching your sphincter around him to keep him deep inside. Suddenly he moans and begins pumping his cum deep inside you groaning loudly as he fills you. ');
      qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Clean him up with your lips', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim4_2.mp4');
    scene.text('Overcome with desire, you rub his cock against your lips, looking up at him as you tease him. "Let me clean that for you, Daddy" you say with a cute smile.');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Use your mouth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim4_3.mp4');
    // TODO-QSP: dynamic text: You feel so good that you take the tip of his cock in your mouth, and affectiona...
    scene.text(`You feel so good that you take the tip of his cock in your mouth, and affectionately begin to suck on it while looking him in the eye, rolling your tongue around the head a little. The act of adoration renders your stepfather speechless. You give him a moment to recuperate while you gently suck on his cock. Eventually he manages to say: "Wow ${((s as any).pcs_nickname ?? 0)}, that was amazing…", caressing your hair and watching as you slowly pull his cock from your mouth, smiling up at him. He then gathers his things and goes to the bathroom to clean up, leaving you alone in the room.`);
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
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
    }
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

function enterFatherSexAct2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim5_1.jpg');
  // TODO-QSP: dynamic text: Just as you were getting into the groove of things, your stepfather gently but s...
  scene.text(`Just as you were getting into the groove of things, your stepfather gently but surely moves your head away from his groin and pulls you up by the shoulder. He gives you a playful slap on the ass and says "Alright ${((s as any).pcs_nickname ?? 0)}, time's up." You meekly nod and pretend you'll follow him, but decide to give him a hard time and just drop on all fours half-way down the hallway. You stick your ass out as high as you can and spread your ass cheeks with your hands. "Come and get it, Daddy", you tell him in a sultry voice, refusing to move another step.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim5.mp4');
    // TODO-QSP: dynamic text: Even though it was not part of his plan, your stepfather just grins and gives yo...
    scene.text(`Even though it was not part of his plan, your stepfather just grins and gives your exposed ass a hard slap. "Alright ${((s as any).pcs_nickname ?? 0)}, if that's the way you want to play it…".`);
    // TODO-QSP: dynamic text: You see him taking position behind you when you look between your legs, and with...
    scene.text(`You see him taking position behind you when you look between your legs, and within seconds you have two of his fingers thrust deep into your ass. Lucky for you, he had the decency to lubricate them first so it doesn't hurt, even though it does feel a bit uncomfortable at first. He then spits on your asshole a few times and you feel the saliva settling on it. "I'm not sure you did a good enough job for what I'm about to do, ${((s as any).pcs_nickname ?? 0)}… consider this a bonus", he says before rubbing his hard rod against your anus, coating it with the mixture of his and your saliva.`);
    scene.text('Despite his tough talk, your stepfather really does try to make this an enjoyable experience for you too. After playing with your asshole a little longer, he puts the head of his penis against your sphincter. Trying to accommodate him, you relax your anus as much as possible, and before you know it he\'s all the way inside you. Your stepfather is in no rush, and slowly gyrates his hips a bit as he gives you time to get used to the size of his dick. Once he realizes you\'re okay, he focuses more on his own pleasure and increases the tempo more and more until he is roughly pounding you. You cast a slightly concerned look at the doorway, and second guess your decision to tease him in the hallway for a second, but then your arousal takes over and you focus on the pleasurable feelings his rough thrusting provides.');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
    qspCall(s, 'arousal', 'anal_finger', 10, 'sub', 'incest');
    qspCall(s, 'arousal', 'anal', (-10), 'sub', 'incest');
    qspCall(s, 'stat', '');
    (s as any).fathercum = Math.floor(Math.random() * 2) + 1;
    if (((s as any).fathercum ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A28');
      qspCall(s, 'cum_call', 'anus', 'A28', 1);
      // TODO-QSP: dynamic text: As your mind tries to process all the sensations, you suddenly feel an intense w...
      scene.text(`As your mind tries to process all the sensations, you suddenly feel an intense warmth spreading inside you. Your stepfather pulls out his cock, and a slow trail of his cum slowly drips out of you and onto the carpet. Apparently the feelings of your tight ass milking his cock were too much for him to be able to hold out any longer. You slightly regret not getting to orgasm yourself, but then realize your teasing is what got him into this riled up state in the first place, and can't really blame him. You would feel awkward asking him to finish you off after he has already had his fun, and just suffer in silence. He gets back up on his feet and looks down at your sprawled position on the floor. Your legs are all wobbly when you try to stand up and he helps you, but then has another request in return: "Show me your asshole, ${((s as any).pcs_nickname ?? 0)}."`);
      scene.actions([
        { label: 'You show him your used ass', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/pc/body/cum/cumanal/cumanal9.jpg');
    // TODO-QSP: dynamic text: Spreading your ass cheeks with your hands, you give him a nice view of his load ...
    scene.text(`Spreading your ass cheeks with your hands, you give him a nice view of his load in your sphincter. Your stepfather is fascinated and watches his cum slowly drip down, giving your ass a few more slaps for good measure. "Very nice, ${((s as any).pcs_nickname ?? 0)}… you can be my little slut any time you like", he chuckles as he goes to the bathroom to quickly clean up, leaving you to yourself.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('From his increasingly intense and erratic thrusts, you can tell your stepfather is about to cum hard.');
      scene.actions([
        { label: 'Take his load on your face', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28');
    qspCall(s, 'cum_call', 'face', 'A28', 1);
    (s as any).pcs_horny = 0;
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim7.jpg');
    scene.text('You slide off of his cock and quickly grab it with your hand to finish him off. You place your other hand on your pussy and rub your clit furiously as you masturbate him. Right when you feel your own orgasm wash over you, jets of cum hit your face. After your orgasm, you fall down on the floor and need a bit to collect yourself. Your stepfather playfully squeezes your ass cheeks with a nod of approval and then goes to the bathroom to clean up, leaving you alone in the room.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'fatherblow1':
      enterFatherblow1(s, scene);
      break;
    case 'fatherblow2':
      enterFatherblow2(s, scene);
      break;
    case 'fatherblow3':
      enterFatherblow3(s, scene);
      break;
    case 'fatherblow4':
      enterFatherblow4(s, scene);
      break;
    case 'fatherbend_1':
      enterFatherbend_1(s, scene);
      break;
    case 'fatherbend_2':
      enterFatherbend_2(s, scene);
      break;
    case 'fatherbend_3':
      enterFatherbend_3(s, scene);
      break;
    case 'fathergotobedroom':
      enterFathergotobedroom(s, scene);
      break;
    case 'fatherSex_act1':
      enterFatherSexAct1(s, scene);
      break;
    case 'fatherSex_act2':
      enterFatherSexAct2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fathersex: LocationDef = {
  name: 'fathersex',
  title: 'You enthusiastically suck your stepfather\'s hard cock. He pu',
  region: 'other',
  enter: enter,
};
