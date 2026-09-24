import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).menu_loc = 'pav_voc_school_shower';
  (s as any).menu_arg = 'shower';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Women\'s Shower</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_jen.jpg');
  scene.text('The shower is divided into two sections: a dressing room with lockers and the actual shower area with tiled floor and walls. Making sure that no one is in the shower, you walk over to lock the door. To your dismay, you discover that the lock has been removed, probably for security purposes.');
  scene.text('What to do? You might walk home all sweaty, but what if you meet someone you know? You\'re already here, so you might as well take the shower…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take off your clothes', goto: ['pav_voc_school_shower', 'undress'] },
    { label: 'Walk out', goto: ['pav_voc_school', 'gymnasium'] },
  ]);
  scene.build();
}

function enterUndress(s: GameState, scene: SceneBuilder): void {
  ((s as any).teacher = (s as any).teacher ?? {})['level'] = ((s as any).teacher['level'] ?? 0) - (1);
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (3);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/clinic/gyno/sex/ptu_shower_1.jpg');
  scene.text('You decide to take a shower after all. You\'re already here, so you might as well do it. You undress, standing next to your locker, taking a last look around to make sure no one is there.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Head to the shower', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 10) + 0) === 0  &&  ((st as any).pcs_horny ?? 0) >= 70) {
      qspGoto(st, 'pav_voc_school_shower', 'shower_event');
    }
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (3);
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.text('<center><b>Shower</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_medush.jpg');
    scene.text('You take a quick shower, hoping that no one walks in on you.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Get dressed and leave', goto: ['pav_voc_school', 'gymnasium'] },
    ]);
  } },
    { label: 'Change your mind', goto: ['pav_voc_school', 'gymnasium'] },
  ]);
  scene.build();
}

function enterShowerEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (3);
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/clinic/gyno/sex/ptu_shower_2.jpg');
  scene.text('After putting your clothes away in the locker, you walk over to the showers. You turn on the shower and feel the first cold water drops, but it doesn\'t take long before the water becomes warm and you begin to enjoy it.');
  scene.text('You begin lathering yourself, covering your entire body with soap when suddenly you hear two male voices enter the showers, loudly commenting and laughing…');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tease them', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/ptu_shower_3.jpg');
    scene.text('Feeling aroused that someone walked in on you, you try to keep quiet while your hand begins sliding down toward your clit. The closer your hand gets, the more a warm feeling rises inside you.');
    scene.text('You should stop, but you can\'t as your hand reaches down and you begin touching yourself. It doesn\'t take long before you\'re dripping wet. Knowing that you must keep quiet, you try your best to stay as silent as possible. You feel your body fill with warmth, and you close your eyes in anticipation…');
    qspCall(st, 'arousal', 'clit_finger', 2, 'self');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/ptu_shower_4.jpg');
    scene.text('Unable to keep silent, you let out a small moan. Immediately you regret not being able to stay quiet, and as you open your eyes, there are two guys standing in front of you, watching as your hand is still touching your clit.');
    qspCall(st, 'arousal', 'clit_finger', 2, 'self');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Look at them', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'First shower guy', (Math.floor(Math.random() * 4) + 17), 1, 1);
    qspCall(st, 'npcStat', '$npclastgenerated');
    qspCall(st, 'npcgeneratec', '0', 'Second shower guy', (Math.floor(Math.random() * 4) + 17), 1, 1);
    qspCall(st, 'npcStat', '$npclastgenerated', 'a');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/ptu_shower_5.jpg');
    scene.text('Frightened, you jump back and try to cover yourself, but it\'s too late—they\'ve already blocked your exit. Looking down at their pants, you clearly see their erections pressing against the fabric.');
    scene.text('They look at you with lust in their eyes as they get ready to join you. They quickly undress and enter the shower. Before you can react, one of them reaches out and starts playing with your nipple, making you involuntarily moan.');
    scene.text('The guy grabbing you turns to his friend, "Look at this one, she doesn\'t seem to mind…"');
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Give them a handjob', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/ptu_shower_6.jpg');
    scene.text('The other guy smirks as he approaches, and they slowly lower you down. With their cocks at head height, you grab them with your hands and begin stroking them. Your hands move along the full length, pleasuring them both simultaneously.');
    scene.text('As their cocks continue to grow and are right near your face, you\'re not sure if you can resist the temptation to suck them.');
    qspCall(st, 'arousal', 'hj', 3, ((st as any).npcID ?? 0), 'group', 'unknown');
    qspCall(st, 'arousal', 'hj', (-3), ((st as any).npcID1 ?? 0), 'group', 'unknown');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck their cocks', handler: (st: GameState) => {
    if ((!((st as any).ptu_trenerssex ?? 0))) {
      (st as any).ptu_trenerssex = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (2);
    }
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/ptu_shower_7.jpg');
    scene.text('You continue to play for a short while before wrapping your lips around one of the penis heads. You use your tongue to massage the head, and before you know it, your head starts bobbing up and down as you try to take him as deep as possible.');
    scene.text('While you please one with your mouth, you make sure not to forget about the second one, continuing to stroke him passionately.');
    scene.text('Suddenly, you hear the guy you\'re giving a blowjob to say, "I want to fuck this little minx by myself."');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'group', 'deepthroat', 'unknown', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-5), ((st as any).npcID1 ?? 0), 'group', 'unknown', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Have him fuck you', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/ptu_shower_8.jpg');
    scene.text('The second guy moves away and watches while the first sits down and has you straddle him. You begin to slowly move, trying to press yourself deeper and deeper onto his cock.');
    scene.text('You feel a pleasant sensation with every penetration. As you increase the pace, you feel yourself getting more excited, and you use your hand to stimulate your clit to reach orgasm faster. As you furiously finger yourself while his cock presses against your inner walls, it doesn\'t take long before your body starts shaking and you loudly orgasm.');
    scene.text('As you return to your senses, you can feel his cock twitching inside you. He barely manages to pull out and cum in your mouth.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID ?? 0), 'unknown');
    qspCall(st, 'arousal', 'vaginal_finger', (-5), 'unknown', 'self');
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'The other guy joins in', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/ptu_shower_10.jpg');
    scene.text('As you pant, you\'re suddenly grabbed by the second guy. Not giving you a chance to rest, he forcefully bends you over and smears shampoo on your ass as lube. You feel discomfort and pain as he enters you anally.');
    scene.text('You turn around to make him stop, but he\'s already started, and there\'s no stopping him now. You start to moan, not sure if it\'s from pain or pleasure. You try your best to relax your anus to relieve the pressure, but his cock is too big and is stretching you.');
    scene.text('Trying to escape the pain, you begin to fantasize about getting your pussy fucked again. Before you know it, the pain subsides and you begin to enjoy his long, hard thrusts. Just as you\'ve finally adjusted to his pace and started to play along with him, suddenly…');
    scene.text('He begins groaning loudly, and his cock stiffens. He pulls out, and after a few jerks, he shoots all over your face while you eagerly try to catch every drop with your mouth.');
    qspCall(st, 'pain', '3', 'asshole', 'pierce');
    qspCall(st, 'arousal', 'anal', 5, ((st as any).npcID1 ?? 0), 'rough', 'unknown');
    qspCall(st, 'cum_call', 'face', ((st as any).npcID1 ?? 0));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'What now?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/ptu_shower_11.jpg');
    scene.text('He smirks as he grabs hold of you and whispers, "We\'re not done yet…" Feeling inferior to his friend because he hasn\'t made you orgasm yet, he shoves his cock inside you and begins furiously thrusting.');
    scene.text('You begin to moan loudly as he penetrates you deeper and deeper. He frantically increases his pace as your orgasm builds quickly, and before you know it, he manages to bring you to climax too. This time, you let out a tear as your body shakes from the intense orgasm.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID1 ?? 0), 'rough', 'unknown');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/ptu_shower_12.jpg');
    scene.text('"I feel so relieved," says the first guy.');
    scene.text('"Me too," the second guy nods approvingly.');
    scene.text('"Hopefully we\'ll catch her here another time," they say in unison as they slyly look at each other.');
    scene.text('They wave to you as they leave. You still stand in the shower watching them with a silly smile, your body still recovering from the last orgasm. As they leave, you quickly soap yourself again and begin reflecting on what just happened.');
    scene.text('The water feels refreshing on your naked body. Even though you didn\'t plan for this to happen, you don\'t really mind—you just hope there won\'t be any nasty rumors going around now…');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['pav_voc_school', 'gymnasium'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'shower':
      enterShower(s, scene);
      break;
    case 'undress':
      enterUndress(s, scene);
      break;
    case 'shower_event':
      enterShowerEvent(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_voc_school_shower: LocationDef = {
  name: 'pav_voc_school_shower',
  title: 'Women\'s Shower',
  region: 'pavlovsk',
  enter: enter,
};
