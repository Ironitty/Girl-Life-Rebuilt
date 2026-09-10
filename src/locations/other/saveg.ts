// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).version_major = 0;
  (s as any).version_minor = 9;
  (s as any).version_revision = 9;
  (s as any).version_patch = 1;
  scene.build();
}

export const saveg: LocationDef = {
  name: 'saveg',
  region: 'other',
  enter: enter,
};
