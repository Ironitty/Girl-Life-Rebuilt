import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).ARGS ?? 0)[0] === 3) {
    // TODO-QSP: $pronounTmp[0] = 'he'
    // TODO-QSP: $pronounTmp[1] = 'He'
    // TODO-QSP: $pronounTmp[2] = 'him'
    // TODO-QSP: $pronounTmp[3] = 'Him'
    // TODO-QSP: $pronounTmp[4] = 'his'
    // TODO-QSP: $pronounTmp[5] = 'His'
    // TODO-QSP: $pronounTmp[6] = 'his'
    // TODO-QSP: $pronounTmp[7] = 'His'
    // TODO-QSP: $pronounTmp[8] = 'himself'
    // TODO-QSP: $pronounTmp[9] = 'Himself'
  } else {
    // TODO-QSP: $pronounTmp[0] = 'she'
    // TODO-QSP: $pronounTmp[1] = 'She'
    // TODO-QSP: $pronounTmp[2] = 'her'
    // TODO-QSP: $pronounTmp[3] = 'Her'
    // TODO-QSP: $pronounTmp[4] = 'her'
    // TODO-QSP: $pronounTmp[5] = 'Her'
    // TODO-QSP: $pronounTmp[6] = 'hers'
    // TODO-QSP: $pronounTmp[7] = 'Hers'
    // TODO-QSP: $pronounTmp[8] = 'herself'
    // TODO-QSP: $pronounTmp[9] = 'Herself'
    // TODO-QSP: $pronounTmp[0] = 'xe'
    // TODO-QSP: $pronounTmp[1] = 'Xe'
    // TODO-QSP: $pronounTmp[2] = 'xem'
    // TODO-QSP: $pronounTmp[3] = 'Xem'
    // TODO-QSP: $pronounTmp[4] = 'xyr'
    // TODO-QSP: $pronounTmp[5] = 'Xyr'
    // TODO-QSP: $pronounTmp[6] = 'xyrs'
    // TODO-QSP: $pronounTmp[7] = 'Xyrs'
    // TODO-QSP: $pronounTmp[8] = 'xemself'
    // TODO-QSP: $pronounTmp[9] = 'Xemself'
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'a') {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'c') {
    } else {
      (s as any).iterat = qspUntranslated(s, "ARGS[1]", { location: "pronouns" });
      // TODO-QSP: $xe[iterat] = $pronounTmp[0]
      // TODO-QSP: $xec[iterat] = $pronounTmp[1]
      // TODO-QSP: $xem[iterat] = $pronounTmp[2]
      // TODO-QSP: $xemc[iterat] = $pronounTmp[3]
      // TODO-QSP: $xyr[iterat] = $pronounTmp[4]
      // TODO-QSP: $xyrc[iterat] = $pronounTmp[5]
      // TODO-QSP: $xyrs[iterat] = $pronounTmp[6]
      // TODO-QSP: $xyrsc[iterat] = $pronounTmp[7]
      // TODO-QSP: $xemself[iterat] = $pronounTmp[8]
      // TODO-QSP: $xemselfc[iterat] = $pronounTmp[9]
    }
  }
  scene.build();
}

export const pronouns: LocationDef = {
  name: 'pronouns',
  region: 'other',
  enter: enter,
};
