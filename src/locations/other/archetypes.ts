import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFmtPts(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    (s as any).result = '0';
    return;
  }
  ((s as any).temp_fmt = (s as any).temp_fmt ?? {})['abs'] = ((String((s as any).locArgs?.[1] ?? '') < 0) ? (-((s as any).locArgs?.[1] ?? 0)) : (((s as any).locArgs?.[1] ?? 0)));
  ((s as any).temp_fmt = (s as any).temp_fmt ?? {})['whole'] = (((s as any).temp_fmt ?? {})?.['abs'] ?? 0) / 250;
  ((s as any).temp_fmt = (s as any).temp_fmt ?? {})['sign'] = ((String((s as any).locArgs?.[1] ?? '') > 0) ? ('+') : ('-'));
  if (String((s as any).locArgs?.[2] ?? '') === 'fine') {
    ((s as any).temp_fmt = (s as any).temp_fmt ?? {})['tenths'] = ((((s as any).temp_fmt ?? {})?.['abs'] ?? 0) % 250) * 10 / 250;
    if (((s as any).temp_fmt ?? 0)?.['whole'] === 0  &&  ((s as any).temp_fmt ?? 0)?.['tenths'] === 0) {
      (s as any).result = (((s as any).temp_fmt ?? 0)?.['sign']) + '&lt;0.1';
    } else {
      (s as any).result = (((s as any).temp_fmt ?? 0)?.['sign']) + String((((s as any).temp_fmt ?? 0)?.['whole'])) + '.' + String((((s as any).temp_fmt ?? 0)?.['tenths']));
    }
  } else {
    if (((s as any).temp_fmt ?? 0)?.['whole'] === 0) {
      (s as any).result = (((s as any).temp_fmt ?? 0)?.['sign']) + '&lt;1';
    } else {
      (s as any).result = (((s as any).temp_fmt ?? {})?.['sign'] ?? 0) + String((((s as any).temp_fmt ?? 0)?.['whole']));
    }
  }
  (s as any).temp_fmt = undefined;
  return;
  scene.build();
}

function enterClamp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arch_const ?? 0)?.['point_cap'] > 0) {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_points'] = qspFunc(s, 'math', 'int_clamp', (((s as any).arch_vars ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_points']), 0, (((s as any).arch_const ?? 0)?.['point_cap']));
  } else {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_points'] = Math.max(0, (((s as any).arch_vars ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_points']));
  }
  return;
  scene.build();
}

function enterGetArchetype(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    (s as any).result = 'bimbo';
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      (s as any).result = 'preppy';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
        (s as any).result = 'prude';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 3) {
          (s as any).result = 'punk';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 4) {
            (s as any).result = 'goth';
          } else {
            (s as any).result = '';
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterGetOpposite(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'bimbo') {
    (s as any).result = ((String((s as any).locArgs?.[2] ?? '') === 0) ? ('prude') : ('punk'));
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'preppy') {
      (s as any).result = ((String((s as any).locArgs?.[2] ?? '') === 0) ? ('punk') : ('goth'));
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'prude') {
        (s as any).result = ((String((s as any).locArgs?.[2] ?? '') === 0) ? ('goth') : ('bimbo'));
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'punk') {
          (s as any).result = ((String((s as any).locArgs?.[2] ?? '') === 0) ? ('bimbo') : ('preppy'));
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'goth') {
            (s as any).result = ((String((s as any).locArgs?.[2] ?? '') === 0) ? ('preppy') : ('prude'));
          } else {
            (s as any).result = '';
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterGetPercentage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arch_const ?? 0)?.['point_cap'] > 0) {
    if (String((s as any).locArgs?.[2] ?? '') === 1) {
      (s as any).temp_gap_gp = Math.max(0, ((s as any).arch_vars ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + '_points'] - (((s as any).arch_const ?? {})?.['point_min'] ?? 0));
      (s as any).result = Math.min(100, ((s as any).temp_gap_gp ?? 0) * 100 / ((((s as any).arch_const ?? {})?.['point_cap'] ?? 0) - (((s as any).arch_const ?? {})?.['point_min'] ?? 0)));
      (s as any).temp_gap_gp = undefined;
    } else {
      (s as any).result = Math.min(100, ((s as any).arch_vars ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + '_points'] * 100 / (((s as any).arch_const ?? {})?.['point_cap'] ?? 0));
    }
  } else {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterGetLvl(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_gl_pts = (((s as any).arch_vars ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_points']);
  if (((s as any).temp_gl_pts ?? 0) < ((s as any).arch_const ?? 0)?.['point_min']) {
    (s as any).result = 0;
  } else {
    (s as any).temp_gl_gap = ((s as any).temp_gl_pts ?? 0) - (((s as any).arch_const ?? {})?.['point_min'] ?? 0);
    if (((s as any).temp_gl_gap ?? 0) < ((s as any).arch_const ?? 0)?.['level_third']) {
      (s as any).result = 1;
    } else {
      if (((s as any).temp_gl_gap ?? 0) < (2 * ((s as any).arch_const ?? 0)?.['level_third'])) {
        (s as any).result = 2;
      } else {
        (s as any).result = 3;
      }
    }
  }
  (s as any).temp_gl_pts = undefined;
  (s as any).temp_gl_gap = undefined;
  return;
  scene.build();
}

function enterGain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['archetypes'] === 1  ||  ((s as any).succubusflag ?? 0) === 1) {
    return;
  }
  if (String((s as any).locArgs?.[4] ?? '') > 0  &&  String((s as any).locArgs?.[3] ?? '') !== '') {
    if (((s as any).arch_vars ?? 0)['cooldown_' + (String((s as any).locArgs?.[3] ?? ''))] > 0  &&  ((s as any).daystart ?? 0) - ((s as any).arch_vars ?? 0)['cooldown_' + (String((s as any).locArgs?.[3] ?? ''))] < String((s as any).locArgs?.[4] ?? '')) {
      return;
    }
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['cooldown_' + String(((s as any).locArgs?.[3] ?? 0))] = ((s as any).daystart ?? 0);
  }
  if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
    (s as any).temp_points = 250;
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === 'small') {
      (s as any).temp_points = 1000;
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
        (s as any).temp_points = 5000;
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'large') {
          (s as any).temp_points = 15000;
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
            (s as any).temp_points = 50000;
          } else {
            (s as any).temp_points = ((String((s as any).locArgs?.[2] ?? '') > 0) ? (((s as any).locArgs?.[2] ?? 0)) : (1));
          }
        }
      }
    }
  }
  ((s as any).arch_vars = (s as any).arch_vars ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_points'] = ((s as any).arch_vars[String(((s as any).locArgs?.[1] ?? 0)) + '_points'] ?? 0) + (((s as any).temp_points ?? 0));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterClamp(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_opp0 = qspFunc(s, 'archetypes', 'get_opposite', ((s as any).locArgs?.[1] ?? 0), 0);
  (s as any).temp_opp1 = qspFunc(s, 'archetypes', 'get_opposite', ((s as any).locArgs?.[1] ?? 0), 1);
  ((s as any).arch_vars = (s as any).arch_vars ?? {})[String(((s as any).temp_opp0 ?? 0)) + '_points'] = ((s as any).arch_vars[String(((s as any).temp_opp0 ?? 0)) + '_points'] ?? 0) - (((s as any).temp_points ?? 0));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_opp0 ?? 0)]; enterClamp(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).arch_vars = (s as any).arch_vars ?? {})[String(((s as any).temp_opp1 ?? 0)) + '_points'] = ((s as any).arch_vars[String(((s as any).temp_opp1 ?? 0)) + '_points'] ?? 0) - (((s as any).temp_points ?? 0));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_opp1 ?? 0)]; enterClamp(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).stat_cfg ?? 0)?.['notify_archetypes'] !== 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_points ?? 0)]; enterTrackArchetype(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).stat_cfg ?? 0)?.['notify_archetypes_opposite'] !== 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_opp0 ?? 0), -((s as any).temp_points ?? 0)]; enterTrackArchetype(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_opp1 ?? 0), -((s as any).temp_points ?? 0)]; enterTrackArchetype(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'story', ((s as any).locArgs?.[3] ?? 0), ((s as any).temp_points ?? 0)]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_opp0 ?? 0), 'opposition', '', -((s as any).temp_points ?? 0)]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_opp1 ?? 0), 'opposition', '', -((s as any).temp_points ?? 0)]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_points = undefined;
  (s as any).temp_opp0 = undefined;
  (s as any).temp_opp1 = undefined;
  return;
  scene.build();
}

function enterLose(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['archetypes'] === 1  ||  ((s as any).succubusflag ?? 0) === 1) {
    return;
  }
  if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
    (s as any).temp_points = 250;
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === 'small') {
      (s as any).temp_points = 1000;
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
        (s as any).temp_points = 5000;
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'large') {
          (s as any).temp_points = 15000;
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
            (s as any).temp_points = 50000;
          } else {
            (s as any).temp_points = ((String((s as any).locArgs?.[2] ?? '') > 0) ? (((s as any).locArgs?.[2] ?? 0)) : (1));
          }
        }
      }
    }
  }
  ((s as any).arch_vars = (s as any).arch_vars ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_points'] = ((s as any).arch_vars[String(((s as any).locArgs?.[1] ?? 0)) + '_points'] ?? 0) - (((s as any).temp_points ?? 0));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterClamp(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).stat_cfg ?? 0)?.['notify_archetypes'] !== 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), -((s as any).temp_points ?? 0)]; enterTrackArchetype(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'story', ((s as any).locArgs?.[3] ?? 0), -((s as any).temp_points ?? 0)]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_points = undefined;
  return;
  scene.build();
}

function enterChange(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['archetypes'] === 1  ||  ((s as any).succubusflag ?? 0) === 1) {
    return;
  }
  (s as any).temp_change = undefined;
  ((s as any).temp_change = (s as any).temp_change ?? {})['mul'] = ((String((s as any).locArgs?.[6] ?? '') > 0) ? (((s as any).locArgs?.[6] ?? 0)) : (1));
  ((s as any).temp_change = (s as any).temp_change ?? {})['bimbo'] = ((s as any).locArgs?.[1] ?? 0) * (((s as any).temp_change ?? {})?.['mul'] ?? 0);
  ((s as any).temp_change = (s as any).temp_change ?? {})['preppy'] = ((s as any).locArgs?.[2] ?? 0) * (((s as any).temp_change ?? {})?.['mul'] ?? 0);
  ((s as any).temp_change = (s as any).temp_change ?? {})['prude'] = ((s as any).locArgs?.[3] ?? 0) * (((s as any).temp_change ?? {})?.['mul'] ?? 0);
  ((s as any).temp_change = (s as any).temp_change ?? {})['punk'] = ((s as any).locArgs?.[4] ?? 0) * (((s as any).temp_change ?? {})?.['mul'] ?? 0);
  ((s as any).temp_change = (s as any).temp_change ?? {})['goth'] = ((s as any).locArgs?.[5] ?? 0) * (((s as any).temp_change ?? {})?.['mul'] ?? 0);
  if (((s as any).temp_change ?? 0)?.['bimbo'] > 0) {
    ((s as any).temp_change = (s as any).temp_change ?? {})['opp_prude'] = ((s as any).temp_change['opp_prude'] ?? 0) + (Math.max(0, (((s as any).temp_change ?? {})?.['bimbo'] ?? 0) - Math.max(0, (((s as any).temp_change ?? 0)?.['prude']))));
    ((s as any).temp_change = (s as any).temp_change ?? {})['opp_punk'] = ((s as any).temp_change['opp_punk'] ?? 0) + (Math.max(0, (((s as any).temp_change ?? {})?.['bimbo'] ?? 0) - Math.max(0, (((s as any).temp_change ?? 0)?.['punk']))));
  }
  if (((s as any).temp_change ?? 0)?.['preppy'] > 0) {
    ((s as any).temp_change = (s as any).temp_change ?? {})['opp_punk'] = ((s as any).temp_change['opp_punk'] ?? 0) + (Math.max(0, (((s as any).temp_change ?? {})?.['preppy'] ?? 0) - Math.max(0, (((s as any).temp_change ?? 0)?.['punk']))));
    ((s as any).temp_change = (s as any).temp_change ?? {})['opp_goth'] = ((s as any).temp_change['opp_goth'] ?? 0) + (Math.max(0, (((s as any).temp_change ?? {})?.['preppy'] ?? 0) - Math.max(0, (((s as any).temp_change ?? 0)?.['goth']))));
  }
  if (((s as any).temp_change ?? 0)?.['prude'] > 0) {
    ((s as any).temp_change = (s as any).temp_change ?? {})['opp_bimbo'] = ((s as any).temp_change['opp_bimbo'] ?? 0) + (Math.max(0, (((s as any).temp_change ?? {})?.['prude'] ?? 0) - Math.max(0, (((s as any).temp_change ?? 0)?.['bimbo']))));
    ((s as any).temp_change = (s as any).temp_change ?? {})['opp_goth'] = ((s as any).temp_change['opp_goth'] ?? 0) + (Math.max(0, (((s as any).temp_change ?? {})?.['prude'] ?? 0) - Math.max(0, (((s as any).temp_change ?? 0)?.['goth']))));
  }
  if (((s as any).temp_change ?? 0)?.['punk'] > 0) {
    ((s as any).temp_change = (s as any).temp_change ?? {})['opp_bimbo'] = ((s as any).temp_change['opp_bimbo'] ?? 0) + (Math.max(0, (((s as any).temp_change ?? {})?.['punk'] ?? 0) - Math.max(0, (((s as any).temp_change ?? 0)?.['bimbo']))));
    ((s as any).temp_change = (s as any).temp_change ?? {})['opp_preppy'] = ((s as any).temp_change['opp_preppy'] ?? 0) + (Math.max(0, (((s as any).temp_change ?? {})?.['punk'] ?? 0) - Math.max(0, (((s as any).temp_change ?? 0)?.['preppy']))));
  }
  if (((s as any).temp_change ?? 0)?.['goth'] > 0) {
    ((s as any).temp_change = (s as any).temp_change ?? {})['opp_preppy'] = ((s as any).temp_change['opp_preppy'] ?? 0) + (Math.max(0, (((s as any).temp_change ?? {})?.['goth'] ?? 0) - Math.max(0, (((s as any).temp_change ?? 0)?.['preppy']))));
    ((s as any).temp_change = (s as any).temp_change ?? {})['opp_prude'] = ((s as any).temp_change['opp_prude'] ?? 0) + (Math.max(0, (((s as any).temp_change ?? {})?.['goth'] ?? 0) - Math.max(0, (((s as any).temp_change ?? 0)?.['prude']))));
  }
  if (((s as any).stat_cfg ?? 0)?.['arch_log_enabled'] === 1) {
    ((s as any).temp_change = (s as any).temp_change ?? {})['cat'] = ((String((s as any).locArgs?.[7] ?? '') !== '') ? (((s as any).locArgs?.[7] ?? 0)) : ('unknown'));
    if (((s as any).temp_change ?? 0)?.['bimbo'] !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bimbo', (((s as any).temp_change ?? 0)?.['cat']), ((s as any).locArgs?.[8] ?? 0), (((s as any).temp_change ?? 0)?.['bimbo'])]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).temp_change ?? 0)?.['preppy'] !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'preppy', (((s as any).temp_change ?? 0)?.['cat']), ((s as any).locArgs?.[8] ?? 0), (((s as any).temp_change ?? 0)?.['preppy'])]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).temp_change ?? 0)?.['prude'] !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'prude', (((s as any).temp_change ?? 0)?.['cat']), ((s as any).locArgs?.[8] ?? 0), (((s as any).temp_change ?? 0)?.['prude'])]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).temp_change ?? 0)?.['punk'] !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'punk', (((s as any).temp_change ?? 0)?.['cat']), ((s as any).locArgs?.[8] ?? 0), (((s as any).temp_change ?? 0)?.['punk'])]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).temp_change ?? 0)?.['goth'] !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'goth', (((s as any).temp_change ?? 0)?.['cat']), ((s as any).locArgs?.[8] ?? 0), (((s as any).temp_change ?? 0)?.['goth'])]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).temp_change ?? 0)?.['opp_bimbo'] !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bimbo', 'opposition', '', -(((s as any).temp_change ?? {})?.['opp_bimbo'] ?? 0)]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).temp_change ?? 0)?.['opp_preppy'] !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'preppy', 'opposition', '', -(((s as any).temp_change ?? {})?.['opp_preppy'] ?? 0)]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).temp_change ?? 0)?.['opp_prude'] !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'prude', 'opposition', '', -(((s as any).temp_change ?? {})?.['opp_prude'] ?? 0)]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).temp_change ?? 0)?.['opp_punk'] !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'punk', 'opposition', '', -(((s as any).temp_change ?? {})?.['opp_punk'] ?? 0)]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).temp_change ?? 0)?.['opp_goth'] !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'goth', 'opposition', '', -(((s as any).temp_change ?? {})?.['opp_goth'] ?? 0)]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  ((s as any).temp_change = (s as any).temp_change ?? {})['bimbo'] = ((s as any).temp_change['bimbo'] ?? 0) - ((((s as any).temp_change ?? 0)?.['opp_bimbo']));
  ((s as any).temp_change = (s as any).temp_change ?? {})['preppy'] = ((s as any).temp_change['preppy'] ?? 0) - ((((s as any).temp_change ?? 0)?.['opp_preppy']));
  ((s as any).temp_change = (s as any).temp_change ?? {})['prude'] = ((s as any).temp_change['prude'] ?? 0) - ((((s as any).temp_change ?? 0)?.['opp_prude']));
  ((s as any).temp_change = (s as any).temp_change ?? {})['punk'] = ((s as any).temp_change['punk'] ?? 0) - ((((s as any).temp_change ?? 0)?.['opp_punk']));
  ((s as any).temp_change = (s as any).temp_change ?? {})['goth'] = ((s as any).temp_change['goth'] ?? 0) - ((((s as any).temp_change ?? 0)?.['opp_goth']));
  if (((s as any).temp_change ?? 0)?.['bimbo'] !== 0) {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['bimbo_points'] = ((s as any).arch_vars['bimbo_points'] ?? 0) + ((((s as any).temp_change ?? 0)?.['bimbo']));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bimbo']; enterClamp(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).temp_change ?? 0)?.['preppy'] !== 0) {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['preppy_points'] = ((s as any).arch_vars['preppy_points'] ?? 0) + ((((s as any).temp_change ?? 0)?.['preppy']));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'preppy']; enterClamp(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).temp_change ?? 0)?.['prude'] !== 0) {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['prude_points'] = ((s as any).arch_vars['prude_points'] ?? 0) + ((((s as any).temp_change ?? 0)?.['prude']));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'prude']; enterClamp(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).temp_change ?? 0)?.['punk'] !== 0) {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['punk_points'] = ((s as any).arch_vars['punk_points'] ?? 0) + ((((s as any).temp_change ?? 0)?.['punk']));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'punk']; enterClamp(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).temp_change ?? 0)?.['goth'] !== 0) {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['goth_points'] = ((s as any).arch_vars['goth_points'] ?? 0) + ((((s as any).temp_change ?? 0)?.['goth']));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'goth']; enterClamp(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).stat_cfg ?? 0)?.['notify_archetypes'] !== 1  &&  ((s as any).stat_cfg ?? 0)?.['notify_archetypes_state'] === 1) {
    if (((s as any).temp_change ?? 0)?.['bimbo']  !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bimbo', (((s as any).temp_change ?? 0)?.['bimbo'])]; enterTrackArchetype(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).temp_change ?? 0)?.['preppy'] !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'preppy', (((s as any).temp_change ?? 0)?.['preppy'])]; enterTrackArchetype(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).temp_change ?? 0)?.['prude']  !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'prude', (((s as any).temp_change ?? 0)?.['prude'])]; enterTrackArchetype(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).temp_change ?? 0)?.['punk']   !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'punk', (((s as any).temp_change ?? 0)?.['punk'])]; enterTrackArchetype(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).temp_change ?? 0)?.['goth']   !== 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'goth', (((s as any).temp_change ?? 0)?.['goth'])]; enterTrackArchetype(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  (s as any).temp_change = undefined;
  return;
  scene.build();
}

function enterFaithGain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arch_vars ?? 0)?.['main_active'] !== 'prude') {
    return;
  }
  if (((s as any).faithVars ?? 0)[String((s as any).locArgs?.[1] ?? '') + '_day'] === ((s as any).daystart ?? 0)) {
    return;
  }
  ((s as any).faithVars = (s as any).faithVars ?? {})[((s as any).locArgs?.[1] ?? 0) + '_day'] = ((s as any).daystart ?? 0);
  (s as any).pcs_faith = Math.min(100, ((s as any).pcs_faith ?? 0) + ((s as any).locArgs?.[2] ?? 0));
  return;
  scene.build();
}

