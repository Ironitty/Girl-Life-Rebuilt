import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'nichBathServant', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Servant Bathroom</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/bathroomServant.jpg');
  scene.text('This is the servants bathroom. It includes a shower, a toilet and a sink with a <a href="exec:gt \'mirror\',\'start\'">mirror</a>. There is a washing machine standing in one corner of the room.');
  if (((s as any).nichWork ?? 0) === 2) {
    if (((s as any).mc_inventory ?? 0)?.['shampoo'] === 0) {
      scene.text('Since you are allowed to use some of the families shampoo for yourself you open up a new bottle and place it inside your shower.');
      if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['shampoo'] = 15;
    }
    qspCall(s, 'nichChore', 'inspect', 'bathServant');
    scene.actions([
      { label: '<b>Go to your bedroom</b>', goto: ['nichBedroomServant', ''] },
      { label: 'Inspect laundry', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'inspect', 'laundry', 1
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Go to the servants bedroom', goto: ['nichBedroomServant', ''] },
    ]);
  }
  qspCall(s, 'din_van', 'private');
  qspCall(s, 'home_events', 'bathroom');
  // TODO-QSP: end
  scene.build();
}

export const nichBathServant: LocationDef = {
  name: 'nichBathServant',
  title: 'Servant Bathroom',
  region: 'other',
  description: ['Since you are allowed to use some of the families shampoo for yourself you open up a new bottle and place it inside your shower.'],
  enter: enter,
};
