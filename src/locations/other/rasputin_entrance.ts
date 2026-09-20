import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  (s as any).menu_loc = 'rasputin_entrance';
  (s as any).menu_arg = '';
  (s as any).loc_arg = '';
  (s as any).loc = 'rasputin_entrance';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 2  &&  ((s as any).hour ?? 0) < 15) {
    scene.img('images/locations/pushkin/rasputin/building_day.jpg');
    scene.text('The front door is closed, you may use the employee\'s entrance if you work here.');
    scene.actions([
      { label: 'Return to the square', handler: (st: GameState) => {
    if (((st as any).rasputin ?? 0)?.['burlesque_ticket'] === 2  ||  ((st as any).rasputin ?? 0)?.['variety_ticket'] === 2) {
      scene.text('You will not be able to return for the second half of the show. Are you sure you want to leave?');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    if (((st as any).rasputin ?? 0)?.['burlesque_ticket'] === 2) {
      ((st as any).rasputin = (st as any).rasputin ?? {})['burlesque_ticket'] = 0;
    }
    if (((st as any).rasputin ?? 0)?.['variety_ticket'] === 2) {
      ((st as any).rasputin = (st as any).rasputin ?? {})['variety_ticket'] = 0;
    }
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'pushkin_sq', '');
  } },
        { label: 'No', goto: ['rasputin_entrance', ''] },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspGoto(st, 'pushkin_sq', '');
    }
  } },
      { label: 'Go to emplyee\'s entrance', handler: (st: GameState) => {
    if (((st as any).rasputin ?? 0)?.['work'] === 1) {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspGoto(st, 'rasputin_room_staff', '');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspGoto(st, 'rasputin_entrance', '');
    }
  } },
    ]);
  } else {
    scene.img('images/locations/pushkin/rasputin/building_night.jpg');
    scene.text('The club is open for business.');
    if (((s as any).rasputin ?? 0)?.['work'] === 1) {
      scene.actions([
        { label: 'Go to the staff lounge', handler: (st: GameState) => {
    if (((st as any).rasputin ?? 0)?.['work'] === 1) {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspGoto(st, 'rasputin_room_staff', '');
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Return to the square', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'pushkin_sq', '');
  } },
      { label: 'Visit the hostess', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'rasputin_host', 'start');
  } },
      { label: 'Go inside the club', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'rasputin_walkway', '');
  } },
    ]);
  }
  scene.build();
}

export const rasputin_entrance: LocationDef = {
  name: 'rasputin_entrance',
  title: 'The front door is closed, you may use the employee\'s entranc',
  region: 'other',
  locationType: 'public_outdoors',
  description: ['The front door is closed, you may use the employee\'s entrance if you work here.'],
  enter: enter,
};
