import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['table_start'] = '<center><table width="80%" cellspacing="0" cellpadding="20" valign="top"><tr><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['table_second'] = '</td><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['table_end'] = '</td></tr></table></center>';
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'obj_din', 'cheattabs', 'Image Sets');
  scene.text('<center><h1>Cheat Menu - Body Image Sets</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<center><b>Body Image Controls</b></center>');
  if (((s as any).cheatVars ?? 0)?.['fix_bodyimg'] === 1) {
    (s as any).temp_text = 'You are currently using set: ';
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] < 10) {
      // TODO-QSP: $temp_text += $cheatVars['fix_biset_<<cheatVars[''fix_bi_set'']>>_folder']
    } else {
      // TODO-QSP: $temp_text += 'default '
      if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 0) {
        // TODO-QSP: $temp_text += 'low '
      } else {
        if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 1) {
          // TODO-QSP: $temp_text += 'mid '
        } else {
          if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 2) {
            // TODO-QSP: $temp_text += 'high '
          }
        }
      }
      if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 === 19) {
        // TODO-QSP: $temp_text += 'strength'
      } else {
        // TODO-QSP: $temp_text += func('body_structure', 'body_desc_from_class', (cheatVars['fix_bi_set'] / 10 mod 10) *...
      }
    }
    // TODO-QSP: dynamic text: <<$temp_text>>
    scene.text(`${((s as any).temp_text || '')}`);
  } else {
    scene.text('You are currently not using a fixed set.');
  }
  scene.text('These are the default body image sets:');
  // TODO-QSP: func('cheatmenu_bisets', 'get_default_bi_table')
  scene.text('<center><b>Custom Image Sets</b></center>');
  (s as any).temp_cm_bi_flag = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 0]; enterCustomFolderDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterCustomFolderDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2]; enterCustomFolderDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3]; enterCustomFolderDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 4]; enterCustomFolderDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5]; enterCustomFolderDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 6]; enterCustomFolderDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 7]; enterCustomFolderDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 8]; enterCustomFolderDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 9]; enterCustomFolderDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).temp_cm_bi_flag ?? 0) < 10) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027add_set\\u0027); return false;"><b>Add new set</b></a>');
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027import_set\\u0027); return false;"><b>Import new set</b></a>');
  }
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  scene.actions([
    { label: 'How to: mod edition', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', 'mods_how_to');
  } },
  ]);
  scene.build();
}

function enterGetDefaultBiTable(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_table = '<table cellpadding="25" cellspacing="0">';
  // TODO-QSP: $temp_table +=  '<tr>'
  // TODO-QSP: $temp_table +=    '<td></td>'
  // TODO-QSP: $temp_table +=    '<td></td>'
  // TODO-QSP: $temp_table +=    '<th colspan=3><b>Strength</b></th>'
  // TODO-QSP: $temp_table +=  '</tr>'
  // TODO-QSP: $temp_table +=  '<tr>'
  // TODO-QSP: $temp_table +=    '<td></td>'
  // TODO-QSP: $temp_table +=    '<th><a href="exec: gs ''cheatmenu_bisets'', ''unlock_img_set'', 199 & gs ''cheatm...
  // TODO-QSP: $temp_table +=    '<th valign="bottom" style="border-bottom: 1px solid black">'
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 0) {
    // TODO-QSP: $temp_table +=    '<a style="color:#00FF00" href="exec: gs ''cheatmenu_bisets'', ''unlock_img_set'',...
  } else {
    // TODO-QSP: $temp_table +=    '<a href="exec: gs ''cheatmenu_bisets'', ''lock_img_set'', 190 & gs ''cheatmenu_bi...
  }
  // TODO-QSP: $temp_table +=    '</th>'
  // TODO-QSP: $temp_table +=    '<th valign="bottom" style="border-bottom: 1px solid black">'
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 1) {
    // TODO-QSP: $temp_table +=    '<a style="color:#00FF00" href="exec: gs ''cheatmenu_bisets'', ''unlock_img_set'',...
  } else {
    // TODO-QSP: $temp_table +=    '<a href="exec: gs ''cheatmenu_bisets'', ''lock_img_set'', 191 & gs ''cheatmenu_bi...
  }
  // TODO-QSP: $temp_table +=    '</th>'
  // TODO-QSP: $temp_table +=    '<th valign="bottom" style="border-bottom: 1px solid black">'
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 2) {
    // TODO-QSP: $temp_table +=    '<a style="color:#00FF00" href="exec: gs ''cheatmenu_bisets'', ''unlock_img_set'',...
  } else {
    // TODO-QSP: $temp_table +=    '<a href="exec: gs ''cheatmenu_bisets'', ''lock_img_set'', 192 & gs ''cheatmenu_bi...
  }
  // TODO-QSP: $temp_table +=    '</th>'
  // TODO-QSP: $temp_table +=  '</tr>'
  // TODO-QSP: $temp_table +=  '<tr>'
  // TODO-QSP: $temp_table +=    '<th rowspan=9><b>BMI</b></th>'
  (s as any).temp_cmd_i = 0;
  // TODO-QSP: :default_table_loop
  if (((s as any).temp_cmd_i ?? 0) !== 0) {
    // TODO-QSP: $temp_table +=  '<tr>'
  }
  // TODO-QSP: $temp_table +=    '<th align="right" style="border-right: 1px solid black">'
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === ((s as any).temp_cmd_i ?? 0)) {
    // TODO-QSP: $temp_table +=    '<a style="color:#00FF00" href="exec: gs ''cheatmenu_bisets'', ''unlock_img_set'',...
  } else {
    // TODO-QSP: $temp_table +=    '<a href="exec: gs ''cheatmenu_bisets'', ''lock_img_set'', 1<<temp_cmd_i>>9 & gs '...
  }
  // TODO-QSP: $temp_table +=    '</th>'
  // TODO-QSP: $temp_table +=    '<td align="center" valign="center">'
  (s as any).temp_cmd_colorflag = 0;
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  (((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === ((s as any).temp_cmd_i ?? 0)  ||  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === 9)  &&  (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 0  ||  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 9)) {
    (s as any).temp_cmd_colorflag = 1;
  }
  // TODO-QSP: $temp_table +=      '<<func(''cheatmenu_bisets'', ''get_bodyimg_desc_link'', temp_cmd_i * 100 + 2, t...
  // TODO-QSP: $temp_table +=    '</td>'
  // TODO-QSP: $temp_table +=    '<td align="center" valign="center">'
  (s as any).temp_cmd_colorflag = 0;
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  (((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === ((s as any).temp_cmd_i ?? 0)  ||  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === 9)  &&  (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 1  ||  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 9)) {
    (s as any).temp_cmd_colorflag = 1;
  }
  // TODO-QSP: $temp_table +=      '<<func(''cheatmenu_bisets'', ''get_bodyimg_desc_link'', temp_cmd_i * 100 + 6, t...
  // TODO-QSP: $temp_table +=    '</td>'
  // TODO-QSP: $temp_table +=    '<td align="center" valign="center">'
  (s as any).temp_cmd_colorflag = 0;
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  (((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === ((s as any).temp_cmd_i ?? 0)  ||  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === 9)  &&  (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 2  ||  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 9)) {
    (s as any).temp_cmd_colorflag = 1;
  }
  // TODO-QSP: $temp_table +=      '<<func(''cheatmenu_bisets'', ''get_bodyimg_desc_link'', temp_cmd_i * 100 + 8, t...
  // TODO-QSP: $temp_table +=    '</td>'
  // TODO-QSP: $temp_table +=  '</tr>'
  (s as any).temp_cmd_i = ((s as any).temp_cmd_i ?? 0) + (1);
  if (((s as any).temp_cmd_i ?? 0) < 9) {
    // TODO-QSP: jump 'default_table_loop'
  }
  // TODO-QSP: $temp_table += '</table>'
  (s as any).result = ((s as any).temp_table ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterLockImgSet(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bodyimg'] = 1;
  if (((s as any).locArgs?.[1] ?? 0) < 10) {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = ((s as any).locArgs?.[1] ?? 0);
  } else {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).locArgs?.[1] ?? 0) % 100;
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] < 10) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 199;
    }
    if (((s as any).locArgs?.[1] ?? 0) % 10 !== 9) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = ((((s as any).cheatVars ?? {})?.['fix_bi_set'] ?? 0) / 10) * 10 + (((s as any).locArgs?.[1] ?? 0) % 10);
    } else {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 100 + (((s as any).locArgs?.[1] ?? 0) / 10) * 10 + ((((s as any).cheatVars ?? {})?.['fix_bi_set'] ?? 0) % 10);
    }
  }
  qspCall(s, 'body', 'UpdateBodyImage');
  // TODO-QSP: end
  scene.build();
}

function enterUnlockImgSet(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] < 10) {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bodyimg'] = 0;
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 0;
  } else {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).locArgs?.[1] ?? 0) % 100;
    if (((s as any).locArgs?.[1] ?? 0) % 10 === 9) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 190 + ((((s as any).cheatVars ?? {})?.['fix_bi_set'] ?? 0) % 10);
    }
    if (((s as any).locArgs?.[1] ?? 0) / 10 === 9) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = ((((s as any).cheatVars ?? {})?.['fix_bi_set'] ?? 0) / 10) * 10 + 9;
    }
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] === 199) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bodyimg'] = 0;
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 0;
    }
  }
  qspCall(s, 'body', 'UpdateBodyImage');
  // TODO-QSP: end
  scene.build();
}

function enterGetBodyimgDescLink(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = '<a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \\u0027\\u0027 + func(\\u0027body_structure\\u0027, \\u0027body_img_from_class\\u0027, ARGS[1], 0) + \\u0027\\u0027; return s; }); return false;">' + qspFunc(s, 'body_structure', 'body_desc_from_class', ((s as any).locArgs?.[1] ?? 0)) + '</a>';
  } else {
    (s as any).result = '<i><a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \\u0027\\u0027 + func(\\u0027body_structure\\u0027, \\u0027body_img_from_class\\u0027, ARGS[1], 0) + \\u0027\\u0027; return s; }); return false;">' + qspFunc(s, 'body_structure', 'body_desc_from_class', ((s as any).locArgs?.[1] ?? 0)) + '</a></i>';
  }
  // TODO-QSP: end
  scene.build();
}

function enterCustomFolderDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).locArgs?.[1] ?? 0) + '_folder'] !== '') {
    if ((!((s as any).temp_cm_bi_flag ?? 0))) {
      scene.text('You may edit aspects of a custom image set by clicking on their folder names below.');
    }
    (s as any).cs_display_text = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_name'];
    if (((s as any).cs_display_text ?? 0) === '') {
      (s as any).cs_display_text = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_folder'];
    }
    if (((s as any).cheatVars ?? 0)?.['fix_bodyimg'] === 1  &&  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] === ((s as any).locArgs?.[1] ?? 0)) {
      // TODO-QSP: dynamic text: <i><b><a style="color:#00FF00" href="exec: gs 'cheatmenu_bisets', 'cs_main', <<A...
      scene.text(`<i><b><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_main\\u0027); return false;">${((s as any).cs_display_text || '')}</a></b></i>`);
    } else {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_bisets', 'cs_main', <<ARGS[1]>>"><b><<$cs_display_t...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_main\\u0027); return false;"><b>${((s as any).cs_display_text || '')}</b></a>`);
    }
    (s as any).temp_cm_bi_flag = ((s as any).temp_cm_bi_flag ?? 0) + (1);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCsMain(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Cheat menu</h1></center>');
  scene.text('<center><b>Body Image Set Display</b></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027main\\u0027); return false;"><b>Go Back</b></a>');
  if (((s as any).cheatVars ?? 0)?.['fix_bodyimg'] === 1  &&  ((s as any).locArgs?.[1] ?? 0) === ((s as any).cheatVars ?? 0)?.['fix_bi_set']) {
    scene.text('This is the currently locked set.');
    // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_bisets', 'unlock_img_set' & gs 'cheatmenu_bisets', ...
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027unlock_img_set\\u0027); return false;"><b>Clear the lock.</b></a>`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_bisets', 'lock_img_set', <<ARGS[1]>> & gs 'cheatmen...
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027lock_img_set\\u0027); return false;"><b>Use this set only.</b></a>`);
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: "
  // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_bisets', 'cs_export', <<ARGS[1]>>">Export image set...
  scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_export\\u0027); return false;">Export image set.</a>`);
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).locArgs?.[1] ?? 0) + '_advanced'] === 0) {
    // TODO-QSP: gs 'cheatmenu_bisets', 'cs_main_simple', ARGS[1]
  } else {
    // TODO-QSP: gs 'cheatmenu_bisets', 'cs_main_advanced', ARGS[1]
  }
  // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_bisets', 'cs_delete_set', <<ARGS[1]>>">Delete this ...
  scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_delete_set\\u0027); return false;">Delete this set.</a>`);
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', 'main');
  } },
    { label: 'Export set', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', 'cs_export', ((st as any).locArgs?.[1] ?? 0));
  } },
  ]);
  scene.build();
}

function enterCsExport(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_exp_set = ((s as any).locArgs?.[1] ?? 0);
  // TODO-QSP: $cheatmenu['table_start']
  // TODO-QSP: dynamic "
  // TODO-QSP: "
  // TODO-QSP: "
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cmbs_exp_set ?? 0) + '_name'] !== '') {
    // TODO-QSP: $temp_export_text += "$fix_bod_set['name'] = '<<$cheatVars['fix_biset_<<cmbs_exp_set>>_name']>>'
    // TODO-QSP: "
  }
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cmbs_exp_set ?? 0) + '_path'] !== '') {
    // TODO-QSP: $temp_export_text += "$fix_bod_set['path'] = '<<$cheatVars['fix_biset_<<cmbs_exp_set>>_path']>>'
    // TODO-QSP: "
  }
  (s as any).cmd_exp_i = 0;
  // TODO-QSP: :cs_export_simple_loop
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cmbs_exp_set ?? 0) + '_img_' + ((s as any).cmd_exp_i ?? 0)] !== '') {
    // TODO-QSP: $temp_export_text += "$fix_bod_set['img_<<cmd_exp_i>>'] = '<<$cheatVars['fix_biset_<<cmbs_exp_set>>_...
    // TODO-QSP: "
  }
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cmbs_exp_set ?? 0) + '_desc_' + ((s as any).cmd_exp_i ?? 0)] !== '') {
    // TODO-QSP: $temp_export_text += "$fix_bod_set['desc_<<cmd_exp_i>>'] = '<<$cheatVars['fix_biset_<<cmbs_exp_set>>...
    // TODO-QSP: "
  }
  (s as any).cmd_exp_i = ((s as any).cmd_exp_i ?? 0) + (1);
  if (((s as any).cmd_exp_i ?? 0) < 9) {
    // TODO-QSP: jump 'cs_export_simple_loop'
  }
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cmbs_exp_set ?? 0) + '_imgnums_0000'] > 0) {
    (s as any).cmd_exp_bmi = 0;
    // TODO-QSP: :cs_export_adv_bmi_loop
    (s as any).cmd_exp_stren = 0;
    // TODO-QSP: :cs_export_adv_str_loop
    (s as any).cmd_class_str = (String(10000 + ((s as any).cmd_exp_bmi ?? 0) * 100 + ((s as any).cmd_exp_stren ?? 0)).slice((2)-1));
    if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cmbs_exp_set ?? 0) + '_desc_' + ((s as any).cmd_class_str ?? 0)] !== '') {
      // TODO-QSP: $temp_export_text += "$fix_bod_set['desc_<<$cmd_class_str>>'] = '<<$cheatVars['fix_biset_<<cmbs_exp_...
      // TODO-QSP: "
    }
    if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cmbs_exp_set ?? 0) + '_path_' + ((s as any).cmd_class_str ?? 0)] !== '') {
      // TODO-QSP: $temp_export_text += "$fix_bod_set['path_<<$cmd_class_str>>'] = '<<$cheatVars['fix_biset_<<cmbs_exp_...
      // TODO-QSP: "
    }
    (s as any).cmd_imgnums = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_exp_set ?? 0)) + '_imgnums_' + String(((s as any).cmd_class_str ?? 0))];
    // TODO-QSP: $temp_export_text += "fix_bod_set['imgnums_<<$cmd_class_str>>'] = <<cmd_imgnums>>
    // TODO-QSP: "
    (s as any).cmd_exp_i = 0;
    // TODO-QSP: :cs_export_adv_inner_loop
    if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cmbs_exp_set ?? 0) + '_img_' + ((s as any).cmd_class_str ?? 0) + '_' + ((s as any).cmd_exp_i ?? 0)] !== '') {
      // TODO-QSP: $temp_export_text += "$fix_bod_set['img_<<$cmd_class_str>>_<<cmd_exp_i>>'] = '<<$cheatVars['fix_bise...
      // TODO-QSP: "
    }
    (s as any).cmd_exp_i = ((s as any).cmd_exp_i ?? 0) + (1);
    if (((s as any).cmd_exp_i ?? 0) < ((s as any).cmd_imgnums ?? 0)) {
      // TODO-QSP: jump 'cs_export_adv_inner_loop'
    }
    (s as any).cmd_exp_stren = ((s as any).cmd_exp_stren ?? 0) + (1);
    if (((s as any).cmd_exp_stren ?? 0) < 18) {
      // TODO-QSP: jump 'cs_export_adv_str_loop'
    }
    (s as any).cmd_exp_bmi = ((s as any).cmd_exp_bmi ?? 0) + (1);
    if (((s as any).cmd_exp_bmi ?? 0) < 9) {
      // TODO-QSP: jump 'cs_export_adv_bmi_loop'
    }
  }
  (s as any).temp_export_text = (String(((s as any).temp_export_text ?? 0)).split('  ').join(''));
  // TODO-QSP: dynamic text: <<$temp_export_text>>
  scene.text(`${((s as any).temp_export_text || '')}`);
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', 'cs_main', ((st as any).cmbs_exp_set ?? 0));
  } },
  ]);
  scene.build();
}

