import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  // TODO-QSP: dynamic text: You arrive at the restaurant and sit at a table. <<$npcdesc>> orders a meal and ...
  scene.text(`You arrive at the restaurant and sit at a table. ${((s as any).npcdesc ?? '')} orders a meal and good wine. You have to wait a little until the food arrives.`);
  // TODO-QSP: dynamic text: <<$npcdesc>> tells you an anecdote:<br>
  scene.text(`${((s as any).npcdesc ?? '')} tells you an anecdote:<br>`);
  qspCall(s, 'anekdot', '');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
      qspCall(s, 'boylove', 'tits');
    }
    if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 30) {
      qspCall(s, 'boylove', 'figure');
    }
  } else {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 20) {
        qspCall(s, 'boylove', 'tits');
      }
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
        qspCall(s, 'boylove', 'figure');
      }
    } else {
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 15) {
        qspCall(s, 'boylove', 'tits');
      }
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 20) {
        qspCall(s, 'boylove', 'figure');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Laugh', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
    // TODO-QSP: xgt 'restoranM', 'a'
  } },
    { label: 'Smile', handler: (st: GameState) => {
    // TODO-QSP: xgt 'restoranM', 'a'
  } },
    { label: 'It\'s not funny', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
    // TODO-QSP: xgt 'restoranM', 'a'
  } },
  ]);
  scene.build();
}

function enterA(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'drugs', 'alcohol', 'wine');
  // TODO-QSP: dynamic text: When your food arrives, <<$npcdesc>> pours you a glass of wine and proposes a to...
  scene.text(`When your food arrives, ${((s as any).npcdesc ?? '')} pours you a glass of wine and proposes a toast to love.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat', handler: (st: GameState) => {
    // TODO-QSP: xgt 'restoranM', 'b'
  } },
  ]);
  scene.build();
}

function enterB(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = 'b';
  (s as any).loc = 'restoranM';
  qspCall(s, 'food', 'medium_meal');
  qspCall(s, 'drugs', 'alcohol', 'wine');
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: After you finish your meal and empty the wine, <<$npcdesc>> offers to take you t...
  scene.text(`After you finish your meal and empty the wine, ${((s as any).npcdesc ?? '')} offers to take you to his home.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go Home', goto: ['sexm', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'a':
      enterA(s, scene);
      break;
    case 'b':
      enterB(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const restoranM: LocationDef = {
  name: 'restoranM',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
