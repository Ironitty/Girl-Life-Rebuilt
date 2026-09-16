import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_industrial', '');
  (s as any).region = 'pav';
  (s as any).location_type = 'public_outdoors';
  (s as any).alkoblock = 0;
  (s as any).boynumBlock = 0;
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) <= 3  ||  ((s as any).month ?? 0) >= 11) {
      if (((s as any).hour ?? 0) >= 8) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8) {
      }
    }
  }
  qspCall(s, 'random_events', '');
  scene.text('<center><h2>Pavlovsk Industrial District</h2></center>');
  scene.img('images/locations/pavlovsk/factory/pav_factory.jpg');
  scene.text('This is the Industrial region of Pavlovsk. It houses some factories and warehouses, along with the old houses that are small and run down.');
  scene.text('This area is dominated by one of the biggest employers in Pavlovsk, the local textile factory. It\'s owned by G&M, who opened up a store opposite.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).week ?? 0) >= 1  &&  ((s as any).week ?? 0) <= 5) {
    // TODO-QSP: dynamic text: Behind the security checkpoint, you can see the <a href="exec:minut += 5 & gt 'p...
    scene.text('Behind the security checkpoint, you can see the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(\\u0027pav_factory\\u0027, \\u0027enter\\u0027); return false;">entrance</a> that every employee passes through.');
  } else {
    if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20  ||  ((s as any).week ?? 0) > 5) {
      scene.text('The factory is currently closed.');
    }
  }
  scene.text('Opening hours are Monday through Friday:');
  // TODO-QSP: dynamic text: First shift - '+func('time', 'get_time_string', 8, 0)+' to '+func('time', 'get_t...
  scene.text('First shift - 8:00 to 16:00');
  // TODO-QSP: dynamic text: Second shift - '+func('time', 'get_time_string', 16, 0)+' to '+func('time', 'get...
  scene.text('Second shift - 16:00 to 20:00');
  // TODO-QSP: dynamic text: In a smaller building right next to the factory is the local '+iif(week < 7 and ...
  scene.text('In a smaller building right next to the factory is the local \'+iif(week < 7 and hour >= 8 and hour < 18, \'<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027pav_factory\\u0027, \\u0027tailor\\u0027); return false;">tailor</a>\', \'tailor\')+\' shop, a service offered by the factory. Opening hours are Monday to Saturday, between 8:00 to 17:00.');
  if (((((s as any).month ?? 0) === 9  &&  ((s as any).day ?? 0) > 16)  ||  ((s as any).month ?? 0) >= 10)  &&  (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  ||  ((s as any).AlbinaQW ?? 0)?.['Chernov'] === 0)) {
    scene.text('You can see election posters on the walls all over town. They say: "Vote for Boris Barlovsky!" Wait a minute… isn\'t that Albina\'s father?');
  }
  if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0  &&  ((s as any).AlbinaQW ?? 0)?.['Chernov'] === 0  &&  ((((s as any).month ?? 0) === 11  &&  ((s as any).day ?? 0) > 18)  ||  ((s as any).month ?? 0) === 12)  &&  ((s as any).hour ?? 0) >= 14) {
    qspGoto(s, 'albina_election_events', 'start');
  }
  if ((Math.floor(Math.random() * 5) + 1) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 100) {
    if (((s as any).fame ?? 0)?.['pav_slut'] < 150) {
      scene.text('<br>You catch people staring at you intently, as if they\'re supposed to know who you are but can\'t quite remember why. You sincerely hope they don\'t realize your promiscuous adventures are the reason why. The occasional person chuckling and pointing at you crushes those hopes, and you quickly keep walking before they get a chance to say anything.');
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        scene.text('<br>People look at you with lewd grins on their faces, some of them even making vulgar gestures. Looks like they know what you\'ve been up to.');
      } else {
        scene.text('<br>Everywhere you go, people recognize you as a whore. Some even come over and slap you on the ass, claiming they know you like it when they do, or claiming they want to sample your goods. An elderly woman sitting on a bench calls out to you, loudly calling you a slut and a whore. You hide your face and run away as fast as you can, before she can draw too much attention to you.');
      }
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: Your <a href="exec:gs 'carF', 'start'"><<$car['name']>></a> is parked in the str...
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027carF\\u0027, \\u0027start\\u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> is parked in the street.`);
  }
  if (((s as any).week ?? 0) < 7  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
  }
  if (((s as any).week ?? 0) < 7  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
    scene.actions([
      { label: 'Visit the tailor', goto: ['pav_factory', 'tailor'] },
    ]);
  } else {
    scene.text('<br>The tailor is closed right now.');
  }
  qspCall(s, 'lover', 'lover_events');
  if (((s as any).npc_QW ?? 0)?.['A113'] === 1  &&  ((s as any).daybelisex ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 9) {
    if (((s as any).week ?? 0) === 7) {
      (s as any).daybelisex = ((s as any).daystart ?? 0);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/vadim/belyjeep.jpg');
      scene.text('As you walk through Pavlovsk, Vadim Belys Mitsubishi Pajero stops near you.');
      scene.actions([
        { label: 'Go to the jeep', goto: ['belgang', 'payday'] },
      ]);
    } else {
      if (((s as any).belgangPayWeek ?? 0) >= 300  &&  ((s as any).belgangProstitute ?? 0) === 1  &&  (!(Math.floor(Math.random() * 3) + 0))) {
        (s as any).daybelisex = ((s as any).daystart ?? 0);
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.img('images/characters/pavlovsk/vadim/belyjeep.jpg');
        scene.text('You see the by now familiar old Mitsubishi Pajero driving through the streets with Vadim Bely and his gang. Your heart skips a beat as you notice one of them pointing at you, and soon they pull over.');
        scene.actions([
          { label: 'Go to the jeep', goto: ['belgang', 'workofdebt'] },
        ]);
      }
    }
  }
  qspCall(s, 'prostitution_functions', 'check_solicitation_event');
  scene.actions([
    { label: 'Walk to the Five Eight estate (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_complex', 'start'] },
    { label: 'Walk to the Residential area (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    { label: 'Walk to the Commercial area (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_commercial', ''] },
    { label: 'Walk to the Market (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_market', ''] },
    { label: 'Walk to the train station (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_train_hall', ''] },
    { label: 'Walk to the highway (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '20'] },
    { label: 'Walk to Pushkin (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['pushkin', ''] },
  ]);
  scene.build();
}

export const pav_industrial: LocationDef = {
  name: 'pav_industrial',
  title: '<center><h2>Pavlovsk Industrial District</h2></center>',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  description: ['This is the Industrial region of Pavlovsk. It houses some factories and warehouses, along with the old houses that are small and run down.'],
  enter: enter,
};
