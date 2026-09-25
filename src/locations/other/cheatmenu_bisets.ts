import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'obj_din', 'cheattabs', 'Image Sets');
  scene.text('<center><h1>Cheat Menu - Body Image Sets</h1></center>');
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_start') || ''));
  scene.text('<center><b>Body Image Controls</b></center>');
  if (((s as any).cheatVars ?? 0)?.['fix_bodyimg'] === 1) {
    (s as any).temp_text = 'You are currently using set: ';
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] < 10) {
      // TODO-QSP: $temp_text += $cheatVars['fix_biset_<<cheatVars[''fix_bi_set'']>>_folder']
    } else {
      (s as any).temp_text = ((s as any).temp_text ?? 0) + ('default ');
      if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 0) {
        (s as any).temp_text = ((s as any).temp_text ?? 0) + ('low ');
      } else {
        if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 1) {
          (s as any).temp_text = ((s as any).temp_text ?? 0) + ('mid ');
        } else {
          if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 2) {
            (s as any).temp_text = ((s as any).temp_text ?? 0) + ('high ');
          }
        }
      }
      if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 === 19) {
        (s as any).temp_text = ((s as any).temp_text ?? 0) + ('strength');
      } else {
        (s as any).temp_text = ((s as any).temp_text ?? 0) + (qspFunc(s, 'body_structure', 'body_desc_from_class', ((((s as any).cheatVars ?? {})?.['fix_bi_set'] ?? 0) / 10 % 10) * 100));
      }
    }
    scene.text(`${((s as any).temp_text ?? '')}`);
    (s as any).temp_text = undefined;
  } else {
    scene.text('You are currently not using a fixed set.');
  }
  scene.text('These are the default body image sets:');
  scene.text(String(qspFunc(s, 'cheatmenu_bisets', 'get_default_bi_table') || ''));
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
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027add_set\u0027); return false;"><b>Add new set</b></a>');
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027import_set\u0027); return false;"><b>Import new set</b></a>');
  }
  (s as any).temp_cm_bi_flag = undefined;
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_end') || ''));
  scene.actions([
    { label: 'How to: mod edition', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', '');
  } },
  ]);
  scene.build();
}

function enterGetDefaultBiTable(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_table = '<table cellpadding="25" cellspacing="0">';
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th colspan=3><b>Strength</b></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027unlock_img_set\u0027, \u0027199 & gs \u0027cheatmenu_bisets\u0027\u0027); return false;"><b>RESET</b></a></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th valign="bottom" style="border-bottom: 1px solid black">');
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 0) {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027unlock_img_set\u0027, \u0027190 & gs \u0027cheatmenu_bisets\u0027\u0027); return false;"><b>Low</b></a>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027lock_img_set\u0027, \u0027190 & gs \u0027cheatmenu_bisets\u0027\u0027); return false;"><b>Low</b></a>');
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th valign="bottom" style="border-bottom: 1px solid black">');
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 1) {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027unlock_img_set\u0027, \u0027191 & gs \u0027cheatmenu_bisets\u0027\u0027); return false;"><b>Mid</b></a>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027lock_img_set\u0027, \u0027191 & gs \u0027cheatmenu_bisets\u0027\u0027); return false;"><b>Mid</b></a>');
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th valign="bottom" style="border-bottom: 1px solid black">');
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 2) {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027unlock_img_set\u0027, \u0027192 & gs \u0027cheatmenu_bisets\u0027\u0027); return false;"><b>High</b></a></th>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027lock_img_set\u0027, \u0027192 & gs \u0027cheatmenu_bisets\u0027\u0027); return false;"><b>High</b></a></th>');
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th rowspan=9><b>BMI</b></th>');
  (s as any).temp_cmd_i = 0;
  do {
    if (((s as any).temp_cmd_i ?? 0) !== 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + '<tr>';
    }
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th align="right" style="border-right: 1px solid black">');
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === ((s as any).temp_cmd_i ?? 0)) {
      (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027unlock_img_set\u0027, \u00271\u0027 + String((s as any).temp_cmd_i ?? \u0027\u0027) + \u00279 & gs /\u0027cheatmenu_bisets/\u0027\u0027); return false;"><b>' + qspFunc(s, 'body_structure', 'body_desc_from_class', ((s as any).temp_cmd_i ?? 0) * 100) + '</a></b>');
    } else {
      (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027lock_img_set\u0027, \u00271\u0027 + String((s as any).temp_cmd_i ?? \u0027\u0027) + \u00279 & gs /\u0027cheatmenu_bisets/\u0027\u0027); return false;"><b>' + qspFunc(s, 'body_structure', 'body_desc_from_class', ((s as any).temp_cmd_i ?? 0) * 100) + '</b></a>');
    }
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</th>');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center" valign="center">');
    (s as any).temp_cmd_colorflag = 0;
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  (((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === ((s as any).temp_cmd_i ?? 0)  ||  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === 9)  &&  (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 0  ||  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 9)) {
      (s as any).temp_cmd_colorflag = 1;
    }
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('' + qspFunc(s, 'cheatmenu_bisets', 'get_bodyimg_desc_link', ((s as any).temp_cmd_i ?? 0) * 100 + 2, ((s as any).temp_cmd_colorflag ?? 0)) + '');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</td>');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center" valign="center">');
    (s as any).temp_cmd_colorflag = 0;
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  (((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === ((s as any).temp_cmd_i ?? 0)  ||  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === 9)  &&  (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 1  ||  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 9)) {
      (s as any).temp_cmd_colorflag = 1;
    }
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('' + qspFunc(s, 'cheatmenu_bisets', 'get_bodyimg_desc_link', ((s as any).temp_cmd_i ?? 0) * 100 + 6, ((s as any).temp_cmd_colorflag ?? 0)) + '');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</td>');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center" valign="center">');
    (s as any).temp_cmd_colorflag = 0;
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] > 10  &&  (((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === ((s as any).temp_cmd_i ?? 0)  ||  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 % 10 === 9)  &&  (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 2  ||  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 9)) {
      (s as any).temp_cmd_colorflag = 1;
    }
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('' + qspFunc(s, 'cheatmenu_bisets', 'get_bodyimg_desc_link', ((s as any).temp_cmd_i ?? 0) * 100 + 8, ((s as any).temp_cmd_colorflag ?? 0)) + '');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</td>');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr>');
    (s as any).temp_cmd_i = ((s as any).temp_cmd_i ?? 0) + (1);
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table>');
    (s as any).result = ((s as any).temp_table ?? 0);
    (s as any).temp_table = undefined;
    (s as any).temp_cmd_colorflag = undefined;
  } while (((s as any).temp_cmd_i ?? 0) < 9);
  scene.build();
}

function enterLockImgSet(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bodyimg'] = 1;
  if (String((s as any).locArgs?.[1] ?? '') < 10) {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = ((s as any).locArgs?.[1] ?? 0);
  } else {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).locArgs?.[1] ?? 0) % 100;
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] < 10) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 199;
    }
    if (String((s as any).locArgs?.[1] ?? '') % 10 !== 9) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = ((((s as any).cheatVars ?? {})?.['fix_bi_set'] ?? 0) / 10) * 10 + (((s as any).locArgs?.[1] ?? 0) % 10);
    } else {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 100 + (((s as any).locArgs?.[1] ?? 0) / 10) * 10 + ((((s as any).cheatVars ?? {})?.['fix_bi_set'] ?? 0) % 10);
    }
  }
  qspCall(s, 'body', 'UpdateBodyImage');
  scene.build();
}

function enterUnlockImgSet(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] < 10) {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bodyimg'] = 0;
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 0;
  } else {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).locArgs?.[1] ?? 0) % 100;
    if (String((s as any).locArgs?.[1] ?? '') % 10 === 9) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 190 + ((((s as any).cheatVars ?? {})?.['fix_bi_set'] ?? 0) % 10);
    }
    if (String((s as any).locArgs?.[1] ?? '') / 10 === 9) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = ((((s as any).cheatVars ?? {})?.['fix_bi_set'] ?? 0) / 10) * 10 + 9;
    }
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] === 199) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bodyimg'] = 0;
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 0;
    }
  }
  qspCall(s, 'body', 'UpdateBodyImage');
  scene.build();
}

function enterGetBodyimgDescLink(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    (s as any).result = '<a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027\u0027 + func(\u0027body_structure\u0027, \u0027body_img_from_class\u0027, ARGS[1], 0) + \u0027\u0027; return s; }); return false;">' + qspFunc(s, 'body_structure', 'body_desc_from_class', ((s as any).locArgs?.[1] ?? 0)) + '</a>';
  } else {
    (s as any).result = '<i><a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027\u0027 + func(\u0027body_structure\u0027, \u0027body_img_from_class\u0027, ARGS[1], 0) + \u0027\u0027; return s; }); return false;">' + qspFunc(s, 'body_structure', 'body_desc_from_class', ((s as any).locArgs?.[1] ?? 0)) + '</a></i>';
  }
  scene.build();
}

function enterCustomFolderDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)['fix_biset_' + (String((s as any).locArgs?.[1] ?? '')) + '_folder'] !== '') {
    if ((!((s as any).temp_cm_bi_flag ?? 0))) {
      scene.text('You may edit aspects of a custom image set by clicking on their folder names below.');
    }
    (s as any).cs_display_text = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_name']);
    if (((s as any).cs_display_text ?? 0) === '') {
      (s as any).cs_display_text = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_folder']);
    }
    if (((s as any).cheatVars ?? 0)?.['fix_bodyimg'] === 1  &&  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] === String((s as any).locArgs?.[1] ?? '')) {
      scene.text(`<i><b><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_main/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;">${((s as any).cs_display_text ?? '')}</a></b></i>`);
    } else {
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_main/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;"><b>${((s as any).cs_display_text ?? '')}</b></a>`);
    }
    (s as any).cs_display_text = undefined;
    (s as any).temp_cm_bi_flag = ((s as any).temp_cm_bi_flag ?? 0) + (1);
  }
  scene.build();
}

