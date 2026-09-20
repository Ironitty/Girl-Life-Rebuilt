import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'FSstat', '');
  scene.text('<center><b>Hotel room</b></center>');
  scene.text('');
  if (((s as any).FSmedkit ?? 0) > 0) {
    // TODO-QSP: dynamic text: First aid kits <<FSmedkit>> pieces
    scene.text(`First aid kits ${((s as any).FSmedkit || '')} pieces`);
    if (((s as any).FSHP ?? 0) < 100) {
      scene.actions([
        { label: 'Treated', handler: (st: GameState) => {
    (st as any).FShour = ((st as any).FShour ?? 0) + (1);
    (st as any).FSHP = 100;
    (st as any).FSmedkit = ((st as any).FSmedkit ?? 0) - (1);
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.text('You heal health through kits.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Laze', handler: (st: GameState) => {
    (st as any).FShour = ((st as any).FShour ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.text('You lounged in the apartment, lounging on the couch and thinking how you vykruchivatsya of the situation.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).FShour = ((st as any).FShour ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    qspGoto(st, 'FSroom', '');
  } },
  ]);
  scene.build();
}

export const FSgame: LocationDef = {
  name: 'FSgame',
  title: '<center><b>Hotel room</b></center>',
  region: 'other',
  enter: enter,
};
