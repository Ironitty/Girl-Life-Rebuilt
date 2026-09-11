// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).KDG ?? {})['health'] = ((s as any).KDG ?? 0)?.['HP'];
  ((s as any).KDG ?? {})['health_2'] = ((s as any).KGD ?? 0)?.['HP_2'];
  ((s as any).KDG ?? {})['health_3'] = ((s as any).KGD ?? 0)?.['HP_3'];
  ((s as any).KDG ?? {})['health_4'] = ((s as any).KGD ?? 0)?.['HP_4'];
  ((s as any).KDG ?? {})['health_5'] = ((s as any).KGD ?? 0)?.['HP_5'];
  ((s as any).KDG ?? {})['health_6'] = ((s as any).KGD ?? 0)?.['HP_6'];
  scene.actions([{ label: 'Continue', goto: ['KGDfight', ''] }]);
  scene.build();
}

export const KGDbefore: LocationDef = {
  name: 'KGDbefore',
  region: 'kgd',
  enter: enter,
};
