import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).gp_chores ?? 0)?.['active'] > 1) {
    scene.actions([{ label: 'Continue', goto: ['gad_gpchores', 'active'] }]);
  }
  qspCall(s, 'gad_gpchores', 'convo');
  scene.build();
}

function enterActive(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterConvo(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).gp_chores ?? 0))) {
    scene.text('You approach your <relation> to ask if they have any jobs for you today.');
    if (((s as any).gp_chores ?? 0)?.['mood'] < 0) {
      (s as any).gp_chores['bonus'] = 0;
      scene.text('You are lazy {mc}, I am not sure if you can be trusted to do your share.');
    } else {
      if (((s as any).gp_chores ?? 0)?.['mood'] < 10) {
        scene.text('Your <relation gives you a hard stare, you are nothing about a layabout. Get out of my sight!');
      } else {
        if (((s as any).gp_chores ?? 0)?.['mood'] > 10) {
          (s as any).gp_chores['bonus'] = 10;
          scene.text('You have been so helpful {mc}, it is wonderful to have you with us. Here\'s a something little extra for you. ');
        } else {
          if (((s as any).gp_chores ?? 0)?.['mood'] > 20) {
            (s as any).gp_chores['bonus'] = 20;
            scene.text('Your <relation> face lights up when they see you. You have been such a hardworking girl, you\'re mother will be so proud of how diligant you become. Here have a little extra cash for your efforts.');
          }
        }
      }
    }
  }
  if (((s as any).gp_chores ?? 0)?.['active'] === -1) {
    (s as any).gp_chores['failed'] = ((s as any).gp_chores['failed'] ?? 0) + (1);
    (s as any).gp_chores['mood'] = ((s as any).gp_chores['mood'] ?? 0) - (1);
  }
  if (((s as any).gp_chores ?? 0)?.['active'] === 5) {
    (s as any).gp_chores['completed'] = ((s as any).gp_chores['completed'] ?? 0) + (1);
    (s as any).gp_chores['mood'] = ((s as any).gp_chores['mood'] ?? 0) + (1);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'active':
      enterActive(s, scene);
      break;
    case 'convo':
      enterConvo(s, scene);
      break;
    default:
      enterInit(s, scene);
      break;
  }
}

export const gad_gpchores: LocationDef = {
  name: 'gad_gpchores',
  title: 'You approach your <relation> to ask if they have any jobs fo',
  region: 'gadukino',
  enter: enter,
};
