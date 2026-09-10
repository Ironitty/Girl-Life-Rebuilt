import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'motel', '');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Motel</h4></center>');
  scene.img('images/locations/highway/motel/motel.jpg');
  scene.text('Roadside motel where truckers stop for something to eat and sleep.');
  scene.actions([
    { label: 'Exit the highway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 12;
  }, goto: ['road', '12'] },
  ]);
  scene.build();
}

export const motel: LocationDef = {
  name: 'motel',
  title: '<center><h4>Motel</h4></center>',
  region: 'other',
  locationType: 'public_outdoors',
  description: ['Roadside motel where truckers stop for something to eat and sleep.'],
  enter: enter,
};
