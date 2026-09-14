import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEnquiry(s: GameState, scene: SceneBuilder): void {
  if (((s as any).age ?? 0) < 18) {
    if (!(s as any).ml_guitarlesson) (s as any).ml_guitarlesson = {}; (s as any).ml_guitarlesson['lessoncost'] = 300;
  } else {
    if (!(s as any).ml_guitarlesson) (s as any).ml_guitarlesson = {}; (s as any).ml_guitarlesson['lessoncost'] = 500;
  }
  scene.text('You follow the directions from the receptionist and reach the room where the guitar lessons take place.');
  scene.text('The door is half open, and peeking in you see a dark haired man in his thirties sitting at a table, scribbling in a note book.');
  scene.text('"Uhm, hi, I\'m looking for the guitar lessons?" you call out as you step into the room.');
  scene.text('The man looks up, then smiles as he sees you "Please, come in. I\'m Viktor Zenchuk, and yes, this is where I teach guitar. Would you be interested?"');
  // TODO-QSP: dynamic text: You shift on your feet "I'm <<$pcs_firstname>>, and yes, I think. Can you please...
  scene.text(`You shift on your feet "I'm ${((s as any).pcs_firstname || '')}, and yes, I think. Can you please tell me a bit more?"`);
  scene.text(' "Sure. I assume you are a beginner…" he looks at you, and you nod "Then obviously we would start at the basics. The instrument, chords, some basic theory. We would meet once a week, here.');
  // TODO-QSP: dynamic text: If you have a guitar, that's great, if not, you can use mine. But you will reall...
  scene.text(`If you have a guitar, that's great, if not, you can use mine. But you will really need to get a guitar to practice at home. The lessons cost ${qspFunc(s, 'money', 'string_price', 500)}, but if you are under 18' +iif(vidage < 18, ', which I assume you are,', ')+ ' then it's only ${qspFunc(s, 'money', 'string_price', 300)}."`);
  // TODO-QSP: dynamic text: He looks at you "So, <<$pcs_firstname>>, do you think you would be interested in...
  scene.text(`He looks at you "So, ${((s as any).pcs_firstname || '')}, do you think you would be interested in taking lessons?"`);
  qspCall(s, 'npc_relationship', 'set', 'ML1', 45);
  if (!(s as any).ml_guitarlesson) (s as any).ml_guitarlesson = {}; (s as any).ml_guitarlesson['enquired'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Sign up', handler: (st: GameState) => {
    scene.text('You nod "Yes, I really would like to learn to play the guitar. When can we start?"');
    scene.text('The teacher pushes the book closer to you "I will need your name here, and the school and class you attend, and also, I need to see your passport, to confirm you are under 18." You write down the information, and show him your passport.');
    scene.text('"Eccellent, now, what day would you like to come for your first lesson?"');
    scene.text('Select your next lesson');
    scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 1 & $ml_guitarlesson[\'lessonday\'] = \'Monday\' & gt \'music_guitarlesson\', \'goodbye\'">Monday</a>');
    scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 2 & $ml_guitarlesson[\'lessonday\'] = \'Tuesday\' & gt \'music_guitarlesson\', \'goodbye\'">Tuesday</a>');
    scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 3 & $ml_guitarlesson[\'lessonday\'] = \'Wednesday\' & gt \'music_guitarlesson\', \'goodbye\'">Wednesday</a>');
    scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 4 & $ml_guitarlesson[\'lessonday\'] = \'Thursday\' & gt \'music_guitarlesson\', \'goodbye\'">Thursday</a>');
    scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 5 & $ml_guitarlesson[\'lessonday\'] = \'Friday\' & gt \'music_guitarlesson\', \'goodbye\'">Friday</a>');
    scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 6 & $ml_guitarlesson[\'lessonday\'] = \'Saturday\' & gt \'music_guitarlesson\', \'goodbye\'">Saturday</a>');
    scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 8 & $ml_guitarlesson[\'lessonday\'] = \'None\' & gt \'music_guitarlesson\', \'goodbye\'">You don\'t know yet</a>');
  } },
    { label: 'You have to think', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You hesitate for a moment "I would be, but I have to talk with my <<$npc_nicknam...
    scene.text(`You hesitate for a moment "I would be, but I have to talk with my ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} first."`);
    // TODO-QSP: dynamic text: The teacher nods "That's understandable. Just come in when you know and we can s...
    scene.text(`The teacher nods "That's understandable. Just come in when you know and we can set up the lesson" He smiles at you "It was a pleasure to meet you, ${((s as any).pcs_firstname || '')}, and I'm looking forward to seeing you again."`);
    scene.actions([
      { label: 'Leave', goto: ['pav_commclubs', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetlessonday(s: GameState, scene: SceneBuilder): void {
  scene.text('You meet the teacher and agree on your next lesson.');
  scene.text('Select your next lesson');
  scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 1 & $ml_guitarlesson[\'lessonday\'] = \'Monday\' & gt \'music_guitarlesson\', \'goodbye\'">Monday</a>');
  scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 2 & $ml_guitarlesson[\'lessonday\'] = \'Tuesday\' & gt \'music_guitarlesson\', \'goodbye\'">Tuesday</a>');
  scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 3 & $ml_guitarlesson[\'lessonday\'] = \'Wednesday\' & gt \'music_guitarlesson\', \'goodbye\'">Wednesday</a>');
  scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 4 & $ml_guitarlesson[\'lessonday\'] = \'Thursday\' & gt \'music_guitarlesson\', \'goodbye\'">Thursday</a>');
  scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 5 & $ml_guitarlesson[\'lessonday\'] = \'Friday\' & gt \'music_guitarlesson\', \'goodbye\'">Friday</a>');
  scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 6 & $ml_guitarlesson[\'lessonday\'] = \'Saturday\' & gt \'music_guitarlesson\', \'goodbye\'">Saturday</a>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t arrange a lesson day', goto: ['pav_commclubs', ''] },
  ]);
  scene.build();
}

function enterFirstLesson(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['music_guitarlesson', 'lesson'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterLesson(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', ml_guitarlesson['lessoncost']
  if (!(s as any).ml_guitarlesson) (s as any).ml_guitarlesson = {}; (s as any).ml_guitarlesson['nextlesson'] = 0;
  if (!(s as any).ml_guitarlesson) (s as any).ml_guitarlesson = {}; (s as any).ml_guitarlesson['lessoncount'] = ((s as any).ml_guitarlesson['lessoncount'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  qspCall(s, 'npc_relationship', 'modify', 'ML1', 1);
  scene.img('images/locations/pavlovsk/community/guitarlesson/guitarteach_\'+ rand(1, 2) +\'.jpg');
  if (((s as any).pcs_instrmusic ?? 0) < 15) {
    qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 3) + 1);
    scene.text('You spend the next 45 minutes learning the basics of the guitar and some chords. At the end of the lesson your fingers and hands hurt, but you feel that you have learned a lot.');
  } else {
    qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 3) + 1);
    scene.text('You spend the next 45 minutes working on songs you have learned and improving some specific techniques.');
  }
  scene.text('Select your next lesson');
  scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 1 & $ml_guitarlesson[\'lessonday\'] = \'Monday\' & gt \'music_guitarlesson\', \'goodbye\'">Monday</a>');
  scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 2 & $ml_guitarlesson[\'lessonday\'] = \'Tuesday\' & gt \'music_guitarlesson\', \'goodbye\'">Tuesday</a>');
  scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 3 & $ml_guitarlesson[\'lessonday\'] = \'Wednesday\' & gt \'music_guitarlesson\', \'goodbye\'">Wednesday</a>');
  scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 4 & $ml_guitarlesson[\'lessonday\'] = \'Thursday\' & gt \'music_guitarlesson\', \'goodbye\'">Thursday</a>');
  scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 5 & $ml_guitarlesson[\'lessonday\'] = \'Friday\' & gt \'music_guitarlesson\', \'goodbye\'">Friday</a>');
  scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 6 & $ml_guitarlesson[\'lessonday\'] = \'Saturday\' & gt \'music_guitarlesson\', \'goodbye\'">Saturday</a>');
  scene.text('<a href="exec: ml_guitarlesson[\'lessonday\'] = 8 & $ml_guitarlesson[\'lessonday\'] = \'None\' & gt \'music_guitarlesson\', \'goodbye\'">You don\'t know yet</a>');
  // TODO-QSP: end
  scene.build();
}

function enterGoodbye(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).ml_guitarlesson) (s as any).ml_guitarlesson = {}; (s as any).ml_guitarlesson['nextlesson'] = ((s as any).daystart ?? 0) + ((((s as any).ml_guitarlesson ?? {})?.['lessonday'] ?? 0) + 7 - ((s as any).week ?? 0));
  if (!(s as any).ml_guitarlesson) (s as any).ml_guitarlesson = {}; (s as any).ml_guitarlesson['lessonhour'] = 15;
  if (((s as any).ml_guitarlesson ?? 0)?.['lessonday'] < 8) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetdate(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: You agree to meet for your next lesson on <<$ml_guitarlesson['lessonday']>> at <...
    scene.text(`You agree to meet for your next lesson on ${((s as any).ml_guitarlesson ?? 0)?.['lessonday'] ?? ''} at ${((s as any).ml_guitarlesson ?? 0)?.['lessonhour'] ?? ''}:00 next week, on ${((s as any).newday || '')}/${((s as any).newmonth || '')}. The teacher enters it in the diary and you say goodbye before you leave.`);
    qspCall(s, 'calendar', 'add', 'guitar_lesson');
  } else {
    scene.text('You are not sure when it would be a good day right now, so you agree to decide on a day later, you say goodbye and leave.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_commclubs', ''] },
  ]);
  scene.build();
}

