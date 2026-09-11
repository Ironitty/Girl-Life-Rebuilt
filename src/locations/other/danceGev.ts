import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['lesbian_count'] > 0) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  } else {
    if (((s as any).stat ?? 0)?.['lesbian_count'] === 0) {
      qspCall(s, 'mood', 'raise', 'tiny');
    }
  }
  (s as any).danceevtimes = ((s as any).danceevtimes ?? 0) + (1);
  qspCall(s, 'stat', '');
  if (((s as any).danceevtimes ?? 0) < 5) {
    (s as any).dancegevtipe = Math.floor(Math.random() * 3) + 0;
  }
  if (((s as any).danceevtimes ?? 0) >= 5) {
    (s as any).dancegevtipe = Math.floor(Math.random() * 4) + 0;
  }
  scene.img(`images/locations/pavlovsk/community/dance_studio/ev${((s as any).dancegevtipe ?? 0)}.jpg`);
  if ((!((s as any).dancegevtipe ?? 0))) {
    scene.text('You see a rather well-toned girl doing stretches. You watch as she does the splits, her skimpy g-string leaving nothing to your imagination.');
    if (((s as any).stat ?? 0)?.['lesbian_count'] > 0) {
      qspCall(s, 'arousal', 'voyeur', 5);
    }
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).dancegevtipe ?? 0) === 1) {
      scene.text('You see another girl in the class doing a handstand.');
    } else {
      if (((s as any).dancegevtipe ?? 0) === 2) {
        scene.text('You watch another girl warming up before she starts practicing.');
      } else {
        if (((s as any).dancegevtipe ?? 0) === 3) {
          scene.text('You watch as a girl goes from doing a handstand to the splits, before noticing that she isn\'t wearing any panties and has both her holes on show.');
          if (((s as any).stat ?? 0)?.['lesbian_count'] > 0) {
            qspCall(s, 'arousal', 'voyeur', 5);
          }
          qspCall(s, 'stat', '');
        }
      }
    }
  }
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Start class', goto: ['gdksport', 'dance2'] },
  ]);
  scene.build();
}

export const danceGev: LocationDef = {
  name: 'danceGev',
  title: 'You see a rather well-toned girl doing stretches. You watch ',
  region: 'other',
  description: ['You see a rather well-toned girl doing stretches. You watch as she does the splits, her skimpy g-string leaving nothing to your imagination.'],
  enter: enter,
};
