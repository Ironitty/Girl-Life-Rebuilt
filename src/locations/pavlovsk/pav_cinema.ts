import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_cinema', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/pavlovsk/park/theater/kinoteatr.jpg');
  scene.text('\'Small cinema in which there is just one small screen. A movie ticket costs 100₽.\'');
  scene.actions([
    { label: 'Leave the cinema', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_park', 'start'] },
    { label: 'Go to the movies', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'pav_cinema', 'watch_film');
    }
  } },
  ]);
  scene.build();
}

function enterWatchFilm(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 100);
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'mood', 'raise', (Math.floor(Math.random() * 21) + 30));
  scene.img('images/locations/pavlovsk/park/theater/watchmovie.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 100  &&  (Math.floor(Math.random() * 3) + 0) > 0) {
    scene.text('As you are watching the film a guy sits next to you and whispers in your ear, "Everyone knows you like to suck cock, I\'ll pay you if you have a go on this."');
    scene.text('It\'s dark, but you can just about see well enough to see that he is pointing at his dick.');
    scene.actions([
{ label: 'Refuse', handler: (st: GameState) => {
    scene.text('You tell him you\'d rather watch the film, he mutters something that sounded like bitch and leaves you to watch the rest of the movie in peace.');
    scene.actions([
      { label: 'Leave the cinema', goto: ['pav_park', 'start'] },
    ]);
  } },
{ label: 'Agree', goto: ['gevent', '2'] },
]);
    return;
  }
  if ((Math.floor(Math.random() * 100) + 0) < 90) {
    scene.text('You quietly watch the film.');
  } else {
    scene.text('You quietly watch the movie, but suddenly there is a strange sound behind you.');
    scene.actions([
      { label: 'Turn around and look', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/theater/sex/kino.mp4');
    scene.text('You see on the back row a girl sucking a guy, nobody reacts to the loud smacking sound that can be heard by the whole cinema.');
    scene.text('You turn back and watch the rest of the film.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the cinema', goto: ['pav_park', 'start'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave the cinema', goto: ['pav_park', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'watch_film':
      enterWatchFilm(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_cinema: LocationDef = {
  name: 'pav_cinema',
  title: 'As you are watching the film a guy sits next to you and whis',
  region: 'pavlovsk',
  enter: enter,
};
