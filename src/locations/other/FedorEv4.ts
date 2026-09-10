import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHome2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/sitting.jpg');
  scene.text('You walk into the living room then take a seat on the couch. Fedor walks into the kitchen and returns with a bowl of <a href="exec:gt \'FedorEv4\', \'Popcorn\'">popcorn</a>, some <a href="exec:gt \'FedorEv4\', \'Snacks\'">snacks</a> and a few cans of soda then lays them down on the table. Fedor grabs the remote then sits down next to you as he begins flipping through channels.');
  qspCall(s, 'FedorEV4', 'movie_choice');
  scene.build();
}

function enterPopcorn(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (1);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (30);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/munch2.jpg');
  scene.text('You begin munching on some popcorn and drinking some soda as Fedor continues flipping through channels.');
  qspCall(s, 'FedorEV4', 'movie_choice');
  scene.build();
}

function enterSnacks(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/munch1.jpg');
  scene.text('You begin enjoying some strawberries and drinking soda as Fedor continues flipping through channels.');
  qspCall(s, 'FedorEV4', 'movie_choice');
  scene.build();
}

function enterMovieChoice(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Wait for Fedor to pick a channel', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 4) + 1;
    if (((s as any).VK ?? 0) <= 1) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Movie Family'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Movie Sports'] }]);
      if (((s as any).VK ?? 0) === 3) {
        scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Movie Porn'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Movie Action'] }]);
      }
    }
    scene.actions([
      { label: 'Watch Action', goto: ['FedorEv4', 'Movie Action'] },
      { label: 'Watch Sports ', goto: ['FedorEv4', 'Movie Sports'] },
      { label: 'Watch a Family film', goto: ['FedorEv4', 'Movie Family'] },
      { label: 'Watch Porn', goto: ['FedorEv4', 'Movie Porn'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Home 2':
      enterHome2(s, scene);
      break;
    case 'Popcorn':
      enterPopcorn(s, scene);
      break;
    case 'Snacks':
      enterSnacks(s, scene);
      break;
    case 'movie_choice':
      enterMovieChoice(s, scene);
      break;
    default:
      enterHome2(s, scene);
      break;
  }
}

export const FedorEv4: LocationDef = {
  name: 'FedorEv4',
  title: 'Bathroom',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  enter: enter,
};
