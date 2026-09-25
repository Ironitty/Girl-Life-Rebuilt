import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBathr(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_house_res_bathr', 'bathr');
  (s as any).location_type = 'bathroom';
  (s as any).locclass = 'bathroom';
  (s as any).bathtype = 'bathtub shower';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/city/residential/house/crh_bathroom.jpg');
  scene.text('The ornate room holds a shower, toilet, sink, <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">mirror</a> where you can ' + ((((s as any).pcs_hairbsh ?? 0) < 1) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027brush\u0027); return false;">brush</a>') : ('brush')) + ' your hair, and even a bath tub.');
  qspCall(s, 'selfplay', 'suction_dildo');
  qspCall(s, 'din_van', 'private');
  qspCall(s, 'din_van', 'misery');
  qspCall(s, 'home_events', 'bathroom');
  scene.actions([
    { label: 'Leave the room', goto: ['city_house_res_misc', 'hallw'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'bathr':
      enterBathr(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_house_res_bathr: LocationDef = {
  name: 'city_house_res_bathr',
  title: 'Bathroom',
  region: 'city',
  locationType: 'bathroom',
  locclass: 'bathroom',
  enter: enter,
};
