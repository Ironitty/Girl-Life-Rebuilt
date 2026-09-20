import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'FSstat', '');
  scene.text('<center><b>Street</b></center>');
  scene.actions([
    { label: 'Walk into a room', handler: (st: GameState) => {
    (st as any).FShour = ((st as any).FShour ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    qspGoto(st, 'FSgame', '');
  } },
    { label: 'Wander', handler: (st: GameState) => {
    (st as any).FShour = ((st as any).FShour ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.text('You wander through the deserted streets.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

export const FSroom: LocationDef = {
  name: 'FSroom',
  title: '<center><b>Street</b></center>',
  region: 'other',
  enter: enter,
};
