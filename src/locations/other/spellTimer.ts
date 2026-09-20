// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAdd(s: GameState, scene: SceneBuilder): void {
  (s as any).spellCompSize = 0;
  ((s as any).spellComplete = (s as any).spellComplete ?? {})[String((s as any).spellCompSize ?? 0)] = ((s as any).totminut ?? 0) + ((s as any).locArgs?.[2] ?? 0);
  // TODO-QSP: $spellTimeName[spellCompSize] = $ARGS[1]
  // TODO-QSP: $spellCompExec[spellCompSize] = $ARGS[3]
  // TODO-QSP: $spellTickExec[spellCompSize] = $ARGS[4]
  if (Number((s as any).locArgs?.[0] ?? 0) === 0) {
    (s as any).BeforeTime = ((s as any).prevtotmin ?? 0);
  } else {
    (s as any).BeforeTime = ((s as any).locArgs?.[0] ?? 0);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    (s as any).AfterTime = ((s as any).totminut ?? 0);
  } else {
    (s as any).AfterTime = ((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).i = 0;
  (s as any).SpellEnds = 0;
  // TODO-QSP: :SpellTimerLoop
  if (((s as any).i ?? 0) < Object.keys((s as any).spellComplete ?? {}).length) {
    (s as any).NumTicks = ((s as any).AfterTime ?? 0) - ((s as any).BeforeTime ?? 0);
    if (((s as any).spellComplete ?? 0)?.[String((s as any).i ?? 0)] <= ((s as any).AfterTime ?? 0)) {
      (s as any).NumTicks = ((s as any).NumTicks ?? 0) - (((s as any).AfterTime ?? 0) - ((s as any).spellComplete ?? 0)?.[String((s as any).i ?? 0)]);
      (s as any).SpellEnds = 1;
    } else {
      (s as any).SpellEnds = 0;
    }
    if (((s as any).NumTicks ?? 0) > 0  &&  ((s as any).spellTickExec ?? 0)?.[String((s as any).i ?? 0)] !== '') {
      (s as any).j = 0;
      // TODO-QSP: :SpellTickLoop
      if (((s as any).j ?? 0) < ((s as any).NumTicks ?? 0)) {
        (s as any).j = ((s as any).j ?? 0) + (1);
        // TODO-QSP: jump 'SpellTickLoop'
      }
    }
    if (((s as any).SpellEnds ?? 0) === 1) {
      if (((s as any).spellCompExec ?? 0)?.[String((s as any).i ?? 0)] !== '') {
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'SpellTimerLoop'
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'add':
      enterAdd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const spellTimer: LocationDef = {
  name: 'spellTimer',
  region: 'other',
  enter: enter,
};
