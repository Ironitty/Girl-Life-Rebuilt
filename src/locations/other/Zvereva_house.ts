import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFrontDoor(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'Zvereva_schedule', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/christina_home/front_door.jpg');
  scene.text('The Zvereva family house is quite impressive.');
  if (((s as any).locat ?? 0)?.['Chris_athome'] === 1) {
    scene.text('Christina answers the door smiling, but as soon as she sees you, she frowns. "I don\'t remember inviting you over today."');
    scene.text('You bow your head, but say nothing.');
    scene.text('"Fine. Come inside."');
    scene.actions([
      { label: 'Go inside', goto: ['Zvereva_house', 'hallw'] },
    ]);
  } else {
    scene.text('Nobody answers the door.');
    scene.actions([
      { label: 'Go back to town', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_residential', ''] },
    ]);
  }
  scene.build();
}

function enterHallw(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'Zvereva_schedule', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  scene.text('<center><b>Foyer</b></center>');
  scene.img('images/locations/pavlovsk/resident/christina_home/foyer.jpg');
  scene.text('The main hallway of Christina\'s house. You can visit the different rooms from here.');
  scene.text('There\'s a <a href="exec:gt \'mirror\', \'start\'">mirror</a> hanging on the wall.');
  if (((s as any).locat ?? 0)?.['Christina'] === 1  ||  ((s as any).locat ?? 0)?.['Christina'] === 2  ||  ((s as any).locat ?? 0)?.['Christina'] === 8  ||  ((s as any).locat ?? 0)?.['Christina'] === 22) {
    scene.text('Christina is in her bedroom right now.');
  } else {
    scene.text('Christina is in the kitchen right now.');
    if (((s as any).locat ?? 0)?.['Christina'] === 14  ||  ((s as any).locat ?? 0)?.['Christina'] === 17) {
      scene.text('Christina is in the living room right now.');
    } else {
      scene.text('Christina is in the bathroom right now.');
      scene.text('Christina isn\'t home right now.');
    }
    if (((s as any).slyQW ?? 0)?.['met'] === 2) {
      // TODO-QSP: act 'Silvestr''s bedroom': gt 'Zvereva_house', 'sly_bedro'
    }
    scene.actions([
      { label: 'Living Room', goto: ['Zvereva_house', 'livroom'] },
      { label: 'Kitchen', goto: ['Zvereva_house', 'kitch'] },
      { label: 'Bathroom', goto: ['Zvereva_house', 'bathr'] },
      { label: 'Christina\'s Bedroom', goto: ['Zvereva_house', 'chris_bedro'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['Zvereva_house', 'hallw'] }]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'front_door':
      enterFrontDoor(s, scene);
      break;
    case 'hallw':
      enterHallw(s, scene);
      break;
    default:
      enterFrontDoor(s, scene);
      break;
  }
}

export const Zvereva_house: LocationDef = {
  name: 'Zvereva_house',
  title: 'Foyer',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  description: ['The Zvereva family house is quite impressive.'],
  enter: enter,
};
