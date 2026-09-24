import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRegularUpdate(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).dounspell ?? 0))) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateBodyMeasurement(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).temp_weight = qspFunc(s, 'body', 'CalcWeight2');
    ((s as any).pcs_weight = (s as any).pcs_weight ?? {})[0] = ((s as any).temp_weight ?? 0) / 10;
    ((s as any).pcs_weight = (s as any).pcs_weight ?? {})[1] = ((s as any).temp_weight ?? 0) % 10;
    (s as any).temp_bmi = qspFunc(s, 'body', 'CalcBMI2');
    ((s as any).pcs_bmi = (s as any).pcs_bmi ?? {})[0] = ((s as any).temp_bmi ?? 0) / 10;
    ((s as any).pcs_bmi = (s as any).pcs_bmi ?? {})[1] = ((s as any).temp_bmi ?? 0) % 10;
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
  // TODO-QSP: end
  scene.build();
}

function enterUpdateBodyMeasurement(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hips = (((s as any).pcs_hgt ?? 0) * (((s as any).bodyVars ?? {})?.['hratio'] ?? 0)) / 100 + (((s as any).bodyVars ?? {})?.['vhips'] ?? 0);
  (s as any).pcs_waist = (((s as any).pcs_hips ?? 0) * (((s as any).bodyVars ?? {})?.['wratio'] ?? 0)) / 100 + (((s as any).bodyVars ?? {})?.['vofat'] ?? 0);
  (s as any).pcs_band = (((s as any).pcs_waist ?? 0) * (((s as any).bodyVars ?? {})?.['bratio'] ?? 0)) / 100 + (((s as any).bodyVars ?? {})?.['vofat'] ?? 0);
  (s as any).pcs_bust = (((s as any).pcs_waist ?? 0) * (((s as any).bodyVars ?? {})?.['bratio'] ?? 0)) / 100 + (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) + (((s as any).bodyVars ?? {})?.['bust_bonus'] ?? 0) + (((s as any).bodyVars ?? {})?.['bust_silicone'] ?? 0) + Math.min(Math.max((-10), ((s as any).bodyVars ?? 0)?.['bust_other']), 10) + (((s as any).bodyVars ?? {})?.['bust_magic'] ?? 0) + ((((s as any).pcs_mass ?? {})?.['preg'] ?? 0) + 2) / 5 + (((s as any).bodyVars ?? {})?.['bust_lact'] ?? 0);
  (s as any).pcs_butt = ((s as any).pcs_hips ?? 0) + Math.min(((s as any).pcs_mass ?? 0)?.['butt'], 50) + (((s as any).bodyVars ?? {})?.['butt_bonus'] ?? 0) + (((s as any).bodyVars ?? {})?.['butt_silicone'] ?? 0) + Math.min(Math.max((-10), ((s as any).bodyVars ?? 0)?.['butt_other']), 10) + ((s as any).pcs_butt_tr ?? 0) / 2;
  (s as any).pcs_cupsize = ((s as any).pcs_bust ?? 0) - ((s as any).pcs_band ?? 0);
  (s as any).pcs_buttsize = ((s as any).pcs_butt ?? 0) - ((s as any).pcs_hips ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcWeight(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (2820 + 33 * ((((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0) + (4 * (((s as any).pcs_mass ?? {})?.['preg'] ?? 0) + 2) / 5) + 70 * (((s as any).pcs_hgt ?? 0) - 165)) / 100;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcWeight2(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (2820 + 33 * ((((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0) + (4 * (((s as any).pcs_mass ?? {})?.['preg'] ?? 0) + 2) / 5) + 70 * (((s as any).pcs_hgt ?? 0) - 165)) / 10;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcBMI(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (1000 * (10 * ((s as any).pcs_weight ?? 0)[0] + ((s as any).pcs_weight ?? 0)[1])) / (((s as any).pcs_hgt ?? 0) * ((s as any).pcs_hgt ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcBMI2(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (10000 * (10 * ((s as any).pcs_weight ?? 0)[0] + ((s as any).pcs_weight ?? 0)[1])) / (((s as any).pcs_hgt ?? 0) * ((s as any).pcs_hgt ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcOptBodyMass(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 225;
  }
  (s as any).result = ((((s as any).pcs_hgt ?? 0) * ((s as any).pcs_hgt ?? 0) * ((s as any).locArgs?.[1] ?? 0)) - 2820000 - 70000 * (((s as any).pcs_hgt ?? 0) - 165)) / (550 * (60 + (((s as any).pcs_mass ?? {})?.['bust_gen'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt_gen'] ?? 0)));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDailyUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dounspell ?? 0) !== 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_Body(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_StatBuffs(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegularUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateDailyBodyOther(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_Eyelashes(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_Hair(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_PubesAndLeghair(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).mc_inventory ?? 0)?.['scrunchies'] > 0  &&  (Math.floor(Math.random() * 100) + 1) <= 8) {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['scrunchies'] = ((s as any).mc_inventory['scrunchies'] ?? 0) - (1);
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_Teeth(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_Appearance(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateBodyImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterUpdate_Appearance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'AppearanceSystem', '');
  qspCall(s, 'body_desc', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterUpdateBodyImage(s: GameState, scene: SceneBuilder): void {
  ((s as any).bodyVars = (s as any).bodyVars ?? {})['desc'] = qspFunc(s, 'body_structure', 'body_desc');
  ((s as any).bodyVars = (s as any).bodyVars ?? {})['bmi_desc'] = qspFunc(s, 'body_structure', 'bmi_desc');
  ((s as any).bodyVars = (s as any).bodyVars ?? {})['img'] = qspFunc(s, 'body_structure', 'body_img');
  return;
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterUpdate_Hair(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_hairlng ?? 0) <= 1000  &&  (!((s as any).hairgrowcht ?? 0))) {
    if (((s as any).trait_vars ?? 0)?.['hair_growth_rate'] === 0  ||  ((s as any).cheatVars ?? 0)?.['hair_growth_rate_disabled'] === 1) {
      (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) + (1);
    } else {
      if (((s as any).trait_vars ?? 0)?.['hair_growth_rate'] === 1) {
        (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) + ((Math.floor(Math.random() * 2) + 1));
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
  // TODO-QSP: end
  scene.build();
}

function enterUpdate_PubesAndLeghair(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_pubecol ?? 0)[2] !== ((s as any).pcs_pubecol ?? 0)[0]) {
    if (((s as any).pcs_pubecol ?? 0)[3] > 0) {
      ((s as any).pcs_pubecol = (s as any).pcs_pubecol ?? {})[3] = ((s as any).pcs_pubecol[3] ?? 0) - (1);
    }
    if (((s as any).pcs_pubecol ?? 0)[3] === 0) {
      ((s as any).pcs_pubecol = (s as any).pcs_pubecol ?? {})[2] = (((s as any).pcs_pubecol ?? 0)?.[0] ?? 0);
    }
  }
  if (((s as any).pcs_pubes ?? 0) < 2) {
    ((s as any).pcs_pubecol = (s as any).pcs_pubecol ?? {})[2] = (((s as any).pcs_pubecol ?? 0)?.[0] ?? 0);
  }
  if (((s as any).age ?? 0) < 18  &&  (Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).pcs_leghair ?? 0) > 0) {
    (s as any).pcs_leghair = ((s as any).pcs_leghair ?? 0) - (1);
  }
  return;
  // TODO-QSP: end
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
    (s as any).tempteeth = ((s as any).tempteeth ?? 0) - (Math.min(((s as any).teeth ?? 0)?.['brushed'], 3));
    ((s as any).teeth = (s as any).teeth ?? {})['degradation'] = ((s as any).teeth['degradation'] ?? 0) + (Math.max(0, ((s as any).tempteeth ?? 0)));
    ((s as any).teeth = (s as any).teeth ?? {})['caffe_or_tea'] = 0;
    ((s as any).teeth = (s as any).teeth ?? {})['smoked'] = 0;
    ((s as any).teeth = (s as any).teeth ?? {})['brushed'] = 0;
    if (((s as any).teeth ?? 0)?.['degradation'] > 60) {
      ((s as any).teeth = (s as any).teeth ?? {})['degradation'] = 0;
      (s as any).pcs_teeth = 0;
    } else {
      if (((s as any).teeth ?? 0)?.['degradation'] < 0) {
        ((s as any).teeth = (s as any).teeth ?? {})['degradation'] = 0;
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterUpdate_Body(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_StatBuffs(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body_last'] = ((s as any).pcs_mass ?? 0)?.['body'];
  if (((s as any).bodyresetflag ?? 0) === 1  ||  ((s as any).cheatVars ?? 0)?.['fat'] === 1) {
    (s as any).fat = 0;
  } else {
    if (((s as any).pregChem ?? 0) >= 800  &&  (((s as any).pregChem ?? 0) - 800)*(((s as any).pregChem ?? 0) - 800) >= ((s as any).bodyVars ?? 0)?.['pchem_next']) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['preg'] = ((s as any).pcs_mass['preg'] ?? 0) + (1);
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['pchem_next'] = ((s as any).bodyVars['pchem_next'] ?? 0) + (1166400);
    } else {
      if (((s as any).pcs_mass ?? 0)?.['preg'] > 0  &&  (((s as any).recovH ?? 0) <= ((s as any).bodyVars ?? 0)?.['recovH']  &&  (((s as any).pregChem ?? 0) < 800  ||  ((s as any).bodyVars ?? 0)?.['pchem_next'] - 1166400 >= (((s as any).pregChem ?? 0) - 800)*(((s as any).pregChem ?? 0) - 800)))) {
        ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['preg'] = ((s as any).pcs_mass['preg'] ?? 0) - (1);
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) + (1);
        }
        if (((s as any).pcs_mass ?? 0)?.['preg'] > 0) {
          ((s as any).bodyVars = (s as any).bodyVars ?? {})['pchem_next'] = ((s as any).bodyVars['pchem_next'] ?? 0) - (1166400);
          ((s as any).bodyVars = (s as any).bodyVars ?? {})['recovH_next'] = (((s as any).bodyVars ?? {})?.['recovH_next'] ?? 0) * ((((s as any).pcs_mass ?? {})?.['preg'] ?? 0) - 1) / (((s as any).pcs_mass ?? {})?.['preg'] ?? 0);
        }
      } else {
        if (((s as any).pcs_mass ?? 0)?.['preg'] <= 0) {
          ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['preg'] = 0;
          ((s as any).bodyVars = (s as any).bodyVars ?? {})['pchem_next'] = 0;
          ((s as any).bodyVars = (s as any).bodyVars ?? {})['recovH_next'] = 0;
        }
      }
    }
    if (((s as any).pregChem ?? 0) >= 800) {
      if (((s as any).fat ?? 0) > (15 + ((s as any).vitalbuf ?? 0) / 20)) {
        ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) + (1);
        (s as any).fat = 0;
      } else {
        if (((s as any).fat ?? 0) < -(10 + ((s as any).vitalbuf ?? 0) / 10)) {
          ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) - (1);
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
        ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) + (1);
        (s as any).fat = 0;
      } else {
        if (((s as any).fat ?? 0) < -(5 + ((s as any).vitalbuf ?? 0) / 10)) {
          ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) - (1);
          (s as any).fat = 0;
        } else {
          // TODO-QSP: fat /= 4
        }
      }
    }
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] > 200) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 200;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFindWaistToHipRatio(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFindBandToWaistRatio(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFindHipToHeightRatio(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRedistribute_Mass(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 1  &&  ((s as any).succubusflag ?? 0) === 1) {
    (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (1);
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) + (3);
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 1  &&  ((s as any).fat ?? 0) >= 1) {
    if (((s as any).fat ?? 0) + ((s as any).pcs_mass ?? 0)?.['body'] >= 1) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 1;
      (s as any).fat = ((s as any).fat ?? 0) - (1 - (((s as any).pcs_mass ?? {})?.['body'] ?? 0));
    } else {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) + (((s as any).fat ?? 0));
      (s as any).fat = 0;
    }
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 1) {
    if (((s as any).pcs_stren ?? 0) + ((s as any).pcs_vital ?? 0) > 0) {
      qspCall(s, 'exp_deg', 'stren', 1000);
      qspCall(s, 'exp_deg', 'vital', 1000);
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 1;
    } else {
      qspCall(s, 'gameover', 'check', 3);
      // TODO-QSP: pl '<font color=red><b>You starved to death, but Cheat Mode keeps you Alive.</b></font>'
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 1;
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateVhips(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_total_mass = (((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0);
  if (((s as any).temp_total_mass ?? 0) <= ((s as any).pcs_mass ?? 0)?.['body_message'] - 6) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['weight_warning'] = 1;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body_message'] = ((s as any).temp_total_mass ?? 0);
  } else {
    if (((s as any).temp_total_mass ?? 0) >= ((s as any).pcs_mass ?? 0)?.['body_message'] + 6) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['weight_warning'] = 2;
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body_message'] = ((s as any).temp_total_mass ?? 0);
    }
  }
  (s as any).temp_bmi = qspFunc(s, 'body', 'CalcBMI2');
  ((s as any).pcs_bmi = (s as any).pcs_bmi ?? {})[0] = ((s as any).temp_bmi ?? 0) / 10;
  ((s as any).pcs_bmi = (s as any).pcs_bmi ?? {})[1] = ((s as any).temp_bmi ?? 0) % 10;
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
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterUpdateDailyBodyOther(s: GameState, scene: SceneBuilder): void {
  if (((s as any).bodyVars ?? 0)?.['bust_other'] !== 0) {
    if (((s as any).daystart ?? 0) % 10 === 0) {
      if (((s as any).bodyVars ?? 0)?.['bust_other'] > 0) {
        ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_other'] = ((s as any).bodyVars['bust_other'] ?? 0) - (1);
      } else {
        ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_other'] = ((s as any).bodyVars['bust_other'] ?? 0) + (1);
      }
    }
  }
  if (((s as any).bodyVars ?? 0)?.['butt_other'] !== 0) {
    if (((s as any).daystart ?? 0) % 15 === 0) {
      if (((s as any).bodyVars ?? 0)?.['butt_other'] > 0) {
        ((s as any).bodyVars = (s as any).bodyVars ?? {})['butt_other'] = ((s as any).bodyVars['butt_other'] ?? 0) - (1);
      } else {
        ((s as any).bodyVars = (s as any).bodyVars ?? {})['butt_other'] = ((s as any).bodyVars['butt_other'] ?? 0) + (1);
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFindWaistToHipRatio(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_wratio = (2 * ((s as any).vitalbuf ?? 0) + ((s as any).strenbuf ?? 0) + ((s as any).agilbuf ?? 0)) / 4;
  if (((s as any).temp_wratio ?? 0) < 11) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['wratio'] = 85 + (11 - (((s as any).vitalbuf ?? 0) + ((s as any).strenbuf ?? 0) + ((s as any).agilbuf ?? 0)) / 3);
  } else {
    if (((s as any).temp_wratio ?? 0) < 20) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['wratio'] = 85;
    } else {
      if (((s as any).temp_wratio ?? 0) < 35) {
        ((s as any).bodyVars = (s as any).bodyVars ?? {})['wratio'] = 85 - (((s as any).temp_wratio ?? 0) - 20) / 3;
      } else {
        if (((s as any).temp_wratio ?? 0) < 55) {
          ((s as any).bodyVars = (s as any).bodyVars ?? {})['wratio'] = 80 - (((s as any).temp_wratio ?? 0) - 35) / 4;
        } else {
          if (((s as any).temp_wratio ?? 0) < 80) {
            ((s as any).bodyVars = (s as any).bodyVars ?? {})['wratio'] = 75 - (((s as any).temp_wratio ?? 0) - 55) / 5;
          } else {
            if (((s as any).temp_wratio ?? 0) >= 80) {
              ((s as any).bodyVars = (s as any).bodyVars ?? {})['wratio'] = 70;
            }
          }
        }
      }
    }
  }
  if ((((s as any).vitalbuf ?? 0) + ((s as any).strenbuf ?? 0) + ((s as any).agilbuf ?? 0)) / 3 > 100) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['wratio'] = ((s as any).bodyVars['wratio'] ?? 0) + ((2 * ((s as any).agilbuf ?? 0) - ((s as any).vitalbuf ?? 0) - ((s as any).strenbuf ?? 0)) / 10);
  }
  if (((s as any).bodyVars ?? 0)?.['wratio'] < 65) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['wratio'] = 65;
  }
  return;
  scene.build();
}

function enterFindBandToWaistRatio(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bratio = (2 * ((s as any).strenbuf ?? 0) + ((s as any).vitalbuf ?? 0) + ((s as any).agilbuf ?? 0)) / 4;
  if (((s as any).temp_bratio ?? 0) < 10) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['bratio'] = 105;
  } else {
    if (((s as any).temp_bratio ?? 0) <= 23) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['bratio'] = 106;
    } else {
      if (((s as any).temp_bratio ?? 0) <= 80) {
        ((s as any).bodyVars = (s as any).bodyVars ?? {})['bratio'] = 106 + (((s as any).temp_bratio ?? 0) - 23) / 3;
      } else {
        ((s as any).bodyVars = (s as any).bodyVars ?? {})['bratio'] = 125;
      }
    }
  }
  return;
  scene.build();
}

function enterFindHipToHeightRatio(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_hratio = (2 * ((s as any).agilbuf ?? 0) + ((s as any).vitalbuf ?? 0) + ((s as any).strenbuf ?? 0)) / 4;
  if (((s as any).temp_hratio ?? 0) < 35) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['hratio'] = 60;
  } else {
    if (((s as any).temp_hratio ?? 0) < 45) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['hratio'] = 59;
    } else {
      if (((s as any).temp_hratio ?? 0) < 60) {
        ((s as any).bodyVars = (s as any).bodyVars ?? {})['hratio'] = 58;
      } else {
        if (((s as any).temp_hratio ?? 0) < 80) {
          ((s as any).bodyVars = (s as any).bodyVars ?? {})['hratio'] = 57;
        } else {
          ((s as any).bodyVars = (s as any).bodyVars ?? {})['hratio'] = 56;
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcSalocat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_mass ?? 0)?.['body'] + ((s as any).pcs_mass ?? 0)?.['butt'] < 10) {
    (s as any).result = 0;
  } else {
    (s as any).result = ((((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0) + 10) / 20;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRedistribute_Mass(s: GameState, scene: SceneBuilder): void {
  if (((s as any).titreduc ?? 0) === 1) {
    if (((s as any).pcs_mass ?? 0)?.['bust_gen'] > ((s as any).pcs_mass ?? 0)?.['bust']) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) + 2 - (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) % 5;
    }
  }
  if (((s as any).assreduc ?? 0) === 1) {
    if (((s as any).pcs_mass ?? 0)?.['butt_gen'] > ((s as any).pcs_mass ?? 0)?.['butt']) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = (((s as any).pcs_mass ?? {})?.['butt'] ?? 0) + 2 - (((s as any).pcs_mass ?? {})?.['butt'] ?? 0) % 5;
    }
  }
  if (((s as any).salobustdo ?? 0) === 0  &&  ((s as any).cheatVars ?? 0)?.['body_staticAssets'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRedistribute_Mass_Inner(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRedistribute_MassSetMessage(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateVhips(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRedistribute_Mass_Inner(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).magf2bdo ?? 0) === 1  &&  ((s as any).daystart ?? 0) > ((s as any).pcs_mass ?? 0)?.['magic_day']  &&  ((s as any).pcs_mana ?? 0) >= ((s as any).manamax ?? 0) / 2) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_magic'] = ((s as any).bodyVars['bust_magic'] ?? 0) + (1);
    if (((s as any).pcs_mass ?? 0)?.['body'] >= 80) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) - (3);
    }
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['magic_day'] = ((s as any).daystart ?? 0) + (Math.floor(Math.random() * 8) + 7);
    if (((s as any).bodyVars ?? 0)?.['bust_magic'] >= 2 + ((s as any).magtarcup ?? 0) * 5) {
      (s as any).magf2bdo = 0;
    }
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - (Math.max(100, 2000 / ((s as any).pcs_magik ?? 0)));
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 10) {
    (s as any).temp_diff = Math.min(((s as any).pcs_mass ?? 0)?.['bust'], 3);
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = ((s as any).pcs_mass['bust'] ?? 0) - (((s as any).temp_diff ?? 0));
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) + (((s as any).temp_diff ?? 0));
    (s as any).temp_diff = Math.min(((s as any).pcs_mass ?? 0)?.['butt'], 3);
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt'] = ((s as any).pcs_mass['butt'] ?? 0) - (((s as any).temp_diff ?? 0));
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) + (((s as any).temp_diff ?? 0));
    return;
  }
  (s as any).temp_total_mass = (((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0);
  (s as any).temp_tot_gen_mass = 60 + (((s as any).pcs_mass ?? {})?.['bust_gen'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt_gen'] ?? 0);
  (s as any).temp_mass_bust = ((((s as any).pcs_mass ?? {})?.['bust_gen'] ?? 0) * ((s as any).temp_total_mass ?? 0)) / ((s as any).temp_tot_gen_mass ?? 0);
  if (((s as any).temp_total_mass ?? 0) >= ((s as any).temp_tot_gen_mass ?? 0) - 10  &&  ((s as any).pcs_mass ?? 0)?.['bust'] < ((s as any).pcs_mass ?? 0)?.['bust_gen']) {
    (s as any).temp_diff = Math.min((((s as any).pcs_mass ?? {})?.['bust_gen'] ?? 0) - (((s as any).pcs_mass ?? {})?.['bust'] ?? 0), 2);
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = ((s as any).pcs_mass['bust'] ?? 0) + (((s as any).temp_diff ?? 0));
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) - (((s as any).temp_diff ?? 0));
  } else {
    if (((s as any).temp_total_mass ?? 0) >= ((s as any).temp_tot_gen_mass ?? 0) - 10  &&  ((s as any).temp_total_mass ?? 0) <= ((s as any).temp_tot_gen_mass ?? 0)  &&  ((s as any).pcs_mass ?? 0)?.['bust'] === ((s as any).pcs_mass ?? 0)?.['bust_gen']) {
    } else {
      if (((s as any).temp_mass_bust ?? 0) > ((s as any).pcs_mass ?? 0)?.['bust']) {
        ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = ((s as any).pcs_mass['bust'] ?? 0) + (1);
        ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) - (1);
      } else {
        if (((s as any).temp_mass_bust ?? 0) < ((s as any).pcs_mass ?? 0)?.['bust']  &&  ((s as any).pcs_mass ?? 0)?.['bust'] > 0) {
          ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = ((s as any).pcs_mass['bust'] ?? 0) - (1);
          ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) + (1);
        }
      }
    }
  }
  (s as any).temp_mass_ass = ((((s as any).pcs_mass ?? {})?.['butt_gen'] ?? 0) * ((s as any).temp_total_mass ?? 0)) / ((s as any).temp_tot_gen_mass ?? 0);
  if (((s as any).temp_total_mass ?? 0) >= ((s as any).temp_tot_gen_mass ?? 0) - 10  &&  ((s as any).pcs_mass ?? 0)?.['butt'] < ((s as any).pcs_mass ?? 0)?.['butt_gen']) {
    (s as any).temp_diff = Math.min((((s as any).pcs_mass ?? {})?.['butt_gen'] ?? 0) - (((s as any).pcs_mass ?? {})?.['butt'] ?? 0), 2);
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt'] = ((s as any).pcs_mass['butt'] ?? 0) + (((s as any).temp_diff ?? 0));
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) - (((s as any).temp_diff ?? 0));
  } else {
    if (((s as any).temp_total_mass ?? 0) >= ((s as any).temp_tot_gen_mass ?? 0) - 10  &&  ((s as any).temp_total_mass ?? 0) <= ((s as any).temp_tot_gen_mass ?? 0)  &&  ((s as any).pcs_mass ?? 0)?.['butt'] === ((s as any).pcs_mass ?? 0)?.['butt_gen']) {
    } else {
      if (((s as any).temp_mass_ass ?? 0) > ((s as any).pcs_mass ?? 0)?.['butt']) {
        ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt'] = ((s as any).pcs_mass['butt'] ?? 0) + (1);
        ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) - (1);
      } else {
        if (((s as any).temp_mass_ass ?? 0) < ((s as any).pcs_mass ?? 0)?.['butt']  &&  ((s as any).pcs_mass ?? 0)?.['butt'] > 0) {
          ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt'] = ((s as any).pcs_mass['butt'] ?? 0) - (1);
          ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) + (1);
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRedistribute_MassSetMessage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).bodyresetflag ?? 0) !== 0) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_message'] = ((s as any).pcs_mass ?? 0)?.['bust'];
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_message'] = ((s as any).pcs_mass ?? 0)?.['butt'];
    return;
  }
  if (((s as any).pcs_mass ?? 0)?.['bust'] > ((s as any).pcs_mass ?? 0)?.['bust_message'] + 3) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_message'] = ((s as any).pcs_mass ?? 0)?.['bust'];
    if (((s as any).pcs_mass ?? 0)?.['butt'] > ((s as any).pcs_mass ?? 0)?.['butt_message'] + 3) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_message'] = ((s as any).pcs_mass ?? 0)?.['butt'];
      scene.text('<b>Your breasts and ass seem fuller</b>');
    } else {
      if (((s as any).pcs_mass ?? 0)?.['butt'] < ((s as any).pcs_mass ?? 0)?.['butt_message'] - 3) {
        ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_message'] = ((s as any).pcs_mass ?? 0)?.['butt'];
        scene.text('<b>Your breasts seem fuller and ass seems to be getting smaller</b>');
      } else {
        scene.text('<b>Your breasts seem fuller</b>');
      }
    }
  } else {
    if (((s as any).pcs_mass ?? 0)?.['bust'] < ((s as any).pcs_mass ?? 0)?.['bust_message'] - 3) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_message'] = ((s as any).pcs_mass ?? 0)?.['bust'];
      if (((s as any).pcs_mass ?? 0)?.['butt'] > ((s as any).pcs_mass ?? 0)?.['butt_message'] + 3) {
        ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_message'] = ((s as any).pcs_mass ?? 0)?.['butt'];
        scene.text('<b>Your breasts seem to be getting smaller and your ass seems fuller</b>');
      } else {
        if (((s as any).pcs_mass ?? 0)?.['butt'] < ((s as any).pcs_mass ?? 0)?.['butt_message'] - 3) {
          ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_message'] = ((s as any).pcs_mass ?? 0)?.['butt'];
          scene.text('<b>Your breasts and ass seem to be getting smaller</b>');
        } else {
          scene.text('<b>Your breasts seem to be getting smaller</b>');
        }
      }
    } else {
      if (((s as any).pcs_mass ?? 0)?.['butt'] > ((s as any).pcs_mass ?? 0)?.['butt_message'] + 3) {
        ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_message'] = ((s as any).pcs_mass ?? 0)?.['butt'];
        scene.text('<b>Your ass seems fuller</b>');
      } else {
        if (((s as any).pcs_mass ?? 0)?.['butt'] < ((s as any).pcs_mass ?? 0)?.['butt_message'] - 3) {
          ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_message'] = ((s as any).pcs_mass ?? 0)?.['butt'];
          scene.text('<b>Your ass seem to be getting smaller</b>');
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetMassDistribution(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_total_mass = (((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0);
  (s as any).temp_total_gen_mass = 60 + (((s as any).pcs_mass ?? {})?.['bust_gen'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt_gen'] ?? 0);
  if (((s as any).temp_total_mass ?? 0) >= ((s as any).temp_total_gen_mass ?? 0) - 10  &&  ((s as any).temp_total_mass ?? 0) <= ((s as any).temp_total_gen_mass ?? 0)) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = ((s as any).pcs_mass ?? 0)?.['bust_gen'];
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt'] = ((s as any).pcs_mass ?? 0)?.['butt_gen'];
  } else {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = ((((s as any).pcs_mass ?? {})?.['bust_gen'] ?? 0) * ((s as any).temp_total_mass ?? 0)) / ((s as any).temp_total_gen_mass ?? 0);
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt'] = ((((s as any).pcs_mass ?? {})?.['butt_gen'] ?? 0) * ((s as any).temp_total_mass ?? 0)) / ((s as any).temp_total_gen_mass ?? 0);
  }
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).temp_total_mass ?? 0) - (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) - (((s as any).pcs_mass ?? {})?.['butt'] ?? 0);
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body_message'] = ((s as any).temp_total_mass ?? 0);
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_message'] = ((s as any).pcs_mass ?? 0)?.['bust'];
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_message'] = ((s as any).pcs_mass ?? 0)?.['butt'];
  ((s as any).bodyVars = (s as any).bodyVars ?? {})['vhips'] = ((((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0) - 80) / 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetPregMass(s: GameState, scene: SceneBuilder): void {
  ((s as any).bodyVars = (s as any).bodyVars ?? {})['pchem_next'] = 0;
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['preg'] = 0;
  // TODO-QSP: :set_preg_body_loop
  if (((s as any).pregChem ?? 0) >= 800  &&  (((s as any).pregChem ?? 0) - 800) * (((s as any).pregChem ?? 0) - 800) >= ((s as any).bodyVars ?? 0)?.['pchem_next']) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['pchem_next'] = ((s as any).bodyVars['pchem_next'] ?? 0) + (1166400 & 1080 * 1080);
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['preg'] = ((s as any).pcs_mass['preg'] ?? 0) + (1);
    // TODO-QSP: jump 'set_preg_body_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetMassDistributionUsingBody(s: GameState, scene: SceneBuilder): void {
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).locArgs?.[1] ?? 0);
  if (String((s as any).locArgs?.[1] ?? '') >= 50  &&  String((s as any).locArgs?.[1] ?? '') <= 60) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = ((s as any).pcs_mass ?? 0)?.['bust_gen'];
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt'] = ((s as any).pcs_mass ?? 0)?.['butt_gen'];
  } else {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = ((((s as any).pcs_mass ?? {})?.['bust_gen'] ?? 0) * (((s as any).pcs_mass ?? {})?.['body'] ?? 0)) / 60;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt'] = ((((s as any).pcs_mass ?? {})?.['butt_gen'] ?? 0) * (((s as any).pcs_mass ?? {})?.['body'] ?? 0)) / 60;
  }
  ((s as any).bodyVars = (s as any).bodyVars ?? {})['vhips'] = ((((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0) - 80) / 2;
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body_message'] = (((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0);
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_message'] = ((s as any).pcs_mass ?? 0)?.['bust'];
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_message'] = ((s as any).pcs_mass ?? 0)?.['butt'];
  if ((!((s as any).dounspell ?? 0))) {
    (s as any).temp_weight = qspFunc(s, 'body', 'CalcWeight2');
    ((s as any).pcs_weight = (s as any).pcs_weight ?? {})[0] = ((s as any).temp_weight ?? 0) / 10;
    ((s as any).pcs_weight = (s as any).pcs_weight ?? {})[1] = ((s as any).temp_weight ?? 0) % 10;
    (s as any).temp_bmi = qspFunc(s, 'body', 'CalcBMI2');
    ((s as any).pcs_bmi = (s as any).pcs_bmi ?? {})[0] = ((s as any).temp_bmi ?? 0) / 10;
    ((s as any).pcs_bmi = (s as any).pcs_bmi ?? {})[1] = ((s as any).temp_bmi ?? 0) % 10;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateVhips(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_Appearance(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateBodyImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterUpdateVhips(s: GameState, scene: SceneBuilder): void {
  (s as any).vhtmp = ((((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0) - 80) / 2;
  if (((s as any).bodyresetflag ?? 0) === 1) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['vhips'] = ((s as any).vhtmp ?? 0);
  } else {
    if (((s as any).vhtmp ?? 0) < ((s as any).bodyVars ?? 0)?.['vhips']) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['vhips'] = ((s as any).bodyVars['vhips'] ?? 0) - (1);
    } else {
      if (((s as any).vhtmp ?? 0) > ((s as any).bodyVars ?? 0)?.['vhips']) {
        ((s as any).bodyVars = (s as any).bodyVars ?? {})['vhips'] = ((s as any).bodyVars['vhips'] ?? 0) + (1);
      }
    }
  }
  (s as any).temp_vhips2 = (((s as any).bodyVars ?? {})?.['vhips'] ?? 0) - (((s as any).pcs_hgt ?? 0) * (72 - (((s as any).bodyVars ?? {})?.['hratio'] ?? 0))) / 100;
  ((s as any).bodyVars = (s as any).bodyVars ?? {})['vofat'] = Math.max(0, ((s as any).temp_vhips2 ?? 0) / 2);
  ((s as any).bodyVars = (s as any).bodyVars ?? {})['vhips'] = ((s as any).bodyVars['vhips'] ?? 0) - (2 * (((s as any).bodyVars ?? {})?.['vofat'] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSkinGain(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'CleanSelf'  &&  ((s as any).lastShowerSkinGain ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).lastShowerSkinGain = ((s as any).daystart ?? 0);
    (s as any).skinDailyGain = ((s as any).skinDailyGain ?? 0) + (5);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'Moisturizer') {
      (s as any).moisturizerDailyCount = ((s as any).moisturizerDailyCount ?? 0) + (1);
      if (((s as any).moisturizerDailyCount ?? 0) <= 2) {
        (s as any).skinDailyGain = ((s as any).skinDailyGain ?? 0) + (2);
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSkinLoss(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'Smoke'  &&  ((s as any).bodyVars ?? 0)?.['smoke_skin_penalty_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['smoke_skin_penalty_day'] = ((s as any).daystart ?? 0);
    (s as any).skinDailyPenalty = ((s as any).skinDailyPenalty ?? 0) + (1);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'MakeUpSleep') {
      (s as any).skinDailyPenalty = ((s as any).skinDailyPenalty ?? 0) + (10);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSoftreset(s: GameState, scene: SceneBuilder): void {
  (s as any).bodyresetflag = 1;
  (s as any).body_sr_counter = 0;
  // TODO-QSP: :resetloop
  if (((s as any).pcs_mass ?? 0)?.['body'] !== ((s as any).pcs_mass ?? 0)?.['body_last']) {
    if (((s as any).gamestartflag ?? 0) === 1) {
      (s as any).salobustdo = 1;
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_Body(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).body_sr_counter = ((s as any).body_sr_counter ?? 0) + (1);
    if (((s as any).body_sr_counter ?? 0) < 10) {
      // TODO-QSP: jump 'resetloop'
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateBodyMeasurement(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_Appearance(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateBodyImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).bodyresetflag = 0;
  ((s as any).bodyVars = (s as any).bodyVars ?? {})['weight_warning'] = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHardreset(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dounspell ?? 0) !== 1  ||  (!((s as any).dounsplkil ?? 0))) {
    scene.text('If you\'re seeing this, something odd happened. Please make a bug report that the body shape hard reset improperly triggered and what you were doing.');
  } else {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 12;
    (s as any).fat = 0;
    (s as any).agilbuf = ((s as any).pcs_agil ?? 0);
    (s as any).strenbuf = ((s as any).pcs_stren ?? 0);
    (s as any).vitalbuf = ((s as any).pcs_vital ?? 0);
    (s as any).salobustdo = 1;
    (s as any).bodyresetflag = 1;
    (s as any).normbuffpick = (-1);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_Body(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 60 + (2 * ((s as any).pcs_hips ?? 0)) - (((s as any).pcs_hgt ?? 0) * (((s as any).bodyVars ?? {})?.['hratio'] ?? 0)) / 50;
    if (((s as any).pcs_mass ?? 0)?.['butt_gen'] === 0) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 20;
    }
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['vhips'] = ((((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0) - 80) / 2;
    if (((s as any).pcs_mass ?? 0)?.['bust_gen'] === 0) {
      if (((s as any).pcs_mass ?? 0)?.['bust'] >= 27) {
        ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 27;
      } else {
        if (((s as any).pcs_mass ?? 0)?.['bust'] > 0) {
          ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 2 + (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) - (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) % 5;
        } else {
          if (((s as any).bodyVars ?? 0)?.['bust_silicone'] >= 20) {
            ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 12;
            ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = 12;
            ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_silicone'] = ((s as any).bodyVars['bust_silicone'] ?? 0) - (10);
          }
        }
      }
    }
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body_message'] = (((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0);
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_message'] = ((s as any).pcs_mass ?? 0)?.['bust'];
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_message'] = ((s as any).pcs_mass ?? 0)?.['butt'];
    qspCall(s, 'body', 'reset_preg_mass');
    (s as any).bodyresetflag = 0;
    (s as any).normbuffpick = 0;
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['weight_warning'] = 0;
    (s as any).magf2bdo = 0;
    (s as any).newbdsp = 1;
    (s as any).dounspell = 0;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_Appearance(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_Body(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'stat', '');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInitial(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_mass ?? 0)?.['bust_gen'] === 0) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 12;
  }
  if (((s as any).pcs_mass ?? 0)?.['butt_gen'] === 0) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 20;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).pcs_mass ?? 0)?.['body']]; enterSetMassDistributionUsingBody(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).strenbuf = ((s as any).pcs_stren ?? 0);
  (s as any).agilbuf = ((s as any).pcs_agil ?? 0);
  (s as any).vitalbuf = ((s as any).pcs_vital ?? 0);
  (s as any).normbuffpick = (-1);
  (s as any).gamestartflag = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSoftreset(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).normbuffpick = 0;
  (s as any).magf2bdo = 0;
  (s as any).newbdsp = 1;
  (s as any).temp_bmi = qspFunc(s, 'body', 'CalcBMI2');
  ((s as any).pcs_bmi = (s as any).pcs_bmi ?? {})[0] = ((s as any).temp_bmi ?? 0) / 10;
  ((s as any).pcs_bmi = (s as any).pcs_bmi ?? {})[1] = ((s as any).temp_bmi ?? 0) % 10;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate_Appearance(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateBodyImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
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
    case 'Find_band_to_waist_ratio':
      enterFindBandToWaistRatio(s, scene);
      break;
    case 'Find_hip_to_height_ratio':
      enterFindHipToHeightRatio(s, scene);
      break;
    case 'Calc_salocat':
      enterCalcSalocat(s, scene);
      break;
    case 'Redistribute_Mass':
      enterRedistribute_Mass(s, scene);
      break;
    case 'Redistribute_Mass_Inner':
      enterRedistribute_Mass_Inner(s, scene);
      break;
    case 'Redistribute_Mass_set_message':
      enterRedistribute_MassSetMessage(s, scene);
      break;
    case 'Reset_mass_distribution':
      enterResetMassDistribution(s, scene);
      break;
    case 'Reset_preg_mass':
      enterResetPregMass(s, scene);
      break;
    case 'Set_mass_distribution_using_body':
      enterSetMassDistributionUsingBody(s, scene);
      break;
    case 'Update_vhips':
      enterUpdateVhips(s, scene);
      break;
    case 'SkinGain':
      enterSkinGain(s, scene);
      break;
    case 'SkinLoss':
      enterSkinLoss(s, scene);
      break;
    case 'softreset':
      enterSoftreset(s, scene);
      break;
    case 'hardreset':
      enterHardreset(s, scene);
      break;
    case 'initial':
      enterInitial(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const body: LocationDef = {
  name: 'body',
  title: 'It\'s time for you to do your maintenance on your lash extens',
  region: 'other',
  enter: enter,
};
