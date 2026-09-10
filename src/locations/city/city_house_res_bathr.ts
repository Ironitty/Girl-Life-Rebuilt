import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_house_res_bathr', 'bathr');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/city/residential/house/crh_bathroom.jpg');
  // TODO-QSP: dynamic text: The ornate room holds a shower, toilet, sink, <a href="exec:gt 'mirror','start'"...
  scene.text('The ornate room holds a shower, toilet, sink, <a href="exec:gt \'mirror\',\'start\'">mirror</a> where you can \' + iif(pcs_hairbsh < 1, \'<a href="exec:gt \'mirror\',\'brush\'">brush</a>\', \'brush\') + \' your hair, and even a bath tub.');
  qspCall(s, 'selfplay', 'suction_dildo');
  qspCall(s, 'din_van', 'private');
  qspCall(s, 'din_van', 'misery');
  qspCall(s, 'home_events', 'bathroom');
  scene.actions([
    { label: 'Leave the room', goto: ['city_house_res_misc', 'hallw'] },
  ]);
  scene.build();
}

export const city_house_res_bathr: LocationDef = {
  name: 'city_house_res_bathr',
  title: 'Bathroom',
  region: 'city',
  locationType: 'bathroom',
  locclass: 'bathroom',
  enter: enter,
};
