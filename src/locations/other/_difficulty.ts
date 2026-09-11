import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPreset(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'set') {
    if (((s as any).locArgs?.[2] ?? 0) === 'sims') {
      qspCall(s, '_difficulty', 'setdifficulty_int', 1);
      (s as any).cheatVars['deg_speed_opt'] = (-4);
      (s as any).cfg_vars['pos_mult_opt'] = 0;
      (s as any).cfg_vars['neg_mult_opt'] = (-4);
      (s as any).cheatVars['pos_mood_opt'] = 3;
      (s as any).cheatVars['neg_mood_opt'] = (-3);
      (s as any).cheatVars['wp_cost_opt'] = (-3);
      (s as any).cheatVars['preg_chance'] = (-4);
      (s as any).cheatVars['random_lovers'] = 0;
      (s as any).cheatVars['random_robbers'] = 1;
      (s as any).cheatVars['random_snatchers'] = 1;
      (s as any).cheatVars['random_rapists'] = 1;
      (s as any).cheatVars['abduction_chance'] = 1;
      (s as any).cheatVars['tatiana_apprnc_change'] = 0;
      (s as any).cheatVars['auto_tampons'] = 1;
      (s as any).cheatVars['track_period'] = 1;
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'very easy') {
        qspCall(s, '_difficulty', 'setdifficulty_int', 1);
        (s as any).cheatVars['deg_speed_opt'] = (-3);
        (s as any).cfg_vars['pos_mult_opt'] = 0;
        (s as any).cfg_vars['neg_mult_opt'] = (-3);
        (s as any).cheatVars['pos_mood_opt'] = 2;
        (s as any).cheatVars['neg_mood_opt'] = (-2);
        (s as any).cheatVars['wp_cost_opt'] = (-2);
        (s as any).cheatVars['preg_chance'] = (-3);
        (s as any).cheatVars['random_lovers'] = 0;
        (s as any).cheatVars['random_robbers'] = 2;
        (s as any).cheatVars['random_snatchers'] = 2;
        (s as any).cheatVars['random_rapists'] = 2;
        (s as any).cheatVars['abduction_chance'] = 1;
        (s as any).cheatVars['tatiana_apprnc_change'] = 0;
        (s as any).cheatVars['auto_tampons'] = 1;
        (s as any).cheatVars['track_period'] = 1;
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'easy') {
          qspCall(s, '_difficulty', 'setdifficulty_int', 2);
          (s as any).cheatVars['deg_speed_opt'] = (-1);
          (s as any).cfg_vars['pos_mult_opt'] = 0;
          (s as any).cfg_vars['neg_mult_opt'] = (-1);
          (s as any).cheatVars['pos_mood_opt'] = 1;
          (s as any).cheatVars['neg_mood_opt'] = (-1);
          (s as any).cheatVars['wp_cost_opt'] = (-1);
          (s as any).cheatVars['preg_chance'] = (-2);
          (s as any).cheatVars['random_lovers'] = 0;
          (s as any).cheatVars['random_robbers'] = 0;
          (s as any).cheatVars['random_snatchers'] = 0;
          (s as any).cheatVars['random_rapists'] = 2;
          (s as any).cheatVars['abduction_chance'] = 2;
          (s as any).cheatVars['tatiana_apprnc_change'] = 0;
          (s as any).cheatVars['auto_tampons'] = 1;
          (s as any).cheatVars['track_period'] = 1;
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 'normal') {
            qspCall(s, '_difficulty', 'setdifficulty_int', 3);
            (s as any).cheatVars['deg_speed_opt'] = 0;
            (s as any).cfg_vars['pos_mult_opt'] = 0;
            (s as any).cfg_vars['neg_mult_opt'] = 0;
            (s as any).cheatVars['pos_mood_opt'] = 0;
            (s as any).cheatVars['neg_mood_opt'] = 0;
            (s as any).cheatVars['wp_cost_opt'] = 0;
            (s as any).cheatVars['preg_chance'] = 0;
            (s as any).cheatVars['random_lovers'] = 0;
            (s as any).cheatVars['random_robbers'] = 0;
            (s as any).cheatVars['random_snatchers'] = 0;
            (s as any).cheatVars['random_rapists'] = 0;
            (s as any).cheatVars['abduction_chance'] = 0;
            (s as any).cheatVars['tatiana_apprnc_change'] = 0;
            (s as any).cheatVars['auto_tampons'] = 1;
            (s as any).cheatVars['track_period'] = 1;
          } else {
            if (((s as any).locArgs?.[2] ?? 0) === 'hard') {
              qspCall(s, '_difficulty', 'setdifficulty_int', 3);
              (s as any).cheatVars['deg_speed_opt'] = 2;
              (s as any).cfg_vars['pos_mult_opt'] = 0;
              (s as any).cfg_vars['neg_mult_opt'] = 2;
              (s as any).cheatVars['pos_mood_opt'] = (-1);
              (s as any).cheatVars['neg_mood_opt'] = 1;
              (s as any).cheatVars['wp_cost_opt'] = 1;
              (s as any).cheatVars['preg_chance'] = 2;
              (s as any).cheatVars['random_lovers'] = 0;
              (s as any).cheatVars['random_robbers'] = 3;
              (s as any).cheatVars['random_snatchers'] = 3;
              (s as any).cheatVars['random_rapists'] = 0;
              (s as any).cheatVars['abduction_chance'] = 0;
              (s as any).cheatVars['tatiana_apprnc_change'] = 1;
              (s as any).cheatVars['auto_tampons'] = 0;
              (s as any).cheatVars['track_period'] = 1;
            } else {
              if (((s as any).locArgs?.[2] ?? 0) === 'very hard') {
                qspCall(s, '_difficulty', 'setdifficulty_int', 3);
                (s as any).cheatVars['deg_speed_opt'] = 3;
                (s as any).cfg_vars['pos_mult_opt'] = 0;
                (s as any).cfg_vars['neg_mult_opt'] = 3;
                (s as any).cheatVars['pos_mood_opt'] = (-2);
                (s as any).cheatVars['neg_mood_opt'] = 2;
                (s as any).cheatVars['wp_cost_opt'] = 2;
                (s as any).cheatVars['preg_chance'] = 3;
                (s as any).cheatVars['random_lovers'] = 0;
                (s as any).cheatVars['random_robbers'] = 3;
                (s as any).cheatVars['random_snatchers'] = 4;
                (s as any).cheatVars['random_rapists'] = 3;
                (s as any).cheatVars['abduction_chance'] = 3;
                (s as any).cheatVars['tatiana_apprnc_change'] = 1;
                (s as any).cheatVars['auto_tampons'] = 0;
                (s as any).cheatVars['track_period'] = 0;
              } else {
                if (((s as any).locArgs?.[2] ?? 0) === 'russia') {
                  qspCall(s, '_difficulty', 'setdifficulty_int', 4);
                  (s as any).cheatVars['deg_speed_opt'] = 4;
                  (s as any).cfg_vars['pos_mult_opt'] = 0;
                  (s as any).cfg_vars['neg_mult_opt'] = 4;
                  (s as any).cheatVars['pos_mood_opt'] = (-3);
                  (s as any).cheatVars['neg_mood_opt'] = 3;
                  (s as any).cheatVars['wp_cost_opt'] = 3;
                  (s as any).cheatVars['preg_chance'] = 4;
                  (s as any).cheatVars['random_lovers'] = 0;
                  (s as any).cheatVars['random_robbers'] = 4;
                  (s as any).cheatVars['random_snatchers'] = 4;
                  (s as any).cheatVars['random_rapists'] = 4;
                  (s as any).cheatVars['abduction_chance'] = 4;
                  (s as any).cheatVars['tatiana_apprnc_change'] = 1;
                  (s as any).cheatVars['auto_tampons'] = 0;
                  (s as any).cheatVars['track_period'] = 0;
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'get') {
      (s as any).result = 0;
      if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === -4  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 1) {
        if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === -4  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === -4  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 1  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 1  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 1  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 1  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 0  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
          (s as any).result = 1;
        }
      } else {
        if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 1) {
          if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === -2  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === -2  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === -3  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 2  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 2  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 2  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 1  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 0  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
            (s as any).result = 2;
          }
        } else {
          if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 2) {
            if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 1  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === -2  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 2  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 2  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 0  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
              (s as any).result = 3;
            }
          } else {
            if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 3) {
              if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 0  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 0  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 0  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
                (s as any).result = 4;
              }
            } else {
              if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 3) {
                if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 1  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 1  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === 2  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 3  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 3  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 0  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 0  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 1  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 0  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
                  (s as any).result = 5;
                }
              } else {
                if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 3) {
                  if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === -2  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === 3  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 3  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 4  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 3  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 3  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 1  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 0  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 0) {
                    (s as any).result = 6;
                  }
                } else {
                  if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === 4  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 4) {
                    if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === 4  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === 4  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 4  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 4  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 4  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 4  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 1  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 0  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 0) {
                      (s as any).result = 7;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterSetdifficultyInt(s: GameState, scene: SceneBuilder): void {
  (s as any).cheatVars['skill_gain'] = 0;
  return;
  scene.build();
}

function enterSetdifficulty(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'easy peasy') {
    qspCall(s, '_difficulty', 'setdifficulty_int', 1);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'relaxed') {
      qspCall(s, '_difficulty', 'setdifficulty_int', 2);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'hardcore') {
        qspCall(s, '_difficulty', 'setdifficulty_int', 4);
      } else {
        qspCall(s, '_difficulty', 'setdifficulty_int', 3);
      }
    }
  }
  return;
  scene.build();
}

