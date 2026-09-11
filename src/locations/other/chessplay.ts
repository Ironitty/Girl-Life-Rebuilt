import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
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
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    (s as any).chessmulti = 1;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      (s as any).chessmulti = 3;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 2) {
        (s as any).chessmulti = 5;
      }
    }
  }
  if (((s as any).chessV ?? 0) === 10) {
    // TODO-QSP: gs 'exp_gain', 'chess', chessmulti * 2
    // TODO-QSP: gs 'fame', 'pav', 'chess', chessmulti * 2
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0);
  } else {
    if (((s as any).chessV ?? 0) === 30) {
      // TODO-QSP: gs 'exp_gain', 'chess', chessmulti * 4
      // TODO-QSP: gs 'fame', 'pav', 'chess', chessmulti * 4
      qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1);
    } else {
      if (((s as any).chessV ?? 0) === 50) {
        // TODO-QSP: gs 'exp_gain', 'chess', chessmulti * 6
        // TODO-QSP: gs 'fame', 'pav', 'chess', chessmulti * 6
        qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 2);
      } else {
        if (((s as any).chessV ?? 0) === 70) {
          // TODO-QSP: gs 'exp_gain', 'chess', chessmulti * 8
          // TODO-QSP: gs 'fame', 'pav', 'chess', chessmulti * 8
          qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 3) + 2);
        } else {
          if (((s as any).chessV ?? 0) === 90) {
            // TODO-QSP: gs 'exp_gain', 'chess', chessmulti * 10
            // TODO-QSP: gs 'fame', 'pav', 'chess', chessmulti * 10
            qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 4) + 2);
          }
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterGame(s: GameState, scene: SceneBuilder): void {
  (s as any).chess_move = ((s as any).chess_move ?? 0) + (1);
  (s as any).chess_time = Math.floor(Math.random() * 3) + 1;
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).chess_time ?? 0));
  (s as any).total_chess_time = ((s as any).total_chess_time ?? 0) + (((s as any).chess_time ?? 0));
  qspCall(s, 'stat', '');
  if (((s as any).chess_move ?? 0) === 1) {
    scene.img('images/locations/pavlovsk/community/chess/board\' + rand(1, 1) + \'.jpg');
    if (((s as any).chess_ind ?? 0) > 5) {
      // TODO-QSP: dynamic text: You are less skilled at chess than '+$chess_name+'. They will play more aggressi...
      scene.text('You are less skilled at chess than \'+$chess_name+\'. They will play more aggressively to try and defeat you.');
      scene.text('You might want to play more conservatively and wear down their attacks.');
    } else {
      if (((s as any).chess_ind ?? 0) < -5) {
        // TODO-QSP: dynamic text: You are more skilled at chess than '+$chess_name+'. They will play more conserva...
        scene.text('You are more skilled at chess than \'+$chess_name+\'. They will play more conservatively to try and defeat you.');
        scene.text('You might want to play more aggressively and wear down their defenses.');
      } else {
        // TODO-QSP: dynamic text: You are about equally skilled at chess as '+$chess_name+'. They will use a wide ...
        scene.text('You are about equally skilled at chess as \'+$chess_name+\'. They will use a wide range of moves to try and defeat you.');
        scene.text('You might want to try different types of moves to keep your opponent off balance.');
      }
    }
  }
  if (((s as any).chess_GG ?? 0) <= 0  &&  ((s as any).chess_com ?? 0) <= 0) {
    scene.img('images/locations/pavlovsk/community/chess/stalemate\' + rand(1, 1) + \'.jpg');
    // TODO-QSP: dynamic text: Stalemate! You have drawn the match against '+$chess_name+'!
    scene.text('Stalemate! You have drawn the match against \'+$chess_name+\'!');
    // TODO-QSP: dynamic text: You and '+$chess_name+' could not find a way to win the match.
    scene.text('You and \'+$chess_name+\' could not find a way to win the match.');
    qspCall(s, 'chessplay', 'expfame', 1);
    scene.actions([
      { label: 'Return', goto: ['kruchess', ''] },
    ]);
  } else {
    if (((s as any).chess_GG ?? 0) <= 0) {
      scene.img('images/locations/pavlovsk/community/chess/lose\' + rand(1, 1) + \'.jpg');
      // TODO-QSP: dynamic text: Checkmate! You have lost the match against '+$chess_name+'!
      scene.text('Checkmate! You have lost the match against \'+$chess_name+\'!');
      qspCall(s, 'chessplay', 'expfame', 0);
      scene.actions([
        { label: 'Return', goto: ['kruchess', ''] },
      ]);
    } else {
      if (((s as any).chess_com ?? 0) <= 0) {
        (s as any).chess_win = ((s as any).chess_win ?? 0) + (1);
        scene.img('images/locations/pavlovsk/community/chess/win\' + rand(1, 1) + \'.jpg');
        // TODO-QSP: dynamic text: Checkmate! You have won the match against '+$chess_name+'!
        scene.text('Checkmate! You have won the match against \'+$chess_name+\'!');
        qspCall(s, 'chessplay', 'expfame', 2);
        scene.actions([
          { label: 'Return', goto: ['kruchess', ''] },
        ]);
      } else {
        if (((s as any).chess_moves ?? 0) >= ((s as any).chess_move_limit ?? 0)) {
          scene.img('images/locations/pavlovsk/community/chess/stalemate\' + rand(1, 1) + \'.jpg');
          // TODO-QSP: dynamic text: Draw! You agree to end the match with '+$chess_name+'.
          scene.text('Draw! You agree to end the match with \'+$chess_name+\'.');
          // TODO-QSP: dynamic text: You and '+$chess_name+' have both used too many moves and neither could find a w...
          scene.text('You and \'+$chess_name+\' have both used too many moves and neither could find a way to win the match.');
          qspCall(s, 'chessplay', 'expfame', 1);
          scene.actions([
            { label: 'Return', goto: ['kruchess', ''] },
          ]);
        } else {
          if (((s as any).total_chess_time ?? 0) >= ((s as any).chess_time_limit ?? 0)) {
            scene.img('images/locations/pavlovsk/community/chess/stalemate\' + rand(1, 1) + \'.jpg');
            // TODO-QSP: dynamic text: Draw! You agree to end the match with '+$chess_name+'.
            scene.text('Draw! You agree to end the match with \'+$chess_name+\'.');
            // TODO-QSP: dynamic text: You and '+$chess_name+' have both used too much time and neither could find a wa...
            scene.text('You and \'+$chess_name+\' have both used too much time and neither could find a way to win the match.');
            qspCall(s, 'chessplay', 'expfame', 1);
            scene.actions([
              { label: 'Return', goto: ['kruchess', ''] },
            ]);
          } else {
            qspCall(s, 'chessplay', 'moves');
          }
        }
      }
    }
  }
  scene.build();
}

