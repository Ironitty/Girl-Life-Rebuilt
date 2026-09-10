import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((((s as any).locArgs?.[0] ?? 0)).toUpperCase()) === 'AND') {
    (s as any).pha_i = 1;
    (s as any).pha_maxi = 0;
    if (((s as any).pha_maxi ?? 0) === 1) {
      (s as any).result = 0;
      // TODO-QSP: jump 'pha_AND_killvar'
    }
    // TODO-QSP: :pha_AND_loop
    if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] !== '') {
      if (qspFunc(s, 'pcs_has_attr', ((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)]) === 0) {
        (s as any).result = 0;
        // TODO-QSP: jump 'pha_AND_killvar'
      }
    } else {
      if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] === 0) {
        (s as any).result = 0;
        // TODO-QSP: jump 'pha_AND_killvar'
      }
    }
    (s as any).pha_i = ((s as any).pha_i ?? 0) + (1);
    if (((s as any).pha_i ?? 0) < ((s as any).pha_maxi ?? 0)) {
      // TODO-QSP: jump 'pha_AND_loop'
    }
    (s as any).result = 1;
    // TODO-QSP: :pha_AND_killvar
    return;
  } else {
    (s as any).pha_i = 1;
    (s as any).pha_maxi = 0;
    if (((s as any).pha_maxi ?? 0) === 1) {
      (s as any).result = 0;
      // TODO-QSP: jump 'pha_OR_killvar'
    }
    // TODO-QSP: :pha_OR_loop
    if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] !== '') {
      if (qspFunc(s, 'pcs_has_attr', ((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)])) {
        (s as any).result = 1;
        // TODO-QSP: jump 'pha_OR_killvar'
      }
    } else {
      if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)]) {
        (s as any).result = 1;
        // TODO-QSP: jump 'pha_OR_killvar'
      }
    }
    (s as any).pha_i = ((s as any).pha_i ?? 0) + (1);
    if (((s as any).pha_i ?? 0) < ((s as any).pha_maxi ?? 0)) {
      // TODO-QSP: jump 'pha_OR_loop'
    }
    (s as any).result = 0;
    // TODO-QSP: :pha_OR_killvar
    return;
    if (((((s as any).locArgs?.[0] ?? 0)).toUpperCase()) === 'NAND') {
      (s as any).pha_i = 1;
      (s as any).pha_maxi = 0;
      if (((s as any).pha_maxi ?? 0) === 1) {
        (s as any).result = 0;
        // TODO-QSP: jump 'pha_NAND_killvar'
      }
      // TODO-QSP: :pha_NAND_loop
      if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] !== '') {
        if (qspFunc(s, 'pcs_has_attr', ((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)]) === 0) {
          (s as any).result = 1;
          // TODO-QSP: jump 'pha_NAND_killvar'
        }
      } else {
        if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] === 0) {
          (s as any).result = 1;
          // TODO-QSP: jump 'pha_NAND_killvar'
        }
      }
      (s as any).pha_i = ((s as any).pha_i ?? 0) + (1);
      if (((s as any).pha_i ?? 0) < ((s as any).pha_maxi ?? 0)) {
        // TODO-QSP: jump 'pha_NAND_loop'
      }
      (s as any).result = 0;
      // TODO-QSP: :pha_NAND_killvar
      return;
    } else {
      (s as any).pha_i = 1;
      (s as any).pha_maxi = 0;
      if (((s as any).pha_maxi ?? 0) === 1) {
        (s as any).result = 0;
        // TODO-QSP: jump 'pha_NOR_killvar'
      }
      // TODO-QSP: :pha_NOR_loop
      if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] !== '') {
        if (qspFunc(s, 'pcs_has_attr', ((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)])) {
          (s as any).result = 0;
          // TODO-QSP: jump 'pha_NOR_killvar'
        }
      } else {
        if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)]) {
          (s as any).result = 0;
          // TODO-QSP: jump 'pha_NOR_killvar'
        }
      }
      (s as any).pha_i = ((s as any).pha_i ?? 0) + (1);
      if (((s as any).pha_i ?? 0) < ((s as any).pha_maxi ?? 0)) {
        // TODO-QSP: jump 'pha_NOR_loop'
      }
      (s as any).result = 1;
      // TODO-QSP: :pha_NOR_killvar
      return;
      if (((((s as any).locArgs?.[0] ?? 0)).toUpperCase()) === 'XOR') {
        (s as any).pha_i = 1;
        (s as any).pha_maxi = 0;
        (s as any).pha_target = 0;
        if (((s as any).pha_maxi ?? 0) === 1) {
          (s as any).result = 0;
          // TODO-QSP: jump 'pha_XOR_killvar'
        }
        (s as any).result = 0;
        if (((s as any).ARGS ?? 0)[1] === 0) {
          (s as any).pha_i = 1;
          (s as any).pha_target = 1;
        } else {
          (s as any).pha_i = 2;
          (s as any).pha_target = qspUntranslated(s, "ARGS[1]", { location: "pcs_has_attr" });
        }
        // TODO-QSP: :pha_XOR_loop
        if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] !== '') {
          if (qspFunc(s, 'pcs_has_attr', ((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)])) {
            if (((s as any).result ?? 0) < ((s as any).pha_target ?? 0)) {
              (s as any).result = ((s as any).result ?? 0) + (1);
            } else {
              (s as any).result = 0;
              // TODO-QSP: jump 'pha_XOR_killvar'
            }
          }
        } else {
          if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)]) {
            if (((s as any).result ?? 0) < ((s as any).pha_target ?? 0)) {
              (s as any).result = ((s as any).result ?? 0) + (1);
            } else {
              (s as any).result = 0;
              // TODO-QSP: jump 'pha_XOR_killvar'
            }
          }
        }
        (s as any).pha_i = ((s as any).pha_i ?? 0) + (1);
        if (((s as any).pha_i ?? 0) < ((s as any).pha_maxi ?? 0)) {
          // TODO-QSP: jump 'pha_XOR_loop'
        }
        if (((s as any).result ?? 0) !== ((s as any).pha_target ?? 0)) {
          (s as any).result = 0;
        }
        // TODO-QSP: :pha_XOR_killvar
        return;
      }
      // TODO-QSP: $ARGS[0] = $lcase($ARGS[0])
    }
  }
  scene.build();
}

export const pcs_has_attr: LocationDef = {
  name: 'pcs_has_attr',
  region: 'other',
  enter: enter,
};
