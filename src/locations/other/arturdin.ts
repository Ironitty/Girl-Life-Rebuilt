import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFacefuck(s: GameState, scene: SceneBuilder): void {
  (s as any).artfacefucktimes = ((s as any).artfacefucktimes ?? 0) + (1);
  (s as any).artbj = ((s as any).artbj ?? 0) + (1);
  scene.img(`images/characters/pavlovsk/resident/arthur/sex/facefuck${(Math.floor(Math.random() * 6) + 0)}.jpg`);
  scene.text(`${((s as any).artbef ?? '')} You feel Arthur's fingers lace tightly into your hair before he pushes his huge dick roughly into your mouth, stretching your lips.`);
  if (((s as any).pcs_throat ?? 0) < ((s as any).dick ?? 0)) {
    scene.text('You choke as his member presses into the back of your throat, causing it to burn like fire. You gag and twist, trying desperately to escape from the giant lump of meat, but his grip is too firm.');
    scene.text('"Take it deep, slut! This is how I enjoy it!" Arthur says frankly.');
    scene.text('Spit flies out sickly from the sides of your mouth as you continue to retch, unable to swallow his cock. Tears cause your mascara to run down your cheeks as the abuse continues.');
    qspCall(s, 'arousal', 'bj', 5, 'rough', 'sub');
    qspCall(s, 'stat', '');
  } else {
    scene.text('Your throat burns like fire as he slams his cock against your resisting esophagus again and again. You finally compose yourself enough to relax and his huge member drives into your throat until you feel your nose being tickled by Arthur\'s curly pubic hair.');
    scene.text('"Fuck yes! All the way in like that! Good girl!" Arthur groans in pleasure.');
    scene.text('The burning in your throat slowly fades to a dull ache as he continues to facefuck your helpless form. ');
    qspCall(s, 'arousal', 'bj', 5, 'rough', 'sub');
    qspCall(s, 'stat', '');
  }
  if (((s as any).artfacefucktimes ?? 0) < 2) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'arturdin', (((!(Math.floor(Math.random() * 2) + 0))) ? ('artlick') : ('artchik'))); } },
    ]);
  } else {
    if (((s as any).artfacefucktimes ?? 0) >= 2) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'arturdin', (((!(Math.floor(Math.random() * 2) + 0))) ? ('bed') : ('bedmiss'))); } },
      ]);
    }
  }
  scene.build();
}

function enterArtlick(s: GameState, scene: SceneBuilder): void {
  (s as any).artbj = ((s as any).artbj ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/arthur/sex/lick.jpg');
  scene.text('Arthur pulls his slimy dick out of your mouth and starts slapping it against your lips, the heavy weight of the large cock stinging you with every hit. You instinctively stick out your tongue and attempt to lick the shaft as it beats against you. Arthur occasionally adjusts his aim and bangs against your nose or cheeks, dickslapping you as hard as he pleases.');
  qspCall(s, 'arousal', 'bj', 5, 'rough', 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).artbef = '';
    qspGoto(st, 'arturdin', 'facefuck');
  } },
  ]);
  scene.build();
}

function enterArtchik(s: GameState, scene: SceneBuilder): void {
  (s as any).artbj = ((s as any).artbj ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/arthur/sex/chik.jpg');
  scene.text('Arthur places his dick between your cheek and teeth and strikes at your cheek with his palm. "Yes, whore! just like that. This is how Uncle Arturik likes it!" He says as he continues smacking you.');
  qspCall(s, 'arousal', 'bj', 5, 'rough', 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).artbef = '';
    qspGoto(st, 'arturdin', 'facefuck');
  } },
  ]);
  scene.build();
}

function enterBed(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/arthur/sex/bed.jpg');
  scene.text('Arthur throws you face-down on the bed with your ass pointed towards him.');
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  if (((s as any).artfucktimes ?? 0) < 2) {
    (s as any).artrand = (Math.floor(Math.random() * 3) + 0);
    if ((!((s as any).artrand ?? 0))) {
      scene.actions([
        { label: 'Continue', goto: ['arturdin', 'sexdog'] },
      ]);
    }
    if (((s as any).artrand ?? 0) === 1) {
      scene.actions([
        { label: 'Continue', goto: ['arturdin', 'anal'] },
      ]);
    }
    if (((s as any).artrand ?? 0) === 2) {
      scene.actions([
        { label: 'Continue', goto: ['arturdin', 'fist'] },
      ]);
    }
  } else {
    if (((s as any).artfucktimes ?? 0) >= 2) {
      (s as any).artrand = (Math.floor(Math.random() * 3) + 0);
      if ((!((s as any).artrand ?? 0))) {
        scene.actions([
          { label: 'Continue', goto: ['arturdin', 'sexdog_cum'] },
        ]);
      }
      if (((s as any).artrand ?? 0) === 1) {
        scene.actions([
          { label: 'Continue', goto: ['arturdin', 'cum'] },
        ]);
      }
      if (((s as any).artrand ?? 0) === 2) {
        scene.actions([
          { label: 'Continue', goto: ['arturdin', 'anal_cum'] },
        ]);
      }
    }
  }
  (s as any).artrand = undefined;
  scene.build();
}

