import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCreateclass(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_max'] = 10 * (((s as any).ARGS ?? 0)[3] * (1 + ((s as any).ARGS ?? 0)[4]) + ((s as any).ARGS ?? 0)[8]);
  if (((s as any).locArgs?.[6] ?? 0) === 'yes') {
    if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_max'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_max'] ?? 0) + (50);
  }
  if (((s as any).locArgs?.[5] ?? 0) === 'yes') {
    if (((s as any).locArgs?.[6] ?? 0) === 'yes') {
      if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_breakeven_point'] = Math.min(10 * ((s as any).ARGS ?? 0)[3] + 25, 5 * ((s as any).ARGS ?? 0)[3] + 50);
    } else {
      if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_breakeven_point'] = 10 * ((s as any).ARGS ?? 0)[3];
    }
  } else {
    if (((s as any).locArgs?.[6] ?? 0) ==='yes') {
      if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_breakeven_point'] = 50;
    } else {
      if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain_breakeven_point'] = 5 * ((s as any).ARGS ?? 0)[8];
    }
  }
  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_homework'] = ((((s as any).locArgs?.[6] ?? 0) === 'yes') ? (1) : (0));
  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_max'] = 10 * ((s as any).ARGS ?? 0)[8];
  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_use_computer'] = qspUntranslated(s, "ARGS[7]", { location: "grades" });
  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_grade_cap'] = 100;
  (s as any).temp_grades_i = 0;
  // TODO-QSP: $class_list_institution[temp_grades_i] = $ARGS[1]
  // TODO-QSP: $class_list_name[temp_grades_i] = $ARGS[2]
  // TODO-QSP: end
  scene.build();
}

function enterGradeCap(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_grade_cap'] = qspUntranslated(s, "ARGS[3]", { location: "grades" });
  if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_grade'] > ((s as any).locArgs?.[3] ?? 0)) {
    if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_grade'] = qspUntranslated(s, "ARGS[3]", { location: "grades" });
  }
  // TODO-QSP: end
  scene.build();
}

function enterGradeCapRemoved(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_grade_cap'] = 100;
  // TODO-QSP: end
  scene.build();
}

function enterAttendClass(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_class_day_' + String((s as any).week || '') + ''] = 1;
  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (10);
  // TODO-QSP: end
  scene.build();
}

function enterClassActivity(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_stam ?? 0) <= 0) {
    if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
      if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (5);
    } else {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
        if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (5);
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (3);
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (2);
          } else {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (1);
          }
        }
      }
    }
  } else {
    if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
        if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (9);
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (8);
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (6);
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (4);
            } else {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (2);
            }
          }
        }
      }
    } else {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
        if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (10);
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (9);
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (7);
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (5);
            } else {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (2);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterClassActivitySkill(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_grades_mult_fact = ((((s as any).pcs_stam ?? 0) <= 0) ? (2) : (((((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) ? (3) : (4))));
  if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
    if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (10 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[3]) / 400);
  } else {
    if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
      if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (9 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[3]) / 400);
    } else {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
        if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (7 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[3]) / 400);
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (5 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[3]) / 400);
        } else {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (2 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[3]) / 400);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterClassActivityAttributes(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_grades_mult_fact = ((((s as any).pcs_stam ?? 0) <= 0) ? (2) : (((((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) ? (3) : (4))));
  if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
    if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (10 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[3]) / 400);
  } else {
    if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
      if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (9 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[3]) / 400);
    } else {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
        if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (7 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[3]) / 400);
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (5 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[3]) / 400);
        } else {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_weekly_grade_gain'] ?? 0) + (2 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[3]) / 400);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOptionalActivity(s: GameState, scene: SceneBuilder): void {
  if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_use_computer'] === 0  ||  ((s as any).locArgs?.[3] ?? 0) === 'yes') {
    if (((s as any).pcs_stam ?? 0) <= 0) {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
        if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (5);
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (4);
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (3);
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (2);
            } else {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (1);
            }
          }
        }
      }
    } else {
      if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (9);
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (8);
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (6);
            } else {
              if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
                if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (4);
              } else {
                if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (2);
              }
            }
          }
        }
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (10);
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (9);
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (7);
            } else {
              if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
                if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (5);
              } else {
                if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (2);
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_use_computer'] === 1) {
      if (((s as any).pcs_stam ?? 0) <= 0) {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (3);
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (2);
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (2);
            } else {
              if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
                if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (1);
              } else {
                if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (1);
              }
            }
          }
        }
      } else {
        if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (4);
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (3);
            } else {
              if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
                if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (2);
              } else {
                if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
                  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (2);
                } else {
                  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (1);
                }
              }
            }
          }
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (5);
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (4);
            } else {
              if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
                if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (3);
              } else {
                if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
                  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (2);
                } else {
                  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (1);
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_optional_weekly_grade_gain'] > ((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_optional_weekly_max']) {
    if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_' + String(((s as any).locArgs?.[2] ?? 0)) + '_optional_weekly_max'];
  }
  // TODO-QSP: end
  scene.build();
}

