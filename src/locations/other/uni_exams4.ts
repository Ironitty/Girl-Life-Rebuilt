import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).uni_period['exam'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('You walk into the classroom and take a seat next to a window. The rest of your classmates walk in one by one before Professor Kovalyov enters the classroom and closes the door before turning to the class.');
  scene.text('"Today is your final exam. I hope you\'ve all paid attention in my class and taken notes. Much of your grade will be decided by this one exam." As he talks, he walks around handing out the papers. Once everyone has one, he walks back to the front of the class and looks at the clock on the wall. "You have three hours to complete the test and may begin now."');
  scene.text('You spend all three hours you have on the exam, doing all the parts you\'re positive on before going back to the parts you\'re less sure of to check them again. Once you\'re happy with your work, you hand in your paper as class ends and leave.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
    qspCall(s, 'grades', 'assign_grade_description', 'uni_teaching_studies_semester_4');
    (s as any).class['uni_teaching_studies_semester_4_general education 202_exam_done'] = 1;
    if (((s as any).class ?? 0)?.['uni_teaching_studies_semester_4_general education 202_grade'] < 40) {
      // TODO-QSP: dynamic text: You think you've done terrible and are probably going to fail with <<$class_grad...
      scene.text(`You think you've done terrible and are probably going to fail with ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_4_general education 202_grade']}.`);
    } else {
      // TODO-QSP: dynamic text: You think that you did good enough to pass, and are probably going to get a <<$c...
      scene.text(`You think that you did good enough to pass, and are probably going to get a ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_4_general education 202_grade']}.`);
      if (((s as any).class ?? 0)?.['uni_teaching_studies_semester_4_general education 202_grade'] < 90) {
        // TODO-QSP: dynamic text: You think you did pretty well and are going to get an <<$class_grade_desc['uni_t...
        scene.text(`You think you did pretty well and are going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_4_general education 202_grade']}.`);
      } else {
        // TODO-QSP: dynamic text: You're sure you did extremely well and are going to get an <<$class_grade_desc['...
        scene.text(`You're sure you did extremely well and are going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_4_general education 202_grade']}.`);
      }
      scene.actions([
        { label: 'Go to university campus', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
      ]);
    }
  } },
  ]);
  scene.build();
}

export const uni_exams4: LocationDef = {
  name: 'uni_exams4',
  title: 'You walk into the classroom and take a seat next to a window',
  region: 'other',
  description: ['You walk into the classroom and take a seat next to a window. The rest of your classmates walk in one by one before Professor Kovalyov enters the classroom and closes the door before turning to the class.'],
  enter: enter,
};
