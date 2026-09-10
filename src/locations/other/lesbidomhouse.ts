import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    scene.text('You ring the doorbell several times, but no one comes to answer the door. When you try to look inside through the windows, you don\'t see any movement either.');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } else {
    scene.text('You ring the doorbell several times, and eventually hear an electronic *click*. The door slowly swings open, even though no one came to answer it.');
    if (((s as any).lesbiQW ?? 0) === 1) {
      scene.actions([
        { label: 'Enter the house', goto: ['lesbidomhouse', 'QW1'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['lesbidomhouse', 'QW2'] }]);
      if (((s as any).lesbiQW ?? 0) === 3) {
        scene.actions([{ label: 'Continue', goto: ['lesbidomhouse', 'QW3'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['lesbidomhouse', 'QW4'] }]);
        if (((s as any).lesbiQW ?? 0) === 5) {
          scene.actions([{ label: 'Continue', goto: ['lesbidomhouse', 'QW5'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['lesbidomhouse', 'QW6'] }]);
          if (((s as any).lesbiQW ?? 0) === 7) {
            scene.actions([{ label: 'Continue', goto: ['lesbidomhouse', 'QW7'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['lesbidomhouse', 'QW8'] }]);
            if (((s as any).lesbiQW ?? 0) === 9) {
              scene.actions([{ label: 'Continue', goto: ['lesbidomhouse', 'QW9'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['lesbidomhouse', 'QW10'] }]);
              if (((s as any).lesbiQW ?? 0) === 11) {
                scene.actions([{ label: 'Continue', goto: ['lesbidomhouse', 'QW11'] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['lesbidomhouse', 'QW12'] }]);
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  }
  scene.build();
}

export const lesbidomhouse: LocationDef = {
  name: 'lesbidomhouse',
  title: 'You ring the doorbell several times, but no one comes to ans',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You ring the doorbell several times, but no one comes to answer the door. When you try to look inside through the windows, you don\'t see any movement either.'],
  enter: enter,
};