function enterSexChange(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['archetypes'] === 1  ||  ((s as any).succubusflag ?? 0) === 1) {
    return;
  }
  if (((s as any).arch_vars ?? 0)?.['sex_bimbo_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['sex_bimbo_day'] = ((s as any).daystart ?? 0);
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['sex_bimbo_today'] = 0;
  }
  (s as any).temp_sex_bimbo = Math.max(0, Math.min(((s as any).locArgs?.[1] ?? 0), (((s as any).arch_const ?? {})?.['sex_bimbo_daily_cap'] ?? 0) - (((s as any).arch_vars ?? {})?.['sex_bimbo_today'] ?? 0)));
  ((s as any).arch_vars = (s as any).arch_vars ?? {})['sex_bimbo_today'] = ((s as any).arch_vars['sex_bimbo_today'] ?? 0) + (((s as any).temp_sex_bimbo ?? 0));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_sex_bimbo ?? 0), 0, ((s as any).locArgs?.[2] ?? 0), 0, 0, 1, 'story', ((s as any).locArgs?.[3] ?? 0)]; enterChange(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_sex_bimbo = undefined;
  return;
  scene.build();
}

function enterSetActive(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sa_active = '';
  (s as any).temp_sa_index = 0;
  do {
    (s as any).temp_archetype = qspFunc(s, 'archetypes', 'get_archetype', ((s as any).temp_sa_index ?? 0));
    if (((s as any).arch_vars ?? 0)[((s as any).temp_archetype ?? 0) + '_points'] >= ((s as any).arch_const ?? 0)?.['point_min']) {
      if (((s as any).arch_vars ?? 0)[((s as any).temp_archetype ?? 0) + '_points'] > ((s as any).arch_vars ?? 0)[((s as any).temp_sa_active ?? 0) + '_points']) {
        (s as any).temp_sa_active = ((s as any).temp_archetype ?? 0);
      }
    }
    (s as any).temp_sa_index = ((s as any).temp_sa_index ?? 0) + (1);
    if (((s as any).temp_sa_active ?? 0) === 'prude'  &&  ((s as any).arch_vars ?? 0)?.['main_active'] !== 'prude'  &&  ((s as any).calendar_show ?? 0)?.['church'] === 0) {
      ((s as any).calendar_show = (s as any).calendar_show ?? {})['church'] = 1;
      qspCall(s, 'calendar', 'pack', 'add', 'church');
    }
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['main_active'] = ((s as any).temp_sa_active ?? 0);
    (s as any).temp_archetype = undefined;
    (s as any).temp_sa_active = undefined;
    (s as any).temp_sa_index = undefined;
    return;
  } while (((s as any).temp_sa_index ?? 0) < 5);
  scene.build();
}

function enterGetStatePoints(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_gs = (s as any).temp_gs ?? {})['mul'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_gs = (s as any).temp_gs ?? {})['is_student'] = ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  (!((s as any).kanikuli ?? 0));
  ((s as any).temp_gs = (s as any).temp_gs ?? {})['school_hrs'] = ((s as any).temp_gs ?? 0)?.['is_student']  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 15  &&  ((s as any).gschoolVars ?? 0)?.['last_attendance'] === ((s as any).daystart ?? 0);
  ((s as any).temp_gs = (s as any).temp_gs ?? {})['pierce_private'] = ((s as any).pcs_piercings ?? 0)?.['nipples'] > 0  ||  ((s as any).pcs_piercings ?? 0)?.['pussy'] > 0;
  ((s as any).temp_gs = (s as any).temp_gs ?? {})['pierce_facial'] = ((s as any).pcs_piercings ?? 0)?.['brow'] > 0  ||  ((s as any).pcs_piercings ?? 0)?.['nose'] > 0  ||  ((s as any).pcs_piercings ?? 0)?.['lip'] > 0  ||  ((s as any).pcs_piercings ?? 0)?.['tongue'] > 0;
  ((s as any).temp_gs = (s as any).temp_gs ?? {})['pierce_body'] = ((s as any).temp_gs ?? 0)?.['pierce_facial'] !== 0  ||  ((s as any).pcs_piercings ?? 0)?.['navel'] > 0;
  ((s as any).temp_gs = (s as any).temp_gs ?? {})['pierce_non_ear'] = ((s as any).temp_gs ?? 0)?.['pierce_body'] !== 0  ||  ((s as any).temp_gs ?? 0)?.['pierce_private'] !== 0;
  ((s as any).temp_gs = (s as any).temp_gs ?? {})['tattoo_any'] = qspUntranslated(s, "pcs_tattoos['any'] > 0", { location: "archetypes" });
  ((s as any).temp_gs = (s as any).temp_gs ?? {})['tattoo_private'] = ((s as any).pcs_tattoos ?? 0)?.['breast'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['under'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['tramp'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['ass'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['pussy'] > 0;
  ((s as any).temp_gs = (s as any).temp_gs ?? {})['tattoo_visible'] = ((s as any).pcs_tattoos ?? 0)?.['face'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['lip'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['neck'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['back'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['shoulder'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['chest'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['side'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['belly'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['arm'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['wrist'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['hand'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['leg'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['ankle'] > 0;
  (s as any).temp_state = undefined;
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PCloSwim ?? 0))) {
    if (((s as any).PCloBimbo ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (2);
    }
    if (((s as any).PCloPrep ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) + (2);
    }
    if (((s as any).PCloPrude ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) + (2);
    }
    if (((s as any).PCloPunk ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (2);
    }
    if (((s as any).PCloGoth ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) + (3);
    }
    if (((s as any).PCloStyle ?? 0) === 2) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (1);
      ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) - (1);
    } else {
      if (((s as any).PCloStyle ?? 0) === 3) {
        ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) + (1);
      } else {
        if (((s as any).PCloStyle ?? 0) === 4) {
          ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (1);
          ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (1);
        } else {
          if (((s as any).PCloStyle ?? 0) === 5) {
            ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) - (1);
          }
        }
      }
    }
    if (((s as any).PCloStrip ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (1);
    } else {
      if (((s as any).PCloSchool ?? 0) === 1) {
        if (((s as any).temp_gs ?? 0)?.['school_hrs'] === 0) {
          ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) + (1);
          ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) - (1);
        }
        if ((!((s as any).PCloGoth ?? 0))) {
          ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) - (1);
        }
      } else {
        if (((s as any).PCloOffice ?? 0) === 1) {
          ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) + (1);
          ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) - (1);
        } else {
          if (((s as any).PCloSport ?? 0) === 1  &&  (!((s as any).PCloGoth ?? 0))) {
            ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) - (1);
          }
        }
      }
    }
    if (((s as any).PCloInhibit ?? 0) <= 5) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) + (1);
      ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) - (1);
    } else {
      if (((s as any).PCloInhibit ?? 0) <= 10) {
        ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) + (1);
        ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) - (1);
      } else {
        if (((s as any).PCloInhibit ?? 0) >= 40) {
          ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (3);
          ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (1);
        } else {
          if (((s as any).PCloInhibit ?? 0) >= 30) {
            ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (2);
          } else {
            if (((s as any).PCloInhibit ?? 0) >= 20) {
              ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (1);
            }
          }
        }
      }
    }
    if (((s as any).PCloQuality ?? 0) >= 5) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) + (1);
    } else {
      if (((s as any).PCloQuality ?? 0) <= 2) {
        ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) - (2);
      } else {
        if (((s as any).PCloQuality ?? 0) <= 3) {
          ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) - (1);
        }
      }
    }
    if (((s as any).PCloMaxStrength ?? 0) > 0) {
      if (((s as any).PCloStrength ?? 0) * 100 / ((s as any).PCloMaxStrength ?? 0) < 25) {
        ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) - (2);
      } else {
        if (((s as any).PCloStrength ?? 0) * 100 / ((s as any).PCloMaxStrength ?? 0) < 60) {
          ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) - (1);
        }
      }
    }
    if (((s as any).PCloPrice ?? 0) >= 5000) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) + (1);
      ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) - (1);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).temp_state ?? 0)?.['bimbo']), (((s as any).temp_state ?? 0)?.['preppy']), (((s as any).temp_state ?? 0)?.['prude']), (((s as any).temp_state ?? 0)?.['punk']), (((s as any).temp_state ?? 0)?.['goth']), (((s as any).temp_gs ?? 0)?.['mul']), 'clothing']; enterChange(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).temp_state = undefined;
  }
  if (((s as any).shoeworntype ?? 0) !== 'none'  &&  ((s as any).shoeworntype ?? 0) !== '') {
    if (((s as any).PShoBimbo ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (2);
    }
    if (((s as any).PShoPrep ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) + (2);
    }
    if (((s as any).PShoPrude ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) + (1);
    }
    if (((s as any).PShoPunk ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (2);
    }
    if (((s as any).PShoGoth ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) + (3);
    }
    if (((s as any).PShoHeels ?? 0) >= 5) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (1);
    }
    if (((s as any).PShoQuality ?? 0) >= 5) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) + (1);
    }
    if (((s as any).PShoStyle ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (1);
    }
    if (((s as any).PShoStyle2 ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (1);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).temp_state ?? 0)?.['bimbo']), (((s as any).temp_state ?? 0)?.['preppy']), (((s as any).temp_state ?? 0)?.['prude']), (((s as any).temp_state ?? 0)?.['punk']), (((s as any).temp_state ?? 0)?.['goth']), (((s as any).temp_gs ?? 0)?.['mul']), 'shoes']; enterChange(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).temp_state = undefined;
  }
  if ((!((s as any).pcs_makeup ?? 0))) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (2);
  } else {
    if (((s as any).pcs_makeup ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (1);
    } else {
      if (((s as any).pcs_makeup ?? 0) === 3  ||  ((s as any).pcs_makeup ?? 0) === 5) {
        ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) + (1);
      } else {
        if (((s as any).pcs_makeup ?? 0) === 6) {
          ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (2);
        } else {
          if (((s as any).pcs_makeup ?? 0) === 7) {
            ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) + (3);
          }
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).temp_state ?? 0)?.['bimbo']), (((s as any).temp_state ?? 0)?.['preppy']), (((s as any).temp_state ?? 0)?.['prude']), (((s as any).temp_state ?? 0)?.['punk']), (((s as any).temp_state ?? 0)?.['goth']), (((s as any).temp_gs ?? 0)?.['mul']), 'makeup']; enterChange(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_state = undefined;
  if (((s as any).pcs_hairlng ?? 0) <= 30) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (1);
    ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) - (1);
  }
  if (((s as any).pcs_haircol ?? 0) >= 5) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (1);
    ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) + (1);
  }
  if ((!((s as any).pcs_haircol ?? 0))) {
    if (((s as any).nathcol ?? 0) !== 0) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) + (1);
    }
  } else {
    if (((s as any).pcs_haircol ?? 0) === 3) {
      if (((s as any).nathcol ?? 0) !== 3) {
        ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (1);
      }
    } else {
      if (((s as any).pcs_haircol ?? 0) >= 11  &&  ((s as any).pcs_haircol ?? 0) <= 13) {
        ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (1);
      } else {
        if (((s as any).pcs_haircol ?? 0) >= 14  &&  ((s as any).pcs_haircol ?? 0) <= 16) {
          ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) + (1);
        } else {
          if (((s as any).pcs_haircol ?? 0) === 18  ||  ((s as any).pcs_haircol ?? 0) === 19) {
            ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) + (1);
          }
        }
      }
    }
  }
  if (((s as any).pcs_pubes ?? 0) <= 3) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (1);
  }
  if (((s as any).pcs_pubes ?? 0) >= 30) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) + (1);
  }
  if (((s as any).pcs_leghair ?? 0) > 6) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) - (1);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).temp_state ?? 0)?.['bimbo']), (((s as any).temp_state ?? 0)?.['preppy']), (((s as any).temp_state ?? 0)?.['prude']), (((s as any).temp_state ?? 0)?.['punk']), (((s as any).temp_state ?? 0)?.['goth']), (((s as any).temp_gs ?? 0)?.['mul']), 'hair']; enterChange(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_state = undefined;
  if (((s as any).temp_gs ?? 0)?.['pierce_non_ear']) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (1);
  }
  if (((s as any).temp_gs ?? 0)?.['pierce_body']) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (1);
  }
  if (((s as any).temp_gs ?? 0)?.['pierce_facial']) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) + (1);
  }
  if (((s as any).temp_gs ?? 0)?.['pierce_private']) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (1);
    ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (1);
  }
  if (((s as any).temp_gs ?? 0)?.['tattoo_visible']) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) + (1);
    ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (1);
  }
  if (((s as any).temp_gs ?? 0)?.['tattoo_private']) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (1);
    ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (1);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).temp_state ?? 0)?.['bimbo']), (((s as any).temp_state ?? 0)?.['preppy']), (((s as any).temp_state ?? 0)?.['prude']), (((s as any).temp_state ?? 0)?.['punk']), (((s as any).temp_state ?? 0)?.['goth']), (((s as any).temp_gs ?? 0)?.['mul']), 'body_mods']; enterChange(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_state = undefined;
  if (((s as any).bodyVars ?? 0)?.['bust_silicone'] > 0) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (2);
    ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (3);
  }
  if (((s as any).bodyVars ?? 0)?.['butt_silicone'] > 0) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (2);
    ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (2);
  }
  if (((s as any).glass ?? 0) === 1) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) - (1);
    ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) + (1);
  }
  if (((s as any).glass ?? 0) !== 0) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) - (1);
  }
  if (((s as any).pcs_brace ?? 0) === 1) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) - (1);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).temp_state ?? 0)?.['bimbo']), (((s as any).temp_state ?? 0)?.['preppy']), (((s as any).temp_state ?? 0)?.['prude']), (((s as any).temp_state ?? 0)?.['punk']), (((s as any).temp_state ?? 0)?.['goth']), (((s as any).temp_gs ?? 0)?.['mul']), 'body']; enterChange(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_state = undefined;
  if (((s as any).temp_gs ?? 0)?.['is_student']) {
    if (((s as any).grupTipe ?? 0) === 1) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (1);
      ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) + (1);
      ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) - (1);
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) + (1);
        ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) - (1);
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) + (1);
          ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) - (1);
          ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) - (1);
          ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) - (1);
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (1);
            ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (1);
          } else {
            if (((s as any).grupTipe ?? 0) === 5) {
              ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) + (1);
              ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) - (1);
            }
          }
        }
      }
    }
    if (((s as any).chess_rank ?? 0) >= 4) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) + (1);
      ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) - (1);
    }
    if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] >= 2) {
      ((s as any).temp_state = (s as any).temp_state ?? {})['preppy'] = ((s as any).temp_state['preppy'] ?? 0) + (1);
      ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) - (1);
      ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) - (1);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).temp_state ?? 0)?.['bimbo']), (((s as any).temp_state ?? 0)?.['preppy']), (((s as any).temp_state ?? 0)?.['prude']), (((s as any).temp_state ?? 0)?.['punk']), (((s as any).temp_state ?? 0)?.['goth']), (((s as any).temp_gs ?? 0)?.['mul']), 'social']; enterChange(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).temp_state = undefined;
  }
  if (((s as any).alko ?? 0) >= 4) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (1);
    ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (1);
  }
  if (((s as any).drugVars ?? 0)?.['aphrodisiac_timer'] > 0) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['bimbo'] = ((s as any).temp_state['bimbo'] ?? 0) + (1);
    ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (1);
  }
  if (((s as any).drugVars ?? 0)?.['weed_high'] > 0) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (1);
    ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) + (1);
    ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (1);
  }
  if (((s as any).drugVars ?? 0)?.['amphetamine_high'] > 0) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (1);
    ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (1);
  }
  if (((s as any).drugVars ?? 0)?.['heroin_high'] > 0) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['goth'] = ((s as any).temp_state['goth'] ?? 0) + (1);
    ((s as any).temp_state = (s as any).temp_state ?? {})['punk'] = ((s as any).temp_state['punk'] ?? 0) + (1);
    ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) - (2);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).temp_state ?? 0)?.['bimbo']), (((s as any).temp_state ?? 0)?.['preppy']), (((s as any).temp_state ?? 0)?.['prude']), (((s as any).temp_state ?? 0)?.['punk']), (((s as any).temp_state ?? 0)?.['goth']), (((s as any).temp_gs ?? 0)?.['mul']), 'drugs']; enterChange(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_state = undefined;
  if (((s as any).daystart ?? 0) - ((s as any).stat ?? 0)?.['last_sex_day'] >= ((s as any).arch_const ?? 0)?.['sex_chastity_days']) {
    ((s as any).temp_state = (s as any).temp_state ?? {})['prude'] = ((s as any).temp_state['prude'] ?? 0) + (1);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).temp_state ?? 0)?.['bimbo']), (((s as any).temp_state ?? 0)?.['preppy']), (((s as any).temp_state ?? 0)?.['prude']), (((s as any).temp_state ?? 0)?.['punk']), (((s as any).temp_state ?? 0)?.['goth']), (((s as any).temp_gs ?? 0)?.['mul']), 'chastity']; enterChange(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).temp_state = undefined;
  }
  (s as any).temp_state = undefined;
  (s as any).temp_gs = undefined;
  return;
  scene.build();
}