function enterCsMain(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Cheat menu</h1></center>');
  scene.text('<center><b>Body Image Set Display</b></center>');
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_start') || ''));
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027main\u0027); return false;"><b>Go Back</b></a>');
  if (((s as any).cheatVars ?? 0)?.['fix_bodyimg'] === 1  &&  String((s as any).locArgs?.[1] ?? '') === ((s as any).cheatVars ?? 0)?.['fix_bi_set']) {
    scene.text('This is the currently locked set.');
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027unlock_img_set/u0027 & gs /u0027cheatmenu_bisets/u0027, /u0027cs_main/u0027); return false;"><b>Clear the lock.</b></a>`);
  } else {
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027lock_img_set/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027) + /u0027 & gs //u0027cheatmenu_bisets//u0027/u0027); return false;"><b>Use this set only.</b></a>`);
  }
  scene.actions([
    { label: 'Export set', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', '');
  } },
  ]);
  scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_export/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;">Export image set.</a>`);
  if (((s as any).cheatVars ?? 0)['fix_biset_' + (String((s as any).locArgs?.[1] ?? '')) + '_advanced'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCsMainSimple(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCsMainAdvanced(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_delete_set/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;">Delete this set.</a>`);
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_end') || ''));
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', '');
  } },
  ]);
  scene.build();
}

function enterCsExport(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_exp_set = ((s as any).locArgs?.[1] ?? 0);
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_start') || ''));
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', '');
  } },
  ]);
  // TODO-QSP: "
  if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).cmbs_exp_set ?? 0)) + '_name'] !== '') {
    (s as any).temp_export_text = ((s as any).temp_export_text ?? 0) + ('$fix_bod_set[\'name\'] = \'' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_exp_set ?? 0)) + '_name']) + '\'\n');
  }
  if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).cmbs_exp_set ?? 0)) + '_path'] !== '') {
    (s as any).temp_export_text = ((s as any).temp_export_text ?? 0) + ('$fix_bod_set[\'path\'] = \'' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_exp_set ?? 0)) + '_path']) + '\'\n');
  }
  (s as any).cmd_exp_i = 0;
  do {
    if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).cmbs_exp_set ?? 0)) + '_img_' + (((s as any).cmd_exp_i ?? 0))] !== '') {
      (s as any).temp_export_text = ((s as any).temp_export_text ?? 0) + ('$fix_bod_set[\'img_' + ((s as any).cmd_exp_i ?? 0) + '\'] = \'' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_exp_set ?? 0)) + '_img_' + String(((s as any).cmd_exp_i ?? 0))]) + '\'\n');
    }
    if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).cmbs_exp_set ?? 0)) + '_desc_' + (((s as any).cmd_exp_i ?? 0))] !== '') {
      (s as any).temp_export_text = ((s as any).temp_export_text ?? 0) + ('$fix_bod_set[\'desc_' + ((s as any).cmd_exp_i ?? 0) + '\'] = \'' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_exp_set ?? 0)) + '_desc_' + String(((s as any).cmd_exp_i ?? 0))]) + '\'\n');
    }
    (s as any).cmd_exp_i = ((s as any).cmd_exp_i ?? 0) + (1);
    if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).cmbs_exp_set ?? 0)) + '_imgnums_0000'] > 0) {
      (s as any).cmd_exp_bmi = 0;
      do {
        (s as any).cmd_exp_stren = 0;
        do {
          (s as any).cmd_class_str = (String(10000 + ((s as any).cmd_exp_bmi ?? 0) * 100 + ((s as any).cmd_exp_stren ?? 0)).slice((2)-1));
          if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).cmbs_exp_set ?? 0)) + '_desc_' + (((s as any).cmd_class_str ?? 0))] !== '') {
            (s as any).temp_export_text = ((s as any).temp_export_text ?? 0) + ('$fix_bod_set[\'desc_' + ((s as any).cmd_class_str ?? 0) + '\'] = \'' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_exp_set ?? 0)) + '_desc_' + String(((s as any).cmd_class_str ?? 0))]) + '\'\n');
          }
          if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).cmbs_exp_set ?? 0)) + '_path_' + (((s as any).cmd_class_str ?? 0))] !== '') {
            (s as any).temp_export_text = ((s as any).temp_export_text ?? 0) + ('$fix_bod_set[\'path_' + ((s as any).cmd_class_str ?? 0) + '\'] = \'' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_exp_set ?? 0)) + '_path_' + String(((s as any).cmd_class_str ?? 0))]) + '\'\n');
          }
          (s as any).cmd_imgnums = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_exp_set ?? 0)) + '_imgnums_' + String(((s as any).cmd_class_str ?? 0))]);
          (s as any).temp_export_text = ((s as any).temp_export_text ?? 0) + ('fix_bod_set[\'imgnums_' + ((s as any).cmd_class_str ?? 0) + '\'] = ' + ((s as any).cmd_imgnums ?? 0) + '\n');
          (s as any).cmd_exp_i = 0;
          do {
            if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).cmbs_exp_set ?? 0)) + '_img_' + (((s as any).cmd_class_str ?? 0)) + '_' + (((s as any).cmd_exp_i ?? 0))] !== '') {
              (s as any).temp_export_text = ((s as any).temp_export_text ?? 0) + ('$fix_bod_set[\'img_' + ((s as any).cmd_class_str ?? 0) + '_' + ((s as any).cmd_exp_i ?? 0) + '\'] = \'' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_exp_set ?? 0)) + '_img_' + String(((s as any).cmd_class_str ?? 0)) + '_' + String(((s as any).cmd_exp_i ?? 0))]) + '\'\n');
            }
            (s as any).cmd_exp_i = ((s as any).cmd_exp_i ?? 0) + (1);
            (s as any).cmd_exp_stren = ((s as any).cmd_exp_stren ?? 0) + (1);
            (s as any).cmd_exp_bmi = ((s as any).cmd_exp_bmi ?? 0) + (1);
          } while (((s as any).cmd_exp_i ?? 0) < ((s as any).cmd_imgnums ?? 0));
        } while (((s as any).cmd_exp_stren ?? 0) < 18);
      } while (((s as any).cmd_exp_bmi ?? 0) < 9);
    }
    (s as any).temp_export_text = (String(((s as any).temp_export_text ?? 0)).split('  ').join(''));
    scene.text(`${((s as any).temp_export_text ?? '')}`);
    (s as any).temp_export_text = undefined;
    scene.text(String(qspFunc(s, 'cheatmenu', 'table_end') || ''));
    (s as any).cmbs_exp_set = undefined;
  } while (((s as any).cmd_exp_i ?? 0) < 9);
  scene.build();
}

function enterCsMainSimple(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_set = ((s as any).locArgs?.[1] ?? 0);
  scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_set_advanced/u0027, String((s as any).cmbs_set ?? /u0027/u0027)); return false;"><b>Switch to "advanced"</b></a>`);
  scene.text('"Edit image" allows you to set the image file name (only use .jpg images)');
  scene.text('"Edit description" allows you to set the description of the image');
  scene.text(`Folder: ${(((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_folder'] ?? '')}    <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_change_folder/u0027, String((s as any).cmbs_set ?? /u0027/u0027)); return false;">Change Folder</a>`);
  scene.text('Descriptors: (Displayed as "You are:")');
  (s as any).temp_table = '<table cellpadding = "10">';
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th>Currently using</th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', ((s as any).cmbs_set ?? 0), 0));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', ((s as any).cmbs_set ?? 0), 1));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', ((s as any).cmbs_set ?? 0), 2));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', ((s as any).cmbs_set ?? 0), 3));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', ((s as any).cmbs_set ?? 0), 4));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', ((s as any).cmbs_set ?? 0), 5));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', ((s as any).cmbs_set ?? 0), 6));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', ((s as any).cmbs_set ?? 0), 7));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'cheatmenu_bisets', 'get_custom_bodyimg_desc_link_simple', ((s as any).cmbs_set ?? 0), 8));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table>');
  scene.text(`${((s as any).temp_table ?? '')}`);
  (s as any).temp_table = undefined;
  (s as any).cmbs_set = undefined;
  scene.build();
}

function enterGetCustomBodyimgDescLinkSimple(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_cmd_img_name = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_img_' + String(((s as any).temp_class ?? 0))]);
  (s as any).temp_cmd_desc = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_desc_' + String(((s as any).temp_class ?? 0))]);
  if (((s as any).temp_cmd_img_name ?? 0) === '') {
    (s as any).temp_cmd_image = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_img', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0));
    (s as any).temp_cmd_img_addon = '';
    (s as any).temp_cmd_img_addon2 = '';
  } else {
    (s as any).temp_base_folder = 'images/pc/body/shape/' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_folder']);
    (s as any).temp_cmd_image = ((s as any).temp_base_folder ?? 0) + '/' + ((s as any).temp_cmd_img_name ?? 0) + '.jpg';
    (s as any).temp_cmd_img_addon = ((s as any).temp_cmd_img_name ?? 0) + '.jpg';
    (s as any).temp_base_folder = undefined;
  }
  if (((s as any).temp_cmd_desc ?? 0) === '') {
    (s as any).temp_cmd_desc = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_desc', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0));
  }
  (s as any).result = '<tr>';
  (s as any).result = ((s as any).result ?? 0) + ('<td>' + ((s as any).temp_cmd_desc ?? 0) + '</td>');
  if (((s as any).temp_cmd_img_addon ?? 0) === '') {
    (s as any).result = ((s as any).result ?? 0) + ('<td><a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = s.temp_cmd_image; return s; }); return false;">Default image</a></td>');
  } else {
    (s as any).result = ((s as any).result ?? 0) + ('<td><a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = s.temp_cmd_image; return s; }); return false;">' + ((s as any).temp_cmd_img_addon ?? 0) + '</a> (<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027cs_set_default_img\u0027, String((s as any).temp_set ?? \u0027\u0027)); return false;">Use default image</a>)</td>');
  }
  (s as any).result = ((s as any).result ?? 0) + ('<td><a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = s.temp_cmd_image; return s; }); return false;">' + ((s as any).temp_cmd_img_addon ?? 0) + '</a></td>');
  (s as any).result = ((s as any).result ?? 0) + ('<td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027cs_change_img\u0027, String((s as any).temp_set ?? \u0027\u0027)); return false;">Edit image</a></td>');
  (s as any).result = ((s as any).result ?? 0) + ('<td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027cs_change_desc\u0027, String((s as any).temp_set ?? \u0027\u0027)); return false;">Edit description</a></td>');
  (s as any).result = ((s as any).result ?? 0) + ('</tr>');
  (s as any).temp_cmd_image = undefined;
  (s as any).temp_cmd_desc = undefined;
  (s as any).temp_cmd_img_addon = undefined;
  (s as any).temp_cmd_img_name = undefined;
  (s as any).temp_set = undefined;
  (s as any).temp_class = undefined;
  scene.build();
}

