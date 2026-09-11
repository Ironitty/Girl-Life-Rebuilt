import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPhoneSelfieTotals(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $selfieLoc[0] = 'misc'
  // TODO-QSP: $selfieLocDesc[0] = 'Me'
  // TODO-QSP: $selfieFilePrefix[0] = 'phone_selfie'
  (s as any).selfieCloTot[0] = 2;
  (s as any).selfieSwimTot[0] = 0;
  (s as any).selfieUndTot[0] = 0;
  (s as any).selfieNudTot[0] = 0;
  (s as any).selfieBathTot[0] = 0;
  (s as any).selfieShowerTot[0] = 0;
  (s as any).selfieTitFlashTot[0] = 0;
  (s as any).selfieAssFlashTot[0] = 0;
  (s as any).selfiePussyFlashTot[0] = 0;
  // TODO-QSP: $selfieLoc[1] = 'bathroom'
  // TODO-QSP: $selfieLocDesc[1] = 'Bathroom'
  // TODO-QSP: $selfieFilePrefix[1] = ''
  (s as any).selfieCloTot[1] = 30;
  (s as any).selfieSwimTot[1] = 0;
  (s as any).selfieUndTot[1] = 23;
  (s as any).selfieNudTot[1] = 30;
  (s as any).selfieBathTot[1] = 30;
  (s as any).selfieShowerTot[1] = 27;
  (s as any).selfieTitFlashTot[1] = 30;
  (s as any).selfieAssFlashTot[1] = 5;
  (s as any).selfiePussyFlashTot[1] = 22;
  // TODO-QSP: $selfieLoc[2] = 'bedroom'
  // TODO-QSP: $selfieLocDesc[2] = 'Bedroom'
  // TODO-QSP: $selfieFilePrefix[2] = ''
  (s as any).selfieCloTot[2] = 30;
  (s as any).selfieSwimTot[2] = 0;
  (s as any).selfieUndTot[2] = 22;
  (s as any).selfieNudTot[2] = 30;
  (s as any).selfieBathTot[2] = 0;
  (s as any).selfieShowerTot[2] = 0;
  (s as any).selfieTitFlashTot[2] = 30;
  (s as any).selfieAssFlashTot[2] = 26;
  (s as any).selfiePussyFlashTot[2] = 25;
  // TODO-QSP: $selfieLoc[3] = 'kitchen'
  // TODO-QSP: $selfieLocDesc[3] = 'Kitchen'
  // TODO-QSP: $selfieFilePrefix[3] = ''
  (s as any).selfieCloTot[3] = 27;
  (s as any).selfieSwimTot[3] = 0;
  (s as any).selfieUndTot[3] = 23;
  (s as any).selfieNudTot[3] = 23;
  (s as any).selfieBathTot[3] = 0;
  (s as any).selfieShowerTot[3] = 0;
  (s as any).selfieTitFlashTot[3] = 21;
  (s as any).selfieAssFlashTot[3] = 1;
  (s as any).selfiePussyFlashTot[3] = 10;
  // TODO-QSP: $selfieLoc[4] = 'livingroom'
  // TODO-QSP: $selfieLocDesc[4] = 'Livingroom'
  // TODO-QSP: $selfieFilePrefix[4] = ''
  (s as any).selfieCloTot[4] = 30;
  (s as any).selfieSwimTot[4] = 0;
  (s as any).selfieUndTot[4] = 28;
  (s as any).selfieNudTot[4] = 30;
  (s as any).selfieBathTot[4] = 0;
  (s as any).selfieShowerTot[4] = 0;
  (s as any).selfieTitFlashTot[4] = 30;
  (s as any).selfieAssFlashTot[4] = 6;
  (s as any).selfiePussyFlashTot[4] = 20;
  // TODO-QSP: $selfieLoc[5] = 'changingroom'
  // TODO-QSP: $selfieLocDesc[5] = 'Changingroom'
  // TODO-QSP: $selfieFilePrefix[5] = ''
  (s as any).selfieCloTot[5] = 30;
  (s as any).selfieSwimTot[5] = 0;
  (s as any).selfieUndTot[5] = 30;
  (s as any).selfieNudTot[5] = 30;
  (s as any).selfieBathTot[5] = 0;
  (s as any).selfieShowerTot[5] = 0;
  (s as any).selfieTitFlashTot[5] = 30;
  (s as any).selfieAssFlashTot[5] = 20;
  (s as any).selfiePussyFlashTot[5] = 27;
  // TODO-QSP: $selfieLoc[6] = 'park'
  // TODO-QSP: $selfieLocDesc[6] = 'Park'
  // TODO-QSP: $selfieFilePrefix[6] = ''
  (s as any).selfieCloTot[6] = 30;
  (s as any).selfieSwimTot[6] = 0;
  (s as any).selfieUndTot[6] = 4;
  (s as any).selfieNudTot[6] = 17;
  (s as any).selfieBathTot[6] = 0;
  (s as any).selfieShowerTot[6] = 0;
  (s as any).selfieTitFlashTot[6] = 26;
  (s as any).selfieAssFlashTot[6] = 2;
  (s as any).selfiePussyFlashTot[6] = 8;
  // TODO-QSP: $selfieLoc[7] = 'locker'
  // TODO-QSP: $selfieLocDesc[7] = 'locker'
  // TODO-QSP: $selfieFilePrefix[7] = ''
  (s as any).selfieCloTot[7] = 26;
  (s as any).selfieSwimTot[7] = 0;
  (s as any).selfieUndTot[7] = 21;
  (s as any).selfieNudTot[7] = 14;
  (s as any).selfieBathTot[7] = 0;
  (s as any).selfieShowerTot[7] = 0;
  (s as any).selfieTitFlashTot[7] = 17;
  (s as any).selfieAssFlashTot[7] = 3;
  (s as any).selfiePussyFlashTot[7] = 4;
  // TODO-QSP: $selfieLoc[8] = 'beach'
  // TODO-QSP: $selfieLocDesc[8] = 'Beach'
  // TODO-QSP: $selfieFilePrefix[8] = ''
  (s as any).selfieCloTot[8] = 0;
  (s as any).selfieSwimTot[8] = 21;
  (s as any).selfieUndTot[8] = 0;
  (s as any).selfieNudTot[8] = 22;
  (s as any).selfieBathTot[8] = 0;
  (s as any).selfieShowerTot[8] = 0;
  (s as any).selfieTitFlashTot[8] = 18;
  (s as any).selfieAssFlashTot[8] = 3;
  (s as any).selfiePussyFlashTot[8] = 4;
  // TODO-QSP: $selfieLoc[9] = 'school_classroom'
  // TODO-QSP: $selfieLocDesc[9] = 'School Classroom'
  // TODO-QSP: $selfieFilePrefix[9] = ''
  (s as any).selfieCloTot[9] = 15;
  (s as any).selfieSwimTot[9] = 0;
  (s as any).selfieUndTot[9] = 2;
  (s as any).selfieNudTot[9] = 0;
  (s as any).selfieBathTot[9] = 0;
  (s as any).selfieShowerTot[9] = 0;
  (s as any).selfieTitFlashTot[9] = 3;
  (s as any).selfieAssFlashTot[9] = 0;
  (s as any).selfiePussyFlashTot[9] = 3;
  // TODO-QSP: $selfieLoc[10] = 'school_bathroom'
  // TODO-QSP: $selfieLocDesc[10] = 'School Bathroom'
  // TODO-QSP: $selfieFilePrefix[10] = ''
  (s as any).selfieCloTot[10] = 28;
  (s as any).selfieSwimTot[10] = 0;
  (s as any).selfieUndTot[10] = 12;
  (s as any).selfieNudTot[10] = 0;
  (s as any).selfieBathTot[10] = 0;
  (s as any).selfieShowerTot[10] = 0;
  (s as any).selfieTitFlashTot[10] = 8;
  (s as any).selfieAssFlashTot[10] = 1;
  (s as any).selfiePussyFlashTot[10] = 8;
  // TODO-QSP: $selfieLoc[11] = 'restroom'
  // TODO-QSP: $selfieLocDesc[11] = 'Restroom'
  // TODO-QSP: $selfieFilePrefix[11] = ''
  (s as any).selfieCloTot[11] = 34;
  (s as any).selfieSwimTot[11] = 0;
  (s as any).selfieUndTot[11] = 25;
  (s as any).selfieNudTot[11] = 3;
  (s as any).selfieBathTot[11] = 0;
  (s as any).selfieShowerTot[11] = 0;
  (s as any).selfieTitFlashTot[11] = 34;
  (s as any).selfieAssFlashTot[11] = 13;
  (s as any).selfiePussyFlashTot[11] = 21;
  if (((s as any).locclass ?? 0) === 'school_bathroom') {
    (s as any).phone_loc['class'] = 'school_bathroom';
    (s as any).phone_loc['type'] = 'public';
  } else {
    if (((s as any).locclass ?? 0) === 'changingroom') {
      (s as any).phone_loc['class'] = 'changingroom';
      (s as any).phone_loc['type'] = 'public';
    } else {
      if (((s as any).locclass ?? 0) === 'city_park'  ||  ((s as any).locclass ?? 0) === 'park') {
        (s as any).phone_loc['class'] = 'park';
        (s as any).phone_loc['type'] = 'public';
      } else {
        if (((s as any).locclass ?? 0) === 'locker') {
          (s as any).phone_loc['class'] = 'locker';
          (s as any).phone_loc['type'] = 'public';
        } else {
          if (((s as any).locclass ?? 0) === 'beach') {
            (s as any).phone_loc['class'] = 'beach';
            (s as any).phone_loc['type'] = 'public';
          } else {
            if (((s as any).locclass ?? 0) === 'classroom') {
              (s as any).phone_loc['class'] = 'classroom';
              (s as any).phone_loc['type'] = 'public';
            } else {
              if (((s as any).locclass ?? 0) === 'restroom'  ||  ((s as any).location_type ?? 0) === 'restroom') {
                (s as any).phone_loc['class'] = 'restroom';
                (s as any).phone_loc['type'] = 'public';
              } else {
                if (((s as any).locclass ?? 0) === 'bathroom'  ||  ((s as any).location_type ?? 0) === 'bathroom') {
                  (s as any).phone_loc['class'] = 'bathroom';
                  (s as any).phone_loc['type'] = 'private';
                } else {
                  if (((s as any).locclass ?? 0) === 'bedroom'  ||  ((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).location_type ?? 0) === 'bedroom') {
                    (s as any).phone_loc['class'] = 'bedroom';
                    (s as any).phone_loc['type'] = 'private';
                  } else {
                    if (((s as any).locclass ?? 0) === 'kitchen'  ||  ((s as any).locclass ?? 0) === 'kitr'  ||  ((s as any).location_type ?? 0) === 'kitchen') {
                      (s as any).phone_loc['class'] = 'kitchen';
                      (s as any).phone_loc['type'] = 'public';
                    } else {
                      if (((s as any).locclass ?? 0) === 'livingr'  ||  ((s as any).locclass ?? 0) === 'livingroom') {
                        (s as any).phone_loc['class'] = 'livingroom';
                        (s as any).phone_loc['type'] = 'public';
                      } else {
                        (s as any).phone_loc['class'] = 'misc';
                        (s as any).phone_loc['type'] = 'public';
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
  scene.build();
}

function enterOpenCamera(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'phone_selfies', 'Phone_selfie_totals');
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
  scene.build();
}

function enterCameraTakeSelfie(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 5);
  qspCall(s, 'exp_gain', 'photoskl', 1);
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    (s as any).ARGS[1] = 'misc';
  }
  qspCall(s, 'stat', '');
  if (((s as any).cfg_vars ?? 0)?.['use_popups'] === 1) {
  } else {
    // TODO-QSP: view '<<$temp_phone_img>>'
  }
  return;
  scene.build();
}

function enterSelfieImage(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'phone_selfies', 'Phone_selfie_totals');
  (s as any).locIndex = qspUntranslated(s, "arrpos('selfieLoc', ARGS[1])", { location: "phone_selfies" });
  if (((s as any).locArgs?.[2] ?? 0) === 'tits'  ||  ((s as any).locArgs?.[2] ?? 0) === 'titflash') {
    (s as any).temp_titflash = ((s as any).selfieTitFlashTot ?? 0)?.[String((s as any).locIndex ?? 0)];
    if (((s as any).temp_titflash ?? 0) > 0) {
      (s as any).phone_rand = 0;
      // TODO-QSP: dynamic '<<$ARGS[1]>>_titflash[<<phone_rand>>] = 1'
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'ass'  ||  ((s as any).locArgs?.[2] ?? 0) === 'assflash') {
      (s as any).temp_assflash = ((s as any).selfieAssFlashTot ?? 0)?.[String((s as any).locIndex ?? 0)];
      if (((s as any).temp_assflash ?? 0) > 0) {
        (s as any).phone_rand = 0;
        // TODO-QSP: dynamic '<<$ARGS[1]>>_assflash[<<phone_rand>>] = 1'
      }
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'pussy'  ||  ((s as any).locArgs?.[2] ?? 0) === 'pussyflash') {
        (s as any).temp_pussyflash = ((s as any).selfiePussyFlashTot ?? 0)?.[String((s as any).locIndex ?? 0)];
        if (((s as any).temp_pussyflash ?? 0) > 0) {
          (s as any).phone_rand = 0;
          // TODO-QSP: dynamic '<<$ARGS[1]>>_pussyflash[<<phone_rand>>] = 1'
        }
      } else {
        if (((s as any).PSwim ?? 0)) {
          (s as any).temp_swim = ((s as any).selfieSwimTot ?? 0)?.[String((s as any).locIndex ?? 0)];
          if (((s as any).temp_swim ?? 0) > 0) {
            (s as any).phone_rand = 0;
            // TODO-QSP: dynamic '<<$ARGS[1]>>_swim[<<phone_rand>>] = 1'
          }
        } else {
          if (((s as any).clothingworntype ?? 0) !== 'nude') {
            (s as any).temp_clotot = ((s as any).selfieCloTot ?? 0)?.[String((s as any).locIndex ?? 0)];
            if (((s as any).temp_clotot ?? 0) > 0) {
              (s as any).phone_rand = 0;
              // TODO-QSP: dynamic '<<$ARGS[1]>>_closelfie[<<phone_rand>>] = 1'
            }
          } else {
            if (((s as any).pantyworntype ?? 0) !== 'none') {
              (s as any).temp_undtot = ((s as any).selfieUndTot ?? 0)?.[String((s as any).locIndex ?? 0)];
              if (((s as any).temp_undtot ?? 0) > 0) {
                (s as any).phone_rand = 0;
                // TODO-QSP: dynamic '<<$ARGS[1]>>_undselfie[<<phone_rand>>] = 1'
              }
            } else {
              (s as any).temp_nudtot = ((s as any).selfieNudTot ?? 0)?.[String((s as any).locIndex ?? 0)];
              if (((s as any).temp_nudtot ?? 0) > 0) {
                (s as any).phone_rand = 0;
                // TODO-QSP: dynamic '<<$ARGS[1]>>_nudselfie[<<phone_rand>>] = 1'
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).result ?? 0) === '') {
    (s as any).phone_rand = 0;
    // TODO-QSP: dynamic '<<$selfieLoc[0]>>_closelfie[<<phone_rand>>] = 1'
  }
  return;
  scene.build();
}

function enterCameraTakeSelfieBathing(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'phone_selfies', 'Phone_selfie_totals');
  if (((s as any).locArgs?.[1] ?? 0) === 'bath') {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'shower') {
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).cfg_vars ?? 0)?.['use_popups'] === 1) {
  } else {
    // TODO-QSP: view '<<$temp_phone_img>>'
  }
  return;
  scene.build();
}

function enterSelfieImageShower(s: GameState, scene: SceneBuilder): void {
  (s as any).locIndex = qspUntranslated(s, "arrpos('selfieLoc', 'bathroom')", { location: "phone_selfies" });
  if (((s as any).locIndex ?? 0) >= 0) {
    (s as any).temp_showertot = ((s as any).selfieShowerTot ?? 0)?.[String((s as any).locIndex ?? 0)];
    (s as any).phone_rand = 0;
    (s as any).bathroom_showerselfie[String((s as any).phone_rand ?? 0)] = 1;
  }
  return;
  scene.build();
}

function enterSelfieImageBathing(s: GameState, scene: SceneBuilder): void {
  (s as any).locIndex = qspUntranslated(s, "arrpos('selfieLoc', 'bathroom')", { location: "phone_selfies" });
  if (((s as any).locIndex ?? 0) >= 0) {
    (s as any).temp_bathtot = ((s as any).selfieBathTot ?? 0)?.[String((s as any).locIndex ?? 0)];
    (s as any).phone_rand = 0;
    (s as any).bathroom_bathselfie[String((s as any).phone_rand ?? 0)] = 1;
  }
  return;
  scene.build();
}

function enterSendSelfieHandler(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_suppress_other_selfies = 1;
  scene.actions([{ label: 'Continue', goto: ['phone_selfies', 'view_selfies'] }]);
  scene.build();
}

function enterViewSelfies(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'phone_selfies', 'Phone_selfie_totals');
  // TODO-QSP: *p $func('phone_selfies', 'get_selfie_layout')
  qspCall(s, 'phone_selfies', 'act_exit');
  return;
  scene.build();
}

function enterActExit(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Stop watching selfies', handler: (st: GameState) => {
    if ((!((s as any).temp_suppress_other_selfies ?? 0))) {
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'menu_loc', 'menu_arg'); } }]);
    } else {
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'temp_ssh_ret_loc', 'temp_ssh_ret_arg'); } }]);
    }
  } },
  ]);
  scene.build();
}

