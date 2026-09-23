import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFrontDoor(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'Zvereva_house';
  (s as any).loc_arg = 'front_door';
  (s as any).menu_loc = 'Zvereva_house';
  (s as any).menu_arg = 'front_door';
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
  // TODO-QSP: end
  scene.build();
}

function enterHallw(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'Zvereva_house';
  (s as any).loc_arg = 'hallw';
  (s as any).menu_loc = 'Zvereva_house';
  (s as any).menu_arg = 'hallw';
  (s as any).locM = 'Zvereva_house';
  (s as any).locM_arg = 'hallw';
  (s as any).location_type = 'private';
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
  scene.text('There\'s a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> hanging on the wall.');
  if (((s as any).locat ?? 0)?.['Christina'] === 1  ||  ((s as any).locat ?? 0)?.['Christina'] === 2  ||  ((s as any).locat ?? 0)?.['Christina'] === 8  ||  ((s as any).locat ?? 0)?.['Christina'] === 22) {
    scene.text('Christina is in her bedroom right now.');
  } else {
    if (((s as any).locat ?? 0)?.['Christina'] === 3  ||  ((s as any).locat ?? 0)?.['Christina'] === 11  ||  ((s as any).locat ?? 0)?.['Christina'] === 12) {
      scene.text('Christina is in the kitchen right now.');
    } else {
      if (((s as any).locat ?? 0)?.['Christina'] === 14  ||  ((s as any).locat ?? 0)?.['Christina'] === 17) {
        scene.text('Christina is in the living room right now.');
      } else {
        if (((s as any).locat ?? 0)?.['Christina'] === 13) {
          scene.text('Christina is in the bathroom right now.');
        } else {
          scene.text('Christina isn\'t home right now.');
        }
      }
    }
  }
  if (((s as any).slyQW ?? 0)?.['met'] === 2) {
    scene.actions([
      { label: 'Silvestr\'s bedroom', goto: ['Zvereva_house', 'sly_bedro'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspGoto(st, 'pav_residential', '');
    } else {
      qspGoto(st, 'Zvereva_house', 'hallw');
    }
  } },
    { label: 'Living Room', goto: ['Zvereva_house', 'livroom'] },
    { label: 'Kitchen', goto: ['Zvereva_house', 'kitch'] },
    { label: 'Bathroom', goto: ['Zvereva_house', 'bathr'] },
    { label: 'Christina\'s Bedroom', goto: ['Zvereva_house', 'chris_bedro'] },
  ]);
  scene.build();
}

function enterLivroom(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'Zvereva_house';
  (s as any).loc_arg = 'livroom';
  (s as any).menu_loc = 'Zvereva_house';
  (s as any).menu_arg = 'livroom';
  (s as any).location_type = 'private';
  (s as any).locclass = 'livingr';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'Zvereva_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/christina_home/living_room.jpg');
  scene.text('A spacious room with two large couches and an expensive looking tv hanging on the wall above a fireplace.');
  if (((s as any).locat ?? 0)?.['Christina'] !== 14  &&  ((s as any).locat ?? 0)?.['Christina'] !== 17  &&  ((s as any).slyQW ?? 0)?.['met'] === 1) {
    qspGoto(s, 'Zvereva_Sly_events', 'Sly_house_intro_1');
  }
  if (((s as any).locat ?? 0)?.['Christina'] === 14) {
    scene.text('Christina is watching TV right now.');
  }
  if (((s as any).locat ?? 0)?.['Christina'] === 17) {
    scene.text('Christina is hanging out here, looking bored.');
  }
  if (((s as any).locat ?? 0)?.['Silvestr'] === 5) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027Zvereva_Sly_events/u0027, /u0027sly_house_chat/u0027); return false;">Silvestr</a> is here, watching TV.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['Zvereva_house', 'hallw'] },
  ]);
  scene.build();
}

function enterKitch(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'Zvereva_house';
  (s as any).loc_arg = 'kitch';
  (s as any).menu_loc = 'Zvereva_house';
  (s as any).menu_arg = 'kitch';
  (s as any).locclass = 'kitr';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'Zvereva_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/christina_home/kitchen.jpg');
  scene.text('A very modern looking kitchen with a large fridge and stove.');
  if (((s as any).locat ?? 0)?.['Christina'] === 3) {
    scene.text('Christina is here, eating breakfast.');
  }
  if (((s as any).locat ?? 0)?.['Silvestr'] === 2) {
    scene.text('Silvestr is eating breakfast');
  }
  if (((s as any).locat ?? 0)?.['Christina'] === 11) {
    scene.text('Christina is making dinner.');
  }
  if (((s as any).locat ?? 0)?.['Christina'] === 12  &&  ((s as any).locat ?? 0)?.['Silvestr'] === 6) {
    scene.text('Christina and Silvestr are here eating dinner.');
  } else {
    if (((s as any).locat ?? 0)?.['Christina'] === 12) {
      scene.text('Christina is eating dinner right now.');
    } else {
      if (((s as any).locat ?? 0)?.['Silvestr'] === 6) {
        scene.text('Silvestr is eating dinner right now.');
      }
    }
  }
  qspCall(s, 'core_library', 'kitchen', 'shared');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['Zvereva_house', 'hallw'] },
  ]);
  scene.build();
}

