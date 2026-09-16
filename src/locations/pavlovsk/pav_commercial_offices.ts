import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = '';
  (s as any).loc = 'pav_commercial_offices';
  (s as any).menu_loc = 'pav_commercial_offices';
  (s as any).menu_arg = '';
  (s as any).phone_off = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/leonid/officebuilding.jpg');
  scene.text('You are in front of the small office building.');
  scene.actions([
    { label: 'Go inside', goto: ['leonid', 'hall'] },
    { label: 'Get back', goto: ['pav_commercial', ''] },
  ]);
  scene.build();
}

export const pav_commercial_offices: LocationDef = {
  name: 'pav_commercial_offices',
  title: 'You are in front of the small office building.',
  region: 'pavlovsk',
  description: ['You are in front of the small office building.'],
  enter: enter,
};
