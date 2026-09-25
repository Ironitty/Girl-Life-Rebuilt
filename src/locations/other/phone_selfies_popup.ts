import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetSelfie(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027phone_selfies_popup\u0027, \u0027show\u0027, ((s as any).locArgs?.[1] ?? \u0027\u0027)); return false;"><img src="images/pc/activities/phone/selfies/' + ((s as any).locArgs?.[1] ?? 0) + '/' + ((s as any).locArgs?.[2] ?? 0) + '/' + qspUntranslated(s, "selfieFilePrefix[ARGS[3]]", { location: "phone_selfies_popup" }) + '' + ((s as any).locArgs?.[4] ?? 0) + '.jpg" style="horizontal-align:center; max-height:90%; max-width:90%"/></a>';
  scene.build();
}

function enterShow(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).temp_suppress_other_selfies ?? 0))) {
    if (((s as any).cfg_vars ?? 0)?.['use_popups'] === 1) {
      alert('<img src="images/pc/activities/phone/selfies/' + ((s as any).locArgs?.[1] ?? 0) + '/' + ((s as any).locArgs?.[2] ?? 0) + '/' + qspUntranslated(s, "selfieFilePrefix[ARGS[3]]", { location: "phone_selfies_popup" }) + '' + ((s as any).locArgs?.[4] ?? 0) + '.jpg">');
    } else {
      s.viewImage = 'images/pc/activities/phone/selfies/' + ((s as any).locArgs?.[1] ?? 0) + '/' + ((s as any).locArgs?.[2] ?? 0) + '/' + qspUntranslated(s, "selfieFilePrefix[ARGS[3]]", { location: "phone_selfies_popup" }) + '' + ((s as any).locArgs?.[4] ?? 0) + '.jpg';
    }
  } else {
    (s as any).temp_suppress_other_selfies = undefined;
    ((s as any).selfie_last_chosen = (s as any).selfie_last_chosen ?? {})['location'] = ((s as any).locArgs?.[1] ?? 0);
    ((s as any).selfie_last_chosen = (s as any).selfie_last_chosen ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
    (s as any).temp_suppress_other_selfies = undefined;
    dynamicGoto(s, 'temp_ssh_ret_loc', 'temp_ssh_ret_arg');
  }
  scene.build();
}

function enterSetSelfie2(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027phone_selfies_popup\u0027, \u0027show2\u0027, ((s as any).locArgs?.[1] ?? \u0027\u0027)); return false;"><img height="150" src="' + ((s as any).locArgs?.[1] ?? 0) + '' + ((s as any).locArgs?.[2] ?? 0) + '.jpg" /></a>';
  scene.build();
}

function enterShow2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cfg_vars ?? 0)?.['use_popups'] === 1) {
    alert('<img src="<$ARGS[1]>>' + ((s as any).locArgs?.[2] ?? 0) + '.jpg">');
  } else {
    s.viewImage = '<$ARGS[1]>>' + ((s as any).locArgs?.[2] ?? 0) + '.jpg';
  }
  scene.build();
}

function enterSMSSetSelfie(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_imloc = qspFunc(s, 'phone_selfies_popup', 'SMS_get_imloc', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
  (s as any).result = '<a href="#" onclick="window.__gameStore.getState().doGoto((((s as any).SMSSelfieVars ?? 0)?.[\u0027return_string\u0027] ?? \u0027\u0027), (((s as any).SMSSelfieVars ?? 0)?.[\u0027SMSIndex\u0027] ?? \u0027\u0027), String((s as any).temp_imloc ?? \u0027\u0027)); return false;"><img src="' + ((s as any).temp_imloc ?? 0) + '" style="horizontal-align:center; max-height:90%; max-width:90%"></a>';
  (s as any).temp_imloc = undefined;
  scene.build();
}

function enterSMSGetImloc(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'images/pc/activities/phone/selfies/' + ((s as any).locArgs?.[1] ?? 0) + '/' + ((s as any).locArgs?.[2] ?? 0) + '/' + qspUntranslated(s, "selfieFilePrefix[ARGS[3]]", { location: "phone_selfies_popup" }) + '' + ((s as any).locArgs?.[4] ?? 0) + '.jpg';
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_selfie':
      enterSetSelfie(s, scene);
      break;
    case 'show':
      enterShow(s, scene);
      break;
    case 'set_selfie2':
      enterSetSelfie2(s, scene);
      break;
    case 'show2':
      enterShow2(s, scene);
      break;
    case 'SMS_set_selfie':
      enterSMSSetSelfie(s, scene);
      break;
    case 'SMS_get_imloc':
      enterSMSGetImloc(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const phone_selfies_popup: LocationDef = {
  name: 'phone_selfies_popup',
  region: 'other',
  enter: enter,
};