function enterCsMainAdvanced(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_set = ((s as any).locArgs?.[1] ?? 0);
  scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_set_simple/u0027, String((s as any).cmbs_set ?? /u0027/u0027)); return false;"><b>Switch to "classic"</b></a>`);
  scene.text('"Edit image" allows you to set the image file name (only use .jpg images)');
  scene.text('"Edit description" allows you to set the description of the image');
  if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).cmbs_set ?? 0)) + '_name'] === '') {
    scene.text(`Name: ${(((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_folder'] ?? '')}    <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_change_name/u0027, String((s as any).cmbs_set ?? /u0027/u0027)); return false;">Change Name</a>`);
  } else {
    scene.text(`Name: ${(((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_name'] ?? '')}    <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_change_name/u0027, String((s as any).cmbs_set ?? /u0027/u0027)); return false;">Change Name</a>`);
  }
  scene.text(`Folder: ${(((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_folder'] ?? '')}    <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_change_folder/u0027, String((s as any).cmbs_set ?? /u0027/u0027)); return false;">Change Folder</a>`);
  if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).cmbs_set ?? 0)) + '_path'] === '') {
    scene.text(`Path: images/pc/body/shape    <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_change_path/u0027, String((s as any).cmbs_set ?? /u0027/u0027)); return false;">Set Path</a>`);
  } else {
    scene.text(`Path: ${(((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_path'] ?? '')}    <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_change_path/u0027, String((s as any).cmbs_set ?? /u0027/u0027)); return false;">Change Path</a>`);
  }
  (s as any).temp_table = '<table cellpadding="10">';
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<tr align="center">');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th colspan=9>BMI</th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr><tr align="center">');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[0] = '00-15';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[1] = '16-18';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[2] = '19-21';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[3] = '22-24';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[4] = '25-29';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[5] = '30-34';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[6] = '35-39';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[7] = '40-44';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[8] = '45-99';
  (s as any).cmd_adv_bmi_i = 0;
  do {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th style="white-space: nowrap">' + (((s as any).temp_bmi_text ?? 0)?.[String((s as any).cmd_adv_bmi_i ?? 0)] ?? 0) + '</th>');
    (s as any).cmd_adv_bmi_i = ((s as any).cmd_adv_bmi_i ?? 0) + (1);
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr><tr align="center">');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th rowspan=18>Strength</th>');
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[0] = '000-005';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[1] = '006-010';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[2] = '011-015';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[3] = '016-025';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[4] = '026-035';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[5] = '036-050';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[6] = '051-070';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[7] = '071-100';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[8] = '101-110';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[9] = '111-120';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[10] = '121-130';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[11] = '131-140';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[12] = '141-150';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[13] = '151-160';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[14] = '161-170';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[15] = '171-180';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[16] = '181-190';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[17] = '191-200';
    (s as any).cmd_adv_str_i = 0;
    do {
      if (((s as any).cmd_adv_str_i ?? 0) !== 0) {
        (s as any).temp_table = ((s as any).temp_table ?? '') + '<tr align="center">';
      }
      (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th style="white-space: nowrap">' + (((s as any).temp_str_text ?? 0)?.[String((s as any).cmd_adv_str_i ?? 0)] ?? 0) + '</th>');
      (s as any).cmd_adv_bmi_i = 0;
      do {
        (s as any).cmbs_class = ((s as any).cmd_adv_bmi_i ?? 0) * 100 + ((s as any).cmd_adv_str_i ?? 0);
        (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027cs_main_advanced2\u0027, String((s as any).cmbs_set ?? \u0027\u0027)); return false;">' + (String(1000 + ((s as any).cmbs_class ?? 0)).slice((2)-1)) + '</a></td>');
        (s as any).cmd_adv_bmi_i = ((s as any).cmd_adv_bmi_i ?? 0) + (1);
        (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr>');
        (s as any).cmd_adv_str_i = ((s as any).cmd_adv_str_i ?? 0) + (1);
        (s as any).cmd_adv_str_i = undefined;
        (s as any).cmd_adv_bmi_i = undefined;
        (s as any).cmbs_class = undefined;
        (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table>');
        scene.text(`${((s as any).temp_table ?? '')}`);
        (s as any).temp_table = undefined;
        (s as any).temp_str_text = undefined;
        (s as any).cmbs_set = undefined;
      } while (((s as any).cmd_adv_bmi_i ?? 0) < 9);
    } while (((s as any).cmd_adv_str_i ?? 0) < 18);
  } while (((s as any).cmd_adv_bmi_i ?? 0) < 9);
  scene.build();
}

function enterCsMainAdvanced2(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).cmbs_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).cmdbs_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  scene.text('<center><h1>Cheat menu</h1></center>');
  scene.text(`<center><b>Body Image Set Display - class=${(String(1000 + ((s as any).locArgs?.[2] ?? '')).slice((2)-1))}</b></center>`);
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_start') || ''));
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', '');
  } },
    { label: 'Copy to other class', handler: (st: GameState) => {
    ((st as any).cmd_copy_class = (st as any).cmd_copy_class ?? {})['set'] = ((st as any).cmbs_set ?? 0);
    ((st as any).cmd_copy_class = (st as any).cmd_copy_class ?? {})['base'] = ((st as any).cmbs_class ?? 0);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCsCopyClassMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.text('Click links to edit');
  (s as any).temp_cmd_desc = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_desc_' + String(((s as any).cmdbs_class_str ?? 0))]);
  if (((s as any).temp_cmd_desc ?? 0) === '') {
    (s as any).temp_cmd_desc = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_desc', ((s as any).cmbs_set ?? 0), ((s as any).cmbs_class ?? 0));
    scene.text(`You are: <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_change_desc_adv/u0027, String((s as any).cmbs_set ?? /u0027/u0027)); return false;">${((s as any).temp_cmd_desc ?? '')}</a>`);
  } else {
    scene.text(`You are: <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_change_desc_adv/u0027, String((s as any).cmbs_set ?? /u0027/u0027)); return false;">${((s as any).temp_cmd_desc ?? '')}</a>    <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_set_default_desc_adv/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;">Use default description</a>`);
  }
  (s as any).temp_cmd_desc = undefined;
  (s as any).temp_cmd_path = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_path']);
  if (((s as any).temp_cmd_path ?? 0) === '') {
    (s as any).temp_cmd_path = 'images/pc/body/shape';
  }
  (s as any).temp_cmd_path = ((s as any).temp_cmd_path ?? 0) + ('/' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_folder']));
  (s as any).temp_cmd_subpath = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_path_' + String(((s as any).cmdbs_class_str ?? 0))]);
  if (((s as any).temp_cmd_subpath ?? 0) === '') {
    (s as any).temp_cmd_subpath = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_subpath', ((s as any).cmbs_set ?? 0), ((s as any).cmbs_class ?? 0));
    (s as any).temp_cmd_subpath = (String(((s as any).temp_cmd_subpath ?? 0)).slice((22)-1));
  }
  scene.text(`Path: ${((s as any).temp_cmd_path ?? '')}/<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_change_subpath/u0027, String((s as any).cmbs_set ?? /u0027/u0027)); return false;">${((s as any).temp_cmd_subpath ?? '')}</a>`);
  (s as any).temp_cmd_subpath = undefined;
  (s as any).temp_cmd_path = undefined;
  (s as any).temp_table = '<table width=80% align="center">';
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th>Currently using</th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr>');
  (s as any).cmd_adv_i = 0;
  do {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'cheatmenu_bisets', 'get_custom_bodyimg_desc_link_advanced', ((s as any).cmbs_set ?? 0), ((s as any).cmbs_class ?? 0), ((s as any).cmd_adv_i ?? 0)));
    (s as any).cmd_adv_i = ((s as any).cmd_adv_i ?? 0) + (1);
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<tr>');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td></td>');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td></td>');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027cs_add_img\u0027, String((s as any).cmbs_set ?? \u0027\u0027)); return false;">Add image</a></td>');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr>');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table>');
    scene.text(`${((s as any).temp_table ?? '')}`);
    (s as any).temp_table = undefined;
    scene.text(String(qspFunc(s, 'cheatmenu', 'table_end') || ''));
    (s as any).cmbs_set = undefined;
    (s as any).cmbs_class = undefined;
    (s as any).cmdbs_class_str = undefined;
  } while (((s as any).cmd_adv_i ?? 0) < ((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).cmbs_set ?? 0)) + '_imgnums_' + (((s as any).cmdbs_class_str ?? 0))]);
  scene.build();
}

