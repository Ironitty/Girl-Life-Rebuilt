// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 3) {
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
    if (String((s as any).locArgs?.[0] ?? '') === 1  ||  String((s as any).locArgs?.[0] ?? '') === 2) {
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
    } else {
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
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'a') {
    (s as any).xe1 = (((s as any).pronounTmp ?? 0)?.[0] ?? 0);
    (s as any).xec1 = (((s as any).pronounTmp ?? 0)?.[1] ?? 0);
    (s as any).xem1 = (((s as any).pronounTmp ?? 0)?.[2] ?? 0);
    (s as any).xemc1 = (((s as any).pronounTmp ?? 0)?.[3] ?? 0);
    (s as any).xyr1 = (((s as any).pronounTmp ?? 0)?.[4] ?? 0);
    (s as any).xyrc1 = (((s as any).pronounTmp ?? 0)?.[5] ?? 0);
    (s as any).xyrs1 = (((s as any).pronounTmp ?? 0)?.[6] ?? 0);
    (s as any).xyrsc1 = (((s as any).pronounTmp ?? 0)?.[7] ?? 0);
    (s as any).xemself1 = (((s as any).pronounTmp ?? 0)?.[8] ?? 0);
    (s as any).xemselfc1 = (((s as any).pronounTmp ?? 0)?.[9] ?? 0);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'b') {
      (s as any).xe2 = (((s as any).pronounTmp ?? 0)?.[0] ?? 0);
      (s as any).xec2 = (((s as any).pronounTmp ?? 0)?.[1] ?? 0);
      (s as any).xem2 = (((s as any).pronounTmp ?? 0)?.[2] ?? 0);
      (s as any).xemc2 = (((s as any).pronounTmp ?? 0)?.[3] ?? 0);
      (s as any).xyr2 = (((s as any).pronounTmp ?? 0)?.[4] ?? 0);
      (s as any).xyrc2 = (((s as any).pronounTmp ?? 0)?.[5] ?? 0);
      (s as any).xyrs2 = (((s as any).pronounTmp ?? 0)?.[6] ?? 0);
      (s as any).xyrsc2 = (((s as any).pronounTmp ?? 0)?.[7] ?? 0);
      (s as any).xemself2 = (((s as any).pronounTmp ?? 0)?.[8] ?? 0);
      (s as any).xemselfc2 = (((s as any).pronounTmp ?? 0)?.[9] ?? 0);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'c') {
        (s as any).xe3 = (((s as any).pronounTmp ?? 0)?.[0] ?? 0);
        (s as any).xec3 = (((s as any).pronounTmp ?? 0)?.[1] ?? 0);
        (s as any).xem3 = (((s as any).pronounTmp ?? 0)?.[2] ?? 0);
        (s as any).xemc3 = (((s as any).pronounTmp ?? 0)?.[3] ?? 0);
        (s as any).xyr3 = (((s as any).pronounTmp ?? 0)?.[4] ?? 0);
        (s as any).xyrc3 = (((s as any).pronounTmp ?? 0)?.[5] ?? 0);
        (s as any).xyrs3 = (((s as any).pronounTmp ?? 0)?.[6] ?? 0);
        (s as any).xyrsc3 = (((s as any).pronounTmp ?? 0)?.[7] ?? 0);
        (s as any).xemself3 = (((s as any).pronounTmp ?? 0)?.[8] ?? 0);
        (s as any).xemselfc3 = (((s as any).pronounTmp ?? 0)?.[9] ?? 0);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'd') {
          (s as any).xe4 = (((s as any).pronounTmp ?? 0)?.[0] ?? 0);
          (s as any).xec4 = (((s as any).pronounTmp ?? 0)?.[1] ?? 0);
          (s as any).xem4 = (((s as any).pronounTmp ?? 0)?.[2] ?? 0);
          (s as any).xemc4 = (((s as any).pronounTmp ?? 0)?.[3] ?? 0);
          (s as any).xyr4 = (((s as any).pronounTmp ?? 0)?.[4] ?? 0);
          (s as any).xyrc4 = (((s as any).pronounTmp ?? 0)?.[5] ?? 0);
          (s as any).xyrs4 = (((s as any).pronounTmp ?? 0)?.[6] ?? 0);
          (s as any).xyrsc4 = (((s as any).pronounTmp ?? 0)?.[7] ?? 0);
          (s as any).xemself4 = (((s as any).pronounTmp ?? 0)?.[8] ?? 0);
          (s as any).xemselfc4 = (((s as any).pronounTmp ?? 0)?.[9] ?? 0);
        } else {
          (s as any).iterat = ((s as any).locArgs?.[1] ?? 0);
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
    }
  }
  scene.build();
}

export const pronouns: LocationDef = {
  name: 'pronouns',
  region: 'other',
  enter: enter,
};
