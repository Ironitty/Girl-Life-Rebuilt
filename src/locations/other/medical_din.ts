import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).therapistFuckedPussyStage ?? 0) < 2  &&  ((s as any).knowpreg ?? 0) === 0) {
    if (((s as any).shotdays ?? 0) < 14  &&  ((s as any).birth_control ?? 0)?.['implant_status'] === 0) {
      if (qspFunc(s, 'money', 'can_afford', 2750) === 0) {
        s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
      } else {
        // TODO-QSP: xgt 'medical_din', 'birth_control_shot'
      }
      scene.actions([
        { label: 'Get a birth control shot (0:15) [+$func(\'money\', \'get_cost_string\', 2750)]' }, // TODO-QSP: empty action body
      ]);
    }
  }
  if (((s as any).birth_control ?? 0)?.['implant_status'] === 0) {
    if (qspFunc(s, 'money', 'can_afford', 19650) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      // TODO-QSP: xgt 'medical_din', 'birth_control_implant'
    }
    scene.actions([
      { label: 'Get a birth control implant (0:35) [+$func(\'money\', \'get_cost_string\', 19650)]' }, // TODO-QSP: empty action body
    ]);
  }
  if (((s as any).birth_control ?? 0)?.['implant_status'] === 1  ||  ((s as any).birth_control ?? 0)?.['implant_status'] === 2) {
    if (qspFunc(s, 'money', 'can_afford', 19650) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      // TODO-QSP: xgt 'medical_din', 'birth_control_renew'
    }
    scene.actions([
      { label: 'Renew your birth control implant (0:35) [+$func(\'money\', \'get_cost_string\', 19650)]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.build();
}

export const medical_din: LocationDef = {
  name: 'medical_din',
  region: 'other',
  locclass: 'bathroom',
  enter: enter,
};