function enterGetCustomBodyimgDescLinkAdvanced(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_img_num = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_bs_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  (s as any).temp_cmd_img_name = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_img_' + String(((s as any).temp_bs_class_str ?? 0)) + '_' + String(((s as any).temp_img_num ?? 0))]);
  (s as any).temp_cmd_desc = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_desc_' + String(((s as any).temp_bs_class_str ?? 0))]);
  if (((s as any).temp_cmd_img_name ?? 0) === '') {
    (s as any).temp_cmd_image = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_img', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0));
    (s as any).temp_cmd_img_addon = '';
  } else {
    (s as any).temp_base_folder = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_path']);
    if (((s as any).temp_base_folder ?? 0) === '') {
      (s as any).temp_base_folder = 'images/pc/body/shape';
    }
    (s as any).temp_base_folder = ((s as any).temp_base_folder ?? 0) + ('/' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_folder']));
    if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).temp_set ?? 0)) + '_path_' + (((s as any).temp_bs_class_str ?? 0))] !== '') {
      (s as any).temp_base_folder = ((s as any).temp_base_folder ?? 0) + ('/' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_path_' + String(((s as any).temp_bs_class_str ?? 0))]));
    }
    (s as any).temp_cmd_image = ((s as any).temp_base_folder ?? 0) + '/' + ((s as any).temp_cmd_img_name ?? 0) + '.jpg';
    (s as any).temp_cmd_img_addon = ((s as any).temp_cmd_img_name ?? 0) + '.jpg';
    (s as any).temp_base_folder = undefined;
  }
  if (((s as any).temp_cmd_desc ?? 0) === '') {
    (s as any).temp_cmd_desc = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_desc', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0));
  }
  (s as any).result = '<tr>';
  if (((s as any).temp_cmd_img_addon ?? 0) === '') {
    (s as any).result = ((s as any).result ?? 0) + ('<td><a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = s.temp_cmd_image; return s; }); return false;">Default image</a></td>');
  } else {
    (s as any).result = ((s as any).result ?? 0) + ('<td><a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = s.temp_cmd_image; return s; }); return false;">' + ((s as any).temp_cmd_img_addon ?? 0) + '</a> (<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027cs_set_default_img_adv\u0027, String((s as any).temp_set ?? \u0027\u0027)); return false;">Use default image</a>)</td>');
  }
  (s as any).result = ((s as any).result ?? 0) + ('<td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027cs_change_img_adv\u0027, String((s as any).temp_set ?? \u0027\u0027)); return false;">Edit image</a></td>');
  if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).temp_set ?? 0)) + '_imgnums_' + (((s as any).temp_class ?? 0))] === 1) {
    (s as any).result = ((s as any).result ?? 0) + ('<td></td>');
  } else {
    (s as any).result = ((s as any).result ?? 0) + ('<td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027cs_remove_img\u0027, String((s as any).temp_set ?? \u0027\u0027)); return false;">Remove image</a></td>');
  }
  (s as any).result = ((s as any).result ?? 0) + ('</tr>');
  (s as any).temp_cmd_image = undefined;
  (s as any).temp_cmd_desc = undefined;
  (s as any).temp_cmd_img_addon = undefined;
  (s as any).temp_cmd_img_name = undefined;
  (s as any).temp_bs_class_str = undefined;
  (s as any).temp_set = undefined;
  (s as any).temp_class = undefined;
  (s as any).temp_img_num = undefined;
  scene.build();
}

function enterAddPregset(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_pregsets'] = ((s as any).cheatVars['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_pregsets'] ?? 0) + (1);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_set = undefined;
  scene.build();
}

function enterGetPregsetLink(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).preg_set = ((s as any).locArgs?.[2] ?? 0);
  scene.text('<center><h1>Cheat menu</h1></center>');
  scene.text(`<center><b>Pregnancy Image Set Display - Set = ${((s as any).preg_set ?? '')}</b></center>`);
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_start') || ''));
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027cs_main\u0027, String(window.__gameStore.getState().temp_set ?? \u0027\u0027)); return false;"><b>Go Back</b></a>');
  (s as any).temp_cmd_path = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_path']);
  if (((s as any).temp_cmd_path ?? 0) === '') {
    (s as any).temp_cmd_path = 'images/pc/body/shape';
  }
  (s as any).temp_cmd_path = ((s as any).temp_cmd_path ?? 0) + ('/' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_folder']));
  (s as any).temp_cmd_subpath = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).cmbs_set ?? 0)) + '_pregpath_' + String(((s as any).preg_set ?? 0))]);
  if (((s as any).temp_cmd_subpath ?? 0) === '') {
    (s as any).temp_cmd_subpath = 'preg/0';
  }
  scene.text(`Path: ${((s as any).temp_cmd_path ?? '')}/<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_change_preg_subpath/u0027, String((s as any).temp_set ?? /u0027/u0027)); return false;">${((s as any).temp_cmd_subpath ?? '')}</a>`);
  (s as any).temp_cmd_subpath = undefined;
  (s as any).temp_cmd_path = undefined;
  (s as any).temp_table = '<table width=80% align="center">';
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th>Currently using</th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr>');
  (s as any).cmd_preg_img = 0;
  do {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'cheatmenu_bisets', 'get_custom_pregimg', ((s as any).temp_set ?? 0), ((s as any).preg_set ?? 0), ((s as any).cmd_preg_img ?? 0)));
    (s as any).cmd_preg_img = ((s as any).cmd_preg_img ?? 0) + (1);
    (s as any).cmd_preg_img = undefined;
    scene.text(String(qspFunc(s, 'cheatmenu', 'table_end') || ''));
    (s as any).temp_set = undefined;
    (s as any).preg_set = undefined;
  } while (((s as any).cmd_preg_img ?? 0) < 9);
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', '');
  } },
  ]);
  scene.build();
}

function enterGetCustomPregimg(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).preg_set = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_img = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_cmd_img_name = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_pregimg_' + String(((s as any).preg_set ?? 0)) + '_' + String(((s as any).temp_img ?? 0))]);
  (s as any).temp_cmd_desc = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_desc_' + String(((s as any).preg_set ?? 0))]);
  if (((s as any).temp_cmd_img_name ?? 0) === '') {
    (s as any).temp_cmd_image = qspFunc(s, 'cheatmenu_bisets', 'cs_get_default_img', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0));
    (s as any).temp_cmd_img_addon = '';
  } else {
    (s as any).temp_base_folder = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_path']);
    if (((s as any).temp_base_folder ?? 0) === '') {
      (s as any).temp_base_folder = 'images/pc/body/shape';
    }
    (s as any).temp_base_folder = ((s as any).temp_base_folder ?? 0) + ('/' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_folder']));
    if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).temp_set ?? 0)) + '_path_' + (((s as any).temp_bs_class_str ?? 0))] !== '') {
      (s as any).temp_base_folder = ((s as any).temp_base_folder ?? 0) + ('/' + (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_path_' + String(((s as any).temp_bs_class_str ?? 0))]));
    }
    (s as any).temp_cmd_image = ((s as any).temp_base_folder ?? 0) + '/' + ((s as any).temp_cmd_img_name ?? 0) + '.jpg';
    (s as any).temp_cmd_img_addon = ((s as any).temp_cmd_img_name ?? 0) + '.jpg';
    (s as any).temp_base_folder = undefined;
  }
  (s as any).temp_set = undefined;
  (s as any).preg_set = undefined;
  (s as any).temp_img = undefined;
  scene.build();
}

