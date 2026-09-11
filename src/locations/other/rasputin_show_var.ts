import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) === 21) {
    scene.actions([{ label: 'Continue', goto: ['rasputin_show_var', 'first_half'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['rasputin_show_var', 'second_half'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstHalf(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/rasputin/rasputin_show_var_1.jpg');
  scene.text('The staff lead you to your seat. No other patrons have show up yet.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).rasputin ?? {})['variety_ticket'] = 1;
  }, goto: ['rasputin_walkway', ''] },
    { label: 'Wait until show starts', goto: ['rasputin_show_var', 'first_half_start'] },
    { label: 'Ask for a free champagne', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'drugs', 'alcohol', 'champagne');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/drinks_free_4.jpg');
    scene.text('The server smiles and hand you a glass of champagne to enjoy.');
    scene.actions([
      { label: 'Continue', goto: ['rasputin_show_var', 'first_half_start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstHalfStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  ((s as any).rasputin ?? {})['variety_ticket'] = 2;
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).volume = 100;
    (s as any).music_loop = 1;
  }
  scene.img('images/locations/pushkin/rasputin/shows/var_1/1.jpg');
  scene.text('The curtain slowly lifts as a group of dancers gracefully twirl onto the center.');
  scene.text('You find the combination of pop and fancy costumes interesting.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Okay', handler: (st: GameState) => {
    scene.img('images/locations/pushkin/rasputin/shows/var_1/2.jpg');
    scene.text('The dancers move along with music with well rehearsed choreography.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/shows/var_1/3.jpg');
    scene.text('While the audience enjoys, the dancers in red move behind and you can see them help to undid the tops of the dancers in black.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/shows/var_1/4.jpg');
    scene.text('A dancer in black costume raise her arms and display her topless body to entice audience further with a perfect blend of');
    scene.text('artistry and femininity.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/shows/var_1/5.jpg');
    scene.text('The rest of the group soon joining in and the audience around you goes wild in excitement.');
    scene.text('The first half of the show end in with catcallings and even some loud proclamations of lewd kind.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'mood', 'raise', 'small');
  }, goto: ['rasputin_walkway', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSecondHalf(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/rasputin/shows/var_1/1.jpg');
  scene.text('The staff leads you to your seat. Many people are already seated and waiting.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).rasputin ?? {})['variety_ticket'] = 2;
  }, goto: ['rasputin_walkway', ''] },
    { label: 'Wait until show starts', goto: ['rasputin_show_var', 'second_half_start'] },
    { label: 'Ask for a free champagne', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'drugs', 'alcohol', 'champagne');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/drinks_free_4.jpg');
    scene.text('The server smiles and hand you a glass of champagne to enjoy.');
    scene.actions([
      { label: 'Continue', goto: ['rasputin_show_var', 'second_half_start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSecondHalfStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  ((s as any).rasputin ?? {})['variety_ticket'] = 0;
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).volume = 100;
    (s as any).music_loop = 1;
  }
  scene.img('images/locations/pushkin/rasputin/shows/var_1/6.jpg');
  scene.text('The second half of the burlesque show starts.');
  scene.text('The stage relights as the dancers emerge from the mist effect.');
  scene.text('Their costumes are much more daring and bold compare to first half.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Okay', handler: (st: GameState) => {
    scene.img('images/locations/pushkin/rasputin/shows/var_1/7.jpg');
    scene.text('The dancers move sensually and seductively and entice the entire audience.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/shows/var_1/8.jpg');
    scene.text('The dancers\' use a chair as a pivot and perform, gradually undo each other\'s top.');
    scene.text('The playful and teasing movement soon have the undivided attention of the audience.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/shows/var_1/9.jpg');
    scene.text('The dancers take turn crouching down and remove their underwear, give the audience peak-a-boo at their crotches.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/shows/var_1/10.jpg');
    scene.text('The dances continue to perform and their naked flesh covered only by a thin piece of mesh.');
    scene.text('The second half the erotic variety show has finished.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'small');
    if (((s as any).pcs_inhib ?? 0) >= 80) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 5) + 2);
    } else {
      if (((s as any).pcs_inhib ?? 0) >= 50  &&  ((s as any).pcs_inhib ?? 0) < 80) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
      }
    }
    qspCall(s, 'arousal', 'erotic', 15);
    qspCall(s, 'arousal', 'end');
  }, goto: ['rasputin_walkway', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'first_half':
      enterFirstHalf(s, scene);
      break;
    case 'first_half_start':
      enterFirstHalfStart(s, scene);
      break;
    case 'second_half':
      enterSecondHalf(s, scene);
      break;
    case 'second_half_start':
      enterSecondHalfStart(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const rasputin_show_var: LocationDef = {
  name: 'rasputin_show_var',
  title: 'The staff lead you to your seat. No other patrons have show ',
  region: 'other',
  enter: enter,
};
