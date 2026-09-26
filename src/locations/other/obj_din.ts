import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
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
  (s as any).settings = undefined;
  (s as any).cheatmenu = undefined;
  (s as any).menu_page = undefined;
  scene.build();
}

function enterMenuDisabled(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Menu is disabled for this event</b></center>');
  scene.build();
}

function enterShowTits(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_nips ?? 0) >= 40  &&  ((s as any).pcs_nips ?? 0) < 60  &&  ((s as any).tits ?? 0) === 2) {
    s.viewImage = 'images/pc/body/tits/t' + ((s as any).tits ?? 0) + '_p.jpg';
  } else {
    s.viewImage = 'images/pc/body/tits/t' + ((s as any).tits ?? 0) + '.jpg';
  }
  scene.build();
}

function enterShowBody(s: GameState, scene: SceneBuilder): void {
  (s as any).img_temp = qspFunc(s, '$body_image', '', 'body');
  s.viewImage = (s as any).img_temp;
  (s as any).img_temp = undefined;
  scene.build();
}

function enterShowTeeth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_brace ?? 0) === 1) {
    s.viewImage = 'images/pc/body/teeth/brace.jpg';
  } else {
    if (((s as any).pcs_teeth ?? 0) === -1) {
      s.viewImage = 'images/pc/body/teeth/goodteeth.jpg';
    } else {
      if (((s as any).pcs_teeth ?? 0) === 1) {
        s.viewImage = 'images/pc/body/teeth/badteeth1.jpg';
      } else {
        if (((s as any).pcs_teeth ?? 0) === 2) {
          s.viewImage = 'images/pc/body/teeth/badteeth2.jpg';
        } else {
          s.viewImage = 'images/pc/body/teeth/averageteeth.jpg';
        }
      }
    }
  }
  scene.build();
}

function enterShowMissingTeeth(s: GameState, scene: SceneBuilder): void {
  s.viewImage = 'images/pc/body/teeth/missing.jpg';
  scene.build();
}

function enterRecords(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'journal', 'records');
  scene.build();
}

