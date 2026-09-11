import { qspUntranslated } from '../_shared/qspUntranslated';

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
    if (((s as any).pcs_skin ?? 0) < 0) {
      (s as any).pcs_skin = 0;
    }
  }
  if (((s as any).clit_size ?? 0) > 100) {
    (s as any).clit_size = 100;
  }
  return;
  scene.build();
}

function enterUpdateBodyMeasurement(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hips = (((s as any).pcs_hgt ?? 0) * ((s as any).bodyVars ?? {})?.['hratio']) / 100 + ((s as any).bodyVars ?? {})?.['vhips'];
  (s as any).pcs_waist = (((s as any).pcs_hips ?? 0) * ((s as any).bodyVars ?? {})?.['wratio']) / 100 + ((s as any).bodyVars ?? {})?.['vofat'];
  (s as any).pcs_band = (((s as any).pcs_waist ?? 0) * ((s as any).bodyVars ?? {})?.['bratio']) / 100 + ((s as any).bodyVars ?? {})?.['vofat'];
  (s as any).pcs_bust = (((s as any).pcs_waist ?? 0) * ((s as any).bodyVars ?? {})?.['bratio']) / 100 + ((s as any).pcs_mass ?? {})?.['bust'] + ((s as any).bodyVars ?? {})?.['bust_bonus'] + ((s as any).bodyVars ?? {})?.['bust_silicone'] + Math.min(Math.max((-10), ((s as any).bodyVars ?? 0)?.['bust_other']), 10) + ((s as any).bodyVars ?? {})?.['bust_magic'] + (((s as any).pcs_mass ?? {})?.['preg'] + 2) / 5 + ((s as any).bodyVars ?? {})?.['bust_lact'];
  (s as any).pcs_butt = ((s as any).pcs_hips ?? 0) + Math.min(((s as any).pcs_mass ?? 0)?.['butt'], 50) + ((s as any).bodyVars ?? {})?.['butt_bonus'] + ((s as any).bodyVars ?? {})?.['butt_silicone'] + Math.min(Math.max((-10), ((s as any).bodyVars ?? 0)?.['butt_other']), 10) + ((s as any).pcs_butt_tr ?? 0) / 2;
  (s as any).pcs_cupsize = ((s as any).pcs_bust ?? 0) - ((s as any).pcs_band ?? 0);
  (s as any).pcs_buttsize = ((s as any).pcs_butt ?? 0) - ((s as any).pcs_hips ?? 0);
  return;
  scene.build();
}

function enterCalcWeight(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (2820 + 33 * (((s as any).pcs_mass ?? {})?.['body'] + ((s as any).pcs_mass ?? {})?.['bust'] + ((s as any).pcs_mass ?? {})?.['butt'] + (4 * ((s as any).pcs_mass ?? {})?.['preg'] + 2) / 5) + 70 * (((s as any).pcs_hgt ?? 0) - 165)) / 100;
  return;
  scene.build();
}

function enterCalcWeight2(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (2820 + 33 * (((s as any).pcs_mass ?? {})?.['body'] + ((s as any).pcs_mass ?? {})?.['bust'] + ((s as any).pcs_mass ?? {})?.['butt'] + (4 * ((s as any).pcs_mass ?? {})?.['preg'] + 2) / 5) + 70 * (((s as any).pcs_hgt ?? 0) - 165)) / 10;
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
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    (s as any).ARGS[1] = 225;
  }
  (s as any).result = ((((s as any).pcs_hgt ?? 0) * ((s as any).pcs_hgt ?? 0) * ((s as any).ARGS ?? 0)[1]) - 2820000 - 70000 * (((s as any).pcs_hgt ?? 0) - 165)) / (550 * (60 + ((s as any).pcs_mass ?? {})?.['bust_gen'] + ((s as any).pcs_mass ?? {})?.['butt_gen']));
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
      if (((s as any).strenbuf ?? 0) > 80) {
        (s as any).strenbuf = ((s as any).strenbuf ?? 0) - (1);
      }
    }
    if (((s as any).vitalbuf ?? 0) > 90) {
      (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) - (2);
    } else {
      if (((s as any).vitalbuf ?? 0) > 80) {
        (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) - (1);
      }
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
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.min(((s as any).skinDailyGain ?? 0) * 2, 20)  - ((s as any).skinDailyPenalty ?? 0) - 1);
  } else {
    if (((s as any).pcs_skin ?? 0) <= 600) {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.min(((s as any).skinDailyGain ?? 0), 10)    - ((s as any).skinDailyPenalty ?? 0) - 1);
    } else {
      if (((s as any).pcs_skin ?? 0) <= 800) {
        (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.min(((s as any).skinDailyGain ?? 0) / 2, 5)  - ((s as any).skinDailyPenalty ?? 0) - 1);
      } else {
        if (((s as any).pcs_skin ?? 0) <= 900) {
          (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.min(((s as any).skinDailyGain ?? 0) / 3, 3)  - ((s as any).skinDailyPenalty ?? 0) - 1);
        } else {
          if (((s as any).pcs_skin ?? 0) <= 1000) {
            (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.min(((s as any).skinDailyGain ?? 0) / 5, 2)  - ((s as any).skinDailyPenalty ?? 0) - 1);
          }
        }
      }
    }
  }
  qspCall(s, 'body', 'Update_Teeth');
  qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
  qspCall(s, 'body', 'Update_Appearance');
  qspCall(s, 'body', 'UpdateBodyImage');
  return;
  scene.build();
}

