import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'city_hermitage', 'start');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/hermitage/gp1.jpg');
  scene.text('You see in the distance The State Hermitage Museum. It\'s the second largest art museum in the world and was founded in 1764 by Empress Catherine the Great and has been open to the public since 1852.');
  scene.text('The collections occupy a large complex of six historic buildings along Palace Embankment, including the Winter Palace, a former residence of Russian emperors.');
  scene.text('Of the six buildings in the main museum complex, five, being the Winter Palace, Small Hermitage, Old Hermitage, New Hermitage, and Hermitage Theatre are all open to the public.');
  scene.text('You approach the visitors entrance which is located in the Winter Palace.');
  scene.build();
}

function enterReturn(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'city_hermitage', 'return');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/hermitage/gp1.jpg');
  scene.text('You return to the visitors entrance which is located in the Winter Palace.');
  scene.text('The State Hermitage Museum is the second largest art museum in the world and was founded in 1764 by Empress Catherine the Great and has been open to the public since 1852.');
  scene.text('The collections occupy a large complex of six historic buildings along Palace Embankment, including the Winter Palace, a former residence of Russian emperors.');
  scene.text('Of the six buildings in the main museum complex, five, being the Winter Palace, Small Hermitage, Old Hermitage, New Hermitage, and Hermitage Theatre are open to the public.');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'return':
      enterReturn(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const city_hermitage: LocationDef = {
  name: 'city_hermitage',
  title: 'You see in the distance The State Hermitage Museum. It\'s the',
  region: 'city',
  description: ['You see in the distance The State Hermitage Museum. It\'s the second largest art museum in the world and was founded in 1764 by Empress Catherine the Great and has been open to the public since 1852.'],
  enter: enter,
};
