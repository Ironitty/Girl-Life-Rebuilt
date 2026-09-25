// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAdd(s: GameState, scene: SceneBuilder): void {
  (s as any).spellCompSize = 0;
  ((s as any).spellComplete = (s as any).spellComplete ?? {})[String((s as any).spellCompSize ?? 0)] = ((s as any).totminut ?? 0) + ((s as any).locArgs?.[2] ?? 0);
  ((s as any).spellTimeName = (s as any).spellTimeName ?? {})[String((s as any).spellCompSize ?? 0)] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).spellCompExec = (s as any).spellCompExec ?? {})[String((s as any).spellCompSize ?? 0)] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).spellTickExec = (s as any).spellTickExec ?? {})[String((s as any).spellCompSize ?? 0)] = ((s as any).locArgs?.[4] ?? 0);
  (s as any).spellCompSize = undefined;
  if (String((s as any).locArgs?.[0] ?? '') === 0) {
    (s as any).BeforeTime = ((s as any).prevtotmin ?? 0);
  } else {
    (s as any).BeforeTime = ((s as any).locArgs?.[0] ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    (s as any).AfterTime = ((s as any).totminut ?? 0);
  } else {
    (s as any).AfterTime = ((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).i = 0;
  (s as any).SpellEnds = 0;
  while (true) {
    if (((s as any).i ?? 0) < Object.keys((s as any).spellComplete ?? {}).length) {
      (s as any).NumTicks = ((s as any).AfterTime ?? 0) - ((s as any).BeforeTime ?? 0);
      if (((s as any).spellComplete ?? 0)?.[String((s as any).i ?? 0)] <= ((s as any).AfterTime ?? 0)) {
        (s as any).NumTicks = ((s as any).NumTicks ?? 0) - (((s as any).AfterTime ?? 0) - (((s as any).spellComplete ?? 0)?.[String((s as any).i ?? 0)] ?? 0));
        (s as any).SpellEnds = 1;
      } else {
        (s as any).SpellEnds = 0;
      }
      if (((s as any).NumTicks ?? 0) > 0  &&  ((s as any).spellTickExec ?? 0)?.[String((s as any).i ?? 0)] !== '') {
        (s as any).j = 0;
        while (true) {
          if (((s as any).j ?? 0) < ((s as any).NumTicks ?? 0)) {
            (s as any).j = ((s as any).j ?? 0) + (1);
            break;
          }
        }
      }
      if (((s as any).SpellEnds ?? 0) === 1) {
        if (((s as any).spellCompExec ?? 0)?.[String((s as any).i ?? 0)] !== '') {
        }
        (s as any).spellComplete = undefined;
        (s as any).spellTickExec = undefined;
        (s as any).spellCompExec = undefined;
        (s as any).spellTimeName = undefined;
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      break;
    }
    (s as any).i = undefined;
    (s as any).j = undefined;
    (s as any).NumTicks = undefined;
    (s as any).SpellEnds = undefined;
    (s as any).BeforeTime = undefined;
    (s as any).AfterTime = undefined;
  }
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
