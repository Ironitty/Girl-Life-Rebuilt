// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives', 'African Studies 101'] }]);
  if (((s as any).locArgs?.[0] ?? 0) === 'African Studies 102') {
    scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives', 'African Studies 102'] }]);
  }
  scene.build();
}

export const uni_lessons_electives2: LocationDef = {
  name: 'uni_lessons_electives2',
  region: 'other',
  enter: enter,
};
