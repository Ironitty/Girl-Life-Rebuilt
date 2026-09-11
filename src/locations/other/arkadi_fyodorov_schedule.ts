// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A156'] === 0) {
    ((s as any).npcLocation ?? {})['A156'] = 'Arkadi not home Fri and Sat \' + func(\'time\', \'get_time_string\', 20, 0) + \' for rest of night.';
  } else {
    if (((s as any).locat ?? 0)?.['A156'] === 1) {
      ((s as any).npcLocation ?? {})['A156'] = 'Arkadi in the hallway.';
    } else {
      if (((s as any).locat ?? 0)?.['A156'] === 2) {
        ((s as any).npcLocation ?? {})['A156'] = 'Arkadi in Anushka\'s room.';
      } else {
        if (((s as any).locat ?? 0)?.['A156'] === 3) {
          ((s as any).npcLocation ?? {})['A156'] = 'Arkadi in Radomir\'s room.';
        } else {
          if (((s as any).locat ?? 0)?.['A156'] === 4) {
            ((s as any).npcLocation ?? {})['A156'] = 'Arkadi in the kitchen.';
          } else {
            if (((s as any).locat ?? 0)?.['A156'] === 5) {
              ((s as any).npcLocation ?? {})['A156'] = 'Arkadi in the livingroom.';
            } else {
              if (((s as any).locat ?? 0)?.['A156'] === 6) {
                ((s as any).npcLocation ?? {})['A156'] = 'Arkadi in Valentin\'s and his room.';
              } else {
                if (((s as any).locat ?? 0)?.['A156'] === 7) {
                  ((s as any).npcLocation ?? {})['A156'] = 'Arkadi in the bathroom.';
                } else {
                  if (((s as any).locat ?? 0)?.['A156'] === 8) {
                    ((s as any).npcLocation ?? {})['A156'] = 'Arkadi is in the garage with the band.';
                  } else {
                    if (((s as any).locat ?? 0)?.['A156'] === 9) {
                      ((s as any).npcLocation ?? {})['A156'] = 'Arkadi is at work, mechanic Mon-Fri 8 to 17.';
                    } else {
                      if (((s as any).locat ?? 0)?.['A156'] === 10) {
                        ((s as any).npcLocation ?? {})['A156'] = 'Arkadi is in the garage working on his bike Mon 17-23.';
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

export const arkadi_fyodorov_schedule: LocationDef = {
  name: 'arkadi_fyodorov_schedule',
  region: 'other',
  enter: enter,
};
