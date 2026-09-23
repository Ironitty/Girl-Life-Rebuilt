import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCanFlash(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloOnePiece ?? 0) === 1) {
    // TODO-QSP: jump 'flash_can_flash_end'
  }
  (s as any).temp_threshold = ((s as any).pcs_inhib ?? 0) + (((s as any).trait_vars ?? {})?.['exhibitionist'] ?? 0) * 10 + ((((s as any).trait_vars ?? 0)?.['exhibitionist'] === 3) ? (5) : (0)) + ((s as any).alko ?? 0) / 2;
  if (String((s as any).locArgs?.[1] ?? '') === 'bra') {
    if (((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).braworntype ?? 0) === 'none'  ||  ((s as any).PCloCoverTop ?? 0) >= 4) {
      // TODO-QSP: jump 'flash_can_flash_end'
    }
    (s as any).result = Math.max(1, (35 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'pantyrear') {
      if (((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).pantyworntype ?? 0) === 'none'  ||  ((s as any).PCloCoverBack ?? 0) >= 4) {
        // TODO-QSP: jump 'flash_can_flash_end'
      }
      (s as any).result = Math.max(1, (40 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'panties') {
        if (((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).pantyworntype ?? 0) === 'none'  ||  ((s as any).PCloCoverFront ?? 0) >= 4) {
          // TODO-QSP: jump 'flash_can_flash_end'
        }
        (s as any).result = Math.max(1, (40 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'tits') {
          if ((((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).braworntype ?? 0) === 'none')  ||  ((s as any).PCloCoverTop ?? 0) >= 4) {
            // TODO-QSP: jump 'flash_can_flash_end'
          }
          (s as any).result = Math.max(1, (45 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'butt'  ||  String((s as any).locArgs?.[1] ?? '') === 'butt_plug') {
            if ((((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none')  ||  ((s as any).PCloCoverBack ?? 0) >= 4) {
              // TODO-QSP: jump 'flash_can_flash_end'
            }
            (s as any).result = Math.max(1, (50 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'pussy') {
              if (((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).PCloCoverFront ?? 0) >= 4) {
                // TODO-QSP: jump 'flash_can_flash_end'
              }
              (s as any).result = Math.max(1, (55 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'full') {
                if (qspFunc(s, 'flash', 'can_flash', 'tits') === 0  ||  qspFunc(s, 'flash', 'can_flash', 'butt') === 0  ||  qspFunc(s, 'flash', 'can_flash', 'pussy') === 0) {
                  // TODO-QSP: jump 'flash_can_flash_end'
                }
                (s as any).result = Math.max(1, (65 - ((((s as any).temp_threshold ?? 0) / 5) * 5)) / 5 + 1);
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === ''  ||  String((s as any).locArgs?.[1] ?? '') === 'any') {
                  if (qspFunc(s, 'flash', 'can_flash', 'bra')  ||  qspFunc(s, 'flash', 'can_flash', 'tits')  ||  qspFunc(s, 'flash', 'can_flash', 'panties')  ||  qspFunc(s, 'flash', 'can_flash', 'pantyrear')  ||  qspFunc(s, 'flash', 'can_flash', 'butt')  ||  qspFunc(s, 'flash', 'can_flash', 'pussy')  ||  qspFunc(s, 'flash', 'can_flash', 'full')) {
                    (s as any).result = 1;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: :flash_can_flash_end
  if (((s as any).result ?? 0) > 4) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetImage(s: GameState, scene: SceneBuilder): void {
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_ind_bra'] = 3;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_ind_tits'] = 12;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_ind_panty'] = 4;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_ind_pantyrear'] = 12;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_ind_pussy'] = 8;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_ind_pussy_hairy'] = 9;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_ind_butt'] = 7;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_ind_butt_plug'] = 0;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_ind_full'] = 5;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_ind_full_hairy'] = 7;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_out_bra'] = 4;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_out_tits'] = 20;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_out_panty'] = 18;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_out_pantyrear'] = 8;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_out_pussy'] = 19;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_out_pussy_hairy'] = 9;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_out_butt'] = 9;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_out_butt_plug'] = 8;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_out_full'] = 13;
  ((s as any).flashVars = (s as any).flashVars ?? {})['dress_out_full_hairy'] = 11;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_ind_bra'] = 6;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_ind_tits'] = 19;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_ind_panty'] = 1;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_ind_pantyrear'] = 3;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_ind_pussy'] = 4;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_ind_pussy_hairy'] = 3;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_ind_butt'] = 6;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_ind_butt_plug'] = 0;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_ind_full'] = 1;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_ind_full_hairy'] = 1;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_out_bra'] = 5;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_out_tits'] = 19;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_out_panty'] = 6;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_out_pantyrear'] = 10;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_out_pussy'] = 11;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_out_pussy_hairy'] = 8;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_out_butt'] = 19;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_out_butt_plug'] = 6;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_out_full'] = 9;
  ((s as any).flashVars = (s as any).flashVars ?? {})['pants_out_full_hairy'] = 6;
  ((s as any).flashVars = (s as any).flashVars ?? {})['image'] = 'images/pc/activities/flashing/';
  (s as any).temp_id_text = '';
  if (((s as any).PCloSkirt ?? 0) > 0) {
    // TODO-QSP: $temp_id_text += 'dress_'
    ((s as any).flashVars = (s as any).flashVars ?? {})['image'] = ((s as any).flashVars['image'] ?? 0) + ('dress/');
  } else {
    // TODO-QSP: $temp_id_text += 'pants_'
    ((s as any).flashVars = (s as any).flashVars ?? {})['image'] = ((s as any).flashVars['image'] ?? 0) + ('pants/');
  }
  if (String((s as any).locArgs?.[2] ?? '') === 'inside'  ||  String((s as any).locArgs?.[2] ?? '') === 'indoors') {
    // TODO-QSP: $temp_id_text += 'ind_'
    ((s as any).flashVars = (s as any).flashVars ?? {})['image'] = ((s as any).flashVars['image'] ?? 0) + ('inside/');
    if (String((s as any).locArgs?.[1] ?? '') === 'butt_plug') {
      ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 'butt';
    }
  } else {
    // TODO-QSP: $temp_id_text += 'out_'
    ((s as any).flashVars = (s as any).flashVars ?? {})['image'] = ((s as any).flashVars['image'] ?? 0) + ('outside/');
  }
  // TODO-QSP: $temp_id_text += $ARGS[1]
  ((s as any).flashVars = (s as any).flashVars ?? {})['image'] = ((s as any).flashVars['image'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  ((s as any).flashVars = (s as any).flashVars ?? {})['image'] = ((s as any).flashVars['image'] ?? 0) + ('/');
  if ((String((s as any).locArgs?.[1] ?? '') === 'pussy'  ||  String((s as any).locArgs?.[1] ?? '') === 'full')  &&  ((s as any).pcs_pubes ?? 0) > 20) {
    // TODO-QSP: $temp_id_text += '_hairy'
    ((s as any).flashVars = (s as any).flashVars ?? {})['image'] = ((s as any).flashVars['image'] ?? 0) + ('hairy');
  }
  ((s as any).flashVars = (s as any).flashVars ?? {})['rand'] = (Math.floor(Math.random() * (((s as any).flashVars ?? 0)?.[String((s as any).temp_id_text ?? 0)] - 1 + 1)) + (1));
  ((s as any).flashVars = (s as any).flashVars ?? {})['image'] = ((s as any).flashVars['image'] ?? 0) + (String(((s as any).flashVars ?? 0)?.['rand']) + '.jpg');
  // TODO-QSP: end
  scene.build();
}

function enterDisplayImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).flash_video ?? 0) !== '') {
    scene.img(`${((s as any).flash_video ?? '')}`);
  } else {
    if (((s as any).flash_image ?? 0) !== '') {
      scene.img(`${((s as any).flash_image ?? '')}`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGenerateOutput(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[5] ?? '') < 1) {
    // TODO-QSP: $flash_text[0] = $flashVars['text_before']
    // TODO-QSP: $flash_text[1] = $flashVars['text_after']
  }
  if (String((s as any).locArgs?.[5] ?? '') !== 1) {
    if (((s as any).flash_image ?? 0) === '') {
      (s as any).flash_image = ((s as any).flashVars ?? 0)?.['image'];
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplayImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).flash_text ?? 0)[0] !== '') {
    // TODO-QSP: dynamic text: l $flash_text[0]
    scene.text('l $flash_text[0]');
  }
  // TODO-QSP: gs 'arousal', $ARGS[3], ARGS[4], 'exhibitionism', $flash_arousal[0], $flash_arousal[1], $flash_arous...
  if (String((s as any).locArgs?.[5] ?? '') !== 1) {
    // TODO-QSP: gs 'flash', 'events', $ARGS[1], $ARGS[2], ARGS[4], ARGS[5]
  }
  if (((s as any).flash_text ?? 0)[1] !== '') {
    // TODO-QSP: dynamic text: l $flash_text[1]
    scene.text('l $flash_text[1]');
  }
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: gs 'flash', 'cleanup', ARGS[5]
  // TODO-QSP: end
  scene.build();
}

