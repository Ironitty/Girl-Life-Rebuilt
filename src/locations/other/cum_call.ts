import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).isnum ?? 0)(!(((((s as any).locArgs?.[1] ?? 0)).slice((2)-1))))) {
    if (((s as any).ARGS ?? 0)[2] !== 1) {
      qspCall(s, 'npcgeneratec', '', 0, ((s as any).locArgs?.[1] ?? 0), Math.floor(Math.random() * 43) + 18, 0, 1);
      // TODO-QSP: $ARGS[1] = $npclastgenerated
    } else {
      (s as any).tempnpcid = qspUntranslated(s, "arrpos('npc_usedname', ARGS[1])", { location: "cum_call" });
      if (((s as any).tempnpcid ?? 0) > 0) {
        // TODO-QSP: $ARGS[1] = 'A<<tempnpcid>>'
        // TODO-QSP: dynamic text: <br><b><font color="teal">DEVELOPER WARNING: Legacy name cum_call needs upgrade ...
        scene.text(`<br><b><font color="teal">DEVELOPER WARNING: Legacy name cum_call needs upgrade from ${((s as any).locArgs?.[1] ?? 0)} to A${((s as any).tempnpcid ?? 0)}</font></b>`);
      } else {
        // TODO-QSP: $ARGS[1] = 'D1'
      }
    }
  }
  qspCall(s, 'npcStat', '', ((s as any).locArgs?.[1] ?? 0), 0, ((s as any).locArgs?.[3] ?? 0));
  (s as any).sexpartkno = ((((s as any).npc_love ?? 0)?.[String((s as any).npcID ?? 0)] > 0) ? (1) : (0));
  if (((s as any).ARGS ?? 0)[2] === 1) {
    (s as any).sexpartkno = 1;
  } else {
    (s as any).sexunaware = 1;
  }
  if (((s as any).locArgs?.[3] ?? 0) === '') {
    (s as any).sexcontra = 0;
  } else {
    if (((s as any).locArgs?.[3] ?? 0) === 'none') {
      if (((s as any).pillcon2 ?? 0) > 1000) {
        (s as any).sexcontra = 2;
      } else {
        (s as any).sexcontra = 1;
      }
    } else {
      (s as any).sexcontra = 7;
      if (((s as any).locArgs?.[3] ?? 0) === 'sabotaged_other') {
        (s as any).sexcontra = 6;
      } else {
        (s as any).sexcontra = 5;
        if (((s as any).locArgs?.[3] ?? 0) === 'broken') {
          (s as any).sexcontra = 4;
        } else {
          (s as any).sexcontra = 3;
        }
      }
      (s as any).sexspecpot = ((((s as any).ARGS ?? 0)[4] > 0) ? (qspUntranslated(s, "ARGS[4]", { location: "cum_call" })) : (((s as any).npcSpermPot ?? 0)));
      (s as any).sexvolume = ((((s as any).ARGS ?? 0)[5] > 0) ? (qspUntranslated(s, "ARGS[5]", { location: "cum_call" })) : (0));
    }
  }
  scene.build();
}

export const cum_call: LocationDef = {
  name: 'cum_call',
  region: 'other',
  enter: enter,
};
