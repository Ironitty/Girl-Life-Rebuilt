import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDinSex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).IgorQW ?? 0)?.['htday'] !== ((s as any).daystart ?? 0)) {
    qspCall(s, 'boyStat', 'A4');
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['htday'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('Both of you quickly undress while kissing, pulling the clothes off each other.');
    if (((s as any).IgorQW ?? 0)?.['sex'] >= 2  &&  ((s as any).IgorQW ?? 0)?.['qwday'] !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Lick my pussy', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['kuni'] = ((s as any).IgorQW['kuni'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/kuni.mp4');
    scene.text('Both of you get undressed and start caressing each other before you tell him that you want him to please you instead.');
    scene.text('He nods and without a word drops down on his knees. He starts licking you, expertly working his tongue.');
    scene.text('You feel your pussy pulsating thanks to Igor\'s smooth tongue. You notice that he\'s as excited as you, jerking his cock.');
    scene.text('After a while, you start breathing more loudly, grabbing him by the hair and cumming in his mouth.');
    qspCall(s, 'arousal', 'cuni', 2, 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['igorsex', 'din_igor_end'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Squat', handler: (st: GameState) => {
    (s as any).bja = ((s as any).bja ?? 0) + (1);
    if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A4'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/tinydick.jpg');
    // TODO-QSP: dynamic text: You get down on your knees in front of him, playing with his small hard cock. Yo...
    scene.text(`You get down on your knees in front of him, playing with his small hard cock. You lick the head as Igor breathes hard and sharp. "Don't stop ${((s as any).pcs_nickname ?? 0)}, I'm right on the edge!"`);
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).IgorQW ?? 0)?.['sex'] >= 1) {
      scene.actions([
        { label: 'Tell him to fuck you in the pussy', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['sex'] = ((s as any).IgorQW['sex'] ?? 0) + (1);
    (s as any).sexa = ((s as any).sexa ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/pussy.mp4');
    scene.text('Igor nervously spreads your legs and thrusts his cock into you.');
    scene.text('His little cock is giving you very little pleasure and you just wish he\'ll finish quickly.');
    scene.text('Igor tries his best and speeds up, but it only makes him edge quicker.');
    scene.text('You see him making faces and he pull outs at the last second, cumming on your pussy lips.');
    scene.text('"You were lucky. I would have killed you if you had gotten me pregnant…" you tell him.');
    qspCall(s, 'cum_call', 'labia', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['igorsex', 'din_igor_end'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Start sucking', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['sex'] = ((s as any).IgorQW['sex'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/suckdick.jpg');
    scene.text('You grab his small rock-hard cock and start sucking it. Igor groans and you feel a huge jet of cum spurt into your mouth.');
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    scene.img('images/pc/body/cum/swallow/swallow7.jpg');
    scene.text('You continue sucking his cock and swallow the cum as soon as it reaches your mouth. The stream of sperm is never ending, so instead of trying to swallowing everything, you let it drip out of your mouth.');
    // TODO-QSP: dynamic text: Once he finally finishes, you let his limp cock slide out of your mouth. Your <<...
    scene.text(`Once he finally finishes, you let his limp cock slide out of your mouth. Your ${((s as any).pc_desc ?? 0)?.['lips']} lips are wet from all the cum.`);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['igorsex', 'din_igor_end'] },
    ]);
  } },
      { label: 'Remove his cock from your mouth', handler: (st: GameState) => {
    scene.img('images/pc/body/cum/cumface/cumface2.jpg');
    scene.text('You remove his cock from your mouth as a continuous jet of semen shoots out of the tip, hitting you in the face. Some of the splatter gets into your eyes, making you blink in panic as spurt after spurt of cum splashes across your face.');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['igorsex', 'din_igor_end'] },
    ]);
  } },
    ]);
  } },
      { label: 'Have anal sex', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['sex'] = ((s as any).IgorQW['sex'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/anal.jpg');
    scene.text('You lay down on your stomach and grab your ass cheeks with both hands, spreading them wide and presenting your ass to Igor. You look at him with lust in your eyes and he hesitantly grabs his little cock and tries to push it inside your asshole.');
    scene.text('Even though he only has a little cock, it gives you some pleasure and you let out a quiet whimper.');
    scene.text('After a few minutes, you feel his cock growing and getting rock-hard.');
    scene.text('"Can I cum inside you?" he asks.');
    scene.text('Before you can answer, you feel him shooting his load inside you.');
    scene.text('He\'s clearly upset over this, but you tell him it\'s okay and that you don\'t mind him finishing inside you.');
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'anal', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['igorsex', 'din_igor_end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['qwday'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick my pussy', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['kuni'] = ((s as any).IgorQW['kuni'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/kuni.mp4');
    scene.text('Both of you get undressed and start caressing each other before you tell him that you want him to please you instead.');
    scene.text('You\'ve already had sex today.');
    qspCall(s, 'arousal', 'cuni', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['igorsex', 'din_igor_end'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDinIgorEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'pav_disco') {
    scene.text('With Igor having taken you to his house, you should take advantage and use his bathroom to freshen up.');
  } else {
    scene.text('You should go to the bathroom to freshen up.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the bathroom', goto: ['igorhome', 'bathroom'] },
  ]);
  scene.build();
}

function enterDinKrossdresssex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'igorsex', 'kruglov_desc');
  scene.img('images/characters/pavlovsk/school/boy/igor/talkgf.jpg');
  scene.text('"You know what? I really enjoyed having sex when you were dressed as a girl!" you tell him.');
  scene.text('"Is that so? I have to admit, I enjoyed it too. The sex, that is…" he responds.');
  scene.text('"Let\'s do it again," you suggest.');
  scene.text('"I don\'t know…" he says with a hint of hesitation.');
  scene.text('You try teasing him into compliance. "I really like that girl! She was sexy and made me wet straight away!"');
  scene.text('"To hell with it, let\'s do it!" he relents.');
  scene.text('"Sweet!" you happily start clapping your hands, having already planned out every little step.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Put on makeup', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/makeup.jpg');
    scene.text('You quickly put the makeup on him and pick out some good clothes. He puts on the clothes and seems to quickly get into dressing up.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/rkd.jpg');
    scene.text('"Well, there we have her, my beautiful girl!" you say with lust in your voice as you look at him. He blushes a little and checks out his reflection in the mirror.');
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/kiss.mp4');
    scene.text('You can\'t resist any longer. You lean forward and start making out with him.');
    qspCall(s, 'arousal', 'kiss', 2);
    qspCall(s, 'stat', '');
    if (((s as any).mc_inventory ?? 0)?.['strapon'] > 0) {
      scene.actions([
        { label: 'You have a strapon', goto: ['igorsex', 'strapon_crossdress'] },
      ]);
    }
    scene.actions([
      { label: 'Ask Igor to lick your pussy', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['Horny'] = 0;
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['kdsexday'] = ((s as any).day ?? 0);
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['crossdressSex'] = ((s as any).IgorQW['crossdressSex'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/kdsex.mp4');
    scene.text('You ask him if he can lick your pussy. He nods and without a word drops down on his knees. He starts licking you, expertly working his tongue.');
    scene.text('You feel your pussy pulsating thanks to Igor\'s smooth tongue. You notice that he\'s as excited as you, jerking his cock.');
    scene.text('After a while, your breathing turns heavy and you grab him by the hair as you cum in his mouth.');
    qspCall(s, 'arousal', 'cuni', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['igorhome', 'igorroom'] },
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

function enterStrapOn(s: GameState, scene: SceneBuilder): void {
  if (((s as any).IgorQW ?? 0)?.['strap'] === 0) {
    if (((s as any).PCLoSkirt ?? 0) > 0) {
      scene.img('images/characters/pavlovsk/school/boy/igor/namek.mp4');
      scene.text('You excuse yourself and head to the bathroom. Once there, you quickly put your strapon on under your clothes before heading back to Igor\'s room. He smiles at you when you return.');
      scene.text('You start stroking the strap-on under your dress. "I have a surprise for you…"');
      scene.text('"Oh? What is it?" he eagerly asks, awaiting your answer.');
    } else {
      scene.img('images/characters/pavlovsk/school/boy/igor/strapon_pants1.jpg');
      scene.text('You excuse yourself and head to the bathroom. Once there, you quickly put your strapon on under your clothes before heading back to Igor\'s room. He smiles at you when you return.');
      scene.text('You start rubbing the bulge in your pants. "I have a surprise for you…"');
      scene.text('His eyes dart down and you know he can\'t miss it, even if he might not know what it is. "Oh? What is it?" he eagerly asks, awaiting your answer.');
    }
    scene.actions([
      { label: 'Show him the strap-on', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['net'] = ((s as any).IgorQW['net'] ?? 0) + (1);
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['napoit'] = ((s as any).IgorQW['napoit'] ?? 0) + (1);
    qspCall(s, 'drugs', 'alcohol', 'wine');
    qspCall(s, 'stat', '');
    if (((s as any).PCLoSkirt ?? 0) > 0) {
      scene.img('images/characters/pavlovsk/school/boy/igor/namek2.mp4');
      if (((s as any).strapNumber ?? 0) >= 5) {
        scene.text('You lift your dress and show him the strap-on as your hand caresses it.');
        scene.text('"Well," you say in a dramatic effect. "Here it is! Surprise!!"');
        scene.text('His eyes widen. "Oh my God! Why do you have that on you?!"');
        scene.text('"You wanted to know what it\'s like to be a girl, right?" you grin.');
        scene.text('"No! That\'s way too big! Maybe something smaller, but not that thing!" he says while shaking his head.');
        scene.text('You sigh and look down at the dildo. Maybe it is too much for a first time. "Okay, I\'ll get something smaller and we can try some other time."');
        scene.text('He shrugs. "I don\'t know…"');
        scene.text('The two of you talk for a while and you\'re able to convince him to try with a smaller one some other time. You then decide it\'s time to leave.');
        scene.actions([
          { label: 'Go home', goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.text('You lift your dress, showing him the strap-on as your hand caresses it.');
        scene.text('"Well," you say in a dramatic effect. "Here it is! Surprise!!"');
        scene.text('His eyes widen. "Oh my God! Why do you have that on you?!"');
        scene.text('"You wanted to know what it\'s like to be a girl, right?" you grin.');
        scene.text('"No! I mean yeah, but… I don\'t know…"');
        scene.text('"You said you wanted to know what it\'s like being a girl. Well being fucked is a big part of being a girl! Besides, it will be fun," you tell him.');
        scene.text('He stares at the strap-on as you stroke it, biting his lower lip before he nods his head and looks you in the eye. "Okay, let\'s do it. But before we start, I\'ll need a drink."');
        scene.text('Igor fetches a bottle of wine and opens it, pouring both of you a drink. You sit on the couch together and talk about what sex feels like for a girl. Igor drinks a lot more than you do and ends up clearly tipsy.');
      }
    } else {
      scene.img('images/characters/pavlovsk/school/boy/igor/strapon_pants1.jpg');
      if (((s as any).strapNumber ?? 0) >= 5) {
        scene.text('You unzip your pants and pull the strapon free, stroking it like it\'s a cock.');
        scene.text('"Well," you say in a dramatic effect. "Here it is! Surprise!!"');
        scene.text('"Oh my God! Why do you have that on you?!" his eyes widen.');
        scene.text('"You wanted to know what it\'s like to be a girl, right?" you grin.');
        scene.text('"No! That\'s way too big! Maybe something smaller, but not that thing!" he says while shaking his head.');
        scene.text('You sigh and look down at the dildo. Maybe it is too much for a first time. "Okay, I\'ll get something smaller and we can try some other time."');
        scene.text('He shrugs. "I don\'t know…"');
        scene.text('The two of you talk for a while and you\'re able to convince him to try with a smaller one some other time. You then decide it\'s time to leave.');
        scene.actions([
          { label: 'Go home', goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.text('You unzip your pants and pull the strapon free, stroking it like it\'s a cock.');
        scene.text('"Well," you say in a dramatic effect. "Here it is! Surprise!!"');
        scene.text('His eyes widen. "Oh my God! Why do you have that on you?!"');
        scene.text('"You wanted to know what it\'s like to be a girl, right?" you grin.');
        scene.text('"No! I mean yeah, but… I don\'t know…"');
        scene.text('"You said you wanted to know what it\'s like being a girl. Well being fucked is a big part of being a girl! Besides, it will be fun." you tell him.');
        scene.text('He stares at the strap-on as you stroke it, biting his lower lip before he nods his head and looks you in the eye. "Okay, let\'s do it. But before we start, I\'ll need a drink."');
        scene.text('Igor fetches a bottle of wine and opens it, pouring both of you a drink. You sit on the couch together and talk about what sex feels like for a girl. Igor drinks a lot more than you do and ends up clearly tipsy.');
      }
    }
    if (((s as any).strapNumber ?? 0) <= 4) {
      scene.actions([
        { label: 'It\'s time', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['strap'] = ((s as any).IgorQW['strap'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/ygov1.mp4');
    scene.text('You put the wine glass down and take his away from him, placing it down as well before you lean in close to him. "Okay, I think you\'re ready for it. Let me show you an experience you\'ll never forget!"');
    scene.text('He nods, clearly nervous, thought he also looks very excited as well, almost eager.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/ygov2.mp4');
    scene.text('You open your legs, showing the strap-on under your skirt before you lean in close and whisper. "Don\'t be nervous. I promise that this will be great."');
    scene.text('He lets out a nervous laugh. "I don\'t really know if this was such a smart idea. That strap-on looks pretty big…"');
    scene.actions([
      { label: 'It\'s not that big', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/ygov3.mp4');
    scene.text('You look down at the dildo as you stroke it. "Trust me, it\'s not that big. There\'s a lot of guys bigger than this, but if you really don\'t want to know what it\'s like to be a girl…"');
    scene.text('He takes a deep breath before sighing. "You\'re right, I want to know, just… Just take it easy. I\'m a virgin after all."');
    scene.text('You both laugh at his remark.');
    scene.actions([
      { label: 'Igor takes off his pants', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/ygov4.mp4');
    scene.text('"Go ahead and take off your pants," you command.');
    scene.text('He looks at you before hesitating. You hear him take a deep breath before he complies with your command and pulls down his pants.');
    scene.text('You look at him, becoming quite aroused fantasizing about what it\'s going to be like fucking a guy instead of being fucked by one. You feel very empowered about how you\'ll soon be having some fun…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/ygov5.mp4');
    scene.text('Undressed, Igor approaches you and attempts to kiss you, but you pull away and point at the couch on a spot next to you. He quickly sits down.');
    scene.text('"Don\'t think you can distract me by trying to kiss me. Now let\'s go to your bedroom so we can have some fun."');
    scene.text('He grins and nods before you get up and head to his bedroom.');
    scene.actions([
      { label: 'Lay him down', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/shlepaet_1.mp4');
    scene.text('Naked, he lays down on his stomach on his bed.');
    // TODO-QSP: dynamic text: You start kneading his firm ass cheeks, spanking him a few times. "Please <<$pcs...
    scene.text(`You start kneading his firm ass cheeks, spanking him a few times. "Please ${((s as any).pcs_nickname ?? 0)}, I beg you, be gentle! This is my first time."`);
    scene.text('"Shut up and don\'t whine or I\'ll pound your ass until you can\'t sit down."');
    qspCall(s, 'arousal', 'foreplay_give', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Insert the tip', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/vstavlaet_1.mp4');
    scene.text('You lube up the strap-on and spit on his asshole for a little extra lube before you move up behind him and slowly push the tip of the strap-on against his asshole. Igor starts moaning immediately.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck his ass', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/terpit.mp4');
    scene.text('You continue pressing a little harder before the strap-on slides into his ass. He groans loudly as you start pumping his ass.');
    // TODO-QSP: dynamic text: "Oh… Fuck <<$pcs_nickname>>, it hurts!!! Stop! Stop! You said you would take it ...
    scene.text(`"Oh… Fuck ${((s as any).pcs_nickname ?? 0)}, it hurts!!! Stop! Stop! You said you would take it slow!" Igor cries out, gripping the pillow.`);
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take it like a bitch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take it like a bitch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/rough1.mp4');
    scene.text('"Shut up and don\'t be a pussy! I know you love this!" You keep pounding him without stopping while laying on top on him.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, please stop!" he begs.
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, please stop!" he begs.`);
    scene.text('"I said shut up, bitch!" you snarl before you grab him by the hips and pull him up onto all fours. You then firmly grab his hips and really start pounding his ass, causing him to cry out.');
    scene.text('"Relax your ass or it\'ll continue to hurt!" you tell him.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/pegcum.mp4');
    scene.text('After you hammer him for a while, you reach around and grab his dick which, despite all his bitching, is rock-hard. You start jerking him off as you hammer his ass with your strap-on.');
    scene.text('It doesn\'t take very long until he moans loudly and shoots his load. Once he\'s finished, you stop and pull your strap-on out of his ass.');
    scene.text('"Fuck, that hurt! But it also felt amazing at the same time." He pulls away from you and rubs his ass. "Maybe next time you can be a bit gentler?"');
    scene.text('You feel great! That was one of the best experiences of your life! You grin at him. "That\'s up to you, slave. If you please me, then maybe I won\'t be so rough next time, but if you displease me, then you\'ll wish I was this gentle again…"');
    scene.text('He looks at you with a mix of fear and anticipation. "I hope you\'re kidding, but we better get cleaned up."');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['igorhome', 'igorroom'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stop', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/strapstop.jpg');
    scene.text('You stop and pull out.');
    scene.text('"Fuck, that hurt! I\'m never doing that again!" he yells out.');
    scene.text('You nod your head understandingly but you\'re convinced that you\'ll have another try.');
    scene.text('He gets out of bed as you take off the strap-on.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['igorhome', 'igorroom'] },
    ]);
  } },
      { label: 'Slow down', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/strapon1.mp4');
    scene.text('"Stop being a pussy! I know you love this! But since it\'s your first time, I\'ll slow down. Just take a deep breath and relax."');
    scene.text('You feel him relax you start slowly fucking him again. "Okay, that\'s not too bad."');
    scene.text('"Good," you reply. "Now just stay relaxed."');
    scene.text('As you keep fucking him, he starts moaning as he gets into it and starts enjoying it.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/pegcum.mp4');
    scene.text('You pull him up into a doggystyle position and reach around to grab his dick. It\'s already rock-hard as you start jerking him off while continuing to pump his ass with your strap-on.');
    scene.text('It doesn\'t take very long at all until he moans loudly and blows his load. Once he\'s finished, you stop and pull your strap-on out of his ass.');
    scene.text('"Fuck, that was amazing! I never knew sex could feel that great!" He turns around and kisses you. "Thank you for helping me explore my sexuality."');
    scene.text('You feel great! That was one of the best experiences of your life! You grin at him. "I\'m glad you enjoyed it. I look forward to fucking you again."');
    scene.text('He kisses you and reaches down, stroking your strap-on with his hand a few times. "I look forward to it as well."');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['igorhome', 'igorroom'] },
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
    }
  } },
    ]);
  } else {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/strapup.mp4');
    if (((s as any).strapNumber ?? 0) >= 5) {
      scene.text('You pull out the strap-on and start putting it on. "I\'m going to fuck you like a bitch with my big hard cock."');
      scene.text('His eyes widen. You can tell he\'s turned on by you taking charge like this, but he doesn\'t seem to agree with using the massive dildo.');
      scene.text('"Oh my God, are you crazy?! That thing is huge! It would hurt too much!"');
      scene.text('"What? You already let me fuck you with one before," you grin.');
      scene.text('"The smaller one was okay, but not that thing!" he says while shaking his head.');
      scene.text('You sigh and look down at the monster dildo. You know he won\'t budge on trying it. "Okay, I\'ll get something smaller next time."');
      scene.text('He nods. "Sounds good. I can\'t wait."');
      scene.text('The two of you talk for a few minutes before you decide it\'s time to leave.');
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.text('You pull out the strap-on and start putting it on. "I\'m going to fuck you like a bitch with my big hard cock."');
      scene.text('His eyes widen, but you can tell he\'s turned on by you taking charge as he stares at the dildo.');
      scene.actions([
        { label: 'Take off your pants', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['strap'] = ((s as any).IgorQW['strap'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/pulldown.mp4');
    scene.text('"Go ahead and take off your pants," you command.');
    scene.text('He gets up and eagerly starts taking off his pants.');
    scene.actions([
      { label: 'Suck my cock', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/suck1.mp4');
    scene.text('You pull him over to you and push him down. "Suck my cock, bitch!"');
    scene.text('He eagerly takes your strap-on into his mouth and starts sucking it for all he\'s worth.');
    scene.text('After you fuck his mouth for a few seconds, you pull him over to the bed and lay him down.');
    qspCall(s, 'arousal', 'bj', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lay him down', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/shlepaet_1.mp4');
    scene.text('He lays down on his stomach on his bed and you start kneading his firm ass cheeks, spanking him a few times.');
    // TODO-QSP: dynamic text: "Please, <<$pcs_nickname>>, I want it now! Stop teasing me!"
    scene.text(`"Please, ${((s as any).pcs_nickname ?? 0)}, I want it now! Stop teasing me!"`);
    qspCall(s, 'arousal', 'foreplay_give', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Insert the tip', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/vstavlaet_1.mp4');
    scene.text('You lube up the strap-on and spit on his asshole for a little extra lube before you move up behind him and slowly push the tip of the strap-on against his asshole. Igor starts moaning immediately.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck his ass', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/terpit.mp4');
    scene.text('You continue pressing a little harder before the strap-on slides into his ass. He groans loudly as you start pumping his ass.');
    // TODO-QSP: dynamic text: "Oh… Fuck <<$pcs_nickname>>, that feels so good! Fuck me baby, fuck me!" he crie...
    scene.text(`"Oh… Fuck ${((s as any).pcs_nickname ?? 0)}, that feels so good! Fuck me baby, fuck me!" he cries out before biting the pillow.`);
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take it like a bitch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take it like a bitch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/trahaet1.mp4');
    scene.text('You grab hold of his hips and pull him up until he\'s in a doggystyle position. Once he\'s in place, you start really hammering his ass and occasionally smacking him with one of your hands.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Slow down', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/strapon1.mp4');
    scene.text('You decide to slow down and fuck much slower and more sensually. Maybe after he gets a little more used to it he\'ll let you really hammer his ass.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/pegcum.mp4');
    scene.text('You pull him up into a doggystyle position. Once he is up, you reach around and grab his dick, which is already rock-hard as you start jerking him off as you pump his ass with your strap-on.');
    scene.text('It doesn\'t take very long until he moans loudly and shoots his load. Once he\'s finished, you stop and pull your strap-on out of his ass.');
    scene.text('"Fuck, that was amazing! I never knew sex could feel that great!" He turns around and kisses you. "Thank you for helping me explore my sexuality."');
    scene.text('You feel great! This was one of the best experiences of your life! You grin at him. "I\'m glad you enjoyed it. I look forward to fucking you again."');
    scene.text('He kisses you and reaches down, stroking your strap-on with his hand a few times. "I look forward to it as well."');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['igorhome', 'igorroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Show him no mercy', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/trahaet1.mp4');
    scene.text('"Shut up and don\'t be a pussy! I know you love this!" You keep on pounding him without stopping while holding tightly to his hips so he can\'t pull away.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, please stop!" he begs as he tries to pull away, but you just...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, please stop!" he begs as he tries to pull away, but you just hold onto him tighter and pull him back, burying your strap-on balls deep in his ass, causing him to gasp in pain.`);
    scene.text('"I said shut up, bitch!" You really start pounding his ass and he starts crying out. "Relax your ass or it\'ll continue to hurt!"');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/pegcum.mp4');
    scene.text('After you hammer him for a while, you reach around and grab his dick which, despite all his bitching, is rock-hard. You start jerking him off as you hammer his ass with your strap-on.');
    scene.text('It doesn\'t take very long until he moans loudly and shoots his load. Once he\'s finished, you stop and pull your strap-on out of his ass.');
    scene.text('"Fuck, that hurt! But it also felt amazing at the same time." He pulls away from you and rubs his ass. "Maybe next time you can be a bit gentler?"');
    scene.text('You feel great! That was one of the best experiences of your life! You grin at him. "That\'s up to you, slave. If you please me, then maybe I won\'t be so rough next time, but if you displease me, then you\'ll wish I was this gentle again…"');
    scene.text('He looks at you with a mix of fear and anticipation. "I hope you\'re kidding, but we better get cleaned up."');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['igorhome', 'igorroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Fuck him more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/strapon1.mp4');
    scene.text('You can tell that he\'s enjoying this, and so are you. You ride him for a long time, loving every moment of it as his moans get louder and louder.');
    scene.text('You know he\'s getting close to finishing.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/home/pegcum.mp4');
    scene.text('You pull him up into a doggystyle position. Once he\'s up, you reach around and grab his dick, which is already rock-hard as you start jerking him off as you pump his ass with your strap-on.');
    scene.text('It doesn\'t take very long until he moans loudly and shoots his load. Once he\'s finished, you stop and pull your strap-on out of his ass.');
    scene.text('He turns around and kisses you. "Fuck, that was amazing as always. I never understood how anyone could like being fucked in the ass, now I don\'t understand why everyone doesn\'t want to be fucked in the ass."');
    scene.text('You feel great! This was one of the best experiences of your life! You grin at him. "I\'m glad you enjoyed it. I look forward to fucking you again."');
    scene.text('He kisses you again and reaches down, stroking your strap-on with his hand a few times. "I look forward to being fucked by you again."');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['igorhome', 'igorroom'] },
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
  }
  // TODO-QSP: end
  scene.build();
}

function enterDinSisterkomKrossdress(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Igor\'s sister\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/igorhome/komsister.jpg');
  scene.text('You walk into Igor\'s sister\'s room which, to put it mildly, is a complete mess.');
  scene.text('"I see that cleaning isn\'t her favorite activity!" you say and smile at Igor.');
  scene.text('"That\'s for sure!" he grins back.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Open the closet', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s sister\'s room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/chto_nadet.jpg');
    scene.text('You open the closet and start rifling through the huge mountain of clothes searching for something unusual.');
    scene.actions([
      { label: 'Search for something interesting', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Igor\'s sister\'s room</b></center>');
    scene.text('You start looking through the clothes and quickly find some beautiful lingerie.');
    scene.text('"Wow, look at this beautiful lingerie," you comment and see Igor appreciatively nodding.');
    scene.text('"If you like it that much, then why don\'t you try it on?" you jest and toss the lingerie at him.');
    scene.text('"Very funny…" he replies as he picks the lingerie up from the floor.');
    scene.text('"Come on, let\'s find something nice for you to try on! Here, try these panties on… And this bra too!" you laugh as you toss the items at him.');
    scene.text('"What?! You want me to dress like a girl?!" he says indignantly.');
    scene.text('"Come on, don\'t be such a bore! Let\'s have some fun!" you say playfully and giggle sweetly.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you…" he begins before falling silent. "Fine. If it will mak...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, you…" he begins before falling silent. "Fine. If it will make you happy…"`);
    scene.text('"Alright!" you cry out in excitement.');
    scene.actions([
      { label: 'Put this on…', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Igor\'s sister\'s room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/odet.jpg');
    scene.text('Igor strips down and puts the lingerie set on while you smile at him.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s sister\'s room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/trysi.jpg');
    scene.text('"This is fucking insane!" Igor scowls.');
    scene.text('"Don\'t be like that! This is you, this is sooo you!" you reply with a smile.');
    // TODO-QSP: dynamic text: "Fuck you, <<$pcs_nickname>>!" he says says before he starts checking himself in...
    scene.text(`"Fuck you, ${((s as any).pcs_nickname ?? 0)}!" he says says before he starts checking himself in the mirror.`);
    scene.text('"You\'re so sexy!" you say with a laugh.');
    scene.text('"Oh, I get it now!" he responds.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Igor\'s sister\'s room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/draka.jpg');
    scene.text('Igor grabs a pillow off his sister\'s bed and hits you in the face.');
    scene.text('"Hey, you little sissy! Are you nuts?!" you say as he rolls in laughter.');
    scene.text('You also grab a pillow and hit him back. He responds in kind and the pillow fight ends in a draw.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s sister\'s room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/onbed.jpg');
    scene.text('Panting, you both lay down on the bed side by side.');
    scene.text('"You\'re such a class act!" you say, catching your breath.');
    scene.text('"And you\'re a dirty fighter," he replies, rubbing his crotch.');
    scene.text('After a short pause, you bite your lip. "Come on, let\'s find a nice outfit for you to wear! I want to see you fully dolled up."');
    scene.text('"What? A dress?!" he stammers in surprise.');
    scene.text('"Pretty please?" you beg.');
    scene.text('"Fine, but only because I know you won\'t leave me alone. Give me your best shot," he says before striking a pose.');
    scene.actions([
      { label: 'Put on makeup', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Igor\'s sister\'s room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/makeup.jpg');
    scene.text('Before you pick out a dress for him, you have Igor sit at his sister\'s makeup table and start applying makeup.');
    scene.actions([
      { label: 'Pick out a dress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Igor\'s sister\'s room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/garderob.jpg');
    scene.text('You start looking for a suitable dress and unexpectedly find an expensive wig with long natural blonde hair. You give it to him to put it on.');
    scene.actions([
      { label: 'Look at the result', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s sister\'s room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/dress.jpg');
    scene.text('"Well, how do I look?" he asks once he finishes putting on the dress.');
    scene.text('"Wow, you look… Amazing. This is just fantastic!" you enthusiastically answer.');
    scene.text('"Really? You\'re not kidding?" Judging by his reaction, he\'s genuinely surprised. "Is it that bad?"');
    scene.text('"Take a look for yourself," you say and nod towards the mirror.');
    scene.text('He walks over to the mirror and starts examining himself.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s sister\'s room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/ydivlenie.jpg');
    scene.text('"Holy fuck! Is this really me? Is this really me?!!" he asks as he twirls in front of the mirror.');
    scene.text('"You\'re one really sexy bitch!" you reply and wink at him.');
    scene.text('"Hell yeah, that\'s for sure!" He suddenly bats his eyes like a model, a strange look turning up in his eyes.');
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s sister\'s room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/kiss.mp4');
    scene.text('You\'re startled by his appearance, not expecting him to look this good. You can\'t resist any longer and lean forward to start making out with him.');
    qspCall(s, 'arousal', 'kiss', 2);
    qspCall(s, 'stat', '');
    if (((s as any).mc_inventory ?? 0)?.['strapon'] > 0) {
      scene.actions([
        { label: 'You have a strapon', goto: ['igorsex', 'strapon_crossdress'] },
      ]);
    }
    scene.actions([
      { label: 'Push him onto the bed', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Igor\'s sister\'s room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/dzhulia.mp4');
    scene.text('You push him onto the bed and plant yourself on his face before you reach down and pull his dick out of the panties and start sucking it. He has a smaller than average dick, but his skill with his tongue is great.');
    scene.text('You continue sucking his small dick before it starts twitching. You quickly deepthroat and swallow the cum that shoots into your mouth, but some of it drips from your mouth onto Igor.');
    // TODO-QSP: dynamic text: Once he finishes, you release his now limp cock from your mouth, your <<$pc_desc...
    scene.text(`Once he finishes, you release his now limp cock from your mouth, your ${((s as any).pc_desc ?? 0)?.['lips']} lips wet with semen. While you put all you might into handling Igor's cum, Igor continues licking your now dripping pussy.`);
    scene.text('You lick up the remaining sperm from Igor\'s cock and swallow it before you turn and see Igor still going strong.');
    scene.text('You\'re impressed by his stamina when your legs start trembling and you feel a warmth in your pussy as you start screaming. You tell Igor not to stop, embracing your orgasm.');
    qspCall(s, 'arousal', 'bj', (-5));
    qspCall(s, 'arousal', 'cuni', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A4', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['crossdressSex'] = ((s as any).IgorQW['crossdressSex'] ?? 0) + (1);
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['eqwtday'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Igor\'s sister\'s room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/face.jpg');
    scene.text('"That was great! This is something we need to do again," you say as you pant in exhaustion.');
    scene.text('"That\'s for sure!" he pants back, his face wet from eating your pussy.');
    scene.text('"I have to go now, but you have to dress up next time we have sex. Just look at you! I immediately get turned on when I see you like that," you say.');
    scene.text('"I think we can pull it off again. Now get your cute ass out of here before someone catches us."');
    scene.text('"Okay. See you later, honey."');
    scene.text('"Later," he waves absently as you leave the room.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
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
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStraponCrossdress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).IgorQW ?? 0)?.['strap'] === 0) {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd1.jpg');
    if (((s as any).strapNumber ?? 0) >= 5) {
      scene.text('You pull out the strap-on and start putting it on. "I\'m going to fuck you like a bitch with my big hard cock."');
      scene.text('His eyes widen. You can tell he\'s turned on by you taking charge like this, but he doesn\'t seem to agree with using the massive dildo.');
      scene.text('"Oh my God, are you crazy?! That thing is huge! It would hurt too much!"');
      scene.text('You sigh and look down at the monster dildo. You know he won\'t budge on trying it. "Okay, I\'ll get something smaller next time."');
      scene.text('He nods. "Sounds good. I can\'t wait."');
      scene.text('The two of you talk for a few minutes before you decide it\'s time to leave.');
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    } else {
      if (((s as any).spellKnown ?? 0)?.['penisenvy'] === 1) {
        scene.text('You pull out the strap-on and start putting it on. "I\'m going to fuck you like a bitch with my big hard cock."');
        scene.text('You can tell he\'s turned on by you taking charge as you notice him staring at the dildo.');
        scene.text('His eyes widen. "Oh my God! Why are you putting that thing on?!"');
        scene.text('"You wanted to know what it\'s like to be a girl, right?" you grin.');
        scene.text('"No! I mean yeah, but… I don\'t know…" he says.');
        scene.text('"You said you wanted to know what it\'s like being a girl. Well being fucked is a big part of being a girl, so I\'m going to fuck you with my big cock. It will be fun," you tell him.');
        scene.text('He bites his lower lip for a few seconds before he nods his head and looks you in the eyes. "Okay, you\'re right. Let\'s do it."');
        scene.text('You grin at him as you stand up, stroking the strap-on like it was a real dick. "Well get on your knees then, bitch!"');
        scene.text('He blushes as he gets down on his knees in front of you.');
        scene.text('"Come and suck my dick, baby," you tell him with a grin. Now would be an ideal time to cast Penis Envy.');
        if ((!((s as any).penisEnvyVariable ?? 0))) {
          scene.actions([
            { label: 'Cast Penis Envy spell', handler: (st: GameState) => {
    qspCall(s, 'castSpell', 'penisenvy');
    if (((s as any).spellSuccess ?? 0) > 0) {
      scene.actions([
        { label: 'Get a blowjob', goto: ['igorsex', 'strapon_crossdress_bj_magic'] },
      ]);
    } else {
      scene.actions([
        { label: 'Get a blowjob', goto: ['igorsex', 'strapon_crossdress_bj'] },
      ]);
    }
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Get a blowjob', goto: ['igorsex', 'strapon_crossdress_bj_magic'] },
          ]);
        }
      } else {
        scene.text('You pull out the strap-on and start putting it on. "I\'m going to fuck you like a bitch with my big hard cock."');
        scene.text('You can tell he\'s turned on by you taking charge as you notice him staring at the dildo.');
        scene.text('His eyes widen. "Oh my God! Why are you putting that thing on?!"');
        scene.text('"You wanted to know what it\'s like to be a girl, right?" you grin.');
        scene.text('"No! I mean yeah, but… I don\'t know…" he says.');
        scene.text('"You said you wanted to know what it\'s like being a girl. Well being fucked is a big part of being a girl, so I\'m going to fuck you with my big cock. It will be fun," you tell him.');
        scene.text('He bites his lower lip for a few seconds before he nods his head and looks you in the eyes. "Okay, you\'re right. Let\'s do it."');
        scene.text('You grin at him as you stand up, stroking the strap-on like it was a real dick. "Well get on your knees then, bitch!"');
        scene.text('He blushes as he gets down on his knees in front of you.');
        scene.text('"Come and suck my dick, baby," you tell him with a grin.');
        scene.actions([
          { label: 'Get a blowjob', goto: ['igorsex', 'strapon_crossdress_bj'] },
        ]);
      }
    }
  } else {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd1.jpg');
    if (((s as any).strapNumber ?? 0) >= 5) {
      scene.text('You pull out the strap-on and start putting it on. "I\'m going to fuck you like a bitch with my big hard cock."');
      scene.text('His eyes widen. You can tell he\'s turned on by you taking charge like this, but he doesn\'t seem to agree with using the massive dildo.');
      scene.text('"Oh my God, are you crazy?! That thing is huge! It would hurt too much!"');
      scene.text('"What? You already let me fuck you with one before," you grin.');
      scene.text('"The smaller one was okay, but not that thing!" he says while shaking his head.');
      scene.text('You sigh and look down at the monster dildo. You know he won\'t budge on trying it. "Okay, I\'ll get something smaller next time."');
      scene.text('He nods. "Sounds good. I can\'t wait."');
      scene.text('The two of you talk for a few minutes before you decide it\'s time to leave.');
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.text('You pull out the strap-on and start putting it on. "Is your ass ready for my big hard cock, bitch?"');
      scene.text('You can tell he\'s turned on by you taking charge as you also notice him statring at the dildo.');
      scene.text('His eyes widen as he nods.');
      scene.text('"Then beg me for it, bitch." you grin.');
      scene.text('"Please, please fuck me with your big hard cock!" he eagerly pleads.');
      scene.text('You grin at him as you start stroking the strap-on like it was a real dick. "Well get on your knees then, bitch!"');
      scene.text('He eagerly gets down on his knees in front of you.');
      if (((s as any).spellKnown ?? 0)?.['penisenvy'] === 1) {
        scene.text('"Come and suck my dick, baby," you tell him with a grin. Now would be an ideal time to cast Penis Envy.');
        if ((!((s as any).penisEnvyVariable ?? 0))) {
          scene.actions([
            { label: 'Cast Penis Envy spell', handler: (st: GameState) => {
    qspCall(s, 'castSpell', 'penisenvy');
    if (((s as any).spellSuccess ?? 0) > 0) {
      scene.actions([
        { label: 'Get a blowjob', goto: ['igorsex', 'strapon_crossdress_bj_magic_second'] },
      ]);
    } else {
      scene.actions([
        { label: 'Get a blowjob', goto: ['igorsex', 'strapon_crossdress_bj_second'] },
      ]);
    }
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Get a blowjob', goto: ['igorsex', 'strapon_crossdress_bj_magic_second'] },
          ]);
        }
      } else {
        scene.actions([
          { label: 'Get a blowjob', goto: ['igorsex', 'strapon_crossdress_bj_second'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStraponCrossdressBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A4');
  qspCall(s, 'npcStat', 'D<<strapNumber>>', 'a');
  if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['net'] = ((s as any).IgorQW['net'] ?? 0) + (1);
  if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['napoit'] = ((s as any).IgorQW['napoit'] ?? 0) + (1);
  if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['strap'] = ((s as any).IgorQW['strap'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd2.jpg');
  scene.text('You push your hips forward until the tip of the strap-on is against his lips. "Open your mouth and suck my dick."');
  scene.text('He opens his mouth and starts sucking on the dildo, doing a surprisingly good job by the looks of it. Maybe he\'s watched some porn or is just a naturally good cocksucker.');
  qspCall(s, 'arousal', 'foreplay_give', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Gag him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd3.jpg');
    scene.text('He\'s only taking about half the dildo into his mouth, so you reach over and place your hand on the back of his head, forcing the dildo down his throat until he starts gagging on it.');
    scene.text('"That\'s it, bitch! I want to feel my balls bouncing off your chin!" you tell him, doing your best to sound like a guy.');
    qspCall(s, 'arousal', 'foreplay_give', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck him on his back', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd4.jpg');
    scene.text('You pull away from him so your dildo slides out of his mouth before you point over to his chaise lounge. "Lay down on your back."');
    scene.text('He lays on his back on the chaise lounge as you see him biting his lip. You push up his dress and expose his panties, his little hard dick straining against the fabric. You pull his panties down and toss them aside before you grab some lube and lube up your dildo before getting on your knees between his legs.');
    scene.text('You rub the tip of your lubed dildo against his asshole until you\'re sure it\'s lubed as well before you thrust your hips forward to pop the tip of it into his ass.');
    // TODO-QSP: dynamic text: He lets out a slight hiss followed by a long low moan as you grab his hips and p...
    scene.text(`He lets out a slight hiss followed by a long low moan as you grab his hips and pull him back as more of the ${((s as any).dick_length1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dildo slides up his ass, which only makes him moan louder.`);
    scene.text('You start slowly fucking him and see the tip of his hard dick is getting wet with precum.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start really fucking him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd5.jpg');
    scene.text('You slide your knees back, spreading your legs fairly wide so you can more easily thrust your hips. You grab his legs with your hands and spread them apart, allowing you to thrust into him much easier and really start fucking him. You alternate from watching your cock slide in and out of his ass and looking at him as he moans louder and louder.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go balls deep', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd6.jpg');
    scene.text('Since he seems to be really enjoying it, you start really thrusting into him, driving yourself balls deep into his ass. He places his hands on your thighs, likely in an effort to slow you down, but you ignore it as you keep fucking him balls deep.');
    scene.text('He starts crying out each time you thrust all the way into him until he groans loudly. You glance down and see him cumming on his stomach. You ride him through his orgasm before you pull out of him.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You take the strap-on harness off and start getting dressed as he starts cleaning himself up, putting the harness away in your purse as he finishes getting his clothes back in place. You pull him over to the mirror so you can see your reflections. "So what did you think?"');
    scene.text('He blushes, looking down for several seconds before looking back up at you in the reflection. "It was amazing! I didn\'t know anything could feel that good. I\'m glad you talked me into it."');
    scene.text('You grin at him through the reflection and hug him with one arm. "I\'m glad. I liked doing it too and I\'m more than happy if you want to be friends with benefits and keep doing it."');
    scene.text('He looks thoughtful before he nods. "Yeah, I\'d like that, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Fuck him doggy style', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd7.jpg');
    scene.text('You pull away from him so your dildo slides out of his mouth before you point over to his chaise lounge. "Get on your hands and knees."');
    scene.text('He goes over and kneels on the chaise lounge, bending forward as he rests his elbows on the back of the lounge. You push up his dress and expose his panties, his little hard dick straining against the fabric. You pull his panties down and toss them aside before you grab some lube and lube up your dick before getting on the lounge behind him. You scoot up close behind him as you stroke the slick dildo with your hand.');
    scene.text('You rub the tip against his asshole until you\'re sure it\'s lubed as well before you thrust your hips forward to pop the tip of it into his ass.');
    // TODO-QSP: dynamic text: He lets out a slight hiss followed by a long low moan as you grab his hips so he...
    scene.text(`He lets out a slight hiss followed by a long low moan as you grab his hips so he can't pull away. You then push more of the ${((s as any).dick_length1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dildo up his ass and start slowly fucking him as he starts moaning louder.`);
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck him harder', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd8.jpg');
    scene.text('You grab his ass cheeks with your hands and spread them apart so you can watch your fake cock slide in and out of his ass. He starts moaning louder as you keep fucking him, which only encourages you to fuck him harder and faster.');
    scene.text('His moans start turning into grunts and he places a hand on your hip to slow you down. "Not so rough!"');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take it like a bitch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take it like a bitch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd10.jpg');
    scene.text('You push his hand away while gripping one of his hips with one hand as the other reaches up and grabs hold of his shoulder so he can\'t pull away at all.');
    scene.text('You pull your hips back before you thrust forward as hard as you can while pulling him back, burying your fake dick balls deep up his ass. He cries out in a mix of pain and pleasure as you start roughly fucking him as hard and fast as you can. "Shut up and take it, bitch!"');
    scene.text('He lowers his head and lets you roughly fuck him as he grunts and moans, occasionally hissing from an especially hard thrust. He reaches between his legs and starts jerking off before he groans loudly in orgasm. You give him one more hard thrust before pulling out of him.');
    qspCall(s, 'arousal', 'anal_strap_give', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You take the strap-on harness off and start getting dressed as he starts cleaning himself up, putting the harness away in your purse as he finishes getting his clothes back in place. You pull him over to the mirror so you can see your reflections. "So what did you think?"');
    scene.text('He blushes, looking down for several seconds before looking back up at you in the reflection. "I liked it, but you got a little too rough there at the end. It started to really hurt."');
    scene.text('You smile at him through the reflection and hug him with one arm. "Don\'t worry, you\'ll get used to it. Soon, you\'ll love being roughly fucked."');
    scene.text('He looks thoughtful. "I don\'t know about that. I think it would be better if it was less rough."');
    scene.text('You chuckle. "Trust me, all girls learn to love it."');
    scene.text('He looks skeptical, but then shrugs. "Yeah, I guess we can try again some day, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ease up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd9.jpg');
    scene.text('You push his hand away, but do slow down and his grunts turn back into moans of pleasure. "OH… yes… I love it… AH…"');
    scene.text('You seem to have hit the sweet spot, so you get into a rhythm and it doesn\'t take long before he tenses up and groans loudly. You ride him through his orgasm before you pull out of him.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You take the strap-on harness off and start getting dressed as he starts cleaning himself up, putting the harness away in your purse as he finishes getting his clothes back in place. You pull him over to the mirror so you can see your reflections. "So what did you think?"');
    scene.text('He blushes, looking down for several seconds before looking back up at you in the reflection. "It was amazing! I didn\'t know anything could feel that good. I\'m glad you talked me into it."');
    scene.text('You grin at him through the reflection and hug him with one arm. "I\'m glad. I liked doing it too and I\'m more than happy if you want to be friends with benefits and keep doing it."');
    scene.text('He looks thoughtful before he nods. "Yeah, I\'d like that, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
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

function enterStraponCrossdressBjMagic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A4');
  qspCall(s, 'npcStat', 'D<<strapNumber>>', 'a');
  if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['net'] = ((s as any).IgorQW['net'] ?? 0) + (1);
  if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['napoit'] = ((s as any).IgorQW['napoit'] ?? 0) + (1);
  if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['strap'] = ((s as any).IgorQW['strap'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd2.jpg');
  scene.text('You push your hips forward until the tip of your dick is against his lips. "Open your mouth and suck my dick."');
  scene.text('He opens his mouth and starts sucking on your cock, which feels amazing. Maybe he\'s watched a lot of porn or is just a naturally good cocksucker.');
  qspCall(s, 'arousal', 'magicd_bj', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Gag him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd3.jpg');
    scene.text('He\'s only taking about half the dildo into his mouth, so you reach over and place a hand on the back of his head, forcing your cock down his throat until he starts gagging on it.');
    scene.text('"That\'s it, bitch! I want to feel my balls bouncing off your chin!" you tell him, doing your best to sound like a guy.');
    qspCall(s, 'arousal', 'magicd_bj', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck him on his back', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd4.jpg');
    scene.text('You pull away from him so your dick slides out of his mouth before you point over to his chaise lounge. "Lay down on your back."');
    scene.text('He lays on his back on the chaise lounge as you see him biting his lip. You push up his dress and expose his panties, his little hard dick straining against the fabric. You pull his panties down and toss them aside before you grab some lube and lube up your dick before getting on your knees between his legs.');
    scene.text('You rub the tip of your lubed dick against his asshole until you\'re sure it\'s lubed as well before you thrust your hips forward to pop the tip of it into his ass.');
    // TODO-QSP: dynamic text: He lets out a slight hiss followed by a long low moan as you grab his hips and p...
    scene.text(`He lets out a slight hiss followed by a long low moan as you grab his hips and pull him back as more of your ${((s as any).dick_length1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dick slides up his ass, which only makes him moan louder.`);
    scene.text('You start slowly fucking him and see the tip of his hard dick is getting wet with precum.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start really fucking him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd5.jpg');
    scene.text('You slide your knees back, spreading your legs fairly wide so you can more easily thrust your hips. You grab his legs with your hands and spread them apart, allowing you to thrust into him much easier and really start fucking him. You alternate from watching your cock slide in and out of his ass and looking at him as he moans louder and louder.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go balls deep', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd6.jpg');
    scene.text('Since he seems to be really enjoying it, you start really thrusting into him, driving yourself balls deep into his ass. He places his hands on your thighs, likely in an effort to slow you down, but you ignore it as you keep fucking him balls deep.');
    scene.text('He starts crying out each time you thrust all the way into him until he groans loudly. You glance down and see him cumming on his stomach. You ride him through his orgasm before you pull out of him.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum in his mouth', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/mouthful_girl1.jpg');
    scene.text('You grab him and pull him up onto his knees as you stroke your cock. "Open your mouth like a good little slut and take my load," you tell him.');
    scene.text('He looks a little confused, but does as you command and opens his mouth.');
    scene.text('Once you\'ve both finished, he gives you a puzzled look. "What was that?"');
    scene.text('You smile, knowing the magic is already clouding his mind to what just happened. "Fake cum. You know some of these dildos have that."');
    scene.text('He nods and seems to believe it. "Oh… Yeah, I\'ve heard of those. It tasted salty."');
    qspCall(s, 'arousal', 'magicd_hj', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness, which breaks the magic, turning it back into a normal strapon as he starts cleaning himself up. You get dressed and put the harness away in your purse as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He blushes, looking down for several seconds before looking back up at you in the reflection. "It was amazing! I didn\'t know anything could feel that good. I\'m glad you talked me into it."');
    scene.text('You grin at him through the reflection and hug him with one arm. "I\'m glad. I liked doing it too and I\'m more than happy if you want to be friends with benefits and keep doing it."');
    scene.text('He looks thoughtful before he nods. "Yeah, I\'d like that, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Cum on his face', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/facial_girl1.jpg');
    scene.text('You grab him and pull him up onto his knees as you stroke your cock. "Take my load on that pretty face of yours like a good little slut," you tell him.');
    scene.text('He looks a little confused, but does as you command and open his mouth.');
    scene.text('Once you\'ve both finished, he gives you a puzzled look. "What was that?"');
    scene.text('You smile, knowing the magic is already clouding his mind to what just happened. "Fake cum. You know some of these dildos have that."');
    scene.text('He nods and seems to believe it. "Oh… Yeah, I\'ve heard of those," he says as he grabs some tissues to clean his face."');
    qspCall(s, 'arousal', 'magicd_hj', 2, 'dom', 'inhibition');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness, which breaks the magic, turning it back into a normal strapon as he starts cleaning himself up. You get dressed and put the harness away in your purse as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He blushes, looking down for several seconds before looking back up at you in the reflection. "It was amazing! I didn\'t know anything could feel that good. I\'m glad you talked me into it."');
    scene.text('You grin at him through the reflection and hug him with one arm. "I\'m glad. I liked doing it too and I\'m more than happy if you want to be friends with benefits and keep doing it."');
    scene.text('He looks thoughtful before he nods. "Yeah, I\'d like that, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
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
      { label: 'Fuck him doggy style', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd7.jpg');
    scene.text('You pull away from him so your dick slides out of his mouth before you point over to his chaise lounge. "Get on your hands and knees."');
    scene.text('He goes over and kneels on the chaise lounge, bending forward as he rests his elbows on the back of the lounge. You push up his dress and expose his panties, his little hard dick straining against the fabric. You pull his panties down and toss them aside before you grab some lube and lube up your dick before getting on the lounge behind him. You scoot up close behind him as you stroke your slick dick with your hand.');
    scene.text('You rub the tip against his asshole until you\'re sure it\'s lubed as well before you thrust your hips forward to pop the tip of it into his ass.');
    // TODO-QSP: dynamic text: He lets out a slight hiss followed by a long low moan as you grab his hips so he...
    scene.text(`He lets out a slight hiss followed by a long low moan as you grab his hips so he can't pull away. You then push more of your ${((s as any).dick_length1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dick up his ass and start slowly fucking him as he starts moaning louder.`);
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck him harder', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd8.jpg');
    scene.text('You grab his ass cheeks with your hands and spread them apart so you can watch your cock slide in and out of his ass. He starts moaning louder as you keep fucking him, which only encourages you to fuck him harder and faster.');
    scene.text('His moans start turning into grunts and he places a hand on your hip to slow you down. "Not so rough!"');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take it like a bitch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take it like a bitch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd10.jpg');
    scene.text('You push his hand away while gripping one of his hips with one hand as the other reaches up and grabs hold of his shoulder so he can\'t pull away at all.');
    scene.text('You pull your hips back before you thrust forward as hard as you can while pulling him back, burying your fake dick balls deep up his ass. He cries out in a mix of pain and pleasure as you start roughly fucking him as hard and fast as you can. "Shut up and take it, bitch!"');
    scene.text('He lowers his head and lets you roughly fuck him as he grunts and moans, occasionally hissing from an especially hard thrust. He reaches between his legs and starts jerking off before he groans loudly in orgasm.');
    qspCall(s, 'arousal', 'magicd_anal', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum in his ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/guy_internal_butt_cum1.jpg');
    scene.text('He reaches back and pulls his hand back with some of your cum on his fingers. He looks at you with a puzzled stare. "What was that?"');
    scene.text('You smile, knowing the magic is already clouding his mind as to what just happened. "Fake cum. You know some of these have that."');
    scene.text('He nods and seems to believe it. "Oh… Yeah, I\'ve heard of those," he says before he grabs some tissues and cleans himself up.');
    qspCall(s, 'arousal', 'magicd_anal', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness, which breaks the magic, turning it back into a normal strapon as he starts cleaning himself up. You get dressed and put the harness away in your purse as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He blushes, looking down for several seconds before looking back up at you in the reflection. "I liked it, but you got a little too rough there at the end. It started to really hurt."');
    scene.text('You smile at him through the reflection and hug him with one arm. "Don\'t worry, you\'ll get used to it. Soon, you\'ll love being roughly fucked."');
    scene.text('He looks thoughtful. "I don\'t know about that. I think it would be better if it was less rough."');
    scene.text('You chuckle. "Trust me, all girls learn to love it."');
    scene.text('He looks skeptical, but then shrugs. "Yeah, I guess we can try again some day, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Cum on his ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/guy_butt_cum2.jpg');
    scene.text('He reaches back and pulls his hand back with some of your cum on his fingers. He looks at you with a puzzled stare. "What was that?"');
    scene.text('You smile, knowing the magic is already clouding his mind as to what just happened. "Fake cum. You know some of these have that."');
    scene.text('He nods and seems to believe it. "Oh… Yeah, I\'ve heard of those," he says as he grabs some tissues and cleans himself up.');
    qspCall(s, 'arousal', 'magicd_anal', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness, which breaks the magic, turning it back into a normal strapon as he starts cleaning himself up. You get dressed and put the harness away in your purse as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He blushes, looking down for several seconds before looking back up at you in the reflection. "I liked it, but you got a little too rough there at the end. It started to really hurt."');
    scene.text('You smile at him through the reflection and hug him with one arm. "Don\'t worry, you\'ll get used to it. Soon, you\'ll love being roughly fucked."');
    scene.text('He looks thoughtful. "I don\'t know about that. I think it would be better if it was less rough."');
    scene.text('You chuckle. "Trust me, all girls learn to love it."');
    scene.text('He looks skeptical, but then shrugs. "Yeah, I guess we can try again some day, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ease up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd9.jpg');
    scene.text('You push his hand away, but do slow down and his grunts turn back into moans of pleasure. "OH… yes… I love it… AH…"');
    scene.text('You seem to have hit the sweet spot, so you get into a rhythm and it doesn\'t take long before he tenses up and groans loudly. You ride him through his orgasm before you pull out of him.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum in his ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/guy_internal_butt_cum1.jpg');
    scene.text('He reaches back and pulls his hand back with some of your cum on his fingers. He looks at you with a puzzled stare. "What was that?"');
    scene.text('You smile, knowing the magic is already clouding his mind as to what just happened. "Fake cum. You know some of these have that."');
    scene.text('He nods and seems to believe it. "Oh… Yeah, I\'ve heard of those," he says before he grabs some tissues and cleans himself up.');
    qspCall(s, 'arousal', 'magicd_anal', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness, which breaks the magic, turning it back into a normal strapon as he starts cleaning himself up. You get dressed and put the harness away in your purse as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He blushes, looking down for several seconds before looking back up at you in the reflection. "It was amazing! I didn\'t know anything could feel that good. I\'m glad you talked me into it."');
    scene.text('You grin at him through the reflection and hug him with one arm. "I\'m glad. I liked doing it too and I\'m more than happy if you want to be friends with benefits and keep doing it."');
    scene.text('He looks thoughtful before he nods. "Yeah, I\'d like that, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Cum on his ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/guy_butt_cum2.jpg');
    scene.text('He reaches back and pulls his hand back with some of your cum on his fingers. He looks at you with a puzzled stare. "What was that?"');
    scene.text('You smile, knowing the magic is already clouding his mind as to what just happened. "Fake cum. You know some of these have that."');
    scene.text('He nods and seems to believe it. "Oh… Yeah, I\'ve heard of those," he says as he grabs some tissues and cleans himself up.');
    qspCall(s, 'arousal', 'magicd_anal', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness, which breaks the magic, turning it back into a normal strapon as he starts cleaning himself up. You get dressed and put the harness away in your purse as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He blushes, looking down for several seconds before looking back up at you in the reflection. "It was amazing! I didn\'t know anything could feel that good. I\'m glad you talked me into it."');
    scene.text('You grin at him through the reflection and hug him with one arm. "I\'m glad. I liked doing it too and I\'m more than happy if you want to be friends with benefits and keep doing it."');
    scene.text('He looks thoughtful before he nods. "Yeah, I\'d like that, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
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

function enterStraponCrossdressBjSecond(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A4');
  qspCall(s, 'npcStat', 'D<<strapNumber>>', 'a');
  if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['net'] = ((s as any).IgorQW['net'] ?? 0) + (1);
  if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['napoit'] = ((s as any).IgorQW['napoit'] ?? 0) + (1);
  if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['strap'] = ((s as any).IgorQW['strap'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd2.jpg');
  scene.text('His knees barely touch the floor before he has his mouth open for you. You push your hips forward, sliding the dildo into his mouth as he starts sucking on it. He looks to be doing an even better job than last time. You can only guess that he\'s been watching porn and practicing.');
  qspCall(s, 'arousal', 'foreplay_give', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Gag him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd3.jpg');
    scene.text('He\'s taking most of the dildo into his mouth, so you reach over and place a hand on the back of his head and force it down his throat until he starts gagging on it.');
    scene.text('"That\'s it, bitch! I want to feel my balls bouncing off your chin!" you tell him, doing your best to sound like a guy.');
    qspCall(s, 'arousal', 'foreplay_give', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck him on his back', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd4.jpg');
    scene.text('You pull away from him so your dildo slides out of his mouth and point over to his chaise lounge. "Lay down on your back."');
    scene.text('He quickly gets up to lay on his back on the chaise lounge, eagerly lifting his legs up and spreading them slightly. You push up his dress and expose his panties, his little hard dick straining against the fabric. You grab some lube and lube up your dildo before getting on your knees between his legs.');
    scene.text('You rub the tip of your lubed dildo against his asshole until you\'re sure it\'s lubed as well before you thrust your hips forward to pop the tip of it into his ass.');
    // TODO-QSP: dynamic text: He lets out a slight hiss followed by a long low moan as you grab his hips and p...
    scene.text(`He lets out a slight hiss followed by a long low moan as you grab his hips and pull him back as more of the ${((s as any).dick_length1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dildo slides up his ass, which only makes him moan louder.`);
    scene.text('You start slowly fucking him and see the tip of his hard dick is getting wet with precum.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start really fucking him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd5.jpg');
    scene.text('You slide your knees back, spreading your legs fairly wide so you can more easily thrust your hips. You grab his legs with your hands and spread them apart, allowing you to thrust into him much easier and really start fucking him. You alternate from watching your cock slide in and out of his ass and looking at him as he moans louder and louder. "Tell me how much you love my cock in your ass!"');
    scene.text('He bites his lower lip while moaning louder. "OH… yes… I love… AH… it… OH… when you… fuck my… AH… ass… OH… with… your… AH… big cock!"');
    scene.text('You grin at him as he looks totally lost in pleasure, barely able to speak as you fuck his ass. "You\'re such a dirty little slut."');
    scene.text('"OH… yes… I\'m your… AH… dirty… OH… little slut… fuck me… AH… Harder!" he begs.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go balls deep', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd6.jpg');
    scene.text('Since he seems to be loving it, not to mention begging you for it, you thrust the dildo balls deep into his ass, causing him to moan even louder before you start thrusting your strap-on into him, driving it balls deep in his ass as hard as you can.');
    scene.text('He starts crying out each time you thrust into him until he groans loudly. You glance down and see him cumming on his stomach. You ride him through his orgasm before pulling out of him.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness as he starts cleaning himself up. You get dressed and put the harness away as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He looks right into your eyes through the reflection. "I loved it! Every time it feels better than the last. I\'m glad you talked me into this."');
    scene.text('You grin at him through the reflection and hug him with one arm. "I\'m glad. I liked doing it too and I\'m more than happy if you want to be friends with benefits and keep doing it."');
    scene.text('He looks thoughtful before he nods. "Yeah, I\'d like that, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Fuck him doggy style', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd7.jpg');
    scene.text('You pull away from him so your dildo slides out of his mouth before you point over to his chaise lounge. "Get on your hands and knees."');
    scene.text('He almost leaps onto the chaise lounge in his eagerness before he bends forward and rests his elbows on the back of the lounge and sticks out his ass to present it to you. You push up his dress and pull his panties down before tossing them aside. You then grab some lube and lube up your dildo before getting on the lounge behind him. You scoot up close behind him as you stroke the slick dildo in your hand.');
    scene.text('You rub the tip against his asshole until you\'re sure it\'s lubed as well before you thrust your hips forward to pop the tip of it into his ass.');
    scene.text('He lets out a long low moan and you grab his hips so he can\'t pull away, but it doesn\'t feel like he\'s trying; he seems eager to get fucked by you.');
    // TODO-QSP: dynamic text: You push more of the <<dick_length1>>cm <<$dick_girth1>> dildo into his ass, whi...
    scene.text(`You push more of the ${((s as any).dick_length1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dildo into his ass, which only makes him moan louder before you start slowly fucking him as he starts moaning louder.`);
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck him harder', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd8.jpg');
    scene.text('You grab his ass cheeks with your hands and spread them apart so you can watch your cock slide in and out of his ass. He starts moaning louder as you keep fucking him, which only encourages you to fuck him harder and faster.');
    scene.text('His moans start to get louder and louder. "OH… yeah… AH… fuck me…"');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take it like a bitch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take it like a bitch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd10.jpg');
    scene.text('You push his hand away while gripping one of his hips with one hand as the other reaches up and grabs hold of his shoulder so he can\'t pull away at all.');
    scene.text('You pull your hips back before you thrust forward as hard as you can while pulling him back, burying your fake dick balls deep up his ass. He cries out in a mix of pain and pleasure as you start roughly fucking him as hard and fast as you can. "Shut up and take it, bitch!"');
    scene.text('He lowers his head and lets you roughly fuck him as he grunts and moans, occasionally hissing from an especially hard thrust. He reaches between his legs and starts jerking off before he groans loudly in orgasm.');
    qspCall(s, 'arousal', 'anal_strap_give', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness as he starts cleaning himself up. You get dressed and put the harness away as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He blushes, looking down for several seconds before looking back up at you in the reflection. "I liked it. Even you got a little too rough at the end, I started to love being treated like that."');
    scene.text('You smile at him through the reflection and hug him with one arm. "I told you. In time, it will get even better."');
    scene.text('He looks eager at the idea. "That sounds amazing! I\'m looking forward to it, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep up the pace', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd9.jpg');
    scene.text('You seem to have hit the sweet spot, so you get into a rhythmn as he moans loudly in pleasure. "OH… yes… I love it… AH…"');
    scene.text('You hold onto his hips as you rhythmically thrust forward. It doesn\'t take long before he tenses up and groans loudly. You ride him through his orgasm before you pull out of him.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness as he starts cleaning himself up. You get dressed and put the harness away as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He looks right into your eyes through the reflection. "I loved it! Every time it feels better than the last. I\'m glad you talked me into this."');
    scene.text('You grin at him through the reflection and hug him with one arm. "I\'m glad. I liked doing it too and I\'m more than happy if you want to be friends with benefits and keep doing it."');
    scene.text('He looks thoughtful before he nods. "Yeah, I\'d like that, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
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

function enterStraponCrossdressBjMagicSecond(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A4');
  qspCall(s, 'npcStat', 'D<<strapNumber>>', 'a');
  if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['net'] = ((s as any).IgorQW['net'] ?? 0) + (1);
  if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['napoit'] = ((s as any).IgorQW['napoit'] ?? 0) + (1);
  if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['strap'] = ((s as any).IgorQW['strap'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd2.jpg');
  scene.text('His knees barely touch the floor before he has his mouth open for you. You push your hips forward, sliding your dick into his mouth as he starts sucking on it. It feels even better than last time. You guess that he\'s been watching porn and practicing.');
  qspCall(s, 'arousal', 'magicd_bj', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Gag him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd3.jpg');
    scene.text('He\'s taking most of your cock into his mouth, so you reach over and place a hand on the back of his head before forcing your dick down his throat until he starts gagging on it.');
    scene.text('"That\'s it, bitch! I want to feel my balls bouncing off your chin!" you tell him, doing your best to sound like a guy.');
    qspCall(s, 'arousal', 'magicd_bj', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck him on his back', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd4.jpg');
    scene.text('You pull away from him so your dildo slides out of his mouth and point over to his chaise lounge. "Lay down on your back."');
    scene.text('He quickly gets up to lay on his back on the chaise lounge, eagerly lifting his legs up and spreading them slightly. You push up his dress and expose his panties, his little hard dick straining against the fabric. You grab some lube and lube up your dildo before getting on your knees between his legs.');
    scene.text('You rub the tip of your lubed dildo against his asshole until you\'re sure it\'s lubed as well before you thrust your hips forward to pop the tip of it into his ass.');
    // TODO-QSP: dynamic text: He lets out a slight hiss followed by a long low moan as you grab his hips and p...
    scene.text(`He lets out a slight hiss followed by a long low moan as you grab his hips and pull him back as more of your ${((s as any).dick_length1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dick slides up his ass, which only makes him moan louder.`);
    scene.text('You start slowly fucking him and see the tip of his hard dick is getting wet with precum.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start really fucking him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd5.jpg');
    scene.text('You slide your knees back, spreading your legs fairly wide so you can more easily thrust your hips. You grab his legs with your hands and spread them apart, allowing you to thrust into him much easier and really start fucking him. You alternate from watching your cock slide in and out of his ass and looking at him as he moans louder and louder. "Tell me how much you love my cock in your ass!"');
    scene.text('He bites his lower lip while moaning louder. "OH… yes… I love… AH… it… OH… when you… fuck my… AH… ass… OH… with… your… AH… big cock!"');
    scene.text('You grin at him as he looks totally lost in pleasure, barely able to speak as you fuck his ass. "You\'re such a dirty little slut."');
    scene.text('"OH… yes… I\'m your… AH… dirty… OH… little slut… fuck me… AH… Harder!" he begs.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go balls deep', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd6.jpg');
    scene.text('Since he seems to be loving it, not to mention begging you for it, you thrust the dildo balls deep into his ass, causing him to moan even louder before you start thrusting your strap-on into him, driving it balls deep in his ass as hard as you can.');
    scene.text('He starts crying out each time you thrust into him until he groans loudly. You glance down and see him cumming on his stomach. You ride him through his orgasm before pulling out of him.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum in his mouth', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/mouthful_girl1.jpg');
    scene.text('You grab him and pull him up onto his knees as you stroke your cock. "Take my load on that pretty face of yours like a good little slut," you tell him.');
    scene.text('He looks a little confused, but does as you command and open his mouth.');
    scene.text('Once you\'ve both finished, he gives you a puzzled look. "What was that?"');
    scene.text('You smile, knowing the magic is already clouding his mind to what just happened. "Fake cum. You know some of these dildos have that."');
    scene.text('He nods and seems to believe it. "Oh… Yeah, I\'ve heard of those. It tasted salty."');
    qspCall(s, 'arousal', 'magicd_anal', 2, 'dom', 'inhibition');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness, which breaks the magic, turning it back into a normal strapon as he starts cleaning himself up. You get dressed and put the harness away in your purse as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He looks right into your eyes through the reflection. "I loved it! Every time it feels better than the last. I\'m glad you talked me into this."');
    scene.text('You grin at him through the reflection and hug him with one arm. "I\'m glad. I liked doing it too and I\'m more than happy if you want to be friends with benefits and keep doing it."');
    scene.text('He looks thoughtful before he nods. "Yeah, I\'d like that, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Cum on his face', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/facial_girl1.jpg');
    scene.text('You grab him and pull him up onto his knees as you stroke your cock. "Take my load on that pretty face of yours like a good little slut," you tell him.');
    scene.text('He looks a little confused, but does as you command and open his mouth.');
    scene.text('Once you\'ve both finished, he gives you a puzzled stare. "What was that?"');
    scene.text('You smile, knowing the magic is already clouding his mind to what just happened. "Fake cum. You know some of these have that."');
    scene.text('He nods and seems to believe it. "Oh… Yeah, I\'ve heard of those," he says as he grabs some tissues and cleans his face.');
    qspCall(s, 'arousal', 'magicd_anal', 2, 'dom', 'inhibition');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness, which breaks the magic, turning it back into a normal strapon as he starts cleaning himself up. You get dressed and put the harness away in your purse as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He looks right into your eyes through the reflection. "I loved it! Every time it feels better than the last. I\'m glad you talked me into this."');
    scene.text('You grin at him through the reflection and hug him with one arm. "I\'m glad. I liked doing it too and I\'m more than happy if you want to be friends with benefits and keep doing it."');
    scene.text('He looks thoughtful before he nods. "Yeah, I\'d like that, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
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
      { label: 'Fuck him doggy style', handler: (st: GameState) => {
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd7.jpg');
    scene.text('You pull away from him so your dildo slides out of his mouth before you point over to his chaise lounge. "Get on your hands and knees."');
    scene.text('He almost leaps onto the chaise lounge in his eagerness before he bends forward and rests his elbows on the back of the lounge and sticks out his ass to present it to you. You push up his dress and pull his panties down before tossing them aside. You then grab some lube and lube up your dick before getting on the lounge behind him. You scoot up close behind him as you stroke your slick dick in your hand.');
    scene.text('You rub the tip against his asshole until you\'re sure it\'s lubed as well before you thrust your hips forward to pop the tip of it into his ass.');
    scene.text('He lets out a long low moan and you grab his hips so he can\'t pull away, but it doesn\'t feel like he\'s trying; he seems eager to get fucked by you.');
    // TODO-QSP: dynamic text: You push more of your <<dick_length1>>cm <<$dick_girth1>> dick into his ass, whi...
    scene.text(`You push more of your ${((s as any).dick_length1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dick into his ass, which only makes him moan louder before you start slowly fucking him as he starts moaning louder.`);
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck him harder', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd8.jpg');
    scene.text('You grab his ass cheeks with your hands and spread them apart so you can watch your cock slide in and out of his ass. He starts moaning louder as you keep fucking him, which only encourages you to fuck him harder and faster.');
    scene.text('His moans start to get louder and louder. "OH… yeah… AH… fuck me…"');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take it like a bitch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take it like a bitch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).IgorQW) (s as any).IgorQW = {}; (s as any).IgorQW['bottom'] = ((s as any).IgorQW['bottom'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd10.jpg');
    scene.text('You push his hand away while gripping one of his hips with one hand as the other reaches up and grabs hold of his shoulder so he can\'t pull away at all.');
    scene.text('You pull your hips back before you thrust forward as hard as you can while pulling him back, burying your dick balls deep up his ass. He cries out in a mix of pain and pleasure as you start roughly fucking him as hard and fast as you can. "Shut up and take it, bitch!"');
    scene.text('He lowers his head and lets you roughly fuck him as he grunts and moans, occasionally hissing from an especially hard thrust. He reaches between his legs and starts jerking off before he groans loudly in orgasm.');
    qspCall(s, 'arousal', 'magicd_anal', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum in his ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/guy_internal_butt_cum1.jpg');
    scene.text('He reaches back and pulls his hand back with some of your cum on his fingers. He looks at you with a puzzled stare. "What was that?"');
    scene.text('You smile, knowing the magic is already clouding his mind as to what just happened. "Fake cum. You know some of these have that."');
    scene.text('He nods and seems to believe it. "Oh… Yeah, I\'ve heard of those," he says before he grabs some tissues and cleans himself up.');
    qspCall(s, 'arousal', 'magicd_anal', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness as he starts cleaning himself up. You get dressed and put the harness away as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He blushes, looking down for several seconds before looking back up at you in the reflection. "I liked it. Even you got a little too rough at the end, I started to love being treated like that."');
    scene.text('You smile at him through the reflection and hug him with one arm. "I told you. In time, it will get even better."');
    scene.text('He looks eager at the idea. "That sounds amazing! I\'m looking forward to it, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Cum on his ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/guy_butt_cum2.jpg');
    scene.text('He reaches back and pulls his hand back with some of your cum on his fingers. He looks at you with a puzzled stare. "What was that?"');
    scene.text('You smile, knowing the magic is already clouding his mind as to what just happened. "Fake cum. You know some of these have that."');
    scene.text('He nods and seems to believe it. "Oh… Yeah, I\'ve heard of those," he says as he grabs some tissues and cleans himself up.');
    qspCall(s, 'arousal', 'magicd_anal', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness as he starts cleaning himself up. You get dressed and put the harness away as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He blushes, looking down for several seconds before looking back up at you in the reflection. "I liked it. Even you got a little too rough at the end, I started to love being treated like that."');
    scene.text('You smile at him through the reflection and hug him with one arm. "I told you. In time, it will get even better."');
    scene.text('He looks eager at the idea. "That sounds amazing! I\'m looking forward to it, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep up the pace', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/crossdress/strapon_cd9.jpg');
    scene.text('You seem to have hit the sweet spot, so you get into a rhythmn as he moans loudly in pleasure. "OH… yes… I love it… AH…"');
    scene.text('You hold onto his hips as you rhythmically thrust forward. It doesn\'t take long before he tenses up and groans loudly in orgasm.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum in his ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/guy_internal_butt_cum1.jpg');
    scene.text('He reaches back and pulls his hand back with some of your cum on his fingers. He looks at you with a puzzled stare. "What was that?"');
    scene.text('You smile, knowing the magic is already clouding his mind as to what just happened. "Fake cum. You know some of these have that."');
    scene.text('He nods and seems to believe it. "Oh… Yeah, I\'ve heard of those," he says before he grabs some tissues and cleans himself up.');
    qspCall(s, 'arousal', 'magicd_anal', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness, which breaks the magic, turning it back into a normal strapon as he starts cleaning himself up. You get dressed and put the harness away in your purse as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He looks right into your eyes through the reflection. "I loved it! Every time it feels better than the last. I\'m glad you talked me into this."');
    scene.text('You grin at him through the reflection and hug him with one arm. "I\'m glad. I liked doing it too and I\'m more than happy if you want to be friends with benefits and keep doing it."');
    scene.text('He looks thoughtful before he nods. "Yeah, I\'d like that, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Cum on his ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/guy_butt_cum2.jpg');
    scene.text('He reaches back and pulls his hand back with some of your cum on his fingers. He looks at you with a puzzled stare. "What was that?"');
    scene.text('You smile, knowing the magic is already clouding his mind as to what just happened. "Fake cum. You know some of these have that."');
    scene.text('He nods and seems to believe it. "Oh… Yeah, I\'ve heard of those," he says as he grabs some tissues and cleans himself up.');
    qspCall(s, 'arousal', 'magicd_anal', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('You start taking off the strap-on harness, which breaks the magic, turning it back into a normal strapon as he starts cleaning himself up. You get dressed and put the harness away in your purse as he finishes getting his clothes back in place. You grab him and pull him over to the mirror so you can both look into it and see your reflections. "So what did you think?"');
    scene.text('He looks right into your eyes through the reflection. "I loved it! Every time it feels better than the last. I\'m glad you talked me into this."');
    scene.text('You grin at him through the reflection and hug him with one arm. "I\'m glad. I liked doing it too and I\'m more than happy if you want to be friends with benefits and keep doing it."');
    scene.text('He looks thoughtful before he nods. "Yeah, I\'d like that, but I should really change."');
    scene.text('You nod in agreement. "Yeah, I should likely get going myself. See you later."');
    scene.text('You gather up your stuff and leave as he changes back into his clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
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
    case 'din_sex':
      enterDinSex(s, scene);
      break;
    case 'din_igor_end':
      enterDinIgorEnd(s, scene);
      break;
    case 'din_krossdresssex':
      enterDinKrossdresssex(s, scene);
      break;
    case 'strap on':
      enterStrapOn(s, scene);
      break;
    case 'din_sisterkom_krossdress':
      enterDinSisterkomKrossdress(s, scene);
      break;
    case 'strapon_crossdress':
      enterStraponCrossdress(s, scene);
      break;
    case 'strapon_crossdress_bj':
      enterStraponCrossdressBj(s, scene);
      break;
    case 'strapon_crossdress_bj_magic':
      enterStraponCrossdressBjMagic(s, scene);
      break;
    case 'strapon_crossdress_bj_second':
      enterStraponCrossdressBjSecond(s, scene);
      break;
    case 'strapon_crossdress_bj_magic_second':
      enterStraponCrossdressBjMagicSecond(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const igorsex: LocationDef = {
  name: 'igorsex',
  title: 'Igor\'s sister\'s room',
  region: 'other',
  enter: enter,
};
