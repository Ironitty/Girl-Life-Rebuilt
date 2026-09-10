import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0) < 1080) {
    (s as any).minut = ((s as any).minut ?? 0) + (1080 - (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0)));
  }
  qspCall(s, 'jobs', 'clock', 'city_strip_bargirl');
  if (((s as any).strip_club ?? 0)?.['first_bar_shift'] === 0) {
    (s as any).strip_club['first_bar_shift'] = 1;
    scene.actions([{ label: 'Continue', goto: ['stwork3', 'first_shift'] }]);
  } else {
    scene.text('Arriving at your locker, you change into your uniform before heading out to the bar.');
    (s as any).strip_club['rand'] = Math.floor(Math.random() * 6) + 0;
    if (((s as any).strip_club ?? 0)?.['rand'] === 0) {
      scene.actions([{ label: 'Continue', goto: ['stwork3', '1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['stwork3', '2'] }]);
      if (((s as any).strip_club ?? 0)?.['rand'] === 2) {
        scene.actions([{ label: 'Continue', goto: ['stwork3', '3'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['stwork3', '4'] }]);
        if (((s as any).strip_club ?? 0)?.['rand'] === 4) {
          scene.actions([{ label: 'Continue', goto: ['stwork3', '5'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['stwork3', '6'] }]);
        }
      }
    }
  }
  scene.build();
}

export const stwork3: LocationDef = {
  name: 'stwork3',
  region: 'other',
  enter: enter,
};
