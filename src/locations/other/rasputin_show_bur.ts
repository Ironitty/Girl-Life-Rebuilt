import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) === 17  ||  (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 30)) {
    qspGoto(s, 'rasputin_show_bur', 'first_half');
  } else {
    qspGoto(s, 'rasputin_show_bur', 'second_half');
  }
  scene.build();
}

function enterFirstHalf(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/rasputin/rasputin_show_bur_1.jpg');
  scene.text('The staff lead you to your seat. No other patron has show up yet.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).rasputin = (st as any).rasputin ?? {})['burlesque_ticket'] = 1;
    qspGoto(st, 'rasputin_walkway', '');
  } },
    { label: 'Wait until show starts', goto: ['rasputin_show_bur', 'first_half_start'] },
    { label: 'Ask for a free champagne', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'drugs', 'alcohol', 'champagne');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/drinks_free_4.jpg');
    scene.text('The server smiles and hand you a glass of champagne to enjoy.');
    scene.actions([
      { label: 'Continue', goto: ['rasputin_show_bur', 'first_half_start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstHalfStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) === 17) {
    (s as any).minut = 90 - ((s as any).minut ?? 0);
  } else {
    (s as any).minut = 30 - ((s as any).minut ?? 0);
  }
  ((s as any).rasputin = (s as any).rasputin ?? {})['burlesque_ticket'] = 2;
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).track_loop = 'sound/rasputin/music_bur_1.mp3';
    (s as any).volume = 100;
    (s as any).music_loop = 1;
  }
  scene.img('images/locations/pushkin/rasputin/shows/singer_1.jpg');
  scene.text('The curtain slowly lifts as a female singer starts to sing, accompanied by the in house band.');
  scene.actions([
    { label: 'Okay', handler: (st: GameState) => {
    scene.img('images/locations/pushkin/rasputin/shows/bur_1/1.jpg');
    scene.text('The singer moves away and allow your eyes to focus on the three performer on the stage.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/shows/bur_1/2.jpg');
    scene.text('The dancers turn around and confidently flaunt their toned bodies wearing flashy burlesque costume.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/shows/bur_1/3.jpg');
    scene.text('The dancers stretch and keep their balance while perform on the chairs.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 25;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/shows/bur_1/4.jpg');
    scene.text('They follow the music and give an equally lighthearted, fun and teasing performance.');
    scene.text('The first part of the show finished, you walkout to take a break and stretch your legs.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'mood', 'raise', 'small');
    qspGoto(st, 'rasputin_walkway', '');
  } },
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
  scene.img('images/locations/pushkin/rasputin/rasputin_show_bur_2.jpg');
  scene.text('The staff lead you to your seat. Many people are already seated and waiting.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).rasputin = (st as any).rasputin ?? {})['burlesque_ticket'] = 2;
    qspGoto(st, 'rasputin_walkway', '');
  } },
    { label: 'Wait until show starts', goto: ['rasputin_show_bur', 'second_half_start'] },
    { label: 'Ask for a free champagne', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'drugs', 'alcohol', 'champagne');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/drinks_free_4.jpg');
    scene.text('The server smiles and hand you a glass of champagne to enjoy.');
    scene.actions([
      { label: 'Continue', goto: ['rasputin_show_bur', 'second_half_start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSecondHalfStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  ((s as any).rasputin = (s as any).rasputin ?? {})['burlesque_ticket'] = 0;
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).track_loop = 'sound/rasputin/music_bur_2.mp3';
    (s as any).volume = 100;
    (s as any).music_loop = 1;
  }
  scene.img('images/locations/pushkin/rasputin/shows/singer_1.jpg');
  scene.text('The stage relights as the dancers enter accompanied by the music.');
  scene.text('The second half of the burlesque show starts.');
  scene.actions([
    { label: 'Okay', handler: (st: GameState) => {
    scene.img('images/locations/pushkin/rasputin/shows/bur_1/5.jpg');
    scene.text('The dancers move around rhythmically and energetically. Their blue feather headdresses freely flowing.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/shows/bur_1/6.jpg');
    scene.text('As other music plays, other performers dance away allow you to focus on the lead dancer on the stage.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/shows/bur_1/7.jpg');
    scene.text('The lead dancer move seductively with the beats, both freely and confidently display her dance skills and sexuality.');
    scene.text('The audience goes wild by the end of her performance and react with thounderous appluses and catcallings.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/shows/bur_1/8.jpg');
    scene.text('The last part of show is champagne glass dance. You are mersmerized by the glamorous and the sexy movements of the performance.');
    scene.text('The burlesque show ends with a round of applause and excited chattering');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'small');
    if (((st as any).pcs_inhib ?? 0) >= 80) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 5) + 2));
    } else {
      if (((st as any).pcs_inhib ?? 0) >= 50  &&  ((st as any).pcs_inhib ?? 0) < 80) {
        (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
      }
    }
    qspCall(st, 'arousal', 'erotic', 15);
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'rasputin_walkway', '');
  } },
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

export const rasputin_show_bur: LocationDef = {
  name: 'rasputin_show_bur',
  title: 'The staff lead you to your seat. No other patron has show up',
  region: 'other',
  enter: enter,
};
