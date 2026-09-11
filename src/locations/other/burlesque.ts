import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Burlesque club</b></center>');
  scene.img('images/locations/pushkin/rasputin/building_day.jpg');
  scene.text('A club mostly for gentlemen, it has dancers and shows you can see.');
  scene.text('They also have adverts looking for new dancers so you could try and get some work here if you are skilled enough.');
  scene.actions([
    { label: 'Leave', goto: ['pushkin_sq', ''] },
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

export const burlesque: LocationDef = {
  name: 'burlesque',
  title: 'Burlesque club',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
