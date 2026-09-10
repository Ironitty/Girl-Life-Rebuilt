// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGetXpprv(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] === 0) {
    (s as any).result = 0;
  } else {
    (s as any).result = 1 + (146 * (((s as any).ARGS ?? 0)[1] - 1) * (((s as any).ARGS ?? 0)[1] - 1) / 91);
  }
  return;
  scene.build();
}

function enterGetXpnxt(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 1 + (146 * ((s as any).ARGS ?? 0)[1] * ((s as any).ARGS ?? 0)[1] / 91);
  return;
  scene.build();
}

function enterGetMaxDeg(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).max ?? 0)(200, (102 - ((s as any).min ?? 0)(((s as any).ARGS ?? 0)[1], 100) + ((s as any).ARGS ?? 0)[2]) * 100);
  return;
  scene.build();
}

function enterAddAttToList(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arrpos ?? 0)('att_name', ((s as any).locArgs?.[1] ?? 0)) < 0) {
    // TODO-QSP: $att_name[] = $ARGS[1]
  }
  if (((s as any).locArgs?.[2] ?? 0) !== '') {
    // TODO-QSP: $att_desc[$ARGS[1]] = $ARGS[2]
  }
  return;
  scene.build();
}

function enterAddSklToList(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arrpos ?? 0)('skl_name', ((s as any).locArgs?.[1] ?? 0)) < 0) {
    // TODO-QSP: $skl_name[] = $ARGS[1]
  }
  if (((s as any).locArgs?.[2] ?? 0) !== '') {
    // TODO-QSP: $skl_desc[$ARGS[1]] = $ARGS[2]
  }
  return;
  scene.build();
}

function enterAddTraitToList(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arrpos ?? 0)('traitattskl', ((s as any).locArgs?.[1] ?? 0)) < 0) {
    // TODO-QSP: $traitattskl[] = $ARGS[1]
  }
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_xpprv':
      enterGetXpprv(s, scene);
      break;
    case 'get_xpnxt':
      enterGetXpnxt(s, scene);
      break;
    case 'get_max_deg':
      enterGetMaxDeg(s, scene);
      break;
    case 'add_att_to_list':
      enterAddAttToList(s, scene);
      break;
    case 'add_skl_to_list':
      enterAddSklToList(s, scene);
      break;
    case 'add_trait_to_list':
      enterAddTraitToList(s, scene);
      break;
    default:
      enterGetXpprv(s, scene);
      break;
  }
}

export const stat_funcs: LocationDef = {
  name: 'stat_funcs',
  region: 'other',
  enter: enter,
};