function enterBra(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'flash', 'exhibitionism', 1, $ARGS[1], ARGS[2]
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_before'] = 'You glance around to see who is in the area, then you ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('pull down') : ('lift up')) + ' your top and expose your bra clad breasts to the world. Most people don\'t notice but a few do, some smile, others frown or shake their head in disgust.';
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_after'] = 'You ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('lift your top back up') : ('pull your top back down')) + ', feeling the thrill of excitement running down your spine.';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bra', ((s as any).locArgs?.[1] ?? 0)]; enterGetImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'flash', 'generate_output', 'bra', $ARGS[1], 'flashlite', ARGS[2], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterTits(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'flash', 'exhibitionism', 1, $ARGS[1], ARGS[2]
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_before'] = 'You glance around to see who is in the area, then you ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('pull down') : ('lift up')) + ' your top and expose your bare breasts to the world. Most people don\'t notice but a few do, some smile, others frown or shake their head in disgust.';
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_after'] = 'You ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('lift your top back up') : ('pull your top back down')) + ', feeling the thrill of excitement running down your spine.';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'tits', ((s as any).locArgs?.[1] ?? 0)]; enterGetImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'flash', 'generate_output', 'tits', $ARGS[1], 'flash', ARGS[2], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterPanties(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'flash', 'exhibitionism', 2, $ARGS[1], ARGS[2]
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_before'] = 'You glance around to see who is in the area, then you ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('lift the front of your skirt') : ('pull down the front of your pants')) + ' to show off your panties. Most people don\'t notice but a few do, some smile, others frown or shake their head in disgust.';
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_after'] = 'You ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('lower the skirt back in place') : ('pull your pants back up')) + ', feeling the thrill of excitement running down your spine.';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'panty', ((s as any).locArgs?.[1] ?? 0)]; enterGetImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'flash', 'generate_output', 'panty', $ARGS[1], 'flash', ARGS[2], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterPantyrear(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'flash', 'exhibitionism', 2, $ARGS[1], ARGS[2]
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_before'] = 'You glance around to see who is in the area, then you pull ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('up your skirt') : ('down the back of your pants')) + ' to show off your panty-clad butt. Most people don\'t notice but a few do, some smile, others frown or shake their head in disgust.';
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_after'] = 'You ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('lower the skirt back in place') : ('pull your pants back up')) + ', feeling the thrill of excitement running down your spine.';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pantyrear', ((s as any).locArgs?.[1] ?? 0)]; enterGetImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'flash', 'generate_output', 'pantyrear', $ARGS[1], 'flash', ARGS[2], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterButt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'flash', 'exhibitionism', 2, $ARGS[1], ARGS[2]
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_before'] = 'You glance around to see who is in the area, then you pull ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('up the back of your skirt') : ('down the back of your pants')) + ' to show off your butt. Most people don\'t notice but a few do, some smile, others frown or shake their head in disgust.';
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_after'] = 'You ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('lower the skirt back in place') : ('pull your pants back up')) + ', feeling the thrill of excitement running down your spine.';
  if (((s as any).analPlugIn ?? 0) === 1  ||  String((s as any).locArgs?.[0] ?? '') === 'butt_plug') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'butt_plug', ((s as any).locArgs?.[1] ?? 0)]; enterGetImage(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: gs 'flash', 'generate_output', 'butt_plug', $ARGS[1], 'flash', ARGS[2], ARGS[3]
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'butt', ((s as any).locArgs?.[1] ?? 0)]; enterGetImage(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: gs 'flash', 'generate_output', 'butt', $ARGS[1], 'flash', ARGS[2], ARGS[3]
  }
  // TODO-QSP: end
  scene.build();
}

