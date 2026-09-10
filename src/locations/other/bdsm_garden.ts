import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGarden(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bdsm_garden', 'check_garden_events');
  qspCall(s, 'core_library', 'setloc', 'bdsm_garden', 'garden');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/garden.jpg');
  scene.text('Extensive garden, meticulously designed and maintained. Split into different areas each with its own theme and inspiration.');
  scene.actions([
    { label: 'Go to the conservatory', goto: ['bdsm_conservatory', ''] },
    { label: 'Go to the garage', goto: ['bdsm_garden', 'garage'] },
  ]);
  scene.build();
}

function enterCheckGardenEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_rand ?? 0) < 5) {
    if (((s as any).bdsmclub ?? 0)?.['role'] === 'sub'  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([{ label: 'Continue', goto: ['bdsm_garden', 'gEV1'] }]);
    }
  } else {
    scene.actions([{ label: 'Continue', goto: ['bdsm_garden', 'garden_event_2'] }]);
    if (((s as any).temp_rand ?? 0) < 11) {
      scene.actions([{ label: 'Continue', goto: ['bdsm_garden', 'garden_event_3'] }]);
    } else {
      if (((s as any).sunWeather ?? 0) === 1) {
        scene.actions([{ label: 'Continue', goto: ['bdsm_garden', 'garden_event_4'] }]);
      }
      if (((s as any).temp_rand ?? 0) < 17) {
        if (((s as any).sunWeather ?? 0) === 1) {
          scene.actions([{ label: 'Continue', goto: ['bdsm_garden', 'garden_event_5'] }]);
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'garden':
      enterGarden(s, scene);
      break;
    case 'check_garden_events':
      enterCheckGardenEvents(s, scene);
      break;
    default:
      enterGarden(s, scene);
      break;
  }
}

export const bdsm_garden: LocationDef = {
  name: 'bdsm_garden',
  title: 'Extensive garden, meticulously designed and maintained. Spli',
  region: 'other',
  locationType: 'private',
  description: ['Extensive garden, meticulously designed and maintained. Split into different areas each with its own theme and inspiration.'],
  enter: enter,
};
