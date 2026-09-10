import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_mansion_residence_1', 'yfoyer');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Foyer</b></center>');
  if (((s as any).ymanrem ?? 0)[3] === 3) {
    scene.img('images/locations/city/suburb/mansion/y_foyer.jpg');
  } else {
    scene.img('images/locations/city/suburb/mansion/i_finished.jpg');
    scene.img('images/locations/city/suburb/mansion/i_unfinished.jpg');
  }
  qspCall(s, 'courtletter', '');
  if (((s as any).ymanrem ?? 0)[3] >= 1) {
    scene.text('The main hall of Matryona Mansion. You can visit the different rooms in the mansion from here.');
    scene.text('There\'s a <a href="exec:gt \'mirror\', \'start\'">mirror</a> hanging on the wall.');
    if (((s as any).mc_inventory ?? 0)?.['umbrella'] > 0) {
      scene.text('There\'s an umbrella hanging on a hook by the door.');
    }
    scene.actions([
      { label: 'Go to your bedroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'ybedroom'] },
      { label: 'Go to your bathroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'ybathroom'] },
      { label: 'Go to your kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'ykitchen'] },
      { label: 'Go to your living room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_2', 'yliving'] },
      { label: 'Go to your lounge', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_2', 'ylounge'] },
      { label: 'Go to your library', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_2', 'ylibrary'] },
      { label: 'Go to your office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_2', 'yoffice'] },
      { label: 'Go to your nursery', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_2', 'ynursery'] },
      { label: 'Go to your gym', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_3', 'ygym'] },
    ]);
  }
  if (((s as any).bassMansion ?? 0) === 1) {
    // TODO-QSP: act 'Go to your pool': minut += 1
    scene.actions([{ label: 'Continue', goto: ['city_mansion_residence_3', 'ypool'] }]);
  }
  if (((s as any).banaMansion ?? 0) >= 1) {
    // TODO-QSP: act 'Go to your sauna': minut += 1
    scene.actions([{ label: 'Continue', goto: ['city_mansion_residence_3', 'ysauna'] }]);
  }
  if (qspFunc(s, 'homes_properties', 'is_current_home') === 0) {
    scene.actions([
      { label: 'Set this apartment as your main home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'set_home');
  }, goto: ['city_mansion_residence_1', 'yfoyer'] },
    ]);
  } else {
    if (((s as any).status ?? 0)?.['dog'] !== 'blocked'  &&  ((s as any).menu_off ?? 0) === 0  &&  ((s as any).rex ?? 0)?.['owned'] === 1) {
      if (((s as any).rex ?? 0)?.['status'] === 0) {
        scene.actions([{ label: 'Continue', goto: ['pet_dog', 'name'] }]);
      } else {
        // TODO-QSP: dynamic text: <br>Your dog <a href="exec: gt 'pet_dog', 'start'"><<$rex['name']>></a> is lying...
        scene.text(`<br>Your dog <a href="exec: gt 'pet_dog', 'start'">${((s as any).rex ?? 0)?.['name']}</a> is lying on the floor.<br>`);
        if (((s as any).hour ?? 0) < 6) {
          // TODO-QSP: dynamic text: <br><<$rex['name']>> is sleeping in his dog basket.<br>
          scene.text(`<br>${((s as any).rex ?? 0)?.['name']} is sleeping in his dog basket.<br>`);
        }
      }
    }
  }
  scene.actions([
    { label: 'Walk outside', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_mansion_entrance', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_mansion_residence_1', 'yfoyer'] }]);
    }
  } },
  ]);
  scene.build();
}

export const city_mansion_residence_1: LocationDef = {
  name: 'city_mansion_residence_1',
  title: 'Foyer',
  region: 'city',
  locationType: 'private',
  locclass: 'kitr',
  description: ['The main hall of Matryona Mansion. You can visit the different rooms in the mansion from here.'],
  enter: enter,
};
