// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).fightAtk = undefined;
  (s as any).fightAtk = undefined;
  (s as any).fightAtk_Type = undefined;
  (s as any).fightAtk_TargetType = undefined;
  (s as any).fightAtk_TargetNumber = undefined;
  (s as any).fightAtk_AttackerNumber = undefined;
  scene.build();
}

export const nill: LocationDef = {
  name: 'nill',
  region: 'other',
  enter: enter,
};