function enterLoop(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arch_const ?? 0)?.['effect_range'] <= 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).totminut ?? 0) <= 0) {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['last_update'] = (((s as any).minut ?? 0) + ((s as any).hour ?? 0) * 60 + ((s as any).daystart ?? 0) * 1440) - 1;
    return;
  }
  if (((s as any).cheatVars ?? 0)?.['archetypes'] === 1  ||  ((s as any).succubusflag ?? 0) === 1) {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['main_active'] = '';
    (s as any).arch_effects = undefined;
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['last_update'] = ((s as any).totminut ?? 0);
    return;
  }
  if (((s as any).inSleep ?? 0) !== 0) {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['last_update'] = ((s as any).totminut ?? 0);
    return;
  }
  (s as any).temp_loop_mul = ((s as any).totminut ?? 0) - (((s as any).arch_vars ?? {})?.['last_update'] ?? 0);
  if ((!((s as any).temp_loop_mul ?? 0))) {
    (s as any).temp_loop_mul = undefined;
    return;
  }
  ((s as any).arch_vars = (s as any).arch_vars ?? {})['last_update'] = ((s as any).totminut ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_loop_mul ?? 0)]; enterGetStatePoints(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_loop_mul ?? 0)]; enterDecay(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetActive(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterComputeWithdrawal(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_loop_mul ?? 0)]; enterApplyEffects(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_loop_mul = undefined;
  return;
  scene.build();
}

function enterGetDecayRate(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_gdr_x = ((s as any).locArgs?.[1] ?? 0) / 1000;
  (s as any).temp_gdr_h = (((s as any).arch_const ?? {})?.['decay_half'] ?? 0) / 1000;
  (s as any).result = (((s as any).arch_const ?? {})?.['decay_cap'] ?? 0) * ((s as any).temp_gdr_x ?? 0) * ((s as any).temp_gdr_x ?? 0) / (((s as any).temp_gdr_x ?? 0) * ((s as any).temp_gdr_x ?? 0) + ((s as any).temp_gdr_h ?? 0) * ((s as any).temp_gdr_h ?? 0));
  (s as any).temp_gdr_x = undefined;
  (s as any).temp_gdr_h = undefined;
  return;
  scene.build();
}

function enterDecay(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_decay_i = 0;
  do {
    (s as any).temp_decay_archetype = qspFunc(s, 'archetypes', 'get_archetype', ((s as any).temp_decay_i ?? 0));
    (s as any).temp_decay_before = (((s as any).arch_vars ?? 0)?.[String(((s as any).temp_decay_archetype ?? 0)) + '_points']);
    (s as any).temp_decay_rate = qspFunc(s, 'archetypes', 'get_decay_rate', ((s as any).temp_decay_before ?? 0));
    (s as any).temp_decay_after = Math.max(0, ((s as any).temp_decay_before ?? 0) - ((s as any).temp_decay_rate ?? 0) * ((s as any).locArgs?.[1] ?? 0));
    ((s as any).arch_vars = (s as any).arch_vars ?? {})[String(((s as any).temp_decay_archetype ?? 0)) + '_points'] = ((s as any).temp_decay_after ?? 0);
    (s as any).temp_decay_delta = ((s as any).temp_decay_after ?? 0) - ((s as any).temp_decay_before ?? 0);
    if (((s as any).temp_decay_delta ?? 0) < 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_decay_archetype ?? 0), 'decay', '', ((s as any).temp_decay_delta ?? 0)]; enterLogEvent(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    (s as any).temp_decay_i = ((s as any).temp_decay_i ?? 0) + (1);
    (s as any).temp_decay_i = undefined;
    (s as any).temp_decay_before = undefined;
    (s as any).temp_decay_rate = undefined;
    (s as any).temp_decay_after = undefined;
    (s as any).temp_decay_delta = undefined;
    (s as any).temp_decay_archetype = undefined;
    return;
  } while (((s as any).temp_decay_i ?? 0) < 5);
  scene.build();
}

function enterApplyEffects(s: GameState, scene: SceneBuilder): void {
  (s as any).arch_effects = undefined;
  if (((s as any).arch_vars ?? 0)?.['main_active'] === '') {
    return;
  }
  ((s as any).arch_temp = (s as any).arch_temp ?? {})['gap_points'] = qspFunc(s, 'math', 'int_clamp', ((s as any).arch_vars ?? 0)['' + qspUntranslated(s, "$\u00000\u0000", { location: "archetypes" }) + '_points'] - (((s as any).arch_const ?? {})?.['point_min'] ?? 0), 0, (((s as any).arch_const ?? 0)?.['effect_range']));
  ((s as any).arch_temp = (s as any).arch_temp ?? {})['basic_effect'] = 2 + (8 * (((s as any).arch_temp ?? {})?.['gap_points'] ?? 0)) / (((s as any).arch_const ?? {})?.['effect_range'] ?? 0);
  ((s as any).arch_temp = (s as any).arch_temp ?? {})['denom'] = (90 * (((s as any).arch_temp ?? {})?.['gap_points'] ?? 0)) / (((s as any).arch_const ?? {})?.['effect_range'] ?? 0) + 30;
  ((s as any).arch_temp = (s as any).arch_temp ?? {})['eff_mul'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).arch_temp = (s as any).arch_temp ?? {})['numer'] = ((((s as any).arch_temp ?? {})?.['gap_points'] ?? 0) * 100 / (((s as any).arch_const ?? {})?.['effect_range'] ?? 0)) * (((s as any).arch_temp ?? {})?.['eff_mul'] ?? 0);
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo') {
    if (((s as any).cheatVars ?? 0)?.['smart_bimbo'] === 0  &&  ((s as any).pcs_horny ?? 0) < ((s as any).arch_const ?? 0)?.['bimbo_arousal_target']) {
      ((s as any).arch_temp = (s as any).arch_temp ?? {})['arousal_gap'] = (((s as any).arch_const ?? {})?.['bimbo_arousal_target'] ?? 0) - ((s as any).pcs_horny ?? 0);
      ((s as any).arch_temp = (s as any).arch_temp ?? {})['rate'] = (((s as any).arch_const ?? {})?.['bimbo_rate_min'] ?? 0) + ((((s as any).arch_const ?? {})?.['bimbo_rate_range'] ?? 0) * (((s as any).arch_temp ?? {})?.['gap_points'] ?? 0)) / (((s as any).arch_const ?? {})?.['effect_range'] ?? 0);
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((((s as any).arch_temp ?? {})?.['arousal_gap'] ?? 0) * (((s as any).arch_temp ?? {})?.['rate'] ?? 0) * (((s as any).arch_temp ?? {})?.['eff_mul'] ?? 0)) / (((s as any).arch_const ?? {})?.['bimbo_rate_divisor'] ?? 0));
      (s as any).pcs_horny = Math.min(((s as any).pcs_horny ?? 0), (((s as any).arch_const ?? 0)?.['bimbo_arousal_target']));
    }
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['appearance_effect'] = 2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['charisma_effect'] = 2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['erotic_dance_effect'] = 2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['pole_dance_effect'] = 2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['heels_effect'] = 2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['service_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['modeling_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['inhib_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['chess_effect'] = -2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['intelligence_effect'] = -2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['perception_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['spirit_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['computer_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['observation_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    ((s as any).arch_effects = (s as any).arch_effects ?? {})['sewing_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
  } else {
    if (((s as any).arch_vars ?? 0)?.['main_active'] === 'preppy') {
      if (((s as any).cheatVars ?? 0)?.['smart_bimbo'] === 0  &&  ((s as any).pcs_willpwr ?? 0) > 20) {
        (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) - ((((s as any).arch_temp ?? {})?.['eff_mul'] ?? 0) / (((s as any).arch_temp ?? {})?.['denom'] ?? 0));
        if ((Math.floor(Math.random() * (((s as any).arch_temp ?? 0)?.['denom'] - 1 + 1)) + (1)) <= ((s as any).arch_temp ?? 0)?.['eff_mul'] % ((s as any).arch_temp ?? 0)?.['denom']) {
          (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) - (1);
        }
      }
      if (((s as any).pcs_mood ?? 0) < 80) {
        ((s as any).arch_temp = (s as any).arch_temp ?? {})['successes'] = (((s as any).arch_temp ?? {})?.['numer'] ?? 0) / 1500;
        if ((Math.floor(Math.random() * 1500) + 1) <= ((s as any).arch_temp ?? 0)?.['numer'] % 1500) {
          ((s as any).arch_temp = (s as any).arch_temp ?? {})['successes'] = ((s as any).arch_temp['successes'] ?? 0) + (1);
        }
        if (((s as any).arch_temp ?? 0)?.['successes'] > 0) {
          qspCall(s, 'mood', 'raise', (((s as any).arch_temp ?? 0)?.['successes']));
        }
      }
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['appearance_effect'] = 2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['charisma_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['disposition_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['modeling_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['dancing_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['people_skills_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['cheerleading_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['persuasion_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['computer_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['makeup_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['sports_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['revealing_sports_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['combat_effect'] = -2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['spirit_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['strength_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['artistic_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['music_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
    } else {
      if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
        if (((s as any).pcs_horny ?? 0) > ((s as any).arch_const ?? 0)?.['prude_arousal_target']) {
          ((s as any).arch_temp = (s as any).arch_temp ?? {})['arousal_gap'] = ((s as any).pcs_horny ?? 0) - (((s as any).arch_const ?? {})?.['prude_arousal_target'] ?? 0);
          ((s as any).arch_temp = (s as any).arch_temp ?? {})['rate'] = (((s as any).arch_const ?? {})?.['prude_rate_min'] ?? 0) + ((((s as any).arch_const ?? {})?.['prude_rate_range'] ?? 0) * (((s as any).arch_temp ?? {})?.['gap_points'] ?? 0)) / (((s as any).arch_const ?? {})?.['effect_range'] ?? 0);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (((((s as any).arch_temp ?? {})?.['arousal_gap'] ?? 0) * (((s as any).arch_temp ?? {})?.['rate'] ?? 0) * (((s as any).arch_temp ?? {})?.['eff_mul'] ?? 0)) / (((s as any).arch_const ?? {})?.['prude_rate_divisor'] ?? 0));
          (s as any).pcs_horny = Math.max(((s as any).pcs_horny ?? 0), (((s as any).arch_const ?? 0)?.['prude_arousal_target']));
        }
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['intelligence_effect'] = 2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['chess_effect'] = 2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['computer_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['observation_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['sewing_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['cleaning_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['appearance_effect'] = -2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['erotic_dance_effect'] = -2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['pole_dance_effect'] = -2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['charisma_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['heels_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['makeup_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['songwriting_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['performance_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['inhib_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        ((s as any).arch_effects = (s as any).arch_effects ?? {})['revealing_sports_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
      } else {
        if (((s as any).arch_vars ?? 0)?.['main_active'] === 'punk') {
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).willpowermax ?? 0)) {
            (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + ((((s as any).arch_temp ?? {})?.['eff_mul'] ?? 0) / (((s as any).arch_temp ?? {})?.['denom'] ?? 0));
            if ((Math.floor(Math.random() * (((s as any).arch_temp ?? 0)?.['denom'] - 1 + 1)) + (1)) <= ((s as any).arch_temp ?? 0)?.['eff_mul'] % ((s as any).arch_temp ?? 0)?.['denom']) {
              (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (1);
            }
          }
          ((s as any).arch_effects = (s as any).arch_effects ?? {})['spirit_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
          ((s as any).arch_effects = (s as any).arch_effects ?? {})['strength_effect'] = 2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
          ((s as any).arch_effects = (s as any).arch_effects ?? {})['combat_effect'] = 2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
          ((s as any).arch_effects = (s as any).arch_effects ?? {})['music_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
          ((s as any).arch_effects = (s as any).arch_effects ?? {})['appearance_effect'] = -4 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
          ((s as any).arch_effects = (s as any).arch_effects ?? {})['modeling_effect'] = -2 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
          ((s as any).arch_effects = (s as any).arch_effects ?? {})['charisma_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
          ((s as any).arch_effects = (s as any).arch_effects ?? {})['dancing_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
          ((s as any).arch_effects = (s as any).arch_effects ?? {})['service_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
          ((s as any).arch_effects = (s as any).arch_effects ?? {})['heels_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
          ((s as any).arch_effects = (s as any).arch_effects ?? {})['computer_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
          ((s as any).arch_effects = (s as any).arch_effects ?? {})['makeup_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
          ((s as any).arch_effects = (s as any).arch_effects ?? {})['cleaning_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
        } else {
          if (((s as any).arch_vars ?? 0)?.['main_active'] === 'goth') {
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).willpowermax ?? 0)) {
              (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + ((((s as any).arch_temp ?? {})?.['eff_mul'] ?? 0) / (((s as any).arch_temp ?? {})?.['denom'] ?? 0));
              if ((Math.floor(Math.random() * (((s as any).arch_temp ?? 0)?.['denom'] - 1 + 1)) + (1)) <= ((s as any).arch_temp ?? 0)?.['eff_mul'] % ((s as any).arch_temp ?? 0)?.['denom']) {
                (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (1);
              }
            }
            if (((s as any).cheatVars ?? 0)?.['smart_bimbo'] === 0) {
              ((s as any).arch_temp = (s as any).arch_temp ?? {})['mood_denom'] = ((((s as any).pcs_mood ?? 0) > 20) ? (1500) : (6000));
              ((s as any).arch_temp = (s as any).arch_temp ?? {})['successes'] = (((s as any).arch_temp ?? {})?.['numer'] ?? 0) / (((s as any).arch_temp ?? {})?.['mood_denom'] ?? 0);
              if ((Math.floor(Math.random() * (((s as any).arch_temp ?? 0)?.['mood_denom'] - 1 + 1)) + (1)) <= ((s as any).arch_temp ?? 0)?.['numer'] % ((s as any).arch_temp ?? 0)?.['mood_denom']) {
                ((s as any).arch_temp = (s as any).arch_temp ?? {})['successes'] = ((s as any).arch_temp['successes'] ?? 0) + (1);
              }
              if (((s as any).arch_temp ?? 0)?.['successes'] > 0) {
                qspCall(s, 'mood', 'lower', (((s as any).arch_temp ?? 0)?.['successes']));
              }
            }
            ((s as any).arch_effects = (s as any).arch_effects ?? {})['spirit_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
            ((s as any).arch_effects = (s as any).arch_effects ?? {})['perception_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
            ((s as any).arch_effects = (s as any).arch_effects ?? {})['artistic_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
            ((s as any).arch_effects = (s as any).arch_effects ?? {})['makeup_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
            ((s as any).arch_effects = (s as any).arch_effects ?? {})['songwriting_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
            ((s as any).arch_effects = (s as any).arch_effects ?? {})['performance_effect'] = 1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
            ((s as any).arch_effects = (s as any).arch_effects ?? {})['charisma_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
            ((s as any).arch_effects = (s as any).arch_effects ?? {})['disposition_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
            ((s as any).arch_effects = (s as any).arch_effects ?? {})['people_skills_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
            ((s as any).arch_effects = (s as any).arch_effects ?? {})['cheerleading_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
            ((s as any).arch_effects = (s as any).arch_effects ?? {})['persuasion_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
            ((s as any).arch_effects = (s as any).arch_effects ?? {})['sports_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
            ((s as any).arch_effects = (s as any).arch_effects ?? {})['revealing_sports_effect'] = -1 * (((s as any).arch_temp ?? {})?.['basic_effect'] ?? 0);
          }
        }
      }
    }
  }
  if (((s as any).cheatVars ?? 0)?.['smart_bimbo']) {
    if (((s as any).arch_effects ?? 0)?.['appearance_effect']    < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['appearance_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['charisma_effect']      < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['charisma_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['erotic_dance_effect']    < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['erotic_dance_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['pole_dance_effect']    < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['pole_dance_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['heels_effect']        < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['heels_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['service_effect']      < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['service_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['modeling_effect']      < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['modeling_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['inhib_effect']        < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['inhib_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['chess_effect']        < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['chess_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['intelligence_effect']    < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['intelligence_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['perception_effect']    < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['perception_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['spirit_effect']      < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['spirit_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['computer_effect']      < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['computer_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['observation_effect']    < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['observation_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['sewing_effect']      < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['sewing_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['disposition_effect']    < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['disposition_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['dancing_effect']      < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['dancing_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['people_skills_effect']    < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['people_skills_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['cheerleading_effect']    < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['cheerleading_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['persuasion_effect']    < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['persuasion_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['makeup_effect']      < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['makeup_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['sports_effect']      < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['sports_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['revealing_sports_effect']  < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['revealing_sports_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['combat_effect']      < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['combat_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['strength_effect']      < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['strength_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['artistic_effect']      < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['artistic_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['music_effect']        < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['music_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['cleaning_effect']      < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['cleaning_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['songwriting_effect']    < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['songwriting_effect'] = 0;
    }
    if (((s as any).arch_effects ?? 0)?.['performance_effect']    < 0) {
      ((s as any).arch_effects = (s as any).arch_effects ?? {})['performance_effect'] = 0;
    }
  }
  (s as any).arch_temp = undefined;
  return;
  scene.build();
}

function enterDailySnapshot(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ds_i = 0;
  do {
    (s as any).temp_ds_archetype = qspFunc(s, 'archetypes', 'get_archetype', ((s as any).temp_ds_i ?? 0));
    (s as any).temp_ds_j = 6;
    while (true) {
      if (((s as any).temp_ds_j ?? 0) > 0) {
        ((s as any).arch_vars = (s as any).arch_vars ?? {})[String(((s as any).temp_ds_archetype ?? 0)) + '_history_' + String(((s as any).temp_ds_j ?? 0))] = (((s as any).arch_vars ?? 0)?.[((s as any).temp_ds_archetype ?? 0) + '_history_' + (((s as any).temp_ds_j ?? 0) - 1)] ?? 0);
        (s as any).temp_ds_j = ((s as any).temp_ds_j ?? 0) - (1);
        break;
      }
      ((s as any).arch_vars = (s as any).arch_vars ?? {})[String(((s as any).temp_ds_archetype ?? 0)) + '_history_0'] = (((s as any).arch_vars ?? 0)?.[((s as any).temp_ds_archetype ?? 0) + '_points'] ?? 0);
      (s as any).temp_ds_sum = 0;
      (s as any).temp_ds_j = 0;
      do {
        (s as any).temp_ds_sum = ((s as any).temp_ds_sum ?? 0) + ((((s as any).arch_vars ?? 0)?.[((s as any).temp_ds_archetype ?? 0) + '_history_' + ((s as any).temp_ds_j ?? 0)] ?? 0));
        (s as any).temp_ds_j = ((s as any).temp_ds_j ?? 0) + (1);
        ((s as any).arch_vars = (s as any).arch_vars ?? {})[String(((s as any).temp_ds_archetype ?? 0)) + '_avg'] = ((s as any).temp_ds_sum ?? 0) / 7;
        (s as any).temp_ds_i = ((s as any).temp_ds_i ?? 0) + (1);
        (s as any).temp_ds_i = undefined;
        (s as any).temp_ds_j = undefined;
        (s as any).temp_ds_sum = undefined;
        (s as any).temp_ds_archetype = undefined;
        return;
      } while (((s as any).temp_ds_j ?? 0) < 7);
    }
  } while (((s as any).temp_ds_i ?? 0) < 5);
  scene.build();
}

function enterComputeWithdrawal(s: GameState, scene: SceneBuilder): void {
  ((s as any).arch_vars = (s as any).arch_vars ?? {})['withdrawal_pct'] = 0;
  if (((s as any).cheatVars ?? 0)?.['no_archetype_withdrawal'] === 0  &&  ((s as any).arch_vars ?? 0)?.['main_active'] !== '') {
    (s as any).temp_cw_avg = (((s as any).arch_vars ?? 0)?.[(((s as any).arch_vars ?? 0)?.['main_active']) + '_avg'] ?? 0);
    if (((s as any).temp_cw_avg ?? 0) > 0) {
      (s as any).temp_cw_cur = (((s as any).arch_vars ?? 0)?.[(((s as any).arch_vars ?? 0)?.['main_active']) + '_points'] ?? 0);
      if (((s as any).temp_cw_cur ?? 0) < ((s as any).temp_cw_avg ?? 0)) {
        ((s as any).arch_vars = (s as any).arch_vars ?? {})['withdrawal_pct'] = ((((s as any).temp_cw_avg ?? 0) - ((s as any).temp_cw_cur ?? 0)) * 100) / ((s as any).temp_cw_avg ?? 0);
      }
    }
  }
  if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] > 40) {
    if (((s as any).pcs_mood ?? 0) > 25) {
      qspCall(s, 'mood', 'lower', 'tiny');
    }
  } else {
    if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] > 20) {
      if (((s as any).pcs_mood ?? 0) > 40) {
        qspCall(s, 'mood', 'lower', 'small');
      }
    }
  }
  (s as any).temp_cw_avg = undefined;
  (s as any).temp_cw_cur = undefined;
  return;
  scene.build();
}

function enterSeedSnapshots(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ss_i = 0;
  do {
    (s as any).temp_ss_archetype = qspFunc(s, 'archetypes', 'get_archetype', ((s as any).temp_ss_i ?? 0));
    (s as any).temp_ss_val = (((s as any).arch_vars ?? 0)?.[((s as any).temp_ss_archetype ?? 0) + '_points'] ?? 0);
    (s as any).temp_ss_j = 0;
    do {
      ((s as any).arch_vars = (s as any).arch_vars ?? {})[String(((s as any).temp_ss_archetype ?? 0)) + '_history_' + String(((s as any).temp_ss_j ?? 0))] = ((s as any).temp_ss_val ?? 0);
      (s as any).temp_ss_j = ((s as any).temp_ss_j ?? 0) + (1);
      ((s as any).arch_vars = (s as any).arch_vars ?? {})[String(((s as any).temp_ss_archetype ?? 0)) + '_avg'] = ((s as any).temp_ss_val ?? 0);
      (s as any).temp_ss_i = ((s as any).temp_ss_i ?? 0) + (1);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterComputeWithdrawal(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).temp_ss_i = undefined;
      (s as any).temp_ss_j = undefined;
      (s as any).temp_ss_val = undefined;
      (s as any).temp_ss_archetype = undefined;
      return;
    } while (((s as any).temp_ss_j ?? 0) < 7);
  } while (((s as any).temp_ss_i ?? 0) < 5);
  scene.build();
}

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['archetypes'] === 1  ||  ((s as any).succubusflag ?? 0) === 1) {
    return;
  }
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo') {
    if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 0) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Bimbo: You\'re, like, super hawt today.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'bimbo', 'status/archetype_bimbo', 1, 'gt \'$menu_character\', \'archetypes\'', 'pos');
    } else {
      if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 10) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Bimbo: You feel, like, kind of lame today.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'bimbo', 'status/archetype_bimbo', 1, 'gt \'$menu_character\', \'archetypes\'');
      } else {
        if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 20) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Bimbo: You feel, like, totally lame today.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'neg', 'status/archetype_bimbo', 1, 'gt \'$menu_character\', \'archetypes\'');
        } else {
          if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 40) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Bimbo: You really feel, like, awful today.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'neg', 'status/archetype_bimbo', 1, 'gt \'$menu_character\', \'archetypes\'');
            qspCall(s, 'stat_display_compute', 'queue_alert', 'Your mood is affected by Bimbo withdrawal.', 'bimbo');
          } else {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Bimbo: You feel, like, horrible today!';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'v_neg', 'status/archetype_bimbo', 1, 'gt \'$menu_character\', \'archetypes\'');
            qspCall(s, 'stat_display_compute', 'queue_alert', 'Your mood is severely affected by Bimbo withdrawal.', 'bimbo');
          }
        }
      }
    }
  } else {
    if (((s as any).arch_vars ?? 0)?.['main_active'] === 'preppy') {
      if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 0) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Preppy: You look amazing and everyone knows it. Today is <i>your</i> day.';
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main_tooltip'] = 'Preppy: You look amazing and everyone knows it. Today is your day.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'preppy', 'status/archetype_preppy', 1, 'gt \'$menu_character\', \'archetypes\'', 'pos');
      } else {
        if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 10) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Preppy: Is that a wrinkle? No... but you can\'t stop checking.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'preppy', 'status/archetype_preppy', 1, 'gt \'$menu_character\', \'archetypes\'');
        } else {
          if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 20) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Preppy: Your smile feels forced. Are people noticing?';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'neg', 'status/archetype_preppy', 1, 'gt \'$menu_character\', \'archetypes\'');
          } else {
            if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 40) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Preppy: You can\'t fake it today. Everything\'s falling apart and everyone can tell.';
              qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'neg', 'status/archetype_preppy', 1, 'gt \'$menu_character\', \'archetypes\'');
              qspCall(s, 'stat_display_compute', 'queue_alert', 'Your mood is affected by Preppy withdrawal.', 'preppy');
            } else {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Preppy: You caught a glimpse of yourself and almost didn\'t recognize her. Who <i>is</i> that?';
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main_tooltip'] = 'Preppy: You caught a glimpse of yourself and almost didn\'t recognize her. Who is that?';
              qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'v_neg', 'status/archetype_preppy', 1, 'gt \'$menu_character\', \'archetypes\'');
              qspCall(s, 'stat_display_compute', 'queue_alert', 'Your mood is severely affected by Preppy withdrawal.', 'preppy');
            }
          }
        }
      }
    } else {
      if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
        if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 0) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Prude: A proper lady keeps her thoughts clean and her posture straight.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'prude', 'status/archetype_prude', 1, 'gt \'$menu_character\', \'archetypes\'', 'pos');
        } else {
          if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 10) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Prude: Your mind wandered somewhere it shouldn\'t have. You shake it off.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'prude', 'status/archetype_prude', 1, 'gt \'$menu_character\', \'archetypes\'');
          } else {
            if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 20) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Prude: Indecent thoughts keep creeping in. This isn\'t like you.';
              qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'neg', 'status/archetype_prude', 1, 'gt \'$menu_character\', \'archetypes\'');
            } else {
              if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 40) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Prude: You feel flushed and distracted. Why can\'t you just <i>focus</i>?';
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main_tooltip'] = 'Prude: You feel flushed and distracted. Why can\'t you just focus?';
                qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'neg', 'status/archetype_prude', 1, 'gt \'$menu_character\', \'archetypes\'');
                qspCall(s, 'stat_display_compute', 'queue_alert', 'Your mood is affected by Prude withdrawal.', 'prude');
              } else {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Prude: Your skin feels too tight and everything is <i>too much</i>. What\'s happening to you?';
                qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'v_neg', 'status/archetype_prude', 1, 'gt \'$menu_character\', \'archetypes\'');
                qspCall(s, 'stat_display_compute', 'queue_alert', 'Your mood is severely affected by Prude withdrawal.', 'prude');
              }
            }
          }
        }
      } else {
        if (((s as any).arch_vars ?? 0)?.['main_active'] === 'punk') {
          if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 0) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Punk: You feel rebellious.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'punk', 'status/archetype_punk', 1, 'gt \'$menu_character\', \'archetypes\'', 'pos');
          } else {
            if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 10) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Punk: You don\'t really feel like rebelling.';
              qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'punk', 'status/archetype_punk', 1, 'gt \'$menu_character\', \'archetypes\'');
            } else {
              if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 20) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Punk: You can\'t be bothered to rebel today.';
                qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'neg', 'status/archetype_punk', 1, 'gt \'$menu_character\', \'archetypes\'');
              } else {
                if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 40) {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Punk: Your anger against the world is mute.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'neg', 'status/archetype_punk', 1, 'gt \'$menu_character\', \'archetypes\'');
                  qspCall(s, 'stat_display_compute', 'queue_alert', 'Your mood is affected by Punk withdrawal.', 'punk');
                } else {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Punk: The patriarchy has won this day!';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'v_neg', 'status/archetype_punk', 1, 'gt \'$menu_character\', \'archetypes\'');
                  qspCall(s, 'stat_display_compute', 'queue_alert', 'Your mood is severely affected by Punk withdrawal.', 'punk');
                }
              }
            }
          }
        } else {
          if (((s as any).arch_vars ?? 0)?.['main_active'] === 'goth') {
            if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 0) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Goth: Baby bat is in touch with her dark side today.';
              qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'goth', 'status/archetype_goth', 1, 'gt \'$menu_character\', \'archetypes\'', 'pos');
            } else {
              if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 10) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Goth: Today\'s more of a struggle than normal!';
                qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'goth', 'status/archetype_goth', 1, 'gt \'$menu_character\', \'archetypes\'');
              } else {
                if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 20) {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Goth: You\'re not feeling creative today; when\'s today going to end?';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'neg', 'status/archetype_goth', 1, 'gt \'$menu_character\', \'archetypes\'');
                } else {
                  if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 40) {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Goth: This is a really depressing day!';
                    qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'neg', 'status/archetype_goth', 1, 'gt \'$menu_character\', \'archetypes\'');
                    qspCall(s, 'stat_display_compute', 'queue_alert', 'Your mood is severely affected by Goth withdrawal.', 'goth');
                  } else {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['archetype_main'] = 'Goth: Today\'s got to end! Right?!';
                    qspCall(s, 'stat_display_compute', 'queue_msg', 'archetype_main', 'v_neg', 'status/archetype_goth', 1, 'gt \'$menu_character\', \'archetypes\'');
                    qspCall(s, 'stat_display_compute', 'queue_alert', 'Your mood is severely affected by Goth withdrawal.', 'goth');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['arch_difficulty'] === -2) {
    (s as any).temp_diff_num = 1;
    (s as any).temp_diff_den = 4;
  } else {
    if (((s as any).cheatVars ?? 0)?.['arch_difficulty'] === -1) {
      (s as any).temp_diff_num = 1;
      (s as any).temp_diff_den = 2;
    } else {
      if (((s as any).cheatVars ?? 0)?.['arch_difficulty'] === 1) {
        (s as any).temp_diff_num = 2;
        (s as any).temp_diff_den = 1;
      } else {
        if (((s as any).cheatVars ?? 0)?.['arch_difficulty'] === 2) {
          (s as any).temp_diff_num = 4;
          (s as any).temp_diff_den = 1;
        } else {
          (s as any).temp_diff_num = 1;
          (s as any).temp_diff_den = 1;
        }
      }
    }
  }
  ((s as any).arch_const = (s as any).arch_const ?? {})['point_cap'] = 2000000;
  ((s as any).arch_const = (s as any).arch_const ?? {})['point_min'] = 50000 * ((s as any).temp_diff_num ?? 0) / ((s as any).temp_diff_den ?? 0);
  ((s as any).arch_const = (s as any).arch_const ?? {})['points_full_effect'] = 500000 * ((s as any).temp_diff_num ?? 0) / ((s as any).temp_diff_den ?? 0);
  ((s as any).arch_const = (s as any).arch_const ?? {})['effect_range'] = (((s as any).arch_const ?? {})?.['points_full_effect'] ?? 0) - (((s as any).arch_const ?? {})?.['point_min'] ?? 0);
  ((s as any).arch_const = (s as any).arch_const ?? {})['level_third'] = (((s as any).arch_const ?? {})?.['effect_range'] ?? 0) / 3;
  ((s as any).arch_const = (s as any).arch_const ?? {})['decay_half'] = (((s as any).arch_const ?? {})?.['points_full_effect'] ?? 0) * 4 / 5;
  ((s as any).arch_const = (s as any).arch_const ?? {})['decay_cap'] = 29;
  ((s as any).arch_const = (s as any).arch_const ?? {})['bimbo_arousal_target'] = 150;
  ((s as any).arch_const = (s as any).arch_const ?? {})['bimbo_rate_divisor'] = 6750;
  ((s as any).arch_const = (s as any).arch_const ?? {})['bimbo_rate_min'] = (5010 * (((s as any).arch_const ?? {})?.['bimbo_rate_divisor'] ?? 0)) / 480000;
  ((s as any).arch_const = (s as any).arch_const ?? {})['bimbo_rate_range'] = (5010 * (((s as any).arch_const ?? {})?.['bimbo_rate_divisor'] ?? 0)) / 120000 - (((s as any).arch_const ?? {})?.['bimbo_rate_min'] ?? 0);
  ((s as any).arch_const = (s as any).arch_const ?? {})['prude_arousal_target'] = 30;
  ((s as any).arch_const = (s as any).arch_const ?? {})['prude_rate_divisor'] = 6750;
  ((s as any).arch_const = (s as any).arch_const ?? {})['prude_rate_min'] = (4780 * (((s as any).arch_const ?? {})?.['prude_rate_divisor'] ?? 0)) / 480000;
  ((s as any).arch_const = (s as any).arch_const ?? {})['prude_rate_range'] = (4780 * (((s as any).arch_const ?? {})?.['prude_rate_divisor'] ?? 0)) / 120000 - (((s as any).arch_const ?? {})?.['prude_rate_min'] ?? 0);
  (s as any).temp_diff_num = undefined;
  (s as any).temp_diff_den = undefined;
  ((s as any).arch_const = (s as any).arch_const ?? {})['sex_bimbo_daily_cap'] = 2500;
  ((s as any).arch_const = (s as any).arch_const ?? {})['sex_chastity_days'] = 14;
  ((s as any).arch_const = (s as any).arch_const ?? {})['sex_chastity_bonus_prude'] = 2700;
  ((s as any).arch_vars = (s as any).arch_vars ?? {})['last_update'] = ((((s as any).totminut ?? 0) <= 0) ? (((s as any).minut ?? 0) + ((s as any).hour ?? 0) * 60 + ((s as any).daystart ?? 0) * 1440) : (((s as any).totminut ?? 0)));
  return;
  scene.build();
}

