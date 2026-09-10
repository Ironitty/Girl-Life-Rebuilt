import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).kafe_food = (((s as any).pcs_ate ?? 0) + ((s as any).pcs_drank ?? 0));
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'kit_din', '');
  scene.text('<center><b>The Roadhouse</b></center>');
  scene.img('images/locations/city/residential/cafe/kafe.jpg');
  scene.text('The Roadhouse is decorated with bright neon signs, pictures of flashy American muscle cars and pop art. There\'s even the body of an old pink Cadillac hanging from the ceiling, like something from an old American TV show.');
  scene.text('Although it looks small and cramped from the outside, the Roadhouse is surprisingly spacious inside, managing to fit a well-stocked bar and a moderately-sized dining area alongside several private booths tucked away in the corners.');
  scene.text('A large, flashy jukebox features popular hits from the 50s through to the 80s, mostly American and British, but with a sprinkling of songs from other European countries. They serve American style meals.');
  if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === '') {
    scene.text('You see the middle-aged owner of the diner sitting at the end of the bar, engrossed in paperwork.');
  } else {
    scene.text('You see Fabi sitting at one end of the bar, engrossed in paperwork.');
    if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_cafe_waitress') === 1) {
      scene.text('There is a bustle of activity in the diner as Fabi notes in the log that you arrived for work on time, Ashot and Nika ready the kitchen for the day and Marisha bustles from table to table making sure everything is ready to receive patrons.');
    } else {
      scene.text('You see Fabi sitting at one end of the bar, engrossed in paperwork.');
    }
    if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === ''  &&  (qspFunc(s, 'jobs', 'check_employment_possible', 'city_cafe_waitress') === 1)) {
      scene.actions([
        { label: 'Talk to the owner about a job', goto: ['city_kafe', 'fabi'] },
      ]);
    } else {
      if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_cafe_waitress') === 1) {
        scene.actions([
          { label: 'Start your shift', goto: ['city_kafe', 'work'] },
        ]);
      } else {
        scene.actions([
          { label: 'Talk to Fabi', goto: ['city_kafe', 'fabi2'] },
        ]);
      }
      scene.actions([
        { label: 'Talk to Fabi about getting your old job back', goto: ['city_kafe', 'old_job'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      { label: 'Sit at a table', goto: ['city_kafe', 'table'] },
    ]);
  }
  scene.build();
}

export const city_kafe: LocationDef = {
  name: 'city_kafe',
  title: 'The Roadhouse',
  region: 'city',
  locationType: 'event',
  description: ['The Roadhouse is decorated with bright neon signs, pictures of flashy American muscle cars and pop art. There\'s even the body of an old pink Cadillac hanging from the ceiling, like something from an old American TV show.'],
  enter: enter,
};