function enterCsCopyClassMenu(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_table = '<table cellpadding="10">';
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<tr align="center">');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th colspan=9>BMI</th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr><tr align="center">');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th></th>');
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[0] = '00-15';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[1] = '16-18';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[2] = '19-21';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[3] = '22-24';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[4] = '25-29';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[5] = '30-34';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[6] = '35-39';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[7] = '40-44';
  ((s as any).temp_bmi_text = (s as any).temp_bmi_text ?? {})[8] = '45-99';
  (s as any).cmd_adv_bmi_i = 0;
  do {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th style="white-space: nowrap"><b><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027cs_copy_class_bmi\u0027, String((s as any).cmd_adv_bmi_i ?? \u0027\u0027)); return false;">' + (((s as any).temp_bmi_text ?? 0)?.[String((s as any).cmd_adv_bmi_i ?? 0)] ?? 0) + '</a></b></th>');
    (s as any).cmd_adv_bmi_i = ((s as any).cmd_adv_bmi_i ?? 0) + (1);
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr><tr align="center">');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th rowspan=18>Strength</th>');
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[0] = '000-005';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[1] = '006-010';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[2] = '011-015';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[3] = '016-025';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[4] = '026-035';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[5] = '036-050';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[6] = '051-070';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[7] = '071-100';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[8] = '101-110';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[9] = '111-120';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[10] = '121-130';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[11] = '131-140';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[12] = '141-150';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[13] = '151-160';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[14] = '161-170';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[15] = '171-180';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[16] = '181-190';
    ((s as any).temp_str_text = (s as any).temp_str_text ?? {})[17] = '191-200';
    ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['counter'] = 0;
    (s as any).cmd_adv_str_i = 0;
    do {
      if (((s as any).cmd_adv_str_i ?? 0) !== 0) {
        (s as any).temp_table = ((s as any).temp_table ?? '') + '<tr align="center">';
      }
      (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th style="white-space: nowrap"><b><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027cs_copy_class_stren\u0027, String((s as any).cmd_adv_str_i ?? \u0027\u0027)); return false;">' + (((s as any).temp_str_text ?? 0)?.[String((s as any).cmd_adv_str_i ?? 0)] ?? 0) + '</a></b></th>');
      (s as any).cmd_adv_bmi_i = 0;
      do {
        (s as any).cmbs_class = ((s as any).cmd_adv_bmi_i ?? 0) * 100 + ((s as any).cmd_adv_str_i ?? 0);
        (s as any).cmbs_class_str = (String(10000 + ((s as any).cmbs_class ?? 0)).slice((2)-1));
        if (((s as any).cmd_copy_class ?? 0)?.['base'] === ((s as any).cmbs_class ?? 0)) {
          (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td>' + ((s as any).cmbs_class_str ?? 0) + '</td>');
        } else {
          if (((s as any).cmd_copy_class ?? 0)?.[String((s as any).cmbs_class_str ?? 0)] === 1) {
            ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['counter'] = ((s as any).cmd_copy_class['counter'] ?? 0) + (1);
            (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><i><a href="#" onclick="window.__gameStore.setState((s) => { (s.cmd_copy_class ??= {})\u0027' + ((s as any).cmbs_class_str ?? 0) + '\u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027cs_copy_class_menu\u0027); return false;">' + ((s as any).cmbs_class_str ?? 0) + '</a></i></td>');
          } else {
            (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><a href="#" onclick="window.__gameStore.setState((s) => { (s.cmd_copy_class ??= {})\u0027' + ((s as any).cmbs_class_str ?? 0) + '\u0027 = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027cs_copy_class_menu\u0027); return false;">' + ((s as any).cmbs_class_str ?? 0) + '</a></td>');
          }
        }
        (s as any).cmd_adv_bmi_i = ((s as any).cmd_adv_bmi_i ?? 0) + (1);
        (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr>');
        (s as any).cmd_adv_str_i = ((s as any).cmd_adv_str_i ?? 0) + (1);
        (s as any).cmd_adv_str_i = undefined;
        (s as any).cmd_adv_bmi_i = undefined;
        (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table>');
        scene.text(`${((s as any).temp_table ?? '')}`);
        (s as any).temp_table = undefined;
        (s as any).temp_str_text = undefined;
        (s as any).cmbs_set = undefined;
        (s as any).cmbs_class = undefined;
        if (((s as any).cmd_copy_class ?? 0)?.['counter'] > 0) {
          scene.actions([
            { label: 'Reset', handler: (st: GameState) => {
    (st as any).temp_set = (((st as any).cmd_copy_class ?? 0)?.['set']);
    (st as any).temp_base = (((st as any).cmd_copy_class ?? 0)?.['base']);
    (st as any).cmd_copy_class = undefined;
    ((st as any).cmd_copy_class = (st as any).cmd_copy_class ?? {})['set'] = ((st as any).temp_set ?? 0);
    ((st as any).cmd_copy_class = (st as any).cmd_copy_class ?? {})['base'] = ((st as any).temp_base ?? 0);
    (st as any).temp_set = undefined;
    (st as any).temp_base = undefined;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCsCopyClassMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
            { label: 'Overwrite', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCsOverwriteClassesBase(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      } while (((s as any).cmd_adv_bmi_i ?? 0) < 9);
    } while (((s as any).cmd_adv_str_i ?? 0) < 18);
  } while (((s as any).cmd_adv_bmi_i ?? 0) < 9);
  scene.actions([
    { label: 'Cancel', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', (((st as any).cmd_copy_class ?? 0)?.['set']), (((st as any).cmd_copy_class ?? 0)?.['base'])]; enterCsMainAdvanced2(st, scene); (st as any).locArgs = __savedLocArgs; }
    (st as any).cmd_copy_class = undefined;
  } },
  ]);
  scene.build();
}

function enterCsCopyClassBmi(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['bmi'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['counter'] = 0;
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['stren'] = 0;
  do {
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class'] = (((s as any).temp_copyclass ?? {})?.['bmi'] ?? 0) * 100 + (((s as any).temp_copyclass ?? {})?.['stren'] ?? 0);
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class_str'] = (String(10000 + (((s as any).temp_copyclass ?? {})?.['class'] ?? 0)).slice((2)-1));
    if (((s as any).cmd_copy_class ?? 0)[((s as any).temp_copyclass ?? 0)?.['class_str']] === 1  ||  ((s as any).cmd_copy_class ?? 0)?.['base'] === ((s as any).temp_copyclass ?? 0)?.['class']) {
      ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['counter'] = ((s as any).temp_copyclass['counter'] ?? 0) + (1);
    }
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['stren'] = ((s as any).temp_copyclass['stren'] ?? 0) + (1);
    if (((s as any).temp_copyclass ?? 0)?.['counter'] < 18) {
      ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['result'] = 1;
    } else {
      ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['result'] = 0;
    }
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['stren'] = 0;
    do {
      ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class'] = (((s as any).temp_copyclass ?? {})?.['bmi'] ?? 0) * 100 + (((s as any).temp_copyclass ?? {})?.['stren'] ?? 0);
      ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class_str'] = (String(10000 + (((s as any).temp_copyclass ?? {})?.['class'] ?? 0)).slice((2)-1));
      if (((s as any).cmd_copy_class ?? 0)?.['base'] !== ((s as any).temp_copyclass ?? 0)?.['class']) {
        ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})[(((s as any).temp_copyclass ?? 0)?.['class_str'])] = (((s as any).temp_copyclass ?? 0)?.['result']);
      }
      ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['stren'] = ((s as any).temp_copyclass['stren'] ?? 0) + (1);
      (s as any).temp_copyclass = undefined;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCsCopyClassMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
    } while (((s as any).temp_copyclass ?? 0)?.['stren'] < 18);
  } while (((s as any).temp_copyclass ?? 0)?.['stren'] < 18);
  scene.build();
}

function enterCsCopyClassStren(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['stren'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['counter'] = 0;
  ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['bmi'] = 0;
  do {
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class'] = (((s as any).temp_copyclass ?? {})?.['bmi'] ?? 0) * 100 + (((s as any).temp_copyclass ?? {})?.['stren'] ?? 0);
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class_str'] = (String(10000 + (((s as any).temp_copyclass ?? {})?.['class'] ?? 0)).slice((2)-1));
    if (((s as any).cmd_copy_class ?? 0)[((s as any).temp_copyclass ?? 0)?.['class_str']] === 1  ||  ((s as any).cmd_copy_class ?? 0)?.['base'] === ((s as any).temp_copyclass ?? 0)?.['class']) {
      ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['counter'] = ((s as any).temp_copyclass['counter'] ?? 0) + (1);
    }
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['bmi'] = ((s as any).temp_copyclass['bmi'] ?? 0) + (1);
    if (((s as any).temp_copyclass ?? 0)?.['counter'] < 9) {
      ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['result'] = 1;
    } else {
      ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['result'] = 0;
    }
    ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['bmi'] = 0;
    do {
      ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class'] = (((s as any).temp_copyclass ?? {})?.['bmi'] ?? 0) * 100 + (((s as any).temp_copyclass ?? {})?.['stren'] ?? 0);
      ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['class_str'] = (String(10000 + (((s as any).temp_copyclass ?? {})?.['class'] ?? 0)).slice((2)-1));
      if (((s as any).cmd_copy_class ?? 0)?.['base'] !== ((s as any).temp_copyclass ?? 0)?.['class']) {
        ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})[(((s as any).temp_copyclass ?? 0)?.['class_str'])] = (((s as any).temp_copyclass ?? 0)?.['result']);
      }
      ((s as any).temp_copyclass = (s as any).temp_copyclass ?? {})['bmi'] = ((s as any).temp_copyclass['bmi'] ?? 0) + (1);
      (s as any).temp_copyclass = undefined;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCsCopyClassMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
    } while (((s as any).temp_copyclass ?? 0)?.['bmi'] < 9);
  } while (((s as any).temp_copyclass ?? 0)?.['bmi'] < 9);
  scene.build();
}

function enterCsOverwriteClassesBase(s: GameState, scene: SceneBuilder): void {
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['base_str'] = (String(10000 + (((s as any).cmd_copy_class ?? {})?.['base'] ?? 0)).slice((2)-1));
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['string'] = 'fix_biset_' + (((s as any).cmd_copy_class ?? 0)?.['set']) + '_';
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['path'] = (((s as any).cheatVars ?? 0)?.[(((s as any).cmd_copy_class ?? 0)?.['string']) + 'path_' + (((s as any).cmd_copy_class ?? 0)?.['base_str']) + ''] ?? 0);
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['desc'] = (((s as any).cheatVars ?? 0)?.[(((s as any).cmd_copy_class ?? 0)?.['string']) + 'desc_' + (((s as any).cmd_copy_class ?? 0)?.['base_str']) + ''] ?? 0);
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['imgnums'] = (((s as any).cheatVars ?? 0)?.[(((s as any).cmd_copy_class ?? 0)?.['string']) + 'imgnums_' + (((s as any).cmd_copy_class ?? 0)?.['base_str']) + ''] ?? 0);
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['i'] = 0;
  do {
    ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['img_' + String((((s as any).cmd_copy_class ?? 0)?.['i']))] = (((s as any).cheatVars ?? 0)?.[(((s as any).cmd_copy_class ?? 0)?.['string']) + 'img_' + (((s as any).cmd_copy_class ?? 0)?.['base_str']) + '_' + (((s as any).cmd_copy_class ?? 0)?.['i']) + ''] ?? 0);
    ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['i'] = ((s as any).cmd_copy_class['i'] ?? 0) + (1);
    ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['str_i'] = 0;
    do {
      ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['bmi_i'] = 0;
      do {
        (s as any).cmbs_class = (((s as any).cmd_copy_class ?? {})?.['bmi_i'] ?? 0) * 100 + (((s as any).cmd_copy_class ?? {})?.['str_i'] ?? 0);
        (s as any).cmbs_class_str = (String(10000 + ((s as any).cmbs_class ?? 0)).slice((2)-1));
        if (((s as any).cmd_copy_class ?? 0)?.['base'] !== ((s as any).cmbs_class ?? 0)  &&  ((s as any).cmd_copy_class ?? 0)?.[String((s as any).cmbs_class_str ?? 0)] === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).cmbs_class_str ?? 0)]; enterCsOverwriteClass(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['bmi_i'] = ((s as any).cmd_copy_class['bmi_i'] ?? 0) + (1);
        ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['str_i'] = ((s as any).cmd_copy_class['str_i'] ?? 0) + (1);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).cmd_copy_class ?? 0)?.['set'])]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
        (s as any).cmd_copy_class = undefined;
      } while (((s as any).cmd_copy_class ?? 0)?.['bmi_i'] < 9);
    } while (((s as any).cmd_copy_class ?? 0)?.['str_i'] < 18);
  } while (((s as any).cmd_copy_class ?? 0)?.['i'] < ((s as any).cmd_copy_class ?? 0)?.['imgnums']);
  scene.build();
}

function enterCsOverwriteClass(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})[(((s as any).cmd_copy_class ?? 0)?.['string']) + 'path_' + ((s as any).locArgs?.[1] ?? 0) + ''] = (((s as any).cmd_copy_class ?? 0)?.['path']);
  ((s as any).cheatVars = (s as any).cheatVars ?? {})[(((s as any).cmd_copy_class ?? 0)?.['string']) + 'desc_' + ((s as any).locArgs?.[1] ?? 0) + ''] = (((s as any).cmd_copy_class ?? 0)?.['desc']);
  ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['i'] = 0;
  do {
    // TODO-QSP: $cheatVars[$cmd_copy_class['string'] + 'img_<<$ARGS[1]>>_<<cmd_copy_class[''i'']>>'] = $cmd_copy_class['img_<<cmd_copy_class[''i'']>>']
    ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['i'] = ((s as any).cmd_copy_class['i'] ?? 0) + (1);
    if (((s as any).cheatVars ?? 0)[((s as any).cmd_copy_class ?? 0)?.['string'] + 'imgnums_' + (String((s as any).locArgs?.[1] ?? ''))] > ((s as any).cmd_copy_class ?? 0)?.['imgnums']) {
      ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['i'] = (((s as any).cmd_copy_class ?? 0)?.['imgnums']);
      do {
        qspCall(s, 'array', 'remove_element', '$cheatVars', (((s as any).cmd_copy_class ?? 0)?.['string']) + 'img_' + ((s as any).locArgs?.[1] ?? 0) + '_' + (((s as any).cmd_copy_class ?? 0)?.['i']) + '');
        ((s as any).cmd_copy_class = (s as any).cmd_copy_class ?? {})['i'] = ((s as any).cmd_copy_class['i'] ?? 0) + (1);
      } while (((s as any).cmd_copy_class ?? 0)?.['i'] < ((s as any).cheatVars ?? 0)[((s as any).cmd_copy_class ?? 0)?.['string'] + 'imgnums_' + (String((s as any).locArgs?.[1] ?? ''))]);
    }
    ((s as any).cheatVars = (s as any).cheatVars ?? {})[(((s as any).cmd_copy_class ?? 0)?.['string']) + 'imgnums_' + ((s as any).locArgs?.[1] ?? 0) + ''] = (((s as any).cmd_copy_class ?? 0)?.['imgnums']);
  } while (((s as any).cmd_copy_class ?? 0)?.['i'] < ((s as any).cmd_copy_class ?? 0)?.['imgnums']);
  scene.build();
}