function enterArchTabs(s: GameState, scene: SceneBuilder): void {
  (s as any).arch_tabs_h = '<center><b><table width="30%" cellspacing="0" cellpadding="0"><tr>';
  if (String((s as any).locArgs?.[1] ?? '') === 'main') {
    (s as any).arch_tabs_h = ((s as any).arch_tabs_h ?? 0) + ('<th>Main</th>');
  } else {
    (s as any).arch_tabs_h = ((s as any).arch_tabs_h ?? 0) + ('<th><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027); return false;">Main</a></th>');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'catalog') {
    (s as any).arch_tabs_h = ((s as any).arch_tabs_h ?? 0) + ('<th>Catalog</th>');
  } else {
    (s as any).arch_tabs_h = ((s as any).arch_tabs_h ?? 0) + ('<th><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">Catalog</a></th>');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'history') {
    (s as any).arch_tabs_h = ((s as any).arch_tabs_h ?? 0) + ('<th>History</th>');
  } else {
    if (((s as any).stat_cfg ?? 0)?.['arch_log_enabled'] === 0) {
      (s as any).arch_tabs_h = ((s as any).arch_tabs_h ?? 0) + ('<th title="Enable via the Settings page"><font color="#888888">History</font></th>');
    } else {
      (s as any).arch_tabs_h = ((s as any).arch_tabs_h ?? 0) + ('<th><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027history\u0027); return false;">History</a></th>');
    }
  }
  (s as any).arch_tabs_h = ((s as any).arch_tabs_h ?? 0) + ('</tr></table></b></center>');
  (s as any).arch_tabs_h = undefined;
  return;
  scene.build();
}

