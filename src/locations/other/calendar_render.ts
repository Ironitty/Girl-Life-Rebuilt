// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_color_idx = (((s as any).ARGS ?? 0)[1] - 1) % 20;
  if (((s as any).theme ?? 0)?.['is_dark'] === 1) {
    if (((s as any).temp_color_idx ?? 0) === 0) {
    } else {
      if (((s as any).temp_color_idx ?? 0) === 2) {
      } else {
        if (((s as any).temp_color_idx ?? 0) === 4) {
        } else {
          if (((s as any).temp_color_idx ?? 0) === 6) {
          } else {
            if (((s as any).temp_color_idx ?? 0) === 8) {
            } else {
              if (((s as any).temp_color_idx ?? 0) === 10) {
              } else {
                if (((s as any).temp_color_idx ?? 0) === 12) {
                } else {
                  if (((s as any).temp_color_idx ?? 0) === 14) {
                  } else {
                    if (((s as any).temp_color_idx ?? 0) === 16) {
                    } else {
                      if (((s as any).temp_color_idx ?? 0) === 18) {
                      }
                      if (((s as any).temp_color_idx ?? 0) === 0) {
                      } else {
                        if (((s as any).temp_color_idx ?? 0) === 2) {
                        } else {
                          if (((s as any).temp_color_idx ?? 0) === 4) {
                          } else {
                            if (((s as any).temp_color_idx ?? 0) === 6) {
                            } else {
                              if (((s as any).temp_color_idx ?? 0) === 8) {
                              } else {
                                if (((s as any).temp_color_idx ?? 0) === 10) {
                                } else {
                                  if (((s as any).temp_color_idx ?? 0) === 12) {
                                  } else {
                                    if (((s as any).temp_color_idx ?? 0) === 14) {
                                    } else {
                                      if (((s as any).temp_color_idx ?? 0) === 16) {
                                      } else {
                                        if (((s as any).temp_color_idx ?? 0) === 18) {
                                        }
                                      }
                                      return;
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

export const calendar_render: LocationDef = {
  name: 'calendar_render',
  region: 'other',
  enter: enter,
};