function enterMoves(s: GameState, scene: SceneBuilder): void {
  if (((s as any).chess_ind ?? 0) > 5) {
    (s as any).chessM = Math.floor(Math.random() * 8) + 4;
  } else {
    if (((s as any).chess_ind ?? 0) < -5) {
      (s as any).chessM = Math.floor(Math.random() * 8) + 0;
    } else {
      (s as any).chessM = Math.floor(Math.random() * 8) + 2;
    }
  }
  scene.actions([
    { label: 'Play conservatively', handler: (st: GameState) => {
    if (((s as any).chessM ?? 0) <= 1) {
      scene.img('images/locations/pavlovsk/community/chess/conservative\' + rand(1, 1) + \'.jpg');
      // TODO-QSP: $chess_name+' also plays conservatively.'
      scene.text('Neither of you gain an advantage from this move.');
    } else {
      if (((s as any).chessM ?? 0) <= 3) {
        scene.img('images/locations/pavlovsk/community/chess/defensive\' + rand(1, 1) + \'.jpg');
        // TODO-QSP: $chess_name+' plays defensively and is now in a better position than you.'
        qspCall(s, 'chessplay', 'advantage', 'conservative', 'bad');
      } else {
        if (((s as any).chessM ?? 0) <= 5) {
          scene.img('images/locations/pavlovsk/community/chess/tactical\' + rand(1, 1) + \'.jpg');
          // TODO-QSP: $chess_name+' plays tactically and is able to deftly pick apart your conservative defenses.'
          qspCall(s, 'chessplay', 'advantage', 'conservative', 'bad');
        } else {
          if (((s as any).chessM ?? 0) <= 7) {
            scene.img('images/locations/pavlovsk/community/chess/trap\' + rand(1, 1) + \'.jpg');
            // TODO-QSP: $chess_name+' tries to trap you, but you encircle it with your defenses.'
            qspCall(s, 'chessplay', 'advantage', 'conservative', 'good');
          } else {
            if (((s as any).chessM ?? 0) <= 9) {
              scene.img('images/locations/pavlovsk/community/chess/offensive\' + rand(1, 1) + \'.jpg');
              // TODO-QSP: $chess_name+' plays offensively, but your defense repulses his attacks.'
              qspCall(s, 'chessplay', 'advantage', 'conservative', 'good');
            } else {
              if (((s as any).chessM ?? 0) <= 11) {
                scene.img('images/locations/pavlovsk/community/chess/aggressive\' + rand(1, 1) + \'.jpg');
                // TODO-QSP: $chess_name+' plays aggressively, but your defense manages to hold them off.'
                scene.text('Neither of you gain an advantage from this move.');
              }
            }
          }
        }
      }
    }
    // TODO-QSP: 'You are on move '+str(chess_move)+' out of '+str(chess_move_limit)
    // TODO-QSP: 'You are on minute '+str(total_chess_time)+' out of '+str(chess_time_limit)
    (s as any).chess_GG = ((s as any).chess_GG ?? 0) - (1);
    (s as any).chess_com = ((s as any).chess_com ?? 0) - (1);
    qspCall(s, 'chessplay', 'game');
  } },
    { label: 'Play defensively', handler: (st: GameState) => {
    if (((s as any).chessM ?? 0) <= 1) {
      scene.img('images/locations/pavlovsk/community/chess/conservative\' + rand(1, 1) + \'.jpg');
      // TODO-QSP: $chess_name+' plays very conservatively and does not threaten your defenses at all.'
      qspCall(s, 'chessplay', 'advantage', 'defense', 'good');
    } else {
      if (((s as any).chessM ?? 0) <= 3) {
        scene.img('images/locations/pavlovsk/community/chess/defensive\' + rand(1, 1) + \'.jpg');
        // TODO-QSP: $chess_name+' also plays defensively.'
        scene.text('Neither of you gain an advantage from this move.');
      } else {
        if (((s as any).chessM ?? 0) <= 5) {
          scene.img('images/locations/pavlovsk/community/chess/tactical\' + rand(1, 1) + \'.jpg');
          // TODO-QSP: $chess_name+' plays tactically and is able to deftly pick apart your defenses.'
          qspCall(s, 'chessplay', 'advantage', 'defense', 'bad');
        } else {
          if (((s as any).chessM ?? 0) <= 7) {
            scene.img('images/locations/pavlovsk/community/chess/trap\' + rand(1, 1) + \'.jpg');
            // TODO-QSP: $chess_name+' tries to trap you, but you avoid it with your defenses.'
            qspCall(s, 'chessplay', 'advantage', 'defense', 'good');
          } else {
            if (((s as any).chessM ?? 0) <= 9) {
              scene.img('images/locations/pavlovsk/community/chess/offensive\' + rand(1, 1) + \'.jpg');
              // TODO-QSP: $chess_name+' plays offensively, but your defense absorbs his attacks.'
              scene.text('Neither of you gain an advantage from this move.');
            } else {
              if (((s as any).chessM ?? 0) <= 11) {
                scene.img('images/locations/pavlovsk/community/chess/aggressive\' + rand(1, 1) + \'.jpg');
                // TODO-QSP: $chess_name+' plays aggressively and overwhelms your defenses.'
                qspCall(s, 'chessplay', 'advantage', 'defense', 'bad');
              }
            }
          }
        }
      }
    }
    // TODO-QSP: 'You are on move '+str(chess_move)+' out of '+str(chess_move_limit)
    // TODO-QSP: 'You are on minute '+str(total_chess_time)+' out of '+str(chess_time_limit)
    (s as any).chess_GG = ((s as any).chess_GG ?? 0) - (1);
    (s as any).chess_com = ((s as any).chess_com ?? 0) - (1);
    qspCall(s, 'chessplay', 'game');
  } },
    { label: 'Play tactically', handler: (st: GameState) => {
    if (((s as any).chessM ?? 0) <= 1) {
      scene.img('images/locations/pavlovsk/community/chess/conservative\' + rand(1, 1) + \'.jpg');
      // TODO-QSP: $chess_name+' plays very conservatively and your tactical moves leave you in a better position.'
      qspCall(s, 'chessplay', 'advantage', 'tactical', 'good');
    } else {
      if (((s as any).chessM ?? 0) <= 3) {
        scene.img('images/locations/pavlovsk/community/chess/defensive\' + rand(1, 1) + \'.jpg');
        // TODO-QSP: $chess_name+' plays defensively allowing you to pick apart their defenses.'
        qspCall(s, 'chessplay', 'advantage', 'tactical', 'good');
      } else {
        if (((s as any).chessM ?? 0) <= 5) {
          scene.img('images/locations/pavlovsk/community/chess/tactical\' + rand(1, 1) + \'.jpg');
          // TODO-QSP: $chess_name+' also plays tactically.'
          scene.text('Neither of you gain an advantage from this move.');
        } else {
          if (((s as any).chessM ?? 0) <= 7) {
            scene.img('images/locations/pavlovsk/community/chess/trap\' + rand(1, 1) + \'.jpg');
            // TODO-QSP: $chess_name+' tries to trap you, but you avoid it with your tactical movements.'
            scene.text('Neither of you gain an advantage from this move.');
          } else {
            if (((s as any).chessM ?? 0) <= 9) {
              scene.img('images/locations/pavlovsk/community/chess/offensive\' + rand(1, 1) + \'.jpg');
              // TODO-QSP: $chess_name+' plays offensively, and some of your pieces are caught out of position.'
              qspCall(s, 'chessplay', 'advantage', 'tactical', 'bad');
            } else {
              if (((s as any).chessM ?? 0) <= 11) {
                scene.img('images/locations/pavlovsk/community/chess/aggressive\' + rand(1, 1) + \'.jpg');
                // TODO-QSP: $chess_name+' plays aggressively and rushes past your unprepared defenses.'
                qspCall(s, 'chessplay', 'advantage', 'tactical', 'bad');
              }
            }
          }
        }
      }
    }
    // TODO-QSP: 'You are on move '+str(chess_move)+' out of '+str(chess_move_limit)
    // TODO-QSP: 'You are on minute '+str(total_chess_time)+' out of '+str(chess_time_limit)
    (s as any).chess_GG = ((s as any).chess_GG ?? 0) - (1);
    (s as any).chess_com = ((s as any).chess_com ?? 0) - (1);
    qspCall(s, 'chessplay', 'game');
  } },
    { label: 'Bait a trap for your opponent', handler: (st: GameState) => {
    if (((s as any).chessM ?? 0) <= 1) {
      scene.img('images/locations/pavlovsk/community/chess/conservative\' + rand(1, 1) + \'.jpg');
      // TODO-QSP: $chess_name+' plays very conservatively and their defenses are now very well prepared.'
      qspCall(s, 'chessplay', 'advantage', 'trap', 'bad');
    } else {
      if (((s as any).chessM ?? 0) <= 3) {
        scene.img('images/locations/pavlovsk/community/chess/defensive\' + rand(1, 1) + \'.jpg');
        // TODO-QSP: $chess_name+' plays defensively and your bait is now out of position.'
        qspCall(s, 'chessplay', 'advantage', 'trap', 'bad');
      } else {
        if (((s as any).chessM ?? 0) <= 5) {
          scene.img('images/locations/pavlovsk/community/chess/tactical\' + rand(1, 1) + \'.jpg');
          // TODO-QSP: $chess_name+' plays tactically and avoids your trap.'
          scene.text('Neither of you gain an advantage from this move.');
        } else {
          if (((s as any).chessM ?? 0) <= 7) {
            scene.img('images/locations/pavlovsk/community/chess/trap\' + rand(1, 1) + \'.jpg');
            // TODO-QSP: $chess_name+' also tries to trap you.'
            scene.text('Neither of you gain an advantage from this move.');
          } else {
            if (((s as any).chessM ?? 0) <= 9) {
              scene.img('images/locations/pavlovsk/community/chess/offensive\' + rand(1, 1) + \'.jpg');
              // TODO-QSP: $chess_name+' plays offensively, and a couple of their pieces are caught out of position.'
              qspCall(s, 'chessplay', 'advantage', 'trap', 'good');
            } else {
              if (((s as any).chessM ?? 0) <= 11) {
                scene.img('images/locations/pavlovsk/community/chess/aggressive\' + rand(1, 1) + \'.jpg');
                // TODO-QSP: $chess_name+' plays aggressively and many of their pieces fall into your trap.'
                qspCall(s, 'chessplay', 'advantage', 'trap', 'good');
              }
            }
          }
        }
      }
    }
    // TODO-QSP: 'You are on move '+str(chess_move)+' out of '+str(chess_move_limit)
    // TODO-QSP: 'You are on minute '+str(total_chess_time)+' out of '+str(chess_time_limit)
    (s as any).chess_GG = ((s as any).chess_GG ?? 0) - (1);
    (s as any).chess_com = ((s as any).chess_com ?? 0) - (1);
    qspCall(s, 'chessplay', 'game');
  } },
    { label: 'Play offensively', handler: (st: GameState) => {
    if (((s as any).chessM ?? 0) <= 1) {
      scene.img('images/locations/pavlovsk/community/chess/conservative\' + rand(1, 1) + \'.jpg');
      // TODO-QSP: $chess_name+' plays very conservatively and repulses all your attacks.'
      qspCall(s, 'chessplay', 'advantage', 'offense', 'bad');
    } else {
      if (((s as any).chessM ?? 0) <= 3) {
        scene.img('images/locations/pavlovsk/community/chess/defensive\' + rand(1, 1) + \'.jpg');
        // TODO-QSP: $chess_name+' plays defensively and manages to absorb all your attacks.'
        scene.text('Neither of you gain an advantage from this move.');
      } else {
        if (((s as any).chessM ?? 0) <= 5) {
          scene.img('images/locations/pavlovsk/community/chess/tactical\' + rand(1, 1) + \'.jpg');
          // TODO-QSP: $chess_name+' plays tactically, but your offense is able to outmaneuver them.'
          qspCall(s, 'chessplay', 'advantage', 'offense', 'good');
        } else {
          if (((s as any).chessM ?? 0) <= 7) {
            scene.img('images/locations/pavlovsk/community/chess/trap\' + rand(1, 1) + \'.jpg');
            // TODO-QSP: $chess_name+' traps some of your pieces. You should think more carefully next time.'
            qspCall(s, 'chessplay', 'advantage', 'offense', 'bad');
          } else {
            if (((s as any).chessM ?? 0) <= 9) {
              scene.img('images/locations/pavlovsk/community/chess/offensive\' + rand(1, 1) + \'.jpg');
              // TODO-QSP: $chess_name+' also plays offensively.'
              scene.text('Neither of you gain an advantage from this move.');
            } else {
              if (((s as any).chessM ?? 0) <= 11) {
                scene.img('images/locations/pavlovsk/community/chess/aggressive\' + rand(1, 1) + \'.jpg');
                // TODO-QSP: $chess_name+' plays aggressively and overextends themselves.'
                qspCall(s, 'chessplay', 'advantage', 'offense', 'good');
              }
            }
          }
        }
      }
    }
    // TODO-QSP: 'You are on move '+str(chess_move)+' out of '+str(chess_move_limit)
    // TODO-QSP: 'You are on minute '+str(total_chess_time)+' out of '+str(chess_time_limit)
    (s as any).chess_GG = ((s as any).chess_GG ?? 0) - (1);
    (s as any).chess_com = ((s as any).chess_com ?? 0) - (1);
    qspCall(s, 'chessplay', 'game');
  } },
    { label: 'Play aggressively', handler: (st: GameState) => {
    if (((s as any).chessM ?? 0) <= 1) {
      scene.img('images/locations/pavlovsk/community/chess/conservative\' + rand(1, 1) + \'.jpg');
      // TODO-QSP: $chess_name+' plays conservatively and their defenses manage to hold you off.'
      scene.text('Neither of you gain an advantage from this move.');
    } else {
      if (((s as any).chessM ?? 0) <= 3) {
        scene.img('images/locations/pavlovsk/community/chess/defensive\' + rand(1, 1) + \'.jpg');
        // TODO-QSP: $chess_name+' plays defensively and you overwhelm a few of their pieces.'
        qspCall(s, 'chessplay', 'advantage', 'aggressive', 'good');
      } else {
        if (((s as any).chessM ?? 0) <= 5) {
          scene.img('images/locations/pavlovsk/community/chess/tactical\' + rand(1, 1) + \'.jpg');
          // TODO-QSP: $chess_name+' plays tactically and cannot cope with your aggressive moves.'
          qspCall(s, 'chessplay', 'advantage', 'aggressive', 'good');
        } else {
          if (((s as any).chessM ?? 0) <= 7) {
            scene.img('images/locations/pavlovsk/community/chess/trap\' + rand(1, 1) + \'.jpg');
            // TODO-QSP: $chess_name+' tries to trap you, but some of your pieces fall for it.'
            qspCall(s, 'chessplay', 'advantage', 'aggressive', 'bad');
          } else {
            if (((s as any).chessM ?? 0) <= 9) {
              scene.img('images/locations/pavlovsk/community/chess/offensive\' + rand(1, 1) + \'.jpg');
              // TODO-QSP: $chess_name+' plays offensively, leaving some of your pieces exposed.'
              qspCall(s, 'chessplay', 'advantage', 'aggressive', 'bad');
            } else {
              if (((s as any).chessM ?? 0) <= 11) {
                scene.img('images/locations/pavlovsk/community/chess/aggressive\' + rand(1, 1) + \'.jpg');
                // TODO-QSP: $chess_name+' also plays aggressively.'
                scene.text('Neither of you gain an advantage from this move.');
              }
            }
          }
        }
      }
    }
    // TODO-QSP: 'You are on move '+str(chess_move)+' out of '+str(chess_move_limit)
    // TODO-QSP: 'You are on minute '+str(total_chess_time)+' out of '+str(chess_time_limit)
    (s as any).chess_GG = ((s as any).chess_GG ?? 0) - (1);
    (s as any).chess_com = ((s as any).chess_com ?? 0) - (1);
    qspCall(s, 'chessplay', 'game');
  } },
  ]);
  scene.build();
}

