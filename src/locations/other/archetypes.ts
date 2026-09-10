import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFmtPts(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] === 0) {
    return;
  }
  (s as any).temp_fmt['abs'] = (((s as any).ARGS ?? 0)[1] < 0) ? (-((s as any).ARGS ?? 0)[1]) : (qspUntranslated(s, "ARGS[1]", { location: "archetypes" }));
  (s as any).temp_fmt['whole'] = ((s as any).temp_fmt ?? 0)?.['abs'] / 250;
  (s as any).temp_fmt['sign'] = (((s as any).ARGS ?? 0)[1] > 0) ? ('+') : ('-');
  if (((s as any).locArgs?.[2] ?? 0) === 'fine') {
    (s as any).temp_fmt['tenths'] = (((s as any).temp_fmt ?? 0)?.['abs'] % 250) * 10 / 250;
    if (((s as any).temp_fmt ?? 0)?.['whole'] === 0  &&  ((s as any).temp_fmt ?? 0)?.['tenths'] === 0) {
    }
  } else {
    if (((s as any).temp_fmt ?? 0)?.['whole'] === 0) {
    }
  }
  return;
  scene.build();
}

function enterClamp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arch_const ?? 0)?.['point_cap'] > 0) {
    (s as any).arch_vars['' + String((s as any).$ARGS[1] ?? '') + '_points'] = qspFunc(s, 'math', 'int_clamp', ((s as any).arch_vars ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_points'], 0, ((s as any).arch_const ?? 0)?.['point_cap']);
  } else {
    (s as any).arch_vars['' + String((s as any).$ARGS[1] ?? '') + '_points'] = qspUntranslated(s, "max(0, arch_vars['<<ARGS[1]>>_points'])", { location: "archetypes" });
  }
  return;
  scene.build();
}

function enterGetArchetype(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] === 0) {
  } else {
    if (((s as any).ARGS ?? 0)[1] === 2) {
    } else {
      if (((s as any).ARGS ?? 0)[1] === 4) {
      }
      return;
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'fmt_pts':
      enterFmtPts(s, scene);
      break;
    case 'clamp':
      enterClamp(s, scene);
      break;
    case 'get_archetype':
      enterGetArchetype(s, scene);
      break;
    default:
      enterFmtPts(s, scene);
      break;
  }
}

export const archetypes: LocationDef = {
  name: 'archetypes',
  title: '▲',
  region: 'other',
  enter: enter,
};