function enterUpdate_Appearance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'AppearanceSystem', '');
  qspCall(s, 'body_desc', '');
  return;
  scene.build();
}

function enterUpdateBodyImage(s: GameState, scene: SceneBuilder): void {
  (s as any).bodyVars['desc'] = qspFunc(s, 'body_structure', 'body_desc');
  (s as any).bodyVars['bmi_desc'] = qspFunc(s, 'body_structure', 'bmi_desc');
  (s as any).bodyVars['img'] = qspFunc(s, 'body_structure', 'body_img');
  return;
  scene.build();
}

function enterUpdate_Eyelashes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lashes ?? 0) > 2) {
    if (((s as any).lashextensionstyle ?? 0) >= 1) {
      (s as any).lashextensionduration = ((s as any).lashextensionduration ?? 0) - (1);
      if (((s as any).lashextensionduration ?? 0) >= 1  &&  ((s as any).lashextensionduration ?? 0) <= 4) {
        scene.text('It\'s time for you to do your maintenance on your lash extensions; you should go to the salon or you risk growing them all out.');
      }
      if (((s as any).lashextensionduration ?? 0) <= 0) {
        scene.text('You waited too long to do maintenance on your lash extensions; there\'s too little there to notice or work with at this point.');
        (s as any).pcs_lashes = ((s as any).pcs_naturallashes ?? 0);
      }
    }
    if (((s as any).false_lashes ?? 0) > 0) {
      (s as any).false_lashes = ((s as any).false_lashes ?? 0) - (1);
      if ((!((s as any).false_lashes ?? 0))) {
        scene.text('Your false lashes came off in the night; there\'s no recovering them now.');
        (s as any).pcs_lashes = ((s as any).pcs_naturallashes ?? 0);
      } else {
        scene.text('Somehow, your lashes managed to stay attached throughout the night. You might be able to get away with wearing them another day straight.');
      }
    }
  }
  return;
  scene.build();
}

function enterUpdate_Hair(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_hairlng ?? 0) <= 1000  &&  (!((s as any).hairgrowcht ?? 0))) {
    if (((s as any).trait_vars ?? 0)?.['hair_growth_rate'] === 0  ||  ((s as any).cheatVars ?? 0)?.['hair_growth_rate_disabled'] === 1) {
      (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) + (1);
    } else {
      if (((s as any).trait_vars ?? 0)?.['hair_growth_rate'] === 1) {
        (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) + (Math.floor(Math.random() * 2) + 1);
      } else {
        if (((s as any).trait_vars ?? 0)?.['hair_growth_rate'] === -1) {
          (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) + ((((!(Math.floor(Math.random() * 3) + 0))) ? (0) : (1)));
        }
      }
    }
  }
  if (((s as any).pcs_haircol ?? 0) !== ((s as any).nathcol ?? 0)  &&  ((s as any).dyefade ?? 0) > 0) {
    (s as any).dyefade = ((s as any).dyefade ?? 0) - (1);
  }
  if (((s as any).hbraids ?? 0) > 0) {
    (s as any).hbraids = ((s as any).hbraids ?? 0) - (1);
  }
  if (((s as any).pcs_hairlng ?? 0) > 400  &&  ((s as any).hpingripw ?? 0) === 1) {
    (s as any).hpingripw = 0;
  }
  if (((s as any).pcs_hairlng ?? 0) > 800  &&  ((s as any).hscrunchw ?? 0) === 2 === 1) {
    (s as any).hpigtail = 0;
    (s as any).hscrunchw = 0;
  }
  return;
  scene.build();
}

