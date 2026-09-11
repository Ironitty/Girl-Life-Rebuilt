import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Guest Cloakroom</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/bathroomGuest.jpg');
  scene.text('This is the restroom for the guests of Nicholas and his family. The staff is also allowed to use it.');
  scene.text('You could use the <a href="exec:gt \'mirror\', \'start\'">mirror</a> to check your appearance.');
  if (((s as any).nichWork ?? 0) === 2) {
    qspCall(s, 'nichChore', 'inspect', 'bathGuest');
  }
  scene.actions([
    { label: '<b>Return to the hallway</b>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichApartment', ''] },
  ]);
  scene.build();
}

export const nichBathGuest: LocationDef = {
  name: 'nichBathGuest',
  title: 'Guest Cloakroom',
  region: 'other',
  locationType: 'bathroom',
  description: ['This is the restroom for the guests of Nicholas and his family. The staff is also allowed to use it.'],
  enter: enter,
};