function enterDisplayPage(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['labels, 0'] = 'Bimbo';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['grads, 0'] = 'mono:bimbo';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['opp, 0'] = 'Prude &amp; Punk';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['labels, 1'] = 'Preppy';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['grads, 1'] = 'mono:accent';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['opp, 1'] = 'Punk &amp; Goth';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['labels, 2'] = 'Prude';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['grads, 2'] = 'mono:neutral';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['opp, 2'] = 'Goth &amp; Bimbo';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['labels, 3'] = 'Punk';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['grads, 3'] = 'mono:punk';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['opp, 3'] = 'Bimbo &amp; Preppy';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['labels, 4'] = 'Goth';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['grads, 4'] = 'mono:goth';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['opp, 4'] = 'Preppy &amp; Prude';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['colors, 0'] = (((s as any).theme_hex ?? 0)?.['bimbo']);
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['colors, 1'] = (((s as any).theme_hex ?? 0)?.['accent']);
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['colors, 2'] = (((s as any).theme_hex ?? 0)?.['neutral']);
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['colors, 3'] = (((s as any).theme_hex ?? 0)?.['punk']);
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['colors, 4'] = (((s as any).theme_hex ?? 0)?.['goth']);
  if (((s as any).arch_vars ?? 0)?.['main_active'] !== '') {
    ((s as any).temp_tv = (s as any).temp_tv ?? {})['active'] = (((s as any).arch_vars ?? 0)?.['main_active']);
    ((s as any).temp_tv = (s as any).temp_tv ?? {})['idx'] = 0;
    while (true) {
      if (qspFunc(s, 'archetypes', 'get_archetype', ((s as any).temp_tv ?? 0)?.['idx']) === ((s as any).temp_tv ?? 0)?.['active']) {
        ((s as any).temp_tv = (s as any).temp_tv ?? {})['active_label'] = (((s as any).temp_tv ?? 0)?.['labels, ' + String((((s as any).temp_tv ?? 0)?.['idx']))] ?? 0);
        ((s as any).temp_tv = (s as any).temp_tv ?? {})['active_color'] = (((s as any).temp_tv ?? 0)?.['colors, ' + String((((s as any).temp_tv ?? 0)?.['idx']))] ?? 0);
      } else {
        ((s as any).temp_tv = (s as any).temp_tv ?? {})['idx'] = ((s as any).temp_tv['idx'] ?? 0) + (1);
        if (((s as any).temp_tv ?? 0)?.['idx'] < 5) {
          break;
        }
      }
      scene.text(`<table width="82%" align="center" cellpadding="0" cellspacing="0" style="border-left: 4px solid ${(((s as any).temp_tv ?? 0)?.['active_color'] ?? '')}; margin: 4px auto 8px;">`);
      scene.text('<tr><td style="padding: 8px 14px;">');
      ((s as any).temp_tv = (s as any).temp_tv ?? {})['pct'] = (((s as any).arch_vars ?? 0)[(((s as any).temp_tv ?? {})?.['active'] ?? 0) + '_points'] * 100) / (((s as any).arch_const ?? {})?.['points_full_effect'] ?? 0);
      if (((s as any).temp_tv ?? 0)?.['pct'] > 100) {
        ((s as any).temp_tv = (s as any).temp_tv ?? {})['pct'] = 100;
      }
      scene.text(`<span style="color: ${(((s as any).temp_tv ?? 0)?.['active_color'] ?? '')}; font-size: 1.1em;"><b>${(((s as any).temp_tv ?? 0)?.['active_label'] ?? '')}</b></span>&nbsp;<font color="#888888">— ${(((s as any).temp_tv ?? 0)?.['pct'] ?? '')}%</font>`);
      if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] > 0) {
        if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 10) {
          scene.text(qspFunc(s, 'wrap', 'pos', '● Mild withdrawal (' + $str(arch_vars['withdrawal_pct']) + '%)'));
        } else {
          if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 20) {
            scene.text(qspFunc(s, 'wrap', 'neutral', '● Moderate withdrawal (' + $str(arch_vars['withdrawal_pct']) + '%)'));
          } else {
            if (((s as any).arch_vars ?? 0)?.['withdrawal_pct'] <= 40) {
              scene.text(qspFunc(s, 'wrap', 'neg', '● Severe withdrawal (' + $str(arch_vars['withdrawal_pct']) + '%)'));
            } else {
              scene.text(qspFunc(s, 'wrap', 'v_neg b', '● Critical withdrawal (' + $str(arch_vars['withdrawal_pct']) + '%)!'));
            }
          }
        }
      }
      if (((s as any).temp_tv ?? 0)?.['active'] === 'bimbo') {
        scene.text('▲');
        scene.text('<br>▼');
        scene.text('<br>◆');
      } else {
        if (((s as any).temp_tv ?? 0)?.['active'] === 'preppy') {
          scene.text('▲');
          scene.text('<br>▼');
          scene.text('<br>◆');
        } else {
          if (((s as any).temp_tv ?? 0)?.['active'] === 'prude') {
            scene.text('▲');
            scene.text('<br>▼');
            scene.text('<br>◆');
          } else {
            if (((s as any).temp_tv ?? 0)?.['active'] === 'punk') {
              scene.text('▲');
              scene.text('<br>▼');
              scene.text('<br>◆');
            } else {
              if (((s as any).temp_tv ?? 0)?.['active'] === 'goth') {
                scene.text('▲');
                scene.text('<br>▼');
                scene.text('<br>◆');
              }
            }
          }
        }
      }
      scene.text('</td></tr></table>');
    }
  } else {
    scene.text(`<center><font color="#888888"><i>No active archetype — gain at least ${(((s as any).arch_const ?? {})?.['point_min'] ?? 0) / 250} points in any archetype to activate it.</i></font></center>`);
  }
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['max'] = (((s as any).arch_const ?? 0)?.['points_full_effect']);
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['saved_bar_width'] = (((s as any).stat_cfg ?? 0)?.['bar_width']);
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['bar_width'] = 740;
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['border'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('#555555') : ('#aaaaaa'));
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['html'] = '<table cellpadding="0" cellspacing="0">';
  ((s as any).temp_tv = (s as any).temp_tv ?? {})['i'] = 0;
  do {
    ((s as any).temp_tv = (s as any).temp_tv ?? {})['name'] = qspFunc(s, 'archetypes', 'get_archetype', (((s as any).temp_tv ?? 0)?.['i']));
    ((s as any).temp_tv = (s as any).temp_tv ?? {})['pts'] = (((s as any).arch_vars ?? 0)?.[(((s as any).temp_tv ?? 0)?.['name']) + '_points'] ?? 0);
    ((s as any).temp_tv = (s as any).temp_tv ?? {})['bar'] = qspFunc(s, 'progressbar', (((s as any).temp_tv ?? 0)?.['grads, ' + String((((s as any).temp_tv ?? 0)?.['i']))] ?? 0), (((s as any).temp_tv ?? 0)?.['pts']), (((s as any).temp_tv ?? 0)?.['max']), 0, 0, '', 'none', '', 1);
    if (((s as any).temp_tv ?? 0)?.['name'] === ((s as any).arch_vars ?? 0)?.['main_active']) {
      ((s as any).temp_tv = (s as any).temp_tv ?? {})['lbl'] = '<b><font color="' + (((s as any).temp_tv ?? 0)?.['colors, ' + String((((s as any).temp_tv ?? 0)?.['i']))] ?? 0) + '">' + (((s as any).temp_tv ?? 0)?.['labels, ' + String((((s as any).temp_tv ?? 0)?.['i']))] ?? 0) + '</font></b>';
    } else {
      ((s as any).temp_tv = (s as any).temp_tv ?? {})['lbl'] = '<font color="' + (((s as any).temp_tv ?? 0)?.['colors, ' + String((((s as any).temp_tv ?? 0)?.['i']))] ?? 0) + '">' + (((s as any).temp_tv ?? 0)?.['labels, ' + String((((s as any).temp_tv ?? 0)?.['i']))] ?? 0) + '</font>';
    }
    ((s as any).temp_tv = (s as any).temp_tv ?? {})['html'] = ((s as any).temp_tv['html'] ?? 0) + ('<tr>');
    ((s as any).temp_tv = (s as any).temp_tv ?? {})['html'] = ((s as any).temp_tv['html'] ?? 0) + ('<td width="60" align="right" valign="middle" style="padding: 4px 8px 4px 0; vertical-align: middle;">' + (((s as any).temp_tv ?? 0)?.['lbl']) + '</td>');
    ((s as any).temp_tv = (s as any).temp_tv ?? {})['html'] = ((s as any).temp_tv['html'] ?? 0) + ('<td width="' + (((s as any).stat_cfg ?? 0)?.['bar_width']) + '" valign="middle" style="padding: 4px 0; vertical-align: middle; border: 1px solid \' + $temp_tv[\'border\'] + \';">\' + $temp_tv[\'bar\'] + \'</td>');
    ((s as any).temp_tv = (s as any).temp_tv ?? {})['html'] = ((s as any).temp_tv['html'] ?? 0) + ('<td width="50" align="right" valign="middle" style="padding: 4px 0 4px 8px; vertical-align: middle; white-space: nowrap;">\' + $str(temp_tv[\'pts\'] / 250) + \'</td>');
    ((s as any).temp_tv = (s as any).temp_tv ?? {})['html'] = ((s as any).temp_tv['html'] ?? 0) + ('</tr>');
    ((s as any).temp_tv = (s as any).temp_tv ?? {})['i'] = ((s as any).temp_tv['i'] ?? 0) + (1);
    ((s as any).temp_tv = (s as any).temp_tv ?? {})['html'] = ((s as any).temp_tv['html'] ?? 0) + ('</table>');
    scene.text(String(qspFunc(s, 'temp_tv', 'html') || ''));
    ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['bar_width'] = (((s as any).temp_tv ?? 0)?.['saved_bar_width']);
    scene.text('<center><font size="2" color="#888888">Archetypes are shaped by clothing, makeup, and other presentation choices, as well as social cliques and many decisions you can make.<br>Each archetype has two opposites, with opposing effects. Gaining points in a archetype reduces an equal amount of points in its opposites.<br>Bimbo opposes Prude &amp; Punk, Preppy opposes Punk &amp; Goth, Prude opposes Goth &amp; Bimbo, Punk opposes Bimbo &amp; Preppy, and Goth opposes Preppy &amp; Prude.<br>The more points you have in your active archetype, the stronger its effects.</font></center>');
    (s as any).temp_tv = undefined;
    return;
  } while (((s as any).temp_tv ?? 0)?.['i'] < 5);
  scene.build();
}

function enterHistoryPage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_cfg ?? 0)?.['arch_log_enabled'] === 0) {
    scene.text('<center><font color="#888888"><i>Archetype history logging is disabled. Enable it via the Settings page.</i></font></center>');
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 60]; enterAggregate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1440]; enterAggregate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<h3 style="text-align:center;margin:8px 0 4px;">Archetype History</h3>');
  scene.text('<p style="text-align:center;font-size:0.85em;color:#888888;margin:0 0 12px;">Point changes over the last hour and last day, by category.</p>');
  ((s as any).thp = (s as any).thp ?? {})['names, 0'] = 'bimbo';
  ((s as any).thp = (s as any).thp ?? {})['labels, 0'] = 'Bimbo';
  ((s as any).thp = (s as any).thp ?? {})['names, 1'] = 'preppy';
  ((s as any).thp = (s as any).thp ?? {})['labels, 1'] = 'Preppy';
  ((s as any).thp = (s as any).thp ?? {})['names, 2'] = 'prude';
  ((s as any).thp = (s as any).thp ?? {})['labels, 2'] = 'Prude';
  ((s as any).thp = (s as any).thp ?? {})['names, 3'] = 'punk';
  ((s as any).thp = (s as any).thp ?? {})['labels, 3'] = 'Punk';
  ((s as any).thp = (s as any).thp ?? {})['names, 4'] = 'goth';
  ((s as any).thp = (s as any).thp ?? {})['labels, 4'] = 'Goth';
  ((s as any).thp = (s as any).thp ?? {})['colors, 0'] = (((s as any).theme_hex ?? 0)?.['bimbo']);
  ((s as any).thp = (s as any).thp ?? {})['colors, 1'] = (((s as any).theme_hex ?? 0)?.['accent']);
  ((s as any).thp = (s as any).thp ?? {})['colors, 2'] = (((s as any).theme_hex ?? 0)?.['neutral']);
  ((s as any).thp = (s as any).thp ?? {})['colors, 3'] = (((s as any).theme_hex ?? 0)?.['punk']);
  ((s as any).thp = (s as any).thp ?? {})['colors, 4'] = (((s as any).theme_hex ?? 0)?.['goth']);
  ((s as any).thp = (s as any).thp ?? {})['cats, 0'] = 'clothing';
  ((s as any).thp = (s as any).thp ?? {})['catlbl, 0'] = 'Clothing';
  ((s as any).thp = (s as any).thp ?? {})['cats, 1'] = 'shoes';
  ((s as any).thp = (s as any).thp ?? {})['catlbl, 1'] = 'Shoes';
  ((s as any).thp = (s as any).thp ?? {})['cats, 2'] = 'makeup';
  ((s as any).thp = (s as any).thp ?? {})['catlbl, 2'] = 'Makeup';
  ((s as any).thp = (s as any).thp ?? {})['cats, 3'] = 'hair';
  ((s as any).thp = (s as any).thp ?? {})['catlbl, 3'] = 'Hair';
  ((s as any).thp = (s as any).thp ?? {})['cats, 4'] = 'body_mods';
  ((s as any).thp = (s as any).thp ?? {})['catlbl, 4'] = 'Body mods';
  ((s as any).thp = (s as any).thp ?? {})['cats, 5'] = 'body';
  ((s as any).thp = (s as any).thp ?? {})['catlbl, 5'] = 'Body';
  ((s as any).thp = (s as any).thp ?? {})['cats, 6'] = 'social';
  ((s as any).thp = (s as any).thp ?? {})['catlbl, 6'] = 'Social';
  ((s as any).thp = (s as any).thp ?? {})['cats, 7'] = 'drugs';
  ((s as any).thp = (s as any).thp ?? {})['catlbl, 7'] = 'Drugs';
  ((s as any).thp = (s as any).thp ?? {})['cats, 8'] = 'chastity';
  ((s as any).thp = (s as any).thp ?? {})['catlbl, 8'] = 'Chastity';
  ((s as any).thp = (s as any).thp ?? {})['border'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('#444444') : ('#cccccc'));
  ((s as any).thp = (s as any).thp ?? {})['ti'] = 0;
  scene.text('<center><div style="width:50%;">');
  do {
    ((s as any).thp = (s as any).thp ?? {})['tname'] = (((s as any).thp ?? 0)?.['names, ' + String((((s as any).thp ?? 0)?.['ti']))] ?? 0);
    ((s as any).thp = (s as any).thp ?? {})['tlabel'] = (((s as any).thp ?? 0)?.['labels, ' + String((((s as any).thp ?? 0)?.['ti']))] ?? 0);
    ((s as any).thp = (s as any).thp ?? {})['tcolor'] = (((s as any).thp ?? 0)?.['colors, ' + String((((s as any).thp ?? 0)?.['ti']))] ?? 0);
    scene.text(`<div style="margin:12px 0 4px;border-bottom:2px solid ${(((s as any).thp ?? 0)?.['tcolor'] ?? '')};padding-bottom:3px;">`);
    scene.text(`<b><font color="${(((s as any).thp ?? 0)?.['tcolor'] ?? '')}">${(((s as any).thp ?? 0)?.['tlabel'] ?? '')}</font></b>`);
    scene.text('</div>');
    scene.text('<table width="100%" cellpadding="2" cellspacing="0" style="font-size:0.9em;">');
    scene.text('<tr>');
    scene.text('<td width="120" style="color:#888888;font-size:0.85em;">Category</td>');
    scene.text('<td width="80" align="right" style="color:#888888;font-size:0.85em;">Last hour</td>');
    scene.text('<td width="80" align="right" style="color:#888888;font-size:0.85em;">Last day</td>');
    scene.text('</tr>');
    ((s as any).thp = (s as any).thp ?? {})['ci'] = 0;
    ((s as any).thp = (s as any).thp ?? {})['tot60'] = 0;
    ((s as any).thp = (s as any).thp ?? {})['tot1440'] = 0;
    do {
      ((s as any).thp = (s as any).thp ?? {})['ckey'] = (((s as any).thp ?? 0)?.['cats, ' + String((((s as any).thp ?? 0)?.['ci']))] ?? 0);
      ((s as any).thp = (s as any).thp ?? {})['clabel'] = (((s as any).thp ?? 0)?.['catlbl, ' + String((((s as any).thp ?? 0)?.['ci']))] ?? 0);
      ((s as any).thp = (s as any).thp ?? {})['v60'] = (((s as any).agg ?? 0)?.['arch:' + (((s as any).thp ?? 0)?.['tname']) + ', cat:' + (((s as any).thp ?? 0)?.['ckey']) + ', w:60'] ?? 0);
      ((s as any).thp = (s as any).thp ?? {})['v1440'] = (((s as any).agg ?? 0)?.['arch:' + (((s as any).thp ?? 0)?.['tname']) + ', cat:' + (((s as any).thp ?? 0)?.['ckey']) + ', w:1440'] ?? 0);
      ((s as any).thp = (s as any).thp ?? {})['tot60'] = ((s as any).thp['tot60'] ?? 0) + ((((s as any).thp ?? 0)?.['v60']));
      ((s as any).thp = (s as any).thp ?? {})['tot1440'] = ((s as any).thp['tot1440'] ?? 0) + ((((s as any).thp ?? 0)?.['v1440']));
      scene.text('<tr>');
      scene.text(`<td>${(((s as any).thp ?? 0)?.['clabel'] ?? '')}</td>`);
      scene.text(`<td align="right">${((((s as any).thp ?? 0)?.['v60'] !== 0) ? (qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).thp ?? 0)?.['v60'] ?? ''), 'coarse')) : ('—'))}</td>`);
      scene.text(`<td align="right">${((((s as any).thp ?? 0)?.['v1440'] !== 0) ? (qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).thp ?? 0)?.['v1440'] ?? ''), 'coarse')) : ('—'))}</td>`);
      scene.text('</tr>');
      ((s as any).thp = (s as any).thp ?? {})['ci'] = ((s as any).thp['ci'] ?? 0) + (1);
      ((s as any).thp = (s as any).thp ?? {})['v60'] = (((s as any).agg ?? 0)?.['arch:' + (((s as any).thp ?? 0)?.['tname']) + ', cat:decay, w:60'] ?? 0);
      ((s as any).thp = (s as any).thp ?? {})['v1440'] = (((s as any).agg ?? 0)?.['arch:' + (((s as any).thp ?? 0)?.['tname']) + ', cat:decay, w:1440'] ?? 0);
      ((s as any).thp = (s as any).thp ?? {})['tot60'] = ((s as any).thp['tot60'] ?? 0) + ((((s as any).thp ?? 0)?.['v60']));
      ((s as any).thp = (s as any).thp ?? {})['tot1440'] = ((s as any).thp['tot1440'] ?? 0) + ((((s as any).thp ?? 0)?.['v1440']));
      scene.text('<tr style="color:#888888;">');
      scene.text('<td><i>Decay</i></td>');
      scene.text(`<td align="right">${((((s as any).thp ?? 0)?.['v60'] !== 0) ? (qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).thp ?? 0)?.['v60'] ?? ''), 'coarse')) : ('—'))}</td>`);
      scene.text(`<td align="right">${((((s as any).thp ?? 0)?.['v1440'] !== 0) ? (qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).thp ?? 0)?.['v1440'] ?? ''), 'coarse')) : ('—'))}</td>`);
      scene.text('</tr>');
      ((s as any).thp = (s as any).thp ?? {})['v60'] = (((s as any).agg ?? 0)?.['arch:' + (((s as any).thp ?? 0)?.['tname']) + ', cat:opposition, w:60'] ?? 0);
      ((s as any).thp = (s as any).thp ?? {})['v1440'] = (((s as any).agg ?? 0)?.['arch:' + (((s as any).thp ?? 0)?.['tname']) + ', cat:opposition, w:1440'] ?? 0);
      ((s as any).thp = (s as any).thp ?? {})['tot60'] = ((s as any).thp['tot60'] ?? 0) + ((((s as any).thp ?? 0)?.['v60']));
      ((s as any).thp = (s as any).thp ?? {})['tot1440'] = ((s as any).thp['tot1440'] ?? 0) + ((((s as any).thp ?? 0)?.['v1440']));
      scene.text('<tr style="color:#888888;">');
      scene.text('<td><i>Opposition</i></td>');
      scene.text(`<td align="right">${((((s as any).thp ?? 0)?.['v60'] !== 0) ? (qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).thp ?? 0)?.['v60'] ?? ''), 'coarse')) : ('—'))}</td>`);
      scene.text(`<td align="right">${((((s as any).thp ?? 0)?.['v1440'] !== 0) ? (qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).thp ?? 0)?.['v1440'] ?? ''), 'coarse')) : ('—'))}</td>`);
      scene.text('</tr>');
      scene.text(`<tr style="border-top:1px solid ${(((s as any).thp ?? 0)?.['border'] ?? '')};font-weight:bold;">`);
      scene.text('<td>Total</td>');
      scene.text(`<td align="right">${((((s as any).thp ?? 0)?.['tot60'] !== 0) ? (qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).thp ?? 0)?.['tot60'] ?? ''), 'coarse')) : ('—'))}</td>`);
      scene.text(`<td align="right">${((((s as any).thp ?? 0)?.['tot1440'] !== 0) ? (qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).thp ?? 0)?.['tot1440'] ?? ''), 'coarse')) : ('—'))}</td>`);
      scene.text('</tr>');
      scene.text('</table>');
      ((s as any).thp = (s as any).thp ?? {})['cutoff24'] = ((s as any).totminut ?? 0) - 1440;
      ((s as any).thp = (s as any).thp ?? {})['cutoff1'] = ((s as any).totminut ?? 0) - 60;
      ((s as any).thp = (s as any).thp ?? {})['si'] = 0;
      ((s as any).thp = (s as any).thp ?? {})['story_count'] = 0;
      while (true) {
        if (((s as any).thp ?? 0)?.['si'] < Object.keys((s as any).arch_log_minut ?? {}).length) {
          if (((s as any).arch_log_minut ?? 0)[((s as any).thp ?? 0)?.['si']] >= ((s as any).thp ?? 0)?.['cutoff24']) {
            if (((s as any).arch_log_archetype ?? 0)[((s as any).thp ?? 0)?.['si']] === ((s as any).thp ?? 0)?.['tname']) {
              if (((s as any).arch_log_cat ?? 0)[((s as any).thp ?? 0)?.['si']] === 'story') {
                ((s as any).thp = (s as any).thp ?? {})['slbl'] = qspUntranslated(s, "arch_log_label[thp['si']]", { location: "archetypes" });
                ((s as any).thp_story_d1440 = (s as any).thp_story_d1440 ?? {})[(((s as any).thp ?? 0)?.['slbl'])] = ((s as any).thp_story_d1440[(((s as any).thp ?? 0)?.['slbl'])] ?? 0) + (qspUntranslated(s, "arch_log_delta[thp['si']]", { location: "archetypes" }));
                if (((s as any).arch_log_minut ?? 0)[((s as any).thp ?? 0)?.['si']] >= ((s as any).thp ?? 0)?.['cutoff1']) {
                  ((s as any).thp_story_d60 = (s as any).thp_story_d60 ?? {})[(((s as any).thp ?? 0)?.['slbl'])] = ((s as any).thp_story_d60[(((s as any).thp ?? 0)?.['slbl'])] ?? 0) + (qspUntranslated(s, "arch_log_delta[thp['si']]", { location: "archetypes" }));
                }
                if (((s as any).thp_story_seen ?? 0)[((s as any).thp ?? 0)?.['slbl']] === 0) {
                  ((s as any).thp_story_seen = (s as any).thp_story_seen ?? {})[(((s as any).thp ?? 0)?.['slbl'])] = 1;
                  ((s as any).thp_story_labels = (s as any).thp_story_labels ?? {})[(((s as any).thp ?? 0)?.['story_count'])] = (((s as any).thp ?? 0)?.['slbl']);
                  ((s as any).thp = (s as any).thp ?? {})['story_count'] = ((s as any).thp['story_count'] ?? 0) + (1);
                }
              }
            }
          }
          ((s as any).thp = (s as any).thp ?? {})['si'] = ((s as any).thp['si'] ?? 0) + (1);
          break;
        }
        scene.text('<div style="margin-top:4px;font-size:0.88em;color:#888888;">');
        if (((s as any).thp ?? 0)?.['story_count'] === 0) {
          scene.text('<i>(no story events recorded in the last day)</i>');
        } else {
          scene.text('<b>Story events (last day):</b>');
          scene.text('<table width="100%" cellpadding="1" cellspacing="0">');
          ((s as any).thp = (s as any).thp ?? {})['sj'] = 0;
          ((s as any).thp = (s as any).thp ?? {})['stot60'] = 0;
          ((s as any).thp = (s as any).thp ?? {})['stot1440'] = 0;
          do {
            ((s as any).thp = (s as any).thp ?? {})['slbl'] = qspUntranslated(s, "thp_story_labels[thp['sj']]", { location: "archetypes" });
            ((s as any).thp = (s as any).thp ?? {})['sv60'] = (((s as any).thp_story_d60 ?? 0)?.[(((s as any).thp ?? 0)?.['slbl'])] ?? 0);
            ((s as any).thp = (s as any).thp ?? {})['sv1440'] = (((s as any).thp_story_d1440 ?? 0)?.[(((s as any).thp ?? 0)?.['slbl'])] ?? 0);
            ((s as any).thp = (s as any).thp ?? {})['stot60'] = ((s as any).thp['stot60'] ?? 0) + ((((s as any).thp ?? 0)?.['sv60']));
            ((s as any).thp = (s as any).thp ?? {})['stot1440'] = ((s as any).thp['stot1440'] ?? 0) + ((((s as any).thp ?? 0)?.['sv1440']));
            scene.text('<tr>');
            scene.text(`<td>${(((s as any).thp ?? 0)?.['slbl'] ?? '')}</td>`);
            scene.text(`<td width="80" align="right">${qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).thp ?? 0)?.['sv60'] ?? ''), 'coarse')}</td>`);
            scene.text(`<td width="80" align="right">${qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).thp ?? 0)?.['sv1440'] ?? ''), 'coarse')}</td>`);
            scene.text('</tr>');
            ((s as any).thp = (s as any).thp ?? {})['sj'] = ((s as any).thp['sj'] ?? 0) + (1);
            scene.text(`<tr style="border-top:1px solid ${(((s as any).thp ?? 0)?.['border'] ?? '')};font-weight:bold;">`);
            scene.text('<td>Total</td>');
            scene.text(`<td width="80" align="right">${((((s as any).thp ?? 0)?.['stot60']   !== 0) ? (qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).thp ?? 0)?.['stot60'] ?? ''), 'coarse')) : ('—'))}</td>`);
            scene.text(`<td width="80" align="right">${((((s as any).thp ?? 0)?.['stot1440'] !== 0) ? (qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).thp ?? 0)?.['stot1440'] ?? ''), 'coarse')) : ('—'))}</td>`);
            scene.text('</tr>');
            scene.text('</table>');
          } while (((s as any).thp ?? 0)?.['sj'] < ((s as any).thp ?? 0)?.['story_count']);
        }
        scene.text('</div>');
        (s as any).thp_story_d60 = undefined;
        (s as any).thp_story_d1440 = undefined;
        (s as any).thp_story_seen = undefined;
        (s as any).thp_story_labels = undefined;
        ((s as any).thp = (s as any).thp ?? {})['ti'] = ((s as any).thp['ti'] ?? 0) + (1);
        scene.text('</div></center>');
        (s as any).agg = undefined;
        (s as any).thp = undefined;
        return;
      }
    } while (((s as any).thp ?? 0)?.['ci'] < 9);
  } while (((s as any).thp ?? 0)?.['ti'] < 5);
  scene.build();
}