function enterOptionalActivitySkill(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_grades_mult_fact = ((((s as any).pcs_stam ?? 0) <= 0) ? (2) : (((((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) ? (3) : (4))));
  if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_use_computer'] === 0  ||  ((s as any).locArgs?.[3] ?? 0) === 'yes') {
    if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
      if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (10 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[4]) / 400);
    } else {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
        if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (9 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[4]) / 400);
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (7 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[4]) / 400);
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (5 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[4]) / 400);
          } else {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (2 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[4]) / 400);
          }
        }
      }
    }
  } else {
    if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_use_computer'] === 1) {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
        if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (5 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[4]) / 400);
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (4 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[4]) / 400);
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (3 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[4]) / 400);
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (2 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[4]) / 400);
            } else {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (1 * ((s as any).temp_grades_mult_fact ?? 0) * (85 + ((s as any).ARGS ?? 0)[4]) / 400);
            }
          }
        }
      }
    }
  }
  if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_optional_weekly_grade_gain'] > ((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_optional_weekly_max']) {
    if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_' + String(((s as any).locArgs?.[2] ?? 0)) + '_optional_weekly_max'];
  }
  // TODO-QSP: end
  scene.build();
}

function enterOptionalActivityAttribute(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_grades_mult_fact = ((((s as any).pcs_stam ?? 0) <= 0) ? (2) : (((((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) ? (3) : (4))));
  if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_use_computer'] === 0  ||  ((s as any).locArgs?.[3] ?? 0) === 'yes') {
    if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
      if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (10 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[4]) / 400);
    } else {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
        if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (9 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[4]) / 400);
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (7 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[4]) / 400);
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (5 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[4]) / 400);
          } else {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (2 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[4]) / 400);
          }
        }
      }
    }
  } else {
    if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_use_computer'] === 1) {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
        if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (5 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[4]) / 400);
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (4 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[4]) / 400);
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (3 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[4]) / 400);
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (2 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[4]) / 400);
            } else {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] ?? 0) + (1 * ((s as any).temp_grades_mult_fact ?? 0) * (50 + ((s as any).ARGS ?? 0)[4]) / 400);
            }
          }
        }
      }
    }
  }
  if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_optional_weekly_grade_gain'] > ((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_optional_weekly_max']) {
    if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_optional_weekly_grade_gain'] = ((s as any).class ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_' + String(((s as any).locArgs?.[2] ?? 0)) + '_optional_weekly_max'];
  }
  // TODO-QSP: end
  scene.build();
}