function enterAdvantage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'conservative'  ||  ((s as any).locArgs?.[1] ?? 0) === 'aggressive') {
    (s as any).chess_pos = 4;
    (s as any).chess_neg = (-4);
    (s as any).chess_adv = 4;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'defense'  ||  ((s as any).locArgs?.[1] ?? 0) === 'offense') {
      (s as any).chess_pos = 2;
      (s as any).chess_neg = (-2);
      (s as any).chess_adv = 2;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'tactical'  ||  ((s as any).locArgs?.[1] ?? 0) === 'trap') {
        (s as any).chess_pos = 1;
        (s as any).chess_neg = (-1);
        (s as any).chess_adv = 1;
      }
    }
  }
  if (((s as any).locArgs?.[2] ?? 0) === 'good') {
    if (((s as any).chess_ind ?? 0) > ((s as any).chess_pos ?? 0)) {
      scene.text('You are less skilled than your opponent and cannot capitalize on your advantage.');
      scene.text('Try to gain more skill at chess to use this move successfully against this opponent.');
    } else {
      if (((s as any).chess_ind ?? 0) < ((s as any).chess_neg ?? 0)) {
        scene.text('You are more skilled than your opponent and gain a major advantage.');
        (s as any).chess_GG = ((s as any).chess_GG ?? 0) + ((s as any).chess_adv ?? 0) + ((s as any).chess_diff ?? 0);
        (s as any).chess_com = ((s as any).chess_com ?? 0) - ((s as any).chess_adv ?? 0) - ((s as any).chess_diff ?? 0);
      } else {
        scene.text('You are about equally skilled as your opponent and gain some advantage.');
        (s as any).chess_GG = ((s as any).chess_GG ?? 0) + ((s as any).chess_adv ?? 0)/2 + ((s as any).chess_diff ?? 0)/2;
        (s as any).chess_com = ((s as any).chess_com ?? 0) - ((s as any).chess_adv ?? 0)/2 - ((s as any).chess_diff ?? 0)/2;
      }
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'bad') {
      if (((s as any).chess_ind ?? 0) > ((s as any).chess_pos ?? 0)) {
        scene.text('You are less skilled than your opponent and you lose a major advantage.');
        scene.text('Try to gain more skill at chess to prevent your opponent from using this move successfully.');
        (s as any).chess_GG = ((s as any).chess_GG ?? 0) - ((s as any).chess_adv ?? 0) - ((s as any).chess_diff ?? 0);
        (s as any).chess_com = ((s as any).chess_com ?? 0) + ((s as any).chess_adv ?? 0) + ((s as any).chess_diff ?? 0);
      } else {
        if (((s as any).chess_ind ?? 0) < ((s as any).chess_neg ?? 0)) {
          scene.text('You are more skilled than your opponent and prevent them from capitalizing on their advantage.');
        } else {
          scene.text('You are about equally skilled as your opponent and you lose some advantage.');
          (s as any).chess_GG = ((s as any).chess_GG ?? 0) - ((s as any).chess_adv ?? 0)/2 - ((s as any).chess_diff ?? 0)/2;
          (s as any).chess_com = ((s as any).chess_com ?? 0) + ((s as any).chess_adv ?? 0)/2 + ((s as any).chess_diff ?? 0)/2;
        }
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
    case 'game':
      enterGame(s, scene);
      break;
    case 'moves':
      enterMoves(s, scene);
      break;
    case 'advantage':
      enterAdvantage(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const chessplay: LocationDef = {
  name: 'chessplay',
  title: 'You might want to play more conservatively and wear down the',
  region: 'other',
  enter: enter,
};
