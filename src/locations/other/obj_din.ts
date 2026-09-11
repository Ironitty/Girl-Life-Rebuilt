import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'menu_disabled') {
    // TODO-QSP: $func('wrap', 'neg b', 'Menu is disabled for this event')
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'records') {
    scene.actions([{ label: 'Continue', goto: ['journal', 'records'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === "((s as any).AddDebugVar ?? 0)") {
    if (((s as any).locArgs?.[1] ?? 0) !== '') {
      (s as any).i = 0;
      // TODO-QSP: $ObjDebugVars[i] = '<<$ARGS[1]>>'
    }
  }
  if (((s as any).locArgs?.[0] ?? 0) === "((s as any).DeleteDebugVar ?? 0)") {
    if (((s as any).locArgs?.[1] ?? 0) !== '') {
      if (Object.keys((s as any).ObjDebugVars ?? {}).length > 0) {
        (s as any).i = 0;
        // TODO-QSP: :DeleteDebugVarLoop
        if (((s as any).i ?? 0) < Object.keys((s as any).ObjDebugVars ?? {}).length) {
          if (((s as any).ObjDebugVars ?? 0)?.[String((s as any).i ?? 0)] === ((s as any).locArgs?.[1] ?? 0)) {
            (s as any).i = 0;
          } else {
            (s as any).i = ((s as any).i ?? 0) + (1);
          }
          // TODO-QSP: jump 'DeleteDebugVarLoop'
        }
      }
    }
  }
  scene.build();
}

function enterChartabs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_character', 'charactertabs', ((s as any).locArgs?.[1] ?? 0));
  scene.build();
}

function enterBodytabs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'lookstabs', ((s as any).locArgs?.[1] ?? 0));
  scene.build();
}

function enterSettingtabs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_settings', 'settingstabs', ((s as any).locArgs?.[1] ?? 0));
  scene.build();
}

function enterCheattabs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cheatmenu_din', 'cheattabs', ((s as any).locArgs?.[1] ?? 0));
  scene.build();
}

function enterMenuExit(s: GameState, scene: SceneBuilder): void {
  (s as any).settingmode = 0;
  scene.build();
}

function enterShowTits(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_nips ?? 0) >= 40  &&  ((s as any).pcs_nips ?? 0) < 60  &&  ((s as any).tits ?? 0) === 2) {
    // TODO-QSP: view 'images/pc/body/tits/t<<tits>>_p.jpg'
  } else {
    // TODO-QSP: view 'images/pc/body/tits/t<<tits>>.jpg'
  }
  scene.build();
}

function enterShowBody(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: view '<<$img_temp>>'
  scene.build();
}

function enterShowTeeth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_brace ?? 0) === 1) {
    // TODO-QSP: view 'images/pc/body/teeth/brace.jpg'
  } else {
    if (((s as any).pcs_teeth ?? 0) === -1) {
      // TODO-QSP: view 'images/pc/body/teeth/goodteeth.jpg'
    } else {
      if (((s as any).pcs_teeth ?? 0) === 1) {
        // TODO-QSP: view 'images/pc/body/teeth/badteeth1.jpg'
      } else {
        if (((s as any).pcs_teeth ?? 0) === 2) {
          // TODO-QSP: view 'images/pc/body/teeth/badteeth2.jpg'
        } else {
          // TODO-QSP: view 'images/pc/body/teeth/averageteeth.jpg'
        }
      }
    }
  }
  scene.build();
}

function enterShowMissingTeeth(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: view 'images/pc/body/teeth/missing.jpg'
  scene.build();
}

