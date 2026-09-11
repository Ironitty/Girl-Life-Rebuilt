import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFailedCelebBlackmail(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Rapist', 0, 0, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'Rapist', 0, 0, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  (s as any).minut = ((s as any).minut ?? 0) + 360;
  (s as any).fingal = ((s as any).fingal ?? 0) + (1);
  (s as any).guy = ((s as any).guy ?? 0) + (4);
  ((s as any).stat ?? {})['rape_count'] = (((s as any).stat ?? {})['rape_count'] ?? 0) + (2);
  (s as any).shantpopala = ((s as any).shantpopala ?? 0) - (1);
  scene.img('images/locations/city/shared/sex/rape.jpg');
  scene.text('A black jeep suddenly hit the brakes on the street close to you. You turn your head to see what\'s happening and see two prominent men jump out of it and start running towards you. Before you can react, they grab you and drag you into the car.');
  scene.text('"You\'re doing this for a living? Taking pictures of naked people in the park?" one of them shouts while holding up one of the pictures you took and sent someone over a social network, hoping they would pay the ransom.');
  scene.text('"No? What the hell is going on? I don\'t know what you\'re talking about!" you try to explain.');
  scene.text('"Don\'t lie to us, you stupid bitch!" he snarls before he hits you on the head and you pass out.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Wake up', handler: (st: GameState) => {
    scene.text('You wake up somewhere, tied up and naked. You look down and notice traces of cum on your body. You can also feel cum flowing from your ass and pussy.');
    scene.text('You notice that the men who captured you are sitting next to you having a break. Some of them are smoking.');
    scene.text('"Oh, she\'s finally awake. The next fuck-cycle will be far more fun," one of the men says when he notices you moving.');
    scene.text('They all get up and walk towards you before having their way with you. You try to resist, but the tape hinders you from moving. Not long after, everything fades black and you lose consciousness again.');
    scene.text('You feel groggy as you wake up, but someone grabs you by the hair and shouts at you. "Let this be a lesson for you, bitch!" he yells before kicking you in the stomach. As you hold your stomach in pain, you glimpse the men driving away in their black jeep. You crawl to the main road and find your way back to one of the main streets.');
    qspCall(s, 'arousal', 'bj', 20, ((s as any).npcID ?? 0), 'group', 'rough', 'sub');
    qspCall(s, 'arousal', 'bj', 20, ((s as any).npcID1 ?? 0), 'group', 'rough', 'sub');
    qspCall(s, 'arousal', 'vaginal', 20, ((s as any).npcID ?? 0), 'group', 'rough', 'sub');
    qspCall(s, 'arousal', 'vaginal', 20, ((s as any).npcID1 ?? 0), 'group', 'rough', 'sub');
    qspCall(s, 'arousal', 'anal', 20, ((s as any).npcID ?? 0), 'group', 'rough', 'sub');
    qspCall(s, 'arousal', 'anal', 20, ((s as any).npcID1 ?? 0), 'group', 'rough', 'sub');
    qspCall(s, 'cum_call', 'stomach', (((Math.floor(Math.random() * 2) + 0)===0) ? (((s as any).npcID ?? 0)) : (((s as any).npcID1 ?? 0))));
    qspCall(s, 'cum_call', 'butt', (((Math.floor(Math.random() * 2) + 0)===0) ? (((s as any).npcID ?? 0)) : (((s as any).npcID1 ?? 0))));
    qspCall(s, 'cum_call', 'mouth', (((Math.floor(Math.random() * 2) + 0)===0) ? (((s as any).npcID ?? 0)) : (((s as any).npcID1 ?? 0))));
    qspCall(s, 'cum_call', 'face', (((Math.floor(Math.random() * 2) + 0)===0) ? (((s as any).npcID ?? 0)) : (((s as any).npcID1 ?? 0))));
    qspCall(s, 'cum_call', 'clothes', (((Math.floor(Math.random() * 2) + 0)===0) ? (((s as any).npcID ?? 0)) : (((s as any).npcID1 ?? 0))));
    qspCall(s, 'cum_call', 'anus', (((Math.floor(Math.random() * 2) + 0)===0) ? (((s as any).npcID ?? 0)) : (((s as any).npcID1 ?? 0))));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFameEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame_events', 'select', 'city');
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  // TODO-QSP: end
  scene.build();
}

function enterMinorGirlBeggar_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/girlcat.jpg');
  scene.text('As you walk down the street, you pass a young girl sitting on the sidewalk with some bags next to her, a cat in her lap and a sign saying that she is homeless, pleading for help.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore her', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Give her [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50, 'cash');
      qspCall(s, 'mood', 'raise', 'tiny');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/girlcat.jpg');
      scene.text('You open your purse up and pull out the money you can spare and hand it to her. She thanks you profusely and gives you a heartwarming smile as she hugs her cat close to her and whispers to him that they will get to eat tonight.');
      if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 1) {
        qspCall(s, 'street_events_city', 'minor_girl_beggar_sub_event');
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
    { label: 'Give her [+$func(\'money\', \'get_cost_string\', 100, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 100, 'cash');
      qspCall(s, 'mood', 'raise', 'tiny');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/girlcat.jpg');
      scene.text('You open your purse up and pull out the money you can spare and hand it to her. She thanks you profusely and gives you a heartwarming smile as she hugs her cat close to her and whispers to him that they will get to eat tonight.');
      if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 1) {
        qspCall(s, 'street_events_city', 'minor_girl_beggar_sub_event');
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
    { label: 'Give her [+$func(\'money\', \'get_cost_string\', 250, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 250, 'cash');
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/girlcat.jpg');
      scene.text('You open your purse up and pull out the money you can spare and hand it to her. She thanks you profusely and gives you a heartwarming smile as she hugs her cat close to her and whispers to him that they will get to eat tonight.');
      if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 1) {
        qspCall(s, 'street_events_city', 'minor_girl_beggar_sub_event');
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
    { label: 'Give her [+$func(\'money\', \'get_cost_string\', 500, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 500, 'cash');
      qspCall(s, 'mood', 'raise', 'medium');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/girlcat.jpg');
      scene.text('You open your purse up and pull out the money you can spare and hand it to her. She thanks you profusely and gives you a heartwarming smile as she hugs her cat close to her and whispers to him that they will get to eat tonight.');
      if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 1) {
        qspCall(s, 'street_events_city', 'minor_girl_beggar_sub_event');
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
    { label: 'Give her [+$func(\'money\', \'get_cost_string\', 1000, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1000, 'cash');
      qspCall(s, 'mood', 'raise', 'large');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/girlcat.jpg');
      scene.text('You open your purse up and pull out the money you can spare and hand it to her. She thanks you profusely and gives you a heartwarming smile as she hugs her cat close to her and whispers to him that they will get to eat tonight.');
      if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 1) {
        qspCall(s, 'street_events_city', 'minor_girl_beggar_sub_event');
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMinorHomelessMen(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/city/homeless.jpg');
  scene.text('As you walk down the street, you pass a couple of homeless men lying on a metro gate, using it for warmth in the freezing conditions.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore them', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorGayCouple(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/city/gay.jpg');
  scene.text('As you walk down the street, you pass a couple of boys holding hands and occasionally kissing. Soon a few other guys come over and start harassing them, calling them all sorts of names.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorOldCouple(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/city/sell.jpg');
  scene.text('As you walk down the street, you pass an old couple all bundled up against the cold. They have several jars and other homemade food items, along with a couple of household items and jewelry they are trying to sell.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorGirlBeggarSubEvent(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Give her another  [+$func(\'money\', \'string_price\', 5000)]', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 5000, 'cash');
    qspCall(s, 'mood', 'raise', 'huge');
    qspCall(s, 'stat', '');
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/girlcat.jpg');
    scene.text('You open your purse up and pull out the money you can spare and hand it to her. She breaks down and cries when she sees how much money you gave her. She gets up and hugs you tightly with one arm while holding her cat with the other, thanking you over and over. She smells like she hasn\'t bathed for a while, but you don\'t mind. She finally lets go of you, and as you walk away, she hugs her cat, and you hear her tell him that tonight they will sleep indoors and eat.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'failed_celeb_blackmail':
      enterFailedCelebBlackmail(s, scene);
      break;
    case 'fame_events':
      enterFameEvents(s, scene);
      break;
    case 'minor_girl_beggar_2':
      enterMinorGirlBeggar_2(s, scene);
      break;
    case 'minor_homeless_men':
      enterMinorHomelessMen(s, scene);
      break;
    case 'minor_gay_couple':
      enterMinorGayCouple(s, scene);
      break;
    case 'minor_old_couple':
      enterMinorOldCouple(s, scene);
      break;
    case 'minor_girl_beggar_sub_event':
      enterMinorGirlBeggarSubEvent(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const street_events_city: LocationDef = {
  name: 'street_events_city',
  title: 'A black jeep suddenly hit the brakes on the street close to ',
  region: 'other',
  enter: enter,
};
