import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  qspCall(s, 'core_library', 'setloc', 'korr', '');
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).ml_performance ?? 0)?.['max_perform_minutes'] === 0) {
    if (!(s as any).ml_performance) (s as any).ml_performance = {}; (s as any).ml_performance['max_perform_minutes'] = ((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0);
  }
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.text('<center><b>Corridor</b></center>');
  if ((!((s as any).remkorr ?? 0))) {
    scene.img('images/locations/city/residential/apartment/home/korr.jpg');
    scene.text('The wallpaper in the hallway has long since faded and is peeling from the walls. A <a href="exec:gt \'mirror\', \'start\'">mirror</a> hangs on the wall.');
  } else {
    scene.img('images/locations/city/residential/apartment/home/korr2.jpg');
    scene.text('A modern hall with stylish furniture, including a wall-mounted <a href="exec:gt \'mirror\', \'start\'">mirror</a>.');
  }
  qspCall(s, 'home_events', 'entry');
  if (((s as any).lesbiday ?? 0) + 14 <= ((s as any).daystart ?? 0)  &&  ((s as any).lesbiQW ?? 0) >= 11  &&  ((s as any).hour ?? 0) >= 19  &&  (!((s as any).santehnikDolg ?? 0))) {
    if ((Math.floor(Math.random() * 101) + 0) > 82  &&  ((s as any).husID ?? 0) === ''  &&  ((s as any).wifID ?? 0) === '') {
      scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'mistvisit'] }]);
    } else {
      (s as any).lesbiday = ((s as any).lesbiday ?? 0) + (1);
    }
  }
  qspCall(s, 'daily_routine', 'offer_here');
  if (qspFunc(s, 'homes_properties', 'is_current_home') === 0) {
    scene.actions([
      { label: 'Set this apartment as your main home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'set_home');
  }, goto: ['korr', ''] },
    ]);
  } else {
    if (((s as any).status ?? 0)?.['dog'] !== 'blocked'  &&  ((s as any).menu_off ?? 0) === 0  &&  ((s as any).rex ?? 0)?.['owned'] === 1) {
      if (((s as any).rex ?? 0)?.['status'] === 0) {
        scene.actions([{ label: 'Continue', goto: ['pet_dog', 'name'] }]);
      } else {
        if (((s as any).hour ?? 0) > 5) {
          // TODO-QSP: dynamic text: <br>Your dog <a href="exec: gt 'pet_dog', 'start'"><<$rex['name']>></a> is lying...
          scene.text(`<br>Your dog <a href="exec: gt 'pet_dog', 'start'">${((s as any).rex ?? 0)?.['name'] ?? ''}</a> is lying on the floor.<br>`);
        } else {
          if (((s as any).hour ?? 0) < 6) {
            // TODO-QSP: dynamic text: <br><<$rex['name']>> is sleeping in his dog basket.<br>
            scene.text(`<br>${((s as any).rex ?? 0)?.['name'] ?? ''} is sleeping in his dog basket.<br>`);
          }
        }
      }
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['umbrella'] > 0) {
    scene.text('Your umbrella hangs on a hook.');
  }
  if (((s as any).krolik ?? 0) === 1) {
    // TODO-QSP: dynamic text: Your rabbit <a href="exec:gt 'krol', 'start'"><<$namekrol>></a> sits in it's cag...
    scene.text(`Your rabbit <a href="exec:gt 'krol', 'start'">${((s as any).namekrol || '')}</a> sits in it's cage on the floor.`);
  }
  if (((s as any).ParrotQW ?? 0)?.['Owned1'] === 1) {
    // TODO-QSP: dynamic text: Your parrot <a href="exec:gt 'popu', 'start'"><<$ParrotQW['Name1']>></a> sits in...
    scene.text(`Your parrot <a href="exec:gt 'popu', 'start'">${((s as any).ParrotQW ?? 0)?.['Name1'] ?? ''}</a> sits in it's cage.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: '<b>Go to the stairwell</b>', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.text('<center><b>You need to get dressed before going out.</b></center>');
    } else {
      if (((s as any).sick ?? 0) > 72) {
        scene.text('<center><b>You\'re too sick to leave home.</b></center>');
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + (1);
        scene.actions([{ label: 'Continue', goto: ['city_apt_building', 'floor_5'] }]);
      }
    }
  } },
    { label: '<b>Go to the street</b>', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.text('<center><b>You need to get dressed before going out.</b></center>');
    } else {
      if (((s as any).sick ?? 0) > 72) {
        scene.text('<center><b>You\'re too sick to walk around in the streets.</b></center>');
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 2;
        scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
      }
    }
  } },
    { label: 'Go to the bedroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['bedr', ''] },
    { label: 'Go to the bathroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['vanr', ''] },
    { label: 'Go to the kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['kuhr', ''] },
    { label: 'Go to the living room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['sitr', ''] },
  ]);
  scene.build();
}

export const korr: LocationDef = {
  name: 'korr',
  title: 'Corridor',
  region: 'other',
  locationType: 'private',
  description: ['Your umbrella hangs on a hook.'],
  enter: enter,
};
