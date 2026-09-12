import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTownHostel(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', ((s as any).curloc ?? 0), ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Town Hostel</b></center>');
  scene.img('images/locations/pavlovsk/hostel/dom_gor.jpg');
  scene.text('Your room in the hostel. It\'s in poor condition, but still better than nothing. In the courtyard, there is a clothesline and a shed for storing junk. Strangely, even though there seem to be no tenants around, the hostel is crammed to capacity.');
  if (((s as any).hostel ?? 0)?.['status'] > 0) {
    scene.actions([
      { label: 'Go to your room', goto: ['dom_gor', ''] },
    ]);
  }
  if (((s as any).hostel ?? 0)?.['status'] === 0) {
    scene.actions([
      { label: 'See the superintendent', goto: ['comendant', 'pos1'] },
    ]);
  }
  if (((s as any).hostel ?? 0)?.['status'] === 2) {
    scene.actions([
      { label: 'Search for the superintendent', goto: ['comendant', 'pos3'] },
    ]);
  }
  if (((s as any).hostel ?? 0)?.['status'] >= 3) {
    scene.actions([
      { label: 'Inspect the shed', goto: ['ETO_hostel', 'shed'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_commercial', ''] },
  ]);
  scene.build();
}

function enterSharedBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', ((s as any).curloc ?? 0), ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Shared Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/hostel/comm_vann.jpg');
  scene.text('The bathroom is in a terrible state: dirty walls, a mess on the floor, old plumbing, and virtually no water flow. A strange odor comes from the pipes—if only you were smarter, you might understand what it is.');
  qspCall(s, 'din_van', 'private');
  if (((s as any).pcs_intel ?? 0) > 50  &&  ((s as any).hostel ?? 0)?.['status'] === 1) {
    scene.actions([
      { label: 'Inspect pipes', goto: ['ETO_hostel', 'rusty_pipes'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to your room', goto: ['dom_gor', ''] },
  ]);
  scene.build();
}

function enterRustyPipes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', ((s as any).curloc ?? 0), ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).hostel ?? {})['status'] = 2;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Rusty Pipes</b></center>');
  scene.img('images/locations/pavlovsk/hostel/comm_tru.jpg');
  scene.text('All the pipes are rusted through, which, according to building regulations, is a clear violation. On top of that, the pipes smell of chemicals.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to your room', goto: ['dom_gor', ''] },
  ]);
  scene.build();
}

function enterShed(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', ((s as any).curloc ?? 0), ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  if (((s as any).hostel ?? 0)?.['status'] === 3) {
    ((s as any).hostel ?? {})['status'] = 4;
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Hostel Shed</b></center>');
  scene.img('images/locations/pavlovsk/hostel/gor_saray.jpg');
  scene.text('In addition to an incredible amount of junk, there are chemicals on the floor. On one of the cans, you see a chemical hazard symbol and the inscription "Tetrodotoxin." It\'s better not to touch it.');
  scene.text('Hmm… This is no place for dangerous chemicals. You should try to find out more about this substance.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to your room', goto: ['dom_gor', ''] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', ((s as any).curloc ?? 0), ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'stat', '');
  scene.text('<center><b>Shared Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/hostel/vann_gor.jpg');
  scene.text('Bathroom in the dormitory.');
  qspCall(s, 'din_van', 'private');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to your room', goto: ['dom_gor', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'town_hostel':
      enterTownHostel(s, scene);
      break;
    case 'shared_bathroom':
      enterSharedBathroom(s, scene);
      break;
    case 'rusty_pipes':
      enterRustyPipes(s, scene);
      break;
    case 'shed':
      enterShed(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const ETO_hostel: LocationDef = {
  name: 'ETO_hostel',
  title: 'Town Hostel',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
