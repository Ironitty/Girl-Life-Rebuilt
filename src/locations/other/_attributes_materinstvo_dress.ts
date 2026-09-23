// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[0] ?? '') === 1) {
    (s as any).CloQuality = 3;
    (s as any).CloStrength = 166875;
    (s as any).CloThinness = 3;
    (s as any).CloTopCut = 1;
    (s as any).CloSkirtShortness = 2;
    (s as any).CloDress = 1;
    (s as any).CloStyle = 5;
    (s as any).CloPrice = 3600;
  } else {
    if (String((s as any).locArgs?.[0] ?? '') === 2) {
      (s as any).CloQuality = 3;
      (s as any).CloStrength = 166875;
      (s as any).CloThinness = 3;
      (s as any).CloTopCut = 1;
      (s as any).CloSkirtShortness = 2;
      (s as any).CloDress = 1;
      (s as any).CloStyle = 5;
      (s as any).CloPrice = 3600;
    } else {
      if (String((s as any).locArgs?.[0] ?? '') === 3) {
        (s as any).CloQuality = 3;
        (s as any).CloStrength = 166875;
        (s as any).CloThinness = 3;
        (s as any).CloTopCut = 1;
        (s as any).CloSkirtShortness = 2;
        (s as any).CloDress = 1;
        (s as any).CloStyle = 5;
        (s as any).CloPrice = 3600;
      } else {
        if (String((s as any).locArgs?.[0] ?? '') === 4) {
          (s as any).CloQuality = 4;
          (s as any).CloStrength = 174375;
          (s as any).CloThinness = 3;
          (s as any).CloTopCut = 1;
          (s as any).CloSkirtShortness = 2;
          (s as any).CloDress = 1;
          (s as any).CloStyle = 5;
          (s as any).CloPrice = 3600;
        } else {
          if (String((s as any).locArgs?.[0] ?? '') === 5) {
            (s as any).CloQuality = 3;
            (s as any).CloStrength = 166875;
            (s as any).CloThinness = 3;
            (s as any).CloTopCut = 2;
            (s as any).CloSkirtShortness = 2;
            (s as any).CloDress = 1;
            (s as any).CloStyle = 5;
            (s as any).CloPrice = 3600;
          } else {
            if (String((s as any).locArgs?.[0] ?? '') === 6) {
              (s as any).CloQuality = 3;
              (s as any).CloStrength = 166875;
              (s as any).CloThinness = 3;
              (s as any).CloTopCut = 2;
              (s as any).CloSkirtShortness = 2;
              (s as any).CloDress = 1;
              (s as any).CloStyle = 5;
              (s as any).CloPrice = 3600;
            } else {
              if (String((s as any).locArgs?.[0] ?? '') === 7) {
                (s as any).CloQuality = 3;
                (s as any).CloStrength = 166875;
                (s as any).CloThinness = 3;
                (s as any).CloTopCut = 2;
                (s as any).CloSkirtShortness = 2;
                (s as any).CloDress = 1;
                (s as any).CloStyle = 5;
                (s as any).CloPrice = 3600;
              } else {
                if (String((s as any).locArgs?.[0] ?? '') === 8) {
                  (s as any).CloQuality = 4;
                  (s as any).CloStrength = 174375;
                  (s as any).CloThinness = 3;
                  (s as any).CloTopCut = 2;
                  (s as any).CloSkirtShortness = 2;
                  (s as any).CloDress = 1;
                  (s as any).CloStyle = 5;
                  (s as any).CloPrice = 3600;
                } else {
                  if (String((s as any).locArgs?.[0] ?? '') === 9) {
                    (s as any).CloQuality = 4;
                    (s as any).CloStrength = 174375;
                    (s as any).CloThinness = 3;
                    (s as any).CloTopCut = 2;
                    (s as any).CloSkirtShortness = 2;
                    (s as any).CloDress = 1;
                    (s as any).CloStyle = 5;
                    (s as any).CloPrice = 3600;
                  } else {
                    if (String((s as any).locArgs?.[0] ?? '') === 10) {
                      (s as any).CloQuality = 3;
                      (s as any).CloStrength = 166875;
                      (s as any).CloThinness = 3;
                      (s as any).CloTopCut = 2;
                      (s as any).CloSkirtShortness = 3;
                      (s as any).CloDress = 1;
                      (s as any).CloStyle = 5;
                      (s as any).CloPrice = 3600;
                    }
                  }
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

export const _attributes_materinstvo_dress: LocationDef = {
  name: '_attributes_materinstvo_dress',
  region: 'other',
  enter: enter,
};
