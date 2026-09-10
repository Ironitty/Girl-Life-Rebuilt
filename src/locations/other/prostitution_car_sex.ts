import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  (s as any).cumnostd = 1;
  if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob'  ||  (Math.floor(Math.random() * 3) + 0 < 2  &&  ((s as any).prostitute ?? 0)?.['scene_reduction'] === 0)) {
    (s as any).prostitute['blowjob_first'] = 1;
    scene.actions([{ label: 'Continue', goto: ['prostitution_car_sex', 'Blowjob'] }]);
  } else {
    // TODO-QSP: gt 'prostitution_car_sex', $prostitute['client_scene']
  }
  scene.build();
}

function enterBlowjob(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/prostitution/car/normal/sex/blowjob/bj_\'+rand(1, 27)+\'.mp4');
  if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) {
    // TODO-QSP: 'At the sight of your naked body he wastes no time to undress and reveal his '+iif($prostitute['clie...
  }
  if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob'  &&  ((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) {
    if (((s as any).prostitute_client_condom ?? 0) === 'Yes') {
      qspCall(s, 'prostitution_functions', 'remove_condom');
      // TODO-QSP: dynamic text: You take your condom and put it on his <<dick>>cm dick.
      scene.text(`You take your condom and put it on his ${((s as any).dick ?? 0)}cm dick.`);
    }
    // TODO-QSP: iif(rand(1, 10) < 6, '"Don''t keep me waiting,', '"Get to work,')+iif(rand(1, 10) < 4, ' whore', ' g...
  } else {
    scene.text('You\'re giving it your best. Switching up your routine, sometimes you only tease the head of his dick, lick his balls or deepthroat him as he praises your effort, but as time moves on he doesn\'t seem to be close to shooting his load.');
    if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob'  &&  ((s as any).prostitute ?? 0)?.['scene_repeat'] === 2) {
      scene.text('His stamina is impressive and despite your best efforts he still doesn\'t cum. Your jaw aches and you\'re getting tired of sucking him.');
      qspCall(s, 'pain', '', 1, 'mouth', 'stretch');
    } else {
      if (((s as any).prostitute_client_condom ?? 0) === 'Yes') {
        qspCall(s, 'prostitution_functions', 'remove_condom');
        // TODO-QSP: dynamic text: You take your condom and put it on his <<dick>>cm dick.
        scene.text(`You take your condom and put it on his ${((s as any).dick ?? 0)}cm dick.`);
      }
      scene.text('"Get me ready," he commands and you obediently start to suck him hard.');
    }
    // TODO-QSP: dynamic text: You wrap your lips around his member'+iif($prostitute_client_condom = 'Yes', '; ...
    scene.text('You wrap your lips around his member\'+iif($prostitute_client_condom = \'Yes\', \'; with those modern condom there\'s no real difference to bare skin. You suck and run\', \' sucking and running\')+\' your tongue along his shaft while your hands fondle his balls. "Don\'t be shy \'+iif(rand(1, 10) < 4, \'whore\', \'girl\')+\'," he murmurs before pushing his cock further into your mouth.');
    qspCall(s, 'arousal', 'bj', (((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) ? (6) : (12), 'unknown', 'prostitution', 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Blowjob') {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_car_sex', $prostitute['client_scene']
  } },
      ]);
    } else {
      (s as any).prostitute['scene_repeat'] = ((s as any).prostitute['scene_repeat'] ?? 0) + (1);
      if (((s as any).prostitute_fetish ?? 0)?.['rimjob'] !== 'blocked'  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0  &&  (Math.floor(Math.random() * 100) + 1 + ((s as any).prostitute ?? 0)?.['rim_pity_counter']) > 90) {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', 'rimjob_start');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', 'switch');
  } },
        ]);
      }
      scene.actions([
        { label: 'Continue', goto: ['prostitution_car_sex', 'Blowjob'] },
      ]);
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
    case 'Blowjob':
      enterBlowjob(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const prostitution_car_sex: LocationDef = {
  name: 'prostitution_car_sex',
  title: '<br>Content Warning: Ass-licking/Rimjob',
  region: 'other',
  enter: enter,
};
