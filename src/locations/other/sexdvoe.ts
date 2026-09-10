import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (2);
  (s as any).picrand = Math.floor(Math.random() * 2) + 0;
  // TODO-QSP: xgt 'sexdvoe', 'var'
  scene.build();
}

function enterMenu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).SexTypeCheck ?? 0) === 0  &&  ((s as any).picrand ?? 0) > 1) {
    (s as any).SexTypeCheck = 1;
    if (((s as any).picrand ?? 0) === 12) {
      (s as any).DoubleBan = 1;
    }
    if (((s as any).picrand ?? 0) === 40) {
      (s as any).BlowBan = 1;
      (s as any).DoubleBan = 1;
    }
  }
  if (((s as any).BlowBan ?? 0) === 0) {
    scene.actions([
      { label: 'Blow them', handler: (st: GameState) => {
    (s as any).sexdvoeloc = 0;
  }, goto: ['sexdvoe', 'sex'] },
    ]);
  }
  if (((s as any).sameboy ?? 0) === 1) {
    if (((s as any).DoubleBan ?? 0) === 0) {
      scene.actions([
        { label: 'Double penetration', handler: (st: GameState) => {
    (s as any).sexdvoeloc = Math.floor(Math.random() * 2) + 1;
  }, goto: ['sexdvoe', 'sex'] },
      ]);
    }
    if (((s as any).SpitVagBan ?? 0) === 0) {
      scene.actions([
        { label: 'Spit roast (pussy)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = Math.floor(Math.random() * 2) + 3;
  }, goto: ['sexdvoe', 'sex'] },
      ]);
    }
    if (((s as any).SpitAssBan ?? 0) === 0) {
      scene.actions([
        { label: 'Spit roast (ass)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = Math.floor(Math.random() * 2) + 5;
  }, goto: ['sexdvoe', 'sex'] },
      ]);
    }
  } else {
    if (((s as any).DoubleBan ?? 0) === 0) {
      scene.actions([
        { label: 'DP (<<$npcdesc[0]>> (<<$npcID[0]>>) in pussy)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = 1;
  }, goto: ['sexdvoe', 'sex'] },
        { label: 'DP (<<$npcdesc[1]>> (<<$npcID[1]>>) in pussy)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = 2;
  }, goto: ['sexdvoe', 'sex'] },
      ]);
    }
    if (((s as any).SpitVagBan ?? 0) === 0) {
      scene.actions([
        { label: 'Spit roast (<<$npcdesc[0]>> (<<$npcID[0]>>) in pussy)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = 3;
  }, goto: ['sexdvoe', 'sex'] },
        { label: 'Spit roast (<<$npcdesc[1]>> (<<$npcID[1]>>) in pussy)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = 4;
  }, goto: ['sexdvoe', 'sex'] },
      ]);
    }
    if (((s as any).SpitAssBan ?? 0) === 0) {
      scene.actions([
        { label: 'Spit roast (<<$npcdesc[0]>> (<<$npcID[0]>>) in ass)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = 5;
  }, goto: ['sexdvoe', 'sex'] },
        { label: 'Spit roast (<<$npcdesc[1]>> (<<$npcID[1]>>) in ass)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = 6;
  }, goto: ['sexdvoe', 'sex'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Let them choose', handler: (st: GameState) => {
    if (((s as any).BlowBan ?? 0) === 1  &&  ((s as any).DoubleBan ?? 0) !== 1) {
      (s as any).sexdvoe = Math.floor(Math.random() * 3) + 1;
    } else {
      (s as any).sexdvoe = Math.floor(Math.random() * 2) + 2;
      (s as any).sexdvoe = Math.floor(Math.random() * 4) + 0;
    }
    if (((s as any).sexdvoe ?? 0) === 0) {
      (s as any).sexdvoeloc = 0;
    } else {
      (s as any).sexdvoeloc = rand(3, 4);
      if (((s as any).sexdvoe ?? 0) === 2) {
        (s as any).sexdvoeloc = rand(5, 6);
      } else {
        (s as any).sexdvoeloc = rand(1, 2);
      }
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'menu':
      enterMenu(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const sexdvoe: LocationDef = {
  name: 'sexdvoe',
  title: 'After some kissing, it is time to move on to the next stage.',
  region: 'other',
  enter: enter,
};
