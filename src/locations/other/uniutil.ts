import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEligibleForUniversity(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'uniutil', 'student', 'status') === 0  &&  qspFunc(s, 'uniutil', 'diploma', 'obtained') === 0  &&  (((s as any).age ?? 0) >= 17  ||  ((s as any).fakepassport ?? 0) === 1);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPrepclass(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'cost') {
    (s as any).result = 15000;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'enroll') {
    qspCall(s, 'money', 'pay', qspFunc(s, 'uniutil', 'prepclass', 'cost'));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_enrolled', 1]; enterPrepclass(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_count', 0]; enterPrepclass(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'unenroll') {
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'offered_this_month') {
    (s as any).result = ((s as any).month ?? 0) <= qspFunc(s, 'uniutil', 'entrance_exam', 'month');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'offered_today') {
    (s as any).result = qspFunc(s, 'uniutil', 'entrance_exam', 'offered_this_month')  &&  ((s as any).week ?? 0) < 6;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckSemesterVsDate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).year ?? 0) > qspFunc(s, 'uniutil', 'semester', 'get_year') + 1) {
    (s as any).result = (-1);
    return;
  }
  (s as any).unilect_sm = qspFunc(s, 'uniutil', 'lecture', 'start_month', qspFunc(s, 'uniutil', 'semester', 'get'));
  (s as any).uniexam_m = qspFunc(s, 'uniutil', 'exam', 'month', qspFunc(s, 'uniutil', 'semester', 'get'));
  (s as any).uniexam_mns = qspFunc(s, 'uniutil', 'exam', 'month', qspFunc(s, 'uniutil', 'semester', 'next'));
  if (((s as any).year ?? 0) === qspFunc(s, 'uniutil', 'semester', 'get_year') + 1) {
    if (((s as any).month ?? 0) > ((s as any).uniexam_m ?? 0) % 12  &&  qspFunc(s, 'uniutil', 'semester_passed')  &&  ((s as any).month ?? 0) <= ((s as any).uniexam_mns ?? 0)) {
      (s as any).result = 1;
    } else {
      if (((s as any).month ?? 0) <= ((s as any).uniexam_m ?? 0)) {
        (s as any).result = 0;
      } else {
        (s as any).result = (-1);
      }
    }
  } else {
    if (((s as any).unilect_sm ?? 0) > ((s as any).uniexam_m ?? 0)  ||  ((s as any).month ?? 0) <= ((s as any).uniexam_m ?? 0)) {
      (s as any).result = 0;
    } else {
      if (qspFunc(s, 'uniutil', 'semester_result', 'is_passed')  &&  (((s as any).uniexam_m ?? 0) > ((s as any).uniexam_mns ?? 0)  ||  ((s as any).month ?? 0) <= ((s as any).uniexam_mns ?? 0))) {
        (s as any).result = 1;
      } else {
        (s as any).result = (-1);
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStudent(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'status') {
    if (((s as any).student ?? 0) > 0) {
      (s as any).uni_semvdateres = qspFunc(s, 'uniutil', 'check_semester_vs_date');
      if (((s as any).uni_semvdateres ?? 0) < 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'expel']; enterStudent(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).uni_semvdateres ?? 0) > 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'update']; enterSemester(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'update_year']; enterSemester(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterSemesterResult(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'update']; enterPassedSemesters(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'update_year']; enterSemester(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
    (s as any).result = ((s as any).student ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_status') {
    (s as any).student = ((s as any).locArgs?.[2] ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'enroll') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'unenroll']; enterPrepclass(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_status', 1]; enterStudent(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', 1]; enterSemester(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'update_year']; enterSemester(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterScholarship(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterAttendance(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterAssignmentProgress(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterAssignmentsDone(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterSemesterResult(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'unenroll') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'unenroll']; enterPrepclass(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).student ?? 0) > 0) {
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'expel') {
    qspCall(s, 'archetypes', 'gain', 'punk', 'medium', 'Expelled from university');
    if (qspFunc(s, 'uniutil', 'semester_result', 'is_failed')) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'unenroll']; enterStudent(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_status', (-1)]; enterStudent(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (qspFunc(s, 'uniutil', 'check_semester_vs_date') < 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'unenroll']; enterStudent(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_status', (-2)]; enterStudent(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'unenroll']; enterStudent(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_status', (-3)]; enterStudent(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'graduate') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'unenroll']; enterStudent(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_obtained']; enterDiploma(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'expelled_for_failing') {
    (s as any).result = qspFunc(s, 'uniutil', 'student', 'status') === -1;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'expelled_for_skipping') {
    (s as any).result = qspFunc(s, 'uniutil', 'student', 'status') === -2;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'expelled_for_other_reason') {
    (s as any).result = qspFunc(s, 'uniutil', 'student', 'status') === -3;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'enrolled') {
    (s as any).result = qspUntranslated(s, "func('uniutil', 'student', 'status') > 0", { location: "uniutil" });
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'not_enrolled') {
    (s as any).result = qspFunc(s, 'uniutil', 'student', 'enrolled') === 0;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'semesters_to_graduate') {
    (s as any).result = 2;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDiploma(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'get') {
    (s as any).result = ((s as any).university ?? 0)?.['diploma'];
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set') {
    ((s as any).university = (s as any).university ?? {})['diploma'] = ((s as any).locArgs?.[2] ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_obtained') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', 1]; enterDiploma(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (qspFunc(s, 'uniutil', 'fake_diploma', 'aware_needed')) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterFakeDiploma(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_unobtained') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', 0]; enterDiploma(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (qspFunc(s, 'uniutil', 'fake_diploma', 'aware_needed')) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterFakeDiploma(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'obtained') {
    (s as any).result = qspUntranslated(s, "func('uniutil', 'diploma', 'get') > 0", { location: "uniutil" });
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFakeDiploma(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'get') {
    (s as any).result = ((s as any).university ?? 0)?.['fakediplom'];
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set') {
    ((s as any).university = (s as any).university ?? {})['fakediplom'] = ((s as any).locArgs?.[2] ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_aware_needed') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', 2]; enterFakeDiploma(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_obtained') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', 1]; enterFakeDiploma(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'reset') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', 0]; enterFakeDiploma(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'aware_needed') {
    (s as any).result = qspFunc(s, 'uniutil', 'fake_diploma', 'get') === 2;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'obtained') {
    (s as any).result = qspFunc(s, 'uniutil', 'fake_diploma', 'get') === 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAppearToHaveGraduated(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'uniutil', 'diploma', 'obtained')  ||  qspFunc(s, 'uniutil', 'fake_diploma', 'obtained');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAttendance(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'get') {
    (s as any).result = ((s as any).unisemestrstats ?? 0)?.['lectures_attendad'];
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set') {
    ((s as any).unisemestrstats = (s as any).unisemestrstats ?? {})['lectures_attendad'] = ((s as any).locArgs?.[2] ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'update') {
    // TODO-QSP: gs 'uniutil', 'attendance', 'set', func('uniutil', 'attendance', 'get') + 1
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'reset') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', 0]; enterAttendance(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'is_great') {
    (s as any).result = qspUntranslated(s, "func('uniutil', 'attendance', 'get') > 55", { location: "uniutil" });
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'is_ok') {
    (s as any).result = qspUntranslated(s, "func('uniutil', 'attendance', 'get') > 40", { location: "uniutil" });
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'is_bad') {
    (s as any).result = qspFunc(s, 'uniutil', 'attendance', 'is_ok') === 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAssignmentProgress(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'get') {
    (s as any).result = ((s as any).unisemestrstats ?? 0)?.['assignment_progress'];
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set') {
    ((s as any).unisemestrstats = (s as any).unisemestrstats ?? {})['assignment_progress'] = ((String((s as any).locArgs?.[2] ?? '') <= 100) ? (((s as any).locArgs?.[2] ?? 0)) : (100));
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'update') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', qspFunc(s, 'uniutil', 'assignment_progress', 'get') + (Math.floor(Math.random() * (((s as any).pcs_intel ?? 0) / 10 - ((s as any).pcs_intel ?? 0) / 20 + 1)) + (((s as any).pcs_intel ?? 0) / 20))]; enterAssignmentProgress(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'reset') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', 0]; enterAssignmentProgress(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'is_finished') {
    (s as any).result = qspFunc(s, 'uniutil', 'assignment_progress', 'get') >= 100;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'is_not_finished') {
    (s as any).result = qspFunc(s, 'uniutil', 'assignment_progress', 'is_finished') === 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAssignmentsDone(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'get') {
    (s as any).result = ((s as any).unisemestrstats ?? 0)?.['assignments_done'];
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set') {
    ((s as any).unisemestrstats = (s as any).unisemestrstats ?? {})['assignments_done'] = ((s as any).locArgs?.[2] ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'update') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterAssignmentProgress(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: gs 'uniutil', 'assignments_done', 'set', func('uniutil', 'assignments_done', 'get') + 1
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'reset') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', 0]; enterAssignmentsDone(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'great_num') {
    (s as any).result = 11;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'min_num') {
    (s as any).result = 1;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'did_great_num') {
    (s as any).result = qspFunc(s, 'uniutil', 'assignments_done', 'get') >= qspFunc(s, 'uniutil', 'assignments_done', 'great_num');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'did_min_num') {
    (s as any).result = qspFunc(s, 'uniutil', 'assignments_done', 'get') >= qspFunc(s, 'uniutil', 'assignments_done', 'min_num');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterScholarship(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'get') {
    (s as any).result = ((s as any).unisemestrstats ?? 0)?.['scholarship'];
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set') {
    ((s as any).unisemestrstats = (s as any).unisemestrstats ?? {})['scholarship'] = ((s as any).locArgs?.[2] ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'reset') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', 0]; enterScholarship(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'is_active') {
    (s as any).result = ((s as any).unisemestrstats ?? 0)?.['scholarship'] > 0  &&  qspFunc(s, 'uniutil', 'semester', 'is_active');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'honors_value') {
    (s as any).result = 1200;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterLecture(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'start_hour') {
    (s as any).result = 8;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'length') {
    (s as any).result = 6;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'start_month') {
    if (String((s as any).locArgs?.[2] ?? '') === 1) {
      (s as any).result = 9;
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 2) {
        (s as any).result = 2;
      } else {
        (s as any).result = 13;
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'end_month') {
    if (String((s as any).locArgs?.[2] ?? '') === 1) {
      (s as any).result = 11;
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 2) {
        (s as any).result = 4;
      } else {
        (s as any).result = 0;
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'offered_this_month') {
    (s as any).unilect_sm = qspFunc(s, 'uniutil', 'lecture', 'start_month', qspFunc(s, 'uniutil', 'semester', 'get'));
    (s as any).unilect_em = qspFunc(s, 'uniutil', 'lecture', 'end_month', qspFunc(s, 'uniutil', 'semester', 'get'));
    if (((s as any).unilect_sm ?? 0) <= ((s as any).unilect_em ?? 0)) {
      (s as any).result = ((s as any).month ?? 0) >= ((s as any).unilect_sm ?? 0)  &&  ((s as any).month ?? 0) <= ((s as any).unilect_em ?? 0);
    } else {
      (s as any).result = ((s as any).month ?? 0) >= ((s as any).unilect_sm ?? 0)  ||  ((s as any).month ?? 0) <= ((s as any).unilect_em ?? 0);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'offered_today') {
    (s as any).result = qspFunc(s, 'uniutil', 'lecture', 'offered_this_month')  &&  ((s as any).week ?? 0) < 6;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'in_session') {
    (s as any).result = qspFunc(s, 'uniutil', 'lecture', 'offered_today')  &&  ((s as any).hour ?? 0) < qspFunc(s, 'uniutil', 'lecture', 'start_hour');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'print_start_month') {
    (s as any).result = qspUntranslated(s, "monthName[func('uniutil', 'lecture', 'start_month', ARGS[2])]", { location: "uniutil" });
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'print_months') {
    (s as any).unilect_idx = qspFunc(s, 'uniutil', 'lecture', 'start_month', ((s as any).locArgs?.[2] ?? 0));
    (s as any).unilect_end = qspFunc(s, 'uniutil', 'lecture', 'end_month', ((s as any).locArgs?.[2] ?? 0));
    // TODO-QSP: :lectureprintmonthsloop
    // TODO-QSP: $result += $monthName[unilect_idx]
    if (((s as any).unilect_idx ?? 0) !== ((s as any).unilect_end ?? 0)) {
      // TODO-QSP: $result += ', '
      (s as any).unilect_idx = (((s as any).unilect_idx ?? 0) % 12) + 1;
      // TODO-QSP: jump 'lectureprintmonthsloop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterExam(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'month') {
    if (String((s as any).locArgs?.[2] ?? '') === 1) {
      (s as any).result = 12;
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 2) {
        (s as any).result = 5;
      } else {
        (s as any).result = 0;
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'offered_this_month') {
    (s as any).result = qspUntranslated(s, "month = func('uniutil', 'exam', 'month', func('uniutil', 'semester', 'get'))", { location: "uniutil" });
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'offered_today') {
    (s as any).result = qspFunc(s, 'uniutil', 'exam', 'offered_this_month')  &&  ((s as any).week ?? 0) < 6;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'print_month') {
    (s as any).result = qspUntranslated(s, "monthName[func('uniutil', 'exam', 'month', ARGS[2])]", { location: "uniutil" });
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSemester(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'get') {
    (s as any).result = ((s as any).unisemestrstats ?? 0)?.['num'];
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set') {
    ((s as any).unisemestrstats = (s as any).unisemestrstats ?? {})['num'] = ((s as any).locArgs?.[2] ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'next') {
    (s as any).result = (qspFunc(s, 'uniutil', 'semester', 'get') % qspFunc(s, 'uniutil', 'semester', 'total')) + 1;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'total') {
    (s as any).result = 2;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'update') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', qspFunc(s, 'uniutil', 'semester', 'next')]; enterSemester(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'get_year') {
    (s as any).result = ((s as any).unisemestrstats ?? 0)?.['year'];
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'update_year') {
    ((s as any).unisemestrstats = (s as any).unisemestrstats ?? {})['year'] = ((s as any).year ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'is_active') {
    (s as any).result = qspFunc(s, 'uniutil', 'lecture', 'offered_this_month')  ||  qspFunc(s, 'uniutil', 'exam', 'offered_this_month');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'print_months') {
    (s as any).result = 'Semester ' + ((s as any).locArgs?.[2] ?? 0) + ' lectures: ' + qspFunc(s, 'uniutil', 'lecture', 'print_months', ((s as any).locArgs?.[2] ?? 0)) + '.<br>';
    // TODO-QSP: $result += 'Semester ' + ARGS[2] + ' exams: ' + func('uniutil', 'exam', 'print_month', ARGS[2]) + '....
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'print_all_months') {
    (s as any).unisemester_idx = 1;
    // TODO-QSP: :semesterprintmonthsloop
    // TODO-QSP: $result += func('uniutil', 'semester', 'print_months', unisemester_idx)
    if (((s as any).unisemester_idx ?? 0) < qspFunc(s, 'uniutil', 'semester', 'total')) {
      (s as any).unisemester_idx = ((s as any).unisemester_idx ?? 0) + (1);
      // TODO-QSP: jump 'semesterprintmonthsloop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSemesterResult(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'get') {
    (s as any).result = ((s as any).unisemestrstats ?? 0)?.['is_passed'];
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set') {
    ((s as any).unisemestrstats = (s as any).unisemestrstats ?? {})['is_passed'] = ((s as any).locArgs?.[2] ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_passed') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', 1]; enterSemesterResult(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_failed') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', (-1)]; enterSemesterResult(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'reset') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', 0]; enterSemesterResult(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'is_passed') {
    (s as any).result = qspUntranslated(s, "func('uniutil', 'semester_result', 'get') > 0", { location: "uniutil" });
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'is_failed') {
    (s as any).result = qspUntranslated(s, "func('uniutil', 'semester_result', 'get') < 0", { location: "uniutil" });
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterExamOutcome(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterAssignmentProgress(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterAssignmentsDone(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterAttendance(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (String((s as any).locArgs?.[1] ?? '') === 'passed_honors') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_passed']; enterSemesterResult(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', qspFunc(s, 'uniutil', 'scholarship', 'honors_value')]; enterScholarship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'passed') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_passed']; enterSemesterResult(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterScholarship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_failed']; enterSemesterResult(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset']; enterScholarship(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPassedSemesters(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'get') {
    (s as any).result = (((s as any).unisemestrstats ?? {})?.['prev_passed_count'] ?? 0) + ((qspFunc(s, 'uniutil', 'semester_result', 'is_passed')) ? (1) : (0));
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set') {
    ((s as any).unisemestrstats = (s as any).unisemestrstats ?? {})['prev_passed_count'] = ((s as any).locArgs?.[2] ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'update') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set', qspFunc(s, 'uniutil', 'passed_semesters', 'get')]; enterPassedSemesters(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'eligible_for_university':
      enterEligibleForUniversity(s, scene);
      break;
    case 'prepclass':
      enterPrepclass(s, scene);
      break;
    case 'check_semester_vs_date':
      enterCheckSemesterVsDate(s, scene);
      break;
    case 'student':
      enterStudent(s, scene);
      break;
    case 'diploma':
      enterDiploma(s, scene);
      break;
    case 'fake_diploma':
      enterFakeDiploma(s, scene);
      break;
    case 'appear_to_have_graduated':
      enterAppearToHaveGraduated(s, scene);
      break;
    case 'attendance':
      enterAttendance(s, scene);
      break;
    case 'assignment_progress':
      enterAssignmentProgress(s, scene);
      break;
    case 'assignments_done':
      enterAssignmentsDone(s, scene);
      break;
    case 'scholarship':
      enterScholarship(s, scene);
      break;
    case 'lecture':
      enterLecture(s, scene);
      break;
    case 'exam':
      enterExam(s, scene);
      break;
    case 'semester':
      enterSemester(s, scene);
      break;
    case 'semester_result':
      enterSemesterResult(s, scene);
      break;
    case 'exam_outcome':
      enterExamOutcome(s, scene);
      break;
    case 'passed_semesters':
      enterPassedSemesters(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uniutil: LocationDef = {
  name: 'uniutil',
  region: 'other',
  enter: enter,
};
