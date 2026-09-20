import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = '';
  (s as any).loc = 'dachamy';
  (s as any).menu_loc = 'dachamy';
  (s as any).menu_arg = '';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Suburban Cooperative</h2></center>');
  scene.text('<center><h4>Cottage</h4></center>');
  scene.img('images/locations/suburban/cottage/dachamy.jpg');
  scene.text('Your favorite summer residence.');
  if (((s as any).sunWeather ?? 0) === 1) {
    if (((s as any).pcs_stam ?? 0) >=15  ||  (((s as any).pcs_stam ?? 0) >= 10  &&  ((s as any).mc_inventory ?? 0)?.['book_yoga'] + ((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0)) {
      if ((!((s as any).PSport ?? 0))) {
        scene.text('You could do some exercises here if you were wearing exercise clothes.');
      } else {
        scene.text('You can do some exercises here.');
        scene.actions([
          { label: 'Exercise', goto: ['exercise', 'workout'] },
        ]);
      }
    }
  }
  if (((s as any).hour ?? 0) < 23  &&  ((s as any).hour ?? 0) >= 7) {
    scene.actions([
      { label: 'Inspect garden', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).exhib ?? 0)?.['status'] < 16) {
      qspGoto(st, 'dachaogr0', '');
    }
    if (((st as any).exhib ?? 0)?.['status'] === 16) {
      qspGoto(st, 'dachaogr', '');
    }
  } },
    ]);
  }
  if (((s as any).pcs_horny ?? 0) >= 90) {
    scene.actions([
      { label: 'Masturbate in the garden', goto: ['ugol1', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Exit the alley', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspGoto(st, 'dachi', '');
  } },
    { label: 'Go into the house', goto: ['dachain', 'start'] },
  ]);
  scene.build();
}

export const dachamy: LocationDef = {
  name: 'dachamy',
  title: '<center><h2>Suburban Cooperative</h2></center>',
  region: 'other',
  locationType: 'public_outdoors',
  description: ['Your favorite summer residence.'],
  enter: enter,
};
