import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMaster(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bdsm_bedwest', 'check_master_events');
  qspCall(s, 'core_library', 'setloc', 'bdsm_bedwest', 'master');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/masterbed.jpg');
  scene.text('Master bedroom');
  scene.actions([
    { label: 'Go to the landing', goto: ['bdsm_landing', ''] },
  ]);
  scene.build();
}

function enterCheckMasterEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_rand ?? 0) < 3) {
    scene.actions([{ label: 'Continue', goto: ['bdsm_bedwest', 'master_event_1'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['bdsm_bedwest', 'master_event_2'] }]);
    if (((s as any).temp_rand ?? 0) < 9) {
      scene.actions([{ label: 'Continue', goto: ['bdsm_bedwest', 'master_event_3'] }]);
    } else {
      if (((s as any).bdsmclub ?? 0)?.['role'] === 'sub') {
        scene.actions([{ label: 'Continue', goto: ['bdsm_bedwest', 'master_event_4'] }]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'master':
      enterMaster(s, scene);
      break;
    case 'check_master_events':
      enterCheckMasterEvents(s, scene);
      break;
    default:
      enterMaster(s, scene);
      break;
  }
}

export const bdsm_bedwest: LocationDef = {
  name: 'bdsm_bedwest',
  title: 'Master bedroom',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  description: ['Master bedroom'],
  enter: enter,
};
