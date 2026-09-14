import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'vodka', 3);
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <<$boydesc>> takes your hand and guides you away from the park, towards his apar...
  scene.text(`${((s as any).boydesc || '')} takes your hand and guides you away from the park, towards his apartment.`);
  scene.text('When you\'re about to enter a building, he suddenly puts his arms around you and begins to kiss you.');
  scene.actions([
    { label: 'Kiss him back', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You answer his kiss, and make out with him for a moment. In the meantime, he unbuttoned his pants and pulled out his raging boner, eager to get some action. He then puts his hands on your shoulders and gently but insistently begins to press downwards. You know what he wants from you next.');
    qspCall(s, 'arousal', 'kiss', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Squat before him', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/bjdan.jpg');
    scene.text('You kneel down in front of the guy and place a light kiss on his erect cock, giving him a questioning look. When you see the agony on his face you smirk and wrap your lips around his cock, and begin to suck him off. After a while he groans, and you can tell that he\'s getting close to his orgasm.');
    qspCall(s, 'arousal', 'bj', 15, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Redouble your efforts', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/katja/cum.jpg');
    scene.text('You increase the pace and use your tongue to stimulate the head of his cock, trying to coax his cum out of him. He soon rewards you, and you feel his hot jets of sperm handing at the back of your throat.');
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow it', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boydesc ?? 0), 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/katja/swallow.jpg');
    scene.text('You swallow your casual acquaintance\'s cum, and smile up at him with the nasty after-taste of his spunk still left in your mouth. You obediently open your mouth and move around your tongue, to show him that you swallowed his load.');
    scene.text('He grins down at you and softly strokes your hair as he says: "You\'re so fucking hot… I wish I could keep you forever."');
    scene.actions([
      { label: 'Clean him up', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/katja/clean.jpg');
    scene.text('You smile at him, before taking hold of his penis and using your tongue to lick it clean of any remaining sperm. Then you quietly tuck it back into his pants, and give it an endearing pat before you get back up.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['placer_end', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Spit it out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).boydesc ?? 0), 0);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/bjdan.jpg');
    scene.text('Your face contorts a bit, despite your best efforts to hide your disgust. His load tastes awful! After a few seconds you decide to give up the charade, and just spit it out on the floor right in front of him.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['placer_end', ''] },
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

export const placer_house_one: LocationDef = {
  name: 'placer_house_one',
  title: 'When you\'re about to enter a building, he suddenly puts his ',
  region: 'other',
  description: ['When you\'re about to enter a building, he suddenly puts his arms around you and begins to kiss you.'],
  enter: enter,
};
