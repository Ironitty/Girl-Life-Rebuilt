import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterYliving(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_mansion_residence_2', 'yliving');
  (s as any).location_type = 'private';
  (s as any).locclass = 'livingr';
  qspCall(s, 'stat', '');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Living Room</b></center>');
  if (((s as any).ymanrem ?? 0)[7] === 2) {
    scene.img('images/locations/city/suburb/mansion/y_living.jpg');
  } else {
    if (((s as any).ymanrem ?? 0)[7] === 1) {
      scene.img('images/locations/city/suburb/mansion/i_finished.jpg');
    } else {
      scene.img('images/locations/city/suburb/mansion/i_unfinished.jpg');
    }
  }
  if (((s as any).ymanrem ?? 0)[7] === 2) {
    scene.text('A large room where you can watch <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027TV\u0027, \u0027start\u0027); return false;">TV</a>, or relax on your luxury <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027divan\u0027, \u0027start\u0027); return false;">leather sofa</a>.');
    if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
      scene.text('Your guitar rests on its stand next to the sofa.');
    }
    qspCall(s, 'subkid', '');
    qspCall(s, 'music_actions', 'start');
  }
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'yfoyer'] },
  ]);
  scene.build();
}

function enterYlounge(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_mansion_residence_2', 'ylounge');
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Lounge</b></center>');
  if (((s as any).ymanrem ?? 0)[8] === 2) {
    scene.img('images/locations/city/suburb/mansion/y_lounge.jpg');
  } else {
    if (((s as any).ymanrem ?? 0)[8] === 1) {
      scene.img('images/locations/city/suburb/mansion/i_finished.jpg');
    } else {
      scene.img('images/locations/city/suburb/mansion/i_unfinished.jpg');
    }
  }
  if (((s as any).ymanrem ?? 0)[8] === 2) {
    scene.text('The lounge, where you can work on your tapestries and relax in front of the fireplace.');
    if (((s as any).mc_inventory ?? 0)?.['sewing_kit'] === 1) {
      scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027sewing\u0027, \u0027start\u0027); return false;">sewing kit</a> is stored next to your favorite chair.');
      if (((s as any).mc_inventory ?? 0)?.['sewing_fabric'] <= 0) {
        scene.text('You do not have any fabric.');
      }
      if (((s as any).pcs_sewng ?? 0) >= 80) {
        if (((s as any).newgobelen ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] > 0) {
          scene.actions([
            { label: 'Start a new tapestry', goto: ['sewing', 'tapestry'] },
          ]);
        } else {
          if (((s as any).newgobelen ?? 0) >= 1) {
            scene.text(`Your tapestry is ${((s as any).newgobelen ?? '')/10} percent finished.`);
            scene.actions([
              { label: 'Work on the tapestry', goto: ['sewing', 'tapestry'] },
            ]);
          }
        }
      }
      if (((s as any).mc_inventory ?? 0)?.['tapestry'] > 0) {
        scene.text(`You have ${(((s as any).mc_inventory ?? 0)?.['tapestry'] ?? '')} completed tapestries.`);
      }
    }
  }
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'yfoyer'] },
  ]);
  scene.build();
}

function enterYlibrary(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_mansion_residence_2', 'ylibrary');
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Library</b></center>');
  if (((s as any).ymanrem ?? 0)[10] === 2) {
    scene.img('images/locations/city/suburb/mansion/y_library.jpg');
  } else {
    if (((s as any).ymanrem ?? 0)[10] === 1) {
      scene.img('images/locations/city/suburb/mansion/i_finished.jpg');
    } else {
      scene.img('images/locations/city/suburb/mansion/i_unfinished.jpg');
    }
  }
  if (((s as any).ymanrem ?? 0)[10] === 2) {
    scene.text('A huge collection of books are neatly placed on the bookshelves.');
    qspCall(s, 'library_functions', 'set_library_read_acts');
  }
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'yfoyer'] },
  ]);
  scene.build();
}

function enterYoffice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_mansion_residence_2', 'yoffice');
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Office</b></center>');
  if (((s as any).ymanrem ?? 0)[12] === 2) {
    scene.img('images/locations/city/suburb/mansion/y_office.jpg');
  } else {
    if (((s as any).ymanrem ?? 0)[12] === 1) {
      scene.img('images/locations/city/suburb/mansion/i_finished.jpg');
    } else {
      scene.img('images/locations/city/suburb/mansion/i_unfinished.jpg');
    }
  }
  if (((s as any).ymanrem ?? 0)[12] === 2) {
    scene.text('Your work room where you spend most of the time signing important papers and handling your business needs.');
    qspCall(s, 'internet_mobile', 'get_access');
    scene.text('There\'s a <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027komp\u0027, \u0027start\u0027); return false;">computer</a> sitting on your antique <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027stol\u0027, \u0027start\u0027); return false;">desk</a>.');
    qspCall(s, 'music_actions', 'start');
  }
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'yfoyer'] },
  ]);
  scene.build();
}

function enterYnursery(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_mansion_residence_2', 'ynursery');
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Nursery</b></center>');
  if (((s as any).ymanrem ?? 0)[9] === 2) {
    scene.img('images/locations/city/suburb/mansion/y_nursery.jpg');
    scene.text('<center>The neatly designed nursery room, only the best for your children.</center>');
  } else {
    if (((s as any).ymanrem ?? 0)[9] === 1) {
      scene.img('images/locations/city/suburb/mansion/i_finished.jpg');
    } else {
      scene.img('images/locations/city/suburb/mansion/i_unfinished.jpg');
    }
  }
  if (((s as any).ymanrem ?? 0)[9] === 2) {
    qspCall(s, 'subkid', '');
  }
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'yfoyer'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'yliving':
      enterYliving(s, scene);
      break;
    case 'ylounge':
      enterYlounge(s, scene);
      break;
    case 'ylibrary':
      enterYlibrary(s, scene);
      break;
    case 'yoffice':
      enterYoffice(s, scene);
      break;
    case 'ynursery':
      enterYnursery(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_mansion_residence_2: LocationDef = {
  name: 'city_mansion_residence_2',
  title: 'Living Room',
  region: 'city',
  locationType: 'private',
  locclass: 'livingr',
  enter: enter,
};
