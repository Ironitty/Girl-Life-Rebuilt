import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: You pick up the phone and a female voice answers, "Hello <<$pcs_nickname>>, this...
  scene.text(`You pick up the phone and a female voice answers, "Hello ${((s as any).pcs_nickname ?? 0)}, this is Margaret. Let's meet up in the cafe."`);
  scene.actions([
    { label: 'No today', handler: (st: GameState) => {
    (s as any).qwdogiventday = ((s as any).daystart ?? 0);
    scene.text('"Sorry, I have a lot of things on today, Maybe another time.');
    scene.text('"Okay. I\'ll call next week.');
    scene.actions([
      { label: 'Hang up', goto: ['dina', 'brodila'] },
    ]);
  } },
    { label: 'Sure.', handler: (st: GameState) => {
    (s as any).QWdogReiq = 3;
    (s as any).qwdogiventday = ((s as any).daystart ?? 0);
    scene.text('"Sounds good."');
    scene.text('"Wonderful. I\'ll be waiting in the cafe."');
    scene.actions([
      { label: 'Hang up', goto: ['dina', 'brodila'] },
    ]);
  } },
  ]);
  scene.build();
}

export const qwlocdog: LocationDef = {
  name: 'qwlocdog',
  region: 'other',
  enter: enter,
};
