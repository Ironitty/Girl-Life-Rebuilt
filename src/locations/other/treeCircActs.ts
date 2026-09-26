import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).EntryPoint ?? 0) === String((s as any).locArgs?.[0] ?? '')) {
    scene.actions([
      { label: 'Leave the circle', handler: (st: GameState) => {
    if (((st as any).treeCircLoc ?? 0)[(String((st as any).locArgs?.[0] ?? ''))] === 'pav_parkev') {
      scene.actions([
        { label: 'Park entrance', goto: ['pav_park', 'start'] },
        { label: 'Deeper into the park', goto: ['pav_park', 'deeper_park'] },
      ]);
    } else {
      if (((st as any).treeCircArg ?? 0)[(String((st as any).locArgs?.[0] ?? ''))] === '') {
        dynamicGoto(st, (((st as any).treeCircLoc ?? {}))[String(((st as any).ARGS[0] ?? ''))], '');
      } else {
        dynamicGoto(st, (((st as any).treeCircLoc ?? {}))[String(((st as any).ARGS[0] ?? ''))], (((st as any).treeCircArg ?? {}))[String(((st as any).ARGS[0] ?? ''))]);
      }
    }
  } },
    ]);
  } else {
    if (((s as any).canTeleport ?? 0) === 1  &&  ((s as any).tpKnown ?? 0)[String((s as any).locArgs?.[0] ?? '')] === 1) {
      (s as any).dynAction = 'act \'Will yourself to ' + (((s as any).treeCircName ?? 0)?.[((s as any).locArgs?.[0] ?? 0)] ?? 0) + '\': gs \'castSpell\', \'teleport\', \'' + ((s as any).locArgs?.[0] ?? 0) + '\'';
      dynamicGoto(s, String((s as any).dynAction || ''));
    }
  }
  scene.build();
}

export const treeCircActs: LocationDef = {
  name: 'treeCircActs',
  region: 'other',
  enter: enter,
};
