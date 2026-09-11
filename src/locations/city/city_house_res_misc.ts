import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFronty(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_house_res_misc', 'fronty');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >=11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >=1  &&  ((s as any).month ?? 0) <=3) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    }
  }
  scene.text('<center><b>Your city residential house</b></center>');
  scene.img('images/locations/city/residential/house/crh_fronty.jpg');
  scene.text('Your small two story house sits on the edge of the residential area. Despite that, your neighbors are pretty close and the sounds of the street fill the air.');
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: <a href="exec:gs 'carF', 'start'">Your <<$car['name']>></a> is in the driveway.
    scene.text(`<a href="exec:gs 'carF', 'start'">Your ${((s as any).car ?? 0)?.['name']}</a> is in the driveway.`);
  }
  if (qspFunc(s, 'homes_properties', 'is_current_home', ((s as any).loc ?? 0)) === 0) {
    scene.actions([
      { label: 'Set this house as your main home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'set_home');
  }, goto: ['city_house_res_misc', 'fronty'] },
    ]);
  }
  scene.actions([
    { label: 'Go inside', goto: ['city_house_res_misc', 'hallw'] },
    { label: 'Go to the city', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterHallw(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_house_res_misc', 'hallw');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  scene.text('<center><b>Hallway</b></center>');
  scene.img('images/locations/city/residential/house/crh_hallway.jpg');
  qspCall(s, 'courtletter', '');
  scene.text('The main hallway of your house. You can visit the different rooms from here.');
  scene.text('There\'s a <a href="exec:gt \'mirror\', \'start\'">mirror</a> hanging on the wall.');
  if (((s as any).mc_inventory ?? 0)?.['umbrella'] > 0) {
    scene.text('There\'s an umbrella hanging on a hook by the door.');
  }
  qspCall(s, 'daily_routine', 'offer_here');
  scene.actions([
    { label: 'Go out front', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([{ label: 'Continue', goto: ['city_house_res_misc', 'fronty'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_house_res_misc', 'hallw'] }]);
    }
  } },
    { label: 'Go to your bedroom', goto: ['city_house_res_bedr', 'bedro'] },
    { label: 'Go to your bathroom', goto: ['city_house_res_bathr', 'bathr'] },
    { label: 'Go to your kitchen', goto: ['city_house_res_kitch', 'kitch'] },
    { label: 'Go to your living room', goto: ['city_house_res_misc', 'livroom'] },
    { label: 'Go to your backyard', goto: ['city_house_res_misc', 'backy'] },
  ]);
  scene.build();
}

function enterBacky(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_house_res_misc', 'backy');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living Room</b></center>');
  scene.img('images/locations/city/residential/house/crh_backy.jpg');
  scene.text('Your small backyard is fenced in, with a few plots intended for gardening.');
  if (((s as any).sunWeather ?? 0) === 1) {
    if (((s as any).pcs_stam ?? 0) >=15  ||  (((s as any).pcs_stam ?? 0) >= 10  &&  ((s as any).mc_inventory ?? 0)?.['book_yoga'] + ((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0)) {
      if ((!((s as any).PSport ?? 0))) {
        scene.text('You could do some exercises here if you were wearing exercise clothes.');
      } else {
        scene.text('You can do some exercises here.');
        qspCall(s, 'wardrobe', 'default_clothing_options');
        scene.actions([
          { label: 'Exercise', goto: ['exercise', 'workout'] },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Go inside', goto: ['city_house_res_misc', 'hallw'] },
  ]);
  scene.build();
}

function enterLivroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_house_res_misc', 'livroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Living Room</b></center>');
  scene.img('images/locations/city/residential/house/crh_living.jpg');
  scene.text('A place where you can watch <a href="exec:gt \'TV\',\'start\'">TV</a>, or relax on your <a href="exec:gt \'divan\', \'start\'">sofa</a>.');
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to the sofa.');
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    qspCall(s, 'internet_mobile', 'get_access');
    scene.text('There\'s a <a href="exec:gt \'komp\', \'start\'">computer</a> sitting on your <a href="exec:gt \'stol\', \'start\'">desk</a>.');
  } else {
    scene.text('A small <a href="exec:gt \'stol\', \'start\'">desk</a> is against the wall.');
  }
  scene.text('There is enough space to workout.');
  qspCall(s, 'exercise', 'start');
  qspCall(s, 'subkid', '');
  qspCall(s, 'music_actions', 'start');
  if (((s as any).mc_inventory ?? 0)?.['sewing_kit'] === 1) {
    scene.text('Your <a href="exec:gt \'sewing\',\'start\'">sewing kit</a> is stored next to your favorite chair.');
    if (((s as any).pcs_sewng ?? 0) >= 80) {
      if (((s as any).newgobelen ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] > 0) {
        scene.actions([
          { label: 'Start a new tapestry', goto: ['sewing', 'tapestry'] },
        ]);
      } else {
        if (((s as any).newgobelen ?? 0) >= 1) {
          // TODO-QSP: dynamic text: Your tapestry is <<newgobelen/10>> percent finished.
          scene.text(`Your tapestry is ${((s as any).newgobelen ?? 0)/10} percent finished.`);
          scene.actions([
            { label: 'Work on the tapestry', goto: ['sewing', 'tapestry'] },
          ]);
        }
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['tapestry'] > 0) {
      // TODO-QSP: dynamic text: You have <<mc_inventory['tapestry']>> completed tapestries.
      scene.text(`You have ${((s as any).mc_inventory ?? 0)?.['tapestry']} completed tapestries.`);
    }
  }
  scene.actions([
    { label: 'Leave the room', goto: ['city_house_res_misc', 'hallw'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'fronty':
      enterFronty(s, scene);
      break;
    case 'hallw':
      enterHallw(s, scene);
      break;
    case 'backy':
      enterBacky(s, scene);
      break;
    case 'livroom':
      enterLivroom(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_house_res_misc: LocationDef = {
  name: 'city_house_res_misc',
  title: 'Your city residential house',
  region: 'city',
  locationType: 'private',
  locclass: 'livingr',
  enter: enter,
};
