import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', '$lbz_npc');
  scene.img('images/shared/sex/kiss/kiss.jpg');
  scene.text(`${((s as any).boydesc ?? '')} leads you back to his place, gently brushing your cheek, "You are really hot, but I bet you know that already, don't you?" You start feeling a tingling sensation in your stomach. ${((s as any).boydesc ?? '')} lowers his hand, raising your face up towards his and gives you a slow, passionate kiss.`);
  qspCall(s, 'arousal', 'kiss', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Let him lead', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bimbo.knees3.jpg');
    scene.text(`${((st as any).boydesc ?? '')} continues kissing you as he begins unzipping his pants, revealing his bulge. He proceeds to run his hand across your body, feeling your breasts, all the way down to your ass. Looking down, you see his cock is rock-hard.`);
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Reach for his cock', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bj19.jpg');
    scene.text('Feeling aroused, you allow your hands to wander down his waist, pulling down his pants. He makes no attempt to stop you as you gently pull out his cock, lightly stroking it.');
    scene.text(`${((st as any).boydesc ?? '')} forces you down on your knees in front of him. You can't avert your gaze from his cock as you slowly lean forward and lightly lick the tip of his penis. Looking up, you make sure to maintain eye contact with him, making him shiver in anticipation of you sucking his cock.`);
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'arousal', 'foreplay_give', (-5));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck his cock', goto: ['LBZhouse', 'BJ'] },
    ]);
  } },
    ]);
  } },
    { label: 'Keep on kissing him', handler: (st: GameState) => {
    scene.img('images/shared/sex/kiss/kiss_lips.mp4');
    scene.text(`${((st as any).boydesc ?? '')} continues kissing you as his hands wander over your body, slowly removing clothes while kissing you. Once naked, he starts teasing your nipples, sending tingles all through your body.`);
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'arousal', 'foreplay', (-5));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Jerk him off', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/hj0.mp4');
    scene.text(`You get on your knees in front of him and wrap your fingers around his hard shaft. His cock starts throbbing as you stroke it, leaking precum. You continue stroking it as he groans. After a few seconds, ${((st as any).boydesc ?? '')} moves back, "${((st as any).pcs_nickname ?? '')}, slow down, I'm not about to blow my load already…"`);
    qspCall(st, 'arousal', 'hj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Vaginal', goto: ['LBZhouse', 'Vaginal'] },
      { label: 'Anal', goto: ['LBZhouse', 'Anal'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBJ(s: GameState, scene: SceneBuilder): void {
  (s as any).VK = (Math.floor(Math.random() * 11) + 0);
  scene.img(`images/shared/sex/blowjob/bj${((s as any).VK ?? '')}.mp4`);
  scene.text(`You wrap your lips round ${((s as any).boydesc ?? '')}'s penis as he pushes it into your mouth. You look up at him, seeing an adoring smile on his face; he's clearly enjoying himself. You lick and suck on his cock as you can feel him grow in your mouth, "Open wide, ${((s as any).pcs_nickname ?? '')}."`);
  qspCall(s, 'arousal', 'bj', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Swallow', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/cumf60.mp4');
    scene.text(`You keep his cock inside your mouth as ${((st as any).boydesc ?? '')} fills your mouth with his hot cum. You never break eye contact as you fully milk his cock until he's totally drained. "That was a great blowjob…" As he pulls out his cock you make sure to swallow every single drop.`);
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Shower', goto: ['LBZhouse', 'Shower'] },
      { label: 'Finish', goto: ['LBZhouse', 'End'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVaginal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/vadim/sex/mitka0.mp4');
  scene.text(`${((s as any).boydesc ?? '')} reaches down, helping you to your feet before grabbing onto your hips and guiding you to the bed. He gently pushes you onto your back, lines up his penis with your pussy, and pushes inside. He starts fucking your pussy, gently at first, before picking up his pace and moaning loudly. You lay still, enjoying his cock inside of you, thrusting its way deeper in you, causing waves of pleasure to fill you. After a few seconds ${((s as any).boydesc ?? '')} says, "I'm about to cum."`);
  qspCall(s, 'arousal', 'vaginal', 5);
  qspCall(s, 'stat', '');
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
    scene.actions([
      { label: 'Cum inside', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/vadim/sex/mitka2.mp4');
    scene.text(`${((st as any).boydesc ?? '')} throws you on the bed, spreads your legs, and enters you without hesitation. Ignoring the sounds you make, he picks up the pace and fucks you hard, filling the room with wet slaps as he pounds your pussy. Out of the middle of nowhere he stops thrusting and cums inside, surprising you, but since you were going to let him cum inside you decide you aren't mad about it.`);
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'cum_call', '', ((st as any).boy ?? 0), 0);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['LBZhouse', 'End'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/analcreampie/cumanal2.mp4');
    scene.text(`In between your moans, you sense he's about to cum, and tell him to pull out. ${((st as any).boydesc ?? '')} thrusts a couple more times and just manages to pull out as he cums all over your stomach, emptying his balls.`);
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'cum_call', 'stomach', ((st as any).boy ?? 0));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Hop in the shower', goto: ['LBZhouse', 'Shower'] },
      { label: 'Leave without a shower', goto: ['LBZhouse', 'End'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/anal/doggy/anal9.mp4');
  scene.text(`${((s as any).boydesc ?? '')} has you get on your hands and knees as he prepares you asshole by putting a finger in first. You feel him pull it out and then feel his cock pressing against your asshole, before he slowly pushes inside, causing a jolt of pleasure. He waits a bit for you to get used to his size before he starts thrusting in you.`);
  qspCall(s, 'arousal', 'anal_finger', 5);
  qspCall(s, 'arousal', 'anal', (-5));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Have him finish', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/analcreampie/cumanal2.mp4');
    scene.text(`${((st as any).boydesc ?? '')} is enjoying himself as he pounds your ass before ramming his dick completely inside of your ass, filling you up. Even as he's emptied, you can still feel his cock throb inside of you. He slowly pulls out, giving you one last sensation as he leaves your ass.`);
    qspCall(st, 'arousal', 'anal', 5);
    qspCall(st, 'cum_call', 'anus', ((st as any).boy ?? 0));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Hop in the shower', goto: ['LBZhouse', 'Shower'] },
      { label: 'Leave without a shower', goto: ['LBZhouse', 'End'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/dush.mp4');
  scene.text('You grab your stuff and walk over to the bathroom to have a shower. You carefully run the faucet, checking the water temperature before washing yourself off, enjoying the warm water hitting your body.');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_hairbsh = 1;
  (s as any).pcs_makeup = 1;
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  (s as any).LBZhouseShower = 1;
  qspCall(s, 'stat', '');
  scene.text('Finishing, you dry yourself off, get dressed, and head out.');
  scene.actions([
    { label: 'Get out of the bathroom', goto: ['LBZhouse', 'End'] },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/endkiss.mp4');
  if (((s as any).LBZhouseShower ?? 0) === 1) {
    scene.text(`As you leave the bathroom, ${((s as any).boydesc ?? '')} is waiting by the bathroom door. He gives you a kiss on the cheek, "I've enjoyed your visit, ${((s as any).pcs_nickname ?? '')}." You smile back and the two of you have a short conversation before you leave.`);
  } else {
    scene.text(`${((s as any).boydesc ?? '')} watches on as you get dressed and then gets up as you finish. You slowly make your way to the door, talking and laughing with him about what just occurred.`);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).LBZhouseShower = 0;
  }, goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'BJ':
      enterBJ(s, scene);
      break;
    case 'Vaginal':
      enterVaginal(s, scene);
      break;
    case 'Anal':
      enterAnal(s, scene);
      break;
    case 'Shower':
      enterShower(s, scene);
      break;
    case 'End':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const LBZhouse: LocationDef = {
  name: 'LBZhouse',
  title: 'You grab your stuff and walk over to the bathroom to have a ',
  region: 'other',
  enter: enter,
};