function enterUpdate_PubesAndLeghair(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_pubecol ?? 0)[2] !== ((s as any).pcs_pubecol ?? 0)[0]) {
    if (((s as any).pcs_pubecol ?? 0)[3] > 0) {
      (s as any).pcs_pubecol[3] = ((s as any).pcs_pubecol[3] ?? 0) - (1);
    }
    if (((s as any).pcs_pubecol ?? 0)[3] === 0) {
      (s as any).pcs_pubecol[2] = qspUntranslated(s, "pcs_pubecol[0]", { location: "body" });
    }
  }
  if (((s as any).pcs_pubes ?? 0) < 2) {
    (s as any).pcs_pubecol[2] = qspUntranslated(s, "pcs_pubecol[0]", { location: "body" });
  }
  if (((s as any).age ?? 0) < 18  &&  (Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).pcs_leghair ?? 0) > 0) {
    (s as any).pcs_leghair = ((s as any).pcs_leghair ?? 0) - (1);
  }
  (s as any).pcs_leghair = ((s as any).pcs_leghair ?? 0) + (1);
  if (((s as any).pcs_pubes ?? 0)?.['growth'] > 1) {
    (s as any).pcs_pubes['growth'] = 0;
    (s as any).pcs_pubes = ((s as any).pcs_pubes ?? 0) + (1);
  }
  (s as any).pcs_pubes['growth'] = ((s as any).pcs_pubes['growth'] ?? 0) + (1);
  qspCall(s, 'body_desc', 'pube_desc_update');
  // TODO-QSP: end !}
  return;
  scene.build();
}

function enterUpdate_Teeth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_teeth ?? 0) < 0) {
    (s as any).tempteeth = 1;
    if (((s as any).teeth ?? 0)?.['caffe_or_tea'] > 8) {
      (s as any).tempteeth = ((s as any).tempteeth ?? 0) + (1);
    }
    if (((s as any).teeth ?? 0)?.['smoked'] > 1) {
      (s as any).tempteeth = ((s as any).tempteeth ?? 0) + (1);
    }
    (s as any).tempteeth = ((s as any).tempteeth ?? 0) - (qspUntranslated(s, "min(teeth['brushed'], 3)", { location: "body" }));
    (s as any).teeth['degradation'] = ((s as any).teeth['degradation'] ?? 0) + (0);
    (s as any).teeth['caffe_or_tea'] = 0;
    (s as any).teeth['smoked'] = 0;
    (s as any).teeth['brushed'] = 0;
    if (((s as any).teeth ?? 0)?.['degradation'] > 60) {
      (s as any).teeth['degradation'] = 0;
      (s as any).pcs_teeth = 0;
    } else {
      if (((s as any).teeth ?? 0)?.['degradation'] < 0) {
        (s as any).teeth['degradation'] = 0;
      }
    }
  }
  return;
  scene.build();
}