function enterEmergency(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>YOU JUST had to use emergency exit, this is only for use when you get a BLANK SCREEN.</b></center>');
  scene.text('<center><b>DO NOT use this option without a good reason, doing so can cause instability and could damage your save game.</b></center>');
  scene.text('<center><b>If this was the result of a bug in the game, then please report the issue and when / how it was trigger with as much info as you can on the tfgamesite.com forum.</b></center>');
  if (Object.keys((s as any).mod_name ?? {}).length > 0) {
    scene.actions([
      { label: 'Disable all mods', handler: (st: GameState) => {
    if (((s as any).input ?? 0)('Are you sure? ALL % will be disabled!<br>please input <b>qqq</b> to confirm') === 'qqq') {
      qspCall(s, 'mod_system', 'delete_all_mods');
    }
  } },
    ]);
  }
  if (((s as any).loc ?? 0) !== '') {
    scene.actions([
      { label: 'Cancel', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    if (((s as any).curloc ?? 0) !== '') {
      scene.actions([
        { label: 'Cancel', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Go to Pavlovsk', handler: (st: GameState) => {
    (st as any).inSleep = 0;
  }, goto: ['pav_residential', ''] },
    { label: 'Go to City Residential', handler: (st: GameState) => {
    (st as any).inSleep = 0;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enter_1Hour(s: GameState, scene: SceneBuilder): void {
  (s as any).hour = ((s as any).hour ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  scene.build();
}

function enter_1Hour2(s: GameState, scene: SceneBuilder): void {
  (s as any).hour = ((s as any).hour ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  scene.build();
}

function enterOld(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: killobj
  (s as any).oldobjmenu = 1;
  // TODO-QSP: addobj '<center>Refresh</center>'
  if (((s as any).cheatVars ?? 0)?.['console'] === 0) {
    // TODO-QSP: addobj '<center>Console</center>'
  }
  // TODO-QSP: addobj '<center>Toggle Debug Variables</center>'
  // TODO-QSP: addobj '<center>Add Debug Variable</center>'
  // TODO-QSP: addobj '<center>Delete Debug Variable</center>'
  // TODO-QSP: addobj '<center>Switch HTML</center>'
  // TODO-QSP: addobj '<center>Toggle Call Trace</center>'
  if (((s as any).cheatVars ?? 0)?.['time'] === 1) {
    // TODO-QSP: addobj '<center>-1 Hour</center>'
    // TODO-QSP: addobj '<center>+1 Hour</center>'
  }
  // TODO-QSP: addobj ''
  // TODO-QSP: addobj '<center><font color = red>Emergency</font></center>'
  // TODO-QSP: addobj ''
  if ((!((s as any).debug_warning_closed ?? 0))) {
    // TODO-QSP: addobj '<center>This window is for debug only and can be safely closed.</center>'
    // TODO-QSP: addobj '<center>Remove debug info</center>'
  }
  if (((s as any).objectWindowDebug ?? 0) === 1) {
    // TODO-QSP: addobj '$curloc: <<$curloc>>'
    // TODO-QSP: addobj '$loc: <<$loc>>'
    // TODO-QSP: addobj '$loc_arg: <<$loc_arg>>'
    // TODO-QSP: addobj '$location_type: <<$location_type>>'
    // TODO-QSP: addobj 'week: <<week>>'
    // TODO-QSP: addobj 'daystart: <<daystart>>'
    if (Object.keys((s as any).ObjDebugVars ?? {}).length > 0) {
      (s as any).i = 0;
      // TODO-QSP: :AddDebugVarLoop
      if (((s as any).i ?? 0) < Object.keys((s as any).ObjDebugVars ?? {}).length) {
        if (((((s as any).ObjDebugVars ?? 0)?.[String((s as any).i ?? 0)]).indexOf(('$'))) + 1 === 1) {
          // TODO-QSP: dynamic '$tmp = <<$ObjDebugVars[i]>>'
          // TODO-QSP: addobj '<<$ObjDebugVars[i]>>: <<$tmp>>'
        } else {
          // TODO-QSP: dynamic 'tmp = <<$ObjDebugVars[i]>>'
          // TODO-QSP: addobj '<<$ObjDebugVars[i]>>: <<tmp>>'
        }
        (s as any).i = ((s as any).i ?? 0) + (1);
        // TODO-QSP: jump 'AddDebugVarLoop'
      }
    }
  }
  scene.build();
}

function enterWait(s: GameState, scene: SceneBuilder): void {
  (s as any).waiting = 0;
  if (((s as any).waitStr ?? 0) === '') {
    (s as any).waiting = 15;
  } else {
    if (!isNaN($waitStr) && $waitStr !== '' === 0) {
      (s as any).waiting = parseFloat(((((s as any).waitStr ?? 0)).slice((1)-1, ((1)-1)+(2)))) * 60 + parseFloat(((((s as any).waitStr ?? 0)).slice((4)-1, ((4)-1)+(2)))) - ((s as any).minut ?? 0) - ((s as any).hour ?? 0) * 60;
    } else {
      (s as any).waiting = qspUntranslated(s, "val(waitStr)", { location: "obj_din" });
    }
  }
  if (((s as any).waiting ?? 0) > 0  &&  ((s as any).waiting ?? 0) <= 120) {
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).waiting ?? 0));
  }
  qspCall(s, 'stat', '');
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  scene.build();
}

function enterRest(s: GameState, scene: SceneBuilder): void {
  (s as any).waiting = qspUntranslated(s, "val(input(\"How long would you like to rest?<br>(Default 15 minutes, maximum 120 minutes)\"))", { location: "obj_din" });
  if ((!((s as any).waiting ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
  } else {
    if (((s as any).waiting ?? 0) > 0  &&  ((s as any).waiting ?? 0) <= 120) {
      (s as any).minut = ((s as any).minut ?? 0) + (((s as any).waiting ?? 0));
      qspCall(s, 'mood', 'raise', 'tiny');
      if (((s as any).pcs_sleep ?? 0) < 90  &&  ((s as any).waiting ?? 0) >= 60) {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (10);
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'chartabs':
      enterChartabs(s, scene);
      break;
    case 'bodytabs':
      enterBodytabs(s, scene);
      break;
    case 'settingtabs':
      enterSettingtabs(s, scene);
      break;
    case 'cheattabs':
      enterCheattabs(s, scene);
      break;
    case 'menu_exit':
      enterMenuExit(s, scene);
      break;
    case 'show_tits':
      enterShowTits(s, scene);
      break;
    case 'show_body':
      enterShowBody(s, scene);
      break;
    case 'show_teeth':
      enterShowTeeth(s, scene);
      break;
    case 'show_missing_teeth':
      enterShowMissingTeeth(s, scene);
      break;
    case 'emergency':
      enterEmergency(s, scene);
      break;
    case '-1 Hour':
      enter_1Hour(s, scene);
      break;
    case '+1 Hour':
      enter_1Hour2(s, scene);
      break;
    case 'old':
      enterOld(s, scene);
      break;
    case 'wait':
      enterWait(s, scene);
      break;
    case 'rest':
      enterRest(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const obj_din: LocationDef = {
  name: 'obj_din',
  title: 'Menu is disabled for this event',
  region: 'other',
  enter: enter,
};
