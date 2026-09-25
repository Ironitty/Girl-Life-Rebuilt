import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).nosave = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Albida</b></center>');
  scene.text('.');
  scene.text('<b>Your current character</b>');
  scene.text(`${(((s as any).FSpers ?? 0)?.['text'] ?? '')}`);
  if (((s as any).FSpers ?? 0) === 1) {
    scene.actions([
      { label: 'Load a saved game', goto: ['KGZgame', ''] },
    ]);
  }
  scene.actions([
    { label: 'Play a new game', handler: (st: GameState) => {
    (st as any).FSfemin = 0;
    (st as any).FSfigur = 0;
    (st as any).FScolor = 0;
    (st as any).FSface = 0;
    (st as any).FSskin = 0;
    (st as any).FShvost = 0;
    (st as any).dicktipe = 0;
    (st as any).FSdick = 18;
    (st as any).FSvagina = 0;
    (st as any).FStits = 0;
    (st as any).FStitsLine = 0;
    (st as any).FSpers = 1;
    (st as any).FSday = 0;
    (st as any).FShour = 8;
    (st as any).FSsup = 1;
    (st as any).FSplace = 0;
    (st as any).FSgem = 0;
    (st as any).FSmedkit = 0;
    (st as any).FSlvl = 1;
    (st as any).FSexp = 0;
    (st as any).FSstren = 10;
    (st as any).FSspeed = 10;
    (st as any).FSagil = 10;
    (st as any).FSreakt = 10;
    (st as any).FSvital = 10;
    (st as any).FSHP = ((st as any).FSvital ?? 0) * 10;
    (st as any).FSbrona = 0;
    (st as any).FSweaponDam = 0;
    (st as any).FSname = window.prompt("Enter nickname") ?? '';
    if (((st as any).FSpers ?? 0)?.['text'] === '') {
      ((st as any).FSpers = (st as any).FSpers ?? {})['text'] = 'Player';
    }
    scene.text(`Character Name ${(((st as any).FSpers ?? 0)?.['text'] ?? '')}`);
    scene.actions([
      { label: 'Play', goto: ['FSgame', ''] },
    ]);
  } },
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).nosave = 0;
  }, goto: ['komp', 'start'] },
  ]);
  scene.build();
}

export const FSstart: LocationDef = {
  name: 'FSstart',
  title: '<center><b>Albida</b></center>',
  region: 'other',
  enter: enter,
};
