import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 0;
  (s as any).pregchemTemp = ((((s as any).ARGS ?? 0)[1] === 0) ? (((s as any).pregChem ?? 0)) : (qspUntranslated(s, "ARGS[1]", { location: "body_din" })));
  (s as any).clothingwornnumberTemp = ((((s as any).ARGS ?? 0)[3] === 0) ? (((s as any).clothingwornnumber ?? 0)) : (qspUntranslated(s, "ARGS[3]", { location: "body_din" })));
  qspCall(s, 'clothing_attributes', '', ((s as any).clothingworntypeTemp ?? 0), ((s as any).clothingwornnumberTemp ?? 0));
  if ((((s as any).CloThinness ?? 0) >= 5  ||  ((s as any).clothingworntypeTemp ?? 0) === 'nude')  &&  ((s as any).pregchemTemp ?? 0) > 2688) {
    (s as any).RESULT = 1;
  } else {
    (s as any).RESULT = 1;
    if (((s as any).CloThinness ?? 0) === 3  &&  ((s as any).pregchemTemp ?? 0) > 3990) {
      (s as any).RESULT = 1;
    } else {
      (s as any).RESULT = 1;
      if (((s as any).pregchemTemp ?? 0) > 5200) {
        (s as any).RESULT = 1;
      }
    }
  }
  scene.build();
}

export const body_din: LocationDef = {
  name: 'body_din',
  region: 'other',
  enter: enter,
};
