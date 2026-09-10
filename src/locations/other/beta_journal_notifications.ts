// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

export const beta_journal_notifications: LocationDef = {
  name: 'beta_journal_notifications',
  region: 'other',
  enter: enter,
};
