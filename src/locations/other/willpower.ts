import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "
  scene.build();
}

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
