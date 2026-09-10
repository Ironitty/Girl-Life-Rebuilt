import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGetBaseStimmag(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 1 + ((s as any).rand ?? 0)(0, 2) + ((s as any).rand ?? 0)(0, 3) + ((s as any).rand ?? 0)(0, 3);
  scene.build();
}

function enterCalcStimtotal(s: GameState, scene: SceneBuilder): void {
  (s as any).tempStim['mag'] = 0;
  (s as any).tempStim['act'] = 0;
  (s as any).tempStim['kink'] = 0;
  (s as any).tempStim['pref'] = qspUntranslated(s, "ARGS[4]", { location: "arousal_funcs" });
  (s as any).tempStim['time'] = 0;
  (s as any).result = (((s as any).tempStim ?? 0)?.['mag'] * ((s as any).tempStim ?? 0)?.['act'] * ((s as any).tempStim ?? 0)?.['kink'] / 100 + ((s as any).tempStim ?? 0)?.['pref']) * ((s as any).tempStim ?? 0)?.['time'] / 120;
  scene.build();
}

function enterStretch(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_amount = ((((s as any).ARGS ?? 0)[2] === 0) ? (1) : (qspUntranslated(s, "ARGS[2]", { location: "arousal_funcs" })));
  if (((s as any).locArgs?.[1] ?? 0) === 'vaginal') {
    if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 0  ||  (!(Math.floor(Math.random() * 4) + 0))) {
      (s as any).pcs_vag = ((s as any).pcs_vag ?? 0) + (((s as any).temp_amount ?? 0));
    }
    if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 1  &&  (!(Math.floor(Math.random() * 3) + 0))) {
      (s as any).pcs_vag = ((s as any).pcs_vag ?? 0) + (((s as any).temp_amount ?? 0));
    }
  } else {
    if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 0  ||  (!(Math.floor(Math.random() * 4) + 0))) {
      (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) + (((s as any).temp_amount ?? 0));
    }
    if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 1  &&  (!(Math.floor(Math.random() * 3) + 0))) {
      (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) + (((s as any).temp_amount ?? 0));
    }
    if (((s as any).locArgs?.[1] ?? 0) === 'oral') {
      if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 0  ||  (!(Math.floor(Math.random() * 4) + 0))) {
        (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + (((s as any).temp_amount ?? 0));
      }
      if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 1  &&  (!(Math.floor(Math.random() * 3) + 0))) {
        (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + (((s as any).temp_amount ?? 0));
      }
    }
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_base_stimmag':
      enterGetBaseStimmag(s, scene);
      break;
    case 'calc_stimtotal':
      enterCalcStimtotal(s, scene);
      break;
    case 'stretch':
      enterStretch(s, scene);
      break;
    default:
      enterGetBaseStimmag(s, scene);
      break;
  }
}

export const arousal_funcs: LocationDef = {
  name: 'arousal_funcs',
  title: 'You rub some lube in and around your anus.',
  region: 'other',
  enter: enter,
};
