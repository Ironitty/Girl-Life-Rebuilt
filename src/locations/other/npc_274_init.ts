// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).locat['maya'] = '';
  if (((s as any).ballet_first_visit ?? 0) === 1) {
    if (((s as any).hour ?? 0) === 6) {
      (s as any).maya['home'] = 1;
      (s as any).locat['maya'] = 'bedroom';
    } else {
      (s as any).maya['home'] = 0;
      if (((s as any).hour ?? 0) === 12) {
        (s as any).locat['maya'] = 'living_room';
      } else {
        (s as any).locat['maya_room'] = 'shops';
      }
      if (((s as any).hour ?? 0)=== 17  &&  ((s as any).hour ?? 0) < 18) {
        (s as any).locat['maya'] = 'kitchen';
      } else {
        (s as any).temp_locat_maya_roll = Math.floor(Math.random() * 2) + 1;
        if (((s as any).temp_locat_maya_roll ?? 0) === 1) {
          (s as any).maya['home'] = 1;
          (s as any).locat['maya'] = 'living_room';
        } else {
          (s as any).maya['home'] = 0;
          (s as any).locat['maya'] = 'dance_school';
        }
      }
    }
  }
  scene.build();
}

export const npc_274_init: LocationDef = {
  name: 'npc_274_init',
  title: '"Are you okay?" you ask, concerned about her. You briefly th',
  region: 'other',
  enter: enter,
};