function enterButtPlug(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'flash', 'exhibitionism', 2, $ARGS[1], ARGS[2]
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_before'] = 'You glance around to see who is in the area, then you pull ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('up the back of your skirt') : ('down the back of your pants')) + ' to show off your butt. Most people don\'t notice but a few do, some smile, others frown or shake their head in disgust.';
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_after'] = 'You ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('lower the skirt back in place') : ('pull your pants back up')) + ', feeling the thrill of excitement running down your spine.';
  if (((s as any).analPlugIn ?? 0) === 1  ||  String((s as any).locArgs?.[0] ?? '') === 'butt_plug') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'butt_plug', ((s as any).locArgs?.[1] ?? 0)]; enterGetImage(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: gs 'flash', 'generate_output', 'butt_plug', $ARGS[1], 'flash', ARGS[2], ARGS[3]
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'butt', ((s as any).locArgs?.[1] ?? 0)]; enterGetImage(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: gs 'flash', 'generate_output', 'butt', $ARGS[1], 'flash', ARGS[2], ARGS[3]
  }
  // TODO-QSP: end
  scene.build();
}

function enterPussy(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'flash', 'exhibitionism', 3, $ARGS[1], ARGS[2]
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_before'] = 'You glance around to see who is in the area, then you pull ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('up the front of your skirt') : ('down the front of your pants')) + ' to show off your pussy. Most people don\'t notice but a few do, some smile, others frown or shake their head in disgust.';
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_after'] = 'You ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('lower the skirt back in place') : ('pull your pants back up')) + ', feeling the thrill of excitement running down your spine.';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pussy', ((s as any).locArgs?.[1] ?? 0)]; enterGetImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'flash', 'generate_output', 'pussy', $ARGS[1], 'flash', ARGS[2], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterFull(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'flash', 'exhibitionism', 3, $ARGS[1], ARGS[2]
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_before'] = 'Making sure there are no children around and it\'s not too busy you ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('lift your skirt and top') : ('lower your pants and lift your top')) + ' to expose both your pussy and breasts. Most people who see you are shocked but some look at you admiringly.';
  ((s as any).flashVars = (s as any).flashVars ?? {})['text_after'] = 'You quickly cover up again enjoying a buzz of excitement.';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'full', ((s as any).locArgs?.[1] ?? 0)]; enterGetImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'flash', 'generate_output', 'full', $ARGS[1], 'flash', ARGS[2], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterExhibitionism(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'tits') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 1;
  } else {
    if (((String(';panties;pantyrear;butt;butt_plug').indexOf(String(';' + ((s as any).locArgs?.[1] ?? 0) + ';'))) + 1)) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 2;
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'pussy'  ||  String((s as any).locArgs?.[1] ?? '') === 'full') {
        ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 3;
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') < 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 1;
  }
  if (String((s as any).locArgs?.[3] ?? '') < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = -((s as any).locArgs?.[3] ?? 0);
  }
  if (String((s as any).locArgs?.[3] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = 1;
  }
  ((s as any).temp_rand = (s as any).temp_rand ?? {})[1] = 1 + ((((s as any).locArgs?.[3] ?? 0) - 1) / 5);
  (s as any).temp_rand = (Math.floor(Math.random() * (59 - 0 + 1)) + (0));
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = ((s as any).trait_vars['exhibitionist_exp'] ?? 0) + (1);
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    }
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    }
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 3) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    }
    if (((s as any).temp_rand ?? 0) < 8) {
      qspCall(s, 'fame', '', ((s as any).region ?? 0), 'flash', 'tiny');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 2) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = ((s as any).trait_vars['exhibitionist_exp'] ?? 0) + (2);
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      }
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 2) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
      }
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 3) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (30);
      }
      if (((s as any).temp_rand ?? 0) < 4) {
        qspCall(s, 'fame', '', ((s as any).region ?? 0), 'flash', 'small');
      } else {
        if (((s as any).temp_rand ?? 0) < 8) {
          qspCall(s, 'fame', '', ((s as any).region ?? 0), 'flash', 'tiny');
        }
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 3) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = ((s as any).trait_vars['exhibitionist_exp'] ?? 0) + (3);
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
        }
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 2) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (25);
        }
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 3) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (40);
        }
        if (((s as any).temp_rand ?? 0) < 2) {
          qspCall(s, 'fame', '', ((s as any).region ?? 0), 'flash', 'medium');
        } else {
          if (((s as any).temp_rand ?? 0) < 4) {
            qspCall(s, 'fame', '', ((s as any).region ?? 0), 'flash', 'small');
          } else {
            if (((s as any).temp_rand ?? 0) < 8) {
              qspCall(s, 'fame', '', ((s as any).region ?? 0), 'flash', 'tiny');
            }
          }
        }
      } else {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = ((s as any).trait_vars['exhibitionist_exp'] ?? 0) + (4);
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
        }
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 2) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (40);
        }
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 3) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (80);
        }
        if (((s as any).temp_rand ?? 0) < 1) {
          qspCall(s, 'fame', '', ((s as any).region ?? 0), 'flash', 'large');
        } else {
          if (((s as any).temp_rand ?? 0) < 2) {
            qspCall(s, 'fame', '', ((s as any).region ?? 0), 'flash', 'medium');
          } else {
            if (((s as any).temp_rand ?? 0) < 4) {
              qspCall(s, 'fame', '', ((s as any).region ?? 0), 'flash', 'small');
            } else {
              if (((s as any).temp_rand ?? 0) < 8) {
                qspCall(s, 'fame', '', ((s as any).region ?? 0), 'flash', 'tiny');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCleanup(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') !== 1) {
    // TODO-QSP: killvar 'flashVars'
  }
  // TODO-QSP: end
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'blackmailer', 'init_check', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterParkGetActs(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'flash', 'can_flash')) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Flash in the park (' + String(qspFunc(s, 'time', 'get_time_string', 0, 5) ?? '') + ')', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'full', 'entire body']; enterParkGetSingleAct(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'pussy', 'pussy']; enterParkGetSingleAct(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'butt', 'butt']; enterParkGetSingleAct(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'tits', 'tits']; enterParkGetSingleAct(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'panties', 'panties from the front']; enterParkGetSingleAct(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'pantyrear', 'panties from the back']; enterParkGetSingleAct(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'bra', 'bra']; enterParkGetSingleAct(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Go back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterParkGetSingleAct(s: GameState, scene: SceneBuilder): void {
  (s as any).can_flash_res = qspFunc(s, 'flash', 'can_flash', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).can_flash_res ?? 0) === 1) {
    scene.actions([
      { label: 'Flash your  [+$ARGS[2]]', goto: ['flash', 'quick_park_flash', 'ARGS[1]'] },
    ]);
  } else {
    if (((s as any).can_flash_res ?? 0) > 1) {
      if (((s as any).can_flash_res ?? 0) === 2) {
        qspCall(s, 'willpower', 'exhib', 'self', 'easy');
      } else {
        if (((s as any).can_flash_res ?? 0) === 3) {
          qspCall(s, 'willpower', 'exhib', 'self');
        } else {
          if (((s as any).can_flash_res ?? 0) === 4) {
            qspCall(s, 'willpower', 'exhib', 'self', 'hard');
          }
        }
      }
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Flash your ' + String(((s as any).locArgs?.[2] ?? '') ?? ''), handler: (st: GameState) => {
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      s.scene = { ...s.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
    } else {
      qspCall(st, 'willpower', 'pay', 'self');
      qspCall(st, 'stat', '');
      // TODO-QSP: gt 'flash', 'quick_park_flash', $ARGS[1]
    }
  } },
      ]);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterParkDoFlash(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'bra'  ||  String((s as any).locArgs?.[1] ?? '') === 'panties'  ||  String((s as any).locArgs?.[1] ?? '') === 'pantyrear') {
    (s as any).flash_heat = ((s as any).flash_heat ?? 0) + (Math.min(90, ((s as any).flash_heat ?? 0) + 8));
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'tits'  ||  String((s as any).locArgs?.[1] ?? '') === 'butt') {
      (s as any).flash_heat = ((s as any).flash_heat ?? 0) + (Math.min(90, ((s as any).flash_heat ?? 0) + 12));
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'pussy') {
        (s as any).flash_heat = ((s as any).flash_heat ?? 0) + (Math.min(90, ((s as any).flash_heat ?? 0) + 16));
      } else {
        (s as any).flash_heat = ((s as any).flash_heat ?? 0) + (Math.min(90, ((s as any).flash_heat ?? 0) + 20));
      }
    }
  }
  if ((Math.floor(Math.random() * 100) + 1) < ((s as any).flash_heat ?? 0)) {
    (s as any).flash_heat_long = Math.min(100, ((s as any).flash_heat_long ?? 0) + 10);
    (s as any).temp_rand = ((Math.floor(Math.random() * 100) + 1) + ((s as any).flash_heat_long ?? 0)) / 2;
    if (((s as any).hour ?? 0) >= 22  ||  ((s as any).hour ?? 0) < 6) {
      if (((s as any).temp_rand ?? 0) <= 30) {
        (s as any).flash_heat_long = Math.min(100, ((s as any).flash_heat_long ?? 0) + 5);
        qspGoto(s, 'flash', 'park_bad_scenario', 'grope');
      } else {
        if (((s as any).temp_rand ?? 0) <= 40) {
          (s as any).flash_heat_long = Math.max(0, ((s as any).flash_heat_long ?? 0) - 5);
          qspGoto(s, 'flash', 'park_bad_scenario', 'police');
        } else {
          if (((s as any).temp_rand ?? 0) <= 75) {
            (s as any).flash_heat_long = Math.max(0, ((s as any).flash_heat_long ?? 0) - 10);
            qspGoto(s, 'flash', 'park_bad_scenario', 'rapist');
          } else {
            (s as any).flash_heat_long = Math.max(0, ((s as any).flash_heat_long ?? 0) - 15);
            qspGoto(s, 'flash', 'park_bad_scenario', 'gangrape');
          }
        }
      }
    } else {
      if (((s as any).temp_rand ?? 0) <= 25) {
        (s as any).flash_heat_long = Math.min(100, ((s as any).flash_heat_long ?? 0) + 5);
        qspGoto(s, 'flash', 'park_bad_scenario', 'comment');
      } else {
        if (((s as any).temp_rand ?? 0) <= 50) {
          (s as any).flash_heat_long = Math.min(100, ((s as any).flash_heat_long ?? 0) + 3);
          qspGoto(s, 'flash', 'park_bad_scenario', 'grope');
        } else {
          if (((s as any).temp_rand ?? 0) <= 80) {
            (s as any).flash_heat_long = Math.max(0, ((s as any).flash_heat_long ?? 0) - 5);
            qspGoto(s, 'flash', 'park_bad_scenario', 'police');
          } else {
            (s as any).flash_heat_long = Math.max(0, ((s as any).flash_heat_long ?? 0) - 10);
            qspGoto(s, 'flash', 'park_bad_scenario', 'rapist');
          }
        }
      }
    }
  } else {
    // TODO-QSP: gt 'flash', 'quick_park_flash', $ARGS[1]
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterParkBadScenario(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'comment') {
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'grope') {
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'police') {
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'rapist') {
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'gangrape') {
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPark(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) >= 35  ||  (((s as any).pcs_inhib ?? 0) >= 25  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0)) {
    scene.actions([
      { label: 'Flash in park', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).trait_vars ?? 0)?.['exhibitionist'] > 0  &&  (!((st as any).exhibitionQW ?? 0))) {
      qspGoto(st, 'kseniyaQW', 'event1', '1');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterParkFlashOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterParkFlashOptions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] >= 1) {
    scene.actions([
      { label: 'Flash your butt (0:05)', goto: ['flash', 'quick_park_flash', 'butt'] },
    ]);
  }
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] >= 2) {
    scene.actions([
      { label: 'Flash your pussy (0:05)', goto: ['flash', 'quick_park_flash', 'pussy'] },
    ]);
  }
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] >= 3) {
    scene.actions([
      { label: 'Flash your pussy and tits (0:05)', goto: ['flash', 'quick_park_flash', 'full'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Flash your tits (0:05)', goto: ['flash', 'quick_park_flash', 'tits'] },
  ]);
  scene.build();
}

function enterQuickParkFlash(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0  &&  (!((s as any).exhibitionQW ?? 0))) {
    qspGoto(s, 'kseniyaQW', 'event1', '1');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'outdoors', 5]; enterDefault(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterParkFlashOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'can_flash':
      enterCanFlash(s, scene);
      break;
    case 'get_image':
      enterGetImage(s, scene);
      break;
    case 'display_image':
      enterDisplayImage(s, scene);
      break;
    case 'generate_output':
      enterGenerateOutput(s, scene);
      break;
    case 'bra':
      enterBra(s, scene);
      break;
    case 'tits':
      enterTits(s, scene);
      break;
    case 'panties':
      enterPanties(s, scene);
      break;
    case 'pantyrear':
      enterPantyrear(s, scene);
      break;
    case 'butt':
      enterButt(s, scene);
      break;
    case 'butt_plug':
      enterButtPlug(s, scene);
      break;
    case 'pussy':
      enterPussy(s, scene);
      break;
    case 'full':
      enterFull(s, scene);
      break;
    case 'exhibitionism':
      enterExhibitionism(s, scene);
      break;
    case 'cleanup':
      enterCleanup(s, scene);
      break;
    case 'events':
      enterEvents(s, scene);
      break;
    case 'park_get_acts':
      enterParkGetActs(s, scene);
      break;
    case 'park_get_single_act':
      enterParkGetSingleAct(s, scene);
      break;
    case 'park_do_flash':
      enterParkDoFlash(s, scene);
      break;
    case 'park_bad_scenario':
      enterParkBadScenario(s, scene);
      break;
    case 'park':
      enterPark(s, scene);
      break;
    case 'park_flash_options':
      enterParkFlashOptions(s, scene);
      break;
    case 'quick_park_flash':
      enterQuickParkFlash(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const flash: LocationDef = {
  name: 'flash',
  region: 'other',
  enter: enter,
};