function enterAddSet(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Body Image Set Addition</b></center>');
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_start') || ''));
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: killvar \u0027klsetask\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027main\u0027); return false;"><b>Go Back</b></a>');
  scene.text('This is where you can add a new image set to a game.');
  scene.text('To add an image set, create a folder in images/pc/body/shape/ and name it anything you want (shorter will be easier to remember). Then put in it any images you want. Once you have done that, click the link below and put in your folder name to add that set.');
  scene.text('Note: This will only be for this instance/save of the game and you will have to redo the click the link step if you want to add the same folder to a different instance/save.');
  (s as any).cs_new_index = qspFunc(s, 'cheatmenu_bisets', 'get_new_set_index');
  if (((s as any).cs_new_index ?? 0) >= 0) {
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027add_set2/u0027, String((s as any).cs_new_index ?? /u0027/u0027)); return false;">Add Image Set</a>`);
  } else {
    scene.text('You cannot add more sets.');
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027main\u0027); return false;"><b>Go Back</b></a>');
  }
  (s as any).cs_new_index = undefined;
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_end') || ''));
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    (st as any).klsetask = undefined;
    qspCall(st, 'cheatmenu_bisets', '');
  } },
  ]);
  scene.build();
}

function enterAddSet2(s: GameState, scene: SceneBuilder): void {
  (s as any).cmd_temp_input = window.prompt("Enter folder name, do not include '\\'") ?? '';
  if (((s as any).cmd_temp_input ?? 0) === '') {
    (s as any).cmd_temp_input = undefined;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAddSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if ((String(((s as any).cmd_temp_input ?? 0)).slice(((String(((s as any).cmd_temp_input ?? 0)).length))-1)) === '/'  ||  (String(((s as any).cmd_temp_input ?? 0)).slice(((String(((s as any).cmd_temp_input ?? 0)).length))-1)) === '/') {
      (s as any).cmd_temp_input = (String(((s as any).cmd_temp_input ?? 0)).slice((1)-1, ((1)-1)+((String(((s as any).cmd_temp_input ?? 0)).length)-1)));
    }
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_folder'] = ((s as any).cmd_temp_input ?? 0);
    (s as any).cmd_temp_input = undefined;
    (s as any).cyci1 = undefined;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterGetNewSetIndex(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set_index = 0;
  while (true) {
    if (((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).temp_set_index ?? 0)) + '_folder'] !== '') {
      (s as any).temp_set_index = ((s as any).temp_set_index ?? 0) + (1);
      if (((s as any).temp_set_index ?? 0) <= 9) {
        break;
      } else {
        (s as any).result = (-1);
      }
    } else {
      (s as any).result = ((s as any).temp_set_index ?? 0);
    }
    (s as any).temp_set_index = undefined;
  }
  scene.build();
}

function enterImportSet(s: GameState, scene: SceneBuilder): void {
  (s as any).fix_bod_set = undefined;
  scene.text('<center><b>Body Image Set Import</b></center>');
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_start') || ''));
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: killvar \u0027klsetask\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027main\u0027); return false;"><b>Go Back</b></a>');
  scene.text('This is where you can import a new image set to a game.');
  (s as any).cs_new_index = qspFunc(s, 'cheatmenu_bisets', 'get_new_set_index');
  if (((s as any).cs_new_index ?? 0) >= 0) {
    if (Object.keys((s as any).mod_name ?? {}).length > 0) {
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027import_set_mod/u0027, String((s as any).cs_new_index ?? /u0027/u0027)); return false;">Import from a Mod</a>`);
    }
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027import_set_direct/u0027, String((s as any).cs_new_index ?? /u0027/u0027)); return false;">Import directly</a>`);
  } else {
    scene.text('You cannot add more sets.');
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027main\u0027); return false;"><b>Go Back</b></a>');
  }
  (s as any).cs_new_index = undefined;
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_end') || ''));
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    (st as any).klsetask = undefined;
    qspCall(st, 'cheatmenu_bisets', '');
  } },
  ]);
  scene.build();
}

function enterImportSetDirect(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_import_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_import_text = window.prompt("Copy the exported text here:") ?? '';
  if (((s as any).temp_import_text ?? 0) !== '') {
    (s as any).temp_conform_text = window.prompt("Do you want to continue? (y/n)") ?? '';
    if ((String((String(((s as any).temp_conform_text ?? 0)).toLowerCase())).slice((1)-1, ((1)-1)+(1))) === 'y') {
      qspFunc(s, 'temp_import_text');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).cmbs_import_set ?? 0)]; enterImportCustomSet(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  (s as any).temp_conform_text = undefined;
  (s as any).temp_import_text = undefined;
  (s as any).cmbs_import_set = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterImportSetMod(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_import_set = ((s as any).locArgs?.[1] ?? 0);
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_start') || ''));
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027cheatmenu_bisets\u0027, \u0027main\u0027); return false;">Go Back</a>');
  scene.text('Select a mod from which you want to try and import an image set.');
  (s as any).mod_i = 0;
  do {
    if (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] !== '') {
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027import_set_mod2/u0027, String((s as any).cmbs_import_set ?? /u0027/u0027)); return false;">${(((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] ?? '')}</a>`);
    }
    (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
    (s as any).mod_i = undefined;
    scene.text(String(qspFunc(s, 'cheatmenu', 'table_end') || ''));
  } while (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length);
  scene.build();
}

