import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloOnePiece ?? 0) === 1) {
    // TODO-QSP: jump 'flash_can_flash_end'
  }
  (s as any).temp_threshold = ((s as any).pcs_inhib ?? 0) + ((s as any).trait_vars ?? 0)?.['exhibitionist'] * 10 + (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 3) ? (5) : (0) + ((s as any).alko ?? 0) / 2;
  if (((s as any).locArgs?.[1] ?? 0) === 'bra') {
    if (((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).braworntype ?? 0) === 'none'  ||  ((s as any).PCloCoverTop ?? 0) >= 4) {
      // TODO-QSP: jump 'flash_can_flash_end'
    }
    (s as any).result = ((s as any).max ?? 0)(1, (35 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
  } else {
    if (((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).pantyworntype ?? 0) === 'none'  ||  ((s as any).PCloCoverBack ?? 0) >= 4) {
      // TODO-QSP: jump 'flash_can_flash_end'
    }
    (s as any).result = ((s as any).max ?? 0)(1, (40 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
    if (((s as any).locArgs?.[1] ?? 0) === 'panties') {
      if (((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).pantyworntype ?? 0) === 'none'  ||  ((s as any).PCloCoverFront ?? 0) >= 4) {
        // TODO-QSP: jump 'flash_can_flash_end'
      }
      (s as any).result = ((s as any).max ?? 0)(1, (40 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
    } else {
      if ((((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).braworntype ?? 0) === 'none')  ||  ((s as any).PCloCoverTop ?? 0) >= 4) {
        // TODO-QSP: jump 'flash_can_flash_end'
      }
      (s as any).result = ((s as any).max ?? 0)(1, (45 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
      if (((s as any).locArgs?.[1] ?? 0) === 'butt'  ||  ((s as any).locArgs?.[1] ?? 0) === 'butt_plug') {
        if ((((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none')  ||  ((s as any).PCloCoverBack ?? 0) >= 4) {
          // TODO-QSP: jump 'flash_can_flash_end'
        }
        (s as any).result = ((s as any).max ?? 0)(1, (50 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
      } else {
        if (((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).PCloCoverFront ?? 0) >= 4) {
          // TODO-QSP: jump 'flash_can_flash_end'
        }
        (s as any).result = ((s as any).max ?? 0)(1, (55 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
        if (((s as any).locArgs?.[1] ?? 0) === 'full') {
          if (qspFunc(s, 'flash', 'can_flash', 'tits') === 0  ||  qspFunc(s, 'flash', 'can_flash', 'butt') === 0  ||  qspFunc(s, 'flash', 'can_flash', 'pussy') === 0) {
            // TODO-QSP: jump 'flash_can_flash_end'
          }
          (s as any).result = ((s as any).max ?? 0)(1, (65 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
        } else {
          if (qspFunc(s, 'flash', 'can_flash', 'bra')  ||  qspFunc(s, 'flash', 'can_flash', 'tits')  ||  qspFunc(s, 'flash', 'can_flash', 'panties')  ||  qspFunc(s, 'flash', 'can_flash', 'pantyrear')  ||  qspFunc(s, 'flash', 'can_flash', 'butt')  ||  qspFunc(s, 'flash', 'can_flash', 'pussy')  ||  qspFunc(s, 'flash', 'can_flash', 'full')) {
            (s as any).result = 1;
          }
        }
        // TODO-QSP: :flash_can_flash_end
        if (((s as any).result ?? 0) > 4) {
          (s as any).result = 0;
        }
        return;
      }
      if (((s as any).locArgs?.[0] ?? 0) === 'butt'  ||  ((s as any).locArgs?.[0] ?? 0) === 'butt_plug') {
        // TODO-QSP: gs 'flash', 'exhibitionism', 2, $ARGS[1], ARGS[2]
        (s as any).flashVars['text_before'] = 'You glance around to see who is in the area, then you pull \' + iif(PCloSkirt > 0, \'up the back of your skirt\', \'down the back of your pants\') + \' to show off your butt. Most people don\'t notice but a few do, some smile, others frown or shake their head in disgust.';
        (s as any).flashVars['text_after'] = 'You \' + iif(PCloSkirt > 0, \'lower the skirt back in place\', \'pull your pants back up\') + \', feeling the thrill of excitement running down your spine.';
        if (((s as any).analPlugIn ?? 0) === 1  ||  ((s as any).locArgs?.[0] ?? 0) === 'butt_plug') {
          qspCall(s, 'flash', 'get_image', 'butt_plug', ((s as any).locArgs?.[1] ?? 0));
          // TODO-QSP: gs 'flash', 'generate_output', 'butt_plug', $ARGS[1], 'flash', ARGS[2], ARGS[3]
        } else {
          qspCall(s, 'flash', 'get_image', 'butt', ((s as any).locArgs?.[1] ?? 0));
          // TODO-QSP: gs 'flash', 'generate_output', 'butt', $ARGS[1], 'flash', ARGS[2], ARGS[3]
        }
      }
    }
  }
  scene.build();
}

export const flash: LocationDef = {
  name: 'flash',
  region: 'other',
  enter: enter,
};
