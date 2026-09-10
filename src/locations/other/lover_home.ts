import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arrsize ?? 0)('sex_ev') > 0) {
    qspCall(s, 'sex_ev_leave', 'exit');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
    scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['uni_grounds', ''] }]);
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_residential') {
      scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
      if (((s as any).region ?? 0) === 'pav') {
        scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['pav_park', 'start'] }]);
        if (((s as any).region ?? 0) === 'city') {
          scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['city_park', 'start'] }]);
          if (((s as any).region ?? 0) === 'city_island') {
            scene.actions([{ label: 'Continue', goto: ['uni_grounds', ''] }]);
          }
        }
      }
    }
  }
  scene.build();
}

export const lover_home: LocationDef = {
  name: 'lover_home',
  title: 'Hall',
  region: 'other',
  locationType: 'kitchen',
  locclass: 'livingr',
  enter: enter,
};
