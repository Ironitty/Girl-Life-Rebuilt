import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCalc(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'dnd');
  (s as any).will_calc = ((s as any).will_dnd ?? 0);
  qspCall(s, 'willpower', 'fetishes', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).pcs_sleep ?? 0) < 5) {
    (s as any).will_calc = ((s as any).will_calc ?? 0) + (50);
  } else {
    if (((s as any).pcs_sleep ?? 0) < 10) {
      (s as any).will_calc = ((s as any).will_calc ?? 0) + (25);
    } else {
      if (((s as any).pcs_sleep ?? 0) < 20) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (10);
      } else {
        if (((s as any).pcs_sleep ?? 0) < 30) {
          (s as any).will_calc = ((s as any).will_calc ?? 0) + (5);
        }
      }
    }
  }
  if (((s as any).pcs_stam ?? 0) <= 0) {
    (s as any).will_calc = ((s as any).will_calc ?? 0) + (10);
  } else {
    if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
      (s as any).will_calc = ((s as any).will_calc ?? 0) + (5);
    }
  }
  if (((s as any).pcs_energy ?? 0) < 5) {
    (s as any).will_calc = ((s as any).will_calc ?? 0) + (50);
  } else {
    if (((s as any).pcs_energy ?? 0) < 10) {
      (s as any).will_calc = ((s as any).will_calc ?? 0) + (25);
    } else {
      if (((s as any).pcs_energy ?? 0) < 20) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (10);
      } else {
        if (((s as any).pcs_energy ?? 0) < 30) {
          (s as any).will_calc = ((s as any).will_calc ?? 0) + (5);
        }
      }
    }
  }
  if (((s as any).pcs_hydra ?? 0) < 5) {
    (s as any).will_calc = ((s as any).will_calc ?? 0) + (50);
  } else {
    if (((s as any).pcs_hydra ?? 0) < 10) {
      (s as any).will_calc = ((s as any).will_calc ?? 0) + (25);
    } else {
      if (((s as any).pcs_hydra ?? 0) < 20) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (10);
      } else {
        if (((s as any).pcs_hydra ?? 0) < 30) {
          (s as any).will_calc = ((s as any).will_calc ?? 0) + (5);
        }
      }
    }
  }
  if (((s as any).pcs_mood ?? 0) < 5) {
    (s as any).will_calc = ((s as any).will_calc ?? 0) + (50);
  } else {
    if (((s as any).pcs_mood ?? 0) < 10) {
      (s as any).will_calc = ((s as any).will_calc ?? 0) + (25);
    } else {
      if (((s as any).pcs_mood ?? 0) < 25) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (15);
      } else {
        if (((s as any).pcs_mood ?? 0) < 40) {
          (s as any).will_calc = ((s as any).will_calc ?? 0) + (10);
        } else {
          if (((s as any).pcs_mood ?? 0) < 50) {
            (s as any).will_calc = ((s as any).will_calc ?? 0) + (6);
          } else {
            if (((s as any).pcs_mood ?? 0) < 60) {
              (s as any).will_calc = ((s as any).will_calc ?? 0) + (3);
            }
          }
        }
      }
    }
  }
  if (((s as any).Sifilis ?? 0) >= 50) {
    (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
  }
  if (((s as any).sick ?? 0) > 72) {
    (s as any).will_calc = ((s as any).will_calc ?? 0) + (35);
  } else {
    if (((s as any).sick ?? 0) > 48) {
      (s as any).will_calc = ((s as any).will_calc ?? 0) + (20);
    } else {
      if (((s as any).sick ?? 0) > 24) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (10);
      } else {
        if (((s as any).sick ?? 0) > 1) {
          (s as any).will_calc = ((s as any).will_calc ?? 0) + (5);
        }
      }
    }
  }
  (s as any).will_calc = ((s as any).will_calc ?? 0) + (((s as any).pain ?? 0)?.['total']);
  (s as any).will_arousal_mod = Math.max((-25), Math.min((((s as any).pcs_horny ?? 0) - 50) / 2 + ((s as any).will_fetish_mod ?? 0), 25)) + ((s as any).will_fetish_mod_pref ?? 0);
  (s as any).will_succubus_mod = ((s as any).succublvl ?? 0)*25;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFetishes(s: GameState, scene: SceneBuilder): void {
  (s as any).will_fetish_mod = 0;
  (s as any).will_fetish_mod_pref = 0;
  if (((s as any).temp_fetish_list ?? 0) === '') {
    return;
  }
  (s as any).will_fetish_count = 0;
  // TODO-QSP: :jump_fetish_list
  (s as any).temp_fetish_pos = qspUntranslated(s, "instr(temp_fetish_list, ';')", { location: "willpower" });
  if (((s as any).temp_fetish_pos ?? 0) > 0) {
    if (((s as any).temp_fetish ?? 0) === 'creampie'  ||  ((s as any).temp_fetish ?? 0) === 'pregnant') {
      // TODO-QSP: jump 'jump_fetish_list'
    }
    if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(((s as any).temp_fetish ?? 0)) : -1) >= 0) {
      (s as any).will_fetish_mod = ((s as any).will_fetish_mod ?? 0) + (Math.max(0, qspFunc(s, 'fetish', 'get_exp', ((s as any).temp_fetish ?? 0)) - 25));
      (s as any).will_fetish_mod_pref = ((s as any).will_fetish_mod_pref ?? 0) + (Math.max(0, qspFunc(s, 'fetish', 'get_pref', ((s as any).temp_fetish ?? 0)) - 25));
      (s as any).will_fetish_count = ((s as any).will_fetish_count ?? 0) + (1);
    }
    // TODO-QSP: jump 'jump_fetish_list'
  } else {
    if (((s as any).temp_fetish_list ?? 0) !== '') {
      if (((s as any).temp_fetish ?? 0) === 'creampie'  ||  ((s as any).temp_fetish ?? 0) === 'pregnant') {
      }
      if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(((s as any).temp_fetish ?? 0)) : -1) >= 0) {
        (s as any).will_fetish_mod = ((s as any).will_fetish_mod ?? 0) + (Math.max(0, qspFunc(s, 'fetish', 'get_exp', ((s as any).temp_fetish ?? 0)) - 25));
        (s as any).will_fetish_mod_pref = ((s as any).will_fetish_mod_pref ?? 0) + (Math.max(0, qspFunc(s, 'fetish', 'get_pref', ((s as any).temp_fetish ?? 0)) - 25));
        (s as any).will_fetish_count = ((s as any).will_fetish_count ?? 0) + (1);
      }
    }
  }
  if (((s as any).will_fetish_count ?? 0) > 1) {
    (s as any).will_fetish_mod = ((s as any).will_fetish_mod ?? 0) / ((s as any).will_fetish_count ?? 0);
    (s as any).will_fetish_mod_pref = ((s as any).will_fetish_mod_pref ?? 0) / ((s as any).will_fetish_count ?? 0);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDifficulty(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['willpower'] === 1) {
    (s as any).will_cost = 0;
    return;
  }
  if (((s as any).locArgs?.[2] ?? 0) === 'easy') {
    if (((s as any).will_cost ?? 0) < 5) {
      (s as any).will_cost = 5;
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'hard') {
      (s as any).will_cost = ((s as any).will_cost ?? 0) * 9 / 4;
      if (((s as any).will_cost ?? 0) < 7) {
        (s as any).will_cost = 7;
      }
    } else {
      (s as any).will_cost = ((s as any).will_cost ?? 0) * 3 / 2;
      if (((s as any).will_cost ?? 0) < 6) {
        (s as any).will_cost = 6;
      }
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'force') {
    (s as any).will_cost = ((s as any).will_cost ?? 0) * (200 - ((s as any).pcs_persuas ?? 0)) / 100;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'resist') {
      (s as any).will_cost = ((s as any).will_cost ?? 0) * (200 - ((s as any).pcs_sprt ?? 0)) / 100;
      if (((s as any).trait_vars ?? 0)?.['doormat'] > 0) {
        (s as any).will_cost = ((s as any).will_cost ?? 0) * (100 + 15 * ((s as any).trait_vars ?? {})?.['doormat']) / 100;
      }
    }
  }
  if (((s as any).cheatVars ?? 0)?.['wp_cost_opt'] !== 0) {
    (s as any).will_cost = qspFunc(s, '_difficulty', 'get_multiplied', ((s as any).cheatVars ?? 0)?.['wp_cost_opt'], ((s as any).will_cost ?? 0), ((s as any).cheatVars ?? 0)?.['wp_cost_mult']);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['willpower'] === 0) {
    if (((s as any).will_cost ?? 0) < 1) {
      (s as any).will_cost = 1;
    }
    (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) - (((s as any).will_cost ?? 0));
  }
  if (((s as any).locArgs?.[2] ?? 0) !== 'chore') {
    if (((s as any).willpowermax ?? 0) < 150) {
      (s as any).will_counter = ((s as any).will_counter ?? 0) + (1);
    }
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).willpowermax ?? 0) < 150) {
        (s as any).will_counter = ((s as any).will_counter ?? 0) + (9);
      }
      if (((s as any).will_enforced ?? 0) < 20) {
        (s as any).will_enforced = ((s as any).will_enforced ?? 0) + (1);
      }
      qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 2) + 1);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'resist') {
        qspCall(s, 'exp_gain', 'sprt', Math.floor(Math.random() * 2) + 1);
      }
    }
  }
  if (((s as any).will_counter ?? 0) >= 20) {
    (s as any).will_counter = ((s as any).will_counter ?? 0) - (20);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (1);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetWillcostString(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).will_cost ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    // TODO-QSP: exit
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pcs_willpwr ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    ((s as any).ARGS ?? {})[3] = ((s as any).cheatVars ?? 0)?.['willcost_style'];
  }
  if (((s as any).locArgs?.[3] ?? 0) === 1) {
  } else {
    if (((s as any).locArgs?.[3] ?? 0) === 2) {
    }
  }
  if (((s as any).locArgs?.[2] ?? 0) < ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).locArgs?.[4] ?? 0) === 0  &&  ((s as any).locArgs?.[4] ?? 0) === '') {
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSimpleAct(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', '', ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), ((s as any).locArgs?.[6] ?? 0));
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    // TODO-QSP: act $ARGS[1] + $func('willpower', 'get_willcost_string'): $noWillpower
  } else {
    if (((s as any).cheatVars ?? 0)?.['willpower'] === 1) {
      // TODO-QSP: dynamic "
      // TODO-QSP: act ""<<$ARGS[1]>>"" (0 Willpower):
      // TODO-QSP: delact $selact
      // TODO-QSP: dynamic ""<<$ARGS[2]>>""
    }
  }
  // TODO-QSP: "
  if (((s as any).will_cost ?? 0) <= 0) {
    // TODO-QSP: dynamic "
    // TODO-QSP: act ""<<$ARGS[1]>>"":
    // TODO-QSP: delact $selact
    // TODO-QSP: dynamic ""<<$ARGS[2]>>""
  }
  // TODO-QSP: "
  // TODO-QSP: dynamic "
  // TODO-QSP: act ""<<$ARGS[1]>>"" + $func('willpower', 'get_willcost_string'):
  // TODO-QSP: delact $selact
  qspCall(s, 'willpower', '<<$ARGS[3]>>', '' + qspUntranslated(s, "ARGS[4]>", { location: "willpower" }) + '', '' + qspUntranslated(s, "ARGS[5]>", { location: "willpower" }) + '', '' + qspUntranslated(s, "ARGS[6]>", { location: "willpower" }) + '');
  qspCall(s, 'willpower', 'pay', '' + qspUntranslated(s, "ARGS[4]>", { location: "willpower" }) + '');
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic ""<<$ARGS[2]>>""
  // TODO-QSP: end
  // TODO-QSP: "
  // TODO-QSP: end
  return;
  // TODO-QSP: end
  scene.build();
}

