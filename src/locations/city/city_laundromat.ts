import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_laundromat', '');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Laundromat</b></center>');
  scene.img('images/system/image_needed.png');
  scene.text('The local laundromat, where you can wash your clothes.');
  qspCall(s, 'washer', 'set_washer_acts');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

export const city_laundromat: LocationDef = {
  name: 'city_laundromat',
  title: 'Laundromat',
  region: 'city',
  locationType: 'public_indoors',
  description: ['The local laundromat, where you can wash your clothes.'],
  enter: enter,
};
