import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = '';
  (s as any).loc = 'kruchess';
  (s as any).frost = 0;
  (s as any).menu_loc = 'kruchess';
  (s as any).menu_arg = '';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Chess Club</b></center>');
  scene.img('images/locations/pavlovsk/community/chess/kruchess.jpg');
  if (((s as any).hour ?? 0) > 20) {
    scene.text('Chess club is closed. The coach and some players are tidying away the boards and pieces.');
    scene.actions([
      { label: 'Leave', goto: ['pav_commclubs', ''] },
    ]);
  } else {
    if (((s as any).week ?? 0) !== 6) {
      scene.text('The kids are sitting around playing practice games, while being watched over and helped by Coach Genrikh.');
      scene.actions([
        { label: 'Spend an hour practicing with assistance from the coach', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chess', (Math.floor(Math.random() * 2) + 0));
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0));
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/community/chess/play'...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/community/chess/play` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You spend the next hour practicing against the other players with the coach walking around and stopping to help out or point things out. You learn a little every time. You also discuss the various chess openings and which ones are the best, which can often get lively.');
    scene.actions([
      { label: 'Return', goto: ['kruchess', ''] },
    ]);
  } },
        { label: 'Talk to the other players', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/chess/talk.jpg');
    scene.text('You take a break from playing and talk to a couple of your fellow chess enthusiasts. After first focusing on chess for a while, the conversation drifts off to other topics. You have a good time chatting and relaxing.');
    scene.actions([
      { label: 'Return', goto: ['kruchess', ''] },
    ]);
  } },
        { label: 'Talk to Evgeny Kuznetsov', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'exp_gain', 'chess', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A151', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big151.jpg');
    scene.text('You sit down next to Evgeny to talk. At first you try to catch his interest with ordinary things; he barely even responds to you, preoccupied playing against himself. Then you bring up a recent opening you have been trying and he perks up. Soon the two of you are talking about various openings and he shares with you some of his favorite ones and how he moves them to the mid game. You learn a bit about chess and feel like you are better friends with Evgeny.');
    scene.actions([
      { label: 'Return', goto: ['kruchess', ''] },
    ]);
  } },
      ]);
    } else {
      scene.text('On Saturdays, after a week\'s training, club members spend the whole day playing against each other.');
      if (((s as any).chess_win ?? 0) < 5) {
        // TODO-QSP: dynamic text: 'You have beaten Vitalik '+str(chess_win)+' times.'
        scene.text('You have beaten Vitalik ' + String(((s as any).chess_win ?? '')) + ' times.');
      } else {
        if (((s as any).chess_win ?? 0) >= 5  &&  ((s as any).chess_win ?? 0) < 10) {
          scene.text('You have beaten Vitalik 5 times. You cannot play against him anymore.');
          // TODO-QSP: dynamic text: 'You have beaten Kostya '+str(chess_win-5)+' times.'
          scene.text('You have beaten Kostya ' + String(((s as any).chess_win ?? '')-5) + ' times.');
        } else {
          if (((s as any).chess_win ?? 0) >= 10  &&  ((s as any).chess_win ?? 0) < 15) {
            scene.text('You have beaten Vitalik 5 times. You cannot play against him anymore.');
            scene.text('You have beaten Kostya 5 times. You cannot play against him anymore.');
            // TODO-QSP: dynamic text: 'You have beaten Sergei '+str(chess_win-10)+' times.'
            scene.text('You have beaten Sergei ' + String(((s as any).chess_win ?? '')-10) + ' times.');
          } else {
            if (((s as any).chess_win ?? 0) >= 15  &&  ((s as any).chess_win ?? 0) < 20) {
              scene.text('You have beaten Vitalik 5 times. You cannot play against him anymore.');
              scene.text('You have beaten Kostya 5 times. You cannot play against him anymore.');
              scene.text('You have beaten Sergei 5 times. You cannot play against him anymore.');
              // TODO-QSP: dynamic text: 'You have beaten Coach Genrikh '+str(chess_win-15)+' times.'
              scene.text('You have beaten Coach Genrikh ' + String(((s as any).chess_win ?? '')-15) + ' times.');
            } else {
              if (((s as any).chess_win ?? 0) >= 20) {
                scene.text('You have beaten Vitalik 5 times. You cannot play against him anymore.');
                scene.text('You have beaten Kostya 5 times. You cannot play against him anymore.');
                scene.text('You have beaten Sergei 5 times. You cannot play against him anymore.');
                scene.text('You have beaten Coach Genrikh 5 times. You cannot play against him anymore.');
                // TODO-QSP: dynamic text: 'You have beaten Evgeny Kuznetsov '+str(chess_win-20)+' times. He is the only op...
                scene.text('You have beaten Evgeny Kuznetsov ' + String(((s as any).chess_win ?? '')-20) + ' times. He is the only opponent left you can challenge.');
              }
            }
          }
        }
      }
      // TODO-QSP: dynamic text: 'You have won a total of '+str(chess_win)+' chess matches.'
      scene.text('You have won a total of ' + String(((s as any).chess_win ?? '')) + ' chess matches.');
      if (((s as any).chess_win ?? 0) < 5) {
        // TODO-QSP: dynamic text: You are paired against Vitalik, the youngest boy in the club. Despite his age he...
        scene.text('You are paired against Vitalik, the youngest boy in the club. Despite his age he has already achieved rank 4, the lowest official chess rank corresponding to an ELO rating of 1000+.');
        scene.actions([
          { label: 'Play chess with Vitalik', handler: (st: GameState) => {
    (st as any).chess_name = 'Vitalik';
    (st as any).chessV = 10;
    qspGoto(st, 'chessplay', '');
  } },
        ]);
      } else {
        if (((s as any).chess_win ?? 0) < 10) {
          scene.text('You get to play against Kostya, who recently advanced to rank 3 after passing 1400 ELO points.');
          scene.actions([
            { label: 'Play chess with Kostya', handler: (st: GameState) => {
    (st as any).chess_name = 'Kostya';
    (st as any).chessV = 30;
    qspGoto(st, 'chessplay', '');
  } },
          ]);
        } else {
          if (((s as any).chess_win ?? 0) < 15) {
            scene.text('You sit down to play Sergei. You recall that he is a rank 2 player with an ELO rating of more than 1600.');
            scene.actions([
              { label: 'Play chess with Sergei', handler: (st: GameState) => {
    (st as any).chess_name = 'Sergei';
    (st as any).chessV = 50;
    qspGoto(st, 'chessplay', '');
  } },
            ]);
          } else {
            if (((s as any).chess_win ?? 0) < 20) {
              scene.text('You are facing Coach Genrikh. At his peak he achieved an ELO ranking of just over 2000, and despite his skills declining with age he still plays at the level of a rank 1 player.');
              scene.actions([
                { label: 'Play chess with Coach Genrikh', handler: (st: GameState) => {
    (st as any).chess_name = 'Coach Genrikh';
    (st as any).chessV = 70;
    qspGoto(st, 'chessplay', '');
  } },
              ]);
            } else {
              if (((s as any).chess_win ?? 0) >= 20) {
                scene.text('You are challenging Evgeny Kuznetsov. He has already won the regional championship twice and placed well at the nationals each year he has attended. He is already rated above a 2200 in the ELO rankings.');
                scene.actions([
                  { label: 'Play chess with Evgeny', handler: (st: GameState) => {
    (st as any).chess_name = 'Evgeny';
    (st as any).chessV = 90;
    qspGoto(st, 'chessplay', '');
  } },
                ]);
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_commclubs', ''] },
    ]);
  }
  scene.build();
}

export const kruchess: LocationDef = {
  name: 'kruchess',
  title: 'Chess Club',
  region: 'other',
  description: ['Chess club is closed. The coach and some players are tidying away the boards and pieces.'],
  enter: enter,
};