function enterVoyeur(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).stat ?? 0)?.['voyeur'] + ((s as any).stat ?? 0)?.['voyeur_sex'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['voyeur'] - ((s as any).stat ?? {})?.['voyeur_sex'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['voyeur'] + ((s as any).stat ?? 0)?.['voyeur_sex'] <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['voyeur'] - ((s as any).stat ?? {})?.['voyeur_sex'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
      }
    } else {
      if (((s as any).stat ?? 0)?.['voyeur'] + ((s as any).stat ?? 0)?.['voyeur_sex'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['voyeur'] + ((s as any).stat ?? {})?.['voyeur_sex'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFlash(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).stat ?? 0)?.['flash'] + (((s as any).stat ?? 0)?.['flashlite'] / 2) <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['flash'] - (((s as any).stat ?? {})?.['flashlite'] / 2) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['flash'] + (((s as any).stat ?? 0)?.['flashlite'] / 2) <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['flash'] - (((s as any).stat ?? {})?.['flashlite'] / 2) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
      }
    } else {
      if (((s as any).stat ?? 0)?.['flash'] + (((s as any).stat ?? 0)?.['flashlite'] / 2) <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['flash'] + (((s as any).stat ?? {})?.['flashlite'] / 2) + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMast(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).stat ?? 0)?.['mast'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['mast'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['mast'] <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['mast'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
      }
    } else {
      if (((s as any).stat ?? 0)?.['mast'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['mast'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    if (((s as any).stat ?? 0)?.['hj'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['hj'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['hj'] <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['hj'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      if (((s as any).stat ?? 0)?.['hj'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['hj'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    if (((s as any).stat ?? 0)?.['bj'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['bj'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['bj'] <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['bj'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      if (((s as any).stat ?? 0)?.['bj'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['bj'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCuni(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  (s as any).cuni_check = (((s as any).stat ?? {})?.['cuni'] + ((s as any).stat ?? {})?.['cuni_give']) / 2;
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).cuni_check ?? 0) <= 90) {
      (s as any).will_cost = (100 - ((s as any).cuni_check ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).cuni_check ?? 0) <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).cuni_check ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).cuni_check ?? 0) <= 90) {
        (s as any).will_cost = (10 + ((s as any).cuni_check ?? 0) + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  (s as any).fetish_mod = 0;
  (s as any).fetish_count = 1;
  if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).succubusflag ?? 0) !== 1  &&  ((s as any).cycle ?? 0) < 4  &&  (((s as any).sexcontra ?? 0) === 7  ||  ((s as any).sexcontra ?? 0) === 0)) {
    if (((s as any).cycle ?? 0) === 2) {
      (s as any).fetish_mod = qspFunc(s, 'fetish', 'get_pref', 'pregnant');
    } else {
      if (((s as any).cycle ?? 0) === 0  ||  ((s as any).cycle ?? 0) === 3) {
        (s as any).fetish_mod = qspFunc(s, 'fetish', 'get_pref', 'pregnant') / 4;
      }
    }
  }
  (s as any).fetish_mod = ((s as any).fetish_mod ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'creampie'));
  (s as any).fetish_count = ((s as any).fetish_count ?? 0) + (((qspFunc(s, 'fetish', 'get_pref', 'pregnant') > 0) ? (1) : (0)));
  (s as any).fetish_count = ((s as any).fetish_count ?? 0) + (((qspFunc(s, 'fetish', 'get_pref', 'creampie') > 0) ? (1) : (0)));
  // TODO-QSP: fetish_mod /= fetish_count
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    if (((s as any).stat ?? 0)?.['vaginal'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['vaginal'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).fetish_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).fetish_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['vaginal'] <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['vaginal'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).fetish_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).fetish_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      if (((s as any).stat ?? 0)?.['vaginal'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['vaginal'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).fetish_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).fetish_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    if (((s as any).stat ?? 0)?.['anal'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['anal'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['anal'] <= 40) {
        (s as any).will_cost = (160 - ((s as any).will_enforced ?? 0) * 2 - ((s as any).stat ?? {})?.['anal'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (120 - ((s as any).will_enforced ?? 0) * 2 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      if (((s as any).stat ?? 0)?.['anal'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['anal'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    if (((s as any).stat ?? 0)?.['gangbang_count'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['gangbang_count'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['gangbang_count'] <= 40) {
        (s as any).will_cost = (160 - ((s as any).will_enforced ?? 0) * 2 - ((s as any).stat ?? {})?.['gangbang_count'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (120 - ((s as any).will_enforced ?? 0) * 2 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      if (((s as any).stat ?? 0)?.['gangbang_count'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['gangbang_count'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGroup(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    if (((s as any).stat ?? 0)?.['group_count'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['group_count'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['group_count'] <= 40) {
        (s as any).will_cost = (160 - ((s as any).will_enforced ?? 0) * 2 - ((s as any).stat ?? {})?.['group_count'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (120 - ((s as any).will_enforced ?? 0) * 2 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      if (((s as any).stat ?? 0)?.['group_count'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['group_count'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOrgy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    if (((s as any).stat ?? 0)?.['orgy_count'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['orgy_count'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['orgy_count'] <= 40) {
        (s as any).will_cost = (160 - ((s as any).will_enforced ?? 0) * 2 - ((s as any).stat ?? {})?.['orgy_count'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (120 - ((s as any).will_enforced ?? 0) * 2 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      if (((s as any).stat ?? 0)?.['orgy_count'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['orgy_count'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterProstitution(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    if (((s as any).stat ?? 0)?.['prostitution_count'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['prostitution_count'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['prostitution_count'] <= 40) {
        (s as any).will_cost = (160 - ((s as any).will_enforced ?? 0) * 2 - ((s as any).stat ?? {})?.['prostitution_count'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (120 - ((s as any).will_enforced ?? 0) * 2 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
      }
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      (s as any).prost_will = ((s as any).fame ?? {})?.['pav_prostitute'] + ((s as any).fame ?? {})?.['city_prostitute'] + ((s as any).fame ?? {})?.['pushkin_prostitute'] + ((s as any).fame ?? {})?.['village_prostitute'] + ((s as any).stat ?? {})?.['prostitution_count']/2;
      if (((s as any).prost_will ?? 0) <= 90) {
        (s as any).will_cost = (10 + ((s as any).prost_will ?? 0) + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHumiliation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    if (((s as any).stat ?? 0)?.['humiliation'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['humiliation'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      (s as any).will_cost = (120 - ((s as any).will_enforced ?? 0) * 2 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      if (((s as any).stat ?? 0)?.['humiliation'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['humiliation'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFootjob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).stat ?? 0)?.['footjob'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['footjob'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['footjob'] <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['footjob'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).stat ?? 0)?.['footjob'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['footjob'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTitjob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).stat ?? 0)?.['titjob'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['titjob'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['titjob'] <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['titjob'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).stat ?? 0)?.['titjob'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['titjob'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTrib(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).stat ?? 0)?.['trib'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['trib'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['trib'] <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['trib'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).stat ?? 0)?.['trib'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['trib'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRimming(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  (s as any).rimming_check = (((s as any).stat ?? {})?.['rimming'] + ((s as any).stat ?? {})?.['rimming_give']) / 2;
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).rimming_check ?? 0) <= 90) {
      (s as any).will_cost = (100 - ((s as any).rimming_check ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).rimming_check ?? 0) <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).rimming_check ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).rimming_check ?? 0) <= 90) {
        (s as any).will_cost = (10 + ((s as any).rimming_check ?? 0) + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBDSM(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if ((((s as any).stat ?? 0)?.['BDSM'] + ((s as any).stat ?? 0)?.['BDSM_give']) / 2 <= 90) {
      (s as any).will_cost = (100 - ((((s as any).stat ?? {})?.['BDSM'] + ((s as any).stat ?? {})?.['BDSM_give']) / 2) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['BDSM_give'] <= 40) {
        (s as any).will_cost = (160 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['BDSM_give'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (120 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
      }
    } else {
      if (((s as any).stat ?? 0)?.['BDSM'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['BDSM'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCumOutside(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  (s as any).cum_check = ((s as any).facial ?? 0) + ((s as any).frot ?? 0) + (((s as any).swallow ?? 0)) + ((s as any).stat ?? {})?.['total_creampies'] + (((s as any).pcs_acp_known ?? 0));
  (s as any).fetish_mod = 0;
  (s as any).fetish_count = 1;
  if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).succubusflag ?? 0) !== 1  &&  ((s as any).cycle ?? 0) < 4  &&  (((s as any).sexcontra ?? 0) === 7  ||  ((s as any).sexcontra ?? 0) === 0)) {
    if (((s as any).cycle ?? 0) === 2) {
      (s as any).fetish_mod = qspFunc(s, 'fetish', 'get_pref', 'pregnant');
    } else {
      if (((s as any).cycle ?? 0) === 0  ||  ((s as any).cycle ?? 0) === 3) {
        (s as any).fetish_mod = qspFunc(s, 'fetish', 'get_pref', 'pregnant') / 4;
      }
    }
  }
  (s as any).fetish_mod = ((s as any).fetish_mod ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'creampie'));
  (s as any).fetish_count = ((s as any).fetish_count ?? 0) + (((qspFunc(s, 'fetish', 'get_pref', 'pregnant') > 0) ? (1) : (0)));
  (s as any).fetish_count = ((s as any).fetish_count ?? 0) + (((qspFunc(s, 'fetish', 'get_pref', 'creampie') > 0) ? (1) : (0)));
  // TODO-QSP: fetish_mod /= fetish_count
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    if (((s as any).cumloc ?? 0)[1] + ((s as any).cumloc ?? 0)[2] + ((s as any).cumloc ?? 0)[4] + ((s as any).cumloc ?? 0)[5] + ((s as any).cumloc ?? 0)[6] + ((s as any).cumloc ?? 0)[7] + ((s as any).cumloc ?? 0)[8] + ((s as any).cumloc ?? 0)[9] + ((s as any).cumloc ?? 0)[10] + ((s as any).cumloc ?? 0)[11] + ((s as any).cumloc ?? 0)[13] + ((s as any).cumloc ?? 0)[14] + ((s as any).cumloc ?? 0)[15] + ((s as any).cumloc ?? 0)[16] > 0  ||  ((s as any).cum_check ?? 0) > 90) {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) + ((s as any).fetish_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (100 - ((s as any).cum_check ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) + ((s as any).fetish_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      (s as any).will_cost = (120 - ((s as any).will_enforced ?? 0) * 2 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) + ((s as any).fetish_mod ?? 0))/10;
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      if (((s as any).cumloc ?? 0)[1] + ((s as any).cumloc ?? 0)[2] + ((s as any).cumloc ?? 0)[4] + ((s as any).cumloc ?? 0)[5] + ((s as any).cumloc ?? 0)[6] + ((s as any).cumloc ?? 0)[7] + ((s as any).cumloc ?? 0)[8] + ((s as any).cumloc ?? 0)[9] + ((s as any).cumloc ?? 0)[10] + ((s as any).cumloc ?? 0)[11] + ((s as any).cumloc ?? 0)[13] + ((s as any).cumloc ?? 0)[14] + ((s as any).cumloc ?? 0)[15] + ((s as any).cumloc ?? 0)[16] > 0  ||  ((s as any).cum_check ?? 0) > 90) {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) - ((s as any).fetish_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (10 + ((s as any).cum_check ?? 0) + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) - ((s as any).fetish_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSwallow(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1  ||  ((s as any).cumloc ?? 0)[12] > 0) {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      (s as any).will_cost = (80 - ((s as any).will_enforced ?? 0) - ((s as any).trait_vars ?? {})?.['cumeater'] * 10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1  ||  ((s as any).cumloc ?? 0)[12] > 0) {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCumInside(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  (s as any).creampie_count = qspFunc(s, 'fetish', 'get_exp', 'creampie');
  (s as any).fetish_mod = 0;
  (s as any).fetish_count = 1;
  if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).succubusflag ?? 0) !== 1  &&  ((s as any).cycle ?? 0) < 4  &&  (((s as any).sexcontra ?? 0) === 7  ||  ((s as any).sexcontra ?? 0) === 0)) {
    if (((s as any).cycle ?? 0) === 2) {
      (s as any).fetish_mod = qspFunc(s, 'fetish', 'get_pref', 'pregnant');
    } else {
      if (((s as any).cycle ?? 0) === 0  ||  ((s as any).cycle ?? 0) === 3) {
        (s as any).fetish_mod = qspFunc(s, 'fetish', 'get_pref', 'pregnant') / 4;
      }
    }
  }
  (s as any).fetish_mod = ((s as any).fetish_mod ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'creampie'));
  (s as any).fetish_count = ((s as any).fetish_count ?? 0) + (((qspFunc(s, 'fetish', 'get_pref', 'pregnant') > 0) ? (1) : (0)));
  (s as any).fetish_count = ((s as any).fetish_count ?? 0) + (((qspFunc(s, 'fetish', 'get_pref', 'creampie') > 0) ? (1) : (0)));
  // TODO-QSP: fetish_mod /= fetish_count
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    if (((s as any).cumloc ?? 0)[0] > 0  ||  ((s as any).creampie_count ?? 0) > 90) {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).fetish_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (100 - ((s as any).creampie_count ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).fetish_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      (s as any).will_cost = (120 - ((s as any).will_enforced ?? 0) * 2 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).fetish_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      if (((s as any).cumloc ?? 0)[0] > 0  ||  ((s as any).creampie_count ?? 0) > 90) {
        (s as any).will_cost = (100 + ((s as any).will_arousal_mod ?? 0) + ((s as any).fetish_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (10 + ((s as any).creampie_count ?? 0) + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).fetish_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCumInsideAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    if (((s as any).cumloc ?? 0)[3] > 0  ||  ((s as any).pcs_acp_known ?? 0) > 90) {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (100 - ((s as any).pcs_acp_known ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      (s as any).will_cost = (120 - ((s as any).will_enforced ?? 0) * 2 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      if (((s as any).cumloc ?? 0)[3] > 0  ||  ((s as any).pcs_acp_known ?? 0) > 90) {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (10 + ((s as any).pcs_acp_known ?? 0) + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterKiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).stat ?? 0)?.['kiss'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['kiss'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['kiss'] <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['kiss'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).stat ?? 0)?.['kiss'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['kiss'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterForeplay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if ((((s as any).stat ?? 0)?.['foreplay'] + ((s as any).stat ?? 0)?.['foreplay_give']) / 2 <= 90) {
      (s as any).will_cost = (100 - ((((s as any).stat ?? {})?.['foreplay'] + ((s as any).stat ?? {})?.['foreplay_give']) / 2) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['foreplay_give'] <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['foreplay_give'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
      }
    } else {
      if (((s as any).stat ?? 0)?.['foreplay'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['foreplay'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPee(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if ((((s as any).stat ?? 0)?.['pee'] + ((s as any).stat ?? 0)?.['pee_give']) / 2 <= 90) {
      (s as any).will_cost = (100 - ((((s as any).stat ?? {})?.['pee'] + ((s as any).stat ?? {})?.['pee_give']) / 2) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['pee_give'] <= 40) {
        (s as any).will_cost = (160 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['pee_give'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (120 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
      }
    } else {
      if (((s as any).stat ?? 0)?.['pee'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['pee'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSkill(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((((((s as any).locArgs?.[1] ?? 0)).length)-3)-1)) === '_lvl') {
    // TODO-QSP: $ARGS[1] = $mid($ARGS[1], 1, len($ARGS[1])-4)
    qspCall(s, 'willpower', 'skill_base', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
    return;
  }
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'pcs_') {
    ((s as any).ARGS ?? {})[1] = 0;
  }
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[4] ?? 0));
  if ((0 as any) >= 100) {
    (s as any).will_cost = ((s as any).will_calc ?? 0) / 10;
  } else {
    // TODO-QSP: dynamic 'will_cost = (100 - pcs_<<$ARGS[1]>> + will_calc) / 10'
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSkillBase(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'pcs_') {
    // TODO-QSP: $ARGS[1] = $mid($ARGS[1], 5)
    qspCall(s, 'willpower', 'skill', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
    return;
  }
  if (((((s as any).locArgs?.[1] ?? 0)).slice((((((s as any).locArgs?.[1] ?? 0)).length)-3)-1)) === '_lvl') {
    ((s as any).ARGS ?? {})[1] = ((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(((((s as any).locArgs?.[1] ?? 0)).length)-4)));
  }
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[4] ?? 0));
  if ((0 as any) >= 100) {
    (s as any).will_cost = ((s as any).will_calc ?? 0) / 10;
  } else {
    // TODO-QSP: dynamic 'will_cost = (100 - <<$ARGS[1]>>_lvl + will_calc) / 10'
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRape(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
      (s as any).will_calc = 0;
    }
    (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      (s as any).will_cost = (200 - ((s as any).will_enforced ?? 0) * 2 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0))/10;
    } else {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
      }
      if (((s as any).stat ?? 0)?.['rape_count'] === 0) {
        (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      } else {
        (s as any).will_cost = (100 + ((s as any).stat ?? {})?.['rape_count'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDrink(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    (s as any).will_cost = (60 - ((s as any).drugVars ?? {})?.['alcohol_exp'] * 40 + ((s as any).will_calc ?? 0))/10;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      (s as any).will_cost = (100 - ((s as any).will_enforced ?? 0) - ((s as any).drugVars ?? {})?.['alcohol_exp'] * 30 + ((s as any).will_calc ?? 0))/10;
    } else {
      if (((s as any).alko ?? 0) > 10) {
        (s as any).will_cost = (20 + ((s as any).drugVars ?? {})?.['alcohol_exp'] * 10 + ((s as any).will_calc ?? 0))/10;
      } else {
        if (((s as any).alko ?? 0) > 6) {
          (s as any).will_cost = (80 + ((s as any).drugVars ?? {})?.['alcohol_exp'] * 40 + ((s as any).will_calc ?? 0))/10;
        } else {
          if (((s as any).alko ?? 0) > 3) {
            (s as any).will_cost = (60 + ((s as any).drugVars ?? {})?.['alcohol_exp'] * 30 + ((s as any).will_calc ?? 0))/10;
          } else {
            (s as any).will_cost = (10 + ((s as any).drugVars ?? {})?.['alcohol_exp'] * 20 + ((s as any).will_calc ?? 0))/10;
          }
        }
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDrugs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    (s as any).will_cost = (((s as any).will_calc ?? 0) + 100 - ((s as any).trait_vars ?? {})?.['addictive_personality'] * 30) / 10;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      (s as any).will_cost = (((s as any).will_calc ?? 0) + 100 - ((s as any).will_enforced ?? 0) - ((s as any).trait_vars ?? {})?.['addictive_personality'] * 10) / 10;
    } else {
      (s as any).will_cost = (((s as any).will_calc ?? 0) + Math.max(10, ((s as any).trait_vars ?? {})?.['addictive_personality'] * 30)) / 10;
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCrime(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[0] ?? 0) === 'force') {
    (s as any).will_cost = (80 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0))/10;
  } else {
    (s as any).will_cost = (60 + ((s as any).will_calc ?? 0))/10;
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterExhib(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    (s as any).will_cost = (100 - ((s as any).trait_vars ?? {})?.['exhibitionist'] * 20 - ((s as any).pcs_inhib ?? 0)/5 + ((s as any).will_calc ?? 0))/10;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      (s as any).will_cost = (100 - ((s as any).will_enforced ?? 0) - ((s as any).trait_vars ?? {})?.['exhibitionist'] * 10 + ((s as any).will_calc ?? 0))/10;
    } else {
      (s as any).will_cost = (((s as any).trait_vars ?? {})?.['exhibitionist'] * 25 + ((s as any).pcs_inhib ?? 0)/4 + ((s as any).will_calc ?? 0))/10;
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSleep(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  (s as any).will_cost = 0;
  if (((s as any).pcs_sleep ?? 0) <= 5) {
    (s as any).will_cost = ((s as any).will_calc ?? 0)/10;
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDefault3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'force') {
    if (((s as any).locArgs?.[2] ?? 0) === 'easy') {
      (s as any).will_cost = (60 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0))/10;
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'hard') {
        (s as any).will_cost = (90 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0))/10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0))/10;
      }
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'easy') {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0))/10;
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'hard') {
        (s as any).will_cost = (40 + ((s as any).will_calc ?? 0))/10;
      } else {
        (s as any).will_cost = (20 + ((s as any).will_calc ?? 0))/10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDnd(s: GameState, scene: SceneBuilder): void {
  (s as any).will_dnd = 0;
  if (((s as any).alko ?? 0) > 10) {
    (s as any).will_dnd = ((s as any).will_dnd ?? 0) + (160);
  } else {
    if (((s as any).alko ?? 0) > 6) {
      (s as any).will_dnd = ((s as any).will_dnd ?? 0) + (80);
    } else {
      if (((s as any).alko ?? 0) > 3) {
        (s as any).will_dnd = ((s as any).will_dnd ?? 0) + (30);
      }
    }
  }
  if (((s as any).drugVars ?? 0)?.['cigarettes_need'] > 10) {
    (s as any).will_dnd = ((s as any).will_dnd ?? 0) + (10);
  }
  if (((s as any).drugVars ?? 0)?.['weed_high'] > 0) {
    (s as any).will_dnd = ((s as any).will_dnd ?? 0) - (10);
  }
  if (((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] > 2) {
    (s as any).will_dnd = ((s as any).will_dnd ?? 0) + (40);
  } else {
    if (((s as any).drugVars ?? 0)?.['amphetamine_high'] > 0) {
      (s as any).will_dnd = ((s as any).will_dnd ?? 0) + (80);
    }
  }
  if (((s as any).drugVars ?? 0)?.['heroin_need'] > 0) {
    (s as any).will_dnd = ((s as any).will_dnd ?? 0) + (100);
  } else {
    if (((s as any).drugVars ?? 0)?.['heroin_high'] > 0) {
      (s as any).will_dnd = ((s as any).will_dnd ?? 0) + (60);
    }
  }
  if (((s as any).drugVars ?? 0)?.['cocaine_addict'] === 1) {
    (s as any).will_dnd = ((s as any).will_dnd ?? 0) + (60);
  } else {
    if (((s as any).drugVars ?? 0)?.['cocaine_system'] < 0) {
      (s as any).will_dnd = ((s as any).will_dnd ?? 0) - (20);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'calc':
      enterCalc(s, scene);
      break;
    case 'fetishes':
      enterFetishes(s, scene);
      break;
    case 'difficulty':
      enterDifficulty(s, scene);
      break;
    case 'pay':
      enterPay(s, scene);
      break;
    case 'get_willcost_string':
      enterGetWillcostString(s, scene);
      break;
    case 'simple_act':
      enterSimpleAct(s, scene);
      break;
    case 'voyeur':
      enterVoyeur(s, scene);
      break;
    case 'flash':
      enterFlash(s, scene);
      break;
    case 'mast':
      enterMast(s, scene);
      break;
    case 'hj':
      enterHj(s, scene);
      break;
    case 'bj':
      enterBj(s, scene);
      break;
    case 'cuni':
      enterCuni(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'group':
      enterGroup(s, scene);
      break;
    case 'orgy':
      enterOrgy(s, scene);
      break;
    case 'prostitution':
      enterProstitution(s, scene);
      break;
    case 'humiliation':
      enterHumiliation(s, scene);
      break;
    case 'footjob':
      enterFootjob(s, scene);
      break;
    case 'titjob':
      enterTitjob(s, scene);
      break;
    case 'trib':
      enterTrib(s, scene);
      break;
    case 'rimming':
      enterRimming(s, scene);
      break;
    case 'BDSM':
      enterBDSM(s, scene);
      break;
    case 'cum_outside':
      enterCumOutside(s, scene);
      break;
    case 'swallow':
      enterSwallow(s, scene);
      break;
    case 'cum_inside':
      enterCumInside(s, scene);
      break;
    case 'cum_inside_anal':
      enterCumInsideAnal(s, scene);
      break;
    case 'kiss':
      enterKiss(s, scene);
      break;
    case 'foreplay':
      enterForeplay(s, scene);
      break;
    case 'pee':
      enterPee(s, scene);
      break;
    case 'skill':
      enterSkill(s, scene);
      break;
    case 'skill_base':
      enterSkillBase(s, scene);
      break;
    case 'rape':
      enterRape(s, scene);
      break;
    case 'drink':
      enterDrink(s, scene);
      break;
    case 'drugs':
      enterDrugs(s, scene);
      break;
    case 'crime':
      enterCrime(s, scene);
      break;
    case 'exhib':
      enterExhib(s, scene);
      break;
    case 'sleep':
      enterSleep(s, scene);
      break;
    case 'dnd':
      enterDnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const willpower: LocationDef = {
  name: 'willpower',
  region: 'other',
  enter: enter,
};
