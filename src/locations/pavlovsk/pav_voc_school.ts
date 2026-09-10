import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCommunityCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Community Center</b></center>');
  if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 20) {
    scene.img('images/locations/pavlovsk/community/dk.jpg');
    // TODO-QSP: dynamic text: From ' + $func('time', 'get_time_string', 20, 0) + ' to ' + $func('time', 'get_t...
    scene.text('From \' + $func(\'time\', \'get_time_string\', 20, 0) + \' to \' + $func(\'time\', \'get_time_string\', 23, 0) + \', the community center hosts a dance. The entrance fee is \' + $func(\'money\', \'string_price\', 25) + \'.');
  } else {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('At the entrance of the community center, you see many young people. Guys are standing around smoking, joking, and looking at others. Girls are gathered in groups of 2-3, discussing various things, and some are hiding in the bushes.');
    scene.actions([
      { label: 'Enter [+$func(\'money\', \'get_cost_string\', 25)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 25) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      // TODO-QSP: gs 'money', 'pay', 25 & minut += 15 & gt 'pav_voc_school', 'disco'
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Go back to the train station', goto: ['pav_commercial', ''] },
  ]);
  scene.build();
}

function enterDisco(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Disco</b></center>');
  if (((s as any).hour ?? 0) < 23) {
    (s as any).temp = Math.floor(Math.random() * 100) + 1;
    if (((s as any).temp ?? 0) >= 1  &&  ((s as any).temp ?? 0) < 35) {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      scene.img('images/locations/pavlovsk/community/disco/club.jpg');
      scene.text('The dance floor is full of people. Everyone is dancing and having fun.');
      scene.actions([
        { label: 'Dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    if (((s as any).pcs_danc ?? 0) < 50  &&  ((s as any).pcs_agil ?? 0) >= ((s as any).pcs_danc ?? 0)) {
      qspCall(s, 'exp_gain', 'danc', 1);
    }
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).frost = 0;
    scene.img('images/locations/pavlovsk/community/disco/dance.jpg');
    scene.text('The music is quite old but catchy. You have fun dancing, paying no attention to anyone.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'disco'] },
    ]);
  } },
        { label: 'Next', goto: ['pav_voc_school', 'disco'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      scene.img('images/locations/pavlovsk/community/disco/closing.jpg');
      scene.text('The dance floor is unoccupied. Cold and sad. You have plenty of free space.');
      if (((s as any).temp ?? 0) >= 35  &&  ((s as any).temp ?? 0) < 65) {
        scene.text('There is a kid running around with a camera, taking pictures of girls.');
        scene.actions([
          { label: 'Pose for the photographer', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).player ?? 0)?.['alcohol'] < 3  &&  ((s as any).pcs_apprnc ?? 0) >= 20  &&  ((s as any).pcs_apprnc ?? 0) < 120) {
      scene.img('images/locations/pavlovsk/community/disco/dance.jpg');
      scene.text('You pose for the amateur photographer, trying to look as attractive as possible.');
      scene.actions([
        { label: 'Next', goto: ['pav_voc_school', 'disco'] },
      ]);
    } else {
      (s as any).temp = Math.floor(Math.random() * 2) + 1;
      if (((s as any).temp ?? 0) === 1) {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/community/disco/dance....
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/community/disco/dance.jpg"></center>`);
      }
      if (((s as any).temp ?? 0) === 2) {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/community/disco/dance....
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/community/disco/dance.jpg"></center>`);
      }
      scene.text('You pose for the amateur photographer, trying to look as attractive as possible.');
      scene.actions([
        { label: 'Next', goto: ['pav_voc_school', 'disco'] },
      ]);
    }
    if (((s as any).pcs_horny ?? 0) > 10  &&  ((s as any).player ?? 0)?.['alcohol'] > 1) {
      scene.img('images/locations/pavlovsk/community/disco/dance.jpg');
      scene.text('You put your foot on the table. You think that photo looks so erotic.');
    }
  } },
          { label: 'Next', goto: ['pav_voc_school', 'disco'] },
        ]);
      }
      if (((s as any).temp ?? 0) >= 65  &&  ((s as any).temp ?? 0) <= 100) {
        (s as any).minut = ((s as any).minut ?? 0) + 30;
        scene.img('images/locations/pavlovsk/community/disco/dance.jpg');
        scene.text('The music is quite old but catchy. You have fun dancing, paying no attention to anyone.');
        scene.actions([
          { label: 'Dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    if (((s as any).pcs_danc ?? 0) < 50  &&  ((s as any).pcs_agil ?? 0) >= ((s as any).pcs_danc ?? 0)) {
      qspCall(s, 'exp_gain', 'danc', 1);
    }
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).frost = 0;
    scene.img('images/locations/pavlovsk/community/disco/dance.jpg');
    scene.text('The music is quite old but catchy. You have fun dancing, paying no attention to anyone.');
    scene.actions([
      { label: 'Next', goto: ['pav_voc_school', 'disco'] },
    ]);
  } },
          { label: 'Next', goto: ['pav_voc_school', 'disco'] },
        ]);
      }
      scene.text('The club is closing. The lights go off, the music fades, and everyone begins to leave.');
    }
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'reception'  ||  ((s as any).locArgs?.[0] ?? 0) === '') {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Reception</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_holl.jpg');
    scene.text('The Lyceum entrance hall. It\'s clean and quiet. There is a desk and office for the personnel department. A timetable hangs on the wall.');
    if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed'  &&  ((s as any).teacher ?? 0)?.['on_notice'] === 1) {
      qspCall(s, 'mood', 'lower', 'huge');
      qspCall(s, 'jobs', 'set_fired', 'pav_voc_school_teacher');
      (s as any).teacher['level'] = 0;
      (s as any).teacher['on_notice'] = 0;
      qspCall(s, 'stat', '');
      scene.text('<center><b>Principal\'s Office</b></center>');
      scene.img('images/locations/pavlovsk/altschool/ptu_angdir.jpg');
      // TODO-QSP: dynamic text: "What a shame, <<$pcs_nickname>>! You are a disgrace to the honorable profession...
      scene.text(`"What a shame, ${((s as any).pcs_nickname ?? 0)}! You are a disgrace to the honorable profession of teaching! You have no place in our ranks! Take your documents and leave—you are fired!"`);
      return;
      scene.actions([
        { label: 'Next', goto: ['pav_voc_school', 'outside'] },
      ]);
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
      scene.actions([
        { label: 'Visit the personnel department', handler: (st: GameState) => {
    if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.text('<center><b>Personnel Department</b></center>');
      scene.img('images/locations/pavlovsk/altschool/ptu_cadr.jpg');
      scene.actions([
        { label: 'Resign', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'set_terminated', 'pav_voc_school_teacher');
    scene.text('You have resigned and no longer work here.');
    scene.actions([
      { label: 'Leave the personnel department', goto: ['pav_voc_school', 'reception'] },
    ]);
  } },
        { label: 'Leave the personnel department', goto: ['pav_voc_school', 'reception'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'stat', '');
      scene.text('<center><b>Personnel Department</b></center>');
      scene.img('images/locations/pavlovsk/altschool/ptu_cadr.jpg');
      // TODO-QSP: dynamic text: "Hello!" The Human Resources employee welcomes you. She tells you that they need...
      scene.text('"Hello!" The Human Resources employee welcomes you. She tells you that they need a certified teacher. Working days are Monday to Saturday from \'+func(\'time\', \'get_time_string\', 14, 0)+\' to \'+func(\'time\', \'get_time_string\', 16, 0)+\'. The pay is \'+$func(\'money\', \'string_profit\', 300)+\' per day, plus a room in a hostel. The contract terms state that, since they pay a full salary, there are currently no free meals. There is a strict dress code: business attire is required. Also, it is not recommended for women to wear bright makeup or strong perfume.');
      if (((s as any).university ?? 0)?.['diploma'] === 1  ||  ((s as any).university ?? 0)?.['fakediplom'] === 1) {
        scene.actions([
          { label: 'Pass an interview for the job', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Human Resources Department</b></center>');
    scene.img('images/locations/pavlovsk/altschool/ptu_cadr.jpg');
    // TODO-QSP: dynamic text: After passing the oral interview, you leave a copy of your '+iif(university['dip...
    scene.text('After passing the oral interview, you leave a copy of your \'+iif(university[\'diploma\'] > 0, \', \'forged \')+\'diploma and other documents with the personnel department, who tell you that you can start working.');
    scene.actions([
      { label: 'Become a teacher', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'set_employed', 'pav_voc_school_teacher');
    qspCall(s, 'jobs', 'set_rank', 'pav_voc_school_teacher', 1);
    (s as any).teacher['level'] = 16;
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
        (s as any).university['fakediplom'] = 2;
      }
      scene.actions([
        { label: 'Exit to Hall', goto: ['pav_voc_school', 'reception'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Go outside', goto: ['pav_voc_school', 'outside'] },
    ]);
  }
  scene.actions([
    { label: 'Go outside', goto: ['pav_voc_school', 'community_center'] },
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
    default:
      enterCommunityCenter(s, scene);
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
