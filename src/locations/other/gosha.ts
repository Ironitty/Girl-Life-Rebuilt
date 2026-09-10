import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGoshaRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).reccoldorm = 0;
  (s as any).goshiflag = 0;
  scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
  scene.text('His room has two desks against the back well and two beds on either side of the room with a small path between them. Near the door is a small couch with a tv against the opposite wall.');
  scene.text('As soon as you sit down on the couch, he sits next to you and begins fondling your breasts and slowly undressing you.');
  qspCall(s, 'arousal', 'foreplay', 3);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Stop him', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You push his hands away. "Stop I didn\'t come for that."');
    scene.text('He stops and gives you a confused look. "Then why did you come?"');
    scene.text('You sigh a little. "I thought we could talk." Seeing his reaction you add. "Or maybe go for a walk instead?"');
    scene.text('He thinks on that a moment and then shurgs. "Sure ok, lets go for a walk."');
    scene.actions([
      { label: 'Just hang out', handler: (st: GameState) => {
    (s as any).gosh = ((s as any).gosh ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.text('You tell him you would rather just hand out and talk. So the two of you start talking about your past, you tell him about things that happened with your family and at Pavlovsk school, while he tells you about stuff he has gotten up to at the university of late or what him and his friends have done around the city. After about a hour of this he finally says he needs to get some studying done for a class, you take the hint and leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'sixth_floor'] },
    ]);
  } },
      { label: 'Go for a walk', handler: (st: GameState) => {
    (s as any).gosh = ((s as any).gosh ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.text('You go for a walk with Gosha. You have a great time, he\'s a great conversationalist. You spend a hour walking around the campus with him pointing out different buildings and even introducing you to some of the other students. Before long he guides you back to the dorms. "Well I got some studying I need to do, I hope you decided to come by some other day and we can spend time together again." With that he walks into the building and you leave the university grounds.');
    scene.actions([
      { label: 'Leave', goto: ['city_island', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'Let him', goto: ['gosha', 'gosha_sex'] },
  ]);
  scene.build();
}

function enterGoshaSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A83');
  (s as any).sexpartkno = 1;
  if (((s as any).goshsex ?? 0) === 0) {
    (s as any).goshsex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  (s as any).srand = Math.floor(Math.random() * 3) + 1;
  if (((s as any).srand ?? 0) === 1) {
    qspCall(s, 'cum_manage', '');
    scene.img('images/characters/city/university/boy/gosha/sex/gosh13.jpg');
    scene.text('Seeing that you\'re not resisting, Gosha quickly strips you naked and then removes his pants, revealing his cock. He guides it into your pussy and starts fucking you hard and rough, not seeming to care if you are enjoying yourself at all. You feel him starting to tense up, but before you can say anything he groans loudly. You feel his hot cum shoot inside of you, filling your pussy up.');
    qspCall(s, 'arousal', 'vaginal', 10, 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('Once he cums he quickly gets dressed and then sits down at his desk. It takes you a little bit longer to get dressed but once you are, he glances over at you. "It was great you stopping by, but I got some class work I need to do if you don\'t mind." He says as he indicates the door, as you walk over to it he adds. "I hope you stop by again, see you later." With that you leave.');
    scene.actions([
      { label: 'Go to sixth floor', goto: ['uni_dorm', 'sixth_floor'] },
    ]);
  } },
    ]);
  } else {
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    scene.img('images/characters/city/university/boy/gosha/sex/gosh3.jpg');
    scene.text('Seeing that you\'re not resisting, Gosha quickly strips you naked and then removes his pants, revealing his cock. Gosha then pushes you down on your knees, and sticks his cock in your mouth. As you start sucking his dick, he starts fucking your mouth, forcing his dick down your throat, making you gag and your eyes water as you choke on his cock. It doesn\'t take long before his cock starts twitching and he quickly pulls out and cums all over your face.');
    qspCall(s, 'arousal', 'bj', 10, 'deepthroat', 'rough');
    qspCall(s, 'arousal', 'end');
    if (((s as any).srand ?? 0) === 3) {
      (s as any).anal = ((s as any).anal ?? 0) + (1);
      (s as any).spafinloc = 3;
      qspCall(s, 'cum_manage', '');
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/university/boy/gosha/sex/gosh12.jpg');
      scene.text('Seeing that you\'re not resisting, Gosha quickly strips you naked and then removes his pants, revealing his cock. Gosha then grabs a bottle of lube and starts lubricating your asshole. Once he has your butthole nice and lubed up, he squirts some lube on his dick as well. After a moment he lines his cock up against your asshole and thrusts it deeply into your ass, causing your to cry out. He then starts fucking your ass hard and deep for some time, before he ends by cumming inside of your ass.');
      (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
      qspCall(s, 'arousal', 'anal', 10, 'rough');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Clean up', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('Once he cums he quickly gets dressed and then sits down at his desk. It takes you a little bit longer to get dressed but once you are, he glances over at you. "It was great you stopping by, but I got some class work I need to do if you don\'t mind." He says as he indicates the door, as you walk over to it he adds. "I hope you stop by again, see you later." With that you leave.');
    scene.actions([
      { label: 'Go to sixth floor', goto: ['uni_dorm', 'sixth_floor'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('Once he cums he quickly gets dressed and then sits down at his desk. It takes you a little bit longer to get dressed but once you are, he glances over at you. "It was great you stopping by, but I got some class work I need to do if you don\'t mind." He says as he indicates the door, as you walk over to it he adds. "I hope you stop by again, see you later." With that you leave.');
    scene.actions([
      { label: 'Go to sixth floor', goto: ['uni_dorm', 'sixth_floor'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'gosha_room':
      enterGoshaRoom(s, scene);
      break;
    case 'gosha_sex':
      enterGoshaSex(s, scene);
      break;
    default:
      enterGoshaRoom(s, scene);
      break;
  }
}

export const gosha: LocationDef = {
  name: 'gosha',
  title: 'His room has two desks against the back well and two beds on',
  region: 'other',
  locationType: 'event',
  description: ['His room has two desks against the back well and two beds on either side of the room with a small path between them. Near the door is a small couch with a tv against the opposite wall.'],
  enter: enter,
};
