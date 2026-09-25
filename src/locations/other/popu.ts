import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/pc/items/pet_emporium/parrot_home.jpg');
  scene.text(`<center>${(((s as any).ParrotQW ?? 0)?.['Name1'] ?? '')} sitting in his cage.</center>`);
  scene.actions([
    { label: 'Leave', goto: ['dina', 'brodila'] },
    { label: 'Open a window and release your parrot', handler: (st: GameState) => {
    ((st as any).ParrotQW = (st as any).ParrotQW ?? {})['Owned1'] = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'dina', 'brodila');
  } },
  ]);
  scene.build();
}

function enterStart2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/pc/items/pet_emporium/parrot_home.jpg');
  scene.text(`<center>${(((s as any).ParrotQW ?? 0)?.['Name2'] ?? '')} sitting in his cage.</center>`);
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Open a window and release your parrot', handler: (st: GameState) => {
    if (((st as any).daystart ?? 0) - ((st as any).ParrotQW ?? 0)?.['BuyDate'] > 30) {
      scene.text(`You have become too attached to ${(((st as any).ParrotQW ?? 0)?.['Name2'] ?? '')}. You can't bring yourself to release him`);
    } else {
      scene.text(`You say goodbye to ${(((st as any).ParrotQW ?? 0)?.['Name2'] ?? '')} and release him`);
      ((st as any).ParrotQW = (st as any).ParrotQW ?? {})['Owned2'] = 0;
      (st as any).minut = ((st as any).minut ?? 0) + 10;
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
    case 'start2':
      enterStart2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const popu: LocationDef = {
  name: 'popu',
  region: 'other',
  enter: enter,
};
