// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: PursePrice ~ 2000 * (20 + PurseQUality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 2100
  // TODO-QSP: 2: 2200
  // TODO-QSP: 3: 2300
  // TODO-QSP: 4: 2400
  // TODO-QSP: 5: 2500
  // TODO-QSP: 6: 2600
  // TODO-QSP: 7: 2700
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).PursePrice = 2300;
    (s as any).PurseQuality = 3;
    (s as any).PurseStrength = 3;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 2) {
      (s as any).PursePrice = 2300;
      (s as any).PurseQuality = 3;
      (s as any).PurseStrength = 2;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 3) {
        (s as any).PursePrice = 2300;
        (s as any).PurseQuality = 3;
        (s as any).PurseStrength = 2;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 4) {
          (s as any).PursePrice = 2300;
          (s as any).PurseQuality = 3;
          (s as any).PurseStrength = 2;
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 5) {
            (s as any).PursePrice = 2300;
            (s as any).PurseQuality = 3;
            (s as any).PurseStrength = 2;
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 6) {
              (s as any).PursePrice = 2300;
              (s as any).PurseQuality = 3;
              (s as any).PurseStrength = 2;
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 7) {
                (s as any).PursePrice = 2300;
                (s as any).PurseQuality = 3;
                (s as any).PurseStrength = 2;
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 8) {
                  (s as any).PursePrice = 2300;
                  (s as any).PurseQuality = 3;
                  (s as any).PurseStrength = 2;
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 9) {
                    (s as any).PursePrice = 2300;
                    (s as any).PurseQuality = 4;
                    (s as any).PurseStrength = 3;
                  } else {
                    if (((s as any).locArgs?.[0] ?? 0) === 10) {
                      (s as any).PursePrice = 2300;
                      (s as any).PurseQuality = 3;
                      (s as any).PurseStrength = 3;
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 11) {
                        (s as any).PursePrice = 2300;
                        (s as any).PurseQuality = 3;
                        (s as any).PurseStrength = 3;
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 12) {
                          (s as any).PursePrice = 2300;
                          (s as any).PurseQuality = 4;
                          (s as any).PurseStrength = 3;
                        } else {
                          if (((s as any).locArgs?.[0] ?? 0) === 13) {
                            (s as any).PursePrice = 2300;
                            (s as any).PurseQuality = 3;
                            (s as any).PurseStrength = 3;
                          } else {
                            if (((s as any).locArgs?.[0] ?? 0) === 14) {
                              (s as any).PursePrice = 2300;
                              (s as any).PurseQuality = 3;
                              (s as any).PurseStrength = 3;
                            } else {
                              if (((s as any).locArgs?.[0] ?? 0) === 15) {
                                (s as any).PursePrice = 2300;
                                (s as any).PurseQuality = 3;
                                (s as any).PurseStrength = 3;
                              } else {
                                if (((s as any).locArgs?.[0] ?? 0) === 16) {
                                  (s as any).PursePrice = 2300;
                                  (s as any).PurseQuality = 4;
                                  (s as any).PurseStrength = 3;
                                } else {
                                  if (((s as any).locArgs?.[0] ?? 0) === 17) {
                                    (s as any).PursePrice = 2300;
                                    (s as any).PurseQuality = 3;
                                    (s as any).PurseStrength = 3;
                                  } else {
                                    if (((s as any).locArgs?.[0] ?? 0) === 18) {
                                      (s as any).PursePrice = 2300;
                                      (s as any).PurseQuality = 3;
                                      (s as any).PurseStrength = 4;
                                    } else {
                                      if (((s as any).locArgs?.[0] ?? 0) === 19) {
                                        (s as any).PursePrice = 2300;
                                        (s as any).PurseQuality = 4;
                                        (s as any).PurseStrength = 2;
                                      } else {
                                        if (((s as any).locArgs?.[0] ?? 0) === 20) {
                                          (s as any).PursePrice = 2300;
                                          (s as any).PurseQuality = 4;
                                          (s as any).PurseStrength = 2;
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

export const _attributes_bomba_purses: LocationDef = {
  name: '_attributes_bomba_purses',
  region: 'other',
  enter: enter,
};
