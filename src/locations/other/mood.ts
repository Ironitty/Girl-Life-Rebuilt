import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterClamp(s: GameState, scene: SceneBuilder): void {
  (s as any).mood_trauma = qspFunc(s, 'math', 'int_clamp', ((s as any).mood_trauma ?? 0), 0, 15);
  if (((s as any).moodVars ?? 0)?.['disp_base'] === 0) {
    ((s as any).moodVars ?? {})['disp_base'] = 50;
  }
  ((s as any).moodVars ?? {})['max'] = 100;
  if (((s as any).gerpes ?? 0) >= 3) {
    ((s as any).moodVars ?? {})['max'] = (((s as any).moodVars ?? {})['max'] ?? 0) - (5);
  }
  if (((s as any).sifilis ?? 0) >= 21) {
    ((s as any).moodVars ?? {})['max'] = (((s as any).moodVars ?? {})['max'] ?? 0) - (5);
  }
  if (((s as any).triper ?? 0) > 2) {
    ((s as any).moodVars ?? {})['max'] = (((s as any).moodVars ?? {})['max'] ?? 0) - (5);
  }
  ((s as any).moodVars ?? {})['max'] = (((s as any).moodVars ?? {})['max'] ?? 0) - (((s as any).mood_trauma ?? 0) * 4);
  ((s as any).moodVars ?? {})['max'] = qspUntranslated(s, "max(40, moodVars['max'])", { location: "mood" });
  ((s as any).moodVars ?? {})['min'] = 1;
  ((s as any).moodVars ?? {})['disp_base'] = qspFunc(s, 'math', 'int_clamp', ((s as any).moodVars ?? 0)?.['disp_base'], 20, 70);
  ((s as any).moodVars ?? {})['disp'] = qspFunc(s, 'math', 'int_clamp', ((s as any).moodVars ?? {})?.['disp_base'] + ((s as any).arch_effects ?? {})?.['disposition_effect'], 20, 70);
  (s as any).pcs_mood = qspUntranslated(s, "min(moodVars['max'], pcs_mood)", { location: "mood" });
  if (((s as any).pcs_mood ?? 0) < ((s as any).moodVars ?? 0)?.['min']) {
    (s as any).pcs_mood = ((s as any).moodVars ?? 0)?.['min'];
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (Math.max(5, Math.min(20, ((s as any).pcs_mood ?? 0) - ((s as any).moodVars ?? {})?.['min'])));
  }
  return;
  scene.build();
}

function enterReset(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_mood = ((s as any).moodVars ?? 0)?.['disp'];
  return;
  scene.build();
}

function enterInterpret(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'max') {
    (s as any).result = 100 - ((s as any).pcs_mood ?? 0);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'min') {
      (s as any).result = ((s as any).pcs_mood ?? 0);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'huge') {
        (s as any).result = 40;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'large') {
          (s as any).result = 30;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'medium') {
            (s as any).result = 20;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'small') {
              (s as any).result = 10;
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'tiny') {
                (s as any).result = 5;
              } else {
                (s as any).result = qspUntranslated(s, "ARGS[1]", { location: "mood" });
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

function enterRaise(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_val = ((((s as any).locArgs?.[1] ?? 0) !== 0) ? (qspUntranslated(s, "ARGS[1]", { location: "mood" })) : (qspFunc(s, 'mood', 'interpret', ((s as any).locArgs?.[1] ?? 0))));
  (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (qspFunc(s, '_difficulty', 'get_multiplied', ((s as any).cheatVars ?? 0)?.['pos_mood_opt'], ((s as any).temp_val ?? 0), ((s as any).cheatVars ?? 0)?.['pos_mood_mult']));
  qspCall(s, 'mood', 'clamp');
  return;
  scene.build();
}

function enterLower(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_val = ((((s as any).locArgs?.[1] ?? 0) !== 0) ? (qspUntranslated(s, "ARGS[1]", { location: "mood" })) : (qspFunc(s, 'mood', 'interpret', ((s as any).locArgs?.[1] ?? 0))));
  (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) - (qspFunc(s, '_difficulty', 'get_multiplied', ((s as any).cheatVars ?? 0)?.['neg_mood_opt'], ((s as any).temp_val ?? 0), ((s as any).cheatVars ?? 0)?.['neg_mood_mult']));
  qspCall(s, 'mood', 'clamp');
  return;
  scene.build();
}

function enterDoormat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_mood_str ?? 0) !== '') {
    (s as any).temp_pipe = qspUntranslated(s, "instr(temp_mood_str, '|')", { location: "mood" });
    // TODO-QSP: gs 'mood', $mid($temp_mood_str, 1, temp_pipe - 1), $mid($temp_mood_str, temp_pipe + 1)
  }
  return;
  scene.build();
}

