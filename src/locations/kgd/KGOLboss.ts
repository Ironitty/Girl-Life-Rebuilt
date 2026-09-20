// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).KGname = 'BOSS "Blue rat"';
  (s as any).KGOLstrenV = 30;
  (s as any).KGOLspeedV = 30;
  (s as any).KGOLvitalV = 100;
  (s as any).KGOLintelV = 10;
  (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
  (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
  (s as any).KGOLPrizeExp = (Math.floor(Math.random() * 26) + 25);
  (s as any).KGOLPrizeM = (Math.floor(Math.random() * 201) + 150);
  (s as any).KGOLennumBoss = 1;
  (s as any).KGOLbronaV = 0;
  (s as any).KGOLneedDist = 3;
  (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
  (s as any).KGOLennum = (-1);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '1':
      enter1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const KGOLboss: LocationDef = {
  name: 'KGOLboss',
  region: 'kgd',
  enter: enter,
};
