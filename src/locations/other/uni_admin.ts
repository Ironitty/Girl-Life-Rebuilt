import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_admin', 'start');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/city/island/university/admin/uni_admin.jpg');
  scene.text('The main lobby is large with several pillars spread across the room. At each end of the room is a large set of stairs that go up to the next level, with several hallways branching off in all directions standing opposite you.');
  if (((s as any).university ?? 0)?.['diploma'] > 0) {
    scene.text('You have graduated from the university.');
  } else {
    if (((s as any).university ?? 0)?.['expelled_for_missing_exam'] === 0  &&  ((s as any).university ?? 0)?.['expelled'] === 1) {
      scene.text('You\'ve been expelled from the university for failing your exams.');
    } else {
      if (((s as any).university ?? 0)?.['expelled_for_missing_exam'] === 1) {
        scene.text('You\'ve been expelled from the university for skipping your exams.');
      } else {
        if (qspFunc(s, 'uniutil', 'student', 'expelled_for_other_reason')) {
          scene.text('You\'ve been expelled from the university for reasons unrelated to your exam results.');
        } else {
          if (((s as any).university ?? 0)?.['student'] === 0) {
            if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 0) {
              scene.text('The enrollment period for new students is from May to August. All new students will start their classes in the week that includes September 1st.');
            }
            if (((s as any).university ?? 0)?.['prep_enrolled'] === 1  &&  ((s as any).month ?? 0) === 8) {
              scene.text('You\'ve enrolled in the preparatory classes.');
            } else {
              if (((s as any).university ?? 0)?.['prep_enrolled'] === 1) {
                scene.text('You\'ve enrolled in the preparatory classes. They will start in August.');
              } else {
                // TODO-QSP: dynamic text: You can take preparatory classes at the university on weekdays for ' + $func('mo...
                scene.text('You can take preparatory classes at the university on weekdays for \' + $func(\'money\', \'string_price\', 15000) + \'.');
              }
            }
            scene.text('Admission exams for the university are held in August.');
          }
        }
      }
    }
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
  scene.build();
}

