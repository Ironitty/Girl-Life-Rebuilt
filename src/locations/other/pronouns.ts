// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 3) {
    ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[0] = 'he';
    ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[1] = 'He';
    ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[2] = 'him';
    ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[3] = 'Him';
    ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[4] = 'his';
    ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[5] = 'His';
    ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[6] = 'his';
    ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[7] = 'His';
    ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[8] = 'himself';
    ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[9] = 'Himself';
  } else {
    if (String((s as any).locArgs?.[0] ?? '') === 1  ||  String((s as any).locArgs?.[0] ?? '') === 2) {
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[0] = 'she';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[1] = 'She';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[2] = 'her';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[3] = 'Her';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[4] = 'her';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[5] = 'Her';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[6] = 'hers';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[7] = 'Hers';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[8] = 'herself';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[9] = 'Herself';
    } else {
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[0] = 'xe';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[1] = 'Xe';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[2] = 'xem';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[3] = 'Xem';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[4] = 'xyr';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[5] = 'Xyr';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[6] = 'xyrs';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[7] = 'Xyrs';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[8] = 'xemself';
      ((s as any).pronounTmp = (s as any).pronounTmp ?? {})[9] = 'Xemself';
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
          ((s as any).xe = (s as any).xe ?? {})[String((s as any).iterat ?? 0)] = (((s as any).pronounTmp ?? 0)?.[0] ?? 0);
          ((s as any).xec = (s as any).xec ?? {})[String((s as any).iterat ?? 0)] = (((s as any).pronounTmp ?? 0)?.[1] ?? 0);
          ((s as any).xem = (s as any).xem ?? {})[String((s as any).iterat ?? 0)] = (((s as any).pronounTmp ?? 0)?.[2] ?? 0);
          ((s as any).xemc = (s as any).xemc ?? {})[String((s as any).iterat ?? 0)] = (((s as any).pronounTmp ?? 0)?.[3] ?? 0);
          ((s as any).xyr = (s as any).xyr ?? {})[String((s as any).iterat ?? 0)] = (((s as any).pronounTmp ?? 0)?.[4] ?? 0);
          ((s as any).xyrc = (s as any).xyrc ?? {})[String((s as any).iterat ?? 0)] = (((s as any).pronounTmp ?? 0)?.[5] ?? 0);
          ((s as any).xyrs = (s as any).xyrs ?? {})[String((s as any).iterat ?? 0)] = (((s as any).pronounTmp ?? 0)?.[6] ?? 0);
          ((s as any).xyrsc = (s as any).xyrsc ?? {})[String((s as any).iterat ?? 0)] = (((s as any).pronounTmp ?? 0)?.[7] ?? 0);
          ((s as any).xemself = (s as any).xemself ?? {})[String((s as any).iterat ?? 0)] = (((s as any).pronounTmp ?? 0)?.[8] ?? 0);
          ((s as any).xemselfc = (s as any).xemselfc ?? {})[String((s as any).iterat ?? 0)] = (((s as any).pronounTmp ?? 0)?.[9] ?? 0);
        }
      }
    }
  }
  (s as any).pronounTmp = undefined;
  (s as any).iterat = undefined;
  scene.build();
}

export const pronouns: LocationDef = {
  name: 'pronouns',
  region: 'other',
  enter: enter,
};
