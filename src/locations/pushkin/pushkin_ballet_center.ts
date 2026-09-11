import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'ballet_pushkin_center', ((s as any).locArgs?.[0] ?? 0));
  ((s as any).setloc ?? {})['StageTitle'] = 'Pushkin Residential School';
  ((s as any).setloc ?? {})['StageImage'] = 'locations/pushkin/ballet_residence/residence.jpg';
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'core_library', 'stage_title');
  scene.text('You can see the apartment block that\'s been converted into a residential accommodation for the school. The street always seems to be packed with cars but there is few people on the street at this time.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Press the buzzer', goto: ['pushkin_ballet_res', 'warden'] },
    { label: 'Back to street', goto: ['pushkin', ''] },
  ]);
  scene.build();
}

export const pushkin_ballet_center: LocationDef = {
  name: 'pushkin_ballet_center',
  title: 'You can see the apartment block that\'s been converted into a',
  region: 'pushkin',
  description: ['You can see the apartment block that\'s been converted into a residential accommodation for the school. The street always seems to be packed with cars but there is few people on the street at this time.'],
  enter: enter,
};
