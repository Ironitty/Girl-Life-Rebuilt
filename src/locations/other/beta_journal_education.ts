import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'beta_journal', 'nav_construct');
  scene.build();
}

export const beta_journal_education: LocationDef = {
  name: 'beta_journal_education',
  region: 'other',
  enter: enter,
};