function enterBathr(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'Zvereva_house';
  (s as any).loc_arg = 'bathr';
  (s as any).locM = 'Zvereva_house';
  (s as any).locM_arg = 'bathr';
  (s as any).menu_loc = 'Zvereva_house';
  (s as any).menu_arg = 'bathr';
  (s as any).location_type = 'bathroom';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'Zvereva_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/christina_home/bathroom.jpg');
  // TODO-QSP: dynamic text: 'The stylish room has a large glass shower, toilet, sink, and a <a href="exec:gt...
  scene.text('The stylish room has a large glass shower, toilet, sink, and a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> where you can ' + ((((s as any).pcs_hairbsh ?? 0) < 1) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027brush/u0027); return false;">brush</a>') : ('brush')) + ' your hair.');
  if (((s as any).locat ?? 0)?.['Christina'] === 13) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027Zvereva_house_events/u0027, /u0027chris_shower/u0027); return false;">Christina</a> is here, taking a shower.');
  }
  if (((s as any).locat ?? 0)?.['Silvestr'] === 3) {
    scene.text('Silvestr is in the shower right now.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['Zvereva_house', 'hallw'] },
  ]);
  scene.build();
}

function enterChrisBedro(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'Zvereva_house';
  (s as any).loc_arg = 'chris_bedro';
  (s as any).menu_loc = 'Zvereva_house';
  (s as any).menu_arg = 'chris_bedro';
  (s as any).locM = 'Zvereva_house';
  (s as any).locM_arg = 'chris_bedro';
  (s as any).location_type = 'private';
  (s as any).locclass = 'bedr';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'Zvereva_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Christina\'s Bedroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/christina_home/chris_bedroom.jpg');
  scene.text('Surprisingly girly for someone of Christina\'s tastes, there is a large bed, walk-in closet, a desk, and a large <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> leaning against the wall.');
  if (((s as any).locat ?? 0)?.['Christina'] === 1) {
    scene.text('Christina is in bed, asleep.');
  }
  if (((s as any).locat ?? 0)?.['Christina'] === 2) {
    scene.text('Christina is getting dressed right now.');
  }
  if (((s as any).locat ?? 0)?.['Christina'] === 8) {
    scene.text('Christina is here, doing her homework.');
  }
  if (((s as any).locat ?? 0)?.['Christina'] === 22) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027Zvereva_house_events/u0027, /u0027bed_chat/u0027); return false;">Christina</a> is hanging out here, looking bored.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['Zvereva_house', 'hallw'] },
  ]);
  scene.build();
}

function enterSlyBedro(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'Zvereva_house';
  (s as any).loc_arg = 'sly_bedro';
  (s as any).menu_loc = 'Zvereva_house';
  (s as any).menu_arg = 'sly_bedro';
  (s as any).locM = 'Zvereva_house';
  (s as any).locM_arg = 'sly_bedro';
  (s as any).location_type = 'private';
  (s as any).locclass = 'bedr';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'Zvereva_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Silvestr\'s Bedroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/christina_home/sly_bedroom.jpg');
  scene.text('Sly\'s rather stylish room holds a huge bed, a small couch, and a lot of different artsy looking items.');
  if (((s as any).locat ?? 0)?.['Silvestr'] === 1) {
    scene.text('Silvestr is asleep in his bed.');
  }
  if (((s as any).locat ?? 0)?.['Silvestr'] === 7) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027Zvereva_Sly_events/u0027, /u0027sly_house_chat/u0027); return false;">Silvestr</a> is hanging out in here.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['Zvereva_house', 'hallw'] },
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
    case 'livroom':
      enterLivroom(s, scene);
      break;
    case 'kitch':
      enterKitch(s, scene);
      break;
    case 'bathr':
      enterBathr(s, scene);
      break;
    case 'chris_bedro':
      enterChrisBedro(s, scene);
      break;
    case 'sly_bedro':
      enterSlyBedro(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Zvereva_house: LocationDef = {
  name: 'Zvereva_house',
  title: 'Foyer',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  enter: enter,
};
