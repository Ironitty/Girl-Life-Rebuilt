import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'city_commcenter';
  (s as any).loc_arg = 'start';
  (s as any).menu_loc = 'city_commcenter';
  (s as any).menu_arg = 'start';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>The Vladimir Lenin community center</b></center>');
  if (((s as any).month ?? 0) < 4  ||  ((s as any).month ?? 0) > 10) {
    scene.img('images/locations/city/industrial/community/community_centerw.jpg');
  } else {
    scene.img('images/locations/city/industrial/community/community_center.jpg');
  }
  // TODO-QSP: dynamic text: 'The Vladimir Lenin center is open from ' + func('time', 'get_time_string', 9, 0...
  scene.text('The Vladimir Lenin center is open from 9:00 through to 17:00 on weekdays, but is closed on weekends. It is a local community certification and lessons center.');
  // TODO-QSP: end
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
  // TODO-QSP: dynamic text: 'Driving lessons ' + $func('money', 'string_price', 30000) + '  for ten classes ...
  scene.text('Driving lessons 30000₽  for ten classes to get your drivers license <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_commcenter/u0027, /u0027drivingschool/u0027); return false;">Course in room 201</a>.');
  // TODO-QSP: dynamic text: 'Massage therapist courses - ' + $func('money', 'string_price', 10000) + ' for t...
  scene.text('Massage therapist courses - 10000₽ for ten classes to get your Masseuse certification <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_commcenter/u0027, /u0027masseuse/u0027); return false;">Classes in room 203</a>.');
  // TODO-QSP: dynamic text: 'Secretarial certification - ' + $func('money', 'string_price', 15000) + ' for t...
  scene.text('Secretarial certification - 15000₽ for ten classes to get your Secretarial certification, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_commcenter/u0027, /u0027secretarialschool/u0027); return false;">Classes in room 204</a>.');
  // TODO-QSP: dynamic text: 'Singing lessons - ' + $func('money', 'string_price', 500) + ' per class <a href...
  scene.text('Singing lessons - 500₽ per class <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_commcenter/u0027, /u0027singingtutor/u0027); return false;">Classes in room 213. </a>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterPayments(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', ARGS[2]
  // TODO-QSP: dynamic text: 'You pay ' + $func('money', 'string_price', ARGS[2]) + ' for the <<$ARGS[1]>> co...
  scene.text(`You pay ' + $func('money', 'string_price', ARGS[2]) + ' for the ${((s as any).locArgs?.[1] ?? '')} course and are now booked in for your lesson. Please refer to the noticeboard for class times and rooms.`);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
    scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
    return;
  }
  if (((s as any).license ?? 0)?.['drive_enrolled'] === 0) {
    if (((s as any).age ?? 0) < 18) {
      scene.text('You aren\'t old enough to take driving lessons.');
    } else {
      scene.actions([
        { label: 'Book a driving course', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 30000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.text('<center><b>The Vladimir Lenin community center</b></center>');
      scene.img('images/locations/city/industrial/community/reception.jpg');
      scene.text('You briefly look around for information about driving lessons before approaching the receptionist, who gives you the necessary papers to fill out, she warns you that the paperwork will be checked by an agency to prevent fraud.');
      scene.text('You pay her the money and she gives you a small information pack about the driving lessons. You quickly skim through them to see you can take a 2-hour driving lesson on each work day.');
      scene.actions([
        { label: 'Pay for the course', handler: (st: GameState) => {
    ((st as any).license = (st as any).license ?? {})['drive_enrolled'] = 1;
    qspGoto(st, 'city_commcenter', 'payments', 'driving lessons', '30000');
  } },
        { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  } },
      ]);
    }
  } else {
    if (((s as any).license ?? 0)?.['drive_lastday'] === ((s as any).daystart ?? 0)) {
      scene.text('You\'ve taken your driving lesson for today.');
    } else {
      if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).week ?? 0) < 6) {
        if (((s as any).license ?? 0)?.['drive_lessons'] < 11) {
          scene.actions([
            { label: 'Driving lesson', handler: (st: GameState) => {
    ((st as any).license = (st as any).license ?? {})['drive_lastday'] = ((st as any).daystart ?? 0);
    ((st as any).license = (st as any).license ?? {})['drive_lessons'] = ((st as any).license['drive_lessons'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'stat', '');
    scene.text('<center><b>The Vladimir Lenin community center room 201</b></center>');
    scene.img('images/locations/city/industrial/community/driving_lessons.jpg');
    scene.text('You spend two hours following your driving instructor\'s orders and listening to suggestions on how to handle a car.');
    scene.text('By the end of the lesson, you feel like you\'re a little more competent at driving.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).license ?? 0)?.['drive_lessons'] === 11) {
            scene.actions([
              { label: 'Driving theory', handler: (st: GameState) => {
    ((st as any).license = (st as any).license ?? {})['drive_lastday'] = ((st as any).daystart ?? 0);
    ((st as any).license = (st as any).license ?? {})['drive_lessons'] = 12;
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'stat', '');
    scene.text('<center><b>The Vladimir Lenin community center room 201</b></center>');
    scene.img('images/locations/city/industrial/community/driving_lessons.jpg');
    scene.text('You dedicate two hours to a boring, but necessary, lecture on traffic signs, regulations, scenarios and some information on how to keep a car in working order.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).license ?? 0)?.['drive_lessons'] === 12) {
              scene.actions([
                { label: 'Driving test', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    ((st as any).license = (st as any).license ?? {})['drive_lessons'] = 0;
    ((st as any).license = (st as any).license ?? {})['drive_enrolled'] = 0;
    ((st as any).license = (st as any).license ?? {})['drive'] = 1;
    qspCall(st, 'stat', '');
    scene.text('<center><b>The Vladimir Lenin community center driving course</b></center>');
    scene.img('images/locations/city/industrial/community/dk3.jpg');
    scene.text('You feel nervous as you enter this car for, hopefully, the last time. The instructor is a man who can look jovial at one moment and stern the next.');
    scene.text('For the next 2 hours, you follow his directions around the city, park the car where he tells you and feel your heart stop at every tiny mistake you make, but he lets you continue without comment. At the end, he seems satisfied and claims that you will get better with experience.');
    scene.text('"Congratulations, you\'ve passed! Here\'s your license." He smiles and hands you your brand new driver\'s license. Now all you need is a car…');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterSecretarialschool(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Secretarial Training</b></center>');
  scene.img('images/locations/city/industrial/community/secretary_instructor.jpg');
  if (((s as any).license ?? 0)?.['secretary'] === 1) {
    scene.text('You\'ve already got your secretarial certification!');
    scene.actions([
{ label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
    return;
  }
  if (((s as any).license ?? 0)?.['secretary_lastday'] === ((s as any).daystart ?? 0)) {
    scene.text('You\'ve had your lesson for today. Come back another day.');
  } else {
    if (((s as any).license ?? 0)?.['secretary_enrolled'] === 0) {
      if (qspFunc(s, 'money', 'can_afford', 15000) === 1) {
        scene.text('You enter a room and are greeted by a woman who looks at you with a welcoming smile. "Are you here for the lessons?"');
        scene.text('You nod and she quickly gives you the course details and a pamphlet to read.');
        scene.text('As you read the pamphlet, it tells you that the Secretarial certification courses teach you a wide range of basic secretary skills. From verbal and written communication skills, to time management and organization, to basic computer use and how to use Microsoft Office, Word, Power Point, and Excel, to typing, note taking, and how to use a file system. By the end of the course you should know the basics of all of those skills.');
        // TODO-QSP: dynamic text: 'Once you finish reading the pamphlet she tells you, "The basic course is 10 les...
        scene.text('Once you finish reading the pamphlet she tells you, "The basic course is 10 lessons, and the full set of courses costs 15000₽."');
        scene.actions([
          { label: 'Book a secretarial course ( [15000₽]...]', handler: (st: GameState) => {
    scene.text('You pay the money for the course and fill out the application paper. You can now attend secretary training once a day for 2 hours. You need to complete 10 training lessons to earn a certification.');
    scene.actions([
      { label: 'Pay for the course', handler: (st: GameState) => {
    ((st as any).license = (st as any).license ?? {})['secretary_enrolled'] = 1;
    qspGoto(st, 'city_commcenter', 'payments', 'secretarial course', '15000');
  } },
    ]);
  } },
        ]);
      } else {
        scene.text('You could take lessons here if you had sufficient funds with you.');
      }
    } else {
      if (((s as any).license ?? 0)?.['secretary_lessons'] >= 0  &&  ((s as any).license ?? 0)?.['secretary_lessons'] < 10) {
        scene.actions([
          { label: 'Secretarial class', handler: (st: GameState) => {
    ((st as any).license = (st as any).license ?? {})['secretary_lastday'] = ((st as any).daystart ?? 0);
    ((st as any).license = (st as any).license ?? {})['secretary_lessons'] = ((st as any).license['secretary_lessons'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/industrial/community/secretary_class.jpg');
    scene.text('You head into a classroom with many computers. Unsurprisingly, most students in this course are women. The teacher, a woman in a sharp office dress, enters the class and starts lecturing you on the intricacies of secretarial work and the basics of computer programs used in offices today.');
    if ((((st as any).cumloc ?? 0)[6] === 1  ||  ((st as any).cumloc ?? 0)[7] === 1)) {
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
      scene.text('You nervously shift around on your chair, trying to hide the semen stains on your clothes, but anything you do to remove or cover them only seems to make them more obvious. By the end of the class, you\'ve earned pitying or disgusted looks from just about everybody in the room, including the teacher.');
    }
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).license ?? 0)?.['secretary_lessons'] === 10) {
          scene.actions([
            { label: 'Secretarial certification', handler: (st: GameState) => {
    ((st as any).license = (st as any).license ?? {})['secretary_lastday'] = ((st as any).daystart ?? 0);
    ((st as any).license = (st as any).license ?? {})['secretary_lessons'] = 0;
    ((st as any).license = (st as any).license ?? {})['secretary_enrolled'] = 0;
    ((st as any).license = (st as any).license ?? {})['secretary'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/industrial/community/secretary_class.jpg');
    // TODO-QSP: dynamic text: "Congratulations, <<$pcs_nickname>>. It seems that you''ve earned your certifica...
    scene.text(`"Congratulations, ${((st as any).pcs_nickname ?? '')}. It seems that you've earned your certification," your instructor says.`);
    scene.text('She pulls a document out of her briefcase, fills in your name and signs it before sending you to reception with it.');
    scene.text('With the receptionist\'s signature and the community center\'s seal, you are now officially qualified for secretary work!');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterMasseuse(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/industrial/community/masseuse_training.jpg');
  if (((s as any).license ?? 0)?.['masseuse'] === 1) {
    scene.text('"Sorry, but we don\'t have any new classes to offer yet. You could speak to Xian at the Galleria\'s Beauty Bar if you\'re looking for work as she usually has openings for new staff," your instructor tells you.');
    return;
  }
  if (((s as any).license ?? 0)?.['masseuse_enrolled'] === 0) {
    if (qspFunc(s, 'money', 'can_afford', 10000) === 1) {
      scene.text('You enter a room and are greeted by a young woman who looks at you with a welcoming smile. "Are you here for the lessons?"');
      scene.text('You nod and she quickly gives you the course details and a pamphlet to read.');
      // TODO-QSP: 'The basic course is 10 lessons, and the full set of courses costs ' + $func('money', 'string_price'...
      scene.actions([
        { label: 'Pay for the course', handler: (st: GameState) => {
    ((st as any).license = (st as any).license ?? {})['masseuse_enrolled'] = 1;
    qspGoto(st, 'city_commcenter', 'payments', 'masseuse class', '10000');
  } },
      ]);
    } else {
      scene.text('You could take lessons here if you had sufficient funds with you.');
    }
  } else {
    if (((s as any).license ?? 0)?.['masseuse_lastday'] === ((s as any).daystart ?? 0)) {
      scene.text('You look around the empty room and realize you\'ve had your lesson today and the class instructor has left.');
    } else {
      if (((s as any).license ?? 0)?.['masseuse_lessons'] < 10) {
        scene.actions([
          { label: 'Masseuse class', handler: (st: GameState) => {
    ((st as any).license = (st as any).license ?? {})['masseuse_lastday'] = ((st as any).daystart ?? 0);
    ((st as any).license = (st as any).license ?? {})['masseuse_lessons'] = ((st as any).license['masseuse_lessons'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/industrial/community/masseuse_training.jpg');
    scene.text('You enter the room and see the tables laid out for your lesson. The instructor welcomes you and takes down your name. The next two hours are dedicated to reading detailed guides to how to relieve pain or tension in certain muscles and to putting these guides into practice with partners attending the course and some local students looking for a freebie.');
    if (((st as any).license ?? 0)?.['masseuse_lessons'] >= 10) {
      ((st as any).license = (st as any).license ?? {})['masseuse_enrolled'] = 0;
      ((st as any).license = (st as any).license ?? {})['masseuse'] = 1;
      scene.text('"Congratulations, that was your final lesson! You\'ve completed the basic course and are issued a certificate that shows you are a certified masseuse. This is your first step in providing a wonderful service to your clients," your instructor tells you.');
    }
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterSingingtutor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).license ?? 0)?.['singing_lastday'] === ((s as any).daystart ?? 0)) {
    scene.text('The classroom is empty, so you play on the piano for a few minutes before heading back to the hall. Maybe come back another time to see if there are more classes.');
  } else {
    if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 0) {
      scene.text('You see Alexei in the classroom, but you don\'t have enough cash to take a lesson.');
    } else {
      scene.text('The center offers singing lessons with Alexei, an established local singer and musician who works with up and coming talent. Unlike the center\'s other classes, he only ever accepts cash for his lessons.');
      scene.actions([
        { label: 'Singing lessons ( [500₽])...]', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).alexeyQW = ((st as any).alexeyQW ?? 0) + (1);
    qspCall(st, 'exp_gain', 'vokal', (Math.floor(Math.random() * 6) + 5));
    ((st as any).license = (st as any).license ?? {})['singing_lastday'] = ((st as any).daystart ?? 0);
    qspCall(st, 'money', 'pay', 500, 'cash');
    qspCall(st, 'stat', '');
    if (((st as any).alexeyQW ?? 0) === 1) {
      scene.text('When you enter the office, you see a middle aged man with long hair that\'s been pulled back into a ponytail. He gives you a confident look. "Are you here to learn how to sing, Miss?" he asks in a particularly well-modulated voice.');
      // TODO-QSP: dynamic text: 'You nod and hand him ' + $func('money', 'string_price', 500) + '.'
      scene.text('You nod and hand him 500₽.');
      scene.text('He pockets it and introduces himself. "I\'m Alexei, what is your name?"');
      scene.text('You tell him your name and he acknowledges your answer with little more than a nod before he immediately moves on to the lesson.');
      scene.text('Before you even notice, an hour has passed. You head out and the man politely wishes you goodbye.');
    } else {
      if (((st as any).alexeyQW ?? 0) === 2) {
        scene.text('You enter the small classroom eager to your lesson. Alexei is sitting at a piano and indicates you should sit on a chair next to it. He asks you to practice the scales as he plays each note on the piano. You quickly gain confidence and he touches your knee whenever you do well. ');
        scene.text('After an hour, you feel drained but feel that you have learned more about singing. "You have a good voice," Alexei says. "But you still need to practice breathing and control." He touches your breasts and throat as he says each word.');
        qspCall(st, 'arousal', 'foreplay', 15);
        qspCall(st, 'stat', '');
      } else {
        scene.text('You enter the small classroom, eager to start your next lesson. Alexei is sitting at his normal place by the piano and waves a hand towards your chair.');
        scene.text('He asks you to practice the warm up scales as he plays the notes on the piano. You\'re fairly accomplished now and quickly finish the warm up.');
        scene.text('Halfway through the lesson, Alexei gives you another music sheet to sing from and starts playing the piano while indicating you should start.');
        scene.text('After the lesson, you feel exhausted, but keen to attend your next lesson.');
      }
    }
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
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
    case 'secretarialschool':
      enterSecretarialschool(s, scene);
      break;
    case 'masseuse':
      enterMasseuse(s, scene);
      break;
    case 'singingtutor':
      enterSingingtutor(s, scene);
      break;
    default:
      enterDefault(s, scene);
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
