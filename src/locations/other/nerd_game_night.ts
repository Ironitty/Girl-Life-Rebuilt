import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nerd_game ?? 0)?.['fixed_uni_day'] === ((s as any).week ?? 0)) {
    (s as any).nerd_game['game_day'] = ((s as any).daystart ?? 0);
  }
  return;
  scene.build();
}

function enterSetEndActs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'nerd_game_night_chat', 'set_leave_act');
  return;
  scene.actions([
    { label: 'Chat with someone', goto: ['nerd_game_night_chat', 'nerd_chat'] },
  ]);
  scene.build();
}

function enterGame(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  qspCall(s, 'themes', 'indoors');
  if (((s as any).nerd_game ?? 0)?.['stage'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'game_night1'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'game_night2'] }]);
    if (((s as any).nerd_game ?? 0)?.['stage'] === 2) {
      scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'game_night3'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'game_night4'] }]);
      if (((s as any).nerd_game ?? 0)?.['stage'] === 4) {
        scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'game_night5'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'game_night6'] }]);
        if (((s as any).nerd_game ?? 0)?.['stage'] === 6) {
          scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'game_night7'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'game_night8'] }]);
          if (((s as any).nerd_game ?? 0)?.['stage'] === 8) {
            scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'game_night9'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'game_night10'] }]);
            if (((s as any).nerd_game ?? 0)?.['stage'] === 10) {
              scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'game_night11'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'game_night12'] }]);
              scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'board_games'] }]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'set_end_acts':
      enterSetEndActs(s, scene);
      break;
    case 'game':
      enterGame(s, scene);
      break;
    default:
      enterCikl(s, scene);
      break;
  }
}

export const nerd_game_night: LocationDef = {
  name: 'nerd_game_night',
  title: 'This will block this story arc.',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
