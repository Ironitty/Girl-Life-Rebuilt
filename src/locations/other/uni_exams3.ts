import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGeneralEducation_201(s: GameState, scene: SceneBuilder): void {
  ((s as any).uni_period ?? {})['exam'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('You walk into the classroom and take a seat next to a window. The rest of your classmates walk in one by one before Professor Kovalyov enters the classroom and closes the door before turning to the class.');
  scene.text('"Today is your final exam. I hope you\'ve all paid attention in my class and taken notes. Much of your grade will be decided by this one exam." As he talks, he walks around handing out the papers. Once everyone has one, he walks back to the front of the class and looks at the clock on the wall. "You have three hours to complete the test and may begin now."');
  scene.text('You spend all three hours you have on the exam, doing all the parts you\'re positive on before going back to the parts you\'re less sure of to check them again. Once you\'re happy with your work, you hand in your paper as class ends and leave.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
    qspCall(s, 'grades', 'assign_grade_description', 'uni_teaching_studies_semester_3');
    ((s as any).class ?? {})['uni_teaching_studies_semester_3_general education 201_exam_done'] = 1;
    if (((s as any).class ?? 0)?.['uni_teaching_studies_semester_3_general education 201_grade'] < 40) {
      // TODO-QSP: dynamic text: You think you've done terrible and are probably going to fail with <<$class_grad...
      scene.text(`You think you've done terrible and are probably going to fail with ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_3_general education 201_grade']}.`);
    } else {
      if (((s as any).class ?? 0)?.['uni_teaching_studies_semester_3_general education 201_grade'] < 70) {
        // TODO-QSP: dynamic text: You think that you did good enough to pass, and are probably going to get a <<$c...
        scene.text(`You think that you did good enough to pass, and are probably going to get a ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_3_general education 201_grade']}.`);
      } else {
        if (((s as any).class ?? 0)?.['uni_teaching_studies_semester_3_general education 201_grade'] < 90) {
          // TODO-QSP: dynamic text: You think you did pretty well and are going to get an <<$class_grade_desc['uni_t...
          scene.text(`You think you did pretty well and are going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_3_general education 201_grade']}.`);
        } else {
          // TODO-QSP: dynamic text: You're sure you did extremely well and are going to get an <<$class_grade_desc['...
          scene.text(`You're sure you did extremely well and are going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_3_general education 201_grade']}.`);
        }
      }
    }
    scene.actions([
      { label: 'Go to university campus', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAssessment_201(s: GameState, scene: SceneBuilder): void {
  ((s as any).uni_period ?? {})['exam'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('You walk into the classroom and take a seat next to a window. The rest of your classmates walk in one by one before Professor Pasternak enters the classroom and closes the door before turning to the class.');
  scene.text('"Today is your final exam. I hope you\'ve all paid attention in my class and taken notes. Much of your grade will be decided by this one exam." As he talks, he walks around handing out the papers. Once everyone has one, he walks back to the front of the class and looks at the clock on the wall. "You have three hours to complete the test and may begin now."');
  scene.text('You spend all three hours you have on the exam, doing all the parts you\'re positive on before going back to the parts you\'re less sure of to check them again. Once you\'re happy with your work, you hand in your paper as class ends and leave.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
    qspCall(s, 'grades', 'assign_grade_description', 'uni_teaching_studies_semester_3');
    ((s as any).class ?? {})['uni_teaching_studies_semester_3_assessment 201_exam_done'] = 1;
    if (((s as any).class ?? 0)?.['uni_teaching_studies_semester_3_assessment 201_grade'] < 40) {
      // TODO-QSP: dynamic text: You think you've done terrible and are probably going to fail with <<$class_grad...
      scene.text(`You think you've done terrible and are probably going to fail with ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_3_assessment 201_grade']}.`);
    } else {
      if (((s as any).class ?? 0)?.['uni_teaching_studies_semester_3_assessment 201_grade'] < 70) {
        // TODO-QSP: dynamic text: You think that you did good enough to pass, and are probably going to get a <<$c...
        scene.text(`You think that you did good enough to pass, and are probably going to get a ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_3_assessment 201_grade']}.`);
      } else {
        if (((s as any).class ?? 0)?.['uni_teaching_studies_semester_3_assessment 201_grade'] < 90) {
          // TODO-QSP: dynamic text: You think you did pretty well and are going to get an <<$class_grade_desc['uni_t...
          scene.text(`You think you did pretty well and are going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_3_assessment 201_grade']}.`);
        } else {
          // TODO-QSP: dynamic text: You're sure you did extremely well on the exam and is going to get an <<$class_g...
          scene.text(`You're sure you did extremely well on the exam and is going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_3_assessment 201_grade']}.`);
        }
      }
    }
    scene.actions([
      { label: 'Go to university campus', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLearningTheories_201(s: GameState, scene: SceneBuilder): void {
  ((s as any).uni_period ?? {})['exam'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('You walk into the classroom and see Professor Kovalchuk sitting behind her desk. The rest of your classmates walk in one by one and she smiles at each one as they enter. Once everyone is seated, you find an exam paper sitting on the desk waiting for you.');
  scene.text('"Today is your final exam. If you have paid attention in my class and studied, then you should have no problem passing. It is a very important exam since most of your grade is decided by this paper. Show us what you have learned." She glances at the clock on the wall. "You have three hours to complete the test and may begin now."');
  scene.text('You spend all three hours you have on the exam, doing all the parts you\'re positive on before going back to the parts you\'re less sure of to check them again. Once you\'re happy with your work, you hand in your paper as class ends and leave.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
    qspCall(s, 'grades', 'assign_grade_description', 'uni_teaching_studies_semester_3');
    ((s as any).class ?? {})['uni_teaching_studies_semester_3_learning theories 201_exam_done'] = 1;
    if (((s as any).class ?? 0)?.['uni_teaching_studies_semester_3_learning theories 201_grade'] < 40) {
      // TODO-QSP: dynamic text: You think you've done terrible and are probably going to fail with <<$class_grad...
      scene.text(`You think you've done terrible and are probably going to fail with ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_3_learning theories 201_grade']}.`);
    } else {
      if (((s as any).class ?? 0)?.['uni_teaching_studies_semester_3_learning theories 201_grade'] < 70) {
        // TODO-QSP: dynamic text: You think that you did good enough to pass, and are probably going to get a <<$c...
        scene.text(`You think that you did good enough to pass, and are probably going to get a ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_3_learning theories 201_grade']}.`);
      } else {
        if (((s as any).class ?? 0)?.['uni_teaching_studies_semester_3_learning theories 201_grade'] < 90) {
          // TODO-QSP: dynamic text: You think you did pretty well and are going to get an <<$class_grade_desc['uni_t...
          scene.text(`You think you did pretty well and are going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_3_learning theories 201_grade']}.`);
        } else {
          // TODO-QSP: dynamic text: You're sure you did extremely well on the exam and is going to get an <<$class_g...
          scene.text(`You're sure you did extremely well on the exam and is going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_teaching_studies_semester_3_learning theories 201_grade']}.`);
        }
      }
    }
    scene.actions([
      { label: 'Go to university campus', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPatientCare_201(s: GameState, scene: SceneBuilder): void {
  ((s as any).uni_period ?? {})['exam'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('You walk into the classroom and take a seat next to a window. The rest of your classmates walk in one by one before Professor Kudelina enters the classroom and closes the door before turning to the class.');
  scene.text('"Today is your final exam, so you better have paid attention in my class and taken notes. Most of your grade will be decided by this one exam, so don\'t screw it up or you\'ll be sweeping the hospital floor for a living instead." As she talks, she walks around slamming the papers down on your desks. Once everyone has one, she walks back to the front of the class and looks at the clock on the wall. "You have three hours, so make the most of it because that\'s all you\'re getting."');
  scene.text('You spend all three hours you have on the exam, doing all the parts you\'re positive on before going back to the parts you\'re less sure of to check them again. Once you\'re happy with your work, you hand in your paper as class ends and leave.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
    qspCall(s, 'grades', 'assign_grade_description', 'uni_nursing_semester_3');
    ((s as any).class ?? {})['uni_nursing_semester_3_patient care 201_exam_done'] = 1;
    if (((s as any).class ?? 0)?.['uni_nursing_semester_3_patient care 201_grade'] < 40) {
      // TODO-QSP: dynamic text: You think you've done terrible and are probably going to fail with <<$class_grad...
      scene.text(`You think you've done terrible and are probably going to fail with ${((s as any).class_grade_desc ?? 0)?.['uni_nursing_semester_3_patient care 201_grade']}.`);
    } else {
      if (((s as any).class ?? 0)?.['uni_nursing_semester_3_patient care 201_grade'] < 70) {
        // TODO-QSP: dynamic text: You think that you did good enough to pass, and are probably going to get a <<$c...
        scene.text(`You think that you did good enough to pass, and are probably going to get a ${((s as any).class_grade_desc ?? 0)?.['uni_nursing_semester_3_patient care 201_grade']}.`);
      } else {
        if (((s as any).class ?? 0)?.['uni_nursing_semester_3_patient care 201_grade'] < 90) {
          // TODO-QSP: dynamic text: You think you did pretty well and are going to get an <<$class_grade_desc['uni_n...
          scene.text(`You think you did pretty well and are going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_nursing_semester_3_patient care 201_grade']}.`);
        } else {
          // TODO-QSP: dynamic text: You're sure you did extremely well on the exam and are going to get an <<$class_...
          scene.text(`You're sure you did extremely well on the exam and are going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_nursing_semester_3_patient care 201_grade']}.`);
        }
      }
    }
    scene.actions([
      { label: 'Go to university campus', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnatomyAndPhysiology_201(s: GameState, scene: SceneBuilder): void {
  ((s as any).uni_period ?? {})['exam'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('You walk into the classroom and see Professor Marinova sitting behind her desk. The rest of your classmates walk in one by one and she smiles at each one as they enter. Once everyone is seated, you find an exam paper sitting on the desk waiting for you.');
  scene.text('"Today is your final exam. If you have paid attention in my class and studied, then you should have no problem passing. It is a very important exam since most of your grade is decided by this paper. Show me what you have learned." She glances at the clock on the wall. "You have three hours to complete the test and may begin now."');
  scene.text('You spend all three hours you have on the exam, doing all the parts you\'re positive on before going back to the parts you\'re less sure of to check them again. Once you\'re happy with your work, you hand in your paper as class ends and leave.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
    qspCall(s, 'grades', 'assign_grade_description', 'uni_nursing_semester_3');
    ((s as any).class ?? {})['uni_nursing_semester_3_anatomy and physiology 201_exam_done'] = 1;
    if (((s as any).class ?? 0)?.['uni_nursing_semester_3_anatomy  &&  physiology 201_grade'] < 40) {
      // TODO-QSP: dynamic text: You think you've done terrible and are probably going to fail with <<$class_grad...
      scene.text(`You think you've done terrible and are probably going to fail with ${((s as any).class_grade_desc ?? 0)?.['uni_nursing_semester_3_anatomy and physiology 201_grade']}.`);
    } else {
      if (((s as any).class ?? 0)?.['uni_nursing_semester_3_anatomy  &&  physiology 201_grade'] < 70) {
        // TODO-QSP: dynamic text: You think that you did good enough to pass, and are probably going to get a <<$c...
        scene.text(`You think that you did good enough to pass, and are probably going to get a ${((s as any).class_grade_desc ?? 0)?.['uni_nursing_semester_3_anatomy and physiology 201_grade']}.`);
      } else {
        if (((s as any).class ?? 0)?.['uni_nursing_semester_3_anatomy  &&  physiology 201_grade'] < 90) {
          // TODO-QSP: dynamic text: You think you did pretty well and are going to get an <<$class_grade_desc['uni_n...
          scene.text(`You think you did pretty well and are going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_nursing_semester_3_anatomy and physiology 201_grade']}.`);
        } else {
          // TODO-QSP: dynamic text: You're sure you did extremely well on the exam and are going to get an <<$class_...
          scene.text(`You're sure you did extremely well on the exam and are going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_nursing_semester_3_anatomy and physiology 201_grade']}.`);
        }
      }
    }
    scene.actions([
      { label: 'Go to university campus', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDosagesAndPharmaceuticals_101(s: GameState, scene: SceneBuilder): void {
  ((s as any).uni_period ?? {})['exam'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('You walk into the classroom and take a seat next to a window. The rest of your classmates walk in one by one before Professor Borisov enters the classroom and closes the door before turning to the class.');
  scene.text('"Most of your grade will be decided by this final exam, so I hope you have all been paying attention," he says as he shuffles around handing out the papers. Once everyone has one, he walks back to the front of the class and looks at the clock on the wall. "You have three hours to complete the test and may begin now."');
  scene.text('You spend all three hours you have on the exam, doing all the parts you\'re positive on before going back to the parts you\'re less sure of to check them again. Once you\'re happy with your work, you hand in your paper as class ends and leave.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.img(`images/locations/city/island/university/classroom/exam${Math.floor(Math.random() * 3) + 1}.jpg`);
    qspCall(s, 'grades', 'assign_grade_description', 'uni_nursing_semester_3');
    ((s as any).class ?? {})['uni_nursing_semester_3_dosages and pharmaceuticals 101_exam_done'] = 1;
    if (((s as any).class ?? 0)?.['uni_nursing_semester_3_dosages  &&  pharmaceuticals 101_grade'] < 40) {
      // TODO-QSP: dynamic text: You think you've done terrible and are probably going to fail with <<$class_grad...
      scene.text(`You think you've done terrible and are probably going to fail with ${((s as any).class_grade_desc ?? 0)?.['uni_nursing_semester_3_dosages and pharmaceuticals 101_grade']}.`);
    } else {
      if (((s as any).class ?? 0)?.['uni_nursing_semester_3_dosages  &&  pharmaceuticals 101_grade'] < 70) {
        // TODO-QSP: dynamic text: You think that you did good enough to pass, and are probably going to get a <<$c...
        scene.text(`You think that you did good enough to pass, and are probably going to get a ${((s as any).class_grade_desc ?? 0)?.['uni_nursing_semester_3_dosages and pharmaceuticals 101_grade']}.`);
      } else {
        if (((s as any).class ?? 0)?.['uni_nursing_semester_3_dosages  &&  pharmaceuticals 101_grade'] < 90) {
          // TODO-QSP: dynamic text: You think you did pretty well and are going to get an <<$class_grade_desc['uni_n...
          scene.text(`You think you did pretty well and are going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_nursing_semester_3_dosages and pharmaceuticals 101_grade']}.`);
        } else {
          // TODO-QSP: dynamic text: You're sure you did extremely well and are going to get an <<$class_grade_desc['...
          scene.text(`You're sure you did extremely well and are going to get an ${((s as any).class_grade_desc ?? 0)?.['uni_nursing_semester_3_dosages and pharmaceuticals 101_grade']}.`);
        }
      }
    }
    scene.actions([
      { label: 'Go to university campus', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'general_education_201':
      enterGeneralEducation_201(s, scene);
      break;
    case 'assessment_201':
      enterAssessment_201(s, scene);
      break;
    case 'learning_theories_201':
      enterLearningTheories_201(s, scene);
      break;
    case 'patient_care_201':
      enterPatientCare_201(s, scene);
      break;
    case 'anatomy_and_physiology_201':
      enterAnatomyAndPhysiology_201(s, scene);
      break;
    case 'dosages_and_pharmaceuticals_101':
      enterDosagesAndPharmaceuticals_101(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_exams3: LocationDef = {
  name: 'uni_exams3',
  title: 'You walk into the classroom and take a seat next to a window',
  region: 'other',
  enter: enter,
};
