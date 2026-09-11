import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterNikoBedroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/volkovHome/Rooms/Niko/bedroom.jpg');
  scene.text('Niko\'s room is very messy with two lamps, a bed, and various electronics scattered around.');
  scene.actions([
    { label: 'Leave bedroom', goto: ['VolkovHome', 'Hallway 2'] },
  ]);
  scene.build();
}

function enterHallway2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/volkovHome/Rooms/Hallway2.jpg');
  if (((s as any).NikoEv ?? 0) === 18) {
    scene.text('This is the second floor hallway where the bathroom, Niko\'s room and Yurik\'s room are located.');
  } else {
    scene.text('This is the second floor hallway where the <a href="exec:gt \'VolkovHome\', \'Bathroom\'">bathroom</a>, <a href="exec:gt \'VolkovHome\', \'Niko Bedroom\'">Niko\'s room</a> and <a href="exec:gt \'VolkovHome\', \'Yurik Bedroom\'">Yurik\'s room</a> are located.');
  }
  scene.actions([
    { label: 'Head downstairs', goto: ['NikoEv2', 'Yurik BJ'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/volkovHome/Rooms/bathroom.jpg');
  scene.text('This bathroom seems rather clean and has two towels, two bathrobes, a sink, a toilet, a <a href="exec:gt \'mirror\', \'start\'">mirror</a>, and a bathtub.');
  scene.actions([
    { label: 'Quick wash (0:10)', goto: ['NikoDates', 'Quick Wash'] },
    { label: 'Leave bathroom', handler: (st: GameState) => {
    if (((s as any).NikoEv ?? 0) === 5) {
      scene.actions([{ label: 'Continue', goto: ['NikoDates', 'Yurik Intro'] }]);
    } else {
      if (((s as any).NikoEv ?? 0) === 11) {
        scene.actions([{ label: 'Continue', goto: ['NikoEv2', 'Reward'] }]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterQuickWash(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  if (((s as any).pcs_sweat ?? 0) < 30) {
    (s as any).pcs_sweat = 15 + (Math.floor(Math.random() * 5) + 0);
  } else {
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (10 + (Math.floor(Math.random() * 5) + 0));
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/facecleanse.jpg');
  scene.text('You grab a few paper towels then approach the sink to clean yourself as thoroughly as possible. You take a few seconds to enjoy a splash of warm water on your face, leaving you feeling refreshed as you finish up and walk away from the sink.');
  scene.actions([
    { label: 'Dry off', handler: (st: GameState) => {
    if (((s as any).NikoEv ?? 0) === 5) {
      scene.actions([{ label: 'Continue', goto: ['NikoDates', 'Yurik Intro'] }]);
    } else {
      if (((s as any).NikoEv ?? 0) === 11) {
        scene.actions([{ label: 'Continue', goto: ['NikoEv2', 'Reward'] }]);
      }
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Niko Bedroom':
      enterNikoBedroom(s, scene);
      break;
    case 'Hallway 2':
      enterHallway2(s, scene);
      break;
    case 'Bathroom':
      enterBathroom(s, scene);
      break;
    case 'Quick Wash':
      enterQuickWash(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const VolkovHome: LocationDef = {
  name: 'VolkovHome',
  title: 'Bathroom',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'bedr',
  enter: enter,
};
