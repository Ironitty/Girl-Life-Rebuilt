import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['semester_week'] === 0  &&  (((s as any).month ?? 0) === 8  ||  ((s as any).month ?? 0) === 1)  &&  (((s as any).day ?? 0) - ((s as any).week ?? 0)) >= 20) {
    (s as any).university['semester_week'] = (-1);
  } else {
    if (((s as any).week ?? 0) === 1) {
      if (((s as any).university ?? 0)?.['semester_week'] === -1) {
        (s as any).university['semester_week'] = 1;
      } else {
        (s as any).university['semester_week'] = ((s as any).university['semester_week'] ?? 0) + (1);
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
          qspCall(s, 'grades', 'calculate_grade', 'uni_<<$university[\'enrolled_in\']>>_semester_<<university[\'enrolled_in_semester\']>>');
          qspCall(s, 'grades', 'assign_grade_description', 'uni_<<$university[\'enrolled_in\']>>_semester_<<university[\'enrolled_in_semester\']>>');
        }
        if (((s as any).university ?? 0)?.['semester_week'] === 15) {
          (s as any).university['semester_week'] = 0;
          (s as any).university['exam_week'] = 1;
          if (((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
            qspCall(s, 'grades', 'calculate_grade', 'uni_<<$university[\'enrolled_in\']>>_semester_<<university[\'enrolled_in_semester\']>>');
            qspCall(s, 'grades', 'assign_grade_description', 'uni_<<$university[\'enrolled_in\']>>_semester_<<university[\'enrolled_in_semester\']>>');
          }
        } else {
          (s as any).university['exam_week'] = 2;
          if (((s as any).university ?? 0)?.['exam_week'] === 2) {
            (s as any).university['exam_week'] = 0;
            if (((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
              (s as any).i = 0;
              (s as any).passed_count = 0;
              (s as any).class_count = 0;
              // TODO-QSP: :passed_exams_loop
              if (((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] === 'uni_\'2\'_semester_\'3\'') {
                (s as any).class_count = ((s as any).class_count ?? 0) + (1);
                if ((0 as any) > 40  &&  (0 as any) === 1) {
                  (s as any).passed_count = ((s as any).passed_count ?? 0) + (1);
                } else {
                  // TODO-QSP: dynamic 'class[''<<$class_list_institution[i]>>_<<$class_list_name[i]>>_grade''] = 0'
                  (s as any).university['expelled_for_missing_exam'] = 1;
                }
              }
              (s as any).i = ((s as any).i ?? 0) + (1);
              if (Object.keys((s as any).class_list_institution ?? {}).length >= ((s as any).i ?? 0)) {
                // TODO-QSP: jump 'passed_exams_loop'
              }
              if (((s as any).passed_count ?? 0) === ((s as any).class_count ?? 0)) {
                (s as any).university['semester_passed'] = ((s as any).university ?? 0)?.['enrolled_in_semester'];
              } else {
                (s as any).university['expelled'] = 1;
                (s as any).university['student'] = 0;
              }
              if (((s as any).university ?? 0)?.['semester_passed'] === 8) {
                (s as any).university['diploma'] = 1;
                (s as any).university['student'] = 0;
              }
            }
          }
        }
      }
      if (((s as any).university ?? 0)?.['exam_week'] > 0  ||  ((s as any).university ?? 0)?.['semester_week'] > 0) {
        (s as any).university['break'] = 0;
      } else {
        (s as any).university['break'] = 1;
      }
      return;
    }
  }
  scene.build();
}

export const uni_lessons: LocationDef = {
  name: 'uni_lessons',
  title: 'Lecture Building Hallway',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
