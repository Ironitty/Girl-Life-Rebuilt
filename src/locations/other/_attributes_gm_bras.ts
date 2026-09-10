// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: BraPrice ~ 300 * (20 + BraQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 300
  // TODO-QSP: 2: 350
  // TODO-QSP: BraQuality ranges from 1 to 2
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).BraQuality = 1;
    (s as any).BraStrength = 40000;
    (s as any).BraType = 5;
    (s as any).BraFun = 1;
    (s as any).BraThinness = 2;
    (s as any).BraPrice = 300;
    (s as any).underwear['pair'] = 1;
  } else {
    (s as any).BraQuality = 2;
    (s as any).BraStrength = 60000;
    (s as any).BraType = 9;
    (s as any).BraFun = 1;
    (s as any).BraThinness = 2;
    (s as any).BraPrice = 350;
    (s as any).underwear['pair'] = 2;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).BraQuality = 1;
      (s as any).BraStrength = 40000;
      (s as any).BraType = 5;
      (s as any).BraFun = 1;
      (s as any).BraThinness = 2;
      (s as any).BraPrice = 300;
      (s as any).underwear['pair'] = 3;
    } else {
      (s as any).BraQuality = 2;
      (s as any).BraStrength = 60000;
      (s as any).BraType = 4;
      (s as any).BraFun = 1;
      (s as any).BraThinness = 2;
      (s as any).BraPrice = 350;
      (s as any).underwear['pair'] = 4;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).BraQuality = 1;
        (s as any).BraStrength = 40000;
        (s as any).BraType = 5;
        (s as any).BraFun = 1;
        (s as any).BraThinness = 2;
        (s as any).BraPrice = 300;
        (s as any).underwear['pair'] = 5;
      } else {
        (s as any).BraQuality = 1;
        (s as any).BraStrength = 40000;
        (s as any).BraType = 2;
        (s as any).BraFun = 1;
        (s as any).BraThinness = 2;
        (s as any).BraPrice = 300;
        (s as any).underwear['pair'] = 6;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).BraQuality = 1;
          (s as any).BraStrength = 40000;
          (s as any).BraType = 5;
          (s as any).BraFun = 1;
          (s as any).BraThinness = 2;
          (s as any).BraPrice = 300;
          (s as any).underwear['pair'] = 7;
        } else {
          (s as any).BraQuality = 2;
          (s as any).BraStrength = 60000;
          (s as any).BraType = 5;
          (s as any).BraFun = 1;
          (s as any).BraThinness = 2;
          (s as any).BraPrice = 350;
          (s as any).underwear['pair'] = 8;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).BraQuality = 2;
            (s as any).BraStrength = 60000;
            (s as any).BraType = 9;
            (s as any).BraFun = 1;
            (s as any).BraThinness = 2;
            (s as any).BraPrice = 350;
            (s as any).underwear['pair'] = 9;
          } else {
            (s as any).BraQuality = 1;
            (s as any).BraStrength = 40000;
            (s as any).BraType = 9;
            (s as any).BraFun = 1;
            (s as any).BraThinness = 2;
            (s as any).BraPrice = 300;
            (s as any).underwear['pair'] = 10;
            if (((s as any).ARGS ?? 0)[0] === 11) {
              (s as any).BraQuality = 1;
              (s as any).BraStrength = 40000;
              (s as any).BraType = 9;
              (s as any).BraFun = 1;
              (s as any).BraThinness = 2;
              (s as any).BraPrice = 300;
              (s as any).underwear['pair'] = 11;
            } else {
              (s as any).BraQuality = 1;
              (s as any).BraStrength = 40000;
              (s as any).BraType = 5;
              (s as any).BraFun = 1;
              (s as any).BraThinness = 2;
              (s as any).BraPrice = 300;
              (s as any).underwear['pair'] = 12;
              if (((s as any).ARGS ?? 0)[0] === 13) {
                (s as any).BraQuality = 1;
                (s as any).BraStrength = 40000;
                (s as any).BraType = 9;
                (s as any).BraFun = 1;
                (s as any).BraThinness = 2;
                (s as any).BraPrice = 300;
                (s as any).underwear['pair'] = 13;
              } else {
                (s as any).BraQuality = 2;
                (s as any).BraStrength = 60000;
                (s as any).BraType = 9;
                (s as any).BraFun = 1;
                (s as any).BraThinness = 2;
                (s as any).BraPrice = 350;
                (s as any).underwear['pair'] = 14;
                if (((s as any).ARGS ?? 0)[0] === 15) {
                  (s as any).BraQuality = 2;
                  (s as any).BraStrength = 60000;
                  (s as any).BraType = 6;
                  (s as any).BraFun = 1;
                  (s as any).BraThinness = 2;
                  (s as any).BraPrice = 350;
                  (s as any).underwear['pair'] = 15;
                } else {
                  (s as any).BraQuality = 1;
                  (s as any).BraStrength = 40000;
                  (s as any).BraType = 9;
                  (s as any).BraFun = 1;
                  (s as any).BraThinness = 2;
                  (s as any).BraPrice = 300;
                  (s as any).underwear['pair'] = 16;
                  if (((s as any).ARGS ?? 0)[0] === 17) {
                    (s as any).BraQuality = 2;
                    (s as any).BraStrength = 60000;
                    (s as any).BraType = 9;
                    (s as any).BraFun = 1;
                    (s as any).BraThinness = 2;
                    (s as any).BraPrice = 350;
                    (s as any).underwear['pair'] = 17;
                  } else {
                    (s as any).BraQuality = 2;
                    (s as any).BraStrength = 60000;
                    (s as any).BraType = 9;
                    (s as any).BraFun = 1;
                    (s as any).BraThinness = 2;
                    (s as any).BraPrice = 350;
                    (s as any).underwear['pair'] = 18;
                    if (((s as any).ARGS ?? 0)[0] === 19) {
                      (s as any).BraQuality = 1;
                      (s as any).BraStrength = 40000;
                      (s as any).BraMaterial = 6;
                      (s as any).BraType = 4;
                      (s as any).BraFun = 1;
                      (s as any).BraThinness = 2;
                      (s as any).BraPrice = 300;
                      (s as any).underwear['pair'] = 19;
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

export const _attributes_gm_bras: LocationDef = {
  name: '_attributes_gm_bras',
  region: 'other',
  enter: enter,
};
