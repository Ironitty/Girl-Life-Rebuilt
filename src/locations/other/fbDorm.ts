import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <<$boydesc>> leads you towards the shabby hostel in Pavlovsk, and smiles at you:...
  scene.text(`${((s as any).boydesc || '')} leads you towards the shabby hostel in Pavlovsk, and smiles at you: "Come on, let's go to my room."`);
  scene.actions([
    { label: 'Let him guide you to his room', goto: ['fbDormD', 'd_fbd_start'] },
    { label: '"Ehmm… I changed my mind"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: Seeing that <<$boydesc>> brought you to his crappy hostel, you're not so sure ab...
    scene.text(`Seeing that ${((s as any).boydesc || '')} brought you to his crappy hostel, you're not so sure about this any more. You've heard lots of stories about girls being taken to this place… none of them good. On the other hand, ${((s as any).boydesc || '')} is kind of cute. What's the worst that could happen? You can always leave, if you don't like what's happening in there.`);
    scene.text('He notices your hesitation and tries to persuade you: "Come on, babe! It\'ll just be you and me, having some fun in there! What\'s the harm?"');
    scene.text('Before you know it you nod, and he smiles as he takes you by the arm and guides you into the hostel. You\'re still not sure about this, and somewhat question your decision while you let him show you to his room.');
    scene.actions([
      { label: 'Let him guide you to his room', goto: ['fbDormD', 'd_fbd_start'] },
    ]);
  } },
  ]);
  scene.build();
}

export const fbDorm: LocationDef = {
  name: 'fbDorm',
  region: 'other',
  enter: enter,
};