function enterCauseCatalog(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><div style="width:65%">');
  ((s as any).cc = (s as any).cc ?? {})['bg+'] = 'background:' + (((s as any).theme_hex ?? 0)?.['v_pos']) + '10;';
  ((s as any).cc = (s as any).cc ?? {})['bg-'] = 'background:' + (((s as any).theme_hex ?? 0)?.['v_neg']) + '10;';
  ((s as any).cc = (s as any).cc ?? {})['bg+_hex'] = (((s as any).theme_hex ?? 0)?.['v_pos']);
  ((s as any).cc = (s as any).cc ?? {})['bg-_hex'] = (((s as any).theme_hex ?? 0)?.['v_neg']);
  ((s as any).cc = (s as any).cc ?? {})['__'] = '<td align="center" style="color:#555555;">—</td>';
  ((s as any).cc = (s as any).cc ?? {})['b+1'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'bimbo\', \'<small>↑</small>\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['b+2'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'bimbo\', \'↑\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['b+4'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'bimbo b\', \'↑↑\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['b-1'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'bimbo\', \'<small>↓</small>\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['b-2'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'bimbo\', \'↓\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['b-4'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'bimbo b\', \'↓↓\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['p+1'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'preppy\', \'<small>↑</small>\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['p+2'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'preppy\', \'↑\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['p+4'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'preppy b\', \'↑↑\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['p-1'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'preppy\', \'<small>↓</small>\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['p-2'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'preppy\', \'↓\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['p-4'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'preppy b\', \'↓↓\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['r+1'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'prude\', \'<small>↑</small>\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['r+2'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'prude\', \'↑\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['r+4'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'prude b\', \'↑↑\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['r+6'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'prude b\', \'↑↑↑\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['r-1'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'prude\', \'<small>↓</small>\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['r-2'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'prude\', \'↓\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['r-4'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'prude b\', \'↓↓\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['r-6'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'prude b\', \'↓↓↓\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['u+1'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'punk\', \'<small>↑</small>\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['u+2'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'punk\', \'↑\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['u+4'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'punk b\', \'↑↑\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['u-1'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'punk\', \'<small>↓</small>\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['u-2'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'punk\', \'↓\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['g+1'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'goth\', \'<small>↑</small>\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['g+2'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'goth\', \'↑\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['g+6'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg+_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg+']) + '">\' + $func(\'wrap\', \'goth b\', \'↑↑↑\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['g-1'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'goth\', \'<small>↓</small>\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['g-2'] = '<td align="center" bgcolor="' + (((s as any).cc ?? 0)?.['bg-_hex']) + '" style="' + (((s as any).cc ?? 0)?.['bg-']) + '">\' + $func(\'wrap\', \'goth\', \'↓\') + \'</td>';
  ((s as any).cc = (s as any).cc ?? {})['tbl'] = '<table width="100%" cellpadding="3" cellspacing="0" style="font-size:0.88em;border-collapse:collapse;">';
  ((s as any).cc = (s as any).cc ?? {})['hdr'] = '<tr style="border-bottom:1px solid #888888;font-size:0.85em;"><th align="left">Condition</th>';
  ((s as any).cc = (s as any).cc ?? {})['hdr'] = ((s as any).cc['hdr'] ?? 0) + ('<th align="center" width="52"><a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_view = s.1; s.archetype_catalog_sort = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">' + qspFunc(s, 'wrap', 'bimbo', 'Bimbo') + '</a></th>');
  ((s as any).cc = (s as any).cc ?? {})['hdr'] = ((s as any).cc['hdr'] ?? 0) + ('<th align="center" width="52"><a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_view = s.2; s.archetype_catalog_sort = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">' + qspFunc(s, 'wrap', 'preppy', 'Preppy') + '</a></th>');
  ((s as any).cc = (s as any).cc ?? {})['hdr'] = ((s as any).cc['hdr'] ?? 0) + ('<th align="center" width="52"><a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_view = s.3; s.archetype_catalog_sort = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">' + qspFunc(s, 'wrap', 'prude', 'Prude') + '</a></th>');
  ((s as any).cc = (s as any).cc ?? {})['hdr'] = ((s as any).cc['hdr'] ?? 0) + ('<th align="center" width="52"><a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_view = s.4; s.archetype_catalog_sort = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">' + qspFunc(s, 'wrap', 'punk', 'Punk') + '</a></th>');
  ((s as any).cc = (s as any).cc ?? {})['hdr'] = ((s as any).cc['hdr'] ?? 0) + ('<th align="center" width="52"><a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_view = s.5; s.archetype_catalog_sort = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">' + qspFunc(s, 'wrap', 'goth', 'Goth') + '</a></th></tr>');
  ((s as any).cc = (s as any).cc ?? {})['b'] = qspFunc(s, 'wrap', 'bimbo', 'Bimbo');
  ((s as any).cc = (s as any).cc ?? {})['g'] = qspFunc(s, 'wrap', 'goth', 'Goth');
  ((s as any).cc = (s as any).cc ?? {})['pp'] = qspFunc(s, 'wrap', 'preppy', 'Preppy');
  ((s as any).cc = (s as any).cc ?? {})['pr'] = qspFunc(s, 'wrap', 'prude', 'Prude');
  ((s as any).cc = (s as any).cc ?? {})['pu'] = qspFunc(s, 'wrap', 'punk', 'Punk');
  (s as any).i = 0;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Bimbo-style outfit';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+4';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Preppy-style outfit';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p+4';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Prude-style outfit';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r+4';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Punk-style outfit';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+4';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Goth-style outfit';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g+6';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Rebellious / alternative cut';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p-2';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+2';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Wealthy / designer cut';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p+2';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Streetwalker / hooker cut';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+2';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-2';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Baggy / shapeless cut';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b-2';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Stripper-style outfit';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-2';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'School uniform (outside school hours)';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r+2';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u-2';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g-2';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Office / business outfit';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p+2';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u-2';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Athletic / exercise outfit';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g-2';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Extremely conservative coverage';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b-2';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r+2';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Conservative coverage';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b-2';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r+2';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Revealing coverage';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-2';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Very revealing coverage';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-4';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Extremely revealing coverage';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+2';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-6';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'High-quality clothing';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p+2';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Mediocre-quality clothing';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p-2';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Low-quality clothing';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p-4';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Clothing below 60% durability';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p-2';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Clothing below 25% durability';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p-4';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Expensive clothing';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Clothing';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p+2';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u-2';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Bimbo-style shoes';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Shoes';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+4';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Preppy-style shoes';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Shoes';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p+4';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Prude-style shoes';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Shoes';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r+2';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Punk-style shoes';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Shoes';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+4';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Goth-style shoes';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Shoes';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g+6';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Tall heels';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Shoes';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+2';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'High-quality shoes';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Shoes';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p+2';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Punk-flagged shoe style';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Shoes';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+2';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Revealing-style shoes';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Shoes';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-2';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Smeared / smudged makeup';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Makeup';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+4';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'No makeup at all';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Makeup';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+2';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Medium / Professional makeup';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Makeup';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p+2';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Bimbo makeup';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Makeup';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+4';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Goth makeup';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Makeup';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g+6';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Short hair';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Hair';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b-2';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+2';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Unnatural / dyed colour';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Hair';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+2';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g+2';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Dyed black (non-natural)';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Hair';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g+2';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Dyed blonde (non-natural)';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Hair';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+2';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Pink-dyed hair';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Hair';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+2';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Purple-dyed hair';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Hair';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g+2';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Dark / medium red hair';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Hair';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g+2';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Trimmed or bare pubic hair';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Hair';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+2';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Unshaven legs';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Hair';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b-2';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Any non-ear piercing';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Body Mods';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-1';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Facial / navel piercing';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Body Mods';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+1';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Facial piercing';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Body Mods';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g+1';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Intimate piercing';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Body Mods';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+1';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-1';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Any tattoo';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Body Mods';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g+1';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Visible tattoo (face / arm / etc.)';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Body Mods';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+1';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Intimate tattoo';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Body Mods';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+1';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-1';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Breast implants';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Body Mods';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+4';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-6';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Butt implants';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Body Mods';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+4';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-4';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Wearing glasses';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Body Mods';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p-2';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u-2';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Wearing contact lenses';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Body Mods';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u-2';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Wearing a dental brace';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Body Mods';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u-2';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Popular clique';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Social';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+1';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p+1';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g-1';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Jocks clique';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Social';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p+1';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g-1';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Nerds clique';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Social';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p-1';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r+1';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u-1';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g-1';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Gopniks clique';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Social';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-1';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+1';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Outcasts clique';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Social';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b-1';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g+1';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Highly ranked chess player';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Social';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b-1';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r+1';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'On the cheerleading squad';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Social';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = 'p+1';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u-1';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g-1';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Drunk';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Drugs &amp; Alcohol';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-2';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+2';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'On an aphrodisiac';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Drugs &amp; Alcohol';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = 'b+2';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-2';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'Stoned';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Drugs &amp; Alcohol';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-1';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+1';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g+1';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'On amphetamines';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Drugs &amp; Alcohol';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-2';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+2';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = 'On heroin';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Drugs &amp; Alcohol';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r-3';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = 'u+1';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = 'g+2';
  (s as any).i = ((s as any).i ?? 0) + 1;
  ((s as any).cc_cond = (s as any).cc_cond ?? {})[String((s as any).i ?? 0)] = '14+ days since last sex';
  ((s as any).cc_cat = (s as any).cc_cat ?? {})[String((s as any).i ?? 0)] = 'Chastity';
  ((s as any).cc_bv = (s as any).cc_bv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_pv = (s as any).cc_pv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_rv = (s as any).cc_rv ?? {})[String((s as any).i ?? 0)] = 'r+1';
  ((s as any).cc_uv = (s as any).cc_uv ?? {})[String((s as any).i ?? 0)] = '__';
  ((s as any).cc_gv = (s as any).cc_gv ?? {})[String((s as any).i ?? 0)] = '__';
  scene.text('<h3 style="text-align:center;margin:8px 0 4px;">Archetype Points Gain & Loss</h3>');
  scene.text('<p style="text-align:center;font-size:0.85em;color:#888888;margin:0 0 8px;">Each cue pushes archetypes up or down every minute it is active. ↑ = moderate &nbsp;↑↑ = strong &nbsp;↑↑↑ = very strong &nbsp; small arrow = slight.</p>');
  ((s as any).cc = (s as any).cc ?? {})['btn'] = 'display:inline-block;padding:7px 18px;margin:2px;border:1px solid #888888;border-radius:4px;font-size:0.95em;';
  ((s as any).cc = (s as any).cc ?? {})['btn_on'] = (((s as any).cc ?? 0)?.['btn']) + 'font-weight:bold;opacity:0.5;cursor:default;';
  if ((!((s as any).archetype_catalog_view ?? 0))) {
    scene.text('<div style="text-align:center;margin:10px 0 4px;"><span style="' + (((s as any).cc ?? 0)?.['btn_on'] ?? '') + '">By Category</span><a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_view = s.1; s.archetype_catalog_sort = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">By Archetype</a></div>');
  } else {
    scene.text('\'<div style="text-align:center;margin:10px 0 4px;"><a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_view = s.0; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">By Category</a><span style="\' + $cc[\'btn_on\'] + \'">By Archetype</span></div>\'');
    ((s as any).cc = (s as any).cc ?? {})['tb'] = 'display:inline-block;padding:5px 16px;margin:2px;border:1px solid;border-radius:4px;font-size:0.9em;';
    ((s as any).cc = (s as any).cc ?? {})['tb_on'] = (((s as any).cc ?? 0)?.['tb']) + 'font-weight:bold;opacity:0.6;cursor:default;';
    scene.text('<div style="text-align:center;margin:0 0 12px;">');
    if (((s as any).archetype_catalog_view ?? 0) === 1) {
      scene.text('<span style="' + (((s as any).cc ?? 0)?.['tb_on'] ?? '') + 'border-color:' + (((s as any).theme_hex ?? 0)?.['bimbo'] ?? '') + ';color:' + (((s as any).theme_hex ?? 0)?.['bimbo'] ?? '') + ';">Bimbo</span>');
    } else {
      scene.text('\'<a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_view = s.1; s.archetype_catalog_sort = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">Bimbo</a>\'');
    }
    if (((s as any).archetype_catalog_view ?? 0) === 2) {
      scene.text('<span style="' + (((s as any).cc ?? 0)?.['tb_on'] ?? '') + 'border-color:' + (((s as any).theme_hex ?? 0)?.['accent'] ?? '') + ';color:' + (((s as any).theme_hex ?? 0)?.['accent'] ?? '') + ';">Preppy</span>');
    } else {
      scene.text('\'<a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_view = s.2; s.archetype_catalog_sort = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">Preppy</a>\'');
    }
    if (((s as any).archetype_catalog_view ?? 0) === 3) {
      scene.text('<span style="' + (((s as any).cc ?? 0)?.['tb_on'] ?? '') + 'border-color:' + (((s as any).theme_hex ?? 0)?.['neutral'] ?? '') + ';color:' + (((s as any).theme_hex ?? 0)?.['neutral'] ?? '') + ';">Prude</span>');
    } else {
      scene.text('\'<a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_view = s.3; s.archetype_catalog_sort = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">Prude</a>\'');
    }
    if (((s as any).archetype_catalog_view ?? 0) === 4) {
      scene.text('<span style="' + (((s as any).cc ?? 0)?.['tb_on'] ?? '') + 'border-color:' + (((s as any).theme_hex ?? 0)?.['punk'] ?? '') + ';color:' + (((s as any).theme_hex ?? 0)?.['punk'] ?? '') + ';">Punk</span>');
    } else {
      scene.text('\'<a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_view = s.4; s.archetype_catalog_sort = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">Punk</a>\'');
    }
    if (((s as any).archetype_catalog_view ?? 0) === 5) {
      scene.text('<span style="' + (((s as any).cc ?? 0)?.['tb_on'] ?? '') + 'border-color:' + (((s as any).theme_hex ?? 0)?.['goth'] ?? '') + ';color:' + (((s as any).theme_hex ?? 0)?.['goth'] ?? '') + ';">Goth</span>');
    } else {
      scene.text('\'<a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_view = s.5; s.archetype_catalog_sort = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">Goth</a>\'');
    }
    scene.text('</div>');
  }
  if ((!((s as any).archetype_catalog_view ?? 0))) {
    (s as any).n = 0;
    (s as any).cc_prevcat = '';
    while (true) {
      if (((s as any).n ?? 0) < Object.keys((s as any).cc_cond ?? {}).length) {
        if (((s as any).cc_cat ?? 0)?.[String((s as any).n ?? 0)] !== ((s as any).cc_prevcat ?? 0)) {
          if (((s as any).cc_prevcat ?? 0) !== '') {
            scene.text('</table>');
          }
          (s as any).cc_prevcat = (((s as any).cc_cat ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
          scene.text(`<div style="margin:10px 0 4px;font-size:1em;font-weight:bold;border-bottom:1px solid #888888;">${((s as any).cc_prevcat ?? '')}</div>`);
          if (((s as any).cc_prevcat ?? 0) === 'Clothing') {
            scene.text('<p style="font-size:0.82em;color:#888888;margin:0 0 4px;"><i>Active whenever you\'re dressed. Style, cut, and coverage all shape your archetype scores.</i></p>');
          }
          if (((s as any).cc_prevcat ?? 0) === 'Shoes') {
            scene.text('<p style="font-size:0.82em;color:#888888;margin:0 0 4px;"><i>Active whenever you have shoes on.</i></p>');
          }
          if (((s as any).cc_prevcat ?? 0) === 'Makeup') {
            scene.text('<p style="font-size:0.82em;color:#888888;margin:0 0 4px;"><i>Based on your current makeup style.</i></p>');
          }
          if (((s as any).cc_prevcat ?? 0) === 'Hair') {
            scene.text('<p style="font-size:0.82em;color:#888888;margin:0 0 4px;"><i>Hair length, colour and grooming all send signals.</i></p>');
          }
          if (((s as any).cc_prevcat ?? 0) === 'Body Mods') {
            scene.text('<p style="font-size:0.82em;color:#888888;margin:0 0 4px;"><i>Permanent modifications (implants, tattoos) and worn items (piercings, eyewear, braces).</i></p>');
          }
          if (((s as any).cc_prevcat ?? 0) === 'Social') {
            scene.text('<p style="font-size:0.82em;color:#888888;margin:0 0 4px;"><i>Only counts while you\'re still in school. Your clique, hobbies and extracurriculars all colour how others see you.</i></p>');
          }
          if (((s as any).cc_prevcat ?? 0) === 'Drugs &amp; Alcohol') {
            scene.text('<p style="font-size:0.82em;color:#888888;margin:0 0 4px;"><i>Being drunk or under the influence of certain substances actively shifts archetype scores.</i></p>');
          }
          if (((s as any).cc_prevcat ?? 0) === 'Chastity') {
            scene.text('<p style="font-size:0.82em;color:#888888;margin:0 0 4px;"><i>Individual sex acts award a one-time Story event instead of a rate here; see your archetype history.</i></p>');
          }
          scene.text('$cc[\'tbl\'] + $cc[\'hdr\']');
        }
        scene.text(`<tr><td>${(((s as any).cc_cond ?? 0)?.[String((s as any).n ?? 0)] ?? '')}</td>` + (((s as any).cc ?? 0)?.[(((s as any).cc_bv ?? 0)?.[String((s as any).n ?? 0)] ?? '')] ?? '') + (((s as any).cc ?? 0)?.[(((s as any).cc_pv ?? 0)?.[String((s as any).n ?? 0)] ?? '')] ?? '') + (((s as any).cc ?? 0)?.[(((s as any).cc_rv ?? 0)?.[String((s as any).n ?? 0)] ?? '')] ?? '') + (((s as any).cc ?? 0)?.[(((s as any).cc_uv ?? 0)?.[String((s as any).n ?? 0)] ?? '')] ?? '') + (((s as any).cc ?? 0)?.[(((s as any).cc_gv ?? 0)?.[String((s as any).n ?? 0)] ?? '')] ?? '') + '</tr>');
        (s as any).n = ((s as any).n ?? 0) + 1;
        break;
      }
      scene.text('</table>');
    }
  } else {
    if (((s as any).archetype_catalog_view ?? 0) === 1) {
      (s as any).cc_title = qspFunc(s, 'wrap', 'bimbo', 'Bimbo');
      (s as any).cc_tcol = (((s as any).theme_hex ?? 0)?.['bimbo']);
    }
    if (((s as any).archetype_catalog_view ?? 0) === 2) {
      (s as any).cc_title = qspFunc(s, 'wrap', 'preppy', 'Preppy');
      (s as any).cc_tcol = (((s as any).theme_hex ?? 0)?.['accent']);
    }
    if (((s as any).archetype_catalog_view ?? 0) === 3) {
      (s as any).cc_title = qspFunc(s, 'wrap', 'prude', 'Prude');
      (s as any).cc_tcol = (((s as any).theme_hex ?? 0)?.['neutral']);
    }
    if (((s as any).archetype_catalog_view ?? 0) === 4) {
      (s as any).cc_title = qspFunc(s, 'wrap', 'punk', 'Punk');
      (s as any).cc_tcol = (((s as any).theme_hex ?? 0)?.['punk']);
    }
    if (((s as any).archetype_catalog_view ?? 0) === 5) {
      (s as any).cc_title = qspFunc(s, 'wrap', 'goth', 'Goth');
      (s as any).cc_tcol = (((s as any).theme_hex ?? 0)?.['goth']);
    }
    if (((s as any).archetype_catalog_sort ?? 0) === 1) {
      (s as any).cc_hdr2 = '<tr style="border-bottom:1px solid #888888;font-size:0.85em;"><th align="left">Condition</th><th align="left" width="120"><a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_sort = s.0; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">Category ↕</a></th><th align="center" width="80">' + ((s as any).cc_title ?? 0) + '</th></tr>';
    } else {
      (s as any).cc_hdr2 = '<tr style="border-bottom:1px solid #888888;font-size:0.85em;"><th align="left">Condition</th><th align="left" width="120">Category</th><th align="center" width="80"><a href="#" onclick="window.__gameStore.setState((s) => { s.archetype_catalog_sort = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027archetypes\u0027, \u0027catalog\u0027); return false;">' + ((s as any).cc_title ?? 0) + ' ↕</a></th></tr>';
    }
    scene.text('$cc[\'tbl\'] + $cc_hdr2');
    if (((s as any).archetype_catalog_sort ?? 0) === 1) {
      (s as any).n = 0;
      while (true) {
        if (((s as any).n ?? 0) < Object.keys((s as any).cc_cond ?? {}).length) {
          if (((s as any).archetype_catalog_view ?? 0) === 1) {
            (s as any).cc_tcell = (((s as any).cc_bv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
          }
          if (((s as any).archetype_catalog_view ?? 0) === 2) {
            (s as any).cc_tcell = (((s as any).cc_pv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
          }
          if (((s as any).archetype_catalog_view ?? 0) === 3) {
            (s as any).cc_tcell = (((s as any).cc_rv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
          }
          if (((s as any).archetype_catalog_view ?? 0) === 4) {
            (s as any).cc_tcell = (((s as any).cc_uv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
          }
          if (((s as any).archetype_catalog_view ?? 0) === 5) {
            (s as any).cc_tcell = (((s as any).cc_gv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
          }
          if (((s as any).cc_tcell ?? 0) === 'b+6'  ||  ((s as any).cc_tcell ?? 0) === 'p+6'  ||  ((s as any).cc_tcell ?? 0) === 'r+6'  ||  ((s as any).cc_tcell ?? 0) === 'u+6'  ||  ((s as any).cc_tcell ?? 0) === 'g+6'  ||  ((s as any).cc_tcell ?? 0) === 'b+4'  ||  ((s as any).cc_tcell ?? 0) === 'p+4'  ||  ((s as any).cc_tcell ?? 0) === 'r+4'  ||  ((s as any).cc_tcell ?? 0) === 'u+4'  ||  ((s as any).cc_tcell ?? 0) === 'g+4') {
            scene.text(`<tr><td>${(((s as any).cc_cond ?? 0)?.[String((s as any).n ?? 0)] ?? '')}</td><td>${(((s as any).cc_cat ?? 0)?.[String((s as any).n ?? 0)] ?? '')}</td>` + (((s as any).cc ?? 0)?.[String((s as any).cc_tcell ?? 0)] ?? '') + '</tr>');
          }
          (s as any).n = ((s as any).n ?? 0) + 1;
          break;
        }
        (s as any).n = 0;
        while (true) {
          if (((s as any).n ?? 0) < Object.keys((s as any).cc_cond ?? {}).length) {
            if (((s as any).archetype_catalog_view ?? 0) === 1) {
              (s as any).cc_tcell = (((s as any).cc_bv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
            }
            if (((s as any).archetype_catalog_view ?? 0) === 2) {
              (s as any).cc_tcell = (((s as any).cc_pv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
            }
            if (((s as any).archetype_catalog_view ?? 0) === 3) {
              (s as any).cc_tcell = (((s as any).cc_rv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
            }
            if (((s as any).archetype_catalog_view ?? 0) === 4) {
              (s as any).cc_tcell = (((s as any).cc_uv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
            }
            if (((s as any).archetype_catalog_view ?? 0) === 5) {
              (s as any).cc_tcell = (((s as any).cc_gv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
            }
            if (((s as any).cc_tcell ?? 0) === 'b+2'  ||  ((s as any).cc_tcell ?? 0) === 'p+2'  ||  ((s as any).cc_tcell ?? 0) === 'r+2'  ||  ((s as any).cc_tcell ?? 0) === 'u+2'  ||  ((s as any).cc_tcell ?? 0) === 'g+2'  ||  ((s as any).cc_tcell ?? 0) === 'b+1'  ||  ((s as any).cc_tcell ?? 0) === 'p+1'  ||  ((s as any).cc_tcell ?? 0) === 'r+1'  ||  ((s as any).cc_tcell ?? 0) === 'u+1'  ||  ((s as any).cc_tcell ?? 0) === 'g+1') {
              scene.text(`<tr><td>${(((s as any).cc_cond ?? 0)?.[String((s as any).n ?? 0)] ?? '')}</td><td>${(((s as any).cc_cat ?? 0)?.[String((s as any).n ?? 0)] ?? '')}</td>` + (((s as any).cc ?? 0)?.[String((s as any).cc_tcell ?? 0)] ?? '') + '</tr>');
            }
            (s as any).n = ((s as any).n ?? 0) + 1;
            break;
          }
          (s as any).n = 0;
          while (true) {
            if (((s as any).n ?? 0) < Object.keys((s as any).cc_cond ?? {}).length) {
              if (((s as any).archetype_catalog_view ?? 0) === 1) {
                (s as any).cc_tcell = (((s as any).cc_bv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
              }
              if (((s as any).archetype_catalog_view ?? 0) === 2) {
                (s as any).cc_tcell = (((s as any).cc_pv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
              }
              if (((s as any).archetype_catalog_view ?? 0) === 3) {
                (s as any).cc_tcell = (((s as any).cc_rv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
              }
              if (((s as any).archetype_catalog_view ?? 0) === 4) {
                (s as any).cc_tcell = (((s as any).cc_uv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
              }
              if (((s as any).archetype_catalog_view ?? 0) === 5) {
                (s as any).cc_tcell = (((s as any).cc_gv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
              }
              if (((s as any).cc_tcell ?? 0) === 'b-1'  ||  ((s as any).cc_tcell ?? 0) === 'p-1'  ||  ((s as any).cc_tcell ?? 0) === 'r-1'  ||  ((s as any).cc_tcell ?? 0) === 'u-1'  ||  ((s as any).cc_tcell ?? 0) === 'g-1'  ||  ((s as any).cc_tcell ?? 0) === 'b-2'  ||  ((s as any).cc_tcell ?? 0) === 'p-2'  ||  ((s as any).cc_tcell ?? 0) === 'r-2'  ||  ((s as any).cc_tcell ?? 0) === 'u-2'  ||  ((s as any).cc_tcell ?? 0) === 'g-2') {
                scene.text(`<tr><td>${(((s as any).cc_cond ?? 0)?.[String((s as any).n ?? 0)] ?? '')}</td><td>${(((s as any).cc_cat ?? 0)?.[String((s as any).n ?? 0)] ?? '')}</td>` + (((s as any).cc ?? 0)?.[String((s as any).cc_tcell ?? 0)] ?? '') + '</tr>');
              }
              (s as any).n = ((s as any).n ?? 0) + 1;
              break;
            }
            (s as any).n = 0;
            while (true) {
              if (((s as any).n ?? 0) < Object.keys((s as any).cc_cond ?? {}).length) {
                if (((s as any).archetype_catalog_view ?? 0) === 1) {
                  (s as any).cc_tcell = (((s as any).cc_bv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
                }
                if (((s as any).archetype_catalog_view ?? 0) === 2) {
                  (s as any).cc_tcell = (((s as any).cc_pv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
                }
                if (((s as any).archetype_catalog_view ?? 0) === 3) {
                  (s as any).cc_tcell = (((s as any).cc_rv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
                }
                if (((s as any).archetype_catalog_view ?? 0) === 4) {
                  (s as any).cc_tcell = (((s as any).cc_uv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
                }
                if (((s as any).archetype_catalog_view ?? 0) === 5) {
                  (s as any).cc_tcell = (((s as any).cc_gv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
                }
                if (((s as any).cc_tcell ?? 0) === 'b-4'  ||  ((s as any).cc_tcell ?? 0) === 'p-4'  ||  ((s as any).cc_tcell ?? 0) === 'r-4'  ||  ((s as any).cc_tcell ?? 0) === 'u-4'  ||  ((s as any).cc_tcell ?? 0) === 'g-4'  ||  ((s as any).cc_tcell ?? 0) === 'b-6'  ||  ((s as any).cc_tcell ?? 0) === 'p-6'  ||  ((s as any).cc_tcell ?? 0) === 'r-6'  ||  ((s as any).cc_tcell ?? 0) === 'u-6'  ||  ((s as any).cc_tcell ?? 0) === 'g-6') {
                  scene.text(`<tr><td>${(((s as any).cc_cond ?? 0)?.[String((s as any).n ?? 0)] ?? '')}</td><td>${(((s as any).cc_cat ?? 0)?.[String((s as any).n ?? 0)] ?? '')}</td>` + (((s as any).cc ?? 0)?.[String((s as any).cc_tcell ?? 0)] ?? '') + '</tr>');
                }
                (s as any).n = ((s as any).n ?? 0) + 1;
                break;
              }
            }
          }
        }
      }
    } else {
      (s as any).n = 0;
      while (true) {
        if (((s as any).n ?? 0) < Object.keys((s as any).cc_cond ?? {}).length) {
          if (((s as any).archetype_catalog_view ?? 0) === 1) {
            (s as any).cc_tcell = (((s as any).cc_bv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
          }
          if (((s as any).archetype_catalog_view ?? 0) === 2) {
            (s as any).cc_tcell = (((s as any).cc_pv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
          }
          if (((s as any).archetype_catalog_view ?? 0) === 3) {
            (s as any).cc_tcell = (((s as any).cc_rv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
          }
          if (((s as any).archetype_catalog_view ?? 0) === 4) {
            (s as any).cc_tcell = (((s as any).cc_uv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
          }
          if (((s as any).archetype_catalog_view ?? 0) === 5) {
            (s as any).cc_tcell = (((s as any).cc_gv ?? 0)?.[String((s as any).n ?? 0)] ?? 0);
          }
          if (((s as any).cc_tcell ?? 0) !== '__') {
            scene.text(`<tr><td>${(((s as any).cc_cond ?? 0)?.[String((s as any).n ?? 0)] ?? '')}</td><td>${(((s as any).cc_cat ?? 0)?.[String((s as any).n ?? 0)] ?? '')}</td>` + (((s as any).cc ?? 0)?.[String((s as any).cc_tcell ?? 0)] ?? '') + '</tr>');
          }
          (s as any).n = ((s as any).n ?? 0) + 1;
          break;
        }
      }
    }
    scene.text('</table>');
  }
  scene.text('<div style="margin:10px 0 4px;font-size:1em;font-weight:bold;border-bottom:1px solid #888888;">Passive Decay</div>');
  scene.text('<p style="font-size:0.82em;color:#888888;margin:0 0 4px;">All archetypes decay every game minute, with the decay strength depending on how many points that archetype currently has. This downward drift is what keeps any one archetype from running away without ongoing reinforcement.</p>');
  scene.text('<div style="margin:10px 0 4px;font-size:1em;font-weight:bold;border-bottom:1px solid #888888;">Opposition</div>');
  scene.text(`<p style="font-size:0.82em;color:#888888;margin:0 0 4px;">Each archetype has two opposites; gaining points in one always chips away at its opposites. ${(((s as any).cc ?? 0)?.['b'] ?? '')} opposes ${(((s as any).cc ?? 0)?.['pr'] ?? '')} &amp; ${(((s as any).cc ?? 0)?.['pu'] ?? '')}. ${(((s as any).cc ?? 0)?.['pp'] ?? '')} opposes ${(((s as any).cc ?? 0)?.['pu'] ?? '')} &amp; ${(((s as any).cc ?? 0)?.['g'] ?? '')}. ${(((s as any).cc ?? 0)?.['pr'] ?? '')} opposes ${(((s as any).cc ?? 0)?.['g'] ?? '')} &amp; ${(((s as any).cc ?? 0)?.['b'] ?? '')}. ${(((s as any).cc ?? 0)?.['pu'] ?? '')} opposes ${(((s as any).cc ?? 0)?.['b'] ?? '')} &amp; ${(((s as any).cc ?? 0)?.['pp'] ?? '')}. ${(((s as any).cc ?? 0)?.['g'] ?? '')} opposes ${(((s as any).cc ?? 0)?.['pp'] ?? '')} &amp; ${(((s as any).cc ?? 0)?.['pr'] ?? '')}.</p>`);
  scene.text('<div style="margin:10px 0 4px;font-size:1em;font-weight:bold;border-bottom:1px solid #888888;">Story Events</div>');
  scene.text('<p style="font-size:0.82em;color:#888888;margin:0 0 4px;">Direct archetype gains and losses from quests, events, and choices in the story.<br>For example, performing a genuine prayer in church may award prude points.</p>');
  scene.text('</div></center>');
  (s as any).cc = undefined;
  (s as any).cc_cond = undefined;
  (s as any).cc_cat = undefined;
  (s as any).cc_bv = undefined;
  (s as any).cc_pv = undefined;
  (s as any).cc_rv = undefined;
  (s as any).cc_uv = undefined;
  (s as any).cc_gv = undefined;
  (s as any).cc_prevcat = undefined;
  (s as any).cc_tcell = undefined;
  (s as any).cc_title = undefined;
  (s as any).cc_hdr2 = undefined;
  (s as any).cc_tcol = undefined;
  (s as any).i = undefined;
  (s as any).n = undefined;
  return;
  scene.build();
}

function enterLogEvent(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_cfg ?? 0)?.['arch_log_enabled'] === 0) {
    return;
  }
  if (String((s as any).locArgs?.[4] ?? '') === 0) {
    return;
  }
  while (true) {
    if (Object.keys((s as any).arch_log_minut ?? {}).length > 0) {
      if (((s as any).arch_log_minut ?? 0)[0] < ((s as any).totminut ?? 0) - 1440) {
        (s as any).arch_log_minut = undefined;
        (s as any).arch_log_archetype = undefined;
        (s as any).arch_log_cat = undefined;
        (s as any).arch_log_label = undefined;
        (s as any).arch_log_delta = undefined;
        break;
      }
    }
    (s as any).arch_log_minut = [...((s as any).arch_log_minut ?? []), ((s as any).totminut ?? 0)];
    (s as any).arch_log_archetype = [...((s as any).arch_log_archetype ?? []), ((s as any).locArgs?.[1] ?? 0)];
    (s as any).arch_log_cat = [...((s as any).arch_log_cat ?? []), ((s as any).locArgs?.[2] ?? 0)];
    (s as any).arch_log_label = [...((s as any).arch_log_label ?? []), ((s as any).locArgs?.[3] ?? 0)];
    (s as any).arch_log_delta = [...((s as any).arch_log_delta ?? []), ((s as any).locArgs?.[4] ?? 0)];
    return;
  }
  scene.build();
}

function enterAggregate(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_agg = (s as any).temp_agg ?? {})['window'] = ((String((s as any).locArgs?.[1] ?? '') > 0) ? (((s as any).locArgs?.[1] ?? 0)) : (1440));
  ((s as any).temp_agg = (s as any).temp_agg ?? {})['cutoff'] = ((s as any).totminut ?? 0) - (((s as any).temp_agg ?? {})?.['window'] ?? 0);
  ((s as any).temp_agg = (s as any).temp_agg ?? {})['i'] = 0;
  while (true) {
    if (((s as any).temp_agg ?? 0)?.['i'] < Object.keys((s as any).arch_log_minut ?? {}).length) {
      if (((s as any).arch_log_minut ?? 0)[((s as any).temp_agg ?? 0)?.['i']] >= ((s as any).temp_agg ?? 0)?.['cutoff']) {
        ((s as any).temp_agg = (s as any).temp_agg ?? {})['key'] = 'arch:' + qspUntranslated(s, "arch_log_archetype[temp_agg['i']]", { location: "archetypes" }) + ', cat:' + qspUntranslated(s, "arch_log_cat[temp_agg['i']]", { location: "archetypes" }) + ', w:' + (((s as any).temp_agg ?? 0)?.['window']) + '';
        ((s as any).agg = (s as any).agg ?? {})[(((s as any).temp_agg ?? 0)?.['key'])] = ((s as any).agg[(((s as any).temp_agg ?? 0)?.['key'])] ?? 0) + (qspUntranslated(s, "arch_log_delta[temp_agg['i']]", { location: "archetypes" }));
      }
      ((s as any).temp_agg = (s as any).temp_agg ?? {})['i'] = ((s as any).temp_agg['i'] ?? 0) + (1);
      break;
    }
    (s as any).temp_agg = undefined;
    return;
  }
  scene.build();
}

function enterTrackArchetype(s: GameState, scene: SceneBuilder): void {
  ((s as any).tnotif_archetype_delta = (s as any).tnotif_archetype_delta ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).tnotif_archetype_delta[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
  if ((Array.isArray((s as any).tnotif_archetype_names) ? ((s as any).tnotif_archetype_names as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) < 0) {
    (s as any).tnotif_archetype_names = [...((s as any).tnotif_archetype_names ?? []), ((s as any).locArgs?.[1] ?? 0)];
  }
  return;
  scene.build();
}

function enterGetArchetypeMessage(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  if (Object.keys((s as any).tnotif_archetype_names ?? {}).length === 0) {
    return;
  }
  (s as any).tnotif_popup_start = ((s as any).tnotif_window_start ?? 0);
  (s as any).tnotif_popup_end = ((s as any).totminut ?? 0);
  ((s as any).tnotif_disp = (s as any).tnotif_disp ?? {})['bimbo'] = 'Bimbo';
  ((s as any).tnotif_disp = (s as any).tnotif_disp ?? {})['preppy'] = 'Preppy';
  ((s as any).tnotif_disp = (s as any).tnotif_disp ?? {})['prude'] = 'Prude';
  ((s as any).tnotif_disp = (s as any).tnotif_disp ?? {})['punk'] = 'Punk';
  ((s as any).tnotif_disp = (s as any).tnotif_disp ?? {})['goth'] = 'Goth';
  (s as any).tnotif_i = 0;
  do {
    (s as any).tnotif_t = (((s as any).tnotif_archetype_names ?? 0)?.[String((s as any).tnotif_i ?? 0)] ?? 0);
    if (((s as any).tnotif_archetype_delta ?? 0)?.[String((s as any).tnotif_t ?? 0)] !== 0) {
      (s as any).tnotif_abs = ((((s as any).tnotif_archetype_delta ?? 0)?.[String((s as any).tnotif_t ?? 0)] < 0) ? (-(((s as any).tnotif_archetype_delta ?? 0)?.[String((s as any).tnotif_t ?? 0)] ?? 0)) : ((((s as any).tnotif_archetype_delta ?? 0)?.[String((s as any).tnotif_t ?? 0)] ?? 0)));
      (s as any).tnotif_dir = ((((s as any).tnotif_archetype_delta ?? 0)?.[String((s as any).tnotif_t ?? 0)] > 0) ? ('↑') : ('↓'));
      if (((s as any).tnotif_abs ?? 0) <= 50) {
        (s as any).tnotif_arrow = ((s as any).tnotif_dir ?? 0);
      } else {
        if (((s as any).tnotif_abs ?? 0) <= 250) {
          (s as any).tnotif_arrow = ((s as any).tnotif_dir ?? 0) + ((s as any).tnotif_dir ?? 0);
        } else {
          if (((s as any).tnotif_abs ?? 0) <= 1000) {
            (s as any).tnotif_arrow = ((s as any).tnotif_dir ?? 0) + ((s as any).tnotif_dir ?? 0) + ((s as any).tnotif_dir ?? 0);
          } else {
            (s as any).tnotif_arrow = ((s as any).tnotif_dir ?? 0) + ((s as any).tnotif_dir ?? 0) + ((s as any).tnotif_dir ?? 0) + ((s as any).tnotif_dir ?? 0);
          }
        }
      }
      (s as any).result = ((s as any).result ?? 0) + (((((s as any).result ?? 0) !== '') ? ('&ensp;') : ('')) + '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027archetypes\u0027, \u0027notify_popup\u0027, String((s as any).tnotif_t ?? \u0027\u0027)); return false;">' + ((s as any).tnotif_arrow ?? 0) + ' ' + (((s as any).tnotif_disp ?? 0)?.[String((s as any).tnotif_t ?? 0)] ?? 0) + '</a>');
    }
    (s as any).tnotif_i = ((s as any).tnotif_i ?? 0) + (1);
    (s as any).result = '<span style="font-weight:normal">' + ((s as any).result ?? 0) + '</span>';
    (s as any).tnotif_i = undefined;
    (s as any).tnotif_t = undefined;
    (s as any).tnotif_abs = undefined;
    (s as any).tnotif_dir = undefined;
    (s as any).tnotif_arrow = undefined;
    (s as any).tnotif_disp = undefined;
    (s as any).tnotif_archetype_delta = undefined;
    (s as any).tnotif_archetype_names = undefined;
    (s as any).tnotif_window_start = ((s as any).totminut ?? 0);
    return;
  } while (((s as any).tnotif_i ?? 0) < Object.keys((s as any).tnotif_archetype_names ?? {}).length);
  scene.build();
}

function enterIsEmptyArchetypes(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (Object.keys((s as any).tnotif_archetype_names ?? {}).length === 0);
  return;
  scene.build();
}

function enterNotifyPopup(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_np = (s as any).temp_np ?? {})['archetype'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).temp_np ?? 0)?.['archetype'] === 'bimbo') {
    ((s as any).temp_np = (s as any).temp_np ?? {})['disp'] = 'Bimbo';
  } else {
    if (((s as any).temp_np ?? 0)?.['archetype'] === 'preppy') {
      ((s as any).temp_np = (s as any).temp_np ?? {})['disp'] = 'Preppy';
    } else {
      if (((s as any).temp_np ?? 0)?.['archetype'] === 'prude') {
        ((s as any).temp_np = (s as any).temp_np ?? {})['disp'] = 'Prude';
      } else {
        if (((s as any).temp_np ?? 0)?.['archetype'] === 'punk') {
          ((s as any).temp_np = (s as any).temp_np ?? {})['disp'] = 'Punk';
        } else {
          if (((s as any).temp_np ?? 0)?.['archetype'] === 'goth') {
            ((s as any).temp_np = (s as any).temp_np ?? {})['disp'] = 'Goth';
          }
        }
      }
    }
  }
  ((s as any).temp_np_cats = (s as any).temp_np_cats ?? {})[0] = 'clothing';
  ((s as any).temp_np_cats = (s as any).temp_np_cats ?? {})[1] = 'shoes';
  ((s as any).temp_np_cats = (s as any).temp_np_cats ?? {})[2] = 'makeup';
  ((s as any).temp_np_cats = (s as any).temp_np_cats ?? {})[3] = 'hair';
  ((s as any).temp_np_cats = (s as any).temp_np_cats ?? {})[4] = 'body_mods';
  ((s as any).temp_np_cats = (s as any).temp_np_cats ?? {})[5] = 'body';
  ((s as any).temp_np_cats = (s as any).temp_np_cats ?? {})[6] = 'social';
  ((s as any).temp_np_cats = (s as any).temp_np_cats ?? {})[7] = 'drugs';
  ((s as any).temp_np_cats = (s as any).temp_np_cats ?? {})[8] = 'chastity';
  ((s as any).temp_np_cat_disp = (s as any).temp_np_cat_disp ?? {})['clothing'] = 'Clothing';
  ((s as any).temp_np_cat_disp = (s as any).temp_np_cat_disp ?? {})['shoes'] = 'Shoes';
  ((s as any).temp_np_cat_disp = (s as any).temp_np_cat_disp ?? {})['makeup'] = 'Makeup';
  ((s as any).temp_np_cat_disp = (s as any).temp_np_cat_disp ?? {})['hair'] = 'Hair';
  ((s as any).temp_np_cat_disp = (s as any).temp_np_cat_disp ?? {})['body_mods'] = 'Body modifications';
  ((s as any).temp_np_cat_disp = (s as any).temp_np_cat_disp ?? {})['body'] = 'Body';
  ((s as any).temp_np_cat_disp = (s as any).temp_np_cat_disp ?? {})['social'] = 'Social';
  ((s as any).temp_np_cat_disp = (s as any).temp_np_cat_disp ?? {})['drugs'] = 'Drugs & alcohol';
  ((s as any).temp_np_cat_disp = (s as any).temp_np_cat_disp ?? {})['chastity'] = 'Chastity';
  ((s as any).temp_np = (s as any).temp_np ?? {})['i'] = 0;
  while (true) {
    if (((s as any).temp_np ?? 0)?.['i'] < Object.keys((s as any).arch_log_minut ?? {}).length) {
      if (((s as any).arch_log_archetype ?? 0)[((s as any).temp_np ?? 0)?.['i']] === ((s as any).temp_np ?? 0)?.['archetype']) {
        if (((s as any).arch_log_minut ?? 0)[((s as any).temp_np ?? 0)?.['i']] >= ((s as any).tnotif_popup_start ?? 0)  &&  ((s as any).arch_log_minut ?? 0)[((s as any).temp_np ?? 0)?.['i']] <= ((s as any).tnotif_popup_end ?? 0)) {
          ((s as any).temp_np = (s as any).temp_np ?? {})['cat'] = qspUntranslated(s, "arch_log_cat[temp_np['i']]", { location: "archetypes" });
          if (((s as any).temp_np ?? 0)?.['cat'] === 'story') {
            ((s as any).temp_np = (s as any).temp_np ?? {})['lbl'] = ((((s as any).arch_log_label ?? 0)[((s as any).temp_np ?? 0)?.['i']] !== '') ? (qspUntranslated(s, "arch_log_label[temp_np['i']]", { location: "archetypes" })) : ('(unlabelled)'));
            if ((Array.isArray((s as any).temp_np_labels) ? ((s as any).temp_np_labels as any[]).indexOf(((s as any).temp_np ?? 0)?.['lbl']) : -1) < 0) {
              (s as any).temp_np_labels = [...((s as any).temp_np_labels ?? []), (((s as any).temp_np ?? 0)?.['lbl'])];
            }
            ((s as any).temp_np_lbl_delta = (s as any).temp_np_lbl_delta ?? {})[(((s as any).temp_np ?? 0)?.['lbl'])] = ((s as any).temp_np_lbl_delta[(((s as any).temp_np ?? 0)?.['lbl'])] ?? 0) + (qspUntranslated(s, "arch_log_delta[temp_np['i']]", { location: "archetypes" }));
          } else {
            ((s as any).temp_np_cat_delta = (s as any).temp_np_cat_delta ?? {})[(((s as any).temp_np ?? 0)?.['cat'])] = ((s as any).temp_np_cat_delta[(((s as any).temp_np ?? 0)?.['cat'])] ?? 0) + (qspUntranslated(s, "arch_log_delta[temp_np['i']]", { location: "archetypes" }));
          }
          ((s as any).temp_np = (s as any).temp_np ?? {})['total'] = ((s as any).temp_np['total'] ?? 0) + (qspUntranslated(s, "arch_log_delta[temp_np['i']]", { location: "archetypes" }));
        }
      }
      ((s as any).temp_np = (s as any).temp_np ?? {})['i'] = ((s as any).temp_np['i'] ?? 0) + (1);
      break;
    }
    ((s as any).temp_np = (s as any).temp_np ?? {})['out'] = '<font color="' + (((s as any).theme_hex ?? 0)?.[(((s as any).temp_np ?? 0)?.['archetype'])] ?? 0) + '"><b>' + (((s as any).temp_np ?? 0)?.['disp']) + '</b></font> ' + qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).temp_np ?? 0)?.['total']), 'fine') + ' this update<br><br>';
    ((s as any).temp_np = (s as any).temp_np ?? {})['ci'] = 0;
    while (true) {
      if (((s as any).temp_np ?? 0)?.['ci'] < 9) {
        ((s as any).temp_np = (s as any).temp_np ?? {})['ck'] = qspUntranslated(s, "temp_np_cats[temp_np['ci']]", { location: "archetypes" });
        if (((s as any).temp_np_cat_delta ?? 0)[((s as any).temp_np ?? 0)?.['ck']] !== 0) {
          ((s as any).temp_np = (s as any).temp_np ?? {})['out'] = ((s as any).temp_np['out'] ?? 0) + ('&nbsp;&nbsp;' + (((s as any).temp_np_cat_disp ?? 0)?.[(((s as any).temp_np ?? 0)?.['ck'])] ?? 0) + ': ' + qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).temp_np_cat_delta ?? 0)?.[(((s as any).temp_np ?? 0)?.['ck'])] ?? 0), 'fine') + '<br>');
        }
        ((s as any).temp_np = (s as any).temp_np ?? {})['ci'] = ((s as any).temp_np['ci'] ?? 0) + (1);
        break;
      }
      if (((s as any).temp_np_cat_delta ?? 0)?.['decay'] !== 0) {
        ((s as any).temp_np = (s as any).temp_np ?? {})['out'] = ((s as any).temp_np['out'] ?? 0) + ('&nbsp;&nbsp;Passive decay: ' + qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).temp_np_cat_delta ?? 0)?.['decay']), 'fine') + '<br>');
      }
      if (((s as any).temp_np_cat_delta ?? 0)?.['opposition'] !== 0) {
        ((s as any).temp_np = (s as any).temp_np ?? {})['out'] = ((s as any).temp_np['out'] ?? 0) + ('&nbsp;&nbsp;Opposition: ' + qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).temp_np_cat_delta ?? 0)?.['opposition']), 'fine') + '<br>');
      }
      if (Object.keys((s as any).temp_np_labels ?? {}).length > 0) {
        ((s as any).temp_np = (s as any).temp_np ?? {})['out'] = ((s as any).temp_np['out'] ?? 0) + ('<br>');
        ((s as any).temp_np = (s as any).temp_np ?? {})['li'] = 0;
        while (true) {
          if (((s as any).temp_np ?? 0)?.['li'] < Object.keys((s as any).temp_np_labels ?? {}).length) {
            ((s as any).temp_np = (s as any).temp_np ?? {})['lbl'] = qspUntranslated(s, "temp_np_labels[temp_np['li']]", { location: "archetypes" });
            ((s as any).temp_np = (s as any).temp_np ?? {})['out'] = ((s as any).temp_np['out'] ?? 0) + ('&nbsp;&nbsp;' + (((s as any).temp_np ?? 0)?.['lbl']) + ': ' + qspFunc(s, 'archetypes', 'fmt_pts', (((s as any).temp_np_lbl_delta ?? 0)?.[(((s as any).temp_np ?? 0)?.['lbl'])] ?? 0), 'fine') + '<br>');
            ((s as any).temp_np = (s as any).temp_np ?? {})['li'] = ((s as any).temp_np['li'] ?? 0) + (1);
            break;
          }
        }
      }
      alert((((s as any).temp_np ?? 0)?.['out']));
      (s as any).temp_np = undefined;
      (s as any).temp_np_cats = undefined;
      (s as any).temp_np_cat_disp = undefined;
      (s as any).temp_np_cat_delta = undefined;
      (s as any).temp_np_labels = undefined;
      (s as any).temp_np_lbl_delta = undefined;
      return;
      alert('bad archetype function, this line shouldn\'t be reached: \'' + ((s as any).locArgs?.[0] ?? 0) + '\'');
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
    case 'get_opposite':
      enterGetOpposite(s, scene);
      break;
    case 'get_percentage':
      enterGetPercentage(s, scene);
      break;
    case 'get_lvl':
      enterGetLvl(s, scene);
      break;
    case 'gain':
      enterGain(s, scene);
      break;
    case 'lose':
      enterLose(s, scene);
      break;
    case 'change':
      enterChange(s, scene);
      break;
    case 'faith_gain':
      enterFaithGain(s, scene);
      break;
    case 'sex_change':
      enterSexChange(s, scene);
      break;
    case 'set_active':
      enterSetActive(s, scene);
      break;
    case 'get_state_points':
      enterGetStatePoints(s, scene);
      break;
    case 'loop':
      enterLoop(s, scene);
      break;
    case 'get_decay_rate':
      enterGetDecayRate(s, scene);
      break;
    case 'decay':
      enterDecay(s, scene);
      break;
    case 'apply_effects':
      enterApplyEffects(s, scene);
      break;
    case 'daily_snapshot':
      enterDailySnapshot(s, scene);
      break;
    case 'compute_withdrawal':
      enterComputeWithdrawal(s, scene);
      break;
    case 'seed_snapshots':
      enterSeedSnapshots(s, scene);
      break;
    case 'compute_stat_display':
      enterComputeStatDisplay(s, scene);
      break;
    case 'init':
      enterInit(s, scene);
      break;
    case 'arch_tabs':
      enterArchTabs(s, scene);
      break;
    case 'display_page':
      enterDisplayPage(s, scene);
      break;
    case 'history_page':
      enterHistoryPage(s, scene);
      break;
    case 'cause_catalog':
      enterCauseCatalog(s, scene);
      break;
    case 'log_event':
      enterLogEvent(s, scene);
      break;
    case 'aggregate':
      enterAggregate(s, scene);
      break;
    case 'track_archetype':
      enterTrackArchetype(s, scene);
      break;
    case 'get_archetype_message':
      enterGetArchetypeMessage(s, scene);
      break;
    case 'is_empty_archetypes':
      enterIsEmptyArchetypes(s, scene);
      break;
    case 'notify_popup':
      enterNotifyPopup(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const archetypes: LocationDef = {
  name: 'archetypes',
  title: '▲',
  region: 'other',
  enter: enter,
};
