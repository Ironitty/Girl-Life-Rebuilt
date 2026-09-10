import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).date_ev['ticket_cost'] = 100;
  qspCall(s, 'date_movie', 'init');
  if (((s as any).region ?? 0) === 'pav') {
    (s as any).date_ev['loc'] = 'pav_cinema';
    (s as any).date_ev['cinema_pic'] = '<center><img <<$set_imgh>> src="images/locations/pavlovsk/park/theater/kinoteatr.jpg"></center>';
    scene.actions([{ label: 'Continue', goto: ['date_movie', 'pav_cinema'] }]);
  } else {
    (s as any).date_ev['loc'] = 'city_cinema';
    (s as any).date_ev['cinema_pic'] = '<center><img <<$set_imgh>> src="images/locations/shared/cinema/theaterbuy.jpg"></center>';
    scene.actions([{ label: 'Continue', goto: ['date_movie', 'city_cinema'] }]);
  }
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  (s as any).date_ev['at_home'] = 0;
  (s as any).date_ev['type'] = 'cinema_date';
  // TODO-QSP: $date_ev[''] = 'cinema_date'
  (s as any).date_ev['activity_count'] = ((s as any).date_ev['activity_count'] ?? 0) + (1);
  qspCall(s, 'npcStat', '', ((s as any).temp_npcID ?? 0));
  scene.build();
}

function enterPavCinema(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $date_ev['cinema_pic']
  // TODO-QSP: dynamic text: You walk with <<$npcdesc>> to the cinema in the park to see what's playing.
  scene.text(`You walk with ${((s as any).npcdesc ?? 0)} to the cinema in the park to see what's playing.`);
  (s as any).temp_rand = Math.floor(Math.random() * 20) + 0;
  if (((s as any).temp_rand ?? 0) < 10) {
    (s as any).date_ev['film_suggest'] = 'superhero';
    scene.text('It\'s so small that there\'s only one screen showing the same movie all day. In this case, the latest generic superhero movie.');
  } else {
    (s as any).date_ev['film_suggest'] = 'action';
    scene.text('It\'s so small that there\'s only one screen showing the same movie all day. In this case, the latest blockbuster action flick.');
    if (((s as any).temp_rand ?? 0) === 15) {
      (s as any).date_ev['film_suggest'] = 'comedy';
      scene.text('It\'s so small that there\'s only one screen showing the same movie all day. Surprisingly, it seems to be playing a comedy today.');
    } else {
      (s as any).date_ev['film_suggest'] = 'raunchy_comedy';
      scene.text('It\'s so small that there\'s only one screen showing the same movie all day. Surprisingly, it seems to be playing a comedy today. Looks raunchy and vulgar though, the kind of movie with lots of nudity and crude sex jokes.');
      if (((s as any).temp_rand ?? 0) === 17) {
        (s as any).date_ev['film_suggest'] = 'horror';
        scene.text('It\'s so small that there\'s only one screen showing the same movie all day. But instead of the usual superhero movie, it looks like there\'s a horror film on today.');
      } else {
        (s as any).date_ev['film_suggest'] = 'drama';
        scene.text('It\'s so small that there\'s only one screen showing the same movie all day. It looks like there\'s an award winning drama playing today.');
        (s as any).date_ev['film_suggest'] = 'romance';
        scene.text('It\'s so small that there\'s only one screen showing the same movie all day. It looks like there\'s a romance movie on today.');
      }
      // TODO-QSP: xgt 'date_movie', 'what_to_watch_pav'
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
    case 'init':
      enterInit(s, scene);
      break;
    case 'pav_cinema':
      enterPavCinema(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const date_movie: LocationDef = {
  name: 'date_movie',
  title: 'You are too broke to afford this.',
  region: 'other',
  enter: enter,
};
