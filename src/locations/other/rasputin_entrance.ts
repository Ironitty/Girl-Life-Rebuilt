import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 2  &&  ((s as any).hour ?? 0) < 15) {
    scene.img('images/locations/pushkin/rasputin/building_day.jpg');
    scene.text('The front door is closed, you may use the employee\'s entrance if you work here.');
    scene.actions([
      { label: 'Return to the square', handler: (st: GameState) => {
    if (((s as any).rasputin ?? 0)?.['burlesque_ticket'] === 2  ||  ((s as any).rasputin ?? 0)?.['variety_ticket'] === 2) {
      scene.text('You will not be able to return for the second half of the show. Are you sure you want to leave?');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    if (((s as any).rasputin ?? 0)?.['burlesque_ticket'] === 2) {
      if (!(s as any).rasputin) (s as any).rasputin = {}; (s as any).rasputin['burlesque_ticket'] = 0;
    }
    if (((s as any).rasputin ?? 0)?.['variety_ticket'] === 2) {
      if (!(s as any).rasputin) (s as any).rasputin = {}; (s as any).rasputin['variety_ticket'] = 0;
    }
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['pushkin_sq', ''] },
        { label: 'No', goto: ['rasputin_entrance', ''] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([{ label: 'Continue', goto: ['pushkin_sq', ''] }]);
    }
  } },
      { label: 'Go to emplyee\'s entrance', handler: (st: GameState) => {
    if (((s as any).rasputin ?? 0)?.['work'] === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([{ label: 'Continue', goto: ['rasputin_room_staff', ''] }]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([{ label: 'Continue', goto: ['rasputin_entrance', ''] }]);
    }
  } },
    ]);
  } else {
    scene.img('images/locations/pushkin/rasputin/building_night.jpg');
    scene.text('The club is open for business.');
    if (((s as any).rasputin ?? 0)?.['work'] === 1) {
      scene.actions([
        { label: 'Go to the staff lounge', handler: (st: GameState) => {
    if (((s as any).rasputin ?? 0)?.['work'] === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([{ label: 'Continue', goto: ['rasputin_room_staff', ''] }]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Return to the square', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['pushkin_sq', ''] },
      { label: 'Visit the hostess', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['rasputin_host', 'start'] },
      { label: 'Go inside the club', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['rasputin_walkway', ''] },
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