function enterUpdate_Body(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'body', 'Update_StatBuffs');
  (s as any).pcs_mass['body_last'] = ((s as any).pcs_mass ?? 0)?.['body'];
  if (((s as any).bodyresetflag ?? 0) === 1  ||  ((s as any).cheatVars ?? 0)?.['fat'] === 1) {
    (s as any).fat = 0;
  } else {
    if (((s as any).pregChem ?? 0) >= 800  &&  (((s as any).pregChem ?? 0) - 800)*(((s as any).pregChem ?? 0) - 800) >= ((s as any).bodyVars ?? 0)?.['pchem_next']) {
      (s as any).pcs_mass['preg'] = ((s as any).pcs_mass['preg'] ?? 0) + (1);
      (s as any).bodyVars['pchem_next'] = ((s as any).bodyVars['pchem_next'] ?? 0) + (1166400);
    } else {
      if (((s as any).pcs_mass ?? 0)?.['preg'] > 0  &&  (((s as any).recovH ?? 0) <= ((s as any).bodyVars ?? 0)?.['recovH']  &&  (((s as any).pregChem ?? 0) < 800  ||  ((s as any).bodyVars ?? 0)?.['pchem_next'] - 1166400 >= (((s as any).pregChem ?? 0) - 800)*(((s as any).pregChem ?? 0) - 800)))) {
        (s as any).pcs_mass['preg'] = ((s as any).pcs_mass['preg'] ?? 0) - (1);
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          (s as any).pcs_mass['body'] = ((s as any).pcs_mass['body'] ?? 0) + (1);
        }
        if (((s as any).pcs_mass ?? 0)?.['preg'] > 0) {
          (s as any).bodyVars['pchem_next'] = ((s as any).bodyVars['pchem_next'] ?? 0) - (1166400);
          (s as any).bodyVars['recovH_next'] = ((s as any).bodyVars ?? {})?.['recovH_next'] * (((s as any).pcs_mass ?? {})?.['preg'] - 1) / ((s as any).pcs_mass ?? {})?.['preg'];
        }
      } else {
        if (((s as any).pcs_mass ?? 0)?.['preg'] <= 0) {
          (s as any).pcs_mass['preg'] = 0;
          (s as any).bodyVars['pchem_next'] = 0;
          (s as any).bodyVars['recovH_next'] = 0;
        }
      }
    }
    if (((s as any).pregChem ?? 0) >= 800) {
      if (((s as any).fat ?? 0) > (15 + ((s as any).vitalbuf ?? 0) / 20)) {
        (s as any).pcs_mass['body'] = ((s as any).pcs_mass['body'] ?? 0) + (1);
        (s as any).fat = 0;
      } else {
        if (((s as any).fat ?? 0) < -(10 + ((s as any).vitalbuf ?? 0) / 10)) {
          (s as any).pcs_mass['body'] = ((s as any).pcs_mass['body'] ?? 0) - (1);
          (s as any).fat = 0;
        } else {
          if (((s as any).fat ?? 0) < 0) {
            // TODO-QSP: fat /= 2
          } else {
            // TODO-QSP: fat /= 6
          }
        }
      }
    } else {
      if (((s as any).fat ?? 0) > (20 + ((s as any).vitalbuf ?? 0) / 10)) {
        (s as any).pcs_mass['body'] = ((s as any).pcs_mass['body'] ?? 0) + (1);
        (s as any).fat = 0;
      } else {
        if (((s as any).fat ?? 0) < -(5 + ((s as any).vitalbuf ?? 0) / 10)) {
          (s as any).pcs_mass['body'] = ((s as any).pcs_mass['body'] ?? 0) - (1);
          (s as any).fat = 0;
        } else {
          // TODO-QSP: fat /= 4
        }
      }
    }
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] > 200) {
    (s as any).pcs_mass['body'] = 200;
  }
  qspCall(s, 'body', 'Find_waist_to_hip_ratio');
  qspCall(s, 'body', 'Find_band_to_waist_ratio');
  qspCall(s, 'body', 'Find_hip_to_height_ratio');
  qspCall(s, 'body', 'Redistribute_Mass');
  if (((s as any).pcs_mass ?? 0)?.['body'] < 1  &&  ((s as any).succubusflag ?? 0) === 1) {
    (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (1);
    (s as any).pcs_mass['body'] = ((s as any).pcs_mass['body'] ?? 0) + (3);
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 1  &&  ((s as any).fat ?? 0) >= 1) {
    if (((s as any).fat ?? 0) + ((s as any).pcs_mass ?? 0)?.['body'] >= 1) {
      (s as any).pcs_mass['body'] = 1;
      (s as any).fat = ((s as any).fat ?? 0) - (1 - ((s as any).pcs_mass ?? {})?.['body']);
    } else {
      (s as any).pcs_mass['body'] = ((s as any).pcs_mass['body'] ?? 0) + (((s as any).fat ?? 0));
      (s as any).fat = 0;
    }
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 1) {
    if (((s as any).pcs_stren ?? 0) + ((s as any).pcs_vital ?? 0) > 0) {
      qspCall(s, 'exp_deg', 'stren', 1000);
      qspCall(s, 'exp_deg', 'vital', 1000);
      (s as any).pcs_mass['body'] = 1;
    } else {
      qspCall(s, 'gameover', 'check', 3);
      // TODO-QSP: pl '<font color=red><b>You starved to death, but Cheat Mode keeps you Alive.</b></font>'
      (s as any).pcs_mass['body'] = 1;
    }
  }
  qspCall(s, 'body', 'Update_vhips');
  (s as any).temp_total_mass = ((s as any).pcs_mass ?? {})?.['body'] + ((s as any).pcs_mass ?? {})?.['bust'] + ((s as any).pcs_mass ?? {})?.['butt'];
  if (((s as any).temp_total_mass ?? 0) <= ((s as any).pcs_mass ?? 0)?.['body_message'] - 6) {
    (s as any).bodyVars['weight_warning'] = 1;
    (s as any).pcs_mass['body_message'] = ((s as any).temp_total_mass ?? 0);
  } else {
    if (((s as any).temp_total_mass ?? 0) >= ((s as any).pcs_mass ?? 0)?.['body_message'] + 6) {
      (s as any).bodyVars['weight_warning'] = 2;
      (s as any).pcs_mass['body_message'] = ((s as any).temp_total_mass ?? 0);
    }
  }
  (s as any).temp_bmi = qspFunc(s, 'body', 'CalcBMI2');
  (s as any).pcs_bmi[0] = ((s as any).temp_bmi ?? 0) / 10;
  (s as any).pcs_bmi[1] = ((s as any).temp_bmi ?? 0) % 10;
  if (((s as any).pcs_magik ?? 0) >= 5  &&  ((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  (!((s as any).magf2bdo ?? 0))) {
    if (((s as any).tits ?? 0) < 10  &&  ((s as any).pcs_mass ?? 0)?.['body'] > ((s as any).pcs_mass ?? 0)?.['body_last']  &&  ((s as any).pcs_bmi ?? 0) > 17) {
      if (((s as any).mgf2bnocnt ?? 0) < 3) {
        (s as any).magf2bdo = 2;
      } else {
        (s as any).magf2bdo = 3;
        // TODO-QSP: killvar 'mgf2bnocnt'
      }
    }
  }
  return;
  scene.build();
}

function enterUpdate_StatBuffs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).strenbuf ?? 0) > ((s as any).pcs_stren ?? 0)) {
    (s as any).strenbuf = ((s as any).strenbuf ?? 0) - (1);
  } else {
    if (((s as any).strenbuf ?? 0) < ((s as any).pcs_stren ?? 0)) {
      (s as any).strenbuf = ((s as any).strenbuf ?? 0) + (1);
    }
  }
  if (((s as any).vitalbuf ?? 0) > ((s as any).pcs_vital ?? 0)) {
    (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) - (1);
  } else {
    if (((s as any).vitalbuf ?? 0) < ((s as any).pcs_vital ?? 0)) {
      (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) + (1);
    }
  }
  if (((s as any).agilbuf ?? 0) > ((s as any).pcs_agil ?? 0)) {
    (s as any).agilbuf = ((s as any).agilbuf ?? 0) - (1);
  } else {
    if (((s as any).agilbuf ?? 0) < ((s as any).pcs_agil ?? 0)) {
      (s as any).agilbuf = ((s as any).agilbuf ?? 0) + (1);
    }
  }
  return;
  scene.build();
}

