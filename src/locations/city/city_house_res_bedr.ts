import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_house_res_bedr', 'bedro');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Bedroom</b></center>');
  scene.img('images/locations/city/residential/house/crh_bedroom.jpg');
  qspCall(s, 'daily_routine', 'offer_here');
  qspCall(s, 'library_functions', 'set_read_porn_act');
  if (((s as any).pcs_horny ?? 0) >= 50) {
    // TODO-QSP: act 'Masturbate': gt 'selfplay', 'start'
  }
  qspCall(s, 'music_actions', 'start');
  scene.text('It\'s a bright and beautiful room, with a large <a href="exec:gt \'bed\', \'start\'">continental bed</a>.');
  scene.text('There\'s a table and a <a href="exec:gt \'mirror\', \'start\'">mirror</a> placed in one of the corners.');
  if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
    scene.text('You have hidden your porn magazine in your nightstand.');
  }
  scene.text('On one side of the room is the entrance to a walk-in <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a>.');
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
  qspCall(s, 'blackmailer', 'open_package_act');
  scene.actions([
    { label: 'Leave the room', goto: ['city_house_res_misc', 'hallw'] },
    { label: 'Relax on your bed', goto: ['bed', 'start'] },
  ]);
  scene.build();
}

export const city_house_res_bedr: LocationDef = {
  name: 'city_house_res_bedr',
  title: 'Bedroom',
  region: 'city',
  locationType: 'private',
  locclass: 'bedr',
  description: ['You have hidden your porn magazine in your nightstand.'],
  enter: enter,
};
