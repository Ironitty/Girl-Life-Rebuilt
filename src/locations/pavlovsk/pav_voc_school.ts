import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCommunityCenter(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_voc_school';
  (s as any).menu_arg = 'community_center';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Community Center</b></center>');
  if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 20) {
    scene.img('images/locations/pavlovsk/community/dk.jpg');
    // TODO-QSP: dynamic text: 'From ' + $func('time', 'get_time_string', 20, 0) + ' to ' + $func('time', 'get_...
    scene.text('From 20:00 to 23:00, the community center hosts a dance. The entrance fee is 25₽.');
  } else {
    if (((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) <= 23) {
      scene.img('images/locations/pavlovsk/community/dk_night.jpg');
      scene.text('At the entrance of the community center, you see many young people. Guys are standing around smoking, joking, and looking at others. Girls are gathered in groups of 2-3, discussing various things, and some are hiding in the bushes.');
      scene.actions([
        { label: 'Enter', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 25) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: gs 'money', 'pay', 25 & minut += 15 & gt 'pav_voc_school', 'disco'
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the train station', goto: ['pav_commercial', ''] },
  ]);
  scene.build();
}

function enterDisco(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_voc_school';
  (s as any).menu_arg = 'disco';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Disco</b></center>');
  if (((s as any).hour ?? 0) < 23) {
    (s as any).temp = (Math.floor(Math.random() * 100) + 1);
    if (((s as any).temp ?? 0) >= 1  &&  ((s as any).temp ?? 0) < 35) {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      scene.img('images/locations/pavlovsk/community/disco/club.jpg');
      scene.text('The dance floor is full of people. Everyone is dancing and having fun.');
      scene.actions([
        { label: 'Dance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).fat = ((st as any).fat ?? 0) - (1);
    if (((st as any).pcs_danc ?? 0) < 50  &&  ((st as any).pcs_agil ?? 0) >= ((st as any).pcs_danc ?? 0)) {
      qspCall(st, 'exp_gain', 'danc', 1);
    }
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).frost = 0;
    scene.img('images/locations/pavlovsk/community/disco/dance.jpg');
    scene.text('The music is quite old but catchy. You have fun dancing, paying no attention to anyone.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'disco'] },
    ]);
  } },
        { label: 'Next', goto: ['pav_voc_school', 'disco'] },
      ]);
    } else {
      if (((s as any).temp ?? 0) >= 35  &&  ((s as any).temp ?? 0) < 65) {
        (s as any).minut = ((s as any).minut ?? 0) + 30;
        scene.img('images/locations/pavlovsk/community/disco/closing.jpg');
        scene.text('The dance floor is unoccupied. Cold and sad. You have plenty of free space.');
        if (((s as any).temp ?? 0) >= 35  &&  ((s as any).temp ?? 0) < 65) {
          scene.text('There is a kid running around with a camera, taking pictures of girls.');
          scene.actions([
            { label: 'Pose for the photographer', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).player ?? 0)?.['alcohol'] < 3  &&  ((st as any).pcs_apprnc ?? 0) >= 20  &&  ((st as any).pcs_apprnc ?? 0) < 120) {
      scene.img('images/locations/pavlovsk/community/disco/dance.jpg');
      scene.text('You pose for the amateur photographer, trying to look as attractive as possible.');
      scene.actions([
        { label: 'Next', goto: ['pav_voc_school', 'disco'] },
      ]);
    } else {
      if (((st as any).player ?? 0)?.['alcohol'] < 3  &&  ((st as any).pcs_apprnc ?? 0) >= 120) {
        (st as any).temp = (Math.floor(Math.random() * 2) + 1);
        if (((st as any).temp ?? 0) === 1) {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/community/disco/dance....
          scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/community/disco/dance.jpg"></center>`);
        }
        if (((st as any).temp ?? 0) === 2) {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/community/disco/dance....
          scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/community/disco/dance.jpg"></center>`);
        }
        scene.text('You pose for the amateur photographer, trying to look as attractive as possible.');
        scene.actions([
          { label: 'Next', goto: ['pav_voc_school', 'disco'] },
        ]);
      }
    }
    if (((st as any).pcs_horny ?? 0) > 10  &&  ((st as any).player ?? 0)?.['alcohol'] > 1) {
      scene.img('images/locations/pavlovsk/community/disco/dance.jpg');
      scene.text('You put your foot on the table. You think that photo looks so erotic.');
    }
  } },
            { label: 'Next', goto: ['pav_voc_school', 'disco'] },
          ]);
        }
      } else {
        if (((s as any).temp ?? 0) >= 65  &&  ((s as any).temp ?? 0) <= 100) {
          (s as any).minut = ((s as any).minut ?? 0) + 30;
          scene.img('images/locations/pavlovsk/community/disco/dance.jpg');
          scene.text('The music is quite old but catchy. You have fun dancing, paying no attention to anyone.');
          scene.actions([
            { label: 'Dance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).fat = ((st as any).fat ?? 0) - (1);
    if (((st as any).pcs_danc ?? 0) < 50  &&  ((st as any).pcs_agil ?? 0) >= ((st as any).pcs_danc ?? 0)) {
      qspCall(st, 'exp_gain', 'danc', 1);
    }
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).frost = 0;
    scene.img('images/locations/pavlovsk/community/disco/dance.jpg');
    scene.text('The music is quite old but catchy. You have fun dancing, paying no attention to anyone.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'disco'] },
    ]);
  } },
            { label: 'Next', goto: ['pav_voc_school', 'disco'] },
          ]);
        }
      }
    }
  } else {
    scene.text('The club is closing. The lights go off, the music fades, and everyone begins to leave.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go outside', goto: ['pav_voc_school', 'community_center'] },
  ]);
  scene.build();
}

