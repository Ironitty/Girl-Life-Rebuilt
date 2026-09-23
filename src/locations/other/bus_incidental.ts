import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'bus_incidental', qspUntranslated(s, "''event<<rand(1'", { location: "bus_incidental" }), '1)>>');
  // TODO-QSP: end
  scene.build();
}

function enterEvent1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('This is a placeholder incidental event!!');
  scene.text('Cool stuff to be added here!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspGoto(s, 'bus_incidental', qspUntranslated(s, "''end<<rand(1'", { location: "bus_incidental" }), '1)>>');
  // TODO-QSP: end
  scene.build();
}

function enterEnd1(s: GameState, scene: SceneBuilder): void {
  scene.text('This is a placeholder end incidental event!!');
  scene.text('Cool stuff to be added here!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'events':
      enterEvents(s, scene);
      break;
    case 'event1':
      enterEvent1(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'end1':
      enterEnd1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bus_incidental: LocationDef = {
  name: 'bus_incidental',
  title: 'This is a placeholder incidental event!!',
  region: 'other',
  enter: enter,
};
