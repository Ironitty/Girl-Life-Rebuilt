// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetRandomTemplate(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'intro_character_templates', 'set_template', $func('intro_character_templates', 'get_random_templ...
  return;
  scene.build();
}

function enterGetRandomTemplate(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = Math.floor(Math.random() * 22) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
  } else {
    if (((s as any).temp_rand ?? 0) === 2) {
    } else {
      if (((s as any).temp_rand ?? 0) === 4) {
      } else {
        if (((s as any).temp_rand ?? 0) === 6) {
        } else {
          if (((s as any).temp_rand ?? 0) === 8) {
          } else {
            if (((s as any).temp_rand ?? 0) === 10) {
            } else {
              if (((s as any).temp_rand ?? 0) === 12) {
              } else {
                if (((s as any).temp_rand ?? 0) === 14) {
                  if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
                    return;
                  }
                } else {
                  if (((s as any).temp_rand ?? 0) === 16) {
                  } else {
                    if (((s as any).temp_rand ?? 0) === 18) {
                    } else {
                      if (((s as any).temp_rand ?? 0) === 20) {
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_random_template':
      enterSetRandomTemplate(s, scene);
      break;
    case 'get_random_template':
      enterGetRandomTemplate(s, scene);
      break;
    default:
      enterSetRandomTemplate(s, scene);
      break;
  }
}

export const intro_character_templates: LocationDef = {
  name: 'intro_character_templates',
  region: 'other',
  enter: enter,
};
