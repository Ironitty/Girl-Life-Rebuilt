import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMenuExit(s: GameState, scene: SceneBuilder): void {
  (s as any).settingmode = 0;
  (s as any).settings = undefined;
  (s as any).menu_page = undefined;
  (s as any).explanation_table = undefined;
  scene.build();
}

function enterSettingtabs(s: GameState, scene: SceneBuilder): void {
  ((s as any).tabsname = (s as any).tabsname ?? {})[0] = 'Gameplay';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[0] = 'menu_page = ' + ((s as any).i ?? 0) + ' & gt \'$menu_settings\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[1] = 'Difficulty';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[1] = 'menu_page = ' + ((s as any).i ?? 0) + ' & gt \'$menu_settings\', \'difficulty\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[2] = 'Display';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[2] = 'menu_page = ' + ((s as any).i ?? 0) + ' & gt \'$menu_settings\', \'display\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[3] = 'Status Window';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[3] = 'menu_page = ' + ((s as any).i ?? 0) + ' & gt \'$menu_settings\', \'status\'';
  if (((s as any).settingmode ?? 0) !== 1) {
    ((s as any).tabsname = (s as any).tabsname ?? {})[4] = 'Phone Theme';
    ((s as any).tabsaction = (s as any).tabsaction ?? {})[4] = 'menu_page = ' + ((s as any).i ?? 0) + ' & gt \'$menu_settings\', \'theme\'';
  }
  ((s as any).tabsname = (s as any).tabsname ?? {})[5] = 'Mods';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[5] = 'menu_page = ' + ((s as any).i ?? 0) + ' & gt \'$menu_settings\', \'mods\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[6] = 'Information';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[6] = 'menu_page = ' + ((s as any).i ?? 0) + ' & gt \'$menu_settings\', \'explanation_start\'';
  if (String((s as any).locArgs?.[1] ?? '') !== '') {
    (s as any).temp_menu_page = qspUntranslated(s, "arrpos('tabsname', ARGS[1])", { location: "_menu_settings" });
    if (((s as any).temp_menu_page ?? 0) >= 0) {
      (s as any).menu_page = ((s as any).temp_menu_page ?? 0);
    }
    (s as any).temp_menu_page = undefined;
  }
  qspCall(s, 'tabhead', 'menu_page');
  if (((s as any).settingmode ?? 0) === 1) {
    scene.actions([
      { label: '<center><b>Return to character creation</b></center>', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'menu_exit');
    qspGoto(st, 'begin', 'start');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Enter cheat menu', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', '');
    qspCall(st, '$menu_cheat', '');
  } },
      { label: 'Export Game Settings', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', '');
  }, goto: ['import_export', 'export'] },
      { label: 'Import Game Settings', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', '');
  }, goto: ['import_export', 'import'] },
      { label: 'Emergency Exit', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', '');
  }, goto: ['$menu_settings', 'emergency'] },
      { label: 'Exit the menu', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', '');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
    ]);
  }
  scene.build();
}

function enterSwap(s: GameState, scene: SceneBuilder): void {
  while (true) {
    (s as any).temp_arr = ((s as any).locArgs?.[1] ?? 0);
    if (String((s as any).locArgs?.[2] ?? '') === 0  &&  String((s as any).locArgs?.[3] ?? '') === 'up') {
      break;
    }
    if (String((s as any).locArgs?.[2] ?? '') === (Object.keys((s as any)['$' + ((s as any).temp_arr ?? 0)] ?? {}).length - 1)  &&  String((s as any).locArgs?.[3] ?? '') === 'down') {
      break;
    }
    if (String((s as any).locArgs?.[3] ?? '') === 'up') {
      (s as any).temp_stat_feature = 0;
      scene.text('$' + ((s as any).temp_arr ?? 0) + '[' + ((s as any).locArgs?.[2] ?? 0) - 1 + '] = $' + ((s as any).temp_arr ?? 0) + '[' + ((s as any).locArgs?.[2] ?? 0) + ']');
      scene.text('$' + ((s as any).temp_arr ?? 0) + '[' + ((s as any).locArgs?.[2] ?? 0) + '] = $temp_stat_feature');
    } else {
      if (String((s as any).locArgs?.[3] ?? '') === 'down') {
        (s as any).temp_stat_feature = 0;
        scene.text('$' + ((s as any).temp_arr ?? 0) + '[' + ((s as any).locArgs?.[2] ?? 0) + 1 + '] = $' + ((s as any).temp_arr ?? 0) + '[' + ((s as any).locArgs?.[2] ?? 0) + ']');
        scene.text('$' + ((s as any).temp_arr ?? 0) + '[' + ((s as any).locArgs?.[2] ?? 0) + '] = $temp_stat_feature');
      }
    }
    break;
  }
  // LABEL: swap_cleanup
  (s as any).temp_stat_feature = undefined;
  (s as any).temp_arr = undefined;
  return;
  scene.build();
}