function enterBedmiss(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/arthur/sex/bedmiss.jpg');
  scene.text('Arthur shoves you onto your back on the bed before pushing your legs apart, exposing your vulnerable holes to him.');
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  if (((s as any).artfucktimes ?? 0) < 2) {
    scene.actions([
      { label: 'Continue', goto: ['arturdin', 'sexmiss'] },
    ]);
  } else {
    if (((s as any).artfucktimes ?? 0) >= 2) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'arturdin', (((!(Math.floor(Math.random() * 2) + 0))) ? ('sexmiss_cum') : ('cum'))); } },
      ]);
    }
  }
  scene.build();
}

function enterSexmiss(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  (s as any).artfucktimes = ((s as any).artfucktimes ?? 0) + (1);
  (s as any).artsex = ((s as any).artsex ?? 0) + (1);
  if (((s as any).pcs_vag ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  }
  scene.img('images/characters/pavlovsk/resident/arthur/sex/sexmiss.jpg');
  scene.text('Arthur moves between your thighs and you feel the bulbous head of his hard cock rest against your slick pussy. Before you can react you feel the huge rod push inside you. You groan in a mix of pleasure and pain as the massive dick stretches your delicate nether lips to their limit.');
  qspCall(s, 'arousal', 'vaginal', 5);
  qspCall(s, 'stat', '');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'arturdin', (((!(Math.floor(Math.random() * 2) + 0))) ? ('bed') : ('bedmiss'))); } },
  ]);
  scene.build();
}

function enterSexmissCum(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  (s as any).artfucktimes = ((s as any).artfucktimes ?? 0) + (1);
  (s as any).artsex = ((s as any).artsex ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/arthur/sex/sexmiss.jpg');
  scene.text('Arthur begins thrusting his large slab of meat in and out of your pussy. You try to relax and enjoy the invader penetrating you, feeling stuffed to the maximum. "Fuck! You Pavlovsk girls are so tight!" Arthur says idly as he continues pounding your sensitive love hole.');
  qspCall(s, 'arousal', 'vaginal', 5);
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'dinsex', 'sexcum');
  scene.actions([
    { label: 'Continue', goto: ['arturend', ''] },
  ]);
  scene.build();
}

function enterSexdog(s: GameState, scene: SceneBuilder): void {
  (s as any).artfucktimes = ((s as any).artfucktimes ?? 0) + (1);
  (s as any).pose = 1;
  (s as any).artsex = ((s as any).artsex ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/arthur/sex/sexdog.jpg');
  scene.text('Arthur grabs your ass with his palms and pulls your butt cheeks apart, eliciting a surprised moan from you. A moment later you feel his hard cock slam into your pussy from behind.');
  qspCall(s, 'arousal', 'vaginal', 5);
  qspCall(s, 'stat', '');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'arturdin', (((!(Math.floor(Math.random() * 2) + 0))) ? ('bed') : ('bedmiss'))); } },
  ]);
  scene.build();
}

function enterSexdogCum(s: GameState, scene: SceneBuilder): void {
  (s as any).artfucktimes = ((s as any).artfucktimes ?? 0) + (1);
  (s as any).pose = 1;
  (s as any).artsex = ((s as any).artsex ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/arthur/sex/sexdog.jpg');
  scene.text('Arthur grabs your hips tightly, his hard cock plunging in and out of you at a relentless pace. You cry out in agony and ecstasy as your whole body is pushed forward into the bed with each thrust. You want to tell him to slow down but your words escape as gibberish as you are too overwhelmed with sensation to speak.');
  qspCall(s, 'arousal', 'vaginal', 5);
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'dinsex', 'sexcum');
  scene.actions([
    { label: 'Continue', goto: ['arturend', ''] },
  ]);
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).artfucktimes = ((s as any).artfucktimes ?? 0) + (1);
  (s as any).pose = 1;
  (s as any).artanal = ((s as any).artanal ?? 0) + (1);
  if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  scene.img('images/characters/pavlovsk/resident/arthur/sex/anal.jpg');
  scene.text('Arthur grips your butt with his hands and spreads your ass cheeks wide. Your breath catches in your throat as you feel the head of his cock press against your anus. You intend to tell him "No way", but after the moment of hesitation from something touching your asshole it\'s too late. You feel unbearable pressure and then his enormous cock pops through your sphincter. Your mouth opens in a silent scream.');
  qspCall(s, 'arousal', 'anal', 5);
  qspCall(s, 'stat', '');
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'arturdin', (((!(Math.floor(Math.random() * 2) + 0))) ? ('bed') : ('bedmiss'))); } },
  ]);
  scene.build();
}

