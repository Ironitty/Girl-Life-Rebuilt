import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheckEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'core_library', 'setloc', 'bdsm_bedeast', 'start');
  (s as any).location_type = 'private';
  (s as any).locclass = 'bedr';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/bedb.jpg');
  scene.text('Guest bedroom 2');
  qspCall(s, 'bdsm_bedeast', 'events');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the landing', goto: ['bdsm_landing', ''] },
  ]);
  scene.build();
}

function enterCheckEvents(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 100) + 0) < 70) {
    // TODO-QSP: exit
  }
  qspGoto(s, 'bdsm_bedeast', qspUntranslated(s, "''event_<<rand(1'", { location: "bdsm_bedeast" }), '10)>>');
  // TODO-QSP: end
  scene.build();
}

function enterEvent_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/bedrand1.mp4');
  scene.text('A submissive woman is cleaning up her dom\'s cum from another woman\'s chest.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedeast', 'start'] },
  ]);
  scene.build();
}

function enterEvent_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/bedrand5.mp4');
  scene.text('You see three submissive women on the bed, they are tied and gagged.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedeast', 'start'] },
  ]);
  scene.build();
}

function enterEvent_3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/mis_1.mp4');
  scene.text('A well dressed woman is very much enjoying giving a blowjob, she must be a sub.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  if (((s as any).bdsmclub ?? 0)?.['role'] === 'sub') {
    scene.actions([
      { label: 'Join them', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0, 'Dominant man from the Club', (Math.floor(Math.random() * 28) + 18));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    scene.img('images/locations/city/suburb/bdsm_club/sex/snowball.jpg');
    scene.text('Seeing you watching them, the couple beckons you over. You obey them and come over and kneel down next to the well dressed woman. She offers the cock to you and you dutifully suck it and soon the two of you are trading it back and forth.');
    scene.text('The man begins to grunt getting close, when he does the woman takes the cock completely to herself no longer sharing, after another minute or so the man cums in her mouth.');
    scene.text('She rises up a bit and pulls your head back, pulling your mouth open. Then she spits the man\'s cum into your mouth. Then they dismiss you and as you\'re leaving you swallow the cum.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'group');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Return', goto: ['bdsm_bedeast', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedeast', 'start'] },
  ]);
  scene.build();
}

function enterEvent_4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/bedrand2.mp4');
  scene.text('A submissive woman on a leash is being fucked by her dom.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  if (((s as any).bdsmclub ?? 0)?.['role'] === 'sub') {
    scene.actions([
      { label: 'Join them', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/suburb/bdsm_club/sex/bedmff.jpg');
    scene.text('As you watch the man notices you and motions you over. Obeying you walk over to him. While he keeps fucking the woman on the bed he says. "Straddle her face and look at me."');
    scene.text('You do as you are told and the woman\'s tongue plunges into your pussy at once as she starts tongue fucking you. The man pulls you forward and kisses you as he keeps fucking the other woman.');
    scene.text('You orgasm before he does and when he does, he does deep inside or her. Once finished they get dressed.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 5, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Return', goto: ['bdsm_bedeast', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedeast', 'start'] },
  ]);
  scene.build();
}

function enterEvent_5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/bedrand8.mp4');
  scene.text('A man and two women are having a threesome, you can\'t tell who is sub or dom, but they are so carried away in their act that you don\'t suppose that\'s important right now.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedeast', 'start'] },
  ]);
  scene.build();
}

function enterEvent_6(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_pun1.mp4');
  scene.text('A submissive woman has been tied and gagged with a body massager strapped to her pussy. Poor thing, hopefully someone will let her go soon.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedeast', 'start'] },
  ]);
  scene.build();
}

function enterEvent_7(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/bedrand4.mp4');
  scene.text('A submissive woman is gagged and tied to a stool and the bedstead and her dom is fucking her roughly.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedeast', 'start'] },
  ]);
  scene.build();
}

function enterEvent_8(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/bedrand6.mp4');
  scene.text('A submissive woman is tied up and gagged, her domme is fucking her with a strap-on.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  if (((s as any).bdsmclub ?? 0)?.['role'] === 'sub') {
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/sex/bedrand6.mp4');
    scene.text('You keep watching them. At the rough treatment the sub occasionally cries out through the gag. Which only seems to annoy her domme, who gives her a smack each time and tell her to take it like a good whore.');
    scene.text('Noticing you the domme turns and pulls out of her sub. "You come over here and show my worthless sub how to take it like a good whore."');
    scene.actions([
      { label: 'Obey', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/suburb/bdsm_club/sex/fffdomstrap.jpg');
    scene.text('You undress and walk over to her while she unties her sub. As you get to the bed she grabs you and pushes you down face first on the bed. She crawls up on top of you and rubs the strap-on against your asshole.');
    scene.text('With only the lube from her subs pussy juices she shoves it in your ass, sliding it balls deep in you. Then she starts to furiously fuck you as she tells her sub this is how she should take it.');
    scene.text('After a long time she beings to pant and sweat from her efforts in fucking you. Finally rolling off you to take a break, she looks at you. "You may go." You get up and get dressed leaving them in the room.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'anal_strap', 5, 'sub', 'lesbian', 'rough');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Return', goto: ['bdsm_bedeast', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedeast', 'start'] },
  ]);
  scene.build();
}

function enterEvent_9(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_pun2.mp4');
  scene.text('A submissive woman appears to have broken the dress code and is being punished.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedeast', 'start'] },
  ]);
  scene.build();
}

function enterEvent_10(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_b7.mp4');
  scene.text('A submissive woman is having her face fucked by a dom in a suit.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedeast', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'check_events':
      enterCheckEvents(s, scene);
      break;
    case 'event_1':
      enterEvent_1(s, scene);
      break;
    case 'event_2':
      enterEvent_2(s, scene);
      break;
    case 'event_3':
      enterEvent_3(s, scene);
      break;
    case 'event_4':
      enterEvent_4(s, scene);
      break;
    case 'event_5':
      enterEvent_5(s, scene);
      break;
    case 'event_6':
      enterEvent_6(s, scene);
      break;
    case 'event_7':
      enterEvent_7(s, scene);
      break;
    case 'event_8':
      enterEvent_8(s, scene);
      break;
    case 'event_9':
      enterEvent_9(s, scene);
      break;
    case 'event_10':
      enterEvent_10(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bdsm_bedeast: LocationDef = {
  name: 'bdsm_bedeast',
  title: 'Guest bedroom 2',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  enter: enter,
};
