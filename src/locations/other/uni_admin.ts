import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_admin', 'start');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/city/island/university/admin/uni_admin.jpg');
  scene.text('The main lobby is large with several pillars spread across the room. At each end of the room is a large set of stairs that go up to the next level, with several hallways branching off in all directions standing opposite you.');
  if (((s as any).university ?? 0)?.['diploma'] > 0) {
    scene.text('You have graduated from the university.');
  } else {
    scene.text('You\'ve been expelled from the university for failing your exams.');
    if (((s as any).university ?? 0)?.['expelled_for_missing_exam'] === 1) {
      scene.text('You\'ve been expelled from the university for skipping your exams.');
    } else {
      scene.text('You\'ve been expelled from the university for reasons unrelated to your exam results.');
      if (((s as any).university ?? 0)?.['student'] === 0) {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 0) {
          scene.text('The enrollment period for new students is from May to August. All new students will start their classes in the week that includes September 1st.');
        }
        if (((s as any).university ?? 0)?.['prep_enrolled'] === 1  &&  ((s as any).month ?? 0) === 8) {
          scene.text('You\'ve enrolled in the preparatory classes.');
        } else {
          scene.text('You\'ve enrolled in the preparatory classes. They will start in August.');
          // TODO-QSP: dynamic text: You can take preparatory classes at the university on weekdays for ' + $func('mo...
          scene.text('You can take preparatory classes at the university on weekdays for \' + $func(\'money\', \'string_price\', 15000) + \'.');
        }
        scene.text('Admission exams for the university are held in August.');
      }
      if (((s as any).university ?? 0)?.['prep_enrolled'] === 1  &&  ((s as any).university ?? 0)?.['entrance_exam_passed'] === 0  &&  ((s as any).month ?? 0) === 8) {
        scene.actions([
          { label: 'Attend preparatory class (1:00)', goto: ['uni_admin', 'take_prep'] },
        ]);
      }
      if (((s as any).university ?? 0)?.['entrance_exam_passed'] === 0  &&  ((s as any).university ?? 0)?.['prep_enrolled'] === 1  &&  ((s as any).month ?? 0) === 8) {
        scene.actions([
          { label: 'Take the entrance exam (1:00)', goto: ['uni_admin', 'take_test'] },
        ]);
      }
      if ((((s as any).university ?? 0)?.['entrance_exam_passed'] === 1  ||  ((s as any).university ?? 0)?.['prep_enrolled'] === 0)  &&  ((s as any).university ?? 0)?.['student'] === 0  &&  ((s as any).university ?? 0)?.['diploma'] === 0  &&  ((s as any).age ?? 0) >= 17  &&  (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1)  &&  ((s as any).month ?? 0) < 9  &&  ((s as any).month ?? 0) > 4  &&  ((s as any).university ?? 0)?.['exam_week'] === 0  &&  ((s as any).yearstart ?? 0) <= 2) {
        scene.actions([
          { label: 'Enroll at the university', goto: ['uni_admin', 'enrollment'] },
        ]);
      }
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] === ((s as any).university ?? 0)?.['semester_passed']  &&  ((s as any).university ?? 0)?.['semeter_passed'] < 8) {
        scene.actions([
          { label: 'Register for your next semester', goto: ['uni_admin', 'enrollment_semester'] },
        ]);
      }
      if (((s as any).university ?? 0)?.['entrance_information'] === 1  &&  ((s as any).university ?? 0)?.['prep_enrolled'] === 0  &&  ((s as any).university ?? 0)?.['student'] === 0  &&  ((s as any).month ?? 0) < 9) {
        qspCall(s, 'uni_admin', 'prep_pay');
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
  }, goto: ['uni_grounds', ''] },
      ]);
    }
  }
  scene.build();
}

export const uni_admin: LocationDef = {
  name: 'uni_admin',
  title: 'University Administration Building',
  region: 'other',
  locationType: 'public_indoors',
  description: ['The main lobby is large with several pillars spread across the room. At each end of the room is a large set of stairs that go up to the next level, with several hallways branching off in all directions standing opposite you.'],
  enter: enter,
};
