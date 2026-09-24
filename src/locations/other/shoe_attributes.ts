import { qspCall, qspFunc, hasLocation } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoes', 'reset_ShoVars');
  if (hasLocation('$attributes_' + (String((s as any).locArgs?.[0] ?? '')) + '_shoes')) {
    qspCall(s, '$attributes_' + ((s as any).locArgs?.[0] ?? 0) + '_shoes', '', ((s as any).locArgs?.[1] ?? 0));
  }
  if ((!((s as any).ShoQuality ?? 0))) {
    // TODO-QSP: exit
  }
  if (((s as any).ShoHeels ?? 0) < 2) {
    (s as any).ShoSkill = 0;
    ((s as any).ShoPain = (s as any).ShoPain ?? {})['severe'] = 0;
    ((s as any).ShoPain = (s as any).ShoPain ?? {})['medium'] = 0;
    ((s as any).ShoPain = (s as any).ShoPain ?? {})['mild'] = 0;
  } else {
    if (((s as any).ShoHeels ?? 0) === 2) {
      (s as any).ShoSkill = 0;
      ((s as any).ShoPain = (s as any).ShoPain ?? {})['severe'] = 0;
      ((s as any).ShoPain = (s as any).ShoPain ?? {})['medium'] = 25;
      ((s as any).ShoPain = (s as any).ShoPain ?? {})['mild'] = 40;
    } else {
      if (((s as any).ShoHeels ?? 0) === 3) {
        (s as any).ShoSkill = 15;
        ((s as any).ShoPain = (s as any).ShoPain ?? {})['severe'] = 0;
        ((s as any).ShoPain = (s as any).ShoPain ?? {})['medium'] = 35;
        ((s as any).ShoPain = (s as any).ShoPain ?? {})['mild'] = 50;
      } else {
        if (((s as any).ShoHeels ?? 0) === 4) {
          (s as any).ShoSkill = 30;
          ((s as any).ShoPain = (s as any).ShoPain ?? {})['severe'] = 0;
          ((s as any).ShoPain = (s as any).ShoPain ?? {})['medium'] = 45;
          ((s as any).ShoPain = (s as any).ShoPain ?? {})['mild'] = 60;
        } else {
          if (((s as any).ShoHeels ?? 0) === 5) {
            (s as any).ShoSkill = 45;
            ((s as any).ShoPain = (s as any).ShoPain ?? {})['severe'] = 55;
            ((s as any).ShoPain = (s as any).ShoPain ?? {})['medium'] = 65;
            ((s as any).ShoPain = (s as any).ShoPain ?? {})['mild'] = 75;
          } else {
            (s as any).ShoSkill = 60;
            ((s as any).ShoPain = (s as any).ShoPain ?? {})['severe'] = 70;
            ((s as any).ShoPain = (s as any).ShoPain ?? {})['medium'] = 80;
            ((s as any).ShoPain = (s as any).ShoPain ?? {})['mild'] = 90;
          }
        }
      }
    }
  }
  (s as any).ShoMaxStrength = ((s as any).ShoStrength ?? 0);
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[0] ?? 0), ((s as any).locArgs?.[1] ?? 0))) {
  }
  scene.build();
}

export const shoe_attributes: LocationDef = {
  name: 'shoe_attributes',
  region: 'other',
  enter: enter,
};
