import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGetSmsId(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length > 1) {
    (s as any).result = qspUntranslated(s, "SMSIdentifier[ARGS[1]]", { location: "SMStext_builder" });
  } else {
    if (Object.keys((s as any).SMSBuilderVars ?? {}).length > 0) {
      (s as any).result = ((s as any).SMSBuilderVars ?? 0)?.['SMSIdentifier'];
    } else {
      (s as any).result = ((s as any).telefon ?? 0)?.['SMSIdentifier'];
    }
  }
  return;
  scene.build();
}

function enterGetIndexFromId(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspUntranslated(s, "arrpos('SMSIdentifier', ARGS[1])", { location: "SMStext_builder" });
  return;
  scene.build();
}

function enterCheckIfSmsExistsFromId(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (qspFunc(s, 'SMStext_builder', 'get_index_from_id', qspUntranslated(s, "ARGS[1]", { location: "SMStext_builder" })) >= 0);
  return;
  scene.build();
}

function enterReset(s: GameState, scene: SceneBuilder): void {
  (s as any).SMSBuilderVars['reset_flag'] = 1;
  return;
  scene.build();
}

function enterDoesIndexExist(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).locArgs?.[1] ?? 0) >= 0  &&  ((s as any).locArgs?.[1] ?? 0) < ((s as any).telefon ?? 0)?.['SMSCount']);
  return;
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'end') {
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_sms_id':
      enterGetSmsId(s, scene);
      break;
    case 'get_index_from_id':
      enterGetIndexFromId(s, scene);
      break;
    case 'check_if_sms_exists_from_id':
      enterCheckIfSmsExistsFromId(s, scene);
      break;
    case 'reset':
      enterReset(s, scene);
      break;
    case 'does_index_exist':
      enterDoesIndexExist(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    default:
      enterGetSmsId(s, scene);
      break;
  }
}

export const SMStext_builder: LocationDef = {
  name: 'SMStext_builder',
  region: 'other',
  enter: enter,
};
