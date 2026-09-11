// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAfricanStudies101(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101'] }]);
  if (((s as any).locArgs?.[0] ?? 0) === 'African Studies 102') {
    scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102'] }]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'African Studies 101':
      enterAfricanStudies101(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_lessons_electives: LocationDef = {
  name: 'uni_lessons_electives',
  region: 'other',
  enter: enter,
};
