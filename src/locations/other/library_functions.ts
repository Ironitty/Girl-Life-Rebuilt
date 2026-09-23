import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterReadBook(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blizoruk ?? 0) === 500  ||  ((s as any).glassqw ?? 0) === 1) {
    (s as any).glassqw = 1;
    dynamicGoto(s, 'prevLoc', 'prevArg');
  }
  (s as any).blizoruk = ((s as any).blizoruk ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  if (String((s as any).locArgs?.[1] ?? '') !== 'porn') {
    if (((s as any).trait_vars ?? 0)?.['bookworm'] > 0) {
      (s as any).lastread = ((s as any).totminut ?? 0);
      (s as any).lastreadday = ((s as any).daystart ?? 0);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['bookworm_exp'] = ((s as any).trait_vars['bookworm_exp'] ?? 0) + (1);
    }
    if (String((s as any).locArgs?.[1] ?? '') !== '') {
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'read_book':
      enterReadBook(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const library_functions: LocationDef = {
  name: 'library_functions',
  title: 'Your book is overdue!',
  region: 'other',
  enter: enter,
};
