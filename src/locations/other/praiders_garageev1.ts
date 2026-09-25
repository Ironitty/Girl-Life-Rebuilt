import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRadsex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pav', 'sex', 3);
  scene.img('images/characters/pavlovsk/school/boy/radomir/sex/garage/practice1.jpg');
  scene.text('Once the two of you are alone, he turns the radio back on and sits on an up turned box next to it. "Come on, give me a little show."');
  scene.text('You dance around and start slowly stripping for him as he quickly pulls out his semi erect cock. "Come over here and wrap those beautiful lips around my dick."');
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Blow him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/garage/practice2.jpg');
    scene.text('You dance your way over to him before dropping down to your knees. You take his dick into your mouth, wrapping your lips tightly around it, and start sucking him. You feel his dick quickly get hard in your mouth as you bob your head up and down. "Oh yeah, that\'s it! You\'ve got skills, girl."');
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep sucking him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/garage/practice3.jpg');
    scene.text('He starts moving his hips as you suck his cock and starts fucking your mouth. "You really know how to suck a cock! You must get a lot of practice." You don\'t comment back as you keep sucking him. "I want to fuck that sweet little pussy of yours now."');
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'stat', '');
    if (((st as any).stat ?? 0)?.['vaginal'] >= 1) {
      scene.actions([
        { label: 'Let him fuck you', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A154');
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/garage/practice4.jpg');
    scene.text(`You just nod and he pulls you up and quickly strips you from the waist down. He then turns you around and pulls you into his lap before you feel his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick slide inside your wet pussy.`);
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/garage/practice5.jpg');
    scene.text('He reaches up to play with your breasts as you bounce on his lap, thrusting yourself on and off his cock. "Damn, your pussy\'s so fucking tight! I can feel my cock stretching it out. Don\'t worry, you\'ll get used to it soon enough."');
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/garage/practice7.jpg');
    if (((st as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      qspCall(st, 'arousal', 'auto_lube', 'anal', 'custom');
      scene.text('He suddenly stands up, pulling you up with him before he turns and lowers you to the ground on your hands and knees. Instead of going back into your pussy, you feel the head of his dick pressing against your asshole. You reach over and quickly grab your purse, pulling out the lube and handing it back to him. "Use this lube first."');
      scene.text('He growls. "Fuck, what is it with you girls and lube? You\'re as bad as Nush!" He begrudgingly grabs the lube and squirts some on your anus before roughly shoving his dick up your ass. He doesn\'t give you time to catch your breath before he starts fucking your ass hard and fast, causing you to groan in pain.');
    } else {
      scene.text('He suddenly stands up, pulling you up with him. He turns and lowers you to the ground until you\'re on your hands and knees. Instead of going back into your pussy, you feel the head of his dick pressing against your asshole. Before you can say anything, he roughly shoves his dick up your ass, not stopping to give you time to catch your breath before he starts fucking your ass hard and fast, causing you to groan in pain.');
    }
    qspCall(st, 'arousal', 'anal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Not so rough', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/garage/practice8.jpg');
    scene.text('You doubt he cares about your comfort as he hammers away at your ass. "Not.. so… rough Rad!" you grunt out at him.');
    scene.text('He just grabs your hips and slams himself balls deep into you and goes even faster. "You bitches always fucking complain, but then you start moaning like whores and have an orgasm. Stop pretending you don\'t love being fucked raw!"');
    qspCall(st, 'arousal', 'anal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/garage/practice9.jpg');
    scene.text('You grit your teeth. A part of you is enjoying it, but it would be a lot more enjoyable if he wasn\'t so rough. Just as you think it might be getting too much for you, he groans loudly and you feel him filling your ass up with his cum. Once he finishes, he stands up and tucks his dick away before walking over and grabbing a beer while you get dressed. He downs the whole beer before you finish getting dressed. "Come on, let\'s go. I need to lock this place up."');
    scene.text('As soon as you finish getting dressed, he ushers you out of the garage and locks it before he turns and gives you a kiss on the lips. "I had a great time. Catch you later."');
    qspCall(st, 'arousal', 'anal', 3);
    qspCall(st, 'cum_call', 'anus', 'A154', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
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
      scene.actions([
        { label: 'I\'m a virgin', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A154');
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/garage/practice6.jpg');
    if (((st as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      qspCall(st, 'arousal', 'auto_lube', 'anal', 'custom');
      scene.text('He suddenly stands up, pulling you up with him. He turns and lowers you to the ground until you\'re on your hands and knees. Instead of going back into your pussy, you feel the head of his dick pressing against your asshole. You reach over and quickly grab your purse, pulling out the lube and handing it back to him. "Use this lube first."');
      scene.text('He growls. "Fuck, what is it with you girls and lube? You\'re as bad as Nush!" He begrudgingly grabs the lube and squirts some on your anus before roughly shoving his dick up your ass. He doesn\'t give you time to catch your breath before he starts fucking your ass hard and fast, causing you to groan in pain.');
    } else {
      scene.text('He suddenly stands up, pulling you up with him. He turns and lowers you to the ground until you\'re on your hands and knees. Instead of going back into your pussy, you feel the head of his dick pressing against your asshole. Before you can say anything, he roughly shoves his dick up your ass, not stopping to give you time to catch your breath before he starts fucking your ass hard and fast, causing you to groan in pain.');
    }
    qspCall(st, 'arousal', 'anal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/garage/practice7.jpg');
    scene.text(`He roughly fucks your ass hard and fast. "Fuck, you have a tight little ass, ${((st as any).pcs_nickname ?? '')}!" Then he laughs. "Don't worry, we'll have it stretched out in no time."`);
    scene.text('He then pulls nearly all the way out and slams himself back in balls deep, hammering away at you.');
    qspCall(st, 'arousal', 'anal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Not so rough', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/garage/practice8.jpg');
    scene.text('You doubt he cares about your comfort as he hammers away at your ass. "Not.. so… rough Rad!" you grunt out at him.');
    scene.text('He just grabs your hips and slams himself balls deep into you and goes even faster. "You bitches always fucking complain, but then you start moaning like whores and have an orgasm. Stop pretending you don\'t love being fucked raw!"');
    qspCall(st, 'arousal', 'anal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/garage/practice9.jpg');
    scene.text('You grit your teeth. A part of you is enjoying it, but it would be a lot more enjoyable if he wasn\'t so rough. Just as you think it might be getting too much for you, he groans loudly and you feel him filling your ass up with his cum. Once he finishes, he stands up and tucks his dick away before walking over and grabbing a beer while you get dressed. He downs the whole beer before you finish getting dressed. "Come on, let\'s go. I need to lock this place up."');
    scene.text('As soon as you finish getting dressed, he ushers you out of the garage and locks it before he turns and gives you a kiss on the lips. "I had a great time. Catch you later."');
    qspCall(st, 'arousal', 'anal', 3);
    qspCall(st, 'cum_call', 'anus', 'A154', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'radsex':
      enterRadsex(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const praiders_garageev1: LocationDef = {
  name: 'praiders_garageev1',
  title: 'Once the two of you are alone, he turns the radio back on an',
  region: 'other',
  enter: enter,
};
