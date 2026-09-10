import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterLoadsave(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Disopl</b></center>');
  scene.text('<center><b>Are you sure you want to load this saved game?</b></center>');
  scene.actions([
    { label: 'Confirm', handler: (st: GameState) => {
    (s as any).KGDsavegame = qspUntranslated(s, "ARGS[1]", { location: "KGDstart" });
    // TODO-QSP: copyarr 'KGD', 'KGD<<ARGS[1]>>'
  }, goto: ['KGDgame', ''] },
    { label: 'Cancel', goto: ['KGDstart', ''] },
  ]);
  scene.build();
}

function enterDeletesave(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Disopl</b></center>');
  scene.text('<center><b>Are you sure you want to delete this saved game?</b></center>');
  scene.actions([
    { label: 'Confirm', goto: ['KGDstart', ''] },
    { label: 'Cancel', goto: ['KGDstart', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'loadsave':
      enterLoadsave(s, scene);
      break;
    case 'deletesave':
      enterDeletesave(s, scene);
      break;
    default:
      enterLoadsave(s, scene);
      break;
  }
}

export const KGDstart: LocationDef = {
  name: 'KGDstart',
  title: 'Are you sure you want to load this saved game?',
  region: 'kgd',
  enter: enter,
};
