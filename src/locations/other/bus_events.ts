import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  ((s as any).transportVars = (s as any).transportVars ?? {})['bus_event_day'] = ((s as any).daystart ?? 0);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 100) {
    qspGoto(s, 'bus_events', 'placeholder');
  }
  // TODO-QSP: end
  scene.build();
}

function enterPlaceholder(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('This is a placeholder event!!');
  scene.text('Cool stuff to be added here!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
      enterDefault(s, scene);
      break;
  }
}

export const bus_events: LocationDef = {
  name: 'bus_events',
  title: 'This is a placeholder event!!',
  region: 'other',
  enter: enter,
};
