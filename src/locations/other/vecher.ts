import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/sex/party/vecher.jpg');
  scene.text('You turn up to a Friday night party.');
  scene.text('A large crowd gathers on the senior\'s floor.');
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['uni_dorm', 'tenth_floor'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Dance', handler: (st: GameState) => {
    (s as any).hour = 23;
    qspCall(s, 'drugs', 'alcohol', 'wine');
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    qspCall(s, 'drugs', 'alcohol', 'beer');
    scene.text('You have fun, drinking and dancing.');
    (s as any).itrand = Math.floor(Math.random() * 12) + 1;
  }, goto: ['vecher', 'end<<itrand>>'] },
  ]);
  scene.build();
}

function enterEnd1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/party/itog.jpg');
  scene.text('Gradually, your steady alcohol intake gets the better of you, and you spend the rest of the night in the bathroom, hugging the toilet');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_dorm', 'tenth_floor'] },
  ]);
  scene.build();
}

function enterEnd2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/kiss/kiss2.jpg');
  scene.text('You dance and drink for a while before you have the idea to dance with Vika. Soon you end up having a deep lesbian kiss under the flashing lights of the dance.');
  qspCall(s, 'willpower', 'cuni', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['uni_dorm', 'tenth_floor'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get a room with Vika', handler: (st: GameState) => {
    if ((!((s as any).vikasex ?? 0))) {
      (s as any).vikasex = 1;
    }
  }, goto: ['lezbsex', 'start'] },
  ]);
  scene.build();
}

function enterEnd3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_apprnc ?? 0) < 80) {
    scene.img('images/locations/shared/party/itog3.jpg');
    scene.text('You stumble into an open room and sleep it off, listening to the sounds of hardcore sex from down the hall.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'tenth_floor'] },
    ]);
  } else {
    scene.img('images/locations/city/island/university/dorm/sex/party/vechend1.jpg');
    scene.text('You stumble into an open room and sleep it off, listening to the sounds of hardcore sex from down the hall. You dream about fucking Vika, the fantasy so real that you can feel your legs spreading, her tongue on your clitoris. Opening your eyes, you see a few girls bent over your body, hands busy caressing you, while between your legs Vika skillfully uses her tongue. "I wish all my dreams would come true like this," you think as you awaken.');
    qspCall(s, 'arousal', 'cuni', 5);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['uni_dorm', 'tenth_floor'] },
      { label: 'Stay and enjoy yourself', handler: (st: GameState) => {
    if ((!((s as any).vikasex ?? 0))) {
      (s as any).vikasex = 1;
    }
    scene.img('images/locations/city/island/university/dorm/sex/party/vechend2.jpg');
    scene.text('You relax, allowing the girls to caress your body. Periodically changing positions so another can take post at your pussy, they settle into a rotation, trying to see who can trigger the most orgasms.');
    qspCall(s, 'arousal', 'cuni', 15);
    qspCall(s, 'arousal', 'cuni', (-15));
    qspCall(s, 'arousal', 'cuni', (-15));
    qspCall(s, 'arousal', 'cuni', (-15));
    scene.actions([
      { label: 'Continue', goto: ['vecher', 'end12'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterEnd4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/party/itog4.jpg');
  scene.text('You get drunk and begin to molest the other girls. Before you realize it, your top is pulled down to show your breasts, and Vika is licking and sucking at them in front of everyone.');
  qspCall(s, 'willpower', 'cuni', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['uni_dorm', 'tenth_floor'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with Vika to an empty room', handler: (st: GameState) => {
    if ((!((s as any).vikasex ?? 0))) {
      (s as any).vikasex = 1;
    }
  }, goto: ['lezbsex', 'start'] },
  ]);
  scene.build();
}

function enterEnd5(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (1);
  scene.img('images/locations/city/island/university/dorm/sex/party/itog5.jpg');
  scene.text('You wake up on the floor in the hallway, halfway to your room. Panting over your body is a pimply young man, dick inside you, trying to fuck your vagina carefully so you don\'t wake up. Noticing that you\'re awake, he quickly jumps to his feet and runs off, leaving you lying confused and naked on the dirty floor.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_dorm', 'tenth_floor'] },
  ]);
  scene.build();
}