function enterEmergency(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>YOU JUST had to use emergency exit, this is only for use when you get a BLANK SCREEN.</b></center>');
  scene.text('<center><b>DO NOT use this option without a good reason, doing so can cause instability and could damage your save game.</b></center>');
  scene.text('<center><b>If this was the result of a bug in the game, then please report the issue and when / how it was trigger with as much info as you can on the tfgamesite.com forum.</b></center>');
  if (Object.keys((s as any).mod_name ?? {}).length > 0) {
    scene.actions([
      { label: 'Disable all mods', handler: (st: GameState) => {
    if (((st as any).input ?? 0)('Are you sure? ALL % will be disabled!<br>please input <b>qqq</b> to confirm') === 'qqq') {
      qspCall(st, 'mod_system', 'delete_all_mods');
    }
  } },
    ]);
  }
  if (((s as any).loc ?? 0) !== '') {
    scene.actions([
      { label: 'Cancel', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
  dynamicGoto(s, 'prevLoc', 'prevArg');
  scene.build();
}

function enter_1Hour2(s: GameState, scene: SceneBuilder): void {
  (s as any).hour = ((s as any).hour ?? 0) + (1);
  qspCall(s, 'stat', '');
  dynamicGoto(s, 'prevLoc', 'prevArg');
  scene.build();
}

function enterOld(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: killobj
  (s as any).oldobjmenu = 1;
  if (((s as any).cheatVars ?? 0)?.['console'] === 0) {
  }
  if (((s as any).cheatVars ?? 0)?.['time'] === 1) {
  }
  if ((!((s as any).debug_warning_closed ?? 0))) {
  }
  if (((s as any).objectWindowDebug ?? 0) === 1) {
    if (Object.keys((s as any).ObjDebugVars ?? {}).length > 0) {
      (s as any).i = 0;
      while (true) {
        if (((s as any).i ?? 0) < Object.keys((s as any).ObjDebugVars ?? {}).length) {
          if (((String((((s as any).ObjDebugVars ?? 0)?.[String((s as any).i ?? 0)] ?? 0)).indexOf(String('$'))) + 1) === 1) {
            scene.text('$tmp = ' + (((s as any).ObjDebugVars ?? 0)?.[String((s as any).i ?? 0)] ?? 0) + '');
          } else {
            scene.text('tmp = ' + (((s as any).ObjDebugVars ?? 0)?.[String((s as any).i ?? 0)] ?? 0) + '');
          }
          (s as any).i = ((s as any).i ?? 0) + (1);
          break;
        }
      }
    }
  }
  if (String((s as any).locArgs?.[0] ?? '') === "((s as any).AddDebugVar ?? 0)") {
    if (String((s as any).locArgs?.[1] ?? '') !== '') {
      (s as any).i = 0;
      ((s as any).ObjDebugVars = (s as any).ObjDebugVars ?? {})[String((s as any).i ?? 0)] = '' + ((s as any).locArgs?.[1] ?? 0) + '';
    }
  }
  if (String((s as any).locArgs?.[0] ?? '') === "((s as any).DeleteDebugVar ?? 0)") {
    if (String((s as any).locArgs?.[1] ?? '') !== '') {
      if (Object.keys((s as any).ObjDebugVars ?? {}).length > 0) {
        (s as any).i = 0;
        while (true) {
          if (((s as any).i ?? 0) < Object.keys((s as any).ObjDebugVars ?? {}).length) {
            if (((s as any).ObjDebugVars ?? 0)?.[String((s as any).i ?? 0)] === String((s as any).locArgs?.[1] ?? '')) {
              (s as any).ObjDebugVars = undefined;
              (s as any).i = 0;
            } else {
              (s as any).i = ((s as any).i ?? 0) + (1);
            }
            break;
          }
        }
      }
    }
  }
  scene.build();
}

function enterWait(s: GameState, scene: SceneBuilder): void {
  (s as any).waitStr = window.prompt("How long would you like to wait?<br>(maximum 120 minutes, leave blank or press cancel to wait 15 minutes)<br>Alternatively, input a time to wait until (hh:mm). It is " + ((String(100+((s as any).hour ?? 0)).slice((2)-1, ((2)-1)+(2)))) + ":" + ((String(100+((s as any).minut ?? 0)).slice((2)-1, ((2)-1)+(2)))) + " now.") ?? '';
  (s as any).waiting = 0;
  if (((s as any).waitStr ?? 0) === '') {
    (s as any).waiting = 15;
  } else {
    if (!isNaN(((s as any).waitStr ?? 0)) && ((s as any).waitStr ?? 0) !== '' === 0) {
      (s as any).waiting = parseFloat((String(((s as any).waitStr ?? 0)).slice((1)-1, ((1)-1)+(2)))) * 60 + parseFloat((String(((s as any).waitStr ?? 0)).slice((4)-1, ((4)-1)+(2)))) - ((s as any).minut ?? 0) - ((s as any).hour ?? 0) * 60;
    } else {
      (s as any).waiting = parseFloat(((s as any).waitStr ?? 0));
    }
  }
  if (((s as any).waiting ?? 0) > 0  &&  ((s as any).waiting ?? 0) <= 120) {
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).waiting ?? 0));
  } else {
    alert('Invalid time.');
  }
  qspCall(s, 'stat', '');
  (s as any).waiting = undefined;
  (s as any).waitStr = undefined;
  dynamicGoto(s, 'prevLoc', 'prevArg');
  scene.build();
}

function enterRest(s: GameState, scene: SceneBuilder): void {
  (s as any).waiting = parseFloat(window.prompt("How long would you like to rest?<br>(Default 15 minutes, maximum 120 minutes)") ?? '');
  if ((!((s as any).waiting ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
  } else {
    if (((s as any).waiting ?? 0) > 0  &&  ((s as any).waiting ?? 0) <= 120) {
      (s as any).minut = ((s as any).minut ?? 0) + (((s as any).waiting ?? 0));
      qspCall(s, 'mood', 'raise', 'tiny');
      if (((s as any).pcs_sleep ?? 0) < 90  &&  ((s as any).waiting ?? 0) >= 60) {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (10);
      }
    } else {
      alert('Invalid time.');
    }
  }
  qspCall(s, 'stat', '');
  (s as any).waiting = undefined;
  dynamicGoto(s, 'prevLoc', 'prevArg');
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
    case 'menu_disabled':
      enterMenuDisabled(s, scene);
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
    case 'records':
      enterRecords(s, scene);
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
