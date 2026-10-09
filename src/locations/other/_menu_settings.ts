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
    if (String((s as any).locArgs?.[0] ?? '') === '0'  &&  String((s as any).locArgs?.[3] ?? '') === 'up') {
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

function enterThemePresets(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  scene.actions([
    { label: 'Return', goto: ['_menu_settings', 'theme_customize'] },
    { label: 'White', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'White';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'Black', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Black';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'Modern Grey', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Modern Grey';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'Latte', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Latte';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'Frappé', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Frappé';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'Macchiato', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Macchiato';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'Mocha', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Mocha';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'Nord Light', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Nord Light';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'Nord Dark', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Nord Dark';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'Sol. Light', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Solarized Light';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'Sol. Dark', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Solarized Dark';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'TN Light', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Tokyo Night Light';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'Tokyo Night', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Tokyo Night';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'RP Dawn', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Rosé Pine Dawn';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'Rosé Pine', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Rosé Pine';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
    { label: 'RP Moon', handler: (st: GameState) => {
      (st as any).theme = (st as any).theme ?? {};
      (st as any).theme['name'] = 'Rosé Pine Moon';
      (st as any).theme['type'] = 'static';
      qspCall(st, 'themes', 'get_theme', 'indoors');
      qspCall(st, '_menu_settings', 'theme_presets_copy');
    } },
  ]);
  scene.build();
}

function enterExplanationStart(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  if (((s as any).stat_explanation ?? '') === '') {
    qspCall(s, '_menu_settings', 'settingtabs', 'Glossary');
  }
  (s as any).menu_off = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Glossary Overview</h2></center>');
  scene.text('This is the glossary for the game. It explains the different parts of the stat display.');
  scene.actions([
    { label: 'Continue with the explanation of icons', goto: ['_menu_settings', 'explanation_icons'] },
    { label: 'Jump to the explanation of attributes', goto: ['_menu_settings', 'explanation_attributes'] },
    { label: 'Jump to the explanation of skills', goto: ['_menu_settings', 'explanation_skill'] },
    { label: 'Jump to the explanation of status effects', goto: ['_menu_settings', 'explanation_status'] },
    { label: 'Jump to the explanation of archetypes', goto: ['_menu_settings', 'explanation_archetypes'] },
  ]);
  if (((s as any).stat_explanation ?? '') === '') {
    scene.actions([{ label: 'Exit the menu', handler: (st: GameState) => {
      qspCall(st, '_menu_settings', 'menu_exit');
      const menuLoc = (st as any).menu_loc ?? '';
      const menuArg = (st as any).menu_arg ?? '';
      qspGoto(st, menuLoc, menuArg, '');
    } }]);
  } else {
    qspCall(s, '_menu_settings', 'explanation_start_exit');
  }
  scene.build();
}

function enterExplanationIcons(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  if (((s as any).stat_explanation ?? '') === '') {
    qspCall(s, '_menu_settings', 'settingtabs', 'Glossary');
  }
  (s as any).menu_off = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Icons</h2></center>');
  scene.text('The icons in the stat display provide information about your character.');
  scene.actions([
    { label: 'Continue with the explanation of attributes', goto: ['_menu_settings', 'explanation_attributes'] },
    { label: 'Go back to the Glossary overview', goto: ['_menu_settings', 'explanation_start'] },
    { label: 'Jump to the explanation of skills', goto: ['_menu_settings', 'explanation_skill'] },
    { label: 'Jump to the explanation of status effects', goto: ['_menu_settings', 'explanation_status'] },
    { label: 'Jump to the explanation of archetypes', goto: ['_menu_settings', 'explanation_archetypes'] },
  ]);
  if (((s as any).stat_explanation ?? '') === '') {
    scene.actions([{ label: 'Exit the menu', handler: (st: GameState) => {
      qspCall(st, '_menu_settings', 'menu_exit');
      const menuLoc = (st as any).menu_loc ?? '';
      const menuArg = (st as any).menu_arg ?? '';
      qspGoto(st, menuLoc, menuArg, '');
    } }]);
  } else {
    qspCall(s, '_menu_settings', 'explanation_start_exit');
  }
  scene.build();
}

function enterExplanationAttributes(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  if (((s as any).stat_explanation ?? '') === '') {
    qspCall(s, '_menu_settings', 'settingtabs', 'Glossary');
  }
  (s as any).menu_off = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Attributes</h2></center>');
  scene.text('Attributes are the basic stats of your character. They are on a scale from 1 to 100.');
  scene.actions([
    { label: 'Continue with the explanation of skills', goto: ['_menu_settings', 'explanation_skill'] },
    { label: 'Go back to the Glossary overview', goto: ['_menu_settings', 'explanation_start'] },
    { label: 'Jump back to the explanation of icons', goto: ['_menu_settings', 'explanation_icons'] },
    { label: 'Jump to the explanation of status effects', goto: ['_menu_settings', 'explanation_status'] },
    { label: 'Jump to the explanation of archetypes', goto: ['_menu_settings', 'explanation_archetypes'] },
  ]);
  if (((s as any).stat_explanation ?? '') === '') {
    scene.actions([{ label: 'Exit the menu', handler: (st: GameState) => {
      qspCall(st, '_menu_settings', 'menu_exit');
      const menuLoc = (st as any).menu_loc ?? '';
      const menuArg = (st as any).menu_arg ?? '';
      qspGoto(st, menuLoc, menuArg, '');
    } }]);
  } else {
    qspCall(s, '_menu_settings', 'explanation_start_exit');
  }
  scene.build();
}

function enterExplanationSkill(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  if (((s as any).stat_explanation ?? '') === '') {
    qspCall(s, '_menu_settings', 'settingtabs', 'Glossary');
  }
  (s as any).menu_off = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Skills</h2></center>');
  scene.text('Skills are grouped into different categories: Mental, Sport, Beauty, Artistic, and Jobs.');
  scene.actions([
    { label: 'Continue with the explanation of status bars', goto: ['_menu_settings', 'explanation_status'] },
    { label: 'Go back to the Glossary overview', goto: ['_menu_settings', 'explanation_start'] },
    { label: 'Jump back to the explanation of icons', goto: ['_menu_settings', 'explanation_icons'] },
    { label: 'Jump back to the explanation of attributes', goto: ['_menu_settings', 'explanation_attributes'] },
    { label: 'Jump to the explanation of archetypes', goto: ['_menu_settings', 'explanation_archetypes'] },
  ]);
  if (((s as any).stat_explanation ?? '') === '') {
    scene.actions([{ label: 'Exit the menu', handler: (st: GameState) => {
      qspCall(st, '_menu_settings', 'menu_exit');
      const menuLoc = (st as any).menu_loc ?? '';
      const menuArg = (st as any).menu_arg ?? '';
      qspGoto(st, menuLoc, menuArg, '');
    } }]);
  } else {
    qspCall(s, '_menu_settings', 'explanation_start_exit');
  }
  scene.build();
}

function enterExplanationStatus(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  if (((s as any).stat_explanation ?? '') === '') {
    qspCall(s, '_menu_settings', 'settingtabs', 'Glossary');
  }
  (s as any).menu_off = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Status Bars</h2></center>');
  scene.text('The status bars represent different parts of the player\'s physical and mental status.');
  scene.actions([
    { label: 'Continue with the explanation of archetypes', goto: ['_menu_settings', 'explanation_archetypes'] },
    { label: 'Go back to the Glossary overview', goto: ['_menu_settings', 'explanation_start'] },
    { label: 'Jump back to the explanation of icons', goto: ['_menu_settings', 'explanation_icons'] },
    { label: 'Jump back to the explanation of attributes', goto: ['_menu_settings', 'explanation_attributes'] },
    { label: 'Jump back to the explanation of skills', goto: ['_menu_settings', 'explanation_skill'] },
  ]);
  if (((s as any).stat_explanation ?? '') === '') {
    scene.actions([{ label: 'Exit the menu', handler: (st: GameState) => {
      qspCall(st, '_menu_settings', 'menu_exit');
      const menuLoc = (st as any).menu_loc ?? '';
      const menuArg = (st as any).menu_arg ?? '';
      qspGoto(st, menuLoc, menuArg, '');
    } }]);
  } else {
    qspCall(s, '_menu_settings', 'explanation_start_exit');
  }
  scene.build();
}

function enterExplanationArchetypes(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  if (((s as any).stat_explanation ?? '') === '') {
    qspCall(s, '_menu_settings', 'settingtabs', 'Glossary');
  }
  (s as any).menu_off = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Archetypes</h2></center>');
  scene.text('Archetypes are five broad personas you can lean into: Bimbo, Preppy, Prude, Punk, and Goth.');
  scene.actions([
    { label: 'Go back to the Glossary overview', goto: ['_menu_settings', 'explanation_start'] },
    { label: 'Jump back to the explanation of icons', goto: ['_menu_settings', 'explanation_icons'] },
    { label: 'Jump back to the explanation of attributes', goto: ['_menu_settings', 'explanation_attributes'] },
    { label: 'Jump back to the explanation of skills', goto: ['_menu_settings', 'explanation_skill'] },
    { label: 'Jump back to the explanation of status effects', goto: ['_menu_settings', 'explanation_status'] },
  ]);
  if (((s as any).stat_explanation ?? '') === '') {
    scene.actions([{ label: 'Exit the menu', handler: (st: GameState) => {
      qspCall(st, '_menu_settings', 'menu_exit');
      const menuLoc = (st as any).menu_loc ?? '';
      const menuArg = (st as any).menu_arg ?? '';
      qspGoto(st, menuLoc, menuArg, '');
    } }]);
  } else {
    qspCall(s, '_menu_settings', 'explanation_start_exit');
  }
  scene.build();
}

function enterExplanationStartExit(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  const statExplanation = (s as any).stat_explanation ?? '';
  if (statExplanation === 'sg') {
    scene.actions([
      { label: 'Start playing', handler: (st: GameState) => {
        (st as any).music_loop = 0;
        const startLocation = (st as any).start_location ?? 0;
        if (startLocation === 0) {
          qspGoto(st, 'intro_sg', 'intro_pavlovsk', '');
        } else {
          qspGoto(st, 'intro_sg', 'intro_gadukino', '');
        }
      } },
      { label: 'Restart the character selection', handler: (st: GameState) => {
        scene.text('This will reset everything and take you back to the beginning. Are you sure you want to start again?');
        scene.actions([
          { label: 'No', goto: ['intro_sg', 'four'] },
          { label: 'Yes', handler: (st2: GameState) => {
            qspCall(st2, 'start', '');
          } },
        ]);
        scene.build();
      } },
    ]);
  } else if (statExplanation === 'sg_m') {
    scene.actions([
      { label: '<center><b>Begin!</b></center>', handler: (st: GameState) => {
        (st as any).music_loop = 0;
        const startLocation = (st as any).start_location ?? 0;
        if (startLocation === 0) {
          qspGoto(st, 'intro_sg', 'intro_pavlovsk', '');
        } else {
          qspGoto(st, 'intro_sg', 'intro_gadukino', '');
        }
      } },
    ]);
  } else if (statExplanation === 'sg_tg') {
    scene.actions([
      { label: 'Start your new life', handler: (st: GameState) => {
        (st as any).music_loop = 0;
        const startLocation = (st as any).start_location ?? 0;
        if (startLocation === 0) {
          qspGoto(st, 'intro_sg', 'intro_pavlovsk', '');
        } else {
          qspGoto(st, 'intro_sg', 'intro_gadukino', '');
        }
      } },
    ]);
  } else if (statExplanation === 'city') {
    scene.actions([{ label: 'Start the game', goto: ['korr', ''] }]);
  } else if (statExplanation === 'uni') {
    scene.actions([{ label: 'Start the game', goto: ['uni_grounds', ''] }]);
  }
  scene.build();
}

function enterThemeCustomize(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  const theme = (s as any).theme ?? {};
  if (theme['name'] === 'Custom') {
    qspCall(s, 'themes', 'set_theme', 'Custom', 'static');
    qspCall(s, 'menu_obnovit', '');
  }
  (s as any).menu_page = -1;
  qspCall(s, '_menu_settings', 'settingtabs');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
      (st as any).menu_page = 2;
      qspGoto(st, '_menu_settings', 'display', '');
    } },
    { label: 'Presets', handler: (st: GameState) => {
      qspCall(st, '_menu_settings', 'theme_presets');
    } },
    { label: 'Export', goto: ['_menu_settings', 'theme_export'] },
    { label: 'Import', handler: (st: GameState) => {
      (st as any).menu_page = undefined;
      qspGoto(st, 'initg', 'set_game_set', '');
    } },
  ]);
  scene.text('<center><h2>Customize Theme</h2></center>');
  scene.build();
}

