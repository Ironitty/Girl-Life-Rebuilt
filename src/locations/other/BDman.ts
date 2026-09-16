import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGivi(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A41');
  (s as any).npcheight = 'small';
  (s as any).npcbuild = 'thick';
  (s as any).npchair = 'bald';
  (s as any).finance = 2;
  (s as any).vneshBoy = 40;
  (s as any).npcClo = 'a leather jacket and cap';
  (s as any).figurBoy = 2;
  (s as any).titBoy = 1;
  (s as any).hairBoy = 3;
  ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 1;
  ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).boy ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterAshot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A42');
  (s as any).npcheight = 'average growth';
  (s as any).npcbuild = 'muscular';
  (s as any).npchair = 'black';
  (s as any).finance = 1;
  (s as any).vneshBoy = 60;
  (s as any).npcClo = 'a leather jacket and cap';
  (s as any).figurBoy = 2;
  (s as any).titBoy = 2;
  (s as any).hairBoy = 3;
  ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 1;
  ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).boy ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterArthur(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A73');
  (s as any).npcheight = 'average growth';
  (s as any).npcbuild = 'muscular';
  (s as any).npchair = 'black';
  (s as any).finance = 2;
  (s as any).vneshBoy = 100;
  (s as any).npcClo = 'a leather jacket and cap';
  (s as any).figurBoy = 2;
  (s as any).titBoy = 2;
  (s as any).hairBoy = 3;
  ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 1;
  ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).boy ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterAbdula(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A91');
  (s as any).npcheight = 'long';
  (s as any).npcbuild = 'skinny';
  (s as any).npchair = 'gray';
  (s as any).finance = 2;
  (s as any).vneshBoy = 100;
  (s as any).npcClo = 'a leather jacket and cap';
  (s as any).figurBoy = 2;
  (s as any).titBoy = 2;
  (s as any).hairBoy = 3;
  ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 1;
  ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).boy ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterHasan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A92');
  (s as any).npcheight = 'average growth';
  (s as any).npcbuild = 'abdominous';
  (s as any).npchair = 'black';
  (s as any).finance = 2;
  (s as any).vneshBoy = 100;
  (s as any).npcClo = 'a leather jacket and cap';
  (s as any).figurBoy = 2;
  (s as any).titBoy = 2;
  (s as any).hairBoy = 3;
  ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 1;
  ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).boy ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterKamil(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A97');
  (s as any).npcheight = 'average growth';
  (s as any).npcbuild = 'thin';
  (s as any).npchair = 'black';
  (s as any).finance = 2;
  (s as any).vneshBoy = 100;
  (s as any).npcClo = 'a leather jacket and cap';
  (s as any).figurBoy = 2;
  (s as any).titBoy = 2;
  (s as any).hairBoy = 3;
  ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 1;
  ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).boy ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterAslan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A98');
  (s as any).npcheight = 'small';
  (s as any).npcbuild = 'thin';
  (s as any).npchair = 'black';
  (s as any).finance = 2;
  (s as any).vneshBoy = 100;
  (s as any).npcClo = 'a leather jacket and cap';
  (s as any).figurBoy = 2;
  (s as any).titBoy = 2;
  (s as any).hairBoy = 3;
  ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 1;
  ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).boy ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterMuhtar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A99');
  (s as any).npcheight = 'small';
  (s as any).npcbuild = 'thick';
  (s as any).npchair = 'black';
  (s as any).finance = 2;
  (s as any).vneshBoy = 100;
  (s as any).npcClo = 'a leather jacket and cap';
  (s as any).figurBoy = 2;
  (s as any).titBoy = 2;
  (s as any).hairBoy = 3;
  ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 1;
  ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).boy ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'givi':
      enterGivi(s, scene);
      break;
    case 'ashot':
      enterAshot(s, scene);
      break;
    case 'arthur':
      enterArthur(s, scene);
      break;
    case 'abdula':
      enterAbdula(s, scene);
      break;
    case 'hasan':
      enterHasan(s, scene);
      break;
    case 'kamil':
      enterKamil(s, scene);
      break;
    case 'aslan':
      enterAslan(s, scene);
      break;
    case 'muhtar':
      enterMuhtar(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const BDman: LocationDef = {
  name: 'BDman',
  region: 'other',
  enter: enter,
};
