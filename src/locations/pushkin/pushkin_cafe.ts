import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_cafe', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Liamel Cafe</b></center>');
  scene.img('images/locations/pushkin/cafe/larek.jpg');
  scene.text('What little floor space the quaint cafe has, is packed with many small tables and chairs.');
  if (((s as any).hour ?? 0) > 11  &&  ((s as any).hour ?? 0) < 13) {
    scene.text('The cafe is packed with people eating their afternoon meal.');
    if (((s as any).stallionQ ?? 0) === 1) {
      (s as any).stallionQ = 2;
    }
  } else {
    if (((s as any).hour ?? 0) > 16  &&  ((s as any).hour ?? 0) < 18) {
      scene.text('The cafe is packed with people eating their evening meal.');
      if (((s as any).stallionQ ?? 0) === 1) {
        (s as any).stallionQ = 2;
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the cafe', goto: ['pushkin_sq', ''] },
    { label: 'Sit down at a table', goto: ['pushkin_cafe', 'food'] },
  ]);
  scene.build();
}

function enterFood(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_cafe', 'food');
  scene.text('<center><b>Liamel Cafe</b></center>');
  scene.img('images/locations/pushkin/cafe/larek.jpg');
  if (((s as any).stallionQ ?? 0) === 2) {
    if (((s as any).focH ?? 0) > (((s as any).focH_max ?? 0) - 10)) {
      (s as any).stallionQ = 3;
      (s as any).focH = ((s as any).focH_max ?? 0);
      (s as any).EggRH = ((s as any).EggRH ?? 0) + (300);
    } else {
      if (((s as any).ovulate ?? 0) > 12) {
        (s as any).stallionQ = 3;
      }
    }
  }
  scene.text('The tiny cafe is wonderfully situated and you enjoy the beautiful scenery as you eat.');
  if ((!((s as any).stallionQ ?? 0))) {
    (s as any).stallionQ = 1;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the table', goto: ['pushkin_cafe', 'start'] },
    { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: gs 'food_menu'
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'food':
      enterFood(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pushkin_cafe: LocationDef = {
  name: 'pushkin_cafe',
  title: 'Liamel Cafe',
  region: 'pushkin',
  locationType: 'public_indoors',
  enter: enter,
};