function enterAdvertisement(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).ml_guitarlesson) (s as any).ml_guitarlesson = {}; (s as any).ml_guitarlesson['advertisement'] = 1;
  scene.text('<center>As you pass by the community center door you see a new colour note screaming "Guitar Lessons!" in bright letters over the image of a guitar.<center>');
  scene.img('images/locations/shared/noticeboards/pav/flyer_music_guitar.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_commcenter', ''] },
  ]);
  scene.build();
}

function enterGetdate(s: GameState, scene: SceneBuilder): void {
  (s as any).newday = ((s as any).day ?? 0) + ((((s as any).ml_guitarlesson ?? {})?.['lessonday'] ?? 0) + 7 - ((s as any).week ?? 0));
  (s as any).newmonth = ((s as any).month ?? 0);
  if ((((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 3  ||  ((s as any).month ?? 0) === 5  ||  ((s as any).month ?? 0) === 7  ||  ((s as any).month ?? 0) === 8  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 12)  &&  ((s as any).newday ?? 0) > 31) {
    (s as any).newday = ((s as any).newday ?? 0) - (31);
  } else {
    if (((s as any).month ?? 0) === 2) {
      if ((((s as any).year ?? 0) % 4 === 0)) {
        if (((s as any).newday ?? 0) > 29) {
          (s as any).newday = ((s as any).newday ?? 0) - (29);
          (s as any).newmonth = ((s as any).newmonth ?? 0) + (1);
        }
      } else {
        if (((s as any).newday ?? 0) > 28) {
          (s as any).newday = ((s as any).newday ?? 0) - (28);
          (s as any).newmonth = ((s as any).newmonth ?? 0) + (1);
        }
      }
    } else {
      if (((s as any).newday ?? 0) > 30) {
        (s as any).newday = ((s as any).newday ?? 0) - (30);
        (s as any).newmonth = ((s as any).newmonth ?? 0) + (1);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'enquiry':
      enterEnquiry(s, scene);
      break;
    case 'setlessonday':
      enterSetlessonday(s, scene);
      break;
    case 'firstLesson':
      enterFirstLesson(s, scene);
      break;
    case 'lesson':
      enterLesson(s, scene);
      break;
    case 'goodbye':
      enterGoodbye(s, scene);
      break;
    case 'advertisement':
      enterAdvertisement(s, scene);
      break;
    case 'getdate':
      enterGetdate(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const music_guitarlesson: LocationDef = {
  name: 'music_guitarlesson',
  title: 'You follow the directions from the receptionist and reach th',
  region: 'other',
  enter: enter,
};
