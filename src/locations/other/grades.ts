import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCreateclass(s: GameState, scene: SceneBuilder): void {
  (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_max'] = 10 * (((s as any).ARGS ?? 0)[3] * (1 + ((s as any).ARGS ?? 0)[4]) + ((s as any).ARGS ?? 0)[8]);
  if (((s as any).locArgs?.[6] ?? 0) === 'yes') {
    (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_max'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_max'] ?? 0) + (50);
  }
  if (((s as any).locArgs?.[5] ?? 0) === 'yes') {
    if (((s as any).locArgs?.[6] ?? 0) === 'yes') {
      (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_breakeven_point'] = ((s as any).min ?? 0)(10 * ((s as any).ARGS ?? 0)[3] + 25, 5 * ((s as any).ARGS ?? 0)[3] + 50);
    } else {
      (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_breakeven_point'] = 10 * ((s as any).ARGS ?? 0)[3];
    }
  } else {
    (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_breakeven_point'] = 50;
    (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_breakeven_point'] = 5 * ((s as any).ARGS ?? 0)[8];
  }
  (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_homework'] = ((((s as any).locArgs?.[6] ?? 0) === 'yes') ? (1) : (0));
  (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_max'] = 10 * ((s as any).ARGS ?? 0)[8];
  (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_use_computer'] = qspUntranslated(s, "ARGS[7]", { location: "grades" });
  (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_grade_cap'] = 100;
  (s as any).temp_grades_i = 0;
  // TODO-QSP: $class_list_institution[temp_grades_i] = $ARGS[1]
  // TODO-QSP: $class_list_name[temp_grades_i] = $ARGS[2]
  scene.build();
}

function enterGradeCap(s: GameState, scene: SceneBuilder): void {
  (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_grade_cap'] = qspUntranslated(s, "ARGS[3]", { location: "grades" });
  if (((s as any).class ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_' + String(((s as any).locArgs?.[2] ?? 0)) + '_grade'] > ((s as any).ARGS ?? 0)[3]) {
    (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_grade'] = qspUntranslated(s, "ARGS[3]", { location: "grades" });
  }
  scene.build();
}

function enterGradeCapRemoved(s: GameState, scene: SceneBuilder): void {
  (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_grade_cap'] = 100;
  scene.build();
}

function enterAttendClass(s: GameState, scene: SceneBuilder): void {
  (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_class_day_' + String((s as any).week || '') + ''] = 1;
  (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (10);
  scene.build();
}

function enterClassActivity(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_stam ?? 0) <= 0) {
    if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
      (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (5);
    } else {
      (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (5);
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
        (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (3);
      } else {
        (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (2);
        (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (1);
      }
      if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
          (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (9);
        } else {
          (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (8);
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
            (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (6);
          } else {
            (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (4);
            (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (2);
          }
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
            (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (10);
          } else {
            (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (9);
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
              (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (7);
            } else {
              (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (5);
              (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (2);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'createclass':
      enterCreateclass(s, scene);
      break;
    case 'grade_cap':
      enterGradeCap(s, scene);
      break;
    case 'grade_cap_removed':
      enterGradeCapRemoved(s, scene);
      break;
    case 'attend_class':
      enterAttendClass(s, scene);
      break;
    case 'class_activity':
      enterClassActivity(s, scene);
      break;
    default:
      enterCreateclass(s, scene);
      break;
  }
}

export const grades: LocationDef = {
  name: 'grades',
  region: 'other',
  enter: enter,
};
