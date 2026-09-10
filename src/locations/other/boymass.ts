// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterA(s: GameState, scene: SceneBuilder): void {
  (s as any).boynum = ((s as any).boynum ?? 0) + (1);
  // TODO-QSP: $bmNane[boynum] = $npclastcalled
  (s as any).bmTip[boynum] = ((s as any).bmtimeTipe ?? 0);
  (s as any).bmHJ[boynum] = 0;
  (s as any).bmBJ[boynum] = 0;
  (s as any).bmSEX[boynum] = 0;
  (s as any).bmANAL[boynum] = 0;
  (s as any).bmGANG[boynum] = 0;
  (s as any).bmGossip[boynum] = 0;
  (s as any).bmFrend[boynum] = 0;
  (s as any).bmKISS[boynum] = 0;
  (s as any).bmTITS[boynum] = 0;
  scene.build();
}

function enterB(s: GameState, scene: SceneBuilder): void {
  if (((s as any).boynumBlock ?? 0) === 0) {
    (s as any).Tboynum = ((s as any).boynum ?? 0);
  }
  if (((s as any).boynumBlock ?? 0) > 0) {
    if (((s as any).bmHJ ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0  ||  ((s as any).bmBJ ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0  ||  ((s as any).bmSEX ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0  ||  ((s as any).bmANAL ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0) {
      if (((s as any).bmTOTSEX ?? 0)?.[String((s as any).Tboynum ?? 0)] === 0) {
        (s as any).bmTOTSEX[Tboynum] = 1;
      }
    }
    // TODO-QSP: gs 'boystat', $bmNane[Tboynum]
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'A':
      enterA(s, scene);
      break;
    case 'B':
      enterB(s, scene);
      break;
    default:
      enterA(s, scene);
      break;
  }
}

export const boymass: LocationDef = {
  name: 'boymass',
  region: 'other',
  enter: enter,
};