function enterSwapGrpMember(s: GameState, scene: SceneBuilder): void {
  while (true) {
    (s as any).temp_sgm_base = ((s as any).locArgs?.[1] ?? 0);
    (s as any).temp_sgm_i = ((s as any).locArgs?.[3] ?? 0);
    if (String((s as any).locArgs?.[4] ?? '') === 'up'  &&  ((s as any).temp_sgm_i ?? 0) > 0) {
      (s as any).temp_sgm_j = ((s as any).temp_sgm_i ?? 0) - 1;
    } else {
      if (String((s as any).locArgs?.[4] ?? '') === 'down') {
        (s as any).temp_sgm_j = ((s as any).temp_sgm_i ?? 0) + 1;
      } else {
        break;
      }
    }
    (s as any).temp_sgm_a = ((s as any).locArgs?.[2] ?? 0) + '_' + String(((s as any).temp_sgm_i ?? 0));
    (s as any).temp_sgm_b = ((s as any).locArgs?.[2] ?? 0) + '_' + String(((s as any).temp_sgm_j ?? 0));
    (s as any).temp_sgm_bval = 0;
    if (((s as any).temp_sgm_bval ?? 0) === '') {
      break;
    }
    (s as any).temp_stat_feature = 0;
    scene.text('$' + ((s as any).temp_sgm_base ?? 0) + '[\'' + ((s as any).temp_sgm_a ?? 0) + '\'] = $temp_sgm_bval');
    scene.text('$' + ((s as any).temp_sgm_base ?? 0) + '[\'' + ((s as any).temp_sgm_b ?? 0) + '\'] = $temp_stat_feature');
    break;
  }
  // LABEL: swap_gm_cleanup
  (s as any).temp_stat_feature = undefined;
  (s as any).temp_sgm_base = undefined;
  (s as any).temp_sgm_i = undefined;
  (s as any).temp_sgm_j = undefined;
  (s as any).temp_sgm_a = undefined;
  (s as any).temp_sgm_b = undefined;
  (s as any).temp_sgm_bval = undefined;
  return;
  scene.build();
}

function enterResetRels(s: GameState, scene: SceneBuilder): void {
  (s as any).rel_grp = undefined;
  (s as any).rel_group_order = undefined;
  return;
  scene.build();
}

function enterResetSkills(s: GameState, scene: SceneBuilder): void {
  (s as any).skill_grp = undefined;
  (s as any).skill_group_order = undefined;
  return;
  (s as any).menu_span = '<span style="display: inline-block; width: 40%;">';
  scene.build();
}

function enterToggleMenu(s: GameState, scene: SceneBuilder): void {
  scene.text('$menu_span + $ARGS[3] + \':</span>\'');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).settings = (s as any).settings ?? {})['table_start'] = '<center><table width="80%" cellspacing="0" cellpadding="20" valign="top"><tr><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).settings = (s as any).settings ?? {})['table_second'] = '</td><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).settings = (s as any).settings ?? {})['table_end'] = '</td></tr></table></center>';
  qspCall(s, 'themes', 'indoors');
  const arg = s.locArg;
  switch (arg) {
    case 'menu_exit':
      enterMenuExit(s, scene);
      break;
    case 'settingtabs':
      enterSettingtabs(s, scene);
      break;
    case 'swap':
      enterSwap(s, scene);
      break;
    case 'swap_grp_member':
      enterSwapGrpMember(s, scene);
      break;
    case 'reset_rels':
      enterResetRels(s, scene);
      break;
    case 'reset_skills':
      enterResetSkills(s, scene);
      break;
    case 'toggle_menu':
      enterToggleMenu(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _menu_settings: LocationDef = {
  name: '_menu_settings',
  title: 'Warning: You\'ve selected the card payment option, but you do',
  region: 'other',
  enter: enter,
};
