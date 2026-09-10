// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).KGOLstrenV = 10;
  (s as any).KGOLspeedV = 10;
  (s as any).KGOLvitalV = 10;
  (s as any).KGOLintelV = 10;
  (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
  (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
  (s as any).KGOLPrizeExp = Math.floor(Math.random() * 3) + 1;
  (s as any).KGOLPrizeM = Math.floor(Math.random() * 21) + 10;
  (s as any).KGOLennum = 0;
  (s as any).KGOLbronaV = 0;
  (s as any).KGOLneedDist = 10;
  (s as any).KGOLpowerV = ((s as any).KGOLintelV ?? 0);
  if (((s as any).locArgs?.[0] ?? 0) === '1') {
    (s as any).KGOLstrenV = 20;
    (s as any).KGOLspeedV = 10;
    (s as any).KGOLvitalV = 10;
    (s as any).KGOLintelV = 10;
    (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
    (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
    (s as any).KGOLPrizeExp = Math.floor(Math.random() * 4) + 2;
    (s as any).KGOLPrizeM = Math.floor(Math.random() * 21) + 15;
    (s as any).KGOLennum = 1;
    (s as any).KGOLbronaV = 0;
    (s as any).KGOLneedDist = 4;
    (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
  } else {
    (s as any).KGOLstrenV = 20;
    (s as any).KGOLspeedV = 20;
    (s as any).KGOLvitalV = 10;
    (s as any).KGOLintelV = 10;
    (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
    (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
    (s as any).KGOLPrizeExp = Math.floor(Math.random() * 5) + 3;
    (s as any).KGOLPrizeM = Math.floor(Math.random() * 21) + 20;
    (s as any).KGOLennum = 2;
    (s as any).KGOLbronaV = 0;
    (s as any).KGOLneedDist = 5;
    (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
    if (((s as any).locArgs?.[0] ?? 0) === '3') {
      (s as any).KGOLstrenV = 25;
      (s as any).KGOLspeedV = 20;
      (s as any).KGOLvitalV = 20;
      (s as any).KGOLintelV = 10;
      (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
      (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
      (s as any).KGOLPrizeExp = Math.floor(Math.random() * 6) + 5;
      (s as any).KGOLPrizeM = Math.floor(Math.random() * 21) + 30;
      (s as any).KGOLennum = 3;
      (s as any).KGOLbronaV = 0;
      (s as any).KGOLneedDist = 5;
      (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
    } else {
      (s as any).KGOLstrenV = 25;
      (s as any).KGOLspeedV = 25;
      (s as any).KGOLvitalV = 20;
      (s as any).KGOLintelV = 10;
      (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
      (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
      (s as any).KGOLPrizeExp = Math.floor(Math.random() * 8) + 7;
      (s as any).KGOLPrizeM = Math.floor(Math.random() * 26) + 35;
      (s as any).KGOLennum = 4;
      (s as any).KGOLbronaV = 0;
      (s as any).KGOLneedDist = 6;
      (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
      if (((s as any).locArgs?.[0] ?? 0) === '5') {
        (s as any).KGOLstrenV = 25;
        (s as any).KGOLspeedV = 30;
        (s as any).KGOLvitalV = 25;
        (s as any).KGOLintelV = 10;
        (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
        (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
        (s as any).KGOLPrizeExp = Math.floor(Math.random() * 9) + 10;
        (s as any).KGOLPrizeM = Math.floor(Math.random() * 26) + 40;
        (s as any).KGOLennum = 5;
        (s as any).KGOLbronaV = 0;
        (s as any).KGOLneedDist = 6;
        (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
      } else {
        (s as any).KGOLstrenV = 25;
        (s as any).KGOLspeedV = 30;
        (s as any).KGOLvitalV = 35;
        (s as any).KGOLintelV = 10;
        (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
        (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
        (s as any).KGOLPrizeExp = Math.floor(Math.random() * 9) + 12;
        (s as any).KGOLPrizeM = Math.floor(Math.random() * 21) + 45;
        (s as any).KGOLennum = 6;
        (s as any).KGOLbronaV = 0;
        (s as any).KGOLneedDist = 4;
        (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
        if (((s as any).locArgs?.[0] ?? 0) === '7') {
          (s as any).KGOLstrenV = 35;
          (s as any).KGOLspeedV = 30;
          (s as any).KGOLvitalV = 35;
          (s as any).KGOLintelV = 10;
          (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
          (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
          (s as any).KGOLPrizeExp = Math.floor(Math.random() * 9) + 14;
          (s as any).KGOLPrizeM = Math.floor(Math.random() * 21) + 50;
          (s as any).KGOLennum = 7;
          (s as any).KGOLbronaV = 0;
          (s as any).KGOLneedDist = 4;
          (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
        } else {
          (s as any).KGOLstrenV = 40;
          (s as any).KGOLspeedV = 30;
          (s as any).KGOLvitalV = 40;
          (s as any).KGOLintelV = 10;
          (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
          (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
          (s as any).KGOLPrizeExp = Math.floor(Math.random() * 9) + 16;
          (s as any).KGOLPrizeM = Math.floor(Math.random() * 21) + 55;
          (s as any).KGOLennum = 8;
          (s as any).KGOLbronaV = 0;
          (s as any).KGOLneedDist = 4;
          (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
          if (((s as any).locArgs?.[0] ?? 0) === '9') {
            (s as any).KGOLstrenV = 40;
            (s as any).KGOLspeedV = 40;
            (s as any).KGOLvitalV = 40;
            (s as any).KGOLintelV = 10;
            (s as any).KGHPV = ((s as any).KGOLvitalV ?? 0) * 10;
            (s as any).KGManaV = ((s as any).KGOLintelV ?? 0) * 10;
            (s as any).KGOLPrizeExp = Math.floor(Math.random() * 3) + 18;
            (s as any).KGOLPrizeM = Math.floor(Math.random() * 26) + 60;
            (s as any).KGOLennum = 9;
            (s as any).KGOLbronaV = 0;
            (s as any).KGOLneedDist = 4;
            (s as any).KGOLpowerV = ((s as any).KGOLstrenV ?? 0);
          }
        }
      }
    }
  }
  scene.build();
}

export const KGOLenemy: LocationDef = {
  name: 'KGOLenemy',
  region: 'kgd',
  enter: enter,
};
