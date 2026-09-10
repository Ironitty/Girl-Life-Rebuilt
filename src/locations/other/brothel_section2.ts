// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).stage ?? 0))) {
    (s as any).stage = ((s as any).stage ?? 0) + (1);
    scene.actions([{ label: 'Continue', goto: ['brothel_section2', 'section2_party_start'] }]);
  } else {
    (s as any).stage = ((s as any).stage ?? 0) + (1);
    scene.actions([{ label: 'Continue', goto: ['brothel_section2', 'section2_party_bound'] }]);
    if (((s as any).stage ?? 0) === 2) {
      (s as any).stage = ((s as any).stage ?? 0) + (1);
      scene.actions([{ label: 'Continue', goto: ['brothel_section2', 'section2_party_drugs'] }]);
    } else {
      (s as any).stage = ((s as any).stage ?? 0) + (1);
      scene.actions([{ label: 'Continue', goto: ['brothel_section2', 'section2_party_effect'] }]);
      if (((s as any).stage ?? 0) === 4) {
        (s as any).stage = ((s as any).stage ?? 0) + (1);
        scene.actions([{ label: 'Continue', goto: ['brothel_section2', 'section2_party_fuck'] }]);
      } else {
        (s as any).stage = ((s as any).stage ?? 0) + (1);
        scene.actions([{ label: 'Continue', goto: ['brothel_section2', 'section2_party_fuck2'] }]);
        if (((s as any).stage ?? 0) === 6) {
          (s as any).stage = ((s as any).stage ?? 0) + (1);
          scene.actions([{ label: 'Continue', goto: ['brothel_section2', 'section2_party_cum'] }]);
        } else {
          (s as any).stage = ((s as any).stage ?? 0) + (1);
          scene.actions([{ label: 'Continue', goto: ['brothel_section2', 'section2_party_release'] }]);
          if (((s as any).stage ?? 0) === 8) {
            (s as any).stage = ((s as any).stage ?? 0) + (1);
            scene.actions([{ label: 'Continue', goto: ['brothel_section2', 'section2_party_recover'] }]);
          }
        }
      }
    }
  }
  scene.build();
}

export const brothel_section2: LocationDef = {
  name: 'brothel_section2',
  region: 'other',
  enter: enter,
};