function enterCsMainSimple(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_set = ((s as any).locArgs?.[1] ?? 0);
  // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_bisets', 'cs_set_advanced', <<cmbs_set>>"><b>Switch...
  scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_set_advanced\\u0027); return false;"><b>Switch to "advanced"</b></a>`);
  scene.text('"Edit image" allows you to set the image file name (only use .jpg images)');
  scene.text('"Edit description" allows you to set the description of the image');
  // TODO-QSP: dynamic text: Folder: <<$cheatVars['fix_biset_<<cmbs_set>>_folder']>>    <a href="exec: gs 'ch...
  scene.text(`Folder: ${qspUntranslated(s, "cheatVars['fix_biset_<<cmbs_set", { location: "cheatmenu_bisets" })}_folder']>>    <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_change_folder\\u0027); return false;">Change Folder</a>`);
  scene.text('Descriptors: (Displayed as "You are:")');
  (s as any).temp_table = '<table cellpadding = "10">';
  // TODO-QSP: $temp_table +=  '<tr>'
  // TODO-QSP: $temp_table +=    '<th></th>'
  // TODO-QSP: $temp_table +=    '<th>Currently using</th>'
  // TODO-QSP: $temp_table +=    '<th></th>'
  // TODO-QSP: $temp_table +=    '<th></th>'
  // TODO-QSP: $temp_table +=  '</tr>'
  // TODO-QSP: $temp_table +=  func('cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', cmbs_set, 0)
  // TODO-QSP: $temp_table +=  func('cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', cmbs_set, 1)
  // TODO-QSP: $temp_table +=  func('cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', cmbs_set, 2)
  // TODO-QSP: $temp_table +=  func('cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', cmbs_set, 3)
  // TODO-QSP: $temp_table +=  func('cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', cmbs_set, 4)
  // TODO-QSP: $temp_table +=  func('cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', cmbs_set, 5)
  // TODO-QSP: $temp_table +=  func('cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', cmbs_set, 6)
  // TODO-QSP: $temp_table +=  func('cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', cmbs_set, 7)
  // TODO-QSP: $temp_table +=  func('cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', cmbs_set, 8)
  // TODO-QSP: $temp_table += '</table>'
  // TODO-QSP: dynamic text: <<$temp_table>>
  scene.text(`${((s as any).temp_table || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterGetCustomBodyimgDescLinkSimple(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_cmd_img_name = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_img_' + String(((s as any).temp_class ?? 0))];
  (s as any).temp_cmd_desc = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_desc_' + String(((s as any).temp_class ?? 0))];
  if (((s as any).temp_cmd_img_name ?? 0) === '') {
    (s as any).temp_cmd_image = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_img', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0));
    (s as any).temp_cmd_img_addon = '';
    (s as any).temp_cmd_img_addon2 = '';
  } else {
    (s as any).temp_base_folder = 'images/pc/body/shape/' + ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_folder'];
    (s as any).temp_cmd_image = ((s as any).temp_base_folder ?? 0) + '/' + ((s as any).temp_cmd_img_name ?? 0) + '.jpg';
    (s as any).temp_cmd_img_addon = ((s as any).temp_cmd_img_name ?? 0) + '.jpg';
  }
  if (((s as any).temp_cmd_desc ?? 0) === '') {
    (s as any).temp_cmd_desc = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_desc', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0));
  }
  (s as any).result = '<tr>';
  // TODO-QSP: $result +=    '<td><<$temp_cmd_desc>></td>'
  if (((s as any).temp_cmd_img_addon ?? 0) === '') {
    // TODO-QSP: $result +=    '<td><a href="exec: view ''<<$temp_cmd_image>>''">Default image</a></td>'
  } else {
    // TODO-QSP: $result +=    '<td><a href="exec: view ''<<$temp_cmd_image>>''"><<$temp_cmd_img_addon>></a> (<a href...
  }
  // TODO-QSP: $result +=    '<td><a href="exec: view ''<<$temp_cmd_image>>''"><<$temp_cmd_img_addon>></a></td>'
  // TODO-QSP: $result +=    '<td><a href="exec: gs ''cheatmenu_bisets'', ''cs_change_img'', <<temp_set>>, <<temp_c...
  // TODO-QSP: $result +=    '<td><a href="exec: gs ''cheatmenu_bisets'', ''cs_change_desc'', <<temp_set>>, <<temp_...
  // TODO-QSP: $result +=  '</tr>'
  // TODO-QSP: end
  scene.build();
}

function enterCsMainAdvanced(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_set = ((s as any).locArgs?.[1] ?? 0);
  // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_bisets', 'cs_set_simple', <<cmbs_set>>"><b>Switch t...
  scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_set_simple\\u0027); return false;"><b>Switch to "classic"</b></a>`);
  scene.text('"Edit image" allows you to set the image file name (only use .jpg images)');
  scene.text('"Edit description" allows you to set the description of the image');
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cmbs_set ?? 0) + '_name'] === '') {
    // TODO-QSP: dynamic text: Name: <<$cheatVars['fix_biset_<<cmbs_set>>_folder']>>    <a href="exec: gs 'chea...
    scene.text(`Name: ${qspUntranslated(s, "cheatVars['fix_biset_<<cmbs_set", { location: "cheatmenu_bisets" })}_folder']>>    <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_change_name\\u0027); return false;">Change Name</a>`);
  } else {
    // TODO-QSP: dynamic text: Name: <<$cheatVars['fix_biset_<<cmbs_set>>_name']>>    <a href="exec: gs 'cheatm...
    scene.text(`Name: ${qspUntranslated(s, "cheatVars['fix_biset_<<cmbs_set", { location: "cheatmenu_bisets" })}_name']>>    <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_change_name\\u0027); return false;">Change Name</a>`);
  }
  // TODO-QSP: dynamic text: Folder: <<$cheatVars['fix_biset_<<cmbs_set>>_folder']>>    <a href="exec: gs 'ch...
  scene.text(`Folder: ${qspUntranslated(s, "cheatVars['fix_biset_<<cmbs_set", { location: "cheatmenu_bisets" })}_folder']>>    <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_change_folder\\u0027); return false;">Change Folder</a>`);
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cmbs_set ?? 0) + '_path'] === '') {
    // TODO-QSP: dynamic text: Path: images/pc/body/shape    <a href="exec: gs 'cheatmenu_bisets', 'cs_change_p...
    scene.text(`Path: images/pc/body/shape    <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_change_path\\u0027); return false;">Set Path</a>`);
  } else {
    // TODO-QSP: dynamic text: Path: <<$cheatVars['fix_biset_<<cmbs_set>>_path']>>    <a href="exec: gs 'cheatm...
    scene.text(`Path: ${qspUntranslated(s, "cheatVars['fix_biset_<<cmbs_set", { location: "cheatmenu_bisets" })}_path']>>    <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_change_path\\u0027); return false;">Change Path</a>`);
  }
  (s as any).temp_table = '<table cellpadding="10">';
  // TODO-QSP: $temp_table +=  '<tr align="center">'
  // TODO-QSP: $temp_table +=    '<th></th>'
  // TODO-QSP: $temp_table +=    '<th></th>'
  // TODO-QSP: $temp_table +=    '<th colspan=9>BMI</th>'
  // TODO-QSP: $temp_table +=  '</tr><tr align="center">'
  // TODO-QSP: $temp_table +=    '<th></th>'
  // TODO-QSP: $temp_table +=    '<th></th>'
  // TODO-QSP: $temp_bmi_text[0] = '00-15'
  // TODO-QSP: $temp_bmi_text[1] = '16-18'
  // TODO-QSP: $temp_bmi_text[2] = '19-21'
  // TODO-QSP: $temp_bmi_text[3] = '22-24'
  // TODO-QSP: $temp_bmi_text[4] = '25-29'
  // TODO-QSP: $temp_bmi_text[5] = '30-34'
  // TODO-QSP: $temp_bmi_text[6] = '35-39'
  // TODO-QSP: $temp_bmi_text[7] = '40-44'
  // TODO-QSP: $temp_bmi_text[8] = '45-99'
  (s as any).cmd_adv_bmi_i = 0;
  // TODO-QSP: :cs_copy_class_header_loop
  // TODO-QSP: $temp_table +=  '<th style="white-space: nowrap"><<$temp_bmi_text[cmd_adv_bmi_i]>></th>'
  (s as any).cmd_adv_bmi_i = ((s as any).cmd_adv_bmi_i ?? 0) + (1);
  if (((s as any).cmd_adv_bmi_i ?? 0) < 9) {
    // TODO-QSP: jump 'cs_copy_class_header_loop'
  }
  // TODO-QSP: $temp_table +=  '</tr><tr align="center">'
  // TODO-QSP: $temp_table +=    '<th rowspan=18>Strength</th>'
  // TODO-QSP: $temp_str_text[0]  = '000-005'
  // TODO-QSP: $temp_str_text[1]  = '006-010'
  // TODO-QSP: $temp_str_text[2]  = '011-015'
  // TODO-QSP: $temp_str_text[3]  = '016-025'
  // TODO-QSP: $temp_str_text[4]  = '026-035'
  // TODO-QSP: $temp_str_text[5]  = '036-050'
  // TODO-QSP: $temp_str_text[6]  = '051-070'
  // TODO-QSP: $temp_str_text[7]  = '071-100'
  // TODO-QSP: $temp_str_text[8]  = '101-110'
  // TODO-QSP: $temp_str_text[9]  = '111-120'
  // TODO-QSP: $temp_str_text[10]  = '121-130'
  // TODO-QSP: $temp_str_text[11]  = '131-140'
  // TODO-QSP: $temp_str_text[12]  = '141-150'
  // TODO-QSP: $temp_str_text[13]  = '151-160'
  // TODO-QSP: $temp_str_text[14]  = '161-170'
  // TODO-QSP: $temp_str_text[15]  = '171-180'
  // TODO-QSP: $temp_str_text[16]  = '181-190'
  // TODO-QSP: $temp_str_text[17]  = '191-200'
  (s as any).cmd_adv_str_i = 0;
  // TODO-QSP: :cs_main_adv_str_loop
  if (((s as any).cmd_adv_str_i ?? 0) !== 0) {
    // TODO-QSP: $temp_table += '<tr align="center">'
  }
  // TODO-QSP: $temp_table +=    '<th style="white-space: nowrap"><<$temp_str_text[cmd_adv_str_i]>></th>'
  (s as any).cmd_adv_bmi_i = 0;
  // TODO-QSP: :cs_main_adv_bmi_loop
  (s as any).cmbs_class = ((s as any).cmd_adv_bmi_i ?? 0) * 100 + ((s as any).cmd_adv_str_i ?? 0);
  // TODO-QSP: $temp_table +=  '<td><a href="exec: gs ''cheatmenu_bisets'', ''cs_main_advanced2'', <<cmbs_set>>, <<...
  (s as any).cmd_adv_bmi_i = ((s as any).cmd_adv_bmi_i ?? 0) + (1);
  if (((s as any).cmd_adv_bmi_i ?? 0) < 9) {
    // TODO-QSP: jump 'cs_main_adv_bmi_loop'
  }
  // TODO-QSP: $temp_table +=  '</tr>'
  (s as any).cmd_adv_str_i = ((s as any).cmd_adv_str_i ?? 0) + (1);
  if (((s as any).cmd_adv_str_i ?? 0) < 18) {
    // TODO-QSP: jump 'cs_main_adv_str_loop'
  }
  // TODO-QSP: $temp_table += '</table>'
  // TODO-QSP: dynamic text: <<$temp_table>>
  scene.text(`${((s as any).temp_table || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterCsMainAdvanced2(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).cmbs_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).cmdbs_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  scene.text('<center><h1>Cheat menu</h1></center>');
  // TODO-QSP: dynamic text: <center><b>Body Image Set Display - class=<<$mid(1000 + ARGS[2], 2)>></b></cente...
  scene.text(`<center><b>Body Image Set Display - class=${(String(1000 + ((s as any).locArgs?.[2] ?? '')).slice((2)-1))}</b></center>`);
  // TODO-QSP: $cheatmenu['table_start']
  // TODO-QSP: dynamic "
  // TODO-QSP: dynamic text: <a href=""exec: gs 'cheatmenu_bisets', 'cs_main', <<cmbs_set>>""><b>Go Back</b><...
  scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_main\\u0027); return false;"><b>Go Back</b></a>`);
  // TODO-QSP: "
  scene.text('Click links to edit');
  (s as any).temp_cmd_desc = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_desc_' + String(((s as any).cmdbs_class_str ?? 0))];
  if (((s as any).temp_cmd_desc ?? 0) === '') {
    (s as any).temp_cmd_desc = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_desc', ((s as any).cmbs_set ?? 0), ((s as any).cmbs_class ?? 0));
    // TODO-QSP: dynamic text: You are: <a href="exec: gs 'cheatmenu_bisets', 'cs_change_desc_adv', <<cmbs_set>...
    scene.text(`You are: <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_change_desc_adv\\u0027); return false;">${((s as any).temp_cmd_desc || '')}</a>`);
  } else {
    // TODO-QSP: dynamic text: You are: <a href="exec: gs 'cheatmenu_bisets', 'cs_change_desc_adv', <<cmbs_set>...
    scene.text(`You are: <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_change_desc_adv\\u0027); return false;">${((s as any).temp_cmd_desc || '')}</a>    <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_set_default_desc_adv\\u0027); return false;">Use default description</a>`);
  }
  (s as any).temp_cmd_path = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_path'];
  if (((s as any).temp_cmd_path ?? 0) === '') {
    (s as any).temp_cmd_path = 'images/pc/body/shape';
  }
  // TODO-QSP: $temp_cmd_path += '/' + $cheatVars['fix_biset_<<cmbs_set>>_folder']
  (s as any).temp_cmd_subpath = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_path_' + String(((s as any).cmdbs_class_str ?? 0))];
  if (((s as any).temp_cmd_subpath ?? 0) === '') {
    (s as any).temp_cmd_subpath = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_subpath', ((s as any).cmbs_set ?? 0), ((s as any).cmbs_class ?? 0));
    (s as any).temp_cmd_subpath = 0;
  }
  // TODO-QSP: dynamic text: Path: <<$temp_cmd_path>>/<a href="exec: gs 'cheatmenu_bisets', 'cs_change_subpat...
  scene.text(`Path: ${((s as any).temp_cmd_path || '')}/<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_change_subpath\\u0027); return false;">${((s as any).temp_cmd_subpath || '')}</a>`);
  (s as any).temp_table = '<table width=80% align="center">';
  // TODO-QSP: $temp_table +=    '<tr>'
  // TODO-QSP: $temp_table +=      '<th>Currently using</th>'
  // TODO-QSP: $temp_table +=      '<th></th>'
  // TODO-QSP: $temp_table +=      '<th></th>'
  // TODO-QSP: $temp_table +=    '</tr>'
  (s as any).cmd_adv_i = 0;
  // TODO-QSP: :cs_main_adv2_loop
  // TODO-QSP: $temp_table += func('cheatmenu_bisets', 'get_custom_bodyimg_desc_link_advanced', cmbs_set, cmbs_clas...
  (s as any).cmd_adv_i = ((s as any).cmd_adv_i ?? 0) + (1);
  if (((s as any).cmd_adv_i ?? 0) < ((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).cmbs_set ?? 0) + '_imgnums_' + ((s as any).cmdbs_class_str ?? 0)]) {
    // TODO-QSP: jump 'cs_main_adv2_loop'
  }
  // TODO-QSP: $temp_table +=    '<tr>'
  // TODO-QSP: $temp_table +=      '<td></td>'
  // TODO-QSP: $temp_table +=      '<td></td>'
  // TODO-QSP: $temp_table +=      '<td><a href="exec: gs ''cheatmenu_bisets'', ''cs_add_img'', <<cmbs_set>>, <<cmb...
  // TODO-QSP: $temp_table +=    '</tr>'
  // TODO-QSP: $temp_table += '</table>'
  // TODO-QSP: dynamic text: <<$temp_table>>
  scene.text(`${((s as any).temp_table || '')}`);
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', 'cs_main', ((st as any).cmbs_set ?? 0));
  } },
    { label: 'Copy to other class', handler: (st: GameState) => {
    ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['set'] = ((s as any).cmbs_set ?? 0);
    ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['base'] = ((s as any).cmbs_class ?? 0);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCsCopyClassMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterGetCustomBodyimgDescLinkAdvanced(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_img_num = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_bs_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  (s as any).temp_cmd_img_name = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_img_' + String(((s as any).temp_bs_class_str ?? 0)) + '_' + String(((s as any).temp_img_num ?? 0))];
  (s as any).temp_cmd_desc = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_desc_' + String(((s as any).temp_bs_class_str ?? 0))];
  if (((s as any).temp_cmd_img_name ?? 0) === '') {
    (s as any).temp_cmd_image = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_img', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0));
    (s as any).temp_cmd_img_addon = '';
  } else {
    (s as any).temp_base_folder = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_path'];
    if (((s as any).temp_base_folder ?? 0) === '') {
      (s as any).temp_base_folder = 'images/pc/body/shape';
    }
    // TODO-QSP: $temp_base_folder += '/' + $cheatVars['fix_biset_<<temp_set>>_folder']
    if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).temp_set ?? 0) + '_path_' + ((s as any).temp_bs_class_str ?? 0)] !== '') {
      // TODO-QSP: $temp_base_folder += '/' + $cheatVars['fix_biset_<<temp_set>>_path_<<$temp_bs_class_str>>']
    }
    (s as any).temp_cmd_image = ((s as any).temp_base_folder ?? 0) + '/' + ((s as any).temp_cmd_img_name ?? 0) + '.jpg';
    (s as any).temp_cmd_img_addon = ((s as any).temp_cmd_img_name ?? 0) + '.jpg';
  }
  if (((s as any).temp_cmd_desc ?? 0) === '') {
    (s as any).temp_cmd_desc = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_desc', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0));
  }
  (s as any).result = '<tr>';
  if (((s as any).temp_cmd_img_addon ?? 0) === '') {
    // TODO-QSP: $result +=    '<td><a href="exec: view ''<<$temp_cmd_image>>''">Default image</a></td>'
  } else {
    // TODO-QSP: $result +=    '<td><a href="exec: view ''<<$temp_cmd_image>>''"><<$temp_cmd_img_addon>></a> (<a href...
  }
  // TODO-QSP: $result +=    '<td><a href="exec: gs ''cheatmenu_bisets'', ''cs_change_img_adv'', <<temp_set>>, <<te...
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).temp_set ?? 0) + '_imgnums_' + ((s as any).temp_class ?? 0)] === 1) {
    // TODO-QSP: $result +=  '<td></td>'
  } else {
    // TODO-QSP: $result +=  '<td><a href="exec: gs ''cheatmenu_bisets'', ''cs_remove_img'', <<temp_set>>, <<temp_cla...
  }
  // TODO-QSP: $result +=  '</tr>'
  // TODO-QSP: end
  scene.build();
}

