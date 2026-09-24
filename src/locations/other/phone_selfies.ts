import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPhoneSelfieTotals(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $selfieLoc[0] = 'misc'
  // TODO-QSP: $selfieLocDesc[0] = 'Me'
  // TODO-QSP: $selfieFilePrefix[0] = 'phone_selfie'
  ((s as any).selfieCloTot = (s as any).selfieCloTot ?? {})[0] = 2;
  ((s as any).selfieSwimTot = (s as any).selfieSwimTot ?? {})[0] = 0;
  ((s as any).selfieUndTot = (s as any).selfieUndTot ?? {})[0] = 0;
  ((s as any).selfieNudTot = (s as any).selfieNudTot ?? {})[0] = 0;
  ((s as any).selfieBathTot = (s as any).selfieBathTot ?? {})[0] = 0;
  ((s as any).selfieShowerTot = (s as any).selfieShowerTot ?? {})[0] = 0;
  ((s as any).selfieTitFlashTot = (s as any).selfieTitFlashTot ?? {})[0] = 0;
  ((s as any).selfieAssFlashTot = (s as any).selfieAssFlashTot ?? {})[0] = 0;
  ((s as any).selfiePussyFlashTot = (s as any).selfiePussyFlashTot ?? {})[0] = 0;
  // TODO-QSP: $selfieLoc[1] = 'bathroom'
  // TODO-QSP: $selfieLocDesc[1] = 'Bathroom'
  // TODO-QSP: $selfieFilePrefix[1] = ''
  ((s as any).selfieCloTot = (s as any).selfieCloTot ?? {})[1] = 30;
  ((s as any).selfieSwimTot = (s as any).selfieSwimTot ?? {})[1] = 0;
  ((s as any).selfieUndTot = (s as any).selfieUndTot ?? {})[1] = 23;
  ((s as any).selfieNudTot = (s as any).selfieNudTot ?? {})[1] = 30;
  ((s as any).selfieBathTot = (s as any).selfieBathTot ?? {})[1] = 30;
  ((s as any).selfieShowerTot = (s as any).selfieShowerTot ?? {})[1] = 27;
  ((s as any).selfieTitFlashTot = (s as any).selfieTitFlashTot ?? {})[1] = 30;
  ((s as any).selfieAssFlashTot = (s as any).selfieAssFlashTot ?? {})[1] = 5;
  ((s as any).selfiePussyFlashTot = (s as any).selfiePussyFlashTot ?? {})[1] = 22;
  // TODO-QSP: $selfieLoc[2] = 'bedroom'
  // TODO-QSP: $selfieLocDesc[2] = 'Bedroom'
  // TODO-QSP: $selfieFilePrefix[2] = ''
  ((s as any).selfieCloTot = (s as any).selfieCloTot ?? {})[2] = 30;
  ((s as any).selfieSwimTot = (s as any).selfieSwimTot ?? {})[2] = 0;
  ((s as any).selfieUndTot = (s as any).selfieUndTot ?? {})[2] = 22;
  ((s as any).selfieNudTot = (s as any).selfieNudTot ?? {})[2] = 30;
  ((s as any).selfieBathTot = (s as any).selfieBathTot ?? {})[2] = 0;
  ((s as any).selfieShowerTot = (s as any).selfieShowerTot ?? {})[2] = 0;
  ((s as any).selfieTitFlashTot = (s as any).selfieTitFlashTot ?? {})[2] = 30;
  ((s as any).selfieAssFlashTot = (s as any).selfieAssFlashTot ?? {})[2] = 26;
  ((s as any).selfiePussyFlashTot = (s as any).selfiePussyFlashTot ?? {})[2] = 25;
  // TODO-QSP: $selfieLoc[3] = 'kitchen'
  // TODO-QSP: $selfieLocDesc[3] = 'Kitchen'
  // TODO-QSP: $selfieFilePrefix[3] = ''
  ((s as any).selfieCloTot = (s as any).selfieCloTot ?? {})[3] = 27;
  ((s as any).selfieSwimTot = (s as any).selfieSwimTot ?? {})[3] = 0;
  ((s as any).selfieUndTot = (s as any).selfieUndTot ?? {})[3] = 23;
  ((s as any).selfieNudTot = (s as any).selfieNudTot ?? {})[3] = 23;
  ((s as any).selfieBathTot = (s as any).selfieBathTot ?? {})[3] = 0;
  ((s as any).selfieShowerTot = (s as any).selfieShowerTot ?? {})[3] = 0;
  ((s as any).selfieTitFlashTot = (s as any).selfieTitFlashTot ?? {})[3] = 21;
  ((s as any).selfieAssFlashTot = (s as any).selfieAssFlashTot ?? {})[3] = 1;
  ((s as any).selfiePussyFlashTot = (s as any).selfiePussyFlashTot ?? {})[3] = 10;
  // TODO-QSP: $selfieLoc[4] = 'livingroom'
  // TODO-QSP: $selfieLocDesc[4] = 'Livingroom'
  // TODO-QSP: $selfieFilePrefix[4] = ''
  ((s as any).selfieCloTot = (s as any).selfieCloTot ?? {})[4] = 30;
  ((s as any).selfieSwimTot = (s as any).selfieSwimTot ?? {})[4] = 0;
  ((s as any).selfieUndTot = (s as any).selfieUndTot ?? {})[4] = 28;
  ((s as any).selfieNudTot = (s as any).selfieNudTot ?? {})[4] = 30;
  ((s as any).selfieBathTot = (s as any).selfieBathTot ?? {})[4] = 0;
  ((s as any).selfieShowerTot = (s as any).selfieShowerTot ?? {})[4] = 0;
  ((s as any).selfieTitFlashTot = (s as any).selfieTitFlashTot ?? {})[4] = 30;
  ((s as any).selfieAssFlashTot = (s as any).selfieAssFlashTot ?? {})[4] = 6;
  ((s as any).selfiePussyFlashTot = (s as any).selfiePussyFlashTot ?? {})[4] = 20;
  // TODO-QSP: $selfieLoc[5] = 'changingroom'
  // TODO-QSP: $selfieLocDesc[5] = 'Changingroom'
  // TODO-QSP: $selfieFilePrefix[5] = ''
  ((s as any).selfieCloTot = (s as any).selfieCloTot ?? {})[5] = 30;
  ((s as any).selfieSwimTot = (s as any).selfieSwimTot ?? {})[5] = 0;
  ((s as any).selfieUndTot = (s as any).selfieUndTot ?? {})[5] = 30;
  ((s as any).selfieNudTot = (s as any).selfieNudTot ?? {})[5] = 30;
  ((s as any).selfieBathTot = (s as any).selfieBathTot ?? {})[5] = 0;
  ((s as any).selfieShowerTot = (s as any).selfieShowerTot ?? {})[5] = 0;
  ((s as any).selfieTitFlashTot = (s as any).selfieTitFlashTot ?? {})[5] = 30;
  ((s as any).selfieAssFlashTot = (s as any).selfieAssFlashTot ?? {})[5] = 20;
  ((s as any).selfiePussyFlashTot = (s as any).selfiePussyFlashTot ?? {})[5] = 27;
  // TODO-QSP: $selfieLoc[6] = 'park'
  // TODO-QSP: $selfieLocDesc[6] = 'Park'
  // TODO-QSP: $selfieFilePrefix[6] = ''
  ((s as any).selfieCloTot = (s as any).selfieCloTot ?? {})[6] = 30;
  ((s as any).selfieSwimTot = (s as any).selfieSwimTot ?? {})[6] = 0;
  ((s as any).selfieUndTot = (s as any).selfieUndTot ?? {})[6] = 4;
  ((s as any).selfieNudTot = (s as any).selfieNudTot ?? {})[6] = 17;
  ((s as any).selfieBathTot = (s as any).selfieBathTot ?? {})[6] = 0;
  ((s as any).selfieShowerTot = (s as any).selfieShowerTot ?? {})[6] = 0;
  ((s as any).selfieTitFlashTot = (s as any).selfieTitFlashTot ?? {})[6] = 26;
  ((s as any).selfieAssFlashTot = (s as any).selfieAssFlashTot ?? {})[6] = 2;
  ((s as any).selfiePussyFlashTot = (s as any).selfiePussyFlashTot ?? {})[6] = 8;
  // TODO-QSP: $selfieLoc[7] = 'locker'
  // TODO-QSP: $selfieLocDesc[7] = 'locker'
  // TODO-QSP: $selfieFilePrefix[7] = ''
  ((s as any).selfieCloTot = (s as any).selfieCloTot ?? {})[7] = 26;
  ((s as any).selfieSwimTot = (s as any).selfieSwimTot ?? {})[7] = 0;
  ((s as any).selfieUndTot = (s as any).selfieUndTot ?? {})[7] = 21;
  ((s as any).selfieNudTot = (s as any).selfieNudTot ?? {})[7] = 14;
  ((s as any).selfieBathTot = (s as any).selfieBathTot ?? {})[7] = 0;
  ((s as any).selfieShowerTot = (s as any).selfieShowerTot ?? {})[7] = 0;
  ((s as any).selfieTitFlashTot = (s as any).selfieTitFlashTot ?? {})[7] = 17;
  ((s as any).selfieAssFlashTot = (s as any).selfieAssFlashTot ?? {})[7] = 3;
  ((s as any).selfiePussyFlashTot = (s as any).selfiePussyFlashTot ?? {})[7] = 4;
  // TODO-QSP: $selfieLoc[8] = 'beach'
  // TODO-QSP: $selfieLocDesc[8] = 'Beach'
  // TODO-QSP: $selfieFilePrefix[8] = ''
  ((s as any).selfieCloTot = (s as any).selfieCloTot ?? {})[8] = 0;
  ((s as any).selfieSwimTot = (s as any).selfieSwimTot ?? {})[8] = 21;
  ((s as any).selfieUndTot = (s as any).selfieUndTot ?? {})[8] = 0;
  ((s as any).selfieNudTot = (s as any).selfieNudTot ?? {})[8] = 22;
  ((s as any).selfieBathTot = (s as any).selfieBathTot ?? {})[8] = 0;
  ((s as any).selfieShowerTot = (s as any).selfieShowerTot ?? {})[8] = 0;
  ((s as any).selfieTitFlashTot = (s as any).selfieTitFlashTot ?? {})[8] = 18;
  ((s as any).selfieAssFlashTot = (s as any).selfieAssFlashTot ?? {})[8] = 3;
  ((s as any).selfiePussyFlashTot = (s as any).selfiePussyFlashTot ?? {})[8] = 4;
  // TODO-QSP: $selfieLoc[9] = 'school_classroom'
  // TODO-QSP: $selfieLocDesc[9] = 'School Classroom'
  // TODO-QSP: $selfieFilePrefix[9] = ''
  ((s as any).selfieCloTot = (s as any).selfieCloTot ?? {})[9] = 15;
  ((s as any).selfieSwimTot = (s as any).selfieSwimTot ?? {})[9] = 0;
  ((s as any).selfieUndTot = (s as any).selfieUndTot ?? {})[9] = 2;
  ((s as any).selfieNudTot = (s as any).selfieNudTot ?? {})[9] = 0;
  ((s as any).selfieBathTot = (s as any).selfieBathTot ?? {})[9] = 0;
  ((s as any).selfieShowerTot = (s as any).selfieShowerTot ?? {})[9] = 0;
  ((s as any).selfieTitFlashTot = (s as any).selfieTitFlashTot ?? {})[9] = 3;
  ((s as any).selfieAssFlashTot = (s as any).selfieAssFlashTot ?? {})[9] = 0;
  ((s as any).selfiePussyFlashTot = (s as any).selfiePussyFlashTot ?? {})[9] = 3;
  // TODO-QSP: $selfieLoc[10] = 'school_bathroom'
  // TODO-QSP: $selfieLocDesc[10] = 'School Bathroom'
  // TODO-QSP: $selfieFilePrefix[10] = ''
  ((s as any).selfieCloTot = (s as any).selfieCloTot ?? {})[10] = 28;
  ((s as any).selfieSwimTot = (s as any).selfieSwimTot ?? {})[10] = 0;
  ((s as any).selfieUndTot = (s as any).selfieUndTot ?? {})[10] = 12;
  ((s as any).selfieNudTot = (s as any).selfieNudTot ?? {})[10] = 0;
  ((s as any).selfieBathTot = (s as any).selfieBathTot ?? {})[10] = 0;
  ((s as any).selfieShowerTot = (s as any).selfieShowerTot ?? {})[10] = 0;
  ((s as any).selfieTitFlashTot = (s as any).selfieTitFlashTot ?? {})[10] = 8;
  ((s as any).selfieAssFlashTot = (s as any).selfieAssFlashTot ?? {})[10] = 1;
  ((s as any).selfiePussyFlashTot = (s as any).selfiePussyFlashTot ?? {})[10] = 8;
  // TODO-QSP: $selfieLoc[11] = 'restroom'
  // TODO-QSP: $selfieLocDesc[11] = 'Restroom'
  // TODO-QSP: $selfieFilePrefix[11] = ''
  ((s as any).selfieCloTot = (s as any).selfieCloTot ?? {})[11] = 34;
  ((s as any).selfieSwimTot = (s as any).selfieSwimTot ?? {})[11] = 0;
  ((s as any).selfieUndTot = (s as any).selfieUndTot ?? {})[11] = 25;
  ((s as any).selfieNudTot = (s as any).selfieNudTot ?? {})[11] = 3;
  ((s as any).selfieBathTot = (s as any).selfieBathTot ?? {})[11] = 0;
  ((s as any).selfieShowerTot = (s as any).selfieShowerTot ?? {})[11] = 0;
  ((s as any).selfieTitFlashTot = (s as any).selfieTitFlashTot ?? {})[11] = 34;
  ((s as any).selfieAssFlashTot = (s as any).selfieAssFlashTot ?? {})[11] = 13;
  ((s as any).selfiePussyFlashTot = (s as any).selfiePussyFlashTot ?? {})[11] = 21;
  if (((s as any).locclass ?? 0) === 'school_bathroom') {
    ((s as any).phone_loc = (s as any).phone_loc ?? {})['class'] = 'school_bathroom';
    ((s as any).phone_loc = (s as any).phone_loc ?? {})['type'] = 'public';
  } else {
    if (((s as any).locclass ?? 0) === 'changingroom') {
      ((s as any).phone_loc = (s as any).phone_loc ?? {})['class'] = 'changingroom';
      ((s as any).phone_loc = (s as any).phone_loc ?? {})['type'] = 'public';
    } else {
      if (((s as any).locclass ?? 0) === 'city_park'  ||  ((s as any).locclass ?? 0) === 'park') {
        ((s as any).phone_loc = (s as any).phone_loc ?? {})['class'] = 'park';
        ((s as any).phone_loc = (s as any).phone_loc ?? {})['type'] = 'public';
      } else {
        if (((s as any).locclass ?? 0) === 'locker') {
          ((s as any).phone_loc = (s as any).phone_loc ?? {})['class'] = 'locker';
          ((s as any).phone_loc = (s as any).phone_loc ?? {})['type'] = 'public';
        } else {
          if (((s as any).locclass ?? 0) === 'beach') {
            ((s as any).phone_loc = (s as any).phone_loc ?? {})['class'] = 'beach';
            ((s as any).phone_loc = (s as any).phone_loc ?? {})['type'] = 'public';
          } else {
            if (((s as any).locclass ?? 0) === 'classroom') {
              ((s as any).phone_loc = (s as any).phone_loc ?? {})['class'] = 'classroom';
              ((s as any).phone_loc = (s as any).phone_loc ?? {})['type'] = 'public';
            } else {
              if (((s as any).locclass ?? 0) === 'restroom'  ||  ((s as any).location_type ?? 0) === 'restroom') {
                ((s as any).phone_loc = (s as any).phone_loc ?? {})['class'] = 'restroom';
                ((s as any).phone_loc = (s as any).phone_loc ?? {})['type'] = 'public';
              } else {
                if (((s as any).locclass ?? 0) === 'bathroom'  ||  ((s as any).location_type ?? 0) === 'bathroom') {
                  ((s as any).phone_loc = (s as any).phone_loc ?? {})['class'] = 'bathroom';
                  ((s as any).phone_loc = (s as any).phone_loc ?? {})['type'] = 'private';
                } else {
                  if (((s as any).locclass ?? 0) === 'bedroom'  ||  ((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).location_type ?? 0) === 'bedroom') {
                    ((s as any).phone_loc = (s as any).phone_loc ?? {})['class'] = 'bedroom';
                    ((s as any).phone_loc = (s as any).phone_loc ?? {})['type'] = 'private';
                  } else {
                    if (((s as any).locclass ?? 0) === 'kitchen'  ||  ((s as any).locclass ?? 0) === 'kitr'  ||  ((s as any).location_type ?? 0) === 'kitchen') {
                      ((s as any).phone_loc = (s as any).phone_loc ?? {})['class'] = 'kitchen';
                      ((s as any).phone_loc = (s as any).phone_loc ?? {})['type'] = 'public';
                    } else {
                      if (((s as any).locclass ?? 0) === 'livingr'  ||  ((s as any).locclass ?? 0) === 'livingroom') {
                        ((s as any).phone_loc = (s as any).phone_loc ?? {})['class'] = 'livingroom';
                        ((s as any).phone_loc = (s as any).phone_loc ?? {})['type'] = 'public';
                      } else {
                        ((s as any).phone_loc = (s as any).phone_loc ?? {})['class'] = 'misc';
                        ((s as any).phone_loc = (s as any).phone_loc ?? {})['type'] = 'public';
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOpenCamera(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPhoneSelfieTotals(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).locIndex = qspUntranslated(s, "arrpos('selfieLoc', phone_loc['class'])", { location: "phone_selfies" });
  // TODO-QSP: $result += '<a href="exec: gs ''phone_selfies'', ''camera_take_selfie'', ''<<$phone_loc[''class'']>>...
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).phone_loc ?? 0)?.['class'] !== ''  &&  ((s as any).phone_loc ?? 0)?.['class'] !== 'misc') {
    if (((s as any).pcs_inhib ?? 0) >= 35  ||  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0  ||  ((s as any).phone_loc ?? 0)?.['type'] === 'private') {
      if (((s as any).selfieTitFlashTot ?? 0)?.[String((s as any).locIndex ?? 0)] > 0) {
        // TODO-QSP: $result += '<a href="exec: gs ''phone_selfies'', ''camera_take_selfie'', ''<<$phone_loc[''class'']>>...
      }
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0  &&  ((s as any).selfieAssFlashTot ?? 0)?.[String((s as any).locIndex ?? 0)] > 0) {
        // TODO-QSP: $result += '<a href="exec: gs ''phone_selfies'', ''camera_take_selfie'', ''<<$phone_loc[''class'']>>...
      }
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1  &&  ((s as any).selfiePussyFlashTot ?? 0)?.[String((s as any).locIndex ?? 0)] > 0) {
        // TODO-QSP: $result += '<a href="exec: gs ''phone_selfies'', ''camera_take_selfie'', ''<<$phone_loc[''class'']>>...
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCameraTakeSelfie(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 5));
  qspCall(s, 'exp_gain', 'photoskl', 1);
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 'misc';
  }
  (s as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'stat', '');
  if (((s as any).cfg_vars ?? 0)?.['use_popups'] === 1) {
  } else {
    // TODO-QSP: view '<<$temp_phone_img>>'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSelfieImage(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPhoneSelfieTotals(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).locIndex = qspUntranslated(s, "arrpos('selfieLoc', ARGS[1])", { location: "phone_selfies" });
  if (String((s as any).locArgs?.[2] ?? '') === 'tits'  ||  String((s as any).locArgs?.[2] ?? '') === 'titflash') {
    (s as any).temp_titflash = (((s as any).selfieTitFlashTot ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0);
    if (((s as any).temp_titflash ?? 0) > 0) {
      (s as any).phone_rand = (Math.floor(Math.random() * (((s as any).temp_titflash ?? 0) - 1 + 1)) + (1));
      // TODO-QSP: dynamic '<<$ARGS[1]>>_titflash[<<phone_rand>>] = 1'
      (s as any).result = 'images/pc/activities/phone/selfies/' + ((s as any).locArgs?.[1] ?? 0) + '/titflash/' + (((s as any).selfieFilePrefix ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0) + '' + ((s as any).phone_rand ?? 0) + '.jpg';
    }
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === 'ass'  ||  String((s as any).locArgs?.[2] ?? '') === 'assflash') {
      (s as any).temp_assflash = (((s as any).selfieAssFlashTot ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0);
      if (((s as any).temp_assflash ?? 0) > 0) {
        (s as any).phone_rand = (Math.floor(Math.random() * (((s as any).temp_assflash ?? 0) - 1 + 1)) + (1));
        // TODO-QSP: dynamic '<<$ARGS[1]>>_assflash[<<phone_rand>>] = 1'
        (s as any).result = 'images/pc/activities/phone/selfies/' + ((s as any).locArgs?.[1] ?? 0) + '/assflash/' + (((s as any).selfieFilePrefix ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0) + '' + ((s as any).phone_rand ?? 0) + '.jpg';
      }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 'pussy'  ||  String((s as any).locArgs?.[2] ?? '') === 'pussyflash') {
        (s as any).temp_pussyflash = (((s as any).selfiePussyFlashTot ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0);
        if (((s as any).temp_pussyflash ?? 0) > 0) {
          (s as any).phone_rand = (Math.floor(Math.random() * (((s as any).temp_pussyflash ?? 0) - 1 + 1)) + (1));
          // TODO-QSP: dynamic '<<$ARGS[1]>>_pussyflash[<<phone_rand>>] = 1'
          (s as any).result = 'images/pc/activities/phone/selfies/' + ((s as any).locArgs?.[1] ?? 0) + '/pussyflash/' + (((s as any).selfieFilePrefix ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0) + '' + ((s as any).phone_rand ?? 0) + '.jpg';
        }
      } else {
        if (((s as any).PSwim ?? 0)) {
          (s as any).temp_swim = (((s as any).selfieSwimTot ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0);
          if (((s as any).temp_swim ?? 0) > 0) {
            (s as any).phone_rand = (Math.floor(Math.random() * (((s as any).temp_swim ?? 0) - 1 + 1)) + (1));
            // TODO-QSP: dynamic '<<$ARGS[1]>>_swim[<<phone_rand>>] = 1'
            (s as any).result = 'images/pc/activities/phone/selfies/' + ((s as any).locArgs?.[1] ?? 0) + '/bikini/' + (((s as any).selfieFilePrefix ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0) + '' + ((s as any).phone_rand ?? 0) + '.jpg';
          }
        } else {
          if (((s as any).clothingworntype ?? 0) !== 'nude') {
            (s as any).temp_clotot = (((s as any).selfieCloTot ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0);
            if (((s as any).temp_clotot ?? 0) > 0) {
              (s as any).phone_rand = (Math.floor(Math.random() * (((s as any).temp_clotot ?? 0) - 1 + 1)) + (1));
              // TODO-QSP: dynamic '<<$ARGS[1]>>_closelfie[<<phone_rand>>] = 1'
              (s as any).result = 'images/pc/activities/phone/selfies/' + ((s as any).locArgs?.[1] ?? 0) + '/clothed/' + (((s as any).selfieFilePrefix ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0) + '' + ((s as any).phone_rand ?? 0) + '.jpg';
            }
          } else {
            if (((s as any).pantyworntype ?? 0) !== 'none') {
              (s as any).temp_undtot = (((s as any).selfieUndTot ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0);
              if (((s as any).temp_undtot ?? 0) > 0) {
                (s as any).phone_rand = (Math.floor(Math.random() * (((s as any).temp_undtot ?? 0) - 1 + 1)) + (1));
                // TODO-QSP: dynamic '<<$ARGS[1]>>_undselfie[<<phone_rand>>] = 1'
                (s as any).result = 'images/pc/activities/phone/selfies/' + ((s as any).locArgs?.[1] ?? 0) + '/underwear/' + (((s as any).selfieFilePrefix ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0) + '' + ((s as any).phone_rand ?? 0) + '.jpg';
              }
            } else {
              (s as any).temp_nudtot = (((s as any).selfieNudTot ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0);
              if (((s as any).temp_nudtot ?? 0) > 0) {
                (s as any).phone_rand = (Math.floor(Math.random() * (((s as any).temp_nudtot ?? 0) - 1 + 1)) + (1));
                // TODO-QSP: dynamic '<<$ARGS[1]>>_nudselfie[<<phone_rand>>] = 1'
                (s as any).result = 'images/pc/activities/phone/selfies/' + ((s as any).locArgs?.[1] ?? 0) + '/nude/' + (((s as any).selfieFilePrefix ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0) + '' + ((s as any).phone_rand ?? 0) + '.jpg';
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).result ?? 0) === '') {
    (s as any).phone_rand = (Math.floor(Math.random() * ((((s as any).selfieCloTot ?? 0)?.[0] ?? 0) - 1 + 1)) + (1));
    // TODO-QSP: dynamic '<<$selfieLoc[0]>>_closelfie[<<phone_rand>>] = 1'
    (s as any).result = 'images/pc/activities/phone/selfies/' + (((s as any).selfieLoc ?? 0)?.[0] ?? 0) + '/clothed/' + (((s as any).selfieFilePrefix ?? 0)?.[0] ?? 0) + '' + ((s as any).phone_rand ?? 0) + '.jpg';
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCameraTakeSelfieBathing(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPhoneSelfieTotals(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (String((s as any).locArgs?.[1] ?? '') === 'bath') {
    (s as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image_bathing');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'shower') {
      (s as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image_shower');
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).cfg_vars ?? 0)?.['use_popups'] === 1) {
  } else {
    // TODO-QSP: view '<<$temp_phone_img>>'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSelfieImageShower(s: GameState, scene: SceneBuilder): void {
  (s as any).locIndex = qspUntranslated(s, "arrpos('selfieLoc', 'bathroom')", { location: "phone_selfies" });
  if (((s as any).locIndex ?? 0) >= 0) {
    (s as any).temp_showertot = (((s as any).selfieShowerTot ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0);
    (s as any).phone_rand = (Math.floor(Math.random() * (((s as any).temp_showertot ?? 0) - 1 + 1)) + (1));
    ((s as any).bathroom_showerselfie = (s as any).bathroom_showerselfie ?? {})[String((s as any).phone_rand ?? 0)] = 1;
    (s as any).result = 'images/pc/activities/phone/selfies/bathroom/shower/' + ((s as any).phone_rand ?? 0) + '.jpg';
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSelfieImageBathing(s: GameState, scene: SceneBuilder): void {
  (s as any).locIndex = qspUntranslated(s, "arrpos('selfieLoc', 'bathroom')", { location: "phone_selfies" });
  if (((s as any).locIndex ?? 0) >= 0) {
    (s as any).temp_bathtot = (((s as any).selfieBathTot ?? 0)?.[String((s as any).locIndex ?? 0)] ?? 0);
    (s as any).phone_rand = (Math.floor(Math.random() * (((s as any).temp_bathtot ?? 0) - 1 + 1)) + (1));
    ((s as any).bathroom_bathselfie = (s as any).bathroom_bathselfie ?? {})[String((s as any).phone_rand ?? 0)] = 1;
    (s as any).result = 'images/pc/activities/phone/selfies/bathroom/bath/' + ((s as any).phone_rand ?? 0) + '.jpg';
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSendSelfieHandler(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ssh_ret_loc = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_ssh_ret_arg = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_suppress_other_selfies = 1;
  qspGoto(s, 'phone_selfies', 'view_selfies');
  // TODO-QSP: end
  scene.build();
}

function enterViewSelfies(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPhoneSelfieTotals(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: $func('phone_selfies', 'get_selfie_layout')
  scene.text(qspFunc(s, 'phone_selfies', 'get_selfie_layout'));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterActExit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop watching selfies', handler: (st: GameState) => {
    if ((!((st as any).temp_suppress_other_selfies ?? 0))) {
      dynamicGoto(st, 'menu_loc', 'menu_arg');
    } else {
      dynamicGoto(st, 'temp_ssh_ret_loc', 'temp_ssh_ret_arg');
    }
  } },
  ]);
  scene.build();
}

function enterGetSelfieLayout(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'wrap', 'header h4 center', 'Photo library');
  // TODO-QSP: $result += '<br>'
  // TODO-QSP: $result += '<table><tr><th>Selfies</th></tr>'
  (s as any).temp_locationCnt = 0;
  // TODO-QSP: :LocationLoop
  // TODO-QSP: $result += '<tr><td><a href="exec: gt ''phone_selfies'', ''showlocation'', <<temp_locationCnt>>"><<$...
  (s as any).temp_locationCnt = ((s as any).temp_locationCnt ?? 0) + (1);
  if (((s as any).temp_locationCnt ?? 0) < Object.keys((s as any).selfieLoc ?? {}).length) {
    // TODO-QSP: jump 'LocationLoop'
  }
  if ((!((s as any).temp_suppress_other_selfies ?? 0))) {
    // TODO-QSP: $result += '<tr></tr><tr><th>Family and friends</th></tr>'
    // TODO-QSP: $result += '<tr><td><a href="exec:gt ''phone_selfies'', ''family''">Family</a></td></tr>'
    // TODO-QSP: $result += '<tr><td><a href="exec:gt ''phone_selfies'', ''school''">School friends</a></td></tr>'
    // TODO-QSP: $result += '<tr><td><a href="exec:gt ''phone_selfies'', ''teacher''">Teachers</a></td></tr>'
    // TODO-QSP: $result += '<tr><td><a href="exec:gt ''phone_selfies'', ''pavlovsk''">Pavlovsk friends</a></td></tr>...
    // TODO-QSP: $result += '<tr><td><a href="exec:gt ''phone_selfies'', ''city''">City friends</a></td></tr>'
  }
  // TODO-QSP: $result += '</table>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShowlocation(s: GameState, scene: SceneBuilder): void {
  scene.text(`<center><b>${qspUntranslated(s, "selfieLocDesc[ARGS[1]]", { location: "phone_selfies" })} selfies</b></center>`);
  // TODO-QSP: dynamic text: $func('phone_selfies', 'listretrieve', ARGS[1], $selfieLoc[ARGS[1]])
  scene.text(qspFunc(s, 'phone_selfies', 'listretrieve', ((s as any).locArgs?.[1] ?? ''), qspUntranslated(s, "selfieLoc[ARGS[1]]", { location: "phone_selfies" })));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Back', goto: ['phone_selfies', 'view_selfies'] },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterListretrieve(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<center><table width=80%>';
  // TODO-QSP: $result += $func('phone_selfies', 'retrieve_clothed_selfies',  ARGS[1], $ARGS[2])
  // TODO-QSP: $result += $func('phone_selfies', 'retrieve_swim_selfies',    ARGS[1], $ARGS[2])
  // TODO-QSP: $result += $func('phone_selfies', 'retrieve_underwear_selfies',  ARGS[1], $ARGS[2])
  // TODO-QSP: $result += $func('phone_selfies', 'retrieve_nude_selfies',    ARGS[1], $ARGS[2])
  // TODO-QSP: $result += $func('phone_selfies', 'retrieve_bath_selfies',    ARGS[1], $ARGS[2])
  // TODO-QSP: $result += $func('phone_selfies', 'retrieve_shower_selfies',    ARGS[1], $ARGS[2])
  // TODO-QSP: $result += $func('phone_selfies', 'retrieve_titflash_selfies',  ARGS[1], $ARGS[2])
  // TODO-QSP: $result += $func('phone_selfies', 'retrieve_assflash_selfies',  ARGS[1], $ARGS[2])
  // TODO-QSP: $result += $func('phone_selfies', 'retrieve_pussyflash_selfies',  ARGS[1], $ARGS[2])
  // TODO-QSP: $result += '</table></center>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRetrieveClothedSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieCloTot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    // TODO-QSP: $result += '<tr><th colspan=5>Clothed selfies</th></tr>'
    // TODO-QSP: $result += '<tr></tr><tr>'
    (s as any).temp_cnum = 0;
    (s as any).temp_clocnt = 1;
    // TODO-QSP: :temp_loop
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_closelfie[<<temp_clocnt>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).temp_cnum ?? 0) === 5) {
        // TODO-QSP: $result += '</tr><tr>'
        (s as any).temp_cnum = 0;
      }
      // TODO-QSP: $result += '<td width="20%">' + $func('phone_selfies_popup', 'set_selfie', $ARGS[2], 'clothed', ARGS...
      (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
    }
    (s as any).temp_clocnt = ((s as any).temp_clocnt ?? 0) + (1);
    if (((s as any).temp_clocnt ?? 0) <= ((s as any).selfieCloTot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  scene.build();
}

function enterRetrieveSwimSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieSwimTot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    // TODO-QSP: $result += '<tr><th colspan=5>Swimwear selfies</th></tr>'
    // TODO-QSP: $result += '<tr></tr><tr>'
    (s as any).temp_cnum = 0;
    (s as any).temp_swicnt = 1;
    // TODO-QSP: :temp_loop1
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_swim[<<temp_swicnt>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).temp_cnum ?? 0) === 5) {
        // TODO-QSP: $result += '</tr><tr>'
        (s as any).temp_cnum = 0;
      }
      // TODO-QSP: $result += '<td width="20%">' + $func('phone_selfies_popup', 'set_selfie', $ARGS[2], 'bikini', ARGS[...
      (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
    }
    (s as any).temp_swicnt = ((s as any).temp_swicnt ?? 0) + (1);
    if (((s as any).temp_swicnt ?? 0) <= ((s as any).selfieSwimTot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop1'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  scene.build();
}

function enterRetrieveUnderwearSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieUndTot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    // TODO-QSP: $result += '<tr><th colspan=5>Underwear selfies</th></tr>'
    // TODO-QSP: $result += '<tr></tr><tr>'
    (s as any).temp_cnum = 0;
    (s as any).temp_undcnt = 1;
    // TODO-QSP: :temp_loop2
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_undselfie[<<temp_undcnt>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).temp_cnum ?? 0) === 5) {
        // TODO-QSP: $result += '</tr><tr>'
        (s as any).temp_cnum = 0;
      }
      // TODO-QSP: $result += '<td width="20%">' + $func('phone_selfies_popup', 'set_selfie', $ARGS[2], 'underwear', AR...
      (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
    }
    (s as any).temp_undcnt = ((s as any).temp_undcnt ?? 0) + (1);
    if (((s as any).temp_undcnt ?? 0) <= ((s as any).selfieUndTot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop2'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  scene.build();
}

function enterRetrieveNudeSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieNudTot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    // TODO-QSP: $result += '<tr><th colspan=5>Nude selfies</th></tr>'
    // TODO-QSP: $result += '<tr></tr><tr>'
    (s as any).temp_cnum = 0;
    (s as any).temp_nudcnt = 1;
    // TODO-QSP: :temp_loop3
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_nudselfie[<<temp_nudcnt>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).temp_cnum ?? 0) === 5) {
        // TODO-QSP: $result += '</tr><tr>'
        (s as any).temp_cnum = 0;
      }
      // TODO-QSP: $result += '<td width="20%">' + $func('phone_selfies_popup', 'set_selfie', $ARGS[2], 'nude', ARGS[1]...
      (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
    }
    (s as any).temp_nudcnt = ((s as any).temp_nudcnt ?? 0) + (1);
    if (((s as any).temp_nudcnt ?? 0) <= ((s as any).selfieNudTot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop3'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  scene.build();
}

function enterRetrieveBathSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieBathTot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    // TODO-QSP: $result += '<tr><th colspan=5>Bath selfies</th></tr>'
    // TODO-QSP: $result += '<tr></tr><tr>'
    (s as any).temp_cnum = 0;
    (s as any).temp_bathcnt = 1;
    // TODO-QSP: :temp_loop4
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_bathselfie[<<temp_bathcnt>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).temp_cnum ?? 0) === 5) {
        // TODO-QSP: $result += '</tr><tr>'
        (s as any).temp_cnum = 0;
      }
      // TODO-QSP: $result += '<td width="20%">' + $func('phone_selfies_popup', 'set_selfie', $ARGS[2], 'bath', ARGS[1]...
      (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
    }
    (s as any).temp_bathcnt = ((s as any).temp_bathcnt ?? 0) + (1);
    if (((s as any).temp_bathcnt ?? 0) <= ((s as any).selfieBathTot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop4'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  scene.build();
}

function enterRetrieveShowerSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieShowerTot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    // TODO-QSP: $result += '<tr><th colspan=5>Shower selfies</th></tr>'
    // TODO-QSP: $result += '<tr></tr><tr>'
    (s as any).temp_cnum = 0;
    (s as any).temp_showercnt = 1;
    // TODO-QSP: :temp_loop5
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_showerselfie[<<temp_showercnt>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).temp_cnum ?? 0) === 5) {
        // TODO-QSP: $result += '</tr><tr>'
        (s as any).temp_cnum = 0;
      }
      // TODO-QSP: $result += '<td width="20%">' + $func('phone_selfies_popup', 'set_selfie', $ARGS[2], 'shower', ARGS[...
      (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
    }
    (s as any).temp_showercnt = ((s as any).temp_showercnt ?? 0) + (1);
    if (((s as any).temp_showercnt ?? 0) <= ((s as any).selfieShowerTot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop5'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  scene.build();
}

function enterRetrieveTitflashSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieTitFlashTot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    // TODO-QSP: $result += '<tr><th colspan=5>Flashing tits selfies</th></tr>'
    // TODO-QSP: $result += '<tr></tr><tr>'
    (s as any).temp_cnum = 0;
    (s as any).temp_flashtitscnt = 1;
    // TODO-QSP: :temp_loop6
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_titflash[<<temp_flashtitscnt>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).temp_cnum ?? 0) === 5) {
        // TODO-QSP: $result += '</tr><tr>'
        (s as any).temp_cnum = 0;
      }
      // TODO-QSP: $result += '<td width="20%">' + $func('phone_selfies_popup', 'set_selfie', $ARGS[2], 'titflash', ARG...
      (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
    }
    (s as any).temp_flashtitscnt = ((s as any).temp_flashtitscnt ?? 0) + (1);
    if (((s as any).temp_flashtitscnt ?? 0) <= ((s as any).selfieTitFlashTot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop6'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  scene.build();
}

function enterRetrieveAssflashSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieAssFlashTot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    // TODO-QSP: $result += '<tr><th colspan=5>Flashing ass selfies</th></tr>'
    // TODO-QSP: $result += '<tr></tr><tr>'
    (s as any).temp_cnum = 0;
    (s as any).temp_flashasscnt = 1;
    // TODO-QSP: :temp_loop7
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_assflash[<<temp_flashasscnt>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).temp_cnum ?? 0) === 5) {
        // TODO-QSP: $result += '</tr><tr>'
        (s as any).temp_cnum = 0;
      }
      // TODO-QSP: $result += '<td width="20%">' + $func('phone_selfies_popup', 'set_selfie', $ARGS[2], 'assflash', ARG...
      (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
    }
    (s as any).temp_flashasscnt = ((s as any).temp_flashasscnt ?? 0) + (1);
    if (((s as any).temp_flashasscnt ?? 0) <= ((s as any).selfieAssFlashTot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop7'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  scene.build();
}

function enterRetrievePussyflashSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfiePussyFlashTot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    // TODO-QSP: $result += '<tr><th colspan=5>Flashing pussy selfies</th></tr>'
    // TODO-QSP: $result += '<tr></tr><tr>'
    (s as any).temp_cnum = 0;
    (s as any).temp_flashpussycnt = 1;
    // TODO-QSP: :temp_loop8
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_pussyflash[<<temp_flashpussycnt>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).temp_cnum ?? 0) === 5) {
        // TODO-QSP: $result += '</tr><tr>'
        (s as any).temp_cnum = 0;
      }
      // TODO-QSP: $result += '<td width="20%">' + $func('phone_selfies_popup', 'set_selfie', $ARGS[2], 'pussyflash', A...
      (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
    }
    (s as any).temp_flashpussycnt = ((s as any).temp_flashpussycnt ?? 0) + (1);
    if (((s as any).temp_flashpussycnt ?? 0) <= ((s as any).selfiePussyFlashTot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop8'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetNpcSelfie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_lastname ?? 0)['A' + (String((s as any).locArgs?.[1] ?? ''))] !== '') {
    (s as any).result = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027phone_selfies/u0027, /u0027listretrieve2/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">' + (((s as any).npc_firstname ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0))]) + ' ' + (((s as any).npc_lastname ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0))]) + '</a>';
  } else {
    (s as any).result = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027phone_selfies/u0027, /u0027listretrieve2/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">' + (((s as any).npc_firstname ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0))]) + '</a>';
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFamily(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Family members</b></center>');
  (s as any).textgrup = '';
  (s as any).count1 = 0;
  (s as any).i = 1;
  scene.text('<center><table cellspacing="3" width=80%>');
  // TODO-QSP: :familygruploop
  if (((s as any).npc_selfieon ?? 0)['A' + (((s as any).i ?? 0))] === 1  &&  ((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 7) {
    (s as any).count1 = ((s as any).count1 ?? 0) + (1);
    // TODO-QSP: $textgrup += '' + '<td bgcolor=<<$theme[''table_bg_alt'']>> align="center"><img height="100" src="im...
    if (((s as any).count1 ?? 0) === 6) {
      // TODO-QSP: $textgrup += '</tr><tr>'
      (s as any).count1 = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'familygruploop'
  }
  // TODO-QSP: dynamic text: <<$textgrup>>
  scene.text(`${((s as any).textgrup ?? '')}`);
  scene.text('</table></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Back', goto: ['phone_selfies', 'view_selfies'] },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchool(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>School friends</b></center>');
  (s as any).textgrup = '';
  (s as any).count1 = 0;
  (s as any).i = 1;
  scene.text('<center><table cellspacing="3" width=80%>');
  // TODO-QSP: :schoolgruploop
  if (((s as any).npc_selfieon ?? 0)['A' + (((s as any).i ?? 0))] === 1  &&  (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 1  ||  ((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 2  ||  ((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 3  ||  ((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 4  ||  ((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 5)) {
    (s as any).count1 = ((s as any).count1 ?? 0) + (1);
    // TODO-QSP: $textgrup += '' + '<td bgcolor=<<$theme[''table_bg_alt'']>> align="center"><img height="100" src="im...
    if (((s as any).count1 ?? 0) === 6) {
      // TODO-QSP: $textgrup += '</tr><tr>'
      (s as any).count1 = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'schoolgruploop'
  }
  // TODO-QSP: dynamic text: <<$textgrup>>
  scene.text(`${((s as any).textgrup ?? '')}`);
  scene.text('</table></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Back', goto: ['phone_selfies', 'view_selfies'] },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTeacher(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Teachers</b></center>');
  (s as any).textgrup = '';
  (s as any).count1 = 0;
  (s as any).i = 1;
  scene.text('<center><table cellspacing="3" width=80%>');
  // TODO-QSP: :teachergruploop
  if (((s as any).npc_selfieon ?? 0)['A' + (((s as any).i ?? 0))] === 1  &&  ((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 6) {
    (s as any).count1 = ((s as any).count1 ?? 0) + (1);
    // TODO-QSP: $textgrup += '' + '<td bgcolor=<<$theme[''table_bg_alt'']>> align="center"><img height="100" src="im...
    if (((s as any).count1 ?? 0) === 6) {
      // TODO-QSP: $textgrup += '</tr><tr>'
      (s as any).count1 = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'teachergruploop'
  }
  // TODO-QSP: dynamic text: <<$textgrup>>
  scene.text(`${((s as any).textgrup ?? '')}`);
  scene.text('</table></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Back', goto: ['phone_selfies', 'view_selfies'] },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPavlovsk(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Pavlovsk friends</b></center>');
  (s as any).textgrup = '';
  (s as any).count1 = 0;
  (s as any).i = 1;
  scene.text('<center><table cellspacing="3" width=80%>');
  // TODO-QSP: :pavgruploop
  if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 8  &&  ((s as any).npc_selfieon ?? 0)['A' + (((s as any).i ?? 0))] === 1) {
    (s as any).count1 = ((s as any).count1 ?? 0) + (1);
    // TODO-QSP: $textgrup += '' + '<td bgcolor=<<$theme[''table_bg_alt'']>> align="center"><img height="100" src="im...
    if (((s as any).count1 ?? 0) === 6) {
      // TODO-QSP: $textgrup += '</tr><tr>'
      (s as any).count1 = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'pavgruploop'
  }
  // TODO-QSP: dynamic text: <<$textgrup>>
  scene.text(`${((s as any).textgrup ?? '')}`);
  scene.text('</table></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Back', goto: ['phone_selfies', 'view_selfies'] },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCity(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>City friends</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Back', goto: ['phone_selfies', 'view_selfies'] },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPopulateSelfiesList(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_locationCnt = 1;
  // TODO-QSP: :LocationTakenLoop
  (s as any).CloMaxSize = (((s as any).selfieCloTot ?? 0)?.[String((s as any).temp_locationCnt ?? 0)] ?? 0);
  if (((s as any).CloMaxSize ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'closelfie', '$selfieTakenClo', 'clothed', ((s as any).CloMaxSize ?? 0)]; enterPopulateClothesType(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).CloMaxSize = (((s as any).selfieSwimTot ?? 0)?.[String((s as any).temp_locationCnt ?? 0)] ?? 0);
  if (((s as any).CloMaxSize ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'swim', '$selfieTakenSwim', 'bikini', ((s as any).CloMaxSize ?? 0)]; enterPopulateClothesType(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).CloMaxSize = (((s as any).selfieUndTot ?? 0)?.[String((s as any).temp_locationCnt ?? 0)] ?? 0);
  if (((s as any).CloMaxSize ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'undselfie', '$selfieTakenUnd', 'underwear', ((s as any).CloMaxSize ?? 0)]; enterPopulateClothesType(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).CloMaxSize = (((s as any).selfieNudTot ?? 0)?.[String((s as any).temp_locationCnt ?? 0)] ?? 0);
  if (((s as any).CloMaxSize ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'nudselfie', '$selfieTakenNud', 'nude', ((s as any).CloMaxSize ?? 0)]; enterPopulateClothesType(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).CloMaxSize = (((s as any).selfieBathTot ?? 0)?.[String((s as any).temp_locationCnt ?? 0)] ?? 0);
  if (((s as any).CloMaxSize ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathselfie', '$selfieTakenBath', 'bath', ((s as any).CloMaxSize ?? 0)]; enterPopulateClothesType(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).CloMaxSize = (((s as any).selfieShowerTot ?? 0)?.[String((s as any).temp_locationCnt ?? 0)] ?? 0);
  if (((s as any).CloMaxSize ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'showerselfie', '$selfieTakenShower', 'shower', ((s as any).CloMaxSize ?? 0)]; enterPopulateClothesType(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).CloMaxSize = (((s as any).selfieTitFlashTot ?? 0)?.[String((s as any).temp_locationCnt ?? 0)] ?? 0);
  if (((s as any).CloMaxSize ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'titflash', '$selfieTakenTitflash', 'titflash', ((s as any).CloMaxSize ?? 0)]; enterPopulateClothesType(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).CloMaxSize = (((s as any).selfieAssFlashTot ?? 0)?.[String((s as any).temp_locationCnt ?? 0)] ?? 0);
  if (((s as any).CloMaxSize ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'assflash', '$selfieTakenAssflash', 'assflash', ((s as any).CloMaxSize ?? 0)]; enterPopulateClothesType(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).CloMaxSize = (((s as any).selfiePussyFlashTot ?? 0)?.[String((s as any).temp_locationCnt ?? 0)] ?? 0);
  if (((s as any).CloMaxSize ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pussyflash', '$selfieTakenPussyflash', 'pussyflash', ((s as any).CloMaxSize ?? 0)]; enterPopulateClothesType(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).temp_locationCnt = ((s as any).temp_locationCnt ?? 0) + (1);
  if (((s as any).temp_locationCnt ?? 0) < Object.keys((s as any).selfieLoc ?? {}).length) {
    // TODO-QSP: jump 'LocationTakenLoop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPopulateClothesType(s: GameState, scene: SceneBuilder): void {
  (s as any).CloTypePrefix = ((s as any).locArgs?.[1] ?? 0);
  (s as any).CloArraySize = 'arrsize(\'' + ((s as any).locArgs?.[2] ?? 0) + '\')';
  (s as any).CloFolder = ((s as any).locArgs?.[3] ?? 0);
  (s as any).CloVar = '' + ((s as any).locArgs?.[2] ?? 0) + '[tmpIndex]';
  (s as any).CloMaxSize = ((s as any).locArgs?.[4] ?? 0);
  (s as any).temp_clocnt = 0;
  // TODO-QSP: :tempCloTakenLoop
  // TODO-QSP: dynamic 'phone_locval = <<$selfieLoc[temp_locationCnt]>>_<<$CloTypePrefix>>[<<temp_clocnt>>]'
  if (((s as any).phone_locval ?? 0) === 1) {
    // TODO-QSP: dynamic 'tmpIndex = <<$CloArraySize>>'
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Phone_selfie_totals':
      enterPhoneSelfieTotals(s, scene);
      break;
    case 'open_camera':
      enterOpenCamera(s, scene);
      break;
    case 'camera_take_selfie':
      enterCameraTakeSelfie(s, scene);
      break;
    case 'selfie_image':
      enterSelfieImage(s, scene);
      break;
    case 'camera_take_selfie_bathing':
      enterCameraTakeSelfieBathing(s, scene);
      break;
    case 'selfie_image_shower':
      enterSelfieImageShower(s, scene);
      break;
    case 'selfie_image_bathing':
      enterSelfieImageBathing(s, scene);
      break;
    case 'send_selfie_handler':
      enterSendSelfieHandler(s, scene);
      break;
    case 'view_selfies':
      enterViewSelfies(s, scene);
      break;
    case 'act_exit':
      enterActExit(s, scene);
      break;
    case 'get_selfie_layout':
      enterGetSelfieLayout(s, scene);
      break;
    case 'showlocation':
      enterShowlocation(s, scene);
      break;
    case 'listretrieve':
      enterListretrieve(s, scene);
      break;
    case 'retrieve_clothed_selfies':
      enterRetrieveClothedSelfies(s, scene);
      break;
    case 'retrieve_swim_selfies':
      enterRetrieveSwimSelfies(s, scene);
      break;
    case 'retrieve_underwear_selfies':
      enterRetrieveUnderwearSelfies(s, scene);
      break;
    case 'retrieve_nude_selfies':
      enterRetrieveNudeSelfies(s, scene);
      break;
    case 'retrieve_bath_selfies':
      enterRetrieveBathSelfies(s, scene);
      break;
    case 'retrieve_shower_selfies':
      enterRetrieveShowerSelfies(s, scene);
      break;
    case 'retrieve_titflash_selfies':
      enterRetrieveTitflashSelfies(s, scene);
      break;
    case 'retrieve_assflash_selfies':
      enterRetrieveAssflashSelfies(s, scene);
      break;
    case 'retrieve_pussyflash_selfies':
      enterRetrievePussyflashSelfies(s, scene);
      break;
    case 'get_npc_selfie':
      enterGetNpcSelfie(s, scene);
      break;
    case 'family':
      enterFamily(s, scene);
      break;
    case 'school':
      enterSchool(s, scene);
      break;
    case 'teacher':
      enterTeacher(s, scene);
      break;
    case 'pavlovsk':
      enterPavlovsk(s, scene);
      break;
    case 'city':
      enterCity(s, scene);
      break;
    case 'PopulateSelfiesList':
      enterPopulateSelfiesList(s, scene);
      break;
    case 'populateClothesType':
      enterPopulateClothesType(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const phone_selfies: LocationDef = {
  name: 'phone_selfies',
  title: 'Photo library',
  region: 'other',
  locationType: 'kitchen',
  locclass: 'livingr',
  enter: enter,
};
