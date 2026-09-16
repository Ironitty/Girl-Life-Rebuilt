import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'korr2x', '');
  (s as any).location_type = 'private';
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['plasma_tv'] = 1;
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Corridor</b></center>');
  scene.img('images/locations/pushkin/apartment/korr2x.jpg');
  qspCall(s, 'home_events', 'entry');
  if (((s as any).mc_inventory ?? 0)?.['umbrella'] > 0) {
    scene.text('Your umbrella is on a hook.');
  }
  if (((s as any).krolik ?? 0) === 1) {
    // TODO-QSP: dynamic text: Your rabbit <a href="exec:gt 'krol', 'start'"><<$namekrol>></a> sits in it's cag...
    scene.text(`Your rabbit <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027krol\\u0027, \\u0027start\\u0027); return false;">${((s as any).namekrol || '')}</a> sits in it's cage on the floor.`);
  }
  if (((s as any).ParrotQW ?? 0)?.['Owned1'] === 1) {
    // TODO-QSP: dynamic text: Your parrot <a href="exec:gt 'popu', 'start'"><<$ParrotQW['Name1']>></a> sits in...
    scene.text(`Your parrot <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027popu\\u0027, \\u0027start\\u0027); return false;">${((s as any).ParrotQW ?? 0)?.['Name1'] ?? ''}</a> sits in it's cage.`);
  }
  qspCall(s, 'daily_routine', 'offer_here');
  if (qspFunc(s, 'homes_properties', 'is_current_home') === 0) {
    scene.actions([
      { label: 'Set this apartment as your main home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'set_home');
  }, goto: ['korr2x', ''] },
    ]);
  } else {
    if (((s as any).status ?? 0)?.['dog'] !== 'blocked'  &&  ((s as any).menu_off ?? 0) === 0  &&  ((s as any).rex ?? 0)?.['owned'] === 1) {
      if (((s as any).rex ?? 0)?.['status'] === 0) {
        qspGoto(s, 'pet_dog', 'name');
      } else {
        if (((s as any).hour ?? 0) > 5) {
          // TODO-QSP: dynamic text: <br>Your dog <a href="exec: gt 'pet_dog', 'start'"><<$rex['name']>></a> is lying...
          scene.text(`<br>Your dog <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027pet_dog\\u0027, \\u0027start\\u0027); return false;">${((s as any).rex ?? 0)?.['name'] ?? ''}</a> is lying on the floor.<br>`);
        } else {
          if (((s as any).hour ?? 0) < 6) {
            // TODO-QSP: dynamic text: <br><<$rex['name']>> is sleeping in his dog basket.<br>
            scene.text(`<br>${((s as any).rex ?? 0)?.['name'] ?? ''} is sleeping in his dog basket.<br>`);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the bedroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['bedr2x', ''] },
    { label: 'Go to the bathroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['vanr2x', ''] },
    { label: 'Go to the kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['kuhr2x', ''] },
    { label: 'Go to the living room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['sitr2x', ''] },
    { label: '<b><font color="maroon">Go outside</font></b>', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.text('<center><b>You need to get dressed before going out.</b></center>');
    } else {
      if (((s as any).sick ?? 0) > 72) {
        scene.text('<center><b>You\'re too sick to walk around in the streets.</b></center>');
      } else {
        qspGoto(s, 'pushkin_sq', '');
      }
    }
  } },
  ]);
  scene.build();
}

export const korr2x: LocationDef = {
  name: 'korr2x',
  title: 'Corridor',
  region: 'other',
  locationType: 'private',
  description: ['Your umbrella is on a hook.'],
  enter: enter,
};
