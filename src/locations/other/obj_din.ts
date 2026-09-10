import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
    // TODO-QSP: view 'images/pc/body/teeth/goodteeth.jpg'
    if (((s as any).pcs_teeth ?? 0) === 1) {
      // TODO-QSP: view 'images/pc/body/teeth/badteeth1.jpg'
    } else {
      // TODO-QSP: view 'images/pc/body/teeth/badteeth2.jpg'
      // TODO-QSP: view 'images/pc/body/teeth/averageteeth.jpg'
    }
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
      if (((s as any).arrsize ?? 0)('ObjDebugVars') > 0) {
        (s as any).i = 0;
        // TODO-QSP: :DeleteDebugVarLoop
        if (((s as any).i ?? 0) < ((s as any).arrsize ?? 0)('ObjDebugVars')) {
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
    default:
      enterChartabs(s, scene);
      break;
  }
}

export const obj_din: LocationDef = {
  name: 'obj_din',
  title: 'Menu is disabled for this event',
  region: 'other',
  enter: enter,
};
