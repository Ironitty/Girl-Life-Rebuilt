import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/pc/items/pet_emporium/parrot_home.jpg');
  // TODO-QSP: dynamic text: <center><<$ParrotQW['Name1']>> sitting in his cage.</center>
  scene.text(`<center>${((s as any).ParrotQW ?? 0)?.['Name1']} sitting in his cage.</center>`);
  scene.actions([
    { label: 'Leave', goto: ['dina', 'brodila'] },
    { label: 'Open a window and release your parrot', handler: (st: GameState) => {
    (s as any).ParrotQW['Owned1'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
  }, goto: ['dina', 'brodila'] },
  ]);
  scene.build();
}

function enterStart2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/pc/items/pet_emporium/parrot_home.jpg');
  // TODO-QSP: dynamic text: <center><<$ParrotQW['Name2']>> sitting in his cage.</center>
  scene.text(`<center>${((s as any).ParrotQW ?? 0)?.['Name2']} sitting in his cage.</center>`);
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Open a window and release your parrot', handler: (st: GameState) => {
    if (((s as any).daystart ?? 0) - ((s as any).ParrotQW ?? 0)?.['BuyDate'] > 30) {
      // TODO-QSP: dynamic text: You have become too attached to <<$ParrotQW['Name2']>>. You can't bring yourself...
      scene.text(`You have become too attached to ${((s as any).ParrotQW ?? 0)?.['Name2']}. You can't bring yourself to release him`);
    } else {
      // TODO-QSP: dynamic text: You say goodbye to <<$ParrotQW['Name2']>> and release him
      scene.text(`You say goodbye to ${((s as any).ParrotQW ?? 0)?.['Name2']} and release him`);
      (s as any).ParrotQW['Owned2'] = 0;
      (s as any).minut = ((s as any).minut ?? 0) + 10;
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
      enterStart(s, scene);
      break;
  }
}

export const popu: LocationDef = {
  name: 'popu',
  region: 'other',
  enter: enter,
};