function enterAddPregset(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_pregsets'] = ((s as any).cheatVars['fix_biset_' + String((s as any).temp_set || '') + '_pregsets'] ?? 0) + (1);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterGetPregsetLink(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).preg_set = ((s as any).locArgs?.[2] ?? 0);
  scene.text('<center><h1>Cheat menu</h1></center>');
  // TODO-QSP: dynamic text: <center><b>Pregnancy Image Set Display - Set = <<preg_set>></b></center>
  scene.text(`<center><b>Pregnancy Image Set Display - Set = ${((s as any).preg_set || '')}</b></center>`);
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_main\\u0027, String(window.__gameStore.getState().temp_set ?? \\u0027\\u0027)); return false;"><b>Go Back</b></a>');
  (s as any).temp_cmd_path = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_path'];
  if (((s as any).temp_cmd_path ?? 0) === '') {
    (s as any).temp_cmd_path = 'images/pc/body/shape';
  }
  // TODO-QSP: $temp_cmd_path += '/' + $cheatVars['fix_biset_<<cmbs_set>>_folder']
  (s as any).temp_cmd_subpath = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_pregpath_' + String(((s as any).preg_set ?? 0))];
  if (((s as any).temp_cmd_subpath ?? 0) === '') {
    (s as any).temp_cmd_subpath = 'preg/0';
  }
  // TODO-QSP: dynamic text: Path: <<$temp_cmd_path>>/<a href="exec: gs 'cheatmenu_bisets', 'cs_change_preg_s...
  scene.text(`Path: ${((s as any).temp_cmd_path || '')}/<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_change_preg_subpath\\u0027); return false;">${((s as any).temp_cmd_subpath || '')}</a>`);
  (s as any).temp_table = '<table width=80% align="center">';
  // TODO-QSP: $temp_table +=    '<tr>'
  // TODO-QSP: $temp_table +=      '<th>Currently using</th>'
  // TODO-QSP: $temp_table +=      '<th></th>'
  // TODO-QSP: $temp_table +=      '<th></th>'
  // TODO-QSP: $temp_table +=    '</tr>'
  (s as any).cmd_preg_img = 0;
  // TODO-QSP: :pregset_img_loop
  // TODO-QSP: $temp_table += func('cheatmenu_bisets', 'get_custom_pregimg', temp_set, preg_set, cmd_preg_img)
  (s as any).cmd_preg_img = ((s as any).cmd_preg_img ?? 0) + (1);
  if (((s as any).cmd_preg_img ?? 0) < 9) {
    // TODO-QSP: jump 'pregset_img_loop'
  }
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', 'cs_main', ((st as any).temp_set ?? 0));
  } },
  ]);
  scene.build();
}

function enterGetCustomPregimg(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).preg_set = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_img = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_cmd_img_name = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_pregimg_' + String(((s as any).preg_set ?? 0)) + '_' + String(((s as any).temp_img ?? 0))];
  (s as any).temp_cmd_desc = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_desc_' + String(((s as any).preg_set ?? 0))];
  if (((s as any).temp_cmd_img_name ?? 0) === '') {
    (s as any).temp_cmd_image = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_img', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0));
    (s as any).temp_cmd_img_addon = '';
  } else {
    (s as any).temp_base_folder = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_path'];
    if (((s as any).temp_base_folder ?? 0) === '') {
      (s as any).temp_base_folder = 'images/pc/body/shape';
    }
    // TODO-QSP: $temp_base_folder += '/' + $cheatVars['fix_biset_<<temp_set>>_folder']
    if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).temp_set ?? 0) + '_path_' + ((s as any).temp_bs_class_str ?? 0)] !== '') {
      // TODO-QSP: $temp_base_folder += '/' + $cheatVars['fix_biset_<<temp_set>>_path_<<$temp_bs_class_str>>']
    }
    (s as any).temp_cmd_image = ((s as any).temp_base_folder ?? 0) + '/' + ((s as any).temp_cmd_img_name ?? 0) + '.jpg';
    (s as any).temp_cmd_img_addon = ((s as any).temp_cmd_img_name ?? 0) + '.jpg';
  }
  // TODO-QSP: end
  scene.build();
}

