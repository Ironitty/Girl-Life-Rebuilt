// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  (s as any).KGname = 'Predatory flower';
  (s as any).KGOLstrenV = 10;
  (s as any).KGOLspeedV = 10;
  (s as any).KGOLvitalV = 10;
  (s as any).KGOLintelV = 10;
  (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
  (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
  (s as any).KGOLPrizeExp = (Math.floor(Math.random() * 3) + 1);
  (s as any).KGOLPrizeM = (Math.floor(Math.random() * 21) + 10);
  (s as any).KGOLennum = 0;
  (s as any).KGOLbronaV = 0;
  (s as any).KGOLneedDist = 10;
  (s as any).KGOLpowerV = ((s as any).KGOLintelV ?? 0);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).KGname = 'Iridescent beetle';
  (s as any).KGOLstrenV = 20;
  (s as any).KGOLspeedV = 10;
  (s as any).KGOLvitalV = 10;
  (s as any).KGOLintelV = 10;
  (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
  (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
  (s as any).KGOLPrizeExp = (Math.floor(Math.random() * 4) + 2);
  (s as any).KGOLPrizeM = (Math.floor(Math.random() * 21) + 15);
  (s as any).KGOLennum = 1;
  (s as any).KGOLbronaV = 0;
  (s as any).KGOLneedDist = 4;
  (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  (s as any).KGname = 'Sundew';
  (s as any).KGOLstrenV = 20;
  (s as any).KGOLspeedV = 20;
  (s as any).KGOLvitalV = 10;
  (s as any).KGOLintelV = 10;
  (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
  (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
  (s as any).KGOLPrizeExp = (Math.floor(Math.random() * 5) + 3);
  (s as any).KGOLPrizeM = (Math.floor(Math.random() * 21) + 20);
  (s as any).KGOLennum = 2;
  (s as any).KGOLbronaV = 0;
  (s as any).KGOLneedDist = 5;
  (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  (s as any).KGname = 'Toothless dog';
  (s as any).KGOLstrenV = 25;
  (s as any).KGOLspeedV = 20;
  (s as any).KGOLvitalV = 20;
  (s as any).KGOLintelV = 10;
  (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
  (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
  (s as any).KGOLPrizeExp = (Math.floor(Math.random() * 6) + 5);
  (s as any).KGOLPrizeM = (Math.floor(Math.random() * 21) + 30);
  (s as any).KGOLennum = 3;
  (s as any).KGOLbronaV = 0;
  (s as any).KGOLneedDist = 5;
  (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  (s as any).KGname = 'Young cactus';
  (s as any).KGOLstrenV = 25;
  (s as any).KGOLspeedV = 25;
  (s as any).KGOLvitalV = 20;
  (s as any).KGOLintelV = 10;
  (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
  (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
  (s as any).KGOLPrizeExp = (Math.floor(Math.random() * 8) + 7);
  (s as any).KGOLPrizeM = (Math.floor(Math.random() * 26) + 35);
  (s as any).KGOLennum = 4;
  (s as any).KGOLbronaV = 0;
  (s as any).KGOLneedDist = 6;
  (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  (s as any).KGname = 'Toad';
  (s as any).KGOLstrenV = 25;
  (s as any).KGOLspeedV = 30;
  (s as any).KGOLvitalV = 25;
  (s as any).KGOLintelV = 10;
  (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
  (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
  (s as any).KGOLPrizeExp = (Math.floor(Math.random() * 9) + 10);
  (s as any).KGOLPrizeM = (Math.floor(Math.random() * 26) + 40);
  (s as any).KGOLennum = 5;
  (s as any).KGOLbronaV = 0;
  (s as any).KGOLneedDist = 6;
  (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  (s as any).KGname = 'Royal beetle';
  (s as any).KGOLstrenV = 25;
  (s as any).KGOLspeedV = 30;
  (s as any).KGOLvitalV = 35;
  (s as any).KGOLintelV = 10;
  (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
  (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
  (s as any).KGOLPrizeExp = (Math.floor(Math.random() * 9) + 12);
  (s as any).KGOLPrizeM = (Math.floor(Math.random() * 21) + 45);
  (s as any).KGOLennum = 6;
  (s as any).KGOLbronaV = 0;
  (s as any).KGOLneedDist = 4;
  (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
  scene.build();
}

function enter7(s: GameState, scene: SceneBuilder): void {
  (s as any).KGname = 'Spotted mantis';
  (s as any).KGOLstrenV = 35;
  (s as any).KGOLspeedV = 30;
  (s as any).KGOLvitalV = 35;
  (s as any).KGOLintelV = 10;
  (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
  (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
  (s as any).KGOLPrizeExp = (Math.floor(Math.random() * 9) + 14);
  (s as any).KGOLPrizeM = (Math.floor(Math.random() * 21) + 50);
  (s as any).KGOLennum = 7;
  (s as any).KGOLbronaV = 0;
  (s as any).KGOLneedDist = 4;
  (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
  scene.build();
}

function enter8(s: GameState, scene: SceneBuilder): void {
  (s as any).KGname = 'Plague Rat';
  (s as any).KGOLstrenV = 40;
  (s as any).KGOLspeedV = 30;
  (s as any).KGOLvitalV = 40;
  (s as any).KGOLintelV = 10;
  (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
  (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
  (s as any).KGOLPrizeExp = (Math.floor(Math.random() * 9) + 16);
  (s as any).KGOLPrizeM = (Math.floor(Math.random() * 21) + 55);
  (s as any).KGOLennum = 8;
  (s as any).KGOLbronaV = 0;
  (s as any).KGOLneedDist = 4;
  (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
  scene.build();
}

function enter9(s: GameState, scene: SceneBuilder): void {
  (s as any).KGname = 'Prickly cactus';
  (s as any).KGOLstrenV = 40;
  (s as any).KGOLspeedV = 40;
  (s as any).KGOLvitalV = 40;
  (s as any).KGOLintelV = 10;
  (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
  (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
  (s as any).KGOLPrizeExp = (Math.floor(Math.random() * 3) + 18);
  (s as any).KGOLPrizeM = (Math.floor(Math.random() * 26) + 60);
  (s as any).KGOLennum = 9;
  (s as any).KGOLbronaV = 0;
  (s as any).KGOLneedDist = 4;
  (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '0':
      enter0(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    case '6':
      enter6(s, scene);
      break;
    case '7':
      enter7(s, scene);
      break;
    case '8':
      enter8(s, scene);
      break;
    case '9':
      enter9(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const KGOLenemy: LocationDef = {
  name: 'KGOLenemy',
  region: 'kgd',
  enter: enter,
};