function enterGetdifficulty(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 1) {
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 2) {
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 4) {
  }
  scene.build();
}

function enterGetexpadj(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 20 * ((s as any).cheatVars ?? {})?.['skill_gain'];
  return;
  scene.build();
}

function enterGetExpGain(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 100;
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 1) {
    (s as any).result = 300;
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 2) {
    (s as any).result = 200;
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 4) {
    (s as any).result = 50;
  }
  return;
  scene.build();
}

function enterGetDegLoss(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, '_difficulty', 'get_multiplied', ((s as any).egVars ?? 0)?.['deg_loss_mult'], 100, ((s as any).cheatVars ?? 0)?.['deg_speed_custom']);
  return;
  scene.build();
}

function enterAddmoney(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'earn', ARGS[1]
  scene.build();
}

function enterAddmoneystring(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSpendmoney(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', ARGS[1]
  scene.build();
}

function enterGetMultiplied(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === -99) {
    (s as any).result = 0;
  } else {
    if ((!((s as any).locArgs?.[1] ?? 0))) {
      (s as any).result = qspUntranslated(s, "ARGS[2]", { location: "_difficulty" });
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 1) {
        (s as any).result = (((s as any).ARGS ?? 0)[2] * 5) / 4;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 2) {
          (s as any).result = (((s as any).ARGS ?? 0)[2] * 3) / 2;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 3) {
            (s as any).result = ((s as any).ARGS ?? 0)[2] * 2;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 4) {
              (s as any).result = ((s as any).ARGS ?? 0)[2] * 3;
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === -1) {
                (s as any).result = (((s as any).ARGS ?? 0)[2] * 3) / 4;
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === -2) {
                  (s as any).result = (((s as any).ARGS ?? 0)[2] * 2) / 3;
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === -3) {
                    (s as any).result = ((s as any).ARGS ?? 0)[2] / 2;
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) === -4) {
                      (s as any).result = ((s as any).ARGS ?? 0)[2] / 3;
                    } else {
                      if (((s as any).locArgs?.[1] ?? 0) === 99) {
                        (s as any).result = (((s as any).ARGS ?? 0)[2] * ((s as any).ARGS ?? 0)[3]) / 100;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterSpendmoneystring(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetmaxgrades(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 1) {
    (s as any).max_grades = (((s as any).pcs_intel ?? 0) * 185) / 100;
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 2) {
    (s as any).max_grades = (((s as any).pcs_intel ?? 0) * 155) / 100;
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 3) {
    (s as any).max_grades = (((s as any).pcs_intel ?? 0) * 133) / 100;
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 4) {
    (s as any).max_grades = (((s as any).pcs_intel ?? 0) * 115) / 100;
  }
  if (((s as any).max_grades ?? 0) > 100) {
    (s as any).max_grades = 100;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'preset':
      enterPreset(s, scene);
      break;
    case 'setdifficulty_int':
      enterSetdifficultyInt(s, scene);
      break;
    case 'setdifficulty':
      enterSetdifficulty(s, scene);
      break;
    case 'getdifficulty':
      enterGetdifficulty(s, scene);
      break;
    case 'getexpadj':
      enterGetexpadj(s, scene);
      break;
    case 'get_exp_gain':
      enterGetExpGain(s, scene);
      break;
    case 'get_deg_loss':
      enterGetDegLoss(s, scene);
      break;
    case 'addmoney':
      enterAddmoney(s, scene);
      break;
    case 'addmoneystring':
      enterAddmoneystring(s, scene);
      break;
    case 'spendmoney':
      enterSpendmoney(s, scene);
      break;
    case 'get_multiplied':
      enterGetMultiplied(s, scene);
      break;
    case 'spendmoneystring':
      enterSpendmoneystring(s, scene);
      break;
    case 'getmaxgrades':
      enterGetmaxgrades(s, scene);
      break;
    default:
      enterPreset(s, scene);
      break;
  }
}

export const _difficulty: LocationDef = {
  name: '_difficulty',
  region: 'other',
  enter: enter,
};
