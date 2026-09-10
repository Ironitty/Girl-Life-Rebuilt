import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterRegularUpdate(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).dounspell ?? 0))) {
    qspCall(s, 'body', 'UpdateBodyMeasurement');
    (s as any).temp_weight = qspFunc(s, 'body', 'CalcWeight2');
    (s as any).pcs_weight[0] = ((s as any).temp_weight ?? 0) / 10;
    (s as any).pcs_weight[1] = ((s as any).temp_weight ?? 0) % 10;
    (s as any).temp_bmi = qspFunc(s, 'body', 'CalcBMI2');
    (s as any).pcs_bmi[0] = ((s as any).temp_bmi ?? 0) / 10;
    (s as any).pcs_bmi[1] = ((s as any).temp_bmi ?? 0) % 10;
  }
  if (((s as any).pcs_skin ?? 0) > 1000) {
    (s as any).pcs_skin = 1000;
  } else {
    (s as any).pcs_skin = 0;
  }
  if (((s as any).clit_size ?? 0) > 100) {
    (s as any).clit_size = 100;
  }
  return;
  scene.build();
}

function enterUpdateBodyMeasurement(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hips = (((s as any).pcs_hgt ?? 0) * ((s as any).bodyVars ?? 0)?.['hratio']) / 100 + ((s as any).bodyVars ?? 0)?.['vhips'];
  (s as any).pcs_waist = (((s as any).pcs_hips ?? 0) * ((s as any).bodyVars ?? 0)?.['wratio']) / 100 + ((s as any).bodyVars ?? 0)?.['vofat'];
  (s as any).pcs_band = (((s as any).pcs_waist ?? 0) * ((s as any).bodyVars ?? 0)?.['bratio']) / 100 + ((s as any).bodyVars ?? 0)?.['vofat'];
  (s as any).pcs_bust = (((s as any).pcs_waist ?? 0) * ((s as any).bodyVars ?? 0)?.['bratio']) / 100 + ((s as any).pcs_mass ?? 0)?.['bust'] + ((s as any).bodyVars ?? 0)?.['bust_bonus'] + ((s as any).bodyVars ?? 0)?.['bust_silicone'] + ((s as any).min ?? 0)(((s as any).max ?? 0)(-10, ((s as any).bodyVars ?? 0)?.['bust_other']), 10) + ((s as any).bodyVars ?? 0)?.['bust_magic'] + (((s as any).pcs_mass ?? 0)?.['preg'] + 2) / 5 + ((s as any).bodyVars ?? 0)?.['bust_lact'];
  (s as any).pcs_butt = ((s as any).pcs_hips ?? 0) + ((s as any).min ?? 0)(((s as any).pcs_mass ?? 0)?.['butt'], 50) + ((s as any).bodyVars ?? 0)?.['butt_bonus'] + ((s as any).bodyVars ?? 0)?.['butt_silicone'] + ((s as any).min ?? 0)(((s as any).max ?? 0)(-10, ((s as any).bodyVars ?? 0)?.['butt_other']), 10) + ((s as any).pcs_butt_tr ?? 0) / 2;
  (s as any).pcs_cupsize = ((s as any).pcs_bust ?? 0) - ((s as any).pcs_band ?? 0);
  (s as any).pcs_buttsize = ((s as any).pcs_butt ?? 0) - ((s as any).pcs_hips ?? 0);
  return;
  scene.build();
}

function enterCalcWeight(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (2820 + 33 * (((s as any).pcs_mass ?? 0)?.['body'] + ((s as any).pcs_mass ?? 0)?.['bust'] + ((s as any).pcs_mass ?? 0)?.['butt'] + (4 * ((s as any).pcs_mass ?? 0)?.['preg'] + 2) / 5) + 70 * (((s as any).pcs_hgt ?? 0) - 165)) / 100;
  return;
  scene.build();
}

function enterCalcWeight2(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (2820 + 33 * (((s as any).pcs_mass ?? 0)?.['body'] + ((s as any).pcs_mass ?? 0)?.['bust'] + ((s as any).pcs_mass ?? 0)?.['butt'] + (4 * ((s as any).pcs_mass ?? 0)?.['preg'] + 2) / 5) + 70 * (((s as any).pcs_hgt ?? 0) - 165)) / 10;
  return;
  scene.build();
}

function enterCalcBMI(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (1000 * (10 * ((s as any).pcs_weight ?? 0)[0] + ((s as any).pcs_weight ?? 0)[1])) / (((s as any).pcs_hgt ?? 0) * ((s as any).pcs_hgt ?? 0));
  return;
  scene.build();
}

