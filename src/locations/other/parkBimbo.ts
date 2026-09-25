import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPos1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/parkbimbo1.jpg');
  scene.text('You notice an old guy who has to be in his sixties watching you. Then you see he has his rather large dick out and a raging hard-on.');
  qspCall(s, 'willpower', 'bj', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Flip him the bird', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Flip him the bird', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_park', 'start');
  } },
    ]);
  }
  scene.actions([
    { label: 'Help the old guy out', goto: ['parkBimbo', 'pos2'] },
  ]);
  scene.build();
}

function enterPos2(s: GameState, scene: SceneBuilder): void {
  (s as any).spafinloc = 12;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/parkbimbo2.jpg');
  scene.text('You grab the old man\'s hand and pull him over to a tree. Then, you drop to your knees and start sucking his cock at once. He was taken aback at first and started to protest, but as your warm wet mouth began sucking his cock, he stopped protesting.');
  scene.text('You begin sucking him in earnest and fondling his balls with your hand.');
  scene.text('You don\'t have long to wait when you feel the hot spurts of his semen shooting into your mouth.');
  qspCall(s, 'arousal', 'bj', 10, 'sub');
  qspCall(s, 'stat', '');
  (s as any).horand = 0;
  if (((s as any).horand ?? 0) > ((s as any).pcs_horny ?? 0)) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.text('You feel a little hornier.');
  } else {
    scene.text('You enjoy the experience so much that your body convulses in orgasm. It takes a lot of control, but you keep his cum in your mouth throughout.');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
  }
  scene.text('Getting up, you swallow his sperm and wink at him as you walk away.');
  scene.actions([
    { label: 'finish', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'pav_park', 'start');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pos1':
      enterPos1(s, scene);
      break;
    case 'pos2':
      enterPos2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const parkBimbo: LocationDef = {
  name: 'parkBimbo',
  title: 'You notice an old guy who has to be in his sixties watching ',
  region: 'other',
  enter: enter,
};