function enterImportSetMod2(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_import_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).cmbs_mod_name = ((s as any).locArgs?.[2] ?? 0);
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_start') || ''));
  (s as any).fix_bod_set = undefined;
  qspCall(s, 'mod_' + ((s as any).cmbs_mod_name ?? 0) + '', 'import_body_set');
  if (Object.keys((s as any).fix_bod_set ?? {}).length > 0) {
    scene.text('Image set found.');
    scene.text(`Folder: ${(((s as any).fix_bod_set ?? 0)?.['Folder'] ?? '')}`);
    if (((s as any).fix_bod_set ?? 0)?.['Name'] !== '') {
      scene.text(`Name: ${(((s as any).fix_bod_set ?? 0)?.['Name'] ?? '')}`);
    }
    if (((s as any).fix_bod_set ?? 0)?.['Path'] !== '') {
      scene.text(`Path: ${(((s as any).fix_bod_set ?? 0)?.['Path'] ?? '')}`);
    }
    (s as any).temp_conform_text = window.prompt("Do you want to continue? (y/n)") ?? '';
    if ((String((String(((s as any).temp_conform_text ?? 0)).toLowerCase())).slice((1)-1, ((1)-1)+(1))) === 'y') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).cmbs_import_set ?? 0)]; enterImportCustomSet(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_end') || ''));
  (s as any).temp_conform_text = undefined;
  (s as any).fix_bod_set = undefined;
  (s as any).cmbs_import_set = undefined;
  (s as any).cmbs_mod_name = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterImportCustomSet(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_start_str = 'fix_biset_' + ((s as any).locArgs?.[1] ?? 0) + '_';
  ((s as any).cheatVars = (s as any).cheatVars ?? {})[((s as any).temp_start_str ?? 0) + 'advanced'] = (((s as any).fix_bod_set ?? 0)?.['advanced']);
  ((s as any).cheatVars = (s as any).cheatVars ?? {})[((s as any).temp_start_str ?? 0) + 'folder'] = (((s as any).fix_bod_set ?? 0)?.['folder']);
  ((s as any).cheatVars = (s as any).cheatVars ?? {})[((s as any).temp_start_str ?? 0) + 'path'] = (((s as any).fix_bod_set ?? 0)?.['path']);
  ((s as any).cheatVars = (s as any).cheatVars ?? {})[((s as any).temp_start_str ?? 0) + 'name'] = (((s as any).fix_bod_set ?? 0)?.['name']);
  (s as any).cmd_imp_i = 0;
  do {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})[((s as any).temp_start_str ?? 0) + 'img_' + ((s as any).cmd_imp_i ?? 0) + ''] = (((s as any).fix_bod_set ?? 0)?.['img_' + String(((s as any).cmd_imp_i ?? 0))]);
    ((s as any).cheatVars = (s as any).cheatVars ?? {})[((s as any).temp_start_str ?? 0) + 'desc_' + ((s as any).cmd_imp_i ?? 0) + ''] = (((s as any).fix_bod_set ?? 0)?.['desc_' + String(((s as any).cmd_imp_i ?? 0))]);
    (s as any).cmd_imp_i = ((s as any).cmd_imp_i ?? 0) + (1);
    if (((s as any).fix_bod_set ?? 0)?.['imgnums_0000'] > 0) {
      (s as any).cmd_exp_bmi = 0;
      do {
        (s as any).cmd_exp_stren = 0;
        do {
          (s as any).cmd_class_str = (String(10000 + ((s as any).cmd_exp_bmi ?? 0) * 100 + ((s as any).cmd_exp_stren ?? 0)).slice((2)-1));
          ((s as any).cheatVars = (s as any).cheatVars ?? {})[((s as any).temp_start_str ?? 0) + 'desc_' + ((s as any).cmd_class_str ?? 0) + ''] = (((s as any).fix_bod_set ?? 0)?.['desc_' + String(((s as any).cmd_class_str ?? 0))]);
          ((s as any).cheatVars = (s as any).cheatVars ?? {})[((s as any).temp_start_str ?? 0) + 'path_' + ((s as any).cmd_class_str ?? 0) + ''] = (((s as any).fix_bod_set ?? 0)?.['path_' + String(((s as any).cmd_class_str ?? 0))]);
          (s as any).cmd_imgnums = (((s as any).fix_bod_set ?? 0)?.['imgnums_' + String(((s as any).cmd_class_str ?? 0))]);
          ((s as any).cheatVars = (s as any).cheatVars ?? {})[((s as any).temp_start_str ?? 0) + 'imgnums_' + ((s as any).cmd_class_str ?? 0) + ''] = ((s as any).cmd_imgnums ?? 0);
          (s as any).cmd_exp_i = 0;
          do {
            ((s as any).cheatVars = (s as any).cheatVars ?? {})[((s as any).temp_start_str ?? 0) + 'img_' + ((s as any).cmd_class_str ?? 0) + '_' + ((s as any).cmd_exp_i ?? 0) + ''] = (((s as any).fix_bod_set ?? 0)?.['img_' + String(((s as any).cmd_class_str ?? 0)) + '_' + String(((s as any).cmd_exp_i ?? 0))]);
            (s as any).cmd_exp_i = ((s as any).cmd_exp_i ?? 0) + (1);
            (s as any).cmd_exp_stren = ((s as any).cmd_exp_stren ?? 0) + (1);
            (s as any).cmd_exp_bmi = ((s as any).cmd_exp_bmi ?? 0) + (1);
          } while (((s as any).cmd_exp_i ?? 0) < ((s as any).cmd_imgnums ?? 0));
        } while (((s as any).cmd_exp_stren ?? 0) < 18);
      } while (((s as any).cmd_exp_bmi ?? 0) < 9);
    }
    (s as any).fix_bod_set = undefined;
    (s as any).temp_start_str = undefined;
  } while (((s as any).cmd_imp_i ?? 0) < 9);
  scene.build();
}

function enterCsSetSimple(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_advanced'] = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterCsSetAdvanced(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)['fix_biset_' + (String((s as any).locArgs?.[1] ?? '')) + '_imgnums_0000'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCsInitAdvanced(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_advanced'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterCsInitAdvanced(s: GameState, scene: SceneBuilder): void {
  (s as any).cmd_adv_bmi_i = 0;
  do {
    (s as any).cmd_adv_str_i = 0;
    do {
      (s as any).cmd_bs_class = ((s as any).cmd_adv_bmi_i ?? 0) * 100 + ((s as any).cmd_adv_str_i ?? 0);
      (s as any).cmd_bs_class_str = (String(10000 + ((s as any).cmd_bs_class ?? 0)).slice((2)-1));
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_imgnums_' + String(((s as any).cmd_bs_class_str ?? 0))] = 1;
      (s as any).cmd_adv_str_i = ((s as any).cmd_adv_str_i ?? 0) + (1);
      (s as any).cmd_adv_bmi_i = ((s as any).cmd_adv_bmi_i ?? 0) + (1);
      (s as any).cmd_bs_class = undefined;
      (s as any).cmd_bs_class_str = undefined;
      (s as any).cmd_adv_bmi_i = undefined;
      (s as any).cmd_adv_str_i = undefined;
    } while (((s as any).cmd_adv_str_i ?? 0) < 18);
  } while (((s as any).cmd_adv_bmi_i ?? 0) < 9);
  scene.build();
}

function enterCsChangeName(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).cmd_temp_input = window.prompt("Set name") ?? '';
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_name'] = ((s as any).cmd_temp_input ?? 0);
  }
  (s as any).cmd_temp_input = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_set = undefined;
  scene.build();
}

function enterCsChangeFolder(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).cmd_temp_input = window.prompt("Folder name") ?? '';
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_folder'] = ((s as any).cmd_temp_input ?? 0);
  }
  (s as any).cmd_temp_input = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_set = undefined;
  scene.build();
}

function enterCsChangePath(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).cmd_temp_input = window.prompt("Input path (i.e. images/pc/shape)") ?? '';
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_path'] = ((s as any).cmd_temp_input ?? 0);
  }
  (s as any).cmd_temp_input = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_set = undefined;
  scene.build();
}

function enterCsChangeDesc(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).cmd_temp_input = window.prompt("Enter a new descriptor") ?? '';
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_desc_' + String(((s as any).temp_class ?? 0))] = ((s as any).cmd_temp_input ?? 0);
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] === ((s as any).temp_set ?? 0)) {
      qspCall(s, 'body', 'UpdateBodyImage');
    }
  }
  (s as any).cmd_temp_input = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_set = undefined;
  scene.build();
}

function enterCsChangeDescAdv(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  (s as any).cmd_temp_input = window.prompt("Enter a new descriptor") ?? '';
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_desc_' + String(((s as any).temp_class_str ?? 0))] = ((s as any).cmd_temp_input ?? 0);
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] === ((s as any).temp_set ?? 0)) {
      qspCall(s, 'body', 'UpdateBodyImage');
    }
  }
  (s as any).cmd_temp_input = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0)]; enterCsMainAdvanced2(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_set = undefined;
  (s as any).temp_class = undefined;
  (s as any).temp_class_str = undefined;
  scene.build();
}

function enterCsChangeSubpath(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  (s as any).cmd_temp_input = window.prompt("Input subpath (i.e. 0_starving)") ?? '';
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_path_' + String(((s as any).temp_class_str ?? 0))] = ((s as any).cmd_temp_input ?? 0);
  }
  (s as any).cmd_temp_input = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0)]; enterCsMainAdvanced2(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_set = undefined;
  (s as any).temp_class = undefined;
  (s as any).temp_class_str = undefined;
  scene.build();
}

function enterCsChangePregSubpath(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).preg_set = ((s as any).locArgs?.[2] ?? 0);
  (s as any).cmd_temp_input = window.prompt("Input subpath (i.e. 0_starving)") ?? '';
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_pregpath_' + String(((s as any).preg_set ?? 0))] = ((s as any).cmd_temp_input ?? 0);
  }
  (s as any).cmd_temp_input = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0), ((s as any).preg_set ?? 0)]; enterGetPregsetLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_set = undefined;
  (s as any).preg_set = undefined;
  scene.build();
}

function enterCsChangeImg(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).cmd_temp_input = window.prompt("Enter a new image name (Leave empty to not change the image. Example: 1). Exclude the '.jpg'") ?? '';
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    if ((String(((s as any).cmd_temp_input ?? 0)).slice(((String(((s as any).cmd_temp_input ?? 0)).length)-3)-1)) === '.jpg') {
      (s as any).cmd_temp_input = (String(((s as any).cmd_temp_input ?? 0)).slice((1)-1, ((1)-1)+((String(((s as any).cmd_temp_input ?? 0)).length)-4)));
    }
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_img_' + String(((s as any).temp_class ?? 0))] = ((s as any).cmd_temp_input ?? 0);
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] === ((s as any).temp_set ?? 0)) {
      qspCall(s, 'body', 'UpdateBodyImage');
    }
  }
  (s as any).cmd_temp_input = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_set = undefined;
  (s as any).temp_class = undefined;
  scene.build();
}

function enterCsChangeImgAdv(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_img_num = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  (s as any).cmd_temp_input = window.prompt("Enter a new image name (Leave empty to not change the image. Example: 1). Exclude the '.jpg'") ?? '';
  if (((s as any).cmd_temp_input ?? 0) !== '') {
    if ((String(((s as any).cmd_temp_input ?? 0)).slice(((String(((s as any).cmd_temp_input ?? 0)).length)-3)-1)) === '.jpg') {
      (s as any).cmd_temp_input = (String(((s as any).cmd_temp_input ?? 0)).slice((1)-1, ((1)-1)+((String(((s as any).cmd_temp_input ?? 0)).length)-4)));
    }
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_img_' + String(((s as any).temp_class_str ?? 0)) + '_' + String(((s as any).temp_img_num ?? 0))] = ((s as any).cmd_temp_input ?? 0);
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] === ((s as any).temp_set ?? 0)) {
      qspCall(s, 'body', 'UpdateBodyImage');
    }
  }
  (s as any).cmd_temp_input = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0)]; enterCsMainAdvanced2(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_set = undefined;
  (s as any).temp_class = undefined;
  (s as any).temp_img_num = undefined;
  (s as any).temp_class_str = undefined;
  scene.build();
}

