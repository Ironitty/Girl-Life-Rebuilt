import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).eff_contra = (((s as any).arrsize ?? 0)('ARGS') > 0) ? (qspUntranslated(s, "ARGS[0]", { location: "pregriskeval" })) : (((s as any).sexcontra ?? 0));
  if (((s as any).knowpreg ?? 0) === 1  ||  ((s as any).thinkpreg ?? 0) === 1) {
    (s as any).RESULT = (-4);
  } else {
    (s as any).RESULT = (-1);
    if (((s as any).tabletkishot ?? 0) !== 0) {
      (s as any).RESULT = (-2);
    } else {
      (s as any).RESULT = (-3);
      if (((s as any).eff_contra ?? 0) === 0  ||  ((s as any).eff_contra ?? 0) === 4  ||  ((s as any).eff_contra ?? 0) === 5) {
        if (((((s as any).preziktype ?? 0) === 1  &&  ((((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms']) > 0))  ||  ((s as any).preziktype ?? 0) === 2)  &&  ((s as any).tabletkicheck ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0) {
          (s as any).RESULT = 1;
        } else {
          (s as any).RESULT = 0;
        }
      } else {
        (s as any).RESULT = 2;
      }
    }
  }
  scene.build();
}

export const pregriskeval: LocationDef = {
  name: 'pregriskeval',
  region: 'other',
  enter: enter,
};