function enterCsCopyClassMenu(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_table = '<table cellpadding="10">';
  // TODO-QSP: $temp_table +=  '<tr align="center">'
  // TODO-QSP: $temp_table +=    '<th></th>'
  // TODO-QSP: $temp_table +=    '<th></th>'
  // TODO-QSP: $temp_table +=    '<th colspan=9>BMI</th>'
  // TODO-QSP: $temp_table +=  '</tr><tr align="center">'
  // TODO-QSP: $temp_table +=    '<th></th>'
  // TODO-QSP: $temp_table +=    '<th></th>'
  // TODO-QSP: $temp_bmi_text[0] = '00-15'
  // TODO-QSP: $temp_bmi_text[1] = '16-18'
  // TODO-QSP: $temp_bmi_text[2] = '19-21'
  // TODO-QSP: $temp_bmi_text[3] = '22-24'
  // TODO-QSP: $temp_bmi_text[4] = '25-29'
  // TODO-QSP: $temp_bmi_text[5] = '30-34'
  // TODO-QSP: $temp_bmi_text[6] = '35-39'
  // TODO-QSP: $temp_bmi_text[7] = '40-44'
  // TODO-QSP: $temp_bmi_text[8] = '45-99'
  (s as any).cmd_adv_bmi_i = 0;
  // TODO-QSP: :cs_copy_class_header_loop2
  // TODO-QSP: $temp_table +=  '<th style="white-space: nowrap"><b><a href="exec: gs ''cheatmenu_bisets'', ''cs_cop...
  (s as any).cmd_adv_bmi_i = ((s as any).cmd_adv_bmi_i ?? 0) + (1);
  if (((s as any).cmd_adv_bmi_i ?? 0) < 9) {
    // TODO-QSP: jump 'cs_copy_class_header_loop2'
  }
  // TODO-QSP: $temp_table +=  '</tr><tr align="center">'
  // TODO-QSP: $temp_table +=    '<th rowspan=18>Strength</th>'
  // TODO-QSP: $temp_str_text[0]  = '000-005'
  // TODO-QSP: $temp_str_text[1]  = '006-010'
  // TODO-QSP: $temp_str_text[2]  = '011-015'
  // TODO-QSP: $temp_str_text[3]  = '016-025'
  // TODO-QSP: $temp_str_text[4]  = '026-035'
  // TODO-QSP: $temp_str_text[5]  = '036-050'
  // TODO-QSP: $temp_str_text[6]  = '051-070'
  // TODO-QSP: $temp_str_text[7]  = '071-100'
  // TODO-QSP: $temp_str_text[8]  = '101-110'
  // TODO-QSP: $temp_str_text[9]  = '111-120'
  // TODO-QSP: $temp_str_text[10]  = '121-130'
  // TODO-QSP: $temp_str_text[11]  = '131-140'
  // TODO-QSP: $temp_str_text[12]  = '141-150'
  // TODO-QSP: $temp_str_text[13]  = '151-160'
  // TODO-QSP: $temp_str_text[14]  = '161-170'
  // TODO-QSP: $temp_str_text[15]  = '171-180'
  // TODO-QSP: $temp_str_text[16]  = '181-190'
  // TODO-QSP: $temp_str_text[17]  = '191-200'
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['counter'] = 0;
  (s as any).cmd_adv_str_i = 0;
  // TODO-QSP: :cs_copy_class_str_loop
  if (((s as any).cmd_adv_str_i ?? 0) !== 0) {
    // TODO-QSP: $temp_table += '<tr align="center">'
  }
  // TODO-QSP: $temp_table +=    '<th style="white-space: nowrap"><b><a href="exec: gs ''cheatmenu_bisets'', ''cs_c...
  (s as any).cmd_adv_bmi_i = 0;
  // TODO-QSP: :cs_copy_class_bmi_loop
  (s as any).cmbs_class = ((s as any).cmd_adv_bmi_i ?? 0) * 100 + ((s as any).cmd_adv_str_i ?? 0);
  (s as any).cmbs_class_str = (String(10000 + ((s as any).cmbs_class ?? 0)).slice((2)-1));
  if (((s as any).cmd_copy_class ?? 0)?.['base'] === ((s as any).cmbs_class ?? 0)) {
    // TODO-QSP: $temp_table +=  '<td><<$cmbs_class_str>></td>'
  } else {
    if (((s as any).cmd_copy_class ?? 0)?.[String((s as any).cmbs_class_str ?? 0)] === 1) {
      ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['counter'] = ((s as any).cmd_copy_class['counter'] ?? 0) + (1);
      // TODO-QSP: $temp_table +=  '<td><i><a style="color:#00FF00" href="exec: cmd_copy_class[''<<$cmbs_class_str>>'']...
    } else {
      // TODO-QSP: $temp_table +=  '<td><a href="exec: cmd_copy_class[''<<$cmbs_class_str>>''] = 1 & gs ''cheatmenu_bis...
    }
  }
  (s as any).cmd_adv_bmi_i = ((s as any).cmd_adv_bmi_i ?? 0) + (1);
  if (((s as any).cmd_adv_bmi_i ?? 0) < 9) {
    // TODO-QSP: jump 'cs_copy_class_bmi_loop'
  }
  // TODO-QSP: $temp_table +=  '</tr>'
  (s as any).cmd_adv_str_i = ((s as any).cmd_adv_str_i ?? 0) + (1);
  if (((s as any).cmd_adv_str_i ?? 0) < 18) {
    // TODO-QSP: jump 'cs_copy_class_str_loop'
  }
  // TODO-QSP: $temp_table += '</table>'
  // TODO-QSP: dynamic text: <<$temp_table>>
  scene.text(`${((s as any).temp_table || '')}`);
  if (((s as any).cmd_copy_class ?? 0)?.['counter'] > 0) {
    scene.actions([
      { label: 'Reset', handler: (st: GameState) => {
    (s as any).temp_set = ((s as any).cmd_copy_class ?? 0)?.['set'];
    (s as any).temp_base = ((s as any).cmd_copy_class ?? 0)?.['base'];
    ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['set'] = ((s as any).temp_set ?? 0);
    ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['base'] = ((s as any).temp_base ?? 0);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCsCopyClassMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Overwrite', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCsOverwriteClassesBase(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Cancel', handler: (st: GameState) => {
    // TODO-QSP: gs 'cheatmenu_bisets', 'cs_main_advanced2', cmd_copy_class['set'], cmd_copy_class['base']
  } },
  ]);
  scene.build();
}

function enterCsCopyClassBmi(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['bmi'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['counter'] = 0;
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['stren'] = 0;
  // TODO-QSP: :cs_copy_class_stren_loop2
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class'] = (((s as any).temp_copyclass ?? {})?.['bmi'] ?? 0) * 100 + (((s as any).temp_copyclass ?? {})?.['stren'] ?? 0);
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class_str'] = (String(10000 + (((s as any).temp_copyclass ?? {})?.['class'] ?? 0)).slice((2)-1));
  if (((s as any).cmd_copy_class ?? 0)[((s as any).temp_copyclass ?? 0)?.['class_str']] === 1  ||  ((s as any).cmd_copy_class ?? 0)?.['base'] === ((s as any).temp_copyclass ?? 0)?.['class']) {
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['counter'] = ((s as any).temp_copyclass['counter'] ?? 0) + (1);
  }
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['stren'] = ((s as any).temp_copyclass['stren'] ?? 0) + (1);
  if (((s as any).temp_copyclass ?? 0)?.['stren'] < 18) {
    // TODO-QSP: jump 'cs_copy_class_stren_loop2'
  }
  if (((s as any).temp_copyclass ?? 0)?.['counter'] < 18) {
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['result'] = 1;
  } else {
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['result'] = 0;
  }
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['stren'] = 0;
  // TODO-QSP: :cs_copy_class_stren_loop3
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class'] = (((s as any).temp_copyclass ?? {})?.['bmi'] ?? 0) * 100 + (((s as any).temp_copyclass ?? {})?.['stren'] ?? 0);
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class_str'] = (String(10000 + (((s as any).temp_copyclass ?? {})?.['class'] ?? 0)).slice((2)-1));
  if (((s as any).cmd_copy_class ?? 0)?.['base'] !== ((s as any).temp_copyclass ?? 0)?.['class']) {
    // TODO-QSP: cmd_copy_class[$temp_copyclass['class_str']] = temp_copyclass['result']
  }
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['stren'] = ((s as any).temp_copyclass['stren'] ?? 0) + (1);
  if (((s as any).temp_copyclass ?? 0)?.['stren'] < 18) {
    // TODO-QSP: jump 'cs_copy_class_stren_loop3'
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCsCopyClassMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCsCopyClassStren(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['stren'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['counter'] = 0;
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['bmi'] = 0;
  // TODO-QSP: :cs_copy_class_bmi_loop2
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class'] = (((s as any).temp_copyclass ?? {})?.['bmi'] ?? 0) * 100 + (((s as any).temp_copyclass ?? {})?.['stren'] ?? 0);
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class_str'] = (String(10000 + (((s as any).temp_copyclass ?? {})?.['class'] ?? 0)).slice((2)-1));
  if (((s as any).cmd_copy_class ?? 0)[((s as any).temp_copyclass ?? 0)?.['class_str']] === 1  ||  ((s as any).cmd_copy_class ?? 0)?.['base'] === ((s as any).temp_copyclass ?? 0)?.['class']) {
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['counter'] = ((s as any).temp_copyclass['counter'] ?? 0) + (1);
  }
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['bmi'] = ((s as any).temp_copyclass['bmi'] ?? 0) + (1);
  if (((s as any).temp_copyclass ?? 0)?.['bmi'] < 9) {
    // TODO-QSP: jump 'cs_copy_class_bmi_loop2'
  }
  if (((s as any).temp_copyclass ?? 0)?.['counter'] < 9) {
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['result'] = 1;
  } else {
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['result'] = 0;
  }
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['bmi'] = 0;
  // TODO-QSP: :cs_copy_class_bmi_loop3
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class'] = (((s as any).temp_copyclass ?? {})?.['bmi'] ?? 0) * 100 + (((s as any).temp_copyclass ?? {})?.['stren'] ?? 0);
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class_str'] = (String(10000 + (((s as any).temp_copyclass ?? {})?.['class'] ?? 0)).slice((2)-1));
  if (((s as any).cmd_copy_class ?? 0)?.['base'] !== ((s as any).temp_copyclass ?? 0)?.['class']) {
    // TODO-QSP: cmd_copy_class[$temp_copyclass['class_str']] = temp_copyclass['result']
  }
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['bmi'] = ((s as any).temp_copyclass['bmi'] ?? 0) + (1);
  if (((s as any).temp_copyclass ?? 0)?.['bmi'] < 9) {
    // TODO-QSP: jump 'cs_copy_class_bmi_loop3'
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCsCopyClassMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCsOverwriteClassesBase(s: GameState, scene: SceneBuilder): void {
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['base_str'] = (String(10000 + (((s as any).cmd_copy_class ?? {})?.['base'] ?? 0)).slice((2)-1));
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['string'] = 'fix_biset_' + ((s as any).cmd_copy_class ?? 0)?.['set'] + '_';
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['path'] = ((s as any).cheatVars ?? 0)?.[((s as any).cmd_copy_class ?? 0)?.['string'] + 'path_' + ((s as any).cmd_copy_class ?? 0)?.['base_str'] + ''];
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['desc'] = ((s as any).cheatVars ?? 0)?.[((s as any).cmd_copy_class ?? 0)?.['string'] + 'desc_' + ((s as any).cmd_copy_class ?? 0)?.['base_str'] + ''];
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['imgnums'] = ((s as any).cheatVars ?? 0)?.[((s as any).cmd_copy_class ?? 0)?.['string'] + 'imgnums_' + ((s as any).cmd_copy_class ?? 0)?.['base_str'] + ''];
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['i'] = 0;
  // TODO-QSP: :cs_overwrite_loop1
  // TODO-QSP: $cmd_copy_class['img_<<cmd_copy_class[''i'']>>'] = $cheatVars[$cmd_copy_class['string'] + 'img_<<$cm...
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['i'] = ((s as any).cmd_copy_class['i'] ?? 0) + (1);
  if (((s as any).cmd_copy_class ?? 0)?.['i'] < ((s as any).cmd_copy_class ?? 0)?.['imgnums']) {
    // TODO-QSP: jump 'cs_overwrite_loop1'
  }
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['str_i'] = 0;
  // TODO-QSP: :cs_overwrite_str_loop
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['bmi_i'] = 0;
  // TODO-QSP: :cs_overwrite_bmi_loop
  (s as any).cmbs_class = (((s as any).cmd_copy_class ?? {})?.['bmi_i'] ?? 0) * 100 + (((s as any).cmd_copy_class ?? {})?.['str_i'] ?? 0);
  (s as any).cmbs_class_str = (String(10000 + ((s as any).cmbs_class ?? 0)).slice((2)-1));
  if (((s as any).cmd_copy_class ?? 0)?.['base'] !== ((s as any).cmbs_class ?? 0)  &&  ((s as any).cmd_copy_class ?? 0)?.[String((s as any).cmbs_class_str ?? 0)] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).cmbs_class_str ?? 0)]; enterCsOverwriteClass(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['bmi_i'] = ((s as any).cmd_copy_class['bmi_i'] ?? 0) + (1);
  if (((s as any).cmd_copy_class ?? 0)?.['bmi_i'] < 9) {
    // TODO-QSP: jump 'cs_overwrite_bmi_loop'
  }
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['str_i'] = ((s as any).cmd_copy_class['str_i'] ?? 0) + (1);
  if (((s as any).cmd_copy_class ?? 0)?.['str_i'] < 18) {
    // TODO-QSP: jump 'cs_overwrite_str_loop'
  }
  // TODO-QSP: gs 'cheatmenu_bisets', 'cs_main', cmd_copy_class['set']
  // TODO-QSP: end
  scene.build();
}

function enterCsOverwriteClass(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $cheatVars[$cmd_copy_class['string'] + 'path_<<$ARGS[1]>>'] = $cmd_copy_class['path']
  // TODO-QSP: $cheatVars[$cmd_copy_class['string'] + 'desc_<<$ARGS[1]>>'] = $cmd_copy_class['desc']
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['i'] = 0;
  // TODO-QSP: :cs_overwrite_loop2
  // TODO-QSP: $cheatVars[$cmd_copy_class['string'] + 'img_<<$ARGS[1]>>_<<cmd_copy_class[''i'']>>'] = $cmd_copy_cla...
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['i'] = ((s as any).cmd_copy_class['i'] ?? 0) + (1);
  if (((s as any).cmd_copy_class ?? 0)?.['i'] < ((s as any).cmd_copy_class ?? 0)?.['imgnums']) {
    // TODO-QSP: jump 'cs_overwrite_loop2'
  }
  if (((s as any).cheatVars ?? 0)[((s as any).cmd_copy_class ?? 0)?.['string'] + 'imgnums_' + ((s as any).locArgs?.[1] ?? 0)] > ((s as any).cmd_copy_class ?? 0)?.['imgnums']) {
    ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['i'] = ((s as any).cmd_copy_class ?? 0)?.['imgnums'];
    // TODO-QSP: :cs_overwrite_loop3
    // TODO-QSP: gs 'array', 'remove_element', '$cheatVars', $cmd_copy_class['string'] + 'img_<<$ARGS[1]>>_<<cmd_copy...
    ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['i'] = ((s as any).cmd_copy_class['i'] ?? 0) + (1);
    if (((s as any).cmd_copy_class ?? 0)?.['i'] < ((s as any).cheatVars ?? 0)[((s as any).cmd_copy_class ?? 0)?.['string'] + 'imgnums_' + ((s as any).locArgs?.[1] ?? 0)]) {
      // TODO-QSP: jump 'cs_overwrite_loop3'
    }
  }
  // TODO-QSP: cheatVars[$cmd_copy_class['string'] + 'imgnums_<<$ARGS[1]>>'] = cmd_copy_class['imgnums']
  // TODO-QSP: end
  scene.build();
}

function enterAddSet(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Body Image Set Addition</b></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: killvar \\u0027klsetask\\u0027 */ return s; }); window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027main\\u0027); return false;"><b>Go Back</b></a>');
  scene.text('This is where you can add a new image set to a game.');
  scene.text('To add an image set, create a folder in images/pc/body/shape/ and name it anything you want (shorter will be easier to remember). Then put in it any images you want. Once you have done that, click the link below and put in your folder name to add that set.');
  scene.text('Note: This will only be for this instance/save of the game and you will have to redo the click the link step if you want to add the same folder to a different instance/save.');
  (s as any).cs_new_index = qspFunc(s, 'cheatmenu_bisets', 'get_new_set_index');
  if (((s as any).cs_new_index ?? 0) >= 0) {
    // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_bisets', 'add_set2', <<cs_new_index>>">Add Image Se...
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027add_set2\\u0027); return false;">Add Image Set</a>`);
  } else {
    scene.text('You cannot add more sets.');
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027main\\u0027); return false;"><b>Go Back</b></a>');
  }
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    // TODO-QSP: killvar 'klsetask'
    qspCall(st, 'cheatmenu_bisets', 'main');
  } },
  ]);
  scene.build();
}

