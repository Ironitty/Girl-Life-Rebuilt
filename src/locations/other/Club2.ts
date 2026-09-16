import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterToilet1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'npcgeneratec', '', 0, 'Gloryhole Client', Math.floor(Math.random() * 43) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/locations/city/citycenter/nightclub/sex/glory.jpg');
  scene.text('You head into the stall and close the door. The walls are covered with obscene graffiti and circular holes are carved in the walls. Sitting on the toilet, you hear a noise coming from the next stall.');
  scene.text('The next thing you know, a cock is pushed through the hole. "Here\'s a treat for you, baby," a lustful voice says with a laugh.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_nightclub', 'inside'] },
    { label: 'Take a closer look', handler: (st: GameState) => {
    if (((s as any).TQuest ?? 0) === 1) {
      (s as any).TQuest = 2;
    }
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
    scene.img('images/locations/city/citycenter/nightclub/sex/glory1.jpg');
    scene.text('You lean closer and find yourself impulsively licking the cock in front of you.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck it', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/locations/city/citycenter/nightclub/sex/glory2.jpg');
    scene.text('You wrap your lips around the head and start sucking, trying to take it as deep as possible. After a few minutes, a warm liquid starts flooding into your mouth as you hear a loud groan coming from the next stall.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'money', 'earn', 1000, 'cash');
    scene.img('images/locations/city/citycenter/nightclub/sex/glory3.jpg');
    scene.text('You swallow. The cum has a sharp, tart taste which makes you grimace.');
    scene.text('"That was fucking great, and you swallow! Here, you deserve it."');
    // TODO-QSP: dynamic text: <<$func('money', 'string_profit', 1000)>> is pushed through the hole.
    scene.text(`${qspFunc(s, 'money', 'string_profit', 1000)} is pushed through the hole.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_nightclub', 'inside'] },
    ]);
  } },
      { label: 'Spit it out', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'money', 'earn', 500, 'cash');
    scene.img('images/locations/city/citycenter/nightclub/sex/glory3.jpg');
    scene.text('The sharp, tart taste overwhelms you and you spit the cum out onto the floor.');
    // TODO-QSP: dynamic text: <<$func('money', 'string_profit', 500)>> is pushed through the hole.
    scene.text(`${qspFunc(s, 'money', 'string_profit', 500)} is pushed through the hole.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_nightclub', 'inside'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  scene.text('You grab some toilet paper to wipe yourself, but press a little too hard and feel a warmth growing between your legs.');
  qspCall(s, 'arousal', 'clit_finger', 3, 'masturbation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    qspGoto(s, 'city_nightclub', 'inside');
  } },
    { label: 'Caress yourself', handler: (st: GameState) => {
    (s as any).TQuest = 1;
    if (((s as any).pcs_inhib ?? 0) < 40) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    qspCall(s, 'money', 'earn', 500, 'cash');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/mast/tomas.jpg');
    scene.text('You caress your swollen pussy with your fingers until you orgasm. When you catch your breath, you notice someone peeking at you through a hole in the wall.');
    // TODO-QSP: dynamic text: <<$func('money', 'string_profit', 500)>> is pushed through the hole as the man t...
    scene.text(`${qspFunc(s, 'money', 'string_profit', 500)} is pushed through the hole as the man thanks you for the show.`);
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'clit_finger', 5, 'exhibitionism', 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_nightclub', 'inside'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterToilet2(s: GameState, scene: SceneBuilder): void {
  scene.text('As you\'re sitting on the toilet, you hear both adjacent stall doors closing.');
  scene.text('"Don\'t be afraid baby, we won\'t hurt you. On the contrary, we\'ll give you some delicious candy with extra cream filling!" a voice says with a laugh.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_nightclub', 'inside'] },
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Gloryhole Client', Math.floor(Math.random() * 43) + 18, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'Gloryhole Client', Math.floor(Math.random() * 43) + 18, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    (s as any).slutiness = ((s as any).slutiness ?? 0) + (10);
    scene.img('images/locations/city/citycenter/nightclub/sex/glory4.jpg');
    scene.text('Two cocks poke through the holes in the walls. "Come on, baby. You know you want to…" the voice says.');
    scene.text('You reach out and start stroking both cocks before leaning over and taking one into your mouth.');
    qspCall(s, 'arousal', 'hj', 10, ((s as any).npcID ?? 0), 'sub', 'group');
    qspCall(s, 'arousal', 'bj', (-10), ((s as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/nightclub/sex/glory5.jpg');
    scene.text('You alternate between sucking one cock while jerking off the other.');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'sub', 'group');
    qspCall(s, 'arousal', 'hj', (-10), ((s as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/nightclub/sex/glory6.jpg');
    scene.text('After a few minutes, one of the men finishes in your mouth. You lick it up and turn all your attention to the other.');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(s, 'arousal', 'hj', (-10), ((s as any).npcID ?? 0), 'sub', 'group');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/nightclub/sex/glory7.jpg');
    scene.text('Before long, the second man also cums in your mouth. You swallow both loads and wipe your face.');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'sub', 'group');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0));
    if ((Math.floor(Math.random() * 100) + 1) > ((s as any).pcs_horny ?? 0)) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      (s as any).orgasm_or = 'no';
    } else {
      (s as any).pcs_horny = 0;
      (s as any).orgasm_or = 'yes';
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 2000, 'cash');
    (s as any).TQuest = 3;
    scene.text('"You were great, I think you\'ve earned a reward."');
    // TODO-QSP: dynamic text: <<$func('money', 'string_profit', 2000)>> pokes through the hole.
    scene.text(`${qspFunc(s, 'money', 'string_profit', 2000)} pokes through the hole.`);
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    qspCall(s, 'arousal', 'end');
    if ((!((s as any).pornstudio ?? 0))) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (s as any).pornstudio = 1;
    scene.text('A business card is then pushed through the hole. "That was some amazing cock sucking there, girl! Come here if you want to have some fun and make more money with that mouth of yours."');
    scene.text('You look at the card. It\'s for a porn studio located in the city\'s industrial district.');
    scene.actions([
      { label: 'Leave', goto: ['city_nightclub', 'inside'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['city_nightclub', 'inside'] },
      ]);
    }
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
    case 'toilet1':
      enterToilet1(s, scene);
      break;
    case 'toilet':
      enterToilet(s, scene);
      break;
    case 'toilet2':
      enterToilet2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Club2: LocationDef = {
  name: 'Club2',
  title: 'You head into the stall and close the door. The walls are co',
  region: 'other',
  enter: enter,
};