function enterLifesimCheatsOn(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  scene.text('This will activate multiple cheats and have a profound impact on how the game is experienced.');
  scene.text('We strongly discourage the use of this feature, but we also recognize that the life sim aspect is not for everybody.');
  scene.text('Are you sure you want to activate this?');
  scene.actions([
    { label: 'No, I do not want to disable all life sim features', goto: ['_menu_settings', ''] },
    { label: 'Yes, disable all life sim features', handler: (st: GameState) => {
      (st as any).cheatVars = (st as any).cheatVars ?? {};
      (st as any).cheatVars['willpower'] = 1;
      (st as any).cheatVars['inf_willpower'] = 1;
      (st as any).cheatVars['hunger'] = 1;
      (st as any).cheatVars['thirst'] = 1;
      (st as any).cheatVars['mood'] = 1;
      (st as any).cheatVars['sleep'] = 1;
      (st as any).cheatVars['always_brushed'] = 1;
      (st as any).cheatVars['makeup_smear'] = 1;
      (st as any).cheatVars['no_sweat'] = 1;
      (st as any).cheatVars['no_leghair'] = 1;
    } },
  ]);
  scene.build();
}

function enterLifesimCheatsOff(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  scene.text('This will disable all life sim cheats and restore the default settings.');
  scene.text('Are you sure you want to do this?');
  scene.actions([
    { label: 'No', goto: ['_menu_settings', ''] },
    { label: 'Yes', handler: (st: GameState) => {
      (st as any).cheatVars = (st as any).cheatVars ?? {};
      (st as any).cheatVars['willpower'] = 0;
      (st as any).cheatVars['inf_willpower'] = 0;
      (st as any).cheatVars['hunger'] = 0;
      (st as any).cheatVars['thirst'] = 0;
      (st as any).cheatVars['mood'] = 0;
      (st as any).cheatVars['sleep'] = 0;
      (st as any).cheatVars['always_brushed'] = 0;
      (st as any).cheatVars['makeup_smear'] = 0;
      (st as any).cheatVars['no_sweat'] = 0;
      (st as any).cheatVars['no_leghair'] = 0;
    } },
  ]);
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
    case 'theme_presets':
      enterThemePresets(s, scene);
      break;
    case 'explanation_start':
      enterExplanationStart(s, scene);
      break;
    case 'explanation_icons':
      enterExplanationIcons(s, scene);
      break;
    case 'explanation_attributes':
      enterExplanationAttributes(s, scene);
      break;
    case 'explanation_skill':
      enterExplanationSkill(s, scene);
      break;
    case 'explanation_status':
      enterExplanationStatus(s, scene);
      break;
    case 'explanation_archetypes':
      enterExplanationArchetypes(s, scene);
      break;
    case 'explanation_start_exit':
      enterExplanationStartExit(s, scene);
      break;
    case 'theme_customize':
      enterThemeCustomize(s, scene);
      break;
    case 'lifesim_cheats_on':
      enterLifesimCheatsOn(s, scene);
      break;
    case 'lifesim_cheats_off':
      enterLifesimCheatsOff(s, scene);
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
