// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :couple_jump
  (s as any).couple_rand = Math.floor(Math.random() * 53) + 1;
  if (((s as any).couple_rand ?? 0) === 1) {
  } else {
    if (((s as any).couple_rand ?? 0) === 3) {
    } else {
      if (((s as any).couple_rand ?? 0) === 5) {
      } else {
        if (((s as any).couple_rand ?? 0) === 7) {
        } else {
          if (((s as any).couple_rand ?? 0) === 9) {
          } else {
            if (((s as any).couple_rand ?? 0) === 11) {
            } else {
              if (((s as any).couple_rand ?? 0) === 13) {
              } else {
                if (((s as any).couple_rand ?? 0) === 15) {
                } else {
                  if (((s as any).couple_rand ?? 0) === 17) {
                  } else {
                    if (((s as any).couple_rand ?? 0) === 19) {
                    } else {
                      if (((s as any).couple_rand ?? 0) === 21) {
                      } else {
                        if (((s as any).couple_rand ?? 0) === 23) {
                        } else {
                          if (((s as any).couple_rand ?? 0) === 25) {
                          } else {
                            if (((s as any).couple_rand ?? 0) === 27) {
                            } else {
                              if (((s as any).couple_rand ?? 0) === 29) {
                              } else {
                                if (((s as any).couple_rand ?? 0) === 31) {
                                } else {
                                  if (((s as any).couple_rand ?? 0) === 33) {
                                  } else {
                                    if (((s as any).couple_rand ?? 0) === 35) {
                                    } else {
                                      if (((s as any).couple_rand ?? 0) === 37) {
                                      } else {
                                        if (((s as any).couple_rand ?? 0) === 39) {
                                        } else {
                                          if (((s as any).couple_rand ?? 0) === 41) {
                                          } else {
                                            if (((s as any).couple_rand ?? 0) === 43) {
                                            } else {
                                              if (((s as any).couple_rand ?? 0) === 45) {
                                              } else {
                                                if (((s as any).couple_rand ?? 0) === 47) {
                                                } else {
                                                  if (((s as any).couple_rand ?? 0) === 49) {
                                                  } else {
                                                    if (((s as any).couple_rand ?? 0) === 51) {
                                                    } else {
                                                      if (((s as any).couple_rand ?? 0) === 53) {
                                                      } else {
                                                        // TODO-QSP: jump 'couple_jump'
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
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const gschool_randperson: LocationDef = {
  name: 'gschool_randperson',
  region: 'other',
  enter: enter,
};
