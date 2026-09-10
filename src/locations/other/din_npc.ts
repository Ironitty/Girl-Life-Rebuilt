// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGoHome(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home ?? 0)?.['current'] === 'hunters_lodge') {
    scene.actions([{ label: 'Continue', goto: ['gad_swamp_yard', 'start'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['pav_complex', 'start'] }]);
    // TODO-QSP: gt $home['location']
  }
  scene.build();
}

function enterGoStraightHome(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home ?? 0)?.['current'] === 'lyceum_dorm') {
    scene.actions([{ label: 'Continue', goto: ['ETO_hostel', 'town_hostel'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['uni_dorm', 'dorm_room'] }]);
    // TODO-QSP: gt $home['entrance'], 'start'
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'go_home':
      enterGoHome(s, scene);
      break;
    case 'go_straight_home':
      enterGoStraightHome(s, scene);
      break;
    default:
      enterGoHome(s, scene);
      break;
  }
}

export const din_npc: LocationDef = {
  name: 'din_npc',
  region: 'other',
  enter: enter,
};
