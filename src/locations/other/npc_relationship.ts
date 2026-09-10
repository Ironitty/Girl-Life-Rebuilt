import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === '') {
    (s as any).npcRelSetVal = qspUntranslated(s, "ARGS[2]", { location: "npc_relationship" });
  } else {
    (s as any).npcRelSetVal = Math.floor(Math.random() * 2) + 1;
    if (((s as any).locArgs?.[2] ?? 0) === 'love') {
      (s as any).npcRelSetVal = Math.floor(Math.random() * 2) + 3;
      qspCall(s, 'exp_gain', 'humint', Math.floor(Math.random() * 2) + 0);
    } else {
      (s as any).npcRelSetVal = Math.floor(Math.random() * 2) + 5;
      qspCall(s, 'exp_gain', 'humint', Math.floor(Math.random() * 2) + 1);
      if (((s as any).locArgs?.[2] ?? 0) === 'dislike') {
        (s as any).npcRelSetVal = 0-((s as any).rand ?? 0)(1, 2);
      } else {
        (s as any).npcRelSetVal = 0-((s as any).rand ?? 0)(3, 4);
        if (((s as any).locArgs?.[2] ?? 0) === 'loathe') {
          (s as any).npcRelSetVal = 0-((s as any).rand ?? 0)(5, 6);
        } else {
          (s as any).npcRelSetVal = 0;
        }
        if (((s as any).npcRelSetVal ?? 0) > 0) {
          (s as any).npcRelSetVal = ((s as any).npcRelSetVal ?? 0) + ((((s as any).npcRelSetVal ?? 0)*((s as any).pcs_humint ?? 0))/100);
        } else {
          (s as any).npcRelSetVal = ((s as any).npcRelSetVal ?? 0) - ((((s as any).npcRelSetVal ?? 0)*((s as any).pcs_humint ?? 0))/200);
        }
        (s as any).npcRelSetVal = ((s as any).npcRelSetVal ?? 0) + (((s as any).npc_rel ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]);
        if (((s as any).npcRelSetVal ?? 0) > 100) {
          (s as any).npcRelSetVal = 100;
        }
        if (((s as any).npcRelSetVal ?? 0) < 0) {
          (s as any).npcRelSetVal = 0;
        }
        if (((s as any).ARGS ?? 0)[3] > 0) {
          if (((s as any).ARGS ?? 0)[3] > ((s as any).npc_rel_daily ?? 0)[((s as any).locArgs?.[1] ?? 0)+((s as any).locArgs?.[4] ?? 0)]) {
            // TODO-QSP: npc_rel_daily[$ARGS[1]+$ARGS[4]] += 1
          } else {
            (s as any).npcRelSetVal = ((s as any).npc_rel ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
          }
        }
        if (((s as any).locArgs?.[1] ?? 0) === 'A1') {
          if (((((s as any).dimaRevenge ?? 0) === 6  &&  (((s as any).dimaRevChoice ?? 0) === 3  ||  ((s as any).dimaRevChoice ?? 0) === 5  ||  ((s as any).dimaRevChoice ?? 0) === 6))  ||  (((s as any).dimaRevenge ?? 0) === 7  &&  ((s as any).dimaRevChoice ?? 0) === 2)  ||  (((s as any).dimaRevenge ?? 0) === 8  &&  (((s as any).dimaRevChoice ?? 0) === 1  ||  ((s as any).dimaRevChoice ?? 0) === 4)))) {
            (s as any).npcRelSetVal = ((s as any).npc_rel ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
          }
        } else {
          if (((s as any).npcRelSetVal ?? 0) > 20) {
            (s as any).npcRelSetVal = 20;
          }
          if (((s as any).locArgs?.[1] ?? 0) === 'A23') {
            if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).npcRelSetVal ?? 0) > 20) {
              (s as any).npcRelSetVal = 20;
            }
          }
          // TODO-QSP: npc_rel[$ARGS[1]] = npcRelSetVal
          if (((s as any).npcRelSetVal ?? 0) > 0) {
            // TODO-QSP: npc_known[$ARGS[1]] = 1
          }
        }
      }
    }
  }
  scene.build();
}

export const npc_relationship: LocationDef = {
  name: 'npc_relationship',
  region: 'other',
  enter: enter,
};
