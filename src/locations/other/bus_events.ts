import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterEvents(s: GameState, scene: SceneBuilder): void {
  ((s as any).transportVars ?? {})['bus_event_day'] = ((s as any).daystart ?? 0);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 100) {
    scene.actions([{ label: 'Continue', goto: ['bus_events', 'placeholder'] }]);
  }
  scene.build();
}

function enterPlaceholder(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('This is a placeholder event!!');
  scene.text('Cool stuff to be added here!');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'events':
      enterEvents(s, scene);
      break;
    case 'placeholder':
      enterPlaceholder(s, scene);
      break;
    default:
      enterEvents(s, scene);
      break;
  }
}

export const bus_events: LocationDef = {
  name: 'bus_events',
  title: 'This is a placeholder event!!',
  region: 'other',
  enter: enter,
};