function enterHomework(s: GameState, scene: SceneBuilder): void {
  (s as any).lernHome = ((s as any).lernHome ?? 0) - (qspUntranslated(s, "ARGS[3]", { location: "grades" }));
  (s as any).temp_grades_mult_fact = ((((s as any).pcs_stam ?? 0) <= 0) ? (2) : (((((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) ? (3) : (4))));
  if (((s as any).locArgs?.[4] ?? 0) === 2) {
    (s as any).temp_grades_modifier = 0;
  } else {
    if (((s as any).locArgs?.[4] ?? 0) === 1) {
      (s as any).temp_grades_modifier = Math.max(qspUntranslated(s, "npc_intel[\u00000\u0000]", { location: "grades" }), ((s as any).pcs_intel ?? 0)) + Math.max(10 + Math.min(((s as any).npc_intel ?? 0)[((s as any).locArgs?.[5] ?? 0)] - ((s as any).pcs_intel ?? 0), ((s as any).pcs_intel ?? 0) - ((s as any).npc_intel ?? 0)[((s as any).locArgs?.[5] ?? 0)]), 0) * (100 - Math.max(qspUntranslated(s, "npc_intel[\u00003\u0000]", { location: "grades" }), ((s as any).pcs_intel ?? 0))) / 50;
    } else {
      if (((s as any).locArgs?.[4] ?? 0) === 3) {
        (s as any).temp_grades_modifier = qspUntranslated(s, "ARGS[5]", { location: "grades" });
      } else {
        (s as any).temp_grades_modifier = ((s as any).pcs_intel ?? 0);
      }
    }
  }
  (s as any).temp_grades_i = 0;
  // TODO-QSP: :homework_loop
  if (((s as any).class_list_institution ?? 0)?.[String((s as any).temp_grades_i ?? 0)] === ((s as any).locArgs?.[1] ?? 0)) {
    if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).temp_grades_i ?? 0)] + '_homework'] === 1) {
      if (((s as any).locArgs?.[2] ?? 0) === '!') {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
          // TODO-QSP: class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_weekly_grade_gain'] += 5 * temp_grades_mult_fact * ARGS[3] * (2 - class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_use_computer']) * (50 + temp_grades_modifier) / 400
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
            // TODO-QSP: class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_weekly_grade_gain'] += 4 * temp_grades_mult_fact * ARGS[3] * (2 - class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_use_computer']) * (50 + temp_grades_modifier) / 400
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
              // TODO-QSP: class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_weekly_grade_gain'] += 3 * temp_grades_mult_fact * ARGS[3] * (2 - class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_use_computer']) * (50 + temp_grades_modifier) / 400
            } else {
              if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
                // TODO-QSP: class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_weekly_grade_gain'] += 2 * temp_grades_mult_fact * ARGS[3] * (2 - class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_use_computer']) * (50 + temp_grades_modifier) / 400
              } else {
                // TODO-QSP: class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_weekly_grade_gain'] += 1 * temp_grades_mult_fact * ARGS[3] * (2 - class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_use_computer']) * (50 + temp_grades_modifier) / 400
              }
            }
          }
        }
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 2) {
          if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_weekly_grade_gain'] ?? 0) + (10 * ((s as any).temp_grades_mult_fact ?? 0) * ((s as any).ARGS ?? 0)[3] * (50 + ((s as any).temp_grades_modifier ?? 0)) / 400);
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 5) {
            if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_weekly_grade_gain'] ?? 0) + (9 * ((s as any).temp_grades_mult_fact ?? 0) * ((s as any).ARGS ?? 0)[3] * (50 + ((s as any).temp_grades_modifier ?? 0)) / 400);
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 10) {
              if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_weekly_grade_gain'] ?? 0) + (7 * ((s as any).temp_grades_mult_fact ?? 0) * ((s as any).ARGS ?? 0)[3] * (50 + ((s as any).temp_grades_modifier ?? 0)) / 400);
            } else {
              if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] < 20) {
                if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_weekly_grade_gain'] ?? 0) + (5 * ((s as any).temp_grades_mult_fact ?? 0) * ((s as any).ARGS ?? 0)[3] * (50 + ((s as any).temp_grades_modifier ?? 0)) / 400);
              } else {
                if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_weekly_grade_gain'] ?? 0) + (2 * ((s as any).temp_grades_mult_fact ?? 0) * ((s as any).ARGS ?? 0)[3] * (50 + ((s as any).temp_grades_modifier ?? 0)) / 400);
              }
            }
          }
        }
      }
    }
  }
  (s as any).temp_grades_i = ((s as any).temp_grades_i ?? 0) + (1);
  if (((s as any).temp_grades_i ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
    // TODO-QSP: jump 'homework_loop'
  }
  // TODO-QSP: end
  scene.build();
}