function enterRaiseTrauma(s: GameState, scene: SceneBuilder): void {
  (s as any).mood_trauma = ((s as any).mood_trauma ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "mood" }));
  qspCall(s, 'mood', 'clamp');
  return;
  scene.build();
}

function enterLowerTrauma(s: GameState, scene: SceneBuilder): void {
  (s as any).mood_trauma = ((s as any).mood_trauma ?? 0) - (qspUntranslated(s, "ARGS[1]", { location: "mood" }));
  qspCall(s, 'mood', 'clamp');
  return;
  scene.build();
}

function enterRaiseDisposition(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'max') {
    ((s as any).moodVars ?? {})['disp_base'] = 75;
  } else {
    (s as any).temp_val = ((((s as any).locArgs?.[1] ?? 0) !== 0) ? (qspUntranslated(s, "ARGS[1]", { location: "mood" })) : (qspFunc(s, 'mood', 'interpret', ((s as any).locArgs?.[1] ?? 0)) / 5));
  }
  ((s as any).moodVars ?? {})['disp_base'] = (((s as any).moodVars ?? {})['disp_base'] ?? 0) + (qspFunc(s, '_difficulty', 'get_multiplied', ((s as any).cheatVars ?? 0)?.['pos_mood_opt'], ((s as any).temp_val ?? 0), ((s as any).cheatVars ?? 0)?.['pos_mood_mult']));
  qspCall(s, 'mood', 'clamp');
  return;
  scene.build();
}

function enterLowerDisposition(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'min') {
    ((s as any).moodVars ?? {})['disp_base'] = 25;
  } else {
    (s as any).temp_val = ((((s as any).locArgs?.[1] ?? 0) !== 0) ? (qspUntranslated(s, "ARGS[1]", { location: "mood" })) : (qspFunc(s, 'mood', 'interpret', ((s as any).locArgs?.[1] ?? 0)) / 5));
  }
  ((s as any).moodVars ?? {})['disp_base'] = (((s as any).moodVars ?? {})['disp_base'] ?? 0) - (qspFunc(s, '_difficulty', 'get_multiplied', ((s as any).cheatVars ?? 0)?.['neg_mood_opt'], ((s as any).temp_val ?? 0), ((s as any).cheatVars ?? 0)?.['neg_mood_mult']));
  qspCall(s, 'mood', 'clamp');
  return;
  scene.build();
}

function enterHold(s: GameState, scene: SceneBuilder): void {
  ((s as any).moodVars ?? {})['hold_minut'] = qspUntranslated(s, "max(moodVars['hold_minut'], ARGS[1])", { location: "mood" });
  return;
  scene.build();
}

function enterStatusEffects(s: GameState, scene: SceneBuilder): void {
  ((s as any).moodSEValues ?? {})['gerpes'] = (-5);
  ((s as any).moodSEValues ?? {})['sifilis'] = (-5);
  ((s as any).moodSEValues ?? {})['triper'] = (-5);
  if (((s as any).locArgs?.[1] ?? 0) === 'add') {
    // TODO-QSP: moodSE[$ARGS[2]] += 1
    // TODO-QSP: gs 'mood', 'raise_disposition', moodSEValues[$ARGS[2]]
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'pop') {
      if (((s as any).moodSE ?? 0)[((s as any).locArgs?.[2] ?? 0)] === 0) {
        // TODO-QSP: "removed nonexistent mood base status effect <<$ARGS[2]>>. This is a bug, please report it"
      } else {
        // TODO-QSP: moodSE[$ARGS[2]] -= 1
        // TODO-QSP: gs 'mood', 'lower_disposition', moodSEValues[$ARGS[2]]
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'clear') {
        // TODO-QSP: gs 'mood', 'lower_disposition', (moodSEValues[$ARGS[2]] * moodSE[$ARGS[2]])
        // TODO-QSP: moodSE[$ARGS[2]] = 0
      }
    }
  }
  return;
  scene.build();
}

