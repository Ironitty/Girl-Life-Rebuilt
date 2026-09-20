import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterYgym(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_mansion_residence_3', 'ygym');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Gym</b></center>');
  if (((s as any).ymanrem ?? 0)[11] === 2) {
    scene.img('images/locations/city/suburb/mansion/y_gym.jpg');
  } else {
    if (((s as any).ymanrem ?? 0)[11] === 1) {
      scene.img('images/locations/city/suburb/mansion/i_finished.jpg');
    } else {
      scene.img('images/locations/city/suburb/mansion/i_unfinished.jpg');
    }
  }
  if (((s as any).bassMansion ?? 0) === 1) {
    qspGoto(s, 'city_mansion_residence_3', 'ypool');
    scene.actions([
      { label: 'Go to your pool area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  } },
    ]);
  }
  if (((s as any).banaMansion ?? 0) >= 1) {
    qspGoto(s, 'city_mansion_residence_3', 'ysauna');
    scene.actions([
      { label: 'Go to your sauna', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  } },
    ]);
  }
  if (((s as any).ymanrem ?? 0)[11] === 2) {
    scene.text('Your private gym with all the necessities to live a healthy life. From here you can walk over to the pool or relax in the sauna.');
    qspCall(s, 'wardrobe', 'default_clothing_options');
    qspCall(s, 'exercise', 'start');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'yfoyer'] },
  ]);
  scene.build();
}

function enterYpool(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_mansion_residence_3', 'ypool');
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Swimming Pool</b></center>');
  scene.img('images/locations/city/suburb/mansion/y_pool.jpg');
  if (((s as any).pcs_stam ?? 0) >= (20 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
    scene.actions([
      { label: 'Swim (1:00)', handler: (st: GameState) => {
    (st as any).pcs_makeup = 1;
    (st as any).cumspclnt = 10;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'exercise', 'tier1', 60, 'stren', 'vital');
    qspCall(st, 'mood', 'raise', 'large');
    if (((st as any).pcs_sweat ?? 0) > 10) {
      (st as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    }
    qspCall(st, 'stat', '');
    if (qspFunc(s, 'body_din', 'pregnancyVisibility') === 0) {
      if (((st as any).clothingworntype ?? 0) === 'nude') {
        scene.img(`images/pc/activities/swim/pool/swim_nude_${(Math.floor(Math.random() * 10) + 1)}.jpg`);
        (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 2));
      } else {
        scene.img(`images/pc/activities/swim/pool/swim_bikini_${(Math.floor(Math.random() * 8) + 1)}.jpg`);
        if (((st as any).pcs_inhib ?? 0) < 50) {
          (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 2));
        }
      }
    } else {
      if (((st as any).clothingworntype ?? 0) === 'nude') {
        scene.img(`images/pc/activities/swim/pool/swim_nude_preg_${(Math.floor(Math.random() * 2) + 1)}.jpg`);
        (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 2));
      } else {
        scene.img(`images/pc/activities/swim/pool/swim_bikini_preg_${(Math.floor(Math.random() * 4) + 1)}.jpg`);
        if (((st as any).pcs_inhib ?? 0) < 50) {
          (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 2));
        }
      }
    }
    scene.text('You swim in your pool. The water refreshes and invigorates you.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Get out of the water', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_3', 'ypool'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back inside', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'yfoyer'] },
    { label: 'Go into your gym', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_3', 'ygym'] },
    { label: 'Go to your sauna', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_3', 'ysauna'] },
  ]);
  scene.build();
}

function enterYsauna(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_mansion_residence_3', 'ysauna');
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Sauna</b></center>');
  scene.img('images/locations/city/suburb/mansion/y_sauna.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back inside', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'yfoyer'] },
    { label: 'Go into your gym', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_3', 'ygym'] },
    { label: 'Go to your pool', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_3', 'ypool'] },
    { label: 'Use the sauna (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'raise', 'medium');
    if (((st as any).sauna_daystart ?? 0) !== ((st as any).daystart ?? 0)) {
      (st as any).sauna_daystart = ((st as any).daystart ?? 0);
      qspCall(st, 'mood', 'raise', 'small');
      (st as any).fat = ((st as any).fat ?? 0) - (5);
      (st as any).pcs_skin = ((st as any).pcs_skin ?? 0) + ((Math.floor(Math.random() * 5) + 4));
      (st as any).pcs_willpwr = ((st as any).pcs_willpwr ?? 0) + (6);
    }
    qspCall(st, 'stat', '');
    if (((st as any).PSwim ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunabikini.jpg');
      if (((st as any).pcs_inhib ?? 0) < 40) {
        (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
      }
    } else {
      scene.img('images/locations/city/shared/sauna/sau.jpg');
      if (((st as any).pcs_inhib ?? 0) < 60) {
        (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 2));
      }
    }
    scene.text('You spend an hour relaxing in the heat of the sauna. You feel revitalised.');
    scene.actions([
      { label: 'Leave the sauna', goto: ['city_mansion_residence_3', 'ysauna'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'ygym':
      enterYgym(s, scene);
      break;
    case 'ypool':
      enterYpool(s, scene);
      break;
    case 'ysauna':
      enterYsauna(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_mansion_residence_3: LocationDef = {
  name: 'city_mansion_residence_3',
  title: 'Gym',
  region: 'city',
  locationType: 'private',
  enter: enter,
};
