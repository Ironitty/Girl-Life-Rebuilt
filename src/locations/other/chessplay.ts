import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).chess_name ?? 0) === '') {
  }
  qspCall(s, 'stat', '');
  (s as any).chess_GG = 20;
  (s as any).chess_com = 20;
  (s as any).chess_ind = ((s as any).chessV ?? 0) - ((s as any).pcs_chess ?? 0);
  if (((s as any).chess_ind ?? 0) < 0) {
    (s as any).chess_diff = (((s as any).chess_ind ?? 0)/2)*-1;
  } else {
    (s as any).chess_diff = (((s as any).chess_ind ?? 0)/2);
  }
  (s as any).chess_move_limit = 60;
  (s as any).chess_time_limit = 120;
  (s as any).chess_move = 0;
  (s as any).total_chess_time = 0;
  scene.actions([{ label: 'Continue', goto: ['chessplay', 'game'] }]);
  scene.build();
}

function enterExpfame(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] === 0) {
    (s as any).chessmulti = 1;
  } else {
    (s as any).chessmulti = 3;
    if (((s as any).ARGS ?? 0)[1] === 2) {
      (s as any).chessmulti = 5;
    }
    if (((s as any).chessV ?? 0) === 10) {
      // TODO-QSP: gs 'exp_gain', 'chess', chessmulti * 2
      // TODO-QSP: gs 'fame', 'pav', 'chess', chessmulti * 2
      qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0);
    } else {
      // TODO-QSP: gs 'exp_gain', 'chess', chessmulti * 4
      // TODO-QSP: gs 'fame', 'pav', 'chess', chessmulti * 4
      qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1);
      if (((s as any).chessV ?? 0) === 50) {
        // TODO-QSP: gs 'exp_gain', 'chess', chessmulti * 6
        // TODO-QSP: gs 'fame', 'pav', 'chess', chessmulti * 6
        qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 2);
      } else {
        // TODO-QSP: gs 'exp_gain', 'chess', chessmulti * 8
        // TODO-QSP: gs 'fame', 'pav', 'chess', chessmulti * 8
        qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 3) + 2);
        if (((s as any).chessV ?? 0) === 90) {
          // TODO-QSP: gs 'exp_gain', 'chess', chessmulti * 10
          // TODO-QSP: gs 'fame', 'pav', 'chess', chessmulti * 10
          qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 4) + 2);
        }
        qspCall(s, 'stat', '');
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'expfame':
      enterExpfame(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const chessplay: LocationDef = {
  name: 'chessplay',
  region: 'other',
  enter: enter,
};
