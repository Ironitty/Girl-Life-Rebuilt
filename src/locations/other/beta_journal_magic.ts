import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).array_tab ?? 0)[1] === '') {
    qspCall(s, 'beta_journal', 'init_array');
  }
  qspCall(s, 'beta_journal', 'nav_construct');
  scene.text('magic content');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const beta_journal_magic: LocationDef = {
  name: 'beta_journal_magic',
  title: 'magic content',
  region: 'other',
  enter: enter,
};
