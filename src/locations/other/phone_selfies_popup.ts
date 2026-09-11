// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetSelfie(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterShow(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).temp_suppress_other_selfies ?? 0))) {
    if (((s as any).cfg_vars ?? 0)?.['use_popups'] === 1) {
    } else {
      // TODO-QSP: view 'images/pc/activities/phone/selfies/<<$ARGS[1]>>/<<$ARGS[2]>>/<<$selfieFilePrefix[ARGS[3]]>><<A...
    }
  } else {
    ((s as any).selfie_last_chosen ?? {})['location'] = ((s as any).locArgs?.[1] ?? 0);
    ((s as any).selfie_last_chosen ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
    // TODO-QSP: gt $temp_ssh_ret_loc, $temp_ssh_ret_arg, 'images/pc/activities/phone/selfies/<<$ARGS[1]>>/<<$ARGS[2]...
  }
  scene.build();
}

function enterSetSelfie2(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterShow2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cfg_vars ?? 0)?.['use_popups'] === 1) {
  } else {
    // TODO-QSP: view '<$ARGS[1]>><<ARGS[2]>>.jpg'
  }
  scene.build();
}

function enterSMSSetSelfie(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSMSGetImloc(s: GameState, scene: SceneBuilder): void {
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
      enterSetSelfie(s, scene);
      break;
  }
}

export const phone_selfies_popup: LocationDef = {
  name: 'phone_selfies_popup',
  region: 'other',
  enter: enter,
};