function enterAddSet2(s: GameState, scene: SceneBuilder): void {
  (s as any).cmd_temp_input = 0;
  if (((s as any).cmd_temp_input ?? 0) === '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAddSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if ((String(((s as any).cmd_temp_input ?? 0)).slice(((String(((s as any).cmd_temp_input ?? 0)).length))-1)) === '/'  ||  (String(((s as any).cmd_temp_input ?? 0)).slice(((String(((s as any).cmd_temp_input ?? 0)).length))-1)) === '\\') {
      (s as any).cmd_temp_input = (String(((s as any).cmd_temp_input ?? 0)).slice((1)-1, ((1)-1)+((String(((s as any).cmd_temp_input ?? 0)).length)-1)));
    }
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).ARGS[1] || '') + '_folder'] = ((s as any).cmd_temp_input ?? 0);
    // TODO-QSP: gs 'cheatmenu_bisets', 'cs_main', ARGS[1]
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetNewSetIndex(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set_index = 0;
  // TODO-QSP: :cs_index_find_loop
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).temp_set_index ?? 0) + '_folder'] !== '') {
    (s as any).temp_set_index = ((s as any).temp_set_index ?? 0) + (1);
    if (((s as any).temp_set_index ?? 0) <= 9) {
      // TODO-QSP: jump 'cs_index_find_loop'
    } else {
      (s as any).result = (-1);
    }
  } else {
    (s as any).result = ((s as any).temp_set_index ?? 0);
  }
  // TODO-QSP: end
  scene.build();
}

function enterImportSet(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Body Image Set Import</b></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: killvar \\u0027klsetask\\u0027 */ return s; }); window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027main\\u0027); return false;"><b>Go Back</b></a>');
  scene.text('This is where you can import a new image set to a game.');
  (s as any).cs_new_index = qspFunc(s, 'cheatmenu_bisets', 'get_new_set_index');
  if (((s as any).cs_new_index ?? 0) >= 0) {
    if (Object.keys((s as any).mod_name ?? {}).length > 0) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_bisets', 'import_set_mod', <<cs_new_index>>">Import...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027import_set_mod\\u0027); return false;">Import from a Mod</a>`);
    }
    // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_bisets', 'import_set_direct', <<cs_new_index>>">Imp...
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027import_set_direct\\u0027); return false;">Import directly</a>`);
  } else {
    scene.text('You cannot add more sets.');
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027main\\u0027); return false;"><b>Go Back</b></a>');
  }
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    // TODO-QSP: killvar 'klsetask'
    qspCall(st, 'cheatmenu_bisets', 'main');
  } },
  ]);
  scene.build();
}

function enterImportSetDirect(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_import_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_import_text = qspUntranslated(s, "input('Copy the exported text here:')", { location: "cheatmenu_bisets" });
  if (((s as any).temp_import_text ?? 0) !== '') {
    (s as any).temp_conform_text = ((s as any).input ?? 0)('Do you want to continue? (y/n)');
    if ((String(qspUntranslated(s, "lcase(temp_conform_text)", { location: "cheatmenu_bisets" })).slice((1)-1, ((1)-1)+(1))) === 'y') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).cmbs_import_set ?? 0)]; enterImportCustomSet(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterImportSetMod(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_import_set = ((s as any).locArgs?.[1] ?? 0);
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027main\\u0027); return false;">Go Back</a>');
  scene.text('Select a mod from which you want to try and import an image set.');
  (s as any).mod_i = 0;
  // TODO-QSP: :mod_exec
  if (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] !== '') {
    // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_bisets', 'import_set_mod2', <<cmbs_import_set>>, '<...
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027import_set_mod2\\u0027); return false;">${((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] ?? ''}</a>`);
  }
  (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
  if (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length) {
    // TODO-QSP: jump 'mod_exec'
  }
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  scene.build();
}

