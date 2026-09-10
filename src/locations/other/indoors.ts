// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).Time15Minute = ((s as any).totminut ?? 0);
  (s as any).coatQualityBonus = 0;
  scene.build();
}

export const indoors: LocationDef = {
  name: 'indoors',
  region: 'other',
  enter: enter,
};