function enterUpdateDailyBodyOther(s: GameState, scene: SceneBuilder): void {
  if (((s as any).bodyVars ?? 0)?.['bust_other'] !== 0) {
    if (((s as any).daystart ?? 0) % 10 === 0) {
      if (((s as any).bodyVars ?? 0)?.['bust_other'] > 0) {
        (s as any).bodyVars['bust_other'] = ((s as any).bodyVars['bust_other'] ?? 0) - (1);
      } else {
        (s as any).bodyVars['bust_other'] = ((s as any).bodyVars['bust_other'] ?? 0) + (1);
      }
    }
  }
  if (((s as any).bodyVars ?? 0)?.['butt_other'] !== 0) {
    if (((s as any).daystart ?? 0) % 15 === 0) {
      if (((s as any).bodyVars ?? 0)?.['butt_other'] > 0) {
        (s as any).bodyVars['butt_other'] = ((s as any).bodyVars['butt_other'] ?? 0) - (1);
      } else {
        (s as any).bodyVars['butt_other'] = ((s as any).bodyVars['butt_other'] ?? 0) + (1);
      }
    }
  }
  return;
  scene.build();
}

function enterFindWaistToHipRatio(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_wratio = (2 * ((s as any).vitalbuf ?? 0) + ((s as any).strenbuf ?? 0) + ((s as any).agilbuf ?? 0)) / 4;
  if (((s as any).temp_wratio ?? 0) < 11) {
    (s as any).bodyVars['wratio'] = 85 + (11 - (((s as any).vitalbuf ?? 0) + ((s as any).strenbuf ?? 0) + ((s as any).agilbuf ?? 0)) / 3);
  } else {
    if (((s as any).temp_wratio ?? 0) < 20) {
      (s as any).bodyVars['wratio'] = 85;
    } else {
      if (((s as any).temp_wratio ?? 0) < 35) {
        (s as any).bodyVars['wratio'] = 85 - (((s as any).temp_wratio ?? 0) - 20) / 3;
      } else {
        if (((s as any).temp_wratio ?? 0) < 55) {
          (s as any).bodyVars['wratio'] = 80 - (((s as any).temp_wratio ?? 0) - 35) / 4;
        } else {
          if (((s as any).temp_wratio ?? 0) < 80) {
            (s as any).bodyVars['wratio'] = 75 - (((s as any).temp_wratio ?? 0) - 55) / 5;
          } else {
            if (((s as any).temp_wratio ?? 0) >= 80) {
              (s as any).bodyVars['wratio'] = 70;
            }
          }
        }
      }
    }
  }
  if ((((s as any).vitalbuf ?? 0) + ((s as any).strenbuf ?? 0) + ((s as any).agilbuf ?? 0)) / 3 > 100) {
    (s as any).bodyVars['wratio'] = ((s as any).bodyVars['wratio'] ?? 0) + ((2 * ((s as any).agilbuf ?? 0) - ((s as any).vitalbuf ?? 0) - ((s as any).strenbuf ?? 0)) / 10);
  }
  if (((s as any).bodyVars ?? 0)?.['wratio'] < 65) {
    (s as any).bodyVars['wratio'] = 65;
  }
  return;
  if (((s as any).locArgs?.[0] ?? 0) === 'Find_band_to_waist_ratio') {
    (s as any).temp_bratio = (2 * ((s as any).strenbuf ?? 0) + ((s as any).vitalbuf ?? 0) + ((s as any).agilbuf ?? 0)) / 4;
    if (((s as any).temp_bratio ?? 0) < 10) {
      (s as any).bodyVars['bratio'] = 105;
    } else {
      if (((s as any).temp_bratio ?? 0) <= 23) {
        (s as any).bodyVars['bratio'] = 106;
      } else {
        if (((s as any).temp_bratio ?? 0) <= 80) {
          (s as any).bodyVars['bratio'] = 106 + (((s as any).temp_bratio ?? 0) - 23) / 3;
        } else {
          (s as any).bodyVars['bratio'] = 125;
        }
      }
    }
    return;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'Find_hip_to_height_ratio') {
      (s as any).temp_hratio = (2 * ((s as any).agilbuf ?? 0) + ((s as any).vitalbuf ?? 0) + ((s as any).strenbuf ?? 0)) / 4;
      if (((s as any).temp_hratio ?? 0) < 35) {
        (s as any).bodyVars['hratio'] = 60;
      } else {
        if (((s as any).temp_hratio ?? 0) < 45) {
          (s as any).bodyVars['hratio'] = 59;
        } else {
          if (((s as any).temp_hratio ?? 0) < 60) {
            (s as any).bodyVars['hratio'] = 58;
          } else {
            if (((s as any).temp_hratio ?? 0) < 80) {
              (s as any).bodyVars['hratio'] = 57;
            } else {
              (s as any).bodyVars['hratio'] = 56;
            }
          }
        }
      }
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
    case 'Update_Appearance':
      enterUpdate_Appearance(s, scene);
      break;
    case 'UpdateBodyImage':
      enterUpdateBodyImage(s, scene);
      break;
    case 'Update_Eyelashes':
      enterUpdate_Eyelashes(s, scene);
      break;
    case 'Update_Hair':
      enterUpdate_Hair(s, scene);
      break;
    case 'Update_Pubes_and_leghair':
      enterUpdate_PubesAndLeghair(s, scene);
      break;
    case 'Update_Teeth':
      enterUpdate_Teeth(s, scene);
      break;
    case 'Update_Body':
      enterUpdate_Body(s, scene);
      break;
    case 'Update_StatBuffs':
      enterUpdate_StatBuffs(s, scene);
      break;
    case 'Update_daily_body_other':
      enterUpdateDailyBodyOther(s, scene);
      break;
    case 'Find_waist_to_hip_ratio':
      enterFindWaistToHipRatio(s, scene);
      break;
    default:
      enterRegularUpdate(s, scene);
      break;
  }
}

export const body: LocationDef = {
  name: 'body',
  title: 'It\'s time for you to do your maintenance on your lash extens',
  region: 'other',
  enter: enter,
};