function enterCsAddImg(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  (s as any).cmd_temp_input = window.prompt("Enter a new image name (Leave empty to use default image. Example: 1). Exclude the '.jpg'") ?? '';
  if ((String(((s as any).cmd_temp_input ?? 0)).slice(((String(((s as any).cmd_temp_input ?? 0)).length)-3)-1)) === '.jpg') {
    (s as any).cmd_temp_input = (String(((s as any).cmd_temp_input ?? 0)).slice((1)-1, ((1)-1)+((String(((s as any).cmd_temp_input ?? 0)).length)-4)));
  }
  (s as any).temp_new_img_index = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_imgnums_' + String(((s as any).temp_class_str ?? 0))]);
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_imgnums_' + String(((s as any).temp_class_str ?? 0))] = ((s as any).cheatVars['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_imgnums_' + String(((s as any).temp_class_str ?? 0))] ?? 0) + (1);
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_img_' + String(((s as any).temp_class_str ?? 0)) + '_' + String(((s as any).temp_new_img_index ?? 0))] = ((s as any).cmd_temp_input ?? 0);
  if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] === ((s as any).temp_set ?? 0)) {
    qspCall(s, 'body', 'UpdateBodyImage');
  }
  (s as any).temp_new_img_index = undefined;
  (s as any).cmd_temp_input = undefined;
  (s as any).temp_class_str = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0)]; enterCsMainAdvanced2(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_set = undefined;
  (s as any).temp_class = undefined;
  scene.build();
}

function enterCsRemoveImg(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_set = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_class = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_img_num = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_class_str = (String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1));
  if (((s as any).temp_img_num ?? 0) < ((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).temp_set ?? 0)) + '_imgnums_' + (((s as any).temp_class_str ?? 0))]  &&  ((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).temp_set ?? 0)) + '_imgnums_' + (((s as any).temp_class_str ?? 0))] > 1) {
    (s as any).cmd_new_index = ((s as any).temp_img_num ?? 0);
    while (true) {
      if (((s as any).cmd_new_index ?? 0) + 1 < ((s as any).cheatVars ?? 0)['fix_biset_' + (((s as any).temp_set ?? 0)) + '_imgnums_' + (((s as any).temp_class_str ?? 0))]) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_img_' + String(((s as any).temp_class_str ?? 0)) + '_' + String(((s as any).cmd_new_index ?? 0))] = (((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_img_' + String(((s as any).temp_class_str ?? 0)) + '_' + String(((s as any).cmd_new_index ?? 0)+1)]);
        (s as any).cmd_new_index = ((s as any).cmd_new_index ?? 0) + (1);
        break;
      }
      qspCall(s, 'array', 'remove_element', '$cheatVars', 'fix_biset_' + ((s as any).temp_set ?? 0) + '_img_' + ((s as any).temp_class_str ?? 0) + '_' + ((s as any).cmd_new_index ?? 0) + '');
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_imgnums_' + String(((s as any).temp_class_str ?? 0))] = ((s as any).cheatVars['fix_biset_' + String(((s as any).temp_set ?? 0)) + '_imgnums_' + String(((s as any).temp_class_str ?? 0))] ?? 0) - (1);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_set ?? 0), ((s as any).temp_class ?? 0)]; enterCsMainAdvanced2(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_set = undefined;
  (s as any).temp_class = undefined;
  (s as any).temp_img_num = undefined;
  scene.build();
}

function enterCsSetDefaultImg(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_img_' + String((String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1)))] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterCsSetDefaultImgAdv(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_img_' + String((String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1))) + '_' + String(((s as any).locArgs?.[3] ?? 0))] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterCsMainAdvanced2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterCsSetDefaultDesc(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_desc_' + String((String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1)))] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCsMain(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterCsSetDefaultDescAdv(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_desc_' + String((String(10000 + ((s as any).locArgs?.[2] ?? 0)).slice((2)-1)))] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterCsMainAdvanced2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterCsDeleteSet(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Body Image Set Removal</b></center>');
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_start') || ''));
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: killvar /u0027klsetask/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_main/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;"><b>Go Back</b></a>`);
  scene.text('This is where you remove a body image set from use, please note it does not delete anything, it just clears the custom set from this game instance/save.');
  if (((s as any).klsetask ?? 0) === 1) {
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.klsetask = s.2; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_delete_set/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;"><b>Are you sure you want to remove set ${(((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_folder'] ?? '')}?</b></a>`);
  } else {
    if (((s as any).klsetask ?? 0) === 2) {
      if (((s as any).cheatVars ?? 0)?.['fix_bodyimg'] === 1  &&  ((s as any).cheatVars ?? 0)?.['fix_bi_set'] === String((s as any).locArgs?.[1] ?? '')) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bodyimg'] = 0;
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 0;
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCsDeleteSet2(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).klsetask = undefined;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMain(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.klsetask = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_bisets/u0027, /u0027cs_delete_set/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;">Remove set ${(((s as any).cheatVars ?? 0)?.['fix_biset_' + String(((s as any).locArgs?.[1] ?? 0)) + '_folder'] ?? '')}?</a>`);
    }
  }
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_end') || ''));
  scene.build();
}

function enterCsDeleteSet2(s: GameState, scene: SceneBuilder): void {
  (s as any).cmbs_text = 'fix_biset_' + ((s as any).locArgs?.[1] ?? 0) + '_';
  (s as any).cmbs_bmi_i = 0;
  do {
    qspCall(s, 'array', 'remove_element', 'cheatVars', ((s as any).cmbs_text ?? 0) + 'img_' + ((s as any).cmbs_i ?? 0) + '');
    qspCall(s, 'array', 'remove_element', 'cheatVars', ((s as any).cmbs_text ?? 0) + 'desc_' + ((s as any).cmbs_i ?? 0) + '');
    (s as any).cmbs_i = ((s as any).cmbs_i ?? 0) + (1);
    (s as any).cmbs_bmi = 0;
    do {
      (s as any).cmbs_stren = 0;
      do {
        (s as any).cmbs_class_str = (String(10000 + ((s as any).cmbs_bmi ?? 0) * 100 + ((s as any).cmbs_stren ?? 0)).slice((2)-1));
        qspCall(s, 'array', 'remove_element', 'cheatVars', ((s as any).cmbs_text ?? 0) + 'desc_' + ((s as any).cmbs_class_str ?? 0) + '');
        qspCall(s, 'array', 'remove_element', 'cheatVars', ((s as any).cmbs_text ?? 0) + 'path_' + ((s as any).cmbs_class_str ?? 0) + '');
        (s as any).cmbs_i = 0;
        do {
          qspCall(s, 'array', 'remove_element', 'cheatVars', ((s as any).cmbs_text ?? 0) + 'img_' + ((s as any).cmbs_class_str ?? 0) + '_' + ((s as any).cmbs_i ?? 0) + '');
          (s as any).cmbs_i = ((s as any).cmbs_i ?? 0) + (1);
          qspCall(s, 'array', 'remove_element', 'cheatVars', ((s as any).cmbs_text ?? 0) + 'imgnums_' + ((s as any).cmbs_class_str ?? 0) + '');
          (s as any).cmbs_stren = ((s as any).cmbs_stren ?? 0) + (1);
          (s as any).cmbs_bmi = ((s as any).cmbs_bmi ?? 0) + (1);
          qspCall(s, 'array', 'remove_element', 'cheatVars', ((s as any).cmbs_text ?? 0) + 'folder');
          qspCall(s, 'array', 'remove_element', 'cheatVars', ((s as any).cmbs_text ?? 0) + 'path');
          qspCall(s, 'array', 'remove_element', 'cheatVars', ((s as any).cmbs_text ?? 0) + 'name');
          (s as any).cmbs_bmi = undefined;
          (s as any).cmbs_stren = undefined;
          (s as any).cmbs_i = undefined;
          (s as any).cmbs_class_str = undefined;
          (s as any).cmbs_text = undefined;
        } while (((s as any).cmbs_i ?? 0) < ((s as any).cheatVars ?? 0)[((s as any).cmbs_text ?? 0) + 'imgnums_' + (((s as any).cmbs_class_str ?? 0))]);
      } while (((s as any).cmbs_stren ?? 0) < 18);
    } while (((s as any).cmbs_bmi ?? 0) < 9);
  } while (((s as any).cmbs_i ?? 0) < 9);
  scene.build();
}

function enterCsGetDefaultImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)['fix_biset_' + (String((s as any).locArgs?.[1] ?? '')) + '_advanced'] === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).ARGS[2] ?? 0) * (100);
  }
  (s as any).result = qspFunc(s, 'body_structure', 'body_img_from_class', ((s as any).locArgs?.[2] ?? 0));
  scene.build();
}

function enterCsGetDefaultDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)['fix_biset_' + (String((s as any).locArgs?.[1] ?? '')) + '_advanced'] === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).ARGS[2] ?? 0) * (100);
  }
  (s as any).result = qspFunc(s, 'body_structure', 'body_desc_from_class', ((s as any).locArgs?.[2] ?? 0));
  scene.build();
}

function enterCsGetDefaultSubpath(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'body_structure', 'body_img_path_from_class', ((s as any).locArgs?.[2] ?? 0));
  scene.build();
}

function enterModsHowTo(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_start') || ''));
  scene.text('How do you add the option to import an image set to a mod?');
  scene.text('It\'s fairly simple:');
  scene.text('    1. Build the image set in game, using the correct folders, names, paths, etc.');
  scene.text('    2. Click on the "Export Image Set" button.');
  scene.text('    3. Copy the displayed code.');
  scene.text('    4. When the main mod\'s location (\'mod_name\') is called with $ARGS[0] = \'import_body_set\' execute that code.');
  scene.text(String(qspFunc(s, 'cheatmenu', 'table_end') || ''));
  scene.actions([
    { label: 'Go Back', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', '');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['table_start'] = '<center><table width="80%" cellspacing="0" cellpadding="20" valign="top"><tr><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['table_second'] = '</td><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['table_end'] = '</td></tr></table></center>';
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
