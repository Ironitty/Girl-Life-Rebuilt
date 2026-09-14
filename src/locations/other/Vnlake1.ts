import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/vnlake1/vnlake1.jpg');
  scene.text('While you are sunbathing, a tipsy girl holding a bottle of wine walks up to you. She sits down next to you and begins to stroke your back.');
  qspCall(s, 'willpower', 'sex', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Drive her off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Drive her off', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['Nudelake', ''] },
    ]);
  }
  scene.actions([
    { label: 'Kiss', handler: (st: GameState) => {
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    scene.img('images/locations/city/residential/lake/sex/vnlake1/vnlake2.jpg');
    scene.text('You turn to her and kiss her lips. She begins to fondle your breasts with her tongue, and her hand massages your pussy.');
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(s, 'arousal', 'foreplay', (-5), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Proceed', goto: ['Vnlake1', 'variant'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVariant(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/vnlake1/vnlake0.jpg');
  scene.text('The girl looks at you in anticipation of your actions.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lick her', goto: ['Vnlake1', 'ukuni'] },
    { label: 'Ask her to lick you', goto: ['Vnlake1', 'kuni'] },
    { label: 'Ask her to lick your anus', goto: ['Vnlake1', 'anuli'] },
    { label: 'Insert the bottle in her pussy', goto: ['Vnlake1', 'bvag'] },
    { label: 'Insert the bottle in her ass', goto: ['Vnlake1', 'banal'] },
    { label: 'Ask her to insert the bottle in your pussy', goto: ['Vnlake1', 'ubvag'] },
    { label: 'Ask her to insert the bottle in your ass', goto: ['Vnlake1', 'ubanal'] },
    { label: 'Sit on the bottle.', goto: ['Vnlake1', 'ubsit'] },
    { label: 'Rub pussies.', goto: ['Vnlake1', 'sex'] },
  ]);
  scene.build();
}

function enterUkuni(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/vnlake1/vnlake4.jpg');
  scene.text('You kiss her breasts, eventually moving down lower and lower until your mouth reaches her pussy. You begin to caress her with your tongue, opening the route for your tongue to touch her clitoris. She pushes her lips apart with her fingers to give you full access, and you lap away.');
  qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'More', goto: ['Vnlake1', 'variant'] },
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enterKuni(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/vnlake1/vnlake5.jpg');
  scene.text('The girl runs her tongue over your thighs and crotch and delicately kisses your vagina. Her tongue slides over your slit then, caressing your clitoris, it penetrates your vagina.');
  qspCall(s, 'arousal', 'cuni', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'More', goto: ['Vnlake1', 'variant'] },
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enterAnuli(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/vnlake1/vnlake6.jpg');
  scene.text('She kisses your buttocks affectionately, eventually moving to the center. Reaching her goal, she spreads your anus with her tongue, then shoves it inside, pulls back to again lick the anus, then repeats several times.');
  qspCall(s, 'arousal', 'cuni', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'More', goto: ['Vnlake1', 'variant'] },
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enterBvag(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/vnlake1/vnlake7.jpg');
  scene.text('You take the bottle neck and poke it into her pussy. She kisses you while you drive it in and out with one hand and, with the other, fondle her breasts.');
  qspCall(s, 'arousal', 'vaginal_dildo_give', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'More', goto: ['Vnlake1', 'variant'] },
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enterBanal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/vnlake1/vnlake8.jpg');
  scene.text('You take a bottle, licking the neck, trying to leave as much saliva on it as you can, gently insert it into the girls anus. You start to fuck her ass with the bottle, slowly at first then faster and faster.');
  qspCall(s, 'arousal', 'anal_dildo_give', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'More', goto: ['Vnlake1', 'variant'] },
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enterUbvag(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/vnlake1/vnlake9.jpg');
  scene.text('The girl puts the bottle in your pussy. She moves it back and forth while constantly turning it. It feels really good and just keeps getting better. You start to fantasize about having sex with a stranger as your body shudders in orgasm.');
  qspCall(s, 'arousal', 'vaginal_dildo', 10, 'lesbian');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enterUbanal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/vnlake1/vnlake10.jpg');
  scene.text('The girl spits on your ass, collects saliva on the bottle neck and inserts it into your anus. You feel the glass slide into your ass, bringing you pleasure.');
  qspCall(s, 'arousal', 'anal_dildo', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'More', goto: ['Vnlake1', 'variant'] },
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enterUbsit(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/vnlake1/vnlake11.jpg');
  scene.text('You put the bottle down and sit on it with your anus. You like the slippery feel of it. The girl caresses your breasts with her tongue until you get back off the bottle.');
  qspCall(s, 'arousal', 'anal_dildo', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'More', goto: ['Vnlake1', 'variant'] },
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/vnlake1/vnlake12.jpg');
  scene.text('You sit across from each other, your legs interwoven so your pussies touch, and start to move your hips while caressing each other. You carry on doing this while kissing and touching each other until the wave of pleasure covers you both.');
  qspCall(s, 'arousal', 'trib', 10, 'lesbian');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'variant':
      enterVariant(s, scene);
      break;
    case 'ukuni':
      enterUkuni(s, scene);
      break;
    case 'kuni':
      enterKuni(s, scene);
      break;
    case 'anuli':
      enterAnuli(s, scene);
      break;
    case 'bvag':
      enterBvag(s, scene);
      break;
    case 'banal':
      enterBanal(s, scene);
      break;
    case 'ubvag':
      enterUbvag(s, scene);
      break;
    case 'ubanal':
      enterUbanal(s, scene);
      break;
    case 'ubsit':
      enterUbsit(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Vnlake1: LocationDef = {
  name: 'Vnlake1',
  title: 'While you are sunbathing, a tipsy girl holding a bottle of w',
  region: 'other',
  description: ['While you are sunbathing, a tipsy girl holding a bottle of wine walks up to you. She sits down next to you and begins to stroke your back.'],
  enter: enter,
};
