import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).array_tab ?? 0)[1] === '') {
    qspCall(s, 'beta_journal', 'init_array');
  }
  qspCall(s, 'beta_journal', 'nav_construct');
  scene.text('magic content');
  scene.build();
}

export const beta_journal_magic: LocationDef = {
  name: 'beta_journal_magic',
  title: 'magic content',
  region: 'other',
  description: ['magic content'],
  enter: enter,
};