function enterGetSelfieLayout(s: GameState, scene: SceneBuilder): void {
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
  scene.build();
}

function enterShowlocation(s: GameState, scene: SceneBuilder): void {
  scene.text(`<center><b>${qspUntranslated(s, "selfieLocDesc[ARGS[1]]", { location: "phone_selfies" })} selfies</b></center>`);
  // TODO-QSP: *p $func('phone_selfies', 'listretrieve', ARGS[1], $selfieLoc[ARGS[1]])
  qspCall(s, 'phone_selfies', 'act_exit');
  return;
  scene.actions([
    { label: 'Back', goto: ['phone_selfies', 'view_selfies'] },
  ]);
  scene.build();
}

function enterListretrieve(s: GameState, scene: SceneBuilder): void {
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
  scene.build();
}

function enterRetrieveClothedSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieCloTot ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
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
    if (((s as any).temp_clocnt ?? 0) <= ((s as any).selfieCloTot ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
      // TODO-QSP: jump 'temp_loop'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  if (((s as any).locArgs?.[0] ?? 0) === 'retrieve_swim_selfies') {
    if (((s as any).selfieSwimTot ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
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
      if (((s as any).temp_swicnt ?? 0) <= ((s as any).selfieSwimTot ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
        // TODO-QSP: jump 'temp_loop1'
      }
      if (((s as any).temp_cnum ?? 0) !== 4) {
        // TODO-QSP: $result += '<td></td>'
      }
      // TODO-QSP: $result += '</tr><tr></tr>'
    }
    return;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'retrieve_underwear_selfies') {
      if (((s as any).selfieUndTot ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
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
        if (((s as any).temp_undcnt ?? 0) <= ((s as any).selfieUndTot ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
          // TODO-QSP: jump 'temp_loop2'
        }
        if (((s as any).temp_cnum ?? 0) !== 4) {
          // TODO-QSP: $result += '<td></td>'
        }
        // TODO-QSP: $result += '</tr><tr></tr>'
      }
      return;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'retrieve_nude_selfies') {
        if (((s as any).selfieNudTot ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
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
          if (((s as any).temp_nudcnt ?? 0) <= ((s as any).selfieNudTot ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
            // TODO-QSP: jump 'temp_loop3'
          }
          if (((s as any).temp_cnum ?? 0) !== 4) {
            // TODO-QSP: $result += '<td></td>'
          }
          // TODO-QSP: $result += '</tr><tr></tr>'
        }
        return;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'retrieve_bath_selfies') {
          if (((s as any).selfieBathTot ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
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
            if (((s as any).temp_bathcnt ?? 0) <= ((s as any).selfieBathTot ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
              // TODO-QSP: jump 'temp_loop4'
            }
            if (((s as any).temp_cnum ?? 0) !== 4) {
              // TODO-QSP: $result += '<td></td>'
            }
            // TODO-QSP: $result += '</tr><tr></tr>'
          }
          return;
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'retrieve_shower_selfies') {
            if (((s as any).selfieShowerTot ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
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
              if (((s as any).temp_showercnt ?? 0) <= ((s as any).selfieShowerTot ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
                // TODO-QSP: jump 'temp_loop5'
              }
              if (((s as any).temp_cnum ?? 0) !== 4) {
                // TODO-QSP: $result += '<td></td>'
              }
              // TODO-QSP: $result += '</tr><tr></tr>'
            }
            return;
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'retrieve_titflash_selfies') {
              if (((s as any).selfieTitFlashTot ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
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
                if (((s as any).temp_flashtitscnt ?? 0) <= ((s as any).selfieTitFlashTot ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
                  // TODO-QSP: jump 'temp_loop6'
                }
                if (((s as any).temp_cnum ?? 0) !== 4) {
                  // TODO-QSP: $result += '<td></td>'
                }
                // TODO-QSP: $result += '</tr><tr></tr>'
              }
              return;
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 'retrieve_assflash_selfies') {
                if (((s as any).selfieAssFlashTot ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
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
                  if (((s as any).temp_flashasscnt ?? 0) <= ((s as any).selfieAssFlashTot ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
                    // TODO-QSP: jump 'temp_loop7'
                  }
                  if (((s as any).temp_cnum ?? 0) !== 4) {
                    // TODO-QSP: $result += '<td></td>'
                  }
                  // TODO-QSP: $result += '</tr><tr></tr>'
                }
                return;
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 'retrieve_pussyflash_selfies') {
                  if (((s as any).selfiePussyFlashTot ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
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
                    if (((s as any).temp_flashpussycnt ?? 0) <= ((s as any).selfiePussyFlashTot ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
                      // TODO-QSP: jump 'temp_loop8'
                    }
                    if (((s as any).temp_cnum ?? 0) !== 4) {
                      // TODO-QSP: $result += '<td></td>'
                    }
                    // TODO-QSP: $result += '</tr><tr></tr>'
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
    default:
      enterPhoneSelfieTotals(s, scene);
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
