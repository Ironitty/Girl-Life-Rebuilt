import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  if ((!((s as any).arturSex ?? 0))) {
    (s as any).arturSex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  (s as any).arturDay = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('Arthur eyes your body as his calloused hands began to strip off your clothes and caress you, making you flush with heat.');
  scene.actions([
    { label: 'Kneel down', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/arthur/sex/bj.jpg');
    scene.text('You kneel down before Arthur and began stroking his long, thick cock, the bulbous head tantalizingly close to your soft lips. Arthur impatiently strokes your head with his sinewy hand. You can see the lust in his expression.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Masturbate him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Masturbate him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    scene.text('You began to slowly stroke his large member, but as you look up at Arthur, you see him roll his eyes with impatience before reaching for you.');
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'hj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['arturdin', 'facefuck'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    (s as any).artbj = ((s as any).artbj ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/arthur/sex/bj2.jpg');
    scene.text('You open your mouth and slowly wrap your lips around the hefty cock. The corners of your mouth stretch to accommodate the rod as you begun to suck at a gradual pace.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('Arthur suddenly grabs you by the hair and tries to force his cock deep into your throat.');
    qspCall(s, 'arousal', 'bj', 5, 'rough', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['arturdin', 'facefuck'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Enjoy his touch', handler: (st: GameState) => {
    scene.text('Arthur caresses your sensitive body as he undresses you with his manly hands. Before long you find yourself naked in his embrace.');
    (s as any).temp = Math.floor(Math.random() * 3) + 0;
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    if ((!((s as any).temp ?? 0))) {
      // TODO-QSP: act 'Continue': gt 'arturdin', 'bed'
    }
    if (((s as any).temp ?? 0) === 1) {
      // TODO-QSP: act 'Continue': gt 'arturdin', 'bedmiss'
    }
    if (((s as any).temp ?? 0) === 2) {
      // TODO-QSP: act 'Continue': gt 'arturdin', 'facefuck'
    }
  } },
  ]);
  scene.build();
}

export const arturSex: LocationDef = {
  name: 'arturSex',
  title: 'Arthur eyes your body as his calloused hands began to strip ',
  region: 'other',
  description: ['Arthur eyes your body as his calloused hands began to strip off your clothes and caress you, making you flush with heat.'],
  enter: enter,
};
