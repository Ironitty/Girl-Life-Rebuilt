import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoes', 'reset_ShoVars');
  if (((s as any).loc ?? 0)('$attributes_' + ((s as any).locArgs?.[0] ?? 0) + '_shoes')) {
    // TODO-QSP: gs '$attributes_<<$ARGS[0]>>_shoes', ARGS[1]
  }
  if ((!((s as any).ShoQuality ?? 0))) {
    // TODO-QSP: exit
  }
  if (((s as any).ShoHeels ?? 0) < 2) {
    (s as any).ShoSkill = 0;
    if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['severe'] = 0;
    if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['medium'] = 0;
    if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['mild'] = 0;
  } else {
    if (((s as any).ShoHeels ?? 0) === 2) {
      (s as any).ShoSkill = 0;
      if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['severe'] = 0;
      if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['medium'] = 25;
      if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['mild'] = 40;
    } else {
      if (((s as any).ShoHeels ?? 0) === 3) {
        (s as any).ShoSkill = 15;
        if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['severe'] = 0;
        if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['medium'] = 35;
        if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['mild'] = 50;
      } else {
        if (((s as any).ShoHeels ?? 0) === 4) {
          (s as any).ShoSkill = 30;
          if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['severe'] = 0;
          if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['medium'] = 45;
          if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['mild'] = 60;
        } else {
          if (((s as any).ShoHeels ?? 0) === 5) {
            (s as any).ShoSkill = 45;
            if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['severe'] = 55;
            if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['medium'] = 65;
            if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['mild'] = 75;
          } else {
            (s as any).ShoSkill = 60;
            if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['severe'] = 70;
            if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['medium'] = 80;
            if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['mild'] = 90;
          }
        }
      }
    }
  }
  (s as any).ShoMaxStrength = ((s as any).ShoStrength ?? 0);
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[0] ?? 0), qspUntranslated(s, "ARGS[1]", { location: "shoe_attributes" }))) {
    // TODO-QSP: dynamic "
    (s as any).ShoStrength = qspUntranslated(s, "((s as any).locArgs?.[0] ?? 0)_shoe_h[qspUntranslated(s, \"ARGS[1]\", { location: \"shoe_attributes\" })]", { location: "shoe_attributes" });
    // TODO-QSP: "
  }
  scene.build();
}

export const shoe_attributes: LocationDef = {
  name: 'shoe_attributes',
  region: 'other',
  enter: enter,
};