function enterEnd6(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/party/itog6.jpg');
  scene.text('You spend all evening molesting a girl with big tits, begging her to let you kiss them. Eventually, you both get so drunk she allows you to bury your face in her cleavage and motorboat her.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_dorm', 'tenth_floor'] },
  ]);
  scene.build();
}

function enterEnd7(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/dorm/sex/party/itog7.jpg');
  scene.text('You don\'t know how or when your dancing became a striptease, but the alcohol has plainly done its job. You begin to become lewder and lewder, swaying on your feet before collapsing into a man\'s lap on the couch. Scarcely believing his luck, he wastes no time in grabbing at your breasts, pinching your nipples.');
  qspCall(s, 'arousal', 'striptease', 5);
  qspCall(s, 'willpower', 'sex', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave him blueballed [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave him blueballed [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
  }, goto: ['uni_dorm', 'tenth_floor'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Remove your panties', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/sex/party/itog71.jpg');
    scene.text('You get up off the man\'s lap to finish your stripping, shuffling out of your panties drunkenly, almost toppling over again. Catching a glimpse of your pussy, the man hastens to strip off his clothes too, fumbling with his fly.');
    qspCall(s, 'arousal', 'flash', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/sex/party/itog72.jpg');
    scene.text('Getting down on your knees and clasping his member greedily between your lips, you start to move back and forth on his length, slurping noisily, ignoring the crowd in the rest of the room. The man seems to want more however, wrapping his fingers in your hair and starting to drag your head back and forth, using your mouth to masturbate.');
    qspCall(s, 'arousal', 'bj', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/sex/party/itog73.jpg');
    scene.text('With his cock rock-hard and nicely wet, he lifts you bodily and turns you around, pushing you into the sofa doggystyle. He shoves himself into your pussy and starts to pound away, not caring about your enjoyment, just fucking. A crowd gathers to view the show, calling out encouragements and suggestions on how best to fuck you. The guy pounding you keeps it up for a long time, too drunk to do the deed properly.');
    qspCall(s, 'arousal', 'vaginal', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/sex/party/itog74.jpg');
    scene.text('Just when you start to get tired of his thrusting, he tugs his dick out of your aching puss, shooting a few meager ropes of cum onto your buttocks. Scooping up your clothes from the floor, you follow him to his room to sleep it off.');
    qspCall(s, 'arousal', 'vaginal', 2);
    qspCall(s, 'arousal', 'end');
    (s as any).spafinloc = 4;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'tenth_floor'] },
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

function enterEnd8(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/party/sex/itog8.jpg');
  scene.text('You head out into one of the rooms with Vika, who soon starts kissing and then fucking an unknown guy. You spend a few minutes lying next to Vika, having fun chatting with her while a drunk stranger pounds away at her.');
  qspCall(s, 'willpower', 'voyeur', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['uni_dorm', 'tenth_floor'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Caress Vika', handler: (st: GameState) => {
    if ((!((s as any).vikasex ?? 0))) {
      (s as any).vikasex = 1;
    }
    scene.img('images/locations/city/island/university/dorm/sex/party/itog81.jpg');
    scene.text('You kiss and fondle at Vika\'s breasts, making her wriggle and moan. She soon offers to reward you with some cunnilingus.');
    qspCall(s, 'arousal', 'kuni', 10, 'lesbian');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.text('The stranger tugs his dick out of Vika with a wet slurp and lifts his body to press it into her mouth.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/sex/party/itog82.jpg');
    scene.text('The man cums in Vika\'s mouth with a shudder, prompting her to open her mouth and show off her creamy treat. You want to taste…');
    scene.actions([
      { label: 'Kiss Vika', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', 'A86', 1, 0, 0, 0, 20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/sex/party/itog83.jpg');
    scene.text('You spend a couple of moments making out and snowballing the cum between the two of you.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'tenth_floor'] },
    ]);
  } },
    ]);
  } },
      { label: 'Share the dick', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 10);
    qspCall(s, 'cum_call', 'face', 'A86', 1, 0, 0, 0, 20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/sex/party/itog84.jpg');
    scene.text('You suck and lick the dick together, working as a team until the man climaxes across your faces and tongues.');
    scene.actions([
      { label: 'Kiss Vika', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'kiss', 2);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth', 'A86', 1, 0, 0, 0, 20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/sex/party/itog83.jpg');
    scene.text('You spend a couple of moments making out and snowballing the cum between the two of you.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'tenth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEnd9(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/party/sex/itog9.jpg');
  scene.text('Girls love to have fun, particularly drunken ones. You and two new girlfriends you met spend the party kissing and caressing each other, drawing a lot of admiring glances.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_dorm', 'tenth_floor'] },
  ]);
  scene.build();
}

function enterEnd10(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/party/itog10.jpg');
  scene.text('You get drunk and dance with some stranger who spends the whole time pawing at your tits and making dirty comments.');
  qspCall(s, 'willpower', 'foreplay', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['uni_dorm', 'korr'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Grab his crotch', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'stranger from a party', Math.floor(Math.random() * 11) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).picrand = Math.floor(Math.random() * 21) + 20;
  }, goto: ['sex', 'start'] },
  ]);
  scene.build();
}

