// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: PanPrice ~ 1000 * (20 + PanQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 2: 1100
  // TODO-QSP: 3: 1150
  // TODO-QSP: PanQuality ranges from 2 to 3
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).PanType = 1;
    (s as any).PanFun = 2;
    (s as any).PanSport = 1;
    (s as any).PanQuality = 3;
    (s as any).PanStrength = 80000;
    (s as any).PanThinness = 3;
    (s as any).PanPrice = 1150;
    (s as any).underwear['pair'] = 1;
  } else {
    (s as any).PanType = 1;
    (s as any).PanFun = 2;
    (s as any).PanSport = 1;
    (s as any).PanQuality = 2;
    (s as any).PanStrength = 60000;
    (s as any).PanThinness = 2;
    (s as any).PanPrice = 1100;
    (s as any).underwear['pair'] = 2;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).PanType = 1;
      (s as any).PanFun = 2;
      (s as any).PanSport = 1;
      (s as any).PanQuality = 3;
      (s as any).PanStrength = 80000;
      (s as any).PanThinness = 3;
      (s as any).PanPrice = 1150;
      (s as any).underwear['pair'] = 3;
    } else {
      (s as any).PanType = 1;
      (s as any).PanFun = 2;
      (s as any).PanSport = 1;
      (s as any).PanQuality = 3;
      (s as any).PanStrength = 80000;
      (s as any).PanThinness = 3;
      (s as any).PanPrice = 1150;
      (s as any).underwear['pair'] = 4;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).PanType = 2;
        (s as any).PanFun = 2;
        (s as any).PanSport = 1;
        (s as any).PanQuality = 3;
        (s as any).PanStrength = 80000;
        (s as any).PanThinness = 3;
        (s as any).PanPrice = 1150;
        (s as any).underwear['pair'] = 5;
      } else {
        (s as any).PanType = 1;
        (s as any).PanFun = 2;
        (s as any).PanSport = 1;
        (s as any).PanQuality = 2;
        (s as any).PanStrength = 60000;
        (s as any).PanThinness = 4;
        (s as any).PanPrice = 1100;
        (s as any).underwear['pair'] = 6;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).PanType = 1;
          (s as any).PanFun = 2;
          (s as any).PanSport = 1;
          (s as any).PanQuality = 3;
          (s as any).PanStrength = 80000;
          (s as any).PanThinness = 2;
          (s as any).PanPrice = 1150;
          (s as any).underwear['pair'] = 7;
        } else {
          (s as any).PanType = 2;
          (s as any).PanFun = 2;
          (s as any).PanSport = 1;
          (s as any).PanQuality = 2;
          (s as any).PanStrength = 60000;
          (s as any).PanThinness = 2;
          (s as any).PanPrice = 1100;
          (s as any).underwear['pair'] = 8;
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
