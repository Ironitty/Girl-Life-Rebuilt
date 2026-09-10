import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).people = Math.floor(Math.random() * 15) + 1;
  if (((s as any).people ?? 0) <= 5) {
    scene.text('<center><b>Pharmacy</b></center>');
    scene.img(`images/locations/pavlovsk/pharmacy/aptekabusy${((s as any).people ?? 0)}.jpg`);
    // TODO-QSP: dynamic text: There is <<people>> ' + iif(people < 2 or people > 4, 'people' , 'man' ) + ' in ...
    scene.text(`There is ${((s as any).people ?? 0)} ' + iif(people < 2 or people > 4, 'people' , 'man' ) + ' in line as you walk up to the counter to check out.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      { label: 'Wait in line', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).rand ?? 0)(1, 4) * ((s as any).people ?? 0));
    (s as any).people = 0;
    qspCall(s, 'stat', '');
  }, goto: ['city_pharmacy', 'shop'] },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['city_pharmacy', 'shop'] }]);
  }
  scene.build();
}

export const city_pharmacy: LocationDef = {
  name: 'city_pharmacy',
  title: 'Pharmacy',
  region: 'city',
  locationType: 'public_indoors',
  enter: enter,
};
