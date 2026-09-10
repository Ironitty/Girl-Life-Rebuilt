import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) < 8) {
    scene.text('After their drinking session, the officers fall asleep right in the middle of the police station.');
    return;
    scene.actions([
      { label: 'Quietly get up and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  }
  if (((s as any).alko ?? 0) < 6) {
    scene.text('You join them and take sips of your vodka, feeling it slide down your throat and warm up your stomach. As soon as your glass is empty, they refill it with a generous grin and cheer you on to keep going.');
    scene.actions([
      { label: 'Have another drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } else {
    scene.text('The world is spinning and you don\'t think you should have another drink. You politely decline and decide to not get up for a while, trying to make the world become less wobbly.');
    scene.text('You\'re not very successful. Despite your best attempts, the world is just as wobbly a few minutes later.');
  }
  scene.actions([
    { label: 'Leave the police station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_train_hall', ''] },
  ]);
  scene.build();
}

export const katalkinAlko: LocationDef = {
  name: 'katalkinAlko',
  title: 'After their drinking session, the officers fall asleep right',
  region: 'other',
  description: ['After their drinking session, the officers fall asleep right in the middle of the police station.'],
  enter: enter,
};