function enterEnrollment(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/admin/enrollment1.jpg');
  scene.text('You enter the enrollment office, where there are several desks with women working behind them and a fair number of people around your age waiting in a side room. You inform them that you wish to enroll at the university and they take your name down before asking you to take a seat in the waiting room until your name is called. You walk into the other room and nod at the other prospective students before taking a seat.');
  scene.actions([
    { label: 'Wait your turn', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/admin/enrollment2.jpg');
    scene.text('You wait until until your name is called by one of the women, who leads you down a side hall to one of the offices. You take a seat and introduce yourself, and after a brief discussion the woman takes your information and enters it into the computer.');
    if (((s as any).class ?? 0)?.['school_grade_average'] >= 70  ||  ((s as any).university ?? 0)?.['entrance_exam_passed'] === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      scene.text('She looks over your information and fills in some data. Several minutes later, she turns to you and smiles, telling you that you\'re eligible to enroll at the university. She gives you a lot of paperwork and you spend some time filling it all out. Once done, she asks you to stand up so she can take your picture before telling you about the different degrees as she works on your ID card, giving you time to decide which one you want to choose.');
      scene.actions([
        { label: 'Teaching degree', handler: (st: GameState) => {
    scene.text('You inform her you wish to acquire a teaching degree and she hands you a packet of information about the classes you will be attending and about dorm life. She then inquires if you will be signing up for any elective classes at this time.');
    scene.actions([
      { label: 'Not right now', handler: (st: GameState) => {
    scene.text('You shake your head and tell her you don\'t intend to sign up for any elective classes right now. She nods and makes a few more notes before handing over your finished paperwork, welcoming you to Saint Petersburg University. You get up and leave, looking forward to when you can come back and start your classes.');
    scene.actions([
      { label: 'Leave', goto: ['uni_admin', 'start'] },
    ]);
  } },
      { label: 'Enroll', handler: (st: GameState) => {
    qspCall(s, 'uni_admin', 'courses', 'enroll_teaching', 1);
    scene.text('You tell her you would like to pursue a teaching degree. She smiles and nods, then finishes filling out some more paperwork about the courses you can expect to take. She hands over your ID, along with all of your paperwork, stating that you\'re officially enrolled as a student at Saint Petersburg University and reminding you that classes will start in the week that includes September 1st.');
    if ((((s as any).day ?? 0) - ((s as any).week ?? 0)) >= 27  &&  ((s as any).month ?? 0) === 8) {
      ((s as any).university ?? {})['semester_week'] = 1;
      scene.text('She tells you that you\'ve enrolled at the last minute, and that classes have already started.');
    }
    scene.text('She informs you that the university offers several elective classes that can broaden your education.');
    scene.actions([
      { label: 'Select elective classes', goto: ['uni_admin', 'select_electives'] },
      { label: 'Leave', goto: ['uni_admin', 'start'] },
    ]);
  } },
    ]);
  } },
        { label: 'Nursing degree', handler: (st: GameState) => {
    scene.text('You inform her you wish to acquire a nursing degree and she hands you a packet of information about the classes you will be attending and about dorm life. She then inquires if you will be signing up for any elective classes at this time.');
    scene.actions([
      { label: 'Not right now', handler: (st: GameState) => {
    scene.text('You shake your head and tell her you don\'t intend to sign up for any elective classes right now. She nods and makes a few more notes before handing over your finished paperwork, welcoming you to Saint Petersburg University. You get up and leave, looking forward to when you can come back and start your classes.');
    scene.actions([
      { label: 'Leave', goto: ['uni_admin', 'start'] },
    ]);
  } },
      { label: 'Enroll', handler: (st: GameState) => {
    qspCall(s, 'uni_admin', 'courses', 'enroll_nursing', 1);
    scene.text('You tell her you would like to pursue a nursing degree. She smiles and nods, then finishes filling out some more paperwork about the courses you can expect to take. She hands over your ID, along with all of your paperwork, stating that you\'re officially enrolled as a student at Saint Petersburg University and reminding you that classes will start in the week that includes September 1st.');
    if ((((s as any).day ?? 0) - ((s as any).week ?? 0)) >= 27  &&  ((s as any).month ?? 0) === 8) {
      ((s as any).university ?? {})['semester_week'] = 1;
      scene.text('She tells you that you\'ve enrolled at the last minute, and that classes have already started.');
    }
    scene.text('She informs you that the university offers several elective classes that can broaden your education.');
    scene.actions([
      { label: 'Select elective classes', goto: ['uni_admin', 'select_electives'] },
      { label: 'Leave', goto: ['uni_admin', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      ((s as any).university ?? {})['entrance_information'] = 1;
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.text('She looks over the information and fills in some data. Several minutes later, she turns to you and frowns, telling you that you\'re not eligible to enroll at the university since your grades from secondary school weren\'t good enough. She informs you that with so many students applying, they can only take those with better grades, but you can still get in if you take the preparatory classes and pass them with a high enough grade.');
      // TODO-QSP: dynamic text: The classes cost ' + $func('money', 'string_price', 15000) + '.
      scene.text('The classes cost \' + $func(\'money\', \'string_price\', 15000) + \'.');
      if (qspFunc(s, 'money', 'can_afford', 15000) === 0) {
        scene.actions([
          { label: 'You don\'t have enough money', handler: (st: GameState) => {
    scene.text('You tell her you can\'t afford to pay for the classes and she nods in understanding, telling you to come back and sign up later if you get the money. You thank her for the information and leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_admin', 'start'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'You don\'t want to sign up', handler: (st: GameState) => {
    scene.text('You shake your head and thank her, telling her you will think about it. She smiles at you and tells you she understands before you leave.');
    scene.actions([
      { label: 'Leave class', goto: ['uni_admin', 'start'] },
    ]);
  } },
        ]);
      }
      qspCall(s, 'uni_admin', 'prep_pay');
    }
  } },
  ]);
  scene.build();
}

function enterEnrollmentSemester(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/admin/enrollment1.jpg');
  scene.text('You enter the enrollment office, where there are several desks with women working behind them and a fair number of people around your age waiting in a side room. You inform them that you wish to register for your next semester.');
  scene.actions([
    { label: 'Wait your turn', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/admin/enrollment2.jpg');
    scene.text('You wait until until your name is called by one of the women, who leads you down a side hall to one of the offices. You take a seat and introduce yourself, and after a brief discussion the woman takes your information and enters it into the computer.');
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      // TODO-QSP: dynamic text: She looks over your information and fills in some data. Several minutes later sh...
      scene.text('She looks over your information and fills in some data. Several minutes later she turns to you and smiles, telling you that you since you passed your last semester you can register for the \' + $func(\'string\', \'parse_number\', university[\'enrolled_in_semester\'], \'ordinal\') + \' of the Teaching Studies Program. She gives you the paperwork and you spend some time filling it all out.');
      scene.actions([
        { label: 'Enroll', handler: (st: GameState) => {
    ((s as any).university ?? {})['enrolled_in_semester'] = (((s as any).university ?? {})['enrolled_in_semester'] ?? 0) + (1);
    // TODO-QSP: gs 'uni_admin', 'courses', 'enroll_teaching', university['enrolled_in_semester']
    scene.text('You tell her you would like to continue pursuing a teaching degree. She smiles and nods, then finishes filling out some more paperwork about the courses you can expect to take.');
    if ((((s as any).day ?? 0) - ((s as any).week ?? 0)) >= 27  &&  ((s as any).month ?? 0) === 8) {
      ((s as any).university ?? {})['semester_week'] = 1;
      scene.text('She tells you that you\'ve enrolled at the last minute, and that classes have already started.');
    }
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] % 2 === 1) {
      scene.actions([
        { label: 'Leave without taking any electives', goto: ['uni_admin', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['uni_admin', 'start'] },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        // TODO-QSP: dynamic text: She looks over your information and fills in some data. Several minutes later sh...
        scene.text('She looks over your information and fills in some data. Several minutes later she turns to you and smiles, telling you that you since you passed your last semester you can register for the \' + $func(\'string\', \'parse_number\', university[\'enrolled_in_semester\'], \'ordinal\') + \' of the Nursing Program. She gives you the paperwork and you spend some time filling it all out.');
        scene.actions([
          { label: 'Enroll', handler: (st: GameState) => {
    ((s as any).university ?? {})['enrolled_in_semester'] = (((s as any).university ?? {})['enrolled_in_semester'] ?? 0) + (1);
    // TODO-QSP: gs 'uni_admin', 'courses', 'enroll_nursing', university['enrolled_in_semester']
    scene.text('You tell her you would like to continue pursuing a nursing degree. She smiles and nods, then finishes filling out some more paperwork about the courses you can expect to take.');
    if ((((s as any).day ?? 0) - ((s as any).week ?? 0)) >= 27  &&  ((s as any).month ?? 0) === 8) {
      ((s as any).university ?? {})['semester_week'] = 1;
      scene.text('She tells you that you\'ve enrolled at the last minute, and that classes have already started.');
    }
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] % 2 === 1) {
      scene.actions([
        { label: 'Select elective classes', goto: ['uni_admin', 'select_electives'] },
        { label: 'Leave without taking any electives', goto: ['uni_admin', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['uni_admin', 'start'] },
      ]);
    }
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterSelectElectives(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Enrollment Office</b></center>');
  scene.img('images/locations/city/island/university/admin/enrollment2.jpg');
  scene.text('She gives you a list of all the current elective classes and asks if you would be interested in any of them.');
  scene.text('Computer Class and Asian Studies are in the same timeslot Monday afternoon, Art class on Tuesday afternoon, Psychology and African Studies in the same timeslot Thursday afternoon.');
  if (((s as any).university ?? 0)['elective_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester'] + '_1'] === ''  &&  qspFunc(s, 'uni_admin', 'courses', 'has_been_enrolled_in', 'Computers 101') === 0) {
    scene.actions([
      { label: 'Read about the computer class', handler: (st: GameState) => {
    scene.text('<center><b>Enrollment Office</b></center>');
    scene.img('images/locations/city/island/university/admin/enrollment2.jpg');
    scene.text('You read about the computer class, which seems to be a basic class that teaches you how to use a computer, the functions of some of the more basic programs and how to troubleshoot the OS if something goes wrong. It seems like a fairly useful class.');
    scene.actions([
      { label: 'Enroll in the computer class', handler: (st: GameState) => {
    // TODO-QSP: gs 'uni_admin', 'courses', 'enroll_elective_computer', university['enrolled_in_semester']
    scene.text('You decide to enrol in the computer class for the first and second semester of this year.');
    scene.actions([
      { label: 'Consider other elective classes', goto: ['uni_admin', 'select_electives'] },
    ]);
  } },
      { label: 'Don\'t enroll in the computer class', goto: ['uni_admin', 'select_electives'] },
    ]);
  } },
    ]);
  }
  if (((s as any).university ?? 0)['elective_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester'] + '_2'] === ''  &&  qspFunc(s, 'uni_admin', 'courses', 'has_been_enrolled_in', 'Art 101') === 0) {
    scene.actions([
      { label: 'Read about the art class', handler: (st: GameState) => {
    scene.text('<center><b>Enrollment Office</b></center>');
    scene.img('images/locations/city/island/university/admin/enrollment2.jpg');
    scene.text('This class is about learning how to draw. It will start off with the basics before moving onto the more advanced art studies by the end of the second semester. It might be fun to take part in such a relaxed class.');
    scene.actions([
      { label: 'Enroll in the art class', handler: (st: GameState) => {
    // TODO-QSP: gs 'uni_admin', 'courses', 'enroll_elective_art', university['enrolled_in_semester']
    scene.text('You decide to enroll in the art class for the first and second semester of this year.');
    scene.actions([
      { label: 'Consider other elective classes', goto: ['uni_admin', 'select_electives'] },
    ]);
  } },
      { label: 'Don\'t enroll in the art class', goto: ['uni_admin', 'select_electives'] },
    ]);
  } },
    ]);
  }
  if (((s as any).university ?? 0)['elective_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester'] + '_3'] === ''  &&  qspFunc(s, 'uni_admin', 'courses', 'has_been_enrolled_in', 'Psychology 101') === 0) {
    scene.actions([
      { label: 'Read about the psychology class', handler: (st: GameState) => {
    scene.text('<center><b>Enrollment Office</b></center>');
    scene.img('images/locations/city/island/university/admin/enrollment2.jpg');
    scene.text('This class is about learning psychology to better understand how and why people think they way they do. It will start off with the basics before moving onto the more advanced behavior studies by the end of the second semester. It might be fun to take part in such a relaxed class.');
    scene.actions([
      { label: 'Enroll in the psychology class', handler: (st: GameState) => {
    // TODO-QSP: gs 'uni_admin', 'courses', 'enroll_elective_psychology', university['enrolled_in_semester']
    scene.text('You decide to enroll in the psychology class for the first and second semester of this year.');
    scene.actions([
      { label: 'Consider other elective classes', goto: ['uni_admin', 'select_electives'] },
    ]);
  } },
      { label: 'Don\'t enroll in the psychology class', goto: ['uni_admin', 'select_electives'] },
    ]);
  } },
    ]);
  }
  if (((s as any).university ?? 0)['elective_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester'] + '_3'] === ''  &&  qspFunc(s, 'uni_admin', 'courses', 'has_been_enrolled_in', 'African Studies 101') === 0) {
    scene.actions([
      { label: 'Read about the African studies class', handler: (st: GameState) => {
    scene.text('<center><b>Enrollment Office</b></center>');
    scene.img('images/locations/city/island/university/admin/enrollment2.jpg');
    scene.text('This class is about learning the history and culture of Africa and its people. It will start off with the history of the continent before moving on to modern day Africa by the end of the second semester. It might be fun to take part in such a relaxed class.');
    scene.actions([
      { label: 'Enroll in the African studies class', handler: (st: GameState) => {
    // TODO-QSP: gs 'uni_admin', 'courses', 'enroll_elective_african', university['enrolled_in_semester']
    scene.text('You decide to enroll in the African studies class for the first and second semester of this year.');
    scene.actions([
      { label: 'Consider other elective classes', goto: ['uni_admin', 'select_electives'] },
    ]);
  } },
      { label: 'Don\'t enroll in the African studies class', goto: ['uni_admin', 'select_electives'] },
    ]);
  } },
      { label: 'Don\'t enroll in any more elective classes', goto: ['uni_admin', 'start'] },
    ]);
  }
  if (((s as any).university ?? 0)['elective_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester'] + '_1'] === ''  &&  qspFunc(s, 'uni_admin', 'courses', 'has_been_enrolled_in', 'Asian Studies 101') === 0) {
    scene.actions([
      { label: 'Read about the Asian studies class', handler: (st: GameState) => {
    scene.text('<center><b>Enrollment Office</b></center>');
    scene.img('images/locations/city/island/university/admin/enrollment2.jpg');
    scene.text('This class is about learning the history and culture of Asia and its people. It will start off with the history of the continent before moving on to modern day Asia by the end of the second semester. It might be fun to take part in such a relaxed class.');
    scene.actions([
      { label: 'Enroll in the Asian studies class', handler: (st: GameState) => {
    // TODO-QSP: gs 'uni_admin', 'courses', 'enroll_elective_asian', university['enrolled_in_semester']
    scene.text('You decide to enroll in the Asian studies class for the first and second semester of this year.');
    scene.actions([
      { label: 'Consider other elective classes', goto: ['uni_admin', 'select_electives'] },
    ]);
  } },
      { label: 'Don\'t enroll in the Asian studies class', goto: ['uni_admin', 'select_electives'] },
    ]);
  } },
      { label: 'Don\'t enroll in any more elective classes', goto: ['uni_admin', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Don\'t enroll in any more elective classes', goto: ['uni_admin', 'start'] },
  ]);
  scene.build();
}

function enterPrepPay(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Pay for the preparatory classes [+$func(\'money\', \'get_cost_string\', 15000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 15000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      qspCall(s, 'money', 'pay', 15000);
      qspCall(s, 'stat', '');
      ((s as any).university ?? {})['prep_enrolled'] = 1;
      scene.text('<center><b>Enrollment Office</b></center>');
      scene.img('images/locations/city/island/university/admin/payment.jpg');
      // TODO-QSP: dynamic text: You pay ' + $func('money', 'string_price', 15000) + ' for the preparatory classe...
      scene.text('You pay \' + $func(\'money\', \'string_price\', 15000) + \' for the preparatory classes. They are held every weekday until <b>\'+func(\'time\', \'get_time_string\', 21, 0)+\'</b>.');
      scene.actions([
        { label: 'Leave', goto: ['uni_admin', 'start'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterTakePrep(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).university ?? {})['prep_counter'] = (((s as any).university ?? {})['prep_counter'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'intel', 1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Preparatory Class</b></center>');
  scene.img('images/locations/city/island/university/admin/prepcourse1.jpg');
  scene.text('You attend the preparatory class for an hour. You pay close attention to what is being said and take notes for the entrance examination later on.');
  scene.actions([
    { label: 'Leave class', goto: ['uni_admin', 'start'] },
  ]);
  scene.build();
}

function enterTakeTest(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'exp_gain', 'intel', 1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Entrance Exam</b></center>');
  scene.img('images/locations/city/island/university/admin/prepcourse1.jpg');
  scene.text('You enter the exam room and take your seat. A professor comes out and talks about the different parts of the exam you will be taking and what is required to pass. Once he\'s finished, he passes out the papers and starts the clock. You have one hour to complete the test.');
  if (((s as any).pcs_intel ?? 0) +((s as any).university ?? 0)?.['prep_counter'] >= 100) {
    ((s as any).university ?? {})['entrance_exam_passed'] = 1;
    scene.text('You completed the entrance examination and passed with a perfect score.');
  } else {
    if (((s as any).pcs_intel ?? 0) + ((s as any).university ?? 0)?.['prep_counter'] >= 80) {
      ((s as any).university ?? {})['entrance_exam_passed'] = 1;
      scene.text('You completed the entrance examination and passed.');
    } else {
      ((s as any).university ?? {})['entrance_exam_passed'] = (-1);
      scene.text('You completed the entrance exam, but failed to pass.');
    }
  }
  scene.actions([
    { label: 'Leave the exam room', goto: ['uni_admin', 'start'] },
  ]);
  scene.build();
}

function enterCourses(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '_enroll_core') {
    ((s as any).university ?? {})['prep_counter'] = 0;
    ((s as any).university ?? {})['prep_enrolled'] = 0;
    ((s as any).university ?? {})['student'] = 1;
    ((s as any).university ?? {})['enrolled_in_semester'] = 1;
    qspCall(s, 'homes_properties', 'give_access', 'university_dorm');
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'enroll_teaching') {
    if (((s as any).university ?? 0)?.['student'] === 0) {
      qspCall(s, 'uni_admin', 'courses', '_enroll_core');
      ((s as any).university ?? {})['enrolled_in'] = 'teaching_studies';
    }
    if (((s as any).locArgs?.[2] ?? 0) === 1) {
      qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_1', 'general education 101', 3, 2, 'no', 'no', 1, 12);
      qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_1', 'teaching methods 101', 3, 2, 'no', 'no', 1, 12);
      qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_1', 'learning theories 101', 3, 2, 'no', 'no', 1, 12);
      qspCall(s, 'grades', 'grade_award', 'uni_teaching_studies_semester_1', 'general education 101', 35);
      qspCall(s, 'grades', 'grade_award', 'uni_teaching_studies_semester_1', 'teaching methods 101', 35);
      qspCall(s, 'grades', 'grade_award', 'uni_teaching_studies_semester_1', 'learning theories 101', 35);
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 2) {
        qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_2', 'general education 102', 3, 2, 'no', 'no', 1, 12);
        qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_2', 'teaching methods 102', 3, 2, 'no', 'no', 1, 12);
        qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_2', 'psychology of a student 101', 3, 2, 'no', 'no', 1, 12);
        // TODO-QSP: gs 'grades', 'grade_award', 'uni_teaching_studies_semester_2', 'general education 102', (class['uni_...
        // TODO-QSP: gs 'grades', 'grade_award', 'uni_teaching_studies_semester_2', 'teaching methods 102', (class['uni_t...
        qspCall(s, 'grades', 'grade_award', 'uni_teaching_studies_semester_2', 'psychology of a student 101', 35);
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 3) {
          qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_3', 'general education 201', 3, 2, 'no', 'no', 1, 12);
          qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_3', 'assessment 201', 3, 2, 'no', 'no', 1, 12);
          qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_3', 'learning theories 201', 3, 2, 'no', 'no', 1, 12);
          // TODO-QSP: gs 'grades', 'grade_award', 'uni_teaching_studies_semester_3', 'general education 201', ((class['uni...
          // TODO-QSP: gs 'grades', 'grade_award', 'uni_teaching_studies_semester_3', 'learning theories 201', (class['uni_...
          qspCall(s, 'grades', 'grade_award', 'uni_teaching_studies_semester_3', 'assessment 201', 35);
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 4) {
            qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_4', 'general education 202', 3, 2, 'no', 'no', 1, 12);
            qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_4', 'learning theories 202', 3, 2, 'no', 'no', 1, 12);
            qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_4', 'psychology of a student 201', 3, 2, 'no', 'no', 1, 12);
            // TODO-QSP: gs 'grades', 'grade_award', 'uni_teaching_studies_semester_4', 'general education 202', ((class['uni...
            // TODO-QSP: gs 'grades', 'grade_award', 'uni_teaching_studies_semester_4', 'learning theories 202', ((class['uni...
            // TODO-QSP: gs 'grades', 'grade_award', 'uni_teaching_studies_semester_4', 'psychology of a student 201', (class...
          }
        }
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'enroll_nursing') {
    if (((s as any).university ?? 0)?.['student'] === 0) {
      qspCall(s, 'uni_admin', 'courses', '_enroll_core');
      ((s as any).university ?? {})['enrolled_in'] = 'nursing';
    }
    if (((s as any).locArgs?.[2] ?? 0) === 1) {
      qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_1', 'patient care 101', 4, 2, 'no', 'no', 1, 12);
      qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_1', 'anatomy and physiology 101', 4, 2, 'no', 'no', 1, 12);
      qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_1', 'examination and treatment 101', 1, 2, 'no', 'no', 1, 12);
      qspCall(s, 'grades', 'grade_award', 'uni_nursing_semester_1', 'patient care 101', 35);
      qspCall(s, 'grades', 'grade_award', 'uni_nursing_semester_1', 'anatomy and physiology 101', 35);
      qspCall(s, 'grades', 'grade_award', 'uni_nursing_semester_1', 'examination and treatment 101', 35);
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 2) {
        qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_2', 'patient care 102', 4, 2, 'no', 'no', 1, 12);
        qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_2', 'anatomy and physiology 102', 4, 2, 'no', 'no', 1, 12);
        qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_2', 'examination and treatment 102', 1, 2, 'no', 'no', 1, 12);
        // TODO-QSP: gs 'grades', 'grade_award', 'uni_nursing_semester_2', 'patient care 102', (class['uni_nursing_semest...
        // TODO-QSP: gs 'grades', 'grade_award', 'uni_nursing_semester_2', 'anatomy and physiology 102', (class['uni_nurs...
        // TODO-QSP: gs 'grades', 'grade_award', 'uni_nursing_semester_2', 'examination and treatment 102', (class['uni_n...
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 3) {
          qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_3', 'patient care 201', 4, 2, 'no', 'no', 1, 12);
          qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_3', 'anatomy and physiology 201', 4, 2, 'no', 'no', 1, 12);
          qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_3', 'dosages and pharmaceuticals 101', 1, 2, 'no', 'no', 1, 12);
          // TODO-QSP: gs 'grades', 'grade_award', 'uni_nursing_semester_3', 'patient care 201', ((class['uni_nursing_semes...
          // TODO-QSP: gs 'grades', 'grade_award', 'uni_nursing_semester_3', 'anatomy and physiology 201', ((class['uni_nur...
          qspCall(s, 'grades', 'grade_award', 'uni_nursing_semester_3', 'dosages and pharmaceuticals 101', 35);
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 4) {
            qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_4', 'patient care 202', 4, 2, 'no', 'no', 1, 12);
            qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_4', 'anatomy and physiology 202', 4, 2, 'no', 'no', 1, 12);
            qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_4', 'dosages and pharmaceuticals 102', 1, 2, 'no', 'no', 1, 12);
            // TODO-QSP: gs 'grades', 'grade_award', 'uni_nursing_semester_4', 'patient care 202', ((class['uni_nursing_semes...
            // TODO-QSP: gs 'grades', 'grade_award', 'uni_nursing_semester_4', 'anatomy and physiology 202', ((class['uni_nur...
            // TODO-QSP: gs 'grades', 'grade_award', 'uni_nursing_semester_4', 'dosages and pharmaceuticals 102', (class['uni...
          }
        }
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'enroll_elective_african') {
    ((s as any).university ?? {})['elective_semester_' + String((s as any).ARGS[2] || '') + '_3'] = 'African Studies 101';
    ((s as any).university ?? {})['elective_semester_' + String((s as any).ARGS[2]+1 || '') + '_3'] = 'African Studies 102';
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'enroll_elective_art') {
    ((s as any).university ?? {})['elective_semester_' + String((s as any).ARGS[2] || '') + '_2'] = 'Art 101';
    ((s as any).university ?? {})['elective_semester_' + String((s as any).ARGS[2]+1 || '') + '_2'] = 'Art 102';
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'enroll_elective_asian') {
    ((s as any).university ?? {})['elective_semester_' + String((s as any).ARGS[2] || '') + '_1'] = 'Asian Studies 101';
    ((s as any).university ?? {})['elective_semester_' + String((s as any).ARGS[2]+1 || '') + '_1'] = 'Asian Studies 102';
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'enroll_elective_computer') {
    ((s as any).university ?? {})['elective_semester_' + String((s as any).ARGS[2] || '') + '_1'] = 'Computers 101';
    ((s as any).university ?? {})['elective_semester_' + String((s as any).ARGS[2]+1 || '') + '_1'] = 'Computers 102';
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'enroll_elective_psychology') {
    ((s as any).university ?? {})['elective_semester_' + String((s as any).ARGS[2] || '') + '_3'] = 'Psychology 101';
    ((s as any).university ?? {})['elective_semester_' + String((s as any).ARGS[2]+1 || '') + '_3'] = 'Psychology 102';
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'has_been_enrolled_in') {
    (s as any).result = 0;
    ((s as any).temp_uni_funcs ?? {})['i'] = 1;
    // TODO-QSP: :is_enrolled_outer_loop
    ((s as any).temp_uni_funcs ?? {})['j'] = 1;
    // TODO-QSP: :is_enrolled_inner_loop
    if (((s as any).university ?? 0)['elective_semester_' + ((s as any).temp_uni_funcs ?? 0)?.['i'] + '_' + ((s as any).temp_uni_funcs ?? 0)?.['j']] === ((s as any).locArgs?.[2] ?? 0)) {
      (s as any).result = 1;
      return;
    }
    ((s as any).temp_uni_funcs ?? {})['j'] = (((s as any).temp_uni_funcs ?? {})['j'] ?? 0) + (1);
    if (((s as any).temp_uni_funcs ?? 0)?.['j'] < 4) {
      // TODO-QSP: jump 'is_enrolled_inner_loop'
    }
    ((s as any).temp_uni_funcs ?? {})['i'] = (((s as any).temp_uni_funcs ?? {})['i'] ?? 0) + (1);
    if (((s as any).temp_uni_funcs ?? 0)?.['i'] < 5) {
      // TODO-QSP: jump 'is_enrolled_outer_loop'
    }
  }
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'enrollment':
      enterEnrollment(s, scene);
      break;
    case 'enrollment_semester':
      enterEnrollmentSemester(s, scene);
      break;
    case 'select_electives':
      enterSelectElectives(s, scene);
      break;
    case 'prep_pay':
      enterPrepPay(s, scene);
      break;
    case 'take_prep':
      enterTakePrep(s, scene);
      break;
    case 'take_test':
      enterTakeTest(s, scene);
      break;
    case 'courses':
      enterCourses(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_admin: LocationDef = {
  name: 'uni_admin',
  title: 'University Administration Building',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