function enterCalcBMI2(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (10000 * (10 * ((s as any).pcs_weight ?? 0)[0] + ((s as any).pcs_weight ?? 0)[1])) / (((s as any).pcs_hgt ?? 0) * ((s as any).pcs_hgt ?? 0));
  return;
  scene.build();
}

function enterCalcOptBodyMass(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] === 0) {
    (s as any).ARGS[1] = 225;
  }
  (s as any).result = ((((s as any).pcs_hgt ?? 0) * ((s as any).pcs_hgt ?? 0) * ((s as any).ARGS ?? 0)[1]) - 2820000 - 70000 * (((s as any).pcs_hgt ?? 0) - 165)) / (550 * (60 + ((s as any).pcs_mass ?? 0)?.['bust_gen'] + ((s as any).pcs_mass ?? 0)?.['butt_gen']));
  return;
  scene.build();
}

function enterDailyUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dounspell ?? 0) !== 1) {
    qspCall(s, 'body', 'Update_Body');
  } else {
    if (((s as any).strenbuf ?? 0) > 90) {
      (s as any).strenbuf = ((s as any).strenbuf ?? 0) - (2);
    } else {
      (s as any).strenbuf = ((s as any).strenbuf ?? 0) - (1);
    }
    if (((s as any).vitalbuf ?? 0) > 90) {
      (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) - (2);
    } else {
      (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) - (1);
    }
    qspCall(s, 'body', 'Update_StatBuffs');
  }
  qspCall(s, 'body', 'RegularUpdate');
  qspCall(s, 'body', 'Update_daily_body_other');
  qspCall(s, 'body', 'Update_Eyelashes');
  qspCall(s, 'body', 'Update_Hair');
  qspCall(s, 'body', 'Update_Pubes_and_leghair');
  if (((s as any).mc_inventory ?? 0)?.['scrunchies'] > 0  &&  (Math.floor(Math.random() * 100) + 1) <= 8) {
    (s as any).mc_inventory['scrunchies'] = ((s as any).mc_inventory['scrunchies'] ?? 0) - (1);
  }
  if (((s as any).skinDailyPenalty ?? 0)  < 0) {
    (s as any).skinDailyPenalty = 0;
  }
  if (((s as any).skinDailyGain ?? 0)  < 0) {
    (s as any).skinDailyGain = 0;
  }
  if (((s as any).pcs_skin ?? 0) <= 300) {
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (((s as any).min ?? 0)(((s as any).skinDailyGain ?? 0) * 2, 20)  - ((s as any).skinDailyPenalty ?? 0) - 1);
  } else {
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (((s as any).min ?? 0)(((s as any).skinDailyGain ?? 0), 10)    - ((s as any).skinDailyPenalty ?? 0) - 1);
    if (((s as any).pcs_skin ?? 0) <= 800) {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (((s as any).min ?? 0)(((s as any).skinDailyGain ?? 0) / 2, 5)  - ((s as any).skinDailyPenalty ?? 0) - 1);
    } else {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (((s as any).min ?? 0)(((s as any).skinDailyGain ?? 0) / 3, 3)  - ((s as any).skinDailyPenalty ?? 0) - 1);
      if (((s as any).pcs_skin ?? 0) <= 1000) {
        (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (((s as any).min ?? 0)(((s as any).skinDailyGain ?? 0) / 5, 2)  - ((s as any).skinDailyPenalty ?? 0) - 1);
      }
      qspCall(s, 'body', 'Update_Teeth');
      qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
      qspCall(s, 'body', 'Update_Appearance');
      qspCall(s, 'body', 'UpdateBodyImage');
      return;
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'RegularUpdate':
      enterRegularUpdate(s, scene);
      break;
    case 'UpdateBodyMeasurement':
      enterUpdateBodyMeasurement(s, scene);
      break;
    case 'CalcWeight':
      enterCalcWeight(s, scene);
      break;
    case 'CalcWeight2':
      enterCalcWeight2(s, scene);
      break;
    case 'CalcBMI':
      enterCalcBMI(s, scene);
      break;
    case 'CalcBMI2':
      enterCalcBMI2(s, scene);
      break;
    case 'CalcOptBodyMass':
      enterCalcOptBodyMass(s, scene);
      break;
    case 'DailyUpdate':
      enterDailyUpdate(s, scene);
      break;
    default:
      enterRegularUpdate(s, scene);
      break;
  }
}

export const body: LocationDef = {
  name: 'body',
  region: 'other',
  enter: enter,
};