function enterReception(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_voc_school';
  (s as any).menu_arg = 'reception';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Reception</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_holl.jpg');
  scene.text('The Lyceum entrance hall. It\'s clean and quiet. There is a desk and office for the personnel department. A timetable hangs on the wall.');
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed'  &&  ((s as any).teacher ?? 0)?.['on_notice'] === 1) {
    qspCall(s, 'mood', 'lower', 'huge');
    qspCall(s, 'jobs', 'set_fired', 'pav_voc_school_teacher');
    ((s as any).teacher = (s as any).teacher ?? {})['level'] = 0;
    ((s as any).teacher = (s as any).teacher ?? {})['on_notice'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Principal\'s Office</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_angdir.jpg');
    // TODO-QSP: dynamic text: "What a shame, <<$pcs_nickname>>! You are a disgrace to the honorable profession...
    scene.text(`"What a shame, ${((s as any).pcs_nickname ?? '')}! You are a disgrace to the honorable profession of teaching! You have no place in our ranks! Take your documents and leave—you are fired!"`);
    scene.actions([
{ label: 'Next', goto: ['pav_voc_school', 'outside'] },
]);
    return;
  }
  if (((s as any).teacher ?? 0)?.['level'] === 0) {
    scene.text('You could not teach your way out of a paper bag—you are embarrassingly terrible at teaching.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 1  &&  ((s as any).teacher ?? 0)?.['level'] < 10) {
    scene.text('You do not deserve to be a teacher.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 10  &&  ((s as any).teacher ?? 0)?.['level'] < 20) {
    scene.text('You are only as good as a young, inexperienced intern.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 20  &&  ((s as any).teacher ?? 0)?.['level'] < 30) {
    scene.text('You have already established a certain reputation.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 30  &&  ((s as any).teacher ?? 0)?.['level'] < 50) {
    scene.text('You are a respectable teacher.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 50  &&  ((s as any).teacher ?? 0)?.['level'] < 70) {
    scene.text('Other teachers turn to you for advice.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 70  &&  ((s as any).teacher ?? 0)?.['level'] < 90) {
    scene.text('Your experience and knowledge are known outside the Lyceum.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 90) {
    scene.text('You are the personification of education.');
  }
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') {
    scene.actions([
      { label: 'Go to the corridor on this floor', goto: ['pav_voc_school', 'first_floor'] },
      { label: 'Go to the second floor corridor', goto: ['pav_voc_school', 'second_floor'] },
      { label: 'Go to the third floor corridor', goto: ['pav_voc_school', 'third_floor'] },
    ]);
  } else {
    if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] !== 'fired') {
      scene.actions([
        { label: 'Visit the personnel department', handler: (st: GameState) => {
    if (((st as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('<center><b>Personnel Department</b></center>');
      scene.img('images/locations/pavlovsk/altschool/ptu_cadr.jpg');
      scene.actions([
        { label: 'Resign', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'set_terminated', 'pav_voc_school_teacher');
    scene.text('You have resigned and no longer work here.');
    scene.actions([
      { label: 'Leave the personnel department', goto: ['pav_voc_school', 'reception'] },
    ]);
  } },
        { label: 'Leave the personnel department', goto: ['pav_voc_school', 'reception'] },
      ]);
    } else {
      if (((st as any).job_status ?? 0)?.['pav_voc_school_teacher'] === '') {
        (st as any).minut = ((st as any).minut ?? 0) + 15;
        qspCall(st, 'stat', '');
        scene.text('<center><b>Personnel Department</b></center>');
        scene.img('images/locations/pavlovsk/altschool/ptu_cadr.jpg');
        // TODO-QSP: dynamic text: '"Hello!" The Human Resources employee welcomes you. She tells you that they nee...
        scene.text('"Hello!" The Human Resources employee welcomes you. She tells you that they need a certified teacher. Working days are Monday to Saturday from 14:00 to 16:00. The pay is \'+$func(\'money\', \'string_profit\', 300)+\' per day, plus a room in a hostel. The contract terms state that, since they pay a full salary, there are currently no free meals. There is a strict dress code: business attire is required. Also, it is not recommended for women to wear bright makeup or strong perfume.');
        if (((st as any).university ?? 0)?.['diploma'] === 1  ||  ((st as any).university ?? 0)?.['fakediplom'] === 1) {
          scene.actions([
            { label: 'Pass an interview for the job', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Human Resources Department</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_cadr.jpg');
    // TODO-QSP: dynamic text: 'After passing the oral interview, you leave a copy of your '+iif(university['di...
    scene.text('After passing the oral interview, you leave a copy of your ' + ((((st as any).university ?? 0)?.['diploma'] > 0) ? ('') : ('forged ')) + 'diploma and other documents with the personnel department, who tell you that you can start working.');
    scene.actions([
      { label: 'Become a teacher', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'set_employed', 'pav_voc_school_teacher');
    qspCall(st, 'jobs', 'set_rank', 'pav_voc_school_teacher', 1);
    ((st as any).teacher = (st as any).teacher ?? {})['level'] = 16;
    scene.text('You bring your work book and say that you can start work the next business day.');
    scene.actions([
      { label: 'Exit to Hall', goto: ['pav_voc_school', 'reception'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('You are told that you cannot take the job without a diploma from an institute of higher education.');
          ((st as any).university = (st as any).university ?? {})['fakediplom'] = 2;
        }
        scene.actions([
          { label: 'Exit to Hall', goto: ['pav_voc_school', 'reception'] },
        ]);
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go outside', goto: ['pav_voc_school', 'outside'] },
  ]);
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_voc_school';
  (s as any).menu_arg = 'reception';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Reception</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_holl.jpg');
  scene.text('The Lyceum entrance hall. It\'s clean and quiet. There is a desk and office for the personnel department. A timetable hangs on the wall.');
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed'  &&  ((s as any).teacher ?? 0)?.['on_notice'] === 1) {
    qspCall(s, 'mood', 'lower', 'huge');
    qspCall(s, 'jobs', 'set_fired', 'pav_voc_school_teacher');
    ((s as any).teacher = (s as any).teacher ?? {})['level'] = 0;
    ((s as any).teacher = (s as any).teacher ?? {})['on_notice'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Principal\'s Office</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_angdir.jpg');
    // TODO-QSP: dynamic text: "What a shame, <<$pcs_nickname>>! You are a disgrace to the honorable profession...
    scene.text(`"What a shame, ${((s as any).pcs_nickname ?? '')}! You are a disgrace to the honorable profession of teaching! You have no place in our ranks! Take your documents and leave—you are fired!"`);
    scene.actions([
{ label: 'Next', goto: ['pav_voc_school', 'outside'] },
]);
    return;
  }
  if (((s as any).teacher ?? 0)?.['level'] === 0) {
    scene.text('You could not teach your way out of a paper bag—you are embarrassingly terrible at teaching.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 1  &&  ((s as any).teacher ?? 0)?.['level'] < 10) {
    scene.text('You do not deserve to be a teacher.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 10  &&  ((s as any).teacher ?? 0)?.['level'] < 20) {
    scene.text('You are only as good as a young, inexperienced intern.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 20  &&  ((s as any).teacher ?? 0)?.['level'] < 30) {
    scene.text('You have already established a certain reputation.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 30  &&  ((s as any).teacher ?? 0)?.['level'] < 50) {
    scene.text('You are a respectable teacher.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 50  &&  ((s as any).teacher ?? 0)?.['level'] < 70) {
    scene.text('Other teachers turn to you for advice.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 70  &&  ((s as any).teacher ?? 0)?.['level'] < 90) {
    scene.text('Your experience and knowledge are known outside the Lyceum.');
  }
  if (((s as any).teacher ?? 0)?.['level'] >= 90) {
    scene.text('You are the personification of education.');
  }
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') {
    scene.actions([
      { label: 'Go to the corridor on this floor', goto: ['pav_voc_school', 'first_floor'] },
      { label: 'Go to the second floor corridor', goto: ['pav_voc_school', 'second_floor'] },
      { label: 'Go to the third floor corridor', goto: ['pav_voc_school', 'third_floor'] },
    ]);
  } else {
    if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] !== 'fired') {
      scene.actions([
        { label: 'Visit the personnel department', handler: (st: GameState) => {
    if (((st as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('<center><b>Personnel Department</b></center>');
      scene.img('images/locations/pavlovsk/altschool/ptu_cadr.jpg');
      scene.actions([
        { label: 'Resign', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'set_terminated', 'pav_voc_school_teacher');
    scene.text('You have resigned and no longer work here.');
    scene.actions([
      { label: 'Leave the personnel department', goto: ['pav_voc_school', 'reception'] },
    ]);
  } },
        { label: 'Leave the personnel department', goto: ['pav_voc_school', 'reception'] },
      ]);
    } else {
      if (((st as any).job_status ?? 0)?.['pav_voc_school_teacher'] === '') {
        (st as any).minut = ((st as any).minut ?? 0) + 15;
        qspCall(st, 'stat', '');
        scene.text('<center><b>Personnel Department</b></center>');
        scene.img('images/locations/pavlovsk/altschool/ptu_cadr.jpg');
        // TODO-QSP: dynamic text: '"Hello!" The Human Resources employee welcomes you. She tells you that they nee...
        scene.text('"Hello!" The Human Resources employee welcomes you. She tells you that they need a certified teacher. Working days are Monday to Saturday from 14:00 to 16:00. The pay is \'+$func(\'money\', \'string_profit\', 300)+\' per day, plus a room in a hostel. The contract terms state that, since they pay a full salary, there are currently no free meals. There is a strict dress code: business attire is required. Also, it is not recommended for women to wear bright makeup or strong perfume.');
        if (((st as any).university ?? 0)?.['diploma'] === 1  ||  ((st as any).university ?? 0)?.['fakediplom'] === 1) {
          scene.actions([
            { label: 'Pass an interview for the job', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Human Resources Department</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_cadr.jpg');
    // TODO-QSP: dynamic text: 'After passing the oral interview, you leave a copy of your '+iif(university['di...
    scene.text('After passing the oral interview, you leave a copy of your ' + ((((st as any).university ?? 0)?.['diploma'] > 0) ? ('') : ('forged ')) + 'diploma and other documents with the personnel department, who tell you that you can start working.');
    scene.actions([
      { label: 'Become a teacher', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'set_employed', 'pav_voc_school_teacher');
    qspCall(st, 'jobs', 'set_rank', 'pav_voc_school_teacher', 1);
    ((st as any).teacher = (st as any).teacher ?? {})['level'] = 16;
    scene.text('You bring your work book and say that you can start work the next business day.');
    scene.actions([
      { label: 'Exit to Hall', goto: ['pav_voc_school', 'reception'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('You are told that you cannot take the job without a diploma from an institute of higher education.');
          ((st as any).university = (st as any).university ?? {})['fakediplom'] = 2;
        }
        scene.actions([
          { label: 'Exit to Hall', goto: ['pav_voc_school', 'reception'] },
        ]);
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go outside', goto: ['pav_voc_school', 'outside'] },
  ]);
  scene.build();
}

function enterOutside(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_voc_school';
  (s as any).menu_arg = 'outside';
  qspCall(s, 'stat', '');
  scene.text('<center><b>High School</b></center>');
  scene.img('images/locations/pavlovsk/altschool/lizey.jpg');
  scene.text('On the door hangs a poster: "The Vocational School has been teaching for 11 years in the fields of: (a comprehensive list). We are devoted to the training of future employees of large enterprises. The college creates optimal conditions for personal and professional development of students under a modern curriculum."');
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') {
    scene.text('There\'s a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_voc_school/u0027, /u0027sports_area/u0027); return false;">sports area</a>.');
  }
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed'  &&  ((s as any).teacher ?? 0)?.['level'] > 0  &&  ((s as any).teacher ?? 0)?.['level'] < 10) {
    ((s as any).teacher = (s as any).teacher ?? {})['on_notice'] = 1;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_commercial', ''] },
    { label: 'Enter the Lyceum', goto: ['pav_voc_school', 'reception'] },
  ]);
  scene.build();
}

function enterSportsArea(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_voc_school';
  (s as any).menu_arg = 'first_floor';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Playground</b></center>');
  scene.img('images/locations/pavlovsk/altschool/stadion.jpg');
  scene.text('You see what remains of a football field. Pathetic. Nevertheless, the guys are still having fun playing football here.');
  if ((Math.floor(Math.random() * 100) + 1) >= 90) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/altschool/ptu_fight.jpg');
    scene.text('You see a group of girls mocking and kicking a young man.');
    scene.actions([
      { label: 'Intervene for the man', handler: (st: GameState) => {
    ((st as any).teacher = (st as any).teacher ?? {})['level'] = ((st as any).teacher['level'] ?? 0) + (1);
    scene.text('"What are you doing? Stop immediately, or I\'ll call the police!" You yell at the girls. They snort: "He\'s an asshole; he deserved it!" But they still leave the guy alone.');
    scene.text('You set a good example by helping the defenseless man. This will positively impact your reputation.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'sports_area'] },
    ]);
  } },
      { label: 'Disregard', goto: ['pav_voc_school', 'sports_area'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Back', goto: ['pav_voc_school', 'outside'] },
  ]);
  scene.build();
}

function enterFirstFloor(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_voc_school';
  (s as any).menu_arg = 'first_floor';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Corridor (1st floor)</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_1korr.jpg');
  scene.text('On the first floor, there is a medical office, the HR offices, a gym, a dining room, and some classrooms.');
  if ((Math.floor(Math.random() * 100) + 1) >= 90) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/altschool/ptu_rand.jpg');
    scene.text('You meet Olga L., the Foreign Languages teacher. She is wearing a rather sexy outfit—you think that\'s against the rules.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'first_floor'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hall', goto: ['pav_voc_school', 'reception'] },
    { label: 'Go to the gym', goto: ['pav_voc_school', 'gymnasium'] },
    { label: 'Go to the medical office', goto: ['pav_voc_school', 'medical_office'] },
    { label: 'Go to the dining room', goto: ['pav_voc_school', 'dining_room'] },
  ]);
  scene.build();
}

function enterSecondFloor(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_voc_school';
  (s as any).menu_arg = 'second_floor';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Corridor (2nd floor)</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_2korr.jpg');
  scene.text('On this floor, there are classrooms, the principal\'s office, a library, and the teachers\' toilet.');
  if ((Math.floor(Math.random() * 100) + 1) >= 90) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/altschool/ptu_korr1.jpg');
    scene.text('One of the students is sitting on the windowsill. You notice her revealing outfit and cheeky behavior.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'second_floor'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Principal\'s Office', goto: ['pav_voc_school', 'principals_office'] },
    { label: 'Go to the library', goto: ['pav_voc_school', 'library'] },
    { label: 'Go to the toilet', goto: ['pav_voc_school', 'teachers_toilet'] },
    { label: 'Go to the hall', goto: ['pav_voc_school', 'reception'] },
  ]);
  scene.build();
}

function enterThirdFloor(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_voc_school';
  (s as any).menu_arg = 'third_floor';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Corridor (3rd floor)</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_3korr.jpg');
  scene.text('On this floor, there is a classroom for optional subjects.');
  if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 13) {
    scene.actions([
      { label: 'Go to class', goto: ['pav_voc_school', 'classroom'] },
    ]);
  }
  if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 15) {
    scene.actions([
      { label: 'Start teaching', goto: ['pav_voc_school', 'teaching_start'] },
    ]);
  }
  if (((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) <= 18) {
    scene.actions([
      { label: 'Go to class', goto: ['pav_voc_school', 'classroom'] },
    ]);
  }
  if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 20) {
    scene.actions([
      { label: 'Staff room', goto: ['pav_voc_school', 'staff_room'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hall', goto: ['pav_voc_school', 'reception'] },
  ]);
  scene.build();
}

function enterStaffRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = 'staff_room';
  (s as any).locM = 'pav_voc_school';
  (s as any).locM_arg = 'staff_room';
  (s as any).menu_loc = 'pav_voc_school';
  (s as any).menu_arg = 'staff_room';
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Teachers\' Room</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_tk.jpg');
  scene.text('A place for teachers to relax.');
  scene.text('On the wall near the front door hangs a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a>.');
  scene.text('In one corner, there is a small old sofa.');
  if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) <= 15) {
    (s as any).temp = (Math.floor(Math.random() * 100) + 1);
    if (((s as any).temp ?? 0) >= 90) {
      (s as any).minut = ((s as any).minut ?? 0) + 6;
      qspCall(s, 'mood', 'lower', 'small');
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/altschool/ptu_angdir.jpg');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, where were you? Do you know what''s happening in your class ...
      scene.text(`"${((s as any).pcs_nickname ?? '')}, where were you? Do you know what's happening in your class right now? I can tell you: there's confusion, students wandering around, and there's even an—pardon the expression—orgy. Go immediately to class, calm everyone down, and teach your lesson through the remaining time as expected of you."`);
      if (((s as any).teacher ?? 0)?.['apology'] === 0) {
        scene.actions([
          { label: 'Apologize to the Principal', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    ((st as any).teacher = (st as any).teacher ?? {})['apology'] = 1;
    ((st as any).teacher = (st as any).teacher ?? {})['class_state'] = 1;
    scene.img('images/locations/pavlovsk/altschool/ptu_angdir.jpg');
    scene.text('You stand and face the Principal, apologizing for your actions.');
    scene.text('The Principal tells you that you need to come to her office during your free time.');
    scene.actions([
      { label: 'Leave', goto: ['pav_voc_school', 'third_floor'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Tell the principal this won\'t happen again', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/altschool/ptu_angdir.jpg');
    scene.text('You acknowledge your error and promise that it won\'t happen again in the future.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: teacher['level'] -= 3
  }, goto: ['pav_voc_school', 'third_floor'] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 12) {
      (s as any).temp = (Math.floor(Math.random() * 100) + 1);
      if (((s as any).temp ?? 0) >= 90) {
        (s as any).minut = ((s as any).minut ?? 0) + 60;
        ((s as any).teacher = (s as any).teacher ?? {})['level'] = ((s as any).teacher['level'] ?? 0) + (2);
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/altschool/21ptu.jpg');
        scene.text('A student approaches you and asks for help with her work.');
        scene.actions([
          { label: 'Help', goto: ['pav_voc_school', 'staff_room'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Lie down on the couch (1:00)', handler: (st: GameState) => {
    qspCall(st, 'sleep_simple', 'nap');
  } },
    { label: 'Go to the corridor', goto: ['pav_voc_school', 'third_floor'] },
  ]);
  scene.build();
}

function enterClassroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Classroom</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_klass.jpg');
  scene.text('Your classroom.');
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed'  &&  ((s as any).job_rank ?? 0)?.['pav_voc_school_teacher'] === 1) {
    (s as any).hour = 14;
    qspCall(s, 'jobs', 'set_rank', 'pav_voc_school_teacher', 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/altschool/ptu_starosta.jpg');
    scene.text('You spot Inna Robski in the classroom—one of the top students in the school. Her eyes light up when she sees you.');
    // TODO-QSP: dynamic text: "Hello, <<$pcs_nickname>>!" she greets you warmly. "You look absolutely chic tod...
    scene.text(`"Hello, ${((s as any).pcs_nickname ?? '')}!" she greets you warmly. "You look absolutely chic today!"`);
    scene.text('You smile at her enthusiasm. "Thank you, Ina. That\'s very kind of you to say."');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'classroom'] },
    ]);
  } else {
    if (((s as any).job_rank ?? 0)?.['pav_voc_school_teacher'] >= 2  &&  ((s as any).hostel ?? 0)?.['status'] === 4) {
      (s as any).hour = 14;
      ((s as any).hostel = (s as any).hostel ?? {})['status'] = 5;
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/altschool/cera_nerd2.jpg');
      scene.text('You spot Eugene Isenberg, the Botany and Chemistry teacher, in the hallway. Someone has scribbled something on his nose—likely another prank by the students.');
      scene.text('"Hello, Zhenya!" you call out.');
      // TODO-QSP: dynamic text: Eugene glances up, his face brightening when he sees you. "Hello, <<$pcs_nicknam...
      scene.text(`Eugene glances up, his face brightening when he sees you. "Hello, ${((s as any).pcs_nickname ?? '')}!" A slight blush spreads across his cheeks as he quickly drops his gaze to the floor.`);
      scene.text('"Zhenya," you say gently, "there\'s something written on your nose." You gesture toward the nearby mirror.');
      scene.text('He looks at his reflection and his face instantly flushes a deep crimson. "This is what happens when I try to joke around with the students," he mumbles, furiously rubbing at his nose. "Thank you for telling me…"');
      scene.text('Poor guy, you think to yourself. The students clearly make him a target. Wanting to lift his spirits, you change the subject.');
      scene.text('"Don\'t worry about it. How have you been? Are you seeing anyone these days? Most men your age have girlfriends, don\'t they?"');
      scene.text('Eugene\'s shoulders slump slightly. "No, unfortunately not. I don\'t really know many women, and the ones I meet…" he hesitates, "well, they usually just laugh at me. It hurts, you know?"');
      scene.text('"What about hobbies?" you ask. "What do you enjoy doing outside of teaching? Movies? Games?"');
      scene.text('At this, his eyes light up. For the next several minutes, Eugene enthusiastically describes his favorite video games in painstaking detail—fighting games with complex move sets and first-person shooters with intricate strategies.');
      scene.text('"I\'m sorry, Eugene," you interject when you can finally get a word in, "but I really should get going. It was nice talking with you, though."');
      scene.text('As you turn to leave, you notice him watching you, his eyes intense and filled with unmistakable longing.');
      scene.actions([
        { label: 'Next', goto: ['pav_voc_school', 'classroom'] },
      ]);
    }
  }
  if (((s as any).teacher ?? 0)?.['level'] > 10) {
    scene.actions([
      { label: 'Read the school magazine', goto: ['pav_voc_school', 'school_magazine'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the corridor', goto: ['pav_voc_school', 'third_floor'] },
  ]);
  scene.build();
}

function enterTeachingStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'jobs', 'clock', 'pav_voc_school_teacher');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Classroom</b></center>');
  if (((s as any).teacher ?? 0)?.['class_state'] === 0) {
    scene.img('images/locations/pavlovsk/altschool/ptu_lesson0.jpg');
    scene.text('You go to your classroom, ready to start the exercises. Your pupils are divided into groups—some are talking, some are laughing, some are chatting on their phones, and others are eating. Typical youth behavior.');
    scene.actions([
      { label: 'Begin activity', handler: (st: GameState) => {
    (st as any).minut = 0;
    (st as any).hour = 14;
  }, goto: ['pav_voc_school', 'teaching'] },
    ]);
  } else {
    if (((s as any).teacher ?? 0)?.['class_state'] === 1) {
      scene.img('images/locations/pavlovsk/altschool/ptu_lesson1xl.jpg');
      scene.text('You enter the classroom and are stunned by what you see—complete madness and mayhem.');
      scene.actions([
        { label: 'Restore order', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    // TODO-QSP: teacher['class_state'] = 0
  }, goto: ['pav_voc_school', 'teaching'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTeaching(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Classroom</b></center>');
  scene.img('images/locations/pavlovsk/altschool/lesson1.jpg');
  scene.text('Your students sit in their seats and listen to you.');
  if (((s as any).pcs_horny ?? 0) > 30) {
    (s as any).temp = (Math.floor(Math.random() * 100) + 1);
    if (((s as any).temp ?? 0) >= 95) {
      scene.actions([
        { label: 'Drop your pencil on the ground', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (40);
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    ((st as any).teacher = (st as any).teacher ?? {})['level'] = ((st as any).teacher['level'] ?? 0) - (5);
    qspCall(st, 'stat', '');
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_karandash.jpg');
    scene.text('Pacing between rows, you bend down, pretending to pick up a fallen pencil. However, the guys sitting in the back row can see under your skirt. Their eyes widen as they catch a glimpse of everything.');
    if (((st as any).pantyworntype ?? 0) === 'none') {
      (st as any).temp = (Math.floor(Math.random() * 100) + 1);
      if (((st as any).temp ?? 0) >= 90) {
        qspCall(st, 'mood', 'lower', 'tiny');
        ((st as any).teacher = (st as any).teacher ?? {})['level'] = ((st as any).teacher['level'] ?? 0) - (2);
        // TODO-QSP: dynamic text: You hear a barely audible whisper: "Look at that! <<$pcs_nickname>> doesn''t hav...
        scene.text(`You hear a barely audible whisper: "Look at that! ${((st as any).pcs_nickname ?? '')} doesn't have any panties on, and we can see her pussy!"`);
        scene.text('You feel your face begin to burn with shame after what you heard.');
        scene.text('You struggle through the rest of the lesson, your conscience tugging at you, while you try to convey the material to your students.');
        scene.actions([
          { label: 'Continue', goto: ['pav_voc_school', 'teaching'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'teaching'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).temp ?? 0) >= 85  &&  ((s as any).temp ?? 0) < 90) {
        scene.actions([
          { label: 'Sit on the table', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (40);
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    ((st as any).teacher = (st as any).teacher ?? {})['level'] = ((st as any).teacher['level'] ?? 0) - (2);
    qspCall(st, 'stat', '');
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_urok1.jpg');
    scene.text('While explaining the material to your students, you sit on the edge of the table. The entire class looks at your feet and legs.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'teaching'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).temp ?? 0) >= 75  &&  ((s as any).temp ?? 0) < 80) {
          scene.actions([
            { label: 'Drop the chalk', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (40);
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    ((st as any).teacher = (st as any).teacher ?? {})['level'] = ((st as any).teacher['level'] ?? 0) - (5);
    qspCall(st, 'stat', '');
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_rak.jpg');
    scene.text('While explaining, you "accidentally" drop the chalk. At first, you try to pick it up by bending down. Unable to reach it, you get down on all fours, with your ass up in the air. Those sitting nearby get an unforgettable show.');
    if (((st as any).pantyworntype ?? 0) === 'none') {
      (st as any).temp = (Math.floor(Math.random() * 100) + 1);
      if (((st as any).temp ?? 0) >= 90) {
        qspCall(st, 'mood', 'lower', 'tiny');
        ((st as any).teacher = (st as any).teacher ?? {})['level'] = ((st as any).teacher['level'] ?? 0) - (2);
        // TODO-QSP: dynamic text: You hear a barely audible whisper: "Look at that! <<$pcs_nickname>> doesn''t hav...
        scene.text(`You hear a barely audible whisper: "Look at that! ${((st as any).pcs_nickname ?? '')} doesn't have any panties on, and we can see her pussy!"`);
        scene.text('You feel your face begin to burn with shame after what you heard.');
        scene.text('You struggle through the rest of the lesson, your conscience tugging at you, while you try to convey the material to your students.');
        scene.actions([
          { label: 'Continue', goto: ['pav_voc_school', 'teaching'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'teaching'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).temp ?? 0) >= 65  &&  ((s as any).temp ?? 0) < 70) {
            scene.actions([
              { label: 'Sit sexily on the table', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (40);
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    ((st as any).teacher = (st as any).teacher ?? {})['level'] = ((st as any).teacher['level'] ?? 0) - (2);
    qspCall(st, 'stat', '');
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_nastol.jpg');
    scene.text('While explaining the material to your students, you sit on the edge of the table. The entire class stares at your feet and legs.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'teaching'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).temp ?? 0) >= 55  &&  ((s as any).temp ?? 0) < 60) {
              scene.actions([
                { label: 'Show stockings', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (40);
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    ((st as any).teacher = (st as any).teacher ?? {})['level'] = ((st as any).teacher['level'] ?? 0) - (2);
    qspCall(st, 'stat', '');
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_urok2.jpg');
    scene.text('You sit down next to a student to show him some examples. You casually cross your legs, revealing your elastic stockings. Immediately after answering, the poor boy rushes to the toilet. Poor thing.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'teaching'] },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  }
  if (((s as any).hour ?? 0) < 16) {
    scene.actions([
      { label: 'Teach', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'lower', 'tiny');
    if (((st as any).pcs_intel ?? 0) < 80) {
      qspCall(st, 'exp_gain', 'intel', 1);
    }
    if (((st as any).clothing ?? 0)?.['style'] === 5  &&  (((st as any).pcs_makeup ?? 0) === 1  ||  ((st as any).pcs_makeup ?? 0) === 2)  &&  ((st as any).teacher ?? 0)?.['level'] < 70) {
      ((st as any).teacher = (st as any).teacher ?? {})['level'] = ((st as any).teacher['level'] ?? 0) + (1);
    }
    if (((st as any).pcs_makeup ?? 0) === 4) {
      ((st as any).teacher = (st as any).teacher ?? {})['level'] = ((st as any).teacher['level'] ?? 0) - (1);
    }
    qspCall(st, 'money', 'earn', 150);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/altschool/lesson.jpg');
    scene.text('You teach your lesson. Your students listen to you attentively.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'teaching'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).hour ?? 0) >= 16) {
      scene.actions([
        { label: 'Finish your lesson', handler: (st: GameState) => {
    scene.text('The lesson ends, and the students rush to leave the classroom.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_voc_school', 'third_floor'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the classroom', goto: ['pav_voc_school', 'third_floor'] },
  ]);
  scene.build();
}

function enterPrincipalsOffice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Principal\'s Office</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_dir.jpg');
  if (((s as any).teacher ?? 0)?.['apology'] === 0) {
    // TODO-QSP: dynamic text: "Welcome, <<$pcs_nickname>>! I hope you''re enjoying working with us. If you hav...
    scene.text(`"Welcome, ${((s as any).pcs_nickname ?? '')}! I hope you're enjoying working with us. If you have any questions for me, I'm listening."`);
  } else {
    if (((s as any).teacher ?? 0)?.['apology'] === 1) {
      // TODO-QSP: dynamic text: "Hello again, <<$pcs_nickname>>."
      scene.text(`"Hello again, ${((s as any).pcs_nickname ?? '')}."`);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the office', goto: ['pav_voc_school', 'second_floor'] },
  ]);
  scene.build();
}

function enterGymnasium(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_voc_school';
  (s as any).menu_arg = 'gymnasium';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Gym</b></center>');
  scene.img('images/locations/pavlovsk/altschool/sportzal.jpg');
  scene.text('Gym for team sports.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hall', goto: ['pav_voc_school', 'reception'] },
    { label: 'Women\'s Shower', goto: ['pav_voc_school', 'womens_shower'] },
    { label: 'Men\'s Shower', goto: ['pav_voc_school', 'mens_shower'] },
  ]);
  scene.build();
}

function enterWomensShower(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_voc_school';
  (s as any).menu_arg = 'womens_shower';
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Women\'s Shower</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_jen.jpg');
  scene.text('Shower room.');
  (s as any).temp = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).temp ?? 0) >= 90) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Women\'s Shower</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_dush.jpg');
    // TODO-QSP: dynamic text: "Oh! <<$pcs_nickname>>, please leave! We''re not dressed!" Two girls scream whil...
    scene.text(`"Oh! ${((s as any).pcs_nickname ?? '')}, please leave! We're not dressed!" Two girls scream while taking a shower.`);
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'gymnasium'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] > 0) {
    scene.actions([
      { label: 'Take a shower', goto: ['pav_voc_school_shower', 'shower'] },
    ]);
  } else {
    scene.text('You\'ve run out of shampoo and will have to buy more before you can wash yourself.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the gym', goto: ['pav_voc_school', 'gymnasium'] },
  ]);
  scene.build();
}

function enterMensShower(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  ((s as any).teacher = (s as any).teacher ?? {})['level'] = ((s as any).teacher['level'] ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Men\'s Shower</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_muz.jpg');
  scene.text('Shower for boys. You shouldn\'t be here. This will negatively affect your reputation.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the gym', goto: ['pav_voc_school', 'gymnasium'] },
  ]);
  scene.build();
}

function enterMedicalOffice(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_voc_school';
  (s as any).menu_arg = 'medical_office';
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Medical Office</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_medkab.jpg');
  scene.text('You see they can handle first aid, medical examinations, and vaccinations here.');
  (s as any).temp = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).temp ?? 0) >= 90) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Medical Office</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_med1.jpg');
    scene.text('When you enter the medical room, you find nurses taking pictures of themselves in seductive poses. They\'ll probably post these to their social media accounts.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'medical_office'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'To the corridor (1st Floor)', goto: ['pav_voc_school', 'first_floor'] },
  ]);
  scene.build();
}

function enterDiningRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dining Room</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_stol.jpg');
  scene.text('You can have dinner or a snack here.');
  (s as any).temp = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).temp ?? 0) >= 90) {
    scene.actions([
      { label: 'Greet the Principal', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    ((st as any).teacher = (st as any).teacher ?? {})['level'] = ((st as any).teacher['level'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.text('<center><b>Dining Room</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_stoldir.jpg');
    scene.text('You meet the Principal of the institution. You politely greet her, and she gives you a compliment.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'dining_room'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Buy lunch', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 100);
      qspCall(st, 'food', 'medium_meal');
      qspGoto(st, 'pav_voc_school', 'dining_room');
    }
  } },
    { label: 'To the corridor (1st Floor)', goto: ['pav_voc_school', 'first_floor'] },
  ]);
  scene.build();
}

function enterLibrary(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Library</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_lib.jpg');
  scene.text('Here, students can borrow textbooks and reading materials. There\'s also a computer lab with Internet access.');
  (s as any).temp = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).temp ?? 0) >= 90) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Library</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_ups.jpg');
    scene.text('You notice the librarian hunched down, and you can see her crotch. In the hall, you hear people wondering if it was intentional or accidental.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'library'] },
    ]);
  }
  if (((s as any).hostel ?? 0)?.['status'] === 5) {
    scene.actions([
      { label: 'Search the Web for "Tetrodotoxin"', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    ((st as any).hostel = (st as any).hostel ?? {})['status'] = 6;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/altschool/ptu_comp.jpg');
    scene.text('The only information you can find about this substance is that it\'s used in experimental pharmacology.');
    scene.actions([
      { label: 'Continue', goto: ['pav_voc_school', 'library'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the corridor', goto: ['pav_voc_school', 'second_floor'] },
  ]);
  scene.build();
}

function enterTeachersToilet(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Women\'s Toilet</b></center>');
  scene.img('images/locations/pavlovsk/altschool/ptu_toilet_w.jpg');
  scene.text('A toilet which, in theory, only teachers can use.');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Remove underwear', handler: (st: GameState) => {
    qspCall(st, 'underwear', 'remove');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['tampons'] > 0  &&  (((s as any).mesec ?? 0) > 0  ||  (((s as any).placebopart ?? 0) > 0  &&  ((s as any).pillcon ?? 0) < 40000))  &&  (((s as any).isprok ?? 0) === 1  ||  (((s as any).isprok ?? 0) === 0  &&  ((s as any).isprokp ?? 0) === 0))  &&  (!((s as any).knowpreg ?? 0))) {
    scene.actions([
      { label: 'Change tampon', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['tampons'] = ((st as any).mc_inventory['tampons'] ?? 0) - (1);
    (st as any).isprok = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'mood', 'lower', 'tiny');
    scene.img('images/shared/home/bathroom/wash3.jpg');
    scene.text('You change your tampon.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  (s as any).temp = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).temp ?? 0) >= 90) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Women\'s Toilet</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_zanato.jpg');
    scene.text('"Oops! Sorry, the door was supposed to be closed."');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'teachers_toilet'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the corridor', goto: ['pav_voc_school', 'second_floor'] },
  ]);
  scene.build();
}

function enterSchoolMagazine(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/altschool/memory.jpg');
  scene.text('Your school magazine.');
  if (((s as any).teacher ?? 0)?.['level'] > 40  &&  ((s as any).hostel ?? 0)?.['status'] === 6) {
    scene.actions([
      { label: 'Lonely Heart', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    ((st as any).hostel = (st as any).hostel ?? {})['status'] = 7;
    scene.img('images/locations/pavlovsk/altschool/ptu_tech.jpg');
    scene.text('In front of you is Eugene A., the school\'s chemistry teacher.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you are always so attractive. You must be very popular with ...
    scene.text(`"${((st as any).pcs_nickname ?? '')}, you are always so attractive. You must be very popular with men."`);
    scene.text('"I think I understand what you\'re asking. You want me to introduce you to someone."');
    scene.text('"Don\'t get me wrong, I\'ll soon be 30 and still unmarried. I can\'t seem to meet anyone. Most men in our backwater town aren\'t interesting."');
    scene.text('"I see. Do you think you could send me your most beautiful pictures? A bit of erotica would be good too. I\'ll find you a good husband on a dating site."');
    scene.text('"Erotica! Do you think that\'s necessary?"');
    scene.text('"It is necessary. Men lose their heads at the sight of a beautiful female body."');
    scene.text('"Okay, I\'ll try to take a picture as erotic as possible."');
    scene.actions([
      { label: 'Finish', goto: ['pav_voc_school', 'third_floor'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspGoto(st, 'pav_voc_school', 'third_floor');
  } },
  ]);
  scene.build();
}

function enterDatingProfile(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).hostel = (s as any).hostel ?? {})['status'] = 8;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/altschool/ptu_tech.jpg');
  // TODO-QSP: dynamic text: "Good afternoon, <<$pcs_nickname>>! As you requested, I tried to take a picture ...
  scene.text(`"Good afternoon, ${((s as any).pcs_nickname ?? '')}! As you requested, I tried to take a picture as erotic as possible. I hope I didn't overdo it. Or maybe I didn't do it right—the photo doesn't seem quite erotic. So please, email me if anything else is needed."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'See next photo', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/altschool/ptu_tech1.jpg');
    scene.text('Wow, she has a stunning figure.');
    scene.actions([
      { label: 'See next photo', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/altschool/ptu_tech2.jpg');
    scene.text('Wow, Eugene! Hmm… But she wanted to post even more candid photos, even for a dating site! Apparently, the girl is quite desperate.');
    scene.text('Now you can go to the site and help her find the man of her dreams.');
    scene.text('Or…');
    scene.text('With these photos I asked for, I could do whatever I want!');
    scene.actions([
      { label: 'Go to the site', goto: ['komp', 'znak'] },
    ]);
  } },
    ]);
  } },
    { label: 'Exit the browser', goto: ['komp', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'community_center':
      enterCommunityCenter(s, scene);
      break;
    case 'disco':
      enterDisco(s, scene);
      break;
    case 'reception':
      enterReception(s, scene);
      break;
    case 'outside':
      enterOutside(s, scene);
      break;
    case 'sports_area':
      enterSportsArea(s, scene);
      break;
    case 'first_floor':
      enterFirstFloor(s, scene);
      break;
    case 'second_floor':
      enterSecondFloor(s, scene);
      break;
    case 'third_floor':
      enterThirdFloor(s, scene);
      break;
    case 'staff_room':
      enterStaffRoom(s, scene);
      break;
    case 'classroom':
      enterClassroom(s, scene);
      break;
    case 'teaching_start':
      enterTeachingStart(s, scene);
      break;
    case 'teaching':
      enterTeaching(s, scene);
      break;
    case 'principals_office':
      enterPrincipalsOffice(s, scene);
      break;
    case 'gymnasium':
      enterGymnasium(s, scene);
      break;
    case 'womens_shower':
      enterWomensShower(s, scene);
      break;
    case 'mens_shower':
      enterMensShower(s, scene);
      break;
    case 'medical_office':
      enterMedicalOffice(s, scene);
      break;
    case 'dining_room':
      enterDiningRoom(s, scene);
      break;
    case 'library':
      enterLibrary(s, scene);
      break;
    case 'teachers_toilet':
      enterTeachersToilet(s, scene);
      break;
    case 'school_magazine':
      enterSchoolMagazine(s, scene);
      break;
    case 'dating_profile':
      enterDatingProfile(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_voc_school: LocationDef = {
  name: 'pav_voc_school',
  title: 'Community Center',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  enter: enter,
};
