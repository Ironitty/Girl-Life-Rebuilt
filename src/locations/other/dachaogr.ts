import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Garden</h4></center>');
  if (((s as any).month ?? 0) > 4  &&  ((s as any).month ?? 0) < 10) {
    scene.img('images/locations/suburban/cottage/vspah.jpg');
    scene.text('Well-kept garden.');
  } else {
    if (((s as any).month ?? 0) <= 4  ||  ((s as any).month ?? 0) >= 10) {
      scene.img('images/locations/suburban/cottage/vspah.jpg');
      scene.text('Not for planting season');
    }
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['dachamy', ''] },
  ]);
  scene.build();
}

export const dachaogr: LocationDef = {
  name: 'dachaogr',
  title: '<center><h4>Garden</h4></center>',
  region: 'other',
  locationType: 'secluded',
  description: ['Well-kept garden.'],
  enter: enter,
};
