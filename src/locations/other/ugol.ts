import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/ugelm1.jpg');
  if ((Math.floor(Math.random() * 4) + 0) >= 0  &&  ((s as any).temper ?? 0) > 14  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).body_paint_day ?? 0) !== ((s as any).daystart ?? 0)) {
    qspCall(s, 'dibodi', 'os1');
  } else {
    scene.text('Entering the passage, you discover a strange collection of shades of brown, the walls covered in streaks, cracks, and plaster and the floor dirty. It seems this area is not as well maintained as the outside.');
  }
  scene.text('<a href="exec:gt \'artstudia\',\'bodimod1\'">Quiet courtyard</a>.');
  if (((s as any).pcs_horny ?? 0) >= 90  &&  ((s as any).pcs_inhib ?? 0) > 30) {
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pushkin/ugelm.jpg');
    scene.text('You travel further into the passage and confirm it is completely deserted.');
    if (((s as any).PCloPants ?? 0) > 0) {
      scene.text('Feeling desperate for release, you pull down your pants and kick them off.');
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.text('Feeling desperate for release, you hitch up your skirt above your waist.');
      }
    }
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You are distracted by your wet panties sticking to you, your arousal keeping your pussy soaking wet. Looking around once more to make sure you are alone, you pull down your panties a bit to expose your pussy.');
    }
    qspCall(s, 'sweat', 'add', 20);
    scene.text('You begin to rub your clit, at first in slow soft circles, but as you quickly feel yourself building up to an orgasm, you start rubbing it with urgency, biting your lip to keep from crying out. A massive shudder runs through your body as you orgasm, your soft cries of ecstasy echoing in the corridor. Getting dressed and blushing slightly, you check once more to make sure you are alone. You hope no one heard you as you quickly leave.');
    qspCall(s, 'arousal', 'clit_finger', 15, 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stormy finish', goto: ['ugol', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['pushkin', ''] },
  ]);
  scene.build();
}

export const ugol: LocationDef = {
  name: 'ugol',
  title: '<a href="exec:gt \'artstudia\',\'bodimod1\'">Quiet courtyard</a>',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
