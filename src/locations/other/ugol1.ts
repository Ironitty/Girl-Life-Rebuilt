import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/suburban/sex/19.jpg');
  scene.actions([
    { label: 'Masturbate', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/suburban/sex/19.jpg');
    scene.text('You lean back against the fence, noticing the area is completely deserted.');
    scene.text('You are distracted by your wet panties sticking to you, your arousal keeping your pussy soaking wet. Looking around once more to make sure you are alone, you pull down your panties a bit to expose your pussy.');
    qspCall(s, 'stat', '');
    scene.text('You begin to rub your clit, at first in slow soft circles, but as you quickly feel yourself building up to an orgasm, you start rubbing it with urgency, biting your lip to keep from crying out. A massive shudder runs through your body as you orgasm, your soft cries muffled by your own hand over your mouth. Getting dressed and blushing slightly, you check once more to make sure you are alone. You hope no one heard you as you quickly leave.');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['dachamy', ''] },
    ]);
  } },
  ]);
  scene.build();
}

export const ugol1: LocationDef = {
  name: 'ugol1',
  region: 'other',
  enter: enter,
};
