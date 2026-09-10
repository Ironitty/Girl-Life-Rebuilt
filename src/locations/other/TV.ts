import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).elektro = ((s as any).elektro ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/telek.jpg');
  scene.text('You turn on the TV and settle comfortably on the couch.');
  if (((s as any).mc_inventory ?? 0)?.['tech_tv'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['plasma_tv'] === 0) {
    scene.text('Your ancient TV slowly warms up with a soft buzzing sound. After a moment, the screen flickers to life showing some advertisements. The sound crackles through the aging speakers.');
  } else {
    scene.text('Your huge plasma TV instantly comes to life with vibrant colors and crystal-clear sound. The high-definition picture makes even the advertisements look impressive.');
  }
  if ((!((s as any).kabel ?? 0))) {
    scene.text('Without cable service, you only have access to a single channel that cycles between advertisements and basic news updates. The limited options are disappointing, but it\'s better than nothing.');
    scene.actions([
      { label: 'Watch TV (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['TV', 'nokable'] },
    ]);
  } else {
    scene.text('With your cable subscription, you have access to dozens of channels with varied programming.');
    scene.actions([
      { label: 'Watch TV (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['TV', 'kable'] },
    ]);
  }
  if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    scene.text('Sometimes while watching TV, you catch glimpses of your reflection in the screen during darker scenes. Each time you notice your feminine legs or chest, a wave of shock passes through you. The reality that your body is now that of a woman still feels surreal.');
  }
  scene.actions([
    { label: 'Turn off the TV and get up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterNokable(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).elektro = ((s as any).elektro ?? 0) + (3);
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/telek.jpg');
  scene.text('You watch the network channel while lounging on the couch. The programming consists primarily of old reruns and painfully enthusiastic infomercials trying to sell products nobody needs. Despite the poor entertainment value, it provides a mindless distraction.');
  if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    scene.text('Sometimes while watching TV, you catch glimpses of your reflection in the screen during darker scenes. Each time you notice your feminine legs or chest, a wave of shock passes through you. The reality that your body is now that of a woman still feels surreal.');
  }
  scene.actions([
    { label: 'Continue watching (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['TV', 'nokable'] },
    { label: 'Turn off TV and get up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterKable(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).elektro = ((s as any).elektro ?? 0) + (3);
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/telek.jpg');
  scene.text('You browse through the cable channels, finding something interesting to watch. With so many options available, there\'s always something entertaining on - from movies and series to documentaries and reality shows. The quality programming helps you relax and unwind.');
  if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    scene.text('Sometimes while watching TV, you catch glimpses of your reflection in the screen during darker scenes. Each time you notice your feminine legs or chest, a wave of shock passes through you. The reality that your body is now that of a woman still feels surreal.');
  }
  scene.actions([
    { label: 'Continue watching (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['TV', 'kable'] },
    { label: 'Turn off the TV and get up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPav(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).tvtime ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).tvtime = 1;
    qspCall(s, 'stat', '');
    if (((s as any).locat ?? 0)?.['Mother'] === 24  &&  ((s as any).loc ?? 0) === 'sitrPar') {
      scene.actions([{ label: 'Continue', goto: ['sitrPar', 'mom_floor_sweeping'] }]);
    } else {
      scene.img('images/locations/gadukino/grandparents/tv/oldtvon.mp4');
      scene.text('<a href="exec:gt \'brother\', \'start\'">Kolka</a> is sleeping soundly on the sofa. You can\'t watch TV without disturbing him.');
      scene.img('images/locations/gadukino/grandparents/tv/oldtvon.mp4');
      scene.text('You turn on the ancient television and make yourself comfortable on the couch. The set takes its time warming up - first a tiny white dot appears in the center, which gradually expands into a fuzzy black and white image. The picture scrolls up and down erratically for several moments before finally stabilizing with a soft hum.');
      scene.actions([
        { label: 'Do something else', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        { label: 'Continue', goto: ['TV', 'pav'] },
      ]);
    }
  } else {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    if (((s as any).locat ?? 0)?.['Mother'] === 24  &&  ((s as any).loc ?? 0) === 'sitrPar') {
      scene.actions([{ label: 'Continue', goto: ['sitrPar', 'mom_floor_sweeping'] }]);
    } else {
      (s as any).tvtime = 0;
      scene.img('images/locations/gadukino/grandparents/tv/tv_turn_off_effect.mp4');
      scene.text('You notice <a href="exec:gt \'brother\', \'start\'">Kolka</a> sleeping on the sofa. You can\'t continue watching TV without disturbing him.');
      scene.text('With a sigh, you turn off the TV. The image collapses into a bright horizontal line that shrinks into a tiny white dot before slowly fading away. The speakers emit a high-pitched squawk as the power cuts off.');
      scene.img('images/shared/home/telek.jpg');
      scene.text('You flip through the half-dozen available channels, none offering particularly compelling content. Despite the limited options, the background noise and flickering images provide a welcome distraction from your thoughts.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        { label: 'Watch for another hour (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['TV', 'pav'] },
        { label: 'Turn off the TV', handler: (st: GameState) => {
    (s as any).tvtime = 0;
    scene.img('images/locations/gadukino/grandparents/tv/tv_turn_off_effect.mp4');
    scene.text('You press the power button and the image immediately collapses into a bright horizontal line across the center of the screen. The line quickly shrinks into a tiny white dot that gradually fades away. As the power cuts off, the speakers protest with a sharp, high-pitched squawk.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterGad(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).tvtime ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).tvtime = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/tv/oldtvon.mp4');
    scene.text('You switch on the ancient television and settle comfortably on the couch. The set needs time to warm up - first displaying a tiny white dot in the center which slowly expands. After about five minutes, the dot grows into a grainy black and white image that wobbles and scrolls before finally settling into a somewhat stable picture.');
    scene.actions([
      { label: 'Continue', goto: ['TV', 'gad'] },
    ]);
  } else {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/tv/tv\'+rand(1, 5)+\'.mp4');
    scene.text('You browse through the three available channels that reach this rural area. The selection is limited and the reception occasionally fuzzy, but even these modest programs provide a welcome distraction from country life. You watch with mild interest as the black and white images flicker across the screen.');
    scene.actions([
      { label: 'Watch for another hour (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['TV', 'gad'] },
      { label: 'Turn off the TV', handler: (st: GameState) => {
    (s as any).tvtime = 0;
    scene.img('images/locations/gadukino/grandparents/tv/tv_turn_off_effect.mp4');
    scene.text('You turn off the television. The image immediately collapses in on itself, forming a bright horizontal line that quickly shrinks into a small white dot before fading completely. The ancient speakers emit a shrill squawk in protest as the power cuts off.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterMeyhome(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).tvtime ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).tvtime = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/meynolds/tvon.jpg');
    scene.text('You press the remote and the luxurious plasma TV springs to life instantly. The large screen displays vivid colors and the surround sound system fills the room with rich audio.');
    scene.text('With premium cable service, you have access to hundreds of channels with top-quality programming.');
    scene.actions([
      { label: 'Watch Cable TV', goto: ['TV', 'meyhome'] },
    ]);
  } else {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/meynolds/tvon.jpg');
    scene.text('You relax and enjoy the premium cable programming on the high-definition screen. From blockbuster movies to exclusive series and documentaries, the entertainment options are endless. The crystal-clear picture and immersive sound system make for an excellent viewing experience.');
    scene.actions([
      { label: 'Continue watching (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['TV', 'meyhome'] },
      { label: 'Turn off the TV and get up', handler: (st: GameState) => {
    (s as any).tvtime = 0;
    scene.img('images/locations/pavlovsk/resident/meynolds/tvoff.jpg');
    scene.text('With a click of the remote, the screen goes black and the sound fades away. You stand up and stretch, feeling refreshed after enjoying some quality entertainment.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'nokable':
      enterNokable(s, scene);
      break;
    case 'kable':
      enterKable(s, scene);
      break;
    case 'pav':
      enterPav(s, scene);
      break;
    case 'gad':
      enterGad(s, scene);
      break;
    case 'meyhome':
      enterMeyhome(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const TV: LocationDef = {
  name: 'TV',
  title: 'You turn on the TV and settle comfortably on the couch.',
  region: 'other',
  description: ['You turn on the TV and settle comfortably on the couch.'],
  enter: enter,
};
