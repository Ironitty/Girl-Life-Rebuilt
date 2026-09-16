// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterA(s: GameState, scene: SceneBuilder): void {
  (s as any).boynum = ((s as any).boynum ?? 0) + (1);
  // TODO-QSP: $bmNane[boynum] = $npclastcalled
  ((s as any).bmTip = (s as any).bmTip ?? {})[String((s as any).boynum ?? 0)] = ((s as any).bmtimeTipe ?? 0);
  ((s as any).bmHJ = (s as any).bmHJ ?? {})[String((s as any).boynum ?? 0)] = 0;
  ((s as any).bmBJ = (s as any).bmBJ ?? {})[String((s as any).boynum ?? 0)] = 0;
  ((s as any).bmSEX = (s as any).bmSEX ?? {})[String((s as any).boynum ?? 0)] = 0;
  ((s as any).bmANAL = (s as any).bmANAL ?? {})[String((s as any).boynum ?? 0)] = 0;
  ((s as any).bmGANG = (s as any).bmGANG ?? {})[String((s as any).boynum ?? 0)] = 0;
  ((s as any).bmGossip = (s as any).bmGossip ?? {})[String((s as any).boynum ?? 0)] = 0;
  ((s as any).bmFrend = (s as any).bmFrend ?? {})[String((s as any).boynum ?? 0)] = 0;
  ((s as any).bmKISS = (s as any).bmKISS ?? {})[String((s as any).boynum ?? 0)] = 0;
  ((s as any).bmTITS = (s as any).bmTITS ?? {})[String((s as any).boynum ?? 0)] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterB(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).boynumBlock ?? 0))) {
    (s as any).Tboynum = ((s as any).boynum ?? 0);
  }
  if (((s as any).boynumBlock ?? 0) > 0) {
    if (((s as any).bmHJ ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0  ||  ((s as any).bmBJ ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0  ||  ((s as any).bmSEX ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0  ||  ((s as any).bmANAL ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0) {
      if (((s as any).bmTOTSEX ?? 0)?.[String((s as any).Tboynum ?? 0)] === 0) {
        ((s as any).bmTOTSEX = (s as any).bmTOTSEX ?? {})[String((s as any).Tboynum ?? 0)] = 1;
      }
    }
    // TODO-QSP: gs 'boystat', $bmNane[Tboynum]
  }
  // TODO-QSP: end
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
      enterDefault(s, scene);
      break;
  }
}

export const boymass: LocationDef = {
  name: 'boymass',
  region: 'other',
  enter: enter,
};
