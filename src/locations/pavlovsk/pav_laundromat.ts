import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_laundromat', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Laundromat</b></center>');
  scene.img('images/system/image_needed.png');
  scene.text('The local laundromat, where you can wash your clothes.');
  qspCall(s, 'washer', 'set_washer_acts');
  scene.actions([
    { label: 'Leave', goto: ['pav_complex', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_laundromat: LocationDef = {
  name: 'pav_laundromat',
  title: 'Laundromat',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  enter: enter,
};
