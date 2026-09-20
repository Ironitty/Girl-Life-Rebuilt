import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).frost = 0;
  scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
  scene.text('Arthur leads you inside a container that is used as a warehouse for his products. He immediately unbuttons his pants and pulls out his fat cock. "Come girl, get to working that mouth before the customers notice we\'re gone."');
  scene.actions([
    { label: 'Kneel down', handler: (st: GameState) => {
    (st as any).arturTimes = ((st as any).arturTimes ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/sex/cocksucer.jpg');
    scene.text('You kneel down in front of Arthur and take his massive member into your mouth. You feel your lips stretch around the thick dick and you began to suck his dick in earnest, attempting to take it into your throat. As you continue furiously working his member, you slide your hand down your belly and begin rubbing your pussy, looking up into Arthur\'s eyes.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish him', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', 'Artur');
    qspCall(st, 'money', 'earn', 500);
    (st as any).arturblowday = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/sex/cocksuckercum.jpg');
    // TODO-QSP: dynamic text: After a few minutes Arthur''s breathing grows rapid and he begins to cum in your...
    scene.text(`After a few minutes Arthur's breathing grows rapid and he begins to cum in your mouth. You immediately begin swallowing sperm while continuing to slide your mouth up and down his cock. After Arthur has finished, he pulls his cock from your greedy mouth with a wet "pop" sound. He grins at you as he tucks his spent penis back in his trousers and says. "You always know how to make my day. Here, from Uncle Arturik, Buy something nice." He hands to you ${qspFunc(s, 'money', 'string_profit', 500)} before striding out of the container, back towards the kiosk.`);
    qspCall(st, 'arousal', 'bj', 10, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

export const arturkiosk: LocationDef = {
  name: 'arturkiosk',
  title: 'Arthur leads you inside a container that is used as a wareho',
  region: 'other',
  description: ['Arthur leads you inside a container that is used as a warehouse for his products. He immediately unbuttons his pants and pulls out his fat cock. "Come girl, get to working that mouth before the customers notice we\'re gone."'],
  enter: enter,
};