function enterImportSetMod2(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_import_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).cmbs_mod_name = ((s as any).locArgs?.[2] ?? 0);
  // TODO-QSP: $cheatmenu['table_start']
  qspCall(s, 'mod_' + ((s as any).cmbs_mod_name ?? 0) + '', 'import_body_set');
  if (Object.keys((s as any).fix_bod_set ?? {}).length > 0) {
    scene.text('Image set found.');
    // TODO-QSP: dynamic text: Folder: <<$fix_bod_set['Folder']>>
    scene.text(`Folder: ${((s as any).fix_bod_set ?? 0)?.['Folder'] ?? ''}`);
    if (((s as any).fix_bod_set ?? 0)?.['Name'] !== '') {
      // TODO-QSP: dynamic text: Name: <<$fix_bod_set['Name']>>
      scene.text(`Name: ${((s as any).fix_bod_set ?? 0)?.['Name'] ?? ''}`);
    }
    if (((s as any).fix_bod_set ?? 0)?.['Path'] !== '') {
      // TODO-QSP: dynamic text: Path: <<$fix_bod_set['Path']>>
      scene.text(`Path: ${((s as any).fix_bod_set ?? 0)?.['Path'] ?? ''}`);
    }
    (s as any).temp_conform_text = ((s as any).input ?? 0)('Do you want to continue? (y/n)');
    if ((String(qspUntranslated(s, "lcase(temp_conform_text)", { location: "cheatmenu_bisets" })).slice((1)-1, ((1)-1)+(1))) === 'y') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).cmbs_import_set ?? 0)]; enterImportCustomSet(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: $cheatmenu['table_end']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterImportCustomSet(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_start_str = 'fix_biset_' + ((s as any).locArgs?.[1] ?? 0) + '_';
  // TODO-QSP: cheatVars[$temp_start_str + 'advanced'] = fix_bod_set['advanced']
  // TODO-QSP: $cheatVars[$temp_start_str + 'folder'] = $fix_bod_set['folder']
  // TODO-QSP: $cheatVars[$temp_start_str + 'path'] = $fix_bod_set['path']
  // TODO-QSP: $cheatVars[$temp_start_str + 'name'] = $fix_bod_set['name']
  (s as any).cmd_imp_i = 0;
  // TODO-QSP: :cs_import_simple_loop
  // TODO-QSP: $cheatVars[$temp_start_str + 'img_<<cmd_imp_i>>'] = $fix_bod_set['img_<<cmd_imp_i>>']
  // TODO-QSP: $cheatVars[$temp_start_str + 'desc_<<cmd_imp_i>>'] = $fix_bod_set['desc_<<cmd_imp_i>>']
  (s as any).cmd_imp_i = ((s as any).cmd_imp_i ?? 0) + (1);
  if (((s as any).cmd_imp_i ?? 0) < 9) {
    // TODO-QSP: jump 'cs_import_simple_loop'
  }
  if (((s as any).fix_bod_set ?? 0)?.['imgnums_0000'] > 0) {
    (s as any).cmd_exp_bmi = 0;
    // TODO-QSP: :cs_import_adv_bmi_loop
    (s as any).cmd_exp_stren = 0;
    // TODO-QSP: :cs_import_adv_str_loop
    (s as any).cmd_class_str = (String(10000 + ((s as any).cmd_exp_bmi ?? 0) * 100 + ((s as any).cmd_exp_stren ?? 0)).slice((2)-1));
    // TODO-QSP: cheatVars[$temp_start_str + 'desc_<<$cmd_class_str>>'] = fix_bod_set['desc_<<$cmd_class_str>>']
    // TODO-QSP: $cheatVars[$temp_start_str + 'path_<<$cmd_class_str>>'] = $fix_bod_set['path_<<$cmd_class_str>>']
    (s as any).cmd_imgnums = ((s as any).fix_bod_set ?? 0)?.['imgnums_' + String(((s as any).cmd_class_str ?? 0))];
    // TODO-QSP: cheatVars[$temp_start_str + 'imgnums_<<$cmd_class_str>>'] = cmd_imgnums
    (s as any).cmd_exp_i = 0;
    // TODO-QSP: :cs_import_adv_inner_loop
    // TODO-QSP: $cheatVars[$temp_start_str + 'img_<<$cmd_class_str>>_<<cmd_exp_i>>'] = $fix_bod_set['img_<<$cmd_clas...
    (s as any).cmd_exp_i = ((s as any).cmd_exp_i ?? 0) + (1);
    if (((s as any).cmd_exp_i ?? 0) < ((s as any).cmd_imgnums ?? 0)) {
      // TODO-QSP: jump 'cs_import_adv_inner_loop'
    }
    (s as any).cmd_exp_stren = ((s as any).cmd_exp_stren ?? 0) + (1);
    if (((s as any).cmd_exp_stren ?? 0) < 18) {
      // TODO-QSP: jump 'cs_import_adv_str_loop'
    }
    (s as any).cmd_exp_bmi = ((s as any).cmd_exp_bmi ?? 0) + (1);
    if (((s as any).cmd_exp_bmi ?? 0) < 9) {
      // TODO-QSP: jump 'cs_import_adv_bmi_loop'
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCsSetSimple(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).ARGS[1] || '') + '_advanced'] = 0;
  // TODO-QSP: gs 'cheatmenu_bisets', 'cs_main', ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterCsSetAdvanced(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).locArgs?.[1] ?? 0) + '_imgnums_0000'] === 0) {
    // TODO-QSP: gs 'cheatmenu_bisets', 'cs_init_advanced', ARGS[1]
  }
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).ARGS[1] || '') + '_advanced'] = 1;
  // TODO-QSP: gs 'cheatmenu_bisets', 'cs_main', ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterCsInitAdvanced(s: GameState, scene: SceneBuilder): void {
  (s as any).cmd_adv_bmi_i = 0;
  // TODO-QSP: :adv_init_bmi_loop
  (s as any).cmd_adv_str_i = 0;
  // TODO-QSP: :adv_init_str_loop
  (s as any).cmd_bs_class = ((s as any).cmd_adv_bmi_i ?? 0) * 100 + ((s as any).cmd_adv_str_i ?? 0);
  (s as any).cmd_bs_class_str = (String(10000 + ((s as any).cmd_bs_class ?? 0)).slice((2)-1));
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).ARGS[1] || '') + '_imgnums_' + String((s as any).$cmd_bs_class_str || '') + ''] = 1;
  (s as any).cmd_adv_str_i = ((s as any).cmd_adv_str_i ?? 0) + (1);
  if (((s as any).cmd_adv_str_i ?? 0) < 18) {
    // TODO-QSP: jump 'adv_init_str_loop'
  }
  (s as any).cmd_adv_bmi_i = ((s as any).cmd_adv_bmi_i ?? 0) + (1);
  if (((s as any).cmd_adv_bmi_i ?? 0) < 9) {
    // TODO-QSP: jump 'adv_init_bmi_loop'
  }
  // TODO-QSP: end
  scene.build();
}

function enterCsChangeName(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).cmd_temp_input = 0;
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_name'] = ((s as any).cmd_temp_input ?? 0);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCsChangeFolder(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).cmd_temp_input = 0;
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_folder'] = ((s as any).cmd_temp_input ?? 0);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCsChangePath(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).cmd_temp_input = 0;
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_path'] = ((s as any).cmd_temp_input ?? 0);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCsChangeDesc(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).cmd_temp_input = 0;
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_desc_' + String((s as any).temp_class || '') + ''] = ((s as any).cmd_temp_input ?? 0);
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] === ((s as any).temp_set ?? 0)) {
      qspCall(s, 'body', 'UpdateBodyImage');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCsChangeDescAdv(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  (s as any).cmd_temp_input = 0;
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_desc_' + String((s as any).$temp_class_str || '') + ''] = ((s as any).cmd_temp_input ?? 0);
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] === ((s as any).temp_set ?? 0)) {
      qspCall(s, 'body', 'UpdateBodyImage');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0)]; enterCsMainAdvanced2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCsChangeSubpath(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  (s as any).cmd_temp_input = 0;
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_path_' + String((s as any).$temp_class_str || '') + ''] = ((s as any).cmd_temp_input ?? 0);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0)]; enterCsMainAdvanced2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCsChangePregSubpath(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).preg_set = ((s as any).locArgs?.[2] ?? 0);
  (s as any).cmd_temp_input = 0;
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_pregpath_' + String((s as any).preg_set || '') + ''] = ((s as any).cmd_temp_input ?? 0);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0), ((s as any).preg_set ?? 0)]; enterGetPregsetLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCsChangeImg(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).cmd_temp_input = 0;
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    if ((String(((s as any).cmd_temp_input ?? 0)).slice(((String(((s as any).cmd_temp_input ?? 0)).length)-3)-1)) === '.jpg') {
      (s as any).cmd_temp_input = (String(((s as any).cmd_temp_input ?? 0)).slice((1)-1, ((1)-1)+((String(((s as any).cmd_temp_input ?? 0)).length)-4)));
    }
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_img_' + String((s as any).temp_class || '') + ''] = ((s as any).cmd_temp_input ?? 0);
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] === ((s as any).temp_set ?? 0)) {
      qspCall(s, 'body', 'UpdateBodyImage');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCsChangeImgAdv(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_img_num = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  (s as any).cmd_temp_input = 0;
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    if ((String(((s as any).cmd_temp_input ?? 0)).slice(((String(((s as any).cmd_temp_input ?? 0)).length)-3)-1)) === '.jpg') {
      (s as any).cmd_temp_input = (String(((s as any).cmd_temp_input ?? 0)).slice((1)-1, ((1)-1)+((String(((s as any).cmd_temp_input ?? 0)).length)-4)));
    }
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_img_' + String((s as any).$temp_class_str || '') + '_' + String((s as any).temp_img_num || '') + ''] = ((s as any).cmd_temp_input ?? 0);
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] === ((s as any).temp_set ?? 0)) {
      qspCall(s, 'body', 'UpdateBodyImage');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0)]; enterCsMainAdvanced2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCsAddImg(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  (s as any).cmd_temp_input = 0;
  if ((String(((s as any).cmd_temp_input ?? 0)).slice(((String(((s as any).cmd_temp_input ?? 0)).length)-3)-1)) === '.jpg') {
    (s as any).cmd_temp_input = (String(((s as any).cmd_temp_input ?? 0)).slice((1)-1, ((1)-1)+((String(((s as any).cmd_temp_input ?? 0)).length)-4)));
  }
  (s as any).temp_new_img_index = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_imgnums_' + String(((s as any).temp_class_str ?? 0))];
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_imgnums_' + String((s as any).$temp_class_str || '') + ''] = ((s as any).cheatVars['fix_biset_' + String((s as any).temp_set || '') + '_imgnums_' + String((s as any).$temp_class_str || '') + ''] ?? 0) + (1);
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_img_' + String((s as any).$temp_class_str || '') + '_' + String((s as any).temp_new_img_index || '') + ''] = ((s as any).cmd_temp_input ?? 0);
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] === ((s as any).temp_set ?? 0)) {
    qspCall(s, 'body', 'UpdateBodyImage');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0)]; enterCsMainAdvanced2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCsRemoveImg(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_img_num = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  if (((s as any).temp_img_num ?? 0) < ((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).temp_set ?? 0) + '_imgnums_' + ((s as any).temp_class_str ?? 0)]  &&  ((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).temp_set ?? 0) + '_imgnums_' + ((s as any).temp_class_str ?? 0)] > 1) {
    (s as any).cmd_new_index = ((s as any).temp_img_num ?? 0);
    // TODO-QSP: :cs_remove_img_loop
    if (((s as any).cmd_new_index ?? 0) + 1 < ((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).temp_set ?? 0) + '_imgnums_' + ((s as any).temp_class_str ?? 0)]) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_img_' + String((s as any).$temp_class_str || '') + '_' + String((s as any).cmd_new_index || '') + ''] = ((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_img_' + String(((s as any).temp_class_str ?? 0)) + '_' + String(((s as any).cmd_new_index ?? 0)+1)];
      (s as any).cmd_new_index = ((s as any).cmd_new_index ?? 0) + (1);
      // TODO-QSP: jump 'cs_remove_img_loop'
    }
    qspCall(s, 'array', 'remove_element', '$cheatVars', 'fix_biset_' + ((s as any).temp_set ?? 0) + '_img_' + ((s as any).temp_class_str ?? 0) + '_' + ((s as any).cmd_new_index ?? 0) + '');
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).temp_set || '') + '_imgnums_' + String((s as any).$temp_class_str || '') + ''] = ((s as any).cheatVars['fix_biset_' + String((s as any).temp_set || '') + '_imgnums_' + String((s as any).$temp_class_str || '') + ''] ?? 0) - (1);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0)]; enterCsMainAdvanced2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCsSetDefaultImg(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).ARGS[1] || '') + '_img_' + String((s as any).$mid(10000 + ARGS[2], 2) || '') + ''] = '';
  // TODO-QSP: gs 'cheatmenu_bisets', 'cs_main', ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterCsSetDefaultImgAdv(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).ARGS[1] || '') + '_img_' + String((s as any).$mid(10000 + ARGS[2], 2) || '') + '_' + String((s as any).ARGS[3] || '') + ''] = '';
  // TODO-QSP: gs 'cheatmenu_bisets', 'cs_main_advanced2', ARGS[1], ARGS[2]
  // TODO-QSP: end
  scene.build();
}

function enterCsSetDefaultDesc(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).ARGS[1] || '') + '_desc_' + String((s as any).$mid(10000 + ARGS[2], 2) || '') + ''] = '';
  // TODO-QSP: gs 'cheatmenu_bisets', 'cs_main', ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterCsSetDefaultDescAdv(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String((s as any).ARGS[1] || '') + '_desc_' + String((s as any).$mid(10000 + ARGS[2], 2) || '') + ''] = '';
  // TODO-QSP: gs 'cheatmenu_bisets', 'cs_main_advanced2', ARGS[1], ARGS[2]
  // TODO-QSP: end
  scene.build();
}