function enterEnd11(s: GameState, scene: SceneBuilder): void {
  (s as any).spafinloc = 7;
  qspCall(s, 'cum_manage', '');
  scene.img('images/locations/shared/party/skirtcum.jpg');
  scene.text('You wake up in a strange room, lying on a man\'s stomach, thankfully still dressed although your hangover is killing you.');
  scene.text('As you sit up, you notice something wet on your butt. What a bastard! He dragged you into some random room and came on your clothes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_dorm', 'tenth_floor'] },
  ]);
  scene.build();
}

function enterEnd12(s: GameState, scene: SceneBuilder): void {
  (s as any).picrand = Math.floor(Math.random() * 7) + 3;
  scene.img(`images/locations/city/island/university/dorm/sex/party/vechend${((s as any).picrand ?? 0)}.jpg`);
  scene.text('All mixed up in a big ball of women\'s bodies, you can\'t remember the name of the girl your fingers are exploring, put a face to the taste on your tongue, or identify who is delving into your pussy.');
  qspCall(s, 'arousal', 'cuni', 15);
  qspCall(s, 'arousal', 'cuni_give', (-15));
  qspCall(s, 'arousal', 'vaginal_finger_give', (-15));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'More', goto: ['vecher', 'end12'] },
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'cuni', 'end');
  }, goto: ['uni_dorm', 'tenth_floor'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'end1':
      enterEnd1(s, scene);
      break;
    case 'end2':
      enterEnd2(s, scene);
      break;
    case 'end3':
      enterEnd3(s, scene);
      break;
    case 'end4':
      enterEnd4(s, scene);
      break;
    case 'end5':
      enterEnd5(s, scene);
      break;
    case 'end6':
      enterEnd6(s, scene);
      break;
    case 'end7':
      enterEnd7(s, scene);
      break;
    case 'end8':
      enterEnd8(s, scene);
      break;
    case 'end9':
      enterEnd9(s, scene);
      break;
    case 'end10':
      enterEnd10(s, scene);
      break;
    case 'end11':
      enterEnd11(s, scene);
      break;
    case 'end12':
      enterEnd12(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const vecher: LocationDef = {
  name: 'vecher',
  title: 'You turn up to a Friday night party.',
  region: 'other',
  enter: enter,
};
