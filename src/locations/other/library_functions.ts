import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blizoruk ?? 0) === 500  ||  ((s as any).glassqw ?? 0) === 1) {
    (s as any).glassqw = 1;
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  }
  (s as any).blizoruk = ((s as any).blizoruk ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  if (((s as any).locArgs?.[1] ?? 0) !== 'porn') {
    if (((s as any).trait_vars ?? 0)?.['bookworm'] > 0) {
      (s as any).lastread = ((s as any).totminut ?? 0);
      (s as any).lastreadday = ((s as any).daystart ?? 0);
      (s as any).trait_vars['bookworm_exp'] = ((s as any).trait_vars['bookworm_exp'] ?? 0) + (1);
    }
    if (((s as any).locArgs?.[1] ?? 0) !== '') {
      // TODO-QSP: dynamic "
      if (((s as any).pcs_ ?? 0)((s as any).locArgs?.[1] ?? 0) >= 50) {
        qspCall(s, 'exp_gain', '<<$ARGS[1]>>', Math.floor(Math.random() * 2) + 0);
      } else {
        qspCall(s, 'exp_gain', '<<$ARGS[1]>>', Math.floor(Math.random() * 2) + 1);
        qspCall(s, 'exp_gain', '<<$ARGS[1]>>', Math.floor(Math.random() * 3) + 1);
        // TODO-QSP: end"
      }
    }
  } else {
    if (((s as any).blizoruk ?? 0) === 500  ||  ((s as any).glassqw ?? 0) === 1) {
      (s as any).glassqw = 1;
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
    }
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
  }
  scene.build();
}

export const library_functions: LocationDef = {
  name: 'library_functions',
  title: 'Your book is overdue!',
  region: 'other',
  enter: enter,
};
