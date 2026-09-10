// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arrsize ?? 0)('ARGS') === 1) {
    (s as any).ARGS[1] = ((s as any).month ?? 0);
  }
  if (((s as any).ARGS ?? 0)[1] === 1) {
    (s as any).weatherMeanTemp = (-48);
    (s as any).weatherTempDelta = 47;
    (s as any).weatherFallM = 50;
    (s as any).weatherFallDelta = 25;
  } else {
    (s as any).weatherMeanTemp = (-50);
    (s as any).weatherTempDelta = 52;
    (s as any).weatherFallM = 40;
    (s as any).weatherFallDelta = 20;
    if (((s as any).ARGS ?? 0)[1] === 3) {
      (s as any).weatherMeanTemp = (-10);
      (s as any).weatherTempDelta = 63;
      (s as any).weatherFallM = 30;
      (s as any).weatherFallDelta = 20;
    } else {
      (s as any).weatherMeanTemp = 52;
      (s as any).weatherTempDelta = 78;
      (s as any).weatherFallM = 20;
      (s as any).weatherFallDelta = 15;
      if (((s as any).ARGS ?? 0)[1] === 5) {
        (s as any).weatherMeanTemp = 115;
        (s as any).weatherTempDelta = 91;
        (s as any).weatherFallM = 20;
        (s as any).weatherFallDelta = 15;
      } else {
        (s as any).weatherMeanTemp = 161;
        (s as any).weatherTempDelta = 83;
        (s as any).weatherFallM = 10;
        (s as any).weatherFallDelta = 10;
        if (((s as any).ARGS ?? 0)[1] === 7) {
          (s as any).weatherMeanTemp = 191;
          (s as any).weatherTempDelta = 80;
          (s as any).weatherFallM = 5;
          (s as any).weatherFallDelta = 5;
        } else {
          (s as any).weatherMeanTemp = 174;
          (s as any).weatherTempDelta = 75;
          (s as any).weatherFallM = 10;
          (s as any).weatherFallDelta = 10;
          if (((s as any).ARGS ?? 0)[1] === 9) {
            (s as any).weatherMeanTemp = 124;
            (s as any).weatherTempDelta = 65;
            (s as any).weatherFallM = 20;
            (s as any).weatherFallDelta = 15;
          } else {
            (s as any).weatherMeanTemp = 62;
            (s as any).weatherTempDelta = 46;
            (s as any).weatherFallM = 20;
            (s as any).weatherFallDelta = 15;
            if (((s as any).ARGS ?? 0)[1] === 11) {
              (s as any).weatherMeanTemp = 9;
              (s as any).weatherTempDelta = 37;
              (s as any).weatherFallM = 30;
              (s as any).weatherFallDelta = 20;
            } else {
              (s as any).weatherMeanTemp = (-25);
              (s as any).weatherTempDelta = 40;
              (s as any).weatherFallM = 40;
              (s as any).weatherFallDelta = 20;
            }
            (s as any).weatherMeanTemp = ((s as any).weatherMeanTemp ?? 0) + (40);
            return;
          }
        }
      }
    }
  }
  scene.build();
}

export const outdoors: LocationDef = {
  name: 'outdoors',
  title: 'You have blood flowing down your legs and staining your clothes.',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