function enterDecay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).moodVars ?? 0)?.['hold_minut'] > 0) {
    ((s as any).moodVars ?? {})['hold_minut'] = (((s as any).moodVars ?? {})['hold_minut'] ?? 0) - (qspUntranslated(s, "min(15, moodVars['hold_minut'])", { location: "mood" }));
  } else {
    ((s as any).moodVars ?? {})['leftover_mood'] = (((s as any).moodVars ?? {})['leftover_mood'] ?? 0) + (((s as any).pcs_mood ?? 0) - ((s as any).moodVars ?? {})?.['disp']);
    // TODO-QSP: gs 'mood', 'lower', moodVars['leftover_mood'] / 15
    ((s as any).moodVars ?? {})['leftover_mood'] = ((s as any).moodVars ?? {})?.['leftover_mood'] % 15;
  }
  ((s as any).moodVars ?? {})['momentum'] = (((s as any).moodVars ?? {})['momentum'] ?? 0) + (((s as any).pcs_mood ?? 0) - ((s as any).moodVars ?? {})?.['disp']);
  if (((s as any).moodVars ?? 0)?.['momentum'] > 5000 + 50*(((s as any).moodVars ?? 0)?.['disp_base'] - 50)) {
    qspCall(s, 'mood', 'raise_disposition', 1);
    ((s as any).moodVars ?? {})['momentum'] = 0;
  } else {
    if (((s as any).moodVars ?? 0)?.['momentum'] < -4000 + 50*(((s as any).moodVars ?? 0)?.['disp_base'] - 50)) {
      qspCall(s, 'mood', 'lower_disposition', 1);
      ((s as any).moodVars ?? {})['momentum'] = 0;
    }
  }
  ((s as any).moodVars ?? {})['inertia'] = (((s as any).moodVars ?? {})['inertia'] ?? 0) + (((s as any).moodVars ?? {})?.['disp_base'] - 50);
  if (((s as any).moodVars ?? 0)?.['inertia'] > 3200 - 50*(((s as any).moodVars ?? 0)?.['disp_base'] - 50)) {
    qspCall(s, 'mood', 'lower_disposition', 1);
    ((s as any).moodVars ?? {})['inertia'] = 0;
  } else {
    if (((s as any).moodVars ?? 0)?.['inertia'] < -4000 - 50*(((s as any).moodVars ?? 0)?.['disp_base'] - 50)) {
      qspCall(s, 'mood', 'raise_disposition', 1);
      ((s as any).moodVars ?? {})['inertia'] = 0;
    }
  }
  return;
  scene.build();
}

function enterUpdate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'decay');
  qspCall(s, 'mood', 'clamp');
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'clamp':
      enterClamp(s, scene);
      break;
    case 'reset':
      enterReset(s, scene);
      break;
    case 'interpret':
      enterInterpret(s, scene);
      break;
    case 'raise':
      enterRaise(s, scene);
      break;
    case 'lower':
      enterLower(s, scene);
      break;
    case 'doormat':
      enterDoormat(s, scene);
      break;
    case 'raise_trauma':
      enterRaiseTrauma(s, scene);
      break;
    case 'lower_trauma':
      enterLowerTrauma(s, scene);
      break;
    case 'raise_disposition':
      enterRaiseDisposition(s, scene);
      break;
    case 'lower_disposition':
      enterLowerDisposition(s, scene);
      break;
    case 'hold':
      enterHold(s, scene);
      break;
    case 'status_effects':
      enterStatusEffects(s, scene);
      break;
    case 'decay':
      enterDecay(s, scene);
      break;
    case 'update':
      enterUpdate(s, scene);
      break;
    default:
      enterClamp(s, scene);
      break;
  }
}

export const mood: LocationDef = {
  name: 'mood',
  region: 'other',
  enter: enter,
};
