import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterClamp(s: GameState, scene: SceneBuilder): void {
  (s as any).mood_trauma = qspFunc(s, 'math', 'int_clamp', ((s as any).mood_trauma ?? 0), 0, 15);
  if (((s as any).moodVars ?? 0)?.['disp_base'] === 0) {
    (s as any).moodVars['disp_base'] = 50;
  }
  (s as any).moodVars['max'] = 100;
  if (((s as any).gerpes ?? 0) >= 3) {
    (s as any).moodVars['max'] = ((s as any).moodVars['max'] ?? 0) - (5);
  }
  if (((s as any).sifilis ?? 0) >= 21) {
    (s as any).moodVars['max'] = ((s as any).moodVars['max'] ?? 0) - (5);
  }
  if (((s as any).triper ?? 0) > 2) {
    (s as any).moodVars['max'] = ((s as any).moodVars['max'] ?? 0) - (5);
  }
  (s as any).moodVars['max'] = ((s as any).moodVars['max'] ?? 0) - (((s as any).mood_trauma ?? 0) * 4);
  (s as any).moodVars['max'] = qspUntranslated(s, "max(40, moodVars['max'])", { location: "mood" });
  (s as any).moodVars['min'] = 1;
  (s as any).moodVars['disp_base'] = qspFunc(s, 'math', 'int_clamp', ((s as any).moodVars ?? 0)?.['disp_base'], 20, 70);
  (s as any).moodVars['disp'] = qspFunc(s, 'math', 'int_clamp', ((s as any).moodVars ?? 0)?.['disp_base'] + ((s as any).arch_effects ?? 0)?.['disposition_effect'], 20, 70);
  (s as any).pcs_mood = qspUntranslated(s, "min(moodVars['max'], pcs_mood)", { location: "mood" });
  if (((s as any).pcs_mood ?? 0) < ((s as any).moodVars ?? 0)?.['min']) {
    (s as any).pcs_mood = ((s as any).moodVars ?? 0)?.['min'];
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (((s as any).max ?? 0)(5, ((s as any).min ?? 0)(20, ((s as any).pcs_mood ?? 0) - ((s as any).moodVars ?? 0)?.['min'])));
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
    (s as any).result = ((s as any).pcs_mood ?? 0);
    if (((s as any).locArgs?.[1] ?? 0) === 'huge') {
      (s as any).result = 40;
    } else {
      (s as any).result = 30;
      if (((s as any).locArgs?.[1] ?? 0) === 'medium') {
        (s as any).result = 20;
      } else {
        (s as any).result = 10;
        if (((s as any).locArgs?.[1] ?? 0) === 'tiny') {
          (s as any).result = 5;
        } else {
          (s as any).result = qspUntranslated(s, "ARGS[1]", { location: "mood" });
        }
        return;
      }
      qspCall(s, 'mood', 'doormat', 'lower|medium', 'lower|small', 'lower|tiny', 'raise|tiny');
      // TODO-QSP: Applies a mood change scaled by doormat trait level (0–3).
      // TODO-QSP: All four arguments are mandatory: 'direction|degree' pairs for levels 0, 1, 2, 3.
      // TODO-QSP: Use '' to skip a level with no effect.
    }
  }
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
