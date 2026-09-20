import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Guest Cloakroom</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/bathroomGuest.jpg');
  scene.text('This is the restroom for the guests of Nicholas and his family. The staff is also allowed to use it.');
  scene.text('You could use the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> to check your appearance.');
  if (((s as any).nichWork ?? 0) === 2) {
    qspCall(s, 'nichChore', 'inspect', 'bathGuest');
  }
  // TODO-QSP: end
  scene.actions([
    { label: '<b>Return to the hallway</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'nichApartment', '');
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Guest Cloakroom</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/bathroomGuest.jpg');
  scene.text('This is the restroom for the guests of Nicholas and his family. The staff is also allowed to use it.');
  scene.text('You could use the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> to check your appearance.');
  if (((s as any).nichWork ?? 0) === 2) {
    qspCall(s, 'nichChore', 'inspect', 'bathGuest');
  }
  // TODO-QSP: end
  scene.actions([
    { label: '<b>Return to the hallway</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'nichApartment', '');
  } },
  ]);
  scene.build();
}

function enterReturn(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Guest Cloakroom</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/bathroomGuest.jpg');
  scene.text('This is the restroom for the guests of Nicholas and his family. The staff is also allowed to use it.');
  scene.text('You could use the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> to check your appearance.');
  if (((s as any).nichWork ?? 0) === 2) {
    qspCall(s, 'nichChore', 'inspect', 'bathGuest');
  }
  // TODO-QSP: end
  scene.actions([
    { label: '<b>Return to the hallway</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'nichApartment', '');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = '';
  (s as any).loc = 'nichBathGuest';
  (s as any).locM = ((s as any).loc ?? 0);
  (s as any).location_type = 'bathroom';
  (s as any).menu_loc = 'nichBathGuest';
  (s as any).nichLoc = 'guestBathroom';
  (s as any).menu_arg = '';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'return':
      enterReturn(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nichBathGuest: LocationDef = {
  name: 'nichBathGuest',
  title: 'Guest Cloakroom',
  region: 'other',
  locationType: 'bathroom',
  description: ['This is the restroom for the guests of Nicholas and his family. The staff is also allowed to use it.'],
  enter: enter,
};
