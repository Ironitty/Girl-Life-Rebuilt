import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetXpprv(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    (s as any).result = 0;
  } else {
    (s as any).result = 1 + (146 * (((s as any).ARGS ?? 0)[1] - 1) * (((s as any).ARGS ?? 0)[1] - 1) / 91);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetXpnxt(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 1 + (146 * ((s as any).ARGS ?? 0)[1] * ((s as any).ARGS ?? 0)[1] / 91);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetMaxDeg(s: GameState, scene: SceneBuilder): void {
  (s as any).result = Math.max(200, (102 - Math.min(qspUntranslated(s, "ARGS[1]", { location: "stat_funcs" }), 100) + ((s as any).ARGS ?? 0)[2]) * 100);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddAttToList(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).att_name) ? ((s as any).att_name as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) < 0) {
    // TODO-QSP: $att_name[] = $ARGS[1]
  }
  if (((s as any).locArgs?.[2] ?? 0) !== '') {
    // TODO-QSP: $att_desc[$ARGS[1]] = $ARGS[2]
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddSklToList(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).skl_name) ? ((s as any).skl_name as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) < 0) {
    // TODO-QSP: $skl_name[] = $ARGS[1]
  }
  if (((s as any).locArgs?.[2] ?? 0) !== '') {
    // TODO-QSP: $skl_desc[$ARGS[1]] = $ARGS[2]
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddTraitToList(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).traitattskl) ? ((s as any).traitattskl as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) < 0) {
    // TODO-QSP: $traitattskl[] = $ARGS[1]
  }
  return;
  // TODO-QSP: end
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
      enterDefault(s, scene);
      break;
  }
}

export const stat_funcs: LocationDef = {
  name: 'stat_funcs',
  region: 'other',
  enter: enter,
};
