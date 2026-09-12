import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'butoilet', '');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>WC</b></center>');
  scene.img('images/locations/shared/bathroom/publictoilet.jpg');
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.actions([
      { label: 'Brush your hair', goto: ['mirror', 'brush'] },
    ]);
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  scene.actions([
    { label: 'Leave the toilet', goto: ['burger', 'start'] },
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

export const butoilet: LocationDef = {
  name: 'butoilet',
  title: 'WC',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'restroom',
  enter: enter,
};
