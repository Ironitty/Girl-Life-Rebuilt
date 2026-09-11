// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A154'] === 0) {
    ((s as any).npcLocation ?? {})['A154'] = 'Radomir not home Fri and Sat \' + func(\'time\', \'get_time_string\', 20, 0) + \' for rest of night.';
  } else {
    if (((s as any).locat ?? 0)?.['A154'] === 1) {
      ((s as any).npcLocation ?? {})['A154'] = 'Radomir in the hallway.';
    } else {
      if (((s as any).locat ?? 0)?.['A154'] === 2) {
        ((s as any).npcLocation ?? {})['A154'] = 'Radomir in Anushka\'s room.';
      } else {
        if (((s as any).locat ?? 0)?.['A154'] === 3) {
          ((s as any).npcLocation ?? {})['A154'] = 'Radomir in Radomir\'s room.';
        } else {
          if (((s as any).locat ?? 0)?.['A154'] === 4) {
            ((s as any).npcLocation ?? {})['A154'] = 'Radomir in the kitchen.';
          } else {
            if (((s as any).locat ?? 0)?.['A154'] === 5) {
              ((s as any).npcLocation ?? {})['A154'] = 'Radomir in the livingroom.';
            } else {
              if (((s as any).locat ?? 0)?.['A154'] === 6) {
                ((s as any).npcLocation ?? {})['A154'] = 'Radomir in Valentin\'s and Arkadi\'s room.';
              } else {
                if (((s as any).locat ?? 0)?.['A154'] === 7) {
                  ((s as any).npcLocation ?? {})['A154'] = 'Radomir in the bathroom.';
                } else {
                  if (((s as any).locat ?? 0)?.['A154'] === 8) {
                    ((s as any).npcLocation ?? {})['A154'] = 'Radomir is in the garage with the band.';
                  } else {
                    if (((s as any).locat ?? 0)?.['A154'] === 9) {
                      ((s as any).npcLocation ?? {})['A154'] = 'Radomir is at work, mechanic Mon-Fri 8 to 17.';
                    } else {
                      if (((s as any).locat ?? 0)?.['A154'] === 10) {
                        ((s as any).npcLocation ?? {})['A154'] = 'Radomir is in the garage working on his bike Mon 17-23.';
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

export const radomir_popov_schedule: LocationDef = {
  name: 'radomir_popov_schedule',
  region: 'other',
  enter: enter,
};
