import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDinDush(s: GameState, scene: SceneBuilder): void {
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
  (s as any).pcs_hairbsh = 0;
  (s as any).pcs_makeup = 1;
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/dush.mp4');
  // TODO-QSP: dynamic text: <<$din_dush_text>>
  scene.text(`${((s as any).din_dush_text ?? 0)}`);
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  scene.build();
}

function enterDinAnalPlugInOff(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).analPlugInbonus = 10;
  (s as any).analPlugIn = 0;
  (s as any).analPlugOut = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/placer_sex16.mp4');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'din_dush':
      enterDinDush(s, scene);
      break;
    case 'din_analPlugIn_off':
      enterDinAnalPlugInOff(s, scene);
      break;
    default:
      enterDinDush(s, scene);
      break;
  }
}

export const placer_sex: LocationDef = {
  name: 'placer_sex',
  title: '<br>Your deodorant gets washed away in the shower.',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
