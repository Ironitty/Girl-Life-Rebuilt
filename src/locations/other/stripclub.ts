import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 3  &&  ((s as any).hour ?? 0) <= 17) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 3  &&  ((s as any).hour ?? 0) <= 17) {
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Strip Club</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 19  ||  ((s as any).hour ?? 0) <= 5) {
      scene.img('images/locations/city/redlight/stripclub/club_night_winter.jpg');
    } else {
      scene.img('images/locations/city/redlight/stripclub/club_day_winter.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) <= 5) {
      scene.img('images/locations/city/redlight/stripclub/club_night_summer.jpg');
    } else {
      scene.img('images/locations/city/redlight/stripclub/club_day_summer.jpg');
    }
  }
  if (((s as any).hour ?? 0) === 3) {
    scene.text('The strip club is closing, and the security guards are ushering everyone out.');
  } else {
    qspCall(s, 'stripclub', 'entry');
    if (((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed'  ||  ((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed') {
      qspCall(s, 'stripclub', 'employee_entrance');
    }
    if ((((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_strip_stripper') === 1)  ||  (((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_strip_bargirl') === 1)) {
      scene.text('The strip club is closed to the public, but employees can still enter through the back.');
      qspCall(s, 'stripclub', 'employee_entrance');
    } else {
      // TODO-QSP: dynamic text: The strip club is closed. The sign on the door states that business hours are be...
      scene.text('The strip club is closed. The sign on the door states that business hours are between \'+func(\'time\', \'get_time_string\', 18, 0)+\' and \'+func(\'time\', \'get_time_string\', 3, 0)+\'.');
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['city_redlight', 'start'] },
  ]);
  scene.build();
}

function enterEmployeeEntrance(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Head around to the back', handler: (st: GameState) => {
    if (((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed'  &&  qspFunc(s, 'jobs', 'has_booking_for_day', 'city_strip_stripper', ((s as any).daystart ?? 0))) {
      // TODO-QSP: dynamic text: "Evening, <<$pcs_strippername>>. Good crowd tonight," the bouncer says with a sm...
      scene.text(`"Evening, ${((s as any).pcs_strippername ?? 0)}. Good crowd tonight," the bouncer says with a smile.`);
      scene.text('You give him a quick nod as you head for the stripper entrance round back.');
      scene.actions([
        { label: 'Use the stripper\'s entrance', handler: (st: GameState) => {
    (st as any).frost = 0;
  }, goto: ['stwork', 'start'] },
      ]);
    } else {
      qspCall(s, 'jobs', 'get_shift_for_day', 'city_strip_bargirl', ((s as any).daystart ?? 0));
      if (qspFunc(s, 'jobs', 'is_arrival_time', 'city_strip_bargirl') === 1) {
        scene.text('"Good crowd. Should be a busy bar tonight," the bouncer says with a smile.');
        scene.text('You give him a nod as he stands aside and lets you enter.');
        scene.actions([
          { label: 'Head to the bar', handler: (st: GameState) => {
    (st as any).frost = 0;
  }, goto: ['stwork3', 'start'] },
        ]);
      } else {
        if (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0) < ((s as any).result_start ?? 0) + 60) {
          scene.text('"You\'re cutting it close. Get inside and get ready. Don\'t be surprised if some of your pay gets docked," the bouncer says with a frown.');
          // TODO-QSP: gs 'jobs', 'dock_pay', 'city_strip_bargirl', job_pay_rate['city_strip_bargirl'] / 3
          scene.text('You give him a nod as he stands aside and lets you enter.');
          scene.actions([
            { label: 'Head to the bar', handler: (st: GameState) => {
    (st as any).frost = 0;
  }, goto: ['stwork3', 'start'] },
          ]);
        } else {
          scene.text('"You\'re too late for your shift. Come back on your next scheduled night," the bouncer says while shaking his head.');
        }
        if (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0) < ((s as any).result_arrival ?? 0)) {
          // TODO-QSP: dynamic text: "Your shift isn't until later. Come back between '+func('time', 'get_time_string...
          scene.text('"Your shift isn\'t until later. Come back between \'+func(\'time\', \'get_time_string\', 17, 0)+\' and \'+func(\'time\', \'get_time_string\', 18, 0)+\'," the bouncer reminds you.');
        } else {
          scene.text('"You\'re too late for your shift. Come back on your next scheduled night," the bouncer says while shaking his head.');
        }
        if (((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed'  ||  ((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed') {
          scene.text('"Decided to pay us a visit on your night off?" the bouncer asks.');
          scene.text('You nod and he stands aside to let you in.');
          if (((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed') {
            scene.text('"I\'m sure the customers won\'t recognize you with clothes on," he says with a smile.');
            scene.actions([
              { label: 'Head over to the dressing room', goto: ['stwork', 'start'] },
            ]);
          }
          if (((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed') {
            scene.text('"Have fun spending the night on the other side of the bar," he says with a smile.');
          }
          scene.actions([
            { label: 'Enter the club', goto: ['stripclub', 'main_floor'] },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
      { label: 'Go back to the front', goto: ['stripclub', 'start'] },
    ]);
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
    case 'employee_entrance':
      enterEmployeeEntrance(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const stripclub: LocationDef = {
  name: 'stripclub',
  title: 'Strip Club',
  region: 'other',
  description: ['The strip club is closing, and the security guards are ushering everyone out.'],
  enter: enter,
};
