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
  // TODO-QSP: dynamic text: <<$FSpers['text']>>
  scene.text(`${((s as any).FSpers ?? 0)?.['text']}`);
  if (((s as any).FSpers ?? 0) === 1) {
    // TODO-QSP: act 'Load a saved game': gt 'KGZgame'
  }
  scene.actions([
    { label: 'Play a new game', handler: (st: GameState) => {
    (s as any).FSfemin = 0;
    (s as any).FSfigur = 0;
    (s as any).FScolor = 0;
    (s as any).FSface = 0;
    (s as any).FSskin = 0;
    (s as any).FShvost = 0;
    (s as any).dicktipe = 0;
    (s as any).FSdick = 18;
    (s as any).FSvagina = 0;
    (s as any).FStits = 0;
    (s as any).FStitsLine = 0;
    (s as any).FSpers = 1;
    (s as any).FSday = 0;
    (s as any).FShour = 8;
    (s as any).FSsup = 1;
    (s as any).FSplace = 0;
    (s as any).FSgem = 0;
    (s as any).FSmedkit = 0;
    (s as any).FSlvl = 1;
    (s as any).FSexp = 0;
    (s as any).FSstren = 10;
    (s as any).FSspeed = 10;
    (s as any).FSagil = 10;
    (s as any).FSreakt = 10;
    (s as any).FSvital = 10;
    (s as any).FSHP = ((s as any).FSvital ?? 0) * 10;
    (s as any).FSbrona = 0;
    (s as any).FSweaponDam = 0;
    if (((s as any).FSpers ?? 0)?.['text'] === '') {
      (s as any).FSpers['text'] = 'Player';
    }
    // TODO-QSP: dynamic text: Character Name <<$FSpers['text']>>
    scene.text(`Character Name ${((s as any).FSpers ?? 0)?.['text']}`);
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
