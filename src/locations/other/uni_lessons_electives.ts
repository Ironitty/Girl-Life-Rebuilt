// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101'] }]);
  if (((s as any).locArgs?.[0] ?? 0) === 'African Studies 102') {
    scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102'] }]);
  }
  scene.build();
}

export const uni_lessons_electives: LocationDef = {
  name: 'uni_lessons_electives',
  region: 'other',
  enter: enter,
};