function enterGradeAward(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_grade'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_grade'] ?? 0) + (qspUntranslated(s, "ARGS[3]", { location: "grades" }));
  if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_grade'] < 0) {
    if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_grade'] = 0;
  } else {
    if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_grade'] > ((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_grade_cap']) {
      if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$ARGS[2] || '') + '_grade'] = ((s as any).class ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_' + String(((s as any).locArgs?.[2] ?? 0)) + '_grade_cap'];
    }
  }
  (s as any).temp_grades_sum = 0;
  (s as any).temp_grades_n = 0;
  (s as any).temp_grades_i = 0;
  // TODO-QSP: :grade_loop
  if (((s as any).class_list_institution ?? 0)?.[String((s as any).temp_grades_i ?? 0)] === ((s as any).locArgs?.[1] ?? 0)) {
    (s as any).temp_grades_sum = ((s as any).temp_grades_sum ?? 0) + (((s as any).class ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_' + String(((s as any).class_list_name ?? 0)?.[String((s as any).temp_grades_i ?? 0)]) + '_grade']);
    (s as any).temp_grades_n = ((s as any).temp_grades_n ?? 0) + (1);
  }
  (s as any).temp_grades_i = ((s as any).temp_grades_i ?? 0) + (1);
  if (((s as any).temp_grades_i ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
    // TODO-QSP: jump 'grade_loop'
  }
  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_grade_average'] = ((s as any).temp_grades_sum ?? 0) / Math.max(1, ((s as any).temp_grades_n ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterCalculateGrade(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_grades_sum = 0;
  (s as any).temp_grades_n = 0;
  (s as any).temp_grades_i = 0;
  // TODO-QSP: :grade_loop1
  if (((s as any).class_list_institution ?? 0)?.[String((s as any).temp_grades_i ?? 0)] === ((s as any).locArgs?.[1] ?? 0)) {
    if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_weekly_grade_gain'] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_weekly_grade_gain'] ?? 0) + (((s as any).class ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_' + String(((s as any).class_list_name ?? 0)?.[String((s as any).temp_grades_i ?? 0)]) + '_optional_weekly_grade_gain']);
    if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_optional_weekly_grade_gain'] = 0;
    if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).temp_grades_i ?? 0)] + '_weekly_grade_gain'] < ((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).temp_grades_i ?? 0)] + '_weekly_grade_gain_breakeven_point']) {
      // TODO-QSP: class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_grade'] -= (5 - 5 * class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_weekly_grade_gain'] / class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_weekly_grade_gain_breakeven_point'])
    } else {
      // TODO-QSP: class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_grade'] += 3 * (class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_weekly_grade_gain'] - class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_weekly_grade_gain_breakeven_point']) / (class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_weekly_grade_gain_max'] - class['<<$ARGS[1]>>_<<$class_list_name[temp_grades_i]>>_weekly_grade_gain_breakeven_point'])
    }
    if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).temp_grades_i ?? 0)] + '_grade'] > ((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).temp_grades_i ?? 0)] + '_grade_cap']) {
      if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_grade'] = ((s as any).class ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_' + String(((s as any).class_list_name ?? 0)?.[String((s as any).temp_grades_i ?? 0)]) + '_grade_cap'];
    }
    (s as any).temp_grades_sum = ((s as any).temp_grades_sum ?? 0) + (((s as any).class ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_' + String(((s as any).class_list_name ?? 0)?.[String((s as any).temp_grades_i ?? 0)]) + '_grade']);
    (s as any).temp_grades_n = ((s as any).temp_grades_n ?? 0) + (1);
    if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).$class_list_name[temp_grades_i] || '') + '_weekly_grade_gain'] = 0;
  }
  (s as any).temp_grades_i = ((s as any).temp_grades_i ?? 0) + (1);
  if (((s as any).temp_grades_i ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
    // TODO-QSP: jump 'grade_loop1'
  }
  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_grade_average'] = ((s as any).temp_grades_sum ?? 0) / Math.max(1, ((s as any).temp_grades_n ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterAssignGradeDescription(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_grades_i = 0;
  // TODO-QSP: :assign_grade_loop
  if (((s as any).class_list_institution ?? 0)?.[String((s as any).temp_grades_i ?? 0)] === ((s as any).locArgs?.[1] ?? 0)) {
    if (((s as any).class ?? 0)?.[String((s as any).temp_var_name ?? 0)] < 10) {
      // TODO-QSP: $class_grade_desc[$temp_var_name] = '1'
    } else {
      if (((s as any).class ?? 0)?.[String((s as any).temp_var_name ?? 0)] < 20) {
        // TODO-QSP: $class_grade_desc[$temp_var_name] = '2-'
      } else {
        if (((s as any).class ?? 0)?.[String((s as any).temp_var_name ?? 0)] < 35) {
          // TODO-QSP: $class_grade_desc[$temp_var_name] = '2'
        } else {
          if (((s as any).class ?? 0)?.[String((s as any).temp_var_name ?? 0)] < 40) {
            // TODO-QSP: $class_grade_desc[$temp_var_name] = '2+'
          } else {
            if (((s as any).class ?? 0)?.[String((s as any).temp_var_name ?? 0)] < 50) {
              // TODO-QSP: $class_grade_desc[$temp_var_name] = '3-'
            } else {
              if (((s as any).class ?? 0)?.[String((s as any).temp_var_name ?? 0)] < 65) {
                // TODO-QSP: $class_grade_desc[$temp_var_name] = '3'
              } else {
                if (((s as any).class ?? 0)?.[String((s as any).temp_var_name ?? 0)] < 70) {
                  // TODO-QSP: $class_grade_desc[$temp_var_name] = '3+'
                } else {
                  if (((s as any).class ?? 0)?.[String((s as any).temp_var_name ?? 0)] < 75) {
                    // TODO-QSP: $class_grade_desc[$temp_var_name] = '4-'
                  } else {
                    if (((s as any).class ?? 0)?.[String((s as any).temp_var_name ?? 0)] < 86) {
                      // TODO-QSP: $class_grade_desc[$temp_var_name] = '4'
                    } else {
                      if (((s as any).class ?? 0)?.[String((s as any).temp_var_name ?? 0)] < 90) {
                        // TODO-QSP: $class_grade_desc[$temp_var_name] = '4+'
                      } else {
                        if (((s as any).class ?? 0)?.[String((s as any).temp_var_name ?? 0)] < 92) {
                          // TODO-QSP: $class_grade_desc[$temp_var_name] = '5-'
                        } else {
                          if (((s as any).class ?? 0)?.[String((s as any).temp_var_name ?? 0)] < 97) {
                            // TODO-QSP: $class_grade_desc[$temp_var_name] = '5'
                          } else {
                            // TODO-QSP: $class_grade_desc[$temp_var_name] = '5+'
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
    }
  }
  (s as any).temp_grades_i = ((s as any).temp_grades_i ?? 0) + (1);
  if (((s as any).temp_grades_i ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
    // TODO-QSP: jump 'assign_grade_loop'
  }
  // TODO-QSP: end
  scene.build();
}

function enterGradeAbove(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_grades_above_' + String((s as any).ARGS[2] || '') + ''] = 0;
  (s as any).temp_grades_i = 0;
  // TODO-QSP: :grade_above_loop
  if (((s as any).class_list_institution ?? 0)?.[String((s as any).temp_grades_i ?? 0)] === ((s as any).locArgs?.[1] ?? 0)) {
    if (((s as any).class ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).temp_grades_i ?? 0)] + '_grade'] >= ((s as any).locArgs?.[2] ?? 0)) {
      if (!(s as any).class) (s as any).class = {}; (s as any).class['' + String((s as any).$ARGS[1] || '') + '_grades_above_' + String((s as any).ARGS[2] || '') + ''] = ((s as any).class['' + String((s as any).$ARGS[1] || '') + '_grades_above_' + String((s as any).ARGS[2] || '') + ''] ?? 0) + (1);
    }
  }
  (s as any).temp_grades_i = ((s as any).temp_grades_i ?? 0) + (1);
  if (((s as any).temp_grades_i ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
    // TODO-QSP: jump 'grade_above_loop'
  }
  // TODO-QSP: end
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
    case 'class_activity_skill':
      enterClassActivitySkill(s, scene);
      break;
    case 'class_activity_attributes':
      enterClassActivityAttributes(s, scene);
      break;
    case 'optional_activity':
      enterOptionalActivity(s, scene);
      break;
    case 'optional_activity_skill':
      enterOptionalActivitySkill(s, scene);
      break;
    case 'optional_activity_attribute':
      enterOptionalActivityAttribute(s, scene);
      break;
    case 'homework':
      enterHomework(s, scene);
      break;
    case 'grade_award':
      enterGradeAward(s, scene);
      break;
    case 'calculate_grade':
      enterCalculateGrade(s, scene);
      break;
    case 'assign_grade_description':
      enterAssignGradeDescription(s, scene);
      break;
    case 'grade above':
      enterGradeAbove(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const grades: LocationDef = {
  name: 'grades',
  region: 'other',
  enter: enter,
};
