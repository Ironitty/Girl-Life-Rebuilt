import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Disopl</b></center>');
  scene.text('');
  scene.text('<table border="1">');
  scene.text('<tr><th>Save Slot</th><th>Load</th><th>Delete</th></tr>');
  if (((s as any).KGD1 ?? 0)?.['save'] > 0) {
    scene.text('<tr><td>First Save</td><td><a href="exec:gt \'KGDstart\',\'loadsave\',1">[Load]</a></td><td><a href="exec:gt \'KGDstart\',\'deletesave\',1">[Delete]</a></td></tr>');
  }
  if (((s as any).KGD2 ?? 0)?.['save'] > 0) {
    scene.text('<tr><td>Second Save</td><td><a href="exec:gt \'KGDstart\',\'loadsave\',2">[Load]</a></td><td><a href="exec:gt \'KGDstart\',\'deletesave\',2">[Delete]</a></td></tr>');
  }
  if (((s as any).KGD3 ?? 0)?.['save'] > 0) {
    scene.text('<tr><td>Third Save</td><td><a href="exec:gt \'KGDstart\',\'loadsave\',3">[Load]</a></td><td><a href="exec:gt \'KGDstart\',\'deletesave\',3">[Delete]</a></td></tr>');
  }
  if (((s as any).KGD4 ?? 0)?.['save'] > 0) {
    scene.text('<tr><td>Fourth Save</td><td><a href="exec:gt \'KGDstart\',\'loadsave\',4">[Load]</a></td><td><a href="exec:gt \'KGDstart\',\'deletesave\',4">[Delete]</a></td></tr>');
  }
  if (((s as any).KGD5 ?? 0)?.['save'] > 0) {
    scene.text('<tr><td>Fifth Save</td><td><a href="exec:gt \'KGDstart\',\'loadsave\',5">[Load]</a></td><td><a href="exec:gt \'KGDstart\',\'deletesave\',5">[Delete]</a></td></tr>');
  }
  if (((s as any).KGD6 ?? 0)?.['save'] > 0) {
    scene.text('<tr><td>Sixth Save</td><td><a href="exec:gt \'KGDstart\',\'loadsave\',6">[Load]</a></td><td><a href="exec:gt \'KGDstart\',\'deletesave\',6">[Delete]</a></td></tr>');
  }
  scene.text('</table>');
  scene.actions([
    { label: 'Play a new game', handler: (st: GameState) => {
    scene.text('<center><b>Disopl</b></center>');
    ((s as any).KGD ?? {})['save'] = 1;
    ((s as any).KGD ?? {})['money'] = 1000;
    ((s as any).KGD ?? {})['HP'] = 100;
    ((s as any).KGD ?? {})['lvl'] = 1;
    ((s as any).KGD ?? {})['damage'] = 10;
    ((s as any).KGD ?? {})['day'] = 1;
  }, goto: ['KGDgame', ''] },
    { label: 'Leave', goto: ['KGDgame', 'exit'] },
  ]);
  scene.build();
}

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
      enterDefault(s, scene);
      break;
  }
}

export const KGDstart: LocationDef = {
  name: 'KGDstart',
  title: 'Are you sure you want to load this saved game?',
  region: 'kgd',
  enter: enter,
};
