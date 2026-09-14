import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('The prison cell is not very big, and has almost nothing in it. No toilet, no sink, no bed… except for a wooden plank, there is nothing at all.');
  // TODO-QSP: dynamic text: You have to stay in prison for <<kutime>> more hour(s).
  scene.text(`You have to stay in prison for ${((s as any).kutime || '')} more hour(s).`);
  if (((s as any).kutime ?? 0) > 0) {
    scene.actions([
      { label: 'Sit out your punishment (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).kutime = ((s as any).kutime ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.text('You take a seat on the wooden plank, and have nothing else to do but just wait.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).kutime ?? 0) <= 0) {
      scene.text('You have finally spent enough time in the prison cell, and captain Katalkin comes to let you out.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
      ]);
    }
  }
  scene.build();
}

export const kutuzka: LocationDef = {
  name: 'kutuzka',
  title: 'The prison cell is not very big, and has almost nothing in i',
  region: 'other',
  description: ['The prison cell is not very big, and has almost nothing in it. No toilet, no sink, no bed… except for a wooden plank, there is nothing at all.'],
  enter: enter,
};