function enterAnalCum(s: GameState, scene: SceneBuilder): void {
  (s as any).artfucktimes = ((s as any).artfucktimes ?? 0) + (1);
  (s as any).pose = 1;
  (s as any).artanal = ((s as any).artanal ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/arthur/sex/anal.jpg');
  scene.text('Arthur maintains his hold on you as he knocks your body around with each thrust, his stiff cock slamming deep into your anus. You scream in pain and agony, tears streaming down your cheeks. His size is far too large for your butt, but you can\'t seem to gather yourself enough to beg him to stop.');
  qspCall(s, 'arousal', 'anal', 5);
  qspCall(s, 'stat', '');
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).lubonus = 0;
    (st as any).spafinloc = 3;
    scene.img('images/characters/pavlovsk/resident/arthur/sex/analcreampi.jpg');
    scene.text(`After what feels like an eternity ${((st as any).boydesc ?? '')} groans and you feel your ass fill with heat as he dumps a load deep inside you.`);
    qspCall(st, 'arousal', 'anal', 5);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'anus', 'A73', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['arturend', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCum(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_call', 'face', 'A73', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/arthur/sex/cum0.jpg');
  scene.text('Arthur suddenly yanks you up out of bed, nearly dislocating your arm, before pushing you to your knees. He grunts, stroking his cock, as a jet of sperm hits you in the face.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/sex/cum1.jpg');
    scene.text('You snap you eyes closed as another rope of sperm lands on your face.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).spafinloc = 12;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/sex/cum2.jpg');
    scene.text('The next shot of cum covers your slightly parted lips as a bit drips into your mouth.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.img('images/characters/pavlovsk/resident/arthur/sex/cum3.jpg');
    scene.text('A final blast hits you as Arthur\'s orgasm subsides. Even with your eyes closed you can tell that your face is absolutely slathered in his jizz.');
    scene.text('"Ah, yes. A beautiful girl made even more gorgeous with my seed." Arthur says breathlessly, admiring his handiwork.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['arturend', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFist(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_ass ?? 0) < 30) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 3);
  }
  if (((s as any).artfucktimes ?? 0) > 0) {
    (s as any).artfucktimes = ((s as any).artfucktimes ?? 0) - (1);
  }
  qspCall(s, 'stat', '');
  if (((s as any).pcs_ass ?? 0) >= 20) {
    scene.img('images/characters/pavlovsk/resident/arthur/sex/fist2.jpg');
    scene.text('Arthur inserts two fingers into your ass, then adds another finger, and another. You want to tell him to stop but are too paralyzed with shock and pain. Before you know it, Arthur\'s entire fist is in your anus, stretching it beyond what you thought possible. All you can do is whimper pathetically as he explores your butt.');
    qspCall(s, 'arousal', 'anal_fist', 5, 'sub');
    qspCall(s, 'stat', '');
  }
  if (((s as any).pcs_ass ?? 0) < 20) {
    scene.img('images/characters/pavlovsk/resident/arthur/sex/fist.jpg');
    scene.text('Arthur puts a single finger in your ass and begins to thrust into it vigorously. "Ahhh!" You moan as his thick digit probes your bottom.');
    qspCall(s, 'arousal', 'anal_finger', 5, 'rough', 'sub');
    qspCall(s, 'stat', '');
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'arturdin', (((!(Math.floor(Math.random() * 2) + 0))) ? ('bed') : ('bedmiss'))); } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  const arg = s.locArg;
  switch (arg) {
    case 'facefuck':
      enterFacefuck(s, scene);
      break;
    case 'artlick':
      enterArtlick(s, scene);
      break;
    case 'artchik':
      enterArtchik(s, scene);
      break;
    case 'bed':
      enterBed(s, scene);
      break;
    case 'bedmiss':
      enterBedmiss(s, scene);
      break;
    case 'sexmiss':
      enterSexmiss(s, scene);
      break;
    case 'sexmiss_cum':
      enterSexmissCum(s, scene);
      break;
    case 'sexdog':
      enterSexdog(s, scene);
      break;
    case 'sexdog_cum':
      enterSexdogCum(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'anal_cum':
      enterAnalCum(s, scene);
      break;
    case 'cum':
      enterCum(s, scene);
      break;
    case 'fist':
      enterFist(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const arturdin: LocationDef = {
  name: 'arturdin',
  title: 'You choke as his member presses into the back of your throat',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
