import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = ((s as any).locArgs?.[0] ?? 0);
  (s as any).loc = 'laketoilet';
  (s as any).location_type = 'bathroom';
  (s as any).locM = 'laketoilet';
  (s as any).locM_arg = 'main';
  (s as any).menu_loc = 'laketoilet';
  (s as any).menu_arg = 'main';
  (s as any).LCtoiletiventrand = (Math.floor(Math.random() * 100) + 1);
  if ((((s as any).hour ?? 0) >= 22  ||  ((s as any).hour ?? 0) <= 4)  &&  ((s as any).LCtoiletiventrand ?? 0) >= 75) {
    scene.img('images/locations/city/industrial/bbq/sex/toiletsexstart.jpg');
    scene.text('When you enter the restroom, you see a naked man slowly jerking himself off. He hasn\'t noticed you yet.');
    scene.actions([
      { label: 'Seduce him', handler: (st: GameState) => {
    qspGoto(st, 'LCwork', 'toiletsex');
  } },
      { label: 'Leave the restroom', goto: ['lakecafe', 'main'] },
    ]);
  } else {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/bathroom/toilet.jpg');
    scene.text('The diner has a single unisex restroom. From the dirt and smell, you don\'t think this toilet has ever been cleaned before. Ugh.');
    if (((s as any).pcs_hairbsh ?? 0) < 1) {
      scene.actions([
        { label: 'Brush your hair', goto: ['mirror', 'brush'] },
      ]);
    }
    qspCall(s, 'din_van', 'tampon');
    qspCall(s, 'din_van', 'quickwash');
    qspCall(s, 'din_van', 'basin');
    qspCall(s, 'din_van', 'publicpan');
    scene.actions([
      { label: 'Leave the restroom', goto: ['lakecafe', 'main'] },
      { label: 'Look in the mirror', goto: ['mirror', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'main':
      enterMain(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const laketoilet: LocationDef = {
  name: 'laketoilet',
  title: 'When you enter the restroom, you see a naked man slowly jerk',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
