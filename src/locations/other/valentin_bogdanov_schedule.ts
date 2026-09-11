// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A158'] === 0) {
    ((s as any).npcLocation ?? {})['A158'] = 'Valentin not home Fri and Sat \'+func(\'time\', \'get_time_string\', 20, 0)+\' for rest of night.';
  } else {
    if (((s as any).locat ?? 0)?.['A158'] === 1) {
      ((s as any).npcLocation ?? {})['A158'] = 'Valentin in the hallway.';
    } else {
      if (((s as any).locat ?? 0)?.['A158'] === 2) {
        ((s as any).npcLocation ?? {})['A158'] = 'Valentin in Anushka\'s room.';
      } else {
        if (((s as any).locat ?? 0)?.['A158'] === 3) {
          ((s as any).npcLocation ?? {})['A158'] = 'Valentin in Radomir\'s room.';
        } else {
          if (((s as any).locat ?? 0)?.['A158'] === 4) {
            ((s as any).npcLocation ?? {})['A158'] = 'Valentin in the kitchen.';
          } else {
            if (((s as any).locat ?? 0)?.['A158'] === 5) {
              ((s as any).npcLocation ?? {})['A158'] = 'Valentin in the livingroom.';
            } else {
              if (((s as any).locat ?? 0)?.['A158'] === 6) {
                ((s as any).npcLocation ?? {})['A158'] = 'Valentin in his and Arkadi\'s room.';
              } else {
                if (((s as any).locat ?? 0)?.['A158'] === 7) {
                  ((s as any).npcLocation ?? {})['A158'] = 'Valentin in the bathroom.';
                } else {
                  if (((s as any).locat ?? 0)?.['A158'] === 8) {
                    ((s as any).npcLocation ?? {})['A158'] = 'Valentin is in the garage with the band.';
                  } else {
                    if (((s as any).locat ?? 0)?.['A158'] === 9) {
                      ((s as any).npcLocation ?? {})['A158'] = 'Valentin is at work, mechanic Mon-Fri 8 to 17.';
                    } else {
                      if (((s as any).locat ?? 0)?.['A158'] === 10) {
                        ((s as any).npcLocation ?? {})['A158'] = 'Valentin is in the garage working on his bike Mon 17-23.';
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

export const valentin_bogdanov_schedule: LocationDef = {
  name: 'valentin_bogdanov_schedule',
  region: 'other',
  enter: enter,
};
