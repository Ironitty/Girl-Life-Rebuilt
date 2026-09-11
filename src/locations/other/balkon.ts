import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Apartment Balcony</b></center>');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.img('images/locations/city/residential/apartment/balcony_naked1.jpg');
  } else {
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/locations/city/residential/apartment/balcony_dressed1.jpg');
    } else {
      scene.img('images/locations/city/residential/apartment/balcony_underwear1.jpg');
    }
  }
  scene.text('You feel a light breeze as you step out on the balcony, making you feel a little chilly.');
  if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 6) {
    scene.text('It\'s dark outside. The street lamps brighten the empty streets below.');
  } else {
    if (((s as any).hour ?? 0) === 7) {
      scene.text('A new day is dawning outside and the birds are happily chirping.');
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 19) {
        scene.text('It\'s quite nice outside today and the streets are busy.');
      } else {
        if (((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) <= 23) {
          scene.text('It\'s twilight and the street lights are dimly lit. There\'s far less movement on the streets.');
        }
      }
    }
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    if (((s as any).sosedBalDay ?? 0) !== ((s as any).daystart ?? 0)) {
      if ((Math.floor(Math.random() * 4) + 1) === 4) {
        scene.text('A neighbor from the opposite building is out on his balcony and looking your way. He\'s noticed that you\'re naked…');
        scene.actions([
          { label: 'Look at the neighbor', goto: ['balkon2', 'sosed'] },
        ]);
      } else {
        scene.text('A neighbor from the opposite building is out on his balcony and looking your way. You feel a little creeped out that he\'s following you closely with his gaze.');
      }
    } else {
      scene.text('No one notices that you\'re standing naked on your balcony. You feel a little dejected that no one paid you any attention.');
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['cigarettes'] >= 1) {
    // TODO-QSP: act 'Light a cigarette': gt 'balkon2', 'kurit'
  }
  if (((s as any).mc_inventory ?? 0)?.['joints'] > 0  &&  ((s as any).drugVars ?? 0)?.['weed_high'] === 0) {
    scene.actions([
      { label: 'Smoke a joint', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'joint');
  }, goto: ['balkon', 'start'] },
    ]);
  }
  if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).pcs_inhib ?? 0) > 30) {
    // TODO-QSP: act 'Masturbate': gt 'balkon2', 'masopt'
  }
  scene.actions([
    { label: 'Return to the living room', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'sitr') {
      scene.actions([{ label: 'Continue', goto: ['sitr', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sitr2x', ''] }]);
    }
  } },
    { label: 'Approach the railing', goto: ['balkon2', 'niz'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const balkon: LocationDef = {
  name: 'balkon',
  title: 'Apartment Balcony',
  region: 'other',
  enter: enter,
};
