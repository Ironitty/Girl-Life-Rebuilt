import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHelperBar(s: GameState, scene: SceneBuilder): void {
  (s as any).sd_hb['rm'] = ((s as any).sd ?? 0)?.['render_mode'] + 1;
  if (((s as any).sd ?? 0)?.['render_mode'] === 2) {
  } else {
    if (((s as any).sd ?? 0)?.['name_side'] === 1) {
    }
  }
  return;
  scene.build();
}

function enterHelperBarCell(s: GameState, scene: SceneBuilder): void {
  (s as any).sd_bc['bar'] = qspFunc(s, 'progressbar', '$ARGS[1]', qspUntranslated(s, "ARGS[3]", { location: "stat_display" }), qspUntranslated(s, "ARGS[4]", { location: "stat_display" }), qspUntranslated(s, "ARGS[5]", { location: "stat_display" }), qspUntranslated(s, "ARGS[6]", { location: "stat_display" }), ((s as any).locArgs?.[7] ?? 0), '', ((s as any).locArgs?.[8] ?? 0), ((s as any).sd ?? 0)?.['render_mode'] + 1);
  if (((s as any).sd ?? 0)?.['name_side'] === 1) {
  }
  return;
  scene.build();
}

function enterHelperSkillEntry(s: GameState, scene: SceneBuilder): void {
  (s as any).sd_se['cols'] = ((s as any).sd ?? 0)?.['skills_columns'];
  (s as any).sd_se['name'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).stat_cfg ?? 0)?.['skills_mode'] > 0) {
    if (((s as any).ARGS ?? 0)[3] % ((s as any).sd_se ?? 0)?.['cols'] === 0) {
    }
    // TODO-QSP: $result += $func('stat_display', 'helper_bar_cell', 'smooth_positive', $sd_se['name'], ARGS[2])
    if (((s as any).ARGS ?? 0)[3] % ((s as any).sd_se ?? 0)?.['cols'] === (((s as any).sd_se ?? 0)?.['cols'] - 1)) {
      // TODO-QSP: $result += '</tr>'
    }
  } else {
    if (((s as any).ARGS ?? 0)[3] % ((s as any).sd_se ?? 0)?.['cols'] === 0) {
    }
    // TODO-QSP: $result += '<td style="font-size: <<sd_font_pct>>%;">' + $str(ARGS[2]) + ' ' + $sd_se['name'] + '</t...
    if (((s as any).ARGS ?? 0)[3] % ((s as any).sd_se ?? 0)?.['cols'] === (((s as any).sd_se ?? 0)?.['cols'] - 1)) {
      // TODO-QSP: $result += '</tr>'
    }
  }
  return;
  scene.build();
}

function enterHelperRelEntry(s: GameState, scene: SceneBuilder): void {
  (s as any).sd_re['cols'] = ((s as any).sd ?? 0)?.['relations_columns'];
  (s as any).sd_re['dname'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).stat_cfg ?? 0)?.['relations_mode'] > 0) {
    if (((s as any).stat_cfg ?? 0)?.['rel_color_mode'] === 1) {
      (s as any).sd_re['color'] = qspFunc(s, 'progressbar', 'color', 'smooth_positive', qspUntranslated(s, "ARGS[2]", { location: "stat_display" }), '10,35,60,80');
      (s as any).sd_re['dname'] = '<font color="\' + $sd_re[\'color\'] + \'">\' + $sd_re[\'dname\'] + \'</font>';
    }
    if (((s as any).ARGS ?? 0)[3] % ((s as any).sd_re ?? 0)?.['cols'] === 0) {
    }
    // TODO-QSP: $result += $func('stat_display', 'helper_bar_cell', 'smooth_positive', $sd_re['dname'], ARGS[2])
    if (((s as any).ARGS ?? 0)[3] % ((s as any).sd_re ?? 0)?.['cols'] === (((s as any).sd_re ?? 0)?.['cols'] - 1)) {
      // TODO-QSP: $result += '</tr>'
    }
  } else {
    if (((s as any).ARGS ?? 0)[3] % ((s as any).sd_re ?? 0)?.['cols'] === 0) {
    }
    if (((s as any).stat_cfg ?? 0)?.['rel_color_mode'] === 1) {
      (s as any).sd_re['color'] = qspFunc(s, 'progressbar', 'color', 'smooth_positive', qspUntranslated(s, "ARGS[2]", { location: "stat_display" }), '10,35,60,80');
      // TODO-QSP: $result += '<td style="font-size: <<sd_font_pct>>%;"><font color="' + $sd_re['color'] + '">' + $sd_r...
    } else {
      // TODO-QSP: $result += '<td style="font-size: <<sd_font_pct>>%;">' + $sd_re['dname'] + ': ' + $str(ARGS[2]) + '<...
    }
    if (((s as any).ARGS ?? 0)[3] % ((s as any).sd_re ?? 0)?.['cols'] === (((s as any).sd_re ?? 0)?.['cols'] - 1)) {
      // TODO-QSP: $result += '</tr>'
    }
  }
  return;
  scene.build();
}

function enterHelperToggle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_hide ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
  }
  return;
  scene.build();
}

function enterHelperRelName(s: GameState, scene: SceneBuilder): void {
  (s as any).sd_hn['key'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).locArgs?.[2] ?? 0) !== '') {
    (s as any).sd_hn['npcid'] = ((s as any).locArgs?.[2] ?? 0);
  } else {
    (s as any).sd_hn['npcid'] = ((s as any).sd_hn ?? 0)?.['key'];
  }
  (s as any).sd_hn['mode'] = ((s as any).stat_cfg ?? 0)?.['rel_name_mode'];
  if (((s as any).sd_hn ?? 0)?.['key'] !== ''  &&  ((s as any).sd_rel_name_override ?? 0)[((s as any).sd_hn ?? 0)?.['key']] > 0) {
    (s as any).sd_hn['mode'] = ((s as any).sd_rel_name_override ?? 0)?.[((s as any).sd_hn ?? 0)?.['key']];
  }
  if (((s as any).sd_hn ?? 0)?.['mode'] === 1) {
  } else {
    if (((s as any).result ?? 0) === '') {
    }
    if (((s as any).sd_hn ?? 0)?.['mode'] === 3) {
      if (((s as any).result ?? 0) === '') {
      }
    }
    if (((s as any).result ?? 0) === '') {
    }
    if (((s as any).result ?? 0) === '') {
    }
    if (((s as any).result ?? 0) === '') {
    }
    if (((s as any).result ?? 0) === '') {
    }
    if (((s as any).result ?? 0) === '') {
    }
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'helper_bar':
      enterHelperBar(s, scene);
      break;
    case 'helper_bar_cell':
      enterHelperBarCell(s, scene);
      break;
    case 'helper_skill_entry':
      enterHelperSkillEntry(s, scene);
      break;
    case 'helper_rel_entry':
      enterHelperRelEntry(s, scene);
      break;
    case 'helper_toggle':
      enterHelperToggle(s, scene);
      break;
    case 'helper_rel_name':
      enterHelperRelName(s, scene);
      break;
    default:
      enterHelperBar(s, scene);
      break;
  }
}

export const stat_display: LocationDef = {
  name: 'stat_display',
  region: 'other',
  enter: enter,
};