function enterCsDeleteSet(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Body Image Set Removal</b></center>');
  // TODO-QSP: $cheatmenu['table_start']
  // TODO-QSP: dynamic text: <a href="exec: killvar 'klsetask' & gs 'cheatmenu_bisets', 'cs_main', <<ARGS[1]>...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: killvar \\u0027klsetask\\u0027 */ return s; }); window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_main\\u0027); return false;"><b>Go Back</b></a>`);
  scene.text('This is where you remove a body image set from use, please note it does not delete anything, it just clears the custom set from this game instance/save.');
  if (((s as any).klsetask ?? 0) === 1) {
    // TODO-QSP: dynamic text: <a href="exec:klsetask = 2 & gs 'cheatmenu_bisets', 'cs_delete_set', <<ARGS[1]>>...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.klsetask = s.2; return s; }); window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_delete_set\\u0027); return false;"><b>Are you sure you want to remove set ${qspUntranslated(s, "cheatVars['fix_biset_<<ARGS[1]", { location: "cheatmenu_bisets" })}_folder']>>?</b></a>`);
  } else {
    if (((s as any).klsetask ?? 0) === 2) {
      if (((s as any).cheatVars ?? 0)?.['fix_bodyimg'] === 1  &&  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] === ((s as any).locArgs?.[1] ?? 0)) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bodyimg'] = 0;
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 0;
      }
      // TODO-QSP: gs 'cheatmenu_bisets', 'cs_delete_set2', ARGS[1]
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMain(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      // TODO-QSP: dynamic text: <a href="exec: klsetask = 1 & gs 'cheatmenu_bisets', 'cs_delete_set', <<ARGS[1]>...
      scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.klsetask = s.1; return s; }); window.__gameStore.getState().doGoto(\\u0027cheatmenu_bisets\\u0027, \\u0027cs_delete_set\\u0027); return false;">Remove set ${qspUntranslated(s, "cheatVars['fix_biset_<<ARGS[1]", { location: "cheatmenu_bisets" })}_folder']>>?</a>`);
    }
  }
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  scene.build();
}

function enterCsDeleteSet2(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_text = 'fix_biset_' + ((s as any).locArgs?.[1] ?? 0) + '_';
  (s as any).cmbs_bmi_i = 0;
  // TODO-QSP: :del_bodimgset_loop
  // TODO-QSP: gs 'array', 'remove_element', 'cheatVars', $cmbs_text + 'img_<<cmbs_i>>'
  // TODO-QSP: gs 'array', 'remove_element', 'cheatVars', $cmbs_text + 'desc_<<cmbs_i>>'
  (s as any).cmbs_i = ((s as any).cmbs_i ?? 0) + (1);
  if (((s as any).cmbs_i ?? 0) < 9) {
    // TODO-QSP: jump 'del_bodimgset_loop'
  }
  (s as any).cmbs_bmi = 0;
  // TODO-QSP: :del_bodimgset_bmi_loop
  (s as any).cmbs_stren = 0;
  // TODO-QSP: :del_bodimgset_stren_loop
  (s as any).cmbs_class_str = (String(10000 + ((s as any).cmbs_bmi ?? 0) * 100 + ((s as any).cmbs_stren ?? 0)).slice((2)-1));
  // TODO-QSP: gs 'array', 'remove_element', 'cheatVars', $cmbs_text + 'desc_<<$cmbs_class_str>>'
  // TODO-QSP: gs 'array', 'remove_element', 'cheatVars', $cmbs_text + 'path_<<$cmbs_class_str>>'
  (s as any).cmbs_i = 0;
  // TODO-QSP: :del_bodimgset_img_loop
  // TODO-QSP: gs 'array', 'remove_element', 'cheatVars', $cmbs_text + 'img_<<$cmbs_class_str>>_<<cmbs_i>>'
  (s as any).cmbs_i = ((s as any).cmbs_i ?? 0) + (1);
  if (((s as any).cmbs_i ?? 0) < ((s as any).cheatVars ?? 0)[((s as any).cmbs_text ?? 0) + 'imgnums_' + ((s as any).cmbs_class_str ?? 0)]) {
    // TODO-QSP: jump 'del_bodimgset_img_loop'
  }
  // TODO-QSP: gs 'array', 'remove_element', 'cheatVars', $cmbs_text + 'imgnums_<<$cmbs_class_str>>'
  (s as any).cmbs_stren = ((s as any).cmbs_stren ?? 0) + (1);
  if (((s as any).cmbs_stren ?? 0) < 18) {
    // TODO-QSP: jump 'del_bodimgset_stren_loop'
  }
  (s as any).cmbs_bmi = ((s as any).cmbs_bmi ?? 0) + (1);
  if (((s as any).cmbs_bmi ?? 0) < 9) {
    // TODO-QSP: jump 'del_bodimgset_bmi_loop'
  }
  // TODO-QSP: gs 'array', 'remove_element', 'cheatVars', $cmbs_text + 'folder'
  // TODO-QSP: gs 'array', 'remove_element', 'cheatVars', $cmbs_text + 'path'
  // TODO-QSP: gs 'array', 'remove_element', 'cheatVars', $cmbs_text + 'name'
  // TODO-QSP: end
  scene.build();
}

function enterCsGetDefaultImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).locArgs?.[1] ?? 0) + '_advanced'] === 0) {
    // TODO-QSP: ARGS[2] *= 100
  }
  (s as any).result = qspFunc(s, 'body_structure', 'body_img_from_class', ((s as any).locArgs?.[2] ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterCsGetDefaultDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)['fix_biset_' + ((s as any).locArgs?.[1] ?? 0) + '_advanced'] === 0) {
    // TODO-QSP: ARGS[2] *= 100
  }
  (s as any).result = qspFunc(s, 'body_structure', 'body_desc_from_class', ((s as any).locArgs?.[2] ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterCsGetDefaultSubpath(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'body_structure', 'body_img_path_from_class', ((s as any).locArgs?.[2] ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterModsHowTo(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('How do you add the option to import an image set to a mod?');
  scene.text('It\'s fairly simple:');
  scene.text('    1. Build the image set in game, using the correct folders, names, paths, etc.');
  scene.text('    2. Click on the "Export Image Set" button.');
  scene.text('    3. Copy the displayed code.');
  scene.text('    4. When the main mod\'s location (\'mod_name\') is called with $ARGS[0] = \'import_body_set\' execute that code.');
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', 'main');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'main':
      enterMain(s, scene);
      break;
    case 'get_default_bi_table':
      enterGetDefaultBiTable(s, scene);
      break;
    case 'lock_img_set':
      enterLockImgSet(s, scene);
      break;
    case 'unlock_img_set':
      enterUnlockImgSet(s, scene);
      break;
    case 'get_bodyimg_desc_link':
      enterGetBodyimgDescLink(s, scene);
      break;
    case 'custom_folder_display':
      enterCustomFolderDisplay(s, scene);
      break;
    case 'cs_main':
      enterCsMain(s, scene);
      break;
    case 'cs_export':
      enterCsExport(s, scene);
      break;
    case 'cs_main_simple':
      enterCsMainSimple(s, scene);
      break;
    case 'get_custom_bodyimg_desc_link_simple':
      enterGetCustomBodyimgDescLinkSimple(s, scene);
      break;
    case 'cs_main_advanced':
      enterCsMainAdvanced(s, scene);
      break;
    case 'cs_main_advanced2':
      enterCsMainAdvanced2(s, scene);
      break;
    case 'get_custom_bodyimg_desc_link_advanced':
      enterGetCustomBodyimgDescLinkAdvanced(s, scene);
      break;
    case 'add_pregset':
      enterAddPregset(s, scene);
      break;
    case 'get_pregset_link':
      enterGetPregsetLink(s, scene);
      break;
    case 'get_custom_pregimg':
      enterGetCustomPregimg(s, scene);
      break;
    case 'cs_copy_class_menu':
      enterCsCopyClassMenu(s, scene);
      break;
    case 'cs_copy_class_bmi':
      enterCsCopyClassBmi(s, scene);
      break;
    case 'cs_copy_class_stren':
      enterCsCopyClassStren(s, scene);
      break;
    case 'cs_overwrite_classes_base':
      enterCsOverwriteClassesBase(s, scene);
      break;
    case 'cs_overwrite_class':
      enterCsOverwriteClass(s, scene);
      break;
    case 'add_set':
      enterAddSet(s, scene);
      break;
    case 'add_set2':
      enterAddSet2(s, scene);
      break;
    case 'get_new_set_index':
      enterGetNewSetIndex(s, scene);
      break;
    case 'import_set':
      enterImportSet(s, scene);
      break;
    case 'import_set_direct':
      enterImportSetDirect(s, scene);
      break;
    case 'import_set_mod':
      enterImportSetMod(s, scene);
      break;
    case 'import_set_mod2':
      enterImportSetMod2(s, scene);
      break;
    case 'import_custom_set':
      enterImportCustomSet(s, scene);
      break;
    case 'cs_set_simple':
      enterCsSetSimple(s, scene);
      break;
    case 'cs_set_advanced':
      enterCsSetAdvanced(s, scene);
      break;
    case 'cs_init_advanced':
      enterCsInitAdvanced(s, scene);
      break;
    case 'cs_change_name':
      enterCsChangeName(s, scene);
      break;
    case 'cs_change_folder':
      enterCsChangeFolder(s, scene);
      break;
    case 'cs_change_path':
      enterCsChangePath(s, scene);
      break;
    case 'cs_change_desc':
      enterCsChangeDesc(s, scene);
      break;
    case 'cs_change_desc_adv':
      enterCsChangeDescAdv(s, scene);
      break;
    case 'cs_change_subpath':
      enterCsChangeSubpath(s, scene);
      break;
    case 'cs_change_preg_subpath':
      enterCsChangePregSubpath(s, scene);
      break;
    case 'cs_change_img':
      enterCsChangeImg(s, scene);
      break;
    case 'cs_change_img_adv':
      enterCsChangeImgAdv(s, scene);
      break;
    case 'cs_add_img':
      enterCsAddImg(s, scene);
      break;
    case 'cs_remove_img':
      enterCsRemoveImg(s, scene);
      break;
    case 'cs_set_default_img':
      enterCsSetDefaultImg(s, scene);
      break;
    case 'cs_set_default_img_adv':
      enterCsSetDefaultImgAdv(s, scene);
      break;
    case 'cs_set_default_desc':
      enterCsSetDefaultDesc(s, scene);
      break;
    case 'cs_set_default_desc_adv':
      enterCsSetDefaultDescAdv(s, scene);
      break;
    case 'cs_delete_set':
      enterCsDeleteSet(s, scene);
      break;
    case 'cs_delete_set2':
      enterCsDeleteSet2(s, scene);
      break;
    case 'cs_get_default_img':
      enterCsGetDefaultImg(s, scene);
      break;
    case 'cs_get_default_desc':
      enterCsGetDefaultDesc(s, scene);
      break;
    case 'cs_get_default_subpath':
      enterCsGetDefaultSubpath(s, scene);
      break;
    case 'mods_how_to':
      enterModsHowTo(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const cheatmenu_bisets: LocationDef = {
  name: 'cheatmenu_bisets',
  title: '<center><h1>Cheat Menu - Body Image Sets</h1></center>',
  region: 'other',
  enter: enter,
};
