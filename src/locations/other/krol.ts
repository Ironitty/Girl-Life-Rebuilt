import { qspCall, qspGoto } from '../_shared/qspBridge';

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
  scene.img('images/pc/items/pet_emporium/rabbit_home.jpg');
  // TODO-QSP: dynamic text: <center><<$namekrol>> rests.</center>
  scene.text(`<center>${((s as any).namekrol || '')} rests.</center>`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['dina', 'brodila'] },
    { label: 'Make a delicious rabbit pie and sell it to the local cafe', handler: (st: GameState) => {
    (s as any).krolik = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'money', 'earn', 200);
    qspGoto(s, 'dina', 'brodila');
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
    default:
      enterDefault(s, scene);
      break;
  }
}

export const krol: LocationDef = {
  name: 'krol',
  region: 'other',
  enter: enter,
};
