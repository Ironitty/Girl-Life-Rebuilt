import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>The Vladimir Lenin community center</b></center>');
  if (((s as any).month ?? 0) < 4  ||  ((s as any).month ?? 0) > 10) {
    scene.img('images/locations/city/industrial/community/community_centerw.jpg');
  } else {
    scene.img('images/locations/city/industrial/community/community_center.jpg');
  }
  // TODO-QSP: dynamic text: The Vladimir Lenin center is open from ' + func('time', 'get_time_string', 9, 0)...
  scene.text('The Vladimir Lenin center is open from \' + func(\'time\', \'get_time_string\', 9, 0) + \' through to \' + func(\'time\', \'get_time_string\', 17, 0) + \' on weekdays, but is closed on weekends. It is a local community certification and lessons center.');
  scene.actions([
    { label: 'Leave the center', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
    { label: 'Enter the building', goto: ['city_commcenter', 'lessons'] },
  ]);
  scene.build();
}

function enterLessons(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>The Vladimir Lenin community center</b></center>');
  scene.img('images/locations/city/industrial/community/reception.jpg');
  scene.text('Inside is a reception desk. Next to it is a large bulletin board with a list of currently available course.');
  scene.text('On the bulletin board, you can see they are currently offering:');
  // TODO-QSP: dynamic text: Driving lessons ' + $func('money', 'string_price', 30000) + '  for ten classes t...
  scene.text('Driving lessons \' + $func(\'money\', \'string_price\', 30000) + \'  for ten classes to get your drivers license <a href="exec:gt \'city_commcenter\', \'drivingschool\'">Course in room 201</a>.');
  // TODO-QSP: dynamic text: Massage therapist courses - ' + $func('money', 'string_price', 10000) + ' for te...
  scene.text('Massage therapist courses - \' + $func(\'money\', \'string_price\', 10000) + \' for ten classes to get your Masseuse certification <a href="exec:gt \'city_commcenter\', \'masseuse\'">Classes in room 203</a>.');
  // TODO-QSP: dynamic text: Secretarial certification - ' + $func('money', 'string_price', 15000) + ' for te...
  scene.text('Secretarial certification - \' + $func(\'money\', \'string_price\', 15000) + \' for ten classes to get your Secretarial certification, <a href="exec:gt \'city_commcenter\', \'secretarialschool\'">Classes in room 204</a>.');
  // TODO-QSP: dynamic text: Singing lessons - ' + $func('money', 'string_price', 500) + ' per class <a href=...
  scene.text('Singing lessons - \' + $func(\'money\', \'string_price\', 500) + \' per class <a href="exec:gt \'city_commcenter\', \'singingtutor\'">Classes in room 213. </a>');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterPayments(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', ARGS[2]
  // TODO-QSP: dynamic text: You pay ' + $func('money', 'string_price', ARGS[2]) + ' for the <<$ARGS[1]>> cou...
  scene.text(`You pay ' + $func('money', 'string_price', ARGS[2]) + ' for the ${((s as any).locArgs?.[1] ?? 0)} course and are now booked in for your lesson. Please refer to the noticeboard for class times and rooms.`);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDrivingschool(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/industrial/community/driving_lessons.jpg');
  scene.text('You enter room 201 of the community center with excitement, your mind whirling with thoughts of getting your driving license and the freedom being able to drive brings.');
  scene.text('The driving school is government run and will check personal details against the state registration database. As such, a fake ID will not work. You need to be 18 or above.');
  if (((s as any).license ?? 0)?.['drive'] === 1) {
    scene.text('You\'ve already got your driving license!');
    return;
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).license ?? 0)?.['drive_enrolled'] === 0) {
    if (((s as any).age ?? 0) < 18) {
      scene.text('You aren\'t old enough to take driving lessons.');
    } else {
      scene.actions([
        { label: 'Book a driving course [+$func(\'money\', \'get_cost_string\', 30000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 30000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.text('<center><b>The Vladimir Lenin community center</b></center>');
      scene.img('images/locations/city/industrial/community/reception.jpg');
      scene.text('You briefly look around for information about driving lessons before approaching the receptionist, who gives you the necessary papers to fill out, she warns you that the paperwork will be checked by an agency to prevent fraud.');
      scene.text('You pay her the money and she gives you a small information pack about the driving lessons. You quickly skim through them to see you can take a 2-hour driving lesson on each work day.');
      scene.actions([
        { label: 'Pay for the course', handler: (st: GameState) => {
    (s as any).license['drive_enrolled'] = 1;
    // TODO-QSP: gt 'city_commcenter', 'payments', 'driving lessons', 30000
  } },
        { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
      ]);
    }
  } else {
    scene.text('You\'ve taken your driving lesson for today.');
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).week ?? 0) < 6) {
      if (((s as any).license ?? 0)?.['drive_lessons'] < 11) {
        scene.actions([
          { label: 'Driving lesson', handler: (st: GameState) => {
    (s as any).license['drive_lastday'] = ((s as any).daystart ?? 0);
    (s as any).license['drive_lessons'] = ((s as any).license['drive_lessons'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'stat', '');
    scene.text('<center><b>The Vladimir Lenin community center room 201</b></center>');
    scene.img('images/locations/city/industrial/community/driving_lessons.jpg');
    scene.text('You spend two hours following your driving instructor\'s orders and listening to suggestions on how to handle a car.');
    scene.text('By the end of the lesson, you feel like you\'re a little more competent at driving.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).license ?? 0)?.['drive_lessons'] === 12) {
          scene.actions([
            { label: 'Driving test', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).license['drive_lessons'] = 0;
    (s as any).license['drive_enrolled'] = 0;
    (s as any).license['drive'] = 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>The Vladimir Lenin community center driving course</b></center>');
    scene.img('images/locations/city/industrial/community/dk3.jpg');
    scene.text('You feel nervous as you enter this car for, hopefully, the last time. The instructor is a man who can look jovial at one moment and stern the next.');
    scene.text('For the next 2 hours, you follow his directions around the city, park the car where he tells you and feel your heart stop at every tiny mistake you make, but he lets you continue without comment. At the end, he seems satisfied and claims that you will get better with experience.');
    scene.text('"Congratulations, you\'ve passed! Here\'s your license." He smiles and hands you your brand new driver\'s license. Now all you need is a car…');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Driving theory', handler: (st: GameState) => {
    (s as any).license['drive_lastday'] = ((s as any).daystart ?? 0);
    (s as any).license['drive_lessons'] = 12;
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'stat', '');
    scene.text('<center><b>The Vladimir Lenin community center room 201</b></center>');
    scene.img('images/locations/city/industrial/community/driving_lessons.jpg');
    scene.text('You dedicate two hours to a boring, but necessary, lecture on traffic signs, regulations, scenarios and some information on how to keep a car in working order.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'lessons':
      enterLessons(s, scene);
      break;
    case 'payments':
      enterPayments(s, scene);
      break;
    case 'drivingschool':
      enterDrivingschool(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const city_commcenter: LocationDef = {
  name: 'city_commcenter',
  title: '<center><b>The Vladimir Lenin community center</b></center>',
  region: 'city',
  locationType: 'public_indoors',
  enter: enter,
};
