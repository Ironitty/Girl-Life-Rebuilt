// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[0] ?? '') === 1) {
    (s as any).PanType = 1;
    (s as any).PanFun = 2;
    (s as any).PanSport = 1;
    (s as any).PanQuality = 3;
    (s as any).PanStrength = 80000;
    (s as any).PanThinness = 3;
    (s as any).PanPrice = 1150;
    ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 1;
  } else {
    if (String((s as any).locArgs?.[0] ?? '') === 2) {
      (s as any).PanType = 1;
      (s as any).PanFun = 2;
      (s as any).PanSport = 1;
      (s as any).PanQuality = 2;
      (s as any).PanStrength = 60000;
      (s as any).PanThinness = 2;
      (s as any).PanPrice = 1100;
      ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 2;
    } else {
      if (String((s as any).locArgs?.[0] ?? '') === 3) {
        (s as any).PanType = 1;
        (s as any).PanFun = 2;
        (s as any).PanSport = 1;
        (s as any).PanQuality = 3;
        (s as any).PanStrength = 80000;
        (s as any).PanThinness = 3;
        (s as any).PanPrice = 1150;
        ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 3;
      } else {
        if (String((s as any).locArgs?.[0] ?? '') === 4) {
          (s as any).PanType = 1;
          (s as any).PanFun = 2;
          (s as any).PanSport = 1;
          (s as any).PanQuality = 3;
          (s as any).PanStrength = 80000;
          (s as any).PanThinness = 3;
          (s as any).PanPrice = 1150;
          ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 4;
        } else {
          if (String((s as any).locArgs?.[0] ?? '') === 5) {
            (s as any).PanType = 2;
            (s as any).PanFun = 2;
            (s as any).PanSport = 1;
            (s as any).PanQuality = 3;
            (s as any).PanStrength = 80000;
            (s as any).PanThinness = 3;
            (s as any).PanPrice = 1150;
            ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 5;
          } else {
            if (String((s as any).locArgs?.[0] ?? '') === 6) {
              (s as any).PanType = 1;
              (s as any).PanFun = 2;
              (s as any).PanSport = 1;
              (s as any).PanQuality = 2;
              (s as any).PanStrength = 60000;
              (s as any).PanThinness = 4;
              (s as any).PanPrice = 1100;
              ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 6;
            } else {
              if (String((s as any).locArgs?.[0] ?? '') === 7) {
                (s as any).PanType = 1;
                (s as any).PanFun = 2;
                (s as any).PanSport = 1;
                (s as any).PanQuality = 3;
                (s as any).PanStrength = 80000;
                (s as any).PanThinness = 2;
                (s as any).PanPrice = 1150;
                ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 7;
              } else {
                if (String((s as any).locArgs?.[0] ?? '') === 8) {
                  (s as any).PanType = 2;
                  (s as any).PanFun = 2;
                  (s as any).PanSport = 1;
                  (s as any).PanQuality = 2;
                  (s as any).PanStrength = 60000;
                  (s as any).PanThinness = 2;
                  (s as any).PanPrice = 1100;
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

export const _attributes_danilovich_panties: LocationDef = {
  name: '_attributes_danilovich_panties',
  region: 'other',
  enter: enter,
};
