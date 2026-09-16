// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).BraQuality = 3;
    (s as any).BraStrength = 80000;
    (s as any).BraType = 6;
    (s as any).BraFun = 2;
    (s as any).BraSport = 1;
    (s as any).BraThinness = 3;
    (s as any).BraPrice = 1150;
    ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 1;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 2) {
      (s as any).BraQuality = 2;
      (s as any).BraStrength = 60000;
      (s as any).BraType = 6;
      (s as any).BraFun = 2;
      (s as any).BraSport = 1;
      (s as any).BraThinness = 2;
      (s as any).BraPrice = 1100;
      ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 2;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 3) {
        (s as any).BraQuality = 3;
        (s as any).BraStrength = 80000;
        (s as any).BraType = 6;
        (s as any).BraFun = 2;
        (s as any).BraSport = 1;
        (s as any).BraThinness = 3;
        (s as any).BraPrice = 1150;
        ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 3;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 4) {
          (s as any).BraQuality = 3;
          (s as any).BraStrength = 80000;
          (s as any).BraType = 6;
          (s as any).BraFun = 2;
          (s as any).BraSport = 1;
          (s as any).BraThinness = 3;
          (s as any).BraPrice = 1150;
          ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 4;
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 5) {
            (s as any).BraQuality = 3;
            (s as any).BraStrength = 80000;
            (s as any).BraType = 6;
            (s as any).BraFun = 2;
            (s as any).BraSport = 1;
            (s as any).BraThinness = 3;
            (s as any).BraPrice = 1150;
            ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 5;
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 6) {
              (s as any).BraQuality = 2;
              (s as any).BraStrength = 60000;
              (s as any).BraType = 6;
              (s as any).BraFun = 2;
              (s as any).BraSport = 1;
              (s as any).BraThinness = 4;
              (s as any).BraPrice = 1100;
              ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 6;
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 7) {
                (s as any).BraQuality = 3;
                (s as any).BraStrength = 80000;
                (s as any).BraType = 6;
                (s as any).BraFun = 2;
                (s as any).BraSport = 1;
                (s as any).BraThinness = 2;
                (s as any).BraPrice = 1150;
                ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 7;
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 8) {
                  (s as any).BraQuality = 2;
                  (s as any).BraStrength = 60000;
                  (s as any).BraType = 6;
                  (s as any).BraFun = 2;
                  (s as any).BraSport = 1;
                  (s as any).BraThinness = 2;
                  (s as any).BraPrice = 1100;
                  ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 8;
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const _attributes_danilovich_bras: LocationDef = {
  name: '_attributes_danilovich_bras',
  region: 'other',
  enter: enter,
};
